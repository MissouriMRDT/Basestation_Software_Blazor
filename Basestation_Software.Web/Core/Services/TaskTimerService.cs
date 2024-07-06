using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Basestation_Software.Web.Core.Services
{
    public class StopwatchTimer
    {
        // Declare member variables.
        private Timer? _timer;
        private DateTime _startTime;
        private TimeSpan _elapsedTime;

        // Delegates and events.
        public delegate Task TimerTickCallback(TimeSpan elapsedTime);
        private event TimerTickCallback? TimerTickNotifier;

        public StopwatchTimer(TimerTickCallback callback)
        {
            TimerTickNotifier += callback;
        }

        /// <summary>
        /// Start the timer.
        /// </summary>
        public void Start()
        {
            _startTime = DateTime.UtcNow;
            _timer = new Timer(UpdateElapsedTime, null, 0, 1000);
        }

        /// <summary>
        /// Stop the timer.
        /// </summary>
        public void Stop()
        {
            _timer?.Change(Timeout.Infinite, Timeout.Infinite);
            _timer?.Dispose();
        }

        /// <summary>
        /// Get the time elapsed.
        /// </summary>
        /// <returns></returns>
        public TimeSpan GetElapsedTime()
        {
            return _elapsedTime;
        }

        private async void UpdateElapsedTime(object? state)
        {
            _elapsedTime = DateTime.UtcNow - _startTime;
            if (TimerTickNotifier is not null)
            {
                await TimerTickNotifier.Invoke(_elapsedTime);
            }
            else
            {
                // Nothing is using the timer anymore, stop it.
                Stop();
            }
        }


    }

    public class TaskTimerService
    {
        // Declare member variables.
        private Dictionary<string, StopwatchTimer> _stopwatches = new Dictionary<string, StopwatchTimer>();

        /// <summary>
        /// Constructor.
        /// </summary>
        public TaskTimerService()
        {
            // Nothing to do.
        }

        /// <summary>
        /// Given a method callback this will create a new stopwatch timer and call the given callback every second.
        /// </summary>
        /// <param name="callback">The method callback to run every timer update.</param>
        /// <param name="stopwatchName">The name/alias of the timer.</param>
        public void AddStopwatch(StopwatchTimer.TimerTickCallback callback, string stopwatchName)
        {
            _stopwatches.Add(stopwatchName, new StopwatchTimer(callback));
        }

        /// <summary>
        /// Give a name/alias, remove a stopwatch.
        /// </summary>
        /// <param name="stopwatchName">The name of the stopwatch to remove.</param>
        public void RemoveStopwatch(string stopwatchName)
        {
            _stopwatches.Remove(stopwatchName);
        }

        /// <summary>
        /// Given a key get the stopwatch.
        /// </summary>
        /// <param name="stopwatchName">The name/alias of the stopwatch timer.</param>
        /// <returns></returns>
        public StopwatchTimer? GetStopwatchTimer(string stopwatchName)
        {
            return _stopwatches[stopwatchName];
        }
    }
}