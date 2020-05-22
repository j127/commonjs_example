// Prevent typo bugs
const scales = {
    F: "fahrenheit",
    C: "celsius",
};

const countries = {
    US: scales.F,
    Belize: scales.F,
    Spain: scales.C,
};

module.exports = {
    scales,
    countries,
};
