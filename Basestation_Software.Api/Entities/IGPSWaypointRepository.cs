using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Basestation_Software.Models.Geospatial;

namespace Basestation_Software.Api.Entities
{
    public interface IGPSWaypointRepository
    {
        Task<GPSWaypoint?> AddGPSWaypoint(GPSWaypoint waypoint);
        Task<GPSWaypoint?> DeleteGPSWaypoint(int waypointID);
        Task<List<GPSWaypoint>> GetAllGPSWaypoints();
        Task<GPSWaypoint?> GetGPSWaypoint(int waypointID);
        Task<GPSWaypoint?> UpdateGPSWaypoint(GPSWaypoint waypoint);
    }
}