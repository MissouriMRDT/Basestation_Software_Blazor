
# .NET Web API with SQLite

This is a .NET Web API project that uses SQLite as its database. The project demonstrates how to use Entity Framework Core (EF Core) to manage database migrations and build a database structure using code.

## Prerequisites

- [.NET SDK](https://dotnet.microsoft.com/download) installed
- [SQLite](https://www.sqlite.org/download.html) installed

## Getting Started

### Setting Up the Project

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. Restore the project dependencies:

   ```sh
   dotnet restore
   ```

### Database Migrations

Entity Framework Core (EF Core) provides a way to create and manage your database schema using code. This is done through migrations, which are classes that represent changes to the database schema.

#### Adding a Migration

To add a new migration, use the `dotnet ef migrations add` command followed by the name of the migration. For example, to create the initial database schema, you would run:

```sh
dotnet ef migrations add InitialDB
```

This command does the following:

1. **Scaffolds a Migration**: It creates a new migration class in the `Migrations` folder. This class contains the code needed to apply and revert the changes to the database schema.
2. **Records the Migration**: It updates the `ModelSnapshot` class to reflect the current state of the database schema.

You should run this command whenever you make changes to your data models that require changes to the database schema.

#### Updating the Database

Once you have added a migration, you need to apply it to the database. This is done using the `dotnet ef database update` command:

```sh
dotnet ef database update
```

This command does the following:

1. **Applies the Migration**: It runs the `Up` method in the migration class, which applies the changes to the database schema.
2. **Updates the Database**: It updates the `__EFMigrationsHistory` table in the database, which keeps track of which migrations have been applied.

You should run this command whenever you want to apply pending migrations to your database.

### Building the Database Structure with Code

Using EF Core, you can define your database structure using C# classes and attributes. This approach is known as "code-first" development. Here is a brief overview of how it works:

1. **Define Your Models**: Create C# classes that represent the entities in your database. Use attributes to configure the properties and relationships between the entities.

   ```csharp
   public class Product
   {
       public int Id { get; set; }
       public string Name { get; set; }
       public decimal Price { get; set; }
   }

   public class Order
   {
       public int Id { get; set; }
       public DateTime OrderDate { get; set; }
       public List<Product> Products { get; set; }
   }
   ```

2. **Configure the Context**: Create a DbContext class that represents a session with the database. This class manages the entities and their relationships.

   ```csharp
   public class ApplicationDbContext : DbContext
   {
       public DbSet<Product> Products { get; set; }
       public DbSet<Order> Orders { get; set; }

       protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
       {
           optionsBuilder.UseSqlite("Data Source=app.db");
       }
   }
   ```

3. **Run Migrations**: Use the `dotnet ef migrations add` and `dotnet ef database update` commands to create and apply migrations, which will create the database schema based on your models and context configuration.

## Running the Application

To run the application, use the following command:

```sh
dotnet run
```

The application will start and be accessible at `http://localhost:5000`.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss any changes or improvements.
