---
# ========== METADATOS OBLIGATORIOS ==========
title: "Apretar Imágenes"
duration: "45 minutos"
layout: "layouts/activity.njk"
permalink: "/activities/apretar-imagenes/"
description: "En lugar de dictar cuadradito por cuadradito, se dice cuántos blancos y cuántos negros vienen seguidos. Así se usa mucho menos espacio: es el truco que usan las computadoras para comprimir imágenes."
summary: "Comprimir un dibujo contando cuadraditos seguidos."

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
  - "Hojas cuadriculadas"
  - "Lápiz"
  - "Fichas con dibujos «apretados» preparadas"
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
activity_code: "desenchufada-B02"
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
  - title: "CS Unplugged, «Squeezing pictures into less space»"
    url: "https://www.csunplugged.org/en/topics/image-representation/squeezing-pictures-into-less-space/"
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
image_prompt: "Ultra-wide cinematic website hero banner. Children scouts filling in grid paper from short lists of numbers, comparing a long list of zeros and ones with a short compressed one. Left side contains open negative space reserved for website interface elements. No text, no letters, no words. Wide shot."

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

# Apretar Imágenes

## Resumen
Dictar un dibujo cuadradito por cuadradito es largo. Hay una forma más corta: en cada fila, en lugar de «blanco, blanco, blanco, negro, negro», se dice «3 blancos, 2 negros», o directamente «3, 2». Siempre se arranca por el blanco (si la fila empieza en negro, el primer número es 0). Así un dibujo ocupa muchos menos números, y se puede reconstruir igualito. Las computadoras hacen algo parecido para que las imágenes ocupen menos lugar.

## Preparación
1. Prepará dos o tres dibujos sencillos ya escritos en este código: cada fila es una lista de números.

## Desarrollo
1. Cada uno recibe una hoja cuadriculada y una ficha con el dibujo apretado.
2. Cada número dice cuántos cuadraditos seguidos se pintan de un mismo color. El primer número de la fila indica cuántos cuadraditos blancos van al principio; el segundo, cuántos negros vienen después; el tercero, cuántos blancos otra vez, y así se van alternando hasta completar la fila.
3. Si la fila empieza con 0, quiere decir que arranca directo en negro.
4. Pintá cada fila siguiendo los números.
5. ¿Qué dibujo apareció?
6. Ahora tomá el dibujo de «Pintar con Números» y escribilo apretado. ¿Cuántos números usaste antes y cuántos ahora?

## Cierre
- ¿Qué dibujos se aprietan mucho y cuáles casi nada?
- ¿Por qué es importante que las fotos ocupen poco para mandarlas por el celular?

## Notas para el educador
- No hace falta saber nada de computación, ni para el dirigente ni para los chicos: la gracia es descubrir cómo piensa una computadora jugando.
- Esta forma de comprimir se llama «codificación por longitud de serie». Los fax, por ejemplo, la usaban.
- Conviene jugar primero «Pintar con Números», de esta misma insignia.

---
**Fuente:** adaptada de la lección «Squeezing pictures into less space» de [CS Unplugged](https://www.csunplugged.org/en/topics/image-representation/squeezing-pictures-into-less-space/), del Computer Science Education Research Group de la Universidad de Canterbury (Nueva Zelanda), publicada bajo licencia [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.es). El texto y la adaptación de esta ficha son de Fogata de Recursos (2026).
