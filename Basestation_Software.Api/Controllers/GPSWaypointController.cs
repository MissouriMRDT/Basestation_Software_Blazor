using Basestation_Software.Api.Entities;
using Basestation_Software.Models.Geospatial;
using Microsoft.AspNetCore.Mvc;

namespace Basestation_Software.Api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class GPSWaypointController : ControllerBase
{
    // Declare member variables.
    private readonly IGPSWaypointRepository _GPSWaypointRepository;

    /// <summary>
    /// Constructor
    /// </summary>
    /// <param name="GPSWaypointRepository">Implicitly passed in.</param>
    public GPSWaypointController(IGPSWaypointRepository GPSWaypointRepository)
    {
        _GPSWaypointRepository = GPSWaypointRepository;
    }

    /// <summary>
    /// IN-Code API Endpoint for adding a waypoint to the DB.
    /// </summary>
    /// <param name="waypoint">The waypoint object.</param>
    /// <returns>The API response object.</returns>
    [HttpPut]
    public async Task<IActionResult> AddGPSWaypoint(GPSWaypoint waypoint)
    {
        GPSWaypoint? dbWaypoint = await _GPSWaypointRepository.AddGPSWaypoint(waypoint);
        if (dbWaypoint is not null)
        {
            return Ok();
        }
        else
        {
            return BadRequest();
        }
    }

    /// <summary>
    /// IN-Code API Endpoint for removing a waypoint from the DB.
    /// </summary>
    /// <param name="waypointID">The waypoint ID.</param>
    /// <returns>The API response object.</returns>
    [HttpDelete("{waypointID}")]
    public async Task<IActionResult> DeleteGPSWaypoint(int waypointID)
    {
        GPSWaypoint? dbWaypoint = await _GPSWaypointRepository.DeleteGPSWaypoint(waypointID);
        if (dbWaypoint is not null)
        {
            return Ok();
        }
        else
        {
            return NotFound();
        }
    }

    /// <summary>
    /// IN-Code API Endpoint for getting a waypoint to the DB.
    /// </summary>
    /// <param name="waypointID">The waypoint id.</param>
    /// <returns>The API response object.</returns>
    [HttpGet("{waypointID}")]
    public async Task<IActionResult> GetGPSWaypoint(int waypointID)
    {
        GPSWaypoint? dbWaypoint = await _GPSWaypointRepository.GetGPSWaypoint(waypointID);
        if (dbWaypoint is not null)
        {
            return Ok(dbWaypoint);
        }
        else
        {
            return NotFound();
        }
    }

    /// <summary>
    /// IN-Code API Endpoint for getting all waypoints from the DB.
    /// </summary>
    /// <returns>The API response object.</returns>
    [HttpGet]
    public async Task<IActionResult> GetAllGPSWaypoints()
    {
        return Ok(await _GPSWaypointRepository.GetAllGPSWaypoints());
    }

    /// <summary>
    /// IN-Code API Endpoint for updating a waypoint to the DB.
    /// </summary>
    /// <param name="waypoint">The waypoint object.</param>
    /// <returns>The API response object.</returns>
    [HttpPost]
    public async Task<IActionResult> UpdateGPSWaypoint(GPSWaypoint waypoint)
    {
        GPSWaypoint? dbWaypoint = await _GPSWaypointRepository.UpdateGPSWaypoint(waypoint);
        if (dbWaypoint is not null)
        {
            return Ok(dbWaypoint);
        }
        else
        {
            return NotFound();
        }
    }

}
