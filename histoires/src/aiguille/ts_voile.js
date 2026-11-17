// L'Île Folle-Aiguille · side story « Le voile » (owes its question to Hawthorne's The Minister's Black Veil: what does a
// covered face show the others about their own faces?). Act III, Victorine at the Shaper's islet: one morning, the old
// sailmaker Gwénolé Trébaol comes up on deck with a square of black sailcloth over his face, two slits for the eyes,
// and refuses to say why. The crew grows afraid; the captain wants to know whether he is sick. Victorine examines him,
// hears the crew, sits with him at night, and decides: she has the veil taken off by order (ts:arrache), she certifies
// him healthy and defends his right to wear it (ts:defend), or she answers his question with a secret of her own
// (ts:aveu). Wired in A3w_ilot.
module.exports = {
  passages: {
    TS_matin: { act: "III", title: "Le voile", place: "ilot", ambiance: "mer",
      fx: { meet: "trebaol" },
      text: [
        "Le troisième matin à l'îlot, Gwénolé Trébaol monte sur le pont à l'heure du café avec un carré de toile à voile noire sur la figure. Il l'a taillé lui-même, cousu d'un ourlet impeccable, avec deux fentes pour les yeux, et noué derrière la tête par deux lacets de ligne. On ne voit plus de lui que la barbe blanche, en dessous, et, par les fentes, deux lueurs.",
        "C'est le voilier de la Cormorane, soixante ans, qui a cousu toutes les voiles du navire et une partie de celles de la flotte de Morlenc, un homme doux, propre, ponctuel, qui va à la messe quand il y en a une et chante faux avec conviction. On ne lui connaît pas un ennemi. On ne lui connaît pas un vice, sinon le tabac à chiquer.",
        "Il prend son café comme d'habitude, en soulevant le bas du voile d'une main. Il s'assied sur son rouleau de toile. Il se met au travail. Il ne dit rien.",
        "Le pont tout entier le regarde. Personne n'ose lui demander. À midi, la capitaine fait appeler Victorine. « Allez voir s'il est malade, dit-elle. La lèpre, la vérole, n'importe quoi. Je veux savoir ce que j'ai à bord. Et je veux que ça se sache vite, parce qu'ils sont en train de devenir fous, là-haut, avec ce chiffon. »"
      ],
      choices: [
        { label: "Faire descendre le voilier à l'infirmerie", to: "TS_examen" }
      ] },
    TS_examen: { act: "III", title: "Le voile", place: "cormorane", ambiance: "mer",
      text: [
        "Il descend sans faire de difficultés. Il ôte sa chemise quand elle le lui demande. Il tend ses mains, ses pieds, son dos. La peau est saine, tannée, plissée comme du vieux cuir, sans une tache, sans une plaque, sans un nodule. Les ganglions sont souples. La langue est rose. Il a la santé d'un homme de quarante ans qui en aurait vécu soixante avec beaucoup de prudence.",
        "« Et le visage ? » dit-elle.",
        "« Le visage va bien, docteur, dit-il. Je vous le promets sur ce que vous voudrez. »",
        "Elle lui demande de l'ôter. Pour l'examen. Il secoue la tête, doucement, avec une politesse infinie. « Non. Je regrette. Pas devant vous, pas devant personne. Je ne le dois à personne, et je ne le refuse à personne en particulier. »",
        "Elle lui demande pourquoi. Il réfléchit un long moment, ses deux lueurs fixées sur elle. Puis il dit : « Je suis monté à la source, avant-hier, en haut de l'îlot. Je me suis penché pour boire. L'eau était très claire, très calme, et je me suis vu. J'ai vu mon visage, docteur, tel qu'il est. C'était la première fois. D'habitude, on se rase, on se peigne, et l'on passe. » Il remet sa chemise. « Alors je l'ai couvert. Pour vous éviter de voir le vôtre. »"
      ],
      choices: [
        { label: "Monter entendre ce que l'équipage en dit", to: "TS_equipage" }
      ] },
    TS_equipage: { act: "III", title: "Le voile", place: "cormorane", ambiance: "mer",
      text: [
        "Sur le pont, l'équipage s'est divisé en théories, comme une académie. Le voile cache une lèpre, une brûlure, un chancre. Le voile cache un crime : il a vu, à la source, le fantôme de quelqu'un qu'il a tué. Le voile cache un vœu, une pénitence, une femme. Le voile ne cache rien, c'est un vieux qui a perdu la tête au soleil.",
        "Ce qui frappe Victorine, c'est que chacun propose, pour le voilier, le secret qu'il aurait lui-même. L'homme qui parle de crime a les mains qui tremblent. Celui qui parle de femme baisse les yeux. Un jeune gabier, qui jure que c'est une maladie honteuse, rougit jusqu'aux oreilles et s'en va.",
        "Le soir, au gaillard, on s'écarte du voilier comme on s'écartait, dans les villages, d'un homme qui avait le mauvais œil. Personne ne lui a rien fait. Personne ne lui parle plus. Il coud. Il coud à la lanterne, tard, l'aiguille qui va et vient avec un petit bruit sec, et ses deux lueurs, derrière la toile noire, qui ne regardent personne et que tout le monde sent sur soi.",
        "La capitaine fait savoir, au coucher du soleil, qu'elle attend demain matin le certificat de la médecin. Et qu'elle aimerait mieux, entre nous, qu'il n'y ait plus de voile à ce moment-là."
      ],
      choices: [
        { label: "Aller s'asseoir près de lui, la nuit, pendant qu'il coud", to: "TS_nuit" }
      ] },
    TS_nuit: { act: "III", title: "Le voile", place: "cormorane", ambiance: "nuit",
      text: [
        "Elle s'assied sur un rouleau de toile, en face de lui. Il coud. Elle le regarde coudre. Le navire dort, la mer dort, l'îlot dort, avec sa maison blanche à mi-pente où brille une seule fenêtre. Il n'y a que l'aiguille, et le souffle de la mer contre la coque.",
        "Au bout d'un long moment, sans lever la tête, il dit : « Vous trouvez ça cruel, docteur. Ce chiffon. Vous voyez ce que ça leur fait. »",
        "Elle dit que oui.",
        "« Moi aussi, dit-il. Je pensais qu'ils riraient. Ils me regardent, et ils pensent à eux. Je n'ai rien fait, docteur. J'ai seulement mis un morceau de toile entre eux et moi. Et chacun voit dans la toile ce qu'il cache sous sa figure à lui, tous les jours, sans toile. Un voile, tout le monde en porte un. Le mien est noir, c'est toute la différence. »",
        "Il pique l'aiguille dans la toile, et la laisse là. Il lève vers elle ses deux lueurs.",
        "« Et vous, dit-il doucement, qu'est-ce qu'il cache, le vôtre ? »"
      ],
      choices: [
        { label: "Se lever, et lui ordonner d'ôter ce voile demain à l'aube, devant la capitaine", fx: { flag: "ts:arrache" }, to: "TS_arrache" },
        { label: "Se lever, et rédiger un certificat qui le déclare sain et maître de sa figure", fx: { flag: "ts:defend" }, to: "TS_defend" },
        { label: "Rester assise, et lui répondre", fx: { flag: "ts:aveu" }, to: "TS_aveu" }
      ] },
    TS_arrache: { act: "III", title: "Le voile", place: "cormorane", ambiance: "mer",
      text: [
        "À l'aube, devant la capitaine et l'équipage rassemblé, Victorine lui demande d'ôter le voile. Elle le demande comme on prescrit. Elle dit que c'est un ordre de la médecin, pour la santé du bord. Il la regarde à travers les fentes, longtemps. Puis il dénoue les lacets.",
        "Dessous, il y a le visage de Gwénolé Trébaol. Un visage de vieil homme doux, ridé, rasé de frais, avec un nez un peu rouge et des yeux bleus très pâles, mouillés. Rien d'autre. Pas une marque. Pas une cicatrice. Le visage qu'ils connaissent tous depuis des années.",
        "L'équipage le regarde. Et, au lieu du soulagement qu'elle attendait, Victorine voit passer sur les figures autour d'elle une sorte de déception, puis de gêne, puis de honte. Les hommes détournent les yeux. Ils retournent à leur poste sans un mot, comme des gens qu'on a surpris à regarder par un trou de serrure, et qui découvrent qu'il n'y avait derrière qu'une chambre vide.",
        "Le voilier plie son carré de toile noire, soigneusement, en quatre, et le met dans sa poche. Il se remet au travail. Il ne lui en veut pas. Seulement, de tout le voyage, il garde les yeux sur son ouvrage quand elle passe."
      ],
      choices: [
        { label: "Revenir à l'îlot", fx: { quest: "TS" }, back: "A3w_ilot" }
      ] },
    TS_defend: { act: "III", title: "Le voile", place: "cormorane", ambiance: "mer",
      text: [
        "Elle écrit, à la lanterne, sur une feuille du registre de l'infirmerie, que Gwénolé Trébaol, voilier, soixante ans, a été examiné par elle ce jour, qu'il est exempt de toute maladie contagieuse ou honteuse, qu'il jouit de toute sa raison, et que le morceau de toile qu'il porte sur la figure ne relève pas de la médecine. Elle signe. Elle porte la feuille à la capitaine à l'aube.",
        "La capitaine la lit deux fois. Elle soupire. « Vous me laissez avec un homme sain qui fait peur à tout le monde, dit-elle. C'est pire qu'un malade. Un malade, on le soigne. » Puis elle fait lire le certificat à voix haute, au pied du grand mât, devant l'équipage. Elle ajoute, de sa voix de commandement, que le premier qui touche au voile du voilier passera trois jours aux fers.",
        "On ne touche pas au voile. On s'y habitue, comme on s'habitue à tout, en mer. Au bout d'une semaine, on n'en parle plus. Au bout de deux, un gabier, puis un autre, vient s'asseoir près du voilier, le soir, pour fumer, sans rien dire, comme on va s'asseoir dans une église vide. Ils ne savent pas pourquoi ils viennent. Ils repartent plus calmes.",
        "Le voilier garde son voile. Victorine se demande, quelquefois, en le voyant passer, ce qu'il a vu dans la source. Puis elle se demande ce qu'elle y verrait, elle, et elle évite, de tout le voyage, de se pencher sur l'eau calme."
      ],
      choices: [
        { label: "Revenir à l'îlot", fx: { quest: "TS" }, back: "A3w_ilot" }
      ] },
    TS_aveu: { act: "III", title: "Le voile", place: "cormorane", ambiance: "nuit",
      text: [
        "Elle reste assise. Elle regarde la mer, la maison blanche, la fenêtre allumée. Puis elle lui répond.",
        "Elle lui dit une chose qu'elle n'a dite à personne. Ni à un prêtre, ni à elle-même, à voix haute. Elle la dit en peu de mots, d'une voix plate, en regardant l'eau. Ce livre ne la répète pas. Le voilier l'écoute sans bouger, son aiguille plantée dans la toile.",
        "Quand elle a fini, il reste silencieux. Puis il lève les deux mains, dénoue les lacets, et ôte son voile. Il a, dessous, un visage de vieil homme doux, ridé, aux yeux bleus pâles et mouillés. Il plie le carré de toile noire en quatre, et le lui tend.",
        "« Gardez-le, dit-il. Je n'en ai plus besoin. Je l'ai mis pour que quelqu'un me dise la vérité. Vous l'avez dite. » Il reprend son aiguille. « Ça ne se répète pas, ces choses-là. Ça se coud. »",
        "Le lendemain, il monte sur le pont la figure nue. On le regarde. On respire. On rit un peu, de soulagement, et de soi. Victorine garde au fond de sa trousse un carré de toile noire, ourlé à petits points, avec deux fentes. Elle ne l'a jamais porté. Elle sait qu'il lui irait."
      ],
      choices: [
        { label: "Revenir à l'îlot", fx: { quest: "TS" }, back: "A3w_ilot" }
      ] }
  },
  extras: {
    people: {
      trebaol: { name: "Gwénolé Trébaol", aka: ["le voilier"], qui: "Voilier de la Cormorane, soixante ans, qui a cousu toutes les voiles du navire, doux, ponctuel, chiqueur." }
    },
    quests: [
      { id: "TS", act: "III", kind: "annexe", title: "Le voile", start: "TS_matin", doit: "voilenoir", echo: ["ts:arrache", "ts:defend", "ts:aveu"] }
    ]
  }
};
