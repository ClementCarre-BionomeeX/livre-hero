// L'Île Folle-Aiguille · act I, more days at the Fanal while the Gabier lives there. The pots with old Pochon (a seal, a
// drowned man's hat), market day in Varnèse with Zélie (fanal:marche_vu: the child has seen the doctor before she is
// called), the night of the wreck (fanal:naufrage_sauve, fanal:naufrage_pille, fanal:gabier_eau), the lantern that
// answers the sea (fanal:signal or fanal:signal_noir), the knots of the Gabier (gabier:noeuds), the washerwomen of the
// night (fanal:lavoir), the brigadier's visit at last (fouques:piastre).
module.exports = {
  passages: {
    // ---------------------------------------------------------------- the pots
    XA_casiers: { act: "I", title: "Les casiers", place: "greve", ambiance: "mer",
      text: [
        "Le père Pochon relève ses casiers à l'aube, quand la mer est étale et que les goélands dorment encore sur les écueils, la tête sous l'aile, comme des notaires. Il a soixante-dix ans, une barque qui en a quarante, et une méthode qui en a deux cents : il rame sans hâte, il ne parle qu'en mer, et il ne parle que de la terre.",
        "Tu tires les casiers à la main, l'un après l'autre, du fond vert. Ils remontent ruisselants, chargés de goémon, avec dedans une araignée de mer qui lève ses pinces au ciel comme une veuve indignée, ou un homard d'un bleu de nuit, ou rien du tout. Le père Pochon les vide sans un commentaire. Les homards vont au panier, les araignées à la mer, et les riens dans le grand registre de sa résignation.",
        "« Ton Gabier, dit-il au cinquième casier, en regardant le Fanal tout petit sur sa falaise. Il guette la mer comme un homme qui doit de l'argent. Moi aussi j'ai guetté comme ça, une fois, à vingt ans. J'avais engrossé la fille d'un patron de Morlenc. » Il crache par-dessus le plat-bord. « Je l'ai épousée. Ce que guette ton Gabier, à mon avis, il ne pourra pas l'épouser. »",
        "Au huitième casier, quelque chose s'est pris dans le cordage, sous la barque, et refuse de remonter.",
      ],
      choices: [
        { label: "Plonger le bras dans l'eau froide pour dégager le cordage", test: { dom: "nature", diff: 0, label: "L'eau de novembre" }, win: { to: "XA_casiers_phoque" }, lose: { to: "XA_casiers_noye" } },
        { label: "Couper le cordage, et perdre le casier", to: "XA_casiers_noye" },
      ] },
    XA_casiers_phoque: { act: "I", title: "Les casiers", place: "greve", ambiance: "mer",
      text: [
        "Tu plonges le bras jusqu'à l'épaule. L'eau te mord comme un chien. Tes doigts trouvent le cordage, le suivent, rencontrent quelque chose de lisse, de chaud, de vivant, qui bouge.",
        "Le casier remonte d'un coup, et avec lui, emmêlé dans le cordage, un jeune phoque gris, grand comme un enfant de six ans, qui te regarde de ses énormes yeux noirs mouillés avec une expression de reproche si humaine que tu manques lâcher prise.",
        "Le père Pochon sort son couteau et tranche le cordage, d'un geste. Le phoque glisse le long de la barque, plonge, ressort à dix brasses, et vous regarde encore, la tête hors de l'eau, longtemps, comme un passant qui se demande s'il doit remercier.",
        "« Les anciens disaient que ce sont les noyés, dit le père Pochon en rangeant son couteau. Qu'ils reviennent voir si on les a oubliés. » Il reprend ses avirons. « Moi, je dis que c'est des phoques. Mais je ne leur fais jamais de mal. On ne sait jamais qui a raison, avec les anciens. »",
        "Au retour, il te donne un homard pour ton père. C'est un salaire royal, chez le père Pochon. Le homard, d'ailleurs, est d'accord : il te pince deux fois avant la grève.",
      ],
      choices: [{ label: "Rentrer au Fanal avec ton homard", back: "A1_jours" }] },
    XA_casiers_noye: { act: "I", title: "Les casiers", place: "greve", ambiance: "mer",
      text: [
        "Le cordage cède, ou tu le coupes, et quelque chose remonte à la surface en tournant lentement, porté par le courant : un chapeau. Un chapeau de marin, de toile goudronnée, à large bord, avec un ruban noir, qui flotte à l'endroit, bien droit, comme si quelqu'un était encore dessous.",
        "Le père Pochon le regarde passer. Il ne le repêche pas. Il ôte son propre bonnet, et le garde à la main jusqu'à ce que le chapeau ait disparu derrière les écueils.",
        "« Celui-là, dit-il, il vient du large. La goélette de la semaine dernière, peut-être. Ou une autre. La mer a de la mémoire, mais elle range mal. » Il remet son bonnet. « Ne dis pas à Zélie qu'on a vu un chapeau. Elle mettrait trois jours à finir sa complainte. »",
      ],
      choices: [{ label: "Rentrer au Fanal, sans parler du chapeau", back: "A1_jours" }] },

    // ---------------------------------------------------------------- market day
    XA_marche: { act: "I", title: "Le marché de Varnèse", place: "varnese", ambiance: "village",
      text: [
        "Le jeudi, Zélie va au marché de Varnèse vendre les œufs, le beurre et les oignons du Fanal, et acheter ce que le Fanal ne produit pas, c'est-à-dire le sel, le sucre, le fil, le tabac pour ton père et la morale pour toi, qu'elle dispense gratuitement tout le long des deux lieues de lande.",
        "La place de Varnèse est un champ de bataille où personne ne meurt. Des poules dans des cages d'osier protestent contre leur destin. Un marchand de toile vante des draps de Hollande qui viennent de Morlenc. Un rémouleur fait chanter sa meule. Un arracheur de dents, juché sur une estrade, sous une enseigne où une mâchoire géante sourit au public, extrait une molaire à un paysan au milieu des applaudissements, en jouant de la trompette pour couvrir les cris.",
        "Zélie installe son panier au pied de l'église et t'accorde une heure de liberté, avec la recommandation de ne rien acheter, de ne parler à personne et de ne pas regarder les marionnettes, qui sont l'œuvre du démon.",
      ],
      choices: [
        { label: "Regarder les marionnettes", to: "XA_marionnettes", hide: { seen: "XA_marionnettes" } },
        { label: "Aller voir pourquoi la foule s'écarte, devant l'arracheur de dents", to: "XA_crise", hide: { seen: "XA_crise" } },
        { label: "Rejoindre Zélie, qui a vendu ses œufs", back: "A1_jours" },
      ] },
    XA_marionnettes: { act: "I", title: "Les marionnettes", place: "varnese", ambiance: "village",
      text: [
        "Le théâtre est une caisse peinte posée sur une charrette, avec un rideau rouge mangé aux mites. Une vingtaine d'enfants et trois vieillards sont assis par terre devant. On joue *Le Pirate et la Demoiselle*, qui est la seule pièce du répertoire, et que tout le monde connaît par cœur, ce qui n'empêche personne de hurler aux bons moments.",
        "Le pirate a une barbe de crin noir, un œil de verre qui tombe, et une voix de basse qui sort d'un homme minuscule caché sous la charrette. Il enlève la demoiselle, l'emmène sur une île en carton, enterre un coffre, et danse dessus en chantant. Puis un gendarme arrive, le bâtonne, le pend, et la demoiselle épouse le gendarme. Les enfants applaudissent la pendaison avec une férocité réjouissante.",
        "À la fin, le montreur sort de sous la charrette pour faire la quête. C'est un petit homme bossu, au visage doux, qui te tend son chapeau. « Il y a cinquante ans que je le pends, dit-il en souriant. Il revient chaque fois. Les pirates, c'est comme le chiendent. » Il regarde la pièce que tu mets dans son chapeau. « Et les demoiselles, elles épousent toujours le gendarme. C'est ça, le plus triste, si tu veux mon avis. »",
      ],
      choices: [{ label: "Retourner sur la place", back: "XA_marche" }] },
    XA_crise: { act: "I", title: "La crise", place: "varnese", ambiance: "village",
      text: [
        "Devant l'estrade de l'arracheur de dents, un garçon d'une douzaine d'années est tombé dans la boue, raide comme une planche, et se tord. Ses talons battent le pavé. Sa tête cogne. Une écume rose lui monte aux lèvres. Autour, la foule a reculé d'un pas, comme d'une flaque, et regarde. Une femme crie que c'est le haut mal. Un homme crie qu'il faut le saigner. L'arracheur de dents propose de lui arracher une dent, par principe.",
        "Une grande femme sèche, en robe grise, fend la foule, s'agenouille dans la boue sans un regard pour sa robe, et retourne le garçon sur le côté, d'un geste sûr. Elle a des lunettes rondes sur un nez busqué, et une sacoche de cuir noir qu'elle pose à côté d'elle.",
        "« Toi, dit-elle en te regardant, parce que tu es le plus près. Ta veste. Sous sa tête. Et tiens-lui les épaules, sans forcer. On ne retient pas une crise, on l'empêche de se faire mal. »",
      ],
      choices: [
        { label: "Faire ce qu'elle dit", fx: { flag: "fanal:marche_vu" }, to: "XA_crise_aide" },
        { label: "Reculer avec la foule, et regarder", fx: { flag: "fanal:marche_vu" }, to: "XA_crise_vue" },
      ] },
    XA_crise_aide: { act: "I", title: "La crise", place: "varnese", ambiance: "village",
      text: [
        "Tu glisses ta veste sous la tête du garçon. Tu poses tes mains sur ses épaules, sans forcer. Tu sens sous tes paumes la tempête qui le traverse, des secousses régulières, de plus en plus espacées, comme une mer qui retombe.",
        "Puis c'est fini. Le garçon s'amollit, d'un coup, et s'endort, la bouche ouverte, en ronflant. La femme en gris lui essuie l'écume avec son mouchoir, lui tâte le pouls, et se relève, en époussetant sa robe, ce qui ne sert à rien.",
        "« Merci, dit-elle. Tu as de bonnes mains. Calmes. C'est rare. » Elle se tourne vers la foule. « Le haut mal, c'est un grand mot pour une petite tête qui a trop chauffé. Ce garçon a eu une crise, il dormira jusqu'à ce soir, et il aura faim demain. Que quelqu'un le ramène chez lui, et que personne ne le saigne. » Elle regarde l'arracheur de dents. « Ni ne lui arrache rien. »",
        "Elle s'en va, sa sacoche à la main, avant que tu aies pu lui demander son nom.",
      ],
      choices: [{ label: "Retourner sur la place", back: "XA_marche" }] },
    XA_crise_vue: { act: "I", title: "La crise", place: "varnese", ambiance: "village",
      text: [
        "Tu recules d'un pas, avec les autres. Elle n'insiste pas. Elle ôte son propre châle, le plie sous la tête du garçon, et lui tient les épaules elle-même, sans forcer, en lui parlant à voix basse, comme on parle à un cheval qui a peur, jusqu'à ce que la tempête qui le traverse retombe.",
        "Quand c'est fini, elle se relève, la robe crottée jusqu'aux genoux. Elle regarde la foule, toi compris{e}, d'un œil où il y a moins de mépris que de fatigue, ce qui est pire.",
        "« Ce garçon a eu peur, dit-elle. Vous aussi. Lui, au moins, il avait une excuse. »",
        "Elle s'en va. Tu restes là, avec ta veste sur le dos, qui te pèse.",
      ],
      choices: [{ label: "Retourner sur la place", back: "XA_marche" }] },

    // ---------------------------------------------------------------- the wreck
    XA_naufrage: { act: "I", title: "La cloche", place: "greve", ambiance: "nuit",
      text: [
        "Une nuit de grand vent, la cloche de Sainte-Anne se met à sonner à toute volée, d'un battement fou, irrégulier, celui d'une main qui a peur. Le Fanal se réveille. Ton père est déjà en bas, dans le noir, à enfiler ses bottes. « Un navire, dit-il. Sur les Moines. »",
        "Les Moines sont les écueils de la pointe, trois roches noires qui sortent de l'eau à marée basse comme des têtes encapuchonnées et qui, à marée haute, disparaissent pour attendre les distraits. Tout le hameau descend à la grève, avec des lanternes, des cordes, des gaffes, des sacs. On ne sait pas encore si on vient pour sauver ou pour ramasser. On le saura en voyant ce qu'il y a.",
        "Ce qu'il y a, c'est un caboteur de Morlenc, un trois-mâts goélette, couché sur le flanc entre deux Moines, ses voiles en lambeaux claquant dans la nuit comme des draps sur un fil. La mer passe par-dessus son pont en grandes nappes blanches. Des hommes sont accrochés aux haubans. On les entend crier, quand le vent tombe. Et entre le navire et la grève, sur les vagues, des tonneaux. Des dizaines de tonneaux, qui roulent vers le rivage comme un troupeau qui rentre à l'étable.",
        "Le hameau regarde les hommes. Puis les tonneaux. Puis les hommes.",
        "Le Gabier est là, lui aussi, sans chapeau, ses tresses grises collées au front, qui regarde le navire avec un visage que tu ne lui connais pas.",
      ],
      choices: [
        { label: "Prendre une corde, et entrer dans l'eau", test: { dom: "nature", diff: 1, label: "La mer de novembre" }, win: { fx: { flag: "fanal:naufrage_sauve" }, to: "XA_n_corde" }, lose: { to: "XA_n_corde_rate" } },
        { label: "Aider Annaïg à tirer les tonneaux sur les galets", fx: { flag: "fanal:naufrage_pille" }, to: "XA_n_tonneaux" },
        { label: "Suivre le Gabier, qui marche droit vers la mer", fx: { flag: "fanal:gabier_eau" }, to: "XA_n_gabier" },
      ] },
    XA_n_corde: { act: "I", title: "La corde", place: "greve", ambiance: "nuit",
      text: [
        "Tu te noues la corde autour de la taille. Ton père en tient l'autre bout, avec le père Pochon et deux autres. Tu entres dans l'eau. Elle te prend à la ceinture, à la poitrine, au cou, glaciale, folle, qui te jette en avant et te tire en arrière à chaque vague comme une foule qui hésite.",
        "Un homme est tombé des haubans. Il flotte à trente brasses, accroché à une barrique, et la mer l'emporte vers les Moines. Tu nages vers lui. Tu ne sais pas comment. Tu sais seulement qu'à un moment tu as sa manche dans la main, puis son col, et que tu cries « Tirez ! » d'une voix que tu ne reconnais pas, et que la corde te scie la taille.",
        "On vous tire tous les deux sur les galets comme deux paquets de goémon. L'homme vomit de l'eau de mer pendant cinq minutes. Puis il te regarde. C'est un jeune matelot, à peine plus âgé que toi, roux, avec des taches de son et une dent cassée. Il te prend la main et la serre, très fort, en silence, parce qu'il n'a plus de voix.",
        "On en sauve cinq, cette nuit-là, sur onze. Ton père a les mains en sang à force d'avoir tiré la corde. Il ne dit rien sur le chemin du retour. Mais en arrivant au Fanal, il te pose sa veste sur les épaules, la sienne, encore chaude, et c'est la deuxième fois de ta vie qu'il le fait.",
      ],
      choices: [{ label: "Attendre l'aube", to: "XA_n_aube" }] },
    XA_n_corde_rate: { act: "I", title: "La corde", place: "greve", ambiance: "nuit",
      text: [
        "Tu te noues la corde autour de la taille et tu entres dans l'eau. La première vague te renverse. La deuxième te roule sur les galets, te remplit la bouche de sable et de sel, et te rejette à la grève comme un poisson dont elle ne veut pas. Ton père te tire au sec par le col, d'une seule main.",
        "« Assez », dit-il. Il ne crie pas. Il n'a jamais besoin de crier.",
        "Ce sont les hommes du hameau qui entrent à ta place, à trois, encordés, avec le père Pochon au bout de la corde, qui en a vu d'autres. On sauve quatre marins sur onze. Tu les regardes sortir de l'eau, blancs, tremblants, sous une couverture, et tu te dis que l'un d'eux aurait pu sortir de l'eau par ta main, et qu'il n'en est rien, et que la mer, cette nuit, a décidé sans toi.",
      ],
      choices: [{ label: "Attendre l'aube", to: "XA_n_aube" }] },
    XA_n_tonneaux: { act: "I", title: "Les tonneaux", place: "greve", ambiance: "nuit",
      text: [
        "Annaïg a déjà de l'eau jusqu'aux genoux, ses jupes nouées autour de la taille, et elle crochète un tonneau avec une gaffe, en jurant comme un charretier. Tu l'aides. Vous le roulez sur les galets, puis un autre, puis un autre. Du vin, à l'odeur qui suinte des douves. Du vin d'Espagne, encore.",
        "Tout le hameau fait comme vous. Des lanternes courent dans tous les sens au bord de l'eau, des femmes, des vieux, des enfants, qui crochètent, qui roulent, qui cachent. Les tonneaux disparaissent dans les rochers, sous le goémon, dans les maisons, avec une rapidité de miracle. À l'aube, il n'en restera pas un sur la grève, et le brigadier Fouques, en dressant son procès-verbal, constatera avec une stupeur sincère que la mer a englouti toute la cargaison.",
        "Pendant ce temps, là-bas, sur les Moines, des hommes crient. Tu les entends, entre deux tonneaux, quand le vent tombe. Puis tu ne les entends plus. Tu ne sais pas si c'est parce qu'on les a sauvés, ou parce que le vent a forci.",
        "Annaïg te donne une tape dans le dos, ravie. « Deux tonneaux pour le Fanal. Ton père dira non, et il les prendra. » Elle a raison. Il dit non. Il les prend. Il ne te regarde pas, en les descendant à la cave.",
      ],
      choices: [{ label: "Attendre l'aube", to: "XA_n_aube" }] },
    XA_n_gabier: { act: "I", title: "Le Gabier", place: "greve", ambiance: "nuit",
      text: [
        "Le Gabier ne s'arrête pas au bord de l'eau. Il y entre, tout habillé, jusqu'aux genoux, jusqu'à la taille, en regardant le navire, sans corde, sans rien, comme un homme qui marche dans une rue qu'il connaît. Tu cours derrière lui. Tu l'attrapes par le caban.",
        "Il se retourne. Il a les yeux pleins d'eau, et ce n'est pas la mer.",
        "« Il y a un mousse, dit-il. À bord. Il y a toujours un mousse. Il est dans la hune, à l'avant, il s'est accroché au mât, il a peur de descendre. Je l'entends. » Tu n'entends rien d'autre que le vent. « Il faut toujours aller chercher le mousse. C'est la règle. La seule. »",
        "Il te repousse, doucement, et il avance encore. Une vague le prend à la poitrine et le couche. Il se relève. Une autre. Il se relève encore. À la troisième, les hommes du hameau arrivent, le saisissent à quatre, et le ramènent sur les galets, et il se débat, et il pleure, et il crie un nom que tu n'arrives pas à saisir dans le vent.",
        "Au matin, quand la marée a baissé, on trouve dans la hune de misaine du caboteur, attaché au mât par sa ceinture, un garçon de douze ans, vivant, gelé, muet de terreur. Personne ne l'avait vu, de la grève, dans la nuit. Personne, sauf le Gabier.",
      ],
      choices: [{ label: "Attendre l'aube", to: "XA_n_aube" }] },
    XA_n_aube: { act: "I", title: "Après le naufrage", place: "greve", ambiance: "mer",
      text: [
        "À l'aube, la mer est grise et presque calme, avec cette innocence de chat qui a renversé le lait. Le caboteur gît sur les Moines, cassé en deux. On enterre six hommes au cimetière de Sainte-Anne, à côté des noyés des autres années. L'abbé Morisseau vient de Varnèse, et dit la messe en se trompant de nom une seule fois, ce qui, pour lui, est un record.",
        { if: { has: "fanal:naufrage_sauve" }, text: "Le matelot roux que tu as tiré de l'eau repart pour Morlenc avec les autres survivants, dans la carriole d'Annaïg. Avant de monter, il te donne la seule chose qu'il ait sauvée : un couteau de marin, à manche de corne, avec ses initiales gravées. *Y. K.* Tu ne sauras jamais son prénom. Tu sais ses initiales, et sa poigne." },
        { if: { has: "fanal:naufrage_pille" }, text: "Le brigadier Fouques passe dans toutes les maisons du hameau, avec son carnet, et ne trouve rien, et ne cherche pas très fort. Dans chaque cave, une odeur de vin d'Espagne. Dans chaque maison, des visages d'une innocence parfaite. Dans la tienne aussi." },
        { if: { has: "fanal:gabier_eau" }, text: "Le Gabier ne sort pas de sa chambre de toute la journée. Le soir, il descend boire comme d'habitude, et il raconte une histoire comme d'habitude, et il rit comme d'habitude. Il ne parle pas du naufrage. Il ne regarde pas vers toi. Une seule fois, en passant derrière ta chaise, il te pose la main sur l'épaule, et la retire." },
      ],
      choices: [{ label: "Remonter au Fanal", back: "A1_jours" }] },

    // ---------------------------------------------------------------- the lantern
    XA_lanterne: { act: "I", title: "La lanterne", place: "fanal_salle", ambiance: "nuit",
      text: [
        "Ton père a de la fièvre, un soir, la fièvre de sa jambe, qui le prend deux fois l'an et le cloue au lit en grelottant. Il t'appelle, et te confie la lanterne du pignon : la moucher à minuit, remettre de l'huile à deux heures, la laisser brûler jusqu'à l'aube. « C'est tout, dit-il. Ne fais rien d'autre. Quoi qu'il arrive. »",
        "Tu passes la nuit sur le pignon, enveloppé{e} dans une couverture, entre la lanterne et la nuit. La mer est noire. Le ciel est noir. Les deux ne se distinguent qu'à la ligne d'écume des écueils, blanche et changeante, qui respire au pied de la falaise comme un dormeur.",
        "À deux heures, en remettant de l'huile, tu vois une lumière au large. Une seule. Elle s'allume, s'éteint, s'allume. Trois fois. Puis plus rien. Puis encore trois fois.",
        "Elle attend une réponse. Tu ne sais pas laquelle. Mais tu as vu ton père, certaines nuits, passer la main devant la lanterne, trois fois, avant de redescendre, en sifflotant.",
      ],
      choices: [
        { label: "Passer la main devant la lanterne, trois fois", fx: { flag: "fanal:signal" }, to: "XA_lanterne_signal" },
        { label: "Faire ce que ton père a dit : rien", fx: { flag: "fanal:signal_noir" }, to: "XA_lanterne_noir" },
      ] },
    XA_lanterne_signal: { act: "I", title: "La lanterne", place: "fanal_salle", ambiance: "mer",
      text: [
        "Tu passes la main devant la lanterne. Une fois. Deux. Trois. La lumière, au large, s'éteint aussitôt, et ne se rallume plus.",
        "Une heure plus tard, sous la falaise, tu entends des avirons enveloppés de chiffons, et des voix basses, et le bruit de quelque chose de lourd qu'on roule sur les galets. Puis plus rien.",
        "À l'aube, sur le seuil du Fanal, il y a un petit tonneau d'eau-de-vie de Saintonge, avec un ruban rouge noué autour, et dessous, une pièce d'argent, pour toi, apparemment, puisqu'il y a dessus, gravé au couteau, un petit poisson.",
        "Ton père descend, appuyé au mur, encore gris de fièvre. Il voit le tonneau. Il voit la pièce. Il te regarde, longtemps, d'un regard où il y a de la colère, de la fierté et de la résignation, à parts égales, ce qui chez lui fait un regard assez chargé pour faire tomber un oiseau.",
        "« Je t'avais dit de ne rien faire, dit-il.",
        "— Tu le fais, toi.",
        "— Moi, je suis déjà damné. » Il soulève le tonneau, grimace, le porte à la cave. En remontant, il ajoute, sans se retourner : « La prochaine fois, souffle sur ta main avant. Ça fait la lumière plus franche. »",
      ],
      choices: [{ label: "Garder la pièce au poisson", fx: { gold: 2 }, back: "A1_jours" }] },
    XA_lanterne_noir: { act: "I", title: "La lanterne", place: "fanal_salle", ambiance: "nuit",
      text: [
        "Tu gardes les mains dans ta couverture. La lumière, au large, recommence, trois fois, puis trois fois, puis trois fois, de plus en plus vite, d'une impatience presque visible. Puis elle s'éteint, et ne revient pas.",
        "Tu passes le reste de la nuit à te demander qui étaient ces gens, combien ils étaient, s'ils avaient froid, s'ils avaient peur, ce qu'ils transportaient, et si ton refus vient de sauver un douanier ou de noyer un contrebandier. Tu ne le sauras pas. C'est une découverte désagréable, la première nuit où l'on comprend qu'on peut faire du bien et du mal à des gens qu'on ne verra jamais.",
        "Le lendemain, Annaïg te regarde d'un drôle d'air, sur la grève. « Le Grand Yves a passé la nuit en mer, dit-elle, à tourner sous la pointe avec six hommes et douze ballots, à attendre une lumière qui n'est pas venue. Il est rentré à Morlenc avec ses ballots et un rhume. » Elle te pince la joue. « Il ne t'en veut pas. Il dit que tu as de la conscience. Il dit que c'est une maladie qui passe avec l'âge. »",
      ],
      choices: [{ label: "Retourner au Fanal", back: "A1_jours" }] },

    // ---------------------------------------------------------------- the knots
    XA_noeuds: { act: "I", title: "Les nœuds", place: "fanal_salle", ambiance: "village",
      text: [
        "Un après-midi de pluie, le Gabier s'ennuie. Il te fait asseoir en face de lui, devant le feu, avec un bout de filin goudronné de deux brasses, et il t'apprend les nœuds.",
        "Il a des mains énormes, couturées, aux doigts tordus par quarante ans de cordages, et ces mains-là font des choses d'une délicatesse de dentellière. Le nœud plat, pour réunir deux bouts. La demi-clef, pour amarrer vite. Le nœud de chaise, qui ne glisse jamais, qui ne serre jamais, et qui se défait d'un coup de pouce quand on le veut : « Celui-là, il t'a sauvé la vie avant que tu saches son nom. On le passe sous les bras d'un homme à la mer. » La tête d'alouette, le nœud de cabestan, l'œil épissé, qu'il fait en trois secondes, sans regarder, en parlant d'autre chose.",
        "Tu rates tout, d'abord. Il ne s'impatiente pas. Il défait tes nœuds ratés, d'un coup de pouce, et te rend le filin. « Encore. » Au bout de deux heures, tu fais un nœud de chaise les yeux fermés. Il le regarde, le tâte, tire dessus de toutes ses forces. Il tient.",
        "« Bon, dit-il. Maintenant, tu sers à quelque chose. » Il reprend le filin, et fait un dernier nœud, lent, compliqué, avec treize tours, qui forme une boucle coulissante au bout d'une longue spirale. Il le pose sur la table entre vous deux.",
        "« Et celui-là, dit-il. Celui-là, tu ne l'apprends pas. »",
      ],
      choices: [
        { label: "« Pourquoi ? »", to: "XA_noeuds_pourquoi" },
        { label: "Défaire le nœud, sans rien demander", to: "XA_noeuds_defait" },
      ] },
    XA_noeuds_pourquoi: { act: "I", title: "Les nœuds", place: "fanal_salle", ambiance: "village",
      text: [
        "Il te regarde, comme s'il pesait quelque chose. Puis il prend le nœud dans sa main, et le serre, lentement, et la boucle se referme.",
        "« Parce que celui qui le fait le fait toujours pour quelqu'un, dit-il. Et que ce quelqu'un, après, on ne le connaît plus. On connaît seulement le nœud. » Il le défait, d'un coup de pouce, et range le filin dans sa poche. « J'en ai fait un, une fois. Pour un homme qui l'avait mérité, je crois. Je le crois toujours. Je le crois un peu moins chaque année. »",
        "Il se lève, va à la fenêtre, et regarde la pluie sur la mer. La conversation est finie. Tu as appris sept nœuds, et une chose de plus, que tu ne sais pas encore nommer.",
      ],
      choices: [{ label: "Le laisser à sa fenêtre", fx: { flag: "gabier:noeuds" }, back: "A1_jours" }] },
    XA_noeuds_defait: { act: "I", title: "Les nœuds", place: "fanal_salle", ambiance: "village",
      text: [
        "Tu prends le nœud, tu cherches le bout, et tu le défais, tour après tour, lentement, les treize tours, jusqu'à ce que le filin redevienne un filin, droit, inoffensif, sur la table.",
        "Le Gabier te regarde faire sans un mot. Quand tu as fini, il hoche la tête.",
        "« C'est la seule chose à faire avec celui-là, dit-il. Tu as compris plus vite que moi. » Il range le filin dans sa poche. « Il m'a fallu vingt ans. »",
      ],
      choices: [{ label: "Le laisser à son feu", fx: { flag: "gabier:noeuds" }, back: "A1_jours" }] },

    // ---------------------------------------------------------------- the washerwomen
    XA_lavoir: { act: "I", title: "Le lavoir", place: "hameau", ambiance: "nuit",
      text: [
        "Zélie t'a toujours défendu d'aller au lavoir de la Fontaine-Morte après minuit. C'est l'heure des lavandières de nuit, dit-elle : des femmes mortes sans sacrement, qui lavent leurs linceuls jusqu'au jour du Jugement, et qui demandent aux passants de les aider à tordre. Si l'on tord dans le même sens qu'elles, elles vous remercient. Si l'on tord dans l'autre, elles vous tordent le bras jusqu'à l'épaule, puis jusqu'au cou. Zélie raconte cela en épluchant ses pommes de terre, avec une sérénité de théologien.",
        "Une nuit de pleine lune, tu y vas.",
        "Le lavoir est au fond d'un creux, sous des saules, un bassin de granit couvert d'un toit d'ardoises moussues. La lune entre de biais par-dessous le toit et fait de l'eau une plaque d'étain. Et il y a des femmes. Quatre, cinq, agenouillées sur les pierres, en coiffe blanche, qui battent du linge, en silence. Les battoirs frappent la pierre, un coup, un autre, avec une lenteur de glas. Le linge est blanc. Il est long. Ce sont des draps. Ou des linceuls.",
        "Une des femmes lève la tête vers toi. Elle se redresse, avec un drap mouillé dans les mains, et elle vient vers toi, sans hâte, et elle te tend un bout du drap.",
        "« Aide-moi à tordre », dit-elle.",
      ],
      choices: [
        { label: "Prendre le bout du drap, et tordre dans le même sens qu'elle", fx: { flag: "fanal:lavoir" }, to: "XA_lavoir_tord" },
        { label: "Reculer, et partir en courant", to: "XA_lavoir_fuite" },
      ] },
    XA_lavoir_tord: { act: "I", title: "Le lavoir", place: "hameau", ambiance: "nuit",
      text: [
        "Tu prends le bout du drap. Il est froid, lourd, glissant. La femme tord, et tu tords avec elle, et l'eau coule du drap entre vous deux en un long ruisseau noir, et la lune se reflète dans le ruisseau, et la femme te regarde par-dessus le drap tordu. Elle a un visage que tu connais.",
        "C'est Annaïg.",
        "« Tu as bien fait de tordre dans le bon sens, dit-elle à voix basse, en souriant à peine. Les autres auraient été obligées de te noyer, pour la réputation. »",
        "Les autres, ce sont la veuve Le Goff, la Grande Marie, la petite Jeanne du Moulin et la mère du père Pochon, qui a quatre-vingt-onze ans. Toutes veuves de la mer. Elles lavent ici, la nuit, les draps des noyés, ceux qu'on a remontés et ceux qu'on n'a jamais remontés, et dont elles lavent quand même le drap, une fois par an, à la date. On ne lave pas les draps des noyés de jour, au lavoir, devant les autres. Ça porte malheur. Et puis, dit Annaïg, ça ne regarde personne.",
        "« Zélie le sait, ajoute-t-elle. C'est elle qui a inventé les lavandières de nuit, il y a quarante ans, pour qu'on nous laisse tranquilles. Elle lave avec nous, quand ses jambes le permettent. Son fiancé est au fond depuis quarante-deux ans. »",
        "Elle te reprend le drap des mains, et le plie. « Rentre. Et ne dis rien à Zélie. Elle serait vexée que sa légende ne fasse plus peur. »",
      ],
      choices: [{ label: "Rentrer au Fanal sans bruit", back: "A1_jours" }] },
    XA_lavoir_fuite: { act: "I", title: "Le lavoir", place: "hameau", ambiance: "nuit",
      text: [
        "Tu recules. La femme ne te suit pas. Elle reste là, le drap tendu, à te regarder partir, et derrière elle, les battoirs ont repris leur lenteur de glas.",
        "Tu cours jusqu'au Fanal sans te retourner, les poumons en feu, les saules qui te fouettent le visage. Tu te glisses dans ton lit tout habillé{e}. Tu ne dors pas.",
        "Le lendemain, à la cuisine, Zélie te regarde manger ta soupe. Elle remarque la boue à tes souliers, les égratignures des saules à tes joues. Elle sourit, d'un sourire en coin, très fin, très satisfait, celui d'un auteur dont la pièce a fait son effet.",
      ],
      choices: [{ label: "Finir ta soupe", back: "A1_jours" }] },

    // ---------------------------------------------------------------- the brigadier comes at last
    XA_fouques: { act: "I", title: "Le brigadier", place: "fanal_salle", ambiance: "village",
      text: [
        "Le brigadier Fouques finit par passer, un après-midi, entre la soupe et la sieste, ce qui prouve que le service a des faiblesses. Il entre au Fanal en grand uniforme, sa longue-vue sous le bras, sa moustache cirée en garde, et demande à voir « le dénommé Gabier, logé en cet établissement, porteur de numéraire étranger non déclaré ».",
        "Le Gabier descend. Il regarde le brigadier de haut en bas, lentement, comme on regarde un poisson au marché. Puis il sourit, de tous ses chicots, s'assied, et pose une piastre d'argent sur la table, entre eux deux.",
        "« Le droit, dit-il. Pour la piastre. »",
        "Le brigadier regarde la piastre. Il la prend, la retourne, l'examine à la longue-vue, ce qui ne sert à rien, la longue-vue étant faite pour voir loin. Il cherche dans son carnet, longtemps, le tarif du droit sur les piastres étrangères. Il ne le trouve pas, parce qu'il n'existe pas.",
        "« Ceci, dit-il enfin, est une saisie conservatoire. » Il glisse la piastre dans sa poche, se lève, salue militairement, et sort. On ne le revoit plus de la semaine. Le Gabier rit pendant une heure, et paie une tournée générale, en piastres, à toute la salle.",
      ],
      choices: [{ label: "Rire avec la salle", fx: { flag: "fouques:piastre" }, back: "A1_jours" }] },
  },
  extras: {},
};
