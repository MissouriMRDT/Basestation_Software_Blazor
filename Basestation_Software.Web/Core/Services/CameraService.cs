using OpenCvSharp;
using System.Text.RegularExpressions;

namespace Basestation_Software.Web.Core.Services
{
	public class CameraService
	{
		// OpenCV video capture
		private VideoCapture? _capture;
		// data of most recent captured frame
		private string _frameData;

		private CancellationTokenSource _tokenSource = new();

		private event Func<Task>? NewFrameListener;

		public CameraService()
		{
			// ffmpeg -f dshow -i video="Integrated Camera" -f mpegts -codec:v mpeg1video -s 320x240 -b:v 64k -maxrate 128k -bf 0 udp://@239.255.255.255:1234
			InitCapture();
			_frameData = string.Empty;
		}

		private void InitCapture()
		{
			// create capture
			_capture = new VideoCapture("udp://127.0.0.0:1234");

			// configure capture
			_capture.Set(VideoCaptureProperties.BufferSize, 3);
			_capture.Set(VideoCaptureProperties.FrameWidth, 320);
			_capture.Set(VideoCaptureProperties.FrameHeight, 240);

			_ = WatchForFrames(_tokenSource.Token);
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
		/// Used to initialize the camera service. Watches for new camera frames and invokes the new frame event.
		/// </summary>
		public async Task WatchForFrames(CancellationToken token)
		{
			while (!token.IsCancellationRequested)
			{
				await TryFindFrame();
			}
		}

		public async Task TryFindFrame()
		{
			using (Mat frame = new())
			{
				// Grab returns true when a new frame is found
				if (_capture != null && _capture.Grab())
				{
					_capture?.Retrieve(frame);
					string base64 = Convert.ToBase64String(frame.ToBytes());
					_frameData = $"data:image/gif;base64,{base64}";

					NewFrameListener?.Invoke();
				};
				await Task.Delay(16);
			}
		}

		/// <summary>
		///	Releases all used resources and stops getting frames.
		/// </summary>
		public void Dispose()
		{
			_tokenSource.Cancel();
			_capture?.Dispose();
		}
	}
}
