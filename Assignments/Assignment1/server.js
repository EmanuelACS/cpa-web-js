const express=require('express'); // express config
const ejs=require('ejs'); // ejs config

const {dailyWeather, weeklyWeather} = require('./weather');
const { dailySchedule } = require('../../Notes/Week4/schedule.js');

const app=express();
app.set('view engine', 'ejs');
app.listen(3000);

app.get("/", (req,res) => {
    res.send("<h1>Weather Forecast</h1>");
})

// Sends all raw weather data
app.get("/weather", (req, res) => {
    let weather = weeklyWeather;
    let data = {theWeather:weather};
    // Temporary placeholder for testing
    res.send(data);
})

// Sends all raw weather data for a location
app.get("/weather/:location?", (req, res) => {
    let result = weeklyWeather;
    if (req.params.location) {
        let requestedLocation = req.params.location.toLowerCase()
        result = weeklyWeather[requestedLocation];
    }
    // Temporary placeholder for testing
    res.send(result);
})

// Sends all raw weather data for a location and day
app.get("/weather/:location?/:day?", (req, res) => {
    let result = dailyWeather;
    if (req.params.location) {
        let requestedLocation = req.params.location.toLowerCase()
        result = weeklyWeather[requestedLocation];
        if (req.params.day) {
            let requestedDay = req.params.day.toLowerCase()
            result = dailyWeather[requestedLocation][requestedDay];
        }
    }
    // Temporary placeholder for testing
    res.send(result);
})