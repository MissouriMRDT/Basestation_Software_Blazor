namespace Basestation_Software.Models.Timers;

public interface ITimer
{
    public void Start(int updateIntervalMS);
    public void Stop();
    public void Reset();
}