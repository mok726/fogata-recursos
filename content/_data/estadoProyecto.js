// Cifras del estado del proyecto que no se pueden calcular en el build.
// Las actividades publicadas se cuentan solas (collections.activities);
// las que están en edición o esperan permiso de sus titulares viven en
// PRs en borrador y no están en main, así que se cargan a mano.
// Actualizar al abrir o mergear uno de esos PRs.
module.exports = {
  // En espera de permiso: #83 (14) + #84 (2) + #86 (12) + #87 (8) + #88 (6)
  // + #101 (28) + #135 (23) + #137 (3) = 96.
  // En edición: #197 (9) + #209 (4) + #210 (11) = 24.
  // Al 27/11/2026.
  enEsperaDePermiso: 120
};
