using System.Diagnostics;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Runtime.InteropServices;

namespace Basestation_Software.Models.Cameras;

public class SingleCameraController
{
	// data of most recent captured frame
	private string _frameData;

	private CancellationTokenSource? _tokenSource;

    public delegate Task FrameCallback(string frameData);
    public event FrameCallback? FrameNotifier;

    private Process? _ffplayProcess = null;
    private int _width = 0;
    private int _height = 0;

    //[DllImport("user32.dll", SetLastError = true)]
    //private static extern bool MoveWindow(IntPtr hWnd, int X, int Y, int nWidth, int nHeight, bool bRepaint);

    //[DllImport("user32.dll")]
    //private static extern IntPtr SetParent(IntPtr hWndChild, IntPtr hWndNewParent);

    //[DllImport("user32.dll")]
    //public static extern bool GetWindowRect(IntPtr hwnd, ref Rect rectangle);

    //[DllImport("user32.dll")]
    //public static extern bool PrintWindow(IntPtr hWnd, IntPtr hdcBlt, int nFlags);

    const string _ffplayArgs = "-flags low_delay  -fflags nobuffer -analyzeduration 0 -max_delay 0 -noborder";

    public struct Rect
    {
        public int Left { get; set; }
        public int Top { get; set; }
        public int Right { get; set; }
        public int Bottom { get; set; }
    }

    public SingleCameraController(string source)
	{
		// ffmpeg -f dshow -i video="Integrated Camera" -f mpegts -codec:v mpeg1video -s 320x240 -b:v 64k -maxrate 128k -bf 0 udp://@239.255.255.255:1234
		//_frameData = string.Empty;
  //      _tokenSource = new();
  //      Task.Run(() => InitCapture(source), _tokenSource.Token);
	}

	public async Task InitCapture(string source)
	{
        //_tokenSource = new();

        //// start ffplay 
        //_ffplayProcess = new Process
        //{
        //    StartInfo =
        //    {
        //        FileName = "ffplay",
        //        Arguments = _ffplayArgs + " " + source,
        //        CreateNoWindow = true, 
        //        RedirectStandardError = false,
        //        RedirectStandardOutput = false,
        //        UseShellExecute = false,
        //        WorkingDirectory = AppDomain.CurrentDomain.BaseDirectory,
        //        WindowStyle = ProcessWindowStyle.Hidden,
        //    }
        //};

        ////_ffplayProcess.EnableRaisingEvents = true;
        ////_ffplayProcess.Exited += (o, e) => Debug.WriteLine("Exited", "ffplay");

        //Console.WriteLine("ffplay started");
        //_ffplayProcess.Start();

        //// wait for process to start
        //while (_ffplayProcess.MainWindowHandle == IntPtr.Zero)
        //{
        //    // Discard cached information about the process
        //    // because MainWindowHandle might be cached.
        //    _ffplayProcess.Refresh();

        //    await Task.Delay(10);
        //}

        //// move and resize ffplay window
        //MoveWindow(_ffplayProcess.MainWindowHandle, 0, 0, 480, 320, true);

        //Rect WindowRect = new Rect();
        //GetWindowRect(_ffplayProcess.MainWindowHandle, ref WindowRect);

        //_width = WindowRect.Right - WindowRect.Left;
        //_height = WindowRect.Bottom - WindowRect.Top;
        //await DoGetFrames();
    }

    // main frame-grabbing loop
    private async Task DoGetFrames()
    {
        //Console.WriteLine("DoGetFrames");
        //while (!_tokenSource.IsCancellationRequested)
        //{
        //    Bitmap bmp = new(_width, _height, PixelFormat.Format32bppArgb);
        //    Graphics gfxBmp = Graphics.FromImage(bmp);
        //    IntPtr hdcBitmap = gfxBmp.GetHdc();
        //    SetParent(_ffplayProcess.MainWindowHandle, hdcBitmap);

        //    PrintWindow(_ffplayProcess.MainWindowHandle, hdcBitmap, 0);

        //    gfxBmp.ReleaseHdc(hdcBitmap);
        //    gfxBmp.Dispose();

        //    // bmp is usable image here
        //    //bmp.Save("helpme.png", ImageFormat.Png);
        //    using (MemoryStream ms = new())
        //    {
        //        bmp.Save(ms, ImageFormat.Png);
        //        _frameData = Convert.ToBase64String(ms.ToArray());
        //        FrameNotifier?.Invoke(_frameData);
        //    }

        //    await Task.Delay(33);
        //}
    }

    /// <summary>
    ///	Releases all used resources and stops getting frames.
    /// </summary>
    public void Dispose()
	{
        _ffplayProcess?.Dispose();
		_tokenSource?.Cancel();
	}
}

