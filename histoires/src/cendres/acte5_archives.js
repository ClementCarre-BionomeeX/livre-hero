// Act V · "Les archives des cessions", an adventure inside the adventure in the tower on the last night (the child
// leads, "tu" masculine), opened from V_t_cessions. Under the Bureau, the archives where every name ceded since the
// founding has its signed slip. Three aisles (the founders, the war, the poor), the archivist Hermeline who has been
// sorting for forty years and is half white, and the choice at the window: give the slips to the snow so the names
// go home (v:archives=rendues), or burn them so no one can ever be held to a cession again (v:archives=brulees).
var A = { act: "V", noLead: true };
function P(o) { return Object.assign({}, A, o); }
var BACK = [{ label: "Revenir entre les rayonnages", back: "V_ar_salle" }];
module.exports = {
  V_ar_escalier: P({ title: "L'escalier de service", place: "pallanche",
    fx: { questSeen: "V_Q_archives" },
    text: [
      "Derrière le guichet du Bureau, une porte basse, et un escalier qui descend au lieu de monter. Tout le monde monte, cette nuit. Personne ne descend. Les marches sont usées au milieu, par quarante ans du même pas.",
      "En bas, de la lumière. Une seule lampe, et un bruit de papier qu'on classe, régulier, patient, comme une pluie fine.",
    ],
    choices: [
      { label: "Descendre", to: "V_ar_salle" },
      { back: "V_t_cessions" },
    ] }),
  V_ar_salle: P({ title: "Les archives", place: "pallanche", hub: true,
    text: [
      { first: true, text: "Une cave voûtée, immense, plus grande que la tour au-dessus. Des rayonnages jusqu'à la voûte, des boîtes, des liasses, des fiches. Sur chaque fiche, un nom, une date, ce qui a été cédé, et une signature. Parfois une croix, pour ceux qui ne savaient pas écrire. Trois cents ans de cessions, rangées." },
      "Au milieu, à une table, sous la lampe, une vieille femme classe. Elle ne lève pas la tête. Ses mains vont et viennent, et ses mains sont blanches jusqu'aux poignets, blanches comme la neige de cette nuit.",
    ],
    choices: [
      { label: "L'allée des fondateurs", hide: { seen: "V_ar_fondateurs" }, to: "V_ar_fondateurs" },
      { label: "L'allée de la guerre", hide: { seen: "V_ar_guerre" }, to: "V_ar_guerre" },
      { label: "L'allée des pauvres, la plus longue", hide: { seen: "V_ar_pauvres" }, to: "V_ar_pauvres" },
      { label: "La vieille femme sous la lampe", hide: { seen: "V_ar_hermeline" }, to: "V_ar_hermeline" },
      { label: "Ouvrir le soupirail, en haut du mur", if: { seen: "V_ar_hermeline" }, why: "La vieille femme n'a pas encore levé la tête.", hide: { has: "v:archives" }, to: "V_ar_soupirail", big: true },
      { back: "V_t_cessions" },
    ] }),
  V_ar_fondateurs: P({ title: "L'allée des fondateurs", place: "pallanche",
    text: [
      "Les fiches les plus anciennes, dans des boîtes de cuir. Le vélin est jauni, l'encre est brune. Cinq signatures reviennent sans cesse, en bas de milliers de fiches : pas comme cédants, comme témoins. Les cinq fondateurs, qui contresignaient chaque cession, au début, de leur main.",
      "Et puis, dans la dernière boîte, cinq fiches à part. Cinq cessions signées par les fondateurs eux-mêmes. Tu ne lis pas bien, à la lampe, mais tu lis assez. Chacun a cédé la même chose, le même jour : *le souvenir de ce que nous avons fait à Valcendre.*",
      { with: "gaspard", text: "Gaspard a pris la fiche de Berthe. Il la regarde longtemps. « Elle me faisait refaire le pain trois fois, dit-il. Elle disait qu'il avait un goût de cendre. Je ne comprenais pas. » Il repose la fiche, doucement, à sa place." },
    ],
    choices: [{ label: "Remettre les fiches dans leur boîte", fx: { ep: ["perso", 500], flag: "v:fiches_fondateurs" }, to: "V_ar_salle" }] }),
  V_ar_guerre: P({ title: "L'allée de la guerre", place: "pallanche",
    text: [
      "Des liasses entières, ficelées par régiment. Des soldats de la Lisse. Ce qu'ils ont cédé : un jour, une nuit, un pont, un village, le visage d'un homme d'en face. Certains ont cédé la même nuit, à vingt, la même croix en bas de vingt fiches.",
      "Une liasse est plus épaisse que les autres. *Pont de la Lisse, la nuit du feu.* Des centaines de fiches. Tous ceux qui étaient là. Personne ne voulait garder cette nuit-là.",
      { with: "ysolde", text: "Ysolde a défait la ficelle. Elle cherche. Elle trouve. Une fiche, avec sa signature à elle, d'une écriture plus jeune, plus appliquée. Elle ne la lit pas. Elle la plie en deux, et elle la glisse dans son gant." },
      { with: "rodric", text: "Rodric regarde la liasse sans la toucher. « Eux, ils ont donné cette nuit, dit-il. Moi, je l'ai gardée. Ça ne fait pas moins mal. Ça fait mal à un seul. »" },
    ],
    choices: [{ label: "Renouer la ficelle", fx: { ep: ["perso", 500], flag: "v:fiches_guerre" }, to: "V_ar_salle" }] }),
  V_ar_pauvres: P({ title: "L'allée des pauvres", place: "pallanche",
    text: [
      "L'allée la plus longue. Elle se perd dans le noir. Ici, on n'a pas cédé une nuit de guerre ou un crime. On a cédé contre de l'argent. Une mère, son premier enfant mort, contre trois mois de loyer. Un vieux, sa femme, contre le bois de l'hiver. Un enfant de onze ans, sa maison, contre une place à la Chancellerie.",
      "Celle-là, tu la tires de sa boîte. Les volets bleus, le figuier, le puits, le chien jaune. La signature est maladroite, une signature d'écolier qui s'est entraîné. Au dos, quelqu'un a écrit, d'une autre main : *Bon élève. À garder.*",
    ],
    choices: [
      { label: "Prendre la fiche", fx: { item: "fiche_mordace", ep: ["perso", 400] }, to: "V_ar_salle" },
      { label: "La remettre à sa place", to: "V_ar_salle" },
    ] }),
  V_ar_hermeline: P({ title: "Hermeline", place: "pallanche",
    text: [
      "Tu t'approches de la table. La vieille femme lève enfin la tête. Son visage est encore à elle. Ses yeux aussi. Le blanc, sous les manches, monte jusqu'aux coudes.",
      "« Hermeline, dit-elle. Archiviste. Quarante ans. » Elle te montre ses mains. « Les fiches, ça déteint. Quand on touche trop de choses que les gens ne veulent plus, on finit par leur ressembler. » Elle reprend une fiche, la classe. « Ils montent tous, là-haut. Moi, je ne peux pas laisser le classement en plan. Qui le finirait ? »",
    ],
    choices: [
      { label: "« Personne ne le finira. Il n'y a plus personne. »", to: "V_ar_hermeline_fin" },
      { label: "L'aider à classer, un moment", fx: { pv: -2, ep: ["perso", 300] }, to: "V_ar_hermeline_classer" },
    ] }),
  V_ar_hermeline_fin: P({ title: "Le classement", place: "pallanche",
    text: [
      "Elle repose la fiche. Elle regarde ses mains, longtemps, comme si elle les voyait pour la première fois. « Quarante ans, dit-elle. J'avais vingt ans. J'aimais les choses rangées. » Elle rit, doucement. « Je n'ai jamais lu une seule fiche. Pas une. On ne lit pas, on classe. C'est la règle. »",
      "Elle tend le doigt vers le haut du mur, vers un soupirail fermé par une grille, au ras de la rue. « Par là, dit-elle, il neige. Je l'entends. Je ne l'ai pas ouvert depuis quarante ans. »",
    ],
    choices: BACK }),
  V_ar_hermeline_classer: P({ title: "Les mains", place: "pallanche",
    text: [
      "Tu t'assieds en face d'elle. Elle te donne une liasse. Tu classes, par date, par quartier. C'est facile. C'est apaisant, même. Au bout d'un moment, tu regardes tes doigts : le bout est blanc. Pas beaucoup. Comme de la farine.",
      "Hermeline te prend la liasse des mains. « Pas toi, dit-elle. Toi, tu as autre chose à faire, cette nuit. » Elle souffle sur tes doigts, comme on souffle sur la farine, et le blanc s'envole. Elle montre, du menton, le soupirail fermé, en haut du mur.",
    ],
    choices: BACK }),
  V_ar_soupirail: P({ title: "Le soupirail", place: "pallanche",
    text: [
      { first: true, text: "Tu grimpes sur un rayonnage. La grille est rouillée, mais elle cède. Le soupirail s'ouvre sur la rue, au ras des pavés. La neige entre, en tourbillons, et quand elle touche les fiches, elle ne fond pas : elle les soulève, une à une, comme si elle les attendait." },
      { again: true, text: "Tu remontes sur le rayonnage. Tu entrouvres le soupirail, d'un doigt cette fois. La neige entre, en filet, et quand elle touche les fiches, elle ne fond pas : elle les soulève, une à une, comme si elle les attendait." },
      "Hermeline s'est levée. Elle regarde la neige entrer. « Il faut décider, dit-elle. Je ne peux pas. Je classe. Je n'ai jamais décidé. »",
    ],
    choices: [
      { label: "Donner les fiches à la neige", test: { dom: "magie", label: "Les fiches", help: [{ if: { has: "v:fiches_fondateurs" }, v: 10 }, { if: { has: "v:fiches_guerre" }, v: 10 }, { if: { present: "linette" }, v: 10 }] },
        win: { fx: { flag: ["v:archives", "v:archives=rendues"], ep: ["seance", 2500], quest: "V_Q_archives" }, to: "V_ar_rendues" },
        lose: { fx: { pv: -3 }, to: "V_ar_rate" } },
      { label: "Brûler les fiches, à la lampe", fx: { flag: ["v:archives", "v:archives=brulees"], ep: ["seance", 1500], quest: "V_Q_archives" }, to: "V_ar_brulees" },
    ] }),
  V_ar_rate: P({ title: "Le tourbillon", place: "pallanche",
    text: ["Tu ouvres trop grand. Le vent s'engouffre, renverse la lampe, fait voler les boîtes. Les fiches tourbillonnent dans la cave, sans sortir, et retombent en désordre. Hermeline gémit, à genoux, et commence déjà à les ramasser. Tu l'aides. Il faudra recommencer, plus doucement, une liasse à la fois."],
    choices: [{ label: "Recommencer, plus doucement", to: "V_ar_soupirail" }, { back: "V_t_cessions" }] }),
  V_ar_rendues: P({ title: "La neige", place: "pallanche",
    text: [
      "Tu tends une liasse vers le soupirail. La neige la prend. Les fiches s'envolent, une à une, dans la rue, et dans la rue elles ne tombent pas : elles montent, avec la neige, vers la colonne, vers le ciel, vers les fenêtres de la ville, et elles entrent par les cheminées. Tu en donnes une autre. Et une autre.",
      "Hermeline te regarde faire. Puis elle prend une liasse, elle aussi. Elle la tend vers la neige. Ses mains sont blanches. Quand la dernière fiche est partie, elles le sont un peu moins.",
      "« Ils vont se souvenir, dit-elle. Tous, cette nuit. De ce qu'ils ont vendu. » Elle s'assied. « Ça va faire mal, dans la ville. Ça va faire du bruit. » Elle sourit. « Ça faisait trop longtemps que c'était silencieux. »",
    ],
    choices: [{ back: "V_t_cessions" }] }),
  V_ar_brulees: P({ title: "Le feu", place: "pallanche",
    text: [
      "Tu prends la lampe. Tu la renverses sur la table, sur les liasses. Le papier brûle bien. Le vélin brûle mal, en se tordant, avec une odeur de corne. Hermeline recule. Elle ne t'arrête pas.",
      "Les cessions brûlent. Personne ne retrouvera ce qu'il a donné. Mais personne, jamais, ne pourra plus montrer à quelqu'un la croix qu'il a faite en bas d'une fiche, un jour de faim, et lui dire : tu as signé. La fumée sort par le soupirail, et se mêle à la neige.",
      "Hermeline regarde ses mains. Elles restent blanches. « C'est peut-être mieux, dit-elle. Je ne sais pas. Je n'ai jamais décidé. » Elle s'assied devant le feu, et elle se chauffe, pour la première fois depuis quarante ans.",
    ],
    choices: [{ back: "V_t_cessions" }] }),

  V_t_fiche: P({ title: "La fiche", place: "pallanche",
    text: [
      "Tu poses la fiche sur le Grand Livre, sous sa plume. Les volets bleus, le figuier, le puits, le chien jaune. La signature d'écolier. Il la lit, parce qu'il lit tout ce qu'on pose devant lui. Sa plume s'arrête au milieu d'un mot.",
      "Puis il la retourne. *Bon élève. À garder.* Il reconnaît l'écriture. Tu le vois la reconnaître. C'est celle de l'homme qui était Greffier-Majeur avant lui, et qui l'a pris par la main, à onze ans, dans l'antichambre, pour le mener au guichet.",
    ],
    choices: [
      { label: "« Ils t'ont acheté. Tu n'as rien vendu. »", test: { dom: "social", label: "Mordace", help: [{ if: { has: "hylas:mahaut" }, v: 15 }, { if: { has: "v:archives=rendues" }, v: 15 }, { if: { present: "hylas" }, v: 15 }, { if: { item: "dessin_mordace" }, v: 10 }] },
        win: { fx: { flag: "mordace:fin=pardonne", ep: ["perso", 2000] }, to: "V_t_pardonne" }, lose: { to: "V_t_fiche_rate" } },
    ] }),
  V_t_fiche_rate: P({ title: "Bon élève", place: "pallanche",
    text: ["Il pose la fiche à côté du Grand Livre, bien droite, alignée sur le bord du lutrin. « Bon élève, dit-il. C'est vrai. Je l'ai été. » Sa voix ne tremble pas. Sa main tremble un peu, en reprenant la plume. Il écrit. Il a détourné les yeux de la fiche, mais il la garde en main."],
    choices: [{ label: "Reculer", to: "V_t_mordace" }] }),
};
