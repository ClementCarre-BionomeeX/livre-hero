// L'Île Folle-Aiguille · side story « Le plongeur de l'Écueil » (owes its question to Philoctetes: may one deceive a
// man who was wronged, to take from him what one's own side needs?). On the far side of the Écueil-Rouge, in a lava
// tube, lives Mathurin Bodénès, an old pearl diver left there nine years ago by his own schooner because of a wound that
// stinks and never closes. The monk feeds him and never speaks of him. He keeps a purse of black pearls. The baron,
// who has heard of it, sends the child: win his trust, promise him a passage, bring the pearls. The child lies and takes
// them (zl:ruse), tells him who sent them (zl:vrai), or comes back empty-handed and says there was nothing (zl:rien).
// Wired in A3n_ecueil (needs the baron alive).
module.exports = {
  passages: {
    ZL_baron: { act: "III", title: "Le plongeur de l'Écueil", place: "cormorane", ambiance: "mer",
      fx: { meet: "bodenes" },
      text: [
        "Le baron Clavières te fait appeler dans sa cabine, le premier soir de l'Écueil, ce qu'il n'a jamais fait. Il a tiré sa chaise près du hublot, à cause de l'odeur de soufre, et il se rafraîchit les tempes avec un mouchoir trempé dans l'eau de senteur. Il t'offre une figue confite. Tu la prends. Une figue confite du baron, à bord, vaut une semaine de solde.",
        "« Il y a sur ce rocher un deuxième habitant, dit-il, que le moine cache comme un péché. Un plongeur de perles, un vieux, abandonné là par son propre équipage, il y a des années, pour une plaie au pied qui empestait le bord. Les gens de la goélette qui nous a donné l'eau, à Brisegrève, m'en ont parlé. Il paraît qu'il a gardé sa récolte. Des perles noires. Une bourse pleine. » Il pose son mouchoir. « Il ne parlera ni à moi, ni à la capitaine, ni au professeur. Il déteste les hommes. Les enfants, c'est autre chose. Tu lui portes à manger, tu lui parles du pays, tu lui promets qu'on le ramènera à Morlenc. Et tu me rapportes la bourse. »",
        "Il te regarde. « Je ne te demande pas de voler. Je te demande de le convaincre. Il n'a plus l'usage de ces perles. Moi, si. Tu auras ta part. Une perle. Une seule, de ces perles-là, c'est un toit neuf pour le Fanal, et une barque à ton père, qui ne s'en servira pas. »",
      ],
      choices: [{ label: "Faire le tour du récif, avec un panier", to: "ZL_tube" }] },
    ZL_tube: { act: "III", title: "Le plongeur de l'Écueil", place: "ecueil_rouge", ambiance: "souterrain",
      text: [
        "Le tube de lave s'ouvre de l'autre côté du cratère, sur la mer, à trois pieds au-dessus des vagues : une bouche ronde, lisse, noire, comme si la montagne avait craché un serpent de feu et que le serpent, en refroidissant, avait laissé sa peau. On sent l'odeur avant d'entrer. Une odeur sucrée, épaisse, de chair qui s'oublie, qui se mêle au soufre et qui fait monter les larmes.",
        "Il est au fond, assis sur un lit d'algues sèches, sous un trou du plafond par où tombe un rond de jour. Un homme de soixante ans, peut-être, noir de soleil et de crasse, maigre comme un filet qui sèche, avec une barbe blanche jusqu'à la ceinture et des yeux rougis par le sel, d'une fixité de crabe. Son pied gauche, posé sur une pierre, est enveloppé de chiffons. Autour de lui, dans la roche, des encoches : des milliers de petits traits, par groupes de sept.",
        "« Le moine t'envoie ? dit-il. Le moine n'envoie personne. » Il regarde ton panier, le pain frais, le lard, la gourde de vin. « Un navire, alors. Ça fait trois ans qu'il n'en est pas passé. Lequel ? »",
        "Tu lui dis le nom. Il répète *la Cormorane*, lentement, deux fois, comme on goûte un vin. Puis il mange. Il mange comme un chien, à deux mains, en surveillant l'entrée. Quand il a fini, il défait les chiffons de son pied, sans pudeur, pour te montrer, et tu détournes la tête, et il rit, d'un rire de gorge, sans dents.",
        "« Voilà pourquoi on m'a laissé, dit-il. Une raie, à la pêche, en plongée, il y a neuf ans. Ça ne guérit pas. Ça pue. L'équipage a fait une pétition au patron. Une nuit, on a mouillé ici pour l'eau, on m'a porté à terre en me disant qu'on allait me baigner le pied dans une source chaude, pour le soigner. Le temps que je me retourne, la goélette avait levé l'ancre. Ils m'ont même laissé ma part de perles. C'étaient des gens honnêtes. »",
      ],
      choices: [{ label: "Y retourner le lendemain, et le surlendemain", to: "ZL_amitie" }] },
    ZL_amitie: { act: "III", title: "Le plongeur de l'Écueil", place: "ecueil_rouge", ambiance: "souterrain",
      text: [
        "Tu reviens. Il t'attend, le deuxième jour, assis à l'entrée du tube, peigné, la barbe lavée à l'eau de mer, ce qui lui donne l'air d'un prophète qui se serait mis en frais. Il te raconte les bancs de perles du Couchant, les plongées à quinze brasses, une pierre aux pieds, le cœur qui cogne dans les oreilles, les huîtres grandes comme des assiettes qu'on ouvre au couteau sur le pont, par centaines, pour trouver une perle dans la centième. Il te montre comment retenir son souffle. Tu tiens une minute. Il en tenait trois.",
        "Le troisième jour, il te montre la bourse. Il la sort d'une fente de la roche, derrière son lit. Une bourse de peau de requin, et dedans, quand il la renverse dans le creux de sa main, une poignée de perles noires, une trentaine, rondes, lourdes, avec ce lustre de nuit qui semble venir du dedans, comme un œil. Il les fait rouler. Il dit qu'avec une seule de ces perles on achète une maison à Morlenc. Avec toutes, une rue.",
        "« Je n'ai pas de rue à acheter, dit-il. J'ai un trou. » Il te regarde, de ses yeux rouges. « Toi, petit, ton navire, il repasse par ici, au retour ? »",
        "Tu sais ce que le baron veut que tu répondes. Tu sais aussi que la Cormorane ne prendra pas à bord un homme dont la plaie empeste, pas plus que la goélette ; la capitaine Ribaud a refusé la semaine dernière un mouton malade, à Brisegrève, pour moins que ça. Le baron le sait aussi. Il n'a jamais été question de le ramener.",
      ],
      choices: [
        { label: "« Oui. On vous ramène. Donnez-moi la bourse à garder, pour le voyage. »", fx: { flag: "zl:ruse" }, to: "ZL_ruse" },
        { label: "Lui dire qui t'envoie, et pourquoi", fx: { flag: "zl:vrai" }, to: "ZL_vrai" },
        { label: "Ne rien répondre, et dire au baron qu'il n'y avait pas de perles", fx: { flag: "zl:rien" }, to: "ZL_rien" },
      ] },
    ZL_ruse: { act: "III", title: "Le plongeur de l'Écueil", place: "ecueil_rouge", ambiance: "souterrain",
      text: [
        "Il hésite très peu. C'est ce qui est terrible. Il te tend la bourse avec un petit rire de soulagement, comme un homme qui pose un fardeau, et il dit qu'il fera ses paquets, qu'il n'a rien, que ce sera vite fait. Il demande seulement s'il aura un hamac, ou s'il faudra dormir sur le pont. Il préfère le pont. Il a perdu l'habitude des plafonds bas, à part le sien.",
        "Le baron prend la bourse sans un mot, la vide sur sa couchette, compte les perles deux fois, et t'en tend une, la plus petite, avec un sourire d'une grande délicatesse. « Un toit neuf, dit-il. Pour ton père. Tu as été parfait. » Il met les autres dans une boîte à priser. La Cormorane lève l'ancre le lendemain à l'aube.",
        "Tu es sur le pont, à la poupe, quand elle passe au large de l'autre côté du récif. Il est là, à l'entrée de son tube de lave, debout sur son pied valide, appuyé à un bâton, avec un baluchon à l'épaule. Il lève la main. Il la garde levée longtemps. Puis il comprend, et il la baisse, lentement, et il reste là, sans bouger, à regarder le navire s'en aller, comme il a regardé l'autre, il y a neuf ans.",
        "La perle noire est dans ta poche. Elle est lourde.",
      ],
      choices: [{ label: "Regarder le récif s'éloigner", fx: { quest: "ZL" }, back: "A3n_ecueil" }] },
    ZL_vrai: { act: "III", title: "Le plongeur de l'Écueil", place: "ecueil_rouge", ambiance: "souterrain",
      text: [
        "Tu lui dis tout. Le baron, la figue confite, la bourse, le toit neuf du Fanal. Il t'écoute sans t'interrompre, la bourse ouverte dans le creux de la main, les perles noires qui luisent comme une couvée d'yeux.",
        "Quand tu as fini, il remet les perles dans la bourse, une à une, en les comptant, et il la range dans la fente de la roche. « Ton baron, dit-il, c'est mon patron de goélette, avec un plus beau chapeau. Je les connais. Ils sont honnêtes. Ils ne volent jamais : ils convainquent. » Il crache. « Et toi, il t'a envoyé{e} parce qu'un enfant, ça ne sait pas mentir. Il s'est trompé de moitié. Tu sais. Tu as préféré ne pas. »",
        "Il reprend la bourse. Il en tire une perle, une seule, la plus belle, grosse comme un pois chiche, d'un noir de fond de puits, et il te la met dans la main, et il te referme les doigts dessus, de sa main sèche et dure. « Celle-là, elle n'est pas pour ton baron. Elle est pour toi. Le reste, je le garde. On me l'a laissé, c'est à moi. Je n'ai pas de rue à acheter. Mais j'aime les regarder. »",
        "Au baron, tu dis que le vieux a refusé. Le baron te regarde longtemps, avec une sorte de curiosité d'entomologiste, puis il te tend une deuxième figue confite. « Tu as raison, dit-il. Il ne faut jamais rien obtenir de quelqu'un qui n'a plus rien à perdre. Ça porte malheur. » Tu n'es pas sûr{e} qu'il le pense.",
      ],
      choices: [{ label: "Regarder le récif s'éloigner", fx: { quest: "ZL" }, back: "A3n_ecueil" }] },
    ZL_rien: { act: "III", title: "Le plongeur de l'Écueil", place: "ecueil_rouge", ambiance: "souterrain",
      text: [
        "Tu ne réponds pas à sa question. Il comprend, à ton silence, que la Cormorane ne repassera pas, ou qu'elle repassera sans le voir ; il hoche la tête ; il range la bourse ; il te montre encore une fois, pour finir, comment retenir son souffle, et tu tiens une minute et demie, et il dit que c'est bien, qu'avec de l'entraînement tu tiendrais deux.",
        "Au baron, tu dis qu'il n'y avait pas de perles. Que le vieux était fou, qu'il racontait des histoires, qu'il n'avait qu'un lit d'algues et un pied pourri. Le baron te regarde, longtemps. Il ne te croit pas. Il hausse les épaules. « Dommage, dit-il. Pour ton père. » Et il reprend son mouchoir trempé dans l'eau de senteur.",
        "Le dernier soir, avant qu'on lève l'ancre, tu fais le tour du récif, une dernière fois, avec un panier : du pain, du lard, une gourde, du tabac volé à la cambuse, et un couteau. Tu laisses tout à l'entrée du tube. Tu ne le vois pas. Au moment où tu repars, une voix sort du fond de la roche, rauque, sans dents, qui compte, à voix haute, lentement : *un… deux… trois…* Il compte ton souffle, comme si tu plongeais.",
      ],
      choices: [{ label: "Regarder le récif s'éloigner", fx: { quest: "ZL" }, back: "A3n_ecueil" }] },
  },
  extras: {
    people: {
      bodenes: { name: "Mathurin Bodénès", aka: ["le plongeur", "le vieux du tube de lave"], qui: "Un vieux plongeur de perles, abandonné sur l'Écueil-Rouge par sa propre goélette." },
    },
    quests: [
      { id: "ZL", act: "III", kind: "annexe", title: "Le plongeur de l'Écueil", start: "ZL_baron", doit: "philoctete", echo: ["zl:ruse", "zl:vrai", "zl:rien"] },
    ],
  },
};
