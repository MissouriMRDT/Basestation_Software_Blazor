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
            if (reply.Status == IPStatus.Success)
            {
                ping.Dispose();
                return reply;
                //return $"Ping to {ipAddress} successful: Time = {reply.RoundtripTime} ms";
            }
            else
            {
                ping.Dispose();
                return reply;
                //return $"Ping to {ipAddress} failed: {reply.Status}";
            }
        }
    }
}
