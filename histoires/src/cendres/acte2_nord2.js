// Act II · the northern company, chapter 2, "La grotte des Corbeaux": up to the black lake with Askel, the whole song of
// the dead carved in the cave (it is a list of names), the map of the five signs, the aïeule in the ice, and the giant
// that passes in the night toward the Veilleurs. Corbe leads ("tu") and cannot read: the others read for her.
var N = { act: "II", noLead: true };
function P(o) { return Object.assign({}, N, o); }
var READER = { any: [{ present: "hylas" }, { present: "pie" }, { present: "ysolde" }, { present: "enfant" }, { present: "linette" }] };
module.exports = {
  II_N2_aube: P({ title: "Askel", place: "corbeau",
    text: [
      "À l'aube, ta mère attend devant ta tente, chaussée pour la marche, un sac de peau sur le dos. Elle ne dit pas bonjour.",
      { if: { has: "nord:grotte_connue" }, text: "« Tu m'as demandé le chemin, dit-elle. Je ne sais pas le dire. Je sais le faire. »" },
      { if: { not: { has: "nord:grotte_connue" } }, text: "« Tu ne me l'as pas demandé, dit-elle. Je te montre quand même. On ne sait jamais, avec toi, ce que tu vas finir par vouloir. »" },
      "Derrière elle, le camp se réveille sans bruit. Personne ne sort pour vous voir partir.",
      { if: { has: "nord:canne_brulee" }, text: "Hylas a coupé un bâton de frêne, pendant la nuit. Il le tâte, le soupèse, et grimace. « Ça ira. »" },
    ],
    choices: [{ label: "Suivre Askel vers le lac noir", travel: "r_ii_grotte" }] }),

  II_N2_eboulis: P({ title: "L'éboulis", place: null,
    text: [
      "Le sentier traverse un éboulis, un long fleuve de pierres grises figé dans la pente. Au milieu, quelque chose bouge.",
      "Un Glaneur. Un petit, à peine plus grand qu'un homme. Un bloc lui a écrasé les jambes, ou ce qui lui sert de jambes, et il est cloué là, la neige de son corps fondue en flaque autour de la pierre. Il murmure. Tu tends l'oreille. Ce sont des noms. *Odile. Marceau. Petit Jean. Odile.* Toujours les mêmes, dans le même ordre, comme on compte des moutons pour dormir.",
      "Askel s'est arrêtée. Elle dit, sans le regarder : « Ça, c'était quelqu'un. »",
    ],
    choices: [
      { label: "Soulever la pierre", test: { dom: "combat", label: "Force", help: [{ if: { present: "rodric" }, v: 20 }, { if: { present: "ysolde" }, v: 10 }] },
        win: { fx: { flag: "nord:glaneur_libre", ep: ["perso", 700] }, to: "II_N2_eboulis_libre" },
        lose: { to: "II_N2_eboulis_combat" } },
      { label: "L'achever avant qu'il ne se libère", fx: { flag: "nord:glaneur_tue" }, to: "II_N2_eboulis_combat" },
      { label: "Passer au large, sans un bruit", to: "@route" },
    ] }),

  II_N2_eboulis_libre: P({ title: "Odile, Marceau, Petit Jean", place: null,
    text: [
      "La pierre roule. La chose se redresse lentement sur des jambes qui se refont à mesure, poudre sur poudre. Elle te regarde, sans visage. Puis elle se détourne et s'en va vers le haut, vers le col, en murmurant ses trois noms.",
      "Pendant une heure, tu la vois au-dessus de vous, sur la crête, qui marche à votre allure. Puis plus.",
    ],
    choices: [{ label: "Reprendre la montée", to: "@route" }] }),

  II_N2_eboulis_combat: P({ title: "Dans les pierres",
    combat: { title: "Le Glaneur de l'éboulis", enemies: ["glaneur_petit"], terrain: "nature", range: "contact",
      flee: { dom: "nature", label: "Couper par les pierres, plus haut", to: "II_N2_eboulis_apres" },
      win: { fx: { ep: ["seance", 600] }, to: "II_N2_eboulis_apres" },
      lose: { fx: { pv: -3 }, to: "II_N2_eboulis_apres" } },
    text: ["La chose se dégage d'un coup, en laissant ses jambes sous la pierre, et se jette sur vous à la force des bras. Elle n'a plus peur de rien. Elle n'a plus rien."],
    choices: [] }),

  II_N2_eboulis_apres: P({ title: "La poudre", place: null,
    text: [
      { outcome: "win", text: "Il ne reste qu'un tas de poudre blanche entre les pierres, et elle ne fond pas. Le vent en emporte un peu. Un dernier murmure s'en va avec. *Odile.*", else: "Tu passes. Il reste en bas, entre les pierres, et ne monte pas plus haut que l'éboulis. Le vent t'apporte encore un murmure, puis plus rien. *Odile.*" },
      { outcome: "win", text: "Askel s'agenouille, prend une pincée de poudre et la met dans sa bouche, comme on fait pour les morts du clan. Elle ne t'explique pas pourquoi. Tu le sais." },
    ],
    choices: [{ label: "Reprendre la montée", to: "@route" }] }),

  II_N2_lac: P({ title: "Le lac noir", place: null,
    text: [
      "Le lac est au fond d'un cirque de falaises, rond comme un œil. Tout autour, la neige. Lui ne gèle jamais. Il est noir, d'un noir sans reflet, et il n'y a pas de vent dessus.",
      "Au-dessus, dans la falaise, à mi-hauteur, une fente sombre où tournent des corbeaux. La grotte.",
      "Quand tu te penches, l'eau te renvoie une image. Ce n'est pas ton visage.",
      { if: { souv: "corbe:frere" }, text: "C'est Bran. Bran à quinze ans, qui rit, avec une dent en moins, et qui te tend un oisillon tombé du nid." },
      { if: { not: { souv: "corbe:frere" } }, text: "C'est un garçon roux, à quinze ans, qui rit, avec une dent en moins. Il te tend un oisillon tombé du nid. Tu ne sais pas qui c'est. Ça te serre la gorge quand même." },
      { with: "enfant", text: "L'enfant de Sauvelune s'est penché aussi. Il regarde longtemps. Il dit : « Une ville. Avec des tours blanches. Je n'y suis jamais allé. » Il n'a pas l'air sûr." },
      { with: "ysolde", text: "Ysolde regarde l'eau, se redresse d'un coup, et va s'asseoir dos au lac. Elle ne dit pas ce qu'elle a vu." },
      { with: "pie", text: "Pie ne se penche pas. « Je sais ce qu'il y a dedans, dit-il. Je n'ai pas besoin de le voir. »" },
      { with: "hylas", text: "Hylas, qui ne voit pas, s'est figé au bord de l'eau. « Quelqu'un m'appelle, dit-il. Par mon nom d'avant. Celui de ma mère. »" },
    ],
    choices: [
      { label: "Boire l'eau du lac, comme le font, dit-on, les chamanes", fx: { flag: "nord:lac_bu" }, to: "II_N2_lac_eau" },
      { label: "Monter à la grotte", to: "@route" },
    ] }),

  II_N2_lac_eau: P({ title: "L'eau noire", place: null,
    text: [
      "Elle est froide à faire mal aux dents, et elle n'a aucun goût. Puis, pendant un battement de cœur, tu entends. Pas avec tes oreilles. Des milliers de voix, très loin, très bas, qui disent toutes la même chose dans une langue que tu ne connais pas, et que tu comprends quand même.",
      "*Nous sommes là.*",
      "Puis plus rien. Askel te regarde avec une drôle d'expression. « Ta grand-mère l'a bue, dit-elle. Après, elle n'a plus jamais dormi la nuit. »",
    ],
    choices: [{ label: "Monter à la grotte", to: "@route" }] }),

  II_N2_grotte: P({ title: "La grotte des Corbeaux", place: "lacnoir", hub: true,
    text: [
      { first: true, text: "L'entrée est basse. Il faut se courber. Puis la grotte s'ouvre, haute comme un temple, et la lumière tombe d'une fente dans la voûte. Les corbeaux nichent dans les corniches, par centaines. Ils ne crient pas. Ils regardent." },
      "Les parois sont couvertes de signes. Pas des dessins : des lignes de traits, serrés, réguliers, gravés au silex, du sol jusqu'aussi haut qu'un bras peut monter. Des milliers.",
      { first: true, text: "Tu ne sais pas lire. Personne, au clan, ne sait lire. Tu as toujours trouvé que c'était une force." },
    ],
    choices: [
      { label: "Faire lire la grande paroi, à gauche", hide: { seen: "II_N2_mur_chant" }, if: READER, why: "Personne ici ne sait lire.", to: "II_N2_mur_chant" },
      { label: "La paroi du fond, où les signes forment une image", hide: { seen: "II_N2_mur_carte" }, to: "II_N2_mur_carte" },
      { label: "Le boyau qui descend, d'où monte un froid de glacière", hide: { seen: "II_N2_fond" }, to: "II_N2_fond" },
      { label: "Les corbeaux", hide: { seen: "II_N2_corbeaux" }, to: "II_N2_corbeaux" },
      { label: "Le lac noir, qui ne gèle pas", hide: { seen: "II_Q_peche" }, to: "II_Q_peche" },
      { label: "La niche polie, près de l'entrée", hide: { seen: "II_g_offrandes" }, to: "II_g_offrandes" },
      { label: "La fente, derrière la grande paroi", hide: { seen: "II_Q_echo" }, to: "II_Q_echo" },
      { label: "Le corbeau blanc, à l'écart", hide: { seen: "II_g_corbeau_blanc" }, to: "II_g_corbeau_blanc" },
      { label: "Faire du feu et passer la nuit dans la grotte", if: { seen: "II_N2_fond" }, why: "Pas avant d'être descendue au fond.", to: "II_N2_nuit", big: true },
    ] }),

  II_N2_mur_chant: P({ title: "La grande paroi", place: "lacnoir",
    text: [
      { with: "hylas", text: "Hylas pose les doigts sur la pierre et les fait courir sur les traits comme sur une page. Il lit vite, avec ses mains. « C'est une écriture, dit-il. Pas la nôtre. Mais je l'ai déjà touchée. Dans le caveau de la tour. »" },
      { without: "hylas", text: "Ce n'est pas une écriture d'ici. Mais les signes se répètent, et sous certains, d'une autre main, plus récente, quelqu'un a gravé l'équivalent en lettres d'Esquarre, maladroitement, comme on apprend." },
      "C'est le chant des morts. Le tien. Celui que l'aïeule t'a appris, dont tu ne connais que les trois derniers vers. Il est là en entier.",
      "Ce n'est pas une prière. C'est une liste.",
    ],
    choices: [
      { label: "Te faire lire la liste", test: { dom: "savoir", label: "Lecture", help: [{ if: { present: "hylas" }, v: 25 }, { if: { present: "linette" }, v: 15 }, { if: { present: "pie" }, v: 5 }] },
        win: { fx: { flag: "nord:chant_lu", clue: "n_chant_noms", ep: ["perso", 1200] }, to: "II_N2_mur_chant_lu" },
        lose: { fx: { flag: "nord:chant_moitie" }, to: "II_N2_mur_chant_moitie" } },
    ] }),

  II_N2_mur_chant_lu: P({ title: "La liste", place: "lacnoir",
    text: [
      "Des noms. Des milliers de noms, de personnes, de familles, de villages. Après chaque nom de village, un signe qui revient toujours, le même. Après les noms des gens, rien.",
      "Les trois vers de l'aïeule sont tout en bas. Ils ne sont pas la fin de la liste. Ce sont des instructions. *Qui chante tous les noms ouvre la porte. Qui en chante un seul l'appelle. Qui n'en chante aucun la garde fermée.*",
      "Au-dessus des trois vers, la dernière ligne de la liste, plus grande que les autres, gravée plus profond. Un seul nom. Ardaël.",
      { with: "hylas", text: "Hylas retire sa main de la pierre comme s'il s'était brûlé. Il ne dit rien pendant longtemps." },
    ],
    choices: [{ label: "Revenir au centre de la grotte", to: "II_N2_grotte" }] }),

  II_N2_mur_chant_moitie: P({ title: "Des noms", place: "lacnoir",
    text: [
      "Ce sont des noms. C'est tout ce qu'on peut te dire avec certitude. Des noms, et après certains, toujours le même signe, comme une marque de propriétaire.",
      "Les trois vers de l'aïeule sont en bas, à part. On n'arrive pas à les déchiffrer. Tu les connais par cœur, et tu ne sais pas les lire.",
    ],
    choices: [{ label: "Revenir au centre de la grotte", to: "II_N2_grotte" }] }),

  II_N2_mur_carte: P({ title: "La paroi du fond", place: "lacnoir",
    fx: { flag: "nord:carte_vue" },
    text: [
      "Sur la paroi du fond, les traits dessinent une vallée entre deux montagnes, et dans la vallée, une ville aux tours pointues. Autour de la ville, cinq signes, cinq petites figures, gravées avec soin : une tour, une gerbe, une barque, un cerf, et une plume croisée d'une clé.",
      "Au-dessus de la ville, une seule grande flamme, qui la couvre en entier.",
      { with: "hylas", text: "Hylas fait courir ses doigts sur les cinq figures. « Les cinq maisons, dit-il. Les fondateurs. Ce sont leurs armes. » Il touche la plume et la clé. Il reste la main dessus." },
      { if: { all: [{ not: { present: "hylas" } }, { present: "pie" }] }, text: "Pie siffle entre ses dents. « La plume et la clé. Je l'ai imitée cent fois, celle-là. C'est le sceau de la Chancellerie. »" },
      { if: { all: [{ not: { present: "hylas" } }, { not: { present: "pie" } }, { present: "ysolde" }] }, text: "Ysolde touche le cerf. « C'est le blason de Brenne, dit-elle. Ma maison. Il y a trois cents ans. »" },
    ],
    choices: [{ label: "Revenir au centre de la grotte", fx: { clue: "n_cinq_signes" }, to: "II_N2_grotte" }] }),

  II_N2_corbeaux: P({ title: "Les corbeaux", place: "lacnoir",
    text: [
      "Tu lèves le bras, comme on fait au camp. Un corbeau se détache d'une corniche, descend en trois battements et se pose sur ton poing. Il est énorme, vieux, la moitié des plumes grises. Il te regarde de côté.",
      { if: { souv: "corbe:corbeau" }, text: "Puis il tend le bec vers ta main gauche, là où tu portais une bague, enfant, celle que ton premier corbeau t'avait volée. Il cherche. Il ne trouve pas. Il te pince le doigt, pour la forme. Tu ris, malgré toi. C'est lui. Ça ne peut pas être lui. Ça fait vingt ans." },
      { if: { not: { souv: "corbe:corbeau" } }, text: "Il tend le bec vers ta main gauche, cherche quelque chose, ne le trouve pas, et te pince le doigt. Il a l'air déçu. Tu ne sais pas ce qu'il attendait." },
      "Il s'envole vers le boyau du fond, se pose à l'entrée, et attend.",
    ],
    choices: [{ label: "Revenir au centre de la grotte", fx: { flag: "nord:corbeau_guide" }, to: "II_N2_grotte" }] }),

  II_N2_fond: P({ title: "Le fond", place: "lacnoir",
    text: [
      "Le boyau descend en pente raide, de plus en plus froid. Les parois se couvrent de givre, puis de glace. Au bout, une salle ronde, et au fond de la salle, un mur de glace bleue, épais, transparent comme de l'eau.",
      { if: { has: "nord:corbeau_guide" }, text: "Le vieux corbeau est posé sur une pierre devant le mur. Il donne un coup de bec dans la glace, puis te regarde." },
      "Dans la glace, assise en tailleur, il y a une vieille femme. Les yeux ouverts. Les mains sur les genoux, paumes en l'air. Dans ses mains, un tambour plat, en peau, couvert de signes.",
      { if: { souv: "corbe:aieule" }, text: "Tu la connais. C'est elle. Les rides, la bouche sans dents, le collier de vertèbres de truite. L'aïeule. On t'a dit, quand tu avais neuf ans, qu'elle était partie mourir dans la montagne, comme font les vieux. Elle est venue ici." },
      { if: { not: { souv: "corbe:aieule" } }, text: "Une vieille femme du clan, sans dents, avec un collier de vertèbres de truite. Askel s'est mise à genoux. Tu ne sais pas qui c'est. Tu sais seulement que tu devrais le savoir, et ça fait comme une marche qui manque dans un escalier." },
      "Askel dit : « Elle a fermé la porte de l'intérieur. Avec son chant. Tant qu'elle chante, elle tient. » Elle se tait. « Elle ne chante plus. Écoute. »",
      "Tu écoutes. La glace craque, tout doucement, comme un lac au printemps.",
    ],
    choices: [
      { label: "Chanter avec elle, pour elle, le chant des morts, tout ce que tu en sais", test: { dom: "magie", label: "Chant", help: [{ if: { souv: "corbe:aieule" }, v: 15 }, { if: { has: "nord:chant_lu" }, v: 15 }, { if: { item: "tambour" }, v: 5 }, { if: { has: "nord:lac_bu" }, v: 10 }] },
        win: { fx: { flag: "nord:aieule_chant", ep: ["perso", 1500] }, to: "II_N2_fond_chant" },
        lose: { fx: { flag: "nord:aieule_glace" }, to: "II_N2_fond_rate" } },
      { label: "Donner un souvenir à la glace, pour qu'elle tienne encore un peu", tag: "Souvenir donné", stain: true, if: { souv: "corbe:col" }, why: "Tu n'as plus rien de ce col à donner.",
        fx: { souv: "corbe:col", flag: ["nord:aieule_chant", "corbe:col_donne"], ep: ["perso", 1500] }, to: "II_N2_fond_don" },
      { label: "Remonter. Ce n'est pas ton chant à tenir", fx: { flag: "nord:aieule_glace" }, to: "II_N2_fond_rate" },
    ] }),

  II_N2_fond_chant: P({ title: "Le chant", place: "lacnoir",
    text: [
      "Tu chantes. Ta voix est trop haute pour la salle, trop mince. Puis Askel chante avec toi, d'une voix que tu ne lui connaissais pas, grave, et la salle se met à résonner comme l'intérieur d'un tambour.",
      "La glace cesse de craquer. Dans la glace, les mains de la vieille femme se referment, tout doucement, sur le tambour.",
      "Quand tu te tais, il fait plus chaud. Askel pleure sans bruit. « Elle tiendra, dit-elle. Pas toujours. Assez. »",
    ],
    choices: [{ label: "Remonter dans la grande salle", fx: { conf: { corbe: 5 } }, to: "II_N2_grotte" }] }),

  II_N2_fond_don: P({ title: "Le col au soleil", place: "lacnoir",
    text: [
      "Tu poses le front contre la glace. Tu penses au col de l'Ourse, un jour d'été, quand tu avais douze ans : l'herbe rase, les edelweiss, le ciel si bleu qu'il en devenait noir, et la grande pierre plate où la Mère Blanche, dit-on, s'est assise un jour pour regarder le monde.",
      "Tu le donnes.",
      "La glace cesse de craquer. Tu te redresses. Askel te regarde. Tu lui demandes ce qu'il y a, au col de l'Ourse. Elle ne répond pas. Tu ne comprends pas pourquoi elle pleure.",
    ],
    choices: [{ label: "Remonter dans la grande salle", to: "II_N2_grotte" }] }),

  II_N2_fond_rate: P({ title: "Le craquement", place: "lacnoir",
    text: [
      "Tu remontes. Derrière toi, au fond du boyau, la glace craque, encore, régulièrement, comme un pas lent.",
      "Askel reste en bas. Elle chante, seule, d'une voix grave que tu ne lui connaissais pas. Elle remonte une heure plus tard, la voix cassée, les lèvres bleues. « Une nuit, dit-elle. Peut-être deux. »",
    ],
    choices: [{ label: "Revenir dans la grande salle", to: "II_N2_grotte" }] }),

  II_N2_nuit: P({ title: "La nuit dans la grotte", place: "lacnoir",
    text: [
      "Vous faites un feu de bois flotté sous la fente de la voûte, et la fumée monte droit. Les corbeaux se sont tus. Askel s'est endormie tout de suite, assise contre la paroi, la bouche ouverte, comme une très vieille femme.",
      { if: { has: "nord:chant_lu" }, text: "Sur la grande paroi, la lumière du feu fait bouger les traits. On dirait que les noms respirent." },
      { if: { has: "nord:aieule_glace" }, text: "De temps en temps, du fond du boyau, un craquement." },
    ],
    choices: [
      { label: "Parler avec l'enfant de Sauvelune", with: "enfant", once: true, to: "II_N2_nuit_enfant" },
      { label: "Parler avec Ysolde", with: "ysolde", once: true, to: "II_N2_nuit_ysolde" },
      { label: "Parler avec Pie", with: "pie", once: true, to: "II_N2_nuit_pie" },
      { label: "Parler avec Hylas", with: "hylas", once: true, to: "II_N2_nuit_hylas" },
      { label: "Dormir", fx: { quest: "II_N_chants" }, to: "II_N2_ombre", big: true },
    ] }),

  II_N2_nuit_enfant: P({ title: "Les tours blanches", place: "lacnoir",
    text: [
      "Il est assis devant la carte gravée, au fond, et regarde la ville aux tours pointues. Il ne la touche pas.",
      "« C'est celle que j'ai vue dans le lac, dit-il. Je crois. » Il hausse les épaules. « Ou j'ai envie que ce soit elle. Quand on n'a pas d'endroit d'où on vient, on en prend un. »",
      { if: { has: "passe:trouve" }, text: "Il dit ça sans amertume. On le lui a répété toute son enfance, à Sauvelune : l'enfant trouvé du moulin." },
    ],
    choices: [{ label: "Revenir au feu", fx: { conf: { enfant: 5 } }, to: "II_N2_nuit" }] }),

  II_N2_nuit_ysolde: P({ title: "Le cerf", place: "lacnoir",
    text: [
      "Ysolde n'arrive pas à dormir. Elle te dit, à voix basse, sans te regarder : « Dans le lac, j'ai vu un pont. Des gens dessus. Beaucoup. Et moi, à cheval, au bout. » Elle frotte ses mains l'une contre l'autre au-dessus du feu. « Je ne me souviens pas de ce pont. Et je me suis reconnue tout de suite. »",
      { if: { has: "nord:carte_vue" }, text: "Puis : « Le cerf, sur la paroi. Ma maison était là, à la fin de cette ville. Dans le feu. Je me demande de quoi d'autre j'ai hérité, sans le savoir. »" },
    ],
    choices: [{ label: "Revenir au feu", fx: { conf: { ysolde: 5 } }, to: "II_N2_nuit" }] }),

  II_N2_nuit_pie: P({ title: "Lire", place: "lacnoir",
    text: [
      "Pie te propose de t'apprendre tes lettres. Comme ça, pour passer le temps. Tu refuses. Il insiste. Tu refuses encore.",
      "Il trace un C dans la cendre, avec un bâton. « Corbe, dit-il. Ça commence comme ça. Après, tu feras ce que tu voudras. » Il te tend le bâton.",
    ],
    choices: [
      { label: "Prendre le bâton", fx: { flag: "corbe:lettres", conf: { pie: 10 } }, to: "II_N2_nuit_pie_lettres" },
      { label: "Effacer le C avec ton pied", fx: { conf: { pie: -5 } }, to: "II_N2_nuit" },
    ] }),

  II_N2_nuit_pie_lettres: P({ title: "C, O, R", place: "lacnoir",
    text: ["Vous y passez une heure. Tes C sont trop grands, tes R ressemblent à des corbeaux. Pie est un très mauvais maître, impatient, moqueur, et tu apprends plus vite que tu n'aurais cru. À la fin, ton nom est écrit dans la cendre, de ta main. Tu le regardes longtemps. Puis tu l'effaces, très doucement, du plat de la main, comme on ferme les yeux d'un mort."],
    choices: [{ label: "Revenir au feu", to: "II_N2_nuit" }] }),

  II_N2_nuit_hylas: P({ title: "Le nom de sa mère", place: "lacnoir",
    text: [
      { after: "nord:canne_brulee", text: "Hylas tient son bâton de frêne à deux mains, debout devant le feu. Il te demande si tu as entendu, au lac, quelqu'un l'appeler. Tu dis que non." },
      { before: "nord:canne_brulee", text: "Hylas tient sa canne à deux mains, debout devant le feu. Il te demande si tu as entendu, au lac, quelqu'un l'appeler. Tu dis que non." },
      "« Ma mère m'appelait Hyl, dit-il. Juste Hyl. Elle vendait du sel. Personne ne m'a appelé comme ça depuis soixante ans. » Il sourit. « Je croyais l'avoir oublié. Elle aussi, je croyais. »",
      { if: { not: { souv: "hylas:mere" } }, text: "Il fronce les sourcils. « Il y avait une femme, dans cette voix. Je ne sais plus laquelle. »" },
    ],
    choices: [{ label: "Revenir au feu", fx: { conf: { hylas: 5 } }, to: "II_N2_nuit" }] }),

  II_N2_ombre: P({ title: "L'ombre sur le lac", place: "lacnoir",
    text: [
      "Tu te réveilles parce que les corbeaux se sont tous envolés en même temps.",
      "Par l'entrée de la grotte, on voit le lac, sous la lune. Sur l'autre rive, quelque chose marche. Ça a la forme d'un homme. Ça a la taille d'un clocher. Ça avance lentement, à grands pas qui s'enfoncent, et la neige se soulève derrière, en poussière, comme derrière un traîneau.",
      "La chose s'arrête. Elle tourne la tête vers la falaise, vers la fente, vers vous. Elle renifle, longuement.",
      "Puis elle repart, vers l'est. Vers la combe où, depuis trois cents ans, les Veilleurs gardent le col dans leur moutier de pierre.",
      "Askel, à côté de toi, chuchote : « Elle va chez les moines. »",
    ],
    choices: [{ label: "Attendre le jour", fx: { flag: ["ch2:nord:2", "nord:geant_vu"], resume: "II_N3_depart", catchup: 6, catchupAll: true, catchupWhy: "la grotte des Corbeaux" }, to: "C2_carrefour", big: true }] }),
};
