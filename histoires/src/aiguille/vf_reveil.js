// L'Île Folle-Aiguille · side story « Le réveil de Chèvrefeuille » (owes its question to Rip Van Winkle: should one
// tell a man how much of his life he has lost?). Act IV, the High Orchard: an old man of the Gentle, Chèvrefeuille,
// feverish for three days, has been unable to chew his bark. He wakes. He remembers that his name is Mathieu Tréguer,
// cooper, of Morlenc, that he has a wife in the rue des Tonneliers and a daughter of four, and that he came here on a
// ship last spring. He asks the child for news of home. The child tells him the truth (vf:verite), tells him it has been
// only a few years (vf:menti), or hands him back the bark when the memory starts to hurt (vf:ecorce). Wired in XD_verger.
module.exports = {
  passages: {
    VF_fievre: { act: "IV", title: "Le réveil de Chèvrefeuille", place: "haut_verger", ambiance: "village",
      fx: { meet: "treguer" },
      text: [
        "On te conduit à une maison sans porte, au bout du verger, où un vieil homme est couché sur une natte, sous une couverture de feuilles. Il a eu la fièvre trois jours, te dit-on, en souriant, et pendant trois jours il n'a pas pu mâcher. Ce matin, la fièvre est tombée. Les Doux sont contents, et un peu inquiets, et ils ne savent pas pourquoi ils sont inquiets. Ils l'appellent Chèvrefeuille. Ils te laissent seul{e} avec lui. Ils n'aiment pas rester près des gens qui ne mâchent pas.",
        "Il a les yeux clairs, lavés par la fièvre, et il te regarde comme on regarde quelqu'un au réveil, dans une chambre qu'on ne reconnaît pas. Il touche sa barbe, longue, blanche, et il a l'air surpris de la trouver là. Il regarde ses mains, tachées, nouées, et il a l'air surpris aussi. Puis il te demande, d'une voix enrouée de n'avoir pas servi : « Petit{e}… le navire est-il reparti ? La Compagnie m'a promis qu'on rentrerait avant l'hiver. »",
        "Il te dit son nom. Il le dit lentement, comme on remonte un seau d'un puits très profond, et il a l'air ébloui de le retrouver au fond. Mathieu Tréguer. Tonnelier. De Morlenc, rue des Tonneliers, la quatrième maison après la fontaine. Il a une femme, Azilis, qui chante faux. Il a une fille de quatre ans, Gaïd, qui a peur des chats. Il est parti au printemps avec la Compagnie pour faire fortune aux îles, et revenir acheter un atelier à lui. Il te demande quel mois on est. Il te demande si l'on a des nouvelles de Morlenc.",
      ],
      choices: [{ label: "Le regarder, et compter", to: "VF_compte" }] },
    VF_mains: { act: "IV", title: "Le réveil de Chèvrefeuille", place: "haut_verger", ambiance: "village",
      text: [
        "Il parle, et pendant qu'il parle, ses mains travaillent. Il ne s'en aperçoit pas. Elles prennent sur la natte une tige de liane, la plient, la tordent, en font un cercle, en serrent les bouts, et le cercle est parfait, rond comme une lune, d'une rondeur qu'on n'obtient qu'avec trente ans de métier. Puis elles en font un autre, un peu plus grand. Puis un troisième.",
        "Tu regardes autour de toi, et tu vois ce que tu n'avais pas vu en entrant. La maison sans porte est pleine de tonneaux. Petits, grands, des tonnelets, des seaux, des baquets, des cuves, faits de lattes de bois de figuier serrées par des cercles de liane, alignés le long des murs, empilés les uns dans les autres, jusqu'au toit. Il y en a dans tout le village, maintenant que tu y penses : on y garde l'eau, les figues, les graines. Personne, au verger, ne fait de tonneaux, sauf lui.",
        "Les Doux ne savent pas ce que c'est, un tonnelier. Ils disent seulement que Chèvrefeuille fait des pots ronds, depuis toujours, et qu'il les fait bien, et que c'est ce qu'il fait quand il est content. Ils en ont plus qu'il n'en faut. Il en fait quand même. Il en a fait trente ans, sans savoir pourquoi, en mâchant son écorce, avec des mains qui se souvenaient de la rue des Tonneliers quand sa tête ne s'en souvenait plus.",
        "Il pose le troisième cercle sur les deux autres. Il les regarde, étonné, comme s'ils étaient tombés du ciel. Il dit, en riant un peu, que c'est drôle, qu'il a dû rêver de l'atelier, pendant la fièvre. Il dit qu'il a hâte d'y retourner. Il dit que son apprenti a dû laisser sécher les douelles de travers, en son absence, et qu'il lui tirera les oreilles.",
      ],
      choices: [
        { back: "VF_compte", label: "Revenir à sa question" }
      ] },
    VF_veilleuse: { act: "IV", title: "Le réveil de Chèvrefeuille", place: "haut_verger", ambiance: "village",
      text: [
        "Elle est assise au pied de la natte depuis que tu es entré, sans un mot, une femme des Doux d'une cinquantaine d'années, aux cheveux gris tressés de fleurs, aux mains tachées de jus de figue. Elle a les yeux doux et vagues de tous les gens du verger. Elle regarde le vieil homme avec une tendresse tranquille, comme on regarde un arbre qu'on a vu pousser.",
        "Tu lui demandes qui elle est. Elle sourit. Elle dit qu'elle s'appelle Mauve. Elle dit qu'elle est la femme de Chèvrefeuille. Elle le dit simplement, comme une chose qui va de soi, comme le ciel est bleu. Elle dit qu'ils dorment ensemble depuis toujours, dans cette maison, et qu'ils ont planté ensemble les figuiers du bas, ceux qui donnent les plus grosses figues, et qu'ils les ont regardés grandir.",
        "Elle dit qu'il est malade, depuis trois jours, et qu'il dit des mots qu'elle ne comprend pas. Une rue. Une fontaine. Un nom de femme qui n'est pas le sien. Elle dit que ce n'est rien, que c'est la fièvre, et que dès qu'il aura mâché il redeviendra lui-même. Elle dit cela sans inquiétude. Elle tend la main, et elle lui caresse la cheville, par-dessus la couverture de feuilles.",
        "Le vieil homme, sur sa natte, ne la regarde pas. Il te regarde, toi, qui viens de Morlenc, et il attend des nouvelles de sa femme. Mauve, à ses pieds, continue de lui caresser la cheville, doucement, avec le geste usé de trente ans de nuits. Il ne retire pas sa jambe. Tu ne sais pas s'il sent la main, ou s'il la sent sans savoir de qui elle est.",
      ],
      choices: [
        { back: "VF_compte", label: "Revenir au chevet du vieil homme" }
      ] },
    VF_compte: { act: "IV", title: "Le réveil de Chèvrefeuille", place: "haut_verger", ambiance: "village",
      text: [
        { first: true, text: "Tu comptes. La Mère Aubépine a parlé de trente ans, de vingt ans pour retrouver les noms. Les Doux parlent la langue de ta grand-mère. La fille qui avait peur des chats a donc trente-quatre ans, des enfants peut-être, et un souvenir de son père qui doit tenir dans le creux de la main. La femme qui chantait faux est morte, ou remariée, ou vieille. La rue des Tonneliers, tu la connais : on l'a percée, il y a dix ans, pour faire passer la grand-rue du port. La fontaine a disparu. La quatrième maison aussi." },
        { first: true, text: "Il attend ta réponse avec une patience tranquille, celle d'un homme qui croit avoir dormi une nuit. Ses lèvres, à force de trente ans d'écorce, ont une couleur brune qui ne partira plus. Ses dents sont usées jusqu'aux gencives. Il passe la langue dessus, et il fronce les sourcils, et une première inquiétude, très petite, passe dans ses yeux, et repart." },
        { first: true, text: "Sur une pierre, à côté de la natte, quelqu'un a laissé, par habitude, ou par bonté, un morceau d'écorce brune, fibreuse, de la taille d'un doigt. Il ne l'a pas encore remarqué. Toi, si." },
        { again: true, text: "Mathieu Tréguer attend ta réponse, adossé à sa natte, et l'écorce est toujours posée sur la pierre." }
      ],
      choices: [
        { label: "Regarder ses mains, qui travaillent toutes seules", to: "VF_mains", hide: { seen: "VF_mains" } },
        { label: "Parler à la femme des Doux qui veille au pied de sa natte", to: "VF_veilleuse", hide: { seen: "VF_veilleuse" } },
        { label: "Lui dire la vérité, toute, en lui tenant la main", fx: { flag: "vf:verite" }, to: "VF_verite" },
        { label: "Lui dire que ça ne fait que quelques années", fx: { flag: "vf:menti" }, to: "VF_menti" },
        { label: "Attendre qu'il ait mal, et lui tendre l'écorce", fx: { flag: "vf:ecorce" }, to: "VF_ecorce" },
      ] },
    VF_verite: { act: "IV", title: "Le réveil de Chèvrefeuille", place: "haut_verger", ambiance: "village",
      text: [
        "Tu lui dis. Trente ans. La Compagnie, la chapelle, l'écorce. La rue percée. La fontaine. Tu lui dis que sa fille a trente-quatre ans. Tu ne lui dis rien de sa femme, parce que tu ne sais rien, et il comprend ce silence mieux que tout le reste. Il ne t'interrompt pas. Il regarde ses mains, de nouveau, et cette fois, il les reconnaît. Il dit : « Ah. » Rien d'autre, pendant longtemps.",
        "Puis il pleure. Il pleure comme on vide un tonneau, d'un seul coup, à grands sanglots sans bruit, trente ans de larmes que l'écorce a retenues derrière une bonde. Tu restes près de lui. Les Doux passent devant la maison sans porte, en souriant, inquiets, sans entrer.",
        { if: { not: { has: "xd:noms" } }, text: "Le soir, la Mère Aubépine vient s'asseoir à son chevet, avec son carnet. Elle cherche une page. Elle trouve son nom. Elle le lui lit à voix haute, avec son âge, son métier, sa rue. Il hoche la tête. Il dit que c'est lui." },
        { if: { has: "xd:noms" }, text: "Le soir, tu sors le carnet de la Mère Aubépine, que tu portes contre toi depuis qu'elle te l'a donné. Tu cherches. Tu trouves son nom, d'une écriture minuscule, avec son âge, son métier, sa rue. Tu le lui lis à voix haute. Il hoche la tête. Il dit que c'est lui." },
        "Le lendemain, il refuse l'écorce. La Mère Aubépine n'est plus seule à ne pas mâcher, dans le Haut-Verger. Ils sont deux vieux, désormais, assis sous le figuier, à se rappeler des noms, à se disputer sur la place de la fontaine, et à pleurer quelquefois, l'un ou l'autre, sans prévenir. Il te dit, quand tu pars : « Si tu vois une femme de trente-quatre ans qui a peur des chats, rue de n'importe quoi, à Morlenc, dis-lui que son père a été long à rentrer. Rien d'autre. Elle comprendra ou non. »",
      ],
      choices: [{ label: "Revenir sous les arbres", fx: { quest: "VF" }, back: "XD_verger" }] },
    VF_menti: { act: "IV", title: "Le réveil de Chèvrefeuille", place: "haut_verger", ambiance: "village",
      text: [
        "Tu lui dis que ça ne fait que quelques années. Trois, quatre. Que la fièvre l'a vieilli, que l'île vieillit les gens, que sa barbe repoussera noire. Il te croit. Il a tellement envie de te croire que c'est presque facile. Il rit. Il se redresse sur sa natte. Il parle d'Azilis, qui sera furieuse, et de Gaïd, qui aura grandi, qui saura lire peut-être, et de l'atelier qu'il achètera avec ce qu'il rapportera. Il demande quand repart le navire. Tu dis bientôt.",
        "Il passe la journée à se préparer. Il se lave à la source. Il demande un rasoir, qu'on ne trouve pas. Il fait un baluchon de feuilles et de fruits secs pour la traversée. Il te parle sans arrêt, avec une gaieté de jeune homme, et chaque phrase est un clou que tu sens s'enfoncer quelque part. Le soir, il demande un miroir, pour voir à quel point la fièvre l'a changé. Il n'y a pas de miroir au Haut-Verger. Tu en remercies le ciel. La source, heureusement, est trouble.",
        "Tu repars du verger sans lui. Il est assis devant sa maison sans porte, son baluchon sur les genoux, les yeux sur le sentier de la plage, et il attend le navire, tranquille, heureux. Combien de temps il attendra, qui lui dira, et comment : tu l'ignores. Tu sais seulement que, cette nuit-là, quand il aura un peu mal sans savoir pourquoi, quelqu'un, par bonté, posera sur la pierre près de la natte un morceau d'écorce brune. Tu espères qu'il le prendra. C'est la pire chose que tu aies jamais espérée.",
      ],
      choices: [{ label: "Revenir sous les arbres", fx: { quest: "VF" }, back: "XD_verger" }] },
    VF_ecorce: { act: "IV", title: "Le réveil de Chèvrefeuille", place: "haut_verger", ambiance: "village",
      text: [
        "Tu le laisses parler, d'Azilis, de Gaïd, de la fontaine. Et peu à peu, à mesure qu'il parle, tu vois la peur monter en lui comme une marée, sans qu'il comprenne d'où elle vient. Il regarde ses mains. Il touche ses dents. Il demande, d'une voix qui se fêle, pourquoi il a si mal, partout, à des endroits qui ne sont pas son corps. Il a le front trempé. Il serre ton poignet très fort.",
        "Tu prends l'écorce sur la pierre et tu la lui tends. Il la regarde. Quelque chose, au fond de lui, la reconnaît, et ses doigts la prennent avant lui. Il la porte à sa bouche. Il mâche. Tu vois l'effet venir, lentement, comme on voit un lac se calmer après une pierre : les rides s'effacent, une à une, les yeux se voilent d'une brume douce, la main lâche ton poignet. Il te sourit. Il ne te reconnaît plus. Il dit : « Mâche. C'est bon. Après, il n'y a plus rien qui fait mal. »",
        "En sortant de la maison sans porte, tu croises la Mère Aubépine, sous son figuier, qui t'a regardé{e} faire de loin. Elle t'accueille sans un reproche.",
        { if: { not: { has: "xd:noms" } }, text: "Elle ouvre son carnet, cherche une page, et trace, à côté d'un nom, un petit signe que tu ne connais pas, une sorte de demi-croix. Tu lui demandes ce qu'il veut dire. Elle dit : « Ceux qui ont failli revenir. » Il y en a d'autres, dans le carnet. Beaucoup d'autres." },
        { if: { has: "xd:noms" }, text: "Elle te demande le carnet, que tu portes contre toi, cherche une page, et trace, à côté d'un nom, un petit signe que tu ne connais pas, une sorte de demi-croix. Tu lui demandes ce qu'il veut dire. Elle dit : « Ceux qui ont failli revenir. » Elle te rend le carnet. En le refermant, tu vois qu'il y en a d'autres. Beaucoup d'autres." },
      ],
      choices: [{ label: "Revenir sous les arbres", fx: { quest: "VF" }, back: "XD_verger" }] },
  },
  extras: {
    people: {
      treguer: { name: "Mathieu Tréguer", aka: ["Chèvrefeuille"], qui: "Tonnelier de Morlenc, venu au Haut-Verger avec la Compagnie, il y a trente ans." },
    },
    quests: [
      { id: "VF", act: "IV", kind: "annexe", title: "Le réveil de Chèvrefeuille", start: "VF_fievre", doit: "ripvanwinkle", echo: ["vf:verite", "vf:menti", "vf:ecorce"] },
    ],
  },
};
