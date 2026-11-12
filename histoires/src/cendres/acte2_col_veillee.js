// Act II · the last night at the col de l'Ourse, before the rite, for Corbe's company (Corbe leads, "tu" feminine):
// one talk with each companion who walked north, two replies each. Linked from II_N5_col.
var N = { act: "II", noLead: true };
function P(o) { return Object.assign({}, N, o); }
function col(who, title, text, a, b) {
  var o = {}, id = "II_C5_" + who, ca = {}, cb = {};
  ca[who] = a.conf; cb[who] = b.conf;
  o[id] = P({ takes: "night", title: title, place: "col", text: text,
    choices: [{ label: a.label, fx: { conf: ca }, to: id + "_a" }, { label: b.label, fx: { conf: cb }, to: id + "_b" }] });
  o[id + "_a"] = P({ title: title, place: "col", text: [a.text], choices: [{ label: "Revenir au feu du clan", to: "II_N5_col" }] });
  o[id + "_b"] = P({ title: title, place: "col", text: [b.text], choices: [{ label: "Revenir au feu du clan", to: "II_N5_col" }] });
  return o;
}
var C = {};
function add(o) { for (var k in o) C[k] = o[k]; }

add(col("enfant", "L'enfant, face à la déchirure", [
  "L'enfant de Sauvelune est assis seul, à la limite des cent pas, là où personne du clan ne s'avance. Il regarde la déchirure. Le blanc, derrière, bouge doucement, comme un rideau devant une fenêtre ouverte.",
  "« J'ai déjà vu ça, dit-il quand tu t'assieds. En rêve. Toutes les nuits, depuis toujours. Je croyais que c'était un rêve. » Il se tait. « Ça m'appelle. Pas avec une voix. Comme une odeur de maison. »",
], { label: "« Ne l'écoute pas. »", conf: 5, text: "« Je n'écoute pas, dit-il. Je l'entends. Ce n'est pas pareil. » Il se lève, recule de dix pas, se rassied. Plus loin de la déchirure. Il te regarde, pour voir si ça te suffit. Ça ne te suffit pas. Ça suffira pour cette nuit." },
  { label: "« Alors on ira voir. Ensemble. »", conf: 10, text: "Il te regarde, surpris. Personne ne lui a jamais dit ça. Tout le monde lui dit de ne pas y aller. « Ensemble », répète-t-il. Puis il sourit, le premier vrai sourire depuis Sauvelune, et il dit : « Tu ne sais pas lire, et moi je ne sais pas qui je suis. On fera la paire. »" }));
add(col("ysolde", "Ysolde, qui affûte", [
  "Ysolde affûte son épée, à l'écart, sur une pierre plate. Elle l'a déjà affûtée trois fois aujourd'hui. Elle ne s'en rend pas compte.",
  "« Ton rite, dit-elle sans lever les yeux. Demain. Qu'est-ce qu'il te demande, exactement ? » Tu lui dis. Elle s'arrête d'affûter. « Et si tu refuses ? » Tu lui dis aussi. Elle reprend la pierre. « Chez nous, on appelle ça un ordre. Tu obéis, ou tu désertes. Il n'y a rien entre les deux. »",
], { label: "« Il y a peut-être quelque chose entre les deux. »", conf: 10, text: "Elle s'arrête. Longtemps. « Si tu le trouves, dit-elle enfin, montre-le-moi. » Elle remet l'épée au fourreau. Elle ne l'affûte plus de la nuit. Elle reste assise à côté de toi, à regarder le feu, et c'est la première fois que tu la vois les mains vides." },
  { label: "« Et toi, qu'est-ce que tu as choisi, à la Lisse ? »", conf: 5, text: "Elle te regarde. Ses yeux glissent, comme chaque fois qu'on dit ce nom. « Je ne sais pas, dit-elle. Je ne me souviens pas. » Elle reprend sa pierre. Elle affûte, plus fort. « C'est peut-être ça, le quelque chose entre les deux. Ne pas savoir ce qu'on a choisi. Ne fais pas comme moi. »" }));
add(col("pie", "Pie, qui compte les étoiles", [
  "Pie est couché sur le dos, sur une peau de renne, les mains sous la tête. Il compte les étoiles. Il en est à quatre cent douze. Il recommence chaque fois qu'il se trompe.",
  { without: "linette", text: "« À Pallanche, on ne les voit pas, dit-il. Trop de fumée. Linette n'en a jamais vu autant. » Il se tait. « Si elle était là, elle saurait leurs noms. Elle sait tout. Elle les aurait lus quelque part. »" },
  { with: "linette", text: "« À Pallanche, on ne les voit pas, dit-il. Trop de fumée. Linette n'en avait jamais vu autant. » Il se tait. « Elle m'a demandé leurs noms. Elle croit que tout a un nom, écrit quelque part. Je n'ai pas su quoi lui répondre. »" },
], { label: "« Donne-leur des noms, toi. »", conf: 10, text: "Il réfléchit. Puis il pointe le doigt. « Celle-là, la Veuve. Celle-là, le Borgne. Celle-là, Corneille, la petite qui clignote, parce qu'il ne savait jamais où il en était. » Il en nomme une vingtaine, des gens de sa rue. Il garde la plus brillante pour la fin. Il ne la nomme pas. Il la regarde, et tu sais pour qui elle est." },
  { label: "T'allonger à côté de lui, et compter aussi", conf: 5, text: "Vous comptez. À deux, on se trompe plus vite. Vous recommencez dix fois. Vous riez, la dixième. Le clan, autour du feu, vous regarde rire, et ne comprend pas, la veille d'un rite, ce qu'il y a de drôle à compter les étoiles." }));
add(col("hylas", "Hylas, qui écoute le col", [
  "Hylas est debout, face au nord, sa canne plantée dans la neige. Il écoute. « Il y a une ville, là-bas, dit-il. Je l'entends. Des cloches, des pas, des voix. Très loin. Une ville entière qui vit, de l'autre côté. »",
  "Il tourne vers toi ses yeux blancs. « J'ai fait une chose, il y a vingt ans, Corbe. J'ai pris un enfant d'une femme qui chantait, et je l'ai porté de ce côté-ci. Je ne sais pas si j'ai bien fait. Demain, je le saurai peut-être. »",
], { label: "« Quel enfant ? »", conf: 5, text: { with: "enfant",
    text: "Il ne répond pas. Il regarde, à sa façon, vers l'endroit où l'enfant de Sauvelune dort, ou ne dort pas. Puis il dit : « Ce n'est pas à moi de le dire. Pas encore. » Il reprend sa canne. « Je te l'ai dit à toi parce que tu ne sais pas lire. Tu ne peux pas l'écrire. Tu peux seulement t'en souvenir. »",
    else: "Il ne répond pas. Il tourne la tête vers le sud, du côté où marche l'autre compagnie, et il la garde tournée un moment. Puis il dit : « Ce n'est pas à moi de le dire. Pas encore. » Il reprend sa canne. « Je te l'ai dit à toi parce que tu ne sais pas lire. Tu ne peux pas l'écrire. Tu peux seulement t'en souvenir. »" } },
  { label: "« Tu as bien fait. Tu le sauras demain. »", conf: 10, text: "Il rit, doucement. « Tu ne sais même pas de quoi je parle. » Non. « Et tu me dis quand même que j'ai bien fait. » Oui. Il hoche la tête. « Les gens du clan sont étranges, dit-il. Ou bien c'est toi. » Il pose une main sur ton épaule, une seconde, puis il retourne s'asseoir près du feu." }));
add(col("rodric", "Rodric, qui ne dort pas", [
  "Rodric ne dort pas. Il est assis, la hache sur les genoux, le dos contre un cairn, et il regarde la déchirure comme on regarde l'autre rive, à la guerre, la nuit avant l'assaut.",
  "« Chez moi, dit-il dans son esquarrois cassé, la veille d'une bataille, on dit les noms. Ceux qui sont tombés avant. Pour qu'ils viennent avec nous. » Il te regarde. « Chez toi, aussi, je crois. Ton rite. C'est pareil. »",
], { label: "« Dis-moi tes noms. »", conf: 10, text: "Il te les dit. Lentement. Des noms corvannais, avec des consonnes que ta langue ne connaît pas. Sa femme. Ses deux frères. Un village entier, sur un pont. Il les dit tous, et ça prend longtemps, et à la fin il dit : « Maintenant, tu les sais. Si je tombe, ils ne tombent pas avec moi. »" },
  { label: "« Ce n'est pas pareil. Nous, on les donne. »", conf: 5, text: "Il réfléchit. « Vous les donnez à la Mère, dit-il. Nous, on les garde pour nous. » Il hausse ses énormes épaules. « Je ne sais pas qui a raison. Je sais que les miens, je ne les donnerai à personne. Même pas à une Mère. Surtout pas à une Mère. »" }));
add(col("linette", "Linette, sous la peau de renne", [
  "Linette s'est roulée dans une peau de renne, près du feu des enfants du clan. Elle ne dort pas. Elle a l'œil ouvert, qui brille. Elle t'a fait signe.",
  "« Les enfants du clan, chuchote-t-elle. Ils m'ont demandé mon nom. Je leur ai dit Linette. Et puis ils m'ont demandé l'autre. » Elle fronce les sourcils. « Je leur ai dit Page Onze. Ils ont ri. Ils ont dit que ce n'était pas un nom. »",
], { label: "« Ils ont raison. »", conf: 10, text: "Elle te regarde, longtemps. Puis elle hoche la tête, très sérieusement, comme une greffière qui paraphe une ligne. « Alors je n'en ai qu'un, dit-elle. Linette. C'est moins que les autres. » Elle réfléchit. « C'est plus facile à garder. » Elle ferme les yeux, et elle s'endort, d'un coup." },
  { label: "« Choisis-en un autre. Un vrai. Du clan. »", conf: 5, text: "Elle réfléchit longtemps. Puis elle te demande comment on dit, dans la langue du clan, la petite flamme qui reste quand le feu est presque éteint. Tu le lui dis. Elle le répète, trois fois, en se trompant la première. « Celui-là, dit-elle. Mais en secret. Je ne le dirai qu'à Pie. »" }));

module.exports = C;
