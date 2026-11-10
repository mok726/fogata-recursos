// Tipos de actividad = formato: qué hacen los protagonistas (2026-11-06).
// summary: cards; description: página; when/notWhen: criterio de asignación.
module.exports = [
  {
    "id": "juego",
    "name": "Juego",
    "symbol": "toys",
    "summary": "Una actividad con reglas y un desafío, donde lo lúdico es el motor.",
    "description": "Actividad con reglas, un objetivo y un desafío o competencia, en la que el juego es el motor de la experiencia. Puede ser de interior o de exterior, cooperativo o competitivo.",
    "when": [
      "Hay reglas, un objetivo y una forma de ganar, superar o completar el desafío.",
      "El atractivo principal para los protagonistas es jugar."
    ],
    "notWhen": "Solo porque la actividad sea divertida o tenga un momento lúdico. Una charla con preguntas no es un juego."
  },
  {
    "id": "actividad-fisica",
    "name": "Actividad física",
    "symbol": "directions_run",
    "summary": "Deporte, carrera, posta o circuito con el esfuerzo corporal en el centro.",
    "description": "Actividad en la que el movimiento y el esfuerzo corporal son el centro: deportes, carreras, postas, circuitos o desafíos físicos.",
    "when": [
      "El cuerpo en movimiento es lo principal: correr, saltar, trepar, nadar, cargar.",
      "La actividad no se puede hacer sin un esfuerzo físico real."
    ],
    "notWhen": "Solo porque haya que desplazarse o estar al aire libre."
  },
  {
    "id": "dinamica-de-grupos",
    "name": "Dinámica de grupos",
    "symbol": "groups",
    "summary": "Rompehielos o juego cooperativo para conocerse o cohesionar al grupo.",
    "description": "Técnica breve y estructurada para que el grupo se conozca, se integre, mejore su comunicación o tome conciencia de cómo funciona: rompehielos, juegos cooperativos, dinámicas de confianza.",
    "when": [
      "El objetivo es el grupo mismo: conocerse, integrarse, confiar o cooperar.",
      "Es una técnica breve con consignas, a veces con una puesta en común sobre lo que pasó en el grupo."
    ],
    "notWhen": "Solo porque la actividad se haga en grupo o por patrullas."
  },
  {
    "id": "simulacion-juego-de-roles",
    "name": "Simulación / Juego de roles",
    "symbol": "theater_comedy",
    "summary": "Representar una situación o un personaje para vivirla desde adentro.",
    "description": "Los protagonistas representan una situación, un proceso o un personaje para vivirlo desde adentro: juego de roles, dramatización de un caso, simulación de una asamblea, de un mercado o de un ecosistema.",
    "when": [
      "Cada participante asume un rol o un personaje que no es el propio.",
      "Se recrea una situación real o posible para comprenderla o ensayar cómo actuar."
    ],
    "notWhen": "Cuando se actúa una obra solo como producto artístico (eso es Expresión artística)."
  },
  {
    "id": "debate-dialogo",
    "name": "Debate / Diálogo",
    "symbol": "forum",
    "summary": "Discusión organizada, ronda o asamblea sobre una pregunta.",
    "description": "Conversación organizada alrededor de una pregunta o un tema: debate con posturas, ronda de opiniones, asamblea, mesa redonda o diálogo guiado.",
    "when": [
      "El centro de la actividad es la conversación sobre un tema o pregunta.",
      "Hay posturas, argumentos o una puesta en común organizada."
    ],
    "notWhen": "Solo por la puesta en común final de otra actividad."
  },
  {
    "id": "reflexion",
    "name": "Reflexión",
    "symbol": "psychology_alt",
    "summary": "Pensar sobre uno mismo o sobre lo vivido es el núcleo de la actividad.",
    "description": "Actividad cuyo núcleo es pensar sobre uno mismo, sobre lo vivido o sobre un tema de fondo: fogón de reflexión, diario personal, carta a uno mismo, revisión de un compromiso.",
    "when": [
      "La reflexión es la actividad en sí, no un cierre.",
      "Se propone un tiempo y un formato para pensar, escribir o compartir algo personal."
    ],
    "notWhen": "Por la ronda de cierre o evaluación de otra actividad. Casi toda actividad buena tiene un momento de reflexión, y eso no la convierte en este tipo."
  },
  {
    "id": "indagacion",
    "name": "Indagación",
    "symbol": "search",
    "summary": "Buscar respuestas fuera del grupo: encuesta, entrevista, relevamiento, fuentes.",
    "description": "Los protagonistas buscan respuestas fuera de lo que ya saben: encuestas, entrevistas, relevamientos, búsqueda en libros o en internet, investigación de un tema para presentarlo.",
    "when": [
      "Hay una pregunta y hay que salir a buscar la información (personas, lugares, fuentes).",
      "El resultado es lo que se averiguó."
    ],
    "notWhen": "Cuando la información ya viene dada en la actividad y solo hay que leerla o escucharla."
  },
  {
    "id": "experimento",
    "name": "Experimento",
    "symbol": "science",
    "summary": "Probar algo y medir o comparar qué pasa.",
    "description": "Los protagonistas ponen algo a prueba y miden, comparan o registran qué pasa: experimentos, pruebas de materiales, ensayos con variables.",
    "when": [
      "Hay una pregunta o predicción y una prueba para comprobarla.",
      "Se observa, mide o compara un resultado."
    ],
    "notWhen": "Cuando se fabrica algo siguiendo instrucciones sin poner nada a prueba (eso es Taller / Construcción)."
  },
  {
    "id": "expresion-artistica",
    "name": "Expresión artística",
    "symbol": "brush",
    "summary": "Dibujo, música, teatro, escritura o video como producto.",
    "description": "El producto de la actividad es una obra: dibujo, pintura, música, canción, teatro, poesía, cuento escrito, fotografía o video.",
    "when": [
      "Los protagonistas crean una obra artística propia.",
      "La obra es el resultado principal de la actividad."
    ],
    "notWhen": "Cuando el dibujo o el afiche es solo un soporte para comunicar otra cosa (si es para difundir un mensaje, es Campaña)."
  },
  {
    "id": "taller-construccion",
    "name": "Taller / Construcción",
    "symbol": "handyman",
    "summary": "Fabricar algo con las manos: manualidad, maqueta, pionerismo, cocina.",
    "description": "Los protagonistas fabrican algo con las manos: manualidades, maquetas, objetos útiles, construcciones de pionerismo, herramientas, cocina.",
    "when": [
      "Al final hay un objeto, una construcción o una comida hecha por los protagonistas.",
      "Se trabaja con materiales y herramientas."
    ],
    "notWhen": "Cuando lo que se hace es una obra artística (Expresión artística) o una prueba para ver qué pasa (Experimento)."
  },
  {
    "id": "salida-exploracion",
    "name": "Salida / Exploración",
    "symbol": "travel_explore",
    "summary": "Salir a recorrer un lugar: excursión, rastreo, observación de campo, orientación.",
    "description": "Los protagonistas salen a recorrer y descubrir un lugar: excursión, caminata, rastreo, observación de campo, carrera de orientación, exploración del barrio.",
    "when": [
      "La actividad ocurre en un recorrido fuera del lugar habitual de reunión, o explorando un espacio.",
      "Descubrir el lugar es parte central de la experiencia."
    ],
    "notWhen": "Solo porque la actividad se haga al aire libre o en el patio."
  },
  {
    "id": "campana",
    "name": "Campaña",
    "symbol": "campaign",
    "summary": "Los protagonistas producen un mensaje para que llegue a otros.",
    "description": "Los protagonistas preparan y difunden un mensaje para otras personas: afiches, charla a la comunidad, publicaciones en redes, folletos, campaña de concientización.",
    "when": [
      "El mensaje está dirigido a personas fuera del grupo.",
      "Hay un producto de difusión o una acción para que el mensaje llegue."
    ],
    "notWhen": "Cuando el objetivo es solo que los propios protagonistas tomen conciencia de un tema."
  },
  {
    "id": "servicio",
    "name": "Servicio",
    "symbol": "volunteer_activism",
    "summary": "Una acción concreta en beneficio de otros o de la comunidad.",
    "description": "Acción concreta en beneficio de otras personas, de la comunidad o del ambiente: colecta, limpieza de un espacio, ayuda a una institución, plantación, acompañamiento.",
    "when": [
      "Hay destinatarios reales que se benefician de lo que se hace.",
      "La acción se lleva a cabo, no solo se planea o se discute."
    ],
    "notWhen": "Cuando solo se reflexiona sobre la solidaridad o se diseña una acción que no se lleva a cabo."
  },
  {
    "id": "proyecto",
    "name": "Proyecto",
    "symbol": "event_note",
    "summary": "Propuesta de varias reuniones que el grupo planifica, ejecuta y evalúa.",
    "description": "Propuesta que se extiende por varias reuniones y que el grupo planifica, ejecuta y evalúa: un objetivo propio, etapas, tareas repartidas y un cierre.",
    "when": [
      "Dura más de una reunión y tiene etapas.",
      "Los protagonistas planifican, se reparten tareas y evalúan el resultado."
    ],
    "notWhen": "Cuando es una actividad de una sola reunión, aunque incluya algo de planificación."
  },
  {
    "id": "narracion",
    "name": "Narración",
    "symbol": "auto_stories",
    "summary": "Contar o escuchar una historia: cuentos, relatos, leyendas.",
    "description": "El centro de la actividad es una historia que se cuenta o se escucha: cuentos, relatos de Baden-Powell, el Libro de la Selva, leyendas, historias de vida.",
    "when": [
      "La historia es el núcleo de la actividad, no un ejemplo al pasar.",
      "Se cuenta, se lee o se escucha un relato completo."
    ],
    "notWhen": "Cuando los protagonistas escriben su propio cuento como producto (eso es Expresión artística)."
  },
  {
    "id": "visita-charla",
    "name": "Visita / Charla",
    "symbol": "co_present",
    "summary": "Conocer un lugar o escuchar a alguien que sabe: visita a una fábrica, charla de un sinodal.",
    "description": "Se aprende de una persona o un lugar externo: visita a un taller, una fábrica, un museo o una institución, o la charla de un sinodal o especialista.",
    "when": [
      "Hay una persona experta o un lugar que se visita.",
      "Lo principal es escuchar, preguntar y conocer de primera mano."
    ],
    "notWhen": "Cuando el lugar es solo el escenario de otra actividad (por ejemplo, un juego en una plaza)."
  },
  {
    "id": "ceremonia",
    "name": "Ceremonia",
    "symbol": "local_fire_department",
    "summary": "Un rito con símbolos y significado para el grupo: promesas, pasajes, aperturas.",
    "description": "Acto con símbolos y un significado especial para el grupo: promesa, pasaje de rama, apertura o cierre de campamento, fogón ceremonial, entrega de insignias.",
    "when": [
      "Hay un rito con símbolos, palabras o gestos establecidos.",
      "Marca un momento significativo para una persona o para el grupo."
    ],
    "notWhen": "Solo porque la actividad termine con un aplauso o una entrega informal."
  },
  {
    "id": "cambio-de-habitos",
    "name": "Cambio de hábitos",
    "symbol": "event_repeat",
    "summary": "Adoptar o dejar una conducta y sostenerla durante días o semanas.",
    "description": "Adoptar o dejar una conducta y sostenerla durante días o semanas, con registro o seguimiento, y revisarla al final. Suele hacerse fuera de la reunión, en casa o con la familia: ducharse más rápido, ir caminando, dejar el plástico descartable, llevar un diario de comidas o de sueño.",
    "when": [
      "El núcleo es mantener una conducta en el tiempo, no hacerla una sola vez.",
      "Hay algún registro, seguimiento o revisión de cómo fue."
    ],
    "notWhen": "Cuando se hace una sola vez (por ejemplo, cambiar una lámpara) o cuando el centro es investigar, debatir o producir algo."
  }
];
