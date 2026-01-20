REM winget install dotnet-sdk-10
start "Server" dotnet run --project Basestation_Software.Api
start "Client" dotnet run --project Basestation_Software.Web
start "" http://localhost:8080