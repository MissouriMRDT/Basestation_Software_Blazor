using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Basestation_Software.Models.Config;

public class Component
{
    public uint Top { get; set; } = 0; // css grid-row-start
    public uint Left { get; set; } = 0; // css grid-column-start
    public uint Bottom { get; set; } = 0; // css grid-row-end
    public uint Right { get; set; } = 0; // css grid-column-end
    public String Type { get; set; } = ""; // razor component type name
    public String PlaceSelf { get; set; } = "stretch"; // css place-self
    public String? ID { get; set; } // component ID parameter, null=autoassigned (required for RoverMap, GPS, and maybe others) 
}
