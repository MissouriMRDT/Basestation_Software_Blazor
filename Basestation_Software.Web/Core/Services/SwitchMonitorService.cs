using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text.RegularExpressions;
using RoveComm;
using Renci.SshNet;
using Microsoft.Extensions.Hosting;
using System.Text;
using Basestation_Software.Models.Network;

namespace Basestation_Software.Web.Core.Services;

public class SwitchMonitorService : IHostedService, IDisposable
{
    private static readonly string SwitchUser = "admin";
    private static readonly string SwitchPassword = "nandgate";
    private static readonly string SwitchIP = RoveCommManifest.Devices["RoverSwitch"].Ip;

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
    private double Lat = 0, Lon = 0, Alt = 0;

    public SwitchMonitorService(RoveCommService roveCommService)
    {
        _roveCommService = roveCommService;
        _roveCommService.On<double>("Nav", "GPSLatLonAlt", async (packet) =>
        {
            Lat = packet.Data[0];
            Lon = packet.Data[1];
            Alt = packet.Data[2];
            await Task.CompletedTask;
        });
    }

    public Task StartAsync(CancellationToken stop)
    {
        _getInterfacesTimer = new Timer(state => GetInterfaces(), null, TimeSpan.Zero, TimeSpan.FromSeconds(2));
        _getEigrpTopologyTimer = new Timer(state => GetEigrpTopology(), null, TimeSpan.Zero, TimeSpan.FromSeconds(10));
        _getPortsTimer = new Timer(state => GetPorts(), null, TimeSpan.Zero, TimeSpan.FromSeconds(10));
        return Task.CompletedTask;
    }
    public Task StopAsync(CancellationToken stop)
    {
        _getInterfacesTimer?.Change(Timeout.Infinite, 0);
        _getEigrpTopologyTimer?.Change(Timeout.Infinite, 0);
        _getPortsTimer?.Change(Timeout.Infinite, 0);
        return Task.CompletedTask;
    }

    /// <summary>
    /// Get a list of interfaces and their network traffic statistics.
    /// Parses the Cisco command SHOW INTERFACES
    /// </summary>
    /// <returns>A list of interfaces</returns>
    public List<InterfaceInfo> GetInterfaces()
    {
        var interfaces = new List<InterfaceInfo>();
        using var client = new SshClient(SwitchIP, SwitchUser, SwitchPassword);
        try
        {
            client.Connect();
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Could not connect: {ex.Message}");
            return interfaces;
        }
        using SshCommand command = client.RunCommand("show interfaces");
        string result = command.Result;
        var interfaceEntryPattern = new Regex(@"([a-zA-Z0-9_\-/]+) is (up|down|administratively down), line protocol is (up|down)");
        var typePattern = new Regex(@"Hardware is (.+?),");
        var descriptionPattern = new Regex(@"Description: (.*?)[\r\n]");
        var ipPattern = new Regex(@"Internet address is (\d+\.\d+\.\d+\.\d+/\d+)");
        var fiveMinutePattern = new Regex("""
        ^\s*5 minute input rate (\d+) bits?/sec, (\d+) packets?/sec\s*$
        ^\s*5 minute output rate (\d+) bits?/sec, (\d+) packets?/sec\s*$
        """, RegexOptions.Multiline);
        var totalInputPattern = new Regex(@"(\d+) packets? input, (\d+) bytes?, \d+ no buffer");
        var totalOutputPattern = new Regex(@"(\d+) packets? output, (\d+) bytes?, \d+ underruns?");

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
            var fiveMinuteMatch = fiveMinutePattern.Match(interfaceText);
            var totalInputMatch = totalInputPattern.Match(interfaceText);
            var totalOutputMatch = totalOutputPattern.Match(interfaceText);
            if (fiveMinuteMatch.Success && totalInputMatch.Success && totalOutputMatch.Success)
            {
                info.Traffic = new TrafficInfo
                {
                    FiveMinuteInputRateBits = int.Parse(fiveMinuteMatch.Groups[1].Value),
                    FiveMinuteInputRatePackets = int.Parse(fiveMinuteMatch.Groups[2].Value),
                    FiveMinuteOutputRateBits = int.Parse(fiveMinuteMatch.Groups[3].Value),
                    FiveMinuteOutputRatePackets = int.Parse(fiveMinuteMatch.Groups[4].Value),
                    TotalInputPackets = int.Parse(totalInputMatch.Groups[1].Value),
                    TotalInputBytes = int.Parse(totalInputMatch.Groups[2].Value),
                    TotalOutputPackets = int.Parse(totalOutputMatch.Groups[1].Value),
                    TotalOutputBytes = int.Parse(totalOutputMatch.Groups[2].Value),
                };
            }
            else
            {
                Console.WriteLine("Failed to read traffic info for {0}", info.Name);
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
        return interfaces;
    }

    /// <summary>
    /// Get the EIGRP topology table. Runs the Cisco command SHOW IP EIGRP TOPOLOGY
    /// </summary>
    /// <returns>A list of EIGRP entries</returns>
    public List<EigrpTopologyInfo> GetEigrpTopology()
    {
        var topology = new List<EigrpTopologyInfo>();
        using var client = new SshClient(SwitchIP, SwitchUser, SwitchPassword);
        try
        {
            client.Connect();
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Could not connect: {ex.Message}");
            return topology;
        }
        using SshCommand command = client.RunCommand("show ip eigrp topology");
        string result = command.Result;

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
        var ports = new List<PortStatus>();
        using var client = new SshClient(SwitchIP, SwitchUser, SwitchPassword);
        try
        {
            client.Connect();
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Could not connect: {ex.Message}");
            return ports;
        }
        using SshCommand command = client.RunCommand("show interface status");
        string result = command.Result;
        // Port      Name               Status       Vlan       Duplex  Speed Type 
        // Fa1/1     AutonomyAndSensorA notconnect   3            auto   auto 10/100BaseTX 
        var headerMatch = Regex.Match(result, @"(Port)\s+(Name)\s+(Status)\s+(Vlan)\s+(Duplex)\s+(Speed)\s+(Type)");
        if (!headerMatch.Success)
        {
            return ports;
        }
        using (var reader = new StringReader(result))
        {
            string? line;
            while ((line = reader.ReadLine()) != null)
            {
                // Skip table header
                if (line.StartsWith("Port"))
                {
                    continue;
                }
                var headings = headerMatch.Groups;
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

    public void Dispose()
    {
        _getInterfacesTimer?.Dispose();
        _getEigrpTopologyTimer?.Dispose();
        _getPortsTimer?.Dispose();
    }

}
