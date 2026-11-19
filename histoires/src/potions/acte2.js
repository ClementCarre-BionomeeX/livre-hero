// Act II, « La Grisaille » (days 4 to 9): the sleeping boy at the forge, the page Mémé hid in the dead oak, the carts
// of the night, the steward's visit, the inspector's return, the great quarrel with Ortie, the peddler's daughter, and
// the night Ortie walks into the woods, up to the Creux, where Mémé is.
var WITH = "ortie";
var PROOFS = { any: [{ clues: "G", min: 2 }, { has: "grenouille:gardee" }] };
module.exports = {
  B_forge: {
    act: "II", title: "Le dormeur gris", place: "hameau",
    fx: { ep: ["seance", 200] },
    text: [
      "La forge des Ronceraies est froide pour la première fois depuis vingt ans. Dans l'arrière-salle, sur un lit de sangle, Tiennot dort.",
      "Il a neuf ans, des genoux écorchés, des cheveux noirs en épis, et il est gris. Ses lèvres, ses paupières, ses ongles, le dos de ses mains ont pris la couleur de la cendre froide, d'un gris égal et doux, sans une tache, comme si l'on avait passé sur lui une eau qui efface ; seules ses joues gardent, très loin sous le gris, un souvenir de rose. Il respire. Tu comptes ses souffles : quatre par minute, lents, réguliers, si profonds qu'à chacun d'eux on se demande s'il y en aura un autre. Sa peau est froide comme une pierre à l'ombre. Elle sent la mousse.",
      "Tu essaies ce que Mémé t'a appris : le sel sous la langue, le vinaigre sous le nez, l'eau glacée sur la nuque, la tisane de bourrache à la cuillère. Rien. Il dort comme dort la grenouille d'Ortie, sur le rebord de la fenêtre, à la boutique.",
      "Le curé Anselme est assis dans un coin, son bréviaire ouvert, et il lève vers toi un regard où la réprobation a cédé la place à l'espoir, ce qui est plus inquiétant. « Il y en a deux autres, dit Maître Ferrand d'une voix sourde. La fille du charron. Le dernier des Boulard. Depuis cette nuit. »",
      { with: WITH, text: "Ortie est restée sur le seuil. Elle regarde Tiennot de loin, les poings serrés, et elle ne pose aucune question." },
      "Tu ne sais pas guérir ça. Le grimoire de Mémé ne le sait pas non plus, ou il le savait, sur une page que quelqu'un a arrachée.",
    ],
    choices: [
      { label: "Promettre à Maître Ferrand de chercher un remède", fx: { regard: { ferrand: "cordial" }, flag: "ferrand:promesse" }, to: "H_hameau" },
      { label: "Dire la vérité à Maître Ferrand : tu ne sais pas encore", fx: { regard: { ferrand: "cordial" } }, to: "H_hameau" },
    ],
  },
  B_page_indice: {
    title: "Ce que dit Bistre", place: "boutique", with: WITH,
    fx: { conf: { ortie: 5 } },
    text: [
      "Ortie te tire par le tablier jusqu'à l'escalier, où Bistre est assis sur la troisième marche, la queue enroulée autour des pattes, l'air d'un notaire qui attend qu'on vienne signer.",
      "« Il a quelque chose à dire, annonce Ortie. Il dit qu'il ne l'a pas dit avant parce que personne ne le lui a demandé, et que les chats ne parlent pas pour rien, contrairement à certaines personnes. »",
      "Bistre la regarde. Elle l'écoute, la tête penchée, comme on écoute à une porte.",
      "« Il dit : la nuit avant de partir, Mémé est allée dans la combe avec une boîte, et elle l'a mise dans l'arbre qui n'a plus de cœur. Il l'a suivie, parce qu'il suit toujours Mémé, et parce qu'il y avait peut-être un mulot. Il n'y avait pas de mulot. » Ortie fronce les sourcils. « Il dit aussi que tu aurais trouvé toute seule si tu regardais autre chose que tes flacons. Ça, je suis d'accord. »",
      "L'arbre qui n'a plus de cœur. Il n'y en a qu'un dans tout le bois : le chêne creux, au milieu de la combe aux Fougères.",
    ],
    choices: [{ back: "H_boutique" }],
  },
  B_chene: {
    title: "Le chêne creux", place: "combe",
    fx: { flag: "recette:eveil", item: ["page_eveil", "rosee", "rosee", "rosee"], quest: "II_page", ep: ["seance", 400] },
    text: [
      "Le chêne creux est mort depuis cent ans, et debout par entêtement. Son tronc s'ouvre à hauteur d'enfant sur une cavité noire qui sent le bois pourri, la terre et le champignon. Tu y passes le bras jusqu'à l'épaule, en évitant de penser à ce qui pourrait y vivre.",
      "Tes doigts touchent du métal. C'est une boîte de fer-blanc, la vieille boîte à thé de Mémé, avec un couvercle peint de roses fanées. Dedans, enveloppée dans un mouchoir à carreaux, une feuille pliée en huit, et une fiole minuscule bouchée de cire, si froide qu'elle colle aux doigts.",
      "La feuille est la page arrachée du grimoire. La déchirure correspond à celle du cahier, au fil près. Sur le mouchoir, Mémé a épinglé un bout de papier : « Pour ma grande, si le gris vient. Le chêne garde ce qu'on lui confie. »",
      "La fiole contient trois gouttes d'une eau lourde et brillante comme du mercure : de la rosée d'argent.",
      "(Tu sais maintenant préparer la potion d'éveil : une fleur de lune cueillie sur l'eau, la nuit ; trois gouttes de rosée d'argent ; de la bourrache.)",
    ],
    choices: [{ back: "H_combe" }],
  },
  B_tiennot_reveil: {
    title: "Tiennot", place: "hameau",
    fx: { flag: "tiennot:reveille", quest: "II_tiennot", stock: { renommee: 4 }, regard: { ferrand: "redevable" }, ep: ["seance", 400] },
    text: [
      "Tu glisses le flacon entre les lèvres grises de Tiennot, goutte à goutte, et la potion d'éveil luit faiblement dans sa bouche ouverte, comme un ciel avant le soleil.",
      "D'abord rien. Puis le gris recule, lentement, du bout des doigts vers les poignets, comme une marée qui descend. Les lèvres rosissent. Tiennot éternue, deux fois, ouvre les yeux, regarde le plafond de la forge, et dit d'une voix enrouée : « J'ai faim. »",
      "Maître Ferrand pousse un bruit qui n'est pas un mot, prend son fils dans ses bras, et le serre si fort que Tiennot proteste.",
      "Plus tard, assis sur le lit avec un bol de soupe, Tiennot raconte son rêve. Il était dans le bois, au fond d'une combe ronde, sous un arbre immense, et il y avait une dame en bois assise entre les racines, qui pleurait de la sève. Il y avait des hommes avec des lanternes et des tonneaux. « Ils lui prenaient son eau, dit-il. Elle avait froid. Et moi aussi, j'avais froid. »",
      { with: WITH, text: "Ortie entre dans l'arrière-salle, va jusqu'au lit, et pince le bras de Tiennot, fort. Il crie. Elle sourit jusqu'aux oreilles." },
    ],
    choices: [{ back: "H_hameau" }],
  },

  // ------------------------------------------------------------------ the carts of the night
  B_cahots: {
    act: "II", title: "Les roues dans la nuit", place: "chambre",
    text: [
      "Tu te réveilles au bruit des roues.",
      "C'est un bruit de nuit, étouffé, sourd, qui monte du bois par la lucarne, le grincement d'essieux qu'on a laissés secs par économie de graisse, des sabots qui glissent sur les pierres, et par moments une voix d'homme qui jure à mi-voix. Le bruit vient de la lisière, du vieux chemin des charrettes, et il s'en va vers le nord, vers le cœur des collines, là où personne ne va.",
      { with: WITH, text: "Ortie est déjà à la lucarne, debout sur son lit, le nez contre la vitre. « Il y a des lumières, chuchote-t-elle. Trois. Elles montent dans le bois. »" },
    ],
    choices: [
      { label: "T'habiller et descendre à la lisière, dans le noir", takes: 1, test: { dom: "discretion", diff: 20, label: "Discrétion" },
        win: { to: "B_cahots_nuit", fx: { flag: "nuit:cachee" } }, lose: { to: "B_cahots_nuit", fx: { flag: "nuit:vue" } } },
      { label: "Rester à la lucarne et regarder les lumières jusqu'à ce qu'elles disparaissent", to: "B_cahots_lucarne" },
    ],
  },
  B_cahots_lucarne: {
    act: "II", title: "Les lumières", place: "chambre",
    text: [
      "Les trois lumières montent dans le bois en se balançant, disparaissent derrière un repli de colline, reparaissent plus haut, plus petites, et s'éteignent l'une après l'autre au cœur des collines, à l'endroit où le noir est plus pâle.",
      "Le vieux chemin des charrettes passe à la lisière. Au jour, il gardera les traces.",
    ],
    choices: [{ label: "Te recoucher", takes: "morning", to: "N_matin" }],
  },
  B_cahots_nuit: {
    act: "II", title: "Le vieux chemin", place: "lisiere",
    fx: { clue: "g_ornieres", ep: ["seance", 300] },
    text: [
      "Tu descends à la lisière dans le noir, en tenant le bord de la haie pour ne pas te perdre. La lune est mince. Le pré n'est qu'une grande étendue grise, et le vieux chemin un trait plus sombre au bord du bois.",
      "Ils passent à dix pas de toi. Une charrette, tirée par deux mulets dont on a entouré les sabots de chiffons ; sur la charrette, des tonneaux, six, vides, qui sonnent creux à chaque cahot ; et autour, quatre hommes, dont trois portent une lanterne voilée d'un linge. Celui qui marche devant est massif, et la lueur de sa lanterne fait flamber sa barbe rousse.",
      { if: { seen: "K_brunet" }, text: "C'est Brunet, le garde-chasse de la comtesse, celui qui avait les mains gelées en septembre.", else: "Il porte la livrée verte des gens de la comtesse." },
      { if: { has: "nuit:vue" }, text: "Une branche craque sous ton pied. Le rouquin s'arrête et lève sa lanterne vers la haie. Tu ne respires plus. Alors, de l'autre côté du chemin, un caillou tombe dans le fossé avec un bruit de bête qui s'enfuit, et l'homme jure, tourne sa lanterne de ce côté-là, et repart." },
      { if: { has: "nuit:vue" }, with: WITH, text: "Quand tu te retournes, Ortie est accroupie derrière toi, en chemise de nuit, un deuxième caillou dans la main, et l'air très fier." },
      "Le dernier homme rit tout bas d'une plaisanterie que tu n'entends pas. C'est un rire que tu connais, gras, facile, un rire de marché ; tu ne sais plus où tu l'as entendu.",
      "La charrette entre dans le bois et monte vers le nord. Tu attends que les lumières disparaissent, puis tu rentres, transie.",
    ],
    choices: [{ label: "Te glisser dans ton lit, transie", takes: 2, fx: { flag: "t:brunet" }, to: "H_chambre" }],
  },
  B_ornieres: {
    title: "Les ornières", place: "lisiere",
    fx: { item: "tonneau_douve", clue: "g_tonneau", flag: "ornieres:suivies", quest: "II_ornieres", ep: ["seance", 300] },
    text: [
      "Au jour, le vieux chemin des charrettes parle. Deux ornières profondes y montent vers le nord, fraîches, découpées dans la terre molle, et elles redescendent à côté, plus profondes encore : la charrette est remontée vide et revenue lourde. Les sabots des mulets n'ont pas laissé de fers, seulement des empreintes rondes et floues, comme si on les avait enveloppés.",
      "Dans le fossé, à l'endroit où le chemin tourne, un tonneau a roulé et s'est fendu contre une pierre. Il en reste une demi-douzaine de douves éparpillées dans l'herbe. Tu en ramasses une : elle porte, marquées au fer rouge, les armes de Rocheclaire, la tour et les trois étoiles. Elle est froide. À l'intérieur, contre le bois, une fine couche de givre brille au soleil de dix heures et ne fond pas.",
      { with: WITH, text: "Ortie lèche le givre avant que tu aies pu l'en empêcher, puis crache, et se frotte la langue avec sa manche. « Ça a le goût de l'étang, dit-elle, en plus froid. »" },
    ],
    choices: [{ back: "H_lisiere" }],
  },

  // ------------------------------------------------------------------ the steward
  B_malbec: {
    act: "II", title: "Le sénéchal", place: "boutique",
    fx: { meet: "malbec", flag: "ortie:poche" },
    text: [
      "La voiture qui s'arrête devant la boutique est noire, avec les armes de Rocheclaire sur la portière ; il en descend un homme rond, rose, aimable, vêtu de velours prune, avec une bague à chaque doigt et un sourire tranquille de chanoine qui a bien déjeuné. Il entre en baissant la tête sous le linteau, regarde ton enseigne, tes étagères, ton chaudron, et toi, avec une bienveillance égale.",
      "« Ambroise Malbec, sénéchal de madame la comtesse. Ne vous dérangez pas. Je ne viens rien acheter : je viens rendre service. » Il pose sur le comptoir une feuille de papier épais, couverte d'une belle écriture de clerc. « Cette patente vous inquiète, je le sais. Cinq livres, pour une jeune fille seule avec une enfant, c'est une somme. Madame la comtesse a le cœur tendre ; elle paierait votre patente elle-même, en échange d'une broutille. »",
      "La broutille est écrite sur la feuille : la cession à la comtesse de Rocheclaire, pour cent ans, « du droit de cueillette, de puisage et de recueil des eaux et rosées du lieu-dit le Creux, au bois de Vergeronde ».",
      "« Un vieux droit de sorcière, dit Malbec avec un geste léger de ses mains baguées. Un parchemin de plus dans les archives. Madame la comtesse aime les collections. Vous signez ici, je paie la patente, et nous restons bons amis. »",
      { with: WITH, text: "Pendant qu'il parle, Ortie a sorti Monseigneur de sa poche et entrepris de le présenter au sénéchal. Elle lui grimpe à moitié sur les genoux, pose le crapaud sur sa manche de velours, explique sa généalogie, ses goûts, ses ennemis. Malbec sourit, se raidit, et finit par la repousser avec une douceur ferme, en époussetant sa manche. Ortie redescend, l'air très content, et va s'asseoir derrière le comptoir, les mains dans les poches de son tablier." },
    ],
    choices: [
      { label: "Signer la feuille : la patente sera payée", fx: { flag: "malbec:signe", quest: "Q_patente", conf: { ortie: -10 }, regard: { malbec: "cordial" } }, to: "B_malbec_signe" },
      { label: "Lui demander ce que la comtesse veut faire de l'eau du Creux", test: { dom: "social", diff: 10, label: "Persuasion" },
        win: { to: "B_malbec_eau", fx: { flag: "malbec:eau" } }, lose: { to: "B_malbec_refus" } },
      { label: "Refuser, poliment, et lui rendre sa feuille", fx: { regard: { malbec: "mefiant" } }, to: "B_malbec_refus" },
    ],
  },
  B_malbec_signe: {
    act: "II", title: "La signature", place: "boutique",
    text: [
      "Tu signes. La plume de Malbec est en argent, et elle crisse sur le papier. Il souffle sur l'encre, plie la feuille en quatre, la range contre son cœur, et pose sur le comptoir un reçu de la Guilde des Alambics, tamponné, daté, signé : la patente est payée.",
      { with: WITH, text: "« Vous êtes une jeune personne raisonnable, dit-il. Nous ferons de grandes choses ensemble. » Il soulève son chapeau, salue Ortie, qui ne répond pas, et s'en va." },
      { with: WITH, text: "Ortie te regarde longtemps. « Bistre dit que tu as vendu quelque chose qui n'était pas à toi », dit-elle enfin, et elle monte dans la chambre sans attendre ta réponse." },
    ],
    choices: [{ back: "H_boutique" }],
  },
  B_malbec_eau: {
    act: "II", title: "L'eau du Creux", place: "boutique",
    fx: { regard: { malbec: "mefiant" } },
    text: [
      "Malbec rit, de bon cœur, un peu trop longtemps. « L'eau ? Mais rien, ma chère enfant. Rien du tout. Une curiosité, je vous l'ai dit. On raconte à Valombre que l'eau de certaines sources garde la jeunesse ; les dames de la cour en paieraient le poids d'or ; madame la comtesse aimerait savoir si celle de son bois en fait autant. Ce sont des contes. » Il reprend sa feuille, la plie, la range, toujours souriant. « Réfléchissez. Le douzième jour approche, et la Guilde est inflexible. »",
      "Il sort. À la porte, il se retourne et regarde ton enseigne un long moment, comme on regarde une maison qu'on a l'intention d'acheter.",
    ],
    choices: [{ back: "H_boutique" }],
  },
  B_malbec_refus: {
    act: "II", title: "La feuille", place: "boutique",
    fx: { regard: { malbec: "mefiant" } },
    text: [
      "Malbec reprend sa feuille sans cesser de sourire. « Comme il vous plaira. Je repasserai peut-être. Les jeunes personnes changent d'avis ; c'est leur charme. » Il soulève son chapeau, salue Ortie, et sort.",
      "Par la fenêtre, tu le regardes monter en voiture. Avant de fermer la portière, il dit quelques mots au cocher en montrant le bois, au nord. Le cocher hoche la tête.",
    ],
    choices: [{ back: "H_boutique" }],
  },

  // ------------------------------------------------------------------ the inspector comes back
  B_corvin: {
    act: "II", title: "L'inspecteur revient", place: "boutique",
    text: [
      "Maître Corvin Lachaise revient à la boutique avec une sacoche plus grosse et une humeur plus noire. Il a les bottes grises de poussière, et quelque chose dans le regard qui ressemble à du doute, sentiment qu'il porte comme un habit d'emprunt.",
      "« Je suis venu par le bois, dit-il. Par la vieille route du nord. Pour gagner une heure. » Il pose sa sacoche sur le comptoir. « Les arbres sont gris, mademoiselle. Sur une lieue. Gris de la racine à la cime, et vivants, et endormis. Je n'ai rien lu de tel dans aucun traité. J'en ai lu quatre cents. » Il retire ses lunettes, les essuie, les remet. « Je n'aime pas ce que je ne comprends pas. Vous, les sorcières, vous avez peut-être une théorie. Une théorie de cuisinière, mais une théorie. »",
      { if: { has: "corvin:goute" }, text: "« Votre sirop, ajoute-t-il, sans te regarder. Je l'ai analysé. Il guérit la toux. Dans une proportion que je n'explique pas. J'ai écrit un rapport. Il est très court, et il m'a beaucoup coûté. »" },
    ],
    choices: [
      { label: "Lui montrer ce que tu as trouvé", if: PROOFS, to: "B_corvin_preuves" },
      { label: "Lui dire que le bois est malade, et que tu cherches pourquoi", to: "B_corvin_doute" },
    ],
  },
  B_corvin_preuves: {
    act: "II", title: "Une théorie de cuisinière", place: "boutique",
    fx: { flag: "corvin:allie", regard: { corvin: "allie" }, ep: ["seance", 400] },
    text: [
      "Tu poses tout sur le comptoir, devant lui.",
      { if: { has: "grenouille:gardee" }, text: "La grenouille grise d'Ortie, dans son bocal, qui dort toujours. Maître Corvin la regarde longtemps, puis il note quelque chose dans un carnet." },
      { if: { item: "tonneau_douve" }, text: "La douve de tonneau aux armes de Rocheclaire, et le givre qui ne fond pas. Maître Corvin y passe le doigt, le porte à sa langue, et reste un moment immobile, les yeux mi-clos, comme un dégustateur." },
      { if: { clue: "g_ornieres" }, text: "Ce que tu as vu sur le vieux chemin : la charrette, les tonneaux, les lanternes voilées, la nuit." },
      { if: { clue: "g_mains" }, text: "Les mains du garde-chasse, brûlées de froid en septembre." },
      { if: { clue: "g_bottes" }, text: "La boue d'argent sur les bottes du colporteur." },
      "Maître Corvin écoute jusqu'au bout. Puis il ouvre sa sacoche, en sort un petit flacon de cristal fermé d'un bouchon d'or, et le pose à côté de la douve. Le flacon porte une étiquette gravée : *Eau de Jouvence de Valombre*.",
      "« Douze livres, dit-il. Le prix d'une maison de paysan. Toutes les dames de la cour en boivent depuis un an. La Guilde l'a analysée sans rien y comprendre : une eau d'une densité absurde, d'un froid qui ne s'explique pas, et qui fait réellement pâlir les rides. Personne ne sait d'où elle vient. » Il frappe le comptoir du plat de la main. « Voilà une théorie, mademoiselle ! Une vraie ! Avec des faits dedans ! Ce n'est pas la mienne, c'est la vôtre, et cela m'est profondément désagréable, et je vous en félicite. »",
      "Il range le flacon. « Je ne peux rien prouver devant la comtesse : un givre et une grenouille, ce ne sont pas des preuves, ce sont des curiosités. Trouvez-moi un écrit, un témoin, une main dans le sac. Et ce jour-là, je serai à côté de vous, et je parlerai fort. Je parle toujours fort. On me le reproche. »",
    ],
    choices: [{ back: "H_boutique" }],
  },
  B_corvin_doute: {
    act: "II", title: "Une théorie", place: "boutique",
    fx: { regard: { corvin: "curieux" } },
    text: [
      "Maître Corvin écoute, les mains croisées sur sa sacoche, et hoche la tête de temps en temps comme un professeur devant un élève qui a appris sa leçon sans la comprendre.",
      "« Malade, dit-il. Vous cherchez. Très bien. Moi aussi, je cherche. Nous sommes deux à ne rien savoir, ce qui est un progrès sur la semaine dernière, où je croyais tout savoir. » Il reprend sa sacoche. « Si vous trouvez quelque chose de solide, mademoiselle, montrez-le-moi. Je repasserai le douzième jour, de toute façon. Pour la patente. La loi ne s'endort pas, elle. »",
    ],
    choices: [{ back: "H_boutique" }],
  },

  // ------------------------------------------------------------------ the quarrel
  B_dispute: {
    act: "II", title: "La nuit tombe", place: "boutique",
    fx: { leave: "ortie" },
    text: [
      "La nuit tombe, et Ortie n'est pas là.",
      "Tu l'as vue pour la dernière fois en fin d'après-midi, accroupie au fond du jardin, qui cherchait quelque chose dans l'herbe en appelant à voix basse. Tu as cru qu'elle jouait. Maintenant le jardin est noir, la haie de buis est noire, le bois au-delà est un mur d'ombre où les branches remuent, et elle ne répond pas quand tu cries son nom. Tu cries de plus en plus fort. Le bois te renvoie ton cri, sans le reconnaître.",
      "Tu prends la lanterne. Tu penses au sommeil gris, à Tiennot sur son lit de sangle. Tu penses à la nuit où elle chantait devant la haie, les yeux ouverts, tournée vers le nord. Tu penses à des choses que tu n'as jamais pensées, et que tu ne savais pas savoir penser. La peur, dans le noir, travaille vite et bien, et ne demande pas de salaire.",
      "Elle arrive par le chemin de l'étang, à neuf heures passées, trempée jusqu'à la taille, de la vase jusqu'aux cheveux, en grelottant. Elle a les mains vides.",
      "« Monseigneur est parti, dit-elle en claquant des dents. Depuis ce matin. Je l'ai cherché partout. Je suis allée à l'étang. Il fait noir à l'étang. »",
    ],
    choices: [
      { label: "Crier : elle aurait pu se noyer, tomber grise, disparaître", fx: { join: "ortie", conf: { ortie: -10 }, flag: "dispute:crie" }, to: "B_dispute_fin" },
      { label: "La serrer contre toi sans rien dire, toute mouillée", fx: { join: "ortie", conf: { ortie: 10 }, flag: "dispute:serre" }, to: "B_dispute_fin" },
      { label: "L'envoyer se coucher sans souper, et ne plus lui parler de la soirée", fx: { join: "ortie", conf: { ortie: -5 }, flag: "dispute:punie" }, to: "B_dispute_fin" },
    ],
  },
  B_dispute_fin: {
    act: "II", title: "Tu vas partir aussi", place: "boutique",
    text: [
      { if: { has: "dispute:crie" }, text: "Tu cries. Tu ne savais pas que tu pouvais crier si fort. Ortie te regarde crier sans bouger, l'eau de ses cheveux lui coulant dans les yeux, et quand tu t'arrêtes, à bout de souffle, elle dit, très calmement, de sa voix des grandes peurs : « Tu vas partir aussi. Comme Mémé. Tu cries parce que tu vas partir. »" },
      { if: { has: "dispute:serre" }, text: "Tu la serres contre toi, toute mouillée, toute froide, et tu te tais, parce que les mots te manquent. Elle se laisse faire. Au bout d'un long moment, elle dit dans ton cou : « Je croyais que tu allais crier. » Puis, plus bas : « Tu vas pas partir, toi ? Comme Mémé ? »" },
      { if: { has: "dispute:punie" }, text: "Ortie monte l'escalier sans un mot, en laissant une trace mouillée sur chaque marche. À la dernière, elle se retourne. « Tu vas partir aussi, dit-elle. Comme Mémé. C'est pour ça que tu me grondes. Pour t'habituer. »" },
      "Bistre, assis sur le comptoir, vous regarde toutes les deux avec ses yeux jaunes. Pour une fois, il n'a pas l'air de se moquer.",
    ],
    choices: [{ label: "Monter vous coucher", to: "H_chambre" }],
  },

  // ------------------------------------------------------------------ the peddler's daughter
  B_lison: {
    act: "II", title: "Le colporteur", place: "boutique",
    fx: { meet: ["gaspard", "lison"] },
    text: [
      "La charrette verte s'arrête devant la boutique au grand galop, ce dont on ne l'aurait pas crue capable. Gaspard Trémolat saute du siège, son chapeau de paille tombé dans le chemin, et il porte dans ses bras une fillette de dix ans aux tresses noires : Lison. Elle dort. Elle est grise.",
      "« Depuis cette nuit, dit Gaspard. Elle s'est couchée, elle était bien, elle a fait ses comptes, elle m'a grondé pour le prix du sel. Et ce matin. » Il pose Lison sur le banc de la boutique avec des gestes de verre. Le colporteur qui riait de tout ne rit plus. Ses bottes sont grises de boue jusqu'aux genoux, et la boue brille. « On dit que tu as réveillé le fils du forgeron. Je paierai. Tout ce que tu veux. La charrette. Tout. »",
      { with: WITH, text: "Ortie s'approche de Lison et lui prend la main, comme elle a pris celle de la Dame Grise. Elle ne dit rien. Elle regarde Gaspard, longtemps, et Gaspard baisse les yeux le premier." },
    ],
    choices: [
      { label: "Faire boire la potion d'éveil à Lison", if: { item: "p_eveil" }, fx: { drop: "p_eveil" }, to: "B_lison_reveil" },
      { label: "Coucher Lison dans le lit d'Ortie, et promettre de la réveiller", hide: { item: "p_eveil" }, fx: { flag: "lison:ici", regard: { gaspard: "redevable" } }, to: "B_lison_garde" },
      { label: "Lui dire que tu ne peux rien pour elle", hide: { item: "p_eveil" }, fx: { flag: "lison:emmenee" }, to: "B_lison_part" },
    ],
  },
  B_lison_garde: {
    act: "II", title: "Le lit d'Ortie", place: "chambre",
    text: [
      "Vous montez Lison dans la chambre sous le toit et vous la couchez dans le lit d'Ortie, près du conduit de la cheminée, parce qu'elle a les pieds froids comme une pierre. Ortie lui met Monseigneur sur la couverture, pour la garder, si Monseigneur est là ; sinon, elle lui met son plus beau caillou.",
      "Gaspard reste un long moment au pied du lit, son chapeau à la main. « La potion, dit-il. Il te manque quelque chose ? Dis-le. Je trouve tout. C'est mon métier. »",
      "Il s'en va sans attendre la réponse. Tu l'entends pleurer en attelant ses mulets.",
    ],
    choices: [{ back: "H_boutique" }],
  },
  B_lison_part: {
    act: "II", title: "La charrette verte", place: "boutique",
    fx: { regard: { gaspard: "distant" } },
    text: [
      "Gaspard te regarde comme si tu l'avais frappé. Puis il reprend Lison dans ses bras, la remonte sur la charrette, la couche entre deux sacs de farine, et fouette ses mulets vers Valombre, où il y a des médecins diplômés, qui ne réveillent personne, mais qui le font en latin.",
      { with: WITH, text: "Ortie regarde la charrette disparaître entre les houx. « Tu aurais pu essayer », dit-elle." },
    ],
    choices: [{ back: "H_boutique" }],
  },
  B_lison_reveil: {
    title: "Lison", place: "boutique",
    fx: { flag: ["lison:reveillee", "gaspard:avoue", "t:gaspard"], quest: "III_lison", stock: { renommee: 3 }, regard: { gaspard: "redevable" }, ep: ["seance", 400] },
    text: [
      "La potion d'éveil luit entre les lèvres grises de Lison, et le gris recule comme une marée qui descend. Lison éternue, ouvre les yeux, voit son père, et lui dit, d'une voix faible mais très nette : « Tu as encore payé le sel trop cher. »",
      "Gaspard Trémolat s'assoit par terre, au milieu de la boutique, et pleure, la tête dans ses mains, avec de gros sanglots d'homme qui ne savait pas qu'il en avait autant en réserve.",
      "Puis il parle. Il ne te regarde pas en parlant.",
      "« C'est moi, dit-il. Pas le gris. Les chemins. C'est moi qui les ai guidés. Le sénéchal m'a payé pour leur montrer le chemin du Creux, la nuit, deux nuits sur trois depuis l'été. Je connais tous les chemins du comté, et celui-là, ta grand-mère me l'avait montré quand j'étais petit, pour aller cueillir des champignons. Brunet commande. Ils remplissent des tonneaux, à la Source, sous le grand chêne. L'eau est froide, elle brille, elle brûle les mains. Malbec la vend en ville comme une eau de jeunesse. Je savais que le bois grisait. Je me disais que ce n'était que des arbres. »",
      "Il relève la tête. « Ils y retournent la nuit de la pleine lune. Pour tout prendre, dit Malbec : la dernière récolte, la plus riche. Après, il n'y aura plus rien à prendre. » Il regarde Lison, assise sur le banc, qui tient son registre sur ses genoux. « Je n'irai pas. Plus jamais. Et si tu as besoin de moi, je dirai tout ça devant qui tu voudras. »",
    ],
    choices: [{ back: "H_boutique" }],
  },

  // ------------------------------------------------------------------ the night of the Creux
  B_nuit: {
    act: "II", title: "Le lit vide", place: "chambre",
    fx: { leave: "ortie" },
    text: [
      "Le lit d'Ortie est vide.",
      "Cette fois, tu ne cherches pas au jardin. Tu sais. La porte de derrière est ouverte, et Bistre est assis sur le seuil, tourné vers le dehors, la queue battant le plancher. Quand tu descends, il se lève, te regarde par-dessus son épaule, et part dans le noir, sans courir, d'un pas de guide.",
    ],
    choices: [{ label: "Suivre Bistre dans le bois", takes: 1, big: true, to: "B_nuit_bois" }],
  },
  B_nuit_bois: {
    act: "II", title: "Le bois de nuit", place: "combe",
    text: [
      "Le bois de Vergeronde, la nuit, n'est plus le bois du jour : c'est une chose plus vaste et plus vieille, qui a mis les arbres comme on met un habit, et qui t'observe à travers eux. Les troncs se resserrent. Les fougères de la combe te montent aux épaules, froides et mouillées, et se referment derrière toi sans bruit ; le ruisseau qu'on ne voit jamais parle plus fort que jamais, avec des mots qui ressemblent à ton nom. Bistre marche devant, une ombre dans l'ombre, et de temps en temps ses yeux jaunes se retournent pour vérifier que tu suis.",
      "Puis vient le gris. Au-delà de la combe, le sentier monte entre des arbres qui ont perdu leurs couleurs : des chênes gris, des houx gris, des fougères grises qui se cassent sous le pied avec un bruit de papier brûlé. Une biche dort au milieu du chemin, couchée sur le flanc, grise comme une statue ; tu l'enjambes, et elle respire. Le silence est complet. Pas un oiseau, pas une bête ; seulement ton souffle, et le sang dans tes oreilles, qui bat avec la régularité de quelqu'un qui frappe à une porte et sait qu'on ne lui ouvrira pas.",
      "Devant toi, entre les troncs, une lueur. Et une voix d'enfant qui chante, sur quatre notes.",
    ],
    choices: [{ label: "Avancer vers la lueur", to: "B_creux_nuit" }],
  },
  B_creux_nuit: {
    act: "II", title: "Le Creux", place: "creux",
    fx: { meet: "meme", ep: ["seance", 400] },
    text: [
      "Le sentier débouche au bord d'une combe ronde comme une coupe. Au fond se dresse un chêne si grand que sa cime se perd dans la nuit, et ses racines plongent dans une source qui sourd entre les pierres. L'eau luit faiblement, d'un éclat d'argent terni, comme une lampe dont on a baissé la mèche.",
      "Au bord de la Source, une petite silhouette en chemise de nuit se tient debout, pieds nus sur la mousse : Ortie. Elle chante, les yeux ouverts, de cette voix grave qui n'est pas la sienne. Elle tient par la main une vieille femme assise entre deux racines, enveloppée d'une cape grise, la Dame Grise.",
      "La Dame Grise a rejeté son capuchon. Sa peau a la couleur et le grain de l'écorce ; ses cheveux sont de mousse ; ses doigts, posés sur ceux d'Ortie, ont des nœuds comme des branches. Mais ses yeux, sous les sourcils de lichen, sont gris, vifs, moqueurs, et tu les connais depuis toujours.",
      "« Bonsoir, ma grande, dit Mémé Hulotte, d'une voix de feuilles. Tu as mis le temps. »",
    ],
    choices: [{ label: "Descendre vers elles", to: "B_lanternes" }],
  },
  B_lanternes: {
    act: "II", title: "Les lanternes", place: "creux",
    text: [
      "Tu as fait trois pas quand Mémé lève la main. « Chut. Ils viennent. »",
      "Des lumières montent par le sentier du nord, de l'autre côté de la combe. Trois lanternes voilées. Un grincement d'essieux, le pas étouffé des mulets, des voix d'hommes.",
      { if: { has: "gaspard:avoue" }, text: "« Sans le colporteur, on se perd une nuit sur deux, grogne quelqu'un. Il nous a lâchés, ce gros lâche. »", else: "Un rire gras, facile, monte avec les lumières, un rire de marché. Gaspard Trémolat marche en tête, une lanterne à la main, et montre le chemin." },
      "Mémé ne bouge pas. Elle a l'air très lasse. « Ils viennent deux nuits sur trois, dit-elle, tout bas. Ils prennent l'eau de la Source. Chaque fois, j'ai plus froid. Je ne peux pas les chasser : je suis trop vieille, et je suis seule. » Elle serre la main d'Ortie, qui chante toujours. « Cache-toi, ma grande. Cache-la. Qu'ils ne voient pas la petite. »",
    ],
    choices: [
      { label: "Déboucher une potion de brume", if: { item: "p_brume" }, fx: { drop: "p_brume", flag: "nuit:brume" }, to: "B_cache" },
      { label: "Prendre Ortie et te cacher entre les racines du chêne", test: { dom: "discretion", diff: 10, label: "Discrétion" }, win: { to: "B_cache" }, lose: { to: "B_vus" } },
      { label: "Te dresser devant eux, la lanterne levée", fx: { flag: "nuit:face" }, to: "B_vus" },
    ],
  },
  B_cache: {
    act: "II", title: "La récolte", place: "creux", takes: 2,
    text: [
      { if: { has: "nuit:brume" }, text: "Tu débouches le flacon. La brume en sort comme d'une bouilloire, épaisse, blanche, et coule au fond de la combe en un instant, jusqu'à la taille, jusqu'aux épaules. Tu ne vois plus tes pieds. Tu attrapes Ortie par le poignet et tu la tires entre les racines, et Mémé disparaît dans le blanc, et les lanternes des hommes ne sont plus que des taches jaunes qui jurent." },
      { if: { not: { has: "nuit:brume" } }, text: "Tu prends Ortie dans tes bras ; elle se laisse faire, chantant toujours, plus bas. Tu te glisses avec elle dans une cavité entre deux racines du chêne, sous la mousse, et tu lui poses la main sur la bouche. Elle se tait." },
      "Ils sont six. Brunet commande. Ils descendent les tonneaux au bord de la Source, plongent des louches de cuivre dans l'eau, et la versent dans les tonneaux par des entonnoirs. L'eau brille en coulant, et le givre se forme aussitôt sur le bois. Les hommes portent des gants épais et jurent quand une goutte leur touche le poignet.",
      "À chaque tonneau rempli, la Source pâlit un peu. À chaque tonneau, Mémé, assise contre son arbre, ferme les yeux plus fort. Autour de la combe, une branche grisonne, puis une autre, avec un craquement doux de givre.",
      "Ils remplissent six tonneaux. Ils mettent trois heures. Puis ils repartent par le sentier du nord, en riant de fatigue, et le grincement des essieux s'éloigne dans le bois.",
    ],
    choices: [{ label: "Sortir de ta cachette", to: "B_verite" }],
  },
  B_vus: {
    act: "II", title: "Le garde-chasse", place: "creux", takes: 1,
    fx: { flag: "nuit:vus" },
    text: [
      "La lumière d'une lanterne te frappe en plein visage. « Tiens, dit Brunet. La sorcière. » Il pose sa lanterne sur un tonneau et s'avance, la main sur son couteau de chasse. « Le sénéchal a dit : si elle vient, on lui fait peur. Il n'a pas dit comment. »",
      "Derrière toi, Mémé se lève.",
      "Elle se lève lentement, comme se lève un arbre qu'on aurait couché : en grinçant, en s'étirant, plus haute qu'elle n'était, et le Vieux Chêne se lève avec elle. Ses branches basses descendent, ses racines sortent de la mousse comme des bras, et les arbres gris de la combe, tous ensemble, se penchent vers le centre, vers les lanternes, avec un long craquement de forêt qui se réveille.",
      "Les hommes de Brunet lâchent leurs louches et s'enfuient par le sentier du nord en hurlant ; les mulets les suivent, la charrette derrière, les tonneaux rebondissant sur les pierres. Brunet reste un instant de plus, le couteau à la main, puis il recule, tourne les talons, et court comme les autres.",
      "Quand le dernier cri s'éteint dans le bois, Mémé retombe entre ses racines, toute petite, toute grise, et le Vieux Chêne redevient un arbre. « Ça, dit-elle d'une voix brisée, je ne pourrai pas le refaire souvent. »",
    ],
    choices: [{ label: "Courir vers elle", to: "B_verite" }],
  },
  B_verite: {
    act: "II", title: "Une qui veille", place: "creux", takes: "morning",
    fx: { join: "ortie", flag: ["m:verite", "g:verite", "recette:grande"], conf: { ortie: 5 }, ep: ["seance", 600] },
    text: [
      "Ortie a cessé de chanter. Elle cligne des yeux, regarde la Source, l'arbre, la vieille femme d'écorce, et toi, et elle dit, de sa voix à elle : « Mémé ? » Puis elle se jette dans les bras de bois de sa grand-mère, et Mémé la serre, et ses doigts de branche caressent les cheveux d'Ortie avec une douceur qui n'a pas changé.",
      "Mémé raconte. Elle raconte jusqu'à l'aube, assise entre ses racines, avec Ortie endormie sur ses genoux et toi contre son épaule.",
      "La Source du Creux est le cœur du bois. C'est d'elle que les plantes de Vergeronde tiennent leur force, et les sorcières leur art. Elle a toujours eu une Veilleuse, une sorcière qui vit au Creux, qui la garde, et qui devient, à force, un peu du bois qu'elle garde. La dernière s'appelait Ombeline. Elle avait été l'amie de Mémé, quand elles avaient dix-sept ans. Il y a un mois, Ombeline est morte, et la Source a appelé. Mémé est venue.",
      "« Je suis trop vieille pour ça, dit-elle. Ombeline aussi l'était. On s'use seule, ici. » Elle montre du menton une pierre plate, au bord de la Source, couverte de mousse. Sur la pierre, des lettres anciennes, presque effacées. Tu les lis tout haut : *Une qui veille, une qui chante.*",
      "« Les premières Veilleuses étaient deux sœurs, dit Mémé. L'une veillait, l'autre chantait, et la Source était heureuse. Puis on a oublié, et depuis deux cents ans, il n'y en a qu'une, et elle s'use, et le bois avec elle. La Source cherche une chanteuse. Elle l'a trouvée. » Elle regarde Ortie, qui dort sur ses genoux. « Ta sœur chante, ma grande. Elle chante depuis qu'elle est née. Moi, je n'ai jamais su chanter. »",
      "Puis elle parle du sénéchal, des tonneaux, de l'Eau de Jouvence, des dames de Valombre qui boivent le sang du bois pour effacer leurs rides. Elle parle de la pleine lune, dans trois nuits, où ils viendront tout prendre. Elle parle de la Grande Rosée, qui pourrait rendre à la Source ce qu'on lui a volé.",
      "« Une potion d'éveil, une fleur de lune, trois gouttes de ma Source, et une larme donnée de bon cœur, dit-elle. Je te l'aurais appris un jour. Ce jour-là est venu un peu tôt. »",
      "L'aube se lève sur le Creux. La rosée d'argent perle aux feuilles du Vieux Chêne.",
    ],
    choices: [{ label: "Le jour se lève", big: true, exit: true, to: "C_aube" }],
  },
};
