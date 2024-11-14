namespace Basestation_Software.Models.Config;

public class ConfigEntity
{
    public Guid ID { get; set; } // DB primary key
    public string Data { get; set; } // JSON serialized Config
}
