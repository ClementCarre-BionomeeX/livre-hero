// The counter (14.7): the clients who come in when the reader opens the door. The engine draws them, gives each one a
// want among their `wants`, and adds « Lui vendre » (greyed when the shelf is empty) and « T'excuser » under the page.
// A line tagged `voeu` tells why they want it. The story's own clients (prio) come first, once, when their day has come.
var WITH = "ortie";
module.exports = {
  // ------------------------------------------------------------------ the story's own clients
  K_premier_client: {
    title: "La première cliente", place: "boutique",
    fx: { meet: "mathurine", ep: ["seance", 150] },
    text: [
      "La clochette tinte. C'est la première fois depuis un mois qu'elle sonne pour un client, et elle le fait avec un enthousiasme un peu excessif, comme quelqu'un qui retrouve sa voix.",
      "Une grosse femme entre en se baissant sous le linteau, de la farine jusqu'aux coudes et un fichu rouge sur la tête. C'est Mathurine, la meunière des Ronceraies, que tu connais depuis toujours, et qui te connaît depuis plus longtemps encore. « Alors c'est vrai, dit-elle. La petite tient la boutique. » Elle regarde les étagères à moitié vides, puis toi, puis l'enseigne par la fenêtre. « {nom:boutique}. Hm. C'est joli. Hulda aurait dit que c'est trop long. »",
      "Elle pose ses deux mains sur le comptoir. « Mon homme tousse comme un soufflet de forge depuis la Saint-Michel. La nuit, il fait trembler les sacs. Il me faut un sirop. Le même que d'habitude, celui de ta grand-mère. »",
      { with: WITH, text: "Ortie, derrière le comptoir, se met sur la pointe des pieds pour voir la cliente. « Bonjour, madame Mathurine. Votre mari, il tousse comment ? » Mathurine fait une démonstration. Ortie la trouve très réussie." },
      "Il te reste un flacon de sirop de bourrache sur l'étagère, le dernier de Mémé.",
    ],
  },
  K_dame_grise: {
    title: "La Dame Grise", place: "boutique",
    fx: { meet: "dame" },
    text: [
      "La clochette ne tinte pas. Tu lèves la tête parce que la lumière a changé : quelqu'un se tient sur le seuil, dans l'encadrement de la porte ouverte, et tu ne l'as pas entendu ouvrir.",
      "C'est une vieille femme, petite, enveloppée dans une cape grise dont le capuchon lui couvre le visage jusqu'à la bouche. Elle sent la mousse et la pluie, comme un sous-bois après l'orage ; des brindilles sont prises dans le bas de sa cape, et l'ourlet est mouillé, alors qu'il n'a pas plu depuis huit jours.",
      "« Un baume, dit-elle. Pour une vieille qui a les mains qui craquent. » Sa voix est très basse, avec un froissement dedans, un bruit de feuilles qu'on remue. Elle tend vers le comptoir une main gantée de gris.",
      "Bistre, qui crache sur tous les clients par principe, saute du rebord de la fenêtre, traverse la boutique, et se frotte contre le bas de sa cape en ronronnant comme une marmite.",
      { with: WITH, text: "Ortie s'est figée derrière le comptoir, les yeux ronds. Elle garde toutes ses questions pour elle, ce qui ne lui est pas arrivé depuis sa naissance." },
    ],
    choices: [
      { label: "Lui donner un baume de plantain", if: { item: "p_baume" }, fx: { drop: "p_baume", flag: "grise:servie" }, to: "K_dame_grise_gland" },
      { label: "Lui dire que tu n'en as plus, et lui offrir une tisane de lavande", if: { item: "p_sommeil" }, hide: { item: "p_baume" }, fx: { drop: "p_sommeil", flag: "grise:servie" }, to: "K_dame_grise_gland" },
      { label: "Lui dire que tes étagères sont vides", hide: { any: [{ item: "p_baume" }, { item: "p_sommeil" }] }, to: "K_dame_grise_gland" },
    ],
  },
  K_dame_grise_gland: {
    title: "Le gland d'argent", place: "boutique",
    fx: { item: "gland", clue: "m_gland", ep: ["seance", 200] },
    text: [
      { if: { has: "grise:servie" }, text: "La vieille femme prend le pot sans le regarder et le glisse sous sa cape. « Tu as la main de ta grand-mère, dit-elle. Tu n'en as pas encore la tête. Cela viendra. »" },
      { if: { not: { has: "grise:servie" } }, text: "La vieille femme hoche la tête sous son capuchon. « Les étagères vides, c'est le commencement de tout, dit-elle. Ta grand-mère a commencé avec trois pots. »" },
      "Elle pose sur le comptoir une petite chose qui tinte : un gland d'argent, lourd, ciselé jusqu'aux écailles de la cupule. Il est froid, plus froid que le métal ne devrait l'être.",
      "Quand tu relèves les yeux, le seuil est vide. Sur le chemin, entre les houx, personne. Bistre est assis sur le pas de la porte, la queue autour des pattes, et regarde le bois.",
      { with: WITH, text: "« Elle a dit “ta grand-mère”, souffle Ortie. Elle connaît Mémé. » Elle a pris le gland et le tourne entre ses doigts. « Il est froid comme l'étang. »" },
    ],
    choices: [{ back: "H_boutique" }],
  },
  K_dame_grise2: {
    title: "La Dame Grise revient", place: "boutique",
    text: [
      "La Dame Grise est revenue, de la même façon : sans clochette, sans bruit de pas, dans le jour qui baisse. Sa cape traîne plus bas que la dernière fois, et l'ourlet est vert de mousse.",
      "« Une tisane, dit-elle. Pour dormir. Je ne dors plus, à force de veiller. » Sa main gantée tremble un peu sur le bois du comptoir. Sous le gant, entre le cuir et la manche, tu vois un poignet gris, ridé, avec des stries fines, comme une écorce.",
      { if: { stock: "grisaille", min: 4 }, text: "« Le bois a froid, ajoute-t-elle, tout bas. On lui prend son sang. »" },
      { with: WITH, text: "Ortie sort de derrière le comptoir, va jusqu'à la vieille femme, et lui prend la main sans demander la permission. La Dame Grise ne la retire pas. Pendant un long moment, personne ne parle, et Bistre ronronne." },
    ],
    choices: [
      { label: "Lui donner une tisane de lavande", if: { item: "p_sommeil" }, fx: { drop: "p_sommeil", flag: "grise2:servie", item: "rosee", ep: ["seance", 200] }, to: "K_dame_grise2_fiole" },
      { label: "Lui dire que tu n'as plus de lavande préparée", hide: { item: "p_sommeil" }, to: "K_dame_grise2_vide" },
    ],
  },
  K_dame_grise2_fiole: {
    title: "La fiole", place: "boutique",
    fx: { item: ["rosee", "rosee"] },
    text: [
      "La vieille femme glisse le sachet sous sa cape. En échange, elle pose sur le comptoir une fiole minuscule, bouchée de cire, où roulent trois gouttes d'une eau lourde et brillante comme du mercure. La fiole est si froide qu'elle se couvre aussitôt de givre.",
      "« Pour les petits, dit-elle. Tu sauras quoi en faire. Ne la perds pas : c'est cher payé. »",
      "Elle s'en va comme elle est venue. Sur le comptoir, à l'endroit où sa main était posée, il reste une trace de mousse.",
    ],
    choices: [{ back: "H_boutique" }],
  },
  K_dame_grise2_vide: {
    title: "Le seuil vide", place: "boutique",
    text: [
      "La vieille femme reste un moment immobile. « Alors je ne dormirai pas, dit-elle. Ce n'est rien. J'en ai l'habitude, maintenant. »",
      "Elle s'en va. Le seuil est vide avant que tu aies contourné le comptoir.",
    ],
    choices: [{ back: "H_boutique" }],
  },
  K_brunet: {
    title: "Le garde-chasse", place: "boutique",
    fx: { meet: "brunet", clue: "g_mains" },
    text: [
      "Un homme massif, roux de barbe, ôte son chapeau en entrant et doit se baisser deux fois : une pour le linteau, une pour la poutre. Il porte la livrée verte des gens de la comtesse, un couteau de chasse à la ceinture, et des gants de cuir épais qu'il retire en grimaçant.",
      "« Brunet. Garde-chasse de madame la comtesse. » Il pose ses mains sur le comptoir, paumes en l'air. Elles sont rouges, craquelées, avec des cloques blanches au bout des doigts, comme on en voit aux mains des enfants qui ont joué trop longtemps dans la neige. Nous sommes en septembre.",
      "« Un baume, dit-il. Le plus fort. Et ne me demandez pas où je me suis fait ça. »",
      { with: WITH, text: "Ortie le lui demande aussitôt. Brunet la regarde, et remet ses gants." },
    ],
  },
  K_enfants: {
    title: "Les enfants des Ronceraies", place: "boutique",
    text: [
      "La clochette sonne trois fois de suite, parce qu'ils sont trois et qu'aucun ne veut entrer le dernier. Trois enfants des Ronceraies, sept, huit et neuf ans, les poches pleines, alignés devant le comptoir par ordre de taille.",
      "« On veut une potion pour être invisible, dit le plus grand. Pour aller voir les dormeurs sans que nos mères nous voient. Ortie a dit que tu en avais. » Il vide ses poches sur le comptoir : quatre sous, une bille de verre, un hanneton.",
      { with: WITH, text: "Ortie, derrière toi, regarde fixement le plafond." },
      "La potion de brume ne rend pas invisible ; elle fait un brouillard où l'on ne voit plus ses pieds. Pour des enfants, c'est à peu près la même chose.",
    ],
  },

  // ------------------------------------------------------------------ the people who come back
  K_mathurine: {
    title: "Mathurine", place: "boutique",
    text: [
      { first: true, text: "Mathurine entre en secouant la farine de ses manches, et la boutique sent aussitôt le moulin. Elle ne vient jamais seulement acheter : elle vient raconter, et l'achat ne sert qu'à se donner une contenance." },
      { again: true, text: "Mathurine, la meunière, s'accoude au comptoir comme à sa fenêtre, et commence par les nouvelles." },
      { before: "A_tiennot", text: "« Le curé a encore parlé contre les sorcières, dimanche, dit-elle. Pendant vingt minutes. Il avait une tisane de ta grand-mère dans la poche de sa soutane, je l'ai vue dépasser. »" },
      { after: "A_tiennot", before: "B_nuit", text: "« Trois petits qui dorment, maintenant, dit-elle très bas. Le fils Ferrand, la fille du charron, le dernier des Boulard. Gris comme des pierres. Le curé leur a lu tout l'évangile de saint Jean, et ils dorment encore. »" },
      { after: "B_malbec", before: "C_aube", text: "« Le sénéchal de la comtesse est passé au moulin, dit-elle. Pour les impôts, qu'il disait. Il a demandé où ta grand-mère cueillait. Il avait l'air de beaucoup s'intéresser aux sorcières, pour un homme qui les fait patenter. »" },
      { after: "C_aube", text: "« On dit que la comtesse chasse au bois, cette semaine, dit-elle. Avec son sénéchal, et tout le tremblement. Si tu veux mon avis, elle ferait mieux de chasser ses dettes. »" },
      { if: { voeu: "p_toux" }, text: "« Mon homme tousse de nouveau. Il dit que c'est la farine. Je dis que c'est la pipe. Le sirop, lui, ne prend pas parti. »" },
      { if: { voeu: "p_baume" }, text: "« Je me suis brûlée au four à pain. » Elle montre une cloque rouge sur le dos de sa main, avec fierté. « Une belle, hein ? »" },
      { if: { voeu: "p_sommeil" }, text: "« Le moulin grince toute la nuit. Mon homme dort. Moi, je l'écoute grincer. Une tisane, ma belle, ou je finis par huiler la roue moi-même, à minuit, en chemise. »" },
      { if: { voeu: "p_fievre" }, text: "« Ma petite dernière a de la fièvre. Pas le sommeil gris, la fièvre ordinaire, Dieu merci. Je n'aurais jamais cru remercier le ciel pour une fièvre. »" },
    ],
  },
  K_fauvel: {
    title: "Fauvel", place: "boutique",
    fx: { meet: "fauvel" },
    text: [
      { first: true, text: "Le vieux Fauvel entre sans frapper, comme dans la maison d'une parente. Il est bûcheron depuis soixante ans, maigre et noueux comme un vieux cep, avec une pipe éteinte entre les dents ; il ne l'allume jamais, et il ne s'en sépare jamais, ce qui est une façon de fumer comme une autre. Il regarde l'enseigne par la fenêtre, puis toi. « Bien », dit-il. C'est un discours, chez lui." },
      { again: true, text: "Fauvel entre, ôte son bonnet, et attend qu'on lui parle. Il a de la sciure dans la barbe." },
      { after: "A_tiennot", before: "C_aube", text: "« Le bois du nord grisonne, dit-il, ce qui fait une longue phrase pour lui. Les arbres y dorment debout. Il y a des ornières sur le vieux chemin, la nuit. Lourdes. » Il mâchonne sa pipe. « Je n'ai rien dit. »" },
      { if: { voeu: "p_baume" }, text: "Il montre son pouce, entaillé par la hache, enveloppé dans un chiffon. « Baume. »" },
      { if: { voeu: "p_fievre" }, text: "« Ma sœur. La fièvre. Elle a quatre-vingts ans, elle dit qu'elle n'a pas le temps d'être malade. »" },
      { if: { voeu: "p_courage" }, text: "« Pour entrer dans le bois du nord, dit-il. Il faut y couper, c'est la commande. Je n'ai jamais eu peur d'un bois. Celui-là, si. »" },
    ],
  },
  K_cure: {
    title: "Le curé Anselme", place: "boutique",
    fx: { meet: "cure" },
    text: [
      { first: true, text: "Le curé des Ronceraies entre en regardant derrière lui, comme un homme qui pousse la porte d'un mauvais lieu, ce qui est exactement ce qu'il pense faire. C'est un petit homme rond et rose, qui tonne contre la sorcellerie tous les dimanches et vient chercher ses tisanes le mardi, par la porte de devant, parce qu'il serait plus coupable de se cacher." },
      { again: true, text: "Le curé Anselme entre, se signe, regarde les étagères avec réprobation, et sort sa bourse." },
      { if: { voeu: "p_sommeil" }, text: "« Pour dormir, dit-il. J'ai la conscience tranquille, remarquez. C'est celle de mes paroissiens qui m'empêche de dormir : je les confesse, et j'y pense la nuit. »" },
      { if: { voeu: "p_toux" }, text: "« Ma gorge, dit-il en toussotant. La chaire est humide, et le sermon de dimanche était long. Il fallait qu'il soit long : il était contre vous. »" },
      { if: { voeu: "p_beaute" }, text: "Il se penche par-dessus le comptoir et baisse la voix. « L'eau d'églantine, dont on parle. Ce n'est pas pour moi. C'est pour ma gouvernante. Elle a soixante ans, et il ne faut pas le lui dire. » Il rougit jusqu'au crâne." },
      { with: WITH, text: "Ortie lui demande s'il est vrai que les sorcières vont en enfer. Le curé réfléchit, tousse, et répond que tout dépend de la qualité des tisanes." },
    ],
  },
  K_berthe: {
    title: "La vieille Berthe", place: "boutique",
    fx: { meet: "berthe" },
    text: [
      { first: true, text: "La vieille Berthe arrive à la boutique au bout d'une heure de chemin, à petits pas, appuyée sur son bâton de houx, et elle refuse la chaise que tu lui tends, parce qu'à son âge, si on s'assoit, on ne se relève plus." },
      { again: true, text: "La vieille Berthe est sur le seuil, essoufflée et contente d'elle. « Une heure dix, dit-elle. Je l'ai fait en une heure dix. »" },
      { if: { voeu: "p_sommeil" }, text: "« À mon âge, dit-elle, on ne dort plus. On attend le matin en repassant sa vie, et il y a des passages qu'on aimerait sauter. »" },
      { if: { voeu: "p_baume" }, text: "« Mes mains, dit-elle, et elle les montre, toutes tordues. Elles ont lavé le linge de tout le hameau pendant soixante ans, et maintenant c'est elles qui se plaignent. »" },
      { if: { voeu: "p_fievre" }, text: "« Pas pour moi. Pour la petite des voisins. Moi, la fièvre n'ose plus m'approcher. »" },
    ],
  },
  K_colin: {
    title: "Colin", place: "boutique",
    fx: { meet: "colin" },
    text: [
      { first: true, text: "Colin, le fils du meunier, seize ans, grand comme une perche, entre en heurtant la clochette du front, s'excuse auprès d'elle, puis auprès de toi, puis auprès du chat. Il a une mèche blonde qui lui tombe dans les yeux et qu'il remonte sans cesse, comme un rideau qu'on voudrait garder ouvert." },
      { again: true, text: "Colin revient, rouge jusqu'aux oreilles, et regarde ses chaussures en parlant." },
      { if: { voeu: "p_courage" }, text: "« C'est pour… c'est pour parler à Margot, dit-il. La fille du charron. Je lui parle tous les jours. Mais pour lui dire… la chose, il faut du courage, et je n'en ai pas, enfin, j'en ai, mais il s'en va quand elle arrive. »" },
      { if: { voeu: "p_beaute" }, text: "« L'eau d'églantine, dit-il. Pour mes boutons. » Il en a deux, et il les montre comme deux blessures de guerre." },
      { if: { voeu: "p_toux" }, text: "« Un sirop, dit-il, et il tousse, très mal. Mon père m'envoie. » Il ne tousse pas du tout, et il reste un long moment à regarder par la fenêtre, du côté des Ronceraies, sans rien acheter d'autre." },
      { with: WITH, text: "Ortie lui demande s'il est amoureux. Colin fait tomber un pot." },
    ],
  },
  K_voyageur: {
    title: "Un voyageur", place: "boutique",
    text: [
      { if: { day: { max: 4 } }, text: "Un marchand de rubans, en route pour la foire de Valombre, s'est écarté de la grand-route parce qu'on lui avait parlé d'une sorcière dans le bois. Il entre, son ballot sur l'épaule, et regarde les étagères avec l'œil d'un homme qui calcule ce qu'il pourrait revendre." },
      { if: { day: { min: 5, max: 8 } }, text: "Une pèlerine en manteau de bure, le bâton à la main, la coquille au chapeau, entre se reposer un moment sur le banc. Elle va prier à un sanctuaire du nord pour un vœu dont elle ne dit rien, et elle a des ampoules aux pieds, dont elle parle beaucoup." },
      { if: { day: { min: 9 } }, text: "Un étudiant de l'Académie de Valombre, en manteau noir, le nez en l'air, entre pour voir « une vraie sorcière ». Il est un peu déçu de te trouver si ordinaire, et un peu impressionné par le chaudron, qu'il aperçoit par la porte de l'arrière-boutique." },
      { if: { voeu: "p_baume" }, text: "« Un baume, pour la route. Les chemins de ce comté sont faits pour les chèvres. »" },
      { if: { voeu: "p_toux" }, text: "« Un sirop. J'ai pris froid à la belle étoile ; la belle étoile, c'est une expression de poète, pour dire qu'on n'avait pas d'auberge. »" },
      { if: { voeu: "p_fievre" }, text: "« Un remède contre la fièvre, s'il vous plaît, pour le cas où. Sur la route, on est toujours à deux jours d'un médecin, et à trois d'un bon. »" },
      { if: { voeu: "p_courage" }, text: "« Un philtre de courage, si c'est possible. On dit que le bois est hanté, du côté de la vieille route du nord, et c'est par là que je dois passer. »" },
    ],
  },
  K_dame: {
    title: "Une dame en voiture", place: "boutique",
    text: [
      { first: true, text: "Une voiture s'arrête sur le chemin, devant la boutique : une voiture à deux chevaux, avec des armoiries peintes sur la portière, dans un endroit où l'on ne voit d'ordinaire que des brouettes. Une dame en descend, en robe de soie gris perle, un mouchoir parfumé sous le nez, comme si le bois entier sentait mauvais. Elle entre dans la boutique avec l'air d'une personne qui visite une curiosité." },
      { again: true, text: "La voiture armoriée est revenue. La dame en robe de soie entre, et cette fois elle a oublié son mouchoir." },
      { if: { voeu: "p_beaute" }, text: "« On parle à Valombre d'une eau d'églantine qui vient d'ici, dit-elle. Mes amies en ont. Je ne vois pas pourquoi elles seraient plus belles que moi, puisqu'elles le sont déjà bien assez. »" },
      { if: { voeu: "p_sommeil" }, text: "« Je ne dors pas, dit-elle. À Valombre, personne ne dort : on a trop de choses à se dire, et toutes sont fausses. »" },
      { with: WITH, text: "Ortie fait une révérence si profonde qu'elle tombe. La dame la regarde, puis éclate de rire, et elle a soudain l'air beaucoup plus jeune." },
    ],
  },
  K_bergere: {
    title: "Jacquette la bergère", place: "boutique",
    text: [
      { first: true, text: "Jacquette, la bergère des hauts, entre avec son chien, qui se couche sur le seuil et ne quitte pas Bistre des yeux, et avec l'odeur de ses moutons, qui entre avant elle et reste après. Elle a le visage cuit par le vent, des yeux très clairs, et elle parle comme on appelle les bêtes, d'une seule voix qui porte." },
      { again: true, text: "Jacquette la bergère est là, son chien couché sur le seuil." },
      { if: { voeu: "p_baume" }, text: "« Une brebis s'est ouvert la patte dans les ronces. Le baume de ta grand-mère, c'est le seul qui tient sur une patte de mouton. »" },
      { if: { voeu: "p_fievre" }, text: "« Mon berger a la fièvre. Pas le dormeur gris : il tremble et il jure, alors ça va. »" },
      { if: { voeu: "p_toux" }, text: "« Il y a du vent sur les hauts. Il entre partout, même dans la poitrine. »" },
    ],
  },
  K_soldat: {
    title: "Un soldat de la comtesse", place: "boutique",
    text: [
      { first: true, text: "Un soldat entre, en livrée verte de Rocheclaire, le casque sous le bras et la moustache cirée avec soin. Il fait partie de la garde de la comtesse, qui en compte douze, dont huit sont nécessaires pour garder les quatre autres de l'ennui." },
      { again: true, text: "Le soldat de la comtesse revient. Il a ciré sa moustache de nouveau, en ton honneur peut-être." },
      { if: { voeu: "p_courage" }, text: "« Un philtre de courage, dit-il, et il baisse la voix. On nous envoie de garde au bois la nuit, sur ordre du sénéchal. On ne sait pas ce qu'on garde. Les arbres, peut-être. Ils sont gris. »" },
      { if: { voeu: "p_baume" }, text: "« Pour mes pieds. Les bottes de la comtesse ont été taillées pour un autre. »" },
      { if: { voeu: "p_fievre" }, text: "« Pour le sergent. Il a la fièvre et il crie des ordres en dormant. »" },
    ],
  },
  K_mere: {
    title: "Une mère des Ronceraies", place: "boutique",
    text: [
      "Une femme des Ronceraies entre sans refermer la porte, essoufflée, les mains jointes devant elle. Elle a couru tout le chemin. Elle a un enfant qui dort, gris, depuis deux jours, et elle a entendu dire que la sorcière du bois sait réveiller les dormeurs.",
      "« Une potion d'éveil, dit-elle. Je paierai. Je n'ai pas grand-chose, mais je paierai. »",
      { with: WITH, text: "Ortie te tire par la manche, sans rien dire. Elle te regarde." },
    ],
    choices: [
      { label: "La lui donner pour rien", if: { item: "p_eveil" }, fx: { drop: "p_eveil", stock: { renommee: 3 }, conf: { ortie: 5 }, flag: "eveil:donne" }, to: "K_mere_merci" },
    ],
  },
  K_mere_merci: {
    title: "Pour rien", place: "boutique",
    text: [
      "La femme te regarde comme si tu venais de lui donner la lune, puis elle serre le flacon contre elle et s'en va en courant. Elle n'a pas dit merci. Elle le dira aux autres, toute la journée, et ce sera mieux.",
      { with: WITH, text: "Ortie te prend la main et la serre, très fort, une seule fois." },
    ],
    choices: [{ back: "H_boutique" }],
  },
};
