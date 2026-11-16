// Le Douzième Coup · chapter 4, the one who passes, first half (act II, the farm of the Noyers in the year 541, eighth
// day before the Grand Midi, morning). The hero walks into the living farm he saw taken the night before: Line is nine
// and asks questions, the third walnut tree stands, the hall clock has been silent for two years. What is done here
// reaches the other hero at the next hour-stones (`monde:marque_poutre`, `monde:horloge_ferme`, `monde:line_lire`).
var P = {};

Object.assign(P, {
  K04j_cour: { act: "II", title: "La ferme des Noyers", place: "ferme",
    text: [
      "Tu l'as vue cette nuit : une cour de galets sous la lune, un seau au bord du puits, un chat en l'air. C'est la même cour. Le soleil s'y lève, et tout y bouge à la fois.",
      "Des poules traversent en diagonale avec des airs d'huissier. La fumée de la cheminée monte, se tord, s'en va vers le nord. Un valet mène deux bœufs à l'abreuvoir en leur parlant ; une femme secoue un drap à la fenêtre du haut ; le fournil sent le pain. Et de part et d'autre du portail il y a trois noyers, où tu en as compté deux : le troisième, celui du milieu, est le plus gros, un arbre de cent ans, dont l'ombre couvre la moitié de la cour.",
      "Tu restes sous le portail, ton sac à l'épaule, pris d'une timidité imbécile. Ces gens sont morts, ou pire, depuis soixante ans. Ils ont très bonne mine.",
      "Au puits, quelqu'un tire de l'eau, à deux mains, en se pendant à la corde : une fille de neuf ans, deux nattes, un tablier trop long. Elle t'a vu{e} avant que tu la voies. Elle lâche la corde, laisse le seau redescendre tout seul, et vient se planter devant toi.",
    ],
    choices: [{ label: "La laisser te regarder", to: "K04j_puits" }] },
  K04j_puits: { act: "II", title: "Neuf ans, deux nattes", place: "ferme", fx: { meet: "line_enfant" },
    text: [
      "Il lui manque une dent sur le devant. Elle a des yeux gris, que tu connais, et qui te regardent comme un mouvement à réviser.",
      "« Tu as de la paille dans les cheveux », dit-elle.",
      "C'est la première phrase qu'on t'adresse en l'an 541. Tu avais préparé, pendant la nuit, des réponses à beaucoup de questions. Celle-ci n'était pas dans le nombre.",
    ],
    choices: [
      { label: "« J'ai dormi dans votre grange. Je viens de loin. »", fx: { flag: "j:line_franc" }, to: "K04j_line_regarde" },
      { label: "« Je cherche de l'ouvrage. On m'a dit qu'on fauchait par ici. »", fx: { flag: "j:line_ouvrage" }, to: "K04j_line_regarde" },
      { label: "Ôter la paille, et attendre la suite", fx: { flag: "j:line_tait" }, to: "K04j_line_regarde" },
    ] },
  K04j_line_regarde: { act: "II", title: "Ce qu'elle a remarqué", place: "ferme",
    text: [
      { after: "j:line_franc", text: "« De loin », répète-t-elle, sans se prononcer." },
      { after: "j:line_ouvrage", text: "« Tu n'as pas de faux, dit-elle. Ceux qui cherchent à faucher viennent avec leur faux. »" },
      { after: "j:line_tait", text: "Elle attend aussi. Elle attend mieux que toi : à neuf ans, on a tout son temps." },
      "Puis elle compte sur ses doigts, sérieusement, comme pour une récitation. « Tu n'es pas venu{e} par la route. Finaud a aboyé après la grange, cette nuit, pas après le portail. Tes souliers sont secs, et il y a de la rosée plein le chemin. Et ils sont drôles, tes souliers. Ils ont les deux pieds pareils. »",
      "Tu regardes tes souliers. Elle a raison : on a dû apprendre depuis à faire un pied gauche et un pied droit, ou bien on l'a désappris. Tu n'y avais jamais pensé.",
      "« Et tu as une montre. » Elle désigne la chaîne qui sort de ta veste. « Les gens qui dorment dans les granges n'ont pas de montre. Mon grand-père en a une. C'est la seule de la paroisse. »",
    ],
    choices: [
      { label: "Lui montrer la montre", fx: { flag: "j:montre_vue" }, to: "K04j_montre" },
      { label: "Rentrer la chaîne dans ta veste : « C'est un souvenir. »", to: "K04j_seuil" },
    ] },
  K04j_montre: { act: "II", title: "Un L de travers", place: "ferme",
    text: [
      "Tu ouvres le boîtier. Elle approche le nez, les mains derrière le dos, comme une enfant à qui l'on a dit cent fois de ne pas toucher.",
      "« C'est la montre de grand-père. » Elle fronce les sourcils. « Non. Celle de grand-père est neuve. Celle-là est toute frottée, et elle a un coup, là. Mais c'est la même. Le même oignon, les mêmes chiffres. »",
      "Puis elle voit la lettre gravée à l'intérieur du boîtier, et elle se tait. Elle se tait longtemps, pour une personne de son âge.",
      "« C'est mon L. Je le fais toujours de travers, maman dit que je le fais exprès. » Elle lève vers toi ses yeux gris, où il n'y a aucune peur, seulement un grand travail. « Je ne l'ai pas encore fait. J'y ai pensé. J'ai pensé que je le ferais un jour dans la montre de grand-père, avec une épingle, quand elle serait à moi. Je ne l'ai dit à personne. »",
      "Dans la cour, une voix de femme appelle : « Line ! Ce seau ! » Elle ne se retourne pas. « Je vais réfléchir, dit-elle. Ne t'en va pas. »",
    ],
    choices: [{ label: "Refermer la montre", to: "K04j_seuil" }] },
  K04j_seuil: { act: "II", title: "Josse et Bérarde", place: "ferme", fx: { meet: ["josse", "berarde"] },
    text: [
      "La femme de la fenêtre est descendue. Bérarde Noyer a trente-cinq ans, les bras rouges jusqu'au coude, et le visage de Line avec de la bonté dessus. Derrière elle vient un homme large, lent, le chapeau sur les yeux : Josse, le maître, qui te regarde comme on regarde le ciel un matin de fenaison, pour savoir ce qu'il en sortira.",
      "« Ça a dormi dans la grange, dit Line. Ça vient de loin. Ça a faim. » Elle a rendu son rapport en trois phrases et ne dit rien des souliers, ni de la montre.",
      "Josse te fait le tour. « Loin d'où ? » Tu dis un nom de village, le premier qui vienne, un village d'au-delà de Vauxelles. Il hoche la tête ; il n'y est jamais allé, personne n'y est jamais allé, c'est à sept lieues. « On fauche le pré du bas aujourd'hui. Il me manque un valet, qui s'est loué ailleurs pour deux sous de plus. La soupe, la paille, et trois sous ce soir si le pré est à terre. » Il ajoute, parce qu'il est honnête : « Quatre, si tu sais faire autre chose que faucher. »",
      "« Qu'il mange d'abord, dit Bérarde. On n'embauche pas à jeun. »",
    ],
    choices: [{ label: "Entrer", to: "K04j_soupe" }] },
  K04j_soupe: { act: "II", title: "Le pain blanc", place: "ferme", fx: { meet: "mathurin", pv: "max" },
    text: [
      "La salle est basse, enfumée, pleine. Il y a une table de douze pieds, un vaisselier, des jambons au plafond, et une grande horloge debout dans un coin, qui se tait. On te pousse sur un banc. On pose devant toi une écuelle de lait, du lard, et une tranche de pain.",
      "Le pain est blanc. Tu n'en avais jamais mangé : de ton côté, le froment ne pousse plus que loin au couchant, et il va aux tables de Port-Régent. Celui-ci est tiède, serré, avec une croûte qui chante. Tu en manges trois tranches avant de t'apercevoir qu'on te regarde faire.",
      "Ils sont tous là. Josse au bout. Bérarde debout, qui ne s'assoit jamais. Girard, quatorze ans, le fils, des épaules et un air de coq, qui t'a toisé{e} une fois et s'occupe ostensiblement de son lard. Deux valets. Et, dans le fauteuil de la cheminée, l'aïeul Mathurin, soixante-quinze ans, une couverture sur les genoux, qui tient dans son poing une montre d'argent grosse comme un oignon et l'écoute de temps en temps, à l'oreille, pour s'assurer d'être encore de ce monde.",
      "Line s'est assise en face de toi. Elle ne mange pas. Elle te regarde manger le pain, et tu vois qu'elle ajoute cela à son compte : *quelqu'un qui n'a jamais vu de pain blanc*.",
    ],
    choices: [{ label: "Te lever avec les autres : la journée commence", to: "K04j_ferme" }] },

  // ------------------------------------------------------------ the morning at the farm
  K04j_ferme: { act: "II", title: "Une matinée de fenaison", backName: "la cour de la ferme", place: "ferme", hub: true,
    text: [
      { first: true, text: "La cour se vide vers le pré. Josse a dit : le pré du bas, jusqu'à midi. Il n'a pas dit que tu ne devais faire que cela, et Bérarde, en te tendant une faux, a regardé l'horloge muette du coin de l'œil, puis tes mains." },
      { first: true, text: "Tu as une matinée. À midi, l'ombre de la borne tombera droit sur son cadran, et quelqu'un ouvrira un cahier gris, au même endroit, dans un pays où cette cour est vide." },
      { again: true, text: "La cour, les poules, les trois noyers. Du pré du bas monte le bruit des faux qu'on aiguise." },
    ],
    choices: [
      { label: "Le pré du bas, où l'on fauche", to: "K04j_pre", hide: { seen: "K04j_pre_fin" } },
      { label: "La grande horloge muette, dans la salle", to: "K04j_horloge", hide: { any: [{ has: "j:horloge_faite" }] } },
      { label: "La grange, de jour", to: "K04j_grange" },
      { label: "Le fauteuil de l'aïeul Mathurin", to: "K04j_mathurin" },
      { label: "Bérarde, au fournil", to: "K04j_berarde", hide: { seen: "K04j_berarde" } },
      { label: "Line, qui te suit à dix pas depuis la soupe", to: "K04j_line_suit", hide: { seen: "K04j_line_heure" } },
      { label: "Midi approche : gagner la borne, sur la route", to: "M04", if: { any: [{ seen: "K04j_pre_fin" }, { has: "j:horloge_faite" }] }, why: "Tu n'as pas encore gagné ta soupe.", big: true },
    ] },

  // the meadow
  K04j_pre: { act: "II", title: "Le pré du bas", place: "ferme", ambiance: "champs",
    text: [
      "Le pré du bas descend jusqu'à un ruisseau. Tu le connais : c'est celui du berger, des étourneaux, de la charrette abandonnée. L'herbe y est haute, lourde, pleine de sauterelles, et quand le vent passe dessus elle se couche et se relève d'un seul mouvement, comme une bête qu'on caresse.",
      "Les faucheurs sont en ligne, en biais, chacun un pas derrière son voisin. Josse mène. Girard est le second et tient à ce qu'on le sache. On te donne la dernière place, celle d'où l'on ne peut couper les jarrets de personne.",
    ],
    choices: [
      { label: "Prendre ton rang, et tâcher de le tenir", test: { dom: "combat", diff: 0, label: "Bras", help: [{ if: { voie: "tetu" }, v: 15 }, { if: { voie: "coureur" }, v: 10 }] },
        win: { fx: { flag: "j:fauche_bien", ep: ["perso", 500] }, to: "K04j_faux" }, lose: { fx: { pv: -1 }, to: "K04j_faux" } },
    ] },
  K04j_faux: { act: "II", title: "Le rang", place: "ferme", ambiance: "champs",
    text: [
      { outcome: "win", text: "La faux est un outil honnête : elle fait ce qu'on lui demande, si on le lui demande du bon côté. Au dixième andain, tu as trouvé le geste, qui part des reins. Au vingtième, tu es sur les talons du valet de devant, et il presse le pas." },
      { outcome: "lose", text: "La faux est un outil honnête, et qui n'a aucune patience. La tienne pique en terre un coup sur trois. Tu as une ampoule au bout d'un quart d'heure, deux au bout d'une demi-heure, et derrière toi l'herbe ressemble à une tête tondue par un barbier ivre. Tu tiens ton rang quand même, de loin." },
      "Au bout du pré, on s'arrête pour aiguiser. Girard essuie sa lame avec une poignée d'herbe, sans te regarder. « Chez toi, là-bas, loin, on fauche avec quoi ? Avec les dents ? » Les valets rient. Il a quatorze ans, il est le fils du maître, et depuis ce matin sa sœur regarde quelqu'un d'autre.",
    ],
    choices: [
      { label: "« Avec les dents, oui. Et on lutte avec les mains. Tu veux voir ? »", to: "K04j_girard" },
      { label: "Rire avec les valets : « Avec les dents. Les jours de fête, on met la nappe. »", fx: { flag: "j:girard_ami" }, to: "K04j_girard_ami" },
      { label: "Te taire, et reprendre ta faux", to: "K04j_pre_fin" },
    ] },
  K04j_girard: { act: "II", title: "Une prise de pays", place: "ferme", ambiance: "champs",
    text: [
      "On fait cercle dans le foin coupé. Josse, à l'autre bout du pré, aiguise sa faux en tournant le dos avec application : c'est sa façon de permettre.",
      "Girard crache dans ses mains. Il est plus lourd que toi et il le sait. Il sait aussi une prise, une seule, celle de tous les garçons de la paroisse : la ceinture, la hanche, et l'on bascule.",
    ],
    choices: [
      { label: "Le laisser venir, et tourner au dernier moment", test: { dom: "combat", diff: 0, label: "Lutte", help: [{ if: { voie: "tetu" }, v: 15 }, { if: { voie: "leste" }, v: 10 }] },
        win: { fx: { flag: "j:girard_ami", ep: ["perso", 500] }, to: "K04j_girard_ami" }, lose: { fx: { pv: -2, flag: "j:girard_ami" }, to: "K04j_girard_ami" } },
      { label: "Te laisser basculer exprès, de bonne grâce", fx: { flag: "j:girard_boude" }, to: "K04j_girard_boude" },
    ] },
  K04j_girard_ami: { act: "II", title: "Girard", place: "ferme", ambiance: "champs", fx: { meet: "girard", regard: { girard: "cordial" } },
    text: [
      { outcome: "win", text: "Il vient. Tu tournes. Il continue tout droit, de tout son poids, emportant ta veste et un peu de ta peau, et laboure le foin du menton. Il se relève avec de l'herbe plein la bouche, écarlate ; il te regarde ; et il part d'un grand rire, la tête en arrière, parce que c'est un garçon qui aime mieux une bonne chute qu'une mauvaise victoire." },
      { outcome: "lose", text: "Il vient, il te prend, il te bascule. Le ciel passe sous tes pieds. Tu retombes à plat dos dans le foin, le souffle dehors, et quand tu rouvres les yeux il te tend la main, épanoui. Il t'a battu{e} : il te pardonne tout." },
      { before: "K04j_girard", text: "Girard cherche la réplique, la manque, et rit malgré lui. « La nappe ! » Il le répète aux valets, qui avaient entendu. Il te tend sa pierre à aiguiser, ce qui chez les faucheurs vaut une poignée de main." },
      "« Tu vas à Méridane, pour la foire ? » demande-t-il un peu plus tard, en fauchant à ta hauteur. « Moi, j'y vais. Le père nous y mène tous, pour le Grand Midi, avec la charrette. Il y a un concours des apprentis, à la Guilde. Je veux voir la grande horloge sonner. Il paraît qu'on la sent dans les pieds. »",
      "Tu fauches. Tu regardes ce garçon content, qui a quatorze ans et huit jours devant lui. Aux Trois-Noyers, sur une planche basse, il y a une lampe de terre noircie qui porte son nom.",
    ],
    choices: [{ label: "Finir le pré", to: "K04j_pre_fin" }] },
  K04j_girard_boude: { act: "II", title: "Une victoire donnée", place: "ferme", ambiance: "champs", fx: { meet: "girard", regard: { girard: "mefiant" } },
    text: [
      "Tu tombes bien, mollement, comme on s'assoit. Les valets applaudissent. Girard reste debout au-dessus de toi, les poings ouverts, et son triomphe lui tourne dans la bouche : à quatorze ans, on sait très bien quand on vous a laissé gagner.",
      "« Tu luttes comme une fille », dit-il, ce qui est injuste pour tout le monde, et il retourne à sa faux sans te tendre la main.",
    ],
    choices: [{ label: "Finir le pré", to: "K04j_pre_fin" }] },
  K04j_pre_fin: { act: "II", title: "Le foin à terre", place: "ferme", ambiance: "champs",
    text: [
      "Vers onze heures, le pré du bas est à terre, en longues vagues grises qui sentent déjà le sec. Les femmes arrivent avec les fourches et le cidre.",
      { after: "j:fauche_bien", text: "Josse passe derrière ton rang, sans s'arrêter, en regardant le chaume. Il n'en dit rien. Mais c'est à toi qu'il tend la cruche en premier, avant son fils." },
      "Tu bois, assis{e} dans l'herbe coupée. Il y a des alouettes. Il y a, au bout du pré, la haie où dans soixante ans un berger sera pris la bouche ouverte ; un merle y chante, et tu n'arrives pas à faire tenir les deux choses dans la même tête.",
    ],
    choices: [{ back: "K04j_ferme" }] },

  // the hall clock
  K04j_horloge: { act: "II", title: "L'horloge qui se tait", place: "ferme",
    text: [
      "C'est une horloge de parquet, haute de sept pieds, dans une caisse de noyer que quelqu'un de la famille a taillée et sculptée d'épis. Le cadran est d'étain, à une seule aiguille. Elle marque quatre heures moins un quart.",
      "« Deux ans, dit Bérarde, derrière toi. Deux ans à la Chandeleur qu'elle marque quatre heures moins le quart. L'horloger de Roquebise demande six écus rien que pour l'ouvrir. Josse dit qu'on a le soleil. » Elle essuie le cadran avec le coin de son tablier, d'un geste qu'elle doit refaire tous les jours. « Le soleil ne sonne pas. On n'entend plus passer les nuits. »",
      "Tu as ta trousse dans ta poche. Trois tournevis, une brucelle, une lime douce : ils ont fait le voyage.",
    ],
    choices: [
      { label: "« Je peux regarder. Je ne demande rien pour ouvrir. »", to: "K04j_horloge_ouvre" },
      { back: "K04j_ferme" },
    ] },
  K04j_horloge_ouvre: { act: "II", title: "Dans la caisse", place: "ferme",
    text: [
      "Tu ouvres la porte de la caisse. Le balancier pend, immobile. Les deux poids sont en bas, au bout de leurs cordes : on a continué de la remonter longtemps après qu'elle s'est tue, puis on s'est lassé.",
      "Un horloger commence par regarder, et Line dit qu'il devrait aussi finir par là. Le mouvement est sain : du bon fer forgé, des roues de laiton un peu encrassées, rien de cassé, rien de tordu. L'échappement mord. Cette horloge marcherait. Quelqu'un l'a arrêtée.",
      "Tu passes la main au fond de la caisse, sous les poids. Tes doigts trouvent une boîte : une boîte à dragées en fer-blanc, coincée debout contre la paroi, juste à la hauteur où le balancier, dans sa course, vient cogner. Dedans, il y a une dent de lait, un bouton de nacre, une plume de geai, et un grillon mort couché sur du coton.",
      "Derrière la porte de la salle, quelqu'un retient son souffle.",
    ],
    choices: [
      { label: "Remettre la boîte à sa propriétaire, sans rien dire à Bérarde", fx: { flag: "j:boite_rendue" }, to: "K04j_horloge_repare" },
      { label: "Poser la boîte sur la table, devant Bérarde", fx: { flag: "j:boite_montree" }, to: "K04j_horloge_repare" },
    ] },
  K04j_horloge_repare: { act: "II", title: "Remettre en marche", place: "ferme",
    text: [
      { after: "j:boite_rendue", text: "Tu glisses la boîte par l'entrebâillement de la porte, à hauteur d'enfant. Une petite main la prend. « C'était la cachette la plus sûre de la maison, chuchote Line, indignée. Personne n'ouvre jamais une horloge. » Tu chuchotes qu'un trésor qui arrête le temps est un trésor mal rangé. Elle y réfléchit." },
      { after: "j:boite_montree", text: "Bérarde regarde la dent de lait, la plume, le grillon. Elle regarde la porte, qui vient de se refermer toute seule. « Deux ans, dit-elle lentement. Deux ans que je n'entends plus passer les nuits, pour un grillon. » Elle ne crie pas. Elle range la boîte dans la poche de son tablier, où Line ira la reprendre avant ce soir, et elles le savent toutes les deux." },
      "Reste que deux ans de silence ont fait leur ouvrage. L'huile a tourné en gomme ; un pivot a pris du jeu ; la corde du poids de sonnerie a sauté de sa poulie. Il faut démonter, nettoyer, remonter, régler, sur une table de ferme, avec trois tournevis et du saindoux en guise d'huile.",
    ],
    choices: [
      { label: "T'y mettre", test: { dom: "savoir", diff: 0, label: "Horlogerie", help: [{ if: { voie: "rouage" }, v: 20 }, { if: { item: "trousse" }, v: 10 }] },
        win: { fx: { flag: ["monde:horloge_ferme", "j:horloge_faite", "j:horloge_juste"], gold: 2, ep: ["seance", 800], regard: { berarde: "redevable" } }, to: "K04j_horloge_marche" },
        lose: { fx: { flag: ["monde:horloge_ferme", "j:horloge_faite"], ep: ["perso", 400] }, to: "K04j_horloge_marche" } },
    ] },
  K04j_horloge_marche: { act: "II", title: "Quatre heures moins un quart, puis le reste", place: "ferme",
    text: [
      { after: "j:horloge_juste", text: "Tu lances le balancier du bout du doigt. Il va, revient, va. L'échappement se met à parler, d'une voix nette. Tu règles l'aiguille sur ta montre, et la grande horloge des Noyers, après deux ans, sonne onze coups dans la salle vide, si clairs que les poules, dehors, se taisent." },
      { before: "j:horloge_juste", text: "Tu lances le balancier du bout du doigt. Il va, revient, hésite, repart. L'horloge marche. Elle boite un peu, et quand tu la fais sonner elle rend onze coups dont le septième est fêlé : la corde a pris un mauvais pli que tu n'as pas su redresser. Elle marchera ainsi cinquante ans, en bégayant sur sept heures." },
      "Bérarde est sur le seuil, les mains dans son tablier. Elle écoute le balancier comme on écoute respirer quelqu'un qui a été malade.",
      { after: "j:horloge_juste", text: "Elle traverse la salle, ouvre le vaisselier, et te met dans la main deux écus à la couronne, pris sous une pile d'assiettes. « L'horloger de Roquebise en voulait six pour l'ouvrir. Ne dis rien à Josse : il croit que cet argent-là n'existe pas. »" },
      "Dans son fauteuil, l'aïeul Mathurin a levé la tête. Il porte sa montre à son oreille, écoute, regarde l'horloge, écoute encore. « Elles sont d'accord », annonce-t-il à la cheminée, avec une profonde satisfaction.",
    ],
    choices: [{ back: "K04j_ferme" }] },

  // the barn by day
  K04j_grange: { act: "II", title: "La grange, de jour", backName: "la grange", place: "ferme",
    text: [
      { first: true, text: "De jour, c'est une grange. Il y a du foin jusqu'aux poutres, des toiles d'araignée dans le soleil, des hirondelles qui entrent et sortent par la lucarne en criant. L'endroit où tu es tombé{e} cette nuit garde ta forme, dans le foin." },
      { first: true, text: "Le cadre est au fond, pris dans le mur : deux montants, un linteau, d'une pierre plus sombre que le reste. On y a planté des clous, on y pend les faux. Le linteau porte ses douze entailles. Elles sont comme tu les as vues, ni plus neuves ni plus vieilles ; soixante ans n'y ont rien changé, et tu commences à croire que six cents n'y changeraient rien non plus." },
      { again: true, text: "La grange, le foin, les hirondelles. Le cadre de pierre attend au fond, avec ses faux." },
    ],
    choices: [
      { label: "Examiner le cadre de près", to: "K04j_cadre", hide: { seen: "K04j_cadre" } },
      { label: "Lever les yeux vers la grosse poutre", to: "K04j_poutre", hide: { seen: "K04j_poutre" } },
      { back: "K04j_ferme" },
    ] },
  K04j_cadre: { act: "II", title: "La pierre aux faux", place: "ferme",
    text: [
      "Tu passes la main sur le montant de droite. La niche est là, de la taille d'un œuf, lisse comme l'intérieur d'une coquille. Tu y loges le sablier de laiton : il y entre juste, et rien ne se passe. Le sable, dedans, est gris, terne, mort. Line l'avait dit : ce qui reste ouvre la porte une fois.",
      "Tu cherches autre chose, par métier. La pierre des montants est froide, plus froide que le mur, et quand tu y colles l'oreille tu entends, ou tu crois entendre, très loin dedans, quelque chose qui bat : un coup, un long silence, un coup. Ton cœur va quatre fois plus vite. Tu comptes sur ta montre : c'est le pas d'un balancier long de huit toises.",
      "« Il ne faut pas toucher la pierre aux faux. » Line est dans le soleil de la porte, sa boîte de fer-blanc sous le bras. « Grand-père le défend. Il dit qu'elle est à quelqu'un. »",
    ],
    choices: [{ back: "K04j_grange" }] },
  K04j_poutre: { act: "II", title: "La poutre", place: "ferme",
    text: [
      "La grosse poutre traverse la grange à dix pieds du sol. Cette nuit, de l'autre côté, elle était noire, lisse, sans une marque. Elle est blonde, aujourd'hui, et tout aussi lisse.",
      "Une échelle mène au fenil. De là-haut, en se penchant, on atteint le bois avec un couteau. Ce qu'on y graverait y serait encore dans soixante ans, à la lueur d'une lanterne, pour quelqu'un qui saurait où lever les yeux.",
    ],
    choices: [
      { label: "Y graver deux initiales : la tienne, et celle de {autre}", fx: { flag: ["monde:marque_poutre", "monde:poutre_lettres", "j:poutre_initiales"], ep: ["perso", 300] }, to: "K04j_poutre_grave" },
      { label: "Y graver douze traits, le douzième plus long", fx: { flag: ["monde:marque_poutre", "j:poutre_traits"], ep: ["perso", 300] }, to: "K04j_poutre_grave" },
      { label: "Laisser cette poutre comme elle est", back: "K04j_grange" },
    ] },
  K04j_poutre_grave: { act: "II", title: "Au couteau", place: "ferme",
    text: [
      "Le chêne est dur. Tu y mets un quart d'heure, à plat ventre sur le plancher du fenil, la langue entre les dents, en soufflant la sciure.",
      { after: "j:poutre_initiales", text: "Deux lettres, hautes d'un pouce, côte à côte. La tienne est mieux faite que l'autre : tu as eu le temps de te faire la main." },
      { after: "j:poutre_traits", text: "Douze traits, comme sur la clef, comme sur le linteau, et le douzième plus long. Quelqu'un qui aurait vu la clef comprendrait." },
      "C'est fait. Tu regardes ton ouvrage, clair dans le bois blond. Si Line a dit vrai, quelqu'un, en ce moment même, dans une grange grise où il y a un chat en l'air, pourrait lever sa lanterne sur une poutre noire, et y lire ceci, noirci, adouci, vieux de soixante ans. Si elle a dit vrai, cette poutre n'a jamais été lisse.",
      "Tu descends l'échelle avec le sentiment d'avoir fait une chose énorme, à l'aide d'un couteau de poche.",
    ],
    choices: [{ back: "K04j_grange" }] },

  // the grandfather
  K04j_mathurin: { act: "II", title: "L'aïeul Mathurin", backName: "le fauteuil de l'aïeul", place: "ferme",
    text: [
      { first: true, text: "L'aïeul passe ses journées dans le fauteuil de la cheminée, été comme hiver, une couverture sur les genoux. Il a été le maître ici quarante ans. Il a planté le plus jeune des trois noyers le jour de ses noces. À présent, il confond les saisons, appelle Josse du nom d'un frère mort, et sait encore, à un quart d'heure près, l'heure qu'il est." },
      { first: true, text: "« Toi, tu n'es pas d'ici. » Il te fait signe d'approcher, de sa main qui tient la montre. « Tant mieux. Ceux d'ici, je leur ai tout raconté trois fois. Assieds-toi. Demande. »" },
      { again: true, text: "L'aïeul Mathurin a remonté sa couverture. Il écoute sa montre, puis te regarde, et attend la question suivante avec gourmandise." },
    ],
    choices: [
      { label: "« La pierre, au fond de la grange. Qui l'a mise là ? »", to: "K04j_mathurin_pierre", hide: { seen: "K04j_mathurin_pierre" } },
      { label: "« Elle est à quelqu'un, cette pierre ? »", to: "K04j_mathurin_gris", if: { seen: "K04j_mathurin_pierre" }, hide: { any: [{ not: { seen: "K04j_mathurin_pierre" } }, { seen: "K04j_mathurin_gris" }] } },
      { label: "« C'est une belle montre. »", to: "K04j_mathurin_montre", hide: { seen: "K04j_mathurin_montre" } },
      { back: "K04j_ferme" },
    ] },
  K04j_mathurin_pierre: { act: "II", title: "Avant la ferme", place: "ferme",
    text: [
      "« Personne ne l'a mise. Elle y était. » Mathurin se cale. « Mon arrière-grand-père a bâti la maison en 430 et des poussières. La grange, non. La grange était debout, avec son toit crevé, et la pierre dedans. Il a refait le toit. On ne démolit pas un mur qui tient. »",
      "« Les messieurs de la Guilde sont venus, une fois, du temps de mon père. Trois, en robe, avec une chaîne d'arpenteur et un fil à plomb. Ils ont mesuré la grange par tous les bouts. Ils ont dit que la route royale partait de là : que les anciens avaient planté la première borne ici, dans notre mur, et tiré tout droit jusqu'à leur Tour. Vingt-trois lieues sans un coude. Tu as vu comme elle file ? » Il rit. « Ils ont offert d'acheter la grange. Mon père a demandé où il mettrait son foin. Ils n'avaient pas pensé au foin. Des savants. »",
    ],
    choices: [{ back: "K04j_mathurin" }] },
  K04j_mathurin_gris: { act: "II", title: "L'homme gris", place: "ferme",
    text: [
      "L'aïeul baisse la voix, et regarde vers la porte si Bérarde écoute. Elle n'aime pas cette histoire.",
      "« Ma grand-mère disait qu'un homme en est sorti. Du temps de sa mère à elle, ça fait loin. Un soir de fenaison, comme aujourd'hui. Il est sorti de la grange où personne n'était entré, tout gris, avec des habits qu'on ne faisait pas. Il a demandé en quelle année on était. On le lui a dit. »",
      "« Et alors ? »",
      "« Alors il s'est assis sur la borne et il a pleuré. Toute la nuit. Au matin, il est parti vers Méridane, et on ne l'a jamais revu. » Mathurin écoute sa montre. « Elle disait qu'il en sort un tous les soixante ans. Les vieilles disent n'importe quoi. Mais mon père nous défendait de toucher la pierre, et je le défends aussi. Si elle est à quelqu'un, qu'il la trouve comme il l'a laissée. »",
      "Il te regarde alors, un bon moment, de ses yeux délavés, où il reste plus de monde qu'on ne croirait. « Tu as dormi dans la grange, toi, à ce qu'on m'a dit. »",
    ],
    choices: [
      { label: "« Dans le foin, oui. J'ai très bien dormi. »", back: "K04j_mathurin" },
      { label: "« Et si l'on vous demandait en quelle année on est, à vous ? »", fx: { flag: "j:mathurin_devine" }, to: "K04j_mathurin_annee" },
    ] },
  K04j_mathurin_annee: { act: "II", title: "En quelle année on est", place: "ferme",
    text: [
      "Le vieux ne sourit pas. Il réfléchit, avec le soin qu'il met à tout ce qui touche aux dates.",
      "« Cinq cent quarante et un. Le treizième de juin, huit jours avant le Grand Midi, lune montante. » Un temps. « Ça te convient ? Tu ne vas pas t'asseoir sur la borne ? »",
      "Tu dis que cela te convient très bien. Il hoche la tête, soulagé pour toi, et il referme le poing sur sa montre. « Alors c'est que tu es tombé juste. L'autre avait dû se tromper de porte, ou d'année. Ça doit arriver. Ne dis rien à ma bru : elle te donnerait de la tisane. »",
    ],
    choices: [{ back: "K04j_mathurin" }] },
  K04j_mathurin_montre: { act: "II", title: "La seule montre de la paroisse", place: "ferme",
    text: [
      "« Je l'ai achetée à la foire du Grand Midi, l'année de mes vingt ans, avec trois récoltes de noix. Un maître de la Guilde l'avait faite pour son chef-d'œuvre. Elle n'a jamais varié d'un quart d'heure dans le mois. » Il l'ouvre, pour te la faire voir : le boîtier d'argent est net, sans une rayure, sans une lettre.",
      "Elle bat contre ta poitrine, à cet instant, dans ta veste, la même, avec soixante ans d'usure et un coup sur le bord. Les deux tic-tac tombent ensemble. Tu es seul{e} à entendre qu'il y en a deux.",
      "« Elle ira à la petite, dit Mathurin. Pas à Girard : Girard la perdrait dans une mare. La petite regarde. C'est tout ce qu'il faut à une montre, quelqu'un qui la regarde. »",
    ],
    choices: [{ back: "K04j_mathurin" }] },

  // Bérarde
  K04j_berarde: { act: "II", title: "Au fournil", place: "ferme",
    text: [
      "Bérarde défourne. Six miches blondes sur la pelle, puis six autres, et l'odeur à s'asseoir par terre. Elle parle en travaillant, sans attendre de réponse, comme les gens qui ont trop à faire pour s'offrir des silences.",
      "« On cuit double. Demain, on est de noce à Roquebise : ma cousine Ysabeau épouse un potier, le Colas Hureau. Toute la maison y va, sauf le père Mathurin et un valet. Il y aura des dragées, de la danse, et ma tante qui pleure. » Elle te jauge. « Tu vas de ce côté ? Roquebise est sur la route de Méridane. Tu pourrais marcher avec nous, au lieu d'aller seul{e} comme une âme en peine. »",
      "Elle enfourne la fournée suivante, et sa voix change. « Seulement, il faut d'abord que la journée finisse. Le Ragot vient tantôt. Le marchand de bois. On lui doit trente écus à la Saint-Jean, pour les deux années de grêle, et on ne les a pas. Il prendra le noyer du milieu. Il en a envie depuis dix ans : il fournit la Guilde, pour les caisses d'horloge. » Elle referme la porte du four, plus fort qu'il ne faut. « L'arrière-grand-père de Josse l'a planté. Je me suis mariée dessous. Trente écus. »",
      { if: { not: { has: "j:habits" } }, text: "Avant que tu sortes, elle te rattrape par la manche et palpe l'étoffe. « D'où ça sort, ce drap ? Et ces souliers ? Tu vas te faire suivre par tous les chiens du canton. Tiens. » Elle te fourre dans les bras une blouse de Girard, des guêtres, une paire de sabots. « Ça ne te rendra pas beau, mais ça te rendra d'ici. »" },
    ],
    fx: { flag: ["j:habits", "j:sait_dette"] },
    choices: [{ back: "K04j_ferme" }] },

  // Line follows
  K04j_line_suit: { act: "II", title: "À dix pas", place: "ferme",
    text: [
      "Elle te suit depuis la soupe, à dix pas, sans se cacher : elle a seulement trouvé, à chaque endroit où tu allais, quelque chose à y faire. Quand tu te retournes, elle ne fait pas semblant de regarder ailleurs.",
      { after: "j:montre_vue", text: "« J'ai réfléchi, annonce-t-elle. Pour le L. Il y a trois façons. Ou bien tu es un menteur et tu l'as gravé toi-même, mais alors comment tu sais comment je le fais ? Ou bien grand-père a deux montres, et il ne l'a jamais dit. Ou bien... » Elle s'arrête. La troisième façon est trop grosse pour sa bouche. « Je réfléchis encore. »" },
      { before: "j:montre_vue", text: "« Je sais que tu n'es pas ce que tu dis, déclare-t-elle. Je ne sais pas encore ce que tu es. Je cherche. Ne me le dis pas : j'aime mieux trouver. »" },
      "« En attendant, tu sais lire l'heure. Sur une montre. Apprends-moi. Grand-père dit que je suis trop petite, et Girard ne sait pas, il fait semblant. »",
    ],
    choices: [
      { label: "L'emmener devant la grande horloge, ou sortir ta montre, et lui apprendre", to: "K04j_line_heure" },
      { label: "« Plus tard. J'ai un pré à faucher. »", back: "K04j_ferme" },
    ] },
  K04j_line_heure: { act: "II", title: "La petite aiguille d'abord", place: "ferme", fx: { flag: ["monde:line_lire", "j:line_lire"], ep: ["perso", 400] },
    text: [
      "Tu lui apprends comme on t'a appris : la petite aiguille d'abord, qui est la plus lente et la plus sûre ; puis la grande, qui court, et qu'il ne faut jamais croire toute seule. Tu lui fais dire les quarts. Tu lui fais deviner l'heure qu'il sera quand la grande aura fait un tour.",
      "Elle comprend au deuxième exemple, et s'impatiente au troisième. « Et dedans ? Qu'est-ce qui la pousse ? » Tu ouvres le fond de la montre. Elle regarde le balancier aller et venir, le ressort respirer, les roues se passer le mouvement l'une à l'autre, et elle ne dit plus rien. Tu connais ce silence. Tu l'as eu, à six ans, devant un établi, pendant qu'une vieille femme te tenait la loupe.",
      "« C'est celle-là qui commande, dit-elle enfin, le doigt sur le balancier. Si on la tenait, tout s'arrêterait. »",
      "« Oui. »",
      "« Et si on la lâchait d'un coup, après ? » Elle lève les yeux. « Ça repartirait trop vite ? Ou tout de travers ? » Tu réponds que tu ne sais pas. C'est la vérité, et c'est pour l'apprendre que tu es là.",
    ],
    choices: [{ back: "K04j_ferme" }] },
});

module.exports = {
  passages: P,
  extras: {
    people: {
      line_enfant: { name: "Line, à neuf ans", f: true, aka: ["Line"], face: { age: "enfant", skin: "hale", hair: "chatain", coif: "tresses", eyes: "amande", iris: "gris", nose: "retrousse", lips: "fines", shape: "ovale" },
        aspect: { allure: "neuf ans, deux nattes, une dent en moins", signe: "compte ses preuves sur ses doigts" }, qui: "La fille de la ferme des Noyers, en 541.", desc: "La fille de Josse et de Bérarde. Elle regarde, elle compte, et elle garde pour elle ce qu'elle a trouvé." },
      josse: { name: "Josse Noyer", f: false, aka: ["Josse"], face: { age: "adulte", skin: "hale", hair: "brun", coif: "court", beard: "barbe", eyes: "lourds", iris: "brun", nose: "large", lips: "fines", shape: "carre" },
        aspect: { allure: "quarante ans, large et lent", signe: "le chapeau sur les yeux" }, qui: "Le maître de la ferme des Noyers, en 541.", desc: "Le père de Line. Deux années de grêle l'ont endetté." },
      berarde: { name: "Bérarde Noyer", f: true, aka: ["Bérarde"], face: { age: "adulte", skin: "hale", hair: "chatain", coif: "foulard", eyes: "amande", iris: "gris", nose: "fin", lips: "pleines", shape: "ovale" },
        aspect: { allure: "trente-cinq ans, les bras rouges jusqu'au coude", signe: "ne s'assoit jamais" }, qui: "La maîtresse de la ferme des Noyers, en 541.", desc: "La mère de Line. Elle s'est mariée sous le noyer du milieu." },
      girard: { name: "Girard Noyer", f: false, aka: ["Girard"], face: { age: "jeune", skin: "hale", hair: "brun", coif: "court", eyes: "ronds", iris: "brun", nose: "large", lips: "pleines", shape: "carre" },
        aspect: { allure: "quatorze ans, des épaules", signe: "un air de coq" }, qui: "Le frère de Line, en 541.", desc: "Le fils de la ferme. Il veut voir la grande horloge sonner le Grand Midi." },
      mathurin: { name: "L'aïeul Mathurin", f: false, aka: ["Mathurin", "l'aïeul"], face: { age: "ancien", skin: "hale", hair: "blanc", coif: "degarni", eyes: "tombants", iris: "bleu", nose: "busque", lips: "fines", shape: "allonge" },
        aspect: { allure: "soixante-quinze ans, dans son fauteuil", signe: "porte une montre à son oreille" }, qui: "Le grand-père de Line, en 541.", desc: "Il confond les saisons et sait toujours l'heure. Il défend qu'on touche la pierre de la grange." },
    },
  },
};
