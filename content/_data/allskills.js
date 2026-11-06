// Habilidades (antes «competencias»), definidas por Mariano el 2026-11-06.
// summary: cards; description: definición; when/notWhen/frontier: criterio
// de asignación; group: bloque del índice (orden en skillGroups.js).
module.exports = [
  {
    "id": "investigacion",
    "name": "Investigación",
    "symbol": "search",
    "group": "Pensamiento y aprendizaje",
    "summary": "Formular preguntas, buscar información y analizarla para responderlas.",
    "description": "Capacidad de formular preguntas, buscar información en distintas fuentes, recopilar datos y analizarlos para ampliar conocimientos o responder interrogantes.",
    "when": [
      "La actividad propone investigar una pregunta o problema.",
      "Se deben consultar fuentes, entrevistar personas o recopilar información.",
      "Los participantes deben comparar, seleccionar y organizar datos para construir respuestas."
    ],
    "notWhen": [
      "La actividad consiste únicamente en observar algo.",
      "Se entrega toda la información y solo hay que reproducirla.",
      "Se realiza una búsqueda sin analizar ni utilizar lo encontrado."
    ],
    "frontier": "Investigar implica buscar información deliberadamente. Observar es percibir y registrar; no necesariamente investigar."
  },
  {
    "id": "observacion",
    "name": "Observación",
    "symbol": "visibility",
    "group": "Pensamiento y aprendizaje",
    "summary": "Percibir y registrar detalles, cambios y patrones del entorno.",
    "description": "Capacidad de percibir, identificar y registrar características, cambios, patrones y detalles del entorno mediante los sentidos y herramientas de observación.",
    "when": [
      "Se propone reconocer detalles o características.",
      "Hay que identificar cambios, diferencias o patrones.",
      "Se registran fenómenos, comportamientos o elementos del entorno."
    ],
    "notWhen": [
      "La observación es incidental y no tiene un propósito educativo.",
      "La actividad consiste exclusivamente en buscar información externa.",
      "Se presenta un objeto o fenómeno sin pedir que se lo examine."
    ],
    "frontier": "Observar es percibir y registrar. Investigar implica buscar respuestas; experimentar implica intervenir y probar."
  },
  {
    "id": "experimentacion",
    "name": "Experimentación",
    "symbol": "science",
    "group": "Pensamiento y aprendizaje",
    "summary": "Poner a prueba ideas o hipótesis y analizar los resultados.",
    "description": "Capacidad de poner a prueba ideas, hipótesis o procedimientos mediante experiencias prácticas controladas, modificando variables y analizando los resultados obtenidos.",
    "when": [
      "Se realizan pruebas para comprobar qué sucede.",
      "Se comparan resultados de diferentes procedimientos.",
      "Se modifican condiciones para observar sus efectos.",
      "Se ponen a prueba hipótesis o predicciones."
    ],
    "notWhen": [
      "Se realiza una manualidad siguiendo instrucciones.",
      "Se ejecuta una demostración sin participación activa.",
      "Se hace una actividad práctica sin poner a prueba ninguna idea."
    ],
    "frontier": "Experimentar no es simplemente hacer algo práctico. Tiene que existir una intención de probar y obtener información a partir de los resultados."
  },
  {
    "id": "pensamiento-cientifico",
    "name": "Pensamiento científico",
    "symbol": "biotech",
    "group": "Pensamiento y aprendizaje",
    "summary": "Explicar fenómenos razonando a partir de evidencias.",
    "description": "Capacidad de comprender fenómenos mediante el razonamiento basado en evidencias, la formulación de explicaciones, la elaboración de hipótesis y la revisión de conclusiones a partir de los resultados obtenidos.",
    "when": [
      "Se busca explicar por qué ocurre un fenómeno.",
      "Se relacionan evidencias con explicaciones.",
      "Se formulan hipótesis y se revisan a la luz de los resultados.",
      "Se construyen conclusiones fundamentadas."
    ],
    "notWhen": [
      "Simplemente se transmite información científica.",
      "Se realiza una experiencia práctica sin reflexión sobre sus resultados.",
      "Se utiliza vocabulario científico sin razonamiento científico."
    ],
    "frontier": "Esta habilidad no reemplaza Investigación ni Experimentación. Estas describen procesos concretos; Pensamiento científico representa la manera de construir y revisar explicaciones sobre el mundo."
  },
  {
    "id": "pensamiento-critico",
    "name": "Pensamiento crítico",
    "symbol": "psychology",
    "group": "Pensamiento y aprendizaje",
    "summary": "Analizar y evaluar ideas, fuentes y argumentos con fundamentos.",
    "description": "Capacidad de analizar información, ideas y argumentos de manera reflexiva, evaluar su validez y confiabilidad, reconocer supuestos y sesgos, y elaborar juicios fundamentados.",
    "when": [
      "Se comparan diferentes puntos de vista.",
      "Se evalúa la confiabilidad de una fuente.",
      "Se identifican prejuicios, contradicciones o argumentos débiles.",
      "Se deben justificar opiniones o conclusiones con fundamentos."
    ],
    "notWhen": [
      "Se pide expresar una opinión sin analizarla.",
      "Se responde una pregunta mediante la reproducción de información.",
      "Se discute un tema sin evaluar argumentos o evidencias."
    ],
    "frontier": "Pensar críticamente no significa simplemente pensar, opinar o cuestionar. Debe existir un análisis y una evaluación fundamentada."
  },
  {
    "id": "pensamiento-sistemico",
    "name": "Pensamiento sistémico",
    "symbol": "hub",
    "group": "Pensamiento y aprendizaje",
    "summary": "Comprender relaciones, dependencias y consecuencias dentro de un sistema.",
    "description": "Capacidad de comprender situaciones y fenómenos como sistemas compuestos por elementos interrelacionados, identificando relaciones, dependencias, causas y consecuencias dentro de un conjunto.",
    "when": [
      "Se analizan las relaciones entre diferentes elementos.",
      "Se estudian consecuencias indirectas de una acción.",
      "Se identifican interdependencias entre personas, comunidades o ecosistemas.",
      "Se comprende cómo un cambio en una parte afecta al conjunto."
    ],
    "notWhen": [
      "Se enumeran elementos sin relacionarlos.",
      "Se estudia un objeto de manera aislada.",
      "Se mencionan muchas variables sin analizar sus interacciones."
    ],
    "frontier": "La presencia de varios elementos no implica pensamiento sistémico. Deben analizarse sus relaciones e interdependencias."
  },
  {
    "id": "creatividad",
    "name": "Creatividad",
    "symbol": "lightbulb",
    "group": "Pensamiento y aprendizaje",
    "summary": "Generar ideas, enfoques o soluciones originales.",
    "description": "Capacidad de generar ideas, enfoques o soluciones originales y pertinentes, explorando distintas posibilidades y combinando elementos de maneras novedosas.",
    "when": [
      "Se propone inventar, diseñar o crear algo.",
      "Se buscan múltiples alternativas.",
      "Se resuelven desafíos mediante ideas originales.",
      "Se exploran formas diferentes de abordar una consigna."
    ],
    "notWhen": [
      "Se reproduce un modelo siguiendo instrucciones.",
      "Se realiza una manualidad sin decisiones creativas relevantes.",
      "Se utiliza un material novedoso, pero sin generar ideas propias."
    ],
    "frontier": "Creatividad no equivale a producción artística. Puede expresarse en soluciones, estrategias, diseños, relatos, juegos y muchas otras formas."
  },
  {
    "id": "autoconocimiento",
    "name": "Autoconocimiento",
    "symbol": "self_improvement",
    "group": "Desarrollo personal y autonomía",
    "summary": "Reconocer las propias emociones, fortalezas, límites e intereses.",
    "description": "Capacidad de reconocer y comprender las propias emociones, fortalezas, limitaciones, intereses, motivaciones y valores, identificando cómo influyen en los pensamientos, decisiones y comportamientos.",
    "when": [
      "Se invita a reconocer y expresar emociones propias.",
      "Se identifican fortalezas y dificultades personales.",
      "Se reflexiona sobre reacciones y comportamientos.",
      "Se reconocen intereses, motivaciones o aspectos del propio desempeño."
    ],
    "notWhen": [
      "Se trabaja exclusivamente sobre las emociones o necesidades de otras personas.",
      "Se habla de emociones sin promover su reconocimiento personal.",
      "Se trata de una actividad de convivencia sin reflexión sobre uno mismo."
    ],
    "frontier": "Autoconocimiento se refiere a comprenderse a uno mismo; empatía se refiere a comprender a los demás."
  },
  {
    "id": "planificacion-organizacion",
    "name": "Planificación y organización",
    "symbol": "event_note",
    "group": "Desarrollo personal y autonomía",
    "summary": "Fijar objetivos y ordenar tareas, tiempos y recursos para lograrlos.",
    "description": "Capacidad de establecer objetivos, ordenar tareas, administrar tiempos y recursos, anticipar dificultades y coordinar acciones para alcanzar un resultado.",
    "when": [
      "Se diseña un plan para alcanzar un objetivo.",
      "Se organizan actividades, eventos o proyectos.",
      "Se establecen prioridades y etapas.",
      "Se distribuyen tiempos, recursos y tareas para ejecutar un plan."
    ],
    "notWhen": [
      "Se cumplen instrucciones sin intervenir en la organización.",
      "Se realiza una tarea sencilla sin planificación significativa.",
      "Se participa de un proyecto sin tomar parte en su organización."
    ],
    "frontier": "Planificar es decidir anticipadamente cómo actuar; asumir el compromiso de hacerlo corresponde al valor Responsabilidad y Compromiso."
  },
  {
    "id": "resolucion-de-problemas",
    "name": "Resolución de problemas",
    "symbol": "extension",
    "group": "Desarrollo personal y autonomía",
    "summary": "Analizar un problema, buscar alternativas y evaluar la solución.",
    "description": "Capacidad de identificar y comprender problemas, analizar sus causas, generar y evaluar alternativas, seleccionar soluciones y revisar los resultados obtenidos.",
    "when": [
      "Se presenta un desafío que requiere encontrar una solución.",
      "Se analizan obstáculos y sus posibles causas.",
      "Se comparan distintas alternativas de solución.",
      "Se evalúa si una solución funcionó."
    ],
    "notWhen": [
      "La actividad consiste en crear libremente sin un problema que resolver.",
      "Se ejecuta un procedimiento conocido sin necesidad de buscar alternativas.",
      "Se organiza una actividad sin enfrentar un problema específico."
    ],
    "frontier": "Resolver problemas implica encontrar soluciones a situaciones o dificultades. No es lo mismo que tomar decisiones entre alternativas ni que resolver conflictos entre personas."
  },
  {
    "id": "liderazgo",
    "name": "Liderazgo",
    "symbol": "flag",
    "group": "Desarrollo personal y autonomía",
    "summary": "Orientar, motivar y acompañar a otros hacia objetivos compartidos.",
    "description": "Capacidad de orientar, motivar y acompañar a otras personas hacia objetivos compartidos, promoviendo la participación, la cooperación y el desarrollo del grupo.",
    "when": [
      "Se asume la conducción de un grupo o equipo.",
      "Se motiva y acompaña a otras personas.",
      "Se facilita la participación y la construcción de objetivos comunes.",
      "Se ayuda a coordinar esfuerzos y mantener al grupo orientado."
    ],
    "notWhen": [
      "Se asigna un cargo o título sin ejercer una función de liderazgo.",
      "Se dan órdenes sin promover la participación.",
      "Se realiza una tarea individual sin influir en el trabajo colectivo."
    ],
    "frontier": "Liderazgo no es autoridad formal ni imposición. Se relaciona con la capacidad de orientar y acompañar a otros."
  },
  {
    "id": "toma-de-decisiones",
    "name": "Toma de decisiones",
    "symbol": "alt_route",
    "group": "Desarrollo personal y autonomía",
    "summary": "Comparar alternativas y sus consecuencias para elegir con fundamento.",
    "description": "Capacidad de identificar alternativas, valorar sus ventajas, desventajas y consecuencias, y elegir un curso de acción de manera consciente y fundamentada.",
    "when": [
      "Se deben comparar distintas opciones.",
      "Se analizan consecuencias antes de elegir.",
      "Se toman decisiones individuales o colectivas.",
      "Se reflexiona sobre los criterios utilizados para elegir."
    ],
    "notWhen": [
      "Se sigue una instrucción sin posibilidad de elección.",
      "Se realiza una acción automática o rutinaria.",
      "Se resuelve un problema sin que exista un proceso significativo de elección."
    ],
    "frontier": "Tomar decisiones es elegir entre alternativas; resolver problemas es encontrar una solución ante una dificultad. Pueden aparecer juntas, pero no son equivalentes."
  },
  {
    "id": "trabajo-en-equipo",
    "name": "Trabajo en equipo",
    "symbol": "groups",
    "group": "Relaciones y convivencia",
    "summary": "Colaborar y coordinarse con otros para lograr un resultado común.",
    "description": "Capacidad de colaborar con otras personas, aportar al esfuerzo colectivo, coordinar acciones y construir resultados compartidos mediante la cooperación.",
    "when": [
      "Los participantes necesitan colaborar para alcanzar un objetivo.",
      "Se comparten tareas y responsabilidades.",
      "Se coordinan aportes individuales para obtener un resultado común.",
      "Se construye algo colectivamente."
    ],
    "notWhen": [
      "Las personas simplemente están reunidas.",
      "Todos realizan la misma actividad de manera independiente.",
      "Se trabaja simultáneamente sin cooperación ni coordinación."
    ],
    "frontier": "Trabajar en equipo requiere colaboración real. No alcanza con que haya varias personas participando."
  },
  {
    "id": "comunicacion",
    "name": "Comunicación",
    "symbol": "forum",
    "group": "Relaciones y convivencia",
    "summary": "Transmitir, escuchar e interpretar mensajes con claridad.",
    "description": "Capacidad de transmitir, recibir e interpretar información, ideas, sentimientos y opiniones de manera clara y adecuada, utilizando distintos lenguajes y medios.",
    "when": [
      "Se trabaja la expresión oral, escrita, corporal o visual.",
      "Se ejercita la escucha activa.",
      "Se debe interpretar o transmitir información.",
      "Se adapta el mensaje al interlocutor o al contexto.",
      "Se busca mejorar la comprensión mutua."
    ],
    "notWhen": [
      "Las personas simplemente hablan durante una actividad.",
      "Se transmite información sin trabajar su comprensión.",
      "La comunicación ocurre de manera incidental, sin ser un propósito educativo."
    ],
    "frontier": "Comunicar no es solamente hablar. Incluye escuchar, interpretar, expresar y adaptar los mensajes."
  },
  {
    "id": "conciencia-social",
    "name": "Conciencia social",
    "symbol": "diversity_3",
    "group": "Relaciones y convivencia",
    "summary": "Comprender la realidad social, sus necesidades y desigualdades.",
    "description": "Capacidad de comprender la realidad social, reconocer necesidades, problemáticas y desigualdades, e identificar las responsabilidades individuales y colectivas dentro de la comunidad.",
    "when": [
      "Se analizan problemáticas de la comunidad.",
      "Se reconocen desigualdades y situaciones de vulnerabilidad.",
      "Se reflexiona sobre derechos, necesidades y responsabilidades sociales.",
      "Se busca comprender la realidad de distintos grupos sociales."
    ],
    "notWhen": [
      "Se trabaja exclusivamente sobre las emociones de una persona concreta.",
      "Se realiza una acción solidaria sin abordar el contexto o la realidad social.",
      "Se menciona a la comunidad sin analizar sus necesidades o problemáticas."
    ],
    "frontier": "Conciencia social implica comprender la realidad colectiva. Empatía implica comprender las experiencias y perspectivas de otras personas."
  },
  {
    "id": "empatia",
    "name": "Empatía",
    "symbol": "volunteer_activism",
    "group": "Relaciones y convivencia",
    "summary": "Comprender las emociones, perspectivas y necesidades de los demás.",
    "description": "Capacidad de comprender y considerar las emociones, perspectivas, experiencias y necesidades de otras personas, reconociendo y respetando sus diferencias.",
    "when": [
      "Se invita a ponerse en el lugar de otra persona.",
      "Se trabaja la comprensión de emociones ajenas.",
      "Se exploran distintas perspectivas ante una misma situación.",
      "Se busca comprender las necesidades y experiencias de los demás."
    ],
    "notWhen": [
      "Se realiza una acción solidaria sin trabajar la comprensión de los demás.",
      "Se habla de respeto de manera general, sin abordar perspectivas o experiencias ajenas.",
      "Se confunde empatía con estar de acuerdo con otra persona."
    ],
    "frontier": "Comprender a otra persona no significa compartir su opinión ni aprobar sus acciones."
  },
  {
    "id": "resolucion-de-conflictos",
    "name": "Resolución de conflictos",
    "symbol": "handshake",
    "group": "Relaciones y convivencia",
    "summary": "Construir acuerdos ante desacuerdos mediante el diálogo y la negociación.",
    "description": "Capacidad de reconocer y comprender situaciones de conflicto, considerar las perspectivas de las partes involucradas y contribuir a la construcción de acuerdos mediante el diálogo, la negociación y el respeto mutuo.",
    "when": [
      "Se trabajan desacuerdos entre personas o grupos.",
      "Se practican estrategias de mediación y negociación.",
      "Se buscan acuerdos ante intereses contrapuestos.",
      "Se analizan formas constructivas de afrontar conflictos."
    ],
    "notWhen": [
      "Se resuelve un problema técnico o práctico sin conflicto interpersonal.",
      "Se trabaja en equipo sin que exista una situación de desacuerdo.",
      "Se habla de convivencia de manera general sin abordar conflictos."
    ],
    "frontier": "Resolver conflictos se refiere a diferencias entre personas o grupos; resolver problemas se refiere a dificultades o desafíos de distinta naturaleza."
  },
  {
    "id": "alfabetizacion-digital",
    "name": "Alfabetización digital",
    "symbol": "devices",
    "group": "Habilidades y conocimientos aplicados",
    "summary": "Usar tecnologías digitales de forma crítica, segura y responsable.",
    "description": "Capacidad de utilizar tecnologías y entornos digitales de manera crítica, segura, creativa y responsable para acceder a información, comunicarse, crear contenidos y resolver necesidades.",
    "when": [
      "Se desarrollan habilidades para utilizar herramientas digitales.",
      "Se evalúa la confiabilidad de información en entornos digitales.",
      "Se crean contenidos utilizando tecnologías.",
      "Se trabaja la seguridad, privacidad o ciudadanía digital.",
      "Se utilizan herramientas digitales para resolver tareas."
    ],
    "notWhen": [
      "Se utiliza un dispositivo como recurso accesorio.",
      "Se reproduce un video o presentación sin trabajar habilidades digitales.",
      "La tecnología aparece como soporte, pero no constituye un aprendizaje."
    ],
    "frontier": "Utilizar tecnología no implica desarrollar alfabetización digital. Debe existir un aprendizaje relacionado con su uso."
  },
  {
    "id": "tecnicas-scout",
    "name": "Técnicas scout",
    "symbol": "camping",
    "group": "Habilidades y conocimientos aplicados",
    "summary": "Aplicar técnicas propias del escultismo y la vida al aire libre.",
    "description": "Capacidad de aplicar conocimientos, procedimientos y habilidades prácticas propios del escultismo y de las actividades al aire libre, utilizando técnicas específicas de manera adecuada y segura.",
    "when": [
      "Se enseñan o practican técnicas de campismo.",
      "Se trabaja con nudos, amarres y construcciones.",
      "Se desarrollan habilidades de orientación y lectura de mapas.",
      "Se aplican técnicas de pionerismo.",
      "Se utilizan herramientas y procedimientos propios de la vida al aire libre."
    ],
    "notWhen": [
      "La actividad simplemente se desarrolla durante un campamento.",
      "Se realiza un juego al aire libre sin aplicar técnicas scout.",
      "Se utiliza equipamiento sin enseñar ni ejercitar su uso."
    ],
    "frontier": "El contexto scout no convierte automáticamente una actividad en una actividad de Técnicas scout. Debe existir un aprendizaje técnico concreto."
  },
  {
    "id": "destreza-fisica",
    "name": "Destreza física",
    "symbol": "directions_run",
    "group": "Habilidades y conocimientos aplicados",
    "summary": "Desarrollar habilidades motrices: coordinación, equilibrio, agilidad, fuerza.",
    "description": "Capacidad de desarrollar y aplicar habilidades motrices y capacidades físicas, mejorando el control corporal, la coordinación, el equilibrio, la agilidad, la fuerza y la resistencia.",
    "when": [
      "Se ejercitan habilidades motrices específicas.",
      "Se trabaja la coordinación y el equilibrio.",
      "Se desarrollan capacidades físicas mediante desafíos.",
      "Se busca mejorar el dominio y control del propio cuerpo."
    ],
    "notWhen": [
      "La actividad simplemente requiere desplazarse o moverse.",
      "Se participa de un juego sin un propósito de desarrollo motriz.",
      "El esfuerzo físico es incidental y no constituye un aprendizaje."
    ],
    "frontier": "Realizar actividad física no significa necesariamente desarrollar una destreza física. Debe existir una intención educativa relacionada con las capacidades motrices."
  },
  {
    "id": "salud-y-autocuidado",
    "name": "Salud y autocuidado",
    "symbol": "health_and_safety",
    "group": "Habilidades y conocimientos aplicados",
    "summary": "Adoptar prácticas para cuidar la propia salud y prevenir riesgos.",
    "description": "Capacidad de adoptar decisiones y prácticas responsables para cuidar la propia salud y bienestar, prevenir riesgos y reconocer las necesidades físicas, emocionales y sociales relacionadas con una vida saludable.",
    "when": [
      "Se trabajan hábitos de higiene y cuidado personal.",
      "Se promueven hábitos saludables.",
      "Se enseña prevención de accidentes y enfermedades.",
      "Se desarrollan conocimientos para reconocer riesgos y cuidar la salud.",
      "Se reflexiona sobre el bienestar físico, emocional y social."
    ],
    "notWhen": [
      "La salud aparece únicamente como tema informativo.",
      "Se menciona el cuerpo sin trabajar prácticas de cuidado.",
      "Se realiza una actividad física sin abordar el bienestar o el autocuidado."
    ],
    "frontier": "Salud y autocuidado se refiere a desarrollar capacidades para cuidar el bienestar; no simplemente a tratar contenidos relacionados con la salud."
  },
  {
    "id": "adaptabilidad",
    "name": "Adaptabilidad",
    "symbol": "autorenew",
    "group": "Habilidades y conocimientos aplicados",
    "summary": "Ajustarse con flexibilidad a cambios e imprevistos.",
    "description": "Capacidad de ajustarse a cambios, situaciones imprevistas y nuevos contextos, modificando estrategias, comportamientos o planes de manera flexible y constructiva.",
    "when": [
      "Se presentan cambios inesperados que requieren ajustar la conducta.",
      "Se deben modificar planes ante nuevas circunstancias.",
      "Se trabaja la flexibilidad frente a situaciones cambiantes.",
      "Se practican distintas maneras de responder a un mismo desafío.",
      "Se aprende a desenvolverse en contextos nuevos."
    ],
    "notWhen": [
      "Se sigue un procedimiento establecido sin necesidad de ajustarlo.",
      "Se cambia una actividad por decisión del organizador, sin que los participantes deban adaptarse.",
      "Se resuelve un problema mediante una solución puntual sin trabajar la flexibilidad."
    ],
    "frontier": "Adaptabilidad es ajustarse a cambios; resolución de problemas es encontrar soluciones a dificultades. Una misma actividad puede desarrollar ambas, pero deben existir propósitos educativos identificables para cada una."
  },
  {
    "id": "conciencia-ambiental",
    "name": "Conciencia ambiental",
    "symbol": "eco",
    "group": "Ambiente y sostenibilidad",
    "summary": "Comprender el ambiente y la relación entre las actividades humanas y la naturaleza.",
    "description": "Capacidad de comprender el ambiente, reconocer sus componentes e identificar las relaciones entre las actividades humanas y los sistemas naturales.",
    "when": [
      "Se estudian ecosistemas y sus componentes.",
      "Se analizan las relaciones entre seres vivos y ambiente.",
      "Se reconocen problemáticas ambientales y sus causas.",
      "Se reflexiona sobre el impacto de las actividades humanas en la naturaleza.",
      "Se promueve la comprensión del entorno natural."
    ],
    "notWhen": [
      "Se realiza una actividad al aire libre sin trabajar contenidos ambientales.",
      "Se limpia un espacio sin reflexionar sobre la problemática ambiental.",
      "Se mencionan animales o plantas sin abordar su relación con el ambiente."
    ],
    "frontier": "Conciencia ambiental es comprender el ambiente; valorarlo corresponde al valor Compromiso con la Naturaleza. No requiere necesariamente realizar una acción de protección."
  },
  {
    "id": "proteccion-ambiental",
    "name": "Protección ambiental",
    "symbol": "forest",
    "group": "Ambiente y sostenibilidad",
    "summary": "Participar activamente en cuidar y preservar el ambiente y la biodiversidad.",
    "description": "Capacidad de participar activamente en el cuidado, la defensa y la preservación del ambiente y de sus componentes, contribuyendo a prevenir daños y proteger la biodiversidad y los recursos naturales.",
    "when": [
      "Se realizan acciones de protección de especies o hábitats.",
      "Se trabaja en la prevención del deterioro ambiental.",
      "Se desarrollan acciones de restauración o recuperación de espacios naturales.",
      "Se participa en iniciativas de defensa de la biodiversidad.",
      "Se promueve el cuidado activo de los recursos naturales."
    ],
    "notWhen": [
      "Solo se estudia o describe un ecosistema.",
      "Se trabaja sobre hábitos personales sin una acción específica de protección ambiental.",
      "Se realiza una actividad en la naturaleza sin propósito de preservación."
    ],
    "frontier": "Protección implica una acción concreta o una capacidad orientada a preservar el ambiente. No es simplemente conocerlo o valorarlo."
  },
  {
    "id": "habitos-sostenibles",
    "name": "Hábitos sostenibles",
    "symbol": "recycling",
    "group": "Ambiente y sostenibilidad",
    "summary": "Incorporar prácticas cotidianas que reduzcan el impacto ambiental.",
    "description": "Capacidad de incorporar prácticas cotidianas responsables que reduzcan el impacto ambiental y favorezcan un uso consciente y equilibrado de los recursos.",
    "when": [
      "Se trabajan prácticas de reducción, reutilización y reciclaje.",
      "Se promueve el consumo responsable.",
      "Se desarrollan hábitos para ahorrar agua y energía.",
      "Se reflexiona sobre las decisiones cotidianas y su impacto ambiental.",
      "Se busca incorporar comportamientos sostenibles en la vida diaria."
    ],
    "notWhen": [
      "Se realiza una acción ambiental aislada sin trabajar su incorporación como hábito.",
      "Se estudia una problemática ambiental sin abordar comportamientos cotidianos.",
      "Se participa en una campaña de protección de especies sin trabajar hábitos personales."
    ],
    "frontier": "Hábitos sostenibles se centra en las prácticas cotidianas; protección ambiental se centra en preservar activamente el ambiente."
  }
];
