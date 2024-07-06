using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Basestation_Software.Models.Geospatial
{
    public class GPSWaypointInput
    {
        public int ID { get; set; } = -1;
        public string Name { get; set; } = "";
        public double Latitude { get; set; } = 0;
        public double Longitude { get; set; } = 0;
        public double Altitude { get; set; } = 0;
        public string Timestamp { get; set; } = DateTime.Now.ToString();
        public string WaypointColor { get; set; } = "rgb(0, 0, 0)";
        public double SearchRadius { get; set; } = 0;
        public string Type { get; set; } = "Navigation";
    }
}