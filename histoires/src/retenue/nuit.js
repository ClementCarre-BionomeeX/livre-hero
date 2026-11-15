// The first page of every game: the night, and the people one may follow (leads: true, 8.9).
module.exports = {
  X_nuit: { act: "I", title: "Corvèze, la nuit du vote", place: "foulons", leads: true,
    text: [
      { second: false, text: "Ce soir, une seule personne t'attend. D'autres viendront, à mesure que la nuit te deviendra moins étrangère." },
      { second: true, text: "La même nuit recommence. Les mêmes rues, la même heure, le même vent du nord. Tu en sais un peu plus que la dernière fois, et quelqu'un d'autre, peut-être, a pris ta place." },
      "Le vent descend du Malbuisson et fait claquer les volets des Foulons. Sur le pont des Moulins, une lanterne attend. Là-haut, dans la Haute-Ville, une fenêtre reste allumée chez un drapier. Plus haut encore, au bout de la digue, une autre fenêtre brille, toute petite, au-dessus du lac noir.",
      "Qui suis-tu, cette nuit ?",
    ],
    choices: [] },
};
