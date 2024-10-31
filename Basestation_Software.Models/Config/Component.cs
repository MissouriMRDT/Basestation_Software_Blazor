namespace Basestation_Software.Models.Config;

public class Component
{
    public uint X { get; set; } = 0;
    public uint Y { get; set; } = 0;
    public uint Width { get; set; } = 0; // in grid columns
    public uint Height { get; set; } = 0; // in grid rows
    public String Type { get; set; } = ""; // razor component type name
    public String PlaceSelf { get; set; } = "stretch"; // css place-self
    public String? ID { get; set; } // component ID parameter (required for RoverMap, GPS, and maybe others)
}
