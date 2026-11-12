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
      "Derrière Saint-Gilles, la porte de l'hospice est ouverte, et il en sort de la lumière, et du bruit. Du bruit de cuillères. Dans toute la ville figée, c'est le seul endroit où quelqu'un bouge.",
      "Sœur Aude passe entre les rangs, avec son écuelle. Les Cédants sont plus nombreux. Elle en a ramassé dans la rue, toute la soirée, des gens de la queue qui s'étaient assis dans la neige. Elle dit chaque nom, écrit à la craie au-dessus du lit, et met la cuillère dans la bouche.",
      "« Je n'ai rien cédé, moi, dit-elle sans s'arrêter. Je n'avais pas le temps de faire la queue. » Elle te tend une écuelle. « Vous montez là-haut ? Mangez d'abord. On ne monte pas une tour le ventre vide. »",
    ],
    choices: [{ label: "Manger, et lui laisser l'écuelle", fx: { pv: 8, ep: ["perso", 600], flag: "v:aude" }, to: "V_ville" }] }),
  V_v_jetons: P({ title: "Les jetons à l'envers", place: "pallanche",
    text: [
      "Le long de la queue, des enfants courent. Ils ont des paniers. Ils glissent quelque chose dans chaque main immobile, à la place du jeton de plomb : un jeton de bois, peint d'une plume barrée.",
      "Et là où ils passent, quelqu'un, parfois, regarde sa main. Fronce les sourcils. Sort de la queue d'un pas, puis de deux. S'assied dans la neige, perdu, mais assis, mais hors de la queue.",
      "Le grand de la rue des Tonneliers passe devant toi, son panier presque vide. « Je t'avais dit, dit-il. Des faux qui marchent à l'envers. » Il ne s'arrête pas. Il en a encore cent à donner.",
    ],
    choices: [{ label: "Prendre un panier, et l'aider", fx: { ep: ["perso", 800], flag: "v:jetons" }, to: "V_ville" }] }),
  V_v_bleu: P({ title: "Le bleu", place: "pallanche",
    text: [
      "Aux Teinturiers, les perches sont chargées de draps. Ils devraient être blancs, sous la neige. Ils sont bleus. Le bleu d'Aubin, le bleu de la guède, si profond que la neige, en tombant dessus, a l'air d'en prendre un peu.",
      "C'est la seule couleur de la ville. De loin, du haut de la rue, on dirait une déchirure dans le blanc, une bande de ciel tombée par terre. Les gens de la queue, quand ils tournent la tête de ce côté, ont l'air de chercher un mot.",
    ],
    choices: [{ label: "Prendre un bout de drap bleu, et le nouer à ton bras", fx: { ep: ["perso", 500], flag: "v:bleu" }, to: "V_ville" }] }),

  V_v_fillette: P({ title: "La fillette", place: "pallanche",
    text: [
      "Au milieu de la queue, entre un boucher et une dame en manteau de fourrure qui sourient tous les deux à la neige, une fillette de six ou sept ans. Elle ne sourit pas. Elle pleure, sans bruit, parce qu'elle a froid, et qu'elle a faim, et que sa mère, devant elle, ne se retourne plus quand elle l'appelle.",
      "Elle n'a pas de jeton. Elle est trop petite pour qu'on l'écrive. Elle est la seule de la place à ne rien avoir cédé.",
    ],
    choices: [
      { label: "La prendre dans tes bras", to: "V_v_fillette_bras" },
      { label: "Secouer sa mère", test: { dom: "magie", label: "La mère", help: [{ if: { present: "corbe" }, v: 15 }, { if: { present: "sansnom" }, v: 10 }, { if: { has: "iii:berceuse" }, v: 20 }] },
        win: { fx: { flag: "v:fillette=mere", ep: ["perso", 1200] }, to: "V_v_fillette_mere" }, lose: { to: "V_v_fillette_bras" } },
    ] }),
  V_v_fillette_mere: P({ title: "Le troisième couplet", place: "pallanche",
    text: [
      "Tu poses les mains sur les épaules de la femme. Elle sourit à la neige. Tu ne sais pas quoi dire. Alors tu chantes, très bas, à son oreille, la seule chose qui te vient : une berceuse. Celle de ta mère, ou une autre, peu importe, toutes les berceuses se ressemblent au troisième couplet.",
      "La femme cligne des yeux. Elle se retourne. Elle voit sa fille. Elle ne sait pas comment elle s'appelle. Mais elle la prend dans ses bras, et elle sort de la queue, et elle s'en va vers une porte, en la serrant si fort que la petite proteste.",
    ],
    choices: [{ label: "Revenir sur la place", to: "V_ville" }] }),
  V_v_fillette_bras: P({ title: "Dans tes bras", place: "pallanche",
    text: [
      "Tu la prends. Elle se laisse faire, raide, puis elle cache sa figure dans ton cou. Elle est gelée. Tu la portes jusque sous un porche, où il fait moins froid, et tu l'enroules dans ton manteau.",
      "« Tu reviens ? » demande-t-elle. Tu dis oui. Tu ne sais pas si c'est vrai. Elle te dit son nom, pour que tu t'en souviennes en haut. Tu le répètes deux fois, pour qu'elle voie que tu l'as.",
    ],
    choices: [{ label: "Revenir sur la place", fx: { flag: "v:fillette=porche", ep: ["perso", 500] }, to: "V_ville" }] }),

  // ---------------------------------------------------------------- Acte IV, Pont-de-Saule : le lavoir
  IV_ps_lavoir: P4({ title: "Le lavoir", place: "pontsaule",
    text: [
      "Au bord de la Sauve, sous un toit de tuiles, le lavoir. Les femmes y battent le linge comme avant, à genoux sur les planches, mais elles ne parlent pas. Autrefois, on entendait le lavoir depuis la place. On y apprenait tout, avant tout le monde : les mariages, les dettes, qui avait battu qui.",
      "« On ne sait plus quoi dire, dit une lavandière, sans lever la tête. On a toutes cédé un peu. On ne sait plus qui a fait quoi à qui. Alors on se tait. C'est reposant, remarquez. » Elle tord un drap. « C'est triste aussi. »",
    ],
    choices: [
      { label: "Leur raconter Sauvelune, et l'année blanche", fx: { ep: ["perso", 500], flag: "iv:lavoir" }, to: "IV_ps_lavoir_parler" },
      { label: "Revenir sur la place", to: "IV_ps" },
    ] }),
  IV_ps_lavoir_parler: P4({ title: "Les nouvelles", place: "pontsaule",
    text: [
      "Tu t'assieds sur une planche et tu racontes. Le village sous l'herbe, le moulin, le blanc, la ville des cloches, le cirque. Les battoirs s'arrêtent, un par un. Les femmes écoutent.",
      "Quand tu as fini, il y a un silence. Puis une vieille, au bout, dit : « Le meunier de Sauvelune. Joris. Il avait épousé la petite Agathe, de la rue du Four. » Une autre : « Celle qui chantait faux ? » Une troisième : « Elle ne chantait pas faux, elle chantait fort. »",
      "Et ça repart. Le lavoir se remet à parler, de Joris, d'Agathe, de toi, de n'importe quoi. Tu t'en vas sans qu'on te voie partir. Derrière toi, quelqu'un rit.",
    ],
    choices: [{ label: "Revenir sur la place", to: "IV_ps" }] }),
};
