using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Basestation_Software.Models;
public class RamanGraphType
{
    public class DataItem
    {
        public int Raman_Shift { get; set; }
        public double Intensity { get; set; }

        public DataItem()
        {
            Raman_Shift = 0;
            Intensity = 0f;
        }
    }
}
