using Basestation_Software.Api.Entities;
using Basestation_Software.Models.Arm;
using Microsoft.AspNetCore.Mvc;

namespace Basestation_Software.Api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ArmPresetController : ControllerBase
{
    // Declare member variables.
    private readonly IArmPresetRepository _armPresetRepository;

    /// <summary>
    /// Constructor
    /// </summary>
    /// <param name="armPresetRepository">Implicitly passed in.</param>
    public ArmPresetController(IArmPresetRepository armPresetRepository)
    {
        _armPresetRepository = armPresetRepository;
    }

    /// <summary>
    /// IN-Code API Endpoint for adding an arm preset to the DB.
    /// </summary>
    /// <param name="preset">The arm preset object.</param>
    /// <returns>The API response object.</returns>
    [HttpPut]
    public async Task<IActionResult> AddPreset(ArmPreset preset)
    {
        ArmPreset? dbPreset = await _armPresetRepository.AddPreset(preset);
        if (dbPreset is not null)
        {
            return Ok();
        }
        else
        {
            return BadRequest();
        }
    }

    /// <summary>
    /// IN-Code API Endpoint for removing a preset from the DB.
    /// </summary>
    /// <param name="id">The preset id.</param>
    /// <returns>The API response object.</returns>
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeletePreset(int id)
    {
        ArmPreset? dbPreset = await _armPresetRepository.DeletePreset(id);
        if (dbPreset is not null)
        {
            return Ok();
        }
        else
        {
            return NotFound();
        }
    }

    /// <summary>
    /// IN-Code API Endpoint for getting a preset from the DB.
    /// </summary>
    /// <param name="id">The preset id.</param>
    /// <returns>The API response object.</returns>
    [HttpGet("{id}")]
    public async Task<IActionResult> GetPreset(int id)
    {
        ArmPreset? dbPreset = await _armPresetRepository.GetPreset(id);
        if (dbPreset is not null)
        {
            return Ok(dbPreset);
        }
        else
        {
            return NotFound();
        }
    }

    /// <summary>
    /// IN-Code API Endpoint for getting all presets from the DB.
    /// </summary>
    /// <returns>The API response object.</returns>
    [HttpGet]
    public async Task<IActionResult> GetAllPresets()
    {
        return Ok(await _armPresetRepository.GetAllPresets());
    }
}
