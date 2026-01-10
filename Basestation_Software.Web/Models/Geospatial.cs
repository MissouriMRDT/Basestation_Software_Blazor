using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Basestation_Software.Web.Models;

public partial class GPSWaypoint
{
    [Key]
    public Guid ID { get; set; }
    public string Name { get; set; } = "";
    public double Latitude { get; set; } = 0;
    public double Longitude { get; set; } = 0;
    public int Color { get; set; } = 0;
    public double SearchRadius { get; set; } = 0;
    public int TagID { get; set; } = 0;

    /// <summary>
    /// Convert DMS to Degrees
    /// Accepts absolutely ridiculous "DMS" values
    /// </summary>
    /// <example>
    /// "-91.778441", "-91� 46' 42.3876"", "d-5506.70646", "d0m-330402.3876", and "-5,5206.7|0.32*4.056" all give the same
    /// value
    /// </example>
    /// <param name="dms">degree minute second deliminated by any non numeric</param>
    /// <returns>Degrees</returns>
    public static double ConvertDMSToDegrees(string dms)
    {
        double degrees = 0, multiplier = 1;
        foreach (string scomponent in DMSComponent().Split(dms))
        {
            if (Double.TryParse(scomponent, out double dcomponent))
            {
                if (degrees >= 0) // Minus sign propagates
                    degrees += dcomponent * multiplier;
                else
                    degrees -= dcomponent * multiplier;
            }
            multiplier /= 60;
        }
        return degrees;
    }

    [System.Text.RegularExpressions.GeneratedRegex("[^-.\\d]+")]
    private static partial System.Text.RegularExpressions.Regex DMSComponent();
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
