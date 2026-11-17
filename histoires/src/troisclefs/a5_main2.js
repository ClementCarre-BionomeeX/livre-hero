// Les Trois Clefs d'Aiguemorne · act V, the hand (2/2): the top of the Tower. The old soldier of the landing, the
// hoarding and its thread of grey wool, the antechamber; then, at two, the Syndic's visit to his machine, heard from
// behind the drums; the afternoon (the cylinder, a stolen quarter of an hour, the trap door); the evening, and the
// little organ-builder who must be told. Hubs: A5m_palier (noon), A5m_apres (afternoon). Exit: A5c_rdv.
// Shared marks: monde:a5:hilaire (the old soldier lets the three pass, and will sound for them) | monde:a5:hilaire_lie,
// monde:a5:voie (a rope hangs from the hoarding), monde:a5:huile (the three locks are oiled), monde:a5:syndic_entendu,
// monde:a5:fer_double (the Syndic has had his key remade), monde:a5:cylindre=fausse|sourd (absent: intact),
// monde:a5:quart (the bell is a quarter late), monde:a5:trappe (the trap can be barred from above),
// monde:a5:soufflot=allie|lie. Personal: a5:m_voix (heard her through the wall).
var PRISE_FER = { has: "monde:a2:clef=prise" };
module.exports = {
  passages: {
    A5m_palier: { act: "V", title: "Le dernier palier", place: "horloge_close", ambiance: "chateau", hub: true, backName: "le palier",
      text: [
        { first: true, text: "L'échelle de meunier a vingt échelons. La trappe est levée. Tu passes la tête, et tu retrouves le palier rond, sa table, sa chandelle, et le dos d'un vieux soldat." },
        { first: true, text: "Il s'est mis en tenue. Il a brossé son bonnet de police, ciré sa jambe de bois, et astiqué la trompe de cuivre qui lui pend au cou jusqu'à s'y voir. Il fait une réussite. Derrière lui, trois marches, une voûte basse ; à sa gauche, la lucarne à volet qui donne sur le hourd." },
        { again: true, text: "Le palier rond, la table du vieux soldat, la voûte de l'antichambre, la lucarne du hourd. En bas, par la trappe, monte le soupir du balancier." },
      ],
      choices: [
        { label: "T'asseoir en face du père La Guérite", to: "A5m_guerite", once: true },
        { label: "Passer la lucarne, sur le hourd", to: "A5m_hourd" },
        { label: "Monter les trois marches, sous la voûte", to: "A5m_antichambre" },
        { label: "Redescendre : deux heures vont sonner", to: "A5m_visite", big: true },
      ] },

    // ───────────────────────────── Hilaire ─────────────────────────────
    A5m_guerite: { act: "V", title: "Vingt ans et six semaines", place: "horloge_close", ambiance: "chateau",
      text: [
        { if: { has: "a1:m_guerite=ami" }, text: "Il lève son œil bleu, et sa moustache jaune remue. « Tiens. La figure de septembre. » Il pousse le tabouret du pied. « Je me disais bien que tu reviendrais. On ne regarde pas une porte comme tu l'as regardée pour s'en aller ensuite planter des choux. »", else: "Il lève un œil unique, bleu, très clair, dans une figure de cuir. Il te regarde, puis il regarde la robe de Maître Crochemore, qui sort de la trappe en soufflant. « Deux visites le même jour, dit-il. En vingt ans, je n'en avais pas eu deux la même année. Asseyez-vous : il y a un tabouret. L'autre restera debout, il a l'air d'aimer ça. »" },
        "Il s'appelle Hilaire. On l'a mis là quand il a perdu sa jambe, en lui disant : *tu garderas la porte d'en haut.* Il a dit oui. Il ne savait pas que ce serait pour la vie.",
        "« On m'a apporté une consigne nouvelle, ce matin. Par écrit. » Il la tire de sa manche : un carré de papier, trois cachets. « *Aux trois quarts de onze heures, quand MM. les Clavaires seront au pied de la vis, le garde du palier sonnera trois coups de trompe, afin que nul ne se trouve devant la porte.* » Il replie le papier. « C'est la première fois qu'on me commande de sonner. Vingt ans que je porte cette trompe. Je ne sais même plus si elle a le la. »",
        "Il étale une carte, la reprend.",
        "« *Afin que nul ne se trouve devant la porte.* Qui veulent-ils qu'il s'y trouve ? Il ne monte personne. » Son œil va à la trousse, sur ton épaule ; il y reste. « À moins qu'il ne monte quelqu'un. »",
        "Maître Crochemore ouvre la bouche. Tu lui marches sur le pied.",
      ],
      choices: [
        { label: "Lui dire la vérité, puisqu'il l'a à moitié : ce qui gratte, derrière sa porte, a un nom",
          test: { dom: "social", diff: 5, label: "Parler à un homme qui a gardé une porte vingt ans", help: [{ if: { has: "a1:m_guerite=ami" }, v: 15 }, { if: { has: "monde:a5:cahier" }, v: 10 }, { if: { item: "eau_de_vie" }, v: 5 }, { if: { voie: "rebouteux" }, v: 5 }] },
          win: { fx: { flag: "monde:a5:hilaire", ep: ["perso", 1500] }, to: "A5m_guerite_ok" }, lose: { to: "A5m_guerite_ko" } },
        { label: "Lui demander ce qu'il a entendu, lui, depuis septembre", to: "A5m_guerite_dit" },
      ] },

    A5m_guerite_dit: { act: "V", title: "Ce que l'on entend d'un palier", place: "horloge_close", ambiance: "chateau",
      text: [
        "Il ne répond pas tout de suite. Il range ses cartes en un paquet, les égalise sur la table, par les quatre bords.",
        "« Ça grattait. Je te l'avais dit, ou je l'ai dit à un autre. Balancier prétendait que c'était le bronze qui travaille. » Il baisse la voix, et son œil se détourne vers la voûte. « Depuis la Toussaint, ça tousse. Le bronze ne tousse pas. J'ai fait trois sièges, j'ai couché dans des hôpitaux : je sais ce que c'est qu'une poitrine. Celle-là est prise depuis l'automne. Elle se retient, le jour, à cause de moi. La nuit, elle croit que je dors. »",
        "Il se tait un moment.",
        "« Et puis il y a eu la nuit où Balancier n'est pas remonté. Le lendemain non plus. Le dimanche, on m'a dit avec mon pain qu'il était mort, que des voleurs l'avaient tué. » Il hausse une épaule. « Cette nuit-là, là-derrière, ça n'a ni gratté ni toussé. Ça a fait un autre bruit. Je ne te dirai pas lequel : on ne répète pas ce qu'on entend à travers une porte, quand la personne se croit seule. Mais j'ai compris ce soir-là que ce que je gardais avait de l'amitié pour le vieux. Du bronze n'a d'amitié pour personne. »",
        "Il te regarde en face.",
        "« J'ai une consigne. *Ne laisser entrer personne.* Je l'ai tenue vingt ans, et je n'ai pas eu de mérite : il n'est venu personne. Je me suis souvent demandé ce que je ferais, le jour où quelqu'un viendrait. »",
      ],
      choices: [
        { label: "Lui dire que ce jour est aujourd'hui, et pourquoi",
          test: { dom: "social", diff: 0, label: "Parler à un homme qui a gardé une porte vingt ans", help: [{ if: { has: "a1:m_guerite=ami" }, v: 15 }, { if: { has: "monde:a5:cahier" }, v: 10 }, { if: { item: "eau_de_vie" }, v: 5 }, { if: { voie: "rebouteux" }, v: 5 }] },
          win: { fx: { flag: "monde:a5:hilaire", ep: ["perso", 1500] }, to: "A5m_guerite_ok" }, lose: { to: "A5m_guerite_ko" } },
      ] },

    A5m_guerite_ok: { act: "V", title: "La première désobéissance", place: "horloge_close", ambiance: "chateau",
      text: [
        "Tu le lui dis sans phrases, comme on fait un rapport à un ancien : il y a une femme, elle écrit, on veut la remplacer par une mécanique et murer son pain. Trois personnes viendront ce soir avec trois clefs.",
        { if: { has: "monde:a5:cahier" }, text: "Tu poses devant lui le cahier de graissage, ouvert à la dernière page. Il lit lentement, en suivant du doigt. À *on ne laisse pas faire cela à quelqu'un que l'on a soigné si longtemps*, le doigt s'arrête, et il se frotte l'œil avec le dos de la main, rudement, comme on chasse une mouche." },
        "Il reste longtemps silencieux. En bas, le balancier soupire.",
        "« Un soldat, dit-il enfin, ça obéit. On m'a appris ça à seize ans, à coups de plat de sabre, et je l'ai su toute ma vie. Seulement on m'a appris autre chose, plus tard, sur une brèche : la consigne, c'est pour quand l'officier n'est pas là. Quand il n'y a plus d'officier du tout, on regarde ce qu'on gardait, et on se demande pour qui. »",
        "Il se lève. Sa jambe de bois sonne sur le plancher.",
        "« *Ne laisser entrer personne.* Je croyais garder la porte contre les gens du dehors. Je la gardais contre celle du dedans. Vingt ans de faction devant une prison, et personne ne m'avait prévenu que j'étais geôlier. » Il crache, proprement, dans un coin. « Ils me commandent de sonner aux trois quarts. Je sonnerai. Trois coups, comme c'est écrit : vous saurez par là qu'ils sont au pied de la vis, et vous aurez cent quatre-vingts marches pour vous retourner. Avant cela, il peut passer devant ma table qui voudra. Je ferai ma réussite. J'ai remarqué qu'elle m'absorbe beaucoup. »",
        "Il se rassoit, bat ses cartes.",
        "« Je ne demande qu'une chose. Quand elle s'ouvrira, cette porte, laissez-moi la voir ouverte. Une seconde. Qu'un homme sache ce qu'il a fait de sa vie. »",
      ],
      choices: [{ back: "A5m_palier" }] },

    A5m_guerite_ko: { act: "V", title: "La consigne", place: "horloge_close", ambiance: "chateau",
      text: [
        "Tu parles trop vite, ou tu commences par le mauvais bout. Il t'écoute, la figure fermée, et à mesure que tu avances tu vois revenir dans son œil quelque chose de très ancien, de très simple, qui a été mis là à seize ans.",
        "« Tu me demandes de laisser passer. » Sa main monte à la trompe. « Tu me dis de belles raisons, et elles sont peut-être bonnes. Mais j'ai une consigne, moi, et elle tient en quatre mots. On ne m'a pas mis ici pour peser des raisons. On m'a mis ici parce que j'avais une jambe en moins et que je ne savais rien faire d'autre qu'obéir. Si je cesse d'obéir le dernier jour, qu'est-ce que j'aurai été, les vingt ans d'avant ? »",
        "Il porte le cuivre à ses lèvres.",
        "Maître Crochemore est plus près que toi. Il fait une chose dont tu ne l'aurais pas cru capable : il pose deux doigts sur le pavillon de la trompe, doucement, comme on pose la main sur l'épaule d'un homme qui va dire une sottise.",
        "« Mon ami, ne sonnez pas. Vous sonnerez tout à l'heure, quand on vous l'a écrit. Si vous sonnez à midi, vous aurez désobéi quand même, et pour rien. »",
        "Le vieux baisse la trompe. Il est gris.",
        "Il faut donc l'empêcher autrement, et vous le faites à deux, avec tous les ménagements qu'on peut mettre à ces choses : les mains liées devant, sans serrer, avec la ficelle du Remonteur ; la trompe ôtée, pendue à un clou, hors de sa portée ; sa jambe allongée sur le tabouret, sa chandelle mouchée, ses cartes à sa main. Il se laisse faire, la tête droite.",
        "« Vous me rendrez ce service, dit-il seulement quand c'est fini. Vous direz que j'ai résisté. »",
      ],
      fx: { flag: "monde:a5:hilaire_lie" },
      choices: [{ back: "A5m_palier" }] },

    // ───────────────────────────── The hoarding ─────────────────────────────
    A5m_hourd: { act: "V", title: "Le hourd", place: "horloge_close", ambiance: "plaine", hub: true, backName: "le hourd",
      text: [
        { first: true, text: "La lucarne tient par une ficelle. Tu passes, et le vent te prend. Le hourd est cette galerie de bois accrochée au sommet de la Tour, que les pigeons habitent depuis le siège. Ils s'envolent tous ensemble, tournent, reviennent se poser plus loin en protestant." },
        { first: true, text: "Tu n'étais venu{e} ici que de nuit. De jour, on a la ville entière sous les pieds, comme un plan en relief : les trois étages, les deux rivières, le pont où elles se joignent, et les trente mille lanternes éteintes qui pendent aux portes en attendant ce soir. On entend monter les marteaux, les cloches des paroisses qui s'essaient, une fanfare qui répète faux quelque part vers la place aux Heures." },
        { first: true, text: "Juste au-dessus de ta tête, à toucher, il y a le cadran. Vu de la ville, c'est une roue de moulin. D'ici, c'est un mur : un disque de pierre grise de vingt pieds, bombé, dont les chiffres ont la taille d'un homme. Tu remarques ce que nul ne voit d'en bas. Le disque est fait de deux moitiés. Une fente le traverse de haut en bas, fine comme une lame, bouchée de fiente et de mousse ; et sur le pourtour, il y a des gonds." },
        { again: true, text: "Le hourd, ses planches qui ploient, ses pigeons. La ville dessous. Au-dessus, le grand cadran de pierre, sa fente, ses gonds." },
      ],
      choices: [
        { label: "Chercher l'archère murée, et le brin de laine", to: "A5m_laine", once: true },
        { label: "Amarrer une corde pour qui viendra des toits", to: "A5m_corde", hide: { any: [{ seen: "A5m_corde_ok" }, { seen: "A5m_corde_ko" }, { seen: "A5m_corde_douce" }] } },
        { label: "Montrer les gonds à Maître Crochemore", to: "A5m_cadran", once: true },
        { label: "Rentrer par la lucarne", back: "A5m_palier" },
      ] },

    A5m_laine: { act: "V", title: "Entre deux briques", place: "horloge_close", ambiance: "plaine",
      text: [
        "Elle est du côté du nord, à hauteur de ton épaule : une ancienne archère, bouchée de briques posées de chant. Entre deux d'entre elles, le mortier manque sur la largeur d'un doigt.",
        "Il y avait là, en septembre, un brin de laine grise que le vent agitait. Tu avais pensé à un oiseau. Il y en a trois, à présent, noués bout à bout, et le dernier est tout neuf.",
        "Tu approches ton œil de la fente. Il y fait noir. Il en sort un air tiède, qui sent la cire, l'encre, et le renfermé d'une chambre où l'on vit.",
        "Tu pourrais parler. Il n'y a qu'une brique d'épaisseur.",
      ],
      choices: [
        { label: "Dire, tout bas, par la fente : « Nous sommes dans la Tour. »", fx: { flag: "a5:m_voix", ep: ["perso", 1000] }, to: "A5m_laine2" },
        { label: "Nouer un fil de ta manche au bout des trois autres, et t'en aller", fx: { ep: ["perso", 600] }, to: "A5m_laine_fil" },
      ] },

    A5m_laine2: { act: "V", title: "Une voix", place: "horloge_close", ambiance: "plaine",
      text: [
        "Tu le dis. Le vent emporte la moitié des mots.",
        "Il ne se passe rien. Les pigeons roucoulent. En bas, la fanfare recommence son morceau.",
        "Puis, de l'autre côté de la brique, tout près, il y a une toux : sèche, brève, étouffée dans quelque chose, comme en ont les gens qui toussent depuis longtemps et en ont pris de l'ennui. Et une voix. Elle est basse, nette, un peu rouillée ; elle a cette lenteur des personnes qui n'ont jamais été interrompues.",
        "« Vous êtes en avance. »",
        "Tu ne trouves rien à répondre. Tu avais préparé une phrase pour une porte, pas pour une fente.",
        "« À onze heures, reprend la voix. J'ai une Sentence à finir. Sept Causes, dont deux sont mal instruites. Si l'on doit me pendre ce soir, je ne veux pas que ce soit pour un travail bâclé. »",
        "Un silence. On entend, très loin, une plume qui reprend.",
        "« Qui que vous soyez des trois : il y a un pigeon qui niche au-dessus de cette fente, depuis quatre ans. Une femelle grise. Dites-moi si elle a des petits. Je l'entends, je ne la vois pas. »",
        "Tu lèves la tête. Il y a un nid, sous la solive, et dedans deux boules de duvet sale, la bouche ouverte.",
        "« Deux. »",
        "« Deux, répète la voix, avec une satisfaction de greffier. Je l'avais inscrit. » Et la plume reprend pour de bon.",
      ],
      choices: [{ back: "A5m_hourd" }] },

    A5m_laine_fil: { act: "V", title: "Un quatrième brin", place: "horloge_close", ambiance: "plaine",
      text: [
        "Tu tires un fil de ta manche. Il est brun. Tu le noues au bout du dernier brin gris, d'un nœud de serrurier, celui que la Douairière vous a appris pour les trousseaux.",
        "Le vent prend les quatre brins et les fait flotter ensemble.",
        "Tu t'éloignes. Quand tu te retournes, à dix pas, la laine a bougé : elle rentre dans le mur, lentement, par petites secousses, comme une ligne que l'on relève. Le brun passe le dernier. Puis il n'y a plus rien entre les deux briques.",
        "Au bout d'un moment, un brin ressort. Il est gris. Il est noué, au bout, d'un nœud que tu ne connais pas.",
      ],
      choices: [{ back: "A5m_hourd" }] },

    A5m_corde: { act: "V", title: "Quarante toises de vide", place: "horloge_close", ambiance: "plaine",
      branch: [
        { if: { has: "monde:douce:alliee" }, fx: { flag: "monde:a5:voie" }, to: "A5m_corde_douce" },
        { to: "A5m_corde_essai" },
      ] },

    A5m_corde_douce: { act: "V", title: "Le voisin du dessous", place: "horloge_close", ambiance: "plaine",
      fx: { ep: ["perso", 800] },
      text: [
        "Tu te penches par-dessus le garde-fou pour mesurer la descente. Il y a sous le hourd quarante toises de pierre lisse, puis le toit de plomb du corps de garde, puis le rempart.",
        "Sur le toit de plomb, à plat ventre contre une cheminée, il y a un homme. Il est masqué d'un foulard jusqu'au nez, et il a au bout de ses manches une paire de gants noirs. Il lève la tête. Il te voit. Il porte deux doigts à sa bouche, et tu entends monter, très faibles, deux notes, la seconde plus basse.",
        "Tu les rends.",
        "Il déroule quelque chose de son épaule. Un grappin gainé de drap monte en tournant, mord le garde-fou à un pied de ta main, et une corde de soie noire, fine comme un lacet, se tend entre le ciel et le toit. L'homme la secoue deux fois, pour dire qu'elle tient, et se rencogne dans sa cheminée.",
        "Sans-Bruit avait dit : *s'il faut qu'une corde pende quelque part, vous sifflez.* Tu n'as même pas eu à siffler le premier.",
      ],
      choices: [{ back: "A5m_hourd" }] },

    A5m_corde_essai: { act: "V", title: "Un nœud sur une solive", place: "horloge_close", ambiance: "plaine",
      text: [
        "Sous le hourd, il y a quarante toises de pierre lisse, puis le toit de plomb du corps de garde, puis le rempart. Quelqu'un doit monter par là cette nuit, dans le noir, avec la ville dessous.",
        "Il faut une solive saine, dans une charpente que les pigeons mangent depuis cent ans. Il faut un nœud qui ne glisse pas sur du bois gras de fiente. Il faut enfin que la corde descende du bon côté, celui du nord, où le rempart cache le grimpeur à la cour.",
      ],
      choices: [
        { label: "Choisir la solive, faire le nœud, et jeter",
          test: { dom: "nature", diff: 10, label: "Amarrer pour un autre", help: [{ if: { voie: "coureur" }, v: 15 }, { if: { item: "corde" }, v: 10 }, { if: { item: "corde_soie" }, v: 10 }, { if: { voie: "bretteur" }, v: 5 }] },
          win: { fx: { flag: "monde:a5:voie", ep: ["perso", 1200] }, to: "A5m_corde_ok" }, lose: { to: "A5m_corde_ko" } },
      ] },

    A5m_corde_ok: { act: "V", title: "Du bon côté", place: "horloge_close", ambiance: "plaine",
      text: [
        "La troisième solive sonne plein sous le manche de ton couteau. Tu y fais deux tours morts et deux demi-clefs, tu mouilles le nœud, tu pèses dessus de tout ton poids ; puis tu laisses filer.",
        "La corde descend le long de la pierre, du côté du nord, sans un bruit. Elle s'arrête à six pieds au-dessus du toit de plomb : on y arrive en levant les bras. De la cour, on ne voit rien. Il faudrait être pigeon.",
        "Tu la remontes de trois brasses et tu la loves sur le garde-fou, pour que le jour ne la montre pas. Ce soir, à dix heures, il suffira de la lâcher.",
      ],
      choices: [{ back: "A5m_hourd" }] },

    A5m_corde_ko: { act: "V", title: "Du bois de pigeon", place: "horloge_close", ambiance: "plaine",
      text: [
        "La solive que tu choisis a la figure d'une poutre et le cœur d'une éponge. Elle tient ton nœud, elle tient ton poids ; à la seconde secousse, elle rend un bruit de biscuit, et un pan de garde-fou part avec elle dans le vide.",
        "Cela tombe longtemps. Cela se brise sur le toit de plomb du corps de garde avec un fracas de vaisselle.",
        "Tu te plaques contre la pierre. En bas, une porte s'ouvre, une voix jure, une autre répond que ce sont les pigeons, que cette saleté de hourd s'en va par morceaux depuis le siège et qu'on finira par le prendre sur la tête. La porte se referme.",
        "Il n'y a plus, de ce côté, une seule pièce de bois à qui confier quelqu'un. Qui viendra des toits cette nuit devra trouver un autre chemin.",
      ],
      choices: [{ back: "A5m_hourd" }] },

    A5m_cadran: { act: "V", title: "Les gonds", place: "horloge_close", ambiance: "plaine",
      fx: { clue: "j5_cadran" },
      text: [
        "Maître Crochemore sort par la lucarne à quatre pattes, en tenant son chapeau. Il a le vertige. Il le nie.",
        "Tu lui montres la fente, les gonds. Il les regarde d'en dessous, la tête renversée, en clignant dans le vent ; et tu vois son visage faire ce qu'il a fait à Brandelis, devant le ventre ouvert d'un Veneur de bronze.",
        "« C'est une porte, dit-il. Le cadran est une porte. À deux battants. » Il rit, d'un petit rire sans joie. « On me l'a fait dessiner à douze ans, ce cadran, pour mon examen d'entrée aux Heures. *Pourquoi le cadran de l'Horloge-Close est-il sans aiguilles ?* Il fallait répondre : parce que le Juge est hors du temps. J'ai eu la meilleure note. »",
        "Il suit du doigt, en l'air, le trajet d'une tringle qu'il devine.",
        "« Il est sans aiguilles parce qu'on n'en met pas à une porte. Quand les trois clefs tournent, là-dedans, le grand soufflet se bande, la voix sort ; et il faut bien qu'elle sorte par quelque part, pour qu'une ville l'entende. Ces deux battants s'ouvrent. Vers le dehors. Derrière, il doit y avoir un pavillon de bronze, comme à une trompe, grand comme une chambre. » Il baisse la tête. « Personne n'a vu ce cadran ouvert, parce que cela se passe à minuit, tous les sept ans, et que toute la ville a les yeux fermés : on vous apprend à les fermer, pour entendre le Bronze. C'est dans le catéchisme. Mon bisaïeul avait pensé à tout. »",
        "Il regarde la place, en bas, où l'on dresse des tréteaux.",
        "« Si quelqu'un se tenait debout là-dedans, cette nuit, les battants ouverts, avec une lumière… » Il n'achève pas. Il rentre à quatre pattes, en tenant son chapeau.",
      ],
      choices: [{ back: "A5m_hourd" }] },

    // ───────────────────────────── The antechamber ─────────────────────────────
    A5m_antichambre: { act: "V", title: "La porte aux trois serrures", place: "horloge_close", ambiance: "chateau", hub: true, backName: "l'antichambre",
      text: [
        { first: true, text: "Trois marches, une voûte basse. L'antichambre est telle que la main qui l'a vue en septembre l'a décrite : une cellule de pierre, longue de quatre pas, un banc scellé pour trois personnes, et la porte." },
        { first: true, text: "Elle prend tout le fond. Elle est en cœur de chêne, noire d'âge, ferrée de bandes larges comme la main, dont les clous à facettes multiplient ta lumière. Au milieu, l'une au-dessus de l'autre, les trois serrures : le bloc d'acier à l'entrée en marteau, l'argent noirci à l'entrée en larme, la hure dorée à l'entrée en trèfle." },
        { first: true, text: "On a apporté pour ce soir un pupitre de fer, à pied torse, que l'on a posé face à la porte. C'est de là qu'on lit les Sept Causes au Bronze, à voix haute, avant de tourner. Il y a déjà dessus un signet de soie rouge." },
        { first: true, text: "Dans la trousse, contre ta hanche, trois chiffons pèsent ce que pèsent six semaines. Tu n'as que le bras à tendre." },
        { again: true, text: "L'antichambre, son banc, son pupitre de fer. La porte, ses trois serrures : le marteau, la larme, le trèfle." },
      ],
      choices: [
        { label: "Prendre la clef de Fer dans la trousse, pour voir seulement si elle entre", to: "A5m_essai", once: true },
        { label: "Huiler les trois serrures, goutte à goutte", fx: { flag: "monde:a5:huile", ep: ["perso", 600] }, to: "A5m_huile", once: true },
        { label: "Coller l'oreille au chêne", to: "A5m_ecoute", once: true },
        { label: "Redescendre les trois marches", back: "A5m_palier" },
      ] },

    A5m_essai: { act: "V", title: "Ensemble, ou rien", place: "horloge_close", ambiance: "chateau",
      text: [
        "Tu défais le premier chiffon. La clef de Fer est froide, grise, sans un ornement, avec son panneton taillé en marteau. Elle a passé la coulée d'une cloche pour venir jusqu'ici.",
        "Maître Crochemore te prend le poignet. Il a la main sèche et très forte, pour un homme de son âge.",
        "« Elle entrera. Je l'ai mesurée dix fois. Et si tu la tournes seule, sais-tu ce qu'il arrive ? Moi non plus. Mon bisaïeul a fait trois serrures qui se haïssent et qui tiennent la même porte : ce n'est pas pour qu'on les essaie l'une après l'autre comme des souliers. Il y a là-dedans une tringle commune. Je parierais ma dernière montre qu'une clef tournée sans les deux autres bloque tout, pour un jour, pour sept ans, je ne sais. »",
        "Il te lâche.",
        "« Remets-la dans son chiffon. Ce soir, vous serez trois, vous aurez la même seconde à vos trois montres, et vous tournerez sur mon compte. Jusque-là, cette porte est la chose la plus fragile de la cité. Ne la regarde même pas trop fort. »",
      ],
      choices: [{ back: "A5m_antichambre" }] },

    A5m_huile: { act: "V", title: "Trois gouttes", place: "horloge_close", ambiance: "chateau",
      text: [
        "Tu as pris la burette moyenne dans le coin du Remonteur. C'est de l'huile de pied de bœuf, claire comme de l'eau, qu'il filtrait lui-même.",
        "Une serrure qui n'a pas tourné depuis sept ans a la voix d'une porte de grange. Celles-ci en auraient trois. Tu poses le bec de la burette au bord de chaque entrée, le marteau, la larme, le trèfle, et tu laisses tomber : une goutte, attendre qu'elle soit bue, une autre.",
        "Elles boivent longtemps. On entend, dans l'épaisseur du chêne, de petits bruits de gorge.",
        "Ce soir, quand les trois clefs tourneront, la porte s'ouvrira comme s'ouvre une main. Le vieux Balancier aurait trouvé cela bien fait. Il n'a jamais eu le droit de les graisser, celles-là : il graissait ce qu'on lui montrait.",
      ],
      choices: [{ back: "A5m_antichambre" }] },

    A5m_ecoute: { act: "V", title: "L'oreille au chêne", place: "horloge_close", ambiance: "chateau",
      text: [
        "Le bois est froid, et il sent le fer. Tu y poses la joue, et tu fermes les yeux.",
        "D'abord, il n'y a que la Tour : le soupir du balancier, qui monte par la pierre, et le vent sur le hourd. Puis l'oreille descend sous ces bruits-là, comme l'œil se fait au noir.",
        "Quelqu'un marche. Trois pas, un arrêt, trois pas. C'est un espace très petit, que l'on arpente par habitude, sans y penser, pour se dégourdir. Le pas est léger et traîne un peu du pied gauche.",
        "Puis une chaise que l'on tire. Un bruit de papier. Et une voix, qui lit, à mi-voix, pour elle-même, de ce ton des gens qui se relisent : « *…attendu que les jetons de l'Économat, n'ayant cours qu'au comptoir de celui qui les frappe, ne sont pas une monnaie mais une chaîne…* » Un temps. « Non. *Une laisse.* » Un grattement. « *…mais une laisse ; par ces motifs…* »",
        "Tu t'écartes du bois. Tu as l'impression d'avoir regardé par une serrure quelqu'un qui s'habille.",
      ],
      fx: { ep: ["perso", 600] },
      choices: [{ back: "A5m_antichambre" }] },

    // ───────────────────────────── Two o'clock: the Syndic comes to see his machine ─────────────────────────────
    A5m_visite: { act: "V", title: "Derrière le troisième tambour", place: "horloge_close", ambiance: "souterrain",
      fx: { until: 14, meet: "quincarnon" },
      text: [
        "Vous êtes redescendus à la salle des Poids, et Maître Crochemore fait semblant de régler une chaîne, quand la casaque rousse saute sur ses pieds. Il a entendu avant vous. Dans la vis, cela monte : un pas lourd, qui se repose toutes les dix marches ; un pas léger, qui attend ; et un troisième, menu, compté, comme un froissement de papier.",
        "L'horloger te pousse derrière le troisième tambour. Il y a là, entre le chêne et le mur, la place d'une personne et de la poussière de cent ans. Lui reste dehors, en robe, la tête haute : il a un article pour cela.",
        "Maître Polycarpe Quincarnon entre le premier. Il est violet. Il s'arrête sur le seuil, une main sur le cœur, l'autre sur le chambranle, et il souffle pendant une bonne minute en regardant la salle, tambour par tambour, de l'œil d'un homme qui fait un inventaire.",
        "Derrière lui, Maître Hyacinthe Belorgey, pâle, blond, habillé en prince par un autre. Et le petit Liard, ses manchettes de lustrine, un portefeuille sous le bras.",
        "« Maître Crochemore ! » Le Syndic a retrouvé du souffle et de la cordialité. « On me dit que vous avez fait un beau tapage à ma porte. *Marchand de ferraille !* J'en ai ri. Je croyais que vous boudiez. »",
        "« Je boudais. Je donne l'heure. Article onze. »",
        "« Donnez, donnez. Chacun son privilège. » Il s'essuie le front. « Vous aurez vu mon petit meuble. Qu'en dit un homme de l'art ? »",
        "« Que les lames sont de bon acier. »",
        "« N'est-ce pas ? » Il ne l'écoute déjà plus. Il va au meuble. Le petit Soufflot s'est mis au garde-à-vous, sa burette à la main.",
      ],
      choices: [{ label: "Ne plus respirer", to: "A5m_visite2", big: true }] },

    A5m_visite2: { act: "V", title: "Une dépense", place: "horloge_close", ambiance: "souterrain",
      fx: { flag: "monde:a5:syndic_entendu", clue: "s5_douze", ep: ["perso", 1500] },
      text: [
        "Par la fente entre le tambour et le mur, tu vois un velours prune, une chaîne d'or, et une main grasse qui caresse le chêne ciré.",
        "« Douze cents lignes. Liard, combien par ligne ? »",
        "« Trois écus onze sous, monsieur le Syndic, pose et accord compris. »",
        "« C'est donné. Sept ans de gouvernement à trois écus la ligne, et les sept suivants pour rien, et ainsi de suite jusqu'à la fin du monde. Il n'y a pas dans toute la vallée un outil qui s'amortisse comme celui-ci. » Il se tourne vers son gendre. « Regardez, Hyacinthe. Votre nom est à la quarante et unième. Passez le doigt. »",
        "Le jeune homme ne passe pas le doigt. Il regarde le cylindre comme on regarde un lit que d'autres vous ont fait.",
        "« Et la troisième Cause ? demande-t-il. On m'a dit qu'elle était restée en blanc. »",
        "« Elle ne l'est plus. Je l'ai fait planter mardi. *Les jetons de l'Économat sont une monnaie loyale, et qui les refuse est rebelle.* Dépens aux demandeurs. Ils sont venus à trente, à pied, pour entendre cela ; ils l'entendront par la bouche du Bronze. Ce sera pédagogique. »",
        "Il y a un silence. Le balancier soupire.",
        "« Monsieur, dit Hyacinthe Belorgey, de sa voix polie qui s'excuse, si le Bronze, cette nuit, disait autre chose ? »",
        "« Il dira ce qui est planté. C'est l'avantage d'un cylindre sur un homme, mon gendre : il ne réfléchit pas entre deux lignes. »",
        "« Céleste m'a dit un jour… » Il s'arrête. Il reprend. « On raconte qu'il y a dans cette Tour une recluse. Qu'on lui monte un panier. »",
        "« Il y a une dépense. » Le Syndic a répondu sans se retourner, en refermant une porte du meuble. « Trois mille écus par Septaine, portés aux comptes de la ville sous le nom d'*huile du Juge.* Je les ai trouvés en épluchant les livres, la première année. J'ai demandé ce que c'était. On m'a mis dans le secret, comme on vous y met ce soir. Eh bien, Hyacinthe, vous apprendrez ceci, qui est tout le gouvernement : quand une machine marche seule, on supprime l'huile. Je supprime une dépense. Il n'y a là-dedans ni cruauté ni rien : c'est une ligne que je raie. »",
        "Maître Liard a ouvert son portefeuille. Tu entends sa plume, qui raie.",
      ],
      choices: [{ label: "Écouter encore", to: "A5m_visite3", big: true }] },

    A5m_visite3: { act: "V", title: "Ce qu'il a dans sa poche", place: "horloge_close", ambiance: "souterrain",
      text: [
        "« Reste la porte, dit le Syndic. Montrez-moi l'échelle. Je ne monte pas : j'ai assez monté. »",
        { if: PRISE_FER, text: "Il tire de son gousset quelque chose de gris, de court, qu'il fait sauter dans sa main. « On m'a pris la mienne à Ferrières, vous le savez. On ne prend pas sa clef à un Syndic du Fer : nous gardons les gabarits de toutes celles qui sortent de nos forges depuis deux cents ans, dans une armoire dont j'ai le mot. J'ai fait refaire la mienne en onze jours. Elle est meilleure que l'ancienne. »", else: "Il porte la main à son cou, où pend sous le velours quelque chose de court et de gris. « La mienne n'a pas quitté ma chemise. Je dors dessus. Je me baigne avec. Il y a des gens qui se sont donné beaucoup de mal dans ma fonderie, le jour de la coulée, et qui en sont repartis les mains vides : je le sais, puisque je l'ai là. »" },
        { if: PRISE_FER, text: "Derrière ton tambour, tu comptes. Il y a donc ce soir, dans Aiguemorne, deux clefs de Fer : celle qui dort dans un chiffon, contre ta hanche, et celle qui saute dans cette main grasse." },
        { if: { all: [{ has: "monde:cendre:sait" }, { has: "monde:sang:sait" }] }, text: "« Mes deux collègues n'ont pas cette ressource. L'orfèvre de la larme est mort sous le grand-père de Monseigneur, et le coffretier du trèfle n'a jamais existé que dans un inventaire. Ils ont donc dans leur poche, ce soir, de la quincaillerie de théâtre, et ils monteront ces cent quatre-vingts marches en le sachant. Cela me les rend très doux. »" },
        { if: { all: [{ has: "monde:cendre:sait" }, { not: "monde:sang:sait" }] }, text: "« Monseigneur n'a pas cette ressource. Il a dans sa poche, ce soir, de la quincaillerie de théâtre, et il le sait. Quant au Connétable, il porte toujours son ruban ; je me demande depuis Brandelis ce qu'il y a au bout. Lui ne se le demande pas, c'est sa force. »" },
        { if: { all: [{ not: "monde:cendre:sait" }, { has: "monde:sang:sait" }] }, text: "« Le Connétable n'a pas cette ressource. Il a dans sa poche, ce soir, de la quincaillerie de théâtre, ou rien du tout, et il le sait. Quant à Monseigneur, il a rapporté sa clef d'Ossevaux dans un reliquaire, et il la regarde avec une tendresse qui m'inquiète : je ne suis pas sûr qu'elle la lui rende. »" },
        { if: { all: [{ not: "monde:cendre:sait" }, { not: "monde:sang:sait" }] }, text: "« Mes deux collègues ont les leurs, à ce qu'ils disent. Ils en ont l'air très sûrs. J'ai remarqué que les gens ne sont jamais si sûrs d'une chose que lorsqu'ils ne l'ont pas regardée de près depuis longtemps. »" },
        "Il rit, de ce rire cordial qui additionne.",
        "« De toute façon, Hyacinthe, retenez la manœuvre. Il y a dans cette ville trois vauriens qui ont couru le pays six semaines pour ces clefs. Ils ne l'ont pas fait pour les revendre : on ne revend pas cela. Ils viendront à la porte. Cette nuit. Eh bien, qu'ils viennent ! Nous montons aux trois quarts, avec douze de mes casaques derrière nous, dans la vis, la hallebarde basse. Ce que nous trouverons devant le chêne, nous le prendrons, avec ce qu'il aura dans les mains. J'aurai mes trois clefs sur le palier, sans avoir eu la peine de les chercher. C'est ce que j'appelle faire travailler les autres. »",
        "« Et s'ils sont déjà dedans ? »",
        "« Dedans, mon gendre, on ne ressort que par où l'on est entré. »",
        { if: { has: "monde:hyacinthe:refus" }, text: "Hyacinthe Belorgey ne répond rien. Par ta fente, tu vois sa main droite, qui est entrée dans la poche de son habit et qui y tient quelque chose, un papier plié, bord à bord." },
        "Ils redescendent. Le pas lourd, le pas léger, le froissement de papier. Le Syndic s'arrête sur la première marche pour dire, par-dessus son épaule, d'une voix d'hôte : « Et donnez bien l'heure, maître Crochemore ! Que tout soit à la minute. J'ai horreur d'attendre mon propre avènement. »",
        "Quand le bruit s'est éteint, l'horloger vient te tirer de derrière ton tambour. Il est blanc jusqu'aux favoris.",
        "« Douze, dit-il. Dans la vis. » Il regarde la trappe, au plafond, et l'échelle de meunier qui y mène. « Il y a une chose que ce marchand ignore, parce qu'il n'est pas monté : c'est que cette échelle n'est pas scellée. »",
      ],
      choices: [{ label: "L'après-midi", to: "A5m_apres_b", big: true }] },

    A5m_apres_b: { act: "V", title: "L'après-midi", place: "horloge_close",
      branch: [{ if: PRISE_FER, fx: { flag: "monde:a5:fer_double" }, to: "A5m_apres" }, { to: "A5m_apres" }] },

    // ───────────────────────────── The afternoon ─────────────────────────────
    A5m_apres: { act: "V", title: "Ce qu'il reste du jour", place: "horloge_close", ambiance: "souterrain", hub: true, backName: "la salle des Poids",
      fx: { until: 16 },
      text: [
        { first: true, text: "À trois heures, le petit Soufflot ôte son tablier vert. Il a une invitation : M. le Syndic régale ses gens à l'auberge de l'Enclume, en Ville-Haute, pour qu'ils voient passer la procession de la fenêtre. La casaque rousse descend avec lui, et l'on entend leurs deux voix décroître dans la vis, l'une qui explique des picots, l'autre qui parle de soupe." },
        { first: true, text: "Vous êtes seuls dans la Tour, l'horloger et toi, avec le balancier, un vieux soldat à l'étage, et quelqu'un au-dessus. Il reste six heures de jour et de soir. Maître Crochemore a rouvert sa trousse sur le tabouret du mort." },
        { again: true, text: "La salle des Poids, vide. Le meuble de chêne neuf, ses portes ouvertes. La cage aux roues. L'échelle de meunier." },
      ],
      choices: [
        { label: "Ouvrir le meuble du Syndic, et lire le cylindre avec les doigts", to: "A5m_cyl", hide: { any: [{ seen: "A5m_cyl_cran" }, { seen: "A5m_cyl_goupille" }, { seen: "A5m_cyl_laisse" }, { seen: "A5m_cyl_ko" }] } },
        { label: "Entrer dans la cage aux roues : une cloche, cela se retarde", to: "A5m_quart", hide: { any: [{ seen: "A5m_quart_ok" }, { seen: "A5m_quart_ko" }] } },
        { label: "Voir de près cette échelle qui n'est pas scellée", fx: { flag: "monde:a5:trappe", ep: ["perso", 600] }, to: "A5m_trappe", once: true },
        { label: "Laisser venir le soir", to: "A5m_soir", big: true },
      ] },

    A5m_cyl: { act: "V", title: "Douze cents lignes", place: "horloge_close", ambiance: "souterrain",
      text: [
        "Le cylindre tourne à la main, sur ses deux paliers, avec une douceur d'horlogerie. Tu fermes les yeux et tu y poses les doigts, comme les aveugles lisent, comme tu l'avais fait en septembre sans comprendre.",
        "Maître Crochemore lit par-dessus ton épaule, à la loupe, en épelant. Les picots sont rangés par syllabes ; une lame par son ; vingt-quatre sons, et le Bronze n'en a jamais eu davantage.",
        "« *Moi… Juge… de bronze… je nomme… pour gouverner… cette cité…* » Il tourne. « *…Hy-a-cin-the… Be-lor-gey… et après lui… qui… il… dé-si-gne-ra.* » Il tourne encore. « Les Sept Causes. La première, aux Maîtres du Fer. La deuxième, aux Maîtres du Fer. La troisième, vous l'avez entendue. » Il arrive au bout. « Et la dernière ligne. *Ceci… est… ma… Sen-ten-ce… per-pé-tu-el-le… Qu'on… ne… m'in-ter-ro-ge… plus.* »",
        "Il se redresse.",
        "« C'est bien fait, dit-il avec une haine d'artisan. C'est proprement planté, c'est d'aplomb, il n'y a pas un picot plus haut que l'autre. Ce Soufflot est un imbécile et un maître. Ce meuble parlera dans mille ans comme ce soir, pourvu qu'on lui donne du vent. »",
        "Il te montre deux choses.",
        "« Le cylindre est calé sur son axe par une vis de pression. Qu'on le fasse glisser d'un cran, d'un seul, vers la gauche : chaque picot tombera sur la lame voisine. Il dira toutes ses douze cents lignes, bien en mesure, et pas une syllabe n'aura de sens. Du bronze qui parle en langues. »",
        "« Ou bien ceci. » Il touche la tirette, sa boule d'ivoire. « Elle commande la soupape par une goupille, grosse comme une allumette. Qu'on ôte la goupille : la tirette viendra dans la main de ce pauvre homme, et la soupape restera où elle est. Le vent ira au Bronze, comme toujours. Le meuble sera muet, et personne ne saura pourquoi avant d'avoir démonté. »",
        "Il ôte ses bésicles.",
        "« Ou bien l'on n'y touche pas. Je te le dis parce que je ne sais pas ce que vous voterez là-haut, vous trois ; et qu'il y a peut-être, parmi ce que vous déciderez, une chose pour laquelle il faudrait que ce meuble marche. Je n'ai pas à en connaître. C'est toi qui portes la trousse. »",
      ],
      choices: [
        { label: "Desserrer la vis, et faire glisser le cylindre d'un cran",
          test: { dom: "savoir", diff: 5, label: "Décaler douze cents lignes d'une lame", help: [{ if: { voie: "crocheteur" }, v: 10 }, { if: { voie: "alchimiste" }, v: 10 }, { if: { has: "monde:a5:cylindre_su" }, v: 10 }] },
          win: { fx: { set: { "monde:a5:cylindre": "fausse" }, ep: ["perso", 1500] }, to: "A5m_cyl_cran" }, lose: { to: "A5m_cyl_ko" } },
        { label: "Ôter la goupille de la tirette",
          test: { dom: "discretion", diff: 5, label: "Ôter une allumette de laiton sans rien marquer", help: [{ if: { voie: "crocheteur" }, v: 15 }, { if: { item: "rossignols" }, v: 5 }, { if: { has: "monde:a5:cylindre_su" }, v: 10 }] },
          win: { fx: { set: { "monde:a5:cylindre": "sourd" }, ep: ["perso", 1500] }, to: "A5m_cyl_goupille" }, lose: { to: "A5m_cyl_ko" } },
        { label: "Refermer les portes du meuble, et le laisser comme il est", to: "A5m_cyl_laisse" },
      ] },

    A5m_cyl_cran: { act: "V", title: "Un cran à gauche", place: "horloge_close", ambiance: "souterrain",
      text: [
        "La vis de pression est sous une rosace de laiton. Elle cède d'un quart de tour. Tu prends le cylindre à deux mains, par les flasques, et tu pousses : il glisse sur son axe, de l'épaisseur d'une lame, et s'arrête contre une butée que le facteur avait prévue pour le réglage.",
        "Tu resserres. Tu remets la rosace.",
        "Maître Crochemore veut entendre. Il presse le soufflet du pied, tout doucement, et donne un huitième de tour. Les lames rendent quatre sons, à mi-voix, dans la salle.",
        "C'est la voix du Bronze, à s'y méprendre : ce timbre de cloche fêlée que toute la ville porte dans l'oreille depuis l'enfance. Mais ce qu'elle dit n'est d'aucune langue. « *Nou… jizh… ed… pranz…* »",
        "L'horloger lâche le soufflet. Il a pâli.",
        "« Seigneur, dit-il. On dirait qu'il est devenu fou. » Il referme les portes du meuble, à deux mains. « S'il parle ainsi cette nuit, devant trente mille personnes, elles ne penseront pas que la machine du Syndic est déréglée. Elles penseront que le Juge a perdu l'esprit. Je ne sais pas ce qu'une ville fait d'un juge fou. Je crois que personne ne le sait. »",
      ],
      choices: [{ back: "A5m_apres" }] },

    A5m_cyl_goupille: { act: "V", title: "Une allumette de laiton", place: "horloge_close", ambiance: "souterrain",
      text: [
        "La goupille est au fond du meuble, derrière le soufflet, là où la tringle de la tirette rejoint le bras de la soupape. Il faut y aller du bout des doigts, à l'aveugle, le bras passé jusqu'à l'épaule entre des lames d'acier qui coupent.",
        "Tu la sens. Elle est fendue, rabattue des deux côtés. Tu redresses les deux brins avec l'ongle, tu tires : elle vient. Tu remets la tringle en place, bien dans son œil, pour qu'elle ait l'air de tenir.",
        "Elle ne tient plus à rien. Tu essaies la tirette, d'un doigt : elle coulisse, douce, obéissante, et au fond du meuble la soupape ne remue pas.",
        "Tu glisses la goupille dans ta poche. Elle n'est pas plus longue qu'une allumette. Sept ans de gouvernement, et les sept suivants, et ainsi de suite jusqu'à la fin du monde, tenaient à ce brin de laiton, que le petit Soufflot avait fendu lui-même, avec amour.",
        "« Il tirera, dit Maître Crochemore. Il aura sa boule d'ivoire dans la main. Il croira avoir fait son office. Et là-haut, le vent ira où il est toujours allé. » Il referme le meuble. « C'est la plus petite pièce que j'aie vu ôter de ma vie pour le plus grand effet. Je la ferai monter en épingle. »",
      ],
      choices: [{ back: "A5m_apres" }] },

    A5m_cyl_ko: { act: "V", title: "Un picot dans le doigt", place: "horloge_close", ambiance: "souterrain",
      fx: { pv: -2 },
      text: [
        "Ce meuble a été fait par un homme soigneux pour n'être ouvert que par lui. Tout y est juste, serré, sans jeu. Tu forces un peu ; quelque chose résiste ; tu forces davantage, et ta main dérape sur douze cents pointes de bronze.",
        "Tu la retires en sang. Sur le cylindre, à la hauteur de la sixième Cause, il y a trois picots couchés, bien visibles, comme des épis après la grêle.",
        "Maître Crochemore se précipite. Il les redresse à la pince, un par un, en retenant son souffle ; il essuie ; il recule pour juger. « Cela ne se voit plus. Cela s'entendra peut-être : une syllabe de travers, dans une Cause dont personne ne se soucie. » Il referme les portes. « N'y touchons plus. Nous lui avons fait une égratignure et il nous en a rendu une : nous sommes quittes, lui et nous. Il parlera ce soir comme il a été planté. »",
      ],
      choices: [{ back: "A5m_apres" }] },

    A5m_cyl_laisse: { act: "V", title: "Les portes refermées", place: "horloge_close", ambiance: "souterrain",
      text: [
        "Tu refermes les deux portes de chêne ciré. Elles ont un petit loquet de laiton, qui claque.",
        "Le meuble est là, dans son angle, intact, avec ses douze cents lignes, son nom à la quarante et unième, et sa dernière phrase. Il attend minuit moins cinq et une main sur une boule d'ivoire.",
        "Maître Crochemore te regarde seulement, par-dessus ses verres, un peu plus longtemps qu'il ne faut ; puis il retourne à sa trousse.",
      ],
      choices: [{ back: "A5m_apres" }] },

    A5m_quart: { act: "V", title: "Le train qui sonne", place: "horloge_close", ambiance: "souterrain",
      text: [
        "La cage aux roues a deux trains. À droite, celui qui marche, avec le balancier. À gauche, immobile, bandé comme un piège, celui qui sonne ; et entre les deux une roue à encoches, large comme un plat, où un doigt d'acier attend de tomber.",
        "Toute la citadelle vit sur la cloche de la Tour : les relèves, les portes, les offices. Ce soir, la Veille des Clavaires finit *aux trois quarts*. Aucun des trois n'aura sa montre : on n'en porte pas devant le Bronze, c'est dans le rituel. Ils se lèveront quand la cloche leur dira de se lever.",
        "« Je ne peux pas l'arrêter, dit Maître Crochemore. Une cloche qui se tait, cela s'entend. Mais je peux lui faire sauter une encoche. Elle sonnera dix heures à dix heures, la demie à la demie ; et entre la demie et les trois quarts, elle prendra un quart d'heure de réflexion que personne ne lui a demandé. Ils se lèveront à onze heures, en croyant qu'il est moins le quart. Minuit sonnera à minuit et quart. Toute la ville aura un quart d'heure de retard sur le ciel, et il n'y aura que trois montres pour le savoir. »",
        "Il te tend une lime douce et un coin de bois.",
        "« Il faut tenir le doigt levé pendant que je reprends l'encoche. Il pèse trente livres, il est huilé, et s'il retombe pendant que j'ai la main dessous, je finis ma carrière avec neuf doigts. Ne tremble pas. »",
        { if: { has: "monde:a1:horloge_connue" }, text: "Quelqu'un de la maison a suivi de l'œil, en septembre, le chemin d'un coup de cloche dans cette cage, et vous l'a dessiné sur une table. Tu sais où est le cran, et de quel côté il lâche." },
      ],
      choices: [
        { label: "Caler le doigt d'acier, et le tenir",
          test: { dom: "savoir", diff: 10, label: "Tenir trente livres d'acier au-dessus d'une main", help: [{ if: { has: "monde:a1:horloge_connue" }, v: 15 }, { if: { voie: "crocheteur" }, v: 10 }, { if: { voie: "bretteur" }, v: 5 }, { if: { voie: "alchimiste" }, v: 5 }] },
          win: { fx: { flag: "monde:a5:quart", ep: ["perso", 1500] }, to: "A5m_quart_ok" }, lose: { to: "A5m_quart_ko" } },
      ] },

    A5m_quart_ok: { act: "V", title: "Un quart d'heure volé", place: "horloge_close", ambiance: "souterrain",
      text: [
        "Tu cales. Tu tiens. Le doigt d'acier pèse sur ton coin de bois comme une main sur une épaule, et tu sens dans tes deux bras le poids de la sonnerie tout entière, bandée derrière, qui voudrait partir.",
        "Maître Crochemore travaille dessous, à plat ventre, la joue contre le laiton. Sa lime va et vient, quatre coups, un arrêt, il mesure au pied à coulisse, quatre coups. Il chantonne. Tu ne l'avais jamais entendu chantonner.",
        "« Lâche. Doucement. »",
        "Tu lâches. Le doigt redescend, cherche son encoche, trouve à la place une rampe polie, glisse dessus et s'arrête un cran plus loin, avec un petit claquement satisfait.",
        "L'horloger se relève, se frotte les genoux. Il tire ses trois montres, les consulte, les rentre.",
        "« Voilà. La maison Berlue a volé des bourses, des tableaux, une Serrure-Reine et trois clefs. Je crois pouvoir dire qu'elle n'avait jamais volé du temps. Quinze minutes, prises à trois Clavaires et à trente mille bourgeois, sans effraction. » Il se rengorge. « Vous lui direz que c'est de moi. »",
      ],
      choices: [{ back: "A5m_apres" }] },

    A5m_quart_ko: { act: "V", title: "Cinq minutes", place: "horloge_close", ambiance: "souterrain",
      fx: { pv: -2 },
      text: [
        "Tu cales. Tu tiens. Tu tiens presque jusqu'au bout.",
        "Le coin de bois chasse. Le doigt d'acier retombe de trois pouces, et tu le rattrapes à pleines mains, de travers, au prix de toute la peau d'une paume. Sous la roue, Maître Crochemore a retiré la sienne avec un cri de souris.",
        "Il se relève, compte ses doigts, deux fois.",
        "« Dix. Je les ai tous. » Il regarde l'encoche, qu'il n'a reprise qu'à moitié. « Elle sautera mal. Elle ne prendra pas son quart d'heure : elle hésitera, tout au plus. Cinq minutes. Peut-être six. » Il bande ta main avec son mouchoir à carreaux, sans douceur, en homme qui a eu peur. « Cinq minutes, c'est le temps de dire une phrase. Vous tâcherez qu'elle soit bonne. »",
      ],
      choices: [{ back: "A5m_apres" }] },

    A5m_trappe: { act: "V", title: "L'échelle de meunier", place: "horloge_close", ambiance: "souterrain",
      text: [
        "Elle a vingt échelons de frêne, deux crochets de fer en haut, et rien en bas : elle pose sur le plancher par son seul poids. On la retire de la trappe comme on retire une échelle de grenier.",
        "La trappe elle-même est un panneau de chêne de trois pouces, à charnières, qui se rabat sur son cadre. Du côté du palier, il y a deux gâches. Il ne manque que la barre.",
        "Tu la trouves dans le coin du Remonteur : un levier de fer, long de quatre pieds, qui lui servait à décoller les chaînes. Tu le montes au palier et tu le couches le long du cadre, sous la table du vieux soldat, où personne n'ira le chercher.",
        "Ce soir, le dernier de vous qui passera cette trappe tirera l'échelle derrière lui, rabattra le chêne, et glissera la barre. Douze casaques rousses arriveront au bout de cent quatre-vingts marches, hallebarde basse, dans une salle où il y a trois tambours, un balancier, et un trou carré dans le plafond, à douze pieds, sans rien pour y monter.",
        "« Ils feront la courte échelle, dit Maître Crochemore. Ils casseront le panneau à coups de hampe. Cela leur prendra dix minutes. » Il sourit dans ses favoris. « Avec des hallebardes, sous un balancier de deux cents livres qui passe à hauteur de tête toutes les deux secondes. Mettons douze. »",
      ],
      choices: [{ back: "A5m_apres" }] },

    // ───────────────────────────── The evening ─────────────────────────────
    A5m_soir: { act: "V", title: "Trente mille lanternes, d'en haut", place: "horloge_close", ambiance: "nuit",
      fx: { until: 22 },
      text: [
        "La nuit vient à cinq heures. Vous n'allumez rien. Par la meurtrière de la salle des Poids, on voit la cour se remplir de torches, l'estrade aux trois dais s'éclairer, et puis, dessous, la ville, qui s'allume pour la seconde fois.",
        "À neuf heures, le bruit monte. Ce sont d'abord des cloches, paroisse après paroisse, qui se répondent mal. Puis un roulement sourd, continu, que l'on prend pour le vent et qui est trente mille personnes en marche. La procession des Clefs a quitté la place aux Heures. Elle met une heure et demie à gravir le piton ; tu en suis la tête par les torches, un serpent de feu qui tourne à chaque lacet, avec trois taches au milieu, une bleue, une violette, une rouge.",
        "Maître Crochemore est assis sur le tabouret du mort, les mains sur les genoux. Il a remis sa robe. Il écoute le balancier.",
        "À dix heures, la cloche sonne, juste au-dessus de vos têtes, dix coups qui vous entrent dans les dents.",
        { if: { has: "monde:a5:voie" }, text: "Tu montes au hourd. Le vent est tombé ; il gèle. Tu lâches la corde, qui descend sans bruit du côté du nord, vers le toit de plomb." },
        "Et dans la vis, à dix heures un quart, un pas remonte : menu, pressé, tout seul. Le petit Soufflot revient prendre son poste, avec une lanterne et un reste de chanson. Il a très bien dîné.",
      ],
      choices: [{ label: "L'attendre en haut des marches", to: "A5m_soufflot_soir", big: true }] },

    A5m_soufflot_soir: { act: "V", title: "La boule d'ivoire", place: "horloge_close", ambiance: "nuit",
      text: [
        "Il entre, il pose sa lanterne, il remet son tablier vert, il crache dans ses mains. La casaque rousse est restée en bas : toute la compagnie fait la haie sur la rampe, ce soir, jusqu'aux trois quarts.",
        "« Encore là, maîtres ? Vous aurez vu passer la fête par un trou. Moi, j'étais à une fenêtre, au premier, avec du boudin. » Il va à son meuble, l'ouvre, y jette un coup d'œil de mère. « Dans une heure et demie. Je tire, et le plus bel instrument que j'aie fait de ma vie parle devant une ville. On ne saura jamais que c'est moi. Cela ne me fait rien. Ma femme le saura. »",
        "Il s'assied devant, sur une caisse, la main à portée de sa boule d'ivoire.",
        "Dans trois quarts d'heure, il y aura dans cette salle deux personnes de plus, qui viendront l'une de la vis et l'autre du ciel. On ne peut pas laisser là cet homme, avec sa lanterne et ses yeux clairs.",
        "Maître Crochemore te regarde. C'est à toi de dire comment.",
      ],
      choices: [
        { label: "Lui raconter pour qui il a planté douze cents lignes",
          test: { dom: "social", diff: 5, label: "Dire à un artisan à quoi sert son chef-d'œuvre", help: [{ if: { has: "monde:a5:cahier" }, v: 15 }, { if: { has: "monde:a5:syndic_entendu" }, v: 5 }, { if: { voie: "rebouteux" }, v: 10 }, { if: { voie: "comedien" }, v: 5 }] },
          win: { fx: { set: { "monde:a5:soufflot": "allie" }, ep: ["perso", 1500] }, to: "A5m_soufflot_ok" }, lose: { fx: { set: { "monde:a5:soufflot": "lie" } }, to: "A5m_soufflot_ko" } },
        { label: "Lui lier les mains avec sa propre ficelle, en lui demandant pardon", fx: { set: { "monde:a5:soufflot": "lie" } }, to: "A5m_soufflot_lie" },
      ] },

    A5m_soufflot_ok: { act: "V", title: "Un secours pour personne", place: "horloge_close", ambiance: "nuit",
      text: [
        "Tu le lui racontes. Tu commences par le Remonteur, parce que c'est un homme de métier, et qu'un homme de métier comprend qu'on graisse quarante ans une chose que l'on n'a jamais vue.",
        { if: { has: "monde:a5:cahier" }, text: "Tu lui mets le cahier dans les mains. Il lit, de près, le nez sur la page. *11 oct. Ouvert la caisse. C'est une voix. Ils veulent lui ôter la sienne et garder la bouche.* Il relève la tête. Il regarde son meuble. Il relit." },
        "« Une femme », dit-il.",
        "« Qui écrit. Depuis quarante-cinq ans. Ce que vous avez pris au diapason, il y a sept ans, derrière la porte, c'était sa Sentence. »",
        "Il a les mains à plat sur son tablier vert. Elles sont très petites.",
        "« On m'a dit : un secours. J'ai demandé si le Bronze était malade. M. le Syndic a ri. Il m'a dit : *il se fait vieux.* » Il déglutit. « J'ai mis mes plus belles lames. J'ai pensé : si jamais le vieux Juge reste court, devant tout ce monde, le mien le relèvera, et personne n'aura honte. J'ai fait cela comme on fait une béquille. »",
        "Il se lève. Il va au meuble. Tu crois une seconde qu'il va le frapper ; il le caresse, de la paume, comme on flatte une bête que l'on doit faire abattre.",
        "« Je ne tirerai pas. Qu'il vienne tirer lui-même, s'il sait où c'est. » Il se retourne, et ses yeux clairs sont pleins d'eau. « Seulement ne me le cassez pas. Je vous en prie. Il n'a rien fait, lui. Il dit ce qu'on lui a planté. S'il y a quelqu'un de coupable ici, c'est celui qui a planté sans demander. »",
        "Il s'assied par terre, le dos contre son chêne, et il y reste.",
      ],
      choices: [{ label: "Attendre onze heures", to: "A5m_fin", big: true }] },

    A5m_soufflot_ko: { act: "V", title: "Un homme qui a une commande", place: "horloge_close", ambiance: "nuit",
      text: [
        "Tu le lui racontes mal, ou trop vite. Il t'écoute avec la politesse inquiète d'un fournisseur devant un client qui a bu.",
        "« Une femme dans le Bronze. » Il regarde Maître Crochemore, cherchant un homme raisonnable. « Maître, vous êtes de la partie. Dites-lui. J'ai un bon de commande, moi, signé, avec le sceau de la fabrique. *Un instrument de secours.* On m'a payé le tiers. J'ai une femme et quatre enfants à Ferrières, dans une maison qui est à M. le Syndic. »",
        "Sa main est allée à la boule d'ivoire. Elle s'y cramponne.",
        "« Je ne veux pas savoir. Vous m'entendez ? Je fais des serinettes. On me dit de tirer à minuit moins cinq, je tire à minuit moins cinq. Si vous approchez, je crie, et j'ai la voix qui porte, c'est le métier. »",
        "Il ouvre la bouche. Maître Crochemore y enfonce son mouchoir à carreaux, avec une promptitude qui vous surprend tous les trois ; et tu fais le reste, vite, avec la ficelle du Remonteur. On l'assied dans le coin, sur les chaussons du mort, le dos au mur. Il roule des yeux épouvantés, moins pour lui que pour son meuble.",
        "« Je vous demande pardon, lui dit l'horloger en rajustant sa robe. Entre confrères, cela ne se fait pas. Je vous enverrai une montre. »",
      ],
      choices: [{ label: "Attendre onze heures", to: "A5m_fin", big: true }] },

    A5m_soufflot_lie: { act: "V", title: "Entre confrères", place: "horloge_close", ambiance: "nuit",
      text: [
        "Tu ne lui expliques rien. Il y a des vérités qui demandent une heure, et tu as trois quarts d'heure.",
        "Il ne se débat presque pas. Il est si surpris qu'il tend lui-même les poignets, en disant « mais, mais, mais », et il ne pense à crier que lorsque le mouchoir à carreaux de Maître Crochemore est déjà là. On l'assied dans le coin du Remonteur, le dos au mur, sur une couverture.",
        "Il vous regarde, puis il regarde son meuble, puis il vous regarde. Il ne comprend pas. Il a fait un bel instrument, il a très bien dîné, et deux horlogers l'attachent.",
        "« Je vous demande pardon, lui dit Maître Crochemore en rajustant sa robe. Entre confrères, cela ne se fait pas. Vous saurez pourquoi avant le jour, et vous me direz alors si j'ai eu tort. »",
        "Tu lui laisses sa lanterne, pour qu'il n'ait pas peur du noir.",
      ],
      choices: [{ label: "Attendre onze heures", to: "A5m_fin", big: true }] },

    A5m_fin: { act: "V", title: "Onze heures moins cinq", place: "horloge_close", ambiance: "nuit",
      fx: { until: 23, leave: "crochemore", ep: ["histoire", 2000] },
      text: [
        "La demie a sonné. En bas, dans la cour, le bruit a changé : trente mille personnes viennent de se taire à la fois, et cela fait un silence plus grand que la Tour.",
        "Par la meurtrière, tu vois les trois dais se vider. Trois hommes en descendent, sans escorte, à trois pas l'un de l'autre : un velours prune, une soutane violette, un pourpoint cramoisi. Ils traversent la cour entre deux haies de torches. Ils entrent à Sainte-Clavis. La porte de la chapelle se referme sur eux.",
        "La Veille est commencée.",
        "Maître Crochemore s'est levé. Il a sa montre à la main, la dernière, celle qu'il a gardée pour compter. Il ne dit rien. Il te fait signe de défaire la trousse.",
        "Tu sors les trois chiffons. Tu les poses sur l'établi du Remonteur, l'un près de l'autre, à côté de la tache d'huile. Le gris, le noir, le rouge.",
        "Dans la vis, quelqu'un monte. Et au-dessus de ta tête, sur le hourd, une planche a craqué.",
      ],
      choices: [{ label: "Les attendre sous le balancier", to: "A5c_rdv", big: true }] },
  },

  extras: {
    clues: {
      j5_cadran: { rev: "J", text: "Le cadran sans aiguilles de l'Horloge-Close est une porte à deux battants, sur gonds, qui s'ouvre vers le dehors quand les trois clefs tournent. Derrière, un pavillon de bronze grand comme une chambre. Personne ne l'a vu ouvert : à minuit, la ville ferme les yeux pour entendre." },
      s5_douze: { rev: "S", text: "Le Syndic, à la salle des Poids : les Clavaires montent aux trois quarts, douze casaques rousses derrière eux dans la vis. « Ce que nous trouverons devant le chêne, nous le prendrons, avec ce qu'il aura dans les mains. » La dépense de la Recluse est rayée des livres." },
    },
  },
};
