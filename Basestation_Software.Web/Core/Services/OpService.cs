using System.Drawing;
using RoveComm;

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
        _ = _roveCommService.SendAsync<byte>("Core", "StateDisplay", [(byte)RoveComm.Boards.Core.DisplayState.TELEOP]);

    }

    public void SetAutonomy()
    {
        OpColor = Color.Red;
        _ = _roveCommService.SendAsync<byte>("Core", "StateDisplay", [(byte)RoveComm.Boards.Core.DisplayState.AUTONOMY]);
    }

    public void SetReachedGoal()
    {
        OpColor = Color.Green;
        _ = _roveCommService.SendAsync<byte>("Core", "StateDisplay", [(byte)RoveComm.Boards.Core.DisplayState.REACHED_GOAL]);
    }

}
