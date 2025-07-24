# Interviewer App Backend (MERN)

## Setup

1. Install dependencies:
   ```sh
   npm install
   ```
2. Create a `.env` file (see provided example) and set your MongoDB URI.
3. Start the server:
   ```sh
   npm run dev
   ```

## API Endpoints

- `GET /api/questions?role=Frontend&topic=React` — fetch questions by role/topic
- `POST /api/questions` — add a new question (for admin/seed)
