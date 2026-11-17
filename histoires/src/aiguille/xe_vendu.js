// L'Île Folle-Aiguille · side story « Le garçon vendu » (owes its question to Kidnapped: what is a young man worth to the
// one who inherits if he disappears?). Part one, act II, the child of the Fanal: a well-dressed boy drugged on the quay
// and carried aboard a yellowish brig, the Fructueux, bound for the plantations. Part two (act III, Lannoz) is in
// xe_lannoz.js: the boy escaped with a swaggering outlaw, a chase across the moors and the peat bogs.
module.exports = {
  passages: {
    XE_quai: { act: "II", title: "Le Fructueux", place: "quai_hollandes", ambiance: "ville",
      fx: { meet: "florian" },
      text: [
        "Le garçon boit à la gourde que lui tend le matelot, poliment, pour ne pas vexer. Il boit une gorgée, puis une autre, et rend la gourde en souriant. Le clerc en noir lui parle toujours à l'oreille ; il lui montre le brick à coque jaunâtre, la passerelle, une lumière à la poupe. Le garçon hoche la tête, fait un pas vers la passerelle, puis s'arrête. Il porte la main à son front. Il vacille.",
        "Le matelot le rattrape sous le bras, avec une sollicitude de nourrice. Le clerc le soutient de l'autre côté. « Il a trop bu, le jeune monsieur, dit le matelot assez fort pour que le quai l'entende. Ah, la jeunesse ! » Le garçon essaie de parler. Sa bouche remue. Ses jambes ne le portent plus. Ils l'emmènent vers la passerelle du Fructueux, ses bottes traînant sur les pavés mouillés.",
        "Sur le pont du brick, quelqu'un tient déjà la trappe de la cale ouverte.",
      ],
      choices: [
        { label: "Courir vers eux en criant", to: "XE_q_courir" },
        { label: "Courir chercher le guet, au poste du quai", to: "XE_q_guet" },
        { label: "Te glisser le long du brick pour écouter", to: "XE_q_noter" },
        { label: "Ne rien faire : ce n'est pas ton affaire", to: "XE_q_rien" },
      ] },
    XE_q_courir: { act: "II", title: "Le Fructueux", place: "quai_hollandes", ambiance: "ville",
      text: [
        "Tu cours. Le matelot te voit venir et lâche le garçon, qui s'effondre dans les bras du clerc. Il se plante devant toi, énorme, les poings sur les hanches.",
        "« Toi, le moussaillon, tu retournes à ta mère », dit-il, et il te pousse, d'une seule main, sans effort, si fort que tu tombes assis{e} dans une flaque.",
        "Le garçon, entre les bras du clerc, tourne vers toi un visage blême, les yeux vagues. Il fait un effort terrible pour parler. « Florian… souffle-t-il. Florian d'Escalis… Dites à… à mon oncle… » Il rit, d'un rire de somnambule. « Non. Ne lui dites rien. C'est lui. » Ses yeux se ferment.",
        "Ils le hissent sur la passerelle. La trappe de la cale se referme sur lui avec un bruit de couvercle. Sur la dunette du Fructueux, cinq ou six marins te regardent en riant, une main sur leur coutelas.",
      ],
      choices: [{ label: "Retenir ce nom", fx: { flag: "florian:nom", quest: "XE1" }, to: "XE_q_fin" }] },
    XE_q_guet: { act: "II", title: "Le guet", place: "quai_hollandes", ambiance: "ville",
      text: [
        "Le poste du guet est au bout du quai, une guérite où deux hommes jouent aux cartes à la lueur d'une lanterne. Le sergent t'écoute, lève les yeux au ciel, pose ses cartes à l'envers et te suit en traînant les pieds jusqu'au Fructueux.",
        "Le clerc en noir les attend sur la passerelle, souriant, un papier à la main. Il le tend au sergent. Le sergent le lit en remuant les lèvres.",
        "« Un acte d'engagement, dit le clerc. Florian d'Escalis, dix-sept ans, s'engage librement pour sept ans au service des plantations de Messieurs Doutreval et fils, aux îles du Couchant, contre le prix de son passage. Signé de sa main. Visé par son tuteur, Monsieur Gonzague d'Escalis, son oncle. Le jeune homme a voulu fêter son départ ; il a trop fêté. » Il sourit. « Les jeunes gens. »",
        "Le sergent rend le papier, salue, et retourne à ses cartes. En passant devant toi, il te donne une petite claque derrière la tête, pour le dérangement.",
      ],
      choices: [{ label: "Retenir ces noms", fx: { flag: ["florian:nom", "florian:oncle"], quest: "XE1" }, to: "XE_q_fin" }] },
    XE_q_noter: { act: "II", title: "Le long du brick", place: "quai_hollandes", ambiance: "nuit",
      text: [
        "Tu te glisses entre les barriques du quai jusqu'à l'ombre de la coque du Fructueux, sous la poupe, là où une fenêtre de cabine est entrouverte et laisse passer une lumière et des voix.",
      ],
      choices: [{ label: "Écouter sans te faire voir", test: { dom: "discretion", diff: 0, label: "Sous la poupe du brick" },
        win: { fx: { flag: ["florian:nom", "florian:lannoz"], quest: "XE1" }, to: "XE_q_entendu" }, lose: { to: "XE_q_vu" } }] },
    XE_q_entendu: { act: "II", title: "Sous la poupe", place: "quai_hollandes", ambiance: "nuit",
      text: [
        "Deux voix. Celle du clerc, sèche, précise. Celle d'un homme qui doit être le capitaine du brick, grasse, enrhumée.",
        "« Le petit d'Escalis, dit le clerc. Sept ans aux plantations. Son oncle n'y tient pas. Il préférerait qu'il n'en revienne pas du tout, mais il n'aime pas les mots durs. Faites selon votre conscience.",
        "— Ma conscience coûte vingt livres de plus.",
        "— Les voici. » Un bruit de pièces. « Vous touchez à Lannoz ?",
        "— À Lannoz pour l'eau, puis droit aux îles. Il y a des landes, à Lannoz, et des tourbières où l'on se perd. Si un engagé s'enfuit, il ne va pas loin. Ou il va très loin, et on n'en parle plus. »",
        "Le clerc rit, d'un petit rire sec de papier froissé. Une porte s'ouvre. Tu te recroquevilles sous la poupe jusqu'à ce que les pas s'éloignent.",
      ],
      choices: [{ label: "Repartir dans l'ombre", to: "XE_q_fin" }] },
    XE_q_vu: { act: "II", title: "Sous la poupe", place: "quai_hollandes", ambiance: "nuit",
      text: [
        "Une barrique roule sous ton pied. Au-dessus de toi, la fenêtre s'ouvre en grand, et une tête apparaît, puis un bras qui tient un pistolet. « Qui va là ? » Tu cours. Un coup de feu claque dans la nuit, la balle siffle à ton oreille et va se loger dans une barrique de harengs, qui saigne de la saumure.",
        "Tu ne t'arrêtes qu'à la passerelle de la Cormorane. Le cœur te bat dans la gorge. Tu n'as rien appris, sauf le nom du brick, qui est écrit en lettres jaunes sur son tableau arrière : *LE FRUCTUEUX — MORLENC*.",
      ],
      choices: [{ label: "Retenir ce nom", to: "XE_q_fin" }] },
    XE_q_rien: { act: "II", title: "Le Fructueux", place: "quai_hollandes", ambiance: "ville",
      text: [
        "Tu restes sur la passerelle. Le garçon disparaît dans la cale du brick. La trappe se referme. Sur le quai, personne n'a rien vu ; il ne s'est rien passé ; un jeune homme a trop bu, et des amis l'ont raccompagné.",
        "Morlenc est une ville où il ne se passe jamais rien, à condition de regarder ailleurs. Tu regardes ailleurs. Tu regardes les lumières de la Haute-Ville. Tu te sens très sale, tout à coup, sans savoir de quoi.",
      ],
      choices: [{ label: "Rentrer au Cormoran", fx: { flag: "florian:ignore" }, to: "A2mv_nuit" }] },
    XE_q_fin: { act: "II", title: "Le Fructueux", place: "quai_hollandes", ambiance: "nuit",
      text: [
        "Le Fructueux reste à quai, tous feux éteints, comme un navire qui dort. Dans sa cale, un garçon dort aussi, d'un autre sommeil. Il se réveillera en mer, avec un papier signé de sa main qu'il n'a jamais écrit, et sept ans de sa vie vendus.",
        { if: { has: "florian:nom" }, text: "Florian d'Escalis. Tu répètes ce nom à voix basse en remontant vers le Cormoran, pour ne pas l'oublier, comme on garde un caillou dans sa poche." },
      ],
      choices: [{ label: "Rentrer au Cormoran", to: "A2mv_nuit" }] },
  },
  extras: {
    people: {
      florian: { name: "Florian d'Escalis", aka: ["Florian", "le petit d'Escalis"], f: false,
        face: { age: "jeune", skin: "clair", hair: "blond", coif: "milong", beard: "sans", eyes: "amande", iris: "bleu", nose: "fin", lips: "fines", shape: "ovale", marks: [] },
        desc: "Un jeune homme de dix-sept ans, héritier d'un domaine.", qui: "Le garçon drogué sur le quai.",
        aspect: { allure: "mince, élégant même sale", visage: "blond, imberbe, des yeux bleus étonnés", habits: "manteau à collet, bottes de cavalier" } },
      malbosc: { name: "Aimery Malbosc", aka: ["Malbosc", "le Sanglier"], f: false,
        face: { age: "mur", skin: "hale", hair: "noir", coif: "long", beard: "moustache", eyes: "lourds", iris: "noir", nose: "busque", lips: "pleines", shape: "carre", marks: ["balafre"] },
        desc: "Un proscrit fanfaron, bretteur, recherché pour une affaire d'honneur.", qui: "Le proscrit des landes, qui se vante.",
        aspect: { allure: "trapu, la poitrine en avant", visage: "moustache noire en crocs, balafre au front", habits: "habit de soie bleue en loques", signe: "une épée trop longue pour lui", voix: "tonnante, pleine de serments" } },
    },
    quests: [
      { id: "XE1", act: "II", kind: "annexe", title: "Le garçon du quai", start: "XE_quai", echo: ["florian:nom", "florian:lannoz", "florian:oncle"] },
    ],
  },
};
