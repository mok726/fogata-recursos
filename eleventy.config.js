const sitemapPlugin =
  require("@quasibit/eleventy-plugin-sitemap");

const site =
  require("./content/_data/site.js");


const cheerio = require("cheerio");


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



// Mapeo de ramas a rangos etarios (ajústalo a tu realidad)
const ageRangeMap = {
  castores: "6-8 años",
  manada: "9-11 años",
  "unidad-scout": "12-14 años",
  scouts: "12-14 años",
  caminantes: "15-17 años",
  rovers: "18-21 años"
};

// Filtro para transformar age_group en rango etario
eleventyConfig.addFilter("ageRange", (ageGroups) => {
  if (!ageGroups || !Array.isArray(ageGroups)) return "Todas las edades";
  
  // Convertir nombres a rangos
  const ranges = ageGroups.map(g => ageRangeMap[g] || g);
  
  // Extraer números de cada rango (formato esperado: "X-Y años")
  const parsed = [];
  for (const r of ranges) {
    const match = r.match(/(\d+)-(\d+)\s*años/);
    if (match) {
      parsed.push({ start: parseInt(match[1]), end: parseInt(match[2]) });
    } else {
      // Si no es un rango numérico, lo dejamos tal cual (ej. "Todas")
      return ranges.join(", ");
    }
  }
  
  // Ordenar por inicio
  parsed.sort((a, b) => a.start - b.start);
  
  // Fusionar rangos consecutivos (donde el inicio del siguiente <= final del anterior + 1)
  const merged = [];
  let current = parsed[0];
  for (let i = 1; i < parsed.length; i++) {
    if (parsed[i].start <= current.end + 1) {
      // Consecutivo o solapado → extender el final
      current.end = Math.max(current.end, parsed[i].end);
    } else {
      merged.push(current);
      current = parsed[i];
    }
  }
  merged.push(current);
  
  // Formatear resultado
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



