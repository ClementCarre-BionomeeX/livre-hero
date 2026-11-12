// "L'Écu de Vellane": two pages of the same knight, rivals at the start, who save the world by working together
// (Clément's idea, 11/11). Written for two players, one page each. Roles (`role`) split them: one takes the stable,
// the other the armoury; one fetches the remedy, the other follows the trail. What each finds becomes a world flag
// ("monde:…") that the other reads at the next rendezvous (the start of each act, the Stone).
module.exports = {
  id: "pages",
  title: "L'Écu de Vellane",
  subtitle: "À deux · deux pages, un chevalier, une montagne qui dort",
  summary: "Vous êtes les deux pages de Messire Aubert de Vellane, et vous ne vous supportez pas. À la Saint-Michel, il choisira l'un de vous pour écuyer. Ce matin, son cousin Gauvard arrive au château, et sous le Mont-Veille quelque chose de très ancien dort encore.",
  voice: "deuxième personne, présent",
  version: 1,
  multi: { min: 2, max: 2 },
  start: "P_reveil",
  intro: [
    "Six mois que vous partagez la même chambre sous les combles de Vellane, le même seau d'eau froide le matin, le même maître, et la même certitude : l'autre n'a rien à faire ici.",
    "À la Saint-Michel, Messire Aubert choisira un écuyer. Un seul. Vous le savez tous les deux, et vous savez tous les deux que l'autre le sait.",
  ],
  acts: [
    { id: "I", title: "Acte I · Le château de Vellane", question: "Que vient faire Gauvard à Vellane ?", levels: [1, 2], start: "P_reveil" },
    { id: "II", title: "Acte II · La route du Mont-Veille", question: "Comment sauver Messire Aubert ?", levels: [2, 3], start: "P_chevet" },
    { id: "III", title: "Acte III · Sous la montagne", question: "Que fera-t-on de la Pierre-Veille ?", levels: [3, 4], start: "P_pied" },
  ],
  companions: {},
  factions: { vellane: "Les gens de Vellane" },
  relics: {},
  mysteries: {
    G: { title: "Que vient faire Gauvard à Vellane ?", act: "I" },
    P: { title: "Qu'est-ce que la Pierre-Veille ?", act: "II" },
  },
  clues: {
    g_boue: { rev: "G", text: "Les sabots du cheval de Gauvard sont pleins d'argile rouge, celle qu'on ne trouve que sur le chemin du Mont-Veille. Il est passé par la montagne avant de venir." },
    g_lettre: { rev: "G", text: "Une lettre tombée de la sacoche de l'écuyer de Gauvard : *Au troisième soir, la Pierre. Que le vieux dorme d'ici là.*" },
    g_fiole: { rev: "G", text: "Au banquet, Gauvard a fait passer quelque chose de sa manche à sa paume, au-dessus de la cruche du vin de Messire." },
    p_legende: { rev: "P", text: "La Pierre-Veille garde Ossaroth endormi sous la montagne depuis neuf cents ans. Qui l'arrache réveille le ver ; qui croit le commander se trompe." },
    p_deux: { rev: "P", text: "Frère Anselme : *La Pierre ne se repose pas d'une seule main. L'une la tient, l'autre dit le mot.*" },
  },
  quests: [],
  people: {
    aubert: { name: "Messire Aubert de Vellane", desc: "Votre maître. Soixante ans, une jambe raide, la meilleure lance du comté il y a vingt ans." },
    heloise: { name: "Dame Héloïse", desc: "Sa sœur, qui tient le château, les clés et les comptes." },
    gauvard: { name: "Sire Gauvard de Morne", desc: "Le cousin. Beau, aimable, endetté jusqu'aux yeux." },
    thibaud: { name: "Thibaud", desc: "L'écuyer de Gauvard, un garçon de seize ans qui a peur de son maître." },
    anselme: { name: "Frère Anselme", desc: "Un ermite qui fait des remèdes au moulin des Saules et sait de vieilles choses." },
  },
  items: {
    dague: { name: "Dague", kind: "arme", dmg: 4, att: 5, price: 8, desc: "Courte, équilibrée." },
    epee_courte: { name: "Épée courte", kind: "arme", dmg: 6, att: 0, price: 20, desc: "Une lame d'exercice, mais une lame." },
    arc_court: { name: "Arc court", kind: "arme", ranged: true, ammo: "fleche", dmg: 4, att: 0, price: 18, desc: "If et corne." },
    dague_jet: { name: "Dague de jet", kind: "arme", ranged: true, thrown: true, dmg: 4, att: 5, price: 6, desc: "Lestée à la pointe." },
    baton: { name: "Bâton ferré", kind: "arme", dmg: 4, att: 0, price: 3, desc: "Frêne et fer." },
    onguent: { name: "Onguent", kind: "soin", heal: 6, unique: false, price: 4, desc: "Un pot de grès de la cuisine de Vellane." },
    remede: { name: "Remède d'Anselme", kind: "divers", keep: true, price: 0, desc: "Une fiole de terre cuite, bouchée à la cire, qui sent l'amande et la sauge." },
    clef_grille: { name: "Clé de la grille", kind: "divers", keep: true, price: 0, desc: "Une clé de fer noir, prise à la ceinture de Gauvard." },
  },
  enemies: {
    loup: { name: "Loup", pv: 6, att: 20, def: 10, dmg: 3, flank: true },
    homme_gauvard: { name: "Homme de Gauvard", pv: 8, att: 20, def: 5, dmg: 3 },
    gauvard: { name: "Sire Gauvard", pv: 16, att: 30, def: 15, dmg: 5 },
    thibaud: { name: "Thibaud", pv: 7, att: 15, def: 10, dmg: 3 },
  },
  shops: {},
  past: [
    { q: "D'où viens-tu ?", answers: [
      { label: "Du château d'un baron, ton père, qui t'a envoyé ici apprendre à servir", fx: { flag: "passe:noble" } },
      { label: "De la forge du village, d'où Messire t'a tiré un jour de marché", fx: { flag: "passe:forge" } },
      { label: "D'un monastère, où l'on t'a élevé sans jamais te dire qui t'y avait laissé", fx: { flag: "passe:cloitre" } },
    ] },
  ],
  world: {
    start: { place: "vellane", gold: 3, food: 1, items: ["dague"],
      kits: { guerrier: ["epee_courte"], rodeur: ["arc_court"], voleur: ["dague_jet"], mage: ["baton"], pretre: ["baton"] } },
    places: {
      vellane: { name: "Vellane", map: "monde", x: 30, y: 40, arrive: "P_reveil", desc: "Un château de pierre grise au-dessus d'un village et d'une rivière." },
      saules: { name: "Le moulin des Saules", map: "monde", x: 20, y: 70, arrive: "P_anselme", desc: "Un moulin abandonné où vit un ermite." },
      montveille: { name: "Le Mont-Veille", map: "monde", x: 70, y: 20, arrive: "P_pied", desc: "Une montagne ronde, sans arbres, où personne ne monte." },
    },
    routes: [], regions: {}, events: {},
  },
  banter: [],
};
