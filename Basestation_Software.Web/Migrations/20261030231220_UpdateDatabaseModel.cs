using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Basestation_Software.Web.Migrations
{
    /// <inheritdoc />
    public partial class UpdateDatabaseModel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "DeletePage",
                table: "Keybinds",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Luna",
                table: "Keybinds",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "NewComponent",
                table: "Keybinds",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "NewPage",
                table: "Keybinds",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "OpenCopyArea",
                table: "Keybinds",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "OpenMacrosModal",
                table: "Keybinds",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Resubscribe",
                table: "Keybinds",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "SavePage",
                table: "Keybinds",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ToggleLightMode",
                table: "Keybinds",
                type: "TEXT",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DeletePage",
                table: "Keybinds");

            migrationBuilder.DropColumn(
                name: "Luna",
                table: "Keybinds");

            migrationBuilder.DropColumn(
                name: "NewComponent",
                table: "Keybinds");

            migrationBuilder.DropColumn(
                name: "NewPage",
                table: "Keybinds");

            migrationBuilder.DropColumn(
                name: "OpenCopyArea",
                table: "Keybinds");

            migrationBuilder.DropColumn(
                name: "OpenMacrosModal",
                table: "Keybinds");

            migrationBuilder.DropColumn(
                name: "Resubscribe",
                table: "Keybinds");

            migrationBuilder.DropColumn(
                name: "SavePage",
                table: "Keybinds");

            migrationBuilder.DropColumn(
                name: "ToggleLightMode",
                table: "Keybinds");
        }
    }
}
