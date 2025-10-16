using Basestation_Software.Models.Arm;

namespace Basestation_Software.Web.Core.Services;

public class ArmControlService
{
    private readonly HttpClient _HttpClient;
    private List<ControlPreset> _presets = [];

    public delegate void GripperChangedCallback(bool isAlternateGripper);
    private event GripperChangedCallback? GripperChangedNotifier;

    /// <summary>
    /// Constructor
    /// </summary>
    /// <param name="httpClient">Implicitly passed in, used to talk to the basestation API.</param>
    public ArmControlService(HttpClient httpClient)
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
        List<ControlPreset>? presets = await _HttpClient.GetFromJsonAsync<List<ControlPreset>?>("http://localhost:5000/api/ArmControlPreset");
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
    public async Task AddPreset(ControlPreset preset)
    {
        await _HttpClient.PutAsJsonAsync($"http://localhost:5000/api/ArmControlPreset", preset);
        // Refresh data.
        await RefreshPresets();
    }

    /// <summary>
    /// Given a preset name delete it from the database.
    /// </summary>
    /// <param name="preset">The preset to delete.</param>
    /// <returns></returns>
    public async Task DeletePreset(ControlPreset preset)
    {
        // Delete the preset from the database.
        await _HttpClient.DeleteAsync($"http://localhost:5000/api/ArmControlPreset/{preset.ID}");
        // Refresh data.
        await RefreshPresets();
    }

    /// <summary>
    /// Return a reference to the list of presets.
    /// </summary>
    /// <returns></returns>
    public List<ControlPreset> GetPresets()
    {
        return _presets;
    }

    /// <summary>
    /// Returns the preset with the given ID.
    /// </summary>
    /// <param name="presetID">The ID of the preset to retrieve.</param>
    /// <returns></returns>
    public ControlPreset? GetPreset(int id)
    {
        return _presets.FirstOrDefault(x => x.ID == id);
    }

    public void SubscribeToGripperChanged(GripperChangedCallback callback)
    {
        GripperChangedNotifier += callback;
    }

    public void UnsubscribeFromGripperChanged(GripperChangedCallback callback)
    {
        GripperChangedNotifier -= callback;
    }

    private bool _isAlternateGripper;

    public bool IsAlternateGripper
    {
        get { return _isAlternateGripper; }
        set
        {
            _isAlternateGripper = value;
            GripperChangedNotifier?.Invoke(_isAlternateGripper);
        }
    }

}
