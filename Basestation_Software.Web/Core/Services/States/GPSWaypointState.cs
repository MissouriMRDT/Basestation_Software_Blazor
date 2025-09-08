using Basestation_Software.Models.Geospatial;
namespace Basestation_Software.Web.Core.Services.States;

public class GPSWaypointState
{
    public delegate Task WaypointSelectedCallback(GPSWaypoint? waypoints);
    private event WaypointSelectedCallback? WaypointSelectedNotifier; 

    public void SubscribeToWaypointSelected(WaypointSelectedCallback callback)
    {
        WaypointSelectedNotifier += callback;
    }

    public void UnsubscribeFromWaypointSelected(WaypointSelectedCallback callback)
    {
        WaypointSelectedNotifier -= callback;
    }

    private GPSWaypoint? _selectedWaypoint;
    public GPSWaypoint? SelectedWaypoint
    {
        get { return _selectedWaypoint; }
        set 
        { 
            _selectedWaypoint = value;
            WaypointSelectedNotifier?.Invoke(_selectedWaypoint);
        }
    }

}
