# Fullstack Application

A minimal fullstack application with Next.js 15 frontend and Express backend, both using TypeScript.

## Project Structure

```
.
├── backend/          # Express server with TypeScript
│   ├── src/
│   │   ├── controllers/  # MVC Controllers
│   │   ├── routes/       # API Routes
│   │   └── server.ts     # Server entry point
│   └── package.json
├── frontend/         # Next.js 15 App with TypeScript
│   ├── app/          # Next.js App Router
│   ├── components/   # React components
│   └── package.json
└── README.md
```

## Backend

The backend follows the MVC (Model-View-Controller) pattern:
- **Controllers**: Handle business logic (`src/controllers/`)
- **Routes**: Define API endpoints (`src/routes/`)
- **Server**: Express server setup (`src/server.ts`)

### Setup

```bash
cd backend
npm install
```

### Environment Variables

Create a `.env` file in the `backend` directory:

```
PORT=3001
NODE_ENV=development
```

### Running the Backend

```bash
# Development mode (with hot reload)
npm run dev

# Build
npm run build

# Production
npm start
```

The server will run on `http://localhost:3001` by default.

### API Endpoints

- `GET /api/hello` - Returns a hello message
- `GET /health` - Health check endpoint

## Frontend

The frontend is built with Next.js 15 using the App Router and TypeScript.

### Features

- Modern UI with dark/light mode toggle
- Mobile responsive design
- TypeScript for type safety
- App Router architecture

### Setup

```bash
cd frontend
npm install
```

### Environment Variables

Create a `.env.local` file in the `frontend` directory if needed:

```
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### Running the Frontend

```bash
# Development mode
npm run dev

# Build
npm run build

# Production
npm start
```

The application will run on `http://localhost:3000` by default.

## Getting Started

1. **Start the backend:**
   ```bash
   cd backend
   npm install
   npm run dev
   ```

2. **Start the frontend (in a new terminal):**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000` to see the application.

## Technologies Used

### Backend
- Node.js
- Express
- TypeScript
- CORS
- dotenv

### Frontend
- Next.js 15
- React 19
- TypeScript
- CSS Variables (for theming)

## License

ISC
