// Act I · prologue of the child of Sauvelune, part two: the day of forgetting (the village as a hub, with a clock: the
// longer you take, the more is lost), the Gleaner in the temple and the act's hard choice, the farewell, and the two
// roads to Pallanche (the valley, or the ridges after the snow), with their events.
var CLOCK = { clock: { EN: 1 } };
module.exports = {
  // ---------------------------------------------------------------- the second day
  EN_aube: { act: "I", title: "Le matin d'après", place: "sauvelune",
    fx: { until: 7, ep: ["seance", 800] },
    text: [
      "Au matin, la neige ne tombe plus. Elle couvre tout, d'une couche égale, épaisse comme la main, sur les toits, les rues, le pré, la roue arrêtée du moulin. Le soleil de juillet tape dessus, et elle ne fond pas. Il fait doux. Les oiseaux chantent. Ça a l'air d'un matin de plein hiver tombé par erreur au milieu de l'été.",
      "Dans la cuisine, Agathe a allumé le four. Elle a les joues rouges et de la farine jusqu'aux coudes, comme tous les matins. Elle se retourne quand tu entres.",
      "Et elle ne te pousse pas la mèche derrière l'oreille.",
      "Elle regarde Pim, assis au bout de la table, qui balance ses pieds en attendant son pain. Elle le regarde avec gentillesse, avec un peu d'inquiétude, comme on regarde l'enfant d'une voisine qu'on vous a confié sans dire quand on viendrait le chercher.",
      "« Il est mignon, ce petit, te dit-elle à voix basse. Il était dans ton lit quand je suis montée. C'est à qui ? Il ne veut pas me dire son nom. »",
      "Pim la regarde. Il a huit ans. Il ne pleure pas tout de suite.",
      { if: { has: "EN:crie" }, text: "Elle sait qui est Joris. Elle sait qui elle est. Elle sait qui tu es, il te semble, mais elle hésite sur ton prénom comme sur un mot étranger. C'est Pim, que tu n'as pas eu le temps de crier assez fort, qui a disparu de sa tête." },
    ],
    choices: [{ label: "Prendre Pim dans tes bras", fx: { flag: "ch:enfant:1", resume: "EN_village" }, to: "C_carrefour" }] },

  EN_village: { act: "I", title: "Sauvelune sous la neige", place: "sauvelune", hub: true,
    fx: { questSeen: "EN_coffre" },
    text: [
      { first: true, text: "Le village s'est réveillé étranger à lui-même. Les gens sortent sur le pas de leur porte et se regardent sans se reconnaître, poliment, avec des sourires gênés. Un homme demande à une femme qui elle est, et elle ne sait pas répondre. Les linteaux sont blancs : plus un nom peint sur une seule porte." },
      { if: { clock: "EN", max: 1 }, text: "Les enfants se souviennent mieux que les adultes ; ils courent de maison en maison, tirent les manches, crient des prénoms, et les adultes les regardent comme on regarde des petits fous." },
      { first: true, text: "Tu te souviens de tout. De chaque visage, de chaque nom, de chaque querelle de bornage. La neige a glissé sur toi sans rien prendre." },
      { if: { clock: "EN", min: 2, max: 3 }, text: "Le soleil monte, et l'oubli avec lui. On ne voit plus d'enfants courir : ils se sont assis, eux aussi, sur les seuils, l'air perdu." },
      { if: { clock: "EN", min: 4 }, text: "Il est tard. La moitié du village ne sait plus son propre nom. Les autres ne savent plus celui de leurs voisins. La neige, elle, n'a pas fondu d'un pouce." },
      { if: { clues: "N", max: 1 }, text: "Tu ne comprends encore rien à ce qui arrive. Mais quelqu'un, quelque part, doit savoir." },
      { if: { clues: "N", min: 2 }, text: "Tu commences à comprendre. La chose reviendra ce soir, et ce soir elle entrera au temple. Il faudra être là." },
    ],
    choices: [
      { label: "Rester avec Pim et Agathe : rendre à Agathe son fils", to: "EN_pim2", hide: { has: "EN:pim2" }, fx: CLOCK },
      { label: "Le temple, et le registre du Père Anselme", to: "EN_temple", hide: { has: "EN:temple" }, fx: CLOCK },
      { label: "La forge des Ferrand : Tess", to: "EN_forge", hide: { has: "EN:forge" }, fx: CLOCK },
      { label: "Le rucher de Mathurin", to: "EN_ruches2", hide: { any: [{ has: "EN:ruches2" }, { has: "mathurin:ruches" }] }, fx: CLOCK },
      { label: "Le grenier du moulin, et le vieux coffre de Joris qu'on ne t'a jamais laissé ouvrir", to: "EN_grenier", hide: { has: "EN:grenier" }, fx: CLOCK },
      { label: "L'orée du village, sur la route de Pont-de-Saule", to: "EN_oree", hide: { has: "EN:oree" }, fx: CLOCK },
      { label: "La doyenne, sur sa chaise, sous la neige", to: "EN_k_doyenne_neige", hide: { seen: "EN_k_doyenne_neige" } },
      { label: "Le vieux Gervais, son pot d'ocre à la main, devant les façades", to: "EN_k_gervais", hide: { seen: "EN_k_gervais" } },
      { label: "Midi devrait sonner au clocher. Il ne sonne pas", to: "EN_cloche", hide: { any: [{ has: "EN:cloche" }, { clock: "EN", max: 1 }] } },
      { label: "Attendre le soir au temple, et la chose qui viendra", to: "EN_soir2", big: true, if: { clues: "N", min: 2 }, why: "Il te faut au moins deux indices sur la neige (il y en a huit à trouver)." },
    ] },

  EN_cloche: { act: "I", title: "Le sonneur", place: "sauvelune",
    fx: { flag: "EN:cloche" },
    text: [
      "Tu lèves les yeux vers le clocher carré du temple. Là-haut, entre les abat-son, tu vois le vieux Baptiste, le sonneur, la corde à la main. Il la regarde comme on regarde un serpent. Il ne sait plus à quoi elle sert.",
      "C'est la première fois en trois cents ans que midi ne sonne pas à Sauvelune. Tu le sais parce que c'est gravé sur la cloche : *Je sonne depuis l'an de la fondation et je sonnerai jusqu'à la fin.* Personne ne pourra plus lire ça, à part toi.",
    ],
    choices: [{ label: "Continuer", to: "EN_village" }] },

  // ---------------------------------------------------------------- Pim's name
  EN_pim2: { act: "I", title: "Le fils d'Agathe", place: "sauvelune",
    fx: { flag: "EN:pim2" },
    text: [
      "Pim est assis sur la marche du moulin, les genoux dans les bras. Il a fini par pleurer, en silence, avec application, et maintenant il ne pleure plus. Agathe est derrière la fenêtre de la cuisine ; elle le regarde de temps en temps, gentiment, étonnée que ce petit inconnu lui serre le cœur.",
      "« Elle sait plus, dit Pim. Elle sait plus du tout. » Il te regarde. « Toi, tu sais ? »",
      "« Je sais tout. »",
      "Il hoche la tête, rassuré au-delà de toute raison, comme si ça réglait la question.",
    ],
    choices: [
      { label: "Lui faire chanter son nom devant Agathe, comme tu le lui as appris", if: { has: "pim:chanson" }, why: "Il faudrait qu'il connaisse une chanson à lui.",
        test: { dom: "social", label: "Chanson", help: [{ if: { clue: "n_fondre" }, v: 20 }, { if: { has: "pim:veille" }, v: 10 }] },
        win: { fx: { flag: "pim:nom", quest: "EN_pim", ep: ["perso", 800] }, to: "EN_pim_chante" },
        lose: { fx: { flag: "pim:nom_rate" }, to: "EN_pim_echec" } },
      { label: "Siffler la note fausse du sifflet de saule, celle qui faisait fuir les poules", if: { item: "sifflet_pim" }, why: "Il te faudrait un bruit qu'Agathe ne peut pas avoir oublié.",
        fx: { flag: "pim:nom", quest: "EN_pim", ep: ["perso", 800] }, to: "EN_pim_siffle" },
      { label: "Donner à Agathe ton propre souvenir de Pim, celui où il apprend à nager", tag: "Souvenir donné", stain: true, if: { souv: "enfant:pim" }, why: "Tu ne l'as plus.",
        fx: { souv: "enfant:pim", flag: ["pim:nom", "pim:souvenir_donne"], quest: "EN_pim", ep: ["perso", 1000] }, to: "EN_pim_souvenir" },
      { label: "Dire son nom à Agathe, simplement, en la regardant dans les yeux", test: { dom: "social", label: "Persuasion", diff: -20, help: [{ if: { clue: "n_fondre" }, v: 20 }] },
        win: { fx: { flag: "pim:nom", quest: "EN_pim", ep: ["perso", 800] }, to: "EN_pim_chante" },
        lose: { fx: { flag: "pim:nom_rate" }, to: "EN_pim_echec" } },
    ] },

  EN_pim_chante: { act: "I", title: "Pim, fils de Joris et d'Agathe", place: "sauvelune",
    text: [
      { if: { has: "pim:chanson" }, text: "Pim entre dans la cuisine. Il se plante devant Agathe, les poings serrés, et il chante, faux, fort, avec tout le courage de ses huit ans, sur l'air de la chanson des foins : *Pim, fils de Joris le meunier, et d'Agathe, de Sauvelune.*" },
      { if: { not: { has: "pim:chanson" } }, text: "Tu entres dans la cuisine, Pim devant toi, tes mains sur ses épaules. Tu regardes Agathe dans les yeux et tu dis, lentement, comme on lit une ligne du registre : *Pim, fils de Joris le meunier, et d'Agathe, de Sauvelune.*" },
      "Agathe le regarde. Sur ses cheveux, il y avait encore de la neige de la veille, quelques flocons pris dans son chignon. Ils fondent. Un à un. Sans eau.",
      "Elle s'assied lourdement sur le banc. Elle met les mains sur sa bouche. Puis elle ouvre les bras, et Pim s'y jette avec une telle force que le banc recule d'un pied.",
      "Elle se tait longtemps. Puis elle te regarde, par-dessus la tête de Pim. Elle sait qui il est. Toi, elle te regarde avec beaucoup d'affection et un peu d'embarras, comme on regarde quelqu'un dont on a oublié le prénom, sans oser le lui demander.",
    ],
    choices: [{ label: "Sortir en silence", back: "EN_village" }] },

  EN_pim_siffle: { act: "I", title: "La note fausse", place: "sauvelune",
    text: [
      "Tu souffles dans le sifflet de saule. La note part, aiguë, affreuse, celle qui a fait fuir les poules hier matin, celle qui a fait crier *assez !* à Agathe depuis le fond de la cuisine.",
      "« Pim ! Combien de fois je t'ai dit… »",
      "Elle s'arrête au milieu de la phrase, le torchon levé. Les flocons dans ses cheveux fondent d'un coup. Elle regarde Pim. Elle le reconnaît. Et toi, tu hésites entre rire et pleurer, alors tu fais les deux, et Pim aussi, et Agathe aussi, et c'est un vacarme qui ressemble à la fête d'hier.",
      "Plus tard, elle te demandera comment tu t'appelles. Doucement, gênée. Tu le lui diras.",
    ],
    choices: [{ label: "Sortir, le sifflet dans ta poche", back: "EN_village" }] },

  EN_pim_souvenir: { act: "I", title: "La Sauve, un jour d'août", place: "sauvelune",
    text: [
      "Tu prends les mains d'Agathe dans les tiennes. Tu ne sais pas comment on fait. Tu le fais quand même : tu penses très fort à ce jour d'août, à la Sauve, à l'eau verte, à Pim qui crache et qui rit de terreur dans tes bras, à son poids, à sa peau froide, au soleil sur la rivière. Et tu le pousses vers elle, comme on pousse une barque.",
      "Quelque chose passe. Tu le sens partir, comme une dent qui tombe. Et après, il y a un trou, un trou propre, sans douleur, là où il y avait la rivière.",
      "Agathe pousse un cri. Elle regarde Pim, et elle le reconnaît, et elle dit : « La Sauve. Tu as failli te noyer dans la Sauve. » Elle se souvient du jour d'août. Elle s'en souvient comme si elle y avait été. Elle s'en souvient avec tes yeux.",
      "Toi, tu ne sais plus. Tu sais que Pim sait nager. Tu ne sais plus qui le lui a appris.",
    ],
    choices: [{ label: "Sortir, avec ce trou en toi", back: "EN_village" }] },

  EN_pim_echec: { act: "I", title: "Une voisine aimable", place: "sauvelune",
    text: [
      "Agathe écoute. Elle sourit avec beaucoup de gentillesse. Elle donne à Pim une tartine de miel et lui caresse la joue. « Tu es un bon petit garçon, dit-elle. Ta maman doit être bien inquiète. »",
      "Pim mange la tartine. Il ne pleure pas. C'est pire.",
      "Tu te promets de revenir. Tu te promets de trouver ce qui fait ça, et de le défaire.",
    ],
    choices: [{ fx: { flag: "pim:promesse" }, back: "EN_village" }] },

  // ---------------------------------------------------------------- the temple and the register
  EN_temple: { act: "I", title: "Le registre", place: "sauvelune",
    fx: { flag: "EN:temple", clue: "n_registre" },
    text: [
      "Le Père Anselme n'a pas dormi. Il est assis dans la sacristie devant le registre ouvert, et il a écrit sur le dos de sa main, à l'encre, en grosses lettres : *ANSELME. PRÊTRE. SAUVELUNE.* Il se relit à chaque page qu'il tourne.",
      "Le registre est presque blanc. Les pages de la fondation, celles qu'il ne montrait à personne, sont blanches comme du linge propre. Il ne reste que les vingt dernières années, à l'encre de plus en plus pâle.",
      "« Je les recopie, dit-il. Je les recopie à mesure qu'ils partent. Mais ma main est lente, et ils partent plus vite. » Il lève vers toi des yeux rouges. « Qui es-tu ? Non, attends. Je le sais. Je l'ai écrit quelque part. » Il cherche sur son autre main.",
    ],
    choices: [
      { label: "T'asseoir à côté de lui et recopier les noms avec lui, aussi vite que tu peux", test: { dom: "savoir", label: "Copie", help: [{ if: { has: "passe:temple" }, v: 20 }] },
        win: { fx: { item: "registre_page", flag: "registre:copie", ep: ["perso", 800] }, to: "EN_temple_copie" },
        lose: { fx: { flag: "registre:rate" }, to: "EN_temple_rate" } },
      { label: "Arracher une page encore lisible et la mettre à l'abri sur toi, où la neige ne prend rien", fx: { item: "registre_page", flag: "registre:arrache", ep: ["perso", 500] }, to: "EN_temple_arrache" },
    ] },

  EN_temple_copie: { act: "I", title: "Plume contre neige", place: "sauvelune",
    text: [
      "Vous écrivez côte à côte pendant des heures, lui sa main tremblante, toi ta belle écriture du dimanche, et vous gagnez du terrain, page après page, sur l'encre qui pâlit. Tu remarques une chose : ce que *tu* écris ne pâlit pas. Ce qu'il écrit, lui, commence à grisailler au bout d'une heure.",
      "Quand vous arrivez à la page de l'an de la grêle, il y a vingt ans, tu tombes sur une ligne d'une autre encre, plus ancienne que celles qui l'entourent, et qui ne pâlit pas non plus : *un enfant trouvé, sans nom, confié au moulin.* L'écriture est penchée, elle déborde de la ligne.",
      "Le prêtre te donne la page que tu viens de recopier. « Garde-la sur toi. Sur toi, elle tient. » Il te regarde avec une drôle d'expression. « Sur toi, tout tient. »",
    ],
    choices: [{ label: "Ranger la page", to: "EN_village" }] },

  EN_temple_rate: { act: "I", title: "Trop lent", place: "sauvelune",
    text: [
      "Ta main se crispe, l'encre bave, les noms s'effacent devant toi plus vite que tu ne peux les lire. *Ferrand, Marthe… Ferrand, Ma…* et puis rien. Tu recopies une page, et pendant ce temps il en part trois.",
      "Le Père Anselme pose sa main sur la tienne. « Arrête, mon enfant. On ne vide pas la mer avec une écuelle. » Il ferme le registre. « Il faudrait trouver ce qui la fait monter. »",
    ],
    choices: [{ back: "EN_village" }] },

  EN_temple_arrache: { act: "I", title: "Une page", place: "sauvelune",
    text: [
      "Le prêtre pousse un cri quand le papier se déchire. Puis il voit ce que tu vois : sur la page arrachée, que tu tiens contre ta poitrine, l'encre cesse de pâlir. Les noms tiennent. Sur toi, ils tiennent.",
      "« Bon, dit-il. Bon. » Il s'essuie les yeux. « Que Dieu me pardonne, j'aurais dû y penser. Garde-la. Ne la donne à personne. »",
      "Sur la page, entre deux naissances de l'an de la grêle, il y a une ligne d'une autre encre : *un enfant trouvé, sans nom, confié au moulin.*",
    ],
    choices: [{ label: "Ranger la page", to: "EN_village" }] },

  // ---------------------------------------------------------------- the forge: Tess
  EN_forge: { act: "I", title: "La forge des Ferrand", place: "sauvelune", shop: "ferrand",
    fx: { flag: "EN:forge" },
    text: [
      "La forge sonne. C'est le seul bruit vivant de tout Sauvelune ce matin : un marteau sur une enclume, régulier, furieux. Tess est devant le foyer, en tablier de cuir, et elle forge un fer à cheval dont personne n'a besoin, parce que c'est la seule chose qu'elle sache faire de ses mains pour qu'elles ne tremblent pas.",
      "Son père est assis sur un tonneau dans un coin, et il la regarde travailler avec l'admiration polie d'un client. Il ne sait pas qui elle est. Corentin est parti dans la montagne à l'aube, sans raison donnée ; la raison lui avait échappé.",
      { if: { has: "tess:chene" }, text: "Tess lève les yeux quand tu entres. Elle sait. « Le chêne, dit-elle seulement. Je suis montée voir ce matin. Les noms ont disparu de l'écorce, tous, ceux des vieux, ceux de tout le monde. Il ne reste que les nôtres. »" },
      { if: { not: { has: "tess:chene" } }, text: "Tess lève les yeux quand tu entres. Il y a un moment, un très court moment, où elle hésite. Puis elle dit ton prénom. Elle le dit lentement, comme on remonte un seau d'un puits profond." },
      "« Tout le monde oublie, dit-elle. Mon père. Corentin. La moitié de la rue. Moi, je tiens. Je ne sais pas combien de temps. Il y a quelque chose qui tire, là, derrière les yeux. Comme une marée. »",
    ],
    choices: [
      { label: "« Viens avec moi ce soir. La chose reviendra au temple, et je veux quelqu'un qui sait se servir d'un marteau. »", fx: { flag: "tess:viens", ep: ["perso", 300] }, to: "EN_forge_viens" },
      { label: "« Reste avec Pim, ce soir. S'il m'arrive quelque chose, il faut quelqu'un qui se souvienne de lui. »", fx: { flag: "tess:pim", ep: ["perso", 300] }, to: "EN_forge_pim" },
    ] },

  EN_forge_viens: { act: "I", title: "Le marteau", place: "sauvelune",
    text: [
      "Elle trempe le fer dans le baquet, qui siffle. « Bien sûr que je viens. Tu croyais quoi ? »",
      "Elle décroche du mur une fourche à foin aux dents neuves, qu'elle a forgées elle-même la semaine dernière, et te la tend. Pour elle, elle garde son marteau.",
      "« Si je commence à oublier ton nom, ce soir, dit-elle sans te regarder, tu me le cries. D'accord ? Tu me le cries jusqu'à ce que je me souvienne. »",
    ],
    choices: [{ label: "Prendre la fourche", fx: { item: "fourche" }, to: "EN_village" }] },

  EN_forge_pim: { act: "I", title: "La gardienne", place: "sauvelune",
    text: [
      "Elle te regarde longtemps, le fer rouge au bout de la pince. « Tu me demandes de rester derrière. »",
      "« Je te demande de garder quelqu'un. »",
      "Elle trempe le fer. Elle dit oui. Elle dit aussi d'autres choses, qu'on ne répète pas dans un livre, et puis elle te serre contre elle si fort que tu sens le tablier de cuir te marquer la poitrine. « Reviens », dit-elle. Ce n'est pas une prière. C'est un ordre.",
    ],
    choices: [{ back: "EN_village" }] },

  // ---------------------------------------------------------------- the bees, second day
  EN_ruches2: { act: "I", title: "Le rucher, le lendemain", place: "sauvelune",
    fx: { flag: "EN:ruches2" },
    text: [
      "Mathurin est assis devant sa cabane, au milieu de ses ruches, et il ne sait plus ce que sont les ruches. Il les regarde avec intérêt, comme des objets d'un pays lointain. Les abeilles sont toujours là, en grappes immobiles, poudrées de blanc.",
      "« Tu connais ces boîtes ? te demande-t-il aimablement. Elles sont jolies. Je crois qu'elles sont à moi. »",
    ],
    choices: [
      { label: "Enfumer les ruches à la bruyère sèche", test: { dom: "nature", label: "Apiculture", diff: -10 },
        win: { fx: { flag: "mathurin:ruches", quest: "EN_ruches", ep: ["perso", 600], item: "miel" }, to: "EN_ruches2_ok" },
        lose: { fx: { flag: "mathurin:perdu", quest: "EN_ruches" }, to: "EN_ruches2_ko" } },
      { label: "Dire à voix haute le nom de Mathurin, puis celui de chacune de ses ruches, qu'il t'a appris quand tu étais petit", if: { clue: "n_fondre" }, why: "Il faudrait savoir ce qui défait cette poussière blanche.",
        fx: { flag: "mathurin:ruches", quest: "EN_ruches", ep: ["perso", 900], item: "miel" }, to: "EN_ruches2_ok" },
    ] },

  EN_ruches2_ok: { act: "I", title: "Les ruches ont des noms", place: "sauvelune",
    text: [
      { if: { clue: "n_fondre" }, text: "*Mathurin.* Le vieux sursaute. *La Reine-Claude. La Grosse Berthe. La Folle. Saint-Ambroise.* Chaque ruche a un nom, il te les a appris un été quand tu avais six ans et que tu voulais devenir apiculteur pour avoir le droit de manger du miel tous les jours." },
      { if: { clue: "n_fondre" }, text: "À chaque nom, une grappe se défait. Les abeilles se secouent, la poussière blanche s'envole, et le pré se remet à vibrer. Mathurin se lève, regarde ses ruches, et se met à rire, et à pleurer, et à jurer, tout ensemble." },
      { if: { not: { clue: "n_fondre" } }, text: "La fumée de bruyère passe sur les grappes. D'abord, rien. Puis une abeille se secoue, la poussière blanche s'envole, une autre suit, et le pré se remet à vibrer." },
      { if: { not: { clue: "n_fondre" } }, text: "Mathurin se lève d'un coup. « La Reine-Claude, dit-il. La Grosse Berthe. La Folle. Saint-Ambroise. » Il nomme ses ruches l'une après l'autre, et il se met à rire, et à pleurer, et à jurer, tout ensemble." },
      "Il te donne un pot de miel noir. « La Dame Blanche, dit-il, plus bas. Ma grand-mère disait qu'elle ne vient jamais seule. Qu'il y a toujours derrière elle un homme en noir qui écrit. »",
    ],
    choices: [{ back: "EN_village" }] },

  EN_ruches2_ko: { act: "I", title: "Les jolies boîtes", place: "sauvelune",
    text: [
      "La fumée monte, les abeilles ne bougent pas. Mathurin te regarde faire avec bienveillance, comme on regarde un jeune homme faire une chose étrange dont il a sûrement de bonnes raisons.",
      "Quand tu repars, il te fait au revoir de la main. Il a perdu ton nom, et le sien. Il a l'air, curieusement, en paix.",
    ],
    choices: [{ back: "EN_village" }] },

  // ---------------------------------------------------------------- the attic chest
  EN_grenier: { act: "I", title: "Le coffre de Joris", place: "sauvelune",
    fx: { flag: "EN:grenier", questSeen: "EN_coffre" },
    text: [
      "Le grenier du moulin sent le grain, la souris et le temps. Sous la lucarne, entre deux sacs de son, il y a le coffre de Joris : un coffre de mélèze cerclé de fer, avec une serrure que tu n'as jamais vue ouverte. Quand tu étais petit, tu demandais ce qu'il y avait dedans. Agathe répondait *des choses de ton père.* Joris ne répondait pas.",
      "Joris est en bas, dans la salle de la meule. Il ne sait plus à quoi sert la meule. Il ne t'empêchera pas.",
    ],
    choices: [
      { label: "Forcer la serrure avec la pointe de ton couteau", test: { dom: "discretion", label: "Serrure" },
        win: { fx: { ep: ["perso", 400] }, to: "EN_grenier_ouvert" },
        lose: { fx: { pv: -1 }, to: "EN_grenier_force" } },
      { label: "Faire sauter les gonds à coups de talon, tant pis pour le coffre", test: { dom: "combat", label: "Force" },
        win: { fx: { ep: ["perso", 300] }, to: "EN_grenier_ouvert" },
        lose: { fx: { pv: -1 }, to: "EN_grenier_force" } },
      { label: "Descendre demander la clé à Joris", to: "EN_grenier_joris" },
    ] },

  EN_grenier_force: { act: "I", title: "Le mélèze", place: "sauvelune",
    text: [
      "La serrure résiste, le bois résiste, ton pouce saigne. Tu t'assieds sur un sac de son, découragé. Et puis tu remarques que le fond du coffre, du côté du mur, est disjoint : une planche que les souris ont rongée. Tu y glisses les doigts. Tu tires.",
    ],
    choices: [{ label: "Tirer plus fort", to: "EN_grenier_ouvert" }] },

  EN_grenier_joris: { act: "I", title: "La clé", place: "sauvelune",
    text: [
      "Joris est debout devant la meule, les bras ballants. Il te regarde arriver avec une politesse lointaine. Tu lui demandes la clé du coffre. Il ne sait pas de quel coffre tu parles.",
      "Mais quand tu tends la main, il met la sienne dans la poche de son gilet, sans y penser, comme on fait un geste mille fois répété, et il en sort une petite clé de fer, toute polie. Il la regarde avec étonnement. Il te la donne.",
      "« Elle te revient, dit-il. Je crois. »",
    ],
    choices: [{ label: "Remonter au grenier", fx: { flag: "joris:cle" }, to: "EN_grenier_ouvert" }] },

  EN_grenier_ouvert: { backName: "le grenier", act: "I", title: "Ce qu'il y avait dans le coffre", place: "sauvelune",
    fx: { clue: "n_lettre", item: "lettre_hylas", flag: "enfant:lettre", quest: "EN_coffre", ep: ["perso", 800] },
    text: [
      "Il n'y a presque rien dedans. Une couverture d'enfant, d'une laine vierge, plus blanche et plus fine que toutes celles que tu connais, et froide au toucher, même au soleil. Un petit caillou blanc, lisse, poli comme un œuf.",
      { if: { has: "passe:caillou" }, text: "C'est le même que le tien. Tu les poses côte à côte dans ta paume, et ils tintent l'un contre l'autre comme deux morceaux de verre." },
      "Et une lettre, pliée en quatre. Une écriture penchée, qui déborde des lignes.",
      "Tu la lis. Tu la relis. Le grenier sent le grain, la souris et le temps.",
    ],
    choices: [{ label: "Lire la lettre encore une fois, puis la mettre sur toi", to: "EN_village" }] },

  // ---------------------------------------------------------------- the edge of the village
  EN_oree: { act: "I", title: "L'orée", place: "sauvelune", shop: "colporteuse",
    fx: { flag: "EN:oree", clue: "n_voyageurs", meet: "colporteuse" },
    text: [
      "Au bout de la rue du moulin, là où la route de Pont-de-Saule entre dans le village, la neige s'arrête net, comme coupée au couteau. D'un côté, le blanc ; de l'autre, la poussière brune de juillet. Sur la limite, une ligne de petits cristaux qui scintillent, droite comme un fil tendu.",
      "Sur la route, une silhouette arrive, courbée sous une hotte : Fanchon la colporteuse, qui monte à Sauvelune deux fois l'an. Tu la connais depuis toujours. Elle passe la ligne de neige. Elle marche au milieu de la rue, entre les maisons. Elle marche, les yeux vides. Elle marche dans Sauvelune comme on marche dans un pré.",
      "Tu l'appelles. Elle sursaute, se retourne, te voit. « Bon Dieu, tu m'as fait peur. Qu'est-ce que tu fais là, au milieu de rien ? »",
      "« C'est Sauvelune, Fanchon. »",
      "Elle regarde autour d'elle. Elle regarde la maison commune, à trois pas. « Sauvelune ? Connais pas. C'est loin ? Moi, je monte aux Grives, et après je redescends. Il n'y a rien entre Pont-de-Saule et les Grives, petit. Que des prés. » Elle te regarde mieux. « Tu as l'air d'avoir faim. Tu veux m'acheter quelque chose ? »",
    ],
    choices: [
      { label: "Lui demander si elle a vu de la neige ailleurs, sur sa route", to: "EN_oree_nouvelles" },
      { label: "La laisser passer", to: "EN_village" },
    ] },

  EN_oree_nouvelles: { act: "I", title: "Les nouvelles de Fanchon", place: "sauvelune", shop: "colporteuse",
    text: [
      "« De la neige ? En juillet ? » Elle rit, puis elle s'arrête de rire. « À Pont-de-Saule, on dit qu'il a neigé sur le col de l'Ourse, là-haut, chez les sauvages des Combes. Et à Pallanche, on dit des choses… » Elle baisse la voix. « On dit que la Chancellerie paie cher pour les noms. Les vieux noms, les noms des morts, les noms qu'on ne veut plus. Qu'on peut aller là-bas, payer, et oublier ce qu'on veut. Qu'un homme en noir, là-bas, vous l'enlève de la tête comme on arrache une dent. »",
      "Elle hausse les épaules, rajuste sa hotte. « Moi, ce que j'en dis. Les gens racontent n'importe quoi, pour la Fête des Noms. Tu y vas, toi, à la fête ? Tout le monde y va, cette année. »",
    ],
    choices: [{ label: "La remercier", fx: { flag: "EN:rumeur_chancellerie" }, to: "EN_village" }] },

  // ---------------------------------------------------------------- the second night: the Gleaner
  EN_soir2: { act: "I", title: "La veillée au temple", place: "sauvelune",
    fx: { until: 21, ep: ["seance", 800] },
    text: [
      "Tu entres au temple au coucher du soleil. Le Père Anselme est là, assis au premier rang, le registre sur les genoux, son nom écrit sur ses deux mains et sur son front. Il ne sait plus très bien pourquoi il est là. Il sait qu'il doit y être.",
      { if: { has: "tess:viens" }, text: "Tess entre derrière toi, son marteau à la ceinture, et s'assied sur la marche de l'autel. Elle a écrit ton nom sur son avant-bras, au charbon." },
      { if: { has: "tess:pim" }, text: "Tess est restée au moulin avec Pim. Tu l'as laissée lui apprendre à jouer aux osselets, et Pim trichait, et Tess faisait semblant de ne pas voir." },
      "La nuit tombe. Les chandelles brûlent droit. Dehors, il ne neige plus. Le village dort, ou fait semblant, ou a oublié comment on dort.",
      "Tu sais ce qui va venir. Tu as eu toute la journée pour décider comment l'attendre.",
    ],
    choices: [
      { label: "Te cacher dans la tribune, au-dessus de la porte, pour la voir entrer avant qu'elle te voie", test: { dom: "discretion", label: "Embuscade" },
        win: { fx: { flag: "EN:embuscade", ep: ["perso", 500] }, to: "EN_temple_nuit" },
        lose: { fx: { flag: "EN:surpris" }, to: "EN_temple_nuit" } },
      { label: "L'attendre debout au milieu de la nef, ton arme à la main", fx: { flag: "EN:debout" }, to: "EN_temple_nuit" },
      { label: "Préparer une ronde de chandelles autour du registre, et graver sur chacune le nom d'un habitant", if: { clue: "n_fondre" }, why: "Il faudrait savoir ce que la neige craint.",
        fx: { flag: "EN:chandelles", ep: ["perso", 700] }, to: "EN_temple_nuit" },
    ] },

  EN_temple_nuit: { act: "I", title: "Le Glaneur", place: "sauvelune",
    text: [
      "Vers minuit, les chandelles se couchent toutes ensemble, du même côté, comme sous un vent. La porte du temple s'ouvre sans bruit.",
      "Elle entre. Elle doit se baisser pour passer sous le linteau. Elle est plus grande qu'hier ; elle a mangé tout un village. Son manteau de neige traîne derrière elle sur le dallage, et là où il passe, les noms gravés sur les pierres tombales s'effacent, un par un, avec un petit bruit de sable.",
      "Au milieu de son front, la tache noire. Cette fois, tu vois ce que c'est : un sceau. Un sceau de cire noire, gros comme une paume, imprimé à même la neige, comme on scelle une lettre.",
      { if: { has: "EN:embuscade" }, text: "De la tribune, tu la vois de haut. Elle ne t'a pas vu. Elle va droit au Père Anselme et au registre, sans regarder ailleurs." },
      { if: { has: "EN:surpris" }, text: "La tribune grince sous ton pied. Elle lève la tête vers toi. Le creux de son visage te trouve tout de suite." },
      { if: { has: "EN:chandelles" }, text: "Elle s'arrête devant le cercle de chandelles. Chacune porte un nom gravé à la pointe du couteau : *Agathe. Joris. Pim. Tess. Mathurin.* Elle n'avance plus. Elle tourne autour, lentement, comme un loup autour d'un feu." },
      "Et puis elle parle. Ce n'est pas une voix. C'est cent voix, mille, toutes celles qu'elle a mangées, qui disent la même chose en même temps, chacune avec son accent de Sauvelune.",
      "*Tu es celui qui ne s'efface pas.*",
    ],
    choices: [
      { label: "« Qu'est-ce que tu es ? Qui t'envoie ? »", to: "EN_glaneur_parle" },
      { label: "Attaquer, maintenant, avant qu'elle touche au registre", to: "EN_glaneur_combat" },
    ] },

  EN_glaneur_parle: { act: "I", title: "Ce que dit le Glaneur", place: "sauvelune",
    fx: { clue: "n_glaneur" },
    text: [
      "*Je glane,* disent les mille voix. *Je ramasse ce qu'on laisse tomber. Les noms qu'on ne dit plus. Les noms qu'on ne veut plus. Celui qui m'a scellé me paie en noms, et je lui en porte.*",
      "*Ici, ils sont tombés tout seuls. Tout un village qui ne se souvenait plus de ce qu'il était. Qui avait oublié, il y a longtemps, d'où il venait. Une neige suffisait.*",
      "La tête de neige se penche vers toi.",
      "*Toi, tu ne tombes pas. Tu as déjà été ramassé une fois. On ne glane pas deux fois le même épi.*",
      "*Je te fais un marché, épi. Donne-moi un nom, un seul, un vrai, un que tu aimes. Un souvenir à toi. Et je laisse les autres. Ou donne-moi le livre du vieux, avec tous ses noms dedans, et je pars cette nuit, et je ne reviens jamais. Ou bats-toi, et je prendrai ce que je pourrai.*",
    ],
    choices: [
      { label: "Lui donner le registre : qu'elle parte, et que plus personne ici ne soit en danger", big: true, tag: "Sauvelune effacée des livres",
        fx: { flag: ["choix:registre=donne", "EN:glaneur_parti"], ep: ["histoire", 3000], fac: { greffiers: 5 } }, to: "EN_glaneur_registre" },
      { label: "Lui donner un souvenir à toi, pour sauver quelqu'un", big: true, tag: "Souvenir donné", stain: true, to: "EN_glaneur_souvenir" },
      { label: "Refuser, et te battre pour chaque nom de ce livre", big: true, fx: { flag: "choix:registre=defendu" }, to: "EN_glaneur_combat" },
    ] },

  EN_glaneur_souvenir: { act: "I", title: "Un nom que tu aimes", place: "sauvelune",
    text: [
      "*Lequel ?* demandent les mille voix. *Choisis. Ce que tu donnes, je le garde. Celui que tu sauves, personne ne l'oubliera plus jamais. Ni ici, ni ailleurs. Ni moi.*",
    ],
    choices: [
      { label: "Le visage d'Agathe, ta mère : et qu'en échange Pim ne soit plus jamais oublié", tag: "Souvenir donné", stain: true, if: { souv: "enfant:agathe" }, why: "Tu ne l'as plus.",
        fx: { souv: "enfant:agathe", flag: ["choix:registre=souvenir", "sauve:pim", "pim:nom"], ep: ["histoire", 3000] }, to: "EN_souvenir_donne" },
      { label: "Tess, sous le vieux chêne : et qu'en échange Tess ne soit plus jamais oubliée", tag: "Souvenir donné", stain: true, if: { souv: "enfant:tess" }, why: "Tu ne l'as plus.",
        fx: { souv: "enfant:tess", flag: ["choix:registre=souvenir", "sauve:tess"], ep: ["histoire", 3000] }, to: "EN_souvenir_donne" },
      { label: "Le rêve blanc, ton plus vieux souvenir : et qu'en échange le registre reste entier", tag: "Souvenir donné", stain: true, if: { souv: "enfant:reve" }, why: "Tu ne l'as plus.",
        fx: { souv: "enfant:reve", flag: ["choix:registre=souvenir", "sauve:registre", "registre:entier"], ep: ["histoire", 3000] }, to: "EN_souvenir_donne" },
      { label: "Non. Pas ça. Te battre", fx: { flag: "choix:registre=defendu" }, to: "EN_glaneur_combat" },
    ] },

  EN_souvenir_donne: { act: "I", title: "Le prix", place: "sauvelune",
    fx: { flag: "EN:glaneur_parti" },
    text: [
      "Elle se penche sur toi, et cette fois, quand elle souffle, quelque chose part.",
      { if: { has: "sauve:pim" }, text: "Agathe. Tu sais qu'elle existe. Tu sais qu'elle est ta mère, qu'elle fait le pain, qu'elle chante faux. Tu ne vois plus son visage. Il y a, là où il était, une lumière douce, sans traits, comme une fenêtre éclairée vue de loin dans la nuit. Et à la place, en échange, une certitude qui te tient chaud : Pim ne sera plus jamais oublié. Par personne." },
      { if: { has: "sauve:tess" }, text: "Le chêne. Tu sais qu'il y a un chêne, au bord du pré, et que tu y es allé avec Tess. Tu ne sais plus ce que vous y avez fait. Il y a le goût d'une mûre, très loin, comme un mot sur le bout de la langue. Et en échange, une certitude : Tess ne sera plus jamais oubliée. Ni par son père, ni par son frère, ni par toi." },
      { if: { has: "sauve:registre" }, text: "La plaine blanche s'en va. La voix qui chantait, le froid qui ne mordait pas, ce nom qui n'était pas le tien. Tu y tenais plus que tu ne croyais. Maintenant, quand tu fermes les yeux, tu trouves du noir, et ce noir te fait peur. Et sur les genoux du Père Anselme, le registre se remplit : les noms remontent dans les pages, toutes les pages, jusqu'à la fondation." },
      "La chose se redresse. Elle te regarde. Puis elle sort du temple, et la porte se referme sur la nuit.",
      "*Elle a tenu parole*, dit une petite voix en toi. Soulagement ou deuil, tu hésites.",
    ],
    choices: [{ label: "Attendre l'aube", to: "EN_aube3" }] },

  EN_glaneur_registre: { act: "I", title: "Le livre", place: "sauvelune",
    text: [
      "Tu prends le registre des genoux du Père Anselme. Il se laisse faire. Résister, il a oublié ce que c'est.",
      "Tu le tends à la chose de neige. Elle le prend dans ce qui lui sert de mains, et le livre blanchit d'un coup, de la reliure jusqu'à la tranche, et devient de la neige, et la neige devient elle. Trois cents ans de naissances, de mariages, de morts. Tous les noms de Sauvelune depuis la fondation.",
      "*Bien,* disent les mille voix. *Bien, épi.*",
      "Elle s'en va. Elle tient parole : tu le sais, sans savoir comment. Elle ne reviendra pas à Sauvelune. Il n'y a plus rien, ici, à glaner. Plus un nom écrit. Plus une page.",
      { if: { item: "registre_page" }, text: "Plus rien, sauf la page que tu portes contre ta poitrine. Elle est tiède. Elle tient." },
    ],
    choices: [{ label: "Attendre l'aube", to: "EN_aube3" }] },

  EN_glaneur_combat: { act: "I", title: "Le Glaneur au sceau noir", place: "sauvelune",
    combat: { title: "Le Glaneur au sceau noir", enemies: ["glaneur"], terrain: "bati",
      pretrap: { if: { has: "EN:chandelles" }, n: 1, text: "Le cercle de chandelles la retient : {foe} hésite, piégée par les noms." },
      win: { fx: { flag: ["EN:glaneur_vaincu", "registre:entier"], ep: ["histoire", 4000], item: "cire_noire", clue: "n_sceau" }, to: "EN_glaneur_gagne" },
      lose: { fx: { flag: "EN:glaneur_perdu", ep: ["seance", 1000] }, to: "EN_glaneur_perdu" } },
    text: [
      "La chose se dresse au-dessus de toi, et le froid tombe dans la nef comme un couperet.",
      { if: { has: "tess:viens" }, text: "Tess se lève avec un cri, son marteau à deux mains. Tu entends ton nom dans sa bouche, crié comme un ordre." },
    ] },

  EN_glaneur_gagne: { act: "I", title: "Le sceau brisé", place: "sauvelune",
    text: [
      "Ton dernier coup frappe en plein front, en plein sceau. La cire noire éclate comme une coquille, et la chose de neige s'arrête net, au milieu d'un geste.",
      "Puis elle s'effondre. Pas comme un corps : comme une congère qu'on a minée par en dessous. Elle se défait en poudre blanche sur les dalles, et de la poudre monte un murmure, des milliers de voix qui disent chacune un nom, le sien, et qui s'envolent par la porte ouverte vers les maisons du village.",
      "Sur les dalles, il ne reste qu'un éclat de cire noire. Une plume et une clé croisées, gravées dedans, fines comme un cheveu.",
      "Le Père Anselme se lève. Il regarde ses mains, couvertes d'encre. Il regarde le registre, dont les pages se remplissent de nouveau, lentement, comme un étang après la pluie. « Anselme, dit-il. Je m'appelle Anselme. » Il se met à rire.",
      { if: { has: "tess:viens" }, text: "Tess s'est assise par terre, son marteau sur les genoux. Elle te regarde, et elle dit ton nom, du premier coup, comme on dit bonjour." },
    ],
    choices: [{ label: "Sortir sur la place", to: "EN_aube3" }] },

  EN_glaneur_perdu: { act: "I", title: "La nuit froide", place: "sauvelune",
    fx: { flag: "registre:perdu" },
    text: [
      "Le froid te prend les jambes, puis les bras, puis la poitrine. Tu tombes sur les dalles. Tu entends, très loin, le bruit des pages qu'on tourne, et quelqu'un qui souffle, longuement, patiemment, comme sur une soupe.",
      "Quand tu rouvres les yeux, c'est l'aube. Tu es allongé dans la nef, une couverture sur toi. Le Père Anselme est assis à côté, qui te regarde, les mains vides. Le registre a disparu.",
      { if: { has: "tess:viens" }, text: "Tess dort, roulée en boule contre l'autel, son marteau dans les bras. Quand elle se réveille, elle te regarde longtemps. Puis elle dit, très doucement, en hésitant : « Je te connais. Je sais que je te connais. Dis-moi ton nom. »" },
      "La chose n'est pas revenue. Elle avait ce qu'elle voulait.",
    ],
    choices: [{ label: "Te relever", to: "EN_aube3" }] },

  // ---------------------------------------------------------------- the third day: farewell
  EN_aube3: { act: "I", title: "Ce qui reste de Sauvelune", place: "sauvelune",
    fx: { until: 7, quest: "EN_neige", flag: "EN:depart", ep: ["histoire", 2000] },
    text: [
      "Le soleil se lève sur un village qui n'existe plus. La neige a fondu dans la nuit, toute, d'un coup, et l'herbe dessous est verte, intacte, comme après une nuit ordinaire. Les linteaux sont nus. Les gens sortent de chez eux et se disent bonjour poliment, comme des voyageurs qui ont dormi dans la même auberge.",
      { if: { has: "EN:glaneur_vaincu" }, text: "Mais certains se souviennent. Par morceaux : des visages, des prénoms qui reviennent comme des oiseaux sur un toit. Le registre est entier. Le Père Anselme le lit à voix haute sur les marches du temple, nom après nom, et à chaque nom, quelqu'un dans la foule lève la tête." },
      { if: { has: "choix:registre=donne" }, text: "Personne ne se souvient. Il n'y a plus rien d'écrit. Sauvelune est un pré avec des maisons dessus, et des gens dedans qui s'appellent comme ils veulent, maintenant, ou comme on les appelle." },
      { before: "EN:glaneur_vaincu", if: { has: "registre:entier" }, text: "Le registre est entier sur les genoux du prêtre, et c'est peut-être tout ce qui reste de Sauvelune. Mais c'est quelque chose." },
      { if: { has: "pim:nom" }, text: "Au moulin, Agathe fait le pain, et Pim l'aide en mangeant la pâte. Elle sait qui il est. Elle le sait si fort qu'elle se retourne sans cesse pour vérifier." },
      { if: { not: { has: "pim:nom" } }, text: "Au moulin, Agathe fait le pain, et Pim est assis au bout de la table. Elle lui donne une tartine. Elle a décidé, sans savoir pourquoi, de garder ce petit garçon que personne ne vient chercher." },
      { if: { has: "sauve:tess" }, text: "À la forge, Tess bat le fer, et son père lui crie de faire moins de bruit. Il sait qui elle est. Corentin est redescendu de la montagne à l'aube et l'a prise dans ses bras." },
      "Toi, tu te souviens de tout. Et personne, ici, ne se souvient vraiment de toi.",
      { after: "enfant:lettre", text: "La lettre de l'aveugle te brûle la poitrine. *Envoyez l'enfant à Pallanche.*" },
      { before: "enfant:lettre", text: "Il faut que quelqu'un le sache, hors d'ici. Les livres du royaume se tiennent à Pallanche." },
    ],
    choices: [{ label: "Dire au revoir", to: "EN_adieux" }] },

  EN_adieux: { act: "I", title: "Les adieux", place: "sauvelune", routes: true,
    text: [
      "Agathe te donne du pain et du fromage, enveloppés dans un torchon. Elle le fait d'instinct. Elle pleure en le faisant, et elle s'excuse de ces larmes qui la surprennent.",
      { if: { not: { souv: "enfant:agathe" } }, text: "Tu regardes cette femme qui pleure. Tu sais qu'elle est ta mère. Tu ne reconnais pas son visage. Tu l'embrasses quand même, longtemps, en essayant de l'apprendre par cœur, comme une leçon." },
      "Joris te serre la main, longtemps, d'une poigne de meunier. « Tu as l'air de quelqu'un que j'aurais aimé connaître », dit-il. C'est la plus longue phrase qu'il ait jamais dite à un étranger.",
      { if: { has: "pim:nom" }, text: "Pim s'accroche à ta jambe. « Tu reviens quand ? » Tu dis : bientôt. Il dit : *menteur*, et il te donne un coup de pied dans le tibia, et il court se cacher derrière Agathe." },
      { if: { not: { has: "pim:nom" } }, text: "Pim te regarde partir depuis le seuil. Lui se souvient. Il est le seul. Il ne pleure pas. Il lève la main, et il la garde levée jusqu'à ce que tu tournes au coin de la rue." },
      { if: { has: "tess:viens" }, text: "Tess t'attend au bout de la rue, avec ton nom écrit sur le bras. Elle te laisse partir, et elle reste. Elle te dit : « Va. Et reviens. » Et elle t'embrasse comme on frappe sur une enclume." },
      { if: { has: "tess:pim" }, text: "Tess est au moulin, avec Pim. Elle a promis de veiller sur lui. Elle te regarde partir depuis la fenêtre, les mains serrées sur l'appui : un seul geste, et elle courrait après toi." },
      { if: { all: [{ not: { has: "tess:viens" } }, { not: { has: "tess:pim" } }] }, text: "Tess n'est pas venue. Tu passes devant la forge. Le marteau ne sonne pas." },
      "Deux chemins partent de Sauvelune. La route de la vallée descend vers Pont-de-Saule, où elle rejoint la grande route des Cloches jusqu'à Pallanche : le plus court, le plus sûr. Ou bien le sentier monte vers la Combe-aux-Grives, puis les crêtes, au bord des Hautes-Combes, d'où la neige est venue. C'est plus long, et plus froid. Mais c'est le chemin de la chose.",
    ],
    choices: [
      { label: "Descendre à Pont-de-Saule, et prendre la route des Cloches : il faut prévenir, et vite", fx: { flag: "enfant:voie=sud" }, travel: "r_vallee" },
      { label: "Monter aux Grives, et suivre la neige par les crêtes : il faut comprendre d'où elle vient", fx: { flag: "enfant:voie=nord" }, travel: "r_grives" },
    ] },

  EN_retour: { act: "I", title: "Sauvelune", place: "sauvelune", routes: true, leave: true,
    text: [
      { when: "day", text: "Tu reviens sur tes pas. Le village est là, au soleil, tranquille. Des gens que tu connais depuis toujours te disent bonjour comme on dit bonjour à un passant." },
      { when: "night", text: "Tu reviens sur tes pas. Le village dort, volets clos. Sur un seuil, un homme que tu connais depuis toujours te salue comme on salue un passant attardé." },
    ],
    choices: [] },

  // ---------------------------------------------------------------- the north road: the Grives and the ridges
  EN_grives: { act: "I", title: "La Combe-aux-Grives", place: "grives", routes: true,
    text: [
      "La Combe-aux-Grives est un hameau d'estive, huit chalets de mélèze noirci accrochés à la pente, au-dessus des derniers arbres. Les bergers de Sauvelune y montent les bêtes en juin. Aujourd'hui, il n'y a personne. Les chalets sont ouverts, les bêtes errent dans les prés, et la neige blanche, ici, n'a pas fondu.",
      "Au-dessus du hameau, au bord du pré, il y a les Pierres : un cercle de sept pierres levées, plus vieilles que Sauvelune, plus vieilles que tout. Les bergers y laissent du lait les soirs d'orage. Personne ne sait qui les a dressées.",
      "Des traces partent vers le nord, dans la neige. De grands pas qui ne s'enfoncent pas.",
    ],
    choices: [
      { label: "Aller voir les Pierres", to: "EN_pierres", hide: { seen: "EN_pierres" } },
    ] },

  EN_pierres: { act: "I", title: "Les sept Pierres", place: "grives",
    fx: { ep: ["perso", 600] },
    text: [
      "Les Pierres sont couvertes de signes. Tu les as vues cent fois, enfant, en gardant les chèvres ; tu as toujours cru que c'était du lichen. Ce n'est pas du lichen. Ce sont des lettres. Une écriture que tu n'as jamais apprise, faite de traits droits et de petits cercles, qui court en spirale autour de chaque pierre.",
      { if: { souv: "enfant:reve" }, text: "Et tu la lis. Pas tout. Un mot, un seul, gravé sept fois, une fois sur chaque pierre, et qui te revient du fond de ton rêve blanc, avec la voix qui chantait : *Reviens.* Tu ne sais pas comment tu le sais. Tu le sais comme on sait son nom." },
      { if: { not: { souv: "enfant:reve" } }, text: "Tu passes les doigts sur les signes. Ils sont froids. Tu as l'impression, très forte, que tu devrais les comprendre, qu'ils te concernent, qu'ils t'attendaient. Il y a un trou en toi, là où il faudrait les lire." },
    ],
    choices: [{ fx: { flag: "enfant:pierres" }, back: "EN_grives" }] },

  EN_traces: { act: "I", title: "Deux pistes", place: null,
    text: [
      "Sur la crête, la neige blanche a laissé une traînée, comme une écharpe tombée. Les grands pas du Glaneur la longent, vers le nord-est, du côté de Pallanche. Mais il y a d'autres traces à côté. Plus petites. Des bottes souples, de celles qu'on coud en peau de renne. Quelqu'un suit cette piste, comme toi.",
      "Plus loin, plantée dans la neige, une flèche. Un fût de bouleau, et un empennage de plumes de corbeau, noires, luisantes.",
    ],
    choices: [
      { label: "Ramasser la flèche et la garder", fx: { flag: "croise:fleche_corbe", ep: ["perso", 200] }, to: "@route" },
      { label: "Laisser la flèche où elle est, au cas où son propriétaire reviendrait la chercher", fx: { flag: "croise:fleche_laissee", ep: ["perso", 200] }, to: "@route" },
    ] },

  EN_four: { act: "I", title: "Le four dans la neige", place: null,
    text: [
      "À mi-chemin des crêtes, dans un creux à l'abri du vent, il y a les ruines d'une bergerie, et dedans, un four à pain de pierre sèche, effondré à moitié. Devant le four, il y a un Glaneur.",
      "Pas celui de Sauvelune. Un autre, plus petit, plus pâle, sans sceau au front ; il a la taille d'un homme. Il est accroupi devant la gueule froide du four, les mains tendues, comme on se chauffe. Il n'y a pas de feu. Il se balance doucement.",
      "Il murmure quelque chose. Tu t'approches assez pour entendre. *Le pain… le pain… il faut enfourner avant l'aube… le levain… qui a pris le levain…*",
    ],
    choices: [
      { label: "Lui tendre un morceau de pain", if: { any: [{ item: "pain" }, { food: { min: 1 } }] }, why: "Tu n'as rien à lui donner.",
        fx: { flag: "gaspard:pain", ep: ["perso", 800] }, to: "EN_four_pain" },
      { label: "Passer ton chemin sans bruit", test: { dom: "discretion", label: "Discrétion" },
        win: { fx: { ep: ["perso", 300] }, to: "@route" },
        lose: { to: "EN_four_combat" } },
      { label: "L'attaquer avant qu'il se lève", fx: { flag: "gaspard:frappe" }, to: "EN_four_combat" },
    ] },

  EN_four_pain: { act: "I", title: "Gaspard", place: null,
    fx: { met: "gaspard" },
    text: [
      "Il prend le pain. Il le regarde longtemps, le tourne dans ses mains de neige, le sent, ou fait le geste de le sentir. Puis il le serre contre lui, comme on serre un enfant.",
      "« Gaspard, dit-il. Je m'appelle Gaspard. J'étais boulanger. Il y a… » Il ne sait pas. « Il y a longtemps, ou hier. À Sauvelune. Le four était près de la fontaine. »",
      "Il n'y a jamais eu de four près de la fontaine de Sauvelune. Ou alors il y a si longtemps que même le Père Anselme ne le sait pas.",
      "« Ils m'ont pris mon nom, dit-il. L'homme en noir. Il m'a mis le sceau, et j'ai glané pour lui, longtemps. Et puis le sceau est tombé, un jour, je ne sais pas. Et maintenant je ne sais plus où aller. » Il te regarde. « Tu sens le pain. Tu sens Sauvelune. »",
      "Il ne te suit pas. Il reste devant son four froid, le pain contre lui. Mais quand tu te retournes, au bout du vallon, il a levé la main.",
    ],
    choices: [{ back: "@route" }] },

  EN_four_combat: { act: "I", title: "Le Glaneur du four", place: null,
    combat: { title: "Le Glaneur du four", enemies: ["glaneur_petit"], terrain: "nature", range: "contact",
      flee: { dom: "discretion", label: "Fuir dans les éboulis", to: "@route" },
      win: { fx: { flag: "gaspard:tue", ep: ["seance", 800] }, to: "EN_four_apres" },
      lose: { to: "EN_four_apres" } },
    text: ["Il se lève d'un coup, plus vite que tu ne l'aurais cru, et se tourne vers toi avec un cri qui n'est fait que de vent."] },

  EN_four_apres: { act: "I", title: "Le four froid", place: null,
    text: [
      { if: { has: "gaspard:tue" }, text: "Il se défait en poudre devant son four. Dans la poudre, un murmure s'envole, un seul nom, que le vent emporte avant que tu l'entendes. Tu as l'impression d'avoir tué quelqu'un. Tu ne sais pas qui." },
      { if: { not: { has: "gaspard:tue" } }, text: "Tu te réveilles dans la neige, transi. Le Glaneur est retourné s'accroupir devant son four. Il ne te regarde plus. Tu ne l'intéresses pas : tu n'as pas de nom à prendre." },
    ],
    choices: [{ back: "@route" }] },

  EN_portes_nord: { act: "I", title: "Pallanche, par le nord", place: null,
    text: [
      "Les crêtes descendent enfin vers la plaine, et Pallanche apparaît d'un coup au détour d'un rocher, tout entière, dans la lumière du soir : une ville immense, la plus grande que tu aies jamais vue, ceinte de murs ocre, hérissée de clochers. On dit qu'il y en a cent. Tu essaies de les compter. Tu renonces à quarante.",
      "Au milieu, plus haute que tous les clochers, une tour noire, sans fenêtres, avec au sommet une plume et une clé croisées, en fer, qui accrochent le soleil couchant : la Chancellerie des Noms.",
      "Les grands pas dans la neige descendent vers la ville, et la neige s'arrête au pied des collines. Les traces aussi.",
    ],
    choices: [{ label: "Descendre vers la porte du Nord", to: "@route" }] },

  // ---------------------------------------------------------------- the south road
  EN_route_voyageurs: { act: "I", title: "La route de la vallée", place: null,
    fx: { flag: "EN:voyageurs" },
    text: [
      { before: "EN:oree", text: "À la sortie de Sauvelune, tu croises une famille qui monte, un âne chargé de paniers. Ils te demandent si c'est encore loin, les Grives. Tu leur dis qu'ils vont passer par Sauvelune d'abord. Ils te regardent sans comprendre. « Il n'y a rien, entre ici et les Grives, dit le père. Que des prés. »" },
      { after: "EN:oree", text: "À la sortie de Sauvelune, tu croises une famille qui monte, un âne chargé de paniers. Ils te demandent si c'est encore loin, les Grives. Tu leur dis qu'ils vont passer par Sauvelune d'abord. Ils te regardent sans comprendre, et le père te remercie quand même." },
      "Tu les regardes s'éloigner, traverser le village, passer devant le temple, devant le moulin, sans tourner la tête.",
    ],
    choices: [{ label: "Continuer", to: "@route" }] },

  EN_pontsaule: { act: "I", title: "Pont-de-Saule", place: "pontsaule", routes: true,
    text: [
      "Pont-de-Saule est un bourg de marché, gros, prospère, qui vit de la laine des montagnes et du blé de la plaine. Un pont de pierre à sept arches sur la Sauve, une halle, un relais de poste, une garnison de six soldats de la reine qui jouent aux dés devant le corps de garde.",
      { first: true, text: "Tu as vendu du grain ici, avec Joris, cent fois. Le marchand de grain te regarde passer sans te reconnaître." },
    ],
    choices: [
      { label: "Aller trouver le sergent de la garnison et lui raconter ce qui est arrivé", to: "EN_sergent", hide: { seen: "EN_sergent" } },
    ] },

  EN_sergent: { act: "I", title: "Le sergent", place: "pontsaule",
    text: [
      "Le sergent est un gros homme roux qui t'écoute jusqu'au bout, ce qui est déjà beaucoup. Il te laisse parler de la neige, du Glaneur, des linteaux blancs, du registre. Puis il se gratte la barbe.",
      "« Sauvelune, dit-il. Tu dis que c'est à deux étapes d'ici, en montant. » Il déplie une carte, la carte de la garnison, et y promène un gros doigt. « Pont-de-Saule. La route de montagne. Les Grives. » Il te montre. Entre Pont-de-Saule et les Grives, il n'y a rien. Pas un point, pas un nom. Le papier est blanc. Un peu trop blanc, peut-être, comme s'il avait été gratté.",
      "« Écoute, petit. Il y a une prime, à Pallanche, pour ceux qui parlent de neige en été. La Chancellerie paie. Tu devrais y aller. Ils aiment bien qu'on leur raconte ce genre d'histoires, là-bas. » Il te regarde avec un peu de pitié. « Et ils te soigneront peut-être, pour ta tête. »",
    ],
    choices: [{ label: "Le remercier, et repartir", fx: { ep: ["perso", 300], flag: "EN:sergent" }, to: "EN_pontsaule" }] },

  EN_colonne: { act: "I", title: "La colonne", place: null,
    text: [
      "Au milieu de la deuxième journée, la route est barrée par une colonne qui monte vers Pallanche au pas : des soldats à cheval, aux armes de la reine et, sur leurs boucliers, un loup sur une tour. Au milieu d'eux, à pied, une centaine de prisonniers, hommes, femmes, quelques enfants, attachés par une longue corde, poussiéreux, en guenilles. Ils ont l'accent de l'Est. Des Corvannais.",
      "Tu t'écartes pour les laisser passer. Un prisonnier, un géant à la barbe grise, aux bras couverts de cicatrices, te regarde en passant. Il a les lèvres fendues de soif.",
      "À la tête de la colonne, une femme en cotte de mailles, sur une jument grise, ne se retourne pas. Elle a le dos très droit. Quelque chose dans sa façon de tenir les rênes dit qu'elle aimerait être n'importe où ailleurs.",
      { if: { has: "hautvent:sang" }, text: "Deux des prisonniers ont la tête bandée. Un troisième marche avec une attelle de bois au bras. Ceux-là ne t'ont pas regardé ; ils regardent la chevalière, et leurs yeux disent qu'ils s'en souviendront." },
      { if: { has: "hautvent:parole" }, text: "Les prisonniers marchent sans coups ni bandages. Certains portent sur le dos des ballots de laine et des navettes de tisserand qu'on les a laissés emporter. Ils ont l'air de gens qui ont choisi de suivre, faute de mieux." },
      { if: { has: "rodric:vaincu" }, text: "Le géant boite. Sa chemise est raide de sang séché au flanc, et on lui a lié les poignets plus serré qu'aux autres." },
      { if: { has: "rodric:vainqueur" }, text: "La chevalière a une ecchymose violette sur la pommette, et ses hommes jettent au géant des regards où il y a autant de respect que de haine." },
      { if: { has: "thibaut:sort=repris" }, text: "Un des soldats chevauche sur le flanc, à hauteur d'une prisonnière qui porte un enfant. Il ne lui parle pas. Les autres soldats ne lui parlent pas non plus." },
      { if: { has: "thibaut:sort=livre" }, text: "Dans la file des prisonniers marche un homme qui a encore les bottes d'un soldat de la reine. Il tient la main d'une femme et d'un enfant." },
    ],
    choices: [
      { label: "Tendre ta gourde au géant à barbe grise", fx: { flag: "croise:eau_rodric", ep: ["perso", 500] }, to: "EN_colonne_eau" },
      { label: "Rattraper la chevalière et lui parler de la neige", fx: { flag: "croise:parle_ysolde", ep: ["perso", 300] }, to: "EN_colonne_ysolde" },
      { label: "Les laisser passer", to: "@route" },
    ] },

  EN_colonne_eau: { act: "I", title: "Trois cloches", place: null,
    text: [
      "Un soldat lève sa lance pour t'arrêter. Puis il regarde la chevalière, qui a tourné la tête, qui t'a vu, et qui fait un petit signe : *laisse.*",
      "Le géant boit toute la gourde d'un trait. Il te la rend. « Rodric, dit-il, d'une voix de rocaille. Rodric Trois-Cloches, de Corvanne. Je ne l'oublierai pas, l'Esquarrois. » Il sourit, avec ses lèvres fendues. « C'est bien la seule chose qu'on ne me prendra pas, là où ils nous emmènent. »",
      "La colonne repart. Le sens de sa phrase t'échappe.",
    ],
    choices: [{ back: "@route" }] },

  EN_colonne_ysolde: { act: "I", title: "La chevalière", place: null,
    text: [
      "Tu cours à côté de la jument grise. La chevalière baisse les yeux vers toi. Elle a la trentaine, un visage dur, une cicatrice blanche qui lui coupe le menton. Elle t'écoute parler de la neige, du village effacé, de la chose au sceau noir. Elle ne t'interrompt pas.",
      "Quand tu as fini, elle reste un moment silencieuse. « Une plume et une clé croisées, dit-elle enfin. Sur le front. »",
      { after: "EN:glaneur_vaincu", text: "« Oui. »" },
      { before: "EN:glaneur_vaincu", text: "« Un sceau noir, oui. Je n'ai pas vu ce qu'il portait. »" },
      "Elle regarde la colonne de prisonniers, puis la route, devant, qui mène à Pallanche. Ses mains se serrent sur les rênes. « Rentre chez toi, dit-elle. Non. Pardon. » Elle se reprend. « Va à Pallanche, puisque tu y vas. Et ne parle de ça à personne qui porte du noir. »",
      "Elle éperonne sa jument et remonte en tête de la colonne sans se retourner.",
    ],
    choices: [{ back: "@route" }] },

  EN_portes_sud: { act: "I", title: "Pallanche, par le sud", place: null,
    text: [
      "Pallanche apparaît au matin du quatrième jour, au bout de la route des Cloches, posée sur la plaine comme une couronne qu'on aurait oubliée là : des murs ocre, des faubourgs qui débordent des murs, des clochers partout. On dit qu'il y en a cent. Tu les entends avant de les voir, qui sonnent prime, l'un après l'autre, en vague, d'un bout à l'autre de la ville, comme une pluie de fer.",
      "Au milieu, plus haute que tous les clochers, une tour noire, sans fenêtres, avec au sommet une plume et une clé croisées, en fer : la Chancellerie des Noms.",
      "Aux portes, des banderoles. *FÊTE DES NOMS. QUE NUL NE SOIT OUBLIÉ.*",
    ],
    choices: [{ label: "Entrer dans la ville", to: "@route" }] },

  EN_pallanche: { act: "I", title: "La ville aux cent cloches", place: "pallanche",
    fx: { ep: ["histoire", 6000], flag: "prologue:enfant", catchup: 3, catchupWhy: "la route de Sauvelune à Pallanche" },
    text: [
      "Pallanche, la veille de la Fête des Noms, c'est cent mille personnes et cent clochers qui sonnent. Les rues sont tendues de bannières, chaque maison a peint son nom en lettres d'or au-dessus de sa porte, et sur les places, des greffiers en robe noire, assis à des pupitres, inscrivent gratuitement le nom de qui le demande dans le Grand Livre de la Fête. Les files d'attente font le tour des places.",
      { after: "enfant:lettre", text: "Tu vas droit à la Chancellerie. La tour noire est entourée d'un mur, et le mur d'une grille, et devant la grille, des gardes en noir qui t'entendent demander Maître Hylas sans t'écouter. « Fermé pour la Fête. Revenez après la Nuit des Cloches. »" },
      { before: "enfant:lettre", text: "Tu vas droit à la Chancellerie. La tour noire est entourée d'un mur, et le mur d'une grille, et devant la grille, des gardes en noir qui t'entendent parler de neige et de noms sans t'écouter. « Fermé pour la Fête. Revenez après la Nuit des Cloches. »" },
      { if: { has: "enfant:voie=nord" }, text: "Les traces du Glaneur se sont arrêtées au pied des collines. Mais en entrant dans la ville, tu as vu, sur le pavé d'une ruelle, une poudre blanche, très fine, qui ne fondait pas au soleil." },
      { if: { has: "croise:parle_ysolde" }, text: "En passant devant la caserne de la porte Sud, tu as vu la jument grise de la chevalière, attachée devant l'écurie. Et dans la cour, la longue corde des prisonniers, vide." },
      "Tu loues un lit dans une auberge de la rue des Cordiers, avec le peu qui te reste. Tu ne dis pas d'où tu viens. Tu as appris que ce nom ne veut plus rien dire à personne.",
      "Il te reste à attendre la Nuit des Cloches. Et à te souvenir. De tout. Pour tout le monde.",
    ],
    choices: [{ label: "Attendre la Nuit des Cloches", fx: { flag: "ch:enfant:2" }, to: "C_carrefour" }] },

  // ---------------------------------------------------------------- road events
  E_loups: { act: "I", title: "Les loups", place: null,
    combat: { title: "Les loups", enemies: [{ id: "loup", n: 2 }], terrain: "nature", range: "loin",
      flee: { dom: "nature", label: "Grimper sur un rocher et attendre qu'ils se lassent", diff: 0, fx: { time: 3 }, to: "@route" },
      win: { fx: { ep: ["seance", 600] }, to: "@route" },
      lose: { fx: { food: -1 }, to: "E_loups_perdu" } },
    text: ["Deux loups gris sortent des mélèzes, en silence, la tête basse. Ils ont maigri. L'été a été chaud, et quelque chose, dans les Hautes-Combes, a fait fuir le gibier."] },

  E_loups_perdu: { act: "I", title: "Les loups", place: null,
    text: ["Tu te réveilles adossé à un rocher, l'avant-bras en sang. Les loups sont partis avec ton sac de vivres, ou ce qu'il en restait. Ils ne voulaient pas de toi. Ils voulaient le fromage d'Agathe."],
    choices: [{ back: "@route" }] },

  E_berger: { act: "I", title: "Le berger", place: null,
    text: [
      "Un berger fait boire ses moutons à une source. Il te propose du lait et du pain dur, et tu acceptes. Il parle, il parle, il n'a vu personne depuis trois semaines. Il te demande d'où tu viens.",
      "« Sauvelune. »",
      "Il réfléchit longtemps, en mâchant. « J'ai une tante à Sauvelune, dit-il. Je crois. Ou j'avais. » Il fronce les sourcils. « C'est drôle. Je ne sais plus son nom. »",
    ],
    choices: [{ label: "Le remercier", fx: { food: 1 }, to: "@route" }] },

  E_brigands: { act: "I", title: "Les détrousseurs", place: null,
    text: [
      "Deux hommes sortent du fossé, l'un avec un gourdin, l'autre avec une serpe. Ils ont l'air plus affamés que méchants, mais l'un n'empêche pas l'autre. « Ta bourse, dit le premier. Et tes bottes. »",
    ],
    choices: [
      { label: "Te battre", fight: { title: "Les détrousseurs", enemies: [{ id: "brigand", n: 2 }], terrain: "nature",
        talk: { label: "Leur parler de la neige, et leur faire peur", diff: -10, win: { fx: { ep: ["perso", 500] }, to: "@route" } },
        flee: { dom: "discretion", to: "@route" },
        win: { fx: { ep: ["seance", 800], gold: 4 }, to: "@route" },
        lose: { fx: { gold: -5 }, to: "@route" } } },
      { label: "Leur donner ta bourse", if: { gold: { min: 1 } }, why: "Tu n'as rien à leur donner.", fx: { gold: -4, ep: ["perso", 100] }, to: "@route" },
      { label: "Leur offrir à manger plutôt que ta bourse", if: { food: { min: 1 } }, why: "Tu n'as pas de vivres.", fx: { food: -1, ep: ["perso", 400], flag: "EN:brigands_nourris" }, to: "E_brigands_pain" },
    ] },

  E_brigands_pain: { act: "I", title: "Le pain partagé", place: null,
    text: [
      "Ils te regardent sortir le pain d'Agathe comme s'ils voyaient un tour de magie. Ils le partagent en trois, en silence, et vous mangez ensemble, assis dans le fossé.",
      "« On était tisserands, dit le plus vieux. À Roncière. Et puis un matin, plus personne ne nous connaissait au village. Ni ma femme. Ni mon propre frère. On est partis. » Il essuie ses doigts. « Toi aussi, hein ? Ça se voit. »",
    ],
    choices: [{ back: "@route" }] },

  E_pelerins: { act: "I", title: "Les pèlerins", place: null,
    text: [
      "Une troupe de pèlerins chante en marchant, des bannières brodées sur l'épaule : ils vont à Pallanche pour la Fête des Noms, faire inscrire le nom de leurs morts dans le Grand Livre, pour qu'ils ne soient jamais oubliés. Ils t'offrent de faire route avec eux une heure.",
      "Une vieille femme te raconte qu'on peut aussi, à la Chancellerie, faire *retirer* un nom. Pour de l'argent. Que son voisin y est allé pour oublier sa fille morte, et qu'il en est revenu le cœur léger, et qu'il chante maintenant dans les vignes. « C'est un péché, dit-elle. Mais il chante. »",
    ],
    choices: [{ label: "Les quitter au carrefour", fx: { ep: ["perso", 300] }, to: "@route" }] },

  E_charrette: { act: "I", title: "La charrette", place: null,
    text: ["Une charrette de foin est renversée dans le fossé, une roue cassée. Un vieil homme et sa fille essaient de la redresser, en vain."],
    choices: [
      { label: "Les aider", test: { dom: "combat", label: "Force" },
        win: { fx: { ep: ["perso", 400], food: 1 }, to: "E_charrette_ok" },
        lose: { fx: { pv: -1, ep: ["perso", 100] }, to: "@route" } },
      { label: "Passer ton chemin", to: "@route" },
    ] },

  E_charrette_ok: { act: "I", title: "La charrette", place: null,
    text: ["À trois, vous remettez la charrette sur ses roues. Le vieil homme te donne un fromage pour la peine, et sa fille te regarde partir avec un intérêt qui ne doit rien au fromage."],
    choices: [{ back: "@route" }] },

  E_puits: { act: "I", title: "Le puits", place: null,
    text: ["Un puits au bord de la route, avec un seau et une chaîne. Sur la margelle, quelqu'un a gravé une liste de noms, des dizaines, serrés les uns contre les autres, et au-dessus : *NOUS ÉTIONS DE CHAUMONT. SOUVENEZ-VOUS.* Tu ne connais pas de Chaumont. Il n'y en a sur aucune carte que tu aies vue."],
    choices: [{ label: "Lire les noms à voix haute, un par un", fx: { ep: ["perso", 400], flag: "EN:chaumont" }, to: "@route" }, { label: "Boire et repartir", to: "@route" }] },

  E_corbeaux: { act: "I", title: "Les corbeaux", place: null,
    text: ["Une volée de corbeaux tourne au-dessus de la crête, en criant, puis se pose autour de toi sur les rochers, à distance. Ils te regardent. Un, plus gros que les autres, sautille vers toi, penche la tête, et dépose à tes pieds une bague de cuivre. Puis ils s'envolent tous ensemble, vers le nord."],
    choices: [{ label: "Ramasser la bague", fx: { gold: 2, flag: "EN:bague_corbeau", ep: ["perso", 200] }, to: "@route" }] },

  E_glaneur_errant: { act: "I", title: "Un Glaneur", place: null,
    text: ["Dans un vallon enneigé, un Glaneur erre, sans but, la tête penchée, comme un chien qui a perdu une piste. Il ne t'a pas encore vu."],
    choices: [
      { label: "Le contourner sans bruit", test: { dom: "discretion", label: "Discrétion" }, win: { fx: { ep: ["perso", 300] }, to: "@route" }, lose: { to: "E_glaneur_errant_combat" } },
      { label: "L'attaquer", to: "E_glaneur_errant_combat" },
    ] },

  E_glaneur_errant_combat: { act: "I", title: "Un Glaneur", place: null,
    combat: { title: "Le Glaneur errant", enemies: ["glaneur_petit"], terrain: "nature",
      win: { fx: { ep: ["seance", 800] }, to: "@route" },
      lose: { to: "@route" } },
    text: ["Il se retourne. Le froid tombe sur le vallon."] },

  E_cairn: { act: "I", title: "Le cairn", place: null,
    text: ["Au sommet d'un col, un cairn de pierres, comme les bergers en dressent pour marquer les passages. Mais celui-ci est couvert de petits objets : un peigne, une poupée de chiffon, un sabot d'enfant, une lettre pliée. Des offrandes. Sur une pierre, on a gravé, maladroitement, une spirale de signes, des traits droits et de petits cercles."],
    choices: [
      { label: "Ajouter quelque chose au cairn", fx: { ep: ["perso", 300], flag: "EN:cairn" }, to: "@route" },
      { label: "Passer", to: "@route" },
    ] },
};
