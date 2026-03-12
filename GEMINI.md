# GEMINI.md

## Project Overview
This project, **"Computer and Electronic Shop Website,"** aims to solve the inconvenience of physical shopping for computer parts by providing a convenient, user-friendly e-commerce platform. It features product recommendations, detailed product information, and a streamlined shopping experience.

The repository currently includes:
- **Project Planning:** Problem statements, solutions, and a comprehensive product backlog.
- **System Design:** Visual models including a Business Model Canvas, Use Case diagrams, and ER diagrams (in `.excalidraw` format).
- **Initial Implementation:** Basic JavaScript logic for a shopping cart and product management.
- **Database Schema:** A set of PostgreSQL scripts for a retail/management system (currently structured around a restaurant/burger shop domain).

## Building and Running

### JavaScript Logic
The project includes a basic JavaScript implementation for product handling.
- **Run the script:**
  ```bash
  node 06_bring-it-to-javascript.js
  ```

### Database Setup
The database scripts are located in the `postgres_sql/` directory. They are intended for a PostgreSQL environment.
- **Create Tables:** Run `postgres_sql/create_tables.sql` first.
- **Seed Data:** Run the numbered scripts (`01_suppliers.sql` through `07_order_items.sql`) in sequence to populate the database with mock data.
- **Querying:** Use `postgres_sql/query.sql` for sample analytical queries.

### Visualizing Design
Open the `.excalidraw` files using the [Excalidraw](https://excalidraw.com/) web tool or an appropriate IDE extension to view the system architecture and business model.

## Development Conventions
- **Naming Convention:** Files are prefixed with sequential numbers (e.g., `01_`, `02_`) to indicate a recommended order of review or execution.
- **Language:** Documentation is primarily in Thai, while code and database schemas use English.
- **Schema Management:** Database scripts use `TRUNCATE ... RESTART IDENTITY CASCADE` to ensure clean seed data without duplicates.
- **Testing:** Currently, validation is manual via console output in the JavaScript file and query results in SQL.
