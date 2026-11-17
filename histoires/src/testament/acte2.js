// Act II · « Les codicilles », shared by both readings unless tagged: the supper, the house at night, the statue's
// key and the second codicil, Aurore's study (the secretary with three flower wheels, the perfume organ and the third
// codicil), what the heirs say and do when they think nobody listens, and two o'clock in the morning.
module.exports = {
  B_souper: { act: "II", title: "Le souper", place: "salon",
    text: [
      "Fine a mis le couvert dans la salle à manger, sous un lustre de verre de Venise qui tinte quand on marche trop fort. Une soupe au pistou, un gigot aux herbes, un fromage de chèvre roulé dans la sarriette, des figues. Personne n'a faim, et tout le monde mange, parce qu'on mange aux veillées funèbres, et parce que c'est très bon.",
      "Le fauteuil du bout de table est vide. Fine y a mis le couvert quand même, par habitude, puis l'a retiré en reniflant, puis l'a remis.",
      "Hector parle pour quatre. Il raconte la Bourse de Marseille, un cheval qui aurait dû gagner, une comtesse qui aurait dû céder. Bérénice coupe sa viande en petits carrés égaux, comme une comptable. Odile ne mange que les figues.",
      { second: false, text: "Au dessert, Hector lève son verre. « À ma tante, qui nous fait chercher son argent comme des enfants cherchent des œufs de Pâques. Que le meilleur gagne. » Il boit. « Ou le plus malin. C'est rarement le même, et c'est toujours moi. »" },
      { second: false, text: "Bérénice repose sa fourchette. « Le plus endetté, plutôt. » Le lustre tinte. Hector sourit, d'un sourire qui ne remonte pas jusqu'aux yeux." },
      { second: true, text: "Ce soir, Hector ne lève pas son verre. Il mange vite, sans parler, en regardant son assiette, et il porte souvent la main gauche à la poche de son gilet, comme on vérifie qu'une montre est toujours là. Maître Brissac, en bout de table, à la place de la morte que personne n'osait prendre, découpe le gigot avec une lenteur de chirurgien." },
    ],
    choices: [
      { label: "Quitter la table", fx: { until: 22 }, to: "B_nuit" },
    ] },

  B_nuit: { act: "II", title: "La Bastide, la nuit", place: "salon", hub: true, backName: "le vestibule",
    text: [
      { first: true, text: "La maison s'endort mal. Les lampes s'éteignent une à une dans les couloirs, et l'ombre monte les escaliers avant les gens. Quelque part, une horloge fait le compte des heures avec un sérieux de chanoine. On entend des portes, des pas, des tiroirs : trois héritiers qui chacun fouillent la maison en faisant semblant d'aller se coucher." },
      { again: true, before: "deuxh", text: "Le vestibule obscur, l'escalier, l'horloge qui compte. Des pas, au-dessus, s'arrêtent quand tu t'arrêtes." },
      { after: "deuxh", text: "Après deux heures, la Bastide tient sa respiration. Plus un pas, plus une porte. Seule l'horloge continue, et elle a l'air de compter à rebours." },
    ],
    choices: [
      { label: "Chercher la réponse au deuxième quatrain", if: "codicille:1", hide: { has: "enigme:q2" }, to: "B_q2" },
      { label: "Chercher la réponse au troisième quatrain", if: "codicille:2", hide: { has: "enigme:q3" }, to: "B_q3" },
      { label: "Entrer dans le bureau de Madame Castellane", to: "B_bureau" },
      { label: "Monter l'escalier, d'où viennent des voix", hide: { seen: "B_escalier" }, to: "B_escalier" },
      { label: "Descendre à la cuisine, où Fine veille", hide: { seen: "B_cuisine" }, to: "B_cuisine" },
      { label: "Chercher Odile", hide: { seen: "B_odile_nuit" }, to: "B_odile_nuit" },
      { label: "Entrer dans la bibliothèque", hide: { seen: "B_bibliotheque" }, to: "B_bibliotheque" },
      { label: "Monter à la chambre de Madame Castellane", hide: { seen: "B_coffret_ouvert" }, to: "B_chambre_aurore" },
      { label: "Aller vers Hector, qui t'attend au tournant du couloir", second: false, if: "codicille:1", hide: { seen: "B_hector_offre" }, to: "B_hector_offre" },
      { label: "Monter jeter un œil dans la chambre d'Hector", second: false, if: "codicille:2", hide: { seen: "B_chambre_hector1" }, to: "B_chambre_hector1" },
      { label: "Aller à la chapelle, où brille une lumière", before: "deuxh", hide: { seen: "B_chapelle_minuit" }, to: "B_chapelle_minuit" },
      { label: "Voir si Fine dort, à la cuisine", if: { seen: "B_cuisine" }, hide: { seen: "B_fine_minuit" }, to: "B_fine_minuit" },
      { label: "Parler franchement à Hector", second: true, hide: { any: [{ seen: "S_hector_r2" }, { has: "hector:confondu" }] }, to: "S_hector_r2" },
      { label: "Donner à Odile la lettre du coffret", second: true, if: { item: "lettre_odile" }, to: "S_odile_lettre" },
      { label: "Demander à Fine comment était la Rose du Jaume, ce printemps-là", second: true, if: { seen: "B_cuisine" }, hide: { seen: "S_fine_r2" }, to: "S_fine_r2" },
      { label: "Aller voir Maître Brissac au salon", second: true, if: "deuxh", hide: { seen: "S_brissac_nuit" }, to: "S_brissac_nuit" },
      { label: "Veiller dans le vestibule jusqu'à deux heures", second: false, if: "codicille:3", hide: { has: "deuxh" }, fx: { until: 2, flag: "deuxh" }, to: "B_deuxh" },
      { label: "Veiller dans le vestibule jusqu'à deux heures", second: true, if: "codicille:3", hide: { has: "deuxh" }, fx: { until: 2, flag: "deuxh" }, to: "S_deuxh" },
      { label: "Monter fouiller la chambre d'Hector pendant qu'il fait ses réussites", second: true, hide: { seen: "S_chambre_hector" }, to: "S_chambre_hector" },
      { label: "Parler à Bérénice de ses lettres", second: true, hide: { seen: "S_berenice_r2" }, to: "S_berenice_r2" },
      { label: "Dire à Odile ce que tu sais d'elle", second: true, if: { any: [{ has: "odile:fille" }, { has: "odile:prenom" }, "enigme:p_journal"] }, hide: { seen: "S_odile_dire" }, to: "S_odile_dire" },
      { label: "Chercher la réponse au quatrième quatrain", if: { all: ["codicille:3", "deuxh"] }, hide: { has: "enigme:q4" }, to: "B_q4" },
    ] },

  B_q2: { act: "II", title: "Le deuxième quatrain", place: "salon", puzzle: "q2",
    text: [
      "Tu déplies le premier codicille sous la lampe du vestibule et tu relis le deuxième quatrain, du bout des lèvres. Une clef, oui. Mais Hector a raison : il y en a partout dans cette maison, aux portes, aux armoires, aux pendules, dans les poches des tabliers.",
    ],
    choices: [
      { back: "B_nuit" },
    ] },

  B_q2_clef: { act: "II", title: "La clef de Flore", place: "jardin",
    text: [
      "*On me pend au cou.* Tu sors dans le jardin sans lanterne, et la nuit te reçoit comme une eau froide. Les iris murmurent. La fontaine bavarde. Au rond-point, Flore t'attend, sa clef de fer pendue à son cou de pierre.",
      "Tu la détaches. Le ruban de fer cède avec un grincement de vieille charnière. La clef est lourde, froide, et sa tige est creuse.",
      "Tu fais le tour du socle. Sur la face qui regarde la maison, entre deux guirlandes de pierre, un trou de serrure que le lichen avait presque bouché. Tu te rappelles trois petits coups de canne, tous les soirs, comme on frappe à une porte.",
    ],
    choices: [
      { label: "Ouvrir le socle", to: "B_socle" },
    ] },

  B_socle: { act: "II", title: "Le socle", place: "jardin",
    fx: { item: "codicille2", flag: "codicille:2", ep: ["histoire", 200] },
    text: [
      "La clef tourne avec un bruit de dents qu'on serre. Une petite porte de pierre, découpée dans le socle, pivote sur des gonds invisibles. Dedans, au sec, dans une niche grande comme une boîte à chapeau : un étui de fer, et rien d'autre, à part une famille de cloportes qui proteste contre l'intrusion.",
      "Dans l'étui, un papier roulé. *Deuxième codicille. À Fine, ma cuisinière, je laisse mes casseroles de cuivre et cent livres. Elle sait déjà quoi en faire.*",
      "Et dessous, le troisième quatrain.",
      "Une fenêtre s'éclaire, au premier étage de la Bastide. Une silhouette s'y découpe, immobile. Le temps que tu lèves les yeux, la lampe s'éteint.",
    ],
    choices: [
      { back: "B_nuit" },
    ] },

  B_q3: { act: "II", title: "Le troisième quatrain", place: "salon", puzzle: "q3",
    text: [
      "Le troisième quatrain, sous la lampe. *Dans un flacon je dors.* Odile est apparue dans l'encadrement de la porte du salon, sans bruit, comme elle apparaît toujours. Elle écoute.",
    ],
    choices: [
      { back: "B_nuit" },
    ] },

  B_q3_parfum: { act: "II", title: "Le parfum", place: "bureau",
    text: [
      "« Un parfum », dis-tu.",
      "Odile hoche la tête une fois. « L'orgue, dit-elle. Dans le bureau. Elle n'aurait rien caché ailleurs. » Elle prend une bougie sur la console et passe devant toi, et tu la suis dans le couloir, guidé{e} par la flamme et par l'odeur d'iris qui flotte derrière elle comme une traîne.",
    ],
    choices: [
      { label: "Suivre Odile jusqu'à l'orgue à parfums", to: "B_orgue" },
    ] },

  B_bureau: { act: "II", title: "Le bureau de Madame Castellane", place: "bureau", hub: true, backName: "le bureau",
    text: [
      { first: true, text: "Le bureau de Madame Castellane est une pièce ronde, au fond de la maison, tapissée de livres jusqu'au plafond. Il y fait plus froid qu'ailleurs, d'un froid de cave ou de chapelle, et l'odeur est d'une intensité qui serre la gorge : cent essences mêlées, la rose, l'ambre, le cuir, la fleur d'oranger, et sous toutes, l'iris, comme un bourdon d'orgue sous un cantique." },
      { first: true, text: "Contre le mur du fond, l'orgue à parfums : un meuble en gradins, en demi-cercle, où des dizaines de flacons de cristal s'alignent sur des tablettes étagées, comme les tuyaux d'un instrument. Devant la fenêtre, un secrétaire de bois de rose, fermé. Sur l'abattant, une serrure à trois roues de porcelaine peinte." },
      { again: true, text: "Le bureau rond, les livres, l'orgue aux flacons de cristal, le secrétaire de bois de rose. Le froid, et l'odeur." },
    ],
    choices: [
      { label: "Examiner l'orgue à parfums", hide: { all: [{ seen: "B_orgue" }, { not: "enigme:q3" }] }, to: "B_orgue" },
      { label: "Tourner les roues du secrétaire", hide: { has: "enigme:p_secretaire" }, to: "B_secretaire" },
      { label: "Demander à Odile ce qu'elle sent, devant l'orgue", if: { seen: "B_orgue" }, hide: { seen: "B_odile_nez" }, to: "B_odile_nez" },
      { back: "B_nuit" },
    ] },

  B_orgue: { act: "II", title: "L'orgue à parfums", place: "bureau",
    fx: { clue: "i_orgue", meet: ["odile"] },
    text: [
      "De près, l'orgue est un monde. Vingt-six grands flacons sur la tablette du bas, bouchés à l'émeri, chacun marqué d'une étiquette d'écriture ronde et d'un chiffre peint en noir : *1, Ambre. 2, Benjoin. 3, Cannelle. 4, Davana. 5, Encens.* Au-dessus, sur les tablettes étagées, des centaines de petites fioles, des absolues, des teintures, rangées selon une loi que toi seul{e} ignores ici.",
      { if: { has: "passe:nez" }, text: "Tu reconnais les flacons, l'un après l'autre, comme on reconnaît de vieux camarades de classe qui vous ont battu : tu les as débouchés cent fois dans ta parfumerie d'apprenti, et ils ne t'ont jamais rien dit." },
      "Odile passe le doigt sur les bouchons, sans les toucher, comme une pianiste qui caresse les touches avant de jouer. « Vingt-six, dit-elle, rangés comme les lettres de l'alphabet. Ambre le premier, Benjoin le deuxième, Cannelle le troisième, jusqu'au Zeste. Madame disait qu'on écrit un parfum comme on écrit un mot. Qu'il faut connaître ses lettres avant de faire des phrases. »",
      { if: "enigme:q3", text: "Au centre de l'orgue, à la place d'honneur, sur un petit socle d'argent, un flacon à part, plus petit, taillé en goutte : *Aurore.*" },
    ],
    choices: [
      { label: "Prendre le flacon Aurore", if: "enigme:q3", hide: { has: "codicille:3" }, to: "B_flacon" },
      { back: "B_bureau" },
    ] },

  B_flacon: { act: "II", title: "Le flacon Aurore", place: "bureau",
    fx: { item: "codicille3", flag: "codicille:3", ep: ["histoire", 200] },
    text: [
      "Le flacon est vide de parfum. Il en garde la mémoire, si forte qu'en le débouchant tu crois sentir la morte entrer dans la pièce : de l'iris poudré, une violette, un fond de musc tiède comme une peau. Odile ferme les yeux. Une larme passe sous sa paupière, et elle ne l'essuie pas.",
      "Au fond du flacon, roulé serré, un papier. Tu le fais glisser avec une épingle à cheveux qu'Odile te tend sans un mot.",
      "*Troisième codicille. À Bérénice, ma nièce, je laisse ma bibliothèque. Qu'elle y lise autre chose que des psaumes.*",
      "Et dessous, le quatrième quatrain. Le dernier.",
      { second: false, text: "Un froissement de soie, à la porte du bureau. Hector est appuyé au chambranle, un bougeoir à la main. Depuis combien de temps ? Il a lu le quatrain par-dessus ton épaule, tu le vois à ses lèvres qui bougent encore. « Le dernier, dit-il doucement. Comme c'est émouvant. » Il s'en va sans attendre de réponse." },
      "« Il sera à vous de dire à qui », dit Odile. Elle repose le flacon sur son socle d'argent, exactement à sa place, d'un geste qu'elle a dû faire mille fois.",
    ],
    choices: [
      { back: "B_bureau" },
    ] },

  B_secretaire: { act: "II", title: "Le secrétaire", place: "bureau", puzzle: "p_secretaire",
    text: [
      "Tu t'agenouilles devant le secrétaire de bois de rose. Les trois roues de porcelaine tournent sans bruit sous ton pouce, et à chaque cran une fleur peinte remplace une autre, avec la régularité d'une pendule.",
    ],
    choices: [
      { back: "B_bureau" },
    ] },

  B_secretaire_ouvert: { act: "II", title: "Le carnet vert", place: "bureau",
    text: [
      "L'abattant s'abaisse en douceur. Les casiers sont en ordre parfait : des factures liées par année, des lettres de fournisseurs, des échantillons de cire à cacheter lilas. Rien qui ressemble à un codicille.",
      "Dans le petit tiroir du milieu, seul, un carnet de maroquin vert, usé aux coins. Des formules, page après page, de cette écriture nette qui ne rature jamais : *Rose de mai, 12 gouttes. Ambre gris, 3. Iris, une heure de patience.* Des dates, des essais, des échecs barrés d'un trait.",
      "À la dernière page, un titre souligné deux fois : *Formule de l'Aurore, la vraie.* Et dessous, aucune essence, aucune goutte. Une ligne de nombres.",
    ],
    choices: [
      { label: "Déchiffrer la ligne de nombres", hide: { has: "enigme:p_journal" }, to: "B_journal" },
      { back: "B_bureau" },
    ] },

  B_journal: { act: "II", title: "La vraie formule", place: "bureau", puzzle: "p_journal",
    text: [
      "Tu approches le carnet de la bougie. Treize, un, six, neuf, douze, douze, cinq. Aucune formule au monde ne demande douze gouttes de la même chose deux fois de suite.",
    ],
    choices: [
      { back: "B_secretaire_ouvert" },
    ] },

  B_escalier: { act: "II", title: "Des voix dans l'escalier", place: "salon",
    fx: { clue: "i_hector_dettes" },
    text: [
      "Tu montes trois marches dans le noir, et tu t'arrêtes. Au palier du premier, deux voix, une d'homme, une de femme, assourdies par la tenture.",
      "« …trois mille livres au Cercle, avant la fin du mois, dit Hector, et il n'a plus rien de rieur. Sinon, c'est la prison. Ou pire : la province. — Tu aurais dû y penser avant de jouer la maison de ta mère, dit Bérénice. — Ma mère est morte, et sa maison aussi. Il me reste celle-ci. »",
      "Un silence. Puis Bérénice, plus bas : « Je prierai pour toi. — Prie plutôt pour que le clerc sache lire. »",
      "Une porte se ferme. Tu redescends sur la pointe des pieds, avec l'impression désagréable d'avoir été désigné{e} par ta fonction, une fois de plus.",
    ],
    choices: [
      { back: "B_nuit" },
    ] },

  B_cuisine: { act: "II", title: "La cuisine", place: "salon",
    text: [
      "Fine veille dans la cuisine, sur une chaise basse, devant le potager où une marmite de bouillon frissonne pour personne. Elle t'offre un bol sans te demander ton avis, et tu le prends sans lui donner le tien.",
      "« Trente ans que je suis là, dit-elle, et un peu plus. Je suis entrée l'année où Madame est partie à Gênes. Six mois, elle est restée, chez une cousine, pour sa santé. Elle est revenue maigre comme un clou, et toute pâle, et elle a plus jamais remis de corset. » Fine remue son bouillon. « Ce printemps-là, la femme du Jaume a eu une petite. Enfin, a eu. Elle avait quarante-cinq ans, la pauvre Rose, et elle avait jamais rien eu avant. Un miracle, a dit le curé. Le curé a toujours le mot pour les miracles. »",
      "Elle te regarde boire, satisfaite. « Moi, je dis rien. Je fais la soupe. »",
    ],
    choices: [
      { back: "B_nuit" },
    ] },

  B_odile_nuit: { act: "II", title: "Odile, à la fenêtre", place: "salon",
    text: [
      "Tu trouves Odile dans le petit salon du premier, assise sur le rebord de la fenêtre ouverte, une couverture sur les épaules. La nuit entre par la fenêtre avec l'odeur des champs, et Odile la respire comme on boit.",
      "« Je partirai demain, dit-elle sans se retourner. Quoi qu'il arrive. On m'a proposé une place à Grasse, chez un parfumeur qui veut un nez. Je n'aurai plus de maîtresse à qui faire la lecture. » Elle sourit à la nuit. « Ce sera bien. Je crois. »",
      "Tu lui demandes ce qu'elle espère, ce soir.",
      "« Rien. Je ne suis pas sur le testament. Je ne suis pas de la famille. » Elle lève une main, la laisse retomber. « Elle m'a appris à sentir. C'est un héritage. Celui-là, personne ne peut me le prendre, même avec un codicille. »",
    ],
    choices: [
      { back: "B_nuit" },
    ] },

  B_bibliotheque: { act: "II", title: "La bibliothèque", place: "salon",
    text: [
      "La bibliothèque de la Bastide est une longue galerie aux fenêtres hautes, où des milliers de livres dorment debout comme des chevaux. Des traités de chimie, des herbiers, des récits de voyage aux Indes, des romans anglais, Rabelais, Montaigne, et une collection complète de l'*Almanach des énigmes* depuis cinquante ans, reliée en veau, annotée au crayon dans les marges.",
      "Tu en ouvres un au hasard. Dans la marge, à côté d'une devinette, de la main de Madame Castellane : *trop facile, deux sens au moins ou rien.* Dans un autre : *une réponse pour les sots, une pour les autres.*",
      { if: "codicille:3", text: "Bérénice est là, debout devant les rayonnages, son chapelet pendant, immobile, comme une femme qui découvre qu'on lui a légué une forêt. Elle prend un volume, le feuillette, le repose. « Rabelais, dit-elle avec dégoût. Montaigne. » Puis, plus bas : « Elle savait que je les lirais. C'est ça le pire. »" },
    ],
    choices: [
      { back: "B_nuit" },
    ] },

  B_q4: { act: "II", title: "Le quatrième quatrain", place: "salon", puzzle: "q4",
    text: [
      "Le dernier quatrain, sous la lampe du vestibule. Les lettres dansent un peu. Il est tard, et toute la maison écoute.",
    ],
    choices: [
      { back: "B_nuit" },
    ] },

  B_deuxh: { act: "II", title: "Deux heures", place: "salon", second: false,
    text: [
      "Tu t'assois sur la banquette du vestibule, dans le noir, et tu attends. L'horloge compte. La maison craque, se tasse, soupire comme un vieillard qui cherche une position pour dormir.",
      "À deux heures moins le quart, un pas dans l'escalier. Une silhouette descend sans lumière, traverse le vestibule à deux pas de toi sans te voir, ouvre la porte du jardin, et sort. Tu reconnais le gilet de soie au froissement qu'il fait.",
      "À deux heures, une lueur de bougie sous la porte du bureau. Tu entrebâilles : Bérénice, en robe de chambre, fouille le tiroir des lettres reçues du secrétaire de la console, à toute vitesse, en lisant les adresses du bout des lèvres.",
    ],
    choices: [
      { label: "Suivre la silhouette au jardin", to: "B_hector_jardin" },
      { label: "Entrer dans le bureau et surprendre Bérénice", to: "B_berenice_nuit" },
    ] },

  B_hector_jardin: { act: "II", title: "Le jardin à deux heures", place: "jardin", second: false,
    text: [
      "Tu sors dans le jardin. La lune s'est levée, mince, et elle fait des allées de buis des couloirs d'argent. Personne. La fontaine bavarde. Les iris ont l'air de dormir debout.",
      "Tu fais le tour du rond-point, de l'orangerie, de la terrasse. Rien. Puis une odeur de tabac. Hector est assis sur la margelle du cadran solaire, un cigare à la main, le visage tourné vers les étoiles, l'air d'un poète qui attend une rime.",
      "« Une nuit trop belle pour dormir, dit-il sans se retourner. Vous aussi, vous cherchez ? » Il tire sur son cigare. « Moi, j'ai renoncé. J'attends que vous trouviez pour moi. C'est plus reposant. »",
      "Il a de la terre au genou de son pantalon clair. Il voit ton regard, et il épousette sa jambe avec une moue. « Ces allées. On s'y tord les chevilles. »",
    ],
    choices: [
      { back: "B_nuit" },
    ] },

  B_berenice_nuit: { act: "II", title: "Bérénice dans le bureau", place: "bureau",
    fx: { clue: "i_berenice_nuit" },
    text: [
      "Bérénice sursaute si fort que sa bougie s'éteint. Dans le noir, tu l'entends respirer, vite, comme un oiseau dans une main.",
      "Tu rallumes. Elle tient serré contre sa poitrine un paquet de lettres attachées d'une ficelle. « Ce sont les miennes, dit-elle. Celles que je lui ai écrites. Vingt ans de lettres. Je lui demandais de l'argent pour mes œuvres, et je lui faisais la morale dans la même phrase. Elle ne m'a jamais répondu. » Sa voix se casse. « Je ne voulais pas que le neveu les lise. Je ne voulais pas que vous les lisiez. Je ne voulais pas qu'on sache qu'elle les avait gardées. »",
      "Elle te regarde, droite, défaite. « Elle les avait gardées. Toutes. Rangées par date. »",
    ],
    choices: [
      { back: "B_nuit" },
    ] },
};
