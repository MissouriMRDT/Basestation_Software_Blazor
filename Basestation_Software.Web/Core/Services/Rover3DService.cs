namespace Basestation_Software.Web.Core.Services;

public class Rover3DService
{
    public double[] GimbalAngles = [
        90,  // Left Pan
        120, // Left Tilt
        220, // Right Pan
        90,  // Right Tilt
        120, // Back Pan
        80,  // Back Tilt
        0,   // Arm 1 Pan
        0,   // Arm 1 Tilt
        0,   // Arm 2 Pan
        0,   // Arm 2 Tilt
        60,  // Auger Pan
        80   // Auger Tilt
    ];

    public Dictionary<string, bool> DeviceOk = [];
}
