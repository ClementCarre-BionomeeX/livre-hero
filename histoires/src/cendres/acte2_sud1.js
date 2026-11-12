// Act II · the southern company, chapter 1, "La route de Vasselin": down the valley behind the queen's cortège, into the
// capital, where Mordace has moved into the Tower of the royal Archives and a tournament is announced. Lisandre leads
// ("tu"); the others appear by name when they walk with her.
var S = { act: "II", noLead: true };
function P(o) { return Object.assign({}, S, o); }
var WANTED = { all: [{ present: "ysolde" }, { any: [{ has: "ysolde:voie=deserte" }, { has: "nuit:ysolde=caves" }] }] };
module.exports = {
  II_S_depart: P({ title: "Vers le sud", place: "collines",
    text: [
      "La route du sud redescend vers la Pallante et la suit. Trois jours jusqu'à Vasselin, à pied. Tu as fait le chemin inverse il y a une semaine, en voiture, avec des coussins et une joueuse de flûte qui ronflait.",
      "Tu as gardé ta robe de cour. Elle est déchirée à l'ourlet et tachée d'herbe, et tu as noué tes souliers à ta ceinture. À Vasselin, une robe de cour ouvre plus de portes qu'une épée.",
      { with: "enfant", text: "L'enfant de Sauvelune marche à côté de toi et pose des questions sur la capitale. Combien de gens ? Combien de rues ? Est-ce que la mer est vraiment salée ? Tu réponds à tout. Ça fait passer la route." },
      { with: "ysolde", text: "Ysolde marche devant, sans se retourner. C'est elle qui choisit les haltes. Personne ne le lui a demandé, et personne ne le lui conteste." },
      { with: "pie", text: "Pie a volé un chapeau de paille quelque part avant le premier village. Il le porte de travers et sifflote. Il dit qu'il n'a jamais vu la mer, et qu'il n'est pas pressé." },
      { with: "hylas", text: "Maître Hylas marche lentement. Il a demandé qu'on lui décrive la vallée, et tu le fais, comme tu le ferais d'une chanson : les vignes, les toits rouges, la rivière verte." },
      { with: "rodric", text: "Rodric porte sa hache sur l'épaule et regarde chaque village comme un endroit à défendre ou à prendre. Il ne sait pas encore lequel." },
      { with: ["linette", "pie"], text: "Linette marche à côté de son frère, en robe grise. Elle lit les bornes à voix basse, une à une, comme on lit des cotes." },
      { with: "linette", without: "pie", text: "Linette marche un peu à l'écart, en robe grise. Elle lit les bornes à voix basse, une à une, comme on lit des cotes." },
    ],
    choices: [{ label: "Descendre la vallée de la Pallante", travel: "r_ii_sud" }] }),

  II_S_village: P({ title: "L'enseigne blanche", place: null,
    fx: { flag: "sud:village_blanc" },
    text: [
      "Le premier village s'appelait quelque chose. Tu y es passée avec la cour, il y a huit jours ; les gens sont sortis sur le pas de leur porte pour voir passer la reine, et un enfant a lancé des fleurs dans ta voiture.",
      "L'enseigne de l'auberge est peinte en blanc. Pas repeinte : blanchie, comme si le nom avait coulé. La borne, à l'entrée, aussi. Sur le fronton du temple, les lettres gravées sont toujours là, mais elles sont pleines de neige, en juillet, et la neige ne fond pas.",
      "L'aubergiste sert à boire. Il est aimable, un peu lent. Quand tu lui demandes le nom du village, il sourit, ouvre la bouche, et la referme.",
    ],
    choices: [
      { label: "Chercher le nom ailleurs : un registre de baptêmes, une lettre, une marque sur un tonneau", test: { dom: "savoir", label: "Recherche", help: [{ if: { present: "hylas" }, v: 15 }, { if: { present: "linette" }, v: 10 }] },
        win: { fx: { flag: "sud:village_nomme", ep: ["perso", 600] }, to: "II_S_village_nom" },
        lose: { to: "II_S_village_rien" } },
      { label: "Leur en donner un. N'importe lequel. Un village ne peut pas rester sans nom", fx: { flag: "sud:village_rebaptise", ep: ["perso", 300] }, to: "II_S_village_neuf" },
      { label: "Boire et repartir", to: "@route" },
    ] }),

  II_S_village_nom: P({ title: "Ormeaux", place: null,
    text: [
      "Sur le fond d'une barrique, dans la cave, au fer rouge : *Ormeaux, cuvée de l'an 412.*",
      "Tu remontes. Tu dis le nom à l'aubergiste. Il le répète, une fois, deux fois. Puis il va le dire à sa femme, et sa femme sort dans la rue pour le dire aux voisins. Quand vous repartez, on l'entend partout, de porte en porte, comme une nouvelle.",
      "Sur l'enseigne, rien n'est revenu.",
    ],
    choices: [{ label: "Reprendre la route", to: "@route" }] }),

  II_S_village_rien: P({ title: "Rien", place: null,
    text: ["Les registres du temple sont blancs. Les lettres, au fond des tiroirs, sont adressées à des gens d'ici, dans un village dont le nom est un blanc. Même la marque des tonneaux a été rabotée par quelque chose. Tu remontes de la cave les mains vides. L'aubergiste t'offre un autre verre."],
    choices: [{ label: "Reprendre la route", to: "@route" }] }),

  II_S_village_neuf: P({ title: "Un nom neuf", place: null,
    text: [
      "Tu montes sur la margelle du puits et tu dis, assez fort pour toute la rue : « Ce village s'appelle Bellefeuille. » C'est le premier mot qui t'est venu. Il y a un tilleul sur la place.",
      "Les gens se regardent. Puis l'aubergiste dit : « Bellefeuille », et ça a l'air de lui plaire. Une vieille femme secoue la tête et rentre chez elle sans rien dire.",
      { with: "hylas", text: "Hylas, sur le banc, a les mains crispées sur sa canne. « On ne fait pas ça, dit-il très bas. Ça s'appelle une cession. »" },
    ],
    choices: [{ label: "Reprendre la route", to: "@route" }] }),

  II_S_cortege: P({ title: "Le cortège", place: null,
    text: [
      "Vous rattrapez la cour au deuxième jour, au gué de Marsanne. Elle avance lentement : quarante voitures, deux cents cavaliers, les chariots des cuisines, les musiciens. Personne ne chante. Les bannières pendent.",
      { if: { has: "nuit:ysolde=reine" }, text: "La voiture de la reine est fermée, rideaux tirés. Huit gardes l'entourent à cheval, l'épée au clair, et ils regardent les bas-côtés comme si la neige allait en sortir." },
      { if: { not: { has: "nuit:ysolde=reine" } }, text: "La voiture de la reine est ouverte. Isaure y est assise, droite, sans couronne, et regarde les vignes. De loin, on croirait qu'elle sourit." },
      "Derrière elle, à la place qui revient d'ordinaire au chancelier, une voiture noire, sans armes, aux rideaux de cuir. Quatre gardes en noir marchent à côté, à pied. Ils ne transpirent pas.",
      { if: { has: "lisandre:disgrace" }, text: "Dans la voiture des musiciens, quelqu'un te reconnaît sur le bas-côté et détourne les yeux." },
      { if: { not: { has: "lisandre:disgrace" } }, text: "Dans la voiture des musiciens, le joueur de harpe te reconnaît sur le bas-côté. Il ouvre la bouche, puis regarde la voiture noire, et se tait." },
    ],
    choices: [
      { label: "Approcher la voiture noire, à la halte de midi", test: { dom: "discretion", label: "Approche", help: [{ if: { present: "pie" }, v: 15 }] },
        win: { fx: { flag: "sud:coffre_vu", clue: "n_coffre_fer", ep: ["perso", 800] }, to: "II_S_coffre" },
        lose: { fx: { flag: "sud:repere" }, to: "II_S_repere" } },
      { label: "Approcher la voiture des dames et chercher Ermengarde", hide: { has: "lisandre:disgrace" }, fx: { flag: "sud:ermengarde_gue" }, to: "II_S_gue" },
      { label: "Les laisser passer, cachés dans les vignes", to: "@route" },
    ] }),

  II_S_coffre: P({ title: "La voiture noire", place: null,
    text: [
      "À midi, la cour s'arrête sous les platanes du gué. Les gardes noirs ne mangent pas. Ils restent debout autour de la voiture, mais ils ne regardent que la route, et pas les vignes.",
      "Par la fente d'un rideau de cuir, tu vois l'intérieur. Mordace n'y est pas. Il y a un banc, une écritoire fixée au plancher, et, sous le banc, un coffre de fer noir, cerclé, de la taille d'un enfant couché. Trois serrures. Pas une seule armoirie.",
      "Le coffre est couvert de givre.",
    ],
    choices: [{ label: "T'éclipser avant que la cour ne reparte", to: "@route" }] }),

  II_S_repere: P({ title: "Un garde noir", place: null,
    text: [
      "Tu as fait trois pas hors des vignes quand l'un des gardes noirs tourne la tête vers toi. Il ne crie pas. Il ne bouge pas. Il te regarde, simplement, d'un regard qui n'a rien derrière.",
      "Tu recules. Il te laisse reculer. À la halte du soir, il a quitté sa place à côté de la voiture. Tu ne sais pas où il est allé.",
    ],
    choices: [{ label: "Reprendre la route, plus vite", to: "@route" }] }),

  II_S_gue: P({ title: "Dame Ermengarde", place: null,
    text: [
      "Ermengarde descend de voiture pour se dégourdir les jambes, et vient se poster à côté de toi, au bord de l'eau, sans te regarder.",
      "« Tu as l'air d'une mendiante, dit-elle. Ça te va bien. » Puis, plus bas : « Ne viens pas au palais par la grande porte. Viens par les cuisines, le soir, je dirai qu'on te laisse passer. Il y a des choses que je ne peux pas dire ici. »",
      "Elle remonte en voiture. La cour repart.",
    ],
    choices: [{ label: "Reprendre la route", to: "@route" }] }),

  II_S_porte: P({ title: "La porte de Mer", place: null,
    fx: { questSeen: "II_S_tournoi" },
    text: [
      "Vasselin, au soir du troisième jour. Les murailles blanches, les tours rondes, et derrière, la forêt de mâts sur la mer. La cour est entrée la veille. Sur la porte, on a cloué des affiches neuves : *Grand Tournoi de la Paix, dans dix jours, sur le pré du Roi. Au vainqueur, une grâce de la main de la reine.*",
      { if: WANTED, text: "À côté, une autre affiche, avec un portrait au fusain, assez mauvais pour qu'on puisse en rire et assez bon pour qu'on n'en rie pas : *Ysolde, dite de Brenne, déserteuse. Récompense.*" },
      "Aux portes, la garde contrôle les entrants, un par un. On demande les noms. On les écrit dans un registre.",
    ],
    choices: [
      { label: "Te présenter comme ce que tu es : la chanteuse de la reine, et sa suite", hide: { has: "lisandre:disgrace" }, test: { dom: "social", label: "Aplomb", help: [{ if: WANTED, v: -20 }] },
        win: { fx: { ep: ["perso", 400] }, to: "@route" },
        lose: { to: "II_S_porte_mer" } },
      { label: "Laisser Pie fabriquer un laissez-passer avec ce qu'il a dans ses poches", hide: { not: { present: "pie" } }, test: { dom: "discretion", label: "Faux", help: [{ if: { item: "faux_sceau" }, v: 20 }] },
        win: { fx: { flag: "sud:faux_passe", ep: ["perso", 400] }, to: "@route" },
        lose: { to: "II_S_porte_mer" } },
      { label: "Passer par la grève, au pied des remparts, à marée basse. Tu le faisais, enfant", to: "II_S_porte_mer" },
    ] }),

  II_S_porte_mer: P({ title: "La grève", place: null,
    text: [
      "La mer s'est retirée et laisse, sous la muraille du port, une bande de sable noir et d'algues. Tu la connais. À douze ans, tu passais par là pour rentrer après le couvre-feu, tes souliers à la main, comme aujourd'hui.",
      "L'eau vous arrive aux genoux, puis à la taille. Au bout, une poterne de pêcheurs, jamais fermée, parce que personne à la garde ne sait qu'elle existe.",
      { if: { all: [{ present: "hylas" }, { present: "rodric" }] }, text: "Hylas se fait porter par Rodric sur les derniers pas. Il n'en dit rien, ni avant ni après." },
    ],
    choices: [{ label: "Entrer dans Vasselin", fx: { flag: "sud:entree_greve" }, to: "@route" }] }),

  II_S_vasselin: P({ title: "Vasselin", place: "vasselin", hub: true,
    text: [
      { first: true, text: "Vous prenez deux chambres à l'Ancre, une auberge de mariniers derrière la halle aux poissons, où personne ne vient de la cour. La patronne te regarde longtemps, puis ne pose pas de questions." },
      "Vasselin est comme tu l'as laissée, et pas tout à fait. Les cloches sonnent les heures. Les marchands crient. Mais on parle bas, aux carrefours, et chaque soir, un peu plus de gens s'arrêtent au milieu d'une phrase et regardent le nord.",
      "Au-dessus des toits, dans la haute ville, la Tour des Archives royales. Il y a de la lumière à toutes les fenêtres, la nuit comme le jour.",
    ],
    choices: [
      { label: "Retrouver Ermengarde, aux cuisines du palais", to: "II_S_ermengarde", hide: { seen: "II_S_ermengarde" } },
      { label: "Le pré du Roi, où l'on monte les tribunes du tournoi", to: "II_S_tournoi", hide: { seen: "II_S_tournoi" } },
      { label: "La halle aux poissons, où ta mère tenait un étal", to: "II_S_port", hide: { seen: "II_S_port" } },
      { label: "Suivre Pie, qui cherche les voleurs de la ville", hide: { any: [{ seen: "II_S_mouettes" }, { not: { present: "pie" } }] }, to: "II_S_mouettes" },
      { label: "Ysolde, qui regarde le palais depuis la fenêtre", hide: { any: [{ seen: "II_S_ysolde" }, { not: { present: "ysolde" } }] }, to: "II_S_ysolde" },
      { label: "Accompagner Hylas jusqu'au pied de la Tour des Archives", hide: { any: [{ seen: "II_S_hylas" }, { not: { present: "hylas" } }] }, to: "II_S_hylas" },
      { label: "L'enfant de Sauvelune, sur le quai", hide: { any: [{ seen: "II_S_enfant" }, { not: { present: "enfant" } }] }, to: "II_S_enfant" },
      { label: "La place aux Herbes, où les Gonfaloniers montent leur tréteau", hide: { seen: "II_Q_troupe" }, to: "II_Q_troupe" },
      { label: "La halle, où l'on parle des naufrages de la Pointe", hide: { seen: "II_Q_phare" }, to: "II_Q_phare" },
      { label: "La verrerie du quai des Cordiers", hide: { any: [{ seen: "II_Q_fioles" }, { not: { any: [{ has: "sud:fioles_piste" }, { has: "sud:passeur_parle" }] } }] }, to: "II_Q_fioles" },
      { label: "L'enfant de Sauvelune, à la fenêtre, face à la mer", hide: { any: [{ seen: "II_VS_enfant" }, { not: { present: "enfant" } }] }, to: "II_VS_enfant" },
      { label: "Ysolde, qui recoud son gambison", hide: { any: [{ seen: "II_VS_ysolde" }, { not: { present: "ysolde" } }] }, to: "II_VS_ysolde" },
      { label: "Pie, qui triche aux dés contre lui-même", hide: { any: [{ seen: "II_VS_pie" }, { not: { present: "pie" } }] }, to: "II_VS_pie" },
      { label: "Lire l'almanach à Hylas", hide: { any: [{ seen: "II_VS_hylas" }, { not: { present: "hylas" } }] }, to: "II_VS_hylas" },
      { label: "Suivre Rodric à la taverne des marins corvannais", hide: { any: [{ seen: "II_VS_rodric" }, { not: { present: "rodric" } }] }, to: "II_VS_rodric" },
      { label: "Linette, qui a trouvé ton cahier de chansons", hide: { any: [{ seen: "II_VS_linette" }, { not: { present: "linette" } }] }, to: "II_VS_linette" },
      { label: "Sur le quai du bassin, un attroupement", hide: { seen: "II_Q_bassin" }, to: "II_Q_bassin" },
      { label: "La rue Basse, chez le luthier qui a fait ton luth", hide: { seen: "II_Q_luthier" }, to: "II_Q_luthier" },
      { label: "La corderie, au bout du quai des Cordiers", hide: { seen: "II_S_corderie" }, to: "II_S_corderie" },
      { label: "La chapelle blanche, sur la jetée", hide: { seen: "II_S_exvoto" }, to: "II_S_exvoto" },
      { label: "La galère grise, au fond du bassin", hide: { any: [{ seen: "II_G_quai" }, { not: { seen: "II_S_port" } }] }, to: "II_G_quai" },
      { label: "Le crieur des morts, samedi soir", hide: { any: [{ seen: "II_Q_crieur" }, { not: { seen: "II_S_ermengarde" } }] }, to: "II_Q_crieur" },
      { label: "Rentrer à l'Ancre pour la nuit", if: { all: [{ seen: "II_S_ermengarde" }, { seen: "II_S_tournoi" }] }, why: "Pas avant d'avoir vu Ermengarde et le pré du Roi.", to: "II_S_nuit", big: true },
    ] }),

  II_S_ermengarde: P({ title: "Les cuisines", place: "vasselin",
    fx: { meet: "ermengarde", questSeen: "II_S_archives" },
    text: [
      { if: { has: "sud:ermengarde_gue" }, text: "On te laisse passer aux cuisines, comme elle l'avait dit. Ermengarde t'attend dans le cellier, entre les jambons, une chandelle à la main." },
      { if: { not: { has: "sud:ermengarde_gue" } }, text: "Tu passes par les cuisines, où une marmitonne te reconnaît et te laisse entrer pour un baiser sur la joue. Ermengarde arrive un quart d'heure plus tard, dans le cellier, entre les jambons, une chandelle à la main. Elle n'a pas l'air surprise." },
      "« Il a pris la Tour des Archives, dit-elle. Le Greffier-Majeur. Le lendemain de notre retour. La reine a signé. Il a renvoyé les archivistes, sauf deux, qui ne descendent plus. Il a fait monter son coffre de fer dans la grande salle, par six hommes, avec des cordes. Il n'en sort pas. »",
      "« La reine dort. Le jour. Elle se réveille à la nuit, elle demande qui elle est, on le lui dit, elle demande Mordace, et il vient. Ils parlent jusqu'à l'aube. Le matin, elle signe. »",
      { if: { has: "lisandre:lettre" }, text: "Tu ne lui parles pas de la lettre au sceau noir. Elle te regarde comme si elle savait que tu ne lui en parles pas." },
      { if: { has: "lisandre:disgrace" }, text: "« Et toi, tu es bannie de la cour, dit-elle encore. Elle l'a dit à Pallanche, avant la nuit. Elle ne s'en souvient sûrement plus. Mais lui, oui. »" },
      "« Le tournoi, c'est lui aussi. Il a dit à la reine que le peuple avait besoin de fête. Le vainqueur reçoit sa grâce dans la grande salle des Archives, devant le coffre. Je ne sais pas pourquoi là. »",
    ],
    choices: [
      { label: "« Fais-moi entrer dans la Tour. »", to: "II_S_ermengarde_non" },
      { label: "« Qu'est-ce qu'elle signe, le matin ? »", test: { dom: "social", label: "Confiance", help: [{ if: { not: { has: "lisandre:disgrace" } }, v: 10 }, { if: { has: "lisandre:surprise" }, v: 10 }] },
        win: { fx: { flag: "sud:cessions_reine", clue: "n_cessions_reine", ep: ["perso", 800] }, to: "II_S_ermengarde_signe" },
        lose: { to: "II_S_ermengarde_non" } },
    ] }),

  II_S_ermengarde_non: P({ title: "Les clés", place: "vasselin",
    text: [
      "Ermengarde souffle sa chandelle. Dans le noir, elle dit : « Je ne peux rien de plus. Toutes les clés de ce palais sont dans ma poche, sauf celles de la Tour. Il les porte sur lui. Il dort avec. » Un temps. « S'il dort. »",
      "Elle s'en va. Tu restes un moment dans le cellier, dans l'odeur des jambons, avant de retrouver la porte.",
    ],
    choices: [{ label: "Ressortir dans la ville", to: "II_S_vasselin" }] }),

  II_S_ermengarde_signe: P({ title: "Ce qu'elle signe", place: "vasselin",
    text: [
      "Ermengarde hésite. Puis elle sort de sa manche une feuille pliée en quatre, qu'elle a dû garder contre elle depuis des jours.",
      "C'est une copie, de sa main. *Cession au Registre royal, en garde perpétuelle, du nom et de la mémoire du bourg de Sarlat, en Corvanne, pour la paix des deux royaumes.* Dessous, en copie aussi, la signature de la reine, et un sceau : une plume et une clé.",
      "« Sarlat, dit Ermengarde. Je ne sais pas où c'est. J'ai cherché sur les cartes. Ce matin, ça n'y était plus. »",
    ],
    choices: [{ label: "Garder la copie et ressortir", fx: { item: "copie_cession" }, to: "II_S_vasselin" }] }),

  II_S_tournoi: P({ title: "Le pré du Roi", place: "vasselin",
    text: [
      "Sur le pré du Roi, entre la muraille et la mer, cent charpentiers montent des tribunes. Des lices, des tentes rayées, des mâts pour les bannières. Un héraut lit l'ordonnance toutes les heures, à voix forte, à des gens qui ne l'écoutent plus.",
      "*Joute, mêlée et épreuve libre. Ouvert à quiconque se présente sous un blason, noble ou non, d'Esquarre ou d'ailleurs, en signe de la paix. Le vainqueur recevra de la main de la reine la grâce qu'il demandera, dans la grande salle des Archives royales.*",
      "Un clerc, derrière une table, inscrit les champions. Un blason, un nom, un parrain. Il a déjà trois pages.",
    ],
    choices: [
      { label: "Inscrire Ysolde, sous un heaume fermé et un blason qui n'est pas le sien", hide: { not: { present: "ysolde" } }, fx: { flag: "sud:champion=ysolde", conf: { ysolde: 5 } }, to: "II_S_inscription" },
      { label: "Inscrire Rodric, sous les couleurs de Corvanne, pour la paix", hide: { not: { present: "rodric" } }, fx: { flag: "sud:champion=rodric" }, to: "II_S_inscription" },
      { label: "Inscrire l'enfant de Sauvelune. Personne ne connaît son visage", hide: { not: { present: "enfant" } }, fx: { flag: "sud:champion=enfant", conf: { enfant: 5 } }, to: "II_S_inscription" },
      { label: "T'inscrire toi-même, à l'épreuve libre : on y accepte les chanteurs", fx: { flag: "sud:champion=lisandre" }, to: "II_S_inscription" },
      { label: "Ne rien faire pour l'instant. Dix jours, c'est long", to: "II_S_vasselin" },
    ] }),

  II_S_inscription: P({ title: "Le registre des champions", place: "vasselin",
    fx: { flag: "sud:inscrit" },
    text: [
      "Le clerc te tend la plume. Il faut un blason, et quelqu'un pour en répondre.",
      { with: "pie", text: "Pie dessine le blason sur le registre, à main levée, sans hésiter : d'azur à la mouette d'argent. Le clerc demande de quelle maison c'est. « D'une très vieille », dit Pie, et le clerc l'écrit." },
      { without: "pie", text: "Tu inventes un blason, d'azur à la mouette d'argent. Le clerc demande de quelle maison c'est. Tu dis : « D'une très vieille », et il l'écrit." },
      { if: { not: { has: "lisandre:disgrace" } }, text: "Pour le parrain, tu signes de ton nom. Le clerc lève la tête, te reconnaît, et sourit pour la première fois de la journée." },
      { if: { has: "lisandre:disgrace" }, text: "Pour le parrain, tu signes du nom de ta mère, que personne à la cour n'a jamais entendu." },
      "Le clerc souffle sur l'encre. En haut de la page, une note de sa main, pour lui-même, que tu lis à l'envers : *Tous les noms, chaque soir, à la Tour.*",
    ],
    choices: [{ label: "Revenir en ville", to: "II_S_vasselin" }] }),

  II_S_port: P({ title: "La halle aux poissons", place: "vasselin",
    text: [
      { if: { souv: "lisandre:port" }, text: "La halle aux poissons, à l'aube et au soir. Le troisième étal à gauche en entrant, sous la poutre noircie. Ta mère y vendait des rougets et des seiches, avec cette voix qui portait jusqu'au quai. Tu avais huit ans, tu dormais sous l'étal, sur les filets." },
      { if: { not: { souv: "lisandre:port" } }, text: "Une halle aux poissons, comme dans tous les ports. Les étals se ressemblent. Tu marches entre eux sans savoir lequel chercher. Tu sais seulement qu'il y en a un." },
      "Une vieille femme te regarde passer. Elle a les mains rouges de sel et un couteau à écailler. Elle t'arrête par la manche.",
      "« Ta voix, dit-elle. Tu as parlé, là, à l'instant. C'est la voix de Jehanne. » Elle te regarde mieux, et ne te reconnaît pas. « Jehanne avait une petite. On l'a emmenée au palais, pour chanter. On ne l'a jamais revue. »",
    ],
    choices: [
      { label: "Chanter, là, entre les étals, la chanson que ta mère criait pour vendre", if: { souv: "lisandre:voix" }, why: "Tu ne sais plus où elle est.", fx: { flag: "sud:port_ami", conf: { lisandre: 5 }, ep: ["perso", 1000] }, to: "II_S_port_chant" },
      { label: "Lui dire qui tu es", fx: { flag: "sud:port_dit", conf: { lisandre: 5 }, ep: ["perso", 500] }, to: "II_S_port_dit" },
      { label: "Ne rien dire, et repartir", to: "II_S_vasselin" },
    ] }),

  II_S_port_chant: P({ title: "Le cri", place: "vasselin",
    text: [
      "Ce n'est pas une chanson. C'est un cri de marché, trois notes, des noms de poissons, un prix. Ta mère le criait cent fois par matin. Tu le cries avec sa voix, qui est la tienne, rauque et trop grave.",
      "La halle se tait. Puis, au fond, quelqu'un répond, avec le cri de l'étal d'en face. Puis un autre. Pendant une minute, la halle entière crie comme il y a vingt ans, et les vieux pleurent en riant.",
      "La vieille femme te serre contre elle. Elle sent le sel et la seiche. « Les bateaux, dit-elle à ton oreille. Si un jour tu as besoin d'un bateau, de nuit, sans lanterne. Demande Jacotte. »",
    ],
    choices: [{ label: "Revenir en ville", to: "II_S_vasselin" }] }),

  II_S_port_dit: P({ title: "La petite de Jehanne", place: "vasselin",
    text: [
      "Tu le lui dis. Elle te regarde. Elle regarde ta robe de cour déchirée, tes mains blanches, tes souliers à ta ceinture.",
      "« Jehanne est morte l'hiver où on t'a prise, dit-elle. Elle a demandé après toi. On lui a dit que tu chantais pour la reine. Ça l'a consolée. » Elle hausse les épaules. « Ça m'aurait consolée aussi. »",
      "Elle retourne à son étal. Avant que tu partes, elle crie, sans se retourner : « Jacotte. Si tu as besoin de quelque chose. On ne sait jamais. »",
    ],
    choices: [{ label: "Revenir en ville", to: "II_S_vasselin" }] }),

  II_S_mouettes: P({ title: "Les Mouettes", place: "vasselin",
    text: [
      "Pie a trouvé les voleurs de Vasselin en une heure, comme on trouve de l'eau en descendant. Ils se réunissent dans une cale échouée, au bout du port, sous un plancher pourri. Ils s'appellent la Confrérie des Mouettes, et leur prévôte est une femme sans âge qui tricote.",
      "« Pallanche, dit-elle, en regardant Pie. On en a entendu parler. Les toits blancs. » Elle compte ses mailles. « La Tour, ici, personne n'y entre plus. Deux des nôtres ont essayé. On les a retrouvés sur le quai, le lendemain. Ils allaient bien. Ils ne savaient plus qu'ils étaient des Mouettes. »",
    ],
    choices: [
      { label: "Laisser Pie négocier : un plan de la Tour, contre une part de ce qu'il y a dedans", test: { dom: "social", label: "Marché", help: [{ if: { has: "pie:a_vendu" }, v: -10 }] },
        win: { fx: { flag: "sud:mouettes", item: "plan_tour", ep: ["perso", 800] }, to: "II_S_mouettes_ok" },
        lose: { fx: { flag: "sud:mouettes_dette" }, to: "II_S_mouettes_dette" } },
      { label: "Payer le plan, trente pièces", if: { gold: { min: 30 } }, why: "Tu n'as pas trente pièces.", fx: { gold: -30, flag: "sud:mouettes", item: "plan_tour" }, to: "II_S_mouettes_ok" },
      { label: "Repartir", to: "II_S_vasselin" },
    ] }),

  II_S_mouettes_ok: P({ title: "Le plan", place: "vasselin",
    text: [
      "La prévôte pose son tricot, sort d'un pot de grès un rouleau de toile cirée, et le déplie sur un tonneau. La Tour, étage par étage, de la main d'un architecte mort depuis deux cents ans, avec des annotations plus récentes, au crayon : *garde*, *chien*, *serrure à trois pênes*, *ne pas*.",
      "Au sommet, la grande salle. Un mot, au centre, entouré deux fois : *froid*.",
    ],
    choices: [{ label: "Revenir en ville", to: "II_S_vasselin" }] }),

  II_S_mouettes_dette: P({ title: "Une dette", place: "vasselin",
    text: ["La prévôte secoue la tête. « Pas de part. Une dette. Tu nous rends un service, un jour, quand on te le demande, et on te donne le plan ce jour-là. » Pie accepte avant que tu aies pu parler. Il connaît ce genre de dettes. Il en a déjà."],
    choices: [{ label: "Revenir en ville", to: "II_S_vasselin" }] }),

  II_S_ysolde: P({ title: "La fenêtre", place: "vasselin",
    fx: { questSeen: "II_S_lisse" },
    text: [
      "Ysolde est à la fenêtre de la chambre, à l'Ancre. D'ici, on voit le palais, ses toits bleus, et la Tour au-dessus.",
      { if: { has: "nuit:ysolde=reine" }, text: "« Je l'ai portée, dit-elle. Dans l'escalier, cette nuit-là. Elle ne pesait rien. Elle m'a demandé mon nom trois fois. » Elle se tait. « Je l'ai servie quinze ans. »" },
      { if: { not: { has: "nuit:ysolde=reine" } }, text: "« Quinze ans, dit-elle. Je l'ai servie quinze ans. Je ne sais même pas si elle se souvient de moi. Je ne sais pas si je préfère. »" },
      "Puis, sans transition : « Il y a un pont, sur la Lisse, à une lieue du fort. On l'a reconstruit depuis la guerre. Je ne peux pas le regarder. Tout le monde, au fort, change de voix quand on en parle. Moi, je n'ai rien. Un trou. J'ai payé pour ce trou. » Elle se retourne. « Le reçu doit être là-haut. »",
    ],
    choices: [
      { label: "« On ira le chercher. »", fx: { flag: "sud:lisse_promis", conf: { ysolde: 5 } }, to: "II_S_vasselin" },
      { label: "« Tu l'as payé. Peut-être que tu avais raison. »", fx: { flag: "sud:lisse_doute" }, to: "II_S_vasselin" },
    ] }),

  II_S_hylas: P({ title: "Le pied de la Tour", place: "vasselin",
    text: [
      "Au pied de la Tour des Archives, il y a une petite place carrée, avec une fontaine sèche. Hylas s'arrête au milieu et lève la tête, comme s'il voyait.",
      "« Écoute », dit-il. Tu écoutes. Le bruit de la ville. Et, très loin au-dessus, si faible que tu crois l'imaginer, un grattement régulier. Une plume, sur du papier. Elle ne s'arrête pas.",
      "« Il écrit, dit Hylas. Il n'a jamais su s'arrêter d'écrire. Il était mon élève. Le meilleur. » Il reste là longtemps. Puis : « Il y a un grand registre dans ce coffre. Pas une copie. Celui que j'ai cherché à Pallanche. Il l'a apporté ici, pour être près d'elle. »",
    ],
    choices: [{ label: "Le ramener à l'Ancre", fx: { flag: "sud:hylas_tour", conf: { hylas: 5 } }, to: "II_S_vasselin" }] }),

  II_S_enfant: P({ title: "Le quai", place: "vasselin",
    text: [
      "L'enfant de Sauvelune est assis au bout du quai, les jambes au-dessus de l'eau. Il n'avait jamais vu la mer.",
      "Un gamin du port, de son âge, s'assied à côté de lui. Ils parlent. Tu les regardes de loin. Au bout d'un moment, le gamin se lève, fait trois pas, se retourne, et regarde l'enfant de Sauvelune avec étonnement, comme s'il venait de le trouver là.",
      "Il lui demande qui il est.",
    ],
    choices: [
      { label: "Aller t'asseoir à côté de lui", fx: { flag: "sud:quai", conf: { enfant: 5, lisandre: 5 } }, to: "II_S_enfant_quai" },
      { label: "Le laisser seul", to: "II_S_vasselin" },
    ] }),

  II_S_enfant_quai: P({ title: "Le sel", place: "vasselin",
    text: [
      "« Ça arrive tout le temps, maintenant, dit-il. Pas avec vous. Avec les autres. Je leur parle, et puis ils oublient que j'étais là. » Il ramasse un caillou et le lance dans l'eau. « Ça ne me fait rien. »",
      "Il ment mal. Il te demande si la mer est vraiment salée. Tu lui dis de goûter. Il se penche, trempe un doigt, et rit, pour la première fois depuis que tu le connais.",
    ],
    choices: [{ label: "Revenir en ville", to: "II_S_vasselin" }] }),

  // the inn: end of chapter 1
  II_S_nuit: P({ takes: "evening", title: "L'Ancre", place: "vasselin",
    text: [
      { first: true, text: "Le soir, à l'Ancre, on mange de la soupe de poisson à une table de mariniers qui jouent aux osselets. Personne ne vous regarde. Dehors, la mer monte contre le quai." },
      { again: true, text: "Les mariniers jouent toujours aux osselets. La chandelle a baissé d'un doigt." },
      { if: { has: "sud:champion=ysolde" }, text: "Dans dix jours, le pré du Roi, et un heaume fermé." },
      { if: { item: "plan_tour" }, text: "Le plan de la Tour est roulé sous ton lit." },
      "Tard dans la nuit, toutes les fenêtres de la Tour sont encore allumées.",
    ],
    choices: [
      { label: "Parler avec l'enfant de Sauvelune", once: true, hide: { not: { present: "enfant" } }, to: "II_S_nuit_enfant" },
      { label: "Parler avec Ysolde", once: true, hide: { not: { present: "ysolde" } }, to: "II_S_nuit_ysolde" },
      { label: "Parler avec Pie", once: true, hide: { not: { present: "pie" } }, to: "II_S_nuit_pie" },
      { label: "Parler avec Hylas", once: true, hide: { not: { present: "hylas" } }, to: "II_S_nuit_hylas" },
      { label: "Dormir", fx: { flag: "ch2:sud:1", resume: "II_S2_matin" }, to: "C2_carrefour" },
    ] }),

  II_S_nuit_enfant: P({ title: "La chanson", place: "vasselin",
    text: [
      "Il te demande de lui chanter quelque chose. Pas pour la cour. Quelque chose de vrai.",
      "Tu lui chantes une berceuse de pêcheurs, à voix basse, pour ne pas déranger les joueurs. Au deuxième couplet, il s'est endormi sur la table, la tête dans ses bras. Les mariniers ont arrêté de jouer pour écouter. Ils reprennent sans rien dire.",
    ],
    choices: [{ label: "Revenir à la table", fx: { conf: { enfant: 5, lisandre: 5 } }, to: "II_S_nuit" }] }),

  II_S_nuit_ysolde: P({ title: "L'épée", place: "vasselin",
    text: [
      "Ysolde aiguise son épée, à la chandelle. Elle te demande, sans lever les yeux, si tu as déjà menti à la reine.",
      "Tu dis : « Tous les jours. » Elle hoche la tête. « Moi, jamais. » La pierre passe sur la lame. « Je me demande laquelle de nous deux elle a le mieux connue. »",
    ],
    choices: [{ label: "Revenir à la table", fx: { conf: { ysolde: 5 } }, to: "II_S_nuit" }] }),

  II_S_nuit_pie: P({ title: "Les poches", place: "vasselin",
    text: [
      "Pie vide ses poches sur la table : une cuillère d'argent de l'auberge à l'enseigne blanche, deux boutons de nacre, une bague de chanteuse, un sifflet de héraut. Il les range par taille.",
      "La bague est la tienne. Tu ne l'as pas sentie partir. Il te la rend avec un grand sourire. « Pour m'entraîner. La Tour, ça va demander de l'entraînement. »",
    ],
    choices: [{ label: "Revenir à la table", fx: { conf: { pie: 5 } }, to: "II_S_nuit" }] }),

  II_S_nuit_hylas: P({ title: "L'élève", place: "vasselin",
    text: [
      "Hylas boit sa soupe à petites gorgées. Il parle de Mordace jeune : un garçon de quinze ans qui recopiait les registres la nuit, pour le plaisir, et qui savait par cœur la généalogie de toutes les familles du royaume.",
      "« Il disait qu'un nom mal écrit, c'est une personne qui souffre. » Il pose sa cuillère. « Je crois qu'il le pense toujours. C'est ça, le pire. »",
    ],
    choices: [{ label: "Revenir à la table", fx: { conf: { hylas: 5 } }, to: "II_S_nuit" }] }),
};
