using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Basestation_Software.Models.Timers
{
    public interface ITimer
    {
        public void Start(int updateIntervalMS);
        public void Stop();
        public void Reset();
    }
}