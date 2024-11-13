namespace Basestation_Software.Web.Core.Services
{
	public class CameraService
	{
		private readonly static string[] _sources = [
			"udp://127.0.0.0:1234?overrun_nonfatal=1&fifo_size=50000000",
			"udp://127.0.0.0:1235?overrun_nonfatal=1&fifo_size=50000000"
			];

		private static SingleCameraController[] _controllers = new SingleCameraController[_sources.Length];

		public CameraService()
		{
			// set up controllers array
			for (int i = 0; i < _sources.Length; i++)
			{
				_controllers[i] = new SingleCameraController(_sources[i]);
			}
		}

		public void SubscribeToNewFrame(Func<Task> listener, int sourceIndex)
		{
			_controllers[sourceIndex].SubscribeToNewFrame(listener);
		}

		public void UnsubscribeFromNewFrame(Func<Task> listener, int sourceIndex)
		{
			_controllers[sourceIndex].UnsubscribeFromNewFrame(listener);
		}

		public string GetFrameData(int sourceIndex)
		{
			return _controllers[sourceIndex].GetFrameData();
		}

		public void InitCapture(int sourceIndex)
		{
			_controllers[sourceIndex].InitCapture(_sources[sourceIndex]);
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
