using Basestation_Software.Models.Arm;

namespace Basestation_Software.Api.Entities;

public interface IArmPresetRepository
{
    Task<ArmPresetEntity?> AddPreset(ArmPreset preset);
    Task<ArmPresetEntity?> DeletePreset(int id);
    Task<ArmPreset?> GetPreset(int id);
    Task<List<ArmPreset>?> GetAllPresets();
}
