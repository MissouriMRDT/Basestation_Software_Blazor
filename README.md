# Basestation Software

Basestation Software is a multi-tier application designed to manage and interact with a SQLite database using a REST API, a class library for object models, and a Blazor web application for the frontend. The project is structured into three main components:

- `Basestation_Software.Api`: REST API for reading and writing data to a SQLite database.
- `Basestation_Software.Models`: A class library for storing all project object models.
- `Basestation_Software.Web`: The frontend Blazor web application.

## Project Structure

### Basestation_Software.Web

This project is the frontend web application built using Blazor. Blazor is a framework for building interactive web UIs with C# instead of JavaScript. It comes in two flavors: Blazor Server and Blazor WebAssembly (WASM).

- **Technologies**: Blazor, ASP.NET Core
- **Key Concepts**:
  - **Pages**: Represent the different views of the application and contain the UI logic.
  - **Components**: Reusable UI elements that can be embedded within pages or other components.
  - **Services**: Contain business logic and data access code, and are used to interact with the API.
  - **Models**: Used to define the structure of the data handled by the application.

## 3rd Party Libraries

- [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/) for icons
- [Leaflet](https://leafletjs.com/) for the interactive map
- [three.js](https://threejs.org) for 3d rover

## Getting Started

### Step 1: Install Git

Git is the version control software we use to manage all the different versions of our codebase across multiple people and projects.

To install Git on Windows, download and run the installer for [Git For Windows](https://gitforwindows.org/).

To install Git on Linux, use your package manager. For example, using apt: `sudo apt install git`

### Step 2: Install the Dotnet Framework SDK

Microsoft .NET is the framework we use to develop Basestation Software. Specifically, we use .NET 8.0.

To install Dotnet on Windows, download the installer from [this page](https://dotnet.microsoft.com/en-us/download).

To install Dotnet on Debian, refer to [this guide](https://learn.microsoft.com/en-us/dotnet/core/install/linux-debian?tabs=dotnet8).

Make sure you install version 8.0 and not 9.0! To verify you have installed Dotnet successfully, open a terminal and run `dotnet --version`.

### Step 3: Install the Entity Framework Core tools for .NET

The Entity Framework Core tools, more commonly called dotnet-ef, is a set of tools for the Dotnet framework that we use to update and manage our database file. Note that we also need to install the 8.0 version of this tool.

To install on Windows, open a terminal and run `dotnet tool install --global dotnet-ef --version 8.*`.

To install on Debian, run `dotnet tool install --global dotnet-ef --version 8.*` Then add `export PATH="$PATH:$HOME/.dotnet/tools/"` to `~/.bashrc` before reloading with `source ~/.bashrc`.

Verify you have installed dotnet-ef with `dotnet ef`.

### Step 4: Clone the Basestation_Software_Blazor repository

1. Open a terminal and navigate to the directory you want to clone the repo. Then, run `git clone https://github.com/MissouriMRDT/Basestation_Software_Blazor.git`
2. Navigate your terminal into the `Basestation_Software_Blazor` directory created in the previous step
3. Initialize and update git submodules to the latest version with `git submodule update --init --recursive --remote`

### Step 5: Initialize your local database file

1. `cd Basestation_Software_Blazor/Basestation_Software.Api`
2. Delete `Data/data.db` if it exists
3. `dotnet ef database update --runtime <runtime>` where `<runtime>` is the identifier matching your platform which can be found at <https://learn.microsoft.com/en-us/dotnet/core/rid-catalog> (e.g, win-x64, linux-x64)

This will create a new data.db with the appropriate columns and default data.

### Step 6: Install and Run Basestation Camera Server

A Rust server is used to receive UDP streams and serve them to Basestation clients over WebRTC.

Recommended: Running from a release binary (linux/windows amd64)

1. Download basestation_camera_server (linux) or basestation_camera_server.exe (windows) from <https://github.com/MissouriMRDT/basestation_camera_server/releases/latest> into an appropriate folder
2. Execute the downloaded executable. The default configuration will be written to config.toml beside the executable and can be modified

Optionally, you can build and run from source with the following:

1. Open a terminal and navigate to the directory you want to clone the repo. Then, run `git clone https://github.com/MissouriMRDT/basestation_camera_server`
2. Install Rust from <https://www.rust-lang.org/tools/install> if it does not exist on your machine
3. Compile and run with `cargo run --release`, the default configuration will be written to config.toml beside the executable and can be modified

### Step 7: Run Basestation Software

1. `cd Basestation_Software_Blazor`
2. Start Basestation_Software_Blazor.Api, which provides an API to perform CRUD operations on your local database file with `dotnet run --project Basestation_Software.Api --urls http://localhost:5000`
3. Start Basestation_Software_Blazor.Web, which hosts a webpage acting as a user interface to send commands to the rover and make database API calls with `dotnet run --project Basestation_Software.Web --urls http://localhost:8080`
4. Open `http://localhost:8080` in any web browser (competition Basestation PC runs Firefox with 4 full-screen portrait 1080x1920 windows).

Basestation can be served to other devices on your network by replacing `--urls http://localhost:8080` with `--urls 'http://*:8080'`.

*Note: The API also hosts Swagger at `http://localhost:5000/swagger/index.html`.*
