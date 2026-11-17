// L'Île Folle-Aiguille · side story « La manche du baron » (owes its question to Chekhov's The Death of a Government
// Clerk: how low will a man bow before power that has not even noticed him, and should one tell him so?). Act II,
// Fargue in Morlenc: at the Bourse of the shipowners, a junior clerk, Firmin Gloanec, jostled by the crowd, splashed ink
// on the sleeve of the baron Clavières, who said « ce n'est rien » and forgot him at once. The clerk cannot forget. For
// four days he has followed the baron's carriage with letters of apology; he has lost his post for it. He comes to the
// galley of the Cormorane to beg the baron's cook to intercede. Fargue takes him to the baron (uu:baron), tells him the
// baron has forgotten him (uu:verite), or makes him write one last letter, promises to deliver it, and burns it
// (uu:lettre). Wired in XR_jours.
module.exports = {
  passages: {
    UU_commis: { act: "II", title: "La manche du baron", place: "quai_hollandes", ambiance: "ville", second: true,
      fx: { meet: "gloanec" },
      text: [
        "Il attend sur le quai, au pied de la passerelle de la Cormorane, sous la pluie, depuis l'aube, dit le matelot de garde. Un petit homme de trente ans, en redingote noire trop large, chapeau à la main malgré l'averse, avec une serviette de cuir serrée contre la poitrine comme une relique. Quand Fargue descend chercher ses oignons, le petit homme se précipite, s'incline trois fois, et demande s'il a bien l'honneur de parler au cuisinier de monsieur le baron Clavières.",
        "Fargue dit qu'il est le maître-coq de la Cormorane, armée par monsieur le baron. Le petit homme s'incline une quatrième fois. Il s'appelle Firmin Gloanec. Il était, jusqu'à lundi, troisième commis aux écritures à la Caisse des gens de mer. Il ne l'est plus. Il dit cela très vite, avec un sourire tremblant, comme on avoue une maladie honteuse.",
        "Fargue le fait monter dans la cambuse, parce qu'il pleut, et parce que l'homme tremble. Il lui sert un bol de bouillon. Gloanec le tient à deux mains sans le boire. Il ouvre sa serviette. Elle est pleine de lettres. Des dizaines. Toutes commencent par Monsieur le Baron, toutes sont d'une belle écriture ronde de commis, et toutes sont des excuses.",
      ],
      choices: [{ label: "Lui demander ce qu'il a fait de si grave", to: "UU_bourse" }] },
    UU_bourse: { act: "II", title: "La manche du baron", place: "quai_hollandes", ambiance: "ville", second: true,
      text: [
        "Jeudi dernier, à la Bourse des armateurs, il portait un encrier au greffier. La foule l'a poussé. L'encrier a sauté. Une goutte, une seule, est tombée sur la manche d'un habit gris perle. L'habit était celui du baron Clavières. Le baron a regardé sa manche, puis le commis, puis sa manche, et il a dit : « Ce n'est rien, mon ami. » Et il s'est détourné pour parler à un armateur.",
        "Gloanec dit que c'est ce « mon ami » qui l'a perdu. Il dit qu'un homme comme le baron ne dit pas mon ami à un commis, sauf par ironie, ou par mépris, ou pour le marquer. Il n'a pas dormi de la nuit. Le lendemain, il est allé à l'hôtel Clavières pour s'excuser. On l'a renvoyé. Il a écrit. Il est revenu. Il a attendu la voiture du baron à la sortie de l'Amirauté, pour s'excuser à la portière. Le cocher l'a fouetté. Il a écrit encore. Il a manqué trois jours à la Caisse. On l'a renvoyé.",
        "Il dit tout cela avec une précision maniaque, en comptant sur ses doigts, les heures, les lettres, les refus. Il ne se plaint pas. Il ne demande pas qu'on lui rende sa place. Il demande seulement qu'on le pardonne. Il dit qu'il ne peut pas vivre avec une goutte d'encre sur la manche d'un baron. Il dit que tant que le baron ne lui aura pas dit, en le regardant, qu'il le pardonne, il ne pourra plus rien faire, ni manger, ni dormir, ni travailler.",
        "Fargue l'écoute. Il pense à lui-même, à vingt ans, devant certains hommes. Il pense à la façon dont il dit « monsieur le baron », chaque soir, à la table d'échecs, d'une voix qui plie juste ce qu'il faut. Il pense qu'il y a dans ce petit homme trempé quelque chose de lui, réduit, grossi, insupportable. Il pense que le baron n'a sans doute pas pensé à cette goutte d'encre plus de deux secondes, et que l'habit est déjà chez le teinturier, ou donné à un valet.",
        "Gloanec pose le bol. Il dit que monsieur le cuisinier voit le baron tous les jours. Il dit qu'un mot de lui suffirait. Il demande, les mains jointes, que monsieur le cuisinier intercède.",
      ],
      choices: [
        { label: "Le mener au baron, et lui obtenir son pardon en face", fx: { flag: "uu:baron" }, to: "UU_baron" },
        { label: "Lui dire la vérité : le baron l'a oublié la seconde même", fx: { flag: "uu:verite" }, to: "UU_verite" },
        { label: "Lui faire écrire une dernière lettre, la prendre, et la brûler", fx: { flag: "uu:lettre" }, to: "UU_lettre" },
      ] },
    UU_baron: { act: "II", title: "La manche du baron", place: "haute_ville", ambiance: "ville", second: true,
      text: [
        "Fargue l'emmène, le soir même, à l'hôtel Clavières, par la porte de service, où on le connaît. Il fait attendre le commis dans l'office, entre les cuivres et les domestiques qui ricanent. Il monte. Le baron est dans son cabinet, en robe de chambre, avec un cigare et des comptes. Fargue lui explique l'affaire, en peu de mots. Le baron écoute, d'abord perplexe, puis amusé. Il dit qu'il ne se souvient de rien. Puis il se souvient. Il rit. Il dit qu'il veut voir ça.",
        "On fait monter Gloanec. Il entre, s'incline jusqu'à terre, et commence un discours qu'il a dû répéter cent fois. Le baron l'interrompt d'un geste. Il le regarde avec une curiosité d'entomologiste. Puis il dit, très aimablement, en détachant les mots, qu'il pardonne. Qu'il pardonne entièrement. Qu'il n'y pensera plus jamais. Et il ajoute, avec un sourire, qu'il espère que monsieur Gloanec n'y pensera plus non plus, car il serait fâcheux qu'un homme se ruine pour une goutte d'encre.",
        "Gloanec sort de l'hôtel transfiguré. Il pleure, il rit, il serre les mains de Fargue dans les siennes. Il dit qu'il revit. Il dit qu'il ira demain à la Caisse demander sa place, et qu'on la lui rendra, maintenant qu'il est pardonné. Fargue le regarde s'éloigner sous les réverbères, presque en dansant.",
        "Le lendemain, à la table d'échecs, le baron raconte l'histoire au professeur, en imitant le commis. Il la raconte très bien. Le professeur rit à s'étouffer. Le baron dit que c'est la chose la plus divertissante qu'il ait vue depuis le dernier opéra, et que le pardon est un plaisir de prince qu'on sous-estime. Il remercie Fargue de la lui avoir offerte. Fargue sourit. Il joue mal, ce soir-là. Il se dit qu'il a rendu sa vie à un homme en le donnant en spectacle, et qu'il ne sait plus lequel des deux, de Gloanec ou de lui, s'est le plus incliné.",
      ],
      choices: [{ label: "Retourner aux préparatifs", fx: { quest: "UU" }, back: "XR_jours" }] },
    UU_verite: { act: "II", title: "La manche du baron", place: "quai_hollandes", ambiance: "ville", second: true,
      text: [
        "Fargue reprend le bol des mains du commis, le pose sur le fourneau, et lui dit la vérité. Il le dit de sa voix de quartier-maître, sans méchanceté et sans détour. Le baron a oublié. Il a oublié la goutte, l'encrier, la Bourse, et le visage de celui qui a dit pardon, avant même d'avoir fini de parler à l'armateur. Il n'a jamais lu une seule des lettres. Si le cocher l'a fouetté, c'est que le cocher fouette tout ce qui s'approche de la portière. Gloanec n'existe pas, pour le baron Clavières. Il n'a jamais existé.",
        "Le commis le regarde, la bouche ouverte. Il dit que ce n'est pas possible. Fargue dit que si. Il dit qu'il voit le baron tous les jours, et qu'il pourrait mourir devant lui, lui, Fargue, sur le tapis de la grand-chambre, et que le baron demanderait qu'on change le tapis. Il dit que le baron vit très haut, et que, de là-haut, on ne voit pas les gouttes.",
        "Gloanec reste assis longtemps. Puis il fait une chose que Fargue n'attendait pas. Il rit. Un petit rire étranglé, d'abord, puis un vrai, qui le secoue tout entier. Il prend une de ses lettres, la regarde, et rit plus fort. Il dit qu'il a perdu sa place, ses nuits, quatre jours et sa dignité pour un homme qui ne savait pas son nom. Il dit que c'est la chose la plus drôle qu'il ait jamais entendue. Il jette la serviette dans le fourneau. Les lettres flambent, Monsieur le Baron, Monsieur le Baron, Monsieur le Baron.",
        "Il remercie Fargue. Il dit qu'il ne s'excusera plus jamais auprès de personne. Fargue apprend, avant l'appareillage, qu'un commis de la Caisse des gens de mer s'est présenté chez un armateur concurrent du baron, sans chapeau à la main, et qu'il a été engagé comme premier commis, parce qu'il regardait les gens en face. Fargue se dit qu'il a peut-être créé un monstre. Il se dit aussi que c'est la première fois qu'il dit à quelqu'un, à voix haute, ce qu'il pense des Clavières, et que ça lui a fait du bien. Il se promet de ne pas recommencer. Il n'est pas sûr de tenir.",
      ],
      choices: [{ label: "Retourner aux préparatifs", fx: { quest: "UU" }, back: "XR_jours" }] },
    UU_lettre: { act: "II", title: "La manche du baron", place: "quai_hollandes", ambiance: "ville", second: true,
      text: [
        "Fargue dit au commis qu'il remettra une lettre au baron, en mains propres, ce soir, à la table d'échecs. Une seule. La dernière. La meilleure. Il lui donne du papier, sa plume à lui, et la table de la cambuse. Gloanec écrit pendant une heure, la langue entre les dents, en raturant, en recommençant. Fargue épluche ses oignons, et l'attend.",
        "La lettre est un chef-d'œuvre d'humilité. Quatre pages. Le commis y raconte sa vie, sa mère, ses études chez les Frères, son entrée à la Caisse, sa joie de servir, l'encrier, la foule, la goutte, et sa douleur. Il y demande pardon onze fois. Il y signe : votre très humble, très obéissant et très repentant serviteur. Il la plie. Il la cachette avec un pain à cacheter qu'il sort de sa poche. Il la tend à Fargue comme on tend son cœur.",
        "Le soir, Fargue revient au quai. Le commis attend, sous la pluie. Fargue lui dit que le baron a lu la lettre. Il dit que le baron l'a lue deux fois, qu'il a souri, et qu'il a dit : « Dites à ce brave garçon que tout est oublié, et qu'il retourne à sa Caisse. » Gloanec s'effondre en larmes de soulagement, embrasse les mains de Fargue, et s'en va en courant sous l'averse, en sautant les flaques.",
        "Fargue redescend à la cambuse. Il sort la lettre de sa poche, cachetée, intacte. Il la relit quand même, à la lueur du fourneau. Il s'arrête au passage sur la mère du commis, qui lavait le linge des officiers de marine. Puis il la jette dans le feu. Il pense qu'il a menti à un homme pour le sauver d'un autre, et qu'il a fait exactement ce que fait le baron : il a décidé, d'en haut, de ce qui était bon pour un plus petit. Il pense que ça marche. Il pense que c'est pour ça qu'il déteste le baron.",
      ],
      choices: [{ label: "Retourner aux préparatifs", fx: { quest: "UU" }, back: "XR_jours" }] },
  },
  extras: {
    people: {
      gloanec: { name: "Firmin Gloanec", aka: ["le commis", "Gloanec"], qui: "Commis aux écritures de Morlenc, qui a taché d'une goutte d'encre la manche du baron Clavières." },
    },
    quests: [
      { id: "UU", act: "II", kind: "annexe", title: "La manche du baron", start: "UU_commis", doit: "mortfonctionnaire", echo: ["uu:baron", "uu:verite", "uu:lettre"] },
    ],
  },
};
