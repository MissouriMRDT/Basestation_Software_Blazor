namespace Basestation_Software.Models.Timers;

public class TaskTimer : ITimer
{
    // Declare member variables.
    public Timer? Timer { get; private set; }
    public TaskType TaskType { get; private set; } = TaskType.Autonomy;
    private bool _startPointChanged = false;
    private DateTime _startPoint = DateTime.MinValue;
    public DateTime StartPoint
    {
        get { return _startPoint; }
        set
        {
            _startPoint = value;
            _startPointChanged = true;
        }
    }
    public TimeSpan EndPoint { get; set; } = TimeSpan.MaxValue;
    public TimeSpan ElapsedTime { get; private set; } = TimeSpan.Zero;
    public Dictionary<string, TimeSpan> CheckPoints { get; set; } = [];
    public bool IsStarted { get; private set; } = false;
    public bool IsPaused { get; private set; } = false;
    public bool IsFinished { get; private set; } = false;
    public bool IsBeingConfigured { get; private set; } = false;

    // Delegates and events.
    public delegate Task TimerTickCallback(TaskType timerTaskType, TimeSpan elapsedTime);
    private event TimerTickCallback? TimerTickNotifier;

    /// <summary>
    /// Constructor.
    /// </summary>
    /// <param name="callback"></param>
    /// <param name="timerName"></param>
    public TaskTimer(TimerTickCallback callback, TaskType timerType)
    {
        // Assigm member variables.
        TimerTickNotifier += callback;
        TaskType = timerType;
    }

    /// <summary>
    /// Start the timer.
    /// </summary>
    /// <param name="updateIntervalMS">The interval in ms that the timer metrics and callbacks will be updated/invoked.</param>
    public void Start(int updateIntervalMS = 100)
    {
        if (IsFinished)
        {
            return;
        }
        if (!IsPaused)
        {
            StartPoint = DateTime.Now;
            // Create new timer.
            Timer = new Timer(UpdateElapsedTime, null, 0, updateIntervalMS);
        }
        else
        {
            // Offest the start point by the elapsed time.
            StartPoint = DateTime.Now - ElapsedTime;
        }
        IsStarted = true;
        IsPaused = false;
        IsFinished = false;
    }

    /// <summary>
    /// Pause the timer.
    /// </summary>
    public void Stop()
    {
        if (!IsStarted || IsFinished)
        {
            return;
        }
        IsStarted = true;
        IsPaused = true;
        IsFinished = false;
    }

    /// <summary>
    /// Reset the timer back to its initial state.
    /// </summary>
    public void Reset()
    {
        Timer?.Change(Timeout.Infinite, Timeout.Infinite);
        IsStarted = false;
        IsPaused = false;
        IsFinished = false;
        StartPoint = DateTime.Now;
        ElapsedTime = TimeSpan.Zero;
        UpdateElapsedTime(null);
    }

    /// <summary>
    /// Given a checkpoint name, skip the timer to that checkpoint.
    /// </summary>
    /// <param name="checkPointName">The name of the checkpoint to skip to.</param>
    public void SkipToCheckPoint(string checkPointName)
    {
        if (CheckPoints.ContainsKey(checkPointName))
        {
            // Sum all the checkpoints up to the checkpoint we want to skip to.
            StartPoint = DateTime.Now - TimeSpan.FromSeconds(CheckPoints.Take(CheckPoints.Keys.ToList().IndexOf(checkPointName) + 1).Sum(x => x.Value.TotalSeconds));
            UpdateElapsedTime(null);
        }
    }

    /// <summary>
    /// Skip to the next checkpoint.
    /// </summary>
    public void SkipToNextCheckPoint()
    {
        if (CheckPoints.Count > 0)
        {
            // Figure out which checkpoints we are between. Checkpoints should be added in order since we are using a dictionary that just stores the duration of each checkpoint.
            foreach (var checkPoint in CheckPoints)
            {
                // Sum the checkpoints before with this one.
                double checkPointStart = CheckPoints.Take(CheckPoints.Keys.ToList().IndexOf(checkPoint.Key) + 1).Sum(x => x.Value.TotalSeconds);
                // Check if the elapsed time is between the current checkpoint and the next checkpoint.
                if (checkPointStart >= ElapsedTime.TotalSeconds)
                {
                    SkipToCheckPoint(checkPoint.Key);
                    break;
                }
            }
        }
    }

    /// <summary>
    /// Go back to the previous checkpoint.
    /// </summary>
    public void SkipToPreviousCheckPoint()
    {
        if (CheckPoints.Count > 0)
        {
            // Figure out which checkpoints we are between. Checkpoints should be added in order since we are using a dictionary that just stores the duration of each checkpoint.
            foreach (var checkPoint in CheckPoints)
            {
                // Sum the checkpoints before with this one.
                double checkPointStart = CheckPoints.Take(CheckPoints.Keys.ToList().IndexOf(checkPoint.Key) + 1).Sum(x => x.Value.TotalSeconds);
                // Check if the elapsed time is between the current checkpoint and the next checkpoint.
                if (checkPointStart <= ElapsedTime.TotalSeconds)
                {
                    // Check if the checkpoint start is zero. This means we haven't reached the first checkpoint yet.
                    if (checkPointStart == 0)
                    {
                        StartPoint = DateTime.Now;
                        UpdateElapsedTime(null);
                        break;
                    }
                    else
                    {
                        SkipToCheckPoint(checkPoint.Key);
                        break;
                    }
                }
                else
                {
                    // If we are at the first checkpoint, reset the timer.
                    Reset();
                    break;
                }
            }
        }
    }

    /// <summary>
    /// Updates timer metrics.
    /// </summary>
    /// <param name="state"></param>
    /// <returns></returns>
    private async void UpdateElapsedTime(object? state)
    {
        // Check if the timer is paused, but if the start time was changed, we need to update the elapsed time.
        if (!IsPaused || _startPointChanged)
        {
            // Check if the timer is finished.
            if (DateTime.Now - StartPoint >= EndPoint)
            {
                Timer?.Change(Timeout.Infinite, Timeout.Infinite);
                IsFinished = true;
            }
            ElapsedTime = DateTime.Now - StartPoint;
            _startPointChanged = false;
        }
        if (TimerTickNotifier is not null)
        {
            await TimerTickNotifier.Invoke(TaskType, ElapsedTime);
        }
    }

    /// <summary>
    /// Converts a timespan into a short readable string. For example, 1h 30m 20s.
    /// </summary>
    /// <param name="timeSpan">The timespan to parse into a short string.</param>
    /// <returns></returns>
    public static string TimeSpanToShortReadableString(TimeSpan timeSpan)
    {
        if (timeSpan.TotalSeconds < 1)
        {
            return "0s";
        }

        var parts = new List<string>();

        if (timeSpan.Hours > 0)
        {
            parts.Add($"{timeSpan.Hours}h");
        }

        if (timeSpan.Minutes > 0)
        {
            parts.Add($"{timeSpan.Minutes}m");
        }

        if (timeSpan.Seconds > 0)
        {
            parts.Add($"{timeSpan.Seconds}s");
        }

        return string.Join(" ", parts);
    }
}