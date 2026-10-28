# 🐾 Hanivet

A full-stack web platform connecting pet owners with trusted veterinary clinics. Users can discover nearby clinics, book appointments, read pet care blog content, and engage with other pet owners through a community forum.

## Features

- **User & Clinic Authentication** — Separate registration/login flows for pet owners and veterinary clinics
- **Clinic Discovery** — Browse clinics along with their ratings and reviews
- **Appointment System** — Create appointments, clinic approval, appointment tracking
- **Pet Profiles** — Users can add multiple pets to their profile
- **Blog** — Informative content about pet care
- **Community Forum** — A shared feed where pet owners can ask questions and share photos
- **Clinic Dashboard** — Clinics can view incoming appointment requests

## Tech Stack

**Frontend**

- React
- Vite
- React Router
- Axios

**Backend**

- C# / ASP.NET Core Web API
- Entity Framework Core (Code First)
- MSSQL (running in Docker, managed with Azure Data Studio)
- JWT Bearer authentication
- BCrypt for password hashing
- Swagger for API testing

## Project Structure

hanivet/
├── frontend/ React + Vite application
└── backend/ ASP.NET Core Web API

## Prerequisites

- Node.js v22.x or higher
- npm 10.x or higher
- .NET SDK 8.0 or higher
- Docker 27.x or higher (for running SQL Server locally)
- Git 2.x or higher

## Setup

### Backend

```bash
cd backend
cp appsettings.Example.json appsettings.json
# In appsettings.json, set your database connection string and a Jwt:Key
# (at least 32 characters, e.g. generated with: openssl rand -base64 32)
dotnet ef database update
dotnet run
```

The API runs at `http://localhost:5252` and Swagger is available at `/swagger`.

### Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend expects the API at `http://localhost:5252` (see `src/services/api.js`).

## Status

🚧 Actively under development.

**Completed:**

- Database schema with User, PetOwner, Pet, and Clinic entities (Code First, EF Core migrations)
- Entity relationships (1-1 and 1-many) configured via Fluent API
- Registration endpoint with BCrypt password hashing; creates the matching PetOwner or Clinic profile in the same transaction
- Login endpoint with JWT token generation and role check
- Centralized error messages
- Frontend login and registration pages connected to the API with Axios

**In progress:**

- Auth-aware navigation and pet owner profile page
- Clinic information page (address, phone) completed after first login

## Developer

Nisa Akın — [GitHub](https://github.com/nisakin)
