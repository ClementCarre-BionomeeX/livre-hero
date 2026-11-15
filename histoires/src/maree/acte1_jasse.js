// Les Fils de la Marée · act I, midday to evening: Jasse Ferrant at Bas-Port. Two openings: Nella taken to the Tour
// du Guet (nella=prison), or Nella at his door because Sévan sent her (nella=libre). Two actions before the evening
// (clock j1): the key in the Virgin of the pontoon (clef3), the ambush of the prison barge at one o'clock, the Mère
// Gouge (gouge = allie | prudente, basport = agite), a hiding place for Nella (cache), the Tour du Guet. What Jasse
// leaves undone, Corentin does: he heard the message too (clef3=corentin).
var LIBRE = { has: "nella=libre" }, PRISON = { has: "nella=prison" };
var DEUX = { clock: "j1", min: 2 };
module.exports = {
  J1_barque: { act: "I", title: "Les Hautes-Eaux", place: "basport", ambiance: "eau",
    fx: { meet: ["mo", "corentin"] },
    text: [
      "À Bas-Port, la marée est entrée dans les rues pendant la nuit, comme chaque année. L'eau monte aux genoux dans la rue des Cordiers, à la taille sur la place aux Poissons. Les gens d'ici ont mis leurs meubles sur les tables et leurs enfants sur les toits, et ils ont sorti les masques. Trois jours de fête, trois jours sans pavés.",
      "Tu as vingt-deux ans et une barque plate que ton père t'a laissée, la *Pimprenelle*, peinte en bleu. Pendant les Hautes-Eaux, un passeur gagne en trois jours ce qu'il gagne en deux mois. Depuis l'aube, tu as fait traverser la place aux Poissons à deux cents personnes, à un sou pièce, sous les cloches de deuil qui sonnent sans arrêt depuis sept heures.",
      "La Doyenne est morte. Tout le monde le dit, et puis tout le monde remet son masque, parce que la fête est la fête.",
      { if: PRISON, text: "Vers onze heures et demie, une voix aiguë crie ton nom par-dessus l'eau. Petit Mo arrive en courant sur le rebord des façades, de fenêtre en fenêtre, comme un chat. Onze ans, des jambes de héron. Il saute dans la barque si fort qu'elle embarque un seau d'eau. « Jasse ! Ils ont pris Nella ! »" },
      { if: LIBRE, text: "Vers onze heures et demie, quelqu'un se laisse tomber dans ta barque depuis le rebord d'une fenêtre, un châle trempé sur la tête. Tu lèves ta gaffe. Le châle glisse : c'est Nella. Ta sœur, en tablier de servante du palais, de l'eau jusqu'au ventre. « Pousse, Jasse. Pousse, s'il te plaît. Le Guet est derrière moi. »" },
      "Derrière toi, sur le perron de la taverne de la Morue, Corentin Lasalle lève la tête de sa chope.",
    ],
    choices: [{ label: "Écouter", to: "J1_nouvelle" }] },

  J1_nouvelle: { act: "I", title: "La nouvelle", place: "basport", fx: { time: 1 },
    text: [
      { if: PRISON, text: "Mo parle vite, en avalant la moitié des mots. Il était aux cuisines du palais ce matin, pour livrer les anguilles. Il a vu le Guet emmener Nella dans une salle basse. On dit qu'elle a empoisonné la Doyenne avec le sel. On l'emmène à la Tour du Guet à une heure, par la barque de la prison, par le canal des Sels." },
      { if: PRISON, text: "« Elle m'a vu par la porte. Elle m'a fait signe, et quand le garde a tourné la tête, elle a dit, juste comme ça : *Dis à Jasse : la Vierge du ponton. Qu'il la garde.* Après, le garde m'a chassé. »" },
      { if: LIBRE, text: "Tu pousses. La *Pimprenelle* file sous l'arche du pont des Tanneurs, entre deux chalands chargés de masques. Nella parle en reprenant son souffle. La Doyenne est morte cette nuit. Le médecin du Temple, maître Aldric, est venu la trouver ce matin et lui a dit de partir, tout de suite, chez son frère. Elle n'a pas compris pourquoi. Puis elle a entendu les gardes demander la servante qui portait les plateaux, et elle a compris." },
      { if: LIBRE, text: "« Ils vont dire que c'est moi. Le sel. C'est moi qui portais le sel. » Elle serre ton bras. « Jasse, il y a quelque chose dans la Vierge du ponton. La Doyenne me l'a donné. Je l'ai caché là cette nuit. Il faut le garder. »" },
      "Corentin Lasalle est descendu du perron, de l'eau jusqu'aux cuisses, sa chope encore à la main. Roux, barbu, le rire facile. Vous avez volé vos premières pommes ensemble. Depuis, il a volé des choses plus grosses, et il a toujours partagé. « J'ai tout entendu. Qu'est-ce qu'on fait ? »",
    ],
    choices: [{ label: "Réfléchir vite", to: "J1_choix" }] },

  J1_choix: { act: "I", title: "Bas-Port, à midi", place: "basport", hub: true, noLead: true, backName: "la place aux Poissons",
    text: [
      { first: true, if: PRISON, text: "Midi sonne. Tu as jusqu'au soir avant que la ville ne s'endorme sur sa fête. Assez pour deux choses, pas pour trois. La barque de la prison passera sous le pont des Sels à une heure." },
      { first: true, if: LIBRE, text: "Midi sonne. Nella est accroupie au fond de la barque, sous une bâche. Quelque part derrière, quatre gardes du Guet pataugent dans la rue des Cordiers en demandant aux gens s'ils ont vu une servante en tablier. Tu as jusqu'au soir. Assez pour deux choses, pas pour trois." },
      { again: true, if: { clock: "j1", max: 1 }, text: "Le soleil a passé le clocher de Sainte-Agathe. Il te reste le temps d'une chose avant le soir." },
      { if: { has: "j1:corentin_envoye" }, text: "Corentin est parti de son côté, comme tu le lui as demandé." },
    ],
    choices: [
      { label: "Attaquer la barque de la prison sous le pont des Sels, à une heure", if: PRISON, hide: { any: [{ clock: "j1", min: 1 }, LIBRE] }, why: "La barque est passée.", to: "J1_canal", big: true },
      { label: "Aller au vieux ponton chercher ce qu'il y a dans la Vierge, avec Corentin", to: "J1_ponton", fx: { flag: "j1:avec_corentin", clock: { j1: 1 } }, hide: { has: "j1:ponton" } },
      { label: "Aller au vieux ponton seul, et envoyer Corentin surveiller la Tour du Guet", to: "J1_ponton", fx: { flags: ["j1:corentin_envoye"], clock: { j1: 1 } }, hide: { has: "j1:ponton" } },
      { label: "Cacher Nella chez la Mère Gouge, la doyenne des bateliers", if: LIBRE, to: "J1_gouge", fx: { clock: { j1: 1 } }, hide: { any: [{ seen: "J1_gouge" }, { has: "j1:cache" }] } },
      { label: "Cacher Nella dans l'entrepôt de Corentin, derrière la Morue", if: LIBRE, to: "J1_cache_corentin", fx: { clock: { j1: 1 } }, hide: { has: "j1:cache" } },
      { label: "Entraîner les gardes loin de Nella, dans les rues inondées", if: LIBRE, to: "J1_leurre", fx: { clock: { j1: 1 } }, hide: { seen: "J1_leurre" } },
      { label: "Demander l'aide de la Mère Gouge et des bateliers", if: PRISON, to: "J1_gouge", fx: { clock: { j1: 1 } }, hide: { seen: "J1_gouge" } },
      { label: "Aller à la Tour du Guet demander à voir Nella", if: PRISON, to: "J1_tour", fx: { clock: { j1: 1 } }, hide: { seen: "J1_tour" } },
    ] },
  J1_suite: { branch: [
    { if: DEUX, to: "J1_soir_br" },
    { to: "J1_choix" },
  ] },

  // ---------------------------------------------------------------- the pontoon
  J1_ponton: { act: "I", title: "La Vierge du ponton", place: "ponton", ambiance: "eau",
    fx: { flag: "j1:ponton" },
    text: [
      "Le vieux ponton des pêcheurs est au bout de Bas-Port, là où les maisons s'arrêtent et où la lagune commence. Pendant les Hautes-Eaux, les planches sont à fleur d'eau, et l'on marche sur la mer.",
      "Au bout du ponton, sur un poteau, il y a une niche de bois avec une petite Vierge peinte, les pieds rongés de sel. Les femmes de pêcheurs y laissent des coquillages. Ta mère y laissait des coquillages. Nella aussi.",
      { if: { has: "j1:avec_corentin" }, text: "Corentin te suit, les pouces dans la ceinture, en sifflant entre ses dents." },
      "Tu passes la main derrière la statue. Tes doigts touchent du tissu mouillé.",
      "C'est un ruban bleu, épais, roulé sur lui-même. Dedans, cousue, une clef de bronze longue comme ta main. Et un billet plié, protégé par un bout de toile cirée. L'écriture est fine et droite : *Le jour de ma mort, porte-la au Conseil. E.*",
    ],
    choices: [{ label: "Regarder la clef", to: "J1_ponton2" }] },
  J1_ponton2: { act: "I", title: "La clef de bronze", place: "ponton",
    fx: { item: "clef_bronze", clue: "ruban", set: { clef3: "jasse" }, ep: 200 },
    text: [
      "*E.*, c'est Ermesinde. Une clef de la Doyenne, cousue dans un ruban de servante, cachée derrière la Vierge des pêcheurs. Tu ne sais pas ce qu'elle ouvre. Tu sais qu'elle vaut assez pour qu'on accuse ta sœur de meurtre.",
      { if: { has: "j1:avec_corentin" }, text: "Corentin a regardé par-dessus ton épaule. Il siffle, doucement. « Le jour de ma mort, porte-la au Conseil. Eh bien. Ça, mon vieux, ça se vend. » Il rit. Tu ris aussi. Il ne rit pas tout à fait comme d'habitude." },
      { if: { has: "j1:corentin_envoye" }, text: "Tu es seul sur le ponton. Personne ne sait que tu l'as, sauf la Vierge." },
    ],
    choices: [
      { label: "Garder la clef sur toi, sous ta chemise", fx: { set: { clef3_ou: "jasse" } }, to: "J1_suite" },
      { label: "La remettre dans la niche, derrière la Vierge : personne ne cherche là", fx: { set: { clef3_ou: "niche" }, drop: "clef_bronze" }, to: "J1_suite" },
    ] },

  // ---------------------------------------------------------------- the ambush of the prison barge
  J1_canal: { act: "I", title: "Le pont des Sels", place: "basport",
    fx: { clock: { j1: 1 } },
    text: [
      "Le canal des Sels passe sous un pont de pierre à une seule arche, assez bas pour qu'on baisse la tête en barque quand la marée est haute. Et cet après-midi, la marée est très haute.",
      "Tu as une heure. Corentin connaît le patron d'un chaland de sel amarré dix brasses avant le pont. Mo connaît tous les gamins de Bas-Port. Toi, tu connais l'eau.",
      "Une barque de la prison, c'est quatre rameurs du Guet et deux gardes avec des hallebardes. Ils ne s'attendent à rien. Personne n'a jamais attaqué la barque de la prison.",
    ],
    choices: [
      { label: "Le chaland : le lâcher en travers du canal juste avant le pont, et prendre Nella dans la confusion", test: { dom: "discretion", diff: 0, label: "Ruse" },
        win: { to: "J1_canal_ok" }, lose: { to: "J1_canal_combat" } },
      { label: "Attendre sous l'arche avec Corentin, et sauter dans la barque quand elle passe", to: "J1_canal_combat" },
    ] },
  J1_canal_combat: { act: "I", title: "Sous l'arche", place: "basport",
    combat: { title: "La barque de la prison", enemies: [{ id: "garde", n: 2 }], terrain: "bati",
      win: { to: "J1_canal_ok" }, lose: { to: "J1_canal_rate" },
      flee: { label: "Plonger et nager sous les chalands", dom: "nature", diff: 0, to: "J1_canal_rate" } },
    text: [
      "La barque arrive. Nella est assise au milieu, les mains liées devant elle. Un garde à l'avant, un à l'arrière. Tu sautes du rebord de l'arche, Corentin derrière toi. La barque tangue, un rameur tombe à l'eau, et les deux gardes ont déjà leurs hallebardes en main.",
    ] },
  J1_canal_ok: { act: "I", title: "Nella", place: "basport",
    fx: { set: { nella: "libre", nella_par: "jasse" }, flag: "canal:attaque", ep: 300, regard: { ysabeau: "hostile" } },
    text: [
      { outcome: "win", text: "Le deuxième garde passe par-dessus bord avec sa hallebarde. Tu coupes la corde des poignets de Nella avec ton couteau." },
      { outcome: null, text: "Le chaland de sel pivote lentement sur le courant, sa grosse proue vient se coincer en travers de l'arche, et la barque de la prison s'écrase dessus dans un grand bruit de rames cassées. Les gardes jurent, les rameurs tombent les uns sur les autres. Personne ne voit Mo se glisser à l'arrière et couper la corde des poignets de Nella avec ton couteau." },
      "Nella saute dans la *Pimprenelle*. Tu pousses. Trois coups de gaffe, et vous êtes sous le pont des Tanneurs, puis dans la ruelle des Teinturiers, puis nulle part, dans le labyrinthe de Bas-Port inondé, où le Guet se perd depuis cent ans.",
      "Derrière vous, quelqu'un sonne la cloche d'alarme de la Tour. Tu viens d'attaquer le Guet en plein jour. Ce soir, ton nom sera dans la bouche de la capitaine Dorne.",
    ],
    choices: [{ label: "Cacher Nella", to: "J1_canal_cache" }] },
  J1_canal_cache: { act: "I", title: "Une cachette", place: "basport",
    text: [
      "Nella tremble, mouillée jusqu'aux os. Elle te raconte la nuit, le plateau, le sel, l'apothicaire de la Maison des Sels qu'elle a vu sortir des cuisines à onze heures. Elle te dit : la Vierge du ponton. Il faut la cacher, elle, avant tout. Le Guet va fouiller Bas-Port maison par maison.",
    ],
    choices: [
      { label: "Chez la Mère Gouge", to: "J1_gouge", hide: { seen: "J1_gouge" } },
      { label: "Dans l'entrepôt de Corentin", to: "J1_cache_corentin" },
    ] },
  J1_canal_rate: { act: "I", title: "Le canal des Sels", place: "basport",
    fx: { set: { jasse_blesse: "canal" }, flag: "canal:attaque", regard: { ysabeau: "hostile" } },
    text: [
      "Un coup de hampe te prend à la tempe. Le monde se retourne. L'eau du canal est froide et verte, et une main t'attrape par le col : Corentin, qui te tire sous un chaland pendant que les gardes fouillent l'eau avec leurs hallebardes.",
      "Quand tu peux de nouveau voir, la barque de la prison est loin, vers la digue des Pendus. Nella est dedans. Elle s'est retournée. Elle t'a vu tomber.",
      "Tu saignes de la tempe, tu as bu la moitié du canal, et la cloche d'alarme de la Tour sonne. Le Guet sait maintenant que quelqu'un, à Bas-Port, est prêt à se battre pour cette fille.",
    ],
    choices: [{ label: "Rentrer à Bas-Port en te tenant la tête", to: "J1_suite" }] },

  // ---------------------------------------------------------------- the Mère Gouge
  J1_gouge: { act: "I", title: "La Mère Gouge", place: "basport",
    fx: { meet: "gouge" },
    text: [
      "La Mère Gouge tient la taverne de l'Ancre Basse, au coin de la place aux Poissons. Pendant les Hautes-Eaux, elle tient séance sur la table du fond, posée sur des tonneaux, avec l'eau qui clapote sous ses bottes. Elle a soixante-dix ans, un foulard rouge, une ancre tatouée sur le dos de la main. Quand elle tape sur un tonneau, mille barques sortent.",
      { if: LIBRE, text: "Elle regarde Nella, tremblante dans son tablier du palais. Elle la regarde longtemps, plus longtemps qu'il ne faut. « La petite des Ferrant. » Sa voix change un peu. « Je t'ai vue naître, ou presque. L'hiver de la grande passe. Tu avais trois mois quand ta mère t'a montrée sur le ponton. »" },
      { if: PRISON, text: "Elle t'écoute sans t'interrompre : Nella, le sel, la Tour. Quand tu as fini, elle reste un moment à regarder l'eau. « La petite des Ferrant. » Sa voix change un peu. « Je l'ai vue sur le ponton, l'hiver de la grande passe. Elle avait trois mois. »" },
      "« Le palais accuse une fille de Bas-Port d'avoir tué la Doyenne. Le palais a toujours eu besoin de quelqu'un de Bas-Port pour ses pendaisons. »",
    ],
    choices: [
      { label: "« Aide-nous. Bas-Port doit montrer au palais qu'il n'acceptera pas ça. »", to: "J1_gouge_foule", big: true },
      { label: "« Aide-nous. Mais sans bruit : pas d'émeute, ça la ferait pendre plus vite. »", to: "J1_gouge_prudente" },
    ] },
  J1_gouge_foule: { act: "I", title: "Les tonneaux", place: "basport",
    fx: { set: { gouge: "allie", basport: "agite" }, regard: { gouge: "allie" } },
    text: [
      "La Mère Gouge se lève. Elle prend un maillet sur la table et frappe trois coups sur le tonneau. Le bruit roule sur l'eau, d'une maison à l'autre. Les conversations de la taverne s'arrêtent.",
      "« Ce soir, dit-elle, toutes les barques de Bas-Port iront jusqu'à la digue des Pendus, avec des lanternes, et resteront là. Toute la nuit. Pour que le Guet voie combien on est. »",
      { if: LIBRE, text: "Puis, plus bas, pour toi : « Et la petite dort ici, dans ma soupente. Personne n'entre chez la Mère Gouge sans qu'elle le veuille, pas même le Guet. » Nella monte l'échelle sans un mot." },
      "Tu viens de mettre le feu à Bas-Port. Un feu sur l'eau, ça ne brûle pas, en principe.",
    ],
    choices: [{ label: "Revenir à la place aux Poissons", to: "J1_gouge_fin" }] },
  J1_gouge_prudente: { act: "I", title: "Sans bruit", place: "basport",
    fx: { set: { gouge: "prudente" }, regard: { gouge: "cordial" } },
    text: [
      "La Mère Gouge hoche la tête lentement. « Tu as plus de jugeote que ton père. » Elle se gratte le menton. « Sans bruit, alors. J'ai des cousins dans les cuisines de la Tour, et une nièce qui lave le linge du Guet. On saura ce qu'on lui fait, à chaque heure. Si on la touche, tu le sauras avant le capitaine. »",
      { if: LIBRE, text: "Elle désigne une échelle, au fond. « Et la petite dort ici, dans ma soupente. Personne n'entre chez la Mère Gouge sans qu'elle le veuille. » Nella monte l'échelle sans un mot." },
    ],
    choices: [{ label: "Revenir à la place aux Poissons", to: "J1_gouge_fin" }] },
  J1_gouge_fin: { branch: [
    { if: LIBRE, fx: { flag: "j1:cache", set: { cache: "gouge" } }, to: "J1_suite" },
    { to: "J1_suite" },
  ] },

  J1_cache_corentin: { act: "I", title: "L'entrepôt de Corentin", place: "basport",
    fx: { flag: "j1:cache", set: { cache: "corentin" } },
    text: [
      "Derrière la taverne de la Morue, Corentin loue un entrepôt à moitié sous l'eau, plein de caisses qui ne portent aucune marque. Il soulève une trappe dans le plancher : un grenier sec, sous les tuiles, avec une paillasse et une lanterne.",
      "« Ici, même ma mère ne me trouve pas. » Il aide Nella à monter. Il lui donne sa propre couverture. Il est gentil avec elle, comme il l'a toujours été, depuis qu'elle avait six ans et qu'il lui apprenait à siffler.",
      "« Elle ne bougera pas d'ici, dit-il. Je te le jure sur la Vierge. »",
    ],
    choices: [{ label: "Le remercier", to: "J1_suite" }] },

  J1_leurre: { act: "I", title: "Le leurre", place: "basport",
    text: [
      "Tu prends le châle de Nella, son bonnet blanc, et tu les mets sur la tête de Mo, qui proteste pour la forme. Puis vous partez tous les deux, lui sur le rebord des façades, toi dans la barque, droit vers la rue des Cordiers, là où pataugent les quatre gardes.",
      "Ils voient le châle. Ils crient. Ils courent, autant qu'on court avec de l'eau aux cuisses.",
    ],
    choices: [
      { label: "Les entraîner jusqu'aux marais salants, en sautant de toit en toit", test: { dom: "nature", diff: 0, label: "Course" },
        win: { fx: { flag: "leurre:ok", ep: 200 }, to: "J1_leurre_ok" }, lose: { to: "J1_leurre_rate" } },
    ] },
  J1_leurre_ok: { act: "I", title: "Les marais salants", place: "basport",
    text: [
      "Une heure plus tard, les quatre gardes sont dans les marais salants, au nord de Bas-Port, de la boue jusqu'à la ceinture, à fouiller les cabanes des sauniers. Mo, sans châle, les regarde depuis un toit en mangeant une pomme. Toi, tu es déjà loin.",
      "Ce soir, la capitaine Dorne apprendra que la servante s'est enfuie vers les marais. Elle enverra des gens fouiller les marais. Il y en a pour trois jours.",
    ],
    choices: [{ label: "Revenir à la place aux Poissons", to: "J1_suite" }] },
  J1_leurre_rate: { act: "I", title: "Le pont des Tanneurs", place: "basport",
    fx: { set: { mo_pris: "j1" } },
    text: [
      "Mo glisse sur une tuile mouillée. Il tombe dans l'eau, juste devant les gardes. L'un d'eux le sort par le col, lui arrache le châle, et comprend.",
      "« C'est un gamin ! » Ils le gardent. Un gamin qui portait le châle de la fugitive, ça sait des choses. Ils l'emmènent vers la Tour du Guet, et Mo te cherche des yeux, et tu ne peux rien faire sans te montrer.",
    ],
    choices: [{ label: "Revenir à la place aux Poissons, le cœur serré", to: "J1_suite" }] },

  // ---------------------------------------------------------------- the Tour du Guet
  J1_tour: { act: "I", title: "La digue des Pendus", place: "tour", ambiance: "chateau",
    fx: { meet: "ysabeau" },
    text: [
      "La Tour du Guet est au bout de la digue des Pendus, une langue de pierre qui s'avance dans la lagune. Tous les cent pas, un poteau noir, avec une poulie. Aujourd'hui, aucun poteau n'est garni. Ce sera pour la troisième nuit, disent les gens qui passent, au reflux.",
      { if: { has: "canal:attaque" }, text: "Les gardes à la porte de la Tour ont des têtes de gens à qui on vient de faire peur. L'un d'eux a une bosse au front. Tu gardes ton chapeau bas sur ta tempe." },
      "On te fait attendre deux heures dans une cour. Puis la capitaine Dorne descend elle-même. Brune, carrée, une balafre blanche du coin de l'œil au coin de la bouche. Elle t'écoute dire que ta sœur est innocente.",
      "« Peut-être. Ce n'est pas à moi d'en juger, c'est au Conseil. » Elle t'examine. « Tu peux la voir. Dix minutes. Devant moi. »",
    ],
    choices: [{ label: "Voir Nella", to: "J1_tour_nella" }] },
  J1_tour_nella: { act: "I", title: "Dix minutes", place: "tour",
    fx: { regard: { ysabeau: "neutre" }, flag: "j1:vu_nella" },
    text: [
      "Une salle basse, une table, deux chaises. Nella a les mains libres et les yeux rouges. Elle se jette contre toi. La capitaine reste debout près de la porte, les bras croisés.",
      "Nella parle fort, pour la capitaine : elle n'a rien fait, elle portait le plateau, comme chaque soir. Puis, la joue contre ton épaule, elle souffle, si bas que tu l'entends à peine : « La Vierge du ponton. Le ruban. Elle me l'a donné il y a trois mois, elle m'a dit de le porter au Conseil le jour de sa mort. Je ne sais pas ce que c'est. Je l'ai caché cette nuit, quand j'ai vu l'apothicaire de la Maison des Sels sortir de la cuisine. »",
      "« C'est fini », dit la capitaine.",
      "En partant, tu entends Ysabeau Dorne dire à un garde : « Le frère. Tu le reconnaîtras. »",
    ],
    choices: [{ label: "Repartir", fx: { clue: "leonce_cuisine" }, to: "J1_suite" }] },

  // ---------------------------------------------------------------- the evening
  J1_soir_br: { branch: [
    { if: { not: { has: "j1:ponton" } }, fx: { set: { clef3: "corentin", corentin: "traitre" } }, to: "J1_soir" },
    { if: { all: [{ has: "j1:avec_corentin" }, { has: "clef3_ou=niche" }] }, fx: { set: { clef3: "corentin", corentin: "traitre" }, drop: "clef_bronze" }, to: "J1_soir" },
    { if: { has: "cache=corentin" }, fx: { set: { corentin: "tente" } }, to: "J1_soir" },
    { fx: { set: { corentin: "ami" } }, to: "J1_soir" },
  ] },
  J1_soir: { act: "I", title: "Le soir sur l'eau", place: "basport", fx: { until: 19 },
    text: [
      "Le soleil descend derrière les Passes. Sur la lagune, les quarante voiles d'Orcanne deviennent noires contre le ciel rouge. Bas-Port allume ses lanternes, une par fenêtre, et la fête reprend, plus fort, comme pour couvrir les cloches.",
      { if: { all: [{ not: { has: "j1:ponton" } }] }, text: "En revenant vers la place, tu passes au bout du vieux ponton. Tu y vas, parce qu'il faut bien. Derrière la Vierge, la niche est vide. Il y a des traces de bottes mouillées sur les planches, de grosses bottes de quai, et une chope de la Morue posée par terre, retournée." },
      { if: { all: [{ has: "j1:avec_corentin" }, { has: "clef3_ou=niche" }] }, text: "Ce soir, en passant au bout du ponton, tu glisses la main derrière la Vierge pour vérifier. Tes doigts ne trouvent que le bois mouillé. Il n'y a qu'une personne au monde qui t'a vu la remettre là." },
      { if: { has: "clef3_ou=jasse" }, text: "La clef de bronze pèse contre ta poitrine, sous la chemise, à chaque coup de gaffe." },
      { if: { all: [{ has: "j1:corentin_envoye" }, { has: "clef3_ou=niche" }] }, text: "Tu as remis la clef derrière la Vierge. Personne ne t'a vu faire. Tu vérifies quand même en passant : elle est là, roulée dans son ruban." },
      { if: { has: "cache=gouge" }, text: "Nella dort dans la soupente de la Mère Gouge, au-dessus des tonneaux. Tu montes la voir. Elle ne dort pas." },
      { if: { has: "cache=corentin" }, text: "Nella est dans le grenier de Corentin. Tu soulèves la trappe. Elle ne dort pas. Corentin est en bas, il compte des caisses, il te fait un clin d'œil." },
      { if: PRISON, text: "Nella dort à la Tour du Guet, ce soir. Ou elle ne dort pas." },
      { if: { has: "mo_pris=j1" }, text: "Mo aussi est à la Tour. Un gamin de onze ans, pour un châle." },
      { if: { has: "basport=agite" }, text: "Vers neuf heures, les barques de Bas-Port commencent à partir vers la digue des Pendus, une lanterne à la proue. Il y en a cent, puis deux cents. Sur la Tour, les gardes doublent les sentinelles." },
    ],
    choices: [
      { label: "Parler avec Nella", if: LIBRE, to: "J1_soir_nella" },
      { label: "Rester sur l'eau, seul, à penser à ta mère", to: "J1_soir_mere" },
    ] },
  J1_soir_nella: { act: "I", title: "Ce que disait la Doyenne", place: "basport",
    fx: { regard: { nella: "allie" } },
    text: [
      "Vous parlez à voix basse, assis l'un contre l'autre, comme quand elle avait peur de l'orage. Elle te raconte la Doyenne. Pas celle du Conseil : la vieille femme qui la faisait asseoir pour lui lire des vers, le soir, et qui la reprenait sur sa façon de tenir la tasse.",
      "« Un jour, elle m'a regardée longtemps et elle a dit : *Tu as les yeux de quelqu'un.* Je lui ai demandé de qui. Elle a ri et elle a dit : *De quelqu'un qui savait nager.* »",
      "Elle se tait. Toi, tu penses à autre chose. À ta mère, sur son lit, l'hiver dernier, qui t'a serré la main en disant une phrase que tu as prise pour la fièvre.",
    ],
    choices: [{ label: "Lui répéter la phrase de votre mère", fx: { clue: "eau", flag: "jasse:dit_eau" }, to: "J1_fin" }, { label: "La garder pour toi", fx: { clue: "eau" }, to: "J1_fin" }] },
  J1_soir_mere: { act: "I", title: "La phrase", place: "basport",
    fx: { clue: "eau" },
    text: [
      "Tu restes sur la *Pimprenelle*, amarrée sous ta fenêtre, et tu regardes les lanternes trembler sur l'eau.",
      "L'hiver dernier, ta mère est morte de la poitrine, dans le lit où elle t'avait mis au monde. La dernière nuit, elle t'a serré la main très fort et elle a dit : « Nella n'est pas à nous. Elle est à l'eau. » Tu as cru que c'était la fièvre. Tu as cru que c'était une prière de batelière.",
      "Ce soir, une Doyenne morte a cousu une clef dans le ruban de ta sœur. Ce soir, tu n'es plus sûr de rien.",
    ],
    choices: [{ label: "Dormir dans la barque", to: "J1_fin" }] },
  J1_fin: { act: "I", title: "Bas-Port s'endort", place: "basport",
    text: [
      "À Bas-Port, les masques chantent jusqu'à minuit. Au Palais des Lanternes, sur l'île du Phare, le Conseil siège depuis sept heures du soir. Une femme en noir y tient la première clef.",
    ],
    choices: [{ label: "Suivre Oriane Valcor, au Palais des Lanternes", fx: { team: "oriane" }, to: "O1_bureau", big: true }] },
};
