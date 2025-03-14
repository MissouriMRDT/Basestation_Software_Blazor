using FFMpegCore.Pipes;
using FFMpegCore;
using FFMpegCore.Enums;
using System.Drawing;

namespace Basestation_Software.Models.Cameras;

public class SingleCameraController
{
	// data of most recent captured frame
	private string _frameData;

	private CancellationTokenSource? _tokenSource;

    public delegate Task FrameCallback(string frameData);
    public event FrameCallback? FrameNotifier;

    const string _ffplayArgs = "-flags low_delay  -fflags nobuffer -analyzeduration 0 -max_delay 0 -noborder";

    public SingleCameraController(string source)
	{
		// ffmpeg -f dshow -i video="Integrated Camera" -f mpegts -codec:v mpeg1video -s 320x240 -b:v 64k -maxrate 128k -bf 0 udp://@239.255.255.255:1234
		_frameData = string.Empty;
		Task.Run(() => InitCapture(source));
	}

	public async Task InitCapture(string source)
	{
        Console.WriteLine("InitCapture");
        _tokenSource = new();

        using  (MemoryStream ms = new())
        {
            await FFMpegArguments
            .FromUrlInput(new Uri("udp://127.0.0.1:1181"))
            .OutputToPipe(new StreamPipeSink(ms), options => options
                .ForceFormat("rawvideo"))
            // runs on stream data recieved
            .NotifyOnProgress(o =>
            {
                try
                {
                    if (ms.Length > 0)
                    {
                        ms.Position = 0;
                        using (var bitmap = new Bitmap(ms))
                        {
                            // Save the bitmap
                            bitmap.Save("test.png", System.Drawing.Imaging.ImageFormat.Bmp);
                        }
                        _frameData = Convert.ToBase64String(ms.ToArray());
                        FrameNotifier?.Invoke(_frameData);
                        ms.SetLength(0);
                        Console.WriteLine("MS Position: " + ms.Position);
                        Console.WriteLine("MS Length: " + ms.Length);
                        Console.WriteLine("Frame\n\n\n");

                    }
                }
                catch (Exception e) {
                    Console.WriteLine("MS Position: " + ms.Position);
                    Console.WriteLine("MS Length: " + ms.Length);
                    Console.WriteLine(e);
                }
            })
            .ProcessAsynchronously();
        }

    }

    /// <summary>
    ///	Releases all used resources and stops getting frames.
    /// </summary>
    public void Dispose()
	{
		_tokenSource?.Cancel();
	}
}

