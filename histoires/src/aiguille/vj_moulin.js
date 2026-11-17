// L'Île Folle-Aiguille · side story « Les ailes du père Gléau » (owes its question to Le Secret de maître Cornille:
// should one expose the pride of an old man who hides his ruin?). Act I, the Fanal: old Gléau's windmill on the cliff
// turns every day, and every Thursday his donkey carries his sacks of flour to Varnèse. Bringing him the weekly jug of
// cider, the child sees him at dawn leaving the back door of Rannou's new water mill with a sack on his back: he buys
// the flour he sells as his own, at a loss, with his last savings. The child tells the father (vj:dit), keeps the
// secret (vj:tait), or tells the old man that the secret is known (vj:lui). Wired in A1_jours.
module.exports = {
  passages: {
    VJ_ailes: { act: "I", title: "Les ailes du père Gléau", place: "falaise", ambiance: "nature",
      fx: { meet: "gleau" },
      text: [
        "Le moulin du père Gléau se dresse sur la falaise, à une demi-lieue du Fanal, au-dessus de la grève, une tour de pierre grise coiffée d'un toit pointu, avec quatre grandes ailes de toile rapiécée qui tournent du matin au soir, au vent de mer, en grinçant comme un vaisseau. On le voit de partout. Les pêcheurs s'en servent d'amer pour rentrer au port. Tu l'as vu tourner toute ta vie, tous les jours, même par calme plat, ce qui est un mystère que tu n'as jamais pris la peine d'éclaircir.",
        "Chaque samedi, ton père t'envoie lui porter une cruche de cidre, la même, depuis toujours, sans que tu saches quelle dette elle paie. Le père Gléau a soixante-dix ans, une barbe farineuse, des yeux d'enfant et un âne qui s'appelle Monseigneur. Il te reçoit sur le seuil, jamais à l'intérieur, il prend la cruche, il te donne une poignée de farine pour la mettre dans ta poche, « pour la chance », et il te parle de son moulin comme d'une femme. « Elle a de l'appétit, ma belle. Elle mange tout ce que la lande lui donne. »",
        "Ce samedi-là, tu pars avant l'aube, parce que ton père a besoin de toi au comptoir dans la matinée. Tu coupes par le bas, par la rivière, le long du nouveau moulin à eau du meunier Rannou, celui qui a coûté si cher et qui moud, dit-on, pour toute la côte. La porte de derrière est entrouverte. Dans la lueur grise, un vieil homme en sort, courbé sous un sac de farine, et charge le sac sur un âne. Il glisse une pièce dans la main du commis de Rannou. Il regarde autour de lui. L'âne s'appelle Monseigneur.",
      ],
      choices: [{ label: "Le suivre de loin, jusqu'à la falaise", to: "VJ_secret" }] },
    VJ_secret: { act: "I", title: "Les ailes du père Gléau", place: "falaise", ambiance: "nature",
      text: [
        "Il monte à la falaise par le chemin creux, lentement, en parlant à son âne. Il entre dans son moulin. Tu attends. Une heure plus tard, il ressort, avec trois sacs neufs, marqués à son nom, *Gléau, moulin de la Falaise*, d'une belle peinture bleue. Il les charge sur Monseigneur. Il prend le chemin de Varnèse, où c'est jeudi tous les jours pour quelqu'un. Il chantonne.",
        "Tu entres. La porte n'est pas fermée ; il n'y a rien à voler. En bas, la meule dormante est lisse comme un miroir, sans une rayure, sans un grain, avec une épaisse couche de poussière que personne n'a dérangée depuis des années. En haut, l'arbre tourne à vide, les engrenages tournent à vide, les ailes tournent à vide, et tout le moulin gémit et tremble comme une maison hantée, pour rien, pour le paysage, pour les pêcheurs qui rentrent. Dans un coin, il y a une pile de sacs de Rannou, vides, soigneusement pliés. Dans un autre, une boîte en fer-blanc, ouverte. Elle contient trois pièces.",
        "Tu comprends. Il achète chez Rannou la farine qu'il revend comme la sienne, et il la revend moins cher qu'il ne l'achète, parce qu'il faut bien que les gens la prennent. Il fait ça depuis des années. La boîte en fer-blanc était pleine, un jour. Elle sera vide avant l'hiver. Sur le seuil, en sortant, tu marches sur quelque chose : la cruche de cidre de la semaine dernière, encore pleine, bouchée. Il ne la boit pas. Il la garde. Il y en a d'autres, derrière la porte, alignées.",
      ],
      choices: [
        { label: "Rentrer tout raconter à ton père", fx: { flag: "vj:dit" }, to: "VJ_dit" },
        { label: "Garder le secret, et faire comme si tu n'avais rien vu", fx: { flag: "vj:tait" }, to: "VJ_tait" },
        { label: "Attendre le vieil homme au moulin, et lui dire que tu sais", fx: { flag: "vj:lui" }, to: "VJ_lui" },
      ] },
    VJ_dit: { act: "I", title: "Les ailes du père Gléau", place: "fanal_salle", ambiance: "village",
      text: [
        "Tu racontes tout à ton père, au comptoir, à voix basse, avant l'arrivée des pêcheurs. Il t'écoute en essuyant une chope, comme toujours. Il ne paraît pas surpris. Il dit : « Je me doutais. » Puis il pose la chope et regarde longtemps, par la fenêtre, les ailes qui tournent sur la falaise. Il dit que le père Gléau lui a prêté de l'argent, il y a vingt ans, quand il est arrivé à Varnèse avec sa jambe raide et rien d'autre, sans lui demander d'où il venait. La cruche de cidre, c'est l'intérêt. Il n'a jamais su comment rendre le capital.",
        "Le lundi, Lazare Hersant prend sa canne et descend, en boitant, jusqu'au moulin à eau de Rannou. Il y reste une heure. Tu ne sais pas ce qu'il dit. Le jeudi suivant, au marché, on apprend que le meunier Rannou cherche un homme d'expérience pour surveiller ses meules, un vrai meunier, à l'ancienne, qui sente le grain à l'oreille. Il a pensé au père Gléau. Il le fait dire par trois personnes, pour que ça ait l'air d'une idée générale.",
        "Le vieil homme refuse, d'abord, avec une colère magnifique. Puis il accepte, à une condition, qu'il fait porter par écrit : que ses ailes, à lui, sur la falaise, continuent de tourner le dimanche. Rannou accepte. On voit donc, tous les dimanches, au-dessus de la grève, un moulin qui tourne pour rien, et les pêcheurs qui rentrent s'en servent toujours d'amer. Le samedi, ton père t'envoie encore avec la cruche. Maintenant, le père Gléau la boit avec toi, sur le seuil. Il ne t'a jamais demandé qui avait parlé. Il le sait. Il te donne double poignée de farine.",
      ],
      choices: [{ label: "Reprendre les jours du Fanal", fx: { quest: "VJ" }, back: "A1_jours" }] },
    VJ_tait: { act: "I", title: "Les ailes du père Gléau", place: "falaise", ambiance: "nature",
      text: [
        "Tu ne dis rien. Tu poses la cruche de cidre sur le seuil, avec les autres, et tu repars. Le samedi suivant, tu reviens, à l'heure habituelle, par le chemin habituel. Le père Gléau t'attend sur le seuil, la barbe farineuse. Il prend la cruche. Il te parle de son moulin, de son appétit, de la lande qui le nourrit. Il te donne une poignée de farine, pour la chance. Tu la mets dans ta poche. Tu sais d'où elle vient. Tu le remercies.",
        "Tu reviens chaque samedi, et chaque samedi tu joues ton rôle, et il joue le sien, et le moulin tourne au-dessus de vous, pour rien, avec une fidélité de vieux chien. Tu découvres, à ta grande surprise, que ce mensonge partagé te rend content{e}, et qu'il a quelque chose de beau, comme une messe dite pour un mort. Tu découvres aussi que tu comptes, sans le vouloir, les pièces de la boîte en fer-blanc, chaque fois que tu passes devant la porte entrouverte. Elles diminuent.",
        "Quand la Cormorane t'emmènera, il en restera une. Tu ne le sais pas encore. Tu sais seulement, ce samedi-là, en redescendant la falaise, avec ta poignée de farine dans la poche, que tu as choisi de laisser un vieil homme se ruiner pour rester debout, et que tu ne sais pas si c'est du respect ou de la lâcheté, et que c'est peut-être la même chose quand on a seize ans et qu'on n'a pas d'argent.",
      ],
      choices: [{ label: "Reprendre les jours du Fanal", fx: { quest: "VJ" }, back: "A1_jours" }] },
    VJ_lui: { act: "I", title: "Les ailes du père Gléau", place: "falaise", ambiance: "nature",
      text: [
        "Tu l'attends assis{e} sur le seuil, la cruche entre les genoux. Il revient de Varnèse au soleil couchant, avec Monseigneur et ses sacs vides, en chantonnant. Il te voit. Il voit la porte ouverte derrière toi. Le chant s'arrête. Il devient tout pâle sous sa barbe farineuse, puis tout rouge, et il lève sur toi son bâton, et pendant une seconde tu crois qu'il va frapper. Puis le bâton retombe. Il s'assied à côté de toi, sur le seuil. Il demande, très bas : « Ton père sait ? » Tu dis non.",
        "Il parle. Il dit que le moulin de Rannou moud en un jour ce qu'il moulait en un mois, et plus fin, et moins cher, et que les gens ont raison, et qu'il le sait. Il dit que la meule s'est usée il y a six ans et qu'il n'avait pas de quoi en faire tailler une autre. Il dit que s'il arrête les ailes, il est mort, et que les pêcheurs n'auront plus d'amer, et que sa femme, qui est enterrée là, sous le figuier, au pied de la tour, ne les entendra plus grincer. Il dit qu'il a soixante-dix ans et qu'il n'a plus besoin que d'une seule chose : que personne ne sache.",
        "Puis il te demande un service. Le dernier, dit-il. Il voudrait, une fois, une seule, moudre du vrai grain, avec sa vieille meule usée, pour l'entendre chanter. N'importe quel grain. Le lendemain, tu montes au grenier du Fanal et tu prends, sans rien demander à personne, un demi-sac d'orge. Ce soir-là, au crépuscule, le moulin de la falaise moud. Mal, gros, avec un bruit de tonnerre. Le vieil homme pleure de joie, la farine jusqu'aux sourcils. Ton père, le lendemain, remarque que le sac d'orge a baissé. Il te regarde. Il ne pose pas de question. Il dit seulement : « La prochaine fois, prends le sac entier. »",
      ],
      choices: [{ label: "Reprendre les jours du Fanal", fx: { quest: "VJ" }, back: "A1_jours" }] },
  },
  extras: {
    people: {
      gleau: { name: "Le père Gléau", aka: ["le meunier de la falaise"], qui: "Vieux meunier dont le moulin à vent tourne sur la falaise, près du Fanal." },
    },
    quests: [
      { id: "VJ", act: "I", kind: "annexe", title: "Les ailes du père Gléau", start: "VJ_ailes", doit: "cornille", echo: ["vj:dit", "vj:tait", "vj:lui"] },
    ],
  },
};
