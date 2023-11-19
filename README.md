# NestJS Cinema Booking System

This is a simple NestJS application for managing a ticket booking system. The system includes features to purchase tickets, return tickets, view available seats, and check statistics.

## Table of Contents

- [Project Structure](#project-structure)
- [How to Run](#how-to-run)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Project Structure

The project is organized into the following components:

- `Room` and `Seat` Entities: Represent the room layout and individual seats.
- `Ticket` Entity: Represents a purchased ticket.
- `SeatsController`: Provides API endpoints for seat operations.
- `SeatsService`: Implements business logic for seat operations.
- `SeatsModule`: Organizes controllers and services into a module.

## How to Run

1. Install dependencies:

```
npm install
```

2. Start the application:

```
npm run start
```

3. The application will be running on http://localhost:3000.

## API Endpoints

- `GET /seats`: Get information about available seats.
- `POST /purchase`: Purchase a ticket for a specific seat.
- `POST /return`: Return a purchased ticket using its token.
- `GET /stats`: Get statistics about income, available seats, and purchased tickets.

## License

Nest is [MIT licensed](LICENSE).
