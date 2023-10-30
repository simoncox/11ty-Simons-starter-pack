const CleanCSS = require("clean-css");

module.exports = eleventyConfig => {
    eleventyConfig.addFilter("cssmin", function(code) {
        return new CleanCSS({}).minify(code).styles;
    });
};