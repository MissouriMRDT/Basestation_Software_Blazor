namespace Basestation_Software.Models.RamanGraph;

public class DataItem
{
    public int Raman_Shift { get; set; }
    public double Intensity { get; set; }

    public DataItem()
    {
        Raman_Shift = 0;
        Intensity = 0f;
    }
}
