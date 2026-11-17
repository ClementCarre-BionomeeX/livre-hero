// Les Trois Clefs d'Aiguemorne · act V, the last quarter of an hour. The Clavaires climb with twelve russet coats.
// Each post holds its own quarter (parallel): the hand holds the trapdoor of the landing (monde:a5:q_main), the eye
// goes out on the hoarding, signals the town and frees the hinges of the dial (monde:a5:q_oeil), the voice parleys
// through the grating of the old soldier's box (monde:a5:q_voix). All come back to the grille: A5c_grille (hinge).
// Personal marks: a5:q_barre, a5:q_signal, a5:q_dit_prix, a5:q_dit_clefs, a5:q_dit_charte.
module.exports = {
  passages: {
    // ───────────────────────────── The hand: the trapdoor ─────────────────────────────
    A5m_q1: { act: "V", title: "Le palier", place: "horloge_close", ambiance: "nuit",
      text: [
        "Tu repasses le chêne en courant. Maître Crochemore te suit, sa robe relevée à deux mains, du trot d'un homme qui a décidé à soixante-huit ans de courir une fois.",
        "Le palier est tel que tu l'as laissé : la guérite, la table, la lanterne de corne, et dans le plancher ce carré noir par où monte l'échelle de meunier. Dessous, c'est la salle des Poids, avec ses tambours et son balancier. Plus bas encore, la vis, et dans la vis un bruit de ferraille qui grandit.",
        { if: { has: "monde:a5:hilaire" }, text: "Le vieux soldat est debout près du trou, sa trompe pendue au cou, sa hallebarde au poing. Il te salue. « Douze, dit-il, plus les trois messieurs, plus un capitaine. J'ai compté les fers à la résonance. De mon temps, on en envoyait vingt pour une porte ; la ville s'appauvrit. »" },
        { if: { has: "monde:a5:hilaire_lie" }, text: "Dans la guérite, le vieux soldat est assis sur son banc, les poignets liés, son bonnet de travers. Il regarde le trou du plancher avec l'intérêt d'un connaisseur que l'on a privé du spectacle." },
        "La trappe est un panneau de chêne ferré, rabattu contre le mur, que personne n'a fermé depuis que le vieux Balancier montait ici chaque matin. Elle pèse ce que pèse une porte de cave.",
        "Tu as le temps d'une chose.",
      ],
      choices: [
        { label: "Tirer l'échelle à toi, rabattre la trappe et passer la barre", if: { has: "monde:a5:trappe" }, hide: { not: { has: "monde:a5:trappe" } }, fx: { flag: "a5:q_barre" }, to: "A5m_q_barre", big: true },
        { label: "Rabattre la trappe et t'asseoir dessus", to: "A5m_q_assis" },
        { label: "Descendre d'abord chercher le petit homme au tablier vert", if: { has: "monde:a5:soufflot=allie" }, hide: { not: { has: "monde:a5:soufflot=allie" } }, to: "A5m_q_soufflot", once: true },
      ] },

    A5m_q_soufflot: { act: "V", title: "Le facteur de serinettes", place: "horloge_close", ambiance: "nuit",
      text: [
        "Tu dégringoles l'échelle. Il est où vous l'avez laissé, assis par terre contre son meuble de chêne, les genoux au menton, avec la mine d'un père que l'on aurait prié d'attendre dans le couloir.",
        "« Maître Soufflot. En haut. Tout de suite. »",
        "Il se lève. Il regarde son meuble, les tuyaux, la soupape, la tirette à boule d'ivoire. Il y a là quatorze mois de sa vie et le plus bel ouvrage qu'il ait signé.",
        "« Si je monte, ils tireront sans moi.",
        "— Ils tireront.",
        "— Il faut tirer d'un coup franc, sans à-coup, ou la soupape bat. » Il hésite. Puis il dévisse la boule d'ivoire, d'un tour de poignet, et la met dans la poche de son tablier. « Ils tireront donc sur une tringle nue, avec des gants de velours. Je leur souhaite du plaisir. »",
        "Il monte devant toi, lestement, en homme qui a passé sa vie à grimper dans des buffets. En haut, il s'assied sur le banc de la guérite, sa boule d'ivoire entre les mains, et il n'en bouge plus.",
      ],
      choices: [
        { label: "Tirer l'échelle à toi, rabattre la trappe et passer la barre", if: { has: "monde:a5:trappe" }, hide: { not: { has: "monde:a5:trappe" } }, fx: { flag: "a5:q_barre" }, to: "A5m_q_barre", big: true },
        { label: "Rabattre la trappe et t'asseoir dessus", to: "A5m_q_assis" },
      ] },

    A5m_q_barre: { act: "V", title: "Une échelle de meunier", place: "horloge_close", ambiance: "nuit",
      text: [
        "Tu l'avais remarqué cet après-midi : l'échelle tient par deux crochets à deux pitons, et rien d'autre. Tu décroches. Elle vient, longue de quatre toises, lourde comme un mât ; Maître Crochemore prend le haut, tu prends les montants, et vous la halez sur le palier, barreau par barreau, où elle se couche le long du mur.",
        "La trappe, ensuite. Elle tombe dans sa feuillure avec un bruit de couvercle. La barre est sous la table, où tu l'avais vue : un madrier de frêne, poli par des mains mortes depuis longtemps, qui se glisse dans deux étriers de fer.",
        "C'est fait. Entre la salle des Poids et vous, il y a maintenant quatre toises de vide, trois pouces de chêne et une barre. Maître Crochemore s'essuie le front avec sa manche.",
        "« Mon aïeul avait mis cette échelle sur crochets, dit-il. On s'est demandé pourquoi pendant trois générations. Je crois qu'il a eu, une fois dans sa vie, une pensée pour les gens d'en haut. »",
        "En bas, les bottes entrent dans la salle des Poids.",
      ],
      choices: [{ label: "Écouter", to: "A5m_q2", big: true }] },

    A5m_q_assis: { act: "V", title: "Trois pouces de chêne", place: "horloge_close", ambiance: "nuit",
      text: [
        "Tu empoignes l'anneau et tu rabats. La trappe tombe dans sa feuillure avec un bruit de couvercle ; l'échelle est restée dessous, debout, offerte à qui voudra.",
        "Tu cherches un verrou. Il y a deux étriers de fer, vides, de part et d'autre du panneau, et la barre qui devait y aller se trouve quelque part où tu n'as pas regardé. Tu t'assieds donc sur le chêne, de tout ton poids, les talons calés contre une solive.",
        "Maître Crochemore te considère. Puis il relève sa robe, et il s'assied à côté de toi, dignement, comme il s'assiérait au banc des Maîtres.",
        "« Cent trente livres, dit-il, que j'ajoute aux vôtres. J'ai toujours dit qu'un horloger devait peser dans sa ville. »",
        "En bas, les bottes entrent dans la salle des Poids.",
      ],
      choices: [{ label: "Écouter", to: "A5m_q2", big: true }] },

    A5m_q2: { act: "V", title: "Le capitaine Escarbille", place: "horloge_close", ambiance: "nuit",
      text: [
        "Le plancher du palier a des fentes. Tu y colles l'œil.",
        "La salle des Poids s'est remplie de torches. Douze casaques rousses s'y rangent en demi-cercle, la hallebarde au pied, soufflant comme des forges : ils ont monté cent quatre-vingts marches en cuirasse. Derrière eux, trois hommes s'adossent où ils peuvent. Un velours prune s'évente avec son chapeau. Une soutane violette respire un sachet. Un pourpoint cramoisi a posé un pied sur l'établi du Remonteur et regarde tourner les tambours, comme on regarde un jeu dont on a oublié la règle.",
        { if: { has: "a5:q_barre" }, text: "Un homme long, jaune, botté jusqu'aux cuisses, lève sa torche vers le plafond en mâchant sa moustache. Il voit le carré de chêne, à quatre toises au-dessus de sa tête, et sous ce carré, rien.", else: "Un homme long, jaune, botté jusqu'aux cuisses, lève sa torche vers le plafond en mâchant sa moustache. Il voit l'échelle, et au bout de l'échelle le carré de chêne, fermé." },
        "« Capitaine Escarbille, de la compagnie de Ferrières, dit-il vers le haut, de cette voix grave et posée qu'il a pour jurer. Au nom des trois Clavaires de la cité, ouvrez cette trappe. »",
        "Maître Crochemore te regarde. Il a l'air de trouver que l'on vous doit une réponse, et qu'il te la laisse.",
      ],
      choices: [
        { label: "« Au nom de l'article onze, capitaine : elle est en réparation. »", to: "A5m_q_parole" },
        { label: "Te taire, et garder ton souffle pour la suite", to: "A5m_q3" },
      ] },

    A5m_q_parole: { act: "V", title: "L'article onze", place: "horloge_close", ambiance: "nuit",
      text: [
        "Tu le dis par la fente, posément, du ton que Maître Crochemore a pris ce matin devant la grande porte.",
        "Il y a un silence en bas. Le capitaine Escarbille est de ces militaires qui respectent un numéro d'article comme ils respecteraient un grade.",
        "« L'article onze de quoi ?",
        "— Des statuts de la Tour, répond Maître Crochemore à côté de toi, d'une voix qui porte. *Les descendants du facteur auront en tout temps accès à l'ouvrage pour l'entretenir, et nul ne les en distraira pendant qu'ils y travaillent.* Je suis Zéphyrin Crochemore, quatrième du nom. Je travaille. Vous me distrayez. »",
        "Le capitaine se tourne vers le velours prune. On entend la voix cordiale du Syndic, un peu courte de souffle : « Il a raison sur le texte, capitaine. Montez tout de même. »",
        "« Voilà, dit Maître Crochemore plus bas, en remettant ses bésicles. Cela ne les arrête pas. Cela les met dans leur tort, par écrit, depuis cent cinq ans. On a les plaisirs que l'on peut. »",
      ],
      choices: [{ label: "Te caler", to: "A5m_q3", big: true }] },

    A5m_q3: { act: "V", title: "Tenir", place: "horloge_close", ambiance: "nuit",
      text: [
        { if: { has: "a5:q_barre" }, text: "Ils font la courte échelle. C'est une chose à voir par une fente : trois hommes en cuirasse qui en hissent un quatrième sur leurs épaules, lequel en hisse un cinquième, et tout cet édifice roux qui oscille sous un plafond de quatre toises en jurant dans le patois des mines. Le cinquième atteint la trappe du bout de sa hallebarde. Il cogne.", else: "Ils montent l'échelle à deux de front, autant qu'une échelle de meunier le permet. Le premier arrive sous la trappe. Il y met l'épaule. Le chêne se soulève d'un pouce sous toi, et retombe." },
        "Chaque coup te passe dans les reins. La poussière de cent ans sort des joints et te vient à la figure.",
        { if: { has: "monde:a5:hilaire" }, text: "Le vieux soldat a planté sa jambe de bois sur le panneau, à côté de ta main. « Laissez-les s'user, dit-il. Un homme qui pousse au-dessus de sa tête ne pousse pas longtemps. C'est l'épaule qui lâche d'abord, et la conviction ensuite. »" },
        "Il s'agit de durer. Rien d'autre. Il y a une femme derrière une grille qui a demandé un quart d'heure, et deux amis qui le gagnent ailleurs, chacun de son côté.",
      ],
      choices: [
        { label: "Peser, pousser, tenir",
          test: { dom: "combat", diff: 15, label: "Tenir une trappe contre douze hommes", help: [{ if: { has: "a5:q_barre" }, v: 25 }, { if: { has: "monde:a5:hilaire" }, v: 10 }, { if: { has: "monde:a5:soufflot=allie" }, v: 5 }, { if: { voie: "bretteur" }, v: 5 }, { if: { voie: "coureur" }, v: 5 }] },
          win: { fx: { set: { "monde:a5:q_main": "tenu" } }, to: "A5m_q_tenu" }, lose: { fx: { pv: -6 }, to: "A5m_q_force" }, big: true },
      ] },

    A5m_q_tenu: { act: "V", title: "La trappe a tenu", place: "horloge_close", ambiance: "nuit",
      fx: { ep: ["perso", 1500] },
      text: [
        "Cela dure le temps de compter jusqu'à trois cents. Tu le sais, parce que Maître Crochemore compte, à mi-voix, par habitude de métier.",
        "À deux cent quatre-vingts, il y a en bas un grand bruit de ferraille, plusieurs jurons, et la voix du capitaine Escarbille qui ordonne de relever quelqu'un. Les coups cessent.",
        "Tu remets l'œil à la fente. Les casaques rousses se sont assises sur les caisses du Remonteur, la cuirasse dégrafée. Le capitaine parle bas au velours prune, qui consulte une montre, puis le plafond, puis sa montre.",
        { if: { has: "monde:a5:quart" }, text: "« Il regarde l'heure de la cloche, souffle Maître Crochemore, et la cloche lui donne un quart d'heure qu'il n'a pas. Il croit pouvoir attendre. C'est le plus bel usage que l'on ait fait d'un de mes réglages. »" },
        "Tes mains tremblent. Tu les regardes trembler avec une espèce d'estime.",
        "« Allez, dit Maître Crochemore. Je garde le panneau. S'ils recommencent, je leur lirai les articles douze à quarante. »",
      ],
      choices: [{ label: "Retourner à la Chambre", to: "A5m_q_socle", big: true }] },

    A5m_q_force: { act: "V", title: "La trappe a cédé", place: "horloge_close", ambiance: "nuit",
      text: [
        { if: { has: "a5:q_barre" }, text: "La barre tient. Ce sont les étriers qui partent : deux pattes de fer scellées dans un chêne de cent ans, qui s'arrachent l'une après l'autre avec un cri de clou. Le panneau saute.", else: "Au sixième coup, le panneau te jette sur le côté. Une hallebarde passe par l'ouverture, cherche, accroche ta manche et l'épaule dessous." },
        "Maître Crochemore te tire en arrière par le col, avec une force que tu ne lui connaissais pas. Vous reculez vers le chêne, à reculons, pendant qu'un casque monte dans le carré du plancher, puis des épaules rousses.",
        { if: { has: "monde:a5:hilaire" }, text: "Le vieux soldat s'est mis en travers du palier, sa hallebarde basse, sa jambe de bois bien d'aplomb. « Vingt ans que je garde cette porte contre personne, dit-il sans se retourner. Laissez-moi la garder une fois contre quelqu'un. » On entendra longtemps, derrière vous, le dialogue de deux hallebardes dont l'une a soixante-dix ans." },
        "Vous passez le seuil. Vous poussez, à deux, cette masse équilibrée qui revient dans son cadre comme un livre que l'on ferme. Il n'y a de verrou que du dehors. Maître Crochemore ôte sa ceinture, la passe dans l'anneau du battant et la noue au pied d'un chandelier de fer scellé dans le mur.",
        "« Cela vaut ce que cela vaut, dit-il. Mettons deux minutes de plus. On a jugé des siècles sur moins que cela. »",
        "Ton épaule saigne dans ta chemise.",
      ],
      choices: [{ label: "Revenir vers le socle", to: "A5m_q_socle", big: true }] },

    A5m_q_socle: { act: "V", title: "Le pan du marteau", place: "horloge_close", ambiance: "temple",
      text: [
        "La Chambre t'a paru plus grande que tout à l'heure. Il y fait toujours ce froid immobile ; la petite lampe brûle toujours dans la poitrine du Bronze.",
        "Tu fais le tour du socle. Il a trois pans, comme elle l'a dit, tournés vers trois murs, et chacun porte en son milieu une rosace de bronze grande comme une assiette. Sur celle qui regarde la porte, il y a un marteau.",
        "Tu t'agenouilles. Au cœur de la rosace s'ouvre une entrée de clef, étroite, haute, bordée d'un filet poli par l'usage. Tu y passes le doigt : le vert-de-gris s'arrête à une ligne du bord. Quelqu'un a nettoyé cette entrée de l'intérieur, avec une plume, pendant des années, pour le jour où l'on viendrait.",
        "C'est ta place. De là, tu vois le chêne de la porte, les genoux énormes du Juge au-dessus de toi, et un mur. Les deux autres pans te sont cachés par l'angle du bronze. Celui qui a dessiné ce socle voulait trois hommes qui tournent ensemble et qui ne se surveillent pas.",
        { if: { has: "monde:a5:fer_double" }, text: "Tu sors la clef de Fer de son chiffon gris. C'est la vraie, celle que le Syndic a portée dix ans contre sa chemise. La sienne, ce soir, est en plomb doré." },
        "Derrière la grille, la plume s'est remise à gratter. Elle écrit. À un quart d'heure de minuit, avec des hallebardes dans son escalier, cette femme met quelque chose au net.",
      ],
      choices: [{ label: "Attendre les deux autres devant la grille", to: "A5c_grille", big: true }] },

    // ───────────────────────────── The eye: the hoarding ─────────────────────────────
    A5o_q1: { act: "V", title: "Le hourd", place: "horloge_close", ambiance: "nuit",
      text: [
        "Tu passes le chêne, tu traverses le palier, tu pousses la porte basse que tu connais.",
        "Le vent te prend à la gorge. Le hourd fait le tour de la Tour à quarante toises du pavé : une galerie de planches portée par des corbeaux de pierre, large de trois pieds, avec un garde-fou que des générations de pigeons ont rendu blanc. Les planches sont luisantes de givre. C'est la dernière nuit de novembre, et il gèle à cette hauteur comme il gèlera en bas dans un mois.",
        "Tu regardes.",
        "Aiguemorne est dessous, tout entière, et pour la première fois de ta vie tu la vois d'où le Juge la regarde. La cour de la citadelle est un puits de torches. La rampe descend en lacets vers la ville haute, puis la ville basse, puis le fleuve, qui est une chose noire et lente où tremblent les fanaux du quai.",
        { if: { has: "monde:a5:foule" }, text: "Et la rampe est pleine. Ce ne sont plus des torches, de ce côté : ce sont des lanternes, de pauvres lanternes de corne et de papier huilé, des centaines, qui montent des Bas-Fonds en un ruisseau jaune. La ville basse est venue voir.", else: "La rampe est presque noire. Il y a quelques lanternes à la grande porte, une vingtaine, serrées. La ville basse est restée chez elle, les volets clos, à attendre que le Bronze ait parlé pour savoir ce qu'on lui a fait." },
        "À ta gauche, le hourd mène au cadran. À tes pieds, la ville attend un signe ou n'attend rien.",
      ],
      choices: [
        { label: "Faire le signal convenu avec la Douairière", if: { has: "monde:a5:douairiere" }, hide: { not: { has: "monde:a5:douairiere" } }, fx: { flag: "a5:q_signal" }, to: "A5o_q_signal", once: true },
        { label: "Lever ta lanterne vers la ville, à tout hasard", if: { not: { has: "monde:a5:douairiere" } }, hide: { has: "monde:a5:douairiere" }, to: "A5o_q_hasard", once: true },
        { label: "Regarder ce qui se passe au pied de la Tour", to: "A5o_q_bas", once: true },
        { label: "Aller au cadran", to: "A5o_q_cadran", big: true },
      ] },

    A5o_q_signal: { act: "V", title: "Trois éclipses", place: "horloge_close", ambiance: "nuit",
      text: [
        "Tu ouvres le volet de ta lanterne sourde, tu le fermes. Trois fois, lentement, tourné{e} vers le sud, où il y a sous les toits de la Clef-Tordue une lucarne que tu trouverais les yeux bandés.",
        "Tu attends. Le vent siffle dans les corbeaux.",
        "En bas, très loin, dans le noir des Bas-Fonds, une lumière paraît. Elle s'éclipse. Elle revient. Trois fois. Une vieille femme qui a les jambes mortes s'est fait porter à sa lucarne, et elle a répondu de sa main.",
        { if: { has: "monde:a5:foule" }, text: "Alors il arrive une chose que tu n'avais pas prévue. Sur la rampe, une lanterne se lève à bout de bras. Puis dix. Puis toutes. Le ruisseau jaune s'est arrêté ; il a levé ses lumières vers la Tour, et il les tient là, sans un cri. On leur a dit de garder les yeux ouverts à minuit. Ils les ont ouverts d'avance." },
        { if: { has: "monde:a5:f_compagnons" }, text: "Dans la cour, deux cents torches se haussent ensemble vers le cadran. Les compagnons serruriers tiennent parole avec la ponctualité des gens de métier." },
        "Tu refermes le volet. Tu as les yeux qui piquent, et tu décides que c'est le givre.",
      ],
      choices: [{ back: "A5o_q1" }] },

    A5o_q_hasard: { act: "V", title: "Une lanterne", place: "horloge_close", ambiance: "nuit",
      text: [
        "Tu lèves ta lanterne à bout de bras, volet ouvert, et tu la balances.",
        "Rien ne répond. Une lanterne à quarante toises, vue de la ville, c'est une étoile de plus dans un ciel qui en est plein ; et personne, en bas, ne sait qu'il faut regarder.",
        "Dans la cour, pourtant, une casaque rousse a levé le nez. Tu refermes le volet et tu te colles au mur. On apprend, dans ton emploi, que voir et être vu sont deux métiers, et qu'ils se paient rarement ensemble.",
      ],
      choices: [{ back: "A5o_q1" }] },

    A5o_q_bas: { act: "V", title: "Au pied de la Tour", place: "horloge_close", ambiance: "nuit",
      text: [
        "Tu te penches par-dessus le garde-fou, les deux mains sur le bois gelé.",
        "La vis a des meurtrières, une tous les dix pieds, et tu en vois la colonne sous toi comme une flûte dont les trous s'allument de bas en haut : les torches des casaques rousses ont passé le milieu. Les plus hautes ne bougent plus. Ils sont dans la salle des Poids.",
        { if: { has: "monde:a5:voie" }, text: "Du côté du nord, la corde pend toujours, raide de givre, jusqu'à la terrasse du séchoir. Au bas, il y a une petite ombre accroupie contre le mur, qui tient le bout dans ses deux mains et qui le tiendra jusqu'au matin si on ne lui dit pas de lâcher. Le gamin n'est pas rentré." },
        { if: { all: [{ has: "monde:douce:alliee" }, { not: { has: "monde:a5:voie" } }] }, text: "Sur le toit de Sainte-Clavis, à dix toises sous toi, une forme s'est décollée d'une cheminée. Elle lève une main gantée de noir, doigts écartés, puis la referme : *nous sommes là.* Sans-Bruit a posté ses gens sur les toits. Elle tient ses marchés mieux que ses promesses, et elle t'a fait les deux." },
        { if: { all: [{ has: "monde:douce:rancune" }, { not: { has: "monde:douce:alliee" } }] }, text: "Sur le toit de Sainte-Clavis, à dix toises sous toi, quelque chose a bougé contre une cheminée. Une forme, puis deux. Elles regardent vers le haut. Les Gants-Noirs ont pris leurs places pour la sortie du spectacle." },
        { if: { has: "monde:a5:comte" }, text: "Devant la grande porte de la Tour, il y a un cheval que l'on tient en main, tout sellé, et trois autres derrière. Leur livrée est cramoisie. Quelqu'un a donné des ordres pour une nuit qui finirait mal." },
        "Tu te redresses. Tu sais maintenant par où l'on descend, ou qu'il n'y a nulle part par où descendre.",
      ],
      choices: [{ back: "A5o_q1" }] },

    A5o_q_cadran: { act: "V", title: "Le cadran, par dehors", place: "horloge_close", ambiance: "nuit",
      text: [
        "Tu longes le mur, le dos à la pierre, une main sur le garde-fou. Le hourd tourne ; et le cadran paraît.",
        "D'en bas, c'est un rond pâle où une aiguille de fer marque les heures. D'ici, c'est une muraille. Il a quatre toises de haut. Les chiffres sont des barres de bronze longues comme toi, scellées dans une pierre blanche que la suie de cent hivers a rayée de noir ; l'aiguille, au-dessus de ta tête, est une poutre de fer qui avance par saccades, avec un claquement que tu sens dans tes dents. Elle est à un doigt du douze.",
        "Et au milieu, de haut en bas, il y a une fente. Tu la suis du pouce. Le cadran est fait de deux vantaux, et ces vantaux pivotent sur quatre gonds de bronze, deux de chaque côté, gros comme des cuisses.",
        "Tu approches ta lanterne du gond le plus proche. Il est pris. Sept ans de fiente, de mousse et de nids l'ont habillé d'une croûte grise, et le gel de cette nuit a scellé le tout. Quand le Bronze aura son vent et que le mécanisme poussera, il poussera là-contre.",
        { if: { has: "monde:a5:huile" }, text: "Tu as encore, dans ta poche, la burette que {qui:a5:main} t'a passée devant la porte. Il reste de l'huile du Juge au fond : deux doigts." },
        "Il y en a quatre. Tu as ton couteau, tes mains, et le temps que les deux autres te gagnent.",
      ],
      choices: [
        { label: "Dégager les gonds, l'un après l'autre",
          test: { dom: "nature", diff: 15, label: "Travailler à quarante toises, sur du givre", help: [{ if: { has: "monde:a5:huile" }, v: 10 }, { if: { voie: "coureur" }, v: 15 }, { if: { voie: "crocheteur" }, v: 5 }, { if: { item: "corde" }, v: 5 }, { if: { has: "a5:q_signal" }, v: 5 }] },
          win: { fx: { set: { "monde:a5:q_oeil": "libre" } }, to: "A5o_q_gonds_ok" }, lose: { fx: { pv: -4 }, to: "A5o_q_gonds_ko" }, big: true },
      ] },

    A5o_q_gonds_ok: { act: "V", title: "Quatre gonds", place: "horloge_close", ambiance: "nuit",
      fx: { ep: ["perso", 1500] },
      text: [
        "Le premier vient par plaques, sous la lame, comme une écorce. Tu grattes jusqu'au bronze, qui luit ; tu souffles dans l'axe ; tu passes au suivant.",
        "Pour les deux du haut, il faut monter sur le garde-fou. Tu y montes. Il y a quarante toises d'air sous tes talons et une ville qui te regarde peut-être ; tu tiens d'une main à un chiffre romain, un V de bronze froid comme une rampe de puits, et tu travailles de l'autre, la lanterne aux dents.",
        "Un nid se détache. Il tombe en tournant, longtemps, et tu le suis des yeux malgré toi jusqu'à ce que la nuit le prenne.",
        "Au quatrième, tes doigts ne sentent plus le couteau. Tu redescends sur les planches. Tu regardes ton ouvrage : quatre colliers de bronze nu, propres comme des gonds d'armoire, dans une façade de crasse.",
        "Le vantail, sous ta paume, a un jeu. Un cheveu. Il respire.",
      ],
      choices: [{ label: "Rentrer", to: "A5o_q_retour", big: true }] },

    A5o_q_gonds_ko: { act: "V", title: "Trois gonds", place: "horloge_close", ambiance: "nuit",
      text: [
        "Les deux du bas viennent. Tu grattes jusqu'au bronze, tu souffles dans l'axe.",
        "Pour ceux du haut, il faut monter sur le garde-fou. Tu y montes ; tu dégages le troisième, pendu{e} d'une main à un chiffre de bronze. Tu passes au quatrième, de l'autre côté de la fente.",
        "Ton pied part. Cela se fait sans prévenir, sur une planche que le givre a vernie : la jambe file dans le vide, le garde-fou te reçoit en travers des côtes, et ton couteau s'en va tout seul, en tournant, vers la cour. Tu ne l'entends pas arriver.",
        "Tu restes un moment plié{e} sur le bois, à respirer par petits coups. Puis tu te ramènes sur les planches, à plat ventre, comme on sort de l'eau.",
        "Le quatrième gond est là-haut, gris, entier dans sa croûte. Tu n'as plus de lame, et tes côtes te défendent de lever le bras. Le vantail de droite s'ouvrira. Celui de gauche fera ce qu'il pourra.",
      ],
      choices: [{ label: "Rentrer", to: "A5o_q_retour", big: true }] },

    A5o_q_retour: { act: "V", title: "Le pan de la larme", place: "horloge_close", ambiance: "temple",
      text: [
        "La porte basse, le palier, le chêne. Après le hourd, l'air de la Chambre te paraît tiède, et son silence une chose épaisse où l'on entre comme dans une étoffe.",
        "Tu fais le tour du socle par la droite. Il a trois pans, tournés vers trois murs. Celui qui t'attend regarde le pavillon : cette trompe de pierre qui s'évase derrière le dos du Juge, jusqu'aux vantaux dont tu viens de voir l'autre face. Au milieu du pan, une rosace de bronze ; dans la rosace, une larme.",
        "Tu t'accroupis. L'entrée de la clef est au cœur de la larme, haute, étroite. Elle est propre. Quelqu'un l'a curée de l'intérieur, à la plume, pendant des années.",
        "De ta place, tu ne vois ni la porte, ni les deux autres pans. Tu vois le dos du Bronze, et dans ce dos, à hauteur d'homme, le dessin d'un panneau : une ligne fine comme un trait de pointe, qui dessine un rectangle de six pieds. La porte du siège. Si elle s'ouvre un jour, c'est toi qui la verras s'ouvrir.",
        "Tu sors de ton chiffon noir la clef de Cendre. Elle est froide ; elle sent encore la cire d'Ossevaux.",
      ],
      choices: [{ label: "Attendre les deux autres devant la grille", to: "A5c_grille", big: true }] },

    // ───────────────────────────── The voice: the parley ─────────────────────────────
    A5v_q1: { act: "V", title: "La guérite", place: "horloge_close", ambiance: "nuit",
      text: [
        "Tu passes le chêne. Tu as encore sur le dos la robe de la Voix des Causes, noire, ample, à rabat rouge, et tu la relèves à deux mains pour courir.",
        "La guérite du vieux soldat est une logette de planches accrochée au bord du palier. Elle a, du côté du vide, un guichet grillé qui donne de haut sur la salle des Poids : c'est par là, depuis cent cinq ans, que la garde demande le mot à qui monte.",
        "Tu y colles le front.",
        "Ils arrivent. Douze casaques rousses débouchent de la vis, l'une après l'autre, rouges, soufflantes, et se rangent sous le balancier. Leur capitaine, long, jaune, lève sa torche en mâchant sa moustache. Derrière lui viennent les trois hommes que tu as vus ce soir sur l'estrade, sous trois dais, bénir trente mille personnes : ils ont perdu dans l'escalier beaucoup de leur majesté. Le Syndic s'assied sur une caisse. Le Doyen s'appuie au mur, les yeux clos, son sachet de buis sous le nez. Le comte seul est debout, et il regarde en l'air.",
        "Il te voit. Un rabat rouge derrière une grille, à quatre toises de haut : cela se remarque.",
        "« Tiens, dit-il de sa voix de cour de château. La septième Cause a pris de l'avance sur ses juges. »",
      ],
      choices: [{ label: "Leur parler", to: "A5v_q_hub", big: true }] },

    A5v_q_hub: { act: "V", title: "Le guichet", place: "horloge_close", ambiance: "nuit", hub: true, backName: "le guichet",
      text: [
        { first: true, text: "Trois visages se sont levés vers toi, et treize casques. Au-dessus de ta tête, à quelques pas, tu entends {qui:a5:main} qui remue du bois et du fer. Chaque phrase que tu fais durer est une phrase de gagnée." },
        { first: true, text: "Tu as plaidé ce matin devant le greffe, cet après-midi devant trois cabinets. Voici le prétoire : un guichet de corps de garde. On a les tribunes que l'on mérite, disait la Douairière, et l'on y parle comme à la grande." },
        { again: true, text: "Le guichet. En bas, les torches, les trois Clavaires, le capitaine qui regarde le Syndic et attend un signe." },
      ],
      choices: [
        { label: "Au Syndic : « Dites à ces messieurs ce que vous m'avez offert, et pour quoi. »", if: { has: "monde:a5:offre" }, hide: { not: { has: "monde:a5:offre" } }, fx: { flag: "a5:q_dit_prix" }, to: "A5v_q_syndic", once: true },
        { label: "Au Syndic : « Qu'y a-t-il dans ce meuble de chêne, maître ? »", if: { all: [{ has: "monde:a5:cylindre_su" }, { not: { has: "monde:a5:offre" } }] }, hide: { not: { all: [{ has: "monde:a5:cylindre_su" }, { not: { has: "monde:a5:offre" } }] } }, fx: { flag: "a5:q_dit_prix" }, to: "A5v_q_meuble", once: true },
        { label: "Aux casaques rousses : « Priez-les de vous montrer leurs clefs. »", if: { has: "monde:a5:clefs_vues" }, hide: { not: { has: "monde:a5:clefs_vues" } }, fx: { flag: "a5:q_dit_clefs" }, to: "A5v_q_fausses", once: true },
        { label: "Lire, par le guichet, l'article dernier de la charte", if: { has: "monde:a5:charte" }, hide: { not: { has: "monde:a5:charte" } }, fx: { flag: "a5:q_dit_charte" }, to: "A5v_q_charte", once: true },
        { label: "Au Doyen des Morts", to: "A5v_q_doyen", once: true },
        { label: "Au comte", to: "A5v_q_comte", once: true },
        { label: "Demander un quart d'heure",
          test: { dom: "social", diff: 20, label: "Obtenir un quart d'heure de trois hommes qui ont monté cent quatre-vingts marches", help: [{ if: { has: "a5:q_dit_prix" }, v: 10 }, { if: { has: "a5:q_dit_clefs" }, v: 10 }, { if: { has: "a5:q_dit_charte" }, v: 10 }, { if: { has: "monde:a5:doyen=avec" }, v: 10 }, { if: { has: "monde:a5:comte" }, v: 10 }, { if: { has: "monde:a5:hyacinthe" }, v: 5 }, { if: { voie: "comedien" }, v: 10 }] },
          win: { fx: { set: { "monde:a5:q_voix": "obtenu" } }, to: "A5v_q_ok" }, lose: { to: "A5v_q_ko" }, big: true },
      ] },

    A5v_q_syndic: { act: "V", title: "Trente mille écus", place: "horloge_close", ambiance: "nuit",
      text: [
        "Le Syndic lève vers toi sa figure ronde, encore rose de l'escalier. Il sourit. C'est un homme qui sourit d'abord et qui calcule pendant ce temps.",
        "« Mon enfant, il y a des affaires qui se traitent dans un cabinet.",
        "— Celle-ci se traitait dans le vôtre à quatre heures. Trente mille écus, sur votre banque de Ferrières, à partager en trois. Une quittance générale. Et la septième Cause plaidée ce soir par une voix qui nous trouverait innocents. Vous aviez l'air sûr de cette voix, maître. Je me suis demandé où vous l'aviez achetée. »",
        "Tu as parlé pour treize casques et deux Clavaires. Le chiffre fait son chemin dans la salle. Un hallebardier touche quatre écus par mois.",
        "Le Doyen a rouvert les yeux. Le comte a ôté son pied de l'établi.",
        "« Trente mille, Quincarnon ? dit-il lentement. Vous m'en avez refusé deux mille en octobre, sur ma terre des Abois, en m'expliquant que les temps étaient durs.",
        "— Ils l'étaient, monsieur le comte. » Le Syndic compte sur ses doigts, par habitude, et s'en aperçoit. « C'était une avance sur la paix publique. J'allais vous en parler. »",
        "« Vous alliez, » dit le Doyen, de sa voix douce. Et il regarde, dans l'angle, le meuble de chêne, comme un homme qui additionne à son tour.",
      ],
      choices: [{ back: "A5v_q_hub" }] },

    A5v_q_meuble: { act: "V", title: "Le meuble de chêne", place: "horloge_close", ambiance: "nuit",
      text: [
        "Le Syndic lève vers toi sa figure ronde. Il sourit.",
        "« Un régulateur, mon enfant. Une amélioration de l'horloge, aux frais de la guilde.",
        "— Avec un cylindre de douze cents lignes, une soupape sur le vent du Juge et une tirette à boule d'ivoire. Votre régulateur parle, maître. Il dira ce soir sept sentences que vous avez dictées, et il les redira dans sept ans, et dans quatorze. Ces messieurs savaient-ils qu'ils montaient entendre votre voix ? »",
        "Le Doyen a rouvert les yeux. Le comte a ôté son pied de l'établi ; il va au meuble, en fait le tour, pose la main sur le chêne comme on flatte un cheval dont on se méfie.",
        "« Nous étions convenus d'un mur, Quincarnon, dit-il. Un mur est une vilenie honnête. Ceci est autre chose. »",
        "« Ceci est la paix publique, monsieur le comte, » répond le Syndic. Il a cessé de sourire, ce qui lui ôte d'un coup dix ans de bonhomie.",
      ],
      choices: [{ back: "A5v_q_hub" }] },

    A5v_q_fausses: { act: "V", title: "Trois clefs de procession", place: "horloge_close", ambiance: "nuit",
      text: [
        "Tu t'adresses aux casaques rousses, par-dessus la tête des maîtres.",
        "« Vous êtes montés ouvrir une porte. Elle a trois serrures. Demandez à ces messieurs de vous faire voir, à la torche, ce qu'ils ont porté ce soir sur trois coussins devant toute la ville. »",
        "Le capitaine Escarbille se retourne à demi. C'est un mouvement de rien, une épaule ; mais les douze autres l'ont vu, et douze regards descendent vers trois poitrines.",
        "Le Syndic a porté la main à sa chaîne. Le Doyen n'a pas bougé. Le comte, lui, tire de son pourpoint un cordon cramoisi, au bout duquel pend une clef à anneau de trèfle, et il la fait tourner dans la lumière.",
        "« Du plomb, dit-il. Doré à la feuille par un orfèvre de Brandelis qui m'a fait crédit. La mienne a quitté ma maison en novembre. J'imagine que celles de mes confrères ont voyagé aussi. » Il a un rire bref. « Capitaine, nous sommes trois vieillards qui montons garder une porte dont trois gamins ont les clefs. Je tenais à ce que vous sachiez au juste ce que vous défendez. »",
        "Le capitaine Escarbille ne dit rien. Il redresse sa torche. Un homme de troupe peut obéir à peu près à tout, sauf au ridicule ; et ses douze hommes viennent d'en respirer l'odeur.",
      ],
      choices: [{ back: "A5v_q_hub" }] },

    A5v_q_charte: { act: "V", title: "L'article dernier", place: "horloge_close", ambiance: "nuit",
      text: [
        "Tu n'as pas le parchemin : il dort au greffe, sous sa poussière. Tu as mieux. Tu l'as copié deux fois, et lu dix.",
        "« Charte de fondation de la Tour, article dernier. *Et quand le Juge se taira, par usure, par malice ou par la volonté de qui le sert, la cité fera plaider les Sept Causes devant elle-même, sur la place, à voix haute, pour le temps qu'elle apprenne.* »",
        "Ta voix descend dans la salle des Poids entre les tambours qui tournent. Elle y prend une sonorité que tu ne lui connaissais pas.",
        "« Il y a cent cinq ans que cet article attend. Le bâtisseur a prévu ce soir, messieurs. Il a prévu que quelqu'un monterait ici, et ce que la ville ferait ensuite. Il a seulement oublié de vous prévoir, vous. »",
        "Le Doyen des Morts a baissé son sachet. « *Par la volonté de qui le sert,* répète-t-il. Je connaissais cette ligne. Je la croyais perdue avec le reste du cartulaire. » Il te considère. « Vous l'avez trouvée au greffe, avec Dom Anthelme, ou seul{e} ? Peu importe. Elle est exacte. »",
        "Le Syndic hausse les épaules. Mais le capitaine a écouté ; et un capitaine qui a entendu un article de charte sait qu'on le lui relira un jour, devant d'autres.",
      ],
      choices: [{ back: "A5v_q_hub" }] },

    A5v_q_doyen: { act: "V", title: "Monseigneur Calixte", place: "horloge_close", ambiance: "nuit",
      text: [
        "« Monseigneur. »",
        "Le Doyen des Morts lève vers le guichet ses yeux très clairs. À la lueur des torches, sous sa couronne de cheveux blancs, il a l'air de ce qu'il est : un homme qui a enterré tout un pays et qui s'étonne poliment qu'il en reste.",
        { if: { has: "monde:a5:doyen=avec" }, text: "« Je vous ai dit cet après-midi ce que je ferais, répond-il. Je le fais. » Il va, de son pas de cierge que l'on déplace, jusqu'à la première marche de l'échelle. Il s'y assied. Il arrange sa soutane sur ses genoux. « Capitaine, je suis las. On montera quand je me serai reposé ; et je me repose lentement, c'est de mon âge. »" },
        { if: { has: "monde:a5:doyen=avec" }, text: "Le Syndic ouvre la bouche. Le Doyen lève un doigt ganté de fil blanc. « Elle m'a écrit quatre lignes, Quincarnon. En quarante-cinq ans, c'est tout ce que l'un de nous a reçu d'elle. Souffrez que je leur donne un quart d'heure. Il y en a un par ligne, à peu près. »" },
        { if: { has: "monde:a5:doyen=contre" }, text: "« Je vous ai écouté{e} cet après-midi, répond-il. Je vous ai dit non. Je vous le redis d'en bas, avec plus de monde. Rendez les clefs, mon enfant. Il y a là-haut une paix de cent cinq ans, et vous allez la casser pour le plaisir d'avoir vu ce qu'il y avait dedans. C'est une curiosité d'enfant de chœur devant un tabernacle. »" },
        { if: { has: "monde:a5:doyen=contre" }, text: "« Il y a une femme dedans, monseigneur. » « Je le sais mieux que vous. Je lui ai écrit. Elle m'a répondu qu'elle n'avait pas besoin de mon pardon et qu'elle me donnait le sien. On ne discute pas avec ces personnes-là : on les garde. »" },
        { if: { not: { any: [{ has: "monde:a5:doyen=avec" }, { has: "monde:a5:doyen=contre" }] } }, text: "« Vous êtes la Voix que le sort a tirée ce matin, dit-il. On m'a rapporté que vous lisiez bien. Lisez-moi donc ce que vous faites là-haut. » Tu le lui dis en trois phrases. Il écoute, la tête penchée. « Une femme, une porte, trois enfants. J'ai peur que ce ne soit plus simple que tout ce que nous avons bâti autour. Je ne vous aiderai pas. Je ne suis pas pressé de monter non plus. »" },
      ],
      choices: [{ back: "A5v_q_hub" }] },

    A5v_q_comte: { act: "V", title: "Le Connétable", place: "horloge_close", ambiance: "nuit",
      text: [
        "« Monsieur le comte. »",
        "Thibert de Brandelis porte ce soir le pourpoint cramoisi des grandes cérémonies, qui lui serre le ventre, et l'épée du Connétable, qu'il n'a pas tirée depuis sa troisième bataille. Il fait sauter quelque chose dans sa main. Trois dés.",
        { if: { has: "monde:a5:comte" }, text: "« Je me demandais quand vous m'appelleriez, dit-il. J'ai donné ma parole à l'un de vous, dans une circonstance où j'étais à jeun, ce qui la rend valable. » Il empoche les dés. Il va se placer devant l'échelle, à côté du Doyen ou à sa place, dos aux barreaux ; et il tire l'épée, sans hâte, comme on tire un rideau." },
        { if: { has: "monde:a5:comte" }, text: "« Capitaine Escarbille. Je suis Connétable d'Aiguemorne. Vous êtes à la solde de la guilde, ce qui est honorable, et sous mes ordres dès que vous passez la porte de cette Tour, ce qui est écrit. On ne monte pas. » Le capitaine regarde l'épée, puis le Syndic, puis l'épée. Il a le visage d'un homme à qui l'on vient de donner deux consignes." },
        { if: { not: { has: "monde:a5:comte" } }, text: "« Vous voulez du temps, dit-il. Tout le monde en veut ; j'en ai perdu assez pour savoir ce qu'il vaut. » Il regarde ses dés. « Tenez. Je vous le joue. Un coup, devant témoins. Si j'amène plus de dix, je vous laisse monter votre affaire sans dire un mot. Sinon, je monte le premier. »" },
        { if: { not: { has: "monde:a5:comte" } }, text: "Il lance sur l'établi du Remonteur. Les trois dés roulent entre un chiffon gris et une tache d'huile. Tu ne vois pas les points, de si haut. Tu vois le comte, qui se penche, qui reste penché, et qui se redresse avec une figure que tu n'oublieras pas : celle d'un homme qui a perdu toute sa vie et qui vient, pour une fois, de ne pas savoir s'il le regrette." },
        { if: { not: { has: "monde:a5:comte" } }, text: "« Neuf, annonce-t-il. Je monterai donc le premier. Rien ne dit que je monterai vite. »" },
      ],
      choices: [{ back: "A5v_q_hub" }] },

    A5v_q_ok: { act: "V", title: "Jusqu'au premier coup", place: "horloge_close", ambiance: "nuit",
      fx: { ep: ["perso", 1500] },
      text: [
        "Tu demandes un quart d'heure. Tu le demandes sans menace et sans prière, comme la Voix des Causes demande la parole : parce qu'elle lui est due.",
        "« Vous êtes montés pour entendre la Sentence. Elle est à minuit. Vous l'entendrez d'ici mieux que personne en ville. Attendez-la. Si le Bronze a dit sept Causes au dernier coup, vous n'aurez rien perdu qu'une échelle à monter. S'il se tait, vous monterez ; et vous saurez au moins pourquoi. »",
        "Le Syndic se lève de sa caisse. Il regarde ses deux confrères. Ce qu'il lit sur ces deux figures lui déplaît.",
        "« Jusqu'au premier coup de minuit, dit-il enfin. Capitaine, faites reposer vos hommes. » Il se rassied. Il tire sa montre, la pose sur son genou, et croise les mains sur son ventre de l'air d'un créancier qui accorde un délai et qui l'inscrit.",
        { if: { has: "monde:a5:quart" }, text: "Sa montre marque ce que marque la cloche. La cloche ment d'un quart d'heure. Tu te gardes d'en rien dire." },
        "Tu quittes le guichet à reculons. Tes genoux, sous la robe noire, font ce que font les genoux après les grandes audiences.",
      ],
      choices: [{ label: "Retourner à la Chambre", to: "A5v_q_socle", big: true }] },

    A5v_q_ko: { act: "V", title: "« Montez. »", place: "horloge_close", ambiance: "nuit",
      text: [
        "Tu demandes un quart d'heure. Tu y mets ce que tu as.",
        "Le Syndic t'écoute jusqu'au bout, la tête penchée, avec la politesse qu'il a pour les fournisseurs. Puis il se lève de sa caisse.",
        "« C'est fort bien dit. On vous l'accorderait volontiers, si l'on savait ce que vous en ferez. Je l'ignore, et je n'achète rien que je n'aie pesé. Capitaine : montez. »",
        "Le capitaine Escarbille abaisse sa torche. Douze hallebardes se relèvent ensemble avec un bruit de grille.",
        "Tu as fait durer la chose le temps de la dire. C'est toujours cela de pris sur une horloge ; et tu sais qui, au-dessus de ta tête, va maintenant payer le reste avec ses épaules.",
      ],
      choices: [{ label: "Retourner à la Chambre", to: "A5v_q_socle", big: true }] },

    A5v_q_socle: { act: "V", title: "Le pan du trèfle", place: "horloge_close", ambiance: "temple",
      text: [
        "Le chêne, la Chambre, le froid. La petite lampe brûle toujours dans la poitrine du Bronze.",
        "Tu fais le tour du socle par la gauche. Il a trois pans, tournés vers trois murs. Le tien regarde une paroi nue, où cent cinq ans de lanternes ont laissé à hauteur d'homme une ligne de suie. Au milieu du pan, une rosace de bronze ; dans la rosace, un trèfle.",
        "Tu t'agenouilles dans ta robe. L'entrée de la clef s'ouvre au cœur du trèfle, haute, étroite, nette. On l'a curée de l'intérieur, à la plume, pendant des années.",
        "De ta place, tu ne vois ni la porte, ni la grille, ni les deux autres pans. Tu vois un mur. Celui qui a dessiné ce socle a voulu que la troisième clef se tourne sans témoin, par quelqu'un qui n'aurait devant soi que sa décision.",
        "Tu sors de ton chiffon rouge la clef de Sang. Elle a un anneau de trèfle, et le poids d'une chose que l'on a beaucoup jouée.",
      ],
      choices: [{ label: "Attendre les deux autres devant la grille", to: "A5c_grille", big: true }] },
  },

  extras: {
    people: {
      escarbille: { name: "Le capitaine Escarbille", aka: ["Escarbille", "le capitaine"], qui: "Le capitaine des casaques rousses, la compagnie de Ferrières à la solde de la guilde.", f: false,
        aspect: { allure: "long, jaune, botté jusqu'aux cuisses", visage: "moustache qu'il mâche", habits: "casaque rousse, hausse-col", signe: "le chapeau sous le bras", voix: "grave, posée, belle pour jurer" },
        desc: "Trente ans de service dans les mines. Il obéit à ce qui est écrit, et il souffre quand deux écrits se contredisent." },
    },
  },
};
