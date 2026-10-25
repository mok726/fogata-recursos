const site =
  require("./content/_data/site.js");


const badges =
  require("./content/_data/badges.js")();



const ageGroups =
  require("./content/_data/ageGroups.js")();





const knownBadgeIds =
  badges.map(b =>
    String(b.id).toLowerCase()
  );




const cheerio = require("cheerio");

const fs = require("fs");

const path = require("path");


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

  // Miniaturas generadas por scripts/make-thumbs.js
  eleventyConfig.addPassthroughCopy({
    ".cache/thumbs": "imagenes/_thumbs"
  });

  eleventyConfig.addCollection(
    "activities",
    function(collectionApi) {

      return collectionApi
        .getFilteredByGlob(
          "content/activities/*.md"
        );

    }
  );

eleventyConfig.addPassthroughCopy("js");


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





























  // Páginas que van al sitemap: se excluyen versiones
  // imprimibles, páginas de prueba y de mantenimiento.
  const sitemapExcluded = [
    /\/print\/$/,
    /^\/lab\//,
    /^\/galeria_/,
    /^\/listimagenes\//,
    /^\/css\//,
    /^\/feedback\//,
    /^\/404\.html$/
  ];

  eleventyConfig.addCollection(
    "sitemapPages",
    function(collectionApi) {

      // Las plantillas paginadas aparecen una sola vez en
      // getAll(); sus páginas están en pagination.hrefs.
      const urls = collectionApi
        .getAll()
        .flatMap(item =>
          item.data.pagination?.hrefs || [item.url]
        );

      return [...new Set(urls)]
        .filter(url =>
          url &&
          !sitemapExcluded.some(re => re.test(url))
        );

    }
  );

  eleventyConfig.addPassthroughCopy({
    "content/robots.txt": "robots.txt"
  });




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


// Una actividad es borrador si su versión es "DRAFT".
eleventyConfig.addFilter(
  "isDraft",
  function(version) {

    return String(version || "").toUpperCase() === "DRAFT";

  }
);


// Devuelve la miniatura WebP de una imagen si existe
// (ver scripts/make-thumbs.js); si no, la imagen original.
//   {{ item.image | thumb("card") | url }}
const thumbPresets = require("./content/_data/thumbPresets.js");
const thumbCache = new Map();

eleventyConfig.addFilter(
  "thumb",
  function(src, presetName) {

    const preset = thumbPresets[presetName];

    if (!src || !preset) {
      return src;
    }

    const key = presetName + "|" + src;

    if (thumbCache.has(key)) {
      return thumbCache.get(key);
    }

    let result = src;

    const prefix = "/" + preset.dir + "/";

    if (src.startsWith(prefix)) {

      const file =
        src.slice(prefix.length)
          .replace(
            /\.(png|jpe?g|webp)$/i,
            preset.format === "jpeg" ? ".jpg" : ".webp"
          );

      if (
        !file.includes("/") &&
        fs.existsSync(path.join(__dirname, ".cache", "thumbs", presetName, file))
      ) {
        result = "/imagenes/_thumbs/" + presetName + "/" + file;
      }

    }

    thumbCache.set(key, result);

    return result;

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

     badge,

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

          order: section.order || 0,

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

/*
 * Una actividad es complementaria cuando
 * su activity_code pertenece a OTRA insignia.
 */

if (
  parts.length < 2 ||
  parts[0].toLowerCase() !== badge.id.toLowerCase()
) {

  complementary = true;

}
else {

  /*
   * La actividad pertenece a ESTA insignia.
   * Ahora validar únicamente la sección.
   */

  const suffix =
    parts[1];

  sectionId =
    suffix.charAt(0);

  if (
    !badge.sections?.[sectionId]
  ) {

    inconsistent = true;

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
















  //
  // =====================================================
  // BUSCADOR DE /activities/
  // =====================================================
  // El filtrado se hace en el navegador sobre atributos
  // data-* de cada tarjeta. Estos filtros los preparan en
  // el build para que el JS sólo compare textos.
  // =====================================================
  //

  // Minúsculas y sin tildes: "Energía" -> "energia".
  // El JS de la página normaliza la consulta igual.
  const normalizeText = text =>
    String(text || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/\s+/g, " ")
      .trim();

  const badgeIdOf = b =>
    String(b && b.id ? b.id : b || "").toLowerCase();

  // Texto donde busca la caja de búsqueda: título, resumen,
  // descripción, tipo, categorías, etiquetas, competencias,
  // insignias, ramas y ODS (como "ods13").
  eleventyConfig.addFilter(
    "searchText",
    function(data, badges, ageGroups) {

      const list = v =>
        Array.isArray(v) ? v : (v ? [v] : []);

      const badgeNames = list(data.activity_badges).map(b => {
        const info = badges.find(x => badgeIdOf(x) === badgeIdOf(b));
        return info ? info.id + " " + info.name : badgeIdOf(b);
      });

      const ageNames = list(data.age_group).map(g => {
        const info = ageGroups.find(a =>
          a.aliases.includes(String(g).toLowerCase()));
        return info ? info.name + " " + info.aliases.join(" ") : g;
      });

      return normalizeText([
        data.title,
        data.summary,
        data.description,
        data.main_type,
        list(data.category).join(" "),
        list(data.tags).join(" ").replace(/-/g, " "),
        list(data.skills).join(" "),
        data.activity_code,
        badgeNames.join(" "),
        ageNames.join(" "),
        list(data.sdgs).map(n => "ods" + n).join(" ")
      ].filter(Boolean).join(" "));

    }
  );

  eleventyConfig.addFilter("normalizeText", normalizeText);

  // Agrupa la duración (texto libre) en tres rangos útiles
  // para planificar una reunión. "" si no se puede saber.
  //   corta: hasta 45 min · media: hasta 2 h · larga: más
  eleventyConfig.addFilter(
    "durationBucket",
    function(duration) {

      const d = normalizeText(duration);

      if (!d) {
        return "";
      }

      if (/dia|semana|mes|proyecto|campamento/.test(d)) {
        return "larga";
      }

      const num = s => parseFloat(s.replace(",", "."));

      let minutes = null;

      // "1-2 horas" cuenta por el máximo.
      const hours = d.match(/(\d+(?:[.,]\d+)?)(?:\s*(?:-|a)\s*(\d+(?:[.,]\d+)?))?\s*h/);
      const mins = d.match(/(\d+)(?:\s*(?:-|a)\s*(\d+))?\s*min/);

      if (hours) {
        minutes = num(hours[2] || hours[1]) * 60;
      } else if (mins) {
        minutes = num(mins[2] || mins[1]);
      }

      if (minutes === null) {
        return "";
      }

      return minutes <= 45 ? "corta" : minutes <= 120 ? "media" : "larga";

    }
  );

  // Opciones del filtro "Tipo": los main_type que existen,
  // con su cantidad, ordenados por nombre.
  eleventyConfig.addFilter(
    "activityTypeOptions",
    function(activities) {

      const types = new Map();

      for (const a of activities) {

        const name = String(a.data.main_type || "").trim();

        if (!name) {
          continue;
        }

        const id = eleventyConfig.getFilter("slugify")(name);
        const t = types.get(id) || { id, name, count: 0 };

        t.count++;
        types.set(id, t);

      }

      return [...types.values()]
        .sort((a, b) => a.name.localeCompare(b.name, "es"));

    }
  );

  // Opciones del filtro "Insignia": sólo las que tienen
  // actividades, con su cantidad.
  eleventyConfig.addFilter(
    "badgeOptions",
    function(badges, activities) {

      const counts = {};

      for (const a of activities) {
        for (const b of a.data.activity_badges || []) {
          const id = badgeIdOf(b);
          counts[id] = (counts[id] || 0) + 1;
        }
      }

      return badges
        .filter(b => counts[badgeIdOf(b)])
        .map(b => ({ id: badgeIdOf(b), name: b.name, count: counts[badgeIdOf(b)] }))
        .sort((a, b) => a.name.localeCompare(b.name, "es"));

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



