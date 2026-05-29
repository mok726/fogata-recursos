const sitemapPlugin =
  require("@quasibit/eleventy-plugin-sitemap");

const site =
  require("./content/_data/site.js");

module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy(
    "content/css"
  );

  eleventyConfig.addPassthroughCopy(
    "imagenes"
  );

  eleventyConfig.addCollection(
    "activities",
    function(collectionApi) {

      return collectionApi
        .getFilteredByGlob(
          "content/activities/*.md"
        );

    }
  );

eleventyConfig.addCollection(
  "activitiesSorted",
  function(collectionApi) {

    return collectionApi
      .getFilteredByGlob(
        "content/activities/*.md"
      )
      .sort((a, b) => {

        const titleA =
          (a.data.title || "")
            .toLowerCase();

        const titleB =
          (b.data.title || "")
            .toLowerCase();

        return titleA.localeCompare(
          titleB,
          "es"
        );

      });

  }
);



  eleventyConfig.addPlugin(
    sitemapPlugin,
    {
      sitemap: {
        hostname:
          `${site.url}${site.pathPrefix}/`
      }
    }
  );



  eleventyConfig.addFilter(
    "normalizeAge",
    function(age, ageGroups) {

      if (!age) {
        return null;
      }

      const normalized =
        age.toString()
          .trim()
          .toLowerCase();

      for (const group of ageGroups) {

        if (
          group.aliases.includes(normalized)
        ) {
          return group;
        }

      }

      return {
        id: normalized,
        name: age,
        color: "#888",
        icon: null
      };

    }
  );


eleventyConfig.addFilter(
  "nl2br",
  function(text) {

    if (!text) {
      return "";
    }

    return text.replace(
      /\n/g,
      "<br>\n"
    );

  }
);



eleventyConfig.addFilter(
  "smartTitle2",
  function(text) {

    if (!text) {
      return "";
    }

    return text
      .toLowerCase()
      .replace(
        /\b\w/g,
        l => l.toUpperCase()
      );

  }
);



eleventyConfig.addFilter(
  "smartTitle",
  function(text) {

    if (!text) {
      return "";
    }

    return text
      .toLocaleLowerCase("es")
      .replace(
        /(^|[¿¡!?\s(])[a-záéíóúñü]/gu,
        match => match.toLocaleUpperCase("es")
      );

  }
);



eleventyConfig.addFilter(
  "hasValidBadge",
  function(activityBadges, badges) {

    if (
      !activityBadges ||
      !activityBadges.length
    ) {
      return false;
    }

    const valid =
      badges.map(
        b => b.id.toLowerCase()
      );

    return activityBadges.some(
      badge =>
        valid.includes(
          badge.toString()
            .trim()
            .toLowerCase()
        )
    );

  }
);





  return {

    pathPrefix:
      site.pathPrefix,

    dir: {
      input: "content",
      includes: "_includes",
      output: "docs"
    }

  };

};
