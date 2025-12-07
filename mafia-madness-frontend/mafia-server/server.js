// Import required modules
import express from 'express';       // Web framework for handling HTTP requests
import { createServer } from 'http';              // Node's built-in HTTP server
import { Server } from 'socket.io';   // Socket.IO server for real-time communication
import cors from 'cors';              // Middleware to allow requests from different origins

// Initialize Express app
const app = express();
app.use(cors()); // Enable CORS so frontend can communicate with this server

// Create an HTTP server from the Express app
const server = createServer(app);

// Attach Socket.IO to the HTTP server and enable CORS
const io = new Server(server, {
  cors: {
    origin: '*',              // Allow all origins for now (use specific origin in production)
    methods: ['GET', 'POST']  // Accept common HTTP methods
  }
});

// Port to listen on
const PORT = 3001;

// Store rooms and players in memory
// Example format: { '2QX0Z': ['Kvng', 'NightWolf'] }
const rooms = {};

// Listen for new client connections
io.on('connection', (socket) => {
  console.log(`🟢 New connection: ${socket.id}`); // Each browser/tab gets a unique socket ID

  socket.on("createRoom", ({ roomCode, playerName }) => {
  if (!rooms[roomCode]) {
    rooms[roomCode] = [];
    console.log(`Room created: ${roomCode} by ${playerName}`);
  }
});



  socket.on("joinRoom", ({ roomCode, playerName }) => {
  if (!rooms[roomCode]) {
    socket.emit("joinError", "Room not found");
    return;
  }

  if (!rooms[roomCode].includes(playerName)) {
    rooms[roomCode].push(playerName);
    socket.join(roomCode);
  }
   console.log(`👤 ${playerName} joined room ${roomCode}`);
  // Send updated list of players to everyone in the room
  io.to(roomCode).emit("updatePlayers", rooms[roomCode]);
});


  // When a client disconnects (closes tab or browser)
  socket.on('disconnect', () => {
    for (const roomCode in rooms) {
      // Remove any player from rooms based on socket ID
      rooms[roomCode] = rooms[roomCode].filter((p) => p !== socket.id);
      io.to(roomCode).emit('updatePlayers', rooms[roomCode]);
    }
    console.log(`🔴 Disconnected: ${socket.id}`);
  });
});

// Start the server
server.listen(PORT, () => {
  console.log(`🚀 Mafia server running at http://localhost:${PORT}`);
});