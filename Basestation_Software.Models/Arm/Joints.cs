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
        {"Y1", 0 },
        {"Y2", 0 },
        {"Z", 0 },
        {"Pitch", 0 },
        {"R1", 0 },
        {"R2", 0 },
    };
}

public enum JointNames
{
    X,
    Y1,
    Y2,
    Z,
    Pitch,
    R1,
    R2
}