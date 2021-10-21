const express = require('express');
const pets = require("./pets-router");
const cities = require("./cities-router");
const app = express();
app.listen(3000);

app.use("/pets", pets);
// Pets repalced by router-pets
//app.get("/pets", (req, res) => {
//    res.send("<h1>Pets area</h1>");
//})
//
//app.get("/pets/dogs", (req, res) => {
//    res.send("<h1>Dogs area</h1>");
//})
//
//app.get("/pets/cats", (req, res) => {
//    res.send("<h1>Cats area</h1>");
//})

app.use("/cities", cities);
// Cities replaced by cities-router
//app.get("/cities", (req, res) => {
//    res.send("<h1>Cities area</h1>");
//})
//
//app.get("/cities/kingston", (req, res) => {
//    res.send("<h1>Kingston area</h1>");
//})
//
//app.get("/cities/ottawa", (req, res) => {
//    res.send("<h1>Ottawa area</h1>");
//})

