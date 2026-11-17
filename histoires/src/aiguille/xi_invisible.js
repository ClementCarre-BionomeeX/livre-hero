// L'Île Folle-Aiguille · side story « Le passager qu'on ne voit pas » (owes its question to The Invisible Man: what
// does a man become when nobody can see him, and nobody has to answer to him?). Act III, the child of the Fanal, between
// Morlenc and Brisegrève. Biscuit goes missing; footprints in the flour; a voice. Ulysse Fenouillet, a chemist driven
// out of the Academy, made himself transparent and stowed away to reach the sun (a transparent man is always cold).
// Hide him, hand him over, or give him to the professor; he hears everything, which is read later on the island.
module.exports = {
  passages: {
    XI_debut: { act: "III", title: "Le biscuit", place: "cormorane", ambiance: "mer",
      fx: { flag: "xi:signes" },
      text: [
        "Dans l'entrepont, Maître Gobert tient Simon Tarlet par le col contre une épontille et lui crie dans la figure, à deux pouces, si fort que la barbe de Tarlet en frémit.",
        "« Trois biscuits par nuit ! Depuis Morlenc ! Et la moitié d'un fromage de la capitaine, et une bouteille de vin du baron, et une couverture de laine ! Tu as des dettes, Tarlet, tout le monde le sait ! Tu revends ! À qui, en pleine mer ? Aux poissons ?",
        "— Ce n'est pas moi, maître, je le jure sur la tête de ma mère !",
        "— Ta mère est morte !",
        "— Raison de plus ! »",
        "Gobert le lâche, faute de preuve et de souffle. Tarlet se frotte le cou. Les matelots ricanent. Toi, tu regardes le coffre à biscuit, cerclé de fer, fermé d'un cadenas. Le cadenas est intact. Le couvercle aussi. Le coffre est à moitié vide.",
        { if: { has: "xi:lemerle" }, text: "Un pas de trop, a dit la timonière. Il marche pieds nus." },
      ],
      choices: [
        { label: "Répandre de la farine devant le coffre, la nuit, et guetter", to: "XI_farine" },
        { label: "Descendre le chien dans l'entrepont, la nuit", if: { present: "chien" }, hide: { not: { present: "chien" } }, to: "XI_chien" },
        { label: "Veiller dans le noir, sans bouger", test: { dom: "discretion", diff: 10, label: "Guetter le voleur" }, win: { to: "XI_guet" }, lose: { to: "XI_guet_dort" } },
      ] },
    XI_farine: { act: "III", title: "La farine", place: "cormorane", ambiance: "nuit",
      text: [
        "Tu voles une poignée de farine à la cambuse pendant que Fargue chante, et tu la répands, à la nuit, en couche fine sur le plancher devant le coffre à biscuit. Puis tu te caches derrière une barrique, avec une lanterne sourde fermée, et tu attends.",
        "Minuit. Une heure. L'entrepont ronfle. Une lanterne se balance à l'autre bout, très loin. Tu commences à t'endormir.",
        "Un bruit te réveille : un frôlement. Rien ne bouge dans l'entrepont. Tu ouvres le volet de ta lanterne.",
        "Dans la farine, devant le coffre, il y a une empreinte de pied nu.",
        "Puis une autre, à côté. Elle se forme sous tes yeux, lentement : le talon, la plante, les cinq orteils, un peu écartés, qui s'enfoncent dans la poudre blanche. Puis une troisième, un pas plus loin, vers toi. Puis une quatrième. Il n'y a personne. Il n'y a rien au-dessus des empreintes que l'air, la lanterne et l'ombre des hamacs. Les pas viennent vers toi.",
        "Ils s'arrêtent à un pied de ta barrique. Tu entends une respiration. Une respiration rapide, qui claque des dents.",
        "« Ne crie pas, dit une voix, juste devant toi, à hauteur de ta tête. Je t'en supplie. Ne crie pas. J'ai si froid. »",
      ],
      choices: [{ label: "Ne pas crier", to: "XI_voix" }] },
    XI_chien: { act: "III", title: "Le chien", place: "cormorane", ambiance: "nuit",
      text: [
        "Tu descends le chien dans l'entrepont, à la nuit, malgré les protestations des dormeurs, et tu t'assieds avec lui contre le coffre à biscuit. Il se couche, le museau sur les pattes. Une heure passe.",
        "Puis il lève la tête. Ses oreilles se dressent. Il regarde le vide, à trois pas devant lui, entre deux hamacs, à hauteur d'homme. Il gronde. Le poil se hérisse sur son échine, du cou à la queue.",
        "Il n'y a rien entre les hamacs. Le chien bondit quand même.",
        "Il s'arrête en l'air, net, comme s'il avait heurté un mur, et retombe en tenant quelque chose dans la gueule, quelque chose qui n'existe pas et qui hurle. Un hurlement d'homme, aigu, terrifié, qui réveille tout l'entrepont. Le chien secoue la tête de toutes ses forces, et le vide se débat au bout de ses crocs, et une voix crie, à hauteur de tes genoux : « Rappelez-le ! Rappelez-le, pour l'amour de Dieu ! Ma jambe ! »",
      ],
      choices: [{ label: "Rappeler le chien", fx: { flag: "xi:mordu" }, to: "XI_chien_lache" }] },
    XI_chien_lache: { act: "III", title: "Le chien", place: "cormorane", ambiance: "nuit",
      text: [
        "Le chien lâche, à regret, et recule contre tes jambes en grondant. Des gouttes de sang tombent sur le plancher, une à une, de nulle part, et forment une petite flaque.",
        "Autour de vous, les hamacs se sont vidés. Des matelots en chemise, une lanterne à la main, regardent la flaque, puis le vide au-dessus. Personne ne dit rien. Rivoal fait un signe de croix. Puis un autre. Lagadec a sorti son couteau et ne sait pas où le pointer.",
        "Et le vide, d'une voix qui sanglote de douleur, dit : « Je vous en prie. Je ne vous veux aucun mal. Je n'ai rien mangé depuis deux jours. »",
        "Tous les yeux se tournent vers toi, parce que c'est ton chien.",
      ],
      choices: [
        { label: "« Laissez-le. Il est à moi. »", fx: { flag: "xi:public" }, to: "XI_voix" },
        { label: "Courir chercher Maître Gobert", to: "XI_livrer" },
      ] },
    XI_guet: { act: "III", title: "Le guet", place: "cormorane", ambiance: "nuit",
      text: [
        "Tu restes immobile dans le noir, derrière une barrique, si longtemps que tes jambes s'endorment et que tu cesses de les sentir. Vers trois heures, un biscuit sort du coffre.",
        "Il en sort seul. Le couvercle se soulève de deux doigts, sans un bruit, le biscuit glisse par la fente, et le couvercle se referme. Le biscuit flotte dans l'air, à hauteur de poitrine, puis monte, et un morceau disparaît, avec un craquement. Puis un autre. Le biscuit diminue, en l'air, par petites bouchées pressées, comme on mange quand on a très faim et peur qu'on vous voie.",
        "Une miette tombe. Puis la voix : « Je sais que tu es là. Je t'entends respirer depuis une heure. Tu respires comme un phoque. » Un temps. « Tu n'as pas crié. C'est bien. Continue. »",
      ],
      choices: [{ label: "« Qui êtes-vous ? »", to: "XI_voix" }] },
    XI_guet_dort: { act: "III", title: "Le guet", place: "cormorane", ambiance: "nuit",
      text: [
        "Tu t'endors derrière ta barrique, à la deuxième heure, sans t'en rendre compte. Quand tu te réveilles, il fait jour dans l'écoutille, le coffre est fermé, et ta ration de biscuit, que tu avais posée à côté de toi, a disparu.",
        "Sur le plancher, dans la poussière, quelqu'un a écrit du bout du doigt, en belles lettres penchées d'homme instruit : *MERCI*.",
        "La nuit suivante, tu n'as pas besoin de guetter. Tu es à peine dans ton hamac qu'une voix chuchote à ton oreille, si près que tu sens un souffle froid : « Toi, au moins, tu partages. Écoute-moi, et ne crie pas. »",
      ],
      choices: [{ label: "Écouter", to: "XI_voix" }] },

    XI_voix: { act: "III", title: "Le passager", place: "cormorane", ambiance: "nuit",
      fx: { meet: "fenouillet" },
      text: [
        "« Ulysse Fenouillet, dit la voix. Docteur en chimie de l'Académie de Morlenc. Ancien docteur. Ancien membre. Exclu pour vol de réactifs et pour avoir eu raison trop tôt, deux crimes que l'Académie punit du même châtiment. »",
        "Elle parle vite, avec des dents qui claquent, et de temps en temps elle s'arrête pour tousser.",
        "« J'ai cherché pendant onze ans comment rendre un corps aussi transparent que l'eau. Un corps vivant. Le mien, faute de volontaire. Et j'ai trouvé. Le sang, la chair, l'os, les ongles, tout. Un mélange de sels d'argent, d'un extrait de méduse et d'une chose dont je garderai le nom. » La voix rit, d'un rire nerveux. « J'ai seulement oublié de chercher comment revenir. Voilà trois mois que je suis invisible. Trois mois que je vole pour manger. Trois mois que j'ai froid.",
        "« Tu comprends ? Le soleil me traverse. Il passe à travers moi sans s'arrêter, sans me chauffer, comme à travers une vitre. Je gèle en plein midi. Il me faut le sud, la vraie chaleur, celle de l'air et de l'eau. Alors je me suis embarqué. Je ne demande rien d'autre : du pain, une couverture, et ton silence jusqu'aux eaux chaudes. »",
        "Une main se pose sur ton bras. Tu la sens : une main maigre, glacée, aux doigts longs. Tu ne la vois pas.",
      ],
      choices: [
        { label: "« Je vous apporterai à manger. Et je ne dirai rien. »", to: "XI_proteger" },
        { label: "« Le professeur Gaudrémont est à bord. Il vous aidera peut-être. »", to: "XI_gaudremont" },
        { label: "« Je dois le dire à la capitaine. »", to: "XI_livrer" },
        { label: "« Débrouillez-vous sans moi. »", to: "XI_refus" },
      ] },

    XI_proteger: { act: "III", title: "Le secret", place: "cormorane", ambiance: "mer",
      text: [
        "Tu le nourris. Tu prends sur ta ration, tu chipes à la cambuse une croûte, un oignon, un reste de lard, et tu les poses le soir dans un coin de la soute aux voiles, contre le tuyau du fourneau, là où il fait le plus chaud du navire. Le matin, il n'y a plus rien. Tu lui as trouvé une vieille couverture ; elle se déplace toute seule dans la soute, en boule, comme un chat.",
        { if: { has: "xi:public" }, text: "Tout l'entrepont sait, depuis la nuit du chien, qu'il y a à bord quelqu'un qu'on ne voit pas, et tout l'entrepont fait semblant de ne pas le savoir. Le matin, Rivoal laisse un quignon de pain sur une barrique, comme on en laisse aux saints dans les chapelles des grèves, et ne vérifie pas où il passe." },
        "Il parle. Il parle beaucoup, la nuit, comme parlent ceux qui sont restés trop longtemps seuls : de chimie, de lumière, de l'Académie, de ses ennemis, qu'il a nombreux et qu'il nomme tous. Il parle surtout de ce qu'il entend.",
        "« Personne ne se méfie de l'air, dit-il. Je vais où je veux. Je m'assieds dans la grand-chambre pendant que le baron dîne. Je dors dans la cabine de la capitaine. Je sais qui triche aux cartes, qui boit, qui pleure la nuit. Je sais des choses sur ce navire que personne ne sait. » Il rit. « Un homme invisible est un dieu, mon enfant. Un dieu qui a froid, mais un dieu. »",
        "Les jours passent. Il rit de plus en plus. Il ne te demande plus de pain ; il le prend. Il commence à dire « ces gens » en parlant de l'équipage.",
      ],
      choices: [{ label: "La septième nuit", to: "XI_orgueil" }] },
    XI_orgueil: { act: "III", title: "Le fantôme", place: "cormorane", ambiance: "nuit",
      text: [
        "La septième nuit, l'entrepont s'éveille dans les cris.",
        "Des hamacs se balancent tout seuls. Une lanterne vole d'un bout à l'autre du pont inférieur et s'écrase contre le mât. Une voix caverneuse, qui vient de partout et de nulle part, annonce que le navire est maudit, qu'il coulera avant la nouvelle lune, et que les morts de la mer réclament leur dû. Rivoal pleure à genoux. Daguenet s'est caché sous une barrique. Marjolaine tient un couteau et frappe le vide en jurant. Lagadec, très pâle, ne bouge pas : il regarde le vide comme un homme qui a déjà vu des choses pareilles et sait qu'elles finissent mal.",
        "Et dans la soute aux voiles, quand tu y descends, tu entends quelqu'un rire. Un rire aigu, ravi, qui ne s'arrête pas.",
        "« Tu as vu ? hoquette Fenouillet. Tu as vu leurs têtes ? Les braves gens ! Ils se mettraient à genoux devant un courant d'air ! Demain, je leur fais jeter le baron à la mer. Je leur dis que c'est la volonté des noyés. Tu crois qu'ils le feraient ? »",
      ],
      choices: [
        { label: "« Si vous recommencez, je dis tout. »", test: { dom: "social", diff: 0, label: "Le faire taire" },
          win: { fx: { flag: "xi:protege", quest: "XI" }, to: "XI_calme" }, lose: { to: "XI_menace" } },
        { label: "Rire avec lui", fx: { flag: ["xi:protege", "xi:complice"], quest: "XI" }, to: "XI_complice" },
      ] },
    XI_calme: { act: "III", title: "Le passager", place: "cormorane", ambiance: "nuit",
      text: [
        "Le rire s'arrête. Il y a un long silence dans la soute. Tu entends claquer ses dents.",
        "« Tu as raison, dit-il enfin, très bas. Pardonne-moi. On devient fou, à ne plus se voir. On ne sait plus où l'on finit. Tu comprends ? Le matin, je cherche mes mains, et il n'y a rien. Alors je fais du bruit, pour exister. » Il soupire. « Je me tiendrai tranquille. Je te le promets. Et en échange, je te dirai ce que j'entends. Tout. Tu seras le seul, sur ce navire, à savoir ce que les autres disent quand ils se croient seuls. »",
        "Le lendemain, Gobert fait bénir l'entrepont par Fréville, le charpentier, qui est pieux et sait le latin de trois prières. Le fantôme ne revient pas.",
      ],
      choices: [{ label: "Retourner à tes quarts", to: "XI_fin" }] },
    XI_menace: { act: "III", title: "Le passager", place: "cormorane", ambiance: "nuit",
      text: [
        "Le rire s'arrête. Une main glacée te prend à la gorge, pas assez pour t'étrangler, assez pour que tu comprennes.",
        "« Toi ? Dire quoi ? À qui ? Qu'il y a un homme invisible à bord ? » Il serre un peu. « Ils te croiront fou{e}. Ou ils te croiront, et ils me chercheront, et pendant qu'ils me chercheront, une nuit, quelqu'un tombera à la mer. Peut-être toi. » Il te lâche. Tu tousses. Sa voix redevient douce, presque tendre. « Mais nous sommes amis. N'est-ce pas ? Je me tiendrai tranquille, puisque ça te fait plaisir. Et je te dirai ce que j'entends. »",
        "Le fantôme ne revient pas. Mais tu sais, désormais, que Fenouillet n'est pas ton ami. Il n'est l'ami de personne. Il a seulement besoin de toi.",
      ],
      choices: [{ label: "Retourner à tes quarts", fx: { flag: ["xi:protege", "xi:menace"], quest: "XI" }, to: "XI_fin" }] },
    XI_complice: { act: "III", title: "Le passager", place: "cormorane", ambiance: "nuit",
      text: [
        "Tu ris. C'est plus fort que toi : Daguenet sous sa barrique, Rivoal qui prie à l'envers. Vous riez ensemble dans le noir de la soute, toi et le vide, à vous en faire mal au ventre.",
        "« Toi, tu es des miens, dit Fenouillet, ravi. Je l'ai su tout de suite. Nous ferons de grandes choses. » Il baisse la voix. « Pas le baron, d'accord. On garde le baron. Je te dirai tout ce que j'entends, et nous rirons d'eux tous. »",
        "Le lendemain, le gaillard d'avant est sombre. Rivoal a jeté son jeu de cartes à la mer, comme une offrande. Lemerle ne parle plus à personne. Les matelots se regardent de travers et dorment par deux, dos à dos.",
      ],
      choices: [{ label: "Retourner à tes quarts", fx: { penche: { rivoal: -1, lemerle: -1 } }, to: "XI_fin" }] },

    XI_gaudremont: { act: "III", title: "Deux savants", place: "cormorane", ambiance: "mer",
      fx: { meet: "gaudremont" },
      text: [
        "Tu mènes le vide à la cabine du professeur, la nuit, par la main. Gaudrémont dort en ronflant dans sa couchette, un bonnet de nuit sur la tête et un livre ouvert sur le ventre. Tu le secoues. Il ouvre un œil.",
        "« Professeur, dit la voix à côté de toi. C'est moi. Fenouillet. »",
        "Le professeur se dresse dans sa couchette comme un diable qui sort d'une boîte. Il regarde l'endroit d'où vient la voix. Il ne voit rien. Il tend la main, touche une épaule invisible, la palpe, remonte au visage, tâte le nez, les oreilles, le crâne, avec la précision d'un anatomiste. Sa bouche s'ouvre.",
        "« Fenouillet ! rugit-il. Fenouillet, voleur ! Vous m'avez pris quatre onces de nitrate d'argent ! Mes plus beaux bocaux ! Vous avez déshonoré la Section de chimie ! » Il le secoue par les épaules. « Vous l'avez fait ? Vous l'avez vraiment fait ? La transparence ? Sur un vivant ? »",
        "« Sur moi, professeur.",
        "— Sur vous ! » Gaudrémont le lâche, retombe dans sa couchette, et éclate en sanglots, d'énormes sanglots d'enfant, de joie pure. « Sur vous ! Oh, le génie ! Oh, l'imbécile ! Vous ne pouvez plus revenir, je parie ?",
        "— Non.",
        "— Je le savais ! Un génie et un imbécile ! Les deux ! Le savant complet ! » Il se mouche dans son bonnet de nuit. « Vous dormirez ici. Sous ma couchette. Je dirai que c'est mon chien. »",
      ],
      choices: [{ label: "Les laisser se disputer jusqu'à l'aube", fx: { flag: ["xi:protege", "gaudremont:fenouillet"], quest: "XI", regard: { gaudremont: "admiratif" } }, to: "XI_fin" }] },

    XI_livrer: { act: "III", title: "La chasse", place: "cormorane", ambiance: "nuit",
      text: [
        { if: { not: { has: "xi:mordu" } }, text: "Tu cours chez Gobert. Gobert te croit à moitié ; c'est-à-dire qu'il te gifle, puis qu'il réveille la capitaine." },
        { if: { has: "xi:mordu" }, text: "Gobert arrive en chemise, une lanterne à la main, regarde la flaque de sang, puis le chien, puis toi, et va réveiller la capitaine sans un mot." },
        "La capitaine Ribaud descend dans l'entrepont, écoute, réfléchit, et fait ce que personne n'aurait pensé à faire : elle fait fermer les écoutilles, éteindre toutes les lanternes sauf une, et répandre de la farine sur tout le plancher, d'un bout à l'autre, à pleins sacs. Puis elle fait mettre les hommes en rang, les mains jointes, et attend.",
        "Dans la farine, des pieds nus se mettent à courir.",
        "La chasse dure dix minutes. Des empreintes affolées, zigzaguant entre les jambes ; des seaux d'eau lancés à la volée, qui dessinent dans l'air, une seconde, la forme ruisselante d'un dos, d'une tête, d'un bras levé ; un hurlement ; puis Malandain qui referme ses bras énormes sur le vide, et le vide qui se débat, et crie, et mord.",
        "On l'enroule dans une voile. La voile prend la forme d'un homme maigre, qui pleure.",
      ],
      choices: [{ label: "Le regarder emmener", to: "XI_livre" }] },
    XI_livre: { act: "III", title: "Le prisonnier", place: "cormorane", ambiance: "mer",
      text: [
        "La capitaine l'interroge dans sa cabine, enroulé dans sa voile, et l'écoute sans l'interrompre, comme elle écoute le vent. Puis elle décide.",
        "« Vous êtes un passager clandestin. La loi dit qu'on vous débarque au premier port. Le premier port est Brisegrève. » Elle ne sourit pas. « Le gouverneur de Brisegrève tient une prison d'État. Il sera ravi d'avoir un prisonnier qu'il n'aura pas besoin de nourrir. Ça se voit si peu. »",
        "On l'enferme dans la soute à voiles, enchaîné à un anneau. La nuit, tu l'entends pleurer à travers la cloison. Une fois, il t'appelle par ton nom. « Toi, dit-il. Je me souviendrai de toi. Les gens qu'on ne voit pas ont beaucoup de mémoire ; ils n'ont que ça à faire. »",
      ],
      choices: [{ label: "Retourner à tes quarts", fx: { flag: "xi:livre", quest: "XI", penche: { lemerle: 1 } }, to: "XI_fin" }] },

    XI_refus: { act: "III", title: "Le passager", place: "cormorane", ambiance: "nuit",
      text: [
        "La main glacée quitte ton bras. Il y a un long silence.",
        "« Bien, dit la voix. Bien. Au moins, tu dis ce que tu penses. C'est rare. » Les pas nus s'éloignent dans le noir, très doucement. « Je me débrouillerai. Je me suis toujours débrouillé. »",
        "Les vols continuent. Puis, la neuvième nuit, ils s'arrêtent. Le lendemain, au matin, on trouve la porte du magasin à vin forcée et une bouteille de rhum vide sur le plancher de la soute aux voiles, avec la couverture de laine. Personne n'a rien entendu.",
        "Le soir, à la lisse, tu regardes le sillage. Tu penses à un homme qu'on ne voit pas, ivre, au bord du pont, dans le noir, et à une vague. Tu ne sauras jamais.",
      ],
      choices: [{ label: "Retourner à tes quarts", fx: { flag: "xi:mort" }, to: "XI_fin" }] },
    XI_fin: { act: "III", title: "Le passager", place: "cormorane", ambiance: "mer",
      text: [
        { if: { has: "xi:protege" }, text: "Le passager invisible se tient tranquille. On ne vole plus de biscuit. Seule Lemerle, à la barre, la nuit, tourne parfois la tête vers un endroit vide du pont, et compte les pas." },
        { if: { has: "xi:livre" }, text: "Dans la soute à voiles, une chaîne remue de temps en temps sur un anneau, au bout de rien." },
        { if: { has: "xi:mort" }, text: "On ne vole plus de biscuit. Tarlet est blanchi. Gobert lui offre un verre, ce qui ne lui était pas arrivé depuis l'enterrement de sa femme." },
      ],
      choices: [{ back: "A3m_jours" }] },
  },
  extras: {
    people: {
      fenouillet: { name: "Ulysse Fenouillet", aka: ["Fenouillet", "le passager invisible"], f: false,
        face: { age: "mur", skin: "porcelaine", hair: "gris", coif: "degarni", beard: "sans", eyes: "ronds", iris: "clair", nose: "fin", lips: "fines", shape: "allonge", marks: [] },
        desc: "Chimiste exclu de l'Académie de Morlenc, rendu invisible par sa propre préparation.", qui: "Le passager qu'on ne voit pas.",
        aspect: { allure: "une voix, des pas nus", voix: "rapide, qui claque des dents", signe: "il a toujours froid" } },
    },
    quests: [
      { id: "XI", act: "III", kind: "annexe", title: "Le passager qu'on ne voit pas", start: "XI_debut", doit: "hommeinvisible", echo: ["xi:protege", "xi:livre", "gaudremont:fenouillet"] },
    ],
  },
};
