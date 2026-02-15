using System.Text;

namespace Basestation_Software.Web.Models;

public class PortStatus
{
    public string Port { get; set; } = "";
    public bool Connected { get; set; }
    public int? VLan { get; set; }
    public bool Routed
    {
        get => VLan is null;
        set => VLan = value ? null : 1;
    }
    public string Speed { get; set; } = "Unknown";
    public string Type { get; set; } = "Unknown";

    public override string ToString()
    {
        return $"""
        Port: {Port}, Connected: {Connected}, Vlan: {(Routed ? "Routed" : VLan)}, Speed: {Speed}, Type: {Type}
        """;
    }
}

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
    public double InputRateBytes { get; set; }
    public double InputRatePackets { get; set; }
    public int TotalInputBytes { get; set; }
    public int TotalInputPackets { get; set; }
    public double OutputRateBytes { get; set; }
    public double OutputRatePackets { get; set; }
    public int TotalOutputBytes { get; set; }
    public int TotalOutputPackets { get; set; }
    public int DroppedPackets { get; set; }
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
        Interface: {Name}, Type: {Type}, Description: {Description ?? "None"}, IP: {Ip ?? "Unspecified"}, Status: {Status}
            Input:
            Rate: {Traffic.InputRatePackets} packets ({Traffic.InputRateBytes} bytes) per second
            Total: {Traffic.TotalInputPackets} packets ({Traffic.TotalInputBytes} bytes)
            Output:
            Rate: {Traffic.OutputRatePackets} packets ({Traffic.OutputRateBytes} bytes) per second
            Total: {Traffic.TotalOutputPackets} packets ({Traffic.TotalOutputBytes} bytes)
        """;
    }
}

public enum EigrpStatus
{
    Passive, Active, Update, Query, Reply, ReplyStatus, SiaStatus
}
public class EigrpSuccessorInfo
{
    public string NextHopIp { get; set; } = "";
    public int FeasibleDistance { get; set; }
    public int AdvertisedDistance { get; set; }
    public string OutgoingInterface { get; set; } = "";
}
public class EigrpTopologyInfo
{
    public string DestinationIp { get; set; } = "";
    public EigrpStatus Status;
    public List<EigrpSuccessorInfo> Successors { get; set; } = [];
    public override string ToString()
    {
        var sb = new StringBuilder();
        sb.AppendLine($"Remote Network: {DestinationIp}, Status: {Status}");
        foreach (var successor in Successors)
        {
            sb.AppendLine($"  via Remote Port: {successor.NextHopIp}, Outgoing Interface: {successor.OutgoingInterface}, FD: ({successor.AdvertisedDistance}/{successor.FeasibleDistance})");
        }
        return sb.ToString();
    }
}
