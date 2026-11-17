// L'Île Folle-Aiguille · side story « Le Remous » (owes its question to A Descent into the Maelström: can one keep, at
// the bottom of terror, the cold eye that sees what floats?). At the Red Reef, Lagadec takes the child in the dinghy to
// fish the red fish of the channel between the rocks. At the turn of the tide, the channel turns: a whirlpool opens,
// slow, then less slow. Lagadec clings to the bench and prays. The child sees that round things sink slower. The child
// lashes himself to the empty water cask and jumps (wp:tonneau), stays in the boat with Lagadec (wp:barque), or drags
// Lagadec to the cask with him (wp:lagadec). Wired in A3n_ecueil.
module.exports = {
  passages: {
    WP_chenal: { act: "III", title: "Le Remous", place: "ecueil_rouge", ambiance: "mer",
      text: [
        "Lagadec connaît un poisson. Il le connaît depuis la Maraude, dit-il, sans dire ce qu'était la Maraude : un poisson rouge comme la roche, gras, à la chair blanche, qui vit dans les chenaux entre les récifs de ce genre de cailloux, et qui mord à n'importe quoi, même à un bout de chiffon. « On en remplit le canot en une heure. La capitaine en mangera. Le bosco en mangera. Et toi, morveux, tu en mangeras deux fois, parce que tu rames. »",
        "Le chenal est un couloir d'eau verte et lisse entre deux murailles de pierre rouge, poreuse, trouée comme une éponge, haute de trois hommes. L'eau y est si claire qu'on voit le fond, à dix brasses, couvert d'algues qui ondulent toutes dans le même sens, lentement, comme des cheveux de noyés. Lagadec avait raison. Les poissons rouges mordent à tout. En une demi-heure, le fond du canot est plein de bêtes qui sautent et qui claquent. Lagadec chante. Tu ne l'as jamais entendu chanter.",
        "Puis tu remarques que les algues, au fond, ont changé de sens. Elles ondulent à présent toutes vers l'ouest, et plus vite. Le canot, sans que tu rames, s'est mis à glisser. Lagadec cesse de chanter. Il regarde l'eau. Il dit un mot, très bas, que tu n'as jamais entendu, et que tu n'oublieras pas : « Le Remous. »",
      ],
      choices: [{ label: "Ramer, de toutes tes forces", to: "WP_tourne" }] },
    WP_tourne: { act: "III", title: "Le Remous", place: "ecueil_rouge", ambiance: "mer",
      text: [
        "Tu rames. Ça ne sert à rien. Le chenal s'est mis à tourner sur lui-même, d'abord comme une eau qu'on remue du doigt dans un baquet, puis comme une roue. Au milieu, à vingt brasses, la surface s'est creusée en entonnoir, lisse, vert sombre, avec des parois qui brillent comme du verre et un fond qu'on ne voit pas, d'où monte un bruit sourd, énorme, un mugissement de bête enfermée sous la terre. Le canot tourne autour, en cercles de plus en plus courts. Les parois de pierre rouge défilent de plus en plus vite.",
        "Lagadec a lâché sa ligne. Il s'est jeté au fond du canot, sur les poissons, et il s'agrippe au banc de nage des deux mains, si fort que ses jointures sont blanches, et il prie, les yeux fermés, à toute vitesse, en mêlant les saints et les jurons. Il pleure. Tu n'as jamais vu un vieil homme pleurer de peur, et tu découvres que c'est pire que de mourir.",
        "Et pourtant, au bout de quelques tours, une chose bizarre arrive : tu cesses d'avoir peur. Tu as atteint, peut-être, le bout de la peur, là où elle se retourne comme un gant. Tu regardes. Tu regardes, calmement, avec une curiosité de savant, comme le professeur regarde ses bêtes. Et tu vois. Tu vois que les débris qui tournent avec vous dans l'entonnoir, algues, planches, poissons morts, ne descendent pas tous à la même vitesse. Les choses plates plongent vite. Les choses longues aussi. Les choses rondes, une gourde, un bout de mât, descendent lentement, très lentement, et restent presque à la même hauteur, tour après tour.",
        "Dans le canot, il y a la barrique d'eau douce, vide, qu'on devait remplir au retour. Ronde. Et un bout de cordage.",
      ],
      choices: [
        { label: "T'amarrer à la barrique, et sauter dans le Remous", fx: { flag: "wp:tonneau" }, to: "WP_tonneau" },
        { label: "Rester dans le canot, avec Lagadec, et tenir", fx: { flag: "wp:barque" }, to: "WP_barque" },
        { label: "Arracher Lagadec à son banc, et l'amarrer avec toi à la barrique", fx: { flag: "wp:lagadec" }, to: "WP_lagadec" },
      ] },
    WP_tonneau: { act: "III", title: "Le Remous", place: "ecueil_rouge", ambiance: "mer",
      text: [
        "Tu cries à Lagadec de faire comme toi. Tu lui montres la barrique, le cordage, les choses rondes. Il ne t'entend pas, ou il ne te comprend pas, ou il ne peut plus lâcher le banc ; il secoue la tête, il prie. Tu t'amarres à la barrique, la corde trois fois autour de la taille. Tu le regardes une dernière fois. Et tu sautes.",
        "L'eau te prend comme une main. Tu tournes, accroché{e} à la barrique, dans le grondement, dans le vert, et tu vois le canot qui tourne au-dessus de toi, puis en dessous, puis plus loin, plus bas, de plus en plus vite, avec une petite silhouette agrippée dedans. Tu tournes longtemps. Ça dure une heure, peut-être, ou une minute. La barrique descend à peine. Et puis, sans qu'on sache pourquoi, la marée tourne, l'entonnoir se comble, s'aplatit, et tu te retrouves à la surface d'une eau calme, verte, lisse, entre deux murailles rouges, flottant au soleil.",
        "Le canot remonte, lui aussi, à cinquante brasses, retourné. Lagadec est accroché dessous, la tête hors de l'eau, vivant, crachant. On vous repêche tous les deux une heure plus tard. Lagadec ne te parle pas pendant trois jours. Le quatrième, il te dit : « Tu m'as laissé. Tu as bien fait. Moi, je me serais laissé aussi. » Ses cheveux, gris la veille, sont blancs, à présent, sur les deux tempes. Les tiens n'ont pas changé. Personne ne croit l'histoire, à bord, sauf Gobert, qui hoche la tête, et qui dit qu'il en a connu un autre, de remous, ailleurs, et qu'il préfère ne pas en parler.",
      ],
      choices: [{ label: "Retourner au mouillage", fx: { quest: "WP" }, back: "A3n_ecueil" }] },
    WP_barque: { act: "III", title: "Le Remous", place: "ecueil_rouge", ambiance: "mer",
      text: [
        "Tu restes. Tu ne sais pas pourquoi ; tu sais seulement que tu ne peux pas le laisser là, seul, au fond d'un canot, en train de pleurer. Tu te couches à côté de lui, sur les poissons, et tu t'agrippes au même banc. Il ouvre les yeux. Il te voit. Il cesse de prier. Il te prend par le col, comme il fait à bord quand il veut t'apprendre un nœud, et il serre, et vous tenez, tous les deux.",
        "Le canot tourne. Il descend. Il se penche, de plus en plus, contre la paroi d'eau verte qui brille, et vous êtes couchés presque à la verticale, collés au banc par la force du tourbillon, et tu vois, très bas, le fond de l'entonnoir, une brume blanche où l'eau se perd en mugissant. Lagadec te parle, à l'oreille, en criant. Il te raconte la Maraude. Il te raconte des choses que tu ne comprends pas, des noms d'hommes, une nuit, une plage, une grande peur qui date d'avant ta naissance. Il te raconte tout ça très vite, comme on vide ses poches avant de se noyer.",
        "Et la marée tourne. L'entonnoir se comble. Le canot remonte, lentement, en tournant de moins en moins vite, et se pose sur une eau lisse, verte, calme, au soleil, à demi plein d'eau et de poissons morts. Lagadec te lâche. Il te regarde. Il se rappelle, tu le vois, tout ce qu'il t'a dit. Il dit seulement : « Tu as rien entendu. Le Remous fait du bruit. » Tu dis que oui, il fait beaucoup de bruit. Vous rentrez à la rame. Il ne te reparle jamais de ce qu'il t'a dit. Toi non plus. Mais il te regarde, désormais, comme on regarde quelqu'un qui garde une clef.",
      ],
      choices: [{ label: "Retourner au mouillage", fx: { quest: "WP" }, back: "A3n_ecueil" }] },
    WP_lagadec: { act: "III", title: "Le Remous", place: "ecueil_rouge", ambiance: "mer",
      text: [
        "Tu t'amarres à la barrique, et tu te jettes sur lui. Il se débat. Il ne veut pas lâcher le banc. Tu le frappes, au visage, du plat de la main, de toutes tes forces, et il te regarde avec stupeur, et il lâche. Tu lui passes la corde autour du corps, deux fois, n'importe comment. Il te mord le bras, d'épouvante, jusqu'au sang. Tu ne lâches pas. Et vous basculez ensemble par-dessus le bord, dans l'eau verte, accrochés à la même barrique.",
        "La barrique ne porte pas deux personnes. Elle s'enfonce. Elle remonte. Elle s'enfonce encore, et tu bois, et tu crois que c'est fini, et tu vois, à travers l'eau, au-dessus de toi, la lumière tourner comme un manège de foire. Puis elle remonte. Elle descend moins vite que le canot, que tu vois passer sous vous, en dessous, avalé par la brume blanche du fond. Lagadec ne se débat plus. Il s'est accroché à toi d'une main et à la barrique de l'autre, et il regarde, comme toi, les choses rondes qui flottent.",
        "La marée tourne. Le Remous s'endort. Vous flottez, au soleil, entre les deux murailles rouges, sur une eau lisse. Le canot ne remonte pas. On vous repêche à la nuit, à moitié morts de froid, et la capitaine fait payer le canot à Lagadec sur sa part. Il paie sans discuter. Ton bras porte une marque de dents, en demi-lune, qui ne partira jamais. Lagadec la regarde, quelquefois, au gaillard d'avant, quand tu remontes ta manche. Il ne dit rien. Il te donne sa ration de rhum, chaque samedi, jusqu'à la fin du voyage, et tu la donnes à Petit-Jules.",
      ],
      choices: [{ label: "Retourner au mouillage", fx: { quest: "WP" }, back: "A3n_ecueil" }] },
  },
  extras: {
    quests: [
      { id: "WP", act: "III", kind: "annexe", title: "Le Remous", start: "WP_chenal", doit: "maelstrom", echo: ["wp:tonneau", "wp:barque", "wp:lagadec"] },
    ],
  },
};
