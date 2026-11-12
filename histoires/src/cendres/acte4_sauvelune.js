// Act IV · Sauvelune, a year later. Three states: the village came back when its name was given back in the cirque
// (nord:rendu=sauvelune), only the mill family came back with the child (ame:moulin), or the village is empty under the
// grass. Gaspard the Gleaner bakes in the old oven: he was Berthe's baker, three hundred years ago, the first bread in
// the ashes. The child may tell the mill family who he is.
var A = { act: "IV", noLead: true };
function P(o) { return Object.assign({}, A, o); }
var RENDU = { has: "nord:rendu=sauvelune" }, MOULIN = { has: "ame:moulin" };
var VIDE = { not: { any: [RENDU, MOULIN] } };
var FAMILLE = { any: [RENDU, MOULIN] };
module.exports = {
  IV_r_sv: P({ title: "La route de l'ouest", place: null,
    text: [
      "Vous descendez les crêtes vers l'ouest. Les villages des vallées sont habités, mais on y voit des choses étranges : un homme qui repeint le nom de sa rue sur un mur, en grosses lettres. Une femme qui récite, en faisant sa lessive, la liste de ses enfants. Partout, des noms écrits : sur les portes, sur les colliers des chiens, sur les manches des outils.",
      "À un carrefour, une meute de loups blancs. Pas des loups de neige : des loups ordinaires, maigres, devenus blancs pendant l'année blanche, et qui n'ont plus peur de rien parce qu'ils ont oublié qu'on doit avoir peur des hommes.",
    ],
    choices: [
      { label: "Les affronter", to: "IV_r_sv_combat" },
      { label: "Leur faire peur", test: { dom: "nature", label: "Le feu et la voix", help: [{ if: { present: "corbe" }, v: 15 }, { if: { present: "givre" }, v: -10 }] },
        win: { fx: { ep: ["perso", 800] }, to: "@route" }, lose: { to: "IV_r_sv_combat" } },
    ] }),

  IV_r_sv_combat: P({ title: "Les loups blancs",
    combat: { title: "Les loups blancs", enemies: [{ id: "loup_blanc", n: 3 }], terrain: "nature", range: "contact",
      flee: { dom: "nature", label: "Reculer vers les rochers", to: "@route" },
      win: { fx: { ep: ["seance", 1500] }, to: "@route" },
      lose: { fx: { pv: -4 }, to: "@route" } },
    text: ["Ils attaquent en silence, sans grogner, sans hésiter.", { with: "givre", text: "Givre se hérisse et crache comme un chat." }],
    choices: [] }),

  IV_sv_arrivee: P({ title: "Sauvelune", place: "sauvelune",
    text: [
      "La route de la vallée, le pont sur la Sauve, le chêne au-dessus du village. Tu les reconnais avant de les voir, à l'odeur, au bruit de l'eau.",
      { if: RENDU, text: "Le village est là. Les toits, le temple, la fumée des cheminées. Le moulin tourne. Des enfants pataugent dans la Sauve. Un chien aboie. Quelqu'un fauche le pré des foins, en chantant faux. Sauvelune vit, comme si l'été dernier n'avait jamais eu lieu." },
      { if: MOULIN, text: "Le village est là, sous les herbes hautes. Les toits, le temple, les maisons fermées. Personne. Une seule cheminée fume : celle du moulin. La roue tourne. Sur le seuil, Pim lance des cailloux dans le bief, et il se retourne en entendant vos pas, et il crie ton nom de toutes ses forces." },
      { if: VIDE, text: "Le village est là, sous les herbes hautes. Les toits, le temple, les maisons. Personne. Les portes sont ouvertes, les volets battent. La roue du moulin est arrêtée, prise dans les ronces. Le chêne a perdu une branche. Sur le pont, l'herbe a poussé entre les pierres." },
      { if: { has: "sauvelune:sonne" }, text: "Et du clocher vide du temple, de temps en temps, sans personne pour tirer la corde, vient un son de cloche. Un seul coup, très loin, comme un écho de quelque chose qui sonne ailleurs." },
      { if: VIDE, text: "Et pourtant, une fumée. Pas au moulin. Au four communal, en bas de la place. Quelqu'un cuit du pain." },
    ],
    choices: [
      { label: "Aller au moulin", hide: VIDE, to: "IV_sv_moulin" },
      { label: "Descendre au four", to: "IV_sv_four" },
      { label: "Monter au chêne", to: "IV_sv_chene" },
    ] }),

  IV_sv_moulin: P({ title: "Le moulin", place: "sauvelune",
    text: [
      { if: RENDU, text: "Joris est devant la meule, comme toujours. Il te voit. Il pose le sac qu'il portait. Il ne dit rien, comme toujours. Il vient vers toi et il te serre contre lui, si fort que tu sens son cœur, et il dit, dans tes cheveux : « Un an. » C'est tout. C'est un reproche, et un pardon, et tout le reste." },
      { if: MOULIN, text: "Joris a désherbé la roue tout seul, et la roue tourne, pour personne. Il moud un peu de grain trouvé dans un grenier. « On n'allait pas rester les bras croisés », dit-il. Agathe a fait du pain dans le four du moulin. Ils sont seuls dans un village vide, et ils ont l'air de trouver ça normal, comme des gens qui se sont réveillés d'un long rêve." },
      { if: { souv: "enfant:agathe" }, text: "Agathe arrive en courant de la cuisine, les joues rouges, et elle te pousse une mèche derrière l'oreille, avant même de dire bonjour." },
      { if: { not: { souv: "enfant:agathe" } }, text: "Une femme arrive en courant de la cuisine, large, rieuse. Tu sais que c'est ta mère. Tu ne reconnais pas son visage. Tu l'as donné, il y a longtemps, et tu ne l'auras plus jamais. Elle te pousse une mèche derrière l'oreille, et ça, tu le reconnais." },
      { if: { has: "ame:maera" }, text: "Maëra est restée sur le pont, en arrière. Elle regarde le moulin, la roue, la femme aux joues rouges qui t'embrasse. Elle ne s'approche pas. Elle sourit, et elle a l'air de quelqu'un qui vérifie qu'elle a eu raison." },
    ],
    choices: [{ label: "Le soir, à table", to: "IV_sv_table" }] }),

  IV_sv_table: P({ takes: "evening", title: "À table", place: "sauvelune",
    text: [
      "Le soir, à table, Agathe sert tout le monde avant de s'asseoir, comme toujours. Pim pose des questions jusqu'à ce qu'on le menace du grenier. Joris mange sans rien dire. Tes compagnons sont serrés sur le banc, et Agathe les sert deux fois.",
      "À la fin du repas, Joris pose sa cuillère. Il te regarde. « Le coffre, dit-il. Au grenier. Il y avait une lettre. Je ne l'ai jamais ouverte. Je savais ce qu'il y avait dedans. » Il attend.",
    ],
    choices: [
      { label: "Leur dire. Valcendre, Maëra, Ardaël. Ton nom", fx: { flag: "famille:sait", ep: ["perso", 2000] }, to: "IV_sv_dire" },
      { label: "Ne rien dire. Tu es leur fils. C'est tout ce qui compte ce soir", fx: { flag: "famille:tu" }, to: "IV_sv_taire" },
    ] }),

  IV_sv_dire: P({ title: "Aëlan", place: "sauvelune",
    text: [
      "Tu leur dis. Tout. La plaine, la forêt brûlée, la femme qui filait, le roi au siège de pierre, le nom.",
      "Personne ne t'interrompt, même pas Pim. À la fin, Agathe se lève, et elle va chercher la marmite, et elle te ressert, alors que tu n'as plus faim.",
      "« Aëlan, dit Joris, en essayant le mot comme on essaie un outil. C'est joli. » Il réfléchit. « Ici, tu t'appelles comme on t'a appelé. Là-bas, comme ils veulent. Un homme peut avoir deux noms. Moi, j'en ai eu un troisième, quand j'étais au régiment. Personne ne s'en souvient, et c'est tant mieux. »",
      { if: { has: "ame:maera" }, text: "Agathe se lève de nouveau, et va ouvrir la porte. Maëra est assise sur le banc de pierre, dehors, dans le noir. Agathe lui dit d'entrer. Maëra entre. Les deux femmes se regardent par-dessus la table, très longtemps. Puis Agathe lui sert une assiette, et Maëra la mange, et personne ne dit rien, et c'est la chose la plus importante qui se passe ce soir-là dans le monde entier." },
    ],
    choices: [{ label: "Dormir dans ton lit, au moulin", fx: { pv: 20 }, to: "IV_sv_matin" }] }),

  IV_sv_taire: P({ title: "Ton lit", place: "sauvelune",
    text: [
      "Tu ne dis rien. Joris hoche la tête, comme si c'était une réponse. Peut-être que c'en est une.",
      "Tu dors dans ton lit, sous le toit du moulin. La roue fait tac-tac à travers le plancher.",
      { if: { souv: "enfant:moulin" }, text: "Tu t'endors avant d'avoir compté jusqu'à dix." },
      { if: { not: { souv: "enfant:moulin" } }, text: "Tu écoutes le bruit toute la nuit, sans dormir. Tu ne te souviens pas qu'il t'ait jamais bercé. Il devrait. Tu le sais. Tu l'as donné, il y a longtemps, à un renard." },
      { if: { not: { souv: "enfant:moulin" } }, with: "givre", text: "Et le renard dort au pied du lit, et il ronronne, et ça fait tac-tac." },
    ],
    choices: [{ label: "Le matin", fx: { pv: 20 }, to: "IV_sv_matin" }] }),

  IV_sv_four: P({ title: "Le four", place: "sauvelune",
    text: [
      "Le four communal est allumé. Devant la gueule, une grande forme blanche, voûtée, avec des bras trop longs et une pelle à pain dans les mains. Un Glaneur. Il enfourne des miches avec une précision de vieux métier.",
      { if: { has: "nord:gaspard" }, text: "C'est Gaspard. Il se retourne. Il n'a pas de visage, mais tu sais qu'il sourit. « Je suis revenu ici après la chute, dit-il de sa voix de vent dans les cheminées. Je ne savais pas où aller. Mes pieds savaient. »" },
      { if: { not: { has: "nord:gaspard" } }, text: "Il se retourne. Il n'a pas de visage. Il ne fuit pas, il n'attaque pas. Il dit, d'une voix de vent dans les cheminées : « Il faut que quelqu'un fasse le pain. » Et puis, après un moment : « Gaspard. Je m'appelle Gaspard. Ici, je m'en souviens. Ailleurs, je ne sais pas. »" },
      "Il te tend une miche. Elle est chaude, dorée, parfaite. Elle sent l'anis et le miel, comme le pain de la fête des foins.",
    ],
    choices: [{ label: "« Pourquoi ici ? »", to: "IV_sv_four2" }] }),

  IV_sv_four2: P({ title: "Le premier pain", place: "sauvelune",
    text: [
      "« J'étais le boulanger de Berthe, dit-il. La grosse Berthe. On l'appelait la Gerbe. » Il enfourne une miche. « On est descendus de la colline, un matin. La terre était chaude. Pas du soleil. Elle a fait semer l'orge le jour même, et moi, elle m'a dit de faire du pain, avec la dernière farine, pour que les enfants mangent. J'ai fait le four ici. Sur la cendre. Ce four-là. »",
      "Il pose la pelle. « J'ai fait le pain pendant quarante ans. Tout le monde l'a mangé. Personne n'a jamais demandé ce qu'il y avait sous le four. Moi je savais. Quand je suis mort, j'ai demandé à l'Hiver de me laisser oublier. Il a dit non. Il a dit : tu glaneras. » Il hausse ses épaules trop larges. « J'ai glané trois cents ans. Et puis quelqu'un m'a appelé par mon nom. »",
      { if: { has: "proces:gerbe=rendu" }, text: "« Cet hiver, dit-il encore, des gens du village d'à côté sont montés jusqu'ici. Ils ne savaient pas pourquoi. Ils se sont assis devant le four et ils ont pleuré. Je leur ai donné du pain. »" },
    ],
    choices: [
      { label: "« Viens avec nous, Gaspard. »", fx: { join: "gaspard", flag: "iv:gaspard", conf: { gaspard: 15 }, ep: ["perso", 1500] }, to: "IV_sv_gaspard_vient" },
      { label: "« Reste. Quelqu'un doit faire le pain. »", hide: { not: FAMILLE }, fx: { flag: "gaspard:four", ep: ["perso", 1000] }, to: "IV_sv_gaspard_reste" },
    ] }),

  IV_sv_gaspard_vient: P({ title: "La pelle", place: "sauvelune",
    text: ["Il défourne la dernière fournée, range la pelle à sa place, au clou, et couvre les braises de cendre pour qu'elles tiennent. Il fait tout ça lentement, avec soin. Puis il te suit. Il emporte trois miches sous son bras."],
    choices: [{ fx: { food: 3 }, back: "IV_sv_place" }] }),

  IV_sv_gaspard_reste: P({ title: "Le four", place: "sauvelune",
    text: ["Il hoche la tête. Il a l'air soulagé, et il a l'air triste de l'être. « Je ferai le pain, dit-il. Quand tu reviendras, il sera chaud. » Il te donne trois miches pour la route."],
    choices: [{ fx: { food: 3 }, back: "IV_sv_place" }] }),

  IV_sv_chene: P({ title: "Le chêne", place: "sauvelune",
    text: [
      "Le vieux chêne au-dessus du village. Celui où les gens de Sauvelune gravent leurs noms depuis toujours, et où il n'y en avait plus, il y a un an.",
      { if: RENDU, text: "Les noms sont revenus, tous. Et il y en a de nouveaux, gravés cette année, tout frais : les enfants de Sauvelune ont gravé les leurs deux fois, une fois en bas, une fois en haut, pour être sûrs. Le tien y est. Quelqu'un l'a regravé, à côté de l'ancien." },
      { if: { not: RENDU }, text: "L'écorce est lisse. Aucun nom. Le chêne a l'air plus jeune qu'il n'est." },
      { if: { all: [RENDU, { has: "tess:chene" }] }, text: "Tess est là. Assise contre le tronc, son marteau à côté d'elle. Elle a pris des bras de forgeronne, cette année. Elle te regarde arriver. « Un an, dit-elle. J'ai regravé ton nom tous les mois. Au cas où. »" },
      { if: { all: [RENDU, { not: { has: "tess:chene" } }] }, text: "Tess monte vers toi, depuis la forge, en essuyant ses mains sur son tablier. Elle s'arrête à trois pas. Elle te regarde, longtemps, comme on vérifie qu'une lame est droite. « Tu es revenu », dit-elle, et ce n'est pas une question." },
    ],
    choices: [
      { label: "Graver ton nom. Les deux", hide: RENDU, fx: { flag: "chene:deux_noms", ep: ["perso", 800] }, to: "IV_sv_chene_grave" },
      { label: "Rester avec Tess", hide: { not: RENDU }, to: "IV_sv_tess" },
      { back: "IV_sv_place" },
    ] }),

  IV_sv_chene_grave: P({ title: "Deux noms", place: "sauvelune",
    text: [
      "Tu prends ton couteau. Tu graves ton nom de Sauvelune, celui qu'on t'a donné au temple, devant le registre du Père Anselme. Puis, en dessous, l'autre : Aëlan.",
      "Le bois est dur. Ça prend une heure. Quand tu as fini, le chêne n'a toujours aucun autre nom. Seulement les tiens. Ça fait un village d'une seule personne.",
    ],
    choices: [{ back: "IV_sv_place" }] }),

  IV_sv_tess: P({ takes: "evening", title: "Tess", place: "sauvelune",
    text: [
      "Vous restez sous le chêne jusqu'au soir. Elle te raconte l'année : Sauvelune qui se réveille, un matin d'août, chacun dans son lit, avec l'impression d'avoir dormi un mois. Le Père Anselme qui recopie le registre trois fois. Pim qui demande où tu es, tous les jours, et que personne n'ose plus menacer du grenier.",
      "Tu lui racontes un peu de ton année à toi. Trois jours. Elle rit, puis elle ne rit plus.",
      { if: { has: "tess:bal" }, text: "À la fin, elle te donne un coup de poing dans l'épaule, pas très fort. « Tu avais promis, dit-elle. À la bourrée. Tu es revenu. » Elle a l'air presque déçue de ne pas pouvoir t'en vouloir." },
      { if: { souv: "enfant:tess" }, text: "Le goût de la mûre. Les fourmis. Tu t'en souviens. Elle aussi, tu le vois à sa façon de regarder l'herbe." },
      { if: { not: { souv: "enfant:tess" } }, text: "Elle dit : « Tu te souviens du printemps, ici, sous le chêne ? » Tu ne t'en souviens pas. Tu l'as donné. Elle le voit. Elle ne dit rien. Elle te prend la main quand même, comme si c'était la première fois, et c'est la première fois." },
      "« Va à ta guerre, dit-elle à la fin. Et reviens. Ou ne reviens pas, mais écris. Je sais lire, maintenant. Anselme nous a tous appris. »",
    ],
    choices: [{ fx: { flag: "tess:iv", ep: ["perso", 1000] }, back: "IV_sv_place" }] }),

  IV_sv_place: P({ title: "La place", place: "sauvelune", hub: true,
    text: [
      { if: RENDU, text: "La place de Sauvelune, le temple, la fontaine, les vieux sur le banc qui te saluent comme si tu étais parti hier." },
      { if: { not: RENDU }, text: "La place de Sauvelune, le temple fermé, la fontaine qui coule pour personne." },
    ],
    choices: [
      { label: "Le moulin", hide: { any: [VIDE, { seen: "IV_sv_moulin" }] }, to: "IV_sv_moulin" },
      { label: "Le four", hide: { seen: "IV_sv_four" }, to: "IV_sv_four" },
      { label: "Le chêne", hide: { seen: "IV_sv_chene" }, to: "IV_sv_chene" },
      { label: "Le rucher de Mathurin", hide: { seen: "IV_Q_ruches" }, to: "IV_Q_ruches" },
      { label: "Le temple", hide: { seen: "IV_sv_temple" }, to: "IV_sv_temple" },
      { label: "Ta pierre plate, au-dessus du bief", hide: { seen: "IV_sv_pierre" }, to: "IV_sv_pierre" },
      { label: "Le grand pré du bas, où l'on fauche", hide: { any: [{ seen: "IV_f_pre" }, { not: RENDU }] }, to: "IV_f_pre" },
      { label: "Le petit cimetière, sous les noyers", hide: { seen: "IV_sv_cimetiere" }, to: "IV_sv_cimetiere" },
      { label: "Les linteaux de la place, que le vieux Gervais repeignait", hide: { any: [{ seen: "IV_sv_linteaux" }, { not: { has: "en:linteaux" } }] }, to: "IV_sv_linteaux" },
      { label: "Descendre jusqu'à Pont-de-Saule", hide: { seen: "IV_ps_arrivee" }, to: "IV_ps_arrivee" },
      { label: "Descendre à Pont-de-Saule", hide: { not: { seen: "IV_ps_arrivee" } }, to: "IV_ps" },
      { label: "Repartir vers le moutier", fx: { flag: "iv:sauvelune_vu" }, travel: "r_iv_sauvelune" },
    ] }),

  IV_sv_matin: P({ title: "Le matin", place: "sauvelune",
    text: [
      "Au matin, Agathe a préparé des provisions pour tout le monde. Joris vous accompagne jusqu'au pont. Il ne dit rien. Au milieu du pont, il s'arrête, et il te dit : « Si un jour je ne suis plus là. » Il ne finit pas la phrase.",
      { if: { souv: "enfant:serment" }, text: "Tu la finis pour lui. « Je veillerai sur eux. » Il hoche la tête. Il repart vers le moulin." },
      { if: { not: { souv: "enfant:serment" } }, text: "Tu attends la suite. Tu sais qu'il y a une suite, que tu la connaissais. Il te regarde attendre, et il comprend que tu ne sais plus. Il ne te reproche rien. Il te pose la main sur l'épaule, et il repart vers le moulin, un peu plus lentement." },
    ],
    choices: [{ fx: { food: 4 }, back: "IV_sv_place" }] }),
};
