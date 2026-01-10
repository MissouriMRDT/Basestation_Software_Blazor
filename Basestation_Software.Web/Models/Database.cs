using Microsoft.EntityFrameworkCore;
using Basestation_Software.Web.Core.Services;
using System.Text.Json;

namespace Basestation_Software.Web.Models;

public class DatabaseContext : DbContext
{
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlite("Data Source=Data/data.db");
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Page>()
            .HasKey(x => x.ID);
        modelBuilder.Entity<Page>()
            .Property(x => x.Components)
            .HasConversion(
                x => JsonSerializer.Serialize(x, (JsonSerializerOptions?)null),
                x => JsonSerializer.Deserialize<List<Component>>(x, (JsonSerializerOptions?)null) ?? new()
            );
    }

    public async Task<int> SaveChangesAsync(DatabaseService databaseService, bool acceptAllChangesOnSuccess, CancellationToken cancellationToken = default)
    {
        HashSet<Type> changedTables = [.. ChangeTracker.Entries().Where(x => x.State != EntityState.Unchanged).Select(x => x.Entity.GetType())];
        List<(Type, Guid)> changedEntities = [.. ChangeTracker.Entries().Where(x => x.State == EntityState.Modified).Select(x => (x.Entity.GetType(), (Guid)(x.Entity.GetType().GetProperty("ID")?.GetValue(x.Entity) ?? 0)))];
        List<(Type, Guid)> deletedEntities = [.. ChangeTracker.Entries().Where(x => x.State == EntityState.Deleted).Select(x => (x.Entity.GetType(), (Guid)(x.Entity.GetType().GetProperty("ID")?.GetValue(x.Entity) ?? 0)))];
        int returnValue = await base.SaveChangesAsync(acceptAllChangesOnSuccess, cancellationToken);
        try
        {
            await Task.WhenAll(
                changedTables.Select(x => databaseService.NotifyChanges(x))
                .Concat(changedEntities.Select(x => databaseService.NotifyChanges(x.Item1, x.Item2)))
                .Concat(deletedEntities.Select(x => databaseService.NotifyDeleted(x.Item1, x.Item2)))
            );
        }
        catch (Exception)
        {
            Console.WriteLine("Failed to notify listeners of database change(s).");
        }
        return returnValue;
    }

    public Task<int> SaveChangesAsync(DatabaseService databaseService, CancellationToken cancellationToken = default)
    {
        return SaveChangesAsync(databaseService, true, cancellationToken);
    }

    public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException("Use SaveChangesAsync(DatabaseService, ...)");
    }

    public override Task<int> SaveChangesAsync(bool acceptAllChangesOnSuccess, CancellationToken cancellationToken = default)
    {
        throw new NotImplementedException("Use SaveChangesAsync(DatabaseService, ...)");
    }

    // DbSets correspond to tables in data.db.

    public DbSet<Page> Pages { get; set; }
    public DbSet<GPSWaypoint> Waypoints { get; set; }
    public DbSet<MapTile> MapTiles { get; set; }
    public DbSet<LidarTile> LidarTiles { get; set; }
    public DbSet<ArmAngularPosition> ArmAngularPositions { get; set; }
    public DbSet<ControlPreset> ControlPresets { get; set; }
}
