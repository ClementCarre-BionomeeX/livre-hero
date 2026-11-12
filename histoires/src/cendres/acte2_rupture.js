// Act II · the Rupture at the col de l'Ourse: the two companies meet again at dawn, Corbe's act choice (the rite, Askel
// in her place, opening the door with all the names, or refusing), the dam breaking anyway, and the fall: the child of
// Sauvelune falls into the Outre-Blanc and catches the hands of those who trust him enough (flags rupture:avec:<hero>).
var R = { act: "II", noLead: true };
function P(o) { return Object.assign({}, R, o); }
var HEROES = ["ysolde", "pie", "hylas", "corbe", "lisandre"];
var NAMES = { ysolde: "Ysolde", pie: "Pie", hylas: "Hylas", corbe: "Corbe", lisandre: "Lisandre" };
var OF = { ysolde: "d'Ysolde", pie: "de Pie", hylas: "d'Hylas", corbe: "de Corbe", lisandre: "de Lisandre" };
var TRUST = 35;
function hands(step) {
  var out = HEROES.map(function (h) {
    var gone = h === "corbe" ? { any: [{ has: "corbe:rite_ii" }, { has: "rupture:avec:corbe" }] } : { has: "rupture:avec:" + h };
    return { label: "Attraper la main " + OF[h], hide: gone, if: { conf: h, min: TRUST }, why: NAMES[h] + " ne te fait pas encore assez confiance pour te suivre là.",
      fx: { flag: "rupture:avec:" + h }, to: step === 1 ? "II_R_chute2" : "II_R_noir" };
  });
  out.push({ label: step === 1 ? "Ne prendre la main de personne" : "Ne prendre la main de personne d'autre", to: "II_R_noir" });
  return out;
}
module.exports = {
  II_R_col: P({ title: "Les retrouvailles", place: "col",
    fx: { regroup: true, lead: "corbe", leadQuiet: true, flag: "rupture:col" },
    text: [
      "À l'aube, un feu sur la crête du sud. Puis des silhouettes qui descendent, à pied, en tirant des chevaux fourbus.",
      { if: { has: "sud5:fuite=bateau" }, text: "Ils sont venus par la rivière, puis par les crêtes, sans dormir. Ils sentent le poisson et la sueur de cheval." },
      "Vous vous regardez. Un mois. Ils ont l'air plus vieux. Vous aussi, sûrement.",
      { if: { has: "registre:clans" }, text: "Sur le dos d'un cheval, sanglé, un paquet de toile cirée couvert de givre. Le clan s'écarte quand il passe. Les chiens se couchent." },
      { if: { has: "registre:reine" }, text: "Lisandre te dit, avant même de t'embrasser, que le registre est à Vasselin, sur le lit d'une reine qui lit." },
      { if: { has: "registre:greffiers" }, text: "Lisandre te dit, avant même de t'embrasser, que le registre est à Vasselin, dans une mansarde, entre les mains de onze greffiers qui le recopient." },
      { if: { all: [{ has: "nord:rendu=sauvelune" }, { has: "sud:enfant" }] }, text: "Tu prends l'enfant de Sauvelune à part. Tu lui dis ce que tu as fait, dans le cirque. Il ne dit rien. Il se tourne vers l'ouest, vers les vallées, longtemps." },
      { if: { all: [{ has: "nord:pie" }, { has: "sud:linette" }] }, text: "Pie court vers sa sœur. Il s'arrête à deux pas. Linette le regarde. Puis elle tend la main, et touche sa joue du bout des doigts, comme on vérifie qu'une page est sèche." },
      { if: { all: [{ has: "nord:ysolde" }, { has: "sud:rodric" }] }, text: "Rodric et Ysolde se regardent par-dessus le feu, comme deux rives." },
      { if: { has: "ysolde:lisse_sait" }, text: "Ysolde sait, maintenant, pour Lisse. Ça se voit. Elle se tient plus droite, et plus loin de tout le monde." },
      { if: { has: "rodric:oublie_champion" }, text: "Rodric te salue poliment. Il ne sait plus très bien pourquoi il est là. Il est là." },
    ],
    choices: [{ label: "Le soleil se lève", to: "II_R_aube" }] }),

  II_R_aube: P({ title: "L'aube du rite", place: "col",
    text: [
      "Les tambours se taisent tous en même temps. Le clan s'est rangé en cercle, autour de la pierre, à cent pas de la déchirure. Hrodna attend. Askel attend, dans sa robe blanche.",
      "La déchirure a encore grandi, pendant la nuit. Elle est haute comme un clocher. De l'autre côté, les gens qui marchent sont tout près, maintenant. On voit leurs visages. Ils ne se pressent pas. Ils arrivent.",
      { if: { has: "registre:clans" }, text: "Le paquet de toile cirée, posé dans la neige, tremble. Le givre s'y forme et s'y défait, en vagues. Il tire vers la déchirure, comme un chien qui tire sur sa laisse." },
      "Tout le monde te regarde. C'est toi, la Bouche.",
    ],
    choices: [
      { label: "Monter sur la pierre, chanter les trois vers, et entrer", fx: { flag: ["corbe:rite_ii", "corbe:voie_ii=rite"], quest: "II_N_rite", ep: ["perso", 4000] }, to: "II_R_rite" },
      { label: "Laisser Askel y aller à ta place", hide: { not: { has: "nord:askel_robe" } }, fx: { flag: ["askel:rite", "corbe:voie_ii=askel"], quest: "II_N_rite", ep: ["perso", 2500] }, to: "II_R_askel" },
      { label: "Ouvrir le registre devant la déchirure, et chanter tous les noms", hide: { not: { all: [{ has: "registre:clans" }, { has: "nord:chant_lu" }] } }, fx: { flag: ["corbe:ouvre", "corbe:voie_ii=ouvre"], quest: "II_N_rite", ep: ["perso", 4000] }, to: "II_R_ouvre" },
      { label: "Refuser. Personne n'entrera", fx: { flag: ["corbe:refuse_ii", "corbe:voie_ii=refus"], quest: "II_N_rite", ep: ["perso", 2000] }, to: "II_R_refus" },
    ] }),

  II_R_rite: P({ title: "La Bouche", place: "col",
    text: [
      "Tu montes sur la pierre. Elle est tiède sous tes pieds nus. Tu chantes les trois vers, avec ta voix trop haute, trop mince, et le clan chante avec toi, et cette fois tu les comprends.",
      "Puis tu donnes ton nom. Pas en le disant : en le lâchant. Corbe. La fille d'Askel. Celle qui a volé une bague à un corbeau, celle qui ne savait pas lire, celle qui a écrit son nom dans la cendre. Tout. Tu le sens partir comme une rivière qui quitte son lit.",
      "Tu descends de la pierre. Tu marches vers la déchirure. Tu ne sais plus très bien qui marche. Derrière toi, quelqu'un crie un mot que tu ne reconnais pas.",
      { if: { has: "corbe:lettres" }, text: "C'est Pie. Il crie ton nom, en l'épelant, lettre par lettre, comme une leçon." },
      "Tu entres dans le blanc. La déchirure se referme sur toi, d'un coup, comme un œil.",
      "Pendant trois battements de cœur, le col est silencieux, et vert, et entier.",
    ],
    choices: [{ label: "Puis le monde craque", to: "II_R_rupture" }] }),

  II_R_askel: P({ title: "Askel", place: "col",
    text: [
      "Tu ne bouges pas. Askel se lève. Elle passe à côté de toi, et en passant elle te regarde, longtemps, comme elle a dit qu'elle le ferait.",
      "Elle monte sur la pierre. Elle chante les trois vers, d'une voix grave, cassée, que le clan reprend. Elle donne son nom. Elle descend de la pierre, et elle marche vers la déchirure, droite, dans sa robe blanche, sans se retourner.",
      "Elle entre. La déchirure se referme, à moitié, comme une porte qu'on pousse sans la claquer.",
      "Tu ne te souviens plus du nom de ta mère. Tu te souviens qu'elle t'a regardée.",
    ],
    choices: [{ label: "Puis le monde craque", to: "II_R_rupture" }] }),

  II_R_ouvre: P({ title: "Tous les noms", place: "col",
    text: [
      "Tu défais la toile cirée. Le registre est si froid qu'il te brûle les mains. Tu l'ouvres à la première page, sous l'ours couronné, et tu le tends à Hylas, ou à Pie, ou à Linette, à celui qui sait lire, et tu lui dis : lis.",
      "Il lit. Les noms, les uns après les autres, dans la langue que tu ne connais pas, et tu les chantes au fur et à mesure, sur l'air du chant des morts, et le clan les reprend sans les comprendre.",
      "*Qui chante tous les noms ouvre la porte.*",
      "De l'autre côté, les gens qui marchent s'arrêtent. Ils écoutent leurs noms. Certains tombent à genoux. Et la déchirure, au lieu de s'agrandir, s'ouvre. Comme une porte. Avec un seuil.",
      "Le premier d'entre eux le franchit. Une vieille femme, avec un enfant dans les bras. Elle pose le pied sur l'herbe du col. Elle respire.",
    ],
    choices: [{ label: "Puis le monde craque", fx: { flag: "orsans:premiers" }, to: "II_R_rupture" }] }),

  II_R_refus: P({ title: "Personne", place: "col",
    text: [
      "Tu ne montes pas sur la pierre. Tu le dis à voix haute, devant le clan : personne n'entrera. Ni toi, ni ta mère, ni personne. On ne bouche pas un trou avec des gens.",
      "Hrodna ferme les yeux. Askel, dans sa robe blanche, se rassoit. Un murmure court dans le cercle, colère ou soulagement, tu ne sais pas.",
      "La déchirure continue de grandir. Les gens de l'autre côté sont au seuil, maintenant. Ils te regardent.",
    ],
    choices: [{ label: "Puis le monde craque", to: "II_R_rupture" }] }),

  II_R_rupture: P({ title: "La Rupture", place: "col",
    fx: { flag: "acte2:rupture" },
    text: [
      "Le bruit vient de partout à la fois, et de très loin. Un craquement de glace qui cède, sous tout le royaume. Comme si le monde était un lac gelé, et que quelqu'un venait de marcher au milieu.",
      { if: { has: "corbe:rite_ii" }, text: "La déchirure s'est refermée. Ça ne sert à rien. Le col tient, et le reste lâche. Au sud, très loin, sur toutes les crêtes, des lueurs blanches s'allument, l'une après l'autre, comme des feux de signal." },
      { if: { not: { has: "corbe:rite_ii" } }, text: "La déchirure court, d'un coup, d'un bout à l'autre du col. Et au sud, très loin, sur toutes les crêtes, des lueurs blanches s'allument, l'une après l'autre, comme des feux de signal." },
      { if: { any: [{ has: "registre:reine" }, { has: "registre:greffiers" }] }, text: "Vers Vasselin, le ciel blanchit." },
      "Le sol s'ouvre sous le col. Pas la terre : le monde. Une fente noire qui court à travers la neige, à travers le cercle du clan, à travers votre feu, et sous la fente, du blanc.",
      "Les gens tombent. Le clan, les chevaux, la neige. Tout glisse vers le blanc, lentement, puis très vite.",
    ],
    choices: [{ label: "Tomber", fx: { lead: "enfant", leadQuiet: true }, to: "II_R_chute" }] }),

  II_R_chute: P({ title: "La chute", place: "col",
    text: [
      "Tu tombes. Tu es l'enfant de Sauvelune, et tu tombes, et le blanc monte vers toi comme une eau.",
      "Autour de toi, dans la neige qui glisse, des mains. Des visages. Ceux avec qui tu as marché. Ils tombent aussi, pas tous du même côté. Certains vers le blanc, avec toi. D'autres vers le haut, vers le monde, qui se referme au-dessus comme une trappe.",
      "Tu peux attraper une main. Peut-être deux. Une main qu'on attrape, il faut qu'elle veuille bien qu'on l'attrape.",
    ],
    choices: hands(1) }),

  II_R_chute2: P({ title: "La chute", place: "col",
    text: ["Une main dans la tienne. Elle serre. Le blanc est tout près. Il reste une autre main, peut-être, à portée."],
    choices: hands(2) }),

  II_R_noir: P({ title: "Le blanc", place: "col",
    text: [
      "Le blanc se referme.",
      { if: { has: "rupture:avec:ysolde" }, text: "Tu tiens la main d'Ysolde." },
      { if: { has: "rupture:avec:pie" }, text: "Tu tiens la main de Pie." },
      { if: { has: "rupture:avec:hylas" }, text: "Tu tiens la main d'Hylas." },
      { if: { has: "rupture:avec:corbe" }, text: "Tu tiens la main de Corbe." },
      { if: { has: "rupture:avec:lisandre" }, text: "Tu tiens la main de Lisandre." },
      { if: { not: { any: [{ has: "rupture:avec:ysolde" }, { has: "rupture:avec:pie" }, { has: "rupture:avec:hylas" }, { has: "rupture:avec:corbe" }, { has: "rupture:avec:lisandre" }] } }, text: "Tu ne tiens la main de personne." },
      "Puis plus rien. Ni froid, ni bruit, ni toi.",
      "Quelque part, très loin, quelqu'un dit ton nom. Pas celui de Sauvelune. Un autre. Un nom que tu n'as jamais entendu, et que tu reconnais.",
    ],
    choices: [{ label: "Fin de l'Acte II", fx: { flag: "acte2:fin", ep: ["histoire", 8000] }, to: "Z2_suite", big: true }] }),
};
