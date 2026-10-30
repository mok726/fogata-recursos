# Observaciones globales

Problemas que afectan a muchas actividades. Cada tanda los referencia por código (G1, G2…) en vez de repetirlos.

## G1. Licencia "CC BY-NC-SA 3.0 IGO" en actividades propias (P1)

Las 11 actividades `original: true` declaran **CC BY-NC-SA 3.0 IGO**. La variante IGO es solo para obras de organizaciones intergubernamentales (FAO, ONU…). Para tus propias obras corresponde una licencia normal, p. ej. **CC BY-NC-SA 4.0** (https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es). Lo mismo aplica a la insignia `general` en `content/_data/badges.js`. No lo toqué en el PR porque es tu decisión qué licencia usar.

**Estado (2026-10-26):** En curso (ya conversado con Mariano).

## G2. Imágenes con extensión `.png` que en realidad son JPEG (P3)

1475 de 1481 archivos `imagenes/actividades/*.png` son JPEG. Los navegadores lo toleran (miran el contenido, no la extensión), pero confunde a herramientas y a quien mantiene el sitio. Renombrar implica tocar ~1040 front matters; se puede hacer con un script, no es urgente.

**Estado (2026-10-26):** **Resuelto en el PR**: 1475 imágenes renombradas a `.jpg` y 3852 referencias actualizadas. El build y las miniaturas funcionan. Quedan como `.png` las 6 que son PNG reales.

## G3. Registro de idioma mezclado (P3)

Hay mezcla de tuteo neutro ("Divide", "Coloca", "Reúne"), voseo rioplatense ("Juntá, Cuidá, Pesá") y usted ("Proponga a la Manada…"). También léxico mezclado: "pajitas" (España) junto a "canilla" (Argentina). Conviene elegir uno (sugiero tuteo neutro en las instrucciones, que es lo que ya predomina) y dejar el voseo solo en títulos con intención.

**Estado (2026-10-26):** **Resuelto en el PR.** El estándar es español rioplatense con voseo, porque el público es Argentina. En la parte adaptada (el texto original no se toca) se hicieron dos cambios. El léxico cambió en 162 archivos: canilla, lapicera, pajita (sí se usa en AR), remera, heladera, basural, tacho, auto, colectivo, poroto, pileta, cartulina, etc. El voseo se aplicó en unos 980 archivos: imperativos (Prepará, Investigá, Pediles), presente (podés, tenés, sos) y pronombres (vos). Se hizo con los scripts `lexico.py` y `voseo.py`, con una lista curada de verbos. Las palabras ambiguas (pregunta, debate, cocina, guía…) solo se convierten cuando funcionan como verbo. Los valores de front matter (taxonomías, materiales) no se tocan. **Puede quedar algún caso suelto**, sobre todo verbos en medio de una oración: avisame si ves uno.

## G4. "Sinodal" y "beneficiarios" (P2)

13 actividades usan "el sinodal" o "los beneficiarios" fuera del texto original. "Sinodal" es un término de examen escolar (México); en un contexto scout argentino se entiende mal. Sugiero "el educador/dirigente" o "quien facilita" y "los participantes"/"los lobatos". No lo cambié en el PR porque es terminología tuya; si me das el OK lo reemplazo en todas.

**Estado (2026-10-26):** **Resuelto.** "Sinodal" es correcto en SAAC: es un experto que da una charla o guía una experiencia, así que no se cambia. "Beneficiario" es un término viejo y el correcto es **protagonista**. Lo corregí en las 3 actividades propias (taller-botella-de-amor y los talleres de tejido). En la-onu-en-tu-pais ("país beneficiario") y en el proyecto CFN ("compañeros, beneficiarios y aliados") significa otra cosa, así que lo dejé.

## G5. Edad vs. ramas (P2)

Rangos SAAC: Lobatos 7–10, Scouts 11–14, Caminantes 14–17, Rovers 18–21. Varias actividades dicen `age: "7-17 años"` pero incluyen `rovers`, o `age: "7-14 años"` e incluyen `caminantes`. O se amplía `age` o se ajusta `age_group`.

**Estado (2026-10-26):** **No es un error.** `age` es el rango ideal, que usan los educadores no scouts. `age_group` es la rama SAAC, y puede incluir ramas fuera del rango ideal como uso complementario con adaptación del dirigente.

## G6. Títulos en "Title Case" inglés (P3)

"¿Cuánto Plástico uso?", "La Basura en su Lugar": en español solo va mayúscula la primera palabra y los nombres propios. No lo toqué en el PR (cambia lo que se ve en todo el sitio); decime si lo querés.

**Estado (2026-10-26):** **Resuelto en el PR**, con el criterio de Mariano: mayúscula inicial en las palabras principales, al estilo inglés, y conectores (artículos, preposiciones, conjunciones) en minúscula. Se aplicó al `title` y al H1 en 538 archivos. No se tocan las siglas ni las palabras con mayúsculas internas (ODS, CO₂, iNaturalist).

## G7. Checklist de verificación no confiable (P2)

El bloque "Checklist de verificación" al final de cada archivo marca todo con `[x]`, aunque falten cosas (p. ej. `junta-cuida-pesa` marca "Texto original incluido" y no lo tiene; las originales marcan "Referencias completas" con `references: []`). El layout no lo muestra, así que no afecta al sitio, pero como control interno no sirve: o se borra o se regenera desde el chequeo automático.

**Estado (2026-10-26):** **Resuelto en el PR**: se borró el checklist de los 1037 archivos que lo tenían. Era un resto de la conversión.

## G8. "Guantes descartables" en talleres de reciclaje (P3)

Talleres que enseñan a reducir plásticos de un solo uso piden guantes descartables. Sugiero guantes de jardinería reutilizables o lavarse las manos.

**Estado (2026-10-26):** **Resuelto** donde no hay riesgo: en taller-huerta-de-botella y taller-macetas-y-germinadoras, los guantes descartables pasan a ser de jardinería reutilizables. En impresiones-de-esporas se mantienen los guantes desechables, porque puede haber hongos tóxicos.

## G9. Datos del chequeo automático

Ver `chequeo-automatico.md`: 248 actividades sin `duration` (vacío o ausente), 12 con `references` vacío (las 11 originales + 1), 1 sin `branch`, 18 títulos duplicados, 2 `activity_code` duplicados (`agua-A32`, `agua-B41`), 5 valores en portugués ("Investigação"), 3 `original` como texto en vez de booleano. Los de portugués y booleanos van corregidos en el PR.

**Estado (2026-10-26):** Aclarado. Que una actividad tenga varias insignias es intencional, y la duración vacía es aceptable cuando la fuente no la da. Los dos `activity_code` duplicados se renumeraron el 2026-10-27, con OK de Mariano: agua-por-todas-partes pasa de A32 a **A51** y tratamiento-del-agua pasa de B41 a **B38**. Hay que verificar contra el PDF cuál es el código real de cada una.

## G10. Licencia declarada que no es la de la fuente (P1, legal)

- **mundomejor (10)**: declaran "CC BY-NC-SA 3.0 IGO", pero la fuente (Scouts de Argentina, *Scouts por los ODS – Mundo Mejor*, abril 2021, https://scouts.org.ar/biblioteca/1497/mundo-mejor/28889/scouts-por-los-ods-mundo-mejor.pdf) dice "© Scouts de Argentina… prohibida su comercialización sin autorización previa". No tiene licencia abierta. Tu uso no es comercial, pero republicar el texto con una licencia CC que la fuente no otorga es incorrecto. **Opciones**: (a) pedir permiso a SAAC (vos dijiste que suelen darlo) y declarar "© Scouts de Argentina, reproducido con permiso"; (b) mientras tanto, cambiar el campo `license` a "© Scouts de Argentina – todos los derechos reservados", como ya hacés en `gosolar`.
- **gosolar (13)**: ya dice "Propiedad intelectual de Scouts de Argentina": está bien declarado. Igual conviene tener el permiso por escrito.
- **cfn (20)**: declaran "CC BY-NC-SA 3.0 IGO" con "© WWF 2020". Hay que verificarlo en la tanda de cfn (WWF no es una organización intergubernamental, así que es poco probable que use la variante IGO).

## G11. Referencias que apuntan a la portada del sitio (P2)

Las 10 de `mundomejor` tienen `references.url: https://www.scouts.org.ar` (la portada). El PDF concreto ya está en `badges.js`; conviene apuntar directo a él.

## G12. Imágenes con parches de otros países (P3)

El `image_prompt` pide uniformes de Scouts de Argentina, pero varias imágenes muestran parches con la **bandera de EE. UU.** u otras (vistas en cfn: `lista-verificacion-huella-ecologica`, `cual-es-tu-posicion`, `minimo-impacto-naturaleza`; en `general`: ninguna). Muchas otras son genéricas: un grupo parado mirando un paisaje, sin relación con la actividad. Lo marco por actividad como "genérica".

## G13. cfn: titularidad y licencia (P1, legal). Detalle de G10

Fuente verificada: OMMS, *Champions for Nature Challenge – Action Kit*, junio 2020 (versión en inglés: https://scouts.mt/wp-content/uploads/2025/08/CFN-ActionKit.pdf). Dice "© 2020 World Organization of the Scout Movement" y "Reproduction is authorised for NSOs and NSAs, which are members of WOSM". O sea:
- El titular es **OMMS**, no WWF (WWF y PNUMA son socios). Las 20 actividades dicen "© WWF 2020": está mal.
- **No es CC BY-NC-SA 3.0 IGO**: está mal.
- La reproducción solo está autorizada para organizaciones miembro (SAAC sí; un sitio personal no). **Opciones**: pedir permiso a OMMS (o a SAAC, que es miembro y podría avalarlo) o usar texto propio y enlazar al kit.
- `badges.js` → `cfn`: `attribution.organization: "FAO"` y `sources: []`, también mal. **Resuelto (2026-10-28)**: OMMS 2020 y fuente Action Kit.

## G14. Letras acentuadas perdidas ("secci  n") en textos visibles (P1)

En `content/_data/badges.js` (gosolar y ciudadesverdes) y en `activity.njk` ("Tiempo preparaci  n") había letras acentuadas reemplazadas por dos espacios: "Exploraci  n", "Desaf  io", "acci  n". Se ven así en el sitio. Corregido en el PR (12 líneas + 1). Probablemente vino de copiar desde un editor con otra codificación; conviene revisar ese flujo.

## G15. Tide Turners (plastics P01–P21): mismo problema que cfn (P1, legal)

Verificado en el *Tide Turners Plastic Challenge – Implementation Manual* (OMMS, junio 2020): "© World Scout Bureau Inc. Reproduction is authorised for NSOs and NSAs, which are members of WOSM". Las 20 actividades P declaran CC BY-NC-SA 3.0 IGO: está mal. Las opciones son las mismas que en G13. Conviene un **único pedido de permiso a OMMS** que cubra cfn, Tide Turners y cualquier otro material OMMS que aparezca en las próximas tandas.

## G16. El campo `link` nunca se mostraba en la página (P1, corregido en el PR)

`activity.njk` mostraba `files` ("Descargas") pero no `link`. Hay 216 actividades con `link` (302 enlaces); en 68 de ellas, 86 enlaces no aparecían en ningún lugar visible (plantillas, videos, guías). Agregué un bloque "Enlaces" junto a "Descargas" que también antepone `https://` a los 26 enlaces que lo tienen sin protocolo. Lo probé con un build local de Eleventy.

## G17. Enlaces viejos (P2)

Las insignias de FAO de 2013–2017 (hambre, suelos, oceano…) tienen enlaces de esa época, muchos casi seguro caídos: campañas terminadas (1billionhungry), dominios migrados (USDA NRCS, WFP), Flash. Desde mi entorno no puedo verificarlos. Propuesta: un script de chequeo de enlaces que corras en `fogata-dev` y que genere la lista de rotos.

**Hecho (2026-10-30):** workflow `.github/workflows/link-check.yml` (lychee). Corre el día 1 de cada mes y a mano desde Actions → "Revisar enlaces"; si hay enlaces rotos abre o actualiza un issue con la etiqueta `enlaces-rotos`. No corre en los PR.
