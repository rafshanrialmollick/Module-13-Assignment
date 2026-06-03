# Module 13 Assignment - Express.js API

This is a simple Express.js server project for learning REST API concepts including GET and POST requests.

## Description

A beginner-friendly Express.js application demonstrating various HTTP methods and request/response handling. This project is part of the MERN Stack Batch 13 curriculum from Ostad.

## Features

- GET endpoints for retrieving data
- POST endpoints for creating resources
- Query parameter handling
- Request body parsing with JSON middleware
- HTTP status code management

## Technologies Used

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Nodemon** - Development tool for auto-reloading

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd "New folder"
```

2. Install dependencies:
```bash
npm install
```

## Usage

### Development Mode
Start the server with auto-reload using Nodemon:
```bash
npm run dev
```

### Production Mode
Start the server:
```bash
npm start
```

The server will run on `http://localhost:5000`

## API Endpoints

### GET Requests

- **`GET /`** - Health check
  - Response: "Server Running Successfully"

- **`GET /welcome`** - Welcome message
  - Response: "Welcome to Express Learning"

- **`GET /student`** - Get student information
  - Response:
    ```json
    {
      "name": "John",
      "course": "MERN Stack",
      "batch": 13
    }
    ```

- **`GET /search`** - Search with query parameters
  - Query Parameters: `name`, `course`
  - Example: `/search?name=John&course=MERN`
  - Response: Returns the query parameters sent

### POST Requests

- **`POST /register`** - Register a new user
  - Body: JSON object with user details
  - Response: Success message with user details (Status: 201)

- **`POST /product`** - Get product by ID
  - Query Parameters: `id`
  - Response: Product ID

- **`POST /login`** - Login with credentials
  - Headers: `username`, `password`
  - Response: Returns username and password from headers

## Project Structure

```
├── server.js          # Main server file
├── package.json       # Project dependencies and scripts
├── .gitignore         # Git ignore rules
└── README.md          # This file
```

## Dependencies

- **express** (^5.2.1) - Web framework for building APIs
- **nodemon** (^3.1.14) - Dev dependency for development server

## License

ISC

## Author

Ostad Student

---

**Note:** This is a learning project for understanding Express.js fundamentals.
