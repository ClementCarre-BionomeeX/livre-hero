// L'Île Folle-Aiguille · side story « Le portrait d'Hector » (owes its question to The Picture of Dorian Gray: does a
// painted face keep what the living have done, and whose sins does it carry?). The doctor took her husband's portrait
// aboard, face to the bottom of her trunk. At sea she takes it out (yh:vu, and hangs it: yh:accroche); in the calms the
// varnish cracks across the mouth (yh:repare, or not); in the besieged chapel she speaks to it at night; on the last
// morning she gives it to the sea (yh:mer), leaves it to the chapel (yh:chapelle), or takes it home (yh:garde).
// Wired in A3v_jours, A3w_jours, A4w_jours and A5x_debut.
module.exports = {
  passages: {
    YH_malle: { act: "III", title: "Le portrait", place: "cormorane", ambiance: "nuit",
      text: [
        "La première nuit de vraie mer, quand la Cormorane roule assez pour faire glisser les malles, Victorine entend la sienne cogner contre la cloison de sa cabine, régulièrement, à chaque lame, avec un bruit sourd, comme quelqu'un qui frappe pour qu'on lui ouvre. Elle se lève pour la caler. Elle l'ouvre, sans savoir pourquoi, et elle sort du fond, sous les deux robes grises, le portrait d'Hector.",
        "Elle l'appuie contre la cloison, sous le fanal. Hector sourit, de ses belles dents, de ses beaux yeux, une main sur un livre qu'il n'a jamais lu. Le fanal se balance ; la lumière passe et repasse sur la toile ; et dans ce va-et-vient, le sourire paraît changer d'un instant à l'autre, se creuser, se détendre, comme si le peintre avait fait un visage vivant et que ce visage hésitait encore sur l'expression à prendre.",
        "Victorine le regarde longtemps. Elle trouve, à la fin, que le sourire n'est plus tout à fait le même qu'à Varnèse. Moins beau. Plus vrai, peut-être. Elle met cela sur le compte du fanal, de l'air salé sur le vernis, et de la fatigue. Elle est médecin. Elle connaît les trois.",
      ],
      choices: [
        { label: "L'accrocher au clou de la cloison, face à la couchette", fx: { flag: ["yh:vu", "yh:accroche"] }, to: "YH_malle_fin" },
        { label: "Le remettre au fond de la malle, face contre le bois", fx: { flag: "yh:vu" }, to: "YH_malle_fin" },
      ] },
    YH_malle_fin: { act: "III", title: "Le portrait", place: "cormorane", ambiance: "nuit",
      text: [
        { if: { has: "yh:accroche" }, text: "Il est là, maintenant, au-dessus de la petite table, en face d'elle quand elle se couche, en face d'elle quand elle se lève. Elle se dit qu'elle s'y habituera. On s'habitue à tout, à bord, sauf au silence ; et Hector, au moins, a l'air de dire quelque chose." },
        { if: { not: { has: "yh:accroche" } }, text: "Elle le remet au fond, sous les robes, et referme le couvercle. La malle cesse de cogner. Elle se recouche. Elle a le sentiment très net, absurde, qu'on a cessé de frapper parce qu'on a obtenu ce qu'on voulait." },
      ],
      choices: [{ label: "Dormir", back: "A3v_jours" }] },

    YH_fissure: { act: "III", title: "La fissure", place: "sargues", ambiance: "mer",
      text: [
        "Dans les calmes, la chaleur entre partout, et le portrait, qu'il soit accroché ou dans la malle, n'y échappe pas. Un matin, Victorine trouve le vernis craquelé, en fines écailles, comme une peau de lézard. Et à travers la bouche d'Hector, d'un coin à l'autre, une longue fissure, nette, qui lui fait une cicatrice au milieu du sourire.",
        "Elle la regarde de près, à la loupe, comme elle regarderait une plaie. La fissure suit la ligne des lèvres. Elle n'abîme rien d'autre. Le sourire est toujours là. Simplement, maintenant, il a quelque chose de cousu.",
        { if: { has: "victorine:sabine" }, text: "Elle pense, sans le vouloir, à trois papiers de poudre pliés pour une dame voilée." },
        { if: { has: "yc:billet_garde" }, text: "Elle pense, sans le vouloir, à une feuille d'une autre couleur, pliée en quatre au fond de sa trousse." },
        { if: { has: "victorine:laudanum_hector" }, text: "Elle pense, sans le vouloir, à une fiole aux deux tiers pleine, avec la moitié d'une étiquette." },
        "Elle se dit que les portraits ne savent rien. Que c'est la chaleur. Elle se le dit deux fois, ce qui est une fois de trop pour une femme de science.",
      ],
      choices: [
        { label: "Réparer la fissure au blanc d'œuf, comme on fait aux vieux tableaux", fx: { flag: "yh:repare" }, to: "YH_fissure_fin" },
        { label: "La laisser comme elle est", to: "YH_fissure_fin" },
      ] },
    YH_fissure_fin: { act: "III", title: "La fissure", place: "sargues", ambiance: "mer",
      text: [
        { if: { has: "yh:repare" }, text: "Elle demande un œuf au maître-coq, qui le lui donne sans poser de question, ce qui est en soi une question. Elle passe le blanc au pinceau, couche par couche, sur la bouche d'Hector, comme on panse une lèvre fendue. La fissure disparaît presque. On la voit encore, de biais, à la lumière rasante. Il faut savoir qu'elle est là." },
        { if: { not: { has: "yh:repare" } }, text: "Elle laisse la fissure. Hector sourit avec sa cicatrice. Elle trouve, au bout de quelques jours, que cela lui va mieux. Il a l'air d'un homme à qui il est arrivé quelque chose, ce qui n'a jamais été le cas de son vivant." },
      ],
      choices: [{ label: "Retourner aux malades", back: "A3w_jours" }] },

    YH_nuit: { act: "IV", title: "Hector", place: "misericorde", ambiance: "nuit",
      text: [
        "Elle a sauvé le portrait de la Cormorane, au milieu de la débâcle, en même temps que la trousse. Elle ne sait pas pourquoi ; elle a laissé ses robes. Il est posé dans la sacristie, contre le mur, entre deux paillasses de blessés, et la nuit, quand les blessés dorment, elle s'assied en face de lui, sur le coffre aux chasubles, une chandelle à la main.",
        "L'humidité de l'île a fait son œuvre. Une moisissure verte a gagné le fond, derrière Hector, et monte doucement vers le col de sa redingote. Le livre qu'il n'a jamais lu est devenu une tache. Mais le visage, lui, est intact, sans une piqûre, sans une ombre, comme si la moisissure n'osait pas.",
        "« Tu vois, lui dit Victorine, très bas. Je suis dans une église en ruine, sur une île qui n'existe sur aucune carte, avec des blessés, un baron, une capitaine et des mutins derrière le mur. On a une source et un peu de poudre. On mourra peut-être demain. » Elle le regarde. « Je n'ai jamais été aussi heureuse de ma vie. Pas une fois, avec toi. Pas une fois. »",
        "Hector sourit, dans la lumière de la chandelle qui tremble. Pour la première fois, elle a l'impression qu'il sourit à elle, et non à tout le monde. Elle ne sait pas si c'est un pardon, ou une moquerie. Avec lui, ç'a toujours été la même chose.",
      ],
      choices: [{ label: "Souffler la chandelle", back: "A4w_jours" }] },

    YH_matin: { act: "V", title: "Le portrait", place: "misericorde", ambiance: "temple",
      text: [
        "Le dernier matin, il faut décider de ce qu'on emporte. On n'emporte pas grand-chose : de l'eau, des vivres, des blessés. Victorine regarde le portrait d'Hector, contre le mur de la sacristie, avec sa cicatrice ou son blanc d'œuf, sa moisissure verte, son livre devenu tache, et son visage intact.",
        "Il pèse quatre livres, avec le cadre. Quatre livres, c'est une gourde d'eau.",
      ],
      choices: [
        { label: "Le porter à la pointe de l'éperon, et le rendre à la mer", to: "YH_mer" },
        { label: "Le laisser accroché dans la chapelle, au-dessus de l'autel vide", to: "YH_chapelle" },
        { label: "L'emporter, avec la trousse, sous le bras", to: "YH_garde" },
      ] },
    YH_mer: { act: "V", title: "Le portrait", place: "misericorde", ambiance: "mer",
      text: [
        "Elle descend jusqu'à la pointe de l'éperon, où la roche tombe à pic dans une eau d'un bleu si profond qu'il en est noir. Elle tient le portrait à deux mains, face à elle, une dernière fois.",
        "« Tu aimais les paris, Hector. Je te parie que tu flottes. »",
        "Elle le lance. Il tourne en l'air, une fois, deux fois, montrant tour à tour le visage et le dos de la toile, comme une pièce qu'on joue à pile ou face, et il tombe à plat sur l'eau, face en haut. Et il flotte. Il flotte longtemps, s'éloignant lentement vers le large, Hector souriant au ciel, jusqu'à n'être plus qu'un petit rectangle doré qui accroche le soleil, puis rien.",
        "Victorine a gagné son pari. Elle s'aperçoit qu'elle rit. Elle remonte vers la chapelle les mains vides, plus légère de quatre livres et de quinze ans.",
      ],
      choices: [{ label: "Remonter", fx: { quest: "YH", flag: "yh:mer" }, back: "A5x_debut" }] },
    YH_chapelle: { act: "V", title: "Le portrait", place: "misericorde", ambiance: "temple",
      text: [
        "Elle le cloue elle-même, avec un clou de la Cormorane et une pierre, au-dessus de l'autel vide de la Miséricorde, là où devait se trouver jadis un tableau de la Vierge ou d'un saint. Hector sourit à la nef ruinée, aux paillasses, à l'arbre qui a percé le toit.",
        "« Voilà, dit-elle. Tu voulais qu'on te regarde. On te regardera. Les oiseaux, les Doux, les crabes, et peut-être, un jour, un autre navire. Ils se demanderont quel saint tu étais. Tu n'auras qu'à sourire. Tu sais faire. »",
        "En sortant, elle se retourne une fois. Dans la lumière verte qui tombe du vitrail crevé, le portrait a l'air d'une icône. Elle se dit qu'il n'a jamais été aussi bien placé de sa vie.",
      ],
      choices: [{ label: "Sortir de la chapelle", fx: { quest: "YH", flag: "yh:chapelle" }, back: "A5x_debut" }] },
    YH_garde: { act: "V", title: "Le portrait", place: "misericorde", ambiance: "temple",
      text: [
        "Elle le prend sous le bras, avec la trousse. Quatre livres. Elle boira un peu moins.",
        "Elle ne saurait pas dire pourquoi. Ce n'est pas de l'amour ; elle en est à peu près sûre. C'est autre chose, quelque chose qu'on éprouve pour une cicatrice : on ne l'aime pas, mais elle fait partie de la peau, et on ne s'imagine pas sans elle.",
        "La capitaine la voit passer avec son tableau sous le bras et lève un sourcil. « Un saint de la colonie, docteur ? — Non, capitaine. Un pécheur de Morlenc. — Ils pèsent le même poids. — Celui-ci pèse un peu plus. »",
      ],
      choices: [{ label: "Le porter jusqu'à l'anse", fx: { quest: "YH", flag: "yh:garde" }, back: "A5x_debut" }] },
  },
  extras: {
    quests: [
      { id: "YH", act: "III", kind: "annexe", title: "Le portrait d'Hector", start: "YH_malle", doit: "doriangray", echo: ["yh:mer", "yh:chapelle", "yh:garde"] },
    ],
  },
};
