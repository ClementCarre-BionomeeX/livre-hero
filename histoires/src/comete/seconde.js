// The second reading: the foot of the mountain again, and the doors that only open to a reader who has seen the
// night once. Every passage here is `second: true` (the engine offers no way into them in the first reading).
module.exports = {
  // ------------------------------------------------------------------ act I, again
  S_pied: { act: "I", title: "Le pied du mont Escalle, encore", place: "pied", second: true,
    text: [
      "Le dernier abreuvoir. Les deux ornières qui montent sous les mélèzes. La face violette du mont Escalle, ses crêtes dorées, et la Veille tout en haut, qui accroche le soleil couchant comme un clou accroche un chiffon.",
      "Tout est à sa place, exactement. Le même corbeau croasse dans le même mélèze. Le même nuage, long et mince, s'effiloche au-dessus du col. Tes jambes ont la fatigue de l'après-midi, et ta tête a la fatigue d'une nuit entière : la coupole, la lunette, le coffre vide, un vieil homme qui glisse le long d'un pied de fonte en te serrant le poignet.",
      "Tu portes la main à ta veste. Le pli est là, raide, cacheté de noir. Intact. Tu sais ce qu'il y a dedans : une feuille, une ligne chiffrée, et une signature d'une seule lettre.",
      "À l'est, le ciel est encore vide. La Glaneuse sortira de derrière la montagne à neuf heures pile. Elle touchera la Lyre à trois heures. Tu as dix heures.",
    ],
    choices: [
      { label: "Briser le cachet maintenant, sans attendre la Lyre", hide: { seen: "S_pli_tot" }, fx: { item: "pli_ouvert", drop: "pli" }, to: "S_pli_tot" },
      { label: "Monter sous les mélèzes", to: "A_meleze" },
      { label: "Courir droit au col", to: "A_borne" },
    ] },

  S_pli_tot: { act: "I", title: "Le cachet noir", place: "pied", second: true, puzzle: "p_pli",
    text: [
      "Tu brises la cire avec ton pouce. Le cachet cède avec un petit bruit sec, et tu as l'impression, absurde, d'avoir fait du bruit dans une église.",
      "La feuille, l'écriture penchée, tremblée. *À toi qui reviens.* La ligne de capitales. La signature : *O.* Tu la lis au pied de la montagne, dans la lumière rousse, et la phrase du haut n'a plus du tout le même sens. Elle s'adresse à toi, ce soir, et il faudrait être sot pour ne pas l'entendre.",
    ],
    choices: [
      { back: "S_pied" },
    ] },

  S_haie_soir: { act: "I", title: "Le long de la haie", place: "ermitage", second: true,
    fx: { flag: "cosme:vu_haie" },
    text: [
      "Tu longes la haie courbé{e} en deux, dans son ombre, là où la lumière du soir ne descend plus. Les feuilles sont froides, vernies, dures comme du cuir. Tu entends un bruit de sécateur avant de voir quoi que ce soit.",
      "Frère Cosme est de l'autre côté de la haie, dans le potager. Il porte des gants de cuir épais, des gants de forgeron, et il coupe des rameaux qu'il fait tomber dans un panier, un par un, avec soin, sans jamais porter les doigts à sa figure. Le panier est plein. Il le soulève, l'emporte jusqu'à la fenêtre de sa cellule et s'assoit sur l'appui. Tu le vois piler les feuilles dans un mortier de pierre, longtemps, puis verser la pâte dans un linge et tordre le linge au-dessus d'une fiole. Il en sort quelques gouttes d'un vert trouble.",
      "Il bouche la fiole, la glisse dans la manche de sa bure, retire ses gants, et va se laver les mains à la fontaine, longuement, en fredonnant un air d'église.",
      "Une odeur flotte jusqu'à toi, portée par le soir : l'amande.",
    ],
    choices: [
      { label: "Contourner la haie et te présenter à l'ermitage, comme si de rien n'était", to: "A_ermitage" },
    ] },

  S_haie: { act: "I", title: "La haie noire", place: "ermitage", second: true,
    fx: { flag: "feuille" },
    text: [
      "Tu t'arrêtes devant la haie, comme on s'arrête pour admirer un jardin. Les feuilles sont longues, vernies, d'un vert si foncé qu'il en devient noir. Tu en casses une entre tes doigts.",
      "L'odeur monte aussitôt : l'amande, douce, puis amère au fond de la gorge. L'odeur de la coupole à trois heures.",
      "Tu glisses la feuille cassée dans ta manche. Quand tu te retournes, Frère Cosme te regarde depuis la porte de la chapelle, sa lanterne à la main, et il te sourit. « Belle haie, n'est-ce pas ? dit-il. Le laurier des chèvres. Elle protège mon potager. Les bêtes n'y touchent pas. Elles savent. »",
    ],
    choices: [
      { back: "A_ermitage" },
    ] },

  S_cosme_parti: { act: "I", title: "Seul dans la chapelle", place: "ermitage", second: true,
    text: [
      "Tu t'assois sur le banc de la chapelle et tu te prends la tête dans les mains. Ce n'est pas tout à fait une comédie : la montée, la nuit d'avant, celle qui vient, tout pèse.",
      "Frère Cosme s'approche, inquiet. « Le mal des hauteurs. Ça prend les gens qui montent trop vite. » Il te touche l'épaule. « Ne bougez pas. Je vais vous chercher du lait chaud et du miel. » Il sort, emportant sa lanterne, et tu l'entends traverser la cour vers sa cellule.",
      "Tu es seul{e} dans la chapelle, à la lumière des deux cierges. Le reliquaire de cuivre brille dans sa niche, derrière l'autel. Sa serrure a huit roues de lettres.",
    ],
    choices: [
      { label: "Essayer la serrure du reliquaire", hide: { has: "enigme:p_psautier" }, to: "S_reliquaire_serrure" },
      { back: "A_chapelle" },
    ] },

  S_reliquaire_serrure: { act: "I", title: "Le reliquaire", place: "ermitage", second: true, puzzle: "p_psautier",
    text: [
      "Tu passes derrière l'autel. Le reliquaire est une petite châsse de cuivre repoussé, grande comme une boîte à ouvrage. Les huit roues de sa serrure sont gravées de l'alphabet. Sur le lutrin, à portée de main, le psautier reste ouvert sur l'hymne du frère.",
    ],
    choices: [
      { back: "S_cosme_parti" },
    ] },

  S_reliquaire: { act: "I", title: "Ce que garde le reliquaire", place: "ermitage", second: true,
    fx: { item: "lettre_chapitre" },
    text: [
      "Les huit roues s'alignent, et le couvercle se soulève avec un soupir de charnière.",
      "Il n'y a pas d'os de saint dans le reliquaire. Il y a une fiole vide qui sent l'amande, une paire de gants de cuir pliée, et une lettre pliée en huit, sous un sceau de cire violette aux clefs croisées : le sceau du Chapitre de Salvagnes.",
      "Tu la lis à la lumière des cierges, vite, en tendant l'oreille vers la cour. *Il faut que la nuit de la Glaneuse soit un signe, et qu'un signe ne puisse pas se calculer.* Et plus bas : *Faites comme fit votre prédécesseur. Le laurier des chèvres n'a jamais trahi personne.*",
      "Tu glisses la lettre sous ta chemise, contre ta peau. Tu refermes le reliquaire, tu brouilles les roues, et tu reviens t'asseoir sur le banc, la tête dans les mains, juste avant que Frère Cosme n'entre avec un bol de lait fumant et son plus doux sourire.",
    ],
    choices: [
      { label: "Boire son lait, le remercier, et reprendre la montée", to: "A_ermitage" },
    ] },

  // ------------------------------------------------------------------ act II, again
  S_dire: { act: "II", title: "Ce que tu sais", place: "veille", second: true,
    text: [
      "Tu attends que Lise soit montée et que Tobie siffle dans l'atelier. Puis tu t'approches du fauteuil, et tu le dis, simplement, parce qu'il n'y a pas de manière habile de dire une chose pareille.",
      "Tu as déjà vécu cette nuit. À trois heures, quand la Glaneuse touchera la Lyre, il mourra devant sa lunette.",
      "Maître Vellérin te regarde. Puis il éclate d'un rire immense, qui fait trembler les globes sur leurs pieds. « Merveilleux ! Le Recteur m'envoie un porteur, et le porteur est fou. C'est le Collège tout entier en raccourci. » Il essuie ses yeux. « Vous avez lu ça où ? Dans l'almanach des bergers ? Chez le Grand Chantre ? »",
      "Tu ne réponds pas. Tu le regardes. Et le rire s'arrête, d'un coup, comme on lâche une corde.",
      { if: "enigme:p_pli", text: "Tu poses sur ses genoux la lettre du pli, ouverte, et sous la ligne de capitales, au crayon, ce que tu y as lu. Il regarde son écriture, puis la tienne. Il ne dit rien. Ses doigts se sont mis à trembler." },
      "Il se penche en avant. Ses yeux très bleus fouillent les tiens. Sa voix, quand elle revient, est basse, presque douce, et c'est la chose la plus effrayante que tu aies entendue sur cette montagne.",
      "« Si c'est vrai, dit-il, alors j'ai dit quelque chose, en mourant. Tout le monde dit quelque chose. » Il pose ses deux mains osseuses sur les accoudoirs. « Qu'est-ce que j'ai dit ? »",
    ],
    choices: [
      { label: "Lui redire ses derniers mots", to: "S_mot" },
      { label: "« Vous étiez le porteur, il y a soixante et onze ans. »", if: "enigme:p_registre", to: "S_porteur" },
      { label: "Ne rien ajouter et le laisser à son feu", to: "B_salle" },
    ] },

  S_mot: { act: "II", title: "Ses derniers mots", place: "veille", second: true, puzzle: "p_mot",
    text: [
      "Le feu craque. Le vieil homme ne bouge plus.",
    ],
    choices: [
      { back: "B_salle" },
    ] },

  S_porteur: { act: "II", title: "Le porteur", place: "veille", second: true,
    fx: { flag: "confiance" },
    text: [
      "Tu lui récites la ligne du cahier gris, celle que l'enfant avait écrite à l'envers de l'alphabet, pour que personne ne la lise.",
      "Il ferme les yeux. Ses lèvres bougent ; il la récite avec toi, et sa voix de vieillard se brise au dernier mot, comme une voix de garçon qui mue.",
      "« Personne, dit-il, personne n'a jamais trouvé la clef de ce cahier. Le Recteur l'a eu entre les mains, Lise l'a eu, trois générations d'élèves l'ont eu. C'est le chiffre des enfants. Il faut regarder dans un miroir pour le comprendre. » Il rouvre les yeux. « Tu as regardé dans le miroir. »",
    ],
    choices: [
      { label: "Hocher la tête", to: "S_confiance" },
    ] },

  S_confiance: { act: "II", title: "Il te croit", place: "veille", second: true,
    fx: { flag: "confiance", qui: { vellerin: "L'astronome de la Veille. Il te croit." } },
    text: [
      "Maître Vellérin se laisse aller contre le dossier de son fauteuil, et il vieillit de vingt ans en une seconde ; ou plutôt, il cesse de les cacher. Ses mains tremblent sur le renard de sa robe de chambre. Il regarde le feu.",
      "« L'amande, répète-t-il à voix basse. L'amande. Toute ma vie, j'ai cherché ce qu'il avait senti, lui, avant de tomber. Il m'avait dit un mot, à moi aussi. Un seul. *Amande.* J'avais quinze ans, j'ai cru qu'il délirait. »",
      "Il se tourne vers toi. Il n'y a plus ni tonnerre, ni vanité, ni barbe de prophète : un vieil homme qui a attendu quelqu'un toute sa vie et qui le voit enfin, et qui le trouve plus petit que prévu, et qui lui en est reconnaissant quand même.",
      "« Alors c'est toi, dit-il. Je t'ai écrit ce pli au printemps, quand le Recteur est monté me voir. Je lui ai dit : envoie-moi pour la Glaneuse un porteur qui n'ait jamais mis le pied ici. Il a cru que c'était une lubie de vieillard. C'en était une. » Il a un pauvre sourire. « Assieds-toi. Il faut que je te raconte, et il faut que tu me dises qui. »",
    ],
    choices: [
      { label: "T'asseoir et l'écouter", to: "S_histoire" },
    ] },

  S_histoire: { act: "II", title: "L'an 312", place: "veille", second: true,
    text: [
      "« J'avais quinze ans, dit-il. Porteur juré depuis la Saint-Martin, fier comme un coq, avec mon insigne cousu de travers. Le Recteur de ce temps-là m'a donné une lettre pour Maître Sérac. Une facture, je l'ai su plus tard : trois livres d'huile de lampe. Je suis monté. J'ai mangé la soupe au Pas-de-l'Ours, chez la grand-mère de Baptistin, qui m'a fait payer en devinette. Je suis arrivé ici à la nuit. »",
      "« Sérac était un grand homme maigre qui riait tout le temps. Il m'a fait regarder dans la lunette. Il m'a laissé toucher le miroir. À trois heures, il a bu sa mélisse, il a mis l'œil à la lunette, il a dit : *elle touche*. Et il est tombé. Il m'a pris le poignet. Il a dit : *amande*. Et il est mort. »",
      "Le vieil homme fixe le feu. « Quelqu'un avait arraché la housse du miroir. J'ai regardé dedans. Et je me suis retrouvé au pied de la montagne, au soleil couchant, avec ma facture dans la poche. »",
      "« La deuxième fois, j'ai couru. J'ai supplié Sérac de ne pas regarder la Lyre, de ne rien boire, de ne rien manger. Il a ri. Il m'a pris pour un petit superstitieux de la vallée. À deux heures, ses cahiers ont disparu de sa table ; je les avais cachés moi-même dans mon sac, ceux-là au moins, parce que la première fois on les avait volés. À trois heures, il est mort quand même. Je n'ai pas su comment. Je n'ai pas su qui. J'ai regardé le miroir de toutes mes forces, et cette fois, il ne s'est rien passé. L'aube est venue, c'est tout. Une nuit, un homme ne la vit que deux fois. »",
      "Il se tait longtemps. « J'ai gravé un mot sur sa tombe, avec mon couteau de porteur. Je ne sais pas si c'était pour lui ou pour moi. Puis j'ai passé soixante et onze ans à finir ses Tables, à attendre cette nuit, et à me demander qui. Il y avait un ermite, alors, à l'ermitage. Frère Anselme. Il sentait le miel. Il est monté tous les soirs jusqu'à sa mort. Je ne lui ai jamais rien prouvé. »",
      "Il tourne vers toi ses yeux très bleus. « Toi, tu as vu la nuit jusqu'au bout. Qui ? »",
    ],
    choices: [
      { label: "Lui montrer la lettre du Chapitre", if: { item: "lettre_chapitre" }, to: "S_preuve_lettre" },
      { label: "Lui parler de la haie de l'ermitage, et du frère", if: { any: [{ has: "feuille" }, { has: "cosme:vu_haie" }] }, to: "S_preuve_laurier" },
      { label: "Lui montrer la page de l'herbier de Frère Anselme", if: { all: [{ item: "page_anselme" }, "enigme:p_anselme"] }, to: "S_preuve_anselme" },
      { label: "Lui dire seulement : « Ne buvez pas votre mélisse, à trois heures. »", to: "S_mise_en_garde" },
    ] },

  S_preuve_lettre: { act: "II", title: "Le sceau violet", place: "veille", second: true,
    fx: { flag: ["vellerin:sait", "vellerin:prevenu"] },
    text: [
      "Tu sors de ta chemise la lettre au sceau violet et tu la lui tends. Il chausse ses lunettes. Il lit une fois, deux fois. À la seconde lecture, ses mains cessent de trembler. Elles deviennent dures.",
      "« *Faites comme fit votre prédécesseur.* » Il replie la lettre avec un soin extrême, comme on replie le linceul d'un ami. « Anselme. J'avais raison, pendant soixante et onze ans, et je n'ai jamais pu le dire. » Il regarde vers la porte des cuisines. « Et Cosme. Cosme, qui m'apporte du miel depuis vingt ans. Qui m'a soigné une pleurésie. Qui me lit les psaumes quand je fais semblant de dormir. »",
      "Il garde la lettre. « Bien. Ce soir, je ne boirai rien de ce qu'il m'apporte. Et à trois heures, nous verrons ce qu'un caillou de glace pense des chanoines. »",
    ],
    choices: [
      { label: "Lui demander ce qu'il compte faire", to: "S_plan" },
    ] },

  S_preuve_laurier: { act: "II", title: "Le laurier des chèvres", place: "veille", second: true,
    fx: { flag: ["vellerin:sait", "vellerin:prevenu"] },
    text: [
      "Tu lui racontes la haie noire de l'ermitage, les feuilles qui sentent l'amande quand on les casse, et les chèvres qui n'y touchent pas.",
      { if: { has: "cosme:vu_haie" }, text: "Tu lui racontes les gants de forgeron, le mortier, le linge tordu au-dessus d'une fiole, et le frère qui se lave les mains longtemps en fredonnant." },
      { if: { has: "feuille" }, text: "Tu sors de ta manche la feuille cassée. Il la porte à son nez, et il ferme les yeux." },
      "« Cosme, dit-il. Non. » Puis, plus bas : « Pourquoi non ? Anselme aussi m'apportait du miel. » Il se frotte la figure de ses deux mains. « Je suis un homme de science. Je devrais exiger des preuves. Je suis surtout un homme de quatre-vingt-six ans qui a peur. Je ne boirai rien de ce qu'il m'apporte, ce soir. Ce n'est pas une preuve. C'est une précaution. »",
    ],
    choices: [
      { label: "Lui demander ce qu'il compte faire", to: "S_plan" },
    ] },

  S_mise_en_garde: { act: "II", title: "Une précaution", place: "veille", second: true,
    fx: { flag: "vellerin:prevenu" },
    text: [
      "« Ma mélisse ? » Il te regarde, interloqué. « Je bois de la mélisse depuis cinquante ans. C'est la seule chose que mon médecin et moi ayons jamais approuvée ensemble. »",
      "Tu insistes. Il soupire, avec une mauvaise grâce royale.",
      "« Bon. Je ne la boirai pas. Je la sentirai, au moins, avant. Mon nez a quatre-vingt-six ans, mais il a travaillé moins que mes yeux. » Il te dévisage. « Tu ne me dis pas qui. Tu ne le sais pas, ou tu n'oses pas. Dans les deux cas, cherche. Il te reste six heures, et moi, il m'en reste peut-être autant. »",
    ],
    choices: [
      { label: "Lui demander ce qu'il compte faire", to: "S_plan" },
    ] },

  S_plan: { act: "II", title: "Ce qu'on peut faire", place: "veille", second: true,
    text: [
      "Le vieil homme se lève, va jusqu'à la meurtrière de l'est, regarde la Glaneuse qui monte. Il te parle sans se retourner.",
      "« Je ne descendrai pas de cette tour. Je ne quitterai pas ma lunette cette nuit, même si la mort elle-même me tire par la barbe. J'ai attendu soixante et onze ans pour voir la Glaneuse toucher la Lyre, et je la verrai. » Il se retourne. « Tout le reste, fais-le. Tu as ma confiance, mes clefs et mon apprenti. Tobie connaît tous les trous de cette tour. Les Tables sont dans le coffre de Lise ; la serrure est l'année de la mort de Sérac. Lise est une sotte qui veut partir et qui a raison. L'envoyée du Prince est une intrigante qui a raison aussi. Son capitaine ne dit rien, ce qui est souvent la marque d'un homme qui a raison. Il y a beaucoup de gens qui ont raison, dans cette tour, et pas un qui pense comme moi. »",
      "« Va. Et sois à côté de moi à trois heures. »",
    ],
    choices: [
      { back: "B_salle" },
    ] },

  S_flasque_maladresse: { act: "II", title: "Une maladresse", place: "veille", second: true,
    fx: { flag: "flasque:prise", item: "flasque" },
    text: [
      "Tu tends le bras vers le pain, et ton gobelet de vin bascule tout entier sur la robe de chambre du maître. Le vin coule dans le renard. Tobie éclate de rire, Lise lève les yeux au ciel, Dame Hélis a un petit sourire de cour.",
      "« Imbécile ! tonne le maître. Maladroit{e} ! » Il se lève, superbe d'indignation, et il ajoute, d'une voix qui fait trembler les gobelets : « Venez m'aider à me changer, au moins, puisque vous m'avez noyé. »",
      "Dans sa chambre, au-dessus, il referme la porte et sort de sa poche la flasque d'étain. Il te la tend sans un mot. Tu la débouches : la mélisse, verte, citronnée, et dessous, l'amande.",
      "Tu verses la flasque dans une petite bouteille vide que le maître prend sur sa table de nuit, et tu la bouches serré. Puis tu remplis la flasque d'eau, à la cruche de sa toilette, et tu y froisses une feuille de la mélisse sèche qui pend au mur. Il la renifle. « Ça sent ma mélisse et la citerne, dit-il. Le frère est un meilleur apothicaire que toi. Mais à trois heures, un vieillard qui boit ce qu'on lui a toujours servi ne sent rien du tout. »",
      "Il remet la flasque dans la poche de sa robe propre, et tu gardes la bouteille.",
    ],
    choices: [
      { back: "B_salle" },
    ] },

  S_mortier: { act: "II", title: "Le fond du mortier", place: "veille", second: true,
    text: [
      "Frère Cosme se penche sur son vin, le dos tourné. Tu passes l'ongle au fond du mortier et tu essuies la pâte verte dans ton mouchoir, que tu replies et glisses dans ta poche. Sous la cannelle et le girofle, ton mouchoir sent l'amande.",
      "Frère Cosme se retourne avec sa cuillère, te voit les mains vides, et te tend un morceau de pain d'épice. « Pour patienter jusqu'à minuit. »",
    ],
    choices: [
      { back: "B_salle" },
    ] },

  S_mortier_vu: { act: "II", title: "Le pain d'épice", place: "veille", second: true,
    fx: { flag: "cosme:mefiant" },
    text: [
      "Tu tends la main vers le mortier au moment précis où Frère Cosme se retourne. Il voit ton geste. Il ne dit rien. Il prend le mortier, le plonge dans le seau d'eau, le frotte au chiffon et le pose à l'envers sur l'égouttoir.",
      "« Vous avez faim, dit-il avec douceur. Tenez. » Il te tend un morceau de pain d'épice. Son sourire ne bouge pas. Ses yeux, si.",
    ],
    choices: [
      { back: "B_salle" },
    ] },

  S_tables_cachees: { act: "II", title: "L'escalier muré", place: "veille", second: true,
    fx: { meet: ["tobie"] },
    text: [
      "Tu vas chercher Tobie à l'atelier. Il comprend tout de suite, ou fait semblant, ce qui chez un garçon de quatorze ans revient au même.",
      "Il te mène derrière la bibliothèque, déplace trois in-folio sur une étagère basse, et retire deux pierres descellées : derrière, un escalier en colimaçon, étroit, noir, plein de toiles d'araignée et d'un air froid qui monte du fond de la tour. « L'escalier de service, chuchote-t-il. On l'a muré il y a quarante ans. Moi, je l'ai démuré, un peu. »",
      "Vous y descendez les quatre registres un par un, enveloppés dans une couverture, jusqu'à une niche où Tobie range ses trésors : un nid de choucas, un crâne de marmotte, deux lentilles ratées. Vous posez les Tables au milieu. Tobie remet les pierres.",
      "Dans le cabinet, le coffre est vide et refermé, ses molettes brouillées. Celui qui l'ouvrira cette nuit le trouvera exactement comme la première fois.",
    ],
    choices: [
      { back: "B_cabinet" },
    ] },

  S_tiroir2: { act: "II", title: "Le second tiroir", place: "veille", second: true,
    fx: { item: "lettre_ostrade" },
    text: [
      "Les lettres mobiles s'alignent sur le second mot, et la bague de laiton laisse sortir un tiroir plus profond que le premier, que le premier cachait.",
      "Dedans, une feuille jaunie, pliée en quatre. L'écriture est appliquée, ronde, l'écriture d'un garçon qui s'applique à écrire comme un homme. *Je m'appelle Ostrade Vellérin, j'ai quinze ans, je suis porteur juré du Collège depuis la Saint-Martin.*",
      "Tu la lis jusqu'au bout, debout devant le miroir, dans le froid de la coupole. *Je serai vieux. Je serai peut-être bête. Viens quand même.*",
    ],
    choices: [
      { label: "Porter la lettre au maître", if: "confiance", hide: { seen: "S_tiroir2_maitre" }, to: "S_tiroir2_maitre" },
      { back: "B_coupole" },
    ] },

  S_tiroir2_maitre: { act: "II", title: "Le garçon de quinze ans", place: "veille", second: true,
    fx: { flag: "vellerin:lettre" },
    text: [
      "Tu poses la feuille sur ses genoux. Il la reconnaît avant de l'avoir dépliée.",
      "Il la lit lentement, en remuant les lèvres comme un enfant qui apprend. Quand il arrive à la dernière ligne, il a un rire qui ressemble à un sanglot, ou l'inverse.",
      "« *Je serai peut-être bête.* » Il secoue la tête. « Le petit insolent. Il avait raison. J'ai été bête soixante ans durant, avec beaucoup de talent. » Il replie la lettre et la glisse dans sa poche, contre la flasque, contre son cœur. « Je l'avais oubliée. On oublie ce qu'on cache trop bien. Merci de me l'avoir rendue. Il fallait quelqu'un pour la lire. »",
    ],
    choices: [
      { back: "B_salle" },
    ] },

  S_helis_r2: { act: "II", title: "Dame Hélis, dans la confidence", place: "veille", second: true,
    fx: { flag: "helis:alliee" },
    text: [
      "Tu prends Dame Hélis à part, sur le palier de la bibliothèque. Tu lui dis que quelqu'un, cette nuit, videra le coffre des Tables à deux heures et demie, et que le maître mourra à trois heures. Tu lui dis aussi, pour faire bonne mesure, qu'elle a fait vœu de ne pas boire une goutte de vin avant l'aube, qu'elle couvrira son gobelet de sa main gantée, et qu'elle a des taches d'encre plein les doigts sous ses gants.",
      "Elle ôte un gant, lentement, et regarde sa main tachée. « Personne ne sait cela, dit-elle. Pas même le Prince. Je fais mon propre courrier : on ne confie pas les secrets d'un prince à un secrétaire. » Elle te dévisage. « Je ne crois pas aux prodiges. Mais je crois aux gens qui en savent trop. Que voulez-vous ? »",
      { if: { item: "lettre_chapitre" }, text: "Tu lui montres le sceau violet. Elle le reconnaît d'un coup d'œil, comme une femme de cour reconnaît une écriture. « Le Grand Chantre. » Elle sourit, et ce n'est pas un joli sourire. « Gardez cela précieusement. Le Prince en fera un bel usage. »" },
      "Vous convenez de peu de choses, et de précises : à trois heures, elle sera sous la coupole, et personne n'en sortira sans qu'elle le voie.",
    ],
    choices: [
      { back: "B_salle" },
    ] },

  S_ferrand_r2: { act: "II", title: "Le capitaine de garde", place: "veille", second: true,
    fx: { flag: "ferrand:garde" },
    text: [
      "Tu rejoins le capitaine Ferrand au parapet. Tu lui dis que l'escalier de service, derrière la bibliothèque, n'est muré qu'à moitié, qu'on peut monter par là jusqu'au cabinet sans passer par la grande salle, et que quelqu'un le fera cette nuit, vers deux heures et demie.",
      "Il réfléchit longtemps, comme à son habitude. « Pourquoi vous ? demande-t-il enfin. Pourquoi me le dire à moi ? »",
      "Tu lui dis que la première fois, c'est lui qu'on a accusé, la main en sang devant le coffre vide.",
      "Il te regarde avec ses yeux trop jeunes. Il ne te demande pas ce que signifie *la première fois*. Il a fait trois guerres ; il a vu des choses qui n'avaient pas de sens et qui étaient vraies quand même. « À deux heures, dit-il, je serai dans le cabinet. Sans lumière. » Il frotte sa balafre. « Je sais attendre dans le noir. C'est la seule chose que la guerre apprenne vraiment. »",
    ],
    choices: [
      { back: "B_salle" },
    ] },

  S_lise_r2: { act: "II", title: "Lise, prévenue", place: "veille", second: true,
    fx: { flag: "lise:avertie" },
    text: [
      "Tu dis à Lise que demain, à l'aube, Dame Hélis l'accusera devant tout le monde d'avoir vidé le coffre et tué le maître.",
      "Elle pose sa plume. « Pourquoi ferait-elle cela ? » Tu lui dis : parce qu'elle avait la clef, parce qu'elle partait, parce qu'une cour se contente de n'importe quel coupable. Lise réfléchit, les mains à plat sur ses registres.",
      "« C'est logique, dit-elle enfin, avec une sorte de respect. Odieux, mais logique. » Elle te regarde par-dessus ses lunettes d'acier. « Vous parlez comme quelqu'un qui a déjà fait le calcul. » Puis, après un silence : « Je resterai sous la coupole, à côté de lui, toute la nuit. Qu'on me voie. Et qu'il me voie. On ne sait jamais : il pourrait s'apercevoir que je suis là. »",
    ],
    choices: [
      { label: "Lui demander de changer la combinaison du coffre", hide: { seen: "S_lise_code" }, to: "S_lise_code" },
      { back: "B_salle" },
    ] },

  // ------------------------------------------------------------------ act III, again
  S_minuit: { act: "III", title: "Minuit, encore", place: "veille", second: true,
    fx: { meet: ["cosme"] },
    text: [
      "À minuit, toute la Veille est sous la coupole, et tu connais chaque geste avant qu'il ne soit fait. Frère Cosme monte sa cruche enveloppée dans une couverture. Il sert le vin chaud à la ronde. Dame Hélis couvre son gobelet de sa main gantée. Le capitaine Ferrand pose le sien sur le rebord d'une meurtrière.",
      "Maître Vellérin lève son gobelet d'eau. « À la Glaneuse, dit-il. Qui revient quand elle l'a promis. Ce qui fait d'elle la seule créature honnête de cette montagne. »",
      { if: "confiance", text: "Il dit la phrase exactement comme la première fois, mot pour mot. Mais en la disant, il te regarde, toi, et ses yeux très bleus te disent autre chose : *nous sommes deux, cette fois.*" },
      { if: { has: "vellerin:sait" }, text: "Quand Frère Cosme lui tend la cruche, le maître pose la main à plat sur son gobelet d'eau, comme Dame Hélis sur le sien, et remercie avec une politesse parfaite. C'est la première fois en vingt ans, peut-être. Le frère ne le remarque pas." },
      { if: { has: "cosme:mefiant" }, text: "Frère Cosme, en te servant, laisse son regard sur toi une seconde de plus que sur les autres. Son sourire est le même. Sa main, sur la cruche, a blanchi aux jointures." },
      "Puis le maître colle son œil à la lunette, et la nuit recommence. Pour toi seul{e}, elle recommence.",
    ],
    choices: [
      { label: "Attendre la suite de la nuit", to: "S_nuit" },
    ] },

  S_nuit: { act: "III", title: "La nuit de la Glaneuse, encore", place: "veille", hub: true, backName: "la coupole", second: true,
    text: [
      { first: true, text: "Les pendules battent. Le maître dicte. Lise écrit. Et toi, tu comptes les heures avec une précision que personne d'autre ici ne peut avoir : la lanterne de Frère Cosme descendra l'escalier de l'ermitage à deux heures ; la porte du cabinet craquera à deux heures et demie ; à trois heures, la Lyre." },
      { again: true, text: "Sous la coupole, le maître dicte, Lise écrit, et la Glaneuse glisse vers l'est. Tu regardes les pendules plus souvent que le ciel." },
    ],
    choices: [
      { label: "Regarder par la lunette", hide: { seen: "C_lunette" }, to: "C_lunette" },
      { label: "Rejoindre Tobie sur le toit de la coupole", hide: { seen: "C_toit" }, to: "C_toit" },
      { label: "Parler avec Lise", hide: { seen: "C_lise" }, to: "C_lise" },
      { label: "Parler avec Dame Hélis", hide: { seen: "C_helis" }, to: "C_helis" },
      { label: "T'asseoir près de Frère Cosme, sur la dernière marche", hide: { seen: "C_cosme_nuit" }, to: "C_cosme_nuit" },
      { label: "Regarder la ville par la meurtrière de l'ouest", hide: { seen: "C_meurtriere" }, to: "C_meurtriere" },
      { label: "Écouter le maître dicter", hide: { seen: "C_dicte" }, to: "C_dicte" },
      { label: "Demander à Tobie de changer l'eau de la flasque", if: "tobie:complice", hide: { any: [{ has: "flasque:prise" }, { seen: "S_tobie_flasque" }] }, to: "S_tobie_flasque" },
      { label: "Suivre Frère Cosme quand il descend sonner ses matines", hide: { seen: "S_suivre" }, fx: { until: 2 }, to: "S_suivre" },
      { label: "Rester auprès du maître jusqu'à la Lyre", fx: { until: 3 }, to: "S_trois" },
    ] },

  S_suivre: { act: "III", title: "Les matines du frère", place: "veille", second: true,
    text: [
      "À deux heures, Frère Cosme ramasse sa lanterne, s'incline vers le maître, qui ne le voit pas, et descend l'escalier en disant qu'il va sonner matines.",
      "Tu le suis à distance, sans lumière, une main sur le mur glacé. Il descend un étage, deux étages. Au premier, devant la porte de la bibliothèque, il ne continue pas vers la sortie. Il entre.",
      "Par la porte entrouverte, tu le vois souffler sa lanterne, tâtonner sur l'étagère basse, déplacer trois in-folio, retirer deux pierres. L'escalier de service. Il s'y glisse, rond et silencieux comme un gros chat, et l'ombre le prend.",
    ],
    choices: [
      { label: "Le suivre dans l'escalier muré", to: "S_suivre_suite" },
    ] },

  S_suivre_suite: { act: "III", title: "L'escalier de service", place: "veille", second: true,
    branch: [
      { if: { has: "ferrand:garde" }, to: "S_pris_ferrand" },
      { if: { has: "coffre:change" }, to: "S_coffre_ferme" },
      { if: { has: "tables:cachees" }, to: "S_coffre_vide" },
      { to: "S_vol" },
    ] },

  S_pris_ferrand: { act: "III", title: "Dans le noir", place: "veille", second: true,
    fx: { flag: ["cosme:pris", "tables:sauvees"] },
    text: [
      "L'escalier de service débouche par une trappe dans le placard du cabinet. Tu entends Frère Cosme soulever la trappe, traverser la pièce à pas de laine, et faire tourner les molettes du coffre : trois déclics.",
      { if: { has: "coffre:change" }, text: "Il tire la poignée, une fois, deux fois. Le coffre tient bon." },
      { if: { not: { has: "coffre:change" } }, text: "Le couvercle grince." },
      "Alors une ombre se détache du mur. Une main énorme se referme sur le poignet du frère, une autre sur sa nuque, et la voix du capitaine Ferrand dit, sans élever le ton : « Matines. »",
      "Le temps que tu arrives avec ta lanterne, le frère est assis par terre contre le coffre, les mains liées dans le dos avec la ceinture du capitaine. Il ne se débat pas. Il te regarde entrer, toi, et quelque chose passe dans ses yeux doux, une stupeur d'enfant.",
      "« Comment saviez-vous ? » demande-t-il.",
      "Ferrand ne répond pas. Toi non plus.",
      { if: { has: "tables:cachees" }, text: "Le coffre est vide : les Tables dorment ailleurs, au cœur de la tour, parmi les trésors de Tobie. Personne n'a enfoncé de porte. Personne n'a de sang sur la main." },
      { if: { not: { has: "tables:cachees" } }, text: "Les Tables sont dans le coffre, toutes les quatre, intactes. Personne n'a enfoncé de porte. Personne n'a de sang sur la main." },
    ],
    choices: [
      { label: "Laisser le capitaine garder le frère et remonter sous la coupole", fx: { until: 3 }, to: "S_trois" },
    ] },

  S_coffre_vide: { act: "III", title: "Le coffre vide", place: "veille", second: true,
    fx: { flag: ["cosme:surpris", "tables:sauvees"] },
    text: [
      "L'escalier de service débouche par une trappe dans le placard du cabinet. Par la fente de la porte du placard, tu vois Frère Cosme faire tourner les molettes du coffre, trois déclics, et soulever le couvercle.",
      "Il reste immobile un long moment devant le coffre vide.",
      "Puis il fait une chose que tu n'attendais pas : il se met à genoux devant le coffre, joint les mains, et prie. Tu entends des mots latins, très bas, puis des mots ordinaires : « …ce n'est pas ma volonté… ce n'est pas ma volonté… »",
      "Il se relève, referme le coffre, brouille les molettes. Il traverse le cabinet et sort par la porte, la vraie, sans bruit. Tu l'entends descendre l'escalier jusqu'en bas, et la porte de la tour s'ouvrir sur le vent. Ses matines, sans doute.",
      "Les Tables dorment dans le nid de choucas de Tobie, au cœur de la tour. Le frère est descendu les mains vides.",
    ],
    choices: [
      { label: "Remonter sous la coupole", fx: { until: 3 }, to: "S_trois" },
    ] },

  S_vol: { act: "III", title: "Ce qu'il emporte", place: "veille", second: true,
    fx: { flag: "tables:chapelle" },
    text: [
      "L'escalier de service débouche par une trappe dans le placard du cabinet. Par la fente de la porte du placard, tu vois Frère Cosme faire tourner les molettes du coffre, trois déclics, sortir les quatre registres un par un, les envelopper dans sa couverture de cruche et les nouer sur son dos, comme un colporteur ses toiles.",
      "Il repart par où il est venu. Tu te colles au mur du placard. Il passe à une coudée de toi, dans le noir, en soufflant un peu sous la charge. Il sent la cire, le miel, et l'amande.",
      "Tu le suis jusqu'en bas de l'escalier muré, jusqu'à la porte de la tour, jusqu'au premier palier de l'escalier de dalles. Puis sa lanterne se rallume, plus bas, et descend vers l'ermitage. Les Tables vont à la chapelle. Il les brûlera à l'aube, quand le signe aura parlé.",
      "Au-dessus de toi, dans la tour, un craquement de bois, un juron d'homme : le capitaine a enfoncé la porte du cabinet. Il est deux heures et demie.",
    ],
    choices: [
      { label: "Suivre la lanterne jusqu'à la chapelle", to: "S_chapelle_nuit" },
      { label: "Remonter en courant sous la coupole", fx: { until: 3 }, to: "S_trois" },
    ] },

  S_trois: { act: "III", title: "Trois heures moins une", place: "veille", second: true,
    branch: [
      { if: { has: "flasque:prise" }, to: "S_trois_eau" },
      { if: { has: "vellerin:prevenu" }, to: "S_trois_refus" },
      { to: "S_trois_mort" },
    ] },

  S_trois_eau: { act: "III", title: "Trois heures", place: "veille", second: true,
    fx: { flag: "vellerin:vivant" },
    text: [
      "À trois heures moins une, le maître sort la flasque d'étain de sa poche, la débouche, verse un doigt dans son gobelet de corne et le boit d'un coup, comme chaque nuit depuis cinquante ans. Il grimace. « La mélisse du frère a un goût de citerne, cette année », dit-il bien fort, en regardant Frère Cosme.",
      "Il colle son œil à la lunette.",
      "« Elle approche. Lise, notez. Trois heures. Elle touche. » Sa voix monte, tremble de joie. « Elle touche la Lyre ! À la minute ! Sérac, tu vois ? »",
      "Et il ne tombe pas.",
      "Il reste penché sur l'oculaire, une seconde, deux secondes, dix secondes. Puis il se redresse, de toute sa hauteur de vieil arbre, et il éclate de rire, d'un rire immense qui fait trembler la coupole. « À la minute, Lise ! À la minute ! Et je suis vivant pour le voir ! »",
      "Dans un coin de la coupole, Frère Cosme est devenu très pâle.",
    ],
    choices: [
      { label: "Regarder Frère Cosme", to: "S_demasque" },
    ] },

  S_trois_refus: { act: "III", title: "Trois heures", place: "veille", second: true,
    fx: { flag: "vellerin:vivant" },
    text: [
      "À trois heures moins une, le maître sort la flasque d'étain de sa poche et la débouche. Il ne verse rien. Il approche le goulot de son nez, lentement, et ferme les yeux.",
      "« L'amande », dit-il. Il le dit à voix haute, posément, comme on lit un chiffre dans une table. « Sérac l'avait sentie. Moi aussi, je la sens. » Il rebouche la flasque, la pose sur la table aux feuilles, bien en vue, et colle son œil à la lunette.",
      "« Elle approche. Lise, notez. Trois heures. Elle touche. Elle touche la Lyre ! À la minute ! »",
      "Il ne tombe pas. Il reste penché sur la lunette aussi longtemps que la comète touche la Lyre, et personne, sous la coupole, n'ose plus respirer.",
      "Quand il se redresse, il ne regarde pas le ciel. Il regarde Frère Cosme.",
    ],
    choices: [
      { label: "Regarder Frère Cosme à ton tour", to: "S_demasque" },
    ] },

  S_trois_mort: { act: "III", title: "Trois heures", place: "veille", second: true,
    fx: { flag: "vellerin:mort" },
    text: [
      "À trois heures moins une, le maître sort la flasque d'étain de sa poche, la débouche, verse un doigt dans son gobelet de corne, et tu cries. Tu cries son nom, tu cours, tu bouscules Lise. Il a déjà bu.",
      "Il te regarde arriver, étonné, le gobelet vide à la main. Puis il comprend, et il a un sourire triste, presque tendre, le sourire d'un homme qui reconnaît une route.",
      "« Elle touche, dit-il. Elle touche la Lyre. » Il glisse le long du pied de fonte, lentement. Tu le retiens, cette fois. Il est léger comme un fagot. L'odeur d'amande monte autour de vous deux.",
      "Il te prend le poignet. « Toi… dit-il. Encore toi. » Ses yeux très bleus cherchent les tiens. « Ça ne fait rien. Ça ne fait rien. Tu sais, maintenant. Dis-leur. »",
      "Sa main se desserre. Ses yeux restent ouverts sur la fente, où la Glaneuse touche la Lyre.",
      "Mais cette fois, tu tiens la flasque.",
    ],
    choices: [
      { label: "Te relever, la flasque à la main", fx: { item: "flasque" }, to: "S_demasque" },
    ] },

  S_demasque: { act: "III", title: "Frère Cosme", place: "veille", second: true,
    text: [
      { if: { has: "cosme:pris" }, text: "Le capitaine Ferrand fait entrer Frère Cosme sous la coupole, les mains liées, et le pousse doucement contre le mur. Le frère ne résiste pas. Il regarde le maître, debout, vivant ou couché, et il regarde le ciel." },
      { if: { not: { has: "cosme:pris" } }, text: "Frère Cosme se tient contre le mur de la coupole, sa lanterne à ses pieds, les mains jointes sur son tablier. Il a le visage le plus paisible du monde." },
      { if: { all: [{ has: "tables:chapelle" }, { not: { has: "tables:reprises" } }] }, text: "Toi seul{e}, sous la coupole, sais où dorment les Tables à cette heure : dans la chapelle, sous la couverture du vin chaud." },
      "Tout le monde se tourne vers toi. Dame Hélis, Lise, Tobie, le capitaine. Le maître aussi, s'il peut encore tourner la tête. C'est à toi de parler. Tu as vu la nuit deux fois ; tu es seul{e} ici à savoir ce qu'elle contient.",
    ],
    choices: [
      { label: "Montrer la lettre au sceau violet", if: { item: "lettre_chapitre" }, hide: { has: "cosme:demasque" }, fx: { flag: ["cosme:demasque", "preuve:lettre"] }, to: "S_aveu" },
      { label: "Déboucher la flasque sous le nez de tout le monde", if: { item: "flasque" }, hide: { has: "cosme:demasque" }, fx: { flag: ["cosme:demasque", "preuve:flasque"] }, to: "S_aveu" },
      { label: "Rappeler où le capitaine l'a pris, à deux heures et demie", if: { has: "cosme:pris" }, hide: { has: "cosme:demasque" }, fx: { flag: ["cosme:demasque", "preuve:coffre"] }, to: "S_aveu" },
      { label: "Raconter la haie, les gants et la fiole", if: { all: [{ has: "cosme:vu_haie" }, { any: [{ has: "mortier" }, { has: "feuille" }] }] }, hide: { has: "cosme:demasque" }, fx: { flag: ["cosme:demasque", "preuve:haie"] }, to: "S_aveu" },
      { label: "Lire à voix haute la page de l'herbier", if: { all: [{ item: "page_anselme" }, "enigme:p_anselme"] }, hide: { has: "cosme:demasque" }, fx: { flag: ["cosme:demasque", "preuve:anselme"] }, to: "S_aveu" },
      { label: "Accuser Frère Cosme sans preuve", hide: { has: "cosme:demasque" }, to: "S_cosme_fuit" },
    ] },

  S_aveu: { act: "III", title: "L'aveu", place: "veille", second: true,
    text: [
      { if: { has: "preuve:lettre" }, text: "Tu déplies la lettre du Chapitre et tu la lis à voix haute, sous la coupole, jusqu'au bout. *Le laurier des chèvres n'a jamais trahi personne.* Dame Hélis tend la main, prend la lettre, regarde le sceau violet. « Le Grand Chantre, dit-elle. Le Prince sera ravi. »" },
      { if: { has: "preuve:flasque" }, text: "Tu débouches la flasque et tu la fais passer de main en main. Lise la sent et devient blanche. Tobie la sent et dit, d'une petite voix : « La haie. » Le capitaine la sent, et il pose la main sur la garde de son épée." },
      { if: { has: "preuve:haie" }, text: "Tu racontes ce que tu as vu au soleil couchant : les gants de forgeron, le panier, le mortier, le linge tordu au-dessus d'une fiole. Tu sors de ta poche ce que tu as gardé, et tu le fais sentir. Lise s'approche, respire, et recule." },
      { if: { has: "preuve:anselme" }, text: "Tu déplies la page de l'herbier et tu lis, en clair, ce que Frère Anselme avait écrit à l'envers, il y a soixante et onze ans : le laurier dans la mélisse, le cœur qui s'arrête dans le quart d'heure, le visage qui reste rose. Lise regarde le visage du maître, puis la page. Tobie dit : « C'est le livre de la cellule. Il ne laisse personne y toucher. »" },
      { if: { has: "preuve:coffre" }, text: "Tu racontes l'escalier muré, la trappe du placard, les trois déclics du coffre, et la main du capitaine dans le noir. Le capitaine Ferrand confirme d'un seul mot : « Matines. »" },
      { if: { has: "cosme:surpris" }, text: "Frère Cosme te regarde longuement. « Le coffre était vide, dit-il. J'ai cru que Dieu m'avait arrêté la main. C'était donc vous. » Il a l'air presque déçu." },
      "Frère Cosme écoute sans t'interrompre, les mains jointes. Quand tu as fini, il soupire, comme un homme qui pose un fardeau.",
      "« Les gens ont besoin de signes, dit-il de sa voix lente et chaude. Vous ne savez pas ce que c'est, une vallée sans signes. Des gens qui naissent, qui travaillent, qui meurent, et le ciel au-dessus d'eux qui tourne comme une meule, sans rien vouloir dire. Le maître voulait que la Glaneuse ne veuille rien dire. Il voulait l'afficher sur la porte de la cathédrale, avec l'heure, comme un horaire de diligence. » Il secoue la tête. « Frère Anselme m'a tout appris. Les abeilles, les simples. Ce qui guérit, et ce qui ne guérit pas. Il m'a dit qu'il y a soixante et onze ans, il avait sauvé le ciel. Je l'ai cru. Je le crois encore. »",
      "Il tend ses poignets au capitaine Ferrand, avec une sorte de politesse. « Je prierai pour vous tous. Même pour vous, maître. Surtout pour vous. »",
      { if: { has: "vellerin:vivant" }, text: "« Garde tes prières, Cosme, dit le maître d'une voix lasse. Je n'en ai jamais eu besoin, et les tiennes empoisonnent. »" },
    ],
    choices: [
      { label: "Laisser le capitaine l'emmener", fx: { flag: "cosme:lie" }, to: "S_miroir" },
    ] },

  S_cosme_fuit: { act: "III", title: "La porte de la tour", place: "veille", second: true,
    fx: { flag: "cosme:enfui" },
    text: [
      "Tu dis son nom. Tu dis que c'est lui. Tu n'as rien pour le prouver que ta certitude, et ta certitude, sous la coupole, pèse exactement ce que pèse la parole d'un porteur contre celle d'un ermite.",
      "Frère Cosme te regarde avec une immense pitié. « Le mal des hauteurs, dit-il doucement aux autres. Je l'ai vu prendre des gens plus solides. » Il ramasse sa lanterne. « Je descends sonner matines. C'est l'heure. Que Dieu garde cette maison. »",
      "Personne ne le retient. Le capitaine fait un pas, puis regarde Dame Hélis, qui ne dit rien. La lanterne descend l'escalier, sort de la tour, s'éloigne sur les dalles vers l'ermitage, de plus en plus petite.",
      "Tu la suis des yeux par la meurtrière. Au premier palier, elle quitte l'escalier de dalles. Elle ne prend pas le chemin de l'ermitage. Elle prend celui du col, celui qui descend vers Salvagnes, et elle disparaît derrière l'épaule du mont.",
    ],
    choices: [
      { label: "Te détourner de la meurtrière", to: "S_miroir" },
    ] },

  S_miroir: { act: "III", title: "Le Grand Miroir, encore", place: "veille", second: true,
    text: [
      "« Venez ! crie Tobie. Le miroir ! Venez voir ! »",
      "La housse de drap noir a glissé à terre dans le désordre. Le disque de bronze est découvert, et la Glaneuse y brille, plus proche, plus blanche, et la lumière laiteuse commence à tourner au fond du métal comme l'eau dans un puits.",
      { if: { has: "vellerin:vivant" }, text: "Maître Vellérin traverse la coupole en trois enjambées de vieil échassier, ramasse la housse et la jette sur le miroir d'un seul geste. « Non, dit-il. Pas deux fois. Une nuit, ça suffit à un homme. Même à un homme comme moi. » Il pose sa main osseuse sur ton épaule, lourde, et il la laisse là." },
      { if: { has: "vellerin:mort" }, text: "Tu t'approches. Tobie recule pour te laisser la place. Au fond du bronze, la lumière t'attend. Tu ramasses la housse noire, et tu la jettes sur le miroir. Tobie te regarde sans comprendre. Tu lui dis que le maître n'aurait pas voulu qu'on regarde. C'est presque vrai." },
      "Sous la housse, le bronze s'éteint. La Glaneuse a quitté la Lyre. À l'est, derrière l'épaule du mont, le ciel a commencé à pâlir.",
    ],
    choices: [
      { label: "Attendre l'aube", to: "F_aube" },
    ] },

  F_aube: { act: "III", title: "L'aube d'après", place: "veille", end: true, second: true,
    fx: { flag: "fin:aube" },
    text: [
      "L'aube vient sur le mont Escalle comme elle vient partout : sans se presser, sans rien promettre. Le ciel passe du noir au gris, du gris au rose. La Glaneuse pâlit, s'efface, n'est plus qu'un fil de soie dans le bleu, puis plus rien. Elle reviendra dans soixante et onze ans, deux mois et onze jours. C'est écrit.",
      { if: { all: [{ has: "vellerin:vivant" }, { has: "tables:sauvees" }] }, text: "Maître Vellérin a dormi deux heures dans son fauteuil, ronflant comme un orgue. À son réveil, il a exigé du café, ses lunettes, et les quatre registres, qu'il a feuilletés un par un en grondant contre l'écriture de Lise, ce qui chez lui est une prière d'action de grâces." },
      { if: { all: [{ has: "vellerin:vivant" }, { not: { has: "tables:sauvees" } }] }, text: "Maître Vellérin a dormi deux heures dans son fauteuil, ronflant comme un orgue. Au réveil, il demande ses Tables. On lui dit où elles sont. Il se lève, enfile ses bottes, et il annonce qu'il descend à la chapelle les chercher lui-même, à quatre-vingt-six ans, par la glace, et qu'il n'a besoin de personne. Le capitaine Ferrand le suit à trois pas. Lise aussi. Toi aussi." },
      { if: { all: [{ has: "vellerin:mort" }, { not: { has: "tables:sauvees" } }] }, text: "Au jour levé, tu descends à la chapelle avec le capitaine Ferrand. Dans la niche, derrière l'autel, le reliquaire est trop petit pour quatre registres : ils sont dessous, dans la cavité de l'autel, enveloppés dans une couverture qui sent le vin chaud. Personne n'a eu le temps de les brûler." },
      { if: { has: "vellerin:mort" }, text: "On a couché le maître sur son lit, sous ses cartes du ciel, sa barbe peignée par Lise. Il a l'air surpris et content, comme un homme qui a gagné un pari. Tobie s'est endormi assis au pied du lit, la tête contre le montant." },
      { if: { has: "cosme:lie" }, text: "Frère Cosme descend à Salvagnes entre le capitaine Ferrand et la litière de Dame Hélis, les mains liées, en chantant des psaumes. Le Prince le jugera. Le Chapitre le désavouera avant midi, avec des larmes. Le Grand Chantre, dit-on, aura très mal à la gorge cet hiver, et ne prêchera plus." },
      { if: { has: "cosme:enfui" }, text: "On ne reverra pas Frère Cosme. À l'ermitage, les ruches dorment sous leur paille, la haie noire luit au soleil levant, et la chapelle est vide. On dira à Salvagnes qu'il est parti dans un monastère du sud. On dira aussi d'autres choses, à voix basse." },
      { if: { has: "tables:reprises" }, text: "Sous l'autel de la chapelle, Frère Cosme comptait retrouver quatre registres à brûler. Ils sont sur la table de la grande salle, dans une couverture qui sent le vin chaud, et Lise les a déjà ouverts pour vérifier qu'il ne manquait pas une page." },
      { if: { has: "tobie:complice" }, text: "Tobie ne te quitte plus d'une semelle. Il a décidé qu'il serait porteur juré, plus tard, et il te demande s'il faut beaucoup de latin. Tu lui dis que non. Il a l'air déçu : il en avait appris trois mots exprès." },
      { if: { has: "lise:avertie" }, text: "Dame Hélis n'accuse personne. Lise descendra avec elle à Salvagnes, vers sa chaire, et le maître l'a traitée d'ingrate deux fois avant le café et une fois après, ce qui signifie qu'il lui pardonne." },
      { if: { has: "helis:alliee" }, text: "Dame Hélis a obtenu ce qu'elle était venue chercher, et un peu plus. Elle te serre la main en partant, sans gant. « Si un jour le Collège vous ennuie, venez porter les plis du Prince. Il a beaucoup de secrets, et très peu de gens à qui les confier. »" },
      { if: { has: "vellerin:vivant" }, text: "Au milieu de la matinée, le maître te fait appeler dans la grande salle. Il est assis devant la table, une feuille blanche devant lui, une plume taillée, un bâton de cire noire. « Dans soixante et onze ans, dit-il, elle reviendra. Je serai mort, toi tu seras très vieux, et il y aura sur ce mont un sot, ou une sotte, qui croira que la Glaneuse est un présage. Il faudra quelqu'un pour porter un pli. » Il pousse la plume vers toi. « Tu sais ce qu'il faut écrire. Tu es la seule personne au monde qui le sache. » Il sourit dans sa barbe, férocement. « Et fais court. Les porteurs n'aiment pas les longues lettres. »" },
      { if: { has: "vellerin:mort" }, text: "Avant ton départ, Lise te donne une enveloppe qu'elle a trouvée dans le tiroir du maître, cachetée de noir, sans adresse. Dessus, de sa grande écriture penchée : *Pour le porteur, s'il revient deux fois.* Dedans, une feuille blanche, une plume taillée, et deux mots : *À toi.* Dans soixante et onze ans, quelqu'un devra monter avec un pli. Tu sais déjà ce que tu écriras." },
      { if: { all: [{ has: "vellerin:vivant" }, { has: "vellerin:lettre" }] }, text: "Quand tu te lèves, il sort de sa poche la feuille jaunie du second tiroir et la pose sur la pile, avec le pli neuf. « Mets-la dedans aussi. Que celui qui viendra sache qu'on a été jeune, ici. »" },
      "Tu redescends le mont Escalle à midi. Au Pas-de-l'Ours, Baptistin te pose une devinette pour la route. Tu la trouves sans réfléchir. Il en est vexé jusqu'au soir.",
      "Derrière toi, sur la dernière dent du mont, la Veille accroche le soleil de midi. Elle a l'air d'une tour ordinaire. Tu sais que par deux fois, à soixante et onze ans d'écart, elle a vu la même nuit recommencer.",
    ] },
};
