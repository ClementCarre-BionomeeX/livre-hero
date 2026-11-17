// Merges the story base with the house and the first night (garde.js) and the night turned back (retour.js).
var base = require("./base.js");
["garde.js", "retour.js", "etoffe.js", "etoffe2.js"].forEach(function (f) {
  var ps = require("./" + f);
  Object.keys(ps).forEach(function (k) { if (base.passages[k]) throw new Error("passage en double : " + k); base.passages[k] = ps[k]; });
});
module.exports = base;
