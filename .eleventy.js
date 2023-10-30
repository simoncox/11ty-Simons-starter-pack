module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(require("./src/_11ty/cssmini.js")); // CSS minification
  eleventyConfig.addPlugin(require("./src/_11ty/datetime.js")); // Date Time plugin
  eleventyConfig.addPlugin(require("./src/_11ty/passthroughs.js")); // passthroughs
  
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};    