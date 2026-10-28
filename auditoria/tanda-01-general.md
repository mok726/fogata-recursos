# Tanda 01: categoría "general" (11 actividades propias)

Fecha: 2026-10-26. Todas son `original: true`, así que **a)/b)/c)** se hacen contra la sección "Texto original completo" del propio archivo (no hay fuente externa). Aplican además G1 (licencia IGO), G3, G4, G5 y G7 de `observaciones-globales.md`.

**Resumen de la tanda**

- Lo más importante (P1): `taller-macetas-y-germinadoras` entierra las semillas demasiado hondo; `taller-de-papel-ecologico` omite el bastidor con malla, sin el cual no se forma la hoja; `junta-cuida-pesa` pide juntar basura con la mano y al bolsillo (riesgo con vidrio, latas, residuos sanitarios) y premia el peso, lo que incentiva levantar lo más pesado; `taller-de-lenos-ecologicos` incluye revistas (papel satinado) para quemar y no dice cuánto remojar ni cuánto secar.
- Imágenes: 2 que no corresponden (`taller-de-lenos-ecologicos` muestra leña real; `cuanto-plastico-uso` tiene texto "PLASTIC" en inglés y un destello blanco) y 3 flojas.
- Las dos autoevaluaciones (`cuanto-plastico-uso` y `cuanto-se-de-ecologia`) comparten 13 de sus preguntas; la de plástico tiene solo ~5 preguntas sobre plástico.
- Material faltante recurrente: carteles imprimibles, tarjetas, planillas y una "hoja del facilitador" con el impacto de cada respuesta.
- No encontré ninguna fuente externa >90 % idéntica a ninguna de las 11. Lo que listo en e) son referencias complementarias verificadas, no "originales".

---

## cuanto-plastico-uso — ¿Cuánto Plástico uso? (general-E06)

- **a)** Original propio (incluido). Sin material auxiliar.
- **b)** —
- **c)** Consistente. Cambió el ejemplo ("papel del caramelo al piso" → "pajitas de plástico") y generalizó "los lobatos" → "los participantes"; está bien.
- **d)** Falta: (1) carteles imprimibles con las respuestas (SÍ/NO/MÁS O MENOS; SIEMPRE/CASI SIEMPRE/ALGUNAS VECES/NUNCA); (2) **hoja del facilitador** con el dato de impacto a explicar después de cada pregunta: el paso 5 lo pide pero no da el contenido, y es el corazón de la actividad.
- **e)** No encontré nada idéntico. La dinámica es la clásica de "moverse al sector de tu respuesta"; no encontré una fuente con licencia abierta que valga la pena citar.
- **f)**
  - "SI" → "SÍ" (afirmación lleva tilde). Corregido en el PR.
  - **Lógico (P2)**: el título promete plástico, pero solo las preguntas 5–7 y 9 tratan de plástico; 11–13 son de luz y agua. Comparte 13 preguntas con `cuanto-se-de-ecologia`. Sugiero dejar esta 100 % plástico (bolsas, botellas, envoltorios, vasos/cubiertos, delivery, botella reutilizable, botellas de amor) y que la de ecología sea la general.
  - P. 9 "Cuando hago las compras llevo una bolsa" es ambigua: aclarar "bolsa reutilizable".
  - Duración 15–20 min con 15 preguntas más la explicación de cada una: poco realista; 30 min.
- **g)** **No corresponde bien (P2)**: chicos sin uniforme con mochilas, carteles con texto "PLASTIC" en inglés (el prompt pedía sin texto) y un destello blanco tapando la izquierda. Regenerar.
- **h)** "pajitas" → "sorbetes" si el público es argentino (G3).

## cuanto-se-de-ecologia — ¿Cuánto sé de Ecología? (general-E05)

- **a)** Original propio. Sin material auxiliar.
- **b)** —
- **c)** Consistente.
- **d)** **Faltante concreto (P2)**: `materials` lista "(Opcional) Formulario para compromiso ecológico" y `files: []`: el formulario no existe. Además, igual que la anterior: carteles y hoja del facilitador.
- **e)** No encontré nada idéntico.
- **f)**
  - "SI" → "SÍ". Corregido en el PR.
  - El título dice "¿Cuánto sé…?" (conocimiento), pero casi todas las preguntas son de hábitos. Sugerencia: "¿Cuánto cuido el ambiente?" o agregar preguntas de conocimiento.
  - Duración: 18 preguntas en 15–20 min, mismo problema.
- **g)** **Floja (P3)**: chicos corriendo en un parque con un cartel con una vaca; no se ven sectores ni carteles de respuesta.
- **h)** Ver solapamiento con `cuanto-plastico-uso`.

## junta-cuida-pesa — Juntá, Cuidá, Pesá (general-E04)

- **a)** Dice ser original, pero no tiene sección "Texto original completo" (el checklist dice que sí: G7).
- **b)** —
- **c)** No verificable (no hay texto original).
- **d)** Falta en imprimible: cartel de reglas (lo pide en A4 plastificado) y planilla (está como tabla en el texto, pero no como PDF para imprimir).
- **e)** No encontré nada idéntico.
- **f)**
  - "seisénas" → "seisenas" (2 veces). Corregido en el PR.
  - **Atribución inconsistente (P1)**: `attributions` dice `entity: "Autor"` (placeholder) como creador; `author` dice Mariano; el comentario final dice "Actividad original de Scouts de Argentina - Grupo Scout-Guía "San Pablo" Nro. 521". Definí quién figura.
  - **Seguridad (P1)**: los lobatos juntan basura con la mano y la guardan en el bolsillo. Con 7–10 años y en campamento eso incluye vidrio roto, latas cortantes, colillas, pañales, preservativos, jeringas. Falta: guantes o pinzas, "lo que pincha, corta o es sanitario no se toca: se avisa a un adulto", lavado de manos. Y el bolsillo como "mensajero" es justamente lo peligroso.
  - **Lógico (P2)**: "más peso = más cuidado" premia lo pesado (latas con líquido, vidrio, tierra pegada) y castiga el plástico liviano, que es lo que más contamina. Opciones: contar piezas, puntaje por tipo, o pesar pero bonificar plásticos. Además, si el predio está limpio, la competencia empuja a salir del área del campamento.
  - **Lógico (P3)**: al final "vacía la bolsa en un tacho común". Se pierde la oportunidad de separar, y contradice `la-basura-en-su-lugar`. Sugiero separar reciclables en el pesaje.
  - "Proponga a la Manada…" (usted) mezclado con infinitivos (G3).
- **g)** Aceptable: chicos juntando basura en bolsas. No aparece la balanza, pero sirve.
- **h)** Es la actividad más completa de las 11 (reglas, frases clave, doble premio). Con el ajuste de seguridad queda muy bien.

## la-basura-en-su-lugar — La Basura en su Lugar (general-E07)

- **a)** Original propio. Sin material auxiliar.
- **b)** —
- **c)** **Error de adaptación (P2)**: el original dice "equipos pareos" (errata de "parejos"); la adaptación lo convirtió en "equipos pares", que cambia el sentido. Corregido a "equipos parejos" en el PR.
- **d)** Falta: set de **tarjetas imprimibles** de residuos con la clave de respuestas por contenedor, y los carteles de los contenedores.
- **e)** Similar, pero no idéntico: "Rubbish Race" (juego de mesa comercial de clasificar 83 tarjetas, no reutilizable) [solo enlace]. Para adaptar categorías a la Ciudad de Buenos Aires: https://buenosaires.gob.ar/espaciopublicoehigieneurbana/ciudad-verde (es) [reutilizable, CC BY 2.5 AR].
- **f)**
  - **Materiales inconsistentes (P2)**: lista "Pizarra, Tiza, Borrador" (no se usan en ningún paso) y "Bolsas de tela o clasificación", pero no lista lo que sí se usa: la caja/bolsa para sacar tarjetas y los contenedores etiquetados.
  - No define cómo se gana el relevo ni el final ("hasta que todos hayan clasificado todas las tarjetas" es ambiguo: ¿se acaba cuando se vacía la caja?).
  - "composta" → en Argentina, "orgánicos" o "compost". Las categorías de separación cambian por municipio; sugerir adaptar a la del lugar.
  - Mezcla "facilitador" y "dirigentes".
- **g)** Correcta: scouts separando residuos en contenedores (con objetos reales en vez de tarjetas, está bien).
- **h)** —

## taller-botella-de-amor — Taller Botella de Amor (general-E08)

- **a)** Original propio. Menciona "4E" (madera plástica), que la adaptación generalizó a "organización de reciclaje local".
- **b)** —
- **c)** Diferencia: el original solo pide que se *comprometan* a armarla (en casa); la adaptación agrega "Llenan la botella" dentro de los 20 minutos. Llenar una botella de amor lleva semanas. Sugiero: en el taller se arranca y se explica, y se completa en casa.
- **d)** **Falta lo esencial (P1)**: la lista de **qué va y qué no va**. Según el Gobierno de la Ciudad de Buenos Aires, **no** van papel, cartón, telgopor, Tetra Pak, paquetes de yerba, metal, globos, guantes de látex; **sí** van envoltorios, bolsas, film, vasos/cubiertos descartables, sachets, blísters. Sin esto, la botella termina rechazada. Sugiero un cartel imprimible.
- **e)** Referencias verificadas:
  - GCBA, "Botellas de Amor": https://buenosaires.gob.ar/espaciopublicoehigieneurbana/ciudad-verde/botellas-de-amor (es) [reutilizable, CC BY 2.5 AR]: qué va, qué no, puntos de entrega.
  - Billiken, "Botellas de Amor: cómo reciclar fácilmente desde casa": https://billiken.lat/interesante/botellas-de-amor-como-reciclar-facilmente-desde-casa/ (es) [solo enlace], orientado a chicos.
  - Fundación Botellas de Amor (Colombia/Argentina), ficha en MIT Solve: https://solve.mit.edu/solutions/16551 (en) [solo enlace]. No verifiqué el sitio oficial de la fundación.
- **f)** "sinodal" (G4). Sin errores ortográficos en la adaptación.
- **g)** **Floja (P3)**: un chico sin uniforme con botellas PET vacías. No se ve el llenado con plásticos.
- **h)** —

## taller-de-lenos-ecologicos — Taller de Leños Ecológicos (general-E11)

- **a)** Original propio. Sin material auxiliar.
- **b)** —
- **c)** Consistente.
- **d)** Falta una ficha técnica con proporciones y tiempos (ver e).
- **e)** Referencia verificada: Joyce Lockard / Beaverton Rotary Club, "How to make fuel briquettes without a press": https://leehite.org/documents/HOW%20TO%20MAKE%20FUEL%20BRIQUETTES%20WITHOUT%20A%20PRESS.pdf (en) [solo enlace; sin licencia declarada]. Trae lo que falta: remojo de 1–2 días, ~20 % papel y el resto aserrín, molde de botella de 2 L con agujeros de drenaje, secado al sol de 3–7 días ("si no está seco, humea").
- **f)**
  - **Seguridad (P1)**: lista "revistas". El papel satinado de revista tiene recubrimientos y tintas que no conviene quemar en una salamandra de un salón cerrado. Sugiero solo diario, cartón y papel de oficina.
  - **Lógico (P2)**: "Humedecerlos hasta formar pasta" sin remojo previo no forma pasta; falta "remojar 24–48 h". "Dejarlos secar" sin tiempo: son días o semanas, y quemarlos húmedos humea. La duración de 30–40 min solo cubre el armado; aclararlo.
  - El molde necesita agujeros de drenaje; no se menciona.
- **g)** **No corresponde (P1)**: muestra troncos de leña de verdad (lo opuesto a la idea) y un número "210" pintado. Regenerar mostrando cilindros de pasta de papel secándose.
- **h)** —

## taller-de-papel-ecologico — Taller de Papel Ecológico (general-E12)

- **a)** Original propio. El texto original tiene una errata ("PAPEL ECOLÓGICOS"); queda porque es el original.
- **b)** —
- **c)** Consistente con el original, pero el original tiene el problema técnico de abajo.
- **d)** Falta una ficha paso a paso con el bastidor (cómo armarlo).
- **e)** Referencia verificada: Delgado Rodríguez y Bermúdez Reyes (El Colegio de la Frontera Norte / Ecoparque, 2020), "¿Cómo elaborar papel reciclado?": https://www.colef.mx/wp-content/uploads/2020/06/Papel-reciclado.pdf (es) [solo enlace; sin licencia declarada]. Explica 10 pasos con bastidor y contramarco, y alternativas sin bastidor (bandeja + espátula, o un marco de percha y media de nylon).
- **f)**
  - **Técnico (P1)**: "Distribuirlo en la placa y aplastar" sobre una placa plástica o metálica no escurre: la hoja se forma levantando la pulpa del agua con un **bastidor con malla** (mosquitero) y después se prensa entre telas o diarios. Sin eso salen tortas de pulpa, no hojas. También conviene licuadora en vez de rallador.
  - "rotarlos semanalmente" no tiene sentido para papel: seca en 1–2 días. Parece copiado del de leños.
  - `activity_type` repite "Arte" y "Creatividad / Arte".
- **g)** Aceptable: scouts con hojas de papel en un taller. No se ve la pulpa ni el bastidor.
- **h)** —

## taller-de-tejido-papel — Taller de Tejido (Papel) (general-E13)

- **a)** Original propio.
- **b)** —
- **c)** Consistente.
- **d)** Falta un instructivo gráfico de la técnica (cómo enrollar las tiras y cómo empezar la base del canasto).
- **e)** Referencia verificada: Cut Out + Keep, "Cesta imitando mimbre": https://cutoutandkeep.net/projects/cesta-imitando-mimbre-faux-wicker-basket (es) [solo enlace]. Es la técnica estándar: tubos de diario enrollados en un palito de brochette, con base de cartón.
- **f)**
  - **Técnico (P2)**: "doblamos las tiritas con la regla para reforzarlas" no es la técnica habitual. Lo que funciona es enrollar en diagonal sobre un palito de brochette o una aguja de tejer para formar tubos. Faltan en `materials`: palitos de brochette y cartón para la base.
  - En 20 minutos se hacen tubos y quizá un posavasos; un canasto no. Ajustar la duración o el objetivo.
- **g)** Aceptable: chicos con canastos tejidos (parecen de mimbre, no de papel).
- **h)** —

## taller-de-tejido-plastico — Taller de Tejido (Plástico) (general-E14)

- **a)** Original propio.
- **b)** —
- **c)** La adaptación agrega el paso de secado, que el original no tiene; está bien.
- **d)** Falta un instructivo de corte en tiras (cortador casero de botellas) y del tejido.
- **e)** No busqué en profundidad; no tengo una referencia verificada que sumar.
- **f)**
  - `materials` dice "Tiras de Botellas PET" (ya cortadas) y la preparación dice "Reúne botellas PET" para cortarlas en el taller. Unificar.
  - Seguridad: cortar PET deja bordes filosos; "con ayuda de los dirigentes" está, pero agregar "el cortante solo lo usa un adulto" como en la huerta.
- **g)** Buena: scouts trabajando con tiras de botella verdes.
- **h)** —

## taller-huerta-de-botella — Taller Huerta de Botella (general-E09)

- **a)** Original propio. Errata en el original ("platines" por "plantines"), bien corregida en la adaptación.
- **b)** —
- **c)** Consistente.
- **d)** —
- **e)** Complementaria verificada: INTA ProHuerta (EEA Sáenz Peña, 2005), "Sistema de riego por goteo con botellas plásticas": https://repositorio.inta.gob.ar/xmlui/handle/20.500.12123/15601 (es) [NC, CC BY-NC-SA]. Sirve como extensión de la actividad.
- **f)**
  - "seguimiento periódico del estado de los cultivos botellas" → "de los cultivos en botellas". Corregido en el PR.
  - `materials` no incluye lo que usan los pasos: piedras lavadas/arena (paso 6) e hilo/alambre para colgar (paso 9). "Guantes descartables" (G8).
- **g)** **Floja (P3)**: aparecen botellas, pero las plantas están en macetas de barro, no en las botellas.
- **h)** —

## taller-macetas-y-germinadoras — Taller Macetas y Germinadoras (general-E10)

- **a)** Original propio. Erratas en el original ("ls semillas", "para para", "algun"); quedan porque es el original.
- **b)** —
- **c)** Consistente.
- **d)** Sugerencia: una planilla de seguimiento de germinación (día de siembra, día de brote, altura), que encaja con "seguimiento periódico".
- **e)** No tengo una referencia verificada idéntica.
- **f)**
  - **Técnico (P1)**: el paso 6 cubre las semillas con "al menos 2 cm" de tierra. Para hierbas y flores (semillas chicas) es demasiado: la regla práctica es enterrar 2–3 veces el tamaño de la semilla (unos milímetros), y muchas apenas se cubren. Con 2 cm, buena parte no emerge, y la actividad "falla" frente a los chicos. Además, en un vaso descartable "1 cm de piedras + 2 cm + 2 cm" deja poco lugar.
  - "Guantes descartables" (G8).
- **g)** Aceptable: plantines en macetitas con scouts; no se ven envases reutilizados.
- **h)** —

## patitas-limpias — Patitas Limpias (COMUNIDAD-M01) — agregada a esta tanda

No es de la categoría `general`, pero es tuya (`source: Propio`, insignia `comunidad`), así que la sumé acá.

- **a)** Propia, sin texto original separado.
- **b)** —
- **c)** —
- **d)** **Enlace roto (P1)**: `files` enlaza `/recursos/patitas-limpias/Lista-de-Control.pdf`, que no existe en el repo (y Eleventy no copia ninguna carpeta `/recursos`). Los otros tres PDF (tablero acumulador, registro del adulto, patitas recortables) están comentados: faltan hacerlos. Es la actividad que más depende de imprimibles.
- **e)** No encontré nada idéntico. Es una variante del clásico "inspección de patrulla"; no tengo una fuente abierta verificada.
- **f)** Corregido en el PR: "representate", "Preparacion" (el encabezado sin tilde además hacía que el layout no lo reconociera como sección "Preparación"), "dinamica", "areas", "que se va a evaluar", "podrian", "dia(s)", "proximo", "cuantas", signos de pregunta faltantes o duplicados y una comilla suelta. Quedan para vos:
  - `original: "true"` era texto; ya está como booleano en el PR.
  - **Insignia inexistente (P1)**: `activity_badges: comunidad`, que no existe en `content/_data/badges.js`. La página de la insignia no existe y el filtro de insignias puede mostrarla sin nombre. Tenés que crearla o moverla a `general`.
  - `branch` está comentado (vacío): no aparece al filtrar por rama.
  - `age: "7-10"` (sin "años") y el resumen dice "(7-11 años)".
  - Abreviatura "VL" sin definir; con dos jueces, el "empate" es frecuente. Conviene un número impar de jueces o que decida el Educador.
  - Hay "FASE 3" y "FASE 4", pero no fases 1 y 2.
  - "15 minutos" en `duration` vs. "15–17 minutos" en el texto.
  - ODS 16 (Paz, justicia e instituciones sólidas) es un poco forzado; el 3 (salud) y el 11 alcanzan.
  - Seguridad (P3): si se usa agua y trapo de piso con lobatos, aclarar "sin productos químicos (lavandina, etc.)".
  - G1 (licencia IGO).
- **g)** **No corresponde bien (P2)**: una cueva de Manada con una pantera/oso gigante y dos chicos parados; no muestra limpieza ni inspección. Hay 9 variantes `patitas-limpias_1..9.png` en el repo sin usar: quizá alguna sirva (no las revisé todas).
- **h)** La dinámica es buena: rota roles, los jueces son pares y no los adultos, y el cierre tiene buenas preguntas.

## Estado (2026-10-28)

Aplicado en el PR #10, con OK de Mariano:
- `taller-macetas-y-germinadoras`: profundidad de siembra de 2 a 3 veces el tamaño de la semilla (no 2 cm), riego con rociador, capa de tierra hasta 1–2 cm del borde.
- `taller-de-papel-ecologico`: técnica con bastidor y malla (cómo armarlo), remojo previo, licuadora manejada por un adulto, prensado entre paños, secado en 1–2 días. Se sacó el "Arte" duplicado.
- `junta-cuida-pesa`: guantes reutilizables y bolsita por lobato (no el bolsillo), regla "lo que pincha, corta o es sanitario no se toca", lavado de manos.
- `cuanto-plastico-uso`: 15 preguntas, todas sobre plástico ("bolsa reutilizable" en la de compras); duración de 30 minutos.

Pendiente: material imprimible (carteles, tarjetas, hoja del facilitador), atribución de `junta-cuida-pesa`, criterio de peso (premia lo pesado) y separación en el pesaje.
