// L'Île Folle-Aiguille · side story « La demoiselle de la fenêtre » (owes its question to Hoffmann's The Sandman: should
// one wake a man from a beloved illusion, when the illusion is all that keeps him tender?). Act I, Victorine's evening
// at Varnèse: Théodore Kerguélen, a young notary's clerk, comes for drops for his eyes, which burn from staring all
// night at a window across the rue des Horloges, where the clockmaker Spézet's daughter sits sewing, never moving,
// never answering his notes. Victorine, who knows Spézet, knows he has no daughter. She goes across with Théodore, and
// sees, behind the glass, a lifesize sewing automaton. Victorine tells him (ti:dit), lets him keep his love (ti:laisse),
// or takes him into the workshop to see the mechanism with his own eyes (ti:montre). Wired in A1v_soir.
module.exports = {
  passages: {
    TI_yeux: { act: "I", title: "La demoiselle de la fenêtre", place: "varnese_maison", ambiance: "nuit",
      fx: { meet: "kerguelen" },
      text: [
        "Il frappe à dix heures, poliment, trois petits coups. Un jeune homme de vingt-deux ans, maigre, pâle, en redingote de clerc, avec des lunettes qu'il ôte et remet sans arrêt. Il s'appelle Théodore Kerguélen. Il est second clerc chez le notaire de la place du Marché, et il loge rue des Horloges. Il s'excuse de l'heure. Il dit qu'il a les yeux qui brûlent, qu'il ne dort plus, et qu'il voudrait des gouttes.",
        "Victorine examine ses yeux à la lampe. Ils sont rouges, irrités, secs, avec cette brûlure particulière des gens qui fixent longtemps un point sans cligner. Elle lui demande s'il lit beaucoup, la nuit. Il dit que non. Il rougit. Puis il dit qu'il regarde par sa fenêtre. Il dit qu'en face, de l'autre côté de la rue des Horloges, il y a une fenêtre éclairée, au premier étage, chez l'horloger Spézet. Et qu'à cette fenêtre, il y a une demoiselle qui coud.",
        "Il parle d'elle comme on parle d'un miracle. Elle coud jour et nuit, à la lueur d'une lampe, sans jamais s'arrêter, avec une régularité parfaite. Elle a des cheveux blonds, des mains blanches, un profil d'une pureté qu'il n'a jamais vue. Elle ne lève jamais les yeux. Il lui a écrit des lettres, qu'il a glissées sous la porte de l'horloger. Elle n'a jamais répondu. Il dit que c'est de la pudeur. Il dit qu'il l'aime. Il dit qu'il ne sait même pas son nom.",
      ],
      choices: [{ label: "Lui dire qu'on va aller la voir ensemble", to: "TI_vitre" }] },
    TI_vitre: { act: "I", title: "La demoiselle de la fenêtre", place: "varnese", ambiance: "nuit",
      text: [
        "Victorine connaît l'horloger Spézet. Un vieil homme veuf, génial et bourru, qui répare les montres de la moitié du canton et qui construit, la nuit, dans son atelier, des machines que personne ne voit. Elle l'a soigné d'une goutte, l'hiver dernier. Elle sait qu'il vit seul. Elle sait qu'il n'a jamais eu d'enfant. Elle met son manteau. Elle dit au clerc de la suivre.",
        "La rue des Horloges dort. Une seule fenêtre est éclairée, au premier étage de la maison de l'horloger. Derrière la vitre, une jeune fille coud. Victorine s'approche, sous la fenêtre, et regarde. La lampe éclaire un profil parfait, des cheveux d'or filé, une robe de soie bleue. Les mains montent et descendent, avec l'aiguille, dans un mouvement d'une régularité exacte. Monte. Descend. Monte. Descend. Et, si l'on écoute bien, sous le silence de la rue, on entend, très faible, un tic-tac.",
        "Victorine regarde longtemps. Les yeux ne cillent pas. La poitrine ne se soulève pas. Le fil n'avance pas dans l'étoffe : l'aiguille repasse toujours au même point. C'est une machine. Une merveille de machine, la plus belle qu'elle ait jamais vue, faite de cire, de porcelaine, de cheveux vrais et de rouages, qui coud dans le vide depuis des semaines, à la lampe, pour personne, ou pour l'horloger, qui la regarde peut-être, lui aussi, la nuit.",
        "À côté d'elle, Théodore regarde aussi. Il a remis ses lunettes. Il ne voit rien. Il voit ce qu'il aime. Il dit, très bas, qu'elle est encore plus belle de près. Il dit qu'il voudrait seulement qu'elle lève les yeux, une fois. Victorine sent son cœur se serrer. Elle a, dans sa poche, les gouttes pour les yeux. Elle sait que ce ne sont pas ses yeux qui sont malades.",
      ],
      choices: [
        { label: "Lui dire, là, sous la fenêtre, que c'est une machine", fx: { flag: "ti:dit" }, to: "TI_dit" },
        { label: "Lui donner ses gouttes, et le laisser aimer sa demoiselle", fx: { flag: "ti:laisse" }, to: "TI_laisse" },
        { label: "Frapper chez Spézet, et faire voir l'atelier au clerc", fx: { flag: "ti:montre" }, to: "TI_montre" },
      ] },
    TI_dit: { act: "I", title: "La demoiselle de la fenêtre", place: "varnese", ambiance: "nuit",
      text: [
        "Victorine pose la main sur le bras du clerc. Elle lui dit, doucement, de regarder les mains. De compter. Monte, descend. Monte, descend. De regarder le fil. De regarder les yeux, qui ne cillent pas, depuis dix minutes qu'ils sont là. D'écouter. Il écoute. Il entend le tic-tac. Elle lui dit ce que c'est. Elle lui dit que l'horloger n'a pas de fille. Elle lui dit qu'il a construit celle-ci.",
        "Théodore ne dit rien. Il ôte ses lunettes. Il les essuie, longtemps, avec son mouchoir. Il les remet. Il regarde. Elle voit son visage changer, de seconde en seconde, comme une vitre qu'on embue. Puis il se met à rire. Un rire aigu, désaccordé, qui monte dans la rue endormie, et qui fait s'ouvrir un volet. Il rit en montrant la fenêtre du doigt. Il dit qu'il lui a écrit des poèmes. Il dit qu'il lui a écrit qu'elle avait l'âme la plus pure du monde. Il rit à en tomber à genoux sur les pavés.",
        "Victorine le ramène chez lui, de l'autre côté de la rue. Elle le fait coucher. Elle lui donne de quoi dormir. Il dort. Avant de partir, elle tire elle-même le rideau de sa fenêtre, sur la fenêtre d'en face. Le lendemain matin, avant de partir, elle passe à son étude. Il est là, il copie des actes, très pâle, très calme, et il la salue poliment. Il a mis ses lettres au feu. Il dit qu'il est guéri. Il le dit d'une voix de clerc, nette et vide.",
        "Victorine sort de l'étude sans un mot. Elle se dit qu'elle a guéri un homme d'une illusion, et qu'elle l'a peut-être guéri aussi de quelque chose qu'elle n'avait pas diagnostiqué : la capacité de voir une âme là où il n'y a que des rouages. Elle repasse, en rentrant, sous la fenêtre de l'horloger. La demoiselle coud toujours. Le rideau d'en face est tiré. Elle ne sait pas si c'était une maladie.",
      ],
      choices: [{ label: "Rentrer à la maison", fx: { quest: "TI" }, back: "A1v_soir" }] },
    TI_laisse: { act: "I", title: "La demoiselle de la fenêtre", place: "varnese", ambiance: "nuit",
      text: [
        "Victorine ne dit rien. Elle lui donne le petit flacon de gouttes. Elle lui dit d'en mettre deux dans chaque œil, le soir, et de cligner plus souvent. Elle lui dit que les yeux ont besoin de se fermer de temps en temps, même devant ce qu'ils aiment. Il la remercie avec effusion. Il dit qu'il fermera les yeux. Il ne les ferme pas. Il est déjà retourné à la fenêtre, quand elle s'en va.",
        "Elle rentre chez elle. Elle se couche. Elle ne dort pas. Elle pense au jeune homme, de l'autre côté de la rue des Horloges, qui écrit des poèmes à une machine. Elle se dit qu'il y a pire, comme amour. Elle se dit qu'une femme de chair, avec une âme, aurait pu le faire souffrir mille fois plus que celle-ci, qui ne fera jamais rien d'autre que coudre. Elle se dit que c'est peut-être la seule femme au monde qui ne le trahira jamais. Elle se dit qu'elle vieillit, et qu'elle devient cynique.",
        "Le matin, elle passe voir l'horloger Spézet, pour une raison inventée. Elle lui parle, en passant, de son voisin d'en face. Le vieil homme rit, d'abord. Puis il ne rit plus. Il dit qu'il a lu les lettres. Toutes. Il dit qu'elles sont très belles. Il dit qu'il a fait la machine sur le portrait de sa femme, morte à vingt ans, et qu'il ne savait pas qu'elle pouvait encore se faire aimer. Il dit qu'il ne la retirera pas de la fenêtre. Il dit qu'il comprend le garçon mieux que personne.",
        "Victorine s'en va. Elle passe sous les deux fenêtres, celle de l'horloger, où une demoiselle de cire coud dans le vide, et celle du clerc, où un jeune homme la regarde, les yeux rougis, avec une tendresse infinie. Elle se dit qu'il y a, dans la rue des Horloges, deux hommes qui aiment la même morte, chacun sans le savoir de l'autre. Elle se dit qu'elle n'a soigné personne. Elle se dit que, parfois, la médecine consiste à fermer la porte doucement en sortant.",
      ],
      choices: [{ label: "Rentrer à la maison", fx: { quest: "TI" }, back: "A1v_soir" }] },
    TI_montre: { act: "I", title: "La demoiselle de la fenêtre", place: "varnese", ambiance: "nuit",
      text: [
        "Elle frappe à la porte de l'horloger. Longtemps. Spézet finit par ouvrir, en bonnet de nuit, une loupe encore vissée à l'œil, furieux, puis étonné de voir la médecin. Elle lui dit qu'elle a besoin de lui montrer quelque chose, ou plutôt de montrer quelque chose à ce jeune homme. Spézet regarde le clerc. Il comprend. Il connaît les lettres. Il les a toutes lues. Il hésite. Puis il s'efface, et les laisse monter.",
        "L'atelier est au premier étage, derrière la fenêtre. La demoiselle coud, de dos, devant la vitre. Tout autour, sur des établis, des rouages, des ressorts, des yeux de verre dans des boîtes, des mains de cire, des perruques sur des têtes de bois. Théodore entre. Il s'arrête. Spézet, sans un mot, va à la demoiselle, ouvre une petite porte dans son dos, sous la soie bleue, et arrête le mécanisme. Les mains s'immobilisent, l'aiguille en l'air. Le tic-tac cesse. Le silence est total.",
        "Théodore s'approche. Il fait le tour de la demoiselle. Il regarde le visage de porcelaine, les yeux de verre, les cils collés un à un. Il regarde les rouages, dans le dos, d'une finesse admirable. Il ne rit pas. Il ne pleure pas. Il demande à l'horloger, d'une voix très calme, comment elle s'appelle. Spézet dit : Clarisse. Comme sa femme. Morte à vingt ans. Il dit qu'il l'a faite de mémoire, pendant dix ans. Il dit que c'est la première fois que quelqu'un d'autre que lui la regarde vraiment.",
        "Ils restent tous les deux devant elle, l'horloger et le clerc, sans parler, un long moment. Victorine s'en va sans bruit. En descendant l'escalier, elle entend le clerc demander, d'une voix timide, comment on règle un échappement, et l'horloger lui répondre, de sa voix bourrue, qu'il faut d'abord apprendre à ne pas trembler. Elle les laisse là, tous les deux, penchés sur le dos ouvert de Clarisse, à la lampe. Victorine se dit qu'elle a montré à un homme que son amour était fait de rouages, et qu'il a choisi d'apprendre comment on fait les rouages. Elle se dit que c'est peut-être la seule guérison qui ne coûte rien à personne.",
      ],
      choices: [{ label: "Rentrer à la maison", fx: { quest: "TI" }, back: "A1v_soir" }] },
  },
  extras: {
    people: {
      kerguelen: { name: "Théodore Kerguélen", aka: ["le clerc de la rue des Horloges"], qui: "Second clerc de notaire à Varnèse, qui regarde toute la nuit une fenêtre éclairée." },
    },
    quests: [
      { id: "TI", act: "I", kind: "annexe", title: "La demoiselle de la fenêtre", start: "TI_yeux", doit: "hommesable", echo: ["ti:dit", "ti:laisse", "ti:montre"] },
    ],
  },
};
