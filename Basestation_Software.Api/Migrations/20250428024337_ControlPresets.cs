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
                    Name = table.Column<string>(type: "TEXT", nullable: true),
                    jointInversions = table.Column<string>(type: "TEXT", nullable: true),
                    gamepadBinds = table.Column<string>(type: "TEXT", nullable: true),
                    jointSpeeds = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ControlPresets", x => x.ID);
                });

            migrationBuilder.InsertData(
                table: "ControlPresets",
                columns: new[] { "ID", "Name", "gamepadBinds", "jointInversions", "jointSpeeds" },
                values: new object[] { 1, "Default", "[0,1,2,3,4,5]", "[false,false,false,false,false,false]", "[0.12,1,1,1,5,5,5,0.05]" });

            migrationBuilder.UpdateData(
                table: "Waypoints",
                keyColumn: "ID",
                keyValue: 1,
                column: "Timestamp",
                value: new DateTime(2025, 4, 27, 21, 43, 36, 523, DateTimeKind.Local).AddTicks(5772));

            migrationBuilder.UpdateData(
                table: "Waypoints",
                keyColumn: "ID",
                keyValue: 2,
                column: "Timestamp",
                value: new DateTime(2025, 4, 27, 21, 43, 36, 523, DateTimeKind.Local).AddTicks(5932));
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
