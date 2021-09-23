console.log("Lab 1");

const { res } = require("express");
// Loading the express module 
const express = require("express");
const { req } = require("http");

const masterSchedule = require("./schedule.js")
const classList = masterSchedule.classList;
const weeklySchedule = masterSchedule.weeklySchedule;
const dailySchedule = masterSchedule.dailySchedule;

// Create application object
const app = express()
// Listen on port 3000
app.listen(3000);

// Home page
app.get("/", (req,res)=>{
    res.send("<h1>Course Schedule</h1>")
} )

// http://localhost:3000/schedule/week
app.get("/schedule/week",(req,res)=>{
    res.send(weeklySchedule)
})

// http://localhost:3000/schedule/daily/monday
app.get("/schedule/daily/:day",(req,res)=>{
    var day = req.params.day;
    res.send(dailySchedule[daily]);
})

// http://localhost:3000/schedule/course/:classname
app.get("/schedule/course/:classname", (req,res)=>{
    const classname = req.params.classname;
    res.send(classList[classname])
})
