using Basestation_Software.Models.Config;

namespace Basestation_Software.Web.Core.Services;
public class ConfigService
{
    // Injected services.
    private readonly HttpClient _HttpClient;
    // Declare member variables.
    private Dictionary<Guid, Config> _configs = [];

    // Method delegates and events.
    public delegate Task SyncConfigsCallback();
    private event SyncConfigsCallback? SyncConfigsNotifier;

    /// <summary>
    /// Constructor
    /// </summary>
    /// <param name="httpClient">Implicitly passed in, used to talk to the basestation API.</param>
    public ConfigService(HttpClient httpClient)
    {
        // Assign member variables.
        _HttpClient = httpClient;
    }

    /// <summary>
    /// Refreshes the cached configs list from the API database.
    /// </summary>
    public async Task RefreshConfigs()
    {
        Dictionary<Guid, Config>? configs = await _HttpClient.GetFromJsonAsync<Dictionary<Guid, Config>>("http://localhost:5000/api/Config");
        if (configs is not null)
        {
            _configs = configs;
            // Invoke the callback to refresh page data.
            if (SyncConfigsNotifier is not null)
                await SyncConfigsNotifier.Invoke();
        }
    }

    /// <summary>
    /// Add a callback to get invoked when the config list changes.
    /// </summary>
    public void SubscribeToConfigChanges(SyncConfigsCallback callback)
    {
        SyncConfigsNotifier += callback;
    }

    /// <summary>
    /// Remove a callback from getting invoked when the config list changes.
    /// </summary>
    public void UnsubscribeFromConfigChanges(SyncConfigsCallback callback)
    {
        SyncConfigsNotifier -= callback;
    }

    /// <summary>
    /// Add a new config to the database.
    /// </summary>
    /// <returns>id of the new config</returns>
    public async Task<Guid?> AddConfig(Config config)
    {
        // Add the config to the database with the API.
        HttpResponseMessage response = await _HttpClient.PutAsJsonAsync($"http://localhost:5000/api/Config/", config);
        // Refresh data.
        await RefreshConfigs();

        if (response.StatusCode == System.Net.HttpStatusCode.OK)
            return await response.Content.ReadFromJsonAsync<Guid?>();
        return null;
    }

    /// <summary>
    /// Update a config in the database.
    /// </summary>
    /// <param name="id">The id of the config to update. id must match an existing id.</param>
    /// <param name="config">New config data.</param>
    /// <returns></returns>
    public async Task UpdateConfig(Guid id, Config config)
    {
        // Write the config data to the database with the API.
        await _HttpClient.PostAsJsonAsync($"http://localhost:5000/api/Config/{id}", config);
        // Refresh data.
        await RefreshConfigs();
    }

    /// <summary>
    /// Given a config name delete it from the database.
    /// </summary>
    /// <param name="id">The id of the config to delete.</param>
    /// <returns></returns>
    public async Task DeleteConfig(Guid id)
    {
        // Delete the config from the database.
        await _HttpClient.DeleteAsync($"http://localhost:5000/api/Config/{id}");
        // Refresh data.
        await RefreshConfigs();
    }

    /// <summary>
    /// Return a reference to the list of Configs.
    /// </summary>
    /// <returns>list of configs</returns>
    public Dictionary<Guid, Config> GetConfigs()
    {
        return _configs;
    }

    /// <summary>
    /// Returns the config with the given ID.
    /// </summary>
    /// <param name="id">The id of the config to retrieve.</param>
    /// <returns>Config</returns>
    public Config? GetConfig(Guid id) => _configs.TryGetValue(id, out Config? value) ? value : null;
}
