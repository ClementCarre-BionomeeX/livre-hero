// L'Île Folle-Aiguille · side story « Les lettres du Fidèle » (owes its question to the legend of the phantom ship as
// Marryat told it: does one owe anything to the dead who ask to be carried home, and what does a promise to a ghost
// weigh?). Act III, the mousse on the way to Brisegrève: in a night fog, a ship that was lost with all hands a hundred
// years ago sends a boat alongside, and a sailor in old clothes holds up a packet of letters « for Morlenc ». Old
// Lagadec says that whoever takes them sinks. The child takes the letters (uf:prend), refuses them (uf:refuse), or
// takes one only, to read it, and gives back the rest (uf:une). Wired in A3m_jours.
module.exports = {
  passages: {
    UF_brume: { act: "III", title: "Les lettres du Fidèle", place: "cormorane", ambiance: "nuit",
      text: [
        "La brume tombe à minuit, d'un coup, comme une toile qu'on jette sur une cage. On ne voit plus le beaupré depuis le grand mât. Le vent mollit, la mer s'aplatit, et la Cormorane glisse dans un silence de laine, où le moindre craquement de poulie sonne comme un coup de feu. Tu es de quart au gaillard d'avant avec Lagadec, le Hareng, qui ne dit rien, et qui fume, et qui regarde la brume avec des yeux de vieux qui reconnaît un endroit.",
        "Vers une heure, tu vois une lumière. Une lanterne, à tribord, très proche, trop proche, à la hauteur d'une poupe. Puis une coque, qui sort de la brume, haute, lourde, d'une forme qu'on ne fait plus : un château arrière sculpté, des galeries, des fenêtres à petits carreaux éclairées de l'intérieur par une lueur jaune, sans une ombre qui passe. Les voiles pendent, grises, en lambeaux, et pourtant le navire avance, à la même vitesse que vous, sans un bruit, sans une vague à l'étrave.",
        "Lagadec a ôté sa pipe de sa bouche. Il dit, très bas : « Le Fidèle. De Morlenc. Parti pour les longues routes l'année de la grande comète. Jamais revenu. » Il le dit comme on dit le nom d'un voisin. Il ajoute qu'il l'a déjà vu, une fois, sur la Maraude, à vingt ans, et qu'il n'avait pas pensé le revoir.",
        "Une chaloupe se détache du navire, sans qu'on ait entendu de palan, et vient vers vous. Un seul homme dedans, qui rame sans faire de bruit. Il accoste sous ton bossoir, et il lève vers toi un visage gris, mouillé, poli, et un paquet de lettres ficelées, jaunies, cachetées de cire rouge.",
      ],
      choices: [{ label: "L'écouter, sans bouger", to: "UF_paquet" }] },
    UF_paquet: { act: "III", title: "Les lettres du Fidèle", place: "cormorane", ambiance: "nuit",
      text: [
        "Il parle d'une voix d'homme ordinaire, un peu enrouée, avec l'accent de Morlenc et des tournures de grand-père. Il dit qu'il y a là des lettres pour la famille, à porter à Morlenc, puisque vous y retournerez. Il dit qu'on les attend. Il dit que le Fidèle est un peu en retard, à cause des vents, mais qu'il rentrera bientôt, et qu'en attendant, il faut prévenir. Il tend le paquet. Il ne monte pas à bord. Il attend qu'on le prenne.",
        "Tu lis l'adresse de la lettre du dessus, à la lueur de la lanterne. *À Madame Jeanne Le Méhauté, rue des Cordiers, à Morlenc.* La rue des Cordiers, tu la connais. Il n'y a pas de Le Méhauté rue des Cordiers. Il y en a une, au cimetière des Hollandes, sous une pierre si vieille qu'on lit à peine le nom ; tu l'as vue, en passant, parce qu'elle a un navire gravé, et que les navires gravés, tu les regardes.",
        "Lagadec te saisit le bras, fort. Il dit, à ton oreille, qu'il ne faut pas les prendre. Jamais. Qu'on le sait, sur toute la côte : celui qui prend les lettres du Fidèle prend sa route avec, et la route du Fidèle, elle ne finit nulle part. Il dit que sur la Maraude, un jeune les avait prises, par pitié. Il ne finit pas sa phrase. Il serre plus fort.",
        "L'homme de la chaloupe attend, le bras tendu, avec une patience qui n'est pas de ce monde. Il a l'air si fatigué. Il dit, plus bas : « Il y en a une pour ma mère. Elle s'appelle Anne. Elle doit s'inquiéter. »",
      ],
      choices: [
        { label: "Prendre le paquet, par pitié pour lui", fx: { flag: "uf:prend" }, to: "UF_prend" },
        { label: "Refuser, comme le veut Lagadec", fx: { flag: "uf:refuse" }, to: "UF_refuse" },
        { label: "Prendre une seule lettre, celle de sa mère, et lui rendre les autres", fx: { flag: "uf:une" }, to: "UF_une" },
      ] },
    UF_prend: { act: "III", title: "Les lettres du Fidèle", place: "cormorane", ambiance: "nuit",
      text: [
        "Tu te penches et tu prends le paquet. Il est froid, mouillé, lourd comme du plomb. L'homme dit merci. Il sourit, et c'est le plus terrible, parce que c'est un vrai sourire, de soulagement, d'homme qui pose enfin un fardeau. La chaloupe s'éloigne. Le Fidèle s'efface dans la brume, ses fenêtres jaunes d'abord, puis sa lanterne, puis rien. Lagadec s'est assis sur le pont, la tête dans les mains.",
        "Au matin, la brume s'est levée. Le paquet est toujours là, dans ta vareuse, contre ta poitrine. Les lettres sont sèches maintenant, et si vieilles qu'elles se cassent aux plis. Lagadec t'évite toute la journée. Les hommes du quart, à qui il a raconté, te regardent passer comme on regarde un chat noir. Gobert lui-même, qui ne croit à rien, demande à voir le paquet, le tient une seconde, et te le rend très vite.",
        "Il ne se passe rien. Le navire ne coule pas. Le vent revient. Les jours suivants, tu gardes le paquet dans ton coffre, sous ta chemise du dimanche, et tu y penses chaque soir, avant de t'endormir, comme à un devoir. Tu as promis. Tu ne sais pas à qui tu as promis. Tu sais seulement qu'il y a, rue des Cordiers et ailleurs, quinze adresses où il n'y a plus personne pour recevoir quoi que ce soit, et que tu iras quand même, si tu reviens, frapper à chaque porte.",
        "Lagadec vient te trouver, le troisième soir. Il te dit qu'il a eu tort de te serrer le bras. Il dit que le jeune de la Maraude, celui qui avait pris les lettres, est revenu, lui, et qu'il a fait la tournée des adresses, et qu'à la dernière, une vieille femme lui a ouvert, qui attendait depuis quarante ans. Il dit qu'il n'avait jamais osé finir l'histoire. Il dit que c'était lui, le jeune.",
      ],
      choices: [{ label: "Rejoindre ton hamac", fx: { quest: "UF" }, back: "A3m_jours" }] },
    UF_refuse: { act: "III", title: "Les lettres du Fidèle", place: "cormorane", ambiance: "nuit",
      text: [
        "Tu secoues la tête. Tu dis, d'une voix qui tremble, que tu ne peux pas. Que tu es désolé{e}. L'homme de la chaloupe te regarde sans colère. Il baisse le bras, lentement, et le paquet avec. Il dit : « Bien sûr. Personne ne peut. » Il le dit sans reproche, comme une chose qu'il sait depuis cent ans. Puis il reprend ses avirons, et il s'éloigne, et le Fidèle s'efface dans la brume.",
        "Lagadec te lâche le bras. Il souffle. Il rallume sa pipe, et sa main tremble tant qu'il lui faut battre trois fois le briquet. Il dit que tu as bien fait. Il le répète, plusieurs fois. Il dit qu'il faut toujours refuser, qu'il n'y a pas de honte, que les morts n'ont pas besoin de facteurs. Il le dit comme quelqu'un qui cherche à s'en convaincre depuis quarante ans.",
        "Au matin, la brume s'est levée. Rien n'a changé. Le vent souffle. Tu prends ton quart, tu manges ton biscuit, tu ris avec Petit-Jules. Mais tu repenses à la voix. *Elle s'appelle Anne. Elle doit s'inquiéter.* Tu y repenses le soir, et le lendemain, et longtemps après. Tu sais que tu n'aurais rien changé, que la mère de cet homme est morte depuis un siècle, qu'il n'y a personne à rassurer. Tu sais aussi qu'un homme t'a demandé une chose simple, une fois, et que tu as dit non, par peur.",
        "À Morlenc, plus tard, si tu y retournes, tu iras peut-être au cimetière des Hollandes. Tu chercheras, parmi les pierres effacées, une Anne, n'importe laquelle, sous un navire gravé. Tu ne sais pas ce que tu lui diras. Peut-être seulement qu'il est en retard, à cause des vents.",
      ],
      choices: [{ label: "Rejoindre ton hamac", fx: { quest: "UF" }, back: "A3m_jours" }] },
    UF_une: { act: "III", title: "Les lettres du Fidèle", place: "cormorane", ambiance: "nuit",
      text: [
        "Tu te penches. Tu dis que tu ne peux pas prendre le paquet, que ce serait trop, mais que tu prendras une lettre. Une seule. Celle de sa mère. L'homme te regarde. Il réfléchit, longtemps, avec la lenteur de quelqu'un qui n'a pas eu de décision à prendre depuis un siècle. Puis il défait la ficelle, cherche, et te tend une lettre, une seule, plus petite que les autres, à l'écriture plus soignée. *À Madame Anne Kerlann, au bas de la côte des Hollandes.* Il renoue le paquet. Il dit merci. Il s'éloigne.",
        "Le Fidèle s'efface. Lagadec te regarde, la bouche ouverte. Il ne dit rien. Il ne sait pas s'il faut te gronder ou te plaindre ; l'histoire, sur la côte, ne parle pas de ceux qui prennent une seule lettre.",
        "Au matin, tu ouvres la lettre. Tu ne devrais pas. Tu le fais quand même, parce que tu veux savoir ce qu'on écrit à sa mère depuis cent ans. Elle tient sur une page. L'écriture est appliquée, d'homme qui a appris tard. *Ma chère maman. Nous avons du retard à cause des vents. Ne vous inquiétez pas. Je mange bien. J'ai un ami, il s'appelle Corentin, il est de Varnèse. Je vous rapporte une étoffe bleue, comme vous vouliez. Je pense à vous chaque soir. Votre fils, Pierre.*",
        "C'est tout. Pas de mystère, pas de malédiction. Un garçon qui rassure sa mère. Tu replies la lettre et tu la gardes dans ta vareuse. Il ne se passe rien, les jours suivants, sinon que tu penses plus souvent qu'avant à ceux qui t'attendent, toi, et que tu te promets de leur écrire, au prochain port, une lettre qui dirait à peu près la même chose. Tu ne sais pas si tu as été sage ou lâche, ou les deux. Tu as porté une seule lettre parce qu'on ne peut porter qu'une seule lettre à la fois. Lagadec, le soir, te dit qu'il trouve ça juste.",
      ],
      choices: [{ label: "Rejoindre ton hamac", fx: { quest: "UF" }, back: "A3m_jours" }] },
  },
  extras: {
    quests: [
      { id: "UF", act: "III", kind: "annexe", title: "Les lettres du Fidèle", start: "UF_brume", doit: "vaisseaufantome", echo: ["uf:prend", "uf:refuse", "uf:une"] },
    ],
  },
};
