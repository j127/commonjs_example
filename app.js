const tools = require("./tools");

flipTemperature("US", -40); // this will conver -40F to celsius
flipTemperature("Spain", 100); // this will convert 100C to fahrenheit

/**
 * Flip temperature from C to F or F to C depending on the country.
 */
function flipTemperature(country, temperature) {
    // This will get the scale for the US (e.g., "fahrenheit").
    const scale = tools.countries[country];

    // if it's fahrenheit
    if (scale === tools.measurements.F) {
        console.log(`The flipped temperature for is ${tools.f2c(temperature)}`);
    } else if (scale === tools.measurements.C) {
        console.log(`The converted temperature is ${tools.c2f(temperature)}`);
    } else {
        console.error("invalid input");
    }
}
