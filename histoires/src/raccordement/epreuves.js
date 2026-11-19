// Le Grand Raccordement · the ten trials, played by the three players together (third person). Each trial passage
// carries `epreuve`: the engine adds the Enjambeur's table, the laying of the cards and the turning over. Each issue
// passage carries `issue` (a pair laid by both players, a single card, or nothing: the default issue). Every issue
// goes on; a pair also sets paire:<trial>, counted by the feat « À deux mains ».
function T(id, act, title, place, text, more) { return Object.assign({ act: act, title: title, place: place, hub: true, noLead: true, epreuve: id, text: text }, more || {}); }
function I(epreuve, key, act, title, place, fx, text, choices) {
  var p = { act: act, title: title, place: place, issue: { epreuve: epreuve }, text: text, choices: choices };
  if (key && Array.isArray(key)) p.issue.paire = key; else if (key) p.issue.carte = key;
  if (fx) p.fx = fx;
  return p;
}
function laid(e, hero, carte) { return { pose: e, hero: hero, carte: carte }; }
function any(e, carte) { return { pose: e, carte: carte }; }
var TALKIE = "Avant qu'elle reparte, Basile sort de sa poche le second talkie-walkie du poste de garde, avec son petit ange doré sur le côté, et le lui tend. « Canal 4, dit-il. Pour… pour les livraisons. » Il rougit jusqu'aux oreilles. Salée prend le talkie, le regarde, l'accroche à sa ceinture. « Canal 4 », dit-elle.";
module.exports = {
  // ================================================================ I · the service door
  E1: T("porte", "I", "La porte de service", "service", [
    "Sept heures. La cour des cuisines du Domaine sent le linge humide et le pain d'hier. Au fond, la porte de service, en fer peint en vert, se tient fermée comme une bouche qui sait un secret.",
    "Dehors, Salée attend sur la Baratte, le side-car plein de mottes qui commencent, déjà, à suer dans la chaleur du matin. Dedans, Basile a la main posée sur le battant. Entre eux, un centimètre de fer, la vieille serrure du chef, et le Verrou Lumière™ du Consortium, lisse, blanc, avec sa cellule noire qui attend le soleil.",
    "Ils frappent chacun de leur côté, en même temps. Puis ils attendent, chacun de son côté, que l'autre trouve une idée.",
    { if: { clue: "c_verrou" }, text: "Sur la cellule, gravé en lettres minuscules : *S'ouvre à la lumière directe. Aucune clé n'est nécessaire.* En dessous, plus petit encore : *Service compris dans l'Abonnement Lumière™.*" },
  ]),
  I1_ensemble: I("porte", ["trousseau", "miroir"], "I", "À deux mains", "service", { flag: "paire:porte", set: { porte: "ensemble" } }, [
    { if: laid("porte", "basile", "trousseau"), text: "Basile a trouvé dans le tiroir du poste le trousseau du chef, quarante et une clés sur un anneau de fer. Il les essaie une à une, en récitant le règlement à voix basse, et la dix-septième, article 17, porte verte, tourne dans la vieille serrure avec un grognement de vieux chien." },
    { if: laid("porte", "salee", "trousseau"), text: "Le trousseau du chef, on ne sait comment, a glissé jusqu'au pied de la porte, côté cour, par la chatière. Salée le ramasse, choisit une clé au jugé, la dix-septième, et la vieille serrure tourne avec un grognement de vieux chien." },
    { if: laid("porte", "salee", "miroir"), text: "Salée dévisse le rétroviseur de la Baratte, attrape le soleil levant dedans, et l'envoie, un petit disque blanc qui tremble, sur la cellule noire du Verrou Lumière." },
    { if: laid("porte", "basile", "miroir"), text: "Basile a trouvé, posé sur l'appui de la lucarne de la cour, un rétroviseur rond. Il y attrape le soleil levant et l'envoie, un petit disque blanc qui tremble, sur la cellule noire du Verrou Lumière, à travers la fente de la porte." },
    "Le Verrou Lumière émet une petite note, aimable, satisfaite, et la porte verte s'ouvre en grand, si vite que Basile manque tomber dans la cour et que Salée manque tomber dans la cuisine. Ils se retrouvent nez à nez, à vingt centimètres, une clé dans une main, un rétroviseur dans l'autre.",
    "« Bonjour, dit Basile. Article 31 : le garde reçoit les livraisons.",
    "— Bonjour, dit Salée. Quarante mottes. Signe là. »",
    { if: { signe: "klaxon" }, text: "Au moment où elle coupe le contact, le klaxon de la Baratte se met à sonner tout seul, une note claire, longue, qui ne ressemble pas du tout à un klaxon, et beaucoup à une trompette. Salée regarde la première motte du side-car. Le petit ange doré a l'air très content de lui." },
    TALKIE,
  ], [{ label: "Monter les mottes à la Salle froide", to: "E2" }]),
  I1_cave: I("porte", "cle_cave", "I", "La trappe à beurre", "service", { set: { porte: "cave" } }, [
    "Sous la cour, contre le mur, il y a une trappe de bois que tout le monde a oubliée, sauf les livreurs de beurre : la trappe aux mottes, qui descend en pente douce jusqu'aux caves du Domaine. Elle ferme avec une petite clé de cuivre qui sent le beurre, et la petite clé est là.",
    "La trappe s'ouvre. Salée y fait glisser les mottes une à une, puis, parce que la pente est raide et le cuivre glissant, elle y glisse elle-même, cape comprise. Elle arrive en bas, dans la cave fraîche, assise sur quarante mottes de beurre, luisante de la tête aux bottes.",
    "Basile, qui est descendu par l'escalier intérieur en courant, la trouve là, à la lueur de sa lampe de poche. Elle a du beurre dans les cheveux, sur les joues, dans les cils. Elle brille doucement, d'un éclat mat et doré, sans renvoyer la lumière.",
    "« Bonjour, dit Basile. Article 31 : le garde reçoit les livraisons.",
    "— Tu reçois aussi la livreuse, dit Salée. Elle est livrée. »",
    { if: { signe: "klaxon" }, text: "Dehors, dans la cour, le klaxon de la Baratte se met à sonner tout seul, une note claire et longue, qui ressemble beaucoup à une trompette. Personne n'est assis sur la moto." },
    TALKIE,
  ], [{ label: "Monter les mottes à la Salle froide", to: "E2" }]),
  I1_gourdon: I("porte", null, "I", "Le chef et la porte", "service", { set: { porte: "gourdon" } }, [
    "Rien ne s'ouvre. Basile essaie le badge, le sifflet, et la patience. Salée essaie l'épaule, le pied, et un vocabulaire de motarde qui n'a jamais servi devant un garde en uniforme. La porte verte reste fermée, et le Verrou Lumière, imperturbable, attend un soleil qui n'arrive pas encore jusque dans le coin de la cour.",
    "C'est le chef Gourdon qui règle la question, à sept heures vingt, au pas de charge. Il siffle trois coups, donne dans la porte un coup de pied réglementaire, se fait mal, et compose sur son téléphone le numéro gravé sous le verrou. Il écoute pendant dix-neuf minutes une musique d'attente qui ressemble à un lever de soleil joué au synthétiseur. À la vingtième, la porte s'ouvre toute seule, avec une petite note aimable, et une voix de femme dit, depuis le boîtier : *Accès accordé à titre gracieux. Votre premier mois d'Abonnement Lumière™ est offert.*",
    "« Stagiaire, dit le chef. Vous aviez vingt minutes. Vous avez une observation. » Il note l'observation. Il note aussi l'heure de livraison, sept heures quarante, et le beurre, qui a ramolli dans la cour.",
    { if: { signe: "klaxon" }, text: "Pendant que le chef écrit, le klaxon de la Baratte sonne une fois, tout seul, une note longue de trompette. Le chef se retourne d'un bloc. Il n'y a personne sur la moto. Il note : *klaxon*. Puis il le raye, parce que le règlement ne prévoit rien pour les klaxons qui sonnent seuls." },
    TALKIE,
  ], [{ label: "Monter les mottes à la Salle froide", to: "E2" }]),

  // ================================================================ II · the technical visit
  E2: T("visite", "I", "La visite technique", "salle", [
    "Neuf heures. Dans la Salle froide, les nuages des souffles montent en même temps vers le plafond, parce que tout le monde respire en même temps.",
    "Gaspard Zénith, président du Consortium des Panneaux Réunis, se tient au milieu de la Salle comme un phare au milieu d'un port : énorme, bronzé, en costume blanc, des lunettes miroir sur le nez dans une cave à quatre degrés. Il a, au revers, un petit soleil carré en or. Derrière lui, les deux techniciens à visière miroir, Phébus et Lumen, déballent un appareil à poignée, à écran et à pistolet : un réflectomètre.",
    "En face, Monsieur Hippolyte Croûte-Chrome IV, en robe de chambre, pleure doucement dans un mouchoir de batiste, le chiot Monseigneur dans les bras. À côté de lui, une jeune femme en tailleur gris, un stylo à plume derrière l'oreille, prend des notes : Mademoiselle Vernis, des Mentions légales. Derrière eux, Octave, immobile.",
    "Basile se tient à un mètre cinquante du socle, au garde-à-vous. Salée est entrée avec le diable chargé de mottes pour les cloches de la Salle, et personne n'a pensé à la faire sortir.",
    "« Messieurs, dit Zénith en écartant les bras, voici peut-être le centre du monde. » Il fait un signe. Phébus lève le réflectomètre vers le Héraut d'inox.",
  ], { fx: { meet: ["zenith", "hippolyte", "vernis", "octave", "monseigneur"] } }),
  I2_housse: I("visite", "housse", "I", "Sous un drap", "salle", { set: { mesure: "non" }, flag: "heraut:miroir" }, [
    "Au moment où Phébus appuie sur la détente, un grand drap gris tombe sur le Héraut d'inox, d'un seul mouvement, comme sur un meuble dans une maison qu'on ferme pour l'été. Le réflectomètre bipe. L'écran affiche : *0,4 %*.",
    "Il y a un silence. Zénith ôte ses lunettes miroir. Ses yeux, dessous, sont petits, bleus et très fatigués.",
    "« Qui a mis ce drap ? »",
    "Mademoiselle Vernis lève son stylo. « Article 12 du règlement des collections : les œuvres sont couvertes pendant le nettoyage de la Salle. Le nettoyage de la Salle a lieu le mardi à neuf heures. » Elle regarde sa montre. « Nous sommes mardi. Il est neuf heures. »",
    "Zénith remet ses lunettes. Il ne crie pas. Il sourit, d'un sourire de président, qui ne monte pas jusqu'aux yeux et n'en a pas besoin.",
    "« Le mardi, dit-il. Très bien. Nous reviendrons un jour où l'on ne nettoie pas. » Il fait demi-tour, et les deux techniciens le suivent, et la porte capitonnée se referme sur eux avec un soupir de cuir.",
    { if: { signe: "reflet" }, text: "Avant que le drap tombe, une demi-seconde, Zénith a vu quelque chose dans le ventre poli de l'ange : pas son propre reflet, mais un petit visage joufflu, doré, qui le regardait en soufflant dans une trompette. Il ne l'a dit à personne. En remontant dans sa voiture, il a demandé à son chauffeur, d'une voix étrange, s'il croyait aux anges. Le chauffeur a dit que cela dépendait du salaire." },
  ], [{ label: "Laisser passer la fin de la matinée", to: "C2" }]),
  I2_registre: I("visite", ["registre", "tampon"], "I", "En restauration", "salle", { set: { mesure: "non" }, flag: ["paire:visite", "vernis:allie", "heraut:miroir"], clue: "c_registre" }, [
    "Au moment où Phébus lève son appareil, le registre des collections se trouve ouvert sur le pupitre de la galerie, à la première page, à la ligne du Héraut d'inox. Et sur la ligne, tout frais, d'une encre violette qui sèche encore, un coup de tampon : *EN RESTAURATION*.",
    "Mademoiselle Vernis le voit. Elle s'approche du pupitre en trois pas rapides, ajuste ses lunettes, lit, et se retourne avec le visage d'une juriste qui vient de trouver, au bas d'un contrat, exactement la ligne qu'elle cherchait.",
    "« Monsieur Zénith. Règlement des collections, article 4. Une œuvre en restauration ne peut être ni prêtée, ni louée, ni réquisitionnée, ni exposée, ni mesurée. » Elle tapote la page avec son stylo. « Ni mesurée. »",
    "Zénith regarde le registre. Il regarde Mademoiselle Vernis. Il regarde, très longuement, Basile, au garde-à-vous, puis Salée, appuyée sur son diable de mottes, les mains violettes d'encre jusqu'aux poignets.",
    "« Depuis quand est-il en restauration ? »",
    "— Depuis neuf heures moins deux, dit Mademoiselle Vernis, sans ciller. C'est écrit. Ce qui est écrit au registre fait foi. »",
    "Il y a un silence de cave. Puis Zénith fait un geste, et Phébus baisse le réflectomètre. Le président s'en va sans un mot. En passant devant Salée, il s'arrête, regarde ses mains violettes, et dit, très doucement : « Joli travail. » Ce n'est pas un compliment.",
    { if: { signe: "reflet" }, text: "Avant de sortir, Zénith jette un dernier regard au Héraut. Dans le ventre poli de l'ange, au lieu de son propre reflet, il voit une demi-seconde un petit visage joufflu, doré, qui le regarde en soufflant dans une trompette. Il ne dit rien. Il manque la marche du seuil." },
    "Quand la porte s'est refermée, Mademoiselle Vernis referme le registre, regarde les deux jeunes gens, et dit : « Je n'ai rien vu. J'ai lu. » Elle s'en va. Octave, derrière elle, emporte le registre sous son bras, comme une pièce à conviction.",
  ], [{ label: "Laisser passer la fin de la matinée", to: "C2" }]),
  I2_chiot: I("visite", "chiot", "I", "Monseigneur", "salle", { set: { mesure: "non" }, flag: ["chiot:mord", "heraut:miroir"] }, [
    "Au moment où Phébus appuie sur la détente, Monseigneur saute des bras de son maître. Il n'a jamais rien fait de sa vie, à part dormir et grandir des pattes, et il choisit cet instant pour commencer. Il traverse la Salle froide en trois bonds désarticulés, et il plante ses dents de lait dans le câble du réflectomètre.",
    "Le câble cède. L'écran s'éteint. Phébus regarde son appareil mort, puis le chiot, qui le regarde aussi, le câble dans la gueule, sans aboyer. Il n'aboie jamais. On dit que c'est de race.",
    "« Monseigneur ! » s'écrie Monsieur Hippolyte, et il fond en larmes, de fierté.",
    "Zénith ne dit rien pendant un long moment. Puis il dit : « Nous avons d'autres câbles. » Mais Lumen, avec un temps de retard, vient de découvrir que les autres câbles sont restés dans la camionnette, à trois cents mètres, et que la camionnette est fermée par un Verrou Lumière qui ne s'ouvre qu'au soleil, et que la camionnette est garée à l'ombre.",
    "Le président s'en va. Il s'en va lentement, en homme qui a l'habitude de revenir.",
    { if: { signe: "reflet" }, text: "En sortant, il jette un regard au Héraut, et dans le ventre poli de l'ange il voit une demi-seconde, au lieu de son reflet, un petit visage doré qui souffle dans une trompette. Il se frotte les yeux. Il dit à Phébus qu'il fait trop froid dans cette cave, que le froid donne des visions. Phébus note : *froid, visions*." },
  ], [{ label: "Laisser passer la fin de la matinée", to: "C2" }]),
  I2_mesure: I("visite", null, "I", "Quatre-vingt-dix-neuf virgule quatre-vingt-dix-sept", "salle", { set: { mesure: "oui" }, flag: "heraut:miroir", clue: "c_mesure" }, [
    { if: any("visite", ["plumeau", "cire"]), text: "Quelqu'un, dans l'émotion, a passé un dernier coup de plumeau, ou de cire, sur le Héraut d'inox. On ne saura jamais qui. L'ange n'a jamais autant brillé. Il éclaire la Salle à lui seul, comme une lampe dont on aurait oublié l'interrupteur." },
    "Phébus appuie sur la détente. Le réflectomètre bipe. Il bipe longtemps. Puis l'écran affiche un chiffre, et Phébus le lit à voix basse, puis le relit, comme on relit un billet gagnant.",
    "« Quatre-vingt-dix-neuf virgule quatre-vingt-dix-sept.",
    "— Quatre-vingt-dix-neuf virgule quatre-vingt-dix-sept », répète Lumen, avec un temps de retard.",
    "Zénith ôte ses lunettes. Il regarde l'ange longuement, comme un homme regarde la femme qu'il va épouser, ou la maison qu'il va saisir. « Messieurs, dit-il, nous avons notre centre. »",
    "Monsieur Hippolyte s'avance en tremblant. « Il n'est pas à vendre. Il n'est pas à louer. C'est mon arrière-grand-mère qui l'a fait.",
    "— On ne vous demande ni de vendre ni de louer, dit Zénith, avec une grande douceur. Le Raccordement s'occupe de tout. » Il fait un signe. Lumen colle sur le socle une étiquette autocollante. *Réservé · Consortium des Panneaux Réunis · Ne pas déplacer.*",
    "Monsieur Hippolyte pleure. Mademoiselle Vernis note. Octave regarde l'étiquette comme on regarde une tache sur une nappe. Basile ne bouge pas, au garde-à-vous, à un mètre cinquante. Salée, appuyée sur son diable, a les jointures blanches.",
    { if: { signe: "reflet" }, text: "En partant, Zénith jette un dernier regard au Héraut. Dans son ventre d'acier poli, à la place de son reflet, il voit une demi-seconde un petit visage doré qui souffle dans une trompette, et qui le regarde sans aucune bienveillance. Il ne dit rien. Il s'en souviendra." },
  ], [{ label: "Laisser passer la fin de la matinée", to: "C2" }]),

  // ================================================================ III · the plaquette
  E3: T("plaquette", "I", "La plaquette", "route", [
    "Onze heures et demie. Les talkies-walkies grésillent. Basile est au Domaine, dans la galerie des collections, devant le pupitre du registre. Salée est à Mirevaux, dans la crèmerie, assise sur un tabouret derrière le comptoir. Ils ont chacun, devant eux, la même plaquette sur papier glacé, avec le même soleil carré sur la couverture.",
    "« *Le soleil appartient à tout le monde*, lit Basile, au canal 4. *Désormais, il appartient à quelqu'un.*",
    "— Je l'ai, dit Salée. *L'ombre est un manque à gagner.* Qu'est-ce que ça veut dire ?",
    "— Je ne sais pas. »",
    "Ils lisent. Il y a beaucoup de photographies de gens heureux sous un soleil très jaune, beaucoup de pourcentages, et un enfant qui tient une ampoule allumée comme on tient un cornet de glace. La plaquette dit beaucoup de choses. Elle ne dit pas ce qui arrivera à midi. Ou alors elle le dit en tout petit.",
  ]),
  I3_loupe: I("plaquette", "loupe", "I", "En tout petit", "route", { set: { comprend: "loupe" }, flag: "midi:compris", clue: "c_plaquette" }, [
    "La loupe de Mademoiselle Vernis, à manche d'ivoire, a été oubliée sur le pupitre du registre, ou bien elle traîne depuis toujours sur le comptoir de la crèmerie, entre la balance et le pot de sel ; personne ne saura jamais comment elle est arrivée là. Elle sert à lire les lignes écrites en petit. Les plus importantes.",
    "Page 4, sous la photographie d'une famille qui pique-nique au soleil, une ligne court, si fine qu'on la prendrait pour un trait décoratif. Sous la loupe, elle devient une phrase.",
    "« *Douze heures précises*, lit la voix, au canal 4, lentement. *Grande Bascule. Orientation simultanée de l'ensemble du parc vers la source.* »",
    "Silence sur le canal 4. Puis l'autre voix, plus basse : « Vers la source, c'est vers le soleil.",
    "— Tous les panneaux. En même temps. Vers le soleil.",
    "— Et la lumière qu'ils renvoient, elle va où ? »",
    "Personne ne répond. Ils regardent tous les deux, chacun de son côté, par la fenêtre, le ciel blanc, et les panneaux sur les toits, qui frémissent sur leurs pieds de métal comme des chiens qui entendent quelque chose.",
    { if: { signe: "page" }, text: "Sur le pupitre, la plaquette tourne d'elle-même une page, sans un souffle d'air, et s'ouvre sur une carte du pays. Au milieu, collé sur le papier gras d'un sandwich oublié, un petit ange doré a l'air de montrer quelque chose du bout de sa trompette : deux points, où toutes les lignes se rejoignent. Mirevaux. Le Domaine." },
  ], [{ label: "Regarder l'heure : midi moins le quart", to: "C3" }]),
  I3_reseau: I("plaquette", ["calendrier", "carte_reseau"], "I", "La case rouge et les lignes bleues", "route", { set: { comprend: "oui" }, flag: ["paire:plaquette", "midi:compris"], clue: ["c_plaquette", "c_carte"] }, [
    "Ce qui fait comprendre, ce n'est pas la plaquette. Ce sont deux objets qui n'ont rien à voir avec elle.",
    "Le premier est le calendrier des livraisons de la crèmerie, où un homme du Consortium a entouré de rouge, ce matin, la case de midi, en écrivant dedans *Raccordement*. Le second est une carte du réseau, dépliée, avec chaque champ de panneaux en petit carré bleu et chaque ligne en veine fine, oubliée par un technicien sur un pupitre, ou tombée d'une camionnette sur le bord de la route.",
    "« Midi, dit une voix au canal 4. Ils ont entouré midi. Chez ma mère. Chez tout le monde, sûrement.",
    "— Et les lignes, dit l'autre voix. Toutes les lignes vont au même endroit. Deux endroits. Mirevaux. Et ici. »",
    "Ils se taisent. Ils ont compris en même temps, chacun avec la moitié de la chose, et il leur a fallu la moitié de l'autre. À midi, tous les panneaux du pays se tourneront vers le soleil, ensemble, et renverront sa lumière sur les deux points où il y a le plus de gens, et le plus de beurre.",
    "« Basile, dit Salée. C'est dans vingt minutes.",
    "— Je sais. Article 1 : le garde garde. » Un silence. « Je ne sais pas comment on garde contre le soleil. »",
    { if: { signe: "page" }, text: "Sur le pupitre, la plaquette tourne d'elle-même une page, sans un souffle d'air, et s'ouvre sur la ligne en petit de la page 4, juste sous un petit ange doré imprimé sur un papier de sandwich : *Grande Bascule : orientation simultanée de l'ensemble du parc vers la source.* Cette fois, personne n'a besoin de loupe." },
  ], [{ label: "Regarder l'heure : midi moins le quart", to: "C3" }]),
  I3_rate: I("plaquette", null, "I", "Un prospectus", "route", { set: { comprend: "non" } }, [
    "Ils lisent la plaquette jusqu'au bout, deux fois, au canal 4. Elle parle d'avenir, de justice, de juste prix, d'énergie partagée, de la fin du gaspillage. Elle a de très belles photographies. Elle ne dit rien qu'on puisse comprendre avant d'avoir compris.",
    "« C'est de la publicité, dit Salée.",
    "— C'est de la publicité », dit Basile, soulagé, parce que le règlement a un article sur la publicité, l'article 40, qui dit qu'on la jette.",
    "À Mirevaux, Salée emballe dans la plaquette une motte de demi-livre pour une cliente pressée. Au Domaine, Basile la range dans le tiroir du poste, sous le sandwich. Il est midi moins vingt.",
  ], [{ label: "Regarder l'heure : midi moins le quart", to: "C3" }]),

  // ================================================================ IV · noon
  E4: T("midi", "II", "Midi pile", "orangerie", [
    "Au deuxième coup de midi, tous les panneaux du pays tournent la tête.",
    "Le bruit vient de partout à la fois : un grincement immense, doux, mécanique, comme si la terre entière dépliait ses articulations. Dans les champs, sur les toits, au bord des routes, des millions de visages de verre se redressent ensemble, pivotent, et regardent le soleil en face. Puis, d'un seul mouvement, ils lui renvoient sa lumière.",
    "Le ciel devient blanc. Pas clair : blanc, comme l'intérieur d'un four. Les ombres disparaissent d'un coup, partout, ce qui est très exactement le but.",
    "À l'orangerie du Domaine, sous cent mètres de voûte de verre, la lumière tombe comme une eau bouillante. Les feuilles des orangers se recroquevillent. Monsieur Hippolyte lâche son mouchoir. Octave fait un pas vers son maître. Le chiot Monseigneur, debout sur ses pattes trop longues, regarde la voûte.",
    "À Mirevaux, dans la crèmerie Salée, les vitrines se mettent à chanter, d'un chant aigu de verre qui chauffe. Sous leurs cloches, les mottes s'affaissent d'un coup, toutes ensemble, comme des gens qui s'évanouissent dans une église.",
    "« Basile ! » crie le talkie.",
    "« Salée ! » crie l'autre.",
  ]),
  I4_ombre: I("midi", "parasol", "II", "Trois mètres d'ombre", "orangerie", { set: { midi: "ombre" }, flag: ["chiot:aboie", "midi:compris"] }, [
    "Le grand parasol de la terrasse, à manivelle, était appuyé contre un bac d'oranger, replié, oublié depuis l'été dernier. Il s'ouvre d'un coup, trois mètres de toile écrue, et fait au milieu de l'enfer une ombre ronde, nette, la seule ombre du pays.",
    "Dedans, il y a Monsieur Hippolyte, Octave, le chiot, et Basile qui tient le manche à deux mains. Autour, l'orangerie brûle. Les orangers s'enflamment un à un, comme des torches, en sentant le savon. La voûte de verre craque, puis éclate, panneau après panneau, en pluie de diamants chauds.",
    "Alors le chiot Monseigneur, qui n'a jamais aboyé, aboie. Une fois. Très fort. Un aboiement de grand chien dans un corps de petit, qui fait sursauter tout le monde sous le parasol.",
    "Ils sortent par l'allée centrale, à petits pas, serrés sous la toile comme une procession sous un dais. Monsieur Hippolyte pleure. Octave tient le chiot. Derrière eux, l'orangerie s'effondre dans un fracas de verre, et il ne reste debout que la charpente de fer, noire, qui fume.",
    { if: laid("midi", "salee", "parasol"), text: "À Mirevaux, Salée a déroulé le store de la crèmerie et calé dessous le grand parasol du marché, ouvert. Il fait sous la toile une ombre ronde où s'entassent, en trois secondes, sa mère, deux clientes, un chien et le jeune Gaston, qui se signe. Dans la rue, le beurre coule." },
    { if: { not: laid("midi", "salee", "parasol") }, text: "À Mirevaux, Salée a baissé le store de la crèmerie et poussé sa mère dessous. Il ne fait pas d'ombre : il en fait l'idée, et c'est déjà quelque chose. Dans la rue, le beurre coule." },
  ], [{ label: "Courir", to: "E5" }]),
  I4_nappe: I("midi", ["seau", "nappe"], "II", "La nappe mouillée", "orangerie", { set: { midi: "nappe" }, flag: ["paire:midi", "chiot:aboie", "midi:compris"] }, [
    "« Une nappe, dit la voix de Salée au talkie, très vite. Mouillée. Sur la tête. Ma mère fait ça quand le four de la boulangerie d'à côté prend feu. »",
    "Il y a, sur la table du déjeuner de Monsieur, dressée sous les orangers, une nappe de lin blanc brodée aux initiales de la Maison. Il y a, au pied du premier oranger, le seau d'eau du jardinier. La nappe tombe dans le seau, ressort lourde comme un homme, et Basile la jette sur Monsieur Hippolyte, Octave, le chiot et lui-même, d'un seul geste, comme on jette un filet.",
    "Ils traversent l'orangerie sous la nappe, à quatre, courbés, aveugles, au jugé, en suivant la voix du talkie qui compte les pas. Autour d'eux, les orangers prennent feu et la voûte de verre éclate. La nappe fume. Elle tient.",
    "Sous la nappe, le chiot Monseigneur, qui n'a jamais aboyé, aboie. Une fois. Très fort, sous le lin, comme un coup de canon dans un placard.",
    "Ils sortent dans l'allée. Derrière eux, l'orangerie s'effondre, et il ne reste debout que la charpente de fer, noire, qui fume. La nappe, sur leurs épaules, est roussie à l'endroit des initiales. Monsieur Hippolyte la regarde et pleure : c'était celle de sa grand-mère.",
    "À Mirevaux, au même moment, Salée vide le seau de rinçage de la crèmerie sur le carrelage, mouille le grand torchon à fromage, le jette sur sa mère et l'entraîne vers la cave. Dans la rue, le beurre coule.",
  ], [{ label: "Courir", to: "E5" }]),
  I4_ange: I("midi", "rayon", "II", "Le Rayon doré", "orangerie", { set: { midi: "ange" }, flag: ["ange:rayon", "chiot:aboie", "midi:compris"] }, [
    "Au-dessus de la porte de l'orangerie, il y a un vitrail. Il y est depuis cent ans, et personne ne le regarde plus : un petit ange doré qui souffle dans une trompette, un pied levé.",
    "À midi une, le vitrail s'allume. Ce n'est pas la lumière du soleil qui le traverse. C'est autre chose, qui en sort. Un rayon d'or épais, lent, coule du vitrail jusqu'au milieu de l'allée et se pose sur le sol, et là où il se pose, il fait de l'ombre. Une ombre fraîche, nette, en forme d'ange à trompette, grande comme une maison, qui couvre Monsieur Hippolyte, Octave, le chiot et Basile.",
    "Dans l'ombre de l'ange, il fait quatre degrés. Les nuages des souffles montent vers la voûte.",
    "Alors le chiot Monseigneur, qui n'a jamais aboyé, lève le museau vers le vitrail et aboie. Une fois. Très fort.",
    "Ils sortent par l'allée centrale, dans l'ombre qui les suit, à petits pas. Derrière eux, l'orangerie brûle et s'effondre. Il ne reste que la charpente de fer, noire, qui fume. Monsieur Hippolyte ne pleure pas, pour une fois. Il regarde le vitrail, et il dit tout bas : « Bonjour, toi. »",
    "À Mirevaux, au même instant, l'enseigne dorée de l'Entrepôt s'allume d'un éclat qui n'est pas celui du soleil, et fait tomber sur le Carrefour une ombre d'ange où se jettent trente personnes. Le jeune Gaston est parmi elles. Il regarde l'enseigne. Il se signe. Puis il ne fait plus rien d'autre que regarder.",
  ], [{ label: "Courir", to: "E5" }]),
  I4_brule: I("midi", null, "II", "L'orangerie", "orangerie", { set: { midi: "brule" }, flag: ["chiot:aboie", "midi:compris"] }, [
    "Rien ne fait d'ombre. Rien ne la fait assez vite.",
    "La voûte de verre de l'orangerie devient une loupe de cent mètres. Les orangers s'enflamment un à un, comme des torches, en sentant le savon de luxe. La fumée monte, blanche, puis noire. Monsieur Hippolyte est resté dans son fauteuil d'osier, figé, la bouche ouverte, comme un homme qui assiste à la représentation et attend l'entracte.",
    "Basile l'arrache du fauteuil. Il le jette sur son épaule, robe de chambre comprise, comme on porte un sac de farine, et il court. Octave court derrière, le chiot dans les bras. La voûte éclate au-dessus d'eux, panneau après panneau, en pluie de verre brûlant. La manche de Basile prend feu ; il l'éteint contre son flanc sans s'arrêter.",
    "Dans les bras d'Octave, le chiot Monseigneur, qui n'a jamais aboyé, aboie. Une fois. Très fort. Un aboiement de grand chien, qui fait se retourner Octave pour la première fois de sa carrière.",
    "Ils tombent tous les quatre sur le gazon, dehors, qui jaunit à vue d'œil. Derrière eux, l'orangerie s'effondre, et il ne reste debout que la charpente de fer, noire, qui fume.",
    "À Mirevaux, au même moment, Salée tire sa mère vers l'escalier de la cave, sous une pluie de verre de vitrine. Dans la rue, le beurre coule.",
  ], [{ label: "Courir", to: "E5" }]),

  // ================================================================ V · the rue du Beurre
  E5: T("rue", "II", "La rue du Beurre", "carrefour", [
    "Une heure. À Mirevaux, la rue des crémiers, que tout le monde appelle la rue du Beurre, coule comme une rivière.",
    "C'est une rue étroite, pavée, en pente douce, avec onze crèmeries de part et d'autre, onze caves, onze vitrines, et onze enseignes dorées en forme d'ange. À midi, toutes les mottes de toutes les crèmeries ont fondu en même temps. Le beurre a débordé des vitrines, puis des seuils, puis des caves, et il descend maintenant la pente, épais, jaune, brûlant, luisant, une rivière d'or qui fume et qui sent la noisette et l'incendie.",
    "Au bout de la rue, la crèmerie Salée. Honorine est redescendue à la cave chercher le livre de comptes, et le beurre de la rue est entré dans l'escalier.",
    "Salée est au Carrefour, à l'entrée de la rue, sur la Baratte, moteur grondant. Basile est au Domaine, à une nuit de marche, avec un talkie, un plan de Mirevaux trouvé dans le poste de garde, et une voix qui ne tremble presque pas.",
    "« Je ne peux pas passer, dit Salée. Ça glisse. Tout glisse.",
    "— Attends, dit Basile. Je regarde le plan. »",
  ]),
  I5_baratte: I("rue", ["baratte", "sable"], "II", "La Baratte sur le beurre", "cremerie", { set: { rue: "baratte", honorine: "sauvee" }, flag: "paire:rue" }, [
    "« Les pompiers, dit Basile. Sur le plan, il y a une caserne au coin de la rue du Puits. Ils ont du sable. Du sable, sur du beurre, ça accroche. »",
    "Le sac de sable est là, au coin de la rue du Puits, devant une caserne vide. Salée le jette dans le side-car. Elle avance sur la Baratte, au pas, dans la rivière d'or, en semant le sable devant sa roue à pleines poignées. Le pneu arrière de la Baratte, celui qui ne glisse jamais, mord dans le sable, et le sable mord dans le beurre. Basile, au talkie, compte les crèmeries : « Trois. Quatre. Attention, la cinquième a une marche. Six. »",
    "À la onzième, elle saute de la moto. L'escalier de la cave est plein de beurre jusqu'à la cinquième marche. Elle y jette le reste du sac, descend sur le sable, et trouve sa mère en bas, assise sur un tonneau, le livre de comptes sur les genoux, de l'or jusqu'aux chevilles.",
    "« Tu en as mis, du temps », dit Honorine.",
    "Elles remontent ensemble. La Baratte les ramène au Carrefour, au pas, sur le chemin de sable. Derrière elles, la rue du Beurre coule toujours, et le talkie, dans la poche de Salée, dit d'une voix enrouée : « Article 70 : le garde porte secours. » Il ne précise pas à quelle distance.",
    { if: { signe: "mottes" }, text: "En passant devant la crèmerie, Salée voit que les mottes de sa mère, sur les étagères du fond, n'ont pas fondu. Elles transpirent, elles plient, mais elles tiennent. Ce sont les plus salées de la rue. Sur chaque papier, le petit ange doré a l'air de serrer les dents." },
  ], [{ label: "Laisser Mirevaux à sa mère", to: "E6" }]),
  I5_charrette: I("rue", "charrette", "II", "La charrette à mottes", "cremerie", { set: { rue: "charrette", honorine: "sauvee" } }, [
    "La charrette à bras de la crèmerie, à roues cerclées de fer, attend au Carrefour, le timon en l'air. Elle passe partout où passe un âne. Elle passe aussi, découvre-t-on, dans une rivière de beurre : ses roues étroites coupent l'or comme des couteaux et touchent le pavé dessous.",
    "Salée la pousse dans la rue, à deux mains, à petits pas, en s'accrochant aux brancards pour ne pas tomber. Basile compte les crèmeries au talkie. À la onzième, elle descend à la cave en se tenant au mur, trouve sa mère assise sur un tonneau, le livre de comptes sur les genoux, de l'or jusqu'aux chevilles, la hisse dans la charrette, livre compris, et la remonte au Carrefour, à la force des bras, comme on livre une motte de quatre-vingts kilos.",
    "« Je ne suis pas une livraison », dit Honorine.",
    "Salée ne répond pas. Elle n'a plus de souffle. Derrière elles, la crèmerie Salée, fondée en 1899, perd sa vitrine, son enseigne et son comptoir. La cave tient.",
    { if: { signe: "mottes" }, text: "Sur les étagères de la cave, Salée a eu le temps de voir que les mottes de sa mère n'avaient pas fondu. Elles plient, elles transpirent, elles tiennent. Ce sont les plus salées de la rue. Sur chaque papier, le petit ange doré a l'air de serrer les dents." },
  ], [{ label: "Laisser Mirevaux à sa mère", to: "E6" }]),
  I5_coupee: I("rue", null, "II", "La chaîne", "cremerie", { set: { rue: "coupee", honorine: "blessee" } }, [
    "Salée essaie de passer, et glisse, et tombe, et se relève couverte d'or jusqu'à la taille, et essaie encore. La Baratte patine sur place en hurlant. Au talkie, Basile cherche sur le plan un chemin qui n'existe pas.",
    "Ce sont les gens de la rue qui font le chemin. D'abord le jeune Gaston, avec son casque trop grand, qui prend la main de Salée. Puis le quincaillier, son père. Puis deux clientes, un marchand de pneus, trois enfants, une religieuse. Ils se tiennent par la main, en chaîne, d'un seuil à l'autre, et ils descendent la rue du Beurre comme on descend une rivière en crue, chacun accroché au suivant.",
    "En bas, Honorine remonte l'escalier de la cave toute seule, parce qu'elle ne sait pas attendre. Le beurre lui brûle les mains sur la rampe. Elle ne lâche pas la rampe. Elle ne lâche pas non plus le livre de comptes, qu'elle tient sous le bras.",
    "La chaîne la ramène au Carrefour. Ses mains sont rouges et cloquées. Elle les regarde avec l'intérêt d'une crémière qui inspecte une motte. « C'est le métier qui rentre », dit-elle.",
    "Gaston, à genoux sur le pavé, couvert de beurre jusqu'au casque, se signe.",
    { if: { signe: "mottes" }, text: "Plus tard, Salée apprendra que les mottes de sa mère, sur les étagères du fond, n'ont pas fondu. Elles ont plié, transpiré, tenu. Ce sont les plus salées de la rue. Sur chaque papier, le petit ange doré avait l'air de serrer les dents." },
  ], [{ label: "Laisser Mirevaux à sa mère", to: "E6" }]),

  // ================================================================ VI · the general meter
  E6: T("compteur", "II", "Le Compteur général", "sous_sol", [
    "Deux heures. Sous le palais du Domaine, au bout d'un escalier de service carrelé de blanc, il y a une cave où bourdonnent des armoires métalliques, des onduleurs, des voyants verts et rouges, et au milieu, dans une armoire grise plus haute qu'un homme, le compteur général.",
    "Il tourne. On l'entend tourner : un ronronnement lourd, régulier, satisfait, comme un gros chat qui digère. Tant qu'il tourne, les panneaux du Domaine restent raccordés au réseau, braqués sur les fenêtres du palais, sur les toits, sur la Salle froide qui s'est mise à tiédir.",
    "Basile est devant l'armoire. Il a trouvé le chemin parce que le règlement a un plan, à la dernière page. Au talkie, Salée, assise sur le rebord de la fontaine de Mirevaux, feuillette sa plaquette à la recherche d'une page qui dirait comment on arrête un soleil.",
    "Dans l'escalier, des pas descendent. Deux combinaisons blanches. Deux visières miroir.",
  ]),
  I6_coupe: I("compteur", ["levier", "molette"], "II", "Ne jamais abaisser", "sous_sol", { set: { compteur: "coupe" }, flag: ["paire:compteur", "zenith:connait"] }, [
    "« Page 11, dit Salée au talkie. *En cas d'urgence, le raccordement peut être interrompu par le levier de sécurité, après dépose du capot de protection.* Il y a un dessin. Quatre écrous, un capot, un levier rouge. »",
    "La clé à molette est là, à portée de main, longue comme un avant-bras. Basile dévisse les quatre écrous en récitant les angles que Salée lui lit, un quart de tour, un autre, et le capot tombe sur le carrelage avec un bruit de cloche.",
    "Dessous, le levier rouge. Il est marqué, en lettres blanches : *NE JAMAIS ABAISSER*.",
    "« Article 3, dit Basile. Le garde ne touche pas…",
    "— Abaisse », dit Salée.",
    "Il faut être deux pour abaisser ce levier ; c'est écrit sur la notice, et c'est vrai. Basile y met tout son poids, et c'est la voix de Salée, au talkie, qui compte jusqu'à trois et qui fait la seconde main. À trois, le levier descend, avec un claquement d'os qui se remet en place.",
    "Le compteur s'arrête. Le silence tombe sur la cave comme une couverture. Au-dessus, à travers le plafond, on entend, partout dans le Domaine, un grand soupir mécanique : les panneaux qui baissent la tête, tous ensemble, comme des chiens qu'on a grondés. Et, très loin, aux grilles, un déclic : les serrures solaires des grilles dorées viennent de lâcher.",
    "Dans l'escalier, Phébus et Lumen sont arrêtés sur la dernière marche. Phébus relève sa visière d'un centimètre, et Basile voit un œil bleu très pâle qui le regarde, lui, longuement, comme on mémorise un visage.",
  ], [{ label: "Attendre le soir", to: "C4" }]),
  I6_billets: I("compteur", "billets", "II", "La pluie de bons d'achat", "sous_sol", { set: { compteur: "billets" } }, [
    "Au fond de la cave, sur une étagère haute, la Maison range depuis des années ses bons d'achat : des milliers de petits billets dorés, *valable pour un beurrier en argent*, *valable pour une baguette d'inox*, chacun frappé du petit ange à trompette. L'étagère n'a jamais bougé. À deux heures quatre, elle se renverse.",
    "Les bons d'achat tombent du plafond comme une neige d'or, lente, épaisse, tourbillonnante, dans la lumière des voyants. Il y en a partout. Ils tombent sur les armoires, sur le carrelage, sur les épaules de Basile, et sur les combinaisons blanches de Phébus et de Lumen, qui s'arrêtent net sur l'escalier.",
    "Lumen se penche et en ramasse un. *Valable pour un beurrier en argent.* Il le met dans sa poche. Il en ramasse un autre. Phébus lui dit de laisser ça, puis il en ramasse un lui-même, par réflexe, parce qu'on ne laisse pas un beurrier en argent par terre.",
    "Basile, sous la neige d'or, trouve le levier rouge derrière le capot, *NE JAMAIS ABAISSER*, et l'abaisse, de tout son poids, seul. Le compteur s'arrête. Au-dessus, les panneaux du Domaine baissent la tête avec un grand soupir mécanique. Aux grilles, très loin, un déclic : les serrures solaires lâchent.",
    "Quand les techniciens se relèvent, les poches pleines, le garde a disparu dans l'escalier de service, et il ne reste dans la cave qu'un silence doré.",
  ], [{ label: "Attendre le soir", to: "C4" }]),
  I6_octave: I("compteur", null, "II", "Le compteur tourne", "sous_sol", { set: { compteur: "octave" } }, [
    "Le capot de l'armoire résiste. La notice est en douze langues, et Basile a commencé par le finnois. Au talkie, Salée lit des pages qui parlent du bonheur des familles. Le compteur tourne.",
    "Les techniciens arrivent en bas de l'escalier. Ils ne disent rien. Phébus pose la main sur l'épaule de Basile, sans violence, et le reconduit vers l'escalier, comme on reconduit un visiteur qui s'est trompé de salle. Lumen referme l'armoire derrière eux.",
    "Basile remonte au jour. Le Domaine brûle doucement par endroits, comme une tarte oubliée. Les panneaux des toits, braqués sur les fenêtres, renvoient le soleil dans les chambres, et les rideaux de soie prennent feu un par un.",
    "À trois heures, quand les techniciens sont repartis, Octave descend au local technique avec la clé maîtresse de la maison, celle qu'aucun garde n'a jamais vue. Il ouvre l'armoire. Il abaisse le levier rouge, de la main gauche, en tenant sa veste de la droite pour ne pas la froisser. Le compteur s'arrête. Il remonte. Il ne dit rien à personne. Aux grilles, un déclic : les serrures solaires ont lâché.",
  ], [{ label: "Attendre le soir", to: "C4" }]),

  // ================================================================ VII · the scrap-dealers
  E7: T("ferrailleurs", "II", "Les Ferrailleurs", "camp", [
    "Sept heures du soir, au camp des Ferrailleurs, au bord de la route, à mi-chemin de Mirevaux et du Domaine. C'est une casse : des montagnes de métal rouillé, des carcasses de voitures empilées comme des assiettes, des chaînes, des crochets, et au milieu, un fourneau de fonte où rougeoie un feu qu'on n'éteint jamais.",
    { if: { has: "s4=convoi" }, text: "Salée est arrivée avec eux, dans la file, entre deux motos qui sentent l'huile brûlée. Ripaille lui a donné une place au feu et un gobelet de café noir. Personne ne lui pose de questions. Ici, on ne pose de questions qu'au métal." },
    { if: { has: "s4=seule" }, text: "Salée est arrivée seule, tous feux éteints, et elle a caché la Baratte derrière une carcasse de camion. Elle regarde le camp depuis l'ombre, accroupie, le talkie contre l'oreille. Personne ne l'a vue. Pour l'instant." },
    "Les Ferrailleurs chargent les camions pour la nuit. Des chalumeaux, des pinces, des cordes, des crochets, des sacs. Ripaille, debout près du feu, compte les hommes et les outils sur ses doigts, sans hâte. Sur le capot du premier camion, une enveloppe épaisse, frappée d'un soleil carré.",
    "« Le Domaine n'a plus de gardes, dit-elle à ses gens. Plus de grilles, plus de lumière. On entre par la cour des cuisines, on prend ce qui brille, on le fond ici. Sauf la statue. La statue, on la livre entière, au Consortium, avant l'aube. »",
    "Au talkie, très bas, Basile, depuis la Salle froide : « Ils sont combien ?",
    "— Beaucoup, souffle Salée. Trop. »",
  ]),
  I7_blouson: I("ferrailleurs", "blouson", "II", "Une des leurs", "camp", { set: { convoi: "deguise" } }, [
    "Un blouson de cuir clouté de capsules de bière pend sur le dossier d'une chaise, près du feu, abandonné par un Ferrailleur parti dormir. Il est trop grand. Il sent l'huile et la bière. Avec lui sur le dos, Salée cesse d'être la livreuse de Mirevaux et devient une silhouette parmi les autres, une capsule parmi les capsules.",
    "Elle monte dans le deuxième camion avec trois Ferrailleurs qui ne la regardent pas. Elle s'assied sur une pile de cordes, le col relevé. Le camion démarre. Personne ne compte les têtes : on compte le métal.",
    "Au talkie, glissé dans sa manche, elle murmure à Basile : « Je suis dedans. Deuxième camion. On arrive par la cour dans trois heures.",
    "— Je serai à la porte verte », dit Basile. Puis : « Salée. Il y a une chose que je n'ai pas dite. Le règlement prévoit qu'on peut sortir une collection en cas de péril. Article 88. Il faut seulement l'écrire au registre. »",
    "Salée ne dit rien pendant un long moment. Le camion cahote. Puis elle dit : « Alors écris. »",
    { if: { signe: "capsule" }, text: "Avant de monter, Salée a croisé Ripaille près du feu. La cheffe a baissé les yeux sur une capsule de son propre blouson, sur le cœur, et elle est restée un moment immobile, comme si la capsule lui avait parlé. Sur la capsule, il y a un petit ange doré : une marque de bière qui a racheté, un jour, une licence de la Maison. Ripaille a passé le pouce dessus. Elle n'a rien dit. Elle a laissé le chalumeau dans le premier camion." },
  ], [{ label: "Rouler vers le Domaine dans la nuit", to: "E8" }]),
  I7_guide: I("ferrailleurs", ["baratte", "plan_domaine"], "II", "La guide", "camp", { set: { convoi: "guide" }, flag: "paire:ferrailleurs" }, [
    "Salée se lève, s'avance dans la lumière du fourneau, et dit, assez fort pour que tout le camp l'entende : « Vous ne connaissez pas le Domaine. Moi si. »",
    "Ripaille la regarde. Les Ferrailleurs la regardent. Elle parle sans s'arrêter, d'une voix sûre, et chaque mot lui vient au talkie, dans son oreille, de la bouche d'un garde stagiaire qui récite à mi-voix le plan de la dernière page du règlement : la cour des cuisines, la porte verte, la galerie des collections, l'heure des rondes qui n'ont plus lieu, l'escalier où l'on se perd, la Salle froide au bout.",
    "« Les grilles sont tombées, mais les allées sont pleines de verre. Il faut passer par le chemin des fournisseurs. Je le prends tous les matins avec la Baratte. Je vous ouvre la route. »",
    "Ripaille réfléchit, longtemps, le pouce sur la balafre de sa joue. Puis elle hoche la tête. « Tu roules devant. »",
    "La Baratte prend la tête du convoi, phare allumé, avec derrière elle trois camions et vingt motos. Au talkie, Basile dit : « Je serai à la porte verte. » Puis, plus bas : « Article 88. Quand tu arrives, c'est toi qui choisis le chemin. Ils te suivront. Ils ne connaissent pas la Salle froide. »",
    "Salée sourit dans le noir. C'est la première fois de la journée.",
    { if: { signe: "capsule" }, text: "Au moment du départ, Ripaille regarde longuement une capsule de son blouson, sur le cœur. Il y a dessus un petit ange doré, la marque d'une bière qui a racheté, un jour, une licence de la Maison. Elle passe le pouce dessus. Puis elle décroche le chalumeau de sa ceinture et le jette dans le dernier camion, à l'arrière, sous les cordes." },
  ], [{ label: "Rouler vers le Domaine dans la nuit", to: "E8" }]),
  I7_queue: I("ferrailleurs", null, "II", "À la queue du convoi", "camp", { set: { convoi: "queue" } }, [
    "Un Ferrailleur trouve Salée. Ce n'est pas difficile : c'est la seule rousse du camp, et la seule personne qui ne charge rien. Il la conduit à Ripaille par le bras, sans brutalité, comme on rapporte un outil qu'on a trouvé.",
    "Ripaille la regarde. Elle regarde le talkie-walkie à sa ceinture, avec son petit ange doré. Elle tend la main. Salée le lui donne, parce qu'il n'y a pas d'autre réponse possible devant cette main-là.",
    "« Tu viens, dit Ripaille. Tu roules à la queue, avec ta moto, et tu te tais. » Elle glisse le talkie dans sa poche. « Si quelqu'un nous attend au Domaine, je le saurai par ça. »",
    "La Baratte roule à la queue du convoi, dans la poussière de vingt motos et de trois camions. Salée n'a plus de talkie. Elle n'a plus de garde au bout du fil. Elle a une nuit de route devant elle, et dans la poche de Ripaille, à cent mètres devant, une voix de garçon qui, peut-être, va appeler.",
    "Il n'appelle pas. Au Domaine, Basile regarde son talkie silencieux, et il comprend. Il a lu le règlement jusqu'au bout. Il sait que, dans un silence, il y a parfois quelqu'un.",
  ], [{ label: "Rouler vers le Domaine dans la nuit", to: "E8" }]),

  // ================================================================ VIII · the cold room
  E8: T("salle", "III", "La Salle froide", "salle", [
    "Onze heures du soir. La Salle froide n'est plus froide. Elle sent le beurre chaud, le cuir et la fumée. Sous les cloches de verre, les Enjambeurs de beurre de la Maison ont coulé en flaques dorées, cinquante ans de saints fondus dans leurs reliquaires. Seul, au milieu, sur son socle de marbre noir, le Héraut d'inox se tient debout. La lune entre par la fenêtre haute et tombe sur lui, et il la renvoie dans toute la Salle, comme s'il était lui-même une petite lune.",
    "Il pèse quatre-vingts kilos. Il mesure un mètre dix. Il ne bouge pas.",
    "Dehors, dans la cour des cuisines, les moteurs des Ferrailleurs. Dans la galerie, d'autres pas, plus légers, plus méthodiques, et deux faisceaux de lampe qui balaient les murs : Phébus et Lumen, qui ne sont pas passés par la cour.",
    { if: { has: "b4=barres" }, text: "Contre le socle, de part et d'autre de l'ange, deux barres de fer de deux mètres, arrachées à la carcasse de l'orangerie, encore tièdes au cœur, attendent comme deux lances." },
    "Basile est devant le socle, à un mètre cinquante. Salée entre en courant par la porte de service, essoufflée, les cheveux pleins de poussière de route.",
    "Basile la regarde. Il n'a jamais rien demandé à personne de sa vie, le règlement s'en est toujours chargé. Il dit :",
    "« Aide-moi. »",
  ], { fx: { flag: "heraut:miroir" } }),
  I8_barres: I("salle", ["barre", "barre"], "III", "Deux barres de fer", "salle", { set: { sortie: "barres" }, flag: "paire:salle", item: "barre" }, [
    "Deux barres de fer de la charpente de l'orangerie, longues de deux mètres. Ils les glissent sous les bras de l'ange, l'une devant, l'autre derrière, et le soulèvent ensemble, Basile à l'avant, Salée à l'arrière, comme on porte un saint en procession, ou un blessé sur un brancard.",
    "Les barres sont encore chaudes au cœur. La chaleur de midi est restée dedans, tassée dans le fer, et elle remonte maintenant dans leurs paumes. Ils ne lâchent pas. Ils ne lâcheront pas de la nuit.",
    "Ils sortent par la porte de service, le Héraut entre eux, oscillant doucement, la trompette levée vers la lune. Dans la cour, les Ferrailleurs déchargent leurs pinces et ne regardent pas deux silhouettes qui passent avec un fardeau : tout le monde, cette nuit, passe avec un fardeau. Dans la galerie, derrière eux, les lampes des techniciens trouvent le socle vide.",
    "En passant devant le pupitre de la galerie, Salée s'arrête une seconde. Le registre est ouvert à la ligne du Héraut. Dans la marge, quelqu'un a écrit *B.* Elle prend le stylo, et elle écrit à côté, d'une main brûlée : *S.*",
  ], [{ label: "Prendre la route de Mirevaux", to: "E9" }]),
  I8_chariot: I("salle", "chariot", "III", "Le chariot à mottes", "salle", { set: { sortie: "chariot" }, item: "barre" }, [
    "Le chariot de livraison de la crèmerie est là, dans la galerie, où Salée l'a laissé ce matin. Prévu pour quarante mottes. Ils y couchent l'ange comme on couche un enfant, la trompette vers l'avant, et ils le poussent ensemble vers la porte de service, sur des roulettes qui couinent comme des souris dans une église.",
    "Dans la cour, les Ferrailleurs ne regardent pas un chariot à beurre qui passe. Personne ne regarde jamais un chariot à beurre.",
    "Au bout du chemin des fournisseurs, sur le sable, la première roulette casse. Puis la deuxième. Le chariot s'enfonce et s'arrête, définitivement, avec un dernier couinement.",
    { if: { has: "b4=barres" }, text: "Basile avait glissé les deux barres de fer dans le chariot, sous l'ange, au cas où. Il les en sort. Elles sont encore tièdes au cœur." },
    { if: { not: { has: "b4=barres" } }, text: "Au bord du chemin, la carcasse de l'orangerie fume encore. Basile y arrache deux barres de fer, longues de deux mètres. Elles sont brûlantes au cœur, de la chaleur de midi, tassée dans le fer." },
    "Ils les glissent sous les bras de l'ange et le soulèvent ensemble, Basile à l'avant, Salée à l'arrière. La chaleur des barres remonte dans leurs paumes. Ils ne lâchent pas.",
    "Avant de partir, Basile est retourné en courant jusqu'au pupitre de la galerie, une seconde, et il a tendu le stylo à Salée. Dans la marge du registre, à côté de son *B.*, elle a écrit : *S.*",
  ], [{ label: "Prendre la route de Mirevaux", to: "E9" }]),
  I8_ombre: I("salle", "ombre", "III", "L'Ombre de l'ange", "salle", { set: { sortie: "ombre" }, flag: "ange:ombre", item: "barre" }, [
    "Au moment où les lampes des techniciens entrent dans la Salle froide, la lumière change de sens.",
    "Sous les cloches de verre, dans les flaques de beurre fondu, sur la plaque du socle, sur le côté des talkies-walkies, sur les capsules des blousons dans la cour, sur chaque papier de motte froissé dans les poches, chaque petit ange doré se met, pendant une minute, à faire de l'ombre au lieu de briller. Une ombre épaisse, fraîche, qui coule de toutes les images à la fois et emplit la Salle comme une eau noire.",
    "Les faisceaux des lampes s'y noient. Phébus et Lumen s'arrêtent, aveugles, dans le noir le plus complet qu'ils aient jamais connu, eux qui vendent la lumière.",
    "Dans ce noir, deux jeunes gens soulèvent un ange d'acier sur deux barres de fer brûlantes, et sortent par la porte de service sans que personne les voie. Au passage, sur le pupitre de la galerie, une main brûlée écrit dans la marge du registre, à côté d'un *B.*, une seule lettre : *S.*",
    "Quand l'ombre se retire, une minute plus tard, les techniciens trouvent un socle vide, une étiquette autocollante tombée par terre, et une odeur de beurre.",
  ], [{ label: "Prendre la route de Mirevaux", to: "E9" }]),
  I8_fuite: I("salle", null, "III", "Par la porte de service", "salle", { set: { sortie: "fuite" }, item: "barre" }, [
    "Rien ne vient. Il n'y a que leurs bras, et quatre-vingts kilos d'acier.",
    "Ils prennent l'ange à bras-le-corps, Basile par la taille, Salée par les pieds, et ils le portent comme on porte un homme évanoui, en titubant. L'acier est froid, lisse, glissant. La trompette heurte un chambranle avec un son de cloche, et dans la galerie les faisceaux des lampes se tournent d'un coup vers ce son.",
    "« Là ! » dit Phébus. « Là », dit Lumen.",
    "Ils courent. La cour des cuisines, la porte verte, le chemin des fournisseurs. Derrière, les lampes. Devant, la carcasse de l'orangerie qui fume encore dans la nuit. Basile y arrache deux barres de fer, brûlantes au cœur, en hurlant. Ils les glissent sous les bras de l'ange, et ils repartent, Basile devant, Salée derrière, au pas de course, puis au pas, puis au pas qu'on peut tenir toute une nuit.",
    "Derrière eux, les techniciens trouvent le registre ouvert sur le pupitre, à la ligne du Héraut. Dans la marge, il y a deux initiales : *B.* et, d'une autre main, en travers, à la hâte, *S.* Phébus les regarde longtemps. Il ne sait pas ce qu'elles veulent dire. Il les photographie.",
  ], [{ label: "Prendre la route de Mirevaux", to: "E9" }]),

  // ================================================================ IX · the night road
  E9: T("nuit", "III", "La route de nuit", "route", [
    "Deux heures du matin. La route de Mirevaux file tout droit dans la nuit, noire sous la lune, entre deux mers de panneaux qui dorment de nouveau, tête basse, comme si rien ne s'était passé. Ils ont l'air innocents. Ils ont l'air de ne se souvenir de rien.",
    "Basile et Salée marchent au milieu de la route, l'un derrière l'autre, l'ange d'acier entre eux sur deux barres de fer. Ils ne parlent plus. Ils comptent leurs pas. Les barres leur brûlent les paumes ; ils ont enroulé dessus des morceaux de cape, de manche, de chaussette, et cela brûle à travers. Le Héraut oscille doucement, la trompette levée, et sous la lune il brille, il brille comme une lampe qu'on aurait oubliée au milieu du désert.",
    "Derrière eux, très loin, sur la route, deux phares. Puis un troisième, plus haut, plus blanc, qui balaie les champs de gauche à droite, lentement, patiemment : le projecteur d'une camionnette du Consortium. Il cherche quelque chose qui brille.",
  ]),
  I9_couverture: I("nuit", "couverture", "III", "Sous la couverture", "route", { set: { route: "couverte" } }, [
    "La vieille couverture de cuir de la Baratte, noire, mangée aux mites, était roulée au fond d'un sac. Elle tombe sur l'ange d'un seul geste, de la trompette aux pieds. Le Héraut disparaît. Il n'y a plus, au milieu de la route, que deux jeunes gens qui portent sur deux barres une chose noire et informe, comme un tapis qu'on déménage.",
    "Ils se couchent dans le fossé, l'ange couché entre eux sous sa couverture. Le projecteur passe au-dessus d'eux, lent, blanc. Il éclaire les panneaux, la route, le fossé, la couverture. Il ne s'arrête pas. Une couverture noire ne renvoie rien du tout, et c'est un reflet qu'il cherche.",
    "La camionnette passe, à vingt mètres, sans ralentir. Ses feux arrière rougissent dans la nuit, puis s'éteignent au loin, vers Mirevaux.",
    "Ils restent couchés longtemps après. Sous la couverture, l'acier de l'ange est froid contre leurs épaules. Basile pense qu'il faudrait quelque chose de plus durable qu'une couverture. Salée pense la même chose. Ils ne le disent pas.",
    { if: { signe: "lune" }, text: "Au-dessus d'eux, la lune a changé de couleur. Elle est devenue jaune pâle, épaisse, mate, comme une motte de beurre posée sur le ciel. Elle éclaire moins. Elle éclaire comme on caresse." },
  ], [{ label: "Marcher vers Mirevaux, avant l'aube", to: "E10" }]),
  I9_boue: I("nuit", ["boue", "suie"], "III", "La boue et la suie", "route", { set: { route: "boue" }, flag: "paire:nuit" }, [
    "Au bord de la route, l'oued est à sec, mais au fond du lit il reste une boue grise, épaisse et froide. Dans la poche de Basile, il reste de la suie de l'orangerie, une poignée grasse ramassée en fuyant. Ils n'en ont pas parlé. Ils y ont pensé en même temps.",
    "Ils posent l'ange dans le lit de l'oued. Salée l'enduit de boue à pleines mains, des pieds à la taille. Basile frotte la suie sur les ailes, le visage, la trompette. En dix minutes, le Héraut d'inox est devenu une statue grise et noire, terne, lourde, une chose qu'on aurait déterrée d'un champ.",
    "Le projecteur passe au-dessus de l'oued. Il éclaire la boue, la suie, les deux visages barbouillés. Il ne s'arrête pas. La camionnette passe sur le pont, au-dessus d'eux, et s'éloigne vers Mirevaux.",
    "Ils se regardent, noirs de suie, gris de boue, et ils ne rient pas. Personne ne rit. Mais Salée, qui n'a pas souri depuis midi, a quelque chose au coin de la bouche.",
    "« Ça ne tiendra pas, dit Basile. La boue sèche. Elle tombera.",
    "— Je sais, dit Salée. Il faudrait quelque chose qui tienne. Quelque chose de gras. »",
    "Ils se regardent encore. Ils ont pensé la même chose, en même temps. C'est la deuxième fois de la nuit.",
    { if: { signe: "lune" }, text: "Au-dessus d'eux, la lune s'est voilée de jaune, épaisse, mate, comme une motte de beurre posée sur le ciel. Elle n'éclaire presque plus. Elle a l'air d'avoir compris avant eux." },
  ], [{ label: "Marcher vers Mirevaux, avant l'aube", to: "E10" }]),
  I9_vus: I("nuit", null, "III", "Le projecteur", "route", { set: { route: "vus" } }, [
    "Le projecteur les trouve.",
    "Il s'arrête sur eux, net, blanc, aveuglant, et le Héraut d'inox le renvoie d'un coup dans toute la plaine, comme un phare, comme un signal, comme un cri. La camionnette accélère. On entend le moteur monter dans les tours.",
    "Ils courent. On ne court pas avec quatre-vingts kilos d'acier sur deux barres brûlantes, et pourtant ils courent, hors de la route, à travers le premier champ de panneaux, entre les rangées, courbés, en zigzag, comme des lièvres. Les panneaux, tête basse, leur font un plafond de verre. Le projecteur balaie les rangées, s'accroche à un reflet, le perd, le retrouve.",
    "Ils se jettent sous un panneau, à plat ventre, l'ange couché sur eux. La camionnette s'arrête au bord du champ. Des portières claquent. Des pas, des lampes, des voix. « Ici. » « Ici. » Puis la voix de Phébus, lasse : « Des reflets. Ce ne sont que des panneaux. Tout ici est un reflet. »",
    "Les portières claquent de nouveau. La camionnette repart vers Mirevaux. Ils sauront, maintenant, que quelqu'un porte quelque chose vers Mirevaux.",
    "Sous le panneau, Basile a crié pendant la course, et quelque chose dans sa gorge s'est déchiré. Il essaie de dire *ça va*. Il en sort un souffle.",
    { if: { signe: "lune" }, text: "Au-dessus du champ, la lune s'est voilée de jaune, épaisse, mate, comme une motte de beurre posée sur le ciel. C'est peut-être pour cela que les lampes n'ont rien trouvé. C'est peut-être autre chose. Basile n'a plus la voix pour poser la question." },
  ], [{ label: "Marcher vers Mirevaux, avant l'aube", to: "E10" }]),

  // ================================================================ X · the warehouse
  E10: T("entrepot", "III", "L'Entrepôt", "entrepot", [
    "Cinq heures du matin. Mirevaux. La ville fume encore, rouge par endroits, noire partout. Les voitures attendent au feu rouge. La fontaine du Carrefour coule.",
    "L'Entrepôt Croûte & Chrome se dresse au bord du Carrefour, trois étages de fonte sans un carreau. Sa verrière a éclaté à midi. Son enseigne gît sur le trottoir, l'ange sur le dos, la trompette tordue. Mais par les soupiraux des caves monte un souffle tiède qui sent la crème : là-dessous, des tonnes de beurre ont tenu, à moitié. Il est mou. Il est tiède. Il est là.",
    "Basile et Salée posent le Héraut sur le pavé, devant la porte éventrée. Ils ne sentent plus leurs mains. À l'est, le ciel commence à pâlir. Quand le soleil se lèvera, l'ange d'acier le renverra dans toute la ville, et le Consortium n'aura qu'à suivre la lumière.",
    { if: { has: "route=vus" }, text: "Au bout de la grande rue, deux phares sont arrêtés. La camionnette attend le jour." },
    "Il faut que le Héraut cesse d'être un miroir avant l'aube.",
  ]),
  I10_moule: I("entrepot", ["fondant", "moule"], "III", "Le moule de la vitrine", "entrepot", { set: { beurre: "moule" }, flag: "paire:entrepot" }, [
    "Dans la réserve de l'Entrepôt, derrière la vitrine éventrée, il y a le moule. Chaque printemps, depuis 1921, la Maison y coulait l'Enjambeur de beurre de sa vitrine : un ange creux, en plâtre, en deux moitiés, la trompette aux lèvres, un pied levé. Le Héraut d'inox y tiendrait exactement. Il a été fait d'après lui.",
    "Dans les caves, il y a le beurre : des tonnes de beurre tiède, mou, doré, qui a tenu à moitié.",
    "Ils travaillent à deux, sans parler. Basile descend aux caves et remonte le beurre à pleins seaux. Salée le tasse dans les deux moitiés du moule, des mains, du coude, du poing. Ils couchent le Héraut d'inox dans la première moitié, comme dans un berceau. Ils posent la seconde par-dessus. Ils serrent. Le beurre déborde par la jointure, en bourrelet doré, comme une crème trop pleine.",
    "Ils attendent. Le beurre de cave refroidit dans le plâtre. Le ciel pâlit. Ils ouvrent.",
    "Dedans, il y a un ange de beurre. Doré, lisse, parfait. Joufflu, les ailes repliées, la trompette aux lèvres, un pied levé. C'est l'Enjambeur, le vrai, celui des mottes et des affiches, grand comme un enfant de dix ans. Personne ne pourrait deviner ce qu'il y a dedans. Il ne brille pas. Il luit, doucement, mat, chaud, comme une joue.",
    { if: { signe: "fidele" }, text: "Pendant qu'ils travaillaient, quelqu'un est venu. Un garçon de seize ans, maigre, sérieux, un casque trop grand sur la tête : Gaston. Il les a vus porter, tasser, mouler. Il n'a rien demandé. Il a pris un seau, il est descendu aux caves, et il a remonté du beurre avec eux jusqu'au bout, sans un mot. Maintenant, devant l'ange, il se signe, très lentement, et il reste là." },
  ], [{ label: "Porter l'ange sur la bascule du Carrefour", to: "Z_bascule" }]),
  I10_trompette: I("entrepot", "trompette", "III", "La trompette de l'enseigne", "entrepot", { set: { beurre: "trompette" } }, [
    "Ils descendent aux caves et remontent le beurre à pleins seaux, tiède, mou, doré, et ils en couvrent le Héraut d'inox à pleines mains, couche après couche, des pieds aux ailes, comme on beurre une tartine pour quelqu'un qu'on aime. Le beurre prend la forme de l'acier, à peu près. L'ange devient un ange de beurre, à peu près : un peu trop épais aux genoux, un peu trop mince aux joues.",
    "Sa trompette, sous le beurre, disparaît en une sorte de moignon doré. Ce n'est plus un ange qui sonne. C'est un ange qui bâille.",
    "Sur le trottoir, l'enseigne de l'Entrepôt gît toujours sur le dos, et sa trompette dorée, longue d'un mètre, s'est détachée dans la chute. Salée la ramasse. Elle la tient un moment devant le Héraut, puis elle l'enfonce dans le beurre, aux lèvres de l'ange, d'un seul geste, jusqu'à ce qu'elle tienne.",
    "L'ange de beurre a une trompette d'or, maintenant, trop grande pour lui, qui pointe vers le ciel comme un défi. Il ressemble moins à l'Enjambeur des mottes. Il ressemble plus à quelqu'un qui va dire quelque chose.",
    { if: { signe: "fidele" }, text: "Gaston, le garçon au casque trop grand, est arrivé pendant qu'ils couvraient l'ange. Il n'a rien demandé. Il a pris un seau et il est descendu aux caves avec eux. Maintenant, devant la trompette d'or, il se signe, très lentement, et il reste là." },
  ], [{ label: "Porter l'ange sur la bascule du Carrefour", to: "Z_bascule" }]),
  I10_mains: I("entrepot", null, "III", "À mains nues", "entrepot", { set: { beurre: "mains" } }, [
    "Ils n'ont que leurs mains, et le beurre des caves.",
    "Ils le remontent à pleins seaux, à pleins bras, et ils le plaquent sur le Héraut d'inox comme des maçons sur un mur, sans art, sans moule, en tremblant de fatigue. Le beurre coule, glisse, retombe. Ils le remettent. Le jour se lève derrière les toits. Ils en remettent encore.",
    "Quand le soleil touche les toits, il y a au milieu du trottoir une forme de beurre, haute d'un mètre dix, debout, avec des bosses qui pourraient être des ailes, une tête ronde, et une sorte de bras levé qui pourrait tenir une trompette. Ce n'est pas un Enjambeur. C'est l'idée qu'on s'en fait quand on est très fatigué, à cinq heures du matin, dans une ville qui brûle.",
    "Mais il ne brille plus. Pas un point. Pas un éclat. Le Héraut a disparu sous l'or mat.",
    "Salée recule de deux pas, le regarde, et dit : « Il a l'air de quelqu'un. » Basile hoche la tête. Il n'a plus de voix pour dire de qui.",
    { if: { signe: "fidele" }, text: "Un garçon au casque trop grand s'est arrêté au coin de la rue. Gaston. Il regarde la forme de beurre longtemps. Puis il s'approche, il en lisse les joues du plat de la main, avec un respect immense, pour qu'elles soient plus rondes, et il se signe." },
  ], [{ label: "Porter l'ange sur la bascule du Carrefour", to: "Z_bascule" }]),
};
