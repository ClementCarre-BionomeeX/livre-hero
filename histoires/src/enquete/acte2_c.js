// Act II · « La ville qui se tait », third part: the port of the Dyers (the Blue Basin and its innkeeper, the harbour
// office and its clerk, the barge that leaves at dawn of the fourth day), the man in the hat who drinks alone at night,
// and the evening bell of the third day, where the act ends whatever the hero has found.

module.exports = {
  // ------------------------------------------------------------------ the Blue Basin
  T_bassin: { act: "II", title: "Le Bassin Bleu", place: "teinturiers", rumeur: "bassin", back: true,
    taverne: { mise: 2, adversaire: "un batelier qui a perdu sa barge aux dés" },
    text: [
      { first: true, text: "Le Bassin Bleu est une auberge de planches peintes, posée sur pilotis au bord du quai. Le plancher bouge un peu quand passe une barge. On y boit un vin aigre des coteaux d'aval, on y mange des anguilles, et on y loge, à l'étage, les marchands qui attendent leur bateau. Les murs sont tachés de bleu jusqu'à hauteur d'épaule : les teinturiers s'y appuient en sortant des cuves." },
      { again: true, when: "day", text: "Le Bassin Bleu, l'odeur d'anguille grillée, le plancher qui tangue. À cette heure, il n'y a guère que des portefaix qui attendent un chargement." },
      { again: true, when: "night", text: "Le Bassin Bleu, la nuit : des bateliers, des teinturiers aux mains bleues, des filles du port, et le bruit de l'eau sous le plancher." },
    ] },

  P_ouen: { act: "II", title: "Maître Ouen", place: "teinturiers", montrer: "ouen", back: true,
    fx: { meet: "ouen" },
    text: [
      { first: true, text: "Maître Ouen, le patron du Bassin Bleu, est un ancien batelier énorme et lent, aux avant-bras tatoués d'ancres et de sirènes, qui essuie ses pots avec un torchon toujours plus sale que les pots. Il parle peu, mais il écoute tout : derrière son comptoir, il est comme un pilier de pont, et tout le port coule autour de lui." },
      { again: true, text: "Maître Ouen lève les yeux de son pot. « Vous buvez, ou vous causez ? »" },
      { if: { has: "passe:fleuve" }, text: "Il te regarde un moment, et il te sert sans que tu aies rien demandé, un fond de vin aigre. « T'as la tête de quelqu'un qui a dormi sur des barges. Celle-là, c'est la maison. »" },
    ],
    choices: [
      { label: "Lui demander qui loge chez lui, en ce moment", hide: { clue: "m_ganse_chambre" }, fx: { clue: "m_ganse_chambre", flag: "ganse:connu" }, to: "P_ouen_clients" },
    ] },
  P_ouen_clients: { act: "II", title: "Les chambres", place: "teinturiers", montrer: "ouen",
    text: [
      "Maître Ouen compte sur ses gros doigts.",
      "« Deux marchands de sel de Vieux-Gué, qui attendent l'eau basse. Une veuve qui va chez sa fille à la mer. Et Maître Ganse, un drapier de Basse-Aune. Lui, il a loué la chambre du fond il y a un mois, payé d'avance, en écus tout neufs. Il ne sort que la nuit. Il dit que le jour lui fait mal aux yeux. »",
      { if: { day: { min: 1, max: 1 } }, text: "« Depuis deux jours, il ne descend même plus. Il a de la fièvre, qu'il dit. Je lui monte sa soupe, il me paie la soupe comme un repas de noces. »" },
      "Il repose son pot. « Un drapier qui n'achète pas de drap. Un mois que je le vois, il n'a pas acheté une aune. Mais il paie. Moi, ceux qui paient, je leur demande rien. »",
    ],
    choices: [{ back: "P_ouen" }] },
  P_ouen_ganse: { act: "II", title: "De l'indigo", place: "teinturiers", montrer: "ouen", back: true,
    fx: { clue: "m_ganse_chambre", flag: "ganse:connu" },
    text: [
      "Maître Ouen lit la déclaration en remuant les lèvres, lentement, de bout en bout.",
      "« Trois tonneaux d'indigo, Maître Ganse. » Il hausse ses énormes épaules. « Il loge chez moi. La chambre du fond, depuis un mois. Drapier, qu'il dit. »",
      "Il renifle. « De l'indigo… J'ai porté sa malle dans l'escalier, quand il est arrivé. Elle sentait le charbon de bois et le métal chaud, sa malle. Pas l'indigo. L'indigo, ça pue : je le saurais. Ici, tout pue l'indigo. »",
    ] },
  P_ouen_portrait: { act: "II", title: "Un visage", place: "teinturiers", montrer: "ouen", back: true,
    fx: { flag: "ganse:visage" },
    text: [
      "Tu décris le portrait du salon de l'Essai à Maître Ouen : un homme grand, voûté, le front haut, une barbe grise taillée court, un grain de beauté sous l'œil gauche, de longues mains blanches.",
      "Maître Ouen prend son temps. Il essuie un pot, puis un autre.",
      "« Une barbe, non, dit-il enfin. J'ai pas de client avec une barbe grise. » Il pose le pot. « Mais les mains, oui. Et le grain de beauté. Il y en a un qui l'a juste là. » Il touche sa propre joue, sous l'œil gauche. « Et qui tient son pot comme si c'était une balance. »",
      "Il ne dit pas le nom. Il te regarde, et il reprend son torchon.",
    ] },

  // ------------------------------------------------------------------ the harbour office
  P_ivon: { act: "II", title: "Le bureau du port", place: "teinturiers", back: true,
    fx: { meet: "ivon" },
    text: [
      { first: true, text: "Le bureau du port est une cabane de briques sur le quai, avec une seule fenêtre et un grand registre ouvert sur un pupitre. Le commis Ivon a vingt ans, des lunettes rafistolées avec du fil, et l'air de quelqu'un qui a lu toutes les règles du port et qui est le seul à les suivre." },
      { again: true, text: "Le commis Ivon lève le nez de son registre. « Monsieur ? Madame ? Un passage ? Une déclaration ? Une réclamation ? »" },
      "« Toutes les barges qui partent d'Orbeval passent par ici, dit-il avec fierté. Les passages, les chargements, les droits. Tout est écrit. C'est la règle. »",
    ],
    choices: [
      { label: "Lui demander qui a payé un passage sur la Vouivre", hide: { clue: "m_passage" }, fx: { clue: "m_passage" }, to: "P_ivon_passages" },
      { label: "Lui demander la déclaration de chargement de la Vouivre", if: { day: { min: 2 } }, why: "La Vouivre n'a encore rien déclaré.", hide: { item: "declaration" }, fx: { item: "declaration", clue: "m_declaration" }, to: "P_ivon_declaration" },
    ] },
  P_ivon_passages: { act: "II", title: "Les passages", place: "teinturiers",
    text: [
      "Ivon tourne les pages de son registre en mouillant son doigt.",
      "« La Vouivre, patron Odin Ferrat, pour Basse-Aune, départ à la baisse des eaux, c'est-à-dire, d'après le patron, à l'aube du quatrième jour après la fête. Douze passages. » Il suit la colonne. « Des marchands, surtout. Une famille de Vieux-Gué. Et une place réglée longtemps d'avance : *Ganse, drapier, un passage pour Basse-Aune.* Payé le 3 de la lune des Semailles. » Il lève les yeux. « Un mois avant la fête. C'est rare. D'habitude, on paie la veille. »",
    ],
    choices: [{ back: "P_ivon" }] },
  P_ivon_declaration: { act: "II", title: "La déclaration", place: "teinturiers",
    text: [
      "« La déclaration de chargement ? » Ivon fouille dans une liasse. « La Vouivre a déclaré hier soir. Ah, voilà. Trois tonneaux d'indigo marqués G., Maître Ganse, valeur déclarée cent écus. »",
      "Il fronce les sourcils. « Cent écus pour trois tonneaux d'indigo ? C'est bien peu. Il paie moins de droits comme ça, bien sûr. Ce n'est pas à moi de juger, c'est à moi d'écrire. » Il prend une feuille vierge, une plume. « Je vous en fais une copie. On copie comme c'est écrit, c'est la règle, même les fautes. »",
      "Il recopie, en tirant la langue, en imitant de son mieux l'écriture du drapier : penchée, serrée, régulière.",
    ],
    choices: [{ back: "P_ivon" }] },

  // ------------------------------------------------------------------ the barge
  T_vouivre: { act: "II", title: "La Vouivre", place: "teinturiers", back: true,
    text: [
      { first: true, text: "La Vouivre est la plus grosse barge du port : soixante pieds de long, un fond plat goudronné, un roof de planches à l'arrière pour les passagers, et à l'avant une cale ouverte où l'on empile les marchandises sous des bâches. Son patron, Odin Ferrat, un petit homme sec à la barbe en pointe, surveille tout depuis le roof, une pipe à la main." },
      { again: true, text: "La Vouivre, au bout du quai, toujours plus chargée." },
      { first: true, if: { has: "passe:escorte" }, text: "Le patron te regarde passer sur le quai, une fois, deux fois. « Toi, tu escortes des convois, dit-il. Ça se voit à la façon de marcher. Si tu cherches une place, j'ai besoin d'un garde pour la descente. On part à l'aube du quatrième jour. » Tu dis que tu verras." },
      { if: { day: { min: 1, max: 1 } }, text: "On calfate la coque à grands coups de maillet. Le patron crie qu'on part à l'aube du quatrième jour, pas avant : l'Aune est trop haute pour passer les rapides." },
      { if: { day: { min: 2 } }, text: "Une grue de bois grince au bord du quai. Les portefaix y accrochent un tonneau marqué d'un G., et la grue plie, et les hommes jurent. Deux autres tonneaux semblables attendent sur le quai." },
      { if: { day: { min: 3 } }, text: "Les trois tonneaux marqués G. sont à fond de cale, sous une bâche cordée. Un colosse est assis dessus, les bras croisés, du matin au soir." },
    ],
    choices: [
      { label: "Écouter les portefaix", if: { day: { min: 2 } }, why: "On ne charge rien aujourd'hui.", hide: { clue: "d_tonneaux" }, fx: { clue: "d_tonneaux" }, to: "T_vouivre_tonneaux" },
      { label: "Écouter le batelier qui raconte des histoires, sur une bitte d'amarrage", hide: { clue: "m_batelier" }, fx: { clue: "m_batelier", meet: "mahu" }, to: "T_mahu" },
    ] },
  T_vouivre_tonneaux: { act: "II", title: "Les tonneaux", place: "teinturiers", back: true,
    text: [
      "Les portefaix soufflent, les mains sur les cuisses, pendant que la grue remonte à vide.",
      "« De l'indigo, dit l'un, et il crache. De l'indigo, ça ne pèse pas ça. J'en ai porté toute ma vie, de l'indigo : un tonneau, à deux, ça se roule. Celui-là, il a fallu la grue, et elle a plié. On aurait dit du plomb. »",
      "« Ou des pierres, dit l'autre. Un drapier qui emporte ses pierres. » Ils rient. Le patron leur crie de se remettre au travail.",
    ] },
  T_mahu: { act: "II", title: "Mahu", place: "teinturiers", back: true,
    text: [
      "Mahu est un batelier sans barge, d'âge incertain, au nez violet, qui raconte des histoires aux portefaix contre un coup à boire. Quand il voit que tu écoutes, il se tourne vers toi et il élève la voix.",
      "« Le second de l'essayeur ? Celui qu'on cherche, celui qui a volé ? Je l'ai vu ! Moi, Mahu ! À l'aube du jour de la fête, il montait sur une barge de sel, vers l'aval. Un grand maigre, avec un sac. Il regardait derrière lui comme un voleur. Je le jurerais devant les échevins ! »",
      "Il tend la main, paume en l'air. Les portefaix rient.",
    ] },

  // ------------------------------------------------------------------ the man in the hat
  P_ganse: { act: "II", title: "L'homme au chapeau", place: "teinturiers", back: true,
    fx: { meet: "ganse" },
    text: [
      { first: true, text: "Il est assis dans le coin le plus sombre du Bassin Bleu, le dos au mur, face à la porte, un pot de vin devant lui auquel il ne touche presque pas. Un homme de cinquante-cinq ans peut-être, grand, voûté, en habit de drap brun de bonne coupe, un large chapeau de feutre rabattu sur les yeux." },
      { again: true, text: "L'homme au chapeau est à sa place, dans le coin, le dos au mur. Il te voit entrer. Il reste immobile." },
      "Ce que l'on voit de son visage, sous le chapeau, est rasé de près, et curieusement pâle du nez au menton, plus pâle que le front et les joues : comme une peau qui n'a pas vu le soleil depuis longtemps. Sous l'œil gauche, un grain de beauté.",
      "Ses mains sont posées à plat sur la table, de chaque côté du pot : longues, blanches, soignées. À l'annulaire de la main gauche, un linge noué, taché de brun, et sous le linge, quand il bouge les doigts, on devine une marque à vif, profonde, comme celle qu'aurait laissée un anneau arraché.",
      { if: { has: "ganse:visage" }, text: "Derrière son comptoir, Maître Ouen ne lève pas les yeux. Il essuie le même pot depuis que tu es entré{e}." },
      { regard: { ganse: ["mefiant", "hostile"] }, text: "Il te regarde venir, cette fois, avec une attention sans hâte, comme on regarde l'aiguille d'une balance qui hésite." },
    ],
    choices: [
      { label: "T'asseoir à sa table et lui parler", hide: { seen: "P_ganse_parle" }, takes: 1, to: "P_ganse_parle" },
      { label: "L'appeler par son nom : Gaspard Ombreuil", if: { all: [{ clue: "m_portrait" }, { any: [{ clue: "m_contra_bague" }, { clue: "m_contra_mains" }] }, { any: [{ clue: "m_contra_heure" }, { clue: "m_contra_argant" }, { clue: "m_contra_ganse" }] }] },
        hide: { not: { all: [{ clue: "m_portrait" }, { any: [{ clue: "m_contra_bague" }, { clue: "m_contra_mains" }] }, { any: [{ clue: "m_contra_heure" }, { clue: "m_contra_argant" }, { clue: "m_contra_ganse" }] }] } },
        fx: { clue: "m_vivant" }, to: "P_ganse_nom" },
    ] },
  P_ganse_parle: { act: "II", title: "Maître Ganse", place: "teinturiers",
    fx: { regard: { ganse: "mefiant" } },
    text: [
      "Il te laisse t'asseoir. Il a une voix grave, posée, qui pèse chaque syllabe avant de la poser sur la table.",
      "« Ganse. Drapier, à Basse-Aune. J'attends mon bateau. » Il fait tourner son pot entre ses doigts, d'un quart de tour, puis d'un autre, avec une précision d'horloger. « On m'a dit qu'il y avait une enquête, en ville. Un essayeur. Triste affaire. Je ne connaissais pas l'homme. Je ne connais personne ici. »",
      "Ton nom, ce que tu veux : il a laissé passer les deux questions.",
      "« Le vin d'ici est mauvais, dit-il. Mais l'eau est pire. » Il se lève, pose une pièce sur la table, une pièce neuve, qui sonne court sur le bois. « Je vous souhaite le bonsoir. »",
      "Il monte l'escalier vers les chambres sans se retourner, lentement, lourdement, en s'arrêtant au palier.",
    ],
    choices: [{ label: "Le regarder monter", to: "H_teint" }] },
  P_ganse_nom: { act: "II", title: "Un nom", place: "teinturiers",
    text: [
      "Tu t'assieds en face de lui, et tu dis son nom. Pas fort. Juste assez pour qu'il l'entende, lui, et personne d'autre.",
      "« Gaspard Ombreuil. »",
      "Il encaisse sans broncher. Son visage, déjà pâle, garde sa couleur. Il lève seulement la tête, et le bord du chapeau découvre ses yeux, gris, fatigués, très calmes, et il te regarde comme on regarde un poids qu'on pose sur le plateau, pour savoir ce qu'il vaut.",
      "« Oui », dit-il.",
      "C'est tout. Puis, après un long moment : « Vous êtes la personne de la mère Maupas. On m'en a parlé. Je me demandais combien de temps il vous faudrait. » Il fait tourner son pot d'un quart de tour. « Que voulez-vous ? De l'argent ? J'en ai. Plus que vous n'en verrez jamais. »",
      "Sous la table, sa main droite a quitté le pot.",
    ],
    choices: [
      { label: "Lui dire de se lever : tu l'emmènes à la tour du Guet", fight: { title: "Le Bassin Bleu", enemies: [{ id: "vieil_homme", n: 1 }], terrain: "ville", spare: true,
        win: { fx: { flag: "gaspard:pris" }, to: "P_ganse_pris" }, lose: { fx: { pv: -3, flag: "ganse:alerte" }, to: "P_ganse_fui" },
        flee: { label: "Le laisser filer", dom: "discretion", diff: 0, fx: { flag: "ganse:alerte" }, to: "P_ganse_fui" } } },
      { label: "Faire signe à la sergente Hallard, qui attend dehors avec ses hommes", if: { has: "hallard:allie" }, hide: { not: { has: "hallard:allie" } }, fx: { flag: ["gaspard:pris", "hallard:arrestation"] }, to: "P_ganse_pris" },
      { label: "Lui dire, sans le quitter des yeux, que la sergente Hallard et ses hommes attendent dehors", hide: { has: "hallard:allie" }, test: { dom: "social", diff: -10, label: "Bluff" },
        win: { via: "bluff", fx: { flag: "gaspard:pris" }, to: "P_ganse_pris" }, lose: { fx: { flag: "ganse:alerte" }, to: "P_ganse_fui" } },
      { label: "Te lever en silence et sortir", fx: { flag: "ganse:alerte" }, to: "P_ganse_laisse" },
    ] },
  P_ganse_pris: { act: "II", title: "La tour du Guet", place: "haute",
    fx: { meet: "gaspard" },
    text: [
      { if: { has: "hallard:arrestation" }, text: "Tu lèves la main. La porte du Bassin Bleu s'ouvre, et la sergente Hallard entre, avec deux hommes et une lanterne. Gaspard Ombreuil la regarde, puis toi. Il pose son couteau sur la table, la lame tournée vers lui, et il se lève de lui-même." },
      { via: "bluff", text: "Il te regarde longtemps. Il regarde la porte. Il fait le compte, comme il a fait tous les comptes de sa vie, et il pose sur la table, la lame tournée vers lui, le couteau qu'il tenait sous la table. « Allons-y », dit-il. Dehors, il n'y a personne. Il ne dit rien quand il le voit. Il marche devant toi, à travers toute la ville endormie, jusqu'à la tour du Guet, où la sergente Hallard descend en chemise, une chandelle à la main." },
      { if: { not: { any: [{ has: "hallard:arrestation" }, { via: "bluff" }] } }, text: "Le couteau tombe sur le plancher et glisse sous une table. Gaspard Ombreuil se tient le poignet, le souffle court, adossé au mur. Dans la salle, personne n'a bougé ; Maître Ouen essuie un pot. Tu lui lies les mains avec sa propre ceinture, et tu le mènes dehors, à travers toute la ville endormie, jusqu'à la tour du Guet, où la sergente Hallard descend en chemise, une chandelle à la main." },
      "On l'enferme au rez-de-chaussée, dans la cellule de dégrisement. Trois étages plus haut, Hugon Maupas dort, ou ne dort pas, et ne sait encore rien.",
      "La sergente Hallard regarde longtemps l'homme derrière la grille, en silence. Il soutient son regard. Puis elle se tourne vers toi.",
      "« L'audience est à la cloche, dit-elle. Vous parlerez. Moi, je le présenterai. » Elle se frotte les yeux. « Vingt-six ans de métier. Je l'ai enterré, cet homme. J'étais à l'enterrement. »",
    ],
    choices: [{ label: "Aller attendre le jour sur la place", to: "H_haute" }] },
  P_ganse_fui: { act: "II", title: "Le quai", place: "teinturiers",
    text: [
      "Il est plus rapide que tu ne l'aurais cru, pour un homme de son âge. Une table renversée, un pot qui éclate, un batelier qui jure, et la porte du Bassin Bleu qui bat dans la nuit.",
      "Quand tu arrives sur le quai, il reste l'eau noire, les barges qui se frottent contre les pilotis, et au bout du quai, la masse sombre de la Vouivre, tous feux éteints.",
      "Il ne reviendra pas au Bassin Bleu. Mais il n'a nulle part où aller, sauf là où sont ses tonneaux.",
    ],
    choices: [{ label: "Reprendre ton souffle sur le quai", to: "H_teint" }] },
  P_ganse_laisse: { act: "II", title: "La porte", place: "teinturiers",
    text: [
      "Tu te lèves. Il ne te retient pas. Quand tu passes la porte, tu sens son regard entre tes omoplates, comme une main posée là.",
      "Dehors, la nuit est froide. Derrière toi, à travers les planches, tu entends une chaise qu'on recule, et des pas lourds dans l'escalier.",
      "Il ne restera pas au Bassin Bleu. Mais il n'a nulle part où aller, sauf là où sont ses tonneaux.",
    ],
    choices: [{ label: "T'éloigner sur le quai", to: "H_teint" }] },

  // ------------------------------------------------------------------ the bell
  C_cloche: { act: "II", title: "La cloche du soir", place: "haute",
    fx: { quest: "II_enquete" },
    text: [
      { if: { has: "cloche:attendue" }, text: "Tu attends sous les arcades de l'Échevinage, le dos contre un pilier, en regardant l'aiguille de la grande horloge avancer vers six heures. La place se remplit lentement : on vient de tous les quartiers voir juger le batelier. Quand la cloche sonne enfin, six coups lents qui roulent jusqu'au port, la foule se tait d'un coup." },
      { if: { not: { has: "cloche:attendue" } }, text: "La cloche de l'Échevinage se met à sonner. Six coups, lents, qui descendent sur toute la ville et roulent le long des canaux jusqu'au port. Où que tu sois, tu les entends. Tu n'as plus le temps de rien : tu prends les escaliers de la Haute-Ville en courant." },
      "Sur la place, il y a des tanneurs et des lavandières, des orfèvres en manteau fourré, des bateliers, des enfants grimpés sur les bornes. Gervaise Maupas est au premier rang, dans sa robe noire du dimanche. Plus loin, seule, contre un pilier des arcades, une jeune fille en noir, un panier vide au bras.",
      { if: { has: "gaspard:pris" }, text: "La rumeur court déjà la place, d'une bouche à l'autre, sans que personne sache d'où elle vient : la sergente Hallard a quelqu'un dans la cellule du rez-de-chaussée, et elle ne veut dire à personne qui c'est." },
      "Les portes de la grande salle s'ouvrent.",
    ],
    choices: [{ label: "Entrer dans la grande salle de l'Échevinage", big: true, to: "C_audience" }] },
};
