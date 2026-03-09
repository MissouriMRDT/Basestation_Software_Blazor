using System.ComponentModel.DataAnnotations;
using System.Drawing;
using RoveComm;

namespace Basestation_Software.Web.Core.Services;

// State to determine if in teleop, autonomy
public class OpService
{

    private readonly RoveCommService _RoveCommService;
    private readonly Color[] _opColors = [Color.Blue, Color.Red, Color.Green];

    public OpService(RoveCommService roveCommService)
    {
        _RoveCommService = roveCommService;

        _RoveCommService.Boards.Autonomy.OnStateDisplay(async packet =>
        {
            if (_RoveCommService.Boards.Autonomy.StateDisplay < _opColors.Length)
                OpColor = _opColors[_RoveCommService.Boards.Autonomy.StateDisplay];
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
        _RoveCommService.Boards.Core.Brightness((byte)255);
        _RoveCommService.Boards.Core.StateDisplay((byte)RoveComm.Boards.Core.DisplayState.TELEOP);

    }

    public void SetAutonomy()
    {
        OpColor = Color.Red;
        _RoveCommService.Boards.Core.Brightness((byte)255);
        _RoveCommService.Boards.Core.StateDisplay((byte)RoveComm.Boards.Core.DisplayState.AUTONOMY);
    }

    public void SetReachedGoal()
    {
        OpColor = Color.Green;
        _RoveCommService.Boards.Core.Brightness((byte)255);
        _RoveCommService.Boards.Core.StateDisplay((byte)RoveComm.Boards.Core.DisplayState.REACHED_GOAL);
    }

    public void SetNone()
    {
        OpColor = Color.Black;
        _RoveCommService.Boards.Core.Brightness(0);
    }

}
