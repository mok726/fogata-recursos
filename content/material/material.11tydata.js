// Material de apoyo: leyendas, cuentos, adivinanzas y coplas para
// usar en las actividades. No es una insignia ni entra en los
// filtros de actividades.
module.exports = {
  layout: "layouts/material.njk",
  tags: ["material"],
  permalink: (data) => `/material/${data.page.fileSlug}/`,
};
