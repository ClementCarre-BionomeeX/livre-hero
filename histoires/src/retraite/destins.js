// La Super Retraite · the fates. After the dénouement at midnight, what became of the others (epilogue lines, in
// order), then of the eight people the story follows (the first fate whose condition holds, the last one by default).
// `dens` names the dénouements a fate can follow (none: all).
var DEUX = { has: "baguettes=deux" };
var PRIS = { any: [{ has: "fin:coffre" }, { has: "fin:train" }] };
var REMBOURSE = { any: [{ has: "fin:coffre" }, { has: "fin:train" }, { has: "fin:maison" }] };
module.exports = {
  endings: {
    associes: { title: "La super super retraite" }, maison: { title: "Croûte & Chrome" }, coffre: { title: "Le siècle sous clé" },
    train: { title: "Le train de 0 h 40" }, levain: { title: "Le pain de garde" }, pain: { title: "Le pain passe" },
    devoile: { title: "La vérité à minuit" }, krach: { title: "Le krach du siècle" },
  },
  epilogue: [
    { if: PRIS, text: "Maître Anatole Gratin reçoit, au printemps, une convocation du juge de Mirevaux. Il répond par une lettre de quatre pages, sur papier vergé, où il explique qu'un expert estime, et que la valeur, ensuite, regarde le public. Le juge l'estime à six mois. Gratin trouve le chiffre bas." },
    { if: { not: PRIS }, text: "Maître Anatole Gratin ne revient jamais à Mirevaux. On le signale à la capitale, puis à Vienne, puis à Buenos Aires, où il estime, dit-on, un œuf de poule à quarante mille pesos. Ses petits-enfants feront le même métier, avec la même loupe." },
    { if: { clue: "c_programme" }, text: "Ambroise Vernis garde dans un carton un exemplaire du programme de la Grande Assemblée, imprimé l'avant-veille, avec le chiffre dedans. Il l'a fait encadrer. En bas, il a ajouté à la main, en tout petit : *Imprimé avant les faits.* C'est la mention légale dont il est le plus fier." },
    { if: { not: { clue: "c_programme" } }, text: "Ambroise Vernis imprime, pour le 2 janvier, l'affiche de la fermeture de la Caisse. Il y met, en bas, la ligne la plus longue de sa carrière, en caractères de deux points. Personne ne la lit. Il le sait. Il la met quand même." },
    { text: "Le père Tarage pèse, le matin du 1er janvier 1900, sur la bascule publique du Carrefour, tout ce qu'on lui apporte : un enfant, un cochon, une malle vide. Il note les chiffres dans son cahier, avec la date. Il dit que le nouveau siècle pèse exactement le même poids que l'ancien. Personne ne le contredit : il a la bascule." },
    { if: DEUX, text: "La n° 2 reste sous l'enclume de la forge de l'oued, enroulée dans le vieux tablier, jusqu'au jour où elle sert, des années plus tard, à quelqu'un qui n'est pas encore né. Elle n'a pas de phrase. On lui en trouvera une." },
    { if: { not: DEUX }, text: "Il n'y a qu'une baguette. Plus tard, beaucoup plus tard, une seconde sera coulée sur le même pain, pour un enfant qui ne sera pas encore né. La forgeronne gravera dessous, seulement : *N° 2.*" },
    { text: "Mémé Chrome vit encore quatre ans. Elle dit, en tout, mille quatre cent soixante phrases, une par jour. Ernestine les a toutes notées dans un cahier noir. La dernière est : « Mettez-la dans la vitrine. »" },
    { text: "Bien plus tard, devant l'Entrepôt du Carrefour, on dressera un ange d'acier blanc, qui sonnera au soleil. Il n'en est pas encore question. En 1900, devant l'Entrepôt, il y a une fontaine, une bascule publique, et des pigeons." },
    { text: "Cent vingt-sept ans plus tard, la n° 1 brille encore. Elle n'a pas pris une tache. Sous le quignon, on lit toujours, en lettres fines : *N° 1 · Barnabé & Ernestine · 1899 · L'acier demeure.* Le pain, lui, est passé. C'était prévu." },
  ],
  fates: [
    { who: "barnabe", label: "Barnabé Croûte", list: [
      { id: "associe", title: "Barnabé, l'associé", dens: "associes", if: { all: [{ has: "fin:associes" }, { has: "b3=associe" }] },
        text: "**Barnabé Croûte** signe les enveloppes du samedi pendant trente-deux ans. Il ne fait plus de pain. Il a toujours de la farine sous les ongles, on ne sait d'où elle vient. Le soir, tard, il descend parfois à la cave de la Banque, ouvre le coffre, et regarde la baguette sur la chaise. Il dit qu'il vérifie qu'elle est toujours là." },
      { id: "marchand", title: "Barnabé, le marchand", dens: "maison", if: { has: "fin:maison" },
        text: "**Barnabé Croûte** découvre qu'il sait vendre une chose qui ne se mange pas mieux que tout ce qui se mange. Il vend la n° 1 bis, la n° 1 ter, la n° 1 quater, chacune numérotée, chacune gravée. Il fait du pain le matin, pour la main, et de l'acier l'après-midi, pour la tête. Il épouse la forgeronne au printemps 1901. La Maison a un fils l'hiver suivant." },
      { id: "boulanger", title: "Barnabé, le boulanger", if: { any: [{ has: "fin:pain" }, { has: "mie:pain" }] },
        text: "**Barnabé Croûte** rouvre le fournil le 2 janvier à quatre heures du matin, comme si de rien n'était. Son pain est toujours magnifique à six heures et mort à six heures du soir. Il trouve cela juste. Il épouse la forgeronne en 1901. Il cuit, pour le mariage, mille neuf cent douze baguettes, par habitude." },
      { id: "fournil", title: "Barnabé, le fournil sauvé", if: REMBOURSE,
        text: "**Barnabé Croûte** rembourse ses trois cents francs à la ville, puisque la Caisse n'existe plus. Le fournil est à lui. Il en fait repeindre l'enseigne, en ajoutant un nom à côté du sien. Il épouse la forgeronne en 1901, devant une ville remboursée qui offre, pour une fois, le champagne." },
      { id: "perdu", title: "Barnabé, sans fournil",
        text: "**Barnabé Croûte** perd le fournil de la rue des Mitrons au printemps, quand le liquidateur de la Caisse vend tout ce qui a été hypothéqué. Il va cuire son pain à la forge de l'oued, dans un four que la forgeronne lui bâtit de ses mains. Ce pain-là a un goût de charbon. Il se vend mieux que l'autre. Il épouse la forgeronne en 1901, dans la forge, entre deux fournées." },
    ] },
    { who: "ernestine", label: "Ernestine Chrome", list: [
      { id: "associee", title: "Ernestine, l'associée", dens: "associes", if: { all: [{ has: "fin:associes" }, { has: "e3=associe" }] },
        text: "**Ernestine Chrome** forge, pendant trente ans, toutes les portes de coffre de la Caisse et de ses succursales. Elles sont toutes parfaites. Elles gardent toutes la même chose. Le soir, elle frappe parfois l'enclume, une fois, pour l'entendre sonner." },
      { id: "geoliere", title: "Ernestine, la porte", dens: "coffre", if: { has: "fin:coffre" },
        text: "**Ernestine Chrome** reçoit, l'année suivante, la commande de toutes les portes de la prison départementale. Elle les fait en acier blanc. Elles ne rouillent pas, elles ne s'ouvrent que de dehors, et on dit dans la province qu'aucune porte ne tient mieux un banquier. Elle garde la goupille de quatre millimètres sur une chaîne, à son cou." },
      { id: "quai", title: "Ernestine, sur le quai", dens: "train", if: { has: "fin:train" },
        text: "**Ernestine Chrome** devient, sans l'avoir cherché, la femme la plus respectée du faubourg. On vient la chercher quand quelqu'un veut partir sans payer. Elle se lève, elle va s'asseoir sur ses malles, elle croise les bras. Personne n'a jamais insisté." },
      { id: "inox", title: "Ernestine, l'inoxydable", if: REMBOURSE,
        text: "**Ernestine Chrome** apprend enfin à la ville à prononcer *inoxydable*. Il lui faut onze ans. On achète ses clous, à présent, et l'on ne demande plus comment savoir s'ils sont vieux : on sait qu'ils le seront. Elle épouse le boulanger en 1901 et ne change pas de nom. Lui non plus. Ils mettent les deux sur l'enseigne." },
      { id: "forge", title: "Ernestine, la forge",
        text: "**Ernestine Chrome** garde la forge de l'oued. Le liquidateur de la Caisse vient la saisir au printemps ; il repart sans avoir franchi le seuil, après une conversation de quatre minutes devant l'enclume. Il n'en parle jamais. Elle épouse le boulanger en 1901, et forge les alliances dans le même acier que la baguette." },
    ] },
    { who: "sorbier", label: "Hector Sorbier", list: [
      { id: "coffre", title: "Sorbier, sous clé", dens: "coffre", if: { has: "fin:coffre" },
        text: "**Hector Sorbier** passe sept ans à la prison départementale, derrière une porte d'acier blanc qu'il reconnaît au premier regard. Il en sort très droit. Il fonde, à la capitale, une banque qui ne garde que des objets, jamais d'argent. Ses descendants collectionneront tout ce qui brille, et surtout ce qui a été volé." },
      { id: "quai", title: "Sorbier, sur le quai", dens: "train", if: { has: "fin:train" },
        text: "**Hector Sorbier** passe cinq ans en prison, où il tient la comptabilité de la cantine avec une honnêteté scrupuleuse, pour l'exercice. À sa sortie, il prend le train de minuit quarante. Il arrive à l'heure. On le revoit à la capitale, dans une autre banque, sous un autre nom, avec la même rose." },
      { id: "associes", title: "Sorbier, l'absent", dens: "associes", if: { has: "fin:associes" },
        text: "**Hector Sorbier** vit à la capitale, dans un hôtel particulier dont le mobilier est estimé, par un expert de ses amis, à trois millions. Il reçoit chaque année, de Mirevaux, une carte de vœux de ses associés. Il ne répond jamais. Il les garde toutes dans un coffre." },
      { id: "fuite", title: "Sorbier, le train de nuit",
        text: "**Hector Sorbier** arrive à la capitale le 1er janvier 1900 à huit heures du matin, avec ses quatre malles. On ne le reprend jamais. Il fonde une collection d'objets précieux, la plus belle de la capitale, et son arrière-petit-fils, des générations plus tard, cherchera encore à acheter une certaine baguette d'acier qui lui a échappé." },
    ] },
    { who: "anselme", label: "Anselme Croûte", list: [
      { id: "temoin", title: "Anselme, le témoin", if: { has: "papa=temoin" },
        text: "**Anselme Croûte** ne touche plus jamais d'enveloppe. Il garde le billet de cinquante francs, au coin déchiré, dans un cadre, au-dessus de son lit. Les enfants de la rue des Tilleuls viennent le voir pour qu'il raconte la nuit des trois minutes. Il la raconte chaque fois un peu plus longue." },
      { id: "sait", title: "Anselme, la rose", if: { has: "papa=sait" },
        text: "**Anselme Croûte** retire, au printemps, sa photographie des affiches de la Caisse, une par une, dans toute la ville, avec un grattoir. Il lui faut trois semaines. Il ne porte plus de rose. Il revient pétrir au fournil, le matin, aux côtés de son fils, sans un mot sur la Caisse." },
      { id: "ignore", title: "Anselme, le visage du siècle",
        text: "**Anselme Croûte** apprend la vérité le 2 janvier, comme tout le monde, en lisant l'affiche sur la porte de la Banque. Il rentre chez lui. Il ôte sa rose. Il demande à son fils, le soir, s'il savait. Barnabé répond que oui. Le vieil homme hoche la tête, et ils pétrissent ensemble jusqu'au matin." },
    ] },
    { who: "mie", label: "Mie", list: [
      { id: "pain", title: "Mie, mille neuf cent douze", if: { has: "mie:pain" },
        text: "**Mie** a douze ans, et elle a nourri une ville en une nuit. On lui propose une place à l'école de commerce de la capitale. Elle refuse : elle fait déjà le compte du fournil, et le compte de la forge, et bientôt celui de la Maison. Elle dirigera un jour toute la comptabilité de Croûte & Chrome, sans jamais laisser un zéro gratté dans un registre." },
      { id: "zero", title: "Mie, le zéro", if: { has: "caisse:vide" },
        text: "**Mie** garde l'ardoise avec le zéro. Elle la pose sur une étagère du fournil, et quand quelqu'un lui propose une affaire trop belle, elle la lui montre sans un mot. Elle devient la comptable la plus redoutée de la province. Elle n'a jamais perdu un sou, ni laissé personne en perdre un." },
      { id: "mie", title: "Mie, l'apprentie",
        text: "**Mie** apprend à pétrir, à façonner, à grigner. Elle compte toujours tout, les pains, les heures, les francs. Elle épouse, quinze ans plus tard, le rouquin de la Grande Boulangerie, qui a appris entre-temps à compter jusqu'à vingt sous." },
    ] },
    { who: "isidore", label: "Isidore", list: [
      { id: "majordome", title: "Isidore, premier majordome", if: { has: "isidore=allie" },
        text: "**Isidore** entre au service d'un boulanger et d'une forgeronne en février 1900, sans qu'on lui ait rien demandé. Il se présente un matin à la forge, ganté, avec une malle. Il devient le premier majordome de la maison Croûte-Chrome. Il en fixera les règles : la distance, le silence, le coussin. Elles ont encore cours." },
      { id: "troisieme", title: "Isidore, la troisième classe",
        text: "**Isidore** prend le train du 2 janvier, en troisième classe, comme prévu. Il rejoint Monsieur à la capitale, ou ce qu'il en reste. Il le sert encore vingt ans, sans une faute, sans un mot. À sa mort, on trouve dans sa malle un billet de troisième classe pour Mirevaux, jamais composté." },
    ] },
    { who: "levain", label: "Victorin Levain", list: [
      { id: "riche", title: "Levain, le seul riche", dens: "levain", if: { has: "fin:levain" },
        text: "**Victorin Levain** garde la baguette d'acier dans sa vitrine pendant onze ans. Puis, un matin, ruiné à son tour par la machine à vapeur qui a explosé, il la revend à un boulanger et une forgeronne, pour le prix d'une machine neuve. Ils la paient comptant. Il ne demande pas d'où vient l'argent. Il n'a jamais su faire chanter une croûte." },
      { id: "rancune", title: "Levain, la rancune", if: { has: "baguette:volee" },
        text: "**Victorin Levain** jure de se venger de la rue des Mitrons. Il le jure à ses enfants, qui le jurent aux leurs. La rancune des Levain contre la Maison durera plus d'un siècle. Elle a, comme son pain de garde, une durée de conservation remarquable." },
      { id: "garde", title: "Levain, le pain de garde",
        text: "**Victorin Levain** continue de faire trois mille pains par nuit avec sa machine à vapeur. Il les fait plus durs chaque année. Un jour, un de ses arrière-petits-fils fera de nouveau du pain mou, du vrai, et ce sera la chose la plus subversive qu'on ait vue dans la famille." },
    ] },
    { who: "augustine", label: "Augustine Salée", list: [
      { id: "lanternes", title: "Augustine, les quarante lanternes", if: { has: "comite=doute" },
        text: "**Augustine Salée** fonde, en février 1900, la première société de secours mutuels de Mirevaux. Elle en écrit les statuts elle-même. Article premier : *L'argent de la société sera montré aux sociétaires une fois par an, à la lanterne.* Ses descendantes garderont la lanterne, le beurre salé, et l'habitude de demander à voir." },
      { id: "creme", title: "Augustine, la crémière", if: REMBOURSE,
        text: "**Augustine Salée** rend l'argent, franc par franc, dans sa crèmerie, à mille neuf cent douze personnes qui font la queue dans la rue. Il lui faut neuf jours. Elle offre une motte de beurre salé à chacun. On dit à Mirevaux que c'est le beurre qui a fait revenir la confiance, et elle ne le dément pas." },
      { id: "ruine", title: "Augustine, trois cent douze francs",
        text: "**Augustine Salée** a perdu ses trois cent douze francs. Elle démissionne du Comité. Elle continue de faire du beurre salé, de plus en plus salé, chaque année, comme si le sel pouvait garder quelque chose. On dit que c'est le meilleur de la province. Elle en est sûre." },
    ] },
  ],
};
