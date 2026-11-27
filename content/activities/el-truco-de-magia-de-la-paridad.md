---
# ========== METADATOS OBLIGATORIOS ==========
title: "El Truco de Magia de la Paridad"
duration: "45 minutos"
layout: "layouts/activity.njk"
permalink: "/activities/el-truco-de-magia-de-la-paridad/"
description: "Un truco de magia que parece imposible: alguien da vuelta una carta mientras el mago no mira, y el mago descubre cuál fue. El secreto es el mismo que usan las computadoras para detectar errores."
summary: "Hacer un truco de magia que esconde cómo se detectan errores."

# ========== AUTORÍA Y FUENTES ==========
author:
  - "Mariano S. Cosentino"
source:
  - "Inspirada en CS Unplugged (Universidad de Canterbury, CC BY-SA 4.0)"

# ========== IMAGEN Y ESTADO ==========
original: true
Origin: "Actividad adaptada de una lección de CS Unplugged (CC BY-SA 4.0)"
version: "0.99"

# ========== CLASIFICACIÓN ==========
branch:
  - "Comunidad"
age: "7-17 años"
age_group:
  - "manada"
  - "scouts"
  - "caminantes"

# ========== LOGÍSTICA ==========
materials:
  - "36 cartas o cuadrados de cartón con una cara de cada color (o naipes boca arriba y boca abajo)"
  - "Una superficie plana"
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
activity_code: "desenchufada-A03"
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
  - title: "CS Unplugged, «Parity magic»"
    url: "https://www.csunplugged.org/en/topics/error-detection-and-correction/parity-magic/"
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
image_prompt: "Ultra-wide cinematic website hero banner. Children scouts gathered around a table watching a leader perform a card trick with a grid of two-colored square cards. Left side contains open negative space reserved for website interface elements. No text, no letters, no words. Wide shot."

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

# El Truco de Magia de la Paridad

## De qué se trata
El dirigente pide que alguien arme un cuadrado de cinco por cinco cartas, cada una de un color o del otro, como quiera. Después, «para hacerlo más difícil», el mago agrega una fila y una columna más. Se da vuelta, alguien cambia una sola carta y el mago la encuentra al toque. ¿El truco? Las cartas que agregó hacen que en cada fila y cada columna haya siempre una cantidad par de cartas de un color. Cuando se da vuelta una, se rompe ese patrón. Las computadoras hacen lo mismo para darse cuenta cuando un dato llega con un error.

## Cómo se juega
1. El mago (un dirigente) pide a un voluntario que arme un cuadrado de 5 × 5 cartas, eligiendo él el color de cada una.
2. El mago agrega una columna más a la derecha y una fila más abajo, «para hacerlo más difícil». En secreto, elige el color de cada carta nueva para que en cada fila y columna haya una cantidad par de cartas oscuras.
3. El mago se da vuelta. El voluntario cambia una sola carta, cualquiera.
4. El mago mira y encuentra la carta: busca la fila y la columna que tienen una cantidad impar de cartas oscuras. Donde se cruzan, está la carta cambiada.
5. Repitan un par de veces. ¿Alguien descubre el secreto?
6. El mago explica el truco. Ahora, en patrullas, cada uno prueba ser el mago.

### Variante: Dos cartas
¿Qué pasa si se dan vuelta dos cartas? ¿El mago las puede encontrar?

## Para cerrar
- ¿Para qué le serviría esto a una computadora o a un celular?
- ¿Dónde más se usa algo para comprobar que no hay errores (el número de un documento, el CBU)?

## Notas para educadores
- No hace falta saber nada de computación, ni para el dirigente ni para los chicos: la gracia es descubrir cómo piensa una computadora jugando.
- Se llama «bit de paridad»: un dato extra que se agrega para poder detectar errores. Lo usan los discos, las redes y las memorias.

---
**Fuente:** adaptada de la lección «Parity magic» de [CS Unplugged](https://www.csunplugged.org/en/topics/error-detection-and-correction/parity-magic/), del Computer Science Education Research Group de la Universidad de Canterbury (Nueva Zelanda), publicada bajo licencia [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.es). El texto y la adaptación de esta ficha son de Fogata de Recursos (2026).
