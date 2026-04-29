using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Basestation_Software.Web.Models;

public class TimerData
{
    [Key]
    public Guid ID { get; set; }
    public bool Paused;
    public long A; // Paused ? Elapsed : Start
    public long B; // Paused ? Remaining : End

    [NotMapped]
    public TimeSpan Elapsed
    {
        get => Paused ? TimeSpan.FromTicks(A) : DateTime.UtcNow - new DateTime(A);
        set
        {
            if (Paused) A = value.Ticks; // A = Elapsed
            else A = (DateTime.UtcNow - value).Ticks; // A = Start
        }
    }
    [NotMapped]
    public TimeSpan Remaining
    {
        get => Paused ? TimeSpan.FromTicks(B) : new DateTime(B) - DateTime.UtcNow;
        set
        {
            if (Paused) B = value.Ticks; // A = Remaining
            else B = (DateTime.UtcNow + value).Ticks; // A = End
        }
    }

    public void Pause()
    {
        if (Paused) return;
        // Convert start into elapsed
        A = DateTime.UtcNow.Ticks - A;
        // Convert end into Remaining
        B = B - DateTime.UtcNow.Ticks;
        Paused = true;
    }

    public void Resume()
    {
        if (!Paused) return;
        // Convert elapsed into start
        A = DateTime.UtcNow.Ticks - A;
        // Convert remaining into end
        B = DateTime.UtcNow.Ticks + B;
        Paused = false;
    }

    private TimeSpan Positive(TimeSpan t) => t > TimeSpan.Zero ? t : TimeSpan.Zero;
}