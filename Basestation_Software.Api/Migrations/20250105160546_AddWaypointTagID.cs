using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Basestation_Software.Api.Migrations
{
    /// <inheritdoc />
    public partial class AddWaypointTagID : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "TagID",
                table: "Waypoints",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "Waypoints",
                keyColumn: "ID",
                keyValue: 1,
                columns: new[] { "TagID", "Timestamp" },
                values: new object[] { null, new DateTime(2025, 1, 5, 10, 5, 45, 522, DateTimeKind.Local).AddTicks(6963) });

            migrationBuilder.UpdateData(
                table: "Waypoints",
                keyColumn: "ID",
                keyValue: 2,
                columns: new[] { "TagID", "Timestamp" },
                values: new object[] { null, new DateTime(2025, 1, 5, 10, 5, 45, 522, DateTimeKind.Local).AddTicks(7077) });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TagID",
                table: "Waypoints");

            migrationBuilder.UpdateData(
                table: "Waypoints",
                keyColumn: "ID",
                keyValue: 1,
                column: "Timestamp",
                value: new DateTime(2024, 10, 19, 15, 22, 35, 922, DateTimeKind.Local).AddTicks(4328));

            migrationBuilder.UpdateData(
                table: "Waypoints",
                keyColumn: "ID",
                keyValue: 2,
                column: "Timestamp",
                value: new DateTime(2024, 10, 19, 15, 22, 35, 922, DateTimeKind.Local).AddTicks(4430));
        }
    }
}
