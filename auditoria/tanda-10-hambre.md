# Tanda 10: insignia "hambre" (49)

**Fuente**: FAO/YUNGA, *Insignia Acabar con el Hambre* (el sitio dice 2013). **Las 49 actividades no tienen el texto original embebido** y no pude abrir el PDF (FAO me bloquea). Por eso **c) no se pudo verificar**: lo marco "sin original". El resto (d, f, g, h) sí se revisó.

**Licencia**: declarada CC BY-NC-SA 3.0 IGO. FAO adoptó CC IGO más tarde (circa 2016); las publicaciones de 2013 suelen decir "© FAO 2013" con permiso de uso no comercial con atribución. El uso de Mariano igual queda cubierto, pero la etiqueta CC puede ser incorrecta. **Probable, verificar con el PDF** (P3 legal).

**Problemas a nivel insignia (P2)**:
1. **Contenido desactualizado (2013)**:
   - **ODM** (D08, D09): los Objetivos de Desarrollo del Milenio terminaron en 2015. D09 pide "proponé tus propios ODS para después de 2015", pero los ODS existen desde 2015. Sugiero reescribir ambas sobre el **ODS 2 Hambre cero**.
   - **"1 USD al día"** (A01, A06): la línea de pobreza extrema del Banco Mundial se actualizó varias veces (hoy es de unos 3 USD por día en PPA). Además, en Argentina convertir dólares tiene doble cotización: mejor usar el valor de la **Canasta Básica Alimentaria del INDEC** por persona, que es un dato local y oficial.
   - La campaña **1billionhungry / endinghunger.org** (A06, C01, E01, E03, E07) terminó hace años. Los enlaces y el mail de envío casi seguro ya no funcionan.
   - El **Ciberbús Escolar de la ONU** (D09) ya no existe.
   - `es.wfp.org` y `quiz.wfp.org` (A07): dominios viejos del PMA. Para B05, el juego vigente del PMA es **Freerice**.
2. **`duration` vacío en las 49** (parte del G9). Los pasos tienen tiempos; se puede sumar automáticamente.
3. **Enlaces sin `https://`** (12 en esta insignia, 26 actividades en total en el sitio, por ejemplo `www.fao.org/schoolgarden/...`).
4. **Léxico no rioplatense**: "fréjoles" (A02, C04) → "porotos"; "lugares de adoración" (E08) → "parroquias o templos".
5. **Conceptos del cuadernillo sin explicar**: "trampa del hambre" y "círculo virtuoso" (C02, D02, D07) y "el glosario del folleto" (A09). Sin el cuadernillo no se entienden.

**Hallazgo del sitio (G16, P1)**: revisando esta tanda vi que **el campo `link` del front matter nunca se muestra en la página de la actividad**: el layout solo muestra `files`. Hay 216 actividades con `link` (302 enlaces), y en 68 de ellas hay 86 enlaces que no aparecen en ningún otro lugar visible. O sea, el visitante no los ve: plantillas, videos, guías. **Agregué en el PR un bloque "Enlaces"** en `activity.njk`, junto a "Descargas", que también completa `https://` cuando falta. Lo probé con un build local de Eleventy y funciona. También corregí "Versi  n original" en el mismo layout (G14).

| Actividad | b/d) falta | f) errores, lógica, seguridad | g) imagen | P |
|---|---|---|---|---|
| comer-alimentos (A01) | Dato actualizado en lugar de "1 USD". | — | ok | P2 |
| el-banquete-del-hambre (A02) | Es el **Banquete del Hambre de Oxfam** (Oxfam America tiene una guía); citarlo como referencia (e). | Alergias alimentarias; "fréjoles" → "porotos". Con castores, explicar antes que es un juego. | buena | P3 |
| sillas-hambrientas (A03) | — | — | buena | P3 |
| bolsas-de-arroz (A04) | De dónde salen los 60 g (¿ración del PMA?): sin fuente. | — | buena | P3 |
| alimentos-extranjeros (A05) | Receta de worldcook.net (en). | "origen e costo" → "origen y costo" (corregido en el PR). Cocina con adultos. | buena | P3 |
| un-dolar-al-dia (A06) | Enlace endinghunger.org caído. Usar la CBA del INDEC. | — | ok | P2 |
| cazadores-de-mitos (A07) | Enlaces WFP viejos (http). | — | ok (parche de EE. UU.) | P2 |
| continentes-hambrientos (A08) | — | "Siete grupos, uno por continente": la Antártida no tiene población. Que sean 6. | buena | P3 |
| entrenamiento-cerebral (A09) | "Glosario del folleto" no enlazado. | — | ok | P3 |
| el-genero-y-el-hambre (A10) | — | — | ok (bandera de EE. UU.) | P3 |
| hambre-en-el-hogar (A11) | Para Argentina: Observatorio de la Deuda Social (UCA), INDEC, Banco de Alimentos (no verifiqué URLs). | — | **sensible**: chicos scouts mirando una villa como si fuera una excursión. Reemplazar. | P2 |
| en-sus-zapatos (A12) | — | **P1 seguridad**: ayuno de 24 h para chicos desde 11 años, solo con "supervisión de un adulto". Agregué en el PR autorización de la familia, contraindicaciones (diabetes, trastornos alimentarios) y una alternativa para menores de 16. "Hambruna patrocinada" (traducción literal de *sponsored famine*) → "ayuno solidario patrocinado" (corregido). **Sugiero además subir la edad mínima a 16.** | ok | P1 |
| hacer-para-aprender (B01) | Enlace sin https y probablemente caído. | — | buena | P3 |
| el-derecho-a-la-alimentacion (B02) | Enlace FAO docrep viejo. | — | ok | P3 |
| alza-tu-voz (B03) | — | — | ok | P3 |
| cadenas-alimentarias (B04) | — | — | floja | P3 |
| juega-por-la-alimentacion (B05) | Enlace WFP viejo → Freerice. | — | ok | P2 |
| dramatizacion-sobre-el-sistema-alimentario (B06) | — | — | ok | P3 |
| alimentos-de-la-realeza (B07) | — | "Soberanía alimentaria" es un concepto político (La Vía Campesina); presentarlo con distintas miradas. | ok | P3 |
| flash-informativo (B08) | — | — | ok (diario con texto inventado) | P3 |
| los-precios-de-los-alimentos (B09) | — | En Argentina, con alta inflación, comparar contra la inflación general es más didáctico. | ok | P3 |
| alimentos-desperdiciados (C01) | Enlace endinghunger.org caído. | — | ok | P3 |
| guion-grafico-sobre-la-trampa-del-hambre (C02) | "Trampa del hambre" sin explicar. | — | floja (hombre gritando) | P2 |
| paisajes-en-peligro (C03) | — | — | buena | P3 |
| el-manejo-de-los-cultivos (C04) | — | "fréjoles" → "porotos". | buena | P3 |
| intercambio-internacional-de-alimentos (C05) | Las reglas del juego de cartas no están: cuántas cartas, cómo se intercambia, cuándo se termina. Ver el juego "Trading Game" de Christian Aid (no verifiqué). | — | ok | P2 |
| los-perfiles-del-hambre (C06) | Enlace FAO viejo. | — | ok | P3 |
| estudio-sobre-el-cambio-climatico (C07) | Para Argentina: Servicio Meteorológico Nacional (datos históricos). | — | ok | P3 |
| presentaciones-sobre-desastres-naturales (C08) | Cruza con rrd. | — | floja (policías frente a un incendio) | P3 |
| historieta-sobre-el-hambre (C09) | Enviar a yunga@fao.org: verificar. | — | ok | P3 |
| el-arbol-del-hambre (D01) | — | — | buena | P3 |
| soluciones-que-empoderan (D02) | "Trampa del hambre" sin explicar. | — | ok | P3 |
| la-cometa-de-la-alimentacion (D03) | — | Barrilete: lejos de cables eléctricos. "Cometa" → "barrilete" en Argentina. | ok ("END hor HUNGER") | P3 |
| poesia-sobre-el-hambre (D04) | Enlace en inglés. | "EMPOERAR" → "EMPODERAR" (corregido en el PR). | ok | P3 |
| un-mundo-sin-hambre (D05) | — | — | ok | P3 |
| pista-de-obstaculos-del-hambre (D06) | Los "problemas de hambre" de cada estación no están: hay que inventarlos. | — | ok | P3 |
| circulo-virtuoso-vs-circulo-vicioso (D07) | Conceptos sin explicar. | — | **mala: pancarta con texto inventado ("VIRTOUSTOUS CIRCLE")** | P2 |
| si-si-no (D08) | — | **ODM obsoletos** → ODS. | mala (tabla falsa) | P2 |
| tus-ods (D09) | — | **Obsoleta** (ver arriba). Ciberbús de la ONU caído. | ok | P2 |
| comida-internacional-a-la-suerte-de-la-olla (E01) | Enlaces viejos. | Alergias. "A la suerte de la olla" (*potluck*): en Argentina, "a la canasta". | buena | P3 |
| comunicacion-alternativa (E02) | — | Flash-mob en vía pública: permiso. | mala (carteles con texto inventado) | P3 |
| mensaje-de-video (E03) | Mails de envío obsoletos. | Consentimiento de imagen. | buena | P3 |
| dj-por-un-dia (E04) | — | — | buena | P3 |
| haz-ruido (E05) | — | — | ok (bandera de EE. UU.) | P3 |
| carrera-contra-el-hambre (E06) | No sé si FAO sigue organizando la "Carrera contra el hambre". | Corte de calle: permisos municipales. | buena | P3 |
| activismo (E07) | **Petición de una campaña cerrada**: la actividad queda sin objeto. Reemplazar por una campaña vigente o por escribir al Congreso. | — | ok | P2 |
| trabajo-voluntario (E08) | Banco de Alimentos de tu ciudad (Red Argentina de Bancos de Alimentos). | "Lugares de adoración" → "parroquias o templos". | buena | P3 |
| carta-para-ejercer-presion (E09) | — | — | ok | P3 |
| alimentos-justos (E10) | — | En Argentina casi no hay productos con sello de Comercio Justo en supermercados; sugerir economía social y ferias de productores. | ok | P3 |

## Estado (2026-10-29)

Aplicado:
- Original de FAO (`i3466s.pdf`, de la carpeta local de Mariano) embebido en las 49 actividades. `references.url` y `badges.js` apuntan a https://www.fao.org/docrep/018/i3466s/i3466s.pdf (© FAO 2013; la licencia del sitio ya decía "todos los derechos reservados").
- A12: FAO la propone desde el nivel 2 (11 años). Queda 11+ con autorización familiar, contraindicaciones y alternativa para menores de 16; se recomienda el ayuno completo desde los 16 (decisión de Mariano).
- Notas por contenido vencido: A01/A06 (línea de pobreza, canasta básica), D08/D09 (ODM → ODS, opción ODS 2), campañas cerradas (A06, C01, E03, E07), Ciberbús (D09), enlaces del PMA (A07). B05 → Freerice.
- Léxico: fréjoles → porotos (A02, C04), lugares de adoración → templos o parroquias (E08), barrilete (D03).
- Seguridad: alergias (A02, A05, E01), cocina (A05), barrilete y cables (D03), vía pública (E02, E06), imagen (E03).
- Didáctica: trampa del hambre / círculos (C02, D02, D07), Antártida (A08), reglas de C05, ejemplos de D06, miradas en B07, B09, E10; bancos de alimentos (E08).
- Pendiente: `duration` vacío (criterio de Mariano: se deja), imágenes en la lista de regeneración, verificación fina de consistencia adaptación ↔ original.
