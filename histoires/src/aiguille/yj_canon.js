// L'Île Folle-Aiguille · side story « La caronade » (owes its question to Ninety-Three: can one man be rewarded and
// punished for the same act?). In a hard blow on the way to Brisegrève, a carronade breaks its breechings on the gun
// deck and goes mad. The gunner Malandain, who lashed it badly the night before, drunk, goes down alone and stops it.
// The captain owes him a reward for the courage and a punishment for the fault; the child or the doctor is asked
// (yj:recompense, yj:puni, yj:les_deux). Wired in A3m_jours and A3v_jours.
var ENFANT = { team: "mousse" };
var MEDECIN = { team: "victorine" };
module.exports = {
  passages: {
    YJ_canon: { act: "III", title: "La caronade", place: "cormorane", ambiance: "mer",
      text: [
        "Le vent fraîchit à midi, et vers trois heures il souffle en coup de vent, avec une mer courte et dure qui prend la Cormorane par le travers et la fait rouler bord sur bord. Dans l'entrepont, où sont les six caronades de la batterie, on entend soudain un bruit qu'aucun marin ne confond avec un autre : un craquement de cordage qui casse, un grondement de roues sur le bordé, puis un choc, énorme, sourd, qui fait trembler le navire de la quille à la pomme du grand mât.",
        "Une caronade a rompu ses bragues. Deux mille livres de fonte sur un affût à roulettes, libre, dans un entrepont qui roule. Elle va d'un bord à l'autre, au gré de la houle, comme une bête aveugle et furieuse ; elle défonce les hamacs, broie les coffres, écrase une cage à poules dans une explosion de plumes, et chaque fois qu'elle frappe le bordé, on sent la coque gémir, et l'on sait qu'au troisième ou quatrième coup, elle passera au travers, et que la mer entrera.",
        { if: ENFANT, text: "Tu es en haut de l'échelle de l'entrepont. Tu vois la chose rouler dans la pénombre, noire, luisante, avec ses roues qui grincent. Tu ne descends pas. Personne ne descend." },
        { if: MEDECIN, text: "Victorine est à l'infirmerie, à dix pas de la batterie, derrière une simple cloison de planches. Elle entend chaque coup. Elle compte, comme pendant un accouchement. Elle prend ses deux blessés de la veille sous les bras et les traîne vers l'arrière." },
        "Puis quelqu'un descend. Ulric Malandain, le canonnier, une montagne de chair, en chemise, pieds nus, avec un anspect à la main et un hamac roulé sous le bras. Il ne dit rien. Il descend dans l'entrepont comme on descend dans une fosse aux chiens.",
      ],
      choices: [{ label: "Regarder", to: "YJ_combat" }] },
    YJ_combat: { act: "III", title: "La caronade", place: "cormorane", ambiance: "mer",
      text: [
        "Il la guette. Il attend le roulis, il compte, il recule quand elle vient, il avance quand elle repart. Elle le manque d'un pouce, deux fois ; la troisième, elle lui arrache la manche et une bande de peau avec. Il ne crie pas. Il attend.",
        "Au quatrième coup de roulis, quand la caronade repart vers bâbord, il jette le hamac roulé sous ses roues. Les roues s'y prennent, patinent, l'affût se cabre. Il plante l'anspect entre les rayons, pèse de tout son poids, et la bête de fonte s'arrête, de travers, frémissante, comme un taureau qu'on a pris par les cornes. On se précipite enfin, avec des cordages, des coins, des hamacs. En deux minutes, elle est saisie.",
        "Malandain s'assoit par terre, contre l'affût, le bras en sang, et respire. Tout l'entrepont le regarde. On l'applaudit. Des hommes qui le détestent l'applaudissent.",
        "Maître Gobert, lui, ne l'applaudit pas. Il est accroupi près des bragues rompues, et il les tient dans ses mains, et il les regarde. Elles ne sont pas usées. Elles ne sont pas pourries. Elles ont été mal amarrées, la veille, à la fin du quart de nuit, par un homme qui sentait le rhum, et tout le monde sait de quel homme il s'agit, parce que c'est lui qui a la charge des caronades, et que c'est lui qui, la veille, a été le dernier à les toucher.",
      ],
      choices: [{ label: "Suivre Gobert chez la capitaine", to: "YJ_capitaine" }] },
    YJ_capitaine: { act: "III", title: "Le jugement", place: "cormorane", ambiance: "mer",
      text: [
        "La capitaine Ribaud écoute Gobert. Elle regarde les bragues. Puis elle fait monter tout l'équipage sur le pont, sous le vent qui faiblit, et Malandain au pied du grand mât, le bras bandé.",
        "« Malandain, dit-elle. Tu as sauvé ce navire, cet après-midi. Seul. Personne d'autre n'est descendu. » Elle se tourne vers l'équipage. « Et c'est toi qui avais amarré cette caronade, hier, ivre. Sans toi, elle ne se serait pas détachée. Sans toi, elle ne se serait pas arrêtée. »",
        "Le pont se tait. Malandain la regarde, sans rien dire, avec ses petits yeux de taureau.",
        { if: ENFANT, text: "La capitaine te cherche du regard, parmi les mousses. Tu es le seul témoin, avec Gobert, à avoir tout vu depuis l'échelle. « Qu'est-ce qu'on fait d'un homme pareil, mousse ? Toi qui as vu. »" },
        { if: MEDECIN, text: "La capitaine se tourne vers Victorine, qui a pansé le bras. « Qu'est-ce qu'on fait d'un homme pareil, docteur ? Vous qui l'avez recousu. »" },
      ],
      choices: [
        { label: "« On le récompense. Il est descendu quand personne ne descendait. »", fx: { flag: "yj:recompense", penche: { malandain: 1 } }, to: "YJ_recompense" },
        { label: "« On le punit. Sans le rhum, personne n'aurait eu à descendre. »", fx: { flag: "yj:puni", penche: { malandain: -1 } }, to: "YJ_puni" },
        { label: "« Les deux. Devant tout le monde. »", fx: { flag: "yj:les_deux" }, to: "YJ_deux" },
      ] },
    YJ_recompense: { act: "III", title: "Le jugement", place: "cormorane", ambiance: "mer",
      text: [
        "La capitaine hoche la tête, lentement. Elle fait apporter une bouteille de son propre rhum, du vieux, de la Martinière, et la donne à Malandain devant tout le monde, avec une piastre d'argent.",
        "« Pour le courage. Le reste, je l'oublie. » Elle regarde la bouteille dans la main du canonnier. « Tu la boiras à terre. »",
        "Malandain prend la bouteille et la piastre. Il ne dit pas merci. Il les regarde, longtemps, comme s'il cherchait ce qu'on attendait de lui en échange. Le soir, à la cambuse, on entend qu'il raconte l'histoire, et qu'il la raconte bien, et qu'on l'écoute. Il n'y parle pas des bragues. Personne ne lui en parle.",
        "Gobert, sur le gaillard d'avant, crache par-dessus bord. « On récompense un homme pour avoir éteint le feu qu'il a allumé, dit-il à personne. C'est nouveau. Ça fera des émules. »",
      ],
      choices: [{ label: "Retourner au travail", fx: { quest: "YJ" }, back: true }] },
    YJ_puni: { act: "III", title: "Le jugement", place: "cormorane", ambiance: "mer",
      text: [
        "La capitaine hoche la tête. Elle fait mettre Malandain aux fers pour trois jours, à fond de cale, au pain et à l'eau, le bras bandé, pour ivresse de service et négligence des amarrages.",
        "Il descend sans résister, entre deux matelots qui n'osent pas le toucher.",
        { if: ENFANT, text: "En passant, il te regarde. Il a un regard qui ne se pose sur rien et se souvient de tout." },
        { if: MEDECIN, text: "En passant, il regarde Victorine, et le bandage qu'elle lui a fait. Il a un regard qui ne se pose sur rien et se souvient de tout." },
        "L'équipage murmure. On a mis aux fers l'homme qui a sauvé le navire. Ceux qui le détestaient le plaignent. Le soir, à la cambuse, le maître-coq leur sert la soupe sans un mot, et tend l'oreille.",
      ],
      choices: [{ label: "Retourner au travail", fx: { quest: "YJ" }, back: true }] },
    YJ_deux: { act: "III", title: "Le jugement", place: "cormorane", ambiance: "mer",
      text: [
        "La capitaine reste un long moment immobile. Puis elle fait apporter la bouteille de vieux rhum de la Martinière, et une piastre. Elle les donne à Malandain, devant tout l'équipage, pour le courage, en lui serrant la main. Et elle le fait mettre aux fers, dans la minute qui suit, devant le même équipage, pour les bragues, trois jours, la bouteille posée sur le pont à côté de lui, hors de portée, jusqu'à sa sortie.",
        "C'est juste, et c'est terrible. Tout le monde le sent, même ceux qui ne sauraient pas dire pourquoi. Malandain descend à fond de cale en regardant la bouteille par-dessus son épaule, et pour la première fois depuis Morlenc, il a l'air d'un homme qui ne comprend pas.",
        "Trois jours plus tard, il remonte, reprend sa bouteille, et la jette à la mer, sans l'ouvrir. Il garde la piastre.",
      ],
      choices: [{ label: "Retourner au travail", fx: { quest: "YJ" }, back: true }] },
  },
  extras: {
    quests: [
      { id: "YJ", act: "III", kind: "annexe", title: "La caronade", start: "YJ_canon", doit: "quatrevingttreize", echo: ["yj:recompense", "yj:puni", "yj:les_deux"] },
    ],
  },
};
