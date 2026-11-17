// L'Île Folle-Aiguille · side story « À grand-père, au village » (owes its question to Vanka: what does one do with a
// letter that cannot arrive?). Act II, the Basse-Fosse: a nine-year-old apprentice of the cobbler of the rue des
// Tanneurs, Pierrick, beaten, starved, sold by his grandfather to the city for six livres, stops the child and asks him
// to post a letter, because the child wears the jacket of a ship and ships carry letters. The letter, written in a
// child's hand on the back of a shoe pattern, begs « grand-père » to come and fetch him. The address reads: « À
// grand-père, au village ». The child posts it as it is (wz:poste), tries to find the village with him (wz:cherche), or
// goes to see the cobbler (wz:maitre). Wired in A2m_bf.
module.exports = {
  passages: {
    WZ_garcon: { act: "II", title: "À grand-père, au village", place: "basse_fosse", ambiance: "ville",
      fx: { meet: "pierrick" },
      text: [
        "Il t'arrête par la manche, rue des Tanneurs, devant une échoppe basse où l'on entend un marteau taper sur du cuir. Un enfant de neuf ans, peut-être, en tablier de cordonnier trop grand, pieds nus, maigre comme un chat de gouttière, avec une joue enflée, violette, et des yeux qui regardent derrière toi, vers l'échoppe, toutes les trois secondes, comme un lièvre surveille le chien.",
        "« Tu es d'un navire, dit-il, très vite, en regardant ta vareuse. Les navires, ça porte les lettres. » Il sort de son tablier un papier plié en huit, un patron de soulier découpé dans du papier gris, et sur le dos, au crayon, une écriture d'enfant, toute de travers, pleine de pâtés. Il te le met dans la main. « Mets-la à la poste. J'ai pas de sou pour la poste. C'est pour mon grand-père. »",
        "Le marteau s'arrête, dans l'échoppe. L'enfant pâlit. Il dit, encore plus vite : « Je m'appelle Pierrick. Mets-la à la poste. Il viendra me chercher. » Et il rentre en courant dans l'échoppe, et le marteau reprend, et puis il y a un bruit sec, et un petit cri, et le marteau encore.",
      ],
      choices: [{ label: "Lire la lettre, au coin de la rue", to: "WZ_lettre" }] },
    WZ_lettre: { act: "II", title: "À grand-père, au village", place: "basse_fosse", ambiance: "ville",
      text: [
        "*Cher grand-père. Je t'écris une lettre. Je te souhaite la bonne santé. Je n'ai ni père ni mère, il n'y a que toi. Le maître m'a battu hier avec la forme à souliers parce que j'ai laissé brûler la poix. La maîtresse me tire les oreilles jusqu'au sang quand je casse une aiguille, et j'en casse. On me donne du pain le matin et de la soupe le soir et le lard c'est pour eux. Je dors sous l'établi, avec les rats, qui sont plus gentils. Grand-père viens me chercher pour l'amour de Dieu. Je te garderai les vaches. Je te graisserai les bottes. Je ferai tout. Si tu veux pas, prends un bâton et bats-moi, mais viens me chercher. Je t'embrasse. Ton petit-fils Pierrick. Dis bonjour à Charbon.*",
        "Tu retournes le patron. L'adresse est écrite en grandes lettres, appuyées, au milieu, avec un soin infini : *À grand-père, au village.* Rien d'autre. Pas de nom de village. Pas de nom de grand-père. Tu regardes ces quatre mots longtemps. Au bout de la rue, le marteau tape toujours sur le cuir.",
        "Tu sais assez de choses sur la poste, depuis que tu lis les lettres des gens de la Pointe, pour savoir ce qui arrive aux lettres qui vont *au village* : on les met dans un sac, au bureau du port, et à la fin de l'année on brûle le sac. Tu sais aussi qu'il y a, à trois lieues de Morlenc, deux cents villages, et dans chacun un vieux, et un chien, et des vaches.",
      ],
      choices: [
        { label: "La poster quand même, telle qu'elle est", fx: { flag: "wz:poste" }, to: "WZ_poste" },
        { label: "Repasser le soir, et lui demander le nom du village", fx: { flag: "wz:cherche" }, to: "WZ_cherche" },
        { label: "Entrer dans l'échoppe, et parler au cordonnier", fx: { flag: "wz:maitre" }, to: "WZ_maitre" },
      ] },
    WZ_poste: { act: "II", title: "À grand-père, au village", place: "basse_fosse", ambiance: "ville",
      text: [
        "Tu vas au bureau de la poste du port, sur le quai, et tu paies deux sous de ta poche, et tu la glisses dans la boîte de cuivre, avec les lettres des armateurs, des notaires et des amoureux. Le commis la regarde passer, lit l'adresse, et lève vers toi un sourcil fatigué. Il ne dit rien. Il en a vu d'autres. Il la met dans un sac à part, un petit sac gris, posé dans un coin, déjà gonflé.",
        "Le soir, tu repasses rue des Tanneurs. Le petit est assis sur le seuil, à la nuit, en train de cirer des souliers. Il te voit. Ses yeux s'allument. Tu lui fais un signe de tête : *postée.* Il sourit, d'un sourire si grand, si confiant, avec sa joue violette, que tu dois détourner les yeux. Il dit : « Il viendra. Il viendra avec la charrette. » Il se remet à cirer, en chantonnant.",
        "La Cormorane appareille huit jours plus tard. Le petit est toujours sur son seuil, le dernier soir, et il regarde le bout de la rue, du côté de la campagne, comme on regarde la mer quand on attend un navire. Tu ne lui as pas menti. Tu as posté la lettre. C'est ce que tu te répètes, en mer, la nuit, quand tu penses à un petit sac gris, posé dans un coin, déjà gonflé, qu'on brûlera à la fin de l'année.",
      ],
      choices: [{ label: "Regagner la Basse-Fosse", fx: { quest: "WZ" }, back: "A2m_bf" }] },
    WZ_cherche: { act: "II", title: "À grand-père, au village", place: "basse_fosse", ambiance: "nuit",
      text: [
        "Tu reviens le soir, à la nuit, quand le cordonnier boit à la taverne d'en face. Pierrick est assis sur le seuil, à cirer. Tu lui demandes le nom du village. Il te regarde sans comprendre. Il dit : « Le village. » Tu demandes s'il y a une église, une rivière, un moulin, un nom. Il réfléchit très fort. Il dit qu'il y a une rivière. Et un chien, Charbon, noir avec une tache blanche. Et grand-père, qui fume la pipe. Et des vaches. Il dit que c'est à droite, en sortant de Morlenc, très loin, deux jours de charrette.",
        "Tu lui demandes le nom de son grand-père. Il dit : « Grand-père. » Puis, après un effort : « Les gens l'appellent le vieux Konan. » Tu notes tout, au crayon, sur un bout de papier. Tu ajoutes l'adresse, sous les quatre mots du petit : *Le vieux Konan, qui fume la pipe et qui a un chien noir à tache blanche appelé Charbon, au village sur la rivière, à droite en sortant de Morlenc, à deux jours de charrette.* Tu la postes. Le commis lit l'adresse. Il lève les yeux. Cette fois, il sourit.",
        "Il la met dans le sac des campagnes, pas dans le sac gris. Il dit que les facteurs ruraux connaissent les vieux et les chiens mieux que les noms des villages, et que ça arrive, quelquefois. Pas souvent. Quelquefois. Tu ne sauras jamais. Le jour de l'appareillage, de la vergue où tu ferles la voile, tu regardes la route de la campagne, à droite en sortant de Morlenc. Il y a des charrettes. Il y en a toujours. Tu ne peux pas voir qui est dedans.",
      ],
      choices: [{ label: "Regagner la Basse-Fosse", fx: { quest: "WZ" }, back: "A2m_bf" }] },
    WZ_maitre: { act: "II", title: "À grand-père, au village", place: "basse_fosse", ambiance: "ville",
      text: [
        "Tu entres. L'échoppe sent le cuir, la colle et le chou. Le cordonnier est un gros homme à lunettes, en tablier, avec des bras velus, qui tape sur une semelle. Sa femme, derrière, berce un nourrisson qui hurle. Pierrick, dans un coin, pétrit de la poix, la joue enflée, sans lever les yeux. Tu dis que tu es de la Cormorane. Tu dis que tu as vu le petit. Tu dis qu'il a la joue enflée. Tu ne sais pas très bien ce que tu dis ensuite.",
        "Le cordonnier t'écoute, sans cesser de taper. Puis il pose le marteau. Il te dit, sans colère, en articulant, comme on parle à un idiot, qu'il a payé six livres pour ce gamin à son grand-père, l'hiver dernier, un vieux qui n'avait plus de quoi le nourrir et qui l'a vendu en pleurant ; que le gamin dort, mange et apprend un métier ; qu'on l'a battu comme on l'a battu lui-même, et son père avant lui ; et que si un mousse de navire vient lui apprendre à élever ses apprentis, il lui fera goûter de la forme à souliers, à lui aussi.",
        "Tu sors. Tu as les joues brûlantes. Derrière toi, au bout d'un moment, tu entends le marteau reprendre, puis s'arrêter, puis un bruit sec, et un petit cri, et le marteau encore. Le petit a payé ta visite. Tu le comprends dans la rue, et tu t'arrêtes, et tu ne peux plus avancer. La lettre est dans ta poche. Tu la gardes. Tu l'as encore, quelque part, des années plus tard, le patron de soulier gris, plié en huit, avec ses quatre mots appuyés. Tu ne sais pas pourquoi tu la gardes. Tu sais qu'il ne faut pas la jeter.",
      ],
      choices: [{ label: "Regagner la Basse-Fosse", fx: { quest: "WZ" }, back: "A2m_bf" }] },
  },
  extras: {
    people: {
      pierrick: { name: "Pierrick", aka: ["le petit apprenti"], qui: "Apprenti de neuf ans chez un cordonnier de la rue des Tanneurs, à Morlenc." },
    },
    quests: [
      { id: "WZ", act: "II", kind: "annexe", title: "À grand-père, au village", start: "WZ_garcon", doit: "vanka", echo: ["wz:poste", "wz:cherche", "wz:maitre"] },
    ],
  },
};
