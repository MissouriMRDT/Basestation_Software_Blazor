using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Basestation_Software.Models.Timers;

namespace Basestation_Software.Web.Core.Services
{
    public class TaskTimerService
    {
        // Declare member variables.
        private List<TaskTimer> _taskTimers = new List<TaskTimer>();

        // Create a dictionary of event handlers for updating the UIs.
        public delegate Task TimerTickCallback(TimeSpan elapsedTime);
        public Dictionary<TaskType, TimerTickCallback?> TimerTickNotifiers = new Dictionary<TaskType, TimerTickCallback?>();

        /// <summary>
        /// Constructor.
        /// </summary>
        public TaskTimerService()
        {
            // Loop through the task timer types enum.
            foreach (TaskType TaskType in Enum.GetValues(typeof(TaskType)))
            {
                // Check if a task timer for the current type exists.
                TaskTimer? taskTimer = GetTaskTimer(TaskType);
                // Check if the timer is null.
                if (taskTimer == null)
                {
                    // Create a new timer.
                    TaskTimer newTimer = new TaskTimer(OnTimerTick, TaskType);
                    // Configure the timer.
                    switch (TaskType)
                    {
                        case TaskType.Autonomy:
                            // Total time for the task.
                            newTimer.EndPoint = TimeSpan.FromSeconds(80);
                            // Add checkpoints.
                            newTimer.CheckPoints = new Dictionary<string, TimeSpan>
                            {
                                { "Setup", TimeSpan.FromSeconds(10) },
                                { "Autonomy Task", TimeSpan.FromSeconds(60) },
                                { "PackUp", TimeSpan.FromSeconds(10) }
                            };
                            break;
                        case TaskType.Science:
                            // Total time for the task.
                            newTimer.EndPoint = TimeSpan.FromMinutes(50);
                            // Add checkpoints.
                            newTimer.CheckPoints = new Dictionary<string, TimeSpan>
                            {
                                { "Setup", TimeSpan.FromMinutes(10) },
                                { "Science Task", TimeSpan.FromMinutes(30) },
                                { "PackUp", TimeSpan.FromMinutes(10) },
                            };
                            break;
                        case TaskType.ExtremeDelivery:
                            // Total time for the task.
                            newTimer.EndPoint = TimeSpan.FromMinutes(80);
                            // Add checkpoints.
                            newTimer.CheckPoints = new Dictionary<string, TimeSpan>
                            {
                                { "Setup", TimeSpan.FromMinutes(10) },
                                { "Extreme Retrieval/Delivery Task", TimeSpan.FromMinutes(60) },
                                { "PackUp", TimeSpan.FromMinutes(10) },
                            };
                            break;
                        case TaskType.EquipmentServicing:
                            // Total time for the task.
                            newTimer.EndPoint = TimeSpan.FromMinutes(50);
                            // Add checkpoints.
                            newTimer.CheckPoints = new Dictionary<string, TimeSpan>
                            {
                                { "Setup", TimeSpan.FromMinutes(10) },
                                { "Equipment Servicing Task", TimeSpan.FromMinutes(30) },
                                { "PackUp", TimeSpan.FromMinutes(10) },
                            };
                            break;
                        default:
                            newTimer.EndPoint = TimeSpan.FromMinutes(1);
                            break;
                    }
                    // Add the timer to the service.
                    AddTaskTimer(newTimer);
                }

                // Add the timer tick callback to the dictionary.
                TimerTickNotifiers.Add(TaskType, null);
            }
        }

        /// <summary>
        /// Runs when a timer ticks.
        /// </summary>
        /// <param name="timerName">The task type.</param>
        /// <param name="timeElapsed">The current time elapsed in the task.</param>
        /// <returns></returns>
        private async Task OnTimerTick(TaskType timerName, TimeSpan timeElapsed)
        {
            // Invoke the timer tick callback.
            if (TimerTickNotifiers.ContainsKey(timerName) && TimerTickNotifiers[timerName] is not null)
            {
                await TimerTickNotifiers[timerName]!.Invoke(timeElapsed);
            }
        }

        /// <summary>
        /// Add a task timer to the list of task timers.
        /// </summary>
        /// <param name="taskTimer">The task timer object.</param>
        public void AddTaskTimer(TaskTimer taskTimer)
        {
            _taskTimers.Add(taskTimer);
        }

        /// <summary>
        /// Remove a task timer from the list of task timers.
        /// </summary>
        /// <param name="taskTimerType">The tasktimer object type to remove.</param>
        public void RemoveTaskTimer(TaskType taskTimerType)
        {
            TaskTimer? taskTimer = GetTaskTimer(taskTimerType);
            if (taskTimer != null)
            {
                _taskTimers.RemoveAll(t => t == taskTimer);
            }
        }

        /// <summary>
        /// Get a task timer from the list of task timers.
        /// </summary>
        /// <param name="TaskTimerName">The name of the task timer to retrieve.</param>
        /// <returns></returns>
        public TaskTimer? GetTaskTimer(TaskType timerType)
        {
            foreach (TaskTimer taskTimer in _taskTimers)
            {
                if (taskTimer.TaskType == timerType)
                {
                    return taskTimer;
                }
            }
            return null;
        }
    }
}