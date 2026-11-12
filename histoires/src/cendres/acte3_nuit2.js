// Act III · the last night in Valcendre, one talk alone with each companion who crossed the white with the boy (the
// child leads, "tu" masculine), two replies each. Linked from III_a_nuit, after the shared vigil.
var N = { act: "III", noLead: true };
function P(o) { return Object.assign({}, N, o); }
function seul(who, title, text, a, b) {
  var o = {}, id = "III_N_" + who, ca = {}, cb = {};
  ca[who] = a.conf; cb[who] = b.conf;
  o[id] = P({ title: title, place: "valcendre", text: text,
    choices: [{ label: a.label, fx: { conf: ca }, to: id + "_a" }, { label: b.label, fx: { conf: cb }, to: id + "_b" }] });
  o[id + "_a"] = P({ title: title, place: "valcendre", text: [a.text], choices: [{ back: "III_a_nuit" }] });
  o[id + "_b"] = P({ title: title, place: "valcendre", text: [b.text], choices: [{ back: "III_a_nuit" }] });
  return o;
}
var C = {};
function add(o) { for (var k in o) C[k] = o[k]; }

add(seul("ysolde", "Ysolde, à la fenêtre", [
  "Ysolde est à la fenêtre, debout, et elle regarde le palais. Elle a rengainé son épée. Elle a les mains derrière le dos, comme à la parade, et elle ne bouge pas depuis longtemps.",
  "« Ton père, dit-elle sans se retourner. Tu vas le laisser ici. » Ce n'est pas une question. « Le mien est sous la troisième dalle de la chapelle de Brenne. Je lui parle, quand je passe. Il ne répond jamais. Il ne répondait déjà pas avant. Il disait : c'est toi qui commandes. » Elle se tait. « Le tien, au moins, il répond. »",
], { label: "« Je reviendrai. Quand ce sera fini. »", conf: 10, text: "Elle se retourne. Elle te regarde comme un officier regarde une recrue qui vient de dire une bêtise, avec une sorte de tendresse sévère. « Ne le dis pas si tu ne le sais pas », dit-elle. Puis : « Dis-le quand même. À lui. Demain matin. Ça l'aidera à attendre. » Elle se remet à la fenêtre. Ses mains, derrière son dos, se sont desserrées." },
  { label: "« Le tien répondait. Autrement. »", conf: 5, text: "Elle a un petit rire, par le nez. « Il me mettait son épée dans la main, dit-elle. À huit ans. Je pouvais à peine la soulever. C'était sa réponse à tout. » Elle pose la main sur la garde, à son côté, sans y penser. « Elle est lourde. C'est peut-être ça qu'il voulait dire. Que c'est lourd, et qu'il faut la porter quand même. » Elle ne dit plus rien. Elle reste à la fenêtre jusqu'à ce que la dernière tour s'éteigne." }));
add(seul("pie", "Pie, sur l'escalier", [
  "Pie est assis sur l'escalier, entre deux étages, là où on ne le cherche pas. Il a fini par manger la moitié de sa pomme. L'autre moitié est enveloppée dans un mouchoir, sur ses genoux.",
  "« Ton frère, dit-il. Pim. Tu en parles en dormant, tu sais. Pas dans la langue d'ici. Dans la nôtre. » Il tripote le mouchoir. « Pim, il n'est pas de ton sang. On me l'a dit. Et il t'a toujours reconnu. Moi, Linette, c'est ma sœur, ma vraie, même mère, mêmes yeux. Et elle m'a regardé comme un greffier sans robe. » Il hausse les épaules. « Je me demande ce qui compte, à la fin. Le sang, ou qui reconnaît qui. »",
], { label: "« Qui reconnaît qui. Et ça se réapprend. »", conf: 10, text: "Il réfléchit. « Ça se réapprend, répète-t-il. Comme les toits. On tombe, on remonte. » Il remet le mouchoir dans sa poche, avec la demi-pomme dedans, et il tapote la poche, deux fois, comme on vérifie qu'une bourse est toujours là. « Je lui réapprendrai, alors. Moi. Tous les jours, s'il faut. Elle est têtue, mais moi aussi. C'est de famille. »" },
  { label: "« Elle te suit partout. Elle te reconnaît déjà. Elle ne le sait pas encore. »", conf: 5, text: "Il ouvre la bouche pour protester. Il la referme. Il pense, tu le vois, à toutes les fois où elle s'est mise un pas derrière lui, sans qu'on le lui demande, à toutes les fois où elle a pris sa main pour traverser. Il rit, un rire court, soulagé, disproportionné, qu'il devait porter depuis longtemps. Il te donne un coup de coude. « Elle ne le sait pas encore, répète-t-il. C'est bien elle, ça. »" }));
add(seul("hylas", "Hylas, qui regarde", [
  "Hylas est assis dans le noir, et il ne dort pas. Ici, il voit. Il le sait depuis la plaine, et il en a profité, chaque heure, comme un homme à qui l'on prête une maison pour une semaine et qui en ouvre toutes les portes.",
  "« Demain, dit-il, je redeviendrai aveugle. » Il te fait signe de t'asseoir en face de lui, sous la lampe. « Laisse-moi te regarder. Bien. Comme ça, là-haut, quand je t'entendrai, je saurai quelle tête tu fais. »",
], { label: "Rester sous la lampe, sans bouger, longtemps", conf: 10, text: "Tu restes. Il te regarde. Il ne parle pas. Il regarde tes mains, tes cheveux, la forme de ta bouche, comme un copiste regarde une page qu'il devra refaire de mémoire. Au bout d'un long moment, il ferme les yeux. « Voilà, dit-il. Je l'ai. » Il a l'air de ranger quelque chose, très soigneusement, dans un tiroir qu'il est seul à connaître." },
  { label: "« Et toi ? Tu t'es regardé ? »", conf: 5, text: "Il rit. « Il n'y a pas de miroir, ici. Personne n'en a besoin. » Tu lui dis à quoi il ressemble. Les rides, la barbe mal taillée, les yeux blancs qui, ici, ont une couleur, un gris de pluie. Il écoute, très attentivement. « Un vieux, dit-il. Je suis devenu un vieux. Personne ne me l'avait dit. » Il a l'air plutôt content." }));
add(seul("corbe", "Corbe, sur le seuil", [
  "Corbe est assise sur le seuil, dehors, pieds nus sur la pierre froide. Elle ne supporte pas d'être enfermée. Elle regarde les tours éteintes. Elle a le tambour à côté d'elle, et ne le touche pas.",
  "« Ta langue, dit-elle. Celle d'ici. Apprends-moi un mot. Un seul. Pour l'emporter. »",
  { if: { has: "nord:corbeau_blanc" }, text: "Puis, avant que tu aies répondu, elle dit deux syllabes. Elle les dit mal, avec la bouche du clan. Mais tu les reconnais. C'est un mot d'ici. Un mot qu'on dit aux enfants, le soir, sur le pas de la porte, quand il fait noir et qu'ils traînent encore dehors. *Rentre.* « Un corbeau blanc me l'a dit, dit-elle. Dans la grotte. Je ne savais pas ce que c'était. »" },
], { label: "Lui apprendre le mot pour « frère »", conf: 10, text: "Tu le lui dis. Elle le répète. Trois fois. À la troisième, c'est juste, ou presque. Elle hoche la tête. « Bon, dit-elle. Je le donnerai à quelqu'un. Plus tard. Quand je saurai à qui. » Elle reprend son tambour, et elle frappe, très doucement, deux coups, le rythme du mot. Le tambour le garde." },
  { label: "Lui apprendre le mot pour « neige »", conf: 5, text: "Il y en a sept, des mots pour la neige, ici. Tu les lui dis tous. Elle rit, pour la première fois depuis la plaine, un vrai rire de clan, la tête en arrière. « Sept ! dit-elle. Nous, on en a onze. » Elle te les dit. Vous comparez. Il y en a quatre qui se ressemblent. Elle les retient, ceux-là. Ce sont ceux qui comptent, dit-elle." }));
add(seul("lisandre", "Lisandre, qui ne chante pas", [
  "Lisandre est assise sur le lit, les genoux contre la poitrine. Elle ne fredonne plus. Elle se tait, et ça lui ressemble si peu que tu t'arrêtes sur le seuil.",
  "« Ta mère chante, dit-elle. J'ai entendu, dans la forêt. Une berceuse. Je l'ai apprise sans le vouloir, à la première écoute. Comme je fais toujours. » Elle te regarde. « Je n'ai pas le droit de la chanter. Elle n'est pas à moi. Mais je ne vais pas pouvoir l'oublier. Dis-moi ce que je dois en faire. »",
], { label: "« Chante-la. À quelqu'un qui n'arrive pas à dormir. »", conf: 10, text: "Elle réfléchit. « À un enfant, dit-elle. Là-haut. Un jour. » Elle hoche la tête. « Je ne dirai pas d'où elle vient. Je dirai : c'est une berceuse de très loin. Ce sera vrai. » Elle se détend, enfin. Elle allonge les jambes. Elle se met à fredonner, pas la berceuse, autre chose, une chanson à boire de Pallanche, faux, exprès, pour te faire rire." },
  { label: "« Garde-la pour toi. Ne la chante jamais. »", conf: 5, text: "« Une chanson qu'on ne chante pas, dit-elle, ça s'abîme. Ça devient lourd. » Elle soupire. « Mais d'accord. Je la porterai. Comme on porte une lettre qu'on ne doit pas ouvrir. » Elle pose la main sur sa poitrine, à l'endroit du souffle. « Elle est là. Elle ne sortira pas. » Tu ne sais pas si tu lui as donné un cadeau ou un poids. Elle non plus." }));

module.exports = C;
