// Act III · « La Glaneuse » in the first reading: midnight under the dome, the night until three, the theft, the
// death at the eyepiece, the letter opened at its hour, and the Great Mirror. Shared night scenes (`back: true`)
// serve the second reading too, from its own crossroads.
module.exports = {
  C_minuit: { act: "III", title: "Minuit sous la coupole", place: "veille", second: false,
    text: [
      "À minuit, toute la Veille est sous la coupole. Frère Cosme a monté sa cruche de vin chaud enveloppée dans une couverture, et il sert à la ronde dans des gobelets d'étain. La vapeur monte, odorante, et se perd dans la fente ouverte où le ciel attend.",
      "La Glaneuse est haute, à présent. Par la fente, on la voit en entier : la tête laiteuse, plus large que la lune, et la queue qui balaie le ciel jusqu'au Bouvier. Elle n'a pas bougé, on le jurerait ; et pourtant, d'heure en heure, elle n'est plus à la même place, comme ces portraits dont le regard vous suit sans que les yeux remuent.",
      "Maître Vellérin lève son gobelet, plein d'eau, qu'il a refusé de remplir de vin. « À la Glaneuse, dit-il. Qui revient quand elle l'a promis. Ce qui fait d'elle la seule créature honnête de cette montagne. » Il boit son eau d'un trait. Tout le monde boit, sauf Dame Hélis, qui tient son gobelet vide entre ses doigts gantés, et le capitaine Ferrand, qui a posé le sien sur le rebord d'une meurtrière sans y toucher.",
      "Puis le maître colle son œil à la lunette, et la nuit commence.",
    ],
    choices: [
      { label: "Attendre la suite de la nuit", to: "C_nuit" },
    ] },

  C_nuit: { act: "III", title: "La nuit de la Glaneuse", place: "veille", hub: true, backName: "la coupole", second: false,
    text: [
      { first: true, text: "Les heures se mettent à couler, lentes, froides. Le maître dicte des chiffres. Lise les écrit. Les pendules battent. Chacun, sous la coupole, a trouvé sa place et son silence, comme des fidèles dans une église dont personne ne sait plus très bien qui elle honore." },
      { again: true, text: "Sous la coupole, le maître dicte toujours, et Lise écrit. Les pendules battent. La Glaneuse a encore glissé vers l'est." },
    ],
    choices: [
      { label: "Regarder par la lunette", hide: { seen: "C_lunette" }, to: "C_lunette" },
      { label: "Rejoindre Tobie, qui est sorti sur le toit de la coupole", hide: { seen: "C_toit" }, to: "C_toit" },
      { label: "Parler avec Lise", hide: { seen: "C_lise" }, to: "C_lise" },
      { label: "Parler avec Dame Hélis", hide: { seen: "C_helis" }, to: "C_helis" },
      { label: "Rejoindre le capitaine Ferrand sur le chemin de ronde", hide: { seen: "C_ferrand" }, to: "C_ferrand" },
      { label: "T'asseoir près de Frère Cosme, sur la dernière marche", hide: { seen: "C_cosme_nuit" }, to: "C_cosme_nuit" },
      { label: "Regarder la ville par la meurtrière de l'ouest", hide: { seen: "C_meurtriere" }, to: "C_meurtriere" },
      { label: "Écouter le maître dicter", hide: { seen: "C_dicte" }, to: "C_dicte" },
      { label: "Descendre aux cuisines chercher du pain", hide: { seen: "C_cuisine_nuit" }, to: "C_cuisine_nuit" },
      { label: "Rester auprès du maître jusqu'à la Lyre", fx: { until: 2 }, to: "C_bruit" },
    ] },

  C_lunette: { act: "III", title: "Dans la lunette", place: "veille", back: true,
    fx: { ep: ["perso", 300] },
    text: [
      "Le maître te cède l'oculaire avec la mauvaise grâce d'un avare qui prête sa bourse. « Une minute. Ne touchez à rien. Ne respirez pas sur le verre. Si possible, ne pensez pas : ça fait trembler. »",
      "Tu colles ton œil au cuivre glacé.",
      "Et le ciel te tombe dessus. La tête de la Glaneuse emplit tout le cercle de la lunette : une boule de brume lumineuse, plus vaste que tout ce que tu as jamais regardé, avec au centre un noyau dur, éclatant, d'un blanc de sel, et autour de lui des jets de lumière qui tournent lentement, comme les bras d'un nageur noyé. Ce n'est pas une lumière qui éclaire. C'est une lumière qui se répand, qui suinte, qui gagne. Tu as l'impression absurde et tenace qu'en regardant plus longtemps, tu finiras par voir quelque chose te regarder en retour, depuis le fond de ce blanc ; et ton esprit, qui sait parfaitement que c'est un caillou couvert de glace sale, réclame qu'on le lui répète.",
      { if: { has: "avis:grandmere" }, text: "Tu penses à ta grand-mère, qui l'a attendue soixante-dix ans dans son fauteuil près de la fenêtre et qui est morte un an trop tôt. Tu regardes pour elle, en écarquillant l'œil, comme on prend des notes pour quelqu'un qui n'a pas pu venir." },
      { if: { has: "avis:pierre" }, text: "Une pierre qui brûle, te disais-tu en bas. Tu le crois toujours. Mais tu découvres qu'une pierre qui brûle, vue de près, peut vous serrer la gorge aussi fort qu'un sermon." },
      { if: { has: "avis:sceptique" }, text: "Le Chapitre dit que c'est un présage. Le Chapitre devrait monter ici et coller son œil au cuivre : il y verrait une chose trop grande pour s'occuper de lui." },
      "« Une minute ! » dit le maître, et il te reprend sa lunette.",
    ] },

  C_toit: { act: "III", title: "Sur le toit de la coupole", place: "veille", back: true,
    fx: { clue: "i_miroir", meet: ["tobie"] },
    text: [
      "Une échelle de fer passe par une trappe et débouche sur le toit de cuivre de la coupole, une pente glissante et glacée où Tobie s'est installé à califourchon sur l'arête, enveloppé dans une couverture, comme un gargouille de quatorze ans.",
      "« D'ici, on la voit sans la fente, dit-il. On la voit toute. » Il a raison. La Glaneuse s'étire au-dessus de vous d'un bord à l'autre du ciel, et la montagne entière, sous elle, a l'air d'un jouet.",
      "Tobie a apporté une règle de laiton, celle de l'atelier, gravée de l'alphabet sur toute sa longueur, et un petit miroir de poche. Il s'amuse à faire jouer l'un dans l'autre. « Regardez. Dans le miroir, tout se lit à l'envers. Si je mets la règle comme ça, contre le miroir, on voit le A en face du Z, le B en face du Y, et ainsi de suite jusqu'au milieu. Le maître dit que c'était le jeu de son maître à lui. Écrire à l'envers de l'alphabet. Il dit que c'est le chiffre des enfants. » Il rit. « Je suis un enfant, alors ça va. »",
    ] },

  C_lise: { act: "III", title: "Lise, à une heure", place: "veille", back: true,
    text: [
      "Lise écrit sans lever la tête. Sa plume gratte, s'arrête, repart.",
      { if: { has: "querelle:entendue" }, text: "« Vous avez entendu, tout à l'heure, dit-elle à voix basse. Dans l'escalier. Tout le monde a entendu. Il crie assez fort pour qu'on l'entende à Salvagnes. » Elle souffle sur l'encre." },
      "« À l'aube, je descends avec Dame Hélis, dit-elle. Il le sait. Il fait semblant de ne pas le savoir. C'est sa façon de pleurer. » Elle trempe sa plume. « Il a quatre-vingt-six ans. Il croit qu'il a encore cinquante ans de travail devant lui. C'est la seule erreur de calcul que je lui connaisse. »",
    ] },

  C_helis: { act: "III", title: "Dame Hélis, à une heure", place: "veille", back: true,
    text: [
      "Dame Hélis se tient à l'écart, contre le mur de la coupole, le gobelet vide toujours entre ses doigts.",
      "« Vous avez vu le frère servir le vin ? dit-elle à mi-voix, sans te regarder. Il a servi tout le monde. Il ne s'est pas servi. » Elle fait tourner le gobelet. « Mais je vois des complots partout. C'est un défaut de cour, comme la goutte. On le contracte en dînant avec des princes. »",
      { if: { has: "helis:bourse" }, text: "Elle baisse encore la voix. « Je compte sur vous, pour tout à l'heure. Restez près du cabinet. »" },
    ] },

  C_ferrand: { act: "III", title: "Le capitaine, à deux heures", place: "veille", back: true,
    fx: { flag: "ferrand:vu_cosme" },
    text: [
      "Sur le chemin de ronde, le froid est devenu une chose solide. Le capitaine Ferrand n'a pas bougé de son créneau ; il a seulement plus de givre sur la moustache.",
      { if: { has: "ferrand:ronde" }, text: "Il te fait une place au créneau sans un mot, comme à un camarade qui revient prendre son tour de garde." },
      "Pendant que tu es là, une lanterne sort par la porte basse, au pied de la tour, et s'éloigne sur l'escalier de dalles qui descend vers l'ermitage. Une silhouette ronde, en bure.",
      "« Le frère, dit Ferrand. Il descend sonner ses matines. » Il suit la lanterne des yeux, longtemps. « À pied, par ce froid, pour sonner une cloche qu'il est seul à entendre. Il y a des hommes qui ont le devoir dans les jambes. »",
    ] },

  C_bruit: { act: "III", title: "Deux heures et demie", place: "veille", second: false,
    text: [
      "Il est deux heures et demie quand le bruit monte de l'intérieur de la tour : un craquement de bois, un choc, puis un juron d'homme, bref, étouffé, comme une porte qui a rendu l'âme et quelqu'un qui s'y est blessé.",
      "Tu dévales l'escalier. Au troisième étage, la porte du cabinet de Lise pend sur un seul gond, enfoncée d'un coup d'épaule. Dans le cabinet, le capitaine Ferrand se tient debout devant le coffre, ouvert, vide. Sa main droite saigne ; un éclat de chêne long comme un doigt lui est entré dans la paume.",
      "« J'ai entendu, dit-il. Quelqu'un ici. J'ai enfoncé. » Il regarde le coffre. « Trop tard. »",
      "Derrière toi, dans l'escalier, des pas. Dame Hélis arrive, puis Lise, qui pousse un cri et se jette sur le coffre comme sur un enfant tombé dans un puits. Elle plonge les bras dedans jusqu'aux épaules. Il n'y a rien. Les quatre registres, les trois mille pages, cinquante ans : rien.",
      "« Où étiez-vous, capitaine, dit Lise d'une voix blanche, avant d'entendre ? »",
      "Ferrand regarde sa main qui saigne et ne répond pas.",
      { if: { has: "tables:vues" }, text: "Tu les as tenues dans tes bras il y a quatre heures, ces registres, et tu les as remis dans le coffre de tes propres mains." },
      "Là-haut, la voix du maître tonne, impatiente, ignorante de tout : « Lise ! Il est trois heures moins vingt ! Qu'est-ce que vous faites ? La Lyre n'attendra pas ! »",
    ],
    choices: [
      { label: "Remonter sous la coupole", fx: { until: 3 }, to: "C_trois" },
    ] },

  C_trois: { act: "III", title: "Trois heures", place: "veille", second: false,
    fx: { clue: ["i_mots", "i_odeur"], flag: "vellerin:mort" },
    text: [
      "Personne n'ose le lui dire. Lise remonte, les yeux rouges, et reprend sa plume. Il ne la regarde même pas. Il est tout entier dans le ciel.",
      "À trois heures moins une, il sort la flasque d'étain de sa poche, la débouche, en verse un doigt dans le petit gobelet de corne qu'il porte à sa ceinture, et le boit d'un coup, en grimaçant. « La mélisse du frère est plus forte cette année, dit-il. Tant mieux. Il me faut l'œil. »",
      "Il colle son œil à la lunette.",
      "« Elle approche, dit-il. Elle approche. Lise, notez. Trois heures. Elle touche. » Sa voix monte, elle tremble de joie. « Elle touche la Lyre ! À la minute ! Sérac, tu vois ? Tu vois ? »",
      "Puis il se tait.",
      "Il reste penché sur l'oculaire une seconde, deux secondes, et ses mains lâchent le cuivre. Il glisse le long du pied de fonte, lentement, comme un vêtement qu'on décroche, et s'affaisse sur le plancher de la coupole. Lise crie. Tu es à genoux près de lui avant de l'avoir décidé.",
      "Il a les yeux ouverts. Il respire mal, avec un sifflement. Autour de lui flotte une odeur douce et amère à la fois, une odeur d'amande grillée, comme un gâteau qui brûle dans un four oublié. Il te saisit le poignet, avec une force de vieil arbre, et il te regarde toi, toi seulement, comme si tu étais la seule personne présente sous la coupole.",
      "« Sérac… souffle-t-il. L'amande… cette fois encore… »",
      "Sa main se desserre. Ses yeux restent ouverts sur la fente, où la Glaneuse, très exactement, touche la Lyre.",
    ],
    choices: [
      { label: "Te relever", to: "C_apres" },
    ] },

  C_apres: { act: "III", title: "Après", place: "veille", hub: true, backName: "la coupole", second: false,
    fx: { meet: ["cosme"] },
    text: [
      { first: true, text: "Il y a d'abord un long silence, où l'on entend battre les pendules. Puis tout le monde parle à la fois." },
      { first: true, text: "Frère Cosme surgit de l'escalier, essoufflé, la lanterne à la main, du givre sur sa bure. « J'ai entendu crier jusqu'en bas… » Il voit le corps, pose sa lanterne, s'agenouille, ferme les yeux du maître de deux doigts, avec une douceur infinie, et commence à prier à voix basse." },
      { first: true, text: "Dame Hélis s'est tournée vers Lise. « Vous aviez la clef du coffre. Vous partiez à l'aube. Et voilà que le coffre est vide et que le maître ne criera plus. » Lise la regarde, trop stupéfaite pour répondre. Frère Cosme, sans lever la tête de sa prière, murmure : « Le capitaine saignait, tout à l'heure. Je l'ai vu dans l'escalier. Que Dieu me pardonne de le dire. » Le capitaine Ferrand pose la main sur la garde de son épée, et tout le monde recule d'un pas." },
      { again: true, text: "Le corps du maître sous la fente de la coupole. Frère Cosme prie. Lise pleure sans bruit. Dame Hélis et le capitaine se regardent comme deux chiens qui ne savent pas encore lequel mordra." },
    ],
    choices: [
      { label: "Examiner la flasque de mélisse", hide: { seen: "C_flasque" }, to: "C_flasque" },
      { label: "Ouvrir le pli : la Glaneuse touche la Lyre", hide: { seen: "C_pli" }, fx: { item: "pli_ouvert", drop: "pli" }, to: "C_pli" },
      { label: "Prendre la défense de Lise", hide: { any: [{ seen: "C_defendre" }, { seen: "C_accuser" }] }, to: "C_defendre" },
      { label: "Demander au capitaine d'où vient le sang", hide: { any: [{ seen: "C_defendre" }, { seen: "C_accuser" }] }, to: "C_accuser" },
      { label: "Observer Frère Cosme pendant qu'il prie", hide: { seen: "C_cosme" }, to: "C_cosme" },
      { label: "T'agenouiller de nouveau près du maître", hide: { seen: "C_corps" }, to: "C_corps" },
      { label: "Suivre Tobie, qui te tire par la manche vers la bibliothèque", hide: { seen: "C_escalier" }, to: "C_escalier" },
      { label: "Répondre à Dame Hélis, qui te prend à part", if: { seen: "A_litiere" }, hide: { seen: "C_helis_apres" }, to: "C_helis_apres" },
      { label: "Aller vers Lise, qui n'a pas lâché sa plume", hide: { seen: "C_lise_apres" }, to: "C_lise_apres" },
      { label: "Tobie t'appelle depuis le Grand Miroir", to: "C_miroir" },
    ] },

  C_flasque: { act: "III", title: "La flasque", place: "veille",
    fx: { clue: "i_amande" },
    text: [
      "La flasque d'étain a roulé sous la table aux feuilles. Tu la ramasses. Il en reste la moitié. Tu la débouches : l'odeur de la mélisse, verte, citronnée, et dessous, plus profonde, la même odeur d'amande que tout à l'heure.",
      "Tobie s'est approché, la figure barbouillée de larmes. Il renifle le goulot, fronce le nez. « Ça sent la haie de l'ermitage, dit-il. Le laurier des chèvres. Quand on en casse une feuille, ça sent l'amande. Le frère Cosme dit de ne jamais en mettre à la bouche. »",
      "Il a dit cela tout bas, à toi seul. Personne d'autre n'a entendu, sous la coupole, où chacun crie sa propre vérité.",
    ],
    choices: [
      { back: "C_apres" },
    ] },

  C_pli: { act: "III", title: "Le pli", place: "veille", puzzle: "p_pli",
    text: [
      "La Glaneuse touche la Lyre. C'est l'heure écrite sur l'enveloppe. Tu brises le cachet noir.",
      "À l'intérieur, une feuille seule. L'écriture est grande, penchée, tremblée de vieillesse, et tu la reconnais sans l'avoir jamais lue : c'est la main qui a corrigé au crayon le traité des miroirs. *À toi qui reviens*, dit la première ligne. Puis une ligne de capitales sans aucun sens. Puis la signature : une seule lettre. *O.*",
      "Ce pli que le Recteur t'a confié comme un secret du Collège, c'est le maître qui l'a écrit.",
    ],
    choices: [
      { back: "C_apres" },
    ] },

  C_defendre: { act: "III", title: "Pour Lise", place: "veille",
    fx: { flag: "lise:defendue" },
    text: [
      "Tu te places entre Lise et Dame Hélis. Tu dis ce que tu as vu : Lise sous la coupole, à côté du maître, toute la nuit, sa plume à la main ; Lise qui a hurlé devant le coffre vide. Personne ne hurle comme ça devant son propre vol.",
      "Dame Hélis t'écoute, la tête penchée. « C'est bien parlé, dit-elle. C'est même juste, peut-être. Mais quelqu'un a pris les Tables, et quelqu'un a tué cet homme, et à l'aube j'aurai à expliquer au Prince pourquoi je redescends les mains vides. » Elle tire lentement ses gants. « Je me contenterais de n'importe quel coupable. La cour est moins exigeante que vous. »",
    ],
    choices: [
      { back: "C_apres" },
    ] },

  C_accuser: { act: "III", title: "Le sang du capitaine", place: "veille",
    fx: { flag: "ferrand:accuse" },
    text: [
      "Tu demandes au capitaine d'où vient le sang de sa main.",
      "Il te regarde longtemps, de ses yeux trop jeunes pour sa figure. « De la porte, dit-il. J'ai entendu du bruit dans le cabinet. J'ai frappé. Personne n'a répondu. J'ai enfoncé. » Il ouvre la main : l'éclat de chêne y est encore, noir de sang. « Quand je suis entré, la fenêtre de l'escalier de service battait. Le coffre était ouvert. Il n'y avait personne. »",
      "« Il n'y a pas d'escalier de service, dit Lise. On l'a muré il y a quarante ans. »",
      "Tobie, dans son coin, baisse la tête.",
      { if: { has: "ferrand:vu_cosme" }, text: "Dame Hélis se tourne vers le frère. « Et vous, mon père ? » Ferrand répond pour lui, de sa voix de pierre : « Le frère était descendu sonner matines. Je l'ai vu partir. » Frère Cosme incline la tête, reconnaissant." },
    ],
    choices: [
      { back: "C_apres" },
    ] },

  C_cosme: { act: "III", title: "Frère Cosme prie", place: "veille",
    text: [
      "Frère Cosme prie à genoux près du corps, les mains jointes, les yeux fermés, les lèvres qui remuent. Sa lanterne est posée à côté de lui sur le plancher.",
      "Tu regardes ses mains. Elles sont rouges de froid, propres, avec de la cire sous les ongles. Tu regardes sa bure : du givre sur les épaules, et au bas, de la boue fraîche. Tu regardes ses sandales : la boue y est encore molle.",
      "Il ouvre les yeux et te voit le regarder. Il te sourit, tristement, avec une infinie bonté. « Il n'a pas souffert, dit-il. Le cœur. C'était un vieux cœur. Dieu l'a pris au moment qu'il avait attendu toute sa vie. C'est une grâce. »",
    ],
    choices: [
      { back: "C_apres" },
    ] },

  C_miroir: { act: "III", title: "Le Grand Miroir", place: "veille", second: false,
    text: [
      "« Venez ! crie Tobie. Venez voir ! »",
      "Il est devant le Grand Miroir. Dans le désordre, quelqu'un a arraché la housse de drap noir, qui gît en tas sur le plancher. Le disque de bronze est découvert tout entier, et la fente de la coupole s'y reflète, et dans la fente, la Glaneuse.",
      "Tu t'approches. Tobie recule pour te laisser la place, la bouche ouverte.",
      "Dans le miroir, la comète est plus brillante que dans le ciel. Elle est plus proche. Elle remplit le bronze d'une lumière laiteuse qui bouge, qui tourne, qui monte vers toi comme l'eau monte dans un puits quand on se penche. Tu vois ton propre visage, pâle, à l'envers de lui-même, et derrière ton visage, la Glaneuse ; et derrière la Glaneuse, très loin, très petite, la montagne au crépuscule.",
      { if: { has: "ferrand:accuse" }, text: "Dans un coin du miroir passe le capitaine Ferrand, entre deux hommes de l'escorte, la main bandée, les yeux baissés. Dame Hélis a trouvé son coupable." },
      { if: { has: "lise:defendue" }, text: "Dans un coin du miroir passe Lise, droite, les poings serrés. Elle te cherche des yeux. Elle ne te trouve pas." },
      "Tu n'arrives plus à détourner les yeux. Quelque chose, au fond du bronze, a commencé à tourner, et toi avec.",
    ],
    choices: [
      { label: "Regarder jusqu'au bout", to: "F_boucle" },
    ] },

  F_boucle: { act: "III", title: "La nuit recommencée", place: "pied", end: true,
    fx: { flag: "fin:boucle" },
    text: [
      "La lumière t'avale. Il n'y a plus de coupole, plus de plancher, plus de Tobie ; il y a une chute lente, blanche, interminable, où les étoiles défilent à l'envers comme les perles d'un collier qu'on dénoue. Tu entends les pendules de la Veille battre à rebours. Tu entends Baptistin rire, puis se taire. Tu entends ta propre voix poser des questions que tu n'as pas encore posées.",
      "Puis le froid. Un froid de fin d'après-midi, un froid de vallée.",
      "Tu es debout près du dernier abreuvoir, là où la route de Salvagnes devient chemin muletier. Les mélèzes ont perdu leurs aiguilles. La face du mont Escalle est violette, ses crêtes encore dorées, et tout en haut, sur la dernière dent de rocher, la Veille accroche le soleil couchant.",
      "Tu portes la main à ta veste. Le pli est là. Épais, raide, cacheté de cire noire. Intact.",
      { if: { has: "pli:lu" }, text: "Sous la cire noire, tu le sais à présent, une ligne de capitales attend qu'on la lise. Et dans ta tête tournent trois mots qu'un vieil homme t'a donnés en mourant." },
      "À l'est, très bas, le ciel est encore vide.",
    ] },
};
