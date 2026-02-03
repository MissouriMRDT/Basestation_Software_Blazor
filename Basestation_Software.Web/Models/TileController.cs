using Microsoft.EntityFrameworkCore;

namespace Basestation_Software.Web.Models;

public class TileController
{
    public static async Task<IResult> GetMapTileImage(IDbContextFactory<DatabaseContext> dbContextFactory, int z, int y, int x)
    {
        using DatabaseContext databaseContext = await dbContextFactory.CreateDbContextAsync();
        MapTile? tile = await databaseContext.MapTiles.FindAsync([x, y, z]);
        return tile == null ? Results.NotFound() : Results.File(tile.ImageData, "image/png");
    }

    public static async Task<IResult> GetLidarTileImage(IDbContextFactory<DatabaseContext> dbContextFactory, int z, int y, int x)
    {
        using DatabaseContext databaseContext = await dbContextFactory.CreateDbContextAsync();
        LidarTile? tile = await databaseContext.LidarTiles.FindAsync([x, y, z]);
        return tile == null ? Results.NotFound() : Results.File(tile.ImageData, "image/png");
    }
}