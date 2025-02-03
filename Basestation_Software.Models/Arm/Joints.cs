using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Basestation_Software.Models.Arm;

public class JointValues
{
    public Dictionary<string, float> Values { get; set; } = new()
    {
        {"X", 0 },
        {"J2", 0 },
        {"J3", 0 },
        {"J4", 0 },
        {"Pitch", 0 },
        {"Roll", 0 },
    };
}

public enum JointNames
{
    X = 1,
    J2 = 2,
    J3 = 3,
    J4 = 4,
    Pitch = 5,
    Roll = 6
}