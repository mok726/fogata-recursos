const sitemapPlugin =
  require("@quasibit/eleventy-plugin-sitemap");

const site =
  require("./content/_data/site.js");


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


function parseActivityCode(code = "") {

  const match = code.match(/^([^-]+)-([A-Z])(\d{2})$/i);

  if (!match) {

    return {
      badge: null,
      section: null,
      number: null
    };

  }

  return {

    badge: match[1],

    section: match[2].toUpperCase(),

    number: Number(match[3])

  };

}



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
  "activitiesForBadgeByCode",
  function(collection, badgeId) {

    if (!collection || !badgeId) {
      return [];
    }

    return collection
      .filter(activity => {

        const badges =
          activity.data.activity_badges || [];

        return badges.includes(badgeId);

      })
      .sort((a, b) => {

        const codeA =
          a.data.activity_code || "";

        const codeB =
          b.data.activity_code || "";

        return codeA.localeCompare(
          codeB,
          "es",
          { numeric: true }
        );

      });

  }
);





eleventyConfig.addFilter(
  "activityFlags",
  function (activities, options = {}) {

    return activities.map(activity => {

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

      const prefix =
        parts.length > 1
          ? parts[0]
          : "";

      const suffix =
        parts.length > 1
          ? parts[1]
          : "";

      clone.data.codePrefix = prefix;
      clone.data.codeSuffix = suffix;

      clone.data.section =
        suffix.match(/^[A-Z]/)
          ? suffix[0]
          : null;

      clone.data.isOfficial =
        clone.data.section !== null;

      clone.data.isComplementary =
        clone.data.section === null;

      if (
        options.badge &&
        options.sections
      ) {

        clone.data.isInconsistent =
          clone.data.isOfficial &&
          !options.sections[
            clone.data.section
          ];

      } else {

        clone.data.isInconsistent = false;

      }

      const required =
        clone.data.required_for || [];

      clone.data.isRequired =
        options.badge
          ? required.includes(
              options.badge +
              "-" +
              clone.data.section
            )
          : required.length > 0;

      return clone;

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




eleventyConfig.addFilter(
  "activityQuery",
  function (activities, options = {}) {

    let result = [...activities];

    //
    // INSIGNIA
    //
    if (options.badge) {

      result = result.filter(activity => {

        const badges =
          activity.data.activity_badges || [];

        return badges.includes(options.badge);

      });

    }

    //
    // SECCIÓN
    //
    if (options.section) {

      result = result.filter(activity =>
        activity.data.section === options.section
      );

    }

    //
    // REQUERIDAS
    //
    if (options.required === true) {

      result = result.filter(activity =>
        activity.data.isRequired
      );

    }

    //
    // COMPLEMENTARIAS
    //
    if (options.complementary === true) {

      result = result.filter(activity =>
        activity.data.isComplementary
      );

    }

    //
    // INCONSISTENTES
    //
    if (options.inconsistent === true) {

      result = result.filter(activity =>
        activity.data.isInconsistent
      );

    }

    return result;

  }
);









eleventyConfig.addFilter(
  "activityQueryold3",
  function (activities, options = {}) {

    let result = [...activities];

    //
    // FILTRO POR INSIGNIA
    //
    if (options.badge) {

      result = result.filter(activity => {

        const badges =
          activity.data.activity_badges || [];

        return badges.includes(options.badge);

      });

    }

    //
    // FILTRO POR SECCIÓN
    //
    if (options.section) {

      result = result.filter(activity => {

        const code =
          activity.data.activity_code || "";

        const parts = code.split("-");

        if (parts.length < 2) {
          return false;
        }

        const suffix = parts[1];

        return suffix.startsWith(options.section);

      });

    }

    //
    // FILTRO POR REQUERIDAS
    //
    if (options.required === true) {

      result = result.filter(activity => {

        const required =
          activity.data.required_for || [];

        return required.length > 0;

      });

    }

    //
    // FILTRO POR COMPLEMENTARIAS
    //
    if (options.complementary === true) {

      result = result.filter(activity => {

        const code =
          activity.data.activity_code || "";

        const parts = code.split("-");

        if (parts.length < 2) {
          return true;
        }

        const suffix = parts[1];

        return !/^[A-Z]/.test(suffix);

      });

    }

    //
    // FILTRO POR INCONSISTENTES
    //
    if (options.inconsistent === true) {

      result = result.filter(activity => {

        const code =
          activity.data.activity_code || "";

        const parts = code.split("-");

        if (parts.length < 2) {
          return false;
        }

        const suffix = parts[1];

        if (!/^[A-Z]/.test(suffix)) {
          return false;
        }

        const section = suffix[0];

        return !options.sections ||
               !options.sections[section];

      });

    }

    return result;

  }
);





eleventyConfig.addFilter(
  "activityQueryold2",
  function (activities, options = {}) {

    let result = [...activities];

    //
    // FILTRO POR INSIGNIA
    //
    if (options.badge) {

      result = result.filter(activity => {

        const badges =
          activity.data.activity_badges || [];

        return badges.includes(options.badge);

      });

    }

    //
    // FILTRO POR SECCIÓN
    //
    if (options.section) {

      result = result.filter(activity => {

        const code =
          activity.data.activity_code || "";

        const parts = code.split("-");

        if (parts.length < 2) {
          return false;
        }

        const suffix = parts[1];

        return suffix.startsWith(options.section);

      });

    }

    //
    // FILTRO POR REQUERIDAS
    //
    if (options.required === true) {

      result = result.filter(activity => {

        const required =
          activity.data.required_for || [];

        return required.length > 0;

      });

    }

    //
    // FILTRO POR COMPLEMENTARIAS
    //
    if (options.complementary === true) {

      result = result.filter(activity => {

        const code =
          activity.data.activity_code || "";

        const parts = code.split("-");

        if (parts.length < 2) {
          return true;
        }

        const suffix = parts[1];

        return !/^[A-Z]/.test(suffix);

      });

    }

    return result;

  }
);



eleventyConfig.addFilter(
  "activityQueryold",
  function(collection, options = {}) {

    if (!Array.isArray(collection)) {
      return [];
    }

    return collection.filter(item => {

      const data = item.data;

      //
      // Badge
      //

      if (options.badge) {

        const badges =
          data.activity_badges || [];

        const wanted =
          Array.isArray(options.badge)
            ? options.badge
            : [options.badge];

        if (!wanted.some(b => badges.includes(b))) {
          return false;
        }

      }

      //
      // Section
      //

      if (options.section) {

        const parsed =
          parseActivityCode(
            data.activity_code
          );

        const wanted =
          Array.isArray(options.section)
            ? options.section
            : [options.section];

        if (!wanted.includes(parsed.section)) {
          return false;
        }

      }

      return true;

    });

  }
);





eleventyConfig.addFilter(
  "activitySort",
  function(collection,
           field = "title",
           direction = "asc") {

    if (!Array.isArray(collection)) {
      return [];
    }

    const sorted = [...collection];

    sorted.sort((a, b) => {

      let result = 0;

      switch (field) {

        case "activity_code": {

          const pa =
            parseActivityCode(
              a.data.activity_code
            );

          const pb =
            parseActivityCode(
              b.data.activity_code
            );

          result =
            pa.badge.localeCompare(pb.badge);

          if (result === 0) {

            result =
              pa.section.localeCompare(pb.section);

          }

          if (result === 0) {

            result =
              pa.number - pb.number;

          }

          break;

        }

        case "title":

        default: {

          const ta =
            (a.data.title || "")
              .toLowerCase();

          const tb =
            (b.data.title || "")
              .toLowerCase();

          result =
            ta.localeCompare(tb, "es");

        }

      }

      return direction === "desc"
        ? -result
        : result;

    });

    return sorted;

  }
);



eleventyConfig.addFilter(
  "activityLimit",
  function(collection,
           limit) {

    if (!Array.isArray(collection)) {
      return [];
    }

    return collection.slice(0, limit);

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



eleventyConfig.addFilter(
  "groupBadgeActivities",
  function (activities, badge) {

    const result = {
      sections: {},
      orphanActivities: [],
      supplementalActivities: []
    };

    // crear secciones oficiales
    if (badge.sections) {
      for (const sectionId of Object.keys(badge.sections)) {
        result.sections[sectionId] = [];
      }
    }

    for (const activity of activities) {

      const activityBadges =
        activity.data.activity_badges || [];

      const belongsToBadge =
        activityBadges.some(
          b => String(b).toLowerCase() === String(badge.id).toLowerCase()
        );

      if (!belongsToBadge) {
        continue;
      }

      const activityCode =
        activity.data.activity_code || "";

      const expectedPrefix =
        `${badge.id}-`;

      // actividad prestada de otra insignia
      if (!activityCode.startsWith(expectedPrefix)) {

        result.supplementalActivities.push(activity);

        continue;
      }

      const remaining =
        activityCode.substring(expectedPrefix.length);

      const sectionId =
        remaining.charAt(0);

      if (
        badge.sections &&
        badge.sections[sectionId]
      ) {

        result.sections[sectionId].push(activity);

      } else {

        result.orphanActivities.push(activity);

      }

    }

    return result;
  }
);





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

      if (
        !activityBadges.includes(badge.id)
      ) {
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



