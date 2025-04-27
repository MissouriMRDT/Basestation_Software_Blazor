namespace Basestation_Software.Models.Arm;

public class ControlPreset
{
    public int? ID { get; set; }
    public string? Name { get; set; }
    public List<bool>? jointInversions = [];
    public List<int>? gamepadBinds = [];
    public List<float>? jointSpeeds = [];

}
