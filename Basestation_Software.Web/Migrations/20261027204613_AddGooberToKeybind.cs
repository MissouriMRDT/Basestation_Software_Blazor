using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Basestation_Software.Web.Migrations
{
    /// <inheritdoc />
    public partial class AddGooberToKeybind : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Goober",
                table: "Keybinds",
                type: "TEXT",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Goober",
                table: "Keybinds");
        }
    }
}
