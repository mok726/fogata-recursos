module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("content/css");
  eleventyConfig.addPassthroughCopy("imagenes");



  eleventyConfig.addCollection("activities", function(collectionApi) {
    return collectionApi.getFilteredByGlob("content/activities/*.md");
  });

  return {
    dir: {
      input: "content",
      includes: "_includes",
      output: "_site"
    }
  };
};
