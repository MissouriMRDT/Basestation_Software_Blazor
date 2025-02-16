winget install Microsoft.DotNet.DesktopRuntime.9
winget install Microsoft.DotNet.AspNetCore.9
start "Server" dotnet run --project Basestation_Software.Api
start "Client" dotnet run --project Basestation_Software.Web
start "" http://localhost:8080