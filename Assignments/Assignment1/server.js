const express=require('express'); // express config
const ejs=require('ejs'); // ejs config

const {dailyWeather, weeklyWeather} = require('./weather');
const { request } = require('express');

const app=express();
app.set('view engine', 'ejs');
app.listen(3000);

// localhost:3000
app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/public/index.html");
})

// Sends all raw weather data
// localhost:3000/weather
app.get("/weather", (req, res) => {
    // Weekly weather data array should be sent
    let data = {theWeather:weeklyWeather};
    res.send(data);
})

// Sends all raw weather data for a location
// localhost:3000/weather/location
app.get("/weather/:location?", (req, res) => {
    // Default data to be sent
    let result = weeklyWeather;
    if (req.params.location) {
        // If a location is entered, send data for that location
        let requestedLocation = req.params.location.toLowerCase()
        result = weeklyWeather[requestedLocation];
    }
    // Send location and weather data for given location
    let data = {weatherVariable:result, weatherLocation:req.params.location};
    res.render('ejsCityFile', data);
})

// Sends all raw weather data for a location and day
// localhost:3000/weather/location/day
app.get("/weather/:location?/:day?", (req, res) => {
    // Default data to be sent
    let result = dailyWeather;
    // Location
    let requestedLocation = req.params.location.toLowerCase();
    if (req.params.day) {
        // If user enters day parameter, send data for that specific day
        let requestedDay = req.params.day.toLowerCase()
        result = dailyWeather[requestedLocation][requestedDay];
    }
    let data = {weatherVariable:result, weatherLocation:req.params.location, weatherDay:req.params.day};
    res.render('ejsDayFile', data);
})

// Find warmest location for a given day query
// localhost:3000/warmest
app.get("/warmest", (req, res) => {
    // User input of chosen day
    let chosenDay = req.query.days;
    if (chosenDay== null) {
        // If input is null bring the user input page
        // Should always happen when user first loads the query page
        res.sendFile(__dirname + "/public/query1.html");
    } else {
        // Otherwise, if user enters a day
        // Get chosen day
        let day = chosenDay.toLowerCase();
        // Current top temperature, default of -100 so there are no conflicts
        let topTemp = -100;
        // Variable to hold the warmest location
        let warmLocation = "";
        // Location array of current locations
        let locArray = ["kingston", "toronto", "hamilton"];
        for (locationIdx = 0; locationIdx < locArray.length; locationIdx++) {
            // Loop through the location array, get weather data for given day
            let locWeather = dailyWeather[locArray[locationIdx]][day][0].temperature;
            if (locWeather > topTemp) {
                // If current location has higher temp, assign new warmest day and temperature
                warmLocation = locArray[locationIdx];
                topTemp = locWeather;
            } 
        }
        // Send final data to the server
        res.send('<h3>The warmest location on ' + chosenDay + " is " + warmLocation + '</h3>')  
    }
}) 

// Find warmest day for a given location query
// localhost:3000/warmest2
app.get("/warmest2", (req, res) => {
    // User input of chosen location
    let location = req.query.location;
    if (location == null) {
        // If input is null bring the user input page
        // Should always happen when user first loads the query page
        res.sendFile(__dirname + "/public/query2.html");
    } else {
        // Otherwise, if user enters a location
        // Get chosen location
        let chosenLoc = location.toLowerCase();
        // Assign current top temperature to a default of -100
        let topTemp = -100;
        // Initialize top temp day
        let topDay = "";
        // Make a weekdays array
        let weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        for (dayIdx = 0; dayIdx < weekDays.length; dayIdx++) {
            // Get data for current weather temperature
            let dataTemp = weeklyWeather[chosenLoc][dayIdx].temperature;
            if (dataTemp > topTemp) {
                // Update top temperature 
                topTemp = dataTemp;
                // Update top day
                topDay = weekDays[dayIdx];              
            }
        }
        // Send data of top temperature day in location 
        res.send('<h3>The warmest day in  ' + chosenLoc + ' is on ' + topDay + '</h3>' );  
    }
}) 

// Find average temperature for chosen location query
// localhost:3000/warmest3
app.get("/warmest3", (req, res) => {
    // get chosen location
    let location = req.query.location;
    if (location == null) {
        // If input is null bring the user input page
        // Should always happen when user first loads the query page
        res.sendFile(__dirname + "/public/query3.html");
    } else {
        // Declare current temp total
        let tempTotal = 0;
        for (idx = 0; idx < 7; idx++) {
            // Update total temperature, adding each day's temp
            tempTotal += weeklyWeather[location][idx].temperature;
        }
        // Get average temperature
        let avrgTemp = Math.round(tempTotal/7);
        // Send correct data
        res.send('Average temperature this week in ' + location + ' is ' + avrgTemp);  
    }
}) 

// Find all sunny days for given location query
// localhost:3000/warmest4
app.get("/warmest4", (req, res) => {
    // get chosen location
    let location = req.query.location;
    if (location == null) {
        // If input is null bring the user input page
        // Should always happen when user first loads the query page
        res.sendFile(__dirname + "/public/query4.html");
    } else {
        // Declare current day, sunny days and index
        let dataDay = "";
        // Arr for sunny days
        let sunnyDays = [];
        // Sunny index to store days in sunnyDays;
        let sunnyIdx = 0;
        // Array storing all days of the week
        let weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        for (idx = 0; idx < weekDays.length; idx++) {
            // Update data day to current weekday
            dataDay = weekDays[idx];
            if (weeklyWeather[location][idx].description == "Sunny") {
                // If sunny day
                // Add current week day to array and update index
                sunnyDays[sunnyIdx] = dataDay;
                sunnyIdx++;
            }
        }
        // Send data for sunny days in chosen location
        res.send('Sunny days in ' + location + ' are: ' + sunnyDays);  
    }
}) 