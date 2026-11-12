// Act II · the southern company, chapter 2, "La reine de nuit": the queen, who sleeps by day, summons her singer at
// night. Lisandre goes to the palace with one companion; the queen does not know who she is; Mordace comes, and makes an
// offer. What the companion does there (Pie's wax, Ysolde's face, the child's name) is read by the heist and the
// tournament. Lisandre leads ("tu").
var S = { act: "II", noLead: true };
function P(o) { return Object.assign({}, S, o); }
function avec(h) { return { has: "sud2:avec=" + h }; }
module.exports = {
  II_S2_matin: P({ title: "Un billet", place: "vasselin",
    text: [
      "Au matin, un garçon des cuisines frappe à la porte de l'Ancre et te remet un billet sans cachet, plié en huit. L'écriture d'Ermengarde, penchée, pressée.",
      "*Elle te demande. Cette nuit, à la deuxième heure, dans la chambre bleue. Elle a entendu dire que sa chanteuse était revenue, elle ne sait plus laquelle, elle veut l'entendre. Viens par les cuisines. Ne viens pas seule : il y aura du monde dans les couloirs, et pas que des vivants.*",
      { if: { has: "lisandre:disgrace" }, text: "Elle t'a bannie, il y a dix jours. Elle t'appelle cette nuit. Ermengarde n'a pas jugé utile de le souligner." },
      "Le billet porte un post-scriptum, d'une autre encre, ajouté après coup. *Il sera là. Il est toujours là.*",
    ],
    choices: [{ label: "Préparer la nuit", to: "II_S2_prep" }] }),

  II_S2_prep: P({ title: "Qui t'accompagne", place: "vasselin",
    text: [
      "Un page, ou un garde. Une chanteuse de la reine ne traverse pas le palais seule la nuit. Quelqu'un doit porter ton luth et se taire.",
      { with: "hylas", text: "Hylas secoue la tête avant qu'on le lui demande. « Il reconnaîtrait mon pas dans un escalier, à cent marches. Je l'ai formé. »" },
    ],
    choices: [
      { label: "Pie, en page. Il a les mains qu'il faut pour un palais", hide: { not: { present: "pie" } }, fx: { flag: "sud2:avec=pie" }, to: "II_S2_palais" },
      { label: "Ysolde, en garde de la reine. Personne ne regarde le visage d'un garde", hide: { not: { present: "ysolde" } }, fx: { flag: "sud2:avec=ysolde" }, to: "II_S2_palais" },
      { label: "L'enfant de Sauvelune, en page. Il veut voir la reine", hide: { not: { present: "enfant" } }, fx: { flag: "sud2:avec=enfant" }, to: "II_S2_palais" },
      { label: "Rodric, en porteur. Il se tiendra courbé", hide: { not: { present: "rodric" } }, fx: { flag: "sud2:avec=rodric" }, to: "II_S2_palais" },
      { label: "Linette, en petite servante. Elle sait se taire mieux que personne", hide: { not: { present: "linette" } }, fx: { flag: "sud2:avec=linette" }, to: "II_S2_palais" },
      { label: "Porter ton luth toi-même, et y aller seule", hide: { any: [{ present: "pie" }, { present: "ysolde" }, { present: "enfant" }, { present: "rodric" }, { present: "linette" }] }, fx: { flag: "sud2:avec=seule" }, to: "II_S2_palais" },
    ] }),

  II_S2_palais: P({ title: "Le palais la nuit", place: "vasselin",
    text: [
      { first: true, text: "Les cuisines, l'escalier des servantes, le couloir des tapisseries. Tu as fait ce chemin mille fois. Cette nuit, il y a des chandelles partout, des centaines, et personne pour les moucher." },
      { again: true, text: "Le couloir des tapisseries, de nouveau. Les chandelles brûlent toujours. Dans les galeries, personne n'a bougé." },
      { first: true, text: "Des courtisans attendent dans les galeries, en habits de jour, à deux heures du matin. Ils sont debout, adossés aux murs. Certains dorment debout. D'autres te regardent passer sans te voir. Un vieux duc que tu connais depuis toujours te demande poliment s'il est déjà venu ici." },
      { first: true, if: avec("pie"), text: "Pie porte ton luth et regarde partout à la fois. Il a l'air d'un page qui a peur. C'est très bien imité." },
      { first: true, if: avec("ysolde"), text: "Ysolde marche derrière toi, la hallebarde à l'épaule, le casque bas. Au détour d'un couloir, un sergent la salue sans la regarder. Elle lui rend le salut, d'un geste exact, vingt ans d'habitude." },
      { first: true, if: avec("enfant"), text: "L'enfant de Sauvelune porte ton luth comme on porte un nourrisson, à deux bras. Il regarde les plafonds peints, la bouche ouverte." },
      { first: true, if: avec("rodric"), text: "Rodric porte ton coffre de partitions, courbé en deux. Il est encore plus grand comme ça." },
      { first: true, if: avec("linette"), text: "Linette marche derrière toi, les yeux baissés, les mains croisées. Elle compte les chandelles à voix basse." },
    ],
    choices: [
      { label: "Redescendre aux cuisines, où brille encore un feu", hide: { seen: "II_S2_cuisines" }, to: "II_S2_cuisines" },
      { label: "Passer par la tribune des musiciens, d'où vient une harpe", hide: { seen: "II_S2_tribune" }, to: "II_S2_tribune" },
      { label: "La chambre bleue", to: "II_S2_isaure" },
    ] }),

  II_S2_isaure: P({ title: "La chambre bleue", place: "vasselin",
    fx: { meet: "isaure" },
    text: [
      { first: true, text: "La reine est assise dans son lit, en chemise, les cheveux défaits, un châle sur les épaules. Elle a l'air très jeune et très vieille à la fois. Elle te regarde entrer avec une curiosité polie." },
      { first: true, text: "« Vous êtes la chanteuse, dit-elle. On m'a dit que j'avais une chanteuse. » Elle sourit. « Je ne me souviens pas de vous. On me dit que c'est normal. On me dit beaucoup de choses, la nuit. »" },
      { again: true, text: "La reine s'est renfoncée dans ses oreillers. Elle te regarde avec la même curiosité polie qu'à ton entrée." },
      "Sur la table de chevet, une écritoire, une plume, et une pile de feuilles déjà signées.",
      { first: true, if: { has: "isaure:avoue" }, text: "Sur la route de Pallanche, elle t'avait parlé dans la nuit, et tu lui avais chanté n'importe quoi. Elle n'en sait plus rien." },
    ],
    choices: [
      { label: "Lui chanter la chanson de soldat qu'elle t'a apprise, une nuit d'hiver", if: { souv: "lisandre:isaure" }, why: "Tu ne t'en souviens plus.", fx: { flag: "sud2:isaure_chanson", ep: ["perso", 1000] }, to: "II_S2_isaure_chant" },
      { label: "Lui montrer la lettre au sceau noir", hide: { not: { item: "lettre_mordace" } }, fx: { flag: "sud2:lettre_montree" }, to: "II_S2_isaure_lettre" },
      { label: "Lui montrer la copie d'Ermengarde", hide: { not: { item: "copie_cession" } }, fx: { flag: "sud2:copie_montree" }, to: "II_S2_isaure_copie" },
      { label: "Lui donner le bol de soupe de Maître Guérin", hide: { any: [{ not: { has: "sud2:soupe" } }, { seen: "II_S2_isaure_soupe" }] }, to: "II_S2_isaure_soupe" },
      { label: "Jouer ton rôle : chanter ce qu'elle demandera", to: "II_S2_isaure_role" },
    ] }),

  II_S2_isaure_chant: P({ title: "La chanson de soldat", place: "vasselin",
    text: [
      "Tu la chantes telle qu'elle te l'a apprise : sans luth, d'une voix plate, comme on chante en marchant. Une chanson de soldats de son père, sur une fille qui attend au bord d'une rivière.",
      "À la deuxième strophe, la reine chante avec toi. Elle connaît les paroles. Elle ne sait pas d'où.",
      "Quand vous avez fini, elle a les larmes aux yeux. « J'avais un fils, dit-elle. N'est-ce pas ? Je la lui chantais. » Elle te prend la main. « Comment s'appelait-il ? Dites-le-moi vite, avant qu'il vienne. »",
    ],
    choices: [
      { label: "« Aymeric. »", fx: { flag: "isaure:aymeric", ep: ["perso", 800] }, to: "II_S2_mordace" },
      { label: "Te taire. Tu ne veux pas qu'il l'entende le dire, lui", to: "II_S2_mordace" },
    ] }),

  II_S2_isaure_lettre: P({ title: "Le sceau noir", place: "vasselin",
    text: [
      "Elle lit la lettre deux fois, à la chandelle. Elle reconnaît le sceau. Elle ne reconnaît rien d'autre.",
      "« Hautvent, dit-elle. Lisse. » Elle secoue la tête. « Je ne sais pas ce que c'est. Mais c'est à moi qu'il écrit, et sur ce ton. » Elle replie la lettre et te la rend, avec une sorte de dignité terrible. « Gardez-la. Si je la garde, demain matin je la signerai. »",
    ],
    choices: [{ label: "Reprendre la lettre", fx: { flag: "isaure:lettre_lue" }, to: "II_S2_mordace" }] }),

  II_S2_isaure_copie: P({ title: "Sarlat", place: "vasselin",
    text: [
      "Elle lit. « Sarlat. » Elle cherche. « C'est un nom de chez nous ? Ou de chez eux ? » Elle regarde la signature, la sienne, en copie. « C'est ma main. Je fais les boucles comme ça. »",
      "Elle se met à rire, doucement, sans joie. « Je donne des villes, la nuit. Comme on donne des sous aux mendiants, pour ne plus les voir. »",
    ],
    choices: [{ label: "Reprendre la copie", fx: { flag: "isaure:sarlat" }, to: "II_S2_mordace" }] }),

  II_S2_isaure_role: P({ title: "Ce qu'elle demande", place: "vasselin",
    text: [
      "Elle te demande une chanson gaie. Tu chantes une chanson gaie. Elle te demande une chanson de la cour d'autrefois. Tu chantes une chanson de la cour d'autrefois, et elle bat la mesure sur le drap, en souriant, sans rien reconnaître.",
      "Tu fais ce que tu as toujours fait : tu chantes ce qu'on te commande. Tu le fais très bien. Tu n'as jamais eu aussi honte de le faire.",
    ],
    choices: [{ label: "Continuer", to: "II_S2_mordace" }] }),

  II_S2_mordace: P({ title: "Le Greffier-Majeur", place: "vasselin",
    fx: { meet: "mordace" },
    text: [
      "La porte s'ouvre sans qu'on ait frappé. Un homme entre, en robe grise, maigre, une écharpe de laine autour du cou en plein été. Il a cinquante ans et des yeux très doux. Il salue la reine, puis toi.",
      "« Dame Lisandre, dit-il. Je suis heureux que vous soyez revenue. » Il vient tendre les mains au feu de la cheminée. Il a toujours froid. « Votre ballade, à Pallanche, m'a beaucoup appris. »",
      { if: { has: "nuit:chant=voix" }, text: "« Surtout ce que vous avez chanté à la fin. Avec votre vraie voix. Il a fallu trois Glaneurs pour nettoyer la place. »" },
      { if: { has: "nuit:chant=silence" }, text: "« Surtout votre silence. On l'a beaucoup entendu. »" },
      "Il s'assied au pied du lit, prend la main de la reine, qui se laisse faire, et te regarde.",
    ],
    choices: [{ label: "Attendre qu'il parle", to: "II_S2_offre" }] }),

  II_S2_offre: P({ title: "L'offre", place: "vasselin",
    text: [
      "« Dans dix jours, dit-il, le Tournoi de la Paix. Les ambassadeurs de Corvanne seront là. Il faudra une chanson. Une belle. Que tout le monde retienne. » Il sourit. « Ou, plus exactement, qui aide tout le monde à ne pas retenir certaines choses. »",
      "« En échange, je vous rends quelque chose. » Il sort de sa manche une petite feuille, pliée. « Une poissonnière du port. Jehanne. Elle est morte en vous attendant. Vous ne l'avez pas su à temps, et vous vous le reprochez. Je peux reprendre ce reproche. Je peux reprendre tout ce qui fait mal. C'est mon métier. »",
      "La reine, contre son épaule, s'est endormie.",
    ],
    choices: [
      { label: "« Je chanterai. »", fx: { flag: "sud2:mordace=oui", ep: ["perso", 400] }, to: "II_S2_offre_oui" },
      { label: "« Non. »", fx: { flag: "sud2:mordace=non", conf: { lisandre: 5 }, ep: ["perso", 800] }, to: "II_S2_offre_non" },
      { label: "Faire semblant d'hésiter, de céder, pour gagner du temps et ses confidences", test: { dom: "social", label: "Jeu", help: [{ if: { has: "lisandre:ballade=double" }, v: 10 }, { if: { has: "sud2:isaure_chanson" }, v: -10 }] },
        win: { fx: { flag: ["sud2:mordace=feinte", "sud2:confidence"], clue: "n_mordace_veut", ep: ["perso", 1200] }, to: "II_S2_offre_feinte" },
        lose: { fx: { flag: "sud2:mordace=demasquee" }, to: "II_S2_offre_rate" } },
    ] }),

  II_S2_offre_oui: P({ title: "Une belle chanson", place: "vasselin",
    text: [
      "Il hoche la tête, sans triomphe. « Je vous ferai porter les paroles. Vous y mettrez la musique. Vous avez un don pour ça. » Il range la feuille dans sa manche. « Pour Jehanne, nous verrons après. Rien ne presse. Elle ne bougera pas. »",
    ],
    choices: [{ label: "Le laisser à la reine", to: "II_S2_compagnon" }] }),

  II_S2_offre_non: P({ title: "Non", place: "vasselin",
    text: [
      "Il ne paraît ni surpris ni fâché. « Bien », dit-il. Il range la feuille dans sa manche. « C'est votre droit. Vous ne chanterez donc pas au tournoi. Quelqu'un d'autre le fera. Messire Aubrac, je pense. Il chante très bien ce qu'on lui donne. »",
      "Puis, en se levant : « Ce que vous refusez, je le garde. Je garde tout, vous savez. »",
    ],
    choices: [{ label: "Le laisser à la reine", to: "II_S2_compagnon" }] }),

  II_S2_offre_feinte: P({ title: "Les confidences", place: "vasselin",
    text: [
      "Tu baisses les yeux. Tu dis que tu ne sais pas. Que ta mère, oui, peut-être. Que c'est lourd. Tu le dis avec la voix que tu prends pour les ballades tristes, et il t'écoute avec une attention de médecin.",
      "Alors il parle. Il a besoin de parler, comme tous ceux qui ne parlent à personne. « Ce n'est pas de la méchanceté, dit-il. Le monde a trop de mémoire. Il étouffe dessous. Chaque guerre vient d'une vieille blessure que quelqu'un refuse de lâcher. Corvanne et nous : un pont, il y a moins de trois ans. Les clans et nous : un massacre, il y a trois siècles, dont personne ne sait plus rien, et qui nous tue quand même. »",
      "« Il faut un seul registre. Un seul endroit où tout est écrit, bien écrit, une fois. Et tout le reste, on peut le laisser partir. » Il te regarde. « Je ne suis pas un monstre, Dame Lisandre. Je suis un greffier. »",
    ],
    choices: [{ label: "Le laisser à la reine", to: "II_S2_compagnon" }] }),

  II_S2_offre_rate: P({ title: "Il sourit", place: "vasselin",
    text: ["Tu commences à jouer l'hésitation. Il te regarde, et il a, pour la première fois, un vrai sourire, presque tendre. « Vous chantez faux, dit-il doucement. Pas souvent. Mais ce soir. » Il se lève. « Réfléchissez quand même. »"],
    choices: [{ label: "Le laisser à la reine", to: "II_S2_compagnon" }] }),

  II_S2_compagnon: P({ title: "Dans l'antichambre", place: "vasselin",
    text: [
      { if: { not: avec("seule") }, text: "Tu te retires. Dans l'antichambre, ton escorte t'attendait. Mordace sort un moment après toi, pour donner un ordre à un garde, et passe à côté de vous." },
      { if: avec("seule"), text: "Tu te retires. L'antichambre est vide. Mordace sort un moment après toi, pour donner un ordre à un garde, et passe à côté de toi sans te regarder, comme on passe à côté d'un meuble qu'on a payé." },
    ],
    choices: [
      { label: "Laisser Pie faire ce qu'il a à faire", hide: { not: avec("pie") }, to: "II_S2_pie" },
      { label: "Rester devant Ysolde, pour qu'il ne la voie pas", hide: { not: avec("ysolde") }, to: "II_S2_ysolde" },
      { label: "Prendre l'enfant par l'épaule", hide: { not: avec("enfant") }, to: "II_S2_enfant" },
      { label: "Regarder Rodric, qui se tient courbé", hide: { not: avec("rodric") }, to: "II_S2_rodric" },
      { label: "Regarder Linette, qui a levé les yeux", hide: { not: avec("linette") }, to: "II_S2_linette" },
      { label: "Quitter le palais, seule, ton luth à l'épaule", hide: { not: avec("seule") }, to: "II_S2_aube" },
    ] }),

  II_S2_pie: P({ title: "La main de Pie", place: "vasselin",
    text: ["Pie se trouve sur le chemin de Mordace au moment exact où il ne faut pas, trébuche, s'excuse, ramasse ton luth. Mordace ne s'arrête pas. À sa ceinture, sous la robe, un anneau de clés. Trois clés de fer noir."],
    choices: [{ label: "Le regarder faire", test: { dom: "discretion", label: "Doigts", help: [{ if: { has: "pie:a_vendu" }, v: -5 }] },
      win: { fx: { flag: "sud:empreinte_cles", item: "cire_cles", ep: ["perso", 1500] }, to: "II_S2_pie_ok" },
      lose: { fx: { flag: "sud:pie_vu" }, to: "II_S2_pie_rate" } }] }),

  II_S2_pie_ok: P({ title: "La cire", place: "vasselin",
    text: ["Dans l'escalier des servantes, Pie ouvre la main. Une petite boîte de fer-blanc, remplie de cire jaune. Dans la cire, trois empreintes nettes, l'une à côté de l'autre. « Il les touche tout le temps, dit Pie. C'est pire que s'il dormait avec. Mais une seconde, ça suffit. »"],
    choices: [{ label: "Quitter le palais", to: "II_S2_aube" }] }),

  II_S2_pie_rate: P({ title: "Le regard", place: "vasselin",
    text: ["Les doigts de Pie touchent l'anneau, et Mordace pose la main dessus, sans hâte, sans se retourner. Il continue son chemin. Au bout du couloir, il dit quelque chose au garde. Le garde regarde Pie. Longtemps. Pour retenir son visage."],
    choices: [{ label: "Quitter le palais, vite", to: "II_S2_aube" }] }),

  II_S2_ysolde: P({ title: "Le garde", place: "vasselin",
    text: [
      "Mordace s'arrête à deux pas d'Ysolde. Il ne la regarde pas. Il regarde la hallebarde, le casque, la façon de se tenir.",
      "« Capitaine, dit-il à mi-voix. Vous ne vous souvenez toujours pas du pont, n'est-ce pas ? » Il n'attend pas de réponse. « Moi, si. Je l'ai bien écrit. Vous y êtes très belle. » Il s'en va.",
      "Ysolde n'a pas bougé. Sa main, sur la hampe, est blanche.",
    ],
    choices: [{ label: "Quitter le palais", fx: { flag: "sud:mordace_ysolde" }, to: "II_S2_aube" }] }),

  II_S2_enfant: P({ title: "Le nom", place: "vasselin",
    text: [
      "Mordace s'arrête devant l'enfant de Sauvelune. Il le regarde longtemps, avec une sorte de curiosité professionnelle, comme on regarde une écriture qu'on n'arrive pas à dater.",
      "« Comment t'appelles-tu, petit page ? »",
    ],
    choices: [
      { label: "Laisser l'enfant répondre", fx: { flag: "sud:mordace_enfant_nom" }, to: "II_S2_enfant_nom" },
      { label: "Répondre à sa place : « Il est muet, Monseigneur. »", test: { dom: "social", label: "Aplomb" },
        win: { to: "II_S2_enfant_muet" }, lose: { fx: { flag: "sud:mordace_enfant_nom" }, to: "II_S2_enfant_nom" } },
    ] }),

  II_S2_enfant_nom: P({ title: "Ce qu'il écrit", place: "vasselin",
    text: [
      "L'enfant dit son nom. Mordace le répète, une fois, comme pour le goûter. Puis il sort de sa manche un carnet de poche et l'écrit, debout, avec un crayon d'argent.",
      "Il regarde la page. Il fronce les sourcils. Il l'écrit une deuxième fois, en dessous. Puis il referme le carnet, très lentement, et s'en va sans rien dire.",
    ],
    choices: [{ label: "Quitter le palais", to: "II_S2_aube" }] }),

  II_S2_enfant_muet: P({ title: "Muet", place: "vasselin",
    text: ["« Dommage », dit Mordace. Il regarde encore l'enfant un instant, puis s'en va. L'enfant serre ton luth si fort que les cordes sonnent."],
    choices: [{ label: "Quitter le palais", to: "II_S2_aube" }] }),

  II_S2_rodric: P({ title: "Le porteur", place: "vasselin",
    text: ["Mordace passe devant Rodric sans le voir. Un porteur. Mais Rodric, lui, l'a vu, et quand tu te retournes, il le suit des yeux avec l'expression qu'il devait avoir, pendant la guerre, en regardant l'autre rive de la Lisse."],
    choices: [{ label: "Quitter le palais", fx: { flag: "sud:rodric_mordace" }, to: "II_S2_aube" }] }),

  II_S2_linette: P({ title: "Page Onze", place: "vasselin",
    text: [
      "Mordace passe devant Linette. Il ralentit. « Toi, dit-il, je te connais. » Elle lève les yeux. « Tu as une très belle main. Tu étais à Pallanche, au scriptorium. Page Onze. » Il sourit. « Viens me voir à la Tour, quand tu voudras. On a besoin de bonnes mains. »",
      "Il s'en va. Linette regarde l'endroit où il était. Elle ne dit rien jusqu'à l'auberge.",
    ],
    choices: [{ label: "Quitter le palais", fx: { flag: "linette:invitee" }, to: "II_S2_aube" }] }),

  II_S2_aube: P({ title: "Les feuilles signées", place: "vasselin",
    text: [
      "Tu repasses devant la chambre bleue pour sortir. La porte est entrouverte. La reine dort. Mordace est assis à l'écritoire et écrit, vite, sans lever la tête.",
      "Sur la pile, la feuille du dessus. Tu ne la lis qu'à moitié, à l'envers, en passant. *… la mémoire de son fils Aymeric, de sa naissance à sa mort, pour l'apaisement de Sa Majesté…*",
      { if: { has: "isaure:aymeric" }, text: "Tu lui as rendu ce nom, cette nuit. Demain, il ne sera plus à elle." },
      "Dehors, l'aube est grise. Les courtisans, dans les galeries, dorment toujours debout.",
    ],
    choices: [{ label: "Rentrer à l'Ancre", to: "II_S2_nuit" }] }),

  II_S2_nuit: P({ title: "Le jour à l'Ancre", place: "vasselin",
    text: [
      { first: true, text: "Tu dors jusqu'à midi. Tu te réveilles avec le goût des chandelles dans la bouche. Les autres sont autour de la table, ils t'attendent pour manger. Ils ne posent pas de questions. Tu racontes quand même." },
      { again: true, text: "La table n'est pas encore desservie. Par la fenêtre, le quai, et le milieu du jour." },
      { if: { item: "cire_cles" }, text: "Au milieu de la table, la petite boîte de fer-blanc. Personne n'y touche." },
      { if: { has: "sud2:mordace=oui" }, text: "Un coursier a apporté les paroles de la chanson. Elles sont sur ton lit, roulées, nouées d'un ruban gris." },
    ],
    choices: [
      { label: "Parler avec l'enfant de Sauvelune", once: true, hide: { not: { present: "enfant" } }, to: "II_S2_nuit_enfant" },
      { label: "Parler avec Ysolde", once: true, hide: { not: { present: "ysolde" } }, to: "II_S2_nuit_ysolde" },
      { label: "Parler avec Pie", once: true, hide: { not: { present: "pie" } }, to: "II_S2_nuit_pie" },
      { label: "Parler avec Hylas", once: true, hide: { not: { present: "hylas" } }, to: "II_S2_nuit_hylas" },
      { label: "Rejoindre Rodric, qui fend du bois dans la cour", hide: { any: [{ not: { present: "rodric" } }, { seen: "II_S2_nuit_rodric" }] }, to: "II_S2_nuit_rodric" },
      { label: "Linette, à la fenêtre, avec un crayon", hide: { any: [{ not: { present: "linette" } }, { seen: "II_S2_nuit_linette" }] }, to: "II_S2_nuit_linette" },
      { label: "Sortir prendre l'air", to: "II_S2_nouvelle", big: true },
    ] }),

  II_S2_nuit_enfant: P({ title: "La reine", place: "vasselin",
    text: [
      "L'enfant te demande comment elle était, la reine. Tu dis : fatiguée.",
      "« Chez moi, dit-il, il y avait une vieille, la mère Ganache, qui oubliait tout. Ses enfants, sa maison, son nom. Elle était gaie. Elle chantait toute la journée. » Il réfléchit. « Je ne sais pas si c'était triste. Pour elle, je veux dire. »",
    ],
    choices: [{ label: "Revenir à la table", fx: { conf: { enfant: 5, lisandre: 5 } }, to: "II_S2_nuit" }] }),

  II_S2_nuit_ysolde: P({ title: "Quinze ans", place: "vasselin",
    text: [
      { if: { has: "sud:mordace_ysolde" }, text: "Ysolde a passé la matinée à marcher sur le quai. Elle s'assied à côté de toi. « Il a dit que j'y étais très belle. Sur le pont. » Elle a un rire bref. « J'ai mis quinze ans à devenir quelqu'un que je n'ai pas honte de regarder. Et un greffier a la page où je suis l'autre. »" },
      { if: { not: { has: "sud:mordace_ysolde" } }, text: "Ysolde te demande si la reine a parlé d'elle. Tu dis que non. Elle hoche la tête. « Bien », dit-elle. Tu ne sais pas si elle le pense." },
    ],
    choices: [{ label: "Revenir à la table", fx: { conf: { ysolde: 5 } }, to: "II_S2_nuit" }] }),

  II_S2_nuit_pie: P({ title: "Les trois clés", place: "vasselin",
    text: [
      { if: { all: [{ item: "cire_cles" }, { seen: "II_S_mouettes" }] }, text: "Pie a ouvert la boîte et regarde les empreintes avec la tendresse d'un orfèvre. « Il me faut un serrurier, dit-il. Un vrai. Et une nuit. Les Mouettes en ont un. »" },
      { if: { all: [{ item: "cire_cles" }, { not: { seen: "II_S_mouettes" } }] }, text: "Pie a ouvert la boîte et regarde les empreintes avec la tendresse d'un orfèvre. « Il me faut un serrurier, dit-il. Un vrai. Et une nuit. Les voleurs de cette ville en ont forcément un. »" },
      { if: { not: { item: "cire_cles" } }, text: "Pie fait tourner une pièce entre ses doigts. « Une autre fois, dit-il. Il y a toujours une autre fois. » Il dit ça pour toi, pas pour lui." },
    ],
    choices: [{ label: "Revenir à la table", fx: { conf: { pie: 5 } }, to: "II_S2_nuit" }] }),

  II_S2_nuit_hylas: P({ title: "Il avait froid", place: "vasselin",
    text: [
      "Tu racontes Mordace à Hylas : l'écharpe, les mains au feu, les yeux doux. Hylas écoute avec un petit sourire triste.",
      "« Il avait toujours froid, à quinze ans. Il disait que c'était le papier. Qu'à force de toucher des choses mortes, on finit par avoir froid de l'intérieur. » Il se tait. « Là-dessus, il avait raison. Là-dessus, au moins. »",
      { if: { has: "sud2:confidence" }, text: "Quand tu lui répètes ce que Mordace t'a dit, le registre unique, le monde qui étouffe, Hylas pâlit. « C'est moi qui lui ai dit ça, murmure-t-il. Il y a trente ans. C'était une plaisanterie. »" },
    ],
    choices: [{ label: "Revenir à la table", fx: { conf: { hylas: 5 } }, to: "II_S2_nuit" }] }),

  II_S2_nouvelle: P({ title: "Le crieur", place: "vasselin",
    text: [
      "Sur le quai, un crieur public, avec sa cloche, lit une ordonnance à voix forte. Le tournoi est maintenu. Les inscriptions restent ouvertes.",
      "Puis il lit, du même ton, une liste de noms. Des champions inscrits, qu'on prie de se présenter au clerc du pré du Roi, parce qu'ils ne sont pas venus confirmer. Ils ne viendront pas. Tu le sais en l'écoutant. Il y en a onze.",
      { if: { has: "sud:inscrit" }, text: "Le blason que tu as fait inscrire, d'azur à la mouette d'argent, n'est pas sur la liste. Pas encore." },
    ],
    choices: [{ label: "Rentrer", fx: { flag: "ch2:sud:2", resume: "II_S3_matin", catchup: 6, catchupAll: true, catchupWhy: "la reine de nuit" }, to: "C2_carrefour", big: true }] }),
};
