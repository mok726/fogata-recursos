# Licencias: criterio aplicado y permisos a pedir

Actualizado: 2026-11-24. Detalle por actividad en [licencias-por-actividad.csv](licencias-por-actividad.csv) (columna `clase_licencia`). Los emails están en [emails-permisos.md](emails-permisos.md).

## Criterio

- Contenido propio (insignias `general` y `comunidad`): **CC BY-NC-SA 4.0**.
- Fuente con licencia CC **verificada** (FAO: Energía 2019, Plásticos 2024, Polinizadores 2021 y Reducción del Riesgo de Desastres 2020/2022, CC BY-NC-SA 3.0 IGO; Ciudades Verdes 2025, CC BY 4.0, que admite publicar la adaptación con cualquier licencia citando la fuente): la adaptación pasa a **CC BY-NC-SA 4.0**, con una nota que indica la licencia de origen. La 3.0 IGO permite publicar adaptaciones bajo una versión posterior con los mismos elementos, y la FAO pide "la misma licencia o una equivalente".
- Fuente más restrictiva ("todos los derechos reservados") o **con licencia que no se pudo confirmar**: se muestra el © del titular, una nota y `status: "permiso-pendiente"`. No se marca como CC. (Decisión de Mariano, 2026-10-26: todo lo que no se pueda confirmar requiere permiso.)

Cuando llegue un permiso, se cambia la clase en `licencias/scripts/aplicar_licencias.py` (y en `licencias_insignias.py`), se vuelven a ejecutar ambos scripts y desaparece el `status`.

## Resumen

| Clase | Licencia mostrada | Actividades |
|---|---|---|
| `propio` | CC BY-NC-SA 4.0 | 12 |
| `fao_cc` (Energía 2019, Plásticos FAO 2024, Polinizadores 2021, RRD 2020) | CC BY-NC-SA 4.0 + nota "origen CC BY-NC-SA 3.0 IGO" | 169 |
| `fao_ccby` (Ciudades Verdes 2025) | CC BY-NC-SA 4.0 + nota "origen CC BY 4.0" | 40 |
| `fao_arr` (ediciones FAO anteriores a CC) | © FAO, todos los derechos reservados | 765 |
| `wosm` (Tide Turners, Champions for Nature) | © World Scout Bureau Inc.; los términos de scout.org lo ofrecen bajo CC BY-NC-SA 2.5; falta la confirmación expresa | 40 |
| `saac` (Mundo Mejor) | © Scouts de Argentina | 10 |
| `solafrica` (Go Solar) | © Solafrica, publicación autorizada por Solafrica; faltan Scouts de Argentina y la confirmación expresa de la OMMS | 13 |

Emails a la FAO, la OMMS, Solafrica y Scouts de Argentina enviados el 26/10/2026. Atribuciones, enlaces y avisos de traducción ajustados a lo declarado en los emails con `licencias/scripts/corregir_atribuciones.py`.

**Estado en main al 2026-11-24: 896 de 1.330 actividades (67 %) esperan algún permiso.** Si algún titular se niega, hay que retirar esas actividades.

| Titular | Fichas | Qué falta | Pedido |
|---|---|---|---|
| FAO (ediciones anteriores a CC) | 765 | traducir, adaptar y publicar | 26/10/2026; reenvío por formulario 24/11/2026 |
| The Scout Association (UK), Wolf Cub's Handbook | 68 | solo para EE. UU. (URAA) | 01/11/2026 |
| OMMS (Tide Turners, Champions for Nature) | 40 | confirmación expresa (`permiso-parcial`) | 26/10 y 09/11/2026 |
| Scouts de Argentina (Mundo Mejor) | 10 | publicar | 26/10/2026 |
| Scouts de Argentina + OMMS (Go Solar; Solafrica ya autorizó) | 13 | publicar (`permiso-parcial`) | 26/10/2026 |

Las fichas de terceros de ASDE, Les Scouts, Setem, Hegoa, AGSCh, WAGGGS/AMGS y OMMS (sdgs.scout.org) están en PRs en espera y no se publicaron todavía.

2026-11-24: se verificó en openknowledge.fao.org la licencia de Polinizadores (2021, CC BY-NC-SA 3.0 IGO), Reducción del Riesgo de Desastres (EN 2020 y ES 2022, CC BY-NC-SA 3.0 IGO) y Ciudades Verdes (2025, CC BY 4.0). Sus 113 fichas dejaron de figurar con permiso pendiente. Las 20 fichas del Cuaderno de Trabajo Solar 2022 de Solafrica quedaron sin `status`, porque no les falta ningún permiso.

## 1. FAO: 765 actividades con permiso pendiente

- **Contacto:** copyright@fao.org, con copia a yunga@fao.org. Alternativa: el formulario www.fao.org/contact-us/licence-request.

| Insignia | Edición | Aviso de la fuente | Actividades |
|---|---|---|---|
| Agua | 2013 (EN y ES) | © FAO 2013; traducción y adaptación por solicitud (verificado, i3225e) | 155 |
| Biodiversidad | 2011 | "All rights reserved… Non-commercial uses will be authorized… upon request" (verificado, i1885e) | 112 |
| Bosques | 2013 | Sin confirmar (anterior a CC) | 89 |
| Seguridad alimentaria y cambio climático | 2009/2010 | "All rights reserved", sin mención de adaptación (verificado, i1091e) | 87 |
| Cambio climático | 2.ª ed., 2016 | © FAO 2015; traducción y adaptación por solicitud (verificado, i5216e) | 86 |
| Nutrición | 2017 EN / 2018 ES | © FAO; traducción y adaptación por solicitud (verificado, i6590) | 76 |
| Océano | 2013 | © FAO 2013 (verificado, i3465e) | 53 |
| Acabar con el hambre | 2013 | Sin confirmar (anterior a CC) | 50 |
| Suelos | 2014 EN / 2017 ES | Sin confirmar (anterior a CC) | 49 |
| Ciudades Verdes | 2025 | CC BY 4.0 (verificado en openknowledge, 24/11/2026): ya no requiere permiso | 40 |
| Polinizadores | 2021 | CC BY-NC-SA 3.0 IGO (verificado en openknowledge, 24/11/2026): ya no requiere permiso | 37 |
| Reducción del riesgo de desastres | 2020 EN / 2022 ES | CC BY-NC-SA 3.0 IGO (verificado en openknowledge, 24/11/2026): ya no requiere permiso | 36 |

Además, en el mismo email:
- **Imágenes de las insignias** (`imagenes/insignias/`) de todas las insignias YUNGA, incluidas Energía y Plásticos. Las licencias de la FAO excluyen su logo, y los diseños de las insignias son material de la FAO.
- **Páginas sin actividades:** Agricultura, Género y Gobernanza (descripción e imagen).

## 2. Organización Mundial del Movimiento Scout (OMMS): 40 actividades

- **Contacto:** worldbureau@scout.org. Alternativa: pedirlo a través de Scouts de Argentina, que es organización miembro.
- **Motivo:** *Tide Turners Plastic Challenge* (2020, 20 actividades) y *Champions for Nature* (2020, con WWF, 20 actividades). Ambos dicen: "© World Scout Bureau Inc. Reproduction is authorised for NSOs and NSAs, which are members of the World Organization of the Scout Movement". Formato de crédito que piden: "© 2020. World Organization of the Scout Movement. Reprinted with permission."
- **Términos de scout.org** (https://www.scout.org/terms-and-conditions, V2.0, 25/05/2018): el material del sitio se ofrece bajo CC BY-NC-SA 2.5, que permite publicar las adaptaciones con CC BY-NC-SA 4.0. Pero los mismos términos hablan solo de uso personal, sin obras derivadas, y piden que quienes no son organizaciones miembro soliciten permiso a digital@scout.org. Tampoco dicen si cubren sdgs.scout.org ni los PDFs. Las marcas y los logos requieren permiso expreso. Por eso las fichas quedan como `permiso-parcial` mientras se espera la confirmación.
- **Seguimiento:** el 09/11/2026 se envió un seguimiento a worldbureau@scout.org que suma los desafíos de Scouts for SDGs, y otro email a digital@scout.org.

## 3. Solafrica: 13 actividades (Go Solar). Email enviado el 26/10/2026. **AUTORIZADO el 09/11/2026**

> "Regarding publication, it's perfectly fine from our side (from Solafrica). Our idea is to have the contents available online, freely accessible for everyone. So your website definitely contributes to that." (Solafrica)

Esto cubre a Solafrica. Siguen pendientes:
- **Scouts de Argentina**, por el desafío Go Solar (ver punto 4).
- **La OMMS**, coautora del programa. El email del 26/10 incluía Go Solar. Los términos de scout.org (CC BY-NC-SA 2.5) lo permitirían; falta la confirmación expresa.
- La adaptación al español es de Abelardo Castillo Rosas (Scouts de México). Si el texto publicado sale de esa traducción, también conviene su OK (centros.scouts@scouts.org.mx).


- **Contacto:** scoutsgosolar@solafrica.ch (figura en el manual). Para la versión en español: centros.scouts@scouts.org.mx.
- **Motivo:** las actividades de Go Solar salen del manual *Scouts Go Solar – Manual de Energía Solar* (Solafrica, junio de 2015; adaptación al español de Abelardo Castillo Rosas). Lo desarrollaron con YUNGA y la OMMS. El manual no trae aviso de copyright ni licencia; solo dice que "la OMMS respalda el uso de este manual […] por Guías y Scouts […], quienes lo pueden adaptar en lo necesario para sus necesidades y requerimientos locales". Eso es un respaldo de la OMMS para usarlo en el programa, no una licencia del autor para republicarlo en la web.

## 4. Scouts de Argentina: 10 actividades (Mundo Mejor). Email enviado el 26/10/2026

- **Contacto:** no encontré uno publicado. Probablemente el Equipo Nacional de Programa (www.scouts.org.ar).
- **Motivo:** *Desafío Scouts Go Solar – Manual de Energía Solar* (2021, 13 actividades) y *Scouts por los ODS – Mundo Mejor* (2021, 10 actividades). No tienen ninguna licencia abierta publicada.

## 5. Manos Unidas: material educativo. **AUTORIZADO el 18/11/2026**

- **Permiso:** el departamento de educación de Manos Unidas autorizó, el 18/11/2026, el uso de todo su material educativo. Lo publican en https://www.manosunidas.org/donde-trabajamos/espana/profesores-alumnos/recursos-educativos.
- **Fichas alcanzadas:** «Noticias Volantes» (`manosunidas-E01`), que *Repensar el mundo* (ASDE, 2003) toma de los materiales educativos de Manos Unidas. Colección `manosunidas` creada el 18/11/2026; el resto de las fichas se suma más adelante.
- **Fuera del permiso:** obras de otros autores que el material de Manos Unidas usa (por ejemplo, el relato «Un pequeño país», de Natalie Kuperman). Se citan, no se copian.
- Las fichas muestran «© Manos Unidas – Publicación autorizada por Manos Unidas» y «Autorizado: Manos Unidas (18/11/2026)».

## The Scout Association (UK): Wolf Cub's Handbook 1938 (agregado el 2026-11-01)
- Motivo: es dominio público en AR y UK (B-P murió en 1941), pero en EE. UU. está protegido hasta 2033 por la URAA, y el sitio está alojado en GitHub (EE. UU.).
- Contacto: support@scouts.org.uk (POR 2e.1). Email: emails-permisos.md, punto 5.
- Mientras tanto: se publica igual (decisión de Mariano del 2026-11-01: se acepta el riesgo de un DMCA).

## Material de la carpeta de Chile (agregado el 2026-11-18)
Inventario completo y decisiones: `fuentes/chile/inventario-chile.md`. Todavía no hay fichas: se crean cuando llegue cada permiso.

| Titular | Material | Contacto | Email | Estado |
|---|---|---|---|---|
| Guías y Scouts de Chile (AGSCh) | Yunga Agricultura (Choyu), Desafío Migrantes, Diversia, otras fichas propias | planetasostenible@guiasyscoutschile.cl | `email-guias-scouts-chile.md` | Enviado por Mariano (2026-11-17), esperando respuesta |
| AMGS/WAGGGS | Todas por el Planeta, IA y género #AINeedsHer, Surf Smart 2.0, Voces contra la Violencia; opcional Libre de Ser Yo y Girl Powered Nutrition | wagggs@wagggs.org (CC opcional wtd@wagggs.org); no hay dirección de permisos publicada | `email-wagggs.md` (inglés para enviar, español de referencia) | SIN ENVIAR |
| OMMS | He For She (con ONU Mujeres), Innovadores de Impacto en español (PR #86), opcional Patrimonito (con UNESCO) | worldbureau@scout.org, CC digital@scout.org (responder en el hilo existente) | `email-omms-agregado-chile.md` | SIN ENVIAR |
