// Les Trois Clefs d'Aiguemorne · act III, the hand (1/2): down into the quarries of Ossevaux, All Saints' Day.
// Shared marks: monde:a3:vieux_fer (an old key of the right grey for the forger), monde:a3:chemin (the dry way under
// the crypt is open; without it only the drowned gallery leads there), monde:a3:fil_noir (the Black-Gloves' thread
// was found and cut). Personal: a3:m_entree=puits|trappe|bouche, a3:m_plaques, a3:m_cubitus, a3:m_gamin, a3:m_noir
// (lantern lost), a3:m_mouille. Ends at A3m_fondations (lot a3_main2).
var LUM = [{ if: { item: "lanterne" }, v: 5 }, { if: { item: "lampe_fosse" }, v: 5 }, { if: { item: "rat_de_cave" }, v: 5 }, { if: { has: "a3:m_noir" }, v: -15 }];
module.exports = {
  passages: {
    A3m_matin: { act: "III", title: "Trois bouches", place: "larron",
      fx: { until: 6 },
      text: [
        "Tu te lèves avant le jour. Les cloches de la Toussaint ne sonnent pas encore ; il n'y a que le chant, sous le plancher du monde, et il te semble ce matin qu'il t'attend.",
        "Fifrelin dort en travers de l'escalier. Tu l'enjambes. Il t'attrape la cheville sans ouvrir les yeux, et récite, de sa voix de sommeil, ce qu'il t'a promis hier :",
        "« Trois bouches. Le puits de la cour : y a un trou dans la paroi, à mi-hauteur, je l'ai vu en descendant un caillou au bout d'une ficelle. La trappe du marchand de couronnes, rue Basse, sous son comptoir ; il ouvre à sept heures, sa serrure est de la camelote. Et la Bouche-aux-Os, au pied de la falaise, par où les Rangeurs rentrent les hottes. Celle-là, t'as qu'à avoir l'air de porter quelque chose. »",
        "Il lâche ta cheville et se rendort.",
        "Tu as ta lumière, tes outils, un quignon. Tu as aussi, pliée dans ta manche, une feuille de papier fort et une mine de plomb que Maître Crochemore t'a remises hier soir comme on remet une épée, en disant : « Cotez tout. Un dessin sans cotes est une opinion. »",
      ],
      choices: [
        { label: "Le puits de la cour", to: "A3m_puits", fx: { set: { "a3:m_entree": "puits" } } },
        { label: "La trappe du marchand de couronnes", to: "A3m_trappe", fx: { set: { "a3:m_entree": "trappe" } } },
        { label: "La Bouche-aux-Os, une hotte sur le dos", to: "A3m_bouche", fx: { set: { "a3:m_entree": "bouche" } } },
      ] },

    A3m_puits: { act: "III", title: "Un puits qui respire", place: "larron", ambiance: "nuit",
      text: [
        "La cour est noire. Tu noues ta corde à la potence du puits, tu enjambes la margelle, et tu descends dans cette haleine tiède qui monte, les pieds à plat contre une maçonnerie que la craie a rendue grasse.",
        "À six toises, la maçonnerie cesse. Dessous, c'est la roche vive, blanche, où le pic a laissé ses coups de dent, vieux de mille ans et nets comme d'hier. À neuf toises, le souffle te vient de côté.",
        "Il y a un trou dans la paroi, à hauteur de ta hanche : une gueule carrée, taillée, large comme une huche. Elle est à une bonne enjambée de ta corde, et le puits, sous toi, continue.",
      ],
      choices: [
        { label: "Te balancer, et lâcher au bon moment",
          test: { dom: "nature", diff: 5, label: "Un saut de côté, à neuf toises", help: [{ if: { voie: "coureur" }, v: 15 }, { if: { item: "corde_soie" }, v: 10 }, { if: { item: "corde" }, v: 5 }] },
          win: { fx: { ep: ["perso", 600] }, to: "A3m_galerie" }, lose: { fx: { pv: -4 }, to: "A3m_galerie" } },
      ] },
    A3m_trappe: { act: "III", title: "Les invendus", place: "ossevaux",
      text: [
        "La rue Basse dort. La boutique *Aux Regrets Éternels* a ses volets mis, et sur ses volets une serrure à bosse dont le gamin a dit vrai.",
        "Dedans, cela sent l'immortelle sèche et la colle. Les couronnes pendent au plafond par centaines, en perles noires, en perles violettes, chacune avec son ruban : À MON ÉPOUX. À NOTRE MÈRE. À MON PARRAIN. Tu avances là-dessous courbé{e}, comme sous une treille.",
        "La trappe est sous le comptoir. L'échelle descend dans une cave, et la cave est le cimetière de la boutique : là s'entassent les couronnes qu'on n'a jamais vendues, celles dont le ruban tombait mal. À MON ONCLE ET BIENFAITEUR, quatorze exemplaires. À MA BELLE-MÈRE, une pile jusqu'à la voûte. Une seule, toute petite, poussiéreuse, à ruban blanc : À MON CHIEN.",
        "Au fond de la cave, derrière les belles-mères, le mur est de planches. Derrière les planches, il y a du noir, et un courant d'air.",
        "Au-dessus de ta tête, un pas. Le marchand se lève tôt.",
      ],
      choices: [
        { label: "Déclouer deux planches sans qu'il en entende une",
          test: { dom: "discretion", diff: 5, label: "Deux planches, quatre clous, un homme au-dessus", help: [{ if: { voie: "crocheteur" }, v: 15 }, { if: { item: "rossignols" }, v: 5 }] },
          win: { fx: { ep: ["perso", 600] }, to: "A3m_galerie" }, lose: { to: "A3m_trappe_ko" } },
      ] },
    A3m_trappe_ko: { act: "III", title: "À mon oncle", place: "ossevaux",
      text: [
        "Le quatrième clou crie. Le pas, là-haut, s'arrête ; la trappe s'ouvre ; une chandelle descend, et derrière la chandelle un bonnet de coton.",
        "Tu n'as le temps que d'un geste, et tu fais le premier venu : tu saisis une couronne, tu la tiens devant toi à deux mains, et tu prends la figure de quelqu'un qui hésite.",
        "Le marchand te regarde. Il regarde la couronne. Il a vendu toute sa vie à des gens en larmes, à toute heure, et rien ne l'étonne d'une clientèle qui ne dort pas.",
        "« *À mon oncle et bienfaiteur*, lit-il. C'est un beau modèle. On n'en fait plus. Dix sous, parce que c'est vous. »",
        "Tu paies. Il remonte se coucher, en te recommandant de tirer la porte. Tu poses la couronne sur la pile, et tu achèves tes planches.",
      ],
      fx: { gold: -10 },
      choices: [{ label: "Passer derrière les planches", to: "A3m_galerie", big: true }] },
    A3m_bouche: { act: "III", title: "La Bouche-aux-Os", place: "ossevaux",
      text: [
        "Au pied de la falaise, du côté où le soleil ne vient pas, la craie s'ouvre par une arche basse, cintrée, fermée d'une grille. C'est par là que la ville rend au sol ce qu'elle lui a pris : quand une concession tombe, on lève les os, on les monte en hottes, et les Rangeurs les descendent à l'ossuaire.",
        "Ils sont une douzaine, ce matin, qui attendent l'ouverture en soufflant dans leurs doigts : des hommes voûtés, en sarrau blanc de craie, la hotte d'osier au dos. Les hottes sont pleines. Il en dépasse des choses longues et jaunes, que la rosée a mouillées.",
        "Il y a une hotte de trop, posée contre le mur. Son homme est allé boire la goutte.",
      ],
      choices: [
        { label: "La charger, et entrer dans la file",
          test: { dom: "social", diff: 0, label: "Avoir l'air de porter quelque chose", help: [{ if: { voie: "comedien" }, v: 15 }, { if: { voie: "rebouteux" }, v: 10 }] },
          win: { fx: { ep: ["perso", 600] }, to: "A3m_bouche_ok" }, lose: { to: "A3m_bouche_ko" } },
      ] },
    A3m_bouche_ok: { act: "III", title: "Trente livres de bourgeois", place: "ossevaux",
      text: [
        "La hotte pèse trente livres, et sonne creux à chaque pas, d'un bruit de quilles. Tu prends le dos rond, le pas traînant, l'œil à terre. La grille s'ouvre. Le portier compte les hottes à la craie, sans compter les hommes : on ne vole pas des os.",
        "« Carré des Drapiers, dit celui qui marche devant toi, sans se retourner. Concession de trente ans, non renouvelée. Les héritiers ont trouvé que c'était cher. » Il crache. « Tu les verses au fond, à main gauche. Le vieux les triera. »",
      ],
      choices: [{ label: "Suivre la file dans la craie", to: "A3m_galerie", big: true }] },
    A3m_bouche_ko: { act: "III", title: "Le propriétaire", place: "ossevaux",
      text: [
        "Tu as la hotte sur une épaule quand son homme revient, la moustache encore mouillée. Il te regarde. Il regarde sa hotte.",
        "« C'est mon drapier », dit-il.",
        "Il le dit sans colère : il constate. Tu lui tends un écu, qu'il examine à la lueur du fanal. Il a vite fait le calcul de ce que vaut une matinée de hotte, et de ce que vaut le silence.",
        "« Porte-le, alors. Fais attention, il a un fémur qui dépasse. » Il retourne à la goutte.",
      ],
      fx: { gold: -20 },
      choices: [{ label: "Entrer avec le drapier", to: "A3m_galerie", big: true }] },

    // ───────────────────────────── The first galleries ─────────────────────────────
    A3m_galerie: { act: "III", title: "La ville d'en dessous", place: "carrieres", ambiance: "nuit",
      text: [
        { if: { has: "a3:m_entree=puits" }, text: "Tu roules dans le trou sur l'épaule, et tu restes un moment à plat ventre, à écouter ta corde battre contre la paroi du puits." },
        { outcome: "lose", text: "Tu y as laissé la peau d'un coude et quelque chose de ta fierté." },
        "Puis tu lèves ta lumière.",
        "C'est une rue. Elle est blanche, droite, haute de dix pieds, large à passer deux charrettes, et elle s'en va devant toi jusqu'où ta lueur renonce. D'autres rues la coupent, à angle droit, toutes pareilles. Les carriers d'autrefois ont tiré de là une cathédrale, pierre à pierre, et ils ont laissé en creux, sous la ville des vivants, une ville de même plan, dont les maisons seraient des piliers de craie et dont le ciel serait la roche.",
        "Tu n'avais jamais su ce que c'est que le silence. Là-haut, il y a toujours un chien, une charrette, le sang dans tes oreilles. Ici, la craie boit tout. Ton pas ne fait pas de bruit. Ta voix, quand tu l'essaies, tombe à deux pieds de ta bouche, comme une pierre dans la farine.",
        "Seul le chant passe. Il n'a plus de direction. Il sort des murs.",
        "À chaque carrefour, à hauteur d'homme, on a gravé quelque chose dans le pilier d'angle : des lettres, que tu approches.",
      ],
      choices: [{ label: "Lire ce qui est gravé", to: "A3m_plaques", big: true }] },
    A3m_plaques: { act: "III", title: "Des noms de rues", place: "carrieres", ambiance: "nuit",
      text: [
        "*R. BASSE.* Et sur l'autre face du pilier : *R. DES LARMES, côté du levant.*",
        "Tu comprends, et tu admires. Les carriers travaillaient à l'aveugle sous des maisons qu'il ne fallait pas faire tomber ; ils ont donc écrit le dessus sur le dessous. Chaque galerie porte le nom de la rue qu'elle double. On marche dans Ossevaux à vingt toises sous Ossevaux, et l'on peut y demander son chemin aux murs.",
        "Reste à les lire. Les plus vieilles inscriptions sont en lettres de forme, mangées par le salpêtre ; les rues, là-haut, ont changé de nom trois fois en mille ans ; et il y a des galeries sans rien, qui passent sous des jardins, ou sous des morts.",
      ],
      choices: [
        { label: "Dresser, de tête, le plan du dessus sur celui du dessous",
          test: { dom: "savoir", diff: 5, label: "Retrouver le parvis à vingt toises sous terre", help: [{ if: { voie: "coureur" }, v: 10 }, { if: { seen: "A3c_parvis" }, v: 10 }, { if: { seen: "A3c_concessions" }, v: 5 }] },
          win: { fx: { flag: "a3:m_plaques", ep: ["perso", 600] }, to: "A3m_ossuaire" }, lose: { to: "A3m_ossuaire" } },
      ] },

    // ───────────────────────────── The ossuary ─────────────────────────────
    A3m_ossuaire: { act: "III", title: "Le Grand Rangement", place: "carrieres", ambiance: "nuit", hub: true, backName: "la nef de l'ossuaire",
      text: [
        { first: true, text: { if: { has: "a3:m_plaques" }, text: "*R. DES MARBRIERS. PLACE, côté du couchant.* Tu tiens ton fil : tu es sous la place des Dalles, et la cathédrale est devant toi, à trois cents pas.", else: "Les noms se brouillent. Tu prends la galerie la plus large, parce qu'elle descend et que tout ce que tu cherches est plus bas." } },
        { first: true, text: "Elle débouche dans une salle, et tu t'arrêtes sur le seuil, ta lumière au bout du bras." },
        { first: true, text: "On a rangé là mille ans d'Ossevaux. Les murs sont en os : des tibias couchés bout à bout, par assises régulières, serrés comme des bûches, et tous les trois pieds un rang de crânes, face au visiteur, en frise. Cela monte jusqu'à la voûte. Cela s'en va des deux côtés plus loin que ta lueur. Quelqu'un a passé sa vie à ce que ce soit droit." },
        { first: true, text: "Et c'est classé. Au-dessus de chaque travée, un cartouche de craie : BOULANGERS. DRAPIERS. GENS DE LOI. Chez les boulangers, on a fait une gerbe avec des côtes. Chez les gens de loi, les crânes sont tournés de trois quarts, comme des hommes qui se consultent. Tu passes devant les CHIRURGIENS, où il manque beaucoup de monde." },
        { again: true, text: "La nef de l'ossuaire : les murs de tibias, les frises de crânes, les cartouches des métiers. Une lueur bouge, au fond, du côté où quelqu'un travaille." },
      ],
      choices: [
        { label: "Aller voir qui travaille, au fond", to: "A3m_cubitus", once: true },
        { label: "T'arrêter devant la travée des SERRURIERS", to: "A3m_mur_clefs", once: true },
        { label: "T'arrêter devant celle des HORLOGERS", to: "A3m_cadran", once: true },
        { label: "Suivre un bruit de voix aiguës, dans une galerie latérale", to: "A3m_dents", once: true },
        { label: "Prendre la galerie qui s'enfonce vers la cathédrale", to: "A3m_descente", big: true },
      ] },

    A3m_cubitus: { act: "III", title: "Le père Cubitus", place: "carrieres", ambiance: "nuit",
      text: [
        "Il est à genoux devant un tas, sous un fanal accroché à un fémur. C'est un très vieil homme, blanc de craie, sec, cassé en deux par soixante ans de voûtes basses, et qui a fini par ressembler à ce qu'il range. Il prend un crâne dans le tas, le tourne vers la lumière, lui regarde les dents, et le pose sur une étagère avec un mot aimable.",
        "« Un drapier. Vois-tu ces molaires ? Du pain blanc toute sa vie. Je te mets à côté de ton confrère, vous parlerez boutique. »",
        "Il a senti ta lumière avant de te voir. Il ne se retourne pas.",
        "« Tu n'es pas des miens : mes hommes traînent les pieds. Tu n'es pas de Monseigneur : ses Suisses sonnent comme une batterie de cuisine. Tu viens donc par curiosité, ou pour les dents. » Il prend un autre crâne. « Dans les deux cas, ne touche à rien. J'ai mis cinquante-huit ans à ce que ce soit en ordre. »",
        "On l'appelle le père Cubitus. Il a dû avoir un autre nom ; il l'a rangé quelque part.",
      ],
      choices: [
        { label: "« C'est le plus bel ouvrage que j'aie vu sous terre. Qui a eu l'idée des métiers ? »",
          test: { dom: "social", diff: 0, label: "Parler à un homme de son œuvre", help: [{ if: { voie: "comedien" }, v: 10 }, { if: { voie: "rebouteux" }, v: 10 }, { if: { has: "a3:m_entree=bouche" }, v: 10 }] },
          win: { fx: { flag: "a3:m_cubitus", ep: ["perso", 600] }, to: "A3m_cubitus_dit" }, lose: { to: "A3m_cubitus_tait" } },
        { label: "Lui remettre un fémur d'aplomb, sans rien dire, et attendre", if: { voie: "rebouteux" }, hide: { not: { voie: "rebouteux" } }, fx: { flag: "a3:m_cubitus", ep: ["perso", 600] }, to: "A3m_cubitus_dit" },
        { back: "A3m_ossuaire" },
      ] },
    A3m_cubitus_dit: { act: "III", title: "Cinquante-huit ans de rangement", place: "carrieres", ambiance: "nuit",
      text: [
        "Il se retourne enfin. Il a des yeux très pâles, presque sans couleur, qui ont pris le parti de se passer du jour.",
        "« C'est moi. » Il le dit avec une simplicité d'empereur. « Avant moi, on versait. En tas. Le notaire sur le charretier, la dame sur le pendu. Des gens qui ne s'étaient jamais adressé la parole. J'ai trouvé cela inconvenant. »",
        "Une fois parti, il ne s'arrête plus. Il te montre ses apothicaires, qu'il a rangés par ordre de dentition, ses musiciens, dont il a fait une lyre. Il t'explique qu'on reconnaît un tailleur à l'usure des incisives, où il coupait son fil, et un sonneur à l'épaule. Il n'a parlé à personne depuis la Saint-Michel.",
        "Tu glisses, dans un silence, que l'on dit la ville plus creuse encore sous l'église.",
        "« Le Vieux Chantier. » Il hoche sa tête blanche. « C'est par là qu'on a commencé, sous le chœur même : la pierre y était la plus fine. J'y ai rangé, à vingt ans, les premiers chanoines. Monseigneur l'a fait fermer l'année de son sacre, il y a quarante ans, par une porte de fer au bout de la galerie des Chantres. Depuis, il y descend seul, par chez lui. Je ne sais pas ce qu'il y range. » Il y a là une jalousie de collectionneur.",
        "« Il y a la porte. Elle a une grille de caveau, du modèle ordinaire ; Monseigneur est économe. Et il y a l'eau. Sous la galerie des Chantres en passe une autre, plus vieille, que la nappe a noyée : elle ressort de l'autre côté de la porte, dans le Vieux Chantier, par un escalier. Je l'ai faite la même année, pour une gageure. On retient son souffle le temps de dire un *De profundis*, et il vaut mieux le dire vite. »",
        "Il te regarde, de ses yeux d'eau.",
        "« Tu vas y aller. Ça se voit à ta façon de ne pas demander pourquoi je te le dis. Quand tu passeras devant mes chanoines, ne les dérange pas. Ils sont par ordre de préséance. »",
      ],
      choices: [{ back: "A3m_ossuaire" }] },
    A3m_cubitus_tait: { act: "III", title: "Un homme occupé", place: "carrieres", ambiance: "nuit",
      text: [
        "« L'idée. » Il renifle. « Les curieux demandent toujours qui a eu l'idée. Personne ne demande qui a porté les hottes. »",
        "Il se remet à son tas. Il te tourne un dos de craie, voûté, définitif, et tu comprends que tu viens d'être rangé toi aussi, dans une travée qui n'a pas de cartouche.",
        "« La sortie est derrière toi. Le fond, c'est par là, et c'est fermé. Ne touche à rien. »",
      ],
      choices: [{ back: "A3m_ossuaire" }] },

    A3m_mur_clefs: { act: "III", title: "Les clefs de baptême", place: "carrieres", ambiance: "nuit",
      text: [
        "La travée des serruriers n'a pas de gerbe, pas de lyre. Elle a un mur de clefs.",
        "On naît à Aiguemorne une clef au cou, et l'on y meurt de même ; quand la concession tombe et que les Rangeurs lèvent les os, ils trouvent la clef parmi les côtes. Le père Cubitus n'a pas voulu les jeter. Il les a pendues, une à une, à des clous de fer plantés dans la craie, par rangs, par années, et il y en a du sol à la voûte, sur vingt pas de long : dix mille clefs de baptême, noires, rousses, vertes, qui ne tremblent même pas, faute d'air.",
        "Tu portes la main à la tienne, sous ta chemise.",
        "Les plus vieilles sont en haut, à gauche. Tu lèves ta lumière. Celles-là sont d'un autre métal que les autres : un fer gris, mat, couleur de cendre, sans une piqûre de rouille après un siècle de cave. On ne forge plus de ce fer. Maître Crochemore, hier soir, a dit *du même gris*, et il a cherché une heure dans sa caisse sans trouver.",
        "Elles sont à portée de ta main, sur leur clou. Chacune a été quelqu'un.",
      ],
      choices: [
        { label: "En décrocher une, la plus fruste, et laisser un sou sur le clou", fx: { flag: "monde:a3:vieux_fer", gold: -1, ep: ["perso", 400] }, to: "A3m_mur_clefs_pris" },
        { label: "Les laisser où un vieil homme les a mises", fx: { ep: ["perso", 400] }, back: "A3m_ossuaire" },
      ] },
    A3m_mur_clefs_pris: { act: "III", title: "Un sou sur un clou", place: "carrieres", ambiance: "nuit",
      text: [
        "Tu choisis longtemps. Tu en prends une petite, à l'anneau usé, dont le numéro s'est effacé : celle de quelqu'un dont il ne reste, à présent, pas même le chiffre.",
        "Tu pèses le sou dans ta main avant de le poser sur le clou. C'est un marché de voleur, et tu le sais : le mort n'a rien demandé, et il n'a pas l'usage d'un sou. Tu le poses tout de même. Il y a des dettes qu'on règle pour soi.",
        "La clef est froide, et plus lourde qu'elle n'en a l'air.",
      ],
      choices: [{ back: "A3m_ossuaire" }] },

    A3m_cadran: { act: "III", title: "L'heure de midi", place: "carrieres", ambiance: "nuit",
      text: [
        "Aux horlogers, le père Cubitus s'est surpassé. Il a fait un cadran.",
        "Il est grand comme une roue de moulin, à plat contre le mur, dans un cercle de vertèbres. Les heures y sont marquées par des crânes, un par heure, posés sur de petites consoles ; deux fémurs, croisés au centre, font les aiguilles, arrêtées sur six heures. Sous chaque crâne, un nom à la mine de plomb : des maîtres des Heures d'Aiguemorne, morts depuis deux cents ans, chacun à son rang d'ancienneté.",
        "Il y a onze crânes. La console de midi est vide.",
        "Dessous, de la même mine de plomb, le vieux a écrit : *Réservé. Maître Aubry Crochemore, quand Aiguemorne voudra bien le rendre.*",
        "Le bâtisseur du Juge dort donc là-haut, dans sa ville, sous son marbre, avec les honneurs. Tu regardes la console vide, et tu penses à l'arrière-petit-fils, qui lime en ce moment au-dessus de ta tête, et qui a cherché hier, dans tous les registres de cette ville, une Crochemore que personne n'a songé à réclamer.",
      ],
      choices: [{ back: "A3m_ossuaire" }] },

    A3m_dents: { act: "III", title: "Les arracheurs", place: "carrieres", ambiance: "nuit",
      text: [
        "La galerie latérale est basse, sale, sans cartouche : un rebut de l'ossuaire, où l'on versait avant le père Cubitus. Trois enfants y sont accroupis autour d'un bout de chandelle. Le plus grand a neuf ans. Ils ont chacun un clou, un caillou, et un sac de toile ; ils font sauter des dents.",
        "Ils te voient. La chandelle s'éteint sous une main. Tu entends détaler deux paires de pieds nus.",
        "La troisième ne détale pas. Il y a, dans le noir, un bruit d'étoffe qui racle, un souffle court, puis une voix toute petite, qui s'applique à ne pas pleurer :",
        "« Je suis pris. »",
        "Tu rallumes. Au fond du rebut, la paroi a un trou rond, de la largeur d'un seau, par où les deux autres ont filé. Le dernier s'y est jeté trop vite, le sac devant lui. Il est engagé jusqu'à la taille. Ses pieds battent.",
      ],
      choices: [
        { label: "Le tirer de là, doucement, en lui parlant", to: "A3m_dents_tire", fx: { flag: "a3:m_gamin", ep: ["perso", 500] } },
        { label: "Le laisser à ses camarades : ils reviendront, et tu as une cathédrale à trouver", back: "A3m_ossuaire" },
      ] },
    A3m_dents_tire: { act: "III", title: "Un nommé Osselet", place: "carrieres", ambiance: "nuit",
      text: [
        "Il faut du temps. Il faut lui faire lâcher son sac, ce à quoi il se refuse d'abord avec une énergie de propriétaire ; puis vider ses poumons, tourner ses épaules en biais, et le ramener à toi comme on ôte un bouchon, d'un quart de tour.",
        "Il sort gris de craie, les côtes râpées, et la première chose qu'il fait est de replonger le bras pour reprendre le sac.",
        "« Quarante-deux, dit-il en le soupesant. Les arracheurs de la foire donnent un liard les trois. » Il renifle. Il te regarde enfin. « On m'appelle Osselet. T'es pas d'ici. T'as pas dit *sacrilège*. »",
        "Tu lui demandes ce qu'il y a derrière le trou.",
        "« Nos chemins. » Il a la fierté des gens qui passent où les grands ne passent pas. « On va partout. Sous la place, sous l'évêché, jusqu'aux caves de Monseigneur, où ça sent la pomme. Mais c'est des trous pour nous. Toi, tu resterais comme moi, et y aurait personne pour te tourner les épaules. »",
        "Il réfléchit, en se frottant les côtes.",
        "« Si t'es perdu en bas, siffle. On entend tout, dans la craie. Je te dois. »",
      ],
      choices: [{ back: "A3m_ossuaire" }] },

    // ───────────────────────────── Down ─────────────────────────────
    A3m_descente: { act: "III", title: "L'air qui pèse", place: "carrieres", ambiance: "nuit",
      fx: { until: 9 },
      text: [
        "Passé l'ossuaire, les rues d'en dessous perdent leurs noms. La galerie descend, se resserre, tourne ; les piliers y sont plus vieux, taillés à la diable, et l'on a soutenu la voûte, par endroits, avec des murs de pierre sèche que la craie pousse du ventre.",
        "Au bas d'une pente, ta flamme change. Elle s'allonge, elle bleuit par le pied, elle se couche comme sous un doigt. Tu t'arrêtes.",
        { if: { item: "lampe_fosse" }, text: "Tu as vu cela à Ferrières, au fond de la Gueule, et un mineur t'a appris ce que dit une flamme qui s'allonge : l'air d'en bas est mort. Il s'amasse dans les creux, plus lourd que l'autre, sans odeur. On y entre debout, on s'y assoit pour souffler, on y reste." },
        { if: { not: { item: "lampe_fosse" } }, text: "Tu ne sens rien. C'est ce qui t'alarme : l'air, dans ce creux, n'a plus son goût de cave ni de cire. Il n'a goût de rien, et ta tête, depuis dix pas, pèse le double." },
        "Le creux a trente pas de long. De l'autre côté, la galerie remonte. À ta gauche, avant la pente, s'ouvre une traverse, où le pilier d'angle porte un nom que le salpêtre a épargné : *R. DE L'ÉCORCHERIE.*",
      ],
      choices: [
        { label: "Traverser le creux d'une traite, la bouche fermée",
          test: { dom: "nature", diff: 5, label: "Trente pas sans respirer", help: [{ if: { item: "vinaigre_voleurs" }, v: 20 }, { if: { item: "lampe_fosse" }, v: 5 }, { if: { voie: "alchimiste" }, v: 10 }, { if: { voie: "coureur" }, v: 5 }] },
          win: { fx: { ep: ["perso", 600] }, to: "A3m_fontis" }, lose: { fx: { pv: -5 }, to: "A3m_air_ko" } },
        { label: "Prendre la traverse, qui reste à niveau", to: "A3m_ecorcherie" },
      ] },
    A3m_air_ko: { act: "III", title: "Le fond du creux", place: "carrieres", ambiance: "nuit",
      text: [
        "À vingt pas, tes genoux s'en vont. Tu ne tombes pas : tu t'assois, très raisonnablement, avec l'idée qu'une minute de repos arrangera tout. Ta lumière, posée près de toi, n'est plus qu'un point bleu. Il fait bon. Le chant est très beau.",
        { if: { has: "a3:m_gamin" }, text: "Quelqu'un te tire par le col. Quelqu'un de petit, qui jure, qui te traîne sur le dos, par saccades, en te cognant la tête à chaque pierre. Quand l'air revient, il a un goût de cave, et tu vomis. Osselet est assis sur ta poitrine, gris de craie, furieux. « T'es resté dans la Cuvette ! Même les chiens y vont pas ! » Il s'essuie le nez. « On est quittes. » Et il rentre dans un mur.", else: "C'est la douleur qui te sauve. Ta main, en glissant, s'est posée sur le verre de ta lumière, et la brûlure te traverse le bras comme un cri. Tu te retrouves à quatre pattes sans l'avoir décidé. Tu rampes vers le haut, parce que le haut est la seule idée qui te reste, et tu ne t'arrêtes que la figure dans un air qui sent la cave." },
        "Tu restes là longtemps, la tête entre les genoux. Tu sais maintenant comment on meurt dans les carrières d'Ossevaux : poliment, comme partout dans cette ville, et en trouvant que le chant est beau.",
      ],
      choices: [{ label: "Reprendre la pente, quand tes jambes veulent bien", to: "A3m_fontis", big: true }] },
    A3m_ecorcherie: { act: "III", title: "Les caves du vérificateur", place: "carrieres", ambiance: "nuit",
      text: [
        "La traverse sent le vinaigre, puis l'eau-de-vie, puis autre chose. Elle finit sur une cave voûtée, où l'on voit clair : trois chandelles, plantées dans des goulots.",
        "C'est une resserre, et c'est en ordre. Il y a des cuves de saumure, rangées contre le mur, avec des couvercles et des pierres dessus. Il y a une table de boucher, lavée, des crochets, une pince à déclouer, un rouleau de toile à sac. Un escalier monte vers une porte peinte en vert, par où descend un bruit de vaisselle.",
        "Deux hommes en tablier jouent aux cartes sur un couvercle. Ils te tournent le dos. Entre eux, piquée au mur par un clou, une feuille de papier écrite d'une belle main de médecin, que tu lis par-dessus leurs têtes :",
        "*Pour la séance de la Saint-Hubert. Un sujet mâle, soixante ans environ, fracture du rocher derrière l'oreille droite, pièce rare. Dépositoire des Cadrans, classe première, bière de chêne clair. À lever dans la nuit des Trépassés, pendant l'office : le veilleur y sera. Trente écus. A. C.*",
        "Tu connais ce sujet. Tu l'as vu à son établi, la joue sur le bois, sous sa lampe. On lui a fendu la tête pour le faire taire, et un docteur à ruban violet trouve la fente intéressante.",
      ],
      fx: { flag: "monde:a3:commande_balancier", clue: "r_commande" },
      choices: [
        { label: "Longer les cuves, dans leur dos, jusqu'à l'autre issue",
          test: { dom: "discretion", diff: 5, label: "Passer derrière deux joueurs de cartes", help: [{ if: { voie: "crocheteur" }, v: 10 }, { if: { voie: "coureur" }, v: 10 }, { if: { has: "a3:m_mouille" }, v: -5 }] },
          win: { fx: { ep: ["perso", 600] }, to: "A3m_fontis" }, lose: { to: "A3m_ecorcherie_vu" } },
        { label: "Entrer franchement : deux hommes assis, et toi debout",
          fight: { title: "Les garçons du docteur", enemies: [{ id: "ressusciteur", n: 2 }], win: { fx: { ep: ["perso", 900] }, to: "A3m_ecorcherie_bat" }, lose: { fx: { pv: 2, gold: -30 }, to: "A3m_ecorcherie_perd" } } },
      ] },
    A3m_ecorcherie_vu: { act: "III", title: "Un sujet sur pied", place: "carrieres", ambiance: "nuit",
      text: [
        "Une pierre roule sous ton pied. Les cartes s'arrêtent.",
        "Ils se lèvent sans hâte. Ce sont des hommes paisibles, larges, aux avant-bras de débardeurs, et qui te regardent comme leur patron regarde le bouilli : en estimant.",
        "« C'est venu tout seul, dit le premier. Ça nous change. »",
        "« Et c'est frais », dit le second.",
      ],
      choices: [
        { label: "Dégainer",
          fight: { title: "Les garçons du docteur", enemies: [{ id: "ressusciteur", n: 2 }], win: { fx: { ep: ["perso", 900] }, to: "A3m_ecorcherie_bat" }, lose: { fx: { pv: 2, gold: -30 }, to: "A3m_ecorcherie_perd" } } },
        { label: "« Je viens de la part du docteur. Il veut savoir où vous en êtes, pour le sujet des Cadrans. »",
          test: { dom: "social", diff: 10, label: "Mentir à deux hommes qui pèsent la viande", help: [{ if: { voie: "comedien" }, v: 15 }, { if: { seen: "A3c_table_docteur" }, v: 10 }] },
          win: { fx: { ep: ["perso", 800] }, to: "A3m_ecorcherie_ment" }, lose: { fx: { pv: -8, gold: -30 }, to: "A3m_ecorcherie_perd" } },
      ] },
    A3m_ecorcherie_ment: { act: "III", title: "De la part du docteur", place: "carrieres", ambiance: "nuit",
      text: [
        "Ils se regardent. Le nom a porté ; le détail aussi. On ne sait cela que si l'on est de la maison.",
        "« Dis-lui que c'est entendu, fait le premier, en se rasseyant. Jean-qui-Remonte s'en charge lui-même. Il veut pas qu'on l'abîme, celui-là : c'est la tête qui vaut. » Il ramasse ses cartes. « Et dis-lui que le veilleur des Cadrans a demandé le double. Il dit qu'un mort de première classe, ça se remarque. »",
        "Tu promets de le dire. Tu traverses la cave à pas comptés, entre les cuves, comme on traverse chez soi, et tu ne respires qu'une fois dans le noir, de l'autre côté.",
      ],
      choices: [{ label: "Regagner les galeries", to: "A3m_fontis", big: true }] },
    A3m_ecorcherie_bat: { act: "III", title: "La saumure", place: "carrieres", ambiance: "nuit",
      text: [
        "Le second s'assoit dans une cuve, dont le couvercle a cédé, et y reste, de la saumure jusqu'aux aisselles, avec une expression de surprise. Le premier a pris l'escalier. Tu entends la porte verte battre, et là-haut une voix aimable, de bonne compagnie, qui demande ce que c'est que ce tapage un jour de Toussaint.",
        "Tu n'attends pas la suite. En passant, tu arraches la feuille du mur. Le docteur saura qu'on l'a lue ; mais il y a des écritures qu'un homme aime mieux savoir dans sa poche que dans celle d'un autre.",
      ],
      fx: { item: "billet_cornillon" },
      choices: [{ label: "Regagner les galeries", to: "A3m_fontis", big: true }] },
    A3m_ecorcherie_perd: { act: "III", title: "Trop maigre", place: "carrieres", ambiance: "nuit",
      text: [
        "Ils savent cogner sans abîmer : c'est leur état. Tu te retrouves sur la table de boucher, un genou sur la gorge, pendant que le second te tâte les côtes d'un pouce d'expert.",
        "« Trop maigre, conclut-il. Et rien de fendu derrière les oreilles. Le docteur en a dix comme ça. »",
        "Ils te vident les poches, par principe, et te jettent dans la galerie, d'où tu les entends reprendre leur partie. Tu as mal partout. Tu as, au moins, l'avantage d'être sans intérêt pour la science.",
      ],
      choices: [{ label: "Te relever", to: "A3m_fontis", big: true }] },

    A3m_fontis: { act: "III", title: "Le dessous d'un cimetière", place: "carrieres", ambiance: "nuit",
      text: [
        "La galerie s'arrête sur un éboulis. La voûte, ici, est tombée : il y a cent ans ou mille, le ciel de craie a cédé d'un bloc, et il s'est fait au-dessus de l'éboulis une cloche, haute comme un clocher, que ta lumière n'éclaire qu'à moitié.",
        "Tu lèves la tête, et tu restes la bouche ouverte.",
        "Le sommet de la cloche touche presque le jour. Il n'y a plus là-haut qu'une croûte de terre, que tiennent des racines ; et dans cette terre, par-dessous, on voit le cimetière. Des planches crèvent le plafond. Un angle de bière dépasse, noir, avec sa poignée. Une autre penche tout entière dans le vide, retenue par un bout, comme un tiroir mal fermé. Et de trois ou quatre de ces boîtes pend, jusqu'à mi-hauteur de la cloche, un cordon, avec un petit anneau de laiton au bout.",
        "Ce sont les cordons des clochettes. On les met dans la main du mort, pour qu'il sonne s'il se réveille. Ceux-ci ont traversé le fond pourri des bières. Ils se balancent très doucement dans le courant d'air, à dix pieds au-dessus de toi, et il suffirait d'y pendre un caillou pour faire accourir, là-haut, un veilleur en bonnet de nuit.",
        "Il faut passer l'éboulis, qui roule, sous ce plafond qui ne tient à rien.",
      ],
      choices: [
        { label: "Monter l'éboulis pierre à pierre, sans rien faire rouler",
          test: { dom: "nature", diff: 5, label: "Un tas de craie sous un plafond de morts", help: [{ if: { voie: "coureur" }, v: 15 }, { if: { voie: "bretteur" }, v: 5 }].concat(LUM) },
          win: { fx: { ep: ["perso", 600] }, to: "A3m_fourche" }, lose: { fx: { pv: -4 }, to: "A3m_fontis_ko" } },
      ] },
    A3m_fontis_ko: { act: "III", title: "Un locataire descend", place: "carrieres", ambiance: "nuit",
      text: [
        "Une pierre part, puis dix. Tu te jettes à plat ventre. L'éboulis coule sous toi comme du grain ; et là-haut, dans la cloche, quelque chose répond, avec un long craquement de planches.",
        "La bière qui penchait achève de sortir de son tiroir. Elle tombe debout, se plante dans la craie à deux pas de ta tête, hésite, et s'ouvre.",
        "Il n'en sort rien d'affreux : un peu de drap, une poussière brune, une perruque. Son cordon l'a suivie, avec l'anneau de laiton, et le fil, en se tendant, a fait là-haut ce pour quoi on l'avait mis. Tu entends, à travers la terre, minuscule et pressée, une clochette.",
        "Puis des pas qui courent, très loin au-dessus de toi, et une voix d'homme qui crie *J'arrive ! Tenez bon !* à un bourgeois mort depuis trente ans.",
        "Tu passes l'éboulis sans plus te soucier du bruit.",
      ],
      choices: [{ label: "Filer avant que le veilleur trouve son trou", to: "A3m_fourche", big: true }] },

    A3m_fourche: { act: "III", title: "La galerie des Chantres", place: "carrieres", ambiance: "nuit",
      fx: { until: 11 },
      text: [
        "Au-delà du fontis, la galerie redevient une rue, large, sèche, très ancienne. Le chant grandit. Il a retrouvé une direction : il est devant.",
        "Au bout de deux cents pas, la galerie se partage. À droite, elle continue, large, sèche, et tu vois au fond de ta lueur quelque chose de noir, de plat, de rivé, qui la ferme d'un mur à l'autre. À gauche, un escalier de dix marches descend vers une eau immobile, où ta lumière se voit tout entière, comme dans une vitre.",
        "Et entre les deux, à terre, il y a un fil.",
        "C'est un fil de soie noire, fin comme un cheveu, tendu au ras du sol. Il vient de derrière toi, par un chemin que tu n'as pas pris. Il s'en va vers la droite, vers la porte. Quelqu'un est passé ici avec une bobine, et comptait repasser.",
      ],
      choices: [
        { label: "Regarder le fil de plus près", to: "A3m_fil", once: true },
        { label: "À droite : la porte de fer", to: "A3m_porte" },
        { label: "À gauche : l'eau", to: "A3m_noyee" },
      ] },
    A3m_fil: { act: "III", title: "De la soie noire", place: "carrieres", ambiance: "nuit",
      text: [
        "Tu le prends entre deux doigts sans le tendre. De la soie à gants, torse en trois brins, cirée : tu as appris à en filer de pareille, dans un grenier, sous l'œil d'une vieille femme qui disait que le fil est la mémoire de ceux qui n'en ont pas.",
        "Une seule maison a formé les deux bandes d'Aiguemorne. Sans-Bruit est passée par ici. Elle a déroulé son fil depuis une bouche à elle jusqu'à la porte de Monseigneur ; elle a donc vu la porte, hier ou avant-hier ; et le fil est resté, ce qui veut dire qu'elle a prévu de revenir par le même chemin, de nuit, sans lumière, la main sur la soie.",
        "*N'y allez pas par les portes.* Elle parlait en personne qui avait déjà choisi la sienne.",
      ],
      choices: [
        { label: "Le couper, et emporter cent pas de soie : elle cherchera son chemin à tâtons", fx: { flag: "monde:a3:fil_noir", ep: ["perso", 400] }, to: "A3m_fil_coupe" },
        { label: "Le laisser tendu : un fil qu'on connaît vaut mieux qu'une rivale qui se méfie", fx: { ep: ["perso", 400] }, back: "A3m_fourche" },
      ] },
    A3m_fil_coupe: { act: "III", title: "Cent pas de mémoire", place: "carrieres", ambiance: "nuit",
      text: [
        "Tu le coupes d'un coup d'ongle, et tu l'enroules sur ton poing en remontant la galerie par où il vient : cent pas, deux carrefours. Le bout que tu laisses à terre ne mène plus nulle part.",
        { if: { has: "monde:douce:estime" }, text: "Elle vous a écrit qu'on était quittes. On l'est. Il n'a jamais été question de se faire des politesses." },
        { if: { has: "monde:douce:rancune" }, text: "Elle a semé des chausse-trapes sur la lande. Tu lui rends la monnaie de sa pièce, en soie." },
        "La pelote tient dans ta poche. C'est du beau fil.",
      ],
      choices: [{ back: "A3m_fourche" }] },

    // ───────────────────────────── The iron door ─────────────────────────────
    A3m_porte: { act: "III", title: "La porte de Monseigneur", place: "carrieres", ambiance: "nuit",
      text: [
        "Elle barre la galerie d'un pilier à l'autre : un vantail de fer plein, rivé, scellé au plomb dans la craie, sans un jour. Au milieu, à hauteur de poitrine, un guichet grillé, large de deux mains ; et sous le guichet, une serrure.",
        "Par le guichet vient le chant, très fort, avec un air chaud qui sent la cire. Tu y colles l'œil. Tu vois une galerie, la même, qui continue ; au fond, une lueur jaune, haute, immobile.",
        "Tu regardes la serrure, qui est ton affaire. Le père Trentain, le bedeau, le vieux Rangeur ont tous dit la même chose de Monseigneur : il est économe. Un homme qui fait fermer une carrière commande une porte au serrurier de l'évêché, et le serrurier de l'évêché n'a qu'un modèle, celui de ses grilles de caveau, en plus fort.",
        { if: { item: "passe_morts" }, text: "Tu as dans ta poche une clef plate, à panneton carré, qu'une vieille femme tenait d'un de ses maris et qu'elle a nouée dans un paquet de toile cirée, sous la troisième marche, avant qu'on l'emmène." },
      ],
      choices: [
        { label: "Essayer la clef de la Douairière", if: { item: "passe_morts" }, hide: { not: { item: "passe_morts" } }, fx: { flag: "monde:a3:chemin", ep: ["perso", 700] }, to: "A3m_porte_ouverte" },
        { label: "La travailler au crochet",
          test: { dom: "discretion", diff: 10, label: "Une serrure de caveau, en plus fort", help: [{ if: { voie: "crocheteur" }, v: 15 }, { if: { item: "rossignols" }, v: 10 }, { if: { has: "a3:m_cubitus" }, v: 5 }].concat(LUM) },
          win: { fx: { flag: "monde:a3:chemin", ep: ["perso", 800] }, to: "A3m_porte_ouverte" }, lose: { to: "A3m_porte_ko" } },
        { label: "Revenir à la fourche", back: "A3m_fourche" },
      ] },
    A3m_porte_ouverte: { act: "III", title: "Le modèle ordinaire", place: "carrieres", ambiance: "nuit",
      text: [
        { if: { item: "passe_morts" }, text: "Elle entre. Elle tourne, avec ce frottement gras des serrures qu'un seul homme ouvre, toujours le même, depuis quarante ans. Tu penses à la Douairière, et à la bonne idée qu'elle a eue d'épouser un fossoyeur entre un tonnelier et un sergent.", else: "C'est un modèle ordinaire, en plus fort : quatre gardes au lieu de deux, un ressort de rappel dur comme un piège à loup. Tu y laisses un quart d'heure et le fil d'un crochet. Puis le pêne cède, avec ce frottement gras des serrures qu'un seul homme ouvre depuis quarante ans." },
        "Le vantail pivote sans un cri. On l'a graissé. Monseigneur aime que les choses se taisent.",
        "Tu passes. Tu repousses la porte derrière toi sans la fermer, en glissant sous le pêne un éclat de craie : elle a l'air close, et elle cédera à la main. Quiconque viendra par ici demain, avec toi ou après toi, passera à pied sec.",
      ],
      choices: [{ label: "Entrer dans le Vieux Chantier", to: "A3m_chanoines", big: true }] },
    A3m_porte_ko: { act: "III", title: "Quatre gardes", place: "carrieres", ambiance: "nuit",
      text: [
        "Elle a quatre gardes, où les grilles de caveau en ont deux, et un ressort de rappel qui te renvoie ton crochet comme une gifle. Tu t'y reprends à six fois. À la septième, le crochet casse net, et son bout reste dans le canon.",
        "Tu contemples le dégât. Une serrure où dort un morceau d'acier ne s'ouvre plus, même avec sa clef : Monseigneur, la prochaine fois qu'il viendra par ici, fera venir un serrurier, et le serrurier lui dira ce qu'il a trouvé dedans.",
        "Par chance, Monseigneur descend par chez lui. Il reste l'eau.",
      ],
      choices: [{ label: "Descendre les dix marches", to: "A3m_noyee", big: true }] },

    // ───────────────────────────── The drowned gallery ─────────────────────────────
    A3m_noyee: { act: "III", title: "La galerie noyée", place: "carrieres", ambiance: "nuit",
      text: [
        "L'eau commence à la septième marche. Elle est d'une transparence de verre, sans une ride, sans un insecte, et si froide que tu la sens monter le long de tes os avant d'y avoir mis le pied. Dessous, tu vois les trois dernières marches, puis le sol d'une galerie, blanc, net, qui s'en va en pente douce sous une voûte de plus en plus basse.",
        "À vingt pas, la voûte touche l'eau. Au-delà, tu ne vois plus que ta propre lueur, qui te regarde d'en bas.",
        { if: { has: "a3:m_cubitus" }, text: "Le temps d'un *De profundis*, a dit le vieux, et de le dire vite. Il avait vingt ans, et il l'a fait pour une gageure." },
        { if: { not: "a3:m_cubitus" }, text: "Tu ne sais pas ce qu'il y a derrière : une salle, un cul-de-sac, ou cent pas de roche. Tu sais seulement que le chant vient de par là, et que l'eau, à la surface, a un frisson très léger, comme si elle respirait de l'autre côté." },
        "Tu ôtes ce qui pèse. Tu roules ton papier et ta mine de plomb dans ta toile cirée, serrés, contre ta peau. Ta lumière ne te suivra pas.",
      ],
      choices: [
        { label: "Plonger, une main à la voûte",
          test: { dom: "nature", diff: 10, label: "Vingt brasses sous la roche, dans le noir", help: [{ if: { voie: "coureur" }, v: 10 }, { if: { voie: "bretteur" }, v: 5 }, { if: { has: "a3:m_cubitus" }, v: 10 }, { if: { has: "a3:m_gamin" }, v: 5 }] },
          win: { fx: { flag: "a3:m_mouille", ep: ["perso", 900] }, to: "A3m_noyee_ok" }, lose: { fx: { flag: "a3:m_mouille", pv: -6 }, to: "A3m_noyee_ko" } },
        { label: "Laisser l'eau, et essayer la porte de fer", to: "A3m_porte", if: { not: { seen: "A3m_porte_ko" } }, hide: { seen: "A3m_porte_ko" } },
      ] },
    A3m_noyee_ok: { act: "III", title: "De profundis", place: "carrieres", ambiance: "nuit",
      text: [
        "Le froid te prend la tête dans un étau. Tu nages les yeux ouverts dans du noir, une main à la voûte, qui est lisse, qui descend, qui te pousse vers le fond ; tu comptes ; à douze, la voûte remonte sous tes doigts ; à dix-sept, ta main sort de l'eau avant toi.",
        "Tu émerges dans une nuit complète, où tu entends, pour la première fois depuis ce matin, un bruit qui soit à toi : ton souffle, énorme, que la roche te renvoie.",
        "Il y a des marches. Tu les montes à quatre pattes. En haut, l'air est tiède, et très loin, à droite, il y a une lueur jaune.",
      ],
      choices: [{ label: "Marcher vers la lueur", to: "A3m_chanoines", big: true, fx: { flag: "a3:m_noir" } }] },
    A3m_noyee_ko: { act: "III", title: "Le plafond", place: "carrieres", ambiance: "nuit",
      text: [
        "Le froid te prend la tête dans un étau. Tu nages, une main à la voûte, qui descend. À dix, elle descend encore. À quinze, tu n'as plus d'air, et tu fais ce qu'il ne faut pas : tu cherches la surface. Il n'y a pas de surface. Il y a un plafond de craie, lisse, à un pouce de ta bouche, et tu t'y écorches le front en remontant dessous comme une mouche sous un verre.",
        "Tu ne sauras jamais ce qui t'a remis dans le bon sens. Un courant, peut-être ; ou cette chose têtue, au fond de toi, qui a toujours su où était la porte. Tes genoux touchent une marche.",
        "Tu restes longtemps couché{e} sur cet escalier, à rendre de l'eau froide, dans un noir où rien n'est à toi que le bruit que tu fais.",
        "Puis tu lèves la tête. Très loin, à droite, il y a une lueur jaune.",
      ],
      choices: [{ label: "Marcher vers la lueur", to: "A3m_chanoines", big: true, fx: { flag: "a3:m_noir" } }] },

    // ───────────────────────────── The Old Works ─────────────────────────────
    A3m_chanoines: { act: "III", title: "Par ordre de préséance", place: "carrieres", ambiance: "nuit",
      text: [
        { if: { has: "a3:m_mouille" }, text: "Tu avances en laissant derrière toi une trace d'eau que la craie boit à mesure. Tu grelottes. Le chant te réchauffe, à sa façon : il dit qu'il y a des hommes, là-haut, et du feu." },
        "La galerie du Vieux Chantier est habitée. Des deux côtés, dans des niches taillées à hauteur d'homme, ils sont assis.",
        "Ce sont les premiers chanoines d'Ossevaux, ceux d'avant le Gisant, que le père Cubitus a rangés dans sa jeunesse. Il ne les a pas défaits. Il les a laissés entiers, en chape, chacun dans sa stalle de craie, le bréviaire sur les genoux, la tête un peu penchée, comme des hommes que le sermon a pris. L'air sec en a fait du cuir. Certains ont gardé leurs lunettes.",
        "Tu passes entre eux sur la pointe des pieds. C'est absurde, et tu le fais.",
        { if: { has: "a3:m_cubitus" }, text: "Au dernier, le plus près du chœur, le vieux Rangeur a remis d'aplomb une mitre qui glissait. Il y a quarante ans de cela, puisque la porte est fermée depuis. La mitre tient encore." },
        "Au bout des stalles, la galerie s'ouvre.",
      ],
      choices: [{ label: "Entrer sous l'église", to: "A3m_fondations", big: true }] },
  },

  extras: {
    places: {
      carrieres: { ambiance: "grotte", region: "ossevaux", name: "Les carrières d'Ossevaux", map: "pays", x: 61, y: 84, arrive: "A3m_galerie", desc: "Une ville en creux sous la ville : des rues de craie qui portent le nom de celles d'en haut, et mille ans de morts rangés." },
    },
    items: {
      billet_cornillon: { name: "Billet du docteur Cornillon", kind: "quete", desc: "Une commande, de la main du vérificateur, pour « un sujet mâle, soixante ans, fracture derrière l'oreille droite » : à lever au dépositoire des Cadrans pendant l'office des Trépassés. Trente écus. Signé A. C." },
    },
    clues: {
      r_commande: { rev: "R", text: "Le docteur Cornillon a commandé aux ressusciteurs le corps de Maître Balancier, pour sa « fracture derrière l'oreille droite » : à lever au dépositoire des Cadrans, pendant l'office des Trépassés." },
    },
    people: {
      cubitus: { name: "Le père Cubitus", aka: ["Cubitus", "le vieux Rangeur"], qui: "Le doyen des Rangeurs : depuis cinquante-huit ans, il met en ordre l'ossuaire d'Ossevaux.", f: false,
        aspect: { allure: "très vieux, cassé en deux par les voûtes", visage: "blanc de craie, yeux presque sans couleur", habits: "sarrau, fanal pendu à un fémur", signe: "parle aux crânes qu'il range", voix: "sèche, d'une politesse d'empereur" },
        desc: "Avant lui, on versait en tas. Il a trouvé cela inconvenant." },
    },
  },
};
