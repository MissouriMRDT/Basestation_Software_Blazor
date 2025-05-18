namespace Basestation_Software.Models.Arm;

public class ControlPreset
{
    public int? ID { get; set; }
    public string? Name { get; set; }
    public List<bool>? jointInversions { get; set; } = [];
    public List<int>? gamepadBinds { get; set; } = [];
    public List<float>? jointSpeeds { get; set; } = [];

    public override string ToString()
    {
        return (Name != null) ? Name : "Unamed";
    }
}
