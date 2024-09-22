using System.Net;
using System.Net.Sockets;
using Basestation_Software.Models.RoveComm;

namespace Basestation_Software.Web.Core.Services.RoveComm;

public class RoveCommTCP
{
    public bool Running { get; private set; }
    public int Port { get; private set; }
    private readonly List<TcpClient> _connections = [];
    private TcpListener? _TCPServer;
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

    public RoveCommTCP(int port, ILogger? logger = null)
    {
        Port = port;
        _logger = logger;
    }
    public RoveCommTCP(ILogger? logger = null) : this(RoveCommConsts.TCPPort, logger) { }

    /// <summary>
    /// Begin accepting TCP connections and reading packets from the network.
    /// </summary>
    public void Begin(CancellationToken cancelToken)
    {
        if (Running)
        {
            _logger?.LogWarning("RoveComm TCP already started.");
            return;
        }
        // Begin listening for TCP connection requests. Allow up to 10 pending requests at once.
        _logger?.LogInformation("Starting RoveComm TCP on port {Port}.", Port);
        _TCPServer = new TcpListener(IPAddress.Any, Port);
        try
        {
            _TCPServer!.Start(10);
        }
        catch (Exception e)
        {
            _logger?.LogError(e, "Failed to start RoveComm TCP:");
            return;
        }
        Running = true;
        Task.Run(async () =>
        {
            try
            {
                while (!cancelToken.IsCancellationRequested)
                {
                    // Accept any incoming connections.
                    if (_TCPServer!.Pending())
                    {
                        TcpClient client = await _TCPServer!.AcceptTcpClientAsync(cancelToken);
                        _connections.Add(client);
                        _logger?.LogInformation("Accepted connection from {Remote}.", client.Client.RemoteEndPoint);
                    }
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
                // Close connections.
                Stop();
            }
        }, cancelToken);
    }

    /// <summary>
    /// Stop accepting TCP connections and reading packets from the network.
    /// </summary>
    public void Stop()
    {
        if (!Running)
        {
            _logger?.LogWarning("RoveComm TCP already stopped.");
            return;
        }

        Running = false;
        // Close all connections.
        foreach (var connection in _connections)
        {
            connection.Close();
        }
        _connections.Clear();
        // Close listening socket.
        try
        {
            _TCPServer!.Stop();
        }
        catch (Exception e)
        {
            _logger?.LogError(e, "Something went wrong closing RoveComm TCP:");
            return;
        }
        _logger?.LogInformation("Closed RoveComm TCP.");
    }

    // Find existing connection in conneciton list.
    private TcpClient? _findExisting(IPEndPoint remote)
    {
        foreach (var connection in _connections)
        {
            var connectionEp = connection.Client.RemoteEndPoint as IPEndPoint;
            if (connectionEp is null)
            {
                return null;
            }
            else if (connectionEp.Port == remote.Port && connectionEp.Address.Equals(remote.Address))
            {
                // _logger?.LogInformation("Found existing conneciton.");
                return connection;
            }
        }
        return null;
    }

    // Remove all connections that have disconnected.
    private void _removeDisconnectedClients()
    {
        _connections.RemoveAll(connection =>
        {
            if (!connection.Connected)
            {
                _logger?.LogInformation("Disconnected from {Remote}.", connection.Client.RemoteEndPoint as IPEndPoint);
                return true;
            }
            else
            {
                return false;
            }
        });
    }

    /// <summary>
    /// Send a RoveCommPacket to the given IP and port, guaranteeing delivery.
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
            throw new RoveCommException("Failed to send TCP packet: RoveComm TCP not started.");
        }

        _removeDisconnectedClients();

        var dest = new IPEndPoint(IPAddress.Parse(ip), port);
        // Check if there is already a connection with that endpoint.
        TcpClient? client = _findExisting(dest);

        // If no existing connection was found, open a new one.
        if (client is null)
        {
            try
            {
                _logger?.LogInformation("Attempting to establish a connection with {Dest}.", dest);
                client = new TcpClient(AddressFamily.InterNetwork);
                client.Connect(dest);
                _logger?.LogInformation("Established connection with {Remote}.", client.Client.RemoteEndPoint as IPEndPoint);
            }
            catch (Exception e)
            {
                _logger?.LogError(e, "Failed to connect to remote host:");
                return false;
            }
            _connections.Add(client);
        }
        // Write the packet to the client's NetworkStream.
        try
        {
            client.GetStream().Write(RoveCommUtils.PackPacket(packet));
        }
        catch (Exception e)
        {
            _logger?.LogError(e, "Failed to send TCP packet:");
            return false;
        }
        _logger?.LogInformation("TCP: Sent RoveCommPacket with DataID {DataID} and type {DataType}[{DataCount}] to {Dest}.", packet.DataID, packet.DataType, packet.DataCount, dest);
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
            throw new RoveCommException("Failed to send TCP packet: RoveComm TCP not started.");
        }

        _removeDisconnectedClients();

        var dest = new IPEndPoint(IPAddress.Parse(ip), port);
        // Check if there is already a connection with that endpoint.
        TcpClient? client = _findExisting(dest);
        // If no existing connection was found, open a new one.
        if (client is null)
        {
            try
            {
                client = new TcpClient(AddressFamily.InterNetwork);
                _logger?.LogInformation("Attempting to establish a connection with {Dest}.", dest);
                await client.ConnectAsync(dest);
                _logger?.LogInformation("Established connection with {Remote}.", client.Client.RemoteEndPoint as IPEndPoint);
            }
            catch (Exception e)
            {
                _logger?.LogError(e, "Failed to connect to remote host:");
                return false;
            }
            _connections.Add(client);
        }
        // Write the packet to the client's NetworkStream.
        try
        {
            await client.GetStream().WriteAsync(RoveCommUtils.PackPacket(packet), cancelToken);
        }
        catch (Exception e)
        {
            _logger?.LogError(e, "Failed to send TCP packet:");
            return false;
        }
        _logger?.LogInformation("TCP: Sent RoveCommPacket with DataID {DataID} and Data {DataType}[{DataCount}] to {Dest}.", packet.DataID, packet.DataType, packet.DataCount, dest);
        return true;
    }
    public async Task<bool> SendAsync<T>(RoveCommPacket<T> packet, string ip, CancellationToken cancelToken = default) =>
        await SendAsync(packet, ip, Port, cancelToken);

    /// <summary>
    /// Internal method for reading packets off the network and triggering attached callbacks.
    /// </summary>
    public async Task ReceiveAndCallback(CancellationToken cancelToken = default)
    {
        if (!Running)
        {
            throw new RoveCommException("Failed to read TCP packet: RoveComm TCP not started.");
        }

        _removeDisconnectedClients();

        foreach (var connection in _connections)
        {
            try
            {
                // Check if the client has enough bytes available to read a packet.
                // TCP is a stream protocol, so if not enough bytes are available now, more will come in later.
                if (connection.Client.Available < RoveCommConsts.HeaderSize)
                {
                    continue;
                }
                // Get a reference to the stream managed by the TcpClient.
                NetworkStream stream = connection.GetStream();
                // Quit reading if no new data is received after 30 seconds.
                stream.ReadTimeout = 30_000;
                // Create byte buffer with max packet size.
                byte[] readBuf = new byte[RoveCommConsts.HeaderSize + RoveCommConsts.MaxDataSize];
                // Read header.
                var headerBuf = readBuf.AsMemory(0, RoveCommConsts.HeaderSize);
                int bytesRead = await stream.ReadAsync(headerBuf, cancelToken);
                if (bytesRead == 0)
                {
                    _logger?.LogWarning("Failed to receive TCP data.");
                    return;
                }

                RoveCommHeader header = RoveCommUtils.ParseHeader(readBuf);
                RoveCommDataType dataType = RoveCommUtils.ParseDataType(header.DataType);
                int dataTypeSize = RoveCommUtils.DataTypeSize(dataType);
                int dataSize = header.DataCount * dataTypeSize;
                var dataBuf = readBuf.AsMemory(RoveCommConsts.HeaderSize, dataSize);
                await stream.ReadAsync(dataBuf, cancelToken);
                // Parse packet and trigger callbacks.
                int packetSize = RoveCommConsts.HeaderSize + dataSize;
                var packetBuf = readBuf.AsMemory(0, packetSize);
                switch (dataType)
                {
                    case RoveCommDataType.INT8_T: ProcessPacket(RoveCommUtils.ParsePacket<sbyte>(packetBuf.Span)); break;
                    case RoveCommDataType.UINT8_T: ProcessPacket(RoveCommUtils.ParsePacket<byte>(packetBuf.Span)); break;
                    case RoveCommDataType.INT16_T: ProcessPacket(RoveCommUtils.ParsePacket<short>(packetBuf.Span)); break;
                    case RoveCommDataType.UINT16_T: ProcessPacket(RoveCommUtils.ParsePacket<ushort>(packetBuf.Span)); break;
                    case RoveCommDataType.INT32_T: ProcessPacket(RoveCommUtils.ParsePacket<int>(packetBuf.Span)); break;
                    case RoveCommDataType.UINT32_T: ProcessPacket(RoveCommUtils.ParsePacket<uint>(packetBuf.Span)); break;
                    case RoveCommDataType.FLOAT: ProcessPacket(RoveCommUtils.ParsePacket<float>(packetBuf.Span)); break;
                    case RoveCommDataType.DOUBLE: ProcessPacket(RoveCommUtils.ParsePacket<double>(packetBuf.Span)); break;
                    case RoveCommDataType.CHAR: ProcessPacket(RoveCommUtils.ParsePacket<char>(packetBuf.Span)); break;
                }
                _logger?.LogInformation("TCP: Received RoveCommPacket with DataID {DataID} and Data {DataType}[{DataCount}] from {Remote}.", header.DataID, dataType, header.DataCount, connection.Client.RemoteEndPoint as IPEndPoint);
            }
            // RoveComm couldn't parse something:
            catch (RoveCommException e)
            {
                _logger?.LogError("Failed to read TCP packet: {Error}", e.Message);
            }
            // Network problems:
            catch (Exception e)
            {
                _logger?.LogError(e, "Failed to receive TCP data:");
            }
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
    /// <exception cref="RoveCommException">Thrown if the type was invalid.</exception>
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
