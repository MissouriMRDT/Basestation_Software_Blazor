using System.Reflection;
using Basestation_Software.Models.Geospatial;
using Microsoft.EntityFrameworkCore;

namespace Basestation_Software.Api.Entities
{
    public class MapTileRepository : IMapTileRepository
    {
        // Declare member variables.
        private readonly REDDatabase _REDDatabase;

        /// <summary>
        /// Constructor
        /// </summary>
        /// <param name="db"></param>
        public MapTileRepository(REDDatabase db)
        {
            _REDDatabase = db;
        }

        public async Task<MapTile?> AddMapTile(MapTile tile)
        {
            // Make sure the ID is null.
            tile.ID = null;
            // Add a new tile to the database.
            var result = await _REDDatabase.MapTiles.AddAsync(tile);
            await _REDDatabase.SaveChangesAsync();
            // Return the inserted value.
            return result.Entity;
        }

        public async Task<MapTile?> UpdateMapTile(MapTile tile)
        {
            // Find the tile object to update in the DB.
            MapTile? result = await _REDDatabase.MapTiles.FirstOrDefaultAsync(x => x.ID == tile.ID);
            // Check if we found it.
            if (result is not null)
            {
                // Get the type of the GPStile class
                Type type = typeof(MapTile);

                // Iterate over all properties of the GPStile class
                foreach (PropertyInfo property in type.GetProperties())
                {
                    // Get the value of the property from the incoming tile object
                    object? newValue = property.GetValue(tile);

                    // If the new value is not null, update the property in the result object
                    if (newValue != null)
                    {
                        property.SetValue(result, newValue);
                    }
                }

                // Save changes to DB.
                await _REDDatabase.SaveChangesAsync();
            }

            return result;
        }

        public async Task<MapTile?> DeleteMapTile(int tileID)
        {
            // Find the first tile with the same ID.
            MapTile? result = await _REDDatabase.MapTiles.FirstOrDefaultAsync(x => x.ID == tileID);
            // Check if it was found.
            if (result is not null)
            {
                // Remove from the db.
                _REDDatabase.MapTiles.Remove(result);
                await _REDDatabase.SaveChangesAsync();
            }
            return result;
        }

        public async Task<MapTile?> GetMapTile(int x, int y, int z)
        {
            return await _REDDatabase.MapTiles.FirstOrDefaultAsync(tile => tile.X == x && tile.Y == y && tile.Z == z);
        }
    }
}