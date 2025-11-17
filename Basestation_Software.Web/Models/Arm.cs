using System.ComponentModel.DataAnnotations;

namespace Basestation_Software.Web.Models;

public class ArmAngularPosition : JointValues
{
    [Key]
    public Guid ID { get; set; }
    public string Name { get; set; } = "";

}

public class ControlPreset
{
    [Key]
    public Guid ID { get; set; }
    public string Name { get; set; } = "";
    public bool[] JointInversions { get; set; } = [false, false, false, false, false, false];
    public Bind[] GamepadBinds { get; set; } = [0, 0, 0, 0, 0, 0];
    public float[] JointSpeeds { get; set; } = [1, 1, 1, 1, 1, 1];
}

public enum Bind
{
    LSX = 0,
    LSY,
    RSX,
    RSY,
    AB,
    XY,
    Bumpers,
    Triggers,
    DpadX,
    DpadY,
    StartSelect,
    Nothing
}

public class JointValues
{
    public float X { get; set; }
    public float J2 { get; set; }
    public float J3 { get; set; }
    public float J4 { get; set; }
    public float Pitch { get; set; }
    public float Roll { get; set; }

    public List<float> ToList()
    {
        return [X, J2, J3, J4, Pitch, Roll];
    }

    public float GetValue(JointNames joint)
    {
        switch (joint)
        {
            case JointNames.X:
                return X;
            case JointNames.J2:
                return J2;
            case JointNames.J3:
                return J3;
            case JointNames.J4:
                return J4;
            case JointNames.Pitch:
                return Pitch;
            case JointNames.Roll:
                return Roll;
            default:
                throw new ArgumentOutOfRangeException();
        }
    }

    public void SetValue(JointNames joint, float value)
    {
        switch (joint)
        {
            case JointNames.X:
                X = value;
                break;
            case JointNames.J2:
                J2 = value;
                break;
            case JointNames.J3:
                J3 = value;
                break;
            case JointNames.J4:
                J4 = value;
                break;
            case JointNames.Pitch:
                Pitch = value;
                break;
            case JointNames.Roll:
                Roll = value;
                break;
            default:
                throw new ArgumentOutOfRangeException();
        }
    }

    public void SetAll(JointValues other)
    {
        X = other.X;
        J2 = other.J2;
        J3 = other.J3;
        J4 = other.J4;
        Pitch = other.Pitch;
        Roll = other.Roll;
    }

    public float this[JointNames joint]
    {
        get
        {
            return GetValue(joint);
        }
        set
        {
            SetValue(joint, value);
        }
    }
}

public enum JointNames
{
    X,
    J2,
    J3,
    J4,
    Pitch,
    Roll
}

public enum IKNames
{
    X,
    Y,
    Z,
    J4,
    Pitch,
    Roll
}
