module.exports = function(eleventyConfig) {

  /*
  =========================
  STATIC FILES
  =========================
  */

  eleventyConfig.addPassthroughCopy("content/css");

  eleventyConfig.addPassthroughCopy("imagenes");

  eleventyConfig.addPassthroughCopy({
    "node_modules/pagefind/dist": "pagefind"
  });



  /*
  =========================
  COLLECTIONS
  =========================
  */

  eleventyConfig.addCollection("activities", function(collectionApi) {

    return collectionApi.getFilteredByGlob(
      "content/activities/*.md"
    );

  });



  /*
  =========================
  CONFIG
  =========================
  */

  return {

    dir: {

      input: "content",

      includes: "_includes",

      output: "docs"

    }

  };

};

