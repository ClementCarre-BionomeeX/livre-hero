// Ilde, the scenes added: the gallery seen alone with Anselme's compass, the spring of forty years ago, Bastien
// overtaking her on the road, the tisane for Fulbert, the young guards told the truth, the bornes of the road at night,
// the doors of the quarter and a birth on the stairs of the Côte.
var A = "I";
module.exports = {
  // ------------------------------------------------------------------ at the Maison des Vannes
  I_galerie: { act: A, title: "Le compas d'Anselme", place: "digue", fx: { learn: "veine_vue", flag: "ilde:vu_veine", time: 0.5 },
    text: [
      "« Je veux la voir », dis-tu. Anselme te tend son compas de fer et une lanterne sourde. Les soixante marches de l'escalier intérieur sont devenues trop hautes pour lui. Il te dit où poser les pointes.",
      "La galerie basse est un couloir de pierre qui sent la cave et la rivière. Il y fait plus chaud que dehors, d'une tiédeur de chambre de malade ; l'eau ruisselle partout, sur les murs, sous tes semelles, dans les rigoles, et ta lanterne sourde allume sur la paroi des luisances qui bougent quand tu bouges.",
      "La veine court dans la paroi de gauche, du sol à la voûte. Elle est couverte de plâtres de toutes les couleurs, posés l'un sur l'autre, comme des pansements sur une vieille plaie. Tous suintent. Tu poses les pointes du compas comme il l'a dit, sur les deux clous de cuivre plantés de part et d'autre. Deux doigts.",
      "Tu as vu des plaies. Tu sais distinguer celles qu'on soigne de celles qu'on panse en attendant. Ici, on a pansé pendant trois ans.",
    ],
    choices: [{ label: "Remonter auprès d'Anselme", back: "I_maison" }] },
  I_printemps: { act: A, title: "Le printemps du lavoir", place: "digue", fx: { flag: "ilde:souvenir" },
    text: [
      "Tu poses la main sur l'accoudoir de son fauteuil. Il la regarde.",
      "Tu avais dix-huit ans. Tu portais le linge de ta mère au lavoir, un panier trop lourd pour toi. Un garçon maigre, en veste de garçon de vannes, te l'a pris des mains sans rien demander, et il l'a porté jusqu'au bassin. Il est revenu le lundi suivant, et tous les lundis jusqu'à la Saint-Jean.",
      "À la Saint-Jean, son père est tombé malade. Il est monté à la Maison des Vannes pour le remplacer « quelques semaines ». Il y est resté cinquante ans. Tu es montée le voir deux fois. La troisième, il avait épousé la fille du meunier de Malbuisson, qui pouvait vivre là-haut, au bord de l'eau. Toi, tu avais la boutique de ton père.",
      "« Je pensais à ce panier, dit Anselme, sans quitter le lac des yeux. Tout à l'heure, quand je t'ai vue monter. »",
    ],
    choices: [{ label: "Lui serrer la main, et revenir à la clé", back: "I_maison" }] },

  // ------------------------------------------------------------------ the road down
  I_route: { act: A, title: "La sixième borne", place: "berge", fx: { time: 0.25 },
    text: [
      "Tu descends la route de la Digue à petits pas, le paquet sous ton manteau. Il fait noir. Les bornes blanches sortent de la nuit une à une, pâles et droites comme les pierres d'un cimetière de campagne.",
      "À la sixième borne, des pas pressés te rattrapent. Quelqu'un court derrière toi, sans lanterne, sur l'herbe du bas-côté. Tu te retournes. Il te dépasse sans ralentir, à trois pas, la tête dans le col.",
      "Tu reconnais la silhouette, l'épaule gauche plus basse que l'autre : Bastien Vellard. Il dormait sur le banc il y a une heure. Il court vers la ville comme un homme qui a rendez-vous.",
    ],
    choices: [
      { label: "L'appeler par son nom", to: "I_bastien_route" },
      { label: "Le laisser filer", to: "I_descente" },
    ] },
  I_bastien_route: { act: A, title: "Le fils", place: "berge", fx: { flag: "ilde:bastien_route", time: 0.25 },
    text: [
      "« Bastien ! »",
      "Il s'arrête. Il se retourne lentement. Dans le noir, son visage t'échappe ; tu vois sa respiration, une petite fumée blanche, rapide.",
      "« Madame Saunier. » Sa voix est gaie, trop gaie. « Je descends jouer. Je joue tous les soirs, vous savez. Mon père vous l'a dit, je suppose. »",
      "« Ton père va mourir, Bastien. Cette semaine, ou la suivante. Il t'aime. Il n'a jamais su te le dire autrement qu'en payant. »",
      "Il laisse passer ta phrase. La fumée blanche s'arrête, une seconde. Puis il rit, un rire de taverne, et il repart en courant vers les lumières de Corvèze.",
    ],
    choices: [{ label: "Reprendre la route", to: "I_descente" }] },

  // ------------------------------------------------------------------ the neighbour, otherwise
  I_tisane: { act: A, title: "Une tisane", place: "foulons", fx: { flag: "fulbert:dort", time: 0.5 },
    text: [
      "« Tu as l'air gelé, voisin. Je te fais une tisane. »",
      "Tu mets l'eau à chauffer sur le petit réchaud du comptoir. Tu prends le bocal de tilleul, puis, de l'autre main, sans te retourner, le flacon brun du troisième tiroir. Quarante ans de métier : tes doigts comptent seuls. Douze gouttes. Assez pour qu'un homme de son poids dorme jusqu'au matin. Assez peu pour qu'il se réveille.",
      "Fulbert boit en parlant de son indigo. Il bâille au milieu d'une phrase. Il s'excuse. Il rentre chez lui en se tenant au chambranle.",
      "Sa fenêtre s'éteint un quart d'heure après. Tu as endormi ton voisin de vingt ans. Ton père disait : *Le jour où tu soigneras quelqu'un contre lui, ferme boutique.* Tu laisses la boutique ouverte.",
    ],
    choices: [{ label: "Attendre deux heures", to: "I_attente", via: "dort" }] },

  // ------------------------------------------------------------------ the truth to the young guards
  I_gardes: { act: A, title: "Deux jeunes du guet", place: "berge", fx: { flag: ["route:pont", "colin:aide"], time: 0.5 },
    text: [
      "Tu leur dis tout. La digue, la veine, l'orage, la vanne de fond. Le vieux Vellard qui attend là-haut. Tu leur dis : vos mères habitent où ?",
      "Le plus jeune s'appelle Colin. Sa mère vend des beignets sur la place du Lavoir. L'autre est d'un village de la vallée, en aval. Ils se regardent.",
      "« Le paquet, on doit le rapporter, madame, dit Colin. Le capitaine compte. » Il a les larmes aux yeux, de froid ou d'autre chose. « Mais à deux heures, on frappera aux portes avec vous. Ça, il ne l'a pas défendu. »",
      "Ils te ramènent chez toi. Le paquet part vers la Haute-Ville sous le bras de l'autre garçon. Colin reste sur ta marche, à attendre deux heures avec toi.",
    ],
    choices: [{ label: "Attendre deux heures", to: "I_attente", via: "gardes" }] },

  // ------------------------------------------------------------------ the road, alone
  I_bornes: { act: A, title: "Dix bornes", place: "berge", fx: { time: 0.5 },
    text: [
      "À la quatrième borne, tes genoux refusent. Tu t'assois sur la pierre blanche, le paquet sur les cuisses. Le vent te mord les oreilles. La Sorge gronde en contrebas.",
      "Dans la poche de ton manteau, il y a un flacon de sel de corne de cerf et une fiole de teinture de coca, que tu gardes pour les accouchements qui durent. Elle donne trois heures de jambes, et elle les reprend le lendemain, avec les intérêts.",
    ],
    choices: [
      { label: "Boire la teinture de coca", to: "I_bornes_coca", fx: { flag: "ilde:coca" } },
      { label: "Te reposer un quart d'heure, et repartir", to: "I_bornes_repos", fx: { time: 0.5 } },
    ] },
  I_bornes_coca: { act: A, title: "Trois heures de jambes", place: "berge", fx: { time: 0.5 },
    text: [
      "C'est amer, et cela brûle. Au bout de cinq minutes, ton cœur bat plus vite. Au bout de dix, tes genoux se taisent. Tu te lèves, et tu marches comme à quarante ans, le paquet contre la poitrine.",
      "Les bornes défilent. Cinq, six, sept. Tu sais exactement ce que tu paieras demain. Tu as fait payer cela à d'autres, pour de moins bonnes raisons.",
    ],
    choices: [{ label: "Continuer jusqu'à la digue", to: "I_ponceau_cabane" }] },
  I_bornes_repos: { act: A, title: "Un quart d'heure", place: "berge",
    text: [
      "Tu fermes les yeux un quart d'heure. Tu entends la Sorge, le vent, ton cœur. Tu penses à toutes les femmes que tu as fait marcher pendant le travail, dans leur chambre, d'un mur à l'autre, en leur disant : encore un tour.",
      "Encore une borne. Tu te relèves en t'aidant du paquet, comme d'une canne.",
    ],
    choices: [{ label: "Continuer jusqu'à la digue", to: "I_ponceau_cabane" }] },

  // ------------------------------------------------------------------ the doors, at two
  I_gosse: { act: A, title: "La veuve Gosse", place: "foulons", fx: { time: 0.25 },
    text: [
      "Au bout de la rue du Lavoir, la veuve Gosse refuse d'ouvrir. Elle te parle à travers sa porte, de sa voix de vieille, pointue et calme.",
      "« Je suis née dans cette maison, Ilde. Si l'eau vient, elle me trouvera dans mon fauteuil. »",
      "Tu l'as accouchée de ses deux fils, il y a quarante ans. Les deux sont morts à la guerre du Sel.",
    ],
    choices: [
      { label: "« Henriette, tes fils t'attendent depuis longtemps. Moi, j'ai encore besoin de toi. »", test: { dom: "social", diff: -10, label: "La faire sortir" }, win: { to: "I_accouchement", fx: { flag: "gosse:sauvee" } }, lose: { to: "I_accouchement" } },
      { label: "La laisser, et courir aux autres portes", to: "I_accouchement" },
    ] },
  I_accouchement: { act: A, title: "Sur les marches", place: "foulons", fx: { time: 0.5 },
    text: [
      { if: { has: "gosse:sauvee" }, text: "La porte s'ouvre. Henriette Gosse sort en manteau, son chapelet à la main, et elle te dit seulement : « Ne me tiens pas le bras, je ne suis pas infirme. »" },
      "À mi-hauteur des escaliers de la Côte, au palier de la Vierge, une femme s'arrête et se plie en deux. La petite Josselin, la femme du cardeur, enceinte de huit mois. Elle s'accroche à la rampe. Il y a de l'eau sur les marches, sous elle, et cette eau-là vient d'elle, et de la Sorge en rien.",
      "Derrière elle, l'escalier est plein de monde qui monte, et qui reste bloqué.",
    ],
    choices: [
      { label: "L'accoucher ici, sur le palier, sous la veilleuse", test: { dom: "nature", diff: 0, label: "Accoucher" }, win: { to: "I_foulons", fx: { flag: "ilde:enfant" } }, lose: { to: "I_foulons", fx: { flag: "ilde:enfant_dur" } } },
      { label: "La faire porter jusqu'à l'église par deux hommes", to: "I_foulons", fx: { flag: "ilde:enfant_eglise" } },
    ] },
};
