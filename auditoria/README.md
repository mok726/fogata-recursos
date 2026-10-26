# Auditoría de actividades

Revisión de las 1041 actividades de `content/activities/`, por tandas. Esta carpeta está fuera de `content/`, así que Eleventy no la publica.

## Archivos

| Archivo | Qué tiene |
|---|---|
| `chequeo-automatico.md` | Chequeos mecánicos sobre las 1041 (campos vacíos, duplicados, imágenes faltantes, etc.). Se regenera con `python3 auditoria/scripts/chequeo_automatico.py > auditoria/chequeo-automatico.md`. |
| `observaciones-globales.md` | Problemas que se repiten en muchas actividades. Se discuten una sola vez, no en cada actividad. |
| `tanda-NN-*.md` | Revisión manual, una sección por actividad con los puntos a–h. |
| `auditoria.csv` | Una fila por actividad revisada (para filtrar/ordenar). Acumulativo. |
| `progreso.md` | Qué tandas están hechas y qué sigue. |

## Puntos revisados por actividad

- **a) Fuente original**: si se encontró (a nivel actividad o insignia) y si menciona material auxiliar.
- **b) Material auxiliar faltante**: lo que la fuente trae y la actividad no (URL + idioma).
- **c) Consistencia** de la adaptación con el original.
- **d) Material/formulario que debería existir** y no está.
- **e) Referencias externas** similares (solo las que verifiqué abriendo la página; si no encontré nada, lo digo).
- **f) Errores** gramaticales, sintácticos o lógicos.
- **g) Imagen**: si es razonable para la actividad.
- **h) Otros comentarios.**

## Prioridad

- **P1**: error de contenido, seguridad o lógica que conviene corregir antes que nada.
- **P2**: falta material o hay inconsistencia notable.
- **P3**: estilo, mejoras opcionales.

## Licencias de referencias

Marcado en cada referencia: `[reutilizable]` (dominio público, CC BY, CC BY-SA, material oficial con permiso de reutilización), `[NC]` (CC BY-NC/-NC-SA: compatible con tu uso no comercial, pero no es lo que acordamos como preferido), `[solo enlace]` (sin licencia declarada: se puede enlazar, no copiar), `[pedir permiso]`.
