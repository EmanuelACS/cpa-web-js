/**
 *          Assignment 1 - JavaScript Representation of Weather Data
 *          ========================================================
 */


/**
 * The following section declares the raw data that will be used to make up the weather.
 * A JavaScript object is declared and initialized for each day.
 * Currently all raw data is identical, will change to unique values at a later date.
 */

// Kingston Data
var kingston3 = {
    description: "Sunny",
    imgFile: "",  
    temperature: 23,
    feelsLike: 21,
    night: 18,
    pop: 10,
    wind: "15W",
    windGust: 17,
    sunHrs: 6,
    rain: "0mm",
}, kingston4 = {
    description: "Clear",
    imgFile: "",  
    temperature: 18,
    feelsLike: 15,
    night: 10,
    pop: 0,
    wind: "20NE",
    windGust: 25,
    sunHrs: 3,
    rain: "0mm",
}, kingston5 = {
    description: "Partially Cloudy",
    imgFile: "",  
    temperature: 12,
    feelsLike: 13,
    night: 8,
    pop: 90,
    wind: "10E",
    windGust: 12,
    sunHrs: 1,
    rain: "~2mm",
}, kingston6 = {
    description: "Sunny",
    imgFile: "",  
    temperature: 26,
    feelsLike: 32,
    night: 24,
    pop: 20,
    wind: "5SW",
    windGust: 8,
    sunHrs: 6,
    rain: "~1mm",
}, kingston7 = {
    description: "Overcast",
    imgFile: "",  
    temperature: 18,
    feelsLike: 14,
    night: 8,
    pop: 60,
    wind: "40W",
    windGust: 57,
    sunHrs: 0,
    rain: "~3mm",
}, kingston8 = {
    description: "Rainy",
    imgFile: "",  
    temperature: 22,
    feelsLike: 24,
    night: 20,
    pop: 99,
    wind: "15W",
    windGust: 21,
    sunHrs: 0,
    rain: "~15mm",
}, kingston9 = {
    description: "Sunny",
    imgFile: "",  
    temperature: 27,
    feelsLike: 31,
    night: 20,
    pop: 5,
    wind: "2E",
    windGust: 5,
    sunHrs: 9,
    rain: "~0mm",
}

// Toronto Data
var toronto3 = {
    description: "A mix of sun and clouds",
    imgFile: "",
    temperature: 20,
    feelsLike: 18,
    night: 13,
    pop: 45,
    wind: "23SE",
    windGust: 21,
    sunHrs: 2,
    rain: "~4mm",
}, toronto4 = {
    description: "Drizzle",
    imgFile: "",
    temperature: 23,
    feelsLike: 27,
    night: 20,
    pop: 70,
    wind: "6N",
    windGust: 8,
    sunHrs: 1,
    rain: "~1mm",
}, toronto5 = {
    description: "Rainy",
    imgFile: "",
    temperature: 24,
    feelsLike: 27,
    night: 20,
    pop: 80,
    wind: "22NW",
    windGust: 26,
    sunHrs: 0,
    rain: "~20mm",
}, toronto6 = {
    description: "Stormy",
    imgFile: "",
    temperature: 18,
    feelsLike: 14,
    night: 10,
    pop: 95,
    wind: "30E",
    windGust: 23,
    sunHrs: 0,
    rain: "~95mm",
}, toronto7 = {
    description: "Sunny",
    imgFile: "",
    temperature: 28,
    feelsLike: 24,
    night: 19,
    pop: 10,
    wind: "5S",
    windGust: 7,
    sunHrs: 10,
    rain: "0mm",
}, toronto8 = {
    description: "Thunderstorm",
    imgFile: "",
    temperature: 15,
    feelsLike: 10,
    night: 7,
    pop: 90,
    wind: "30SE",
    windGust: 34,
    sunHrs: 0,
    rain: "~55mm",
}, toronto9 = {
    description: "Foggy",
    imgFile: "",
    temperature: 10,
    feelsLike: 8,
    night: 4,
    pop: 30,
    wind: "14NW",
    windGust: 13,
    sunHrs: 1,
    rain: "~0mm",
}

// Hamilton Data
var hamilton3 = {
    description: "Sunny",
    imgFile: "",
    temperature: 29,
    feelsLike: 28,
    night: 24,
    pop: 20,
    wind: "30NW",
    windGust: 36,
    sunHrs: 6,
    rain: "~0mm",
}, hamilton4 = {
    description: "Light rain",
    imgFile: "",
    temperature: 25,
    feelsLike: 21,
    night: 22,
    pop: 80,
    wind: "20N",
    windGust: 23,
    sunHrs: 2,
    rain: "~2mm",
}, hamilton5 = {
    description: "Drizzle",
    imgFile: "",
    temperature: 22,
    feelsLike: 20,
    night: 15,
    pop: 8,
    wind: "29W",
    windGust: 36,
    sunHrs: 2,
    rain: "~1mm",
}, hamilton6 = {
    description: "Sunny",
    imgFile: "",
    temperature: 32,
    feelsLike: 30,
    night: 31,
    pop: 10,
    wind: "3E",
    windGust: 2,
    sunHrs: 7,
    rain: "~0mm",
}, hamilton7 = {
    description: "Cloudy",
    imgFile: "",
    temperature: 20,
    feelsLike: 16,
    night: 10,
    pop: 40,
    wind: "34W",
    windGust: 40,
    sunHrs: 1,
    rain: "~2mm",
}, hamilton8 = {
    description: "A mix of sun and clouds",
    imgFile: "",
    temperature: 23,
    feelsLike: 21,
    night: 15,
    pop: 25,
    wind: "22SE",
    windGust: 24,
    sunHrs: 2,
    rain: "~1mm",
}, hamilton9 = {
    description: "Foggy",
    imgFile: "",
    temperature: 20,
    feelsLike: 15,
    night: 9,
    pop: 30,
    wind: "36NW",
    windGust: 40,
    sunHrs: 0,
    rain: "~2mm",
}


/**
 * The following section defines a 'dailyWeatherForecast' object 
 * This object can be used to return the weather for any given weekday.
 * Not fully sure whether I want days to be displayed, or whether I want the date instead
 */ 
const dailyWeatherForecast = {
    kingston: {
        monday: [kingston4],
        tuesday: [kingston5],
        wednesday: [kingston6],
        thursday: [kingston7],
        friday: [kingston8],
        saturday: [kingston9],
        sunday: [kingston3],
    },
    toronto: {
        monday: [toronto4],
        tuesday: [toronto5],
        wednesday: [toronto6],
        thursday: [toronto7],
        friday: [toronto8],
        saturday: [toronto9],
        sunday: [toronto3],
    },
    hamilton: {
        monday: [hamilton4],
        tuesday: [hamilton5],
        wednesday: [hamilton6],
        thursday: [hamilton7],
        friday: [hamilton8],
        saturday: [hamilton9],
        sunday: [hamilton3],
    },
};

/**
 * The following section defines a 'weeklyWeatherForecast' object 
 * This object can be used to return the weather for any given city.
 */ 
const weeklyWeatherForecast = {
    kingston: [kingston3, kingston4, kingston5, kingston6,kingston7, kingston8, kingston9],
    toronto: [toronto3, toronto4, toronto5, toronto6,toronto7, toronto8, toronto9],
    hamilton: [hamilton3, hamilton4, hamilton5, hamilton6,hamilton7, hamilton8, hamilton9],
};

/**
 * The following section creates a 'weatherData' object 
 * that contains all of the objects defined above
 */ 
const weatherData = {
    dailyWeather:dailyWeatherForecast,
    weeklyWeather:weeklyWeatherForecast,
};

module.exports = weatherData;