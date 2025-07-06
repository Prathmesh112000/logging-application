import express from "express";
import cors from "cors";
import logsRoutes from "./routes/logsRoutes.js";
import { Server } from "socket.io";
import http from "http";

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());

app.use("/logs", logsRoutes);

// error fallback
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

// SOCKET.IO
const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

// make io available globally
app.set("io", io);

io.on("connection", (socket) => {
  console.log("New client connected", socket.id);
  socket.on("disconnect", () => {
    console.log("Client disconnected", socket.id);
  });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
