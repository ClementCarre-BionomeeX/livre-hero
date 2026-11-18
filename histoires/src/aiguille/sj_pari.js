// L'Île Folle-Aiguille · side story « Le pari de la tour » (owes its question to Chekhov's The Bet: what are fifteen
// years of a life worth against a fortune, and what has the man who wins learned that the man who pays has not?).
// Act III, Victorine at Brisegrève: Lezongar, a shipowner of the town, asks the ship's physician for a certificate of
// health for a man he has not seen in fifteen years. At a dinner long ago, a young lawyer, Pierig Kerambrun, bet that
// he would stay fifteen years alone in a cell of the fort's west tower for two hundred thousand écus. The term ends
// tomorrow at midnight. Lezongar is ruined. Victorine brings him the prisoner's renunciation before night (sj:lettre),
// keeps watch in the tower's corridor (sj:garde), or opens the door herself at the prisoner's request (sj:libere).
// Optional: SJ_registre, SJ_maison. Wired in A3v_brisegreve.
module.exports = {
  passages: {
    SJ_armateur: { act: "III", title: "Le pari de la tour", place: "brisegreve", ambiance: "ville",
      fx: { meet: "lezongar" },
      text: [
        "L'homme qui monte à bord, le premier matin, est vêtu de noir, très correctement, d'un habit qui a été beau il y a dix ans et qu'on a brossé ce matin avec une application désespérée. Il a soixante ans, une face grise et molle, et des mains qui ne savent pas où se mettre. Il se présente : Lezongar, armateur à Brisegrève. Il demande la dame médecin. Il veut un certificat de bonne santé.",
        "Pour un homme, dit-il, qu'il n'a pas vu depuis quinze ans. Qui vit enfermé dans une cellule de la tour de l'ouest du fort, de son plein gré, à ses frais à lui, Lezongar, gardé par un guichetier qu'il paie. Et qui en sortira demain à minuit.",
        "Il raconte, en tordant ses gants. Un dîner chez lui, il y a quinze ans, avec des officiers du fort, un juge, un jeune avocat de Morlenc. On disputait de la peine de mort. Le juge disait qu'elle était plus humaine que la prison perpétuelle, qui tue lentement. L'avocat, un garçon de vingt-cinq ans, Pierig Kerambrun, disait qu'il préférait vivre n'importe comment plutôt que pas du tout. Lezongar, qui était riche, qui avait bu, a parié deux cent mille écus que le jeune homme ne tiendrait pas cinq ans seul dans une cellule. Le jeune homme a dit : quinze. Et il est entré.",
        "« Il a tenu, dit Lezongar. Il tient. Demain, à minuit, je lui dois deux cent mille écus. » Il rit, d'un petit rire qui fait peur. « Je voudrais un certificat. Pour savoir s'il a toute sa raison. Un homme qui n'a pas sa raison, n'est-ce pas, ne peut pas réclamer. » Il regarde Victorine. Ses yeux disent une chose que sa bouche n'ose pas encore dire."
      ],
      choices: [
        { label: "Monter à la tour de l'ouest, voir le prisonnier volontaire", to: "SJ_tour" }
      ] },
    SJ_registre: { act: "III", title: "Le pari de la tour", place: "brisegreve", ambiance: "ville",
      text: [
        "Le guichetier, un vieux soldat nommé Riec qui garde cette porte depuis quinze ans et qui en parle comme d'une cure de village, a tout noté. Il sort de son tiroir un gros registre relié en toile, où il a inscrit, jour après jour, de sa grosse écriture appliquée, tout ce que le prisonnier a demandé par le judas, sur des billets pliés.",
        "Victorine le feuillette. Les deux premières années : du vin, du tabac, des cartes, un piano, des romans légers, des lettres de femmes qu'il n'envoyait pas. La troisième année, plus de vin. Plus de tabac. Le piano se tait. Puis des grammaires : six langues en quatre ans. Puis de la philosophie, de l'histoire, des traités de mathématiques, de médecine, d'astronomie, six cents volumes. Puis, la dixième année, seulement les Évangiles, pendant un an entier. Puis tout à la fois, dans un désordre de naufragé : de la chimie, de la poésie, de la théologie, un traité de navigation, un livre sur les abeilles.",
        "La dernière ligne date d'hier. Il a demandé une plume neuve et une feuille de papier blanc. Rien d'autre.",
        "Riec referme le registre. Il dit qu'il ne sait pas ce que deviendra la tour, après. Il dit qu'il aimait bien entendre tourner les pages, la nuit. Il dit que c'était comme d'avoir un abbé dans la maison, sans les sermons."
      ],
      choices: [
        { back: "SJ_tour", label: "Retourner devant la porte de la cellule" }
      ] },
    SJ_maison: { act: "III", title: "Le pari de la tour", place: "brisegreve", ambiance: "ville",
      text: [
        "La maison de Lezongar est la plus grande du bourg, et la plus vide. Des carrés plus clairs sur les murs, là où il y avait des tableaux. Des marques de pieds sur le parquet, là où il y avait des buffets. Dans le grand salon, une seule chaise, et une table où traînent des papiers d'huissier sous un bougeoir d'étain.",
        "Lezongar reçoit Victorine là, debout, parce qu'il n'y a qu'une chaise et qu'il la lui laisse. Il parle de ses navires. Il en avait onze, il y a quinze ans. Il en a perdu quatre en mer, vendu cinq, il en reste deux, qui sont hypothéqués. Il a joué à la bourse de Morlenc, pour se refaire. Il s'est défait. Il dit que deux cent mille écus, c'est exactement, à cent écus près, ce qui lui reste au monde, en comptant la maison.",
        "Il dit : « Quand j'ai fait ce pari, j'étais un imbécile riche. Lui était un imbécile pauvre. Dans quinze ans, me disais-je, il sortira de là fou ou mort, et moi j'aurai ri. Demain, il sortira de là riche, et moi je serai mendiant. » Il prend un des papiers d'huissier, le regarde, le repose. « Et il ne m'a jamais vu. Il ne sait même pas de quoi j'ai l'air. »",
        "Sur la cheminée vide, Victorine remarque une petite clef de fer, toute seule, posée bien en évidence, comme un objet qu'on regarde souvent. Lezongar suit son regard. Il la met dans sa poche."
      ],
      choices: [
        { back: "SJ_tour", label: "Retourner à la tour de l'ouest" }
      ] },
    SJ_tour: { act: "III", title: "Le pari de la tour", place: "brisegreve", ambiance: "ville",
      fx: { meet: "kerambrun" },
      text: [
        { first: true, text: "La tour de l'ouest est la plus vieille du fort, ronde, trapue, aveugle du côté de la terre. On y monte par un escalier à vis si étroit que Victorine frotte les deux murs de ses épaules. En haut, un palier, une chaise, une table où le guichetier mange sa soupe, et une porte de chêne bardée de fer, avec un judas grillagé à hauteur d'homme. Derrière la porte, pas un bruit. Puis une page qu'on tourne." },
        { first: true, text: "Victorine regarde par le judas. Une cellule blanche, voûtée, avec une fenêtre haute par où tombe un rectangle de jour. Des livres partout, en piles, en murs, en colonnes, jusqu'à la voûte. Au milieu, à une table, un homme qu'on prendrait pour un vieillard : maigre à faire peur, la peau de la couleur du papier, des cheveux gris jusqu'aux épaules, une barbe de prophète. Il a quarante ans. Il lit. Il ne lève pas la tête." },
        { first: true, text: "Elle écrit un billet, qu'elle glisse sous la porte : elle est médecin, elle voudrait l'examiner, ou du moins lui parler. Une minute passe. Puis un billet revient sous la porte, plié en quatre, d'une écriture fine, régulière, magnifique : « Madame, je vous remercie. Je me porte bien. Je n'ai besoin de rien, et de personne, ce qui est, je le crains, la seule maladie dont vous ne puissiez rien pour moi. Demain, vous comprendrez. A. K. »" },
        { again: true, text: "La porte de chêne, le judas, et derrière, une page qu'on tourne." }
      ],
      choices: [
        { label: "Lire le registre que tient le guichetier depuis quinze ans", to: "SJ_registre", hide: { seen: "SJ_registre" } },
        { label: "Descendre au bourg, chez Lezongar, avant la nuit", to: "SJ_maison", hide: { seen: "SJ_maison" } },
        { label: "Attendre la deuxième nuit, celle du terme", to: "SJ_terme", if: { seen: "SJ_maison" }, why: "Elle veut d'abord voir où vit l'homme qui doit payer." }
      ] },
    SJ_terme: { act: "III", title: "Le pari de la tour", place: "brisegreve", ambiance: "nuit",
      text: [
        "Le deuxième jour, à midi, Riec, le guichetier, descend trouver Victorine au pied de la tour. Il tient un billet. Le prisonnier l'a glissé sous la porte, avec ordre de le remettre à la dame médecin, et à elle seule.",
        "Elle le lit à la lanterne. Kerambrun écrit qu'il a lu, en quinze ans, tout ce que les hommes ont écrit de plus beau, et qu'il en a conclu que tout cela, les livres, la science, l'argent, l'amour, la gloire, vaut ce que vaut une ombre sur un mur. Qu'il méprise les deux cent mille écus comme il méprise tout ce qu'ils peuvent acheter. Qu'il renonce au pari. Qu'il sortira cinq heures avant le terme, afin de le perdre selon les règles. Qu'il prie la dame médecin de l'aider à sortir, à sept heures du soir, sans bruit, par la poterne de la jetée, et de ne rien dire à personne avant.",
        "Victorine relève la tête. En bas, dans le bourg, la grande maison vide a tous ses volets fermés, en plein midi. Elle pense à la petite clef de fer sur la cheminée. Elle pense à l'escalier à vis, au palier, à la chaise du guichetier, que Riec quitte tous les soirs à six heures pour descendre souper au corps de garde.",
        "Six heures, le souper de Riec. Sept heures, la poterne. Minuit, le terme."
      ],
      choices: [
        { label: "Porter tout de suite le billet du prisonnier à Lezongar", fx: { flag: "sj:lettre" }, to: "SJ_lettre" },
        { label: "Passer la nuit sur le palier, dans la chaise du guichetier", fx: { flag: "sj:garde" }, to: "SJ_garde" },
        { label: "Faire ce qu'il demande, et lui ouvrir la poterne avant l'heure", fx: { flag: "sj:libere" }, to: "SJ_libere" }
      ] },
    SJ_lettre: { act: "III", title: "Le pari de la tour", place: "brisegreve", ambiance: "nuit",
      text: [
        "Lezongar ouvre lui-même, en manches de chemise, une bougie à la main, en plein jour, dans sa maison aux volets clos. Il a les yeux rouges. Il a bu, un peu, pour se donner du courage, et le courage est venu, et il l'a encore sur la figure, comme une tache. Victorine lui tend le billet en silence.",
        "Il le lit debout, dans l'entrée, à la bougie. Une fois. Deux fois. Sa main tremble tant que la flamme tremble aussi, et que les ombres, sur les murs nus, dansent. Puis il s'assied sur la dernière marche de l'escalier, comme un domestique, et il se met à pleurer, d'un pleur de vieillard, sans bruit, la bouche ouverte.",
        "Il dit qu'il a pensé à le tuer. Il le dit simplement, à cette femme qu'il connaît depuis deux jours, parce qu'il faut qu'il le dise à quelqu'un. Il dit que la clef de la cheminée est un double de celle de la cellule, qu'il a fait faire il y a un an, et qu'il avait prévu de monter ce soir, à six heures, pendant le souper du guichetier, avec un oreiller. Il dit qu'un homme maigre comme ça, après quinze ans, on aurait cru à une syncope. Il sort la clef de sa poche, et il la donne à Victorine.",
        "À sept heures, Kerambrun sort de sa tour par la poterne, à l'heure qu'il avait dite, et marche vers la mer sans se retourner. Lezongar reste chez lui. Il garde le billet. Victorine le voit, en redescendant vers le port à la nuit, assis à sa fenêtre aux volets enfin ouverts, sur son unique chaise, le papier sur les genoux, qui ne lit pas, et qui regarde la tour."
      ],
      choices: [
        { label: "Retourner à Brisegrève", fx: { quest: "SJ" }, back: "A3v_brisegreve" }
      ] },
    SJ_garde: { act: "III", title: "Le pari de la tour", place: "brisegreve", ambiance: "nuit",
      text: [
        "Riec descend souper à six heures, comme chaque soir. Victorine s'assied à sa place, sur la chaise du palier, sous la lanterne, avec sa trousse sur les genoux. Derrière la porte de chêne, les pages ont cessé de tourner. Elle entend une respiration, lente, régulière. Il dort, tout habillé sans doute, pour la dernière heure de sa cellule.",
        "À six heures et quart, un pas dans l'escalier. Un pas lourd, prudent, qui s'arrête toutes les quatre marches. Une lueur monte le long du mur, puis une main, puis un oreiller blanc, puis la face grise de Lezongar, qui débouche sur le palier et voit Victorine dans la chaise, droite, immobile, qui le regarde.",
        "Ils restent ainsi un long moment, face à face, à trois pas. La bougie de Lezongar coule sur ses doigts sans qu'il le sente. Puis il regarde l'oreiller, dans sa main, comme s'il découvrait qu'il le tenait, et il dit, d'une petite voix d'enfant pris en faute : « Je voulais seulement voir s'il dormait bien. »",
        "Victorine dit qu'il dort très bien. Lezongar hoche la tête. Il redescend. Elle reste sur sa chaise jusqu'au retour de Riec. À sept heures, Kerambrun glisse sous la porte, pour le guichetier, une lettre de renonciation au pari, et sort par la poterne, et s'en va. Lezongar, en apprenant la nouvelle, s'enferme chez lui. On dit au bourg qu'il n'a pas mangé de deux jours. On dit qu'il a donné l'oreiller aux pauvres."
      ],
      choices: [
        { label: "Retourner à Brisegrève", fx: { quest: "SJ" }, back: "A3v_brisegreve" }
      ] },
    SJ_libere: { act: "III", title: "Le pari de la tour", place: "brisegreve", ambiance: "nuit",
      text: [
        "Riec, le guichetier, regarde le billet longtemps. Puis il dit que les ordres de monsieur Lezongar sont de garder la porte fermée jusqu'à minuit, et que les ordres du prisonnier sont de l'ouvrir à quatre heures, et que, quand deux hommes qui vous paient se contredisent, il faut obéir à celui qui a raison. Il donne la clef.",
        "Le deuxième jour, à sept heures du soir, Victorine ouvre la porte de chêne. Kerambrun est debout au milieu de ses livres, habillé d'un vieil habit trop grand qui date de son entrée, un bâton à la main. Il cligne des yeux. Il la regarde, la première personne qu'il voit en face depuis quinze ans. Il dit, d'une voix rouillée, qui a oublié son propre son : « Vous êtes plus petite que votre écriture. »",
        "Elle le conduit par l'escalier à vis, par les couloirs du fort, jusqu'à la poterne de la jetée. Il marche lentement, en s'appuyant au mur, en regardant tout : une araignée, une flaque, un soldat qui bâille. À la poterne, il s'arrête. Devant lui, la mer, la vraie, grise, immense, qui respire. Il reste là. Il ne dit rien. Ses yeux se remplissent, à cause de la lumière, peut-être.",
        "Puis il demande à Victorine si elle veut bien porter sa lettre à monsieur Lezongar, mais après minuit seulement, pour que les règles soient respectées. Et il part, à pied, le long de la jetée, vers le bout, vers rien, avec son bâton, sans se retourner. Elle ne saura pas où il va. Elle sait qu'il a perdu le pari exprès, à cinq heures près, et qu'il a eu l'air, en sortant, d'un homme qui vient d'en gagner un autre."
      ],
      choices: [
        { label: "Retourner à Brisegrève", fx: { quest: "SJ" }, back: "A3v_brisegreve" }
      ] }
  },
  extras: {
    people: {
      lezongar: { name: "Lezongar", qui: "Armateur de Brisegrève, ruiné, qui a parié quinze ans plus tôt deux cent mille écus contre la liberté d'un jeune avocat." },
      kerambrun: { name: "Pierig Kerambrun", qui: "Ancien avocat de Morlenc, enfermé de son plein gré depuis quinze ans dans la tour de l'ouest du fort de Brisegrève, pour gagner un pari." },
      riec: { name: "Riec", qui: "Vieux soldat, guichetier de la tour de l'ouest, qui tient depuis quinze ans le registre des demandes du prisonnier." }
    },
    quests: [
      { id: "SJ", act: "III", kind: "annexe", title: "Le pari de la tour", start: "SJ_armateur", doit: "pari", echo: ["sj:lettre", "sj:garde", "sj:libere"] }
    ]
  }
};
