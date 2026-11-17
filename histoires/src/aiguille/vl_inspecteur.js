// L'Île Folle-Aiguille · side story « L'inspecteur aux lichens » (owes its question to The Government Inspector: may
// one let a lie do the good that the truth could not?). Act III, Brisegrève: on the second morning, the governor
// Lebihan, who fears an inspection from the Amirauté, becomes convinced that Professor Gaudrémont, who wanders the fort
// with a notebook, scraping walls and asking about rations (of seabirds), is an inspector travelling incognito. Lemons
// appear in the infirmary; soldiers get new blankets. Victorine unmasks the mistake (vl:dit), lets it run (vl:laisse),
// or steers the professor's « inspection » toward the cells and the stores (vl:joue). Wired in A3v_brisegreve.
module.exports = {
  passages: {
    VL_matin: { act: "III", title: "L'inspecteur aux lichens", place: "brisegreve", ambiance: "chateau",
      text: [
        "Le deuxième matin, Victorine remonte au fort pour ses malades et trouve Brisegrève méconnaissable. On a blanchi la cour à la chaux pendant la nuit. Les sentinelles ont des guêtres neuves. Dans l'infirmerie, sur chaque grabat, il y a une couverture de laine, raide d'avoir été pliée dix ans dans un magasin, et sur chaque tabouret, un citron vert. Les soldats regardent les citrons comme des reliques. L'un d'eux en mord un avec la peau, en pleurant, parce que ses gencives saignent et qu'il a peur qu'on le lui reprenne.",
        "Elle demande au sergent ce qui se passe. Le sergent baisse la voix. Il y a un inspecteur. Un inspecteur de l'Amirauté, qui voyage incognito, sur la Cormorane, déguisé en savant. Le gouverneur l'a démasqué hier soir. On l'a vu partout, dans le fort, depuis la veille, avec un carnet, à gratter les murs, à fouiller les recoins, à demander combien on donnait à manger aux pensionnaires du rocher, et si on les comptait souvent, et combien en mouraient l'hiver. Le gouverneur n'en a pas dormi.",
        "Victorine va sur le rempart. Le professeur Gaudrémont est là, à quatre pattes, en redingote, une loupe à la main, en train de gratter un lichen orange sur une pierre de la courtine, en marmonnant des mots latins. Il lui explique avec enthousiasme qu'il a recensé hier, sur ce rocher, onze espèces d'oiseaux de mer, dont il a interrogé les gardiens sur le régime, la mortalité hivernale et la fréquence des recensements. Derrière lui, à dix pas, le gouverneur Lebihan, en grand uniforme, attend, chapeau bas, avec un plateau de chocolat chaud, et n'ose pas l'interrompre.",
      ],
      choices: [{ label: "Prendre le chocolat que le gouverneur offre, et réfléchir", to: "VL_quiproquo" }] },
    VL_quiproquo: { act: "III", title: "L'inspecteur aux lichens", place: "brisegreve", ambiance: "chateau",
      text: [
        "Le gouverneur la prend à part, très pâle sous sa poudre. Il sait qu'elle voyage avec *Monsieur l'inspecteur*. Il ne lui demande rien, naturellement. Il voudrait seulement savoir, entre gens d'honneur, si Monsieur l'inspecteur aime le vin, les tabatières, ou autre chose, et s'il a déjà vu les magasins, et s'il a l'intention de voir les magasins, et si, par hasard, il ne serait pas sensible à certaines considérations. Il glisse dans la main de Victorine une tabatière d'argent, pour Monsieur l'inspecteur, de la part d'un admirateur.",
        "Victorine tient la tabatière. Elle pense aux citrons sur les tabourets. Elle pense que, depuis hier soir, par l'effet d'un lichen, une garnison qui pourrissait mange des fruits. Elle pense qu'il suffirait d'un mot pour que le gouverneur reprenne ses couvertures et revende ses citrons aux navires de passage, et que ce mot est la vérité. Elle pense aussi que le professeur, s'il comprenait, serait capable de mourir de honte, ou d'en rire pendant dix ans, et qu'on ne peut jamais prévoir lequel.",
        { if: { has: "vg:sain" }, text: "Et elle pense au lieutenant du bastion, et à son rapport cousu de fil rouge, dans sa sacoche, entre les bistouris." },
        { if: { has: "vg:signe" }, text: "Et elle pense au lieutenant du bastion, et à un certificat qui dort dans la poche intérieure du gouverneur, contre son cœur." },
        "Le professeur, sur le rempart, vient de découvrir un deuxième lichen. Il pousse un cri de joie. Le gouverneur sursaute et renverse son chocolat.",
      ],
      choices: [
        { label: "Dire au gouverneur, gentiment, que Monsieur Gaudrémont étudie les lichens", fx: { flag: "vl:dit" }, to: "VL_dit" },
        { label: "Rendre la tabatière sans un mot, et laisser le malentendu suivre son cours", fx: { flag: "vl:laisse" }, to: "VL_laisse" },
        { label: "Suggérer au professeur qu'il y a, dans les cachots et les magasins, des lichens très rares", fx: { flag: "vl:joue" }, to: "VL_joue" },
      ] },
    VL_dit: { act: "III", title: "L'inspecteur aux lichens", place: "brisegreve", ambiance: "chateau",
      text: [
        "Elle lui rend la tabatière. Elle lui dit, avec toute la douceur dont elle est capable, que Monsieur Gaudrémont est professeur d'histoire naturelle à la Faculté de Morlenc, membre de l'Académie, et qu'il n'inspecte que les lichens et les oiseaux, avec une rigueur, il est vrai, impitoyable. Le gouverneur la regarde. Il ne la croit pas d'abord. Puis il regarde le professeur, à quatre pattes, la loupe à la main, qui parle à une pierre. Il la croit. Il devient rouge. Il éclate de rire, d'un rire énorme, soulagé, qui fait s'envoler les mouettes.",
        "Il rit jusqu'à midi. Il raconte l'histoire à tout le fort. Il en fait un mot, qu'il répétera, dit-il, à la Cour. Les soldats rient avec lui, par devoir. À deux heures, les couvertures de laine retournent au magasin. À quatre, les citrons qui restent sont mis en caisse. Un soldat refuse de rendre le sien. On le met aux arrêts. Victorine le lui rachète, de sa poche, au sergent, deux sous.",
        "Le soir, en remontant à bord, elle croise le professeur sur l'échelle, enchanté de sa journée. Il lui dit que le gouverneur est un homme charmant, qu'il lui a offert du chocolat, et une tabatière, et qu'il ne comprend pas pourquoi, et qu'il l'a refusée, naturellement, un savant n'accepte rien. Victorine se dit qu'elle a dit la vérité à un menteur, et qu'elle a rendu à un voleur la liberté de voler. Elle se dit aussi que c'était la seule chose honnête à faire. Elle ne parvient pas à faire tenir les deux pensées ensemble, et elle renonce, et elle va se coucher.",
      ],
      choices: [{ label: "Regagner la Cormorane", fx: { quest: "VL" }, back: "A3v_brisegreve" }] },
    VL_laisse: { act: "III", title: "L'inspecteur aux lichens", place: "brisegreve", ambiance: "chateau",
      text: [
        "Elle lui rend la tabatière, sans un mot, avec un sourire qui pourrait signifier n'importe quoi. Le gouverneur interprète ce sourire. Il l'interprète toute la journée, de plus en plus mal. À midi, il fait abattre deux moutons pour la garnison. À trois heures, il fait libérer quatre déserteurs dont il avait oublié les noms. À cinq heures, il fait porter à la Cormorane, pour Monsieur l'inspecteur, un tonneau de vin, et pour la capitaine Ribaud, gratuitement, toute l'eau qu'elle voudra, et trois caisses de citrons.",
        "Le professeur ne s'aperçoit de rien. Il passe la journée sur les remparts, avec ses lichens, et chaque fois qu'il se relève, cinq soldats se mettent au garde-à-vous, et il les salue poliment, en pensant que c'est l'usage dans les forts. Le soir, à bord, il goûte le vin du gouverneur et le trouve excellent. Il dit à Victorine que ce Lebihan est un esprit d'une rare distinction, qui s'intéresse vraiment aux sciences, et qu'il le citera dans son mémoire.",
        "La Cormorane appareille le lendemain. Le gouverneur, sur la jetée, en grand uniforme, salue le navire jusqu'à ce qu'il soit hors de vue. Victorine sait ce qui se passera ensuite : l'inspecteur ne viendra jamais, les citrons repartiront aux navires de passage, le gouverneur respirera. Elle sait aussi que, pendant deux jours, à cause d'un lichen, une garnison a mangé du mouton et des fruits, et que quatre hommes sont sortis des cachots. Elle n'a pas menti. Elle a seulement souri. Elle trouve que c'est le sourire le plus utile de sa vie, et le plus malhonnête.",
      ],
      choices: [{ label: "Regagner la Cormorane", fx: { quest: "VL" }, back: "A3v_brisegreve" }] },
    VL_joue: { act: "III", title: "L'inspecteur aux lichens", place: "brisegreve", ambiance: "chateau",
      text: [
        "Elle va trouver le professeur et lui dit, très sérieusement, qu'un soldat lui a parlé de lichens extraordinaires qui poussent dans les endroits les plus humides du fort : les cachots du bastion nord, la cave aux vivres, et surtout le magasin aux citrons, où il paraît qu'on en trouve d'une espèce qui ne vit que sur les caisses de fruits gâtés. Le professeur pâlit d'émotion. Il y court. Le gouverneur, qui le voit se diriger droit vers le magasin aux citrons, manque de s'évanouir.",
        "L'inspection dure tout l'après-midi. Le professeur gratte les murs des cachots, et chaque fois qu'il s'agenouille dans une cellule, le gouverneur, derrière lui, ordonne qu'on libère le prisonnier pour qu'il ne gêne pas Monsieur l'inspecteur. Dans le magasin aux vivres, le professeur s'exclame, devant une pile de caisses de citrons marquées pour la revente, qu'il n'a jamais rien vu de pareil. Le gouverneur jure, livide, que ces caisses étaient destinées à la garnison, et qu'on allait justement les distribuer. On les distribue.",
        { if: { any: [{ has: "vg:sain" }, { has: "vg:parle" }] }, text: "Au bastion nord, le lieutenant Kerdoncuff regarde entrer dans sa cellule un vieux savant à quatre pattes, une loupe à la main, suivi d'un gouverneur en sueur. Il regarde Victorine, derrière eux, sur le seuil. Il comprend tout, en une seconde. Il se met à rire, pour la première fois depuis huit mois, et le gouverneur, terrifié, signe sa levée d'écrou sur le genou du sergent." },
        "Le soir, le professeur remonte à bord, épuisé, ravi, les poches pleines de grattures. Il n'a trouvé aucun lichen rare. Il dit que c'est la journée la plus étrange de sa carrière, que les gens de ce fort sont d'une serviabilité inouïe, et qu'il a l'impression, sans savoir pourquoi, d'avoir fait quelque chose de très important. Victorine lui dit qu'il a parfaitement raison. Elle ne lui dit pas quoi. Elle garde ce mensonge-là pour elle, comme un bonbon, et elle le suce longtemps, avec un plaisir qu'elle trouve un peu honteux.",
      ],
      choices: [{ label: "Regagner la Cormorane", fx: { quest: "VL" }, back: "A3v_brisegreve" }] },
  },
  extras: {
    quests: [
      { id: "VL", act: "III", kind: "annexe", title: "L'inspecteur aux lichens", start: "VL_matin", doit: "revizor", echo: ["vl:dit", "vl:laisse", "vl:joue"] },
    ],
  },
};
