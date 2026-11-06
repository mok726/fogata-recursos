# Criterio para asignar tipos de actividad

Acordado con Mariano el 2026-11-06. La lista, las definiciones y los criterios están en `content/_data/activityTypes.js`.

## Qué es un tipo
El tipo es el **formato**: qué hacen los protagonistas durante la actividad. La prueba es si contesta «¿qué vamos a hacer hoy?». No es lo que se aprende (habilidades), ni el porqué (valores), ni el principio pedagógico (método).

Cada ficha tiene un `main_type` (el que se ve en la card y el que usa el filtro) y, solo si combina formatos de verdad, uno o dos más en `activity_type`. Los tipos no son obligatorios.

## Cambio del 2026-11-06 (mecánico)
| Antes | Ahora |
|---|---|
| Investigación | Indagación |
| Experimentación | Experimento |
| Creatividad / Arte | Expresión artística |
| Exploración, Orientación | Salida / Exploración |
| Servicio a los demás, Participación comunitaria | Servicio |
| Planificación | Proyecto |
| Simulación | Simulación / Juego de roles |
| Sensibilización, Comunicación | Campaña, solo si era el tipo principal o el único; si no, se quitó |
| Aprender haciendo, Autoconocimiento, Hábitos sostenibles, Compromiso, Salud | Eliminados. Si eran el principal, se reemplazaron por el primer tipo que quedaba en la ficha |
| — | Taller / Construcción, Narración, Visita / Charla, Ceremonia (nuevos, sin fichas todavía) |

Heroes: `activitytype-aprender-haciendo.jpg` pasó a usarse para Taller / Construcción. Se borraron los heroes de los tipos eliminados; quedan en el historial de git.

Pendiente: revisar ficha por ficha. Hay que asignar los 4 tipos nuevos (sobre todo Taller / Construcción, que reemplaza a muchos «Aprender haciendo»). Reflexión (439 fichas) e Indagación (525) están infladas. Hay 20 fichas sin tipo.
