using Basestation_Software.Models.RoveComm;

namespace Basestation_Software.Web.Core.Services.RoveComm;

public class RoveCommService : IHostedService
{

    public RoveCommUDP UDP;
    public RoveCommTCP TCP;

    private readonly CancellationTokenSource _cts = new();
    private readonly ILogger<RoveCommService> _logger;

    public RoveCommService(ILogger<RoveCommService> logger)
    {
        _logger = logger;
        UDP = new RoveCommUDP(_logger);
        TCP = new RoveCommTCP(_logger);
    }

    public Task StartAsync(CancellationToken cancelToken)
    {
        Begin(cancelToken);
        SubscribeAll();
        return Task.CompletedTask;
    }

    public void Begin(CancellationToken cancelToken)
    {
        _logger.LogInformation("Starting RoveComm.");
        UDP.Begin(cancelToken);
        TCP.Begin(cancelToken);
    }

    /// <summary>
    /// Attach the given callback to be triggered when a RoveCommPacket with the given DataID is received.
    /// </summary>
    /// <param name="dataId">The DataID to listen for.</param>
    /// <param name="handler">The function to call when the DataID is received.</param>
    /// <exception cref="RoveCommException">Thrown if the type was invalid.</exception>
    public void On<T>(int dataId, RoveCommCallback<T> handler)
    {
        TCP.On(dataId, handler);
        UDP.On(dataId, handler);
        _logger.LogInformation("Subscribed to {DataID} with type {DataType}.", dataId, RoveCommUtils.DataTypeFromType(typeof(T)));
    }

    /// <summary>
    /// Attach the given callback to be triggered when a RoveCommPacket from the Manifest is received.
    /// </summary>
    /// <param name="boardName">The name of the board as shown in the Manifest.</param>
    /// <param name="dataIdString">The name of the Telemetry or Error message as shown in the Manifest.</param>
    /// <param name="handler">The function to call when the DataID is received.</param>
    /// <exception cref="RoveCommException">
    /// Thrown if the packet descriptor was not found in the Manifest or did not match the given type.
    /// </exception>
    public void On<T>(string boardName, string dataIdString, RoveCommCallback<T> handler)
    {
        RoveCommUtils.FindDataIDByName(boardName, dataIdString, out var boardDesc, out var packetDesc);
        if (boardDesc is null)
        {
            throw new RoveCommException($"Failed to subscribe to RoveComm: {boardName} Board not found in RoveCommManifest.");
        }
        else if (packetDesc is null)
        {
            throw new RoveCommException($"Failed to subscribe to RoveComm: {dataIdString} not found for {boardName} Board.");
        }

        RoveCommDataType handlerType = RoveCommUtils.DataTypeFromType(typeof(T));
        if (packetDesc.DataType != handlerType)
        {
            throw new RoveCommException($"Failed to subscribe to RoveComm: {handlerType} does not match type of {dataIdString} ({packetDesc.DataType}).");
        }

        On(packetDesc.DataID, handler);
    }

    /// <summary>
    /// Clear the given callback from all DataID's.
    /// </summary>
    /// <param name="handler">The callback to remove.</param>
    /// <exception cref="RoveCommException">Thrown if the type was invalid.</exception>
    public void Clear<T>(RoveCommCallback<T> handler)
    {
        UDP.Clear(handler);
        TCP.Clear(handler);
    }

    /// <summary>
    /// Clear the given callback from the given DataID.
    /// </summary>
    /// <param name="dataId">The DataID to remove the callback from.</param>
    /// <param name="handler">The callback to remove.</param>
    /// <exception cref="RoveCommException">Thrown if the type was invalid.</exception>
    public void Clear<T>(int dataId, RoveCommCallback<T> handler)
    {
        UDP.Clear(dataId, handler);
        TCP.Clear(dataId, handler);
        _logger.LogInformation("Unsubscribed from {DataID} with type {DataType}.", dataId, RoveCommUtils.DataTypeFromType(typeof(T)));
    }

    /// <summary>
    /// Clear the given callback from the given Manifest entry.
    /// </summary>
    /// <param name="boardName">The name of the board as shown in the Manifest.</param>
    /// <param name="dataIdString">The name of the Telemetry or Error message as shown in the Manifest.</param>
    /// <param name="handler">The callback to remove.</param>
    /// /// <exception cref="RoveCommException">
    /// Thrown if the packet descriptor was not found in the Manifest or did not match the given type.
    /// </exception>
    public void Clear<T>(string boardName, string dataIdString, RoveCommCallback<T> handler)
    {
        RoveCommUtils.FindDataIDByName(boardName, dataIdString, out var boardDesc, out var packetDesc);
        if (boardDesc is null)
        {
            throw new RoveCommException($"Failed to unsubscribe from RoveComm: {boardName} Board not found in RoveCommManifest.");
        }
        else if (packetDesc is null)
        {
            throw new RoveCommException($"Failed to unsubscribe from RoveComm: {dataIdString} not found for {boardName} Board.");
        }

        RoveCommDataType handlerType = RoveCommUtils.DataTypeFromType(typeof(T));
        if (packetDesc.DataType != handlerType)
        {
            throw new RoveCommException($"Failed to unsubscribe from RoveComm: {handlerType} does not match type of {dataIdString} ({packetDesc.DataType}).");
        }

        Clear(packetDesc.DataID, handler);
    }

    /// <summary>
    /// Send data over RoveComm.
    /// </summary>
    /// <param name="dataId">The DataID of the packet.</param>
    /// <param name="data">The Data to send.</param>
    /// <param name="ip">The IP to send to.</param>
    /// <param name="port">The port to send to.</param>
    /// <param name="reliable">Send over TCP if true, send over UDP if false.</param>
    /// <returns>True if the packet was sent successfully.</returns>
    public bool Send<T>(int dataId, List<T> data, string ip, int port, bool reliable = false)
    {
        var packet = new RoveCommPacket<T>(dataId, data);
        return reliable ? TCP.Send(packet, ip, port) : UDP.Send(packet, ip, port);
    }
    public bool Send<T>(int dataId, List<T> data, string ip, bool reliable = false)
    {
        var packet = new RoveCommPacket<T>(dataId, data);
        return reliable ? TCP.Send(packet, ip) : UDP.Send(packet, ip);
    }

    /// <summary>
    /// Send data asynchronously over RoveComm.
    /// </summary>
    /// <param name="dataId">The DataID of the packet.</param>
    /// <param name="data">The Data to send.</param>
    /// <param name="ip">The IP to send to.</param>
    /// <param name="port">The port to send to.</param>
    /// <param name="reliable">Send over TCP if true, send over UDP if false.</param>
    /// <returns>True if the packet was sent successfully.</returns>
    public async Task<bool> SendAsync<T>(int dataId, List<T> data, string ip, int port, bool reliable = false, CancellationToken cancelToken = default)
    {
        var packet = new RoveCommPacket<T>(dataId, data);
        return reliable ? await TCP.SendAsync(packet, ip, port, cancelToken) : await UDP.SendAsync(packet, ip, port, cancelToken);
    }
    public async Task<bool> SendAsync<T>(int dataId, List<T> data, string ip, bool reliable = false, CancellationToken cancelToken = default)
    {
        var packet = new RoveCommPacket<T>(dataId, data);
        return reliable ? await TCP.SendAsync(packet, ip, cancelToken) : await UDP.SendAsync(packet, ip, cancelToken);
    }

    /// <summary>
    /// Send a command from the Manifest over RoveComm.
    /// </summary>
    /// <param name="boardName">The name of the board as shown in the Manifest.</param>
    /// <param name="commandName">The name of the command as shown in the Manifest.</param>
    /// <param name="data">The data to send with the command.</param>
    /// <param name="reliable">Send over TCP if true, send over UDP if false.</param>
    /// <returns>True if the packet was sent successfully.</returns>
    /// <exception cref="RoveCommException">
    /// Thrown if the packet descriptor was not found in the Manifest or did not match the Manifest's schema.
    /// </exception>
    public bool Send<T>(string boardName, string commandName, List<T> data, bool reliable = false)
    {
        RoveCommUtils.FindDataIDByName(boardName, commandName, out var boardDesc, out var packetDesc);
        if (boardDesc is null)
        {
            throw new RoveCommException($"Failed to send RoveCommPacket: {boardName} Board not found in RoveCommManifest.");
        }
        else if (packetDesc is null)
        {
            throw new RoveCommException($"Failed to send RoveCommPacket: {commandName} not found for {boardName} Board.");
        }

        RoveCommDataType handlerType = RoveCommUtils.DataTypeFromType(typeof(T));
        if (packetDesc.DataType != handlerType)
        {
            throw new RoveCommException($"Failed to send RoveCommPacket: {handlerType} does not match type of {commandName} ({packetDesc.DataType}).");
        }

        if (data.Count != packetDesc.DataCount)
        {
            throw new RoveCommException($"Failed to send RoveCommPacket: incorrect data size to fill {commandName}.");
        }

        return Send(packetDesc.DataID, data, boardDesc.IP, reliable);
    }

    /// <summary>
    /// Send a command from the Manifest over RoveComm asynchronously.
    /// </summary>
    /// <param name="boardName">The name of the board as shown in the Manifest.</param>
    /// <param name="commandName">The name of the command as shown in the Manifest.</param>
    /// <param name="data">The data to send with the command.</param>
    /// <param name="reliable">Send over TCP if true, send over UDP if false.</param>
    /// <returns>True if the packet was sent successfully.</returns>
    /// <exception cref="RoveCommException">
    /// Thrown if the packet descriptor was not found in the Manifest or did not match the Manifest's schema.
    /// </exception>
    public async Task<bool> SendAsync<T>(string boardName, string commandName, List<T> data, bool reliable = false, CancellationToken cancelToken = default)
    {
        RoveCommUtils.FindDataIDByName(boardName, commandName, out var boardDesc, out var packetDesc);
        if (boardDesc is null)
        {
            throw new RoveCommException($"Failed to send RoveCommPacket: {boardName} Board not found in RoveCommManifest.");
        }
        else if (packetDesc is null)
        {
            throw new RoveCommException($"Failed to send RoveCommPacket: {commandName} not found for {boardName} Board.");
        }

        RoveCommDataType handlerType = RoveCommUtils.DataTypeFromType(typeof(T));
        if (packetDesc.DataType != handlerType)
        {
            throw new RoveCommException($"Failed to send RoveCommPacket: {handlerType} does not match type of {commandName} ({packetDesc.DataType}).");
        }

        if (data.Count != packetDesc.DataCount)
        {
            throw new RoveCommException($"Failed to send RoveCommPacket: incorrect data size to fill {commandName}.");
        }

        return await SendAsync(packetDesc.DataID, data, boardDesc.IP, reliable, cancelToken);
    }

    /// <summary>
    /// Wait asynchronously until a packet with the desired DataID arrives.
    /// </summary>
    /// <param name="dataId">The DataID to listen for.</param>
    /// <param name="timeout">The number of milliseconds before returning null.</param>
    /// <returns>The RoveCommPacket if received within the timeout, null if none.</returns>
    public async Task<RoveCommPacket<T>?> Listen<T>(int dataId, int timeout = 30_000)
    {
        var promise = new TaskCompletionSource<RoveCommPacket<T>>();
        RoveCommCallback<T> callback = async (packet) =>
        {
            promise.SetResult(packet);
            await Task.CompletedTask;
        };

        On(dataId, callback);

        var cts = new CancellationTokenSource();
        var cancel = cts.Token;
        cts.CancelAfter(timeout);

        try
        {
            return await promise.Task.WaitAsync(cancel);
        }
        catch (OperationCanceledException)
        {
            return null;
        }
        finally
        {
            Clear(dataId, callback);
        }
    }

    /// <summary>
    /// Wait asynchronously until the desired packet from the Manifest arrives.
    /// </summary>
    /// <param name="boardName">The name of the board as shown in the Manifest.</param>
    /// <param name="dataIdString">The name of the Telemetry or Error message as shown in the Manifest.</param>
    /// <param name="timeout">The number of milliseconds before returning null.</param>
    /// <returns>The RoveCommPacket if received within the timeout, null if none.</returns>
    public async Task<RoveCommPacket<T>?> Listen<T>(string boardName, string dataIdString, int timeout = 30_000)
    {
        RoveCommUtils.FindDataIDByName(boardName, dataIdString, out var boardDesc, out var packetDesc);
        if (boardDesc is null)
        {
            throw new RoveCommException($"Failed to send RoveCommPacket: {boardName} Board not found in RoveCommManifest.");
        }
        else if (packetDesc is null)
        {
            throw new RoveCommException($"Failed to send RoveCommPacket: {dataIdString} not found for {boardName} Board.");
        }

        return await Listen<T>(packetDesc.DataID, timeout);
    }

    public void Subscribe(string boardName)
    {
        if (RoveCommManifest.Boards.ContainsKey(boardName))
        {
            Send(RoveCommManifest.SystemPackets.SUBSCRIBE, [1], RoveCommManifest.Boards[boardName].IP);
        }
    }
    public void SubscribeAll()
    {
        foreach (var board in RoveCommManifest.Boards.Values)
        {
            Send(RoveCommManifest.SystemPackets.SUBSCRIBE, [1], board.IP);
        }
    }

    public void Unubscribe(string boardName)
    {
        if (RoveCommManifest.Boards.ContainsKey(boardName))
        {
            Send(RoveCommManifest.SystemPackets.UNSUBSCRIBE, [1], RoveCommManifest.Boards[boardName].IP);
        }
    }
    public void UnsubscribeAll()
    {
        foreach (var board in RoveCommManifest.Boards.Values)
        {
            Send(RoveCommManifest.SystemPackets.UNSUBSCRIBE, [1], board.IP);
        }
    }

    public void Ping(string boardName)
    {
        if (RoveCommManifest.Boards.ContainsKey(boardName))
        {
            Send(RoveCommManifest.SystemPackets.PING, [1], RoveCommManifest.Boards[boardName].IP);
        }
    }
    public void PingAll()
    {
        foreach (var board in RoveCommManifest.Boards.Values)
        {
            Send(RoveCommManifest.SystemPackets.PING, [1], board.IP);
        }
    }

    public Task StopAsync(CancellationToken cancelToken)
    {
        UnsubscribeAll();
        Stop();
        return Task.CompletedTask;
    }

    public void Stop()
    {
        _logger.LogInformation("Closing RoveComm.");
        _cts.Cancel();
        UDP.Dispose();
        TCP.Dispose();
    }
}
