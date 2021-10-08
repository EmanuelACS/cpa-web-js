const express=require('express'); // express config
const ejs=require('ejs'); // ejs config

const {dailyWeather, weeklyWeather} = require('./weather');

const app=express();
app.set('view engine', 'ejs');
app.listen(3000);

// localhost:3000/
app.get("/", (req, res)=>{
    //res.send();
    res.sendFile(__dirname + "/public/index.html");
})
// Sends all raw weather data
// localhost:3000/weather
app.get("/weather", (req, res) => {
    let weather = weeklyWeather;
    let data = {theWeather:weather};

    // Temporary placeholder for testing
    res.send(data);
})

// Sends all raw weather data for a location
// localhost:3000/weather/location
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
// localhost:3000/weather/location/day
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