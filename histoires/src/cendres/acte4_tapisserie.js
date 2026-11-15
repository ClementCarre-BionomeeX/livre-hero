// Act IV · "La tapisserie de Hautvent", off IV_br (the child leads, "tu"): Maëlle and the weavers want to weave, on the
// eve of the battle, a long cloth with the names of both banks; the child gathers names in the queen's camp (the
// chaplain's lead tags make it easy, iv:plaques) and across the Lisse, then brings them back. iv:tapisserie=complete
// helps the bridge test (IV_l_pont2); iv:tapisserie=moitie is only woven on one side.
var A = { act: "IV", noLead: true };
function P(o) { return Object.assign({}, A, o); }
module.exports = {
  IV_Q_tap: P({ title: "La tapisserie", place: "brenne",
    fx: { questSeen: "IV_Q_tapisserie" },
    text: [
      "Maëlle t'attend sous l'auvent du plus grand métier de Hautvent, celui qui sert aux draps de mariage. Elle a monté une chaîne de laine écrue, large de trois pieds, qui part du métier, traverse la rue sur des tréteaux et va jusqu'au lavoir. « Cent pas, dit-elle. Le temps qu'on a. »",
      "« Demain, ils vont se battre sur le pont. Nous, on est entre les deux. Empêcher, c'est au-dessus de nos forces. Tisser, on sait. » Elle passe la main sur la chaîne. « Les noms des deux rives. Tous ceux qu'on pourra. Ceux d'en haut, ceux d'en face. Dans la même toile, fil contre fil. Et demain matin, on la tend sur le pont, d'une rive à l'autre. Qu'ils marchent dessus, s'ils osent. »",
      "« Il me faut les noms. Mes jambes s'arrêtent au lavoir. Les tiennes vont plus loin. »",
    ],
    choices: [{ label: "« Je te les rapporterai. »", fx: { flag: "iv:tap_promis" }, to: "IV_br" }] }),
  IV_Q_tap_esq: P({ title: "Les noms d'Esquarre", place: "brenne",
    text: [
      { if: { has: "iv:plaques" }, text: "Tu vas trouver l'aumônier. Il a gardé la liste de toutes les plaques qu'il a frappées, sur un rouleau, pour les familles. Il te le donne d'un geste, sans l'ombre d'une hésitation. « Qu'elles servent deux fois, dit-il. C'est mieux qu'une. » Deux mille noms, de sa grosse écriture d'homme d'Église." },
      { if: { not: { has: "iv:plaques" } }, text: "Tu passes de feu en feu dans le camp de la reine, avec une tablette et une craie. Tu demandes leurs noms aux soldats. Certains rient. Certains te chassent. Certains cherchent leur propre nom, un instant de trop. Mais beaucoup te le disent, et le répètent, et te regardent l'écrire, comme si c'était important." },
    ],
    choices: [
      { label: "Rapporter les noms", hide: { not: { has: "iv:plaques" } }, fx: { flag: "iv:tap_esq", ep: ["perso", 600] }, to: "IV_br" },
      { label: "Continuer jusqu'au soir", hide: { has: "iv:plaques" }, test: { dom: "social", label: "Les feux du camp", help: [{ if: { present: "ysolde" }, v: 20 }, { if: { present: "gaspard" }, v: 10 }, { if: { has: "iv:infirmerie" }, v: 15 }] },
        win: { fx: { flag: "iv:tap_esq", ep: ["perso", 800] }, to: "IV_Q_tap_esq_ok" }, lose: { to: "IV_Q_tap_esq_rate" } },
    ] }),
  IV_Q_tap_esq_ok: P({ takes: "evening", title: "Une tablette pleine", place: "brenne",
    text: ["Au soir, tu as rempli la tablette, et le dos de ta chemise, et le revers de ta main. Huit cents noms. Un sergent, à un feu, t'a demandé d'écrire aussi celui de son frère, mort l'an dernier. Tu l'as écrit. Ça fera un mort parmi les vivants, sur la toile. Maëlle s'en accommodera."],
    choices: [{ back: "IV_br" }] }),
  IV_Q_tap_esq_rate: P({ title: "Les feux", place: "brenne",
    text: ["Au troisième feu, un capitaine te prend ta tablette et la jette dans les flammes. « Pas d'espions dans mon camp, dit-il. Même pas des petits. » Tu recommences ailleurs. Au soir, tu as quelques dizaines de noms, et un peu de honte pour le reste."],
    choices: [{ back: "IV_br" }] }),
  IV_Q_tap_cv: P({ title: "Les noms de Corvanne", place: "brenne",
    text: [
      "Rodric te fait repasser la Lisse, de nuit, dans la barque de son beau-frère, les rames entourées de chiffons. Sur l'autre rive, le camp bleu. Les feux. Les mêmes gens que de ce côté-ci, avec un autre accent.",
      "Tu as une tablette. Comment demander leur nom à des soldats ennemis la veille d'une bataille ?",
    ],
    choices: [
      { label: "Leur dire pourquoi", test: { dom: "social", label: "Les feux bleus", help: [{ if: { present: "lisandre" }, v: 20 }, { if: { has: "ilan:iv" }, v: 15 }, { if: { has: "sud:galere=liberee" }, v: 20 }, { if: { present: "rodric" }, v: 10 }] },
        win: { fx: { flag: "iv:tap_cv", ep: ["perso", 1000] }, to: "IV_Q_tap_cv_ok" }, lose: { to: "IV_Q_tap_cv_rate" } },
    ] }),
  IV_Q_tap_cv_ok: P({ title: "D'en face", place: "brenne",
    text: [
      "Au premier feu, ils te regardent comme on regarde un échappé de l'hospice. Tu expliques. La toile, les deux rives, fil contre fil. Un vieux piquier se met à rire, puis il te dit son nom. Puis son voisin. Puis tout le feu. Le bruit se répand de feu en feu, et ils viennent à toi, à la fin, ils font la queue, comme sur la place aux Clercs, mais pour le contraire.",
      { if: { has: "sud:galere=liberee" }, text: "À un feu, un homme blond te reconnaît, ou reconnaît quelque chose dans ton histoire. « La galère de Vasselin, dit-il. Il y avait une chanteuse. » Il te donne cinquante noms, d'un coup : tous ceux de son banc, et il les sait par cœur. « On les a appris en ramant, dit-il. Après. Pour ne plus jamais les céder. »" },
    ],
    choices: [{ label: "Repasser la rivière", to: "IV_br" }] }),
  IV_Q_tap_cv_rate: P({ title: "La sentinelle", place: "brenne",
    text: ["Une sentinelle te voit avant ton premier mot. On te pousse vers la rivière, à coups de hampe, sans méchanceté, comme on chasse un chien. Rodric te repêche à la barque. « Ils ont peur, dit-il. Demain, ils seront morts ou vivants. Ce soir, ils ont peur. Leur nom, il fallait le leur demander un autre soir. »"],
    choices: [{ back: "IV_br" }] }),
  IV_Q_tap_fin: P({ takes: "morning", title: "La nuit des métiers", place: "brenne",
    text: [
      "Tu rapportes les noms à Hautvent. Toutes les femmes du village sont là, onze métiers montés dans la rue, les lampes allumées sur des escabeaux. On lit les noms à voix haute, et elles les tissent, en laine brune, en laine bleue, un nom après l'autre, tout au long de la chaîne, toute la nuit.",
      { if: { all: [{ has: "iv:tap_esq" }, { has: "iv:tap_cv" }] }, text: "À l'aube, la toile fait cent pas. Les noms d'Esquarre en brun, ceux de Corvanne en bleu, et ils se mélangent, au milieu, si serrés que les rives se confondent. Maëlle coupe le dernier fil avec les dents. Elle garde le silence. Elle roule la toile, et elle la charge sur une brouette." },
      { if: { not: { all: [{ has: "iv:tap_esq" }, { has: "iv:tap_cv" }] } }, text: "À l'aube, la toile n'est remplie qu'à moitié. Une rive seulement, ou presque. L'autre moitié est blanche, cinquante pas de laine écrue, nue. Maëlle la regarde longtemps. « On la tendra quand même, dit-elle. Le blanc aussi, ça dit quelque chose. »" },
    ],
    choices: [
      { label: "Suivre la brouette", hide: { not: { all: [{ has: "iv:tap_esq" }, { has: "iv:tap_cv" }] } }, fx: { quest: "IV_Q_tapisserie", flag: "iv:tapisserie=complete", ep: ["perso", 1500] }, to: "IV_Q_tap_fin2" },
      { label: "Suivre la brouette", hide: { all: [{ has: "iv:tap_esq" }, { has: "iv:tap_cv" }] }, fx: { quest: "IV_Q_tapisserie", flag: "iv:tapisserie=moitie", ep: ["perso", 800] }, to: "IV_Q_tap_fin2" },
    ] }),
  IV_Q_tap_fin2: P({ title: "La toile", place: "brenne",
    text: ["Ils la tendront au pont, le matin de la bataille. Ce qu'il en adviendra, tu le verras sur place. Ta nuit s'est passée debout. Tu as les doigts pleins de bourre de laine. Tu as entendu, toute la nuit, tous ces noms, et ta mémoire les a laissés filer, et c'est très bien comme ça : ils sont dans la toile."],
    choices: [{ back: "IV_br" }] }),
};
