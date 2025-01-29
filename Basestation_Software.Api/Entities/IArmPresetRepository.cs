using Basestation_Software.Models.Arm;

namespace Basestation_Software.Api.Entities;

public interface IArmPresetRepository
{
    Task<ArmPreset?> AddPreset(ArmPreset preset);
    Task<ArmPreset?> DeletePreset(int id);
    Task<ArmPreset?> GetPreset(int id);
    Task<List<ArmPreset>?> GetAllPresets();
}
