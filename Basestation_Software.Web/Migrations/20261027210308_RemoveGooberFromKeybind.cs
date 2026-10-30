using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Basestation_Software.Web.Migrations
{
    /// <inheritdoc />
    public partial class RemoveGooberFromKeybind : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Goober",
                table: "Keybinds");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Goober",
                table: "Keybinds",
                type: "TEXT",
                nullable: false,
                defaultValue: "");
        }
    }
}
