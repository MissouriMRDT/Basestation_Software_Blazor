using System.Drawing;

namespace Basestation_Software.Web.Core.Services.States;

// State to determine if in teleop, autonomy
public class OpState
{
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

}
