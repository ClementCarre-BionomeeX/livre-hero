// L'Île Folle-Aiguille · side story « Le malade de la grand-chambre » (owes its question to The Imaginary Invalid: who
// is sicker, the man who imagines his illnesses, or the doctor who lives on them?). On the way to Brisegrève the baron,
// with nothing to do, reads a dictionary of medicine and finds every disease in it. He sends for the doctor three
// times a night. She gives him bread pills that cure everything (zc:pilules), charges every visit against her debt
// (zc:honoraires), or tells him he has nothing at all (zc:verite). Wired in A3v_jours.
module.exports = {
  passages: {
    ZC_dictionnaire: { act: "III", title: "Le malade de la grand-chambre", place: "cormorane", ambiance: "mer",
      text: [
        "Le baron Clavières s'ennuie. Il n'a jamais su s'ennuyer ; à Morlenc, il y avait la Bourse, le Conseil, les dîners, les créanciers, une vie entière occupée à ne pas penser. À bord, il n'y a rien, que la mer, qui ne cote rien, et la capitaine, qui ne lui parle pas. Le troisième jour, il découvre dans la bibliothèque de la grand-chambre un *Dictionnaire portatif de médecine, à l'usage des familles et des voyageurs*, en deux volumes, relié veau.",
        "Le quatrième jour, il a la goutte. Le cinquième, une fluxion de poitrine. Le sixième, une affection du foie, de la rate et du pylore, qu'il découvre dans l'ordre alphabétique. Le septième, à deux heures du matin, Petit-Jules frappe à la porte de l'infirmerie : le baron se meurt, il a un ver solitaire, il le sent, il demande le médecin.",
        "Victorine monte. Le baron est assis dans sa couchette, en bonnet de nuit, le dictionnaire ouvert sur les genoux à la lettre T, une chandelle à la main, la figure décomposée. « Le ténia, docteur, dit-il d'une voix d'agonisant. Lisez. Page quatre cent douze. Faiblesse, appétit dévorant, sensation de mouvement dans l'abdomen. J'ai tout. J'ai mangé trois parts de la tourte de Fargue. Et il bouge. Je vous jure qu'il bouge. »",
        "Elle l'examine. Le pouls est celui d'un bœuf. La langue, celle d'un chanoine. Le ventre, celui d'un homme qui a mangé trois parts de la tourte de Fargue. Il n'a rien. Il n'a jamais eu rien. Il aura demain la lettre U, et ce ne sera pas plus grave.",
      ],
      choices: [{ label: "Réfléchir à ce qu'on fait d'un malade pareil", to: "ZC_choix" }] },
    ZC_choix: { act: "III", title: "Le malade de la grand-chambre", place: "cormorane", ambiance: "nuit",
      text: [
        "Elle pense à ses collègues de Morlenc, qui vivent de malades pareils comme des bourdons d'une ruche, et qui leur font payer chaque visite le prix d'une messe. Elle pense qu'elle doit à cet homme trois mille quatre cents livres, ou plutôt qu'il les a rachetées, ce qui revient au même en moins poli. Elle pense aussi qu'un homme qui n'a rien, et qui se croit mourant à deux heures du matin, souffre réellement, d'une maladie qu'aucun dictionnaire ne nomme, et que cette maladie-là, au moins, elle sait la reconnaître.",
        "Le baron la regarde, pendant qu'elle réfléchit, avec une terreur grandissante, comme un accusé regarde un juge qui tarde à prononcer.",
      ],
      choices: [
        { label: "Lui faire avaler une pilule de mie de pain roulée dans du sucre, souveraine contre le ténia", fx: { flag: "zc:pilules" }, to: "ZC_pilules" },
        { label: "Lui prescrire des visites quotidiennes, à porter en déduction de ta dette", fx: { flag: "zc:honoraires" }, to: "ZC_honoraires" },
        { label: "Lui reprendre le dictionnaire, et lui dire qu'il n'a rien du tout", fx: { flag: "zc:verite" }, to: "ZC_verite" },
      ] },
    ZC_pilules: { act: "III", title: "Le malade de la grand-chambre", place: "cormorane", ambiance: "nuit",
      text: [
        "Elle redescend à l'infirmerie, roule entre ses doigts une boulette de mie de pain, la roule dans du sucre, la roule encore dans un peu de poudre de réglisse pour la couleur, et la remonte sur une soucoupe, avec la gravité d'un prêtre qui porte le saint sacrement. « Une seule, dit-elle. Pas deux. Deux le tuerait, et vous avec. »",
        "Le baron l'avale. Il ferme les yeux. Au bout d'une minute, il déclare qu'il le sent mourir. Au bout de cinq, qu'il est mort. Au bout de dix, il dort, d'un sommeil d'enfant, le dictionnaire sur la poitrine.",
        "Le lendemain, il a la lettre U, une urticaire, qui cède à une pilule. Le surlendemain, une variole, qui cède à deux, avec une tisane. Victorine roule des boulettes de mie tous les soirs ; Fargue, qui lui fournit le pain, ne pose pas de question, et lui en donne du meilleur. À Brisegrève, le baron se porte comme un charme, et dit à tout le monde que la médecin est un génie, ce qui, au fond, n'est pas faux, mais pas pour la raison qu'il croit.",
      ],
      choices: [{ label: "Retourner à l'infirmerie", back: "A3v_jours" }] },
    ZC_honoraires: { act: "III", title: "Le malade de la grand-chambre", place: "cormorane", ambiance: "nuit",
      text: [
        "« C'est grave, monsieur le baron, dit-elle. Pas mortel, si l'on veille. Il faudra que je vous voie tous les jours. Deux fois, quand la mer est forte. » Elle tire de sa trousse un carnet. « À cinq livres la visite, tarif de Morlenc, que je porterai en déduction de ce que je vous dois. »",
        "Le baron accepte avec une reconnaissance pathétique. Il signe un reçu, sur le dictionnaire, page quatre cent douze. Le lendemain, elle monte deux fois. Le surlendemain, trois. Il a un mal nouveau à chaque visite, qu'elle soigne avec gravité par des moyens inoffensifs et coûteux, et son carnet se remplit de petites sommes, qui font, au bout de dix jours, deux cents livres de moins sur trois mille quatre cents.",
        "Elle est un peu honteuse. Pas beaucoup. Elle se dit que c'est la première fois de sa vie qu'un Clavières paie ce qu'il doit à un Davrigny, et que cela valait la peine de traverser la moitié du monde pour le voir. Elle se dit aussi, certains soirs, en redescendant, qu'elle a appris en dix jours un métier qu'elle méprisait, et qu'il est très facile.",
      ],
      choices: [{ label: "Retourner à l'infirmerie", back: "A3v_jours" }] },
    ZC_verite: { act: "III", title: "Le malade de la grand-chambre", place: "cormorane", ambiance: "nuit",
      text: [
        "Elle prend le dictionnaire sur ses genoux, le referme, le met sous son bras. « Vous n'avez rien, monsieur le baron, dit-elle. Pas de ténia. Pas de goutte. Pas de pylore. Vous avez un corps de cinquante ans qui mange trop et ne fait rien, sur un navire où il n'y a rien à faire. Vous avez peur. C'est la seule maladie que vous ayez, et elle n'est pas dans ce livre. »",
        "Le baron la regarde, la bouche ouverte. Puis il devient très rouge. « Peur ? De quoi, peur ? » Elle hausse les épaules. « Je ne sais pas. Vous le savez. » Il y a un silence. Le baron baisse les yeux vers la chandelle, et pendant une seconde, une seule, Victorine voit passer sur sa figure quelque chose qui n'a rien d'imaginaire, une vraie peur, ancienne, de celles qu'on traîne depuis l'enfance et qui ont un nom de famille.",
        "Puis c'est fini. Il souffle la chandelle. « Bonne nuit, docteur. Vous êtes une femme sans pitié. » Il ne la fait plus appeler. Il ne lit plus le dictionnaire, que Victorine garde dans sa malle. Il fait les cent pas sur le pont, le soir, très longtemps, en regardant le sud.",
      ],
      choices: [{ label: "Retourner à l'infirmerie", back: "A3v_jours" }] },
  },
  extras: {
    quests: [
      { id: "ZC", act: "III", kind: "annexe", title: "Le malade de la grand-chambre", start: "ZC_dictionnaire", doit: "maladeimaginaire", echo: ["zc:pilules", "zc:honoraires", "zc:verite"] },
    ],
  },
};
