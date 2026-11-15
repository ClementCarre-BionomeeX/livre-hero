// Lot iii1 of "Le Trésor des Taiseurs": the start of Act III (up the Orle by barge, the lock, a night aboard, the
// Republic's soldiers at Pont-Ravel), Orle-le-Bourg (the act's crossroads), the Combes (vines, quarries, Aveline
// deserters, an Aveline captain scouting the war to come), the queen's old quarry, the road to the Mont and its events.
var R = "@route";
var P = {};

// ==================================================================== up the Orle by barge
Object.assign(P, {
  III_debut: { act: "III", title: "Le Bec-d'Orle", place: null,
    text: [
      "Le Bec-d'Orle est un nez de terre grise entre deux eaux. À gauche, la Salve, large et lente, descend vers la ville et les marais. À droite, l'Orle sort des collines en tournant, plus étroite, plus verte, plus froide aussi quand on y trempe la main. Sur la pointe tiennent une auberge de mariniers, une chapelle sans clocher, un cabestan, et quatre gabares amarrées bord à bord qui attendent les chevaux de halage. La brume colle encore à l'eau.",
      { after: "mandat", text: "Sur la porte de l'auberge, sous l'auvent, on a cloué un avis de la République. Le papier est neuf, l'encre a coulé à la pluie, et ton nom tient le milieu de la feuille, en capitales, entre *recherché{e}* et *pour le meurtre d'Odeline Carrus*. Un marinier a dessiné des cornes au portrait. Le portrait te ressemble assez pour que tu remontes ton col.", else: "Sur la porte de l'auberge, sous l'auvent, on a cloué un avis de la République : une affaire de sel passé en fraude, des noms de sauniers, une prime de dix ducats. Les mariniers passent devant sans le lire." },
      { after: "joncs:brules", text: "Tu as encore l'odeur des pilotis brûlés dans tes vêtements. Elle part mal. Les mariniers du Bec la reconnaissent et te regardent de côté : on sait déjà, ici, ce qui est arrivé aux Joncs-Bas." },
      { after: "joncs:sauves", text: "Les Joncs-Bas tiennent encore debout derrière toi, dans les roseaux, et quelqu'un t'a glissé dans le sac un pain d'anguille fumée enveloppé de dentelle grossière. Tu n'as pas vu qui." },
      { with: "lison", text: "Lison amarre sa barque à un pieu de la pointe, défait le nœud, le refait plus serré, et reste un moment la main sur le bordé. Puis elle saute à quai sans regarder derrière elle. « Elle m'attendra, dit-elle. Les barques attendent mieux que les gens. »" },
      { after: "lison:partie", without: "lison", text: "Tu cherches des yeux, sans y penser, une barque plate et une tresse brune à l'avant. Lison est restée aux marais. La place à côté de toi, sur le quai, reste vide un moment de trop." },
      { with: "salome", text: "Salomé regarde l'Orle d'un œil de marin qui juge une eau étrangère. « Pas de marée, pas de sel, dit-elle. Un fossé qui descend. » Elle a laissé *La Bavarde* à Port-Vasier, aux soins d'un mousse qu'elle a menacé de noyer s'il touchait au rhum." },
      { with: "tibere", text: "Tibère s'est acheté une tourte au comptoir de l'auberge et la mange debout, les miettes dans la moustache. Il évite l'avis cloué sur la porte comme on évite un créancier." },
      { with: "gildas", text: "Frère Gildas regarde vers l'amont, où les collines bleuissent dans la brume. Le Mont est là-haut, au-delà des Combes. Il a dit hier soir, sans qu'on le lui demande, qu'il n'avait pas remonté la rivière par l'eau depuis trente ans." },
      "Le patron de la troisième gabare, *La Patience*, est un homme de soixante ans aux mains rouges, qui mâche une racine de réglisse en surveillant le chargement : des sacs de sel en toile cirée, six barriques, des paniers de poisson sec. Il te détaille de la tête aux bottes. « Gilduin Teyssier, dit-il. Je monte du sel jusqu'à Orle et je redescends du vin. Des passagers, j'en prends {{oreille#iiic_prosper_prix|quand ils paient d'avance, trois ducats la tête|quand la vieille des Joncs me le demande, et elle me l'a fait demander hier par un gamin en barque}}. »",
    ],
    choices: [
      { label: "Payer le passage, trois ducats", fx: { gold: -3, ep: ["perso", 300] }, to: "III_gabare" },
      { label: "« C'est Mère Ancolie qui vous a prévenu. Elle vous a dit qui nous étions. »", hide: { not: { voile: "iiic_prosper_prix" } }, fx: { flag: "iiic:prosper_taiseurs", fac: { taiseurs: 3 }, ep: ["perso", 500] }, to: "III_gabare" },
      { label: "Proposer de payer ton passage en tirant la corde avec les haleurs", fx: { flag: "iiic:haleur", ep: ["perso", 300] }, to: "III_gabare" },
    ] },

  III_gabare: { act: "III", title: "La Patience", place: null, backName: "le pont de La Patience",
    text: [
      { first: true, text: "*La Patience* est une gabare de rivière, longue de douze toises, plate comme une main, avec un mât qu'on couche sous les ponts et une voile carrée qui sert quand le vent souffle d'aval, c'est-à-dire rarement. Le reste du temps, quatre chevaux et six hommes la tirent depuis le chemin de halage, au bout d'une corde longue comme une rue. Le sel occupe le milieu, {{pie#iiic_sel|quarante sacs de sel blanc de Grisemotte, cousus et cirés|quarante sacs de sel de Grisemotte, coupés d'un quart de sable fin pour le poids, parce que la gabelle se paie au sac}}. Les barriques sont calées à l'arrière, sous une bâche." },
      { first: true, after: "iiic:prosper_taiseurs", text: "Gilduin ne t'a rien fait payer. Il a craché sa racine de réglisse dans l'eau, en a coupé une autre, et a dit : « La vieille m'a sorti de la vase il y a vingt ans, moi et mon bateau. On ne parle pas d'argent avec ses dettes. »" },
      { first: true, after: "iiic:haleur", text: "Tu as passé le harnais de cuir sur ton épaule, comme les autres. La corde mord la chair dès la première heure. À la deuxième, tu ne sens plus rien. Les haleurs te font de la place sans un mot, ce qui chez eux vaut un compliment." },
      { again: true, text: "Le pont de *La Patience* glisse à la vitesse d'un homme qui marche. Sur la berge, les chevaux soufflent ; à l'avant, l'eau verte se fend sans bruit." },
      "Les rives changent lentement. D'abord des saules et des prés gras, des vaches dans l'eau jusqu'au ventre ; puis les premiers coteaux, encore gris de l'hiver, rayés de ceps taillés court. Des villages passent, chacun avec son lavoir et ses femmes qui se redressent pour regarder la gabare. On cuit le poisson sec sur un brasero à l'arrière.",
      { with: "lison", text: "Lison s'est assise à l'avant, les pieds pendus au-dessus de l'eau, et elle lit la rivière comme une page : un remous, une souche, un banc de sable. Deux fois, elle crie au patron de serrer à gauche avant que le haleur de tête l'ait vu. Gilduin la regarde avec une rancune admirative." },
      { with: "tibere", text: "Tibère a trouvé un tonneau à sa taille et s'y est installé, son chapeau sur les yeux. Il dort, ou fait semblant. Quand la gabare cogne contre un banc de sable, sa main va droit à sa masse." },
    ],
    choices: [
      { label: "Parler avec Gilduin Teyssier, à la barre", hide: { seen: "III_patron" }, to: "III_patron" },
      { label: "Descendre sur le chemin de halage, avec les haleurs", hide: { seen: "III_haleurs" }, to: "III_haleurs" },
      { label: "Jeter un œil aux barriques, sous la bâche", hide: { seen: "III_cargaison" }, to: "III_cargaison" },
      { label: "Laisser la gabare remonter jusqu'à l'écluse", big: true, to: "III_ecluse" },
    ] },

  III_patron: { act: "III", title: "Gilduin à la barre", place: null,
    text: [
      "Gilduin tient la longue barre de *La Patience* du bout des doigts, comme un homme qui ne veut pas lui faire de mal. Il te tend une racine de réglisse. Elle a le goût du bois et de la terre, puis, au bout d'un moment, d'un sucre lointain.",
      "« Le sel monte, le vin descend, dit-il. Mon père faisait pareil, et son père avant lui. Seulement, du temps de mon père, on payait deux péages entre le Bec et Orle. Aujourd'hui on en paie sept. La République a besoin d'argent. Elle en a besoin tous les ans un peu plus, et c'est toujours nous qu'elle vient voir. » Il crache dans l'eau. « Les vignerons des Combes ne vendent plus. Ils gardent leur vin dans les caves parce que le transport coûte plus que le vin. »",
      "Il désigne la berge, où un poste de bois porte un drapeau délavé aux couleurs de Salvèze. « Et maintenant les soldats. Ils fouillent les bateaux depuis un mois. Ils cherchent du monde. » Il ne te regarde pas en le disant. « Les soldats, {{oreille#iiic_prosper_fils|je les laisse faire leur métier|j'en ai un, de fils, chez eux. Toinot. Je prie chaque matin qu'il ne soit pas de garde sur un pont où je passe}}. »",
      { with: "salome", text: "Salomé s'accoude à côté de lui et ils parlent cordages, carène, tirant d'eau, comme deux marchands qui comparent des étoffes. « Une gabare de mer sur ta rivière, finit par dire Gilduin, elle échouerait avant le premier village. » Salomé : « Et la tienne en mer, elle coulerait avant la première vague. » Ils ont l'air contents l'un de l'autre." },
      { after: "iiic:prosper_taiseurs", text: "Il baisse la voix. « La vieille des Joncs m'a fait dire de vous mener à Orle, et de ne pas poser de questions. Je n'en pose pas. Mais je regarde. Et je vois que vous ne regardez pas les postes de garde, vous autres. Vous regardez à côté. »" },
    ],
    choices: [
      { label: "« Qui a chargé les barriques de l'arrière ? »", hide: { seen: "III_cargaison" }, fx: { flag: "iiic:barriques_prosper" }, to: "III_cargaison" },
      { back: "III_gabare" },
    ] },

  III_haleurs: { act: "III", title: "Le chemin de halage", place: null,
    text: [
      "Le chemin de halage est une bande de terre battue, large comme une charrette, entre l'eau et les saules. Quatre chevaux de trait y avancent tête basse, et six hommes marchent avec eux, penchés en avant, le harnais sur l'épaule. Le chef de file est un grand gaillard au crâne rasé, aux bras pleins de cordes de veines, qui donne le pas en chantant.",
      "La chanson est lente, faite pour les jambes. *« Tire, la corde, tire, l'eau descend, tire, le vin monte et le sel descend… »* Elle dit des choses à l'envers, comme toutes les chansons de travail, et les haleurs la reprennent sans y penser.",
      { with: "lison", text: "Lison, revenue sur le chemin pour se dégourdir, écoute le troisième couplet et pince les lèvres. « Ils la chantent faux, dit-elle tout bas. Chez nous, on la chante aussi. Et chez nous, ce n'est pas le vin qui monte. » Elle ne dit pas ce qui monte." },
      "Le chef de file s'appelle Baptistin. Il t'adresse un signe du menton. « On a vu des choses, dans les Combes, cet hiver, dit-il. Des brigands, d'abord : des déserteurs d'Aveline, qui ont passé les cols en novembre et qui pillent les caves. Et puis, la semaine dernière, des cuirasses bleues sur la crête de la Gâche. {{oreille#iiic_baptistin|Des chasseurs du duc, sans doute, égarés|Six, à cheval, et un homme avec eux qui dessinait la rivière sur une planchette, et qui comptait nos ponts}}. »",
      { after: "iiic:haleur", text: "« Toi, tu tires bien, ajoute-t-il. Pour quelqu'un de la ville. » Il te donne une gorgée de sa gourde de vin aigre, et c'est le meilleur vin que tu aies bu depuis les marais." },
    ],
    choices: [
      { label: "Prendre la corde une heure avec eux", hide: { has: "iiic:haleur" }, test: { dom: "combat", diff: 0, label: "Tenir le pas des haleurs", help: [{ with: "tibere", v: 5 }, { with: "salome", v: 10 }] },
        win: { fx: { ep: ["perso", 400], conf: { salome: 3 }, gold: 1, note: "Baptistin te glisse un liard de haleur dans la main, pour la forme." }, back: "III_gabare" },
        lose: { fx: { pv: -2, ep: ["perso", 200] }, back: "III_gabare" } },
      { label: "« Ces cuirasses bleues, où allaient-elles ? »", hide: { not: { voile: "iiic_baptistin" } }, fx: { flag: "iiic:cartographes", ep: ["perso", 400] }, to: "III_haleurs_crete" },
      { back: "III_gabare" },
    ] },

  III_haleurs_crete: { act: "III", title: "Les cuirasses bleues", place: null,
    text: [
      "Baptistin te regarde de travers, puis il rit. « Tu as l'oreille longue. » Il marche un moment sans rien dire. Les chevaux soufflent.",
      "« Ils allaient vers Orle, dit-il enfin. Par la crête, en évitant les villages. L'homme à la planchette s'arrêtait à chaque pont, et il descendait de cheval pour mesurer les piles avec une corde à nœuds. Le pont de Pont-Ravel, il l'a mesuré deux fois. » Il change son harnais d'épaule. « On ne mesure pas un pont deux fois pour passer dessus à pied. On le mesure pour savoir ce qu'il porte. Des chariots. Des engins de siège, des trébuchets sur roues, comme on dit qu'ils en ont, là-haut, qui lancent des pierres grosses comme des moutons. »",
      "Il chante un couplet, pour les chevaux, et reprend plus bas : « À Orle, il y a un marchand de vin d'Aveline arrivé pour la foire. Il paie bien, il goûte peu, et il pose beaucoup de questions sur les routes. Moi, je dis ça. Je tire une corde, je ne suis pas soldat. »",
    ],
    choices: [{ back: "III_gabare" }] },

  III_cargaison: { act: "III", title: "Les barriques", place: null,
    text: [
      "Sous la bâche goudronnée, six barriques de chêne sont calées à l'arrière, sanglées contre le bordé. Elles portent la marque au fer d'un tonnelier de Salvèze, une tour et une clé, et à la craie, sur chacune, un mot : *Orle, maître Haquin*. Les cinq premières sentent le vin. La sixième aussi, presque autant.",
      "Six barriques de {{pie#iiic_barrique|vin de Salvèze, pareilles, du même chêne et du même fer|vin de Salvèze, sauf la sixième : un double fût, où un étui de cuir flotte entre deux fonds, calé dans de la paille mouillée}}.",
      { after: "iiic:barriques_prosper", text: "« Un homme en noir les a chargées au Bec, à l'aube, a dit Gilduin. Un homme de la ville, avec des bagues. Il a payé le fret trois fois son prix, d'avance, pour Orle. Du vin qui remonte, j'en avais jamais vu. Le vin descend, d'habitude. Mais un fret payé trois fois, je ne le discute pas. »" },
      { if: { has: "metier:mains" }, text: "Tes mains se posent d'elles-mêmes sur les douves, l'une après l'autre, du plat de la paume, comme sur le flanc d'un cheval. La sixième ne répond pas comme les autres : le son s'arrête trop tôt, à mi-hauteur." },
    ],
    choices: [
      { label: "Ouvrir le double fond de la sixième barrique", hide: { not: { voile: "iiic_barrique" } }, fx: { ep: ["perso", 500] }, to: "III_etui" },
      { label: "Frapper les barriques une à une, à l'oreille", hide: { voile: "iiic_barrique" }, test: { dom: "savoir", diff: -10, label: "Entendre un double fût", help: [{ if: { has: "metier:mains" }, v: 20 }, { with: "salome", v: 10 }, { with: "tibere", v: 5 }] },
        win: { fx: { ep: ["perso", 400] }, to: "III_etui" }, lose: { fx: { note: "Les six barriques sonnent pareil à ton oreille. Tu remets la bâche." }, back: "III_gabare" } },
      { label: "Remettre la bâche et laisser le vin de maître Haquin tranquille", back: "III_gabare" },
    ] },

  III_etui: { act: "III", title: "L'étui de cuir", place: null,
    fx: { clue: "iiic_s_plans" },
    text: [
      "Le fond de la sixième barrique se dévisse, en vérité : c'est un travail de tonnelier très fin, un pas de vis taillé dans le chêne et graissé au suif. Entre les deux fonds, dans la paille mouillée, un étui de cuir huilé, long comme l'avant-bras, fermé d'un bouchon de cire.",
      "Dedans, roulés serré, trois grands feuillets de parchemin. Le premier est un plan des murs de Salvèze, levé avec soin, à l'échelle, chaque tour numérotée, chaque porte nommée. Le deuxième donne les canaux et la profondeur de l'eau sous chaque pont, en pieds. Le troisième dit, porte par porte, combien d'hommes la gardent de jour et de nuit, et à quelle heure on relève la garde.",
      "Il n'y a pas de signature. En bas du troisième feuillet, une main pressée a ajouté une ligne : *Pour maître Haquin, à la foire d'Orle.*",
      { with: "tibere", text: "Tibère regarde le troisième feuillet par-dessus ton épaule et devient très pâle. « Les relèves du Guet, dit-il. À l'heure près. Ça, ça sort du registre de la caserne des Lanternes. Il y a trois personnes à Salvèze qui ont le droit de l'ouvrir. J'étais l'une d'elles, avant. » Il se tait." },
      { with: "gildas", text: "Frère Gildas lit les trois feuillets sans rien dire, puis les roule lui-même, avec soin, comme on roule un manuscrit. « On a écrit ceci dans une pièce chauffée, dit-il. L'encre est belle. » C'est tout ce qu'il dit." },
    ],
    choices: [
      { label: "Garder l'étui et refermer la barrique vide", fx: { item: "iiic_etui", flag: "iiic:etui", ep: ["perso", 600] }, back: "III_gabare" },
      { label: "Recopier les feuillets à la hâte, et tout remettre en place", test: { dom: "savoir", diff: -10, label: "Recopier trois plans avant l'écluse", help: [{ if: { has: "metier:lire" }, v: 20 }, { with: "gildas", v: 15 }] },
        win: { fx: { item: "iiic_copie", flag: "iiic:etui_copie", ep: ["perso", 700] }, back: "III_gabare" },
        lose: { fx: { flag: "iiic:etui_copie", item: "iiic_copie", note: "Ta copie est hâtive, les chiffres de la garde à moitié lisibles. Mais tout est remis en place." }, back: "III_gabare" } },
      { label: "Tout remettre en place, sans rien prendre", fx: { flag: "iiic:etui_vu" }, back: "III_gabare" },
    ] },

  III_ecluse: { act: "III", title: "L'écluse des Trois-Sœurs", place: null, takes: "evening",
    text: [
      "Au soir, la rivière se resserre entre deux bancs de roche grise, et une écluse la coupe : deux portes de chêne noir, un bassin de pierre où l'eau monte en bouillonnant quand on ouvre les vannes, une maison basse avec un jardin de choux et une cloche pendue à une potence. On l'appelle l'écluse des Trois-Sœurs, à cause de trois rochers au milieu du courant, juste en amont.",
      "L'éclusière s'appelle Ursule Mazel. Elle a cinquante ans, des sabots, un registre sous le bras et une plume derrière l'oreille. Elle encaisse le péage, onze liards par bateau et deux par passager, et elle écrit tout. Pendant que l'eau monte dans le bassin, les murs de l'écluse {{echo#iiic_ecluse_echo|suintent et ruissellent, verts de mousse jusqu'à la ligne des hautes eaux|rendent une voix d'homme, d'hier soir, qui demande : « Un chercheur de choses perdues, avec un moine, peut-être une batelière. Ils remontent vers Orle. Le sergent Ravier les attend au pont. »}}.",
      "Le registre d'Ursule Mazel est ouvert sur le parapet, la page du mois sous une pierre plate. Tu lis à l'envers, par habitude de métier : *{{loupe#iiic_registre|Le 3, la Bienvenue, sel, onze liards. Le 5, la Belle-Mule, vide, onze liards. Le 9, un courrier à cheval, par le pont, néant|Le 9, un courrier à cheval, sceau rouge de la Chancellerie, vers le nord, exempt de péage sur ordre écrit. Le même que le 23 du mois dernier, et que le 8 d'avant}}.*",
      { with: "salome", text: "Salomé regarde l'eau monter dans le bassin, les bras croisés. « On monte une marche d'eau, dit-elle, comme sur un escalier. La mer n'a pas besoin de ça. » Elle a l'air de trouver le procédé à la fois ingénieux et un peu honteux." },
    ],
    choices: [
      { label: "« Les soldats, mère Mazel : ils étaient ici hier soir ? »", hide: { not: { voile: "iiic_ecluse_echo" } }, fx: { flag: "iiic:prevenu", ep: ["perso", 500] }, to: "III_ecluse_mazel" },
      { label: "Payer ton péage et remonter à bord", fx: { gold: -1 }, to: "III_nuit" },
      { label: "Laisser Gilduin payer pour tout le monde", hide: { not: { has: "iiic:prosper_taiseurs" } }, to: "III_nuit" },
    ] },

  III_ecluse_mazel: { act: "III", title: "Ursule Mazel", place: null,
    text: [
      "L'éclusière lève les yeux de son registre et te regarde longtemps. Puis elle referme le livre sur sa plume, pour marquer la page.",
      "« Ils étaient quatre, dit-elle. Un sergent et trois gamins. Le sergent a bu mon cidre et m'a demandé si j'avais vu passer une personne de votre allure. Je lui ai dit que je voyais passer cent bateaux par semaine et que je ne regardais que les coques. » Elle se gratte le nez avec le bout de la plume. « Le sergent Ravier attend au pont de Pont-Ravel, demain à la première heure. Il fouille les cales. Il fouille le sel, aussi, avec une pique. »",
      "Elle reprend son registre. « Je ne vous ai rien dit. Je n'aime pas les soldats qui boivent mon cidre sans payer. Et l'avis qu'ils ont cloué au Bec, avec votre figure dessus, il a une faute d'orthographe dans le nom de la morte. Quand on accuse quelqu'un d'un meurtre, on écrit au moins le nom de la morte comme il faut. »",
    ],
    choices: [{ label: "Remercier l'éclusière et remonter à bord", fx: { gold: -1 }, to: "III_nuit" }] },
});

// ==================================================================== a night aboard
Object.assign(P, {
  III_nuit: { act: "III", title: "La nuit à bord", place: null, takes: "night", backName: "le pont de La Patience, la nuit",
    text: [
      { first: true, text: "La gabare passe la nuit amarrée à deux pieux, sous un coteau noir. Les haleurs dorment dans une grange, les chevaux dans un pré. À bord, Gilduin allume un fanal à l'arrière et s'endort assis contre la barre. On entend la rivière parler contre la coque, un chien très loin, et le vent dans les ceps morts de l'hiver." },
      { again: true, text: "Le fanal fume à l'arrière. La rivière parle toujours contre la coque." },
      { without: "any", text: "Tu es seul{e} sur le pont avec le fanal et la rivière. Tu as l'habitude, depuis le quai des Lanternes, de parler tout bas aux choses qui ne répondent pas. Tu t'en abstiens. Les berges sont trop proches." },
      { with: "any", text: "Tes compagnons ne dorment pas encore. Il fait trop froid pour dormir tout de suite, et la journée a été trop longue pour se taire." },
    ],
    choices: [
      { label: "T'asseoir près de Tibère, sur son tonneau", hide: { seen: "III_nuit_tibere" }, to: "III_nuit_tibere" },
      { label: "Aller à l'avant, où Lison regarde l'eau", hide: { seen: "III_nuit_lison" }, to: "III_nuit_lison" },
      { label: "Aller à l'arrière, où Salomé veille à la barre", hide: { seen: "III_nuit_salome" }, to: "III_nuit_salome" },
      { label: "Attendre que Frère Gildas ait fini sa prière", hide: { seen: "III_nuit_gildas" }, to: "III_nuit_gildas" },
      { label: "Dormir dans le sel, enroulé{e} dans ton manteau", big: true, fx: { rest: true }, to: "III_controle" },
    ] },

  III_nuit_tibere: { act: "III", title: "Tibère, la nuit", place: null, with: "tibere",
    text: [
      "Tibère est assis sur son tonneau, une couverture de cheval sur les épaules. Il tourne entre ses doigts un bout de papier plié en quatre qu'il range dans sa veste quand tu approches.",
      { after: "tibere:espion", text: "« Oui, dit-il sans que tu aies rien demandé. C'est une lettre. Non, ce n'est pas pour la Banque. » Il te tend sa gourde. « {{oreille#iiic_tibere_lettre|Je n'ai plus rien écrit à la Banque depuis les marais|J'ai écrit une fois à la Banque, depuis les marais, une lettre où je n'ai rien mis de vrai, et j'ai touché mes cinq ducats quand même}}. Celle-ci est pour Rosalie. Je l'écris depuis un mois. J'en suis à la deuxième ligne. »", else: "« Une lettre, dit-il. Pour ma fille. Je l'écris depuis un mois. J'en suis à la deuxième ligne. » Il te tend sa gourde. Le vin est coupé d'eau, comme toujours." },
      "Il regarde la rivière un long moment. « Tu sais ce qui me tient éveillé ? Mon rapport. Celui du matin où on a trouvé ta maîtresse. Je l'ai écrit moi-même, au Guet, avec ma belle écriture de sergent. *La victime a été vue pour la dernière fois par son apprenti{e} le matin de la veille.* C'est ce que tu m'as dit. » Il boit. « La voisine du dessus, elle, m'a dit des cris, vers dix heures du soir. Ta voix et celle de la vieille. Je ne l'ai pas écrit. Ça ne collait pas avec l'accident, et on me payait pour l'accident. »",
      "Il ne te demande rien. Il te regarde, seulement, avec ses yeux de vieux sergent qui a entendu mentir mille personnes et qui n'en a jamais voulu à aucune.",
    ],
    fx: { clue: "iiic_m_dix" },
    choices: [
      { label: "« C'était une dispute. Je suis parti{e} à la fête. »", fx: { conf: { tibere: 5 }, ep: ["perso", 500] }, to: "III_nuit_tibere_fin" },
      { label: "Ne rien répondre, et lui rendre sa gourde", fx: { conf: { tibere: -2 } }, back: "III_nuit" },
      { label: "« Et ta lettre à la Banque, Tibère ? Ces cinq ducats ? »", hide: { not: { voile: "iiic_tibere_lettre" } }, fx: { flag: "iiic:tibere_lettre", conf: { tibere: 3 }, ep: ["perso", 500] }, to: "III_nuit_tibere_fin" },
    ] },

  III_nuit_tibere_fin: { act: "III", title: "Ce qu'on garde", place: null, with: "tibere",
    text: [
      { after: "iiic:tibere_lettre", text: "Tibère te regarde, longtemps. « Tu entends tout, avec ton os, hein. » Il sort de sa veste une autre lettre, pliée en huit, à l'adresse de la Banque Marrel, et il la tient au-dessus du fanal. « J'y ai écrit que vous remontiez vers Sorne par la mer. Que vous cherchiez une épave. Que le moine était malade. Rien de vrai. » Le papier noircit, se tord, prend feu. Il le lâche dans l'eau. « Cinq ducats. Ma fille coûte plus cher que ça en fil. »" },
      { before: "iiic:tibere_lettre", text: "Tibère hoche la tête. « Une dispute, dit-il. Et tu es parti{e} à la fête. Et le matin, elle était au bas de l'escalier. » Il se frotte la moustache. « J'ai fait pareil avec Rosalie, la nuit où sa mère est morte. Je suis allé jouer. J'ai dit au médecin que j'étais là toute la soirée. Je le dis encore, quand on me demande. » Il range sa lettre. « On ment au Guet parce qu'on ne peut pas mentir à soi. C'est plus facile, le Guet. Ils écrivent ce qu'on leur dit. »" },
      "Il remonte la couverture sur ses épaules. Le fanal grésille. Au bout d'un moment, il ronfle, ou il fait semblant, et tu restes avec la rivière.",
    ],
    choices: [{ back: "III_nuit" }] },

  III_nuit_lison: { act: "III", title: "Lison, la nuit", place: null, with: "lison",
    text: [
      "Lison est couchée à plat ventre à l'avant, le menton sur ses bras croisés, à regarder l'eau noire. Elle te fait de la place sans lever la tête.",
      { if: { has: "lison:loyale" }, text: "« Ma grand-mère {{oreille#iiic_lison_ancolie|ne m'a rien dit en partant|m'a dit que si je partais avec toi, je ne rentrerais plus aux Joncs. Elle l'a dit en dentelle, sans ouvrir la bouche. Je l'ai lu sur ses doigts}}, dit-elle. Elle a ses façons. »", else: "« Ma grand-mère m'a donné une dernière chose à faire, dit-elle. Te mener jusqu'au Mont et te regarder entrer. Après, on verra. » Elle tape l'eau du bout des doigts. « On verra toujours, avec elle. »" },
      "Elle se tourne sur le dos et regarde les étoiles entre les branches des saules. « Ici, c'est déjà plus chez moi, dit-elle. Ça sent la terre. Les gens ont des caves. Ils enterrent leur vin, tu te rends compte ? Chez nous, on enterre rien : ça remonte toujours. » Elle rit tout bas. « Au Mont, les moines parlent avec leurs mains. Ma mère disait qu'ils se racontent des histoires sales pendant la messe et que personne ne peut les attraper. »",
      { if: { has: "taiseurs:serment" }, text: "Elle effleure ton poignet, une fois, deux fois, puis une fois : le signe des Taiseurs pour *demain*. Tu le lui rends sans y penser. Elle sourit à l'eau." },
    ],
    choices: [
      { label: "« Tu ne pourras plus rentrer aux Joncs. À cause de moi. »", hide: { not: { voile: "iiic_lison_ancolie" } }, fx: { conf: { lison: 8 }, ep: ["perso", 600] }, to: "III_nuit_lison_fin" },
      { label: "Rester là, à côté d'elle, sans parler", fx: { conf: { lison: 3 } }, back: "III_nuit" },
    ] },

  III_nuit_lison_fin: { act: "III", title: "Ce que dit la dentelle", place: null, with: "lison",
    text: [
      "Lison se redresse d'un coup sur un coude. « Tu m'écoutes avec ça, hein. » Elle tend la main vers ton oreille, vers le cornet, et s'arrête à un pouce. Elle laisse retomber le bras.",
      "« Pas à cause de toi, dit-elle. À cause de moi. J'ai choisi. Ma grand-mère dit que les Vasse ne choisissent jamais rien, qu'ils attendent que l'eau choisisse pour eux. » Elle se recouche. « Eh bien, j'ai fait ma vase moi-même, cette fois. »",
      { tendre: true, text: "Elle cherche ta main dans le noir, la trouve, la garde un moment. Puis elle la lâche, et elle dit d'une voix toute ordinaire qu'il faudra se lever tôt.", else: "Elle te donne un coup d'épaule, comme à un frère, et elle dit d'une voix toute ordinaire qu'il faudra se lever tôt." },
    ],
    choices: [{ back: "III_nuit" }] },

  III_nuit_salome: { act: "III", title: "Salomé, la nuit", place: null, with: "salome",
    text: [
      "Salomé est debout à l'arrière, à côté de Gilduin endormi, une main sur la barre comme sur l'épaule d'un ami. Elle ne dort jamais sur l'eau des autres. Elle l'a dit le premier soir, et personne n'a discuté.",
      "« L'eau douce, dit-elle sans se retourner, {{oreille#iiic_salome_douce|ça ne me dit rien, c'est de l'eau de lessive|ça ne garde pas les morts, au moins. Tout redescend. Ici, Maïwenn serait revenue toute seule jusqu'au Bec, et je l'aurais enterrée}}. »",
      { if: { has: "salome:maiwenn" }, text: "Elle se tait un long moment. « Lothaire, dit-elle. Je l'ai à l'œil, maintenant. Le jour où je le croise sans témoin, je ne sais pas ce que je fais. Je préfère que tu sois là ce jour-là. Pour que je sache. »", else: "Elle se tait un long moment. « La corde de Maïwenn, dit-elle. Je l'ai gardée. Le bout. Il est dans mon coffre, à Port-Vasier. Coupé net, comme au couteau. Les cordes qui s'usent sur la roche, elles s'effilochent. » Elle n'en dit pas plus." },
      { if: { has: "salome:plonge" }, text: "« J'ai replongé, aux Écueils, dit-elle. Pour toi. Je ne sais pas si je recommencerai. Mais je sais que je peux. Ça change le sommeil. »" },
    ],
    choices: [
      { label: "« Tu l'aurais enterrée ici, Maïwenn ? »", hide: { not: { voile: "iiic_salome_douce" } }, fx: { conf: { salome: 6 }, ep: ["perso", 500] }, to: "III_nuit_salome_fin" },
      { label: "Prendre la barre un moment, pour qu'elle s'assoie", fx: { conf: { salome: 3 } }, back: "III_nuit" },
    ] },

  III_nuit_salome_fin: { act: "III", title: "Un endroit", place: null, with: "salome",
    text: [
      "Salomé se retourne. Elle a les yeux secs et la bouche serrée. « Tu as entendu ça. » Ce n'est pas une question.",
      "« Elle était des Combes, Maïwenn, dit-elle enfin. D'un village en amont d'Orle, avec un nom de saint. Elle voulait voir la mer. Elle l'a vue. » Elle passe la main sur la barre, très lentement. « Je lui avais promis de la ramener voir sa mère une fois avant que la vieille meure. On n'a jamais eu le temps. La vieille est peut-être encore là-haut. Je n'ai jamais osé demander. »",
      "Elle reprend la barre des deux mains. « Va dormir. Je te réveille au pont. »",
    ],
    fx: { flag: "iiic:maiwenn_combes" },
    choices: [{ back: "III_nuit" }] },

  III_nuit_gildas: { act: "III", title: "Frère Gildas, la nuit", place: null, with: "gildas",
    text: [
      "Frère Gildas est agenouillé au bord du pont, la capuche baissée, les mains jointes sur le plat-bord. Il prie sans remuer les lèvres. Tu attends qu'il ait fini. Il finit, se signe, et puise de l'eau dans ses mains pour se laver le visage.",
      { before: "gildas:cicatrice", text: "La capuche glisse. Dans la lueur du fanal, à la racine des cheveux, sur le front, une cicatrice en croissant, rose encore, de la largeur d'un pouce. Gildas remonte sa capuche sans hâte. « Les portes sont basses, au Mont, dit-il. On s'y cogne tous une fois. »" },
      "« Je suis entré au Mont à quatorze ans, dit-il en s'asseyant sur ses talons. On m'a appris à me taire pendant sept ans avant de m'apprendre à lire. Puis à chanter. Puis à me taire encore, mais autrement. » Il regarde l'eau noire. « Il y a une salle, là-haut, où l'on apprend aux novices à ne plus rien laisser passer dans la voix. On y entre enfant. On en sort, et on ne tremble plus. »",
      "Il se relève et te souhaite une bonne nuit, avec cette politesse un peu vieille qu'il a pour tout le monde. Puis il va s'allonger dans le sel, et il dort tout de suite, comme dorment ceux qui ont l'habitude des dortoirs.",
    ],
    choices: [
      { label: "Le regarder dormir un moment", fx: { flag: "gildas:cicatrice", ep: ["perso", 300] }, hide: { has: "gildas:cicatrice" }, back: "III_nuit" },
      { back: "III_nuit" },
    ] },
});

// ==================================================================== the Republic's soldiers at Pont-Ravel
Object.assign(P, {
  III_controle: { act: "III", title: "Le pont de Pont-Ravel", place: null, takes: "morning",
    text: [
      "Au matin, la rivière passe sous un pont de pierre à six arches, et sur le pont, une barrière : une poutre peinte en rouge sur deux tréteaux, un feu de camp, un drapeau de Salvèze qui pend sans vent. Quatre soldats de la République en casaque rouge, des piques, des chapeaux de fer cabossés. Un bachot amarré à la pile du milieu. Les gabares font la queue en contrebas.",
      "Le sergent est un homme maigre, aux joues creuses, qui tient un papier roulé à la main. « Sergent Ravier, de la garnison d'Orle. Ordre du Conseil, dit-il en montant à bord. Fouille de chaque bateau. On cherche une personne recherchée pour meurtre, à Salvèze. » Il lève le papier, sans le dérouler. « Ordre de fouiller chaque bateau, {{oreille#iiic_ravier|et je fouillerai chaque bateau jusqu'au fond de la cale|et je n'ai pas vu un liard de solde depuis la Chandeleur, ni mes hommes non plus}}. »",
      { after: "iiic:prevenu", text: "Tu savais. Tu t'es levé{e} avant l'aube et tu as eu le temps de choisir ta place, dans le sel, contre le bordé, où la pique ne descend pas droit." },
      "Parmi les soldats, un gamin de dix-huit ans, blond, aux oreilles rouges de froid, regarde Gilduin fixement. Gilduin regarde ailleurs.",
      { with: "tibere", text: "Tibère a rabattu son chapeau sur ses yeux. « Ravier, murmure-t-il. Je l'ai eu sous mes ordres, il y a dix ans. Un brave idiot. Il a peur de tout, sauf de son devoir. »" },
    ],
    choices: [
      { label: "Te cacher dans le sel, contre le bordé", test: { dom: "discretion", diff: -10, label: "Disparaître sous le sel", help: [{ if: { has: "iiic:prevenu" }, v: 25 }, { with: "lison", v: 10 }] },
        win: { fx: { flag: "iiic:controle=cache", ep: ["perso", 700] }, to: "III_controle_passe" }, lose: { to: "III_controle_trouve" } },
      { label: "Glisser trois ducats dans la main du sergent, « pour la solde de la Chandeleur »", hide: { not: { voile: "iiic_ravier" } }, fx: { gold: -3, flag: "iiic:controle=solde", ep: ["perso", 800] }, to: "III_controle_passe" },
      { label: "Appeler le jeune soldat blond par son nom : Toinot Teyssier", hide: { not: { voile: "iiic_prosper_fils" } }, fx: { flag: "iiic:controle=toinot", ep: ["perso", 900], conf: { tibere: 2 } }, to: "III_controle_passe" },
      { label: "Laisse-moi faire", who: "tibere", test: { dom: "social", diff: -10, label: "Un sergent parle à un sergent" },
        win: { fx: { flag: "iiic:controle=tibere", conf: { tibere: 5 }, ep: ["perso", 700] }, to: "III_controle_passe" }, lose: { to: "III_controle_trouve" } },
      { label: "Te présenter en passager ordinaire, avec aplomb", test: { dom: "social", diff: -20, label: "Mentir à un soldat qui a ton portrait", help: [{ if: { has: "metier:parole" }, v: 15 }, { with: "gildas", v: 10 }] },
        win: { fx: { flag: "iiic:controle=aplomb", ep: ["perso", 800] }, to: "III_controle_passe" }, lose: { to: "III_controle_trouve" } },
      { label: "Frapper le premier et passer le pont de force", fight: { title: "Le pont de Pont-Ravel", enemies: [{ id: "iiic_soldat_rep", n: 3 }],
        win: { fx: { flag: "iiic:controle=combat", ep: ["perso", 800] }, to: "III_controle_combat" }, lose: { to: "III_controle_pris" },
        flee: { label: "Sauter dans la rivière", dom: "nature", diff: -10, to: "III_controle_nage" } } },
    ] },

  III_controle_trouve: { act: "III", title: "La pique", place: null, urgent: 20,
    text: [
      "La pique descend dans le sel à un pouce de ta cuisse, remonte, redescend. La troisième fois, elle touche. Un soldat crie. Le sergent Ravier se retourne, déroule enfin son papier, regarde le portrait, te regarde.",
      "« C'est elle, dit un soldat. C'est lui, dit un autre. » Ils ne sont pas d'accord sur grand-chose, mais ils sont d'accord sur toi. Le sergent recule d'un pas et pose la main sur la poignée de son épée, comme un homme qui a toujours gardé son épée au fourreau et qui se demande s'il va la tirer aujourd'hui.",
      { with: "any", text: "Tes compagnons sont debout. Personne n'a encore bougé. Il suffit d'un geste." },
    ],
    choices: [
      { label: "Te battre", fight: { title: "Le pont de Pont-Ravel", enemies: [{ id: "iiic_soldat_rep", n: 3 }],
        win: { fx: { flag: "iiic:controle=combat", ep: ["perso", 800] }, to: "III_controle_combat" }, lose: { to: "III_controle_pris" },
        flee: { label: "Sauter dans la rivière", dom: "nature", diff: -10, to: "III_controle_nage" } } },
      { label: "Plonger par-dessus le bordé, tout habillé{e}", timeout: true, test: { dom: "nature", diff: -10, label: "Nager sous la gabare", help: [{ with: "salome", v: 15 }, { with: "lison", v: 10 }] },
        win: { to: "III_controle_nage" }, lose: { to: "III_controle_pris" } },
      { label: "Lever les mains et te rendre", fx: { flag: "iiic:rendu" }, to: "III_controle_pris" },
    ] },

  III_controle_nage: { act: "III", title: "Sous la gabare", place: null,
    text: [
      "L'eau de l'Orle est si froide qu'elle te coupe le souffle d'un coup, comme une main sur la bouche. Tu passes sous la coque, entre les algues et la vase, et tu remontes de l'autre côté de *La Patience*, collé{e} au bordé, dans l'ombre des sacs. Au-dessus, on crie. Une pique fouille l'eau du mauvais côté.",
      "Gilduin, à la barre, crie plus fort que tout le monde. « Il a sauté ! Elle a sauté ! Par là, vers les saules ! » Il montre l'autre rive. Les soldats se ruent sur le bachot, qui part de travers, et Gilduin donne de la voix aux haleurs. La corde se tend. *La Patience* passe sous l'arche pendant que le bachot cherche encore dans les saules.",
      "On te hisse à bord une lieue plus loin, bleu{e} de froid. Gilduin te jette une couverture. « Le vin est à l'arrière, dit-il. Il est à maître Haquin. Bois-en, il paiera. »",
      { with: "any", text: "Tes compagnons te frictionnent avec une brutalité affectueuse. Personne ne dit rien pendant un moment. Puis quelqu'un rit, et tout le monde rit, de nerfs." },
    ],
    fx: { flag: "iiic:controle=nage", ep: ["perso", 700], pv: -2 },
    choices: [{ label: "Laisser la gabare remonter vers Orle", big: true, to: "III_arrivee" }] },

  III_controle_passe: { act: "III", title: "La barrière levée", place: null,
    text: [
      { after: "iiic:controle=cache", text: "La pique descend dans le sel à un pied de ta tête, puis plus loin, puis ailleurs. Le sel te brûle les yeux et la gorge. Quand tu ressors, la barrière rouge est loin derrière, et Gilduin, à la barre, mâche sa réglisse avec une concentration terrible." },
      { after: "iiic:controle=solde", text: "Le sergent Ravier regarde les trois ducats dans sa main. Il les regarde longtemps, comme une chose qu'il avait oubliée. Il ferme le poing. « Le sel, dit-il à ses hommes. Je l'ai fouillé. Rien. » Il descend de la gabare sans te regarder, et, sur le pont, il partage les pièces entre ses soldats, une par une, à la lumière du feu." },
      { after: "iiic:controle=toinot", text: "Le jeune soldat sursaute à son nom. Il regarde Gilduin, qui regarde enfin son fils. Le gamin devient rouge jusqu'aux cheveux. « Sergent, dit-il, c'est la gabare de mon père. Je la connais. Il n'y a que du sel. Je réponds de lui. » Le sergent hésite, puis hausse les épaules. La barrière se lève. Gilduin ne dit rien pendant une lieue, puis il se mouche longuement, et il dit que c'est le froid." },
      { after: "iiic:controle=tibere", text: "Tibère a soulevé son chapeau. « Ravier. Tu tiens encore ta pique comme une fourche. » Le sergent blêmit, se met presque au garde-à-vous, puis se rappelle que Tibère n'est plus rien. Ils parlent un long moment près du feu, de la caserne, de gens morts, de la solde qui ne vient pas. Quand Tibère revient à bord, la barrière se lève. « Il ne t'a pas vu{e}, dit-il. Il me l'a promis. Il tient ses promesses ; c'est pour ça qu'il est encore sergent. »" },
      { after: "iiic:controle=aplomb", text: "Tu parles au sergent de ton négoce, de tes créances à Orle, du prix du sel. Tu lui demandes s'il connaît un bon tonnelier. Il regarde son papier, te regarde, regarde le papier. « Le dessin ne vaut rien, dit-il enfin, à moitié pour lui. On dirait tout le monde. » La barrière se lève." },
      "*La Patience* passe sous l'arche du milieu. L'eau résonne sous la voûte, et pendant un instant on n'entend plus que ça. Puis le jour revient, et la rivière s'ouvre sur les Combes.",
    ],
    choices: [{ label: "Laisser la gabare remonter vers Orle", big: true, to: "III_arrivee" }] },

  III_controle_combat: { act: "III", title: "Le pont forcé", place: null,
    text: [
      "Trois soldats sont à terre, ou dans l'eau, ce qui revient au même pour leur journée. Le quatrième, le sergent Ravier, a lâché son papier, qui flotte dans le courant, ton portrait vers le ciel. Le jeune soldat blond a jeté sa pique dans le feu et s'est assis sur le parapet, les mains sur la tête.",
      "Gilduin a fait claquer la corde. Les haleurs tirent comme s'ils avaient le diable aux trousses ; les chevaux aussi. *La Patience* passe sous l'arche dans un bouillonnement d'écume.",
      "« Bon, dit Gilduin quand le pont n'est plus qu'une ligne grise derrière eux. Je ne pourrai plus redescendre par là avant la Saint-Jean. Et tout Orle saura demain qu'on a cogné des soldats de la République sur ma gabare. » Il crache sa réglisse. « Remarquez, à Orle, ça ne fera pas de tort. »",
      { with: "gildas", text: "Frère Gildas soigne un soldat tombé sur le pont de la gabare, une entaille au cuir chevelu, avec du fil et une aiguille qu'il sort de sa manche. Il le fait vite et bien, puis il le pose sur le parapet du pont au passage, comme on dépose un paquet." },
    ],
    fx: { fac: { conseil: -5 } },
    choices: [{ label: "Laisser la gabare remonter vers Orle", big: true, to: "III_arrivee" }] },

  III_controle_pris: { act: "III", title: "Aux fers", place: null, takes: "night",
    text: [
      "On te met aux fers sur le bachot des soldats, une chaîne au pied, l'autre bout cadenassé à un anneau de la pile du pont. Le sergent Ravier te regarde avec une sorte de gêne. « On vous redescend à Salvèze demain, dit-il. J'attends une barque du Conseil. » Il reste là un moment. « {{oreille#iiic_ravier_doute|Je ne suis pas sûr que vous l'ayez fait|J'ai vu la prime de l'avis déjà promise à un homme du Guet avant même qu'on vous ait cherché}}. Mais ce n'est pas moi qui décide. »",
      { if: { has: "iiic:rendu" }, text: "Tu as levé les mains sans te battre, et le sergent Ravier l'a vu. Il te laisse ton manteau, et il fait serrer la chaîne assez lâche pour qu'elle ne mange pas la cheville." },
      "La nuit tombe. Les soldats boivent autour du feu, sur le pont. L'eau court sous le bachot, noire, froide, pressée.",
      { with: "lison", text: "Vers minuit, une ombre glisse contre la coque du bachot. Lison, à la nage, un couteau entre les dents, puis un crochet de fil de fer. Le cadenas cède au troisième essai. « Tu me dois une barque, souffle-t-elle. Et une nuit de sommeil. »" },
      { without: "lison", with: "any", text: "Vers minuit, une ombre glisse contre la coque du bachot. Un de tes compagnons, trempé, une pince à la main, prise dans la caisse à outils de Gilduin. La chaîne cède au troisième coup, étouffé dans un manteau." },
      { without: "any", text: "Vers minuit, une ombre glisse contre la coque du bachot. Le jeune soldat blond, celui aux oreilles rouges. Il ouvre le cadenas avec la clé du sergent, sans un mot, et repart à la nage vers le pont. Tu ne sauras jamais pourquoi." },
      "Une lieue en amont, *La Patience* t'attend, fanal éteint, amarrée sous un coteau. Gilduin te hisse à bord sans rien dire. Il te donne sa racine de réglisse, la sienne, celle qu'il mâchait.",
    ],
    fx: { flag: "iiic:controle=pris", ep: ["perso", 600] },
    choices: [{ label: "Laisser la gabare remonter vers Orle", big: true, to: "III_arrivee" }] },

  III_arrivee: { act: "III", title: "Les Combes d'Orle", place: null,
    text: [
      "La vallée s'ouvre. D'un coup, les collines s'écartent, et la rivière entre dans un pays de coteaux en terrasses, de murets de pierre sèche, de ceps alignés comme des écritures. Au fond, au pied d'une montagne grise aux flancs encore blancs de neige, un bourg de pierre blonde s'étage autour d'un clocher carré : Orle-le-Bourg. Au-dessus, beaucoup plus haut, accrochée à une épaule de la montagne, une ligne de murs pâles et un toit. Le Mont-Taciturne.",
      "Sur les coteaux, des carrières entaillent la roche, des balafres de pierre claire au milieu des vignes. On entend, portés par le vent, des coups de masse réguliers, et une cloche qui sonne une heure qu'il n'est pas.",
      { with: "gildas", text: "Frère Gildas a rabattu sa capuche et regarde le Mont. Ses lèvres bougent. Tu crois qu'il prie. Puis tu comprends qu'il compte : les fenêtres, peut-être, ou les années." },
      { if: { has: "iiic:etui" }, text: "Gilduin regarde la sixième barrique, refermée, vide, et puis toi. « Maître Haquin va chercher son vin au quai, dit-il. Il va trouver son vin. Le reste, je n'en sais rien. Je n'ai jamais rien su. » Il te tend la main. « Je repars dans trois jours. Si vous avez besoin de redescendre vite, je suis au quai jusque-là. »", else: "Gilduin amarre *La Patience* au quai d'Orle avec des gestes de vieil homme qui a fait ça dix mille fois. Il te serre la main. « Je repars dans trois jours. Si vous avez besoin de redescendre vite, je suis au quai jusque-là. »" },
      { if: { has: "iiic:controle=nage" }, text: "Tes habits sèchent sur les sacs de sel, raides et blancs aux coutures. Gilduin te rend ta ceinture : il l'a repêchée à la gaffe sous l'arche, pendant que les soldats fouillaient les saules." },
    ],
    fx: { ep: ["seance", 1500], reveal: "orle", meet: "iiic_prosper" },
    choices: [{ label: "Monter dans Orle-le-Bourg", big: true, to: "III_hub" }] },
});

// ==================================================================== Orle-le-Bourg (the act's crossroads)
Object.assign(P, {
  III_hub: { act: "III", title: "Orle-le-Bourg", place: "orle", hub: true, routes: true, backName: "la place d'Orle-le-Bourg",
    text: [
      { first: true, text: "Du quai, une rue en pente monte entre des maisons de pierre blonde aux portes cochères, chacune avec sa cave voûtée qui ouvre sur la rue et son odeur de vin froid. La rue débouche sur une place carrée : une halle de bois sur des piliers de pierre, une fontaine à quatre goulots, l'église Saint-Vincent avec son clocher carré, l'enseigne de l'auberge du Pressoir, et une maison plus haute que les autres, aux volets peints aux couleurs de Salvèze, où une plaque de cuivre dit *Recette des tailles de la République*." },
      { first: true, text: "Au bout de la place, la rue continue vers les chantiers des carriers, où des blocs équarris attendent sous des bâches. Au-dessus des toits, la montagne monte d'un trait, et sur son épaule, très haut, l'abbaye du Mont-Taciturne regarde le bourg sans rien dire. Un sentier en lacets y grimpe à travers les dernières vignes." },
      { first: true, text: "La fontaine de la place {{echo#iiic_fontaine|coule sur sa pierre usée, verdie autour des goulots|garde une voix de femme, très ancienne, claire, qui rit et dit : « Laissez, Aymeric. L'eau des Combes ne m'a jamais fait de mal. Elle me fera du bien quand je n'aurai plus de voix »}}. Les femmes y rincent des cuves à vendange en parlant fort." },
      { again: true, when: "day", text: "La place d'Orle-le-Bourg, la halle, la fontaine, le clocher carré de Saint-Vincent. Des charrettes de pierre passent en grinçant vers le quai. Là-haut, le Mont." },
      { again: true, when: "night", text: "La place, la nuit. Une lanterne à l'auberge du Pressoir, une autre à la Recette des tailles, où un garde dort assis contre la porte. La fontaine coule pour personne. Là-haut, une seule lueur au Mont, qui ne bouge pas." },
      { after: "mandat", before: "IIIC_avis", text: "Sur un pilier de la halle, un papier neuf est cloué par-dessus les vieux. Tu reconnais la forme de l'avis avant d'en lire un mot." },
      { after: "iiic:avis_arrache", text: "Sur le pilier de la halle, un avis neuf remplace celui que tu as arraché. Le crieur de la Recette l'a cloué plus haut, hors de portée de main." },
      { after: "iiic:controle=combat", text: "On parle beaucoup, sous la halle, d'une gabare qui a forcé le pont de Pont-Ravel et cogné des soldats. On en parle avec un plaisir mal caché. Personne ne te regarde trop longtemps." },
      { after: "iiic:vigne=sauvee", text: "Esclarmonde Roustan est descendue au bourg avec une charrette de barriques, et elle les vend sous la halle à qui en veut, en riant fort, devant la Recette des tailles fermée." },
      { after: "iiic:vigne=perdue", text: "Les vignes d'Esclarmonde Roustan, sur le coteau de l'Aiguier, portent un écriteau de la République. Personne ne les taille. Le bois mort pousse en tous sens." },
      { after: "iiic:carriere=rouverte", text: "Des coups de masse montent de la vieille carrière de la Reine, au-dessus du bourg. Les carriers y sont retournés. On les entend chanter, le soir, en redescendant." },
      { after: "iiic:deserteurs=chasses", text: "Les vignerons ont rouvert les caves qui donnent sur la route. On dit les déserteurs repassés en Aveline, ou morts, ou les deux." },
      { after: "iiic:capitaine=pris", text: "La porte de la Recette des tailles est gardée par deux soldats de la République. Derrière, au cachot, dort un marchand de vin d'Aveline qui n'a jamais vendu une barrique." },
      { after: "mont:ouverte", text: "Tu redescends du Mont avec le miroir contre ta poitrine. La place n'a pas changé. Tu la traverses {{miroir#iiic_hub_miroir|comme on traverse une place qu'on connaît, le pas tranquille|en regardant les gens en face pour la première fois depuis la nuit des Lanternes, et le pas tranquille te coûte}}." },
    ],
    choices: [
      { label: "L'auberge du Pressoir", to: "IIIC_pressoir" },
      { label: "La halle, où se tient la foire aux vins", hide: { night: true }, to: "IIIC_halle" },
      { label: "L'avis cloué sur le pilier de la halle", hide: { any: [{ not: { has: "mandat" } }, { seen: "IIIC_avis" }] }, to: "IIIC_avis" },
      { label: "L'église Saint-Vincent", to: "IIIC_chapelle" },
      { label: "La Recette des tailles, aux volets de Salvèze", hide: { not: { seen: "IIIC_vignes" } }, to: "IIIC_recette" },
      { label: "Les chantiers des carriers, au bout de la rue", to: "IIIC_chantier" },
      { label: "Le coteau de l'Aiguier, où une femme taille seule ses vignes", hide: { night: true }, to: "IIIC_vignes" },
      { label: "Le quai, où Gilduin décharge son sel", to: "IIIC_quai" },
      { label: "Les vieux vignerons de la halle, qui parlent des hauts", hide: { any: [{ night: true }, { seen: "IIID_rumeurs" }] }, to: "IIID_rumeurs" },
      { label: "Accompagner Salomé jusqu'à Saint-Privat, au-dessus du bourg", hide: { seen: "IIIC_salome_mere" }, to: "IIIC_salome_mere" },
      { label: "Suivre Lison, qui s'est arrêtée devant un muret de vigne", hide: { seen: "IIIC_lison_murs" }, to: "IIIC_lison_murs" },
      { label: "Suivre Tibère au relais de poste", hide: { seen: "IIIC_tibere_relais" }, to: "IIIC_tibere_relais" },
      { label: "T'asseoir à côté de Frère Gildas, sur la margelle de la fontaine", hide: { seen: "IIIC_gildas_fontaine" }, to: "IIIC_gildas_fontaine" },
      { label: "Écouter les nouvelles qui montent de la vallée", big: true, hide: { not: { has: "mont:ouverte" } }, to: "IIID_nouvelles" },
    ] },

  IIIC_avis: { act: "III", title: "L'avis de la République", place: "orle",
    fx: { clue: "iiic_m_dix" },
    text: [
      "L'avis est imprimé, ce qui est rare et cher : la République a fait les choses en grand. *Au nom du Conseil des Comptoirs de Salvèze. Est recherché{e}, pour le meurtre de sa maîtresse, dame Odeline Carus, brocanteuse sur le quai des Lanternes, l'apprenti{e} de ladite, dit{e} {hero}. Cent ducats à qui le livrera vivant au Guet, ou à tout poste de la République.*",
      { before: "III_nuit_tibere", text: "Au-dessous, d'une autre encre, en petits caractères : *L'accusé{e} a été entendu{e} se querellant avec la victime vers la dixième heure du soir, la nuit des Lanternes, par un témoin digne de foi.*", else: "Au-dessous, d'une autre encre, en petits caractères, quelques lignes sur un témoin digne de foi et une querelle. Tu les connais déjà par Tibère." },
      "Le nom de ta maîtresse est mal écrit. *Carus*, avec un seul r. Tu restes là un moment, devant cette faute, plus longtemps que devant ton propre nom.",
      "Un vieux vigneron s'arrête à côté de toi, lit l'avis en remuant les lèvres, et crache par terre. « Cent ducats, dit-il. La République ne paie plus ses soldats, mais elle a cent ducats pour ça. » Il te regarde. Il regarde le portrait. Il s'en va sans rien dire, les mains dans le dos.",
    ],
    choices: [
      { label: "Arracher l'avis et le mettre dans ta poche", fx: { flag: "iiic:avis_arrache", ep: ["perso", 200] }, back: "III_hub" },
      { label: "Le laisser où il est", back: "III_hub" },
    ] },

  IIIC_pressoir: { act: "III", title: "L'auberge du Pressoir", place: "orle", shop: "iiic_pressoir", backName: "l'auberge du Pressoir",
    text: [
      { first: true, text: "L'auberge du Pressoir tient son nom d'un vrai pressoir à vis, énorme, en chêne noirci, qu'on a laissé au milieu de la salle parce qu'il était trop gros pour sortir quand on a bâti les murs autour. On mange sur la maie. On s'assied sur des tonneaux. Il y a du feu dans une cheminée où l'on pourrait rôtir un veau, et on y rôtit un veau." },
      { first: true, text: "L'aubergiste s'appelle Honorine Fabrègue. Elle est large, rouge, rapide, avec des avant-bras de lavandière et une voix qui porte jusqu'au quai. « Une chambre, de la soupe, du vin du coteau ou du vin de la Recette, dit-elle. Le vin de la Recette, c'est celui que le receveur a saisi et revendu. Je le vends deux fois plus cher, comme ça il a honte. »" },
      { again: true, when: "day", text: "Le Pressoir, son grand pressoir de chêne, son feu. Honorine Fabrègue te fait un signe de la louche." },
      { again: true, when: "night", text: "Le Pressoir, la nuit : la salle pleine de carriers et de vignerons, la fumée, les dés. Honorine Fabrègue passe entre les tables avec quatre pichets dans chaque main." },
      { after: "iiic:tastevin", text: "Depuis le concours, Honorine pose devant toi le vin du coteau sans que tu le demandes, et refuse la moitié de ton argent. « Le Taste-vin ne paie pas son pichet au Pressoir », dit-elle." },
      { after: "mandat", text: "Honorine t'a reconnu{e} dès la porte. Tu le sais à la façon dont elle a posé ton pichet, très exactement devant toi, sans te regarder. « On ne livre personne, au Pressoir, dit-elle à la cantonade. {{oreille#iiic_honorine|Ça porte malheur aux tonneaux|J'ai un frère sur un avis pareil, à Aveline, depuis dix ans, et je prie pour qu'une aubergiste là-bas se taise aussi}}. »" },
      { with: "tibere", text: "Tibère s'est trouvé une place près du feu avant même que tu aies franchi le seuil. Il a déjà commandé." },
    ],
    choices: [
      { label: "Écouter la salle, un pichet à la main", to: "IIIC_pressoir_salle" },
      { label: "La table des joueurs de Chandelle, près du feu", hide: { not: { night: true } }, to: "IIIC_pressoir_table" },
      { label: "Prendre une chambre pour la nuit (un ducat)", fx: { gold: -1 }, to: "IIIC_chambre" },
      { label: "Frapper à la chambre de maître Haquin, à l'étage", hide: { any: [{ not: { seen: "IIIC_haquin" } }, { quest: "IIIC_capitaine" }] }, to: "IIIC_haquin_chambre" },
      { back: "III_hub" },
    ] },

  IIIC_pressoir_salle: { act: "III", title: "La salle du Pressoir", place: "orle", backName: "la salle du Pressoir",
    text: [
      "À la table du fond, trois carriers aux mains blanches de poussière jouent aux osselets. L'un d'eux, un vieux, dit que la carrière de la Reine chante encore les nuits de gel. « Anthime dit ça depuis quarante ans, dit un autre. Anthime est sourd depuis trente. » Ils rient. Le vieux ne rit pas.",
      "Près du feu, un vigneron aux yeux rouges parle au pichet plus qu'à ses voisins. « La Recette a pris les vignes de la Roustan, à l'Aiguier, dit-il. Trois ans de tailles en retard. Elle taille quand même. Le receveur dit qu'il les vendra à la Saint-Georges. Il dit qu'un acheteur de la ville les attend. » Un autre : « Un acheteur de la Banque, oui. La Banque achète tout ce qui tombe. » Le vigneron aux yeux rouges : « {{oreille#iiic_vigneron|On ne peut rien contre la Recette|Le receveur Ortolan tient deux registres, je l'ai vu, un pour Salvèze et un pour lui, et je n'ai pas le courage de le dire}}. »",
      "À une table seule, un homme bien mis, une quarantaine d'années, un manteau de bon drap gris, mange proprement un morceau de veau en regardant la porte. Les autres l'appellent maître Haquin, avec une politesse de gens qui ne l'aiment pas. On dit qu'il achète du vin pour Aveline. On dit qu'il n'en a pas acheté une barrique.",
      "Une femme raconte que les déserteurs du bois de la Gâche ont vidé la cave des Bousquet la semaine passée et emmené leur mule. « Douze, ils sont, peut-être quinze. Ils parlent la langue d'en haut. Le chef a une barbe rousse et des manières. » {{oreille#iiic_femme_gache|Personne ne monte plus à la Gâche|Mon fils leur porte du pain, le soir, parce qu'ils paient en argent d'Aveline et que la Recette nous a tout pris}}, dit-elle.",
    ],
    fx: { questSeen: ["IIIC_vigne", "IIIC_deserteurs"] },
    choices: [
      { label: "S'asseoir à la table de maître Haquin", hide: { seen: "IIIC_haquin" }, to: "IIIC_haquin" },
      { label: "Demander au vigneron ce qu'il a vu dans les registres du receveur", hide: { any: [{ not: { voile: "iiic_vigneron" } }, { seen: "IIIC_vigneron" }] }, to: "IIIC_vigneron" },
      { label: "Demander à la femme où son fils porte le pain", hide: { not: { voile: "iiic_femme_gache" } }, fx: { flag: "iiic:chemin_gache", ep: ["perso", 400] }, to: "IIIC_femme_gache" },
      { back: "IIIC_pressoir" },
    ] },

  IIIC_vigneron: { act: "III", title: "Les deux registres", place: "orle",
    text: [
      "Le vigneron aux yeux rouges s'appelle Aurélien Bousquet, et c'est sa cave que les déserteurs ont vidée. Il te regarde avec l'effroi d'un homme qui vient de s'entendre penser à voix haute.",
      "« Je portais ma taille à la Recette, dit-il très bas. En liards, compté deux fois. Le receveur Ortolan a écrit dans un registre relié de rouge, celui qui part à Salvèze. Puis il a écrit la même ligne dans un petit registre noir, qu'il garde dans son tiroir. La ligne n'était pas la même. Dans le rouge, il a écrit la moitié. » Il boit. « Le reste, il le garde. Et ceux qui ne paient pas tout, il les saisit au nom de la République, pour les sommes du registre noir. »",
      "Il pose la main sur ton bras. « Je n'ai rien dit. J'ai trois enfants et une vigne. »",
    ],
    fx: { flag: "iiic:registre_noir", ep: ["perso", 500] },
    choices: [{ back: "IIIC_pressoir_salle" }] },

  IIIC_femme_gache: { act: "III", title: "Le pain du soir", place: "orle",
    text: [
      "La femme te regarde comme on regarde un chien qui a parlé. Puis elle hausse les épaules et remplit ton gobelet, et le sien.",
      "« Le chemin des Ânes, au-dessus de la carrière de la Reine, dit-elle. Il y a un frêne fendu par la foudre. On laisse le pain dans le creux, dans un sac, et le lendemain il y a une pièce d'argent à la place. Une pièce à l'aigle, d'Aveline. Mon fils dit qu'ils sont polis. Qu'ils ont faim. Qu'ils ont peur de quelque chose qui vient derrière eux. »",
      "Elle boit. « Ils ont pillé les Bousquet, c'est vrai. Mais les Bousquet avaient trois caves et ils en ont montré une à la Recette. Je dis ça. Je ne dis rien. »",
    ],
    choices: [{ back: "IIIC_pressoir_salle" }] },

  IIIC_pressoir_table: { act: "III", title: "La Chandelle au Pressoir", place: "orle", taverne: { mise: 2, adversaire: "un carrier aux mains blanches" },
    text: [
      "Près du feu, on joue à la Chandelle sur un tonneau debout. Le carrier qui tient la table a des mains couvertes de poussière de pierre jusqu'aux coudes, et il pose les dés comme on pose un bloc, d'un geste sec.",
      "« Deux ducats la mise, dit-il. Les gens de la ville perdent, d'habitude. Ils jouent trop vite. Ici, on a le temps. »",
    ],
    choices: [{ back: "IIIC_pressoir" }] },

  IIIC_chambre: { act: "III", title: "Une chambre au Pressoir", place: "orle", takes: "morning",
    text: [
      { first: true, text: "La chambre est sous les toits, avec un lit de bois, une paillasse de feuilles de maïs qui crissent, une cuvette, et une lucarne qui donne sur le Mont. Le vin de la salle monte par le plancher, avec les rires, jusque tard." },
      { again: true, text: "La même chambre sous les toits, la paillasse qui crisse, la lucarne sur le Mont." },
      "Tu dors. Tu rêves, comme souvent depuis le quai, d'un escalier qui descend plus loin qu'il ne devrait. Au réveil, il y a de la neige fraîche sur le Mont, et de la soupe chaude en bas.",
      { after: "mont:ouverte", text: "Tu dors {{miroir#iiic_chambre_miroir|d'un sommeil lourd, sans rêves|en entendant ta propre voix, la nuit des Lanternes, qui dit « Tu mourras seule avec tes secrets », et la porte qui claque, et tu te réveilles avant de savoir si tu as pleuré}}." },
    ],
    fx: { rest: true },
    choices: [{ back: "IIIC_pressoir" }] },
});

// ==================================================================== the wine fair
Object.assign(P, {
  IIIC_halle: { act: "III", title: "La foire aux vins", place: "orle", backName: "la foire aux vins, sous la halle",
    text: [
      { first: true, text: "La foire aux vins de printemps tient toute la halle et déborde sur la place : des tonneaux en perce sur des chevalets, des tables de planches, des gobelets d'étain enchaînés aux tables pour qu'on ne les emporte pas, des marchands qui crient leurs crus, des paysans qui goûtent tout et n'achètent rien. Ça sent le vin répandu, la sciure mouillée, le saucisson et le crottin." },
      { again: true, text: "La foire, sous la halle : les tonneaux en perce, les cris, la sciure mouillée." },
      { after: "iiic:veuve_payee", text: "Un gamin te tire par la manche et te tend un gobelet d'étain cabossé. « De la part de la veuve du cabaret, dit-il. Pour la coupe. Elle a payé son loyer avec vos ducats. »" },
      "Devant la Recette des tailles, le receveur en personne, un homme gras en robe noire, regarde ses commis poser des scellés de cire rouge sur des barriques saisies. À chaque scellé, un vigneron baisse la tête.",
      "Un crieur annonce, pour midi, le concours du Taste-vin : le meilleur palais de la foire gagne une coupe d'argent et le droit de vendre sans péage jusqu'à la Saint-Jean.",
    ],
    choices: [
      { label: "Faire le tour des étals de brocante, au bout de la halle", to: "IIIC_foire_etals" },
      { label: "T'inscrire au concours du Taste-vin", hide: { seen: "IIIC_foire_concours" }, to: "IIIC_foire_concours" },
      { label: "Observer le marchand d'Aveline, qui ne goûte rien", hide: { seen: "IIIC_haquin" }, to: "IIIC_haquin" },
      { back: "III_hub" },
    ] },

  IIIC_foire_etals: { act: "III", title: "Les étals du fond", place: "orle",
    text: [
      "Au bout de la halle, là où le vin cède la place au reste, une rangée de brocanteurs : des outils de vigneron, des serpettes, des hottes, des chapelets, des médailles de saints, des cruches. Tu reconnais le métier. Tu reconnais les gestes. Tu as été de l'autre côté de ces tables toute ta vie.",
      "Un homme au chapeau pointu présente, sur un coussin de velours râpé, une bouteille de verre vert, scellée de cire, couverte de poussière. « Le vin de la reine ! Trouvé dans la cave murée d'une maison de Sorne, avant le grand flot, un des derniers. Trois cents ans de garde. Huit ducats, et c'est donné. » La bouteille est {{pie#iiic_faux_vin|ancienne, verte, poussiéreuse, couverte d'une cire très vieille|soufflée l'an dernier, vieillie au thé et à la cendre ; la cire est fraîche sous une couche de suie}}.",
      "Plus loin, une veuve vend le fonds d'un cabaret fermé : des gobelets d'étain cabossés, entassés dans un panier, à un liard pièce. Au fond du panier, une coupe plus grande, noircie, que personne ne regarde. Une coupe {{pie#iiic_coupe|d'étain noirci, à pied court, bosselée|de vermeil sous la crasse, au pied gravé d'une couronne de sel et d'une feuille de vigne : la vaisselle d'une cour}}.",
      { with: "gildas", text: "Frère Gildas soupèse une médaille de saint, la repose. « Saint Vincent, dit-il. Patron des vignerons, et des gens qui boivent. On le fait plus gros chaque siècle. »" },
    ],
    choices: [
      { label: "Acheter la coupe noircie du fond du panier, pour un liard", hide: { any: [{ not: { voile: "iiic_coupe" } }, { has: "tresor:iiic_coupe" }] }, to: "IIIC_foire_coupe" },
      { label: "Fouiller le panier de la veuve, gobelet par gobelet", hide: { any: [{ voile: "iiic_coupe" }, { has: "tresor:iiic_coupe" }, { seen: "IIIC_foire_coupe" }] }, test: { dom: "savoir", diff: -20, label: "Reconnaître l'or sous la crasse", help: [{ if: { has: "metier:mains" }, v: 20 }, { with: "gildas", v: 10 }] },
        win: { to: "IIIC_foire_coupe" }, lose: { fx: { note: "Des gobelets d'étain, et encore des gobelets d'étain. Tu en achètes un, pour la peine." }, back: "IIIC_halle" } },
      { label: "Acheter la bouteille du vin de la reine, huit ducats", hide: { has: "iiic:faux_vin" }, fx: { gold: -8, item: "iiic_faux_vin", flag: "iiic:faux_vin" }, back: "IIIC_halle" },
      { label: "« Votre cire est fraîche, l'ami. Et votre verre aussi. »", hide: { any: [{ not: { voile: "iiic_faux_vin" } }, { has: "iiic:faux_vin" }, { seen: "IIIC_faussaire" }] }, to: "IIIC_faussaire" },
      { back: "IIIC_halle" },
    ] },

  IIIC_foire_coupe: { act: "III", title: "La coupe de vermeil", place: "orle",
    text: [
      "La veuve prend ton liard sans regarder la coupe. Tu la frottes du pouce, à l'abri d'un pilier, avec un peu de salive et le coin de ta manche. Sous la crasse, l'or monte, rose et tendre, celui du vermeil ancien.",
      "Le pied est gravé d'une couronne faite de cristaux de sel, et d'une feuille de vigne. Sous le pied, en lettres minuscules : *Combes d'Orle, à la table de la reine, l'an de la Charte.* C'est une coupe de la cour d'Ysaure, faite pour un vin des Combes. Elle a traîné trois siècles dans les cabarets avec les gobelets d'étain.",
      "La veuve est déjà loin, son panier sur la hanche. Tu as payé le prix qu'elle demandait. Tu te demandes un moment si ça suffit.",
    ],
    fx: { gold: -1, item: "iiic_tr_coupe", clock: { tresors: 1 }, flag: "tresor:iiic_coupe", ep: ["perso", 800] },
    choices: [
      { label: "Rattraper la veuve et lui donner cinq ducats de plus", fx: { gold: -5, flag: "iiic:veuve_payee", ep: ["perso", 300], fac: { hautes: 2 } }, back: "IIIC_halle" },
      { back: "IIIC_halle" },
    ] },

  IIIC_faussaire: { act: "III", title: "Le faussaire", place: "orle",
    text: [
      "L'homme au chapeau pointu te regarde, regarde son coussin, te regarde encore. Puis il sourit, d'un sourire de confrère.",
      "« Le verre de Murenne, dit-il à voix basse, souffle vert, bulles fines. La cendre, c'est de la cendre de sarment, celle des Combes, pour l'odeur. Le thé, c'est pour la couleur de la poussière. Et la cire, je la passe à la suie de chandelle. » Il remet sa bouteille droite sur le coussin. « Les gens veulent croire, à une foire. Je leur vends quelque chose à croire. Huit ducats, c'est le prix d'une belle histoire. »",
      "Il te glisse un petit flacon de verre bleu. « Ça, c'est mon encre à vieillir. Pour vos affaires à vous. Et on ne s'est pas vus. »",
    ],
    fx: { item: "iiic_encre", ep: ["perso", 500] },
    choices: [{ back: "IIIC_halle" }] },

  IIIC_foire_concours: { act: "III", title: "Le concours du Taste-vin", place: "orle", takes: "noon",
    text: [
      "À midi, sur une estrade de planches, douze gobelets alignés, douze vins des Combes, et douze concurrents qui doivent dire, pour chacun, le coteau, l'année, et si le vin a voyagé. Le juge est le curé de Saint-Vincent, un homme au nez violet qui goûte depuis quarante ans et qui n'a jamais été démenti.",
      "Le premier vin sent la pierre chaude. Le deuxième, la violette. Le troisième, le bouchon, et tout le monde rit. Au sixième, tu commences à comprendre comment parlent les vins des Combes : chaque coteau a sa roche, et chaque roche son goût.",
      { with: "salome", text: "Salomé, derrière toi, souffle : « Le neuvième a voyagé en mer. Le sel, sous la langue. Je te le donne pour rien. »" },
      { with: "tibere", text: "Tibère, au premier rang du public, a l'air de connaître intimement au moins sept des douze vins." },
    ],
    choices: [
      { label: "Goûter, et nommer chaque vin", test: { dom: "nature", diff: -10, label: "Le palais des Combes", help: [{ with: "salome", v: 10 }, { with: "tibere", v: 10 }, { if: { has: "metier:parole" }, v: 5 }] },
        win: { fx: { item: "iiic_tastevin", ep: ["perso", 800], flag: "iiic:tastevin" }, to: "IIIC_foire_concours_fin" },
        lose: { fx: { ep: ["perso", 300] }, to: "IIIC_foire_concours_fin" } },
      { label: "Renoncer avant le premier gobelet", back: "IIIC_halle" },
    ] },

  IIIC_foire_concours_fin: { act: "III", title: "Le verdict", place: "orle",
    text: [
      { outcome: "win", text: "Le curé de Saint-Vincent te tend le Taste-vin d'argent, une petite coupe plate à ombilic, sur une chaîne. « Le neuvième, dit-il, {{oreille#iiic_cure_concours|personne ne l'avait trouvé depuis douze ans|c'est celui de la Recette, saisi chez les Roustan, et je l'ai mis là pour voir si quelqu'un aurait le courage de le nommer}}. Ce vin a descendu l'Orle et la mer jusqu'à Port-Vasier, et il est remonté. On le fait voyager pour l'arrondir. » Il te serre la main. Sous la halle, on t'applaudit. Un vigneron t'offre un pichet. Un autre, une fille à marier, ce que tu déclines poliment." },
      { outcome: "lose", text: "Tu confonds l'Aiguier et les Pierrefeu, tu nommes une année de gel, et au neuvième vin tu cherches une réponse dans le fond du gobelet. Le prix va à une vieille femme sans dents qui a tout trouvé en souriant. Elle te tape sur l'épaule en descendant. « Il faut être né ici, dit-elle. Ou boire longtemps. »" },
      "Au pied de l'estrade, maître Haquin, le marchand d'Aveline, applaudit sans conviction. Tu le vois noter quelque chose dans un carnet de cuir. Ce n'est pas le nom du gagnant.",
    ],
    choices: [{ back: "IIIC_halle" }] },
});

// ==================================================================== the wine buyer who buys nothing (quest IIIC_capitaine)
Object.assign(P, {
  IIIC_haquin: { act: "III", title: "Maître Haquin", place: "orle",
    fx: { meet: "iiic_haquin" },
    text: [
      "Maître Haquin te fait signe de t'asseoir avant que tu aies demandé, avec la courtoisie d'un homme habitué à ce qu'on lui obéisse. De près, il a le teint d'un cavalier, la nuque raide, et une cicatrice blanche qui lui coupe le sourcil gauche. Ses mains sont celles d'un homme qui tient des rênes, et ses ongles sont propres.",
      "« Je suis venu acheter du vin pour la table de messeigneurs d'Aveline, dit-il. {{oreille#iiic_haquin_vin|Les Combes ont le meilleur vin du delta, tout le monde le sait|Les Combes ont deux ponts qui portent un trébuchet sur ses roues et un gué qui ne gèle pas, et presque personne ne le sait}}. » Il remplit ton gobelet. « Vous n'êtes pas d'ici. Vous venez de la ville ? Comment va Salvèze ? On dit qu'elle a faim. »",
      "Il t'écoute répondre en hochant la tête, très attentif, avec une sorte de sympathie. « Aveline et Salvèze sont de vieilles amies, dit-il. {{oreille#iiic_haquin_amies|Les vieilles amies finissent toujours par s'entendre|Dans quarante jours, il n'y aura plus d'amies, il y aura une ville et son seigneur}}. »",
      { if: { has: "iiic:etui" }, text: "Il te demande, comme on parle de la pluie, par quel bateau tu es monté{e}. Tu le lui dis. Il sourit. « *La Patience*. J'attends six barriques par elle. Le patron les décharge ce soir. » Il te regarde boire. Il ne regarde rien d'autre." },
      { with: "tibere", text: "Tibère, au comptoir, a vu la nuque raide et les mains propres. Il te fait, du bout des doigts sur sa masse, le vieux signe du Guet : *soldat*." },
    ],
    choices: [
      { label: "Le suivre quand il quittera l'auberge, à la nuit", to: "IIIC_haquin_suivre" },
      { label: "Fouiller sa chambre pendant qu'il est à la foire", hide: { seen: "IIIC_haquin_chambre" }, to: "IIIC_haquin_chambre" },
      { label: "« Quarante jours, maître Haquin ? Pour quoi faire ? »", hide: { not: { voile: "iiic_haquin_amies" } }, to: "IIIC_haquin_face" },
      { label: "« Vous avez mesuré deux fois le pont de Pont-Ravel, maître Haquin. Les haleurs s'en souviennent. »", hide: { not: { has: "iiic:cartographes" } }, fx: { ep: ["perso", 400] }, to: "IIIC_haquin_face" },
      { label: "Prendre congé poliment", back: "IIIC_pressoir_salle" },
    ] },

  IIIC_haquin_chambre: { act: "III", title: "La chambre de maître Haquin", place: "orle",
    text: [
      "La chambre de maître Haquin est la plus belle du Pressoir, celle qui a une cheminée. Tout y est rangé comme dans une tente : les bottes alignées, le manteau plié carré, une selle de cavalier posée sur un tréteau, ce qui n'est pas l'usage d'un marchand. La porte ferme d'une serrure de l'auberge, simple. Le coffre de voyage ferme d'une autre, bien meilleure.",
      { with: "lison", text: "Lison fait le guet dans l'escalier, assise sur une marche, à se curer les ongles avec son couteau. Personne ne monte quand Lison se cure les ongles dans un escalier." },
    ],
    choices: [
      { label: "Crocheter le coffre", test: { dom: "discretion", diff: -10, label: "Une serrure d'Aveline", help: [{ if: { item: "crochets" }, v: 15 }, { with: "lison", v: 10 }, { if: { has: "passe:voleur" }, v: 10 }] },
        win: { fx: { ep: ["perso", 600] }, to: "IIIC_haquin_coffre" },
        lose: { fx: { flag: "iiic:haquin_alerte" }, to: "IIIC_haquin_surpris" } },
      { label: "Demander à Honorine la clé de l'auberge, qui ouvre tout", test: { dom: "social", diff: -10, label: "Convaincre l'aubergiste", help: [{ if: { has: "mandat" }, v: 10 }, { with: "tibere", v: 10 }] },
        win: { fx: { ep: ["perso", 600] }, to: "IIIC_haquin_coffre" },
        lose: { fx: { note: "Honorine te regarde sans un mot et retourne à ses pichets. Tu ressors de la chambre les mains vides." }, back: "IIIC_pressoir" } },
      { label: "Laisser le coffre et redescendre", back: "IIIC_pressoir" },
    ] },

  IIIC_haquin_coffre: { act: "III", title: "Le coffre de voyage", place: "orle",
    text: [
      "Dans le coffre, sous des chemises, une bourse de cuir, un carnet, et une liasse de lettres serrées d'un ruban bleu.",
      "La bourse est pleine de ducats de Salvèze, des pièces {{pie#iiic_ducats|ordinaires, usées comme toutes les pièces du delta|neuves, sans une rayure, de la frappe de ce mois-ci à la Monnaie de Salvèze, encore grasses du sac où on les a comptées}}. Maître Haquin paie son vin et ses espions avec l'argent de la ville qu'il espionne.",
      "Le carnet est rempli de croquis : des ponts, avec des cotes ; un gué, avec la hauteur de l'eau ; la route du Mont, avec ses lacets comptés. Les lettres sont en langue d'Aveline, d'une écriture de secrétaire. La plus récente dit, dans la langue de la ville cette fois : *{{loupe#iiic_lettre_duc|Le duc compte sur votre zèle. Achetez les vins que vous jugerez bons, et rentrez avant les chaleurs|Le duc compte sur votre zèle. Notre ami de Salvèze tiendra sa parole si nous tenons la nôtre : la charge de gouverneur, et l'oubli de ses dettes. Ne lui écrivez jamais directement}}.*",
      "Tu remets tout en place. Le ruban bleu, le nœud, les chemises. Un chercheur de choses perdues sait aussi ne rien laisser derrière lui.",
    ],
    fx: { flag: "iiic:haquin_coffre" },
    choices: [{ back: "IIIC_pressoir" }] },

  IIIC_haquin_surpris: { act: "III", title: "Le pas dans l'escalier", place: "orle",
    text: [
      "Le crochet glisse, grince, et se casse net dans la serrure. Au même moment, un pas dans l'escalier, régulier, un pas de botte. Tu as le temps de te redresser. Tu n'as pas le temps de sortir.",
      "Maître Haquin ouvre la porte, te regarde, regarde le coffre, le bout de fer cassé dans la serrure. Il referme la porte derrière lui, doucement, et s'y adosse. Il ne crie pas. Il ne tire pas l'épée. Il sourit, comme un joueur qui voit enfin la carte de l'autre.",
      "« Bien, dit-il. Alors parlons. »",
    ],
    choices: [{ label: "Parler, puisqu'il le propose", to: "IIIC_haquin_face" }] },

  IIIC_haquin_suivre: { act: "III", title: "Dans les pas de maître Haquin", place: "orle", takes: "evening",
    text: [
      "À la tombée du jour, maître Haquin sort du Pressoir, son manteau gris sur les épaules, et descend vers le quai. Deux valets le suivent, deux grands gaillards silencieux qui marchent au pas, ce que les valets ne font jamais.",
      "Au quai, Gilduin lui fait rouler ses six barriques sur une planche jusqu'à une charrette. Haquin les compte, frappe la sixième du plat de la main, et l'écoute.",
      { if: { has: "iiic:etui" }, text: "Il l'écoute longtemps. Puis il dévisse le fond, lentement, devant Gilduin, et regarde dedans. La paille est là, mouillée, vide. Il revisse le fond. Il ne dit rien. Il tend à Gilduin une pièce de plus, la pose dans sa main, et lui referme les doigts dessus avec une douceur terrible. Gilduin est devenu gris.", else: "Il l'écoute, sourit, et fait monter la sixième barrique à côté de lui sur le siège, comme une personne." },
      { if: { has: "iiic:etui_vu" }, text: "Il dévisse le fond, glisse la main dans la paille mouillée et en retire l'étui de cuir. Il fait sauter le bouchon de cire, compte les trois feuillets du bout du doigt, et range l'étui sous son manteau." },
      "Puis la charrette part, non pas vers l'auberge, mais vers les coteaux, par le chemin des Ânes, vers la vieille carrière de la Reine et le bois de la Gâche.",
    ],
    choices: [
      { label: "Suivre la charrette à travers les vignes, sans lumière", test: { dom: "discretion", diff: -10, label: "Suivre un cavalier qui se retourne", help: [{ with: "lison", v: 15 }, { if: { has: "iiic:chemin_gache" }, v: 15 }, { if: { has: "iiic:haquin_coffre" }, v: 10 }] },
        win: { fx: { ep: ["perso", 700] }, to: "IIIC_haquin_gache" },
        lose: { fx: { flag: "iiic:haquin_alerte" }, to: "IIIC_haquin_face" } },
      { label: "Rester au quai, auprès de Gilduin", to: "IIIC_quai" },
    ] },

  IIIC_haquin_gache: { act: "III", title: "Le frêne fendu", place: "orle", takes: "night",
    text: [
      "Au-dessus de la carrière, dans le bois de la Gâche, il y a un frêne fendu par la foudre. La charrette s'arrête là. Haquin descend, allume une lanterne et attend. Tu te couches dans les feuilles mortes, à vingt pas, le menton sur une racine.",
      "Ils arrivent sans bruit : six hommes maigres, en manteaux de laine sale, et devant eux un grand rouquin à la barbe taillée court, qui porte encore, cousue à l'épaule, une aigle d'Aveline à moitié arrachée. Il s'arrête à trois pas de Haquin et ne salue pas.",
      "« Reinold, dit Haquin. Le duc pardonne. Il pardonne tout, et il paie double, à qui guidera ses colonnes par les Combes. Vous connaissez les gués. Vous connaissez les ponts. » Le rouquin : « Le duc pend les déserteurs. » Haquin : « Le duc {{oreille#iiic_haquin_pardon|tient toujours sa parole envers ceux qui le servent|pendra les guides après la ville prise, comme les autres, et je le sais, et je le dis quand même}}. »",
      "« Et quand ? dit Reinold. » Haquin regarde la lune, entre les branches. « {{oreille#iiic_haquin_date|Quand le duc le dira, pas avant|La nuit de la Grande Basse, quand toute la ville aura les yeux sur la mer et qu'une porte s'ouvrira du dedans}}. »",
      "Reinold crache entre ses pieds. « On réfléchira. » Il prend une bourse que Haquin lui tend, la soupèse, la garde. Les six hommes disparaissent dans les arbres. Haquin remonte sur la charrette et repart vers le bourg en sifflant un air de cavalerie.",
    ],
    fx: { flag: "iiic:haquin_reinold", questSeen: "IIIC_deserteurs" },
    choices: [
      { label: "Barrer le chemin à la charrette, au tournant de la carrière", to: "IIIC_haquin_face" },
      { label: "Suivre les déserteurs dans le bois", to: "IIIC_camp_approche" },
      { label: "Redescendre au bourg par les vignes", back: "III_hub" },
    ] },

  IIIC_haquin_face: { act: "III", title: "Le capitaine", place: "orle",
    text: [
      "Maître Haquin a cessé de jouer le marchand. Cela se voit à ses épaules, d'abord, qui s'écartent ; puis à sa main, qui trouve la garde de l'épée sous le manteau sans qu'il la cherche. Ses deux valets se placent de part et d'autre, comme à la parade.",
      "« Wendel Haquin, dit-il, capitaine aux chevau-légers de monseigneur le duc d'Aveline. En reconnaissance, comme on dit, dans un pays qui sera bientôt le nôtre. Vous m'avez percé. Je vous en félicite. » Il incline la tête. « Et maintenant ? Vous êtes recherché{e} par la République. Moi aussi, si l'on savait. Nous sommes deux fugitifs dans une auberge. »",
      "« Salvèze {{oreille#iiic_haquin_complice|ne se défendra pas longtemps, elle a faim et elle a peur|ouvrira elle-même sa porte : l'homme qui nous l'ouvre siège plus haut que tous ceux qui la défendent, et il signe à l'encre rouge}}, dit-il. Je vous dis cela parce que vous ne pouvez rien en faire. Qui vous croirait ? Vous avez votre portrait sur tous les piliers. »",
      { if: { has: "iiic:etui" }, text: "Il regarde ta ceinture, ton sac. « Et vous avez quelque chose à moi, je crois. Un étui de cuir. Je vous l'échange contre votre vie, ou contre la mienne. J'ai le choix des mots, aujourd'hui. »" },
      { if: { has: "iiic:controle=combat" }, text: "« On m'a raconté le pont de Pont-Ravel, ajoute-t-il. Vous frappez la République en face. Vous seriez bien reçu{e} à Aveline. »" },
      { if: { has: "iiic:haquin_alerte" }, text: "« Mes valets vous suivent depuis le Pressoir, ajoute-t-il. Vous marchez comme quelqu'un qui a peur d'être vu. Dans une auberge, cela se remarque. »" },
      { if: { has: "iiic:eclaireurs_battus" }, text: "« Deux de mes cavaliers sont rentrés du gué à pied, dit-il encore, sans leur planchette. On m'a décrit la personne qui les a battus. » Il te regarde des bottes au col. « La description était bonne. »" },
    ],
    choices: [
      { label: "Le désarmer et le livrer à la garnison d'Orle", fight: { title: "Le capitaine d'Aveline", enemies: [{ id: "iiic_haquin", n: 1 }, { id: "soldat_aveline", n: 2 }],
        win: { fx: { flag: "iiic:capitaine=pris", ep: ["seance", 2000] }, to: "IIIC_haquin_pris" },
        lose: { fx: { flag: "iiic:capitaine=libre", pv: -4 }, to: "IIIC_haquin_fui" },
        flee: { label: "Rompre et s'enfuir par les vignes", dom: "discretion", diff: -10, to: "IIIC_haquin_fui" } } },
      { label: "Lui rendre son étui, contre la vérité dite en clair", hide: { not: { item: "iiic_etui" } }, fx: { drop: "iiic_etui", flag: "iiic:capitaine=marche", devoile: "iiic_haquin_date", ep: ["seance", 1500] }, to: "IIIC_haquin_marche" },
      { label: "« La Grande Basse. Une porte ouverte du dedans. Je l'ai entendu, capitaine. »", hide: { not: { voile: "iiic_haquin_date" } }, fx: { ep: ["seance", 1200] }, to: "IIIC_haquin_entendu" },
      { label: "Le laisser partir, et lui porter un message pour son duc", fx: { flag: "iiic:capitaine=libre", item: "iiic_sauf_conduit", ep: ["seance", 1000] }, to: "IIIC_haquin_libre" },
    ] },

  IIIC_haquin_entendu: { act: "III", title: "Ce qu'on a entendu", place: "orle",
    text: [
      "Wendel Haquin ne bouge plus. Pendant un long moment, tu n'entends plus que ta respiration et la sienne. Puis il rit, tout bas, sans joie.",
      "« Les Taiseurs, dit-il. On m'avait prévenu. On m'avait dit, à la cour : dans le delta, il y a des gens qui entendent ce qu'on ne dit pas. J'ai cru à une fable de nourrice. » Il desserre la main de la garde. « Que voulez-vous ? De l'or ? Je n'en ai pas assez pour acheter quelqu'un qui entend ça. »",
      "Il réfléchit. « Je vais vous dire une chose, gratuitement, parce que vous la saurez de toute façon. L'homme de Salvèze ne nous ouvre pas la porte pour de l'or. Il l'ouvre pour rester ce qu'il est quand la ville ne sera plus ce qu'elle est. Ce sont les pires. On ne peut pas les racheter : ils se sont déjà vendus à eux-mêmes. »",
    ],
    fx: { flag: "iiic:invasion" },
    choices: [
      { label: "Le livrer à la garnison", fight: { title: "Le capitaine d'Aveline", enemies: [{ id: "iiic_haquin", n: 1 }, { id: "soldat_aveline", n: 2 }],
        win: { fx: { flag: "iiic:capitaine=pris", ep: ["seance", 2000] }, to: "IIIC_haquin_pris" },
        lose: { fx: { flag: "iiic:capitaine=libre", pv: -4 }, to: "IIIC_haquin_fui" } } },
      { label: "Le laisser repartir vers Aveline, sans rien lui promettre", fx: { flag: "iiic:capitaine=libre", ep: ["seance", 1000] }, to: "IIIC_haquin_libre" },
    ] },

  IIIC_haquin_marche: { act: "III", title: "Le marché", place: "orle",
    text: [
      "Wendel Haquin prend l'étui, en fait sauter le bouchon de cire, compte les trois feuillets, et le referme. Il a l'air d'un homme qui retrouve un objet de famille.",
      "« Un marché est un marché, dit-il. La nuit de la Grande Basse. Ce jour-là, toute la ville sera sur les quais à regarder la mer se retirer, comme chaque année, et une porte de Salvèze s'ouvrira de l'intérieur. Nous serons sous les murs. Voilà la vérité, en clair, comme vous l'avez voulue. Elle ne vous servira à rien. »",
      { if: { has: "iiic:etui_copie" }, text: "Il ne sait pas que tu as une copie de ses plans dans ton sac. Tu ne le lui dis pas. Il remet l'étui sous son manteau avec un soin d'amoureux." },
      "Il s'incline. « Nous nous reverrons sous les murs. Je vous souhaite d'être du bon côté, ce jour-là. Il n'y en aura qu'un. »",
    ],
    fx: { flag: "iiic:invasion" },
    choices: [{ label: "Le regarder partir", to: "IIIC_haquin_fin" }] },

  IIIC_haquin_libre: { act: "III", title: "Le message", place: "orle",
    text: [
      "Wendel Haquin rengaine à moitié, puis tout à fait. « Un message, dit-il. Pour le duc. » Il a l'air curieux, presque amusé.",
      "Tu le lui donnes. Tu ne sais pas encore si c'est une menace ou une promesse ; lui non plus. Il le répète deux fois, pour s'en souvenir mot pour mot, comme un bon messager.",
      "Il tire de sa ceinture un petit carré de parchemin scellé de cire bleue, l'aigle d'Aveline à deux têtes. « Un sauf-conduit, dit-il. Si un jour vous tombez sur nos avant-postes, montrez-le. Il vaut une nuit de vie. Davantage, si l'officier sait lire. » Il remonte à cheval à la sortie du bourg, au petit jour, et prend la route de la crête sans se retourner.",
    ],
    choices: [{ label: "Le regarder partir", to: "IIIC_haquin_fin" }] },

  IIIC_haquin_fui: { act: "III", title: "Le cavalier parti", place: "orle",
    text: [
      { outcome: "lose", text: "Tu te réveilles dans les vignes, la tête dans un cep, du sang plein la bouche. Le capitaine t'a épargné{e}, ou ne t'a pas jugé{e} digne d'être achevé{e}. Il y a des marques de sabots dans la terre, qui partent vers la crête." },
      { outcome: "flee", text: "Tu cours à travers les vignes, les échalas te fouettent les jambes, et derrière toi personne ne te poursuit. Quand tu te retournes, tu vois trois cavaliers sur la crête, contre le ciel, qui partent au trot vers le nord." },
      "Wendel Haquin est reparti vers Aveline avec ce qu'il était venu chercher, ou presque. Le lendemain, Honorine Fabrègue trouve sa chambre vide, la note payée en ducats neufs, et un pourboire royal.",
    ],
    choices: [{ label: "Redescendre vers le bourg", to: "IIIC_haquin_fin" }] },

  IIIC_haquin_pris: { act: "III", title: "Le capitaine aux fers", place: "orle",
    text: [
      "Wendel Haquin est à genoux dans la poussière, l'épée à trois pas de lui, un de ses valets assommé, l'autre en fuite à travers les vignes. Il te regarde avec une colère froide, et du respect.",
      "La garnison d'Orle, ce sont six soldats de la République, sans solde, logés au-dessus de la Recette. Quand tu leur amènes un capitaine d'Aveline ligoté, leur caporal ne sait pas s'il doit t'arrêter, toi qui es sur l'avis, ou te remercier. Il fait les deux à moitié : il prend le prisonnier et oublie ton nom.",
      { if: { has: "iiic:controle=combat" }, text: "Un des soldats a le bras en écharpe. Il vient de Pont-Ravel. Il te reconnaît, ouvre la bouche, la referme, et regarde le capitaine ligoté. Il ne dit rien." },
      "« On l'envoie à Salvèze, dit le caporal. Au Conseil. Ils sauront quoi en faire. » Haquin rit dans ses cordes. « Oh oui, dit-il. Ils sauront. »",
    ],
    choices: [{ label: "Laisser le capitaine à la garnison", to: "IIIC_haquin_fin" }] },

  IIIC_haquin_fin: { act: "III", title: "La route du nord", place: "orle",
    text: [
      "Le soir, sur la place d'Orle-le-Bourg, on parle du marchand d'Aveline qui n'achetait rien. Les uns disent qu'il était espion. Les autres, qu'il était fou. Honorine Fabrègue dit qu'il payait bien, et que c'est tout ce qu'elle demande à un homme.",
      { if: { has: "iiic:capitaine=pris" }, text: "Trois jours plus tard, une barque du Conseil vient chercher le prisonnier. Elle repart vers Salvèze. On ne saura jamais, au bourg, ce qu'il est devenu." },
      { with: "gildas", text: "Frère Gildas regarde la route du nord, longtemps. « Les guerres commencent toujours par des gens polis », dit-il." },
      { with: "salome", text: "Salomé : « Une porte ouverte du dedans. Ça, c'est un travail de banquier. » Elle ne dit pas lequel." },
    ],
    fx: { quest: "IIIC_capitaine", ep: ["seance", 1500] },
    choices: [{ back: "III_hub" }] },
});

// ==================================================================== the quay, the church
Object.assign(P, {
  IIIC_quai: { act: "III", title: "Le quai d'Orle", place: "orle", backName: "le quai d'Orle",
    text: [
      { first: true, text: "Le quai d'Orle est fait de grands blocs de la carrière, usés en cuvette par trois siècles de tonneaux roulés. Des gabares y chargent du vin et de la pierre ; des enfants y pêchent le goujon avec des fils et des épingles. Les vieux blocs du quai {{echo#iiic_quai_echo|résonnent sous les tonneaux qu'on roule, d'un son creux|rendent des voix de compagnons qui chargent une barge, il y a trois siècles : « Doucement, celle-là. Elle va à Sorne, sous le trône. Si elle casse, c'est ta tête »}}. *La Patience* est amarrée au bout, son sel à moitié déchargé." },
      { again: true, text: "Le quai, ses tonneaux, ses enfants pêcheurs. *La Patience* au bout, si Gilduin n'est pas reparti." },
      "Gilduin Teyssier compte ses sacs, une racine de réglisse au coin de la bouche. Il lève la tête en te voyant.",
      { if: { has: "iiic:controle=toinot" }, text: "« Toinot m'a écrit, dit-il. Trois lignes, de sa main. Il dit qu'il n'a pas eu d'ennuis. Il dit qu'il a eu sa solde, pour une fois. » Il se mouche. « Il dit aussi que vous avez le visage de l'avis. Il dit que c'est un bon visage. »" },
      { if: { has: "iiic:controle=pris" }, text: "« Ravier est monté hier, en barque, dit-il plus bas. Il cherche qui a ouvert son cadenas. Il a écrit dans son rapport que le prisonnier s'était noyé en fuyant. Ça lui coûte moins cher qu'une enquête. »" },
      { if: { all: [{ has: "iiic:etui" }, { seen: "IIIC_haquin_suivre" }] }, text: "« Il est venu, dit-il à voix basse. L'homme d'Aveline. Il a ouvert la sixième et il a vu qu'elle était vide. Il m'a donné une pièce de plus. » Il la sort, la regarde : un ducat neuf, brillant. « Je n'ai jamais eu aussi peur d'un pourboire. »" },
      { if: { has: "iiic:deserteurs=partis" }, text: "« Vos amis de la Gâche sont descendus sur ma gabare, la nuit, comme convenu, dit-il. Treize, avec leur rouquin. Ils ont payé en argent d'Aveline. Ils ont chanté tout le long, des chansons de chez eux, à pleurer. Je les ai laissés au Bec. »" },
    ],
    choices: [
      { label: "Demander à Gilduin ce qu'il sait du bois de la Gâche", hide: { seen: "IIIC_quai_gache" }, to: "IIIC_quai_gache" },
      { back: "III_hub" },
    ] },

  IIIC_quai_gache: { act: "III", title: "Ce que sait un patron de gabare", place: "orle",
    text: [
      "Gilduin mâche sa réglisse longtemps avant de répondre. « Les déserteurs ? Ils sont descendus des cols en novembre. Vingt, au début. Il en reste quatorze ou quinze, les autres sont morts de froid ou repartis. Ils voulaient passer en aval, vers la mer, vers les ports où personne ne demande d'où l'on vient. Mais les ponts sont gardés. Ils sont coincés dans la Gâche comme des rats dans un tonneau. »",
      "« Ils m'ont demandé, en décembre, de les descendre. Dix ducats par tête. Je n'ai pas osé. Les soldats fouillent tout. » Il crache. « {{oreille#iiic_prosper_deserteurs|Ce sont des brigands, après tout|Leur rouquin m'a donné de quoi soigner ma femme, cet hiver, quand la Recette avait tout pris, et je ne l'ai dit à personne}}. »",
    ],
    choices: [
      { label: "« Et si tu les descendais quand même, cette fois ? »", hide: { not: { voile: "iiic_prosper_deserteurs" } }, fx: { flag: "iiic:prosper_passage", ep: ["perso", 500] }, back: "IIIC_quai" },
      { back: "IIIC_quai" },
    ] },

  IIIC_chapelle: { act: "III", title: "L'église Saint-Vincent", place: "orle", backName: "l'église Saint-Vincent",
    text: [
      { first: true, text: "L'église Saint-Vincent est bâtie de la même pierre blonde que tout le bourg, mais plus ancienne, plus fine, taillée par des mains qui savaient. Les piliers de la nef sont ronds, sans un joint visible. Au-dessus de l'autel, un vitrail montre saint Vincent tenant une grappe et une serpe, et derrière lui, très petite, une femme couronnée qui porte un doigt à ses lèvres." },
      { again: true, text: "Saint-Vincent, la nef fraîche, les piliers sans joints, le vitrail de la grappe et de la femme au doigt sur les lèvres." },
      "La nef {{echo#iiic_eglise_echo|sent la cire froide et la pierre, et rien ne bouge sous les voûtes|rend une voix d'homme, grave, d'il y a trois siècles, qui dit très bas : « Le dernier bloc restera dans la carrière. Qu'il garde ce qu'on lui confie, et que le compagnon qui le fendra soit un honnête homme »}}.",
      "Le curé, le nez violet du Taste-vin, balaie la sacristie. « Le receveur est un homme de loi, dit-il quand on lui parle des saisies. {{oreille#iiic_cure|Je ne me mêle pas des affaires de la Recette|Je signe ses procès-verbaux de saisie comme témoin, et il me laisse une barrique par mois à la cure}}. » Il balaie plus fort.",
      { with: "gildas", text: "Frère Gildas s'est arrêté devant le vitrail, sous la petite femme couronnée. Il ne prie pas. Il regarde le doigt sur les lèvres. Puis il fait, très vite, de la main droite, un signe que tu ne connais pas, et il sort." },
    ],
    choices: [
      { label: "Laisser une pièce dans le tronc des pauvres", fx: { gold: -1, ep: ["perso", 100] }, back: "III_hub" },
      { back: "III_hub" },
    ] },
});

// ==================================================================== the seized vineyard (quest IIIC_vigne)
Object.assign(P, {
  IIIC_vignes: { act: "III", title: "Le coteau de l'Aiguier", place: "orle", backName: "le coteau de l'Aiguier",
    text: [
      { first: true, text: "Le coteau de l'Aiguier monte en terrasses au-dessus du bourg, chaque terrasse tenue par un muret de pierre sèche haut comme un homme. Les ceps sont vieux, tordus, noirs, taillés court. Sur la troisième terrasse, une femme taille, seule, une serpette à la main, un fagot de sarments sur le dos. Au bout de la rangée, un piquet porte une feuille clouée, frappée du sceau de la République." },
      { again: true, text: "L'Aiguier, ses murets, ses ceps noirs." },
      { again: true, after: "tresor:iiic_pichet", text: "Esclarmonde lève sa serpette pour te saluer. Dans le mur de sa cave, derrière la pierre qui bouge, elle range maintenant ses graines de fèves." },
      "Esclarmonde Roustan a cinquante ans, des mains plus dures que les ceps et une voix de crécelle. « La vigne est saisie, dit-elle sans s'arrêter de tailler. Je la taille quand même. Si je la laisse, elle donnera du bois mort à la Saint-Georges, et ils la vendront trois liards à leur acheteur de la Banque. Si je la taille, ils la vendront plus cher. Alors je la taille. {{oreille#iiic_esclarmonde|Ma grand-mère l'a plantée, voilà tout|Ma grand-mère y a enterré quelque chose, sous la terrasse du haut, et je ne veux pas qu'un acheteur de la Banque le trouve en défonçant}}. »",
      "La feuille du piquet dit : *Saisie au profit de la République, pour défaut de paiement des tailles de trois années, la somme de {{loupe#iiic_saisie|quarante-huit ducats, au rôle de la Recette d'Orle|quarante-huit ducats, sur un rôle gratté : sous l'encre, on lit vingt-quatre}}. Vente aux enchères à la Saint-Georges. Le receveur, Ortolan.*",
      { with: "lison", text: "Lison s'est appuyée au muret et regarde Esclarmonde tailler, avec un respect qu'elle ne montre à personne d'autre. « Chez nous, dit-elle, on dirait d'elle qu'elle a le geste. »" },
    ],
    fx: { meet: "iiic_esclarmonde", questSeen: "IIIC_vigne" },
    choices: [
      { label: "Lui montrer le chiffre gratté sous l'encre de la saisie", hide: { not: { voile: "iiic_saisie" } }, fx: { flag: "iiic:saisie_grattee", ep: ["perso", 500] }, to: "IIIC_vignes_esclarmonde" },
      { label: "« Combien vous faut-il, pour garder la vigne ? »", to: "IIIC_vignes_esclarmonde" },
      { label: "Laisser Esclarmonde à sa taille", back: "III_hub" },
    ] },

  IIIC_vignes_esclarmonde: { act: "III", title: "Esclarmonde", place: "orle",
    text: [
      { after: "iiic:saisie_grattee", text: "Esclarmonde regarde la feuille longtemps. Elle ne sait pas bien lire ; elle sait compter. « Vingt-quatre, dit-elle. Vingt-quatre, je les avais presque. Je les avais à six ducats près. » Elle plante sa serpette dans le piquet, au milieu du sceau de la République. « Le gros porc. »" },
      { before: "iiic:saisie_grattee", text: "Esclarmonde s'arrête de tailler. « Quarante-huit ducats, dit-elle. Je n'en ai pas dix. Personne aux Combes n'en a quarante-huit, cette année, sauf le receveur et le curé. » Elle se remet au travail. « Et le marchand d'Aveline, peut-être. Mais lui, il n'achète rien. »" },
      { after: "iiic:vigne_rate", text: "« On t'a entendu{e}, cette nuit, à la Recette, dit-elle sans lever les yeux. Tout le bourg t'a entendu{e}. Ortolan a fait doubler sa garde, et il dort avec la clé du tiroir sous son oreiller. »" },
      "Elle parle de sa vigne comme d'une personne. Elle dit que l'Aiguier donne un vin noir et dur qui s'ouvre au bout de dix ans, et que personne n'attend plus dix ans. Elle dit que sa grand-mère trouvait dans les terrasses des choses de la reine, des tessons, des pièces, une fois une cuillère d'argent. « La reine avait des vignes ici, dit-elle. Tout le monde l'a oublié, sauf la terre. »",
      "Elle te montre la Recette, en contrebas, aux volets peints. « Ortolan fait ses saisies le jeudi. Il garde ses registres dans le bureau du fond, et la clé à sa ceinture. Il dort au-dessus. Je dis ça. Je taille. »",
    ],
    choices: [
      { label: "Aller voir le receveur à la Recette des tailles", to: "IIIC_recette" },
      { label: "Lui donner vingt-quatre ducats, la somme vraie, pour qu'elle paie elle-même", hide: { not: { has: "iiic:saisie_grattee" } }, fx: { gold: -24, flag: "iiic:vigne=payee", ep: ["seance", 1500], fac: { hautes: 3 } }, to: "IIIC_vigne_fin" },
      { label: "Lui donner quarante-huit ducats, la somme de la saisie", hide: { has: "iiic:saisie_grattee" }, fx: { gold: -48, flag: "iiic:vigne=payee", ep: ["seance", 1200] }, to: "IIIC_vigne_fin" },
      { label: "Lui dire que tu ne peux rien pour elle", fx: { flag: "iiic:vigne=perdue" }, to: "IIIC_vigne_fin" },
    ] },

  IIIC_recette: { act: "III", title: "La Recette des tailles", place: "orle", backName: "la Recette des tailles",
    text: [
      { first: true, text: "La Recette des tailles d'Orle est une belle maison de pierre aux volets peints aux couleurs de Salvèze, avec un perron de quatre marches, un garde endormi sur une chaise, et un bureau qui donne sur la place par une fenêtre grillée. Dedans, une odeur de cire à cacheter, d'encre et de vin." },
      { again: true, text: "La Recette, son perron, son garde, ses volets aux couleurs de Salvèze." },
      "Le receveur Ortolan est un homme gras, rose, aux yeux très petits et très mobiles, en robe noire de magistrat trop étroite aux épaules. Il compte des liards dans une sébile, d'un doigt, sans regarder. Sur le bureau, un grand registre relié de rouge, ouvert. Le tiroir du bureau est fermé à clé.",
      "« La République a besoin d'argent, dit-il avant qu'on lui ait rien demandé. Je ne fais que mon devoir. {{oreille#iiic_ortolan|J'applique les rôles tels qu'ils viennent de Salvèze|Je double les rôles qui viennent de Salvèze, et Salvèze n'en sait rien, et la Banque m'a promis l'Aiguier à moitié prix quand je le mettrai aux enchères}}. »",
      { after: "mandat", text: "Il te regarde, plisse les yeux. Il a vu l'avis, comme tout le monde. Il ne l'a pas encore relié à ton visage. Cela peut venir à chaque instant." },
      { again: true, after: "iiic:ortolan_alerte", text: "Le garde du perron ne dort plus. Il se tient debout, la pique à la main, et une chaîne neuve ferme le tiroir du bureau." },
      { after: "iiic:reconnu", text: "Un des soldats de la route est assis dans l'entrée, sa pique entre les genoux. Il te suit des yeux jusqu'au bureau du receveur." },
      { after: "iiic:commis_ami", text: "Au fond de la pièce, le commis de la route, celui de la mule, recopie un rôle. Il te reconnaît, rougit, et regarde longuement la porte du jardin." },
    ],
    choices: [
      { label: "« Vous tenez deux registres, maître Ortolan. Le rouge et le noir. »", if: { any: [{ has: "iiic:registre_noir" }, { voile: "iiic_ortolan" }, { has: "iiic:saisie_grattee" }] }, why: "Il te faudrait une preuve, ou au moins un nom.", test: { dom: "social", diff: -10, label: "Faire peur à un receveur", help: [{ with: "tibere", v: 15 }, { if: { voile: "iiic_cure" }, v: 15 }, { if: { has: "metier:parole" }, v: 10 }] },
        win: { fx: { flag: "iiic:vigne=sauvee", ep: ["seance", 2000] }, to: "IIIC_recette_peur" },
        lose: { fx: { flag: "iiic:ortolan_alerte" }, to: "IIIC_recette_garde" } },
      { label: "Attendre la nuit, pour le tiroir du bureau", hide: { seen: "IIIC_recette_nuit" }, to: "IIIC_recette_nuit" },
      { label: "Laisse-moi faire", who: "salome", test: { dom: "social", diff: -10, label: "Salomé parle d'argent à un homme d'argent" },
        win: { fx: { flag: "iiic:vigne=sauvee", ep: ["seance", 1800], conf: { salome: 4 } }, to: "IIIC_recette_peur" }, lose: { to: "IIIC_recette_garde" } },
      { label: "Ressortir sans rien dire", back: "III_hub" },
    ] },

  IIIC_recette_nuit: { act: "III", title: "La Recette, la nuit", place: "orle", takes: "night",
    text: [
      "La nuit, la Recette dort. Le garde ronfle sur sa chaise, le chapeau de fer sur le nez. Le receveur dort au-dessus du bureau, on l'entend : il ronfle plus fort que le garde. La fenêtre grillée du bureau donne sur la place. La porte de derrière donne sur un jardin, où un chien est attaché à une niche.",
      { with: "lison", text: "Lison regarde le chien, puis toi. Elle sort de sa poche un morceau d'anguille fumée qu'elle garde pour les grandes occasions. « Il va m'aimer, dit-elle. Tous les chiens m'aiment. C'est les gens qui ont du mal. »" },
    ],
    choices: [
      { label: "Passer par le jardin et forcer la porte de derrière", test: { dom: "discretion", diff: -10, label: "Une porte, un chien, un receveur qui ronfle", help: [{ with: "lison", v: 15 }, { if: { item: "crochets" }, v: 10 }, { if: { has: "passe:voleur" }, v: 10 }, { if: { has: "iiic:commis_ami" }, v: 10 }] },
        win: { fx: { ep: ["perso", 700] }, to: "IIIC_recette_tiroir" },
        lose: { fx: { flag: "iiic:ortolan_alerte" }, to: "IIIC_recette_garde" } },
      { label: "Renoncer pour cette nuit", back: "III_hub" },
    ] },

  IIIC_recette_tiroir: { act: "III", title: "Le registre noir", place: "orle",
    text: [
      "Le tiroir cède à la deuxième pesée, avec un bruit de bois sec qui te paraît énorme. Au-dessus, le ronflement s'arrête, puis reprend.",
      "Dedans, un petit registre relié de noir, gras de doigts. Tu l'ouvres à la lumière de la lune. Chaque page reprend une page du registre rouge, ligne pour ligne, le même nom, la même vigne, mais pas la même somme. Dans le rouge, ce qui part à Salvèze. Dans le noir, ce qu'on a vraiment pris. La différence, colonne de droite, additionnée en bas de chaque page, d'une écriture soigneuse et heureuse. Trois années de tailles. Huit cents ducats.",
      "Sur la dernière page, une ligne plus récente : *{{loupe#iiic_registre_noir|Aiguier, Roustan, vente à la Saint-Georges, acheteur désigné|Aiguier, Roustan, vente à la Saint-Georges : pour M. le commis de la Banque Marrel, à moitié prix, contre l'effacement de ma dette à la Banque}}.*",
    ],
    fx: { item: "iiic_registre_noir", flag: "iiic:registre_vole" },
    choices: [
      { label: "Emporter le registre noir et le montrer au bourg", fx: { flag: "iiic:vigne=sauvee", ep: ["seance", 2000], fac: { conseil: -3, hautes: 5 } }, to: "IIIC_recette_scandale" },
      { label: "Le garder pour toi, et faire savoir à Ortolan que tu l'as", fx: { flag: "iiic:vigne=sauvee", ep: ["seance", 1800] }, to: "IIIC_recette_peur" },
    ] },

  IIIC_recette_peur: { act: "III", title: "Le receveur a peur", place: "orle",
    text: [
      "Maître Ortolan devient de la couleur de son registre rouge, puis de celle de son registre noir. Il regarde la fenêtre, la porte, le garde qui dort, et toi.",
      "« Que voulez-vous ? » Tu le lui dis. Il prend sa plume. Il écrit, sur un papier frappé du sceau de la République, que la saisie de l'Aiguier est levée pour erreur de rôle, que la dame Roustan est quitte de ses tailles pour trois ans, et que le receveur lui doit des excuses, ce qu'il n'écrit pas mais que tu lui fais écrire quand même.",
      { with: "tibere", text: "Tibère, adossé à la porte, regarde le receveur écrire avec un plaisir de vieux sergent. « Une belle main, dit-il. On devrait la faire encadrer. »" },
      "Il signe. Il sable. Il te tend la feuille d'une main qui tremble un peu. « Vous n'êtes pas de la Recette, dit-il. Qui êtes-vous ? » Tu ne réponds pas. Il ne le saura jamais, et c'est ce qui lui fera le plus peur, les nuits suivantes.",
    ],
    choices: [{ label: "Porter la feuille à Esclarmonde, sur son coteau", to: "IIIC_vigne_fin" }] },

  IIIC_recette_scandale: { act: "III", title: "Le registre sur la fontaine", place: "orle",
    text: [
      "Au matin, le registre noir est posé, ouvert, sur la margelle de la fontaine de la place. À neuf heures, trente vignerons se penchent dessus. À dix heures, cent. Ceux qui savent lire lisent à voix haute pour les autres, nom par nom, somme par somme.",
      "À onze heures, la Recette des tailles a ses volets fermés, et son garde a disparu. À midi, on dit que le receveur Ortolan est parti à cheval vers Salvèze, en robe de nuit, par la route du bas. Personne ne l'a retenu. Personne ne l'a poursuivi non plus.",
      "Le curé de Saint-Vincent fait sonner les cloches, sans qu'on sache bien pourquoi. Pour rien, peut-être. Pour faire du bruit.",
    ],
    choices: [{ label: "Monter sur le coteau, voir Esclarmonde", to: "IIIC_vigne_fin" }] },

  IIIC_recette_garde: { act: "III", title: "La garde", place: "orle",
    text: [
      "Le receveur hurle. Le garde se réveille, tombe de sa chaise, se relève, et cherche sa pique. Au-dessus de la Recette, des pas : les six soldats de la garnison descendent l'escalier en chemise.",
      "Tu as le temps de sauter la fenêtre du jardin, ou le perron, et de te fondre dans la place. Derrière toi, Ortolan crie ton signalement. Il ne sait pas ton nom. Il le saura demain, s'il regarde l'avis de près.",
      { after: "mandat", text: "Le lendemain, sur le pilier de la halle, quelqu'un a entouré ton portrait à la craie rouge." },
    ],
    fx: { flag: "iiic:vigne_rate" },
    choices: [
      { label: "Monter voir Esclarmonde sur son coteau", to: "IIIC_vignes_esclarmonde" },
      { label: "Laisser l'affaire de l'Aiguier, pour l'instant", back: "III_hub" },
    ] },

  IIIC_vigne_fin: { act: "III", title: "La vigne de l'Aiguier", place: "orle",
    text: [
      { if: { has: "iiic:vigne=sauvee" }, text: "Esclarmonde Roustan prend la feuille, la regarde, ne la lit pas. Elle arrache l'avis de saisie du piquet, le roule en boule, et le jette dans le feu de sarments où elle brûle son bois de taille. Puis elle te prend la tête à deux mains, comme on prend une cruche, et t'embrasse sur le front." },
      { if: { all: [{ has: "iiic:vigne=payee" }, { not: { has: "iiic:vigne=sauvee" } }] }, text: "Esclarmonde Roustan regarde les ducats dans sa main comme des cailloux tombés du ciel. « Je ne pourrai jamais vous les rendre, dit-elle. » Tu lui dis de les rendre à la vigne. Elle descend à la Recette, paie, et remonte avec un reçu qu'elle cloue sur le piquet, à la place de l'avis." },
      { if: { all: [{ has: "iiic:vigne=perdue" }, { not: { has: "iiic:vigne=sauvee" } }, { not: { has: "iiic:vigne=payee" } }] }, text: "Esclarmonde Roustan hoche la tête sans s'arrêter de tailler. « Je m'en doutais, dit-elle. Je taillerai jusqu'à la Saint-Georges. Après, je taillerai la vigne d'un autre, pour un salaire. C'est le même geste. »" },
      { if: { any: [{ has: "iiic:vigne=sauvee" }, { has: "iiic:vigne=payee" }] }, text: "Elle t'emmène dans sa cave, une voûte basse creusée dans le coteau, et sort d'un trou du mur, derrière une pierre qui bouge, un pichet d'argent terni, au bec en tête de cygne. « Ma grand-mère l'a trouvé dans la terrasse du haut, dit-elle. Le vieux curé disait qu'il était à la reine. Moi, je n'ai pas de table pour ça. Prenez-le, vous qui allez au Mont. »" },
    ],
    fx: { quest: "IIIC_vigne" },
    choices: [
      { label: "Accepter le pichet d'argent", hide: { all: [{ not: { has: "iiic:vigne=sauvee" } }, { not: { has: "iiic:vigne=payee" } }] }, fx: { item: "iiic_tr_pichet", clock: { tresors: 1 }, flag: "tresor:iiic_pichet", ep: ["perso", 600] }, back: "III_hub" },
      { label: "Le lui laisser", hide: { all: [{ not: { has: "iiic:vigne=sauvee" } }, { not: { has: "iiic:vigne=payee" } }] }, fx: { fac: { hautes: 3 }, ep: ["perso", 400] }, back: "III_hub" },
      { label: "Redescendre au bourg", hide: { any: [{ has: "iiic:vigne=sauvee" }, { has: "iiic:vigne=payee" }] }, back: "III_hub" },
    ] },
});

// ==================================================================== the carriers and the queen's quarry (quest IIIC_carriere)
Object.assign(P, {
  IIIC_chantier: { act: "III", title: "Les chantiers des carriers", place: "orle", backName: "les chantiers des carriers",
    text: [
      { first: true, text: "Au bout de la rue, là où le bourg finit et la montagne commence, les chantiers des carriers occupent un grand terre-plein poudreux. Des blocs équarris y attendent sous des bâches, numérotés à la craie. Des tailleurs y travaillent assis à califourchon sur la pierre, à petits coups de ciseau. Tout est blanc : les hommes, les outils, les chiens, le pain qu'ils mangent." },
      { again: true, text: "Les chantiers, la poussière blanche, les petits coups de ciseau." },
      "Au milieu, un homme en pourpoint de drap fin, des gants de chevreau gris aux mains, fait mesurer un bloc par un apprenti et note les chiffres sur une tablette. On le salue à peine. Le commis lève les yeux de sa tablette et vous salue d'un mot : « {{oreille#iiic_commis_salut|Belle pierre, messieurs, belle pierre|Pierre de rebut, que je paierai deux liards et revendrai six}}. » « Le commis de la Banque, dit un tailleur sans lever la tête. La Banque a racheté les concessions de toutes les carrières des Combes l'an passé, à la République, pour les dettes. Maintenant on taille pour la Banque, au prix de la Banque. »",
      "« Toutes, sauf une, dit un autre. La carrière de la Reine. Celle-là, la Banque voudrait bien l'acheter aussi. Mais elle n'est à personne. Ou elle est à nous. Ça dépend qui raconte. »",
      { after: "iiic:carriere=rouverte", text: "Les chantiers résonnent d'un bruit nouveau : des chariots descendent de la carrière de la Reine, chargés de blocs neufs, et les tailleurs les accueillent en chantant. Le commis de la Banque n'est plus là." },
    ],
    fx: { questSeen: "IIIC_carriere" },
    choices: [
      { label: "Parler au vieux carrier assis à l'écart, la main posée à plat sur un bloc", hide: { seen: "IIIC_galmier" }, to: "IIIC_galmier" },
      { label: "Montrer à Anthime la lettre de la reine trouvée dans le bloc", hide: { any: [{ not: { item: "iiic_franchise" } }, { quest: "IIIC_carriere" }] }, to: "IIIC_carriere_fin" },
      { back: "III_hub" },
    ] },

  IIIC_galmier: { act: "III", title: "Anthime", place: "orle",
    fx: { meet: "iiic_galmier" },
    text: [
      "Le vieux carrier est assis sur un bloc, les deux mains posées à plat sur la pierre, les yeux fermés. Il a quatre-vingts ans, des sourcils blancs de poussière et d'âge, et il n'entend presque plus rien. Quand tu lui parles, il ouvre les yeux et te regarde les lèvres.",
      "« La carrière de la Reine, dit-il, d'une voix trop forte. On n'y taille plus depuis trois cents ans. Depuis la reine. On dit que la pierre de Sorne vient de là, toute, et la pierre du Mont aussi. Les compagnons l'ont fermée quand on a pris la reine, et ils ont laissé un bloc debout, au milieu, le dernier, sans le tailler. Personne n'y touche. » Il tapote le bloc sous ses mains. « Moi, je n'entends plus les gens. J'entends la pierre. Celle-là chante, les nuits de gel. Une note, comme une cloche sous l'eau. »",
      "Il baisse la voix, ce qui veut dire qu'il parle comme tout le monde. « La franchise, dit-il, {{oreille#iiic_galmier_franchise|on l'a perdue il y a cent ans, dans un incendie|mon grand-père disait qu'elle est restée dans le dernier bloc, et que le bloc s'ouvre quand on frappe juste, à la troisième marque, et je n'ai jamais osé}}. Sans franchise, la Banque achètera la carrière de la Reine comme le reste, et nos fils tailleront pour elle à deux liards le bloc. »",
      { with: "gildas", text: "Frère Gildas s'est approché. Il pose la main sur le bloc à côté de celle d'Anthime, et les deux vieux restent ainsi un moment, côte à côte, les yeux fermés. « Oui, dit Gildas. On l'entend. » Anthime le regarde, voit la bure, et hoche la tête comme devant un confrère." },
    ],
    choices: [
      { label: "Promettre d'aller voir le dernier bloc", fx: { ep: ["perso", 400] }, back: "IIIC_chantier" },
    ] },

  IIIC_carriere_arrivee: { act: "III", title: "La carrière de la Reine", place: "iiic_carriere", hub: true, routes: true, backName: "le fond de la carrière de la Reine",
    text: [
      { first: true, text: "Le chemin des Ânes finit dans un grand cirque de pierre blonde, taillé à angles droits dans la montagne, haut comme trois églises. Les parois portent encore les traces des coins de fer, en lignes régulières, comme les pages d'un livre ouvert. Des genêts, des ronces, de jeunes pins ont poussé sur les gradins. Au fond du cirque, au milieu d'une esplanade de gravats, un bloc énorme se dresse seul, à peine dégrossi, haut de deux hommes : le dernier bloc." },
      { first: true, text: "Au-dessus de la paroi nord commence le bois de la Gâche, sombre, des chênes verts et des frênes. Une galerie s'ouvre au pied de la paroi est, une bouche noire étayée de poutres pourries." },
      { again: true, when: "day", text: "Le cirque de la carrière, ses parois blondes rayées de coins, le dernier bloc au milieu des gravats." },
      { again: true, when: "night", text: "La carrière, la nuit. Les parois sont pâles sous la lune, comme de l'os. Le dernier bloc fait une ombre plus noire que la nuit." },
      "Le cirque {{echo#iiic_carriere_echo|est silencieux, et le vent tourne dans le fond sans faire de bruit|rend des coups de masse, des centaines, et une voix d'homme qui chante pour donner la cadence, et une autre, plus loin, qui crie : « Celui-là pour la salle des Reflets ! Celui-là pour Sorne ! »}}.",
      { after: "iiic:carriere=rouverte", text: "Des carriers travaillent sur les gradins, des échafaudages neufs sont dressés contre la paroi est, et on a tendu une bâche sur le dernier bloc, pour le protéger de la poussière, comme on couvre un autel." },
    ],
    choices: [
      { label: "La paroi aux marques des compagnons", to: "IIIC_carriere_front" },
      { label: "La galerie étayée, au pied de la paroi est", to: "IIIC_carriere_galerie" },
      { label: "Le dernier bloc, au milieu des gravats", hide: { any: [{ item: "iiic_franchise" }, { quest: "IIIC_carriere" }] }, to: "IIIC_carriere_bloc" },
      { label: "Le bois de la Gâche, au-dessus de la paroi nord", to: "IIIC_bois" },
    ] },

  IIIC_carriere_front: { act: "III", title: "Les marques des compagnons", place: "iiic_carriere",
    text: [
      "De près, la paroi est couverte de marques gravées, chacune à la place d'une pierre qu'on a tirée : des signes de compagnons, simples, un par homme, pour qu'on paie chacun de ses blocs. Une étoile. Un marteau. Deux traits croisés. Une clé. Une main ouverte. Des centaines, sur toute la hauteur, à portée de bras puis plus haut, là où l'on montait sur des échelles.",
      "Une marque revient plus souvent que les autres, au bas de la paroi, à côté de chaque grand bloc tiré : {{pie#iiic_marque|une couronne grossière, faite de trois pointes, pareille aux autres marques|une couronne à trois pointes, et sous la troisième pointe, un trou de la largeur d'un doigt, foré droit, qui traverse la marque et revient dans chaque couronne au même endroit}}.",
      { if: { has: "metier:lire" }, text: "Tu lis les marques comme on lit des signatures au bas d'un registre. Celles du haut sont plus récentes : les compagnons ont tiré la pierre de bas en haut, pendant des années. La couronne est la plus ancienne, la plus profonde, et la seule qui ne monte pas : elle reste au bas, à hauteur de main." },
    ],
    choices: [
      { label: "Glisser un doigt dans le trou de la troisième pointe", hide: { not: { voile: "iiic_marque" } }, fx: { flag: "iiic:troisieme_pointe", ep: ["perso", 500] }, back: "IIIC_carriere_arrivee" },
      { back: "IIIC_carriere_arrivee" },
    ] },

  IIIC_carriere_galerie: { act: "III", title: "La galerie", place: "iiic_carriere",
    text: [
      "La galerie s'enfonce dans la montagne, haute de deux toises, étayée de poutres de chêne noircies, couvertes de champignons blancs. Le sol est plat, poli par les traîneaux. Au bout de trente pas, la lumière du jour n'est plus qu'une tache. Il fait froid, d'un froid de cave, et l'eau goutte quelque part.",
      "Au fond, la galerie s'élargit en une salle ronde. Au milieu de la paroi, une veine de pierre plus sombre, presque verte, court en biais, lisse et grasse au toucher. Quand tu la frôles de la main, elle {{echo#iiic_veine|reste froide et muette sous les doigts|répond par une note longue, très basse, et une voix de femme, très lointaine, qui dit en riant : « Elle chante, Aymeric ! Taillez-m'en une pour mon diapason »}}.",
      { if: { item: "diapason" }, text: "Le diapason de Sorne, dans ton sac, s'est mis à vibrer de lui-même, très bas, comme un chat qui ronronne contre la pierre. La veine est une pierre chantante. Il suffit d'y poser la fourche de bronze." },
      { with: "salome", text: "Salomé reste à l'entrée de la galerie, les bras croisés, et ne fait pas un pas de plus. « Sous la mer, dit-elle, je veux bien. Sous une montagne, non. Je vous attends. »" },
    ],
    choices: [
      { label: "Poser le diapason contre la veine verte", hide: { any: [{ not: { item: "diapason" } }, { has: "iiic:veine" }] }, fx: { recharge: { echo: 2 }, flag: "iiic:veine", ep: ["perso", 400] }, back: "IIIC_carriere_arrivee" },
      { label: "Sortir de la galerie, à la lumière", back: "IIIC_carriere_arrivee" },
    ] },

  IIIC_carriere_bloc: { act: "III", title: "Le dernier bloc", place: "iiic_carriere",
    text: [
      "Le dernier bloc est haut de deux hommes, large comme une charrette, à peine dégrossi sur ses quatre faces. Les compagnons l'ont détaché de la paroi, l'ont traîné jusqu'ici, au milieu de l'esplanade, et l'ont laissé debout. Trois cents ans de pluie l'ont arrondi aux angles. Des enfants y ont gravé leurs noms, des amoureux des cœurs.",
      "Il porte sur chaque face une couronne à trois pointes, plus grande que celles de la paroi, à hauteur de poitrine. Le bloc est {{pie#iiic_bloc|plein, de la même pierre blonde que tout le cirque, du haut jusqu'en bas|creux, en son cœur : une niche de la taille d'un coffret, fermée par un bouchon de pierre ajusté, taillé dans la couronne de la face nord, sous la troisième pointe}}.",
      { with: "tibere", text: "Tibère fait le tour du bloc, frappe du plat de sa masse, écoute, frappe ailleurs. « Si tu veux, je l'ouvre en deux, dit-il. Il me faudra la journée et un tonneau de vin. »" },
    ],
    choices: [
      { label: "Frapper la couronne du nord, sous la troisième pointe", hide: { all: [{ not: { voile: "iiic_bloc" } }, { not: { voile: "iiic_galmier_franchise" } }, { not: { has: "iiic:troisieme_pointe" } }] }, fx: { ep: ["seance", 1000] }, to: "IIIC_carriere_ouvert" },
      { label: "« Que le compagnon qui le fendra soit un honnête homme » : chercher où le fendre", hide: { not: { voile: "iiic_eglise_echo" } }, test: { dom: "savoir", diff: 0, label: "Lire un bloc comme un compagnon", help: [{ with: "gildas", v: 10 }] },
        win: { fx: { ep: ["seance", 1000] }, to: "IIIC_carriere_ouvert" }, lose: { fx: { note: "Tu cherches longtemps. Le bloc garde son secret pour aujourd'hui." }, back: "IIIC_carriere_arrivee" } },
      { label: "Sonder le bloc, face par face, au manche du couteau", test: { dom: "savoir", diff: -20, label: "Entendre le creux d'une pierre", help: [{ if: { has: "metier:mains" }, v: 20 }, { with: "gildas", v: 10 }] },
        win: { fx: { ep: ["perso", 800] }, to: "IIIC_carriere_ouvert" }, lose: { fx: { note: "La pierre sonne plein partout. Tu as mal aux doigts." }, back: "IIIC_carriere_arrivee" } },
      { label: "Laisse-moi faire", who: "tibere", test: { dom: "combat", diff: -10, label: "Fendre un bloc à la masse" },
        win: { fx: { flag: "iiic:bloc_brise", ep: ["perso", 700] }, to: "IIIC_carriere_ouvert" }, lose: { fx: { pv: -2, note: "La masse rebondit. Tibère jure, se frotte l'épaule, et dit qu'il reviendra avec un coin de fer." }, back: "IIIC_carriere_arrivee" } },
      { back: "IIIC_carriere_arrivee" },
    ] },

  IIIC_carriere_ouvert: { act: "III", title: "Ce que gardait le bloc", place: "iiic_carriere",
    text: [
      { if: { has: "iiic:bloc_brise" }, text: "Le bloc se fend à la sixième volée, d'un coup, en deux morceaux inégaux qui s'écartent en grondant. Tibère recule, essoufflé, fier, et un peu honteux d'avoir cassé une chose aussi vieille. Dans la cassure, une niche, et dans la niche, un coffret.", else: "Tu frappes la troisième pointe de la couronne du nord avec le pommeau de ta dague, une fois, sèchement. Le bloc répond par une note, une seule, longue, grave, comme une cloche sous l'eau. Le bouchon de pierre se décolle d'un cheveu. Tu le tires. Il vient, lourd, parfaitement ajusté, et derrière, il y a une niche, et dans la niche, un coffret." },
      "Le coffret est de plomb, scellé à la cire, gros comme un livre. Dedans, enveloppés de toile cirée, deux objets. Une matrice de sceau en bronze, à l'image d'un maillet sous une couronne. Et une lettre sur parchemin, pliée en trois, au sceau de cire verte d'une reine : *Ysaure, reine du delta et des Combes, à tous ceux qui ces lettres verront.*",
      "La franchise des carriers. La carrière de la Reine est à eux, à leurs fils, sans taille ni redevance, tant que l'eau descendra de la montagne. Elle est restée trois cents ans dans la pierre, à vingt pas de ceux à qui elle appartient.",
    ],
    fx: { item: "iiic_franchise", ep: ["perso", 600] },
    choices: [{ label: "Emporter le coffret au bourg", fx: { item: "iiic_tr_sceau", clock: { tresors: 1 }, flag: "tresor:iiic_sceau" }, back: "IIIC_carriere_arrivee" }] },

  IIIC_carriere_fin: { act: "III", title: "La franchise", place: "orle",
    text: [
      "Anthime prend la lettre à deux mains, comme on prend un enfant. Il ne sait pas lire. Il la tient devant lui, les yeux sur le sceau vert, et ses lèvres bougent.",
      "Les tailleurs ont arrêté leurs ciseaux. On fait cercle. Quelqu'un lit à voix haute, lentement, en butant sur les vieux mots. À la fin, personne ne parle. Puis un jeune carrier se met à rire, et un autre, et le rire passe d'homme en homme.",
      { if: { has: "tresor:iiic_sceau" }, text: "Anthime touche du doigt la matrice de bronze que tu as sortie avec la lettre : le maillet sous la couronne. « Le sceau des compagnons de la reine, dit-il. Garde-le. La lettre suffira, si elle reste ici. »" },
      "Le commis de la Banque s'est approché, tablette en main. Il regarde la lettre avec une grande attention. « Un document intéressant, dit-il. {{oreille#iiic_commis|D'une valeur historique, sans doute, mais d'une valeur légale très douteuse|D'une valeur légale entière, si un juge la voit, et alors la Banque perd la carrière et tous les procès qui suivront}}. Je vous en offre trente ducats, pour la bibliothèque de la Banque. Comptant. »",
    ],
    choices: [
      { label: "Laisser la franchise aux carriers", fx: { flag: "iiic:carriere=rouverte", drop: "iiic_franchise", ep: ["seance", 2000], fac: { hautes: 5, banque: -5 } }, to: "IIIC_carriere_fete" },
      { label: "Vendre la lettre au commis, trente ducats", fx: { flag: "iiic:carriere=vendue", drop: "iiic_franchise", gold: 30, fac: { banque: 5, hautes: -5 }, quest: "IIIC_carriere", ep: ["seance", 800] }, tag: "Les carriers s'en souviendront", stain: true, back: "IIIC_chantier" },
      { label: "« Vous mentez, monsieur le commis. Elle vaut une carrière, et vous le savez. »", hide: { not: { voile: "iiic_commis" } }, fx: { flag: "iiic:carriere=rouverte", drop: "iiic_franchise", ep: ["seance", 2500], fac: { hautes: 8, banque: -8 } }, to: "IIIC_carriere_fete" },
      { label: "Garder la lettre pour l'instant", fx: { flag: "iiic:carriere=gardee", quest: "IIIC_carriere", ep: ["perso", 500] }, back: "IIIC_chantier" },
    ] },

  IIIC_carriere_fete: { act: "III", title: "Les carriers", place: "orle", takes: "evening",
    text: [
      "Le soir même, les carriers montent à la carrière de la Reine en procession, avec des torches, des masses, des coins, du vin, et la lettre dans un étui de fer-blanc qu'Anthime porte sur sa poitrine. Le commis de la Banque est parti à cheval vers Salvèze avant la nuit, sa tablette sous le bras.",
      { after: "iiic:compte_pierres", text: "Tu as lu, sous la loupe, ce que dit le bas de la lettre. *Le dernier bloc garde le compte des pierres envoyées à Sorne et au Mont.* Tu le dis à Anthime. Il hoche la tête, longtemps. « Alors on ne le taillera pas, dit-il. On taillera autour. »" },
      "Au fond du cirque, à la lumière des torches, Anthime pose la main à plat sur le dernier bloc, et il chante. Une vieille chanson de carriers, que plus personne ne savait, sauf lui. Les jeunes ne connaissent pas les paroles. Ils tapent la mesure sur la pierre, au maillet, et la carrière leur renvoie le rythme de toutes ses parois.",
      { with: "lison", text: "Lison écoute la chanson, la tête penchée. « C'est la même que celle des haleurs, dit-elle. À l'envers. » Elle sourit. « Ils ne savent pas ce qu'ils chantent. C'est peut-être mieux. »" },
    ],
    fx: { quest: "IIIC_carriere" },
    choices: [{ label: "Redescendre au bourg avec les carriers", back: "III_hub" }] },
});

// ==================================================================== the deserters of the Gâche (quest IIIC_deserteurs)
Object.assign(P, {
  IIIC_bois: { act: "III", title: "Le bois de la Gâche", place: "iiic_carriere", backName: "le bois de la Gâche",
    text: [
      { first: true, text: "Au-dessus de la carrière, le bois de la Gâche est un bois de chênes verts et de frênes, serré, sombre en plein jour, où les sentiers se perdent dans les ronces. On y faisait du charbon, autrefois. Il reste des places rondes et noires, où rien ne repousse." },
      { again: true, text: "La Gâche, ses chênes verts, ses places de charbonnier." },
      "Sur le chemin des Ânes, à la lisière, un frêne fendu par la foudre : un creux noir dans le tronc, à hauteur d'homme. Il y a des empreintes de bottes autour, et des miettes de pain. Plus loin, sur une souche, des coquilles de noix, un bout de corde, une petite croix de bois taillée au couteau, avec soin, et laissée là.",
      { if: { has: "iiic:chemin_gache" }, text: "Tu sais ce que veut dire le creux du frêne. Tu sais aussi quel chemin prend le fils de la femme du Pressoir, le soir, après avoir posé le pain : celui qui monte à gauche, entre deux rochers." },
    ],
    fx: { questSeen: "IIIC_deserteurs" },
    choices: [
      { label: "Suivre les traces de bottes, vers le camp", hide: { quest: "IIIC_deserteurs" }, to: "IIIC_camp_approche" },
      { label: "Laisser du pain dans le creux du frêne, avec un mot", hide: { any: [{ seen: "IIIC_camp_parley" }, { quest: "IIIC_deserteurs" }] }, fx: { food: -1, flag: "iiic:pain_frene" }, to: "IIIC_camp_parley" },
      { back: "IIIC_carriere_arrivee" },
    ] },

  IIIC_camp_approche: { act: "III", title: "Le camp de la Gâche", place: "iiic_carriere",
    text: [
      "Le camp est dans une ancienne loge de charbonniers, à moitié écroulée, au fond d'une combe : un toit de branches, trois feux, des manteaux sur des cordes. Une quinzaine d'hommes, maigres, barbus, en lambeaux de l'uniforme bleu d'Aveline, mangent une soupe autour du feu du milieu. Une mule broute, attachée à un arbre. Des barriques, des sacs, une cloche de chapelle, des chandeliers d'église sont empilés sous une bâche.",
      "Une sentinelle, un garçon de vingt ans, dort assise contre un rocher, son arbalète sur les genoux.",
      { with: "tibere", text: "Tibère regarde le camp avec un œil de sergent. « Ils ont de la discipline, dit-il tout bas. Trois feux, pas un. Une sentinelle, même endormie. Et ils ont mis le butin à l'abri avant de manger. Ce sont des soldats, pas des voleurs. Ça se bat mieux. »" },
      { if: { has: "iiic:haquin_reinold" }, text: "Le grand rouquin est là, assis à l'écart, la bourse de Haquin posée devant lui sur une pierre. Il ne l'a pas ouverte. Il la regarde." },
    ],
    choices: [
      { label: "Entrer dans le camp, les mains vides et visibles", to: "IIIC_camp_parley" },
      { label: "Contourner le camp jusqu'au butin, sous la bâche", test: { dom: "discretion", diff: -10, label: "Voler des voleurs", help: [{ with: "lison", v: 15 }, { if: { has: "passe:voleur" }, v: 10 }] },
        win: { fx: { ep: ["perso", 800] }, to: "IIIC_camp_vol" }, lose: { to: "IIIC_camp_pris" } },
      { label: "Attaquer par surprise", fight: { title: "Le camp de la Gâche", enemies: [{ id: "iiic_reinold", n: 1 }, { id: "brigand", n: 3 }], terrain: "nature",
        win: { fx: { flag: "iiic:deserteurs=chasses", ep: ["seance", 2000] }, to: "IIIC_camp_combat" }, lose: { to: "IIIC_camp_pris" },
        flee: { label: "Disparaître dans les chênes", dom: "discretion", diff: -10, to: "IIIC_bois" } } },
      { label: "Laisse-moi faire", who: "tibere", test: { dom: "social", diff: 0, label: "Un vieux sergent parle à un vieux sergent" },
        win: { fx: { conf: { tibere: 4 }, ep: ["perso", 600] }, to: "IIIC_camp_parley" }, lose: { to: "IIIC_camp_pris" } },
    ] },

  IIIC_camp_vol: { act: "III", title: "Sous la bâche", place: "iiic_carriere",
    text: [
      "Sous la bâche, le butin de tout un hiver : des barriques marquées au fer des Bousquet, des sacs de farine, des jambons, un calice d'étain, deux chandeliers de chapelle, une cloche de la taille d'un seau. Et un sac de cuir à part, fermé d'une courroie, qui doit être celui du chef.",
      "Dans le sac du chef, une chemise propre, un rasoir, un livre de prières en langue d'Aveline, et, au fond, roulée dans un mouchoir, une médaille d'or à l'effigie du vieux duc, avec une inscription : *Au Gué-Rouge, pour la bravoure.* Dessous, une lettre pliée : un pardon en bonne et due forme, au sceau du duc, avec le nom laissé en blanc, signé Wendel Haquin. Le pardon n'est pas rempli.",
      "Tu as la médaille en main quand une voix dit, derrière toi, dans la langue de la ville avec l'accent d'en haut : « Celle-là, je l'ai gagnée. Le reste, je l'ai volé. Tu peux prendre le reste. »",
    ],
    fx: { item: "iiic_tr_medaille", clock: { tresors: 1 }, flag: "tresor:iiic_medaille" },
    choices: [
      { label: "Te retourner, la médaille à la main", to: "IIIC_camp_parley" },
      { label: "Fuir dans les chênes, la médaille au poing", fx: { flag: "iiic:medaille_volee" }, back: "IIIC_bois" },
    ] },

  IIIC_camp_pris: { act: "III", title: "Prisonnier des déserteurs", place: "iiic_carriere",
    text: [
      "On te jette au pied du feu, les mains liées dans le dos avec une corde de mule. Les déserteurs t'entourent, la soupe à la main, curieux plus que méchants. L'un d'eux te fouille, trouve ta bourse, la soupèse, la remet dans ta poche.",
      { with: "any", text: "Tes compagnons sont liés à côté de toi, en rang, comme des fagots. Personne n'est blessé gravement. Les déserteurs ont frappé comme on frappe à l'exercice, pour faire tomber, pas pour tuer." },
      "Le grand rouquin s'accroupit devant toi. Il a des yeux gris très clairs, des taches de rousseur jusque sur les paupières, et une voix de sergent qui a appris la politesse dans une caserne. « On ne tue pas les gens des Combes, dit-il. Les gens des Combes nous donnent du pain. Mais toi, tu n'es pas des Combes. » Il te regarde longtemps. « Alors je vais t'écouter. Une fois. »",
    ],
    fx: { flag: "iiic:pris_gache" },
    choices: [{ label: "Parler, puisqu'il écoute", to: "IIIC_camp_parley" }] },

  IIIC_camp_parley: { act: "III", title: "Reinold", place: "iiic_carriere",
    fx: { meet: "iiic_reinold" },
    text: [
      { if: { has: "iiic:pain_frene" }, text: "Le soir, ce n'est pas le fils de la femme du Pressoir qui vient prendre le pain dans le frêne. C'est un grand rouquin, seul, une hallebarde à la main. Il lit ton mot, regarde autour de lui, et te trouve assis{e} sur une souche à dix pas. Il s'assied sur une autre." },
      { if: { has: "iiic:pris_gache" }, text: "Reinold coupe lui-même, d'un coup de couteau, la corde de mule qui te lie les poignets. Il s'assied en face de toi, de l'autre côté du feu." },
      { if: { has: "iiic:medaille_volee" }, text: "« Tu as ma médaille, dit-il d'abord. Tu es parti{e} avec, à travers mes chênes, et tu es revenu{e}. Garde-la. Mais assieds-toi, puisque tu es là. »" },
      "Il s'appelle Reinold. Il était sergent au régiment de la Marche, dans l'armée du duc d'Aveline. Il a passé les cols en novembre avec vingt hommes. Il en reste quatorze. « Nous avons quitté l'armée, dit-il, {{oreille#iiic_reinold_village|parce que la solde ne venait plus depuis l'été|parce qu'on nous a fait brûler un village au Gué-Rouge avec les gens dedans, pour l'exemple, et que j'ai allumé la première maison}}. »",
      "Il tisonne le feu. « Le capitaine Haquin nous offre le pardon du duc. Et le double de la solde. Pour guider ses colonnes par les Combes, par les gués, par les ponts. » Il regarde ses hommes, autour du feu, qui font semblant de ne pas écouter. « Le duc {{oreille#iiic_reinold_date|viendra quand il viendra, on n'en sait rien|viendra la nuit de la Grande Basse, Haquin me l'a dit, et c'est pour ça qu'il lui faut des guides avant la fin du mois}}. Moi, je sais ce que vaut un pardon d'Aveline. J'en ai fait pendre, des pardonnés. »",
      { with: "tibere", text: "Tibère et lui se sont reconnus sans s'être jamais vus : deux sergents. Ils parlent de soupe, de solde, de capitaines, avec la même lassitude. Reinold rit pour la première fois." },
      { if: { has: "iiic:prosper_passage" }, text: "Tu sais qu'une gabare redescend l'Orle dans trois jours, et qu'un patron a une dette envers un rouquin qui a soigné sa femme." },
    ],
    choices: [
      { label: "« Une gabare part dans trois jours. Gilduin Teyssier vous descendra jusqu'au Bec. »", hide: { not: { has: "iiic:prosper_passage" } }, fx: { flag: "iiic:deserteurs=partis", ep: ["seance", 2500] }, to: "IIIC_deserteurs_fin" },
      { label: "« Le Gué-Rouge, Reinold. Tu peux encore payer pour ce village. Tiens les gués des Combes contre ton duc. »", hide: { not: { voile: "iiic_reinold_village" } }, test: { dom: "social", diff: -10, label: "Retourner un déserteur", help: [{ with: "tibere", v: 15 }, { with: "gildas", v: 10 }, { if: { has: "iiic:invasion" }, v: 10 }] },
        win: { fx: { flag: "iiic:deserteurs=allies", ep: ["seance", 3000] }, to: "IIIC_deserteurs_fin" },
        lose: { fx: { flag: "iiic:refus_gues" }, to: "IIIC_camp_refus" } },
      { label: "« Rendez aux Bousquet et à la chapelle ce que vous avez pris, et partez par les cols. »", test: { dom: "social", diff: -20, label: "Faire partir quatorze soldats affamés", help: [{ if: { has: "iiic:invasion" }, v: 15 }, { with: "salome", v: 10 }, { if: { has: "metier:parole" }, v: 10 }] },
        win: { fx: { flag: "iiic:deserteurs=chasses", ep: ["seance", 2000] }, to: "IIIC_deserteurs_fin" },
        lose: { fx: { flag: "iiic:refus_cols" }, to: "IIIC_camp_refus" } },
      { label: "Le défier, lui seul, devant ses hommes", fight: { title: "Reinold à la barbe rousse", enemies: [{ id: "iiic_reinold", n: 1 }], spare: true,
        win: { fx: { flag: "iiic:deserteurs=chasses", ep: ["seance", 2000] }, to: "IIIC_camp_combat" },
        lose: { fx: { pv: -3, flag: "iiic:deserteurs=chasses" }, to: "IIIC_deserteurs_fin" },
        calm: { fx: { flag: "iiic:deserteurs=allies", ep: ["seance", 2500] }, to: "IIIC_deserteurs_fin" } } },
      { label: "Le laisser à son feu et redescendre", back: "IIIC_carriere_arrivee" },
    ] },

  IIIC_camp_refus: { act: "III", title: "Le refus de Reinold", place: "iiic_carriere",
    text: [
      { if: { has: "iiic:refus_gues" }, text: "Reinold se lève, sans colère. « Tu ne sais pas ce que tu demandes, dit-il. Tenir un gué contre une colonne, avec quatorze hommes qui ont faim. J'ai vu ce que ça donne. Ça donne quatorze pendus de plus. »" },
      { if: { has: "iiic:refus_cols" }, text: "Reinold hausse les épaules. « Par les cols, il y a l'armée. Par la rivière, il y a la République. Toi, tu as un portrait sur les piliers, et tu me dis de partir. » Il rit. « On reste. Le pain est bon, ici. »" },
      "Il se rassied près du feu, et ses hommes reprennent leur soupe. Personne ne te chasse. Personne ne t'invite à rester non plus. La sentinelle, réveillée, te regarde par-dessus son arbalète avec curiosité, comme on regarde un chien qui a perdu son maître.",
      { with: "any", text: "Tes compagnons attendent ton signe, la main près de leurs armes, ou loin, selon leur nature." },
    ],
    choices: [
      { label: "« Une gabare part dans trois jours. Gilduin Teyssier vous descendra jusqu'au Bec. »", hide: { not: { has: "iiic:prosper_passage" } }, fx: { flag: "iiic:deserteurs=partis", ep: ["seance", 2500] }, to: "IIIC_deserteurs_fin" },
      { label: "Le défier, lui seul, devant ses hommes", fight: { title: "Reinold à la barbe rousse", enemies: [{ id: "iiic_reinold", n: 1 }], spare: true,
        win: { fx: { flag: "iiic:deserteurs=chasses", ep: ["seance", 2000] }, to: "IIIC_camp_combat" },
        lose: { fx: { pv: -3, flag: "iiic:deserteurs=chasses" }, to: "IIIC_deserteurs_fin" },
        calm: { fx: { flag: "iiic:deserteurs=allies", ep: ["seance", 2500] }, to: "IIIC_deserteurs_fin" } } },
      { label: "Laisser les déserteurs à leur soupe, pour aujourd'hui", back: "IIIC_carriere_arrivee" },
    ] },

  IIIC_camp_combat: { act: "III", title: "Le camp défait", place: "iiic_carriere",
    text: [
      "Reinold est à terre, sa hallebarde brisée sous lui, une main sur la cuisse où le sang coule entre ses doigts. Autour du feu, ses hommes ont reculé. Aucun ne s'avance. Ils regardent leur sergent, puis toi, et ils attendent un ordre qui ne vient pas.",
      "« Bon, dit Reinold enfin, en serrant les dents. Les cols, alors. » Il se relève à moitié, appuyé sur un garçon. « On partira demain. On laissera le butin. Tu le rendras toi-même, ça te fera des amis. » Il crache dans le feu. « Si le duc nous trouve, il nous pendra. Tu y penseras, la nuit, peut-être. »",
      { if: { not: { has: "tresor:iiic_medaille" } }, text: "Il fouille son sac, en sort une médaille d'or roulée dans un mouchoir, et te la jette. « Le Gué-Rouge, dit-il. Je n'en veux plus. Vends-la. Ou porte-la. Ça m'est égal. »" },
      { with: "gildas", text: "Frère Gildas panse la cuisse de Reinold, sans rien demander à personne, avec du fil et une aiguille. Reinold le laisse faire, les dents serrées, les yeux sur la bure." },
    ],
    fx: { fac: { hautes: 3 } },
    choices: [
      { label: "Prendre la médaille", hide: { has: "tresor:iiic_medaille" }, fx: { item: "iiic_tr_medaille", clock: { tresors: 1 }, flag: "tresor:iiic_medaille" }, to: "IIIC_deserteurs_fin" },
      { label: "Laisser les déserteurs plier leur camp", to: "IIIC_deserteurs_fin" },
    ] },

  IIIC_deserteurs_fin: { act: "III", title: "Les déserteurs", place: "iiic_carriere",
    text: [
      { if: { has: "iiic:deserteurs=partis" }, text: "Trois nuits plus tard, quatorze hommes descendent en silence le chemin des Ânes jusqu'au quai, et montent dans le sel de *La Patience*. Reinold s'arrête sur la planche. « Les gens des Combes, dit-il, je leur dois du pain. Toi, je te dois la rivière. » Il te serre l'avant-bras à la façon des soldats. La gabare part sans fanal." },
      { if: { has: "iiic:deserteurs=allies" }, text: "Reinold se lève. Il défait l'aigle d'Aveline à moitié arrachée de son épaule, la jette au feu, et regarde ses hommes. Un par un, ils font de même. « Les gués des Combes, dit-il. On les connaît. Quand les colonnes viendront, on sera dessous. » Il te tend la main. « On rendra le butin aux Bousquet. Ça, c'est pour le Gué-Rouge. Le reste, c'est pour toi. »" },
      { if: { all: [{ has: "iiic:deserteurs=chasses" }, { not: { has: "iiic:deserteurs=allies" } }, { not: { has: "iiic:deserteurs=partis" } }] }, text: "À l'aube, la loge de charbonniers est vide. Les feux sont éteints, recouverts de terre. Le butin est sous la bâche, tout entier, avec les barriques des Bousquet et la cloche de la chapelle. Les traces de bottes montent vers les cols, où il y a de la neige jusqu'aux genoux, et l'armée du duc." },
      "Au bourg, la nouvelle fait le tour de la halle avant midi. Les Bousquet récupèrent leurs barriques, le curé sa cloche. Honorine Fabrègue, au Pressoir, dit qu'elle regrettera les pièces d'argent à l'aigle, qui étaient bonnes. La femme dont le fils portait le pain ne dit rien.",
    ],
    fx: { quest: "IIIC_deserteurs" },
    choices: [{ label: "Descendre au bourg", back: "III_hub" }] },
});

// ==================================================================== the road to the Mont: legs of r_mont
Object.assign(P, {
  IIIC_leg_terrasses: { act: "III", title: "L'oratoire des terrasses", place: null,
    text: [
      "Au-dessus d'Orle, le sentier du Mont traverse les dernières vignes, les plus hautes, celles qu'on vendange à la corde. Puis les terrasses s'arrêtent net, au pied d'une barre de rochers, et là, contre la roche, il y a un petit oratoire de pierre blonde, avec une grille, une niche, une statue de la Vierge au visage effacé, et des ex-voto accrochés à la grille par des fils : des jambes de cire, des yeux de fer-blanc, des cœurs d'étain.",
      "Sur le linteau, une inscription gravée, à demi mangée par le lichen : *{{loupe#iiic_oratoire|Passant, prie pour les moines du Mont, qui prient pour toi en silence|Passant, ce qui monte ici se tait ; ce qui descend parle. Les feuillets montent. La reine descend}}.*",
      "L'oratoire {{echo#iiic_oratoire_echo|abrite un silence de chapelle, un peu de vent, l'odeur de la cire|garde une voix d'homme sèche, d'il y a quarante ans, qui dit : « Gildas, tu as quatorze ans. Tais-toi, ou rentre chez ta mère. Là-haut, on ne parle qu'une fois par jour, et c'est à Dieu »}}.",
      { with: "gildas", text: "Frère Gildas s'arrête devant la grille et touche un des ex-voto, un petit cœur d'étain noirci, du bout du doigt, sans le décrocher. « Celui-là, dit-il, c'est ma mère qui l'a mis. Le jour où je suis monté. » Il reprend le sentier sans attendre personne." },
      { with: "lison", text: "Lison lit l'inscription en remuant les lèvres, puis elle dit, sèchement : « Ça, c'est écrit pour nous. Pas pour les passants. » Elle n'explique pas qui est *nous*." },
    ],
    choices: [
      { label: "Accrocher quelque chose à la grille avant de reprendre le sentier", fx: { ep: ["perso", 200], gold: -1 }, back: R },
      { label: "Reprendre le sentier", back: R },
    ] },

  IIIC_leg_col: { act: "III", title: "Le col de la Taciturne", place: null,
    text: [
      "Le sentier sort des pins et franchit un col nu, balayé par le vent, où la neige a durci en croûte grise. Au-delà, il y a une combe suspendue, et au fond de la combe, adossée à la montagne, l'abbaye : une longue muraille de pierre pâle, percée de fenêtres étroites, un clocher sans cloche visible, un toit de lauzes chargé de neige. Une fumée droite monte d'une cheminée. Pas un bruit.",
      "Au bord du col, une borne de pierre porte une main sculptée, les doigts serrés sur les lèvres. Le chemin, au-delà, est bordé de petits cairns, un tous les dix pas, réguliers comme des chiffres.",
      "Un frère convers, en tablier de cuir sur sa bure, descend vers toi avec une hotte de bois. Il s'arrête, te regarde, regarde ceux qui t'accompagnent, et lève la main droite, la paume ouverte, puis la ferme lentement en poing. Il continue sa descente sans un mot.",
      { with: "gildas", text: "« Il dit : bienvenue, et faites vite, traduit Frère Gildas. Ou bien : bienvenue, et méfiez-vous. Le même signe dit les deux. Ça dépend de la vitesse de la main. » Il regarde le frère s'éloigner. « Il a fermé vite. »" },
      { without: "gildas", text: "Tu ne sais pas lire ses mains. Tu sais lire les gens, un peu. Celui-là avait l'air pressé, et pas seulement de redescendre." },
    ],
    choices: [{ label: "Descendre vers la porte de l'abbaye", back: R }] },

  IIIC_leg_descente: { act: "III", title: "La descente", place: null,
    text: [
      "Le sentier redescend dans la lumière, entre les pins, puis les buis, puis les premières vignes. Le Mont rapetisse derrière toi. Le miroir est contre ta poitrine, dans sa corne, et pèse plus que son poids.",
      "Tu marches {{miroir#iiic_desc_pas|d'un bon pas, comme on descend quand on a fini ce qu'on était venu faire|vite, pour ne pas penser à ce que le miroir t'a montré, et chaque lacet te ramène au même tournant de l'escalier du quai}}. Tu te dis que tu as fait ce qu'il fallait. Tu te dis {{miroir#iiic_desc_odeline|qu'Odeline aurait été fière de toi|qu'Odeline a veillé jusqu'à minuit pour t'attendre, une chandelle à la main, et que tu le savais en claquant la porte}}.",
      { after: "gildas:demasque", with: "gildas", text: "Frère Gildas descend devant toi, à dix pas, comme il l'a toujours fait. Il ne se retourne pas. Tu regardes sa nuque, sa capuche, ses épaules, et tu ne sais plus où poser les yeux." },
      { after: "gildas:demasque", without: "gildas", text: "Il n'y a plus de bure devant toi sur le sentier. Tu t'étais habitué{e} à la suivre. Tu marches sans repère." },
      { with: "tibere", text: "Tibère te tend sa gourde sans rien dire. Puis, au bout d'un lacet : « Le matin où je t'ai vu{e} au pied de l'escalier, tu avais encore ton costume de la fête. Je l'ai pas écrit, ça non plus. »" },
    ],
    choices: [{ label: "Continuer la descente", back: R }] },
});

// ==================================================================== events of the region "mont"
Object.assign(P, {
  IIIC_ev_neige: { act: "III", title: "La neige tardive", place: null,
    text: [
      "Le ciel se ferme d'un coup, au-dessus des crêtes, comme un couvercle. Le vent tourne au nord. En moins d'une heure, la neige tombe à gros flocons mouillés, de biais, et le sentier disparaît sous tes pieds. On ne voit plus le prochain lacet, ni le précédent.",
      "Tu avances {{miroir#iiic_neige_miroir|courageusement, un pas après l'autre, sans peur|en te répétant que tu n'as peur de rien, comme tu te le répétais enfant sous l'étal d'Odeline, et tu as froid jusqu'aux os}}.",
      { with: "salome", text: "Salomé a relevé le nez, flairé le vent comme en mer. « Ça va durer une heure, dit-elle. Pas plus. Il faut un abri, pas une route. »" },
      { with: "lison", text: "Lison a pris la corde de ton sac et l'a nouée à sa ceinture, puis à la tienne. « Dans le brouillard, chez nous, on s'attache. Sinon on se retrouve au printemps, dans les roseaux. »" },
    ],
    choices: [
      { label: "Chercher un abri sous les rochers", test: { dom: "nature", diff: -10, label: "Trouver un abri dans la neige", help: [{ with: "salome", v: 15 }, { with: "lison", v: 10 }, { if: { arch: "rodeur" }, v: 10 }] },
        win: { fx: { ep: ["perso", 500] }, to: "IIIC_ev_neige_abri" }, lose: { fx: { pv: -3, time: 4, note: "Tu tournes en rond une heure dans le blanc avant de tomber sur un surplomb, les mains gelées." }, to: "IIIC_ev_neige_abri" } },
      { label: "Serrer les dents et monter droit dans la neige", fx: { pv: -4, ep: ["perso", 300] }, back: R },
    ] },

  IIIC_ev_neige_abri: { act: "III", title: "L'abri", place: null,
    text: [
      "Sous un surplomb, une banquette de pierre et un anneau de fer : un abri de pèlerins. La neige tombe en rideau devant l'ouverture. Vous vous serrez au fond, les genoux contre le menton.",
      "L'abri {{echo#iiic_abri_echo|est sec et vide, et sent la cendre froide|rend une voix de femme, de l'hiver dernier, qui chante tout bas pour un enfant une berceuse des marais, la même que Lison, et une voix d'homme qui dit : « Elle dort. Demain, on la monte au Mont, et on ne la reverra plus »}}.",
      "Au bout d'une heure, la neige cesse comme elle était venue. Le soleil revient, blanc, aveuglant. Le sentier est effacé, mais les cairns dépassent, un tous les dix pas.",
    ],
    choices: [{ label: "Reprendre le sentier, de cairn en cairn", back: R }] },

  IIIC_ev_loups: { act: "III", title: "Les loups", place: null,
    text: [
      "Ils sont sur le sentier, devant toi, au sortir d'un lacet. Cinq loups gris, maigres, le poil terne de la fin de l'hiver. Ils ne fuient pas. Le plus grand baisse la tête et retrousse les babines sans un bruit. Les autres s'écartent, un à gauche, deux à droite, dans les buis.",
      { with: "tibere", text: "Tibère a déjà sa masse en main. « Le dos au rocher, dit-il. Toujours le dos au rocher. Les loups, c'est comme les créanciers : ils prennent par derrière. »" },
    ],
    choices: [
      { label: "Te battre, le dos au rocher", fight: { title: "Les loups du Mont", enemies: [{ id: "loup", n: 3 }], terrain: "nature",
        win: { fx: { ep: ["perso", 800] }, back: R }, lose: { fx: { pv: -3 }, to: "IIIC_ev_loups_fuite" },
        flee: { label: "Reculer jusqu'au lacet d'en dessous", dom: "nature", diff: -10, to: "IIIC_ev_loups_fuite" } } },
      { label: "Allumer une torche de buis et marcher droit sur eux", test: { dom: "nature", diff: -10, label: "Faire reculer des loups affamés", help: [{ if: { item: "lanterne" }, v: 10 }, { with: "salome", v: 10 }] },
        win: { fx: { ep: ["perso", 600] }, back: R }, lose: { to: "IIIC_ev_loups_fuite" } },
    ] },

  IIIC_ev_loups_fuite: { act: "III", title: "Le détour", place: null,
    text: [
      "Tu redescends un lacet, puis deux, à reculons, en criant, en lançant des pierres. Les loups suivent un moment, à distance, puis renoncent l'un après l'autre et remontent vers la crête, au trot, sans se presser.",
      "Il faut faire le grand détour par la combe des Sources, une heure de plus dans la caillasse. Tu as mal partout. Tu as encore tous tes doigts.",
    ],
    fx: { time: 3 },
    choices: [{ label: "Reprendre le sentier par la combe des Sources", back: R }] },

  IIIC_ev_ermite: { act: "III", title: "L'ermite de la Baume", place: null,
    text: [
      "À un tournant du sentier, une grotte s'ouvre dans la roche, fermée par un mur de pierre sèche et une porte de planches. Devant, un vieil homme en peau de mouton fend du bois. Il lève la tête et pose sa hache avec un grand sourire édenté. « Enfin quelqu'un ! Entrez, entrez. Là-haut, ils ne parlent pas. Moi, je parle pour eux. Je parle pour tout le monde. »",
      "C'est l'ermite de la Baume. Il vit là depuis vingt ans. Il a été moine au Mont, dit-il, et il en est descendu un matin, parce qu'il avait trop de choses à dire. « On ne m'a pas chassé, dit-il en te servant une tisane amère. {{oreille#iiic_ermite_mont|Je suis parti de moi-même, par amour de la parole|On m'a chassé, parce que j'avais entendu dans la salle des voix une chose qu'il ne fallait pas, et que je l'ai répétée au réfectoire}}. »",
      "Il parle de tout, des loups, des moines, des pèlerins, de la neige, d'un pape qu'il a connu, de la reine Ysaure qu'il appelle « la petite ». Tu l'écoutes. À un moment, il s'arrête net au milieu d'une phrase et te regarde fermer la porte de sa grotte derrière toi, à cause du vent.",
      { with: "gildas", text: "Frère Gildas est resté dehors. L'ermite le regarde par la fente de la porte, longtemps. « Celui-là, dit-il, je l'ai connu enfant. Il pleurait la nuit, au dortoir. Puis un jour il a cessé. Je n'ai jamais su lequel des deux m'a fait le plus de peine. »" },
    ],
    fx: { meet: "iiic_ermite" },
    choices: [
      { label: "« Pourquoi me regardes-tu comme ça, ermite ? »", hide: { seen: "IIIC_ev_ermite_parole" }, to: "IIIC_ev_ermite_parole" },
      { label: "« Qu'avais-tu entendu, dans la salle des voix ? »", hide: { any: [{ not: { voile: "iiic_ermite_mont" } }, { has: "iiic:ermite_salle" }] }, fx: { flag: "iiic:ermite_salle", ep: ["perso", 600] }, to: "IIIC_ev_ermite_salle" },
      { label: "Le remercier pour la tisane et reprendre le sentier", back: R },
    ] },

  IIIC_ev_ermite_parole: { act: "III", title: "Ce que voit l'ermite", place: null,
    fx: { clue: "iiic_m_porte" },
    text: [
      "L'ermite rit, d'un rire de vieux qui a gardé ses mots trop longtemps. « Je regarde comment tu fermes les portes, dit-il. Tu fermes les portes des autres tout doucement, comme quelqu'un qui en a claqué une et qui ne peut plus la rouvrir. » Il souffle sur sa tisane. « Au Mont, ils ont un miroir pour ça. Moi, je n'ai que mes yeux. C'est moins cher. »",
      "Il se lève, fouille dans un coin de sa grotte, dans un tas de chiffons, et en sort une petite croix de pèlerin, en ambre clair monté sur argent, qu'il te met dans la main. « Un pèlerin des marais l'a laissée ici il y a dix ans, en échange d'une nuit. Elle tinte contre la pierre. Ça m'empêche de dormir. Prends-la. Tu as l'air de quelqu'un qui écoute les pierres. »",
    ],
    choices: [
      { label: "Prendre la croix d'ambre", hide: { has: "tresor:iiic_croix" }, fx: { item: "iiic_tr_croix", clock: { tresors: 1 }, flag: "tresor:iiic_croix", ep: ["perso", 600] }, back: R },
      { label: "Reprendre le sentier", back: R },
    ] },

  IIIC_ev_ermite_salle: { act: "III", title: "La salle des voix", place: null,
    text: [
      "L'ermite cesse de sourire. Il regarde le feu. Pour la première fois, il se tait longtemps.",
      "« La salle des voix, dit-il enfin, c'est là qu'on apprend aux novices à ne plus trembler en parlant. On les y met enfants, on leur fait dire des choses vraies et des choses fausses, et un vieux frère écoute avec un cornet d'os, comme le tien. » Il a vu ton cornet. Il l'a vu depuis le début. « Celui qui tremble encore à vingt ans redescend dans le monde. Celui qui ne tremble plus devient Gardien, ou abbé, ou rien. »",
      "« Ce que j'ai entendu, dit-il, c'est l'abbé de ce temps-là qui disait, dans la salle vide, à quelqu'un que je ne voyais pas : *Le Mont doit à la Banque plus qu'il ne vaut. Un jour, la Banque viendra chercher son dû, et il faudra choisir entre le silence et les murs.* » Il hausse les épaules. « Je l'ai répété au réfectoire. On ne répète pas, au Mont. Me voilà. »",
    ],
    choices: [{ label: "Reprendre le sentier", back: R }] },

  IIIC_ev_eboulis: { act: "III", title: "L'éboulis", place: null,
    text: [
      "Un grondement, au-dessus. Des pierres dévalent la pente, d'abord une, puis dix, puis un pan entier de la montagne qui glisse avec un bruit de tonnerre qu'on aurait mis dans un sac. Un nuage de poussière grise monte. Le sentier, devant toi, disparaît sous un éboulis de blocs gros comme des tonneaux.",
      "Quand la poussière retombe, il reste une pente de cailloux instables, à traverser sur trente pas, au-dessus d'un ravin. La pente {{pie#iiic_eboulis|est un chaos de blocs pareils, tous prêts à rouler|tient sur trois gros blocs de la base, calés les uns contre les autres ; le reste roule au moindre pied, sauf la ligne qui passe juste au-dessus d'eux}}.",
      { with: "salome", text: "Salomé regarde la pente comme une mer croisée. « On passe un par un, dit-elle. Pas deux. Et on ne s'arrête pas. »" },
    ],
    choices: [
      { label: "Passer sur la ligne des trois gros blocs", hide: { not: { voile: "iiic_eboulis" } }, fx: { ep: ["perso", 500] }, back: R },
      { label: "Traverser l'éboulis au plus vite", test: { dom: "nature", diff: -10, label: "Traverser une pente qui roule", help: [{ with: "salome", v: 10 }, { with: "lison", v: 10 }] },
        win: { fx: { ep: ["perso", 400] }, back: R }, lose: { fx: { pv: -4, note: "Les pierres partent sous tes pieds. Tu glisses dix pas vers le ravin avant de t'agripper à une racine." }, back: R } },
      { label: "Faire le tour par le haut, à travers les buis", fx: { time: 3 }, back: R },
    ] },

  IIIC_ev_moine: { act: "III", title: "Le moine muet", place: null,
    text: [
      "Le brouillard monte de la vallée et noie le sentier. Au bout de quelques pas, tu ne vois plus tes mains. Et dans le blanc, devant toi, une silhouette : un moine en bure grise, sans âge, un bâton à la main, immobile au milieu du sentier, comme s'il t'attendait.",
      "Il ne dit rien. Il lève la main, montre la gauche, deux doigts. Puis la droite, la paume tournée vers le sol. Puis il se tourne et marche, lentement, dans le brouillard.",
      "Le sentier, à cet endroit, {{echo#iiic_moine_echo|est noyé de blanc et de silence, et l'on n'entend que vos pas|garde la voix du moine, de l'été d'il y a dix ans, avant qu'il ait fait vœu : « À gauche au deuxième cairn, et pas à droite, jamais, à droite c'est le vide sous la neige »}}.",
      { with: "gildas", text: "Frère Gildas lit les signes à mesure. « Deux, à gauche. Paume en bas : le vide. Il nous dit de prendre à gauche au deuxième cairn. » Le moine se retourne, voit Gildas, et s'arrête. Il fait un autre signe, très lent, la main sur le cœur puis ouverte vers lui. Gildas baisse la tête. Il ne traduit pas celui-là." },
    ],
    choices: [
      { label: "Suivre le moine, à gauche au deuxième cairn", if: { any: [{ present: "gildas" }, { voile: "iiic_moine_echo" }] }, why: "Tu ne sais pas lire ses mains.", fx: { ep: ["perso", 500], fac: { moines: 3 } }, back: R },
      { label: "Deviner ses signes, et le suivre", test: { dom: "savoir", diff: -10, label: "Lire la langue des mains", help: [{ if: { has: "taiseurs:serment" }, v: 20 }, { with: "lison", v: 10 }] },
        win: { fx: { ep: ["perso", 500], fac: { moines: 2 } }, back: R }, lose: { fx: { pv: -3, time: 2, note: "À droite, au deuxième cairn, ton pied rencontre le vide sous la neige. Tu te rattrapes à un buis. Le moine te regarde, au bord, sans rien dire, et te tend son bâton." }, back: R } },
    ] },

  IIIC_ev_pierre: { act: "III", title: "La pierre qui chante", place: null,
    text: [
      "Au bord du sentier, une grande pierre levée, plus haute qu'un homme, d'une roche verte et lisse qui n'est pas celle de la montagne. Quelqu'un l'a dressée là, il y a longtemps, et l'a entourée d'un petit muret rond, comme un puits. Des pèlerins y ont laissé des pièces, des rubans, des cailloux peints.",
      "Quand le vent passe dessus, elle chante. Une note grave, longue, qui monte et ne s'arrête pas tout à fait. La pierre {{echo#iiic_pierre_echo|chante pour le vent seul, sans paroles|rend, sous la note, des voix de gens qui portent des pierres, en file, et l'un d'eux dit : « Encore une pour le Mont, puis on redescend les feuillets »}}.",
      { if: { item: "diapason" }, text: "Le diapason de Sorne, dans ton sac, s'est mis à chanter avec elle, à l'octave. C'est une pierre chantante, de la même roche que celles des Écueils, montée ici à dos d'homme." },
    ],
    choices: [
      { label: "Poser le diapason contre la pierre verte", hide: { any: [{ not: { item: "diapason" } }, { has: "iiic:pierre_mont" }] }, fx: { recharge: { echo: 2 }, flag: "iiic:pierre_mont", ep: ["perso", 400] }, back: R },
      { label: "Laisser un ruban au muret et reprendre le sentier", back: R },
    ] },
});

// ==================================================================== events of the region "combes"
Object.assign(P, {
  IIIC_ev_taille: { act: "III", title: "La taille", place: null,
    text: [
      "Dans une vigne en bord de chemin, une famille entière taille : le père, la mère, trois enfants, une grand-mère assise sur un panier renversé qui fait des fagots de sarments. Ils te saluent de la serpette. La mère t'offre un morceau de pain frotté d'ail et une gorgée de vin aigre.",
      "« La taille de printemps, dit le père. On coupe tout le bois de l'an dernier, sauf deux yeux. Le reste, au feu. » Il regarde le Mont. « {{oreille#iiic_taille_pere|On a de la chance, cette année, il n'a pas gelé|Si la Recette nous prend la vigne à la Saint-Georges, je taille pour rien, et je taille quand même, parce que mon père taillait}}. »",
      { with: "lison", text: "Lison prend une serpette qui traîne et taille un cep, puis deux, sans qu'on lui demande. La grand-mère la regarde faire et hoche la tête : c'est bien fait. Lison rougit, ce qui n'arrive jamais." },
    ],
    choices: [
      { label: "Aider une heure à la taille", fx: { food: 1, ep: ["perso", 300], time: 1 }, back: R },
      { label: "Remercier et reprendre le chemin", back: R },
    ] },

  IIIC_ev_brigands: { act: "III", title: "Le péage des bois", place: null,
    text: [
      { if: { not: { quest: "IIIC_deserteurs" } }, text: "Au tournant d'un muret, deux hommes barrent le chemin, en manteaux bleus délavés, une arbalète armée, une hallebarde. Ils sont maigres et sales. L'un d'eux dit, dans la langue de la ville avec un fort accent d'en haut : « Péage. Pour le pain. Ce que tu veux, mais quelque chose. » Il n'a pas l'air sûr de lui. Il a l'air d'avoir faim." },
      { if: { quest: "IIIC_deserteurs" }, text: "Au tournant d'un muret, deux hommes barrent le chemin, en manteaux bleus délavés : deux traînards de la bande de la Gâche, restés en arrière. L'un d'eux dit, dans la langue de la ville avec un fort accent d'en haut : « Péage. Pour le pain. » Puis il te reconnaît, et baisse son arbalète." },
      "« {{oreille#iiic_brigand_peage|On ne veut de mal à personne, on veut passer|On a mangé la mule des Bousquet avant-hier, et je n'ai pas dormi depuis, parce que ma sœur avait la même}}, dit le plus jeune. »",
    ],
    choices: [
      { label: "Leur donner un jour de vivres", fx: { food: -1, ep: ["perso", 400] }, back: R },
      { label: "Leur donner un ducat", fx: { gold: -1, ep: ["perso", 300] }, back: R },
      { label: "Les écarter de force", fight: { title: "Le péage des bois", enemies: [{ id: "brigand", n: 2 }], terrain: "nature",
        win: { fx: { ep: ["perso", 600] }, back: R }, lose: { fx: { gold: -3, pv: -2 }, back: R },
        flee: { label: "Sauter le muret et filer à travers les vignes", dom: "discretion", diff: 0, to: "IIIC_ev_brigands_fuite" } } },
    ] },

  IIIC_ev_brigands_fuite: { act: "III", title: "À travers les vignes", place: null,
    text: [
      "Tu sautes le muret, tu roules entre deux rangs de ceps, tu te relèves et tu cours, courbé{e}, à travers les échalas. Un carreau d'arbalète se plante dans un piquet à un pied de ta tête, en vibrant. Puis plus rien.",
      "Quand tu regagnes le chemin, plus haut, les deux hommes ont disparu. Tu as perdu un bouton et un peu de peau aux genoux.",
    ],
    choices: [{ label: "Reprendre le chemin", back: R }] },

  IIIC_ev_charrette: { act: "III", title: "La charrette de pierre", place: null,
    text: [
      "Une charrette chargée d'un bloc de pierre est embourbée jusqu'aux moyeux dans une ornière, en travers du chemin. Deux bœufs tirent en vain, les naseaux fumants. Trois carriers poussent aux roues en jurant. Le bloc porte, à la craie, une marque : un besant, et un numéro. C'est le signe de la Banque Marrel.",
      "Le bloc est {{pie#iiic_charrette_bloc|de la belle pierre blonde des Combes, celle des églises|du grès tendre, de la mauvaise carrière du bas, peint au lait de chaux pour passer pour la pierre blonde, et vendu à la Banque au prix de la bonne}}.",
      "« Un coup de main ? dit le plus vieux. Ou passe ton chemin, mais alors par les vignes. »",
    ],
    choices: [
      { label: "Pousser à la roue avec eux", test: { dom: "combat", diff: 0, label: "Sortir une charrette de l'ornière", help: [{ with: "tibere", v: 10 }, { with: "salome", v: 10 }] },
        win: { fx: { ep: ["perso", 400], gold: 1 }, back: R }, lose: { fx: { pv: -1, ep: ["perso", 200] }, back: R } },
      { label: "« Ce grès peint, vous le vendez à la Banque pour de la pierre blonde ? »", hide: { not: { voile: "iiic_charrette_bloc" } }, once: true, fx: { ep: ["perso", 500], gold: 2, note: "Le vieux carrier rit et te met deux ducats dans la main. « Pour ta langue, qu'elle reste où elle est. La Banque nous paie deux liards le bloc. On lui rend la monnaie. »" }, back: R },
      { label: "Passer par les vignes", back: R },
    ] },

  IIIC_ev_receveur: { act: "III", title: "Les commis de la Recette", place: null,
    text: [
      "Sur le chemin, un commis de la Recette des tailles, en robe noire, monte à mule vers un hameau, suivi de deux soldats de la République à pied, la pique sur l'épaule. Il a un registre sous le bras et un sac de cuir vide à l'arçon. Il vient lever les tailles.",
      { after: "mandat", text: "L'un des soldats te regarde, longtemps, comme on cherche un nom qu'on a sur le bout de la langue." },
      "« Bonjour, voyageur, dit le commis. {{oreille#iiic_commis_recette|Belle journée pour les Combes|J'espère qu'ils auront caché moins que l'an dernier, parce que le receveur me retient sur mes gages ce que je ne ramène pas}}. »",
    ],
    choices: [
      { label: "Saluer et passer ton chemin, le chapeau bas", test: { dom: "discretion", diff: 0, label: "Passer devant deux soldats", help: [{ with: "lison", v: 10 }] },
        win: { fx: { ep: ["perso", 300] }, back: R }, lose: { fx: { flag: "iiic:reconnu", note: "Le soldat claque des doigts. « Toi ! » Tu es déjà dans les vignes. Derrière toi, on crie, puis on renonce : la mule refuse de courir, et le commis aussi." }, back: R } },
      { label: "« Le receveur vous retient sur vos gages ? Il retient sur tout le monde, alors. »", hide: { not: { voile: "iiic_commis_recette" } }, fx: { ep: ["perso", 500], flag: "iiic:commis_ami", note: "Le commis rougit, regarde ses soldats, puis rit jaune. Il ne te regarde plus du tout, et ses soldats non plus." }, back: R },
    ] },

  IIIC_ev_colporteur: { act: "III", title: "Le colporteur", place: null,
    text: [
      "Un colporteur descend le chemin avec un âne chargé de deux paniers, et il s'arrête pour tout le monde, pour toi comme pour les autres : il vend des aiguilles, du fil, des almanachs, des images de saints, des nouvelles. Surtout des nouvelles.",
      "« De Salvèze ? Ça va mal, dit-il avec délectation. Le pain a doublé depuis la Chandeleur. La Banque fait fermer les greniers de la ville pour faire monter les prix, à ce qu'on dit. Il y a eu une émeute aux Halles. Et le Conseil a fait clouer des avis partout, pour un meurtre sur le quai des Lanternes. » Il te détaille. « D'Aveline ? Le duc rassemble ses régiments au bord de la Marche. Il dit que c'est pour une revue. {{oreille#iiic_colporteur_duc|Il fait beaucoup de revues, le duc, ce printemps|J'ai vendu des almanachs à ses fourriers, ils achètent du fourrage pour dix mille chevaux}}. »",
      "Dans son panier, entre les almanachs, des « reliques » : un bout d'os de saint Vincent, un fil de la robe de la reine Ysaure, {{pie#iiic_colporteur|précieusement gardé dans une petite boîte d'argent|un fil de laine de mouton teint au brou de noix, dans une boîte d'étain argentée}}.",
    ],
    choices: [
      { label: "Lui acheter un almanach et ses nouvelles, un ducat", fx: { gold: -1, ep: ["perso", 300] }, back: R },
      { label: "Le laisser à sa route", back: R },
    ] },

  IIIC_ev_eclaireurs: { act: "III", title: "Les cuirasses bleues", place: null,
    text: [
      "Au bord de l'Orle, à un gué, deux cavaliers en cuirasse bleue font boire leurs chevaux. Un troisième, à pied dans l'eau jusqu'aux genoux, mesure la profondeur avec une perche graduée et note sur une planchette. Ils te voient en même temps que tu les vois.",
      "« Chasseurs, dit l'un d'eux, dans la langue de la ville. On chasse le canard. » Ils ont des épées de cavalerie, une perche, une planchette, et des sacoches de selle vides de tout gibier. L'homme à la perche dit à mi-voix à son camarade, dans la langue d'en haut, qu'il croit que tu ne comprends pas : « {{oreille#iiic_eclaireur|Rien à noter, l'eau est trop haute ici|Le gué tient trois cents chevaux de front, le fond est de gravier, et il ne gèle pas}}. »",
    ],
    choices: [
      { label: "Montrer le sauf-conduit du capitaine Haquin", hide: { not: { item: "iiic_sauf_conduit" } }, fx: { ep: ["perso", 500], note: "Le cavalier lit le sceau, te regarde autrement, et salue, deux doigts au casque. Ils remontent à cheval et s'en vont vers la crête sans se presser." }, back: R },
      { label: "Les saluer et passer, l'air de ne rien avoir vu", test: { dom: "social", diff: -10, label: "Avoir l'air bête devant des éclaireurs", help: [{ if: { has: "metier:parole" }, v: 10 }] },
        win: { fx: { ep: ["perso", 400] }, back: R }, lose: { to: "IIIC_ev_eclaireurs_combat" } },
      { label: "Attaquer avant qu'ils remontent en selle", fight: { title: "Le gué de l'Orle", enemies: [{ id: "soldat_aveline", n: 2 }], terrain: "nature",
        win: { fx: { ep: ["perso", 900], flag: "iiic:eclaireurs_battus" }, back: R }, lose: { fx: { pv: -3 }, back: R },
        flee: { label: "Plonger dans les roseaux", dom: "discretion", diff: -10, to: "IIIC_ev_eclaireurs_combat" } } },
    ] },

  IIIC_ev_eclaireurs_combat: { act: "III", title: "Au gué", place: null,
    text: [
      "Les cavaliers échangent un regard. L'un d'eux remonte en selle, tire son épée et pousse son cheval vers toi dans l'eau. Tu te jettes dans les roseaux de la rive, tu rampes, tu nages, tu sors cent pas plus bas, couvert{e} de vase.",
      "Quand tu oses lever la tête, les trois cuirasses bleues remontent vers la crête au petit trot, sans se retourner. Ils ont fini leur mesure. Ils n'ont pas besoin de toi.",
    ],
    fx: { pv: -1 },
    choices: [{ label: "Reprendre le chemin, trempé{e}", back: R }] },
});

// ==================================================================== companions in the Combes
Object.assign(P, {
  IIIC_salome_mere: { act: "III", title: "Saint-Privat", place: "orle", with: "salome", after: "iiic:maiwenn_combes", takes: 6,
    text: [
      "Saint-Privat est un village de onze maisons accroché au-dessus d'Orle, à une heure de mule, au bout d'un chemin de vignes si raide qu'on y a taillé des marches. Salomé a demandé le chemin trois fois, à trois personnes différentes, comme pour se donner trois chances de renoncer.",
      "La vieille s'appelle Katell. Elle est venue de la côte il y a cinquante ans pour épouser un vigneron, et elle a gardé l'accent des ports, et un nom de là-bas pour sa fille. Elle est presque aveugle. Elle file de la laine sur le pas de sa porte. Quand Salomé dit son nom, elle arrête son fuseau.",
      "« Maïwenn m'écrivait, dit-elle. Une lettre par an, à la Saint-Jean, que le curé me lisait. Il y a trois ans qu'elle n'écrit plus. » Elle tourne vers Salomé ses yeux blancs. « {{oreille#iiic_katell|Je me suis dit qu'elle avait trop à faire, là-bas, avec la mer|Je sais qu'elle est morte, je l'ai su la nuit même, j'ai rêvé d'eau, et j'attends depuis trois ans que quelqu'un ait le courage de monter me le dire}}. »",
      "Salomé s'agenouille devant elle, dans la poussière, et prend ses deux mains, le fuseau avec. Elle reste comme ça. Elle ne dit rien pendant longtemps.",
    ],
    choices: [
      { label: "« Elle le savait, Salomé. Elle t'attendait. »", hide: { not: { voile: "iiic_katell" } }, fx: { conf: { salome: 12 }, flag: "iiic:salome_mere", ep: ["seance", 1500] }, to: "IIIC_salome_mere_fin" },
      { label: "Les laisser seules et attendre au bout du chemin", fx: { conf: { salome: 6 }, flag: "iiic:salome_mere", ep: ["perso", 800] }, to: "IIIC_salome_mere_fin" },
    ] },

  IIIC_salome_mere_fin: { act: "III", title: "Le fuseau", place: "orle", with: "salome",
    text: [
      "Quand Salomé redescend vers toi, au bout du chemin, elle a les yeux rouges et la bouche ferme. Elle tient à la main un petit sachet de toile.",
      "« Elle savait, dit-elle. Elle m'a dit : tu as mis trois ans à monter onze marches. » Elle rit, de travers. « Je lui ai tout raconté. La corde. L'écueil. Elle m'a écoutée jusqu'au bout. Puis elle m'a donné ça. » Elle ouvre le sachet : une mèche de cheveux d'enfant, noirs, nouée d'un fil rouge. « La première coupe de Maïwenn. Elle dit que ça revient à la veuve. »",
      { if: { has: "salome:maiwenn" }, text: "Elle range le sachet contre sa poitrine. « Je lui ai dit pour Lothaire. Elle a dit : *Laisse-le à la mer. La mer est patiente.* » Salomé regarde le Mont, en face. « Moi, je ne suis pas la mer. »" },
      "Elle se remet en marche. Au bout de vingt pas, sans se retourner : « Merci. » C'est la première fois que tu l'entends le dire à quelqu'un.",
    ],
    choices: [{ label: "Redescendre vers Orle avec elle", back: "III_hub" }] },

  IIIC_lison_murs: { act: "III", title: "Les murets", place: "orle", with: "lison",
    text: [
      "Lison s'est arrêtée devant un muret de vigne, au-dessus du bourg, et le regarde comme on regarde un visage connu dans une foule. Elle passe la main sur les pierres sèches, l'une après l'autre.",
      "« Regarde, dit-elle. Celle-ci. Et celle-là. Et là-bas. » Certaines pierres du muret portent une petite entaille, toujours la même : trois traits courts, et un long. Le muret {{pie#iiic_muret|est fait de pierres des champs, empilées sans ordre, comme partout|est monté avec ordre : les pierres entaillées dessinent, de loin, une flèche couchée qui montre le Mont, et sous chacune, un vide de la largeur d'une main où l'on peut glisser un message}}.",
      "« C'est un signe de chez nous, dit Lison. Ma grand-mère le brode dans ses dentelles, au bord. Il veut dire : *quelqu'un écoute ici*. » Elle se redresse. « {{oreille#iiic_lison_signe|Les Taiseurs sont passés par là il y a longtemps, c'est tout|Ma grand-mère savait que je verrais ces murs. Elle savait tout depuis le début, que je viendrais jusqu'ici avec toi, et elle m'a laissée faire comme si je choisissais}}. »",
      { if: { has: "lison:loyale" }, text: "Elle donne un coup de pied dans le muret, pas assez fort pour faire tomber une pierre. « Eh bien, j'ai choisi quand même. Elle peut broder ce qu'elle veut. »" },
    ],
    choices: [
      { label: "Glisser la main dans le vide sous la pierre entaillée", hide: { not: { voile: "iiic_muret" } }, fx: { ep: ["perso", 600], flag: "iiic:muret_message" }, to: "IIIC_lison_message" },
      { label: "« Elle t'a laissée choisir, Lison. C'est déjà beaucoup, pour elle. »", hide: { not: { voile: "iiic_lison_signe" } }, fx: { conf: { lison: 8 }, ep: ["perso", 600] }, back: "III_hub" },
      { label: "Laisser Lison à ses murets", back: "III_hub" },
    ] },

  IIIC_lison_message: { act: "III", title: "Le message du muret", place: "orle", with: "lison",
    text: [
      "Sous la pierre entaillée, dans le vide du muret, un petit rouleau de dentelle, serré, noué d'un fil, sec malgré l'hiver. Lison le prend avant toi, le déroule, et pâlit.",
      "C'est une dentelle de Mère Ancolie : tu reconnais le point. Lison la lit du bout des doigts, les yeux fermés, comme sa grand-mère. « *À la petite*, dit-elle. *Le Mont a une dette. L'abbé est à la Banque. Ne laisse pas l'enfant de ma petite-nièce entrer seul dans la salle des Reflets.* » Elle rouvre les yeux. « L'enfant de ma petite-nièce, c'est toi. »",
      "Elle range la dentelle dans sa manche. « Elle l'a fait porter ici avant même que nous partions des Joncs. Par un haleur, sans doute. Elle savait par où nous passerions. » Elle te regarde. « Je ne te laisserai pas entrer seul{e}. Ça, je l'aurais fait de toute façon. »",
    ],
    fx: { conf: { lison: 5 } },
    choices: [{ label: "Redescendre au bourg", back: "III_hub" }] },

  IIIC_tibere_relais: { act: "III", title: "Le relais de poste", place: "orle", with: "tibere",
    text: [
      "Le relais de poste d'Orle est une écurie et une salle basse, où l'on change les chevaux du courrier de Salvèze et où l'on garde les lettres pour ceux qui passent. Tibère y entre seul. Tu le suis, de loin. Il demande s'il y a quelque chose au nom de Gaucelm. Il y a quelque chose.",
      "La lettre est cachetée d'une cire grise, sans armes. Tibère la lit debout, sans s'asseoir, puis te la tend sans un mot. *{{loupe#iiic_lettre_lothaire|Gaucelm. Vos dernières nouvelles nous ont été utiles. Continuez. Cinq ducats joints|Gaucelm. Vos dernières nouvelles étaient fausses. Je l'ai entendu en les lisant, comme j'entends tout. Si la prochaine l'est aussi, Rosalie apprendra ce que vaut son père. L. B.}}*",
      { after: "iiic:tibere_lettre", text: "« Celle que j'ai brûlée sur la gabare, dit Tibère, il l'a eue quand même. Je l'avais doublée d'une autre, au Bec, avant de monter. Par habitude. » Il se frotte les yeux. « Vingt ans de Guet, ça laisse des habitudes. »" },
      "Les cinq ducats sont dans la lettre, enveloppés dans un papier. Tibère les regarde. « {{oreille#iiic_tibere_ducats|Cinq ducats, c'est toujours ça|Cinq ducats, c'est le prix d'une robe de Rosalie, et je les prends, et je me dégoûte}}, dit-il. »",
    ],
    choices: [
      { label: "« Écris-lui. Écris-lui ce que je te dirai. »", fx: { flag: "iiic:tibere_faux", conf: { tibere: 6 }, ep: ["perso", 800] }, to: "IIIC_tibere_reponse" },
      { label: "« Rosalie, Tibère. Il l'a nommée. Ce n'est plus de l'argent. »", hide: { not: { voile: "iiic_lettre_lothaire" } }, fx: { flag: "iiic:tibere_rosalie", conf: { tibere: 10 }, ep: ["seance", 1200] }, to: "IIIC_tibere_reponse" },
      { label: "Le laisser décider seul", fx: { conf: { tibere: 2 } }, back: "III_hub" },
    ] },

  IIIC_tibere_reponse: { act: "III", title: "La réponse", place: "orle", with: "tibere",
    text: [
      { if: { has: "iiic:tibere_rosalie" }, text: "Tibère te regarde longtemps. Puis il demande au maître de poste du papier, de l'encre, et une place à la table. Il écrit deux lettres. La première, pour Lothaire Brunel, dit que tu es tombé{e} malade à Orle et ne bougera pas avant un mois. La seconde, pour Rosalie, chez sa maîtresse couturière, rue des Fileuses, dit : *Ne sors pas seule. Ne parle à aucun homme en gants gris. Ton père.* « Trois lignes, dit-il en sablant. J'en ai jamais écrit autant à ma fille. »" },
      { if: { not: { has: "iiic:tibere_rosalie" } }, text: "Tibère demande au maître de poste du papier et de l'encre. Tu dictes. Il écrit, de sa belle main de sergent, que vous êtes partis vers le nord par les cols, pour Aveline, et que le moine vous a quittés. Il signe. Il cachette avec le pouce, comme on faisait au Guet." },
      "Il glisse les cinq ducats dans sa veste. « Ceux-là, je les garde, dit-il. C'est la Banque qui paie la lettre qui la trompe. Je trouve ça juste. »",
    ],
    choices: [{ label: "Ressortir du relais avec lui", back: "III_hub" }] },

  IIIC_gildas_fontaine: { act: "III", title: "Gildas à la fontaine", place: "orle", with: "gildas", takes: "evening",
    text: [
      "Le soir, Frère Gildas est assis sur la margelle de la fontaine, les mains dans les manches, et regarde le Mont. Les femmes ont fini de rincer leurs cuves. La place se vide. Il ne bouge pas quand tu t'assieds à côté de lui.",
      "« Dom Évrard, l'abbé, était novice avec moi, dit-il. Nous avons appris à nous taire ensemble. Il a mieux appris que moi. Il est abbé. » Il parle lentement, sans regarder personne. « Le Mont doit de l'argent à la Banque, depuis vingt ans. Pour le toit, pour les murs, pour une année de famine. Ce que la Banque demande en échange, l'abbé seul le sait. Vous le verrez là-haut. Méfiez-vous de lui comme de moi. »",
      "Tu le regardes, assis là, dans le soir, avec son visage tranquille. Tu te dis {{miroir#iiic_gildas_miroir|que tu as confiance en lui, parce qu'il a toujours été là|que tu as besoin de lui faire confiance, parce que s'il t'a menti, alors tu as passé tout ce temps à côté de quelqu'un que tu n'as pas voulu regarder}}.",
      "La fontaine {{echo#iiic_fontaine_soir|coule pour vous deux, régulière, sans autre bruit|rend, plus bas que l'eau, une voix d'homme qui ressemble à la sienne, plus jeune, qui dit : « Je ne le ferai pas, Père. Je ne garderai pas ce serment-là »}}.",
    ],
    choices: [
      { label: "« Méfiez-vous de lui comme de moi, Gildas ? Pourquoi de vous ? »", fx: { ep: ["perso", 500] }, to: "IIIC_gildas_reponse" },
      { label: "Rester assis{e} à côté de lui jusqu'à la nuit", fx: { conf: { gildas: 3 } }, back: "III_hub" },
    ] },

  IIIC_gildas_reponse: { act: "III", title: "Ce que Gildas répond", place: "orle", with: "gildas",
    text: [
      "Frère Gildas sort ses mains de ses manches, les regarde, les remet.",
      "« Parce que je suis du Mont, dit-il. Et que ceux du Mont gardent des choses. Ils les gardent même contre ceux qu'ils aiment. Surtout contre eux. » Il se lève. « Vous verrez la salle des voix. Vous comprendrez comment on fabrique un homme qui ne tremble pas. Après, vous me jugerez. Je préfère que ce soit vous. »",
      { after: "gildas:demasque", text: "Il ajoute, très bas : « Vous m'avez déjà jugé, je crois. Vous avez raison de le faire. Moi, je me juge tous les soirs, et je ne trouve jamais la peine assez longue. »" },
      "Il te souhaite une bonne nuit, avec sa politesse un peu vieille, et monte se coucher au Pressoir, dans la plus petite chambre, celle qui n'a pas de fenêtre.",
    ],
    choices: [{ back: "III_hub" }] },
});

// ==== END PASSAGES

module.exports = {
  passages: P,
  extras: {
    people: {
      iiic_prosper: { name: "Gilduin Teyssier", qui: "Patron de la gabare La Patience, qui monte le sel jusqu'à Orle.", aspect: { allure: "soixante ans, gestes sûrs de marinier", signe: "mains rouges, racine de réglisse" }, f: false, face: { age: "ancien", coif: "degarni", beard: "barbe" }, desc: "Patron de la gabare La Patience, qui monte le sel jusqu'à Orle et redescend le vin. Mâche de la réglisse. Doit une dette ancienne à Mère Ancolie." },
      iiic_ravier: { name: "Le sergent Ravier", qui: "Sergent de la garnison d'Orle.", aspect: { allure: "maigre, scrupuleux", signe: "pique pour fouiller les cales" }, f: false, face: { age: "adulte", coif: "court" }, desc: "Sergent de la garnison d'Orle. Maigre, scrupuleux, sans solde depuis la Chandeleur." },
      iiic_haquin: { name: "Wendel Haquin", qui: "Maître Haquin, marchand de vin d'Aveline.", aspect: { allure: "courtois, nuque raide", visage: "cicatrice blanche au sourcil gauche", signe: "ongles propres, gobelet toujours plein" }, f: false, face: { age: "adulte", coif: "court", beard: "sans", marks: ["cicatrice"] }, desc: "« Maître Haquin, marchand de vin d'Aveline. » En vérité capitaine aux chevau-légers du duc, en reconnaissance dans les Combes." },
      iiic_esclarmonde: { name: "Esclarmonde Roustan", qui: "Vigneronne du coteau de l'Aiguier, au-dessus d'Orle.", aspect: { allure: "cinquante ans, toujours à tailler", signe: "serpette, mains plus dures que les ceps", voix: "voix de crécelle" }, f: true, face: { age: "mur", coif: "foulard" }, desc: "Vigneronne du coteau de l'Aiguier, au-dessus d'Orle. Sa vigne est saisie par la Recette des tailles. Elle la taille quand même." },
      iiic_honorine: { name: "Honorine Fabrègue", qui: "L'aubergiste du Pressoir, à Orle-le-Bourg.", aspect: { allure: "large, rouge, rapide", signe: "louche à la main", voix: "voix qui porte jusqu'au quai" }, f: true, face: { age: "mur", coif: "chignon" }, desc: "L'aubergiste du Pressoir, à Orle-le-Bourg. Large, rouge, rapide. Ne livre personne." },
      iiic_ortolan: { name: "Le receveur Ortolan", qui: "Receveur des tailles de la République à Orle.", aspect: { allure: "gras, rose", visage: "yeux très petits et mobiles", habits: "robe noire de magistrat trop étroite", signe: "sébile de liards, registre rouge" }, f: false, face: { age: "mur", coif: "degarni" }, desc: "Receveur des tailles de la République à Orle. Gras, rose, deux registres." },
      iiic_galmier: { name: "Anthime", qui: "Le plus vieux carrier d'Orle, à moitié sourd.", aspect: { allure: "vieux carrier, main sur la pierre" }, f: false, face: { age: "ancien", coif: "degarni", beard: "barbe" }, desc: "Le plus vieux carrier d'Orle, à moitié sourd. Il dit que la carrière de la Reine chante les nuits de gel." },
      iiic_reinold: { name: "Reinold", qui: "Sergent déserteur d'Aveline, chef de la bande du bois de la Gâche.", aspect: { allure: "grand rouquin, manières de soldat", visage: "barbe rousse", signe: "hallebarde" }, f: false, face: { age: "adulte", coif: "court", hair: "roux", beard: "barbe" }, desc: "Sergent déserteur des armées d'Aveline, chef de la bande du bois de la Gâche. Barbe rousse, manières." },
      iiic_ermite: { name: "L'ermite de la Baume", qui: "Un vieil homme qui vit dans une grotte, sur le sentier du Mont.", aspect: { allure: "vieil homme qui fend son bois", visage: "grand sourire édenté", habits: "peau de mouton", voix: "intarissable" }, f: false, face: { age: "ancien", coif: "long", beard: "barbe" }, desc: "Un vieil homme qui vit dans une grotte, sur le sentier du Mont, et qui parle beaucoup, comme pour rattraper le silence de là-haut." },
    },
    items: {
      iiic_etui: { name: "L'étui de maître Haquin", kind: "document", form: "plan",
        text: "*Plan des murs de Salvèze, levé au pas et à la chaîne. Tours numérotées de un à vingt-deux. Portes : des Sauniers, des Lanternes, de l'Écluse-Neuve, du Bac.*\n\n*Profondeur sous les ponts, à l'étiage : pont des Changeurs, neuf pieds ; pont du Beffroi, sept pieds ; pont aux Sauniers, quatre.*\n\n*Relèves de la garde : à la sixième heure et à la dix-huitième. Porte des Sauniers : huit hommes de jour, quatre de nuit. {{loupe#iiic_etui_note|Pour maître Haquin, à la foire d'Orle|La porte des Sauniers sera tenue par nos amis la nuit dite. Ne rien tenter contre les autres portes avant le signal}}.*",
        desc: "Trois feuillets de parchemin roulés dans un étui de cuir huilé, trouvés dans le double fond d'une barrique de vin qui remontait l'Orle." },
      iiic_copie: { name: "Ta copie des plans de Salvèze", kind: "document", form: "notes",
        text: "*Les murs, vingt-deux tours. Quatre portes : Sauniers, Lanternes, Écluse-Neuve, Bac. L'eau sous les ponts. Les relèves de la garde à six heures et à dix-huit heures. Aux Sauniers, quatre hommes de nuit.*",
        desc: "Ta copie hâtive des plans trouvés dans la barrique de maître Haquin. Les originaux sont repartis vers Orle." },
      iiic_registre_noir: { name: "Le registre noir du receveur", kind: "document", form: "registre",
        text: "*Rôle des tailles d'Orle et des Combes, trois années. Bousquet, l'Aiguier haut : au rôle, six ducats ; reçu, douze. Roustan, l'Aiguier : au rôle, huit ; dû, seize ; saisie. Cure de Saint-Vincent : une barrique le mois, pour le témoin.*\n\n*Total de la différence, trois années : huit cent onze ducats et quatre liards.*",
        desc: "Un petit registre relié de noir, gras de doigts, pris dans le tiroir du receveur Ortolan." },
      iiic_sauf_conduit: { name: "Le sauf-conduit d'Aveline", kind: "document", form: "lettre",
        text: "*De par monseigneur le duc d'Aveline. Que le porteur aille et vienne sans dommage, sur la parole du capitaine Wendel Haquin, des chevau-légers.*",
        desc: "Un carré de parchemin scellé de cire bleue, l'aigle à deux têtes. Il vaut une nuit de vie aux avant-postes d'Aveline, et davantage si l'officier sait lire." },
      iiic_franchise: { name: "La franchise des carriers", kind: "document", form: "charte", hand: "ancienne",
        text: "*Ysaure, reine du delta et des Combes, à tous ceux qui ces lettres verront. Nous donnons aux compagnons carriers d'Orle la carrière dite de la Reine, à eux et à leurs fils, pour qu'ils en tirent la pierre de nos maisons et de leurs maisons, sans taille ni redevance, tant que l'eau descendra de la montagne.*\n\n*{{loupe#iiic_franchise_dessous|Scellé à Orle, en notre présence, l'an de la Charte|Le dernier bloc, que les compagnons laissent debout, garde le compte des pierres envoyées à Sorne et au Mont. Qui saura le lire saura où chaque pierre est posée}}.*",
        desc: "Une lettre de franchise sur parchemin, au sceau de la reine Ysaure, trouvée dans le dernier bloc de la carrière de la Reine." },
      iiic_encre: { name: "L'encre à vieillir", kind: "outil", bonus: { savoir: 5 }, price: 6, desc: "Un petit flacon de verre bleu : l'encre d'un faussaire de foire, qui vieillit un écrit de cent ans en une nuit. Elle apprend aussi à reconnaître le faux." },
      iiic_tastevin: { name: "Le Taste-vin d'argent", kind: "outil", bonus: { social: 5 }, price: 12, desc: "Une petite coupe plate à ombilic, sur une chaîne : le prix du concours de la foire d'Orle. Les vignerons des Combes la reconnaissent et te servent du meilleur." },
      iiic_tr_coupe: { name: "La coupe de vermeil de la reine", kind: "tresor", price: 60, desc: "Une coupe de vermeil au pied gravé d'une couronne de sel et d'une feuille de vigne : *Combes d'Orle, à la table de la reine, l'an de la Charte.* Trouvée dans un panier de gobelets d'étain, à un liard." },
      iiic_tr_pichet: { name: "Le pichet au cygne", kind: "tresor", price: 45, desc: "Un pichet d'argent terni, au bec en tête de cygne, trouvé dans les terrasses de l'Aiguier par la grand-mère d'Esclarmonde Roustan." },
      iiic_tr_sceau: { name: "Le sceau des maîtres carriers", kind: "tresor", price: 50, bonus: { savoir: 5 }, desc: "Une matrice de sceau en bronze, à l'image d'un maillet et d'une couronne : celui des compagnons carriers de la reine. Il servait à marquer les pierres de Sorne." },
      iiic_tr_medaille: { name: "La médaille du Gué-Rouge", kind: "tresor", price: 40, desc: "Une médaille d'or d'Aveline, à l'effigie du vieux duc, donnée pour la bataille du Gué-Rouge. Reinold l'a gagnée, puis l'a jetée dans son sac de butin, avec le reste." },
      iiic_tr_croix: { name: "La croix de l'ermite", kind: "tresor", price: 35, desc: "Une petite croix de pèlerin en ambre chantant des Écueils, montée sur argent. Elle tinte, très bas, quand on la tient contre une pierre." },
      iiic_faux_vin: { name: "Le « vin de la reine »", kind: "tresor", price: 1, desc: "Une bouteille de verre vert, scellée de cire, vendue huit ducats à la foire d'Orle comme un vin de Sorne d'avant le grand flot. Le verre a un an." },
    },
    enemies: {
      iiic_soldat_rep: { name: "Soldat de la République", look: "humain", pv: 22, att: 42, def: 16, dmg: 6, desc: "Casaque rouge, chapeau de fer cabossé, pique, et trois mois de solde en retard." },
      iiic_haquin: { name: "Le capitaine Haquin", look: "humain", pv: 60, att: 54, def: 22, dmg: 8, desc: "Un capitaine de chevau-légers d'Aveline, sans cheval. Il tire l'épée comme on signe." },
      iiic_reinold: { name: "Reinold à la barbe rousse", look: "humain", pv: 55, att: 50, def: 20, dmg: 8, desc: "Sergent déserteur. Il a gardé sa hallebarde et ses manières." },
    },
    clues: {
      iiic_s_plans: { rev: "S", text: "Dans une barrique qui remontait l'Orle vers la foire, pour « maître Haquin » : le plan des murs de Salvèze, l'eau sous les ponts, les heures de relève de la garde de chaque porte, copiées du registre de la caserne." },
      iiic_s_courrier: { rev: "S", text: "Registre de l'écluse des Trois-Sœurs : un courrier à cheval, au sceau rouge de la Chancellerie de Salvèze, passe vers le nord deux fois par mois, exempt de péage sur ordre écrit." },
      iiic_s_porte: { rev: "S", text: "Sous la loupe, dans l'étui de maître Haquin : « La porte des Sauniers sera tenue par nos amis la nuit dite. Ne rien tenter contre les autres portes avant le signal. »" },
      iiic_s_date: { rev: "S", text: "Aveline sera sous les murs de Salvèze la nuit de la Grande Basse, quand toute la ville aura les yeux sur la mer, et une porte s'ouvrira du dedans." },
      iiic_s_complice: { rev: "S", text: "Le capitaine Haquin : l'homme qui ouvrira la porte de Salvèze « siège plus haut que tous ceux qui la défendent, et il signe à l'encre rouge »." },
      iiic_s_ducats: { rev: "S", text: "Le capitaine d'Aveline paie ses frais en ducats de Salvèze tout neufs, de la frappe du mois, sortis de la Monnaie de la ville." },
      iiic_s_lettre: { rev: "S", text: "Lettre au capitaine Haquin, sous la loupe : « Notre ami de Salvèze tiendra sa parole si nous tenons la nôtre : la charge de gouverneur, et l'oubli de ses dettes. Ne lui écrivez jamais directement. »" },
      iiic_m_dix: { rev: "M", text: "Tibère, ou l'avis de la République : la voisine d'Odeline a entendu une querelle, ta voix et la sienne, vers dix heures du soir, la nuit des Lanternes. Au Guet, tu as dit ne pas l'avoir vue depuis le matin." },
      iiic_m_porte: { rev: "M", text: "L'ermite de la Baume : « Tu fermes les portes des autres tout doucement, comme quelqu'un qui en a claqué une et qui ne peut plus la rouvrir. »" },
    },
    veils: {
      iiic_registre: { fx: { clue: "iiic_s_courrier", ep: ["perso", 400] } },
      iiic_etui_note: { fx: { clue: "iiic_s_porte", ep: ["perso", 600] } },
      iiic_haquin_date: { fx: { clue: "iiic_s_date", flag: "iiic:invasion", ep: ["perso", 800] } },
      iiic_reinold_date: { fx: { clue: "iiic_s_date", flag: "iiic:invasion", ep: ["perso", 800] } },
      iiic_haquin_complice: { fx: { clue: "iiic_s_complice", flag: "iiic:complice", ep: ["perso", 800] } },
      iiic_ducats: { fx: { clue: "iiic_s_ducats", ep: ["perso", 500] } },
      iiic_lettre_duc: { fx: { clue: "iiic_s_lettre", flag: "iiic:complice", ep: ["perso", 800] } },
      iiic_haquin_vin: { fx: { ep: ["perso", 300] } },
      iiic_fontaine: { fx: { ep: ["perso", 400] } },
      iiic_hub_miroir: { fx: { ep: ["perso", 400] } },
      iiic_chambre_miroir: { fx: { ep: ["perso", 500] } },
      iiic_franchise_dessous: { fx: { flag: "iiic:compte_pierres", ep: ["perso", 600] } },
      iiic_sel: { fx: { ep: ["perso", 300] } },
      iiic_quai_echo: { fx: { ep: ["perso", 400] } },
      iiic_colporteur_duc: { fx: { ep: ["perso", 400] } },
      iiic_cure_concours: { fx: { ep: ["perso", 300] } },
      iiic_ravier_doute: { fx: { ep: ["perso", 300] } },
    },
    quests: [
      { id: "IIIC_vigne", act: "III", kind: "annexe", title: "La vigne de l'Aiguier", start: "IIIC_vignes", echo: ["iiic:vigne=sauvee", "iiic:vigne=payee", "iiic:vigne=perdue"] },
      { id: "IIIC_carriere", act: "III", kind: "annexe", title: "La carrière de la Reine", start: "IIIC_chantier", echo: ["iiic:carriere=rouverte", "iiic:carriere=vendue", "iiic:carriere=gardee"] },
      { id: "IIIC_deserteurs", act: "III", kind: "annexe", title: "Les déserteurs de la Gâche", start: "IIIC_bois", echo: ["iiic:deserteurs=chasses", "iiic:deserteurs=partis", "iiic:deserteurs=allies"] },
      { id: "IIIC_capitaine", act: "III", kind: "annexe", title: "Le marchand qui n'achète rien", start: "IIIC_haquin", echo: ["iiic:capitaine=pris", "iiic:capitaine=libre", "iiic:capitaine=marche", "iiic:invasion"] },
    ],
    routes: [
      { id: "r_mont", name: "Le sentier du Mont", from: "orle", to: "mont", steps: 3, region: "mont",
        label: "Monter au Mont-Taciturne par le sentier des lacets", labelBack: "Descendre à Orle-le-Bourg par le sentier des lacets",
        legs: [
          { step: 1, dir: "aller", passage: "IIIC_leg_terrasses", if: { not: { seen: "IIIC_leg_terrasses" } } },
          { step: 2, dir: "aller", passage: "IIIC_leg_col", if: { not: { seen: "IIIC_leg_col" } } },
          { step: 1, dir: "retour", passage: "IIIC_leg_descente", if: { all: [{ has: "mont:ouverte" }, { not: { seen: "IIIC_leg_descente" } }] } },
        ] },
      { id: "r_carriere", name: "Le chemin des Ânes", from: "orle", to: "iiic_carriere", steps: 1, region: "combes",
        label: "Prendre le chemin des Ânes vers la carrière de la Reine", labelBack: "Descendre à Orle-le-Bourg par le chemin des Ânes" },
    ],
    places: {
      iiic_carriere: { ambiance: "foret", region: "combes", name: "La carrière de la Reine", map: "delta", x: 70, y: 22, arrive: "IIIC_carriere_arrivee", desc: "Une vieille carrière abandonnée au-dessus d'Orle, au bord du bois de la Gâche. On en a tiré la pierre de Sorne." },
    },
    regions: {
      combes: { name: "Les Combes d'Orle", ambiance: "village", chance: 0.5, repeatChance: 0.4,
        events: ["IIIC_ev_taille", "IIIC_ev_brigands", "IIIC_ev_charrette", "IIIC_ev_receveur", "IIIC_ev_colporteur", "IIIC_ev_eclaireurs"],
        quiet: [
          "Le chemin monte entre deux murets de pierre sèche, à hauteur d'épaule, couverts de lichen jaune. De l'autre côté, les ceps, en rangs serrés, taillés court, attendent le printemps. Un lézard se chauffe sur une pierre et ne bouge pas quand tu passes.",
          "Une cabane de vigneron, ronde, en pierre sèche, avec un toit en encorbellement : on y range la serpette et la gourde. La porte est ouverte. Dedans, un banc, une cruche, une odeur de vin aigre et de terre.",
          "En contrebas, Orle fume de toutes ses cheminées. On entend les coups de masse des carriers, la cloche de Saint-Vincent, un chien. Au-dessus, la montagne grise, et le Mont, très haut, qui a l'air de te regarder monter.",
          "Le chemin longe une ancienne carrière, une falaise taillée à angle droit, où les marques des coins de fer sont encore visibles, alignées comme des pas. Des ronces ont poussé au pied. Une chouette dort dans un trou de la paroi.",
        ],
        camp: [
          "Tu fais halte dans une cabane de vigneron, ronde et basse, où il reste un fagot de sarments. Le feu de sarments flambe haut et vite, et sent le vin. La nuit, des renards se disputent dans les vignes.",
          "Tu dors contre un muret, à l'abri du vent, enroulé{e} dans ton manteau. Le ciel est très clair. Au matin, il y a du givre sur les ceps, et ta gourde a gelé.",
        ] },
      mont: { name: "Le sentier du Mont", ambiance: "montagne", chance: 0.6,
        events: ["IIIC_ev_neige", "IIIC_ev_loups", "IIIC_ev_ermite", "IIIC_ev_eboulis", "IIIC_ev_moine", "IIIC_ev_pierre"],
        quiet: [
          "Le sentier monte en lacets serrés, taillé dans la roche, avec une rampe de bois ici et là, usée par des mains. Les dernières vignes sont restées en bas. Ici, il y a des buis, des pins tordus, de la pierre grise, et le vent.",
          "Une croix de bois au bord du sentier, à un tournant, avec un tas de cailloux à son pied : chaque pèlerin en pose un. Tu en poses un. En bas, Orle n'est plus qu'une poignée de toits blonds au bord d'un fil d'eau.",
          "La neige commence par plaques, dans les creux, à l'ombre des rochers, granuleuse et grise. Puis elle couvre le sentier. Des traces de pas la marquent, celles de sandales, régulières, qui montent et redescendent sans jamais s'écarter.",
          "Le vent tombe d'un coup, et dans le silence, de très haut, descend un chant d'hommes, lent, à plusieurs voix, sans paroles qu'on comprenne. Puis le vent revient, et le chant s'en va.",
        ],
        camp: [
          "Tu passes la nuit dans un abri de pèlerins creusé sous un surplomb, avec une banquette de pierre et un anneau pour attacher une bête. Quelqu'un a laissé du bois sec, et un mot gravé dans la roche : *Merci*.",
          "Tu dors mal, contre un rocher, le froid dans le dos. Au milieu de la nuit, une cloche sonne au Mont, une seule fois. Puis plus rien jusqu'à l'aube.",
        ] },
    },
    events: {
      IIIC_ev_taille: { passage: "IIIC_ev_taille", weight: 2 },
      IIIC_ev_brigands: { passage: "IIIC_ev_brigands", weight: 2 },
      IIIC_ev_charrette: { passage: "IIIC_ev_charrette", weight: 2 },
      IIIC_ev_receveur: { passage: "IIIC_ev_receveur", weight: 1 },
      IIIC_ev_colporteur: { passage: "IIIC_ev_colporteur", weight: 2 },
      IIIC_ev_eclaireurs: { passage: "IIIC_ev_eclaireurs", weight: 1 },
      IIIC_ev_neige: { passage: "IIIC_ev_neige", weight: 2 },
      IIIC_ev_loups: { passage: "IIIC_ev_loups", weight: 1 },
      IIIC_ev_ermite: { passage: "IIIC_ev_ermite", weight: 2 },
      IIIC_ev_eboulis: { passage: "IIIC_ev_eboulis", weight: 2 },
      IIIC_ev_moine: { passage: "IIIC_ev_moine", weight: 2 },
      IIIC_ev_pierre: { passage: "IIIC_ev_pierre", weight: 2 },
    },
    shops: {
      iiic_pressoir: { name: "Le comptoir du Pressoir", food: 2, sells: [{ item: "onguent", price: 7 }, { item: "eau_de_vie", price: 3 }, { item: "lanterne", price: 6 }, { item: "corde", price: 3 }] },
    },
    banter: [],
    epilogue: [
      { if: { has: "iiic:vigne=sauvee" }, text: "**Esclarmonde Roustan.** Elle tailla l'Aiguier jusqu'à quatre-vingts ans. Le vin noir de son coteau s'ouvrit dix ans plus tard, comme elle l'avait dit, et elle en but la première bouteille sur le pas de sa cave." },
      { if: { all: [{ has: "iiic:vigne=payee" }, { not: { has: "iiic:vigne=sauvee" } }] }, text: "**Esclarmonde Roustan.** Elle rendit les ducats à la vigne, comme on le lui avait demandé : elle replanta la troisième terrasse de l'Aiguier, et paya ses tailles le jour même où on les lui réclamait." },
      { if: { all: [{ has: "iiic:vigne=perdue" }, { not: { has: "iiic:vigne=sauvee" } }, { not: { has: "iiic:vigne=payee" } }] }, text: "**Esclarmonde Roustan.** La Banque acheta l'Aiguier à la Saint-Georges, à moitié prix. Esclarmonde y tailla trois saisons encore, à la journée, pour le commis qui l'avait acheté." },
      { if: { has: "iiic:registre_vole" }, text: "**Le receveur Ortolan.** Il quitta la Recette d'Orle avant l'été, et le Conseil ne lui confia plus de rôle. Il finit commis aux écritures chez un marchand de sel, et il y tint un seul registre." },
      { if: { has: "iiic:carriere=rouverte" }, text: "**Anthime.** Il mourut l'hiver suivant, la main posée à plat sur le dernier bloc, que les carriers ne taillèrent jamais. La carrière de la Reine fournit la pierre du nouveau quai d'Orle." },
      { if: { has: "iiic:carriere=vendue" }, text: "**La carrière de la Reine.** La Banque y mit un contremaître et un péage. Les carriers d'Orle y travaillèrent à la journée, et cessèrent de chanter en redescendant." },
      { if: { has: "iiic:carriere=gardee" }, text: "**Anthime.** Il mourut l'hiver suivant sans avoir revu la lettre de la reine. Les carriers l'enterrèrent au pied du dernier bloc, avec son maillet." },
      { if: { has: "iiic:deserteurs=allies" }, text: "**Reinold.** Ses quatorze hommes tinrent les gués des Combes au printemps. Il resta ensuite aux Combes, apprit à tailler la vigne, et ne repassa jamais les cols." },
      { if: { has: "iiic:deserteurs=partis" }, text: "**Reinold.** Il descendit au Bec avec ses hommes, dans le sel de *La Patience*, et on perdit sa trace dans les ports du sud. L'hiver suivant, Gilduin Teyssier reçut par un marinier une pièce d'argent à l'aigle, sans un mot." },
      { if: { all: [{ has: "iiic:deserteurs=chasses" }, { not: { has: "iiic:deserteurs=allies" } }, { not: { has: "iiic:deserteurs=partis" } }] }, text: "**Reinold.** Il repassa les cols avec ses hommes. On ne sut jamais si le duc les avait pendus ou oubliés." },
      { if: { has: "iiic:salome_mere" }, text: "**Katell.** Elle mourut à Saint-Privat la Toussaint suivante, son fuseau à la main. Le curé fit graver, sous son nom, celui de sa fille Maïwenn." },
    ],
  },
};
