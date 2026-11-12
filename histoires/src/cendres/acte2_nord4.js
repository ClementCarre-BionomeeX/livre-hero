// Act II · the northern company, chapter 4, "Le cirque des Moissons": the hunt of the giant Glaneur. Gaspard (if Corbe
// sang to him, or the child fed him) or the Glaneur of the scree (if freed) shows the way; the procession of small
// Glaneurs pouring names into the giant; and what Corbe does with it: kill it (the names scatter), sing it one village
// back (which one: the cornelian choice), or let Ombeline take its pain. Corbe leads ("tu").
var N = { act: "II", noLead: true };
function P(o) { return Object.assign({}, N, o); }
var GASPARD = { any: [{ has: "gaspard:chant" }, { has: "gaspard:pain" }] };
module.exports = {
  II_N4_depart: P({ title: "Vers les cirques", place: "moutier",
    text: [
      "Les traces longent le col par l'ouest, puis montent, vers les cirques du nord, là où les clans ne chassent pas. On dit que les bêtes y vont mourir. On dit beaucoup de choses.",
      { if: { has: "tiennot:suit" }, text: "Tiennot marche derrière vous, avec un sac trop lourd et la grande clé du moutier pendue au cou. Il ne la lâche pas." },
      { if: { has: "tiennot:hospice" }, text: "Tiennot est parti vers l'Hospice à l'aube, avec une lettre d'Ombeline. Il s'est retourné souvent." },
      { with: "ombeline", text: "Ombeline marche en murmurant ses noms. Il y en a de nouveaux, depuis le moutier. Tu les reconnais : Arnoul, au milieu." },
    ],
    choices: [{ label: "Monter vers les cirques", travel: "r_ii_cirque" }] }),

  II_N4_procession: P({ title: "La procession", place: null,
    text: [
      "Vous les voyez avant qu'ils vous voient : une file de Glaneurs, des petits, une vingtaine, qui montent la pente l'un derrière l'autre, à pas réguliers. Chacun porte quelque chose dans ses mains jointes, contre la poitrine, comme on porte de l'eau. Une lueur pâle, qui bat.",
      "Ils passent à cinquante pas de vous. Ils ne tournent pas la tête. Le dernier trébuche, et ce qu'il porte lui échappe, roule dans la neige, et s'éteint, lentement, comme une braise.",
      "Un nom. Personne ne saura lequel.",
    ],
    choices: [
      { label: "Ramasser ce qui reste dans la neige", fx: { flag: "nord:braise" }, to: "II_N4_braise" },
      { label: "Les laisser passer, et suivre", to: "@route" },
    ] }),

  II_N4_braise: P({ title: "La braise", place: null,
    text: [
      "Il n'y a plus de lueur quand tu y arrives. Juste un creux dans la neige, tiède, et au fond, un caillou blanc, très lisse, qui est resté froid.",
      { if: { all: [{ has: "passe:caillou" }, { present: "enfant" }] }, text: "L'enfant de Sauvelune le regarde dans ta main. Il fouille dans sa poche et en sort un autre, tout pareil, qu'il a depuis toujours. Il ne dit rien." },
      "Tu le mets dans ta poche. Tu ne sais pas pourquoi.",
    ],
    choices: [{ label: "Suivre la procession", fx: { item: "caillou_blanc" }, to: "@route" }] }),

  II_N4_guide: P({ title: "Quelqu'un qui attend", place: null,
    text: [
      { if: { has: "gaspard:chant" }, text: "Sur un rocher, au bord du sentier, une chose de neige est assise et se balance, les mains tendues vers rien, comme vers un four. Quand tu t'approches, elle cesse de se balancer et tourne vers toi ce qui lui tient lieu de visage. Puis elle chante, sans les paroles, les trois vers. « Gaspard », dit-elle. « Je suis Gaspard. Tu m'as rendu ça. »" },
      { if: { all: [{ has: "gaspard:pain" }, { not: { has: "gaspard:chant" } }] }, text: "Sur un rocher, au bord du sentier, une chose de neige est assise, un quignon de pain gelé serré contre elle. Elle relève la tête." },
      { if: { all: [{ has: "gaspard:pain" }, { not: { has: "gaspard:chant" } }, { present: "enfant" }] }, text: "Elle regarde l'enfant de Sauvelune. « Tu sens le pain, dit-elle. Tu sens Sauvelune. Je suis Gaspard. »" },
      { if: { all: [{ has: "gaspard:pain" }, { not: { has: "gaspard:chant" } }, { not: { present: "enfant" } }] }, text: "« Je suis Gaspard, dit-elle. Un enfant m'a donné du pain. Il n'est pas avec vous. » Elle a l'air déçue." },
      { if: { all: [{ not: GASPARD }, { has: "nord:glaneur_libre" }] }, text: "Sur la crête, au-dessus, une silhouette blanche qui marche à votre allure. La chose de l'éboulis. Quand vous vous arrêtez, elle s'arrête. Quand tu lèves la main, elle descend, lentement, et murmure ses trois noms. *Odile. Marceau. Petit Jean.* Puis elle tend le bras vers le nord, vers un col étroit que tu n'aurais pas vu." },
      { if: { all: [{ not: GASPARD }, { not: { has: "nord:glaneur_libre" } }] }, text: "Les traces de la procession se perdent sur un plateau de roche nue, balayé par le vent. Il n'y a plus rien à suivre." },
    ],
    choices: [
      { label: "« Viens avec nous, Gaspard. »", hide: { not: GASPARD }, fx: { join: "gaspard", flag: "nord:gaspard", ep: ["perso", 1000] }, to: "II_N4_gaspard" },
      { label: "Suivre la chose de l'éboulis", hide: { any: [GASPARD, { not: { has: "nord:glaneur_libre" } }] }, fx: { flag: "nord:odile_guide" }, to: "@route" },
      { label: "Chercher le chemin à l'instinct, le nez au vent", hide: { any: [GASPARD, { has: "nord:glaneur_libre" }] }, test: { dom: "nature", label: "Piste", help: [{ if: { item: "caillou_blanc" }, v: 15 }] },
        win: { to: "@route" }, lose: { fx: { time: 6, food: -1 }, to: "II_N4_perdus" } },
    ] }),

  II_N4_gaspard: P({ title: "Gaspard", place: null,
    text: [
      "Il se lève. Il est plus grand que toi d'une tête, maigre, et sa neige a une couleur de pâte crue. Il marche devant, sans hésiter. Il connaît le chemin.",
      "« Le grand, dit-il en marchant. Je l'ai porté, avant. Mes noms. Ceux que je glanais pour l'homme en noir, quand le sceau est tombé, je ne savais pas où les mettre. Je les ai portés au grand. Tout le monde les porte au grand. Il a faim. Il a tellement faim. »",
      { with: "ombeline", text: "Ombeline marche à côté de lui. Elle lui a pris la main. Il n'a pas l'air de savoir quoi en faire, mais il ne la retire pas." },
    ],
    choices: [{ label: "Suivre Gaspard", to: "@route" }] }),

  II_N4_perdus: P({ title: "Le plateau", place: null,
    text: ["Vous tournez une demi-journée sur le plateau, dans le vent. Le soir, à la lumière rasante, tu vois enfin, sur la neige d'un col étroit, une trace fraîche. Une seule, grande comme une barque. Vous y arrivez à la nuit, épuisés."],
    choices: [{ label: "Passer le col", to: "@route" }] }),

  II_N4_cirque: P({ title: "Le cirque des Moissons", place: "cirque", hub: true,
    text: [
      { first: true, text: "Le col étroit débouche au bord d'un cirque immense, un bol de neige entre des falaises noires, si grand qu'une ville y tiendrait. Au fond, au milieu, une montagne blanche, assise. Elle respire." },
      "Le géant. Assis, les genoux remontés, la tête penchée, comme quelqu'un qui écoute. De toutes les pentes du cirque, des files de petits Glaneurs descendent vers lui, et versent dans sa bouche ce qu'ils portent dans leurs mains. Il avale. Le murmure monte du fond du cirque comme d'une église pleine.",
      "Il ne vous a pas vus. Ou il ne s'en soucie pas.",
    ],
    choices: [
      { label: "Écouter le murmure, avec Ombeline", hide: { any: [{ seen: "II_N4_ecoute" }, { not: { present: "ombeline" } }] }, to: "II_N4_ecoute" },
      { label: "L'enfant de Sauvelune, qui descend vers le fond sans vous attendre", hide: { any: [{ seen: "II_N4_sauvelune" }, { not: { present: "enfant" } }] }, to: "II_N4_sauvelune" },
      { label: "Laisser Pie descendre lui voler quelque chose", hide: { any: [{ seen: "II_N4_pie" }, { not: { present: "pie" } }] }, to: "II_N4_pie" },
      { label: "Demander à Hylas ce qu'on peut faire d'un nom", hide: { any: [{ seen: "II_N4_hylas" }, { not: { present: "hylas" } }] }, to: "II_N4_hylas" },
      { label: "Faire le tour du cirque avec Ysolde, pour voir où frapper", hide: { any: [{ seen: "II_N4_ysolde" }, { not: { present: "ysolde" } }] }, to: "II_N4_ysolde" },
      { label: "Demander à Gaspard ce qu'il sait du grand", hide: { any: [{ seen: "II_N4_gaspard_sait" }, { not: { present: "gaspard" } }] }, to: "II_N4_gaspard_sait" },
      { label: "Une file qui porte une enseigne de bois", hide: { seen: "II_c_file" }, to: "II_c_file" },
      { label: "La falaise noire, au-dessus du cirque", hide: { seen: "II_c_falaise" }, to: "II_c_falaise" },
      { label: "Un petit Glaneur, qui porte une poupée", hide: { seen: "II_c_poupee" }, to: "II_c_poupee" },
      { label: "Des tentes basses, couleur de terre, sur un replat", hide: { seen: "II_c_lievre" }, to: "II_c_lievre" },
      { label: "Descendre vers lui", to: "II_N4_face", big: true },
    ] }),

  II_N4_ecoute: P({ title: "Ce qu'il dit", place: "cirque",
    text: [
      "Ombeline s'assied dans la neige, ferme les yeux, et écoute longtemps. Elle remue les lèvres, parfois, comme pour répéter.",
      "« Des noms, dit-elle enfin. Des milliers. Mais il ne les mange pas. Il les dit. Il les dit tout le temps, tous, pour ne pas en perdre un. » Elle ouvre les yeux. « Il ne fait pas de mal. Il garde. C'est un Veilleur, lui aussi. Il a juste beaucoup trop à garder. »",
      "« Il souffre, ajoute-t-elle. Comme mes mourants. Exactement pareil. »",
    ],
    choices: [{ label: "Remonter au bord du cirque", fx: { flag: "nord:geant_souffre" }, to: "II_N4_cirque" }] }),

  II_N4_sauvelune: P({ title: "Sauvelune", place: "cirque",
    text: [
      "L'enfant est descendu jusqu'à cent pas du géant. Tu le rejoins en courant. Il est debout dans la neige, les bras le long du corps, et il écoute.",
      "Tu entends aussi, maintenant. Dans le murmure, des noms que tu ne connais pas, et lui, si. *Agathe. Joris. Pim. Mathurin. Le Père Anselme. Tess.* Et d'autres, des dizaines. Quatre cents. Tout un village, qui dit son propre nom, tout bas, dans le ventre d'une montagne.",
      "« Ils sont là, dit l'enfant. Ils ne sont pas morts. Ils sont là. » Il se tourne vers toi. Il pleure, et il sourit. « On peut les reprendre ? Dis-moi qu'on peut les reprendre. »",
    ],
    choices: [{ label: "« Je ne sais pas. »", fx: { flag: "nord:sauvelune_entendu", conf: { enfant: 5 } }, to: "II_N4_cirque" }] }),

  II_N4_pie: P({ title: "Le voleur", place: "cirque",
    text: ["Pie regarde le géant, puis les files de petits Glaneurs, puis toi. « Ils lui apportent ce qu'il mange, dit-il. Il ne regarde pas ce qu'ils apportent. Un voleur peut se mettre dans la file. »"],
    choices: [
      { label: "Le laisser se glisser dans la procession, couvert de neige", test: { dom: "discretion", label: "File", help: [{ if: { present: "gaspard" }, v: 20 }] },
        win: { fx: { flag: "nord:pie_vole", item: "nom_vole", ep: ["perso", 1200] }, to: "II_N4_pie_ok" },
        lose: { fx: { flag: "nord:pie_repere" }, to: "II_N4_pie_rate" } },
      { label: "« Non. »", fx: { conf: { pie: -5 } }, to: "II_N4_cirque" },
    ] }),

  II_N4_pie_ok: P({ title: "Ce qu'il rapporte", place: "cirque",
    text: [
      "Il remonte une heure plus tard, blanc des pieds à la tête, les lèvres bleues, les mains jointes contre la poitrine. Il les ouvre devant toi. Une petite lueur pâle, qui bat, comme un cœur d'oiseau.",
      "« Je l'ai pris sur le bord de sa lèvre, dit-il. Juste avant qu'il avale. » Il claque des dents. « Je ne sais pas à qui c'est. On le saura bien. »",
      "La lueur, dans ses mains, murmure deux syllabes, et se tait.",
    ],
    choices: [{ label: "Remonter au bord du cirque", to: "II_N4_cirque" }] }),

  II_N4_pie_rate: P({ title: "La file", place: "cirque",
    text: ["À mi-pente, le Glaneur derrière Pie s'arrête, se penche sur lui, longtemps. Pie ne bouge pas. Puis le Glaneur passe la main sur son visage, doucement, comme pour essuyer de la neige, et reprend sa marche. Pie remonte en courant. Il dit qu'il va bien. Il a oublié comment s'appelait la rue où il est né. Il dit que ce n'est pas grave."],
    choices: [{ label: "Remonter au bord du cirque", to: "II_N4_cirque" }] }),

  II_N4_hylas: P({ title: "Ce qu'on fait d'un nom", place: "cirque",
    text: [
      "« Un nom, dit Hylas, c'est une chose qui est dite par quelqu'un. Si personne ne le dit plus, il s'en va. Les Greffiers ont inventé l'écriture pour qu'un nom tienne sans personne. »",
      "Il tourne la tête vers le murmure. « Lui, il fait l'inverse. Il les dit tous, tout le temps, pour que rien ne s'en aille. C'est ce que faisaient les Orsans, je crois, avant d'écrire. Ils se disaient les uns les autres. »",
      { if: { item: "livre_veilles" }, text: "Il pose la main sur le Livre des Veilles, dans ton sac. « Et nous, nous avons écrit qu'il fallait oublier. »" },
    ],
    choices: [{ label: "Remonter au bord du cirque", fx: { conf: { hylas: 5 } }, to: "II_N4_cirque" }] }),

  II_N4_ysolde: P({ title: "Où frapper", place: "cirque",
    text: [
      "Vous faites le tour du cirque par les crêtes, Ysolde et toi, à plat ventre dans la neige. Elle observe le géant comme elle observerait une forteresse.",
      "« Il n'a pas de cœur, dit-elle. Pas de tête qui compte. Il est fait de ce qu'on lui donne. Si on l'attaque, on attaque ce qu'il y a dedans. » Elle se tait. « J'ai fait ça, une fois, je crois. Attaquer ce qu'il y avait dedans. »",
      "« Mais il a un défaut. Il ne bouge pas quand il mange. Les petits arrivent par fournées, le temps de compter deux cents. Entre deux, il lève la tête. Pendant qu'il avale, il est aveugle. »",
    ],
    choices: [{ label: "Revenir au bord du cirque", fx: { flag: "nord:ysolde_plan" }, to: "II_N4_cirque" }] }),

  II_N4_gaspard_sait: P({ title: "Le grand", place: "cirque",
    text: [
      "Gaspard regarde le géant avec une sorte de tendresse. « Il était petit, dit-il. Comme moi. Un des premiers. Avant l'homme en noir, avant les sceaux. Il glanait déjà, il y a très longtemps, quand la grande ville a brûlé. Il ramassait les noms de ceux qui brûlaient, pour qu'ils ne se perdent pas. Il n'a jamais arrêté. »",
      "« Il ne sait pas les rendre. Personne ne lui a appris. Mais si on lui chante un nom, il le donne. Un seul. Il ne sait pas en donner plus. »",
    ],
    choices: [{ label: "Revenir au bord du cirque", fx: { flag: "nord:gaspard_sait" }, to: "II_N4_cirque" }] }),

  II_N4_face: P({ title: "Devant lui", place: "cirque",
    text: [
      "Tu descends. La neige est dure, tassée par des milliers de pieds. Le murmure grandit à chaque pas, jusqu'à ce que tu ne t'entendes plus penser. À vingt pas, il lève la tête.",
      "Il n'a pas d'yeux. Il te regarde quand même. Il se penche, et son ombre te couvre, et le murmure s'arrête.",
      "Le silence est pire.",
    ],
    choices: [
      { label: "L'attaquer, tous ensemble", to: "II_N4_combat" },
      { label: "Lui chanter. Le chant des morts, et un seul nom au bout", test: { dom: "magie", label: "Chant", help: [{ if: { has: "nord:chant_lu" }, v: 15 }, { if: { has: "nord:falaise" }, v: 5 }, { if: { has: "nord:geant_chant" }, v: 15 }, { if: { has: "nord:gaspard_sait" }, v: 10 }, { if: { present: "gaspard" }, v: 10 }] },
        win: { fx: { flag: "nord:geant_ecoute", ep: ["perso", 1500] }, to: "II_N4_un_nom" },
        lose: { to: "II_N4_combat" } },
      { label: "Laisser Ombeline aller à lui", hide: { not: { present: "ombeline" } }, to: "II_N4_ombeline" },
    ] }),

  II_N4_combat: P({ title: "La chasse",
    combat: { title: "Le Glaneur géant", enemies: ["geant", { id: "glaneur_petit", n: 2 }], terrain: "nature", range: "distance",
      flee: { dom: "nature", label: "Fuir vers le col étroit", fx: { flag: "nord:geant=fui" }, to: "II_N4_fuite" },
      win: { fx: { ep: ["seance", 4000], flag: "nord:geant=tue" }, to: "II_N4_mort" },
      lose: { fx: { flag: "nord:geant=fui" }, to: "II_N4_fuite" } },
    text: [
      "Les flèches, les lames, le feu. Il se redresse, lentement, et c'est comme regarder une montagne se lever. Les petits Glaneurs lâchent ce qu'ils portent et se retournent vers vous.",
      { if: { has: "nord:ysolde_plan" }, text: "Ysolde a compté. Elle crie : « Maintenant ! » au moment exact où il avale." },
    ],
    choices: [] }),

  II_N4_mort: P({ title: "La neige qui s'envole", place: "cirque",
    text: [
      "Il tombe à genoux. Puis en avant. Il touche le sol, et il éclate, sans bruit, en une nuée blanche qui monte, qui monte, et qui remplit le cirque.",
      "Et dans la nuée, des lueurs. Des milliers. Qui battent, comme des cœurs d'oiseaux. Elles tournent un moment au-dessus de vous, hésitantes, puis le vent les prend et les emporte vers l'est. Vers le col de l'Ourse. Vers la déchirure.",
      "Le murmure s'éloigne avec elles. Puis plus rien.",
      { if: { has: "nord:sauvelune_entendu" }, text: "L'enfant de Sauvelune court derrière, dans la neige, les bras levés, en criant des noms. Il tombe. Il ne se relève pas tout de suite." },
    ],
    choices: [{ label: "Remonter au col étroit", fx: { quest: "II_N_geant" }, to: "II_N4_soir" }] }),

  II_N4_fuite: P({ title: "Le col étroit", place: "cirque",
    text: ["Vous remontez le cirque en courant, sous les coups, dans la neige qui vole. Il ne vous suit pas. Il se rassoit, lentement, et les files de petits Glaneurs reprennent leur descente. Quand tu te retournes, au col, il mange de nouveau. Le murmure a repris, exactement comme avant."],
    choices: [{ label: "Monter le bivouac au col étroit", fx: { quest: "II_N_geant" }, to: "II_N4_soir" }] }),

  II_N4_un_nom: P({ title: "Un seul nom", place: "cirque",
    text: [
      "Tu chantes. La liste, tout ce que tu en sais, et il se penche pour écouter, de plus en plus bas, jusqu'à ce que sa bouche soit au-dessus de toi comme une voûte.",
      { if: { has: "nord:gaspard_sait" }, text: "Un seul nom. Gaspard l'a dit : il ne sait en donner qu'un." },
      { if: { not: { has: "nord:gaspard_sait" } }, text: "Un seul nom. Personne ne te l'a dit, et tu le sais : il n'en rendra qu'un." },
      "Si tu chantes le nom d'une personne, il rendra une personne. Si tu chantes le nom d'un village, il rendra peut-être un village. Tu ne sais pas. Tu as le temps d'un souffle.",
    ],
    choices: [
      { label: "« Sauvelune. »", fx: { flag: "nord:rendu=sauvelune", ep: ["perso", 2000] }, to: "II_N4_sauvelune_rendu" },
      { label: "Le nom de Hrodna, et de ceux du clan qui ont donné le leur pour toi", fx: { flag: "nord:rendu=clan", conf: { corbe: 10 }, ep: ["perso", 2000] }, to: "II_N4_clan_rendu" },
      { label: "« Arnoul. » Les Veilleurs, et ce qu'ils savaient", hide: { not: { has: "nord:arnoul_pris" } }, fx: { flag: "nord:rendu=arnoul", ep: ["perso", 2000] }, to: "II_N4_arnoul_rendu" },
      { label: "« Bran. » Ton frère", hide: { not: { has: "corbe:voie_bran=donne" } }, fx: { flag: "nord:rendu=bran", ep: ["perso", 2000] }, to: "II_N4_bran_rendu" },
    ] }),

  II_N4_sauvelune_rendu: P({ title: "Sauvelune", place: "cirque",
    text: [
      "Il se redresse. Il ouvre la bouche, et quelque chose en sort, en tournoyant : une lueur plus grande que les autres, qui se défait en l'air en centaines de petites, comme une gerbe d'étincelles. Elles s'envolent vers le sud-ouest, vers les vallées, vers la Sauve.",
      "Le géant se rassoit. Il recommence à murmurer. Il manque quelque chose à son murmure, maintenant. Quatre cents voix.",
      { with: "enfant", text: "L'enfant de Sauvelune les regarde partir jusqu'à ce qu'il n'y ait plus rien. Puis il te prend dans ses bras, très fort, sans rien dire." },
      { without: "enfant", text: "Tu penses à l'enfant, de l'autre côté du royaume. Tu ne sais pas s'il le sentira." },
    ],
    choices: [{ label: "Remonter, sans bruit", fx: { quest: "II_N_geant" }, to: "II_N4_soir" }] }),

  II_N4_clan_rendu: P({ title: "Les noms du clan", place: "cirque",
    text: [
      "Tu chantes Hrodna. Puis la mère d'Ylva. Puis les autres, ceux qui ont peint leur visage en blanc, la deuxième nuit. Le géant hésite. Puis il crache, doucement, une poignée de lueurs, une vingtaine, qui filent vers l'ouest, vers le camp du Corbeau.",
      "Ce soir, au camp, des gens vont se réveiller et se rappeler comment ils s'appellent. Ils ne sauront pas pourquoi. Ils sauront peut-être pour qui.",
      { if: { has: "nord:sauvelune_entendu" }, text: "L'enfant de Sauvelune te regarde. Il ne dit rien. Il ne te le reprochera jamais. Il n'en a pas besoin." },
    ],
    choices: [{ label: "Remonter, sans bruit", fx: { quest: "II_N_geant" }, to: "II_N4_soir" }] }),

  II_N4_arnoul_rendu: P({ title: "Arnoul", place: "cirque",
    text: [
      "Une lueur, une seule, qui file vers l'est, vers le moutier. Là-bas, dans la bibliothèque, un vieillard pris dans la glace va se souvenir de qui il est, pendant le temps qu'il lui reste. Peut-être qu'il lira encore, à la troisième heure.",
      "Et ce qu'on dit au prieur, le jour où on l'élit, ne sera pas tout à fait perdu.",
    ],
    choices: [{ label: "Remonter, sans bruit", fx: { quest: "II_N_geant" }, to: "II_N4_soir" }] }),

  II_N4_bran_rendu: P({ title: "Brann", place: "cirque",
    text: [
      "Tu chantes le nom de ton frère, celui que le clan a brûlé, celui qu'il a donné à Pallanche pour une sauvageonne et un garde noir. Une lueur rousse sort de la bouche du géant et file vers le sud, très vite, comme un oiseau qui rentre.",
      "Quelque part, un garde en noir va s'arrêter au milieu d'une rue et dire son propre nom à voix haute. Peut-être le tien après.",
    ],
    choices: [{ label: "Remonter, sans bruit", fx: { quest: "II_N_geant" }, to: "II_N4_soir" }] }),

  II_N4_ombeline: P({ title: "Ombeline", place: "cirque",
    text: [
      "Ombeline passe devant toi. Elle marche jusqu'au géant, lentement, et pose la main sur sa jambe, comme elle l'a posée sur la glace, à la chapelle. Il se fige.",
      "« Je ne peux pas tout prendre, dit-elle sans se retourner. Je peux prendre ce qui lui fait mal. La faim. C'est assez pour qu'il dorme. »",
      "Elle ferme les yeux. Le murmure baisse, baisse, devient un souffle, un ronflement. Le géant se couche sur le flanc, au fond du cirque, comme une montagne qui s'endort, et les petits Glaneurs s'arrêtent, désorientés, leurs lueurs entre les mains.",
      "Ombeline tombe à genoux dans la neige. Quand tu arrives, elle te regarde avec une curiosité polie.",
      "« Je suis désolée, dit-elle. Je ne sais plus comment je m'appelle. Vous le savez, vous ? »",
    ],
    choices: [{ label: "« Ombeline. Tu t'appelles Ombeline. »", fx: { flag: ["nord:geant=dort", "ombeline:faim"], quest: "II_N_geant", conf: { ombeline: 10 }, ep: ["perso", 2500] }, to: "II_N4_soir" }] }),

  II_N4_soir: P({ title: "Le bivouac", place: "cirque",
    text: [
      "Vous campez au col étroit, entre deux rochers. Personne ne parle beaucoup. Au loin, à l'est, la lueur blanche du col de l'Ourse, plus grande qu'hier.",
      { if: { has: "ombeline:faim" }, text: "Ombeline murmure ses noms. De temps en temps, elle s'arrête, et elle se répète le sien, tout bas, pour l'apprendre." },
      { if: { has: "nord:geant=tue" }, text: "Il n'y a plus de murmure. Ça fait un silence énorme." },
    ],
    choices: [
      { label: "Parler avec l'enfant de Sauvelune", hide: { any: [{ not: { present: "enfant" } }, { seen: "II_N4_soir_enfant" }] }, to: "II_N4_soir_enfant" },
      { label: "Parler avec Ysolde", hide: { any: [{ not: { present: "ysolde" } }, { seen: "II_N4_soir_ysolde" }] }, to: "II_N4_soir_ysolde" },
      { label: "Parler avec Pie", hide: { any: [{ not: { present: "pie" } }, { seen: "II_N4_soir_pie" }] }, to: "II_N4_soir_pie" },
      { label: "Parler avec Hylas", hide: { any: [{ not: { present: "hylas" } }, { seen: "II_N4_soir_hylas" }] }, to: "II_N4_soir_hylas" },
      { label: "Dormir. Demain, le col", fx: { flag: "ch2:nord:4", resume: "II_N5_depart", catchup: 8, catchupAll: true, catchupWhy: "le cirque des Moissons" }, to: "C2_carrefour", big: true },
    ] }),

  II_N4_soir_enfant: P({ title: "Quatre cents", place: "cirque",
    text: [
      { if: { has: "nord:rendu=sauvelune" }, text: "« Tu crois qu'ils sont rentrés ? demande l'enfant. Chez eux. Dans leurs maisons. » Tu dis que tu crois. Il hoche la tête. « Pim va me demander où j'étais. Il va être furieux. » Il rit, et il pleure, les deux en même temps." },
      { if: { all: [{ has: "nord:sauvelune_entendu" }, { any: [{ has: "nord:rendu=clan" }, { has: "nord:rendu=arnoul" }, { has: "nord:rendu=bran" }] }] }, text: "L'enfant regarde le feu. « Tu as eu raison, sûrement, dit-il. Tu connais ces gens-là. Moi, je connais les miens. » Il met longtemps à finir sa phrase. « Je les ai entendus. C'est déjà ça. »" },
      { if: { all: [{ has: "nord:sauvelune_entendu" }, { not: { any: [{ has: "nord:rendu=sauvelune" }, { has: "nord:rendu=clan" }, { has: "nord:rendu=arnoul" }, { has: "nord:rendu=bran" }] } }] }, text: "L'enfant regarde le feu. Il met longtemps à parler. « Je les ai entendus, dit-il. Tous. C'est déjà ça. »" },
      { if: { not: { has: "nord:sauvelune_entendu" } }, text: "L'enfant regarde le feu. « Il y avait des voix, dans le cirque. J'ai cru entendre ma mère. » Il secoue la tête. « On entend ce qu'on veut, dans le vent. »" },
    ],
    choices: [{ label: "Revenir au feu", fx: { conf: { enfant: 5 } }, to: "II_N4_soir" }] }),

  II_N4_soir_ysolde: P({ title: "Ce qu'il y avait dedans", place: "cirque",
    text: ["Ysolde nettoie son épée, qui n'a rien à nettoyer. « Au pont, dit-elle soudain, il y avait des gens. Pas des soldats. Des gens. Je le sais parce que j'en rêve depuis le lac. » Elle range l'épée. « Je ne sais pas encore ce que j'ai fait. Mais je sais qui c'était. Ce n'étaient pas des soldats. »"],
    choices: [{ label: "Revenir au feu", fx: { conf: { ysolde: 5 } }, to: "II_N4_soir" }] }),

  II_N4_soir_pie: P({ title: "Deux syllabes", place: "cirque",
    text: [
      { if: { item: "nom_vole" }, text: "Pie a la lueur dans une boîte en fer-blanc, entre ses mains, et il l'écoute. « Deux syllabes, dit-il. Toujours les mêmes. Je crois que c'est une fille. » Il referme la boîte. « Je l'ai volé à un monstre pour le rendre à quelqu'un. C'est la première fois que je vole dans ce sens-là. »" },
      { without: "linette", after: "pie:choix=linette", if: { not: { item: "nom_vole" } }, text: "Pie regarde le sud. « Ma sœur est là-bas, dit-il. Avec les autres. » Il hausse les épaules. « J'espère qu'ils la laissent dormir. Elle dort mal, dans les endroits nouveaux. »" },
      { without: "linette", before: "pie:choix=linette", if: { not: { item: "nom_vole" } }, text: "Pie regarde le sud. « Ma sœur est là-bas, dit-il. Dans leur tour. » Il hausse les épaules. « J'espère qu'ils la laissent dormir. Elle dort mal, dans les endroits nouveaux. »" },
      { with: "linette", if: { not: { item: "nom_vole" } }, text: "Pie regarde Linette, qui dort assise, le dos droit. « Elle dort mal, dans les endroits nouveaux, dit-il. Ici, elle dort. » Il hausse les épaules. « C'est peut-être le froid. »" },
    ],
    choices: [{ label: "Revenir au feu", fx: { conf: { pie: 5 } }, to: "II_N4_soir" }] }),

  II_N4_soir_hylas: P({ title: "La grande ville", place: "cirque",
    text: [
      { if: { has: "nord:gaspard_sait" }, text: "Hylas te demande ce qu'a dit Gaspard, sur la grande ville qui a brûlé. Tu le lui répètes. Il ne dit rien pendant longtemps. Puis : « Le registre noir dit trois cent douze ans. Gaspard dit il y a très longtemps. Le géant ramassait ceux qui brûlaient. » Il serre son bâton. « Ce n'était pas une ville. C'était un peuple. »" },
      { if: { not: { has: "nord:gaspard_sait" } }, text: "Hylas n'a pas cessé de compter, depuis le cirque. Il ne dit rien pendant longtemps. Puis : « Des milliers de noms. Le registre noir dit trois cent douze ans. Les serments disent : une vallée. » Il serre son bâton. « Une vallée n'a pas tant de noms. Ce n'était pas une vallée. C'était un peuple. »" },
    ],
    choices: [{ label: "Revenir au feu", fx: { conf: { hylas: 5 }, flag: "hylas:peuple" }, to: "II_N4_soir" }] }),
};
