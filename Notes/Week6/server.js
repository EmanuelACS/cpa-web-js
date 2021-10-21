const express = require('express');
const app = express();
app.listen(3000);

app.get("/pets", (req, res) => {
    res.send("<h1>Pets area</h1>");
})

app.get("/pets/dogs", (req, res) => {
    res.send("<h1>Dogs area</h1>");
})

app.get("/pets/cats", (req, res) => {
    res.send("<h1>Cats area</h1>");
})

app.get("/cities", (req, res) => {
    res.send("<h1>Cities area</h1>");
})

app.get("/cities/kingston", (req, res) => {
    res.send("<h1>Kingston area</h1>");
})

app.get("/cities/ottawa", (req, res) => {
    res.send("<h1>Ottawa area</h1>");
})

