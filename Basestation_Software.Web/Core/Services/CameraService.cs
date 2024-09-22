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

		public int Debug()
		{
			return _controllers.Length;
		}

		public void SubscribeToNewFrame(Func<Task> listener, int source)
		{
			_controllers[source].SubscribeToNewFrame(listener);
		}

		public void UnsubscribeFromNewFrame(Func<Task> listener, int source)
		{
			_controllers[source].UnsubscribeFromNewFrame(listener);
		}

		public string GetFrameData(int source)
		{
			return _controllers[source].GetFrameData();
		}

		public void Dispose()
		{
			foreach (var c in _controllers)
			{
				c.Dispose();
			}
		}
	}
}
