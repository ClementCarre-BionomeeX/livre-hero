// Route events on the Combes path (region montagne). Each one comes back to the journey with { back: "@route" }.

var ROUTE = "@route";

module.exports = {
  // ------------------------------------------------------------------ wolves
  E_loups: { title: "Les loups",
    text: [
      "Le sergent s'arrête net et lève la main. Dans le bois de mélèzes, à trente pas, quelque chose de gris passe entre deux troncs. Puis un second. Ils ne courent pas. Ils marchent à votre allure, de l'autre côté des arbres, comme des gens qui font semblant de ne pas vous suivre.",
      "« Fin d'hiver, dit le sergent tout bas. Ils ont faim. Ils ne sont pas idiots non plus. » Il dégage sa hallebarde de son épaule. Les bêtes se sont arrêtées. L'une d'elles s'assoit dans la neige et vous regarde.",
      { with: "lise", text: "Lise s'est collée contre ton flanc. Elle ne tremble pas. Elle compte les loups sur ses doigts, et te montre trois." },
    ],
    choices: [
      { label: "Faire face et crier, pour qu'ils voient que vous n'êtes pas des proies", test: { dom: "nature", diff: 0, label: "Tenir les loups à distance" }, win: { fx: { ep: ["perso", 300] }, to: "E_loups_fuient" }, lose: { to: "E_loups_combat" } },
      { label: "Leur abandonner ce que tu as à manger", if: { food: { min: 1 } }, why: "Tu n'as rien à leur jeter.", fx: { food: -1 }, to: "E_loups_pain" },
      { label: "Prendre les devants", to: "E_loups_combat" },
    ] },
  E_loups_fuient: { title: "Les loups",
    text: [
      "Tu cries. Le sergent cogne le fer de sa hallebarde contre une pierre, et le bruit claque dans le vallon comme un coup de feu. La bête assise se lève, sans hâte, et retourne dans les arbres. Les autres la suivent.",
      "Vous marchez encore une demi-heure en regardant derrière vous. Le sergent ne parle plus de rien. À un moment, il dit seulement : « Vous avez déjà fait ça. » Ce n'est pas une question, et tu n'as pas de réponse.",
    ],
    choices: [{ back: ROUTE }] },
  E_loups_pain: { title: "Les loups",
    text: [
      "Tu lances ton pain le plus loin que tu peux, du côté du ravin. Les loups hésitent, puis l'un d'eux y va, et les autres derrière, et ils se battent pour une miche gelée avec des grondements qui font mal à entendre.",
      "Vous en profitez pour passer le col de la Roche-Fendue. Le sergent te regarde de côté. « C'était mon dîner aussi, ça », dit-il. Puis, un peu plus loin : « Bien vu quand même. »",
    ],
    choices: [{ back: ROUTE }] },
  E_loups_combat: { title: "Les loups",
    combat: { title: "Les loups du col", enemies: [{ id: "loup", n: 3 }], terrain: "nature", spare: true,
      win: { fx: { ep: ["perso", 500], item: "peau" }, to: "E_loups_apres" }, lose: { fx: { pv: -2 }, to: "E_loups_morsure" },
      flee: { label: "Reculer jusqu'au rocher et tenir", dom: "nature", diff: 0, to: "E_loups_fuient" } },
    text: [
      "Le premier loup vient bas, par le côté, là où la neige est la plus profonde et où tu enfonces jusqu'au genou. Les deux autres attendent qu'il t'ait fait tomber.",
    ] },
  E_loups_apres: { title: "Après les loups",
    text: [
      "La neige est piétinée et rouge. Le sergent dépouille la plus grosse bête, sans dégoût, avec des gestes de paysan. « La peau, ça se vend, dit-il. Et ce soir on dira qu'on a été braves. » Il te tend la fourrure roulée.",
      "Tu as les mains qui tremblent, maintenant que c'est fini. La gauche plus que la droite. La cicatrice tire sous le bandage.",
    ],
    choices: [{ back: ROUTE }] },
  E_loups_morsure: { title: "La morsure",
    text: [
      "C'est le sergent qui les met en fuite, en fin de compte, avec de grands moulinets et des jurons. Toi, tu es assis dans la neige, le mollet ouvert, et tu regardes ton sang fumer dans le froid.",
      "Il te bande la jambe avec ton propre mouchoir, serré à faire mal. « Ça ira, dit-il. Ça ira si on avance. » Vous avancez.",
    ],
    choices: [{ back: ROUTE }] },

  // ------------------------------------------------------------------ the peddler
  E_colporteur: { title: "Le colporteur",
    text: [
      "Un homme descend vers vous avec une hotte plus haute que lui, et un bâton ferré à chaque main. Un colporteur des vallées d'en face, qui passe le col dès que le col se laisse passer. Il a du fil, des aiguilles, des almanachs, des images pieuses et du tabac.",
      "Il te dévisage un peu trop longtemps. « Je vous ai vu, vous, dit-il enfin. À la Croix-des-Gélines, l'autre semaine, le soir de la grande tempête. Vous montiez. Ou vous descendiez. Vous couriez, en tout cas. »",
    ],
    choices: [
      { label: "« J'étais seul ? »", fx: { flag: "colporteur:seul" }, to: "E_colporteur_seul" },
      { label: "Lui acheter quelque chose", to: "E_colporteur_achat" },
      { label: "« Vous vous trompez d'homme »", back: ROUTE },
    ] },
  E_colporteur_seul: { title: "Le colporteur",
    text: [
      "Il réfléchit, la main sur la bretelle de sa hotte. « Vous étiez seul quand je vous ai vu, oui. Vous criiez quelque chose. Un nom, je crois. Mais avec le vent... » Il hausse les épaules. « J'ai cru que vous aviez perdu votre chien. »",
      "Le sergent te regarde. Tu ne dis rien. Le colporteur reprend sa descente, en sifflant entre ses dents.",
    ],
    choices: [{ back: ROUTE }] },
  E_colporteur_achat: { title: "La hotte",
    text: [
      "Il pose sa hotte dans la neige et l'ouvre comme une armoire. Tout est rangé dans des tiroirs minuscules, chaque chose à sa place. Il a de l'onguent de marmotte « pour les engelures et les brûlures », et une flasque d'eau-de-vie de gentiane.",
      { if: { gold: { max: 0 } }, text: "Tu n'as plus un sou : le prévôt a gardé ta bourse. Le colporteur le comprend à ta façon de regarder. « On peut toujours troquer », dit-il, et il jette un œil à ce que tu portes." },
    ],
    choices: [
      { label: "L'onguent (15 sous)", hide: { gold: { max: 0 } }, if: { gold: { min: 15 } }, why: "Tu n'as pas quinze sous.", fx: { gold: -15, item: "onguent" }, to: "E_colporteur_fin" },
      { label: "L'eau-de-vie (10 sous)", hide: { gold: { max: 0 } }, if: { gold: { min: 10 } }, why: "Tu n'as pas dix sous.", fx: { gold: -10, item: "eau_de_vie" }, to: "E_colporteur_fin" },
      { label: "Lui échanger la peau de loup contre l'onguent", if: { item: "peau" }, why: "Tu n'as rien qu'il voudrait.", fx: { drop: "peau", item: "onguent" }, to: "E_colporteur_fin" },
      { label: "Lui échanger ton couteau contre l'eau-de-vie", hide: { not: { item: "couteau" } }, fx: { drop: "couteau", item: "eau_de_vie" }, to: "E_colporteur_fin" },
      { label: "Rien, merci", back: ROUTE },
    ] },
  E_colporteur_fin: { title: "La hotte",
    text: [
      "Il compte les pièces, referme ses tiroirs un par un, et remet sa maison sur son dos. « Que Dieu vous garde du vent », dit-il, ce qui est la formule d'ici, et il s'en va.",
    ],
    choices: [{ back: ROUTE }] },

  // ------------------------------------------------------------------ the cross
  E_croix: { title: "La Croix-des-Gélines",
    text: [
      "Le chemin passe au pied d'une croix de fer forgé, plantée sur un rocher, avec un petit toit de planches pour l'abriter. Les gens d'ici la saluent en passant. Le sergent se signe sans y penser.",
      "Toi, tu t'arrêtes. Tu n'as pas décidé de t'arrêter. Le rocher, la croix, le toit de planches, la pente qui part à gauche vers le bois : tout cela, tu l'as vu dans le noir, sous la neige qui tombait de côté.",
      { if: { has: "lise:connue" }, text: "Et là, tu en es sûr, une petite main a lâché la tienne." },
    ],
    choices: [
      { label: "Rester un moment", fx: { flag: "croix:vue", ep: ["perso", 300] }, to: "E_croix_reste" },
      { label: "Reprendre la marche", back: ROUTE },
    ] },
  E_croix_reste: { title: "La Croix-des-Gélines",
    text: [
      "Le sergent attend, appuyé sur sa hallebarde. Il a la politesse de regarder ailleurs. Au pied de la croix, des gens ont laissé des choses : un ruban, une pièce, un épi de seigle tressé. Et, coincé entre deux pierres, un sabot d'enfant, tout petit, noirci, que personne n'a osé ramasser.",
      { with: "lise", text: "Lise s'approche, regarde le sabot, et le laisse où il est. Elle te prend la main, la gauche, celle du bandage, et la serre fort. Elle ne lâche pas, cette fois." },
      { if: { not: "lise:connue" }, text: "Tu ne sais pas à qui il est. Tu sais seulement qu'il ne faut pas le prendre." },
    ],
    choices: [{ back: ROUTE }] },

  // ------------------------------------------------------------------ the avalanche
  E_avalanche: { title: "Le couloir",
    text: [
      "Le chemin traverse un couloir, une longue coulée de neige entre deux éperons rocheux, qui descend droit au torrent. La neige y est lourde, mouillée, gonflée par le redoux. Au-dessus, une corniche pend comme une lèvre.",
      "« On passe un par un, dit le sergent. Et on ne parle pas. » Il te regarde. « Vous êtes arpenteur. Vous savez lire une pente, non ? »",
    ],
    choices: [
      { label: "Lire la pente et choisir le passage", test: { dom: "savoir", diff: 0, label: "Lire le couloir" }, win: { fx: { ep: ["perso", 300] }, to: "E_avalanche_passe" }, lose: { fx: { pv: -3 }, to: "E_avalanche_coulee" } },
      { label: "Faire le grand détour par le bois, une heure de plus", to: "E_avalanche_detour" },
    ] },
  E_avalanche_passe: { title: "Le couloir",
    text: [
      "Tu vois le passage avant de le chercher : la ligne où la neige a été soufflée et tassée, sous le rocher, là où la corniche ne surplombe pas. Tu y passes le premier. Le sergent suit en marchant dans tes traces.",
      "De l'autre côté, il souffle comme un bœuf. Derrière vous, avec un bruit de drap qu'on déchire, la corniche se détache et la moitié du couloir descend au torrent, sans hâte, dans un nuage blanc.",
      "Le sergent la regarde partir. « Bon, dit-il. Je ne dirai pas au prévôt que vous m'avez sauvé la vie. Il croirait que c'est un complot. »",
    ],
    choices: [{ back: ROUTE }] },
  E_avalanche_coulee: { title: "La coulée",
    text: [
      "Tu as mal choisi. La neige part sous tes pieds, toute la plaque d'un coup, et tu glisses avec elle, assis, puis couché, puis tu ne sais plus. Ça ne dure pas. Une dizaine de pas, peut-être. Ça suffit pour te remplir la bouche de neige et te tordre l'épaule contre un rocher.",
      "Le sergent te tire par le col pour te sortir. Il ne dit rien. Il a eu peur, et ça l'a mis en colère.",
    ],
    choices: [{ back: ROUTE }] },
  E_avalanche_detour: { title: "Le détour",
    text: [
      "Vous prenez par le bois. C'est plus long, plus raide, et le sergent rumine. Mais quand vous ressortez sur le chemin, une heure plus tard, le couloir a déjà parlé : une langue de neige grise et sale barre le passage jusqu'au torrent.",
      "Le sergent la regarde longtemps. Puis il partage son pain avec toi, sans un mot, ce qui chez lui tient lieu de remerciement.",
    ],
    choices: [{ back: ROUTE }] },
};
