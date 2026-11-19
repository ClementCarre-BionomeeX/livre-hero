// The ten trials' pairs (paire:<trial>, set by the issue a pair laid by both players opens), read by the feats and by
// the dawn: how many times the two children opened a trial together.
var TRIALS = ["porte", "visite", "plaquette", "midi", "rue", "compteur", "ferrailleurs", "salle", "nuit", "entrepot"];
module.exports = { ALL: TRIALS.map(function (t) { return { has: "paire:" + t }; }) };
