// Cifras del estado del proyecto que no se pueden calcular en el build.
// Las actividades publicadas se cuentan solas (collections.activities);
// las que están en edición o esperan permiso de sus titulares viven en
// PRs en borrador y no están en main, así que se cargan a mano.
// Actualizar al abrir o mergear uno de esos PRs.
module.exports = {
  // En espera de permiso: #83 (14) + #84 (2) + #86 (12) + #87 (8) + #88 (6)
  // + #101 (28) + #135 (23) + #137 (3) = 96.
  // En edición: #133 (36) + #134 (91) + #136 (4) + #139 (7) + #150 (1) = 139.
  // Al 23/11/2026.
  enEsperaDePermiso: 235
};
