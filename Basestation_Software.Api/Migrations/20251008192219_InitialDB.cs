using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Basestation_Software.Api.Migrations
{
    /// <inheritdoc />
    public partial class InitialDB : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Waypoints",
                keyColumn: "ID",
                keyValue: 1,
                column: "Timestamp",
                value: new DateTime(2025, 10, 8, 14, 22, 18, 867, DateTimeKind.Local).AddTicks(9846));

            migrationBuilder.UpdateData(
                table: "Waypoints",
                keyColumn: "ID",
                keyValue: 2,
                column: "Timestamp",
                value: new DateTime(2025, 10, 8, 14, 22, 18, 867, DateTimeKind.Local).AddTicks(9961));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
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
    }
}
