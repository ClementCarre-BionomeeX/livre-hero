// Le Grand Raccordement · the five crossroads (dawn, late morning, before noon, evening, and the next dawn). At three,
// each player takes his own hero's chapter here (the two others are closed to him), comes back when it ends, and
// waits; once the three chapters are told, the world is merged and the way on opens. Alone, the reader tells the three,
// in the order he likes.
var HEROES = ["basile", "salee", "enjambeur"];
function done(n, h) { return { has: "ch" + n + ":" + h }; }
function all(n) { return { all: HEROES.map(function (h) { return done(n, h); }) }; }
var LABELS = {
  basile: ["la ronde de six heures", "le registre", "l'orangerie", "le soir au Domaine", "le serment"],
  salee: ["la route du beurre", "le retour à Mirevaux", "la crèmerie", "les cendres de Mirevaux", "les motards"],
  enjambeur: ["un milliard d'images", "la tour qui tourne", "onze heures cinquante-neuf", "les prières", "l'aube"],
};
var STARTS = {
  basile: ["B1_ronde", "B2_registre", "B3_orangerie", "B4_soir", "B5_aube"],
  salee: ["S1_route", "S2_retour", "S3_cremerie", "S4_cendres", "S5_aube"],
  enjambeur: ["A1_motte", "A2_tour", "A3_midi", "A4_prieres", "A5_aube"],
};
var NAMES = { basile: "Basile", salee: "Salée", enjambeur: "L'Enjambeur" };
function hub(n, act, title, place, text, next, nextLabel) {
  text = text.concat([{ if: { not: all(n) }, text: "Chacun raconte son heure. Le récit reprendra ensemble quand les trois l'auront fait." }]);
  return { act: act, title: title, place: place, hub: true, noLead: true, backName: title.toLowerCase(), text: text,
    choices: HEROES.map(function (h) {
      return { label: NAMES[h] + " · " + LABELS[h][n - 1], hide: done(n, h), fx: { team: h }, to: STARTS[h][n - 1], big: true };
    }).concat([{ label: nextLabel, if: all(n), why: "Les trois récits doivent d'abord être racontés.", to: next, big: true }]) };
}
var C1 = hub(1, "I", "Six heures du matin", "route", [
  { first: true, text: "Le jour se lève sur le désert comme on ouvre un four : d'un coup, et en vous soufflant au visage. La route de Mirevaux au Domaine file tout droit, noire, entre deux mers bleues de panneaux solaires qui dorment encore, tête basse, des millions de visages de verre tournés vers le sable." },
  { first: true, text: "Au bout de la route, derrière des grilles dorées hautes de six mètres, le Domaine Croûte & Chrome garde ses trésors. Le plus beau se tient dans la Salle froide, à quatre degrés : un ange d'acier blanc, la trompette aux lèvres, un pied levé. Sur le côté de son socle, une plaque de cuivre : *Le Héraut d'inox, par Ernestine Chrome.*" },
  { first: true, text: "Sur un panneau d'affichage, à mi-chemin, le Consortium des Panneaux Réunis a fait coller dans la nuit une affiche de quatre mètres : un soleil carré, et dessous, en lettres d'or, *Aujourd'hui, midi : le Grand Raccordement. Le soleil appartient à tout le monde. Désormais, il appartient à quelqu'un.*" },
  { first: true, text: "À trois, chacun prend son héros. Seul, tu choisis par qui commencer." },
].concat([
  { if: all(1), text: "Il est sept heures moins le quart. Dans la cour des cuisines du Domaine, une moto à side-car s'arrête devant une porte verte qui, hier encore, n'avait qu'une serrure." },
]), "E1", "La porte de service");
C1.fx = { assign: { basile: "basile", salee: "salee", enjambeur: "enjambeur" } };
var C2 = hub(2, "I", "Dix heures", "route", [
  { first: true, text: "À dix heures, le Consortium ferme une à une les barrières des champs de panneaux. Des camionnettes blanches remontent la route, gyrophare orange, en se doublant avec la politesse des corbillards. Sur les toits de Mirevaux, des hommes en combinaison blanche vissent sur chaque panneau un petit boîtier frappé d'un soleil carré." },
  { first: true, if: { has: "mesure=oui" }, text: "Au Domaine, dans la Salle froide, quelqu'un a posé sur le socle du Héraut d'inox une étiquette autocollante : *Réservé · Consortium des Panneaux Réunis · Ne pas déplacer.* L'ange la porte comme une décoration qu'on ne lui a pas demandé d'aimer." },
  { first: true, if: { has: "mesure=non" }, text: "Au Domaine, dans la Salle froide, le Héraut d'inox se tient sur son socle comme hier, comme depuis toujours. Gaspard Zénith est reparti sans son chiffre. Il a dit, en montant dans sa voiture blanche : « Ce n'est que partie remise. » Il l'a dit au soleil." },
].concat([
  { if: all(2), text: "Onze heures et demie. Dans une poche de cape de cuir, à Mirevaux, et dans une poche d'uniforme, au Domaine, deux talkies-walkies grésillent en même temps." },
]), "E3", "La plaquette");
var C3 = hub(3, "II", "Midi moins le quart", "route", [
  { first: true, text: "Le soleil monte. Il est blanc, sans un nuage autour, comme l'a promis la météo. À perte de vue, les panneaux sont réveillés. Ils frémissent sur leurs pieds de métal, au ralenti, comme des chiens de chasse qui entendent quelque chose." },
  { first: true, if: { has: "midi:compris" }, text: "Deux personnes au moins, dans tout le pays, savent ce qui va arriver à midi. Elles ont trente-neuf ans à elles deux, et un talkie-walkie chacune." },
  { first: true, if: { not: { has: "midi:compris" } }, text: "Dans tout le pays, personne ne sait ce qui va arriver à midi, à part ceux qui l'ont décidé. Ils sont au dernier étage d'une tour de verre, et ils ont réservé le déjeuner." },
].concat([
  { if: all(3), text: "Midi sonne au clocher de Mirevaux. Le premier coup tombe sur la ville. Au deuxième, tous les panneaux du pays tournent la tête." },
]), "E4", "Midi");
var C4 = hub(4, "II", "Le soir", "route", [
  { first: true, text: "Le soleil se couche sur un pays qu'il ne reconnaît plus. Mirevaux fume. Les routes sont pleines de voitures arrêtées aux feux rouges, sagement, portières ouvertes, vides. Le Grand Raccordement tient toujours : à perte de vue, les panneaux suivent le soleil qui descend, et le soleil, en partant, a l'air de s'excuser." },
  { first: true, text: "Partout, dans les cuisines, dans les caves, dans les voitures, des gens tiennent dans leurs mains un emballage de beurre, parce que c'est la seule chose fraîche qu'il leur reste. Sur chaque emballage, un petit ange doré souffle dans sa trompette." },
].concat([
  { if: all(4), text: "La nuit tombe. Sur la route de Mirevaux au Domaine, des phares s'allument, l'un après l'autre, en file. Ce sont des camions. Ils roulent vers le métal." },
]), "E7", "Les Ferrailleurs");
var C5 = hub(5, "III", "L'aube", "carrefour", [
  { first: true, text: "Au Carrefour de Mirevaux, sur la vieille bascule du marché, se dresse un ange de beurre. Il est doré, un peu de travers, la trompette aux lèvres, un pied levé comme s'il enjambait la ville. Il est grand comme un enfant de dix ans. Personne, à part deux personnes et un ange, ne sait ce qu'il y a dedans." },
  { first: true, text: "Autour, la ville fume encore. Les voitures attendent au feu rouge. L'horloge de la banque, au coin de la rue des Notaires, s'est arrêtée sur midi. Le ciel, à l'est, devient orange." },
].concat([
  { if: all(5), text: "Le soleil se lève. Le premier rayon touche la trompette de l'ange." },
]), "Z_branch", "Ce qui arriva");
module.exports = { C1: C1, C2: C2, C3: C3, C4: C4, C5: C5 };
