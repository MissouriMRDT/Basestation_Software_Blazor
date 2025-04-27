using Basestation_Software.Api.Entities;
using Basestation_Software.Models.Arm;
using Microsoft.AspNetCore.Mvc;

namespace Basestation_Software.Api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ArmControlPresetController : ControllerBase
{
    // Declare member variables.
    private readonly ControlPresetRepository _controlPresetRepository;

    /// <summary>
    /// Constructor
    /// </summary>
    /// <param name="controlPresetRepository">Implicitly passed in.</param>
    public ArmControlPresetController(ControlPresetRepository controlPresetRepository)
    {
        _controlPresetRepository = controlPresetRepository;
    }

    /// <summary>
    /// IN-Code API Endpoint for adding an arm preset to the DB.
    /// </summary>
    /// <param name="preset">The arm preset object.</param>
    /// <returns>The API response object.</returns>
    [HttpPut]
    public async Task<IActionResult> AddPreset(ControlPreset preset)
    {
        ControlPreset? dbPreset = await _controlPresetRepository.AddPreset(preset);
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
        ControlPreset? dbPreset = await _controlPresetRepository.DeletePreset(id);
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
        ControlPreset? dbPreset = await _controlPresetRepository.GetPreset(id);
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
        return Ok(await _controlPresetRepository.GetAllPresets());
    }
}
