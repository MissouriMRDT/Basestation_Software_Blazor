using Basestation_Software.Web.Core;
using Basestation_Software.Web.Core.Services;
using Basestation_Software.Web.Models;
using Blazored.Toast;
using RoveComm;
using Toolbelt.Blazor.Extensions.DependencyInjection;

#pragma warning disable IDE0211 // Convert to 'Program.Main' style program

using (var context = new DatabaseContext()) { context.Database.EnsureCreated(); }

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
builder.Services.AddGamepadList();
builder.Services.AddScoped<CookieService>();
builder.Services.AddScoped<GPSWaypointState>();
builder.Services.AddSingleton<PingService>();
builder.Services.AddSingleton<OpService>();
builder.Services.AddSingleton<ArmService>();
builder.Services.AddSingleton<DatabaseService>();
builder.Services.AddDbContextFactory<DatabaseContext>();
builder.Services.AddRoveComm();
builder.Services.AddBlazoredToast();

var app = builder.Build();

app.UseHttpsRedirection();

app.UseStaticFiles();
app.UseAntiforgery();
app.MapRazorComponents<App>()
    .AddInteractiveServerRenderMode()
    .AddInteractiveWebAssemblyRenderMode();

app.Run();
