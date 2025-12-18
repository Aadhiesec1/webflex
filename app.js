// app.js
const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World' });
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

module.exports = app; // 
