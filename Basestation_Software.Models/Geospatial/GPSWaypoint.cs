namespace Basestation_Software.Models.Geospatial;

public class GPSWaypoint
{
    public int? ID { get; set; }
    public string? Name { get; set; }
    public double? Latitude { get; set; }
    public double? Longitude { get; set; }
    public double? Altitude { get; set; }
    public DateTime? Timestamp { get; set; } = DateTime.Now;
    public int? WaypointColor { get; set; }
    public double? SearchRadius { get; set; }
    public WaypointType? Type { get; set; }
}