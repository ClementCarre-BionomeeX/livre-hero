// Act II and Act III · random road events. North company on the crest of the Combes (Corbe leads, "tu", feminine),
// south company down the valley of the Pallante (Lisandre leads, "tu", feminine), and the child on the white roads of
// the Outre-Blanc (Act III, "tu", masculine). Each fires at most once, on a free step of a route.
var N = { act: "II", noLead: true };
var O = { act: "III", noLead: true };
function P(o) { return Object.assign({}, N, o); }
function P3(o) { return Object.assign({}, O, o); }
module.exports = {
  // ------------------------------------------------------------------ combes (nord)
  E2_pont_neige: P({ title: "Le pont de neige", place: null,
    text: [
      "Le sentier franchit une crevasse sur un pont de neige durcie, large comme une table. Tu l'as passé cent fois. Mais cette neige-là n'est pas la neige d'hiver : elle est blanche de l'autre blanc, celui qui ne fond pas, et le pont s'est épaissi depuis ton dernier passage. Il a poussé, comme une chose vivante.",
      "Dessous, à vingt toises, on entend de l'eau.",
      { with: "hylas", text: "Hylas pose sa canne sur le bord. « Elle sonne creux, dit-il. Mais pas comme de la neige. Comme une page. »" },
    ],
    choices: [
      { label: "Passer un par un", test: { dom: "nature", label: "La crevasse", help: [{ if: { item: "corde" }, v: 20 }, { if: { present: "rodric" }, v: 5 }] },
        win: { fx: { ep: ["seance", 400] }, to: "E2_pont_neige_ok" }, lose: { fx: { pv: -4 }, to: "E2_pont_neige_chute" } },
      { label: "Faire le grand détour par le glacier", fx: { food: -1 }, to: "E2_pont_neige_detour" },
    ] }),
  E2_pont_neige_ok: P({ title: "De l'autre côté", place: null,
    text: ["Vous passez. Le dernier pied qui quitte le pont le fait craquer, une seule fois, comme un livre qu'on ferme. Tu ne te retournes pas pour voir s'il tient encore."],
    choices: [{ back: "@route" }] }),
  E2_pont_neige_chute: P({ title: "La glissade", place: null,
    text: [
      "Le pont cède sous celui qui te suit. Tu as le temps de te jeter à plat ventre et d'attraper un poignet. Pendant un long moment, il n'y a que ça au monde : un poignet, ta main, et le bruit de l'eau dessous.",
      "Vous remontez. Tout le monde saigne un peu, des genoux et des paumes. Personne ne parle avant la halte du soir.",
    ],
    choices: [{ back: "@route" }] }),
  E2_pont_neige_detour: P({ title: "Le glacier", place: null,
    text: ["Une journée de plus, sur la glace grise, dans un vent qui coupe. Le soir, vous mangez les provisions du lendemain, parce qu'on ne peut pas marcher sur un glacier le ventre vide. Au moins, vous êtes tous là."],
    choices: [{ back: "@route" }] }),

  E2_bergere: P({ title: "La bergère", place: null,
    text: [
      "Une femme assise sur une pierre, au bord du chemin, avec un chien noir couché contre ses jambes. Elle a une houlette, un manteau de bure, des joues rouges de vent. Elle te regarde arriver avec un sourire très poli.",
      "« Excusez-moi, dit-elle. Ce chien. Vous savez comment il s'appelle ? Il me suit depuis ce matin. Il a l'air de me connaître. »",
      "Le chien remue la queue chaque fois qu'elle parle.",
    ],
    choices: [
      { label: "Lui demander son nom à elle", to: "E2_bergere_nom" },
      { label: "Laisser le chien vous guider jusqu'à sa cabane", test: { dom: "nature", label: "Le chien", help: [{ if: { present: "enfant" }, v: 15 }, { if: { has: "passe:alpage" }, v: 15 }] },
        win: { fx: { flag: "nord:bergere_maison", ep: ["perso", 600] }, to: "E2_bergere_cabane" }, lose: { to: "E2_bergere_perdue" } },
    ] }),
  E2_bergere_nom: P({ title: "Je ne sais pas", place: null,
    text: [
      "Elle réfléchit. Elle ouvre la bouche, la referme. « C'est drôle, dit-elle. Je l'avais ce matin. »",
      "Elle n'a pas peur. C'est ça le pire. Elle trouve ça un peu gênant, comme d'avoir oublié le nom d'une cousine éloignée.",
      { with: "pie", text: "Pie s'accroupit à côté d'elle. « Moi, je m'en suis choisi un, dit-il. Ça marche aussi bien. » Elle rit. Elle a un joli rire." },
    ],
    choices: [{ label: "Laisser le chien vous guider jusqu'à sa cabane", test: { dom: "nature", label: "Le chien", help: [{ if: { present: "enfant" }, v: 15 }, { if: { has: "passe:alpage" }, v: 15 }, { if: { present: "pie" }, v: 5 }] },
        win: { fx: { flag: "nord:bergere_maison", ep: ["perso", 600] }, to: "E2_bergere_cabane" }, lose: { to: "E2_bergere_perdue" } }] }),
  E2_bergere_cabane: P({ title: "Le linteau", place: null,
    text: [
      "Le chien trotte devant, s'arrête, revient, repart. Une heure plus bas, une cabane de pierre sèche, la porte ouverte, le feu éteint. Sur le linteau, quelqu'un a gravé au couteau, il y a longtemps : MAHAUT ET GUIRAUD, et une date.",
      "Elle lit le linteau. Elle le relit. « Mahaut, dit-elle. C'est joli. » Elle ne dit pas si c'est elle. Elle entre, elle s'assied près du foyer froid, et le chien se couche sur ses pieds.",
      "Guiraud, quel qu'il soit, n'est pas là. Il n'y a qu'un bol sur la table.",
    ],
    choices: [{ label: "Allumer le feu pour elle, et repartir", to: "@route" }] }),
  E2_bergere_perdue: P({ title: "Le chien s'arrête", place: null,
    text: ["Le chien vous mène à travers un éboulis, puis s'arrête au bord du blanc et gémit. Il ne veut pas aller plus loin. La cabane, si elle existe, est de l'autre côté de la ligne. La femme regarde la neige, puis vous. « Ce n'est pas grave, dit-elle. Je vais rester avec lui. » Tu la laisses là, assise au bord du blanc, avec son chien et son sourire poli."],
    choices: [{ back: "@route" }] }),

  E2_troupeau: P({ title: "Le troupeau blanc", place: null,
    text: [
      "Dans une combe, en contrebas, trois Glaneurs poussent devant eux un troupeau. Ce ne sont pas des bêtes. Ce sont des choses : une chaise, un berceau, une cloche de vache sans vache, un rouet, des sabots d'enfant, une enseigne d'auberge. Des objets qu'on a oubliés, et qui marchent, lentement, vers le col.",
      "Les Glaneurs les mènent comme des chiens de berger, sans hâte, en rabattant les traînards.",
    ],
    choices: [
      { label: "Les laisser passer, couchés dans la neige", test: { dom: "discretion", label: "Le troupeau", help: [{ if: { present: "pie" }, v: 15 }, { if: { present: "linette" }, v: 5 }] },
        win: { fx: { ep: ["seance", 400] }, to: "E2_troupeau_vu" }, lose: { to: "E2_troupeau_combat" } },
      { label: "Descendre leur reprendre le berceau", to: "E2_troupeau_combat" },
    ] }),
  E2_troupeau_vu: P({ title: "Ce qui passe", place: null,
    text: [
      "Le troupeau passe à trente pas. Tu regardes chaque objet et tu te demandes à qui il était. L'enseigne d'auberge dit AU BON ACCUEIL, en lettres effacées. Le berceau est vide. La cloche ne sonne pas, même en cognant contre les pierres.",
      "Quand ils ont disparu derrière la crête, tu t'aperçois que tu as retenu ton souffle tout du long.",
    ],
    choices: [{ back: "@route" }] }),
  E2_troupeau_combat: P({ title: "La combe", place: null,
    combat: { title: "Les bergers blancs", enemies: ["glaneur_petit", "glaneur_petit", "glaneur_petit"], terrain: "nature", range: "contact",
      flee: { dom: "nature", label: "Remonter la pente en courant", to: "@route" },
      win: { fx: { flag: "nord:berceau", ep: ["seance", 900] }, to: "E2_troupeau_berceau" }, lose: { fx: { pv: -3 }, to: "@route" } },
    text: ["Les Glaneurs lèvent la tête ensemble. Ils laissent le troupeau, qui s'arrête net, et ils montent vers vous, sans courir, comme on monte chercher une bête qui s'est écartée."],
    choices: [] }),
  E2_troupeau_berceau: P({ title: "Le berceau", place: null,
    text: [
      "Quand le dernier Glaneur s'est défait en neige, les objets restent plantés dans la combe, immobiles, sans maître. Ils ne savent pas rentrer. Personne ne les attend.",
      "Tu prends le berceau. Il est léger, en bois de noyer, avec une rose sculptée à la tête. Tu le cales dans un creux de rocher, à l'abri, du côté vert de la crête. Quelqu'un, un jour, le trouvera. Ce ne sera pas la bonne personne. Ce sera quand même quelqu'un.",
    ],
    choices: [{ back: "@route" }] }),

  E2_refuge: P({ title: "Le refuge", place: null,
    text: [
      "Un refuge de pierre, à mi-pente, avec une porte qui ferme et un âtre. Sur une étagère, un registre de passage, comme il y en a dans tous les refuges : on y écrit son nom, la date, le temps qu'il fait. Les bergers qui ne savent pas écrire y dessinent leur marque.",
      "Tu feuillettes. Les vieilles pages sont pleines. Les dernières sont blanches. Pas vierges : blanches. On voit encore la trace de la plume, le creux des lettres dans le papier, mais l'encre est partie.",
      { with: "hylas", text: "Hylas passe le pouce sur une page. Il lit les creux, comme il lit tout. « Jacquet, dit-il. Mardi. Beau temps. Et dessous : Jacquet, mercredi. Jacquet, jeudi. Il est venu trois jours de suite écrire son nom. » Il referme le registre. « Il savait. »" },
    ],
    choices: [
      { label: "Écrire vos noms, à l'encre et au couteau, dans le bois de l'étagère", fx: { flag: "nord:refuge_noms", ep: ["perso", 400] }, to: "E2_refuge_nuit" },
      { label: "Dormir et repartir à l'aube", fx: { pv: 3 }, to: "@route" },
    ] }),
  E2_refuge_nuit: P({ title: "Au couteau", place: null,
    fx: { pv: 3 },
    text: ["Tu graves ton nom dans le bois, profond, et chacun fait de même. Ça prend la moitié de la nuit. Au matin, les lettres sont toujours là. Tu passes le doigt dedans avant de partir, pour vérifier, et tu as honte de l'avoir fait."],
    choices: [{ back: "@route" }] }),

  E2_corbeau_blesse: P({ title: "Le corbeau blessé", place: null,
    text: [
      "Sur la neige, une tache noire qui se débat : un grand corbeau, une aile pendante. Il porte à la patte un fil rouge, le fil du clan. C'est un messager.",
      "Il te reconnaît. Il cesse de se débattre et te regarde de son œil jaune, la tête penchée, comme les corbeaux du camp te regardaient quand tu étais petite.",
    ],
    choices: [
      { label: "Lui remettre l'aile, à la mode du clan", test: { dom: "nature", label: "L'aile", help: [{ if: { present: "ombeline" }, v: 20 }, { if: { item: "onguent" }, v: 15 }] },
        win: { fx: { flag: "corbe:corbeau_soigne", ep: ["perso", 700] }, to: "E2_corbeau_soigne" }, lose: { to: "E2_corbeau_mort" } },
      { label: "Lire le message à sa patte", to: "E2_corbeau_message" },
    ] }),
  E2_corbeau_message: P({ title: "Le fil rouge", place: null,
    text: [
      "Le message n'est pas écrit : le clan n'écrit pas. Ce sont des nœuds sur le fil. Tu les lis du bout des doigts. Trois nœuds serrés : danger. Un nœud lâche : au nord. Deux nœuds doubles : ne revenez pas.",
      "Le corbeau a été envoyé vers le sud. Vers toi, peut-être. Il n'est jamais arrivé.",
    ],
    choices: [{ label: "Lui remettre l'aile, à la mode du clan", test: { dom: "nature", label: "L'aile", help: [{ if: { present: "ombeline" }, v: 20 }, { if: { item: "onguent" }, v: 15 }] },
        win: { fx: { flag: "corbe:corbeau_soigne", ep: ["perso", 700] }, to: "E2_corbeau_soigne" }, lose: { to: "E2_corbeau_mort" } }] }),
  E2_corbeau_soigne: P({ title: "Sur ton épaule", place: null,
    text: ["Tu serres l'aile contre le corps avec une bande de cuir, comme on te l'a appris au camp. Le corbeau se laisse faire. Il ne volera pas avant une lune. Il grimpe sur ton épaule, s'y cale, et ne la quitte plus. Les autres trouvent ça inquiétant. Toi, tu trouves ça normal."],
    choices: [{ back: "@route" }] }),
  E2_corbeau_mort: P({ title: "Le fil coupé", place: null,
    text: ["L'os casse sous tes doigts. Le corbeau ne crie pas. Il meurt dans ta main, sans bruit, avec cette dignité des bêtes qui savent. Tu coupes le fil rouge et tu le noues à ton poignet. Le clan fait ça pour ses messagers."],
    choices: [{ back: "@route" }] }),

  // ------------------------------------------------------------------ cour (sud)
  E2_vendange: P({ title: "Les moissonneurs muets", place: null,
    text: [
      "Un champ de blé en pente, au bord de la route. On moissonne. Trente personnes, des faucilles, des gerbes, des enfants qui courent derrière les lieuses. Et pas un bruit. Personne ne chante.",
      "Dans la vallée de la Pallante, on moissonne en chantant depuis toujours. Tu as écrit trois chansons de moisson toi-même, pour la cour, des chansons fausses, des chansons de bergère en soie. Celles d'ici étaient vraies. Personne ne s'en souvient.",
      "Une vieille femme se redresse, une poignée d'épis à la main. « Il y avait une chanson, dit-elle. Pour la dernière gerbe. On ne la retrouve plus. »",
    ],
    choices: [
      { label: "Leur en chanter une, au hasard, et voir si elle revient", test: { dom: "social", label: "La chanson de la dernière gerbe", help: [{ if: { present: "hylas" }, v: 15 }, { if: { present: "enfant" }, v: 5 }] },
        win: { fx: { flag: "sud:vendange", food: 2, ep: ["perso", 800] }, to: "E2_vendange_chant" }, lose: { fx: { food: 1 }, to: "E2_vendange_rate" } },
      { label: "Passer ton chemin", to: "@route" },
    ] }),
  E2_vendange_chant: P({ title: "La dernière gerbe", place: null,
    text: [
      "Tu commences une chanson de cour, une de tes fausses chansons. Au deuxième couplet, la vieille femme t'arrête de la main. « Non, dit-elle. Mais l'air. Garde l'air. » Et elle chante, elle, sur ton air, des paroles qui ne sont pas les tiennes, des paroles qu'elle ne savait pas savoir.",
      "Une femme reprend, puis un homme, puis tous. Ce n'est pas la vraie chanson. C'est celle qui la remplace. Ils la chantent jusqu'au soir, et quand vous repartez, ils vous ont chargés de pain et de fromage.",
      { with: "hylas", text: "« C'est comme ça que les chansons survivent, dit Hylas sur la route. Pas en se souvenant. En se trompant ensemble. »" },
    ],
    choices: [{ back: "@route" }] }),
  E2_vendange_rate: P({ title: "Ce n'est pas ça", place: null,
    text: ["Tu chantes. Ils écoutent poliment. Ce n'est pas ça. Ils te remercient, ils te donnent un morceau de pain, et ils se remettent à couper en silence. Tu as chanté devant des rois. Tu n'as jamais eu un public aussi triste."],
    choices: [{ back: "@route" }] }),

  E2_bac: P({ title: "Le passeur", place: null,
    text: [
      "Le pont de Merlanges a été emporté au printemps. Il reste un bac, une barque plate sur une corde, et un passeur, un homme maigre aux yeux très clairs qui mâchonne une pipe éteinte.",
      "« Un sou par tête, dit-il. Ou bien. » Il sort de sa poche une petite fiole de verre, vide. « Ou bien un souvenir. Un petit. Le goût d'un fruit, le nom d'un chien. Il y a des gens à Pallanche qui paient cher pour ça. » Il sourit. « Moi, je ne pose pas de questions. »",
      { with: "linette", text: "Linette regarde la fiole sans rien dire. Elle connaît ce verre-là. On le souffle dans un atelier, au pied de la tour." },
    ],
    choices: [
      { label: "Payer en monnaie", fx: { gold: -3 }, to: "E2_bac_passe" },
      { label: "Lui demander à qui il revend ses fioles", test: { dom: "social", label: "Le passeur", help: [{ if: { present: "pie" }, v: 15 }, { if: { present: "linette" }, v: 10 }] },
        win: { fx: { flag: "sud:passeur_parle", ep: ["perso", 700] }, to: "E2_bac_parle" }, lose: { fx: { gold: -3 }, to: "E2_bac_passe" } },
      { label: "Lui jeter sa fiole dans la rivière et prendre la barque", to: "E2_bac_combat" },
    ] }),
  E2_bac_combat: P({ title: "La fiole", place: null,
    combat: { title: "Le passeur", enemies: ["brigand"], terrain: "nature", range: "contact",
      flee: { dom: "nature", label: "Traverser à la nage", to: "E2_bac_nage" },
      win: { fx: { ep: ["seance", 400] }, to: "E2_bac_passe" }, lose: { fx: { pv: -2, gold: -3 }, to: "E2_bac_passe" } },
    text: ["La fiole fait un petit bruit de verre dans l'eau verte. Le passeur la regarde couler, puis il pose sa pipe et sort de sous le banc un gourdin ferré. Il ne se presse pas. Il a l'habitude."],
    choices: [] }),
  E2_bac_parle: P({ title: "Le verre", place: null,
    text: [
      "Il hausse les épaules. « Un homme en gris passe à la lune nouvelle. Il prend les fioles pleines, il paie, il repart. Il ne dit pas son nom. Il a de l'encre aux doigts. Toujours la même : une encre qui ne sent rien. » Il vous fait traverser pour rien, ce jour-là, sans qu'on sache pourquoi. Peut-être parce que personne ne lui avait jamais posé la question."],
    choices: [{ back: "@route" }] }),
  E2_bac_passe: P({ title: "L'autre rive", place: null,
    text: [{ outcome: "win", text: "La barque glisse sur l'eau verte, la corde grince. C'est toi qui tires. Sur l'autre rive, tu te retournes : le passeur est resté assis sur son ponton, et il se tient la mâchoire.", else: "La barque glisse sur l'eau verte, la corde grince. Sur l'autre rive, tu te retournes : le passeur a rallumé sa pipe, et il regarde une autre fiole contre le soleil, comme on regarde un vin." }],
    choices: [{ back: "@route" }] }),
  E2_bac_nage: P({ title: "À la nage", place: null,
    fx: { pv: -2 },
    text: ["L'eau est froide comme un couteau. Vous arrivez de l'autre côté à cent toises en aval, trempés, ta robe de cour pesant le poids d'un homme. Tu l'essores en jurant dans trois langues."],
    choices: [{ back: "@route" }] }),

  E2_heraut: P({ title: "Le héraut", place: null,
    text: [
      "Sur la place d'un bourg, un héraut aux couleurs de la Chancellerie lit une liste, debout sur une charrette. Ce ne sont pas des proclamations. Ce sont des noms. Des noms de villages.",
      "« Rayés du rôle du royaume, pour cause de dépeuplement : Ormeaux. Les Granges-Hautes. Saint-Vincent-du-Gué. Mallefosse. Par ordre du Greffier-Majeur, ces lieux ne sont plus tenus de payer la taille, ni de fournir des hommes, ni de recevoir les cloches. »",
      "Les gens écoutent sans comprendre. Personne, ici, ne connaît ces villages. C'est bien le problème.",
    ],
    choices: [
      { label: "Lui demander la liste, par écrit", test: { dom: "social", label: "Le héraut", help: [{ if: { not: { has: "lisandre:disgrace" } }, v: 15 }, { if: { present: "ysolde" }, v: 5 }] },
        win: { fx: { flag: "sud:liste_rayes", ep: ["perso", 600] }, to: "E2_heraut_liste" }, lose: { to: "E2_heraut_non" } },
      { label: "Écouter jusqu'au bout et repartir", to: "@route" },
    ] }),
  E2_heraut_liste: P({ title: "Quarante et un", place: null,
    text: ["Il te donne une copie, impressionné par ta robe déchirée et ton accent de cour. Quarante et un villages. Tu la plies dans ta manche. Le soir, à la halte, tu les comptes sur la carte : ils font une ligne. Une ligne qui monte, droit vers le nord, depuis Pallanche."],
    choices: [{ back: "@route" }] }),
  E2_heraut_non: P({ title: "Ordre de la Chancellerie", place: null,
    text: ["« La liste est tenue à la tour, madame. » Il replie son parchemin, descend de sa charrette, et s'en va lire ailleurs. Tu as retenu quatre noms. Tu les répètes à voix basse jusqu'au soir, et le lendemain, tu n'en as plus que trois."],
    choices: [{ back: "@route" }] }),

  E2_tire_laine: P({ title: "Le cortège des pèlerins", place: null,
    text: [
      "Vous marchez un moment avec un cortège de pèlerins qui descend vers Vasselin, pour la bénédiction des noms. Des familles, des ânes, des bannières. On chante des cantiques. On se bouscule.",
      "Tu sens une main légère, très légère, contre ta ceinture.",
    ],
    choices: [
      { label: "Saisir le poignet", test: { dom: "discretion", label: "La main", help: [{ if: { present: "pie" }, v: 25 }] },
        win: { fx: { ep: ["seance", 400] }, to: "E2_tire_laine_pris" }, lose: { fx: { gold: -4 }, to: "E2_tire_laine_vole" } },
    ] }),
  E2_tire_laine_pris: P({ title: "La petite main", place: null,
    text: [
      "Une gamine de dix ans, maigre comme un clou, qui se débat sans un cri. Elle a ta bourse dans l'autre main et la lâche tout de suite, en professionnelle.",
      { with: "pie", text: "Pie la regarde un long moment. Puis il lui glisse deux sous. « Tu prends à gauche, dit-il. Toujours à gauche, ils sont droitiers. Et tu ne voles pas les gens qui marchent à pied. Ils n'ont rien. » Elle file. Pie a l'air plus vieux, tout d'un coup." },
      { without: "pie", text: "Tu la lâches. Elle file entre les ânes et disparaît. Elle avait des yeux de vieille." },
    ],
    choices: [{ back: "@route" }] }),
  E2_tire_laine_vole: P({ title: "Plus léger", place: null,
    text: ["Quand tu baisses les yeux, le cordon est coupé net. Tu cherches dans la foule une tête qui court. Personne ne court. Tout le monde chante."],
    choices: [{ back: "@route" }] }),

  // ------------------------------------------------------------------ outreblanc (acte III)
  E3_jouets: P3({ title: "Le champ des jouets", place: null,
    text: [
      "Un champ. Si c'est un champ : un endroit où le blanc est couvert, à perte de vue, de jouets. Des toupies, des poupées de chiffon, des chevaux de bois, des billes, des osselets, des sifflets de saule. Tout ce que les enfants ont perdu, ou ont oublié, ou ont cessé d'aimer.",
      "Ils ne sont pas abîmés. Ils attendent.",
      { with: "givre", text: "Givre fourre son nez partout, ravi, et revient avec une balle de cuir dans la gueule, comme un vrai chien." },
    ],
    choices: [
      { label: "Chercher les tiens", to: "E3_jouets_cherche" },
      { label: "Traverser sans rien toucher", to: "@route" },
    ] }),
  E3_jouets_cherche: P3({ title: "La toupie", place: null,
    text: [
      "Tu cherches longtemps. Tu ne sais pas ce que tu cherches. Tu n'as pas eu beaucoup de jouets, à Sauvelune : un couteau, une fronde, un bateau d'écorce que Joris t'avait taillé et qui a coulé dans la Sauve.",
      "Tu ne trouves pas le bateau. Tu trouves, par terre, une toupie de buis, peinte de rouge et de bleu, avec un nom gravé dessous, d'une écriture d'adulte qui s'applique : AELAN.",
      "Tu ne te souviens pas de cette toupie. Quelqu'un te l'a offerte, avant. Avant Sauvelune.",
    ],
    choices: [
      { label: "La prendre", fx: { item: "toupie_aelan", flag: "iii:toupie", ep: ["perso", 800] }, to: "E3_jouets_prise" },
      { label: "La laisser où elle est", fx: { flag: "iii:toupie_laissee" }, to: "@route" },
    ] }),
  E3_jouets_prise: P3({ title: "Dans ta poche", place: null,
    text: ["Tu la lances, une fois, sur un coin de blanc durci. Elle tourne. Elle tourne très longtemps, beaucoup plus longtemps qu'une toupie ne devrait, et elle chante en tournant, un petit bourdon aigu que tu as déjà entendu, quelque part, la tête contre une épaule."],
    choices: [{ back: "@route" }] }),

  E3_soldat: P3({ title: "Le soldat", place: null,
    text: [
      "Un homme marche à votre rencontre, dans la direction opposée à toutes les files. Il porte un gambison d'Esquarre, une pique sans fer, un casque cabossé. Il marche au pas, exactement, comme à l'exercice.",
      "« Halte, dit-il quand il te voit. Mot de passe. » Il attend. « Je ne m'en souviens plus non plus, ajoute-t-il après un moment. Mais il faut le demander. C'est le règlement. »",
      "Il est mort, ou oublié, ou les deux. Il ne sait pas lequel.",
    ],
    choices: [
      { label: "Lui demander son nom", to: "E3_soldat_nom" },
      { label: "Lui donner un mot de passe, n'importe lequel", fx: { flag: "iii:soldat_passe" }, to: "E3_soldat_passe" },
    ] }),
  E3_soldat_nom: P3({ title: "Le matricule", place: null,
    text: [
      "Il récite un matricule. Une compagnie. Un fort, dans les Marches. Une année : il y a cent ans. Pas de nom. « On nous appelait par le numéro, dit-il. Le nom, c'était pour la famille. La famille est partie avant moi. »",
      { with: "ysolde", text: "Ysolde se met au garde-à-vous devant lui, ce qu'elle n'a fait devant personne depuis Brenne. « Capitaine Ysolde, du fort de Brenne, dit-elle. Tu es relevé, soldat. » Il la regarde. Il pleure, sans changer de visage. Puis il pose sa pique, très soigneusement, et s'en va vers les autres." },
      { without: "ysolde", text: "Tu ne peux rien lui donner. Il le sait. Il te salue, reprend son pas, et repart monter la garde devant un fort qui n'existe plus." },
    ],
    choices: [{ fx: { ep: ["perso", 500] }, back: "@route" }] }),
  E3_soldat_passe: P3({ title: "Sauvelune", place: null,
    text: ["« Sauvelune », dis-tu. Il hoche la tête, gravement. « Passez. » Il s'écarte. Quand tu te retournes, il a repris sa faction, et à chaque file de marcheurs qui passe, tu l'entends demander le mot de passe, et répondre lui-même, d'une voix contente : « Sauvelune. Passez. »"],
    choices: [{ back: "@route" }] }),

  E3_lettres: P3({ title: "La neige de lettres", place: null,
    text: [
      "Il se met à neiger. Pas de la neige : des lettres. Des feuilles pliées, cachetées ou non, qui tombent lentement du blanc d'en haut et se posent sur le blanc d'en bas. Des lettres qu'on n'a jamais envoyées. Des lettres qu'on n'a jamais lues. Des lettres qu'on a écrites pour soi.",
      "Une se pose sur ton épaule.",
    ],
    choices: [
      { label: "La lire", to: "E3_lettres_lue" },
      { label: "La laisser tomber avec les autres", to: "@route" },
    ] }),
  E3_lettres_lue: P3({ title: "Ma chère", place: null,
    text: [
      "« Ma chère, je ne t'enverrai pas celle-ci non plus. Je voulais te dire que le petit marche, maintenant, et qu'il a tes yeux, et que je ne sais pas si c'est une bénédiction. Je voulais te dire que je ne t'en veux pas d'être partie. C'est faux. Je voulais te dire que c'est faux. Je la brûlerai comme les autres. »",
      "Pas de signature. Pas de nom. Une écriture de femme, qui appuie trop sur la plume.",
      "Tu la plies et tu la remets dans la neige. Elle ne t'était pas destinée. Aucune ne l'était.",
    ],
    choices: [{ fx: { ep: ["perso", 300] }, back: "@route" }] }),

  E3_puits: P3({ title: "Le puits des mots", place: null,
    text: [
      "Un puits, au milieu de rien, avec une margelle de pierre et une poulie sans corde. Quand tu te penches, tu entends monter des voix. Des mots. Des mots seuls, sans phrase, qui remontent comme des bulles : « Demain. » « Pardon. » « Reste. » « Maman. » « Jamais. »",
      "Ce sont les derniers mots. Ceux que les gens ont dits avant d'être oubliés, et que personne n'a entendus.",
    ],
    choices: [
      { label: "Écouter longtemps, au cas où tu en reconnaîtrais un", test: { dom: "magie", label: "Le puits", help: [{ if: { present: "hylas" }, v: 15 }, { if: { present: "lisandre" }, v: 10 }] },
        win: { fx: { flag: "iii:puits_joris", ep: ["perso", 900] }, to: "E3_puits_joris" }, lose: { to: "E3_puits_rien" } },
      { label: "Crier ton nom dans le puits", fx: { flag: "iii:puits_crie" }, to: "E3_puits_crie" },
    ] }),
  E3_puits_joris: P3({ title: "Une voix", place: null,
    text: ["Au bout d'un long moment, une voix d'homme, grave, essoufflée, qui dit seulement : « La roue. » Puis plus rien. Tu ne sais pas si c'est Joris. Il disait ça tous les matins, en ouvrant le moulin, comme d'autres disent bonjour. Tu restes penché sur la margelle longtemps après que la voix s'est tue."],
    choices: [{ back: "@route" }] }),
  E3_puits_rien: P3({ title: "Des inconnus", place: null,
    text: ["Tu écoutes. Ce sont des inconnus. Des milliers d'inconnus qui disent tous, à peu près, les mêmes cinq mots. Tu finis par te redresser, avec le sentiment très net d'avoir lu le courrier de quelqu'un d'autre."],
    choices: [{ back: "@route" }] }),
  E3_puits_crie: P3({ title: "L'écho", place: null,
    text: ["Tu cries ton nom. Le puits ne le renvoie pas. Il le garde. Tu attends l'écho, qui ne vient pas, et tu comprends, avec un frisson, que ton nom vient de rejoindre les autres, là-dessous, et que si un jour quelqu'un se penche, il l'entendra."],
    choices: [{ back: "@route" }] }),
};
