// Act V · more of Pallanche under the snow, off V_ville: what became of Act IV's side quests on the last night (sister
// Aude still feeding the Cédants, the jetons that work backwards, the blue of the Teinturiers), and a little girl in the
// queue who did not smile. Plus, in Act IV, the washing place of Pont-de-Saule. The child leads ("tu").
var A = { act: "V", noLead: true };
function P(o) { return Object.assign({}, A, o); }
var Q = { act: "IV", noLead: true };
function P4(o) { return Object.assign({}, Q, o); }
module.exports = {
  V_v_aude: P({ title: "L'hospice", place: "pallanche",
    text: [
      "Derrière Saint-Gilles, la porte de l'hospice est ouverte, et il en sort de la lumière, et du bruit. Du bruit de cuillères contre des écuelles. Dans toute la ville figée, c'est le seul endroit où l'on s'agite.",
      "Sœur Aude passe entre les rangs, avec son écuelle. Les Cédants sont plus nombreux : on a ajouté un troisième rang, et des paillasses jusque dans le couloir. Elle en a ramassé dans la rue, toute la soirée, des gens de la queue qui s'étaient assis dans la neige. Elle dit chaque nom, écrit à la craie au-dessus du lit, et met la cuillère dans la bouche.",
      "« Moi, j'ai tout gardé, dit-elle sans s'arrêter. La queue, c'est pour ceux qui ont le temps. » Elle te tend une écuelle. « Vous montez là-haut ? Mangez d'abord. On ne monte pas une tour le ventre vide. »",
    ],
    choices: [{ label: "Manger, et lui laisser l'écuelle", fx: { pv: 8, ep: ["perso", 600] }, to: "V_ville" }] }),
  V_v_jetons: P({ title: "Les jetons à l'envers", place: "pallanche",
    text: [
      "Le long de la file, des enfants courent, une dizaine, des paniers d'osier au bras. Ils glissent quelque chose dans chaque main immobile, à la place du jeton de plomb : un jeton de bois, peint d'une plume barrée.",
      "Et là où ils passent, quelqu'un, parfois, regarde sa main. Fronce les sourcils. Sort de la queue d'un pas, puis de deux. S'assied dans la neige, perdu, mais assis, mais hors de la queue.",
      "Le grand de la rue des Tonneliers passe devant toi, son panier presque vide. « Je t'avais dit, dit-il. Des faux qui marchent à l'envers. » Il file déjà. Il en a encore cent à donner.",
    ],
    choices: [{ label: "Prendre un panier, et l'aider", fx: { ep: ["perso", 800] }, to: "V_ville" }] }),
  V_v_bleu: P({ title: "Le bleu", place: "pallanche",
    text: [
      "Aux Teinturiers, les perches sont chargées de draps. La neige aurait dû les blanchir. Ils sont bleus. Le bleu d'Aubin, le bleu de la guède, si profond que la neige, en tombant dessus, a l'air d'en prendre un peu.",
      "C'est la seule couleur de la ville. De loin, du haut de la rue, on dirait une déchirure dans le blanc, une bande de ciel tombée par terre. Les gens de la queue, quand ils tournent la tête de ce côté, ont l'air de chercher un mot.",
    ],
    choices: [{ label: "Prendre un bout de drap bleu, et le nouer à ton bras", fx: { ep: ["perso", 500] }, to: "V_ville" }] }),

  V_v_fillette: P({ title: "La fillette", place: "pallanche",
    text: [
      "Au milieu de la queue, entre un boucher et une dame en manteau de fourrure qui sourient tous les deux à la neige, une fillette de six ou sept ans, en sabots trop grands. Elle pleure, sans bruit, parce qu'elle a froid, et qu'elle a faim, et que sa mère, devant elle, reste de dos quand elle l'appelle.",
      "Ses mains sont vides de jeton. Elle est trop petite pour qu'on l'écrive. Sur toute la place, elle seule a tout gardé.",
    ],
    choices: [
      { label: "La prendre dans tes bras", to: "V_v_fillette_bras" },
      { label: "Secouer sa mère", test: { dom: "magie", label: "La mère", help: [{ if: { present: "corbe" }, v: 15 }, { if: { present: "sansnom" }, v: 10 }, { if: { has: "iii:berceuse" }, v: 20 }] },
        win: { fx: { ep: ["perso", 1200] }, to: "V_v_fillette_mere" }, lose: { to: "V_v_fillette_bras" } },
    ] }),
  V_v_fillette_mere: P({ title: "Le troisième couplet", place: "pallanche",
    text: [
      "Tu poses les mains sur les épaules de la femme. Elle sourit à la neige. Les mots te manquent. Alors tu chantes, très bas, à son oreille, la seule chose qui te vient : une berceuse. Celle de ta mère, ou une autre, peu importe, toutes les berceuses se ressemblent au troisième couplet.",
      "La femme cligne des yeux. Elle se retourne. Elle voit sa fille. Le prénom lui échappe. Mais elle la prend dans ses bras, et elle sort de la queue, et elle s'en va vers une porte, en la serrant si fort que la petite proteste.",
    ],
    choices: [{ back: "V_ville" }] }),
  V_v_fillette_bras: P({ title: "Dans tes bras", place: "pallanche",
    text: [
      "Tu la prends. Elle se laisse faire, raide, puis elle cache sa figure dans ton cou. Elle est gelée. Tu la portes jusque sous un porche, où il fait moins froid, et tu l'enroules dans ton manteau.",
      "« Tu reviens ? » demande-t-elle. Tu dis oui, sans certitude. Elle te dit son nom, pour que tu t'en souviennes en haut. Tu le répètes deux fois, pour qu'elle voie que tu l'as.",
    ],
    choices: [{ fx: { ep: ["perso", 500] }, back: "V_ville" }] }),

  // ---------------------------------------------------------------- Acte IV, Pont-de-Saule : le lavoir
  IV_ps_lavoir: P4({ title: "Le lavoir", place: "pontsaule",
    text: [
      "Au bord de la Sauve, sous un toit de tuiles, le lavoir. Les femmes y battent le linge comme avant, à genoux sur les planches, une douzaine, mais en silence. Autrefois, on entendait le lavoir depuis la place. On y apprenait tout, avant tout le monde : les mariages, les dettes, qui avait battu qui.",
      "« On cherche quoi dire, dit une lavandière, sans lever la tête. On a toutes cédé un peu. Qui a fait quoi à qui, c'est parti. Alors on se tait. C'est reposant, remarquez. » Elle tord un drap. « C'est triste aussi. »",
    ],
    choices: [
      { label: "Leur raconter Sauvelune, et l'année blanche", fx: { ep: ["perso", 500] }, to: "IV_ps_lavoir_parler" },
      { back: "IV_ps" },
    ] }),
  IV_ps_lavoir_parler: P4({ title: "Les nouvelles", place: "pontsaule",
    text: [
      "Tu t'assieds sur une planche et tu racontes. Le village sous l'herbe, le moulin, le blanc, la ville des cloches, le cirque. Les battoirs s'arrêtent, un par un. Les femmes écoutent.",
      "Quand tu as fini, il y a un silence. Puis une vieille, au bout, dit : « Le meunier de Sauvelune. Joris. Il avait épousé la petite Agathe, de la rue du Four. » Une autre : « Celle qui chantait faux ? » Une troisième : « Elle ne chantait pas faux, elle chantait fort. »",
      "Et ça repart. Le lavoir se remet à parler, de Joris, d'Agathe, de toi, de n'importe quoi. Tu t'en vas sans que personne le remarque. Derrière toi, quelqu'un rit.",
    ],
    choices: [{ back: "IV_ps" }] }),
};
