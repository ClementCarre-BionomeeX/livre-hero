// Act IV · the Corvanne camp at night, after the margravine's tent and before recrossing the Lisse (the child leads,
// "tu" masculine). IV_cv_ilan now opens on this small hub: the people of the eleven villages lost in the white snow,
// who speak Esquarrois now; a sutler who keeps the camp's dead in her ledger of debts; the soldiers' cook and his
// pot; Rodric's people, if he came (he rings his three bells for them; he keeps them). Each returns to the hub; "Repasser la Lisse" keeps the old effect.
var A = { act: "IV", noLead: true };
function P(o) { return Object.assign({}, A, o); }
var BACK = [{ label: "Revenir entre les feux", back: "IV_cv_camp" }];
module.exports = {
  IV_cv_camp: P({ title: "Le camp de Corvanne", place: "brenne", hub: true,
    text: [
      "Le camp de Corvanne, la nuit. Des feux, des tentes bleues, des chevaux qu'on bouchonne, des hommes qui chantent à voix basse les chansons que tu as entendues de l'autre rive. De près, c'est un camp comme celui de Brenne. Les mêmes marmites. Les mêmes jurons, dans une autre langue.",
      "On te regarde passer. On ne t'arrête pas. Le bruit a couru que la margrave avait reçu un enfant aux yeux pâles, et qu'elle l'avait laissé ressortir.",
    ],
    choices: [
      { label: "Des gens en habits de paysans, au bout du camp, qui ne parlent pas corvannais", hide: { seen: "IV_cv_villages" }, to: "IV_cv_villages" },
      { label: "La cantinière et son grand livre", hide: { seen: "IV_cv_cantiniere" }, to: "IV_cv_cantiniere" },
      { label: "Le cuisinier, qui tourne une marmite grande comme une barque", hide: { seen: "IV_cv_cuisinier" }, to: "IV_cv_cuisinier" },
      { label: "Rodric, que des soldats entourent", hide: { any: [{ seen: "IV_cv_rodric" }, { not: { present: "rodric" } }] }, to: "IV_cv_rodric" },
      { label: "Un garçon qui tape sur un tambour, avec deux doigts", hide: { seen: "IV_cv_tambour" }, to: "IV_cv_tambour" },
      { label: "Une petite tente gardée, à l'écart", hide: { seen: "IV_cv_prisonniers" }, to: "IV_cv_prisonniers" },
      { label: "Repasser la Lisse", fx: { flag: "ilan:iv", ep: ["perso", 1500] }, to: "IV_br", big: true },
    ] }),
  IV_cv_villages: P({ title: "Les onze villages", place: "brenne",
    text: [
      "Au bout du camp, sous un auvent de toile, une cinquantaine de paysans, des femmes, des vieux, des enfants. Les gens des onze villages, ceux qu'on a retrouvés au printemps dans la neige blanche. La margrave les a fait venir pour qu'on les voie. Pour qu'on comprenne.",
      "Ils parlent esquarrois. Un esquarrois de la Lisse, avec l'accent de Brenne, comme s'ils étaient nés de l'autre côté. Ils ne comprennent pas les soldats qui leur apportent la soupe. Ils les remercient poliment, dans la mauvaise langue.",
      "Une vieille femme te prend la main. « Tu es d'ici, toi ? demande-t-elle, en esquarrois. Tu sais où on est ? On était chez nous. Et puis on était chez nous, mais ce n'était plus chez nous. »",
    ],
    choices: [
      { label: "Lui demander le nom de son village", fx: { ep: ["perso", 400] }, to: "IV_cv_villages_nom" },
      { label: "Rester un moment, et lui tenir la main", fx: { ep: ["perso", 300], flag: "iv:onze_villages" }, to: "IV_cv_villages_main" },
    ] }),
  IV_cv_villages_nom: P({ title: "Le nom", place: "brenne",
    text: ["Elle ouvre la bouche. Elle la referme. Elle cherche. « Il y avait un clocher, dit-elle. Avec un coq de travers. Et un lavoir, où ma mère m'emmenait. » Elle sourit. « Je ne sais plus comment il s'appelait. Mais le coq, je le vois. Il est toujours de travers. Ils n'ont jamais voulu le redresser. » Elle te serre la main, très fort. « Si tu le vois, ce coq, dis-moi où c'est. »"],
    choices: BACK }),
  IV_cv_villages_main: P({ title: "La main", place: "brenne",
    text: ["Tu restes. Elle te tient la main sans rien dire, longtemps. Au bout d'un moment, elle se met à fredonner, et ce n'est pas un air esquarrois. Ce n'est pas un air corvannais non plus. C'est plus vieux. Un air de la Lisse d'avant, quand il n'y avait qu'une seule rive. Les enfants, autour, s'arrêtent de jouer pour écouter. Ils ne le connaissent pas. Ils le connaissent."],
    choices: BACK }),
  IV_cv_cantiniere: P({ title: "La cantinière", place: "brenne",
    text: [
      "Une grande femme rousse, assise sur un tonneau, un registre de comptes ouvert sur les genoux. Elle vend du vin, du tabac, du fil, des lacets, à crédit. Tout le camp lui doit quelque chose. Elle note tout.",
      "« Et quand ils meurent, dit-elle, je ne raye pas la dette. Je mets une croix à côté, c'est tout. Je garde la page. » Elle feuillette. Des pages et des pages, des croix, des noms, des sommes. « Trente ans que je marche derrière cette armée. Les greffiers de la margrave perdent leurs listes. Moi, jamais. Les morts me doivent quatre cents écus. Je ne les réclamerai pas. Mais je sais qui ils étaient, à un sou près. »",
    ],
    choices: [
      { label: "Lui acheter un lacet, et lui dire ton nom pour la page", fx: { gold: -1, ep: ["perso", 400], flag: "iv:cantiniere" }, to: "IV_cv_cantiniere_nom" },
      { label: "Revenir entre les feux", back: "IV_cv_camp" },
    ] }),
  IV_cv_cantiniere_nom: P({ title: "À crédit", place: "brenne",
    text: ["Elle te regarde par-dessus son registre. « Tu as payé, dit-elle. Je n'ai pas besoin de ton nom. » Puis elle réfléchit. Elle tourne la page, jusqu'à une page blanche, et elle écrit, en haut, ce que tu lui dis. En dessous : *un lacet, payé comptant.* « Comme ça, dit-elle, s'il t'arrive quelque chose demain, tu ne me devras rien, et quelqu'un saura quand même que tu es passé. C'est le mieux qu'on puisse avoir, à la guerre. »"],
    choices: BACK }),
  IV_cv_cuisinier: P({ title: "La marmite", place: "brenne",
    text: [
      "Un petit homme rond, tout en tablier, qui tourne avec une rame une marmite où l'on pourrait mettre trois enfants. Ça sent le chou, le lard, et quelque chose d'autre, de très bon, que tu ne connais pas. Il t'en sert une écuelle sans te demander qui tu es.",
      "« Une soupe de la Lisse, dit-il. Ma grand-mère la faisait. Côté Corvanne, on met du cumin. Côté Esquarre, du laurier. » Il goûte. « Moi, je mets les deux. Ma grand-mère était d'un côté, mon grand-père de l'autre. Il paraît que ça ne se faisait pas. Ils l'ont fait quand même. »",
      { with: "gaspard", text: "Gaspard goûte la soupe, les yeux fermés. Puis il demande la rame, et le cuisinier la lui donne, et ils tournent ensemble, à deux, sans un mot, comme deux hommes qui se connaissent depuis toujours." },
    ],
    choices: [{ label: "Finir l'écuelle", fx: { pv: 5, food: 1 }, to: "IV_cv_camp" }] }),
  IV_cv_rodric: P({ title: "Les gens du pont", place: "brenne",
    text: [
      "Autour de Rodric, une dizaine de soldats, des vieux surtout, qui le regardent comme un revenant. Ils l'ont connu. Ils viennent du même pays, de la même rivière, des villages autour du pont qui a brûlé.",
      "Un vieux soldat sans dents lui prend les deux mains et dit une phrase, en corvannais, que Rodric ne traduit pas. Puis il montre les trois cloches, cousues à l'épaule de Rodric, et il demande quelque chose. Rodric les fait sonner du bout du doigt, l'une après l'autre, lentement, au milieu du cercle.",
      "Les vieux ferment les yeux. Ils écoutent. À la troisième, l'un d'eux pleure, sans bruit, et les autres font semblant de ne pas le voir. Rodric laisse retomber sa main. « C'est le son du pont, dit-il quand il revient vers toi. Le son qu'il faisait, avant, quand les charrettes passaient. Ils ne l'avaient pas entendu depuis vingt ans. » Il ne dit plus rien de la soirée.",
    ],
    choices: [{ label: "Revenir entre les feux", fx: { conf: { rodric: 10 }, ep: ["perso", 600], flag: "iv:rodric_pays" }, back: "IV_cv_camp" }] }),
};
