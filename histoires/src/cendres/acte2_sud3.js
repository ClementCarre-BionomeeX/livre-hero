// Act II · the southern company, chapter 3, "Le Tournoi de la Paix" (first day): the parade, the masked knight whom
// everyone forgets between two bouts, the first jousts of the company's champion, and the night when the names of the
// champions are harvested. Lisandre leads ("tu"); the champion fights with the company's help (test helps).
var S = { act: "II", noLead: true };
function P(o) { return Object.assign({}, S, o); }
function champ(h) { return { has: "sud:champion=" + h }; }
var ANY_CHAMP = { any: [champ("ysolde"), champ("rodric"), champ("enfant"), champ("lisandre")] };
// The champion's fighting help: Ysolde and Rodric are the real thing; the child is brave and light; Lisandre is a singer.
var JOUTE = [{ if: champ("ysolde"), v: 35 }, { if: champ("rodric"), v: 35 }, { if: champ("enfant"), v: 15 }];
var CHAMP_NAME = [
  { if: champ("ysolde"), text: "Ysolde, sous un heaume fermé, d'azur à la mouette d'argent." },
  { if: champ("rodric"), text: "Rodric Trois-Cloches, sous les couleurs de Corvanne, que la foule siffle et applaudit à la fois." },
  { if: champ("enfant"), text: "L'enfant de Sauvelune, dans une cotte trop grande, sur un cheval de louage, d'azur à la mouette d'argent." },
  { if: champ("lisandre"), text: "Toi, inscrite à l'épreuve libre seulement, d'azur à la mouette d'argent. Les joutes, tu les regarderas." },
];
module.exports = {
  II_S3_matin: P({ title: "Le pré du Roi", place: "vasselin",
    text: [
      "Neuf jours ont passé. Neuf jours d'attente à l'Ancre, à regarder la Tour, à écouter les crieurs lire, chaque matin, une liste un peu plus longue de champions qui ne se sont pas présentés.",
      "Ce matin, le pré du Roi est noir de monde. Les tribunes sont pleines, les bannières claquent, on vend des beignets, des rubans, des paris. Il fait beau. On dirait une fête.",
      { if: { all: [ANY_CHAMP, { not: champ("lisandre") }] }, text: "Ton champion est inscrit sous un nom qui n'existe pas. Tous les soirs, le clerc a envoyé la liste à la Tour. Tous les matins, ton champion s'est réveillé en se souvenant de lui-même." },
      { if: champ("lisandre"), text: "Tu es inscrite sous un nom qui n'existe pas. Tous les soirs, le clerc a envoyé la liste à la Tour. Tous les matins, tu t'es réveillée en te souvenant de toi-même." },
      { if: { not: ANY_CHAMP }, text: "Personne, dans ta compagnie, n'est inscrit. C'est le dernier jour pour le faire, avant la première sonnerie." },
    ],
    choices: [
      { label: "Inscrire quelqu'un, maintenant", hide: ANY_CHAMP, to: "II_S3_inscrire" },
      { label: "Prendre place pour le défilé", hide: { not: ANY_CHAMP }, to: "II_S3_defile" },
    ] }),

  II_S3_inscrire: P({ title: "La dernière inscription", place: "vasselin",
    text: [
      "Le clerc a l'air épuisé. Il a des cernes jusqu'aux joues, et il ne te reconnaît pas. Il trempe sa plume.",
      "« Un nom, un blason, un parrain. » Il ajoute, sans lever les yeux, comme une chose qu'on dit à tout le monde : « Le vrai nom, s'il vous plaît. Les faux noms portent malheur, cette année. »",
    ],
    choices: [
      { label: "Inscrire Ysolde, sous un faux nom et un blason inventé", hide: { not: { present: "ysolde" } }, fx: { flag: ["sud:champion=ysolde", "sud:inscrit"] }, to: "II_S3_defile" },
      { label: "Inscrire Rodric, sous son vrai nom : il ne sait pas mentir", hide: { not: { present: "rodric" } }, fx: { flag: ["sud:champion=rodric", "sud:vrai_nom"] }, to: "II_S3_defile" },
      { label: "Inscrire l'enfant de Sauvelune, sous un faux nom", hide: { not: { present: "enfant" } }, fx: { flag: ["sud:champion=enfant", "sud:inscrit"] }, to: "II_S3_defile" },
      { label: "T'inscrire toi-même à l'épreuve libre, sous un faux nom", fx: { flag: ["sud:champion=lisandre", "sud:inscrit"] }, to: "II_S3_defile" },
    ] }),

  II_S3_defile: P({ title: "Le défilé", place: "vasselin",
    text: [
      "Les champions défilent devant la loge royale, au pas, lance haute. Cinquante-trois. On en attendait soixante-quatre.",
    ].concat(CHAMP_NAME).concat([
      "Dans la loge, la reine, en bleu, très droite, les yeux mi-clos. Elle sourit à chaque champion de la même façon. À sa droite, en gris, l'écharpe autour du cou, Mordace, qui prend des notes.",
      { if: { any: [{ has: "lisandre:ilan_dit" }, { has: "lisandre:ilan_ment" }] }, text: "En face, dans la tribune de Corvanne, les manteaux bleus. Ilan est au premier rang. Il te cherche des yeux dans la foule. Il te trouve." },
      { if: { has: "lisandre:ilan_livre" }, text: "En face, dans la tribune de Corvanne, les manteaux bleus. Il manque quelqu'un au premier rang. Tu sais qui." },
      "Le dernier champion passe sans bannière. Une armure d'argent mat, sans armoiries, et sur le visage, au lieu d'un heaume, un masque lisse, blanc, comme taillé dans de la glace. Le héraut cherche son nom sur sa liste, hésite, cherche encore. Il n'y a rien d'écrit.",
      "La foule regarde le chevalier au masque passer. Une seconde après, elle regarde déjà ailleurs.",
    ]),
    choices: [{ label: "La première joute", to: "II_S3_joute1" }] }),

  II_S3_joute1: P({ title: "Première joute", place: "vasselin",
    text: [
      { if: { not: champ("lisandre") }, text: "La lice, la barrière de bois au milieu, la foule. En face de ton champion, Messire Baudran de Clairval, un gros chevalier jovial qui salue la foule avec sa lance avant chaque course et qui a déjà gagné trois tournois. Trois courses. L'emporte le premier qui désarçonne l'autre, ou qui brise deux lances sur son écu." },
      { if: champ("lisandre"), text: "Tu n'es pas inscrite aux joutes. Tu regardes depuis la barrière. La première course oppose Messire Baudran de Clairval, gros et jovial, à un jeune seigneur de la côte qui tremble sur sa selle." },
    ],
    choices: [
      { label: "Courir la première lance", hide: champ("lisandre"), test: { dom: "combat", label: "Lance", help: JOUTE.concat([{ if: { present: "pie" }, v: 5 }]) },
        win: { fx: { flag: "sud3:j1", ep: ["perso", 800] }, to: "II_S3_joute1_ok" },
        lose: { fx: { flag: "sud3:j1_perdu" }, to: "II_S3_joute1_rate" } },
      { label: "Regarder les joutes, et regarder la loge", hide: { not: champ("lisandre") }, to: "II_S3_loge" },
    ] }),

  II_S3_joute1_ok: P({ title: "Clairval à terre", place: "vasselin",
    text: [
      { if: champ("ysolde"), text: "Deux courses. À la deuxième, la lance d'Ysolde prend Clairval en plein écu, un peu haut, exactement là où il faut, et il bascule par-dessus la croupe de son cheval avec un bruit de casserole. La foule hurle. Ysolde lève sa lance et ne relève pas sa visière." },
      { if: champ("rodric"), text: "Rodric ne sait pas jouter. Il le fait quand même, comme il fait tout, de face. À la troisième course, il casse sa lance sur Clairval, et Clairval tombe, plus de surprise que du choc. La foule ne sait pas si elle doit applaudir un Corvannais. Elle applaudit." },
      { if: champ("enfant"), text: "L'enfant tient à peine sa lance. À la troisième course, son cheval fait un écart, Clairval le manque, et la lance de l'enfant, qui pendait, se prend dans la sangle de Clairval. La selle tourne. Clairval glisse, lentement, et s'assoit dans le sable, l'air étonné. La foule rit, puis applaudit. Clairval aussi rit. Il vient lui serrer la main." },
    ],
    choices: [{ label: "La deuxième joute", to: "II_S3_joute2" }] }),

  II_S3_joute1_rate: P({ title: "Dans le sable", place: "vasselin",
    text: [
      "À la troisième course, la lance de Clairval frappe juste, et ton champion vide les étriers. Il se relève. Il n'a rien de cassé. La foule applaudit poliment, comme on applaudit un perdant.",
      "Clairval vient le saluer. « Bien tenu, dit-il. Il reste la mêlée. Dans la mêlée, on se rattrape. »",
    ],
    choices: [{ label: "Regarder la suite, et regarder la loge", to: "II_S3_loge" }] }),

  II_S3_joute2: P({ title: "Deuxième joute", place: "vasselin",
    text: [
      "Au deuxième tour, le tirage met ton champion face au chevalier au masque.",
      "Tu le sais parce que le héraut le crie. Puis tu regardes la lice, et l'adversaire de ton champion t'échappe. Puis tu le vois, en argent mat, à l'autre bout de la lice, et tu te souviens. Tu te souviens que tu avais oublié.",
      "Tu sors de ta manche un bout de charbon et tu écris sur ta paume : *le masque.*",
    ],
    choices: [
      { label: "Courir contre lui", test: { dom: "combat", label: "Lance", help: JOUTE.concat([{ if: { not: { has: "sud3:j2" } }, v: -15 }]) },
        win: { fx: { flag: "sud3:j2", ep: ["perso", 1200] }, to: "II_S3_joute2_ok" },
        lose: { fx: { flag: "sud3:j2_perdu" }, to: "II_S3_joute2_rate" } },
    ] }),

  II_S3_joute2_ok: P({ title: "Le masque tombe", place: "vasselin",
    text: [
      "À la troisième course, les deux lances se brisent en même temps. Le chevalier au masque vacille. Son masque glisse, tombe dans le sable, et se brise comme une vitre.",
      "Dessous, un visage jeune, très pâle, avec des yeux d'un gris presque blanc. Pendant une seconde, toute la tribune le voit. Puis il ramasse un éclat de masque, le pose sur sa joue, et la tribune ne voit plus rien. Le héraut proclame ton champion vainqueur d'un adversaire qu'il ne nomme pas.",
      "En sortant de la lice, le chevalier passe près de toi. Il te regarde. Il regarde ta main, où c'est écrit. Il sourit.",
    ],
    choices: [{ label: "Le suivre", to: "II_S3_masque" }] }),

  II_S3_joute2_rate: P({ title: "Le masque", place: "vasselin",
    text: [
      "Il ne court pas : il glisse. Sa lance prend ton champion au défaut de l'épaule, et le jette dans le sable, très proprement, presque doucement. Il ne se retourne pas pour voir.",
      "En sortant de la lice, il passe près de toi. Il te regarde. Il regarde ta main, où c'est écrit. Il sourit.",
    ],
    choices: [{ label: "Le suivre", to: "II_S3_masque" }] }),

  II_S3_loge: P({ title: "La loge", place: "vasselin",
    text: [
      "Tu regardes la loge royale plus que les joutes. La reine somnole. Mordace écrit. De temps en temps, un page vient lui apporter une feuille, et il la lit, et il la met dans un coffret à ses pieds.",
      "Au deuxième tour, le chevalier au masque court contre Clairval et le jette dans le sable sans effort. Tu le regardes passer. Une seconde plus tard, tu te demandes qui a gagné. Tu te souviens que tu avais oublié.",
      "Tu sors de ta manche un bout de charbon, et tu écris sur ta paume : *le masque.*",
      "En sortant de la lice, il passe près de la barrière, près de toi. Il regarde ta main. Il sourit.",
    ],
    choices: [{ label: "Le suivre", to: "II_S3_masque" }] }),

  II_S3_masque: P({ title: "Derrière les tentes", place: "vasselin",
    text: [
      "Il t'attend derrière les tentes des champions, assis sur un tonneau, le masque sur les genoux. Il a l'air très jeune. Il a l'air très fatigué.",
      "« Tu as écrit, dit-il. C'est malin. Ça tiendra jusqu'à ce que tu te laves les mains. » Il a un accent inconnu, étranger à l'Esquarre comme à Corvanne. Les voyelles trop longues, comme on parle en montagne.",
      "« Je n'ai pas de nom. Pas ici. Là d'où je viens, j'en avais un. Ici, le monde ne le garde pas. Je suis venu voir celui qui écrit, là-haut, dans la Tour. Le tournoi, c'est la seule porte qu'il ouvre. »",
      "Il te regarde. « Toi, tu es celle qui a chanté à Pallanche. Tu as une voix qui reste. J'aimerais bien rester, moi aussi, un peu. »",
    ],
    choices: [
      { label: "Lui donner un souvenir, pour qu'il ait de quoi s'accrocher à toi : la reine qui rit", tag: "Souvenir donné", stain: true, if: { souv: "lisandre:isaure" }, why: "Tu ne l'as plus.",
        fx: { souv: "lisandre:isaure", flag: "sansnom:ancre_lisandre", ep: ["perso", 2000] }, to: "II_S3_masque_ancre" },
      { label: "Lui donner un souvenir : ta première chanson commandée, celle qui a fait pendre un duc", tag: "Souvenir donné", stain: true, if: { souv: "lisandre:premiere" }, why: "Tu ne l'as plus.",
        fx: { souv: "lisandre:premiere", flag: "sansnom:ancre_lisandre", ep: ["perso", 2000] }, to: "II_S3_masque_ancre" },
      { label: "Lui demander ce qu'il veut à Mordace", to: "II_S3_masque_veut" },
      { label: "Le laisser. Tu as assez de fantômes", to: "II_S3_masque_part" },
    ] }),

  II_S3_masque_ancre: P({ title: "Ancré", place: "vasselin",
    text: [
      "Tu lui tends la main. Il la prend. Il ferme les yeux. Tu sens quelque chose partir, comme un mot qu'on a sur le bout de la langue et qui s'en va.",
      "Quand il rouvre les yeux, il a l'air plus réel. Plus lourd. Il fait de l'ombre, maintenant, et tu comprends ce qui te gênait chez lui.",
      "« Merci », dit-il. Il regarde ta paume, où le charbon a coulé. « Tu n'en as plus besoin. Tu te souviendras de moi. Moi, je ne sais pas encore de quoi je vais me souvenir. C'est à toi, ce que tu m'as donné. Je le garderai bien. »",
    ],
    choices: [{ label: "Lui demander ce qu'il veut à Mordace", to: "II_S3_masque_veut" }] }),

  II_S3_masque_veut: P({ title: "Ce qu'il veut", place: "vasselin",
    fx: { flag: "sud3:masque_parle" },
    text: [
      "« Il a quelque chose à mon père, dit-il. Dans son coffre. Un nom. Le seul que mon père n'a pas pu garder. » Il remet son masque. « Le vainqueur entre dans la grande salle des Archives, devant le coffre. Je compte gagner. »",
      "Puis, par-dessus son épaule, en s'en allant : « Si tu gagnes avant moi, ouvre-le. Tu verras. »",
    ],
    choices: [{ label: "Revenir au pré", to: "II_S3_soir" }] }),

  II_S3_masque_part: P({ title: "Le tonneau vide", place: "vasselin",
    text: ["Tu te détournes. Quand tu te retournes, il n'y a personne sur le tonneau. Tu regardes ta paume. Il y a écrit *le masque*, au charbon. La raison t'échappe. Tu t'essuies la main sur ta robe."],
    choices: [{ label: "Revenir au pré", to: "II_S3_soir" }] }),

  II_S3_soir: P({ title: "Le camp des champions", place: "vasselin",
    text: [
      "Le soir, le pré du Roi devient un camp : les tentes des champions, les feux, les écuyers qui graissent les cuirs. Demain, la mêlée. Après-demain, l'épreuve libre, et la grâce de la reine.",
      { first: true, if: { has: "sud3:j2" }, text: "Ton champion a gagné ses deux joutes. On le salue en passant devant sa tente. Un marchand de vin lui a fait porter un tonneau." },
      { first: true, if: { all: [{ has: "sud3:j1" }, { not: { has: "sud3:j2" } }] }, text: "Ton champion a gagné une joute et perdu l'autre. Ce n'est pas assez pour la grâce. Il reste la mêlée." },
      { first: true, if: { has: "sud3:j1_perdu" }, text: "Ton champion a perdu au premier tour. Il reste la mêlée. Dans la mêlée, on se rattrape." },
      "Tu restes jusqu'à la nuit. Tu veux voir ce qui vient prendre les noms.",
      { first: true, if: { has: "sud:vrai_nom" }, text: "Rodric a été inscrit sous son vrai nom. Ce soir, la liste partira à la Tour avec lui dedans." },
    ],
    choices: [
      { label: "Veiller devant la tente de la compagnie", to: "II_S3_veille" },
      { label: "Les écuries, d'où monte un hennissement", hide: { seen: "II_Q_ecuries" }, to: "II_Q_ecuries" },
      { label: "Veiller devant la tente du clerc, d'où part la liste", to: "II_S3_clerc" },
      { label: "La femme au châle rouge, qui tire les cartes", hide: { seen: "II_S3_cartes" }, to: "II_S3_cartes" },
      { label: "Un écuyer assis devant une tente verte", hide: { seen: "II_S3_ecuyer" }, to: "II_S3_ecuyer" },
      { label: "Le héraut, qui répète derrière la tribune", hide: { seen: "II_S3_heraut" }, to: "II_S3_heraut" },
      { label: "Un vieux chevalier, seul devant une tente rapiécée", hide: { seen: "II_S3_vaincu" }, to: "II_S3_vaincu" },
      { label: "Des enfants qui jouent au tournoi entre les feux", hide: { seen: "II_S3_enfants" }, to: "II_S3_enfants" },
    ] }),

  II_S3_veille: P({ title: "Minuit", place: "vasselin",
    text: [
      "Vers minuit, les chiens du camp se taisent, tous ensemble. Puis, entre les tentes, une silhouette blanche, haute et maigre, qui marche sans bruit et se penche sur chaque tente, comme on se penche sur un berceau.",
      "Un Glaneur. Il s'arrête devant une tente, deux tentes avant la tienne. Il passe la main par la fente de la toile. Dedans, quelqu'un soupire dans son sommeil. Le Glaneur se redresse, et repart.",
      { if: { has: "sud:vrai_nom" }, text: "Il va vers la tente de Rodric. Il sait où elle est." },
    ],
    choices: [
      { label: "L'arrêter", to: "II_S3_glaneur" },
      { label: "Le suivre, de loin, quand il partira", test: { dom: "discretion", label: "Filature", help: [{ if: { present: "pie" }, v: 15 }, { if: { has: "sud:crieur" }, v: 10 }] },
        win: { fx: { flag: "sud3:chemin_glaneur", ep: ["perso", 1200] }, to: "II_S3_suivre" },
        lose: { to: "II_S3_glaneur" } },
    ] }),

  II_S3_glaneur: P({ title: "Entre les tentes",
    combat: { title: "Le Glaneur du camp", enemies: ["glaneur_petit"], terrain: "bati", range: "contact",
      flee: { dom: "discretion", label: "Se jeter sous un chariot", to: "II_S3_nuit" },
      win: { fx: { ep: ["seance", 800], flag: "sud3:glaneur_battu" }, to: "II_S3_nuit" },
      lose: { fx: { flag: "sud3:glaneur_passe" }, to: "II_S3_nuit" } },
    text: ["La chose se retourne vers toi. Elle n'a pas de visage, et pourtant tu sais qu'elle te regarde. Elle tend la main, comme elle l'a tendue dans la tente, vers ta bouche."],
    choices: [] }),

  II_S3_clerc: P({ title: "La liste", place: "vasselin",
    text: [
      "La tente du clerc est éclairée. Il recopie la liste des champions du jour, lentement, en tirant la langue. Vers onze heures, un garde en noir entre, prend la feuille, la roule, la glisse dans un étui de cuir, et repart vers la ville.",
    ],
    choices: [
      { label: "Suivre le garde noir", test: { dom: "discretion", label: "Filature", help: [{ if: { present: "pie" }, v: 15 }] },
        win: { fx: { flag: "sud3:chemin_garde", ep: ["perso", 1000] }, to: "II_S3_suivre_garde" },
        lose: { to: "II_S3_nuit" } },
      { label: "Entrer, une fois le garde parti, et parler au clerc", to: "II_S3_clerc_parle" },
    ] }),

  II_S3_clerc_parle: P({ title: "Le clerc", place: "vasselin",
    text: [
      "Le clerc lève les yeux. Il a pleuré. « Je sais ce que ça fait, dit-il, avant que tu aies rien dit. Je ne suis pas idiot. Onze d'abord. Puis dix-sept. Je les inscris, je les envoie, et le lendemain ils ne savent plus monter à cheval. » Il se mouche. « Si je n'envoie pas la liste, c'est moi qu'on oublie. J'ai une femme. »",
      "Il te tend sa liste du jour, la copie. « Prenez-la. Faites-en ce que vous voulez. Je n'en peux plus de la savoir par cœur. »",
    ],
    choices: [{ label: "Prendre la copie", fx: { item: "liste_champions", flag: "sud3:clerc_ami" }, to: "II_S3_nuit" }] }),

  II_S3_suivre: P({ title: "Le chemin du Glaneur", place: "vasselin",
    text: [
      "Il ne va pas à la Tour par la grande porte. Il traverse la ville basse, longe le port, entre dans les égouts par une grille de la halle aux poissons, et tu le perds dans le noir. Mais tu as vu la grille. Et en levant les yeux, tu vois, juste au-dessus, la Tour, droite comme un doigt.",
    ],
    choices: [{ label: "Rentrer", to: "II_S3_nuit" }] }),

  II_S3_suivre_garde: P({ title: "Le chemin du garde", place: "vasselin",
    text: [
      "Le garde ne prend pas la grande rue. Il passe par la ruelle des Tanneurs, frappe trois coups à une porte basse, au pied de la Tour, côté jardin. On lui ouvre. Tu entends, avant que la porte ne se referme, quelqu'un qui demande : « Combien ? » et le garde qui répond : « Dix-neuf. »",
      "Tu retiens la porte, les trois coups, et le jardin.",
    ],
    choices: [{ label: "Rentrer", to: "II_S3_nuit" }] }),

  II_S3_nuit: P({ title: "L'aube avant la mêlée", place: "vasselin",
    text: [
      "À l'aube, le crieur passe dans le camp et lit des noms. Des champions qui, ce matin, ne se souviennent plus qu'ils sont champions. Il y en a dix-neuf.",
      { if: { all: [{ has: "sud:vrai_nom" }, { not: { has: "sud3:glaneur_battu" } }] }, text: "Rodric est assis devant sa tente, sa hache sur les genoux. Il la regarde comme un outil dont il ne sait plus l'usage. Il te demande, poliment, si c'est à lui. Il se souvient de toi. Il ne se souvient plus de pourquoi il est à Vasselin." },
      { if: { all: [{ has: "sud:vrai_nom" }, { has: "sud3:glaneur_battu" }] }, text: "Rodric est assis devant sa tente, sa hache sur les genoux. Il a dormi comme un enfant. Il ne sait pas ce qui est passé à côté de lui cette nuit." },
      { if: { all: [{ not: { has: "sud:vrai_nom" } }, { not: champ("lisandre") }] }, text: "Ton champion n'est pas sur la liste. Le faux nom a tenu une nuit de plus." },
      { if: champ("lisandre"), text: "Tu n'es pas sur la liste. Le faux nom a tenu une nuit de plus." },
      "La mêlée est à midi.",
    ],
    choices: [
      { label: "Midi", hide: { all: [{ has: "sud:vrai_nom" }, { not: { has: "sud3:glaneur_battu" } }] }, fx: { flag: "ch2:sud:3", resume: "II_S4_melee", catchup: 7, catchupAll: true, catchupWhy: "le Tournoi de la Paix" }, to: "C2_carrefour", big: true },
      { label: "Midi", hide: { not: { all: [{ has: "sud:vrai_nom" }, { not: { has: "sud3:glaneur_battu" } }] } }, fx: { flag: ["ch2:sud:3", "rodric:oublie_champion"], resume: "II_S4_melee", catchup: 7, catchupAll: true, catchupWhy: "le Tournoi de la Paix" }, to: "C2_carrefour", big: true },
    ] }),
};
