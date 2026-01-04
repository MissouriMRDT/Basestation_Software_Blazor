using System;
using System.Diagnostics;
using System.Net.NetworkInformation;
using System.Threading.Tasks;

namespace Basestation_Software.Web.Core.Services;

public class PingService
{
    public async Task<PingReply> PingAsync(string ipAddress, int timeout)
    {
        using (var ping = new Ping())
        {
            var reply = await ping.SendPingAsync(ipAddress, timeout);
            ping.Dispose();
            return reply;
        }
    }
}
