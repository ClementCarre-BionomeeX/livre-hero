// Act IV · side quests, one or two per place of the year after: the lists of the moutier (Frère Odon), Ylva on the
// great stone, Mathurin's hives, Baudoin at the gate of the Tower, the Readers' gallows, Thibaut condemned again, and
// the ruins of Lisse-en-Corvanne. Each is entered from the hub of its place and comes back to it.
var A = { act: "IV", noLead: true };
function P(o) { return Object.assign({}, A, o); }
module.exports = {
  // ---------------------------------------------------------------- The lists of the moutier
  IV_Q_odon: P({ title: "Le livre des arrivées", place: "moutier",
    fx: { questSeen: "IV_Q_listes" },
    text: [
      { first: true, text: "Frère Odon tient le livre des arrivées, sous une arcade, à une table qui boite. Il a soixante ans, des lunettes rafistolées au fil de fer, et une écriture si petite qu'il faut une loupe pour la lire. Il note tous ceux qui montent, chaque matin, et tous ceux qui repartent, chaque soir." },
      { first: true, text: "« Ils oublient qui ils cherchent, dit-il. Ils arrivent en criant un nom, et le lendemain ils ne savent plus lequel. Alors je l'écris, le nom qu'ils criaient. Le soir, je le leur relis. » Il soupire. « J'ai deux cas que je n'arrive pas à résoudre. Si vous avez de bons yeux. »" },
      { first: true, text: "Le premier : un vieil homme, qui cherche une femme qu'il appelle Bonne. Le second : un garçon de dix ans, arrivé seul en février, qui ne sait pas son nom, et à qui les frères ont donné celui de Février, faute de mieux." },
      { again: true, text: "Odon a déjà tourné la page. Il te montre l'entrée suivante du bout de sa plume : l'autre cas." },
    ],
    choices: [
      { label: "Chercher Bonne dans les listes", hide: { seen: "IV_Q_bonne" }, to: "IV_Q_bonne" },
      { label: "Parler à Février", hide: { seen: "IV_Q_fevrier" }, to: "IV_Q_fevrier" },
      { back: "IV_moutier" },
    ] }),

  IV_Q_bonne: P({ title: "Bonne", place: "moutier",
    text: [
      "Il n'y a aucune Bonne dans les listes. Il y a des Bonnefoy, des Bonnard, une Bonnette, morte en janvier. Tu relis l'entrée du vieil homme, de la main d'Odon : *Vincent, charron, de Mirelles. Cherche Bonne. Dit qu'elle a les mains bleues.*",
      "Les mains bleues. Tu cherches les teinturières. Il y en a une. *Agnès, teinturière, de Mirelles. Ne sait plus qui elle attend. Dit qu'il a une jambe raide.*",
      "Elle dort à quatre paillasses de lui, depuis le quinze décembre.",
    ],
    choices: [
      { label: "Les amener l'un devant l'autre", test: { dom: "savoir", label: "Les listes", help: [{ if: { present: "hylas" }, v: 15 }, { if: { present: "ombeline" }, v: 10 }] },
        win: { fx: { flag: "odon:bonne", ep: ["perso", 1000] }, to: "IV_Q_bonne_ok" },
        lose: { fx: { flag: "odon:bonne", ep: ["perso", 600] }, to: "IV_Q_bonne_lent" } },
    ] }),

  IV_Q_bonne_ok: P({ title: "Les mains bleues", place: "moutier",
    text: ["Tu prends la main d'Agnès, et tu la poses dans celle de Vincent, sans rien dire. Il regarde la main. Elle est bleue jusqu'au poignet, d'un bleu qui ne part jamais. Il dit : « Bonne. » C'est comme ça qu'il l'appelait, pas comme ça qu'elle s'appelle. Elle rit, d'un rire de jeune fille, et elle dit : « Ta jambe. » Odon note tout. Il a les lunettes embuées."],
    choices: [{ fx: { conf: { ombeline: 5 } }, back: "IV_Q_odon_fin" }] }),

  IV_Q_bonne_lent: P({ title: "Les mains bleues", place: "moutier",
    text: ["Tu les amènes l'un devant l'autre. Ils se regardent poliment, comme deux étrangers. Il faut une heure, et que tu leur relises les deux entrées d'Odon, à voix haute, trois fois, pour qu'Agnès regarde enfin la jambe de Vincent, et lui ses mains. Ensuite, ils ne se quittent plus. Ils ne savent pas pourquoi. Ça n'a pas l'air de les gêner."],
    choices: [{ back: "IV_Q_odon_fin" }] }),

  IV_Q_fevrier: P({ title: "Février", place: "moutier",
    text: [
      "Le garçon est assis sur le muret du cloître, et il lance des cailloux dans le puits, un par un, en écoutant combien de temps ils mettent à tomber. Il a dix ans, une veste trop grande, et des yeux qui ne s'arrêtent sur rien.",
      "« Je m'appelle Février, dit-il avant que tu demandes. C'est pas vrai, mais c'est ce qu'ils disent. » Il lance un caillou. « Je sais compter jusqu'à mille. Je sais où il y avait un lavoir. Je sais qu'il y avait un chien jaune. C'est tout. »",
      { with: "givre", text: "Givre vient renifler ses chaussures. Le garçon se fige. Puis il tend la main, très lentement, et Givre lui lèche les doigts. Il y a, au bout de ses doigts, une miette. Une toute petite. Givre ne la mange pas. Il la regarde, puis il te regarde." },
    ],
    choices: [
      { label: "Laisser Givre lui rendre la miette", hide: { not: { present: "givre" } }, fx: { flag: "fevrier:nom", conf: { givre: 10 }, ep: ["perso", 1500] }, to: "IV_Q_fevrier_nom" },
      { label: "Lui donner un nom, un vrai, que tu choisis", fx: { flag: "fevrier:nomme", ep: ["perso", 800] }, to: "IV_Q_fevrier_nomme" },
      { label: "Lui dire que Février, c'est un beau nom", fx: { flag: "fevrier:garde", ep: ["perso", 500] }, to: "IV_Q_fevrier_garde" },
    ] }),

  IV_Q_fevrier_nom: P({ title: "Le chien jaune", place: "moutier",
    text: [
      "Givre souffle sur les doigts du garçon, très doucement, comme on souffle sur une braise. La miette brille un instant et disparaît dans la main.",
      "Le garçon regarde sa main. « Pataud, dit-il. Le chien s'appelait Pataud. » Puis, sans transition, très vite, comme s'il avait peur que ça reparte : « Et moi, Colin. Colin Margerie. De la Varenne. Mon père a la forge. » Il se met à pleurer et à rire, et il court dire à Odon de corriger son livre.",
    ],
    choices: [{ back: "IV_Q_odon_fin" }] }),

  IV_Q_fevrier_nomme: P({ title: "Un nom", place: "moutier",
    text: ["Tu réfléchis longtemps. Tu lui donnes le nom de quelqu'un de Sauvelune, quelqu'un de bien. Il l'essaie à voix haute, plusieurs fois. « D'accord », dit-il enfin. Il va le dire à Odon, qui l'écrit, à côté de Février, sans barrer Février. « On ne barre rien, ici », dit Odon."],
    choices: [{ back: "IV_Q_odon_fin" }] }),

  IV_Q_fevrier_garde: P({ title: "Février", place: "moutier",
    text: ["Il hausse les épaules. « Février, c'est le mois où on m'a trouvé, dit-il. C'est déjà quelque chose de vrai. » Il lance un dernier caillou dans le puits, et il écoute. « Mille deux, dit-il. Il est profond. »"],
    choices: [{ back: "IV_Q_odon_fin" }] }),

  IV_Q_odon_fin: P({ backName: "la table d'Odon", title: "Odon", place: "moutier",
    text: [
      { if: { all: [{ seen: "IV_Q_bonne" }, { seen: "IV_Q_fevrier" }] }, text: "Odon relit ses deux entrées, corrigées. Il retire ses lunettes. « Trois cent quarante-deux noms dans ce livre, dit-il. Il en reste trois cent quarante qui cherchent quelqu'un. » Il remet ses lunettes. « Demain, peut-être. »" },
      { if: { not: { all: [{ seen: "IV_Q_bonne" }, { seen: "IV_Q_fevrier" }] } }, text: "Odon note. Il ne dit rien. Il tourne la page." },
    ],
    choices: [
      { label: "L'autre cas", hide: { all: [{ seen: "IV_Q_bonne" }, { seen: "IV_Q_fevrier" }] }, to: "IV_Q_odon" },
      { fx: { quest: "IV_Q_listes", flag: "odon:aide" }, back: "IV_moutier" },
    ] }),

  // ---------------------------------------------------------------- Ylva on the great stone
  IV_Q_ylva: P({ title: "Ylva", place: "corbeau",
    fx: { questSeen: "IV_Q_ylva" },
    text: [
      "Le soir, au bord du camp, une petite fille sur une pierre, face au col, enveloppée dans une couverture trop grande. Huit ans. Un visage rond, des tresses mal faites.",
      { if: { has: "ylva:sauvee" }, text: "Ylva. Celle qui était partie dans la neige, l'an dernier, pour voir la Mère, et que Corbe était allée chercher. Elle te regarde arriver sans peur." },
      { if: { not: { has: "ylva:sauvee" } }, text: "On te dit qu'elle s'appelle Ylva, qu'elle s'est perdue dans la neige l'an dernier, qu'on l'a retrouvée au printemps, assise exactement à cet endroit, et qu'elle y revient tous les soirs." },
      "« J'attends la Mère Blanche, dit-elle. Elle a pris ma grand-mère, au col, quand la montagne a craqué. Elle va me la rendre. Corbe dit que les morts ne veulent pas qu'on les venge. Moi, je ne veux pas la venger. Je veux qu'elle revienne. »",
    ],
    choices: [
      { label: "Lui raconter la plaine blanche, et ceux qui y marchent", fx: { flag: "ylva:iv=verite", ep: ["perso", 1000] }, to: "IV_Q_ylva_verite" },
      { label: "S'asseoir à côté d'elle et attendre avec elle", fx: { flag: "ylva:iv=attente", ep: ["perso", 800] }, to: "IV_Q_ylva_attente" },
      { label: "Lui demander le nom de sa grand-mère", hide: { not: { any: [{ has: "aelan:dit_les_noms" }, { has: "nord:chant_lu" }] } }, fx: { flag: "ylva:iv=nom", ep: ["perso", 1500] }, to: "IV_Q_ylva_nom" },
    ] }),

  IV_Q_ylva_verite: P({ title: "La plaine", place: "corbeau",
    text: [
      "Tu lui racontes. La plaine sans ciel, les gens qui marchent, la ville aux cloches, la ville aux tours. Elle écoute en mordant le bord de sa couverture.",
      "« Alors elle marche, dit-elle à la fin. Elle n'est pas dans la glace. Elle marche avec les autres. » Elle réfléchit. « Elle marchait très lentement. Elle avait mal aux genoux. Elle va mettre longtemps. » Elle descend de la pierre. « Je reviendrai demain. Pas tous les soirs. Demain. »",
    ],
    choices: [{ fx: { quest: "IV_Q_ylva" }, back: "IV_clan_fin" }] }),

  IV_Q_ylva_attente: P({ title: "La nuit", place: "corbeau",
    text: [
      "Tu t'assieds. Elle se pousse un peu pour te faire de la place. Vous regardez le col. Il ne se passe rien. Les étoiles tournent. À un moment, elle s'endort contre ton bras.",
      { with: "corbe", before: "corbe:iv=sans_nom", text: "Corbe vient la chercher, vers minuit. Elle la prend dans ses bras sans la réveiller. « Elle fait ça tous les soirs, dit-elle. Personne n'avait jamais attendu avec elle. Merci. » Elle repart vers les tentes." },
      { with: "corbe", after: "corbe:iv=sans_nom", text: "Une femme du clan vient la chercher, vers minuit. Elle te fait un signe de tête, et quelque chose comme un remerciement, dans une langue que tu ne parles pas." },
      { without: "corbe", text: "Une femme du clan vient la chercher, vers minuit. Elle te fait un signe de tête, et quelque chose comme un remerciement, dans une langue que tu ne parles pas." },
    ],
    choices: [{ fx: { quest: "IV_Q_ylva", conf: { corbe: 5 } }, back: "IV_clan_fin" }] }),

  IV_Q_ylva_nom: P({ title: "Le nom de la grand-mère", place: "corbeau",
    text: [
      "« Thora, dit-elle. Thora, fille d'Unn. »",
      "Tu chantes. Le chant des morts, sur l'air que le clan connaît, et au bout, un seul nom : Thora, fille d'Unn. Qui chante un seul nom l'appelle.",
      "Il ne se passe rien. Puis, très loin, au col, sur la grande pierre, une lueur. Une seule, petite, qui brille une minute, puis s'éteint. Ylva l'a vue. Elle ne dit rien. Elle se lève, elle replie sa couverture, et elle rentre au camp en chantonnant, comme quelqu'un qui a reçu une réponse.",
    ],
    choices: [{ fx: { quest: "IV_Q_ylva" }, back: "IV_clan_fin" }] }),

  // ---------------------------------------------------------------- Mathurin's hives
  IV_Q_ruches: P({ title: "Les ruches", place: "sauvelune",
    fx: { questSeen: "IV_Q_ruches" },
    text: [
      "Au-dessus du village, le rucher de Mathurin. Douze ruches de paille sur un banc de pierre, à l'abri du vent.",
      { if: { has: "nord:rendu=sauvelune" }, text: "Mathurin est là, voilé, enfumoir à la main. Il a quatre-vingts ans et il ment toujours. « Les abeilles sont revenues avant nous, dit-il. Elles savaient le chemin, elles. Mais elles sont folles. Elles font du miel blanc. Regarde. »" },
      { if: { not: { has: "nord:rendu=sauvelune" } }, text: "Il n'y a personne. Les ruches bourdonnent quand même. Elles ont tenu toute l'année blanche, seules. Le miel déborde des paniers, et il est blanc." },
      "Le miel est blanc comme la neige blanche. Il ne coule pas. Il brille un peu.",
    ],
    choices: [
      { label: "Le goûter", fx: { flag: "ruches:goute" }, to: "IV_Q_ruches_gout" },
      { label: "Enfumer les ruches et prendre les rayons, pour les brûler", fx: { flag: "ruches:brule", ep: ["perso", 600] }, to: "IV_Q_ruches_feu" },
    ] }),

  IV_Q_ruches_gout: P({ title: "Le miel blanc", place: "sauvelune",
    text: [
      "Tu en prends un peu sur le doigt. Ça a le goût de rien, puis d'un coup, de tout : le pré des foins, la fête, la musique, un matin de juillet où il neigeait. Un souvenir de quelqu'un d'autre. Une femme de Sauvelune qui étend son linge, il y a un an, et qui voit tomber le premier flocon.",
      "Les abeilles ont butiné la neige. Elles ont récolté ce qu'elle prenait.",
      { if: { has: "nord:rendu=sauvelune" }, text: "Mathurin hoche la tête. « Je te l'avais dit. Folles. Mais pas bêtes. » Il te remplit trois pots. « Donne-le à ceux qui ont perdu quelque chose. Une cuillère. Pas plus. On ne sait jamais ce qu'on retrouve. »" },
      { if: { not: { has: "nord:rendu=sauvelune" } }, text: "Tu remplis trois pots. Tu ne sais pas encore à qui tu les donneras. Tu sais que tu les donneras." },
    ],
    choices: [{ fx: { item: ["miel_blanc", "miel_blanc", "miel_blanc"], quest: "IV_Q_ruches", flag: "mathurin:iv", ep: ["perso", 1200] }, back: "IV_sv_place" }] }),

  IV_Q_ruches_feu: P({ title: "Le feu", place: "sauvelune",
    text: [
      "Tu enfumes les ruches. Tu prends les rayons blancs, un par un, et tu les jettes dans un feu de bruyère. Ils brûlent avec une flamme bleue, et une odeur de pré coupé, et en brûlant ils chantent un peu, comme des voix très lointaines.",
      "Tu ne sais pas ce que tu as brûlé. Des souvenirs de gens qui ne viendront jamais les chercher. Ou qui seraient venus.",
      { if: { has: "nord:rendu=sauvelune" }, text: "Mathurin te regarde faire sans rien dire. À la fin, il dit : « Ça se défend. » Il ne dit pas si c'est un compliment." },
    ],
    choices: [{ fx: { quest: "IV_Q_ruches", flag: "mathurin:iv" }, back: "IV_sv_place" }] }),

  // ---------------------------------------------------------------- Baudoin
  IV_Q_baudoin: P({ title: "Frère Baudoin", place: "pallanche",
    fx: { questSeen: "IV_Q_baudoin" },
    text: [
      "À l'un des dix pupitres du porche, un greffier jeune, au visage doux, à l'écriture d'écolier.",
      { with: "hylas", if: { has: "baudoin:sait" }, text: "« Frère Baudoin, te souffle Hylas. Du Bureau des Cessions. » Le greffier le reconnaît. Il pâlit. Il continue d'écrire les noms de la queue, mais sa plume tremble. Quand vous passez devant son pupitre, il glisse un papier plié sous ton coude, sans lever les yeux." },
      { if: { not: { all: [{ has: "baudoin:sait" }, { present: "hylas" }] } }, text: "Il ne te connaît pas. Mais quand tu arrives devant son pupitre, il lève les yeux, voit les tiens, gris presque blancs, et il arrête d'écrire. Il dit tout bas : « Pas ici. Ce soir, à Saint-Gilles, sous le porche. »" },
    ],
    choices: [{ label: "Le retrouver le soir", to: "IV_Q_baudoin_soir" }] }),

  IV_Q_baudoin_soir: P({ title: "Sous le porche", place: "pallanche",
    text: [
      "Il est venu, sans sa robe de greffier, dans un manteau de laine qui n'est pas à lui. Il a peur.",
      "« Je les écris, dit-il. Douze heures par jour. Et chaque soir, un greffier de l'étage descend avec une liste, et il coche des noms. Je ne sais pas ce que ça veut dire, les noms cochés. Je sais qu'ils ne reviennent jamais faire renouveler leur jeton. »",
      "Il sort de son manteau une liasse. « La liste de cette semaine. Je l'ai recopiée. Je ne sais pas à qui la donner. Aux Liseurs, on me pendrait. À la reine, elle ne la lirait pas. »",
    ],
    choices: [
      { label: "« Donne-la-moi. Et rentre chez toi, cette nuit. Ne reviens pas à la tour. »", fx: { item: "liste_cochee", flag: "baudoin:iv=parti", ep: ["perso", 1200] }, to: "IV_Q_baudoin_parti" },
      { label: "« Garde ta place. On aura besoin de quelqu'un dedans. »", fx: { item: "liste_cochee", flag: ["baudoin:iv=dedans", "pal:baudoin"], ep: ["perso", 1200] }, to: "IV_Q_baudoin_reste" },
    ] }),

  IV_Q_baudoin_parti: P({ title: "Rentrer", place: "pallanche",
    text: ["Il te donne la liasse. Il a l'air soulagé, puis terrifié d'être soulagé. « Ma mère est à Pont-de-Saule, dit-il. Elle croit que je suis quelqu'un d'important. » Il s'en va par la ruelle, vite, sans se retourner, et il ne remettra jamais les pieds à Pallanche."],
    choices: [{ fx: { quest: "IV_Q_baudoin" }, back: "IV_pal" }] }),

  IV_Q_baudoin_reste: P({ title: "Dedans", place: "pallanche",
    text: ["Il hoche la tête, lentement. « La nuit où vous entrerez, dit-il, je serai de garde au porche. Je ne verrai rien. Je suis très myope, quand je veux. » Il a un petit sourire tremblant. C'est la chose la plus courageuse qu'il ait faite de sa vie, et il le sait."],
    choices: [{ fx: { quest: "IV_Q_baudoin" }, back: "IV_pal" }] }),

  // ---------------------------------------------------------------- The Readers' gallows
  IV_Q_potence: P({ title: "La potence", place: "pallanche",
    fx: { questSeen: "IV_Q_potence" },
    text: [
      "Sur la place aux Clercs, à midi, on pend des Liseurs. Il y en a trois, ce jour-là, en robe grise, les mains liées. Une fille de vingt ans, un vieil homme, un garçon qui a l'air d'avoir quinze ans. Un greffier lit la sentence : *lecture publique de documents de la Chancellerie, sans autorisation.*",
      "La foule regarde. Personne ne dit rien. La queue, autour de la place, avance d'un pas.",
      { if: { has: "pal:orlan" }, text: "Dans la foule, à dix pas de toi, tu reconnais deux greffiers de la cave d'Orlan. Ils ont des couteaux dans leurs manches. Ils sont deux. Ils vont mourir aussi." },
    ],
    choices: [
      { label: "Couper les cordes, et se battre", to: "IV_Q_potence_combat" },
      { label: "Lire la liste, toi, à voix haute, plus fort que la sentence", hide: { not: { item: "liste_cochee" } }, test: { dom: "social", label: "La liste", help: [{ if: { present: "lisandre" }, v: 15 }, { if: { present: "linette" }, v: 10 }] },
        win: { fx: { flag: ["liseurs:sauves", "potence:lue"], ep: ["perso", 2000] }, to: "IV_Q_potence_lue" },
        lose: { to: "IV_Q_potence_combat" } },
      { label: "Ne rien faire. Pas maintenant. La tour d'abord", fx: { flag: "liseurs:pendus", quest: "IV_Q_potence" }, to: "IV_Q_potence_rien" },
    ] }),

  IV_Q_potence_combat: P({ title: "Midi",
    combat: { title: "La garde de la potence", enemies: [{ id: "garde_noir", n: 3 }], terrain: "ville", range: "contact",
      flee: { dom: "discretion", label: "Disparaître dans la queue avec les trois", fx: { flag: "liseurs:sauves" }, to: "IV_Q_potence_fin" },
      win: { fx: { flag: "liseurs:sauves", ep: ["seance", 2000] }, to: "IV_Q_potence_fin" },
      lose: { fx: { pv: -4, flag: "liseurs:un_sauve" }, to: "IV_Q_potence_fin" } },
    text: ["Tu montes sur l'estrade. Le bourreau se retourne, étonné. Derrière lui, les gardes noirs tirent l'épée."],
    choices: [] }),

  IV_Q_potence_lue: P({ title: "La liste", place: "pallanche",
    text: [
      "Tu montes sur la borne de la fontaine, et tu lis. Les noms cochés, cette semaine. Leur village, leur âge, le jour où ils sont venus chercher leur jeton.",
      "La queue s'arrête. Des gens se retournent. Une femme crie : « Mon frère ! » Puis un homme : « C'est ma voisine, elle n'est jamais revenue ! » La place bouge, d'un coup, comme une eau qu'on remue, et les gardes noirs regardent autour d'eux, et ils sont vingt, et la place est mille.",
      "Personne ne pend personne, ce midi-là. Dans la bousculade, les trois Liseurs disparaissent.",
    ],
    choices: [{ label: "Disparaître aussi", to: "IV_Q_potence_fin" }] }),

  IV_Q_potence_rien: P({ takes: "evening", title: "Midi", place: "pallanche",
    text: ["Tu ne fais rien. Tu regardes. Tu te forces à regarder jusqu'au bout, parce que c'est la seule chose que tu peux faire, et que quelqu'un doit avoir vu. Le soir, tu écris leurs trois noms sur le mur de la chambre, chez la Veuve, au charbon, au-dessus du lit."],
    choices: [{ back: "IV_pal" }] }),

  IV_Q_potence_fin: P({ title: "La cave", place: "pallanche",
    text: [
      { if: { all: [{ has: "liseurs:sauves" }, { has: "pal:orlan" }] }, text: "Le soir, dans la cave d'Orlan, la fille de vingt ans te serre la main. Elle s'appelle Aude. Elle était copiste au deuxième étage. « Je relirai, dit-elle. Demain. Sur une autre place. » Orlan éternue, et lui dit de se taire." },
      { if: { all: [{ has: "liseurs:sauves" }, { not: { has: "pal:orlan" } }] }, text: "Le soir, dans une cave où les Liseurs t'ont fait descendre, la fille de vingt ans te serre la main. Elle s'appelle Aude. Elle était copiste au deuxième étage. « Je relirai, dit-elle. Demain. Sur une autre place. » Un frère maigre, enrhumé, éternue, et lui dit de se taire." },
      { if: { has: "liseurs:un_sauve" }, text: "Tu n'as pu en sauver qu'un. Le garçon de quinze ans. Il ne parle pas. Il tient ta manche, toute la soirée, et il ne la lâche qu'en dormant." },
    ],
    choices: [{ fx: { quest: "IV_Q_potence", conf: { ysolde: 5, pie: 5, lisandre: 5 } }, back: "IV_pal" }] }),

  // ---------------------------------------------------------------- Thibaut
  IV_Q_thibaut: P({ title: "La prison du camp", place: "brenne",
    fx: { questSeen: "IV_Q_thibaut" },
    text: [
      "Dans la cour basse du fort, une cage de bois, et dans la cage, un soldat de vingt ans, les poignets enchaînés. On le pend à l'aube. Désertion.",
      { if: { has: "thibaut:sort=libre" }, text: "Un garde te dit son nom : Thibaut. L'un des quarante d'Ysolde, que la capitaine avait laissé filer, l'an dernier, avec sa femme et son enfant, de l'autre côté de la Lisse. Il est revenu." },
      { if: { has: "thibaut:sort=livre" }, text: "Tu le reconnais. Thibaut. L'un des quarante d'Ysolde, livré à la Chancellerie l'an dernier. On lui a pris quelque chose, au Bureau, et on l'a renvoyé à l'armée. Il ne sait plus pourquoi il avait déserté la première fois. Il a déserté quand même, la deuxième." },
      { if: { not: { any: [{ has: "thibaut:sort=libre" }, { has: "thibaut:sort=livre" }] } }, text: "Un garde te dit son nom : Thibaut, de la compagnie de Brenne. Déserteur deux fois. La première, la capitaine l'a repris. La deuxième, personne ne l'a repris : il est revenu de lui-même, avant-hier, et il s'est livré." },
      "« Ma femme est à Hautvent, dit-il. Je voulais la voir avant la bataille. Je suis revenu. Je savais qu'on me pendrait. Je suis revenu quand même. On ne déserte pas deux fois la même compagnie. »",
    ],
    choices: [
      { label: "Aller voir Ysolde", hide: { not: { any: [{ present: "ysolde" }, { has: "ysolde:pont" }] } }, fx: { flag: "thibaut:iv=ysolde", conf: { ysolde: 5 }, ep: ["perso", 1200] }, to: "IV_Q_thibaut_ysolde" },
      { label: "Aller voir la reine", hide: { not: { seen: "IV_br_reine" } }, test: { dom: "social", label: "La grâce", help: [{ if: { has: "isaure:brisee" }, v: 15 }] },
        win: { fx: { flag: "thibaut:iv=grace", ep: ["perso", 1500] }, to: "IV_Q_thibaut_grace" }, lose: { fx: { flag: "thibaut:iv=pendu" }, to: "IV_Q_thibaut_pendu" } },
      { label: "Ouvrir la cage, cette nuit", test: { dom: "discretion", label: "La cage", help: [{ if: { present: "pie" }, v: 20 }] },
        win: { fx: { flag: "thibaut:iv=evade", ep: ["perso", 1200] }, to: "IV_Q_thibaut_evade" }, lose: { fx: { flag: "thibaut:iv=pendu" }, to: "IV_Q_thibaut_pendu" } },
    ] }),

  IV_Q_thibaut_ysolde: P({ title: "La capitaine", place: "brenne",
    text: [
      "Ysolde descend à la cour basse. Elle regarde Thibaut à travers les barreaux. Il se met au garde-à-vous, avec ses chaînes.",
      "« Repos, dit-elle. Tu as quitté la compagnie pour voir ta femme. Tu es revenu à la compagnie. Pour moi, tu as pris une permission sans la demander. » Elle se tourne vers le garde. « Il est à moi. Il sera sur le pont demain, au premier rang, sans arme, à côté de moi. Si quelqu'un veut le pendre ensuite, il viendra me voir. »",
      "Personne ne vient la voir.",
    ],
    choices: [{ fx: { quest: "IV_Q_thibaut" }, back: "IV_br" }] }),

  IV_Q_thibaut_grace: P({ title: "La grâce", place: "brenne",
    text: ["La reine écoute. Elle signe la grâce sans lire jusqu'au bout. « J'ai pendu assez de garçons de vingt ans pour cette guerre-là, dit-elle. Sans la faire. » Elle te tend le papier. « Portez-le-lui vous-même. Je ne veux pas voir sa tête. Je la reconnaîtrais. »"],
    choices: [{ fx: { quest: "IV_Q_thibaut" }, back: "IV_br" }] }),

  IV_Q_thibaut_evade: P({ title: "La nuit", place: "brenne",
    text: ["La serrure de la cage est vieille. Tu l'ouvres. Thibaut sort, frotte ses poignets, et te regarde. « Si je passe la Lisse, je suis Corvannais, dit-il. Si je reste, je suis pendu. » Il réfléchit. « Je vais à Hautvent. C'est entre les deux. » Il disparaît dans le noir."],
    choices: [{ fx: { quest: "IV_Q_thibaut" }, back: "IV_br" }] }),

  IV_Q_thibaut_pendu: P({ title: "L'aube", place: "brenne",
    text: ["Tu n'y arrives pas. À l'aube, dans la cour basse, on pend Thibaut, de la compagnie de Brenne. Il dit son nom avant, très fort, et celui de sa femme, et celui de son village. Quelqu'un l'écrit."],
    choices: [{ fx: { quest: "IV_Q_thibaut" }, back: "IV_br" }] }),

  // ---------------------------------------------------------------- Lisse-en-Corvanne
  IV_Q_lisse: P({ title: "Lisse-en-Corvanne", place: "brenne",
    fx: { questSeen: "IV_Q_lisse" },
    text: [
      "Sur la rive de Corvanne, à une demi-lieue du pont, un village. Trente maisons, une chapelle, un lavoir. Personne n'y habite depuis trois ans. Les portes sont ouvertes, les volets tombés, et dans les jardins, les rosiers sont devenus des arbres.",
      "Dans la chapelle, le clocher est vide. Pas de cloche.",
      { if: { any: [{ has: "lisse:temoins_veulent" }, { has: "lisse:partis" }, { has: "iii:lisse_noms" }] }, text: "Tu sais où elle est, la cloche. Sous un clocher de Bourdonne, au bout du blanc, avec trois cents personnes assises dessous, qui attendaient quelqu'un." },
      "Sur le mur de la chapelle, quelqu'un a commencé à graver des noms, puis a arrêté. Il y en a douze.",
    ],
    choices: [
      { label: "Graver les autres", hide: { not: { has: "iii:lisse_noms" } }, fx: { flag: "lisse:noms_graves", ep: ["perso", 2500] }, to: "IV_Q_lisse_noms" },
      { label: "Graver ce que tu sais : la date, et trois cents", hide: { has: "iii:lisse_noms" }, fx: { flag: "lisse:date_gravee", ep: ["perso", 1000] }, to: "IV_Q_lisse_date" },
    ] }),

  IV_Q_lisse_noms: P({ takes: "morning", title: "Trois cents", place: "brenne",
    text: [
      "Tu les sais. Tu les as demandés, un par un, sous la cloche de Bourdonne, pour les porter. Tu les graves toute la nuit, avec ton couteau, puis avec celui de Rodric quand le tien casse.",
      { with: "ysolde", text: "Ysolde tient la lanterne. Elle ne dit rien. Elle lit chaque nom à mesure que tu le graves, à voix basse, pour s'en souvenir." },
      "À l'aube, des femmes de Corvanne sont venues. Elles regardent le mur. L'une d'elles pose le doigt sur un nom, et ne l'enlève pas.",
    ],
    choices: [{ label: "Repasser la Lisse, vers le camp", fx: { quest: "IV_Q_lisse", conf: { ysolde: 10 } }, to: "IV_br" }] }),

  IV_Q_lisse_date: P({ title: "La date", place: "brenne",
    text: ["Tu graves sous les douze noms : *Quatorze brumaire. Trois cents.* C'est tout ce que tu sais. Ce n'est pas assez. C'est mieux que rien. Tu te promets de revenir avec les autres, si un jour quelqu'un te les dit."],
    choices: [{ label: "Repasser la Lisse, vers le camp", fx: { quest: "IV_Q_lisse" }, to: "IV_br" }] }),
};
