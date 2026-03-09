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

    public string this[double position]
    {
        get
        {
            // Unoptimized
            if (position <= MinPosition) return Utils.ColorToString(Stops[MinPosition]);
            double leftPosition = MinPosition;
            Color leftColor = Stops[MinPosition];
            foreach (var (rightPosition, rightColor) in Stops)
            {
                if (position <= rightPosition) return Utils.Map(position, leftPosition, rightPosition, leftColor, rightColor);
                leftPosition = rightPosition;
                leftColor = rightColor;
            }
            return Utils.ColorToString(leftColor);
        }
    }
}
