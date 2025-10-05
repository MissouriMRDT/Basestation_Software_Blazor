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
