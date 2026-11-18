// L'Île Folle-Aiguille · side story « Le copiste » (owes its question to Bartleby: what does one owe a man who
// declines, politely, to do anything at all, and then to live?). Anselme Prigent, a clerk turned seaman, the best hand
// on board with a pen, who one day begins to abstain: from the rigging, from the pump, from his ration. The child
// learns where he comes from (the Office of the Drowned at Morlenc, where he wrote letters to families that were never
// sent). At Brisegrève the captain puts him ashore (yg:terre), unless the child gets him to take one thing, an orange
// (yg:orange), or to write one letter, his own (yg:lettre). Wired in A3m_jours.
module.exports = {
  passages: {
    YG_debut: { act: "III", title: "Le copiste", place: "cormorane", ambiance: "mer",
      fx: { meet: "prigent" },
      text: [
        "Anselme Prigent a signé à Morlenc comme matelot, ce qui a fait rire tout l'équipage, et le fait rire encore. C'est un homme pâle, long, voûté, aux mains blanches et soignées, avec des lunettes rondes cerclées de fer qu'il essuie sans cesse, et une politesse si parfaite qu'elle en devient inquiétante, comme un costume trop bien coupé sur un mort.",
        "Il ne sait pas faire un nœud. En revanche, il écrit. Le second l'a découvert le premier jour, et depuis, c'est Prigent qui tient le rôle d'équipage, le cahier des vivres, la copie du livre de bord, d'une écriture de calligraphe, régulière, inclinée, sans une rature, si belle que la capitaine elle-même, en la voyant, s'est arrêtée de parler.",
        "Il écrit tout le jour, assis sur un coffre, au pied du grand mât, une écritoire sur les genoux. Il ne lève jamais les yeux. Quand on lui parle, il répond sans cesser d'écrire. Tu t'assieds parfois à côté de lui, pour regarder la plume avancer : c'est apaisant, comme de regarder la pluie.",
        "Le cinquième jour, Maître Gobert lui ordonne de monter aux huniers avec les autres, pour serrer la toile avant un grain. Prigent lève la tête, essuie ses lunettes, et répond, avec une douceur infinie :",
        "« Je m'en abstiendrai, si vous permettez. »",
      ],
      choices: [{ label: "Regarder ce que fait Gobert", to: "YG_refus" }] },
    YG_refus: { act: "III", title: "Le copiste", place: "cormorane", ambiance: "mer",
      text: [
        "Gobert ne fait rien. Pour la première fois de sa vie, peut-être, Maître Gobert ne sait pas quoi faire. Il a frappé des hommes qui l'insultaient, des hommes qui se moquaient, des hommes qui se sauvaient. Il n'a jamais rencontré un homme qui s'abstient. Il reste planté devant lui, la garcette à la main, la bouche entrouverte, comme un dogue devant un chat qui ne s'enfuit pas.",
        "Les jours suivants, cela s'étend. Prigent s'abstient de monter aux huniers, puis de pomper, puis de prendre son quart. Il s'abstient de copier le cahier des vivres. Il s'abstient, un matin, de descendre déjeuner. Il reste assis sur son coffre, au pied du grand mât, l'écritoire fermée sur les genoux, et il regarde la mer, ou plutôt un point de la mer, à quelques brasses, toujours le même, comme on regarde un mur.",
        "La capitaine le fait venir. Elle lui parle longtemps. Il l'écoute avec une attention parfaite. À la fin, elle lui demande s'il a quelque chose à répondre. Il réfléchit. « Je m'en abstiendrai, si vous permettez. »",
        "On a beaucoup ri, la première semaine. On ne rit plus. Il y a quelque chose de terrible, à bord d'un navire où tout le monde tire sur des cordes, dans un homme assis qui ne tire sur rien.",
      ],
      choices: [{ label: "T'asseoir à côté de lui, un soir", to: "YG_bureau" }] },
    YG_bureau: { act: "III", title: "Le copiste", place: "cormorane", ambiance: "nuit",
      text: [
        "Il ne te chasse pas. Il ne te parle pas non plus. Tu restes assis{e} à côté de lui, sur le coffre, pendant que le soleil se couche, et tu regardes avec lui le point de la mer qu'il regarde. Il n'y a rien. De l'eau qui monte et qui descend.",
        "À la nuit, sans tourner la tête, il parle. Il dit qu'il a été commis, vingt ans, au Bureau des Naufrages de Morlenc, au deuxième étage de l'Amirauté. Quand un navire se perd, c'est là qu'on dresse la liste des hommes. Et c'est là qu'on écrit aux familles. Il écrivait les lettres. Il avait la plus belle main du bureau. *Madame, nous avons le regret de vous faire connaître.* Quatre mille lettres, peut-être. Cinq mille.",
        "« Un jour, dit-il, on a déménagé le bureau. J'ai trouvé, sous l'escalier, dans des caisses, toutes mes lettres. Cinq mille. On ne les avait jamais envoyées. Personne ne savait pourquoi. Une économie de port, peut-être, ou un oubli, une négligence qui durait depuis vingt ans. Toutes ces femmes, à Lannoz, à Kerverzot, à la Pointe-aux-Corneilles, qui attendent encore, à leur fenêtre, un navire qui ne rentrera pas, et une lettre qui ne viendra pas, et qui était sous l'escalier. »",
        "Il essuie ses lunettes. « J'ai pensé que si j'allais en mer, je verrais au moins l'endroit. Où ils sont. » Il regarde le point de la mer. « Il n'y a rien. De l'eau qui monte et qui descend. »",
      ],
      choices: [
        { label: "Lui apporter une orange du baron, volée à la grand-chambre", to: "YG_orange" },
        { label: "Lui apporter du papier, et lui demander d'écrire une lettre, une seule", to: "YG_lettre" },
        { label: "Le laisser à son point de la mer", to: "YG_terre" },
      ] },
    YG_orange: { act: "III", title: "L'orange", place: "cormorane", ambiance: "mer",
      text: [
        "C'est une orange de Morlenc, la dernière de la caisse du baron, que tu as prise sur la table de la grand-chambre en passant le balai. Tu la poses sur l'écritoire fermée, sur ses genoux, en silence.",
        "Il la regarde longtemps. Elle est d'un orange violent, presque obscène, au milieu de tout ce gris. Puis il la prend, lentement, et il l'épluche, d'un seul ruban, avec ses mains blanches et précises, sans casser la spirale, comme il écrivait. Il mange un quartier. Il te tend le deuxième.",
        "Vous mangez l'orange à deux, au pied du grand mât, quartier par quartier. Il garde l'épluchure, en spirale, sur l'écritoire.",
        "Le lendemain, il ne mange pas sa ration. Mais il prend son quart. Le surlendemain, il copie le cahier des vivres. Il ne monte jamais aux huniers. Il ne parle jamais plus du Bureau. Il garde l'épluchure jusqu'à ce qu'elle sèche et devienne dure comme du cuir, et il la garde encore.",
      ],
      choices: [{ label: "Retourner à ta corvée", fx: { quest: "YG", flag: "yg:orange" }, back: "A3m_jours" }] },
    YG_lettre: { act: "III", title: "La lettre", place: "cormorane", ambiance: "nuit",
      text: [
        "Tu lui apportes une feuille du cahier des vivres, et l'encrier. Tu lui demandes d'écrire une lettre. Une seule. Une vraie, qu'on enverra.",
        "Il regarde la feuille. « À qui ? — À toi. »",
        "Il te regarde, pour la première fois. Derrière les lunettes rondes, ses yeux sont gris, très clairs, très fatigués, comme deux fenêtres d'une maison où il n'y a plus personne depuis longtemps. Il réfléchit. Puis il ouvre l'écritoire, trempe la plume, et il écrit, de sa belle main inclinée, sans une rature : *Monsieur Prigent, nous avons le regret de vous faire connaître que vous êtes vivant.*",
        "Il la relit. Il a un petit rire, très bref, le premier et le dernier que tu lui entendras. Il plie la lettre, la cachette avec la cire du second, et la met dans sa poche. « Je la lirai plus tard, dit-il. Quand je serai à la maison. »",
        "À partir de ce jour, il mange. Pas beaucoup. Assez.",
      ],
      choices: [{ label: "Retourner à ta corvée", fx: { quest: "YG", flag: "yg:lettre" }, back: "A3m_jours" }] },
    YG_terre: { act: "III", title: "Le copiste", place: "cormorane", ambiance: "mer",
      text: [
        "Tu le laisses. Tu ne sais pas quoi faire d'autre ; personne ne le sait.",
        "Le neuvième jour, la capitaine décide. On mouillera à Brisegrève ; il y a là un hospice, au bourg des soldats, tenu par les sœurs du fort. On y laissera Prigent, avec sa solde et une lettre. Elle écrit la lettre elle-même, très longue, et la relit trois fois.",
        "Quand on le descend dans le canot, il ne résiste pas. Il s'assied à l'arrière, l'écritoire sur les genoux, très droit, et il regarde la Cormorane s'éloigner, ou plutôt un point à côté de la Cormorane, toujours le même.",
        "Tu le cherches des yeux, le lendemain, sur le quai du bourg. Tu ne le trouves pas. Il est quelque part, derrière un mur, assis, et il s'abstient.",
      ],
      choices: [{ label: "Retourner à ta corvée", fx: { quest: "YG", flag: "yg:terre" }, back: "A3m_jours" }] },
  },
  extras: {
    people: {
      prigent: { name: "Anselme Prigent", aka: ["Prigent", "le copiste"], f: false,
        qui: "Un ancien commis de l'Amirauté, engagé comme matelot, qui a la plus belle écriture du bord." },
    },
    quests: [
      { id: "YG", act: "III", kind: "annexe", title: "Le copiste", start: "YG_debut", doit: "bartleby", echo: ["yg:orange", "yg:lettre", "yg:terre"] },
    ],
  },
};
