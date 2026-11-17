// L'Île Folle-Aiguille · side story « Le canot de la Bonne-Espérance » (owes its question to The Narrative of Arthur
// Gordon Pym: when men drift without food, is the lot they draw to eat one of them a law of the sea, or a murder?). In
// the calms, a drifting boat: two living men, a mate and a novice, and in the bottom of the boat what is left of three
// others. The lots were drawn with straws; the novice saw the mate's hand. The child or the doctor hears it; the
// captain is told (yf:dit) and holds an inquiry at the capstan, ending in irons for Lannoz (yf:fers) or the custom of
// the sea (yf:coutume), or nobody is told (yf:tu). Wired in A3n_jours and A3w_jours.
var ENFANT = { team: "mousse" };
var MEDECIN = { team: "victorine" };
module.exports = {
  passages: {
    YF_canot: { act: "III", title: "Le canot", place: "sargues", ambiance: "mer",
      fx: { meet: ["kerbiriou", "matthieu"] },
      text: [
        "La vigie le signale à midi : une chose sombre, à deux milles, prise dans une prairie d'herbes jaunes, que la houle morte soulève et repose, soulève et repose, sans jamais la déplacer. On met la chaloupe à l'eau. On rame une heure dans les herbes, qui s'enroulent aux avirons comme des cheveux.",
        "C'est un canot. Un canot de navire, peint en vert, avec un nom à demi effacé sur le tableau arrière : *BONNE-ESPÉRANCE, LANNOZ*. Une voile de fortune faite d'une chemise pend à un aviron dressé. Sous la voile, il y a deux hommes couchés, qui ne bougent pas quand la chaloupe accoste, et qui ouvrent les yeux quand on les touche.",
        "Un homme de quarante ans, barbu, noir de soleil, les lèvres fendues, qui dit d'une voix de corbeau : « Le second Kerbiriou, de la Bonne-Espérance. Trente-deux jours. De l'eau. » Et un garçon, quinze ans peut-être, si maigre que ses yeux semblent trop grands pour sa figure, qui ne dit rien, et qui regarde l'homme.",
        "Au fond du canot, sous les bancs, il y a des choses que les hommes de la chaloupe regardent, et qu'ils cessent de regarder, et qu'ils couvrent d'un prélart sans qu'on le leur ait demandé. Des os. Des os longs, raclés, blanchis, rangés avec soin. Et dans un vieux chapeau de feutre, coincé sous le banc de l'arrière, des brins de paille, cinq, dont deux sont plus courts que les autres.",
        { if: ENFANT, text: "Tu étais dans la chaloupe. Tu as vu le chapeau." },
        { if: MEDECIN, text: "Victorine les reçoit à la coupée. Le second de la chaloupe lui tend le chapeau, sans un mot, avant même qu'on monte les deux survivants." },
      ],
      choices: [{ label: "Faire monter les deux hommes à l'infirmerie", to: "YF_recit" }] },
    YF_recit: { act: "III", title: "Le récit du second", place: "cormorane", ambiance: "mer",
      text: [
        "Kerbiriou boit, lentement, à la cuiller, comme Victorine l'ordonne, et quand il peut parler, il parle. La Bonne-Espérance, une goélette de Lannoz, chargée de bois, a sombré dans un grain à l'ouest des Sargues, d'une voie d'eau qu'on n'a pas su boucher. Cinq hommes dans le canot : lui, le cuisinier, deux matelots, le novice. Un baril d'eau, un sac de biscuit. Le biscuit a duré huit jours. L'eau, quinze, avec la pluie.",
        "« Le vingtième jour, dit-il, on a tiré à la paille. C'est la coutume. Tout le monde la connaît. Tout le monde y a consenti. Le cuisinier a tiré la courte. Il a dit : bon. Il a fait sa prière. Il était brave. » Il ne baisse pas les yeux. « Le vingt-sixième, on a retiré. Le matelot Le Dû. Le troisième est mort tout seul, de la fièvre, le vingt-neuvième. On l'a… on n'a rien gâché. »",
        "Il se tait. Il regarde ses mains. « J'ai fait ce qu'il fallait faire. J'ai ramené le petit. Personne d'autre l'aurait ramené. »",
        "Le novice, dans le hamac voisin, a tourné la tête vers la cloison.",
      ],
      choices: [{ label: "Attendre que le second s'endorme", to: "YF_novice" }] },
    YF_novice: { act: "III", title: "Le novice", place: "cormorane", ambiance: "nuit",
      text: [
        "La nuit, quand Kerbiriou ronfle, le novice parle. Il s'appelle Matthieu. Il a quinze ans. Il parle très bas, très vite, sans regarder personne, les yeux sur le fanal qui se balance.",
        "« C'est lui qui tenait les pailles. Les deux fois. Dans son poing. On tirait chacun à son tour, et lui en dernier, ce qui restait. Le cuisinier, il était vieux, il avait les jambes enflées, il ramait plus. La deuxième fois, Le Dû, il avait la fièvre, il délirait. » Il avale sa salive. « La deuxième fois, j'étais à côté de lui. J'ai vu sa main. Il avait cassé une paille dans son poing, avant qu'on tire. Il savait où était la courte. Il l'a mise du côté de Le Dû. »",
        "Il se tourne enfin. « Il m'a gardé parce que je ramais. Et parce qu'il fallait un témoin, pour dire qu'on avait tiré à la paille. Je suis le témoin. » Il se met à trembler, des pieds à la tête, sans bruit. « Je l'ai mangé, Le Dû. J'ai mangé Le Dû. Il me donnait du tabac. »",
        { if: ENFANT, text: "Il te regarde. Tu as seize ans. Il en a quinze. Tu ne sais pas ce que tu aurais fait." },
        { if: MEDECIN, text: "Victorine lui prend la main et la garde. Elle a lu, dans les traités, des cas de ce genre. Aucun traité ne dit quoi répondre." },
      ],
      choices: [
        { label: "Aller trouver la capitaine, cette nuit même", to: "YF_cabestan" },
        { label: "Se taire : la mer a jugé, et le garçon a assez souffert", fx: { flag: "yf:tu" }, to: "YF_silence" },
      ] },
    YF_cabestan: { act: "III", title: "L'enquête", place: "cormorane", ambiance: "mer",
      text: [
        "La capitaine Ribaud tient l'enquête au cabestan, le lendemain matin, devant tout l'équipage rassemblé, comme le veut l'ordonnance de la marine pour les crimes commis en mer. Elle est en habit, avec son chapeau. Kerbiriou est debout devant elle, sans fers, rasé, une chemise propre prêtée par le second. Matthieu est assis sur une drome, à l'écart, la tête dans les épaules.",
        "Kerbiriou ne nie rien. Il ne nie pas la paille cassée. Il dit qu'un homme qui tient les pailles a le droit de choisir qui vivra, quand il est le seul à savoir ramer, à savoir lire les étoiles, à savoir où est la terre. Il dit que le cuisinier serait mort de toute façon, et Le Dû aussi, et que s'il avait laissé faire le hasard, le hasard aurait peut-être pris le petit, et qu'alors tout le monde serait mort. « J'ai pas triché pour moi, capitaine. J'ai triché pour le canot. »",
        "L'équipage murmure. Une partie de l'équipage. Les anciens hochent la tête. La coutume de la mer, c'est la coutume de la mer : on tire, et quelqu'un tient les pailles, et celui qui tient les pailles, c'est le chef du canot. Les jeunes regardent Matthieu.",
        { if: ENFANT, text: "« Tu as entendu le garçon. Qu'est-ce que tu en penses, toi ? »" },
        { if: MEDECIN, text: "« Vous avez entendu le garçon, docteur. Qu'est-ce que vous en pensez ? »" },
      ],
      choices: [
        { label: "« Il a tué deux hommes avec une paille cassée. Aux fers, jusqu'à Lannoz, et devant le juge. »", to: "YF_fers" },
        { label: "« Il les a ramenés, lui et le garçon. Laissez la mer juger ce qui s'est passé sur la mer. »", to: "YF_coutume" },
      ] },
    YF_fers: { act: "III", title: "Les fers", place: "cormorane", ambiance: "mer",
      text: [
        "La capitaine hoche la tête. Elle fait mettre Kerbiriou aux fers, à fond de cale, au pain et à l'eau, en attendant Lannoz, où il y a un juge de l'Amirauté, ou quelque chose d'approchant.",
        "Kerbiriou ne résiste pas. En passant devant Matthieu, il s'arrête, et le regarde, longtemps, sans colère. « T'as bien fait, petit. Tu leur diras, au juge, que je t'ai ramené. Tu leur diras ça aussi. »",
        "Le soir, dans l'entrepont, les anciens ne parlent à personne. Ils disent que la capitaine a jugé selon la terre, et que la terre n'a rien à faire en mer, et que la mer s'en souviendra. Les jeunes, eux, apportent à Matthieu du tabac.",
      ],
      choices: [{ label: "Retourner à la marmite des jours", fx: { quest: "YF", flag: "yf:fers", penche: { lagadec: -1, gobert: 1 } }, back: true }] },
    YF_coutume: { act: "III", title: "La coutume", place: "cormorane", ambiance: "mer",
      text: [
        "La capitaine réfléchit longtemps. Puis elle écrit dans le livre de bord : *Recueilli en mer le second Kerbiriou et le novice Matthieu, de la goélette* Bonne-Espérance *de Lannoz, perdue corps et biens. Les trois autres hommes du canot sont morts de faim et de soif au cours de la dérive.* Elle signe. Elle a écrit la coutume de la mer, qui consiste à ne pas écrire certaines choses.",
        "Kerbiriou la remercie. Elle ne lui répond pas. Il s'embarque comme matelot jusqu'à Lannoz, travaille bien, ne parle à personne, et descend à Lannoz sans se retourner.",
        "Matthieu reste. La capitaine l'inscrit au rôle comme second novice. Il est très doux, très obéissant, il mange tout ce qu'on lui donne, et il ne mange jamais de viande. Personne ne lui demande pourquoi.",
      ],
      choices: [{ label: "Retourner à la marmite des jours", fx: { quest: "YF", flag: "yf:coutume", penche: { lagadec: 1 } }, back: true }] },
    YF_silence: { act: "III", title: "Le silence", place: "cormorane", ambiance: "nuit",
      text: [
        { if: ENFANT, text: "Tu ne dis rien. Ni à la capitaine, ni à personne. Tu restes près de Matthieu, quand tu peux, et tu lui apprends des nœuds, parce que tu ne sais pas quoi faire d'autre, et que les nœuds, au moins, servent à quelque chose." },
        { if: MEDECIN, text: "Victorine ne dit rien. Ni à la capitaine, ni à personne. Elle garde Matthieu à l'infirmerie plus longtemps qu'il ne faudrait, sous prétexte de fièvre, pour qu'il ne soit pas dans le même entrepont que l'autre." },
        "Kerbiriou se remet vite. C'est un homme solide. Il travaille comme matelot jusqu'à Lannoz, et il travaille bien, et les anciens l'aiment, et le soir, à la cambuse, il raconte la dérive, la soif, le soleil, les pailles. Il raconte bien. Il ne raconte jamais la paille cassée. Il regarde Matthieu, de temps en temps, par-dessus son écuelle, d'un regard tranquille de propriétaire.",
        "À Lannoz, il descend à terre et ne revient pas. Matthieu, le soir, monte sur le pont, et regarde le village longtemps, sans rien dire, comme on regarde une porte qu'on vient de fermer à clef de l'extérieur, en se demandant s'il reste quelqu'un dedans.",
      ],
      choices: [{ label: "Retourner à la marmite des jours", fx: { quest: "YF" }, back: true }] },
  },
  extras: {
    people: {
      kerbiriou: { name: "Le second Kerbiriou", aka: ["Kerbiriou"], f: false,
        qui: "Le second de la goélette Bonne-Espérance, de Lannoz, recueilli en mer après trente-deux jours de dérive." },
      matthieu: { name: "Matthieu", aka: ["le novice de la Bonne-Espérance"], f: false,
        qui: "Le novice de la goélette Bonne-Espérance, quinze ans, seul autre survivant du canot." },
    },
    quests: [
      { id: "YF", act: "III", kind: "annexe", title: "Le canot de la Bonne-Espérance", start: "YF_canot", doit: "pym", echo: ["yf:fers", "yf:coutume", "yf:tu"] },
    ],
  },
};
