// Act III · walking a while on the white plain with one of those whose hand the child caught at the Rupture: Ysolde,
// Pie, Hylas (who sees again, here), Corbe, Lisandre, and Givre. One talk each, two replies. The child leads ("tu").
var A = { act: "III", noLead: true };
function P(o) { return Object.assign({}, A, o); }
function marche(who, title, text, a, b) {
  var o = {}, id = "III_m_" + who;
  o[id] = P({ title: title, place: "plaine", fx: { flag: "iii:marche=" + who }, text: text,
    choices: [{ label: a.label, fx: { conf: a.conf }, to: id + "_a" }, { label: b.label, fx: { conf: b.conf }, to: id + "_b" }] });
  o[id + "_a"] = P({ title: title, place: "plaine", text: [a.text], choices: [{ back: "III_plaine" }] });
  o[id + "_b"] = P({ title: title, place: "plaine", text: [b.text], choices: [{ back: "III_plaine" }] });
  return o;
}
function c(who, n) { var o = {}; o[who] = n; return o; }
var C = {};
function add(o) { for (var k in o) C[k] = o[k]; }

add(marche("ysolde", "Marcher avec Ysolde", [
  "Ysolde marche au pas, exactement, même ici, où le sol ne garde pas les traces. Tu marches à côté d'elle. Au bout d'un moment, elle dit : « Il n'y a pas d'ordres, ici. Personne à commander. Personne qui me commande. » Elle se tait. « Je ne sais pas marcher sans ordres. Je viens de m'en rendre compte. »",
], { label: "« Alors je t'en donne un : marche. »", conf: c("ysolde", 5), text: "Elle tourne la tête vers toi, et pour la première fois, elle rit. Un rire bref, rouillé, qui ne sert pas souvent. « À vos ordres », dit-elle. Et elle marche, et elle a l'air soulagée, et un peu honteuse de l'être." },
  { label: "« Tu apprends. Regarde, tu le fais. »", conf: c("ysolde", 10), text: "Elle baisse les yeux sur ses propres pieds, qui avancent. « C'est vrai », dit-elle, étonnée. Elle ralentit, exprès. Elle s'arrête. Elle repart, un peu plus vite. Elle essaie, comme une enfant qui découvre qu'elle peut choisir son pas. Tu te tais. Tu la laisses essayer." }));
add(marche("pie", "Marcher avec Pie", [
  "Pie marche les mains dans les poches, et il siffle, et le blanc avale le sifflement. Il siffle quand même. « Linette, dit-il tout à coup. Si elle est ici, quelque part. Si elle est tombée aussi. » Il ne finit pas.",
], { label: "« On la cherchera. »", conf: c("pie", 10), text: "« Dans tout ça ? » Il montre le blanc, d'un geste large. Puis il hausse les épaules. « D'accord. On la cherchera. Ça m'occupera. » Il recommence à siffler. Un peu plus fort. Tu reconnais l'air : une comptine de Pallanche, de celles qu'on chante aux petites filles pour les endormir." },
  { label: "« Elle n'est pas tombée. Elle est là-haut. Elle t'attend. »", conf: c("pie", 5), text: "« Tu n'en sais rien », dit-il. Mais il sort les mains de ses poches. Il marche plus vite. « Alors on se dépêche », dit-il, et il ne siffle plus, il compte ses pas, comme Hylas." }));
add(marche("hylas", "Marcher avec Hylas", [
  "Hylas voit, ici. Il regarde tout. Le blanc, tes mains, les marcheurs au loin, ses propres pieds. Il s'arrête souvent. « Je n'avais pas vu de couleur depuis trente ans, dit-il. Et il n'y en a pas ici. C'est presque drôle. »",
  "Il te regarde, longtemps, ton visage, comme il le lisait avec les doigts. « Tu ressembles à ta mère », dit-il. Puis il se mord la lèvre, comme quelqu'un qui en a trop dit.",
], { label: "« Tu la connaissais ? »", conf: c("hylas", 5), text: "Il prend son temps. « Je l'ai vue une fois, dit-il enfin. Une seule. Elle chantait. » Il se remet à marcher. Il se tait, et tu respectes son silence. Tu sens qu'il y a une porte, là, et qu'il tient la poignée des deux mains." },
  { label: "Ne rien demander, et marcher", conf: c("hylas", 10), text: "Tu marches à côté de lui sans rien demander. Au bout d'un long moment, il dit : « Merci. » La raison t'échappe. Lui, si. Il regarde ses mains, de nouveau, et il dit, tout bas : « Bientôt. Je te le dirai bientôt. Pas ici. »" }));
add(marche("corbe", "Marcher avec Corbe", [
  "Corbe marche pieds nus. Elle a ôté ses bottes, et elle les porte à la main. « Je veux sentir, dit-elle. Ce qu'elle sent, elle. La Mère. Ce qu'elle a sous les pieds. »",
  "Elle s'arrête. « Rien. C'est ça, le pire. C'est tiède, sans saison. Ce n'est rien. Elle vit dans rien. »",
], { label: "« Peut-être qu'elle aussi, elle a froid. »", conf: c("corbe", 10), text: "Corbe te regarde comme si tu avais dit un blasphème. Puis elle réfléchit. « Froid de rien, dit-elle lentement. Froid de ne rien sentir. » Elle remet ses bottes. « Au clan, on lui donne des noms pour la nourrir. Peut-être qu'on aurait dû lui donner autre chose. Une couverture. » Elle rit, d'un rire étrange. Elle ne rit pas vraiment." },
  { label: "« Remets tes bottes. »", conf: c("corbe", 5), text: "Elle obéit, en grommelant, et ça la fait sourire. « Tu parles comme ma mère », dit-elle. Puis, après un temps : « C'est bien. Il faut quelqu'un qui parle comme ma mère, ici. »" }));
add(marche("lisandre", "Marcher avec Lisandre", [
  "Lisandre ne chante plus. Elle a essayé, au réveil, et le blanc a avalé la note. Elle marche les bras croisés, comme si elle avait froid. Elle n'a pas froid. « Une chanteuse qui ne peut pas chanter, dit-elle. Tu sais ce que c'est ? Rien. Une femme en robe déchirée, dans le blanc. »",
], { label: "« Parle, alors. Ça résonne. »", conf: c("lisandre", 10), text: "Elle te regarde, étonnée. Puis elle parle. Elle te raconte Vasselin, la cour, la reine, les intrigues, les chansons commandées, Ilan. Elle parle pendant une heure, et sa voix ne se perd pas, ici, quand elle parle. Seulement quand elle chante. « C'est la première fois, dit-elle à la fin, que quelqu'un m'écoute parler aussi longtemps sans me demander une chanson. »" },
  { label: "Fredonner, toi, n'importe quoi", conf: c("lisandre", 5), text: "Tu fredonnes. Faux. Une chanson de moulin. Le blanc l'avale aussi, mais Lisandre l'a entendue, et elle grimace. « Quelle horreur, dit-elle. Tu chantes comme une porte. » Mais elle a décroisé les bras." }));
add(marche("givre", "Marcher avec Givre", [
  "Givre trotte devant toi sur la plaine, puis revient, puis repart. Ici, il est chez lui. Il grandit un peu, à chaque pas, comme s'il se nourrissait de l'air. Il rapporte des choses, de temps en temps, et les pose à tes pieds : un bouton, une clé, une dent de lait.",
], { label: "Les ramasser", conf: c("givre", 5), text: "Tu les ramasses, une par une. Elles ne pèsent rien. Elles s'effacent dans ta main au bout de quelques pas, comme une buée. Givre te regarde faire, satisfait, et repart en chercher d'autres, inlassablement." },
  { label: "Lui dire de les manger", conf: c("givre", 10), text: "Il te regarde, l'œil brillant, comme un chien à qui on vient de donner la permission. Il mange la dent de lait d'abord. Puis la clé. Il grandit encore un peu. Il vient se frotter contre tes jambes, et il est plus froid qu'avant, et plus solide." }));

module.exports = C;
