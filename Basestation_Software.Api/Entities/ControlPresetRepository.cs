using Basestation_Software.Models.Arm;
using Microsoft.EntityFrameworkCore;

namespace Basestation_Software.Api.Entities;

public class ControlPresetRepository : IControlPresetRepository
{
    private readonly REDDatabase _REDDatabase;

    /// <summary>
    /// Constructor
    /// </summary>
    /// <param name="db">Implicitly passed in.</param>
    public ControlPresetRepository(REDDatabase db)
    {
        _REDDatabase = db;
    }

    /// <summary>
    /// Add a preset to the database.
    /// </summary>
    /// <param name="preset">The new arm preset.</param>
    /// <returns>The object stored in the DB.</returns>
    public async Task<ControlPreset?> AddPreset(ControlPreset preset)
    {
        // Add new row to database table.
        var result = await _REDDatabase.AddAsync(new ControlPreset
        {
            ID = null,
            Name = preset.Name,
            jointInversions = preset.jointInversions,
            gamepadBinds = preset.gamepadBinds,
            jointSpeeds = preset.jointSpeeds,
        });
        await _REDDatabase.SaveChangesAsync();
        // Return the inserted value.
        return result.Entity;
    }

    /// <summary>
    /// Remove a preset from the database.
    /// </summary>
    /// <param name="preset">The id of the preset to remove.</param>
    public async Task<ControlPreset?> DeletePreset(int id)
    {
        // Find the first preset with the same id.
        ControlPreset? result = await _REDDatabase.ControlPresets.FirstOrDefaultAsync(x => x.ID == id);
        // Check if it was found.
        if (result is not null)
        {
            // Remove the row from the database.
            _REDDatabase.ControlPresets.Remove(result);
            await _REDDatabase.SaveChangesAsync();
        }
        return result;
    }

    /// <summary>
    /// Get all arm presets in the DB.
    /// </summary>
    /// <returns>A list of arm preset objects.</returns>
    public async Task<List<ControlPreset>?> GetAllPresets()
    {
        List<ControlPreset> result = new();
        _REDDatabase.ControlPresets.ToListAsync().Result.ForEach(p => result.Add(new ControlPreset
        {
            ID = p.ID,
            Name = p.Name,
            jointInversions = p.jointInversions,
            gamepadBinds = p.gamepadBinds,
            jointSpeeds = p.jointSpeeds,

        }));
        return result;
    }

    /// <summary>
    /// Get a arm preset from the DB.
    /// </summary>
    /// <param name="name">The id of the preset to return.</param>
    /// <returns>A preset object, null if not found.</returns>
    public async Task<ControlPreset?> GetPreset(int id)
    {
        var result = await _REDDatabase.ControlPresets.FirstOrDefaultAsync(x => x.ID == id);
        return new ControlPreset
        {
            ID = result?.ID,
            Name = result?.Name,
            jointInversions = result?.jointInversions,
            gamepadBinds = result?.gamepadBinds,
            jointSpeeds = result?.jointSpeeds,

        };
    }
}
