using System.ComponentModel.DataAnnotations;
using System.Text.Json;

namespace Basestation_Software.Web.Models;

public class Page
{
    [Key]
    public Guid ID { get; set; }
    public string Name { get; set; } = "";
    public List<Component> Components { get; set; } = [];
}

public class Component
{
    public uint X { get; set; } = 0; // percent
    public uint Y { get; set; } = 0; // percent
    public uint Width { get; set; } = 0; // percent
    public uint Height { get; set; } = 0; // percent
    public string Type { get; set; } = ""; // razor component type name
}
