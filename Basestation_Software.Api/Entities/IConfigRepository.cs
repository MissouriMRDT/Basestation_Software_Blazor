using Basestation_Software.Models.Config;

namespace Basestation_Software.Api.Entities;

public interface IConfigRepository
{
    Task<Guid?> AddConfig(Config config);
    Task<ConfigEntity?> DeleteConfig(Guid id);
    Task<Dictionary<Guid, Config>> GetAllConfigs();
    Task<Config?> GetConfig(Guid id);
    Task<ConfigEntity?> UpdateConfig(Guid id, Config config);
}