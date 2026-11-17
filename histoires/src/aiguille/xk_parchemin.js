// L'Île Folle-Aiguille · side story « Le parchemin chiffré » (owes its question to The Gold-Bug: what does a page say to
// the one patient enough to read it?). The white parchment from the Gabier's chest shows, near heat, lines of brown
// signs in lemon ink: a substitution cipher signed J. D. Found in act III (the galley stove), read when the child has
// the patience (a puzzle, with hints from whoever the child has befriended), applied on the island (act V).
module.exports = {
  passages: {
    XK_signes: { act: "III", title: "Le parchemin chiffré", place: "cormorane", ambiance: "mer",
      text: [
        "Sur le pont, à l'abri de la chaloupe, tu déplies le parchemin. Les signes pâlissent déjà. Ils s'effacent à mesure que la peau refroidit, ligne après ligne, comme une marée qui descend sur une plage écrite ; dans une minute, il n'y aura plus rien.",
        "Tu les regardes de toutes tes forces, pour les garder. Des chiffres, des croix, des points-virgules, des parenthèses, une sorte de double croix, une main qui pointe, mêlés sans ordre apparent. Ils vont par petits groupes séparés de blancs, comme des mots. Certains groupes reviennent. Certains signes reviennent plus que d'autres.",
        "Le dernier s'efface. Le parchemin est blanc. Il sent le citron.",
        "Il suffira de le chauffer à nouveau.",
      ],
      choices: [
        { label: "Recopier les signes de mémoire, au charbon, sur le dos d'une page de ton carnet", fx: { flag: "xk:copie" }, to: "XK_copie" },
      ] },
    XK_copie: { act: "III", title: "Le parchemin chiffré", place: "cormorane", ambiance: "mer",
      text: [
        "Le soir même, tu chauffes de nouveau le parchemin, en cachette, à la lanterne de l'entrepont, une ligne à la fois, et tu recopies les signes sur une page arrachée, en tirant la langue, avec un bout de charbon de la cambuse. Il te faut trois nuits. À la fin, tu as une page noire de signes, que tu plies en quatre et que tu glisses dans ta vareuse, contre le parchemin.",
        "Tu ne sais pas encore les lire. Tu as le temps : la traversée est longue, et les nuits de mer aussi.",
      ],
      choices: [{ back: true }] },

    XK_dechiffre: { act: "III", title: "Les signes", place: "cormorane", ambiance: "nuit", puzzle: "xk_chiffre", puzzleLabel: "Te pencher sur la page de signes",
      text: [
        "Tu déplies ta page de signes à la lueur de la lanterne, dans le coin le plus tranquille du navire, et tu la regardes, comme on regarde une serrure.",
        "Quelqu'un, il y a vingt ans, a écrit une phrase en remplaçant chaque lettre par un signe, toujours le même pour la même lettre. Il a gardé les blancs entre les mots. C'est tout. C'est assez pour que personne ne lise. C'est assez peu pour qu'on finisse par lire, si l'on a la patience de compter.",
      ],
      choices: [{ back: true }] },
    XK_lu: { act: "III", title: "La phrase", place: "cormorane", ambiance: "nuit",
      text: [
        "Les signes se rendent, un par un, comme des soldats qui ont faim. Le ‡ est un E. Le 8 est un T. Le *3 qui revient, c'est AU. Puis les mots tombent d'eux-mêmes, à la file, et la phrase est là, sous tes yeux, écrite au charbon de ta propre main, de l'écriture d'un mort :",
        "*TIREZ TROIS QUARTS AU COUCHANT. PARTEZ DE LA PIERRE QUI SONNE.*",
        "Tu la relis dix fois. Elle ne veut rien dire. Elle veut dire quelque chose de très précis, à quelqu'un qui a sous les yeux ce que tu ne vois pas encore. Tu penses à la carte, aux relèvements notés au bord, *sud-ouest quart sud, trois cents pas*. Tu penses à la rose des vents de la timonière et à ses trente-deux aires, dont chacune s'appelle un quart.",
        "Tu brûles ta page de signes dans le fourneau de la cambuse, un matin, pendant que Fargue a le dos tourné. La phrase, tu l'as dans la tête. C'est encore l'endroit le plus sûr du navire.",
      ],
      choices: [{ back: true }] },
  },
  extras: {
    puzzles: {
      xk_chiffre: {
        kind: "chiffre", title: "La page de signes",
        text: "Recopiés au charbon, sur une page arrachée, les signes du parchemin de J. D., avec leurs blancs. Une phrase, une seule, dans la langue du Ponant.",
        cipher: "8;4‡( 84†;5 ¶3*485 *3 )†3)?*68 :*48‡( 0‡ 9* :;‡44‡ ¶3; 5†66‡",
        answer: ["tirez trois quarts au couchant partez de la pierre qui sonne", "tirez trois quarts au couchant", "trois quarts au couchant partez de la pierre qui sonne"],
        hint: [
          { text: "Un signe revient bien plus souvent que les autres. Dans la langue du Ponant, une lettre revient plus souvent que toutes : le E." },
          { if: { has: "fargue:parchemin_montre" }, text: "Fargue, un soir, en passant : « Les marins de mon temps chiffraient sans clef. Une lettre, un signe. Ils gardaient les blancs, par paresse. Cherche un petit mot de deux signes qui revient. Il n'y en a pas cinquante, dans notre langue. »" },
          { if: { has: "gaudremont:ami" }, text: "Le professeur Gaudrémont, à qui tu as montré une seule ligne en la faisant passer pour un jeu : « La crevette ! C'est un chiffre de collégien ! Le dernier mot a deux signes pareils au milieu : un mot en -ONNE, ou en -ELLE, ou en -ESSE. Un mot qui finit par le E, forcément. » Il a voulu voir la suite ; tu as dit que tu l'avais perdue." },
          { if: { has: "xi:protege" }, text: "La voix de Fenouillet, à ton oreille, une nuit où tu crois être seul{e} : « Le troisième mot commence par le signe du pied-de-mouche, ¶, et l'avant-dernier groupe aussi en a un : en notre langue, ce signe-là ne va qu'avec un U derrière lui. Q. C'est un Q. Ne me remercie pas ; je m'ennuie. »" },
          { if: { has: "xp:calixte_chiffre" }, text: "Frère Calixte, sur l'Écueil, en te rendant ta page sans l'avoir lue jusqu'au bout : « Le mot de huit signes, après AU, finit par le même signe que le premier mot commence. Et il parle du côté où le soleil se couche, mon enfant, comme toutes les choses qui ont peur. »" },
        ],
        force: { dom: "savoir", diff: 20, label: "Compter, essayer, recommencer, toute une nuit", takes: "night" },
        wrongText: "Les lettres que tu essaies donnent des mots qui n'existent dans aucune langue, ou dans une langue que parlerait un ivrogne.",
        tryLabel: "Écrire la phrase en clair",
        label: "Te pencher sur la page de signes",
        win: { fx: { flag: "correction:parchemin" }, to: "XK_lu" },
      },
    },
    quests: [
      { id: "XK", act: "V", kind: "annexe", title: "Le parchemin chiffré", start: "XK_signes", doit: "scarabee", echo: ["correction:parchemin"] },
    ],
  },
};
