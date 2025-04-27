using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Basestation_Software.Api.Migrations
{
    /// <inheritdoc />
    public partial class ControlPresets : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ControlPresets",
                columns: table => new
                {
                    ID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ControlPresets", x => x.ID);
                });

            migrationBuilder.UpdateData(
                table: "Waypoints",
                keyColumn: "ID",
                keyValue: 1,
                column: "Timestamp",
                value: new DateTime(2025, 4, 26, 22, 2, 35, 761, DateTimeKind.Local).AddTicks(4686));

            migrationBuilder.UpdateData(
                table: "Waypoints",
                keyColumn: "ID",
                keyValue: 2,
                column: "Timestamp",
                value: new DateTime(2025, 4, 26, 22, 2, 35, 761, DateTimeKind.Local).AddTicks(4790));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ControlPresets");

            migrationBuilder.UpdateData(
                table: "Waypoints",
                keyColumn: "ID",
                keyValue: 1,
                column: "Timestamp",
                value: new DateTime(2025, 1, 29, 12, 4, 59, 594, DateTimeKind.Local).AddTicks(6352));

            migrationBuilder.UpdateData(
                table: "Waypoints",
                keyColumn: "ID",
                keyValue: 2,
                column: "Timestamp",
                value: new DateTime(2025, 1, 29, 12, 4, 59, 594, DateTimeKind.Local).AddTicks(6532));
        }
    }
}
