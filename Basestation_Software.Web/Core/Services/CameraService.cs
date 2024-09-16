using OpenCvSharp;
using System.Text.RegularExpressions;

namespace Basestation_Software.Web.Core.Services
{
	public class CameraService
	{
		// OpenCV video capture
		private VideoCapture _capture;
		// data of most recent captured frame
		private string _frameData;

		private event Func<Task>? NewFrameListener;

		public CameraService()
		{
			// ffmpeg -f dshow -i video="Integrated Camera" -f mpegts -codec:v mpeg1video -s 320x240 -b:v 64k -maxrate 128k -bf 0 udp://@239.255.255.255:1234
			_capture = new VideoCapture("udp://239.255.255.255:1234");
			_frameData = string.Empty;
		}

		public string GetFrameData()
		{
			return _frameData;
		}
		
		public void SubscribeToNewFrame(Func<Task> listener)
		{
			NewFrameListener += listener;
		}

		public void UnsubscribeFromNewFrame(Func<Task> listener)
		{
			NewFrameListener -= listener;
		}

		/// <summary>
		/// Used to initialize the camera serice. Watches for new camera frames and invokes the new frame event.
		/// </summary>
		public async Task WatchForFrames()
		{
			using (Mat frame = new())
			{
				while (true)
				{
					// Grab returns true when a new frame is found
					if (_capture.Grab())
					{
						_capture.Retrieve(frame);
						string base64 = Convert.ToBase64String(frame.ToBytes());
						_frameData = $"data:image/gif;base64,{base64}";

						NewFrameListener?.Invoke();
					};
					await Task.Delay(16);
				}
			}
		}
	}
}
