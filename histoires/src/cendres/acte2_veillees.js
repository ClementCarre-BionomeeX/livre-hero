// Act II · night talks. In the north, at the moutier, Corbe ("tu", feminine) with whoever walks with her; in the south,
// at the Ancre in Vasselin, Lisandre ("tu", feminine). The two companies never share a talk: the same companion is not
// the same person with Corbe as with Lisandre.
var A = { act: "II", noLead: true };
function P(o) { return Object.assign({}, A, o); }
function veillee(id, who, place, back, title, text, a, b) {
  var o = {};
  o[id] = P({ takes: "night", title: title, place: place, fx: { flag: "veillee2:" + who }, text: text,
    choices: [{ label: a.label, fx: { conf: a.conf }, to: id + "_a" }, { label: b.label, fx: { conf: b.conf }, to: id + "_b" }] });
  o[id + "_a"] = P({ takes: "morning", title: title, place: place, text: [a.text], choices: [{ label: "Laisser la nuit finir", to: back }] });
  o[id + "_b"] = P({ takes: "morning", title: title, place: place, text: [b.text], choices: [{ label: "Laisser la nuit finir", to: back }] });
  return o;
}
var C = {};
function add(o) { for (var k in o) C[k] = o[k]; }
var N = function (id, who, title, text, a, b) { add(veillee("II_VN_" + id, who, "moutier", "II_N3_cloitre", title, text, a, b)); };
var S = function (id, who, title, text, a, b) { add(veillee("II_VS_" + id, who, "vasselin", "II_S_vasselin", title, text, a, b)); };

// ------------------------------------------------------------------ nord (Corbe)
N("enfant", "enfant", "Le garçon des foins", [
  "L'enfant de Sauvelune ne dort pas. Il est assis sous les arcades du cloître, face au col, et il regarde la lumière blanche qui monte de la déchirure. Tu t'assieds à côté de lui en silence. Au clan, on ne parle pas à quelqu'un qui regarde.",
  "Au bout d'un long moment, c'est lui qui parle. « Tu as déjà eu l'impression qu'un endroit t'appelait par ton nom ? Pas celui qu'on t'a donné. Un autre. »",
], { label: "« Oui. Le col. Depuis que je suis née. »", conf: { enfant: 10 }, text: "Il se tourne vers toi, surpris qu'on lui réponde vrai. « Et tu y vas ? » Tu dis que tu ne sais pas encore. Que la Mère t'appelle, mais qu'elle appelle beaucoup de monde, et que ce n'est pas une raison. Il réfléchit longtemps. « Ce n'est pas une raison, répète-t-il. Je vais m'en souvenir. »" },
  { label: "« Les endroits n'appellent pas. Les gens, si. »", conf: { enfant: 5 }, text: "« Alors c'est quelqu'un, dit-il. Là-bas. » Il regarde la lumière. Tu regrettes un peu d'avoir dit ça. Il ne dort pas de la nuit. Toi non plus, finalement." });
N("ysolde", "ysolde", "La chevalière et la sauvage", [
  "Ysolde nettoie son épée dans la salle capitulaire, à la lueur d'une chandelle, comme si elle allait se battre demain. Elle ne te regarde pas quand tu entres. Depuis le départ, elle te parle peu. Tu sais ce qu'on dit des gens du Corbeau, à Brenne : qu'ils mangent leurs morts.",
  "« Vous mangez vos morts ? » demande-t-elle, sans lever les yeux. Au moins, elle a le courage de demander.",
], { label: "« Seulement ceux qu'on aime. »", conf: { ysolde: 5 }, text: "Elle lève les yeux, enfin. Elle voit que tu te moques. Quelque chose bouge au coin de sa bouche. « À Brenne, dit-elle, on les met sous une dalle avec une épée de bois. Je ne sais pas ce qui est le plus bizarre. » Elle reprend son nettoyage. Elle te laisse rester." },
  { label: "« Non. On chante leurs noms au col, et on les laisse au vent. »", conf: { ysolde: 10 }, text: "Elle pose l'épée. « Au vent, répète-t-elle. Et les noms ? — On les chante chaque printemps. Tous. Depuis quarante générations. » Elle réfléchit. « À Brenne, on les grave sur une dalle, et plus personne ne les lit. » Elle reprend l'épée. « Votre façon est meilleure. Ne le répète pas. »" });
N("pie", "pie", "Le voleur et le tambour", [
  "Pie a trouvé ton tambour dans ton sac et le regarde sous toutes les coutures, à la chandelle, avec un intérêt de professionnel. Il l'a emprunté, dit-il, et il tient à la nuance.",
  "« Les signes, là, sur la peau. C'est de l'écriture ? » Il passe le doigt sur les traits d'ocre. « Je croyais que vous ne saviez pas écrire, là-haut. »",
], { label: "« C'est ma mère qui les a peints. Ce sont des noms. »", conf: { pie: 10 }, text: "Il retire le doigt, très vite, comme s'il avait touché quelque chose de chaud. Puis il te rend le tambour, avec beaucoup de soin, des deux mains. « Ma sœur, dit-il, elle sait écrire, maintenant. Ils lui ont appris, à la tour. C'est la seule chose qu'ils lui ont laissée. » Il se tait. Toi aussi." },
  { label: "« Rends-moi ça. »", conf: { pie: -5 }, text: "Il te le rend avec une révérence de théâtre. « Je ne vole pas les pauvres, dit-il. Ni les sauvages. » Il dit ça pour te vexer. Ça marche. Mais plus tard, en t'endormant, tu le vois encore regarder le tambour, de loin, comme on regarde un livre qu'on ne sait pas lire." });
N("hylas", "hylas", "Le greffier et la Bouche", [
  "Hylas est dans la bibliothèque du moutier. Il tient le livre fermé : ses yeux sont morts. Il est assis au milieu des livres, et il les sent, il les écoute, la tête penchée, comme on écoute une foule.",
  "« On m'a dit que vous n'écriviez rien, au clan, dit-il quand tu entres. Que vous gardiez tout dans la voix. » Il sourit. « J'ai passé ma vie à faire le contraire. Je me demande lequel de nous deux a tort. »",
], { label: "« Les deux. »", conf: { hylas: 10 }, text: "Il rit, un rire sec, surpris. « Les deux, répète-t-il. Oui. La voix oublie, et le papier ment. » Il se lève, s'appuie sur sa canne. « Alors il faut les deux. Il faut des gens qui chantent ce qui est écrit, et des gens qui écrivent ce qu'on chante. » Il a l'air content. « Je n'y avais jamais pensé. Trente ans de tour, et je n'y avais jamais pensé. »" },
  { label: "« Vous. Votre papier a donné ses noms à Mordace. »", conf: { hylas: -5 }, text: "Il prend son temps. « Oui, dit-il enfin. Le papier n'a pas de défense. La voix, si : elle se tait. » Il incline la tête. « Vous avez raison, et je le savais. C'est toujours désagréable. »" });
N("rodric", "rodric", "L'ennemi au coin du feu", [
  "Rodric s'est installé dans les cuisines, près du seul feu qui marche, et il fait griller du lard sur la pointe de sa dague. Il t'en tend un morceau sans te regarder. Il parle l'esquarrois comme on mâche du cuir, et toi, tu parles la langue du clan, que personne ne parle en bas. Vous avez fait la route en vous montrant les choses du doigt.",
  "Il montre le col, par la fenêtre. Puis il montre ton tambour. Puis il fait un geste de question, les sourcils levés.",
], { label: "Lui jouer quelque chose", conf: { rodric: 10 }, text: "Tu prends le tambour et tu joues le rythme de marche du clan, lent, lourd. Il écoute. Puis il tape du plat de la main sur la table, en contretemps, et il chante, en corvannais, une chanson qui va très bien dessus. Une chanson de marche, elle aussi. Les novices, en haut, se réveillent et viennent écouter dans l'escalier." },
  { label: "Lui faire signe que c'est sacré", conf: { rodric: 5 }, text: "Il hoche la tête, gravement. Il comprend ça. Il porte trois cloches à l'épaule, et quand tu les montres du doigt, à ton tour, il fait le même signe que toi, exactement. Vous finissez le lard en silence, en vous comprenant parfaitement." });
N("linette", "linette", "La page blanche", [
  "Linette lit, comme toujours, un livre pris au hasard. Elle lit les lettres une par une, à voix basse, en les épelant, comme un enfant. Elle a dix ans. On lui a tout repris sauf ça.",
  "Elle lève les yeux vers toi. « Toi, tu ne sais pas lire, dit-elle. Et tu sais plein de choses. Comment tu fais pour te rappeler ? »",
], { label: "« Je chante. »", conf: { linette: 10 }, text: "« Montre », dit-elle. Tu lui chantes la lignée de ta mère, les dix premières générations. Elle t'écoute avec une attention terrible. Puis elle répète. Elle se trompe à la septième. Tu la reprends. Elle recommence. À l'aube, elle les sait toutes les dix, sans livre, et elle a l'air plus heureuse que tu ne l'as jamais vue." },
  { label: "« Je ne me rappelle pas. J'oublie, comme tout le monde. »", conf: { linette: 5 }, text: "Elle te regarde longtemps. « Moi, je n'ai pas le droit d'oublier, dit-elle. Ils m'ont déjà tout pris une fois. Si j'oublie encore, il ne restera rien. » Elle se remet à lire, plus vite. Tu la laisses. Les mots te manquent." });

// ------------------------------------------------------------------ sud (Lisandre)
S("enfant", "enfant", "Le petit montagnard", [
  "L'enfant de Sauvelune est à la fenêtre de l'Ancre, et il regarde la mer. Il l'a vue pour la première fois avant-hier, et il la regarde encore. Il est minuit, il fait noir, on ne voit que les feux des navires, et il regarde quand même.",
  "« Elle ne s'arrête jamais, dit-il. Elle fait le même bruit depuis toujours. Elle ne doit rien oublier, elle. »",
], { label: "« Elle oublie tout. C'est pour ça qu'elle recommence. »", conf: { enfant: 5 }, text: "Il te regarde, intrigué. Tu lui expliques que c'est une image de chanson, que les poètes de cour disent ça de la mer quand ils n'ont rien d'autre à dire. Il rit. « Toi, tu es poète de cour. — Oui. — Alors tu n'as rien d'autre à dire ? » Tu ris aussi. Il a raison, un peu." },
  { label: "Lui chanter une chanson de marins", conf: { enfant: 10 }, text: "Tu lui chantes une chanson de marins que tu as apprise sur ce port, à quinze ans, avant la cour. Une chanson grossière, joyeuse, qu'on ne chante pas devant la reine. Il rit aux mauvais endroits, il te demande ce que veulent dire les mots, tu refuses de le lui dire. Il s'endort sur le rebord de la fenêtre, la tête contre la vitre." });
S("ysolde", "ysolde", "La garde et la chanteuse", [
  "Ysolde ne supporte pas Vasselin. Trop de monde, trop de bruit, trop de soie. Elle est assise sur son lit, à l'Ancre, en chemise, et elle recoud elle-même la doublure de son gambison, avec une aiguille de sellier et une colère méthodique.",
  "« Vous, les gens de cour, dit-elle sans lever les yeux, vous dites toujours le contraire de ce que vous pensez. Comment on fait, pour savoir ? »",
], { label: "« On ne sait pas. C'est tout l'intérêt. »", conf: { ysolde: -5 }, text: "Elle tire un point, si fort que le fil casse. « Alors je ne vous croirai jamais, dit-elle. Même quand vous direz vrai. » Elle renfile l'aiguille. Tu te dis que c'est la phrase la plus juste qu'on t'ait dite depuis dix ans, et tu ne le lui dis pas, évidemment." },
  { label: "« Avec vous, je dirai ce que je pense. Essayez. »", conf: { ysolde: 10 }, text: "Elle lève les yeux. « Qu'est-ce que vous pensez de moi ? » Tu lui dis. Qu'elle est raide comme un piquet, qu'elle n'a aucun humour, et que tu donnerais ta voix pour avoir son courage. Elle te regarde longtemps. « Bon », dit-elle. Et elle reprend sa couture. Mais elle a rougi." });
S("pie", "pie", "Deux menteurs", [
  "Pie joue aux dés avec lui-même, sur la table de la salle commune, et il triche. Contre lui-même. Avec beaucoup d'application. Tu t'assieds en face.",
  "« Tu mens pour la reine, dit-il en lançant les dés. Moi, je mens pour moi. Lequel est le plus honnête, à ton avis ? »",
], { label: "« Toi. »", conf: { pie: 10 }, text: "Il lève les yeux, étonné que tu ne te défendes pas. « Je m'attendais à un discours, dit-il. — Je les garde pour la cour. » Il te tend les dés. « Tu triches ? — Toujours. — Parfait. » Vous jouez jusqu'à l'aube, en trichant tous les deux, ouvertement, et c'est la partie la plus honnête que tu aies jamais jouée." },
  { label: "« Moi. Moi au moins, je sais pour qui. »", conf: { pie: 5 }, text: "Il rit. « Tu sais pour qui. La reine. » Il lance les dés. « Et la reine, elle ment pour qui ? » Tu te tais. Il ne gagne pas, cette fois, contre lui-même. Il a l'air de trouver ça juste." });
S("hylas", "hylas", "Le vieux maître", [
  "Hylas t'a demandé de lui lire quelque chose. N'importe quoi. Tu lui lis l'almanach de l'Ancre, le seul livre de l'auberge : les marées, les foires, les saints du mois. Il écoute avec une attention extraordinaire.",
  "« Vous lisez bien, dit-il. Vous lisez comme on chante. On ne vous a jamais appris à lire sans chanter ? »",
], { label: "« Si. Je n'ai jamais pu. »", conf: { hylas: 10 }, text: "« Tant mieux, dit-il. À la tour, on m'a appris à lire sans rien. D'une voix plate et égale. Pour ne pas déranger les mots. » Il secoue la tête. « On les a si peu dérangés qu'ils sont partis. Continuez. Les marées. » Tu continues. Il s'endort aux saints de la fin du mois, avec un sourire." },
  { label: "« La cour m'a appris à chanter ce que je lisais. Ce n'est pas pareil. »", conf: { hylas: 5 }, text: "« Non, dit-il. Ce n'est pas pareil. » Il réfléchit. « Un jour, vous lirez quelque chose de votre choix, et vous chercherez quelle voix prendre. Ce jour-là, prenez la vôtre. Vous en avez une. Je l'entends sous l'autre. »" });
S("rodric", "rodric", "Le capitaine de Corvanne", [
  "Rodric a trouvé, dans le port, une taverne de marins corvannais, et il t'y emmène, parce que tu parles corvannais et que personne d'autre ne le parle. On y boit un vin épais, on y chante, on y joue au couteau. Personne n'y sait qu'un capitaine ennemi boit à côté d'une chanteuse de la reine d'Esquarre.",
  { before: "lisandre:ilan_livre", text: "Il se penche vers toi. « Ilan, dit-il. L'envoyé. Le jeune. Il te regarde comme un chien regarde une porte. Tu le sais ? »" },
  { after: "lisandre:ilan_livre", text: "Il se penche vers toi. « Ilan, dit-il. L'envoyé. Le jeune. Ici, on dit qu'il n'est pas rentré chez lui. Qu'il est dans une cave de ton palais. Tu le sais ? »" },
], { label: "« Je le sais. »", conf: { rodric: 5 }, text: { before: "lisandre:ilan_livre",
    text: "« Et toi ? » Tu te tais. Il hoche la tête, comme un homme qui a eu trois fils et qui reconnaît un silence. « Fais attention à lui, dit-il. Les garçons qui regardent comme ça, à la guerre, ils meurent les premiers. Ou les derniers. Jamais au milieu. »",
    else: "« Et tu dors ? » Tu te tais. Il hoche la tête, comme un homme qui a eu trois fils et qui reconnaît un silence. « Chez moi, dit-il, un prisonnier, on va le chercher. Ou on apprend à vivre avec. Jamais entre les deux. »" } },
  { label: "« Ce n'est pas tes affaires, capitaine. »", conf: { rodric: 10 }, text: { before: "lisandre:ilan_livre",
    text: "Il éclate de rire, et toute la taverne se retourne. « Enfin, dit-il. Quelqu'un qui me parle comme on parle chez moi. » Il te sert un autre gobelet. Il ne reparle plus d'Ilan de la soirée. Mais au retour, dans la rue, il dit, sans te regarder : « Il a de la chance. C'est tout. »",
    else: "Il éclate de rire, et toute la taverne se retourne. « Enfin, dit-il. Quelqu'un qui me parle comme on parle chez moi. » Il te sert un autre gobelet. Il ne reparle plus d'Ilan de la soirée. Mais au retour, dans la rue, il dit, sans te regarder : « Un prisonnier, ça se rend. C'est tout. »" } });
S("linette", "linette", "La petite scribe", [
  "Linette a trouvé ton cahier de chansons, celui où tu écris les brouillons avant de les mettre au propre pour la cour. Elle le lit. Elle lit les ratures. Surtout les ratures.",
  "« Pourquoi tu as barré celle-là ? » Elle te montre une strophe. Une strophe sur un garçon de Corvanne, écrite il y a deux ans, et barrée le lendemain.",
], { label: "« Parce qu'elle était vraie. »", conf: { linette: 10 }, text: "Elle réfléchit, avec son sérieux terrible. « À la tour, dit-elle, on barre les choses vraies aussi. Avec de l'encre noire. Mais on garde le livre. » Elle referme ton cahier, te le rend. « Tu l'as gardé. Le cahier. Ça veut dire que tu voulais qu'on puisse la relire, un jour. » Tu te tais. Elle a dix ans et elle a raison." },
  { label: "« Parce qu'elle était mauvaise. »", conf: { linette: 2 }, text: "Elle la relit. « Elle n'est pas mauvaise, dit-elle. Elle est mieux que les autres. » Elle tourne la page, cherche une autre rature, la trouve. « Celle-là aussi. » Tu lui reprends le cahier. Elle ne proteste pas. Elle sait ce qu'elle a vu." });

module.exports = C;
