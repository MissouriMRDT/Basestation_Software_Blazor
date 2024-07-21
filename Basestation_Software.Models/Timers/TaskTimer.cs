using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Basestation_Software.Models.Timers
{
    public class TaskTimer : ITimer
    {
        // Declare member variables.
        public Timer? Timer { get; private set; }
        public TaskType TaskType { get; private set; } = TaskType.Autonomy;
        public DateTime StartPoint { get; set; } = DateTime.MinValue;
        public TimeSpan EndPoint { get; set; } = TimeSpan.MaxValue;
        public TimeSpan ElapsedTime { get; private set; } = TimeSpan.Zero;
        public Dictionary<string, TimeSpan> CheckPoints { get; set; } = new Dictionary<string, TimeSpan>();
        public bool IsStarted { get; private set; } = false;
        public bool IsPaused { get; private set; } = false;
        public bool IsFinished { get; private set; } = false;

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
        /// Updates timer metrics.
        /// </summary>
        /// <param name="state"></param>
        /// <returns></returns>
        private async void UpdateElapsedTime(object? state)
        {
            // Check if the timer is paused.
            if (!IsPaused)
            {
                // Check if the timer is finished.
                if (DateTime.Now - StartPoint >= EndPoint)
                {
                    Timer?.Change(Timeout.Infinite, Timeout.Infinite);
                    IsFinished = true;
                }
                ElapsedTime = DateTime.Now - StartPoint;
            }
            if (TimerTickNotifier is not null)
            {
                await TimerTickNotifier.Invoke(TaskType, ElapsedTime);
            }
        }


    }
}