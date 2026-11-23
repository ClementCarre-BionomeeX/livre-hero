// « Le Mot de Monsieur Orbe » · four endings: the word said by the servant, by Cyprien, by Ottilie, or by nobody.
// The sealed codicil is read in the first three.
function fin(id, title, place, text) { return { act: "I", title: title, place: place, end: true, fx: { flag: "fin:" + id }, text: text }; }
var CODICILLE = "*À qui a dit le mot : il recevra de ma fortune exactement assez, c'est-à-dire de quoi vivre, se loger, manger à sa faim et inviter ses amis le dimanche, et pas un sou de plus. Le reste ira à ceux qui n'en ont jamais eu assez, au Bas-Quartier, en parts égales. Je n'ai pas su le dire. J'ai su l'écrire. Orbe.*";
module.exports = {
  F_toi: fin("toi", "Exactement assez", "salon", [
    "Tu t'approches de la petite table ronde. Maître Paraphe lève les yeux, pour la première fois de l'après-midi. Tu dis le mot, à voix basse, comme on rend une chose qu'on vous a prêtée : « Assez. »",
    "Le notaire ne sourit pas. Il hoche la tête, une fois, avec la satisfaction d'un homme devant une clause bien rédigée. Il brise le sceau du codicille, et il le lit, lentement, en laissant tomber chaque mot sur la table :",
    CODICILLE,
    "Cyprien, qui est entré en courant au mot *assez*, s'assied par terre, au milieu de ses assiettes. Ottilie, au dernier rang, rit doucement dans ses pâquerettes.",
    "Tu reçois exactement assez : la cuisine ronde, une petite rente, et le droit d'inviter tes amis le dimanche. Le reste descend au Bas-Quartier, en parts égales, dans des camions ronds. Le premier dimanche, tu invites Ottilie. Elle apporte des pâquerettes. Vous les mettez dans un vase. Personne ne demande s'il en faut d'autres.",
  ]),
  F_cyprien: fin("cyprien", "Le neveu", "salon", [
    "Tu rattrapes Cyprien dans l'escalier rond, et tu lui souffles le mot à l'oreille. Il s'arrête net. Il le répète, pour lui, sans comprendre. Puis il comprend, et il court au salon, en renversant tout sur son passage, et il le crie devant Maître Paraphe, à pleine voix, comme on crie *encore* : « ASSEZ ! »",
    "Maître Paraphe hoche la tête. Il brise le sceau du codicille, et il le lit, lentement :",
    CODICILLE,
    "Cyprien reste debout, la bouche ouverte, au milieu du salon rond. Il a dit le mot. Il a dit le seul mot qu'il ne savait pas dire, et c'est ce mot qui lui a pris la fortune. Il proteste, il plaide, il demande à Maître Paraphe s'il peut retirer ce qu'il a dit. « On ne retire pas un mot, Monsieur, dit le notaire. C'est la seule chose qu'on ne puisse pas racheter. »",
    "Cyprien reçoit exactement assez. Il le trouve insuffisant, chaque jour, pendant un an. Puis, un dimanche, il invite des amis, faute de mieux. Il ne se rappelle pas avoir jamais passé une meilleure journée. Il ne te le pardonne pas. Il te le dit chaque dimanche, en te servant du gâteau.",
  ]),
  F_ottilie: fin("ottilie", "Les pâquerettes", "salon", [
    "Tu t'assieds à côté d'Ottilie, au dernier rang, et tu lui dis le mot, tout bas. Elle te regarde. « Je le connais, dit-elle. Je le lui disais tous les dimanches. » Elle se lève, traverse le salon rond, pose une pâquerette sur la petite table du notaire, et dit, simplement : « Assez. »",
    "Maître Paraphe la regarde longuement. Puis il brise le sceau du codicille, et il le lit :",
    CODICILLE,
    "Ottilie écoute jusqu'au bout. Puis elle se tourne vers toi. « Il avait donc compris, dit-elle. Le dimanche. Il me regardait dire non. » Elle sourit, et elle pleure un peu, ce qui, chez elle, va ensemble.",
    "Elle reçoit exactement assez, et elle trouve que c'est beaucoup. Elle t'engage, à la maison ronde, pour qu'il y ait quelqu'un le dimanche. Le reste de la fortune descend au Bas-Quartier. Cyprien fait un procès, qu'il perd, et qui lui coûte exactement ce qu'il avait de trop.",
  ]),
  F_club: fin("club", "Le Club n'en fera rien", "salon", [
    "Le dernier grain de sable tombe. Maître Paraphe se lève, range le sablier, et prononce, d'une voix égale : « Personne n'a dit le mot. Conformément au testament, la fortune de Monsieur Orbe revient au Club des Inaccessibles. »",
    "Le codicille reste scellé. Le notaire le glisse dans sa redingote, côté cœur, sans l'ouvrir. On ne saura jamais ce qu'il disait. Cyprien hurle tous les mots qu'il connaît, un par un, au plafond rond. Ottilie reprend ses pâquerettes, et s'en va par le jardin, qui est rond.",
    "Le Club des Inaccessibles reçoit la fortune par lettre recommandée, ne l'ouvre pas, ne la place pas, ne la dépense pas. Il n'en fait rien, comme le testament l'avait prévu. Elle dort, quelque part, dans des banques sans murs, et elle grossit toute seule, ronde, sans angle par où la saisir.",
    { if: { has: "mot:trouve" }, text: "Toi, tu savais. Tu as gardé le mot pour toi, jusqu'au bout, peut-être par prudence, peut-être par fidélité. Le soir, à la cuisine, tu remplis la boîte à biscuits, par habitude. Tu en manges un. Tu t'arrêtes là. Tu ne dis rien. Tu sais lequel." },
  ]),
};
