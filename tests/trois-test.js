"use strict";
// « À trois » (9.6): a vote between the players (voix / scrutins), the post each one took (role → role:<k>=<o>,
// {qui:<k>:<o>}), the clues pooled at each rendezvous. A tiny story, three players.
var path = require("path"), assert = require("assert");
var ROOT = path.join(__dirname, ".."), M = require(path.join(ROOT, "src/moteur.js")), MU = require(path.join(ROOT, "src/multi.js")), V = require(path.join(ROOT, "src/validateur.js"));

function story() {
  return { id: "trois", title: "Trois", start: "depart", multi: { min: 3, max: 3, commun: true }, acts: [{ id: "I", title: "I", start: "depart" }], quests: [], companions: {}, people: {}, items: {}, enemies: {},
    mysteries: { M: { title: "Le coffre" } }, clues: { c_toit: { rev: "M", text: "Une tuile déplacée." }, c_cave: { rev: "M", text: "Une cave murée." }, c_moi: { rev: "M", text: "Ce que je garde pour moi.", prive: true } },
    scrutins: { plan: { title: "Par où entrer", options: { toit: "Par le toit", cave: "Par la cave", porte: "Par la porte" }, tie: "dispute", tieSay: "Trois avis, trois voix." } },
    world: { start: { place: "ville" }, places: { ville: { name: "Ville", arrive: "depart" } }, routes: [], regions: {}, events: {} },
    passages: {
      depart: { act: "I", title: "Départ", place: "ville", text: ["Qui fait quoi ?"], choices: [
        { label: "Monter", role: "poste", option: "main", fx: { clue: "c_toit" }, to: "urne" },
        { label: "Guetter", role: "poste", option: "oeil", fx: { clue: ["c_cave", "c_moi"] }, to: "urne" },
        { label: "Parler", role: "poste", option: "voix", to: "urne" }] },
      urne: { act: "I", title: "Le conseil", place: "ville", charniere: true, text: ["C'est {qui:poste:main} qui est monté{qui:poste:main:e}.", { if: { role: "poste", is: "voix" }, text: "Tu as parlé." }], choices: [
        { label: "Par le toit", voix: "plan", option: "toit", to: "compte" },
        { label: "Par la cave", voix: "plan", option: "cave", to: "compte" },
        { label: "Par la porte", voix: "plan", option: "porte", to: "compte" }] },
      compte: { act: "I", title: "Le compte", place: "ville", charniere: true, text: ["Les cailloux sont dans le chapeau."], choices: [{ label: "Retourner le chapeau", to: "suite" }] },
      suite: { act: "I", title: "Suite", place: "ville", branch: [{ if: { scrutin: "plan", is: "toit" }, to: "fin_toit" }, { if: { scrutin: "plan", is: "dispute" }, to: "fin_dispute" }, { to: "fin_autre" }] },
      fin_toit: { act: "I", title: "Le toit", place: "ville", text: ["Le toit."], end: true },
      fin_dispute: { act: "I", title: "La dispute", place: "ville", text: ["La dispute."], end: true },
      fin_autre: { act: "I", title: "Autre", place: "ville", text: ["Autre."], end: true } } };
}
function mk(st, name, fem) { var s = M.freshState(st); s.name = name; s.arch = "voleur"; s.fem = !!fem; M.start(st, s); return s; }
function table(st) {
  var g = MU.create(st, [{ id: "a", name: "Léo", s: mk(st, "Aymon") }, { id: "b", name: "Mila", s: mk(st, "Brune", true) }, { id: "c", name: "Papa", s: mk(st, "Colas") }]);
  MU.refreshWaits(st, g); return g;
}
function pick(st, g, pid, label) { var v = MU.view(st, g, pid), c = v.choices.filter(function (x) { return x.label === label; })[0]; assert.ok(c && c.ok, pid + " ne peut pas prendre « " + label + " » : " + (c && c.why)); MU.choose(st, g, pid, c); }

// ---- roles, {qui}, pooled clues, a majority
(function () {
  var st = story(); M.prepare(st); var g = table(st);
  pick(st, g, "b", "Monter"); pick(st, g, "a", "Guetter");
  assert.strictEqual(MU.view(st, g, "c").choices[0].ok, false, "un poste pris est fermé aux autres");
  pick(st, g, "c", "Parler");
  assert.ok(MU.allWaiting(g)); MU.sync(st, g);
  var pa = MU.player(g, "a"), pb = MU.player(g, "b"), pc = MU.player(g, "c");
  assert.ok(pa.s.flags["role:poste=oeil"] && pb.s.flags["role:poste=main"] && pc.s.flags["role:poste=voix"], "le moteur retient le poste de chacun");
  assert.ok(/C'est Brune qui est montée\./.test(MU.view(st, g, "a").text.join(" ")), "{qui} nomme et accorde");
  assert.ok(/Tu as parlé/.test(MU.view(st, g, "c").text.join(" ")) && !/Tu as parlé/.test(MU.view(st, g, "a").text.join(" ")), "condition role");
  assert.ok(pa.s.clues.c_toit && pb.s.clues.c_cave && pc.s.clues.c_toit && pc.s.clues.c_cave, "les indices sont mis en commun");
  assert.ok(pa.s.clues.c_moi && !pb.s.clues.c_moi && !pc.s.clues.c_moi, "un indice prive reste à celui qui l'a trouvé");
  assert.ok(pc.s.events.some(function (e) { return /Brune rapporte .*tuile/.test(e.text); }), "la mise en commun se dit");
  pick(st, g, "a", "Par le toit"); pick(st, g, "b", "Par la cave");
  assert.ok(!MU.allWaiting(g)); pick(st, g, "c", "Par le toit");
  assert.ok(MU.allWaiting(g)); MU.sync(st, g);
  g.players.forEach(function (p) { assert.ok(p.s.flags["monde:scrutin:plan=toit"], "la majorité l'emporte chez " + p.name); assert.ok(p.s.events.some(function (e) { return /2 voix pour « Par le toit » \(Aymon, Colas\)/.test(e.text); }), "le dépouillement se dit"); });
  g.players.forEach(function (p) { pick(st, g, p.id, "Retourner le chapeau"); assert.strictEqual(p.s.node, "fin_toit"); });
  console.log("à trois · rôles, {qui}, indices mis en commun, vote à la majorité : ok");
})();
// ---- three voices, three options: the tie the story has written
(function () {
  var st = story(); M.prepare(st); var g = table(st);
  pick(st, g, "a", "Monter"); pick(st, g, "b", "Guetter"); pick(st, g, "c", "Parler"); MU.sync(st, g);
  pick(st, g, "a", "Par le toit"); pick(st, g, "b", "Par la cave"); pick(st, g, "c", "Par la porte"); MU.sync(st, g);
  g.players.forEach(function (p) { assert.ok(p.s.flags["monde:scrutin:plan=dispute"]); assert.ok(p.s.events.some(function (e) { return /Trois avis, trois voix\./.test(e.text); })); pick(st, g, p.id, "Retourner le chapeau"); assert.strictEqual(p.s.node, "fin_dispute"); });
  assert.deepStrictEqual(MU.tally({}, ["a", "b", "b"]).result, "b"); assert.deepStrictEqual(MU.tally({}, ["a", "b"]).result, "a");
  console.log("à trois · égalité écrite par l'histoire : ok");
})();
// ---- alone ({qui} unknown), and the validator with its ghost table
(function () {
  var st = story(); M.prepare(st); var s = mk(st, "Seul");
  M.choose(st, s, M.view(st, s).choices[0]);
  assert.ok(/C'est l'un de vous qui est monté\./.test(M.view(st, s).text.join(" ")));
  var rep = V.validate(story(), { games: 120 });
  assert.deepStrictEqual(rep.errors, [], rep.errors.join("\n"));
  var bad = story(); bad.passages.urne.choices[0].option = "fenetre";
  assert.ok(V.staticCheck(bad).errors.some(function (e) { return /option inconnue « fenetre »/.test(e); }));
  console.log("à trois · seul et validateur : ok");
})();
