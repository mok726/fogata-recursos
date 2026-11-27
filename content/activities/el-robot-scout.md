---
# ========== METADATOS OBLIGATORIOS ==========
title: "El Robot Scout"
duration: "30 minutos"
layout: "layouts/activity.njk"
permalink: "/activities/el-robot-scout/"
description: "Un lobato hace de robot y solo puede moverse con órdenes exactas: «adelante», «girá a la izquierda», «girá a la derecha». Otro hace de programador y tiene que llevarlo a rescatar un muñeco."
summary: "Programar a un compañero robot para que llegue a un lugar."

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
age: "7-11 años"
age_group:
  - "manada"

# ========== LOGÍSTICA ==========
materials:
  - "Una cuadrícula en el piso (baldosas o tiza), de 5 × 5"
  - "Un muñeco o un pañuelo para «rescatar»"
  - "Tarjetas con flechas: adelante, girar a la izquierda, girar a la derecha"
tools: []
responsible:
  - "Scouter"
prep_time: "10 minutos"
participants: "4-30"
location: "Interior o exterior"
space_required: "Un piso con baldosas o una cuadrícula marcada con tiza"

# ========== OBJETIVOS DE DESARROLLO SOSTENIBLE ==========
sdgs:
  - 4
  - 9

# ========== INSIGNIAS / CÓDIGO ==========
activity_badges:
  - "desenchufada"
activity_code: "desenchufada-C01"
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
  - title: "CS Unplugged, «Rescue Mission»"
    url: "https://www.csunplugged.org/en/topics/kidbots/rescue-mission/"
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
active_component: 3

# ========== COMPLEJIDAD (escala 1-5) ==========
complexity_execution: 2
complexity_organizer: 2

# ========== TIPO PRINCIPAL ==========
main_type: "Juego"

# ========== IMAGEN PROMPT ==========
image_prompt: "Ultra-wide cinematic website hero banner. Young children scouts playing on a chalk grid in a schoolyard, one acting as a robot taking a step, another giving commands, a toy to rescue in a square. Left side contains open negative space reserved for website interface elements. No text, no letters, no words. Wide shot."

# ========== CLASIFICACIONES ADICIONALES ==========
activity_type:
  - "Juego"
  - "Experimento"
category:
  - "Ciencia"
  - "Tecnología"
skills:
  - "Alfabetización digital"
  - "Comunicación"
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

# El Robot Scout

## De qué se trata
Un robot no entiende «andá para allá»: solo entiende órdenes exactas. En la cuadrícula del piso, un lobato es el robot y solo sabe tres cosas: avanzar un casillero, girar a la izquierda y girar a la derecha (sin moverse del lugar). Otro es el programador y tiene que guiarlo hasta el muñeco que hay que rescatar. Un tercero es el probador: mira y avisa cuando algo sale mal. Cuando el robot hace algo que no queríamos, ¡encontramos un error en el programa!

## Cómo se juega
1. Marquen la cuadrícula. Pongan el muñeco en un casillero y al robot en otro.
2. Repartan los papeles: robot, programador y probador.
3. El programador da las órdenes de a una: «Adelante», «Girá a la izquierda», «Girá a la derecha».
4. El robot hace exactamente lo que le dicen, nada más. Si la orden lo saca de la cuadrícula, se queda quieto.
5. Si el robot no llega al muñeco, el probador avisa «¡Error!» y entre los tres buscan qué orden estuvo mal.
6. Cuando el robot rescata al muñeco, se cambian los papeles.
7. Más difícil: el programador escribe todas las órdenes con tarjetas antes de empezar, y después el robot las sigue de una.

### Variante: Obstáculos
Pongan casilleros prohibidos (un «pantano») que el robot no puede pisar.

## Para cerrar
- ¿Por qué el robot no entiende «andá para allá»?
- ¿Qué hicieron cuando el programa tenía un error?

## Notas para educadores
- No hace falta saber nada de computación, ni para el dirigente ni para los chicos: la gracia es descubrir cómo piensa una computadora jugando.
- Los errores son parte del juego. Las computadoras también fallan cuando el programa está mal, y los programadores pasan mucho tiempo buscándolos.

---
**Fuente:** adaptada de la lección «Rescue Mission» de [CS Unplugged](https://www.csunplugged.org/en/topics/kidbots/rescue-mission/), del Computer Science Education Research Group de la Universidad de Canterbury (Nueva Zelanda), publicada bajo licencia [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.es). El texto y la adaptación de esta ficha son de Fogata de Recursos (2026).
