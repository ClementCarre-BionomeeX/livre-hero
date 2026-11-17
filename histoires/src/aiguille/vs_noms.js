// L'Île Folle-Aiguille · side story « Les livrets des noyés » (owes its question to Dead Souls: what is a dead man's
// name worth, and who owns it?). Act II, Fargue in Morlenc: Fargue needs on the crew list a few men whom the captain
// would never take under their own names. Monsieur Plusquellec, clerk of the seamen's rolls, offers him the
// seamen's books of three sailors drowned last winter, whose deaths he has never recorded: on paper they are alive, so
// their widows draw no pension, and the books can be sold. Fargue buys them and uses them (vs:achete), refuses
// (vs:refuse), or buys them and carries them to the widows, so that the deaths are recorded (vs:veuves).
// Wired in XR_jours.
module.exports = {
  passages: {
    VS_bureau: { act: "II", title: "Les livrets des noyés", place: "basse_fosse", ambiance: "ville", second: true,
      fx: { meet: "plusquellec" },
      text: [
        "Le bureau des Rôles occupe le rez-de-chaussée d'une maison humide du quai, derrière une porte vitrée où l'on a peint, en lettres d'or écaillées, *Rôles & Livrets*. On y inscrit les marins, on y enregistre leurs embarquements, leurs débarquements, leurs blessures, leurs morts. Tout ce qu'un homme de mer a été tient dans un livret de toile grise, avec un numéro. Au comptoir trône Monsieur Plusquellec, commis principal, un petit homme rond, propre, rose, aux manchettes de lustrine immaculées, qui sent la poudre de riz et l'encre fraîche.",
        "Fargue a un problème. Il lui faut, au rôle de la Cormorane, trois hommes dont il a besoin et dont la capitaine Ribaud ne voudrait pas : un ancien de la Maraude que tout Morlenc connaît, un charpentier qui sort de prison, un gabier qui a déserté d'un navire de l'Amirauté. Sous leur nom, ils ne passeront pas. Plusquellec le sait. Plusquellec sait tout ce qui passe sur son comptoir. Il fait entrer Fargue dans son arrière-bureau, ferme la porte, et sort d'un tiroir trois livrets gris, aux coins cornés.",
        "« Le Gouil, Jean-Marie, gabier. Tanvez, Goulc'hen, charpentier. Cloarec, Yves, matelot. » Il les pose sur la table comme des cartes. « Péris tous les trois l'hiver dernier, à bord du *Fleur-de-Lande*, au large des Hollandes. Corps jamais retrouvés. Décès jamais enregistrés, par une négligence administrative que je déplore. Sur le papier, ces messieurs sont vivants, inscrits, aptes. Ils peuvent embarquer. » Il sourit. « Dix livres pièce. Un nom ne coûte pas plus cher qu'une paire de bottes, à Morlenc. Il dure plus longtemps. »",
      ],
      choices: [{ label: "Lui demander ce qu'il advient des veuves", to: "VS_veuves" }] },
    VS_pile: { act: "II", title: "Les livrets des noyés", place: "basse_fosse", ambiance: "ville", second: true,
      text: [
        "Plusquellec la montre d'un geste négligent, sans se lever. Au coin du bureau, sous un presse-papier de bronze en forme de dauphin, une pile de lettres, haute d'une main, retenue par une ficelle rose qui a dû servir à un paquet de dragées. Il dit que Fargue peut regarder, s'il veut. Il dit que ce n'est pas un secret. Il dit que c'est seulement du papier.",
        "Fargue dénoue la ficelle. Les lettres ne se ressemblent pas. Certaines sont écrites par un écrivain public, en belle ronde, avec des formules. D'autres d'une main de femme, en grosses lettres penchées, sans orthographe, avec des taches de doigts. Une, au crayon, sur une page de cahier d'écolier, a été écrite par un enfant pour sa mère, qui la signe d'une croix. Toutes disent la même chose : il n'est pas revenu. On l'a vu tomber. On a retrouvé son bonnet. Payez-moi.",
        "Certaines datent de deux ans. Les plus récentes sont posées dessus, les plus anciennes dessous, comme les couches d'une falaise. Fargue en lit une, puis une autre. Une femme écrit qu'elle a vendu le lit. Une autre qu'elle a placé l'aîné chez un patron de pêche, à neuf ans. Une troisième demande seulement qu'on lui dise si son mari est mort, oui ou non, pour qu'elle sache si elle peut se remarier sans péché.",
        "Plusquellec, pendant ce temps, se lime un ongle. Il dit que c'est très émouvant, évidemment, et que la Marine n'a pas de cœur, et qu'il le déplore. Fargue renoue la ficelle, avec un nœud de marin, très serré. Il remet le dauphin dessus. Il se dit que ce bureau sent la violette, et qu'il a rarement senti, dans une pièce, une odeur aussi déplaisante.",
      ],
      choices: [
        { back: "VS_veuves", label: "Revenir au bureau, devant les trois livrets" }
      ] },
    VS_registre: { act: "II", title: "Les livrets des noyés", place: "basse_fosse", ambiance: "ville", second: true,
      text: [
        "Le grand registre des Rôles est ouvert sur un pupitre incliné, près de la fenêtre, comme un missel sur un lutrin. Un volume énorme, relié de veau, où chaque marin inscrit à Morlenc a sa ligne : nom, prénom, âge, paroisse, signalement, navires, et une colonne d'observations, très large, à droite. Plusquellec en est visiblement fier. Il dit que c'est sa main. Il dit que l'Amirauté a cité ses registres en exemple, deux fois.",
        "C'est vrai qu'ils sont beaux. Une écriture de calligraphe, régulière comme une couture, des majuscules ornées, des pleins et des déliés, pas une rature, pas une tache. Fargue tourne les pages. Les morts y sont inscrits, à l'encre rouge, avec la date et le lieu : péri en mer, mort à l'hôpital, tué au service. Il y en a beaucoup. On meurt beaucoup, dans la marine de Morlenc, et ça fait de très jolies pages.",
        "Puis il remarque autre chose, dans la colonne des observations. De loin en loin, à côté d'un nom resté noir, un tout petit signe au crayon. Une croix minuscule, si légère qu'on la prendrait pour un défaut du papier. Il en trouve une, puis trois, puis dix. Il compte sur quelques pages. Il s'arrête à quarante.",
        "Plusquellec suit son regard, et ne se trouble pas. Il dit que ce sont ses notes de travail. Il dit qu'un bon commis a toujours un peu d'avance sur l'administration. Il dit qu'on gomme très facilement le crayon, le jour où l'on passe à l'encre rouge. Il sourit. Fargue se dit qu'il a devant lui l'homme le plus soigneux de Morlenc, et que le soin est une vertu dont on parle trop bien.",
      ],
      choices: [
        { back: "VS_veuves", label: "Revenir au bureau, devant les trois livrets" }
      ] },
    VS_veuves: { act: "II", title: "Les livrets des noyés", place: "basse_fosse", ambiance: "ville", second: true,
      text: [
        { first: true, text: "Plusquellec hausse les épaules avec élégance. Les veuves ? Tant que les décès ne sont pas enregistrés, il n'y a pas de veuves, administrativement parlant. Il y a des épouses de marins absents. Elles ne touchent pas la pension de la Caisse des veuves de la Marine, évidemment, puisque leurs maris ne sont pas morts. Elles pourraient faire une réclamation. Elles en ont fait. Les réclamations sont sur son bureau, avec les autres, dans la pile de gauche. Il désigne la pile. Elle est haute." },
        { first: true, text: "Il ajoute, sur le ton de la confidence, qu'il fait cela depuis vingt ans, que cela rend service à tout le monde, aux capitaines qui manquent de bras, aux hommes qui manquent de nom, et à l'administration, qui économise des pensions. Il dit que les morts, eux, ne réclament jamais rien. Il dit que c'est la clientèle idéale. Il rit de son mot, un petit rire propre, rose, comme lui." },
        { first: true, text: "Fargue regarde les trois livrets. Il pense aux trois hommes dont il a besoin. Il pense à Annette, dans la fosse des pauvres, sans nom sur aucune pierre, et à ce qu'il a ressenti, au cimetière, devant le mur où les familles gravent les noms au couteau. Il pense que Plusquellec vend des noms comme on vend des harengs, et que, d'une certaine façon, lui, Fargue, est venu en acheter. Il a dans sa poche l'argent du baron." },
        { again: true, text: "Plusquellec attend, les trois livrets en éventail sur son buvard, comme une main de cartes qu'on vient de distribuer." }
      ],
      choices: [
        { label: "Demander à voir la pile des réclamations", to: "VS_pile", hide: { seen: "VS_pile" } },
        { label: "Regarder le grand registre des Rôles, ouvert sur le pupitre", to: "VS_registre", hide: { seen: "VS_registre" } },
        { label: "Acheter les trois livrets, et faire embarquer ses hommes sous ces noms", if: { gold: { min: 30 } }, why: "Fargue n'a plus de quoi.", fx: { flag: "vs:achete", gold: -30 }, to: "VS_achete" },
        { label: "Refuser, et embarquer qui il pourra sous son propre nom", fx: { flag: "vs:refuse" }, to: "VS_refuse" },
        { label: "Acheter les livrets, et les porter aux veuves", if: { gold: { min: 30 } }, why: "Fargue n'a plus de quoi.", fx: { flag: "vs:veuves", gold: -30 }, to: "VS_rend" },
      ] },
    VS_achete: { act: "II", title: "Les livrets des noyés", place: "basse_fosse", ambiance: "ville", second: true,
      text: [
        "Il paie. Plusquellec compte les pièces sans les regarder, au toucher, comme un aveugle. Le lendemain, trois hommes se présentent au bureau d'enrôlement de la Cormorane, avec trois livrets gris, et signent au rôle de trois signatures maladroites qui ne ressemblent à rien. Le second de la capitaine ne pose pas de question. Le Gouil, Tanvez, Cloarec. Trois noyés du *Fleur-de-Lande* repartent en mer.",
        "Fargue leur apprend leurs noms, le soir, à la cambuse, comme on apprend une leçon à des enfants. Le vieux de la Maraude devient Jean-Marie Le Gouil, de Varnèse, vingt-huit ans d'après le livret ; il en a cinquante, et il rit en se le répétant. Le charpentier devient Goulc'hen Tanvez, qui avait une femme et deux filles rue des Cordiers. Le gabier devient Yves Cloarec, qui n'avait personne. Ils apprennent. Ils s'appellent entre eux par leurs noms de noyés, pour s'habituer, et au bout de trois jours, ils ne se trompent plus.",
        "La veille de l'appareillage, Fargue passe dans la rue des Cordiers. Il ne sait pas pourquoi il y passe. Une femme en noir, devant une porte, étend du linge, avec deux petites filles qui jouent à ses pieds. Elle n'est pas veuve, administrativement parlant. Elle attend la pension d'un mari vivant, inscrit, apte, qui embarque demain sur la Cormorane sous les traits d'un charpentier sorti de prison. Fargue passe sans s'arrêter. Il a ce qu'il voulait. Il a, en plus, quelque chose qu'il ne voulait pas, et qui pèse dix livres, et qui ne se revend pas.",
      ],
      choices: [{ label: "Retourner aux préparatifs", fx: { quest: "VS" }, back: "XR_jours" }] },
    VS_refuse: { act: "II", title: "Les livrets des noyés", place: "basse_fosse", ambiance: "ville", second: true,
      text: [
        "Il repousse les livrets du bout des doigts, comme on repousse une assiette qui sent mauvais. Il dit à Plusquellec qu'il a connu des hommes qui sont morts sans nom, et qu'il ne leur fera pas l'injure de porter celui des autres. Plusquellec, nullement vexé, range les livrets dans son tiroir avec soin. Il dit qu'il en a d'autres, si Monsieur change d'avis. Il dit que Monsieur changera d'avis. Ils changent tous.",
        "Fargue embarque qui il peut. L'ancien de la Maraude reste à terre, furieux, et le traite de cuisinier de sacristie. Le charpentier aussi. Il ne lui reste, de ses trois hommes, que le déserteur, qu'il fait inscrire sous son vrai nom, en priant pour que personne, au bureau, ne compare les registres de l'Amirauté. Il lui manque deux bras pour ce qu'il prépare. Il calcule. Il recalcule. Il trouvera ailleurs, à bord, parmi ceux qui sont déjà inscrits. Ce sera plus long. Ce sera plus dangereux.",
        "Le soir, en passant devant le bureau des Rôles, il voit par la porte vitrée Plusquellec, rose et propre, qui vend un livret gris à un autre homme, un grand rouquin qu'il ne connaît pas, pour un autre navire. Le nom d'un autre noyé. Fargue pense qu'il n'a rien empêché. Il a seulement refusé d'en être. Il se demande si c'est la même chose qu'avoir les mains propres. Il regarde ses mains. Elles sentent l'oignon. Elles sont propres.",
      ],
      choices: [{ label: "Retourner aux préparatifs", fx: { quest: "VS" }, back: "XR_jours" }] },
    VS_rend: { act: "II", title: "Les livrets des noyés", place: "basse_fosse", ambiance: "ville", second: true,
      text: [
        "Il paie. Plusquellec sourit. Fargue met les trois livrets dans sa poche, sort, et va, non pas au bureau d'enrôlement de la Cormorane, mais chez un écrivain public de la Basse-Fosse, un vieux à lunettes, à qui il fait recopier les trois noms, les trois numéros, et le nom du *Fleur-de-Lande*. Puis il va trouver les veuves. Rue des Cordiers. Rue du Bac. Derrière la halle aux poissons. Il leur rend les livrets de leurs maris. Il leur dit où aller, ce qu'il faut réclamer, et qu'elles auront leur pension, si elles apportent le livret au bon bureau, et pas à celui de Plusquellec.",
        "Il fait plus. Il porte au commissaire de la Marine, un homme sévère qu'il a connu jadis sous un autre uniforme, la copie de l'écrivain public, avec la date de vente et le prix. Le lendemain, Plusquellec n'est plus à son comptoir. Le surlendemain, on dit au quai qu'on a trouvé dans son tiroir quarante-deux livrets de noyés, et dans la pile de gauche, quarante-deux réclamations de veuves. Les décès sont enregistrés en une semaine. Les pensions arrivent.",
        "Fargue a perdu trente livres et trois hommes. Il embarque sans eux. Il lui manquera, plus tard, ces trois bras. Il le sait. Mais la veille de l'appareillage, une femme en noir, rue des Cordiers, qui étend son linge devant sa porte avec deux petites filles, le voit passer, et pose sa pince à linge, et lui fait, d'un signe de tête, un salut qu'il n'a pas reçu depuis très longtemps : celui qu'on fait à un homme honnête. Il ne sait pas quoi en faire. Il ne s'en croit pas digne. Il le garde quand même.",
      ],
      choices: [{ label: "Retourner aux préparatifs", fx: { quest: "VS" }, back: "XR_jours" }] },
  },
  extras: {
    people: {
      plusquellec: { name: "Monsieur Plusquellec", aka: ["le commis des Rôles"], qui: "Commis principal du bureau des Rôles de Morlenc." },
    },
    quests: [
      { id: "VS", act: "II", kind: "annexe", title: "Les livrets des noyés", start: "VS_bureau", doit: "amesmortes", echo: ["vs:achete", "vs:refuse", "vs:veuves"] },
    ],
  },
};
