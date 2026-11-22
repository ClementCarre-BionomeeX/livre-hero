// « Les Indes noires », Jules Verne, 1877 : un livre à lire, sans choix (lecture: true). Texte de Verne,
// domaine public, d'après l'édition numérisée par le Projet Gutenberg. Les notes de l'auteur restent entre parenthèses
// à leur place. Les titres des chapitres sont ceux de Verne ; les titres des pages sont de Claude, comme tout ce qui vit
// dans les tags (gens, lieux, mots, résumés).
// Les lieux du livre.
module.exports = {
  edimbourg: { ambiance: "ville", name: "Édimbourg", map: "ecosse", x: 86, y: 62, region: "La capitale de l'Écosse", desc: "La vieille ville sur ses collines, la Canongate, le palais d'Holyrood, et le port de Leith au bord du golfe.", arrive: "I_1" },
  forth: { ambiance: "mer", name: "Le golfe de Forth", map: "ecosse", x: 72, y: 52, region: "L'estuaire du Forth", desc: "Un bras de mer qui s'enfonce dans les terres jusqu'à Stirling, ses îlots, ses châteaux en ruine et ses petits ports.", arrive: "II_2" },
  callander: { ambiance: "village", name: "Callander", map: "ecosse", x: 46, y: 34, region: "Le comté de Stirling", desc: "Une petite ville au bord de la rivière, au pied des Highlands, avec sa gare.", arrive: "III_1" },
  dochart: { ambiance: "souterrain", name: "La fosse Dochart", map: "ecosse", x: 44, y: 42, region: "Les houillères d'Aberfoyle", desc: "Une mine abandonnée : des bâtiments vides, des rails pourris, et le puits Yarow, ses échelles et ses paliers, qui descend à quinze cents pieds.", arrive: "I_2" },
  cottage: { ambiance: "souterrain", name: "Le cottage des Ford", map: "ecosse", x: 42, y: 44, region: "La fosse Dochart", desc: "Une maison creusée dans le schiste, au fond de la mine, éclairée par le jour pâle d'un puits d'aération.", arrive: "V_1" },
  nouvelle: { ambiance: "souterrain", name: "La Nouvelle-Aberfoyle", map: "ecosse", x: 36, y: 46, region: "Sous le comté de Stirling", desc: "Un labyrinthe de galeries et de cavernes naturelles, hautes comme des cathédrales, aux parois de charbon.", arrive: "IX_1" },
  coalcity: { ambiance: "souterrain", name: "Coal-city", map: "ecosse", x: 38, y: 40, region: "La Nouvelle-Aberfoyle", desc: "Un village de mineurs sous un dôme de roche, éclairé à l'électricité, au bord du lac Malcolm, avec la chapelle de Saint-Gilles sur son rocher.", arrive: "XIII_1" },
  irvine: { ambiance: "mer", name: "Irvine", map: "ecosse", x: 18, y: 86, region: "Le comté d'Ayr", desc: "Un petit port sur la côte ouest, la ferme de Melrose, et sur sa colline les ruines de Dundonald-Castle.", arrive: "XI_2" },
  arthur: { ambiance: "montagne", name: "Arthur-Seat", map: "ecosse", x: 90, y: 66, region: "Édimbourg", desc: "Une colline en forme de lion couché qui domine Édimbourg, la mer et toute la campagne.", arrive: "XVII_5" },
  lomond: { ambiance: "eau", name: "Le lac Lomond", map: "ecosse", x: 22, y: 42, region: "L'entrée des Highlands", desc: "Un long lac semé d'îles, au pied du Ben Lomond, avec ses ruines et ses légendes de clans.", arrive: "XVIII_1" },
  katrine: { ambiance: "eau", name: "Le lac Katrine", map: "ecosse", x: 32, y: 30, region: "Le pays de Rob Roy", desc: "Un lac étroit et sauvage entre les collines, chanté par Walter Scott dans *La Dame du lac*.", arrive: "XVIII_4" },
};
