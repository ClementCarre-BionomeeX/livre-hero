// Act III · Valcendre, the Orsan capital, intact for 312 years: the Sans-Nom on the road (Ildaën, if he won his page at
// the tournament), the living city of the dead, the five founders frozen in the great square, and Ardaël, the Winter King,
// who recognises his son and gives him his name, Aëlan. He offers the trial of the founders. The child leads ("tu").
var A = { act: "III", noLead: true };
function P(o) { return Object.assign({}, A, o); }
var NOMME = { has: "sansnom:page" };
module.exports = {
  III_v_route: P({ title: "Le chevalier sur la route", place: null,
    text: [
      "Les tours blanches grandissent à chaque pas. Elles ne reculent plus. Sur la route, quelqu'un vous attend, assis sur une borne, en armure d'argent mat, un masque blanc posé sur les genoux.",
      "Il a vingt ans, des yeux gris presque blancs, et ici, dans le blanc, on le voit très bien. On ne l'oublie pas. Il se lève quand vous arrivez.",
      { if: NOMME, text: "« Je m'appelle Ildaën, dit-il. Je peux le dire, maintenant. Une page, dans un coffre, à Vasselin. On me l'a rendue. » Il sourit, d'un sourire de garçon. « C'est étrange, d'avoir un nom. Ça pèse. »" },
      { if: { not: NOMME }, text: "« Je n'ai pas de nom, dit-il. Pas encore. Il est dans un coffre, là-haut. Tu peux m'appeler comme les autres : le Sans-Nom. »" },
      { if: { all: [{ has: "sansnom:ancre_lisandre" }, { present: "lisandre" }] }, text: "Il voit Lisandre. Il s'avance, et il lui prend la main, devant tout le monde. « La reine qui rit, lui dit-il. Je l'ai gardée. Elle rit encore. » Lisandre ne sait pas de quoi il parle. Elle le laisse tenir sa main." },
      "Puis il te regarde, toi, longtemps, et quelque chose passe sur son visage. « Mon père m'a envoyé t'attendre, dit-il. Il a entendu le bourdon. Il ne sait pas qui l'a sonné. Moi, je crois que je sais. »",
    ],
    choices: [{ label: "Le suivre", fx: { join: "sansnom", conf: { sansnom: 10 } }, to: "@route" }] }),

  III_v_porte: P({ title: "Valcendre", place: "valcendre", hub: true,
    text: [
      { first: true, text: "Les portes de Valcendre sont ouvertes. Elles n'ont jamais été fermées. Derrière, une ville. Pas des ruines : une ville. Des rues pavées, des fontaines, des marchés, des enfants qui courent, des chiens. Des tours fines comme des aiguilles, reliées par des ponts. Tout est blanc, et tout est vivant." },
      "Les gens portent des vêtements d'un autre temps, des manteaux à capuchon brodés d'ours et d'étoiles. Ils parlent la langue que tu parles en dormant. Ils te regardent passer. Le bruit court devant toi, de rue en rue, plus vite que tes pas.",
      "Au centre, la grand-place. Au fond, le palais, une tour plus haute que les autres, et sur la plus haute pointe, une couronne de givre qui brille sans soleil.",
    ],
    choices: [
      { label: "Le marché", hide: { seen: "III_v_marche" }, to: "III_v_marche" },
      { label: "La grand-place, où se dressent cinq statues", hide: { seen: "III_v_statues" }, to: "III_v_statues" },
      { label: "La maison des noms dits", hide: { seen: "III_v_noms" }, to: "III_v_noms" },
      { label: "Les remparts, avec Ysolde", hide: { any: [{ seen: "III_v_ysolde" }, { not: { present: "ysolde" } }] }, to: "III_v_ysolde" },
      { label: "Les chœurs, que Lisandre a entendus", hide: { any: [{ seen: "III_v_lisandre" }, { not: { present: "lisandre" } }] }, to: "III_v_lisandre" },
      { label: "Corbe, qui cherche quelqu'un dans la foule", hide: { any: [{ seen: "III_v_corbe" }, { not: { present: "corbe" } }] }, to: "III_v_corbe" },
      { label: "Pie, qui a disparu dans une ruelle", hide: { any: [{ seen: "III_v_pie" }, { not: { present: "pie" } }] }, to: "III_v_pie" },
      { label: "La boutique aux masques, sous les arcades", hide: { seen: "III_v_masques" }, to: "III_v_masques" },
      { label: "Les bains, sous la coupole blanche", hide: { seen: "III_v_bains" }, to: "III_v_bains" },
      { label: "La fontaine, où des enfants font flotter des bateaux", hide: { seen: "III_v_fontaine" }, to: "III_v_fontaine" },
      { label: "Une tour basse, avec une seule fenêtre très large", hide: { seen: "III_K_entree" }, to: "III_K_entree" },
      { label: "Une cour où bat un métier à tisser très long", hide: { seen: "III_v_tisserand" }, to: "III_v_tisserand" },
      { label: "La porte du nord, qui ne donne sur rien", hide: { seen: "III_v_porte_nord" }, to: "III_v_porte_nord" },
      { label: "Le palais", if: { seen: "III_v_statues" }, why: "Pas avant d'avoir vu la grand-place.", to: "III_v_palais", big: true },
    ] }),

  III_v_marche: P({ title: "Le marché", place: "valcendre",
    text: [
      "On vend des choses qui n'existent plus : des fruits d'une espèce qu'on ne cultive plus nulle part, des étoffes teintes d'une couleur qui n'a pas de nom en esquarrois, des jouets. On paie avec des chansons. Tu vois une femme acheter un panier de pommes rouges contre un couplet.",
      "Une marchande te tend une pomme. Elle ne veut rien. « Pour le fils de Maëra », dit-elle, et les gens autour hochent la tête.",
      "La pomme a le goût d'une pomme. Exactement. Tu avais oublié que les pommes avaient un goût aussi précis.",
    ],
    choices: [{ fx: { pv: 4, flag: "iii:pomme" }, back: "III_v_porte" }] }),

  III_v_statues: P({ title: "Les cinq", place: "valcendre",
    fx: { flag: "iii:statues" },
    text: [
      "Au milieu de la grand-place, sur un socle de pierre noire, cinq statues de glace. Cinq personnes, grandeur nature, debout, dos à dos, comme pour se défendre.",
      "Un homme en armure, avec une tour sur le plastron. Une femme corpulente, avec une gerbe brodée sur la manche. Un homme maigre, en manteau de marin, avec une barque au pommeau de son poignard. Un chevalier jeune, avec un cerf sur l'écu. Et un homme en robe longue, tenant une plume et une clé.",
      "Ils ne sont pas sculptés. Ils sont pris. Dans la glace, leurs yeux bougent.",
      "« Les fondateurs, dit le Sans-Nom à côté de toi. Pas eux : ce qu'il reste d'eux. Leurs souvenirs de ce jour-là. Le monde les a oubliés, alors ils sont venus ici, comme tout le reste. Et nous les avons gardés. »",
      { with: "ysolde", text: "Ysolde regarde le chevalier au cerf. Il a son menton. Il a ses mains." },
      { with: "hylas", text: "Hylas regarde l'homme à la plume et à la clé. Il a l'air de reconnaître un confrère." },
    ],
    choices: [{ back: "III_v_porte" }] }),

  III_v_noms: P({ title: "La maison des noms dits", place: "valcendre",
    text: [
      "Une grande salle ronde, sans livres, sans étagères. Des bancs. Sur les bancs, des gens assis, qui parlent à voix basse, chacun pour soi. Ils disent des noms. Chacun a les siens : il les dit, du premier au dernier, puis il recommence.",
      "« Les Orsans n'écrivaient pas, dit le Sans-Nom. Ils se disaient. Chacun portait cent noms, et les disait chaque jour, et les apprenait à ses enfants. Tant qu'on les dit, ils sont. » Il regarde la salle. « Quand les fondateurs sont venus, ils ont tué ceux qui disaient. Il n'est resté personne pour dire les noms des morts. Alors ils sont tous venus ici. »",
      { if: { has: "nord:chant_lu" }, text: "Tu penses à la grande paroi de la grotte des Corbeaux. Quelqu'un a gravé les noms dans la pierre, malgré tout. Pour qu'ils tiennent sans personne." },
    ],
    choices: [{ fx: { flag: "iii:noms_dits" }, back: "III_v_porte" }] }),

  III_v_ysolde: P({ title: "Les remparts", place: "valcendre",
    text: [
      "Ysolde fait le tour des remparts. C'est plus fort qu'elle. Les soldats orsans, sur le chemin de ronde, la regardent passer avec curiosité : une guerrière d'Esquarre, avec une épée d'Esquarre. Un vieux sergent la salue, à leur manière, la main ouverte sur le cœur.",
      "« Les murs ne servaient à rien, dit-il dans sa langue, et tu traduis. Ils sont venus par la rivière, de nuit, avec le feu. Le chevalier au cerf est entré le premier. » Il regarde Ysolde. « Il te ressemble. »",
      "Ysolde lui rend son salut, la main ouverte sur le cœur. Elle ne dit rien.",
    ],
    choices: [{ fx: { flag: "iii:ysolde_remparts", conf: { ysolde: 5 } }, back: "III_v_porte" }] }),

  III_v_lisandre: P({ title: "Les chœurs", place: "valcendre",
    text: [
      "Dans une cour, un chœur répète. Vingt voix, sans instruments, une musique qui n'a pas de mesure, qui monte et s'étale comme une marée. Lisandre est restée sur le seuil, les larmes aux yeux.",
      "La cheffe du chœur, une vieille femme, lui fait signe d'entrer. Lisandre entre. On lui donne une place. Elle chante avec eux, sans connaître la musique, et à la troisième reprise elle la connaît.",
      { if: { souv: "lisandre:voix" }, text: "Elle chante avec sa vraie voix. Rauque, trop grave. Ici, c'est la voix qui va." },
      { if: { not: { souv: "lisandre:voix" } }, text: "Elle chante juste, et beau, comme à la cour. La vieille femme l'écoute, et secoue la tête, doucement, avec tristesse : il manque quelque chose. Lisandre le sait." },
    ],
    choices: [{ fx: { flag: "iii:lisandre_choeur", conf: { lisandre: 5 } }, back: "III_v_porte" }] }),

  III_v_corbe: P({ title: "Celle qui cherche", place: "valcendre",
    text: [
      "Corbe dévisage tous les gens qu'elle croise. Tu finis par lui demander qui elle cherche.",
      { if: { has: "askel:rite" }, text: "« Ma mère, dit-elle. Elle est entrée par le col, à ma place. Elle doit être quelque part. » Elle la cherche toute la journée, dans les rues blanches. Le soir, une passante lui dit qu'une femme du clan, en robe blanche, est passée par Valcendre, il y a un jour ou cent ans, et a continué vers le nord, vers le bout du blanc, où il n'y a plus rien. Corbe hoche la tête. « Elle tient la porte. Elle chante. » Elle ne la cherche plus." },
      { if: { not: { has: "askel:rite" } }, text: "« L'aïeule, dit-elle. Celle qui m'a appris les chants. Elle est morte dans la glace, dans la grotte. Elle doit être ici. » Elle ne la trouve pas. Le soir, un vieil homme lui dit que ceux qui chantent pour tenir une porte ne viennent pas à Valcendre. Ils restent à la porte." },
    ],
    choices: [{ fx: { conf: { corbe: 5 } }, back: "III_v_porte" }] }),

  III_v_pie: P({ title: "Les voleurs de Valcendre", place: "valcendre",
    text: [
      "Tu retrouves Pie dans une ruelle, assis sur une marche, en grande conversation avec trois gamins orsans, par gestes. Il leur fait des tours de pièce. Ils lui font des tours de pomme.",
      "« Ils n'ont rien à voler, ici, dit Pie quand il te voit. Tout est à tout le monde. Personne ne garde rien. » Il a l'air désemparé. « Je ne sais pas quoi faire de mes mains, dans une ville comme ça. »",
      "Un des gamins lui prend une pièce dans la poche, très proprement, et la lui rend, très fier. Pie éclate de rire.",
    ],
    choices: [{ fx: { conf: { pie: 5 } }, back: "III_v_porte" }] }),

  III_v_palais: P({ title: "Le palais de givre", place: "valcendre",
    text: [
      "Le palais n'a pas de gardes. Les portes s'ouvrent devant le Sans-Nom. Des escaliers, des galeries, des salles vides, toutes blanches, toutes froides, et au sommet, une salle ronde, ouverte sur le blanc, sans murs, sous un toit porté par des colonnes de glace.",
      "Au milieu, un homme assis sur un siège de pierre. Il est très grand. Il est très vieux, et il a l'air d'avoir quarante ans. Il porte sur la tête une couronne de givre qui fond et se refait sans cesse, goutte à goutte. Il a les yeux gris presque blancs.",
      "Le Roi-Hiver. Ardaël.",
      "Il se lève quand tu entres. Il ne dit rien. Il descend les trois marches. Il s'arrête devant toi.",
    ],
    choices: [{ label: "Attendre", to: "III_v_ardael" }] }),

  III_v_ardael: P({ title: "Ardaël", place: "valcendre",
    fx: { meet: "ardael", flag: "iii:ardael" },
    text: [
      "« Je t'ai donné à ta mère, dit-il, et ta mère t'a donné au monde. Je lui en ai voulu. Je lui en veux encore. » Sa voix est grave, très douce, et elle fait trembler les colonnes. « Tu étais le premier. Le premier de nous à naître ici en trois cents ans. Elle disait que tu méritais le soleil. »",
      "Il lève la main, et il la pose sur ta tête, comme on bénit.",
      "« Aëlan. »",
      "Ton nom. Tu le savais. Tu l'as toujours su, comme on sait où est son cœur.",
      { if: { has: "maera:sait" }, text: "« Ta mère m'a fait dire que tu étais venu. Elle m'a fait dire aussi de te laisser le temps. » Il a un sourire bref. « Je n'en ai pas, de temps. Je n'en ai plus depuis trois cent douze ans. »" },
      "Le Sans-Nom, derrière toi, a mis un genou à terre. Il dit, sans lever la tête : « Mon frère. »",
    ],
    choices: [
      { label: "« Pourquoi la neige ? Pourquoi Sauvelune ? »", to: "III_v_pourquoi" },
      { label: "« Je ne suis pas d'ici. Je suis de Sauvelune. »", fx: { flag: "aelan:sauvelune" }, to: "III_v_pourquoi" },
    ] }),

  III_v_pourquoi: P({ title: "Pourquoi", place: "valcendre",
    fx: { clue: "n_ardael" },
    text: [
      "Ardaël retourne s'asseoir. Il parle longtemps, et il ne crie jamais.",
      "« Nous vivions dans la vallée qu'on appelle aujourd'hui des Cendres. Nous ne savions pas écrire. Nous nous disions. Cinq maisons sont venues du sud, avec des chevaux, des registres, et la faim de nos terres. Une nuit d'automne, elles ont brûlé la vallée. Tout. Ceux qui disaient les noms en premier. Ensuite les autres. »",
      "« Puis elles ont eu honte. Ou peur. Elles ont fait un pacte avec l'Hiver : que le monde nous oublie, et qu'il oublie ce qu'elles avaient fait. L'Hiver a pris le pacte. Il nous a pris, nous, morts et vivants, et nous a mis ici. Et il a bâti une digue avec leur oubli. »",
      "« La digue tenait. Puis un greffier a appris à vendre l'oubli. Chaque cession, chaque village vendu, chaque reine soulagée, alourdissait la digue. Elle s'est fendue. Ce qui passe par la fente, ce n'est pas moi. C'est nous. Ce sont tous les oubliés qui rentrent, et qui prennent la place de ce qu'on oublie là-haut. Ta Sauvelune n'est pas morte. Elle a été vendue. »",
      "Il te regarde. « Je ne veux pas la neige. Je veux qu'on se souvienne. Ce n'est pas la même chose, mais là-haut, ça finit pareil. »",
    ],
    choices: [{ label: "« Que veux-tu de moi ? »", to: "III_v_offre" }] }),

  III_v_offre: P({ title: "Le procès", place: "valcendre",
    text: [
      "« Je veux que tu voies, dit Ardaël. Pas que tu me croies : que tu voies. Les cinq, sur la place, gardent leur jour. On peut y entrer. On le fait, une fois l'an, pour qu'aucun de nous n'oublie. On appelle ça le procès. »",
      "« Entre dans chacun d'eux. Sois-le, une heure. Puis dis ce que tu as vu. Le peuple t'écoutera. Tu es un des nôtres, et tu es le seul d'entre nous qui ait vécu là-haut. »",
      { with: "hylas", text: "Hylas fait un pas en avant. « Laisse-moi faire celui à la plume, dit-il. C'est mon ordre. C'est ma faute aussi. » Ardaël le regarde longtemps. « Le greffier à la lanterne. Non. Tu regarderas. Il faut que ce soit lui. »" },
    ],
    choices: [
      { label: "« J'irai. »", fx: { flag: "proces:accepte", ep: ["perso", 1500] }, to: "III_p_place" },
      { label: "« J'irai. Mais je dirai ce que je verrai, pas ce que tu veux entendre. »", fx: { flag: ["proces:accepte", "aelan:libre"], conf: { sansnom: 5 }, ep: ["perso", 2000] }, to: "III_p_place" },
    ] }),
};
