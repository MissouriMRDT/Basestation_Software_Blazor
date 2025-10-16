using Basestation_Software.Models.Arm;
using Basestation_Software.Models.Geospatial;
using System.Net.Http;

namespace Basestation_Software.Web.Core.Services;

public class ArmAngularService
{
    private readonly HttpClient _HttpClient;
    private List<ArmPreset> _presets = [];

    /// <summary>
    /// Constructor
    /// </summary>
    /// <param name="httpClient">Implicitly passed in, used to talk to the basestation API.</param>
    public ArmAngularService(HttpClient httpClient)
    {
        // Assign member variables.
        _HttpClient = httpClient;
    }

    /// <summary>
    /// Refreshes the cached presets list from the API database.
    /// </summary>
    /// <returns></returns>
    public async Task RefreshPresets()
    {
        List<ArmPreset>? presets = await _HttpClient.GetFromJsonAsync<List<ArmPreset>?>("http://localhost:5000/api/ArmPreset");
        if (presets is not null)
        {
            _presets = presets;
        }
    }

    /// <summary>
    /// Add a new preset to the database.
    /// </summary>
    /// <param name="preset">The preset to add.</param>
    /// <returns></returns>
    public async Task AddPreset(ArmPreset preset)
    {
        // Add the preset to the database with the API.
        await _HttpClient.PutAsJsonAsync($"http://localhost:5000/api/ArmPreset", preset);
        // Refresh data.
        await RefreshPresets();
    }

    /// <summary>
    /// Given a preset name delete it from the database.
    /// </summary>
    /// <param name="preset">The preset to delete.</param>
    /// <returns></returns>
    public async Task DeletePreset(ArmPreset preset)
    {
        // Delete the preset from the database.
        Console.WriteLine("ID: " + preset.ID);
        await _HttpClient.DeleteAsync($"http://localhost:5000/api/ArmPreset/{preset.ID}");
        // Refresh data.
        await RefreshPresets();
    }

    /// <summary>
    /// Return a reference to the list of presets.
    /// </summary>
    /// <returns></returns>
    public List<ArmPreset> GetPresets()
    {
        return _presets;
    }

    /// <summary>
    /// Returns the preset with the given ID.
    /// </summary>
    /// <param name="presetID">The ID of the preset to retrieve.</param>
    /// <returns></returns>
    public ArmPreset? GetPreset(int id)
    {
        return _presets.FirstOrDefault(x => x.ID == id);
    }

}
