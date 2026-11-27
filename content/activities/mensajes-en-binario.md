---
# ========== METADATOS OBLIGATORIOS ==========
title: "Mensajes en Binario"
duration: "45 minutos"
layout: "layouts/activity.njk"
permalink: "/activities/mensajes-en-binario/"
description: "Cada letra se convierte en un número y cada número en ceros y unos. Así la patrulla manda mensajes secretos con la linterna, el silbato o dibujitos, como hace una computadora."
summary: "Mandar mensajes secretos convirtiendo letras en binario."

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
  - "Las cartas binarias (ver «Las Cartas Binarias»)"
  - "Una tabla con las letras numeradas: A = 1, B = 2… Z = 27 (con la Ñ)"
  - "Papel y lápiz"
  - "Una linterna o un silbato"
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
activity_code: "desenchufada-A02"
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
  - title: "CS Unplugged, «Codes for letters using binary representation»"
    url: "https://www.csunplugged.org/en/topics/binary-numbers/codes-for-letters-using-binary-representation/"
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
image_prompt: "Ultra-wide cinematic website hero banner. Two patrols of children scouts at dusk in a field, one flashing a flashlight on and off, the other writing zeros and ones on paper. Left side contains open negative space reserved for website interface elements. No text, no letters, no words. Wide shot."

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

# Mensajes en Binario

## De qué se trata
Si a cada letra le damos un número (A = 1, B = 2…), y cada número lo escribimos en binario con cinco cartas, cualquier palabra se puede escribir solo con ceros y unos. Eso es lo que hace una computadora cada vez que escribís un mensaje. La patrulla codifica una palabra y se la manda a otra con linterna (prendida = 1, apagada = 0), silbato o dibujos.

## Cómo se juega
1. Repasen las cartas binarias: cinco cartas, 16, 8, 4, 2 y 1 puntos.
2. Miren la tabla de letras. ¿Qué número es la S? ¿Y la O?
3. Cada patrulla elige una palabra corta (por ejemplo, FOGÓN o SCOUT) y la convierte: letra → número → cinco ceros y unos.
4. Escriban el mensaje en el papel, letra por letra.
5. Ahora mándenlo a otra patrulla: con la linterna (prendida = 1, apagada = 0, un destello por número), con el silbato (pitazo largo = 1, corto = 0) o con dibujitos (sol = 1, luna = 0).
6. La otra patrulla lo anota y lo descifra.
7. ¿Llegó bien el mensaje? Si no, ¿dónde se equivocaron?

### Variante: Mensaje en la ropa
Hagan una pulsera o un collar con cuentas de dos colores que diga su nombre en binario.

## Para cerrar
- ¿Cuántos ceros y unos hacen falta para una palabra de cinco letras?
- ¿Cómo harían para que entren las mayúsculas, los números o los emojis?

## Notas para educadores
- No hace falta saber nada de computación, ni para el dirigente ni para los chicos: la gracia es descubrir cómo piensa una computadora jugando.
- Pueden combinarlo con las señales de linterna o de silbato de la insignia Técnica Scout.

---
**Fuente:** adaptada de la lección «Codes for letters using binary representation» de [CS Unplugged](https://www.csunplugged.org/en/topics/binary-numbers/codes-for-letters-using-binary-representation/), del Computer Science Education Research Group de la Universidad de Canterbury (Nueva Zelanda), publicada bajo licencia [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.es). El texto y la adaptación de esta ficha son de Fogata de Recursos (2026).
