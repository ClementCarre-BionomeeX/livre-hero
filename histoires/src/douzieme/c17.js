// Le Douzième Coup · chapter 17, the lever (act V, the end of the walk inside the eleventh stroke, after B16).
// Together in the low chamber (hub `K17_cave`) : the old Aubespin on his cradle (hub `K17_aubespin`), Coudrier woken
// (`monde:coudrier_lache`, `j:chapeau_rendu`, `j:lunettes_dites`, `j:efface_leve`, `r:coudrier_jehan_dit`), the young
// Aubespin told the truth (`monde:jeune_sait`), Ansel (`monde:ansel_dit`), the wedge made ready (`r:coin_pret`).
// `M17` : the last word face to face, one choice for both (`monde: "levier17"` : rendre | fuite | couvert).
// Then each alone. The one who passes climbs (`j:entendu_offre`, `j:corde_montee`, `j:aelis_adieu`, `j:vu_ville`,
// `monde:corde_nouee`), the one who stays holds the cellar (`monde:jeune_refuse` | `monde:jeune_obeit`,
// `monde:aubespin_ouvert` | `monde:aubespin_frappe`). `M17b` : the wire. The word, said or kept, each on their own :
// `monde:j_douze` | `monde:j_silence`, `monde:r_douze` | `monde:r_silence`. `B17` : the stroke ; `K17_coup` sorts the
// four ways (J alone : 541, `F_defaire` ; R alone : 601, `F_reveil` ; both : `F_partage` ; neither : `F_garder`).
var P = {};
var J = { has: "role:passe" }, R = { has: "role:reste" };
var GRAIN = { stock: "sable", min: 1 };
var LACHE = { has: "monde:coudrier_lache" };
var JEUNE_SAIT = { has: "monde:jeune_sait" };
var COUPEE = { has: "monde:corde_coupee" };
var TRAVERS = { has: "monde:ansel_travers" };
var J_DIT = { has: "monde:j_douze" }, R_DIT = { has: "monde:r_douze" };

Object.assign(P, {
  // ===== together, down the eighty steps
  K17_descente: { act: "V", title: "Quatre-vingts marches, à deux", place: "tour", ambiance: "chateau",
    text: [
      "Le vantail cède sous la main. Derrière, le palier, la pendule de service arrêtée sur midi, et l'escalier : quatre-vingts marches sans rampe, la paroi à gauche, le vide à droite. Au fond de ce vide, il y a une lueur de perle qui se tient immobile, comme une lampe sous un linge.",
      "Vous descendez. La note descend avec vous. Elle est plus grave ici qu'en haut : on la reçoit par les semelles, et elle remonte dans les jambes jusqu'aux genoux.",
      { if: J, text: "Au tournant, la niche. Tu y as laissé ce matin la marque de ton dos, à côté de celle d'un vieil homme qui tenait une baguette en travers de ses genoux. Les deux marques sont là, humides, l'une plus haute que l'autre. {autre} les regarde, et ne demande rien." },
      { if: R, text: "Au tournant, la niche. Chez toi, tu y as lu un mot rayé dans la pierre, à la flamme : *JUSTE.* Il est là, blanc, tout frais, avec sa poussière au pied. {autre} passe le doigt dessus, sans rien dire, et tu comprends de qui est l'écriture." },
      "Les dernières marches. La salle ronde s'ouvre d'un coup, grande comme une église de village, avec ses six flammes pointues, ses berceaux blonds, et au milieu le trou.",
      "Ils sont tous là. Les neuf tabliers verts, chacun sur son trait de craie. L'enfant au maillet. Le vieillard, du sang aux joues, les poings fermés sur deux poignets. L'homme de trente ans, pris dans ces poings, la tête tournée vers le puits.",
      "Et, assis sur le quatrième berceau, à côté d'un crayon de charpentier, l'autre homme en gris. Il a sa canne entre les genoux et son sablier d'or sur la cuisse. Il ne se lève pas.",
      "« Vous avez pris le chemin des écoliers. » Sa voix porte sans effort : il connaît cette voûte. « Vous avez bien fait. J'ai eu le temps de compter ce qui me reste. Neuf grains. Je les ai rangés par ordre d'emploi. »",
    ],
    choices: [{ label: "Entrer dans la salle", to: "K17_cave", big: true }] },

  K17_cave: { act: "V", title: "La Chambre basse, à trois éveillés", place: "tour", ambiance: "chateau", hub: true, backName: "la Chambre basse",
    text: [
      { first: true, text: "Vous faites le tour, par le bord. Le puits est à une main sous le pavé, gris, bombé. La barre y entre jusqu'à mi-corps. Le fil monte du milieu de la barre à l'œil de la voûte, épais d'un doigt, flou, comme une corde de viole que l'archet vient de quitter." },
      { first: true, if: J, text: "Tu reconnais ta place : le petit papillon de craie, près du chevalet de droite. Tu étais le dixième. Tu regardes les neuf autres. Ils ont tous la figure vers la barre, et le grand roux a le bras à demi tendu, la bouche ouverte, en homme qui a vu deux maîtres se battre et qui cherche encore à qui obéir." },
      { first: true, if: R, text: "Tu reconnais ta place : le pavé où tu as posé le pied, chez toi, pour mettre la main au cuir. Il est sec. Chez toi, le gris est arrêté à une semelle de ce pavé-là, bombé, comme une vague peinte. Il attend que cette note finisse pour finir sa course." },
      { first: true, text: "L'homme assis vous suit des yeux, l'œil gris et l'œil brun, sans tourner la tête. Il a la patience des gens qui ont payé leur place." },
      { again: true, text: "La salle ronde, ses six flammes, le puits. Sur le quatrième berceau, l'homme en gris attend, les deux mains sur sa canne." },
      { again: true, after: "monde:coudrier_lache", text: "Le vieillard a ouvert les poings. Il se tient les bras le long du corps, les talons joints, devant le levier qu'il ne peut plus toucher." },
    ],
    choices: [
      { label: "L'homme assis sur le berceau", to: "K17_aubespin" },
      { label: "Le Grand Maître", hide: R, to: "K17j_coudrier" },
      { label: "L'homme de trente ans, dans ses poings", hide: { any: [R, { has: "j:jeune_dit" }] }, to: "K17j_jeune" },
      { label: "Le levier, et sa crémaillère", hide: R, to: "K17j_levier" },
      { label: "Le chevalet, où passe le fil", hide: R, to: "K17j_fil" },
      { label: "Le vieillard aux poings fermés", hide: J, to: "K17r_coudrier" },
      { label: "Celui des deux qui a trente ans", hide: { any: [J, { has: "r:jeune_dit" }] }, to: "K17r_jeune" },
      { label: "L'enfant au maillet", hide: J, to: "K17r_ansel" },
      { label: "Le coin, à gauche du levier", hide: J, to: "K17r_coin" },
      { label: "Le bord du puits", hide: J, to: "K17r_puits" },
      { label: "Le pied de l'escalier : il est temps", to: "M17", big: true },
    ] },

  // ----- the old Aubespin, seated : what he has left to say
  K17_aubespin: { act: "V", title: "Neuf grains, par ordre d'emploi", place: "tour", ambiance: "chateau", hub: true, backName: "le berceau",
    text: [
      { first: true, text: "De près, il est gris de figure comme d'habit. Il a monté cent quarante marches et il les a redescendues ; cela se voit aux mains, qui tiennent la canne plus qu'elles ne la posent. Il vous fait place sur le berceau, d'un geste de maître de maison, et vous restez debout." },
      { first: true, text: "« Je n'ai plus de bras. Vous l'avez vu. Je ne vous prendrai donc rien de force, et je ne vous ferai pas l'injure de vous mentir : à mon âge, on ment mal, et vous m'avez lu d'un bout à l'autre. Il me reste ma langue, neuf grains, et le droit qu'a tout homme de plaider devant ses juges. Demandez. »" },
      { again: true, text: "Il attend vos questions, le menton sur la pomme de sa canne." },
    ],
    choices: [
      { label: "« Que voulez-vous, à présent ? »", hide: { seen: "K17_aub_veut" }, to: "K17_aub_veut" },
      { label: "« Et lui ? Celui que vous étiez ? »", hide: { seen: "K17_aub_lui" }, to: "K17_aub_lui" },
      { label: "« La vieille Line vous a pris un quart d'heure. »", hide: { any: [R, { seen: "K17j_aub_line" }] }, to: "K17j_aub_line" },
      { label: "« À trente ans, vous avez demandé pour l'enfant. »", hide: { any: [R, { seen: "K17j_aub_enfant" }] }, to: "K17j_aub_enfant" },
      { label: "« Ma sœur est dans votre puits. »", hide: { any: [J, { seen: "K17r_aub_lison" }] }, to: "K17r_aub_lison" },
      { label: "« Le quarante et unième couvert. Il tient toujours ? »", hide: { any: [J, { seen: "K17r_aub_couvert" }] }, to: "K17r_aub_couvert" },
      { back: "K17_cave" },
    ] },

  K17_aub_veut: { act: "V", title: "Le plaidoyer", place: "tour", ambiance: "chateau",
    text: [
      "« Rien que vous puissiez me donner. J'ai tout eu. » Il regarde le puits. « Je veux que cela continue. C'est un vœu de vieillard, et je sais ce qu'il vaut. Écoutez pourtant ce que je plaide, puisque vous avez trois portes et que j'en garde une. »",
      "Il lève un doigt maigre. « Vous rendez ce coup ici, en 541. La ville dîne. Bien. Vous venez de tuer soixante ans, proprement, sans un cri : tout ce qui est né depuis de ma Dormante, les routes qu'on a tracées autour, les enfants qu'on a faits en la fuyant. Les gens d'après ne mourront pas. Ils n'auront pas été. Je vous laisse chercher lequel est le pire. »",
      "Un second doigt. « Vous le rendez en 601. Quarante mille personnes s'éveillent au milieu d'un cri de joie, et apprennent en une heure que leurs mères sont mortes, leurs fiancés chauves et leurs maisons vendues. Vous aurez fait quarante mille veufs d'un seul coup de cloche. Ils vous béniront la première semaine. »",
      "Le troisième doigt reste plié. « Ou vous ne rendez rien. Cette note tient. Mon puits, chez moi, reste où il s'est arrêté, à une semelle de votre sabot. Personne n'est veuf. Personne n'est défait. La rose garde sa goutte. Il y a du pain chaud dans tous les fours de cette ville, et il le restera. Rien ne s'abîme. »",
      { if: J, text: "Tu dis que rien ne vit non plus. Il incline la tête, de son inclinaison exacte. « C'est juste. J'ai mis soixante ans à trouver que cela se valait. Vous en avez seize. Je ne vous demande pas d'être de mon avis ; je vous demande de regarder, avant de tirer, ce que coûte chacune des deux autres. »" },
      { if: R, text: "Tu dis que du pain qu'on ne mange pas, c'est une pierre. Il te considère avec une sorte d'estime. « Vous avez faim de naissance : c'est une philosophie. Je l'ai eue. On la perd en dînant. Regardez pourtant, avant de tirer, ce que coûte chacune des deux autres. »" },
      "Il repose sa main sur la canne. « Voilà ma cause. Elle est mauvaise, et elle est entière. Je ne vous en ai rien caché. »",
    ],
    choices: [{ back: "K17_aubespin" }] },

  K17_aub_lui: { act: "V", title: "Des bras de trente ans", place: "tour", ambiance: "chateau",
    text: [
      "Il tourne la tête vers l'homme pris, de l'autre côté du levier : la même taille, le même pli au coin de la bouche, que l'un a neuf et l'autre creusé.",
      "« Il a trente ans, de belles mains, et il a peur. Je lui ai parlé onze grains. Il m'a demandé si nous avions gagné. » Il a son petit rire sans bruit. « Je vous préviens, puisque nous jouons cartes sur table : quand l'un de vous sera là-haut, et l'autre ici, la main au cuir, je me lèverai. J'irai à lui. J'ai neuf grains, et ce sont des bras de trente ans qui dorment là. Je sais comment on leur parle : je les ai eus. »",
      "« Il tiendra ce levier pour moi, le temps qu'il faudra. Il le tient déjà. »",
      { if: J, text: "{autre} a regardé le jeune homme, puis le vieux, puis ses propres mains. {autre:Il} a l'œil des gens qui mesurent un fossé avant de le sauter." },
      { if: R, text: "Tu regardes le jeune homme, puis le vieux, puis tes mains. Deux contre un. Tu as connu pire au bord d'un fossé ; mais ceux-là n'avaient pas un levier entre eux et toi." },
      "« À moins, ajoute-t-il, qu'on ne lui ait parlé avant moi. Je ne peux pas l'empêcher. Un homme écoute toujours le dernier qui lui a dit la vérité : je le sais, c'est moi. »",
    ],
    choices: [{ back: "K17_aubespin" }] },

  K17j_aub_line: { act: "V", title: "Le seul quart d'heure", place: "tour", ambiance: "chateau",
    text: [
      "« Votre patronne. » Il a un mouvement des lèvres qui serait un sourire chez un autre. « Soixante-neuf ans, les poumons perdus, sanglée sur une chaise au milieu de mes gardes. Elle m'a fabriqué un Cahier. La même toile, le même fil rouge, votre écriture imitée à s'y méprendre, et dedans, page après page, des sottises admirablement vraisemblables sur une Porte qui n'existait pas. Je l'ai lu jusqu'au bout. J'ai perdu un quart d'heure. »",
      "« En soixante ans, personne ne m'avait pris un quart d'heure. On m'a pris de l'argent, des hommes, une fois une province. Du temps, jamais. Il a fallu une paysanne. »",
      "Il regarde ses mains. « Elle avait écrit, à la dernière page : *Pendant que tu lis, tu es ailleurs qu'en bas.* J'ai compris en fermant le livre. J'ai ri. Je vous le dis parce que vous l'aimez, et qu'elle voudra le savoir : j'ai ri, tout seul, dans un escalier, et j'ai pensé que si je l'avais eue à vingt ans dans mon atelier, au lieu de neuf garçons sourds, je n'aurais eu besoin de personne. »",
      "« Elle vous attend, là-bas, sur sa chaise. Elle a neuf ans ici, dans un pré, et elle vous attend aussi. Vous êtes la seule personne que je connaisse qu'on attende des deux côtés. C'est une richesse. Elle va vous gêner pour choisir. »",
    ],
    choices: [{ back: "K17_aubespin" }] },

  K17j_aub_enfant: { act: "V", title: "La clef qu'il a portée dix ans", place: "tour", ambiance: "chateau",
    text: [
      "Il met un temps à répondre. Sa main cherche le bouchon de son sablier, le trouve, le laisse.",
      "« On vous l'a rapporté. Oui. Il a demandé pour l'enfant. Je l'avais oublié : on oublie très bien ce qui ne sert plus. »",
      "« Écoutez ceci, qui n'est pas dans ma cause, et que je ne plaide pas. L'écorce de fièvrier, je la connais depuis vingt ans. Mes acheteurs en ont dans leurs armoires, pour leurs petits-enfants. J'avais la clef de la Chambre haute. Je l'ai portée dix ans sur moi. Il suffisait de monter, n'importe quel dimanche, avec une fiole et une pincée. »",
      "« Je ne suis pas monté. » Il le dit sans baisser les yeux. « Une enfant guérie, c'est une mère qu'il faut réveiller pour la lui rendre ; et une reine réveillée demande des comptes. J'ai fait le calcul. Je le fais toujours. Il était juste. Je l'ai refait chaque dimanche pendant dix ans, pour être sûr qu'il l'était toujours, et puis j'ai cessé de monter l'escalier jusqu'à la porte. »",
      { if: { has: "monde:aelis_remede" }, text: "Tu lui dis qu'elle a dix-huit prises dans la main, à l'heure qu'il est. Qu'on est monté pour lui. Il ferme les yeux, le temps d'un battement. « Alors c'est fait. Bien. Je n'aurai pas eu à le faire. » Il rouvre les yeux. « Ne me regardez pas ainsi. C'est une chose qu'on peut dire avec soulagement. »" },
      { if: { not: { has: "monde:aelis_remede" } }, text: "« Elle a huit ans, là-haut, à trois cent soixante marches. Elle les a depuis soixante ans. Si vous cherchez dans ma vie la chose dont je ne suis pas fier, vous l'avez : elle a la taille d'une clef. »" },
    ],
    choices: [{ back: "K17_aubespin" }] },

  K17r_aub_lison: { act: "V", title: "Une rue en pente, la nuit", place: "tour", ambiance: "chateau",
    text: [
      "Il lève un sourcil. Il ne demande pas son nom : il ne l'a jamais su, et il sait qu'il y en a des milliers.",
      "« Le puits la montre. Il ne la tient pas : elle est dans son lit, à Roquebise, la joue sur l'oreiller, au milieu d'un souffle. Je connais la nuit du Bond. J'y ai perdu une verrerie et six lieues de bonne lisière en une heure. » Il se reprend, à ta figure. « Vous y avez perdu davantage. Je vous l'accorde. »",
      "« Voici son compte, puisque c'est celui-là qui vous occupe. Vous rendez le coup ici, chez votre ami : il n'y a pas eu de Bond. Il n'y a pas eu de rue. Vos parents ont épousé d'autres gens, ou les mêmes, un autre jour ; il leur naît des enfants, et aucun n'est elle. Vous le rendez chez vous : elle achève son souffle, et elle ouvre les yeux. Elle a cinq ans. Vous en avez seize. Elle cherchera partout un frère ou une sœur de dix ans, et vous serez là, à lui dire que c'est vous. »",
      "« Ou vous gardez la note. Elle reste comme elle est : entière, sans une ride, à sa place. Et vous montez la voir le dimanche, avec une pincée. Je ne l'ai jamais fait pour personne. On me dit que c'est doux. »",
      "Tu as les dents serrées. Il le voit. « Je ne vous torture pas. Je compte tout haut. C'est ce que vous faites depuis neuf jours, et vous comptez mieux que moi : vous, vous savez pour qui. »",
    ],
    choices: [{ back: "K17_aubespin" }] },

  K17r_aub_couvert: { act: "V", title: "Deux couverts", place: "tour", ambiance: "chateau",
    text: [
      { if: { has: "r:offre_pesee" }, text: "« Vous m'aviez demandé combien de pincées par dimanche. J'avais dit trois, et que je vous en compterais quatre. Je tiens mes marchés : il tient. »" },
      { if: { has: "r:offre_refusee" }, text: "« Vous m'aviez dit de le garder. Je l'ai gardé. On peut changer d'avis entre deux coups de cloche ; c'est même le seul moment où cela ne coûte rien. »" },
      { if: { not: { any: [{ has: "r:offre_pesee" }, { has: "r:offre_refusee" }] } }, text: "« Vous ne m'aviez pas répondu, là-haut : vous regardiez le gris. Il tient. »" },
      "« Il y en a deux, à présent. » Sa canne désigne {autre}, sans se lever du pavé. « Je ne sépare pas ce qui est venu ensemble. Vous lâchez ce levier, tous les deux. Vous remontez. Cette note finit d'elle-même, puisque vous aurez refusé de la rendre : le Livre dit *ni rendu, ni refusé.* Chez moi, la vague achève sa course. Et vous êtes debout, avec du sable pour mille ans, dans un monde où plus rien ne vous courra après. »",
      "« Songez-y. Pas de Garde. Pas de faim. Pas d'hiver. Vous aurez toutes les maisons, et le temps de les visiter. »",
      "Tu regardes {autre}. {autre:Il} regarde le puits. Tu connais cette offre : on te l'a faite toute ta vie, en plus petit, au bord des fermes prises. Entre, prends, personne ne dira rien. C'est la première fois qu'elle vient avec une canne à pommeau et de la lavande.",
    ],
    choices: [{ label: "Garder cela pour le pied de l'escalier", fx: { flag: "r:couvert_redit" }, back: "K17_aubespin" }] },

  // ----- celui qui passe, dans la cave
  K17j_coudrier: { act: "V", title: "Le Grand Maître, au milieu d'un effort", place: "tour", ambiance: "chateau",
    text: [
      { before: "monde:coudrier_lache", text: "Il est comme tu l'as quitté des yeux ce matin, du haut d'une vis : tête nue, la houppelande déchirée à l'épaule, ses toiles d'araignée en pèlerine. Les deux poings fermés sur les poignets de son élève. Une goutte de sueur à la tempe, ronde, qui attend." },
      { before: "monde:coudrier_lache", text: "Sa baguette est par terre, en deux morceaux. La virole de bronze a roulé vers le puits ; elle se tient sur sa tranche, à un pied du bord." },
      { after: "monde:coudrier_lache", text: "Il est debout devant le levier, les mains ouvertes, le gris revenu jusqu'aux yeux. Il a gardé sur la figure ce qu'il disait en dernier." },
      { after: "j:chapeau_rendu", text: "Il a son chapeau noir sur la tête, d'aplomb. On dirait qu'il ne l'a jamais quitté." },
    ],
    choices: [
      { label: "Poser un grain sur son poing", hide: { seen: "K17j_coudrier_eveil" }, if: GRAIN, why: "Il te faudrait un grain.", fx: { stock: { sable: -1 }, flag: "monde:coudrier_lache", ep: ["histoire", 1000] }, to: "K17j_coudrier_eveil", big: true },
      { label: "Un second grain : « Maître. Celui qui m'écrit. Vous m'aviez dit qu'il n'aurait pas été. »", hide: { any: [{ not: { seen: "K17j_coudrier_eveil" } }, { not: { secret: "j_efface" } }, { seen: "K17j_coudrier_efface" }] }, if: GRAIN, why: "Il te faudrait un grain.", fx: { stock: { sable: -1 } }, to: "K17j_coudrier_efface" },
      { back: "K17_cave" },
    ] },

  K17j_coudrier_eveil: { act: "V", title: "On aurait dû commencer par là", place: "tour", ambiance: "chateau",
    text: [
      "Le sang lui remonte aux joues. La goutte coule. « ...lâchez donc, malheureux, elle passe le cran ! » La voix est sèche, nasale, furieuse, et elle s'arrête net : il a senti que ce qu'il tirait ne tirait plus.",
      "Il te voit. Il voit {autre}, en sabots. Il voit l'homme assis sur le berceau, et il le regarde longtemps ; puis il regarde celui qu'il tient ; puis encore l'autre.",
      "« Il y en a deux. » Sa moustache remue. « J'ai dit toute ma vie qu'un seul suffisait à me gâter une journée. » Il te cherche des yeux. « Combien ? — Onze, maître. Elle tient le onzième. — La barre ? — Au fond. » Il ferme les yeux. Il les rouvre. « Au fond. J'ai donc pesé aussi. Il tirait pour retenir, je tirais pour remonter, et à nous deux nous avons fait ce qu'aucun des deux ne voulait. C'est toute l'histoire des conseils. »",
      "Il regarde ses poings, sur les poignets gris. Il les ouvre. Cela lui prend du temps : ils ont serré de toute sa force, et les doigts ont pris le pli. « Voilà. On aurait dû commencer par là. On ne se bat pas au-dessus d'un levier : je l'avais dit moi-même, ce matin, à un apprenti. »",
      { if: { item: "chapeau_coudrier" }, text: "Tu lui tends son chapeau. Il le prend à deux mains, le retourne, souffle dedans. « Où était-il ? — Sur la tête d'un homme du duc, de travers. » Il s'en coiffe, d'aplomb, avec la gravité d'un homme qui remet une couronne. « Un Grand Maître tête nue, c'est un bedeau. Je vous remercie. Je me sentais vieux. »" },
      { if: { has: "j:mot_josquin" }, text: "Tu lui dis que Josquin a ses lunettes. Qu'il les avait laissées sur la table. Qu'il a compté avec lui, les onze, de l'autre côté de la porte. Le vieillard ne répond pas tout de suite. « Il a compté. » Sa voix a changé de place. « Deux bouches se trompent moins. Dites-lui qu'il a la serrure, et qu'il cherche du côté de ce qu'on ne dit pas. Il comprendra dans dix ans. C'est le bon délai. »" },
      "Il avance la main vers le cuir, et la retire comme d'un poêle. « Elle pèse sur moi. Je l'ai tenue, elle me tient : c'est écrit, et pour une fois le Livre a raison contre moi. Ce n'est plus mon affaire. C'est la vôtre, à tous les deux. » Il vous regarde l'un après l'autre. « Le coin sort par le petit bout. Un en haut, à la corde. Un en bas, ici. Et le mot. Je vous ai dit le chapitre. Je ne vous dirai pas quoi en faire : on l'a laissé blanc pour cela. »",
      "Le gris lui vient aux mains. Il joint les talons. « Tenez-vous droits », dit-il encore, et c'est aux deux.",
    ],
    choices: [{ label: "Le laisser debout", fx: { flag: "j:coudrier_dit" }, back: "K17j_coudrier" }] },

  K17j_coudrier_efface: { act: "V", title: "Une ligne de plus", place: "tour", ambiance: "chateau",
    text: [
      "Il rouvre les yeux sur ta question. Il regarde {autre}, qui s'est écarté{autre:e} de trois pas, par discrétion ou par instinct.",
      "« Je vous l'ai dit. Je le maintiens. Si le coup tombe à mon heure, le pays d'où vient cette personne n'a pas eu lieu. »",
      { if: { has: "j:sait_sortie" }, text: "Tu lui récites la ligne. Celle que la copie de Josquin n'a pas, et qu'une novice t'a dite les yeux au toit : *Ceux qui veillent dans la note en sortent par la porte qu'on ouvre.*" },
      { if: { has: "j:sait_sortie" }, text: "Il te la fait répéter. Il la répète lui-même, à mi-voix, en pesant chaque mot comme on essaie une pièce sur le marbre. « *La* porte. Pas *leur* porte. » Sa moustache tremble. « Josquin s'est arrêté au bas de sa feuille. J'ai lu ce chapitre deux cents fois dans ma jeunesse, et je l'ai su par cœur sur une mauvaise copie : la mienne finissait au même endroit. »" },
      { if: { has: "j:sait_sortie" }, text: "« Alors j'ai eu tort d'une ligne, et j'en suis bien aise. Son pays ne sera pas : cela, je le maintiens, et il faudra le lui dire. Mais {autre:lui}, {autre:il} veille. {autre:Il} sortira avec vous, par où vous sortirez. Ce sera quelqu'un sans village, sans registre, sans personne qui l'ait vu{autre:e} naître. » Il te regarde. « On vit très bien ainsi. Vous en savez quelque chose. »" },
      { if: { not: { has: "j:sait_sortie" } }, text: "« Je n'en sais pas davantage. Le chapitre s'arrête à *qu'ils s'entendent sans se voir*, du moins sur ma copie, et sur celle de Josquin. S'il y a une ligne après, elle est à Sainte-Aure, dans l'original, et je ne l'ai pas lue. Un Grand Maître qui ignore la dernière ligne de son Livre : mettez cela sur ma tombe. »" },
      { if: { not: { has: "j:sait_sortie" } }, text: "« Je ne peux pas vous rassurer. Je peux vous dire ceci : le Livre est dur, et il n'est pas méchant. Il n'a jamais puni ceux qui rendaient. »" },
      "Le grain finit. Il a le temps d'un mot, et il le dépense : « Dites-le-lui. »",
    ],
    choices: [
      { label: "Garder ce qu'il a dit", hide: { not: { has: "j:sait_sortie" } }, fx: { flag: "j:efface_leve", ep: ["perso", 800] }, back: "K17j_coudrier" },
      { label: "Garder ce qu'il a dit", hide: { has: "j:sait_sortie" }, back: "K17j_coudrier" },
    ] },

  K17j_jeune: { act: "V", title: "Vingt toises", place: "tour", ambiance: "chateau",
    text: [
      "Il a trente ans. Tu l'as vu ce matin tourner autour de ce puits, à petits pas, sa montre à la main. Il t'a dit que tu avais la main sûre, et qu'il regrettait de ne pas t'avoir eu{e} plus tôt.",
      "Il a les deux mains au cuir, et la tête tournée vers le puits, par-dessus l'épaule. Tu n'avais jamais vu de peur sur cette figure. Elle y est neuve, mal installée, comme un meuble dans une pièce où l'on n'a pas l'habitude de recevoir.",
      { if: { has: "j:sait_accident" }, text: "Tu as lu ses plans, dans son logis. Quatre toises pour la Reine. Vingt pour le duc. Et au crayon, de sa main, souligné : *Butée à onze. Ne pas dépasser.* Il avait calculé un vol, à l'échelle. Il n'avait pas calculé un vieillard." },
      "L'homme assis vous regarde faire. Il ne dit rien. Il a prévenu qu'il ne pouvait pas l'empêcher.",
    ],
    choices: [
      { label: "Poser un grain sur son épaule, et lui dire ce qu'il a fait", if: GRAIN, why: "Il te faudrait un grain.", fx: { stock: { sable: -1 }, flag: ["monde:jeune_sait", "j:jeune_dit"], ep: ["histoire", 1000] }, to: "K17j_jeune_eveil", big: true },
      { back: "K17_cave" },
    ] },

  K17j_jeune_eveil: { act: "V", title: "Ce que dit le dernier", place: "tour", ambiance: "chateau",
    text: [
      "Il respire. Il te voit, et il te reconnaît : le dixième, celui du niveau. « Vous. Vous n'êtes pas à votre marque. » C'est la première chose qui lui vient, et il en a honte aussitôt.",
      "Tu parles vite. Tu lui dis une lieue. Quarante mille personnes, la bouche ouverte sur un chiffre. Soixante ans. Tu lui dis que tu en viens.",
      { if: { has: "j:sait_accident" }, text: "« J'avais mis une butée. » Il a la voix d'un homme qui se défend devant un tribunal vide. « À onze. Le coin tenait la barre à mi-course. — Je sais. Vingt toises. Je l'ai lu. — Alors vous savez que je ne voulais pas... — Je sais ce que vous vouliez. Une reine, pour un duc. C'était déjà de trop. Le reste est venu avec. »" },
      { if: { not: { has: "j:sait_accident" } }, text: "« Je voulais une chambre. » Il a la voix d'un homme qui se défend devant un tribunal vide. Tu dis que tu le crois, et que cela n'a rien arrangé. Qu'on ne dérobe pas une heure à une ville comme on tire un fil d'une étoffe." },
      "Il regarde, derrière toi, l'homme assis sur le berceau. Ils se regardent, d'un œil gris à un œil gris. « Il m'a dit que nous avions gagné. — Il vous dira tout à l'heure de tenir ce levier. Il n'a plus de bras. Il lui faut les vôtres. »",
      "« Et vous ? Que me dites-vous ? »",
      "Tu as le temps d'une phrase. Tu penses à une veuve de la rue de la Poulie, à un boulanger, à une enfant de huit ans. Tu dis : « De l'ouvrir. La main. Quand on vous le demandera. Vous aurez eu peur une fois, pour de bon ; servez-vous-en. »",
      "Il ne répond pas. Le gris le reprend, les yeux sur toi. Mais ses doigts, sur le cuir, ont changé d'un rien : ils tenaient, et ils sont posés.",
    ],
    choices: [{ back: "K17_cave" }] },

  K17j_levier: { act: "V", title: "Ce qu'un horloger lit dans une cave", place: "tour", ambiance: "chateau",
    text: [
      "Tu t'accroupis devant la fente. Tu fais ce que Line t'a appris à faire devant toute machine : tu la suis du doigt, sans toucher, d'un bout à l'autre, jusqu'à savoir ce qui mène quoi.",
      "Le levier sort du pavé par une crémaillère de bronze, longue de trois pieds. Il est au dernier cran. À mi-course, un cran est plus clair que les autres : on y a passé la lime, récemment, pour qu'il morde. C'est la butée. Le coin devait arrêter la barre là.",
      "Le coin est une ligne plus bas, dans sa rainure, enfoncé jusqu'à la tête. Il a suivi la barre au fond. Tant qu'il est là, le levier ne remonte pas d'un cheveu ; et dès qu'il n'y sera plus, la barre voudra remonter seule, comme une poitrine qu'on cesse d'écraser.",
      "Tu regardes le fil. Il part du milieu de la barre, il monte par l'œil de la voûte, il finit au déclic du marteau, à trois cent soixante marches. Quand la barre remonte, elle tire le fil. Le déclic tourne. Le marteau quitte la lèvre, et revient.",
      "Mais un marteau seul, sur une cloche immobile, rend un coup mort : tu l'as entendu, les jours où l'on règle. Il faut que la cloche vienne au-devant. Il faut quelqu'un à la corde, qui la lance au moment où le fil se tend. C'est pour cela qu'ils sont deux, dans le chapitre. Les Fondateurs n'ont pas fait un rite. Ils ont fait une mécanique, et ils ont écrit le mode d'emploi en latin.",
      "Tu te relèves. Tu sais l'ordre des gestes. En bas : chasser le coin, tenir le cuir, laisser monter. En haut : sentir le fil se tendre, et tirer.",
    ],
    choices: [{ label: "Le dire à {autre}, geste par geste", fx: { flag: "j:lu_levier", ep: ["histoire", 600] }, back: "K17_cave" }] },

  K17j_fil: { act: "V", title: "Une corde de viole", place: "tour", ambiance: "chateau",
    text: [
      "Au chevalet de droite, le fil passe à portée de bras. Il a l'épaisseur d'un doigt, et il est flou : il vibre, arrêté au plus large de sa vibration.",
      "Tu y poses la main à plat. La note t'entre par la paume. C'est la même que là-haut, dans la Cage, quand tu avais les oreilles nues ; mais ici elle est douce, ronde, et on la boit par le bras.",
      "Tu dis quelque chose, tout bas, la bouche près du laiton. Un mot pour rien : *Line.* Tu le sens partir dans le fil, comme une goutte dans une gouttière.",
      "Il monte. Tu ne sais pas s'il arrive. Mais tu te rappelles la dernière ligne du chapitre, celle de la copie : *et qu'ils s'entendent sans se voir.* Tu avais cru à une image. Les Fondateurs ne faisaient pas d'images. Ils ont tendu trois cent soixante marches de laiton entre deux personnes, et ils ont pensé qu'elles auraient des choses à se dire.",
    ],
    choices: [{ label: "Ôter ta main", fx: { flag: "j:fil_parle", ep: ["histoire", 400] }, back: "K17_cave" }] },

  // ----- celui qui reste, dans la cave
  K17r_coudrier: { act: "V", title: "Celui qui ne t'a pas encore parlé", place: "tour", ambiance: "chateau",
    text: [
      { before: "monde:coudrier_lache", text: "Il a du sang aux joues, les veines du cou, une goutte de sueur à la tempe. Ses deux poings sont fermés sur deux poignets gris. Chez toi, les poignets étaient partis, et il serrait leur place." },
      { after: "monde:coudrier_lache", text: "Il est debout devant le levier, les mains ouvertes, les talons joints. Il a la figure qu'il aura chez toi : attentive, comme un professeur qui écoute une mauvaise réponse jusqu'au bout." },
      { if: { has: "r:coudrier_eveille" }, text: "Tu lui as parlé, chez toi. Il t'a demandé l'heure, le jour, l'année. Il t'a dit qu'il en avait calculé cinquante-huit. Pour lui, cela viendra ; pour toi, c'est ce matin. Tu sais une chose qu'il ignore : son dernier mot." },
      { if: { has: "r:jehan_nom" }, text: "Tu penses à un grand garçon en noir, au pied d'un escalier, qui a dit son nom tout haut à ce vieillard-ci, et que ce vieillard-ci n'a pas entendu." },
    ],
    choices: [
      { label: "Poser un grain sur son poing", hide: { seen: "K17r_coudrier_eveil" }, if: GRAIN, why: "Il te faudrait un grain.", fx: { stock: { sable: -1 }, flag: "monde:coudrier_lache", ep: ["histoire", 1000] }, to: "K17r_coudrier_eveil", big: true },
      { back: "K17_cave" },
    ] },

  K17r_coudrier_eveil: { act: "V", title: "Le petit bout", place: "tour", ambiance: "chateau",
    text: [
      { if: { not: { seen: "K17j_coudrier_eveil" } }, text: "Le sang lui remonte. « ...lâchez donc, malheureux ! » Il s'arrête : ce qu'il tirait ne tire plus. Il te voit, sur ses poings, une main charbonneuse. Il voit l'homme assis, et celui qu'il tient. « Il y en a deux. Un seul suffisait à me gâter une journée. »" },
      { if: { seen: "K17j_coudrier_eveil" }, text: "Il rouvre les yeux. Il te voit, cette fois, toi. « L'autre. Celui d'en bas. On m'a parlé de vous. » Il regarde tes sabots, ton charbon, ton sablier de corne. « Vous avez des mains de champs. C'est ce qu'il fallait. Les miennes ont trop tenu de plumes. »" },
      "Tu lui dis que tu viens de soixante ans plus loin. Que tu l'as vu là-bas, à cette place, avec cent ans d'araignées sur le dos. Il t'écoute sans un geste ; seule sa moustache bouge. « Soixante. J'en aurais calculé cinquante-huit, pour la voûte. »",
      { if: { has: "r:coudrier_eveille" }, text: "Tu ne peux pas t'en empêcher : tu ris. « Vous l'avez dit. Vous le direz. Mot pour mot. » Il te considère. « Je me répète donc. À soixante-dix ans, c'est permis ; à cent trente, c'est une infirmité. Que dirai-je d'autre ? — Votre dernier mot. Vous n'aurez le temps que d'un. Vous direz : *le petit bout.* » Il hoche la tête, lentement. « C'est le bon. Je suis content de l'avoir trouvé. On craint toujours de finir sur une sottise. »" },
      { if: { not: { has: "r:coudrier_eveille" } }, text: "« Écoutez, puisque vous êtes celui qui frappe. Le coin est dans sa rainure, à gauche. On ne l'arrache pas : on le chasse, par-dessous, par le petit bout. Trois coups secs valent mieux qu'un gros. Et tenez le cuir avant le troisième : elle voudra monter seule. »" },
      { if: { has: "r:jehan_nom" }, text: "Tu lui dis qu'il y a chez toi un garçon de vingt ans, dans la Garde, porté sur les rôles au nom de Coudray. Qu'on avait changé deux lettres en 541, pour pouvoir dormir. Qu'il est descendu jusqu'à lui, ce matin, et qu'il a dit tout haut : *Je m'appelle Jehan Coudrier.* Le vieillard reste la bouche entrouverte. « Il a fait cela. Devant témoin ? — Devant moi. — Alors c'est valable. » Il se redresse d'un pouce. « Dites-lui de se tenir droit. Nous joignons les talons, dans la famille : cela ôte la moitié de la force. Qu'il les écarte. »" },
      { before: "monde:coudrier_lache", text: "Il ouvre les poings." },
      "Il regarde ses mains ouvertes, et le cuir, qu'il ne peut plus toucher. « Je l'ai tenue. Elle me tient. Sur vous, elle ne pèsera rien : vous venez d'une heure qu'elle n'a pas prise. » Le gris lui vient aux doigts. « Vous avez quelqu'un là-haut. Faites-vous confiance. Une horloge à deux aiguilles ne marche que si aucune ne veut être la grande. »",
    ],
    choices: [
      { label: "Le laisser debout", hide: { not: { has: "r:jehan_nom" } }, fx: { flag: "r:coudrier_jehan_dit", ep: ["perso", 600] }, back: "K17r_coudrier" },
      { label: "Le laisser debout", hide: { has: "r:jehan_nom" }, back: "K17r_coudrier" },
    ] },

  K17r_jeune: { act: "V", title: "La marge", place: "tour", ambiance: "chateau",
    text: [
      "C'est le même, avec soixante ans de moins. Tu as vu l'autre à Arvoise, dans une cour, au pied d'une estrade : toujours net, toujours à l'heure, l'air d'un homme qui sait le prix de chaque chose dans la pièce.",
      "Celui-ci a peur. Il a la tête tournée vers le puits, par-dessus l'épaule, et les lèvres sur un chiffre.",
      { if: { has: "r:jeune_eveille" }, text: "Tu as regardé le vieux lui parler, le temps d'un grain. Il a demandé pour la Reine, pour l'enfant, pour le vieillard. Puis le vieux lui a dit que oui, ils avaient gagné, et il a souri. Tu n'as pas aimé ce sourire. Il était trop content de trouver une raison." },
      "L'homme assis vous regarde. Il se tait. Il a prévenu qu'il ne pouvait pas l'empêcher.",
    ],
    choices: [
      { label: "Poser un grain sur son épaule, et lui dire Roquebise", if: GRAIN, why: "Il te faudrait un grain.", fx: { stock: { sable: -1 }, flag: ["monde:jeune_sait", "r:jeune_dit"], ep: ["histoire", 1000] }, to: "K17r_jeune_eveil", big: true },
      { back: "K17_cave" },
    ] },

  K17r_jeune_eveil: { act: "V", title: "Ce qu'il y a dans la marge", place: "tour", ambiance: "chateau",
    text: [
      "Il respire. Il voit une figure qu'il ne connaît pas, du charbon, des sabots. « Qui êtes-vous ? Comment êtes-vous entré{e} ? » Puis, plus bas : « Vous n'avez pas de bandeau. »",
      "Tu dis que tu viens de la marge. Il ne comprend pas. Tu le lui expliques, à ta façon, en comptant sur tes doigts comme on compte une glane.",
      "« Vous avez calculé une lieue. Elle y est. Ensuite ça s'est mis à pousser. Une abbaye, la quinzième année. Une ville, la trente-cinquième. La cinquante-cinquième, c'est venu sur nous en une nuit, à Roquebise, où on vous soufflait vos cuves. Les gens couraient. J'avais dix ans, j'étais aux foins. Ma sœur en avait cinq. Elle s'est retournée pour voir. »",
      "Il a blêmi. « Je n'ai pas... Ce n'est pas dans mes chiffres. La barre devait s'arrêter à onze. — Elle est au fond. Vos chiffres, ils sont là-dedans, avec ma sœur. » Tu montres le puits du menton.",
      "Il regarde, derrière toi, l'homme assis sur le berceau. « Il m'a dit que nous avions gagné. — Il a gagné, lui. Il vend ce qui en sue. Il a quarante clients. Tout à l'heure, il viendra vous dire de tenir ce levier, parce qu'il n'a plus de bras. C'est vous, ses bras. »",
      "« Que voulez-vous que je fasse ? » Il le demande pour de bon, comme on demande son chemin.",
      "« Que vous lâchiez. C'est tout. Vous avez de belles mains. Ouvrez-les. »",
      "Le gris le reprend sur un mot qu'il n'a pas dit. Tu regardes ses doigts, sur le cuir. Ils serraient. Ils sont posés.",
    ],
    choices: [{ back: "K17_cave" }] },

  K17r_ansel: { act: "V", title: "Le plus petit des neuf", place: "tour", ambiance: "chateau",
    text: [
      "Il est à gauche du levier, au bout de son coup, les yeux fermés, les deux mains crispées sur le manche. Treize ans. Une montre neuve à la ceinture.",
      { if: { item: "maillet_ansel" }, text: "Tu as son maillet à ta ceinture : le même buis, les mêmes lettres au fer rouge, avec soixante ans de plus. Tu ne les approches pas l'un de l'autre. Il y a des choses qu'on évite de présenter à elles-mêmes." },
      { if: TRAVERS, text: "Il a frappé de biais, la main gauche devant, comme {autre} le lui a montré dans une cour. Il a une larme arrêtée à mi-joue. Il croit qu'il a désobéi, et qu'on le chassera." },
      { if: { not: TRAVERS }, text: "Il a frappé droit, de toute sa force, parce qu'à treize ans on tient à bien faire. Il ne sait pas encore ce qu'il a fait. Il le saura en rouvrant les yeux." },
      { if: { has: "r:hurel_dit" }, text: "Tu as parlé à sa mère, rue de la Poulie. Elle t'a dit qu'il avait froid aux pieds, la nuit." },
      "Il a de la cire aux oreilles : il n'est pas pris, seulement arrêté. Un grain le remettrait en marche dans son silence.",
    ],
    choices: [
      { label: "Poser un grain sur sa main, et lui parler par gestes", hide: { seen: "K17r_ansel_eveil" }, if: GRAIN, why: "Il te faudrait un grain.", fx: { stock: { sable: -1 }, flag: "monde:ansel_dit", ep: ["histoire", 800] }, to: "K17r_ansel_eveil" },
      { back: "K17_cave" },
    ] },

  K17r_ansel_eveil: { act: "V", title: "Trois coups secs", place: "tour", ambiance: "chateau",
    text: [
      "Il rouvre les yeux. Il voit la barre au fond, les deux hommes noués sur le levier, et toi. Il lâche le maillet d'une main pour se la mettre sur la bouche.",
      "Il ne t'entend pas. Tu lui parles comme on parle aux Lents, à la lisière : avec les mains, lentement. Tu montres le coin. Tu montres le dessous. Tu fais le geste de chasser. Tu hausses les sourcils : comment ?",
      { if: TRAVERS, text: "Il comprend tout de suite. Il s'accroupit, il te montre la face de droite, où l'on passerait une lame. Il fait le geste : là, par le jour, de bas en haut. Un doigt levé. Un seul coup suffira. Il a un sourire de travers, lui aussi, mouillé : il vient de comprendre que son coup manqué servait à quelque chose." },
      { if: { not: TRAVERS }, text: "Il comprend. Il s'accroupit, il te montre le dessous de la fente, où le petit bout affleure. Il lève trois doigts. Il fait le geste, trois fois, sec, du poignet et non de l'épaule ; puis il ferme le poing au-dessus : tenir, avant le troisième. On le lui a appris pour l'enfoncer. Il te l'apprend à l'envers." },
      { if: { has: "r:hurel_dit" }, text: "Tu écris sur le pavé, au charbon, en bâtons : *TA MÈRE SAIT. ELLE ATTEND À LA PORTE DE FER.* Il lit. Il devient très rouge. Il tire sa montre neuve, il te la montre, et il se touche la poitrine : c'est elle qui l'a payée." },
      { if: { not: { has: "r:hurel_dit" } }, text: "Tu écris sur le pavé, au charbon, en bâtons : *TU SORTIRAS. PAR LA PORTE DE FER.* Il lit. Il fait oui. Il tire sa montre neuve, il te la montre, comme une preuve qu'il a quelqu'un." },
      "Il reprend sa place, de lui-même, les pieds sur son trait de craie, le maillet contre lui. Le gris le trouve ainsi : un apprenti qui attend qu'on ait encore besoin de lui.",
    ],
    choices: [{ back: "K17_cave" }] },

  K17r_coin: { act: "V", title: "Par-dessous", place: "tour", ambiance: "chateau",
    text: [
      "Tu te couches sur le pavé, la joue contre le bronze de la fente. Il est tiède. D'en dessous, on voit le petit bout du coin : une languette blonde, épaisse d'une ligne, qui dépasse d'un grain de blé dans une rainure large comme le petit doigt.",
      { if: TRAVERS, text: "Du côté droit, il bâille. Le jour passe, fin comme un cheveu. Trois faces ont mordu ; la quatrième attend qu'on l'aide." },
      { if: { not: TRAVERS }, text: "Il a mordu des quatre faces. Le bronze de la rainure a fait autour une petite lèvre, repoussée. Il faudra frapper juste, et dans l'axe." },
      { if: { item: "chasse_bronze" }, text: "Tu tires de ta ceinture la tige de bronze. Tu la présentes, sans frapper. Elle entre comme une clef : elle a été limée pour cette rainure, sur un dessin, par un ouvrier qui en a ôté un cheveu de trop." },
      { if: { all: [{ not: { item: "chasse_bronze" } }, { item: "baguette_bronze" }] }, text: "Tu tires de ta ceinture la baguette du cabinet, celle qu'il avait laissée sous un sablier pour qui aurait un meilleur bras. Le bout ferré a la grosseur de la rainure. C'est du buis : il faudra frapper sec, pour qu'il ne plie pas." },
      { if: { not: { any: [{ item: "chasse_bronze" }, { item: "baguette_bronze" }] } }, text: "Tu n'as rien qui entre là. Tu regardes autour. À un pied du puits, sur sa tranche, la virole de bronze de la baguette cassée. Elle a la grosseur de la rainure : le vieux l'avait fait faire pour cela. Tu vas la cueillir, du bout des doigts, au bord du gris. Emmanchée sur le plus long des deux morceaux de buis, elle fera un chasse. Un mauvais, mais un." },
      { if: { item: "maillet_ansel" }, text: "Pour frapper, tu as le maillet. Il a soixante ans de plus que celui que l'enfant tient encore, et c'est le même. Il finira ce qu'il a commencé." },
      { if: { not: { item: "maillet_ansel" } }, text: "Pour frapper, tu as le talon de ton sabot. Il a enfoncé des chevilles, ouvert des volets, cassé des noix. Il fera." },
      { if: { has: "monde:ansel_dit" }, text: "L'enfant t'a montré le geste : sec, du poignet, de bas en haut. Et le poing fermé : tenir avant le dernier." },
      "Tu ne frappes pas. Pas encore. Dès que le coin sautera, la barre voudra monter ; et là-haut, il faut une main sur une corde. Tu poses tes outils par terre, dans l'ordre, à gauche du levier, comme on met le couvert.",
    ],
    choices: [{ label: "Te relever", fx: { flag: "r:coin_pret", ep: ["histoire", 600] }, back: "K17_cave" }] },

  K17r_puits: { act: "V", title: "Ce qui est devant", place: "tour", ambiance: "chateau",
    text: [
      "Tu te mets à genoux au bord. Le gris est à une main sous le pavé. Il luit par en dessous, sans source.",
      "Chez toi, on y voyait les cercles, rangés par années comme les couches d'un tronc, et presque à la surface une rue en pente, la nuit, et une vitre sous un toit, où quelqu'un dormait. Ce puits-ci a soixante ans de moins. Il n'a encore rien pris qu'une ville.",
      "Il y passe pourtant des formes, très bas. Tu avais refusé de les regarder en arrivant. Tu regardes.",
      "C'est une rue en pente. Des toits de tuiles vernies. Il fait jour. Des gens y marchent, lentement, à leurs affaires : une femme avec deux seaux, un homme qui roule une canne de souffleur sur son épaule, des enfants qui ne sont à personne que tu connaisses. Au bout de la rue, une verrerie fume.",
      "C'est Roquebise. C'est Roquebise comme elle sera si rien ne la prend : une ville où l'on souffle le verre, où ta rue existe, et où tu ne trouves ni ta porte ni ta figure.",
      "Les deux images sont dans le même trou, à soixante ans de fond l'une de l'autre. Tu sais laquelle a ta sœur dedans.",
      "Tu te relèves. Tu n'as rien décidé. Mais tu sais ce que tu décideras de quoi.",
    ],
    choices: [{ label: "Reculer du bord", fx: { flag: "r:vu_devant", ep: ["perso", 800] }, back: "K17_cave" }] },

  // ----- the last word face to face
  M17: { act: "V", title: "Au pied des quatre-vingts marches", backName: "le pied de l'escalier", charniere: true, aparte: true,
    text: [
      { first: true, text: "Vous vous retrouvez au pied de l'escalier, à l'écart du levier. Derrière vous, la salle : cinq personnes debout, neuf sourds, un vieillard assis qui compte ses grains et ne les cache pas." },
      { first: true, text: "C'est ici qu'on se sépare. Trois cent soixante marches, et le fil. Vous l'avez su en entrant dans cette ville, chacun par son bout ; vous l'aviez écrit ; et il se trouve qu'une chose qu'on sait depuis neuf jours peut encore prendre à la gorge." },
      { first: true, if: J, text: "{autre} vide son sachet dans sa paume, une dernière fois, et compte. « Trois cent soixante marches, ça mange. » {autre:Il} fait deux parts. La tienne est la plus grosse. Tu veux protester ; {autre:il} te ferme la main dessus. « Moi, j'ai le puits. Il sue. Toi, là-haut, t'as que ça. »" },
      { first: true, if: R, text: "Tu vides ton sachet dans ta paume, une dernière fois, et tu comptes. Trois cent soixante marches, cela mange. Tu fais deux parts, et tu donnes la plus grosse. {autre} veut protester. Tu lui fermes la main dessus. Toi, tu as le puits, qui sue. Là-haut, il n'y a que ce qu'on monte." },
      { first: true, text: "Il reste le mot. *La Douzième sonne dans l'heure de qui la nomme.* L'un de vous le tient d'un Grand Maître, l'autre d'une serrure ou de l'autre ; peu importe par où il est venu. Vous le savez tous les deux, à présent. Celui d'en haut le dit : midi sonne en 541. Celui d'en bas : en 601. Et ce qui arrive si les deux le disent, ou si personne, aucun Livre ne l'a écrit." },
      { first: true, text: "Dites-vous ici ce que vous avez à vous dire. Là-haut et en bas, chacun sera seul avec sa bouche." },
      { first: true, if: J, text: "{autre} te regarde. {autre:Il} a du charbon jusqu'aux coudes, et une figure que tu connaissais par cœur avant de l'avoir vue. « Quoi que tu dises là-haut, dit-{autre:il}, je t'en voudrai pas. » {autre:Il} réfléchit. « Si. Je t'en voudrai peut-être. Mais je serai là. »" },
      { first: true, if: R, text: "Tu regardes {autre}. Tu cherches quelque chose à dire qui soit à la hauteur, et tu ne trouves que ce qui est vrai. « Quoi que tu dises là-haut, je t'en voudrai pas. » Tu réfléchis. « Si. Je t'en voudrai peut-être. Mais je serai là. »" },
      { again: true, text: "Le pied de l'escalier. La salle, derrière, et le vieillard qui attend." },
    ],
    choices: [
      { label: "Vous deux : rendre le coup. Un en haut, un en bas.", hide: R, monde: "levier17", option: "rendre", fx: { stock: { sable: 3 } }, to: "K17j_vis", big: true },
      { label: "Vous deux : rendre le coup. Un en haut, un en bas.", hide: J, monde: "levier17", option: "rendre", fx: { stock: { sable: -3 } }, to: "K17r_seul", big: true },
      { label: "Vous deux : laisser cette cave, et marcher jusqu'où finit la note", monde: "levier17", option: "fuite", to: "F_fuite" },
      { label: "Vous deux : vous asseoir à la table du vieil homme, et lui laisser le levier", monde: "levier17", option: "couvert", to: "F_immobile" },
    ] },
});

Object.assign(P, {
  // ===== celui qui passe : trois cent soixante marches, seul
  K17j_vis: { act: "V", title: "La vis, sans personne devant", place: "tour", ambiance: "chateau",
    text: [
      "Les quatre-vingts marches. Le palier, sa lame de soleil, sa pendule sur midi. Puis la vis, dans l'épaisseur du mur : deux cent quatre-vingts degrés, qui tournent à gauche autour d'un puits vide.",
      "Tu l'as montée ce matin derrière neuf garçons sourds. Tu la montes seul{e}. Tes pas te reviennent de la voûte, en retard d'une marche, comme si quelqu'un te suivait pour te ressembler.",
      "Le fil monte avec toi, au milieu du vide, à portée de main : flou, épais d'un doigt, arrêté au plus large de son tremblement. Au bout de ce fil, en bas, quelqu'un range ses outils par terre.",
      "Ton mouchoir pèse dans ta poche, et chaque tour en ôte. Tu comptes par dizaines, à mi-voix, par habitude. À cent vingt, tu te trompes. Tout à l'heure, quelqu'un ralentissait devant toi pour que tu retrouves ton compte. Tu le retrouves seul{e}.",
      "Tous les vingt degrés, une meurtrière. Il y passe du jaune, du bleu, des fumées penchées.",
    ],
    choices: [
      { label: "T'arrêter à une meurtrière, et poser la main sur le fil", hide: { seen: "K17j_ecoute" }, to: "K17j_ecoute" },
      { label: "Monter", to: "K17j_baudouin", big: true },
    ] },

  K17j_ecoute: { act: "V", title: "Derrière la cloison", place: "tour", ambiance: "chateau",
    text: [
      "Tu allonges le bras par-dessus le vide. Le laiton est tiède. La note t'entre par la paume, ronde, dorée.",
      "Dessous, il y a autre chose. Il faut un moment pour le démêler : c'est comme une conversation derrière une cloison d'auberge, dont on ne saisit que la pente. Une voix sèche, égale, qui parle longtemps. Elle a pris ton fil pour un mur, et elle ne se gêne pas.",
      "Tu saisis des mots. *Couvert.* Puis : *le dimanche.* Puis une phrase entière, qui monte nette, parce qu'il l'a dite plus lentement que les autres : *cinq ans, et pour toujours, sans une ride.*",
      "Un silence. Tu attends l'autre voix, la rauque, celle qui tremble un peu au bout. Elle met du temps. Elle dit quelque chose de court. Trois mots, quatre. Le fil les mange.",
      "Tu ôtes ta main. Il y a cent marches sous toi, et deux cent soixante au-dessus. Tu pourrais redescendre : tu serais en bas avant qu'il ait fini son grain. Tu regardes ta main. Elle a dit quelque chose, au pied de l'escalier, en se refermant sur une part plus grosse que l'autre.",
      "Tu montes. C'est aussi une réponse, et il faut bien que quelqu'un la donne le premier.",
    ],
    choices: [{ label: "Monter", fx: { flag: "j:entendu_offre", ep: ["perso", 800] }, to: "K17j_baudouin", big: true }] },

  K17j_baudouin: { act: "V", title: "Le meilleur de sa volée", place: "tour", ambiance: "chateau",
    text: [
      "Au second palier, Baudouin. Il est sur sa marche, en tablier vert, son bandeau gris de travers, la tête dans les mains. La cire lui a épargné la cloche. Elle ne lui a pas épargné le reste : il a vu la ville s'arrêter par une meurtrière, et il s'est assis.",
      { if: COUPEE, text: "Son couteau de sellier est à côté de lui, sur la pierre, avec trois brins de chanvre blond sur la lame. Il a fait ce qu'on lui avait dit. On lui avait dit *une chambre*, et *coupe.* Il a dix-huit ans, il est le meilleur de sa volée, et c'est à ceux-là qu'on donne les couteaux." },
      { if: { has: "j:baudouin_cede" }, text: "Son couteau est au fourreau. Il a baissé le bras devant ta paume ouverte, ce matin, sous la cloche ; il a retiré une boulette de cire de son oreille, et il te l'a tendue. Tu avais refusé. Il n'avait pas compris pourquoi, et il t'avait laissé{e} dessous." },
      { if: { all: [{ not: COUPEE }, { not: { has: "j:baudouin_cede" } }] }, text: "Il a les mains vides. Il est monté faire une chose, et il redescendait sans l'avoir faite." },
      "Tu l'enjambes. Il sent la cire chaude et la peur refroidie.",
      "Quand la note finira, il se lèvera sur ses jambes. Il descendra, il sortira par la porte de fer avec les huit autres, dans une ruelle. Tu ignores encore de quelle année sera la ruelle. Lui aussi : c'est la seule chose que vous ayez en commun, et elle est de taille.",
    ],
    choices: [{ label: "Monter jusqu'au dernier palier", to: "K17j_palier", big: true }] },

  K17j_palier: { act: "V", title: "Deux portes", place: "tour", ambiance: "chateau", hub: true, backName: "le dernier palier",
    text: [
      { first: true, text: "Le dernier palier. Deux portes. Celle de chêne, à droite, haute, ferrée : la Chambre haute. Celle de gauche, basse, où l'on entre en courbant la tête : la galerie du cadran, et par elle l'échelle de la Cage." },
      { first: true, text: "Tu souffles. Tu as les jambes qui tremblent, et le mouchoir plus léger d'un bon tiers. Par la porte basse, entrebâillée, vient le jour laiteux du grand cadran." },
      { again: true, text: "Le palier, ses deux portes. La note est ici dans la pierre, à hauteur de tête." },
    ],
    choices: [
      { label: "La porte de chêne", to: "K17j_chambre" },
      { label: "La porte basse, et le grand cadran", to: "K17j_galerie" },
      { label: "L'échelle de la Cage", to: "K17j_cage", big: true },
    ] },

  K17j_chambre: { act: "V", title: "La main à plat sur le chêne", place: "tour", ambiance: "chateau",
    text: [
      { if: { has: "monde:reine_eveillee" }, text: "Elle est restée ouverte. La chambre ronde, ses huit baies, sa poussière qui pend dans le soleil. La Reine a fini son pas : elle est à la croisée, la main sur la crémone, la figure au jour, l'enfant sur la hanche." },
      { if: { has: "monde:reine_eveillee" }, text: "Elle vous a parlé, tout à l'heure, le temps de trois grains. Elle vous a dit de ne pas l'écouter si l'on vous faisait entendre sa voix en bas. Tu te demandes si elle savait de quelle bouche elle sortirait." },
      { if: { not: { has: "monde:reine_eveillee" } }, text: "Elle est fermée de deux tours. Vous êtes passés devant, tout à l'heure, sans frapper. Tu poses la main à plat sur le chêne, comme fait une comédienne derrière une douzième porte : on attend, et l'on sait que quelqu'un est de l'autre côté." },
      { if: { not: { has: "monde:reine_eveillee" } }, text: "Derrière, il y a une reine en blanc, le bras levé, et une enfant de huit ans qui montre une vitre. Tu les as vues. Tu sais ce qu'elles attendent, et que la mère ignore ce qu'elle a signé." },
      { if: { has: "monde:aelis_remede" }, text: "L'enfant a dans son poing fermé, contre le cou de sa mère, une fiole de grès. Dix-huit prises. Quoi qu'il sonne, et où que cela sonne, elle se réveillera la main pleine." },
      { if: { all: [{ has: "monde:aelis_ecorce" }, { not: { has: "monde:aelis_remede" } }] }, text: "L'enfant a les joues roses. Elle a bu trois prises d'une écorce venue par la mer, et il en faut dix-neuf. Le reste est à un an de navire d'ici, ou à dix lieues de chez {autre}." },
      { if: { not: { any: [{ has: "monde:aelis_remede" }, { has: "monde:aelis_ecorce" }] } }, text: "L'enfant a les lèvres grises. Il n'y a pas, dans tout 541, une prise de ce qui la guérirait. Il y en a un sac derrière la troisième maison d'une rue de Roquebise, dans soixante ans." },
      { if: { all: [{ has: "monde:reine_eveillee" }, COUPEE] }, text: "Autour de l'anneau de fer, la corde, en tas : douze pieds de chanvre, lovés comme un serpent qui dort." },
    ],
    choices: [
      { label: "Poser un grain sur la main de l'enfant", hide: { any: [{ not: { has: "monde:reine_eveillee" } }, { seen: "K17j_aelis" }] }, if: GRAIN, why: "Il te faudrait un grain.", fx: { stock: { sable: -1 }, flag: "j:aelis_adieu", ep: ["perso", 800] }, to: "K17j_aelis" },
      { label: "Charger les douze pieds de corde sur ton épaule", hide: { any: [{ not: { has: "monde:reine_eveillee" } }, { not: COUPEE }, { has: "j:corde_montee" }] }, fx: { flag: "j:corde_montee", ep: ["histoire", 500] }, to: "K17j_tas" },
      { back: "K17j_palier" },
    ] },

  K17j_aelis: { act: "V", title: "Sonne fort", place: "tour", ambiance: "chateau",
    text: [
      "« ...restes ? » Elle achève le mot qu'elle avait commencé. Elle te voit. Elle regarde ton index, qu'elle tenait, et qui n'est plus dans sa main.",
      "« Tu étais parti{e}. » Elle n'en fait pas un reproche. Elle constate. « Tu as dit oui, et après tu n'étais plus là. C'est toujours comme ça, les grands. »",
      "Tu lui dis que tu es revenu{e}. Que c'est maintenant. Que tu montes à la cloche, par l'échelle, et qu'en bas quelqu'un en sabots a la main sur le levier.",
      "« Le douze ? — Le douze. » Elle se redresse contre le cou de sa mère. Elle regarde la corde, ou sa place, puis le plafond. « Je peux pas tirer avec toi. Maman me tient. » Elle réfléchit, avec ce sérieux des enfants qui ont passé beaucoup de temps au lit. « Alors sonne fort. Je veux l'entendre en dormant. Les autres, je les ai sentis dans mon ventre. Celui-là, je veux l'entendre avec mes oreilles. »",
      "« Et après, je me réveille où ? »",
      "Tu n'en sais rien. Tu le lui dis. C'est la seule personne de cette ville à qui tu n'as jamais répondu à côté.",
      "« Ah. » Elle pèse cela. « Tu choisis, alors. Ou l'autre. » Elle te reprend l'index, à pleine main. « Choisis bien. Moi, quand je choisis, je prends toujours celui où il y a quelqu'un. »",
      "Sa main refroidit dans la tienne. Tu dégages ton doigt, doucement. Cette fois tu ne dis pas que tu restes.",
    ],
    choices: [{ back: "K17j_chambre" }] },

  K17j_tas: { act: "V", title: "Douze pieds de chanvre", place: "tour", ambiance: "chateau",
    text: [
      "Tu défais le nœud de l'anneau. C'est un nœud de marinier, serré ce matin par un homme qui savait ce qu'il nouait ; il te prend les ongles, et le temps de deux grains.",
      "Tu loves la corde sur ton épaule, en bandoulière, comme font les sonneurs qui montent regarnir. Elle pèse. Elle sent le suif et la main d'homme. Le bout coupé te bat la hanche : net, de biais, avec trois brins qui manquent.",
      "{autre} l'a tâtée, tout à l'heure, entre le pouce et l'index. *C'est du bon chanvre. Ça se reprend.* {autre:Il} n'est pas là pour la reprendre. Tu es horloger : tu sais deux nœuds, celui des poids et celui des cordes à boyau. Il faudra que l'un des deux fasse.",
    ],
    choices: [{ back: "K17j_chambre" }] },

  K17j_galerie: { act: "V", title: "Derrière le grand cadran, une dernière fois", place: "tour", ambiance: "chateau",
    text: [
      "La galerie. Le verre laiteux, tiède, haut comme une maison ; les deux aiguilles jointes, en ombre, sur le douze. C'est ici que tu tournais gris, assis{e}, les yeux sur la porte, quand quelqu'un est entré en sabots.",
      "Il y a un carreau clair, au bas du cadran, grand comme la main, par où les horlogers regardent la place. Tu y mets l'œil.",
      "Cinq mille figures levées. Tu les as vues d'ici ce matin : une poussière de têtes. Tu ne peux plus. Tu as marché dedans. Elles ont des nez, des dettes, des enfants sur les épaules.",
      { if: { has: "monde:mot_josse" }, text: "Au débouché de la rue aux Oies, sur sa borne, un homme en blouse neuve, la main en visière. Tu lui as parlé. Tu sais ce qu'il regarde, et qu'il le regardera jusqu'à ce que tu aies fini." },
      { if: { has: "j:douzieme_jouee" }, text: "Sur les tréteaux, la douzième porte est entrouverte d'un doigt. Derrière, une fille en drap sans couleur a la main à plat sur le bois. Elle attend sa réplique. C'est toi qui la lui donnes." },
      { if: { has: "j:balle_rendue" }, text: "Près de la fontaine, une balle rouge, dans deux mains d'enfant. Elle n'est plus en l'air. C'est peu de chose, dans une ville arrêtée, qu'une balle qu'on a rendue." },
      { if: { has: "monde:perrine_debout" }, text: "Tout en bas, au bord de l'eau, contre un pignon jaune, il y a quelqu'un de debout, les bras croisés, un drap rouge sur les oreilles. D'ici, c'est un point. Tu le reconnaîtrais entre quarante mille : c'est le seul qui regarde vers toi en sachant ce qu'il regarde." },
      { if: { all: [{ not: { has: "monde:perrine_debout" } }, { not: { has: "monde:perrine_sortie" } }] }, text: "Au bord de la place, du côté des rues qui descendent, une hotte, et deux doigts en l'air. Elle disait un prix." },
      { if: { has: "monde:girard_sorti" }, text: "Très loin, passé le bassin, entre deux rangs de peupliers, le septième arbre. Au-delà, sur le chemin, quelque chose de bleu ou de clair, arrêté en pleine course. Tu sais qu'il court." },
      { if: { has: "monde:cadran_poussiere" }, text: "Tu as tracé un cadran dans la poussière, au pied de cet arbre, avec les deux aiguilles sur midi. Tu regardes celles-ci, au-dessus de ta tête, hautes de trois toises. C'est le même dessin. Il te reste à le rendre vrai." },
      "Tu ôtes ton œil du carreau. Ils attendent tous le même mot, la bouche déjà ronde. Ils le diront, eux, sans conséquence. Toi, tu en as un autre, qui est le même, et qu'on a défendu de dire depuis quatre cents ans.",
    ],
    choices: [{ label: "Laisser le carreau", fx: { flag: "j:vu_ville", ep: ["perso", 600] }, back: "K17j_palier" }] },

  K17j_cage: { act: "V", title: "Sous la Patiente", place: "tour", ambiance: "chateau", hub: true, backName: "la Cage",
    text: [
      { first: true, text: "Vingt échelons de frêne. La trappe. Tu te redresses sous douze pieds de bronze." },
      { first: true, text: "Elle emplit tout. Elle a sur la lèvre sa place claire, large comme une assiette, et contre cette place le marteau, appuyé, entré d'une ligne. La note sort de là. Ici, elle ne chante pas : elle pèse. On la porte sur les épaules." },
      { first: true, text: "Tu étais dessous, ce matin, les oreilles nues, quand il a frappé onze fois. Tu as crié sans t'entendre. La marque est encore dans la poussière du plancher, au milieu : quelqu'un s'est assis là, puis s'est levé." },
      { first: true, text: "Le fil arrive par le trou du plancher et finit au déclic, gros comme le poing, sur le bras de chêne. Par le même trou passe la corde." },
      { if: { all: [{ not: COUPEE }] }, text: "Elle pend du joug, lustrée, grosse comme le poignet, et s'en va vers le bas, tendue, jusqu'à un anneau qu'on ne voit pas d'ici." },
      { if: { all: [COUPEE, { not: { has: "monde:corde_nouee" } }] }, text: "Il en reste trois coudées, qui pendent du joug et finissent net, de biais, au-dessus de ta tête. Le bras levé, il te manque deux coudées. Avec le banc dessous, une." },
      { if: { has: "monde:corde_nouee" }, text: "Elle pend du joug jusqu'au plancher, avec au milieu un nœud gros comme deux poings, laid, serré, qui ne fera honte qu'à un marin." },
      { again: true, text: "La Cage, le bronze, le marteau contre la lèvre." },
    ],
    choices: [
      { label: "Le banc des sonneurs", to: "K17j_banc" },
      { label: "Rabouter la corde au moignon, debout sur le banc", hide: { any: [{ not: COUPEE }, { not: { has: "j:corde_montee" } }, { has: "monde:corde_nouee" }] }, fx: { flag: "monde:corde_nouee", ep: ["histoire", 800] }, to: "K17j_noeud" },
      { label: "Poser la main sur le fil, au-dessus du déclic", to: "M17b", big: true },
    ] },

  K17j_banc: { act: "V", title: "Quarante noms, et un", place: "tour", ambiance: "chateau",
    text: [
      "Le banc de chêne, noir d'usage. Quarante noms sur le dossier, l'un sous l'autre, avec des dates. Ce sont des hommes qui se sont assis ici pour attendre l'heure de faire du bruit. Aucun n'a eu à décider laquelle.",
      "Le dernier des anciens : *Thibaut, 481.* Deux oreilles barrées. Il avait de la cire. Il est resté debout pendant que la ville s'arrêtait trois psaumes, et il est remonté rendre le coup. On lui doit qu'il y ait eu un an 482.",
      { if: { has: "monde:nom_cage" }, text: "Dessous, ton nom, en lettres droites, sans date. Tu l'as taillé ce matin, avec une oreille ouverte. Tu regardes la place de la date. Elle est restée blanche : tu ne savais pas laquelle mettre. Tu ne le sais toujours pas, et c'est précisément ce que tu es monté{e} décider." },
      { if: { not: { has: "monde:nom_cage" } }, text: "Dessous, le bois est nu. Tu avais un couteau, ce matin, et le temps ; tu as laissé la place. Tu la regardes. On signe quand on a fini." },
      "Tu t'assois. Le banc est à la hauteur qu'il faut pour voir, entre deux abat-sons, la ville, le pré, le canal, les peupliers. Ils se sont tous assis là, les quarante, à regarder ce pays en attendant midi.",
      "Thibaut a rendu le coup dans l'heure où il l'avait pris, à trois psaumes près. Il n'a rien eu à nommer. Tu es le premier sonneur de cette cloche à qui l'on demande de quelle année sera midi.",
    ],
    choices: [{ back: "K17j_cage" }] },

  K17j_noeud: { act: "V", title: "Le nœud des poids", place: "tour", ambiance: "chateau",
    text: [
      "Tu tires le banc sous le joug. Tu montes dessus, la corde à l'épaule. Le moignon pend à hauteur de ta figure.",
      "Tu décommets les trois torons du bout coupé, sur un empan, puis ceux du moignon. Cela fait six mèches blondes, raides, qui te piquent les doigts. {autre} les aurait mariées, repassées deux fois l'une dans l'autre, et l'on aurait cherché l'endroit. Tu n'as jamais fait d'épissure. Tu as fait cent fois, sous l'œil d'une vieille, le nœud dont on pend les poids aux horloges de clocher : deux boucles croisées, trois tours morts, et la queue reprise dessous.",
      "*Un poids qui tombe tue le sonneur, et c'est la faute du nœud.* Elle te le disait en te tapant sur les doigts. Tu serres. Tu mouilles le chanvre de salive, tu serres encore, tu te pends dessus de tout ton corps, les pieds décollés du banc. Il tient. Il crie un peu, et il tient.",
      "Tu descends. Tu regardes ton ouvrage : un nœud gros comme deux poings, au milieu d'une belle corde. Il est laid. Il porterait une enclume.",
      "Tu penses que là-bas, sur sa chaise, elle voudrait le voir, pour le plaisir de le trouver mal fait.",
    ],
    choices: [{ back: "K17j_cage" }] },

  // ===== celui qui reste : la cave, seul avec deux hommes qui sont le même
  K17r_seul: { act: "V", title: "Les pas qui montent", place: "tour", ambiance: "chateau", hub: true, backName: "le levier",
    text: [
      { first: true, text: "Tu écoutes ses pas. Quatre-vingts marches, que tu comptes. Puis la porte du palier. Puis la vis les mange, et il ne reste que la note." },
      { first: true, text: "Tu es seul{e} dans une cave avec cinq personnes debout, neuf sourds, et un vieillard qui a tourné la tête vers l'escalier en même temps que toi." },
      { first: true, text: "« Il monte bien. » La voix est sans ironie. « J'ai mis soixante Pater, tout à l'heure, pour la moitié du chemin. Il lui en faudra quarante pour le tout. Nous avons donc le temps de quarante Pater, vous et moi. J'ai connu des tête-à-tête plus courts avec des gens plus ennuyeux. »" },
      { again: true, text: "La cave. Le vieillard sur son berceau. Quelque part dans la pierre, très haut, quelqu'un monte." },
    ],
    choices: [
      { label: "Le bord du puits : il a encore sué", hide: { has: "r:rosee17" }, fx: { flag: "r:rosee17", stock: { sable: 3 } }, to: "K17r_rosee" },
      { label: "Les neuf, sur leurs traits de craie", hide: { seen: "K17r_neuf" }, to: "K17r_neuf" },
      { label: "Te mettre au levier, et attendre", to: "K17r_vieux", big: true },
    ] },

  K17r_rosee: { act: "V", title: "La sueur d'une chose qu'on empêche de respirer", place: "tour", ambiance: "chateau",
    text: [
      "Sur le biseau du bord, il a perlé de nouveau. Des grains fins, d'un gris clair, tièdes, qui sortent de la pierre comme la sueur d'un front.",
      "Tu passes le pouce. Tu fais tomber la récolte dans ton sachet. Tu as fait ce geste toute ta vie dans des fossés, la nuit, l'oreille aux bottes de la Garde. Tu le fais ici en plein jour, à la source, devant celui qui en a tiré une Maîtrise.",
      "« Servez-vous. » Il a suivi ta main. « C'est la première récolte. Je l'ai manquée, il y a soixante ans : j'avais autre chose en tête, je courais vers une porte. Elle vous revient. Vous êtes le seul client que j'aurai servi pour rien. »",
      "Tu serres le lacet. Tu remarques qu'il a dit *le seul*, et qu'il n'a pas offert un grain à ses neuf apprentis.",
    ],
    choices: [{ back: "K17r_seul" }] },

  K17r_neuf: { act: "V", title: "Ceux à qui l'on n'a pas tout dit", place: "tour", ambiance: "chateau",
    text: [
      "Ils sont neuf, de dix-sept à vingt-cinq ans, en tablier vert. Chacun sur son trait. Ils ont la figure vers la barre, et sous les bandeaux gris un peu de cire jaune, pétrie au pouce.",
      "Le grand roux a le bras à demi tendu vers le levier. Il a vu deux maîtres se battre, et il n'avait d'ordres que pour le reste. Il lui est venu un geste, tout seul, sans consigne. Tu regardes ce bras. C'est peut-être le premier geste à lui qu'il ait fait dans cette cave.",
      "Chez toi, tu en as vu de pareils, en noir, sur les marches de cet escalier, la paume ouverte, qui pesaient ce qu'on leur donnait. Ceux-là avaient soixante ans de moins que ceux-ci n'en auront. C'étaient d'autres garçons, et c'était la même consigne : on vous bouche les oreilles, et l'on vous dit que c'est pour une chambre.",
      "Quand la note finira, ils s'ébroueront. Ils sortiront par la porte de fer, sur leurs jambes. Ils demanderont ce qui s'est passé à la première personne qui parlera ; et selon ce que deux bouches auront dit ou tu, cette personne aura soixante ans de plus qu'eux, ou leur âge.",
    ],
    choices: [{ back: "K17r_seul" }] },

  K17r_vieux: { act: "V", title: "Il se lève", place: "tour", ambiance: "chateau",
    text: [
      "Tu te mets à gauche du levier, tes outils à tes pieds. Tu ne touches pas le cuir. Tu attends que le fil te dise quelque chose.",
      "Derrière toi, un bruit de bois sur de la pierre. Il se lève. Il lui faut ses deux mains sur la canne, et un temps entre le premier genou et le second. Il vient, par le bord du puits, à petits pas exacts.",
      "« Je vous avais prévenu{e}. Je tiens mes préavis comme mes marchés. » Il s'arrête devant l'homme de trente ans. Il le regarde, de près, comme on regarde son portrait de jeunesse dans une maison qu'on va vendre.",
      "Il dévisse le bouchon de son sablier d'or. Il verse un grain dans le creux de sa paume. Il le pose sur l'épaule grise, avec deux doigts.",
      "« Melchior. Réveille-toi. On veut nous reprendre notre ouvrage. »",
      "Le jeune respire. Sa tête achève de tourner. Il voit le vieux. Il te voit, toi, à gauche du levier, une main charbonneuse à un pouce du cuir.",
    ],
    choices: [
      { label: "Regarder ses mains", hide: { not: JEUNE_SAIT }, fx: { flag: "monde:jeune_refuse", ep: ["histoire", 1200] }, to: "K17r_refus", big: true },
      { label: "Regarder ses mains", hide: JEUNE_SAIT, to: "K17r_tient", big: true },
    ] },

  K17r_refus: { act: "V", title: "Ce qui m'arrive si je tiens", place: "tour", ambiance: "chateau",
    text: [
      "Il a les deux mains au cuir. Il les regarde. Il regarde le puits, la barre au fond, et ses lèvres font le même chiffre que tout à l'heure.",
      "« Tiens, dit le vieux. Tiens seulement. Je te donnerai un grain chaque fois que tu faibliras. J'en ai huit. Cela suffit : là-haut, ils n'ont qu'un mouchoir. »",
      "Le jeune tourne la tête vers lui. Lentement. Il le regarde comme tu ne l'as vu regarder personne : avec dégoût, et avec une espèce de pitié, qui est pire.",
      "« On m'a dit ce qu'il y a dans la marge. » Sa voix est plus haute que celle de l'autre, et moins sûre. Elle tient pourtant. « On m'a dit une lieue, et quarante mille, et soixante ans. On m'a dit que vous vendiez ce qui en sue. » Il avale. « Vous m'avez dit que nous avions gagné. J'ai souri. Je me suis vu sourire, dans votre figure. »",
      "« Tu es moi. — Non. » Il ouvre la main gauche. Puis la droite. Le cuir reste seul, avec la marque de dix doigts. « Je voulais une chambre. J'ai eu tort, et c'était un tort de la taille d'une chambre. Vous, vous êtes ce qui m'arrive si je tiens. »",
      "Il recule de deux pas. Il s'assoit par terre, contre un berceau, les mains ouvertes sur les genoux, comme quelqu'un qui montre qu'il n'a rien pris.",
      "Le vieux n'a pas bougé. C'est la première fois que tu le vois sans réponse. Il a le sablier d'or ouvert dans une main, le bouchon dans l'autre, et il regarde un homme de trente ans assis par terre, qui a ses yeux, et qui ne veut pas de lui.",
      "Le grain finit. Le gris reprend le jeune où il s'est mis : assis, les mains ouvertes.",
    ],
    choices: [{ label: "Regarder le vieux", to: "K17r_main", big: true }] },

  K17r_tient: { act: "V", title: "Deux contre un", place: "tour", ambiance: "chateau",
    text: [
      "Il a les deux mains au cuir. Il les resserre. On voit les jointures blanchir.",
      "« Tiens, dit le vieux. Tiens seulement. Je te donnerai un grain chaque fois que tu faibliras. J'en ai huit. Cela suffit : là-haut, ils n'ont qu'un mouchoir. »",
      "« Nous avons gagné ? demande le jeune. — Nous gagnons. Il reste ceci. » La canne te désigne. « Des sabots, du charbon, et une bonne volonté. Ne lâche pas. »",
      "Le jeune te regarde. Il a peur, et la peur lui tient lieu de raison : on lui a dit *tiens*, d'une voix qu'il connaît mieux qu'aucune, la sienne. Il tient.",
      "Tu mesures. Le coin, tu peux le chasser quand tu voudras. Mais tant que ces dix doigts sont sur le cuir, de tout leur poids de trente ans, la barre ne montera pas : il pèse dessus comme le vieillard a pesé, et tu sais où cela mène.",
    ],
    choices: [
      { label: "Poser un de tes grains sur sa main, par-dessus celui du vieux, et lui dire la marge", if: GRAIN, why: "Il te faudrait un grain.", fx: { stock: { sable: -1 }, flag: ["monde:jeune_sait", "monde:jeune_refuse", "r:refus_tard"], ep: ["histoire", 1000] }, to: "K17r_tard", big: true },
      { label: "Attendre : huit grains, cela se compte", fx: { flag: ["monde:jeune_obeit", "r:attendu"], stock: { sable: -2 }, ep: ["histoire", 600] }, to: "K17r_attente", big: true },
      { label: "Lui frapper les poignets, du plat de ce que tu as", fx: { flag: ["monde:jeune_obeit", "r:jeune_frappe"], ep: ["histoire", 600] }, to: "K17r_poignets", big: true },
    ] },

  K17r_tard: { act: "V", title: "Le dernier qui a dit la vérité", place: "tour", ambiance: "chateau",
    text: [
      "Tu poses ton grain sur sa main, à côté du cuir. Un grain de chez toi, gris foncé, de ceux qu'on glane.",
      "« Écoutez-moi, pendant que le sien coule et le mien avec. Je viens de sa marge. » Tu parles vite, en comptant sur tes doigts. Une lieue. Une abbaye. Une ville. Roquebise, en une nuit, où l'on vous soufflait vos cuves. Une petite de cinq ans, prise au milieu d'un souffle, la joue sur l'oreiller.",
      "« Elle ment, dit le vieux. Ou plutôt : elle dit vrai, et cela ne change rien. Tiens. »",
      "Le jeune vous regarde l'un après l'autre. Il a deux grains sur lui, un de chaque monde, et deux voix dans les oreilles. « Vous m'avez dit que nous avions gagné. — Nous avons gagné. — Vous ne m'avez pas dit ce que nous avions gagné. »",
      "Il n'y a pas de réponse. Il y a un vieillard qui cherche, pour la première fois depuis soixante ans, un chiffre à mettre en face d'une enfant de cinq ans, et qui ne le trouve pas assez vite.",
      "Les mains s'ouvrent. La gauche, puis la droite. « J'écoute le dernier qui m'a dit la vérité, dit le jeune. C'est vous qui me l'avez appris, tout à l'heure. Vous aviez l'air d'en être fier. »",
      "Il recule. Il s'assoit par terre, contre un berceau. Les deux grains finissent ensemble.",
    ],
    choices: [{ label: "Regarder le vieux", to: "K17r_main", big: true }] },

  K17r_attente: { act: "V", title: "Huit grains", place: "tour", ambiance: "chateau",
    text: [
      "Tu t'assois sur tes talons, à gauche du levier. Tu ne dis rien. Tu sais attendre : on apprend cela dans les fossés, à plat ventre, pendant que la Garde fume sa pipe à dix pas.",
      "Le premier grain finit. Les doigts du jeune se desserrent. Le vieux en pose un autre. « Tiens. » Ils se resserrent.",
      "Tu comptes. Sept. Le vieux aussi compte : tu vois ses lèvres. Vous êtes deux à compter la même chose, de part et d'autre d'un homme qui ne sait pas qu'on le dépense.",
      "Six. Cinq. Entre deux grains, le jeune a un moment où il est gris, et où il lâche à demi ; puis la couleur lui revient, et la peur avec. Le vieux a la main qui tremble, en versant. Il en fait tomber un par terre. Il le regarde rouler vers le puits.",
      "Quatre. Trois. « Vous êtes patient{e}, dit-il sans te regarder. C'est une qualité de pauvre. Je l'avais. » Deux.",
      "Au dernier, il s'arrête. Il le garde dans le creux de sa paume. Il le regarde longtemps. Puis il referme la main dessus, et il ne le pose pas.",
      "Le jeune redevient gris, les dix doigts sur le cuir, desserrés, comme une main qu'on a oubliée sur une rampe. Toi, tu as brûlé deux grains à rester éveillé{e} devant eux. Tu en as d'autres. Lui, non.",
    ],
    choices: [{ label: "Te relever", to: "K17r_main", big: true }] },

  K17r_poignets: { act: "V", title: "Du plat", place: "tour", ambiance: "chateau",
    text: [
      { if: { item: "maillet_ansel" }, text: "Tu lèves le maillet. Tu ne vises pas la tête : tu n'as jamais visé une tête. Tu frappes du plat, sur les poignets, deux fois, sec, comme on fait lâcher une branche à un chien." },
      { if: { not: { item: "maillet_ansel" } }, text: "Tu ôtes un sabot. Tu ne vises pas la tête : tu n'as jamais visé une tête. Tu frappes de la semelle, sur les poignets, deux fois, sec, comme on fait lâcher une branche à un chien." },
      "Il crie. Il lâche. Il se tient les poignets contre la poitrine, plié en deux, avec dans les yeux la stupeur d'un homme qui n'a jamais été battu que par des idées.",
      "« Voilà, dit le vieux, très calme. Voilà ce qu'ils savent faire. Souviens-t'en. » Il lui pose un second grain sur l'épaule. « Reprends. »",
      "Le jeune regarde le cuir. Il regarde ses poignets, où il vient deux marques rouges. Il ne reprend pas. Ce n'est pas qu'il ait compris : il a mal, il a trente ans, et personne ne lui avait dit que cela coûterait quelque chose de ce côté-là.",
      "« Reprends ! » Le vieux a élevé la voix. C'est la première fois. Elle se casse, et l'on entend dedans les quatre-vingt-dix ans.",
      "Le grain finit. Le gris reprend le jeune debout, les mains contre lui. Tu remets ton sabot, ou tu rengaines ton maillet. Tu n'es pas fier{e}. Tu as fait ce qui allait vite, et tu sais ce que valent, d'ordinaire, les choses qui vont vite.",
    ],
    choices: [{ label: "Regarder le vieux", to: "K17r_main", big: true }] },

  K17r_main: { act: "V", title: "Une vieille main, sur une chose froide", place: "tour", ambiance: "chateau",
    text: [
      "Il est debout devant le levier. Il a remis le bouchon à son sablier, par habitude de ranger. Il vous regarde, le cuir et toi.",
      "« Il me reste un grain. » Il le dit comme on annonce l'heure. « Je le garde pour entendre. »",
      "Puis il fait une chose que tu n'attendais pas. Il lâche sa canne. Elle tombe sur le pavé avec un bruit de bois. Et il pose sa main sur la poignée de cuir.",
      "Elle ne pèse rien. Une main de quatre-vingt-dix ans, c'est du papier sur un os ; tu la soulèverais d'un doigt. Mais elle est fermée. Elle s'est fermée là-dessus il y a soixante ans, le temps d'une lutte ; elle a tenu ensuite des plumes, des sceaux, des balances ; et elle revient à sa place comme une clef à sa serrure.",
      "« Je ne peux pas vous empêcher. Je le sais. Je veux seulement que vous me l'ôtiez vous-même. Qu'on ne dise pas que je l'ai rendue. »",
      "Il a les yeux secs, l'un gris, l'autre brun. Il a l'air de ce qu'il est : un très vieil homme qui s'est trompé à trente ans, d'une marge, et qui a mis soixante ans à faire de son erreur une maison.",
      { if: { has: "r:offre_pesee" }, text: "Il t'a offert un couvert, et tu as demandé combien de pincées. Il le sait. Il n'en dit rien. C'est peut-être la seule délicatesse qu'il ait eue de sa vie, et elle tombe sur toi." },
    ],
    choices: [
      { label: "Lui ouvrir les doigts, un par un, sans forcer", fx: { flag: "monde:aubespin_ouvert", ep: ["perso", 1200] }, to: "K17r_main_fin", big: true },
      { label: "Lui ôter la main du cuir, d'un revers", fx: { flag: "monde:aubespin_frappe", ep: ["perso", 400] }, to: "K17r_main_fin", big: true },
    ] },

  K17r_main_fin: { act: "V", title: "Qu'on ne dise pas qu'il l'a rendue", place: "tour", ambiance: "chateau",
    text: [
      { after: "monde:aubespin_ouvert", text: "Tu prends le petit doigt. Tu le déplies. Il résiste, comme résiste un ressort fatigué : par mémoire plus que par force. Tu le poses à plat. Puis l'annulaire, qui porte une bague à cachet, le cachet de la Maîtrise." },
      { after: "monde:aubespin_ouvert", text: "Il te regarde faire. Il ne t'aide pas, et il ne te gêne pas. « Vous avez l'habitude. — J'ai ouvert des mains toute ma vie. Pour prendre ce qu'il y avait dedans. — Et cette fois ? — Cette fois, il y a rien dedans. » Il a un souffle, par le nez, qui a failli être un rire." },
      { after: "monde:aubespin_ouvert", text: "Le majeur. L'index. Le pouce vient seul. Sa main est ouverte, sur le cuir, à plat, comme une feuille. Tu la soulèves, et tu la lui rends : tu la poses contre sa poitrine, où il la laisse." },
      { after: "monde:aubespin_ouvert", text: "« On ne casse pas les doigts des gens qui se sont trompés », dis-tu. Ce n'est pas de toi. C'est d'une vieille qui tricote dans une baraque, et que {autre} t'a rapportée. Il incline la tête, de son inclinaison exacte. « C'est une politique. Je ne l'ai pas eue. »" },
      { after: "monde:aubespin_frappe", text: "Tu la balaies du revers de la tienne, comme on chasse une guêpe d'un fruit. Elle part. Elle retombe le long de son corps, et il vacille : il n'avait plus sa canne." },
      { after: "monde:aubespin_frappe", text: "Il se rattrape au berceau. Il regarde sa main, qui pend. « Bien. C'est ainsi que je l'aurais fait. » Il n'y a pas de reproche dans sa voix, et c'est ce qui te reste en travers : il te reconnaît." },
      "Il se baisse pour sa canne. Cela lui prend le temps que tu sais. Tu la ramasses, et tu la lui tends par le pommeau.",
      "Il retourne à son berceau. Il s'y assoit, le dos droit, les deux mains sur la canne, la figure vers l'œil de la voûte, où monte le fil. Il a mis son dernier grain sur sa propre main. Il attend d'entendre.",
      "Le cuir est libre. Tu poses tes doigts dessus. Il est tiède de plusieurs mains.",
    ],
    choices: [{ label: "Le chevalet : poser la main sur le fil", to: "M17b", big: true }] },

  // ----- the wire
  M17b: { act: "V", title: "Qu'ils s'entendent sans se voir", backName: "le fil", charniere: true, aparte: true,
    text: [
      { first: true, if: J, text: "Tu poses la main sur le fil, au-dessus du déclic. La note t'entre dans le bras. Puis, dans la note, quelque chose de petit, de rauque, qui arrive de très loin, comme du fond d'un puits : « T'es en haut ? »" },
      { first: true, if: J, text: "Tu dis : « J'y suis. » Tu le dis contre le laiton, à mi-voix. Tu sens le mot partir." },
      { first: true, if: R, text: "Tu poses la main sur le fil, au chevalet. La note t'entre dans le bras. Tu approches la bouche du laiton. « T'es en haut ? »" },
      { first: true, if: R, text: "Il faut le temps que trois cent soixante marches de métal portent quatre syllabes, et qu'elles en rapportent trois. Puis cela vient, par la paume plus que par l'oreille, d'une voix enrouée, avec l'accent des Trois-Noyers : « J'y suis. »" },
      { first: true, text: "On s'entend. Mal, de loin, par la main ; mais on s'entend. Les Fondateurs l'avaient écrit à la dernière ligne, et l'on avait pris cela pour de la piété. C'était une notice." },
      { first: true, if: J, text: "{autre} te dit la cave, par morceaux, en commençant par la fin. Tu comprends que le cuir est libre, et qu'il a fallu pour cela ouvrir des mains. {autre:Il} ne dit pas lesquelles. Tu dis la corde, la cloche, le marteau entré d'une ligne. Tu dis que tu es prêt{e}." },
      { first: true, if: R, text: "Tu dis la cave, par morceaux, en commençant par la fin. Que le cuir est libre. {autre} te dit la corde, la cloche, le marteau entré d'une ligne. Sa voix est petite, dans le fil, et tu la reconnaîtrais entre toutes : c'est la seule qu'on t'ait jamais adressée par écrit." },
      { first: true, text: "« Je compte trois, dit la voix d'en bas. Au troisième, le coin saute. Quand tu sens le fil qui tire, tu tires. — Et le mot ? »" },
      { first: true, text: "Le fil ne porte rien pendant un moment. Rien que la note." },
      { first: true, text: "« Le mot, dit enfin l'une des deux voix, on se l'est dit en bas. » Et l'autre : « Oui. »" },
      { first: true, text: "Vous ôtez vos mains. Ce que chacun fera de sa bouche, à présent, l'autre ne le saura qu'en entendant où tombe le coup." },
      { again: true, text: "Le fil, tendu de la barre au marteau. Il porte la note, et plus rien d'autre." },
    ],
    choices: [
      { label: "Prendre la corde", hide: R, to: "K17j_corde", big: true },
      { label: "Te coucher sous le coin", hide: J, to: "K17r_frappe", big: true },
    ] },

  // ----- the word : each alone
  K17j_corde: { act: "V", title: "La corde", place: "tour", ambiance: "chateau",
    text: [
      { if: { not: COUPEE }, text: "Tu prends la corde à deux mains, au-dessus du trou, aussi haut que tu peux. Elle est lustrée par quatre siècles de paumes. Tu plies les genoux." },
      { if: { has: "monde:corde_nouee" }, text: "Tu prends la corde à deux mains, sous ton nœud. Il crie un peu. Tu plies les genoux." },
      { if: { all: [COUPEE, { not: { has: "monde:corde_nouee" } }] }, text: "Tu montes sur le banc. Le moignon pend à une coudée au-dessus de tes mains levées. Tu respires. Tu sautes. Tes doigts le trouvent, glissent, mordent dans le chanvre ; et tu restes pendu{e} sous douze pieds de bronze, les pieds dans le vide, à attendre qu'un fil se tende." },
      "En bas, quelqu'un compte. Tu ne l'entends pas. Tu le sais.",
      "Le fil cesse d'être flou. D'un coup, il est net, mince, raide comme une tringle. Le déclic tourne d'un cran, avec un bruit de noix qu'on casse. Sous tes pieds, à trois cent soixante marches, une chose énorme vient de se remettre à respirer.",
      "Tu tires. De tout ton poids, de tout ton dos. La cloche vient. Elle se met en route comme un navire qu'on démarre : d'abord rien, puis tout. Le marteau quitte la lèvre. Il recule, de deux pieds, lentement, comme une tête qui prend son élan.",
      "Il va revenir. Tu as le temps d'un mot.",
      "Il est dans ta bouche depuis un soir, dans un cabinet, où un vieil homme te l'a dit la porte fermée. Si tu le dis, midi sonne ici : le vingt et un juin 541. La ville dîne. Si tu serres les dents, c'est une autre bouche qui décide, en bas, ou aucune.",
      { if: { secret: "j_rester" }, text: "Tu as voulu rester. Tu l'as caché neuf jours, jusque dans le Cahier. Il suffit d'un mot pour que rester soit la seule chose possible, et que personne ne puisse te le reprocher." },
      { if: { all: [{ secret: "j_efface" }, { not: { has: "j:efface_leve" } }] }, text: "Un vieil homme t'a dit que si tu le prononçais, la personne qui a la main au levier n'aurait jamais été. Tu ne sais pas s'il avait raison. Tu sais que tu n'as pas osé le demander deux fois." },
      { if: { has: "j:efface_leve" }, text: "{autre} sortira avec toi, par où vous sortirez. Le Livre le dit, une ligne plus bas que la copie. Mais son pays, sa rue, sa sœur de cinq ans : cela, le mot l'emporte." },
      { if: { has: "j:entendu_offre" }, text: "Tu as entendu, dans le fil, une voix sèche parler de dimanches. Tu n'as pas entendu la réponse. Tu as monté deux cent soixante marches sur ce que tu ne savais pas." },
      "Le marteau arrive.",
    ],
    choices: [
      { label: "« Douze. »", fx: { flag: "monde:j_douze", ep: ["histoire", 2000] }, to: "B17", big: true },
      { label: "Serrer les dents, et laisser parler la cloche", fx: { flag: "monde:j_silence", ep: ["histoire", 2000] }, to: "B17", big: true },
    ] },

  K17r_frappe: { act: "V", title: "Le petit bout", place: "tour", ambiance: "chateau",
    text: [
      "Tu te couches sur le pavé, la joue contre le bronze. Tu présentes ton chasse au petit bout du coin, par-dessous. Ta main gauche est en l'air, à un pouce du cuir.",
      { if: { item: "chasse_bronze" }, text: "La tige de bronze est entrée comme une clef. Elle porte, bien à plat." },
      { if: { all: [{ not: { item: "chasse_bronze" } }, { item: "baguette_bronze" }] }, text: "Le bout ferré de la baguette porte. Le buis plie d'un rien sous ta paume : il faudra frapper sec." },
      { if: { not: { any: [{ item: "chasse_bronze" }, { item: "baguette_bronze" }] } }, text: "La virole du vieux, emmanchée sur son bout de buis cassé, porte de travers. Tu la redresses du pouce. Elle fera." },
      "« Un », dis-tu. Tu frappes. Le coup te remonte dans le coude. Là-haut, sur le pavé, tu entends le bronze dire quelque chose.",
      { if: TRAVERS, text: "Il n'y aura pas de deux. Le coin bâillait à droite, d'un quart, par la faute d'un enfant de treize ans qui a eu peur et qui l'a manqué quand même. Il saute. Il saute de sa rainure comme un noyau d'entre deux doigts, tinte sur le pavé, roule, et s'arrête contre le sabot de l'enfant." },
      { if: { not: TRAVERS }, text: "« Deux. » Il a bougé. Tu le sens à l'outil, qui s'enfonce d'une ligne. Tu te relèves sur un genou, la main gauche fermée sur le cuir : tenir, avant le dernier. « Trois. » Il saute. Il tinte sur le pavé, roule, et s'arrête contre le sabot de l'enfant." },
      "La barre frissonne. Tu vois le frisson courir sur le bronze, d'un bout à l'autre. Elle était au fond, prise ; elle remonte d'un doigt, d'une main. Le gris se soulève avec elle, comme une poitrine qu'on cesse d'écraser.",
      "Tu es debout. Tu as le cuir dans la main. Le levier monte, cran après cran, et il ne pèse rien : tu ne le tires pas, tu l'accompagnes, comme on tient le bras de quelqu'un qui se lève. Le fil se tend. Il cesse d'être flou. Il est net, mince, et il part vers la voûte comme un trait.",
      "Là-haut, quelqu'un tire.",
      "Tu as le temps d'un mot. Si tu le dis, midi sonne chez toi : le vingt et un juin 601. Quarante mille personnes finissent leur cri. Si tu te tais, c'est une autre bouche qui décide, là-haut, ou aucune.",
      { if: { secret: "r_soeur" }, text: "Tu es venu{e} pour une petite de cinq ans, qui dort depuis six ans au milieu d'un souffle. Tu ne l'as dit à personne pendant neuf jours. Elle est dans un seul des deux mots." },
      { if: { has: "r:vu_devant" }, text: "Tu as vu, dans le puits, une rue de Roquebise en plein jour, où l'on souffle le verre, et où tu n'as pas trouvé ta porte." },
      { if: { has: "r:compte_tannerie" }, text: "Tu as fait un compte, devant quatre seuils. Quatre fois dix-neuf. Il sort juste d'un côté, et faux de l'autre." },
      { if: { has: "r:couvert_redit" }, text: "Derrière toi, sur un berceau, un vieillard écoute, son dernier grain sur la main. Il a plaidé pour le silence. Tu sais que si tu te tais, ce ne sera pas pour lui ; et tu sais qu'il ne fera pas la différence." },
      "Le levier arrive au dernier cran.",
    ],
    choices: [
      { label: "« Douze. »", fx: { flag: "monde:r_douze", ep: ["histoire", 2000] }, to: "B17", big: true },
      { label: "Te taire, et laisser monter", fx: { flag: "monde:r_silence", ep: ["histoire", 2000] }, to: "B17", big: true },
    ] },

  B17: { act: "V", title: "Le coup", backName: "le coup", charniere: true,
    text: [
      { if: J, text: "Le marteau frappe." },
      { if: J, text: "Tu ne l'entends pas : tu es dedans. C'est un mur. Il n'a ni hauteur ni couleur. Il t'entre par les dents, par le ventre, par la plante des pieds, et tu cries sans rien entendre de ton cri." },
      { if: J, text: "Mais ce n'est pas le même mur que ce matin. Ce matin, il s'était fermé. Celui-ci s'ouvre." },
      { if: R, text: "Il descend par le fil avant de venir par l'air. Tu le reçois dans le bras, jusqu'à l'épaule, comme le recul d'un fusil." },
      { if: R, text: "Puis il arrive par la voûte, et c'est une chose que tu n'as jamais entendue de ta vie : une cloche. Une vraie, qui sonne. Chez toi, on dit *sonner* comme on dit *la mer* dans les pays où personne ne l'a vue." },
      "La onzième note finit. Elle finit comme finit une respiration qu'on retenait : d'un seul coup, avec un bruit de vent dans toute la Tour.",
      "Et pendant le temps d'un battement, le douzième coup n'est d'aucune année. Il est en l'air, entre deux mains, comme une pièce qu'on a jetée et qui tourne.",
      { if: J, text: "Tu lâches la corde. Tu tombes à genoux sur le plancher de la Cage. Tu as dit, ou tu as tu. En bas, quelqu'un en a fait autant, et tu ne sais pas quoi." },
      { if: R, text: "Tu lâches le cuir. Le levier reste en haut, de lui-même. Tu as dit, ou tu as tu. Là-haut, quelqu'un en a fait autant, et tu ne sais pas quoi." },
      "La pièce retombe.",
    ],
    choices: [{ label: "Écouter où il tombe", to: "K17_coup", big: true }] },

  K17_coup: { act: "V", title: "Où il tombe", place: "tour",
    branch: [
      { if: { all: [J_DIT, R_DIT] }, to: "F_partage" },
      { if: J_DIT, to: "F_defaire" },
      { if: R_DIT, to: "F_reveil" },
      { to: "F_garder" },
    ] },
});

module.exports = { passages: P, extras: {} };
