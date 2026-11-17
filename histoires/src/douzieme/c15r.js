// Le Douzième Coup · chapter 15, the one who stays (act V, inside the eleventh stroke of 541). The lower Chamber
// as it was at the instant (hub `K15r_cave`) : the nine, the boy and his mallet, the old man alive, the wedge just
// driven and the drift on the floor (`r:chasse_trouvee` if it was not picked up in 601), the well and its first dew
// (`r:rosee`), the new cradles ; the two Aubespins (`r:vu_deux`), the young one woken by the old (`r:jeune_eveille`),
// the key at his belt (item `clef_haute`). Then the climb : the eighty steps, the landing and the lane of 541 seen
// through the iron door (`r:vu_ruelle`), the stair, the square seen from the front for the first time
// (`r:vu_faces`), Baudouin on his step, and the low door of the gallery. M15 is the reunion.
var P = {};
var CHASSE = { has: "monde:chasse_en_bas" };
var CALEE = { has: "r:porte_calee" };
var VU_DEUX = { has: "r:vu_deux" };

Object.assign(P, {
  K15r_cave: { act: "V", title: "La cave neuve", place: "tour", ambiance: "chateau", hub: true, backName: "le levier", fx: { stock: { sable: 3 } },
    text: [
      { first: true, text: "C'est la même salle ronde, et c'est une autre. Le chêne des berceaux est blond ; il sent la sciure. Le bronze de la barre a des reflets d'or. Aux murs, six lanternes brûlent, et leurs flammes sont des feuilles de laurier, immobiles, pointues." },
      { first: true, text: "Il y a du monde. Neuf garçons en tablier vert, un bandeau gris sur les oreilles, chacun à une place. Un enfant, près du levier, les deux mains sur un maillet. Le vieillard, que tu connais, avec du sang aux joues. Et, pris dans ses poings, tenant le cuir, un homme en gris qui a trente ans." },
      { first: true, text: "Le puits est à sa hauteur d'autrefois : une main sous le pavé, gris, bombé à peine. Il luit. Le long du bord, sur le biseau, quelque chose vient de perler, que tu reconnais avant de l'avoir regardé : des grains. Tu en racles trois pincées du pouce, par un réflexe de dix ans. Ils sont tièdes." },
      { first: true, text: "Derrière toi, la main a quitté ton épaule. L'autre homme en gris a fait le tour du levier." },
      { again: true, text: "La cave de 541, ses six flammes pointues, les neuf tabliers verts. La note emplit la voûte." },
      { again: true, if: { not: VU_DEUX }, text: "Les deux hommes en gris sont face à face, de part et d'autre de deux poings de vieillard." },
      { again: true, if: VU_DEUX, text: "Le plus vieux des deux hommes en gris parle bas à l'autre, qui n'entend pas." },
      "{autre} est là-haut, sans un grain. Chaque chose que tu regardes ici se paie en marches.",
    ],
    choices: [
      { label: "Les deux hommes en gris", hide: VU_DEUX, fx: { flag: "r:vu_deux", ep: ["perso", 1000] }, to: "K15r_deux", big: true },
      { label: "Les neuf", hide: { seen: "K15r_neuf" }, to: "K15r_neuf" },
      { label: "L'enfant au maillet", hide: { seen: "K15r_ansel" }, to: "K15r_ansel" },
      { label: "Le vieillard", hide: { seen: "K15r_coudrier" }, to: "K15r_coudrier" },
      { label: "Le pied du levier, à gauche", hide: { seen: "K15r_coin" }, to: "K15r_coin" },
      { label: "Le bord du puits", hide: { seen: "K15r_puits" }, to: "K15r_puits" },
      { label: "Le fil", hide: { seen: "K15r_fil" }, to: "K15r_fil" },
      { label: "Les berceaux, et la grille du fond", hide: { seen: "K15r_berceaux" }, to: "K15r_berceaux" },
      { label: "L'escalier : {autre} n'a pas un grain", to: "K15r_marches", big: true },
    ] },

  K15r_deux: { act: "V", title: "Une glace qui retarde", place: "tour", ambiance: "chateau",
    text: [
      "Il se tient devant l'autre, à un pas, les deux mains sur sa canne, et il le regarde.",
      "Ils ont la même taille. Ils ont le même œil gris à gauche, le même œil brun à droite, et au coin de la bouche le même pli, que l'un a neuf et l'autre creusé. On dirait un homme devant une glace qui retarde.",
      "Le jeune a les mains au levier, et deux poings de vieillard aux poignets. Il a la tête tournée vers le puits, par-dessus l'épaule. Il a sur la figure une chose que tu n'as jamais vue sur l'autre, ni à Arvoise, ni dans une cour, ni au pied d'une estrade.",
      "« Il a peur. » Le vieux parle pour lui seul, à mi-voix. « Regardez cela. Je l'avais oublié. »",
      "Du bout de sa canne, sans toucher, il suit dans l'air le bras du jeune, l'épaule, la nuque. « Il vient de sentir la barre passer le cran. Le sien : celui qu'il avait calculé, à une ligne près, pour une chambre. Elle l'a passé sous sa main, avec le poids d'un vieillard par-dessus, et elle est allée où vont les choses qu'on ne retient plus. Il regarde le puits pour savoir ce qu'il a fait. Dans un instant, il le saura. »",
      "La canne retombe. « J'ai dit soixante ans que l'autre avait appuyé. Je l'ai dit si bien que j'ai fini par l'avoir vu. » Il regarde les quatre mains, nouées sur le cuir. « Nous étions deux. Il me tirait les poignets vers le haut ; je résistais vers le bas ; et à nous deux nous pesions. On ne se bat pas au-dessus d'un levier. Je l'avais dit moi-même, ce matin-là, à quelqu'un, pour d'autres raisons. »",
      "Il se tourne vers toi. Il a repris sa figure. « Je ne comptais pas revoir ceci. Vous m'y avez amené par l'épaule. Je vous en ai de l'obligation, et cela ne changera rien. »",
      { if: { not: CALEE }, text: "Il tire de son gilet un sablier de poche, en or, gros comme un œuf, et il le regarde. Son grand cristal est resté contre un mur, dans une cave qui n'existe pas encore. « Il me reste ceci. C'est beaucoup, pour ce que j'ai à dire. »" },
      { if: CALEE, text: "Il tire de son gilet un sablier de poche, en or, gros comme un œuf, et il le soupèse. Son grand cristal est resté dans un escalier, derrière une porte que tu as calée d'une cheville. Il le sait, et il se tait : il compte." },
      "Il dévisse le bouchon.",
    ],
    choices: [
      { label: "Le regarder faire", fx: { flag: "r:jeune_eveille", ep: ["perso", 1200] }, to: "K15r_jeune", big: true },
      { label: "Lui tourner le dos : il y a quelqu'un là-haut", to: "K15r_cave" },
    ] },

  K15r_jeune: { act: "V", title: "Le temps d'un grain", place: "tour", ambiance: "chateau",
    text: [
      "Il pose un grain sur l'épaule de l'autre, comme on ôte une poussière d'un habit.",
      "Le jeune respire. Sa tête achève de tourner. Il voit le puits ; il voit la barre, au fond ; et ses lèvres font un chiffre. Puis il sent qu'on le regarde, et il se retourne vers sa propre figure.",
      "Il a un mouvement de recul, sans un cri, que deux poings arrêtent. « Mon père est mort », dit-il, très vite, d'une voix plus haute que celle que tu connais.",
      "« Je suis ce que tu seras, dans soixante ans, si tu sors de cette cave par la porte de fer avec ton sablier. » Le vieux parle comme on dicte. « Tu as le temps d'un grain. Demande. »",
      "L'œil gris et l'œil brun vont à la canne, au gilet, aux mains. Ils reviennent au puits. « Jusqu'où ? — Une lieue. — J'avais calculé une lieue. À fond. Je ne l'avais montré à personne. — Tu me l'as montré. »",
      "« La Reine ? — Là-haut. Où tu l'as mise. — L'enfant ? » Le vieux ne répond pas tout de suite, et c'est dans ce silence que le jeune vieillit de dix ans. « Je voulais une chambre, dit-il. — Tu voulais la marge. Tu l'as eue. Elle a été large. »",
      "Le jeune regarde les poings qui le tiennent. Il regarde, au-dessus, la figure du vieillard, attentive, arrêtée. « Et lui ? — Il reste. — Il m'a appris à tenir une lime. — Je sais. »",
      "Le grain a fini. Le jeune ouvre la bouche sur une dernière question, et tu ne sauras pas laquelle : le gris la lui reprend, avec le reste, les yeux sur le vieux.",
      "Celui-ci demeure un moment sans bouger. Puis il revisse son bouchon, soigneusement. « Il a demandé pour l'enfant, dit-il sans se retourner. Cela non plus, je ne m'en souvenais pas. »",
      "Il s'appuie sur sa canne. « Montez. Je sais où vous courez : il y a sous cette cloche quelqu'un qui n'a pas un grain, et je n'ai, moi, aucun moyen d'arriver avant vous à mon âge. J'ai ici une conversation que j'attends depuis longtemps, et un grain par réplique. Nous nous reverrons. On n'achève rien, dans cette Tour, sans repasser par cette cave. »",
    ],
    choices: [
      { label: "Décrocher une clef à la ceinture du jeune", hide: { item: "clef_haute" }, fx: { item: "clef_haute", ep: ["histoire", 500] }, to: "K15r_clef" },
      { label: "Le laisser à sa conversation", to: "K15r_cave", big: true },
    ] },

  K15r_clef: { act: "V", title: "Deux clefs sur trois", place: "tour", ambiance: "chateau",
    text: [
      "Le jeune a un anneau à la ceinture, sous l'habit gris. Il y pend deux clefs, et la place d'une troisième. Tu as vu, dans une armoire à quarante crochets, les trois étiquettes qu'on leur avait ôtées.",
      "Tu prends la plus longue : du fer poli, un panneton à trois dents, un petit écu d'Aurime sur l'anneau. Elle vient sans bruit. Tu as fait cela à des pris toute ta vie, avec des égards ; à celui-ci, tu n'en mets aucun.",
      "« Les souris de Roquebise. » Le vieux n'a pas tourné la tête. « Prenez. Elle ouvre une chambre où je n'ai que faire, et dont la serrure a sa clef en dedans. Vous verrez. Je l'ai portée dix ans sur moi, celle-là, sans oser monter m'en servir. »",
    ],
    choices: [{ label: "La mettre dans ta ceinture", to: "K15r_cave" }] },

  K15r_neuf: { act: "V", title: "Les sourds", place: "tour", ambiance: "chateau",
    text: [
      "Ils sont neuf, en tablier vert, de dix-sept à vingt-cinq ans. Chacun a sa place, marquée sur le pavé d'un trait de craie, et chacun y est. Ils ont tous la figure tournée vers la barre.",
      "Sous les bandeaux gris, on voit dépasser un peu de cire, jaune, pétrie au pouce. Cette note leur a passé à côté, et elle continuera. Quand elle finira, ils s'ébroueront, ils se regarderont, et ils sortiront par la porte de fer sur leurs jambes, dans le silence de leur cire, sans comprendre tout de suite pourquoi le chien du portier ne se lève pas.",
      "Le plus grand, un roux, a un bras à demi tendu vers le levier, la bouche ouverte, en homme qui voit deux personnes se battre où il ne faut pas et qui n'a reçu d'ordre que pour le reste.",
      "Près du chevalet de droite, il y a sur le pavé une dixième marque : un petit papillon de craie. Personne n'est dessus.",
      "Ce sont des garçons. Tu en as vu de pareils, noirs, sur des marches, la paume ouverte. On leur a dit que c'était pour une chambre, et on leur a bouché les oreilles ; c'est une précaution qu'on prend avec les gens à qui l'on ne dit pas tout.",
    ],
    choices: [{ back: "K15r_cave" }] },

  K15r_ansel: { act: "V", title: "Au bout du coup", place: "tour", ambiance: "chateau",
    text: [
      "Il a treize ans. Il est à gauche du levier, les pieds écartés, et il a frappé : le maillet est sur la tête du coin, au bout du coup, les deux mains crispées sur le manche. Il a fermé les yeux en frappant.",
      { if: { has: "monde:ansel_travers" }, text: "Sa main gauche est devant. Le maillet porte de biais, d'un quart. Il a fait, les yeux fermés, ce qu'on lui a montré de la main hier, dans une cour ou sur une marche, et il a serré les dents pour le faire. Une larme est arrêtée sur sa joue, à mi-chemin." },
      { if: { not: { has: "monde:ansel_travers" } }, text: "Le maillet porte droit, bien à plat. C'est un beau coup. On le lui a appris, et il l'a donné de toute sa force, parce qu'à treize ans on tient à bien faire ce qu'on fait pour la première fois devant neuf grands." },
      "À sa ceinture, une montre neuve, d'argent, au bout d'un cordon. Elle marque midi. Elle a été réglée ce matin sur l'horloge de la Tour, et pour une fois une montre d'apprenti est juste à jamais.",
      { if: { item: "maillet_ansel" }, text: "Tu portes la main à ta ceinture. Tu as le même maillet, le même buis, les mêmes lettres au fer rouge. Le tien a soixante ans de plus, et il est tombé sur le manche. Tu regardes les deux à la fois. Tu ne les approches pas l'un de l'autre." },
      "Il s'appelle Hurel. Sa mère est veuve, rue de la Poulie, à l'enseigne du Dé.",
    ],
    choices: [{ back: "K15r_cave" }] },

  K15r_coudrier: { act: "V", title: "Du sang aux joues", place: "tour", ambiance: "chateau",
    text: [
      "C'est lui, et tu ne l'avais jamais vu. En 601, c'était une statue. Ici, c'est un vieillard de soixante-dix ans au milieu d'un effort : les veines du cou, les dents, une goutte de sueur à la tempe, ronde, qui n'a pas coulé.",
      "Ses deux poings sont fermés sur deux poignets gris. Il tire vers le haut. Il a les talons joints, par habitude, et cela lui ôte la moitié de sa force ; il n'a jamais appris à se battre, et il s'y est mis à soixante-dix ans, dans une cave, contre son meilleur élève.",
      "Sa pèlerine d'araignées s'est déchirée à l'épaule. Sa baguette est par terre, en deux morceaux ; il a dû frapper avec, d'abord, sur un bras ou sur une tête, comme on rappelle un apprenti. La virole de bronze s'est détachée. Elle roule vers le puits, sur sa tranche, et elle est arrêtée à un pied du bord.",
      { if: CHASSE, text: "Sa manche gauche est ouverte. Un fil y pend, d'un seul point, cassé net." },
      { after: "r:coudrier_eveille", text: "Tu lui as parlé. Tu lui parleras, plutôt : dans soixante ans, le temps d'un grain. Il te dira qu'il avait calculé cinquante-huit. Pour lui, cela n'a pas encore eu lieu, et tu te tais, par une politesse que tu ne saurais pas expliquer." },
      "Tu pourrais arrêter cette virole du pied. Tu la laisses. Tu sais où elle va : tu ne l'as pas trouvée.",
    ],
    choices: [{ back: "K15r_cave" }] },

  K15r_coin: { act: "V", title: "Le bronze blond", place: "tour", ambiance: "chateau",
    text: [
      "Le coin est dans sa rainure, enfoncé jusqu'à la tête, sous le maillet de l'enfant. Il est neuf. Il brille comme un louis.",
      { if: { has: "monde:ansel_travers" }, text: "Il est de travers, d'un quart. Tu le savais. Tu vois à présent ce que cela veut dire, sur du métal frais : la face de droite n'a pas mordu. Il tient par trois côtés." },
      { if: { not: { has: "monde:ansel_travers" } }, text: "Il est droit. Les quatre faces ont mordu ; le bronze de la rainure a fait autour une petite lèvre, repoussée, comme autour d'un clou bien planté." },
      { if: { all: [CHASSE, { has: "r:chasse_trouvee" }] }, text: "Contre la joue de la fente, par terre, il y a une tige de bronze, blonde, neuve. Elle vient de tomber : elle n'a pas fini de rebondir, et elle se tient sur un bout, penchée. Tu as la même à la ceinture, verte de soixante ans. Tu ne touches pas à celle-ci. Il faut qu'elle soit là dans soixante ans pour que tu l'aies ramassée." },
      { if: { all: [CHASSE, { not: { has: "r:chasse_trouvee" } }] }, text: "Contre la joue de la fente, par terre, il y a une tige de bronze, blonde, neuve, grosse comme le petit doigt. Elle vient de tomber d'une manche : elle n'a pas fini de rebondir, et elle se tient sur un bout, penchée. {autre} te l'avait écrit. Tu avais mieux à faire, tantôt, que de regarder par terre." },
      { if: { not: CHASSE }, text: "Par terre, contre la joue de la fente, il n'y a que le linge blanc de l'enfant, bien étalé, et dessus la place du coin, en creux." },
    ],
    choices: [
      { label: "Cueillir la tige de bronze avant qu'elle retombe", hide: { any: [{ not: CHASSE }, { has: "r:chasse_trouvee" }] }, fx: { item: "chasse_bronze", flag: "r:chasse_trouvee", ep: ["histoire", 800] }, to: "K15r_chasse" },
      { back: "K15r_cave" },
    ] },

  K15r_chasse: { act: "V", title: "Avant qu'elle retombe", place: "tour", ambiance: "chateau",
    text: [
      "Tu la prends entre deux doigts, par le haut, comme on cueille une libellule. Elle est tiède : elle sort d'une manche, où un coude la serrait.",
      "Elle est longue d'un empan, plate à un bout, et sur le plat un coup de lime a mordu d'un cheveu de trop. Tu la présentes à la rainure, par-dessous, sans frapper. Elle en a le profil.",
      "Tu la glisses dans ta ceinture. Quelque part, dans soixante ans, il y a une cave où elle manque par terre, et quelqu'un qui te ressemble ne l'y a pas cherchée. Ces choses-là s'arrangent entre elles, ou ne s'arrangent pas : tu es de la glane, et l'on y prend ce qui se trouve quand cela se trouve.",
    ],
    choices: [{ back: "K15r_cave" }] },

  K15r_puits: { act: "V", title: "La première rosée", place: "tour", ambiance: "chateau",
    text: [
      "Le puits de 541 n'a pas débordé. Il est à une main sous le pavé, plein, gris, avec ce bombement léger qu'a l'eau dans un verre trop rempli. La barre y entre jusqu'à mi-corps. Autour d'elle, le gris s'est creusé d'un rien, comme une étoffe sous un poids.",
      "Tu te mets à genoux. Sur le biseau du bord, il perle. Ce sont des grains, plus fins que ceux que tu as au cou, d'un gris plus clair, qui sortent de la pierre même, un à un, comme la sueur sort d'un front. Ils n'étaient pas là il y a un instant. Ils sont nés du onzième coup.",
      "Voilà donc d'où cela vient. Tout ce que tu as glané en six ans dans les fossés de la lisière, tout ce que la Maîtrise a vendu contre des forêts, tout ce qui tient debout quarante vieillards à joues de cire : c'est la sueur d'une chose qu'on empêche de respirer.",
      "Tu as les mains qu'il faut. Tu passes le pouce le long du biseau, sur tout le tour que tu peux atteindre, et tu fais tomber la récolte dans ton sachet. Elle est tiède. Elle pèse comme pèse le sable frais : à peine, et beaucoup.",
      "Dans le gris, très bas, il passe des formes. Tu ne les regardes pas. Celles-ci sont devant.",
    ],
    choices: [{ label: "Serrer le lacet", fx: { stock: { sable: 4 }, flag: "r:rosee", ep: ["histoire", 600] }, to: "K15r_cave" }] },

  K15r_fil: { act: "V", title: "Une corde de viole", place: "tour", ambiance: "chateau",
    text: [
      "Le fil monte du milieu de la barre à l'œil de la voûte. En 601, il était raide et net. Ici, il est flou : sur toute sa longueur, il a l'épaisseur d'un doigt, pâle, comme une corde de viole au moment où l'archet la quitte. Il vibre, et sa vibration s'est arrêtée au plus large.",
      "C'est par lui que tout tient ensemble. Une barre en bas, un marteau en haut, et entre les deux trois cent soixante marches de laiton tendu. On a tiré dessus onze fois ce matin.",
      "Tu lèves les yeux dans l'œil de la voûte. Le rond de jour est toujours là-haut, de la grosseur d'un grain de mil, et quelque chose le bouche à demi : une tête penchée, qui s'en va, très lentement, comme la lune quitte un puits.",
    ],
    choices: [{ back: "K15r_cave" }] },

  K15r_berceaux: { act: "V", title: "Ce qu'il avait commandé", place: "tour", ambiance: "chateau",
    text: [
      "Les douze berceaux sont neufs, vides, chevillés de frais. Le charpentier a laissé son crayon sur le quatrième. Les tuyaux manquent, et la porte de fer du dixième : c'est un mur plein, où l'on a seulement tracé à la sanguine un rectangle, et dedans, d'une écriture fine : *percer ici.*",
      "Il avait tout prévu, même la porte par où il descendrait dîner.",
      "Au fond, la grille du Droit. Elle est blonde, elle aussi, sous une couche de cire qu'on vient de passer. Derrière ses barreaux, le boyau s'en va tout droit, noir, avec sa règle de laiton.",
      { after: "r:voie_droit", text: "Tu es venu{e} par là. Tu viendras par là, dans soixante ans, en laissant de la peau à cette grille ou une clef dans sa serrure. À trente toises derrière ces barreaux, dans le noir, il y a un homme à plat ventre, la figure passée au bouchon, qui vient de s'arrêter au milieu d'une brassée. Tu lui as laissé une noisette." },
      { before: "r:voie_droit", text: "On t'a parlé de ce chemin. Tu as pris l'autre." },
    ],
    choices: [{ back: "K15r_cave" }] },

  // ---------- the climb ----------
  K15r_marches: { act: "V", title: "Quatre-vingts, à l'envers", place: "tour", ambiance: "chateau",
    text: [
      "Tu prends l'escalier. Il est vide. Personne n'a jamais gardé ces marches avant qu'on ait eu quelque chose à voler dessous.",
      "Tu montes en courant, la main au mur, le vide à droite. Tes sabots font un bruit de sabots, et c'est le seul de la Tour : il te revient de la voûte, net, en retard d'un pas, comme si quelqu'un te suivait pour te ressembler.",
      "Au tournant, la niche. Elle est propre. La poussière y manque encore : il y a sur la pierre du fond la marque humide d'un dos, et sur la paroi des rayures fraîches, blanches, par paquets de quatre. Le dernier mot brille. *JUSTE.* On s'est levé d'ici il y a onze coups.",
      "Soixante marches encore. À la quarante et unième, la pierre est muette : elle est scellée de frais, et il faudra soixante ans de bottes pour l'ébranler.",
    ],
    choices: [{ label: "Le palier", to: "K15r_palier", big: true }] },

  K15r_palier: { act: "V", title: "Onze heures et cinq, pour toujours", place: "tour", ambiance: "chateau", hub: true, backName: "le palier",
    text: [
      { first: true, text: "Le palier de pierre. Tu l'as connu avec deux lanternes, une herse, une chaîne plombée. Tout cela manque. Il y a une porte de fer, à gauche, entrebâillée de la largeur d'une épaule mince, et par cette fente il entre une lame de soleil qui coupe le dallage en deux." },
      { first: true, text: "Tu t'arrêtes devant cette lame. C'est du soleil de 541. Il est jaune. Tu avais oublié, depuis la lisière, qu'il pouvait l'être à cet endroit du monde." },
      { first: true, text: "La pendule de service est au mur. Elle marche : elle marchait. Son balancier est au bout de sa course, de côté. Elle dit midi. Dessous, on a écrit à la craie, ce matin, d'une main de sergent : *Onze heures et cinq. Il est descendu.* La craie est fraîche. Dans soixante ans, ce sera de l'encre, et on aura voulu la gratter." },
      { again: true, text: "Le palier, la lame de soleil jaune, la pendule sur midi." },
    ],
    choices: [
      { label: "Mettre l'œil à la porte de fer", hide: { seen: "K15r_ruelle" }, fx: { flag: "r:vu_ruelle", ep: ["histoire", 500] }, to: "K15r_ruelle" },
      { label: "La vis : deux cent quatre-vingts marches", to: "K15r_vis", big: true },
    ] },

  K15r_ruelle: { act: "V", title: "La ruelle des Sonneurs", place: "tour", ambiance: "chateau",
    text: [
      "Tu passes la tête par la fente. Le soleil te tombe sur la figure, d'un coup, chaud, comme une main.",
      "C'est une ruelle. Tu l'as vue ce matin, grise, barrée d'une herse, avec six noirs devant. Elle a des murs blonds, un ruisseau qui brille, une touffe de giroflée dans une lézarde, jaune à faire mal. Une borne, à dix pas. Sur la borne, la place d'un corps, dans la poussière : quelqu'un s'y est assis longtemps, et il s'en est levé il y a une heure.",
      { if: { has: "monde:josquin_debout" }, text: "Un garçon de dix-sept ans est debout près de la borne, en tablier de cuir, les deux mains à plat sur les oreilles. Il a un charbon à la ceinture. Il regarde vers la place, la bouche serrée, avec la figure de quelqu'un qui s'était juré de tout voir et qui commence. Tu as cherché du charbon sur vos murs, toute une journée, sans savoir de qui." },
      { if: { not: { has: "monde:josquin_debout" } }, text: "Contre la porte même, à tes pieds, un garçon de dix-sept ans est assis, en tablier de cuir, le dos au fer. Il a levé le front. Il a la bouche sur un chiffre. Il gardait cette porte, et la porte lui a passé par-dessus." },
      "À l'entrée de la ruelle, quatre hommes à rubans verts, la tête dans les épaules, comme sous une averse. Tu les connais : ils ont le nez en l'air depuis soixante ans, à ce qu'on voit d'une fenêtre de la Guilde.",
      { if: { has: "monde:coudrier_par_j" }, text: "Le plus gros a un chapeau de trop : noir, à larges bords, de travers. Tu ris, tout seul{e}, la tête dans une porte. On te l'avait écrit, d'une étoile de cuivre." },
      "Au-delà, la place. D'ici, tu n'en vois qu'une tranche, entre deux murs : des épaules, des chapeaux en l'air, une balle rouge. Et des couleurs. Tu n'as jamais vu cette ville qu'en gris. Elle était bleue, brune, cerise, vert pomme ; elle avait des rubans.",
    ],
    choices: [{ back: "K15r_palier" }] },

  K15r_vis: { act: "V", title: "Deux cent quatre-vingts", place: "tour", ambiance: "chateau",
    text: [
      "Tu passes sous la place où il y aura une chaîne. La vis tourne à gauche, dans l'épaisseur du mur, autour de son puits vide, et le fil est là, au milieu, flou, large d'un doigt, à portée de ta main. Tu n'y touches pas.",
      "Tu montes quatre à quatre. Un glaneur monte bien : on apprend cela dans les clochers pris, où le plomb des toits se revend. Tu comptes par dizaines, en soufflant. Ton sablier chuinte contre ta poitrine ; il file ses grains par quatre, par cinq ; et tu sais, sans regarder, ce que te coûte chaque tour.",
      "Tous les vingt degrés, une meurtrière. Il y passe du jaune, du bleu, des fumées penchées.",
      "À la soixantième marche, tu glisses. Un mouchoir de dame, sur la pierre, en batiste, avec un chiffre brodé. Plus haut, un ruban. On est descendu par ici en pleurant, il y a une demi-heure, et l'on n'a rien ramassé.",
    ],
    choices: [
      { label: "T'arrêter le temps d'un souffle, à une meurtrière", hide: { seen: "K15r_faces" }, fx: { flag: "r:vu_faces", ep: ["perso", 800] }, to: "K15r_faces" },
      { label: "Monter", to: "K15r_baudouin", big: true },
    ] },

  K15r_faces: { act: "V", title: "De face", place: "tour", ambiance: "chateau",
    text: [
      "Tu colles la figure à la fente, le temps de reprendre de l'air. Elle donne sur la place.",
      "Tu les connais. Tu as campé deux jours derrière eux. Tu sais par cœur la nuque du boulanger, le chignon de la fermière qui lève son enfant, le dos des trois mendiants de la margelle. Tu as rampé entre leurs jambes ; tu as dormi contre leurs mollets.",
      "Les voilà de face.",
      "Ils sont cinq mille, et ils te regardent. Ils regardent le cadran, au-dessus de toi, mais d'ici c'est la même chose : cinq mille figures levées, que tu n'avais jamais vues, sur des dos que tu connaissais. Le boulanger a une moustache rousse, et il rit. La fermière est très jeune. L'enfant qu'elle tient à bout de bras, depuis soixante ans, pour qu'il voie, a la bouche barbouillée de mûres, et il voit.",
      "Tu avais fini par croire que c'étaient des dos. On s'habitue. On dit *les pris*, comme on dit *les pierres.* Ce sont des gens qui avaient pris leur souffle pour crier *douze*, un jour de fête, et qui l'ont encore.",
      "Tu repars. Tu montes plus vite.",
    ],
    choices: [{ label: "Monter", to: "K15r_baudouin", big: true }] },

  K15r_baudouin: { act: "V", title: "Un pied en l'air", place: "tour", ambiance: "chateau",
    text: [
      "Vers la centième marche, quelqu'un te barre la vis.",
      "C'est un grand garçon blond, en tablier vert, un bandeau gris sur les oreilles. Il redescendait. Le coup l'a trouvé un pied en l'air, la main à la corde qui sert de rampe.",
      { if: { has: "monde:corde_coupee" }, text: "Il a un couteau de sellier à la main, court, large. Il y a trois brins de chanvre sur la lame, blonds. Tu regardes le chanvre. Tu regardes le haut de la vis. Tu ne sais pas encore ce qu'il a coupé, et tu le sais déjà : dans cette Tour, il n'y a qu'une chose en chanvre qui vaille un couteau." },
      { if: { has: "monde:corde_entiere" }, text: "Il a les mains vides. Son couteau, s'il en a un, est au fourreau ou ailleurs. Il a sur la figure l'embarras d'un garçon qu'on a envoyé faire une chose et qui redescend sans l'avoir faite." },
      { if: { not: { any: [{ has: "monde:corde_coupee" }, { has: "monde:corde_entiere" }] } }, text: "Tu ignores ce qu'il est monté faire. Il a la figure d'un garçon qui en redescend." },
      "Il faut le contourner, sur une marche large d'un pied. Tu passes sous son bras. Il est tiède, et il sent la cire.",
      { after: "r:rosee", text: "Tu pourrais lui poser un grain sur la main. Il s'éveillerait dans son silence, sur une marche, devant quelqu'un en sabots, et il n'entendrait pas ta question. Tu gardes ton grain." },
    ],
    choices: [{ label: "Les quarante dernières", to: "K15r_seuil", big: true }] },

  K15r_seuil: { act: "V", title: "La porte basse", place: "tour", ambiance: "chateau",
    text: [
      "Tu cries son nom entre deux paliers. Tu ne l'as jamais dit qu'à une table, il y a neuf jours, et tu l'as lu depuis sur la couverture d'un Cahier, où tu as mis une heure à le déchiffrer. Il sort tout de travers. La vis le mange.",
      "Tu écoutes. La note. Ton sablier. Et, plus haut, à main droite, quelque chose : un bruit de gorge, très lent, étiré, qui commence et qui cherche son bout. C'est ce que fait une bouche qui voudrait dire un mot.",
      "Tu connais ce bruit. Les Lents le font, sur la lisière, quand on leur parle. On met un jour à l'entendre en entier.",
      "À la cent quarantième marche, une porte basse, à droite, ouverte sur du jour.",
    ],
    choices: [{ label: "T'y jeter", to: "M15", big: true }] },
});

module.exports = { passages: P, extras: {
  items: {
    clef_haute: { name: "Clef de la Chambre haute", kind: "divers", keep: true, price: 0, desc: "Du fer poli, un panneton à trois dents, un petit écu d'Aurime sur l'anneau. Prise à la ceinture d'un homme en gris de trente ans, dans l'instant du onzième coup." },
  },
} };
