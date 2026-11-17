// L'Île Folle-Aiguille · side story « L'éloge funèbre » (owes its question to The Adventures of Tom Sawyer: what does
// one learn when one hears what is said of one after one's death?). At the islet, the child and Petit-Jules slip away
// from the water party to the far beach, to see the turtles, and fall asleep. The ship, which has heard the cries in
// the forest all night, believes them taken. At dawn, swimming back, they find the crew on deck at a prayer for the
// dead, and hear the captain's words, Gobert's, Fargue's. They come up the side in the middle of it (zh:surprise) or
// wait in the water until the end, to hear everything (zh:ecoute). Wired in A3n_ilot.
module.exports = {
  passages: {
    ZH_plage: { act: "III", title: "L'éloge funèbre", place: "ilot", ambiance: "nuit",
      text: [
        "C'est Petit-Jules qui en a l'idée, à la source, en remplissant les barriques : de l'autre côté de l'îlot, dit-il, il y a une plage où les tortues montent pondre la nuit, des centaines, grosses comme des tables, il l'a entendu dire par un gabier qui l'avait entendu dire. Il faut y aller. Ce soir. Personne n'en saura rien. On reviendra à la nage, avant le jour, par la pointe.",
        "Vous y allez. La forêt, la nuit, est pleine de bruits qu'on ne reconnaît pas, des froissements, des pas, une fois un cri, ce cri aigu et long qui monte depuis l'arrivée, très loin, du côté de la maison blanche. Petit-Jules te tient la manche sans s'en rendre compte. Puis la plage. Et les tortues, en effet : il y en a, énormes, noires sous la lune, qui sortent de la mer avec une lenteur de rêve, raclent le sable de leurs nageoires, creusent, pondent, en pleurant de grosses larmes de sel.",
        "Vous les regardez longtemps, couchés sur le ventre dans le sable tiède. Vous parlez. Petit-Jules te raconte sa mère, à Morlenc, qui lave le linge des officiers, et le père qu'il n'a jamais vu, et qu'il imagine capitaine. Tu lui racontes la Pointe. Puis vous ne parlez plus. Puis vous dormez.",
      ],
      choices: [{ label: "Te réveiller", to: "ZH_aube" }] },
    ZH_aube: { act: "III", title: "L'éloge funèbre", place: "ilot", ambiance: "mer",
      text: [
        "C'est le soleil qui te réveille, en plein visage. Le soleil, haut déjà. Tu secoues Petit-Jules. Vous courez jusqu'à la pointe, vous vous jetez à l'eau, vous nagez, en avalant de l'eau salée, en riant de peur, vers la Cormorane, à l'ancre dans la crique, grise sur l'eau verte.",
        "À cinquante brasses, vous vous arrêtez. Il y a quelque chose sur le pont. Tout l'équipage est rassemblé au pied du grand mât, tête nue, en rangs. Le pavillon est à mi-drisse. La capitaine Ribaud est debout sur le panneau de la grande écoutille, avec un livre de prières à la main. On entend sa voix, sur l'eau calme, très nette.",
        "« … le mousse de la Pointe-aux-Corneilles, et Jules Arnoult, novice, de Morlenc, disparus cette nuit à terre, et que nous recommandons à Dieu, puisque nous ne pouvons rien d'autre. »",
        "Petit-Jules te regarde, la bouche ouverte, avec de l'eau jusqu'au menton. « C'est nous, souffle-t-il. Ils nous enterrent. » Il a un fou rire nerveux, qu'il étouffe dans l'eau. Puis il ne rit plus, parce que Gobert s'avance, à côté de la capitaine, et se met à parler.",
      ],
      choices: [
        { label: "Nager jusqu'à l'échelle de coupée, et monter, maintenant", fx: { flag: "zh:surprise" }, to: "ZH_surprise" },
        { label: "Rester dans l'eau, sous la voûte de la poupe, et écouter jusqu'au bout", fx: { flag: "zh:ecoute" }, to: "ZH_ecoute" },
      ] },
    ZH_surprise: { act: "III", title: "L'éloge funèbre", place: "ilot", ambiance: "mer",
      text: [
        "Vous montez à l'échelle de coupée, ruisselants, au moment où Gobert dit, de sa grosse voix enrouée, « Le petit Jules, il était bête comme un panier, mais il avait du cœur », et vous apparaissez par-dessus le bastingage, l'un après l'autre, comme deux noyés qui reviennent réclamer leurs hardes.",
        "Il y a un silence prodigieux. Un matelot fait le signe de croix, à l'envers. Puis la capitaine Ribaud ferme son livre de prières, d'un geste sec, et descend du panneau, et marche sur vous. Elle est blanche. Elle vous gifle, l'un après l'autre, une fois chacun, de toutes ses forces. Puis elle vous prend tous les deux contre elle, une seconde, très fort, en vous écrasant contre les boutons de sa vareuse. Puis elle vous lâche. « Huit jours de corvée de pompe, dit-elle. Chacun. Et rentrez ce pavillon, quelqu'un. »",
        "Le soir, Gobert te croise sur le pont, et grommelle sans s'arrêter : « Je retire rien. Il est bête comme un panier. » Petit-Jules, qui l'a entendu, rit pendant une heure, à la pompe, en pompant.",
      ],
      choices: [{ label: "Prendre ta pompe", fx: { quest: "ZH" }, back: "A3n_ilot" }] },
    ZH_ecoute: { act: "III", title: "L'éloge funèbre", place: "ilot", ambiance: "mer",
      text: [
        "Vous vous glissez sous la voûte de la poupe, accrochés à la chaîne du gouvernail, dans l'ombre fraîche, avec de l'eau jusqu'au cou. On entend tout, de là. Les voix descendent du pont par-dessus le couronnement, nettes, un peu creuses, comme dans une église.",
        "Gobert dit que le petit Jules était bête comme un panier, mais qu'il avait du cœur, et que le mousse de la Pointe avait appris à faire un nœud de chaise en une matinée, ce qu'il n'avait vu faire qu'une fois, à lui-même, il y a quarante-six ans. Il se mouche. Lemerle dit qu'elle avait vu un oiseau noir sur la vergue, la veille, et qu'elle aurait dû le dire. Daguenet dit que tu grimpais mal et que tu aurais fini par bien grimper. Quelqu'un pleure. Tu ne sais pas qui.",
        "Puis une voix que tu reconnais entre toutes, juste et grave, la voix du maître-coq. Fargue ne fait pas de discours. Il chante. Une chanson de la côte, lente, sur un marin qui dort au fond de l'eau et qui entend sonner les cloches de son village. Il la chante en entier, sans une fausse note. Toute la Cormorane se tait pour l'écouter. Sous la poupe, dans l'eau, Petit-Jules pleure à gros sanglots silencieux, accroché à la chaîne. Tu ne sais pas si c'est sur lui, sur toi, ou sur la chanson.",
        "Quand c'est fini, vous attendez que l'équipage se disperse, et vous montez par l'arrière, discrètement, par la fenêtre de la grand-chambre. La capitaine vous y attend, assise à la table des cartes. Elle vous a vus depuis le début, du hublot. « Huit jours de corvée de pompe, dit-elle. Chacun. Et pas un mot de ce que vous avez entendu. À personne. Ça ne vous appartient pas. »",
      ],
      choices: [{ label: "Prendre ta pompe", fx: { quest: "ZH" }, back: "A3n_ilot" }] },
  },
  extras: {
    quests: [
      { id: "ZH", act: "III", kind: "annexe", title: "L'éloge funèbre", start: "ZH_plage", doit: "tomsawyer", echo: ["zh:surprise", "zh:ecoute"] },
    ],
  },
};
