// Act IV · dawn on the Lisse: Mordace comes to the bank with the Great Book and offers the child the pen ("Corvanne,
// cédée"). Three ways: carry the line (lisse:cession), walk onto the bridge unarmed and make both banks remember
// together (lisse:paix, or the fight that follows a stray arrow), or hold the bridge with Ysolde (lisse:bataille, and
// the bridge burns or holds). Whatever happens, Mordace goes back to his tower and the white snow starts again.
var A = { act: "IV", noLead: true };
function P(o) { return Object.assign({}, A, o); }
var TEMOINS = { has: "ame:lisse" }, CLAN = { any: [{ has: "clan:descend" }, { present: "corbe" }] };
module.exports = {
  IV_l_aube: P({ title: "L'aube", place: "brenne",
    fx: { flag: "lisse:aube" },
    text: [
      "La brume monte de la Lisse comme tous les matins d'été, épaisse, blanche, et noie la vallée. Quand elle se lève, les deux armées sont là, rangées, sur les deux rives, à trois cents pas du pont. Personne n'a dormi.",
      { if: { has: "ysolde:pont" }, text: "Sur la tête du pont, côté Esquarre, la compagnie de Brenne. Quarante hommes. Devant eux, à pied, Ysolde, l'épée de son père au fourreau. Elle ne l'a pas tirée." },
      { if: { has: "corvanne:attend" }, text: "Sur l'autre rive, la margrave est à cheval, au premier rang. Elle ne donne pas d'ordre. Elle attend, comme elle l'a dit." },
      { if: { not: { has: "corvanne:attend" } }, text: "Sur l'autre rive, la margrave est à cheval, au premier rang. Elle lève le bras. Les tambours de Corvanne commencent à battre." },
      { if: CLAN, text: "Sur la colline, entre les deux armées, les tambours du clan du Corbeau battent aussi, mais pas au même rythme. Plus lent. Le pas des morts." },
      "Et sur la route de l'ouest, au trot, une voiture noire tirée par quatre chevaux noirs, qui traverse le camp d'Esquarre sans que personne l'arrête, et s'immobilise sur la berge, à cinquante pas du pont.",
    ],
    choices: [{ label: "La voiture noire", to: "IV_l_mordace" }] }),

  IV_l_mordace: P({ title: "Le Grand Livre", place: "brenne",
    text: [
      { first: true, text: "Deux greffiers descendent de la voiture et dressent sur la berge un lutrin de fer. Deux autres en sortent un livre, si grand qu'il faut les deux pour le porter, relié de cuir gris, avec une plume et une clé de fer sur le plat. Le Grand Livre des vivants. Ils le posent sur le lutrin et l'ouvrent." },
      { first: true, text: "Mordace descend le dernier. Il a une écritoire à la main, et une plume. Il a froid, au mois de juillet, au bord d'une rivière, et il tient son col fermé de la main gauche." },
      { first: true, text: "La reine arrive à cheval, avec sa garde. Elle met pied à terre. Elle ne regarde pas Mordace. Elle te regarde, toi." },
      { first: true, text: "« Il n'y a rien eu, cette nuit, dit-elle. Rien qui me donne une raison. » Ou peut-être qu'il y a eu quelque chose, et qu'elle ne le sait pas. Elle a l'air de quelqu'un qui n'a pas dormi depuis trois ans." },
      { first: true, text: "Mordace trempe la plume dans l'encrier, et te la tend, par le manche, poliment." },
      { first: true, text: "« Une ligne, dit-il. *Corvanne, cédée.* Ta main, ma plume. Tu es le seul des deux côtés. Personne ne mourra aujourd'hui. Personne ne se souviendra de rien. C'est la plus grande bonté que le monde ait jamais faite. »" },
      { again: true, text: "Tu rends la plume à Mordace. Il la reprend sans un mot, la retrempe dans l'encrier, et te la tend de nouveau, par le manche. Il a tout son temps. La reine n'a pas bougé. Les deux armées non plus." },
    ],
    choices: [
      { label: "Prendre la plume", to: "IV_l_cession" },
      { label: "Laisser la plume, et marcher vers le pont, sans arme", big: true, to: "IV_l_pont" },
      { label: "Laisser la plume, et rejoindre Ysolde à la tête du pont", hide: { not: { has: "ysolde:pont" } }, to: "IV_l_tenir" },
    ] }),

  // ---- The cession
  IV_l_cession: P({ title: "La plume", place: "brenne",
    text: [
      "Tu prends la plume. Elle est froide, très légère. Mordace s'écarte pour te laisser approcher du lutrin.",
      "Le Grand Livre est ouvert sur une page blanche. Sur la page d'en face, à l'encre fraîche, des noms : tous les villages de Corvanne, cent quarante, rangés par vallée. Et au-dessus, le titre, de la main de Mordace : *Cessions de la Couronne.*",
      { with: "lisandre", text: "Derrière toi, Lisandre dit ton nom, ton vrai nom, celui de Valcendre. Elle ne le crie pas. Elle le dit comme on dit le nom de quelqu'un qui est en train de tomber." },
      { with: "sansnom", text: "Ton frère ne dit rien. Il a remis son masque." },
    ],
    choices: [
      { label: "Écrire la ligne", tag: "Corvanne cédée", stain: true, fx: { flag: ["lisse:cession", "aelan:passeur"], conf: { lisandre: -40, ysolde: -20, pie: -15, hylas: -25, corbe: -20, sansnom: -20, linette: -10 }, ep: ["histoire", 4000] }, to: "IV_l_cession_ecrite" },
      { label: "Reposer la plume", to: "IV_l_mordace" },
    ] }),

  IV_l_cession_ecrite: P({ title: "Corvanne, cédée", place: "brenne",
    text: [
      "Tu écris. Ta main ne tremble pas. C'est ce qu'il y a de pire.",
      "*Corvanne, cédée.*",
      "Il n'y a pas de bruit. Il n'y a pas de neige. Sur l'autre rive, la margrave regarde autour d'elle, lentement, comme quelqu'un qui se réveille dans une chambre d'auberge. Plus un tambour ne bat. Les soldats en bleu se regardent. Ils retirent leurs casques. Ils parlent entre eux, et tu entends, à travers la rivière, qu'ils parlent esquarrois.",
      "Ils ne savent pas pourquoi ils sont là. Ils pensent qu'ils sont des soldats de la reine, en manœuvre. Ils traversent le pont, par petits groupes, en riant, et les soldats d'Esquarre leur font de la place autour des feux.",
      "Personne ne meurt. Personne ne se souvient.",
      { with: "lisandre", text: "Lisandre est debout au bord de l'eau. De l'autre côté, un homme maigre, avec de l'encre sur les doigts, traverse le pont avec les autres. Il passe à trois pas d'elle. Il ne la regarde pas. Il n'y a plus de raison de la regarder. Elle s'en va, sans un mot, vers l'ouest, et tu ne la retiens pas." },
      "Mordace referme le Grand Livre. Il te reprend la plume, doucement. « Merci, dit-il. Maintenant, tu sais que ça marche. » Il remonte dans sa voiture.",
    ],
    choices: [{ label: "Rester sur la berge", fx: { leave: "lisandre" }, to: "IV_l_soir" }] }),

  // ---- The bridge, unarmed
  IV_l_pont: P({ title: "Le pont", place: "brenne",
    text: [
      "Tu poses la plume sur le lutrin, à côté du livre. Mordace ne dit rien. Tu marches vers le pont.",
      "Six pas de large. Pierre blanche, neuve. Les hommes qui gardent la tête du pont s'écartent. Tu poses le pied sur le pont. Il est tiède. On l'a construit sur les piles de l'ancien, celui qui a brûlé.",
      { if: { all: [{ not: { has: "corvanne:attend" } }, CLAN] }, text: "Huit mille hommes de chaque côté te regardent marcher. Tu entends les tambours de Corvanne. Tu entends ceux du clan. Tu entends ton cœur, qui est le plus fort des trois." },
      { if: { all: [{ not: { has: "corvanne:attend" } }, { not: CLAN }] }, text: "Huit mille hommes de chaque côté te regardent marcher. Tu entends les tambours de Corvanne. Tu entends ton cœur, qui est le plus fort des deux." },
      { if: { all: [{ has: "corvanne:attend" }, CLAN] }, text: "Huit mille hommes de chaque côté te regardent marcher. Tu entends les tambours du clan, sur la colline. Tu entends ton cœur, qui est le plus fort des deux." },
      { if: { all: [{ has: "corvanne:attend" }, { not: CLAN }] }, text: "Huit mille hommes de chaque côté te regardent marcher. Pas un tambour ne bat. Tu entends ton cœur." },
      "Au milieu du pont, tu t'arrêtes.",
      { with: "sansnom", text: "Ton frère est à côté de toi, sans arme. Tu ne l'as pas entendu venir." },
    ],
    choices: [{ label: "Attendre qu'on te rejoigne", to: "IV_l_pont2" }] }),

  IV_l_pont2: P({ title: "Ceux qui viennent", place: "brenne",
    text: [
      "Tu attends, les mains ouvertes, au milieu de la pierre blanche. Sur les deux rives, on retient son souffle.",
      { if: { has: "iv:tapisserie=complete" }, text: "Les femmes de Hautvent arrivent avec la brouette. Elles déroulent la toile sur le pont, d'une rive à l'autre, cent pas de laine brune et bleue, cinq mille noms. Sur les deux berges, des soldats se penchent pour lire. Un piquier bleu trouve le sien. Un archer d'Esquarre aussi. Ils sont à trois pas l'un de l'autre, dans la laine." },
      { if: { has: "iv:tapisserie=moitie" }, text: "Les femmes de Hautvent arrivent avec la brouette. Elles déroulent la toile sur le pont : une moitié couverte de noms, l'autre blanche. Sur la rive d'en face, on regarde le blanc, longtemps. Personne ne sait si c'est une insulte ou une invitation." },
      { if: TEMOINS, text: "Derrière toi, sur la berge d'Esquarre, il y a un mouvement. Trois cents hommes, femmes, vieillards et enfants, en vêtements d'il y a trois ans, se lèvent de l'herbe où ils étaient assis, et marchent vers le pont, en colonne, au pas, avec leurs charrettes et leurs chèvres. Les soldats d'Esquarre s'écartent devant eux sans savoir pourquoi. Sur l'autre rive, quelqu'un, dans les rangs de Corvanne, crie un prénom. Puis un autre. Ce sont les gens de Lisse-en-Corvanne. Leurs fils sont dans l'armée d'en face." },
      { if: { has: "ysolde:pont" }, text: "Ysolde arrive. Elle détache son épée, celle de son père, un loup sur une tour, et elle la pose sur la pierre du pont, au milieu, entre toi et Corvanne. Puis elle se tourne vers la rive d'en face et elle parle, très fort, en corvannais, avec un accent terrible." },
      { if: { all: [{ has: "ysolde:pont" }, { any: [{ has: "ysolde:lisse_sait" }, { has: "sud4:demande=lisse" }, TEMOINS] }] }, text: "« Je m'appelle Ysolde de Brenne. La nuit du quatorze brumaire, il y a trois ans, j'ai tenu ce pont. Il y avait trois cents personnes dessus. J'avais l'ordre que personne ne passe. J'ai donné l'ordre de le brûler. Je l'ai vendu ensuite, ce souvenir, pour pouvoir continuer à servir. Je le rachète aujourd'hui. Il est à moi. Il est à vous aussi. »" },
      { if: { all: [{ has: "ysolde:pont" }, { not: { any: [{ has: "ysolde:lisse_sait" }, { has: "sud4:demande=lisse" }, TEMOINS] } }] }, text: "« Je m'appelle Ysolde de Brenne. Je tenais ce pont, la nuit du quatorze brumaire. Je ne me souviens pas de ce que j'ai fait. Je sais que c'était le pire. Je suis là pour qu'on me le dise. »" },
      { if: CLAN, text: "Sur la colline, le chant du clan change. Il ne chante plus le chant des morts en entier : il chante une seule liste, que Corbe a gravée sur des écorces, toute l'année, et apprise par cœur. Les noms de ceux qui sont morts sur le pont. Les deux rives les entendent. Ils sont corvannais et esquarrois, mélangés, dans l'ordre où ils sont tombés." },
      { with: "lisandre", text: "Lisandre est montée sur le parapet, au milieu du pont, en équilibre. Elle chante. Pas une ballade : la chanson de mariniers que Rodric chantait dans la barque, celle que les deux rives connaissent, avec sa voix rauque, trop grave. Au deuxième couplet, quelqu'un chante avec elle sur l'autre rive. Au troisième, ils sont cent." },
      { with: "rodric", after: "ysolde:pont", text: "Rodric est venu aussi, avec ses trois cloches à l'épaule. Il dit à la rive d'en face : « J'étais là, cette nuit-là, avec vous. Je l'ai vue. C'est elle. Et elle est revenue. » Puis, plus bas : « C'est plus que la plupart. »" },
      { with: "rodric", before: "ysolde:pont", text: "Rodric est venu aussi, avec ses trois cloches à l'épaule. Il dit à la rive d'en face : « J'étais là, cette nuit-là, avec vous. Je suis revenu. » Puis, plus bas : « C'est plus que la plupart. »" },
      { if: { has: "iii:gue_paix" }, text: "Tu penses, sans le vouloir, à un vieux sergent qui boitait dans un lit de rivière sans eau. Qui a gagné ?" },
      { if: { has: "iv:tambour" }, text: "Tu lèves la main. Sur l'autre rive, au premier rang, un tambour d'enfant hésite, puis bat : quatre longs, deux courts, quatre longs. La chamade. Les officiers de Corvanne se retournent, furieux. Le garçon continue. Il dira qu'il s'est trompé." },
      { if: { has: "ilan:iv" }, text: "Sur l'autre rive, Ilan s'est avancé jusqu'au bord de l'eau, sans arme. Il parle à la margrave, très vite, sans la regarder, les yeux sur le pont." },
    ],
    choices: [
      { label: "Dire aux deux rives d'où vient la neige", test: { dom: "social", label: "Le pont", help: [
          { if: TEMOINS, v: 20 }, { if: { has: "ysolde:pont" }, v: 15 }, { if: CLAN, v: 10 }, { if: { present: "lisandre" }, v: 10 }, { if: { has: "corvanne:attend" }, v: 15 }, { if: { has: "corvanne:iv=menace" }, v: -10 },
          { if: { has: "ilan:iv" }, v: 10 }, { if: { has: "aelan:dit_les_noms" }, v: 10 }, { if: { item: "registre_anselin" }, v: 10 },
          { if: { has: "lisandre:chanson_lisse" }, v: 10 }, { if: { has: "gaspard:pain_lisse" }, v: 5 }, { if: { has: "deserteurs:reviennent" }, v: 5 }, { if: { has: "sansnom:ilse" }, v: 5 }, { if: { has: "rodric:cloches" }, v: 5 }, { if: { has: "iii:gue_paix" }, v: 10 }, { if: { has: "iv:patrouille=deux" }, v: 5 }, { if: { has: "iv:tapisserie=complete" }, v: 10 }, { if: { has: "iv:tambour" }, v: 5 }, { if: { has: "iv:prisonnier=rendu" }, v: 5 }] },
        win: { fx: { flag: "lisse:paix", ep: ["histoire", 6000] }, to: "IV_l_paix" },
        lose: { fx: { flag: "lisse:fleche" }, to: "IV_l_fleche" } },
    ] }),

  IV_l_paix: P({ title: "La paix du pont", place: "brenne",
    text: [
      "Tu parles. Tu dis les fondateurs, la vallée brûlée, le pacte, la digue. Tu dis le greffier qui vend l'oubli au détail, et la neige qui tombe là où on a vendu le plus. Tu dis que Corvanne n'a pas perdu ses villages à cause d'Esquarre, mais à cause d'un livre. Tu montres la berge, la voiture noire, le lutrin de fer.",
      "Huit mille hommes se retournent pour regarder Mordace. Il est debout près de son livre, seul, la plume à la main. Il ne bouge pas.",
      { after: "ysolde:pont", text: "Sur l'autre rive, la margrave descend de cheval. Elle s'avance jusqu'au pont. Elle marche jusqu'au milieu, jusqu'à l'épée posée par terre. Elle ne la ramasse pas. Elle regarde l'épée, puis toi, longtemps." },
      { before: "ysolde:pont", text: "Sur l'autre rive, la margrave descend de cheval. Elle s'avance jusqu'au pont. Elle marche jusqu'au milieu, jusqu'à toi. Elle te regarde, longtemps." },
      "« Je me souviendrai de ce que vous avez fait sur ce pont, dit-elle. Et vous aussi. Ça vaut mieux que de l'oublier ensemble. » Elle tend la main. Pas pour serrer : la paume ouverte, posée sur le cœur, comme les Orsans. Elle ne sait pas d'où elle tient ce geste. Sa grand-mère le faisait.",
      { if: TEMOINS, text: "Les trois cents de Lisse traversent le pont, enfin. Ils passent entre vous, et sur l'autre rive, ils se dispersent dans les rangs de Corvanne, et chacun trouve quelqu'un, et puis on ne les voit plus. Ils sont rentrés." },
      "Quand tu te retournes vers la berge, la voiture noire est partie.",
    ],
    choices: [{ label: "Le soir", fx: { conf: { ysolde: 15, lisandre: 15, corbe: 10, pie: 10, hylas: 10, sansnom: 10, rodric: 15 } }, to: "IV_l_soir" }] }),

  IV_l_fleche: P({ title: "La flèche", place: "brenne",
    text: [
      "Tu parles. Les deux rives écoutent. Tu sens qu'ils écoutent. Et puis, d'un côté ou de l'autre, on ne saura jamais lequel, un archer dont les mains tremblent depuis l'aube lâche sa corde.",
      "La flèche passe au-dessus de toi. Elle tombe dans les rangs de Corvanne. Un homme crie.",
      "Les tambours battent la charge. Des deux côtés, on court vers le pont.",
    ],
    choices: [{ label: "Tenir le milieu du pont", to: "IV_l_melee" }] }),

  // ---- Holding the bridge with Ysolde
  IV_l_tenir: P({ title: "La tête du pont", place: "brenne",
    text: [
      "Tu poses la plume. Tu rejoins Ysolde à la tête du pont. Elle te regarde arriver, et elle hoche la tête, et elle tire l'épée de son père.",
      "« Personne ne le brûlera, dit-elle. Ni eux, ni nous. On le tient au milieu. Qui veut passer passe, sans arme. Qui vient armé, on le renvoie. »",
      "Sur l'autre rive, les tambours de Corvanne battent la charge, et la première compagnie s'ébranle.",
    ],
    choices: [{ label: "Avancer jusqu'au milieu du pont", fx: { flag: "lisse:bataille" }, to: "IV_l_melee" }] }),

  IV_l_melee: P({ title: "Le milieu du pont",
    combat: { title: "Le pont de Lisse", enemies: [{ id: "soldat_bleu", n: 3 }, "capitaine_ostrel"], terrain: "ville", range: "contact",
      win: { fx: { ep: ["seance", 4000], flag: "lisse:pont_tenu" }, to: "IV_l_apres" },
      lose: { fx: { pv: -6, flag: "lisse:pont_perdu" }, to: "IV_l_apres" } },
    text: ["Ils arrivent en courant, en hurlant, les piques basses, et le pont fait six pas de large, et tu es au milieu. Derrière eux, d'autres. Derrière toi, les tiens."],
    choices: [] }),

  IV_l_apres: P({ title: "La fumée", place: "brenne",
    text: [
      { if: { has: "lisse:pont_tenu" }, text: "Vous tenez le milieu du pont jusqu'à midi. Les compagnies de Corvanne se brisent dessus l'une après l'autre, comme des vagues sur une pile. À midi, la margrave fait sonner la retraite. Elle n'a plus d'hommes à envoyer sur six pas de large." },
      { if: { has: "lisse:pont_perdu" }, text: "Vous êtes repoussés jusqu'à la tête du pont, côté Esquarre. Les Corvannais tiennent le milieu. On se bat jusqu'à midi pour quelques pas de pierre blanche. À midi, les deux armées sont trop fatiguées pour continuer, et elles s'arrêtent, comme on pose un fardeau." },
      "Sur le pont, il y a des morts. Corvannais et Esquarrois, mélangés, dans l'ordre où ils sont tombés.",
      { if: { has: "ysolde:pont" }, text: "Ysolde est assise sur le parapet, l'épée sur les genoux, couverte de sang qui n'est pas le sien. Un sergent arrive en courant avec une torche et un baril de poix. « Capitaine ! Si on le brûle maintenant, ils ne pourront plus passer ! »" },
    ],
    choices: [
      { label: "Laisser Ysolde décider", hide: { not: { has: "ysolde:pont" } }, to: "IV_l_ysolde_torche" },
      { label: "Ramasser les blessés des deux côtés", hide: { has: "ysolde:pont" }, fx: { flag: "lisse:blesses", ep: ["perso", 1500] }, to: "IV_l_soir" },
    ] }),

  IV_l_ysolde_torche: P({ title: "La torche", place: "brenne",
    text: [
      "Ysolde regarde la torche. Elle regarde le pont. Elle regarde les morts sur le pont.",
      "Elle prend la torche des mains du sergent. Elle la tient un moment, au-dessus de la poix.",
      "Puis elle la jette dans la Lisse. Elle ne dit rien. Le sergent ne dit rien. Sur l'autre rive, quelqu'un a vu, et un murmure court dans les rangs de Corvanne, d'un bout à l'autre.",
      "« Ramassez les blessés, dit-elle. Des deux côtés. Et les morts. Qu'on ait leurs noms. Tous. »",
    ],
    choices: [{ label: "Le soir", fx: { flag: ["lisse:pont_debout", "ysolde:torche_jetee"], conf: { ysolde: 15 }, ep: ["perso", 2500] }, to: "IV_l_soir" }] }),

  // ---- Evening: the snow again
  IV_l_soir: P({ title: "Le soir", place: "brenne",
    text: [
      { if: { has: "lisse:paix" }, text: "Le soir, des deux côtés de la Lisse, les feux. Des soldats passent le pont, sans arme, avec du vin, du pain, des chansons. On ne sait pas encore si c'est la paix. On sait que ce n'est plus la guerre." },
      { if: { has: "lisse:cession" }, text: "Le soir, un seul camp, autour du fort de Brenne, deux fois plus grand qu'hier. Des soldats en bleu et des soldats en gris boivent ensemble et se racontent des campagnes qu'ils n'ont jamais faites. Ils rient. Tout le monde rit." },
      { if: { any: [{ has: "lisse:bataille" }, { has: "lisse:fleche" }] }, text: "Le soir, des deux côtés de la Lisse, on enterre. On a pris les noms. On les lit à voix haute, au bord des fosses, et de l'autre côté de la rivière on entend lire les autres." },
      "Et puis, vers minuit, quelqu'un lève la tête. Puis un autre. Tout le camp lève la tête.",
      "Il neige.",
      "Pas de la neige d'hiver. La blanche. Elle tombe à gros flocons, lents, lumineux, dans la nuit de juillet. Elle vient de l'ouest. De Pallanche. Et sur l'horizon, à l'ouest, une lueur monte vers le ciel, blanche, droite, comme une colonne, comme une tour faite de neige.",
      { with: "hylas", text: "Hylas a levé son visage aveugle vers le ciel. « Il a commencé, dit-il. La grande cession. Il ne cède plus un village, ou un royaume. Il cède tout ce qui fait mal. À tout le monde. En une nuit. Et pour la porter, il n'a plus besoin de toi. Il a la digue. »" },
      { without: "hylas", text: "Tu sais ce que c'est. Il n'a plus besoin de ta main. Il ne cède plus un village, ou un royaume. Il cède tout." },
    ],
    choices: [{ label: "Tourner le dos à la Lisse, vers l'ouest", fx: { flag: "acte4:fin", ep: ["histoire", 8000] }, to: "Z4_fin", big: true }] }),

  Z4_fin: P({ title: "Fin de l'Acte IV", place: null,
    text: [
      "Ici s'achève l'Acte IV. La neige blanche tombe sur tout le royaume, et une tour de neige monte au-dessus de Pallanche.",
      { if: { has: "lisse:paix" }, text: "Sur la Lisse, deux armées se souviennent ensemble, pour la première fois." },
      { if: { has: "lisse:cession" }, text: "Corvanne n'a jamais existé. Tu es le seul à le savoir, avec lui." },
    ],
    choices: [{ label: "Acte V · La tour du Registre", to: "V_route", big: true }] }),
};
