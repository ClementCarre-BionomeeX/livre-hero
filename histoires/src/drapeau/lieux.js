// « Face au drapeau », Jules Verne, 1896 : un livre à lire, sans choix (lecture: true). Texte de Verne, domaine public,
// d'après l'édition numérisée par le Projet Gutenberg (saisie d'Ebooks libres et gratuits). Les titres des chapitres
// sont ceux de Verne ; ceux des pages sont de Claude, ainsi que tout ce qui vit dans les tags (gens, lieux, mots,
// résumés).
// Les lieux du livre.
module.exports = {
  healthful: { ambiance: "champs", name: "Healthful-House", x: 12, y: 40, region: "Près de New-Berne, en Caroline du Nord", desc: "Une maison de santé pour riches malades : un parc de deux cents acres au revers d'une colline, des pavillons dispersés sous les arbres, jusqu'à la rive de la Neuze.", map: "bermudes", arrive: "I_1" },
  pavillon: { ambiance: "nuit", name: "Le pavillon 17", x: 11, y: 41, region: "Healthful-House", desc: "Un pavillon au fond du parc, aux fenêtres grillées, entouré d'un jardin et de haies vives, contre le mur d'enceinte.", map: "bermudes", arrive: "I_4" },
  neuze: { ambiance: "eau", name: "La Neuze", x: 14, y: 42, region: "L'estuaire, devant New-Berne", desc: "Une rivière large et sinueuse qui descend vers le Pamplico-Sound, avec New-Berne sur sa rive gauche.", map: "bermudes", arrive: "III_1" },
  sound: { ambiance: "mer", name: "Le Pamplico-Sound", x: 20, y: 44, region: "Caroline du Nord", desc: "Une vaste lagune fermée par un chapelet d'îles étroites, qu'on quitte par des passes comme l'Ocracoke-inlet.", map: "bermudes", arrive: "IV_3" },
  ebba: { ambiance: "mer", name: "La goélette Ebba", x: 40, y: 46, region: "En plein Atlantique", desc: "Un yacht de course élégant, aux mâts élevés, qui file vite même quand ses voiles pendent.", map: "bermudes", arrive: "V_1" },
  backcup: { ambiance: "mer", name: "L'îlot de Back-Cup", x: 84, y: 50, region: "À l'ouest des Bermudes", desc: "Un îlot de roches calcaires en forme de tasse renversée, nu et désert, couronné de vapeurs.", map: "bermudes", arrive: "VIII_2" },
  caverne: { ambiance: "souterrain", name: "La caverne de Back-Cup", x: 85, y: 51, region: "Sous l'îlot", desc: "Une immense caverne aux voûtes portées par une forêt de piliers, avec un petit lagon en son centre et un jour qui tombe d'un faux cratère.", map: "bermudes", arrive: "IX_1" },
  beehive: { ambiance: "souterrain", name: "Bee-Hive", x: 86, y: 50, region: "La caverne de Back-Cup", desc: "La Ruche : une rangée d'alvéoles creusées dans la paroi, où logent les habitants de la caverne.", map: "bermudes", arrive: "IX_4" },
  laboratoire: { ambiance: "souterrain", name: "Le laboratoire", x: 85, y: 52, region: "La caverne de Back-Cup", desc: "Un hangar sur la rive opposée du lagon, où personne n'entre que l'inventeur.", map: "bermudes", arrive: "XII_1" },
  pointe: { ambiance: "mer", name: "La pointe de Back-Cup", x: 82, y: 49, region: "Au nord-ouest de l'îlot", desc: "Une pointe rocheuse face à la haute mer, d'où l'on voit venir les navires.", map: "bermudes", arrive: "XVII_2" },
  tonnant: { ambiance: "mer", name: "Au large de Back-Cup", x: 76, y: 46, region: "Les parages des Bermudes", desc: "La mer devant l'îlot, à quelques milles, où croisent les navires de guerre.", map: "bermudes", arrive: "XVIII_1" },
};
