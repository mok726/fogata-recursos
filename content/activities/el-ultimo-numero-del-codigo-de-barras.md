---
# ========== METADATOS OBLIGATORIOS ==========
title: "El Último Número del Código de Barras"
duration: "45 minutos"
layout: "layouts/activity.njk"
permalink: "/activities/el-ultimo-numero-del-codigo-de-barras/"
description: "El último número del código de barras de cualquier producto no es casualidad: se calcula con los otros doce. Con una cuenta sencilla, descubrimos cómo el supermercado sabe si leyó bien el código."
summary: "Calcular el dígito verificador de un código de barras."

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
  - "Paquetes y latas vacíos con código de barras (de 13 dígitos)"
  - "Papel, lápiz y calculadora"
tools: []
responsible:
  - "Scouter"
prep_time: "10 minutos"
participants: "4-30"
location: "Interior"
space_required: "El local scout, con mesas"

# ========== OBJETIVOS DE DESARROLLO SOSTENIBLE ==========
sdgs:
  - 4
  - 9

# ========== INSIGNIAS / CÓDIGO ==========
activity_badges:
  - "desenchufada"
activity_code: "desenchufada-A04"
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
  - title: "CS Unplugged, «Product code check digits»"
    url: "https://www.csunplugged.org/en/topics/error-detection-and-correction/product-code-check-digits/"
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
active_component: 1

# ========== COMPLEJIDAD (escala 1-5) ==========
complexity_execution: 2
complexity_organizer: 2

# ========== TIPO PRINCIPAL ==========
main_type: "Juego"

# ========== IMAGEN PROMPT ==========
image_prompt: "Ultra-wide cinematic website hero banner. Teenage scouts at a table with empty food packages, copying barcode numbers into notebooks and doing sums with a calculator. Left side contains open negative space reserved for website interface elements. No text, no letters, no words. Wide shot."

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

# El Último Número del Código de Barras

## De qué se trata
Casi nadie revisa el ticket del supermercado porque confiamos en el código de barras. Y tiene razón: el último número del código es un «dígito verificador», que se calcula con los otros doce. Si la máquina lee mal un número, la cuenta no da, y la caja pide que se pase el producto de nuevo. Lo comprobamos con productos de verdad.

## Cómo se juega
1. Cada patrulla elige un paquete y copia los 13 números del código de barras.
2. Tapen el último número.
3. Sumen los números que están en los lugares impares (el 1.°, el 3.°, el 5.°… hasta el 11.°).
4. Sumen los números en los lugares pares (el 2.°, el 4.°… hasta el 12.°) y multipliquen esa suma por 3.
5. Sumen los dos resultados.
6. ¿Cuánto le falta a ese número para llegar a la próxima decena? Por ejemplo, si da 87, le faltan 3 para llegar a 90.
7. Destapen el último número. ¿Es el que calcularon?
8. Ahora cambien un número del código a propósito y hagan la cuenta. ¿Se dan cuenta del error?

### Variante: Detectives de códigos
Una patrulla copia códigos con un error escondido; la otra tiene que encontrar cuáles están mal.

## Para cerrar
- ¿Por qué no alcanza con sumar todos los números, sin multiplicar por 3?
- ¿Qué otros números usan un dígito verificador? (El CUIT y el CBU, por ejemplo.)

## Notas para educadores
- No hace falta saber nada de computación, ni para el dirigente ni para los chicos: la gracia es descubrir cómo piensa una computadora jugando.
- Los primeros tres números del código dicen de qué país es la empresa que lo registró: 779 es Argentina.

---
**Fuente:** adaptada de la lección «Product code check digits» de [CS Unplugged](https://www.csunplugged.org/en/topics/error-detection-and-correction/product-code-check-digits/), del Computer Science Education Research Group de la Universidad de Canterbury (Nueva Zelanda), publicada bajo licencia [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.es). El texto y la adaptación de esta ficha son de Fogata de Recursos (2026).
