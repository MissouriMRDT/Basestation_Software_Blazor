using Basestation_Software.Models.Geospatial;
using Basestation_Software.Models.Config;
using Basestation_Software.Models.Arm;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System.Xml.Linq;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage;

namespace Basestation_Software.Api.Entities;

public class REDDatabase : DbContext
{
    private readonly IConfiguration Configuration;

    /// <summary>
    /// Constructor
    /// </summary>
    /// <param name="configuration">The configuration that contains the DB connection string and params. (Implicitly passed in)</param>
    public REDDatabase(IConfiguration configuration)
    {
        // Assign member variables.
        Configuration = configuration;

        // Attempt to form missing tables in data.db
        try
        {
            (Database.GetService<IDatabaseCreator>() as RelationalDatabaseCreator).CreateTables();
        }
        catch
        {
            // CreateTables throws error if table already exists but we don't care
        }
    }

    /// <summary>
    /// This is used by the Entity Framework Core to configure the database context.
    /// </summary>
    /// <param name="optionsBuilder"></param>
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlite(Configuration.GetConnectionString("RED_DB"));
    }

    /// <summary>
    /// This is used by the Entity Framework Core and represents a collection of 
    /// entities in a context. In this case is corresponds to a database table.
    /// </summary>
    /// <value></value>
    public DbSet<ConfigEntity> Configs { get; set; }
    public DbSet<GPSWaypoint> Waypoints { get; set; }
    public DbSet<MapTile> MapTiles { get; set; }
    public DbSet<ArmPresetEntity> ArmPresets { get; set; }
    public DbSet<ControlPreset> ControlPresets { get; set; }

    public void Configure(EntityTypeBuilder<ConfigEntity> modelBuilder)
    {
        modelBuilder.HasKey(x => x.ID);
        modelBuilder.Property(x => x.ID)
            .HasColumnName(@"ID")
            .IsRequired()
            ;
    }

    /// <summary>
    /// Configure the primary key for the arm preset table.
    /// </summary>
    public void Configure(EntityTypeBuilder<ArmPresetEntity> modelBuilder)
    {
        modelBuilder.HasKey(x => x.ID);
        modelBuilder.Property(x => x.ID)
            .HasColumnName(@"ID")
            .IsRequired()
            .ValueGeneratedOnAdd()
            ;
    }

    /// <summary>
    /// Configure the primary key for the arm control preset table.
    /// </summary>
    public void Configure(EntityTypeBuilder<ControlPreset> modelBuilder)
    {
        modelBuilder.HasKey(x => x.ID);
        modelBuilder.Property(x => x.ID)
            .HasColumnName(@"ID")
            .IsRequired()
            .ValueGeneratedOnAdd()
            ;
    }

    /// <summary>
    /// Configure the primary key for the Waypoints table.
    /// </summary>
    /// <param name="modelBuilder"></param>
    public void Configure(EntityTypeBuilder<GPSWaypoint> modelBuilder)
    {
        modelBuilder.HasKey(x => x.ID);
        modelBuilder.Property(x => x.ID)
            .HasColumnName(@"ID")
            //.HasColumnType("int") Weirdly this was upsetting SQLite
            .IsRequired()
            .ValueGeneratedOnAdd()
            ;
    }

    /// <summary>
    /// Configure the primary key for the MapTile table.
    /// </summary>
    /// <param name="modelBuilder"></param>
    public void Configure(EntityTypeBuilder<MapTile> modelBuilder)
    {
        modelBuilder.HasKey(x => x.ID);
        modelBuilder.Property(x => x.ID)
            .HasColumnName(@"ID")
            //.HasColumnType("int") Weirdly this was upsetting SQLite
            .IsRequired()
            .ValueGeneratedOnAdd()
            ;
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        /*
            Add some default GPS waypoints to the Waypoint database table.
        */
        // SDELC
        modelBuilder.Entity<GPSWaypoint>().HasData(
            new GPSWaypoint
            {
                ID = 1,
                Name = "MDRS",
                Latitude = 38.405879,
                Longitude = -110.792207,
                Altitude = 1280.0,
                WaypointColor = System.Drawing.Color.Green.ToArgb(),
                SearchRadius = 5.0,
                Type = WaypointType.Navigation
            }
        );
        // MDRS
        modelBuilder.Entity<GPSWaypoint>().HasData(
            new GPSWaypoint
            {
                ID = 2,
                Name = "SDELC",
                Latitude = 37.951764,
                Longitude = -91.778441,
                Altitude = 315.0,
                WaypointColor = System.Drawing.Color.Red.ToArgb(),
                SearchRadius = 5.0,
                Type = WaypointType.Navigation
            }
        );

        // Add the default layout to the Config table.
        modelBuilder.Entity<ConfigEntity>().HasData(
            new ConfigEntity
            {
                // Can't use Guid default (Guid.Empty) because Entity Framework thinks Guid.Empty is null.
                // ID=Guid.Empty works perfectly fine when manually added using SQLite but not through Entity Framework.
                // Error when creating a migration:
                //      The seed entity for entity type 'ConfigEntity' cannot be added because a default value
                //      was provided for the required property 'ID'. Please provide a value different from
                //      '00000000-0000-0000-0000-000000000000'.
                // Workaround: hardcode a default guid here and at the top of MainLayout.Razor.
                ID = Guid.Parse("00000000-0000-0000-0000-000000000001"), 
                Data = System.Text.Json.JsonSerializer.Serialize(new Config { Name = "Default" })
            }
        );

        modelBuilder.Entity<ArmPresetEntity>().HasData(
            new
            {
                ID = 1,
                Name = "Default",
            }
        );

        modelBuilder.Entity<ControlPreset>().HasData(
            new
            {
                ID = 1,
                Name = "Default",
                jointInversions = new List<bool>([false, false, false, false, false, false]),
                gamepadBinds = new List<int>([0, 1, 2, 3, 4, 5]),
                jointSpeeds = new List<float>([0.12f, 1f, 1f, 1f, 5f, 5f, 5f, 0.05f]),

            }
        );

    }
}
