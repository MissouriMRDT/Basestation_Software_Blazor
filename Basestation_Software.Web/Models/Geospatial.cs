using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Basestation_Software.Web.Models;

public class GPSWaypoint
{
    [Key]
    public Guid ID { get; set; }
    public string Name { get; set; } = "";
    public double Latitude { get; set; } = 0;
    public double Longitude { get; set; } = 0;
    public int WaypointColor { get; set; } = 0;
    public double SearchRadius { get; set; } = 0;
    public int TagID { get; set; } = 0;
}

public class GPSWaypointInput
{
    public Guid ID { get; set; }
    public string Name { get; set; } = "";
    public string Latitude { get; set; } = "";
    public string Longitude { get; set; } = "";
    public string WaypointColor { get; set; } = "rgb(0, 0, 0)";
    public double SearchRadius { get; set; } = 0;
    public int TagID { get; set; } = -99;
}

[PrimaryKey(nameof(X), nameof(Y), nameof(Z))]
public class LidarTile
{
    public int X { get; set; }
    public int Y { get; set; }
    public int Z { get; set; }
    public required byte[] ImageData { get; set; }
}

[PrimaryKey(nameof(X), nameof(Y), nameof(Z))]
public class MapTile
{
    public int X { get; set; }
    public int Y { get; set; }
    public int Z { get; set; }
    public required byte[] ImageData { get; set; }
}

public enum WaypointType
{
    Navigation,
    Marker,
    Object,
    Gate,
    Obstacle
}
