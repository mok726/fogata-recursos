---
# ========== METADATOS OBLIGATORIOS ==========
title: "El Árbol de Búsqueda"
duration: "45 minutos"
layout: "layouts/activity.njk"
permalink: "/activities/el-arbol-de-busqueda/"
description: "Los chicos forman un árbol humano con sus tarjetas: los números más chicos van a la izquierda y los más grandes a la derecha. Después se busca un número recorriendo el árbol, como lo hace una computadora."
summary: "Armar un árbol humano para ordenar y buscar números."

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
age: "11-17 años"
age_group:
  - "scouts"
  - "caminantes"

# ========== LOGÍSTICA ==========
materials:
  - "Tarjetas con números (una por chico) o con nombres"
  - "Tiza o soga para marcar las ramas (opcional)"
tools: []
responsible:
  - "Scouter"
prep_time: "10 minutos"
participants: "4-30"
location: "Interior o exterior"
space_required: "Un patio o un salón amplio"

# ========== OBJETIVOS DE DESARROLLO SOSTENIBLE ==========
sdgs:
  - 4
  - 9

# ========== INSIGNIAS / CÓDIGO ==========
activity_badges:
  - "desenchufada"
activity_code: "desenchufada-D03"
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
  - title: "CS Unplugged, «Binary search trees»"
    url: "https://www.csunplugged.org/en/topics/data-structures-for-searching/binary-search-trees/"
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
image_prompt: "Ultra-wide cinematic website hero banner. Teenage scouts in a schoolyard standing in a branching tree formation holding number cards, one walking down the tree comparing numbers. Left side contains open negative space reserved for website interface elements. No text, no letters, no words. Wide shot."

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

# El Árbol de Búsqueda

## De qué se trata
Hay una forma muy usada por las computadoras para guardar datos y encontrarlos rápido: el árbol de búsqueda. El primero que llega es la raíz. Cada uno que llega después compara su número con el de la raíz: si es más chico, se va a la izquierda; si es más grande, a la derecha. Y así sigue comparando hasta encontrar un lugar libre. Al final, para buscar un número, se arranca por la raíz y se va eligiendo izquierda o derecha. ¡Se encuentra muy rápido!

## Cómo se juega
1. Cada uno recibe una tarjeta con un número. No la muestren todavía.
2. El primero se para adelante: es la raíz del árbol.
3. El segundo se acerca a la raíz y compara: si su número es más chico, se para atrás a la izquierda; si es más grande, atrás a la derecha.
4. Cada uno que llega arranca desde la raíz y va comparando con cada persona que encuentra: izquierda si es más chico, derecha si es más grande, hasta encontrar un lugar libre.
5. Cuando están todos, miren el árbol. ¿Qué forma tiene?
6. Ahora a buscar: el dirigente dice un número. Uno arranca en la raíz y va bajando por el árbol, preguntando a cada uno su número y eligiendo izquierda o derecha.
7. Cuenten a cuántas personas tuvo que preguntar. ¿Y si el número no está?

### Variante: Con nombres
En lugar de números, usen nombres y ordenen por orden alfabético.

### Variante: Árbol torcido
¿Qué pasa si los chicos llegan en orden, del más chico al más grande? ¿Cómo queda el árbol? ¿Sigue siendo rápido buscar?

## Para cerrar
- ¿Por qué se encuentra tan rápido un número en el árbol?
- ¿Qué pasó con el árbol cuando llegaron en orden?

## Notas para educadores
- No hace falta saber nada de computación, ni para el dirigente ni para los chicos: la gracia es descubrir cómo piensa una computadora jugando.
- No confundir con la búsqueda binaria en una lista ordenada (ver «Adiviná el Número en Pocas Preguntas»): se parecen, pero son ideas distintas.

---
**Fuente:** adaptada de la lección «Binary search trees» de [CS Unplugged](https://www.csunplugged.org/en/topics/data-structures-for-searching/binary-search-trees/), del Computer Science Education Research Group de la Universidad de Canterbury (Nueva Zelanda), publicada bajo licencia [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.es). El texto y la adaptación de esta ficha son de Fogata de Recursos (2026).
