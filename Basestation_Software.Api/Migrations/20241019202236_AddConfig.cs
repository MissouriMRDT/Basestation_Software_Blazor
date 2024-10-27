using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Basestation_Software.Api.Migrations
{
    /// <inheritdoc />
    public partial class AddConfig : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Configs",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "TEXT", nullable: false),
                    Data = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Configs", x => x.ID);
                });

            migrationBuilder.InsertData(
                table: "Configs",
                columns: new[] { "ID", "Data" },
                values: new object[] { new Guid("00000000-0000-0000-0000-000000000001"), "{\"Name\":\"Default\",\"Dark\":true,\"Links\":{},\"Components\":[],\"Columns\":60,\"Rows\":60,\"Width\":100,\"Height\":100}" });

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

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Configs");

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
    }
}
