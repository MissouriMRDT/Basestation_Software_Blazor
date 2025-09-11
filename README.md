# Basestation Software

Basestation Software is a multi-tier application designed to manage and interact with a SQLite database using a REST API, a class library for object models, and a Blazor web application for the frontend. The project is structured into three main components:

- `Basestation_Software.Api`: REST API for reading and writing data to a SQLite database.
- `Basestation_Software.Models`: A class library for storing all project object models.
- `Basestation_Software.Web`: The frontend Blazor web application.

## Project Structure

### Basestation_Software.Api

This project contains the REST API built using ASP.NET Core. It provides endpoints for CRUD (Create, Read, Update, Delete) operations on the SQLite database.

- **Technologies**: ASP.NET Core, Entity Framework Core, SQLite
- **Key Commands**:
  - `dotnet ef migrations add InitialDB`: Adds a new migration to create the initial database schema.
  - `dotnet ef database update`: Applies pending migrations to the database.

For more info about the API, view the README.md in the Basestation_Software.Api folder.

### Basestation_Software.Models

This project is a class library that contains all the object models used throughout the application. These models represent the entities in the database and are shared across the API and web application.

- **Technologies**: .NET Standard Library
- **Key Concepts**:
  - **Models**: Represent the data structure and are used for database interaction.

### Basestation_Software.Web

This project is the frontend web application built using Blazor. Blazor is a framework for building interactive web UIs with C# instead of JavaScript. It comes in two flavors: Blazor Server and Blazor WebAssembly (WASM).

- **Technologies**: Blazor, ASP.NET Core
- **Key Concepts**:
  - **Pages**: Represent the different views of the application and contain the UI logic.
  - **Components**: Reusable UI elements that can be embedded within pages or other components.
  - **Services**: Contain business logic and data access code, and are used to interact with the API.
  - **Models**: Used to define the structure of the data handled by the application.

## Blazor: Server vs. Client-Side Rendering

Blazor allows you to build rich web applications using C# and .NET. It supports two modes of rendering:

### Blazor Server

In Blazor Server, the application runs on the server. UI updates, event handling, and JavaScript calls are handled over a SignalR connection.

- **Advantages**:
  - Smaller download size as only HTML, CSS, and minimal JavaScript are sent to the client.
  - Faster initial load time.
  - Access to .NET Core server capabilities, such as server-side data access and authentication.

- **Disadvantages**:
  - Requires a constant connection to the server.
  - Higher latency for UI updates, as every interaction goes to the server.

### Blazor WebAssembly (WASM)

In Blazor WASM, the application runs in the browser using WebAssembly. The entire application, including the .NET runtime, is downloaded to the client.

- **Advantages**:
  - Works offline after the initial load.
  - Lower latency for UI updates, as interactions are handled locally in the browser.

- **Disadvantages**:
  - Larger download size due to the .NET runtime.
  - Limited access to server resources and capabilities.

## 3rd Party Libraries
 - [Bootstrap (for premade icons and CSS classes)](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
 - [Radzen (for premade components)](https://blazor.radzen.com/dashboard)

## Getting Started

### Step 1: Install Git
  Git is the version control software we use to manage all the different versions of our codebase across multiple people and projects.  

  To install git on windows, download and run the installer for [Git For Windows](https://gitforwindows.org/).  

  To install git on Linux, use your package manager. For example, using apt: `sudo apt install git`

### Step 2: Install the Dotnet Framework SDK 

  Microsoft .NET is the framework we use to develop Basestation Software. Specifically, we use .NET 8.0. 

  To install Dotnet on Windows, download the installer from [this page](https://dotnet.microsoft.com/en-us/download). 

  To install Dotnet on Debian, refer to [this guide](https://learn.microsoft.com/en-us/dotnet/core/install/linux-debian?tabs=dotnet8). 

  Make sure you install version 8.0 and not 9.0! To verify you have installed Dotnet successfully, open a terminal and run `dotnet --version`. 

### Step 3: Install the Entity Framework Core tools for .NET 

  The Entity Framework Core tools, more commonly called dotnet-ef, is a set of tools for the Dotnet framework that we use to update and manage our database file. Note that we also need to install the 8.0 version of this tool. 

  To install on Windows, open a terminal and run `dotnet tool install --global dotnet-ef --version 8.* `

  To install on Debian, run `dotnet tool install --global dotnet-ef --version 8.* `

  Then, add the following line to your bashrc file: `export PATH="$PATH:$HOME/.dotnet/tools/" `

  Then, run `source ~/.bashrc` 

  Verify you have installed dotnet-ef, run `dotnet ef`

### Step 4: Clone the Basestation_Software_Blazor repository 

  Open a terminal and navigate to the directory you want to clone the repo. Then, run `git clone https://github.com/MissouriMRDT/Basestation_Software_Blazor.git`

  Navigate your terminal into the cloned directory.

  To make sure all git submodules are updated, run the following:  

  ```
  git submodule init 

  git submodule update --recursive --remote
  ``` 

### Step 5: Initialize your local database file 

  In your terminal, navigate to the Basestation_Software_Blazor/Basestation_Software_Blazor.api directory. Then, delete `Data/data.db` if it exists. 

  Then, run `dotnet ef database update --runtime <runtime>`

  This will create a new data.db with the appropriate columns and default data. Now, you should be ready to run Basestation Software! 

### Step 6: Install and Run Basestation Camera Server 

  A Rust server is used to serve UDP streams to Basestation clients. 

  Recommended: Running from a release binary (linux/windows amd64) 

  Download basestation_camera_server (linux) or basestation_camera_server.exe (windows) from https://github.com/MissouriMRDT/basestation_camera_server/releases/latest into an appropriate folder. 

  Execute the downloaded executable. The default configuration will be written to config.toml beside the executable and can be modified. 

  Optionally, you can build and run from source with the following:

  - Open a terminal and navigate to the directory you want to clone the repo. Then, run git clone https://github.com/MissouriMRDT/basestation_camera_server 

  - Install Rust from https://www.rust-lang.org/tools/install if it does not exist on your machine. 

  - Compile and run with cargo run --release, the default configuration will be written to config.toml beside the executable and can be modified. 

### Step 7: Run Basestation Software 

  Start Basestation_Software_Blazor.Api, which provides an API to perform CRUD operations on your local database file with `dotnet run --project Basestation_Software.Api --urls http://localhost:5000`

  Start Basestation_Software_Blazor.Web, which hosts a webpage acting as a user interface to send commands to the rover and make database API calls with `dotnet run --project Basestation_Software.Web --urls http://localhost:8080 `

  Open `http://localhost:8080` in any web browser (competition Basestation PC runs Firefox with 4 full-screen portrait 1080x1920 windows). You should now see Basestation running on your machine! You are now good to open the codebase in an IDE of your choice (VSCode ❤️ recommended) and start writing code! 

*Note: The API also hosts Swagger for easier development. It can be found at `http://localhost:5000/swagger/index.html`.*

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss any changes or improvements.
