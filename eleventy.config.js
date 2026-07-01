const sitemapPlugin =
  require("@quasibit/eleventy-plugin-sitemap");

const site =
  require("./content/_data/site.js");


const badges =
  require("./content/_data/badges.js")();

const knownBadgeIds =
  badges.map(b =>
    String(b.id).toLowerCase()
  );




const cheerio = require("cheerio");


module.exports = function(eleventyConfig) {

  // Configure Nunjucks options globally
  eleventyConfig.setNunjucksEnvironmentOptions({
    trimBlocks: true,
    lstripBlocks: true
  });



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




// Orden por activity_code.
// Usada únicamente por badge-page.njk para que las
// actividades aparezcan siguiendo el orden oficial
// del programa de insignias.

eleventyConfig.addCollection(
  "activitiesByCode",
  function(collectionApi) {

    return collectionApi
      .getFilteredByGlob(
        "content/activities/*.md"
      )
      .sort((a, b) => {

        const codeA = a.data.activity_code || "";
        const codeB = b.data.activity_code || "";

        return codeA.localeCompare(
          codeB,
          "es",
          { numeric: true }
        );

      });

  }
);







eleventyConfig.addFilter(
  "activityCardModel",
  function(activity, options = {}) {

    if (!activity) {
      return null;
    }

    const data = activity.data || {};

    return {

      url: activity.url,

      title: data.title || "",

      summary: data.summary || "",

      image:
        data.image ||
        "/imagenes/actividades/activity-card.png",

      duration:
        data.duration || null,

      participants:
        data.participants || null,

      ageGroup:
        data.age_group || [],

      sdgs:
        data.sdgs || [],

      activityBadges:
        data.activity_badges || [],

      attachments:
        data.attachments || [],

      original:
        data.original || false,

      version:
        data.version || null,

      isRequired:
        data.isRequired || false,

      isComplementary:
        options.isComplementary || false,

      isFeatured:
        options.isFeatured || false

    };

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




// Mapeo de ramas a rangos etarios (ajústalo a tu realidad)
const ageRangeMap = {
  castores: "5-6 años",
  manada: "7-10 años",
  "unidad-scout": "11-14 años",
  scouts: "11-14 años",
  caminantes: "14-17 años",
  rovers: "18-22 años"
};

eleventyConfig.addFilter("ageRange", (ageGroups) => {
  if (!ageGroups || !Array.isArray(ageGroups)) return "Todas las edades";

  const ranges = ageGroups.map(g => ageRangeMap[g] || g);

  const parsed = [];
  for (const r of ranges) {
    const match = r.match(/(\d+)-(\d+)\s*años/);
    if (match) {
      parsed.push({ start: parseInt(match[1]), end: parseInt(match[2]) });
    } else {
      // Instead of returning immediately, we can skip non‑numeric entries
      // or return a simplified string. Choose one behaviour:
      // Option A: return a simple join (like before but without breaking)
      return ranges.join(", ");
    }
  }

  // ✅ NEW: handle empty parsed (no valid numeric ranges found)
  if (parsed.length === 0) {
    return ranges.join(", ");
  }

  parsed.sort((a, b) => a.start - b.start);

  const merged = [];
  let current = parsed[0];
  for (let i = 1; i < parsed.length; i++) {
    if (parsed[i].start <= current.end + 1) {
      current.end = Math.max(current.end, parsed[i].end);
    } else {
      merged.push(current);
      current = parsed[i];
    }
  }
  merged.push(current);

  return merged.map(r => `${r.start}-${r.end} años`).join(", ");
});



// Filtro para dividir el markdown HTML en secciones por <h2>
eleventyConfig.addFilter("splitBySections", (htmlContent) => {
  if (!htmlContent) return [];
  // Cargar el HTML sin envolverlo en <html><body>
  const $ = cheerio.load(htmlContent, null, false);
  const sections = [];
  const headings = $('h2'); // Buscar todos los h2

  if (headings.length === 0) {
 //   console.log("No se encontraron h2 en el HTML.");
    return [];
  }

  headings.each((idx, heading) => {
    const headingText = $(heading).text().trim();
    // Obtener todo el contenido que sigue a este h2 hasta el próximo h2
    let contentHtml = '';
    let nextElements = $(heading).nextUntil('h2');
    if (nextElements.length) {
      contentHtml = nextElements.map((i, el) => $.html(el)).get().join('');
    }
    sections.push({ heading: headingText, content: contentHtml });
  });

//  console.log(`Secciones encontradas: ${sections.length}`);
  return sections;
});



eleventyConfig.addFilter(
  "relatedActivities",
  function(current, activities) {

    if (!current || !current.data) {
      return [];
    }

	

    return activities
      .filter(a => a.url !== current.url)
      .map(a => {

        const d = a.data;
        let score = 0;

        // Insignias
        if (current.data.activity_badges && d.activity_badges) {

          const common =
            current.data.activity_badges.filter(
              x => d.activity_badges.includes(x)
            );

          score += common.length * 20;
        }

        // ODS
        if (current.data.sdgs && d.sdgs) {

          const common =
            current.data.sdgs.filter(
              x => d.sdgs.includes(x)
            );

          score += common.length * 10;
        }

        // Categorías
        if (current.data.category && d.category) {

          const common =
            current.data.category.filter(
              x => d.category.includes(x)
            );

          score += common.length * 5;
        }

        // Ramas
        if (current.data.age_group && d.age_group) {

          const common =
            current.data.age_group.filter(
              x => d.age_group.includes(x)
            );

          score += common.length * 3;
        }

        // Tipo principal
        if (
          current.data.main_type &&
          current.data.main_type === d.main_type
        ) {
          score += 2;
        }


        return {
          activity: a,
          score
        };

      })
      .sort((a,b) => b.score - a.score)
      .slice(0,4);




  }
);


eleventyConfig.addFilter(
  "currentActivity",
  function(pageUrl, activities) {

    return activities.find(
      a => a.url === pageUrl
    );

  }
);


eleventyConfig.addFilter(
  "badgeInfo",
  function(badgeId, badges) {

    if (!badgeId || !badges) {
      return null;
    }

    const normalized =
      badgeId
        .toString()
        .trim()
        .toLowerCase();

    return badges.find(b => {

      if (
        b.id &&
        b.id.toLowerCase() === normalized
      ) {
        return true;
      }

      if (b.aliases) {
        return b.aliases.some(
          a =>
            a.toLowerCase() === normalized
        );
      }

      return false;

    });

  }
);




eleventyConfig.addFilter(
  "badgeById",
  function(badgeId, badges) {

    if (!badgeId || !badges) {
      return null;
    }

    return badges.find(
      b =>
        b.id &&
        b.id.toLowerCase() ===
        badgeId.toString().toLowerCase()
    );

  }
);


eleventyConfig.addFilter(
  "activityIndex",
  function(currentUrl, activities) {

    return activities.findIndex(
      a => a.url === currentUrl
    );

  }
);


eleventyConfig.addFilter(
  "activitiesBySkill",
  function(activities, skillName) {

    return activities.filter(a => {

      const skills =
        a.data.skills || [];

      return skills.includes(skillName);

    });

  }
);


eleventyConfig.addGlobalData("buildDate", () => {
  return new Date();
});





//
// =====================================================
// BADGE VIEW
// =====================================================
// Devuelve toda la información necesaria para renderizar
// una página de insignia en una sola pasada.
// No modifica las colecciones originales.
// =====================================================
//

eleventyConfig.addFilter(
  "badgeView",
  function (activities, badge) {

    const result = {

      stats: {
        total: 0,
        official: 0,
        complementary: 0,
        inconsistent: 0,
        required: 0
      },

      sections: {},

      complementary: {
        count: 0,
        activities: []
      },

      inconsistent: {
        count: 0,
        activities: []
      }

    };



    //
    // Crear las secciones
    //

    if (badge.sections) {

      for (const [id, section] of Object.entries(badge.sections)) {

        result.sections[id] = {

          id,

          title:
            section.title,

          description:
            section.description || "",

          count: 0,

          requiredCount: 0,

          activities: []

        };

      }

    }



    //
    // Procesar actividades
    //

    for (const activity of activities) {





const activityBadges =
  activity.data.activity_badges || [];

let belongsToBadge = false;

if (badge.id === "general") {

  //
  // GENERAL contiene actividades:
  //
  //  - sin insignias
  //  - con insignias inexistentes
  //

  if (activityBadges.length === 0) {

    belongsToBadge = true;

  } else {

    belongsToBadge =
      !activityBadges.some(id =>
        knownBadgeIds.includes(
          String(id).toLowerCase()
        )
      );

  }

} else {

  belongsToBadge =
    activityBadges.some(id =>
      String(id).toLowerCase() ===
      String(badge.id).toLowerCase()
    );

}

if (!belongsToBadge) {
  continue;
}






      //
      // Clonar
      //

      const clone = {

        ...activity,

        data: {

          ...activity.data

        }

      };



      const code =
        clone.data.activity_code || "";

      const parts =
        code.split("-");

      let sectionId = null;

      let complementary = false;

      let inconsistent = false;

      if (parts.length < 2) {

        complementary = true;

      }
      else {

        const suffix =
          parts[1];

        if (!/^[A-Z]/.test(suffix)) {

          complementary = true;

        }
        else {

          sectionId =
            suffix[0];

          if (!badge.sections?.[sectionId]) {

            inconsistent = true;

          }

        }

      }



      const required =
        (clone.data.required_for || []).includes(
          badge.id +
          "-" +
          sectionId
        );



      clone.view = {

        section:
          sectionId,

        complementary,

        inconsistent,

        required

      };



      result.stats.total++;

      if (required)
        result.stats.required++;

      if (complementary) {

        result.stats.complementary++;

        result.complementary.activities.push(clone);

        continue;

      }

      if (inconsistent) {

        result.stats.inconsistent++;

        result.inconsistent.activities.push(clone);

        continue;

      }

      result.stats.official++;

      result.sections[sectionId].activities.push(clone);

      result.sections[sectionId].count++;

      if (required)
        result.sections[sectionId].requiredCount++;

    }



    //
    // Ordenar actividades
    //

    function sortActivities(list) {

      list.sort((a,b)=>{

        const ca =
          a.data.activity_code || "";

        const cb =
          b.data.activity_code || "";

        return ca.localeCompare(
          cb,
          "es",
          {numeric:true}
        );

      });

    }

    for (const section of Object.values(result.sections)) {

      sortActivities(
        section.activities
      );

    }

    sortActivities(
      result.complementary.activities
    );

    sortActivities(
      result.inconsistent.activities
    );



    result.complementary.count =
      result.complementary.activities.length;

    result.inconsistent.count =
      result.inconsistent.activities.length;



    return result;

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



