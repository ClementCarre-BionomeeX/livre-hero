// Act III, « La nuit des trois lumières » (days 10 to 16): after the vote, the surrender or the war, the postern of
// the Mills, the general assault, the last days, and the seven endings. The epilogue tells what became of each
// dilemma, without judging it.
function endFx(id) { return { flag: "fin:" + id, ep: ["histoire", 2000] }; }
var FREE = { not: { any: [{ has: "oudart:arrete" }, { has: "oudart:fui" }] } };
module.exports = { passages: {
  C3_apres: {
    act: "III", title: "Le vote", place: "chateau",
    text: [
      { if: { vote: "reddition", is: "adopte" }, text: "La reddition est adoptée. Le greffier écrit le compte au registre, d'une main qui tremble. Quelqu'un, contre le mur, applaudit, seul, et s'arrête. On enverra un trompette au héraut avant minuit : les portes s'ouvriront le douzième jour, à neuf heures du matin." },
      { if: { vote: "reddition", is: "rejete" }, text: "La reddition est rejetée. Le greffier écrit le compte au registre. Aussonne se lève, très droit. « Le Conseil a parlé. Nous tiendrons. » Puis, plus bas, pour toi seul{e} : « Demain matin, au château. Il faut préparer la guerre. »" },
      { if: { all: [{ vote: "reddition", is: "adopte" }, { not: { has: "lettre:lue_conseil" } }] }, text: "Aussonne n'a pas attendu la fin du compte. Il est sorti, et l'on a entendu son pas dans l'escalier, et la porte de son logis qu'on ferme à clé." },
      { if: { any: [{ has: "lettre:lue_conseil" }, { camp: "commune" }] }, text: "Dans la cour, les maîtres des métiers ne rentrent pas chez eux. Ils restent sous les torches, autour de Gilles Aubron, et parlent à voix basse." },
      { if: { promise: "alienor", is: "tenue" }, text: "Dame Vassal te salue d'un signe de tête. Le marché est soldé." },
      { if: { promise: "alienor", is: "rompue" }, text: "Dame Vassal te regarde passer comme on regarde une créance perdue." },
    ],
    choices: [
      { label: "Suivre le capitaine au conseil de guerre", if: { vote: "reddition", is: "rejete" }, hide: { not: { vote: "reddition", is: "rejete" } }, takes: "morning", to: "S_guerre" },
      { label: "Descendre dans la ville qui attend la paix", if: { vote: "reddition", is: "adopte" }, hide: { not: { vote: "reddition", is: "adopte" } }, takes: 1, to: "H_chateau" },
    ],
  },

  // ------------------------------------------------------------------ the surrender
  R_remise: {
    act: "III", title: "Les clés de Sarance", place: "remparts",
    text: [
      "Le douzième jour, à neuf heures. Sur la place de la Porte des Tanneurs, la ville est venue en habits du dimanche, ou ce qu'il en reste. Le Conseil attend sous la voûte, et toi avec lui, l'anneau des clés des greniers à la ceinture.",
      "La porte s'ouvre en grinçant. Messire de Rouvre entre à cheval, suivi de cinquante cavaliers en tabard rouge. Il descend de cheval devant le Conseil, et attend qu'on lui remette les clés de la ville.",
      { if: { has: "lettre:lue_conseil" }, text: "Aussonne est là, en armure, la garnison rangée derrière lui avec ses bannières. Il tient la lettre du Roi à la main, et la tend au héraut avant même de saluer." },
      { if: { all: [{ not: { has: "lettre:lue_conseil" } }, { not: { has: "aussonne:lettre" } }] }, text: "Aussonne est absent. Le capitaine du Roi s'est enfermé au château avec quarante sergents, et la herse est baissée. Il a fait dire qu'il ne rendait pas la place du Roi sans ordre du Roi." },
      { if: { has: "aussonne:lettre" }, text: "Aussonne est là, en armure, la garnison rangée derrière lui. Il tient à la main la lettre que tu lui as rendue hier soir." },
    ],
    choices: [
      { label: "Monter au château, et rendre au capitaine la lettre du Roi", if: { all: [{ item: "lettre_roi" }, { not: { has: "lettre:lue_conseil" } }] }, hide: { any: [{ not: { item: "lettre_roi" } }, { has: "lettre:lue_conseil" }, { has: "aussonne:lettre" }] }, to: "R_lettre_rendue" },
      { label: "Remettre les clés de la ville au héraut", to: "F_reddition" },
    ],
  },
  R_lettre_rendue: {
    title: "La herse", place: "chateau",
    text: [
      "On te laisse passer sous la herse, seul{e}. Aussonne t'attend dans la cour, en armure, au milieu de ses sergents qui ont tous l'air d'hommes qui vont mourir et le savent.",
      "Tu lui tends la lettre. « Montrez-la au héraut. Le Roi vous l'a écrite : rendre la place à bonnes conditions. On ne pend pas un capitaine qui obéit à son Roi. »",
      "Aussonne la prend. Il la regarde longtemps. Puis il fait lever la herse.",
    ],
    fx: { flag: "aussonne:lettre", regard: { aussonne: "redevable" } },
    choices: [{ label: "Descendre avec lui jusqu'à la porte", to: "R_remise" }],
  },
  K_commune: {
    act: "III", title: "La commune", place: "port",
    text: [
      "Au matin du onzième jour, le beffroi de l'Hôtel de ville sonne la cloche de la commune, celle qu'on ne sonne plus depuis cent ans. Les métiers descendent dans les rues avec leurs bannières, les bateliers avec leurs gaffes, les tanneurs avec leurs couteaux.",
      { if: { vote: "reddition", is: "adopte" }, text: "Le Conseil a voté la reddition hier soir. Les métiers refusent qu'on la fasse sans eux : si Sarance doit avoir un nouveau seigneur, elle traitera avec lui elle-même, et elle fixera ses conditions." },
      { if: { has: "lettre:lue_conseil" }, text: "Depuis hier soir, toute la ville sait ce que disait la lettre du Roi. Personne ne viendra. Les métiers en ont tiré leur conclusion pendant la nuit." },
      "Ils sont deux mille sur la place du Marché à l'heure de la messe. Ils jurent ensemble, la main levée, la commune de Sarance. Gilles Aubron est élu maire par acclamation, sur les marches de l'Hôtel de ville, devant Carbonnel qui lui remet le sceau de la ville en tremblant.",
      "Au château, la herse est baissée. Aussonne et sa garnison sont enfermés dans leurs murs, et les métiers les y gardent. Personne ne tire.",
      "À midi, Gilles te prend par l'épaule. « Le Margrave ne traitera pas avec des bateliers. Il traitera avec quelqu'un qui sait compter. Tu viens avec moi au camp. »",
    ],
    choices: [{ label: "Passer la Porte des Tanneurs avec Gilles, sous le drapeau blanc", to: "F_commune" }],
  },

  // ------------------------------------------------------------------ the war
  S_guerre: {
    act: "III", title: "Le conseil de guerre", place: "chateau",
    text: [
      "Aussonne a déroulé un plan de la ville sur la table du Conseil. Autour, ses sergents, le maître des arbalétriers, deux capitaines de quartier, et toi.",
      { if: { all: [FREE, { not: { has: "oudart:soupcon" } }] }, text: "Oudart de Lys est à la droite du capitaine, frais rasé, un pourpoint neuf. Il pose le doigt sur le plan chaque fois qu'Aussonne cite un poste, et il approuve." },
      { after: "oudart:arrete", text: "À la droite du capitaine, la place d'Oudart de Lys. Un sergent l'occupe, mal à l'aise, qui n'ose pas s'appuyer à la table." },
      { after: "oudart:fui", text: "À la droite du capitaine, la place d'Oudart de Lys. Un sergent l'occupe, mal à l'aise, qui n'ose pas s'appuyer à la table." },
      "« Le héraut a parlé de la nuit du douzième jour. Ils viendront partout à la fois : la porte, le mur, et ce qu'ils auront creusé. Je garde le château et la Haute-Ville. L'intendance, tu prends la Basse-Ville, des Tanneurs jusqu'aux Moulins. Tu connais les gens, et les gens te connaissent. »",
      { if: { all: [{ has: "mine:noyee" }] }, text: "« La Tour du Sel tiendra, grâce à ton eau. C'est déjà ça. »" },
      { if: { all: [{ not: { has: "mine:noyee" } }, { not: { has: "contremine" } }] }, text: "Le maître des arbalétriers tapote la Tour du Sel sur le plan. « Là. Ils creusent depuis cinq jours. Elle tombera. »" },
      { if: { all: [FREE, { any: [{ clue: "b_lumieres" }, { clue: "b_argent" }, { has: "b:verite" }] }] }, text: "Tu regardes, sur le plan, la Poterne des Moulins, petite et sans garde, juste derrière le Moulin du milieu." },
    ],
    choices: [
      { label: "Demander à Aussonne des hommes sûrs pour garder la Poterne des Moulins", if: { all: [FREE, { any: [{ clue: "b_lumieres" }, { clue: "b_argent" }, { has: "b:verite" }] }] },
        hide: { not: { all: [FREE, { any: [{ clue: "b_lumieres" }, { clue: "b_argent" }, { has: "b:verite" }] }] } }, fx: { flag: "poterne:gardee", quest: "III_poterne" }, to: "S_poterne" },
      { label: "Descendre préparer la Basse-Ville", if: { not: FREE }, hide: FREE, fx: { quest: "III_poterne" }, to: "H_port" },
      { label: "Descendre préparer la Basse-Ville", if: FREE, hide: { not: FREE }, to: "S_basse" },
    ],
  },
  S_poterne: {
    title: "La Poterne des Moulins", place: "port",
    text: [
      "Aussonne fronce les sourcils. « La Poterne ? Elle ouvre sur la rivière. Personne n'attaque par la rivière. » Mais il te donne six arbalétriers, et le droit de choisir qui les commande.",
      { if: { has: "pacte:oudart" }, text: "Tu as promis à Oudart de te taire. Tu tiens ta parole à ta manière : tu te tais. Tu poses seulement six arbalétriers devant sa porte. Il le saura avant ce soir." },
      "Tu les places toi-même, à la nuit tombante, dans l'ombre de la Poterne, avec ordre de tirer sur quiconque l'ouvrirait, fût-ce le capitaine en personne.",
    ],
    choices: [{ label: "Faire le tour du port", to: "H_port" }],
  },
  S_basse: {
    title: "La Basse-Ville se prépare", place: "port",
    text: [
      "Tu passes la journée à courir de la Porte des Tanneurs aux Moulins. Les tanneurs remplissent des chaudrons, les bateliers affûtent leurs gaffes, les femmes montent des pierres sur le chemin de ronde dans des paniers à linge.",
      "Au port, Gilles Aubron t'attend près des treuils rouillés des Moulins, les mains sur les hanches. « Les chaînes de la Dorve. Personne ne les a relevées depuis la dernière guerre. Si le Margrave vient par l'eau, c'est par là qu'il viendra. »",
    ],
    choices: [
      { label: "Faire relever les chaînes de la Dorve", takes: 2, to: "S_chaines" },
      { label: "Laisser la rivière aux meuniers, et t'occuper du mur", to: "H_port" },
    ],
  },
  S_chaines: {
    title: "Les chaînes", place: "port", back: true,
    text: [
      "Les chaînes de la Dorve dorment au fond de l'eau depuis la dernière guerre, accrochées à deux treuils rouillés, un sur chaque rive des Moulins. Gilles Aubron dit qu'il faut vingt hommes et une nuit pour les relever.",
      "Il en faut trente et la nuit entière. Au matin, les chaînes sont tendues en travers de la rivière, juste sous la surface, devant les Moulins et la Poterne. Une barque qui les heurterait de nuit se retournerait.",
    ],
    fx: { flag: "chaines:pretes", quest: "III_poterne" },
  },
  B2_alerte: {
    act: "III", title: "La nuit des trois lumières", place: "remparts",
    text: [
      "Le douzième jour, dix heures du soir. Dans le camp du Margrave, tous les feux s'éteignent en même temps. Le silence qui suit est pire que les cors.",
      "Tu es sur le chemin de ronde avec tes gens. Les tanneurs, les bateliers, les sergents qu'Aussonne t'a donnés.",
      { if: { not: { has: "expulsion" } }, text: "Les hommes du Plessis sont venus d'eux-mêmes, avec leurs fourches." },
      { if: { has: "pacte:oudart" }, text: "En bas, du côté des Moulins, une lumière s'allume au Moulin du milieu. Elle s'éteint. Elle se rallume. Trois fois." },
      { if: { has: "poterne:gardee" }, text: "En bas, du côté des Moulins, une lanterne s'allume un instant derrière la lucarne du Moulin du milieu, et s'éteint aussitôt. On entend un cri, des pas sur la passerelle, un carreau d'arbalète. Puis plus rien." },
      "Les cors, enfin. Partout.",
    ],
    battle: "nuit",
  },
  S_aube: {
    act: "III", title: "L'aube", place: "remparts",
    text: [
      "Le soleil se lève sur la Basse-Ville. Les cors du Margrave sonnent la retraite. Dans le fossé, les échelles, les morts, les blessés qui appellent. Sur le chemin de ronde, les vivants ne parlent pas.",
      { if: { all: [FREE, { has: "poterne:gardee" }] }, text: "On amène Oudart de Lys, les mains liées, devant Aussonne. Il a été pris à la Poterne, la clé à la main. Aussonne le regarde longtemps, puis se détourne en silence." },
      "Tu descends à la Halle. Les greniers ont tenu, eux aussi. Il reste à savoir combien de temps ils nourriront ceux qui ont tenu les murs.",
    ],
    choices: [{ label: "Compter ce qu'il reste", to: "S_jours" }],
  },
  S_jours: {
    act: "III", title: "Les derniers jours", place: "halle",
    text: [
      "Tu comptes les sacs avec les commis, un trait de craie par rangée, comme le premier jour.",
      { if: { days: "ble", min: 4 }, text: "Il reste assez de blé pour quatre jours, à la ration actuelle. Peut-être davantage." },
      { if: { days: "ble", max: 3 }, text: "À la ration actuelle, il reste à peine trois jours de blé. Le Margrave n'a pas levé le camp." },
      { if: { is: { rations: "quart" } }, text: "Au quart de ration, les gens font la queue sans parler. Ils ont les yeux trop grands." },
      "Du rempart, on voit le camp du Margrave sous la pluie. On creuse des fosses, derrière les tentes. Les charrettes du nord ne viennent plus.",
    ],
    choices: [
      { label: "Passer au quart de ration jusqu'au bout", hide: { is: { rations: "quart" } }, fx: { set: { rations: "quart" }, stock: { moral: -5 } }, to: "S_jours" },
      { label: "Tenir, et attendre", takes: 72, to: "S_seize" },
    ],
  },
  S_seize: {
    act: "III", title: "Le seizième jour", place: "remparts",
    text: [
      "Le seizième jour, à l'aube, une sentinelle de la Tour du Sel appelle. Puis une autre. Puis toute la muraille.",
      "Dans les pâtures, le camp du Margrave est en train de partir. Les tentes tombent une à une. Des charrettes chargées de malades s'éloignent vers le nord, sous la pluie. Le flux, dit-on, a tué plus de soldats dans le camp que vos murailles.",
      "Le Margrave de Hautpré lève le siège de Sarance.",
    ],
    choices: [{ label: "Descendre dans la ville", to: "F_tenir" }],
  },

  // ------------------------------------------------------------------ the endings
  F_tenir: {
    act: "III", title: "Le seizième jour", place: "marche", end: true, epilogue: true, fx: endFx("tenir"),
    text: [
      "Les cloches de Sarance sonnent toute la journée. On ouvre la Porte des Tanneurs pour la première fois depuis vingt-six jours, et des gens sortent dans les pâtures, simplement pour marcher dans l'herbe.",
      "Les premiers marchands arrivent du sud trois jours plus tard, avec des charrettes de farine qu'ils vendent quatre fois son prix. On les paie.",
      { after: "oudart:arrete", text: "Oudart de Lys est pendu dans la cour du château au premier jour de la paix. Aussonne assiste à la pendaison sans détourner les yeux." },
      { if: { all: [FREE, { has: "poterne:gardee" }] }, text: "Oudart de Lys est pendu dans la cour du château au premier jour de la paix, avec la clé de la Poterne au cou." },
      { if: { has: "lettre:lue_conseil" }, text: "Le capitaine d'Aussonne rend son commandement au Conseil et part pour la cour, seul, pour rendre compte au Roi de ce qu'il a tu." },
      { if: { not: { has: "lettre:lue_conseil" } }, text: "Le capitaine d'Aussonne reçoit, au printemps, une lettre du Roi qui le fait chevalier. Il la lit en public, cette fois." },
      "Toi, tu rends les clés des greniers au Conseil, un matin, dans la salle aux tapisseries usées. Les greniers sont presque vides. La ville est pleine.",
    ],
  },
  F_reddition: {
    act: "III", title: "Les clés de Sarance", place: "remparts", end: true, epilogue: true, fx: endFx("reddition"),
    text: [
      "Carbonnel tend les clés de la ville au héraut sur un coussin de velours. Messire de Rouvre les prend, les soupèse, et les rend à Carbonnel avec un sourire. « Gardez-les. Monseigneur est votre seigneur, il n'est pas votre geôlier. »",
      "Les soldats du Margrave entrent en bon ordre, bannières roulées. Aucun pillage. Les tavernes ouvrent le soir même, et l'on boit avec les ennemis de la veille.",
      { if: { any: [{ has: "lettre:lue_conseil" }, { has: "aussonne:lettre" }] }, text: "Aussonne sort de la ville avec sa garnison, enseignes déployées, à cheval, la lettre du Roi dans son pourpoint. Le Margrave le reçoit sous sa tente, lit la lettre, et le laisse partir. On ne pend pas un capitaine qui obéit à son Roi." },
      { if: { all: [{ not: { has: "lettre:lue_conseil" } }, { not: { has: "aussonne:lettre" } }] }, text: "Le château tient trois jours, seul, herse baissée. Le quatrième jour, les soldats du Margrave l'escaladent. On trouve Aussonne mort dans la salle du Conseil, l'épée à la main, au milieu de ses sergents." },
      { if: FREE, text: "Oudart de Lys entre dans la ville au côté du Margrave, et l'on apprend la semaine suivante qu'il est fait prévôt de Sarance. Il salue tout le monde dans la rue." },
      "Le Margrave fait ouvrir les greniers du camp et vendre du blé à la ville, au juste prix. On dit qu'il veut être aimé. On dit qu'il le sera.",
    ],
  },
  F_poterne: {
    act: "III", title: "La poterne ouverte", place: "port", end: true, epilogue: true, fx: endFx("poterne"),
    text: [
      "La Poterne des Moulins s'ouvre au milieu de la nuit, sans bruit. Les barques du Margrave glissent sous les roues des Moulins, et ses soldats entrent dans la Basse-Ville par la porte qu'on leur a ouverte de l'intérieur.",
      "Ils prennent la Porte des Tanneurs à revers. À l'aube, la Basse-Ville est à eux, sans pillage : des sergents du Margrave, à chaque carrefour, ont l'ordre de pendre quiconque toucherait à une maison.",
      "Le château, lui, ne se rend pas. On l'assiège trois jours. Le quatrième, on l'escalade, et l'on ne fait pas de prisonniers. Aussonne meurt dans la cour, avec ses derniers sergents.",
      "Oudart de Lys est fait seigneur de Sarance par le Margrave, sur le parvis de Saint-Aubin. Il a tenu parole : la ville n'a pas été mise à sac. Il porte un pourpoint neuf, aux boutons d'argent ciselés d'un lys.",
      { if: { has: "pacte:oudart" }, text: "Il te reconnaît dans la foule et te fait un signe de tête. Personne ne sait ce qu'il y a entre vous. Personne ne le saura." },
    ],
  },
  F_sac: {
    act: "III", title: "Sarance brûle", place: "remparts", end: true, epilogue: true, fx: endFx("sac"),
    text: [
      "La brèche cède un peu avant l'aube. Les soldats du Margrave entrent par la Tour du Sel, puis par la porte, et ils se répandent dans la Basse-Ville comme l'eau dans une cave.",
      "Ce qui suit dure trois jours. Le Margrave l'avait annoncé : il ne répondait plus de ce que feraient ses soldats.",
      "Tu survis. Tu ignores encore comment. Une sœur de l'Hôtel-Dieu t'a caché{e} sous un lit de malade, et les soldats n'ont pas voulu toucher au flux.",
      "Le quatrième jour, le Margrave entre à cheval dans une ville qui fume. Il fait pendre une douzaine de ses propres soldats, pour l'exemple, sur la place du Marché. Puis il fait ouvrir les greniers de la Halle, et distribuer ce qui reste.",
    ],
  },
  F_faim: {
    act: "II", title: "Les portes de la faim", place: "halle", end: true, epilogue: true, fx: endFx("faim"),
    text: [
      "Le dernier sac est monté aux comptoirs un matin de pluie. Il fait quarante pains. Il y a neuf mille bouches.",
      "Les gens ne crient plus. Ils viennent quand même, avec leurs jetons de plomb, et restent debout devant les comptoirs vides. Certains s'assoient sur les marches et ne se relèvent pas.",
      "Le Conseil se réunit une dernière fois, sans vote. Le soir même, les portes s'ouvrent, et la ville se rend sans condition. Le Margrave fait distribuer du pain à la Porte des Tanneurs. Des gens meurent d'avoir mangé trop vite.",
      "Aussonne est pendu au créneau de sa porte, comme le capitaine de Pont-Aubert. Il monte à l'échelle sans qu'on le pousse.",
    ],
  },
  F_fuite_depart: {
    title: "La passe des Saules", place: "port",
    text: [
      "Jacquemin te regarde un long moment. « Pour de bon ? Cette nuit ? » Il ne te juge pas. Il passe des gens depuis le début du siège : des marchands, un chanoine, une femme avec un nouveau-né. Il sait qui revient et qui ne revient pas.",
      "« À minuit, sous les saules. Pas de bagage. Pas de lumière. Si le poste du Margrave tire, tu te couches au fond de la barque et tu ne bouges plus. »",
      { if: { promise: "jacquemin", is: "en cours" }, text: "Tu lui dois encore ses traversées. Il ne t'en parle pas." },
    ],
    choices: [
      { label: "Partir cette nuit", takes: "night", to: "F_fuite" },
      { label: "Rester à Sarance", back: "T_jacquemin" },
    ],
  },
  F_fuite: {
    title: "Par la Dorve", place: "port", end: true, epilogue: true, fx: endFx("fuite"),
    text: [
      "La barque glisse sous les saules, dans le noir complet. Jacquemin pousse la perche en silence. Sur l'autre rive, le feu du poste du Margrave éclaire des visages endormis. Personne ne tire.",
      "Au matin, tu marches seul{e} sur la route de Saint-Clair, sous une pluie fine. Derrière toi, sur son éperon, Sarance fume dans la brume du matin, ses murailles grises et la Tour du Sel.",
      "Tu as encore à la ceinture l'anneau des clés des greniers. Tu t'en aperçois à midi, en t'asseyant au bord d'un fossé. Tu les gardes longtemps dans ta main.",
      "Tu apprends la fin du siège bien plus tard, à cent lieues de là, de la bouche d'un colporteur qui ne sait pas que tu y étais.",
    ],
  },
  F_commune: {
    act: "III", title: "La commune de Sarance", place: "remparts", end: true, epilogue: true, fx: endFx("commune"),
    text: [
      "Le Margrave vous reçoit sous sa tente, assis, sans vous faire asseoir. Gilles parle le premier, trop fort. Puis tu parles, toi, de ce que tu sais : des greniers, des jours, du flux qui court dans son camp autant que dans la ville, de ce que coûte un assaut et de ce que rapporte une ville qui paie l'impôt de bon cœur.",
      "Il vous écoute jusqu'au bout. Puis il fait appeler son clerc.",
      "La charte est signée le soir même. La commune de Sarance reconnaît le Margrave de Hautpré pour seigneur. Le Margrave reconnaît la commune de Sarance, son maire, ses jurés élus par les métiers, sa cloche et son sceau. Il entrera dans la ville avec cent hommes, pas un de plus.",
      "Aussonne sort du château le lendemain, sous la garde des bateliers. Le Margrave le garde prisonnier jusqu'à la rançon, que le Roi paiera, ou pas.",
      "Sur la place du Marché, on lit la charte à voix haute, trois fois. À la troisième, la foule la sait par cœur.",
    ],
  },
},
epilogue: [
  { if: { vote: "rations", is: "adopte" }, text: "**La ration.** La demi-ration votée au deuxième jour a fait durer le blé. On dit encore, dans le port, que les jurés n'ont jamais eu faim." },
  { if: { vote: "rations", is: "rejete" }, text: "**La ration.** Le Conseil a refusé la demi-ration au deuxième jour. Les gens ont mangé leur pain entier une semaine de plus. On en parle encore, selon les maisons, comme d'une folie ou d'une bonté." },
  { if: { has: "alienor:arretee" }, text: "**Le grain.** Dame Vassal a passé le reste du siège dans la tour basse du château. Ses caves ont nourri la ville quatre jours. Elle a gardé ses comptes en prison, et elle a demandé réparation, plus tard, devant le parlement." },
  { if: { has: "grain:achete" }, text: "**Le grain.** Le blé des caves Vassal est rentré dans les greniers de nuit, et personne n'a su comment. Dame Vassal a eu ta voix au Conseil. Les deux marchés sont restés dans les registres de la ville, sans signature." },
  { if: { all: [{ has: "g:rendu" }, { not: { has: "alienor:arretee" } }] }, text: "**Le grain.** Dame Vassal a rendu le blé sous la menace. Cette nuit-là est restée entre elle et toi." },
  { if: { not: { has: "g:trouve" } }, text: "**Le grain.** Les trois cents setiers n'ont jamais reparu dans les registres. Pendant tout le siège, on a vendu de la farine blanche au fond du Chat-Huant." },
  { if: { has: "grain:part_port" }, text: "**Le port.** Une part du grain retrouvé est allée aux familles du port, comme promis à Gilles Aubron. Les bateliers s'en souviennent." },
  { if: { has: "soldats:pleine" }, text: "**Les soldats et les malades.** Les sergents ont eu la ration pleine jusqu'à la fin. Mère Ysaure a tenu le compte de ses morts, et l'a envoyé chaque soir à la Maison des Greniers." },
  { if: { has: "hospice:ble" }, text: "**Les soldats et les malades.** Le pain blanc est allé à l'Hôtel-Dieu. Les sergents ont tenu les murs à demi-ration, et l'ont fait savoir." },
  { if: { has: "grain:partage" }, text: "**Les soldats et les malades.** Tu as coupé le pain en deux entre les soldats et les malades. Aucun des deux n'en a eu assez." },
  { if: { all: [{ has: "expulsion" }, { has: "passage:accorde" }] }, text: "**Les gens du Plessis.** Mis hors des murs au huitième jour, ils ont passé les lignes avec un sauf-conduit et ont fini l'hiver dans les villages du sud. Adélaïde est revenue au Plessis au printemps, rebâtir." },
  { if: { all: [{ has: "expulsion" }, { not: { has: "passage:accorde" } }] }, text: "**Les gens du Plessis.** Mis hors des murs au huitième jour, ils sont restés dans le fossé, entre la ville et le camp. On ne sait pas combien en sont revenus." },
  { if: { all: [{ not: { has: "expulsion" } }, { has: "plessis:abri" }] }, text: "**Les gens du Plessis.** Ils sont restés dans la ville jusqu'au bout, au sec, et ils ont mangé le pain de Sarance." },
  { if: { all: [{ not: { has: "expulsion" } }, { not: { has: "plessis:abri" } }] }, text: "**Les gens du Plessis.** Ils sont restés dans la ville jusqu'au bout, sous les arcades du cloître, et ils ont mangé le pain de Sarance." },
  { if: { has: "lettre:lue_conseil" }, text: "**La lettre du Roi.** Tu l'as lue au Conseil. La ville a su qu'aucune armée ne viendrait." },
  { if: { all: [{ has: "lettre:secret" }, { not: { has: "lettre:lue_conseil" } }] }, text: "**La lettre du Roi.** Tu en as gardé le secret, comme promis au capitaine. La ville a attendu le Roi jusqu'au bout." },
  { if: { has: "oudart:arrete" }, text: "**Josse Bréhal.** Oudart de Lys a été arrêté au château. Le registre de Saint-Aubin a été corrigé : Josse Bréhal n'était pas ivre." },
  { if: { has: "oudart:fui" }, text: "**Josse Bréhal.** Oudart de Lys a passé la Dorve, et le registre de Saint-Aubin a été corrigé : Josse Bréhal n'était pas ivre." },
  { if: { has: "pacte:oudart" }, text: "**Josse Bréhal.** Tu as su qui l'avait tué, et tu as gardé le silence trois nuits, pour la ville." },
  { if: { not: { has: "b:verite" } }, text: "**Josse Bréhal.** On a écrit au registre de Saint-Aubin qu'il était tombé ivre de la Tour du Sel." },
  { if: { promise: "mahaut", is: "tenue" }, text: "**Mahaut.** Tu lui as dit la vérité sur son père. Elle est restée à l'Hôtel-Dieu, et elle est devenue sœur." },
  { if: { promise: "mahaut", is: "rompue" }, text: "**Mahaut.** Tu n'as jamais pu lui dire qui avait tué son père. Elle a quitté Sarance au printemps." },
  { if: { promise: "tasca", is: "tenue" }, text: "**Le Lombard.** Tu as rendu ses soixante écus à Ugolin Tasca, à l'heure. Il t'a prêté de nouveau, plus tard, sans intérêt." },
  { if: { promise: "tasca", is: "rompue" }, text: "**Le Lombard.** Ugolin Tasca a gardé ton nom dans son registre. Les noms ne s'effacent pas de ce registre." },
  { if: { has: "truie:brulee" }, text: "**La Truie.** Ses poutres noires sont restées sur la butte aux Pendus jusqu'à l'été. Les enfants du port y jouaient à la guerre." },
  { if: { has: "halle:reparee" }, text: "**La Halle.** Sous les tuiles neuves, plus rouges que les autres, le grain est resté sec jusqu'au bout." },
  { if: { has: "mine:noyee" }, text: "**La mine.** On n'a jamais su combien d'hommes du Margrave l'eau du bief avait pris sous la Tour du Sel. Jacquemin n'en a plus parlé." },
  { if: { has: "contremine" }, text: "**La mine.** Les six mineurs de la Montagne sont remontés de leur galerie à la fin du siège. Ils étaient cinq." },
  { if: { all: [{ has: "l:lue" }, { not: { has: "lettre:lue_conseil" } }, { not: { has: "lettre:secret" } }] }, text: "**La lettre du Roi.** Tu l'as lue, seul{e}, dans le logis du capitaine. Le Conseil ne l'a jamais entendue." },
  { if: { has: "emeute:sang" }, text: "**L'émeute.** On a lavé le sang des rigoles devant la Halle le soir même. Les noms des trois morts sont restés sur les lèvres du port." },
  { if: { camp: "garnison" }, text: "**Ton camp.** Tu t'es rangé{e} avec la garnison du Roi." },
  { if: { camp: "jures" }, text: "**Ton camp.** Tu t'es rangé{e} avec les jurés." },
  { if: { camp: "commune" }, text: "**Ton camp.** Tu as juré avec la commune du port." },
] };
