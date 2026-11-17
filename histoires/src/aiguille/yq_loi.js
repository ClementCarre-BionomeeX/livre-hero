// L'Île Folle-Aiguille · act IV, followed by the cook (second reading): « La loi de la plage » (owes its question to
// Billy Budd: must a chief apply the law of his band to a man he knows to be innocent at heart?). Ewen Riou, a topman
// of nineteen who stammers when he is angry, is called a thief by Boucaut, cannot answer, and strikes him; Boucaut falls
// against a rock and does not wake. The men want the old custom of the coast: the hand that strikes a brother is nailed
// to the mast. Fargue applies it (fargue:loi), has him flogged instead (fargue:fouet), or swears he saw Boucaut fall
// (fargue:mensonge). Wired in A4f_jours.
module.exports = {
  passages: {
    YQ_coup: { act: "IV", title: "La loi de la plage", place: "plage", ambiance: "nature", second: true,
      text: [
        "Ça se passe au soleil de midi, devant le feu, pendant que Fargue écume la marmite. Boucaut a ouvert un tonnelet de rhum, le dernier, et l'a trouvé à moitié vide ; il cherche un voleur avec la conviction d'un homme qui en a lui-même été un toute sa vie. Son regard tombe sur Ewen Riou.",
        "Riou a dix-neuf ans. C'est un gabier de Morlenc, beau comme une image de piété, blond, avec des yeux de fille et des épaules de bœuf, qui grimpe aux vergues comme d'autres montent un escalier, que tout le bord aimait sur la Cormorane, et qui a suivi Fargue parce que tout le monde le suivait. Il a un défaut, un seul : quand il se met en colère, il bégaie. Les mots se coincent derrière ses dents, et il reste là, la bouche ouverte, rouge jusqu'aux oreilles, à chercher le premier.",
        "« C'est toi, dit Boucaut. Le joli cœur. Je t'ai vu rôder autour, cette nuit. »",
        "Riou ouvre la bouche. Rien ne sort. Il devient rouge, puis blanc. Boucaut ricane, et le traite de voleur, et d'autre chose, un mot sur sa mère. Riou cherche toujours le premier mot, et il ne le trouve pas, et alors c'est son bras qui répond à sa place. Un seul coup de poing, en pleine tempe. Boucaut part en arrière, tout droit, comme un mât qu'on abat, et sa tête heurte une roche noire à demi enfouie dans le sable, avec un bruit que Fargue reconnaît, parce qu'il l'a entendu un jour, il y a vingt ans, sur le pont de la Maraude.",
        "Boucaut ne bouge plus. Il respire, à petits coups, avec un ronflement de dormeur. Le sang coule de son oreille sur le sable.",
      ],
      choices: [{ label: "Lâcher la louche", to: "YQ_loi" }] },
    YQ_loi: { act: "IV", title: "La loi de la plage", place: "plage", ambiance: "nature", second: true,
      text: [
        "Les hommes se lèvent autour du feu. Ils regardent Boucaut, puis Riou, qui regarde son poing comme s'il appartenait à un autre. Puis, tous ensemble, comme une marée, ils se tournent vers Fargue.",
        "C'est Malandain qui le dit, d'une voix lente. « La loi de la côte, la Chanson. Tu l'as signée comme nous, à Morlenc, sur le papier qu'on a fait. Qui frappe un frère, on lui cloue la main au mât, avec son propre couteau, du soleil au soleil. » Il crache. « Sur la Maraude, c'était comme ça. Tu nous l'as dit toi-même. C'est pour ça que la Maraude a tenu. »",
        "C'est vrai. Fargue l'a dit. Il a écrit la loi lui-même, sur une page du cahier des vivres, une nuit, dans la Basse-Fosse, de sa belle écriture de quartier-maître : onze articles, recopiés de mémoire, ceux qu'on lisait sur le pont de la Maraude au début de chaque course. Il savait qu'il faut une loi à des hommes qui n'en ont plus. Il n'avait pas pensé qu'il faudrait l'appliquer à celui-là.",
        "Riou le regarde. Il essaie de parler. « J-j-je… » Rien d'autre ne vient. Il pleure de rage, en silence, la bouche ouverte.",
        "Fargue sait, comme tout le monde, que Riou n'a pas volé le rhum. Il sait qui l'a bu : Boucaut lui-même, la nuit dernière, à la régalade, il l'a vu de sa couverture. Il sait aussi que s'il le dit maintenant, devant l'homme couché qui saigne, personne ne le croira, et que tout le monde comprendra seulement qu'il protège le joli cœur. Une bande se défait comme ça. Par un chef qui choisit ses enfants.",
      ],
      choices: [
        { label: "« La loi est la loi. Apportez le couteau. »", fx: { flag: "fargue:loi" }, to: "YQ_mat" },
        { label: "« Le fouet. Douze coups. Et c'est moi qui les donne. »", fx: { flag: "fargue:fouet" }, to: "YQ_fouet" },
        { label: "« Personne ne l'a frappé. Je l'ai vu tomber. Il était saoul. »", fx: { flag: "fargue:mensonge" }, to: "YQ_mensonge" },
      ] },
    YQ_mat: { act: "IV", title: "La loi de la plage", place: "plage", ambiance: "nature", second: true,
      text: [
        "On l'attache au tronc d'un cocotier, puisqu'il n'y a pas de mât sur la plage, et c'est Fargue qui plante le couteau. Il le fait vite et bien, entre les os de la main, là où ça ne casse rien, d'un seul coup, comme on pique une pièce de viande. Riou ne crie pas. Il ouvre la bouche, et il ne trouve toujours pas le premier mot.",
        "Il reste là jusqu'au lendemain matin, la main clouée à l'arbre, debout, parce qu'il n'a pas le choix. Le soir, Fargue lui porte de la soupe, et la lui fait boire à la cuillère, comme on fait à un malade. Riou boit. Il ne le regarde pas.",
        "Au matin, Fargue retire le couteau, panse la main avec un morceau de sa propre chemise, et Riou s'en va au bord de l'eau laver sa main dans la mer, longtemps. Les hommes ont vu. La loi a été appliquée. Personne ne volera plus de rhum, personne ne frappera plus personne, et la bande tient, comme la Maraude a tenu.",
        "Boucaut se réveille ce matin-là, avec une tête comme une citrouille, et ne se souvient de rien, ni du rhum ni du coup. Il demande pourquoi le joli cœur a la main bandée. On ne le lui dit pas.",
      ],
      choices: [{ label: "Reprendre la marmite", back: "A4f_jours" }] },
    YQ_fouet: { act: "IV", title: "La loi de la plage", place: "plage", ambiance: "nature", second: true,
      text: [
        "Il y a un murmure. Ce n'est pas la loi. C'est moins que la loi, et plus que rien. Malandain le regarde longtemps, puis hausse ses épaules énormes : « C'est toi le chef. Mais c'est noté. »",
        "Fargue donne les douze coups lui-même, avec une garcette de cordage, sur le dos nu de Riou attaché au cocotier. Il frappe fort, parce que des coups mous seraient une insulte pour tout le monde, et d'abord pour Riou. Au sixième, le dos saigne. Au douzième, Fargue jette la garcette dans le feu et va se laver les mains à la mer.",
        "Le soir, Riou vient s'asseoir à côté de lui, au bout de la plage, le dos raide sous sa chemise. Il met longtemps à parler. « M-merci, dit-il enfin. P-pour la main. » Puis, d'un trait, sans bégayer, comme si la colère était partie avec le sang : « Je n'ai pas volé le rhum. »",
        "« Je sais, dit Fargue. Ça ne change rien. C'est pour ça que c'est une loi. »",
      ],
      choices: [{ label: "Reprendre la marmite", back: "A4f_jours" }] },
    YQ_mensonge: { act: "IV", title: "La loi de la plage", place: "plage", ambiance: "nature", second: true,
      text: [
        "Il y a un silence. Tout le monde a vu le coup. Tout le monde regarde Fargue, qui soutient les regards un par un, avec une tranquillité de prêtre qui donne l'absolution à un assassin.",
        "« Il était saoul, répète-t-il. Il a bu la moitié du tonnelet cette nuit, je l'ai vu faire. Il s'est levé trop vite, et il est tombé sur la pierre. Riou a voulu le retenir. C'est ce que j'ai vu. » Il reprend sa louche. « Quelqu'un a vu autre chose ? »",
        "Personne n'a vu autre chose. Malandain le regarde longtemps, avec ses petits yeux de taureau. Puis il se rassoit, sans un mot, et Fargue sait, à cet instant, qu'il vient de perdre quelque chose qu'il ne retrouvera pas : les hommes lui obéissent toujours, mais ils savent désormais que la loi a un prix, et que le chef le fixe.",
        "Boucaut se réveille le lendemain, avec une tête comme une citrouille, et ne se souvient de rien. On lui dit qu'il est tombé, saoul. Il le croit volontiers ; c'est arrivé souvent. Riou, lui, ne parle plus à personne, et surtout pas à Fargue, qui lui a sauvé la main en le traitant, devant tout le monde, de témoin d'un ivrogne.",
      ],
      choices: [{ label: "Reprendre la marmite", back: "A4f_jours" }] },
  },
  extras: {
    quests: [
      { id: "YQ", act: "IV", kind: "annexe", title: "La loi de la plage", start: "YQ_coup", doit: "billybudd", echo: ["fargue:loi", "fargue:fouet", "fargue:mensonge"] },
    ],
  },
};
