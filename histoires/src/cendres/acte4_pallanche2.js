// Act IV · more of Pallanche a year later, off IV_pal: the hospice of the Cédants (the sisters who wash the tower's
// linen, and the laundry cart Corneille knew in Act I: a new way in), the children who forge jetons of the Great Book,
// and the dyers of the Teinturiers whose vats only give grey since old Aubin ceded the blue. The child leads ("tu").
var A = { act: "IV", noLead: true };
function P(o) { return Object.assign({}, A, o); }
module.exports = {
  // ---------------------------------------------------------------- L'hospice des Cédants
  IV_Q_hospice: P({ title: "L'hospice des Cédants", place: "pallanche",
    fx: { questSeen: "IV_Q_hospice" },
    text: [
      "Derrière Saint-Gilles, dans l'ancien hospice des pèlerins, les sœurs grises ont recueilli ceux qui ont trop donné. On les appelle les Cédants. Ils sont une soixantaine, alignés dans la grande salle, sur des paillasses propres. Ils ne sont pas malades. Ils ont seulement oublié de manger, de se laver, de dormir, de rentrer chez eux, parce qu'ils ont cédé le souvenir de chez eux.",
      "Une sœur passe entre les rangs avec une écuelle et une cuillère. Elle s'arrête à chaque paillasse, elle dit le nom, elle met la cuillère dans la bouche. « Sœur Aude », dit-elle sans se retourner, quand tu entres. « Si vous venez chercher quelqu'un, cherchez vite. Ils ne savent pas répondre à leur nom. Il faut le leur dire. »",
      { with: "hylas", text: "Hylas s'arrête sur le seuil. Il n'entre pas. « Je connais l'odeur, dit-il. La cire et le savon noir. C'est l'odeur de la tour. » Il entre quand même." },
    ],
    choices: [
      { label: "Aider sœur Aude à les nourrir", fx: { ep: ["perso", 300] }, to: "IV_Q_hospice_aider" },
      { label: "Lui demander d'où vient tout ce linge", to: "IV_Q_hospice_linge" },
      { label: "Ressortir", to: "IV_pal" },
    ] }),
  IV_Q_hospice_aider: P({ title: "Les cuillères", place: "pallanche",
    text: [
      "Elle te donne une écuelle, une cuillère, et la moitié d'un rang. Tu dis les noms qu'elle a écrits à la craie au pied de chaque paillasse. *Mathieu. Berthilde. Le petit Jean. Ondine.* À chaque nom, un visage se tourne vers toi, sans comprendre, et ouvre la bouche.",
      "Le petit Jean a soixante ans. Il te tient le poignet en mangeant, très fort, comme on tient une rampe. À la dernière cuillerée, il dit : « Merci, maman. » Tu ne le corriges pas.",
      "Sœur Aude te regarde faire, de loin. Quand tu reposes l'écuelle, elle dit : « Vous avez le coup de main. On vous a nourri comme ça, petit. Ça se voit. Quelqu'un a pris le temps. »",
    ],
    choices: [{ label: "Lui demander d'où vient tout ce linge", to: "IV_Q_hospice_linge" }] }),
  IV_Q_hospice_linge: P({ title: "Le linge de la tour", place: "pallanche",
    text: [
      "Au fond de la cour, des cuves, des battoirs, des cordes tendues où sèchent des draps gris, des robes de clerc, des tabliers de copiste tachés d'encre. Il y en a des montagnes.",
      "« La tour, dit sœur Aude. Nous lavons pour la tour depuis cent ans. C'est ce linge qui paie notre pain. » Elle soulève un drap. « Le chariot monte tous les jeudis avant l'aube, par la porte de la lingerie, côté rivière. Personne ne le fouille. Qui fouillerait des draps sales ? »",
      "Elle laisse retomber le drap. Elle te regarde. Elle attend que tu demandes, et elle a l'air de savoir déjà ce que tu vas demander, et de ne pas avoir décidé ce qu'elle répondra.",
    ],
    choices: [
      { label: "« Laissez-nous monter dans le chariot. »", test: { dom: "social", label: "Sœur Aude", help: [{ if: { seen: "IV_Q_hospice_aider" }, v: 20 }, { if: { present: "ombeline" }, v: 15 }, { if: { present: "hylas" }, v: 10 }, { if: { present: "gaspard" }, v: 5 }] },
        win: { fx: { flag: "pal:lingerie", ep: ["perso", 1000] }, to: "IV_Q_hospice_oui" }, lose: { to: "IV_Q_hospice_non" } },
      { label: "Ne rien demander", fx: { quest: "IV_Q_hospice" }, to: "IV_pal" },
    ] }),
  IV_Q_hospice_oui: P({ title: "Jeudi", place: "pallanche",
    text: [
      "« Je ne vous ai rien dit, dit sœur Aude. Et je n'ai rien vu. Le chariot part à trois heures. Il y a de la place sous les draps pour quatre personnes qui ne toussent pas. »",
      "Elle reprend son écuelle. « S'ils vous prennent, ils fermeront l'hospice. Et ceux-là mourront de faim en une semaine, parce que personne d'autre ne sait leur nom. » Elle ne le dit pas pour te faire peur. Elle le dit pour que tu le saches.",
    ],
    choices: [{ label: "« Ils ne nous prendront pas. »", fx: { quest: "IV_Q_hospice" }, to: "IV_pal" }] }),
  IV_Q_hospice_non: P({ title: "Les noms à la craie", place: "pallanche",
    text: [
      "« Non », dit-elle. Simplement. « J'ai soixante noms à la craie dans cette salle, et le pain de l'hospice vient de la tour. Je ne les jouerai pas sur un enfant que je ne connais pas. »",
      "Elle ne te chasse pas. Elle te remet une écuelle dans les mains, et elle te montre le rang suivant.",
    ],
    choices: [{ label: "Finir le rang, et ressortir", fx: { quest: "IV_Q_hospice", ep: ["perso", 200] }, to: "IV_pal" }] }),
  IV_tour_lingerie: P({ title: "Le chariot", place: "pallanche",
    text: [
      "Trois heures. Les draps sentent le savon noir et la cire. Ils pèsent, et ils sont froids, et tu respires par un pli. Le chariot cahote sur les pavés, puis sur une rampe. Une voix, en haut, demande : « La lingerie ? » Une autre, celle d'un vieil homme qui mène le cheval, répond : « Comme tous les jeudis. » La porte grince.",
      "On décharge les paniers dans une salle basse. Quand le bruit des pas s'éloigne, vous sortez des draps, un par un, et la porte du fond donne sur l'escalier de service.",
    ],
    choices: [{ label: "Monter", to: "IV_tour_escalier" }] }),

  // ---------------------------------------------------------------- Les faux jetons
  IV_Q_jetons: P({ title: "Les faux jetons", place: "pallanche",
    fx: { questSeen: "IV_Q_jetons" },
    text: [
      "Rue des Tonneliers, sous un porche, une bande d'enfants. Le plus grand a peut-être treize ans. Il a devant lui, sur un tonneau renversé, une rangée de jetons de bois peints couleur de plomb, avec la plume et la clé, pareils de loin à ceux qu'on tend sous le porche de la tour.",
      "« Un jeton, un écu, dit-il. Tu passes en tête de la queue. Le greffier te regarde, il voit le jeton, il t'écrit tout de suite. Pas trois jours d'attente. » Il en tend un à une femme, qui paie, et qui part en courant vers la place aux Clercs.",
      "Un petit, à côté de lui, peint les plumes au pinceau, en tirant la langue. Les jetons sont bien faits. Pas parfaits. Bien faits.",
    ],
    choices: [
      { label: "« Tu sais ce qu'on lui fait, à elle, une fois qu'elle est écrite ? »", to: "IV_Q_jetons_parler" },
      { label: "Laisser faire", refuse: true, to: "IV_pal" },
    ] }),
  IV_Q_jetons_parler: P({ title: "Le grand", place: "pallanche",
    text: [
      "Le grand hausse les épaules. « Ils l'écrivent. Elle a son jeton. Elle est contente. Moi, j'ai un écu. Ma mère a du pain. » Il compte sa monnaie. « Tout le monde veut être écrit. Je vends ce que les gens veulent. »",
      "« Et toi ? » demande le petit, avec son pinceau. « Tu es écrit ? »",
      "Avant que tu répondes, quelqu'un crie au bout de la rue. Deux manteaux gris. Une patrouille de la Chancellerie, qui a vu le tonneau et ce qu'il y a dessus.",
    ],
    choices: [
      { label: "Les cacher, vite", test: { dom: "discretion", label: "Les gamins", help: [{ if: { present: "pie" }, v: 20 }, { if: { present: "corbe" }, v: 5 }, { if: { present: "givre" }, v: 10 }] },
        win: { fx: { flag: "iv:jetons=caches", ep: ["perso", 900] }, to: "IV_Q_jetons_caches" }, lose: { to: "IV_Q_jetons_pris" } },
      { label: "Te mettre entre eux et la patrouille", to: "IV_Q_jetons_combat" },
      { label: "Partir avant qu'ils arrivent", fx: { quest: "IV_Q_jetons" }, to: "IV_Q_jetons_partir" },
    ] }),
  IV_Q_jetons_combat: P({ title: "La rue des Tonneliers",
    combat: { title: "La patrouille grise", enemies: ["garde_noir", "garde_noir"], terrain: "ville", range: "contact",
      flee: { dom: "discretion", label: "Disparaître avec les gamins par les caves", to: "IV_Q_jetons_caches" },
      win: { fx: { flag: "iv:jetons=caches", ep: ["seance", 1200] }, to: "IV_Q_jetons_caches" }, lose: { fx: { pv: -4 }, to: "IV_Q_jetons_pris" } },
    text: ["Les gamins ne s'enfuient pas. Ils regardent. Le grand a pris une douelle de tonneau, et il la tient comme une épée, sans savoir s'en servir."],
    choices: [] }),
  IV_Q_jetons_caches: P({ title: "Sous les tonneaux", place: "pallanche",
    text: [
      "Les caves de la rue des Tonneliers communiquent toutes, par des soupiraux et des trous dans les murs que les enfants connaissent et que les adultes ont oubliés. Vous attendez dans le noir, entre les barriques, que les pas s'éloignent.",
      "Le grand ne dit rien pendant longtemps. Puis : « Tu ne l'as pas dit. Ce qu'on lui fait, à la femme, une fois écrite. »",
      "Tu lui dis. Le Bureau des Cessions. Les fioles. Le blanc qui gagne sur les cartes. Il écoute sans t'interrompre, en tournant un jeton entre ses doigts.",
      "« Alors je vais en faire des faux qui marchent à l'envers », dit-il. Tu ne comprends pas. Il sourit pour la première fois. « Des jetons qui font sortir de la queue. Tu verras. »",
    ],
    choices: [{ label: "Le laisser à son idée", fx: { quest: "IV_Q_jetons", flag: "iv:jetons=envers" }, to: "IV_pal" }] }),
  IV_Q_jetons_pris: P({ title: "Le tonneau renversé", place: "pallanche",
    text: [
      { if: { not: { seen: "IV_Q_jetons_combat" } }, text: "Tu as caché les petits. Pas le grand, qui est resté devant son tonneau pour ramasser ses jetons." },
      { if: { seen: "IV_Q_jetons_combat" }, text: "Tu n'as pas tenu. Les petits ont filé par les caves. Pas le grand, qui est resté devant son tonneau, sa douelle à la main." },
      "Quand la patrouille repart, la rue est vide. Le tonneau est renversé, les jetons écrasés dans le ruisseau. On a emmené le grand. Le petit au pinceau est assis sur une marche, plus loin, son pinceau à la main.",
      "« Ils l'ont emmené à la tour, dit-il. Pour l'écrire. » Il ne pleure pas. Il range son pinceau dans sa manche, avec soin, comme une chose qui servira.",
    ],
    choices: [{ label: "Revenir chez la Veuve", fx: { quest: "IV_Q_jetons", flag: "iv:jetons=pris" }, to: "IV_pal" }] }),
  IV_Q_jetons_partir: P({ title: "Au bout de la rue", place: "pallanche",
    text: ["Tu tournes au coin avant que la patrouille arrive. Derrière toi, un bruit de tonneau renversé, des cris d'enfants, puis plus rien. Tu ne te retournes pas. Tu y penses tout le reste de la journée."],
    choices: [{ label: "Revenir chez la Veuve", to: "IV_pal" }] }),

  // ---------------------------------------------------------------- Le bleu des Teinturiers
  IV_Q_bleu: P({ title: "Les cuves grises", place: "pallanche",
    fx: { questSeen: "IV_Q_bleu" },
    text: [
      "Le quartier des Teinturiers, où Linette est née. Avant, la rivière sortait du quartier en trois couleurs, le rouge de la garance, le jaune de la gaude, le bleu de la guède, trois bandes côte à côte qui ne se mélangeaient qu'au pont. Aujourd'hui, elle est grise. Les draps qui sèchent aux perches sont gris. Les mains des teinturiers sont grises jusqu'aux coudes.",
      "« Ça ne prend plus, dit une femme penchée sur sa cuve. Depuis le printemps. On met la guède, on met le bain, on attend, on sort le drap. Gris. » Elle sort un drap, pour te montrer. Gris. « Le vieux Aubin savait faire le bleu. Le meilleur bleu de Pallanche. Il a payé sa taille avec. »",
    ],
    choices: [
      { label: "Aller voir le vieux Aubin", to: "IV_Q_bleu_aubin" },
      { label: "Ressortir", to: "IV_pal" },
    ] }),
  IV_Q_bleu_aubin: P({ title: "Le vieux Aubin", place: "pallanche",
    text: [
      "Aubin est assis devant sa porte, les mains sur les genoux. Des mains bleues. Cinquante ans de guède dans la peau, que rien ne lavera, et lui ne sait plus pourquoi elles sont de cette couleur. Il les regarde de temps en temps, étonné.",
      "« Deux écus de taille, dit-il. Je n'avais pas deux écus. J'avais le bleu. Un écu, la recette. Un écu, le tour de main. Le clerc a dit que ça ne faisait pas mal. Ça ne fait pas mal. » Il regarde ses mains. « Les autres ont continué de mettre de la guède dans les cuves, mais c'était moi, le bleu. Ce n'était pas dans la guède. »",
      "« J'avais un cahier, dit-il encore. Mon père l'avait. Le grand-père aussi. Je ne sais plus où. Quelque part dans la maison. »",
    ],
    choices: [
      { label: "Chercher le cahier dans la maison", test: { dom: "savoir", label: "Le cahier", help: [{ if: { present: "linette" }, v: 20 }, { if: { present: "pie" }, v: 10 }, { if: { present: "hylas" }, v: 10 }] },
        win: { fx: { item: "cahier_aubin", ep: ["perso", 700] }, to: "IV_Q_bleu_cahier" }, lose: { to: "IV_Q_bleu_rien" } },
      { label: "Ressortir", to: "IV_pal" },
    ] }),
  IV_Q_bleu_cahier: P({ title: "Le cahier bleu", place: "pallanche",
    text: [
      "Il est sous une latte du plancher, enveloppé dans un tablier. Un cahier épais, à la couverture teinte en bleu, avec trois écritures différentes, de plus en plus récentes, et des échantillons de drap cousus aux pages. Des bleus. Vingt bleus. Le bleu de lin, le bleu de deuil, le bleu de mariée, le bleu de la Vierge de Saint-Gilles.",
      { with: "linette", text: "Linette tourne les pages. Elle s'arrête sur un échantillon presque noir. « C'est le bleu de maman, dit-elle. Son tablier. Je m'en souviens. » Elle le touche. Elle ne dit plus rien." },
      "Tu le portes à Aubin. Il l'ouvre. Il lit. Il ne comprend pas. La recette, il l'a cédée, et lire une recette qu'on a cédée, c'est comme lire une langue étrangère. Mais ses mains, elles, se mettent à bouger toutes seules. Elles pèsent, elles dosent, elles remuent un bain qui n'existe pas.",
    ],
    choices: [
      { label: "Le mener à sa cuve", to: "IV_Q_bleu_cuve" },
      { label: "Donner le cahier à la femme de la cuve d'à côté", to: "IV_Q_bleu_femme" },
    ] }),
  IV_Q_bleu_cuve: P({ title: "La cuve", place: "pallanche",
    text: [
      "Tu le mènes à sa cuve. Il ne sait pas ce qu'il fait. Ses mains le savent. Elles prennent la guède, la chaux, le son, elles goûtent le bain du bout du doigt, elles attendent, elles soufflent sur la surface pour voir la fleur. Il faut une journée. Toute la rue regarde.",
      "Au soir, il plonge un drap. Il le sort. Le drap est vert, d'abord, un vert de mare, et puis, à l'air, sous les yeux de tout le quartier, il bleuit. Lentement. Comme un ciel qui se fait le matin.",
      "Aubin regarde le drap. Il regarde ses mains. « Ah, dit-il. C'est pour ça. » Et il rit, et il pleure, et les femmes de la rue lui prennent le cahier des mains pour recopier les pages, une chacune, avant la nuit.",
    ],
    choices: [{ label: "Laisser le quartier à son bleu", fx: { quest: "IV_Q_bleu", flag: "iv:bleu=rendu", conf: { linette: 10 } }, to: "IV_pal" }] }),
  IV_Q_bleu_femme: P({ title: "Le cahier recopié", place: "pallanche",
    text: [
      "La femme de la cuve d'à côté prend le cahier sans un mot, et elle s'assied pour le lire, et elle le lit toute la nuit à la chandelle. Au matin, elle a recopié la recette sur un drap gris, en grandes lettres, et elle l'a pendu à la perche, au-dessus de la rue, où tout le monde peut la lire.",
      "Elle ne réussit pas le bleu d'Aubin. Elle réussit un bleu, un peu plus clair, un peu plus vert, le sien. Aubin le regarde sécher sans comprendre ce qu'il regarde. Mais il hoche la tête. « Pas mal, dit-il. Pas mal, pour une débutante. »",
    ],
    choices: [{ label: "Laisser le quartier à son bleu", fx: { quest: "IV_Q_bleu", flag: "iv:bleu=rendu", conf: { linette: 5 } }, to: "IV_pal" }] }),
  IV_Q_bleu_rien: P({ title: "La maison d'Aubin", place: "pallanche",
    text: ["Tu cherches. Les coffres, le grenier, le dessous des lits. Tu trouves des tabliers, des perches, des bouts de drap gris. Pas de cahier. Aubin te regarde fouiller sa maison avec une politesse inquiète, comme un hôte dont l'invité aurait perdu quelque chose. Il te propose une soupe. Elle est très bonne. Elle est grise."],
    choices: [{ label: "Ressortir", fx: { quest: "IV_Q_bleu" }, to: "IV_pal" }] }),
};
