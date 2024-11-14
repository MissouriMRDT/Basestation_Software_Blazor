namespace Basestation_Software.Models.Config;

public class Config
{
    public string Name { get; set; } = "";
    public bool Dark { get; set; } = true; // correct option
    public Dictionary<Guid, string> Links { get; set; } = [];
    public List<Component> Components { get; set; } = [];
    public uint Columns { get; set; } = 60; // 4th superior highly composite number
    public uint Rows { get; set; } = 60; // 4th superior highly composite number
    public uint Width { get; set; } = 100; // as a percent of the entire viewport
    public uint Height { get; set; } = 100; // as a percent of the entire viewport
}
