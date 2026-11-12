// Act IV · "Les veillées": one night talk with each companion, a year after the Outre-Blanc. Offered from the hub where
// it fits (the moutier, Pallanche at the Veuve's, the camp of Brenne) when the companion walks with you. Each ends on a
// reply that moves their trust. The child leads ("tu").
var A = { act: "IV", noLead: true };
function P(o) { return Object.assign({}, A, o); }
function back(place) { return place === "moutier" ? "IV_moutier" : place === "pallanche" ? "IV_pal" : "IV_br"; }
// One talk: a setting, two replies, two short answers.
function veillee(id, who, place, title, text, a, b) {
  var o = {};
  o[id] = P({ takes: "night", title: title, place: place, fx: { flag: "veillee:" + who }, text: text,
    choices: [{ label: a.label, fx: { conf: a.conf }, to: id + "_a" }, { label: b.label, fx: { conf: b.conf }, to: id + "_b" }] });
  o[id + "_a"] = P({ takes: "morning", title: title, place: place, text: [a.text], choices: [{ label: "Laisser la nuit finir", to: back(place) }] });
  o[id + "_b"] = P({ takes: "morning", title: title, place: place, text: [b.text], choices: [{ label: "Laisser la nuit finir", to: back(place) }] });
  return o;
}
var C = {};
function add(o) { for (var k in o) C[k] = o[k]; }

add(veillee("IV_V_ombeline", "ombeline", "moutier", "La lampe de l'Hospice", [
  "Ombeline ne dort pas. Elle ne dort plus beaucoup, depuis l'année blanche. Elle est assise dans la chapelle du moutier, une lampe à ses pieds, et elle égrène quelque chose entre ses doigts. Pas un chapelet. Une ficelle à nœuds, longue de plusieurs aunes.",
  "« Un nœud par mourant, dit-elle sans lever les yeux. Ceux à qui j'ai pris le pire, pour qu'ils partent légers. Je les porte. C'est mon métier. » Elle arrive au bout de la ficelle. « Cette année, il y en a eu beaucoup. Je ne sais plus si c'est encore de la miséricorde, ce que je fais, ou si je fais comme lui, en plus petit. »",
], { label: "« Eux, ils te l'ont demandé. »", conf: { ombeline: 10 }, text: "Elle reste silencieuse longtemps. « Oui, dit-elle. Ils me l'ont demandé. Chacun. Et je leur ai demandé, chaque fois, s'ils étaient sûrs. » Elle renoue la ficelle autour de son poignet. « Lui, il ne demande pas. C'est toute la différence. C'est une petite différence. Je vais m'y tenir. »" },
  { label: "« Tu pourrais les poser, un jour. Les nœuds. »", conf: { ombeline: 5 }, text: "Elle sourit, pour la première fois depuis longtemps. « Les poser où ? » Elle regarde la lampe. « Quand je mourrai, quelqu'un prendra la ficelle. Une novice. C'est ainsi depuis trois cents ans. » Elle te regarde. « À moins que tu trouves un endroit où les poser. Un endroit qui les garde. Je ne savais pas qu'il en existait un, avant de te connaître. »" }));

add(veillee("IV_V_corbe", "corbe", "moutier", "Le tambour éteint", [
  "Corbe s'est installée sur le toit du cloître, parce qu'elle ne supporte pas de dormir sous un plafond. Tu la rejoins par l'échelle du guet. Elle a son tambour sur les genoux. Elle n'en joue pas.",
  "« Au clan, dit-elle, on dit que la Bouche ne doit pas avoir d'amis. Parce qu'un jour, elle devra choisir entre eux et la Mère. » Elle tapote le tambour, une fois, du bout de l'ongle. « Je crois que j'ai raté ça aussi. »",
], { label: "« Tu as choisi. Plusieurs fois. »", conf: { corbe: 10 }, text: "Elle te regarde de côté, longtemps, avec ses yeux de corbeau. « Oui, dit-elle. Et chaque fois, j'ai perdu quelque chose. » Elle se met à jouer, très bas, un rythme lent. « Ça ne veut pas dire que c'était le mauvais choix. Ma mère disait ça. Je l'avais oublié. »" },
  { label: "« Tu n'es plus la Bouche. Tu es Corbe. »", conf: { corbe: 5 }, text: "« Je ne sais pas ce que c'est, Corbe, sans le reste, dit-elle. Personne ne me l'a jamais appris. » Puis, après un temps : « Mais d'accord. On verra. Je te dirai si ça me plaît. » Et elle s'allonge sur les tuiles, le tambour sur le ventre, et elle regarde les étoiles jusqu'à ce que tu partes." }));

add(veillee("IV_V_givre", "givre", "moutier", "Le renard et le feu", [
  "Givre ne s'approche jamais du feu. Ce soir, il est couché à trois pas, juste à la limite, là où la chaleur commence. Il te regarde. Il a quelque chose dans la gueule, qu'il dépose devant toi : une miette. Un souvenir à toi, minuscule, qu'il a dû ramasser quelque part, un jour où tu l'avais perdu. La couleur d'un ruban.",
  "Il attend.",
], { label: "Le reprendre", conf: { givre: 5 }, text: "Tu tends la main. La miette fond dans ta paume, et tu te souviens : un ruban bleu, à la fête des foins, dans les cheveux de quelqu'un. Tu ne savais pas que tu l'avais perdu. Givre te regarde reprendre ton bien avec une immense satisfaction de renard, et s'endort, roulé en boule, à trois pas du feu." },
  { label: "Le lui laisser", conf: { givre: 15 }, text: "Tu pousses la miette vers lui, du bout du doigt. « Garde-le. » Il ne bouge pas, d'abord. Puis il la mange, lentement, en fermant les yeux. Et il fait une chose qu'il n'a jamais faite : il franchit les trois pas, il vient se coucher contre ta jambe, tout près du feu, et il tremble un peu, et il reste." }));

add(veillee("IV_V_linette", "linette", "brenne", "Les mots de Linette", [
  "Linette a trouvé les archives du fort de Brenne et n'en sort plus. Tu la trouves à minuit, une chandelle à la main, en train de tout lire, n'importe quoi : un traité d'apiculture, un livre de comptes, un psautier. Elle lit à voix basse, très vite.",
  "« J'ai neuf ans de mots à rattraper, dit-elle sans lever les yeux. Ceux d'avant. Je ne les retrouverai jamais. Alors j'en prends d'autres. » Elle tourne une page. « Tu crois que c'est pareil ? »",
], { label: "« Non. Ce sera les tiens. »", conf: { linette: 10 }, text: "Elle lève enfin les yeux. Elle réfléchit, avec le sérieux terrible des enfants qui ont trop lu. « Les miens, répète-t-elle. Pas ceux de la Chancellerie. Pas ceux d'avant. » Elle referme le traité d'apiculture. « Alors je vais choisir. Pas tout lire. » Elle en prend un autre, au hasard. C'est un recueil de chansons. Elle sourit." },
  { label: "« Ton frère pourra te raconter. »", conf: { linette: 5, pie: 5 }, text: "« Il ment, dit-elle tranquillement. Il ment tout le temps. Il dit que j'ai mordu un greffier à quatre ans. » Elle réfléchit. « C'est peut-être vrai. J'aimerais que ce soit vrai. » Elle se remet à lire, plus lentement." }));

add(veillee("IV_V_pie", "pie", "pallanche", "Les toits", [
  "Pie t'emmène sur les toits de la Veuve, puis sur ceux d'à côté, puis plus loin, jusqu'au faîte d'une église d'où l'on voit tout Pallanche. La tour noire, au milieu. Les cent clochers. La queue sur la place aux Clercs, éclairée de lanternes, qui ne dort jamais.",
  "« J'ai grandi là-dessus, dit-il. J'ai volé toute cette ville, un bout après l'autre. » Il s'assied sur les tuiles. « Et je ne l'ai jamais aimée. C'est drôle. Je crois que je l'aime ce soir, parce qu'elle va peut-être disparaître. »",
], { label: "« Elle ne disparaîtra pas. »", conf: { pie: 5 }, text: "« Tu ne peux pas savoir ça, dit-il. Mais c'est gentil. » Il sort un jeton de plomb de sa poche, de ceux qu'il a faits par milliers, et le lance très loin, au-dessus des toits. On ne l'entend pas tomber. « Pour la ville, dit-il. Elle me doit bien ça. »" },
  { label: "« Alors vole-la une dernière fois. Pour la garder. »", conf: { pie: 15 }, text: "Il te regarde, et il éclate de rire, un vrai rire, le premier depuis l'année blanche. « Voler une ville. Personne n'a jamais fait ça. » Il se lève, debout sur le faîte, les bras écartés, au-dessus du vide. « D'accord. Je la prends. Elle est à moi. Et je ne la rends pas. »" }));

add(veillee("IV_V_hylas", "hylas", "pallanche", "Ce qu'on doit", [
  "Hylas est assis dans l'arrière-boutique de la Veuve, les mains croisées sur sa canne. Il t'attendait. Il reconnaît ton pas à cent marches, comme il disait.",
  "« J'ai quelque chose à te dire, et je ne sais pas le dire, dit-il. Alors je vais le dire mal. » Il se tait. « Je t'ai porté hors de l'Outre-Blanc, il y a vingt ans. Je ne te l'ai pas dit. Pendant vingt ans. J'avais mes raisons. Elles étaient toutes mauvaises. » Il lève vers toi ses yeux blancs. « Je ne te demande pas pardon. Je voulais seulement que tu l'entendes de moi, une fois, dans une pièce chaude, et pas dans une tour. »",
], { label: "« Je l'ai entendu. »", conf: { hylas: 10 }, text: "Il hoche la tête, lentement. Il ne dit rien d'autre. Au bout d'un moment, il tend la main, à tâtons, et tu la prends, et il la serre, une fois, fort, comme on serre la main de quelqu'un sur un quai. Puis il la lâche, et il demande à la Veuve s'il reste de la soupe." },
  { label: "« Tu m'as sorti de là. C'est tout ce qui compte. »", conf: { hylas: 15 }, text: "« Non, dit-il. Ce n'est pas tout ce qui compte. Mais c'est ce que tu as décidé de compter, et c'est ton droit. » Sa voix se casse, à peine. « Merci. » C'est la première fois que tu l'entends dire ce mot." }));

add(veillee("IV_V_lisandre", "lisandre", "pallanche", "La chanson commandée", [
  "Lisandre accorde son luth dans un coin de l'arrière-boutique. Elle n'arrive pas à l'accorder. Elle recommence, et recommence.",
  "« Pendant douze ans, dit-elle, j'ai chanté ce qu'on me commandait. Des victoires. Des mariages. Des deuils qui n'étaient pas les miens. Je les chantais très bien. » Elle pince une corde, fausse. « Maintenant que personne ne me commande rien, je ne sais plus quoi chanter. C'est ridicule. »",
], { label: "« Chante ce que tu as vu cette année. »", conf: { lisandre: 10 }, text: "Elle te regarde. Puis elle pose le luth, sans l'accorder, et elle chante sans lui, très bas : la plaine blanche, les marcheurs, une ville de cloches, un gué sans eau. Ce n'est pas une belle chanson. Elle n'a pas de rimes. La Veuve, dans la cuisine, arrête de laver la vaisselle pour écouter." },
  { label: "« Chante pour toi. Personne n'écoute. »", conf: { lisandre: 5 }, text: "« Tout le monde écoute toujours, dit-elle. C'est le métier. » Mais elle se tourne vers le mur, pour ne voir personne, et elle chante une berceuse corvannaise que sa nourrice lui chantait. Elle s'arrête au deuxième couplet. Elle ne se souvient plus de la suite. Elle n'a pas l'air triste. Elle a l'air de quelqu'un qui vient de retrouver une pièce dans une vieille poche." }));

add(veillee("IV_V_rodric", "rodric", "brenne", "Le vin de l'ennemi", [
  "Rodric a trouvé du vin de Corvanne dans le camp d'Esquarre, Dieu sait comment. Il en verse deux gobelets, sans te demander. « Bois. C'est le meilleur vin du monde, et il pousse sur la rive d'en face. Les Esquarrois ne l'ont jamais su. »",
  "Il boit. « Mes fils l'aimaient. Les trois. » Il fait tourner son gobelet. « Ils sont morts sur la Lisse, sous des flèches d'Esquarre. Et me voilà dans un camp d'Esquarre, à boire avec un enfant d'Esquarre, pour sauver Esquarre. » Il rit, sans joie. « Mes fils me cracheraient dessus. »",
], { label: "« Tu crois ? »", conf: { rodric: 10 }, text: "Il réfléchit longtemps, avec l'honnêteté terrible des hommes qui ont trop bu. « Le petit, non, dit-il enfin. Le petit aurait trouvé ça drôle. Les deux grands, oui. » Il te ressert. « Un sur trois. Ce n'est pas si mal. Je bois à celui-là. »" },
  { label: "« Tu ne sauves pas Esquarre. Tu sauves des gens. »", conf: { rodric: 5 }, text: "« Les gens, ça n'existe pas, grogne-t-il. Il y a des Esquarrois et des Corvannais. » Mais il ne termine pas son gobelet. Il le pose. « Et des fils. Et des pères. » Il se lève, pesamment. « Va dormir, petit. Tu me fais dire des bêtises. »" }));

add(veillee("IV_V_ysolde", "ysolde", "brenne", "Le chemin de ronde", [
  "Ysolde fait le tour du chemin de ronde de Brenne, la nuit, comme elle le faisait avant. Tu marches avec elle. Elle connaît chaque pierre, chaque sentinelle, chaque créneau ébréché.",
  "« Ce fort était à moi, dit-elle. J'étais née pour le tenir. Et la seule chose que je me rappelle avoir vraiment faite, en le tenant, c'est ce que j'ai payé pour oublier. » Elle s'arrête au-dessus de la Lisse. On voit le pont. « Je ne sais pas si je veux le reprendre, ce fort. Je ne sais pas si j'en ai le droit. »",
], { label: "« Reprends-le. Fais-en autre chose. »", conf: { ysolde: 10 }, text: "Elle pose les deux mains sur le créneau. « Autre chose, répète-t-elle. Un fort, ça sert à tenir un pont. » Elle regarde le pont longtemps. « Ou à empêcher qu'on le passe pour mal faire. Ce n'est pas tout à fait pareil. » Elle reprend sa ronde. Elle a l'air de quelqu'un qui vient de se donner un ordre." },
  { label: "« Tu as le droit de ne pas le reprendre. »", conf: { ysolde: 5 }, text: "« Personne ne m'a jamais dit ça, dit-elle. Personne. » Elle continue sa ronde, en silence. À la dernière tour, elle s'arrête, et elle dit, sans te regarder : « Merci. Je ne sais pas encore ce que je ferai. Mais merci de m'avoir laissé ne pas savoir. »" }));

add(veillee("IV_V_sansnom", "sansnom", "brenne", "Ton frère", [
  "Ton frère est assis à l'écart, au bord du camp, son masque de givre posé à côté de lui sur l'herbe. Hors de l'Outre-Blanc, le monde l'oublie dès qu'il détourne les yeux. Les sentinelles passent devant lui sans le voir. Toi, tu le vois.",
  "« Tu te souviens de moi, dit-il. Entre deux fois. » Ce n'est pas une question. « Comment tu fais ? »",
], { label: "« Je me le répète. Ton visage. Toute la journée. »", conf: { sansnom: 15 }, text: "Il te regarde. Il n'a pas l'habitude qu'on le regarde. « C'est fatigant, dit-il. — Oui. — Arrête pas. » Il remet son masque, puis l'ôte de nouveau. « Je ne sais pas faire ça, avoir un frère. Je vais essayer. Si je fais mal, dis-le. Personne ne me dit jamais rien, d'habitude. Personne ne s'en souvient assez longtemps. »" },
  { label: "« Je ne sais pas. Je m'accroche. »", conf: { sansnom: 10 }, text: "« Moi aussi, dit-il. À toi. C'est la seule chose qui reste, quand je sors du blanc. Ton nom. Le vrai, et l'autre. » Il ramasse son masque, le fait tourner. « On fait une drôle de paire. » Et pour la première fois, tu crois l'entendre rire, mais c'est peut-être le vent." }));

add(veillee("IV_V_gaspard", "gaspard", "brenne", "Le levain", [
  "Gaspard a gardé un peu de levain, dans un pot de grès, qu'il nourrit chaque soir avec de la farine et de l'eau, comme on nourrit une bête. Il te le montre. « Trois cents ans, dit-il. Celui de mon four, à Sauvelune. J'en avais gardé un bout, dans ma poche, quand je suis devenu une chose blanche. Je ne m'en souvenais plus. Je l'ai retrouvé l'an dernier. »",
  "Il remue le levain du bout du doigt. « Un levain, ça ne meurt pas, si on le nourrit. Un village non plus. Je me demande. »",
], { label: "« Sauvelune aussi, on la nourrira. »", conf: { gaspard: 10 }, text: "Il hoche la tête, gravement, comme si tu venais de signer un contrat. « Avec quoi ? » Tu ne sais pas. Il sourit. « Avec du pain, dit-il. On commence toujours par le pain. Le reste suit. » Il referme le pot et le serre contre lui, comme Corbe serre son tambour." },
  { label: "« Fais-en du pain, demain. Pour le camp. »", conf: { gaspard: 5 }, text: "« Demain, il y a une bataille, dit-il. — Justement. » Il réfléchit. Puis il se lève, et il va chercher de la farine à l'intendance, à minuit, sans demander la permission à personne. Le matin, tout le camp de Brenne sent le pain de Sauvelune, et personne ne sait pourquoi il a envie de rentrer chez lui." }));

module.exports = C;
