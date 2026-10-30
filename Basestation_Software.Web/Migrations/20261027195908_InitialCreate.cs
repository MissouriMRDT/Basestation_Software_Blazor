using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Basestation_Software.Web.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ArmPoses",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "TEXT", nullable: false),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    X = table.Column<float>(type: "REAL", nullable: false),
                    J2 = table.Column<float>(type: "REAL", nullable: false),
                    J3 = table.Column<float>(type: "REAL", nullable: false),
                    J4 = table.Column<float>(type: "REAL", nullable: false),
                    J5 = table.Column<float>(type: "REAL", nullable: false),
                    J6 = table.Column<float>(type: "REAL", nullable: false),
                    GX = table.Column<float>(type: "REAL", nullable: false),
                    GY = table.Column<float>(type: "REAL", nullable: false),
                    GZ = table.Column<float>(type: "REAL", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ArmPoses", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "ControlPresets",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "TEXT", nullable: false),
                    XSpeed = table.Column<float>(type: "REAL", nullable: false),
                    YSpeed = table.Column<float>(type: "REAL", nullable: false),
                    ZSpeed = table.Column<float>(type: "REAL", nullable: false),
                    J2Speed = table.Column<float>(type: "REAL", nullable: false),
                    J3Speed = table.Column<float>(type: "REAL", nullable: false),
                    J4Speed = table.Column<float>(type: "REAL", nullable: false),
                    J5Speed = table.Column<float>(type: "REAL", nullable: false),
                    J6Speed = table.Column<float>(type: "REAL", nullable: false),
                    GripperSpeed = table.Column<float>(type: "REAL", nullable: false),
                    LinearServoSpeed = table.Column<float>(type: "REAL", nullable: false),
                    CacheSpeed = table.Column<float>(type: "REAL", nullable: false),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    Binds = table.Column<string>(type: "TEXT", nullable: false),
                    Inversions = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ControlPresets", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Keybinds",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "TEXT", nullable: false),
                    MoveLeft = table.Column<string>(type: "TEXT", nullable: false),
                    MoveRight = table.Column<string>(type: "TEXT", nullable: false),
                    PacketToggle = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Keybinds", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "LidarTiles",
                columns: table => new
                {
                    X = table.Column<int>(type: "INTEGER", nullable: false),
                    Y = table.Column<int>(type: "INTEGER", nullable: false),
                    Z = table.Column<int>(type: "INTEGER", nullable: false),
                    ImageData = table.Column<byte[]>(type: "BLOB", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LidarTiles", x => new { x.X, x.Y, x.Z });
                });

            migrationBuilder.CreateTable(
                name: "MapTiles",
                columns: table => new
                {
                    X = table.Column<int>(type: "INTEGER", nullable: false),
                    Y = table.Column<int>(type: "INTEGER", nullable: false),
                    Z = table.Column<int>(type: "INTEGER", nullable: false),
                    ImageData = table.Column<byte[]>(type: "BLOB", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MapTiles", x => new { x.X, x.Y, x.Z });
                });

            migrationBuilder.CreateTable(
                name: "Pages",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "TEXT", nullable: false),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    Components = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pages", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Timers",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "TEXT", nullable: false),
                    Paused = table.Column<bool>(type: "INTEGER", nullable: false),
                    A = table.Column<long>(type: "INTEGER", nullable: false),
                    B = table.Column<long>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Timers", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Waypoints",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "TEXT", nullable: false),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    Latitude = table.Column<double>(type: "REAL", nullable: false),
                    Longitude = table.Column<double>(type: "REAL", nullable: false),
                    Color = table.Column<int>(type: "INTEGER", nullable: false),
                    SearchRadius = table.Column<double>(type: "REAL", nullable: false),
                    TagID = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Waypoints", x => x.ID);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ArmPoses");

            migrationBuilder.DropTable(
                name: "ControlPresets");

            migrationBuilder.DropTable(
                name: "Keybinds");

            migrationBuilder.DropTable(
                name: "LidarTiles");

            migrationBuilder.DropTable(
                name: "MapTiles");

            migrationBuilder.DropTable(
                name: "Pages");

            migrationBuilder.DropTable(
                name: "Timers");

            migrationBuilder.DropTable(
                name: "Waypoints");
        }
    }
}
