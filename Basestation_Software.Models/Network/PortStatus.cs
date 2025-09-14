using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Basestation_Software.Models.Network;

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
