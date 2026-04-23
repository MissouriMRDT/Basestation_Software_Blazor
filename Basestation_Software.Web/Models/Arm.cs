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
    public float J5Speed { get; set; } = 1;
    public float J6Speed { get; set; } = 1;
    public float GripperSpeed { get; set; } = 1;
    public float LinearServoSpeed { get; set; } = 1;
    public float CacheSpeed { get; set; } = 1;
}

public class ArmAxes
{
    public float X { get; set; }
    public float J2 { get; set; }
    public float J3 { get; set; }
    public float J4 { get; set; }
    public float J5 { get; set; }
    public float J6 { get; set; }
    public float GX { get; set; }
    public float GY { get; set; }
    public float GZ { get; set; }

    public void SetFromArm(Arm arm)
    {
        X = arm.Position_X;
        J2 = arm.Position_J2;
        J3 = arm.Position_J3;
        J4 = arm.Position_J4;
        J5 = arm.Position_J5;
        J6 = arm.Position_J6;
        GX = arm.Position_GX;
        GY = arm.Position_GY;
        GZ = arm.Position_GZ;
    }

    public void TargetAngle(Arm arm)
    {
        arm.TargetAngle(X, J2, J3, J4, J5, J6);
    }

    public void TargetIK(Arm arm)
    {
        arm.IKPosition(GX, GY, GZ, J4, J5, J6);
    }
}