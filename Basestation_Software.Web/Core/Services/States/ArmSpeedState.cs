namespace Basestation_Software.Web.Core.Services.States;

public class ArmSpeedState
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

    private Dictionary<string, float> _armSpeeds = new Dictionary<string, float>()
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
            Console.WriteLine("Set");
            _armSpeeds = value;
            ArmSpeedChangedNotifier?.Invoke(_armSpeeds);
        }
    }

}
