namespace Basestation_Software.Web.Core.Services.States;

public class ArmSpeedState
{
    public delegate void ArmSpeedChangedCallback(Dictionary<string, int> waypoints);
    private event ArmSpeedChangedCallback? ArmSpeedChangedNotifier;

    public void SubscribeToArmSpeedChanged(ArmSpeedChangedCallback callback)
    {
        ArmSpeedChangedNotifier += callback;
    }

    public void UnsubscribeFromArmSpeedChanged(ArmSpeedChangedCallback callback)
    {
        ArmSpeedChangedNotifier -= callback;
    }

    private Dictionary<string, int> _armSpeeds = new Dictionary<string, int>()
    {
        {"X", 1000},
        {"J1", 1000},
        {"J2", 1000},
        {"J3", 1000},
        {"J4", 500},
        {"Pitch", 500},
        {"Roll", 1000},
        {"Gipper", 1000},
        {"Master", 1}
    };

    public Dictionary<string, int> ArmSpeeds
    {
        get { return _armSpeeds; }
        set 
        { 
            _armSpeeds = value;
            ArmSpeedChangedNotifier?.Invoke(_armSpeeds);
        }
    }

}
