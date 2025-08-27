using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text.RegularExpressions;
using RoveComm;
using Renci.SshNet;
using Microsoft.Extensions.Logging;

namespace Basestation_Software.Web.Core.Services;

public class SwitchMonitorService
{
    private static readonly string SwitchUser = "admin";
    private static readonly string SwitchPassword = "nandgate";
    private static readonly string SwitchIP = RoveCommManifest.Devices["RoverSwitch"].Ip;

    public enum InterfaceStatus
    {
        Up,
        Down,
        Disabled
    }
    public enum ProtocolStatus
    {
        Up,
        Down
    }

    public enum InterfaceType
    {
        VLan,
        FastEthernet,
        GigabitEthernet,
        Loopback,
        Unknown
    }

    public class TrafficInfo
    {
        public int FiveMinuteInputRateBits { get; set; }
        public int FiveMinuteInputRatePackets { get; set; }
        public int TotalInputBytes { get; set; }
        public int TotalInputPackets { get; set; }
        public int FiveMinuteOutputRateBits { get; set; }
        public int FiveMinuteOutputRatePackets { get; set; }
        public int TotalOutputBytes { get; set; }
        public int TotalOutputPackets { get; set; }
    }

    public class InterfaceInfo
    {
        public string Name { get; set; } = "";
        public InterfaceType Type { get; set; }
        public string? Description { get; set; }
        public string? Ip { get; set; }
        public InterfaceStatus Status { get; set; }
        public ProtocolStatus ProtocolStatus { get; set; }
        public TrafficInfo Traffic { get; set; } = new();

        public override string ToString()
        {
            return $"""
            Interface: {Name}, Type: {Type.ToString()}, Description: {Description ?? "None"}, IP: {Ip ?? "Unspecified"}, Status: {Status.ToString()}
              Input:
                Last 5 Minutes: {Traffic.FiveMinuteInputRatePackets} packets ({Traffic.FiveMinuteInputRateBits} bits) per second
                Total: {Traffic.TotalInputPackets} packets ({Traffic.TotalInputBytes} bytes)
              Output:
                Last 5 Minutes: {Traffic.FiveMinuteOutputRatePackets} packets ({Traffic.FiveMinuteOutputRateBits} bits per second)
                Total: {Traffic.TotalOutputPackets} packets ({Traffic.TotalOutputBytes} bytes)
            """;
        }
    }

    public SwitchMonitorService()
    {
        Console.WriteLine("!!!!!!!!!!!!!!!!!!!!NUTS!!!!!!!!!!!!!!");
        // GetInterfaces();
    }

    public static List<InterfaceInfo> GetInterfaces()
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
        var typePattern = new Regex(@"Hardware is (EtherSVI|Fast Ethernet|Gigabit Ethernet|Loopback)");
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
                "administratively down" => InterfaceStatus.Disabled
            };
            info.ProtocolStatus = interfaceMatch.Groups[3].Value switch
            {
                "up" => ProtocolStatus.Up,
                "down" => ProtocolStatus.Down
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
                    FiveMinuteInputRateBits = Int32.Parse(fiveMinuteMatch.Groups[1].Value),
                    FiveMinuteInputRatePackets = Int32.Parse(fiveMinuteMatch.Groups[2].Value),
                    FiveMinuteOutputRateBits = Int32.Parse(fiveMinuteMatch.Groups[3].Value),
                    FiveMinuteOutputRatePackets = Int32.Parse(fiveMinuteMatch.Groups[4].Value),
                    TotalInputPackets = Int32.Parse(totalInputMatch.Groups[1].Value),
                    TotalInputBytes = Int32.Parse(totalInputMatch.Groups[2].Value),
                    TotalOutputPackets = Int32.Parse(totalOutputMatch.Groups[1].Value),
                    TotalOutputBytes = Int32.Parse(totalOutputMatch.Groups[2].Value),
                };
            }
            else
            {
                Console.WriteLine("Failed to read traffic info for {0}", info.Name);
            }

            interfaces.Add(info);

            interfaceMatch = nextMatch;
        }
        foreach (var info in interfaces)
        {
            Console.WriteLine(info);
        }

        return interfaces;
    }

}
