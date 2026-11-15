// Le Pli de Brumefond · the epilogue: what came of each secret, told or kept, and of the people met on the way. Each
// player reads it from their own side (role:pli or role:route); the world marks are shared at the last rendezvous.
var PLI = { has: "role:pli" }, ROUTE = { has: "role:route" };
module.exports = [
  // the secrets, from each side
  { if: { all: [PLI, { confie: "p_pere" }] }, text: "Ton père, tu l'as dit à {autre} une nuit, à voix basse. Depuis, quelqu'un sait pourquoi tu as demandé ce pli." },
  { if: { all: [PLI, { garde: "p_pere" }] }, text: "Ton père, tu l'as gardé pour toi jusqu'au bout du voyage." },
  { if: { all: [ROUTE, { confie: "p_pere" }] }, text: "{autre} t'a dit son père, une nuit. Tu as regardé la place du Marché-aux-Sels autrement." },
  { if: { all: [ROUTE, { not: { confie: "p_pere" } }, { secret: "p_pere" }] }, text: "L'affiche lue dans une sacoche qui n'était pas la tienne, tu l'as gardée pour toi." },
  { if: { all: [PLI, { confie: "p_vu" }] }, text: "Ce que tu as vu par la porte du cabinet, tu l'as confié à {autre}. Il fallait être deux pour le porter." },
  { if: { all: [PLI, { garde: "p_vu" }] }, text: "La lettre brûlée à minuit, tu es seul{e} à l'avoir vue." },
  { if: { all: [ROUTE, { confie: "g_argent" }] }, text: "Les quinze écus de la femme en gris, tu les as avoués en route." },
  { if: { all: [ROUTE, { garde: "g_argent" }] }, text: "Les quinze écus de la femme en gris sont restés ton affaire." },
  { if: { all: [PLI, { confie: "g_argent" }] }, text: "{autre} t'a avoué la bourse au cor de chasse. Tu as décidé quoi en penser." },
  { if: { all: [PLI, { not: { confie: "g_argent" } }, { secret: "g_argent" }] }, text: "La bourse au cor de chasse, tu l'as vue, et tu l'as gardée pour toi." },
  { if: { all: [ROUTE, { confie: "g_hiver" }] }, text: "Tu as dit ton mensonge du col. Tu as passé l'Ourse en hiver quand même, une fois. Tu ne mentiras plus là-dessus." },
  { if: { all: [PLI, { not: { confie: "g_hiver" } }, { secret: "g_hiver" }] }, text: "Berthe t'a dit, pour les onze étés. Tu as suivi {autre} dans la neige en le sachant." },
  { if: { all: [ROUTE, { confie: "g_offre" }] }, text: "La femme en gris et sa bourse repoussée, tu l'as racontée à {autre}." },
  // the people of the road
  { if: { has: "monde:gaut_soigne" }, text: "Gaut guérit à Brumefond, dans une chambre de l'auberge du Cygne. Il garde une épaule raide et l'habitude de boutonner son manteau jusqu'au menton." },
  { if: { all: [{ has: "monde:gaut_enterre" }, { not: { has: "monde:gaut_soigne" } }] }, text: "Au printemps, Dame Hesmé fait chercher le corps de Gaut au bord de la gorge. Les bergers le trouvent sous son cairn." },
  { if: { all: [{ not: { has: "monde:gaut_enterre" } }, { not: { has: "monde:gaut_soigne" } }, { has: "monde:cygne_pris" }] }, text: "Au printemps, des bergers trouvent un cavalier des postes assis dans un creux de rocher de la gorge de l'Ourse, le manteau ouvert." },
  { if: { has: "monde:ancelin_lie" }, text: "Le péager du pont de Brume garde Ancelin trois jours dans sa cave, puis le livre à la prévôté. Ancelin parle beaucoup, et de beaucoup de gens." },
  { if: { all: [{ has: "monde:ancelin_vaincu" }, { not: { has: "monde:ancelin_lie" } }] }, text: "Ancelin repasse le col à pied, une main sur la cuisse. On ne le revoit plus à Vérenne." },
  { if: { has: "monde:ruse_pont" }, text: "On raconte au pont de Brume qu'un homme en manteau vert a déplié une lettre sur le bord du lac, et qu'il a ri tout seul, longtemps." },
  { if: { has: "monde:argent_laisse" }, text: "Le vieil homme du Cygne rend la bourse à Dame Hesmé, avec un mot : *Pas tous.*" },
  { if: { has: "monde:sans_brunette" }, text: "Brunette passe l'hiver chez Berthe, à Sorgue-le-Haut, la jambe guérie et le caractère intact." },
  { if: { all: [{ not: { has: "monde:sans_brunette" } }, { not: { has: "monde:guide_parti" } }] }, text: "Brunette repasse le col au dégel, chargée de sel de la Sorgue, pour la première fois depuis trois ans." },
  { if: { has: "monde:mahaut" }, text: "À Salins-Bas, Mahaut reconstruit son toit avec les planches de l'église." },
  // the chancellor
  { if: { has: "fin:paix" }, text: "À Vérenne, la duchesse Ysaure reçoit en même temps la paix des Ligues et une copie du registre de la prévôté. Maître Oriel Daumas quitte la chancellerie un matin, en voiture fermée, pour un couvent de la côte." },
  { if: { all: [{ has: "fin:cygne" }, { has: "monde:preuve_pere" }] }, text: "La ligne du registre de la Saint-Clair, recopiée de ta main, attend dans ton livre le jour où quelqu'un voudra la lire." },
  { if: { any: [{ has: "fin:guerre" }, { has: "fin:tard" }, { has: "fin:chemin" }] }, text: "À Vérenne, le chancelier Oriel fait sonner les cloches pour la guerre. Il a sept cents muids de sel engagés sur la Sorgue." },
  // the two of them
  { if: { count: [{ confie: "p_pere" }, { confie: "p_vu" }, { confie: "g_argent" }, { confie: "g_hiver" }, { confie: "g_offre" }], min: 3 }, text: "Vous vous êtes tout dit, ou presque, entre Vérenne et le lac. Au retour, vous repassez le col ensemble." },
  { if: { count: [{ confie: "p_pere" }, { confie: "p_vu" }, { confie: "g_argent" }, { confie: "g_hiver" }, { confie: "g_offre" }], max: 0 }, text: "Aux portes de Brumefond, vous vous saluez d'un signe de tête, comme dans la cour de la chancellerie, et chacun prend sa route." },
];
