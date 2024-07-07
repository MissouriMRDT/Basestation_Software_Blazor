using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Basestation_Software.Api.Migrations
{
    /// <inheritdoc />
    public partial class Maptiles : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "MapTiles",
                columns: table => new
                {
                    ID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    X = table.Column<int>(type: "INTEGER", nullable: true),
                    Y = table.Column<int>(type: "INTEGER", nullable: true),
                    Z = table.Column<int>(type: "INTEGER", nullable: true),
                    ImageData = table.Column<byte[]>(type: "BLOB", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MapTiles", x => x.ID);
                });

            migrationBuilder.UpdateData(
                table: "Waypoints",
                keyColumn: "ID",
                keyValue: 1,
                column: "Timestamp",
                value: new DateTime(2024, 7, 6, 18, 13, 39, 408, DateTimeKind.Local).AddTicks(2836));

            migrationBuilder.UpdateData(
                table: "Waypoints",
                keyColumn: "ID",
                keyValue: 2,
                column: "Timestamp",
                value: new DateTime(2024, 7, 6, 18, 13, 39, 408, DateTimeKind.Local).AddTicks(2958));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MapTiles");

            migrationBuilder.UpdateData(
                table: "Waypoints",
                keyColumn: "ID",
                keyValue: 1,
                column: "Timestamp",
                value: new DateTime(2024, 7, 4, 19, 11, 41, 140, DateTimeKind.Local).AddTicks(8159));

            migrationBuilder.UpdateData(
                table: "Waypoints",
                keyColumn: "ID",
                keyValue: 2,
                column: "Timestamp",
                value: new DateTime(2024, 7, 4, 19, 11, 41, 140, DateTimeKind.Local).AddTicks(8289));
        }
    }
}
