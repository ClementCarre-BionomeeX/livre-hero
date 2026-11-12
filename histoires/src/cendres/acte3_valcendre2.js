// Act III · two more corners of Valcendre (the child leads, "tu" masculine), off III_v_porte: the weaver of lineages,
// since the Orsans weave their families instead of writing them, who finds the child's cut thread (iii:fil_double); and the
// north gate, where an old guard has been waiting three hundred and twelve years to be relieved (iii:releve).
var A = { act: "III", noLead: true, place: "valcendre" };
function P(o) { return Object.assign({}, A, o); }
var BACK = [{ back: "III_v_porte" }];
module.exports = {
  III_v_tisserand: P({ title: "Le métier des lignées",
    text: [
      "Dans une cour, sous un auvent, un vieux tisserand travaille à un métier si long qu'il sort de l'atelier, traverse la cour et se perd dans la rue suivante. Une bande d'étoffe large comme la main, qui court sur des centaines de pas, enroulée sur des tambours de bois. On n'écrit pas, chez les Orsans. On tisse. Chaque famille est un fil, d'une couleur à elle. Quand deux familles s'unissent, les fils se croisent. Quand quelqu'un meurt, son fil s'arrête, noué.",
      "Le tisserand te voit. Il descend de son banc. Il déroule la bande, longtemps, jusqu'à un fil d'un blanc presque bleu, le fil des rois, qu'il suit du doigt, et à côté, croisé avec lui, un fil gris comme une forêt brûlée. Puis un troisième, tout court, qui part des deux autres, et qui s'arrête. Pas noué. Coupé. « Toi, dit-il. On t'a coupé là, il y a vingt ans. Je n'ai pas fait de nœud. Je ne savais pas si tu étais mort. »",
    ],
    choices: [
      { label: "Tirer un fil de ta chemise, celle qu'Agathe a cousue, et le lui donner", fx: { flag: "iii:fil_double", ep: ["perso", 600] }, to: "III_v_tisserand_fil" },
      { label: "Lui demander de laisser le fil comme il est", fx: { ep: ["perso", 400] }, to: "III_v_tisserand_coupe" },
    ] }),
  III_v_tisserand_fil: P({ title: "Couleur de farine",
    text: [
      "Tu tires un fil de l'ourlet de ta chemise. Un fil de lin écru, couleur de farine, que les mains d'Agathe ont tordu un soir d'hiver, à côté du four. Le tisserand le prend. Il le regarde contre la lumière, longtemps, comme on regarde une pierre précieuse dont on ne connaît pas le nom.",
      "Puis il le noue à ton fil coupé, sans un mot, et il reprend la navette. Tu le regardes faire : ton fil repart, maintenant, blanc et gris et couleur de farine, tressé, sur une main de longueur. Il s'arrête. Il te montre. « Personne n'a jamais eu deux couleurs, ici, dit-il. Je ne sais pas ce que ça veut dire. Je trouve ça beau. » Il pose la navette. Il te laisse la suite.",
    ],
    choices: [{ back: "III_v_porte" }] }),
  III_v_tisserand_coupe: P({ title: "Le fil coupé",
    text: ["Il hoche la tête. Il ne discute pas. Il réenroule la bande, lentement, tambour après tambour, jusqu'à ce que ton fil coupé disparaisse sous des siècles d'autres fils. « Comme tu veux, dit-il. Mais je ne fais pas de nœud. Tant qu'il n'y a pas de nœud, on peut toujours reprendre. » Il remonte sur son banc. La navette repart. Tu restes un moment dans la cour à écouter le métier battre, comme un cœur de bois, pour trois cents ans de gens."],
    choices: [{ back: "III_v_porte" }] }),
  III_v_porte_nord: P({ title: "La porte du nord",
    text: [
      "La porte du nord de Valcendre ne donne sur rien. Au-delà de l'arche, le blanc, sans route, sans horizon. Personne ne passe par là. Mais il y a une sentinelle. Un vieil homme en armure d'un autre âge, appuyé sur sa lance, la barbe jusqu'à la ceinture, qui regarde le blanc sans ciller.",
      "Il te voit. Il se redresse, péniblement. « La relève ? » demande-t-il. Il y a dans sa voix un espoir si vieux, si usé, que tu as honte de ne pas l'être. « On m'a dit qu'on viendrait me relever à la cloche de vêpres. Je ne l'ai pas entendue. Elle n'a pas sonné, n'est-ce pas ? Je l'aurais entendue. »",
    ],
    choices: [
      { label: "Prendre sa lance, et lui dire d'aller dormir : tu es la relève", fx: { flag: "iii:releve", ep: ["perso", 800] }, to: "III_v_porte_nord_releve" },
      { label: "Lui demander ce qu'il garde, contre un blanc où rien ne bouge", to: "III_v_porte_nord_quoi" },
    ] }),
  III_v_porte_nord_releve: P({ title: "La relève",
    text: [
      "Il te tend la lance. Elle est lourde, et froide, et plus haute que toi. Il te regarde la prendre, la soupeser, la planter à côté de toi comme il le faisait. « Pas comme ça, dit-il. Le pied gauche devant. Sinon, au bout de cent ans, on a mal au dos. » Tu mets le pied gauche devant.",
      "Il te salue. Il s'en va, par les rues, très lentement, vers une maison qu'il n'a pas vue depuis trois cent douze ans. Tu montes la garde. Une heure. Rien ne vient du blanc. À la fin de l'heure, tu poses la lance contre l'arche, le pied gauche devant, pour le prochain. Quelque part dans la ville, une cloche sonne vêpres, pour la première fois depuis trois siècles. Tu ne sais pas qui l'a sonnée. Tu crois le savoir.",
    ],
    choices: BACK }),
  III_v_porte_nord_quoi: P({ title: "Ce qu'il garde",
    text: ["Il regarde le blanc, longtemps. « Les autres, dit-il. Ceux d'avant nous. Ils sont là-dedans, quelque part. Les premiers Orsans, ceux qui ne savaient même pas encore qu'ils étaient orsans. Un jour, ils voudront revenir. Il faudra quelqu'un à la porte pour leur dire leur nom. » Il se tait. « Je ne les connais pas. Je leur dirai le mien. C'est tout ce que j'ai. » Il se remet en position, le pied gauche devant, et il ne te regarde plus."],
    choices: BACK }),
};
