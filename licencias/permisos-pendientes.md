# Licencias: criterio aplicado y permisos a pedir

Actualizado: 2026-10-26. Detalle por actividad en [licencias-por-actividad.csv](licencias-por-actividad.csv) (columna `clase_licencia`). Los emails están en [emails-permisos.md](emails-permisos.md).

## Criterio

- Contenido propio (insignias `general` y `comunidad`): **CC BY-NC-SA 4.0**.
- Fuente con licencia CC **verificada** en el PDF (FAO, Energía 2019 y Plásticos 2024, ambas CC BY-NC-SA 3.0 IGO): la adaptación pasa a **CC BY-NC-SA 4.0**, con una nota que indica la licencia de origen. La 3.0 IGO permite publicar adaptaciones bajo una versión posterior con los mismos elementos, y la FAO pide "la misma licencia o una equivalente".
- Fuente más restrictiva ("todos los derechos reservados") o **con licencia que no se pudo confirmar**: se muestra el © del titular, una nota y `status: "permiso-pendiente"`. No se marca como CC. (Decisión de Mariano, 2026-10-26: todo lo que no se pueda confirmar requiere permiso.)

Cuando llegue un permiso, se cambia la clase en `licencias/scripts/aplicar_licencias.py` (y en `licencias_insignias.py`), se vuelven a ejecutar ambos scripts y desaparece el `status`.

## Resumen

| Clase | Licencia mostrada | Actividades |
|---|---|---|
| `propio` | CC BY-NC-SA 4.0 | 12 |
| `fao_cc` (Energía 2019, Plásticos FAO 2024) | CC BY-NC-SA 4.0 + nota "origen CC BY-NC-SA 3.0 IGO" | 96 |
| `fao_arr` (ediciones FAO anteriores a CC) | © FAO, todos los derechos reservados | 757 |
| `fao_sinverificar` (Polinizadores, RRD, Ciudades Verdes) | © FAO, licencia sin confirmar | 113 |
| `wosm` (Tide Turners, Champions for Nature) | © World Scout Bureau Inc. | 40 |
| `saac` (Mundo Mejor) | © Scouts de Argentina | 10 |
| `solafrica` (Go Solar) | © Solafrica, sin licencia publicada | 13 |

Emails a la FAO, la OMMS, Solafrica y Scouts de Argentina enviados el 26/10/2026. Atribuciones, enlaces y avisos de traducción ajustados a lo declarado en los emails con `licencias/scripts/corregir_atribuciones.py`.

**Con permiso pendiente: 933 de 1041 actividades (90 %).** Si algún titular se niega, hay que retirar esas actividades.

## 1. FAO: 870 actividades

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
| Ciudades Verdes | 2025 | Sin confirmar (PDF inaccesible) | 40 |
| Polinizadores | 2021 | Sin confirmar (PDF inaccesible) | 37 |
| Reducción del riesgo de desastres | 2020 | Sin confirmar (PDF inaccesible) | 36 |

Además, en el mismo email:
- **Imágenes de las insignias** (`imagenes/insignias/`) de todas las insignias YUNGA, incluidas Energía y Plásticos. Las licencias de la FAO excluyen su logo, y los diseños de las insignias son material de la FAO.
- **Páginas sin actividades:** Agricultura, Género y Gobernanza (descripción e imagen).

## 2. Organización Mundial del Movimiento Scout (OMMS): 40 actividades

- **Contacto:** worldbureau@scout.org. Alternativa: pedirlo a través de Scouts de Argentina, que es organización miembro.
- **Motivo:** *Tide Turners Plastic Challenge* (2020, 20 actividades) y *Champions for Nature* (2020, con WWF, 20 actividades). Ambos dicen: "© World Scout Bureau Inc. Reproduction is authorised for NSOs and NSAs, which are members of the World Organization of the Scout Movement". Formato de crédito que piden: "© 2020. World Organization of the Scout Movement. Reprinted with permission."

## 3. Solafrica: 13 actividades (Go Solar). Email enviado el 26/10/2026

- **Contacto:** scoutsgosolar@solafrica.ch (figura en el manual). Para la versión en español: centros.scouts@scouts.org.mx.
- **Motivo:** las actividades de Go Solar salen del manual *Scouts Go Solar – Manual de Energía Solar* (Solafrica, junio de 2015; adaptación al español de Abelardo Castillo Rosas). Lo desarrollaron con YUNGA y la OMMS. El manual no trae aviso de copyright ni licencia; solo dice que "la OMMS respalda el uso de este manual […] por Guías y Scouts […], quienes lo pueden adaptar en lo necesario para sus necesidades y requerimientos locales". Eso es un respaldo de la OMMS para usarlo en el programa, no una licencia del autor para republicarlo en la web.

## 4. Scouts de Argentina: 10 actividades (Mundo Mejor). Email enviado el 26/10/2026

- **Contacto:** no encontré uno publicado. Probablemente el Equipo Nacional de Programa (www.scouts.org.ar).
- **Motivo:** *Desafío Scouts Go Solar – Manual de Energía Solar* (2021, 13 actividades) y *Scouts por los ODS – Mundo Mejor* (2021, 10 actividades). No tienen ninguna licencia abierta publicada.
