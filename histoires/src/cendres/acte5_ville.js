// Act V · Pallanche under the snow, before the tower: the city becomes a hub. The Veuve in the queue, a bell to ring,
// the Glaneurs who harvest the queue, the Liseurs who read aloud (if they were saved), and Baudoin's side door (if he
// stayed inside). Each scene can lend a hand at the top of the tower. The child leads ("tu").
var A = { act: "V", noLead: true };
function P(o) { return Object.assign({}, A, o); }
module.exports = {
  V_v_veuve: P({ title: "La Veuve", place: "pallanche",
    text: [
      "Tu la trouves au milieu de la queue, petite, ronde, en noir, la neige jusqu'aux chevilles. Elle tient son jeton de plomb dans sa main gantée et regarde la tour avec ses yeux gentils. Elle a fermé sa boutique. Elle a mis son plus beau chapeau.",
      "« Ah, dit-elle en te voyant. Vous. Je vous ai fait de la soupe, une fois. » Elle sourit. « Je vais leur donner mon mari. Le jour de sa mort. Trente ans que je le porte. Ils disent que ça ne fait pas mal. »",
    ],
    choices: [
      { label: "Lui prendre doucement le jeton", test: { dom: "social", label: "La Veuve", help: [{ if: { seen: "IV_pal_veuve" }, v: 15 }, { if: { present: "pie" }, v: 15 }, { if: { present: "ombeline" }, v: 10 }] },
        win: { fx: { flag: "v:veuve", ep: ["perso", 1200] }, to: "V_v_veuve_garde" }, lose: { to: "V_v_veuve_non" } },
      { label: "La laisser à sa place", to: "V_ville" },
    ] }),
  V_v_veuve_garde: P({ title: "Trente ans", place: "pallanche",
    text: [
      "Tu prends le jeton. Elle te laisse faire, étonnée. Tu lui demandes comment il s'appelait, son mari. Elle le dit. Tu lui demandes comment il est mort. Elle commence à le dire, et sa voix se casse au milieu, et elle se met à pleurer, là, dans la neige, au milieu de la queue souriante, la seule à pleurer sur toute la place aux Clercs.",
      "« Oh, dit-elle. Oh, il me manque. » Elle s'essuie les yeux avec son gant. « C'est à moi, ça. Ils ne l'auront pas. »",
      "Elle sort de la queue. Elle va rouvrir sa boutique. Avant de partir, elle te met dans la main deux pots d'onguent, sans rien demander, ce qui ne lui ressemble pas du tout.",
    ],
    choices: [{ fx: { item: ["onguent", "onguent"] }, back: "V_ville" }] }),
  V_v_veuve_non: P({ title: "Son tour", place: "pallanche",
    text: ["Elle referme la main sur le jeton, très fort, comme une petite fille. « Non, dit-elle, toujours gentille. C'est mon tour bientôt. » La queue avance d'un pas. Elle avance avec."],
    choices: [{ back: "V_ville" }] }),

  V_v_cloche: P({ title: "Le clocher de Saint-Aubin", place: "pallanche",
    text: [
      "Les cent cloches de Pallanche se taisent. Les sonneurs sont dans la queue, avec les autres. Mais le clocher de Saint-Aubin, au bord de la place aux Clercs, est ouvert, et l'escalier monte dans le noir.",
      "Là-haut, la grosse cloche, la Bénigne, qui sonne le tocsin depuis trois siècles. Les cordes ont gelé. Il faudra la mettre en branle à la main.",
      { with: "rodric", text: "Rodric regarde le clocher, puis toi. Il a ses trois cloches à l'épaule. « Je m'en occupe », dit-il, et il monte devant." },
    ],
    choices: [
      { label: "Monter et la faire sonner", test: { dom: "combat", label: "La Bénigne", help: [{ if: { present: "rodric" }, v: 25 }, { if: { has: "rodric:cloches" }, v: 10 }, { if: { present: "ysolde" }, v: 10 }, { if: { present: "gaspard" }, v: 10 }] },
        win: { fx: { flag: "v:cloche", ep: ["perso", 1500] }, to: "V_v_cloche_sonne" }, lose: { fx: { pv: -3 }, to: "V_v_cloche_rate" } },
      { back: "V_ville" },
    ] }),
  V_v_cloche_sonne: P({ title: "Le tocsin", place: "pallanche",
    text: [
      "La Bénigne bouge, un peu, puis beaucoup, puis le battant frappe, et le son tombe sur Pallanche comme une pierre dans l'eau.",
      "Sur la place aux Clercs, dans la queue, des têtes se lèvent. Pas toutes. Quelques-unes. Une femme lâche son jeton. Un homme regarde autour de lui, comme au réveil dans une maison inconnue. Un enfant se met à pleurer, à grands cris, et c'est le plus beau bruit que tu aies entendu depuis des jours.",
      "Tout en haut de la tour des Greffiers, derrière une fenêtre, une silhouette s'est arrêtée d'écrire.",
    ],
    choices: [{ back: "V_ville" }] }),
  V_v_cloche_rate: P({ title: "La corde", place: "pallanche",
    text: ["La cloche bouge d'un pouce, et revient. La corde gelée t'a ouvert les deux paumes. Tu redescends en serrant les poings pour ne pas mettre du sang partout. En bas, la queue n'a pas levé la tête."],
    choices: [{ back: "V_ville" }] }),

  V_v_glaneurs: P({ title: "La moisson", place: "pallanche",
    text: [
      "Au bout de la queue, là où elle tourne au coin de la rue des Bassins, trois Glaneurs. Ils n'attendent pas la tour. Ils se servent. Ils passent le long de la file, lentement, et devant chaque personne ils se penchent, et ils prennent quelque chose, un petit morceau, et la personne sourit un peu plus.",
      "Ils sont gros. Ils ont mangé toute la nuit.",
    ],
    choices: [
      { label: "Les chasser de la queue", to: "V_v_glaneurs_combat" },
      { label: "Les laisser. La tour d'abord", to: "V_ville" },
    ] }),
  V_v_glaneurs_combat: P({ title: "La rue des Bassins", place: "pallanche",
    combat: { title: "Les Glaneurs de la queue", enemies: ["glaneur", "glaneur_petit", "glaneur_petit"], terrain: "ville", range: "contact",
      flee: { dom: "discretion", label: "Reculer dans la foule immobile", to: "V_ville" },
      win: { fx: { flag: "v:queue_defendue", ep: ["seance", 2500] }, to: "V_v_glaneurs_apres" }, lose: { fx: { pv: -4 }, to: "V_ville" } },
    text: [
      "Ils se retournent ensemble. Le plus gros a, au front, un sceau de cire noire tout neuf.",
      { with: "givre", text: "Givre se met en boule entre tes jambes et gronde, un petit grondement aigu, absurde, qui ne fait peur à personne et qu'il tient quand même jusqu'au bout." },
    ],
    choices: [] }),
  V_v_glaneurs_apres: P({ title: "Ce qu'ils avaient pris", place: "pallanche",
    text: [
      "Quand le dernier se défait, ce qu'il avait mangé ne retourne pas d'où ça venait. Ça flotte, au ras de la neige, une brume dorée et bleue, et ça se pose sur la queue au hasard, comme une neige à l'envers.",
      "Un homme, au passage, reçoit un morceau de quelqu'un d'autre. Il se met à fredonner une chanson qu'il ne connaît pas. Il a l'air content. Bien ou mal, tu hésites. Tu sais que c'est mieux que dans le ventre d'un Glaneur.",
    ],
    choices: [{ back: "V_ville" }] }),

  V_v_liseurs: P({ title: "Les Liseurs", place: "pallanche",
    text: [
      "Sous les arcades de la place aux Clercs, trois robes grises. La fille de vingt ans, le vieil homme, le garçon de quinze ans. Ceux de la potence. Ils ne sont pas dans la queue. Ils sont debout sur des tonneaux, et ils lisent, à voix haute, en se relayant, depuis des heures : des noms. Les noms de la queue, qu'ils lisent sur les jetons, un par un, en descendant la file.",
      "Ils ont la voix cassée. Ils ne s'arrêtent pas.",
      "« Chaque nom qu'on dit à voix haute, dit le vieil homme entre deux noms, met un peu plus longtemps à monter. On ne sait pas si c'est vrai. Ça occupe. »",
    ],
    choices: [
      { label: "Lire avec eux un moment", fx: { flag: "v:liseurs", ep: ["perso", 1200] }, to: "V_v_liseurs_lire" },
      { label: "Les saluer et repartir", to: "V_ville" },
    ] }),
  V_v_liseurs_lire: P({ title: "Les noms", place: "pallanche",
    text: [
      "Tu montes sur un tonneau. On te tend un bout de liste. Tu lis. Guillemette Dubreuil. Ancel Fournier. Pernelle, sans nom de famille. Jacquot Cordier, dit le Petit. Chaque nom fait un petit nuage dans l'air froid.",
      "Au bout d'une heure, ta voix est usée, et la file est aussi longue. Mais au bout de la rue, une femme dont tu as lu le nom s'est retournée, une seconde, comme quelqu'un qu'on appelle de loin.",
    ],
    choices: [{ back: "V_ville" }] }),

  V_v_baudoin: P({ title: "La porte des copistes", place: "pallanche",
    text: [
      "Au pied de la tour, côté jardin, une petite porte s'entrouvre. Frère Baudoin, en robe de greffier, une chandelle à la main, te fait signe. Il est le seul greffier éveillé de Pallanche. Il n'a rien signé cette nuit.",
      "« Par ici, chuchote-t-il. Les gardiens des archives tiennent l'escalier. Pas celui des copistes. Il monte jusqu'au scriptorium, derrière les rayonnages. Je l'ai pris tous les matins pendant un an pour ne pas passer devant lui. »",
    ],
    choices: [{ label: "Retenir le chemin, et revenir sur la place", fx: { flag: "v:escalier_copistes", ep: ["perso", 800] }, to: "V_ville" }] }),

  V_v_copistes: P({ title: "L'escalier des copistes", place: "pallanche",
    text: [
      "Derrière le troisième rayonnage, une porte basse, et un escalier en colimaçon si étroit qu'on y monte de profil. Il sent la cire et le pain sec : Baudoin y mangeait, les jours où il ne voulait voir personne.",
      "Vous montez dans le noir, en comptant les marches. De l'autre côté du mur, tout le long, vous entendez les Glaneurs des archives marcher sur les rayonnages, à l'envers. Ils gardent le grand escalier, où personne ne viendra.",
    ],
    choices: [{ label: "Le dernier palier", fx: { ep: ["seance", 2500] }, to: "V_t_sommet" }] }),
};
