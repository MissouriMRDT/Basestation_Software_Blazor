using RoveComm;
using System.Drawing;

namespace Basestation_Software.Web.Core.Services;

// State to determine if in teleop, autonomy
public class OpService
{

    private readonly RoveCommService _roveCommService;

    public OpService(RoveCommService roveCommService)
    {
        _roveCommService = roveCommService;

        _roveCommService.On<byte>("Autonomy", "ReachedGoal", async (packet) =>
        {
            SetReachedGoal();
            await Task.Delay(5000);
            SetAutonomy();
        });
    }

    public delegate void OpStateChangedCallback(Color? col);
    private event OpStateChangedCallback? OpStateChangedNotifier;

    public void SubscribeToStateChanged(OpStateChangedCallback callback)
    {
        OpStateChangedNotifier += callback;
    }

    public void UnsubscribeFromStateChanged(OpStateChangedCallback callback)
    {
        OpStateChangedNotifier -= callback;
    }

    private Color? _opColor;

    public Color? OpColor
    {
        get { return _opColor; }
        set
        {
            _opColor = value;
            OpStateChangedNotifier?.Invoke(_opColor);
        }
    }

    public void SetTeleop()
    {
        OpColor = Color.Blue;
        _roveCommService.Send<byte>("Core", "StateDisplay", [0]);
    }

    public void SetAutonomy()
    {
        OpColor = Color.Red;
        _roveCommService.Send<byte>("Core", "StateDisplay", [1]);
    }

    public void SetReachedGoal()
    {
        OpColor = Color.Green;
        _roveCommService.Send<byte>("Core", "StateDisplay", [2]);
    }

}
