// « Le Village aérien », Jules Verne, 1901 : un livre à lire, sans choix (lecture: true). Texte de Verne, domaine public,
// d'après l'édition numérisée par le Projet Gutenberg (saisie d'Ebooks libres et gratuits). Les trois notes de l'auteur
// sont à leur appel, entre parenthèses. Les titres des chapitres sont ceux de Verne, sauf le sixième ; ceux des pages
// sont de Claude, ainsi que tout ce qui vit dans les tags (gens, lieux, mots, résumés).
// Les lieux du livre.
module.exports = {
  tertre: { ambiance: "champs", name: "Le tertre des tamarins", x: 70, y: 22, region: "Les plaines de l'Oubanghi", desc: "Une petite butte couronnée de cinq ou six grands tamarins, seuls arbres d'une vaste plaine, à deux kilomètres de la forêt.", map: "oubanghi", arrive: "I_1" },
  lisiere: { ambiance: "nuit", name: "La lisière de la forêt", x: 68, y: 27, region: "Au sud de la plaine", desc: "Le bord d'une forêt immense et sombre, que les caravanes préfèrent contourner.", map: "oubanghi", arrive: "II_4" },
  foret: { ambiance: "foret", name: "La grande forêt", x: 60, y: 36, region: "La forêt de l'Oubanghi", desc: "Des arbres de cent cinquante pieds, des lianes tendues de l'un à l'autre, un demi-jour vert et des myriades d'oiseaux et de singes.", map: "oubanghi", arrive: "V_1" },
  marais: { ambiance: "foret", name: "Le marécage", x: 54, y: 42, region: "La grande forêt", desc: "Un terrain spongieux, semé de trous d'eau, de sangsues et de mille-pattes, qui annonce une rivière.", map: "oubanghi", arrive: "VI_5" },
  cage: { ambiance: "foret", name: "La clairière de la cage", x: 50, y: 44, region: "Au bord du rio", desc: "Une clairière marécageuse au bord de la rivière, avec une grotte dans la berge et, sous les mimosas, une étrange cabane.", map: "oubanghi", arrive: "VII_1" },
  rio: { ambiance: "eau", name: "Le rio Johausen", x: 42, y: 52, region: "La grande forêt", desc: "Une rivière profonde et sinueuse, large d'une cinquantaine de mètres, que les branches couvrent parfois d'une voûte.", map: "oubanghi", arrive: "IX_1" },
  barrage: { ambiance: "eau", name: "Le barrage", x: 36, y: 56, region: "Sur le rio Johausen", desc: "Un entassement de roches noires qui barre la rivière, avec un rapide écumant en son milieu.", map: "oubanghi", arrive: "XI_5" },
  sousbois: { ambiance: "nuit", name: "Le sous-bois", x: 33, y: 60, region: "Au cœur de la forêt", desc: "Une forêt si épaisse qu'il y fait presque nuit en plein jour, coupée d'une seule sente étroite.", map: "oubanghi", arrive: "XII_1" },
  ngala: { ambiance: "foret", name: "Ngala, le village aérien", x: 30, y: 64, region: "Au cœur de la forêt", desc: "Un village de paillotes bâti sur les branches maîtresses d'arbres géants, à cent pieds du sol, sous les cimes.", map: "oubanghi", arrive: "XIII_3" },
  case: { ambiance: "village", name: "La case des étrangers", x: 29, y: 63, region: "Ngala", desc: "Une paillote proprette au toit de feuilles de bananier, avec une literie d'herbes sèches et un âtre de pierres.", map: "oubanghi", arrive: "XIII_5" },
  palais: { ambiance: "village", name: "La place du palais", x: 28, y: 65, region: "Ngala", desc: "Une grande place dégagée au bout du village, devant la case du roi, bordée de branches retombantes.", map: "oubanghi", arrive: "XVI_3" },
  oubanghi: { ambiance: "eau", name: "L'Oubanghi", x: 22, y: 74, region: "Vers le Congo", desc: "Un grand fleuve barré de rapides, puis navigable jusqu'au Congo, avec ses villages et ses missions.", map: "oubanghi", arrive: "XVIII_2" },
};
