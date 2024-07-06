Here's a comprehensive README.md file for the entire project:

```markdown
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

#### Each page and component can be specifically configured to run either server or client side. Put these at the top of your component to specify.
  - `@rendermode InteractiveServer`
  - `@rendermode InteractiveWebAssembly`

  If you don't specify one of these, then the component or page will be STATIC.

## 3rd Party Libraries
 - [Bootstrap (for premade icons and CSS classes)](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
 - [Radzen (for premade components)](https://blazor.radzen.com/dashboard)

## Getting Started

### Prerequisites

- [.NET SDK](https://dotnet.microsoft.com/download) installed
- [SQLite](https://www.sqlite.org/download.html) installed

### Setting Up the Project

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. Open in the Devcontainer

### Running Basestation_Software

1) Once the devcontainer is open, navigate to the debug tool in the sidebar of VSCode.
2) Click on the dropdown and select API, then click run.
2) Click on the dropdown and select WEB, then click run.

The wabapp will be automatically opened in a browser window.

The application will start and be accessible at `http://localhost:8080`.
The API also hosts Swagger for easier development. It can be found at `http://localhost:5000/swagger/index.html`.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss any changes or improvements.