const express=require('express')
// const masterSchedule=require('./schedule.js')
// const classList = masterSchedule.classList;
// const weeklySchedule = masterSchedule.weeklySchedule;
// const dailySchedule = masterSchedule.dailySchedule;

const {classList, weeklySchedule, dailySchedule} = require('./schedule');

const app=express()

app.listen(3000)


// localhost:3000/
app.get("/", (req, res)=>{
    // res.sendFile("/public/html"); X
    console.log(__dirname);
    res.sendFile(__dirname + "/public/home.html");
})

/**
 * localhost:3000/schedule
 * OR
 * localhost:3000/schedule/monday
 * localhost:300/schedule/Monday
 */
app.get("/schedule/:day?",(req,res)=>{
    let result = weeklySchedule;
    if (req.params.day)
    {
        let requestedDay = req.params.day.toLowerCase();
        result = dailySchedule[requestedDay]
    }
    res.send(result)
})

app.get("/course", (req, res)=>{
    let courseData = req.query.courseName;
    let classInfo = classList[courseData];
    res.send(classInfo);
})