console.log("Server 102");

const { request } = require("express");
// Loading the express module 
const express = require("express");

// Create application object
const app = express();

// Listen or port 3000
app.listen(3000);

// If I get request (GET ... /)
// request/response
app.get("/", (req, res) => {
    res.send("<h1>Root section of express server</h1>");
})

// localhost:3000/test?name=Flow&age=24
// Parameters are to follow the ? mark.
app.get("/test", (req, res) => {
    var name = req.query.name;
    var age = req.query.age;
    res.send("<h1>Test section of the express server</h1><h2>Hello " 
        + name + "! You are now " + age + " years old.</h2>");
})

// Object creation
var person = {
    name: "Flow",
    age: 20
}

// Sample array
var data = [2, 4, 8, 16, 32, 64];

// Weather data, array of objects
var weather = [
    {
        day: "Monday",
        conditions: "Rainy"
    },
    {
        day: "Tuesday",
        conditions: "Sunny"
    },
    {
        day: "Wednesday",
        conditions: "Light Rain"
    },
    {
        day: "Thursday",
        conditions: "Cloudy"
    },
    {
        day: "Friday",
        conditions: "Sunny"
    },
    {
        day: "Saturday",
        conditions: "Chance of Shower"
    },
    {
        day: "Sunday",
        conditions: "Risk of Thunderstorm"
    }
]

// localhost:3000/weather
// Add extra parms using :param? notation (instead of request.query.param)
app.get("/weather/:day?", (req, res) => {
    var currentDay = req.query.day;
    if (currentDay) {
        var currentWeather = "Unknown";
        console.log(currentDay);
        for (index = 0; index < weather.length; index++) {
            if (weather[index].day == currentDay) {
                currentWeather = weather[index].conditions;
            }
        }
        res.send("Day: " + currentDay + ", Weather: " + currentWeather);
    } else 
        res.send(weather);
})