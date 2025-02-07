using Basestation_Software.Models.Cameras;

namespace Basestation_Software.Web.Core.Services
{
	public class CameraService
	{
		private static string[] _sources = [
            "udp://239.0.0.1:50000?overrun_nonfatal=1&fifo_size=50000000",
            "udp://239.0.0.2:50000?overrun_nonfatal=1&fifo_size=50000000",
            "udp://239.0.0.3:50000?overrun_nonfatal=1&fifo_size=50000000",
            "udp://239.0.0.4:50000?overrun_nonfatal=1&fifo_size=50000000",
            "udp://239.0.0.5:50000?overrun_nonfatal=1&fifo_size=50000000",
            "udp://239.0.0.6:50000?overrun_nonfatal=1&fifo_size=50000000",
            "udp://239.0.0.7:50000?overrun_nonfatal=1&fifo_size=50000000",
            "udp://239.0.0.8:50000?overrun_nonfatal=1&fifo_size=50000000",
            "udp://239.0.0.9:50000?overrun_nonfatal=1&fifo_size=50000000",
            "udp://239.0.0.10:50000?overrun_nonfatal=1&fifo_size=50000000",
            ];

		private static SingleCameraController[] _controllers = new SingleCameraController[_sources.Length];

		public CameraService()
		{
            Console.WriteLine("Camera Service Constructor");

            // set up controllers array
            for (int i = 0; i < _sources.Length; i++)
			{
				_controllers[i] = new SingleCameraController(_sources[i]);
			}
		}

		public void InitCapture(int sourceIndex)
		{
			_controllers?[sourceIndex].InitCapture(_sources[sourceIndex]);
		}

        public SingleCameraController GetCameraReference(int sourceIndex)
        {
            return _controllers[sourceIndex];
        }

        public void SetIP(int sourceIndex, string newIP)
        {
            _sources[sourceIndex] = "udp://" + newIP + "?overrun_nonfatal=1&fifo_size=50000000";
        }

		public void DisposeAll()
		{
			foreach (var c in _controllers)
			{
				c.Dispose();
			}
		}

		public void Dispose(int sourceIndex)
		{
			_controllers[sourceIndex].Dispose();
		}
	}
}
