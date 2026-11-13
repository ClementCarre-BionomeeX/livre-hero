"use strict";
// Style review of a story: what a proofreader would point at, passage by passage. Used by the editor's « Relecture »
// tab and by `node tests/relecture.js` (every story of the repository).
// Intent: issues(Story) -> [{ id, kind, msg, excerpt }] = long sentences, words repeated too close, long paragraphs,
// rare words used once, French spacing and quotes, long choice labels.
// Why: Clément, 13/11 (piste 38): the author sees repetitions and over-long sentences before a reader trips on them.
(function (root) {
  var SENTENCE_MAX = 40, PARA_MAX = 180, LABEL_MAX = 90, REPEAT_SPAN = 15, REPEAT_CLOSE = 4, REPEAT_MIN = 7, RARE_MIN = 15;
  // Words that come back by nature: tools of the language, not style.
  var COMMON = ("comme dans avec pour sans sous vers chez entre encore toujours jamais rien personne quelque quelques autre autres " +
    "cette celle celui ceux celles leurs notre votre vous nous elle elles ils sont était étaient avait avaient être avoir fait faire " +
    "plus moins très tout tous toute toutes même aussi alors puis après avant depuis pendant contre devant derrière quand parce lorsque " +
    "dont mais donc ainsi peut-être déjà enfin seulement").split(" ").reduce(function (o, w) { o[w] = 1; return o; }, {});
  var WORD = /[A-Za-zÀ-ÖØ-öø-ÿŒœ'’-]+/g;

  function textOf(t) { return typeof t === "string" ? t : (t && typeof t.text === "string" ? t.text : ""); }
  function plain(t) { return String(t).replace(/\*\*?|__?/g, "").replace(/\{[^}]*\}/g, "x"); }
  function words(t) { return plain(t).match(WORD) || []; }
  function cut(t, at, len) { var s = Math.max(0, at - 30); return (s ? "…" : "") + t.slice(s, at + (len || 0) + 30).replace(/\s+/g, " ") + "…"; }

  function paragraphIssues(id, raw, out, seen) {
    var t = plain(raw), nw = words(t).length;
    if (nw > PARA_MAX) out.push({ id: id, kind: "paragraphe", msg: "Paragraphe de " + nw + " mots (plus de " + PARA_MAX + ")", excerpt: t.slice(0, 80) + "…" });
    (t.match(/[^.!?…]+[.!?…]+[»"]?|[^.!?…]+$/g) || []).forEach(function (s) {
      var n = (s.match(WORD) || []).length;
      if (n > SENTENCE_MAX) out.push({ id: id, kind: "phrase", msg: "Phrase de " + n + " mots", excerpt: s.trim().slice(0, 120) + (s.length > 120 ? "…" : "") });
    });
    // a word of REPEAT_MIN letters or more seen again within REPEAT_SPAN words. Names (a capital) are left alone, and so
    // is a word said again at once (« promis. Tu as promis », « quatre à quatre »): that is a figure, not a slip.
    var last = {}, re0 = new RegExp(WORD.source, "g"), m0, i = 0;
    while ((m0 = re0.exec(t))) {
      var w = m0[0], k = w.toLowerCase().replace(/’/g, "'"); i++;
      if (k.length < REPEAT_MIN || COMMON[k] || /^[A-ZÀ-Ö]/.test(w)) continue;
      if (last[k] && i - last[k] > REPEAT_CLOSE && i - last[k] <= REPEAT_SPAN) {
        out.push({ id: id, kind: "répétition", msg: "« " + k + " » deux fois en " + (i - last[k]) + " mots", excerpt: cut(t, m0.index, k.length) });
        last[k] = 0; continue;
      }
      last[k] = i;
      if (k.length >= RARE_MIN && !/['-]/.test(k)) (seen[k] = seen[k] || []).push(id);
    }
    // French typography: a space before ; : ! ? and inside « », no space before , .
    var re = /([A-Za-zÀ-ÿ0-9)\]])([;:!?])(?![\/\d])/g, m;
    while ((m = re.exec(t))) out.push({ id: id, kind: "espace", msg: "Espace attendue avant « " + m[2] + " »", excerpt: cut(t, m.index, 2) });
    re = /«(?=[^\s  ])|([^\s  ])»/g;
    while ((m = re.exec(t))) out.push({ id: id, kind: "espace", msg: "Espace attendue à l'intérieur des guillemets", excerpt: cut(t, m.index, 2) });
    re = /[  ]([,.])(?!\.)/g;
    while ((m = re.exec(t))) out.push({ id: id, kind: "espace", msg: "Pas d'espace avant « " + m[1] + " »", excerpt: cut(t, m.index, 2) });
    if (/"/.test(t)) out.push({ id: id, kind: "guillemets", msg: "Guillemets droits \" : préférer « »", excerpt: cut(t, t.indexOf('"'), 1) });
    if (/ {2,}/.test(raw)) out.push({ id: id, kind: "espace", msg: "Deux espaces de suite", excerpt: cut(t, t.search(/ {2,}/), 2) });
  }

  function issues(st) {
    var out = [], seen = {}, P = st.passages || {};
    Object.keys(P).forEach(function (id) {
      var p = P[id];
      (Array.isArray(p.text) ? p.text : [p.text]).forEach(function (t) { var s = textOf(t); if (s) paragraphIssues(id, s, out, seen); });
      (p.choices || []).forEach(function (c) {
        if (c.label && c.label.length > LABEL_MAX) out.push({ id: id, kind: "choix", msg: "Choix de " + c.label.length + " signes (plus de " + LABEL_MAX + ")", excerpt: c.label });
      });
    });
    Object.keys(seen).forEach(function (k) { if (seen[k].length === 1) out.push({ id: seen[k][0], kind: "mot rare", msg: "« " + k + " » n'apparaît qu'une fois dans l'histoire : est-il voulu ?", excerpt: k }); });
    return out;
  }
  var KINDS = ["phrase", "répétition", "paragraphe", "mot rare", "espace", "guillemets", "choix"];
  var API = { issues: issues, KINDS: KINDS };
  if (typeof module !== "undefined" && module.exports) module.exports = API; else root.Relecture = API;
})(typeof self !== "undefined" ? self : this);
