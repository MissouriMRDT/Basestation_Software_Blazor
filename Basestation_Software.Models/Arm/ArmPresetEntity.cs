using System.ComponentModel.DataAnnotations;

namespace Basestation_Software.Models.Arm;

public class ArmPresetEntity
{
    [Key]
    public int? ID { get; set; }
    public string? Name { get; set; }
    public string? JointData { get; set; }

}