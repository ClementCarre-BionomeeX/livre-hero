// Act III · the witnesses of the trial (the child leads, "tu" masculine). After each founder's hour, someone in the
// crowd of Valcendre who was there that night comes forward: the old warrior who faced Aldric, the shepherd whose
// pasture became Berthe's field, Osric's cousin, the boy Raoul killed first, the prisoner Anselin wrote down. One
// passage each, two replies, back to III_p_place. Shown only once the founder has been judged.
var A = { act: "III", noLead: true, place: "valcendre" };
function P(o) { return Object.assign({}, A, o); }
function temoin(id, title, text, a, b) {
  var o = {};
  o[id] = P({ title: title, text: text, choices: [{ label: a.label, fx: { ep: ["perso", 300] }, to: id + "_a" }, { label: b.label, fx: { ep: ["perso", 300] }, to: id + "_b" }] });
  o[id + "_a"] = P({ title: title, text: [a.text], choices: [{ back: "III_p_place" }] });
  o[id + "_b"] = P({ title: title, text: [b.text], choices: [{ back: "III_p_place" }] });
  return o;
}
var C = {};
function add(o) { for (var k in o) C[k] = o[k]; }

add(temoin("III_t_tour", "Le vieux guerrier", [
  "Un vieil homme sort de la foule, appuyé sur une lance sans fer. Une cicatrice lui barre le visage, du front au menton. « Je l'ai vu, dit-il en regardant la statue de l'homme à la tour. Ce soir-là. De loin. Il avait faim. Il a mangé debout, en donnant des ordres. »",
  "Il se tourne vers toi. « Je l'ai haï trois cents ans. Et tout à l'heure, pendant que tu étais dedans, je l'ai vu frotter son genou, comme mon père frottait le sien, avant la pluie. » Il serre sa lance. « Je ne sais pas quoi faire de ça. »",
], { label: "« Rien. Le garder. Les deux à la fois. »", text: "Il réfléchit, longtemps. « Les deux à la fois, répète-t-il. La haine, et le genou. » Il hoche la tête. « C'est lourd. » Il retourne dans la foule, lentement, et tu le vois, de loin, frotter son propre genou, sans y penser, en attendant la suite." },
  { label: "« Il ne mérite pas qu'on pense à son genou. »", text: "« Peut-être, dit-il. Mais maintenant, j'y pense. Tu me l'as montré. » Il n'a pas l'air de t'en vouloir. Il a l'air fatigué. « Trois cents ans à haïr un homme sans genou. C'était plus simple. » Il retourne dans la foule. Il ne frotte pas son genou. Il s'en empêche, tu le vois." }));
add(temoin("III_t_gerbe", "Le berger", [
  "Un berger, jeune, une houlette à la main, s'avance jusqu'au bord de la place. « Le champ de la Gerbe, dit-il. Celui qui a nourri trois villages. C'était notre pâture. Mes brebis y paissaient depuis le temps de mon arrière-grand-père. »",
  "« Elle avait faim, je sais. Je l'ai senti, moi aussi, pendant que tu y étais : quatre cents bouches, et le blé qui ne poussait plus. » Il se tait. « Elle aurait pu demander. On avait de l'herbe pour tout le monde. On aurait partagé. Personne n'a demandé. »",
], { label: "« Elle ne savait pas qu'on pouvait demander. »", text: "Il te regarde, surpris. Puis il rit, un peu, sans joie. « C'est ça le pire, dit-il. Ils ne savaient pas. Ils sont arrivés avec leurs registres, et dans leurs registres, il n'y avait pas de ligne pour demander. » Il plante sa houlette. « Si on la rend, là-haut, ses enfants sauront peut-être qu'on peut demander. C'est tout ce que je voudrais. »" },
  { label: "« Tu aurais partagé, vraiment ? »", text: "Il réfléchit, honnêtement. « Je ne sais pas, dit-il. Mon père, peut-être pas. Moi, j'aurais voulu. » Il hausse les épaules. « On ne saura jamais. C'est ce qu'ils nous ont pris, aussi. La chance de savoir si on aurait été bons. » Il retourne vers la foule. Il a l'air de quelqu'un qui vient de comprendre une chose, et qui aurait préféré ne pas." }));
add(temoin("III_t_barque", "La cousine", [
  "Une femme d'une quarantaine d'années, un châle sur la tête, se fraie un passage. Elle regarde la statue de l'homme à la barque comme on regarde un parent qui a mal tourné. « Osric, dit-elle. Le fils de ma tante. On jouait ensemble, petits, sur la rivière. C'est moi qui lui ai appris où étaient les bancs de sable. »",
  "« Il a mené les barques. Par la rivière que je lui avais apprise. » Elle serre son châle. « Ma tante est morte cette nuit-là, dans sa maison, au bord de l'eau. Il le savait. Il est passé devant, à la perche, dans le noir. Il n'a pas tourné la tête. »",
], { label: "« Il a tourné la tête. Je l'ai senti. Une seconde. »", text: "Elle te regarde, longtemps. Elle cherche si tu mens. Tu ne sais pas toi-même : pendant l'heure, devant une maison au bord de l'eau, il t'a semblé que la perche ralentissait. Tu l'as senti, ou tu as voulu le sentir. « Une seconde, dit-elle. Trois cents ans pour une seconde. » Elle ferme les yeux. « C'est peu. C'est plus que rien. » Elle reste au bord de la place jusqu'à la fin du procès." },
  { label: "« Tu veux qu'on le garde ici, dans la glace ? »", text: "« Je ne sais pas ce que je veux, dit-elle. Je veux mon cousin, celui de la rivière, celui d'avant. Celui-là, dans la glace, je ne le connais pas. » Elle se détourne. « Fais ce que tu veux de lui. Celui que je veux, personne ne peut me le rendre. Ni toi, ni l'Hiver. »" }));
add(temoin("III_t_cerf", "Le premier", [
  "Un garçon maigre, une fronde passée à la ceinture, sort de la foule et vient se planter devant la statue du chevalier au cerf. Il a une tache sombre sur sa tunique, à la poitrine, qui ne sèche pas depuis trois cents ans.",
  "« C'était moi, dit-il, sans se retourner. Le premier qui lui a tenu tête, après la vieille qui chantait. Il avait dix-neuf ans, moi seize. J'avais une fronde. Il avait peur, je l'ai vu. Il avait encore plus peur que moi. » Il touche la tache. « Il a pleuré, après. Je l'ai vu, en tombant. Il a pleuré sur moi. Je ne sais pas si ça compte. »",
], { label: "« Ça compte. Pas assez. Mais ça compte. »", text: "Il hoche la tête. « Pas assez, répète-t-il. Oui. » Il regarde encore la statue, le visage de dix-neuf ans figé dans la glace, la bouche ouverte. « Il est resté jeune, lui aussi, dit-il. On est restés jeunes tous les deux. Ça fait drôle. » Il retourne dans la foule. Il marche comme un garçon de seize ans. Il le sera toujours." },
  { label: "« Qu'est-ce que tu voudrais lui dire ? »", text: "Il réfléchit. « Que j'avais un chien, dit-il enfin. Qui m'attendait. Il ne le savait pas. Personne ne le lui a dit. » Il se tait. « C'est tout. Qu'il sache qu'il y avait un chien qui attendait. » Il te regarde. « Tu le lui diras, si tu le rends ? Là-haut, à ceux de sa maison ? » Tu ne sais pas comment. Tu dis oui." }));
add(temoin("III_t_plume", "La prisonnière", [
  "Une femme très vieille, toute petite, s'avance en s'appuyant sur deux enfants. Elle s'arrête devant la statue de l'homme à la plume. Elle le regarde avec une curiosité tranquille, comme on regarde un oiseau rare.",
  "« Il m'a demandé mon nom, dit-elle. Dans la grange. Puis les autres, les cent que je portais. Je les lui ai dits. Tous. Il les a écrits. Il avait froid, il tremblait, il les a écrits quand même, un par un, sans en sauter un. » Elle sourit. « Après, ils m'ont tuée. Mais il les avait écrits. C'est le seul, de tous ceux d'en haut, qui me les ait jamais demandés. »",
], { label: "« Il les a écrits pour qu'on les oublie. »", text: "« Je sais, dit-elle. Je sais pourquoi il les a écrits. » Elle hausse ses petites épaules. « Mais il les a écrits. Ils sont quelque part, dans un livre. Ce qu'on écrit pour oublier, quelqu'un peut le lire pour se souvenir. Il ne le savait pas. Moi, si. » Elle se fait reconduire dans la foule par les deux enfants, très droite." },
  { label: "« Tu voudrais qu'on le rende ? »", text: "Elle réfléchit, la tête penchée. « Oui, dit-elle. Qu'ils sachent, là-haut, qu'il a écrit nos noms. Et qu'ils aillent les lire. Le livre doit bien être quelque part. Les livres, ça ne se perd pas comme les gens. » Elle te tapote la main. « Cherche-le, toi. Tu as l'air de quelqu'un qui cherche. » Elle repart. Tu crois savoir où il est, ce livre. Tu te promets d'aller le lire." }));

module.exports = C;
