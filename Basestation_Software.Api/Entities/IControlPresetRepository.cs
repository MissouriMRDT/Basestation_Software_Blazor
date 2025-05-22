using Basestation_Software.Models.Arm;

namespace Basestation_Software.Api.Entities;

public interface IControlPresetRepository
{
    Task<ControlPreset?> AddPreset(ControlPreset preset);
    Task<ControlPreset?> DeletePreset(int id);
    Task<ControlPreset?> GetPreset(int id);
    Task<List<ControlPreset>?> GetAllPresets();
}
