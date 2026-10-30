namespace Basestation_Software.Web.Models;

public class Keybind
{
    public Guid ID { get; set; } = Guid.NewGuid();
    public string MoveLeft { get; set; } = string.Empty;
    public string MoveRight { get; set; } = string.Empty;
    public string PacketToggle { get; set; } = string.Empty;
    public string NewComponent { get; set; } = string.Empty;
    public string Resubscribe { get; set; } = string.Empty;
    public string NewPage { get; set; } = string.Empty;
    public string DeletePage { get; set; } = string.Empty;
    public string OpenCopyArea { get; set; } = string.Empty;
    public string OpenMacrosModal { get; set; } = string.Empty;
    public string SavePage { get; set; } = string.Empty;
    public string Luna { get; set; } = string.Empty;
    public string ToggleLightMode { get; set; } = string.Empty;
}