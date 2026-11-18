"use strict";
// The glossary (Clément, 18/11: « plein de mots compliqués sont laissés sans définitions »): every story takes the shared
// glossary, and a shared rare word must never explain a name the story gives to a person, an animal or a place
// (« Pataud » the dog, the inn « du Fanal »). M.glossaryNames finds those names; app.js leaves them alone.
// Also checks that each glossary of the library is well formed: no form twice in one entry, no empty definition.
// (A form may sit in two entries: a book's own words come after the shared ones and win, as in app.js.)
// Usage: node tests/glossaire-test.js
var M = require("../src/moteur.js"), fs = require("fs"), path = require("path"), assert = require("assert");
var bad = [];
function check(ok, what) { if (!ok) bad.push(what); }

// 1. the names found in a hand-made story
var st = {
  glossary: { "pataud|patauds": "Lourd et maladroit.", "fanal|fanaux": "Grosse lanterne.", "ladre": "Avare.", "Marsien": "Habitant de Mars." },
  passages: {
    A: { text: ["Le chien s'appelle Pataud, et il dort.", "Pataud lève la tête.", "Tu entres à l'auberge du Fanal, où brûlent trois fanaux."] },
    B: { text: ["Un ours pataud traverse la route.", "« Ladre ! » crie-t-elle."], choices: [{ label: "Suivre Pataud", to: "A" }] },
  },
};
var n = M.glossaryNames(st);
check(n.pataud === true, "« Pataud » au milieu d'une phrase est un nom");
check(n.fanal === true, "« du Fanal » est un nom");
check(!n.ladre, "« Ladre ! » en début de réplique n'est pas un nom");
check(!n.marsien, "une forme du glossaire écrite avec sa capitale reste un mot du glossaire");
check(M.glossaryNames(st) === n, "le relevé est gardé sur l'histoire");
check(Object.keys(st).indexOf("_glossaryNames") < 0, "le relevé ne se sérialise pas avec l'histoire");
check(Object.keys(M.glossaryNames({ passages: {} })).length === 0, "une histoire sans glossaire n'a pas de nom");

// 2. app.js's Glossary module on that story: the dog keeps his capital and no dotted line; the adjective is explained
var js = fs.readFileSync(path.join(__dirname, "..", "app", "app.js"), "utf8");
var a = js.indexOf("  var Glossary = (function () {"), z = js.indexOf("  })();", a);
check(a >= 0 && z > a, "module Glossary introuvable dans app.js");
if (a >= 0 && z > a) {
  var Glossary = new Function("M", "pref", "h", "esc", "Words", "document", js.slice(a, z + 7) + "\nreturn Glossary;")(
    M, function () { return true; }, function () { return {}; }, function (x) { return x; }, { learn: function () {} }, { addEventListener: function () {} });
  var html = Glossary.mark(st, "Pataud dort. Un ours pataud passe devant l'auberge du Fanal.", {});
  check(/>pataud<\/button>/.test(html), "« pataud » (l'adjectif) est expliqué : " + html);
  check(!/>Pataud<\/button>/.test(html), "« Pataud » (le chien) n'est pas souligné : " + html);
  check(!/>Fanal<\/button>/.test(html), "« du Fanal » (l'auberge) n'est pas souligné : " + html);
  var html2 = Glossary.mark(st, "Trois fanaux brillent.", {});
  check(/>fanaux<\/button>/.test(html2), "« fanaux » est expliqué : " + html2);
}

// 3. every built story: well-formed glossary
var DIR = path.join(__dirname, "..", "histoires");
fs.readdirSync(DIR).filter(function (f) { return /\.json$/.test(f); }).forEach(function (f) {
  var s; try { s = JSON.parse(fs.readFileSync(path.join(DIR, f), "utf8")); } catch (e) { return; }
  if (!s || !s.glossary) return;
  Object.keys(s.glossary).forEach(function (k) {
    var seen = {};
    check(typeof s.glossary[k] === "string" && s.glossary[k].trim().length > 3, f + " : définition vide pour « " + k + " »");
    k.split("|").forEach(function (x) {
      x = x.trim();
      check(x !== "", f + " : forme vide dans « " + k + " »");
      check(!seen[x], f + " : « " + x + " » deux fois dans « " + k + " »");
      seen[x] = 1;
    });
  });
});

// 4. the words of the request are defined where Clément met them
var gm = JSON.parse(fs.readFileSync(path.join(DIR, "guerremondes.json"), "utf8")).glossary, forms = {};
Object.keys(gm).forEach(function (k) { k.split("|").forEach(function (x) { forms[x.trim().toLowerCase()] = 1; }); });
["éréthisme", "pusillanimité"].forEach(function (w) { check(forms[w], "La Guerre des mondes : « " + w + " » sans définition"); });

assert.ok(true);
if (bad.length) { console.log("glossaire-test : " + bad.length + " échec(s)"); bad.slice(0, 40).forEach(function (b) { console.log("  ✗ " + b); }); process.exit(1); }
console.log("glossaire-test : ok");
