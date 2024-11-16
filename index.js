// index.js

import express from 'express';  // Use import to load express
import Table from './classes/Table.js';
import Player from './classes/Player.js';
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello, Poker App Server!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  let t = new Table(9);
  t.addPlayer(new Player(),1);
  t.addPlayer(new Player(),2);
  t.addPlayer(new Player(),3);
  t.startRound();
});
