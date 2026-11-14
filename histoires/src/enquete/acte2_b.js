// Act II · « La ville qui se tait », second part: the Tanneurs (the inn of the slap, the lock and its keeper, the house
// where Théophane lodged, the bargeman's mother, the bridge of the washerwomen) and the Haute-Ville (the watch, the cell,
// the house of the dead, the alderman who wants the Mint). Witnesses who live in two quarters have no `place` on their
// pages: speaking to them must not move the hero.

module.exports = {
  // ------------------------------------------------------------------ the inn of the slap
  T_lanterne: { act: "II", title: "La Lanterne Sourde", place: "tanneurs", rumeur: "lanterne", back: true,
    taverne: { mise: 2, adversaire: "un tanneur aux mains brunes" },
    text: [
      { first: true, text: "La Lanterne Sourde est une salle longue et basse, à moitié enterrée : on y descend par quatre marches, et les fenêtres sont au ras des pavés. Des bancs, des tables tachées, une cheminée où cuit une marmite de fèves. Le patron, un grand roux aux bras couverts de brûlures de chaux, sert lui-même. Au fond, sous une lanterne, une table ronde est réservée au jeu de Chandelle." },
      { again: true, when: "day", text: "La Lanterne Sourde, à cette heure, est presque vide : deux tanneurs qui mangent leurs fèves, le patron qui rince ses pots." },
      { again: true, when: "night", text: "La Lanterne Sourde est pleine. On chante, on joue, on se dispute ; la fumée de la cheminée descend jusqu'aux tables." },
    ],
    choices: [
      { label: "Demander au patron ce qui s'est passé ici, la veille de la fête", hide: { seen: "T_lanterne_gifle" }, fx: { clue: "m_querelle" }, to: "T_lanterne_gifle" },
    ] },
  T_lanterne_gifle: { act: "II", title: "La gifle", place: "tanneurs", back: true,
    text: [
      "Le patron essuie un pot, longtemps, avant de répondre.",
      "« Il est entré vers neuf heures, l'essayeur. Ici. Avec sa robe grise et sa bague d'or, au milieu des tanneurs, comme un évêque dans une porcherie. Il est allé droit au petit Maupas, qui buvait avec ses amis, là, à cette table. Il ne lui a rien demandé. Il l'a giflé, du revers, devant tout le monde. Et il a dit, assez fort pour qu'on entende jusque dans la rue : *Si tu t'approches encore de ma fille, je te fais jeter dans l'Aune.* »",
      "« Le petit n'a pas bougé. Il est devenu tout rouge, puis tout blanc, et il n'a pas bougé. Moi, j'en ai vu, des gars de dix-neuf ans qui se font gifler devant leurs amis. Ils cognent. Lui, il a regardé ses mains. » Il repose le pot. « L'essayeur est reparti. Le petit s'est assis à la table de Chandelle, à dix heures, avec la vieille Veillon. Comme si de rien n'était. »",
      "« Le guet m'a demandé si j'avais entendu la menace. J'ai dit oui. Ils n'ont rien demandé d'autre. »",
    ] },

  // ------------------------------------------------------------------ the money-changer, at night
  P_isaline_soir: { act: "II", title: "La table de Chandelle", place: "tanneurs", montrer: "isaline", back: true,
    fx: { meet: "isaline" },
    taverne: { mise: 3, adversaire: "Dame Veillon" },
    text: [
      { first: true, text: "Dame Isaline Veillon tient la table de Chandelle de la Lanterne Sourde comme elle tient son comptoir : droite, précise, sans un mot de trop. Elle a ôté ses lunettes ; ses yeux, sans elles, sont petits et très noirs. Devant elle, une pile de sous, un gobelet de cuir, un dé." },
      { again: true, text: "Dame Veillon, à sa table, fait rouler le dé dans son gobelet. « Assieds-toi ou passe, tu fais de l'ombre. »" },
      { regard: { isaline: ["cordial", "allie"] }, text: "Elle pousse un tabouret vers toi du bout du pied, sans lever les yeux du jeu." },
    ],
    choices: [
      { label: "Lui demander si le petit Maupas jouait ici, la nuit de la fête", hide: { clue: "m_isaline_hugon" }, to: "P_isaline_alibi" },
    ] },

  // ------------------------------------------------------------------ the lock-keeper
  P_barthe: { act: "II", title: "L'écluse des Tanneurs", place: "tanneurs", montrer: "barthe", back: true,
    fx: { meet: "barthe", clue: "m_ecluse" },
    text: [
      { first: true, text: "Barthe a soixante ans, les jambes arquées, une barbe blanche jaunie par la pipe, et des mains qui ont tiré des chaînes toute leur vie. Il garde l'écluse des Tanneurs depuis quarante ans ; il y est né, dans la petite maison de pierre accrochée à la porte d'amont." },
      { again: true, text: "Barthe s'appuie sur sa perche. « Encore vous. L'eau a pas changé depuis tout à l'heure. »" },
      { regard: { barthe: ["cordial", "allie"] }, text: "Il te tend sa blague à tabac sans un mot. C'est, chez lui, une grande marque d'amitié." },
      { first: true, text: "Tu lui demandes comment il a trouvé le corps." },
      { first: true, text: "« La nuit de la fête, les barques à lanternes descendent le canal jusqu'à une heure. Moi, je laisse les deux portes ouvertes, pour qu'elles passent. À une heure, la dernière est passée. J'ai fermé la porte d'amont, comme chaque nuit. Il faisait noir comme dans un four. Je suis allé me coucher. »" },
      { first: true, text: "« À cinq heures et demie, je me lève, j'ouvre la vanne, et je le vois. Contre les portes d'aval, la tête en bas, dans son manteau gris. Il avait passé la nuit à battre contre le bois, à chaque remous. La figure… » Il crache dans le canal. « Il n'avait plus de figure. Les portes, ça ne pardonne pas. »" },
      { first: true, text: "« Le noyé était forcément déjà dedans, à une heure. Après, plus rien n'entre : la porte d'amont est fermée, et je dors à côté. »" },
      { if: { has: "passe:fleuve" }, text: "Il te regarde plus attentivement, la tête penchée. « Toi, t'as été sur les barges. Ça se voit à la façon que t'as de regarder l'eau. T'étais à qui ? » Tu lui dis le nom du patron. Il hoche la tête : il l'a connu. Quelque chose, dans sa voix, se desserre." },
    ],
    choices: [
      { label: "Lui demander s'il a entendu quelque chose, cette nuit-là", if: { has: "passe:fleuve" }, hide: { any: [{ not: { has: "passe:fleuve" } }, { clue: "m_chaine" }] }, fx: { clue: "m_chaine", regard: { barthe: "cordial" } }, to: "P_barthe_chaine" },
    ] },
  P_barthe_chaine: { act: "II", title: "La chaîne", place: "tanneurs", montrer: "barthe", back: true,
    fx: { clue: "m_chaine" },
    text: [
      "Barthe tire sur sa pipe éteinte, et il regarde le canal vers l'amont, vers les Orfèvres, où les maisons blanches se perdent dans la brume.",
      "« Une chaîne, dit-il. Vers minuit moins le quart. Je fumais sur le pas de ma porte, en attendant les dernières barques. J'ai entendu une chaîne grincer, là-haut, du côté des Orfèvres. Une porte d'eau qu'on ouvre. C'est un bruit que je connais : j'en ai ouvert toute ma vie. Ça porte, sur l'eau, la nuit. On l'entend de loin comme si c'était à côté. »",
      "« Après, un peu après, un *plouf*. Un gros. Je me suis dit : un tonneau, des ordures, une bêtise de fête. Les gens jettent n'importe quoi à l'eau, la nuit des Lanternes. »",
      "Il se tait. Il regarde ses portes. « Je l'ai dit à personne. On m'a rien demandé. »",
    ] },

  // ------------------------------------------------------------------ the house where Théophane lodged
  P_garnaude: { act: "II", title: "La mère Garnaude", place: "tanneurs", montrer: "garnaude", back: true,
    fx: { meet: "garnaude", clue: "m_garnaude_pas" },
    text: [
      { first: true, text: "La mère Garnaude loue trois chambres au-dessus d'une boutique de cordier fermée depuis longtemps. Elle est petite, ronde, très vieille, et elle parle sans s'arrêter, en battant son tapis, ou en pliant du linge, ou en épluchant des raves : ses mains ne se reposent jamais." },
      { again: true, text: "La mère Garnaude, son tapis, ses raves. « Ah, c'est vous. Entrez, entrez, il fait froid sur le pas. »" },
      { if: { day: { min: 1, max: 1 } }, text: "Sur la table, un balluchon bien ficelé. « Je pars demain matin chez ma sœur, à Vieux-Gué. Je ne reste pas dans une maison où l'on vient la nuit chercher les affaires d'un garçon qui s'est enfui. Ça porte malheur. »" },
      { if: { day: { min: 2 } }, text: "Le balluchon est près de la porte. Une charrette attend dans la rue. « Je m'en vais, je m'en vais. Vous avez de la chance de m'attraper. »" },
      { first: true, text: "Tu lui demandes ce qu'elle a entendu, la nuit de la fête." },
      { first: true, text: "« Le petit Lescot ? Il est rentré à une heure passée, et reparti avant le jour. Je ne l'ai pas vu, j'ai entendu. Je dors mal, à mon âge. Il a monté l'escalier lentement, lourdement, en s'arrêtant au palier, comme un vieux. Lui qui monte quatre à quatre, d'habitude, que je lui dis toujours qu'il va me faire tomber le plafond sur la tête. J'ai pensé qu'il avait bu, pour la fête. Il ne boit jamais. »" },
      { first: true, text: "« Le matin, sa chambre était vide, et la lettre sur la table. C'est moi qui l'ai portée au guet. Un voleur ! Le petit Lescot ! Il me rendait toujours la monnaie de son loyer au sou près. »" },
    ],
    choices: [
      { label: "Lui demander de voir la chambre de Théophane", hide: { seen: "P_chambre" }, fx: { clue: "m_chambre" }, to: "P_chambre" },
    ] },
  P_chambre: { act: "II", title: "La chambre de Théophane", place: "tanneurs", back: true,
    text: [
      "La chambre est sous le toit, si basse qu'on ne s'y tient debout qu'au milieu. Un lit étroit, une table, une chaise, une planche fixée au mur en guise d'étagère. Une lucarne sur le canal. Tout est propre et nu.",
      "Le coffre au pied du lit est ouvert, vide. Le sac de voyage et les habits sont partis. Mais sur la planche, au-dessus du lit, il reste un rasoir, dans son étui de cuir, un peigne d'os, et un petit portrait de femme peint sur bois, pas plus grand que la main, dans un cadre de cuivre. « Sa mère, dit la mère Garnaude derrière toi. Morte quand il avait dix ans. Il lui disait bonsoir, le soir. Je l'entendais à travers le plancher. »",
      "La mère Garnaude s'est tue. Elle regarde le portrait aussi.",
    ],
    choices: [
      { label: "Soulever le matelas", hide: { clue: "d_essais" }, fx: { clue: "d_essais" }, to: "P_chambre_matelas" },
    ] },
  P_chambre_matelas: { act: "II", title: "Sous le matelas", place: "tanneurs", back: true,
    text: [
      "Le matelas est une paillasse mince. Dessous, sur les sangles, à plat, une feuille pliée en deux.",
      "Ce sont des chiffres. Une écriture ronde, droite, appuyée, d'écolier appliqué. Les fontes de l'année, une par ligne, avec leur date. Pour chacune, deux titres : celui du registre, toujours le même, *onze deniers*, et un autre, plus bas, qui change un peu d'une fonte à l'autre, mais toujours plus bas. *Dix et demi. Dix et demi. Dix, sept grains.*",
      "En marge, d'une encre plus fraîche, souligné deux fois : *Tous les jeudis. Toujours lui.*",
      "La mère Garnaude regarde par-dessus ton épaule. « Je ne sais pas lire, dit-elle. Mais ça, c'est son écriture. Il me faisait mes comptes, le petit. Des lettres comme des pommes. »",
    ] },
  P_garnaude_lettre: { act: "II", title: "La lettre sur la table", montrer: "garnaude", back: true,
    text: [
      "La mère Garnaude prend la lettre, la tourne dans ses mains sans la lire, et la pose sur la table.",
      "« Elle était là, dit-elle en tapotant le bois. Au milieu de la table, posée contre la chandelle. Je l'ai trouvée en montant, le matin. » Elle fronce les sourcils. « La chandelle était neuve. Pas même entamée. Je la lui avais donnée la veille. »",
      "Elle hausse les épaules et reprend ses raves. « On écrit pas dans le noir, que je me suis dit. Mais il y avait la lune, peut-être. Il y avait toutes ces lanternes sur l'eau. »",
    ] },
  P_garnaude_doigt: { act: "II", title: "Le petit doigt", montrer: "garnaude", back: true,
    fx: { clue: "m_doigt_theo" },
    text: [
      "La mère Garnaude cesse d'éplucher. Le couteau reste en l'air.",
      "« Le petit doigt de la main droite ? Tordu ? » Elle pose la rave. « Le petit avait ça. Il était tombé d'une charrette, quand il était chez l'orfèvre. Il me le montrait, pour me faire rire : il le faisait craquer. Et il se rongeait les ongles, je lui disais, tu vas finir par te manger les doigts. »",
      "Elle te regarde. Elle a compris quelque chose, ou elle a peur de l'avoir compris, et elle fait ce que font les vieilles femmes : elle reprend son couteau, et sa rave, et elle épluche, très vite.",
      "« Allez-vous-en, dit-elle. Je pars chez ma sœur. Je ne veux rien savoir. »",
    ] },

  // ------------------------------------------------------------------ the bargeman's mother
  P_gervaise: { act: "II", title: "Gervaise Maupas", back: true,
    fx: { clue: "m_querelle" },
    text: [
      { if: { place: "haute" }, text: "Gervaise Maupas attend au pied de la tour du Guet, son panier sur le bras. On ne la laisse monter qu'à neuf heures ; elle est là depuis six. Elle ne se plaint pas. Elle regarde la porte." },
      { if: { place: "tanneurs" }, text: "Gervaise Maupas lave le linge des autres dans une cuve, dans sa cour, les bras rouges jusqu'aux coudes. Elle s'essuie les mains à son tablier quand elle te voit, et elle te fait asseoir sur la seule chaise." },
      { first: true, text: "« Alors ? » C'est tout ce qu'elle dit. Elle ne te demande pas si tu as trouvé : elle demande si tu cherches encore." },
      { again: true, text: "« Alors ? » Elle te regarde, et elle attend, comme elle attend devant la tour." },
      { if: { day: { min: 3 } }, text: "Elle a mis sa robe du dimanche, la noire. « Pour ce soir, dit-elle. Pour l'Échevinage. Il faut qu'il me voie bien habillée. »" },
      { if: { has: "hugon:aveu" }, text: "Tu lui dis que Hugon t'a parlé. Elle ferme les yeux. « Il parle, maintenant, dit-elle. Il a fallu ça pour qu'il parle. »" },
    ],
    choices: [
      { label: "Lui demander ce que Hugon a fait, la nuit de la fête", hide: { clue: "m_sac" }, fx: { clue: "m_sac" }, to: "P_gervaise_nuit" },
      { label: "Lui demander comment Hugon a connu la fille de l'essayeur", hide: { seen: "P_gervaise_oriane" }, to: "P_gervaise_oriane" },
    ] },
  P_gervaise_nuit: { act: "II", title: "La nuit de Hugon",
    text: [
      "Gervaise regarde ses mains.",
      "« Il est rentré à minuit. Je ne dormais pas : je l'attendais, à cause de la gifle, toute la rue en parlait. Il n'a rien dit. Il a pris le sac où il range ses habits du dimanche, sa chemise neuve, ses souliers, et il est reparti sans un mot. Je lui ai demandé où il allait. Il m'a embrassée sur le front. Il ne m'embrasse jamais. »",
      "« Il est revenu à trois heures. Trempé jusqu'aux genoux, sans le sac, sans les souliers. Il s'est couché tout habillé, la figure contre le mur. Le matin, il est sorti avant moi. À midi, le guet était à ma porte. »",
      "« Je l'ai pas dit au guet, pour le sac. J'ai eu peur que ça fasse mauvais. »",
    ],
    choices: [{ back: "P_gervaise" }] },
  P_gervaise_oriane: { act: "II", title: "La fille de l'essayeur",
    text: [
      "« Au pont des Lavandières, dit Gervaise. Elle venait apporter le linge de sa maison, avec la servante. Le linge des riches, on le donne aux lavandières des Tanneurs : on le fait battre par des pauvres, il revient plus blanc. Hugon portait les paniers. Il avait dix-huit ans. »",
      "« Un an, ça a duré. Tous les soirs, au pont. Tout le quartier le savait, sauf l'essayeur. Et puis l'essayeur l'a su. » Elle hausse les épaules. « Ces choses-là, ça finit toujours mal. Je le lui avais dit. Il m'avait répondu que pas celle-là. »",
    ],
    choices: [{ back: "P_gervaise" }] },

  // ------------------------------------------------------------------ the daughter, on the bridge of the washerwomen
  P_oriane_pont: { act: "II", title: "Le pont des Lavandières", place: "tanneurs", montrer: "oriane", back: true,
    fx: { meet: "oriane", questSeen: "II_amants" },
    text: [
      { first: true, text: "Le pont des Lavandières n'est qu'une passerelle de planches posée sur le canal, avec une rambarde de corde. En dessous, sur les marches, les lavandières battent le linge et se taisent quand quelqu'un passe. Au milieu de la passerelle, une jeune fille en noir, un panier vide au bras, regarde l'eau couler vers l'écluse." },
      { first: true, text: "Elle a dix-huit ans, des tresses noires, une robe de deuil trop grande. Quand tu t'approches, elle ne s'en va pas. « Vous êtes la personne que la mère de Hugon a engagée, dit-elle. Les lavandières me l'ont dit. Elles disent tout. »" },
      { again: true, text: "Oriane est sur le pont, à sa place, le panier vide au bras. Elle te fait un petit signe de tête." },
      "« Je viens ici avec le linge, dit-elle, comme on se justifie. On ne peut pas m'empêcher de porter le linge. »",
      { regard: { oriane: ["cordial", "allie"] }, text: "Elle te regarde en face. « Vous allez le voir, à la tour. Ils me laissent pas monter, moi. Ma mère a dit au guet que si je montais, elle porterait plainte. »" },
    ],
    choices: [
      { label: "Lui proposer de porter un mot à Hugon", hide: { any: [{ has: "amants:message" }, { has: "amants:refus" }] }, fx: { regard: { oriane: "cordial" } }, to: "P_oriane_mot" },
      { label: "Lui demander pourquoi elle vient ici, sur ce pont précisément", hide: { seen: "P_oriane_pourquoi" }, to: "P_oriane_pourquoi" },
    ] },
  P_oriane_mot: { act: "II", title: "Un mot pour Hugon", place: "tanneurs", montrer: "oriane",
    text: [
      "Oriane rougit, d'un coup, jusqu'aux oreilles. Elle regarde l'eau, les lavandières, toi.",
      "« Vous feriez ça ? » Elle fouille dans son panier, n'y trouve rien, cherche dans sa manche. « Je n'ai pas de quoi écrire. Et puis, si on vous fouille… Dites-lui… »",
      "Elle s'arrête. Elle cherche longtemps, les lèvres serrées.",
      "« Dites-lui que j'ai attendu. Jusqu'à quatre heures. Que je n'ai pas cessé d'attendre. Et que je ne lui en veux pas. Il comprendra. »",
    ],
    choices: [
      { label: "Promettre de le lui dire mot pour mot", fx: { flag: "amants:message", regard: { oriane: "cordial" } }, to: "H_tanneurs" },
      { label: "Lui dire, après tout, que ce n'est pas ton rôle", fx: { flag: "amants:refus", regard: { oriane: "distant" } }, to: "H_tanneurs" },
    ] },
  P_oriane_pourquoi: { act: "II", title: "Le pont", place: "tanneurs", montrer: "oriane",
    text: [
      "Elle pose les coudes sur la corde de la rambarde.",
      "« C'est ici qu'on se voyait. Le soir, après le linge. Il disait qu'il connaissait tous les bateaux qui passent sous ce pont, et leurs patrons, et où ils vont. Il me les nommait, un par un. Basse-Aune, Vieux-Gué, la mer. Il disait qu'un jour on prendrait l'un d'eux. »",
      "Elle se tait. Une barge passe sous le pont, chargée de peaux, et le batelier lève la main vers elle, pour la saluer, comme on salue quelqu'un qu'on connaît. Elle lui rend son salut.",
      "« Tout le monde savait, dit-elle. Sauf mon père. Et quand il a su, il est allé à la Lanterne Sourde. » Elle n'en dit pas plus.",
    ],
    choices: [{ back: "P_oriane_pont" }] },

  // ------------------------------------------------------------------ the sergeant of the watch
  P_hallard: { act: "II", title: "La sergente Hallard", montrer: "hallard", back: true,
    fx: { meet: "hallard" },
    text: [
      { if: { place: "haute" }, text: "Le bureau de la sergente Hallard, au premier étage de la tour, est une pièce voûtée où il fait froid même l'été. Un registre ouvert, une chandelle, une épée pendue au mur, et une fenêtre étroite qui donne sur la place." },
      { if: { place: "tanneurs" }, text: "Tu marches à côté de la sergente le long du canal, pendant que ses deux hommes vont devant avec la lanterne. Elle a les mains dans le dos et elle regarde les portes, les fenêtres, les ombres : tout, sauf toi." },
      { first: true, if: { has: "passe:guet" }, text: "Elle te jauge d'un coup d'œil, de la tête aux bottes. « Vous avez été du guet, vous. Ailleurs. Ça se voit à la façon dont vous regardez les portes. » Ce n'est pas un compliment ; ce n'est pas un reproche non plus." },
      { first: true, text: "La sergente Hallard a cinquante ans, une cicatrice qui lui tire la bouche vers le bas, et la réputation d'être la seule personne du guet qu'on ne peut pas acheter. On dit aussi qu'elle ne revient jamais sur ce qu'elle a décidé." },
      { regard: { hallard: ["neutre", "distant", "mefiant"] }, text: "« L'affaire est jugée, dit-elle. Il ne manque que la cloche. J'ai un batelier qui avait la bague du mort dans la poche le lendemain matin, un mobile, une menace devant vingt témoins, et pas d'alibi. Vous m'apportez mieux, je vous écoute. Vous ne m'apportez rien, vous me faites perdre mon temps. »" },
      { regard: { hallard: "cordial" }, text: "« Vous, dit-elle. Asseyez-vous. Vous avez la tête de quelqu'un qui ne dort pas assez. Moi aussi. Qu'est-ce que vous avez trouvé ? »" },
      { regard: { hallard: "allie" }, text: "« Alors ? » Elle referme son registre. Depuis que tu lui as montré ce que tu sais, elle ne fait plus semblant de ne pas t'attendre." },
      { if: { all: [{ day: { min: 3 } }, { not: { has: "gaspard:pris" } }] }, text: "« C'est ce soir, dit-elle. À la cloche. Je témoignerai de l'arrestation. Après, ce sera aux échevins. »" },
      { if: { has: "gaspard:pris" }, text: "Elle a les yeux de quelqu'un qui n'a pas dormi. « Il n'a pas dit un mot de la nuit, en bas, dit-elle. Il a demandé l'heure. Deux fois. Je n'en dis rien à personne avant la cloche, et vous non plus. »" },
    ],
    choices: [
      { label: "Lui demander ce que le guet a fait pour retrouver Théophane Lescot", hide: { seen: "P_hallard_theo" }, to: "P_hallard_theo" },
    ] },
  P_hallard_theo: { act: "II", title: "Le second de l'essayeur", montrer: "hallard",
    text: [
      "« Rien, dit-elle. Ce n'est pas mon affaire. J'ai un mort, j'ai un coupable. Le second qui a pris l'argent de la Monnaie et filé, c'est l'affaire de la Monnaie. J'ai envoyé son signalement aux portes et au port, pour la forme. Un grand maigre, vingt-cinq ans, les cheveux châtains. Il y en a dix mille. »",
      "Elle se frotte les yeux. « Malestroit m'a dit de ne pas me fatiguer. Que la Monnaie s'en chargeait. Il a l'air de tenir beaucoup à ce qu'on ne s'en charge pas trop. »",
    ],
    choices: [{ back: "P_hallard" }] },
  P_hallard_doute: { act: "II", title: "Le doute", montrer: "hallard", back: true,
    fx: { regard: { hallard: "allie" }, flag: "hallard:allie" },
    text: [
      { first: true, text: "La sergente Hallard écoute jusqu'au bout sans t'interrompre, ce qui ne lui ressemble pas. Puis elle se lève, va à la fenêtre, et regarde dehors longtemps." },
      { first: true, text: "« Vingt-six ans que je fais ce métier, dit-elle sans se retourner. Je me suis trompée deux fois. Les deux fois, j'avais quelqu'un sous la main, et tout allait bien ensemble, et c'était plus simple que de chercher. » Elle se retourne. « Ça ne prouve rien. Ça ne suffit pas pour les échevins. Mais si vous arrivez devant eux avec ça, et avec le reste, je ne dirai pas le contraire. Je dirai que j'ai pu me tromper. »" },
      { again: true, text: "La sergente lit, ou écoute, et elle hoche la tête, une fois. « Encore une chose qui ne colle pas. Vous les collectionnez. » Elle le note dans son registre, de sa grosse écriture." },
    ] },
  P_hallard_brouette: { act: "II", title: "La porte d'eau", montrer: "hallard", back: true,
    fx: { regard: { hallard: "cordial" } },
    text: [
      "« La porte d'eau de l'Essai ? » La sergente fronce les sourcils. « Le corps était à l'écluse. On a regardé à l'écluse. Personne n'a pensé à remonter le canal. » Elle le dit sans s'excuser, comme on constate qu'il pleut.",
      "« Une brouette, une chaîne qu'on a tirée. Ça fait de quelqu'un qui sort quelque chose de lourd de chez l'essayeur, la nuit. Ça ne dit pas qui, ni quoi. » Elle note. « Mais ça ne fait pas un batelier qui croise un ivrogne sur un quai et le pousse à l'eau pour une bague. »",
    ] },
  P_hallard_mahu: { act: "II", title: "Mahu", montrer: "hallard", back: true,
    text: [
      "La sergente rit, un rire bref, qui lui tord encore plus la bouche.",
      "« Mahu ? Mahu a vu le second de l'essayeur monter sur une barge à l'aube du jour de la fête ? » Elle ouvre son registre, tourne trois pages, pose le doigt sur une ligne. « À l'aube du jour de la fête, Mahu cuvait dans ma cellule du rez-de-chaussée, où mes hommes l'avaient mis la veille au soir pour avoir uriné sur la porte de l'Échevinage. Il est sorti à midi. »",
      "« Il raconte ce qu'on veut entendre, à qui lui paie à boire. Il a vu le diable, la Dame Blanche et le roi de Basse-Aune. »",
    ] },
  P_hallard_alibi: { act: "II", title: "Une table de Chandelle", montrer: "hallard", back: true,
    fx: { regard: { hallard: "cordial" } },
    text: [
      "« Il jouait à la Chandelle à dix heures, et quelqu'un se disputait avec Ombreuil à dix heures. » La sergente se gratte la cicatrice. « D'accord. Ce n'était pas lui, dans la salle des essais. Ça ne dit pas où il était à une heure, quand l'autre était dans l'eau. »",
      "Elle referme le registre. « Mais je retiens. Quelqu'un est venu voir Ombreuil chez lui, ce soir-là, et ce n'était pas mon batelier. Qui, alors ? »",
    ] },

  // ------------------------------------------------------------------ the cell
  P_hugon: { act: "II", title: "La cellule", place: "haute", montrer: "hugon", back: true,
    fx: { meet: "hugon" },
    text: [
      { first: true, text: "Un garde te fait monter trois étages par un escalier en colimaçon, ouvre un judas, puis une porte. La cellule est une pièce de pierre de quatre pas sur trois, avec une fente pour fenêtre, une paillasse, un seau. Hugon Maupas est assis par terre, le dos au mur, les bras autour des genoux." },
      { first: true, text: "Il a dix-neuf ans, de larges épaules de batelier, des cheveux noirs coupés court par sa mère, et il a l'air d'un enfant. Il ne lève pas la tête." },
      { again: true, text: "Hugon est assis à sa place, contre le mur. Il lève les yeux quand la porte s'ouvre, et les baisse quand il voit que ce n'est que toi." },
      { regard: { hugon: ["neutre", "distant", "mefiant"] }, text: "Tu lui parles. Il ne répond pas. Il regarde la fente de lumière sur le mur d'en face comme s'il pouvait passer par là." },
      { regard: { hugon: ["cordial", "allie"] }, text: "« Vous êtes revenu{e} », dit-il. C'est la première fois qu'il dit quelque chose sans qu'on le lui demande." },
      { if: { day: { min: 3 } }, text: "« C'est ce soir, hein ? » Il ne pose pas vraiment la question." },
    ],
    choices: [
      { label: "Lui dire que c'est sa mère qui t'envoie, et qu'elle attend en bas tous les matins", hide: { regard: { hugon: ["cordial", "allie"] } }, fx: { regard: { hugon: "cordial" } }, to: "P_hugon_mere" },
      { label: "Lui demander ce qu'il a fait la nuit de la fête", regard: { hugon: ["cordial", "allie"] }, hide: { any: [{ clue: "m_hugon_heure" }, { has: "hugon:aveu" }] }, fx: { clue: "m_hugon_heure" }, to: "P_hugon_nuit" },
      { label: "Lui répéter les mots d'Oriane", if: { has: "amants:message" }, hide: { any: [{ not: { has: "amants:message" } }, { has: "amants:mot" }] }, fx: { flag: "amants:mot", quest: "II_amants", regard: { hugon: "allie" } }, to: "P_hugon_mot" },
    ] },
  P_hugon_mere: { act: "II", title: "La cellule", place: "haute", montrer: "hugon",
    text: [
      "Il ne bouge pas, mais quelque chose change dans sa façon de respirer.",
      "« Tous les matins ? » Il ne te regarde toujours pas. « Ils la laissent pas monter avant neuf heures. Elle doit être là depuis six. Elle a toujours été là trop tôt, partout. »",
      "Il frotte ses yeux avec la paume, très fort. « Dites-lui de rentrer. Dites-lui que je mange. C'est pas vrai, mais dites-lui. »",
    ],
    choices: [{ back: "P_hugon" }] },
  P_hugon_nuit: { act: "II", title: "Une heure", place: "haute", montrer: "hugon",
    text: [
      "Il se tait longtemps. Puis il parle, à voix basse, en regardant le mur, et tu sens qu'il choisit chaque mot pour ne pas dire les autres.",
      "« J'ai joué à la Lanterne. Après, je suis rentré chez ma mère. Après, je suis ressorti. Vers une heure, je suis passé à l'écluse, pour couper par le quai. Il était déjà dans l'eau, contre les portes d'aval. J'ai cru que c'était un sac. »",
      "« C'est tout. Je l'ai pas tué. Je l'ai pas poussé. Il était dans l'eau quand je suis arrivé. » Il serre les mâchoires. « Pour le reste, je dis rien. Ça regarde personne. »",
    ],
    choices: [{ back: "P_hugon" }] },
  P_hugon_mot: { act: "II", title: "Les mots d'Oriane", place: "haute", montrer: "hugon",
    text: [
      "Tu lui répètes ce qu'a dit Oriane, sur le pont, mot pour mot : qu'elle a attendu jusqu'à quatre heures, qu'elle n'a pas cessé d'attendre, et qu'elle ne lui en veut pas.",
      "Hugon ne bouge pas. Il ne dit rien. Puis il pose le front sur ses genoux, et ses épaules se mettent à trembler, et il pleure comme pleurent les garçons qui n'ont pas pleuré depuis l'enfance, en silence, avec tout le corps.",
      "Tu attends. Ça dure longtemps.",
      "« Dites-lui… » Il relève la tête, s'essuie le nez sur sa manche. « Dites-lui que la barge de sel est partie sans nous, et que c'est ma faute, et que je lui expliquerai. Si je sors. Dites-lui que si je sors, on prendra la prochaine. »",
    ],
    choices: [{ back: "P_hugon" }] },
  P_hugon_aveu: { act: "II", title: "La bague", place: "haute", montrer: "hugon", back: true,
    fx: { clue: ["m_hugon_heure", "m_bague_glisse"], flag: "hugon:aveu", regard: { hugon: "allie" } },
    text: [
      { first: true, text: "Tu lui dis ce que tu sais. Il t'écoute, la tête dans les bras. Quand tu as fini, il relève les yeux, et pour la première fois il te regarde en face." },
      { first: true, text: "« D'accord, dit-il. D'accord. Je vais vous dire. Mais vous le direz pas à sa mère à elle. Ni à son père, même mort. »" },
      { again: true, text: "Hugon soupire. « Je vous ai déjà tout dit. Mais je recommence, si vous voulez. »" },
      "« On devait partir, Oriane et moi. La nuit de la fête : personne ne fait attention à rien, la nuit de la fête. J'avais deux places sur une barge de sel qui descendait à une heure et demie. J'avais payé avec tout ce que j'avais, et encore il manquait. Le patron m'a dit : tu me donnes le reste en route, ou je vous débarque à Vieux-Gué. »",
      "« Après la gifle, j'ai joué à la Chandelle. Pour pas rentrer. Pour gagner un peu, aussi. J'ai perdu. À minuit, je suis passé prendre mon sac chez ma mère, je l'ai porté à la barge. Et à une heure, en allant au pont des Lavandières, j'ai coupé par l'écluse. »",
      "« Il était là. Contre les portes, dans l'eau. Il faisait noir. J'ai cru que c'était un sac. Je suis descendu sur la marche, j'ai tiré dessus, j'ai vu que c'était un homme. Il était mort. Il y avait une main qui sortait de l'eau, avec une bague. De l'or. » Il avale sa salive. « Je l'ai prise. Je n'ai même pas eu à tirer. Elle a glissé de son doigt comme d'un bâton. Je me suis dit : c'est le reste du passage. C'est un noyé de la fête, un ivrogne, il en a plus besoin. »",
      "« Je n'ai pas regardé sa figure. Je ne voulais pas. »",
      "« Après j'ai couru au pont. J'étais trempé. J'avais honte. Je n'ai rien dit à Oriane. À deux heures, la barge de sel était partie sans nous, avec mon sac. Oriane est rentrée chez elle. Moi, le matin, je suis allé vendre la bague, et la changeuse l'a reconnue. Et là j'ai compris à qui elle était. »",
      "Il hausse les épaules. « Si je dis que je l'ai volée sur un mort, on me pend pour vol. Si je dis que j'étais avec Oriane, on la traîne devant les échevins avec moi, et son père était… Alors j'ai rien dit. »",
    ] },
  P_hugon_oriane: { act: "II", title: "Une heure et demie", place: "haute", montrer: "hugon", back: true,
    text: [
      "Hugon te regarde sans comprendre.",
      "« Elle a vu son père ? À une heure et demie ? Sur le quai des Tanneurs ? » Il secoue la tête. « C'est pas possible. À une heure, il était… J'ai pris sa… »",
      "Il s'arrête net. Il regarde ses mains. Ses lèvres bougent, sans bruit, comme quand on compte.",
      "« Je n'ai pas regardé sa figure, dit-il enfin, très bas. Je vous jure que je n'ai pas regardé sa figure. »",
    ] },
  P_hugon_voix: { act: "II", title: "Dix heures", place: "haute", montrer: "hugon", back: true,
    text: [
      "« Une dispute, chez l'essayeur, à dix heures ? » Hugon a un petit rire, sans joie. « À dix heures, je perdais mes derniers sous contre la vieille Veillon, à la Lanterne. Elle peut le dire. Elle se souvient de tout ce qu'on lui doit. »",
      "Il réfléchit. « Oriane croit que c'était moi ? » Il ferme les yeux. « Elle a cru que j'étais allé chez lui. Après la gifle. » Il a l'air, d'un coup, à la fois blessé et heureux, comme si cette pensée-là lui faisait honneur et mal en même temps.",
    ] },

  // ------------------------------------------------------------------ the house of the dead
  H_corps: { act: "II", title: "La salle des morts", place: "haute", back: true,
    fx: { clue: "m_corps_main", meet: "ermeline" },
    text: [
      "La salle des morts de l'Hôtel-Dieu est une cave voûtée, fraîche, qui sent le vinaigre et la chaux vive. Sœur Ermeline, une petite femme sèche aux manches retroussées, lit le jeton de la sergente, hoche la tête, et soulève le drap.",
      "Tu as déjà vu des morts. Celui-là, tu le regardes vite, puis plus lentement. Le visage n'existe plus : les portes de l'écluse l'ont battu toute la nuit. Les cheveux sont châtains, mouillés encore, collés. Le corps est grand, maigre, plus maigre que tu ne l'aurais cru sous une robe d'essayeur.",
      "Ce sont les mains que tu regardes le plus longtemps. Les ongles sont rongés jusqu'à la chair, à chaque doigt. Et le petit doigt de la main droite est tordu, en dehors, avec une bosse à la deuxième phalange : un os cassé autrefois, et mal ressoudé.",
      { second: true, text: "À l'annulaire gauche, là où la bague était, la peau est à peine plus pâle. Pas de creux, pas de bourrelet : la marque légère d'un anneau qui n'a pas été porté longtemps." },
      "« On l'enterre demain à trois heures, dit Sœur Ermeline en remettant le drap. Après, ce sera trop tard pour regarder. »",
    ] },
  P_ermeline: { act: "II", title: "Sœur Ermeline", place: "haute", montrer: "ermeline", back: true,
    fx: { meet: "ermeline", clue: "m_corps_eau" },
    text: [
      { first: true, text: "Sœur Ermeline soigne les pauvres de l'Hôtel-Dieu depuis trente ans, lave les morts et les veille. Elle a de petits yeux gris, une voix douce et des mains rouges, et elle n'a peur de rien, sauf des échevins." },
      { again: true, text: "Sœur Ermeline pose sa bassine. « Oui ? »" },
      { first: true, text: "Tu lui demandes ce qu'elle a vu, en lavant le noyé de l'écluse." },
      { first: true, text: "Elle hésite. Elle regarde autour d'elle, la cour, les fenêtres. « On ne m'a rien demandé, dit-elle. Le médecin de l'Échevinage est venu, il a regardé de loin, il a dit *noyé*, il est reparti. »" },
      { first: true, text: "« Il n'avait ni eau ni écume dans la bouche. J'en ai lavé, des noyés, avec tous ces canaux. Un homme qui se noie se bat pour respirer : il avale l'eau, il a de l'écume aux lèvres, de la vase sous les ongles. Celui-là n'avait rien. Il ne respirait plus quand on l'a mis à l'eau. »" },
    ],
    choices: [
      { label: "Lui demander s'il avait une autre blessure que celles des portes", hide: { clue: "m_corps_tete" }, fx: { clue: "m_corps_tete" }, to: "P_ermeline_tempe" },
    ] },
  P_ermeline_tempe: { act: "II", title: "La tempe", place: "haute", montrer: "ermeline",
    text: [
      "Sœur Ermeline pose deux doigts sur sa propre tempe gauche, juste au-dessus de l'oreille.",
      "« Là. Une plaie carrée, aux bords nets. Comme si on l'avait frappé avec l'angle de quelque chose de taillé, de lourd. Une pierre d'angle, un marteau, je ne sais pas. » Elle laisse retomber sa main. « Les portes d'une écluse écrasent. Elles ne font pas des coins. »",
    ],
    choices: [{ back: "P_ermeline" }] },
  P_ermeline_poids: { act: "II", title: "Un coin", place: "haute", montrer: "ermeline", back: true,
    text: [
      { if: { clue: "m_poids" }, text: "Tu lui décris le logement vide du coffret de l'Essai : un cube de laiton, de la taille d'un poing, le plus gros des poids." },
      { if: { not: { clue: "m_poids" } }, text: "Tu lui reparles de la plaie à la tempe." },
      { if: { clue: "m_poids" }, text: "Sœur Ermeline réfléchit, les yeux fermés, comme si elle revoyait la plaie. Elle forme un poing, regarde l'angle de ses phalanges. « Un cube de laiton. Lourd. » Elle rouvre les yeux. « Oui. Ça ferait ça. Exactement ça. Un seul coup, de quelqu'un qui est debout, en face, et qui tient la chose dans sa main droite. »" },
      { if: { not: { clue: "m_poids" } }, text: "« Je l'ai dit au médecin, dit-elle. Il m'a répondu que les sœurs devraient laisser les morts aux médecins. Ce que je sais, c'est qu'il a été frappé une fois, fort, par quelqu'un qui était debout en face de lui. Pas par une porte. »" },
    ] },

  // ------------------------------------------------------------------ the alderman who wants the Mint
  P_brisson: { act: "II", title: "L'échevin Brisson", place: "haute", montrer: "brisson", back: true,
    fx: { meet: "brisson" },
    text: [
      { first: true, text: "L'échevin Brisson est gros, rose, bien nourri, et il te prend le bras comme à un vieil ami avant même de savoir ton nom. Il connaît tout le monde, il serre toutes les mains, il rit fort ; et ses yeux, pendant qu'il rit, comptent qui le regarde." },
      { again: true, text: "Brisson te reconnaît de loin et lève la main. « Mon enquêteur ! Mon enquêteur préféré ! »" },
      { first: true, text: "« L'affaire Maupas ? Triste, triste. Un bon garçon, dit-on, mal parti. » Il baisse la voix. « Mais entre nous, l'affaire n'est pas le petit Maupas. L'affaire, c'est la Monnaie. Il se passe des choses à la Monnaie. Je ne dis rien. Je n'ai rien dit. »" },
    ],
    choices: [
      { label: "Lui demander s'il a vu Malestroit au banquet des échevins, la nuit de la fête", hide: { clue: "r_herault" }, fx: { clue: "r_herault" }, to: "P_brisson_banquet" },
    ] },
  P_brisson_banquet: { act: "II", title: "Le banquet", place: "haute", montrer: "brisson",
    text: [
      "Brisson sourit comme un chat devant un bol de crème.",
      "« Malestroit ? Oh, il y était. Au début. Il a fait son discours, il a levé son verre au prince, il s'est assis à la droite du premier échevin. Et puis, avant onze heures, il s'est levé, il est sorti par la petite porte, celle des cuisines. Je l'ai vu. Je vois tout, dans un banquet : c'est un métier. »",
      "« Il est revenu vers minuit. Les souliers mouillés, les bas crottés jusqu'à la cheville. Il s'est rassis comme si de rien n'était, il a repris du canard. Moi, je remarque ces choses-là. » Il te tapote le bras. « Je ne dis pas qu'il a fait quoi que ce soit. Je dis qu'il n'était pas où il dit qu'il était. C'est tout. C'est déjà beaucoup, pour un maître de la Monnaie, à trois semaines des élections. »",
    ],
    choices: [{ back: "P_brisson" }] },
  P_brisson_offre: { act: "II", title: "Une offre", place: "haute", montrer: "brisson", back: true,
    text: [
      "Brisson lit, ou écoute, et son sourire s'élargit lentement, jusqu'aux oreilles.",
      "Il t'entraîne sous les arcades, à l'écart, et il parle très vite, très bas, la main sur ton épaule. « Écoutez-moi. Ce que vous tenez là, c'est la tête de Malestroit. À la cloche, le jour de l'audience, vous le dites devant les échevins : Malestroit a menti sur sa nuit, Malestroit couvre un vol à la Monnaie, Malestroit avait toutes les raisons de vouloir l'essayeur mort. Je vous soutiens. Les échevins m'écoutent. Le petit Maupas sort libre, la mère vous bénit, et moi… » Il sourit. « Moi, je prends la Monnaie, et je ne suis pas un ingrat. »",
      "Il sort une bourse de sa manche, la soupèse. « Dix écus. Maintenant. Autant après. »",
    ],
    choices: [
      { label: "Prendre la bourse", hide: { any: [{ has: "brisson:paye" }, { has: "brisson:refus" }] }, fx: { flag: "brisson:paye", gold: 200, regard: { brisson: "allie" } }, to: "P_brisson_pris" },
      { label: "Lui dire que tu ne travailles pas pour lui", hide: { any: [{ has: "brisson:paye" }, { has: "brisson:refus" }] }, fx: { flag: "brisson:refus", regard: { brisson: "hostile" } }, to: "P_brisson_refus" },
    ] },
  P_brisson_pris: { act: "II", title: "Dix écus", place: "haute", back: true,
    text: [
      "La bourse est lourde, et chaude de sa manche. Brisson te serre la main, longuement, des deux siennes.",
      "« À la cloche, dit-il. Je compte sur vous. » Il s'éloigne en saluant à droite et à gauche, et tu restes sous les arcades avec dix écus et l'impression d'avoir avalé quelque chose de froid.",
    ] },
  P_brisson_refus: { act: "II", title: "Les arcades", place: "haute", back: true,
    text: [
      "Brisson remet la bourse dans sa manche sans cesser de sourire. Seuls ses yeux ont changé.",
      "« Comme vous voudrez. Vous êtes jeune. » Il te tapote l'épaule, plus fort qu'il ne faudrait. « On se reverra à la cloche. Je suis curieux de voir ce que vous direz, sans amis. »",
    ] },
  P_brisson_manche: { act: "II", title: "La manche", place: "haute", montrer: "brisson", back: true,
    text: [
      "Brisson éclate de rire, si fort qu'un clerc se retourne sous les arcades.",
      "« Du sang ! On dit ça ? Charmant. Charmant. » Il s'essuie les yeux. « C'est du vin, mon ami. Du vin de Bourgonne. C'est moi qui le lui ai renversé dessus, au début du banquet, en lui portant un toast. Exprès ? Peut-être. Il était si fier de son pourpoint. » Il redevient grave, d'un coup, comme on ferme un volet. « Mais si on le dit, à la Lanterne… Les gens disent tant de choses. Je ne vais pas les en empêcher. »",
    ] },
};
