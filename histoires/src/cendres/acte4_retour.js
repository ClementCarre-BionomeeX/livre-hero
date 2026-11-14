// Act IV · Le pont de Lisse, opening: back at the col de l'Ourse a year later, the shepherd's news, the moutier of the
// Watchers as the northern base (Ombeline and the hunger she carries, Arnoul, the chronicle of the white year), and the
// choice of where to look for the others first. The child leads ("tu").
var A = { act: "IV", noLead: true };
function P(o) { return Object.assign({}, A, o); }
var REG_REINE = { has: "registre:reine" }, REG_GREF = { has: "registre:greffiers" }, REG_CLAN = { has: "registre:clans" };
module.exports = {
  IV_col: P({ title: "Un an", place: "col",
    fx: { flag: "acte4:debut", catchup: 13, catchupAll: true, catchupWhy: "l'Outre-Blanc" },
    text: [
      "Le berger s'appelle Josse. Il a soixante ans et des chiens qui n'aboient pas après toi. Il s'assied sur la grande pierre plate, qu'il ne sait pas sacrée, et il sort du pain, et il vous en donne, parce que vous avez des têtes de gens qui reviennent de loin.",
      "Le camp du clan n'est plus là. Il reste des cercles de pierres noircies dans l'herbe, là où étaient les tentes, et la pierre plate, et rien d'autre. La déchirure a disparu. Sur le col, l'herbe a repoussé par-dessus, plus verte qu'ailleurs, comme sur une tombe.",
      { if: { not: { has: "ame:sansnom" } }, text: "Josse tend du pain au Sans-Nom. Il se détourne pour couper le fromage. Quand il se retourne, il regarde ton frère avec surprise, et il lui tend du pain une deuxième fois." },
      { if: { has: "ame:sansnom" }, text: "Josse tend du pain à ton frère, et lui demande son nom, et s'en souvient. Ton frère tient le pain à deux mains, sans le manger, comme quelque chose de fragile." },
    ],
    choices: [{ label: "Lui demander ce qui s'est passé, cette année", to: "IV_berger" }] }),

  IV_berger: P({ title: "L'année blanche", place: "col",
    text: [
      "« L'année blanche, dit Josse. C'est comme ça qu'on l'appelle. Vous n'étiez pas là ? » Il s'en tient là. Dans la montagne, cette année, on a appris à se passer de réponses.",
      "« La nuit où la montagne a craqué, fin d'été, on l'a entendue jusqu'à Pont-de-Saule. Ensuite il a neigé. La blanche, pas celle de l'hiver. Tout l'automne, tout l'hiver. Des vallées entières. On montait au village d'à côté, et on trouvait des maisons, des gens dedans, et personne ne savait le nom de personne. Au printemps, elle s'est arrêtée. D'un coup. Comme si quelqu'un avait serré le poing. »",
      { if: REG_REINE, text: "« À Vasselin, la reine a fermé la Chancellerie. On dit qu'elle a lu un livre qu'elle n'aurait pas dû lire. Le Greffier-Majeur s'est enfermé dans sa tour, à Pallanche, avec ses greffiers, et la ville est à lui. La reine n'ose pas l'assiéger. On dit qu'il a de quoi faire oublier une armée. »" },
      { if: REG_GREF, text: "« À Pallanche, des greffiers en fuite lisent des listes sur les places. Des noms, des villages, ce que les gens ont vendu au Bureau. On les appelle les Liseurs. La moitié des gens les écoutent en pleurant, l'autre moitié leur jette des pierres. Le Greffier-Majeur les fait pendre quand il les attrape. La reine le laisse faire. »" },
      { if: REG_CLAN, text: "« Le Greffier-Majeur a perdu quelque chose, l'an passé, à ce qu'on dit, et depuis il fait chercher partout, jusque dans la montagne. Ses gens en gris sont passés ici trois fois. Ils demandaient après un jeune homme aux yeux gris presque blancs. » Il te regarde. Il s'en tient là." },
      "« Et puis il y a la guerre. Corvanne dit que c'est Esquarre qui a envoyé la neige, parce que chez eux aussi des villages ont disparu. Les armées sont sur la Lisse depuis le printemps. On dit qu'il y aura bataille au pont avant les foins. » Il crache dans l'herbe. « Au même pont. Comme si un pont, ça ne suffisait pas une fois. »",
    ],
    choices: [{ label: "Descendre au moutier des Veilleurs", fx: { clue: "n_annee_blanche" }, to: "IV_moutier_arrivee" }] }),

  IV_moutier_arrivee: P({ title: "Le moutier", place: "moutier",
    text: [
      "Le moutier gris est plein. Des gens dorment dans le cloître, sous les arcades, dans la chapelle, sur des paillasses alignées. Des familles entières, avec leurs bêtes, leurs coffres, leurs berceaux. Ils viennent des vallées que la neige a prises. Ils sont arrivés tout l'hiver, sans savoir pourquoi ils montaient ici plutôt qu'ailleurs, et les Veilleurs les ont pris.",
      { if: { has: "nord:rendu=arnoul" }, text: "Dom Arnoul est assis dans son fauteuil, au milieu du cloître, quatre-vingt-onze ans, et il distribue les paillasses comme on distribue des postes de garde. Il te voit entrer. Il dit ton nom, celui de Sauvelune, sans hésiter. « Je savais que la porte te rendrait, dit-il. On veille depuis trois cents ans. On sait à quoi ressemble ce qui revient. »" },
      { if: { all: [{ has: "nord:arnoul_pris" }, { not: { has: "nord:rendu=arnoul" } }] }, text: "Dans un fauteuil, au milieu du cloître, un très vieil homme regarde les réfugiés avec bienveillance. Il ne sait pas qui il est. Les frères l'appellent mon père, et il répond, poliment. Il a été prieur. Il ne s'en souvient pas." },
      { if: { not: { has: "nord:arnoul_pris" } }, text: "Le fauteuil du prieur Arnoul est vide, au milieu du cloître. Personne ne s'y assied. Les frères tournent autour, en portant les paillasses." },
      "Et au fond du cloître, penchée sur un berceau, une femme en robe de laine grise, les cheveux coupés court, qui se redresse en vous entendant.",
    ],
    choices: [{ label: "Mère Ombeline", to: "IV_ombeline" }] }),

  IV_ombeline: P({ title: "Ombeline", place: "moutier",
    text: [
      "Elle a vieilli de dix ans en un an. Elle sourit quand même. Elle a toujours souri, Ombeline, c'est son métier.",
      { if: { has: "ombeline:faim" }, once: true, text: "Elle te prend les mains, et tu sens tout de suite ce qui ne va pas : elle a froid. Pas aux mains. Dedans. « Le grand, au fond du cirque, dit-elle à voix basse. Je lui ai pris sa faim pour qu'il dorme. Je croyais pouvoir la porter. Elle grandit. La nuit, quand je tiens la main d'un mourant, je prends plus que ses mauvais souvenirs. Je prends tout. Je ne peux pas m'en empêcher. Les frères ne me laissent plus seule avec les malades. »" },
      { if: { not: { has: "ombeline:faim" } }, once: true, text: "« Je suis montée de mon hospice quand les premiers sont arrivés, dit-elle. Il fallait quelqu'un qui sache ce qu'on fait des souvenirs dont personne ne veut. Ici, il y en a beaucoup. »" },
      { if: { has: "nord:ombeline" }, after: "nord:rendu=arnoul", once: true, text: "« Vous êtes tombés, dit-elle. Moi, je suis restée en haut. Je vous ai cherchés trois jours dans la neige du col, avec les chiens du clan. Puis Arnoul m'a dit d'attendre. Qu'on revient toujours par où on est parti. »" },
      { if: { has: "nord:ombeline" }, before: "nord:rendu=arnoul", once: true, text: "« Vous êtes tombés, dit-elle. Moi, je suis restée en haut. Je vous ai cherchés trois jours dans la neige du col, avec les chiens du clan. Puis les Veilleurs m'ont dit d'attendre. Qu'on revient toujours par où on est parti. »" },
    ],
    choices: [
      { label: "« Viens avec nous. »", hide: { has: "ombeline:faim" }, fx: { join: "ombeline", conf: { ombeline: 10 }, flag: "iv:ombeline" }, to: "IV_moutier" },
      { label: "« Viens avec nous. On trouvera comment t'en défaire. »", hide: { not: { has: "ombeline:faim" } }, fx: { join: "ombeline", conf: { ombeline: 15 }, flag: ["iv:ombeline", "ombeline:faim_suit"] }, to: "IV_ombeline_faim" },
      { label: "Lui proposer de prendre une part de sa faim", hide: { not: { has: "ombeline:faim" } }, to: "IV_ombeline_part" },
      { label: "La laisser à ses malades, pour l'instant", to: "IV_moutier" },
    ] }),

  IV_ombeline_faim: P({ title: "La faim", place: "moutier",
    text: [
      "« Tu ne sais pas ce que tu demandes, dit-elle. Mais personne ne me l'a demandé depuis un an. » Elle va chercher son manteau. Elle dit adieu à chaque berceau, un par un, sans les toucher.",
      "Sur le seuil, elle s'arrête. « Si je prends quelque chose à l'un de vous, dit-elle sans se retourner, dites-le-moi. Je ne m'en apercevrai pas. C'est le pire. »",
    ],
    choices: [{ back: "IV_moutier" }] }),

  IV_ombeline_part: P({ title: "Une part", place: "moutier",
    text: [
      "Elle te regarde longtemps. « La neige glisse sur toi, dit-elle. Je l'ai vu au premier jour. Peut-être que la faim aussi. »",
      "Elle pose ses mains sur les tiennes, et le froid passe. Ce n'est pas une sensation. C'est une envie, très précise, très douce : celle de prendre. Les visages des réfugiés, dans le cloître, te paraissent soudain pleins, lourds de choses que tu pourrais avoir. Tu fermes les yeux.",
      "Ombeline respire, longuement, comme quelqu'un qui pose un sac après dix lieues.",
    ],
    choices: [
      { label: "Garder la part. Elle est à toi, maintenant", tag: "Souvenir donné", stain: true, if: { souv: "enfant:serment" }, why: "Il faudrait quelque chose de solide à quoi t'accrocher, et tu l'as déjà donné.",
        fx: { souv: "enfant:serment", flag: ["ombeline:faim_partagee", "enfant:faim"], join: "ombeline", conf: { ombeline: 30 }, ep: ["perso", 2500] }, to: "IV_ombeline_partagee" },
      { label: "Lui rendre. Tu ne peux pas", fx: { conf: { ombeline: -5 } }, to: "IV_ombeline" },
    ] }),

  IV_ombeline_partagee: P({ title: "Le serment", place: "moutier",
    text: [
      "Pour que la faim ne prenne pas tout, il faut lui donner quelque chose à ronger. Tu le sais sans qu'on te le dise. Tu lui donnes le serment fait à Joris, à dix ans : « si un jour je ne suis plus là, tu veilleras sur eux ». Elle le mange. Elle se calme.",
      "Tu essaies de te rappeler ce que tu as promis à ton père, un jour, il y a longtemps. Tu sais qu'il y a eu une promesse. Laquelle, tu l'as oublié. Tu as un peu moins envie de rentrer.",
      "Ombeline a les yeux pleins de larmes. « Ça ne se fait pas, dit-elle. On ne prend pas la moitié du fardeau des autres. » Elle va chercher son manteau quand même.",
    ],
    choices: [{ back: "IV_moutier" }] }),

  IV_moutier: P({ title: "Le cloître des Veilleurs", place: "moutier", hub: true,
    text: [
      "Le cloître bourdonne comme une ruche. Des enfants courent entre les paillasses. Un frère lit à voix haute, sous une arcade, devant vingt personnes qui l'écoutent sans comprendre pourquoi elles l'écoutent.",
      { if: { has: "iv:nord_fini" }, text: "Vous êtes prêts à partir." },
    ],
    choices: [
      { label: "Écouter le frère qui lit", hide: { seen: "IV_chronique" }, to: "IV_chronique" },
      { label: "Parler au vieil homme du fauteuil", hide: { any: [{ seen: "IV_arnoul" }, { not: { has: "nord:arnoul_pris" } }] }, to: "IV_arnoul" },
      { label: "Retrouver Mère Ombeline", hide: { present: "ombeline" }, to: "IV_ombeline" },
      { label: "Frère Odon, et le livre des arrivées", hide: { seen: "IV_Q_odon" }, to: "IV_Q_odon" },
      { label: "Frère Odon, qui t'attend sous les arcades", hide: { any: [{ seen: "IV_N_entree" }, { not: { seen: "IV_Q_odon" } }] }, to: "IV_N_entree" },
      { label: "Veiller avec Ombeline, dans la chapelle", hide: { any: [{ seen: "IV_V_ombeline" }, { not: { present: "ombeline" } }] }, to: "IV_V_ombeline" },
      { label: "Rejoindre Corbe sur le toit du cloître", hide: { any: [{ seen: "IV_V_corbe" }, { not: { present: "corbe" } }] }, back: "IV_V_corbe" },
      { label: "Givre, couché à trois pas du feu", hide: { any: [{ seen: "IV_V_givre" }, { not: { present: "givre" } }] }, to: "IV_V_givre" },
      { label: "Le jardin des simples, derrière le cloître", hide: { seen: "IV_m_jardin" }, to: "IV_m_jardin" },
      { label: "Un novice qui balaie, une coquille à l'épaule", hide: { seen: "IV_m_novice" }, to: "IV_m_novice" },
      { label: "La cloche neuve, sur ses tréteaux", hide: { seen: "IV_m_cloche" }, to: "IV_m_cloche" },
      { label: "Le réfectoire, à l'heure du repas", hide: { seen: "IV_m_refectoire" }, to: "IV_m_refectoire" },
      { label: "Des enfants qui jouent, les yeux bandés", hide: { seen: "IV_m_jeu" }, to: "IV_m_jeu" },
      { label: "Le portier, et sa lanterne allumée en plein jour", hide: { seen: "IV_m_portier" }, to: "IV_m_portier" },
      { label: "Monter au camp du clan du Corbeau", hide: { seen: "IV_clan" }, travel: "r_iv_clan" },
      { label: "Redescendre vers Sauvelune", hide: { seen: "IV_sv_arrivee" }, travel: "r_iv_sauvelune" },
      { label: "Descendre vers le sud, vers Pallanche et la guerre", to: "IV_depart_sud", big: true },
    ] }),

  IV_chronique: P({ title: "La chronique", place: "moutier",
    text: [
      "Le frère lit le Livre des Veilles. Pas l'ancien : le nouveau, celui de cette année. Les Veilleurs ont tout noté, jour après jour, parce que c'est leur métier.",
      "*Le vingt-deux d'août, la montagne a craqué. Le vingt-trois, la neige blanche sur les Combes. Le premier de septembre, sur Pont-de-Saule. Le dix, sur la vallée de la Sauve tout entière, jusqu'au pied de Pallanche. Les gens montent. Nous les prenons. Nous notons leurs noms à l'arrivée, chaque matin, pour qu'ils les retrouvent.*",
      "*En novembre, un homme est arrivé sans rien, qui savait seulement qu'il cherchait sa fille. Nous avons cherché dans nos listes. Elle était là. Elle dormait à trois paillasses de lui depuis un mois.*",
      "*Le dix-neuf de mars, la neige s'est arrêtée. Personne ne sait pourquoi. Frère Odon dit qu'il a senti, cette nuit-là, quelque chose se fermer, très loin au nord, comme une main.*",
      "Tu penses au bourdon de Bourdonne, à la corde qui t'a brûlé les mains. Là-bas, il n'y avait pas de dates.",
    ],
    choices: [{ fx: { flag: "iv:chronique" }, back: "IV_moutier" }] }),

  IV_arnoul: P({ title: "Le prieur", place: "moutier",
    text: [
      { if: { has: "nord:rendu=arnoul" }, text: "« Le Livre des Veilles dit ce qu'il faut faire quand la porte rend quelqu'un, dit Arnoul. Je l'ai lu cent fois. Il dit : *conduisez-le au caveau de la plume et de la clé, et qu'il lise ce qui est barré.* Je n'ai jamais compris. Maintenant je comprends. » Il te prend le poignet, d'une poigne de vieux soldat. « Le registre d'Anselin. Le premier. Celui qu'aucun greffier ne devait ouvrir. Il est sous la tour. Mordace l'a ouvert. Tu es le seul qui puisse le lire jusqu'au bout. Ne le laisse pas à cet homme. »" },
      { if: { not: { has: "nord:rendu=arnoul" } }, text: "Le vieil homme te sourit. Il ne sait pas qui tu es. Il te dit qu'il a fait un rêve, cette nuit : un caveau, sous une tour, et un livre noir qu'on lui demandait de garder. Il ne sait plus pour qui. « C'est drôle, dit-il, les rêves. On dirait des ordres. »" },
    ],
    choices: [{ fx: { flag: "iv:arnoul", clue: "n_caveau" }, back: "IV_moutier" }] }),

  IV_depart_sud: P({ title: "Le départ", place: "moutier",
    text: [
      "Le frère portier vous ouvre la porte du sud. La route descend vers les vallées, vers Pallanche, vers la Lisse. Vous ne remonterez pas.",
      { if: { all: [{ not: { seen: "IV_clan" } }, { not: { present: "corbe" } }] }, text: "Tu penses au clan, là-haut. Tu n'es pas monté. Tu te dis que Corbe, si elle est vivante, saura trouver la guerre toute seule." },
      { if: { not: { seen: "IV_sv_arrivee" } }, text: "Tu ne regardes pas vers l'ouest, vers Sauvelune. Pas encore. Après la guerre, te dis-tu. Tu sais ce que valent ces phrases-là." },
    ],
    choices: [
      { label: "Rester encore un peu", to: "IV_moutier" },
      { label: "Partir", fx: { flag: "iv:nord_fini", ep: ["histoire", 3000] }, travel: "r_iv_sud", big: true },
    ] }),
};
