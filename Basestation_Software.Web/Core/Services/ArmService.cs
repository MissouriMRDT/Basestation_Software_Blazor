namespace Basestation_Software.Web.Core.Services;

public class ArmService
{
    public delegate void ArmSpeedChangedCallback(Dictionary<string, float> speeds);
    private event ArmSpeedChangedCallback? ArmSpeedChangedNotifier;

    public void SubscribeToArmSpeedChanged(ArmSpeedChangedCallback callback)
    {
        ArmSpeedChangedNotifier += callback;
    }

    public void UnsubscribeFromArmSpeedChanged(ArmSpeedChangedCallback callback)
    {
        ArmSpeedChangedNotifier -= callback;
    }

    private Dictionary<string, float> _armSpeeds = new()
    {
        {"X", 0.03f},
        {"J2", 1f},
        {"J3", 1f},
        {"J4", 1f},
        {"Pitch", 1f},
        {"Roll", 1f},
        {"Gripper", 5f},
        {"Master", 0.1f}
    };

    public Dictionary<string, float> ArmSpeeds
    {
        get { return _armSpeeds; }
        set
        {
            _armSpeeds = value;
            ArmSpeedChangedNotifier?.Invoke(_armSpeeds);
        }
    }

    public delegate void GripperChangedCallback(bool isAlternateGripper);
    private event GripperChangedCallback? GripperChangedNotifier;

    private bool _isAlternateGripper = false;

    public bool IsAlternateGripper
    {
        get { return _isAlternateGripper; }
        set
        {
            _isAlternateGripper = value;
            GripperChangedNotifier?.Invoke(_isAlternateGripper);
        }
    }

    public void SubscribeToGripperChanged(GripperChangedCallback callback)
    {
        GripperChangedNotifier += callback;
    }

    public void UnsubscribeFromGripperChanged(GripperChangedCallback callback)
    {
        GripperChangedNotifier -= callback;
    }
}
