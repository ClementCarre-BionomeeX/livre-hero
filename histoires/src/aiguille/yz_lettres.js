// L'Île Folle-Aiguille · side story over three acts, « Les lettres d'un autre » (owes its question to Cyrano de
// Bergerac: whom does one love, the face or the words?). Act II: the topman Daguenet, handsome and vain, asks the child
// to write for him to the gabière Marjolaine Cotentin, who despises him (yz:plume). Act III: she answers; the letters
// go on; a night under the bowsprit she asks him to speak as he writes, and the child, in the shadow of the foresail,
// whispers the words (yz:souffle) or lets him founder (yz:laisse). Act V, on the beach, the last morning: she asks the
// child to read her one letter aloud, and hears the voice; the child owns the letters (yz:avoue) or denies them
// (yz:nie). Wired in A2m_jours, A3m_jours, A3n_jours and A5o_debut.
var MORT = { has: "victime=daguenet" };
var ECRIVAIN = { voie: "ecrivain" };
module.exports = {
  passages: {
    YZ_demande: { act: "II", title: "Les lettres d'un autre", place: "cormorane", ambiance: "nuit",
      text: [
        "Olivier Daguenet t'attrape par la manche, un soir, au pied du mât de misaine, et t'entraîne derrière la chaloupe avec des airs de conspirateur. Il a son foulard de soie, sa mèche, son sourire de propriétaire. Il a aussi, ce soir, quelque chose que tu ne lui avais jamais vu : l'air d'un homme qui va demander un service.",
        "« Tu écris, toi, dit-il. Tout le monde le sait. » Il tire de sa vareuse une feuille chiffonnée, couverte d'une écriture de chat et de trois taches d'encre. « J'ai essayé. Lis. Non, ne lis pas. » Il la remet dans sa vareuse. « C'est pour la gabière. Cotentin. »",
        "Tu le regardes. Il rougit, ce qui est nouveau aussi. « Je sais, dit-il. Elle me méprise. Elle me l'a dit, dans la mâture, devant les autres : que j'étais un paon avec un foulard volé, et qu'un paon ne monte pas plus haut que la basse-cour. » Il ricane, sans conviction. « Toutes les filles de la Basse-Fosse me courent après. Celle-là me crache dessus. Je ne pense plus qu'à elle. C'est ridicule. »",
        { if: ECRIVAIN, text: "Tu as écrit, au hameau, des lettres d'amour pour des pêcheurs qui ne savaient dire que le prix du maquereau. Tu sais ce que c'est : on met dans la bouche de l'un ce qu'on aurait dit, soi. C'est un métier. C'est aussi une façon très sûre de se perdre." },
        "« Écris-lui, dit-il. Comme tu voudras. Moi, je signerai. Je te donne le foulard. »",
      ],
      choices: [
        { label: "Prendre la plume, et laisser le foulard", fx: { flag: "yz:plume" }, to: "YZ_premiere" },
        { label: "« Écris-lui toi-même. Elle préférera tes taches d'encre. »", to: "YZ_refus" },
      ] },
    YZ_refus: { act: "II", title: "Les lettres d'un autre", place: "cormorane", ambiance: "nuit",
      text: [
        "Daguenet te regarde, vexé, puis il rit, et te tape sur l'épaule. « Tu as raison. Elle aimera les taches. C'est tout moi, les taches. » Il s'en va vers le gaillard en sifflant, ce qui est interdit.",
        "Le lendemain, Marjolaine Cotentin descend du perroquet avec une feuille chiffonnée dans le poing, et la jette à la mer sans l'avoir dépliée. Daguenet la regarde flotter, et ne siffle plus de la journée.",
      ],
      choices: [{ label: "Retourner au travail", fx: { quest: "YZ" }, back: "A2m_jours" }] },
    YZ_premiere: { act: "II", title: "La première lettre", place: "cormorane", ambiance: "nuit",
      text: [
        "Tu écris la nuit, dans l'entrepont, à la lueur d'un fanal, sur ton genou. Tu ne sais pas comment commencer. Tu écris *Mademoiselle*, et tu le barres : on ne dit pas mademoiselle à une gabière qui monte sans corde. Tu écris *Cotentin*, et tu le barres aussi. Tu finis par ne rien mettre en tête, et par commencer au milieu, comme on commence à parler à quelqu'un qu'on regarde depuis longtemps.",
        "Tu écris ce que tu as vu. La main qui t'a saisi{e} au col sur la hune, et t'a hissé{e} comme un chaton. Les cheveux coupés au couteau. La façon qu'elle a de s'asseoir sur le beaupré, la nuit, au-dessus de l'eau, les jambes dans le vide, comme si le navire entier était à elle et qu'elle le promenait. La potence de la Prévôté qu'elle regarde, au bout du quai, et dont personne n'ose lui parler. Tu écris que celui qui écrit ne lui demande rien. Qu'il voulait seulement qu'elle sache qu'on la voit.",
        "Tu relis. C'est la meilleure chose que tu aies jamais écrite. Ce n'est pas du tout Daguenet. Tu la lui donnes. Il la lit, en remuant les lèvres, longtemps. Il devient très rouge. « C'est moi, ça ? » Il la plie, signe d'un *O. D.* plein de boucles, et va la glisser lui-même, la nuit, dans le hamac de Marjolaine.",
      ],
      choices: [{ label: "Retourner au travail", back: "A2m_jours" }] },

    YZ_reponse: { act: "III", title: "Les lettres d'un autre", place: "mer_couchant", ambiance: "mer",
      text: [
        "Marjolaine Cotentin a répondu. Daguenet te montre la réponse à l'abri de la chaloupe, les mains tremblantes : un billet de quatre lignes, d'une écriture appliquée, raide, d'enfant de l'école des pauvres. *Qui t'a écrit ça. Toi tu sais pas. Mais si c'est toi, recommence. M. C.*",
        "Alors tu recommences. Une lettre tous les trois jours, glissée dans le hamac, pendant que la Cormorane descend vers le sud et que l'eau devient bleue. Tu écris la mer, les étoiles neuves, le requin qui suit le sillage, le Tropique qu'on passe sans le voir. Tu écris la colère. Tu écris, un soir, sans l'avoir décidé, ce que c'est d'avoir perdu quelqu'un, une mère, un frère, et de regarder des années après l'endroit où c'est arrivé, comme on regarde une plaie qu'on ne veut pas laisser fermer.",
        "Les réponses de Marjolaine s'allongent. Six lignes, puis dix, puis une page. Elle parle de son frère. Elle parle de la montre de l'échevin, qu'il n'avait pas volée. Daguenet te les donne à lire, et tu lis, dans le noir, ce qu'une femme qui ne dit rien à personne dit à un homme qui n'existe pas.",
        "Et sur le pont, quelque chose change. Marjolaine ne crache plus sur Daguenet. Elle le regarde, à la manœuvre, avec une attention perplexe, comme on regarde un livre dont la couverture ne ressemble pas à ce qu'on a lu dedans. Daguenet, lui, se rengorge. Au bout de trois semaines, il commence à croire qu'il a écrit les lettres. Tu l'entends, un soir, en répéter une phrase à Rivoal, comme si elle était de lui.",
      ],
      choices: [{ label: "Retourner au travail", back: "A3m_jours" }] },
    YZ_beaupre: { act: "III", title: "Le beaupré", place: "sargues", ambiance: "nuit",
      text: [
        "Dans les calmes, une nuit sans lune, Daguenet vient te chercher dans ton hamac, blême. « Elle m'a donné rendez-vous. Sur le beaupré. Ce soir. Elle veut que je lui parle. Comme dans les lettres. » Il te secoue. « Je ne sais pas, moi. Je ne sais rien dire. Tu le sais. Viens. Mets-toi derrière la misaine. Souffle-moi. »",
        "Le beaupré, dans les calmes, est l'endroit le plus solitaire du navire : une longue pièce de bois qui s'avance au-dessus de l'eau noire, sous les étoiles, avec les herbes des Sargues qui luisent en dessous comme une prairie de cuivre. Marjolaine y est assise, à califourchon, les jambes dans le vide. Daguenet s'assied à côté d'elle. Tu te glisses dans l'ombre de la voile d'étai, à trois pas, sur le gaillard, couché{e} à plat ventre sur les planches encore tièdes.",
        "« Alors, dit Marjolaine. Parle. Dis-moi comme tu écris. »",
        "Daguenet ouvre la bouche. Il parle de ses yeux, qui sont jolis. De ses mains, qui sont fortes. De la nuit, qui est belle. Il le dit comme on récite une liste de cargaison. Marjolaine écoute, d'abord, puis elle se raidit, et tu la vois tourner la tête vers lui, dans le noir, avec la stupeur glacée de quelqu'un qui s'aperçoit qu'on lui a vendu du strass. « Ce n'est pas toi, dit-elle à voix basse. Ce n'est pas toi qui écris. »",
        "Daguenet tourne la tête vers la voile, vers toi, avec des yeux de noyé.",
      ],
      choices: [
        { label: "Lui souffler, à voix basse, ce que tu aurais dit, toi", fx: { flag: "yz:souffle" }, to: "YZ_souffle" },
        { label: "Rester dans l'ombre, et ne rien dire", fx: { flag: "yz:laisse" }, to: "YZ_laisse" },
      ] },
    YZ_souffle: { act: "III", title: "Le beaupré", place: "sargues", ambiance: "nuit",
      text: [
        "Tu souffles. D'abord une phrase, puis une autre. Daguenet les répète, en retard, en écorchant un mot sur deux. Puis Marjolaine dit : « Plus bas. Je n'entends pas. Plus lentement. » Et Daguenet parle plus bas, et plus lentement, si bas qu'il ne fait plus que remuer les lèvres, et c'est ta voix, à trois pas, dans l'ombre de la voile d'étai, que la nuit porte jusqu'au beaupré.",
        "Tu parles de son frère, et de la montre. Tu parles de la hune et du col et du chaton. Tu parles de ta mère, sans le vouloir, de la fièvre, de la chanson à boire. Tu parles longtemps. Les herbes luisent sous le beaupré. Quand tu te tais, il y a un très long silence. Puis Marjolaine se penche, et embrasse Daguenet, longtemps, sur la bouche, les yeux fermés.",
        "Tu te glisses hors de l'ombre, à reculons, sur les coudes, et tu redescends dans l'entrepont. Tu te couches dans ton hamac. Tu as le cœur qui bat, très fort, sans comprendre pourquoi, comme si c'était toi qu'on venait d'embrasser, ou au contraire.",
      ],
      choices: [{ label: "Dormir, si tu peux", back: "A3n_jours" }] },
    YZ_laisse: { act: "III", title: "Le beaupré", place: "sargues", ambiance: "nuit",
      text: [
        "Tu restes à plat ventre sur les planches tièdes, et tu ne dis rien. Ce sont ses lettres. C'est son rendez-vous. C'est sa bouche. Daguenet te regarde encore un moment, dans le noir, puis il se tourne vers Marjolaine et bafouille quelque chose sur le temps qu'il fait.",
        "Elle se lève. Elle rentre sur le gaillard en marchant sur le beaupré, sans se tenir, comme sur une route, passe à un pas de toi sans te voir, et descend dans l'entrepont. Le lendemain, il y a dans le hamac de Daguenet toutes les lettres, attachées avec un fil de voile. Il n'y en a plus d'autres. Elle ne lui parle plus. Elle ne crache plus sur lui non plus. Elle le regarde comme on regarde un endroit vide.",
        "Daguenet te rend les lettres. Il a perdu son sourire de propriétaire. Il le retrouvera, à Lannoz, auprès d'une fille de la lande qui n'aura rien lu.",
      ],
      choices: [{ label: "Retourner au travail", fx: { quest: "YZ" }, back: "A3n_jours" }] },

    YZ_plage: { act: "V", title: "Les lettres d'un autre", place: "anse_morte", ambiance: "mer",
      text: [
        "Marjolaine Cotentin est assise sur le sable, au pied d'un cocotier, face à l'anse, les genoux sous le menton. Elle a sur les genoux un paquet de lettres attachées avec un fil de voile. Elle t'appelle d'un geste, sans tourner la tête.",
        { if: MORT, text: "« Il est resté sur la plage, le premier jour, dit-elle. Malandain. Je l'ai su le soir. » Sa voix ne tremble pas ; elle a fini de trembler. « Je les ai relues toutes les nuits, depuis. Elles sont tout ce qui me reste de lui. » Elle tire de sa chemise une feuille blanche, prise au cahier du bord, et un bout de crayon. « Il avait une mère, à Morlenc, rue des Cordiers. Il faut lui écrire. Moi, j'écris comme on casse des cailloux. Écris-lui, toi. Dis-lui qui il était. »" },
        { if: { not: MORT }, text: "Olivier Daguenet est sur la Cormorane, à charger des barriques. Il chante. Il a la voix fausse. « Il ne sait pas les dire, dit Marjolaine. Il ne les a jamais su. Je lui ai demandé, hier, de me redire la première, celle du col et du chaton. Il ne s'en souvenait pas. » Elle tire de sa chemise une feuille blanche, prise au cahier du bord, et un bout de crayon. « Ma mère est à Morlenc. Il faut lui dire que je rentre, et avec qui. Moi, j'écris comme on casse des cailloux. Écris-lui, toi. Dis-lui qui il est. »" },
        "Tu prends le crayon. Tu écris, sur ton genou, ce qu'elle te dicte, puis ce qu'elle ne dicte pas, parce qu'elle s'arrête et regarde la mer, et que tu continues tout seul{e}, sans y penser, comme au hameau. Un garçon qui montait aux haubans sans se tenir, pour qu'on le regarde. Un foulard volé. Et, sans le vouloir, venue toute seule au bout du crayon, une phrase sur une main qui hisse les gens au col, comme des chatons. Marjolaine lit par-dessus ton épaule, lentement, en remuant les lèvres. Arrivée à cette phrase-là, elle s'arrête.",
        "Marjolaine a tourné la tête. Elle te regarde. Elle te regarde comme on regarde quelqu'un pour la première fois.",
        "« C'était toi, dit-elle. »",
      ],
      choices: [
        { label: "« Oui. C'était moi. Toutes. »", fx: { flag: "yz:avoue", penche: { marjolaine: 1 } }, to: "YZ_avoue" },
        { label: "« Non. Il me les a lues assez souvent, c'est tout. Les phrases restent. »", fx: { flag: "yz:nie" }, to: "YZ_nie" },
      ] },
    YZ_avoue: { act: "V", title: "Les lettres d'un autre", place: "anse_morte", ambiance: "mer",
      text: [
        "Elle ne dit rien pendant longtemps. Le rocher chante, à l'ouest. Puis elle prend la feuille sur tes genoux, la plie, et la glisse dans le paquet de lettres, avec les autres, et refait le nœud du fil de voile, avec soin, avec un nœud de gabière.",
        { if: MORT, text: "« Il m'a donné ses lèvres, dit-elle, et toi les mots. Je les ai aimés tous les deux, et ni l'un ni l'autre n'existait. » Elle te regarde. « C'est drôle. Je ne suis pas en colère. J'ai eu tout ce que vous aviez, à vous deux. C'est plus qu'on ne m'a jamais donné. »" },
        { if: { not: MORT }, text: "« Il m'a donné ses lèvres, dit-elle, et toi les mots. Je vais garder les lèvres. Elles sont là, au moins, elles chargent des barriques. » Elle a un rire bref. « Et je garde les lettres. Tu n'en écriras plus. Je ne veux pas qu'il y en ait d'autres. Celles-là suffisent pour une vie. »" },
        "Elle se lève, met le paquet dans sa chemise, contre sa peau, et s'en va vers la chaloupe. Avant d'y monter, elle se retourne, une fois, et te fait un signe de la main, très bref, qui ressemble à un salut de gabier sur une hune.",
      ],
      choices: [{ label: "Revenir vers le camp", fx: { quest: "YZ" }, back: "A5o_debut" }] },
    YZ_nie: { act: "V", title: "Les lettres d'un autre", place: "anse_morte", ambiance: "mer",
      text: [
        "Elle te regarde encore un long moment. Tu tiens bon. Tu as appris, au hameau, à mentir les yeux dans les yeux à des douaniers ; tu mens les yeux dans les yeux à une gabière qui pleure sans larmes.",
        "« Bien, dit-elle enfin. Alors c'était lui. » Elle prend la feuille sur tes genoux, la glisse dans le paquet, refait le nœud. « Il écrivait mieux qu'il ne parlait. Ça arrive. » Elle ne te croit pas. Tu le vois. Elle a choisi de te croire, comme on choisit de ne pas ouvrir une porte derrière laquelle on a entendu quelque chose.",
        "Elle s'en va vers la chaloupe, le paquet dans sa chemise. Tu restes sur le sable, les mains vides. Tu sais que tu as bien fait. Tu sais aussi que, de toutes les lettres que tu écriras dans ta vie, celles-là sont les seules qui ne seront jamais à toi.",
      ],
      choices: [{ label: "Revenir vers le camp", fx: { quest: "YZ" }, back: "A5o_debut" }] },
  },
  extras: {
    quests: [
      { id: "YZ", act: "II", kind: "annexe", title: "Les lettres d'un autre", start: "YZ_demande", doit: "cyrano", echo: ["yz:avoue", "yz:nie", "yz:laisse"] },
    ],
  },
};
