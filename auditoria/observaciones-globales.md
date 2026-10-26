# Observaciones globales

Problemas que afectan a muchas actividades. Cada tanda los referencia por código (G1, G2…) en vez de repetirlos.

## G1. Licencia "CC BY-NC-SA 3.0 IGO" en actividades propias (P1)

Las 11 actividades `original: true` declaran **CC BY-NC-SA 3.0 IGO**. La variante IGO es solo para obras de organizaciones intergubernamentales (FAO, ONU…). Para tus propias obras corresponde una licencia normal, p. ej. **CC BY-NC-SA 4.0** (https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es). Lo mismo aplica a la insignia `general` en `content/_data/badges.js`. No lo toqué en el PR porque es tu decisión qué licencia usar.

## G2. Imágenes con extensión `.png` que en realidad son JPEG (P3)

1475 de 1481 archivos `imagenes/actividades/*.png` son JPEG. Los navegadores lo toleran (miran el contenido, no la extensión), pero confunde a herramientas y a quien mantiene el sitio. Renombrar implica tocar ~1040 front matters; se puede hacer con un script, no es urgente.

## G3. Registro de idioma mezclado (P3)

Hay mezcla de tuteo neutro ("Divide", "Coloca", "Reúne"), voseo rioplatense ("Juntá, Cuidá, Pesá") y usted ("Proponga a la Manada…"). También léxico mezclado: "pajitas" (España) junto a "canilla" (Argentina). Conviene elegir uno (sugiero tuteo neutro en las instrucciones, que es lo que ya predomina) y dejar el voseo solo en títulos con intención.

## G4. "Sinodal" y "beneficiarios" (P2)

13 actividades usan "el sinodal" o "los beneficiarios" fuera del texto original. "Sinodal" es un término de examen escolar (México); en un contexto scout argentino se entiende mal. Sugiero "el educador/dirigente" o "quien facilita" y "los participantes"/"los lobatos". No lo cambié en el PR porque es terminología tuya; si me das el OK lo reemplazo en todas.

## G5. Edad vs. ramas (P2)

Rangos SAAC: Lobatos 7–10, Scouts 11–14, Caminantes 14–17, Rovers 18–21. Varias actividades dicen `age: "7-17 años"` pero incluyen `rovers`, o `age: "7-14 años"` e incluyen `caminantes`. O se amplía `age` o se ajusta `age_group`.

## G6. Títulos en "Title Case" inglés (P3)

"¿Cuánto Plástico uso?", "La Basura en su Lugar": en español solo va mayúscula la primera palabra y los nombres propios. No lo toqué en el PR (cambia lo que se ve en todo el sitio); decime si lo querés.

## G7. Checklist de verificación no confiable (P2)

El bloque "Checklist de verificación" al final de cada archivo marca todo con `[x]`, aunque falten cosas (p. ej. `junta-cuida-pesa` marca "Texto original incluido" y no lo tiene; las originales marcan "Referencias completas" con `references: []`). El layout no lo muestra, así que no afecta al sitio, pero como control interno no sirve: o se borra o se regenera desde el chequeo automático.

## G8. "Guantes descartables" en talleres de reciclaje (P3)

Talleres que enseñan a reducir plásticos de un solo uso piden guantes descartables. Sugiero guantes de jardinería reutilizables o lavarse las manos.

## G9. Datos del chequeo automático

Ver `chequeo-automatico.md`: 248 actividades sin `duration` (vacío o ausente), 12 con `references` vacío (las 11 originales + 1), 1 sin `branch`, 18 títulos duplicados, 2 `activity_code` duplicados (`agua-A32`, `agua-B41`), 5 valores en portugués ("Investigação"), 3 `original` como texto en vez de booleano. Los de portugués y booleanos van corregidos en el PR.

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
- `badges.js` → `cfn`: `attribution.organization: "FAO"` y `sources: []`, también mal.

## G14. Letras acentuadas perdidas ("secci  n") en textos visibles (P1)

En `content/_data/badges.js` (gosolar y ciudadesverdes) y en `activity.njk` ("Tiempo preparaci  n") había letras acentuadas reemplazadas por dos espacios: "Exploraci  n", "Desaf  io", "acci  n". Se ven así en el sitio. Corregido en el PR (12 líneas + 1). Probablemente vino de copiar desde un editor con otra codificación; conviene revisar ese flujo.

## G15. Tide Turners (plastics P01–P21): mismo problema que cfn (P1, legal)

Verificado en el *Tide Turners Plastic Challenge – Implementation Manual* (OMMS, junio 2020): "© World Scout Bureau Inc. Reproduction is authorised for NSOs and NSAs, which are members of WOSM". Las 20 actividades P declaran CC BY-NC-SA 3.0 IGO: está mal. Las opciones son las mismas que en G13. Conviene un **único pedido de permiso a OMMS** que cubra cfn, Tide Turners y cualquier otro material OMMS que aparezca en las próximas tandas.
