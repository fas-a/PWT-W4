const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(express.static('public'));

let clients = [];

// Long Polling
app.get('/long-polling', (req, res) => {
  setTimeout(() => {
    const data = { message: `Data updated at ${new Date().toLocaleTimeString()}` };
    res.json(data);
  }, 5000); // Simulate 5-second delay
});

// Server-Sent Events (SSE)
app.get('/sse', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  const intervalId = setInterval(() => {
    res.write(`data: Data updated at ${new Date().toLocaleTimeString()}\n\n`);
  }, 5000);

  req.on('close', () => {
    clearInterval(intervalId);
  });
});

// WebSockets
wss.on('connection', (ws) => {
  clients.push(ws);
  ws.on('close', () => {
    clients = clients.filter(client => client !== ws);
  });
  ws.onerror = (error) => console.error('WebSocket Error:', error);
});

setInterval(() => {
  const data = JSON.stringify({ message: `Data updated at ${new Date().toLocaleTimeString()}` });
  clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
}, 5000);

server.listen(3000, () => console.log('Server is running on http://localhost:3000'));
