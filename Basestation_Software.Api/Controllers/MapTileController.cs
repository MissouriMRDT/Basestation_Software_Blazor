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

        [HttpGet("{z}/{x}/{y}.png")]
        public async Task<IActionResult> GetMapTile(int z, int x, int y)
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
    }
}