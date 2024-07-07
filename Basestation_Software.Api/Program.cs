using Basestation_Software.Api.Entities;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle

builder.Services.AddControllers();
builder.Services.AddDbContext<REDDatabase>(options => options.UseSqlite(builder.Configuration.GetConnectionString("RED_DB")));
builder.Services.AddScoped<IGPSWaypointRepository, GPSWaypointRepository>();
builder.Services.AddScoped<IMapTileRepository, MapTileRepository>();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseDeveloperExceptionPage();
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();