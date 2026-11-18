// L'Île Folle-Aiguille · the port of call of the Shaper's islet, beyond the Master and his Wards. For the child: fishing
// in the creek, where some fish have been sewn (nothing to keep); the little graves behind the white house, numbered
// One to Six, and an Eighth dug and empty (ilot:huit); the top of the hill, from which a sail is seen far to the north,
// following (ilot:voile, read when the brigantine comes into the bay). For the doctor: Ombeline's garden of simples and
// a strip of bark that brings fevers down (item quinquina_ilot, read in the proscripts' cave); the turtles on the beach
// and what the crew takes of them (ilot:tortues); the Master's library and its last page (ilot:liste).
module.exports = {
  passages: {
    // ---------------------------------------------------------------- the child
    XQ_i_peche: { act: "III", title: "La pêche", place: "ilot", ambiance: "nature",
      text: [
        "Lagadec pêche dans la crique, assis sur une roche, une ligne de crin enroulée autour de l'index. Il te fait signe de t'asseoir à côté de lui. Tu t'assieds. Il te passe une ligne. Il ne parle pas : à la pêche, Lagadec ne parle jamais, il dit que les poissons écoutent.",
        "L'eau de la crique est d'une transparence de verre. On voit le fond, les algues, les poissons qui passent : des poissons bleus, jaunes, rayés, ordinaires, qui viennent flairer l'appât et s'en vont.",
        "Au bout d'une heure, ta ligne se tend. Tu tires. Le poisson qui sort de l'eau est un poisson-perroquet, vert et rose, gros comme ton avant-bras. Il se débat. Et quand il se tourne, tu vois que son flanc gauche est bleu et jaune, rayé, d'une autre espèce, et qu'entre les deux, une couture court du museau à la queue, à points fins, réguliers, cicatrisés depuis longtemps.",
        "Lagadec le regarde. Il retire l'hameçon, très doucement, du bout des doigts, et remet le poisson à l'eau. Il le regarde partir, en zigzag, de travers, comme un poisson qui hésite entre deux façons de nager.",
        "« On ne mange pas ça, dit-il. On ne le mange pas, et on n'en parle pas. » Il enroule sa ligne. Il a fini de pêcher, ce jour-là.",
      ],
      choices: [{ label: "Revenir sur la plage", back: "A3n_ilot" }] },
    XQ_i_cimetiere: { act: "III", title: "Les petites tombes", place: "ilot", ambiance: "nature",
      text: [
        "Derrière la maison blanche, au bout du jardin, au-delà des massifs d'hibiscus taillés au cordeau, il y a un enclos de buis bas, et dans l'enclos, des tombes. Des petites tombes, alignées, soignées, avec des bordures de coquillages blancs et des fleurs fraîches. On les entretient.",
        "Elles n'ont pas de nom. Elles ont des chiffres, peints en noir sur des planchettes de bois blanc, d'une écriture appliquée. *Un. Deux. Trois. Quatre. Cinq. Six.*",
        "La tombe Un est petite, de la taille d'un chat. La tombe Six est longue comme un homme.",
        "Il y a, au bout de la rangée, une septième place, vide, sans tombe, juste un carré d'herbe tondue, entre deux coquillages. Et une huitième. La huitième est creusée. Une fosse nette, fraîche, la terre rejetée en tas sur le côté, avec une pelle plantée dedans, et une planchette posée contre le tas, déjà peinte. *Huit.*",
        "Elle attend quelqu'un.",
        "Un oiseau crie, dans la forêt, ou autre chose. Tu t'aperçois que tu as reculé de trois pas sans t'en rendre compte.",
      ],
      choices: [{ label: "Revenir vers la plage, sans courir", fx: { flag: "ilot:huit" }, back: "A3n_ilot" }] },
    XQ_i_sommet: { act: "III", title: "Le sommet", place: "ilot", ambiance: "nature",
      text: [
        "Tu montes au sommet de la colline par un sentier de chèvre, à travers une forêt de palmiers et de fougères, où des choses détalent devant toi sans que tu les voies, en froissant les feuilles. En haut, un rocher nu, chaud, et le vent.",
        "La mer des Sargues est là, tout autour, jusqu'au bout du monde. Une plaine jaune, immobile, où les herbes flottent en îles, en rubans, en tapis, avec entre elles des chenaux d'eau bleue, comme les rues d'une ville engloutie. La Cormorane, à tes pieds, dans la crique, a l'air d'un jouet. Il fait si clair qu'on voit la courbure de la terre.",
        "Et au nord, très loin, à l'extrême limite, là où le jaune devient gris, il y a un point blanc.",
        "Une voile. Un hunier, peut-être deux. Un navire, encalminé comme vous, qui ne bouge pas. Il est à la même route que vous. Il est derrière vous. Tu le regardes longtemps. Il ne s'approche pas. Il ne s'éloigne pas. Il attend, comme un chat qui regarde une souris par une fente, sans se presser, parce que la souris finira par sortir.",
        "Quand tu redescends, tu le dis à Gobert. Gobert monte au sommet, avec la lunette. Il redescend, et va parler à la capitaine, longtemps, à voix basse.",
      ],
      choices: [{ label: "Revenir sur la plage", fx: { flag: "ilot:voile" }, back: "A3n_ilot" }] },

    // ---------------------------------------------------------------- the doctor
    XQ_i_jardin: { act: "III", title: "Le jardin des simples", place: "ilot", ambiance: "nature",
      text: [
        "Derrière la maison, en contrebas de la véranda, il y a un jardin de simples. Victorine le repère de loin, à l'odeur : la menthe, la sauge, le romarin, et d'autres choses, plus lourdes, plus sucrées, qu'elle ne connaît pas. Des carrés bien tracés, bordés de pierres blanches, avec des étiquettes de bois peintes en latin, d'une petite écriture de femme.",
        "Ombeline y est, à genoux, en train de désherber. Elle se relève en voyant Victorine, s'essuie les mains à son tablier, et attend, les yeux baissés.",
        "« C'est votre jardin ? » demande Victorine.",
        "Ombeline hoche la tête. Puis, comme Victorine se penche sur un arbuste à l'écorce rougeâtre, elle parle, pour la première fois, d'une voix basse, enrouée, comme une voix qui sert peu.",
        "« L'arbre des fièvres, dit-elle. Je l'ai fait venir des Hautes-Terres, en graines, il y a quatre ans, dans une lettre. Il n'a jamais voulu pousser ailleurs que là. » Elle prend un petit couteau, détache de l'écorce une lanière longue comme la main, et la tend à Victorine. « Pour vos marins. Pilée dans du vin. Elle fait tomber les fièvres tierces. Le Maître ne sait pas que je l'ai. Il ne regarde jamais le jardin. »",
      ],
      choices: [{ label: "Prendre l'écorce, et la remercier", fx: { item: "quinquina_ilot", regard: { ombeline: "cordial" } }, back: "A3w_ilot" }] },
    XQ_i_tortues: { act: "III", title: "Les tortues", place: "ilot", ambiance: "nature",
      text: [
        "À la nuit tombée, la plage se met à bouger. Des tortues. Des dizaines, énormes, lentes, qui sortent de la mer l'une après l'autre et montent sur le sable en soufflant, pour pondre. Les marins de la corvée les regardent avec des yeux de loups. De la viande fraîche. Après trois semaines de lard rance et de biscuit.",
        "Gobert en retourne une, puis deux, sur le dos, à l'aide d'un aviron, et elles restent là, à battre des nageoires dans le vide, impuissantes, en soupirant. Une tortue retournée vit des semaines, à fond de cale, sans manger. C'est pour cela que les marins les aiment. On en prend une, on en mange une, on garde les autres pour plus tard.",
        "Les hommes en retournent une troisième. Une quatrième. Puis Victorine voit, sur le dos de la cinquième, une couture. Une couture qui court en travers de la carapace, à points fins, cicatrisée, et une plaque d'écaille d'une autre couleur insérée au milieu, comme une pièce sur un vêtement.",
        "Elle pense aux fièvres qui couvent dans l'entrepont, aux gencives qui saignent, à la viande fraîche. Elle pense à cette carapace recousue.",
      ],
      choices: [
        { label: "« Prenez-en six. Six, pas plus, et pas celle-là. »", fx: { flag: "ilot:tortues" }, to: "XQ_i_tortues_six" },
        { label: "« Aucune. Remettez-les toutes à l'eau. »", to: "XQ_i_tortues_rien" },
      ] },
    XQ_i_tortues_six: { act: "III", title: "Les tortues", place: "ilot", ambiance: "nature",
      text: [
        "Gobert grogne, compte, retourne les autres sur le ventre avec son aviron. Elles repartent vers la mer, en laissant dans le sable de longues traces doubles, comme des voitures.",
        "Celle à la couture repart la dernière. Elle s'arrête au bord de l'eau, tourne la tête vers Victorine, une tête de vieille femme, plissée, très ancienne, et puis entre dans la vague.",
        "On hisse les six à bord. On en tue une le soir même. Le bouillon de tortue sent le poulet et la mer. Les hommes de l'entrepont en redemandent, et, trois jours plus tard, les gencives des hommes de l'entrepont ne saignent plus.",
      ],
      choices: [{ label: "Revenir sur la plage", back: "A3w_ilot" }] },
    XQ_i_tortues_rien: { act: "III", title: "Les tortues", place: "ilot", ambiance: "nature",
      text: [
        "Gobert la regarde comme si elle avait perdu l'esprit. Les hommes protestent. Victorine ne répond pas. Elle s'agenouille dans le sable et pousse elle-même la tortue recousue sur le ventre, de toutes ses forces, des deux mains, jusqu'à ce qu'elle se retourne.",
        "Alors Gobert, en jurant, remet les autres à l'endroit, une par une, et les hommes le laissent faire, en crachant. Les tortues repartent vers la mer.",
        "Victorine sait ce qu'elle vient de faire. Elle vient de choisir une carapace contre des gencives. Elle ne le regrettera pas ce soir. Elle le regrettera peut-être dans trois semaines.",
      ],
      choices: [{ label: "Revenir sur la plage", back: "A3w_ilot" }] },
    XQ_i_biblio: { act: "III", title: "La bibliothèque", place: "ilot", ambiance: "nuit",
      text: [
        "Après le souper, pendant que le Maître va voir ses malades, Ombeline laisse Victorine seule dans la bibliothèque. Une pièce longue, aux murs couverts de livres jusqu'au plafond, reliés de veau, de maroquin, de vélin, avec une échelle à roulettes et un globe terrestre. La plus belle bibliothèque de médecine qu'elle ait jamais vue, à quatre cents lieues de toute faculté.",
        "Sur le bureau, un registre ouvert. Des colonnes. Des dates, des espèces, des opérations, des résultats. *Chien, femelle, quatre ans : greffe du larynx. Vit. Aboie encore.* *Singe, mâle : greffe de la main. Mort au quatrième jour.* Des centaines de lignes, sur des dizaines de pages, d'une écriture superbe, sans une rature, sans un adjectif.",
        "Victorine tourne les pages jusqu'à la dernière. La dernière page n'est pas un compte. C'est une liste. Une liste de noms, d'une autre encre, plus ancienne, plus appuyée : les cent signataires de la pétition qui a chassé Évariste Hallé de la Faculté de Morlenc. Elle en connaît la moitié. Certains sont rayés, d'un trait net, à la règle, avec une date en marge.",
        "Elle cherche si les dates correspondent à des morts dont elle a entendu parler, à Morlenc. Elle s'arrête avant de trouver. Elle referme le registre. Elle a une seule certitude : son nom à elle n'est pas sur la liste. Elle n'a rien signé. Elle a pris des notes.",
      ],
      choices: [{ label: "Revenir sur la véranda", fx: { flag: "ilot:liste" }, back: "A3w_ilot" }] },
  },
  extras: {
    items: {
      quinquina_ilot: { name: "Une lanière d'écorce rouge", kind: "remede", keep: true, price: 0, desc: "L'écorce de l'arbre des fièvres, venu des Hautes-Terres en graines, que fait pousser Ombeline dans le jardin des simples de l'îlot. Pilée dans du vin, elle fait tomber les fièvres tierces." },
    },
  },
};
