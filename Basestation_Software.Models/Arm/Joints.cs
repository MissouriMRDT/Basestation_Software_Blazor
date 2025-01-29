using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Basestation_Software.Models.Arm;

public class JointValues
{
    public int X { get; set; } = 0;
    public int Y1 { get; set; } = 0;
    public int Y2 { get; set; } = 0;
    public int Z { get; set; } = 0;
    public int Pitch { get; set; } = 0;
    public int R1 { get; set; } = 0;
    public int R2 { get; set; } = 0;
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