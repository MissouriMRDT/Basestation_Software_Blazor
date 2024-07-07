using Basestation_Software.Api.Entities;
using Basestation_Software.Models.Geospatial;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Basestation_Software.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MapTilesController : ControllerBase
    {
        // Declare member variables.
        private readonly IMapTileRepository _TileRepository;

        /// <summary>
        /// Constructor
        /// </summary>
        /// <param name="tileRepository"></param>
        public MapTilesController(IMapTileRepository tileRepository)
        {
            _TileRepository = tileRepository;
        }

        [HttpPut]
        public async Task<IActionResult> AddMapTile(MapTile tile)
        {
            MapTile? dbTile = await _TileRepository.AddMapTile(tile);
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
        public async Task<IActionResult> UpdateMapTile(MapTile tile)
        {
            MapTile? dbTile = await _TileRepository.UpdateMapTile(tile);
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
            MapTile? dbTile = await _TileRepository.DeleteMapTile(tileID);
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
            MapTile? tileToDelete = await _TileRepository.GetMapTile(x, y, z);    
            MapTile? dbTile = await _TileRepository.DeleteMapTile(tileToDelete?.ID ?? -1);
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
            MapTile? dbTile = await _TileRepository.GetMapTile(x, y, z);
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
            MapTile? dbTile = await _TileRepository.GetMapTile(x, y, z);
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
}