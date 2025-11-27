# Tasks List Application

A full-stack task management application built with Node.js, Express, and PostgreSQL.

## Features

- View all tasks
- Add new tasks
- Delete existing tasks
- Real-time updates

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL
- npm or yarn

## Environment Variables

Create a `.env` file in the server directory with the following variables:

```env
DB_USER=your_database_user
DB_HOST=your_database_host
DB_NAME=your_database_name
DB_PW=your_database_password
```

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Tasks-List
```

2. Install dependencies for both frontend and backend:
```bash
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

3. Set up the database:
```sql
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    task TEXT NOT NULL
);
```

## Running the Application

1. Start the backend server:
```bash
cd server
npm run dev
```
The server will run on http://localhost:3001

2. Start the frontend development server:
```bash
cd client
npm start
```
The frontend will run on http://localhost:3000


## Technologies Used

- Backend:
  - Node.js
  - Express.js
  - PostgreSQL
  - pg (node-postgres)

- Frontend:
  - React
  - Modern web technologies


<img width="1440" alt="Screenshot 2025-03-07 at 3 11 23 PM" src="https://github.com/user-attachments/assets/7ffecb23-7b0b-4663-b607-ec431bc77145" />
