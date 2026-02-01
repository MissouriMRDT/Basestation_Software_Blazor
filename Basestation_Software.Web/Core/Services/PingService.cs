using System.Net.NetworkInformation;

namespace Basestation_Software.Web.Core.Services;

public class PingService
{
    public async Task<PingReply> PingAsync(string ipAddress, int timeout)
    {
        using Ping ping = new();
        var reply = await ping.SendPingAsync(ipAddress, timeout);
        return reply;
    }
}
