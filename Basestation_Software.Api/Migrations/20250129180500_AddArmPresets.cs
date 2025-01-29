using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Basestation_Software.Api.Migrations
{
    /// <inheritdoc />
    public partial class AddArmPresets : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ArmPresets",
                columns: table => new
                {
                    ID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(type: "TEXT", nullable: true),
                    JointData = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ArmPresets", x => x.ID);
                });

            migrationBuilder.InsertData(
                table: "ArmPresets",
                columns: new[] { "ID", "JointData", "Name" },
                values: new object[] { 1, null, "Default" });

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

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ArmPresets");

            migrationBuilder.UpdateData(
                table: "Waypoints",
                keyColumn: "ID",
                keyValue: 1,
                column: "Timestamp",
                value: new DateTime(2025, 1, 5, 10, 5, 45, 522, DateTimeKind.Local).AddTicks(6963));

            migrationBuilder.UpdateData(
                table: "Waypoints",
                keyColumn: "ID",
                keyValue: 2,
                column: "Timestamp",
                value: new DateTime(2025, 1, 5, 10, 5, 45, 522, DateTimeKind.Local).AddTicks(7077));
        }
    }
}
