using System;
using System.Diagnostics;
using System.Net.NetworkInformation;
using System.Threading.Tasks;

namespace Basestation_Software.Web.Core.Services;

public class PingService
{
    public async Task<PingReply> PingAsync(string ipAddress)
    {
        using (var ping = new Ping())
        {
            var reply = await ping.SendPingAsync(ipAddress, 1000); // 1 second timeout
            ping.Dispose();
            return reply;
        }
    }
}
