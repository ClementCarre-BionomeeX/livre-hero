// Act II · more of the north for Corbe's company (Corbe leads, "tu" feminine, she cannot read): in the cave of the
// Corbeaux, the niche of offerings and the chamber where the echo answers in other voices; at the col de l'Ourse, the
// passeurs' refuge with its book of travellers and the big dog that waits for a master gone into the tear.
// Plus, in Act III, two more walks through Valcendre on the last night (the child leads, "tu").
var N = { act: "II", noLead: true };
var T = { act: "III", noLead: true };
function P(o) { return Object.assign({}, N, o); }
function P3(o) { return Object.assign({}, T, o); }
var READER = { any: [{ present: "hylas" }, { present: "pie" }, { present: "ysolde" }, { present: "enfant" }, { present: "linette" }] };
module.exports = {
  // ---------------------------------------------------------------- La grotte : les offrandes
  II_g_offrandes: P({ title: "La niche aux offrandes", place: "lacnoir",
    text: [
      "Près de l'entrée, à hauteur d'épaule, une niche naturelle dans le rocher, polie par les mains. Elle est pleine. Des peignes d'os, des perles de verre, une dent d'ours percée, une petite chaussure d'enfant en peau de renne, toute raide. Des pointes de flèche. Un sifflet. Des centaines de choses, posées les unes sur les autres, couvertes de fiente de corbeau et de poussière.",
      "Personne ne t'en a jamais parlé. Mais tu sais ce que c'est. On monte à la grotte une fois dans sa vie, au clan, et on laisse quelque chose. Tu n'étais jamais montée. Tu étais trop jeune, puis tu étais partie.",
      "Tout en dessous, quand tu écartes les plus récentes, une baguette de tambour en bois de bouleau, gravée de la marque des Corbe : trois traits et un œil.",
    ],
    choices: [
      { label: "Prendre la baguette", fx: { flag: "nord:offrande=prise" }, to: "II_g_offrandes_prise" },
      { label: "Laisser quelque chose, toi aussi", fx: { flag: "nord:offrande=laissee", ep: ["perso", 400] }, to: "II_g_offrandes_laissee" },
    ] }),
  II_g_offrandes_prise: P({ title: "La baguette", place: "lacnoir",
    text: [
      "Elle est légère, sèche, l'écorce partie depuis longtemps. Tu la soupèses. Elle a été taillée pour une main plus petite que la tienne. Ta grand-mère ? La sienne ? Personne ne pourra te le dire.",
      "Tu la glisses dans ta ceinture, à côté de la tienne. Quand tu te redresses, tu as l'impression que les corbeaux, là-haut, te regardent. Ils ne disent rien. Ils ne disent jamais rien.",
    ],
    choices: [{ label: "Revenir dans la grotte", to: "II_N2_grotte" }] }),
  II_g_offrandes_laissee: P({ title: "Ce qu'on laisse", place: "lacnoir",
    text: [
      "Tu cherches dans tes poches. Un caillou, un bout de ficelle, une boucle de ceinture. Rien qui vaille. Puis tu défais une de tes tresses, la plus longue, et tu coupes la mèche au couteau, et tu la poses sur la baguette, tout au fond, là où personne ne la verra.",
      "Tu ne sais pas pourquoi. Pour que quelque chose de toi reste ici, si le reste ne revient pas. Ça ne pèse rien. Ça pèse quand même.",
    ],
    choices: [{ label: "Revenir dans la grotte", to: "II_N2_grotte" }] }),

  // ---------------------------------------------------------------- La grotte : l'écho
  II_Q_echo: P({ title: "La salle de l'écho", place: "lacnoir",
    fx: { questSeen: "II_Q_echo" },
    text: [
      "Derrière la grande paroi, une fente à peine large comme un homme de profil. Tu passes. De l'autre côté, une petite salle ronde, sans signes, sans corbeaux, parfaitement noire. Ta torche n'en éclaire que le sol.",
      "Tu toussotes. La salle te renvoie la toux. Puis une autre toux, plus grave, qui n'est pas la tienne. Puis un rire d'enfant.",
      "Tu dis : « Il y a quelqu'un ? » La salle répond, avec ta voix, puis avec une voix de vieille femme, puis avec une voix d'homme qui a l'accent du clan : *Il y a quelqu'un. Il y a quelqu'un.*",
    ],
    choices: [
      { label: "Dire ton nom", to: "II_Q_echo_nom" },
      { label: "Battre le tambour, doucement, pour faire parler les voix", test: { dom: "magie", label: "Les voix", help: [{ if: { item: "tambour" }, v: 15 }, { if: { has: "nord:offrande=prise" }, v: 10 }, { if: { present: "hylas" }, v: 5 }] },
        win: { fx: { flag: "nord:echo", ep: ["perso", 1000] }, to: "II_Q_echo_voix" }, lose: { to: "II_Q_echo_froid" } },
      { label: "Ressortir à reculons", fx: { quest: "II_Q_echo" }, to: "II_N2_grotte" },
    ] }),
  II_Q_echo_nom: P({ title: "Corbe", place: "lacnoir",
    text: [
      "Tu dis : « Corbe. » La salle répond : *Corbe.* Avec ta voix. Puis, plus loin, avec une autre : *Corbe, fille d'Askel.* Puis une autre : *Askel, fille de Brynja.* Et ça continue, de voix en voix, de plus en plus loin, de plus en plus vieux, une lignée entière qui remonte dans le noir et que tu n'as jamais entendue en entier, parce que Torgal s'arrête toujours avant.",
      "À la fin, très loin, une voix qui n'a plus d'âge dit un nom que tu ne comprends pas. Pas un nom du clan. Un nom d'en bas, de la vallée, avec trop de syllabes. Puis le silence.",
    ],
    choices: [
      { label: "Battre le tambour, maintenant", test: { dom: "magie", label: "Les voix", help: [{ if: { item: "tambour" }, v: 20 }, { if: { has: "nord:offrande=prise" }, v: 10 }] },
        win: { fx: { flag: "nord:echo", ep: ["perso", 1000] }, to: "II_Q_echo_voix" }, lose: { to: "II_Q_echo_froid" } },
      { label: "Ressortir", fx: { quest: "II_Q_echo", ep: ["perso", 400] }, to: "II_N2_grotte" },
    ] }),
  II_Q_echo_voix: P({ title: "Les voix", place: "lacnoir",
    text: [
      "Tu bats. Doucement, le rythme lent des veillées. La salle le reprend, le double, le triple. Bientôt il y a dix tambours dans le noir, puis vingt, et des voix qui chantent par-dessus, des voix de femmes, d'enfants, de vieux, dans la langue du clan, mais une langue plus ancienne, plus lente, où certains mots ont encore toutes leurs lettres.",
      "Elles chantent les lignées. Pas comme Torgal. Elles ne s'arrêtent pas à Haldis. Elles passent Haldis, et elles disent *Sigrun*, et elles continuent.",
      "Puis ton bras se fatigue, et tu t'arrêtes, et les tambours s'arrêtent un par un, comme des gens qui quittent une veillée, et la salle redevient noire.",
      { if: { not: { has: "nord:lignee" } }, text: "Tu ressors. Tu ne sais pas lire. Mais tu sais, maintenant, un nom que Torgal cherche depuis des années, et tu le tiens dans la bouche comme un caillou chaud." },
      { if: { has: "nord:lignee" }, text: "Tu ressors. Le nom, tu le savais déjà, par le vieux corbeau de l'aire. Mais tu ne savais pas que d'autres l'avaient chanté avant Torgal, si longtemps, et si nombreux." },
    ],
    choices: [{ label: "Revenir dans la grotte", fx: { quest: "II_Q_echo", flag: "nord:sigrun_entendu", conf: { corbe: 10 } }, to: "II_N2_grotte" }] }),
  II_Q_echo_froid: P({ title: "Le froid", place: "lacnoir",
    text: [
      "Tu bats. La salle reprend le rythme, une fois, deux fois. Puis elle se tait. Un froid descend de la voûte, un froid de glacière, et ta torche baisse. Une voix, tout près de ton oreille, très douce, dit : *Pas toi. Pas encore.*",
      "Tu ressors plus vite que tu n'es entrée. Dans la grande salle, les corbeaux se sont tous envolés d'un coup, et ils tournent sous la voûte, en silence.",
    ],
    choices: [{ label: "Revenir dans la grotte", fx: { quest: "II_Q_echo" }, to: "II_N2_grotte" }] }),

  // ---------------------------------------------------------------- Le col : le refuge des passeurs
  II_Q_refuge: P({ title: "Le refuge des passeurs", place: "col",
    fx: { questSeen: "II_Q_refuge" },
    text: [
      "Un peu en contrebas du col, à l'abri d'un ressaut, une cabane de pierres sèches au toit de lauzes, avec une cheminée qui ne fume pas. Le refuge des passeurs, qui mènent les marchands d'un versant à l'autre, l'été, pour un écu par tête.",
      "Devant la porte, couché en travers du seuil, un chien. Un énorme chien de montagne, blanc et roux, au collier clouté. Il lève la tête quand tu approches. Il ne grogne pas. Il ne bouge pas non plus.",
    ],
    choices: [
      { label: "Lui parler, et attendre qu'il te laisse passer", test: { dom: "nature", label: "Le chien", help: [{ if: { present: "givre" }, v: -10 }, { if: { present: "ysolde" }, v: 5 }, { if: { present: "enfant" }, v: 10 }] },
        win: { fx: { flag: "nord:chien", ep: ["perso", 600] }, to: "II_Q_refuge_dedans" }, lose: { to: "II_Q_refuge_dehors" } },
      { label: "Lui donner ta part de viande séchée", fx: { food: -1, flag: "nord:chien" }, to: "II_Q_refuge_dedans" },
      { label: "Laisser le refuge", refuse: true, to: "II_N5_col" },
    ] }),
  II_Q_refuge_dehors: P({ title: "Le seuil", place: "col",
    text: [
      "Tu avances la main. Le chien se lève, lentement, et il est plus haut que ta taille. Il ne mord pas. Il se met seulement entre toi et la porte, et il te regarde, et il est clair qu'il restera là jusqu'à ce que tu partes, ou jusqu'à ce que tu meures, et qu'il n'a pas de préférence.",
      "Tu recules. Il se recouche en travers du seuil, le museau sur les pattes, les yeux tournés vers la déchirure.",
    ],
    choices: [{ label: "Laisser le refuge", fx: { quest: "II_Q_refuge" }, to: "II_N5_col" }] }),
  II_Q_refuge_dedans: P({ title: "Le livre des passages", place: "col",
    text: [
      "Le chien te renifle longuement, puis il se pousse d'un pas, juste assez. Dedans, une pièce, une cheminée, deux bat-flanc, des peaux de mouton, une réserve de bois. Et sur la table, un gros registre ouvert, avec un encrier gelé.",
      "Le livre des passages. Chaque passeur y écrit qui il a fait passer, quand, et dans quel sens. Les pages sont pleines d'écritures différentes, de croix, de petits dessins pour ceux qui ne savaient pas écrire. Ça remonte à quatre-vingts ans.",
      { if: READER, text: "On te lit la dernière page. *Passé le sept : deux marchands de sel, sens nord. Passé le neuf : personne. Passé le dix : personne. Le onze : la neige est blanche, au col. Le douze : j'ai vu une ville. Je vais voir. Garde la maison, Brun.* Puis plus rien." },
      { if: { not: READER }, text: "Tu ne sais pas lire. Mais la dernière page est différente des autres : l'écriture penche de plus en plus, à chaque ligne, comme quelqu'un qui écrit en marchant. Et en bas, un petit dessin à l'encre. Un chien couché. Une flèche vers le nord." },
    ],
    choices: [
      { label: "Ajouter ta marque au livre", to: "II_Q_refuge_marque" },
      { label: "Emmener le chien", to: "II_Q_refuge_chien" },
    ] }),
  II_Q_refuge_marque: P({ title: "La marque", place: "col",
    text: [
      "Tu dégèles l'encre au creux de ta main. Tu ne sais pas écrire. Tu dessines un corbeau, trois traits et un œil, la marque des tiens, et à côté une flèche, vers le nord. Puis, après avoir réfléchi, une deuxième flèche, vers le sud. Tu ne sais pas encore dans quel sens tu passeras.",
      { if: READER, text: "On écrit la date à côté, pour toi. Tu regardes les lettres sécher. Tu te demandes à quoi ressemble ton nom, écrit. On ne l'a pas écrit. Tu n'as pas demandé." },
      "En partant, tu remets une bûche dans la cheminée, pour rien, pour qu'il y ait du bois si quelqu'un revient.",
    ],
    choices: [{ label: "Revenir au col", fx: { quest: "II_Q_refuge", flag: "nord:refuge", ep: ["perso", 500] }, to: "II_N5_col" }] }),
  II_Q_refuge_chien: P({ title: "Brun", place: "col",
    text: [
      "Tu l'appelles. Il te regarde. Tu fais trois pas vers le col, tu tapes sur ta cuisse. Il se lève, il te suit jusqu'au seuil. Puis il s'arrête, et il se recouche, en travers, le museau vers la déchirure.",
      "Il garde la maison. On le lui a dit. Tu n'as pas d'ordre plus fort que celui-là à lui donner.",
      "Tu reviens t'asseoir à côté de lui, un moment. Il pose sa tête sur ton pied. Il est très chaud. Puis tu repars, et il ne te suit pas, et tu ne te retournes pas, parce que tu sais déjà qu'il ne t'a pas regardée partir.",
    ],
    choices: [{ label: "Revenir au col", fx: { quest: "II_Q_refuge", conf: { corbe: 5 } }, to: "II_N5_col" }] }),

  // ---------------------------------------------------------------- Acte III, la dernière nuit à Valcendre
  III_a_boulanger: P3({ title: "Le fournil", place: "valcendre",
    text: [
      "Une seule rue de Valcendre a de la lumière, cette nuit : celle du fournil, au coin de la place. Un boulanger enfourne. Il enfourne depuis trois cent douze ans. Sur les étagères, derrière lui, des pains, des centaines, des milliers, qui ne rassissent pas, rangés jusqu'au plafond, et dans l'arrière-boutique, encore, et dans la cave.",
      "« Personne n'en mange, dit-il sans se retourner. Ici, on n'a pas faim. Mais le pain, il faut le faire. C'est le matin, après. Et s'il n'y a pas de pain, ce n'est pas le matin. » Il sort une fournée. Elle sent le pain. Tu avais oublié, ici, que les choses pouvaient sentir quelque chose.",
    ],
    choices: [
      { label: "Lui demander un pain", fx: { food: 2, ep: ["perso", 300] }, to: "III_a_boulanger_pain" },
      { label: "L'aider à enfourner", fx: { ep: ["perso", 500], flag: "iii:fournil" }, to: "III_a_boulanger_aide" },
    ] }),
  III_a_boulanger_pain: P3({ title: "Un pain de Valcendre", place: "valcendre",
    text: ["Il te regarde, étonné, comme si personne ne lui avait demandé ça depuis très longtemps. Puis il te donne le plus beau, celui du dessus. « Pour la route, dit-il. Là-haut, ils ont faim, je crois. » Le pain est chaud. Il le restera, tu le sais déjà, jusqu'au bout du blanc."],
    choices: [{ label: "Revenir à la maison", to: "III_a_nuit" }] }),
  III_a_boulanger_aide: P3({ title: "La pelle", place: "valcendre",
    text: [
      "Il te donne la pelle. Tu enfournes. Tu sais faire : le moulin, à Sauvelune, avait son four, et Agathe te laissait enfourner les jours de fête. Le boulanger te regarde faire, les mains sur les hanches.",
      "« Tu as un poignet de boulanger, dit-il. Ça ne s'apprend pas en un jour. » Tu dis que non, de meunier. Il hausse les épaules. « C'est pareil. Le grain, la farine, le pain. Il n'y a que le feu qui change. »",
      "Quand tu pars, il te dit : « Demain, il y aura un matin. Grâce à toi. Un peu. »",
    ],
    choices: [{ label: "Revenir à la maison", to: "III_a_nuit" }] }),

  III_a_bibliotheque: P3({ title: "La bibliothèque des Orsans", place: "valcendre",
    text: [
      "La bibliothèque du palais n'a pas de porte. Elle a des rayonnages qui montent si haut que leur sommet se perd dans le blanc. Les livres sont écrits dans la langue des Orsans, une écriture en boucles, sans majuscules, que tu n'as jamais vue. Pourtant, quand tu en ouvres un, tu reconnais des mots. Pas à la lecture. À l'oreille, en les épelant tout bas. Ce sont les mots de la chanson de ta mère.",
      "Une vieille femme, en robe grise, range des livres sur une échelle. Elle les range depuis trois siècles. « Celui-là, dit-elle en te montrant un petit volume relié de bleu. C'est le livre des berceuses. Toutes les mères de Valcendre le savaient par cœur. »",
    ],
    choices: [
      { label: "Essayer de le lire", test: { dom: "savoir", label: "Les boucles", help: [{ if: { present: "hylas" }, v: 15 }, { if: { present: "lisandre" }, v: 10 }, { if: { present: "sansnom" }, v: 15 }] },
        win: { fx: { flag: "iii:berceuse", ep: ["perso", 1200] }, to: "III_a_bibliotheque_lue" }, lose: { to: "III_a_bibliotheque_rate" } },
      { label: "Revenir à la maison", to: "III_a_nuit" },
    ] }),
  III_a_bibliotheque_lue: P3({ title: "La berceuse", place: "valcendre",
    text: [
      "Tu épelles. Lentement. La vieille femme corrige ta prononciation, sans rien dire, d'un doigt levé, comme une maîtresse d'école. Et à la troisième ligne, tu ne lis plus. Tu chantes. La chanson de ta mère. Entière, pour la première fois. Il y avait un troisième couplet. Personne ne te l'avait jamais chanté.",
      "Le troisième couplet dit, à peu près : *Si tu oublies ton nom, mon petit, ne pleure pas. Il est écrit dans ma bouche. Je le garde pour toi.*",
      { with: "sansnom", text: "Ton frère est là, à l'entrée des rayonnages. Il a tout entendu. Il ne dit rien. Il a les lèvres qui bougent, en silence, sur le troisième couplet, qu'il connaissait." },
    ],
    choices: [{ label: "Revenir à la maison", fx: { conf: { sansnom: 5 } }, to: "III_a_nuit" }] }),
  III_a_bibliotheque_rate: P3({ title: "Les boucles", place: "valcendre",
    text: ["Les boucles se défont sous tes yeux. Tu reconnais un mot, puis le suivant t'échappe. La vieille femme te reprend le livre, doucement. « Ça viendra, dit-elle. Ou ça ne viendra pas. Les berceuses, on ne les lit pas, de toute façon. On les entend. » Elle remonte à son échelle."],
    choices: [{ label: "Revenir à la maison", to: "III_a_nuit" }] }),
};
