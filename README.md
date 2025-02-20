# To Do List Application

This project is a To Do List application built with a React frontend and a C#/.NET backend, utilizing a PostgreSQL database hosted on Railway. 

## Project Structure

- **backend/**: Contains the C#/.NET backend code.
  - **Controllers/**: Contains the `TodoController.cs` for handling HTTP requests related to todo items.
  - **Models/**: Contains the `TodoItem.cs` which defines the structure of a todo item.
  - **Services/**: Contains the `TodoService.cs` for business logic related to todo items.
  - **Data/**: Contains the `ApplicationDbContext.cs` for database interactions.
  - **Program.cs**: Entry point of the application.
  - **Startup.cs**: Configures services and middleware.
  - **appsettings.json**: Configuration settings, including database connection strings.

- **frontend/**: Contains the React frontend code.
  - **public/**: Contains the main HTML file.
    - `index.html`: Entry point for the React application.
  - **src/**: Contains the source code for the React application.
    - **components/**: Contains React components.
      - `TodoList.tsx`: Renders a list of todo items.
    - `App.tsx`: Main application component.
    - `index.tsx`: Entry point for the React application.
  - `package.json`: Configuration file for npm.
  - `tsconfig.json`: TypeScript configuration file.

- **docker-compose.yml**: Defines services for Docker, including the backend and PostgreSQL database configurations.

## Getting Started

### Prerequisites

- .NET SDK
- Node.js and npm
- PostgreSQL database

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd todo-list-app
   ```

2. Set up the backend:
   - Navigate to the `backend` directory.
   - Restore the dependencies:
     ```
     dotnet restore
     ```
   - Update the `appsettings.json` with your PostgreSQL connection string.

3. Set up the frontend:
   - Navigate to the `frontend` directory.
   - Install the dependencies:
     ```
     npm install
     ```

### Running the Application

1. Start the backend:
   ```
   dotnet run
   ```

2. Start the frontend:
   ```
   npm start
   ```

### Docker

To run the application using Docker, use the following command:
```
docker-compose up
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.