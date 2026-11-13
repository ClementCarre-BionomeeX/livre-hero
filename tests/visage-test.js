"use strict";
// Checks the words of a declared face: the validator accepts those of Moteur.FACE and refuses any other.
// Usage: node tests/visage-test.js
var M = require("../src/moteur.js"), V = require("../src/validateur.js"), assert = require("assert");
function story(face) {
  return { id: "t", title: "Test visage", start: "A", acts: [{ id: "I", title: "I", levels: [1, 3], start: "A" }],
    people: { anseau: { name: "Anseau", face: face, desc: "Le sonneur." } },
    passages: { A: { act: "I", title: "Départ", end: true, text: ["Fin."] } } };
}
function faceErrs(face) { return V.validate(story(face), { runs: 1 }).errors.filter(function (e) { return /Visage/.test(e); }); }
assert.deepStrictEqual(M.faceErrors({ age: "ancien", skin: "ebene", hair: "#aabbcc", eyes: "brides", marks: ["vitiligo", "balafre"] }), []);
assert.strictEqual(faceErrs({ age: "ancien", marks: ["aveugle"] }).length, 0, "visage connu accepté");
assert.strictEqual(faceErrs({ age: "vieux" }).length, 1, "âge inconnu refusé");
assert.strictEqual(faceErrs({ marks: ["borgne"] }).length, 1, "marque inconnue refusée");
assert.strictEqual(faceErrs({ marks: "balafre" }).length, 1, "marks est une liste");
assert.strictEqual(faceErrs({ skin: "vert pomme" }).length, 1, "couleur inconnue refusée");
assert.strictEqual(faceErrs({ taille: "grand" }).length, 1, "clé inconnue refusée");
Object.keys(M.FACE_KEYS).forEach(function (k) { assert(M.FACE[M.FACE_KEYS[k]], "liste de " + k); });
console.log("visage-test : tout passe.");
