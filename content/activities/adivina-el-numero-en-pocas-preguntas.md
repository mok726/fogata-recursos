---
# ========== METADATOS OBLIGATORIOS ==========
title: "Adiviná el Número en Pocas Preguntas"
duration: "30 minutos"
layout: "layouts/activity.njk"
permalink: "/activities/adivina-el-numero-en-pocas-preguntas/"
description: "Uno piensa un número del 1 al 100 y los demás lo tienen que adivinar con la menor cantidad de preguntas. Con la estrategia de partir por la mitad, siempre alcanza con siete."
summary: "Encontrar un número con la estrategia de partir por la mitad."

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
  - "Papel y lápiz"
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
activity_code: "desenchufada-D01"
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
  - title: "CS Unplugged, «How many guesses?»"
    url: "https://www.csunplugged.org/en/topics/searching-algorithms/how-many-guesses/"
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
image_prompt: "Ultra-wide cinematic website hero banner. Children scouts sitting in a circle, one holding a hidden paper with a number, others raising hands to guess, a chalkboard with crossed out ranges. Left side contains open negative space reserved for website interface elements. No text, no letters, no words. Wide shot."

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

# Adiviná el Número en Pocas Preguntas

## Resumen
Uno piensa un número del 1 al 100. Los demás preguntan un número y solo pueden recibir tres respuestas: «más alto», «más bajo» o «¡ese!». Si se pregunta al azar, puede tardar muchísimo. Pero si siempre se pregunta el número del medio de lo que queda, nunca hacen falta más de siete preguntas. Así buscan las computadoras en listas ordenadas: se llama búsqueda binaria.

## Desarrollo
1. Uno piensa un número del 1 al 100 y lo anota sin mostrarlo.
2. Los demás, por turno, preguntan un número. El que pensó contesta «más alto», «más bajo» o «¡ese!».
3. Cuenten cuántas preguntas hicieron falta.
4. Jueguen otra vez, pero ahora con una regla: siempre se pregunta el número del medio de lo que queda posible. Si arranca entre 1 y 100, la primera pregunta es 50.
5. Si la respuesta es «más alto», ahora queda entre 51 y 100: la próxima pregunta es 75. Y así.
6. Cuenten otra vez. ¿Cuántas preguntas hicieron falta?
7. Prueben con varios números. ¿Alguna vez hicieron falta más de siete?

### Variante: Del 1 al 1000
¿Cuántas preguntas harían falta? (Solo diez.)

### Variante: Diccionario
Busquen una palabra en un diccionario de papel con la misma estrategia: abrir por la mitad, después por la mitad de la mitad…

## Cierre
- ¿Por qué partir por la mitad funciona tan bien?
- ¿Funcionaría si los números estuvieran desordenados?

## Notas para el educador
- No hace falta saber nada de computación, ni para el dirigente ni para los chicos: la gracia es descubrir cómo piensa una computadora jugando.

---
**Fuente:** adaptada de la lección «How many guesses?» de [CS Unplugged](https://www.csunplugged.org/en/topics/searching-algorithms/how-many-guesses/), del Computer Science Education Research Group de la Universidad de Canterbury (Nueva Zelanda), publicada bajo licencia [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.es). El texto y la adaptación de esta ficha son de Fogata de Recursos (2026).
