using Basestation_Software.Web.Core;
using Basestation_Software.Web.Core.Services;
using Basestation_Software.Web.Core.Services.States;
using Blazored.Toast;
using Radzen;
using System.Net;
using Toolbelt.Blazor.Extensions.DependencyInjection;

#pragma warning disable IDE0211 // Convert to 'Program.Main' style program
ServicePointManager.ServerCertificateValidationCallback += (o, c, ch, er) => true;
var builder = WebApplication.CreateBuilder(args);

// Configure logging
builder.Logging.ClearProviders();
builder.Logging.AddConsole();
builder.Logging.AddDebug();

// Add services to the container.
builder.Services.AddRazorComponents()
    .AddInteractiveServerComponents()
    .AddInteractiveWebAssemblyComponents();
builder.Services.AddServerSideBlazor()
        .AddCircuitOptions(option =>
        {
            option.DetailedErrors = true;
            option.DisconnectedCircuitRetentionPeriod = TimeSpan.FromSeconds(10);
        })
        .AddHubOptions(option => option.MaximumReceiveMessageSize = 10_000_000); // Configures the message size for SignalR connections.
builder.Services.AddRadzenComponents();
builder.Services.AddGamepadList();
builder.Services.AddScoped<CookieService>();
builder.Services.AddHttpClient<GPSWaypointService>();
builder.Services.AddSingleton<GPSWaypointService>();
builder.Services.AddScoped<GPSWaypointState>();
builder.Services.AddHttpClient<MapTileService>();
builder.Services.AddSingleton<MapTileService>();
builder.Services.AddHttpClient<ConfigService>();
builder.Services.AddSingleton<ConfigService>();
builder.Services.AddSingleton<TaskTimerService>();
builder.Services.AddSingleton<PingService>();
builder.Services.AddSingleton<OpService>();
builder.Services.AddSingleton<ArmSpeedState>();
builder.Services.AddHttpClient<ArmAngularService>();
builder.Services.AddSingleton<ArmAngularService>();
builder.Services.AddSingleton<ArmControlService>();
builder.Services.AddRoveComm();
builder.Services.AddBlazoredToast();
builder.Services.AddSingleton<LoggerService>();

var app = builder.Build();

app.UseHttpsRedirection();

app.UseStaticFiles();
app.UseAntiforgery();

app.MapRazorComponents<App>()
    .AddInteractiveServerRenderMode()
    .AddInteractiveWebAssemblyRenderMode();

app.Run();
