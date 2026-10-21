# Student REST API

A simple REST API built with **Node.js**, **Express** and **MongoDB (Mongoose)** to manage student records. It supports full CRUD operations, searching, filtering, sorting and pagination.

## Features

- Create, read, update and delete students
- Search students by name or email
- Filter by city and category
- Sort by name (A-Z or Z-A)
- Pagination support
- Clean JSON responses with proper status codes

## Tech Stack

- Node.js
- Express 5
- MongoDB with Mongoose
- dotenv
- nodemon

## Project Structure

```
.
├── controllers/
│   └── studentController.js
├── models/
│   └── studentModel.js
├── routes/
│   └── studentRoutes.js
├── .env
├── .gitignore
├── package.json
└── server.js
```

## Getting Started

### Create a `.env` file

Add these values in the root folder:

```env
PORT=5000
MONGODB_UPI=your_mongodb_connection_string
```

> Note: The variable name is `MONGODB_UPI` because that is what `server.js` uses.

### Run the server

```bash
# Development (auto restart)
npm run dev

# Production
npm start
```
The server will start at `http://localhost:5000`.

## Student Model

| Field    | Type   | Required |
| -------- | ------ | -------- |
| name     | String | Yes      |
| email    | String | Yes      |
| phone    | String | Yes      |
| city     | String | Yes      |
| category | String | Yes      |

`createdAt` and `updatedAt` are added automatically.

## API Endpoints

Base URL: `/api/students`

| Method | Endpoint | Description          |
| ------ | -------- | -------------------- |
| GET    | `/`      | Get all students     |
| GET    | `/:id`   | Get a student by ID  |
| POST   | `/`      | Create a new student |
| PUT    | `/:id`   | Update a student     |
| DELETE | `/:id`   | Delete a student     |

### Example: Create a student

**POST** `/api/students`

```json
{
  "name": "Yug Patel",
  "email": "yug@example.com",
  "phone": "9876543210",
  "city": "Surat",
  "category": "General"
}
```

**Response**

```json
{
  "success": true,
  "message": "Student created successfully",
  "data": {
    "_id": "...",
    "name": "Yug Patel",
    "email": "yug@example.com",
    "phone": "9876543210",
    "city": "Surat",
    "category": "General"
  }
}
```

### Query Parameters (GET all students)

| Parameter  | Description                        | Example               |
| ---------- | ---------------------------------- | --------------------- |
| `search`   | Search in name or email            | `?search=yug`         |
| `city`     | Filter by city (case-insensitive)  | `?city=surat`         |
| `category` | Filter by category                 | `?category=general`   |
| `sort`     | Sort by name: `asc` or `desc`      | `?sort=asc`           |
| `page`     | Page number (default: 1)           | `?page=2`             |
| `limit`    | Items per page (default: 10)       | `?limit=5`            |

You can combine them:

```
GET /api/students?city=surat&sort=asc&page=1&limit=5
```

## Response Format

Success:

```json
{
  "success": true,
  "message": "...",
  "data": {}
}
```

Error:

```json
{
  "success": false,
  "message": "...",
  "error": "..."
}
```

## Author

**Yug Patel**

- GitHub: [https://github.com/1211-yug]
- LinkedIn: [linkedin.com/in/yug-patel-bb5b0a362]
