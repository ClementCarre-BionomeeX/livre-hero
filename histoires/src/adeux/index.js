// Merges the story base with its passages: act I, the confessions and interludes, act II, act III, the epilogue.
var base = require("./base.js");
var a3 = require("./acte3.js");
base.passages = Object.assign({}, require("./acte1.js"), require("./secrets.js"), require("./acte2.js"), a3.passages);
base.epilogue = require("./epilogue.js");
base.epilogueTitle = "Ce qu'il advint";
module.exports = base;
