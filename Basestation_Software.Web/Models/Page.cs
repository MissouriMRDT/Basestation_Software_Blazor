using System.ComponentModel.DataAnnotations;
using System.Text.Json;

namespace Basestation_Software.Web.Models;

public class Page
{
    [Key]
    public Guid ID { get; set; }
    public string Name { get; set; } = "";
    public bool Dark { get; set; } = true; // correct option
    public List<Component> Components { get; set; } = [];
    public uint Columns { get; set; } = 60; // 4th superior highly composite number
    public uint Rows { get; set; } = 60; // 4th superior highly composite number
    public uint Width { get; set; } = 100; // as a percent of the entire viewport
    public uint Height { get; set; } = 100; // as a percent of the entire viewport

    public static Page Default()
    {
        return JsonSerializer.Deserialize<Page>(
            """{"ID":"00000000-0000-0000-0000-000000000001","Name":"Default","Dark":true,"Components":[{"X":0,"Y":0,"Width":20,"Height":20,"Type":"Placeholder","PlaceSelf":"stretch"}],"Columns":60,"Rows":60,"Width":100,"Height":100}"""
        ) ?? new Page();
        /*return JsonSerializer.Deserialize<Page>(
            """{"ID":"00000000-0000-0000-0000-000000000001","Name":"Default","Dark":true,"Components":[{"X":0,"Y":0,"Width":20,"Height":20,"Type":"GPS","PlaceSelf":"stretch"},{"X":20,"Y":0,"Width":40,"Height":20,"Type":"RoverMap","PlaceSelf":"stretch"},{"X":0,"Y":20,"Width":34,"Height":8,"Type":"Waypoints","PlaceSelf":"stretch"},{"X":0,"Y":28,"Width":34,"Height":10,"Type":"TaskTimers","PlaceSelf":"stretch"},{"X":0,"Y":38,"Width":34,"Height":9,"Type":"PMS","PlaceSelf":"stretch"},{"X":34,"Y":20,"Width":40,"Height":17,"Type":"CameraDisplay","PlaceSelf":"stretch"}],"Columns":60,"Rows":60,"Width":100,"Height":100}"""
        ) ?? new Page();*/
    }
}

public class Component
{
    public uint X { get; set; } = 0;
    public uint Y { get; set; } = 0;
    public uint Width { get; set; } = 0; // in grid columns
    public uint Height { get; set; } = 0; // in grid rows
    public String Type { get; set; } = ""; // razor component type name
    public String PlaceSelf { get; set; } = "stretch"; // css place-self
}
