// "Les Vannes de Vaudrenne": the first story written for several players (Clément, 11/11: multiplayer stories are
// written for it, the solo ones stay solo). Each player makes his own hero; the travellers are stuck in the same town
// on the same flood night. Flags "monde:…" are the shared world: they pass from one player to the others at each
// rendezvous (the start of act II, the winch room). Two world choices (`monde`): the key of the gates, the gates.
module.exports = {
  id: "vaudrenne",
  title: "Les Vannes de Vaudrenne",
  subtitle: "À plusieurs · une ville, une crue, une nuit",
  summary: "L'Aune monte depuis trois jours. Le bac ne passe plus, et vous voilà plusieurs voyageurs bloqués à Vaudrenne, une ville de moulins coupée en deux par la rivière : la ville haute et ses meuniers, le Bas-Port et ses tanneurs. Cette nuit, quelqu'un devra décider où l'eau ira.",
  skin: "parchemin",
  glossary: require("../glossaire.js"), // rare words explained on a tap (Clément, 12/11)
  voice: "deuxième personne, présent",
  version: 1,
  multi: { min: 2, max: 4 },
  start: "V_arrivee",
  intro: [
    "Tu ne connais pas les autres. Vous êtes descendus de la même diligence, ou du même chemin, à la même heure de pluie, et l'homme du bac vous a dit à tous la même chose en vous montrant la rivière : *pas ce soir, ni demain*.",
    "Chacun de vous verra la ville à sa façon. Vous vous retrouverez à minuit, à l'écluse. Ce que vous aurez fait d'ici là, les autres le trouveront en arrivant.",
  ],
  acts: [
    { id: "I", title: "Acte I · La ville haute", question: "Où est l'éclusier, et que veut le bailli ?", levels: [1, 2], start: "V_arrivee" },
    { id: "II", title: "Acte II · La nuit de l'eau", question: "Où ira l'eau ?", levels: [2, 3], start: "V_ecluse" },
  ],
  companions: {},
  factions: { vaudrenne: "Les gens de Vaudrenne" },
  relics: {},
  mysteries: {
    E: { title: "Où est passé Joss, l'éclusier ?", act: "I" },
    B: { title: "Que veut le bailli ?", act: "I" },
  },
  clues: {
    e_vu: { rev: "E", text: "Mahaut, à l'Anguille : Joss est monté à l'hôtel du bailli il y a deux soirs, « pour une dispute », et personne ne l'en a vu redescendre." },
    e_registre: { rev: "E", text: "Au registre de l'écluse, de la main de Joss, l'avant-dernière ligne : *Ordre de M. le bailli, tenir les vannes hautes fermées quoi qu'il monte. Refusé.*" },
    e_crypte: { rev: "E", text: "Sous la chapelle, un couloir voûté file vers la ville haute ; la poussière y est fraîchement remuée, et quelqu'un y a laissé tomber une chandelle de suif blanc, de celles qu'on brûle chez les riches." },
    b_moulins: { rev: "B", text: "L'an dernier, le bailli Morel a racheté les trois moulins de la ville haute et les prés qui les bordent, « pour une bouchée de pain »." },
    b_regle: { rev: "B", text: "Gravé sous la liste des noyés de l'An Gris : *Les prés boivent, le port vit. Quand l'Aune monte, on ouvre les vannes hautes.*" },
    b_niveau: { rev: "B", text: "Sur le mur de la tannerie Bastien, une encoche peinte en rouge, plus haute que ta tête : le niveau de l'An Gris, quand les vannes hautes étaient restées fermées." },
  },
  quests: [],
  people: {
    mahaut: { name: "Mahaut", face: { age: "mur", skin: "beige", hair: "noisette", coif: "chignon", beard: "sans", eyes: "amande", iris: "gris", nose: "fin", lips: "fines", shape: "allonge", marks: [] }, desc: "Aubergiste de l'Anguille. Elle sert tout le monde et ne croit personne." },
    morel: { name: "Guérand Morel", face: { age: "mur", skin: "clair", hair: "chatain", coif: "degarni", beard: "sans", eyes: "ronds", iris: "bleu", nose: "retrousse", lips: "fines", shape: "rond", marks: [] }, desc: "Bailli de Vaudrenne. Gants de peau, voix douce, trois moulins." },
    ninon: { name: "Ninon", face: { age: "jeune", skin: "brun", hair: "noir", coif: "tresses", beard: "sans", eyes: "ronds", iris: "brun", nose: "large", lips: "pleines", shape: "ovale", marks: [] }, desc: "Une fille du Bas-Port, quatorze ans, les mains tannées comme celles de son père." },
    bastien: { name: "Bastien", face: { age: "mur", skin: "brun", hair: "noir", coif: "crepus", beard: "barbe", eyes: "lourds", iris: "brun", nose: "large", lips: "pleines", shape: "carre", marks: [] }, desc: "Tanneur au Bas-Port. Il ne quittera pas sa maison, dit-il, ni pour l'eau ni pour le bailli." },
    ermengarde: { name: "Ermengarde", face: { age: "ancien", skin: "ivoire", hair: "blanc", coif: "foulard", beard: "sans", eyes: "brides", iris: "noir", nose: "fin", lips: "fines", shape: "rond", marks: [] }, desc: "Sacristine de la chapelle des Noyés. Elle avait neuf ans l'année de l'An Gris." },
    joss: { name: "Joss Ferrand", face: { age: "adulte", skin: "hale", hair: "chatain", coif: "court", beard: "moustache", eyes: "tombants", iris: "vert", nose: "busque", lips: "fines", shape: "carre", marks: [] }, desc: "L'éclusier de Vaudrenne. Il connaît la rivière comme on connaît un chien qui mord." },
  },
  items: {
    dague: { name: "Dague", kind: "arme", dmg: 4, att: 5, price: 8, desc: "Courte, équilibrée." },
    epee_courte: { name: "Épée courte", kind: "arme", dmg: 6, att: 0, price: 20, desc: "Une lame honnête, sans nom." },
    arc_court: { name: "Arc court", kind: "arme", ranged: true, ammo: "fleche", dmg: 4, att: 0, price: 18, desc: "If et corne." },
    dague_jet: { name: "Dague de jet", kind: "arme", ranged: true, thrown: true, dmg: 4, att: 5, price: 6, desc: "Lestée à la pointe." },
    baton: { name: "Bâton ferré", kind: "arme", dmg: 4, att: 0, price: 3, desc: "Frêne et fer." },
    onguent: { name: "Onguent de Mahaut", kind: "soin", heal: 6, unique: false, price: 4, desc: "Graisse d'oie et souci, dans un pot de grès." },
    bourse_morel: { name: "Bourse du bailli", kind: "divers", price: 0, keep: true, desc: "Vingt pièces et un sceau de cire verte." },
  },
  enemies: {
    sergent: { name: "Sergent du bailli", pv: 9, att: 20, def: 10, dmg: 3 },
    homme_main: { name: "Homme de main", pv: 7, att: 15, def: 5, dmg: 3 },
  },
  shops: {
    anguille: { sells: [{ item: "onguent", price: 4 }, { item: "dague", price: 8 }], food: 2 },
  },
  past: [],
  world: {
    start: { place: "vaudrenne", gold: 8, food: 1, items: ["dague"],
      kits: { guerrier: ["epee_courte"], rodeur: ["arc_court"], voleur: ["dague_jet"], mage: ["baton"], pretre: ["baton"] } },
    places: {
      vaudrenne: { name: "Vaudrenne", map: "monde", x: 50, y: 40, arrive: "V_place", desc: "Une ville de moulins coupée en deux par l'Aune." },
    },
    routes: [], regions: {}, events: {},
  },
  banter: [],
};
