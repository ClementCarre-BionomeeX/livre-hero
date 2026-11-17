// L'Île Folle-Aiguille · side story « Le chirurgien des deux humeurs », part two (act III, the doctor). At sea, Monsieur
// Gris walks at night: a sailor beaten, a man laughing in the dark. The doctor can wean Émeric Vauclair (five nights
// locked in the sick bay, with the other one talking through his mouth), hand him to the captain, or give him back his
// tincture. Read later: vauclair:sauve (a second surgeon at the chapel), vauclair:livre (in irons), vauclair:gris (the
// mutineers gain a man who knows the pharmacy).
module.exports = {
  passages: {
    XJ_bord: { act: "III", title: "Monsieur Gris", place: "cormorane", ambiance: "nuit",
      fx: { meet: "vauclair" },
      text: [
        "Émeric Vauclair est un aide parfait. Il arrive avant elle, part après elle, coud plus fin qu'elle, et l'équipage l'aime comme on aime un saint qui ne fait pas la morale. Le jour.",
        { if: { has: "vauclair:averti" }, text: "Chaque soir, à la même heure, quand la cloche pique quatre coups, il vient se planter devant le placard de la pharmacie, celui dont Victorine garde la clef. Il ne demande rien. Il regarde la serrure. Puis il s'en va, très droit, se coucher dans son hamac, et Victorine l'entend, à travers la cloison, ne pas dormir." },
        { if: { not: { has: "vauclair:averti" } }, text: "Chaque soir, à la même heure, quand la cloche pique quatre coups, il tire de son habit une petite fiole brune, s'en verse trois gouttes sur un morceau de sucre, et va se coucher." },
        "Le sixième matin, Simon Tarlet se présente à l'infirmerie avec un œil fermé, une lèvre fendue et deux côtes enfoncées. Il est tombé dans l'échelle, dit-il. Victorine connaît les échelles ; elles ne frappent pas avec des poings.",
        "« Un homme, souffle enfin Tarlet, quand elle insiste. Dans la cale, cette nuit. Je ne l'ai pas vu. Il riait. Il riait tout le temps qu'il frappait, comme s'il entendait une bonne histoire. »",
        "Dans le hamac de l'aide-chirurgien, ce matin-là, Émeric Vauclair dort encore, à neuf heures, profondément, le visage paisible. Sa main droite pend hors du hamac. Elle a les jointures écorchées.",
      ],
      choices: [{ label: "Le réveiller", to: "XJ_bord_reveil" }] },
    XJ_bord_reveil: { act: "III", title: "Monsieur Gris", place: "cormorane", ambiance: "mer",
      text: [
        "Il ouvre les yeux. Il voit Victorine. Il voit sa propre main. Il la regarde comme on regarde la main d'un autre, avec une curiosité horrifiée, et la cache sous sa couverture.",
        { if: { has: "vauclair:averti" }, text: "« J'ai forcé le placard, dit-il d'une voix blanche. Cette nuit. Je n'ai pas pu… J'ai attendu que vous dormiez. J'ai pris l'épingle de votre chignon, sur la table. Je ne me souviens de rien d'autre. Lui, il se souvient. »" },
        { if: { not: { has: "vauclair:averti" } }, text: "« J'ai doublé la dose, dit-il d'une voix blanche. Trois gouttes ne suffisaient plus. Il voulait sortir, il frappait à l'intérieur, comme un enfant dans un ventre. Je lui ai ouvert. Je ne me souviens de rien. Lui, il se souvient. »" },
        "Il pleure, sans bruit, en regardant le plafond. « Madame, je vous en prie. Faites quelque chose de moi. N'importe quoi. Mais faites-le vous-même. »",
      ],
      choices: [
        { label: "L'enfermer à l'infirmerie, et le sevrer", to: "XJ_sevrage" },
        { label: "Le livrer à la capitaine", to: "XJ_livre" },
        { label: "Lui rendre sa teinture, et le laisser vivre comme il peut", to: "XJ_rendre" },
      ] },

    XJ_sevrage: { act: "III", title: "La première nuit", place: "cormorane", ambiance: "nuit",
      text: [
        "Victorine fait clouer une barre en travers de la porte de l'infirmerie, du côté du couloir, et demande à Fréville d'y poser un cadenas dont elle garde la clef. Elle prévient la capitaine, en deux mots. Elle verse le contenu de la fiole brune dans la mer, par le hublot, devant lui.",
        "La première nuit, il ne dort pas. Il transpire, il tremble, il a froid. Il demande de l'eau, puis du laudanum, puis la fiole, puis la mort, poliment, dans cet ordre. Victorine reste assise sur sa chaise, à côté du hamac, une chandelle à la main, et répond non à chaque fois, avec la même voix.",
        "Vers trois heures, il cesse de demander. Il se tourne vers elle, dans le hamac. Son visage a changé. Il sourit.",
        "« Bonsoir, docteur, dit Monsieur Gris. On se connaît, je crois. Vous m'avez vu, à Morlenc, dans l'impasse. Vous avez eu froid, sous votre porche. Moi, je n'ai jamais froid. »",
      ],
      choices: [{ label: "Lui répondre", to: "XJ_gris" }] },
    XJ_gris: { act: "III", title: "Monsieur Gris", place: "cormorane", ambiance: "nuit",
      text: [
        "Il parle toute la nuit. Il parle avec la voix de Vauclair, plus haute, plus aiguë, coupée de rires. Il raconte ce que Vauclair a oublié : un enfant mort sous sa lancette, à l'hôpital de la Marine, la première année, parce qu'il avait trop bu la veille ; une femme qu'il a aimée et qu'il a laissée partir sans un mot ; un père qui le battait, et qu'il a soigné, plus tard, jusqu'à la fin, sans jamais lui dire qu'il le haïssait.",
        "« C'est moi qui garde tout ça, dit Gris en riant. Lui, il est léger, il est doux, il est bon. Moi, j'ai les poches pleines. Si vous me tuez, docteur, qui portera ses poches ? Il ne tiendra pas une semaine. »",
        "Puis, vers le matin, d'une voix qui change encore, plus basse, presque sérieuse : « Et puis, je vois des choses, la nuit, que lui ne voit pas. Je vais dans la cale. Il y a là des gens qui se parlent, quand le navire dort. Un grand, qui sent la poudre, et un qui chante. » Il rit. « Vous voulez savoir ce qu'ils disent ? Rendez-moi la fiole. »",
      ],
      choices: [
        { label: "« Non. »", to: "XJ_nuits" },
        { label: "« Dites-le d'abord. Ensuite, nous verrons. »", test: { dom: "social", diff: 10, label: "Marchander avec Gris" },
          win: { fx: { flag: "complot:gris" }, to: "XJ_gris_dit" }, lose: { to: "XJ_nuits" } },
      ] },
    XJ_gris_dit: { act: "III", title: "Monsieur Gris", place: "cormorane", ambiance: "nuit",
      text: [
        "Gris rit, d'un rire ravi. Il aime qu'on joue avec lui.",
        "« Le grand dit : quand ? Le chanteur dit : pas avant l'île. On laisse creuser les bourgeois. On frappe quand c'est à bord. Le grand dit : et le baron ? Le chanteur dit : le baron paiera deux fois. » Il se tait. Puis il ajoute, d'une voix d'enfant : « Et la médecin, qu'est-ce qu'on en fait ? Le chanteur a dit : rien. Elle soigne. On aura besoin de quelqu'un qui soigne. »",
        "Il éclate de rire, puis tend la main. « La fiole, maintenant. »",
        "Victorine ne bouge pas. Elle n'a plus de fiole. Elle l'a jetée à la mer, devant lui, la veille. Gris s'en souvient au même instant, et son visage se tord de rage, et il se jette sur les cordes du hamac en hurlant.",
      ],
      choices: [{ label: "Tenir bon", to: "XJ_nuits" }] },
    XJ_nuits: { act: "III", title: "Les nuits", place: "cormorane", ambiance: "nuit",
      text: [
        "La deuxième nuit, il hurle. Tout le navire l'entend. Les matelots de quart se signent et Gobert va frapper à la porte barrée pour demander si on égorge un cochon. La troisième nuit, il pleure. La quatrième, il se tait, et c'est pire : il reste couché dans le hamac, les yeux ouverts, à regarder Victorine sans ciller, avec un sourire qui n'appartient à personne.",
        "La cinquième nuit, Victorine s'endort sur sa chaise, une heure, la tête contre une courbe de chêne. Quand elle se réveille, le hamac est vide.",
        "La barre est toujours en travers de la porte. Le cadenas est fermé. Le hublot est ouvert, un hublot large comme deux mains, par où un homme ne peut pas passer, sauf un homme très maigre, qui ne mange plus depuis cinq jours, et qui n'a plus peur de se faire mal.",
      ],
      choices: [{ label: "Courir sur le pont", test: { dom: "savoir", diff: 0, label: "Le trouver à temps" }, win: { to: "XJ_sauve" }, lose: { to: "XJ_perdu" } }] },
    XJ_sauve: { act: "III", title: "L'aube", place: "cormorane", ambiance: "mer",
      text: [
        "Elle le trouve au bout de dix minutes, accroché aux porte-haubans, à l'extérieur de la coque, au-dessus de l'eau noire. Il ne veut pas sauter. Il ne veut pas remonter. Il est là, entre les deux, trempé d'embruns, et il regarde la mer qui passe sous lui à six nœuds.",
        "Victorine se penche par-dessus la lisse. Elle ne lui dit pas de remonter. Elle lui dit son nom. « Émeric. » Elle le répète. « Émeric Vauclair. Docteur en médecine de la Faculté de Morlenc. Aide-chirurgien de la Cormorane. J'ai besoin de vous ce matin : Tarlet a deux côtes enfoncées, et je ne sais pas bander une poitrine aussi bien que vous. »",
        "Il lève la tête. C'est son visage à lui, à nouveau, son visage doux, épuisé, étonné. Il tend la main. Elle la prend.",
        "Il dort deux jours. Quand il se réveille, il a faim. Il mange. Il se lève. Il bande les côtes de Tarlet, et ses mains ne tremblent presque plus. Le soir, à quatre coups, il ne regarde pas le placard.",
        "Il ne parlera jamais de Gris. Victorine non plus. Mais parfois, la nuit, elle l'entend rire dans son sommeil, d'un petit rire aigu, très bref, et elle reste éveillée jusqu'à l'aube.",
      ],
      choices: [{ label: "Reprendre le travail", fx: { flag: "vauclair:sauve", quest: "XJ", penche: { vauclair: 2 }, regard: { vauclair: "redevable" } }, to: "XJ_fin" }] },
    XJ_perdu: { act: "III", title: "L'aube", place: "cormorane", ambiance: "mer",
      text: [
        "Elle le cherche partout, sur le pont, dans les hunes, dans la cale, avec une lanterne, en appelant. Il n'est nulle part. Il est partout.",
        "Au matin, elle le trouve dans la cambuse. Il est assis sur le tabouret du maître-coq, propre, rasé, une tasse de café à la main, et il rit avec Fargue, avec Malandain, avec Coquerel, comme on rit entre vieux amis. Il la voit sur le seuil. Il lève sa tasse.",
        "« Docteur ! Entrez donc. Monsieur Fargue a eu la bonté de me prêter un peu de rhum. Je me sens beaucoup mieux. » Il sourit. Ses yeux gris ne sont plus doux du tout. « Émeric vous salue. Il ne reviendra pas. Il était fatigué. »",
        "Fargue, derrière lui, regarde Victorine avec une sorte de tristesse, et ne dit rien.",
      ],
      choices: [{ label: "Partir sans un mot", fx: { flag: "vauclair:gris", quest: "XJ", penche: { vauclair: -3 } }, to: "XJ_fin" }] },

    XJ_livre: { act: "III", title: "Les fers", place: "cormorane", ambiance: "mer",
      fx: { meet: "ribaud" },
      text: [
        "La capitaine Ribaud écoute Victorine, puis Tarlet, puis Vauclair lui-même, qui confesse tout ce dont il ne se souvient pas avec une sincérité désespérante. Elle décide en une minute, comme elle décide du cap.",
        "« Aux fers, dans la soute à câbles, jusqu'à ce que nous trouvions un port où l'on juge les gens. » Elle regarde Vauclair. « Je suis désolée, docteur. Je ne sais pas qui a frappé Tarlet, de vous ou de l'autre. La loi non plus. La loi n'a qu'un seul cou à pendre. »",
        "On l'enchaîne dans la soute à câbles, à un anneau du bordé, dans le noir, avec une cruche et un seau. Victorine lui descend ses repas elle-même. Le premier soir, il la remercie. Le troisième, il ne dit rien. Le cinquième, quand elle ouvre la trappe, il rit dans le noir, d'un rire aigu, et dit, avec une autre voix : « Bonsoir, docteur. On s'ennuie, ici. Heureusement, il y a du passage. Des gens descendent, la nuit, me parler. Des gens très gentils. Ils ont la clef. »",
      ],
      choices: [{ label: "Refermer la trappe", fx: { flag: "vauclair:livre", quest: "XJ", penche: { vauclair: -1 } }, to: "XJ_fin" }] },
    XJ_rendre: { act: "III", title: "La fiole", place: "cormorane", ambiance: "mer",
      text: [
        { if: { has: "vauclair:averti" }, text: "Victorine ouvre le placard de la pharmacie, prend la fiole brune, et la pose sur la table, devant lui. Il la regarde. Il ne la prend pas tout de suite." },
        { if: { not: { has: "vauclair:averti" } }, text: "Victorine lui rend la fiole qu'elle lui a prise dans la poche, pendant son sommeil. Il la regarde. Il ne la prend pas tout de suite." },
        "« Vous êtes sûre ? dit-il.",
        "— Je ne suis sûre de rien, docteur. Je sais seulement que je ne peux pas vous garder éveillé jusqu'à l'île, et que vous ne survivrez pas à l'autre méthode. Prenez votre dose. Prenez-la moins forte. Et quand il sortira, enfermez-vous. »",
        "Il prend la fiole. Il la serre contre lui comme on serre un enfant. Il remercie, il remercie trop. Le soir, il ne s'enferme pas. Le lendemain non plus.",
        "Au bout d'une semaine, l'aide-chirurgien qu'aimaient les matelots ne vient plus à l'infirmerie que le matin, tard, les yeux cernés, et l'après-midi, un homme qui lui ressemble passe ses heures à la cambuse, à rire avec les hommes du maître-coq.",
      ],
      choices: [{ label: "Le laisser faire", fx: { flag: "vauclair:gris", quest: "XJ", penche: { vauclair: -3 } }, to: "XJ_fin" }] },
    XJ_fin: { act: "III", title: "Monsieur Gris", place: "cormorane", ambiance: "mer",
      text: [
        "Victorine note dans son carnet, ce soir-là, à la date du jour, une ligne qu'elle ne relira pas : *L'homme n'est pas un. Il est au moins deux, et l'un des deux a toujours la clef.*",
      ],
      choices: [{ back: true }] },
  },
  extras: {},
};
