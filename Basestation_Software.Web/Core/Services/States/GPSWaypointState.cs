using Basestation_Software.Models.Geospatial;
namespace Basestation_Software.Web.Core.Services.States;

public class GPSWaypointState
{
    public delegate void WaypointChangedCallback(List<GPSWaypointInput> waypoints);
    private event WaypointChangedCallback? WaypointChangedNotifier; 

    public void SubscribeToWaypointChanged(WaypointChangedCallback callback)
    {
        WaypointChangedNotifier += callback;
    }

    public void UnsubscribeFromWaypointChanged(WaypointChangedCallback callback)
    {
        WaypointChangedNotifier -= callback;
    }

    private List<GPSWaypointInput>? _selectedWaypoints;
    public List<GPSWaypointInput>? SelectedWaypoints
    {
        get { return _selectedWaypoints; }
        set 
        { 
            _selectedWaypoints = value;
            WaypointChangedNotifier?.Invoke(_selectedWaypoints);
        }
    }

}
