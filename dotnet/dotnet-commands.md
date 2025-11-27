# .NET CLI Commands for Layered Architecture with EF Core

## ⚙️ 1. Solution Setup

### Create base solution

```bash
dotnet new sln -n MyApp
```

**Explanation:**
Creates a new **solution file (`.sln`)** named `MyApp`.
A solution acts as a **container** for multiple projects, allowing you to organize API, business logic, domain, and infrastructure projects together.

---

### Create projects (by layers)

```bash
dotnet new webapi -n MyApp.API
dotnet new classlib -n MyApp.Application
dotnet new classlib -n MyApp.Domain
dotnet new classlib -n MyApp.Infrastructure
```

**Explanation:**

* `webapi` → creates the API project (controllers, endpoints).

* `classlib` → creates class library projects for **modular layers**.
  
  * `Application` → business logic (services, DTOs).
  * `Domain` → core entities and business rules.
  * `Infrastructure` → data access, EF Core context, repository implementations.

---

### Add projects to the solution

```bash
dotnet sln add MyApp.API/
dotnet sln add MyApp.Application/
dotnet sln add MyApp.Domain/
dotnet sln add MyApp.Infrastructure/
```

**Explanation:**
Adds the projects to the solution file, so **Visual Studio or `dotnet` commands know all the projects in the solution**.

---

## � 2. Project References

```bash
dotnet add MyApp.API reference MyApp.Application
dotnet add MyApp.Application reference MyApp.Domain
dotnet add MyApp.Application reference MyApp.Infrastructure
dotnet add MyApp.Infrastructure reference MyApp.Domain
```

`dotnet add MyApp.API reference MyApp.Application` tells .NET to **add a project reference** from `MyApp.Application` to `MyApp.API`, allowing `MyApp.API` to use the code from `MyApp.Application`.

**Explanation:**

* Establishes **dependencies** between projects.
* Ensures that **API can use Application**, Application can use Domain/Infrastructure, etc.
* Typical dependency flow:

```
API → Application → Infrastructure → Domain
```

This avoids **circular dependencies** and enforces **layered architecture**.

---

## �️ 3. Entity Framework Core Setup

### Install EF Core packages (for PostgreSQL)

```bash
dotnet add MyApp.Infrastructure package Microsoft.EntityFrameworkCore
dotnet add MyApp.Infrastructure package Microsoft.EntityFrameworkCore.Design
dotnet add MyApp.Infrastructure package Npgsql.EntityFrameworkCore.PostgreSQL
```

**Explanation:**

* `Microsoft.EntityFrameworkCore` → main EF Core ORM package.
* `Design` → tools for migrations and scaffolding.
* `Npgsql` → PostgreSQL database provider.
* Install in `Infrastructure` because **data access lives in this layer**.

---

## � 4. Migrations and Database Update

Create migrations and update database. Here is the syntax:

```bash
dotnet ef migrations add <NameOfMigration> --project <PathWhereMigrationsFolderIs> --startup-project <PathWhereDbConfigurationIs>
```

### Create a new migration

```bash
dotnet ef migrations add InitialCreate --project ./MyApp.Infrastructure --startup-project ./MyApp.API
```

**Explanation:**

* Creates a migration based on your **DbContext and Entities**.
* `--startup-project` specifies which project **contains Program.cs and configuration**, because EF needs to know the runtime environment.

### Apply migrations (update the DB)

```bash
dotnet ef database update --project ../MyApp.Infrastructure  --startup-project ../MyApp.API
```

**Explanation:**

* Applies the migration to the **database**.
* Generates tables and schema matching your EF entities.

---

## � 5. Run the Project

### Run API project

```bash
dotnet run --project MyApp.API
```

**Explanation:**

* Starts the **web API** locally.
* Serves endpoints for testing or development.

Or from inside the API folder:

```bash
dotnet run
```

---

## � 6. Docker Commands (optional)

### Build and run manually

```bash
docker build -t myapp-api .
docker run -p 8080:8080 myapp-api
```

**Explanation:**

* Builds a **Docker image** for your API.
* Runs a container mapping port 8080.

### Using Docker Compose

```bash
docker compose up --build
```

With environment file:

```bash
docker compose --env-file .env.development up --build
```

**Explanation:**

* Compose allows running **multiple services** at once.
* `--env-file` loads environment variables for development, production, or testing.

---

## � 7. Check Versions / Tools

```bash
dotnet --version
dotnet ef --version
```

**Explanation:**

* Verify installed **.NET SDK** and **EF Core CLI version**.

---

## � 8. Build & Clean

```bash
dotnet build
dotnet clean
```

**Explanation:**

* `build` → compiles all projects.
* `clean` → removes compiled files (useful before rebuilding).

---

## � 9. Helpful EF Commands

| Action                 | Command                                                                     | Explanation                                    |
| ---------------------- | --------------------------------------------------------------------------- | ---------------------------------------------- |
| Create migration       | `dotnet ef migrations add AddCategoryEntity --startup-project ../MyApp.API` | Generates a new migration from current models. |
| Apply latest migration | `dotnet ef database update --startup-project ../MyApp.API`                  | Applies migration changes to DB.               |
| List migrations        | `dotnet ef migrations list --startup-project ../MyApp.API`                  | Lists all migrations applied/created.          |
| Remove last migration  | `dotnet ef migrations remove --startup-project ../MyApp.API`                | Rolls back the last migration if needed.       |

---

## ⚡ 10. Extra Utilities

| Purpose                         | Command                                      | Explanation                                  |
| ------------------------------- | -------------------------------------------- | -------------------------------------------- |
| List all projects in solution   | `dotnet sln list`                            | Shows all projects included in the solution. |
| Create a new controller         | `dotnet new controller -n ProductController` | Quickly scaffold a new API controller.       |
| Restore dependencies            | `dotnet restore`                             | Installs all NuGet packages.                 |
| Watch and rebuild automatically | `dotnet watch run`                           | Runs the app and reloads on file changes.    |

---

If you want, I can **also add a small diagram showing the layer flow + microservices context** so these notes become fully visual and easy to remember.

Do you want me to add that diagram too?
