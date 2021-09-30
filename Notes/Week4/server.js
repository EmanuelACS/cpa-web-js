const express=require('express') // express config
const ejs=require('ejs') // ejs config
const masterSchedule=require('./schedule.js')

const {classList, weeklySchedule, dailySchedule} = require('./schedule');


const app=express()
app.set('view engine', 'ejs')

app.listen(3000)

// localhost:3000/hello
app.get("/hello", (req, res)=>{
    let data = {firstName:"Tally", lastName: "Cruff"};
    res.render("hello", data);
})


// localhost:3000/schedule
app.get("/schedule/:day?",(req,res)=>{
    let schedule = weeklySchedule;
    // if (req.params.day)
    // {
    //     let requestedDay = req.params.day.toLowerCase();
    //     schedule = dailySchedule[requestedDay]
    // }
    let data = {theSchedule:schedule}
    res.render('weekly', data);
})

