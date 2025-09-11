using System.Net;

namespace Basestation_Software.Models.Rocket;

public class RocketTelemetryManager
{
    // Declare member variables.
    private readonly HttpClient _HttpClient;


    /// <summary>
    /// Constructor
    /// </summary>
    /// <param name="httpClient">Implicitly passed in, used to talk to the basestation API.</param>
    public RocketTelemetryManager(HttpClient httpClient)
    {
        // Assign member variables.
        _HttpClient = httpClient;
    }


    public async Task TryLogin(string ip, string request)
    {
        var response = await _HttpClient.PutAsync($"https://192.168.1.20/login.cgi?uri=/", new StringContent(request));
        Console.WriteLine("RESPONSE");
        Console.WriteLine(response.Content);

    }

}
