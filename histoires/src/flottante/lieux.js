// « Une ville flottante », Jules Verne, 1871 : un livre à lire, sans choix (lecture: true). Texte de Verne, domaine public,
// d'après l'édition numérisée par le Projet Gutenberg (saisie d'Ebooks libres et gratuits). Verne n'a pas titré ses
// chapitres : leurs titres, comme ceux des pages, sont de Claude, ainsi que tout ce qui vit dans les tags (gens, lieux,
// mots, résumés).
// Les lieux du livre.
module.exports = {
  liverpool: { ambiance: "port", name: "Liverpool", x: 90, y: 30, region: "L'Angleterre, sur la Mersey", desc: "Un grand port aux docks alignés sur les deux rives de la Mersey, avec ses quais flottants qui suivent la marée.", map: "atlantique", arrive: "I_1" },
  mersey: { ambiance: "eau", name: "La Mersey", x: 88, y: 31, region: "Entre Liverpool et Birkenhead", desc: "Une rivière large et encombrée de navires, qui s'ouvre sur la mer d'Irlande.", map: "atlantique", arrive: "IV_1" },
  pont: { ambiance: "mer", name: "Le pont du Great Eastern", x: 55, y: 40, region: "À bord", desc: "Deux cents mètres de planches entre les roufles et les pavois : les passagers l'appellent les boulevards.", map: "atlantique", arrive: "II_1" },
  roufle: { ambiance: "nuit", name: "Le grand roufle", x: 54, y: 41, region: "À bord, sur l'arrière", desc: "Le toit d'une grande construction du pont, où l'on monte prendre l'air comme sur la place d'une ville.", map: "atlantique", arrive: "XIX_1" },
  salon: { ambiance: "chateau", name: "Le grand salon", x: 56, y: 41, region: "À bord", desc: "Une salle décorée de lustres et de lampes à roulis, avec ses tables, son piano et ses cabines alignées le long des couloirs.", map: "atlantique", arrive: "VI_2" },
  fumoir: { ambiance: "ville", name: "Le fumoir", x: 57, y: 40, region: "À bord, sur l'avant", desc: "La « smoking room », véritable estaminet flottant, où l'on boit, fume et joue gros jeu.", map: "atlantique", arrive: "XXVI_1" },
  machines: { ambiance: "souterrain", name: "Les machines", x: 56, y: 42, region: "Au fond du navire", desc: "Deux puits immenses où battent les pistons de la machine des roues et de celle de l'hélice.", map: "atlantique", arrive: "VII_1" },
  irlande: { ambiance: "mer", name: "La côte d'Irlande", x: 80, y: 33, region: "Queenstown et le phare de Fastnet", desc: "Une côte toujours verte, qu'on appelle la Côte d'Émeraude.", map: "atlantique", arrive: "VI_1" },
  glaces: { ambiance: "neige", name: "Les parages des glaces", x: 32, y: 34, region: "Les bancs de Terre-Neuve", desc: "Une mer froide et brumeuse, où dérivent les glaces descendues du nord.", map: "atlantique", arrive: "XVIII_1" },
  gulf: { ambiance: "mer", name: "Le Gulf Stream", x: 28, y: 48, region: "L'Atlantique ouest", desc: "Un courant chaud qui traverse l'océan, plus foncé que l'eau qui l'entoure.", map: "atlantique", arrive: "XXII_1" },
  longisland: { ambiance: "mer", name: "Devant Long Island", x: 15, y: 50, region: "L'entrée de New York", desc: "Une côte basse de dunes jaunes, avec l'îlot de Fire Island et son phare, puis la pointe de Sandy Hook.", map: "atlantique", arrive: "XXXI_1" },
  newyork: { ambiance: "ville", name: "New York", x: 11, y: 48, region: "L'État de New York", desc: "Une grande ville sur l'Hudson, avec Broadway, ses hôtels à ascenseur et ses théâtres.", map: "atlantique", arrive: "XXXIV_1" },
  hudson: { ambiance: "eau", name: "L'Hudson", x: 10, y: 40, region: "De New York à Albany", desc: "Un grand fleuve où circulent des bateaux à vapeur grands comme des maisons.", map: "atlantique", arrive: "XXXVI_1" },
  niagara: { ambiance: "eau", name: "Les chutes du Niagara", x: 5, y: 30, region: "Entre les États-Unis et le Canada", desc: "Le fleuve se jette d'une hauteur de cent cinquante pieds en deux chutes, l'américaine et le Fer à cheval, séparées par Goat Island.", map: "atlantique", arrive: "XXXVII_1" },
  canada: { ambiance: "route", name: "La rive canadienne", x: 4, y: 32, region: "Le Canada", desc: "La rive gauche du Niagara, d'où l'on voit les deux chutes ensemble, avec le pont suspendu et la Table Rock.", map: "atlantique", arrive: "XXXVIII_1" },
};
