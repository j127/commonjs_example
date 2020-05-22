// You can import sub-modules into index.js here.
const conversions = require("./conversions");
const data = require("./data");

// This spreads out all the functions from the imported modules and
// exports them as one object. So you will be able do:
// `tools.f2c` instead of `tools.conversions.f2c` and
// `tools.countries` instead of `tools.data.countries`.
module.exports = { ...conversions, ...data };
