using OpenCvSharp;
using System.Text.RegularExpressions;

namespace Basestation_Software.Web.Core.Services
{
	public class SingleCameraController
	{
		// OpenCV video capture
		private VideoCapture? _capture;
		// data of most recent captured frame
		private string _frameData;

		private CancellationTokenSource _tokenSource = new();

		private event Func<Task>? NewFrameListener;

		public SingleCameraController(string source)
		{
			// ffmpeg -f dshow -i video="Integrated Camera" -f mpegts -codec:v mpeg1video -s 320x240 -b:v 64k -maxrate 128k -bf 0 udp://@239.255.255.255:1234
			InitCapture(source);
			_frameData = string.Empty;
		}

		private void InitCapture(string source)
		{
			// create capture
			_capture = new VideoCapture("udp://127.0.0.0:1234");

			// configure capture settings
			// buffer size is supposed to control the amount of frames of old video opencv stores, but it seems to be very undersupported and appears to not be doing anything
			// https://stackoverflow.com/questions/30032063/opencv-videocapture-lag-due-to-the-capture-buffer
			_capture.Set(VideoCaptureProperties.BufferSize, 3);

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
			_ = FindLatestFrame(token);
			while (!token.IsCancellationRequested)
			{
				await TryRetriveFrame(token);
			}
		}

		/// <summary>
		/// Continuously reads from the frame buffer as fast as possible to make sure TryRetriveFrame returns the latest camera frame. 
		/// </summary>
		private async Task FindLatestFrame(CancellationToken token)
		{
			while (!token.IsCancellationRequested)
			{
				_capture?.Grab();
				await Task.Delay(1, token);
			}
		}

		public async Task TryRetriveFrame(CancellationToken token)
		{
			using (Mat frame = new())
			{
				// Grab returns true when a new frame is found
				_capture?.Retrieve(frame);
				string base64 = Convert.ToBase64String(frame.ToBytes());
				_frameData = $"data:image/gif;base64,{base64}";

				NewFrameListener?.Invoke();
				await Task.Delay(16, token);
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
