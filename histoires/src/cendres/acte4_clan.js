// Act IV · the clan of the Raven, a year after the fall. Three ways to find Corbe: she came back with the child
// (rupture:avec:corbe), she came back through the door without her name after the rite (corbe:rite_ii), or she stayed
// in the world all year (as the one whose mother went in, the one who opened the door, or the one who refused).
var A = { act: "IV", noLead: true };
function P(o) { return Object.assign({}, A, o); }
var AVEC = { has: "rupture:avec:corbe" }, RITE = { has: "corbe:rite_ii" };
var RESTEE = { not: { any: [AVEC, RITE] } };
module.exports = {
  IV_r_clan: P({ title: "Les crêtes", place: null,
    text: [
      "Le sentier des Combes. Il y a un an, la neige blanche couvrait tout. Maintenant, l'herbe, les gentianes, les marmottes qui sifflent. Mais sur les crêtes, à intervalles réguliers, des cairns neufs. Sur chaque cairn, un morceau d'écorce gravé de signes du clan.",
      { with: "corbe", text: "Corbe s'arrête au premier. « Des noms, dit-elle. Ils ont appris à les écrire. » Elle touche l'écorce. « Ils ont appris à écrire. » Elle ne sait pas si elle est fière ou triste." },
      { without: "corbe", text: "Tu ne sais pas lire ces signes. Tu sais ce que c'est quand même : des noms. Le clan a appris, cette année, qu'on ne peut pas tout garder dans sa bouche." },
    ],
    choices: [{ label: "Continuer", to: "@route" }] }),

  IV_clan: P({ title: "Le camp", place: "corbeau",
    text: [
      "Le camp est plus petit. La moitié des tentes, peut-être moins. Il y a des places vides dans le cercle, qu'on a laissées vides exprès, avec une pierre posée au milieu.",
      { if: { has: "nord:lievre=adoptes" }, text: "Au bout du camp, pourtant, des tentes basses, rondes, couleur de terre, qui ne sont pas des tentes du Corbeau. Sur chacune, un corbeau peint à l'ocre, avec un trait. Des enfants en sortent, qui parlent la langue du clan avec un drôle d'accent." },
      { if: { has: "nord:rendu=clan" }, text: "Hrodna sort de sa tente. Elle a vieilli. Elle te reconnaît tout de suite, et elle dit ton nom, et elle te serre les avant-bras à la manière du clan. « La moitié d'entre nous est tombée avec toi, dit-elle. L'autre moitié a appris à écrire. »" },
      { if: { not: { has: "nord:rendu=clan" } }, text: "Une femme sort de la grande tente, le visage peint de blanc, sans un signe. Elle ne te reconnaît pas. Elle te salue poliment, comme on salue un étranger qui a l'air fatigué. Un homme lui dit à l'oreille qu'elle s'appelle Hrodna. Elle hoche la tête : elle le sait. On le lui dit chaque matin." },
      { if: AVEC, text: "Puis elle voit Corbe, derrière toi. Le camp se tait." },
      { if: RITE, text: "Puis elle te fait signe de la suivre, et elle t'emmène au bout du camp, vers une pierre où quelqu'un est assis." },
      { if: { all: [RESTEE, { has: "nord:rendu=clan" }] }, text: "Puis elle regarde vers le haut du camp, vers une tente à l'écart, et elle dit : « Elle est là. Elle t'attendait. Elle n'a jamais dit qu'elle t'attendait. »" },
      { if: { all: [RESTEE, { not: { has: "nord:rendu=clan" } }] }, text: "L'homme, lui, te reconnaît. Il regarde vers le haut du camp, vers une tente à l'écart, et il dit : « Elle est là. Elle t'attendait. Elle n'a jamais dit qu'elle t'attendait. »" },
    ],
    choices: [
      { label: "Laisser Corbe rentrer chez elle", hide: { not: AVEC }, to: "IV_clan_retour" },
      { label: "Aller jusqu'à la pierre", hide: { not: RITE }, to: "IV_clan_bouche" },
      { label: "Monter à la tente à l'écart", hide: { not: RESTEE }, to: "IV_clan_restee" },
    ] }),

  // ---- She came back with the child
  IV_clan_retour: P({ title: "Le retour", place: "corbeau",
    text: [
      "Corbe traverse le cercle. Personne ne bouge.",
      { if: { has: "askel:rite" }, text: "Elle s'arrête devant la place vide où était la tente de sa mère, avec la pierre au milieu." },
      { if: { not: { has: "askel:rite" } }, text: "Elle s'arrête devant la tente de sa mère." },
      { if: { has: "ame:askel" }, text: "Derrière elle, Askel. Dans sa robe blanche, sale de l'herbe du col. Il y a un cri, quelque part dans le camp, un seul, et puis tout le clan est debout, et des femmes pleurent, et des enfants ne comprennent pas pourquoi. Askel va droit à sa place, enlève la pierre, et s'assied par terre, exactement là où était son métier à tisser. « Il me faut de la laine », dit-elle." },
      { if: { all: [{ has: "askel:rite" }, { not: { has: "ame:askel" } }] }, text: "Elle ne dit rien. Elle pose la main sur la pierre. « Elle chante, dit-elle à Hrodna. À la porte. Elle tient. Elle n'a pas froid. » Hrodna hoche la tête. Le clan se met à chanter, tout bas, le nom d'Askel, celui qu'on n'avait plus le droit de dire." },
      { if: { not: { has: "askel:rite" } }, text: "Askel en sort. Elle a cousu toute l'année, assise devant la porte, face au col. Elle prend Corbe dans ses bras sans un mot, et la serre, longtemps, d'une force de femme qui a porté de l'eau toute sa vie." },
      { if: { has: "corbe:tresse" }, text: "Une jeune femme fend la foule, une petite bourse de cuir à la main. Embla. Elle s'arrête devant Corbe. Elle regarde son visage, longtemps, pour savoir. Puis elle ouvre la bourse et elle en sort une tresse noire nouée d'un fil rouge, et elle la lui met dans la main, et elle referme ses doigts dessus. Corbe ne dit rien. Elle sait. Embla aussi." },
      "Ce soir-là, le clan fait un feu pour elle. On lui demande de raconter. Elle raconte la plaine blanche, les marcheurs, la ville aux tours, les morts qui ne veulent pas être vengés. Les anciens écoutent sans rien dire. Les jeunes ne la croient qu'à moitié.",
    ],
    choices: [{ label: "Attendre la fin du feu", to: "IV_clan_choix" }] }),

  IV_clan_choix: P({ title: "Rester", place: "corbeau",
    text: [
      "À la fin du feu, Hrodna se lève. « Le clan descend, dit-elle. Pas pour la guerre. Pour les morts. Ceux de la vallée des Cendres sont à nous aussi, et des deux côtés de la Lisse on va se battre sur leurs os. Il faut quelqu'un pour leur chanter. »",
      "Elle regarde Corbe. « Tu es la Bouche. Tu descends avec le clan, ou avec eux. »",
      "Corbe te regarde. Elle attend que tu dises quelque chose. Puis elle comprend que tu ne diras rien, que c'est à elle, et elle sourit, d'un sourire de travers.",
    ],
    choices: [
      { label: "« Viens avec nous. Le clan trouvera la guerre tout seul. »", fx: { flag: "corbe:iv=nous", conf: { corbe: 10 }, ep: ["perso", 1500] }, to: "IV_clan_fin" },
      { label: "« Va avec ton clan. On se retrouvera à la Lisse. »", fx: { flag: ["corbe:iv=clan", "clan:descend"], away: "corbe", ep: ["perso", 1500] }, to: "IV_clan_fin" },
    ] }),

  // ---- She went through the rite and came back without her name
  IV_clan_bouche: P({ title: "La Bouche", place: "corbeau",
    text: [
      "Elle est assise sur une pierre, face au col, les mains sur les genoux. On lui a mis une couverture sur les épaules. Elle a les cheveux longs, maintenant, et blancs aux tempes, et elle a vingt-deux ans.",
      "« On l'a trouvée au printemps, dit Hrodna. Au col, sur la grande pierre. La porte l'a rendue quand la neige s'est arrêtée. Elle n'a pas de nom. Elle ne parle pas. Elle chante, la nuit, le chant des morts, tout entier, sans se tromper. Les petits viennent l'écouter. »",
      "Elle lève la tête quand tu approches. Elle te regarde. Elle ne te reconnaît pas. Mais elle te regarde comme on regarde quelqu'un qui vient du même endroit que soi.",
    ],
    choices: [
      { label: "Lui dire son nom", test: { dom: "magie", label: "Le nom", help: [{ if: { has: "corbe:lettres" }, v: 20 }, { if: { has: "nord:chant_lu" }, v: 10 }, { if: { has: "aelan:dit_les_noms" }, v: 15 }, { if: { has: "nord:lignee" }, v: 10 }, { if: { has: "nord:bouches=aude" }, v: 5 }] },
        win: { fx: { join: "corbe", flag: ["corbe:iv=nommee", "corbe:revenue"], conf: { corbe: 25 }, ep: ["perso", 3000] }, to: "IV_clan_nommee" },
        lose: { fx: { join: "corbe", flag: ["corbe:iv=sans_nom", "corbe:revenue"], conf: { corbe: 10 }, ep: ["perso", 1500] }, to: "IV_clan_sans_nom" } },
    ] }),

  IV_clan_nommee: P({ title: "Corbe", place: "corbeau",
    text: [
      "Tu t'accroupis devant elle. Tu dis : « Corbe. »",
      { if: { has: "corbe:lettres" }, text: "Elle ne réagit pas. Alors tu prends un bâton, et tu écris dans la terre, comme Pie le lui a appris : un C, un O, un R qui ressemble à un corbeau, un B, un E. Elle regarde les lettres. Elle tend la main, et elle refait le R, de travers, exactement de travers." },
      { if: { not: { has: "corbe:lettres" } }, text: "Elle ne réagit pas. Alors tu le chantes, sur l'air du chant des morts, comme un nom de la liste. Au troisième passage, elle chante avec toi. Au quatrième, elle s'arrête au milieu, et elle dit le nom toute seule, en parlant, d'une voix rouillée d'un an de silence." },
      "« Corbe, dit-elle. La fille d'Askel. » Elle a l'air de goûter chaque mot. « J'ai volé une bague à un corbeau. » Elle rit. Le clan, derrière, n'ose pas rire avec elle.",
    ],
    choices: [{ label: "L'aider à se lever", to: "IV_clan_fin" }] }),

  IV_clan_sans_nom: P({ title: "Sans nom", place: "corbeau",
    text: [
      "Tu dis : « Corbe. » Tu le dis dix fois, de dix façons. Elle t'écoute avec attention, avec gentillesse, comme on écoute un enfant qui raconte un rêve. Le nom ne prend pas. Il glisse sur elle comme la neige glissait sur toi.",
      "Mais quand tu te relèves pour partir, elle se lève aussi. Elle plie sa couverture. Elle prend le tambour qu'on a posé à côté d'elle, celui avec le corbeau qui crie, et elle te suit.",
      "Hrodna ne la retient pas. « Elle ne s'était jamais levée, dit-elle. Pour personne. » Elle a l'air de quelqu'un qui comprend quelque chose trop tard.",
    ],
    choices: [{ label: "Partir avec elle", to: "IV_clan_fin" }] }),

  // ---- She stayed in the world all year
  IV_clan_restee: P({ title: "La tente à l'écart", place: "corbeau",
    text: [
      "La tente est petite, et propre, et pleine d'écorces gravées, empilées, rangées, des centaines. Corbe est assise au milieu, un couteau à la main, en train d'en graver une autre. Elle lève les yeux. Elle ne se lève pas tout de suite.",
      { if: { has: "corbe:voie_ii=askel" }, text: "« Tu es revenu, dit-elle. Ma mère, non. » Elle pose le couteau. « Je grave les noms de ceux qui sont tombés au col. Le clan ne sait pas lequel de nous doit les chanter, maintenant que la Bouche est partie à ma place. Alors je les écris. Comme ça, n'importe qui pourra. »" },
      { if: { has: "corbe:voie_ii=ouvre" }, text: "« Tu es revenu, dit-elle. Eux aussi. » Elle montre, par la porte de la tente, une vieille femme assise au soleil avec un enfant sur les genoux. La première qui a passé le seuil, au col. « Ils sont onze. Ils ne parlent pas notre langue. Ils m'apprennent la leur. Les anciens disent que j'ai ouvert la porte et que c'est pour ça que la montagne a craqué. Ils ont peut-être raison. »" },
      { if: { has: "corbe:voie_ii=refus" }, text: "« Tu es revenu, dit-elle. Ça fait une personne qui ne me crache pas dessus. » Elle pose le couteau. « J'ai dit non. Personne n'est entré. Et la montagne a craqué quand même, et la moitié du clan est tombée. Ils disent que si j'avais fait le rite, ils seraient là. Personne ne peut savoir. Moi non plus. »" },
      { if: { has: "ame:askel" }, text: "Puis elle voit Askel, derrière toi. Le couteau tombe. Elle ne dit rien. Elle se lève, et elle va à sa mère, et elle pose son front contre le sien, à la manière du clan, et elles restent comme ça très longtemps." },
    ],
    choices: [
      { label: "« Viens avec nous. On descend vers la guerre. »", to: "IV_clan_restee_viens" },
      { label: "Lui raconter l'Outre-Blanc d'abord", fx: { conf: { corbe: 10 } }, to: "IV_clan_restee_recit" },
    ] }),

  IV_clan_restee_recit: P({ title: "Ce qu'il y a de l'autre côté", place: "corbeau",
    text: [
      "Tu lui racontes. La plaine, Givre, les marcheurs, Bourdonne, la ville aux tours blanches, les cinq dans la glace. Elle t'écoute en gravant, sans lever les yeux, et à un moment elle arrête de graver.",
      "Quand tu parles des morts de Valcendre, qui ne veulent pas être vengés, seulement rentrer, elle repose l'écorce. « Le clan croit qu'on garde la porte fermée pour protéger le monde des morts, dit-elle. C'est le contraire. On la garde fermée pour protéger les morts du monde. Pour qu'on ne les voie pas. » Elle a l'air fatiguée d'un coup. « Trois cents ans qu'on chante pour ne pas les voir. »",
    ],
    choices: [{ label: "« Viens avec nous. »", to: "IV_clan_restee_viens" }] }),

  IV_clan_restee_viens: P({ title: "Descendre", place: "corbeau",
    text: [
      "Corbe range son couteau dans sa botte. Elle regarde ses écorces, les centaines d'écorces.",
      "« Le clan descend aussi, dit-elle. Hrodna l'a décidé hier. Pour les morts de la vallée, des deux côtés de la Lisse. Quelqu'un doit chanter pour eux. Je peux y aller avec eux, ou avec toi. »",
    ],
    choices: [
      { label: "« Avec nous. »", fx: { join: "corbe", flag: ["corbe:iv=nous", "corbe:revenue"], conf: { corbe: 10 }, ep: ["perso", 2000] }, to: "IV_clan_fin" },
      { label: "« Avec eux. On se retrouvera à la Lisse. »", fx: { flag: ["corbe:iv=clan", "clan:descend", "corbe:revenue"], ep: ["perso", 1500] }, to: "IV_clan_fin" },
    ] }),

  IV_clan_fin: P({ title: "Le clan du Corbeau", place: "corbeau",
    fx: { flag: "iv:clan_vu" },
    text: [
      { if: { all: [{ not: { seen: "IV_clan_fin" } }, { has: "corbe:iv=clan" }] }, text: "Le lendemain, le clan plie les tentes. Corbe marchera en tête, à côté de Hrodna, le tambour sur le dos : ils prennent le sentier de l'est, vers la Lisse. Avant de rejoindre la colonne, elle se retourne et lève la main. Tu lèves la tienne. Toi, tu redescendras vers le moutier." },
      { if: { all: [{ not: { seen: "IV_clan_fin" } }, { not: { has: "corbe:iv=clan" } }, { not: { has: "corbe:iv=sans_nom" } }] }, text: "Le lendemain, vous vous préparez à redescendre vers le moutier. Le clan vous regarde faire depuis le bord du camp. Hrodna fait un geste que tu ne connais pas, la main ouverte, puis fermée. Corbe te dit que ça veut dire : on se retrouvera là où il y aura des morts." },
      { if: { all: [{ not: { seen: "IV_clan_fin" } }, { has: "corbe:iv=sans_nom" }] }, text: "Le lendemain, vous vous préparez à redescendre vers le moutier. Le clan vous regarde faire depuis le bord du camp. Hrodna fait un geste que tu ne connais pas, la main ouverte, puis fermée. Un ancien te le traduit : on se retrouvera là où il y aura des morts." },
      { if: { all: [{ not: { seen: "IV_clan_fin" } }, { has: "ame:askel" }, { not: { has: "corbe:iv=clan" } }] }, text: "Askel reste au camp. Elle a déjà monté son métier. Elle ne regarde pas sa fille se préparer, exprès, parce que c'est comme ça qu'on fait." },
      { again: true, text: "Le camp, avant le départ. On roule les peaux, on éteint les feux un par un. Tu as encore un peu de temps." },
    ],
    choices: [
      { label: "La petite fille sur la pierre, au bord du camp", hide: { seen: "IV_Q_ylva" }, to: "IV_Q_ylva" },
      { label: "Le vieux Torgal, sous son auvent", hide: { seen: "IV_k_torgal" }, to: "IV_k_torgal" },
      { label: "Le troupeau, et le vieil Arnald qui compte", hide: { seen: "IV_k_arnald" }, to: "IV_k_arnald" },
      { label: "Des enfants qui tracent des signes dans la cendre", hide: { seen: "IV_k_lettres" }, to: "IV_k_lettres" },
      { label: "Les traîneaux, sur le tarn", hide: { seen: "IV_k_leif" }, to: "IV_k_leif" },
      { label: "La vieille Gunnhild, qui raconte aux enfants", hide: { seen: "IV_k_gunnhild" }, to: "IV_k_gunnhild" },
      { label: "Redescendre vers le moutier", travel: "r_iv_clan" },
    ] }),
};
