using System;
using System.Net.NetworkInformation;
using System.Threading.Tasks;

namespace Basestation_Software.Web.Core.Services;

public class PingService
{
    public async Task<string> PingAsync(string ipAddress)
    {
        using (var ping = new Ping())
        {
            try
            {
                var reply = await ping.SendPingAsync(ipAddress, 1000); // 1 second timeout
                if (reply.Status == IPStatus.Success)
                {
                    ping.Dispose();
                    return $"Ping to {ipAddress} successful: Time = {reply.RoundtripTime} ms";
                }
                else
                {
                    ping.Dispose();
                    return $"Ping to {ipAddress} failed: {reply.Status}";
                }
            }
            catch (Exception ex)
            {
                ping.Dispose();
                return $"Error pinging {ipAddress} : {ex.Message}";
            }
        }
    }
}
