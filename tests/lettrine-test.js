"use strict";
// The drop cap (Clément, 16/11): on "(Une heure passe.)" then "Tu prends ta place…", the drop cap is the T of "Tu",
// on the second paragraph; a stage note (between parentheses, or all in italics) is passed over and an opening
// parenthesis is never swallowed. Runs app/app.js's Lettrine module on hand-made pages, with app/app.css.
// Usage: node tests/lettrine-test.js
var fs = require("fs"), path = require("path");
var { chromium } = require("playwright");
var APP = path.join(__dirname, "..", "app"), bad = [];
function check(ok, what) { if (!ok) bad.push(what); }
var js = fs.readFileSync(path.join(APP, "app.js"), "utf8"), css = fs.readFileSync(path.join(APP, "app.css"), "utf8");
var a = js.indexOf("  var Lettrine = (function () {"), z = js.indexOf("  })();", a);
if (a < 0 || z < 0) { console.log("lettrine-test : module Lettrine introuvable dans app.js"); process.exit(1); }
var mod = js.slice(a, z + 7);
var CASES = [
  { name: "didascalie entre parenthèses", html: ["<em>(Une heure passe.)</em>", "Tu prends ta place au bout de la table des apprentis."], p: 1, letter: "T", lead: "" },
  { name: "parenthèses sans italique", html: ["(Une heure passe.)", "Tu prends ta place."], p: 1, letter: "T", lead: "" },
  { name: "paragraphe tout en italique", html: ["<em>La neige tombe toujours.</em>", "Le feu baisse."], p: 1, letter: "L", lead: "" },
  { name: "passage ordinaire", html: ["Tu entres.", "Puis tu sors."], p: 0, letter: "T", lead: "" },
  { name: "réplique entre guillemets", html: ["« Viens ici », dit Colin."], p: 0, letter: "V", lead: "«" },
  { name: "tiret de dialogue", html: ["— Assieds-toi."], p: 0, letter: "A", lead: "—" },
  { name: "abréviation d'une lettre", html: ["M. Utterson le notaire était un homme d'une mine renfrognée."], p: 0, letter: "M.", lead: "" },
  { name: "initiale suivie d'un mot", html: ["L'étranger arriva en février."], p: 0, letter: "L", lead: "" },
  { name: "début en gras", html: ["<strong>Silence.</strong> Puis un cri."], p: 0, letter: "S", lead: "" },
  { name: "rien que des didascalies", html: ["<em>(Une heure passe.)</em>"], p: -1 },
  { name: "page déjà lue", html: ["<span>Tu connais déjà cette page.</span>"], reread: true, p: -1 },
];

(async function () {
  var b = await chromium.launch(), pg = await b.newPage({ viewport: { width: 420, height: 800 } }), errors = [];
  pg.on("pageerror", function (e) { errors.push(e.message); });
  for (var font of ["livre", "grimoire", "lisible"]) {
    await pg.setContent("<!doctype html><html data-font=\"" + font + "\"><head><meta charset=utf-8><style>" + css + "</style></head><body><main class=\"page read\" style=\"width:380px\"></main></body></html>");
    var out = await pg.evaluate(function (arg) {
      function h(tag, attrs, text) { var e = document.createElement(tag); if (attrs && attrs.class) e.className = attrs.class; if (text) e.textContent = text; return e; }
      var Lettrine = (new Function("h", arg.mod + "; return Lettrine;"))(h);
      var main = document.querySelector("main");
      return arg.cases.map(function (c) {
        var prose = document.createElement("div"); prose.className = "prose";
        prose.innerHTML = c.html.map(function (t) { return "<p" + (c.reread ? " class=\"reread\"" : "") + ">" + t + "</p>"; }).join("");
        main.textContent = ""; main.appendChild(prose);
        var before = prose.textContent;
        Lettrine.place(prose); Lettrine.place(prose);   // twice: a second call changes nothing
        var l = prose.querySelectorAll(".lettrine"), ps = Array.prototype.slice.call(prose.children);
        var r = { n: l.length, text: prose.textContent, before: before };
        if (l.length) {
          var av = l[0].querySelector(".lettrine-avant");
          r.p = ps.indexOf(l[0].closest("p")); r.lead = av ? av.textContent : ""; r.letter = l[0].textContent.slice(r.lead.length);
          r.float = getComputedStyle(l[0]).float;
          // The drop cap stands at the left of the paragraph's first line, the rest of the word to its right.
          var lb = l[0].getBoundingClientRect(), pb = l[0].closest("p").getBoundingClientRect();
          r.left = Math.abs(lb.left - pb.left) < 2; r.top = Math.abs(lb.top - pb.top) < 30;
        }
        return r;
      });
    }, { mod: mod, cases: CASES });
    out.forEach(function (r, i) {
      var c = CASES[i], tag = font + " / " + c.name;
      check(r.text.replace(/\s+/g, " ").trim() === r.before.replace(/\s+/g, " ").trim().replace(/^([«—])\s+/, "$1"), tag + " : le texte change (" + r.text + ")");
      if (c.p < 0) { check(r.n === 0, tag + " : une lettrine alors qu'il n'en faut pas"); return; }
      check(r.n === 1, tag + " : " + r.n + " lettrines");
      check(r.p === c.p, tag + " : lettrine au paragraphe " + r.p + " au lieu de " + c.p);
      check(r.letter === c.letter, tag + " : la lettrine prend « " + r.letter + " » au lieu de « " + c.letter + " »");
      check(r.lead === c.lead, tag + " : avant la lettre « " + r.lead + " » au lieu de « " + c.lead + " »");
      if (font !== "lisible") check(r.float === "left" && r.left && r.top, tag + " : la lettrine n'est pas en tête du paragraphe, à gauche");
      else check(r.float === "none", tag + " : en police lisible, pas de lettrine flottante");
    });
  }
  await b.close();
  errors.forEach(function (e) { bad.push("erreur de page : " + e); });
  if (bad.length) { console.log("lettrine-test : " + bad.length + " problème(s)\n- " + bad.join("\n- ")); process.exit(1); }
  console.log("lettrine-test : ok (" + CASES.length + " cas × 3 polices)");
})().catch(function (e) { console.error(e); process.exit(1); });
