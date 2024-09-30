using OpenCvSharp;
using System.Drawing;

namespace Basestation_Software.Web.Utils;

public class ColorGradient
{
    SortedDictionary<double, Color> Stops { get; }
    double MinPosition { get; }
    double MaxPosition { get; }

    ColorGradient(Dictionary<double, Color> Stops)
    {
        if (Stops.Count < 2) throw new ArgumentException("Stops must have at least two elements");
        this.Stops = new SortedDictionary<double, Color>(Stops);
        MinPosition = Stops.Keys.First();
        MaxPosition = Stops.Keys.Last();
    }

    public static double Map(double x, double in_min, double in_max, double out_min, double out_max)
    {
        return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }

    public static int Map(double x, double in_min, double in_max, int out_min, int out_max)
    {
        return (int)((x - in_min) / (in_max - in_min) * (out_max - out_min)) + out_min;
    }

    public static string ClampMap(double x, double in_min, double in_max, Color out_min, Color out_max)
    {
        if (x < in_min) x = in_min;
        else if (x > in_max) x = in_max;
        return Map(x, in_min, in_max, out_min, out_max);
    }

    public static string Map(double x, double in_min, double in_max, Color out_min, Color out_max)
    {
        if (in_min == in_max) return ColorToString(out_min); // Prevent division by 0.
        // Gamma correct by squaring the color before interpolating and square rooting after.
        // This eliminates the horrible grey/brown sludge in the middle of two blended distant colors. https://youtu.be/LKnqECcg6Gw
        return "rgb(" +
            Math.Clamp(Math.Sqrt(Map(x, in_min, in_max, (double)out_min.R * out_min.R, (double)out_max.R * out_max.R)), 0, 255) + " " +
            Math.Clamp(Math.Sqrt(Map(x, in_min, in_max, (double)out_min.G * out_min.G, (double)out_max.G * out_max.G)), 0, 255) + " " +
            Math.Clamp(Math.Sqrt(Map(x, in_min, in_max, (double)out_min.B * out_min.B, (double)out_max.B * out_max.B)), 0, 255) + " / " +
            Math.Clamp(Math.Sqrt(Map(x, in_min, in_max, (double)out_min.A * out_min.A, (double)out_max.A * out_max.A)), 0, 255) + ")";
    }

    public static string ColorToString(Color color) { return $"rgb({color.R}, {color.G}, {color.B} / {color.A})"; }

    public string this[double position]
    {
        get
        {
            // Unoptimized
            if (position <= MinPosition) return ColorToString(Stops[MinPosition]);
            double leftPosition = MinPosition;
            Color leftColor = Stops[MinPosition];
            foreach (var (rightPosition, rightColor) in Stops)
            {
                if (position <= rightPosition) return Map(position, leftPosition, rightPosition, leftColor, rightColor);
                leftPosition = rightPosition;
                leftColor = rightColor;
            }
            return ColorToString(leftColor);
        }
    }
}
