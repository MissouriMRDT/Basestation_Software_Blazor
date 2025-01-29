using Basestation_Software.Models.Arm;
using Basestation_Software.Models.Geospatial;
using Microsoft.EntityFrameworkCore;

namespace Basestation_Software.Api.Entities;

public class ArmPresetRepository : IArmPresetRepository
{
    private readonly REDDatabase _REDDatabase;

    /// <summary>
    /// Constructor
    /// </summary>
    /// <param name="db">Implicitly passed in.</param>
    public ArmPresetRepository(REDDatabase db)
    {
        _REDDatabase = db;
    }

    /// <summary>
    /// Add a preset to the database.
    /// </summary>
    /// <param name="preset">The new arm preset.</param>
    /// <returns>The object stored in the DB.</returns>
    public async Task<ArmPreset?> AddPreset(ArmPreset preset)
    {
        // Make sure the name is null.
        preset.ID = null;
        // Add new row to database table.
        var result = await _REDDatabase.AddAsync(preset);
        await _REDDatabase.SaveChangesAsync();
        // Return the inserted value.
        return result.Entity;
    }

    /// <summary>
    /// Remove a preset from the database.
    /// </summary>
    /// <param name="preset">The id of the preset to remove.</param>
    public async Task<ArmPreset?> DeletePreset(int id)
    {
        // Find the first preset with the same name.
        ArmPreset? result = await _REDDatabase.ArmPresets.FirstOrDefaultAsync(x => x.ID == id);
        // Check if it was found.
        if (result is not null)
        {
            // Remove the row from the database.
            _REDDatabase.ArmPresets.Remove(result);
            await _REDDatabase.SaveChangesAsync();
        }
        return result;
    }

    /// <summary>
    /// Get all arm presets in the DB.
    /// </summary>
    /// <returns>A list of arm preset objects.</returns>
    public async Task<List<ArmPreset>?> GetAllPresets()
    {
        return await _REDDatabase.ArmPresets.ToListAsync();
    }

    /// <summary>
    /// Get a arm preset from the DB.
    /// </summary>
    /// <param name="name">The id of the preset to return.</param>
    /// <returns>A preset object, null if not found.</returns>
    public async Task<ArmPreset?> GetPreset(int id)
    {
        return await _REDDatabase.ArmPresets.FirstOrDefaultAsync(x => x.ID == id);
    }
}
