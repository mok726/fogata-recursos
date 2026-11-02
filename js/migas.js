/* Migas de pan de las actividades según desde dónde se llegó.
 *
 * En cualquier página que no sea una actividad, al hacer clic en
 * un enlace a una actividad se guarda el camino de esa página
 * (sección, página y la búsqueda/filtros aplicados).
 *
 * En la actividad (nav.breadcrumbs[data-migas]) se usa ese camino
 * si se llegó desde esa misma página, o desde otra actividad que ya
 * lo estaba usando (anterior/siguiente, relacionadas). Si no (enlace
 * directo, otra pestaña, buscador externo), queda la miga por
 * defecto: Inicio > Actividades > título.
 */
(function () {

  var BASE = document.documentElement.dataset.base || "/";
  var KEY = "fogata-origen";

  var SECCIONES = {
    activities: "Actividades",
    badges: "Insignias",
    edades: "Edades",
    ods: "ODS",
    competencias: "Competencias",
    valoresScout: "Valores Scout",
    metodoScout: "Método Scout",
    activityType: "Tipo de Actividad"
  };

  function esActividad(path) {
    var pre = BASE + "activities/";
    return path.indexOf(pre) === 0 && /^[^/]+\/$/.test(path.slice(pre.length));
  }

  function leer() {
    try { return JSON.parse(localStorage.getItem(KEY) || "null"); }
    catch (e) { return null; }
  }

  function guardar(v) {
    try {
      if (v) localStorage.setItem(KEY, JSON.stringify(v));
      else localStorage.removeItem(KEY);
    } catch (e) { /* sin almacenamiento: queda la miga por defecto */ }
  }

  function texto(el) {
    return el ? el.textContent.replace(/\s+/g, " ").trim() : "";
  }

  // Nombre de una búsqueda en /activities/ según sus parámetros.
  function nombreBusqueda(params) {
    var q = (params.get("search") || "").trim();
    var tag = (params.get("etiqueta") || "").trim();
    if (q) return "Búsqueda «" + q + "»";
    if (tag) return "Etiqueta «" + tag.replace(/-/g, " ") + "»";
    return "Búsqueda con filtros";
  }

  // Camino de la página actual, sin "Inicio" ni la actividad.
  function caminoActual() {
    var path = location.pathname;
    var aqui = path + location.search;
    var partes = path.slice(BASE.length).split("/").filter(Boolean);
    var titulo = texto(document.querySelector("main h1")) || document.title;
    var migas = [];

    if (!partes.length) return migas;              // inicio

    var seccion = SECCIONES[partes[0]];

    if (!seccion) {                                 // otras páginas
      migas.push({ t: titulo, u: aqui });
      return migas;
    }

    migas.push({ t: seccion, u: BASE + partes[0] + "/" });

    if (partes[0] === "activities") {
      if (location.search) migas.push({ t: nombreBusqueda(new URLSearchParams(location.search)), u: aqui });
    } else if (partes.length > 1) {
      migas.push({ t: titulo, u: aqui });
    }

    return migas;
  }

  function registrar(e) {
    var a = e.target.closest && e.target.closest("a[href]");
    if (!a || esActividad(location.pathname)) return;
    var u;
    try { u = new URL(a.href, location.href); } catch (err) { return; }
    if (u.origin !== location.origin || !esActividad(u.pathname)) return;
    guardar({ desde: location.pathname, migas: caminoActual() });
  }

  function pintar(nav) {
    var origen = leer();
    var ref = null;
    try { ref = document.referrer ? new URL(document.referrer) : null; } catch (e) {}

    var vale = origen && ref && ref.origin === location.origin &&
      (ref.pathname === origen.desde || (esActividad(ref.pathname) && origen.enUso));

    if (!vale) {
      guardar(null);
      return;
    }

    origen.enUso = true;
    guardar(origen);

    var titulo = nav.querySelector("span:last-child");
    var items = [{ t: "Inicio", u: BASE }].concat(origen.migas);

    nav.replaceChildren();
    items.forEach(function (m) {
      var a = document.createElement("a");
      a.href = m.u;
      a.textContent = m.t;
      nav.append(a, " > ");
    });
    nav.append(titulo);
  }

  var nav = document.querySelector("nav.breadcrumbs[data-migas]");
  if (nav && esActividad(location.pathname)) {
    pintar(nav);
  } else {
    document.addEventListener("click", registrar, true);
    document.addEventListener("auxclick", registrar, true);
  }

})();
