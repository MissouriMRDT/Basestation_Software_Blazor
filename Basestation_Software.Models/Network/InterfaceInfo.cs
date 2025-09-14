namespace Basestation_Software.Models.Network;

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
        Interface: {Name}, Type: {Type}, Description: {Description ?? "None"}, IP: {Ip ?? "Unspecified"}, Status: {Status}
            Input:
            Last 5 Minutes: {Traffic.FiveMinuteInputRatePackets} packets ({Traffic.FiveMinuteInputRateBits} bits) per second
            Total: {Traffic.TotalInputPackets} packets ({Traffic.TotalInputBytes} bytes)
            Output:
            Last 5 Minutes: {Traffic.FiveMinuteOutputRatePackets} packets ({Traffic.FiveMinuteOutputRateBits} bits) per second
            Total: {Traffic.TotalOutputPackets} packets ({Traffic.TotalOutputBytes} bytes)
        """;
    }
}
