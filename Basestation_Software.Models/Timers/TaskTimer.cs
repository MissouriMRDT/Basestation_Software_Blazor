using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Basestation_Software.Models.Timers
{
    public class TaskTimer
    {
        public string? TimerName { get; set; }
        public TimerType? Type { get; set; }
        public TaskType? TaskType { get; set; }
        public DateTime? StartPoint { get; set; }
        public DateTime? EndPoint { get; set; }
        public TimeSpan? ElapsedTime { get; set; }
        public List<DateTime>? CheckPoints { get; set; }
        public bool IsStarted { get; set; }
        public bool IsPaused { get; set; }
        public bool IsFinished { get; set; }
    }
}