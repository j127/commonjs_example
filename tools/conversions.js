/**
 * Converts fahrenheit to celsius
 */
function f2c(f) {
    const result = ((f - 32) * 5) / 9;

    // round to 2 decimal places
    return +result.toFixed(2);
}

/**
 * Converts celsius to fahrenheit
 */
function c2f(c) {
    const result = (c * 9) / 5 + 32;
    return +result.toFixed(2);
}

// You can export all the functions in an object like this.
module.exports = {
    f2c,
    c2f,
};
