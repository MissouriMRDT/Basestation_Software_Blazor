using System.Diagnostics;
using System.Net;
using System.Net.Sockets;
using Basestation_Software.Models.RoveComm;

namespace Basestation_Software.Web.Core.Services.RoveComm;

public class RoveCommUDP : IDisposable
{
    public bool Running { get; private set; }
    public int Port { get; private set; }
    private UdpClient? _UDPServer;

    private readonly ILogger? _logger;

    private class RoveCommEmitter<T>
    {
        public event RoveCommCallback<T>? Notifier;
        public void Invoke(RoveCommPacket<T> packet) => Notifier?.Invoke(packet.Data);
    }

    private readonly Dictionary<int, RoveCommEmitter<sbyte>> _callbacksInt8 = [];
    private readonly Dictionary<int, RoveCommEmitter<byte>> _callbacksUInt8 = [];
    private readonly Dictionary<int, RoveCommEmitter<short>> _callbacksInt16 = [];
    private readonly Dictionary<int, RoveCommEmitter<ushort>> _callbacksUInt16 = [];
    private readonly Dictionary<int, RoveCommEmitter<int>> _callbacksInt32 = [];
    private readonly Dictionary<int, RoveCommEmitter<uint>> _callbacksUInt32 = [];
    private readonly Dictionary<int, RoveCommEmitter<float>> _callbacksFloat = [];
    private readonly Dictionary<int, RoveCommEmitter<double>> _callbacksDouble = [];
    private readonly Dictionary<int, RoveCommEmitter<char>> _callbacksChar = [];

    public RoveCommUDP(int port, ILogger? logger = null)
    {
        Port = port;
        _logger = logger;
    }
    public RoveCommUDP(ILogger? logger = null) : this(RoveCommConsts.UDPPort, logger) { }

    /// <summary>
    /// Begin accepting UDP connections and reading packets from the network.
    /// </summary>
    public void Begin(CancellationToken cancelToken)
    {
        if (Running)
        {
            _logger?.LogWarning("RoveComm UDP already started.");
            return;
        }

        // Open new UDP socket.
        _logger?.LogInformation("Starting RoveComm UDP on port {Port}.", Port);
        Task.Run(async () =>
        {
            try
            {
                _UDPServer = new UdpClient(Port, AddressFamily.InterNetwork);
                // int localPort = (_UDPServer!.Client.LocalEndPoint as IPEndPoint)!.Port;
                Running = true;
                while (!cancelToken.IsCancellationRequested)
                {
                    // Read packets and trigger callbacks.
                    await ReceiveAndCallback(cancelToken);
                    // Don't hog the async queue.
                    await Task.Delay(RoveCommConsts.UpdateRate);
                }
            }
            catch (Exception e)
            {
                _logger?.LogError(e, "An exception occurred in RoveComm UDP:");
            }
            finally
            {
                // Close UDP socket.
                Stop();
            }
        }, cancelToken);
    }

    public void Stop()
    {
        if (!Running)
        {
            _logger?.LogWarning("RoveComm UDP already stopped.");
            return;
        }

        Running = false;
        // Close UDP socket;
        try
        {
            _UDPServer!.Close();
        }
        catch (Exception e)
        {
            _logger?.LogError(e, "Something went wrong closing RoveComm UDP:");
            return;
        }
        _UDPServer = null;
        _logger?.LogInformation("Closed RoveComm UDP.");
    }

    /// <summary>
    /// Send a RoveCommPacket to the given IP and port.
    /// </summary>
    /// <param name="packet">The RoveCommPacket to send.</param>
    /// <param name="ip">The IP to send to.</param>
    /// <param name="port">The port to send to.</param>
    /// <returns>True if the packet was sent successfully.</returns>
    /// <seealso cref="SendAsync"/>
    public bool Send<T>(RoveCommPacket<T> packet, string ip, int port)
    {
        if (!Running)
        {
            throw new RoveCommException("Failed to send UDP packet: RoveComm UDP not started.");
        }

        var dest = new IPEndPoint(IPAddress.Parse(ip), port);
        try
        {
            int bytesSent = _UDPServer!.Send(RoveCommUtils.PackPacket(packet), dest);
            int expected = RoveCommConsts.HeaderSize + packet.DataCount * RoveCommUtils.DataTypeSize(packet.DataType);
            if (bytesSent != expected)
            {
                _logger?.LogError("Failed to send UDP packet: {Sent} of {Expected} bytes sent.", bytesSent, expected);
                return false;
            }
        }
        catch (Exception e)
        {
            _logger?.LogError(e, "Failed to send UDP packet:");
            return false;
        }

        _logger?.LogInformation("UDP: Sent RoveCommPacket with DataID {DataID} and Data {DataType}[{DataCount}] to {Dest}.", packet.DataID, packet.DataType, packet.DataCount, dest);
        return true;
    }
    public bool Send<T>(RoveCommPacket<T> packet, string ip) => Send(packet, ip, Port);

    /// <summary>
    /// Send a RoveCommPacket to the given IP and port asynchronously.
    /// </summary>
    /// <param name="packet">The RoveCommPacket to send.</param>
    /// <param name="ip">The IP to send to.</param>
    /// <param name="port">The port to send to.</param>
    /// <returns>True if the packet was sent successfully.</returns>
    /// <seealso cref="Send"/>
    public async Task<bool> SendAsync<T>(RoveCommPacket<T> packet, string ip, int port, CancellationToken cancelToken = default)
    {
        if (!Running)
        {
            throw new RoveCommException("Failed to send UDP packet: RoveComm UDP not started.");
        }

        var dest = new IPEndPoint(IPAddress.Parse(ip), port);
        try
        {
            int bytesSent = await _UDPServer!.SendAsync(RoveCommUtils.PackPacket(packet), dest, cancelToken);
            int expected = RoveCommConsts.HeaderSize + packet.DataCount * RoveCommUtils.DataTypeSize(packet.DataType);
            if (bytesSent != expected)
            {
                _logger?.LogError("Failed to send UDP packet: {Sent} of {Expected} bytes sent.", bytesSent, expected);
                return false;
            }
        }
        catch (Exception e)
        {
            _logger?.LogError(e, "Failed to send UDP packet:");
            return false;
        }

        _logger?.LogInformation("UDP: Sent RoveCommPacket with DataID {DataID} and Data {DataType}[{DataCount}] to {Dest}.", packet.DataID, packet.DataType, packet.DataCount, dest);
        return true;
    }
    public async Task<bool> SendAsync<T>(RoveCommPacket<T> packet, string ip, CancellationToken cancelToken = default) =>
        await SendAsync(packet, ip, Port, cancelToken);

    /// <summary>
    /// Internal method for reading packets off the network and triggering attached callbacks.
    /// </summary>
    public async Task ReceiveAndCallback(CancellationToken cancelToken)
    {
        if (!Running)
        {
            throw new RoveCommException("Failed to read UDP packet: RoveComm UDP not started.");
        }

        try
        {
            // We still want to process datagrams which are too small to parse; we just discard them.
            if (_UDPServer!.Available == 0)
            {
                return;
            }

            var result = await _UDPServer!.ReceiveAsync(cancelToken);
            IPEndPoint fromIP = result.RemoteEndPoint;
            byte[] data = result.Buffer;
            // If there aren't enough bytes to parse the header, the error will be caught and logged.
            RoveCommHeader header = RoveCommUtils.ParseHeader(data);
            RoveCommDataType dataType = RoveCommUtils.ParseDataType(header.DataType);
            switch (dataType)
            {
                case RoveCommDataType.INT8_T: ProcessPacket(RoveCommUtils.ParsePacket<sbyte>(data)); break;
                case RoveCommDataType.UINT8_T: ProcessPacket(RoveCommUtils.ParsePacket<byte>(data)); break;
                case RoveCommDataType.INT16_T: ProcessPacket(RoveCommUtils.ParsePacket<short>(data)); break;
                case RoveCommDataType.UINT16_T: ProcessPacket(RoveCommUtils.ParsePacket<ushort>(data)); break;
                case RoveCommDataType.INT32_T: ProcessPacket(RoveCommUtils.ParsePacket<int>(data)); break;
                case RoveCommDataType.UINT32_T: ProcessPacket(RoveCommUtils.ParsePacket<uint>(data)); break;
                case RoveCommDataType.FLOAT: ProcessPacket(RoveCommUtils.ParsePacket<float>(data)); break;
                case RoveCommDataType.DOUBLE: ProcessPacket(RoveCommUtils.ParsePacket<double>(data)); break;
                case RoveCommDataType.CHAR: ProcessPacket(RoveCommUtils.ParsePacket<char>(data)); break;
            }
            _logger?.LogInformation("UDP: Received RoveCommPacket with DataID {DataID} and Data {DataType}[{DataCount}] from {Remote}.", header.DataID, dataType, header.DataCount, fromIP);
        }
        // RoveComm couldn't parse something:
        catch (RoveCommException e)
        {
            _logger?.LogError("Failed to read UDP packet: {Error}", e.Message);
        }
        // Network problems:
        catch (Exception e)
        {
            _logger?.LogError(e, "Failed to receive UDP data:");
        }
    }

    /// <summary>
    /// Trigger attached callbacks for the given RoveCommPacket.
    /// </summary>
    /// <param name="packet">The RoveCommPacket to pass to the callbacks.</param>
    /// <exception cref="RoveCommException">Thrown if the type was invalid.</exception>
    public void ProcessPacket<T>(RoveCommPacket<T> packet)
    {
        switch (packet)
        {
            case RoveCommPacket<sbyte> p: _processPacket(_callbacksInt8, p); break;
            case RoveCommPacket<byte> p: _processPacket(_callbacksUInt8, p); break;
            case RoveCommPacket<short> p: _processPacket(_callbacksInt16, p); break;
            case RoveCommPacket<ushort> p: _processPacket(_callbacksUInt16, p); break;
            case RoveCommPacket<int> p: _processPacket(_callbacksInt32, p); break;
            case RoveCommPacket<uint> p: _processPacket(_callbacksUInt32, p); break;
            case RoveCommPacket<float> p: _processPacket(_callbacksFloat, p); break;
            case RoveCommPacket<double> p: _processPacket(_callbacksDouble, p); break;
            case RoveCommPacket<char> p: _processPacket(_callbacksChar, p); break;
            default: throw new RoveCommException("Failed to process RoveCommPacket: invalid data type.");
        }
    }
    private void _processPacket<T>(Dictionary<int, RoveCommEmitter<T>> callbacks, RoveCommPacket<T> packet)
    {
        if (callbacks.ContainsKey(packet.DataID))
        {
            callbacks[packet.DataID].Invoke(packet);
        }
        // Data ID 0 means subscribe to all packets.
        if (callbacks.ContainsKey(0))
        {
            callbacks[0].Invoke(packet);
        }
    }

    /// <summary>
    /// Attach the given callback to be triggered when a RoveCommPacket with the given DataID is received.
    /// </summary>
    /// <param name="dataId">The DataID to listen for.</param>
    /// <param name="handler">The function to call when the DataID is received.</param>
    /// <exception cref="RoveCommException">Thrown if the type was invalid.</exception>
    public void On<T>(int dataId, RoveCommCallback<T> handler)
    {
        switch (handler)
        {
            case RoveCommCallback<sbyte> h: _addCallback(_callbacksInt8, dataId, h); break;
            case RoveCommCallback<byte> h: _addCallback(_callbacksUInt8, dataId, h); break;
            case RoveCommCallback<short> h: _addCallback(_callbacksInt16, dataId, h); break;
            case RoveCommCallback<ushort> h: _addCallback(_callbacksUInt16, dataId, h); break;
            case RoveCommCallback<int> h: _addCallback(_callbacksInt32, dataId, h); break;
            case RoveCommCallback<uint> h: _addCallback(_callbacksUInt32, dataId, h); break;
            case RoveCommCallback<float> h: _addCallback(_callbacksFloat, dataId, h); break;
            case RoveCommCallback<double> h: _addCallback(_callbacksDouble, dataId, h); break;
            case RoveCommCallback<char> h: _addCallback(_callbacksChar, dataId, h); break;
            default: throw new RoveCommException("Failed to add callback: invalid data type.");
        }
    }
    private void _addCallback<T>(Dictionary<int, RoveCommEmitter<T>> callbacks, int dataId, RoveCommCallback<T> handler)
    {
        if (!callbacks.ContainsKey(dataId))
        {
            callbacks.Add(dataId, new RoveCommEmitter<T>());
        }

        callbacks[dataId].Notifier += handler;
    }


    /// <summary>
    /// Clear the given callback from all DataID's.
    /// </summary>
    /// <param name="handler">The callback to remove.</param>
    /// <exception cref="Exception">Thrown if the type was invalid.</exception>
    public void Clear<T>(RoveCommCallback<T> handler)
    {
        switch (handler)
        {
            case RoveCommCallback<sbyte> h: _clearCallback(_callbacksInt8, h); break;
            case RoveCommCallback<byte> h: _clearCallback(_callbacksUInt8, h); break;
            case RoveCommCallback<short> h: _clearCallback(_callbacksInt16, h); break;
            case RoveCommCallback<ushort> h: _clearCallback(_callbacksUInt16, h); break;
            case RoveCommCallback<int> h: _clearCallback(_callbacksInt32, h); break;
            case RoveCommCallback<uint> h: _clearCallback(_callbacksUInt32, h); break;
            case RoveCommCallback<float> h: _clearCallback(_callbacksFloat, h); break;
            case RoveCommCallback<double> h: _clearCallback(_callbacksDouble, h); break;
            case RoveCommCallback<char> h: _clearCallback(_callbacksChar, h); break;
            default: throw new RoveCommException("Failed to add callback: invalid data type.");
        }
    }
    private void _clearCallback<T>(Dictionary<int, RoveCommEmitter<T>> callbacks, RoveCommCallback<T> handler)
    {
        foreach (var emitter in callbacks.Values)
        {
            emitter.Notifier -= handler;
        }
    }

    /// <summary>
    /// Clear the given callback from the given DataID.
    /// </summary>
    /// <param name="dataId">The DataID to remove the callback from.</param>
    /// <param name="handler">The callback to remove.</param>
    /// <exception cref="Exception">Thrown if the type was invalid.</exception>
    public void Clear<T>(int dataId, RoveCommCallback<T> handler)
    {
        switch (handler)
        {
            case RoveCommCallback<sbyte> h: _clearCallback(_callbacksInt8, dataId, h); break;
            case RoveCommCallback<byte> h: _clearCallback(_callbacksUInt8, dataId, h); break;
            case RoveCommCallback<short> h: _clearCallback(_callbacksInt16, dataId, h); break;
            case RoveCommCallback<ushort> h: _clearCallback(_callbacksUInt16, dataId, h); break;
            case RoveCommCallback<int> h: _clearCallback(_callbacksInt32, dataId, h); break;
            case RoveCommCallback<uint> h: _clearCallback(_callbacksUInt32, dataId, h); break;
            case RoveCommCallback<float> h: _clearCallback(_callbacksFloat, dataId, h); break;
            case RoveCommCallback<double> h: _clearCallback(_callbacksDouble, dataId, h); break;
            case RoveCommCallback<char> h: _clearCallback(_callbacksChar, dataId, h); break;
            default: throw new RoveCommException("Failed to add callback: invalid data type.");
        }
    }
    private void _clearCallback<T>(Dictionary<int, RoveCommEmitter<T>> callbacks, int dataId, RoveCommCallback<T> handler)
    {
        if (!callbacks.ContainsKey(dataId))
        {
            callbacks[dataId].Notifier -= handler;
        }
    }

    public void Dispose()
    {
        Stop();
    }
}