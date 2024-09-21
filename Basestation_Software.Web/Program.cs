using Basestation_Software.Web.Core;
using Basestation_Software.Web.Core.Services;
using Blazored.Toast;
using Radzen;

var builder = WebApplication.CreateBuilder(args);

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
builder.Services.AddScoped<CookieService>();
builder.Services.AddHttpClient<GPSWaypointService>();
builder.Services.AddSingleton<GPSWaypointService>();
builder.Services.AddHttpClient<MapTileService>();
builder.Services.AddSingleton<MapTileService>();
builder.Services.AddSingleton<TaskTimerService>();
builder.Services.AddSingleton<CameraService>();


builder.Services.AddBlazoredToast();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();

app.UseStaticFiles();
app.UseAntiforgery();

app.MapRazorComponents<App>()
    .AddInteractiveServerRenderMode()
    .AddInteractiveWebAssemblyRenderMode();

app.Run();
