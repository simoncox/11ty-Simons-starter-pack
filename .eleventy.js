const { DateTime } = require("luxon"); // date/time plugin
const CleanCSS = require("clean-css"); // CSS minification


module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("cssmin", function(code) { return new CleanCSS({}).minify(code).styles;}); // CSS minification
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/favicon.ico");
  eleventyConfig.addPassthroughCopy("./src/robots.txt");
  eleventyConfig.addPassthroughCopy("./src/sitemap.xml");
  eleventyConfig.addPassthroughCopy("./src/_redirects");
  eleventyConfig.addPassthroughCopy("./src/404.html");
  eleventyConfig.addPassthroughCopy("./src/admin");
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};    