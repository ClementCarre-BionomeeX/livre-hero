// L'Île Folle-Aiguille · side story « La sœur du baron » (owes its question to The Fall of the House of Usher: does a
// family's buried crime come back up through its last children?). In the closed wing of the hôtel Clavières lives
// Aurélie, the baron's sister, who has not left her rooms in twenty years and falls into trances like death. The baron
// asks the doctor for a certificate of incapacity, which would hand him her fortune for the expedition (yi:certificat,
// or yi:refus). Aurélie, lucid between two trances, says what she read in her father's papers; and the doctor leaves,
// or does not leave, written orders to the old maid about the trances (yi:consigne). Wired in A2v_jours.
module.exports = {
  passages: {
    YI_aile: { act: "II", title: "L'aile fermée", place: "haute_ville", ambiance: "nuit",
      fx: { meet: "aurelie" },
      text: [
        "Le billet du baron arrive au Cormoran à neuf heures du soir, porté par un laquais en livrée qui attend la réponse dans l'escalier. *Docteur, une consultation, ce soir même, à l'hôtel. Une affaire de famille. Je compte sur votre discrétion comme sur votre science. A. C.*",
        "Le baron la reçoit en bas, en robe de chambre, et la conduit lui-même, une lampe à la main, à travers l'hôtel endormi, puis par une porte qu'il ouvre avec une clef pendue à sa chaîne de montre, dans une partie de la maison que les invités du dîner ne verront jamais. L'aile du nord. Les tapisseries y sont roulées contre les murs ; les miroirs, voilés de draps ; les pendules, arrêtées toutes sur la même heure. L'air y est froid et immobile, et il y flotte une odeur de cire, de violette et de renfermé, l'odeur des chambres où l'on a veillé un mort et qu'on n'a jamais rouvertes.",
        "« Ma sœur, dit le baron, à voix basse, devant une porte. Aurélie. Elle n'est pas sortie de ces pièces depuis vingt ans. Elle a des… absences. Elle tombe, et elle est morte, docteur, morte à s'y méprendre, le pouls, le souffle, la glace qui ne se ternit pas. Et puis elle se relève, une heure après, ou un jour, et elle demande l'heure. » Il ouvre la porte. « Les médecins de Morlenc ne savent plus quoi en dire. Ils disent que c'est l'âme. Vous ne croyez pas à l'âme, je crois. C'est pour ça que je vous ai fait venir. »",
      ],
      choices: [{ label: "Entrer", to: "YI_aurelie" }] },
    YI_aurelie: { act: "II", title: "Aurélie", place: "haute_ville", ambiance: "nuit",
      text: [
        "La chambre est immense, tendue de soie grise devenue couleur de cendre, et il y fait si sombre que la lampe du baron n'en éclaire qu'un îlot. Au milieu de l'îlot, dans un fauteuil à haut dossier, une femme est assise, très droite, en robe blanche, les mains posées sur les accoudoirs. Elle a quarante-cinq ans, peut-être ; elle en paraît vingt, ou cent. Elle est d'une pâleur de cire, avec les mêmes yeux que son frère, et des cheveux noirs, longs, défaits, qui tombent jusqu'au sol.",
        "Elle ne bouge pas quand ils entrent. Elle ne bouge pas quand Victorine prend son poignet. Le pouls est là, à peine, un fil, un battement toutes les trois ou quatre secondes, comme une horloge qu'on a oublié de remonter. La peau est froide. Les pupilles, quand Victorine approche la lampe, ne se ferment pas. Elle est entre les deux, quelque part, au fond d'un puits, et elle attend.",
        "Victorine connaît ce mal. Elle l'a lu, dans des traités que la Faculté ne recommande pas. La catalepsie. Le corps qui fait le mort, l'esprit qui veille dedans, et qui entend tout, parfois, ce qu'on dit autour du lit, et ce qu'on décide. Les traités recommandent de ne jamais parler devant les cataleptiques comme s'ils étaient morts. Les traités recommandent aussi d'attendre, avant de les enterrer, les signes certains. Les traités racontent pourquoi.",
        "Le baron s'est assis dans l'ombre, un peu en retrait. Il a posé sur le guéridon, à côté de la lampe, une feuille de papier timbré et un encrier.",
        "« Un certificat, docteur, dit-il doucement. Que ma sœur est incapable de gérer ses biens. Ses biens sont considérables ; ils dorment ; je les ferais travailler. Pour elle, bien sûr. Pour l'expédition, aussi. Un mot de vous, et le Conseil me nomme curateur demain. »",
      ],
      choices: [{ label: "Attendre qu'elle revienne", to: "YI_reveil" }] },
    YI_reveil: { act: "II", title: "Aurélie", place: "haute_ville", ambiance: "nuit",
      text: [
        "Il faut une heure. Victorine attend, assise près du fauteuil, en tenant le poignet. Le baron finit par sortir, pour fumer, dit-il. Elle reste seule avec la femme immobile, la lampe, et les pendules arrêtées.",
        "Et soudain, le pouls s'accélère sous ses doigts, d'un coup, comme un cheval qu'on éperonne. Aurélie Clavières prend une grande inspiration, une seule, rauque, comme quelqu'un qui remonte du fond de l'eau, et ses yeux se ferment, et se rouvrent, et la regardent.",
        "« Vous êtes le médecin de Varnèse, dit-elle, d'une voix enrouée mais très claire. J'ai tout entendu. Le certificat. » Elle sourit, un peu. « Il a toujours eu besoin de l'argent des autres. Mon père aussi. C'est un trait de famille, comme les yeux. »",
        "Elle se penche vers Victorine, et lui serre le poignet à son tour, avec une force surprenante. « Je ne suis pas folle, docteur. Je suis la seule de la famille qui ait lu les papiers de mon père, jusqu'au bout. Il y a vingt ans. Ce soir-là, je suis tombée pour la première fois. Je crois que mon corps a voulu mourir, et que mon esprit n'a pas voulu le suivre. » Elle ferme les yeux un instant. « Il y a des choses, dans ces papiers, sur une île, sur de l'argent d'église, et sur des gens qu'on a fait taire. Aymeric veut les effacer. Moi, je voudrais qu'on les sache. C'est pour ça qu'il me veut incapable. Une folle ne témoigne pas. »",
      ],
      choices: [
        { label: "Déchirer le papier timbré", fx: { flag: "yi:refus" }, to: "YI_refus" },
        { label: "Signer le certificat : elle est malade, et le baron paie ta dette", fx: { flag: "yi:certificat" }, to: "YI_certificat" },
      ] },
    YI_refus: { act: "II", title: "Le papier timbré", place: "haute_ville", ambiance: "nuit",
      text: [
        "Victorine prend la feuille timbrée sur le guéridon, la déchire en deux, puis en quatre, et pose les morceaux bien en vue, à côté de la lampe, là où le baron les trouvera en rentrant.",
        "Le baron rentre, voit les morceaux, et ne dit rien. Il a l'habitude de ne rien dire quand il perd ; c'est sa seule élégance de joueur. Il la raccompagne jusqu'à la porte de l'aile, et en la refermant derrière elle, avec la clef de sa chaîne de montre, il dit seulement : « Vous êtes une femme incommode, docteur. — Je suis un médecin, monsieur le baron. Les médecins incommodes sont les seuls qui guérissent. »",
      ],
      choices: [{ label: "Laisser des ordres à la vieille servante, avant de partir", to: "YI_consigne" }, { label: "Rentrer au Cormoran", back: "A2v_jours" }] },
    YI_certificat: { act: "II", title: "Le papier timbré", place: "haute_ville", ambiance: "nuit",
      text: [
        "Victorine trempe la plume. Elle écrit ce qui est vrai : *catalepsie, accès fréquents, perte de conscience prolongée*. Elle écrit ce qui est faux : *incapable de gouverner sa personne et ses biens*. Elle signe. L'encre sèche vite, dans l'air froid de la chambre.",
        "Aurélie la regarde faire, sans un mot. Puis elle ferme les yeux, et s'en va, de nouveau, au fond de son puits, d'un coup, comme on se laisse tomber dans l'eau. Le pouls s'éteint presque sous les doigts de Victorine. Elle se demande si c'est la maladie, ou une manière de ne plus la voir.",
        "Le baron rentre, lit le certificat, le plie, le range dans sa poche intérieure. « Merci, docteur. Vous avez fait une bonne action. Je veillerai sur elle mieux que personne. » Il le pense peut-être. Il pense surtout aux biens qui dorment.",
      ],
      choices: [{ label: "Laisser des ordres à la vieille servante, avant de partir", to: "YI_consigne" }, { label: "Rentrer au Cormoran", back: "A2v_jours" }] },
    YI_consigne: { act: "II", title: "La servante", place: "haute_ville", ambiance: "nuit",
      text: [
        "La vieille servante d'Aurélie dort sur une chaise, dans l'antichambre, avec un chapelet entre les doigts. Elle a soixante-dix ans ; elle a élevé Aurélie ; elle s'appelle Perrine ; elle ne sait pas lire. Victorine la réveille, et lui parle lentement, et lui fait répéter, mot pour mot, comme on fait apprendre une prière.",
        "« Quand elle tombera, et qu'on vous dira qu'elle est morte, vous attendrez. Trois jours, au moins. Vous ne laisserez personne la mettre en bière avant que la peau ne change, là, sur le ventre, et que l'odeur ne vienne. Vous direz que c'est l'ordre du médecin. Si on vous presse, vous direz que le médecin reviendra, et qu'il fera pendre celui qui l'aura enterrée vivante. »",
        "Perrine la regarde avec des yeux ronds. Puis elle hoche la tête, et répète, et répète encore, et à la fin elle prend la main de Victorine et l'embrasse. « J'ai toujours eu peur de ça, madame. Toujours. Depuis vingt ans. Personne ne voulait m'écouter. »",
      ],
      choices: [{ label: "Rentrer au Cormoran", fx: { flag: "yi:consigne" }, back: "A2v_jours" }] },
  },
  extras: {
    people: {
      aurelie: { name: "Aurélie Clavières", aka: ["la sœur du baron", "Aurélie"], f: true,
        qui: "La sœur du baron, qui vit depuis vingt ans dans l'aile fermée de l'hôtel Clavières." },
    },
    quests: [
      { id: "YI", act: "II", kind: "annexe", title: "La sœur du baron", start: "YI_aile", doit: "usher", echo: ["yi:refus", "yi:certificat", "yi:consigne"] },
    ],
  },
};
