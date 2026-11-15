// Maëlle, second pass: the flight through the Foulons, Nine warned on the way, the col and the turn back with the key
// (a new ending), and the hundred écus spent on the doors of the quarter (a new ending).
var A = "I";
module.exports = {
  M_fuite_nuit: { act: A, title: "Les Foulons, de nuit", place: "foulons", fx: { time: 0.5 },
    text: [
      { if: { has: "paquet:seuil" }, text: "Tu poses le paquet contre la porte de l'apothicairerie, sous l'auvent, à l'abri de la pluie. Tu frappes trois coups, et tu t'en vas sans attendre." },
      { if: { has: "paquet:sorge" }, text: "Du bord du lavoir, tu lances le paquet dans la Sorge. Il coule tout de suite, d'un bloc, comme une pierre." },
      { if: { has: "paquet:emporte" }, text: "Tu glisses le paquet au fond du baluchon, sous le pain. Il pèse sur ton épaule à chaque pas." },
      "Vous traversez le quartier endormi, Tibo devant, toi derrière. Les volets sont clos. Les chats se sauvent sous les cuves. Au coin de la rue du Lavoir, la troisième maison après la fontaine a encore une chandelle derrière le volet : Nine veille, ou son homme.",
    ],
    choices: [
      { label: "Frapper chez Nine, en passant", if: { savoir: "veine" }, to: "M_fuite_nine" },
      { label: "Passer sans t'arrêter", to: "M_fuite_col", fx: { time: 2 } },
    ] },
  M_fuite_nine: { act: A, title: "Une chandelle derrière le volet", place: "foulons", fx: { flag: "nine:prevenue", time: 0.25 },
    text: [
      "Nine t'ouvre, son ventre rond sous un châle. Elle voit Tibo, le baluchon, tes souliers de route. Elle a compris avant que tu parles.",
      "« Cette nuit, l'eau va descendre du lac, lui dis-tu. Je ne sais pas à quelle heure. Monte chez ton père, en Haute-Ville. Ce soir. Ne me demande pas comment je le sais. »",
      "Nine te regarde longtemps. Puis elle rentre, et tu l'entends secouer Guillot. Quand tu arrives au bout de la rue, une lanterne sort de chez elle et prend la Côte.",
    ],
    choices: [{ label: "Prendre la route de Lyre", to: "M_fuite_col", fx: { time: 1.75 } }] },
  M_fuite_col: { act: A, title: "Le col de la Grève", place: "berge",
    text: [
      "La route de Lyre monte en lacets vers le col de la Grève. Tibo marche devant. À trois heures, au col, il s'assoit sur une pierre et annonce que ses pieds s'arrêtent là.",
      "D'ici, toute la vallée est sous vous. Au bout, la digue, et à la fenêtre de la Maison des Vannes, une seule lanterne.",
      { if: { has: "paquet:emporte" }, text: "Le paquet est dans ton baluchon, à tes pieds. La lanterne, là-bas, l'attend." },
    ],
    choices: [
      { label: "Reprendre la route avec Tibo", to: "M_route", fx: { time: 0.25 } },
      { label: "Redescendre vers la digue avec Tibo, le paquet sur le dos", hide: { not: { has: "paquet:emporte" } }, to: "M_fuite_retour" },
    ] },
  M_fuite_retour: { act: A, title: "Redescendre", place: "berge", fx: { time: 1.5 },
    text: [
      "Tu prends Tibo sur ton dos, puis à la main, puis sur ton dos. Vous coupez par les prés, droit vers le lac, hors des routes. La pluie vous rattrape à quatre heures. Tibo pleure un peu, sans bruit, et il marche quand même.",
      "À quatre heures et demie, vous êtes au pied des deux cents marches de la digue. Tibo les monte devant toi, à quatre pattes, en comptant tout haut, comme à l'école.",
      "Le vieil homme qui ouvre est grand, maigre, jaune. Il voit le paquet, et il garde ses questions. Il dit seulement : « Il est tard. Il est très tard. Venez. »",
    ],
    choices: [{ label: "Descendre avec lui à la vanne", to: "M_tard" }] },
  M_tard: { act: A, title: "Quatre heures et demie", place: "digue", end: true, fx: { time: 2 },
    text: [
      "Dans la chambre de la vanne, le vieux tourne la clé. Il prend un rayon, toi un autre, Tibo le troisième, avec ses deux mains d'enfant et tout son poids. La roue tourne lentement, si lentement. Le vieux compte. Sa voix se casse sur chaque nombre.",
      "Au quinzième tour, la digue rugit. Au vingtième, Tibo a perdu ses bras ; il pousse avec le ventre. Au quarantième, il est cinq heures dix. Le vieux s'assoit contre le mur et reste immobile un long moment.",
      "Vers cinq heures et demie, sous vos pieds, toute la digue gémit. Une pierre tombe quelque part, loin, dans la galerie. Puis le gémissement baisse. Le lac descend. La veine tient.",
      "En bas, personne n'a fait lever les Foulons. L'eau entre dans les maisons au petit jour, par les portes et les soupiraux. Elle monte lentement : on a le temps de grimper aux étages, de passer les enfants par les fenêtres.",
      { if: { has: "nine:prevenue" }, text: "Nine, elle, est en Haute-Ville depuis minuit, chez son père, avec son homme et le berceau." },
      "Au jour, le vieux vous fait du café. Tibo s'endort sur le banc de la pièce d'à côté, la tête sur le baluchon. Tu regardes ses paumes, rouges et gonflées. Il les a eues pour une course de quatre sous.",
    ] },

  // ------------------------------------------------------------------ the hundred écus, spent
  M_vendue_portes: { act: A, title: "Cent écus de bruit", place: "foulons", fx: { time: 1.5 },
    text: [
      "Tibo dort dans le grand lit du Cerf. Tu laisses la bourse sur la table, à côté de lui, avec un mot pour l'aubergiste. Tu mets quinze écus dans ta poche. La porte Saint-Rieul est fermée. Le garde t'ouvre la poterne pour un écu, sans poser de questions.",
      "Aux Foulons, tu laisses les portes tranquilles. Tu vas tout droit chez Gaspard le crieur, qui annonce les morts et les ventes. Tu poses cinq écus sur sa table. « Crie que la digue cède. Toutes les rues. Maintenant. »",
      "Il compte les écus, deux fois. Il prend sa cloche à main. Tu prends l'autre bout du quartier, avec la cloche du lavoir.",
    ],
    choices: [{ label: "Sonner", to: "M_vendue_rachat" }] },
  M_vendue_rachat: { act: A, title: "Ce qu'on rachète", place: "foulons", end: true, fx: { time: 3 },
    text: [
      "À deux heures et demie, le quartier monte la Côte. On grogne, on jure, on croit Gaspard à moitié, on te croit à moitié, et deux moitiés, cela fait presque tout le monde.",
      "À cinq heures et demie, la digue cède. Tu l'entends du parvis de Saint-Rieul : un grondement qui descend la vallée, puis la Sorge qui se lève. La vague passe sur les Foulons. Quand elle est passée, il reste des toits.",
      "Le quartier regarde en bas, en couvertures. Il est vivant. Il a perdu tout le reste.",
      "Tu remontes au Cerf au matin. Tibo dort encore, en travers du lit. La bourse est sur la table. Il y manque quinze écus, et tu sais où ils sont passés.",
      "Le reste, tu le gardes. Tu as vendu la clé d'un vieil homme. Avec son prix, tu as acheté un peu de bruit, à temps. Les deux choses sont vraies, et tu les porteras ensemble.",
    ] },
};
