// Act I · prologue of the child of Sauvelune, part one: the morning at the mill, the hay festival, the oak, the white
// snow at the evening dance, and the first night.
module.exports = {
  // ---------------------------------------------------------------- the mill, morning of the festival
  EN_matin: { act: "I", title: "Le moulin de Sauvelune", place: "sauvelune",
    fx: { meet: ["agathe", "joris", "pim"], questSeen: "EN_neige" },
    text: [
      "Tu te réveilles au bruit de la roue. Tac, tac, tac, à travers le plancher, comme toutes les nuits de ta vie, sauf que ce n'est plus la nuit : le soleil passe entre les planches du volet et coupe la chambre en tranches dorées où dansent la poussière et la farine. Dehors, quelqu'un accorde un violon, mal. C'est le onze juillet. C'est la fête des foins.",
      "En bas, Agathe a déjà allumé le four. Tu la reconnais à son pas avant de la voir : un pas lourd, pressé, qui ne s'arrête jamais tout à fait. Elle a les joues rouges du feu et de la farine jusqu'aux coudes, et elle te pousse une mèche derrière l'oreille en passant, sans te regarder, comme elle le fait depuis que tu as trois ans.",
      "« Ton père est à la roue, dit-elle. Le bief a encore charrié des branches. Et ton frère est perché sur le toit du poulailler depuis l'aube, à guetter les musiciens. Si tu pouvais le faire descendre avant qu'il se rompe le cou, je t'en serais reconnaissante jusqu'à la fin de mes jours, qui ne sont plus très nombreux, vu la vie que vous me faites. »",
      { if: { has: "passe:trouve" }, text: "Dans le village, on t'appelle encore *l'enfant trouvé du moulin*, vingt ans après. Agathe, elle, ne l'a jamais dit. Pas une fois." },
      { if: { has: "passe:reveur" }, text: "Cette nuit encore, tu as rêvé de la plaine blanche. Tu ne t'en souviens jamais bien au réveil : seulement le froid, et une voix qui chantait." },
      "Sur la table, un pain au miel et à l'anis, le pain de la fête, fend sa croûte en refroidissant.",
    ],
    choices: [
      { label: "Aider Joris à dégager la roue", to: "EN_roue", hide: { seen: "EN_roue" } },
      { label: "Faire descendre Pim du poulailler", to: "EN_pim", hide: { seen: "EN_pim" } },
      { label: "Prendre un morceau de pain et filer au vieux chêne, où Tess t'a dit de venir", to: "EN_tess", hide: { seen: "EN_tess" } },
    ] },

  EN_roue: { act: "I", title: "La roue", place: "sauvelune",
    text: [
      "Joris est dans le bief jusqu'à la taille, en chemise, les manches roulées sur des avant-bras qui ont soulevé plus de sacs que tu ne pourras en compter. Une souche, emportée par l'orage d'avant-hier, s'est coincée entre deux aubes, et la grande roue tremble sans tourner, avec un gémissement de bête.",
      "Il te voit arriver et ne dit rien. Joris ne dit presque jamais rien. Il fait un signe du menton vers la perche ferrée posée contre le mur : *tiens-toi là, et pousse quand je tire.*",
      "L'eau est glacée, même en juillet. Elle descend des Hautes-Combes, où les vieux disent qu'il neige toute l'année.",
    ],
    choices: [
      { label: "Te mettre à l'eau avec lui et tirer la souche à bras-le-corps", test: { dom: "combat", label: "Force" },
        win: { fx: { ep: ["perso", 300], flag: "EN:roue" }, to: "EN_joris" },
        lose: { fx: { pv: -2, flag: "EN:roue" }, to: "EN_roue_rate" } },
      { label: "Caler la perche sous la souche et faire levier, comme il te l'a appris", test: { dom: "nature", label: "Savoir-faire", help: [{ if: { has: "passe:moulin" }, v: 20 }] },
        win: { fx: { ep: ["perso", 300], flag: "EN:roue" }, to: "EN_joris" },
        lose: { fx: { pv: -2, flag: "EN:roue" }, to: "EN_roue_rate" } },
    ] },

  EN_roue_rate: { act: "I", title: "Le bief", place: "sauvelune",
    text: [
      "Ta prise glisse sur l'écorce mouillée, ton pied part sur une pierre moussue, et tu disparais sous l'eau verte avec la grâce d'un sac de farine. Le froid te prend la poitrine comme une main. Tu bois la moitié du bief.",
      "Une poigne te saisit au col et te remonte. Joris te tient à bout de bras, ruisselant, et pour la première fois depuis des semaines, tu l'entends rire : un rire bref, rauque, qui a l'air de lui faire mal. Puis il se retourne, empoigne la souche à deux mains, et l'arrache d'un seul coup, comme on arrache une dent.",
      "La roue repart. Tac, tac, tac.",
    ],
    choices: [{ label: "Sortir de l'eau en grelottant", to: "EN_joris" }] },

  EN_joris: { act: "I", title: "Ce que Joris ne dit pas", place: "sauvelune",
    fx: { flag: "joris:confidence" },
    text: [
      "Vous vous asseyez tous les deux sur le muret du bief pour sécher au soleil. Joris bourre sa pipe sans l'allumer ; il ne l'allume jamais avant midi, c'est une règle qu'il tient de son père et dont personne ne connaît la raison.",
      "« Il faisait froid comme ça, la nuit où on t'a trouvé », dit-il soudain.",
      "Tu attends. Il ne parle jamais de cette nuit-là. Agathe non plus. Tout ce que tu sais, tu le tiens des commères du lavoir : un enfant de trois ou quatre ans sur le seuil du moulin, dans une couverture, sans un mot, sans un nom.",
      "« C'était en juillet aussi. Et il neigeait. Pas beaucoup. Juste sur le seuil, autour de toi. Le lendemain il n'y avait plus rien. » Il tourne la pipe entre ses gros doigts. « Je me suis toujours dit que j'avais rêvé. Agathe dit que oui. »",
      "Il se lève, te pose une main sur l'épaule, une main lourde comme un sac de grain, et s'en va vers la meule sans rien ajouter. C'est la plus longue conversation que vous ayez eue de l'année.",
    ],
    choices: [{ label: "Retourner à la cuisine", to: "EN_matin_suite" }] },

  EN_matin_suite: { act: "I", title: "La cuisine du moulin", place: "sauvelune",
    text: [
      "Agathe chantonne en sortant les pains du four, la chanson des foins, qu'on chantera ce soir en rond autour des meules : *Fauche le pré, fauche la nuit, fauche la peine et le souci…* Elle chante faux, avec conviction.",
      { if: { not: { seen: "EN_pim" } }, text: "Par la fenêtre, tu vois Pim perché sur le toit du poulailler, une main en visière, qui guette la route." },
    ],
    choices: [
      { label: "Faire descendre Pim du poulailler", to: "EN_pim", hide: { seen: "EN_pim" } },
      { label: "Aller au vieux chêne retrouver Tess", to: "EN_tess", hide: { seen: "EN_tess" } },
      { label: "Descendre sur la place", to: "EN_place" },
    ] },

  // ---------------------------------------------------------------- Pim (side quest: Pim's name)
  EN_pim: { act: "I", title: "Pim", place: "sauvelune",
    fx: { questSeen: "EN_pim" },
    text: [
      "Pim a huit ans, des genoux couronnés, une dent en moins et l'ambition de tout savoir avant la fin de l'été. Il est perché sur le toit du poulailler, à califourchon sur le faîte, et les poules en dessous ont l'air de désapprouver.",
      "« Ils arrivent ! crie-t-il en te voyant. Les violons de Pont-de-Saule ! Et il y a un montreur d'ours, je l'ai vu, il est tout petit, l'ours, c'est peut-être un chien. »",
      "Il descend quand tu le lui demandes, c'est-à-dire qu'il se laisse glisser et que tu le rattrapes. Puis il te tend une branche de saule, toute fraîche, qu'il a coupée avec le couteau de Joris, ce qui est strictement interdit.",
      "« Tu m'en fais un sifflet ? Tu as promis. Tu as promis l'an dernier, et l'an d'avant. »",
      "Il récite ensuite, avec le plus grand sérieux, ce que la maîtresse leur fait apprendre cette semaine : *son nom entier, le nom de son père, le nom de sa mère, le nom de son village.* « Pim, fils de Joris le meunier et d'Agathe, de Sauvelune. » Il bute sur *Sauvelune*, recommence. « Pourquoi il faut apprendre ça ? Tout le monde sait qui je suis. »",
    ],
    choices: [
      { label: "Lui tailler son sifflet, là, tout de suite", test: { dom: "nature", label: "Adresse" },
        win: { fx: { item: "sifflet_pim", flag: "pim:sifflet", ep: ["perso", 200] }, to: "EN_pim_sifflet" },
        lose: { fx: { flag: "pim:sifflet_rate" }, to: "EN_pim_rate" } },
      { label: "« Pour le jour où quelqu'un l'oubliera. » Lui faire répéter son nom jusqu'à ce qu'il le chante", fx: { flag: "pim:chanson", ep: ["perso", 200] }, to: "EN_pim_nom" },
    ] },

  EN_pim_sifflet: { act: "I", title: "Le sifflet de saule", place: "sauvelune",
    text: [
      "Tu tapes l'écorce du manche de ton couteau jusqu'à ce qu'elle se décolle d'un bloc, comme un doigt de gant. Une encoche, un biseau, l'écorce remise en place. Pim souffle dedans.",
      "La note est fausse, aiguë, affreuse. Il est fou de joie. Il la souffle sept fois de suite, et les poules s'enfuient en hurlant.",
      "Puis il te le rend. « Garde-le. Comme ça, si tu es perdu, tu siffles, et je viens. » Il réfléchit. « Ou l'inverse. »",
    ],
    choices: [{ label: "Le mettre dans ta poche", to: "EN_matin_suite" }] },

  EN_pim_rate: { act: "I", title: "Le sifflet de saule", place: "sauvelune",
    text: [
      "L'écorce se fend en long au moment où tu la décolles. Tu essaies une deuxième fois, une troisième. Pim te regarde faire avec une compassion qui n'est pas de son âge.",
      "« C'est pas grave, dit-il. Tu le feras ce soir. Tu as toute la vie. »",
    ],
    choices: [{ label: "Lui promettre ce soir", to: "EN_matin_suite" }] },

  EN_pim_nom: { act: "I", title: "Le nom de Pim", place: "sauvelune",
    text: [
      "Tu en fais un air. Ce n'est pas difficile : la chanson des foins a un refrain qui ne sert à rien, et tu glisses dedans *Pim, fils de Joris et d'Agathe, de Sauvelune*, en appuyant sur les syllabes comme on frappe dans ses mains.",
      "Pim la chante une fois, deux fois, puis il part en courant la chanter aux poules, aux chiens, au messager de Pont-de-Saule qui monte la côte avec son sac, et qui le regarde passer avec l'air de quelqu'un qui vient d'être béni sans l'avoir demandé.",
      "Tu ne sais pas pourquoi tu as dit ça, *pour le jour où quelqu'un l'oubliera.* Ça t'est venu tout seul.",
    ],
    choices: [{ label: "Le laisser chanter", to: "EN_matin_suite" }] },

  // ---------------------------------------------------------------- Tess and the oak (side quest)
  EN_tess: { act: "I", title: "Le vieux chêne", place: "sauvelune",
    fx: { meet: "tess", questSeen: "EN_tess" },
    text: [
      "Le vieux chêne est au-dessus du village, au bord du pré communal, là où le terrain se casse vers la Sauve. Il est si vieux que personne ne se souvient de l'avoir vu petit, et si large qu'il faut quatre enfants pour en faire le tour. Les amoureux de Sauvelune y gravent leurs noms depuis des siècles ; l'écorce en est couturée jusqu'à hauteur d'homme, des noms sur des noms, des cœurs dans des cœurs, la plupart illisibles.",
      "Tess est assise sur la grosse racine, les jambes dans le vide, une poignée de mûres dans le creux de sa jupe. Elle a les cheveux noirs de son père le maréchal et les yeux gris de sa mère, qui est morte, et elle a cette façon de te regarder venir comme si tu étais en retard, même quand tu es en avance.",
      "« Tu sens le bief », dit-elle.",
      { if: { has: "EN:roue" }, text: "« La souche, la vase et les silences de ton père. Assieds-toi quand même. »" },
      "Elle te tend une mûre. Vous vous êtes embrassés ici, au printemps, pour la première fois, et depuis aucun de vous deux n'en a reparlé, ce qui est une façon d'en parler tout le temps.",
      "« Corentin va faire la lutte ce midi, dit-elle. Il dit qu'il va gagner. Il dit ça tous les ans. » Elle regarde l'écorce couturée de noms. « Et ce soir, il y a la ronde. »",
    ],
    choices: [
      { label: "Graver vos deux noms dans l'écorce, l'un dans l'autre", fx: { flag: "tess:chene", ep: ["perso", 300] }, to: "EN_tess_grave" },
      { label: "« Ce soir, à la ronde, je danserai avec toi. Devant tout le monde. »", fx: { flag: "tess:ronde", ep: ["perso", 200] }, to: "EN_tess_ronde" },
      { label: "Lui dire que tu as rêvé de la plaine blanche, encore", fx: { flag: "tess:reve" }, to: "EN_tess_reve" },
    ] },

  EN_tess_grave: { act: "I", title: "Deux noms", place: "sauvelune",
    fx: { quest: "EN_tess" },
    text: [
      "Tu cherches une place libre, et il n'y en a pas : il faut graver par-dessus un cœur si ancien que l'écorce a presque fini de le refermer. Tu écris *TESS*, en lettres droites, et elle te prend le couteau des mains pour écrire ton nom elle-même, à sa façon, avec une boucle au départ qui ne sert à rien.",
      "« Voilà. Maintenant, si tu m'oublies, le chêne s'en souviendra. »",
      "Elle dit ça en riant. Elle a les doigts tachés de mûre, et quand elle les essuie sur ta manche, elle laisse dessus une marque violette que tu ne laveras pas.",
      "Elle détache le ruban rouge de ses cheveux et te le noue au poignet, deux fois. « Pour que tu reviennes à la ronde. »",
    ],
    choices: [{ label: "Redescendre avec elle jusqu'au moulin", fx: { item: "ruban" }, back: "EN_matin_suite" }] },

  EN_tess_ronde: { act: "I", title: "Devant tout le monde", place: "sauvelune",
    fx: { quest: "EN_tess" },
    text: [
      "Tess te regarde longtemps, la bouche pleine de mûres. « Devant ma grand-tante Ferrand ? Devant le Père Anselme ? Devant Corentin, qui va te casser le nez ? »",
      "« Devant le Père Anselme surtout. »",
      "Elle rit. C'est un rire qui descend la pente du pré comme une pierre qui roule. Elle détache le ruban rouge de ses cheveux et te le noue au poignet, deux fois. « C'est un gage, dit-elle. Si tu ne viens pas, je le reprends, et ton poignet avec. »",
    ],
    choices: [{ label: "Redescendre avec elle jusqu'au moulin", fx: { item: "ruban" }, back: "EN_matin_suite" }] },

  EN_tess_reve: { act: "I", title: "La plaine blanche", place: "sauvelune",
    fx: { quest: "EN_tess" },
    text: [
      "Tu lui racontes. Tu ne l'as raconté à personne d'autre, jamais : la plaine blanche sans horizon, le ciel blanc, le froid qui ne mord pas, et cette voix qui chante dans une langue que tu ne connais pas, et dont tu te réveilles en sachant pourtant qu'elle disait ton nom. Un nom qui n'est pas le tien.",
      "Tess t'écoute sans rire. Elle t'écoute toujours sans rire, c'est pour ça que tu lui dis les choses.",
      "« Ma mère disait que les enfants trouvés rêvent de là d'où ils viennent, dit-elle enfin. Elle disait aussi que les crapauds portent des pierres précieuses dans la tête, alors. » Elle hausse les épaules. Puis elle détache le ruban rouge de ses cheveux et te le noue au poignet, deux fois. « Si tu repars là-bas, dans ta plaine, tu me le rapportes. »",
    ],
    choices: [{ label: "Le lui promettre", fx: { item: "ruban", flag: "tess:promesse" }, to: "EN_matin_suite" }] },

  // ---------------------------------------------------------------- the festival
  EN_place: { act: "I", title: "La fête des foins", place: "sauvelune", hub: true, shop: "fete",
    fx: { meet: ["anselme", "mathurin"] },
    text: [
      { first: true, text: "La place de Sauvelune n'est pas grande : la fontaine, le temple des Saints-Gardiens avec son clocher carré, la maison commune, l'auberge du Mouton Bleu et une douzaine de façades dont les linteaux portent, peints en ocre, les noms des familles qui y vivent. C'est l'usage, ici. *Aubry. Ferrand. Roux-Lavallée.* On repeint les noms chaque printemps." },
      { first: true, text: "Aujourd'hui la place déborde. Des guirlandes de bleuets et de foin tressé courent de façade en façade ; les violons de Pont-de-Saule jouent sur le perron de l'auberge, à peu près ensemble ; les étals sentent le pain d'anis, le miel, la bière tiède. Les enfants courent entre les jambes, les chiens courent derrière les enfants, et au milieu de tout, plantée sur sa chaise comme un roi sur son trône, la doyenne Mathilde Aubry, cent un ans, compte les jeunes filles qui n'ont pas encore de fiancé." },
      { again: true, text: "La place déborde toujours. Les violons jouent sur le perron de l'auberge, les étals sentent le pain d'anis et la bière tiède, et les chiens courent derrière les enfants." },
      { if: { not: { seen: "EN_soir" } }, text: "Le soleil est haut. La ronde, autour des meules, c'est pour ce soir." },
    ],
    choices: [
      { label: "Le cercle de la lutte, où Corentin Ferrand défie les garçons du village", to: "EN_lutte", hide: { seen: "EN_lutte" } },
      { label: "Le tir à la cible, derrière la maison commune", to: "EN_tir", hide: { seen: "EN_tir" } },
      { label: "Le vieux Mathurin, assis sur la margelle, qui raconte des histoires à qui veut", to: "EN_mathurin", hide: { seen: "EN_mathurin" } },
      { label: "Le Père Anselme, sur les marches du temple", to: "EN_anselme", hide: { seen: "EN_anselme" } },
      { label: "Le mât de cocagne, où plus personne n'ose monter", to: "EN_Q_mat", hide: { seen: "EN_Q_mat" }, before: "EN_soir" },
      { label: "La fontaine, au milieu de la place", to: "EN_Q_fontaine", hide: { seen: "EN_Q_fontaine" }, before: "EN_soir" },
      { label: "Le montreur d'ours, au coin de l'auberge", to: "EN_k_ours", hide: { seen: "EN_k_ours" } },
      { label: "Les violons de Pont-de-Saule", to: "EN_k_bal", hide: { seen: "EN_k_bal" } },
      { label: "Le concours de tartes, sous le tilleul", to: "EN_k_tartes", hide: { seen: "EN_k_tartes" } },
      { label: "La doyenne Mathilde Aubry, sur sa chaise", to: "EN_k_doyenne", hide: { seen: "EN_k_doyenne" } },
      { label: "Le vieux Gervais, sur son échelle, qui repeint les noms", to: "EN_k_linteaux", hide: { seen: "EN_k_linteaux" } },
      { back: "EN_matin_suite", hide: { all: [{ seen: "EN_roue" }, { seen: "EN_pim" }, { seen: "EN_tess" }] } },
      { label: "Attendre le soir, et la ronde autour des meules", to: "EN_soir", big: true,
        if: { any: [{ seen: "EN_lutte" }, { seen: "EN_tir" }, { seen: "EN_mathurin" }, { seen: "EN_anselme" }] }, why: "La fête vient à peine de commencer." },
    ] },

  EN_lutte: { act: "I", title: "Le cercle de la lutte", place: "sauvelune",
    text: [
      "Le cercle est tracé à la sciure devant l'auberge, et Corentin Ferrand est dedans, torse nu, luisant comme un cheval. Il a dix-neuf ans, les épaules de son père le maréchal et la cervelle d'une enclume, d'après sa sœur Tess, qui l'aime beaucoup. Il vient de jeter dans la sciure le fils Roux-Lavallée, qui se relève en crachant.",
      "« Encore un ! crie Corentin. Personne ? » Il te voit. Son sourire s'élargit. « Toi. L'enfant du moulin. Viens que je t'apprenne à voler. »",
      { if: { has: "tess:ronde" }, text: "Il a sans doute entendu parler de la ronde. À Sauvelune, tout le monde entend parler de tout avant même que ce soit arrivé." },
      "Le prix est un jambon fumé et trois pièces. L'honneur, lui, n'a pas de prix, mais on le perd plus vite que le jambon.",
    ],
    choices: [
      { label: "Entrer dans le cercle et le jeter dans la sciure", test: { dom: "combat", label: "Lutte", diff: -10, help: [{ if: { has: "passe:moulin" }, v: 10 }, { if: { has: "passe:bagarre" }, v: 10 }] },
        win: { fx: { ep: ["perso", 500], gold: 3, item: "jambon", flag: "EN:lutte_gagnee" }, to: "EN_lutte_gagne" },
        lose: { fx: { pv: -3, ep: ["perso", 100], flag: "EN:lutte_perdue" }, to: "EN_lutte_perdu" } },
      { label: "Entrer dans le cercle, et le faire tomber par la ruse plutôt que par la force", test: { dom: "discretion", label: "Ruse", diff: -10 },
        win: { fx: { ep: ["perso", 500], gold: 3, item: "jambon", flag: "EN:lutte_gagnee" }, to: "EN_lutte_gagne" },
        lose: { fx: { pv: -3, ep: ["perso", 100], flag: "EN:lutte_perdue" }, to: "EN_lutte_perdu" } },
      { label: "Décliner en riant, et lui dire que tu préfères garder ton nez pour la ronde", fx: { flag: "EN:lutte_refusee" }, to: "EN_place" },
    ] },

  EN_lutte_gagne: { act: "I", title: "Dans la sciure", place: "sauvelune",
    text: [
      "Il charge comme un bœuf, tête basse. Tu te laisses prendre, tu plies, tu sens ses bras se refermer sur toi, et au dernier moment tu pivotes sur une hanche et tu le fais passer par-dessus, tout entier, avec un bruit de sac qu'on jette d'une charrette.",
      "Il reste allongé dans la sciure, les yeux au ciel, sidéré. Puis il éclate de rire, un rire énorme, qui fait trembler les guirlandes. « Le moulin ! Le moulin ! » Il se relève, te soulève de terre, te porte en triomphe autour du cercle comme si c'était lui qui avait gagné.",
      "On te donne le jambon, que tu ne sais pas où mettre, et trois pièces, que tu sais très bien où mettre. Au fond de la foule, tu crois voir Tess applaudir. Elle s'arrête dès qu'elle voit que tu l'as vue.",
    ],
    choices: [{ label: "Retourner dans la fête, le jambon sous le bras", back: "EN_place" }] },

  EN_lutte_perdu: { act: "I", title: "Dans la sciure", place: "sauvelune",
    text: [
      "Tu as à peine le temps de voir le ciel tourner. Corentin t'a pris à la taille, soulevé, retourné, et posé dans la sciure avec une douceur presque tendre, comme on dépose un enfant endormi. Tu as de la sciure dans la bouche, dans les oreilles, et quelque part dans l'âme.",
      "Il te tend la main pour te relever. « Pas mal, dit-il, sincère. Tu as tenu plus longtemps que le fils Roux. » Il se penche. « Pour la ronde, ce soir… fais attention aux pieds de ma sœur. Elle danse comme elle se bat. »",
    ],
    choices: [{ label: "Cracher la sciure et retourner dans la fête", to: "EN_place" }] },

  EN_tir: { act: "I", title: "Le tir à la cible", place: "sauvelune",
    text: [
      "Derrière la maison commune, on a planté une botte de paille peinte en rond, à soixante pas. Les arcs de chasse du village passent de main en main, avec un seau de flèches dépareillées. Le gagnant de l'an dernier, un berger des alpages aux dents noires, tire en ce moment, et chacune de ses flèches s'enfonce dans le cercle rouge avec un petit bruit sec et méprisant.",
      "Il en reste une, de flèche, dans le seau. Et un arc, qu'on te tend.",
    ],
    choices: [
      { label: "Tirer", test: { dom: "combat", label: "Tir", help: [{ if: { arch: "rodeur" }, v: 20 }, { if: { has: "passe:alpage" }, v: 10 }] },
        win: { fx: { ep: ["perso", 400], gold: 2, flag: "EN:tir_gagne" }, to: "EN_tir_gagne" },
        lose: { fx: { ep: ["perso", 100] }, to: "EN_tir_rate" } },
      { label: "Laisser ta place à un gamin qui piétine d'impatience", fx: { flag: "EN:tir_laisse", ep: ["perso", 100] }, to: "EN_place" },
    ] },

  EN_tir_gagne: { act: "I", title: "Au cœur", place: "sauvelune",
    text: [
      "La flèche part, monte, redescend, et se plante au milieu du cercle rouge, si exactement au milieu que le berger aux dents noires va vérifier avec le pouce, longtemps, comme s'il soupçonnait un tour de sorcellerie.",
      "On te donne deux pièces et une tape dans le dos qui te fait cracher ta bière. Le berger te regarde de travers jusqu'à ce que tu lui rendes la tape. Alors il sourit, de toutes ses dents noires.",
    ],
    choices: [{ back: "EN_place" }] },

  EN_tir_rate: { act: "I", title: "Dans le fumier", place: "sauvelune",
    text: [
      "La flèche part très bien. Elle monte très bien. Elle redescend dans le tas de fumier de l'auberge, à vingt pas à gauche de la cible, où elle effraie un coq qui n'avait rien demandé.",
      "On applaudit quand même. C'est la fête.",
    ],
    choices: [{ back: "EN_place" }] },

  // ---------------------------------------------------------------- Mathurin (side quest: the bees)
  EN_mathurin: { act: "I", title: "Le vieux Mathurin", place: "sauvelune",
    fx: { clue: "n_comptine", questSeen: "EN_ruches" },
    text: [
      "Mathurin a quatre-vingts ans, ou cent, ou soixante-dix : il en change selon l'auditoire. Il élève des abeilles au-dessus du village, dans un pré pentu où personne d'autre n'ose monter, et il raconte des histoires que personne d'autre n'ose croire. Il est assis sur la margelle de la fontaine, une ribambelle de gamins à ses pieds, et il vient de finir celle du loup qui avait avalé une cloche.",
      "« Une autre ! Une autre ! »",
      "« Une vraie, alors. » Il baisse la voix, et les gamins se taisent d'un coup. « Celle de la Dame Blanche. Qui passe dans les villages en été, quand personne ne l'attend. Elle ne frappe pas aux portes. Elle souffle sur les noms peints au-dessus, et le lendemain, il n'y a plus de noms, et les gens dans les maisons ne savent plus qui ils sont. »",
      "Les enfants frissonnent de plaisir. Puis, tous ensemble, comme on récite une leçon, ils chantent la comptine que tous les enfants de Sauvelune connaissent sans savoir d'où elle vient :",
      "*Neige d'été, neige d'oubli,*\n*compte tes noms avant la nuit.*",
      "Mathurin te fait signe d'approcher, quand les petits sont repartis en courant. Il n'a plus du tout l'air de quelqu'un qui raconte des histoires.",
      "« Mes abeilles, dit-il. Ce matin. Elles ne sont pas sorties. Elles sont là, sur le devant des ruches, toutes, des milliers, et elles ne bougent pas. Elles ne sont pas mortes. Elles ont… » Il cherche le mot. « Elles ont l'air d'avoir oublié comment on vole. »",
    ],
    choices: [
      { label: "Monter avec lui voir les ruches", to: "EN_ruches" },
      { label: "Lui promettre d'y passer plus tard", fx: { flag: "mathurin:promis" }, to: "EN_place" },
    ] },

  EN_ruches: { act: "I", title: "Le rucher", place: "sauvelune",
    text: [
      "Le rucher de Mathurin est un pré de thym et de bruyère accroché à la pente, avec vingt ruches de paille tressée alignées sous un auvent. D'habitude, à cette heure, l'air y vibre comme une corde de luth.",
      "Rien ne vibre. Les abeilles sont là, comme il l'a dit, posées sur le devant des ruches en grappes immobiles, si serrées qu'on dirait de la mousse brune. Tu approches la main. Elles ne bougent pas. Sur leurs ailes, une poussière blanche, très fine, qui ne fond pas au soleil.",
      "« Ça vient d'en haut, dit Mathurin. Des Hautes-Combes. Le vent du nord a soufflé cette nuit, une heure, pas plus. » Il crache. « Il n'a jamais soufflé en juillet. »",
    ],
    choices: [
      { label: "Enfumer les ruches à la bruyère sèche, doucement, comme il te l'a appris un jour", test: { dom: "nature", label: "Apiculture" },
        win: { fx: { flag: "mathurin:ruches", quest: "EN_ruches", ep: ["perso", 500], item: "miel" }, to: "EN_ruches_ok" },
        lose: { fx: { flag: "mathurin:echec" }, to: "EN_ruches_ko" } },
      { label: "Chanter pour elles. Mathurin dit que les abeilles aiment la chanson des foins", test: { dom: "social", label: "Chant", help: [{ if: { arch: "barde" }, v: 20 }] },
        win: { fx: { flag: "mathurin:ruches", quest: "EN_ruches", ep: ["perso", 500], item: "miel" }, to: "EN_ruches_ok" },
        lose: { fx: { flag: "mathurin:echec" }, to: "EN_ruches_ko" } },
    ] },

  EN_ruches_ok: { act: "I", title: "Le bourdonnement", place: "sauvelune",
    text: [
      "D'abord, une seule. Elle frotte ses pattes de devant l'une contre l'autre, comme quelqu'un qui se réveille et ne sait plus où il est. Elle déplie une aile. La poussière blanche s'envole en scintillant. Puis une autre, puis dix, puis la grappe entière se défait d'un coup, et le pré se remet à vibrer, si fort que tu le sens dans tes dents.",
      "Mathurin ne dit rien pendant longtemps. Il a les yeux mouillés et il ne s'en cache pas.",
      "« Elles se souviennent, dit-il. Elles se souviennent. » Il va chercher dans sa cabane un pot de miel de sapin, presque noir, et te le met dans les mains. « Ça guérit tout. Même le chagrin. Surtout le chagrin. » Puis, plus bas : « La Dame Blanche, petit. Ma grand-mère disait qu'elle ne vient jamais seule. Qu'il y a toujours derrière elle un homme en noir qui écrit. »",
    ],
    choices: [{ back: "EN_place" }] },

  EN_ruches_ko: { act: "I", title: "Le silence", place: "sauvelune",
    text: [
      "Rien. Les abeilles restent où elles sont, en grappes brunes, poudrées de blanc, et le pré reste silencieux comme un temple vide. Mathurin pose une main sur ton bras. « Ce n'est pas toi, dit-il. Ce n'est pas un mal qui se soigne en une heure. »",
      "Il s'assied sur le banc devant sa cabane et ne bouge plus. Il a l'air, lui aussi, d'avoir oublié quelque chose.",
    ],
    choices: [{ label: "Redescendre à la fête, et revenir demain", back: "EN_place" }] },

  // ---------------------------------------------------------------- Father Anselme
  EN_anselme: { act: "I", title: "Les marches du temple", place: "sauvelune",
    text: [
      "Le Père Anselme bénit les gerbes qu'on lui apporte, une par une, avec une patience inépuisable. Il a soixante-dix ans, une barbe blanche taillée court et des lunettes de corne qu'il ne met que pour lire, c'est-à-dire tout le temps. C'est lui qui tient le registre de Sauvelune : les naissances, les mariages, les morts, depuis quarante ans, et avant lui son prédécesseur, et avant, d'autres, jusqu'à la première page, qui date de la fondation du village et qu'il ne montre à personne.",
      { if: { has: "passe:temple" }, text: "« Te voilà, dit-il. J'ai besoin de toi ce soir, après la ronde. Les naissances du printemps ne sont pas encore recopiées, et ma main tremble. Tu as la plus belle écriture du village, après la mienne. »" },
      { if: { not: { has: "passe:temple" } }, text: "« Un nom, dit-il en bénissant la gerbe que lui tend une petite fille, c'est ce qui reste quand tout le reste est parti. C'est pour ça qu'on les écrit. C'est pour ça qu'on les peint au-dessus des portes. » Il te voit. « N'est-ce pas, enfant du moulin ? Toi qui n'en avais pas, quand tu es arrivé. »" },
      "Il te regarde un moment par-dessus ses lunettes, et tu as l'impression qu'il va dire quelque chose d'autre. Puis une femme lui tend un bébé à bénir, et le moment passe.",
    ],
    choices: [
      { label: "Lui demander ce qui est écrit, dans le registre, à la page de ton arrivée", fx: { flag: "anselme:question" }, to: "EN_anselme_page" },
      { label: "Le laisser à ses gerbes", to: "EN_place" },
    ] },

  EN_anselme_page: { act: "I", title: "Une ligne d'une autre encre", place: "sauvelune",
    text: [
      "Le Père Anselme pose sa main sur ton épaule. Elle tremble un peu.",
      "« Rien que tu ne saches. *Un enfant trouvé, sans nom, confié au moulin.* » Il hésite. « Ce n'est pas moi qui l'ai écrit. C'était déjà là quand j'ai ouvert le registre, le lendemain matin. D'une autre encre. D'une autre main. Une écriture penchée, qui débordait de la ligne, comme celle de quelqu'un qui ne voit pas ce qu'il écrit. »",
      "Il retire sa main. « J'ai prié vingt ans pour comprendre ça. Le ciel ne m'a jamais répondu. Il faut croire que ce n'était pas à moi de comprendre. »",
    ],
    choices: [{ back: "EN_place" }] },

  // ---------------------------------------------------------------- the evening: the white snow
  EN_soir: { act: "I", title: "La ronde", place: "sauvelune",
    fx: { ep: ["seance", 1000], time: 10 },
    text: [
      "Le soir tombe lentement, comme il tombe en juillet, en prenant son temps. On a allumé des lanternes dans les arbres du pré communal, au pied des meules, et la ronde se forme : tout le village, les mains dans les mains, des enfants de quatre ans à la doyenne Mathilde, qu'on a portée sur sa chaise au milieu du cercle pour qu'elle puisse compter les fiancés.",
      { if: { has: "tess:ronde" }, text: "Tu prends la main de Tess devant tout le monde. Le Père Anselme lève un sourcil. Corentin lève les deux. Tess, elle, regarde droit devant elle avec une dignité de reine, et te marche sur le pied exprès à chaque tour." },
      { if: { not: { has: "tess:ronde" } }, text: "Tess se retrouve à ta gauche. Tu ne sais pas si c'est le hasard. Sa main est chaude et pleine de cals, une main de forge." },
      { if: { has: "EN:lutte_gagnee" }, text: "Corentin, en face, te salue de la tête comme on salue un égal. Il boite un peu. Il ne le dit à personne." },
      "Les violons attaquent la chanson des foins, et tout le village chante, faux, fort, heureux. *Fauche le pré, fauche la nuit, fauche la peine et le souci…* La ronde tourne de plus en plus vite. Tu vois passer les visages, rouges, riants, Agathe, Joris qui ne chante pas mais qui tape du pied, Pim qui hurle les paroles en se trompant exprès, Mathurin, le Père Anselme, les lanternes, les meules, les étoiles.",
      "Et au troisième refrain, il commence à neiger.",
      "Ça ne vient de nulle part. Il n'y a pas de nuage. Le ciel est clair, plein d'étoiles d'été, et de ce ciel tombent de gros flocons blancs, lents, parfaits, qui descendent en tournant dans la lumière des lanternes. Ils ne sont pas froids. Ils se posent sur les cheveux, sur les épaules, sur les guirlandes de bleuets, et ils ne fondent pas.",
      "La ronde s'arrête. Les violons s'arrêtent. Les enfants rient, tendent la langue, tendent les mains. Les adultes regardent le ciel sans rien dire. Quelque part, un chien se met à hurler, et un autre lui répond, et puis tous les chiens du village.",
    ],
    choices: [
      { label: "Attraper un flocon dans ta main et le regarder de près", to: "EN_flocon" },
      { label: "Prendre Pim par la main et le ramener au moulin", fx: { flag: "EN:pim_ramene" }, to: "EN_nuit" },
      { label: "Embrasser Tess, là, sous la neige, devant tout le village qui regarde ailleurs", fx: { flag: "tess:baiser", ep: ["perso", 200] }, to: "EN_baiser" },
      { label: "Courir au temple, où le Père Anselme vient de s'engouffrer", to: "EN_temple_soir" },
    ] },

  EN_flocon: { act: "I", title: "Un flocon", place: "sauvelune",
    text: [
      "Il se pose au creux de ta paume. Il est grand comme l'ongle de ton pouce, avec six branches si fines qu'elles ont l'air dessinées. Il ne fond pas. Ta main est chaude, et il ne fond pas.",
      "Tu le regardes de plus près, et tu vois que les branches ne sont pas faites de glace. Elles sont faites de quelque chose qui ressemble à de l'écriture : des traits minuscules, des boucles, des barres, comme une ligne de registre qu'on aurait enroulée sur elle-même.",
      "Sans réfléchir, tu murmures, pour toi : « Agathe. »",
      "Le flocon fond. D'un coup, sans eau, sans trace. Comme s'il n'avait jamais existé.",
    ],
    choices: [
      { label: "Essayer encore : un autre flocon, un autre nom", fx: { clue: "n_fondre", ep: ["perso", 400] }, to: "EN_flocon_nom" },
    ] },

  EN_flocon_nom: { act: "I", title: "Un nom qu'on aime", place: "sauvelune",
    text: [
      "Tu en attrapes un autre, tu dis « Corentin ». Rien. Le flocon reste. Tu dis « Pim ». Il fond. Tu dis « Mathilde Aubry », la doyenne, que tu respectes et qui te terrifie. Rien. Tu dis « Tess ». Il fond si vite que tu n'as pas fini de prononcer le nom.",
      "Autour de toi, personne n'a remarqué. Les gens regardent le ciel. La neige s'accumule sur les épaules, sur les chapeaux, sur les linteaux peints. *Aubry. Ferrand. Roux-Lavallée.* Les lettres ocre s'effacent sous le blanc.",
    ],
    choices: [
      { label: "Ramener Pim au moulin", fx: { flag: "EN:pim_ramene" }, to: "EN_nuit" },
      { label: "Courir au temple", to: "EN_temple_soir" },
    ] },

  EN_baiser: { act: "I", title: "Sous la neige", place: "sauvelune",
    text: [
      "Elle a de la neige dans les cils. Tu l'embrasses, et elle ne se dérobe pas, et pendant un moment il n'y a plus ni neige, ni village, ni chiens qui hurlent, seulement le goût des mûres et de la bière et la main de forge qui te serre la nuque.",
      "Quand tu rouvres les yeux, la neige qui était dans ses cils a fondu. Partout ailleurs elle tient. Sur ses cheveux, sur ses épaules, sur le pré. Mais pas là où tu l'as touchée.",
      "« Tu as vu ? dit-elle tout bas. Tu as vu ce que ça fait ? »",
    ],
    choices: [
      { label: "« Je ne sais pas ce que c'est. Rentre chez toi, Tess. Ferme la porte. »", fx: { flag: "tess:rentree" }, to: "EN_nuit" },
      { label: "Courir au temple avec elle", fx: { flag: "tess:temple" }, to: "EN_temple_soir" },
    ] },

  EN_temple_soir: { act: "I", title: "Le temple, le soir de la neige", place: "sauvelune",
    fx: { clue: "n_registre", ep: ["perso", 400] },
    text: [
      "Le Père Anselme est dans la sacristie, penché sur le registre, une chandelle de chaque côté. Il ne t'entend pas entrer. Il tourne les pages, vite, de plus en plus vite, avec un petit bruit de feuilles sèches.",
      "« Regarde », dit-il sans lever la tête.",
      "Tu regardes. Sur les pages les plus récentes, l'encre est noire, nette, ordinaire. Mais plus on remonte, plus elle pâlit : brune, puis grise, puis presque rien, comme si quelqu'un aspirait les noms par le bas de la page. Sous tes yeux, une ligne s'efface. *Hubert Aubry, fils de…* et puis rien. Le papier blanc, propre, sans même la trace d'un trait.",
      "« Ils partent, dit le prêtre. Les noms. Ils retournent dans la plume. » Il te regarde enfin, et ses yeux derrière les lunettes sont ceux d'un homme qui a vu le diable et n'a pas eu le temps d'avoir peur. « Va chez toi, enfant. Dis le nom des tiens. Dis-le toute la nuit, s'il le faut. »",
      { if: { has: "tess:temple" }, text: "Tess te serre le bras à te faire mal. Elle ne dit rien. Elle regarde la page où devrait être le nom de sa mère." },
    ],
    choices: [{ label: "Rentrer au moulin", to: "EN_nuit" }] },

  // ---------------------------------------------------------------- the first night
  EN_nuit: { act: "I", title: "La première nuit", place: "sauvelune",
    fx: { until: 23 },
    text: [
      { if: { has: "EN:pim_ramene" }, text: "Sur le chemin, Pim n'a pas lâché ta main. Il a demandé onze fois si la neige allait fondre. Tu as répondu onze fois que oui." },
      "Le moulin est silencieux. Joris a arrêté la roue, pour la première fois depuis des années, sans dire pourquoi. Agathe a mis Pim au lit, avec des gestes plus lents que d'habitude, et elle est restée longtemps assise au bord du lit à lui caresser les cheveux.",
      "Dehors, la neige tombe toujours. Elle étouffe tout : les pas, les chiens, l'eau du bief. Par la fenêtre de ta chambre, tu vois le village sous la lune, blanc, doux, irréel, comme un village en sucre sur un gâteau de noces.",
      "Tu ne dors pas. Tu te dis les noms. Agathe. Joris. Pim. Tess. Agathe. Joris. Pim. Tess.",
      "Vers minuit, tu entends quelque chose marcher dans la rue.",
    ],
    choices: [
      { label: "Descendre sans bruit et regarder par la porte entrouverte", to: "EN_nuit_dehors" },
      { label: "Rester près de Pim, la main sur la poignée de ton couteau, jusqu'au matin", fx: { flag: "EN:veille_pim" }, to: "EN_nuit_veille" },
    ] },

  EN_nuit_dehors: { act: "I", title: "Ce qui marche dans la neige", place: "sauvelune",
    text: [
      "C'est grand. Plus grand qu'un homme, d'une tête, de deux peut-être ; ça change quand tu le regardes. Ça a la forme d'un homme, ou d'une femme, sous un long manteau qui serait fait de neige tassée, et ça marche dans la rue du moulin sans s'enfoncer dans la neige, à pas lents, la tête penchée.",
      "Devant chaque maison, ça s'arrête. Ça lève ce qui lui sert de visage vers le linteau, vers le nom peint au-dessus de la porte. Et ça souffle. Un souffle long, patient, comme on souffle sur une soupe, et tu vois l'ocre des lettres pâlir, se décoller, monter en fumée blanche dans la bouche de la chose.",
      "Au milieu de son front, il y a une tache noire. La seule chose noire de toute la rue.",
      "Elle arrive devant le moulin.",
    ],
    choices: [
      { label: "Te glisser dehors, dans l'ombre du mur, et la suivre quand elle repart", test: { dom: "discretion", label: "Discrétion" },
        win: { fx: { ep: ["perso", 600], flag: "EN:suivi" }, to: "EN_nuit_suivre" },
        lose: { fx: { flag: "EN:vu" }, to: "EN_nuit_vu" } },
      { label: "Ouvrir la porte en grand et crier ton nom, et celui de chacun de la maison", fx: { flag: "EN:crie", ep: ["perso", 400] }, to: "EN_nuit_cri" },
      { label: "Ne pas bouger, ne pas respirer, et la regarder faire", to: "EN_nuit_vu" },
    ] },

  EN_nuit_suivre: { act: "I", title: "Jusqu'au temple", place: "sauvelune",
    fx: { clue: "n_glaneur" },
    text: [
      "Elle ne te voit pas. Tu marches derrière elle à vingt pas, de porche en porche, et elle ne se retourne pas une fois. Elle souffle sur le moulin, puis sur la forge des Ferrand, puis sur l'auberge, sur la maison commune. Chaque fois, l'ocre monte en fumée et disparaît dans sa bouche, et chaque fois elle grandit un peu.",
      "Elle s'arrête devant le temple. Elle reste là longtemps, la tête levée vers le clocher, comme quelqu'un qui écoute une musique que toi tu n'entends pas. Puis elle tourne le dos et repart vers le haut du village, vers les Hautes-Combes, et la neige se referme derrière elle comme un rideau.",
      "Elle n'est pas entrée dans le temple. Pas cette nuit. Tu as la certitude, sans savoir d'où elle te vient, qu'elle y entrera la prochaine.",
    ],
    choices: [{ label: "Rentrer au moulin avant l'aube", to: "EN_aube" }] },

  EN_nuit_vu: { act: "I", title: "Les yeux de neige", place: "sauvelune",
    fx: { clue: "n_immune", flag: "EN:vu" },
    text: [
      "Elle tourne la tête vers toi. Tu le sais parce que le froid change de place. Il n'y a pas d'yeux dans ce visage de neige, rien qu'un creux plus pâle, et ce creux est tourné vers le seuil du moulin, vers toi.",
      "Tu ne bouges pas. Tu ne peux pas bouger. Elle se penche, lentement, jusqu'à ce que son visage soit à hauteur du tien, si près que tu devrais sentir son souffle. Tu ne sens rien. Elle souffle. La neige passe sur toi, à travers toi, et ne prend rien.",
      "Elle se redresse. Elle a l'air, si une chose de neige peut avoir l'air de quelque chose, de ne pas comprendre. Elle souffle encore, plus fort, sur ton visage, sur tes mains. Rien. Comme l'eau sur une plume grasse.",
      "Alors elle se détourne, elle souffle sur le linteau du moulin, où sont peints les noms de Joris et d'Agathe, et elle repart dans la neige.",
    ],
    choices: [{ label: "Rester là, adossé à la porte, jusqu'au matin", to: "EN_aube" }] },

  EN_nuit_cri: { act: "I", title: "Les noms dans la nuit", place: "sauvelune",
    text: [
      "Tu ouvres la porte d'un coup, et tu cries dans la rue blanche : « Joris, meunier ! Agathe, sa femme ! Pim, leur fils ! » Ta voix se perd dans la neige, étouffée, et pourtant la chose recule d'un pas, comme si tu lui avais jeté de l'eau bouillante.",
      "Au-dessus de la porte, les lettres ocre, qui commençaient à pâlir, reprennent leur couleur. Pas toutes. *JORIS. AGATHE.* Le reste demeure blanc.",
      "La chose te regarde un long moment, le front taché de noir. Puis elle se détourne, et va souffler plus loin, sur une maison où personne ne crie.",
      "Derrière toi, Agathe est descendue, en chemise, une chandelle à la main. « Qu'est-ce que tu as ? Tu as fait un cauchemar ? » Elle regarde la rue vide. Elle ne voit rien. Elle n'a rien vu.",
    ],
    choices: [{ label: "« Oui. Un cauchemar. Remonte, je vais fermer. »", to: "EN_aube" }] },

  EN_nuit_veille: { act: "I", title: "Au chevet", place: "sauvelune",
    text: [
      "Tu restes assis sur le coffre au pied du lit de Pim, ton couteau sur les genoux, et tu écoutes. Le pas dans la rue s'approche, s'arrête devant le moulin. Un long souffle, comme le vent sous une porte. Puis le pas s'éloigne.",
      "Pim dort, la bouche ouverte, un bras hors de la couverture. Tu lui dis son nom, tout bas, à chaque fois qu'il respire. *Pim, fils de Joris et d'Agathe, de Sauvelune.* Vers trois heures du matin, il sourit en dormant.",
    ],
    choices: [{ label: "Attendre le jour", fx: { flag: "pim:veille" }, to: "EN_aube" }] },
};
