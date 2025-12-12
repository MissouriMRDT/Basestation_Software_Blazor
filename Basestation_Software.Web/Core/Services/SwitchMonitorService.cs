using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text.RegularExpressions;
using RoveComm;
using Renci.SshNet;
using Microsoft.Extensions.Hosting;
using System.Text;
using System.Text.Json;
using Basestation_Software.Models.Network;

namespace Basestation_Software.Web.Core.Services;

public class SwitchMonitorService : IHostedService, IDisposable
{
    private static readonly string RoverSwitchUser = "admin";
    private static readonly string RoverSwitchPassword = "nandgate";
    private static readonly string RoverSwitchIP = RoveCommManifest.Devices["RoverSwitch"].Ip;
    private static readonly string BasestationSwitchUser = "admin";
    private static readonly string BasestationSwitchPassword = "nandgate";
    private static readonly string BasestationSwitchIP = RoveCommManifest.Devices["BasestationSwitch"].Ip;

    // A single JSON object entry

    public class NetworkTraffic
    {
        public string Interface { get; set; } = "";
        public InterfaceStatus Status { get; set; }
        public TrafficInfo Traffic { get; set; } = new();
    }

    public class RoverPosRecord
    {
        public double Lat { get; set; }
        public double Lon { get; set; }
        public double Alt { get; set; }
    }

    public class NetworkTrafficRecord
    {
        public DateTime Timestamp { get; set; }
        public RoverPosRecord RoverPos { get; set; } = new();
        public List<NetworkTraffic> Traffic { get; set; } = [];
    }

    public class NetworkTopologyRecord
    {
        public DateTime Timestamp { get; set; }
        public RoverPosRecord RoverPos { get; set; } = new();
        public List<EigrpTopologyInfo> Topology { get; set; } = [];
    }

    private FileStream _logFile;

    private Queue<NetworkTrafficRecord> _timeAverageSamples = [];
    public static readonly TimeSpan TimeAverageDelta = TimeSpan.FromSeconds(10);

    public event Action<List<InterfaceInfo>>? OnInterfaceUpdate;
    public event Action<List<EigrpTopologyInfo>>? OnEigrpTopologyUpdate;
    public event Action<List<PortStatus>>? OnPortStatusUpdate;

    public class VlanInfo
    {
        public int VLan { get; set; }
        public string Name { get; set; } = "";
        public string Status { get; set; } = "Unknown";
        public List<string> Ports { get; set; } = [];
    }

    private Timer? _getInterfacesTimer;
    private Timer? _getEigrpTopologyTimer;
    private Timer? _getPortsTimer;

    private readonly RoveCommService _roveCommService;
    // Nav board state. TODO: Move this to a service
    private RoverPosRecord _roverPos = new();

    public SwitchMonitorService(RoveCommService roveCommService)
    {
        _roveCommService = roveCommService;
        _roveCommService.On<double>("Nav", "GPSLatLonAlt", async (packet) =>
        {
            _roverPos.Lat = packet.Data[0];
            _roverPos.Lon = packet.Data[1];
            _roverPos.Alt = packet.Data[2];
            await Task.CompletedTask;
        });

        // TODO: Exception handling
        _logFile = File.Create($"NetworkSwitchMonitor_Log_{DateTime.Now:MM-dd-yyyy-hh:mm:tt}.txt");
    }

    public Task StartAsync(CancellationToken stop)
    {
        // _getInterfacesTimer = new Timer(state => GetInterfaces(), null, TimeSpan.Zero, TimeSpan.FromSeconds(2));
        // _getEigrpTopologyTimer = new Timer(state => GetEigrpTopology(), null, TimeSpan.Zero, TimeSpan.FromSeconds(10));
        // _getPortsTimer = new Timer(state => GetPorts(), null, TimeSpan.Zero, TimeSpan.FromSeconds(10));
        return Task.CompletedTask;
    }
    public Task StopAsync(CancellationToken stop)
    {
        // _getInterfacesTimer?.Change(Timeout.Infinite, 0);
        // _getEigrpTopologyTimer?.Change(Timeout.Infinite, 0);
        // _getPortsTimer?.Change(Timeout.Infinite, 0);
        return Task.CompletedTask;
    }

    /// <summary>
    /// Fill in input/output rate fields for a TrafficInfo based on previous
    /// entries in _timeAverageSamples
    /// </summary>
    /// <param name="intName">Name of the interface</param>
    /// <param name="dest">The TrafficInfo to fill in</param>
    /// <returns>False if there are no entries to average</returns>
    public bool CalculateTimeAveragedIORates(string intName, in TrafficInfo dest)
    {
        if (_timeAverageSamples.Count < 2)
        {
            return false;
        }

        NetworkTraffic? firstEntry = null, lastEntry = null;
        DateTime? firstTime = null, lastTime = null;
        foreach (var snapshot in _timeAverageSamples)
        {
            var inter = snapshot.Traffic.Find((inter) => inter.Interface == intName);
            if (inter is not null)
            {
                if (firstEntry is null)
                {
                    firstEntry = inter;
                    firstTime = snapshot.Timestamp;
                }
                else if (lastEntry is null)
                {
                    lastEntry = inter;
                    lastTime = snapshot.Timestamp;
                }
            }
        }

        if (firstEntry is not null && lastEntry is not null && firstEntry != lastEntry)
        {
            TimeSpan delta = (TimeSpan)(lastTime! - firstTime!);
            // No divide by zero
            if (delta.Seconds == 0)
            {
                return false;
            }

            dest.InputRateBytes = (lastEntry.Traffic.TotalInputBytes - firstEntry.Traffic.TotalInputBytes) / delta.Seconds;
            dest.InputRatePackets = (lastEntry.Traffic.TotalInputPackets - firstEntry.Traffic.TotalInputPackets) / delta.Seconds;
            dest.OutputRateBytes = (lastEntry.Traffic.TotalOutputBytes - firstEntry.Traffic.TotalOutputBytes) / delta.Seconds;
            dest.OutputRatePackets = (lastEntry.Traffic.TotalOutputPackets - firstEntry.Traffic.TotalOutputPackets) / delta.Seconds;
            return true;
        }

        return false;
    }

    /// <summary>
    /// Get a list of interfaces and their network traffic statistics.
    /// Parses the Cisco command SHOW INTERFACES
    /// </summary>
    /// <returns>A list of interfaces</returns>
    public List<InterfaceInfo> GetInterfaces()
    {
        string result = "";
        var interfaces = new List<InterfaceInfo>();
        using var client = new SshClient(RoverSwitchIP, RoverSwitchUser, RoverSwitchPassword);
        try
        {
            client.Connect();
            using SshCommand command = client.RunCommand("show interfaces");
            result = command.Result;
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Could not connect: {ex.Message}");
            return interfaces;
        }
        var interfaceEntryPattern = new Regex(@"([a-zA-Z0-9_\-/]+) is (up|down|administratively down), line protocol is (up|down)");
        var typePattern = new Regex(@"Hardware is (.+?),");
        var descriptionPattern = new Regex(@"Description: (.*?)[\r\n]");
        var ipPattern = new Regex(@"Internet address is (\d+\.\d+\.\d+\.\d+/\d+)");
        var fiveMinuteRatePattern = new Regex("""
        ^\s*5 minute input rate (\d+) bits?/sec, (\d+) packets?/sec\s*$
        ^\s*5 minute output rate (\d+) bits?/sec, (\d+) packets?/sec\s*$
        """, RegexOptions.Multiline);
        var totalInputPattern = new Regex(@"(\d+) packets? input, (\d+) bytes?, \d+ no buffer");
        var totalOutputPattern = new Regex(@"(\d+) packets? output, (\d+) bytes?, \d+ underruns?");
        var droppedPacketPattern = new Regex(@"(\d+) runts, (\d+) giants, (\d+) throttles\s*(\d+) input errors, (\d+) CRC, (\d+) frame, (\d+) overrun, (\d+) ignored");

        var interfaceMatch = interfaceEntryPattern.Match(result);
        while (interfaceMatch.Success)
        {
            // Get substring of result corresponding to this interface entry
            var nextMatch = interfaceMatch.NextMatch();
            int interfaceTextLength = nextMatch.Success ?
                nextMatch.Index - interfaceMatch.Index
                : result.Length - interfaceMatch.Index;
            string interfaceText = result.Substring(interfaceMatch.Index, interfaceTextLength);

            InterfaceInfo info = new InterfaceInfo();
            info.Name = interfaceMatch.Groups[1].Value;
            info.Status = interfaceMatch.Groups[2].Value switch
            {
                "up" => InterfaceStatus.Up,
                "down" => InterfaceStatus.Down,
                "administratively down" => InterfaceStatus.Disabled,
                _ => InterfaceStatus.Disabled
            };
            info.ProtocolStatus = interfaceMatch.Groups[3].Value switch
            {
                "up" => ProtocolStatus.Up,
                "down" => ProtocolStatus.Down,
                _ => ProtocolStatus.Down
            };
            var typeMatch = typePattern.Match(interfaceText);
            info.Type = typeMatch.Groups[1].Value switch
            {
                "EtherSVI" => InterfaceType.VLan,
                "Fast Ethernet" => InterfaceType.FastEthernet,
                "Gigabit Ethernet" => InterfaceType.GigabitEthernet,
                "Loopback" => InterfaceType.Loopback,
                _ => InterfaceType.Unknown
            };
            var descriptionMatch = descriptionPattern.Match(interfaceText);
            if (descriptionMatch.Success)
            {
                info.Description = descriptionMatch.Groups[1].Value;
            }
            var ipMatch = ipPattern.Match(interfaceText);
            if (ipMatch.Success)
            {
                info.Ip = ipMatch.Groups[1].Value;
            }
            var totalInputMatch = totalInputPattern.Match(interfaceText);
            var totalOutputMatch = totalOutputPattern.Match(interfaceText);
            var droppedPacketMatch = droppedPacketPattern.Match(interfaceText);
            int droppedPackets = 0;
            if (droppedPacketMatch.Success)
            {
                for (int i = 0; i < 8; i++)
                {
                    droppedPackets += int.Parse(droppedPacketMatch.Groups[i + 1].Value);
                }
            }
            if (totalInputMatch.Success && totalOutputMatch.Success && droppedPacketMatch.Success)
            {
                info.Traffic = new TrafficInfo
                {
                    TotalInputPackets = int.Parse(totalInputMatch.Groups[1].Value),
                    TotalInputBytes = int.Parse(totalInputMatch.Groups[2].Value),
                    TotalOutputPackets = int.Parse(totalOutputMatch.Groups[1].Value),
                    TotalOutputBytes = int.Parse(totalOutputMatch.Groups[2].Value),
                    DroppedPackets = droppedPackets
                };
            }
            else
            {
                Console.WriteLine("Failed to read traffic info for {0}", info.Name);
            }

            if (!CalculateTimeAveragedIORates(info.Name, info.Traffic))
            {
                // If there are no existing samples to average, just use five minute averages
                var fiveMinuteRateMatch = fiveMinuteRatePattern.Match(interfaceText);
                if (fiveMinuteRateMatch.Success)
                {
                    info.Traffic.InputRateBytes = int.Parse(fiveMinuteRateMatch.Groups[1].Value) / 8; // bits to bytes
                    info.Traffic.InputRatePackets = int.Parse(fiveMinuteRateMatch.Groups[2].Value);
                    info.Traffic.OutputRateBytes = int.Parse(fiveMinuteRateMatch.Groups[3].Value) / 8; // bits to bytes
                    info.Traffic.OutputRatePackets = int.Parse(fiveMinuteRateMatch.Groups[4].Value);
                    Console.WriteLine($"Failed to compute time average for interface {info.Name}. Falling back on 5-minute average.");
                }
                else
                {
                    Console.WriteLine("Failed to read traffic info for {0}", info.Name);
                }
            }

            interfaces.Add(info);

            interfaceMatch = nextMatch;
        }

        // Console.WriteLine("==========SHOW INTERFACES==========");
        // foreach (var info in interfaces)
        // {
        //     Console.WriteLine(info);
        // }

        OnInterfaceUpdate?.Invoke(interfaces);
        var traffic = new List<NetworkTraffic>(interfaces.Count);
        foreach (var inter in interfaces)
        {
            traffic.Add(new NetworkTraffic
            {
                Interface = inter.Name,
                Status = inter.Status,
                Traffic = inter.Traffic
            });
        }

        // Write to JSON and update _timeAverageSamples
        _ = WriteNetworkTraffic(traffic);

        return interfaces;
    }

    /// <summary>
    /// Get the EIGRP topology table. Runs the Cisco command SHOW IP EIGRP TOPOLOGY
    /// </summary>
    /// <returns>A list of EIGRP entries</returns>
    public List<EigrpTopologyInfo> GetEigrpTopology()
    {
        string result = "";
        var topology = new List<EigrpTopologyInfo>();
        using var client = new SshClient(BasestationSwitchIP, BasestationSwitchUser, BasestationSwitchPassword);
        try
        {
            client.Connect();
            using SshCommand command = client.RunCommand("show ip eigrp topology");
            result = command.Result;
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Could not connect: {ex.Message}");
            return topology;
        }

        var eigrpEntryPattern = new Regex(@"([PAUQRrs]) (\d+\.\d+\.\d+\.\d+/\d+), (\d+) successors, FD is (\d+)");
        var eigrpSuccessorPattern = new Regex(@"\s*via (Connected|\d+\.\d+\.\d+\.\d+) \((\d+)/(\d+)\), ([a-zA-Z0-9_\-/]+)");

        var eigrpMatch = eigrpEntryPattern.Match(result);
        while (eigrpMatch.Success)
        {
            // Get substring of result corresponding to this interface entry
            var nextMatch = eigrpMatch.NextMatch();
            int eigrpTextLength = nextMatch.Success ?
                nextMatch.Index - eigrpMatch.Index
                : result.Length - eigrpMatch.Index;
            string eigrpText = result.Substring(eigrpMatch.Index, eigrpTextLength);

            var eigrpEntry = new EigrpTopologyInfo
            {
                Status = eigrpMatch.Groups[1].Value switch
                {
                    "P" => EigrpStatus.Passive,
                    "A" => EigrpStatus.Active,
                    "U" => EigrpStatus.Update,
                    "Q" => EigrpStatus.Query,
                    "R" => EigrpStatus.Reply,
                    "r" => EigrpStatus.ReplyStatus,
                    "s" => EigrpStatus.SiaStatus,
                    _ => EigrpStatus.Passive
                },
                DestinationIp = eigrpMatch.Groups[2].Value
            };

            var eigrpSuccessorMatches = eigrpSuccessorPattern.Matches(eigrpText);
            foreach (Match successor in eigrpSuccessorMatches)
            {
                eigrpEntry.Successors.Add(new EigrpSuccessorInfo
                {
                    NextHopIp = successor.Groups[1].Value,
                    FeasibleDistance = int.Parse(successor.Groups[2].Value),
                    AdvertisedDistance = int.Parse(successor.Groups[3].Value),
                    OutgoingInterface = successor.Groups[4].Value
                });
            }

            topology.Add(eigrpEntry);
            eigrpMatch = nextMatch;
        }

        // Console.WriteLine("==========SHOW IP EIGRP TOPOLOGY==========");
        // foreach (var entry in topology)
        // {
        //     Console.WriteLine(entry);
        // }
        OnEigrpTopologyUpdate?.Invoke(topology);
        _ = WriteNetworkTopology(topology);
        return topology;
    }

    /// <summary>
    /// Get VLan port assignments
    /// </summary>
    /// <returns>A list of VLans with the ports assigned to them</returns>
    // public List<VlanInfo> GetVLanAssignments()
    // {

    // }

    /// <summary>
    /// Get port statuses including their connectedness and VLan assignments.
    /// Runs the Cisco command SHOW INTERFACE STATUS
    /// </summary>
    /// <returns>A list of port statuses</returns>
    public List<PortStatus> GetPorts()
    {
        string result = "";
        var ports = new List<PortStatus>();
        using var client = new SshClient(RoverSwitchIP, RoverSwitchUser, RoverSwitchPassword);
        try
        {
            client.Connect();
            using SshCommand command = client.RunCommand("show interface status");
            result = command.Result;
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Could not connect: {ex.Message}");
            return ports;
        }
        // Port      Name               Status       Vlan       Duplex  Speed Type 
        // Fa1/1     AutonomyAndSensorA notconnect   3            auto   auto 10/100BaseTX 
        var headerPattern = new Regex(@"(Port)\s+(Name)\s+(Status)\s+(Vlan)\s+(Duplex)\s+(Speed)\s+(Type)");
        var headerMatch = headerPattern.Match(result);
        if (!headerMatch.Success)
        {
            return ports;
        }
        string tableHeader = headerMatch.Groups[0].ToString();
        headerMatch = headerPattern.Match(tableHeader);
        using (var reader = new StringReader(result))
        {
            while (reader.Peek() >= 0 && !reader!.ReadLine()!.StartsWith("Port"));
            string? line;
            while ((line = reader.ReadLine()) != null)
            {
                // Skip table header
                if (line.StartsWith("Port"))
                {
                    continue;
                }
                var headings = headerMatch.Groups;
                if (line.Length < headings[7].Index)
                {
                    continue;
                }
                var port = new PortStatus
                {
                    Port = line[headings[1].Index..headings[2].Index].Trim(),
                    // Name = line[headings[2].Index..headings[3].Index].Trim(),
                    Connected = line[headings[3].Index..headings[4].Index].Trim() switch
                    {
                        "connected" => true,
                        "notconnect" => false,
                        _ => false
                    },
                    Speed = line[(headings[5].Index + headings[5].Length)..(headings[6].Index + headings[6].Length)].Trim(),
                    Type = line[headings[7].Index..].Trim()
                };
                var vlanPattern = new Regex(@"(routed|\d+)");
                var vlanMatch = vlanPattern.Match(line, headings[4].Index);
                if (vlanMatch.Success)
                {
                    if (int.TryParse(vlanMatch.Groups[1].Value, out int vlan))
                    {
                        port.VLan = vlan;
                    }
                }
                ports.Add(port);
            }
        }
        // Console.WriteLine("==========SHOW INTERFACE STATUS==========");
        // foreach (var port in ports)
        // {
        //     Console.WriteLine(port);
        // }
        OnPortStatusUpdate?.Invoke(ports);
        return ports;
    }

    private async Task WriteNetworkTraffic(List<NetworkTraffic> traffic)
    {
        var entry = new NetworkTrafficRecord
        {
            Timestamp = DateTime.Now,
            RoverPos = _roverPos,
            Traffic = traffic
        };

        _timeAverageSamples.Enqueue(entry);
        // Remove expired entries
        var earliestTime = DateTime.Now - TimeAverageDelta;
        while (_timeAverageSamples.Count > 0 && _timeAverageSamples.Peek().Timestamp < earliestTime)
        {
            _timeAverageSamples.Dequeue();
        }

        string jsonString = JsonSerializer.Serialize(entry);
        byte[] bytes = new UTF8Encoding(true).GetBytes(jsonString);
        await _logFile.WriteAsync(bytes);
    }

    private async Task WriteNetworkTopology(List<EigrpTopologyInfo> topology)
    {
        var entry = new NetworkTopologyRecord
        {
            Timestamp = DateTime.Now,
            RoverPos = _roverPos,
            Topology = topology
        };
        string jsonString = JsonSerializer.Serialize(entry);
        byte[] bytes = new UTF8Encoding(true).GetBytes(jsonString);
        await _logFile.WriteAsync(bytes);
    }

    public void Dispose()
    {
        _getInterfacesTimer?.Dispose();
        _getEigrpTopologyTimer?.Dispose();
        _getPortsTimer?.Dispose();
        _logFile.Close();
    }

}
