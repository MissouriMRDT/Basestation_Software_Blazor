using Basestation_Software.Models.Arm;
using Basestation_Software.Models.Geospatial;
using Microsoft.EntityFrameworkCore;
using System.Text.Json;

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
    public async Task<ArmPresetEntity?> AddPreset(ArmPreset preset)
    {
        // Add new row to database table.
        var result = await _REDDatabase.AddAsync(new ArmPresetEntity
        {
            ID = null,
            Name = preset.Name,
            JointData = JsonSerializer.Serialize(preset.Joints)
        });
        await _REDDatabase.SaveChangesAsync();
        // Return the inserted value.
        return result.Entity;
    }

    /// <summary>
    /// Remove a preset from the database.
    /// </summary>
    /// <param name="preset">The id of the preset to remove.</param>
    public async Task<ArmPresetEntity?> DeletePreset(int id)
    {
        // Find the first preset with the same id.
        ArmPresetEntity? result = await _REDDatabase.ArmPresets.FirstOrDefaultAsync(x => x.ID == id);
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
        List<ArmPreset> result = new();
        _REDDatabase.ArmPresets.ToListAsync().Result.ForEach(p => result.Add(new ArmPreset
        {
            ID = p.ID,
            Name = p.Name,
            Joints = p.JointData is not null ? JsonSerializer.Deserialize<JointValues>(p.JointData) : null,
        }));
        return result;
    }

    /// <summary>
    /// Get a arm preset from the DB.
    /// </summary>
    /// <param name="name">The id of the preset to return.</param>
    /// <returns>A preset object, null if not found.</returns>
    public async Task<ArmPreset?> GetPreset(int id)
    {
        var result = await _REDDatabase.ArmPresets.FirstOrDefaultAsync(x => x.ID == id);
        return new ArmPreset
        {
            ID = result?.ID,
            Name = result?.Name,
            Joints = result?.JointData is not null ? JsonSerializer.Deserialize<JointValues>(result?.JointData) : null,

        };
    }
}
