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
var kingstonOct3 = {
    description: "Light Rain",
    imgFile: "", // Will be added later in case I need images
    temperature: 20,
    feelsLike: 22,
    night: 14,
    pop: 80,
    wind: "25W",
    windGust: 38,
    sunHrs: 0,
    rain: "~5mm",
}, kingstonOct4 = {
    description: "Light Rain",
    imgFile: "", // Will be added later in case I need images
    temperature: 20,
    feelsLike: 22,
    night: 14,
    pop: 80,
    wind: "25W",
    windGust: 38,
    sunHrs: 0,
    rain: "~5mm",
}, kingstonOct5 = {
    description: "Light Rain",
    imgFile: "", // Will be added later in case I need images
    temperature: 20,
    feelsLike: 22,
    night: 14,
    pop: 80,
    wind: "25W",
    windGust: 38,
    sunHrs: 0,
    rain: "~5mm",
}, kingstonOct6 = {
    description: "Light Rain",
    imgFile: "", // Will be added later in case I need images
    temperature: 20,
    feelsLike: 22,
    night: 14,
    pop: 80,
    wind: "25W",
    windGust: 38,
    sunHrs: 0,
    rain: "~5mm",
}, kingstonOct7 = {
    description: "Light Rain",
    imgFile: "", // Will be added later in case I need images
    temperature: 20,
    feelsLike: 22,
    night: 14,
    pop: 80,
    wind: "25W",
    windGust: 38,
    sunHrs: 0,
    rain: "~5mm",
}, kingstonOct8 = {
    description: "Light Rain",
    imgFile: "", // Will be added later in case I need images
    temperature: 20,
    feelsLike: 22,
    night: 14,
    pop: 80,
    wind: "25W",
    windGust: 38,
    sunHrs: 0,
    rain: "~5mm",
}, kingstonOct9 = {
    description: "Light Rain",
    imgFile: "", // Will be added later in case I need images
    temperature: 20,
    feelsLike: 22,
    night: 14,
    pop: 80,
    wind: "25W",
    windGust: 38,
    sunHrs: 0,
    rain: "~5mm",
}

// Toronto Data
var torontoOct3 = {
    description: "A mix of sun and clouds",
    imgFile: "",
    temperature: 25,
    feelsLike: 27,
    night: 20,
    pop: 30,
    wind: "5SE",
    windGust: 23,
    sunHrs: 4,
    rain: "~1mm",
}, torontoOct4 = {
    description: "A mix of sun and clouds",
    imgFile: "",
    temperature: 25,
    feelsLike: 27,
    night: 20,
    pop: 30,
    wind: "5SE",
    windGust: 23,
    sunHrs: 4,
    rain: "~1mm",
}, torontoOct5 = {
    description: "A mix of sun and clouds",
    imgFile: "",
    temperature: 25,
    feelsLike: 27,
    night: 20,
    pop: 30,
    wind: "5SE",
    windGust: 23,
    sunHrs: 4,
    rain: "~1mm",
}, torontoOct6 = {
    description: "A mix of sun and clouds",
    imgFile: "",
    temperature: 25,
    feelsLike: 27,
    night: 20,
    pop: 30,
    wind: "5SE",
    windGust: 23,
    sunHrs: 4,
    rain: "~1mm",
}, torontoOct7 = {
    description: "A mix of sun and clouds",
    imgFile: "",
    temperature: 25,
    feelsLike: 27,
    night: 20,
    pop: 30,
    wind: "5SE",
    windGust: 23,
    sunHrs: 4,
    rain: "~1mm",
}, torontoOct8 = {
    description: "A mix of sun and clouds",
    imgFile: "",
    temperature: 25,
    feelsLike: 27,
    night: 20,
    pop: 30,
    wind: "5SE",
    windGust: 23,
    sunHrs: 4,
    rain: "~1mm",
}, torontoOct9 = {
    description: "A mix of sun and clouds",
    imgFile: "",
    temperature: 25,
    feelsLike: 27,
    night: 20,
    pop: 30,
    wind: "5SE",
    windGust: 23,
    sunHrs: 4,
    rain: "~1mm",
}

// Hamilton Data
var hamiltonOct3 = {
    description: "Mainly Cloudy",
    imgFile: "",
    temperature: 14,
    feelsLike: 6,
    night: 10,
    pop: 20,
    wind: "30NW",
    windGust: 46,
    sunHrs: 2,
    rain: "~2mm",
}, hamiltonOct4 = {
    description: "Mainly Cloudy",
    imgFile: "",
    temperature: 14,
    feelsLike: 6,
    night: 10,
    pop: 20,
    wind: "30NW",
    windGust: 46,
    sunHrs: 2,
    rain: "~2mm",
}, hamiltonOct5 = {
    description: "Mainly Cloudy",
    imgFile: "",
    temperature: 14,
    feelsLike: 6,
    night: 10,
    pop: 20,
    wind: "30NW",
    windGust: 46,
    sunHrs: 2,
    rain: "~2mm",
}, hamiltonOct6 = {
    description: "Mainly Cloudy",
    imgFile: "",
    temperature: 14,
    feelsLike: 6,
    night: 10,
    pop: 20,
    wind: "30NW",
    windGust: 46,
    sunHrs: 2,
    rain: "~2mm",
}, hamiltonOct7 = {
    description: "Mainly Cloudy",
    imgFile: "",
    temperature: 14,
    feelsLike: 6,
    night: 10,
    pop: 20,
    wind: "30NW",
    windGust: 46,
    sunHrs: 2,
    rain: "~2mm",
}, hamiltonOct8 = {
    description: "Mainly Cloudy",
    imgFile: "",
    temperature: 14,
    feelsLike: 6,
    night: 10,
    pop: 20,
    wind: "30NW",
    windGust: 46,
    sunHrs: 2,
    rain: "~2mm",
}, hamiltonOct9 = {
    description: "Mainly Cloudy",
    imgFile: "",
    temperature: 14,
    feelsLike: 6,
    night: 10,
    pop: 20,
    wind: "30N W",
    windGust: 46,
    sunHrs: 2,
    rain: "~2mm",
}


/**
 * The following section defines a 'dailyWeatherForecast' object 
 * This object can be used to return the weather for any given weekday.
 * Not fully sure whether I want days to be displayed, or whether I want the date instead
 */ 
const dailyWeatherForecast = {
    kingston: {
        sunday: [kingstonOct3],
        monday: [kingstonOct4],
        tuesday: [kingstonOct5],
        wednesday: [kingstonOct6],
        thursday: [kingstonOct7],
        friday: [kingstonOct8],
        saturday: [kingstonOct9],
    },
    toronto: {
        sunday: [torontoOct3],
        monday: [torontoOct4],
        tuesday: [torontoOct5],
        wednesday: [torontoOct6],
        thursday: [torontoOct7],
        friday: [torontoOct8],
        saturday: [torontoOct9],
    },
    hamilton: {
        sunday: [hamiltonOct3],
        monday: [hamiltonOct4],
        tuesday: [hamiltonOct5],
        wednesday: [hamiltonOct6],
        thursday: [hamiltonOct7],
        friday: [hamiltonOct8],
        saturday: [hamiltonOct9],
    },
};

/**
 * The following section defines a 'weeklyWeatherForecast' object 
 * This object can be used to return the weather for any given city.
 */ 
const weeklyWeatherForecast = {
    kingston: [kingstonOct3, kingstonOct4, kingstonOct5, kingstonOct6,kingstonOct7, kingstonOct8, kingstonOct9],
    toronto: [torontoOct3, torontoOct4, torontoOct5, torontoOct6,torontoOct7, torontoOct8, torontoOct9],
    hamilton: [hamiltonOct3, hamiltonOct4, hamiltonOct5, hamiltonOct6,hamiltonOct7, hamiltonOct8, hamiltonOct9],
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