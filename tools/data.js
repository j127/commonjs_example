// Prevent typo bugs
const measurements = {
    F: "fahrenheit",
    C: "celsius",
};

const countries = {
    US: measurements.F,
    Belize: measurements.F,
    Spain: measurements.C,
};

module.exports = {
    measurements,
    countries,
};
