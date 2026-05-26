module.exports = function(eleventyConfig) {

  /* =========================
     STATIC FILES
  ========================= */

  eleventyConfig.addPassthroughCopy("content/css");
  eleventyConfig.addPassthroughCopy("imagenes");



  /* =========================
     COLLECTIONS
  ========================= */

  eleventyConfig.addCollection("activities", function(collectionApi) {

    return collectionApi
      .getFilteredByGlob("content/activities/*.md")
      .sort((a, b) => {

        return a.data.title.localeCompare(
          b.data.title,
          "es",
          { sensitivity: "base" }
        );

      });

  });



  /* =========================
     FILTERS
  ========================= */

  eleventyConfig.addFilter("activityHasBadge", function(activity, badgeId) {

    if (!activity.data.activity_badges) {
      return false;
    }

    return activity.data.activity_badges.some(item => {

      if (typeof item === "string") {
        return item.toLowerCase() === badgeId.toLowerCase();
      }

      return item.id === badgeId;

    });

  });



  eleventyConfig.addFilter("activityHasSdg", function(activity, sdgId) {

    if (!activity.data.sdgs) {
      return false;
    }

    return activity.data.sdgs.includes(sdgId);

  });



  eleventyConfig.addFilter("activityHasAge", function(activity, ageName) {

    if (!activity.data.age_group) {
      return false;
    }

    return activity.data.age_group.includes(ageName);

  });



  /* =========================
     CONFIG
  ========================= */

  return {

    dir: {
      input: "content",
      includes: "_includes",
      output: "docs"
    }

  };

};
