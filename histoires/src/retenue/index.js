// Merges the story base with the night of each of the seven people. A file may also export `_add`, the choices it
// adds to passages written in other files ({ passageId: [choice, ...] }), so that new paths leave the read text alone.
var base = require("./base.js");
var adds = [];
["./nuit.js", "./maelle.js", "./maelle_plus.js", "./maelle_plus2.js", "./odon.js", "./odon_plus.js", "./ilde.js", "./ilde_plus.js", "./bastien.js", "./bastien_plus.js", "./jacquette.js", "./jacquette_plus.js", "./corlay.js", "./corlay_plus.js", "./anselme.js", "./anselme_plus.js", "./croisements.js",
  "./corlay_plus2.js", "./jacquette_plus2.js", "./ilde_plus2.js", "./bastien_plus2.js", "./anselme_plus2.js", "./odon_plus2.js"].forEach(function (f) {
  var ps = require(f);
  Object.keys(ps).forEach(function (k) {
    if (k === "_add") { adds.push([f, ps._add]); return; }
    if (k === "_savoirs") { Object.assign(base.savoirs, ps._savoirs); return; }
    if (base.passages[k]) throw new Error("passage en double : " + k);
    base.passages[k] = ps[k];
  });
});
adds.forEach(function (a) {
  Object.keys(a[1]).forEach(function (k) {
    var p = base.passages[k];
    if (!p) throw new Error(a[0] + " : choix ajouté à un passage inconnu : " + k);
    p.choices = (p.choices || []).concat(a[1][k]);
  });
});
module.exports = base;
