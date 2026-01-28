using RoveComm;
using RoveComm.Boards;
using System.ComponentModel.DataAnnotations;

namespace Basestation_Software.Web.Models;

public class ArmPose : ArmAxes
{
    [Key]
    public Guid ID { get; set; }
    public string Name { get; set; } = "";
}

public class ArmPreset : ControlScheme
{
    public ArmPreset() : base(12) { }
    public float XSpeed { get; set; } = 1;
    public float YSpeed { get; set; } = 1;
    public float ZSpeed { get; set; } = 1;
    public float J2Speed { get; set; } = 1;
    public float J3Speed { get; set; } = 1;
    public float J4Speed { get; set; } = 1;
    public float PitchSpeed { get; set; } = 1;
    public float RollSpeed { get; set; } = 1;
    public float GripperSpeed { get; set; } = 1;
    public float LinearServoSpeed { get; set; } = 1;
    public float CacheSpeed { get; set; } = 1;
}

public class ArmAxes
{
    public float X { get; set; }
    public float Y { get; set; }
    public float Z { get; set; }
    public float J2 { get; set; }
    public float J3 { get; set; }
    public float J4 { get; set; }
    public float Pitch { get; set; }
    public float Roll { get; set; }

    public void SetFromArm(Arm arm)
    {
        X = arm.Position_X;
        Y = arm.Position_Y;
        Z = arm.Position_Z;
        J2 = arm.Position_J2;
        J3 = arm.Position_J3;
        J4 = arm.Position_J4;
        Pitch = arm.Position_P;
        Roll = arm.Position_R;
    }
}