// The first reading, « Le matin »: every passage here is `second: false`. The hero wakes on a bench at six, masked
// and without memory, and follows five riddles in their own hand across Lambrun (wash-house, apothecary, Opera,
// Genoa quay, belfry) with a Harlequin at their heels; it ends at noon on `masque`.
module.exports = {
  // ------------------------------------------------------------------ the bench
  A_banc: { act: "I", title: "Le banc", place: "canal", second: false, hub: true, backName: "le banc",
    text: [
      { first: true, text: "Tu te réveilles parce qu'une mouette te regarde. Elle se tient sur le dossier du banc, à un pied de ton visage, et elle penche la tête d'un côté, puis de l'autre, avec l'air d'un juge d'instruction qui hésite entre deux versions." },
      { first: true, text: "Le jour se lève sur Lambrun comme on soulève un drap sale. L'eau du canal des Teinturiers coule devant toi, bleue d'un côté, rouge de l'autre, selon les cuves qui se vident ; au milieu, les deux couleurs se mêlent en une traînée violette, épaisse et lente, qui ressemble à du vin répandu sur une nappe de deuil. Des confettis détrempés collent aux pavés. Une odeur de savon froid et de vase monte des berges. Quelque part, un tambour d'enfant bat trois coups, puis se tait, comme un cœur qui aurait changé d'avis." },
      { first: true, text: "Tu as froid. Tu as mal à la tête, d'un mal étrange, sourd, cotonneux, qui occupe l'endroit exact où devraient se trouver tes souvenirs. Tu portes un costume blanc, large, à gros boutons noirs : un Pierrot. Et sur ton visage, quelque chose de dur et de lisse, qui sent le carton et la colle." },
      { first: true, text: "Comment tu es arrivé{e} ici, mystère. Tu sais ton métier, tu sais ton nom, tu sais lire. La nuit d'hier est une page arrachée." },
      { again: true, text: "Le banc du canal des Teinturiers, l'eau bleue et rouge, la mouette, revenue se poster sur le dossier comme une sentinelle. La ville s'éveille derrière toi, de plus en plus bruyante." },
    ],
    choices: [
      { label: "Fouiller tes poches", hide: { seen: "A_billet" }, to: "A_billet" },
      { label: "Porter les mains à ton visage", hide: { seen: "A_cadenas" }, to: "A_cadenas" },
      { label: "Te pencher sur l'eau du canal", hide: { seen: "A_reflet" }, to: "A_reflet" },
      { label: "Relire la ligne étrange au bas du billet", if: { seen: "A_billet" }, hide: { has: "enigme:m_chiffre" }, to: "A_chiffre" },
      { label: "Regarder la rose de papier épinglée sur ton costume", if: { seen: "A_billet" }, hide: { has: "enigme:m1" }, to: "A_rose" },
      { label: "Répondre à l'Arlequin qui t'appelle depuis le pont", if: { seen: "A_billet" }, hide: { seen: "A_lazare" }, to: "A_lazare" },
      { label: "Monter sur le pont des Teinturiers", hide: { seen: "A_pont" }, to: "A_pont" },
      { label: "Passer par ton échoppe, sous les arcades du marché", if: { seen: "A_billet" }, hide: { seen: "A_echoppe_matin" }, to: "A_echoppe_matin" },
      { label: "Suivre la première fleur jusqu'au lavoir du Pont-Rouge", if: { has: "enigme:m1" }, fx: { until: 7 }, to: "A_lavoir" },
    ] },

  A_billet: { act: "I", title: "Le billet", place: "canal", second: false,
    text: [
      "Dans la poche de ta blouse, trois sous, un bout de craie, et un papier plié en quatre. Tu le déplies. L'écriture te saute au visage avant les mots : c'est la tienne. Ces *t* barrés trop haut, ces *s* qui se couchent à la fin des lignes comme des chiens fatigués, tu les as tracés dix mille fois pour d'autres, sur des lettres d'amour, des réclamations au fisc, des faire-part.",
      "*Ne retire pas le masque avant midi. Tu ne te souviens de rien : c'est voulu. Tout ce que tu dois savoir, je te l'ai laissé en chemin. Suis les fleurs. Ne fais confiance à personne qui connaît ton nom.*",
      "Et au-dessous, une ligne de lettres en désordre, en capitales, qui ne forment aucun mot de ta connaissance, avec cette précision : *la clef de cette ligne est le numéro que tu as laissé à l'Opéra.* Puis une signature : *Toi.*",
      { if: { voie: "ecrivain" }, text: "Tu juges l'écriture en homme de l'art, par réflexe, avant même de comprendre ce qu'elle dit : une main sûre, rapide, qui ne bave pas, qui ne revient pas sur ses jambages. Ta meilleure main. Celle des lettres qu'on te paie double. Cette nuit, tu as écrit pour toi-même comme pour un client exigeant." },
      "Tu relis trois fois. Il y a quelque chose de vertigineux à recevoir des ordres de soi-même, comme d'un aîné qu'on n'a jamais rencontré et qui vous connaîtrait par cœur. Celui ou celle qui a écrit ce billet savait ce que tu ignores. Celui ou celle qui a écrit ce billet a choisi que tu l'ignores. Tu te demandes si tu dois lui en vouloir, et tu décides de remettre la question à midi.",
    ],
    choices: [
      { back: "A_banc" },
    ] },

  A_chiffre: { act: "I", title: "La ligne du billet", place: "canal", second: false, puzzle: "m_chiffre",
    text: [
      "Tu poses le billet sur ton genou. Vingt lettres en capitales, groupées en mots de longueur ordinaire : une phrase, donc, dont chaque lettre a été poussée dans l'alphabet d'un certain nombre de crans, à la façon des chiffres de caserne que les soldats s'échangent pour tromper l'adjudant. Tu connais ce jeu. Tu l'as appris à des amoureux timides, sous les arcades, pour quatre sous la leçon.",
      { if: { not: { item: "ticket" } }, text: "Il te manque le nombre. Le numéro que tu as laissé à l'Opéra : tu ignores encore ce que tu as laissé à l'Opéra." },
      { if: { item: "ticket" }, text: "Le ticket de vestiaire, dans ta main, porte un 7 rouge." },
    ],
    choices: [
      { back: "A_banc" },
    ] },

  A_cadenas: { act: "I", title: "Le masque", place: "canal", second: false,
    text: [
      "Tes doigts trouvent un masque de carton laqué, froid, qui épouse ton visage du front à la lèvre supérieure. Tu cherches le cordon derrière ta tête, pour le défaire : tu trouves une tresse de soie dure, dans laquelle on a glissé une chaînette, et à l'endroit du nœud, un petit cadenas de laiton, gros comme une noisette.",
      "Tu tires. La chaînette mord ta nuque. Tu tires encore, et le masque tient comme une seconde peau, comme une décision. On t'a fermé{e}. Ou tu t'es fermé{e} toi-même, ce qui est plus inquiétant et beaucoup plus probable.",
      { if: { voie: "comedien" }, text: "Et pourtant, ce masque te va. Il épouse ton front, tes pommettes, ton nez, avec une exactitude de vieux complice, comme un masque qu'on aurait porté cent soirs de suite, sur cent scènes, et qui aurait pris la forme de ton visage à force de jouer dessus." },
      "Les gens qui passent sur le quai te regardent à peine. Un matin de Mi-Carême, à Lambrun, un Pierrot cadenassé fait partie du paysage, au même titre que les pigeons et les ivrognes.",
    ],
    choices: [
      { back: "A_banc" },
    ] },

  A_reflet: { act: "I", title: "Le reflet", place: "canal", second: false,
    text: [
      "Tu te penches sur l'eau. Le canal te renvoie un Pierrot à l'envers, flottant sur un fond violet : la blouse blanche, la collerette froissée, et ce visage de carton laqué, d'un blanc de craie, avec une larme noire peinte sous l'œil gauche. Les trous des yeux sont deux puits. Au fond, deux yeux qui te ressemblent te regardent avec une méfiance parfaite.",
      "Tes mains, au-dessus de l'eau, sont noires jusqu'à la deuxième phalange, d'une encre ancienne et fraîche à la fois, incrustée dans les cuticules : les mains de ton métier, qui ont écrit toute la nuit.",
      "Et ton soulier gauche te gêne. Une petite gêne obstinée, sous le talon, comme un caillou qui aurait des idées.",
    ],
    choices: [
      { back: "A_banc" },
    ] },

  A_rose: { act: "I", title: "La rose de papier", place: "canal", second: false, puzzle: "m1",
    text: [
      "Sur ta poitrine, à la place du cœur, quelqu'un a épinglé une rose de papier blanc, faite avec soin, pétale par pétale, dans une feuille de ton papier vergé. *Suis les fleurs.* Tu la détaches et tu la fais tourner entre tes doigts. Sur un pétale, à l'intérieur, de ton écriture la plus fine : quatre lignes.",
    ],
    choices: [
      { back: "A_banc" },
    ] },

  A_m1: { act: "I", title: "La Reine d'un jour", place: "canal", second: false,
    text: [
      "La blanchisseuse. Bien sûr. À Lambrun, le jour de la Mi-Carême, les blanchisseuses élisent leur Reine, et la Reine règne une journée entière, couronnée de carton, sur une ville qui la méprise les trois cent soixante-quatre autres jours de l'année. Le royaume, c'est le lavoir. Le plus grand de la ville est au Pont-Rouge, à dix minutes d'ici en suivant le canal.",
      "Tu repiques la rose sur ta blouse. Il te semble qu'elle a un peu plus de poids qu'avant.",
    ],
    choices: [
      { back: "A_banc" },
    ] },

  A_pont: { act: "I", title: "Le pont des Teinturiers", place: "canal", second: false,
    fx: { clue: "i_affiche" },
    text: [
      "Le pont des Teinturiers bombe le dos au-dessus du canal comme un chat qu'on caresse à rebrousse-poil. Ses parapets sont couverts d'affiches de la Mi-Carême, collées les unes sur les autres, si nombreuses qu'elles forment une croûte de papier épaisse d'un doigt : bals, loteries, combats de coqs, le grand défilé du bonhomme Carême, la messe des blanchisseuses.",
      "Une affiche est plus neuve que les autres, la colle encore humide, collée par-dessus tout le reste avec l'impudence de l'argent. Le papier est épais, la typographie élégante, les majuscules ornées d'une couronne de fleurs d'oranger. *Ce vendredi vingt-quatre mars, à midi, en l'église Saint-Brice, mariage de Mademoiselle Clarisse Ardel et de Monsieur Médard Coquelin, banquier.*",
      "Au-dessous, quelqu'un a écrit au charbon, d'une main d'apprenti : *VENDUE.*",
      "De là-haut, tu vois toute la ville : les toits de tuiles, les canaux qui la découpent en îlots, les cheminées de la savonnerie Ardel qui fument déjà, et au-dessus de tout, noir sur le ciel gris, le clocher de Saint-Brice, où la grosse cloche dort encore.",
    ],
    choices: [
      { label: "Regarder passer les premiers masques", hide: { seen: "A_masques_rue" }, to: "A_masques_rue" },
      { back: "A_banc" },
    ] },

  A_masques_rue: { act: "I", title: "Les premiers masques", place: "canal", second: false,
    text: [
      "Ils passent sur le pont par petites grappes, ceux de la nuit qui rentrent et ceux du jour qui sortent, et l'on ne sait plus lesquels sont ivres. Un Turc à barbe de laine soutient une Colombine en pleurs. Deux médecins à long nez se disputent le même diagnostic. Un ours de Savoie a retiré sa tête et la porte sous le bras, comme un saint martyr, en mâchant un croûton.",
      "Une petite fille costumée en diablotin te tire la manche. « T'es triste, Pierrot ? » Tu touches la larme noire sur ton masque. « C'est peint », dis-tu. Elle hoche la tête, très sérieuse, comme si c'était précisément la réponse qu'elle redoutait, et elle repart en courant derrière son père.",
    ],
    choices: [
      { back: "A_banc" },
    ] },

  A_lazare: { act: "I", title: "L'Arlequin", place: "canal", second: false,
    fx: { clue: "i_nom", meet: ["lazare"] },
    text: [
      "« {hero} ! Hé ! {hero} ! »",
      "Quelqu'un t'appelle par ton nom depuis le pont. Un Arlequin, maigre et souple, en costume à losanges rouges, verts et jaunes, un loup noir sur le haut du visage. Il descend les marches quatre à quatre, sautille sur les pavés mouillés, et vient s'asseoir à côté de toi sur le banc avec la familiarité d'un vieil ami ou d'un pickpocket.",
      "« Te voilà réveillé{e} ! J'ai eu peur, tu sais. Tu dormais comme un mort, je t'ai secoué{e} deux fois à cinq heures. » Il rit, d'un rire léger, sans fond. « C'est moi, Lazare. Tu ne me reconnais pas ? Ah, c'est le masque. Ou c'est ce que tu as bu. Tu as bu de tout, cette nuit, et tu as voulu finir sur ce banc pour voir le soleil se lever sur le canal. Un poète. Je t'ai toujours dit que tu avais l'âme d'un poète et la tête d'un sac de farine. »",
      "Il te tape sur l'épaule. Il te connaît. Il dit ton nom comme on dit le nom de quelqu'un qu'on aime bien. Dans ta poche, un billet de ta main te conseille de te méfier de lui.",
    ],
    choices: [
      { label: "Lui demander ce que vous avez fait cette nuit", hide: { seen: "A_lazare_nuit" }, to: "A_lazare_nuit" },
      { label: "Accepter qu'il t'accompagne", hide: { any: [{ has: "lazare:avec" }, { has: "lazare:seul" }] }, fx: { flag: "lazare:avec" }, to: "A_lazare_oui" },
      { label: "Lui dire que tu préfères marcher seul{e}", hide: { any: [{ has: "lazare:avec" }, { has: "lazare:seul" }] }, fx: { flag: "lazare:seul" }, to: "A_lazare_non" },
    ] },

  A_lazare_nuit: { act: "I", title: "La nuit selon Lazare", place: "canal", second: false,
    text: [
      "« Ce qu'on a fait ? » Lazare écarte les bras, comme un bonimenteur devant sa baraque. « Le bal de l'Opéra, voyons. Le plus beau bal depuis dix ans. Tu as dansé la polka avec une marquise qui avait des moustaches. Tu as perdu deux sous au pharaon. Tu as récité des vers à une statue. Et ensuite... » Il baisse la voix, l'air complice. « Ensuite, tu as dansé avec un domino rose. Toute la nuit. Rien qu'avec elle. »",
      "Il te regarde à travers son loup noir. Ses yeux sont très attentifs, très gais.",
      "« Une jolie taille, ce domino rose. Tu te rappelles où elle est passée ? Vous êtes partis ensemble vers une heure, et je vous ai perdus. Je me suis fait du souci. »",
    ],
    choices: [
      { back: "A_lazare" },
    ] },

  A_lazare_oui: { act: "I", title: "Un ami de la nuit", place: "canal", second: false,
    text: [
      "« À la bonne heure ! » Lazare bondit sur ses pieds. « Tu m'as fait promettre, cette nuit, de t'aider ce matin. Tu disais : demain, je ne me souviendrai de rien, et j'aurai une chose à faire avant midi. Je t'ai dit : je serai là. Et me voilà. »",
      "Il te prend le bras, avec une vigueur fraternelle. Il sent la poudre de riz, le vin et une eau de toilette trop chère pour un Arlequin.",
    ],
    choices: [
      { back: "A_banc" },
    ] },

  A_lazare_non: { act: "I", title: "Seul{e}", place: "canal", second: false,
    text: [
      "Lazare a l'air blessé une seconde entière, ce qui chez un Arlequin représente une éternité. Puis il rit, saute sur ses pieds, fait une révérence exagérée qui balaie les pavés.",
      "« Comme tu voudras. Tu étais déjà comme ça cette nuit : tout{e} seul{e} contre le monde. » Il s'éloigne à reculons. « Mais si tu te perds, tu me siffles. Je ne serai jamais loin. »",
      "Il disparaît dans un groupe de masques qui passe sur le pont. Tu as le sentiment, très net, très désagréable, que lui te voit encore.",
    ],
    choices: [
      { back: "A_banc" },
    ] },

  A_echoppe_matin: { act: "I", title: "Ton échoppe", place: "canal", second: false,
    text: [
      "Les arcades du marché sont encore vides à cette heure, et ton échoppe est là où tu l'as laissée : une niche sous la troisième arcade, une planche sur deux tréteaux, un tabouret pour toi, un tabouret pour le client, et une enseigne en bois peint, *Lettres de toutes sortes. Discrétion.* Le volet de bois est fermé, mais le cadenas n'est pas mis.",
      "Dedans, l'odeur d'encre et de papier tiède. Les plumes sont taillées, toutes, en rang, ce qui ne te ressemble guère. Le cahier des commandes est ouvert sur la planche. Ta dernière ligne, de la veille : *Vingt heures. Une demoiselle en domino rose. Rien à écrire.*",
      "Dans le petit poêle de fonte, des cendres de papier, beaucoup, encore tièdes. Tu y plonges les doigts. Un fragment a survécu, un coin de feuille brûlé sur trois côtés, où tu lis, de ta main, le mot *hirond*, et rien d'autre.",
      "Sous le tabouret des clients, une paillette rose brille dans la poussière comme une goutte de sang dans du lait.",
    ],
    choices: [
      { back: "A_banc" },
    ] },

  // ------------------------------------------------------------------ the wash-house
  A_lavoir: { act: "I", title: "Le lavoir du Pont-Rouge", place: "lavoir", second: false, hub: true, backName: "le lavoir",
    fx: { meet: ["babet"] },
    text: [
      { first: true, text: "Le lavoir du Pont-Rouge est une grande halle de bois noir posée sur le canal, ouverte sur l'eau, où la vapeur des lessiveuses monte jusqu'aux poutres et redescend en gouttes sur les têtes. Une cinquantaine de femmes y battent le linge à genoux dans leurs caisses de bois, en ligne, les bras rouges jusqu'aux coudes, avec un vacarme de bataille navale. Les battoirs claquent, l'eau gicle, les voix se croisent par-dessus, et tout cela sent la cendre, le savon noir et la sueur des siècles." },
      { first: true, text: "Aujourd'hui, pourtant, le travail a quelque chose de fébrile. On a tendu des guirlandes de papier entre les poutres. Au fond, sur une estrade de caisses retournées, un trône : un vieux fauteuil d'église, tendu de draps blancs, sous un dais de jupons. Et sur le trône, une femme énorme, coiffée d'une couronne de carton doré, tient un battoir comme un sceptre et invective les autres avec une voix à faire virer de bord une frégate." },
      { first: true, if: { has: "lazare:avec" }, text: "Lazare, sur le seuil, s'arrête net. La Reine l'a vu. Elle pointe son battoir sur lui. « Toi, l'Arlequin, tu restes dehors. Les losanges, je les connais : ils ont des poches partout. » Lazare sourit, salue, et s'adosse au chambranle, dehors, sans cesser de te regarder." },
      { again: true, text: "Le lavoir, sa vapeur, son vacarme, les guirlandes de papier. Sur son trône, la Reine des Blanchisseuses règne à coups de battoir." },
    ],
    choices: [
      { label: "Te présenter à la Reine", hide: { seen: "A_babet" }, to: "A_babet" },
      { label: "Lire le papier de la Reine", if: { has: "babet:papier" }, hide: { has: "enigme:m2" }, to: "A_papier" },
      { label: "Demander aux blanchisseuses ce qu'elles ont vu cette nuit", hide: { seen: "A_laveuses" }, to: "A_laveuses" },
      { label: "Approcher la vieille qui bat le linge à l'écart", hide: { seen: "A_gendre" }, to: "A_gendre" },
      { label: "Aider à porter le trône jusqu'au canal", if: { seen: "A_babet" }, hide: { seen: "A_couronne" }, to: "A_couronne" },
      { label: "Suivre la deuxième fleur jusqu'à la rue des Herbes", if: { has: "enigme:m2" }, fx: { until: 8 }, to: "A_apothicaire" },
    ] },

  A_babet: { act: "I", title: "La Reine des Blanchisseuses", place: "lavoir", second: false,
    fx: { flag: "babet:papier" },
    text: [
      "Tu remontes l'allée entre les caisses, sous les regards et sous les éclaboussures. La Reine te regarde venir avec une attention de douanier. Quand tu es devant le trône, elle pose les yeux sur la rose de papier épinglée sur ta blouse, et son visage énorme s'éclaire d'un coup, comme un four dont on ouvre la porte.",
      "« Mon Pierrot ! » Elle te prend les deux mains dans les siennes, qui sont rouges, mouillées et larges comme des pelles. « Tu m'avais dit que tu viendrais, et que tu ne saurais plus qui tu es. Je t'ai pas cru{e}. J'ai dit : celui-là, il a bu. » Elle rit, et tout son corps rit avec elle, la couronne comprise. « Mère Babet, pour te servir. Reine depuis six heures du matin. Ça m'a pris quarante ans. »",
      "Elle fouille sous son tablier et en tire un papier plié, protégé dans un mouchoir sec. « Tu me l'as confié à trois heures et demie. Tu m'as dit : seulement au Pierrot qui portera la rose. Tu m'as donné deux sous, et tu m'as embrassée sur le front. On m'avait plus embrassée sur le front depuis mon baptême. »",
      "Elle baisse la voix, ce qui chez elle revient à parler comme tout le monde. « Tu m'as dit aussi de me méfier des masques, aujourd'hui. Le jour de la Mi-Carême ! J'ai ri. »",
    ],
    choices: [
      { back: "A_lavoir" },
    ] },

  A_papier: { act: "I", title: "Le papier de la Reine", place: "lavoir", second: false, puzzle: "m2",
    text: [
      "Tu déplies le papier dans la vapeur. L'encre a un peu bavé sur les bords, et ton écriture y est plus rapide, plus nerveuse, comme écrite debout, contre un mur, à la lueur d'une lanterne.",
    ],
    choices: [
      { back: "A_lavoir" },
    ] },

  A_m2: { act: "I", title: "Ce qui t'ouvre", place: "lavoir", second: false,
    text: [
      "Le pavot. Rouge dans les blés en été, noir dans les fioles toute l'année. Les apothicaires en vendent sous vingt noms, pour la toux, pour les dents, pour les nerfs des dames, et quelques-uns, sous le comptoir, pour des usages qu'ils ne nomment pas. *Va chez celui qui me vend : il garde ce qui t'ouvre.*",
      "Ce qui t'ouvre. Tu portes la main au petit cadenas de laiton, derrière ta tête.",
      "« La rue des Herbes, dit Mère Babet, qui a lu par-dessus ton épaule sans le moindre scrupule. C'est là qu'ils sont tous, les vendeurs de poison. Le meilleur, c'est Ferrat. Le plus cher aussi. C'est souvent pareil. »",
    ],
    choices: [
      { back: "A_lavoir" },
    ] },

  A_laveuses: { act: "I", title: "Ce que dit le lavoir", place: "lavoir", second: false,
    text: [
      "Tu t'accroupis près d'une caisse, à côté d'une jeune blanchisseuse aux joues creuses, et d'une vieille qui fume la pipe en battant. Elles parlent sans s'arrêter de taper, chacune d'un côté de toi, comme deux horloges qui ne seraient pas d'accord sur l'heure.",
      "« Cette nuit ? dit la jeune. J'ai vu un Pierrot passer le long du canal, vers deux heures. Avec un domino noir, qui courait comme une fille. — Un domino noir qui court comme une fille, dit la vieille, c'est une fille. — Ils allaient vers Saint-Brice. — Ou vers l'église. — C'est la même chose, idiote. »",
      "La vieille tire sur sa pipe. « Et à cinq heures, des hommes en livrée prune, avec des lanternes, qui fouillaient les barques au Pont-Rouge. Les gens d'Ardel, ceux de la savonnerie. Ils cherchaient quelque chose qu'ils avaient perdu. » Elle crache dans le canal. « Une fiancée, on dit. Ça se perd, une fiancée. Moi, j'ai perdu trois maris. »",
    ],
    choices: [
      { back: "A_lavoir" },
    ] },

  A_couronne: { act: "I", title: "La procession du trône", place: "lavoir", second: false,
    fx: { ep: ["perso", 150] },
    text: [
      "Six blanchisseuses soulèvent le trône, avec Mère Babet dessus, et tu prends un des brancards. Le fauteuil pèse le poids d'une cathédrale. La Reine, là-haut, se cramponne aux accoudoirs et lance des ordres comme un amiral sur une mer démontée : « Doucement ! À gauche ! Toi, le Pierrot, tu lâches et je te noie ! »",
      "Vous la portez jusqu'au bord du canal, où l'on doit la bénir à midi, et vous la posez sous les applaudissements, les sifflets et les injures affectueuses. Elle se redresse sur son trône, rajuste sa couronne, et te jette un sou, comme à un manant. Puis elle te fait un clin d'œil.",
      "« Pour une Reine, dit-elle, il faut des sujets. Pour une fuite, il faut des amis. Tu as les deux, mon Pierrot. Je sais pas lequel des deux te sera le plus utile. »",
    ],
    choices: [
      { back: "A_lavoir" },
    ] },

  // ------------------------------------------------------------------ the apothecary
  A_apothicaire: { act: "I", title: "La rue des Herbes", place: "herbes", second: false, hub: true, backName: "la boutique de Ferrat",
    fx: { meet: ["ferrat"] },
    text: [
      { first: true, text: "La rue des Herbes est si étroite que les toits s'y touchent presque, et le jour n'y descend qu'à midi, à contrecœur, comme un huissier dans une maison en deuil. Les boutiques d'apothicaires s'y alignent, chacune avec son enseigne de fer : un mortier, un serpent, une main ouverte, un œil. Toute la rue sent l'éther, la camomille, la cannelle et quelque chose de plus sombre, au fond, comme une cave où l'on aurait oublié des fleurs." },
      { first: true, text: "La boutique de Maître Ferrat porte l'enseigne du pavot : une tige de fer et une fleur peinte en rouge. Dedans, des bocaux par centaines, du sol au plafond, avec leurs étiquettes à l'encre brune, et derrière le comptoir, un petit homme sec en tablier noir, des lunettes rondes au bout du nez, qui pile quelque chose dans un mortier de marbre. Il lève les yeux sur toi. Il paraît aussi surpris qu'une horloge qui sonne l'heure." },
      { first: true, text: "« Vous voilà réveillé{e}, dit-il. Plus tôt que prévu. C'est la jeunesse, ou c'est le froid. »" },
      { first: true, if: { has: "lazare:avec" }, text: "Lazare entre derrière toi et fait aussitôt le tour des bocaux, les mains dans le dos, comme un amateur au musée. Ferrat suit chacun de ses pas par-dessus ses lunettes, sans cesser de piler." },
      { again: true, text: "La boutique au pavot, ses bocaux, son odeur de cave fleurie. Maître Ferrat pile, imperturbable." },
    ],
    choices: [
      { label: "Lui demander ce que tu lui as acheté cette nuit", hide: { seen: "A_ferrat_oubli" }, to: "A_ferrat_oubli" },
      { label: "Lui demander s'il garde quelque chose pour toi", hide: { seen: "A_ferrat_ordonnance" }, to: "A_ferrat_ordonnance" },
      { label: "Lui demander la clef de ton masque", if: { seen: "A_cadenas" }, hide: { item: "clef_masque" }, to: "A_ferrat_clef" },
      { label: "Lire l'ordonnance", if: { seen: "A_ferrat_ordonnance" }, hide: { has: "enigme:m3" }, to: "A_ordonnance" },
      { label: "Ouvrir le cadenas de ton masque", if: { item: "clef_masque" }, hide: { has: "masque:ote" }, to: "A_masque_ote" },
      { label: "Acheter des sels pour réveiller la mémoire", hide: { seen: "A_sels" }, to: "A_sels" },
      { label: "Suivre la troisième fleur jusqu'à l'Opéra", if: { has: "enigme:m3" }, fx: { until: 9 }, to: "A_opera" },
    ] },

  A_ferrat_oubli: { act: "I", title: "L'oubli", place: "herbes", second: false,
    fx: { clue: "i_ferrat" },
    text: [
      "Ferrat cesse de piler. Il essuie ses doigts jaunes sur son tablier, un par un, avec la lenteur d'un homme qui choisit ses mots comme ses poudres, au trébuchet.",
      "« Du pavot, dit-il. Et de l'herbe des sorciers, ce que les savants appellent la datura, une plante qui pousse sur les tas d'ordures et qui fait voir aux paysans le diable en personne. Trois heures de sommeil, et la nuit effacée, proprement, comme une ardoise. Vous me l'avez acheté à quatre heures du matin. Vous avez frappé au volet. Vous avez payé, vous avez demandé la dose exacte, et vous saviez très bien ce que vous faisiez. »",
      "Il reprend son pilon. « On vient me voir pour oublier un mort, un amour, une dette. Vous, c'était la première fois qu'on me demandait d'oublier une nuit qu'on n'avait pas encore finie. J'ai trouvé ça intéressant. Je n'ai pas posé de questions. Je ne pose jamais de questions. C'est pour ça qu'on me paie le double. »",
    ],
    choices: [
      { back: "A_apothicaire" },
    ] },

  A_ferrat_ordonnance: { act: "I", title: "L'ordonnance", place: "herbes", second: false,
    text: [
      "« Je garde deux choses pour vous », dit Ferrat. Il ouvre un tiroir sous le comptoir, en sort une ordonnance pliée, et la pose devant toi. « Celle-ci, vous m'avez dit de vous la donner si vous me demandiez si j'avais quelque chose pour vous. »",
      "Il referme le tiroir. « L'autre, vous m'avez dit de vous la donner seulement si vous la demandiez par son nom. Vous avez une façon très précise d'être confus{e}. »",
    ],
    choices: [
      { back: "A_apothicaire" },
    ] },

  A_ordonnance: { act: "I", title: "Le dos de l'ordonnance", place: "herbes", second: false, puzzle: "m3",
    text: [
      "Au recto, de la main de Ferrat : *Une fiole. Pavot, datura. À boire d'un trait.* Au verso, de la tienne, quatre lignes.",
    ],
    choices: [
      { back: "A_apothicaire" },
    ] },

  A_m3: { act: "I", title: "Sous ton talon", place: "herbes", second: false,
    text: [
      "Le vestiaire. Le bal de l'Opéra, où tu as passé la nuit si l'on en croit tout le monde. *Le tien est sous ton talon.*",
      "Tu t'assieds sur le tabouret des clients et tu ôtes ton soulier gauche, sous le regard de Ferrat, qui en a vu d'autres. Dans le soulier, sous la semelle de feutre, plié en deux : un carton de l'Opéra, à bord doré, avec un numéro peint en rouge. Le *7*.",
      "Ta gêne au talon s'en va. Une autre la remplace, plus haut.",
    ],
    choices: [
      { back: "A_apothicaire" },
    ] },

  A_ferrat_clef: { act: "I", title: "La clef", place: "herbes", second: false,
    fx: { item: "clef_masque" },
    text: [
      "« La clef », répète Ferrat, avec une petite satisfaction de joueur d'échecs qui voit l'adversaire jouer le coup prévu. Il soulève le couvercle d'un bocal étiqueté *Racine de guimauve*, plonge deux doigts dans la poudre blanche, et en retire une minuscule clef de laiton, qu'il souffle et qu'il te tend.",
      "« Vous m'avez dit : s'il la demande, c'est qu'il est assez réveillé pour décider. Je vous la rends. Ce que vous en ferez ne me regarde pas. » Il hausse les épaules. « Vous m'avez dit aussi, si je me souviens bien, de ne pas l'ouvrir avant midi. Mais vous me l'avez dit hier, et hier vous étiez quelqu'un d'autre. »",
    ],
    choices: [
      { back: "A_apothicaire" },
    ] },

  A_masque_ote: { act: "I", title: "Démasqué{e}", place: "herbes", second: false,
    fx: { flag: "masque:ote" },
    text: [
      "La petite clef tourne. Le cadenas s'ouvre avec un déclic de bijou. La tresse se défait, et le masque glisse dans ta main, chaud de ton visage, et l'air de la rue des Herbes te touche les joues, frais, chargé d'éther, comme une gifle légère.",
      "Dans le miroir piqué, derrière le comptoir, ton visage te regarde, pâle, marqué par le carton, avec des yeux de quelqu'un qui n'a pas dormi depuis deux jours. Tu le reconnais. C'est un soulagement très bref.",
      "Dehors, un homme en livrée prune passe devant la vitrine, ralentit, te regarde. Il te reconnaît aussi : l'écrivain public des arcades, celui qui écrit les lettres de tout le quartier. Il repart en hâte, sans un mot, dans la direction de la savonnerie.",
      "« Voilà, dit Ferrat, en reprenant son pilon. Vous êtes quelqu'un, à présent. C'est toujours plus dangereux. »",
    ],
    choices: [
      { back: "A_apothicaire" },
    ] },

  A_sels: { act: "I", title: "Les sels", place: "herbes", second: false,
    fx: { gold: -1, flag: "souvenir:rire" },
    text: [
      "Ferrat te fait respirer, pour un sou, un flacon de sels d'ammoniaque, en te tenant la nuque comme on tient celle d'un chiot qu'on veut corriger. L'odeur te traverse le crâne d'un trait, d'une narine jusqu'à l'occiput, et pendant une seconde, une seule, quelque chose revient.",
      "Un rire. Un rire de jeune fille, vif, haut, un peu essoufflé, tout près de ton oreille, dans le noir, avec une odeur de cire et de vieux bois. Et des taches de rousseur, sur un nez, à la lueur d'une lanterne. Puis rien.",
      "« C'est tout ce que ça fait, dit Ferrat, en rebouchant le flacon. Ça rend un morceau. Pour le reste, il faut attendre que l'herbe s'en aille. Huit jours. Ou jamais. Je n'ai jamais su lequel. »",
    ],
    choices: [
      { back: "A_apothicaire" },
    ] },

  // ------------------------------------------------------------------ the Opera
  A_opera: { act: "I", title: "L'Opéra au matin", place: "opera", second: false, hub: true, backName: "le grand foyer",
    text: [
      { first: true, text: "L'Opéra de Lambrun, à neuf heures du matin, après le bal, ressemble à un champ de bataille dont les morts se seraient relevés pour aller se coucher. Le grand foyer est jonché de serpentins, de plumes, de loups abandonnés, de verres brisés, de souliers dépareillés. Les lustres de cristal sont encore allumés pour quelques bougies, qui coulent sur les pampilles et font pleurer le plafond. Une odeur de vin aigre, de poudre et de sueur parfumée stagne sous les dorures." },
      { first: true, text: "Des balayeurs poussent des montagnes de confettis avec la résignation de Sisyphe. Sur une banquette de velours, un Grand Turc ronfle, son turban sur les yeux. Au fond, derrière un comptoir d'acajou, une vieille femme en bonnet de dentelle tricote au milieu de manteaux pendus, comme une Parque au milieu de ses fils." },
      { first: true, if: { has: "lazare:seul" }, text: "Et sur une banquette, les jambes croisées, l'Arlequin. Lazare. Il te fait un petit signe de la main, comme s'il t'attendait ici depuis le début. « Je te l'avais dit, {hero} : je ne suis jamais loin. »" },
      { again: true, text: "Le grand foyer saccagé, les lustres qui pleurent, les balayeurs. La dame du vestiaire tricote au milieu des manteaux." },
    ],
    choices: [
      { label: "Présenter le ticket au vestiaire", if: { item: "ticket" }, hide: { seen: "A_vestiaire" }, to: "A_vestiaire" },
      { label: "Lire le mot épinglé dans le sac", if: { seen: "A_vestiaire" }, hide: { has: "enigme:m4" }, to: "A_mot_sac" },
      { label: "Monter dans la grande salle", hide: { seen: "A_salle" }, to: "A_salle" },
      { label: "Faire le tour par la rue des Cordiers, derrière l'Opéra", hide: { seen: "A_cordiers" }, to: "A_cordiers" },
      { label: "Interroger les balayeurs", hide: { seen: "A_balayeurs" }, to: "A_balayeurs" },
      { label: "Faire un détour par la maison Ardel", if: { has: "enigme:m4" }, hide: { seen: "A_ardel" }, fx: { time: 1 }, to: "A_ardel" },
      { label: "Suivre la quatrième fleur jusqu'au quai de Gênes", if: { has: "enigme:m4" }, fx: { time: 1 }, to: "A_quai" },
    ] },

  A_vestiaire: { act: "I", title: "Le numéro 7", place: "opera", second: false,
    fx: { item: "papiers" },
    text: [
      "La dame du vestiaire prend ton ticket, le regarde par-dessous ses lunettes, le regarde encore, puis te regarde, toi. « Le sept. Le Pierrot. » Elle se lève, disparaît entre les manteaux, et revient avec un sac de tapisserie, à fleurs passées, fermé d'une boucle de cuivre. « Vous l'avez déposé à cinq heures. Vous m'avez donné un sou de plus pour que je ne le donne à personne d'autre, même avec le ticket. J'ai dit : si quelqu'un d'autre a le ticket, c'est qu'il vous l'a pris, et ça me regarde pas. Vous avez dit : justement. »",
      "Tu ouvres le sac sur le comptoir. Dedans, un passeport pour Gênes au nom de *Clarisse Ardel, dix-neuf ans, demoiselle, cheveux roux, yeux gris*, avec un cachet de la préfecture. Une lettre en italien, d'une écriture de vieille dame, qui commence par *Carissima nipote*. Une chemise de nuit pliée, une brosse en écaille, un petit portrait au pastel d'une femme rousse. Et épinglé à la doublure, un papier de ta main.",
      { if: { has: "lazare:avec" }, text: "Lazare se penche par-dessus ton épaule pour regarder, avec une curiosité gaie. En se penchant, un petit carnet de bal tombe de sa manche à losanges et glisse sur le parquet, entre vos pieds." },
      { if: { not: { has: "lazare:avec" } }, text: "Une ombre à losanges s'approche du comptoir. Lazare se penche par-dessus ton épaule pour regarder le sac, avec une curiosité gaie. En se penchant, un petit carnet de bal tombe de sa manche et glisse sur le parquet, entre vos pieds." },
    ],
    choices: [
      { label: "Ramasser le carnet avant lui", hide: { any: [{ seen: "A_carnet" }, { seen: "A_carnet_rate" }] }, test: { dom: "discretion", diff: 0, label: "Discrétion" }, win: { to: "A_carnet" }, lose: { to: "A_carnet_rate" } },
      { label: "Laisser Lazare porter le sac", if: { has: "lazare:avec" }, hide: { any: [{ has: "lazare:sac" }, { seen: "A_sac_garde" }] }, fx: { flag: "lazare:sac" }, to: "A_sac_lazare" },
      { label: "Garder le sac contre toi", hide: { any: [{ has: "lazare:sac" }, { seen: "A_sac_garde" }] }, to: "A_sac_garde" },
      { back: "A_opera" },
    ] },

  A_carnet: { act: "I", title: "Le carnet de bal", place: "opera", second: false,
    fx: { clue: "i_code" },
    text: [
      "Ta main est plus rapide que la sienne. Tu ramasses le carnet, un petit agenda de bal en nacre, avec son crayon pendu à un cordonnet, et tu l'ouvres en te relevant, d'un geste naturel, comme pour le lui rendre.",
      "Des noms de danses, des noms de femmes, des chiffres de pharaon. Et sur la dernière page, au crayon, d'une écriture penchée : *Coffre de G. : la noce. 2 · 4 · 0 · 3.*",
      "Lazare te reprend le carnet des doigts, très vite, très souriant. « Mes conquêtes, dit-il. Un gentleman ne les montre pas. » Il le glisse dans sa manche. Il sourit toujours. Ses yeux, derrière le loup, se sont un peu refroidis.",
    ],
    choices: [
      { back: "A_vestiaire" },
    ] },

  A_carnet_rate: { act: "I", title: "Trop lent{e}", place: "opera", second: false,
    text: [
      "Lazare est plus rapide que toi. Il ramasse le carnet d'un mouvement de chat, et dans l'instant où il le referme, tu as juste le temps de lire, au crayon, sur la dernière page : *Coffre de G. : la noce.* La suite est sous son pouce.",
      "« Mes conquêtes, dit-il en le glissant dans sa manche. Un gentleman ne les montre pas. »",
    ],
    choices: [
      { back: "A_vestiaire" },
    ] },

  A_sac_lazare: { act: "I", title: "Le sac de Lazare", place: "opera", second: false,
    text: [
      "« Donne, dit Lazare, je porte. Tu as l'air d'un mort qui marche, et les morts n'ont pas besoin de bagages. » Il prend le sac de tapisserie, le passe à son épaule. Il le porte bien. Il le porte comme quelque chose qui lui appartiendrait déjà.",
    ],
    choices: [
      { back: "A_vestiaire" },
    ] },

  A_sac_garde: { act: "I", title: "Le sac contre toi", place: "opera", second: false,
    text: [
      "Tu refermes la boucle de cuivre et tu passes la bandoulière en travers de ta poitrine, sous la collerette. Le sac est léger. Il pèse le poids d'une vie qui tiendrait dans un passeport et une brosse à cheveux.",
      { if: { has: "lazare:avec" }, text: "Lazare tend la main, ouvre la bouche pour offrir de le porter, voit ton geste, et rit. « Méfiant{e} ! Tu as bien raison. L'Opéra est plein de voleurs. »" },
    ],
    choices: [
      { back: "A_vestiaire" },
    ] },

  A_mot_sac: { act: "I", title: "Le mot du sac", place: "opera", second: false, puzzle: "m4",
    text: [
      "Tu détaches le papier épinglé à la doublure. L'épingle est une épingle à cheveux, en écaille, comme la brosse.",
    ],
    choices: [
      { back: "A_opera" },
    ] },

  A_m4: { act: "I", title: "Deux places", place: "opera", second: false,
    text: [
      "L'Hirondelle. Tout Lambrun connaît la barque de Gênes, son étrave peinte en bleu et son oiseau sculpté à la proue. Elle part du quai de Gênes, à l'embouchure, quand la marée tourne, et la marée tourne à midi, ce vendredi.",
      "*J'ai deux places sur mon dos.* Un passeport, une lettre de grand-mère, deux places sur une barque. Le dessin de la nuit se précise, comme une gravure qui sort de l'acide.",
    ],
    choices: [
      { back: "A_opera" },
    ] },

  A_salle: { act: "I", title: "La grande salle", place: "opera", second: false,
    text: [
      "La salle de bal est la salle de spectacle elle-même, dont on a recouvert le parterre d'un plancher pour danser. À neuf heures du matin, elle est immense et vide, avec ses quatre étages de loges noires qui la regardent comme les orbites d'un crâne de géant. Des guirlandes pendent, décrochées. Au centre du plancher, une flaque de champagne reflète le lustre.",
      "Sur l'estrade de l'orchestre, abandonné entre les pupitres, un grand bocal de verre, vide, avec une affichette : *Loterie des masques. Gagnant du grand domino noir : un Pierrot.* Quelqu'un a ajouté au crayon : *Tricheur !*",
      "Tu restes longtemps au milieu du plancher. Rien ne te revient, sauf, au bout des orteils, une envie de danser qui ne t'appartient pas, et qui s'en va.",
    ],
    choices: [
      { back: "A_opera" },
    ] },

  A_balayeurs: { act: "I", title: "Les balayeurs", place: "opera", second: false,
    text: [
      "Les balayeurs s'appuient sur leurs balais avec soulagement, trop heureux qu'on leur donne un prétexte. « Un Pierrot ? dit le plus vieux. Il y en avait trente, de Pierrots. Mais un qui a gagné la loterie, oui, vers minuit. Il a deviné la devinette avant que le Turc ait fini de la lire. Les gens ont crié au tricheur. »",
      "« Et après, dit le plus jeune, il a donné le domino noir à une demoiselle en rose, derrière un pilier. Et la demoiselle en rose est ressortie en noir, et la Reine des Blanchisseuses est ressortie en rose. Moi, je dis rien, je balaie. »",
      "« Vers une heure, reprend le vieux, le Pierrot et le domino noir sont sortis par la porte des artistes. Et un Arlequin les a cherchés partout, jusqu'à trois heures, en soulevant les nappes. »",
    ],
    choices: [
      { back: "A_opera" },
    ] },

  // ------------------------------------------------------------------ the Ardel house
  A_ardel: { act: "I", title: "La maison Ardel", place: "ardel", second: false, hub: true, backName: "la maison Ardel",
    text: [
      { first: true, text: "La maison Ardel se dresse au-dessus de sa savonnerie comme un parvenu sur son tas d'or : quatre étages de pierre blanche, des balcons de fonte, des pots à feu sur la corniche, et dessous, au rez-de-chaussée, les grandes portes cochères d'où sortent les charrettes chargées de pains de savon. Les cheminées fument. L'air sent l'huile d'olive bouillie, la soude et la lavande de synthèse, une odeur si propre qu'elle en devient malsaine." },
      { first: true, text: "Devant le perron, une calèche blanche attend, décorée de rubans blancs et de fleurs d'oranger en cire, et les chevaux eux-mêmes portent des cocardes. Mais la calèche reste vide. Des valets en livrée prune entrent et sortent en courant, les visages défaits. Une fenêtre du premier étage est ouverte, et par cette fenêtre sort, de temps en temps, un cri d'homme." },
      { again: true, text: "La maison Ardel, la calèche blanche qui attend, les valets prune qui courent." },
    ],
    choices: [
      { label: "Observer les fenêtres du rez-de-chaussée", hide: { seen: "A_ardel_bourse" }, to: "A_ardel_bourse" },
      { label: "Parler au cocher de la calèche blanche", hide: { seen: "A_cocher" }, to: "A_cocher" },
      { label: "Parler à la cuisinière, à la porte de l'office", hide: { seen: "A_ardel_cuisine" }, to: "A_ardel_cuisine" },
      { label: "Attendre que Monsieur Ardel paraisse sur le perron", if: { seen: "A_ardel_cuisine" }, hide: { seen: "A_gaspard_matin" }, to: "A_gaspard_matin" },
      { label: "Aller au quai de Gênes", hide: { seen: "A_quai" }, fx: { time: 1 }, to: "A_quai" },
      { label: "Aller au clocher de Saint-Brice", if: { has: "enigme:m5" }, fx: { time: 1 }, to: "A_clocher" },
    ] },

  A_ardel_bourse: { act: "I", title: "La main gantée", place: "ardel", second: false,
    fx: { clue: "i_lazare_gaspard" },
    text: [
      { if: { has: "lazare:avec" }, text: "Lazare te touche le bras. « Attends-moi là une minute. J'ai une petite course. » Il s'éloigne d'un pas léger, tourne le coin de la maison, et tu le perds de vue. Puis, parce que tu as le temps et le mauvais esprit, tu fais trois pas de côté, jusqu'à l'angle du mur." },
      { if: { not: { has: "lazare:avec" } }, text: "Tu longes la façade, sous les fenêtres du rez-de-chaussée, comme un badaud qui regarde la calèche. À l'angle, dans le renfoncement d'une porte de service, un costume à losanges rouges, verts et jaunes. L'Arlequin. Lazare." },
      "Une fenêtre basse s'entrouvre. Une main en sort, gantée de chevreau prune, avec une chevalière d'or à l'auriculaire, et laisse tomber une bourse dans la main de l'Arlequin. Une voix douce et lasse, à l'intérieur, dit quelques mots que tu n'entends pas. Lazare s'incline, très bas, très comique, comme au théâtre.",
      "La fenêtre se referme. Lazare soupèse la bourse, la fait disparaître dans sa manche, et se retourne.",
      { if: { has: "lazare:avec" }, text: "Quand il revient vers toi, une minute plus tard, il sifflote. « Une dette de jeu qu'on me devait, dit-il. Les gens honnêtes paient le matin. »" },
    ],
    choices: [
      { back: "A_ardel" },
    ] },

  A_ardel_cuisine: { act: "I", title: "La cuisinière", place: "ardel", second: false,
    text: [
      "La cuisinière des Ardel fume une pipe en terre sur le pas de l'office, les poings sur les hanches, en regardant courir les valets avec le mépris tranquille du personnel qui nourrit celui qui commande. Elle te jauge, Pierrot parmi d'autres. « Si tu viens pour la noce, mon pauvre, t'as le temps de mourir de faim. »",
      "Tu demandes ce qui se passe. Elle crache, et se met à parler, car une cuisinière qui a un secret le porte comme une marmite trop pleine.",
      "« La demoiselle a disparu cette nuit. Au bal. Monsieur l'a amenée à dix heures, au bras de son vieux, et à une heure, plus de demoiselle. Monsieur est vert. Le vieux Coquelin arrive à midi, à l'église, avec son notaire et son prêt. Pas de mariée, pas de prêt. Pas de prêt, plus de savonnerie. Plus de savonnerie, plus de cuisinière. » Elle tire sur sa pipe. « Moi, je dis que la petite a bien fait. Mais je le dis à un Pierrot, parce que les Pierrots, ça répète rien, ça a pas de bouche. »",
    ],
    choices: [
      { back: "A_ardel" },
    ] },

  A_gaspard_matin: { act: "I", title: "Monsieur Ardel", place: "ardel", second: false,
    fx: { meet: ["gaspard"] },
    text: [
      "La porte s'ouvre, et un homme sort sur le perron, grand, soigné, en redingote prune, une moustache trop noire pour son âge. Il ronge l'ongle de son pouce, à petits coups secs, comme un écureuil qui aurait des dettes. Gaspard Ardel. Il regarde la calèche blanche, les fleurs de cire, les chevaux à cocarde, avec l'expression d'un homme qui contemple son propre corbillard.",
      "Ses yeux passent sur toi, sur ton masque blanc, sur ta rose de papier, et s'arrêtent une seconde. Puis il les détourne. Un Pierrot. Il y en a trente en ville.",
      "« Qu'on attelle quand même, dit-il au cocher, d'une voix douce et lasse. Midi, c'est midi. On la trouvera. On la trouve toujours. » Il rentre. Tu remarques, quand il pose la main sur la poignée, qu'il porte des gants de chevreau prune.",
    ],
    choices: [
      { back: "A_ardel" },
    ] },

  // ------------------------------------------------------------------ the Genoa quay
  A_quai: { act: "I", title: "Le quai de Gênes", place: "quai", second: false, hub: true, backName: "le quai",
    fx: { meet: ["rosso"] },
    text: [
      { first: true, text: "Le quai de Gênes est le bout de la ville, l'endroit où les canaux renoncent et se jettent dans l'estuaire, gris, large, plat, qui sent le sel et le goudron. Des barques s'y serrent bord à bord, des tartanes, des felouques, des gabares, et leurs mâts se balancent ensemble au clapot comme une forêt de cierges dans une église ivre." },
      { first: true, text: "L'Hirondelle est là, au bout du quai : une longue barque de commerce, étrave bleue, une hirondelle de bois doré à la proue, ailes ouvertes, bec pointé vers la mer. On y charge des pains de savon par chaînes humaines, en chantant une chanson génoise. Sur le pont, un homme en caban, une casquette de cuir sur l'oreille, fume un cigare en surveillant tout d'un œil et la marée de l'autre." },
      { first: true, text: "Et sur le quai, la foule de la Mi-Carême commence à s'amasser autour d'un bûcher de fagots, où l'on brûlera à midi le bonhomme Carême." },
      { again: true, text: "Le quai de Gênes, l'Hirondelle qu'on charge, le bûcher du bonhomme Carême, et la foule qui grossit." },
    ],
    choices: [
      { label: "Monter à bord parler au capitaine", hide: { seen: "A_rosso" }, to: "A_rosso" },
      { label: "Lire le revers du reçu", if: { item: "passage" }, hide: { has: "enigme:m5" }, to: "A_recu" },
      { label: "Demander au capitaine de voir la cabine", if: { seen: "A_rosso" }, hide: { seen: "A_cabine" }, to: "A_cabine" },
      { label: "Interroger les portefaix", hide: { seen: "A_portefaix" }, to: "A_portefaix" },
      { label: "Regarder arriver le bonhomme Carême", hide: { seen: "A_careme" }, to: "A_careme" },
      { label: "Faire un détour par la maison Ardel", if: { has: "enigme:m5" }, hide: { seen: "A_ardel" }, fx: { time: 1 }, to: "A_ardel" },
      { label: "Suivre la dernière fleur jusqu'au clocher de Saint-Brice", if: { has: "enigme:m5" }, fx: { time: 1 }, to: "A_clocher" },
    ] },

  A_rosso: { act: "I", title: "Le capitaine Rosso", place: "quai", second: false,
    fx: { item: "passage" },
    text: [
      "Le capitaine te regarde monter la passerelle sans bouger, son cigare entre les dents. Quand tu es devant lui, il retire le cigare, crache par-dessus bord, et dit, dans un français roulé comme un galet : « Le Pierrot. Bon. Tu es à l'heure. »",
      "Il fouille la poche de son caban et en tire un papier plié. « Deux passages pour Gênes. Payés cette nuit, à trois heures, rubis sur l'ongle, par un Pierrot qui m'a réveillé en frappant sur la coque comme un huissier. Il m'a dit : demain matin, je reviendrai, je n'aurai plus de mémoire, rendez-moi le reçu. Je fais ce métier depuis trente ans, j'ai transporté des évêques, des forçats, des chanteuses et un éléphant. On ne m'avait jamais fait celle-là. »",
      { if: { voie: "matelot" }, text: "Il te regarde descendre de la passerelle au pont, d'un seul pas, sans la main, comme on descend quand on a six ans de mer dans les genoux. « Toi, tu as navigué, dit-il. Tu montes à bord comme on rentre chez soi. Cette nuit aussi. »" },
      "Il te tend le reçu. « Midi, la marée. Pas une minute après. La mer n'attend pas les amoureux, et moi j'attends encore moins. »",
    ],
    choices: [
      { back: "A_quai" },
    ] },

  A_recu: { act: "I", title: "Le revers du reçu", place: "quai", second: false, puzzle: "m5",
    text: [
      "Tu retournes le reçu du capitaine. Ton écriture, là encore, mais si pressée, si penchée qu'elle semble courir sur le papier pour arriver avant toi.",
    ],
    choices: [
      { back: "A_quai" },
    ] },

  A_m5: { act: "I", title: "Sous sa robe", place: "quai", second: false,
    text: [
      "La cloche. La Bourdonne de Saint-Brice, la plus grosse cloche de Lambrun, qui sonne les baptêmes, les incendies et les mariages. *À midi, je crierai la noce ou je crierai la fuite.* Et sous sa robe de bronze, dans la chambre des cloches, en haut de la tour : quelqu'un.",
      "Tu lèves les yeux. Au-dessus des toits, le clocher noir se découpe sur le ciel gris. Une volée de pigeons en tombe, effrayée par quelque chose, et tourne autour de la flèche.",
    ],
    choices: [
      { back: "A_quai" },
    ] },

  A_portefaix: { act: "I", title: "Les portefaix", place: "quai", second: false,
    text: [
      "Les portefaix de la chaîne humaine se passent les pains de savon de main en main, et ils parlent en même temps, à la cadence, si bien que chaque phrase arrive en morceaux, au rythme du chargement.",
      "« Les gens d'Ardel... — à sept heures... — ils ont fouillé... — toutes les barques... — même la nôtre... — le capitaine les a jetés à l'eau... — un à un... — en jurant en génois... — ils cherchaient une fille rousse... — dans les pains de savon... »",
      "Ils rient tous ensemble, sans s'arrêter. Le savon passe. La marée monte.",
    ],
    choices: [
      { back: "A_quai" },
    ] },

  A_careme: { act: "I", title: "Le bonhomme Carême", place: "quai", second: false,
    text: [
      "Il arrive par la rue des Cordiers, sur une charrette tirée par un âne enrubanné, au milieu d'une procession de masques qui hurlent et de gamins qui lui jettent des harengs saurs : un mannequin de paille de dix pieds de haut, vêtu d'un habit noir de croque-mort, avec une tête de chiffon peinte, un long nez de carton et deux yeux de bouchon qui regardent le ciel avec une affliction de prédicateur.",
      "On le hisse sur le bûcher, on l'attache au poteau, on lui met dans la main une morue séchée en guise de crucifix. À midi, on y mettra le feu, et tout Lambrun criera que le carême est mort, pour quelques heures, avant qu'il ressuscite le lendemain matin, comme chaque année, plus maigre et plus têtu.",
      "Tu regardes le mannequin. Il te regarde. Vous portez l'un et l'autre un visage qui n'est pas le vôtre, et l'un et l'autre, à midi, on vous fera quelque chose.",
    ],
    choices: [
      { back: "A_quai" },
    ] },

  // ------------------------------------------------------------------ the belfry
  A_clocher: { act: "I", title: "Le clocher de Saint-Brice", place: "clocher", second: false, hub: true, backName: "le pied du clocher",
    fx: { meet: ["tiburce"] },
    text: [
      { first: true, text: "L'église Saint-Brice est déjà parée pour la noce. Des tentures blanches pendent au portail, des fleurs d'oranger en cire ornent les bénitiers, et le bedeau balaie le parvis en prévision des souliers de satin. Le clocher, lui, se dresse à côté, séparé de l'église, une tour carrée de pierre noire, haute de cent vingt marches, couronnée d'une flèche d'ardoise. Le vent siffle dans les abat-sons comme dans les côtes d'un squelette." },
      { first: true, text: "À la petite porte basse de la tour, assis sur une borne, un géant voûté aux cheveux roux mêlés de blanc mâche du pain et du lard avec la lenteur d'un bœuf. Il a des mains énormes, calleuses, des mains qui tirent des cordes depuis quarante ans. Il te regarde arriver et reste assis. « LE MOT ? » crie-t-il, si fort que les pigeons s'envolent du parvis." },
      { first: true, if: { has: "lazare:avec" }, text: "Lazare, à côté de toi, lève les yeux vers le haut de la tour, très longtemps, avec une expression que tu n'avais pas encore vue sur son visage : le calme." },
      { again: true, text: "La tour noire, la porte basse, le sonneur sur sa borne." },
    ],
    choices: [
      { label: "Entrer dans l'église Saint-Brice", hide: { seen: "A_eglise" }, to: "A_eglise" },
      { label: "Demander au sonneur ce que tu as fait cette nuit", if: { seen: "A_tiburce_monte" }, hide: { seen: "A_tiburce_nuit" }, to: "A_tiburce_nuit" },
      { label: "Lui dire « Hirondelle »", hide: { seen: "A_tiburce_monte" }, to: "A_tiburce_monte" },
      { label: "Lui dire « Blanchisseuse »", hide: { any: [{ seen: "A_tiburce_doute" }, { seen: "A_tiburce_monte" }] }, to: "A_tiburce_doute" },
      { label: "Lui dire « Masque »", hide: { any: [{ seen: "A_tiburce_doute" }, { seen: "A_tiburce_monte" }] }, to: "A_tiburce_doute" },
      { label: "Monter à la chambre des cloches", if: { seen: "A_tiburce_monte" }, to: "A_chambre_cloches" },
    ] },

  A_tiburce_doute: { act: "I", title: "Le mauvais mot", place: "clocher", second: false,
    text: [
      "Le sonneur cesse de mâcher. Il te regarde longtemps, les sourcils broussailleux tirés vers le bas comme des volets.",
      "« NON, crie-t-il. MAIS T'AS LA ROSE. » Il désigne la rose de papier sur ta blouse avec son couteau. « T'AS DIT : IL SAURA PLUS LE MOT, LE PAUVRE. IL AURA LA ROSE. ESSAIE ENCORE. LE MOT, C'EST CE QUI PART À MIDI. »",
    ],
    choices: [
      { back: "A_clocher" },
    ] },

  A_tiburce_monte: { act: "I", title: "Le sonneur", place: "clocher", second: false,
    text: [
      "Le géant se lève d'un coup, et il est encore plus grand debout, il cache la moitié de la tour. Il range son couteau, son pain, son lard, essuie ses mains sur ses cuisses. « HIRONDELLE, répète-t-il, content. C'EST ÇA. T'ES LE BON. »",
      "Il ouvre la porte basse avec une clef longue comme un avant-bras. « Tiburce, crie-t-il, comme si tu l'avais oublié aussi, ce qui est le cas. Le sonneur. Quarante ans de Bourdonne. J'ai sonné son baptême, à la petite. Je sonnerai pas son mariage. Je sonnerai autre chose, si tu me le dis. »",
      { if: { has: "lazare:avec" }, text: "Il pose sa grosse main sur la poitrine de Lazare, qui voulait entrer derrière toi. « LUI, NON. » Lazare lève les mains en riant. « Je garde la porte, alors. Il faut bien quelqu'un pour garder les portes. »" },
    ],
    choices: [
      { back: "A_clocher" },
    ] },

  A_chambre_cloches: { act: "I", title: "La chambre des cloches", place: "clocher", second: false,
    fx: { meet: ["clarisse"], flag: "nuit:comprise", ep: ["histoire", 500] },
    text: [
      "Cent vingt marches de pierre, usées en cuvette par des siècles de sonneurs, dans une spirale si étroite que tes épaules frottent les deux murs à la fois. Le noir, l'odeur de fiente de pigeon et de vieux chanvre, le vent qui siffle dans les meurtrières. Puis une trappe, une échelle, et la lumière grise des abat-sons.",
      "La chambre des cloches est une cage de poutres noires où pendent quatre cloches, trois petites et une énorme, la Bourdonne, une montagne de bronze verdi, grosse comme une chaumière, suspendue à son joug de chêne avec la patience d'un animal endormi. Le vent fait vibrer son bord, et l'on entend, si l'on tend l'oreille, un bourdonnement presque inaudible, continu, comme un chat géant qui ronronnerait en rêve.",
      "Sous la robe de la cloche, dans l'ombre, accroupie sur un sac de chanvre, une jeune fille en domino noir lève la tête. Elle a rabattu le capuchon. Ses cheveux roux en sortent en désordre, et la lumière grise accroche, sur son nez, des taches de rousseur.",
      { if: { has: "souvenir:rire" }, text: "Tu les reconnais. Ce sont celles de la lanterne, celles que les sels de Ferrat t'ont rendues pendant une seconde." },
      "« Enfin ! » Elle se lève, se cogne la tête au bord de la cloche, qui vibre, jure comme une blanchisseuse, et rit, d'un rire vif, haut, un peu essoufflé. Puis elle s'arrête, et te regarde mieux. « Vous ne me reconnaissez pas. Vous l'aviez dit. Vous l'aviez bu exprès. » Elle te prend les mains, regarde l'encre sur tes doigts. « Clarisse Ardel. On devait me marier à midi. Vous m'avez cachée ici cette nuit. Vous avez tout préparé. Vous avez dit : si on me prend, je ne pourrai rien avouer, puisque je ne saurai rien. Et demain matin, je me retrouverai moi-même. »",
      "Elle rit encore, plus bas. « Vous vous êtes retrouvé{e}. Vous êtes plus lent{e} que prévu. »",
    ],
    choices: [
      { label: "Lui donner ce que tu as trouvé en chemin et descendre vers le quai", to: "F_masque" },
      { label: "Attendre midi avec elle, sous la cloche", to: "F_masque" },
    ] },

  F_masque: { act: "I", title: "Le masque tombé", place: "clocher", end: true, second: false,
    fx: { flag: "fin:masque" },
    text: [
      "Une voix monte de l'escalier, une voix familière et gaie. « {hero} ! Hé ! {hero} ! »",
      "Lazare sort de la trappe, tranquillement, comme on sort de sa chambre. Il a ôté son loup noir. Son visage est jeune, maigre, ordinaire, un visage de valet. Derrière lui montent deux hommes en livrée prune, essoufflés, et derrière eux, plus lentement, une redingote prune et une moustache trop noire.",
      { if: { has: "lazare:avec" }, text: "« Merci de m'avoir mené jusqu'ici, dit Lazare. Je l'ai cherchée toute la nuit. Toi, tu savais où elle était, même sans le savoir. Il suffisait de te tenir le bras. »" },
      { if: { has: "lazare:seul" }, text: "« Tu as marché seul{e} toute la matinée, dit Lazare. Et moi, toute la matinée, j'ai marché dix pas derrière toi. Il suffisait de suivre les fleurs. Tu les avais laissées pour toi ; elles servent à tout le monde. »" },
      { if: { has: "masque:ote" }, text: "Il n'a même pas besoin de te démasquer. Ton visage est nu depuis la rue des Herbes, et la moitié de la ville l'a reconnu avant lui." },
      { if: { not: { has: "masque:ote" } }, text: "Il s'approche de toi, sort de sa manche un petit couteau, et coupe la tresse de soie derrière ta tête, d'un coup net. Le masque tombe sur le plancher, et roule, et s'arrête la larme en l'air. « Les cadenas, dit Lazare, c'est pour les honnêtes gens. »" },
      { if: { has: "enigme:m_chiffre" }, text: "*L'Arlequin est à Gaspard.* Tu l'avais déchiffré. Tu le savais. Savoir ne t'a servi à rien, parce qu'il te manquait le reste de ce que tu savais cette nuit." },
      { if: { clue: "i_lazare_gaspard" }, text: "Tu revois la main gantée de prune, la bourse, la révérence de théâtre. Gaspard Ardel tend la même main vers sa nièce." },
      "Clarisse recule sous la cloche jusqu'à toucher le bronze. Elle se tait. Elle regarde son oncle avec une telle fureur froide que l'un des valets baisse les yeux. « Venez, ma chérie, dit Gaspard Ardel, de sa voix douce et lasse. Monsieur Coquelin vous attend. Il est vieux ; il ne vous attendra pas longtemps, ni dans un sens ni dans l'autre. »",
      { if: { item: "papiers" }, text: "Un valet t'arrache le sac de tapisserie et le tend à son maître, qui en retire le passeport, le regarde, et le déchire en quatre, avec soin, comme on déchire une lettre d'amour devant celui qui l'a écrite." },
      { if: { has: "lazare:sac" }, text: "Lazare porte toujours le sac de tapisserie à l'épaule. Il le tend à son maître avec une révérence. Le passeport en sort, et Gaspard Ardel le déchire en quatre." },
      "Ils l'emmènent. Tiburce, en bas de l'échelle, un valet sur chaque bras, hurle des injures que la cage des cloches renvoie comme un écho de cathédrale. Lazare reste le dernier. Il ramasse ton masque, le regarde, te le rend. « Tu as fait de ton mieux, dit-il, gentiment. Tu as dormi au mauvais moment, c'est tout. Ça arrive aux meilleurs. »",
      "Midi. Un valet tire la corde. La Bourdonne s'ébranle au-dessus de toi, lentement, puis plus vite, et le premier coup tombe sur Lambrun comme une pierre dans un puits, si énorme, si proche, qu'il te traverse le corps et te jette à genoux. Elle sonne la noce. Elle sonne la noce à toute volée, pendant que sur le quai, au loin, le bonhomme Carême prend feu, et que l'Hirondelle, entre les fumées, déploie sa voile et s'en va vers Gênes avec deux places vides sur le dos.",
      "Tu restes à genoux sous la cloche qui hurle, ton masque à la main, avec dans la tête un trou à la forme exacte d'une nuit. Quelqu'un, cette nuit, avait tout prévu. Quelqu'un avait tout écrit pour toi, sauf une ligne : celle qui t'aurait dit de te taire devant un ami.",
    ] },
};
