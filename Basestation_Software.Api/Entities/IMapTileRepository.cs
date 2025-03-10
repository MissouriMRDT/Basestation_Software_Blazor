using Basestation_Software.Models.Geospatial;

namespace Basestation_Software.Api.Entities;

public interface IMapTileRepository
{
    Task<MapTile?> AddMapTile(MapTile tile);
    Task<MapTile?> UpdateMapTile(MapTile tile);
    Task<MapTile?> GetMapTile(int x, int y, int z);
    Task<MapTile?> DeleteMapTile(int tileID);
}