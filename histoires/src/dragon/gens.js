// « L'Heure du dragon » (The Hour of the Dragon), Robert E. Howard, 1935-1936 : un livre à lire, sans choix (lecture: true).
// Texte : traduction nouvelle par Claude, faite pour cette bibliothèque à partir du texte anglais paru dans Weird Tales
// de décembre 1935 à avril 1936 (Project Gutenberg n° 42243, domaine public). Les titres des chapitres sont ceux de Howard ;
// ceux des pages et tout ce qui vit dans les tags (gens, lieux, mots, résumés) sont de Claude.
// Les gens du livre (syntaxe de « Qui est qui » : aka, qui, aspect, face). Cliquables à partir de leur entrée en scène.
module.exports = {
  conan: { name: "Conan le Cimmérien", aka: ["Conan", "Cimmérien"], face: { age: "adulte", hair: "noir", coif: "milong", beard: "sans", iris: "bleu" }, qui: "Le roi d'Aquilonie, un barbare venu du Nord.", aspect: { allure: "un géant aux membres énormes", visage: "yeux bleus sous une crinière noire" } },
  xaltotun: { name: "Xaltotun", aka: ["Xaltotun", "Pythonien"], face: { age: "adulte", hair: "noir", coif: "milong", beard: "barbe", iris: "noir", skin: "clair" }, qui: "Un grand prêtre de Set, venu de Python, en Achéron.", aspect: { allure: "grand et vigoureux", visage: "cheveux noirs ondulés, barbe sombre", signe: "des yeux sombres et brûlants" } },
  orastes: { name: "Orastès", aka: ["Orastès"], qui: "Un prêtre de Mitra chassé de son ordre pour magie noire.", aspect: { allure: "un savant des arts interdits" } },
  amalric: { name: "Amalric", aka: ["Amalric"], qui: "Le baron de Tor, un grand seigneur de Némédie.", aspect: { allure: "un seigneur riche et ambitieux" } },
  tarascus: { name: "Tarascus", aka: ["Tarascus"], qui: "Le frère cadet du roi de Némédie.", aspect: { allure: "moins grand et moins fort que Conan" } },
  valerius: { name: "Valérius", aka: ["Valérius"], face: { age: "jeune", hair: "blond", coif: "boucles", beard: "sans" }, qui: "Un prince de l'ancienne dynastie d'Aquilonie, chassé en exil.", aspect: { allure: "grand, jeune et beau", visage: "des boucles blondes" } },
  pallantides: { name: "Pallantidès", aka: ["Pallantidès"], qui: "Le commandant des chevaliers noirs de Conan, son général.", aspect: { allure: "un chevalier fidèle au roi" } },
  valannus: { name: "Valannus", aka: ["Valannus"], qui: "Un capitaine des lanciers de Pellia, de la taille du roi.", aspect: { allure: "grand et large d'épaules" } },
  zenobia: { name: "Zénobia", aka: ["Zénobia"], f: true, face: { age: "jeune", hair: "brun", coif: "long", iris: "noir" }, qui: "Une jeune femme du sérail de Tarascus.", aspect: { allure: "mince et souple", visage: "des yeux sombres, une masse de cheveux bruns" } },
  arideus: { name: "Aridéus", aka: ["Aridéus"], qui: "L'écuyer de Tarascus.", aspect: { allure: "maigre, sombre et silencieux", signe: "des mailles noires" } },
  zelata: { name: "Zélata", aka: ["Zélata"], f: true, face: { age: "ancien", coif: "long", iris: "noir" }, qui: "Une vieille femme des collines, que les gens des vallées appellent sorcière.", aspect: { allure: "droite et grande, en haillons", visage: "traits aquilins, yeux noirs perçants", signe: "un grand loup gris la suit" } },
  servius: { name: "Servius Galannus", aka: ["Servius"], qui: "Un noble aquilonien qui a un domaine près de Tarantia.", aspect: { allure: "un patricien prudent", signe: "un bonnet à plume" } },
  trocero: { name: "Trocéro", aka: ["Trocéro"], qui: "Le comte de Poitain, l'ami de Conan.", aspect: { allure: "un grand seigneur du Sud" } },
  prospero: { name: "Prospéro", aka: ["Prospéro"], qui: "Un général de Conan, du Poitain.", aspect: { allure: "un capitaine du Sud" } },
  albiona: { name: "Albiona", aka: ["Albiona"], f: true, face: { age: "jeune", hair: "blond", coif: "long", skin: "clair" }, qui: "Une comtesse d'Aquilonie, condamnée à mort.", aspect: { allure: "jeune et fière", visage: "des cheveux d'or en ondes brillantes" } },
  hadrathus: { name: "Hadrathus", aka: ["Hadrathus"], face: { age: "adulte", beard: "sans", iris: "noir", skin: "clair" }, qui: "Un prêtre d'Asura, à Tarantia.", aspect: { allure: "calme et méditatif", visage: "un visage pâle et ovale, aux traits fins" } },
  valbroso: { name: "Valbroso", aka: ["Valbroso"], face: { age: "adulte", hair: "noir", iris: "noir" }, qui: "Un comte de Zingara qui vit du péage des caravanes.", aspect: { allure: "maigre et brun", visage: "yeux noirs, nez busqué de rapace", signe: "une armure de plates noires" } },
  beloso: { name: "Béloso", aka: ["Béloso"], face: { age: "adulte", hair: "noir", beard: "moustache", iris: "noir" }, qui: "Un Zingarien au service de Valbroso.", aspect: { allure: "maigre et nerveux", visage: "yeux noirs dangereux, moustache à la zingarienne" } },
  zorathus: { name: "Zorathus", aka: ["Zorathus"], qui: "Un marchand du Koth.", aspect: { allure: "un voyageur riche et prudent" } },
  publio: { name: "Publio", aka: ["Publio"], qui: "Un riche marchand de Messantia.", aspect: { allure: "un homme sorti du ruisseau, devenu riche" } },
  gebal: { name: "Gébal", aka: ["Gébal"], face: { age: "adulte", hair: "noir", beard: "barbe" }, qui: "Un Shémite au service de Publio.", aspect: { allure: "de taille moyenne, très musclé", visage: "une barbe frisée d'un noir bleuté" } },
  demetrio: { name: "Démétrio", aka: ["Démétrio"], face: { age: "adulte", beard: "barbe" }, qui: "Le capitaine d'une galère argienne.", aspect: { allure: "trapu, le visage brutal" } },
  thutothmes: { name: "Thutothmès", aka: ["Thutothmès"], qui: "Un prêtre de Set, à Khemi.", aspect: { allure: "grand, au visage de faucon" } },
  thothamon: { name: "Thoth-Amon", aka: ["Thoth-Amon"], qui: "Le maître des prêtres de Set, à Luxur.", aspect: { allure: "le Grand, que l'on craint" } },
  akivasha: { name: "Akivasha", aka: ["Akivasha"], f: true, qui: "Une princesse de Stygie, d'une légende vieille de dix mille ans.", aspect: { allure: "une beauté qui n'a jamais vieilli" } },
  thothmekri: { name: "Thothmekri", aka: ["Thothmekri"], qui: "Un grand prêtre de Set, mort il y a trois mille ans.", aspect: { allure: "une momie dans des bandelettes" } },
  tiberias: { name: "Tibérias", aka: ["Tibérias"], face: { age: "adulte", coif: "long", marks: ["balafre"] }, qui: "Un Aquilonien en haillons, venu aux avant-postes.", aspect: { allure: "décharné, comme un loup balafré", visage: "une grande marque au fer rouge", signe: "des traces de fers aux poignets" } },
};
