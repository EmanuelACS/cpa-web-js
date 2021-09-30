const express=require('express')
const masterSchedule=require('./schedule.js')
const classList = masterSchedule.classList;
const weeklySchedule = masterSchedule.weeklySchedule;
const dailySchedule = masterSchedule.dailySchedule;

const app=express()

app.listen(3000)


app.get("/schedule/:day?",(req,res)=>{
    let result = weeklySchedule;
    if (req.params.day)
    {
        let requestedDay = req.params.day.toLowerCase();
        result = dailySchedule[requestedDay]
    }
    res.send(result)
})

