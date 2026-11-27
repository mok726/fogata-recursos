---
# ========== METADATOS OBLIGATORIOS ==========
title: "La Red de Ordenamiento"
duration: "45 minutos"
layout: "layouts/activity.njk"
permalink: "/activities/la-red-de-ordenamiento/"
description: "Se dibuja en el piso una red con caminos y círculos. Seis chicos con números entran por un lado y, en cada círculo, el más chico va a la izquierda y el más grande a la derecha. Cuando salen, ¡están ordenados!"
summary: "Ordenar números corriendo por una red dibujada en el piso."

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
  - "Tiza o cinta de papel para dibujar la red en el piso"
  - "Seis tarjetas con números (o con palabras para ordenar alfabéticamente)"
  - "Un cronómetro"
tools: []
responsible:
  - "Scouter"
prep_time: "10 minutos"
participants: "4-30"
location: "Exterior"
space_required: "Un patio con piso para dibujar con tiza"

# ========== OBJETIVOS DE DESARROLLO SOSTENIBLE ==========
sdgs:
  - 4
  - 9

# ========== INSIGNIAS / CÓDIGO ==========
activity_badges:
  - "desenchufada"
activity_code: "desenchufada-D04"
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
  - title: "CS Unplugged, «Sorting networks»"
    url: "https://www.csunplugged.org/en/topics/sorting-networks/reinforcing-numeracy-through-a-sorting-network/"
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
active_component: 4

# ========== COMPLEJIDAD (escala 1-5) ==========
complexity_execution: 2
complexity_organizer: 2

# ========== TIPO PRINCIPAL ==========
main_type: "Juego"

# ========== IMAGEN PROMPT ==========
image_prompt: "Ultra-wide cinematic website hero banner. Children scouts walking along chalk lines drawn on a schoolyard, meeting in pairs at chalk circles to compare number cards, others watching. Left side contains open negative space reserved for website interface elements. No text, no letters, no words. Wide shot."

# ========== CLASIFICACIONES ADICIONALES ==========
activity_type:
  - "Juego"
  - "Actividad física"
category:
  - "Ciencia"
  - "Tecnología"
skills:
  - "Alfabetización digital"
  - "Trabajo en equipo"
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

# La Red de Ordenamiento

## Resumen
Las computadoras a veces ordenan muchas cosas al mismo tiempo, en paralelo. Para verlo, se dibuja en el piso con tiza una red de ordenamiento para seis personas: seis caminos que se juntan de a dos en círculos, que se llaman nodos. Cada uno lleva un número. Caminan por la red y en cada círculo se encuentran dos: comparan, el más chico sale por la izquierda y el más grande por la derecha. Al final de la red, todos salen ordenados, sin importar cómo entraron.

## Preparación
1. Dibujá con tiza, en un extremo del espacio, una fila de seis casillas de entrada, una al lado de la otra y separadas por un metro. Numeralas del 1 al 6, de izquierda a derecha, mirando hacia donde se va a caminar.
2. Del otro lado, a unos 12 metros, dibujá seis casillas de salida iguales, también numeradas del 1 al 6 de izquierda a derecha.
3. Uní cada casilla de entrada con la de salida del mismo número con una línea recta: son los seis caminos.
4. Ahora dibujá los nodos. Un nodo es un círculo grande puesto entre dos caminos: los dos caminos se desvían hacia el círculo, se juntan ahí y vuelven a salir hacia sus lugares. En el nodo, el que tiene el número menor sigue por la salida de la izquierda (el camino de número más bajo) y el que tiene el número mayor sigue por la de la derecha (el camino de número más alto).
5. Los nodos van en cinco filas, separadas por unos dos pasos. En cada fila, los caminos que no tienen nodo siguen derecho:
   - Fila 1: un nodo entre los caminos 1 y 2, otro entre el 3 y el 4, y otro entre el 5 y el 6.
   - Fila 2: un nodo entre el 1 y el 3, otro entre el 2 y el 5, y otro entre el 4 y el 6.
   - Fila 3: igual que la fila 1 (1 con 2, 3 con 4 y 5 con 6).
   - Fila 4: un nodo entre el 2 y el 3, y otro entre el 4 y el 5. Los caminos 1 y 6 siguen derecho.
   - Fila 5: un solo nodo, entre el 3 y el 4.
6. En la fila 2 algunas líneas se cruzan sin que haya un círculo. Ahí no pasa nada: cada uno sigue por su línea. Para que no se confundan, dibujá los nodos bien grandes y, si podés, con otro color de tiza.
7. En total son 12 nodos. Antes de jugar, probá la red vos con seis tarjetas, para verificar que salen ordenadas.

## Desarrollo
1. Seis chicos reciben una tarjeta con un número y se paran en los casilleros de entrada, en cualquier orden.
2. Caminen por su camino hasta el primer círculo. Ahí se van a encontrar con otro compañero.
3. Comparen sus números: el más chico sigue por la salida de la izquierda y el más grande por la de la derecha. Si en una fila su camino no tiene nodo, sigan derecho hasta la fila siguiente.
4. Esperen en cada círculo a que llegue su compañero: no se adelanten.
5. Sigan hasta el final.
6. Cuando todos llegan a las casillas de salida, miren los números: ¿quedaron ordenados de menor a mayor, del 1 al 6?
7. Prueben con otro orden de entrada, y después contra reloj: ¿qué patrulla lo hace más rápido sin equivocarse?

### Variante: Palabras
Usen palabras y ordénenlas alfabéticamente, o tarjetas con fechas de la historia.

### Variante: Al revés
¿Qué pasa si en cada círculo el más grande va a la izquierda?

## Cierre
- ¿Por qué siempre salen ordenados?
- ¿Qué tareas se hacen más rápido si las hacen varios a la vez? ¿Cuáles no?

## Notas para el educador
- No hace falta saber nada de computación, ni para el dirigente ni para los chicos: la gracia es descubrir cómo piensa una computadora jugando.
- Varias comparaciones ocurren al mismo tiempo en distintos círculos: eso es el «procesamiento en paralelo», que hace que las computadoras actuales sean tan rápidas.

---
**Fuente:** adaptada de la lección «Sorting networks» de [CS Unplugged](https://www.csunplugged.org/en/topics/sorting-networks/reinforcing-numeracy-through-a-sorting-network/), del Computer Science Education Research Group de la Universidad de Canterbury (Nueva Zelanda), publicada bajo licencia [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.es). El texto y la adaptación de esta ficha son de Fogata de Recursos (2026).
