// L'Île Folle-Aiguille · side story « La petite-fille de la rebouteuse » (owes its question to La Petite Fadette: does the
// village's scorn make the witch?). At the Pointe, everyone calls Katell, fifteen, granddaughter of the old bonesetter of
// the moor, « la Grillonne », and the boys throw stones at her on the way to Sainte-Anne. She knows herbs, birds, tides,
// and she has noticed that the child limps since a fall from the rocks. She sets the ankle. On the Sunday of the
// pardon, the boys wait for her at the calvary. The child stands beside her in front of everyone (wb:defend), keeps
// seeing her in secret and stays away on the Sunday (wb:secret), or throws a laugh with the others to be left alone
// (wb:moque). Wired in A1_jours.
module.exports = {
  passages: {
    WB_cheville: { act: "I", title: "La petite-fille de la rebouteuse", place: "falaise", ambiance: "nature",
      fx: { meet: "katell" },
      text: [
        "Tu es tombé{e} des rochers de la Pierre-Fendue, en cherchant des œufs de goéland, et ta cheville a fait un bruit de branche. Ça fait trois jours. Tu boites. Tu le caches à ton père, qui a assez d'une jambe raide dans la maison. Tu le caches mal.",
        "C'est la Grillonne qui le voit. Elle sort de la lande, comme toujours, d'un coup, comme une bête, avec son panier d'herbes, ses cheveux noirs pleins de brindilles, sa robe trop courte, ses pieds nus et bruns, ses yeux verts qui regardent de côté. Elle a quinze ans. Elle s'appelle Katell. Personne, à la Pointe, ne l'appelle Katell. Sa grand-mère est la rebouteuse de la lande, qui remet les os des bêtes et des gens, qui arrête le sang avec des mots, et qu'on va voir la nuit, par le chemin de derrière, pour que le recteur ne le sache pas.",
        "« Tu boites, dit-elle. Assieds-toi. » Ce n'est pas une question. Tu t'assieds sur une pierre. Elle s'agenouille, prend ton pied dans ses mains, qui sont sèches et chaudes, tâte la cheville, longtemps, les yeux fermés, comme on écoute à une porte. Puis elle tire, d'un coup sec. Tu cries. Quelque chose claque, à l'intérieur, et reprend sa place.",
        "Elle se relève. Elle te donne une poignée de feuilles de grande consoude, à piler et à mettre dessus, la nuit. « Demain, tu cours. » Elle s'en va. Le lendemain, tu cours.",
      ],
      choices: [{ label: "Aller la remercier, sur la lande", to: "WB_lande" }] },
    WB_lande: { act: "I", title: "La petite-fille de la rebouteuse", place: "falaise", ambiance: "nature",
      text: [
        "Elle vit avec sa grand-mère dans une maison de terre et de genêt, au milieu de la lande, à une demi-lieue de la Pointe, entourée de ruches en paille et de chats. On dit qu'elle parle aux chats. Tu la trouves en effet en train de parler à un chat, qui l'écoute avec beaucoup d'intérêt.",
        "Elle ne s'attendait pas à ce qu'on vienne la remercier. Elle ne sait pas quoi faire de toi. Puis elle te montre des choses. Le nid d'une alouette au ras de la bruyère, qu'on ne voit qu'en sachant. Les trous des courlis dans la vase, à marée basse, et comment on prévoit la marée à la couleur des algues. Les herbes : celle qui arrête la fièvre, celle qui fait dormir, celle qui tue, qui sont trois sœurs et qui se ressemblent. Elle sait des choses que personne ne sait, à la Pointe, même pas le père Pochon.",
        "Elle te montre aussi, sans rien dire, une cicatrice à la tempe, sous les cheveux. Une pierre, l'an dernier, sur le chemin de Sainte-Anne. Les garçons de la Pointe l'attendent au calvaire, chaque dimanche de pardon, depuis qu'elle a sept ans. Ils crient *la Grillonne, la Grillonne, va chanter dans ta cheminée*. Ils lancent des cailloux. Les mères ne disent rien. Le recteur dit que c'est la faute de la grand-mère.",
        "« Dimanche, c'est le pardon, dit-elle. J'y vais quand même. C'est ma chapelle aussi. » Elle te regarde de ses yeux verts, de côté. « Toi, tu seras avec eux. Ou pas loin. C'est normal. Tu es de la Pointe. »",
      ],
      choices: [{ label: "Le dimanche du pardon", to: "WB_pardon" }] },
    WB_pardon: { act: "I", title: "La petite-fille de la rebouteuse", place: "chapelle", ambiance: "village",
      text: [
        "Toute la Pointe monte à Sainte-Anne-des-Grèves, en habits du dimanche, derrière la bannière brodée que portent quatre pêcheurs, en chantant le cantique des noyés. Le vent fait claquer les coiffes. Le recteur marche devant, en chape dorée. Tu marches avec les garçons de ton âge, parce que c'est là qu'on marche, à la procession, quand on a seize ans.",
        "Au calvaire, ils s'arrêtent. Les poches sont pleines. Katell arrive par le sentier de la lande, seule, pieds nus, dans une robe propre, trop courte, avec un bouquet d'ajoncs à la main. Elle voit les garçons. Elle ralentit. Elle ne s'arrête pas. Le premier cri part : *la Grillonne !* Puis le chœur. Le premier caillou roule à ses pieds.",
        "Les femmes, sur le parvis, regardent ailleurs. Ton père n'est pas là ; il ne monte jamais au pardon, à cause de sa jambe, dit-il. Le grand Loïc Le Guen, qui mène la bande, te met un caillou dans la main, en riant. « À toi. Elle t'a jeté un sort, à la cheville, tout le monde le sait. Venge-toi. »",
        "Katell s'est arrêtée, cette fois. Elle te regarde. Elle attend de voir ce que tu vas faire, avec l'air de quelqu'un qui sait déjà.",
      ],
      choices: [
        { label: "Lâcher le caillou, traverser le chemin, et marcher à côté d'elle", fx: { flag: "wb:defend" }, to: "WB_defend" },
        { label: "Garder le caillou dans ta main fermée, sans le lancer, sans bouger", fx: { flag: "wb:secret" }, to: "WB_secret" },
        { label: "Rire avec eux, et lancer le caillou à côté, exprès", fx: { flag: "wb:moque" }, to: "WB_moque" },
      ] },
    WB_defend: { act: "I", title: "La petite-fille de la rebouteuse", place: "chapelle", ambiance: "village",
      text: [
        "Tu lâches le caillou. Il tombe dans la poussière avec un bruit ridicule. Tu traverses le chemin, devant tout le monde, et tu te mets à côté de Katell, et tu marches avec elle vers la chapelle. Tu ne dis rien. Tu n'as rien préparé.",
        "Il y a un silence. Puis un caillou, un seul, qui te frappe à l'épaule. Puis Loïc Le Guen qui crie que tu es ensorcelé{e}, que la Grillonne t'a eu{e}, qu'on va vous marier au sabbat. Des rires. Mais les autres cailloux ne viennent pas. Les garçons se regardent. C'est une chose de lapider une Grillonne. C'en est une autre de lapider l'enfant du Fanal, l'enfant de Lazare Hersant, qui a une jambe raide et un bras de portefaix.",
        "Vous entrez ensemble dans la chapelle. Vous vous asseyez ensemble au dernier banc. Toute la messe, tu sens les regards dans ton dos comme des épingles. Katell ne te regarde pas une seule fois. À la sortie, sur le parvis, elle te dit seulement, très vite, sans tourner la tête : « Demain, je te montre où nichent les pétrels. Personne ne sait. » Et elle s'en va par la lande. Le soir, au Fanal, ton père a appris. Il ne dit rien. Il te sert ta soupe, et te donne le plus gros morceau de lard.",
      ],
      choices: [{ label: "Descendre de Sainte-Anne", fx: { quest: "WB" }, back: "A1_jours" }] },
    WB_secret: { act: "I", title: "La petite-fille de la rebouteuse", place: "chapelle", ambiance: "village",
      text: [
        "Tu gardes le caillou dans ton poing. Tu le gardes, et tu restes immobile au milieu des garçons, le poing fermé, à regarder tes sabots, pendant que les autres crient et lancent. Katell te regarde une seconde de plus. Puis elle baisse la tête, et elle passe, sous les cailloux, en protégeant son visage avec son bouquet d'ajoncs, et elle entre dans la chapelle.",
        "Le lendemain, tu montes la voir sur la lande, en cachette, par le chemin de derrière, comme les gens qui vont voir la grand-mère pour un os. Elle te montre où nichent les pétrels. Elle te parle comme avant. Elle ne te parle pas du pardon.",
        "Tu y retournes souvent, les jours qui suivent. Toujours en cachette. Elle ne te demande jamais rien. Un soir, en te raccompagnant au bord de la lande, là où commencent les champs de la Pointe, elle s'arrête, et elle dit, sans amertume : « C'est bien. C'est déjà beaucoup. Les autres, ils ne viennent même pas par derrière. » Puis elle ajoute, en regardant les toits de la Pointe : « Mais le chemin de derrière, il ne mène qu'à des cachettes. »",
      ],
      choices: [{ label: "Descendre de Sainte-Anne", fx: { quest: "WB" }, back: "A1_jours" }] },
    WB_moque: { act: "I", title: "La petite-fille de la rebouteuse", place: "chapelle", ambiance: "village",
      text: [
        "Tu ris. Tu lances le caillou. Tu le lances à côté, très à côté, exprès, dans le fossé, et tu cries *la Grillonne* avec les autres, plus fort que les autres, pour qu'on t'entende bien. Loïc Le Guen te tape dans le dos. Tu fais partie de la bande. On te laissera tranquille.",
        "Katell ne regarde pas où tombe ton caillou. Elle te regarde, toi. Une seconde. Puis elle protège son visage avec son bouquet d'ajoncs, et elle passe, et elle entre dans la chapelle.",
        "Ta cheville ne te fait plus mal du tout, les jours suivants. Tu cours sur les rochers. Tu sautes d'une pierre à l'autre. Et chaque fois que ton pied se pose, solide, sans un craquement, tu sens les mains sèches et chaudes qui ont tiré dessus, d'un coup sec, sans rien te demander. Tu ne retournes pas sur la lande. Tu ne sais pas ce que tu lui dirais. Il te semble, quelquefois, la nuit, quand le vent tourne, entendre un grillon dans la cheminée du Fanal, en plein hiver.",
      ],
      choices: [{ label: "Descendre de Sainte-Anne", fx: { quest: "WB" }, back: "A1_jours" }] },
  },
  extras: {
    people: {
      katell: { name: "Katell", aka: ["la Grillonne"], f: true, qui: "Petite-fille de la rebouteuse de la lande, près de la Pointe-aux-Corneilles." },
    },
    quests: [
      { id: "WB", act: "I", kind: "annexe", title: "La petite-fille de la rebouteuse", start: "WB_cheville", doit: "fadette", echo: ["wb:defend", "wb:secret", "wb:moque"] },
    ],
  },
};
