using System.ComponentModel.DataAnnotations;

namespace Basestation_Software.Models.Arm;

public class ArmPreset
{
    [Key]
    public int? ID { get; set; }
    public string? Name { get; set; }
    //public JointValues? Joints;

}