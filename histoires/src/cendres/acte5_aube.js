// Act V · "La dernière aube": under the bridge, before Pallanche, the child speaks to one companion only. One talk,
// two replies, and the walk into the city. The one chosen is remembered (v:dernier=<who>) by the epilogue.
var A = { act: "V", noLead: true };
function P(o) { return Object.assign({}, A, o); }
function aube(who, title, text, a, b) {
  var o = {}, id = "V_a_" + who;
  o[id] = P({ title: title, place: null, fx: { flag: "v:dernier=" + who }, text: text,
    choices: [{ label: a.label, fx: { conf: a.conf }, to: id + "_a" }, { label: b.label, fx: { conf: b.conf }, to: id + "_b" }] });
  o[id + "_a"] = P({ title: title, place: null, text: [a.text], choices: [{ label: "Entrer dans Pallanche", to: "V_ville" }] });
  o[id + "_b"] = P({ title: title, place: null, text: [b.text], choices: [{ label: "Entrer dans Pallanche", to: "V_ville" }] });
  return o;
}
var C = {};
function add(o) { for (var k in o) C[k] = o[k]; }
function c(who, n) { var o = {}; o[who] = n; return o; }

add(aube("ysolde", "Ysolde, sous l'arche", [
  "Tu t'assieds à côté d'Ysolde. Elle a fini d'écrire les noms de ses hommes sur son bras. Elle souffle sur l'encre pour la sécher.",
  "« Si je les oublie, dit-elle, tu me les liras. Tous. Dans l'ordre. Même si je te dis que ça ne sert à rien. Surtout si je te dis ça. »",
], { label: "« Promis. Dans l'ordre. »", conf: c("ysolde", 10), text: "Elle hoche la tête, une fois, comme on reçoit un ordre. Puis elle te tend son bras, et tu lis, à voix haute, les quarante noms, un par un, pour t'entraîner. Elle corrige deux prononciations. À la fin, elle dit « bien », et c'est le plus beau compliment qu'elle t'ait jamais fait." },
  { label: "« Tu ne les oublieras pas. »", conf: c("ysolde", 5), text: "« Tu n'en sais rien, dit-elle. Personne n'en sait rien, cette nuit. » Mais elle baisse la manche sur les noms, doucement, comme on couvre un enfant qui dort, et elle se lève. « Allons-y. Avant que je change d'avis. » Sa décision est prise, comme toutes celles de sa vie : pour de bon." }));
add(aube("pie", "Pie, sous l'arche", [
  "Pie fait toujours tourner son jeton de plomb. Il ne s'arrête pas quand tu t'assieds.",
  "« Si ça tourne mal, là-haut, dit-il, je prends Linette, et je file. Je te le dis maintenant, pour que tu ne sois pas surpris. Je ne suis pas un héros. Je suis un voleur qui a mal tourné. »",
], { label: "« Prends-la. Et file. »", conf: c("pie", 15), text: "Il arrête le jeton. Il te regarde, et il a l'air presque vexé. « Tu n'es pas censé dire ça, dit-il. Tu es censé me dire de rester. » Il remet le jeton dans sa poche. « Bon. Maintenant, je suis obligé de rester. Tu m'as eu. Tu triches aussi bien que moi, finalement. »" },
  { label: "« Tu ne fileras pas. »", conf: c("pie", 5), text: "« Tu n'en sais rien », dit-il. Il lance le jeton en l'air et le rattrape, sans regarder. « Pile, je file. Face, je reste. » Il ouvre la main. Il ne te montre pas. Il se lève. « Allons-y », dit-il, et il marche devant." }));
add(aube("hylas", "Hylas, sous l'arche", [
  "Hylas est assis, les mains croisées sur sa canne. Il t'entend venir, comme toujours.",
  "« Là-haut, dit-il, il va me parler. Il me parlera comme quand il avait onze ans. Il sait faire ça. Et je ne suis pas sûr d'être assez vieux pour lui résister. »",
], { label: "« Je serai à côté de toi. »", conf: c("hylas", 10), text: "« Je sais, dit-il. C'est bien pour ça que j'ai peur. » Il cherche ta main, la trouve. « Ne le laisse pas te dire que tu es comme lui. Il le dira. Il le dit à tout le monde. C'est la seule chose fausse qu'il dise toujours. »" },
  { label: "« Alors ne lui résiste pas. Parle-lui. »", conf: c("hylas", 15), text: "Il reste silencieux très longtemps. « Personne ne m'a jamais dit ça, dit-il enfin. On m'a toujours dit de le combattre. Ou de le fuir. » Il se lève, s'appuie sur ton épaule plus que sur sa canne. « Tu es plus sage que moi. Ça ne devrait pas me faire plaisir, et pourtant. »" }));
add(aube("corbe", "Corbe, sous l'arche", [
  "Corbe frappe toujours son tambour, du bout des doigts, très bas. Elle ne s'arrête pas pour te parler.",
  "« Au clan, la Bouche part la dernière, dit-elle. Après tout le monde. Elle ferme la marche, pour que personne ne reste derrière sans qu'on le voie. » Le tambour s'arrête. « Cette nuit, je marche devant. Ce n'est pas ma place. Mais il n'y a plus de clan derrière moi. »",
], { label: "« Il y a nous. »", conf: c("corbe", 10), text: "Elle te regarde, longtemps, avec ses yeux noirs. Puis elle se lève, et elle va se placer à l'arrière de la petite troupe, derrière tout le monde. « Alors je ferme la marche, dit-elle. Comme il faut. » Et elle reprend son tambour." },
  { label: "« Marche devant. C'est une nouvelle place. »", conf: c("corbe", 5), text: "« Une nouvelle place », répète-t-elle. Elle essaie les mots comme on essaie une paire de bottes. « Je ne sais pas si elle me va. » Elle se lève, et elle marche devant, le tambour à la hanche, et on dirait qu'elle a fait ça toute sa vie." }));
add(aube("lisandre", "Lisandre, sous l'arche", [
  "Lisandre chante toujours des bouts de tout, pour vérifier. Elle s'arrête quand tu t'assieds.",
  "« Si on gagne, dit-elle, il faudra que quelqu'un en fasse une chanson. Et je ne veux pas. Pour une fois, je ne veux pas. Je veux que ça reste à nous. »",
], { label: "« Alors ne la fais pas. »", conf: c("lisandre", 10), text: "Elle sourit, un sourire tout petit, tout nu. « Ce serait la plus grande histoire de ma vie, dit-elle, et je ne la chanterais pas. » Elle range son luth. « Ça me plaît. C'est la chose la plus orgueilleuse que j'aie jamais décidée. »" },
  { label: "« Fais-la. Mais chante-la mal. »", conf: c("lisandre", 15), text: "Elle éclate de rire, si fort que la neige tombe de l'arche. « Mal, répète-t-elle. Exprès. Pour que personne ne la retienne entière. Pour qu'on soit obligé de la raconter. » Elle te prend la tête à deux mains et t'embrasse sur le front. « Tu ferais un poète épouvantable. C'est parfait. »" }));
add(aube("sansnom", "Ton frère, sous l'arche", [
  "Ton frère regarde toujours la neige qui tombe à l'envers. Il a remis son masque de givre. Il l'enlève quand tu t'assieds.",
  "« Si la porte se rouvre, dit-il, je n'aurai plus d'endroit. Ni là-bas, ni ici. Je suis fait de l'entre-deux. » Il fait tourner le masque entre ses doigts. « Je ne sais pas ce que je deviens, si l'entre-deux se ferme. »",
], { label: "« Tu deviens mon frère. C'est un endroit. »", conf: c("sansnom", 15), text: "Il se tait. Il pose le masque par terre, sur la neige, à l'envers. Il ne le ramasse pas en se levant. Tu le vois marcher vers Pallanche à visage nu, pour la première fois, et les flocons qui tombent à l'envers se posent sur ses cheveux, et restent." },
  { label: "« Je ne sais pas non plus. On verra ensemble. »", conf: c("sansnom", 10), text: "« Ensemble », dit-il. Il le dit comme un mot d'une langue étrangère qu'on vient d'apprendre, en articulant. Puis il remet son masque, et il se lève, et il marche à côté de toi, exactement à ton pas." }));
add(aube("gaspard", "Gaspard, sous l'arche", [
  "Gaspard a fini de partager les miches. Il en reste une, qu'il garde dans les mains, sans la rompre.",
  "« Celle-là, c'est pour après, dit-il. Pour le premier qui aura faim, quand ce sera fini. Il y a toujours quelqu'un qui a faim, après. » Il te regarde. « Si je ne suis plus là pour la donner, tu la donneras. »",
], { label: "Prendre la miche", conf: c("gaspard", 10), text: "Tu la prends. Elle est encore tiède, Dieu sait comment. Tu la mets dans ton sac, contre ton dos. Gaspard a l'air soulagé, comme un homme qui vient de signer son testament et qui peut enfin penser à autre chose." },
  { label: "« Tu la donneras toi-même. »", conf: c("gaspard", 15), text: "Il te regarde longtemps, avec ses yeux de neige qui ont été des yeux d'homme. « D'accord, dit-il. Je la donnerai moi-même. » Il serre la miche contre lui. « Il faudra que je sois là, alors. Je n'avais pas prévu ça. » Il a l'air presque content." }));
add(aube("rodric", "Rodric, sous l'arche", [
  "Rodric fait tinter ses trois cloches, une par une. Maëlle, Ilse, Hautvent. Il s'arrête à la troisième.",
  "« J'ai sonné trois fois la cloche des morts, dit-il. Pour mes fils. Si je meurs là-haut, petit, il n'y aura personne pour la sonner pour moi. Tous ceux qui me connaissent sont morts, ou de l'autre côté de la Lisse. »",
], { label: "« Je la sonnerai. »", conf: c("rodric", 15), text: "Il te regarde. Puis il détache la troisième cloche, celle qu'il appelle Hautvent, et il te la donne. « Celle-là, dit-il. Elle a un joli son. Pas trop fort. » Il se lève, et il marche vers Pallanche avec deux cloches seulement, et il a l'air plus léger." },
  { label: "« Tu ne mourras pas là-haut. »", conf: c("rodric", 5), text: "« Tout le monde dit ça, la veille, dit-il. Et le lendemain, tout le monde a tort, sauf ceux qui ont raison. » Il se lève. « Mais merci, petit. C'est gentil. C'est inutile, mais c'est gentil. »" }));
add(aube("linette", "Linette, sous l'arche", [
  "Linette récite toujours, à voix basse, tout ce qu'elle a lu. Elle s'interrompt au milieu d'une enseigne de Pallanche quand tu t'assieds.",
  "« Là-haut, dit-elle, il y a le scriptorium. Ma place. Le pupitre onze. » Elle serre les poings. « J'ai peur que, quand je le verrai, je m'assoie. Que mes mains prennent la plume toutes seules. Elles savent faire ça. Elles l'ont fait un an. »",
], { label: "« Si tu t'assieds, je te relèverai. »", conf: c("linette", 15), text: "Elle te regarde avec son sérieux terrible. « Tu promets ? Même si je te mords ? — Même si tu me mords. » Elle hoche la tête, une fois. Puis elle reprend sa récitation, à l'enseigne exacte où elle s'était arrêtée, et elle ne se trompe plus." },
  { label: "« Tes mains sont à toi, maintenant. »", conf: c("linette", 10), text: "Elle regarde ses mains, longtemps, comme si elle les découvrait. Elle les ouvre, les ferme. « À moi », dit-elle. Elle les met dans ses poches, profond, et elle les y garde tout le chemin jusqu'à Pallanche." }));
add(aube("ombeline", "Ombeline, sous l'arche", [
  "Ombeline a les mains jointes, et sa ficelle à nœuds autour du poignet. Elle ne prie pas. Elle compte.",
  "« Mille quarante-trois, dit-elle. Les nœuds. Les mourants. » Elle lève les yeux vers la colonne blanche, au-dessus de la ville. « Là-haut, il y en a des milliers de plus, cette nuit, qui donnent tout sans mourir. Je ne sais pas comment on prend soin de ça. Personne ne me l'a appris. »",
], { label: "« Comme les autres. Un par un. »", conf: c("ombeline", 10), text: "« Un par un », répète-t-elle. Elle déroule la ficelle, prend le dernier nœud entre ses doigts. « Oui. C'est la seule façon que je connaisse. » Elle se lève, avec la lenteur des vieilles femmes, et elle marche vers la ville comme on va au chevet de quelqu'un." },
  { label: "« Tu n'as pas à porter ceux-là. »", conf: c("ombeline", 15), text: "Elle te regarde avec une immense douceur. « Si, dit-elle. Quelqu'un doit. » Puis, après un temps : « Mais pas seule. C'est ce que tu veux dire. » Elle te tend le bout de sa ficelle, et tu le prends, et vous marchez ainsi jusqu'à Pallanche, reliés par mille quarante-trois nœuds." }));
add(aube("givre", "Givre, sous l'arche", [
  "Givre court d'un passant à l'autre depuis la route, et ne mange rien. Il revient vers toi, et il s'assied, et il te regarde, les oreilles basses. Il a faim. Il n'y a plus rien de petit à manger, cette nuit. Il ne reste que les grandes choses.",
], { label: "Lui donner une miette. Une dernière", conf: c("givre", 10), text: "Tu cherches quelque chose de petit. Tu trouves : la couleur exacte du ciel au-dessus de la Combe-aux-Grives, un matin de juillet. Tu la lui donnes. Il la mange en fermant les yeux. Tu ne te souviens plus de quelle couleur était le ciel. Tu sais seulement qu'il était beau." },
  { label: "Le prendre dans tes bras", conf: c("givre", 15), text: "Il est froid, et léger, et il tremble. Il se laisse faire. Il met son museau dans ton cou, là où il fait chaud, et il ne bouge plus. Tu le portes comme ça jusqu'à Pallanche, et ses pattes fondent un peu contre ta chemise, et se refont, goutte à goutte." }));

module.exports = C;
