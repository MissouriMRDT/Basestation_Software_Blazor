namespace Basestation_Software.Web.Core.Services;

public class FileReaderService
{
    public async Task<string> Read(string filepath)
    {
        // Console.WriteLine(filepath);
        using (StreamReader r = new(filepath)) 
        {
            string f = r.ReadToEnd();
            return f;
        }

    }
}
