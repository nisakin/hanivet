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

**Backend**

- C# / ASP.NET Core
- Entity Framework Core
- MSSQL (running in Docker, managed with Azure Data Studio)

## Project Structure

```
hanivet/
├── frontend/          React + Vite application
└── backend/           ASP.NET Core Web API
```

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
# update the connection string in appsettings.json for your environment
dotnet ef database update
dotnet run
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Status

🚧 Actively under development.

## Developer

Nisa Akın — [GitHub](https://github.com/nisakin)
