
using Basestation_Software.Models.Geospatial;

namespace Basestation_Software.Web.Core.Services;

public class GPSWaypointService
{
    // Injected services.
    private readonly HttpClient _HttpClient;
    // Declare member variables.
    private List<GPSWaypoint> _gpsWaypoints = [];

    // Method delegates and events.
    public delegate Task SyncWaypointsCallback();
    private event SyncWaypointsCallback? SyncWaypointsNotifier;

    /// <summary>
    /// Constructor
    /// </summary>
    /// <param name="httpClient">Implicitly passed in, used to talk to the basestation API.</param>
    public GPSWaypointService(HttpClient httpClient)
    {
        // Assign member variables.
        _HttpClient = httpClient;
    }

    /// <summary>
    /// Refreshes the cached waypoints list from the API database.
    /// </summary>
    /// <returns></returns>
    public async Task RefreshGPSWaypoints()
    {
        List<GPSWaypoint>? waypoints = await _HttpClient.GetFromJsonAsync<List<GPSWaypoint>>("http://localhost:5000/api/GPSWaypoint");
        if (waypoints is not null)
        {
            _gpsWaypoints = waypoints;
        }

        // Invoke the callback to refresh page data.
        if (SyncWaypointsNotifier is not null)
            await SyncWaypointsNotifier.Invoke();
    }

    /// <summary>
    /// Add a callback to get invoked when the waypoints list changes.
    /// </summary>
    /// <param name="callback">The method callback to add.</param>
    public void SubscribeToWaypointsChanges(SyncWaypointsCallback callback)
    {
        SyncWaypointsNotifier += callback;
    }

    /// <summary>
    /// Remove a callback from getting invoked when the waypoints list changes.
    /// </summary>
    /// <param name="callback">The method callback to remove.</param>
    public void UnsubscribeFromWaypointsChanges(SyncWaypointsCallback callback)
    {
        SyncWaypointsNotifier -= callback;
    }

    /// <summary>
    /// Add a new waypoint to the database.
    /// </summary>
    /// <param name="waypoint">The waypoint to add.</param>
    /// <returns></returns>
    public async Task AddGPSWaypoint(GPSWaypoint waypoint)
    {
        // Add the waypoint to the database with the API.
        await _HttpClient.PutAsJsonAsync($"http://localhost:5000/api/GPSWaypoint", waypoint);
        // Refresh data.
        await RefreshGPSWaypoints();
    }

    /// <summary>
    /// Update a waypoint in the database.
    /// </summary>
    /// <param name="waypoint">The waypoint to update. ID must match an existing ID.</param>
    /// <returns></returns>
    public async Task UpdateGPSWaypoint(GPSWaypoint waypoint)
    {
        // Write the waypoint data to the database with the API.
        await _HttpClient.PostAsJsonAsync($"http://localhost:5000/api/GPSWaypoint", waypoint);
        // Refresh data.
        await RefreshGPSWaypoints();
    }

    /// <summary>
    /// Given a waypoint ID delete it from the database.
    /// </summary>
    /// <param name="waypoint">The waypoint to delete.</param>
    /// <returns></returns>
    public async Task DeleteGPSWaypoint(GPSWaypoint waypoint)
    {
        // Delete the waypoint from the database.
        await _HttpClient.DeleteAsync($"http://localhost:5000/api/GPSWaypoint/{waypoint.ID}");
        // Refresh data.
        await RefreshGPSWaypoints();
    }

    /// <summary>
    /// Return a reference to the list of GPSWaypoints.
    /// </summary>
    /// <returns></returns>
    public List<GPSWaypoint> GetGPSWaypoints()
    {
        return _gpsWaypoints;
    }

    /// <summary>
    /// Returns the waypoint with the given ID.
    /// </summary>
    /// <param name="waypointID">The ID of the waypoint to retrieve.</param>
    /// <returns></returns>
    public GPSWaypoint? GetGPSWaypoint(int waypointID)
    {
        return _gpsWaypoints.FirstOrDefault(x => x.ID == waypointID);
    }
}