"use strict";
// Faces in the dialogue (18/11): who speaks in each paragraph (M.speakers), the {{dit:…}} mark, the validator.
// Usage: node tests/dialogue-test.js
var path = require("path"), assert = require("assert"), fs = require("fs");
var ROOT = path.join(__dirname, ".."), M = require(path.join(ROOT, "src/moteur.js")), V = require(path.join(ROOT, "src/validateur.js"));
var st = JSON.parse(fs.readFileSync(path.join(ROOT, "histoires/kardan.json")));
M.prepare(st);
var s = M.freshState(st, {}); s.name = "Ivo"; s.arch = Object.keys(M.ARCHS)[0]; M.start(st, s);
M.enter(st, s, "E_chevrier");
// « …, dit-il » after the man is named; the reply alone is the hero's; « Il rit. « … » » is the man again
assert.deepStrictEqual(M.speakers(st, s, st.passages.E_chevrier.text), [null, "chevrier", "heros", "chevrier"]);
var said = function (texts) { return M.speakers(st, s, texts); };
s.people.hesna = true;
assert.deepStrictEqual(said(["« Entre donc, dit Hesna. Il fait froid. »"]), ["hesna"], "a named incise");
assert.deepStrictEqual(said(["« Et toi ? demandes-tu. Tu restes ? »"]), ["heros"], "the hero's incise");
assert.deepStrictEqual(said(["Hesna pose la louche. « Mange, tant que c'est chaud. »"]), ["hesna"], "the narration that leads to the words");
assert.deepStrictEqual(said(["Tu hausses les épaules. « Peut-être bien. »"]), ["heros"]);
assert.deepStrictEqual(said(["« Mange, tant que c'est chaud. » Hesna pose la louche."]), ["hesna"], "the narration that follows the words");
assert.deepStrictEqual(said(["Le vent tourne. « Qui va là ? »"]), [null], "unsure: nobody");
assert.deepStrictEqual(said(["On l'appelle « la Lune sèche »."]), [null], "a name in guillemets is no speech");
assert.deepStrictEqual(said(["« Qui va là ? »"]), [null], "a reply alone with nobody before it");
// people not met yet are never named (nothing given away)
delete s.people.hesna;
assert.deepStrictEqual(said(["« Entre donc, dit Hesna. Il fait froid. »"]), [null]);
// the mark: forces the speaker, reads as nothing
assert.deepStrictEqual(said(["{{dit:chevrier}}Le vent tourne. « Qui va là ? »", "{{dit:aucun}}« Ho ! dit Ismaël. »"]), ["chevrier", null]);
assert.strictEqual(M.plainOf(st, s, "{{dit:heros}}« Viens. »"), "« Viens. »");
// the validator
var bad = JSON.parse(fs.readFileSync(path.join(ROOT, "histoires/kardan.json")));
bad.passages.E_chevrier.text.push("{{dit:personne}}« Qui ? »", "{{dit:chevrier|texte}}« Oui. »", "{{dit:chevrier}}Rien à dire.");
var errs = V.validate(bad, { games: 0 }).errors.join("\n");
["{{dit:personne}}, personnage inconnu", "ne prend pas de texte", "sans paroles entre guillemets"].forEach(function (w) { assert(errs.indexOf(w) >= 0, "attendu : " + w + "\n" + errs); });
var good = JSON.parse(fs.readFileSync(path.join(ROOT, "histoires/kardan.json")));
good.passages.E_chevrier.text[2] = "{{dit:heros}}" + good.passages.E_chevrier.text[2];
assert(!/dit:/.test(V.validate(good, { games: 0 }).errors.join("\n")), "a right mark passes");
console.log("dialogue-test : OK");
