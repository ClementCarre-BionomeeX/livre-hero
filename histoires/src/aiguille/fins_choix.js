// L'Île Folle-Aiguille · the last choice of the book, shared by the child's and the doctor's V.3 chapters (not a lot:
// required by a5_mousse3 and a5_victorine3). Each chapter first settles the ship: navire:ok (the loyal side sails),
// navire:perdu (no ship), mutins:navire (the child goes aboard with the cook's men) or mutins:partis (the men sail
// away and leave the others). Every one of those states opens at least one ending.
var BARON = { not: { has: "xs:baron_mort" } };
var OK = { has: "navire:ok" };
var PERDU = { has: "navire:perdu" };
var PAYE = { has: "chevalier:paye" };
var LIVRE_PUBLIC = { any: [{ has: "livre=echevins" }, { has: "livre=jeanne" }] };
var DAGREL_VIF = { all: [{ has: "dagrel:demasque" }, { not: { has: "dagrel:mort" } }, { not: { has: "dagrel:pris" } }] };
var VIEUX_LIE = { any: [{ has: "dagrel:pris" }, DAGREL_VIF] };
function choix(qui) {
  var m = qui === "mousse";
  return [
    { label: "Rentrer à Morlenc, et ouvrir le livre devant le Conseil", hide: { not: { all: [OK, LIVRE_PUBLIC] } }, to: "F_livre", big: true },
    { label: "Rentrer à Morlenc avec l'argent, et ne rien dire", hide: { not: { all: [OK, { not: LIVRE_PUBLIC }, { not: PAYE }, { not: { has: "mutins:payes" } }] } }, to: "F_baron", big: true },
    { label: "Laisser l'argent aux gens de l'île, et rentrer pauvres", hide: { not: { all: [OK, { not: PAYE }] } }, to: "F_ile", big: true },
    { label: "Rentrer les cales vides, derrière la Désinvolte", hide: { not: { all: [OK, PAYE] } }, to: "F_chevalier", big: true },
    { label: "Monter sur la Désinvolte, et lui laisser l'argent", hide: { not: { all: [{ any: [PERDU, { has: "mutins:partis" }] }, { has: "desinvolte:alliee" }] } }, to: "F_chevalier", big: true },
    { label: m ? "Partir avec le maître-coq, sous pavillon noir" : "Les laisser partir", hide: { not: { has: "mutins:navire" } }, to: "F_mutins", big: true },
    { label: "Regarder partir la Cormorane", hide: { not: { has: "mutins:partis" } }, to: "F_mutins", big: true },
    { label: "Rester sur l'île, et bâtir", hide: { not: PERDU }, to: "F_naufrage", big: true },
    { label: "Laisser le vieil homme reprendre la mer", hide: { not: { all: [DAGREL_VIF, { any: [OK, { has: "desinvolte:alliee" }, { has: "mutins:navire" }] }] } }, to: "F_dagrel", big: true },
    { label: "Ramener le vieil homme à Morlenc, pour qu'on le juge", hide: { not: { all: [VIEUX_LIE, OK] } }, to: "F_corde", big: true },
  ];
}
module.exports = { choix: choix, BARON: BARON, OK: OK, PERDU: PERDU, PAYE: PAYE, DAGREL_VIF: DAGREL_VIF, LIVRE_PUBLIC: LIVRE_PUBLIC };
