// Les Trois Clefs d'Aiguemorne · act IV, the common thread (second half): before dawn on the 7th of November, under
// the pendulum. What the day gave, the people to count, Maître Crochemore's forge, and the vote on the plan
// (`plan_a4`): at the dice (jeu, the voice leads, this evening), in his chamber (chambre, the hand leads, this night),
// at the hunt of the great stag (chasse, the eye leads, tomorrow); a tie means each for oneself at the masked ball (bal).
// Sets monde:a4:fausse=fine|grossiere|aucune and monde:a4:comte_sait (the count knows who holds the two other keys).
// Leads to: A4m_jeu_1 / A4o_jeu_1 / A4v_jeu_1, A4m_cha_1…, A4m_chs_1…, A4m_bal_1….
var POSTE = function (m, o, v) { return [{ if: { role: "a4", is: "main" }, to: m }, { if: { role: "a4", is: "oeil" }, to: o }, { to: v }]; };
var DETTE = { has: "monde:douce:dette" };
var MARCHE = { all: [{ has: "monde:douce:marche" }, { not: "monde:douce:dette" }] };
var RANCUNE = { all: [{ has: "monde:douce:rancune" }, { not: "monde:douce:dette" }, { not: "monde:douce:marche" }] };
module.exports = {
  passages: {
    A4c_rdv: { act: "IV", title: "Sous le balancier", place: "tour_horloge", ambiance: "nuit", charniere: true,
      fx: { until: 4 },
      text: [
        "Il est près de quatre heures du matin, à toutes les horloges du monde sauf à celle-ci.",
        "Le brasero rougit sous le balancier. Sa lentille de cuivre pend entre les paillasses, immobile, et l'on s'y voit à l'envers, tout petit, avec le feu au plafond. Dans la charpente, les grandes roues grises attendent. Le vent passe sur le cadran.",
        "Maître Crochemore a rangé ses limes par taille. Il ne dort pas ; il ne dort plus guère, depuis une porte, à Ossevaux.",
        "Tu es rentré{e}. Tu attends que les deux autres soient assis.",
      ],
      choices: [{ label: "Mettre en commun la journée", to: "A4c_mise", big: true }] },

    A4c_mise: { act: "IV", title: "Ce que la maison a rendu", place: "tour_horloge", ambiance: "nuit",
      text: [
        "Vous parlez bas, chacun son tour, comme la Douairière l'a réglé : d'abord ce qu'on a vu, ensuite ce qu'on en pense.",
        { if: { has: "monde:a4:passage" }, text: "**Du côté de la main.** Le puits du milieu descend derrière le cabinet où il se baigne, et deux planches s'y ouvrent sur des pentures de cuir : on est chez lui en quarante pieds de corde.", else: "**Du côté de la main.** Le puits du milieu descend derrière le cabinet où il se baigne. La trappe y tient par un pouce ; il y a un meuble devant, de son côté." },
        { if: { has: "monde:a4:clef_dessin" }, text: "{qui:a4:main} déplie une feuille. La clef de Sang y est trois fois, de face, de dos, de profil : un cœur plein, une tige forée, quatre dents dont la troisième fendue, un rouet en croix.", else: "{qui:a4:main} l'a vue au bain, au bout de sa chaîne, tourner devant le feu : rouge, courte, un cœur pour anneau. Les dents n'ont pas voulu se laisser compter." },
        { if: { has: "monde:a4:maillon" }, text: "La chaîne a son maillon de soudure à gauche de la nuque, plus clair que les autres. C'est là que la cuve est rayée." },
        { if: { has: "monde:a4:scie" }, text: "Et l'acier est connu : onze maillons dormaient dans une boîte à éperons. Trempé à l'huile. Trente-cinq passes." },
        { if: { has: "monde:a4:creances" }, text: "{qui:a4:main} ouvre sa chemise. Il en tombe sur la paillasse deux cent douze feuilles de carnet, épinglées par dix. Quarante mille cent dix écus, signés d'un B. Maître Crochemore ôte ses bésicles pour mieux ne pas y croire." },
        { if: { has: "monde:a4:creances_lues" }, text: "Dans un maroquin rouge, chez le Syndic : quarante mille écus de billets du comte, rachetés onze mille, et une quittance toute prête contre une clef tournée." },
        { if: { has: "monde:a4:cylindre" }, text: "Dans un étui noir : l'épreuve du cylindre, douze cents lignes, le nom du gendre, les Sept Causes. La troisième est en blanc, avec une bague de laiton *à graver selon*." },
        { if: { has: "monde:a4:acte_pris" }, text: "Et ceci, que {qui:a4:main} pose à plat près du brasero : l'acte du Scellement, avec ses deux cachets et sa place vide." },
        { if: { has: "monde:a4:conseil" }, text: "À dix heures, derrière la chapelle, ils étaient trois autour d'une table de pierre. Le comte signera pour le cylindre. Il refuse le mur. *On ne mure pas une bouche qui mange.* Le Syndic lui offre ses bois, gravés dans le laiton. Il répondra au bal, le 10, à minuit." },
        { if: { has: "monde:a4:comte_libre" }, text: "Le Syndic y est arrivé avec un portefeuille vide. Le comte en a ri à pleurer." },
        { if: { has: "monde:a4:pied" }, text: "**Du côté de l'œil.** Il y a dans les fonds un dix-cors que l'on appelle le Sénéchal. {qui:a4:oeil} l'a trouvé avant les piqueurs. On l'attaque le 8.", else: "**Du côté de l'œil.** Il y a dans les fonds un dix-cors que l'on appelle le Sénéchal, et que l'on attaque le 8." },
        { if: { has: "monde:a4:chasse_sue" }, text: "Il finira à la queue de l'étang, devant le pavillon des Abois : il y va toujours. Le comte fait reculer tout le monde à cent pas, et entre dans l'eau seul, la dague à la main. Trois ans de suite, il l'a manqué." },
        { if: { has: "monde:a4:senechal" }, text: "{qui:a4:oeil} sait pourquoi. Cela se dit en une phrase, et la phrase fait un silence : la nuit, il lui donne du sel dans sa main." },
        { if: { has: "monde:a4:veneurs" }, text: "Les gens du chenil feraient tourner une meute, si on le leur demandait bien." },
        { if: { has: "monde:a4:poterne" }, text: "Sous les saules, une porte s'ouvre à présent avec une lame de couteau. Quarante marches, et l'on est derrière sa tapisserie.", else: "Sous les saules, il y a une porte, une barque, et une serrure qui brille : il sort par là chaque nuit, vers une heure." },
        { if: { has: "monde:a4:suisses" }, text: "Les Suisses de l'évêque vont par paires : une à la voûte, une à la passerelle, les autres qui se croisent toutes les dix minutes au pied de cette tour." },
        { if: { has: "monde:a4:presente" }, text: "**Du côté de la voix.** Son Excellence l'envoyé de Lithovie soupe à la gauche du comte, et joue contre lui.", else: "**Du côté de la voix.** Son Excellence l'envoyé de Lithovie est dans la maison, au Héron, et soupe au bas bout." },
        { if: { has: "monde:a4:complice" }, text: "Il a reconnu, sous la fourrure, quelqu'un d'une table de marbre. Il en a ri, et il s'est tu : cela l'amuse." },
        { if: { has: "monde:a4:tic" }, text: "Quand il va doubler, il prend les dés de la main gauche, un instant avant de le dire. Personne ne l'a vu en quinze ans." },
        { if: { has: "monde:a4:clef_vue" }, text: "La clef est peinte dans la galerie, à la ceinture de sa mère : {qui:a4:voix} la récite, avec quatre dents, peut-être cinq." },
        { if: { has: "monde:a4:mere" }, text: "Et vers trois heures, devant une carafe, il a dit ce que sa mère lui a dit en mourant. {qui:a4:voix} le répète mot pour mot, puis ce qu'il a ajouté : *On écrivait. J'ai entendu une plume.* Maître Crochemore s'est levé, a fait trois pas vers la niche, et s'est rassis." },
        { if: { has: "monde:a4:comte_froid" }, text: "Il y a eu un mot de trop, vers trois heures, sur une morte. La chaise à sa gauche est perdue jusqu'à nouvel ordre." },
      ],
      choices: [{ label: "Passer aux gens", to: "A4c_gens", big: true }] },

    A4c_gens: { act: "IV", title: "Ceux qu'il faudra compter", place: "tour_horloge", ambiance: "nuit",
      text: [
        "Il reste les personnes. Il y en a plus qu'à Ferrières et qu'à Ossevaux ensemble : on dirait que toute l'affaire s'est donné rendez-vous sous ces sept tours.",
        { if: { has: "monde:brandelis:honte" }, text: "**Le comte.** Il boit pour le Remonteur. Il a signé le dernier, ivre, la plume tenue ; il le dit lui-même, et il ne s'en remet pas." },
        { if: { all: [{ not: "monde:brandelis:honte" }, { has: "monde:a4:conseil" }] }, text: "**Le comte.** Il a dit non, hier soir, à deux hommes qui le tiennent. Il ne sait pas encore s'il le redira." },
        { if: { all: [{ not: "monde:brandelis:honte" }, { not: "monde:a4:conseil" }] }, text: "**Le comte.** Il rit, il joue, il chasse. Il porte la main à son ruban quand on le regarde." },
        { if: { has: "monde:a4:ornevault" }, text: "Il a un ami, le chevalier d'Ornevault, qui lui a rendu sa clef il y a quinze ans. Celui-là n'est pas contre vous, tant que vous n'êtes pas contre lui." },
        { if: { has: "monde:a4:estime_comte" }, text: "Le chevalier a été touché dans la galerie, au premier sang. Toute la maison le saura à midi." },
        { if: { has: "monde:a4:syndic_vole" }, text: "**Le Syndic.** Il a perdu ses quarante mille raisons. Il a ses livres, ses dates, et un laquais de plus à chaque porte.", else: "**Le Syndic.** Il fait l'inventaire de la maison, tapisserie par tapisserie, et il a fait marquer les chênes." },
        { if: { any: [{ has: "monde:a4:syndic_doute" }, { has: "monde:a4:syndic_vu" }] }, text: "Il a regardé l'un de vous d'un peu trop près. Il n'a rien dit. Il a écrit un mot dans un carnet." },
        { if: { has: "monde:a4:hyacinthe_doute" }, text: "Son gendre a peur de ce qu'on va faire de lui. Il l'a dit à un étranger, à une fenêtre." },
        { if: { has: "monde:a4:doyen_dessein" }, text: "**Monseigneur.** Sa caisse de chêne est vide, et il y avait un billet pour vous dans le creux : *Gardez-la.* Trois clefs sur les routes, cela lui fait une porte que personne n'ouvre. Il n'en demande pas davantage." },
        { if: { all: [{ not: "monde:a4:doyen_dessein" }, { has: "monde:cendre:sait" }] }, text: "**Monseigneur.** Il sait ce que vous lui avez pris. Il porte une caisse à travers le pays, entre deux cierges, et ses Suisses regardent les figures." },
        { if: { not: "monde:cendre:sait" }, text: "**Monseigneur.** Il s'agenouille à chaque calvaire devant une caisse de chêne. Vous savez ce qu'il y a dedans, et qui l'a limé." },
        { if: { any: [{ has: "monde:a4:doyen_reconnu" }, { has: "monde:a4:o_repere" }] }, text: "Il a reconnu l'un de vous. Il n'a pas appelé. Il a invité : *un soir, à la chambre des Évêques, avant le bal ; vous ressortirez.*" },
        { if: DETTE, text: "**Sans-Bruit.** Elle est dans les fonds, avec deux hommes. Le comte lui a commandé quelque chose, cette nuit ; elle a répondu qu'elle devait à d'autres." },
        { if: MARCHE, text: "**Sans-Bruit.** Elle est dans les fonds, avec deux hommes. Le comte lui a commandé quelque chose, cette nuit ; elle n'a dit ni oui ni non. Elle attend qu'on lui offre mieux que du papier." },
        { if: RANCUNE, text: "**Sans-Bruit.** Elle est dans les fonds, avec deux hommes, et elle a un compte ouvert avec la maison Berlue depuis un cercueil. Ce que le comte lui a commandé cette nuit, elle le fera pour rien." },
        { if: { has: "monde:a4:pavillon" }, text: "Sous son toit, le comte défend qu'on touche à ses hôtes. Passé le dernier poteau à ses armes, il ne défend plus rien." },
        { if: { has: "monde:cadenas:allie" }, text: "**Le prévôt.** Il est à l'auberge du Grand Cerf, avec onze pièces dans un sac et un mandat dans sa poche. Il a mis les vôtres à droite, sur la table. Jusqu'à la Nuit des Clefs, il ne vous voit pas. Il veut poser une question au comte, devant du monde." },
        { if: { has: "monde:a4:cadenas_alerte" }, text: "**Le prévôt.** Il est à l'auberge du Grand Cerf. Il a vu l'un de vous de ses yeux, il a sifflé, et il se fera annoncer au château." },
        { if: { all: [{ has: "monde:a4:cadenas_vu" }, { not: "monde:cadenas:allie" }, { not: "monde:a4:cadenas_alerte" }] }, text: "**Le prévôt.** Il est à l'auberge du Grand Cerf. Il a lu deux fois la liste des gens du château, et il n'a pas bougé." },
        { if: { not: "monde:a4:cadenas_vu" }, text: "**Le prévôt.** On ne l'a pas vu. Il a dit, à Ossevaux, qu'il avait à faire ici." },
      ],
      choices: [{ label: "Écouter Maître Crochemore, qui a fini de ranger ses limes", to: "A4c_forge", big: true }] },

    // ───────────────────────────── The forger ─────────────────────────────
    A4c_forge: { act: "IV", title: "Un cœur au bout d'une tige", place: "tour_horloge", branch: [
      { if: { any: [{ has: "monde:cendre:sait" }, RANCUNE] }, fx: { flag: "monde:a4:comte_sait" }, to: "A4c_forge2" }, { to: "A4c_forge2" }] },
    A4c_forge2: { act: "IV", title: "Un cœur au bout d'une tige", place: "tour_horloge", branch: [
      { if: { has: "monde:a4:clef_dessin" }, fx: { set: { "monde:a4:fausse": "fine" } }, to: "A4c_forge3" },
      { if: { has: "monde:a4:clef_vue" }, fx: { set: { "monde:a4:fausse": "grossiere" } }, to: "A4c_forge3" },
      { fx: { set: { "monde:a4:fausse": "aucune" } }, to: "A4c_forge3" }] },
    A4c_forge3: { act: "IV", title: "Un cœur au bout d'une tige", place: "tour_horloge", ambiance: "nuit",
      text: [
        { if: { has: "monde:a4:fausse=fine" }, text: "Il a forgé pendant que vous parliez. Il a fait cela au brasero, avec un soufflet à main, un barreau d'acier de Ferrières, et la feuille de {qui:a4:main} tenue par deux poids de montre. Elle est sur un chiffon : un cœur plein, une tige forée, quatre dents dont la troisième fendue." },
        { if: { has: "monde:a4:fausse=fine" }, text: "« Le rouge m'a donné du mal. » Il la tourne à la flamme. « On ne l'obtient plus : c'était un recuit au sang de bœuf, que mon aïeul a emporté. J'ai fait avec de l'huile de lin et de la sanguine. À la bougie, sur une peau, elle est la sienne. Au grand jour, elle a trois semaines au lieu de cent cinq ans. Qu'il ne la regarde donc pas au grand jour. »" },
        { if: { has: "monde:a4:fausse=grossiere" }, text: "Il a forgé pendant que vous parliez, d'après une clef peinte et récitée. Elle est sur un chiffon : un cœur plein, une tige, quatre dents. « Ou cinq », dit-il aigrement. « J'en ai mis quatre et j'ai laissé de quoi limer la cinquième, si quelqu'un daigne un jour me dire le nombre. »" },
        { if: { has: "monde:a4:fausse=grossiere" }, text: "« Elle a la forme. Elle a le rouge, à peu près. Dans une main fermée, la nuit, c'est une clef. Si cet homme la regarde une fois, une seule, à la chandelle, comme on regarde ce qu'on porte depuis quinze ans, il saura. Tout dépend donc de savoir s'il regarde encore ce qu'il a au cou. Les gens mariés, en général, ne regardent plus leur alliance. »" },
        { if: { has: "monde:a4:fausse=aucune" }, text: "Il n'a rien forgé. Il vous montre ses mains vides, avec une sorte de satisfaction amère. « On ne m'a rien rapporté. Un cœur rouge au bout d'une tige : c'est le signalement d'un as de cœur. Je ne fais pas de fausses clefs d'après un jeu de cartes. Si vous la voulez, vous la prendrez, et il saura qu'on la lui a prise. »" },
        { if: { has: "monde:a4:scie" }, text: "Il vous donne aussi la scie : un fil d'acier bleu sur un archet de baleine, et un maillon fendu, bruni, que l'on referme entre deux doigts. « Trente-cinq passes. En tirant. Le bruit d'un grillon. »", else: "Il vous donne trois scies, de trois trempes, faute de savoir. « Vous essaierez la première. À la dixième passe, vous saurez si c'était la bonne. Je vous souhaite une chambre où l'on dorme bien. »" },
        { if: { has: "monde:a4:comte_sait" }, text: "« Et retenez ceci », ajoute-t-il. « Cet homme sait qui nous sommes. On le lui a écrit, ou on le lui a dit. Il nous loge, il nous nourrit, il rit ; et il a défendu qu'on nous touche. Je me méfie d'un joueur qui garde trois cartes dans sa main sans les abattre. »" },
      ],
      choices: [{ label: "« Alors, Maître : quand ? »", to: "A4c_vote", big: true }] },

    // ───────────────────────────── The vote ─────────────────────────────
    A4c_vote: { act: "IV", title: "Trois heures d'un homme", place: "tour_horloge", ambiance: "nuit",
      text: [
        "« Je vous l'ai dit avant-hier. Un homme, cela dort, cela se baigne, cela chasse, cela joue. Vous m'avez rapporté trois de ces heures. Je n'en choisis aucune : je n'ai jamais volé qu'à des clients, et sur facture. »",
        "Vous cherchez dans vos poches de quoi voter. Il y a sur la paillasse un dé d'ivoire, resté d'une table ; un grelot de collier, tombé d'un chien ; et un ressort de montre, cassé.",
        { if: { has: "monde:a4:creances" }, text: "**Le dé : le jeu.** Ce soir, après souper, sous deux cents bougies. On met sur le tapis vert ses quarante mille écus de papier, contre ce qu'il a au cou. Il n'a joué cette clef qu'une fois, et il l'a perdue : mais on ne lui avait pas offert, en face, sa liberté. S'il perd, il la donne lui-même, devant soixante témoins. C'est le pays de la voix : {qui:a4:voix} mènerait.", else: "**Le dé : le jeu.** Ce soir, après souper, sous deux cents bougies. Il ne joue pas cette clef. Il la jouerait peut-être contre deux autres, posées sur le tapis vert : celle de Fer et celle de Cendre, que vous avez. C'est tout mettre sur trois dés. S'il perd, il la donne lui-même, devant soixante témoins. C'est le pays de la voix : {qui:a4:voix} mènerait." },
        { if: { has: "monde:a4:passage" }, text: "**Le ressort : la chambre.** Cette nuit, quand il sera rentré de son étang et couché. Quarante pieds de corde, deux planches, un lit de camp, deux lévriers. On scie le maillon de soudure, on change la clef, on referme avec le maillon fendu. Au matin, il a au cou ce qu'il avait la veille. C'est le pays de la main : {qui:a4:main} mènerait.", else: "**Le ressort : la chambre.** Cette nuit, quand il sera couché. La trappe du puits tient par un pouce : il faudra que quelqu'un, de l'intérieur, ôte ce qu'il y a devant, ou que l'on monte par la porte des saules. Un lit de camp, deux lévriers. On scie, on change, on referme. C'est le pays de la main : {qui:a4:main} mènerait." },
        { if: { has: "monde:a4:chasse_sue" }, text: "**Le grelot : la chasse.** Demain, le 8. Le Sénéchal ira à l'eau, aux Abois ; le comte y entrera seul, tout le monde à cent pas. Il y a des roseaux à gauche du pavillon, et une barque sous le ponton. Dans cette eau-là, pendant un quart d'heure, il n'y a qu'un homme, une bête, et qui vous y aurez mis. C'est le pays de l'œil : {qui:a4:oeil} mènerait.", else: "**Le grelot : la chasse.** Demain, le 8, on attaque le Dix-Cors. Un homme qui sert sa bête lui-même est seul, un instant, quelque part dans cette forêt. Il faudra trouver où, et y être avant lui. C'est le pays de l'œil : {qui:a4:oeil} mènerait." },
        "*Chacun met sa pièce dans le gobelet de la cruche, le poing fermé. S'il en sort trois différentes, il n'y aura pas de plan : il restera le bal, le 10, où tout le monde est masqué, et où chacun fera de son mieux.*",
      ],
      choices: [
        { label: "Le dé : le jeu, ce soir", voix: "plan_a4", option: "jeu", to: "A4c_urne" },
        { label: "Le ressort : la chambre, cette nuit", voix: "plan_a4", option: "chambre", to: "A4c_urne" },
        { label: "Le grelot : la chasse, demain", voix: "plan_a4", option: "chasse", to: "A4c_urne" },
      ] },
    A4c_urne: { act: "IV", title: "Le gobelet", place: "tour_horloge", ambiance: "nuit", charniere: true,
      text: [
        "Tu as mis ta pièce dans le gobelet, le poing fermé. Un dé y sonne, un grelot y tinte, un ressort n'y fait qu'un soupir : on a beau fermer le poing, l'étain répète tout.",
        "Maître Crochemore s'est bouché les oreilles, par scrupule, avec deux doigts tachés de sanguine.",
      ],
      choices: [{ label: "Renverser le gobelet sur la paillasse", to: "A4c_tranche", big: true }] },
    A4c_tranche: { act: "IV", title: "Le compte", place: "tour_horloge", branch: [
      { if: { scrutin: "plan_a4", is: "jeu" }, to: "A4c_plan_jeu" },
      { if: { scrutin: "plan_a4", is: "chambre" }, to: "A4c_plan_chambre" },
      { if: { scrutin: "plan_a4", is: "chasse" }, to: "A4c_plan_chasse" },
      { to: "A4c_plan_bal" }] },

    A4c_plan_jeu: { act: "IV", title: "Le jeu", place: "tour_horloge", ambiance: "nuit",
      text: [
        "Les dés l'emportent. Ce sera ce soir, sur le tapis vert.",
        { if: { role: "a4", is: "voix" }, text: "C'est ton pays. Tu remettras la houppelande, les bottes rouges, la Lithovie. Tu as jusqu'au dessert pour amener un homme à jouer la seule chose qu'il ne joue pas, et le temps de trois dés pour la lui gagner." },
        { if: { role: "a4", is: "oeil" }, text: "Tu seras à la tribune des musiciens, au-dessus de la table, d'où l'on voit les mains. Il faut que quelqu'un regarde la gauche du comte, et tout ce qui, dans cette salle, voudrait que la partie n'aille pas au bout." },
        { if: { role: "a4", is: "main" }, text: "Tu seras derrière la porte de l'office, avec la scie. S'il perd, il ne pourra pas donner ce qu'il doit : elle est soudée. On appellera un ouvrier. Il faut qu'il y en ait un, et que d'ici là un gros homme n'ait pas arrêté la partie." },
        "On ne se souhaite rien. La Douairière disait que la chance est une personne susceptible, et l'on va, ce soir, s'asseoir en face d'elle.",
      ],
      choices: [{ label: "Dormir jusqu'à midi, et attendre le soir", to: POSTE("A4m_jeu_1", "A4o_jeu_1", "A4v_jeu_1"), big: true }] },
    A4c_plan_chambre: { act: "IV", title: "La chambre", place: "tour_horloge", ambiance: "nuit",
      text: [
        "Les ressorts l'emportent. Ce sera la nuit prochaine, dans son lit.",
        { if: { role: "a4", is: "main" }, text: "C'est ton pays. Tu prends la scie, le maillon fendu, et ce que Maître Crochemore a pu forger. Tu as un jour pour dormir, et une nuit pour faire trente-cinq passes à six pouces de l'oreille d'un homme qui a fait la guerre." },
        { if: { role: "a4", is: "oeil" }, text: "Tu auras les chiens. Deux lévriers couchent sur ses pieds, qui entendent une puce changer de place. Il faut qu'ils dorment mieux que lui ; et il faut une porte ouverte au bas du rocher, avec une barque." },
        { if: { role: "a4", is: "voix" }, text: "Tu auras la table. Il faut qu'il se couche tard, lourd, sans avoir eu le cœur d'aller à son étang ; et il faut que personne, cette nuit, ne s'asseye devant sa porte." },
        "On ne se souhaite rien. La Douairière disait que la chance est une personne susceptible, et qu'il ne faut pas lui parler avant.",
      ],
      choices: [{ label: "Dormir jusqu'à midi, et attendre la nuit", to: POSTE("A4m_cha_1", "A4o_cha_1", "A4v_cha_1"), big: true }] },
    A4c_plan_chasse: { act: "IV", title: "La chasse", place: "tour_horloge", ambiance: "nuit",
      text: [
        "Les grelots l'emportent. Ce sera demain, dans l'eau des Abois.",
        { if: { role: "a4", is: "oeil" }, text: "C'est ton pays. Tu seras au bois avant le jour, avec Ramoneau. Il faut que le Sénéchal aille où il va toujours, qu'il y arrive avant la foule, et que tu sois dans les roseaux quand un homme entrera dans cette eau avec une dague dont il ne veut pas se servir." },
        { if: { role: "a4", is: "main" }, text: "Tu seras sous le ponton, dans la barque à fond plat, depuis la nuit. Avec la scie, et ce que Maître Crochemore a pu forger. Il faut quelqu'un à une longueur de bras de l'endroit où tout finit." },
        { if: { role: "a4", is: "voix" }, text: "Tu seras à cheval, dans la fourrure, avec trente habits cramoisis. Il faut que ces gens-là arrivent aux Abois les derniers, et qu'ils restent à leurs cent pas quoi qu'ils entendent." },
        "Il reste un jour entier à passer sous ce toit en gens de la maison : un valet aux chiens, un ouvrier dans les cordes, une Excellence au salon. On le passe. C'est le plus long de l'année.",
      ],
      choices: [{ label: "Passer le 7, et la nuit du 7", to: POSTE("A4m_chs_1", "A4o_chs_1", "A4v_chs_1"), big: true }] },
    A4c_plan_bal: { act: "IV", title: "Un dé, un grelot, un ressort", place: "tour_horloge", ambiance: "nuit",
      text: [
        "Tu renverses le gobelet. Il en tombe un dé, un grelot, un ressort.",
        "Maître Crochemore ôte ses doigts de ses oreilles. Il regarde la paillasse. « Trois aiguilles sur trois heures. Vous êtes la seule horloge que je n'aie jamais su régler. »",
        "Dans la maison Berlue, on ne recommence pas un vote. Il n'y aura donc ni tapis vert, ni chambre, ni étang. Il reste le bal : le 10, la veille de la Saint-Martin, trois cents masques dans la grande salle, et un homme au milieu qui doit une réponse à minuit.",
        { if: { has: "monde:douce:marche" }, text: "L'horloger tire de son sac les trois cartons à tranche dorée. Il y écrit trois noms, de sa petite écriture droite, sans vous les montrer. « Vous entrerez par la grande porte. Je vous ai faits barons : cela ne coûte rien. »", else: "« Il vous faudra des masques, et une raison d'être là », dit l'horloger. « Un valet porte des flambeaux. Un ouvrier monte les lustres. Une Excellence est invitée. Le reste est affaire de velours. »" },
        { if: { role: "a4", is: "main" }, text: "Tu seras où sont les mains : derrière lui." },
        { if: { role: "a4", is: "oeil" }, text: "Tu seras où sont les yeux : aux portes." },
        { if: { role: "a4", is: "voix" }, text: "Tu seras où sont les voix : en face de lui, à danser." },
        "Trois jours à tenir sous ce toit. On les tient.",
      ],
      choices: [{ label: "Attendre le 10", to: POSTE("A4m_bal_1", "A4o_bal_1", "A4v_bal_1"), big: true }] },
  },

  extras: {
    scrutins: {
      plan_a4: { title: "L'heure de la clef de Sang", options: { jeu: "Le jeu", chambre: "La chambre", chasse: "La chasse" }, tie: "bal", tieSay: "Un dé, un grelot, un ressort : il reste le bal, où chacun fera de son mieux." },
    },
  },
};
