"use strict";
// Checks the engine of « Le huis clos » (8.3) on a small story: accounts kept word for word and put in doubt before the
// one who gave them (or alone, for one's own), remembrances where the clock stands still, keeping silent as a choice of
// its own (and as the timeout of a pressing scene), what the hero did coming back alone or on waking, dread that troubles
// the page, weighs on rolls, marks the clues and ends in panic, attachments and tender lines the reader may mask.
// Usage: node tests/huisclos-test.js
var M = require("../src/moteur.js"), V = require("../src/validateur.js"), assert = require("assert");
function story() {
  return {
    id: "hc", title: "Huis clos", start: "P", acts: [{ id: "I", title: "I", levels: [1, 1], start: "P" }],
    world: { start: { place: "salle", hour: 16, gold: 0 }, places: { salle: { name: "La salle", arrive: "P" } } },
    people: { odile: { name: "Odile", f: true }, jeanne: { name: "Jeanne", f: true } },
    topics: { etang: { title: "L'étang", solved: "verite" } },
    accounts: {
      v_odile: { by: "odile", topic: "etang", text: "J'étais couchée.", true: false, belie: "B_odile" },
      v_moi: { by: "hero", topic: "etang", text: "Je l'ai tenu longtemps.", true: "partiel", belie: "B_moi" },
    },
    gestes: { fouille: { name: "Fouiller sa chambre", poids: 2, echoes: ["ECHO_UN", "ECHO_DEUX"] } },
    dread: { name: "Angoisse", start: 2, max: 10, trouble: 6, sleep: -3, mod: { from: 5, per: -3 }, panic: { to: "PANIQUE" } },
    attachments: { jeanne: { tendre: true } },
    mysteries: { E: { title: "L'étang" } }, clues: { e_lanterne: { rev: "E", text: "La lanterne." } },
    passages: {
      P: { act: "I", title: "La salle", place: "salle", hub: true, text: ["SALLE", { trouble: true, text: "FLOU" }, { calme: true, text: "NET" }, { tendre: true, text: "TENDRE", else: "SOBRE" }],
        choices: [
          { label: "Écouter Odile", fx: { recit: "v_odile" }, to: "O" },
          { label: "Se souvenir", takes: 2, fx: { recit: "v_moi" }, to: "S1" },
          { label: "Fouiller", fx: { geste: "fouille" }, to: "P" },
          { label: "Peur", fx: { angoisse: 3 }, to: "P" },
          { label: "Calme", fx: { angoisse: -9 }, to: "P" },
          { label: "Lanterne", fx: { clue: "e_lanterne" }, to: "P" },
          { label: "Jeanne", fx: { attache: { jeanne: 2 } }, to: "P" },
          { label: "Embrasser Jeanne", tendre: true, if: { attache: "jeanne", min: 2 }, to: "P" },
          { label: "Parler doucement", labels: [{ if: { poids: { min: 2 } }, label: "Parler bas, sans la regarder" }], to: "P" },
          { label: "Seul", to: "SEUL" },
          { label: "Presse", to: "U" },
          { label: "Dormir", takes: "morning", to: "N" }] },
      O: { act: "I", title: "Odile", devant: "odile", text: ["ODILE"], silence: { who: "odile", to: "P" }, choices: [{ label: "Répondre", to: "P" }] },
      B_odile: { act: "I", title: "Le doute", text: ["DEMENTI"], choices: [{ back: "P" }] },
      B_moi: { act: "I", title: "Ta version", text: ["MOI"], choices: [{ back: "P" }] },
      S1: { act: "I", title: "La promesse", souvenir: "Il y a douze ans", text: ["SOUVENIR"], choices: [{ label: "Promettre", fx: { set: { promesse: "oui" } }, to: "S2" }] },
      S2: { act: "I", title: "La cabane", souvenir: "Il y a douze ans", takes: "night", back: true, text: ["CABANE"] },
      SEUL: { act: "I", title: "Seul", seul: true, text: ["SEUL"], choices: [{ back: "P" }] },
      U: { act: "I", title: "Vite", urgent: 20, text: ["VITE"], silence: { to: "P" }, choices: [{ label: "Parler", to: "P" }] },
      N: { act: "I", title: "Le matin", reveil: true, text: ["MATIN"], choices: [{ label: "Descendre", to: "P" }] },
      PANIQUE: { act: "I", title: "La panique", text: ["PANIQUE"], fxEvery: { angoisse: -4 }, choices: [{ label: "Respirer", to: "P" }] },
      FIN: { act: "I", title: "Fin", end: true, text: ["FIN"] },
    },
  };
}
// The story needs an ending reachable for the validator: the morning leads there too.
function full() { var st = story(); st.passages.N.choices.push({ label: "Partir", to: "FIN" }); return st; }
function fresh(st) { M.setRng(function () { return 0.5; }); var s = M.freshState(st); s.name = "A"; s.arch = "guerrier"; M.start(st, s); return s; }
function txt(st, s) { return M.view(st, s).text.join("|"); }
function labels(st, s) { return M.view(st, s).choices.map(function (x) { return x.label; }); }
function pick(st, s, l) { var c = M.view(st, s).choices.filter(function (x) { return x.label.indexOf(l) === 0; })[0]; assert(c, "choix « " + l + " » absent : " + labels(st, s).join(" / ")); M.choose(st, s, c); return c; }

var rep = V.validate(JSON.parse(JSON.stringify(full())), { games: 60 });
assert.deepStrictEqual(rep.errors, [], rep.errors.join("\n"));

// Accounts: heard word for word, doubted from the notebook, put in doubt before the one who gave them.
var st = full(), s = fresh(st);
pick(st, s, "Écouter Odile");
assert(s.accounts.v_odile && s.events.some(function (e) { return e.cls === "account" && /La version d'Odile · L'étang : « J'étais couchée. »/.test(e.text); }), s.events.map(function (e) { return e.text; }).join(" / "));
assert(!labels(st, s).some(function (l) { return /Mettre en doute/.test(l); }), "pas de doute avant que le lecteur doute");
assert(M.doubt(st, s, "v_odile", true)); assert(M.evalCond(st, s, { doute: "v_odile" }));
assert(!M.doubt(st, s, "v_moi", true), "on ne doute que de ce qu'on a entendu");
var bl = M.view(st, s).choices.filter(function (c) { return c.sys === "belie"; })[0]; assert(bl && /Mettre en doute sa version : « J'étais couchée. »/.test(bl.label));
M.choose(st, s, bl); assert.strictEqual(s.node, "B_odile"); assert(M.evalCond(st, s, { dementi: "v_odile" })); assert.strictEqual(s.via, "doute");
pick(st, s, "Revenir"); pick(st, s, "Écouter Odile");
assert(!M.view(st, s).choices.some(function (c) { return c.sys === "belie"; }), "une version n'est démentie qu'une fois");
assert(!M.topicSolved(st, s, "etang"));

// Keeping silent: « Te taire » is a choice of its own, counted by person and in all.
var tc = pick(st, s, "Te taire"); assert(tc.silence); assert.strictEqual(s.node, "P");
assert(M.evalCond(st, s, { silences: "odile", min: 1 }) && M.evalCond(st, s, { silences: "*", min: 1 }));
// In a pressing scene with no timeout of its own, silence is what happens when time runs out.
pick(st, s, "Presse"); assert.strictEqual(M.view(st, s).urgent.label, "Te taire");
pick(st, s, "Parler");

// A remembrance: the clock stands still inside, even through a scene that takes the night; back in the present, the hour is the one left.
var s2 = fresh(st), t0 = s2.time;
pick(st, s2, "Se souvenir"); assert.strictEqual(s2.node, "S1"); assert.strictEqual(M.view(st, s2).souvenir, "Il y a douze ans");
var tIn = s2.time; assert.strictEqual(tIn, t0 + 2, "le choix qui ouvre le souvenir prend son temps");
pick(st, s2, "Promettre"); assert.strictEqual(s2.time, tIn, "dans un souvenir, l'horloge ne bouge pas");
assert(labels(st, s2).indexOf("Revenir au présent") >= 0, labels(st, s2).join(" / "));
pick(st, s2, "Revenir au présent"); assert.strictEqual(s2.node, "P"); assert.strictEqual(s2.time, tIn); assert(!s2.present);
assert(M.evalCond(st, s2, { is: { promesse: "oui" } }), "ce qu'on choisit dans le souvenir reste");
// One's own account is put in doubt alone.
M.doubt(st, s2, "v_moi", true); pick(st, s2, "Seul");
var bm = M.view(st, s2).choices.filter(function (c) { return c.sys === "belie"; })[0]; assert(bm && /Revenir sur ta propre version/.test(bm.label));

// Conscience: nothing said when it is done; one line comes back alone, then on waking, each line once.
var s3 = fresh(st); pick(st, s3, "Fouiller"); assert.strictEqual(s3.poids, 2);
assert(!s3.events.some(function (e) { return /ECHO/.test(e.text); }) && txt(st, s3).indexOf("ECHO") < 0);
pick(st, s3, "Peur"); pick(st, s3, "Seul"); assert(txt(st, s3).indexOf("*ECHO_UN*") >= 0, txt(st, s3));
pick(st, s3, "Revenir"); assert(txt(st, s3).indexOf("ECHO") < 0);
// The way the hero speaks: a choice carries other words once the weight is there.
assert(labels(st, s3).indexOf("Parler bas, sans la regarder") >= 0, labels(st, s3).join(" / "));
pick(st, s3, "Dormir"); assert(txt(st, s3).indexOf("*ECHO_DEUX*") >= 0, txt(st, s3));

// Dread: the page troubles past its threshold, the clues noted then are marked, the rolls weigh, sleep eases, panic at the top.
var s4 = fresh(st); assert.strictEqual(s4.angoisse, 2); assert(txt(st, s4).indexOf("NET") >= 0 && txt(st, s4).indexOf("FLOU") < 0);
var b0 = M.bonus(st, s4, "social");
pick(st, s4, "Peur"); pick(st, s4, "Peur"); assert.strictEqual(s4.angoisse, 8);
assert(s4.events.some(function (e) { return /netteté/.test(e.text); }));
var v4 = M.view(st, s4); assert(v4.trouble && v4.text.join("|").indexOf("FLOU") >= 0 && v4.text.join("|").indexOf("NET") < 0);
assert.strictEqual(M.bonus(st, s4, "social"), b0 - 9);
pick(st, s4, "Lanterne"); assert(s4.shaky && s4.shaky.e_lanterne && s4.events.some(function (e) { return /noté dans le trouble/.test(e.text); }));
pick(st, s4, "Peur"); assert.strictEqual(s4.node, "PANIQUE", "la panique prend la page suivante"); assert.strictEqual(s4.angoisse, 6);
pick(st, s4, "Respirer"); pick(st, s4, "Peur"); assert.strictEqual(s4.angoisse, 9); assert.strictEqual(s4.node, "P");
pick(st, s4, "Peur"); assert.strictEqual(s4.node, "PANIQUE", "la panique revient une fois l'angoisse redescendue puis remontée");
pick(st, s4, "Respirer"); pick(st, s4, "Dormir"); assert.strictEqual(s4.angoisse, 3, "le sommeil apaise");

// Attachments: silent, read by conditions; tender lines masked by the reader, with their else.
var s5 = fresh(st); var ej = M.view(st, s5).choices.filter(function (c) { return c.label === "Embrasser Jeanne"; })[0]; assert(ej && !ej.ok);
pick(st, s5, "Jeanne"); assert.strictEqual(M.attachOf(s5, "jeanne"), 2); assert(!s5.events.length, "un attachement ne s'annonce pas");
assert(M.view(st, s5).choices.filter(function (c) { return c.label === "Embrasser Jeanne"; })[0].ok);
assert(txt(st, s5).indexOf("TENDRE") >= 0);
s5.tendre = "masquer"; assert(txt(st, s5).indexOf("SOBRE") >= 0 && txt(st, s5).indexOf("TENDRE") < 0);
assert(!labels(st, s5).some(function (l) { return l === "Embrasser Jeanne"; }), "un choix tendre disparaît quand le lecteur les masque");

// The validator reads the new keys.
var bad = story(); bad.accounts.v_odile.belie = "NULLE_PART"; bad.passages.P.choices.push({ label: "X", fx: { geste: "inconnu", attache: { odile: 1 } }, to: "P" });
var er = V.staticCheck(bad).errors.join("\n");
assert(/belie, passage « NULLE_PART »/.test(er) && /geste « inconnu »/.test(er) && /attachement « odile »/.test(er), er);
console.log("huisclos-test : OK");
