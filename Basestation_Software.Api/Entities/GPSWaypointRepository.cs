using System.Reflection;
using Basestation_Software.Models.Geospatial;
using Microsoft.EntityFrameworkCore;

namespace Basestation_Software.Api.Entities
{
    public class GPSWaypointRepository : IGPSWaypointRepository
    {
        // Declare member variables.
        private readonly REDDatabase _REDDatabase;

        /// <summary>
        /// Constructor
        /// </summary>
        /// <param name="db">Implicitly passed in.</param>
        public GPSWaypointRepository(REDDatabase db)
        {
            _REDDatabase = db;
        }

        /// <summary>
        /// Add a GPS waypoint to the database.
        /// </summary>
        /// <param name="waypoint">The new GPS waypoint.</param>
        /// <returns>The object stored in the DB.</returns>
        public async Task<GPSWaypoint?> AddGPSWaypoint(GPSWaypoint waypoint)
        {
            // Make sure the ID is null.
            waypoint.ID = null;
            // Add new row to database table.
            var result = await _REDDatabase.Waypoints.AddAsync(waypoint);
            await _REDDatabase.SaveChangesAsync();
            // Return the inserted value.
            return result.Entity;
        }

        /// <summary>
        /// Remove a GPS waypoint from the database.
        /// </summary>
        /// <param name="waypoint">The ID of the waypoint to remove.</param>
        public async Task<GPSWaypoint?> DeleteGPSWaypoint(int waypointID)
        {
            // Find the first waypoint with the same ID.
            GPSWaypoint? result = await _REDDatabase.Waypoints.FirstOrDefaultAsync(x => x.ID == waypointID);
            // Check if it was found.
            if (result is not null)
            {
                // Remove the row from the database.
                _REDDatabase.Waypoints.Remove(result);
                await _REDDatabase.SaveChangesAsync();
            }
            return result;
        }

        /// <summary>
        /// Get all GPS waypoints in the DB.
        /// </summary>
        /// <returns>A list of GPSWaypoint objects.</returns>
        public async Task<List<GPSWaypoint>> GetAllGPSWaypoints()
        {
            return await _REDDatabase.Waypoints.ToListAsync();
        }

        /// <summary>
        /// Get a waypoint from the DB.
        /// </summary>
        /// <param name="waypointID">The ID of the waypoint to return.</param>
        /// <returns>A GPSWaypoint object, null if not found.</returns>
        public async Task<GPSWaypoint?> GetGPSWaypoint(int waypointID)
        {
            return await _REDDatabase.Waypoints.FirstOrDefaultAsync(x => x.ID == waypointID);
        }

        /// <summary>
        /// Update the data for a GPSWaypoint in the DB.
        /// </summary>
        /// <param name="waypoint">A GPSWaypoint object containing the new data.</param>
        /// <returns>The object stored in the database.</returns>
        public async Task<GPSWaypoint?> UpdateGPSWaypoint(GPSWaypoint waypoint)
        {
            // Find the waypoint object to update in the DB.
            GPSWaypoint? result = await _REDDatabase.Waypoints.FirstOrDefaultAsync(x => x.ID == waypoint.ID);
            // Check if we found it.
            if (result is not null)
            {
                // Get the type of the GPSWaypoint class
                Type type = typeof(GPSWaypoint);

                // Iterate over all properties of the GPSWaypoint class
                foreach (PropertyInfo property in type.GetProperties())
                {
                    // Get the value of the property from the incoming waypoint object
                    object? newValue = property.GetValue(waypoint);

                    // If the new value is not null, update the property in the result object
                    if (newValue != null)
                    {
                        property.SetValue(result, newValue);
                    }
                }

                // Save changes to DB.
                await _REDDatabase.SaveChangesAsync();
            }

            return result;
        }
    }
}