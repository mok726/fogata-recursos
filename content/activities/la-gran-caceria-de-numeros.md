---
# ========== METADATOS OBLIGATORIOS ==========
title: "La Gran Cacería de Números"
duration: "45 minutos"
layout: "layouts/activity.njk"
permalink: "/activities/la-gran-caceria-de-numeros/"
description: "Hay que encontrar un número entre tarjetas boca abajo, dando vuelta la menor cantidad posible. Si están desordenadas, hay que revisar una por una; si están ordenadas, se puede partir por la mitad y encontrarlo rapidísimo."
summary: "Comparar buscar en desorden y en orden."

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
age: "7-17 años"
age_group:
  - "manada"
  - "scouts"
  - "caminantes"

# ========== LOGÍSTICA ==========
materials:
  - "Dos juegos de 15 tarjetas numeradas, boca abajo (o vasitos con un número escondido abajo)"
  - "Papel y lápiz para anotar"
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
activity_code: "desenchufada-D02"
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
  - title: "CS Unplugged, «The great number hunt (sorted)»"
    url: "https://www.csunplugged.org/en/topics/searching-algorithms/the-great-number-hunt-sorted/"
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
image_prompt: "Ultra-wide cinematic website hero banner. Pairs of children scouts kneeling on the floor flipping numbered cards laid face down in a row, tallying how many flips they used. Left side contains open negative space reserved for website interface elements. No text, no letters, no words. Wide shot."

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

# La Gran Cacería de Números

## Resumen
Se ponen tarjetas boca abajo en fila, cada una con un número. Hay que encontrar uno dando vuelta la menor cantidad de tarjetas. En la primera ronda están mezcladas: no queda otra que ir de a una. En la segunda ronda están ordenadas de menor a mayor: ahora se puede dar vuelta la del medio y saber si el número está a la izquierda o a la derecha. La diferencia es enorme. Por eso a las computadoras les conviene tener las cosas ordenadas.

## Desarrollo
1. En parejas: uno pone 15 tarjetas boca abajo, mezcladas, y le dice al otro qué número tiene que encontrar.
2. El otro da vuelta tarjetas de a una hasta encontrarlo. Cuenten cuántas dio vuelta.
3. Repitan con otro número. ¿Hay alguna forma más rápida? (En desorden, no.)
4. Ahora pongan las tarjetas ordenadas de menor a mayor, boca abajo. El que busca no sabe qué números hay, pero sabe que están en orden.
5. Den vuelta la del medio. ¿El número que buscan es más grande o más chico? Así saben de qué lado seguir.
6. Sigan partiendo por la mitad lo que queda. Cuenten cuántas tarjetas dieron vuelta.
7. Comparen las dos formas. ¿Cuál fue más rápida?

## Cierre
- ¿Qué cosas de la vida diaria están ordenadas para encontrarlas rápido (la guía de teléfonos, el diccionario, los libros de la biblioteca)?
- ¿Vale la pena ordenar algo si solo se va a buscar una vez?

## Notas para el educador
- No hace falta saber nada de computación, ni para el dirigente ni para los chicos: la gracia es descubrir cómo piensa una computadora jugando.
- Conviene jugar antes «Adiviná el Número en Pocas Preguntas», de esta misma insignia.

---
**Fuente:** adaptada de la lección «The great number hunt (sorted)» de [CS Unplugged](https://www.csunplugged.org/en/topics/searching-algorithms/the-great-number-hunt-sorted/), del Computer Science Education Research Group de la Universidad de Canterbury (Nueva Zelanda), publicada bajo licencia [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.es). El texto y la adaptación de esta ficha son de Fogata de Recursos (2026).
