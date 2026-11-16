// Intent: the start guard = when the book cannot open on a device (a browser too old for the game's script, a script
// stopped by an error, a library that never comes), the page says so and what to try, instead of staying blank.
// Why: Clément, 16/11: an old Galaxy Tab A (2016) showed nothing but Android's « Livre-jeu ne cesse de s'arrêter ».
// Written in the oldest JavaScript on purpose (no let, no arrow, no promise): it must run where nothing else does.
(function () {
  var OPEN_WAIT_MS = 25000;
  var shown = false;
  function help(why) {
    if (shown || window.LIVRE_OUVERT) return;
    var app = document.getElementById("app");
    if (!app) return;
    shown = true;
    var box = document.createElement("div");
    box.className = "wrap read start-help";
    box.setAttribute("role", "alert");
    box.innerHTML = "<h1>Le livre peine à s'ouvrir sur cet appareil</h1>" +
      "<p class=\"notice bad\"></p>" +
      "<p>Les sauvegardes ne sont pas touchées. À essayer, dans l'ordre :</p>" +
      "<ol>" +
      "<li>Dans le Play Store, mettre à jour <b>Chrome</b> et <b>Android System WebView</b>, puis rouvrir le livre.</li>" +
      "<li>Fermer les autres applications ouvertes, puis recharger cette page.</li>" +
      "<li>Ouvrir le site dans Chrome lui-même plutôt que par l'icône de l'appli.</li>" +
      "</ol>" +
      "<p><button class=\"btn primary\" type=\"button\">Recharger la page</button></p>";
    box.getElementsByTagName("p")[0].appendChild(document.createTextNode(why));
    box.getElementsByTagName("button")[0].onclick = function () { location.reload(); };
    app.insertBefore(box, app.firstChild);
  }
  window.addEventListener("error", function (e) {
    if (window.LIVRE_OUVERT) return;
    // A file that did not load (a font, an icon) is no reason: only a script that stopped.
    if (!e || !e.message) return;
    help("Erreur au démarrage : " + e.message + ".");
  });
  setTimeout(function () { help("La bibliothèque ne s'est pas ouverte au bout de " + Math.round(OPEN_WAIT_MS / 1000) + " secondes."); }, OPEN_WAIT_MS);
})();
