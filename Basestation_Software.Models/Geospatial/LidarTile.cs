namespace Basestation_Software.Models.Geospatial;

public class LidarTile
{
    public int? ID { get; set; }
    public int? X { get; set; }
    public int? Y { get; set; }
    public int? Z { get; set; }
    public byte[]? ImageData { get; set; }
}
