using System.ComponentModel.DataAnnotations;

namespace Basestation_Software.Web.Models;

public enum Bind
{
    A = 0,
    B,
    Y,
    X,
    LB,
    RB,
    B6,
    B7,
    Select,
    Start,
    LSB,
    RSB,
    DpadU,
    DPadD,
    DPadL,
    DPadR,
    LSX,
    LSY,
    RSX,
    RSY,
    LT,
    RT,
    XB,
    AY,
    AB,
    XY,
    Bumpers,
    Triggers,
    LBumpTrig,
    RBumpTrig,
    DPadX,
    DPadY,
    SelectStart,
    None
}

public class ControlScheme
{
    [Key]
    public Guid ID { get; set; }
    public string Name { get; set; } = "";
    public Bind[] Binds { get; set; } = [];
    public bool[] Inversions { get; set; } = [];
    public ControlScheme() { }
    public ControlScheme(uint axes)
    {
        ID = Guid.NewGuid();
        Inversions = new bool[axes];
        Binds = new Bind[axes];
    }
}