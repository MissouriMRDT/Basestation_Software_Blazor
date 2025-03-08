using Basestation_Software.Models.Cameras;

namespace Basestation_Software.Web.Core.Services
{
	public class CameraService
	{
        private static string[] _sources = [
            "udp://192.168.4.100:1181?overrun_nonfatal=1&fifo_size=50000000",
            "udp://192.168.4.100:1182?overrun_nonfatal=1&fifo_size=50000000",
            "udp://192.168.4.100:1183?overrun_nonfatal=1&fifo_size=50000000",
            "udp://192.168.4.100:1184?overrun_nonfatal=1&fifo_size=50000000",
            "udp://192.168.4.101:1185?overrun_nonfatal=1&fifo_size=50000000",
            "udp://192.168.4.101:1186?overrun_nonfatal=1&fifo_size=50000000",
            "udp://192.168.4.101:1187?overrun_nonfatal=1&fifo_size=50000000",
            "udp://192.168.4.101:1188?overrun_nonfatal=1&fifo_size=50000000",
            "udp://127.0.0.1:1181?overrun_nonfatal=1&fifo_size=50000000",
            "udp://127.0.0.1:1182?overrun_nonfatal=1&fifo_size=50000000",
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
