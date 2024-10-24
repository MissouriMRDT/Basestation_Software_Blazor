using Basestation_Software.Api.Entities;
using Basestation_Software.Models.Config;
using Microsoft.AspNetCore.Mvc;

namespace Basestation_Software.Api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ConfigController : ControllerBase
{
    // Declare member variables.
    private readonly IConfigRepository _ConfigRepository;

    private static readonly Guid _DefaultGuid = new("00000000-0000-0000-0000-000000000001");

    /// <summary>
    /// Constructor
    /// </summary>
    /// <param name="IConfigRepository">Implicitly passed in.</param>
    public ConfigController(IConfigRepository ConfigRepository) => _ConfigRepository = ConfigRepository;

    /// <summary>
    /// IN-Code API Endpoint for adding a config to the DB.
    /// </summary>
    /// <param name="config">The config object.</param>
    /// <returns>The API response object.</returns>
    [HttpPut]
    public async Task<IActionResult> AddConfig(Config config) {
        Guid? id = await _ConfigRepository.AddConfig(config);
        return id is not null ? Ok(id) : BadRequest();
    }

    /// <summary>
    /// IN-Code API Endpoint for removing a config from the DB.
    /// </summary>
    /// <param name="id">The config id.</param>
    /// <returns>The API response object.</returns>
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteConfig(Guid id) => id.Equals(_DefaultGuid) || (await _ConfigRepository.DeleteConfig(id)) is null ? Ok() : NotFound();

    /// <summary>
    /// IN-Code API Endpoint for getting a waypoint to the DB.
    /// </summary>
    /// <param name="id">The config id.</param>
    /// <returns>The API response object.</returns>
    [HttpGet("{id}")]
    public async Task<IActionResult> GetConfig(Guid id)
    {
        Config? config = await _ConfigRepository.GetConfig(id);
        return config is not null ? Ok(config) : NotFound();
    }

    /// <summary>
    /// IN-Code API Endpoint for getting all configs from the DB.
    /// </summary>
    /// <returns>The API response object.</returns>
    [HttpGet]
    public async Task<IActionResult> GetAllConfigs() => Ok(await _ConfigRepository.GetAllConfigs());

    /// <summary>
    /// IN-Code API Endpoint for updating a config in the DB.
    /// </summary>
    /// <param name="id">The config id.</param>
    /// <param name="config">The config object.</param>
    /// <returns>The API response object.</returns>
    [HttpPost("{id}")]
    public async Task<IActionResult> UpdateConfig(Guid id, Config config) => (await _ConfigRepository.UpdateConfig(id, config)) is not null ? Ok() : NotFound();

}
