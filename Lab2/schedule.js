var comp340Lec =
{
    code: "COMP340",
    type: "lecture",
    name: "Systems Analysis & Design",
    day: "Monday",
    start: "9:30",
    length: 2,

};

var comp340LabB = {
    code: "COMP340",
    type: "lab",
    section: "B",
    name: "Systems Analysis & Design",
    day: "Tuesday",
    start: "10:30",
    length: 2,
};

var comp340LabA = {
    code: "COMP340",
    type: "lab",
    section: "A",
    name: "Systems Analysis & Design",
    day: "Tuesday",
    start: "2:30",
    length: 2,
};

const classList = {};

classList.comp340Lec = comp340Lec;
classList.comp340LabA = comp340LabA;
classList.comp340LabB = comp340LabB;

const weeklySchedule = [
    comp340Lec,
    comp340LabA,
    comp340LabB,
];

const dailySchedule = {
    monday: [comp340Lec],
    tuesday: [comp340LabA, comp340LabB],
    wednesday: [],
    thursday: [],
    friday: []
}

console.log(dailySchedule["monday"])

const masterSchedule = {
    dailySchedule: dailySchedule,
    weeklySchedule: weeklySchedule,
    classList: classList,
}

module.exports = masterSchedule;

var classes = {};

classes.comp340Lec = comp340Lec;
classes.comp340LabA = comp340LabA;
classes.comp340LabB = comp340LabB;

var classes = {
    comp340Lec: comp340Lec,
    comp340LabA: comp340LabA,
    comp340LabB: comp340LabB,
}