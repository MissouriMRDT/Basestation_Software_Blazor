using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable


namespace Basestation_Software.Api.Migrations;

/// <inheritdoc />
public partial class InitialDBMigration : Migration
{
    /// <inheritdoc />
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.CreateTable(
            name: "Waypoints",
            columns: table => new
            {
                ID = table.Column<int>(type: "INTEGER", nullable: false)
                    .Annotation("Sqlite:Autoincrement", true),
                Name = table.Column<string>(type: "TEXT", nullable: true),
                Latitude = table.Column<double>(type: "REAL", nullable: true),
                Longitude = table.Column<double>(type: "REAL", nullable: true),
                Altitude = table.Column<double>(type: "REAL", nullable: true),
                Timestamp = table.Column<DateTime>(type: "TEXT", nullable: true),
                WaypointColor = table.Column<int>(type: "INTEGER", nullable: true),
                SearchRadius = table.Column<double>(type: "REAL", nullable: true),
                Type = table.Column<int>(type: "INTEGER", nullable: true)
            },
            constraints: table =>
            {
                table.PrimaryKey("PK_Waypoints", x => x.ID);
            });

        migrationBuilder.InsertData(
            table: "Waypoints",
            columns: new[] { "ID", "Altitude", "Latitude", "Longitude", "Name", "SearchRadius", "Timestamp", "Type", "WaypointColor" },
            values: new object[,]
            {
                { 1, 1280.0, 38.405878999999999, -110.792207, "MDRS", 5.0, new DateTime(2024, 7, 4, 19, 11, 41, 140, DateTimeKind.Local).AddTicks(8159), 0, -16744448 },
                { 2, 315.0, 37.951763999999997, -91.778441000000001, "SDELC", 5.0, new DateTime(2024, 7, 4, 19, 11, 41, 140, DateTimeKind.Local).AddTicks(8289), 0, -65536 }
            });
    }

    /// <inheritdoc />
    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropTable(
            name: "Waypoints");
    }
}
