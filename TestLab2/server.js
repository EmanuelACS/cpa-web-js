console.log("Server 102");

// Loading the express module 
const express = require("express");

// Create application object
const app = express();

// Listen or port 3000
app.listen(3000);

// If I get request (GET ... /)
// request/response
app.get("/", (req, res) => {
    res.send("<h1>Title 102</h1>");
})
