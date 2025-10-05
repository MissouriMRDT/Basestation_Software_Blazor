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
    public int InputRateBits { get; set; }
    public int InputRatePackets { get; set; }
    public int TotalInputBytes { get; set; }
    public int TotalInputPackets { get; set; }
    public int OutputRateBits { get; set; }
    public int OutputRatePackets { get; set; }
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
            Rate: {Traffic.InputRatePackets} packets ({Traffic.InputRateBits} bits) per second
            Total: {Traffic.TotalInputPackets} packets ({Traffic.TotalInputBytes} bytes)
            Output:
            Rate: {Traffic.OutputRatePackets} packets ({Traffic.OutputRateBits} bits) per second
            Total: {Traffic.TotalOutputPackets} packets ({Traffic.TotalOutputBytes} bytes)
        """;
    }
}
