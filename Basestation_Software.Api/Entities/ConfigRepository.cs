using Basestation_Software.Models.Config;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.EntityFrameworkCore;
using System.Reflection;
using System.Text.Json;

namespace Basestation_Software.Api.Entities;

public class ConfigRepository : IConfigRepository
{
    // Declare member variables.
    private readonly REDDatabase _REDDatabase;

    /// <summary>
    /// Constructor
    /// </summary>
    /// <param name="db">Implicitly passed in.</param>
    public ConfigRepository(REDDatabase db) => _REDDatabase = db;

    /// <summary>
    /// Add a configuration to the database.
    /// </summary>
    /// <param name="config">The new configuration.</param>
    /// <returns>New id if insertion successful.</returns>
    public async Task<Guid?> AddConfig(Config config)
    {
        Guid id = Guid.NewGuid();
        // Add new row to database table.
        var result = await _REDDatabase.Configs.AddAsync(new ConfigEntity {
            ID = id,
            Data = JsonSerializer.Serialize(config)
        });
        await _REDDatabase.SaveChangesAsync();
        // Return the inserted value.
        return result is not null ? id : null;
    }

    /// <summary>
    /// Remove a configuration from the database.
    /// </summary>
    /// <param name="id">The id of the configuration to remove.</param>
    public async Task<ConfigEntity?> DeleteConfig(Guid id)
    {
        // Find the first waypoint with the same ID.
        ConfigEntity? result = await _REDDatabase.Configs.FindAsync(id);
        // Check if it was found.
        if (result is not null)
        {
            // Remove the row from the database.
            _REDDatabase.Configs.Remove(result);
            await _REDDatabase.SaveChangesAsync();
        }
        return result;
    }

    /// <summary>
    /// Get all configs in the DB.
    /// </summary>
    /// <returns>A list of Config objects.</returns>
    public async Task<Dictionary<Guid, Config>> GetAllConfigs()
    {
        // Deserialize config entries and sort out null values.
#pragma warning disable CS8619 // Nullability of reference types in value doesn't match target type.
        return (await _REDDatabase.Configs.ToListAsync()).ToDictionary(
            x => x.ID,
            x => JsonSerializer.Deserialize<Config>(x.Data)
        ).Where(x => x.Value is not null).ToDictionary(x => x.Key, x => x.Value);
#pragma warning restore CS8619 // Nullability of reference types in value doesn't match target type.
    }

    /// <summary>
    /// Get a config from the DB.
    /// </summary>
    /// <param name="id">The id of the config to return.</param>
    /// <returns>A Config object, null if not found.</returns>
    public async Task<Config?> GetConfig(Guid id)
    {
        ConfigEntity? result = await _REDDatabase.Configs.FindAsync(id);
        return result is not null ? JsonSerializer.Deserialize<Config>(result.Data) : null;
    }

    /// <summary>
    /// Update the data for a Config in the DB or add it if it does not exist.
    /// </summary>
    /// <param name="id">The id of the config to update.</param>
    /// <param name="config">A Config object containing the new data.</param>
    /// <returns>The object stored in the database.</returns>
    public async Task<ConfigEntity?> UpdateConfig(Guid id, Config config)
    {
        Console.WriteLine("guid {0}", id);
        ConfigEntity? result = await _REDDatabase.Configs.FindAsync(id);
        if (result is null)
        {
            Console.WriteLine("adding guid {0}", id);
            // Add new row to database table.
            result = (await _REDDatabase.Configs.AddAsync(new ConfigEntity
            {
                ID = id,
                Data = JsonSerializer.Serialize(config)
            })).Entity;
            await _REDDatabase.SaveChangesAsync();
            // Return the inserted value.
            return result;
        }
        else
        {
            // Update data
            result.Data = JsonSerializer.Serialize(config);

            // Save changes to DB.
            await _REDDatabase.SaveChangesAsync();
        }

        return result;
    }
}