using System.Text;

namespace Basestation_Software.Models.Network;

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

