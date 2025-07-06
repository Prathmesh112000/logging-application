# Log Ingestion and Querying System

A full-stack Node.js and React application to ingest, store, query, and analyze logs, with real-time updates and Docker support.

## Features

- Log ingestion via REST API
- Filter logs by multiple fields
- Real-time log streaming with WebSocket (Socket.IO)
- JSON-based persistence
- Modern React frontend with Material-UI
- Analytics pie chart of logs by level using Recharts
- Containerized with Docker Compose
- Responsive and clean design
- Details modal to view full log details

---

## Installation (Local Development)

**Backend:**

```bash
cd backend
npm install
npm run dev
```

**Frontend:**

```bash
cd frontend
npm install
npm run dev
```



**Docker Deployment:**

To run both frontend and backend with Docker Compose:

```bash
docker-compose up --build
```

Open your browser:

Frontend: http://localhost:5173 / http://localhost:3000

Backend: http://localhost:4000

**Real-Time Streaming:**

Logs ingested through the POST API will instantly appear on the frontend in real time via Socket.IO, provided they match the active filters.

# API Documentation


**Endpoint:** `POST /logs`

### Sample Payload

```json
{
  "level": "warn",
  "message": "Memory usage exceeded threshold",
  "resourceId": "server-123",
  "timestamp": "2025-07-07T10:00:00Z",
  "traceId": "trace-999",
  "spanId": "span-888",
  "commit": "def456",
  "metadata": {
    "region": "us-east-1"
  }
}







