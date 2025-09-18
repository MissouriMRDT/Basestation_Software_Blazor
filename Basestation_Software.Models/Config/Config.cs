using System.Text.Json;

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

    public static Config Default()
    {
        return JsonSerializer.Deserialize<Config>(
            """{"Name":"Default","Dark":true,"Links":{},"Components":[{"X":0,"Y":0,"Width":20,"Height":20,"Type":"GPS","PlaceSelf":"stretch","ID":"mainnav"},{"X":20,"Y":0,"Width":40,"Height":20,"Type":"RoverMap","PlaceSelf":"stretch","ID":"mainmap"},{"X":0,"Y":20,"Width":34,"Height":8,"Type":"Waypoints","PlaceSelf":"stretch","ID":null},{"X":0,"Y":28,"Width":34,"Height":10,"Type":"TaskTimers","PlaceSelf":"stretch","ID":null},{"X":0,"Y":38,"Width":34,"Height":9,"Type":"PMS","PlaceSelf":"stretch","ID":null},{"X":34,"Y":20,"Width":40,"Height":17,"Type":"CameraDisplay","PlaceSelf":"stretch","ID":null}],"Columns":60,"Rows":60,"Width":100,"Height":100}"""
        ) ?? new Config();
    }
}
