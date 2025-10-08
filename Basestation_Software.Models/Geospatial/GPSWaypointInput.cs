namespace Basestation_Software.Models.Geospatial;

public class GPSWaypointInput
{
    public int ID { get; set; } = -1;
    public string Name { get; set; } = "";
    public string Latitude { get; set; } = "";
    public string Longitude { get; set; } = "";
    public double Altitude { get; set; } = 0;
    public string Timestamp { get; set; } = DateTime.Now.ToString();
    public string WaypointColor { get; set; } = "rgb(0, 0, 0)";
    public double SearchRadius { get; set; } = 0;
    public int TagID { get; set; } = -1;
    public string Type { get; set; } = "Navigation";
}