using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Basestation_Software.Models.Arm;

public class JointValues
{
    public Dictionary<string, int> Values { get; set; } = new()
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
    X,
    J2,
    J3,
    J4,
    Pitch,
    Roll
}