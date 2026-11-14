// Act I · a second side scene on each road: Pie's rooftop race, the queen's parrot at court, Hylas and Page Onze,
// Ysolde's youngest recruit, Corbe's split drum, and the wishing fountain of Sauvelune. Each hero leads ("tu").
function P(place, o) { return Object.assign({ act: "I", noLead: true, place: place }, o); }
module.exports = {
  // ------------------------------------------------------------ Pie · la course des toits
  PI_Q_course: P("pallanche", { title: "Grélot",
    fx: { questSeen: "PI_Q_course" },
    text: [
      "Grélot t'attend sur le toit de la halle aux Draps, assis sur une cheminée, les jambes croisées. Il a ton âge, une dent en moins, et la prétention d'être le meilleur monte-en-l'air de Pallanche. Ce n'est pas vrai. C'est toi.",
      "« On dit que tu cherches à entrer dans la tour noire, dit-il. On dit que tu as besoin d'aide. » Il crache dans la rue. « Course. D'ici au clocher de Saint-Gilles, par les toits. Si tu gagnes, je te dis ce que je sais. Si je gagne, tu me donnes ta pince. »",
    ],
    choices: [
      { label: "Courir", test: { dom: "nature", label: "Les toits", help: [{ if: { item: "corde" }, v: 10 }] },
        win: { fx: { flag: "pie:grelot", ep: ["perso", 700] }, to: "PI_Q_course_gagne" }, lose: { fx: { gold: -3 }, to: "PI_Q_course_perdu" } },
      { label: "« Je n'ai pas le temps, Grélot. »", refuse: true, to: "PI_ville" },
    ] }),
  PI_Q_course_gagne: P("pallanche", { title: "Saint-Gilles",
    text: [
      "Tu arrives au clocher avec trois toits d'avance, en passant par la gouttière des Ursulines, que Grélot n'ose pas prendre depuis qu'il a vu un chat tomber. Il arrive essoufflé, furieux, admiratif.",
      "« Les blanchisseuses de la tour, dit-il en reprenant son souffle. Elles sortent le linge par la porte des caves, le mardi et le vendredi. Le garde compte les paniers. Pas les blanchisseuses. » Il te regarde de travers. « Je ne te l'ai pas dit. »",
    ],
    choices: [{ fx: { quest: "PI_Q_course" }, back: "PI_ville" }] }),
  PI_Q_course_perdu: P("pallanche", { title: "La pince",
    text: ["Tu glisses sur une tuile mouillée, au-dessus de la rue des Teinturiers, et tu te rattrapes à une enseigne. Le temps de remonter, Grélot est au clocher. Il tend la main. Tu lui donnes ta pince. Il la regarde, la soupèse, et te la rend. « Garde-la, dit-il. Tu en auras besoin, pour ta tour. Trois sous feront l'affaire. Et tout le monde saura que j'ai gagné. » Tout le monde le saura. Il y veillera."],
    choices: [{ fx: { quest: "PI_Q_course" }, back: "PI_ville" }] }),

  // ------------------------------------------------------------ Lisandre · le perroquet de la reine
  LI_Q_perroquet: P("vasselin", { title: "Le perroquet",
    fx: { questSeen: "LI_Q_perroquet" },
    text: [
      "Dans l'antichambre de la reine, sur un perchoir d'argent, le perroquet gris que l'ambassadeur des îles lui a offert l'an dernier. Il s'appelle Monseigneur. Il ne parle presque jamais. Il écoute.",
      "Ce matin, il parle. Il répète sans se lasser, d'une voix de vieille duchesse :« Pas avant la Fête, mon cœur. Pas avant la Fête. » Puis, d'une voix d'homme, grave, avec un accent du nord : « Dis-moi seulement si c'est le mien. »",
      "Deux dames d'atour passent, entendent, rougissent jusqu'aux oreilles, et pressent le pas.",
    ],
    choices: [
      { label: "Apprendre au perroquet une autre phrase, pour couvrir celle-là", test: { dom: "social", label: "Monseigneur", help: [{ if: { seen: "LI_aubrac" }, v: 5 }] },
        win: { fx: { flag: "li:perroquet=couvert", ep: ["perso", 600] }, to: "LI_Q_perroquet_couvert" }, lose: { to: "LI_Q_perroquet_rate" } },
      { label: "Retenir la voix d'homme, à tout hasard", fx: { flag: "li:perroquet=retenu", ep: ["perso", 400] }, to: "LI_Q_perroquet_retenu" },
    ] }),
  LI_Q_perroquet_couvert: P("vasselin", { title: "Une autre chanson",
    text: ["Tu passes une heure devant le perchoir, avec des noisettes, à lui seriner le refrain le plus bête de ton répertoire. À midi, Monseigneur chante, de ta voix exacte, *Ô la belle meunière*, et il ne sait plus rien d'autre. Une duchesse que tu ne nommeras pas t'envoie, le soir même, une paire de gants brodés, sans billet."],
    choices: [{ fx: { quest: "LI_Q_perroquet", gold: 6 }, back: "LI_cour" }] }),
  LI_Q_perroquet_rate: P("vasselin", { title: "Monseigneur",
    text: ["Monseigneur te regarde de son œil rond, mange tes noisettes, et répète, plus fort : « Dis-moi seulement si c'est le mien. » Un valet passe et éclate de rire. Avant le soir, toute la cour le saura. C'est hors de ta portée, comme presque tout à la cour."],
    choices: [{ fx: { quest: "LI_Q_perroquet" }, back: "LI_cour" }] }),
  LI_Q_perroquet_retenu: P("vasselin", { title: "Une voix du nord",
    text: ["Tu ne fais rien. Tu écoutes la voix d'homme, encore, et tu la ranges dans un coin de ta tête, là où tu ranges les choses qui pourront servir. Un accent du nord. Grave. Qui demande si quelque chose est à lui. À la cour, toutes les voix servent un jour."],
    choices: [{ fx: { quest: "LI_Q_perroquet" }, back: "LI_cour" }] }),

  // ------------------------------------------------------------ Hylas · Page Onze
  HY_Q_page: P("pallanche", { takes: "evening", title: "Page Onze",
    fx: { questSeen: "HY_Q_page" },
    text: [
      "Le soir, dans ta cellule, Page Onze te lit les registres du jour, comme on le lui a appris : d'une voix plate et égale. Elle s'arrête au milieu d'une ligne. Elle ne s'arrête jamais.",
      "« Maître, dit-elle. Dans les registres, tout le monde a un nom. Même les morts. Même les vaches, dans les registres de la taille. » Elle se tait. « Moi, j'ai un numéro. Est-ce que j'avais un nom, avant ? »",
      "Tu as tenu le registre gris pendant dix ans. Tu te souviens de toutes les lignes que tu as touchées.",
    ],
    choices: [
      { label: "Le lui dire, tout bas", fx: { flag: "hy:page=nom", ep: ["perso", 900] }, to: "HY_Q_page_nom" },
      { label: "« Je ne sais pas, petite. »", fx: { flag: "hy:page=tu" }, to: "HY_Q_page_tu" },
    ] }),
  HY_Q_page_nom: P("pallanche", { title: "Linette",
    text: [
      "Tu le lui dis. Linette. Elle le répète, deux fois, à voix basse, comme on goûte un plat inconnu. Sourire, on a oublié de le lui apprendre.",
      "« Linette », dit-elle une troisième fois. Puis elle reprend sa lecture, à la ligne exacte où elle s'était arrêtée.",
      "Le lendemain matin, quand elle entre dans ta cellule, tu lui demandes comment elle s'appelle. « Page Onze, maître », dit-elle. La cession était complète. Le nom n'a pas tenu la nuit. Mais elle a, au coin de la bouche, un pli nouveau, comme au réveil d'un rêve déjà enfui.",
    ],
    choices: [{ fx: { quest: "HY_Q_page" }, back: "HY_tour" }] }),
  HY_Q_page_tu: P("pallanche", { title: "Je ne sais pas",
    text: ["« Je ne sais pas, petite. » Elle hoche la tête. Elle reprend sa lecture, d'une voix plate, sans souffle. Tu l'écoutes en serrant ta canne si fort que tes jointures te font mal. Tu sais. Tu as toujours su. Tu sais aussi ce qu'on fait, à la tour, aux greffiers qui disent ce qu'ils savent."],
    choices: [{ fx: { quest: "HY_Q_page" }, back: "HY_tour" }] }),

  // ------------------------------------------------------------ Ysolde · la recrue
  YS_Q_recrue: P("brenne", { title: "La recrue",
    fx: { questSeen: "YS_Q_recrue" },
    text: [
      "Dans la cour, le sergent fait manœuvrer les recrues de printemps. Dix garçons de ferme, une pique chacun, qui se marchent sur les pieds. Le plus petit, au bout du rang, tient sa pique comme un balai. Il a de la paille dans les cheveux et une voix qui n'a pas mué.",
      "Sur le rôle, à côté de son nom, on a écrit : *seize ans*. Il en a treize. Quatorze, au mieux. Tu le sais. Le sergent le sait. Le garçon sait que vous savez.",
    ],
    choices: [
      { label: "Le renvoyer chez lui", fx: { flag: "ys:recrue=renvoye", ep: ["perso", 500] }, to: "YS_Q_recrue_renvoi" },
      { label: "Le garder, et le mettre aux écuries, loin des piques", fx: { flag: "ys:recrue=ecuries", ep: ["perso", 600] }, to: "YS_Q_recrue_ecuries" },
    ] }),
  YS_Q_recrue_renvoi: P("brenne", { title: "Chez lui",
    text: ["Tu le fais sortir du rang. Tu lui dis de rentrer chez lui. Il te regarde avec une haine pure, absolue, la haine des enfants qu'on prive de leur guerre. « Mon frère est mort sur la Lisse, dit-il. Je viens prendre sa place. » Tu lui dis que la place de son frère est vide, et qu'elle le restera. Il part en pleurant de rage. Il reviendra dans deux ans. Tu le sais. Mais il aura deux ans de plus."],
    choices: [{ fx: { quest: "YS_Q_recrue" }, back: "YS_cour" }] }),
  YS_Q_recrue_ecuries: P("brenne", { title: "Les écuries",
    text: ["Tu le confies à Gautier, à l'écurie. Gautier le regarde, soupire, et lui met une fourche dans les mains. « Les chevaux d'abord, dit-il. Les piques après. Beaucoup après. » Le garçon est déçu. Il obéit. Le soir, tu le vois brosser un cheval de bataille plus grand que lui, en lui parlant à voix basse, et le cheval l'écoute."],
    choices: [{ fx: { quest: "YS_Q_recrue" }, back: "YS_cour" }] }),

  // ------------------------------------------------------------ Corbe · le tambour fendu
  CO_Q_tambour: P("corbeau", { title: "Le tambour fendu",
    fx: { questSeen: "CO_Q_tambour" },
    text: [
      "Ce matin, ton tambour s'est fendu. La peau, d'un bord à l'autre, d'un seul coup, avec un bruit de branche. Le froid de la neige blanche. Il n'a jamais fait si froid en juillet.",
      "C'est le tambour que ta mère a peint pour toi, avec les noms des Bouches. Une Bouche sans tambour, au col, dans trois jours, c'est une Bouche qui ne peut pas appeler. Il faut une peau neuve. De renne. Tendue cette nuit, peinte demain.",
    ],
    choices: [
      { label: "Demander une peau au vieux Arnald, qui garde le troupeau", to: "CO_Q_tambour_arnald" },
      { label: "Recoudre la peau fendue, comme tu peux", test: { dom: "nature", label: "La couture", help: [{ if: { has: "passe:alpage" }, v: 5 }] },
        win: { fx: { flag: "co:tambour=recousu", ep: ["perso", 600] }, to: "CO_Q_tambour_recousu" }, lose: { to: "CO_Q_tambour_arnald" } },
    ] }),
  CO_Q_tambour_arnald: P("corbeau", { takes: "morning", title: "La peau",
    text: [
      "Arnald te donne une peau sans rien demander. Une peau de renne blanc, fine, tannée depuis des années, qu'il gardait pour son propre linceul. « Je n'en aurai pas besoin, dit-il. Si tu ne fermes pas le col, il n'y aura personne pour m'y enrouler. »",
      "Tu la tends toute la nuit sur le cercle de bois. Ta mère vient au matin. Elle peint les noms en silence, d'une main sûre.",
    ],
    choices: [{ fx: { quest: "CO_Q_tambour", flag: "co:tambour=neuf" }, back: "CO_camp" }] }),
  CO_Q_tambour_recousu: P("corbeau", { title: "La cicatrice",
    text: ["Tu recouds la peau au tendon, point par point, toute la nuit. Au matin, le tambour sonne. Pas tout à fait comme avant : il y a, au milieu du son, un petit grésillement, là où passe la couture. Tu l'aimes mieux comme ça. Il a une cicatrice, maintenant. Comme tout le monde."],
    choices: [{ fx: { quest: "CO_Q_tambour" }, back: "CO_camp" }] }),

  // ------------------------------------------------------------ l'enfant · la fontaine
  EN_Q_fontaine: P("sauvelune", { title: "La fontaine aux vœux",
    fx: { questSeen: "EN_Q_fontaine" },
    text: [
      "Au milieu de la place, la fontaine de Sauvelune. Le fond est couvert de liards verts, jetés depuis des générations par des gens qui faisaient un vœu. Les enfants du village y repêchent les plus brillants, la nuit, et le Père Anselme fait semblant de ne pas savoir.",
      "Un vœu coûte un liard. Exactement.",
    ],
    choices: [
      { label: "Le jeter, et faire un vœu", fx: { gold: -1, flag: "en:voeu", ep: ["perso", 300] }, to: "EN_Q_fontaine_voeu" },
      { label: "Le garder", refuse: true, to: "EN_place" },
    ] }),
  EN_Q_fontaine_voeu: P("sauvelune", { title: "Le vœu",
    text: [
      "Tu fermes les yeux. Tu cherches quoi souhaiter. Tu as tout ce qu'il te faut : le moulin, Joris, Agathe, la fête ce soir. Alors tu souhaites que rien ne change. Que tout reste exactement comme ça.",
      "Le liard tombe dans l'eau avec un petit bruit, et rejoint les autres au fond. Quand tu rouvres les yeux, le soleil a bougé, un peu. Rien n'a changé. Pas encore.",
    ],
    choices: [{ fx: { quest: "EN_Q_fontaine" }, back: "EN_place" }] }),
};
