// Act I · more of the low quarters of Pallanche for Pie ("tu"), off PI_ville: a girl who wants her grandfather's
// memory stolen back from the receleur who buys the phials of the Bureau, and the dice den under the Pont-Neuf where
// you can win a rumour. Plus, in Act III, two more doors of Valcendre: the mask-maker and the public baths (the child
// leads, "tu").
var PI = { place: "pallanche", noLead: true };
function P(o) { return Object.assign({ act: "I" }, PI, o); }
var T = { act: "III", noLead: true };
function P3(o) { return Object.assign({}, T, o); }
module.exports = {
  // ---------------------------------------------------------------- La fiole du grand-père
  PI_Q_fiole: P({ title: "Ninon",
    fx: { questSeen: "PI_Q_fiole" },
    text: [
      "Une gamine t'attend au pied de ton escalier, assise sur la dernière marche, les bras autour des genoux. Huit ans, peut-être. Une robe trop grande, des sabots, un air buté. « C'est toi, Pie ? Celui qui vole tout ? »",
      "Elle s'appelle Ninon. Son grand-père a vendu un souvenir au Bureau, la semaine dernière, pour payer le loyer. Le souvenir de sa femme, morte il y a vingt ans. Il ne se souvient plus d'elle. Il appelle Ninon par le nom de sa grand-mère, et il ne comprend pas pourquoi elle pleure.",
      "« Les fioles, le Bureau les revend, dit-elle. À un homme, rue des Orfèvres. Le Borgne. Tout le monde le sait. Va la reprendre. » Elle sort de sa poche trois liards, sa fortune. « Je paie. »",
    ],
    choices: [
      { label: "Prendre ses trois liards", fx: { flag: "pie:ninon" }, to: "PI_Q_fiole_borgne" },
      { label: "Refuser ses liards, et y aller quand même", fx: { flag: "pie:ninon", ep: ["perso", 300] }, to: "PI_Q_fiole_borgne" },
      { label: "« J'ai mes propres affaires, petite. »", refuse: true, to: "PI_ville" },
    ] }),
  PI_Q_fiole_borgne: P({ title: "Le Borgne",
    text: [
      "Rue des Orfèvres, une boutique sans enseigne, un comptoir, une balance de changeur. Derrière, sur des étagères, des fioles de verre bouchées de cire grise, des centaines, rangées par couleur. Certaines luisent faiblement. Le Borgne est derrière le comptoir, un bandeau sur l'œil, des mains de femme.",
      "« Un souvenir de veuf, dit-il, quand tu demandes. J'en ai douze. Ça se vend bien, aux veuves. Elles achètent le chagrin d'un autre, pour pleurer à leur place. » Il sourit. « Cinq écus. »",
      "Tu n'as pas cinq écus. Tu n'en as jamais eu cinq de ta vie.",
    ],
    choices: [
      { label: "Voler la fiole pendant qu'il cherche", test: { dom: "discretion", label: "Les doigts", help: [{ if: { item: "crochets" }, v: 10 }, { if: { seen: "PI_Q_mouche" }, v: 10 }] },
        win: { fx: { flag: "pie:fiole=volee", ep: ["perso", 900] }, to: "PI_Q_fiole_vol" }, lose: { to: "PI_Q_fiole_pris" } },
      { label: "Lui proposer un échange : un faux, contre la fiole", test: { dom: "social", label: "Le marché", help: [{ if: { has: "pie:modele_sceau" }, v: 15 }] },
        win: { fx: { flag: "pie:fiole=echangee", ep: ["perso", 900] }, to: "PI_Q_fiole_echange" }, lose: { to: "PI_Q_fiole_pris" } },
    ] }),
  PI_Q_fiole_vol: P({ title: "Sous la manche",
    text: [
      "Il se retourne vers l'étagère des veufs, et il regarde les fioles une à une, en lisant les étiquettes de son œil unique. Ta main fait le reste. La fiole de l'étagère du bas, celle qui dit *Bastien Lorme, rue des Cardeurs : Clotilde*, passe dans ta manche. Tu demandes le prix d'une autre, pour la forme, et tu dis que c'est trop cher, et tu sors.",
      "Le Borgne ne lève même pas la tête. Il le saura ce soir, en faisant ses comptes. Ce soir, tu seras ailleurs.",
    ],
    choices: [{ label: "Rapporter la fiole", to: "PI_Q_fiole_fin" }] }),
  PI_Q_fiole_echange: P({ title: "Un faux",
    text: [
      "« Je fais des laissez-passer, dis-tu. Des vrais. Enfin, des faux qui passent pour des vrais. Un laissez-passer pour sortir de la ville par la porte Saint-Gilles, sans fouille. Ça vaut plus que cinq écus, pour un homme qui fait ton commerce. »",
      "Il réfléchit. Il te regarde de son œil. Puis il pose la fiole sur le comptoir. « Demain, dit-il. Le laissez-passer, demain. Sinon je sais où tu dors. » Tu prends la fiole. Il sait où tu dors. Tout le monde sait où tu dors.",
    ],
    choices: [{ label: "Rapporter la fiole", to: "PI_Q_fiole_fin" }] }),
  PI_Q_fiole_pris: P({ title: "La main sur le poignet",
    text: [
      "Sa main de femme se referme sur ton poignet, plus vite que tu ne l'aurais cru, et serre. « Un voleur, dit-il, doucement. Dans ma boutique. » Il ne crie pas. Il ne crie jamais. « Va-t'en, petit. Et dis à celle qui t'envoie que son grand-père a fait une bonne affaire. Il n'aura plus jamais de chagrin. »",
      "Il te lâche. Tu as les marques de ses doigts sur le poignet jusqu'au soir.",
    ],
    choices: [{ label: "Retrouver Ninon, les mains vides", fx: { quest: "PI_Q_fiole" }, to: "PI_ville" }] }),
  PI_Q_fiole_fin: P({ title: "Clotilde",
    text: [
      "Ninon t'attend sur ta marche. Tu lui donnes la fiole. Elle la regarde, déçue. « C'est tout ? C'est petit. » Elle monte chez elle en courant. Tu la suis, de loin, par curiosité, ce qui n'est pas ton genre.",
      "Par la porte entrouverte, tu vois un vieil homme dans un fauteuil, et Ninon qui débouche la fiole sous son nez, comme un flacon de sels. Il respire. Il ferme les yeux. Et il pleure. Il pleure comme un enfant, à gros sanglots, la bouche ouverte, avec un nom dedans. *Clotilde.*",
      "Ninon te regarde, par-dessus son épaule, furieuse. « Tu l'as fait pleurer ! » Puis le vieil homme l'attire contre lui, et l'appelle Ninon, et elle ne dit plus rien.",
    ],
    choices: [{ label: "Redescendre l'escalier", fx: { quest: "PI_Q_fiole" }, to: "PI_ville" }] }),

  // ---------------------------------------------------------------- Le tripot
  PI_k_tripot: P({ title: "Le tripot du Pont-Neuf",
    text: [
      "Sous la deuxième arche du Pont-Neuf, là où la Pallante fait un remous, un tripot de planches, avec des lanternes et une table de dés. On y joue de l'argent, des bagues, des secrets. Surtout des secrets, depuis que les greffiers paient pour en entendre.",
      "Un gros homme en tablier de boucher te fait signe. « Pie ! Un coup ? Ta mise contre la mienne. Ma mise, c'est ce qu'on raconte sur la tour cette semaine. »",
    ],
    choices: [
      { label: "Jouer, avec tes dés à toi", test: { dom: "discretion", label: "Les dés pipés", help: [{ if: { item: "crochets" }, v: 5 }] },
        win: { fx: { flag: "pie:rumeur", ep: ["perso", 600] }, to: "PI_k_tripot_gagne" }, lose: { fx: { gold: -2 }, to: "PI_k_tripot_perdu" } },
      { label: "Regarder jouer, et ressortir", to: "PI_ville" },
    ] }),
  PI_k_tripot_gagne: P({ title: "Ce qu'on raconte",
    text: [
      "Tu gagnes. Il paie, en se penchant par-dessus la table, très bas : « Les blanchisseuses. On en a embauché six de plus, à la tour, ce mois-ci. Six. Pour laver quoi ? Personne ne dort là-dedans. » Il se redresse. « On dit qu'ils lavent des draps pour des gens qu'on n'a jamais vus entrer. Et qu'on ne voit jamais ressortir. »",
    ],
    choices: [{ label: "Ressortir", to: "PI_ville" }] }),
  PI_k_tripot_perdu: P({ title: "La mise",
    text: ["Le boucher ramasse ta mise en riant. « Tes dés sont pipés, Pie. Les miens aussi. Les miens sont mieux pipés. » Il te donne une claque dans le dos qui te coupe le souffle. Tu ressors plus pauvre et un peu plus modeste."],
    choices: [{ label: "Ressortir", to: "PI_ville" }] }),

  // ---------------------------------------------------------------- Acte III : Valcendre
  III_v_masques: P3({ title: "L'atelier des masques", place: "valcendre",
    text: [
      "Une boutique étroite, sous les arcades. Aux murs, des masques. Des centaines, de cuir, de bois, de papier, d'argent. Des visages sans yeux, qui regardent. Une femme les fabrique, assise à son établi, un masque blanc sur le visage, elle aussi.",
      "« Pour ceux qu'on a oubliés jusqu'au visage, dit-elle. Là-haut, quelqu'un se souvient de leur nom, parfois. Jamais de leur figure. Alors ici, ils n'en ont plus. Je leur en fais une. » Elle te montre un masque inachevé. « Celui-là, c'est un enfant de Lisse. Personne ne se souvient de son visage. Je fais un visage d'enfant, n'importe lequel. Il est content. »",
      { with: "sansnom", text: "Ton frère reste sur le seuil. Il touche, sans y penser, son propre masque. La femme le regarde. « Le tien, dit-elle, c'est moi qui l'ai fait. Il y a longtemps. Tu avais six ans. Tu voulais une figure de garçon qui sourit. »" },
    ],
    choices: [
      { label: "Lui demander si elle a fait celui de ta mère", fx: { ep: ["perso", 500] }, to: "III_v_masques_mere" },
      { label: "Retourner dans les rues", to: "III_v_porte" },
    ] }),
  III_v_masques_mere: P3({ title: "Pas de masque", place: "valcendre",
    text: [
      "Elle secoue la tête. « Ta mère n'en a jamais eu besoin. Quelqu'un, là-haut, se souvient de son visage. Tous les jours. Je ne sais pas qui. Un vieil homme, je crois. Quelqu'un qui ne voit plus rien, et qui la regarde quand même. »",
      "Elle reprend son masque d'enfant de Lisse. « C'est rare, dit-elle. Qu'on se souvienne d'un visage si longtemps. Il faut avoir beaucoup regardé. »",
    ],
    choices: [{ label: "Retourner dans les rues", fx: { flag: "iii:masque_mere" }, to: "III_v_porte" }] }),
  III_v_bains: P3({ title: "Les bains", place: "valcendre",
    text: [
      "Les bains publics de Valcendre, sous une coupole de marbre blanc. Des bassins, de la vapeur, des gens qui se lavent en silence, longtemps, avec application. L'eau ne mouille pas. Elle laisse seulement, sur la peau, une sensation de propre.",
      "Un vieil homme, dans le bassin chaud, t'explique : « On lave ce qui reste. Les dernières choses qu'on savait de là-haut. Le goût du sel, l'odeur d'une étable. Quand c'est parti, on est tout à fait d'ici. C'est reposant, d'être tout à fait d'ici. »",
    ],
    choices: [
      { label: "Entrer dans le bassin", fx: { pv: 10, flag: "iii:bains" }, to: "III_v_bains_eau" },
      { label: "Ne pas te laver", to: "III_v_porte" },
    ] }),
  III_v_bains_eau: P3({ title: "L'eau", place: "valcendre",
    text: [
      "Tu entres. L'eau est tiède. Tes muscles se dénouent, les coups, les marches, les nuits par terre, tout s'en va. C'est bon. C'est trop bon. Au bout d'un moment, tu cherches le nom du chien de Mathurin, et tu ne le trouves pas.",
      "Tu sors du bassin d'un coup, en éclaboussant le vieil homme. Il ne s'en offusque pas. Dehors, dans le froid de la rue, le nom revient. Pataud. Il s'appelait Pataud. Tu le répètes trois fois, à voix haute, au milieu de la rue, et des gens se retournent.",
    ],
    choices: [{ label: "Retourner dans les rues", to: "III_v_porte" }] }),
};
