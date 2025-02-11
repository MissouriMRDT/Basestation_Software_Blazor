using OpenCvSharp;

namespace Basestation_Software.Models.Cameras;

public class SingleCameraController
{
	// OpenCV video capture
	private VideoCapture? _capture;
	// data of most recent captured frame
	private string _frameData;

	private CancellationTokenSource? _tokenSource;

    public delegate Task FrameCallback(string frameData);
    public event FrameCallback? FrameNotifier;

	public SingleCameraController(string source)
	{
		// ffmpeg -f dshow -i video="Integrated Camera" -f mpegts -codec:v mpeg1video -s 320x240 -b:v 64k -maxrate 128k -bf 0 udp://@239.255.255.255:1234
		_frameData = string.Empty;
		_ = InitCapture(source);
	}

	public async Task InitCapture(string source)
	{
		// create capture
		_capture = await SpawnCaptureAsync(source);

		// configure capture settings
		// buffer size is supposed to control the amount of frames of old video opencv stores, but it seems to be very undersupported and appears to not be doing anything
		// https://stackoverflow.com/questions/30032063/opencv-videocapture-lag-due-to-the-capture-buffer
		//Console.WriteLine("BufferSize " + _capture.Set(VideoCaptureProperties.BufferSize, 3));

        // pass in cancellation token to async methods
        _tokenSource = new();

		_ = WatchForFrames(_tokenSource.Token);
	}

	public async Task<VideoCapture> SpawnCaptureAsync(string source)
	{
		return await Task.Run(() => new VideoCapture(source));
	}

	/// <summary>
	/// Used to initialize the camera service. Watches for new camera frames and invokes the new frame event.
	/// </summary>
	private async Task WatchForFrames(CancellationToken token)
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
            try
            {
                _capture?.Grab();
            }
            catch (Exception e) { }

            await Task.Delay(1, token);
		}
	}

	private async Task TryRetriveFrame(CancellationToken token)
	{
		using (Mat frame = new())
		{
            try
            {
                _capture?.Retrieve(frame);
                if (frame != null)
                {
                    string base64 = Convert.ToBase64String(frame.ToBytes());
                    _frameData = $"data:image/gif;base64,{base64}";

                    FrameNotifier?.Invoke(_frameData);
                }

            }
            catch (Exception e) { }

            await Task.Delay(33, token);
            frame?.Dispose();
		}
	}

	/// <summary>
	///	Releases all used resources and stops getting frames.
	/// </summary>
	public void Dispose()
	{
		_tokenSource?.Cancel();
		_capture?.Dispose();
	}
}

