using Basestation_Software.Models.Geospatial;

namespace Basestation_Software.Web.Core.Services;

public class LidarTileService
{
    // Declare member variables.
    private readonly HttpClient _HttpClient;


    /// <summary>
    /// Constructor
    /// </summary>
    /// <param name="httpClient">Implicitly passed in, used to talk to the basestation API.</param>
    public LidarTileService(HttpClient httpClient)
    {
        // Assign member variables.
        _HttpClient = httpClient;
    }

    /// <summary>
    /// Add a new tile to the database.
    /// </summary>
    /// <param name="tile">The tile to add.</param>
    /// <returns></returns>
    public async Task AddMapTile(LidarTile tile)
    {
        // Add the tile to the database with the API.
        await _HttpClient.PutAsJsonAsync($"http://localhost:5000/api/LidarTiles", tile);
    }

    /// <summary>
    /// Update a tile in the database.
    /// </summary>
    /// <param name="tile">The tile to update. ID must match an existing ID.</param>
    /// <returns></returns>
    public async Task UpdateMapTile(LidarTile tile)
    {
        // Write the tile data to the database with the API.
        await _HttpClient.PostAsJsonAsync($"http://localhost:5000/api/LidarTiles", tile);
    }

    /// <summary>
    /// Given a tile ID delete it from the database.
    /// </summary>
    /// <param name="tile">The tile to delete.</param>
    /// <returns></returns>
    public async Task DeleteMapTile(LidarTile tile)
    {
        // Delete the tile from the database.
        await _HttpClient.DeleteAsync($"http://localhost:5000/api/LidarTiles/{tile.ID}");
    }

    /// <summary>
    /// Returns the tile image with the given x, y, z
    /// </summary>
    /// <param name="x"></param>
    /// <param name="y"></param>
    /// <param name="z"></param>
    /// <returns></returns>
    public async Task<LidarTile?> GetMapTileImage(int x, int y, int z)
    {
        try
        {
            return await _HttpClient.GetFromJsonAsync<LidarTile?>($"http://localhost:5000/api/LidarTiles/{z}/{y}/{x}.png");
        }
        catch (Exception)
        {
            return null;
        }
    }

    /// <summary>
    /// Returns the tile with the given x, y, z
    /// </summary>
    /// <param name="x"></param>
    /// <param name="y"></param>
    /// <param name="z"></param>
    /// <returns></returns>
    public async Task<LidarTile?> GetMapTile(int x, int y, int z)
    {
        try
        {
            return await _HttpClient.GetFromJsonAsync<LidarTile?>($"http://localhost:5000/api/LidarTiles/{z}/{y}/{x}");
        }
        catch (Exception)
        {
            return null;
        }
    }
}
