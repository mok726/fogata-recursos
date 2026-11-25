---
description: "Cómo nació Fogata de Recursos: de las actividades dispersas de una Manada scout a una biblioteca abierta y clasificada."
layout: layouts/base.njk
prose: true
title: Historia del Proyecto
permalink: /historia-del-proyecto/
styles:
  - /css/historia.css
  - /css/historia-nav.css
---

# Historia del Proyecto

<nav class="historia-nav" aria-label="Formas de ver la historia">
  <a href="./" aria-current="page"><span class="material-symbols-outlined" aria-hidden="true">auto_stories</span>Relato</a>
  <a href="../linea-de-tiempo/"><span class="material-symbols-outlined" aria-hidden="true">timeline</span>Línea de tiempo</a>
</nav>

<div class="historia">

## <span class="hist-anio">2021</span> Empiezo en la Manada

Cuando empecé como dirigente de Manada tenía poca idea de actividades, y mi experiencia como docente universitario no se adaptaba al mundo scout.

Todo el tiempo tenía que encontrar actividades para trabajar las inquietudes e intereses de los protagonistas. Google traía cientos de resultados: muchos ya no existían, otros pedían suscribirse para ver las actividades, y entre los que se podían ver había muchísimas cosas útiles, pero era difícil encontrar lo que buscaba.

Lo peor era volver un tiempo después: «el otro día vi la actividad ideal para lo que necesito ahora… ¿dónde era?».

## <span class="hist-anio">2022</span> El acumulador

Empecé a juntar actividades como un verdadero acumulador: PDFs, páginas web guardadas en mi máquina, archivos de texto donde copiaba ideas que encontraba en internet, que me mandaban por WhatsApp o que veía hacer en actividades y encuentros.

Un índice local me permitía encontrar el archivo, pero después había que abrirlo y buscar a mano. Era solo búsqueda de texto.

A mediados de 2022 empecé a estandarizar todo en planillas CSV, que arrancaron con 5 columnas y terminaron con 12. Primero copiaba a mano a Excel; después escribí un par de scripts en PowerShell para copiar los textos y ubicarlos en cada campo. Más scripts (primero PowerShell, después bash y después Python) me dieron mejores búsquedas y me ayudaron a arreglar los errores que iba descubriendo. El resto del año se fue en estandarizar.

## <span class="hist-anio">2023</span> Un formato que da gusto usar

En noviembre de 2022 encontré las fichas del [Champions for Nature Challenge](https://scouts.com.au/wp-content/uploads/2020/10/Champions-for-Nature-Challenge_Action.kit_WEB_0.pdf) y me encantó su formato. Decidí usarlo como base para mis fichas.

Como ya tenía casi todo en CSV, el paso lógico para un tecno-obsesivo era recrear el formato en Word y usar la combinación de correspondencia para convertir cada ficha en un PDF con ese espíritu. Requería bastante trabajo manual, pero el resultado era hermoso.

Ese año la Manada eligió hacer actividades de naturaleza, y el primer programa fue **Go Solar**. A mediados de año ya estaba devorando sus actividades y pedía más, así que fue la oportunidad ideal para presentarle **Campeones de la Naturaleza** y **Plastic Tide Turners**. Decidió hacer los dos desafíos a la vez.

A diferencia de Go Solar, que tiene un plan de actividades completo, para esos dos no había un plan en nuestro país. Así que armamos una propuesta de actividades para cada desafío usando mis fichas como documentación, con el logo de nuestra Manada y los datos del Grupo para darle más impacto. Para eso creé o adapté de otras fuentes mis primeras actividades propias: [La Basura en Su Lugar](../activities/la-basura-en-su-lugar/), los talleres de tejido de papel y de plástico, Botella de Amor, Huerta de Botella, Macetas y Germinadoras, Leños Ecológicos y Papel Ecológico.

La Manada lo disfrutó muchísimo y en unos meses había completado los tres programas. Eso me convenció de seguir documentando en mi «nuevo formato estándar»: sirve para trabajar y también para que los chicos puedan elegir las actividades.

## <span class="hist-anio">2024</span> Todo al español

Muchas actividades estaban en español, pero muchísimas más estaban en inglés y no las podía compartir con muchos de los chicos (y no tan chicos). Me puse a buscar versiones en español o a traducir las que tenía.

Pasé los años siguientes traduciendo cada actividad de la colección y sumando nuevas. La primera traducción fue a lo bruto, enfocada en la cantidad más que en la calidad, y después las fui depurando y refinando. Me avivé a tiempo de traducir en los CSV: si quería la ficha linda, la volvía a generar con la combinación de correspondencia.

El formato lindo tenía un problema: volví a perder buena parte de la capacidad de búsqueda. Buscaba con los scripts sobre el CSV y compartía los PDF lindos. Sí, sé que era un engendro, pero funcionaba.

## <span class="hist-anio">2025</span> La idea de un sitio

Empecé a jugar con la idea de un programa que guardara y buscara las actividades, y que generara el PDF o lo mostrara en pantalla cuando hiciera falta. Pero ya me había gustado poder compartir las actividades, y tener que generar un PDF para hacerlo me parecía poco útil. Así que decidí hacerlo como página web.

Los requisitos que me puse fueron:

- Sin costos: ni de creación, ni de instalación, ni de mantenimiento.
- Páginas estáticas, generadas a partir de mis planillas (la misma lógica de CSV → Word → PDF, pero CSV → generador → HTML), con algunos scripts para los índices.
- Toda la información de mis fichas en PDF.
- Sin publicidad, suscripciones, cookies ni seguimiento.
- Apto para usar en el celular: si alguien se olvidó de preparar la actividad, la puede sacar de la galera.
- Apto para chicos y para docentes de escuela.
- Con espíritu scout, brindando todo lo que un educador scout pueda necesitar.
- Sencillo y eficiente (economía scout), pero a la vez lindo y agradable.

La idea original era hostear páginas estáticas en Azure y listo. Con eso armé las primeras versiones en HTML de mi repositorio de fichas, que en mi cabeza se llamaba «RE-PO-D-Phi-Chas» (sin comentarios). Después de mucho pelear, investigar y aprender, descubrí que había opciones mejores y terminé adaptando las ideas a Nunjucks y Eleventy, con las fichas pasadas de CSV a archivos Markdown.

## <span class="hist-anio">2026</span> Publicación

En abril de 2026 llegué a las primeras versiones de algo no tan feo. En el camino descubrí que podía publicarlo gratis en GitHub Pages, con muchas más opciones de las que había soñado, así que en mayo creé el repositorio y subí la versión inicial del sitio.

Arranqué con unas 100 actividades en Markdown (sí, con otro script para pasarlas de CSV) para probar. Cuando el sitio lució más o menos decente fui sumando actividades y otras insignias; al principio había solo 3 o 4 actividades propias. Cada insignia nueva me mostraba errores o cosas para mejorar, así que las mejoras del sitio se fueron intercalando con el pasaje de insignias de CSV a Markdown, y vuelta otra vez.

Más adelante llegaron las herramientas de inteligencia artificial, que ayudan en tareas de revisión, clasificación y generación de material gráfico para acompañar las actividades.

## Licencias y permisos

Al publicar también llegó la toma de conciencia: no todas las actividades eran libres. Muchas de las que había usado tenían licencias no comerciales, y eso al principio no me preocupó; pero cuando me puse a revisar con más prolijidad vi que algunas directamente no permitían publicarlas sin autorización. Me puse a buscar a los titulares para pedirles permiso.

Dejé de publicar las actividades no autorizadas y me enfoqué en las muchas que son de dominio público o tienen licencias permisivas. Las que requieren permiso quedan en espera hasta que llegue la respuesta.

## Una biblioteca en construcción

Fogata de Recursos no pretende ser una colección cerrada. Es una biblioteca viva que va a seguir sumando actividades, corrigiendo errores y mejorando su organización con el tiempo.

Si llegaste hasta acá, gracias por acompañar este recorrido.

</div>

---

**Mariano (Kotick)**  
Buenos Aires, Argentina
