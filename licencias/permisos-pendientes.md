# Licencias: criterio aplicado y permisos a pedir

Fecha: 2026-10-26. Detalle por actividad en [licencias-por-actividad.csv](licencias-por-actividad.csv) (columna `clase_licencia`).

## Criterio

- Contenido propio (insignias `general` y `comunidad`): **CC BY-NC-SA 4.0**.
- Fuente con licencia igual o más abierta (CC BY 4.0, CC BY-NC-SA 3.0 IGO): la adaptación pasa a **CC BY-NC-SA 4.0**, con una nota que indica la licencia de origen. La 3.0 IGO permite publicar adaptaciones bajo una versión posterior con los mismos elementos (BY-NC-SA), y la FAO pide "la misma licencia o una equivalente".
- Fuente más restrictiva ("todos los derechos reservados"): se muestra el © del titular, una nota con lo que la fuente permite y `status: "permiso-pendiente"` en el front matter. **No** se marca como CC, porque no tenés derecho a otorgar esa licencia.

Cuando llegue un permiso, se cambia la clase de esas actividades con el mismo script y se quita el `status`.

## Resumen

| Clase | Licencia mostrada | Actividades |
|---|---|---|
| `propio` | CC BY-NC-SA 4.0 | 12 |
| `fao_cc` (Energía 2019, Plásticos 2024, Polinizadores 2021, RRD 2020) | CC BY-NC-SA 4.0 + nota "origen CC BY-NC-SA 3.0 IGO" | 169 |
| `fao_ccby` (Ciudades Verdes 2025) | CC BY-NC-SA 4.0 + nota "origen CC BY 4.0" | 40 |
| `fao_arr` (ediciones FAO anteriores a su adopción de CC) | © FAO, todos los derechos reservados | **757** |
| `wosm` (Tide Turners, Champions for Nature) | © World Scout Bureau Inc. | **40** |
| `saac` (Go Solar, Mundo Mejor) | © Scouts de Argentina | **23** |

**Lo incómodo:** 820 de 1041 actividades (79 %) se publicaban como CC BY-NC-SA 3.0 IGO sin que sus fuentes lo permitan. Esas fuentes no autorizan traducir ni adaptar sin pedirlo. Hasta que lleguen los permisos, el sitio publica material sin autorización (aunque no sea comercial y esté atribuido). Si alguno de los titulares se niega, habrá que retirar esas actividades.

## Pedidos de permiso

### 1. FAO: 757 actividades (prioridad alta)

- **Contacto:** copyright@fao.org (derechos y licencias), con copia a yunga@fao.org (equipo YUNGA). También existe el formulario www.fao.org/contact-us/licence-request.
- **Motivo:** las ediciones publicadas antes de que la FAO adoptara Creative Commons dicen "© FAO", con "todos los derechos reservados" o una autorización de uso no comercial. En todas, **traducir y adaptar requiere solicitud**. La FAQ de YUNGA dice que las insignias "pueden adaptarse" contactando a yunga@fao.org, pero eso no es una licencia escrita.
- **Ediciones afectadas** (aviso leído en el PDF salvo donde dice "inferido"):

| Insignia | Edición usada | Aviso de la fuente | Actividades |
|---|---|---|---|
| Agua | 2013 (EN "Water Challenge Badge" y ES) | © FAO 2013 (inferido, misma serie que Océano) | 155 |
| Biodiversidad | 2011 (FAO, AMGS, CBD) | "All rights reserved… Non-commercial uses will be authorized free of charge, upon request" | 112 |
| Bosques | 2013 | © FAO 2013 (inferido) | 89 |
| Seguridad alimentaria y cambio climático | 2009/2010 | "All rights reserved", reproducción no comercial autorizada, sin mención de adaptación | 87 |
| Cambio climático | 2.ª ed., 2015/2016 | © FAO 2015; traducción y adaptación por solicitud | 86 |
| Nutrición | 2017 (EN) / 2018 (ES) | © FAO; traducción y adaptación por solicitud | 76 |
| Océano | 2013 | © FAO 2013, uso con reconocimiento | 53 |
| Acabar con el hambre | 2013 | © FAO 2013 (inferido) | 50 |
| Suelos | 2014 (EN) / 2017 (ES) | © FAO (inferido, anterior a CC) | 49 |

- **Pedir además:** el uso de las imágenes de las insignias (logos y héroes en `imagenes/insignias/`). Las licencias de la FAO excluyen expresamente el logo de la FAO, y los diseños de las insignias son material de la FAO.
- **Sin actividades, pero con página:** Agricultura, Género y Gobernanza. No verifiqué la licencia de esas ediciones; están marcadas como "sin verificar". Incluilas en el mismo correo.

### 2. Organización Mundial del Movimiento Scout: 40 actividades

- **Contacto:** worldbureau@scout.org
- **Motivo:** los kits *Tide Turners Plastic Challenge* (2020, 20 actividades) y *Champions for Nature* (2020, con WWF, 20 actividades) dicen "© World Scout Bureau Inc. Reproduction is authorised for NSOs and NSAs, which are members of the World Organization of the Scout Movement". La autorización es para las organizaciones scouts nacionales, no para un sitio personal y público. Formato de crédito exigido: "© 2020. World Organization of the Scout Movement. Reprinted with permission." (usalo solo cuando tengas el permiso).
- Alternativa más rápida: pedirlo vía Scouts de Argentina, que es organización miembro.

### 3. Scouts de Argentina: 23 actividades

- **Contacto:** no lo encontré publicado. Probablemente el Equipo Nacional de Programa (www.scouts.org.ar); vos tenés mejores canales internos que yo.
- **Motivo:** "Desafío Scouts Go Solar – Manual de Energía Solar" (13) y "Scouts por los ODS – Mundo Mejor" (10). El sitio ya decía "Propiedad intelectual de Scouts de Argentina" en Go Solar, pero Mundo Mejor figuraba como CC BY-NC-SA 3.0 IGO, una licencia para organismos intergubernamentales que Scouts de Argentina no usa. No encontré ninguna licencia abierta.

## Pendientes de verificación (no requieren email)

- Ciudades Verdes 2025: el repo ya decía CC BY 4.0; no pude abrir el PDF para confirmarlo. Si resultara ser BY-NC-SA 3.0 IGO, la licencia mostrada no cambia, solo la nota.
- Polinizadores 2021 y RRD 2020: inferidas como CC BY-NC-SA 3.0 IGO (ediciones de la FAO de 2019 en adelante, como Energía 2019, que sí verifiqué). Conviene mirar la página de créditos del PDF.
- Agua, Bosques, Hambre y Suelos: inferidas como anteriores a CC. Si alguna resultara CC, se pasa a `fao_cc`.

## Borrador de email a la FAO (en inglés)

> Subject: Permission request – Spanish adaptations of YUNGA Challenge Badges (non-commercial website)
>
> Dear FAO Copyright team, dear YUNGA team,
>
> I am a volunteer Scout leader in Argentina. I run "Fogata de Recursos" (https://mok726.github.io/fogata-recursos/), a free, non-commercial website that organises Scout and educational activities for youth leaders and teachers.
>
> The site includes activities adapted, and in some cases translated into Spanish, from the following YUNGA Challenge Badges: Water (2013), Biodiversity (2011), Forests (2013), Food Security and Climate Change (2009), Climate Change (2nd ed., 2016), Nutrition (2017/2018), Ocean (2013), Ending Hunger (2013) and Soils (2014/2017). Each activity cites FAO as the source and copyright holder, links to the original publication and states that FAO did not create the adaptation and does not endorse it.
>
> I would like to request permission to publish these translations and adaptations under the same terms FAO uses for its newer badges (CC BY-NC-SA 3.0 IGO or an equivalent licence such as CC BY-NC-SA 4.0), and to display the badge artwork on the corresponding pages. If FAO prefers other conditions, or wants any content removed, I will comply.
>
> Kind regards,
> Mariano S. Cosentino (LU1DWN)

Los emails a la OMMS y a Scouts de Argentina siguen el mismo esquema: qué es el sitio, qué material, que es no comercial, cómo se atribuye y qué licencia pedís.
