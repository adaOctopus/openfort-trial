# Project Structure

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

# How to Run

## Backend

```bash
cd backend
npm install
npm run dev
```

## Frontend

```bash
cd frontend
npm install
npm run dev
```

Backend runs on `http://localhost:3001`  
Frontend runs on `http://localhost:3000`

