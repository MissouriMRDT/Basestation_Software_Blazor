namespace Basestation_Software.Web.Core.Services;

public class RocketTelemetryService
{
    // Declare member variables.
    private readonly HttpClient _HttpClient;

    private string? _cookieString = null;

    /// <summary>
    /// Constructor
    /// </summary>
    /// <param name="httpClient">Implicitly passed in, used to talk to the basestation API.</param>
    public RocketTelemetryService(HttpClient httpClient)
    {
        var httpClientHandler = new HttpClientHandler
        {
            UseCookies = false,
            ServerCertificateCustomValidationCallback = HttpClientHandler.DangerousAcceptAnyServerCertificateValidator
        };
        // Assign member variables.
        _HttpClient = new(httpClientHandler);
        _cookieString = null;
    }


    public async Task TryLogin(string ip, string request)
    {
        // Try logout
        // Console.WriteLine("Logout");
        // var response = await _HttpClient.GetAsync($"https://192.168.1.20/login.cgi");
        //Console.WriteLine(response.Headers);
        //Console.WriteLine(response.Content.ReadAsStringAsync().Result);

        var formData = new MultipartFormDataContent("----geckoformboundary7f7daa09ede741eceaf19028a9802085")
        {
            new StringContent(request)
        };
        var response = await _HttpClient.PostAsync($"https://192.168.1.20/login.cgi?uri=/status.cgi", formData);
        Console.WriteLine("REQUEST");
        Console.WriteLine(response.RequestMessage.Headers);
        Console.WriteLine(response.RequestMessage.Content);
        // var response = await _HttpClient.PutAsync($"https://google.com", new StringContent(request));
        Console.WriteLine("RESPONSE");
        Console.WriteLine(response.Headers);
        Console.WriteLine(response.Content.ReadAsStringAsync().Result);

        // parse cookies for auth
        response.Headers.TryGetValues("Set-Cookie", out var setCookie);
        // TODO replace with regex
        _cookieString = setCookie.Single(x => x.StartsWith("AIROS_FCECDA661EFD")).Split(' ')[0];
        Console.WriteLine("da cookie: " + _cookieString);

    }

    public async Task TryGet(string ip, string request)
    {
        Console.WriteLine("TryGet");
        using (var requestMessage = new HttpRequestMessage(HttpMethod.Get, "https://192.168.1.20/status.cgi"))
        {
            Console.WriteLine(_cookieString);
            requestMessage.Headers.Add("Cookie", "ui_language=en_US; " + _cookieString);
            requestMessage.Headers.Add("Accept", "application / json, text / javascript, */*; q=0.01");
            requestMessage.Headers.Add("Connection", "keep-alive");
            requestMessage.Headers.Add("X-Requested-With", "XMLHttpRequest");
            requestMessage.Headers.Add("Accept-Language", "en-US,en;q=0.5");
            requestMessage.Headers.Add("Accept-Encoding", "gzip, deflate, br, zstd");

            var response = await _HttpClient.SendAsync(requestMessage);

            Console.WriteLine("RESPONSE 2");
            Console.WriteLine(response.RequestMessage.Headers);
            Console.WriteLine(response.Headers);
            Console.WriteLine(response.StatusCode);
            Console.WriteLine("Content:");
            Console.WriteLine(response.Content.ReadAsByteArrayAsync().Result.Length);
            Console.WriteLine("Content End.");
        }
    }
}
