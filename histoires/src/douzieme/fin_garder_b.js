// Le Douzième Coup · dénouement « garder », part B : the decision at the fountain (`Fg_conseil`, `monde: "garde"` :
// `monde:g_dedans` they stay inside the note, as long as the sand lasts | `monde:g_dehors` they walk out past the
// seventh poplar and keep it from outside, with a sealed reserve to come back one day). Inside : `Fg_dedans`, the
// clocks, the names, the edge, the two Cahiers side by side, the last pinches (`monde: "place"` : `monde:g_place_postes`
// | `monde:g_place_fontaine`), `Fg_fin_dedans`. Outside : the iron door, the poplar, the child on the bridge, the abbey
// (`monde:g_abbaye`), a year of each, the first anniversary (`monde: "reserve"` : `monde:g_reserve_une` |
// `monde:g_reserve_deux`), `Fg_fin_dehors`. Both end passages set `fin:garder`.
var P = {};
var J = { has: "role:passe" }, R = { has: "role:reste" };
var SORTIS = { has: "monde:noyers_sortis" };
var A_REINE = { has: "monde:g_avis_reine" }, A_COUDRIER = { has: "monde:g_avis_coudrier" };
var A_BECU = { has: "monde:g_avis_becu" }, A_PERRINE = { has: "monde:g_avis_perrine" };
var AUCUN_AVIS = { not: { any: [A_REINE, A_COUDRIER, A_BECU, A_PERRINE] } };
var LIGNE = { has: "monde:g_ligne" };

Object.assign(P, {
  Fg_conseil: { act: "V", title: "La margelle, à midi pour toujours", backName: "la fontaine", place: "tour", ambiance: "ville", charniere: true, aparte: true,
    text: [
      { first: true, text: "Vous vous asseyez sur la margelle de la fontaine des Jurés. Le fil d'eau est au-dessus de vos têtes, courbé, avec sa goutte. On a envie de la cueillir. On la laisse." },
      { first: true, if: A_REINE, text: "La Reine a dit : *je ne suis pas bon juge de ce qu'on arrête.* Elle avait la main tendue, à la fin, comme on retient quelqu'un." },
      { first: true, if: A_COUDRIER, text: "Le Grand Maître a dit : *gardez, mais écrivez-le.* Il aurait choisi vite, et il le savait." },
      { first: true, if: A_BECU, text: "La dentellière a dit : *on ne fait pas une dentelle pour le carreau.* Elle avait du pain au four." },
      { first: true, if: A_PERRINE, text: "La colporteuse a dit : *gardez, si vous ne savez pas. Mais pas pour toujours.* Elle n'a pas fini sa phrase sur les almanachs." },
      { first: true, if: AUCUN_AVIS, text: "Vous n'avez éveillé personne. Vous avez regardé. Il y a là quarante mille avis, et vous avez gardé votre sable pour vous : c'est aussi une façon de leur demander, que de voir comment ils se tiennent." },
      { first: true, text: "Les deux sachets ont baissé. On le sent au poids, contre la poitrine." },
      { first: true, if: J, text: "« On le dit pas, alors, dit {autre}. Pas aujourd'hui. — Il n'y a que des aujourd'hui, ici. — Tu m'as compris. » Tu as compris. Vous avez le mot, tous les deux, et aucun de vous n'a plus envie de s'en débarrasser sur l'autre. C'est déjà quelque chose de su." },
      { first: true, if: R, text: "« On le dit pas, alors, dis-tu. Pas aujourd'hui. — Il n'y a que des aujourd'hui, ici. — Tu m'as compris. » Vous avez le mot, tous les deux, et aucun de vous n'a plus envie de s'en débarrasser sur l'autre. C'est déjà quelque chose de su." },
      { first: true, text: "Reste à savoir d'où l'on garde. De dedans : debout dans la ville, les deux seuls qui bougent, tant qu'il y a du sable ; et le jour où il n'y en a plus, on sera pris à son tour, le mot dans la bouche. Ou de dehors : on passe le septième peuplier pendant qu'on le peut, on met de côté de quoi revenir une fois, et l'on vit au bord, dans l'année qui continue, en regardant ce rond d'une lieue." },
      { again: true, text: "La margelle. Le fil d'eau, la goutte, la note." },
    ],
    choices: [
      { label: "Vous deux : dedans. On reste avec eux, tant qu'il y a du sable.", monde: "garde", option: "dedans", fx: { flag: "monde:g_dedans" }, to: "Fg_dedans" },
      { label: "Vous deux : dehors. On passe le bord, et l'on garde de quoi revenir.", monde: "garde", option: "dehors", fx: { flag: "monde:g_dehors" }, to: "Fg_porte" },
    ] },

  // ===== inside
  Fg_dedans: { act: "V", title: "Les deux seuls qui bougent", place: "tour", ambiance: "ville", hub: true, backName: "la ville tenue",
    text: [
      { first: true, text: "On reste. On s'installe, si le mot a un sens dans une ville où l'on n'a ni faim ni sommeil : on choisit un endroit où poser les Cahiers. C'est l'atelier du levant, sur la colline, parce qu'il y a de la lumière, deux établis libres, et une fenêtre d'où l'on voit la Tour." },
      { first: true, text: "On apprend vite les règles. Marcher mange du sable ; rester assis en mange moins ; ne rien faire du tout, presque pas. On pourrait durer très longtemps, immobiles côte à côte, à regarder un rayon. Vous essayez. Vous tenez le temps de compter jusqu'à mille, et vous éclatez de rire." },
      { first: true, text: "Alors on se donne de l'ouvrage. On est deux, on est de métier, et il y a là une ville entière qui n'a personne pour s'occuper d'elle." },
      { again: true, text: "La ville tenue. Midi, le soleil droit, la note. Vos deux sachets, qui baissent." },
    ],
    choices: [
      { label: "Les horloges de la ville", hide: { seen: "Fg_horloges" }, to: "Fg_horloges" },
      { label: "Les noms", hide: { seen: "Fg_noms" }, to: "Fg_noms" },
      { label: "Marcher jusqu'au septième peuplier, pour voir", hide: { seen: "Fg_bord" }, to: "Fg_bord" },
      { label: "Les deux Cahiers, sur le même établi", hide: { seen: "Fg_cahiers" }, to: "Fg_cahiers" },
      { label: "Un oiseau de terre, pour quelqu'un", hide: { any: [J, { seen: "Fgr_sifflet" }] }, to: "Fgr_sifflet" },
      { label: "Un établi, sous la meilleure fenêtre", hide: { any: [R, { seen: "Fgj_loupe" }] }, to: "Fgj_loupe" },
      { label: "Les sachets sont presque vides", to: "Fg_dernier", big: true },
    ] },

  Fg_horloges: { act: "V", title: "Deux cent onze pendules", place: "guilde", ambiance: "ville",
    text: [
      { if: J, text: "C'est ton idée. Il y a dans cette ville des horloges à tous les carrefours, des pendules dans toutes les maisons de quelque aisance, et pas deux qui s'accordent : c'était la plaisanterie de Méridane, qu'on y eût l'heure la plus chère du royaume et la moins sûre." },
      { if: R, text: "C'est son idée. Il y a dans cette ville des horloges à tous les carrefours, des pendules dans toutes les maisons, et pas deux qui s'accordent. {autre} trouve cela insupportable. Tu trouves surtout que c'est une raison de pousser des portes." },
      "Vous les prenez une à une. On entre, on monte sur une chaise, on ouvre la caisse. On met les aiguilles sur midi, juste, l'une sous l'autre. On vérifie le poids, la corde, le balancier arrêté à bout de course. On referme.",
      { if: J, text: "Tu montres à {autre}. {autre:Il} a les doigts qu'il faut : six ans à ouvrir des mains sans les casser. Au bout de vingt pendules, {autre:il} trouve seul{autre:e} qu'un pivot est faussé, et {autre:il} te le dit d'une voix de quelqu'un qui n'en revient pas de savoir." },
      { if: R, text: "{autre} te montre. Tu as les doigts qu'il faut : six ans à ouvrir des mains sans les casser. Au bout de vingt pendules, tu trouves seul{e} qu'un pivot est faussé. Tu le dis. Tu n'en reviens pas de le savoir." },
      "Il y en a deux cent onze. Vous les comptez dans le Cahier, rue par rue. Le jour où la note aura un nom, où que ce soit, toutes les horloges de Méridane partiront ensemble, du même midi, pour la première fois depuis les Fondateurs. Personne ne saura pourquoi. On dira que c'est un miracle, ou un hasard, et les horlogers de la colline se disputeront l'honneur.",
      "C'est un ouvrage long. Il mange du sable. Vous ne le regrettez pas : c'est la seule chose que vous aurez faite dans cette ville qui ne dépende pas du mot.",
    ],
    choices: [{ back: "Fg_dedans" }] },

  Fg_noms: { act: "V", title: "À la craie, sur les seuils", place: "tour", ambiance: "ville",
    text: [
      { if: R, text: "C'est ton idée. Chez toi, les Veilleurs nouaient un ruban au poignet de chaque dormant, avec son nom. Ils mettaient soixante ans à les savoir tous. Tu en sais des centaines, pour avoir lu ces rubans à quatre pattes, la nuit, en cherchant ce qu'il y avait dans les poches à côté." },
      { if: J, text: "C'est son idée. Dans son année, les Veilleurs nouaient un ruban au poignet de chaque dormant, avec son nom. {autre} en sait des centaines, pour les avoir lus à quatre pattes, la nuit, en cherchant autre chose. {autre:Il} ne s'en vante pas. {autre:Il} dit seulement qu'{autre:il} s'en souvient." },
      "Vous n'avez pas de ruban. Vous avez de la craie, chez un drapier. Vous écrivez les noms par terre, devant chacun, en bâtons et en penché, selon qui tient la craie : *Mahaut Bécu, dentellière. Garsende Maillet, porteuse. Un mitron, on ne sait pas.*",
      { if: R, text: "Tu en reconnais que tu as volés. Un gros, au troisième rang : tu lui as pris sa tabatière, il y a deux hivers de chez toi. Elle est dans sa poche, ici ; il ne l'a pas encore perdue. Tu écris son nom devant ses souliers, plus soigneusement que les autres. Tu ne dis pas pourquoi. {autre} te regarde, et ne demande pas." },
      { if: J, text: "{autre} s'arrête devant un gros, au troisième rang. {autre:Il} écrit son nom plus soigneusement que les autres, la langue entre les dents. Tu ne demandes pas pourquoi. Tu as vu {autre:le} regarder la poche de l'homme, et y renoncer, pour une chose qui ne lui avait pas encore été prise." },
      "Pour ceux dont on ne sait rien, on demande aux voisins : on lit les enseignes, les marques de linge, les lettres dans les tabliers. C'est un métier de greffier et de voleur à la fois. Vous y êtes très bons, à deux.",
      "Cela ne sert à rien, et vous le savez. Si la note tombe en 541, ils savent leurs noms. Si elle tombe en 601, d'autres les auront appris. Vous le faites pour une troisième raison, qui est qu'on ne garde pas des gens qu'on ne sait pas appeler.",
    ],
    choices: [{ back: "Fg_dedans" }] },

  Fg_bord: { act: "V", title: "Une petite, au milieu d'une enjambée", place: "foire", ambiance: "eau",
    text: [
      "Vous prenez le chemin du canal, entre l'eau et les blés. Une gabare, deux chevaux, un haleur penché sur l'air. Vous comptez les arbres sans vous être donné le mot. Le septième est grêle, tiède d'un côté.",
      "Passé le tronc, les blés penchent. Il y a un ponceau. Et sur le ponceau, quelqu'un : une petite de neuf ans, deux nattes à l'horizontale, une boîte de fer serrée contre elle, un pied en l'air. Elle court. Elle a passé le bord pendant le onzième coup, lâchée par une main, et elle est dehors, dans l'année qui continue, arrêtée pour vous seuls au milieu d'une enjambée.",
      { if: J, text: "« C'est elle », dis-tu. {autre} regarde. {autre:Il} a vu la même à soixante-neuf ans, par un soupirail, puis sur une chaise. « Elle a pas changé de sourcils. » Vous restez un moment devant cette enfant qui court sur place. Elle a la tête tournée à demi vers la ville. Elle regarde par-dessus son épaule ce qu'elle va attendre soixante ans." },
      { if: R, text: "« C'est elle », dit {autre}. Tu regardes. Tu as vu la même à soixante-neuf ans, par un soupirail, un hiver, puis sur une chaise. Elle n'a pas changé de sourcils. Elle a la tête tournée à demi vers la ville. Elle regarde par-dessus son épaule ce qu'elle va attendre soixante ans." },
      "Vous avancez les mains. Du vent. Un vent d'ouest, tiède, pressé, qui vous prend jusqu'au coude. Dehors, tout va. Il suffirait de deux pas pour que la petite achève sa course, se retourne, et vous voie sortir.",
      "Vous retirez vos mains. Vous l'avez décidé à la fontaine, et vous le décidez encore ici, où c'est plus difficile : on reste avec ceux de dedans. Elle aura le dehors. Elle s'en est toujours très bien arrangée.",
      { if: R, text: "En repartant, tu te retournes. « Elle va me fabriquer un cahier, dis-tu. Dans soixante ans. Pour que quelqu'un vienne jusqu'ici. — Elle va le fabriquer pour moi. Toi, tu vas le lui voler à moitié. » Tu ris. C'est vrai, et tu ne l'avais jamais entendu dire sur ce ton." },
    ],
    choices: [{ back: "Fg_dedans" }] },

  Fg_cahiers: { act: "V", title: "Ne t'extasie pas, ils se touchent", place: "guilde", ambiance: "ville",
    text: [
      "Vous posez les deux Cahiers sur le même établi, côte à côte, ouverts. On écrit dans l'un : l'encre paraît dans l'autre, tout de suite, sans borne, sans attendre. La vieille l'avait dit le premier jour : *ne t'extasie pas, ils se touchent.*",
      "Vous vous extasiez quand même. Pendant neuf jours, il a fallu une pierre, une heure, de la chance. À présent on peut écrire un mot et le voir venir à une main de là, en regardant la figure de celui qui le lit.",
      { if: J, text: "Tu écris : *Tu ronfles ?* {autre} lit, sur sa page, lève les yeux, et répond tout haut : « On dort pas, ici. » Puis {autre:il} prend son charbon, par principe, et {autre:il} écrit la même chose en bâtons." },
      { if: R, text: "{autre} écrit : *Tu ronfles ?* Tu le lis sur ta page. Tu lèves les yeux, et tu réponds tout haut qu'on ne dort pas, ici. Puis tu prends ton charbon, par principe, et tu écris la même chose en bâtons." },
      "On relit tout. Depuis la première ligne, la veille du départ, sur la table de Line. On lit à voix haute, chacun les lignes de l'autre. On découvre ce qu'on n'avait pas dit : ce qui était entre deux bornes, ce qu'on avait rayé, ce qu'on avait écrit petit pour que cela ne passe pas.",
      { if: R, text: "{autre} lit tes bâtons avec ta voix, sans le faire exprès : rauque, en comptant. Tu lis son penché en t'appliquant. Tu butes sur un mot. {autre:Il} te le souffle. Tu apprends à lire le penché comme cela, dans une ville arrêtée, sur neuf jours de ta propre vie." },
      { if: J, text: "{autre} lit ton penché en s'appliquant. {autre:Il} bute sur un mot ; tu le souffles. Toi, tu lis ses bâtons, et il te vient sa voix sans que tu le veuilles, rauque, qui compte. {autre:Il} t'écoute, la tête de côté, comme on écoute un écho." },
      { if: LIGNE, text: "Il y a une page de plus, dans un autre livre, sur un pupitre, à trois portes d'ici : la première ligne du quarantième chapitre. Vous la recopiez dans les deux Cahiers, pour l'avoir sur vous." },
      "Il reste des feuillets blancs. On décide de ne plus les compter.",
    ],
    choices: [{ back: "Fg_dedans" }] },

  Fgr_sifflet: { act: "V", title: "Deux notes, pour dix lieues", place: "guilde", ambiance: "ville",
    text: [
      "Il y a un potier, rue des Aiguilliers, pris à son tour, les mains dans la terre. Tu lui empruntes une motte. Tu t'excuses : c'est la première fois que tu demandes pardon à un dormant de lui prendre quelque chose.",
      "Tu modèles un oiseau. Tu n'as pas oublié. Ton père en faisait pour les foires, verts, avec un trou sous la queue et un autre au bec ; tu en avais un, que tu as donné, il y a sept jours de ta marche, à une petite de cinq ans qui dormait. Tu le lui avais mis dans la main, pendant une pincée.",
      "Celui-ci ne cuira pas : aucun four ne chauffe. Il restera cru, gris, fragile. Tu le poses sur l'appui de la fenêtre, à l'atelier du levant, tourné vers l'occident.",
      "Lison est à l'autre bout de cette note. À dix lieues, et à soixante ans : au milieu d'un souffle, sous un toit. Tu ne l'as ni rendue ni perdue. Tu la gardes d'ici, d'une ville qu'elle ne connaît pas, avec quarante mille autres.",
      "{autre} te regarde poser l'oiseau. {autre:Il} ne dit pas : *on peut encore dire le mot.* {autre:Il} sait que tu le sais. {autre:Il} dit : « Il siffle ? » Tu souffles dedans. Il sort deux notes, une haute, une basse, mouillées, fausses. Ce sont les bonnes.",
      "« Quand on saura, dis-tu, c'est moi qui le dirai, ou c'est toi. Mais on se le dira avant. En face. » {autre} hoche la tête. C'est la seule règle que vous ayez faite, et elle tient en une ligne.",
    ],
    choices: [{ back: "Fg_dedans" }] },

  Fgj_loupe: { act: "V", title: "Pour demain", place: "guilde", ambiance: "ville",
    text: [
      "Ton établi est sous la meilleure fenêtre. Les outils sont rangés par taille sur une peau de chamois ; la loupe à manche d'ébène porte tes deux lettres. Dessous, le billet : *Pour demain. Vous verrez qu'après aujourd'hui nous aurons le temps de tout. M. A.*",
      "Il avait raison, d'une façon qu'il n'avait pas calculée. Vous avez le temps de tout, tant qu'il y a du sable. Et il n'y a pas de demain.",
      "Tu t'assois. Tu prends la loupe. Tu regardes ta paume, dessous : les brûlures du chanvre, rouges, fraîches, qui ne guériront pas ici. Rien ne guérit. Rien ne s'envenime.",
      { if: { secret: "j_rester" }, text: "Tu avais voulu rester. Tu y es, d'une manière que tu n'avais pas imaginée : tu es resté{e} à midi juste, avec la seule personne qui sache d'où tu viens. Ce n'est pas la vie que tu t'étais promise à ce banc. Tu cherches si c'est moins. Tu ne trouves pas." },
      "{autre} s'est assis{autre:e} à l'établi d'à côté, qui n'était à personne. {autre:Il} a pris une lime, et {autre:il} la regarde. « Ça sert à quoi ? » Tu le lui montres. Tu as neuf ans de leçons dans les mains, d'une vieille qui est à l'autre bout de cette note, sur une chaise, et qui attend de savoir.",
      "Tu penses à elle. Elle a remonté cette horloge soixante ans. Elle ne l'entendra pas partir. Elle n'entendra pas non plus la vague : tu lui as gardé son village. Tu ne sais pas ce qu'elle en dirait. Probablement : *tu as mis le temps, et tu n'as pas fini.*",
    ],
    choices: [{ back: "Fg_dedans" }] },

  Fg_dernier: { act: "V", title: "Deux pincées", backName: "l'atelier du levant", place: "guilde", ambiance: "ville", charniere: true, aparte: true,
    text: [
      { first: true, text: "Il arrive un moment où l'on secoue un sachet et où l'on n'entend plus rien. On l'ouvre. Il reste deux pincées dans chacun. De quoi descendre la colline et traverser la place ; pas de quoi remonter trois cent soixante marches." },
      { first: true, text: "Vous le saviez. Vous l'avez su à chaque porte poussée. Vous avez continué à pousser des portes." },
      { first: true, if: J, text: "« On peut encore, dit {autre}. Moi au cuir, toi à la corde. T'aurais pas de quoi monter. Moi j'ai de quoi descendre. Tu me donnes ta part, je vais au levier, je dis le mien. » {autre:Il} te regarde. « Ou je te donne la mienne, tu grimpes, tu dis le tien. » Vous vous regardez. C'est la niche, encore une fois. Aucun de vous ne tend la main." },
      { first: true, if: R, text: "« On peut encore, dis-tu. Moi au cuir, toi à la corde. T'aurais pas de quoi monter. Tu me donnes ta part, je vais au levier, je dis le mien. Ou je te donne la mienne, tu grimpes, tu dis le tien. » Vous vous regardez. C'est la niche, encore une fois. Aucun de vous ne tend la main." },
      { first: true, text: "« On sait toujours pas », dit l'un. « Non », dit l'autre. Ce n'est pas une défaite. Vous avez réglé deux cent onze pendules, ou appris des centaines de noms, ou seulement regardé ; et vous n'avez pas trouvé lequel des deux midis valait qu'on défît l'autre." },
      { first: true, text: "Il reste à choisir où l'on sera pris. Chacun à son poste : une main à la corde, une main au cuir, de sorte que si quelqu'un vient un jour par le bord, avec du sable, et pose un grain sur chacun, le coup puisse partir sur-le-champ. Ou ensemble, à la fontaine, les deux Cahiers ouverts entre vous." },
      { again: true, text: "L'atelier du levant. Deux pincées dans chaque sachet." },
    ],
    choices: [
      { label: "Vous deux : chacun à son poste, la main sur l'outil.", monde: "place", option: "postes", fx: { flag: "monde:g_place_postes" }, to: "Fg_fin_dedans" },
      { label: "Vous deux : ensemble, à la fontaine.", monde: "place", option: "fontaine", fx: { flag: "monde:g_place_fontaine" }, to: "Fg_fin_dedans" },
    ] },

  Fg_fin_dedans: { act: "V", title: "Quarante mille, et deux", end: true, epilogue: true, fx: { flag: "fin:garder" },
    text: [
      { if: { all: [{ has: "monde:g_place_postes" }, J] }, text: "Vous vous quittez au pied de la Tour. Il n'y a pas de quoi faire de phrases : vous vous êtes tout lu. {autre} te serre le bras, au-dessus du coude, et descend vers la porte de fer. Tu {autre:le} regardes aller jusqu'au coin de la ruelle. {autre:Il} ne se retourne pas : {autre:il} compte ses pas, pour le sable." },
      { if: { all: [{ has: "monde:g_place_postes" }, J] }, text: "Tu ne peux pas monter à la Cage. Tu vas au plus haut que te porte ta pincée : le pied de la vis, où pend le bout de la corde, ou le fil. Tu poses la main sur le laiton. Il vibre. Tu dis : « J'y suis. » Il vient, très bas : « J'y suis. » Tu sens tes doigts s'engourdir sur le métal. Tu gardes la bouche fermée sur le mot, exprès, pour qu'on la trouve ainsi." },
      { if: { all: [{ has: "monde:g_place_postes" }, R] }, text: "Vous vous quittez au pied de la Tour. Il n'y a pas de quoi faire de phrases : vous vous êtes tout lu. Tu serres le bras de {autre}, au-dessus du coude, et tu descends vers la porte de fer. Tu ne te retournes pas : tu comptes tes pas, pour le sable." },
      { if: { all: [{ has: "monde:g_place_postes" }, R] }, text: "La Chambre basse. Deux fois le même homme, un vieillard à moustache, neuf garçons, un maillet en l'air. Tu vas au levier. Tu prends le cuir de la main gauche. Tu poses la droite sur le fil. Il vibre. Il vient, très bas : « J'y suis. » Tu réponds. Tu sens le gris te monter aux poignets, comme de l'eau froide. Tu gardes la bouche fermée sur le mot, exprès, pour qu'on la trouve ainsi." },
      { if: { has: "monde:g_place_fontaine" }, text: "Vous descendez la colline ensemble, à petits pas, pour le sable. La place. La margelle. Vous vous y asseyez, à la même place que l'autre fois, sous le fil d'eau. Vous ouvrez les deux Cahiers entre vous, sur la pierre, à la dernière page écrite." },
      { if: { all: [{ has: "monde:g_place_fontaine" }, J] }, text: "« Si quelqu'un vient, dit {autre}, il lira. — Elle viendra, dis-tu. Ou elle enverra. Elle a soixante ans pour trouver comment. » {autre} rit, sans bruit. {autre:Il} pose sa main sur la margelle, à plat. Tu poses la tienne à côté. Elles ne se touchent pas : il reste entre elles la largeur d'une goutte." },
      { if: { all: [{ has: "monde:g_place_fontaine" }, R] }, text: "« Si quelqu'un vient, dis-tu, il lira. — Elle viendra, dit {autre}. Ou elle enverra. » Tu ris, sans bruit. Tu poses ta main sur la margelle, à plat. {autre} pose la sienne à côté. Elles ne se touchent pas : il reste entre elles la largeur d'une goutte." },
      "Le sable finit. Cela ne fait pas mal. C'est une lenteur, d'abord dans les doigts, puis dans les pensées, qui s'allongent comme la goutte au bout du fil. On a le temps de se dire que ce n'est pas mourir, que ce n'est pas dormir non plus, et qu'on saura bientôt ce que c'est, de l'intérieur, après l'avoir tant regardé chez les autres.",
      "Il y a dans Méridane quarante mille personnes arrêtées à midi, la bouche ronde. Il y en a deux de plus, qui ont la bouche fermée.",
      { if: LIGNE, text: "Sur la colline, dans un cabinet, un Livre est ouvert au quarantième chapitre. On y lit, en deux écritures : *La Douzième sonne dans l'heure de qui la nomme. Si personne la nomme elle attend. On l'a fait. On est dedans.*" },
      { if: { has: "monde:g_nom_banc" }, text: "Tout en haut de la Tour, sur un banc de chêne, deux noms sont taillés sous quarante autres. Ils n'ont pas de date. On a laissé la place." },
      "Dehors, passé le septième peuplier, une petite de neuf ans achève une enjambée. Elle se retourne. Elle regarde la ville grise, qui ne grandira pas. Elle ouvre sa boîte de fer, et elle y range le premier jour d'une attente qu'elle saura faire durer.",
      "La note tient. Elle n'est d'aucune année. Elle attend qu'on la nomme, et ceux qui en ont le mot l'ont emporté où personne ne le prendra de force.",
    ] },

  // ===== outside
  Fg_porte: { act: "V", title: "Le vantail de fer", place: "tour", ambiance: "ville",
    text: [
      "On sort. Mais d'abord on ferme.",
      "La ruelle des Sonneurs, l'ombre de la Tour. Le vantail de fer est entrebâillé d'une main, comme un vieil homme l'a laissé à onze heures. Vous le poussez à deux. Il vient sans bruit : rien ne grince dans une note. Le papillon de cuivre tourne. La clef est dessus. Elle est grande comme une main, avec un panneton en forme de roue.",
      { if: R, text: "Tu la prends. Tu en as volé de plus belles. Tu la tends à {autre}. « C'est toi qui es du métier. — C'est toi qui sais où on cache les choses. » Vous la tenez un moment à deux, chacun par un bout." },
      { if: J, text: "{autre} la prend, la soupèse en connaisseur, et te la tend. « C'est toi qui es du métier. » Tu réponds que c'est {autre:lui} qui sait où l'on cache les choses. Vous la tenez un moment à deux, chacun par un bout." },
      "Puis les sachets. On les vide une dernière fois dans un sabot. On fait trois parts. Une petite, pour marcher jusqu'au bord. Et deux autres, égales, qu'on noue chacune dans un coin de chemise, serré, à trois nœuds : de quoi rentrer, un jour, de l'arbre à la Tour, et monter, et descendre. Une seule fois.",
      "« Si on revient, dit l'un, c'est qu'on sait. — Si on revient, dit l'autre, c'est à deux. » On ne se serre pas la main : on a les mains pleines de sable.",
      { if: LIGNE, text: "Dans le cabinet du Grand Maître, le Livre est ouvert au quarantième chapitre, avec vos deux lignes. On le laisse. Si la note tombe un jour, quelqu'un saura qu'elle a été gardée, et par qui." },
    ],
    choices: [{ label: "Le chemin du canal", to: "Fg_sortie", big: true }] },

  Fg_sortie: { act: "V", title: "Deux pas", place: "foire", ambiance: "eau",
    text: [
      "Le canal, la gabare, les chevaux. Un. Deux. Les feuilles montrent leur côté pâle. Six. Le septième peuplier, grêle, tiède d'un côté.",
      "Vous vous retournez. La ville est derrière, sur son Mont, sous son soleil droit. On voit la Tour, les abat-sons, et dans la Cage une chose verte, penchée, la bouche au ciel. On n'entend plus la note à cette distance. On la sent encore dans les talons.",
      { if: R, text: "Tu as passé six ans à cela : entrer, prendre, sortir. C'est la première fois que tu sors en laissant quelque chose. Tu le dis. {autre} répond que tu ne laisses rien : tu poses." },
      { if: J, text: "« J'ai passé six ans à ça, dit {autre}. Entrer, prendre, sortir. C'est la première fois que je sors en laissant quelque chose. — Tu ne laisses rien. Tu poses. » {autre:Il} y réfléchit. {autre:Il} trouve la différence à son goût." },
      "Deux pas.",
      "Le vent vous prend en pleine figure. Un vent d'ouest, tiède, qui sent le blé et l'eau de canal. Il y a du bruit : des alouettes, une charrette, des gens qui crient au loin. Le soleil vous cuit la nuque, d'une chaleur qui bouge. Vous avez faim, d'un coup, tous les deux, d'une faim de neuf jours.",
      "Vous vous retournez encore. La ville est grise. Elle l'est comme tu ne l'avais jamais vue, ou comme tu l'as toujours vue : un rond d'une lieue, couleur de cendre, net comme un trait de compas, où rien ne remue. Le septième peuplier est debout au bord, moitié vert, moitié gris.",
      "Sur le ponceau, à dix pas, une petite de neuf ans vient d'achever une enjambée. Elle s'est retournée. Elle a vu une ville devenir grise. Puis elle a vu deux personnes sales en sortir.",
    ],
    choices: [{ label: "Le ponceau", to: "Fg_pont", big: true }] },

  Fg_pont: { act: "V", title: "Celle qui n'attendra pas soixante ans", place: "foire", ambiance: "eau", charniere: true, backName: "le ponceau",
    text: [
      { first: true, text: "Elle a deux nattes, des sourcils d'un seul trait, une boîte de fer serrée contre elle. Elle souffle : elle a couru. Elle vous regarde venir sans reculer." },
      { first: true, if: J, text: "« T'es sorti{e}. » Elle te connaît : neuf jours de ferme et de route. Elle regarde {autre}. « Et ça, c'est l'autre. T'avais dit loin. — C'était loin. » Elle considère les sabots, le charbon. Elle a déjà décidé que c'était quelqu'un." },
      { first: true, if: R, text: "« T'es sorti{autre:e} », dit-elle à {autre}. Elle {autre:le} connaît : neuf jours de ferme et de route. Puis elle te regarde, toi. Tu as vu ces yeux-là par un soupirail, un hiver, soixante ans plus vieux, qui te regardaient partir avec trois mesures de sable. Ils ne t'ont pas encore vu{e}. Tu te sens rougir quand même." },
      { first: true, if: { not: SORTIS }, text: "« Mon père est dedans. » Elle le dit sans pleurer, en montrant le gris. « Il m'a posée par terre. Il a dit : cours. J'ai couru. » On lui dit où il est : sur sa borne, rue aux Oies, debout, son chapeau sur la tête. Qu'il n'a mal nulle part. Qu'il est gardé. Elle écoute cela avec une attention terrible. « Gardé par qui ? — Par nous. — D'ici ? — D'ici. »" },
      { first: true, if: SORTIS, text: "« Mon père est au huitième arbre, avec la charrette. Il veut pas que je regarde. » Elle regarde. « Y a des gens, dedans. Plein. — Quarante mille. — Ils sont morts ? — Non. Ils sont gardés. — Par qui ? — Par nous. »" },
      { first: true, text: "Elle réfléchit. Elle a neuf ans, et elle range tout. « Ça se rouvre ? » On dit que oui. Qu'on a de quoi. Qu'il faut d'abord savoir une chose, et qu'on ne la sait pas encore. « Quelle chose ? »" },
      { first: true, text: "On la lui dit. À une enfant, sur un pont, avec des mots de pont. Qu'on peut rouvrir aujourd'hui, ou très tard ; que dans un cas des gens n'existent pas, et que dans l'autre ils sont veufs. Elle fronce tout son front." },
      { first: true, text: "« C'est bête, dit-elle. Y a qu'à trouver le milieu. » Vous vous regardez. Il n'y a pas de milieu ; vous avez cherché. Elle hausse une épaule. « Alors faut chercher mieux. Moi, je vous aiderai. J'ai le temps. » Elle ouvre sa boîte. Elle y met un caillou du pont. « C'est pour me rappeler quel jour on a commencé. »" },
      { again: true, text: "Le ponceau. La ville grise, d'un côté ; de l'autre, la route." },
    ],
    choices: [{ label: "La route de l'abbaye", to: "Fg_abbaye", big: true }] },

  Fg_abbaye: { act: "V", title: "Les premières à tenir la note", place: "foire", ambiance: "temple", fx: { flag: "monde:g_abbaye" },
    text: [
      "Sainte-Aure-des-Heures est à une journée. On y arrive avec la nouvelle : toute la plaine la porte déjà, de travers. On dit que Méridane a brûlé, qu'elle est sous l'eau, que la Reine est morte. Mère Ancille vous reçoit au parloir, debout, parce qu'elle a compris à vos figures que vous étiez les seuls à savoir.",
      "On lui dit tout. Elle a le Livre, le vrai, dont le Grand Maître n'avait que la copie. Elle l'ouvre au quarantième chapitre. La page est blanche, comme l'autre.",
      { if: LIGNE, text: "« Elle ne l'est plus, là-bas, dites-vous. On y a mis une ligne. » Elle vous regarde par-dessus le Livre. « Deux apprentis ont écrit dans le Livre des Fondateurs. » On s'attend à tout. « Dictez. Je mets les deux exemplaires d'accord. »" },
      { if: { not: LIGNE }, text: "Elle trempe une plume. « Dictez. Ce que vous avez fait. Je l'écris ici, de ma main, sous votre serment. Une chose pareille qu'on n'écrit pas devient un conte en dix ans, et une hérésie en vingt. »" },
      "Sœur Hildeburge tient les annales. Elle écrit, à la date : *Le douzième coup a été rendu et n'a pas été nommé. La ville est tenue. Elle ne s'étend pas. Deux personnes en ont le mot.* Elle lève sa plume. « Leurs noms ? » On les donne. « Et si l'on vient vous le prendre ? Un duc. Un sous-maître. — Il faut être deux pour sonner. Et savoir où l'on va. »",
      "Mère Ancille referme le Livre. « Il faudra du monde, au bord. Pour que personne n'entre piller. Pour dire aux familles que leurs gens ne souffrent pas. Pour savoir les noms. » Elle regarde la novice Tiphaine, qui est à la porte, et qui écoute de tout son corps. « Nous chantons les heures. Nous en chanterons une de plus, tournées vers la ville. Qu'on tienne la note avec eux. »",
      { if: R, text: "Tu la regardes. Tu sais ce qu'elle vient d'inventer : les mantes bleues, les rubans, le Rôle. Chez toi, cela s'appelait les Veilleurs, et l'on se signait à ton passage. Tu viens de les fonder. Tu ne sais pas si tu dois rire. Tu demandes seulement qu'on n'y dise pas trop de mal des glaneurs." },
      { if: J, text: "{autre} la regarde d'un drôle d'air. {autre:Il} te dira ensuite ce qu'elle vient d'inventer : des mantes bleues, des rubans, un Rôle. « Chez moi, ils se signaient quand je passais. Je viens de les fonder. » {autre:Il} demande seulement, tout haut, qu'on n'y dise pas trop de mal des glaneurs. Mère Ancille ne connaît pas le mot. Elle le note." },
    ],
    choices: [{ label: "Une année de plein vent", hide: R, to: "Fgj_annee", big: true }, { label: "Une année de plein vent", hide: J, to: "Fgr_annee", big: true }] },

  Fgj_annee: { act: "V", title: "L'appentis", place: "basse", ambiance: "champs",
    text: [
      "Tu passes l'année aux Trois-Noyers. On t'y donne la soupente, sur l'étable, et un coin de l'appentis, avec une planche pour établi.",
      { if: { not: SORTIS }, text: "La ferme a perdu son maître. Bérarde tient tout, les poings aux hanches. Girard mène la Grise et ne parle plus. Tu leur as dit où était Josse : debout, gardé, son chapeau sur la tête. Bérarde a écouté. Elle a dit : « Il reviendra quand ? » Tu as dit que cela dépendait de toi, et de quelqu'un d'autre. Elle t'a regardé{e} longtemps. Puis elle a mis ton couvert." },
      { if: SORTIS, text: "La ferme a tout son monde : Josse, Bérarde, Girard, l'aïeul. Ils étaient sortis avant la fête, par toi. Josse ne t'en parle jamais. Il te ressert de la soupe, et il a dit une fois, en regardant du côté de la ville : « J'avais ma place retenue, sur une borne. »" },
      "Tu remontes l'horloge de la cuisine, puis celle du curé. On vient d'assez loin. Line tient les brucelles. Elle ne dit rien pendant que tu travailles, et elle refait tout, le soir, seule.",
      "Elle a pris l'affaire en main. Elle a une latte, où elle fait une encoche par jour. Elle a un cahier de toile, où elle écrit, d'une écriture ronde, *ce qu'on sait* et *ce qu'on sait pas*. La seconde colonne est plus longue. Elle te la lit le dimanche.",
      "{autre} est à Roquebise, à une journée. Vous vous écrivez par les bornes : les Cahiers marchent, dehors comme dedans. C'est moins pressé qu'avant. On y parle du prix du verre.",
      "La nuit, quelquefois, tu tâtes le coin de ta chemise. Trois nœuds. C'est là.",
    ],
    choices: [{ label: "Le Grand Midi suivant, au septième peuplier", to: "Fg_anniversaire", big: true }] },

  Fgr_annee: { act: "V", title: "La rue qui n'a pas ta porte", place: "foire", ambiance: "ville",
    text: [
      "Tu passes l'année à Roquebise. Tu y es allé{e} tout droit, sans réfléchir, comme une bête à l'écurie.",
      "La rue des Potiers est en pente, pavée de tessons. Tu comptes les portes. La troisième après la fontaine est à des gens qui ne te connaissent pas : un jeune ménage, qui te regarde regarder leur seuil. Tes parents ne sont pas nés. Tu es arrivé{e} chez toi avec cinquante ans d'avance.",
      "On t'embauche à la verrerie, pour porter le sable. On t'y garde parce que tu as des mains. À la Toussaint, on te laisse souffler. Tu apprends la canne, le pontil, le coup de poignet. Tu fais des billes, d'abord, pour te faire la bouche : des bleues, parce que c'est le verre le moins cher.",
      "Tu en gardes une. Tu ne sais pas pourquoi. Elle est ronde, un peu de travers, avec une bulle dedans. Tu la donneras à {autre}, au prochain Grand Midi, en disant que c'est tout ce que tu sais faire. Tu ignores ce qu'{autre:il} en fera, et jusqu'où elle roulera.",
      "Le soir, tu écris, sur la borne de la fontaine. Les Cahiers marchent. Tu écris moins de bâtons : une veuve, rue Haute, t'apprend le penché contre du bois fendu. {autre} te répond qu'on ne te reconnaît plus.",
      { if: { secret: "r_soeur" }, text: "Lison est à l'autre bout de la note. Ici, elle n'est pas encore au monde, ni sa mère. Tu passes devant la troisième porte tous les jours. Tu ne t'y habitues pas. Tu t'y tiens : c'est différent." },
      "La nuit, quelquefois, tu tâtes le coin de ta chemise. Trois nœuds. C'est là.",
    ],
    choices: [{ label: "Le Grand Midi suivant, au septième peuplier", to: "Fg_anniversaire", big: true }] },

  Fg_anniversaire: { act: "V", title: "Alors ?", backName: "le septième peuplier", place: "foire", ambiance: "eau", charniere: true, aparte: true,
    text: [
      { first: true, text: "Le vingt et un juin 542, à midi, vous êtes au septième peuplier. Il a une moitié verte, qui a fait ses feuilles de l'année, et une moitié grise, qui a gardé celles de l'an dernier, retournées du côté pâle." },
      { first: true, text: "Il y a du monde, au bord. Des Heurières en mante bleue, qui chantent, à bouche fermée, une note qu'elles ont apprise de vous. Des familles, venues voir de loin un père, une sœur, debout dans le gris. Une petite de dix ans, avec une latte à encoches, qui tient le compte." },
      { first: true, if: J, text: "{autre} est arrivé{autre:e} par la route de Roquebise, une blouse bleue sur le dos, les avant-bras brûlés par les fours. {autre:Il} te met quelque chose dans la main, sans rien dire : une bille de verre bleu, un peu de travers, avec une bulle dedans. Tu la regardes. Tu en as eu une pareille, autrefois, sur une borne, plus vieille que ta mémoire. Tu ne dis rien. Tu la mets dans ta poche, où il y a déjà sa place." },
      { first: true, if: R, text: "Tu es venu{e} par la route de Roquebise, en blouse bleue, les avant-bras brûlés par les fours. Tu mets la bille dans la main de {autre}, sans rien dire. {autre:Il} la regarde longtemps, avec une figure que tu ne comprends pas, comme on regarde une chose qu'on a déjà perdue. Puis {autre:il} la met dans sa poche, d'un geste qui en connaît le chemin." },
      { first: true, text: "Vous regardez la ville. Elle n'a pas grandi d'un pouce. Sur le Mont, la Tour ; dans la Cage, la chose verte, la bouche au ciel." },
      { first: true, text: "« Alors ? » dit l'un. L'autre ne répond pas tout de suite. Vous avez eu un an. Vous avez vu ce que c'est qu'une ferme sans son maître, ou qu'une rue sans sa porte. Vous avez chacun, dans un coin de chemise, de quoi faire le chemin." },
      { first: true, text: "« Pas encore », dit l'autre. Et le premier respire : il allait dire la même chose." },
      { first: true, text: "Il reste une question, que la petite a posée, sa latte à la main, avec sa manie de tout ranger : *et si l'un de vous meurt ?* Deux parts de sable dans deux chemises, c'est deux personnes qu'il faut pour rouvrir. On peut les laisser ainsi. On peut aussi les réunir, dans un seul nœud, et les mettre où quelqu'un d'autre saurait les trouver." },
      { again: true, text: "Le septième peuplier, moitié vert, moitié gris." },
    ],
    choices: [
      { label: "Vous deux : chacun la sienne, sur soi. Il faudra être deux, toujours.", monde: "reserve", option: "deux", fx: { flag: "monde:g_reserve_deux" }, to: "Fg_fin_dehors" },
      { label: "Vous deux : un seul nœud, dans la boîte de fer de Line. Elle saura quoi en faire.", monde: "reserve", option: "une", fx: { flag: "monde:g_reserve_une" }, to: "Fg_fin_dehors" },
    ] },

  Fg_fin_dehors: { act: "V", title: "Pas encore", end: true, epilogue: true, fx: { flag: "fin:garder" },
    text: [
      "Les années viennent. Elles viennent pour vous, et elles ne viennent pas pour la ville : c'est un rond d'une lieue, couleur de cendre, que les cartes d'Aurime apprennent à dessiner, et qu'on finit par contourner comme un lac.",
      "Il ne grandit pas. Aucun village n'est pris. Il n'y a ni lisière qui sue, ni sable à vendre, ni Garde pour le garder. Un duc gouverne, au nom d'une reine tenue ; il gouverne mal, et il le sait surveillé : il y a dans une abbaye un Livre où il est écrit que deux personnes peuvent la lui rendre.",
      { if: J, text: "Tu es horloger aux Trois-Noyers, puis à Arvoise, où il y a plus de montres. Line est ton apprentie, puis ton associée, puis, pour l'ouvrage fin, ton maître. Elle n'attend pas : elle cherche. Elle a rempli onze cahiers de toile de *ce qu'on sait pas*." },
      { if: R, text: "Tu es verrier à Roquebise. Tu as un four à toi, rue des Potiers, à la cinquième porte : la troisième n'était pas à vendre, et tu ne l'aurais pas achetée. Tu fais du verre bleu. On en demande jusqu'à la mer." },
      "Tous les ans, au Grand Midi, vous êtes au septième peuplier. Il y a de plus en plus de monde, en mante bleue. On chante la note. On vous laisse le premier rang, sans savoir toujours pourquoi.",
      "« Alors ? — Pas encore. »",
      { if: { has: "monde:g_reserve_deux" }, text: "Vous avez chacun votre part, dans un coin de chemise, puis dans une doublure, puis dans une petite boîte au cou. Il faut être deux. Cela vous oblige à une chose à quoi vous n'aviez pas songé : à vous tenir en vie l'un l'autre. On se surveille la toux. On s'écrit, aux bornes, *couvre-toi.*" },
      { if: { has: "monde:g_reserve_une" }, text: "Les deux parts sont dans la boîte de fer de Line, sous une vis, un ruban et un caillou de pont. Elle sait ce que c'est. Elle sait le mot : vous le lui avez dit le jour de ses quinze ans, en trouvant qu'elle l'avait deviné depuis longtemps. Elle a promis de ne pas s'en servir sans vous. Elle a ajouté : *tant que vous serez là.* On ne lui a pas demandé de retirer la fin." },
      { if: J, text: "Tu vieillis. Dedans, sur une borne, un laboureur de quarante-quatre ans a son chapeau d'aplomb. Une colporteuse lève deux doigts. Un Temps en robe grise tient sa faux à mi-course. Tu les as dans la tête, tous, à leur place, comme les pièces d'un mouvement démonté qu'on sait remonter les yeux bandés." },
      { if: R, text: "Tu vieillis. À l'autre bout de la note, sous un toit, une petite de cinq ans est au milieu d'un souffle. Elle n'est d'aucune année non plus. Tu as fait un oiseau de terre verte, un hiver, que tu gardes sur ta cheminée, tourné vers l'occident, où il n'y a rien encore." },
      "Un jour, vous saurez. Ou vous ne saurez pas, et il faudra bien dire quelque chose avant de n'avoir plus de bouche. Vous en parlez sans peur, au pied de l'arbre, en mangeant du pain. On a vu des gardes plus tristes.",
      "« Alors ? » demande la plus vieille des deux voix, une année où le peuplier a perdu une branche.",
      "L'autre regarde la ville. La Tour. La cloche, la bouche au ciel, qui attend son nom depuis si longtemps qu'elle a l'air d'avoir toujours été faite pour cela.",
      "« Pas encore. »",
    ] },
});

module.exports = { passages: P, extras: {} };
