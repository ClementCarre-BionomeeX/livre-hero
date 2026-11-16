// Act I · days two to eleven: the cabinet of the Seal (the hub), the palace (Iselda, Liane, the kitchens, Ansel's
// pharmacy, the water gate) and the city (Arsenal, Salt Lodge, Temple, Canals, Théran embassy, sail market).
module.exports = {
  Q_cabinet: { act: "I", title: "Le cabinet du Sceau", backName: "le cabinet du Sceau", place: "palais", hub: true, routes: true,
    fx: { questSeen: "Q_funerailles" },
    text: [
      { first: true, text: "Le deuxième jour du Deuil se lève sur une ville drapée de noir. On a tendu des crêpes aux balcons, voilé les lanternes des gondoles, décroché ou retourné les enseignes ; le cordonnier d'en face a simplement tourné la sienne vers le mur, ce qui est économique. Sous ta fenêtre, le Grand Canal est presque vide, et ce silence ressemble à une attente." },
      { before: "funerailles:faites", text: "Les funérailles auront lieu le cinquième jour, sur l'Île des Morts. D'ici là, le coffret d'ébène reste sur ta table, et la ville défile devant ta porte." },
      { after: "funerailles:faites", text: "Le prince est sous la pierre, et la ville a ôté les crêpes des balcons. Les enseignes ont repris leur place. On recommence à parler fort sur les quais, et l'on y parle du quarantième jour. Le Conseil se réunira le douzième, pour la première fois depuis les funérailles." },
      { with: "livia", text: "Livia a dressé sur un coin de table la liste de ce qui t'attend, en trois colonnes. Elle la met à jour à chaque heure et raye d'un trait net, à la règle." },
      { with: "joris", text: "Joris a posté deux hommes devant ta porte. Ils ont ordre de laisser entrer tout le monde, et de retenir chaque visiteur à la sortie juste assez longtemps pour qu'il les regarde. Joris appelle cela de la courtoisie." },
    ],
    choices: [
      { label: "Les appartements d'Iselda", to: "Q_iselda" },
      { label: "Les appartements de la princesse Liane", to: "Q_liane" },
      { label: "Les cuisines du palais", to: "Q_cuisines" },
      { label: "La pharmacie de Maître Ansel", to: "Q_pharmacie" },
      { label: "La porte d'eau, où les barques accostent la nuit", to: "Q_portedeau", hide: { clue: "m_amiral" } },
      { label: "L'Arsenal, chez l'amiral", to: "Q_arsenal" },
      { label: "La Loge du Sel, chez Ser Orsanne", to: "Q_loge" },
      { label: "Le Temple des Eaux, chez Mère Ysaure", to: "Q_temple" },
      { label: "Les Canaux, chez le tribun Brisse", to: "Q_canaux" },
      { label: "L'ambassade de Thérance", to: "Q_ambassade" },
      { label: "Le marché aux Voiles, pour t'équiper", to: "Q_voiles" },
      { label: "Faire le point sur la mort du prince", if: { clues: "M", min: 3 }, why: "Tu n'en sais pas encore assez : il te faut trois indices sur la mort du prince.", hide: { quest: "Q_mort" }, to: "Q_point" },
      { label: "Le cinquième jour : conduire les funérailles du prince", big: true, hide: { has: "funerailles:faites" },
        if: { count: [{ seen: "Q_arsenal" }, { seen: "Q_loge" }, { seen: "Q_temple" }, { seen: "Q_canaux" }, { seen: "Q_ambassade" }], min: 2 }, why: "Avant les funérailles, il te faut avoir rencontré au moins deux des Bancs chez eux.", to: "Q_funerailles" },
      { label: "Le douzième jour : présider le Conseil", big: true, exit: true, if: { has: "funerailles:faites" }, why: "Le Conseil ne se réunira qu'après les funérailles.", hide: { not: { has: "funerailles:faites" } }, to: "Q_conseil12" },
    ] },

  // ------------------------------------------------------------------ Iselda
  Q_iselda: { act: "I", title: "La chambre d'Iselda", place: "palais", backName: "la chambre d'Iselda",
    text: [
      { if: { has: "garde:temple" }, text: "La chambre d'Iselda est vide. On l'a conduite au Temple le premier soir, avec ses coquillages et Dame Ortensia. Tu traverses la lagune en barque jusqu'à la coupole verte, vingt minutes de rame par eau calme, et une sœur te mène à une cellule blanche ouverte sur l'eau.",
        else: "Iselda a reconstruit sa forteresse entre le mur et le coffre. Elle y a ajouté une couverture, un coussin et une rangée de soldats de plomb tournés vers la porte ; tu en comptes douze, dont un sans tête." },
      { if: { has: "garde:amiral" }, text: "Deux marins de l'amiral montent la garde devant sa porte. Ils te laissent passer, et l'un d'eux te suit des yeux jusqu'à ce que la porte se referme derrière toi." },
      { first: true, text: "« Tu es revenu », constate Iselda. Elle garde son avis pour elle." },
      { after: "iselda:lagune", text: "Iselda te montre le dernier coquillage de sa collection, celui du banc des Murex. Elle l'a mis au milieu, à la place d'honneur, à côté d'un vide." },
    ],
    choices: [
      { label: "Lui demander ce qu'elle a fait la dernière nuit de son père", hide: { clue: "m_iselda" }, to: "Q_iselda_nuit" },
      { label: "« À quoi est-ce que tu penses ? »", hide: { seen: "Q_iselda_murex" }, to: "Q_iselda_murex" },
      { back: "Q_cabinet" },
    ] },
  Q_iselda_nuit: { act: "I", title: "La dernière nuit", place: "palais",
    fx: { clue: "m_iselda", ep: ["perso", 300] },
    text: [
      "Iselda réfléchit longtemps avant de répondre, en tirant sur son oreille. Puis elle parle d'une traite, comme une élève qui récite une leçon apprise par cœur.",
      "« Papa m'a fait venir, tard. Ortensia m'a portée parce que j'avais pas mes chaussons. Il était dans son lit, il avait les yeux tout brillants. Il m'a donné son coquillage, le gros, le murex, celui qu'il avait trouvé quand il avait mon âge. Il a dit que je devais être gentille avec toi, parce que tu aurais beaucoup de travail. » Elle s'arrête. « Il n'avait pas peur. Maître Ansel pleurait dans le couloir. Les grands, quand ils pleurent, ils vont dans le couloir. »",
      "Elle te regarde. « Toi aussi, tu vas dans le couloir ? »",
    ],
    choices: [
      { label: "« Oui. Souvent. »", fx: { clock: { iselda: 1 } }, back: "Q_iselda" },
      { label: "« Je ne pleure pas. »", back: "Q_iselda" },
    ] },
  Q_iselda_murex: { act: "I", title: "Le banc des Murex", place: "palais",
    fx: { questSeen: "Q_coquillage" },
    text: [
      "« Je pense au murex, dit Iselda. Papa me l'a donné. Mais lui, il n'en a plus. On va le mettre dans une boîte de pierre, et il n'aura rien. » Elle a dit *une boîte de pierre* d'une voix unie, du ton dont on nomme un meuble.",
      "« Il y a un endroit dans la lagune, le banc des Murex, derrière l'Île des Morts. Il m'y emmenait à marée basse, en barque, tôt, avant que les grands soient réveillés. Je veux y aller lui en chercher un. Pour qu'il ait le sien. »",
      "Elle baisse la voix. « Ortensia dit que c'est pas possible. Que l'héritière ne sort pas pendant le Deuil. Que c'est la coutume. Mais c'est toi qui tiens la coutume. Livia me l'a dit. »",
      { with: "livia", text: "Livia, sur le seuil, devient rouge jusqu'aux oreilles." },
    ],
    choices: [
      { label: "« Demain à l'aube. Mais c'est notre secret. »", fx: { flag: "iselda:barque" }, to: "Q_iselda_aube" },
      { label: "« J'enverrai quelqu'un en chercher un pour toi. »", to: "Q_iselda_envoi" },
      { label: "« Ortensia a raison. »", refuse: true, fx: { clock: { iselda: -1 } }, to: "Q_iselda_non" },
    ] },
  Q_iselda_aube: { act: "I", title: "Avant les grands", place: "palais",
    fx: { clock: { iselda: 1 } },
    text: [
      "Iselda hoche la tête, très sérieusement, et elle te tend la main pour sceller l'accord, à la façon des marchands sur le quai.",
      { with: "joris", text: "Dans le couloir, Joris te rattrape. « Une barque, à l'aube, l'héritière, la lagune en deuil, et l'amiral qui cherche un empoisonneur, résume-t-il. J'en prends deux de mes hommes, les plus muets. Et je rame moi-même. »" },
      { without: "joris", text: "Tu prépares la barque toi-même, la veille au soir, au bout de l'embarcadère des cuisines, en secret : deux rames, une gaffe, une couverture, une lanterne sourde." },
      "Le lendemain, une heure avant le jour, vous glissez hors du palais par la porte d'eau.",
    ],
    choices: [{ label: "Prendre la lagune", to: "Q_lagune" }] },
  Q_lagune: { act: "I", title: "Le banc des Murex", place: "palais",
    text: [
      "La lagune est grise et lisse, et l'air sent la vase et le sel. Iselda est assise à l'avant, enveloppée dans ton manteau, le menton dans le col ; le manteau fait trois fois le tour d'elle. Elle indique la direction d'un doigt : à gauche du clocher rose, entre deux pieux noirs, derrière le mur de l'Île des Morts.",
      "Le banc des Murex affleure à marée basse : un long dos de sable et de coquilles, où les oiseaux marchent en laissant des étoiles. Iselda descend pieds nus dans l'eau jusqu'aux chevilles. Elle cherche longtemps, penchée, méthodique, comme son père sur ses cartes. Elle ramasse, examine, rejette ; tu comptes dix rejets. Elle garde le onzième.",
      "Sur le chemin du retour, elle parle enfin.",
      "« Il y a des gens qui disent qu'on a empoisonné papa. C'est vrai ? »",
    ],
    choices: [
      { label: "« Je ne sais pas encore. Je te le dirai quand je saurai. »", fx: { flag: ["iselda:lagune", "iselda:verite"], clock: { iselda: 1 }, quest: "Q_coquillage", ep: ["seance", 1500] }, to: "Q_lagune_retour" },
      { label: "« Non. Il était malade. »", fx: { flag: ["iselda:lagune", "iselda:rassuree"], quest: "Q_coquillage", ep: ["seance", 1500] }, to: "Q_lagune_retour" },
      { label: "« Ce sont des histoires de grands. Ne les écoute pas. »", fx: { flag: "iselda:lagune", quest: "Q_coquillage", ep: ["seance", 1000] }, to: "Q_lagune_retour" },
    ] },
  Q_lagune_retour: { act: "I", title: "Le coquillage", place: "palais",
    fx: { item: "coquillage" },
    text: [
      { after: "iselda:verite", text: "Iselda te regarde très longtemps, puis elle hoche la tête. « D'accord. Tu promets ? » Tu promets. Une fois lui suffit." },
      { after: "iselda:rassuree", text: "« Malade de quoi ? » demande Iselda. Tu cherches une réponse, et elle te voit chercher. Elle s'en tient là." },
      "Quand la barque touche l'embarcadère du palais, elle sort de son manteau le murex de son père, le gros, l'ébréché, et te le met dans la main. « Tu le gardes pour moi. Moi, je mets le nouveau avec papa. Toi, tu le gardes. Toi, tu ne vas pas mourir. »",
      "Elle remonte l'escalier en courant, pieds nus, en laissant des traces mouillées sur la pierre, et disparaît avant que quiconque l'ait vue.",
    ],
    choices: [{ label: "Rentrer au cabinet", back: "Q_cabinet" }] },
  Q_iselda_envoi: { act: "I", title: "Un messager", place: "palais",
    fx: { flag: "iselda:envoi", quest: "Q_coquillage", ep: ["seance", 800] },
    text: [
      "Tu envoies un gamin des Canaux avec deux besants et une description précise. Il revient le soir avec un murex magnifique, intact, plus beau que tous ceux de la collection. À ses ongles noirs de vase, tu vois qu'il l'a cherché lui-même au lieu de l'acheter, et qu'il a gardé les deux besants.",
      "Iselda le prend, le regarde, le remercie poliment. Puis elle le pose sur le coffre, à l'écart des autres, et tu comprends qu'il restera là. Ce qui comptait, c'était d'aller le chercher.",
    ],
    choices: [{ back: "Q_cabinet" }] },
  Q_iselda_non: { act: "I", title: "La coutume", place: "palais",
    text: [
      "« D'accord », dit Iselda. Elle range ses coquillages dans leur boîte, un par un, et referme le couvercle. Elle a l'air de quelqu'un qui avait raison sur les grands.",
    ],
    choices: [{ back: "Q_cabinet" }] },

  // ------------------------------------------------------------------ Liane
  Q_liane: { act: "I", title: "La princesse Liane", place: "palais", backName: "les appartements de la princesse",
    fx: { meet: "liane" },
    text: [
      { first: true, text: "Les appartements de la princesse Liane occupent le bout de l'aile est, la plus ancienne et la plus froide du palais. Tout y parle théran : les tapisseries de chasse, les livres reliés à la mode de Castel, les deux dames de compagnie qui baissent les yeux, et jusqu'à l'odeur de cire d'abeille et de lavande, une odeur de terre ferme." },
      { first: true, text: "La princesse est assise près d'une fenêtre close. Elle a trente-quatre ans, et l'air d'en avoir vécu deux fois plus en dedans. Elle est très belle, d'une beauté que le chagrin a rendue presque transparente. Elle reste assise et t'indique, en face d'elle, un tabouret bas." },
      { again: true, text: "La princesse est toujours à sa fenêtre. Elle te salue d'un signe de tête, comme un visiteur attendu." },
      { if: { has: "garde:mere" }, text: "« Vous m'avez laissé ma fille, dit-elle. Personne ne vous l'avait demandé. Même pas moi. Je ne l'oublierai pas. »" },
      { if: { has: "garde:temple" }, text: "« Vous avez donné ma fille au Temple, dit-elle posément. Vous avez sans doute eu raison. Ici, je ne la protégeais de rien. »" },
      { if: { has: "garde:amiral" }, text: "« Vous avez donné ma fille à la garde de son oncle, dit-elle. » Elle ajoute, après un silence trop long : « C'est bien. C'est très bien. »" },
    ],
    choices: [
      { label: "Lui demander comment était le prince, ces derniers mois", hide: { seen: "Q_liane_prince" }, to: "Q_liane_prince" },
      { label: "Lui demander ce que veut Thérance", hide: { seen: "Q_liane_therance" }, to: "Q_liane_therance" },
      { label: "Lui parler de la visite de l'amiral, la nuit de la mort", if: { clue: "m_amiral" }, hide: { not: { clue: "m_amiral" } }, once: true, to: "Q_liane_amiral" },
      { back: "Q_cabinet" },
    ] },
  Q_liane_prince: { act: "I", title: "Corradin", place: "palais",
    text: [
      "« Il était gentil, dit la princesse. Vous ne pouvez pas savoir ce que ce mot veut dire, pour une femme mariée à quinze ans à un prince qu'elle n'avait jamais vu. Il était gentil, il était drôle, il était toujours ailleurs. Il m'a laissée vivre. »",
      "Elle regarde ses mains. « Ces derniers mois, il était fatigué. Il dormait mal. Il venait parfois s'asseoir là où vous êtes, une heure, en silence, puis il repartait. Je croyais qu'il s'ennuyait. Maintenant je me demande s'il me disait au revoir. »",
    ],
    choices: [{ back: "Q_liane" }] },
  Q_liane_therance: { act: "I", title: "Thérance", place: "palais",
    fx: { fac: { therance: 5 } },
    text: [
      "La princesse sourit, pour la première fois, d'un sourire froid. « Thérance veut un port. Thérance a toujours voulu un port. On m'a envoyée ici à quinze ans pour qu'il y ait un jour, sur le trône de Sarvelle, quelqu'un qui ait du sang théran. Iselda, c'est cela, pour mon frère le roi : une clé. »",
      "« Le comte Mérande est un homme honnête, ajoute-t-elle. Il veut un traité, des droits de quai, des marchands. Ceux que je crains sont à la cour de mon frère : des gens qui préfèrent prendre ce qu'on pourrait négocier. Ceux-là se gardent de m'écrire. »",
    ],
    choices: [{ back: "Q_liane" }] },
  Q_liane_amiral: { act: "I", title: "La porte d'eau", place: "palais",
    fx: { flag: "liane:amiral", fac: { therance: -5 } },
    text: [
      "La princesse se fige. Même ses cils se sont arrêtés.",
      "« Ghislain est venu me dire que son frère allait mal, dit-elle enfin, d'une voix très égale. Il l'avait appris le soir même, par un de ses hommes. Il voulait que je le sache avant tout le monde. Il est resté une heure. Il est reparti. C'est tout. »",
      "Elle se lève, pour la première fois devant toi. « Je suis fatiguée. Vous voudrez bien m'excuser. »",
    ],
    choices: [{ label: "Prendre congé", back: "Q_cabinet" }] },

  // ------------------------------------------------------------------ the water gate
  Q_portedeau: { act: "I", title: "La porte d'eau", place: "palais",
    text: [
      "La porte d'eau est une arche basse sous l'aile est, haute d'une toise à marée haute ; les barques y entrent dans le palais sans passer par la cour d'honneur. L'eau y est noire en plein midi, la voûte verdit jusqu'à la clef, et chaque coup de rame y éveille un écho lent à mourir. On s'en sert pour les livraisons, pour les médecins, et pour les visites qu'on préfère taire.",
      "Le portier s'appelle Gaspard. Il a soixante ans, une jambe raide, et un registre aux pages blanches : ceux qui passent par la porte d'eau paient pour y rester invisibles.",
    ],
    choices: [
      { label: "Lui demander qui est passé la nuit de la mort", test: { dom: "social", label: "Social", help: [{ with: "joris", v: 15 }] },
        win: { fx: { clue: "m_amiral", ep: ["perso", 400] }, to: "Q_portedeau_dit" }, lose: { to: "Q_portedeau_muet" } },
      { label: "Lui glisser deux besants", fx: { gold: -24, clue: "m_amiral", clock: { emprise: 1 } }, to: "Q_portedeau_dit" },
      { back: "Q_cabinet" },
    ] },
  Q_portedeau_dit: { act: "I", title: "Ce que Gaspard a vu", place: "palais",
    text: [
      "Gaspard parle à l'eau. « L'amiral, dit-il. À la onzième heure. Une barque de l'Arsenal, quatre rameurs, tous feux éteints. Il a laissé l'escalier de son frère et pris celui de l'aile est. »",
      "Il crache dans le canal. « Il fait ça depuis dix ans, une fois par lune, à peu près. Moi, je regarde ailleurs. Je suis portier. »",
      { with: "joris", text: "Joris serre la mâchoire et regarde l'eau à son tour." },
    ],
    choices: [{ back: "Q_cabinet" }] },
  Q_portedeau_muet: { act: "I", title: "Un portier", place: "palais",
    text: [
      "Gaspard t'écoute poliment. Puis il t'explique qu'il dormait, qu'il dort toujours, qu'on l'a mis là pour cette raison précise, et que le Sceau, s'il veut un portier éveillé, n'a qu'à en nommer un autre. Il garde les yeux sur l'eau tout du long.",
    ],
    choices: [{ back: "Q_cabinet" }] },

  // ------------------------------------------------------------------ Ansel's pharmacy
  Q_pharmacie: { act: "I", title: "La pharmacie", place: "palais", backName: "la pharmacie d'Ansel", shop: "ansel",
    text: [
      "La pharmacie du palais est une longue pièce voûtée qui sent l'alcool, la camomille et la poussière. Sur les étagères, jusqu'au plafond, tu estimes à quatre cents les pots de faïence alignés, chacun étiqueté de la petite écriture penchée d'Ansel. Au fond, sur un lutrin, un gros registre ouvert : chaque once de chaque remède qui sort d'ici y est notée.",
      { with: "ansel", text: "Ansel s'affaire entre les pots et déplace des pots déjà rangés. Il te propose un cordial pour dormir. Depuis deux jours, il en propose à tout le monde." },
    ],
    choices: [
      { label: "Lire le registre pendant qu'Ansel prépare un remède", hide: { clue: "m_registre" }, test: { dom: "discretion", label: "Discrétion", help: [{ with: "livia", v: 15 }] },
        win: { fx: { clue: "m_registre", ep: ["perso", 500] }, to: "Q_pharma_registre" }, lose: { fx: { conf: { ansel: -5 } }, to: "Q_pharma_vu" } },
      { label: "Demander à Ansel la permission de consulter son registre", hide: { clue: "m_registre" }, to: "Q_pharma_demande" },
      { back: "Q_cabinet" },
    ] },
  Q_pharma_registre: { act: "I", title: "Le registre", place: "palais",
    text: [
      "Tu tournes les pages vers l'arrière. Des onces de camomille, de rhubarbe, d'écorce de saule. Des pilules pour la toux de Dame Ortensia ; de l'onguent pour les mains des lavandières. Chaque sortie est notée, datée, motivée : *pour la toux*, *pour les engelures*, *pour le prince, son sommeil*.",
      "Trois jours avant la mort, une ligne nue. *Pavot, une once. Ciguë, un flacon.* La date. Les initiales A. C.",
      "Tu refermes le registre au moment où Ansel se retourne avec sa fiole. Il te sourit. Il a de très bonnes mains, des mains sûres de chirurgien.",
    ],
    choices: [{ back: "Q_pharmacie" }] },
  Q_pharma_vu: { act: "I", title: "Surpris", place: "palais",
    text: [
      "Tu as à peine tourné trois pages qu'Ansel est derrière toi. Il referme doucement le registre, lisse la couverture, et le remet bien droit sur le lutrin.",
      "« Si vous voulez le lire, dit-il, demandez-le-moi. Vous l'aurez. Mais demandez-le. »",
    ],
    choices: [{ back: "Q_pharmacie" }] },
  Q_pharma_demande: { act: "I", title: "La permission", place: "palais",
    fx: { conf: { ansel: 5 } },
    text: [
      "Ansel prend son temps. Il pose sa fiole, s'essuie les mains, et va lui-même chercher le registre. Il le pose devant toi, ouvert à la bonne page, d'un seul geste, comme s'il savait depuis le début laquelle tu voulais.",
      "« Voilà, dit-il. Je vous laisse. » Il sort. Tu l'entends s'asseoir sur le banc du couloir, qui grince sous lui.",
    ],
    choices: [{ label: "Lire", fx: { clue: "m_registre", ep: ["perso", 300] }, to: "Q_pharma_registre" }] },

  // ------------------------------------------------------------------ the market
  Q_voiles: { act: "I", title: "Le marché aux Voiles", place: "canaux", shop: "voiles",
    text: [
      "Le marché aux Voiles se tient sous les arcades de la vieille corderie, au bord des Canaux : des toiles, des cordages, des lanternes, et au fond, chez un armurier de Corne, de quoi se défendre. Le marchand te reconnaît, s'incline un pouce trop bas, et double ses prix d'un regard.",
      { with: "joris", text: "Joris lui rend son regard, et les prix redescendent." },
    ],
    choices: [{ back: "Q_cabinet" }] },
};
