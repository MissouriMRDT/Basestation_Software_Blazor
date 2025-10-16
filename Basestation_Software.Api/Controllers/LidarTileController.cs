using Basestation_Software.Api.Entities;
using Basestation_Software.Models.Geospatial;
using Microsoft.AspNetCore.Mvc;

namespace Basestation_Software.Api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class LidarTilesController : ControllerBase
{
    // Declare member variables.
    private readonly ILidarTileRepository _TileRepository;

    /// <summary>
    /// Constructor
    /// </summary>
    /// <param name="tileRepository"></param>
    public LidarTilesController(ILidarTileRepository tileRepository)
    {
        _TileRepository = tileRepository;
    }

    [HttpPut]
    public async Task<IActionResult> AddMapTile(LidarTile tile)
    {
        LidarTile? dbTile = await _TileRepository.AddMapTile(tile);
        if (dbTile is not null)
        {
            return Ok();
        }
        else
        {
            return BadRequest();
        }
    }

    [HttpPost]
    public async Task<IActionResult> UpdateMapTile(LidarTile tile)
    {
        LidarTile? dbTile = await _TileRepository.UpdateMapTile(tile);
        if (dbTile is not null)
        {
            return Ok(dbTile);
        }
        else
        {
            return NotFound();
        }
    }

    [HttpDelete("{tileID}")]
    public async Task<IActionResult> DeleteMapTile(int tileID)
    {
        LidarTile? dbTile = await _TileRepository.DeleteMapTile(tileID);
        if (dbTile is not null)
        {
            return Ok();
        }
        else
        {
            return NotFound();
        }
    }

    [HttpDelete("{z}/{y}/{x}")]
    public async Task<IActionResult> DeleteMapTile(int z, int y, int x)
    {
        LidarTile? tileToDelete = await _TileRepository.GetMapTile(x, y, z);
        LidarTile? dbTile = await _TileRepository.DeleteMapTile(tileToDelete?.ID ?? -1);
        if (dbTile is not null)
        {
            return Ok();
        }
        else
        {
            return NotFound();
        }
    }

    [HttpGet("{z}/{y}/{x}.png")]
    public async Task<IActionResult> GetMapTileImage(int z, int y, int x)
    {
        LidarTile? dbTile = await _TileRepository.GetMapTile(x, y, z);
        if (dbTile is not null && dbTile.ImageData is not null)
        {
            return File(dbTile.ImageData, "image/png");
        }
        else
        {
            return NotFound();
        }

    }

    [HttpGet("{z}/{y}/{x}")]
    public async Task<IActionResult> GetMapTile(int z, int y, int x)
    {
        LidarTile? dbTile = await _TileRepository.GetMapTile(x, y, z);
        if (dbTile is not null)
        {
            return Ok(dbTile);
        }
        else
        {
            return NotFound();
        }

    }
}
