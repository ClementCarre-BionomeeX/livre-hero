// Builds site/voix/: the optional quality voices (Piper, run on the device), downloaded by the reader on request.
// Run after tests/site.js:  node tests/voix.js
// The heavy files are not in the repository: they are fetched here (npm registry, sherpa-onnx releases on GitHub)
// into .voix-cache/, then copied. The GitHub Actions build runs it before publishing site/.
"use strict";
var fs = require("fs"), path = require("path"), cp = require("child_process");

var ROOT = path.join(__dirname, "..");
var CACHE = process.env.VOIX_CACHE || path.join(ROOT, ".voix-cache");
var OUT = path.join(ROOT, "site", "voix");

var NPM = [
  { name: "onnxruntime-web", version: "1.18.0", files: ["dist/ort.wasm.min.js", "dist/ort-wasm-simd.wasm"] },
  { name: "@diffusionstudio/piper-wasm", version: "1.0.0", files: ["build/piper_phonemize.js", "build/piper_phonemize.wasm", "build/piper_phonemize.data"] },
];
// Each voice: its label in the settings, and the Piper model it comes from.
var VOICES = {
  siwis: { label: "Siwis, voix de femme", model: "fr_FR-siwis-medium" },
  tom: { label: "Tom, voix d'homme", model: "fr_FR-tom-medium" },
};
var MODELS_URL = "https://github.com/k2-fsa/sherpa-onnx/releases/download/tts-models/vits-piper-";

function sh(cmd, args, cwd) { cp.execFileSync(cmd, args, { cwd: cwd || CACHE, stdio: ["ignore", "ignore", "inherit"] }); }
function fetchTo(url, file) {
  if (fs.existsSync(file) && fs.statSync(file).size > 0) return;
  console.log("téléchargement " + url);
  sh("curl", ["-sSfL", "--retry", "3", "-o", file + ".part", url]);
  fs.renameSync(file + ".part", file);
}

fs.mkdirSync(CACHE, { recursive: true });
fs.mkdirSync(OUT, { recursive: true });
var common = [];

NPM.forEach(function (p) {
  var base = p.name.split("/").pop() + "-" + p.version, tgz = path.join(CACHE, base + ".tgz"), dir = path.join(CACHE, base);
  fetchTo("https://registry.npmjs.org/" + p.name + "/-/" + base + ".tgz", tgz);
  if (!fs.existsSync(dir)) { fs.mkdirSync(dir); sh("tar", ["xzf", tgz, "-C", dir].concat(p.files.map(function (f) { return "package/" + f; }))); }
  p.files.forEach(function (f) { var b = path.basename(f); fs.copyFileSync(path.join(dir, "package", f), path.join(OUT, b)); common.push(b); });
});
fs.copyFileSync(path.join(ROOT, "app", "voix-worker.js"), path.join(OUT, "worker.js")); common.push("worker.js");

var voices = {};
Object.keys(VOICES).forEach(function (k) {
  var v = VOICES[k], tar = path.join(CACHE, v.model + ".tar.bz2"), dir = path.join(CACHE, "vits-piper-" + v.model);
  fetchTo(MODELS_URL + v.model + ".tar.bz2", tar);
  var files = [v.model + ".onnx", v.model + ".onnx.json"];
  if (!fs.existsSync(path.join(dir, files[0]))) sh("tar", ["xjf", tar].concat(files.map(function (f) { return "vits-piper-" + v.model + "/" + f; })));
  files.forEach(function (f) { fs.copyFileSync(path.join(dir, f), path.join(OUT, f)); });
  voices[k] = { label: v.label, model: v.model, files: files };
});

function size(f) { return fs.statSync(path.join(OUT, f)).size; }
var manifest = {
  common: common.map(function (f) { return { file: f, size: size(f) }; }),
  voices: Object.keys(voices).reduce(function (o, k) {
    o[k] = { label: voices[k].label, model: voices[k].model, files: voices[k].files.map(function (f) { return { file: f, size: size(f) }; }) };
    return o;
  }, {}),
};
fs.writeFileSync(path.join(OUT, "manifest.json"), JSON.stringify(manifest, null, 1));
var mb = function (n) { return Math.round(n / 1048576) + " Mo"; };
console.log("site/voix/ : moteur " + mb(manifest.common.reduce(function (s, f) { return s + f.size; }, 0)) + ", " +
  Object.keys(manifest.voices).map(function (k) { return k + " " + mb(manifest.voices[k].files.reduce(function (s, f) { return s + f.size; }, 0)); }).join(", "));
