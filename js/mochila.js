/* Mi mochila: actividades guardadas por el visitante.
 *
 * Todo vive en el almacenamiento local (localStorage) del navegador
 * de quien visita el sitio. No se manda a ningún lado: el sitio no
 * tiene servidor ni forma de ver esta lista.
 *
 * Cualquier botón con data-mochila="<url de la ficha>" (más
 * data-titulo, data-dur, data-img, data-tipo) agrega o saca la
 * actividad. Los elementos con data-mochila-cuenta muestran cuántas
 * hay. /mi-mochila/ usa window.FogataMochila para armar la lista.
 */
(function () {

  var KEY = "fogata-mochila";
  var oyentes = [];

  function leer() {
    try {
      var v = JSON.parse(localStorage.getItem(KEY) || "[]");
      return Array.isArray(v) ? v.filter(function (x) { return x && x.url; }) : [];
    } catch (e) {
      return [];
    }
  }

  function guardar(lista) {
    try {
      if (lista.length) localStorage.setItem(KEY, JSON.stringify(lista));
      else localStorage.removeItem(KEY);
      return true;
    } catch (e) {
      return false;
    }
  }

  function indice(lista, url) {
    for (var i = 0; i < lista.length; i++) if (lista[i].url === url) return i;
    return -1;
  }

  function datos(b) {
    return {
      url: b.getAttribute("data-mochila"),
      titulo: b.getAttribute("data-titulo") || "",
      dur: b.getAttribute("data-dur") || "",
      img: b.getAttribute("data-img") || "",
      tipo: b.getAttribute("data-tipo") || ""
    };
  }

  // Botones en el documento y en los <template> (tarjetas que el
  // listado todavía no mostró).
  function botones() {
    var todos = Array.prototype.slice.call(document.querySelectorAll("[data-mochila]"));
    document.querySelectorAll("template").forEach(function (t) {
      todos = todos.concat(Array.prototype.slice.call(t.content.querySelectorAll("[data-mochila]")));
    });
    return todos;
  }

  function pintar() {
    var lista = leer();
    botones().forEach(function (b) {
      var on = indice(lista, b.getAttribute("data-mochila")) >= 0;
      b.setAttribute("aria-pressed", on ? "true" : "false");
      b.setAttribute("title", on ? "Sacar de mi mochila" : "Guardar en mi mochila");
      var txt = b.querySelector(".mochila-txt");
      if (txt) txt.textContent = on ? "En mi mochila" : "Guardar en mi mochila";
      var corto = b.querySelector(".mochila-txt-corto");
      if (corto) corto.textContent = on ? "Guardada" : "Guardar";
      var ico = b.querySelector(".mochila-ico");
      if (ico) ico.textContent = on ? "check_circle" : "backpack";
    });
    document.querySelectorAll("[data-mochila-cuenta]").forEach(function (el) {
      el.textContent = lista.length;
      el.hidden = !lista.length;
    });
    var nav = document.querySelector(".navbar-mochila");
    if (nav) nav.setAttribute("aria-label", "Mi mochila" + (lista.length ? " (" + lista.length + ")" : ""));
  }

  function avisar() {
    var a = document.getElementById("mochila-aviso");
    if (!a) {
      a = document.createElement("div");
      a.id = "mochila-aviso";
      a.className = "mochila-aviso";
      a.setAttribute("role", "status");
      document.body.appendChild(a);
    }
    a.textContent = "Tu navegador no deja guardar datos de este sitio (modo privado o datos bloqueados), así que la mochila no funciona.";
    a.hidden = false;
    setTimeout(function () { a.hidden = true; }, 6000);
  }

  function cambiar(lista) {
    if (!guardar(lista)) { avisar(); return false; }
    pintar();
    oyentes.forEach(function (f) { f(lista); });
    return true;
  }

  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest("[data-mochila]");
    if (!b) return;
    e.preventDefault();
    var lista = leer();
    var i = indice(lista, b.getAttribute("data-mochila"));
    if (i >= 0) lista.splice(i, 1);
    else lista.push(datos(b));
    cambiar(lista);
  });

  // Otra pestaña cambió la mochila.
  window.addEventListener("storage", function (e) {
    if (e.key === KEY || e.key === null) {
      pintar();
      oyentes.forEach(function (f) { f(leer()); });
    }
  });

  // En la ficha: si ya está en la mochila, se actualizan título,
  // duración e imagen por si cambiaron desde que se guardó.
  var propio = document.querySelector("[data-mochila][data-mochila-ficha]");
  if (propio) {
    var lista = leer();
    var i = indice(lista, propio.getAttribute("data-mochila"));
    if (i >= 0) {
      var nuevo = datos(propio);
      if (JSON.stringify(nuevo) !== JSON.stringify(lista[i])) {
        lista[i] = nuevo;
        guardar(lista);
      }
    }
  }

  window.FogataMochila = {
    leer: leer,
    guardar: cambiar,
    alCambiar: function (f) { oyentes.push(f); }
  };

  pintar();

})();
