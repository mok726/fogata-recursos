---
# ========== METADATOS OBLIGATORIOS ==========
title: "Las Cartas Binarias"
duration: "45 minutos"
layout: "layouts/activity.njk"
permalink: "/activities/las-cartas-binarias/"
description: "Cinco cartas con 1, 2, 4, 8 y 16 puntos, que se pueden mostrar o dar vuelta. Con ellas se puede formar cualquier número del 0 al 31: así cuentan las computadoras, con solo dos estados."
summary: "Descubrir cómo cuentan las computadoras con cartas de puntos."

# ========== AUTORÍA Y FUENTES ==========
author:
  - "Mariano S. Cosentino"
source:
  - "Inspirada en CS Unplugged (Universidad de Canterbury, CC BY-SA 4.0)"

# ========== IMAGEN Y ESTADO ==========
original: true
Origin: "Actividad adaptada de una lección de CS Unplugged (CC BY-SA 4.0)"
version: "DRAFT"

# ========== CLASIFICACIÓN ==========
branch:
  - "Comunidad"
age: "7-14 años"
age_group:
  - "manada"
  - "scouts"

# ========== LOGÍSTICA ==========
materials:
  - "Cinco cartulinas grandes: en una cara, 1, 2, 4, 8 y 16 puntos; la otra cara en blanco"
  - "Un juego chico de cartas por patrulla"
tools: []
responsible:
  - "Scouter"
prep_time: "10 minutos"
participants: "4-30"
location: "Interior o exterior"
space_required: "El local scout o un patio"

# ========== OBJETIVOS DE DESARROLLO SOSTENIBLE ==========
sdgs:
  - 4
  - 9

# ========== INSIGNIAS / CÓDIGO ==========
activity_badges:
  - "desenchufada"
activity_code: "desenchufada-A01"
required: false
required_for: []
required_comment: ""
required_category: ""

# ========== ETIQUETAS GENERALES ==========
tags:
  - "computacion-desenchufada"
  - "pensamiento-computacional"

# ========== ENLACES Y ARCHIVOS ==========
link: []
files: []

# ========== REFERENCIAS ==========
references:
  - title: "CS Unplugged, «How binary digits work»"
    url: "https://www.csunplugged.org/en/topics/binary-numbers/how-binary-digits-work/"
  - title: "CS Unplugged, Computer Science Education Research Group, Universidad de Canterbury (Nueva Zelanda), CC BY-SA 4.0"
    url: "https://www.csunplugged.org/es/topics/"

# ========== LICENCIA ==========
license:
  name: "Creative Commons BY-SA 4.0"
  url: "https://creativecommons.org/licenses/by-sa/4.0/deed.es"
  image: "https://licensebuttons.net/l/by-sa/4.0/88x31.png"
  note: "Adaptación de una lección de CS Unplugged (Computer Science Education Research Group, Universidad de Canterbury, Nueva Zelanda), publicada con licencia Creative Commons BY-SA 4.0. La ficha está redactada de nuevo y adaptada a la vida scout por Fogata de Recursos y se comparte con la misma licencia. No incluye el texto original."
  allowed: "Copiar, distribuir y adaptar, también con fines comerciales, citando la fuente y compartiendo las adaptaciones bajo la misma licencia."

# ========== ATRIBUCIONES ==========
attributions:
  - entity: "CS Unplugged (Computer Science Education Research Group, Universidad de Canterbury)"
    role: "autor de la lección que inspiró la ficha (CC BY-SA 4.0)"
    year: 2024
  - entity: "Mariano S. Cosentino"
    role: "texto, adaptación y desarrollo"
    year: 2026

# ========== COMPONENTES (escala 1-5) ==========
ludic_component: 4
reflective_component: 2
active_component: 2

# ========== COMPLEJIDAD (escala 1-5) ==========
complexity_execution: 2
complexity_organizer: 2

# ========== TIPO PRINCIPAL ==========
main_type: "Juego"

# ========== IMAGEN PROMPT ==========
image_prompt: "Ultra-wide cinematic website hero banner. Children scouts standing in a row in a scout hall holding large cards with dot patterns, some cards flipped to the blank side, other kids counting. Left side contains open negative space reserved for website interface elements. No text, no letters, no words. Wide shot."

# ========== CLASIFICACIONES ADICIONALES ==========
activity_type:
  - "Juego"
  - "Experimento"
category:
  - "Ciencia"
  - "Tecnología"
skills:
  - "Alfabetización digital"
  - "Resolución de problemas"

# ========== VALORES SCOUT ==========
scout_values:
  - "Curiosidad y Deseo de Aprender"
scout_method:
  - "Aprender Haciendo"
  - "Sistema de Equipos"

# ========== COMPETENCIAS POR RAMA ==========
rama_castores: []  # Castores no tienen competencias definidas
rama_lobatos:
  - 32  # Me intereso por aprender cosas nuevas.
  - 34  # Me enfrento a desafíos y problemas y encuentro soluciones creativas para resolverlos.
  - 33  # Utilizo diferentes herramientas y busco soluciones para resolver situaciones cotidianas.
rama_scouts:
  - 41  # Experimento diferentes medios y tecnologías que me ayuden a resolver problemas de la vida cotidiana.
  - 46  # Exploro y experimento con diferentes técnicas y tecnologías para resolver problemas, lograr mis objetivos y descubrir soluciones creativas.
rama_caminantes:
  - 37  # Investigo y desarrollo distintas habilidades y tecnologías, que me permitan adquirir experiencias prácticas y útiles para mi vida.
  - 42  # Aplico técnicas y tecnologías disponibles en la vida cotidiana.
rama_rovers:
  - 7   # Aplico técnicas y tecnologías de la información disponibles en la vida cotidiana.
---

# Las Cartas Binarias

## Resumen
Las computadoras guardan todo con solo dos cosas: prendido o apagado, 1 o 0. Con cinco cartas que tienen 1, 2, 4, 8 y 16 puntos se ve clarito cómo funciona. Cada carta puede estar mostrando sus puntos (1) o dada vuelta (0). Sumando los puntos que se ven, se forma cualquier número del 0 al 31. Esa forma de escribir números se llama sistema binario.

## Preparación
1. Prepará las cinco cartas grandes. Dibujá los puntos bien visibles.

## Desarrollo
1. Cinco voluntarios pasan al frente, cada uno con una carta, en este orden de derecha a izquierda: 1, 2, 4, 8 y 16 puntos.
2. Miren las cartas: ¿qué patrón tienen? Cada una tiene el doble de puntos que la de la derecha.
3. El dirigente pide un número, por ejemplo 5. Los demás tienen que decir qué cartas se muestran y cuáles se dan vuelta para que se vean exactamente 5 puntos (4 + 1).
4. Prueben con otros números: 10, 15, 21. ¿Hay alguno que no se pueda formar?
5. Ahora escriban: carta mostrando = 1, carta dada vuelta = 0. El 5 es 00101.
6. ¿Cuál es el número más grande que se puede formar con las cinco? ¿Y el más chico?
7. Desafío: cuenten de 0 a 31 en orden, moviendo las cartas. ¿Qué carta cambia todas las veces?

### Variante: Más cartas
¿Cuántos puntos tendría la sexta carta? ¿Hasta qué número llegaríamos?

### Variante: Contar con los dedos
Con cada dedo levantado o bajado, como si fueran cartas, ¿hasta cuánto se puede contar con una mano?

## Cierre
- ¿Por qué las computadoras usan solo dos estados?
- ¿Qué otras cosas tienen dos estados (una lamparita, una puerta, un silbato)?

## Notas para el educador
- No hace falta saber nada de computación, ni para el dirigente ni para los chicos: la gracia es descubrir cómo piensa una computadora jugando.
- La carta de 1 es la que cambia siempre: por eso todos los números impares la tienen mostrando.

---
**Fuente:** adaptada de la lección «How binary digits work» de [CS Unplugged](https://www.csunplugged.org/en/topics/binary-numbers/how-binary-digits-work/), del Computer Science Education Research Group de la Universidad de Canterbury (Nueva Zelanda), publicada bajo licencia [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.es). El texto y la adaptación de esta ficha son de Fogata de Recursos (2026).
