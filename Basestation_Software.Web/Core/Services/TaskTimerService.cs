using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Basestation_Software.Models.Timers;

namespace Basestation_Software.Web.Core.Services
{
    public class StopwatchTimer
    {
        // Declare member variables.
        private Timer? _timer;
        private DateTime _startTime;
        private TimeSpan _elapsedTime;
        private TaskType _timerName;

        // Delegates and events.
        public delegate Task TimerTickCallback(TaskType timerName, TimeSpan elapsedTime);
        private event TimerTickCallback? TimerTickNotifier;

        /// <summary>
        /// Constructor.
        /// </summary>
        /// <param name="callback"></param>
        /// <param name="timerName"></param>
        public StopwatchTimer(TimerTickCallback callback, TaskType timerName)
        {
            TimerTickNotifier += callback;
            _timerName = timerName;
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

        /// <summary>
        /// Accessor for the timer name.
        /// </summary>
        /// <returns></returns>
        public TaskType GetTimerName()
        {
            return _timerName;
        }

        /// <summary>
        /// Updates timer metrics.
        /// </summary>
        /// <param name="state"></param>
        /// <returns></returns>
        private async void UpdateElapsedTime(object? state)
        {
            _elapsedTime = DateTime.UtcNow - _startTime;
            if (TimerTickNotifier is not null)
            {
                await TimerTickNotifier.Invoke(_timerName, _elapsedTime);
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
        private List<StopwatchTimer> _stopwatches = new List<StopwatchTimer>();

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
        public void AddStopwatch(StopwatchTimer.TimerTickCallback callback, TaskType stopwatchName)
        {
            _stopwatches.Add(new StopwatchTimer(callback, stopwatchName));
        }

        /// <summary>
        /// Give a name/alias, remove a stopwatch.
        /// </summary>
        /// <param name="stopwatchName">The name of the stopwatch to remove.</param>
        public void RemoveStopwatch(TaskType stopwatchName)
        {
            _stopwatches.Remove(_stopwatches.First(x => x.GetTimerName() == stopwatchName));
        }

        /// <summary>
        /// Given a key get the stopwatch.
        /// </summary>
        /// <param name="stopwatchName">The name/alias of the stopwatch timer.</param>
        /// <returns></returns>
        public StopwatchTimer? GetStopwatchTimer(TaskType stopwatchName)
        {
            return _stopwatches.FirstOrDefault(x => x.GetTimerName() == stopwatchName);
        }
    }
}