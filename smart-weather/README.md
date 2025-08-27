# Smart Weather App 🌤️

A full-stack weather reporting application built with **Java Spring Boot**, **React**, and **PostgreSQL**, deployed with **Docker** and hosted on **Back4App**. The application provides real-time weather reports, allows users to create custom reports, and visualizes historical weather data with charts.

## Key Features

- **Full-Stack Architecture:** Backend in Java Spring Boot, frontend in React.
- **Persistent Storage:** PostgreSQL (Neon) for storing weather reports.
- **RESTful API:** CRUD operations for weather reports with proper validation.
- **Containerized Deployment:** Dockerized backend and database for consistent environment setup.
- **Data Visualization:** Display historical weather data with interactive charts.
- **Cloud-Ready:** Hosted on Back4App for easy scalability.
- **Fallback Data:** If database is empty, current weather data is displayed dynamically.

## Tech Stack

| Layer        | Technology                               |
| ------------ | ---------------------------------------- |
| Backend      | Java, Spring Boot, Hibernate             |
| Frontend     | React, HTML, CSS, Axios                  |
| Database     | PostgreSQL (Neon)                        |
| Containerization | Docker, Docker Compose                 |
| Cloud        | Back4App                                 |
| Libraries    | Chart.js, Lombok                          |

## Features in Action

- Fetch all weather reports from the database
- Add new weather reports via frontend form
- Display current weather data when database is empty
- Interactive chart showing temperature trends

## Getting Started

### Prerequisites

- Java 17+
- Node.js 18+
- Docker & Docker Compose
- PostgreSQL (or use the provided Back4App deployment)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YourUsername/smart-weather-app.git
   cd smart-weather-app

2. **Backend Setup**
   ```bash
   cd backend
   ./mvnw clean install
   ./mvnw spring-boot:run

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   npm run dev

4. **Docker (Optional)**
   ```bash
   docker-compose up --build