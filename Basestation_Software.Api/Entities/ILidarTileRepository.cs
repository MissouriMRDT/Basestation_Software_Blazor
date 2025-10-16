using Basestation_Software.Models.Geospatial;

namespace Basestation_Software.Api.Entities;

public interface ILidarTileRepository
{
    Task<LidarTile?> AddMapTile(LidarTile tile);
    Task<LidarTile?> UpdateMapTile(LidarTile tile);
    Task<LidarTile?> GetMapTile(int x, int y, int z);
    Task<LidarTile?> DeleteMapTile(int tileID);
}
