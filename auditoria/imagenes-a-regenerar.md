# Imágenes a regenerar

Sale del punto g) de la auditoría (tandas 01–18). La misma lista en CSV, con la ruta de cada imagen: `imagenes-a-regenerar.csv`.

| Prioridad | Cantidad |
|---|---|
| P1 | 87 |
| P2 | 132 |
| P3 | 32 |
| P4 | 148 |
| **Total** | **399** |

Notas:

- Al regenerar, usar el `image_prompt` de cada .md, pero agregarle **"sin texto, sin letras, sin banderas, sin logos"**. La mayoría de los defectos de P1 y P3 vienen de ahí.
- En P1 de seguridad (por ejemplo, un bote sin chaleco o armas), corregir también el prompt si es el que lo pide.
- Las imágenes "ok" y "buena" sin defectos (unas 660) no están en la lista.

## P1 — Regenerar sí o sí (no corresponde, engañosa, insegura, medio blanqueada o con texto inventado como elemento central)

| Insignia | Código | Slug | Motivo |
|---|---|---|---|
| agua | A08 | el-baile-del-agua | mala (chicos saltando hacia una ola sobre rocas) |
| agua | A21 | la-ciencia-del-agua | mala (medio blanqueada) |
| agua | A32 | agua-alrededor-del-mundo-agua | mala (mapa con Argentina sobre EE. UU.) |
| agua | A41 | animales-de-la-cuenca | mala (medio blanqueada) |
| agua | A47 | bioevaluacion-macroinvertebrados | mala (medio blanqueada) |
| agua | B31 | promesa-del-agua-agua | mala (medio blanqueada) |
| agua | B35 | ahorra-agua-agua | mala (medio blanqueada) |
| agua | C33 | juego-a-donde-va-el-agua | mala (medio blanqueada) |
| agua | C39 | nuestro-agua-tambien-enfermarse | mala (medio blanqueada) |
| agua | C42 | el-agua-subterranea | mala (medio blanqueada) |
| agua | C44 | manos-a-la-obra-petroleo | mala (medio blanqueada) |
| agua | C48 | cambio-climatico-sequias-extremas | mala (medio blanqueada) |
| agua | C50 | juego-agua-caliente | mala (medio blanqueada) |
| agua | C51 | escribamos-por-saneamiento | mala (medio blanqueada) |
| agua | D05 | sigue-el-flujo | mala (diagrama con texto ilegible) |
| agua | D32 | agua-no-siempre-disponible | mala (medio blanqueada) |
| agua | D33 | que-ha-cambiado-agua | mala (medio blanqueada) |
| agua | D38 | vegetacion-proteccion-agua | mala (medio blanqueada) |
| agua | D42 | habitos-saludables-personas-saludables | mala (medio blanqueada) |
| agua | D44 | estas-de-acuerdo-o-en-desacuerdo | mala (medio blanqueada) |
| agua | D45 | datos-sobre-el-agua | mala (medio blanqueada) |
| agua | E31 | tu-codigo-del-agua | mala (medio blanqueada) |
| biodiversidad | A13 | estrategias-de-supervivencia | mala (león al lado de chicos, bandera EE. UU.) |
| biodiversidad | A14 | biogas | mala (medio blanqueada, marca de agua "LALANEZA") |
| biodiversidad | A20 | comercio-de-emisiones-y-redd | mala (medio blanqueada, texto inventado) |
| biodiversidad | B13 | experimento-de-derrame-de-petroleo | mala (medio blanqueada) |
| biodiversidad | B17 | bacterias-y-mamiferos-marinos | mala (chicos metidos en mar abierto con delfines) |
| biodiversidad | B27 | escondite-junto-al-agua | mala (medio blanqueada) |
| biodiversidad | C04 | plantas-silvestres-comestibles | mala (estereotipo de persona indígena) |
| biodiversidad | C27 | especies-raras-de-arboles | mala (medio blanqueada) |
| biodiversidad | D17 | arte-natural | mala (medio blanqueada) |
| biodiversidad | D18 | desfile-de-modas | mala (medio blanqueada) |
| biodiversidad | D31 | conservacion-practica | mala (chica abrazando un animal silvestre: zoonosis, mal ejemplo) |
| bosques | C11 | alimentos-del-bosque | mala (chicos recolectando hongos silvestres) |
| bosques | C16 | agricultores-del-bosque | mala (medio blanqueada) |
| bosques | D11 | no-madereros-y-no-son-buenos | mala (parece un chico fumando) |
| bosques | E08 | olas-verdes | mala (medio blanqueada) |
| cambioclimatico | A10 | alimentos-locales | mala (medio blanqueada) |
| cambioclimatico | C11 | huella-hidrica | mala (medio blanqueada) |
| cambioclimatico | D07 | ideas-internacionales | mala (medio blanqueada) |
| cambioclimatico | D10 | informacion-privilegiada | mala (medio blanqueada) |
| cambioclimatico | E04 | tarjetas-de-felicitacion-recicladas-cambioclimatico | mala (medio blanqueada, bandera de EE. UU.) |
| cambioclimatico | E06 | compras-inteligentes | mala (medio blanqueada) |
| cambioclimatico | E08 | recicla-tu-propio-papel | mala (medio blanqueada) |
| cambioclimatico | E09 | haz-tu-propio-compost | mala (compost con latas y metal: enseña lo contrario) |
| cambioclimatico | E22 | invierte-en-soluciones | mala (medio blanqueada) |
| ciudadesverdes | D02 | celebra-el-dia-de-mi-ciudad | mala: texto "My City Da" sobre la imagen |
| comunidad | M01 | patitas-limpias | mala: pantera/oso gigante; no muestra limpieza (hay 9 variantes patitas-limpias_1..9 sin usar) |
| energia | A06 | cancion-ciclo-carbono | mala (media imagen en blanco) |
| energia | A12 | hornear-con-burbujas | mala (texto gigante "Yest") |
| energia | C01 | energia-en-mi-rutina | mala (media imagen en blanco) |
| energia | C05 | reduciendo-mi-huella-carbono | mala (media imagen en blanco) |
| energia | D07 | inspeccion-salud-energia | mala (media imagen en blanco) |
| energia | D08 | ideas-internacionales-energia | mala (franja en blanco) |
| energia | E02 | debate-energetico | mala (media imagen en blanco) |
| energia | E16 | acampada-bajo-impacto | mala (media imagen en blanco) |
| general | E06 | cuanto-plastico-uso | mala: chicos sin uniforme, texto "PLASTIC" en inglés y destello blanco |
| general | E11 | taller-de-lenos-ecologicos | mala: muestra leña de verdad (lo opuesto) y un "210" pintado |
| gosolar | A03 | reloj-de-sol | mala: no hay reloj de sol |
| gosolar | C01 | colectando-agua | mala: no se ven el plástico ni el frasco |
| gosolar | D01 | comida-solar | mala: horno con llamas (lo opuesto a cocina solar) |
| hambre | A11 | hambre-en-el-hogar | sensible: chicos scouts mirando una villa como si fuera una excursión. Reemplazar. |
| hambre | D07 | circulo-virtuoso-vs-circulo-vicioso | mala: pancarta con texto inventado ("VIRTOUSTOUS CIRCLE") |
| hambre | D08 | si-si-no | mala (tabla falsa) |
| hambre | E02 | comunicacion-alternativa | mala (carteles con texto inventado) |
| nutricion | A06 | dulces-suenos | mala (surrealista: cama al aire libre, dos lunas) |
| nutricion | B20 | hablar-sobre-tabus | mala (estereotipos religiosos) |
| nutricion | D18 | compra-pescado-de-manera-selectiva | mala (cartel "Sustainable Seabod") |
| oceano | A03 | haciendo-olas | mala: scout dentro de una ola (mensaje de seguridad opuesto) |
| oceano | A09 | construyendo-un-hidrofono | mala: los micrófonos parecen fusiles |
| oceano | B04 | censo-de-vida-marina | mala: monstruo rojo y scouts con algo parecido a un arma |
| oceano | C06 | barcos-y-marineros | mala: chicos en un bote de juguete en mar abierto, sin chaleco |
| oceano | D04 | contaminacion-y-accidentes | mala: pulpo en llamas explotando |
| plastics | C03 | investigacion-nacional-plastico | absurda: computadoras en un desierto |
| polinizadores | A09 | estudio-evolutivo-polinizadores | texto inventado en pantalla |
| polinizadores | B04 | diario-de-alimentos-polinizadores | mala: es una página web falsa ("Ultra-wide wide Storvy"); reemplazar |
| polinizadores | C01 | amenazas-locales | texto inventado |
| rrd | B06 | hora-de-la-prueba-rrd | texto en inglés sin sentido en la pantalla |
| rrd | B08 | riesgo-calculado | muestra una fórmula falsa ("Risk f = x3+0r") |
| rrd | D05 | treinta-dias-por-el-ambiente | calendario con texto en inglés sin sentido |
| sacc | A07 | bombillas-ahorradoras-de-energia | mala (chicos tocando una lamparita incandescente encendida) |
| sacc | A11 | electrodomesticos-ahorradores-de-energia | mala (scouts en un campo, nada que ver) |
| sacc | A15 | ducha-rapida | mala (menor en la ducha: no apta para un sitio con chicos) |
| sacc | B10 | recursos-para-producir-alimentos | mala (adulto con un rifle al fondo) |
| sacc | B12 | horno-solar | mala (chico metido en un horno de barro, que no es solar) |
| sacc | B17 | clima-y-agricultura | mala (adulto con un rifle) |
| sacc | C28 | colecta-puerta-a-puerta | mala (persona encapuchada) |

## P2 — Floja (no muestra la actividad; conviene regenerar)

| Insignia | Código | Slug | Motivo |
|---|---|---|---|
| agua | A05 | la-gallina-ciega | floja (afiche con texto ilegible) |
| agua | A17 | donde-esta-el-agua | floja (marca de agua + franjas) |
| agua | A18 | cientificos-nadadores | floja (nadan con uniforme y mochila) |
| agua | A43 | rios-mas-largos | floja (estilo anime sin relación) |
| agua | A51, antes A32 | agua-por-todas-partes | floja (globo con texto ilegible) |
| agua | B39 | crucigrama-uso-agua | floja (marca de agua "Letint") |
| agua | C07 | cambio-climatico-agua | floja (fuego sobre olas) |
| agua | C45 | simulando-limpieza-petroleo | floja (chicos dentro del mar) |
| agua | D06 | salud-agua | floja (carteles con texto ilegible) |
| agua | D09 | el-agua-como-un-derecho-humano | floja (pizarra con texto ilegible) |
| agua | D31 | el-agua-es-poesia | floja (chicos dentro del agua) |
| agua | D49 | algunos-objetivos-azules | floja |
| agua | E32 | carteles-para-la-playa | floja (carteles con texto en inglés inventado) |
| agua | E34 | necesito-agua-y-tu-tambien | floja (animales de dibujo genéricos) |
| agua | E43 | se-hidrologico | floja (gotas con texto en inglés inventado) |
| biodiversidad | A08 | impresiones-de-esporas | floja (hongos de fantasía) |
| biodiversidad | A12 | casa-para-murcielagos | floja (muestra una casita de pájaros) |
| biodiversidad | A17 | mapa-de-contaminacion | floja (texto inventado) |
| biodiversidad | A19 | biodiversidad-y-cambio-climatico | floja (marca de agua "ULTEREL") |
| biodiversidad | B04 | adaptaciones-de-animales-acuaticos | floja (chicos bajo el agua sin equipo) |
| biodiversidad | B05 | titeres-de-cuenca-de-agua | floja (medio blanqueada) |
| biodiversidad | B08 | invernaculo-para-anfibios | floja (pila de ramas tipo fogata) |
| biodiversidad | B10 | filtros-de-agua-naturales | floja (no muestra un filtro) |
| biodiversidad | B11 | letreros-para-proteger-arroyos | floja (carteles en inglés inventados) |
| biodiversidad | B18 | calendario-de-pesca-sostenible | floja (texto inventado) |
| biodiversidad | B19 | pescado-sostenible | floja (texto en inglés inventado) |
| biodiversidad | B21 | aves-acuaticas | floja (cigüeñas en un pastizal, no en el agua) |
| biodiversidad | B24 | fiesta-de-mascaras-marinas | floja (no hay máscaras) |
| biodiversidad | C15 | experimento-de-capas-de-suelo | floja (marca de agua) |
| biodiversidad | C20 | observacion-de-hormigas | floja (hormigas gigantes, chicos con palos) |
| biodiversidad | D06 | especies-en-peligro-y-consumo | floja (texto inventado) |
| biodiversidad | D11 | puntos-calientes-de-biodiversidad | floja (texto inventado "404") |
| biodiversidad | D20 | guion-radiofonico | floja (adulto con un objeto que parece un arma) |
| biodiversidad | D28 | carta-al-editor | floja (texto en inglés) |
| biodiversidad | D34 | organizador-comunitario-biodiversidad | floja (texto inventado) |
| bosques | A03 | sonidos-y-senales | floja (adultos con aspecto militar) |
| bosques | A11 | farmacia-forestal | floja (un adulto con lo que parece un rifle) |
| bosques | A19 | clases-de-animales | floja (animales de fantasía) |
| bosques | A23 | el-paisaje-sonoro-del-bosque | floja (adulto) |
| bosques | B14 | linea-de-tiempo-internacional | floja (uniforme militar, texto inventado) |
| bosques | D01 | los-bosques-bajo-amenaza | floja (chico con objeto que parece un arma) |
| bosques | D13 | bosques-en-llamas | floja (chicos cerca de un incendio activo) |
| bosques | E05 | educacion-anti-invasion | floja (texto inventado) |
| bosques | E09 | jardineria-verde | floja (piezas de metal en el compost) |
| bosques | E12 | confesiones-de-los-consumidores | floja (texto inventado) |
| bosques | E14 | reportaje-sobre-el-carbono | floja (texto inventado "Carbon Market Climals") |
| cambioclimatico | B06 | agua-invisible | floja (texto inventado) |
| cambioclimatico | C01 | mapea-el-impacto | floja (texto inventado) |
| cambioclimatico | C05 | espiando-el-oceano | floja (pecera en una caja en el desierto) |
| cambioclimatico | C07 | salva-a-los-animales | floja (oso polar con perros, texto inventado) |
| cambioclimatico | C14 | preguntas-y-respuestas | floja (adulto protagonista) |
| cambioclimatico | C15 | refugiados-por-el-clima | floja (un scout filma a refugiados) |
| cambioclimatico | C16 | discusiones-saludables | floja (adultos con barbijo) |
| cambioclimatico | D03 | haciendo-garabatos | floja (no muestra dibujo) |
| cambioclimatico | D06 | mantente-al-tanto-de-las-noticias | floja (texto inventado) |
| cambioclimatico | D08 | manteniendose-frescos-o-calientes-en-el-pasado | floja (texto inventado) |
| cambioclimatico | D14 | conoce-tu-consumo-de-electricidad | floja (adultos, texto inventado) |
| cambioclimatico | D15 | opiniones-sobre-el-intercambio-de-emisiones | floja (texto inventado) |
| cambioclimatico | D16 | negociacion-por-el-clima | floja (logo de la ONU y texto "NEWALLING"; el uso del emblema de la ONU está restringido) |
| cambioclimatico | E01 | dia-de-accion-por-el-clima | floja (texto inventado) |
| cambioclimatico | E02 | concurso-por-el-clima | floja (texto inventado) |
| cambioclimatico | E05 | siembra-organico | floja (verdulería, no huerta) |
| cambioclimatico | E12 | no-desperdicies-y-nada-te-faltara | floja (adulto) |
| cambioclimatico | E13 | cuida-la-energia | floja (texto inventado) |
| cambioclimatico | E14 | en-estado-verde | floja (botellas y copas que parecen de alcohol, bandera de EE. UU.) |
| ciudadesverdes | B06 | es-verde-tu-escuela | floja (dibujo animado, otro estilo) |
| ciudadesverdes | B09 | debate-sobre-ciudades-verdes | floja (adultos de traje) |
| ciudadesverdes | C04 | es-verde-tu-casa | floja (casa suburbana de EE. UU., estilo dibujo) |
| energia | A13 | actuando-ciclo-carbono | floja |
| energia | B04 | cancion-viento-o-sol | floja (bandera de EE. UU.) |
| energia | B05 | geiseres-y-aguas-termales | floja (scouts sobre suelo termal) |
| energia | C06 | energia-en-saltos-de-tijera | floja (chicos corriendo) |
| energia | C07 | energia-en-el-pasado | floja (no hay personas mayores) |
| energia | C11 | obras-de-teatro-energia | floja (bandera de EE. UU.) |
| energia | C13 | edificios-eficientes-energeticamente | floja (bandera de EE. UU.) |
| energia | E03 | la-hora-del-planeta-energia | floja (muchas velas con chicos) |
| energia | E15 | politica-energetica | floja (bandera de EE. UU.) |
| general | E05 | cuanto-se-de-ecologia | floja: no se ven sectores ni carteles de respuesta |
| general | E08 | taller-botella-de-amor | floja: no se ve el llenado de la botella |
| general | E09 | taller-huerta-de-botella | floja: plantas en macetas de barro, no en botellas |
| gosolar | A01 | arte-solar | floja: texto "Sun", no se ve la lupa |
| gosolar | B02 | ozono-y-quemaduras-de-sol | floja: nada de protección solar |
| gosolar | C02 | horno-solar-cocina-solar | floja: caja-horno, no la cocina "flor" de paneles |
| gosolar | C04 | concurso-solar | floja: grupo con un pizarrón |
| gosolar | D02 | ducha-solar | floja: una manguera negra en un poste |
| hambre | B04 | cadenas-alimentarias | floja |
| hambre | C02 | guion-grafico-sobre-la-trampa-del-hambre | floja (hombre gritando) |
| hambre | C08 | presentaciones-sobre-desastres-naturales | floja (policías frente a un incendio) |
| mundomejor | E10 | nudo-humano | floja: chicos caminando en fila de la mano, no hay nudo |
| nutricion | A02 | que-empiece-el-juego | floja (fútbol americano) |
| nutricion | A05 | mantenganse-limpios | floja (adulto lavándose) |
| nutricion | A10 | el-trabajo-del-agua | floja |
| nutricion | A12 | la-verdad-sobre-los-germenes | floja (tabla inventada, bandera de EE. UU.) |
| nutricion | B02 | el-diario-de-comidas | floja |
| nutricion | B03 | comidas-favoritas | floja (adulto comiendo papas fritas) |
| nutricion | B04 | choque-de-culturas | floja (disfraces estereotipados) |
| nutricion | B08 | el-cuerpo-humano-y-la-comida | floja (texto inventado) |
| nutricion | B10 | hora-del-concurso | floja (chicos en un campo) |
| nutricion | B12 | investigacion-sobre-la-malnutricion | floja (adultos) |
| nutricion | B13 | entender-la-obesidad | floja (bandera de EE. UU.) |
| nutricion | B16 | el-maestro-del-menu | floja (media imagen con niebla) |
| nutricion | C09 | bichos | floja (gráfico inventado) |
| nutricion | D06 | compras-sostenibles | floja (adulto) |
| nutricion | D14 | comida-sedienta | floja (tabla inventada) |
| nutricion | D17 | del-campo-a-tu-plato | floja (infografía inventada) |
| nutricion | E06 | exhibicion-de-posteres | floja (texto inventado) |
| nutricion | E08 | supervisar-una-dieta-equilibrada | floja (adulto comiendo) |
| oceano | A01 | nuestro-oceano | floja (scouts en cubierta sin chaleco) |
| oceano | B11 | los-favoritos-del-mar | floja (ballena flotando en el aire) |
| oceano | C07 | como-pescan-los-pescadores | floja (cañas como fusiles, bandera de EE. UU.) |
| oceano | C11 | explorando-los-mares-polares | floja (oso polar cerca de personas) |
| oceano | E02 | campana-por-el-oceano | floja (carteles con texto inventado) |
| plastics | A01 | buen-plastico-mal-plastico | floja: chicos parados en un basural |
| plastics | P11 | cuando-se-degradan | floja: frascos sobre la tierra, no enterrados |
| plastics | P12 | macetas-de-botellas | floja: frascos colgantes, no botellas cortadas |
| polinizadores | A08 | todo-sobre-la-polinizacion | floja (chicos mirando TV) |
| rrd | A05 | haz-un-modelo-de-un-volcan | floja: un volcán "real" con lava y un chico sentado al lado |
| rrd | A08 | de-prisa-rrd | floja (adultos frente a computadoras) |
| sacc | A04 | calefaccion-y-aire-acondicionado | floja (termostato en °F) |
| sacc | A20 | letrero-no-propagandas | floja (cartel vacío) |
| sacc | A26 | bolsa-reutilizable | floja (bolsa de plástico) |
| sacc | A33 | productos-reciclables | floja (carteles "Recycl") |
| sacc | B05 | refrigerador-eficiente | floja (media imagen en blanco) |
| sacc | B15 | desastres-relacionados-con-el-clima | floja (mapa inventado) |
| sacc | C06 | elige-un-pais | floja (media imagen en verde) |
| sacc | C09 | notas-recordatorias-apagame | floja (ilustración vacía) |
| sacc | C14 | obra-de-teatro-sobre-reciclaje | floja (media imagen negra) |
| sacc | C15 | tarjetas-de-felicitacion-recicladas | floja (media imagen en blanco) |
| sacc | C19 | campana-con-posters | floja (carteles con texto inventado) |
| sacc | C25 | resuelve-un-problema-comunitario | floja (chico junto a vías de tren) |
| suelos | A02 | analisis-de-suelos | floja (adultos en sala) |
| suelos | B07 | habitos-animales | floja: elefantes en una sabana |

## P3 — Retocar (la imagen sirve, pero tiene texto inventado, marca de agua o bandera extranjera)

| Insignia | Código | Slug | Motivo |
|---|---|---|---|
| agua | B44 | inventos-inteligentes-agua | ok (bandera EE. UU.) |
| agua | E37 | dia-de-azul | ok (texto en inglés) |
| biodiversidad | A04 | aves-migratorias | ok (bandera EE. UU.) |
| biodiversidad | A06 | alimentador-de-aves | ok (bandera EE. UU.) |
| biodiversidad | C17 | plantas-medicinales | ok (bandera EE. UU.) |
| biodiversidad | C24 | paseo-en-el-bosque | ok (bandera EE. UU.) |
| biodiversidad | D27 | blog-de-biodiversidad | ok (texto inventado) |
| bosques | E04 | fondos-para-los-bosques | ok (texto inventado) |
| cambioclimatico | D05 | juegos-sobre-el-clima | ok (texto inventado) |
| ciudadesverdes | A10 | leccion-de-historia | ok (texto inventado en la línea de tiempo) |
| ciudadesverdes | C05 | edificios-verdes-a-mi-alrededor | ok (marca de agua abajo a la derecha) |
| ciudadesverdes | D05 | habito-verde | ok (texto inventado) |
| energia | D06 | articula-energia | ok (bandera de EE. UU.) |
| energia | E07 | ahorrando-energia | ok (bandera del Reino Unido) |
| energia | E13 | financia-tu-favorito | ok (bandera de EE. UU.) |
| gosolar | C03 | purificacion-agua-sodis | retocar: texto "SODIS 3" en la botella |
| hambre | A10 | el-genero-y-el-hambre | ok (bandera de EE. UU.) |
| hambre | B08 | flash-informativo | ok (diario con texto inventado) |
| hambre | E05 | haz-ruido | ok (bandera de EE. UU.) |
| nutricion | B17 | visita-una-planta-de-procesado-de-alimentos | ok (bandera de EE. UU.) |
| oceano | A10 | ubicacion-del-oceano | ok (texto inventado "OGENNA") |
| oceano | B08 | un-mapa-de-la-costa | ok (mapa con texto inventado) |
| plastics | A02 | auditoria-de-plastico-en-casa | ok (texto inventado) |
| plastics | B04 | marca-algunos-goles-ods | ok (texto inventado) |
| plastics | P09 | identificando-alternativas-plastico | ok (texto inventado) |
| polinizadores | B02 | ayudantes-de-los-ods | ok (texto inventado en la pizarra) |
| polinizadores | D05 | carteles-en-el-parque | ok (texto inventado en los carteles) |
| polinizadores | D06 | apoya-a-las-abejas | ok (texto inventado "HONEY POLLAN") |
| rrd | A02 | amenazas-y-desastres-cerca-de-casa | ok (texto en inglés en el afiche) |
| sacc | A05 | entrevista-a-un-anciano | ok (bandera de EE. UU.) |
| sacc | A30 | basurero-vacio | ok (bandera de EE. UU.) |
| sacc | C21 | dia-mundial-de-la-alimentacion | ok (carteles con texto inventado) |

## P4 — Genérica (opcional: no está mal, pero no dice nada de la actividad)

| Insignia | Código | Slug | Motivo |
|---|---|---|---|
| agua | A04 | mimica-de-agua | genérica (paisaje sin relación) |
| agua | A06 | el-juego-del-ciclo-del-agua | genérica (paisaje sin relación) |
| agua | A07 | aventuras-linguisticas | genérica (paisaje sin relación) |
| agua | A09 | verso-acuatico | genérica (paisaje sin relación) |
| agua | A11 | dibujando-el-agua | genérica (paisaje sin relación) |
| agua | A12 | los-colores-del-agua | genérica (paisaje sin relación) |
| agua | A13 | lupa | genérica (paisaje sin relación) |
| agua | A14 | aguas-en-literatura | genérica (paisaje sin relación) |
| agua | A16 | el-futuro-del-agua | genérica (paisaje sin relación) |
| agua | A22 | hogar-dulce-hogar | genérica (paisaje sin relación) |
| agua | B01 | observa-tu-agua | genérica (paisaje sin relación) |
| agua | B02 | es-dificil-pasarse-del-h2o | genérica (paisaje sin relación) |
| agua | B03 | mantenerla-limpia | genérica (paisaje sin relación) |
| agua | B04 | alimentos-sedientos | genérica (paisaje sin relación) |
| agua | B05 | planta-de-agua-potable | genérica (paisaje sin relación) |
| agua | B09 | a-donde-va-el-agua | genérica (paisaje sin relación) |
| agua | B10 | haciendo-los-calculos | genérica (paisaje sin relación) |
| agua | B11 | el-agua-en-tu-armario | genérica (paisaje sin relación) |
| agua | C03 | aguas-sucias | genérica (paisaje sin relación) |
| agua | C04 | presiones-pintadas | genérica (paisaje sin relación) |
| agua | C05 | saca-el-bardo-que-hay-en-ti | genérica (paisaje sin relación) (franjas) |
| agua | C06 | sed-continental | genérica (paisaje sin relación) |
| agua | C08 | agua-sin-fronteras | genérica (paisaje sin relación) |
| agua | D01 | agua-alrededor-del-mundo | genérica (paisaje sin relación) (franjas) |
| agua | D02 | ideas-descabelladas | genérica (paisaje sin relación) |
| agua | D10 | el-precio-del-agua | genérica (paisaje sin relación) |
| agua | E01 | pasa-la-voz | genérica (paisaje sin relación) |
| agua | E04 | construye-un-pozo | genérica (paisaje sin relación) |
| agua | E06 | deja-la-botella | genérica (paisaje sin relación) (franjas) |
| agua | E07 | ciudadano-del-agua | genérica (paisaje sin relación) |
| agua | E08 | al-blog | genérica (paisaje sin relación) |
| biodiversidad | A15 | dieta-energetica | genérica |
| biodiversidad | A16 | especies-en-movimiento | genérica |
| biodiversidad | B14 | arte-inspirado-en-el-mar | genérica |
| biodiversidad | B20 | reciclaje-de-aguas-grises | genérica |
| biodiversidad | C03 | juego-de-semillas | genérica |
| biodiversidad | C18 | variedades-raras-de-cultivos | genérica |
| biodiversidad | D01 | collage-de-biodiversidad | genérica |
| biodiversidad | D03 | podcasts-de-biodiversidad | genérica |
| biodiversidad | D05 | biodiversidad-en-otros-paises | genérica |
| biodiversidad | D08 | uso-de-la-biodiversidad | genérica |
| biodiversidad | D12 | explicacion-multisensorial | genérica |
| biodiversidad | D13 | conservacion-in-situ-y-ex-situ | genérica |
| biodiversidad | D14 | fragmentacion-de-habitats | genérica |
| biodiversidad | D15 | acuerdos-internacionales | genérica |
| biodiversidad | D21 | biomimesis | genérica |
| biodiversidad | D22 | comercial-de-biodiversidad | genérica |
| biodiversidad | D23 | dia-internacional-de-la-biodiversidad | genérica |
| biodiversidad | D25 | taller-ambiental | genérica |
| biodiversidad | D32 | la-ola-verde | genérica |
| bosques | A02 | los-biomas-son-hogares | genérica |
| bosques | A04 | cinco-cosas-buenas | genérica |
| bosques | A06 | las-capas-del-bosque | genérica |
| bosques | A25 | tira-comica-sobre-el-carbon | genérica |
| bosques | B01 | bosques-llenos-de-vida | genérica |
| bosques | B02 | medios-de-subsistencia-alternativos | genérica |
| bosques | B04 | empleos-forestales | genérica |
| bosques | B07 | usando-la-madera | genérica |
| bosques | B08 | cambiando-con-el-clima | genérica |
| bosques | B09 | ecoturismo | genérica |
| bosques | B10 | arboles-energeticos | genérica |
| bosques | B12 | bosques-justos | genérica |
| bosques | B13 | biopiratas | genérica |
| bosques | B15 | amenazas-naturales | genérica |
| bosques | C01 | habitantes-indigenas | genérica |
| bosques | C03 | aprender-jugando | genérica |
| bosques | C06 | bosques-alrededor-del-mundo | genérica |
| bosques | C09 | canta-con-el-bosque | genérica |
| bosques | C12 | bosques-sagrados | genérica |
| bosques | C18 | informe-de-prensa | genérica |
| bosques | C19 | bosques-politicos | genérica |
| bosques | D02 | perdiendo-biodiversidad | genérica |
| bosques | D03 | tala-de-arboles | genérica |
| bosques | D04 | invasoras | genérica |
| bosques | D05 | el-destino-de-los-bosques | genérica |
| bosques | D06 | los-bosques-y-tu | genérica |
| bosques | D08 | carne-de-animales-silvestres | genérica |
| bosques | D10 | especies-que-usan-el-agua-inteligentemente | genérica |
| bosques | D12 | los-bosques-y-el-cambio-climatico | genérica |
| bosques | D14 | desenterrando-la-suciedad | genérica |
| cambioclimatico | A01 | creatividad-por-el-clima | genérica |
| cambioclimatico | A02 | el-clima-de-tu-comunidad | genérica |
| cambioclimatico | A04 | clima-vs-tiempo | genérica |
| cambioclimatico | A05 | pensar-en-voz-alta | genérica |
| cambioclimatico | A07 | relatos-de-viaje | genérica |
| cambioclimatico | A08 | un-clima-que-da-vida | genérica |
| cambioclimatico | A11 | clima-y-salud | genérica |
| cambioclimatico | A13 | suelos-calidos | genérica |
| cambioclimatico | A14 | clima-y-estilos-de-vida | genérica |
| cambioclimatico | A15 | estudio-evolutivo | genérica |
| cambioclimatico | B01 | historiadores-del-clima | genérica |
| cambioclimatico | B03 | arte-futurista | genérica |
| cambioclimatico | B04 | electricidad-en-todas-partes | genérica |
| cambioclimatico | B07 | adivinanzas-sobre-el-clima | genérica |
| cambioclimatico | B08 | que-gas | genérica |
| cambioclimatico | B09 | presentando-a-los-combustibles-fosiles | genérica |
| cambioclimatico | B11 | el-gran-debate-sobre-el-clima | genérica |
| cambioclimatico | B12 | comestibles-energetico | genérica |
| cambioclimatico | B13 | investigaciones-urbanas | genérica |
| cambioclimatico | B14 | clasificacion-de-carbono | genérica |
| cambioclimatico | B15 | investigaciones-tormentosas | genérica |
| cambioclimatico | D12 | ideas-brillantes | genérica |
| cfn | A04 | gafas-de-alimentos | genérica (un chico caminando) |
| cfn | A07 | cual-es-tu-posicion | genérica, parche de EE. UU. |
| cfn | A08 | cuatro-esquinas | genérica |
| cfn | A09 | piramide-de-alimentos | genérica |
| cfn | B01 | que-esta-en-riesgo | genérica |
| cfn | B09 | see-los-enlaces | genérica |
| cfn | B10 | discurso-pixar | genérica |
| cfn | C01 | proyecto-servicio-comunitario-cfn | genérica |
| energia | A09 | mundo-de-carbono | genérica |
| energia | B10 | investigacion-geotermica | genérica |
| energia | C02 | desafio-sin-electronicos | genérica |
| energia | D02 | adivina-el-ods | genérica |
| energia | D03 | energia-creativa | genérica |
| energia | D09 | ideas-brillantes-energia | genérica |
| energia | D10 | impactos-sociales | genérica |
| energia | D12 | energia-y-pobreza | genérica |
| energia | E04 | ir-contra-la-corriente | genérica |
| energia | E12 | campana-comunitaria | genérica |
| energia | E14 | iluminando-y-empoderando | genérica |
| nutricion | A13 | charlas-sobre-salud | genérica |
| nutricion | B19 | profundicen-en-las-diferencias | genérica (adultos) |
| nutricion | E09 | educa-a-tu-comunidad | genérica |
| polinizadores | A05 | quien-es-un-polinizador | genérica |
| polinizadores | B07 | cosas-que-usamos | genérica |
| polinizadores | B09 | polinizadores-y-la-economia | genérica |
| polinizadores | C04 | habitats-en-la-naturaleza | genérica |
| polinizadores | C09 | polinizadores-y-contaminacion | genérica |
| polinizadores | D07 | fuerzas-locales | genérica |
| polinizadores | D10 | patrulla-del-parque | genérica |
| rrd | C04 | hazles-saber | genérica |
| rrd | C08 | a-ayudar | genérica |
| rrd | D04 | probando-probando | genérica |
| rrd | D08 | persuade-y-prepara | genérica |
| sacc | A31 | tiempo-de-descomposicion | genérica |
| sacc | C30 | campamento-amigable-con-el-medio-ambiente | genérica |
| sacc | C32 | organizador-comunitario | genérica |
| suelos | A06 | concurso-de-pruebas | genérica |
| suelos | B05 | camisetas-sucias | genérica |
| suelos | B13 | recolectando-datos | genérica |
| suelos | B14 | climas-cambiantes | genérica |
| suelos | C01 | revision-a-los-suelos | genérica |
| suelos | C05 | graficos-del-suelo | genérica |
| suelos | C08 | trabajos-en-el-suelo | genérica |
| suelos | C10 | monologos | genérica |
| suelos | C13 | el-debate-sobre-la-mg | genérica |
| suelos | D01 | celebracion-por-el-suelo | genérica |
