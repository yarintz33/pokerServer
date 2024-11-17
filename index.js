// index.js

import express from 'express';
import Table from './classes/Table.js';
import Player from './classes/Player.js';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import { table } from 'console';

/** @type {Map<String,Table>} */
const tables = new Map();

function addPlayer(tableId, playerID, budget){
  let table = tables[tableId];
  //table.ad
  
  }




const app = express();
const port = 5000;

// Create an HTTP server
const server = http.createServer(app);

// Attach Socket.io to the HTTP server
const io = new Server(server, {
  cors: {
    origin: '*', // http://localhost:3000 to Allow WebSocket connections from the frontend
    methods: ['GET', 'POST']
  }
});


app.use(cors({
  origin: '*', // http://localhost:3000 to Allow only the frontend origin
  methods: ['GET', 'POST'],        // Allowed HTTP methods
  credentials: true                // Include cookies, if needed
}));

// Define routes
app.get('/', (req, res) => {
    res.send('Hello, Poker App Server!');
});

// Set up WebSocket connection
io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);
    tables.push
    

    // Handle events from the client
    socket.on('joinTable', (tableId, playerID, budget) => {
        console.log(`Player ${playerID} joined table ${tableId}`);
        addPlayer(tableId,playerID,budget);
        // Logic to handle joining the table
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('A user disconnected:', socket.id);
    });
});

// Start the server
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  let tables = [];
  let t = new Table(9);
  tables[0] = [t, 0];
  //t.addPlayer99(new Player(),1);
  //t.addPlayer(new Player(),2);
  //t.addPlayer(new Player(),3);
  t.startRound();
});


