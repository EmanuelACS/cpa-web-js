/**
 *          Lab 2 - JavaScript Representation of Weeky Class Schedule
 *          =========================================================
 */


/**
 * The following section declares the raw data that will be used to make up the schedule.
 * A JavaScript object is declared and initialized for each timeslot (i.e. lecure or lab).
 * 
 * Note: on a larger scale, this section could define all of the labs and lectures for an
 * entire program or even the entire college. 
 * 
 * TODO: Create a set of JavaScript objects that represent the lecures and labs for your
 * weekly class schedule. 
 */

    var comp340Lec = 
    {
        code:"COMP340",
        type:"lecture",
        name:"Systems Analysis & Design",
        day:"Tuesday",
        start:"9:30",
        length:2,
    
    };
    
    var comp340LabB = {
        code:"COMP340",
        type:"lab",
        section:"B",
        name:"Systems Analysis & Design",
        day:"Monday",
        start:"10:30",
        length:2,
    };
    
    var comp340LabA = {
        code:"COMP340",
        type:"lab",
        section:"A",
        name:"Systems Analysis & Design",
        day:"Tuesday",
        start:"2:30",
        length:2,
    };
    
    var comp31Lab =
    {
        code: "COMP31",
        type: "lab",
        name: "Java Web Application Development",
        day: "Monday",
        start: "12:30",
        length: 2,
    };
    
    var comp31Lec =
    {
        code: "COMP31",
        type: "lec",
        name: "Java Web Application Development",
        day: "Tuesday",
        start: "12:30",
        length: 1,
    };
    
    var comp206Lec =
    {
        code: "COMP206",
        type: "lec",
        name: "Web Programming with JavaScript",
        day: "Thursday",
        start: "9:30",
        length: 2,
    }
    
    var comp206Lab =
    {
        code: "COMP206",
        type: "lab",
        name: "Web Programming with JavaScript",
        day: "Friday",
        start: "12:30",
        length: 2,
    }

/**
 * The following section builds a JavaScript object that contains the lecture and lab 
 * objects from the previous section nested inside.  This section demonstrates that 
 * an object can be built step by step, starting with an empty object and adding one 
 * class object at a time.  
 * 
 * TODO create a 'classList' object containing nested lecture and lab objects for your
 * schedule.
 */

    const fallClassList = {};

    fallClassList.comp340Lec = comp340Lec;
    fallClassList.comp340LabA = comp340LabA;
    fallClassList.comp340LabB = comp340LabB;
    fallClassList.comp31Lab = comp31Lab;
    fallClassList.comp31Lec = comp31Lec;
    fallClassList.comp206Lab = comp206Lab;
    fallClassList.comp206Lec = comp206Lec;
    
/**
 * The following section demonstrates how to create a JavaScript array containing
 * the JavaScript lecture and lab objects.
 * 
 * TODO: create a 'weeklySchedule' array that contains the lecture and lab objects for
 * your weekly schedule
 */

 fallWeeklySchedule = [    
    fallClassList["comp340Lec"],
    fallClassList["comp340LabA"],
    fallClassList["comp340LabB"],
    fallClassList["comp31Lab"],
    fallClassList["comp31Lec"],
    fallClassList["comp340Lec"],
    fallClassList["comp206Lec"],
    fallClassList["comp206Lab"]
]

/**
 * The following section defines a 'dailySchedule' object that can be indexed using
 * either dot notation or by string indices.   This object can be used to return the
 * class schedule for any given weekday.
 * 
 * TODO: create a 'dailySchedule' that contains the lectures and labs for your weekly schedule
 */


const fallDailySchedule = {
    monday : [comp340LabB, comp31Lab],
    tuesday : [comp340Lec,comp31Lec, comp340LabA],
    wednesday : [],
    thursday : [comp206Lec],
    friday : [comp206Lab]
}

/**
 *  The following section creates a 'masterSchedule' consisting of each of the schedule objects defined above.
 * 
 */

const masterSchedule = {

    dailySchedule:fallDailySchedule,
    weeklySchedule:fallWeeklySchedule,
    classList:fallClassList,

}

module.exports = masterSchedule;
