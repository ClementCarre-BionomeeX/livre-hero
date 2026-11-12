// Act IV · companion chapters, in the manner of the personal quests of the old console epics: Ysolde in the crypt of
// Brenne (the stag under the wolf), Pie and old Corneille, Hylas looking for Marion Lebas, Lisandre's song of Lisse,
// the Sans-Nom and the child who does not forget him, Rodric's three bells, Gaspard's bread for both banks.
var A = { act: "IV", noLead: true };
function P(o) { return Object.assign({}, A, o); }
module.exports = {
  // ---------------------------------------------------------------- Ysolde: the crypt of Brenne
  IV_C_ysolde: P({ title: "La crypte de Brenne", place: "brenne",
    fx: { questSeen: "IV_C_ysolde" },
    text: [
      "La nuit, Ysolde prend une lanterne et descend sous le fort. Elle te fait signe de la suivre. Un escalier taillé dans le rocher, une porte de chêne, une crypte basse où dorment les seigneurs de Brenne, couchés sur leurs tombeaux, les mains jointes sur leurs épées de pierre.",
      "« Je venais ici enfant, dit-elle. Mon père m'apprenait leurs noms. Tous ont le loup sur la tour. » Elle lève la lanterne vers le fond. « Sauf le premier. Il n'a rien. Son écu est lisse. On disait qu'il avait été effacé par l'humidité. »",
      "Le premier tombeau. Un jeune homme, maigre, le visage d'un garçon. Sur son écu de pierre, rien. Une surface polie, trop polie.",
    ],
    choices: [{ label: "Approcher la lanterne", to: "IV_C_ysolde2" }] }),

  IV_C_ysolde2: P({ title: "L'écu lisse", place: "brenne",
    text: [
      "À la lumière rasante, sous le poli, on voit un dessin gratté. Des bois. Une tête. Un cerf.",
      { if: { has: "proces:cerf=rendu" }, text: "Ysolde le sait déjà. Elle le sait depuis une nuit d'hiver où elle s'est réveillée avec l'odeur de la suie dans le nez. Elle pose la main à plat sur l'écu. « Raoul, dit-elle. Dix-neuf ans. Il a pleuré sur un muret. » Elle ne retire pas sa main." },
      { if: { not: { has: "proces:cerf=rendu" } }, text: "Ysolde passe le doigt dans les rainures. « Un cerf, dit-elle. Pourquoi est-ce qu'on aurait effacé un cerf ? » Elle se tourne vers toi. Tu sais pourquoi. Tu l'as été, une heure, dans la glace de Valcendre." },
    ],
    choices: [
      { label: "Lui dire ce que tu as vu dans la glace", hide: { has: "proces:cerf=rendu" }, fx: { flag: "ysolde:sait_cerf", conf: { ysolde: 10 }, ep: ["perso", 1500] }, to: "IV_C_ysolde_dit" },
      { label: "Ne rien dire", hide: { has: "proces:cerf=rendu" }, fx: { flag: "ysolde:cerf_tu" }, to: "IV_C_ysolde_choix" },
      { label: "Attendre qu'elle décide", hide: { not: { has: "proces:cerf=rendu" } }, to: "IV_C_ysolde_choix" },
    ] }),

  IV_C_ysolde_dit: P({ title: "Raoul", place: "brenne",
    text: ["Tu lui dis tout. La barque, la torche, la maison ronde, la vieille femme qui chantait les noms et qui n'a pas arrêté. Le premier coup, le seul qui coûte. Le muret, à l'aube. Elle écoute sans bouger, la main sur l'écu. À la fin, elle dit : « Merci. » Tu ne sais pas pour quoi."],
    choices: [{ label: "Attendre qu'elle décide", to: "IV_C_ysolde_choix" }] }),

  IV_C_ysolde_choix: P({ title: "Les armes", place: "brenne",
    text: ["Ysolde tire de sa ceinture la dague de son père. Elle regarde le loup sur le pommeau, puis l'écu lisse."],
    choices: [
      { label: "Elle regrave le cerf sur l'écu de Raoul", fx: { flag: ["ysolde:armes=cerf", "brenne:cerf"], quest: "IV_C_ysolde", ep: ["perso", 1500] }, to: "IV_C_ysolde_cerf" },
      { label: "Elle grave le cerf sous le loup, sur son propre écu", fx: { flag: ["ysolde:armes=deux", "brenne:cerf"], quest: "IV_C_ysolde", conf: { ysolde: 5 }, ep: ["perso", 1500] }, to: "IV_C_ysolde_deux" },
      { label: "Elle laisse l'écu lisse", fx: { flag: "ysolde:armes=loup", quest: "IV_C_ysolde" }, to: "IV_C_ysolde_lisse" },
    ] }),

  IV_C_ysolde_cerf: P({ title: "Le cerf", place: "brenne",
    text: ["Elle grave toute la nuit, à genoux sur le tombeau, avec la pointe de la dague, en suivant les rainures. À l'aube, le cerf est revenu sur l'écu du premier Brenne, maladroit, profond. « Qu'on sache qui c'était, dit-elle. Qu'on vienne le voir. Il n'a pas le droit d'être lisse. »"],
    choices: [{ back: "IV_br" }] }),

  IV_C_ysolde_deux: P({ title: "Le loup et le cerf", place: "brenne",
    text: ["Elle ne touche pas au tombeau. Elle prend son écu à elle, celui de la compagnie, et sous le loup sur la tour, elle grave un petit cerf, dans le coin, de travers. « Le loup, c'est ce qu'on a voulu être, dit-elle. Le cerf, c'est ce qu'on a été. Je porte les deux. » Le lendemain, Gautier le voit, et ne dit rien, et le surlendemain, il y a un petit cerf gravé sur quarante écus."],
    choices: [{ back: "IV_br" }] }),

  IV_C_ysolde_lisse: P({ title: "Lisse", place: "brenne",
    text: ["Elle rengaine la dague. « Pas maintenant, dit-elle. Après le pont. Si je le grave maintenant, je le grave pour me punir. Je veux le graver pour lui. » Elle souffle la lanterne. Vous remontez dans le noir."],
    choices: [{ back: "IV_br" }] }),

  // ---------------------------------------------------------------- Pie: old Corneille
  IV_C_pie: P({ title: "L'atelier du faussaire", place: "pallanche",
    fx: { questSeen: "IV_C_pie" },
    text: [
      "Pie t'emmène, un soir, dans une ruelle derrière les Teinturiers, devant une porte basse au heurtoir en forme de main. Il ne frappe pas tout de suite.",
      { if: { has: "corneille:noye" }, text: "« Il habitait ici, dit-il. Maître Corneille. » Il pousse la porte. L'atelier est vide, poussiéreux, les outils rangés sur l'établi comme si quelqu'un allait revenir. Personne ne reviendra. Pie le sait mieux que quiconque. Il a encore, certaines nuits, la vase de la Pallante sous les ongles." },
      { if: { not: { has: "corneille:noye" } }, text: "« Il habite ici, dit-il. Maître Corneille. Celui qui m'a appris. Celui qui a vendu Linette. » Il frappe. Une voix de vieillard, à l'intérieur, dit d'entrer, que c'est ouvert, que ce n'est jamais fermé, qu'il n'y a plus rien à voler." },
    ],
    choices: [
      { label: "Entrer", hide: { has: "corneille:noye" }, to: "IV_C_pie_corneille" },
      { label: "Entrer dans l'atelier vide", hide: { not: { has: "corneille:noye" } }, to: "IV_C_pie_vide" },
    ] }),

  IV_C_pie_corneille: P({ title: "Maître Corneille", place: "pallanche",
    text: [
      "Il est assis devant l'établi, sous une lampe, et il grave des jetons de plomb. Des faux. Les plus beaux faux jetons de Pallanche, la plume et la clé dans le bon sens, le plomb dur. Il a quatre-vingts ans, des mains qui ne tremblent pas.",
      "« Le petit, dit-il sans lever les yeux. Tu travailles pour lui, maintenant, à ce qu'on dit. Comme moi, avant. »",
      { if: { has: "linette:iv=libre" }, text: "Pie dit : « Elle est dehors. Linette. Elle sait lire. Elle sait qui elle est. » Corneille arrête de graver. Il pose le burin. Il ne dit rien pendant longtemps. Puis il dit : « Bien. » Et sa voix se casse sur ce seul mot." },
      { if: { not: { has: "linette:iv=libre" } }, text: "Pie dit : « Elle est encore là-haut. Linette. » Corneille ne lève pas les yeux. « Je sais. Je la vois passer, le dimanche, en rang. Je sais ce que j'ai fait. Je grave des jetons pour ne pas y penser. »" },
    ],
    choices: [{ label: "Laisser Pie parler", to: "IV_C_pie_matrice" }] }),

  IV_C_pie_matrice: P({ title: "La matrice", place: "pallanche",
    text: [
      "Pie ne crie pas. Il regarde les outils. Il dit : « Le sceau de la Chancellerie. Le vrai. Tu en as fait une matrice, autrefois, pour lui, quand il a commencé. Je le sais, je t'ai vu. »",
      "Corneille ouvre un tiroir, sous l'établi. Il en sort un petit cylindre de bronze, enveloppé dans un chiffon. « Je l'ai gardée, dit-il. Je ne sais pas pourquoi. Pour un jour comme celui-là, peut-être. » Il la pose dans la main de Pie. « Avec ça, tu peux écrire n'importe quoi dans son livre, et il croira l'avoir écrit de sa main. »",
      "Pie referme la main dessus. Il regarde le vieil homme. Il ne lui pardonne pas. Il ne lui dit pas non plus qu'il ne lui pardonne pas.",
    ],
    choices: [{ label: "Partir", fx: { item: "matrice_sceau", flag: "pie:matrice", quest: "IV_C_pie", conf: { pie: 10 }, ep: ["perso", 1500] }, to: "IV_pal" }] }),

  IV_C_pie_vide: P({ title: "L'atelier vide", place: "pallanche",
    text: [
      "Pie fait le tour de l'atelier sans rien toucher. Il s'arrête devant l'établi. Il ouvre le tiroir du dessous, celui que Corneille fermait toujours à clé, et qui ne l'est plus.",
      "Dedans, un petit cylindre de bronze, dans un chiffon. La matrice du sceau de la Chancellerie, celle que Corneille avait faite pour Mordace, autrefois. Et, sous le chiffon, un papier plié. Une écriture penchée, tremblée : *Pour le petit. S'il revient. Je sais ce que j'ai fait.*",
      "Pie lit le papier deux fois. Il le plie. Il le met dans sa chemise, contre la peau. Il prend la matrice.",
      "« Je ne savais pas qu'il savait écrire autre chose que des faux », dit-il. C'est tout ce qu'il dit, ce soir-là.",
    ],
    choices: [{ label: "Partir", fx: { item: "matrice_sceau", flag: "pie:matrice", quest: "IV_C_pie", ep: ["perso", 1500] }, to: "IV_pal" }] }),

  // ---------------------------------------------------------------- Hylas: Marion Lebas
  IV_C_hylas: P({ title: "Marion Lebas", place: "pallanche",
    fx: { questSeen: "IV_C_hylas" },
    text: [
      "« Il y avait une femme, dit Hylas, l'an dernier, au Bureau des Cessions. Marion Lebas. Elle voulait céder la nuit où son mari l'avait battue. Deux sous. » Il tapote sa canne. « Je voudrais savoir ce qu'elle est devenue. C'est ridicule. Il y a des milliers de Marion Lebas. Je ne connais que celle-là. »",
      "Vous la cherchez une journée, de rue en rue. La Veuve finit par savoir : une lavandière, rue des Bassins, avec deux enfants.",
    ],
    choices: [{ label: "Aller rue des Bassins", to: "IV_C_hylas_marion" }] }),

  IV_C_hylas_marion: P({ title: "Rue des Bassins", place: "pallanche",
    text: [
      "Elle lave du linge au bassin, les manches retroussées, les bras rouges. Elle a trente ans. Elle voit Hylas, sa canne, ses yeux blancs, et elle s'arrête de frotter.",
      { if: { has: "hylas:annule" }, text: "« Vous, dit-elle. Le vieux greffier. Celui qui a déchiré mon reçu. » Elle s'essuie les mains. « Je vous en ai voulu, vous savez. J'ai gardé la nuit. Je l'ai gardée tout l'hiver. Et au printemps, je suis partie. Avec les enfants. Je n'aurais pas pu partir si je ne m'étais pas souvenue pourquoi. » Elle a un rire bref. « Je ne vous remercie pas. Mais je suis partie. »" },
      { if: { has: "marion:garde" }, text: "« Vous, dit-elle. Le vieux greffier. Celui qui m'a demandé si j'étais sûre. » Elle s'essuie les mains. « Je n'étais pas sûre. Je suis repartie avec mes deux sous et ma nuit. Je l'ai encore. Je suis partie de chez lui au printemps. » Elle reprend son linge. « Vous m'avez juste posé une question. C'est beaucoup, une question. »" },
      { if: { not: { any: [{ has: "hylas:annule" }, { has: "marion:garde" }] } }, text: "Elle ne le reconnaît pas. Elle n'a aucune raison de le reconnaître. Elle a cédé sa nuit, il y a un an, pour deux sous. Elle a un bleu sur la pommette. Elle vit toujours avec lui. Elle ne sait pas pourquoi elle reste. Elle ne se souvient pas d'avoir eu une raison de partir." },
    ],
    choices: [
      { label: "Laisser Hylas lui parler", hide: { any: [{ has: "hylas:annule" }, { has: "marion:garde" }] }, to: "IV_C_hylas_bocal" },
      { hide: { not: { any: [{ has: "hylas:annule" }, { has: "marion:garde" }] } }, fx: { quest: "IV_C_hylas", conf: { hylas: 10 }, ep: ["perso", 1200] }, back: "IV_pal" },
    ] }),

  IV_C_hylas_bocal: P({ title: "Le bocal", place: "pallanche",
    text: [
      "Hylas lui dit, très doucement, qu'elle a cédé quelque chose, il y a un an, et que c'est dans un bocal, au premier étage de la tour, avec son nom sur l'étiquette. Il ne lui dit pas quoi.",
      "Elle le regarde longtemps. « Est-ce que c'était important ? »",
      "Hylas réfléchit. Il ne ment jamais. « Je crois que c'était la chose la plus importante que vous sachiez. »",
      "Elle hoche la tête. Elle reprend son linge. Quand vous partez, elle frotte toujours, mais beaucoup plus lentement, comme quelqu'un qui pense à autre chose.",
    ],
    choices: [{ fx: { quest: "IV_C_hylas", flag: "marion:iv=sait", ep: ["perso", 1200] }, back: "IV_pal" }] }),

  // ---------------------------------------------------------------- Lisandre: the song of Lisse
  IV_C_lisandre: P({ title: "La chanson de Lisse", place: "brenne",
    fx: { questSeen: "IV_C_lisandre" },
    text: [
      "Au retour du camp de Corvanne, Lisandre ne dort pas. Elle s'assied sur la berge, avec son luth, face au pont, et elle accorde, et elle désaccorde, et elle recommence.",
      "« Il faut une chanson, dit-elle. Pour demain. Pas une ballade de cour. Une chanson que les deux rives connaissent déjà, et à laquelle il manque un couplet. » Elle pince une corde. « La chanson des mariniers, celle de Rodric. Elle a sept couplets. On n'en chante que six, des deux côtés. Le septième, personne ne le sait plus. »",
    ],
    choices: [
      { label: "L'aider à écrire le septième", test: { dom: "social", label: "Le couplet", help: [{ if: { present: "rodric" }, v: 15 }, { if: { has: "lisse:noms_graves" }, v: 15 }, { if: { souv: "lisandre:voix" }, v: 10 }] },
        win: { fx: { flag: "lisandre:chanson_lisse", conf: { lisandre: 10 }, quest: "IV_C_lisandre", ep: ["perso", 2000] }, to: "IV_C_lisandre_couplet" },
        lose: { fx: { quest: "IV_C_lisandre" }, to: "IV_C_lisandre_rate" } },
    ] }),

  IV_C_lisandre_couplet: P({ title: "Le septième couplet", place: "brenne",
    text: [
      { with: "rodric", text: "Vous y passez la nuit. Rodric, réveillé, vient fredonner l'air. À l'aube, il y a un couplet. Il parle d'un pont où l'on passe sans arme, d'une chèvre, d'une barque qui a fait onze voyages. Il n'a pas de rime riche. Lisandre dit que c'est très bien comme ça." },
      { without: "rodric", text: "Vous y passez la nuit. À l'aube, il y a un couplet. Il parle d'un pont où l'on passe sans arme, d'une chèvre, d'une barque qui a fait onze voyages. Il n'a pas de rime riche. Lisandre dit que c'est très bien comme ça." },
      "« Je le chanterai demain, dit-elle. Si quelqu'un, de l'autre côté, le reprend, on aura gagné quelque chose. Je ne sais pas quoi. Quelque chose. »",
    ],
    choices: [{ back: "IV_br" }] }),

  IV_C_lisandre_rate: P({ title: "Six couplets", place: "brenne",
    text: ["Vous cherchez toute la nuit. Rien ne vient. Lisandre finit par poser le luth dans l'herbe. « Tant pis, dit-elle. On chantera les six. Les gens savent bien qu'il en manque un. C'est peut-être ça, la chanson. »"],
    choices: [{ back: "IV_br" }] }),

  // ---------------------------------------------------------------- The Sans-Nom: Ilse
  IV_C_sansnom: P({ title: "Ilse", place: "brenne",
    fx: { questSeen: "IV_C_sansnom" },
    text: [
      "À Hautvent, ton frère s'est assis sur un banc, devant la maison de Maëlle, sans masque. Les femmes passent devant lui, le voient, l'oublient, le revoient. Il a l'habitude.",
      "Ilse, sept ans, avec sa poupée, vient s'asseoir à côté de lui. Elle lui montre sa poupée. Il la regarde. Elle s'en va jouer. Elle revient, un quart d'heure plus tard. « Re-bonjour, dit-elle. Tu es toujours là. »",
      "Ton frère se fige. « Tu te souviens de moi ? »",
      "« Ben oui, dit Ilse. Tu es le monsieur qui regarde ma poupée. »",
    ],
    choices: [{ label: "Laisser ton frère avec elle", to: "IV_C_sansnom2" }] }),

  IV_C_sansnom2: P({ title: "Les enfants", place: "brenne",
    text: [
      "Il passe l'après-midi avec elle. Elle ne l'oublie pas. Les autres enfants du village viennent, un par un, et certains l'oublient, et d'autres non. Ceux qui ne l'oublient pas sont les plus petits.",
      "Le soir, il vient te trouver. « Les petits, dit-il. Ceux qui n'ont pas encore appris à oublier. Ils me gardent. » Il a l'air de quelqu'un qui a reçu un cadeau trop grand et qui ne sait pas où le poser.",
      { if: { has: "sansnom:page" }, text: "« Ildaën, dit-il encore. Elle m'a demandé mon nom. Je le lui ai dit. Elle l'a répété. Elle l'a donné à sa poupée. » Il rit. C'est la première fois que tu l'entends rire comme ça." },
    ],
    choices: [{ fx: { flag: "sansnom:ilse", conf: { sansnom: 15 }, quest: "IV_C_sansnom", ep: ["perso", 1500] }, back: "IV_br" }] }),

  // ---------------------------------------------------------------- Gaspard: the bread of the eve
  IV_C_gaspard: P({ title: "Le four de campagne", place: "brenne",
    fx: { questSeen: "IV_C_gaspard" },
    text: [
      "Gaspard a trouvé le four de campagne de l'armée, derrière les cuisines, et il l'a pris sans demander à personne. Personne n'ose lui demander de le rendre : il est grand, blanc, et il a une pelle à pain.",
      "« Demain, dit-il, ils vont se battre le ventre vide. Les deux côtés. On se bat mal le ventre vide. On se bat trop bien. » Il pétrit. « Je fais du pain pour huit mille. Et pour huit mille autres. Il me faut de la farine. Et quelqu'un pour passer la rivière avec. »",
    ],
    choices: [
      { label: "Trouver de la farine et des bras", test: { dom: "social", label: "La farine", help: [{ if: { present: "rodric" }, v: 15 }, { if: { has: "reine:iv=parle" }, v: 10 }] },
        win: { fx: { flag: "gaspard:pain_lisse", conf: { gaspard: 10 }, quest: "IV_C_gaspard", ep: ["perso", 1500] }, to: "IV_C_gaspard_pain" },
        lose: { fx: { flag: "gaspard:pain_camp", quest: "IV_C_gaspard", ep: ["perso", 800] }, to: "IV_C_gaspard_moitie" } },
    ] }),

  IV_C_gaspard_pain: P({ title: "Le pain", place: "brenne",
    text: [
      { with: "rodric", text: "Toute la nuit, le four brûle. À trois heures, une barque traverse la Lisse en aval du pont, chargée de pains chauds, avec Rodric aux rames. Les sentinelles de Corvanne la laissent accoster." },
      { without: "rodric", text: "Toute la nuit, le four brûle. À trois heures, une barque traverse la Lisse en aval du pont, chargée de pains chauds, un passeur de Hautvent aux rames. Les sentinelles de Corvanne la laissent accoster." },
      "À l'aube, des deux côtés, les soldats ont dans la poche le même pain à l'anis et au miel, le pain de la fête des foins de Sauvelune. Ils ne savent pas d'où il vient. Ils savent qu'il est bon.",
    ],
    choices: [{ back: "IV_br" }] }),

  IV_C_gaspard_moitie: P({ title: "Le pain", place: "brenne",
    text: ["Il n'y a de farine que pour un côté. Gaspard fait le pain quand même, pour le camp d'Esquarre. Il en garde une miche, une seule, qu'il pose au bord de la rivière, face à l'autre rive, sur une pierre. Au matin, elle n'y est plus."],
    choices: [{ back: "IV_br" }] }),

  // ---------------------------------------------------------------- Rodric: three bells
  IV_C_rodric: P({ title: "Trois cloches", place: "brenne",
    fx: { questSeen: "IV_C_rodric" },
    text: [
      "Rodric décout ses trois cloches de son pourpoint, une par une, et les pose sur la table de Maëlle. Trois petites cloches de bronze, de celles qu'on met au cou des chèvres.",
      "« Je les ai prises sur le pont, dit-il. Le quatorze brumaire. Après. Il y avait des chèvres mortes, avec leurs cloches. Je les ai coupées. Trois. Je ne sais pas pourquoi. Je les porte depuis. »",
      "Maëlle regarde les cloches. Elle en prend une. Elle la retourne. Gravées à l'intérieur, à la pointe d'un clou, des initiales.",
    ],
    choices: [{ label: "Lire les initiales", to: "IV_C_rodric2" }] }),

  IV_C_rodric2: P({ title: "Les initiales", place: "brenne",
    text: [
      "Trois paires d'initiales. Maëlle les lit. Elle connaît deux d'entre elles : des familles de Lisse-en-Corvanne, qui gardaient des chèvres au-dessus du village. La troisième, elle ne la connaît pas.",
      { if: { has: "iii:lisse_noms" }, text: "Toi, tu la connais. Tu as porté leurs trois cents noms. Tu cherches dans ta mémoire. Une petite fille avec une chèvre. Tu lui dis le nom." },
      "Rodric recoud les cloches sur son épaule, une par une, très soigneusement. « Je les rendrai, dit-il. Après demain. Aux familles. S'il en reste. »",
    ],
    choices: [{ fx: { flag: "rodric:cloches", conf: { rodric: 10 }, quest: "IV_C_rodric", ep: ["perso", 1200] }, back: "IV_br" }] }),
};
