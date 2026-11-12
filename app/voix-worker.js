"use strict";
// Quality voice worker (Clément, 12/11): Piper neural voices, run by onnxruntime-web, entirely on the device.
// Copied to site/voix/worker.js by tests/voix.js, next to ort.wasm.min.js, piper_phonemize.* and the voice models.
// Message in:  { id, voice, sentences: [text], rate }   ·   { cancel: id }
// Messages out: { id, i, audio: Float32Array, rate }  then  { id, done: true }  ·  { id, error }
importScripts("ort.wasm.min.js", "piper_phonemize.js");
ort.env.wasm.numThreads = 1; // GitHub Pages cannot serve the headers threads need
ort.env.wasm.wasmPaths = "./";

var sessions = {}, configs = {}, cancelled = {};

function load(voice) {
  if (!sessions[voice]) {
    sessions[voice] = fetch(voice + ".onnx.json").then(function (r) { return r.json(); }).then(function (cfg) {
      configs[voice] = cfg;
      return fetch(voice + ".onnx").then(function (r) { return r.arrayBuffer(); });
    }).then(function (buf) { return ort.InferenceSession.create(buf, { executionProviders: ["wasm"] }); });
    sessions[voice].catch(function () { delete sessions[voice]; });
  }
  return sessions[voice];
}

// One phonemizer run per request: emscripten's main() is not made to be called twice on one instance.
function phonemize(lang, sentences) {
  var out = [];
  return createPiperPhonemize({
    print: function (l) { out.push(JSON.parse(l).phoneme_ids); },
    printErr: function () {},
    locateFile: function (f) { return f; },
  }).then(function (m) {
    m.callMain(["-l", lang, "--input", JSON.stringify(sentences.map(function (t) { return { text: t }; })), "--espeak_data", "/espeak-ng-data"]);
    return out;
  });
}

function tick() { return new Promise(function (res) { setTimeout(res, 0); }); }

self.onmessage = function (e) {
  var d = e.data;
  if (d.cancel != null) { cancelled[d.cancel] = true; return; }
  var id = d.id;
  load(d.voice).then(function (session) {
    var cfg = configs[d.voice], inf = cfg.inference || {};
    return phonemize((cfg.espeak && cfg.espeak.voice) || "fr", d.sentences).then(function (ids) {
      var i = 0;
      function next() {
        if (cancelled[id] || i >= ids.length) return null;
        var p = ids[i];
        if (!p || !p.length) { i++; return next(); }
        var feeds = {
          input: new ort.Tensor("int64", BigInt64Array.from(p.map(BigInt)), [1, p.length]),
          input_lengths: new ort.Tensor("int64", BigInt64Array.from([BigInt(p.length)]), [1]),
          scales: new ort.Tensor("float32", Float32Array.from([inf.noise_scale || 0.667, (inf.length_scale || 1) / (d.rate || 1), inf.noise_w || 0.8]), [3]),
        };
        if (cfg.num_speakers > 1) feeds.sid = new ort.Tensor("int64", BigInt64Array.from([0n]), [1]);
        return session.run(feeds).then(function (r) {
          var audio = new Float32Array(r.output.data);
          self.postMessage({ id: id, i: i, audio: audio, rate: cfg.audio.sample_rate }, [audio.buffer]);
          i++;
          return tick().then(next); // lets a cancel message in between two sentences
        });
      }
      return next();
    });
  }).then(function () { self.postMessage({ id: id, done: true }); delete cancelled[id]; })
    .catch(function (err) { self.postMessage({ id: id, error: String((err && err.message) || err) }); });
};
