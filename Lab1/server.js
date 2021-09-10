console.log("Server 101");

// Loading the express module 
const express=require('express');

// Create application object
const app = express();

// Listen or port 3000
app.listen(3000);

// If I get request (GET ... /)
app.get("/", (req, res) => {
    res.send("<h1>Title 101</h1>");
})


// localhost:3000
// htto://(use your ip address):3000
// $ ip config   // to find IPv4 address

// Or use: 
/*
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/