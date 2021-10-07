/**
 *          Assignment 1 - JavaScript Representation of Weather Data
 *          ========================================================
 */


/**
 * The following section declares the raw data that will be used to make up the weather.
 * A JavaScript object is declared and initialized for each day.
 * Currently all raw data is almost identical, will change to unique values at a later date.
 */

// Kingston Data
var kingstonOct3 = {
    temperature: 20,
    feelsLike: 22,
    night: 14,
    pop: 80,
    wind: "25W",
    windGust: 38,
    sunHrs: 0,
    rain: "~5mm",
}

var kingstonOct4 = {
    temperature: 24,
    feelsLike: 19,
    night: 12,
    pop: 65,
    wind: "15NW",
    windGust: 26,
    sunHrs: 2,
    rain: "~4mm",
}

var kingstonOct5 = {
    temperature: 90,
    feelsLike: 19,
    night: 12,
    pop: 65,
    wind: "15EW",
    windGust: 26,
    sunHrs: 2,
    rain: "~4mm",
}

var kingstonOct6 = {
    temperature: 80,
    feelsLike: 19,
    night: 12,
    pop: 65,
    wind: "15EW",
    windGust: 26,
    sunHrs: 2,
    rain: "~4mm",
}

var kingstonOct7 = {
    temperature: 70,
    feelsLike: 19,
    night: 12,
    pop: 65,
    wind: "15EW",
    windGust: 26,
    sunHrs: 2,
    rain: "~4mm",
}

var kingstonOct8 = {
    temperature: 60,
    feelsLike: 19,
    night: 12,
    pop: 65,
    wind: "15EW",
    windGust: 26,
    sunHrs: 2,
    rain: "~4mm",
}

var kingstonOct9 = {
    temperature: 50,
    feelsLike: 19,
    night: 12,
    pop: 65,
    wind: "15EW",
    windGust: 26,
    sunHrs: 2,
    rain: "~4mm",
}

// Toronto Data
var torontoOct3 = {
    temperature: 20,
    feelsLike: 22,
    night: 14,
    pop: 80,
    wind: "25W",
    windGust: 38,
    sunHrs: 0,
    rain: "~5mm",
}

var torontoOct4 = {
    temperature: 24,
    feelsLike: 19,
    night: 12,
    pop: 65,
    wind: "15EW",
    windGust: 26,
    sunHrs: 2,
    rain: "~4mm",
}

var torontoOct5 = {
    temperature: 90,
    feelsLike: 19,
    night: 12,
    pop: 65,
    wind: "15EW",
    windGust: 26,
    sunHrs: 2,
    rain: "~4mm",
}

var torontoOct6 = {
    temperature: 80,
    feelsLike: 19,
    night: 12,
    pop: 65,
    wind: "15EW",
    windGust: 26,
    sunHrs: 2,
    rain: "~4mm",
}

var torontoOct7 = {
    temperature: 70,
    feelsLike: 19,
    night: 12,
    pop: 65,
    wind: "15EW",
    windGust: 26,
    sunHrs: 2,
    rain: "~4mm",
}

var torontoOct8 = {
    temperature: 60,
    feelsLike: 19,
    night: 12,
    pop: 65,
    wind: "15EW",
    windGust: 26,
    sunHrs: 2,
    rain: "~4mm",
}

var torontoOct9 = {
    temperature: 50,
    feelsLike: 19,
    night: 12,
    pop: 65,
    wind: "15EW",
    windGust: 26,
    sunHrs: 2,
    rain: "~4mm",
}

// Hamilton Data
var hamiltonOct3 = {
    temperature: 20,
    feelsLike: 22,
    night: 14,
    pop: 80,
    wind: "25W",
    windGust: 38,
    sunHrs: 0,
    rain: "~5mm",
}

var hamiltonOct4 = {
    temperature: 24,
    feelsLike: 19,
    night: 12,
    pop: 65,
    wind: "15EW",
    windGust: 26,
    sunHrs: 2,
    rain: "~4mm",
}

var hamiltonOct5 = {
    temperature: 90,
    feelsLike: 19,
    night: 12,
    pop: 65,
    wind: "15EW",
    windGust: 26,
    sunHrs: 2,
    rain: "~4mm",
}

var hamiltonOct6 = {
    temperature: 80,
    feelsLike: 19,
    night: 12,
    pop: 65,
    wind: "15EW",
    windGust: 26,
    sunHrs: 2,
    rain: "~4mm",
}

var hamiltonOct7 = {
    temperature: 70,
    feelsLike: 19,
    night: 12,
    pop: 65,
    wind: "15EW",
    windGust: 26,
    sunHrs: 2,
    rain: "~4mm",
}

var hamiltonOct8 = {
    temperature: 60,
    feelsLike: 19,
    night: 12,
    pop: 65,
    wind: "15EW",
    windGust: 26,
    sunHrs: 2,
    rain: "~4mm",
}

var hamiltonOct9 = {
    temperature: 50,
    feelsLike: 19,
    night: 12,
    pop: 65,
    wind: "15EW",
    windGust: 26,
    sunHrs: 2,
    rain: "~4mm",
}

/**
 * The following section defines a 'dailyWeatherForecast' object 
 * This object can be used to return the weather for any given weekday.
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