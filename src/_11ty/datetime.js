const { DateTime } = require("luxon"); // date/time plugin

module.exports = eleventyConfig => {
    eleventyConfig.addFilter("postDate", (dateObj) => {return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);});
  };