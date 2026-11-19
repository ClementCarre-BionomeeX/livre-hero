// La Super Retraite · act II, Barnabé (30 December 1899). The model baguette baked at four (test), carried to the forge;
// the town (hub, three visits): the Committee of contributors (comite=doute|confiance), the printed programme
// (c_programme), the station and Isidore's tickets (c_gare), the father, the butter knife (b:couteau); then the night
// casting at the forge (aparte; world choice baguettes=une|deux). Ends with ch2:barnabe and comes back to C2.
var PACTE_A = { has: "pacte=allies" }, PACTE_R = { has: "pacte=rivaux" };
var UNE = { has: "baguettes=une" }, DEUX = { has: "baguettes=deux" };
var VILLE = [{ seen: "B2_comite" }, { seen: "B2_vernis" }, { seen: "B2_gare" }, { seen: "B2_papa" }, { seen: "B2_beurre" }];
var DOUTE = { any: [{ clue: "c_billet" }, { clue: "c_affiche" }, { confie: "e_coffre" }, { clue: "c_coffre" }] };
module.exports = {
  B2_aube: { act: "II", title: "La baguette modèle", place: "fournil",
    text: [
      "Quatre heures du matin. Le 30 décembre. Tu n'as pas dormi, ou si peu que le sommeil n'a pas eu le temps de s'en apercevoir.",
      { if: PACTE_A, text: "Aujourd'hui, tu ne fais pas du pain pour Mirevaux. Tu fais un pain pour l'éternité, et l'éternité, contrairement à Mirevaux, ne te pardonnera pas une grigne de travers. Ernestine Chrome l'attend à cinq heures et demie, à la forge, pour en prendre l'empreinte." },
      { if: PACTE_R, text: "Aujourd'hui, tu ne fais pas du pain pour Mirevaux. Tu fais un pain pour personne en particulier, et surtout pas pour une forgeronne du faubourg qui trouve que ta croûte ressemble à un gourdin. Mie le portera là-bas, *de la part de personne*. Tu le fais quand même parfait. Une question d'honneur." },
      "Tu pèses la farine trois fois. Tu prends le levain du fond du pot, le plus vieux, celui que ton père nourrissait déjà quand tu étais au berceau, et qu'il appelait *le patriarche*. Tu pétris à la main, longtemps, en écoutant la pâte. Une bonne pâte a une voix ; elle soupire quand elle est prête.",
      "Mie te regarde faire sans un mot. Elle ne compte rien. C'est la première fois que tu la vois ne rien compter.",
      "Reste le geste le plus difficile de ton métier : la grigne. Un coup de lame, un seul, en biais, sur la pâte crue. Trop profond, la baguette s'ouvre comme une plaie. Trop léger, elle éclate n'importe où. Le coup juste, c'est celui qu'on ne pense pas.",
    ],
    choices: [
      { label: "Donner les coups de lame", test: { dom: "savoir", diff: 0, label: "La grigne" },
        win: { fx: { set: { modele: "parfait" }, ep: 150 }, to: "B2_four" }, lose: { fx: { set: { modele: "bon" } }, to: "B2_four" } },
    ] },
  B2_four: { act: "II", title: "Le chant", place: "fournil",
    text: [
      { outcome: "win", text: "La lame passe cinq fois, en biais, d'un seul mouvement, comme un archet. Tu n'as pas pensé. Après coup, tu ne saurais pas dire comment ta main a su." },
      { outcome: "lose", text: "La lame hésite à la troisième grigne. Un rien. Une fraction de seconde. La quatrième est un peu plus courte que les autres. Personne au monde ne le verra, sauf toi, et pour l'éternité." },
      "Vingt-deux minutes. Tu ouvres le four. La baguette sort, dorée, cambrée, les grignes ouvertes comme des ailes, et sur la grille, elle chante. Elle chante plus fort que toutes les baguettes de ta vie : un crépitement de pluie fine, de bois sec, de feu de cheminée.",
      "Mie a les larmes aux yeux. Elle prétend que c'est la farine.",
      "Tu enveloppes la baguette dans un torchon propre. Puis, sans trop savoir pourquoi, tu glisses à côté d'elle une deuxième baguette de la même fournée, presque aussi belle. Au cas où.",
      { if: PACTE_A, text: "Tu cours, littéralement, à travers la ville endormie, jusqu'au faubourg. Ernestine t'ouvre avant que tu frappes. Elle prend le torchon des deux mains, comme on reçoit un nouveau-né, et elle l'écoute chanter, penchée au-dessus, sans un mot. Puis elle referme la porte. Elle a du travail." },
      { if: PACTE_R, text: "Tu confies le torchon à Mie, avec ordre de la remettre à la forge *de la part de personne*. Mie part en courant. Elle revient vingt minutes plus tard. « Elle a dit merci à personne, rapporte-t-elle. Et elle a dit que personne pétrissait drôlement bien. »" },
      "Il fait jour. Tu as une journée devant toi, et un pain qui, ce soir, deviendra autre chose.",
    ],
    choices: [{ label: "Partir dans la ville", to: "B2_ville" }] },

  B2_ville: { act: "II", title: "Le 30 décembre", place: "carrefour", hub: true, backName: "la ville",
    text: [
      { first: true, text: "Le Carrefour, le 30 décembre, ressemble à une ruche qu'on aurait secouée. On colle des affiches, on décroche des guirlandes, on accroche des lampions pour le Siècle. Devant la Banque Sorbier, la file des cotisants dépasse la fontaine : tout le monde veut verser son franc avant le nouveau siècle, comme on se met en règle avant un grand voyage." },
      { first: true, if: { has: "e1:augustine_averti" }, text: "Devant la crèmerie Salée, tu remarques une chose qui n'arrive jamais : la file s'est arrêtée, et Augustine Salée, sur son seuil, regarde la Banque avec des yeux plissés." },
      { again: true, text: "Le jour avance. La ville bourdonne. Ton torchon vide est plié dans ta poche ; tu le touches de temps en temps, comme une relique." },
    ],
    choices: [
      { label: "Aller à la réunion du Comité des Cotisants, chez Augustine", hide: { seen: "B2_comite" }, to: "B2_comite" },
      { label: "Passer à l'imprimerie, où l'on imprime le programme de l'Assemblée", hide: { seen: "B2_vernis" }, to: "B2_vernis" },
      { label: "Livrer le buffet de la gare", hide: { seen: "B2_gare" }, to: "B2_gare" },
      { label: "Trouver ton père, au café du Carrefour", hide: { seen: "B2_papa" }, to: "B2_papa" },
      { label: "Rendre visite au beurre gelé d'Augustine, à la tombée du jour", hide: { seen: "B2_beurre" }, to: "B2_beurre" },
      { label: "Partir pour la forge : c'est la nuit de la coulée", if: { count: VILLE, min: 3 }, why: "La journée n'est pas finie.", to: "B2_soir", big: true },
    ] },

  B2_comite: { act: "II", title: "Le Comité des Cotisants", place: "cremerie",
    text: [
      "Le Comité des Cotisants se réunit dans l'arrière-boutique de la crèmerie, entre les barattes et les mottes, parce qu'il y fait froid et que le froid, selon Augustine, conserve les idées. Il y a là quarante personnes assises sur des caisses, des tonneaux, des sacs de sel : des lavandières, un cordonnier, deux cochers, la veuve Pujol qui touche sa retraite, et le vieux Marsal qui la touche aussi et qui dort.",
      "Augustine Salée préside, debout, les poings sur les hanches. À l'ordre du jour : les rafraîchissements de demain soir, la place des retraités au premier rang, et la question de savoir s'il faut applaudir Monsieur Sorbier debout ou assis.",
      { if: { has: "e1:augustine_averti" }, text: "Mais avant de commencer, elle dit, d'une voix plus basse que d'habitude : « Quelqu'un m'a dit hier que le coffre de la Caisse était vide. » Un silence. Puis des rires, polis, inquiets. « Les fonds sont déplacés, dit le cordonnier. Par prudence. » Augustine ne rit pas. Elle te regarde entrer." },
      "Quand vient le moment des questions, quarante paires d'yeux se tournent vers toi, parce que tu es le fils d'Anselme, le visage des affiches, et que tu as l'air de quelqu'un qui a une question.",
    ],
    choices: [
      { label: "Leur dire ce que tu sais", hide: { not: DOUTE }, test: { dom: "social", diff: -10, label: "Convaincre" },
        win: { fx: { set: { comite: "doute" }, regard: { augustine: "allie" }, ep: 200 }, to: "B2_comite_fin" }, lose: { fx: { set: { comite: "confiance" }, regard: { augustine: "mefiant" } }, to: "B2_comite_fin" } },
      { label: "Leur demander simplement : « Quelqu'un a-t-il déjà vu l'argent de la Caisse ? »", fx: { flag: "b2:question" }, to: "B2_comite_fin" },
      { label: "Te taire, et applaudir debout pour Monsieur Sorbier", fx: { set: { comite: "confiance" } }, to: "B2_comite_fin" },
    ] },
  B2_comite_fin: { act: "II", title: "Les barattes", place: "cremerie",
    text: [
      { outcome: "win", text: "Tu parles. Tu parles comme tu pétris : longtemps, avec les mains, en écoutant ce que répond la pâte. Le billet déchiré, la farine sur le pouce, les petites lettres au bas de l'affiche, et tout ce que tu as appris. Quand tu te tais, personne ne rit. Le vieux Marsal s'est réveillé. Augustine Salée dit, très lentement : « Demain soir, le Comité sera au premier rang. Et le Comité aura des questions. »" },
      { outcome: "lose", text: "Tu parles. Tu parles trop vite, tu t'embrouilles, tu dis *billet* et *farine* et *petites lettres* dans un ordre qui fait sourire les cochers. Le cordonnier lève la main : « Le fils Croûte a peur pour son fournil. » Tout le monde hoche la tête avec compassion. C'est pire que s'ils avaient ri." },
      { if: { has: "b2:question" }, text: "Ta question tombe dans l'arrière-boutique comme une motte dans une baratte. Quarante personnes se regardent. Personne n'a jamais vu l'argent de la Caisse. On a vu des enveloppes, des tampons, des affiches, des billets dans le gilet des retraités. L'argent lui-même, en tas, dans un coffre, personne. « On ne voit pas l'argent à la banque, dit enfin la veuve Pujol. C'est pour ça qu'on l'y met. » Tout le monde est soulagé. Mais Augustine, elle, a noté ta question sur son carnet, au crayon." },
      { if: { has: "comite=confiance" }, text: "On vote les rafraîchissements : du vin chaud et des brioches. On vote d'applaudir debout. Le Comité se sépare dans la bonne humeur, en se répétant que la confiance est la seule richesse qui ne se perd pas." },
    ],
    choices: [{ label: "Affronter de nouveau le froid", to: "B2_ville" }] },

  B2_vernis: { act: "II", title: "Le programme", place: "imprimerie",
    fx: { clue: "c_programme", item: "programme" },
    text: [
      "La presse à bras de l'imprimerie Vernis tourne depuis l'aube. Ambroise Vernis, en manchettes, actionne le volant ; son apprenti place les feuilles ; les programmes de la Grande Assemblée sortent un par un, sur papier glacé, et s'empilent sur la table comme des cartes de visite pour le Siècle.",
      "Vernis te tend un exemplaire raté, un peu de travers. « Pour votre père. Il est au programme. *Hommage aux quatorze Super Retraités.* Il aura une rose à la boutonnière. »",
      "Tu lis. Le discours de Sorbier, l'hommage, et à vingt-trois heures cinquante : *Présentation du Pain Éternel, estimé par Maître Anatole Gratin à TROIS MILLIONS DE FRANCS.*",
      "Tu relis. Le concours a lieu demain soir. Les pains ne sont pas encore remis. Personne ne sait encore lequel gagnera. Et le chiffre est déjà imprimé.",
      "« Monsieur Vernis… comment Maître Gratin peut-il déjà connaître le prix d'un pain qui n'existe pas ? »",
      "Le vieil imprimeur arrête le volant. Il essuie ses doigts noirs à son tablier, lentement, un par un. « Jeune homme, dit-il, j'imprime ce qu'on me paie. Et j'ajoute en bas, en petit, ce que la loi exige. » Il te montre le bas du programme. Il n'y a rien. « Cette fois, la loi n'exigeait rien. » Il remet le volant en marche. « J'ai trouvé ça dommage. »",
    ],
    choices: [{ label: "Glisser le programme dans ta poche", to: "B2_ville" }] },

  B2_gare: { act: "II", title: "Le buffet de la gare", place: "gare",
    fx: { meet: ["isidore"] },
    text: [
      "Le buffet de la gare commande trente baguettes par jour pour les voyageurs, qui les mangent dans le train et les trouvent rassises en arrivant à la capitale, ce qui leur confirme que la province est la province.",
      "Tu livres. En ressortant sur le quai, tu aperçois, devant le guichet des billets, une silhouette en livrée noire et gants blancs. Isidore, le valet de Sorbier. Il achète des billets. Il les achète avec la gravité d'un homme qui accomplit un sacrement.",
      "« Deux places en première classe, pour le train de nuit du 31. Minuit quarante. » Le guichetier tamponne. « Et quatre étiquettes de bagages, pour la capitale. »",
      "Isidore range les billets dans un portefeuille de cuir, se retourne, et te voit. Rien ne bouge sur son visage. Rien. Il te salue d'une inclinaison de tête de deux degrés exactement.",
    ],
    choices: [
      { label: "« Votre maître part en voyage, Isidore ? »", fx: { clue: "c_gare", flag: "b:isidore" }, to: "B2_gare_isidore" },
      { label: "Lui rendre son salut et repartir", fx: { clue: "c_gare" }, to: "B2_ville" },
    ] },
  B2_gare_isidore: { act: "II", title: "Le valet", place: "gare",
    text: [
      "Isidore te regarde. Ses yeux, sous le visage immobile, ont la profondeur d'un puits où l'on aurait jeté beaucoup de choses.",
      "« Monsieur ne me dit pas où il va, Monsieur Croûte. Monsieur me dit quoi porter. » Il lisse ses gants. « Quatre malles. Lourdes. »",
      "Il s'apprête à partir. Puis il s'arrête, sans se retourner, exactement comme ton père hier sur le seuil du fournil.",
      "« Deux billets, dit-il. Monsieur. Et Maître Gratin. » Un temps. « Le valet voyage en troisième d'habitude. Cette fois, le valet ne voyage pas. »",
      "Il s'en va de son pas égal, sur le quai, entre les pigeons. Tu viens d'entendre, tu en es presque sûr, la phrase la plus longue qu'Isidore ait prononcée en dix ans.",
    ],
    choices: [{ label: "Partir, songeur", to: "B2_ville" }] },

  B2_papa: { act: "II", title: "Le café du Carrefour", place: "carrefour",
    text: [
      "Ton père est au café du Carrefour, à la table près de la fenêtre, celle qu'on lui garde depuis qu'il est sur les affiches. Il a son chapeau sur la table, à côté d'un petit verre, comme un deuxième convive.",
      { if: { has: "papa=sait" }, text: "Il te voit entrer. Il pousse une chaise du pied. « Je suis allé à la Banque, hier, dit-il sans préambule. J'ai demandé à voir Monsieur Sorbier. Je lui ai montré le billet. » Il fait tourner son verre. « Il m'a donné un billet neuf à la place, et un cigare. Il m'a dit : Anselme, ces petites choses ne doivent pas troubler le visage du siècle. » Il regarde le chapeau. « Je n'ai pas fumé le cigare. »" },
      { if: { has: "papa=sait" }, text: "Il se tait longtemps. Puis : « Quarante ans j'ai fait du pain, Barnabé. Je savais toujours ce qu'il y avait dedans. »" },
      { if: { not: { has: "papa=sait" } }, text: "Il te voit entrer. Il lève son verre. « Le fils du visage du siècle ! » Quelques habitués lèvent le leur. Il est heureux, d'un bonheur un peu bruyant, comme un homme qui s'est mis à croire très fort à quelque chose pour la première fois de sa vie. « Demain soir, dit-il, j'aurai une rose à la boutonnière. Sur l'estrade. Monsieur Sorbier m'a demandé de dire quelques mots. »" },
    ],
    choices: [
      { label: "« Papa, demain soir, sur l'estrade, dis la vérité sur le billet. »", hide: { not: { has: "papa=sait" } }, fx: { set: { papa: "temoin" }, regard: { anselme: "allie" } }, to: "B2_papa_fin" },
      { label: "Lui dire, enfin, pour le billet", hide: { has: "papa=sait" }, fx: { set: { papa: "sait" }, regard: { anselme: "distant" } }, to: "B2_papa_fin" },
      { label: "Trinquer avec lui, et ne rien dire", to: "B2_papa_fin" },
    ] },
  B2_papa_fin: { act: "II", title: "Le chapeau sur la table", place: "carrefour",
    text: [
      { if: { has: "papa=temoin" }, text: "Ton père remet son chapeau, très lentement, comme un juge remet sa toque. « Quelques mots, répète-t-il. Monsieur Sorbier m'a demandé quelques mots. » Il se lève. « Il les aura. »" },
      { if: { all: [{ has: "papa=sait" }, { not: { has: "papa=temoin" } }] }, text: "Ton père t'écoute, le visage fermé. Puis il dit : « La Caisse a beaucoup de billets. » Mais il le dit sans y croire, et il ne remet pas son chapeau en partant. Il le porte à la main, comme une chose qu'on rapporte au magasin." },
      { if: { not: { has: "papa=sait" } }, text: "Vous trinquez. Le vin est aigre, le café est chaud, ton père est heureux. Tu te dis que demain, après minuit, il sera peut-être temps. Tu te dis aussi que tu te dis ça depuis trois jours." },
    ],
    choices: [{ label: "Filer vers le Carrefour", to: "B2_ville" }] },

  B2_beurre: { act: "II", title: "Le Fondant Impérial", place: "cremerie",
    text: [
      "À la tombée du jour, la crèmerie Salée est si froide que la buée gèle sur la vitrine en fougères blanches. Augustine est partie au Comité ; sa nièce garde la boutique, et elle te laisse entrer dans la réserve, où les mottes de demi-sel d'hiver attendent sur des planches, dures comme des pavés.",
      "Tu repenses à ce qu'a dit Augustine : *en décembre, mon beurre salé, tu pourrais couper du pain avec*.",
      "Tu prends une motte. Tu prends ton couteau de poche. Et pendant une heure, dans le froid, à la lueur d'une lanterne, avec le soin que tu mets à façonner une couronne de Noël, tu sculptes dans le beurre un couteau à beurre. La lame fine, le manche torsadé, un petit grain de sel incrusté dans le pommeau.",
      "Tu le poses sur une baguette d'hier. Tu appuies. Le couteau de beurre tranche le pain rassis, net, d'un seul geste, avec un petit crissement de luxe.",
      "La nièce d'Augustine te regarde faire, la bouche ouverte. « C'est… c'est un couteau en beurre pour couper le pain ?",
      "— C'est un couteau en beurre pour couper le pain, confirmes-tu.",
      "— Et après, on fait quoi ?",
      "— Après, on le tartine. »",
      "Elle réfléchit longtemps. Puis elle dit, avec une gravité d'enfant de chœur : « On devrait le vendre très cher. »",
    ],
    choices: [{ label: "Envelopper le couteau dans du papier sulfurisé, et le mettre au froid dans ta poche", fx: { item: "couteau_beurre", flag: "b:couteau", ep: 100 }, to: "B2_ville" }] },

  B2_soir: { act: "II", title: "La nuit de la coulée", place: "forge", takes: "night",
    text: [
      "Tu traverses le pont de l'oued à dix heures du soir. Il gèle si fort que les galets du lit de la rivière craquent tout seuls dans le noir, comme des os.",
      { if: PACTE_A, text: "La forge t'attend, porte ouverte, rouge comme une bouche. Ernestine est devant le feu, les manches roulées, le visage luisant. Sur l'établi, il y a un long bloc de terre cuite, fendu en deux dans sa longueur comme un fruit, et dans chaque moitié, le creux de ta baguette : l'empreinte parfaite de sa croûte, de ses grignes, de ses bulles, à l'envers. Ton pain a brûlé dedans cet après-midi, et il a laissé sa forme, comme un saint laisse son visage sur un linge." },
      { if: PACTE_R, text: "Tu frappes. Ernestine ouvre. Vous vous regardez. « Je viens voir comment on traite mon pain, dis-tu.", },
      { if: PACTE_R, text: "— Votre pain est mort à quatre heures cet après-midi, dit-elle. Il a très bien brûlé. » Elle s'écarte. Sur l'établi, il y a un long bloc de terre cuite, fendu en deux comme un fruit, et dans chaque moitié, le creux de ta baguette : l'empreinte parfaite de sa croûte, de ses grignes, de ses bulles. Tu regardes ça, et tu oublies, pendant une bonne minute, que tu étais venu pour te disputer." },
      "Mémé Chrome est sur son tabouret, emmitouflée dans trois châles. Elle regarde le creuset, où l'acier blanc bouillonne à une température qui fait trembler l'air.",
    ],
    choices: [{ label: "Aider à fermer le moule", to: "B2_coulee" }] },
  B2_coulee: { act: "II", title: "La coulée", place: "forge", aparte: true,
    text: [
      "Vous refermez les deux moitiés du moule l'une sur l'autre, vous les serrez dans des cerclages de fer, vous les enterrez debout dans un bac de sable, l'ouverture en haut, comme une cheminée.",
      "Ernestine prend le creuset avec de longues pinces. Le métal fondu est d'un blanc si pur qu'il en devient bleu sur les bords. Il éclaire toute la forge, vos visages, les poutres, les seaux de clous, le visage minuscule de la grand-mère. Il fait clair comme en plein midi, à onze heures du soir, au faubourg de l'oued.",
      "« Une seule coulée, dit Ernestine. Le métal ne pardonne pas. On n'aura pas de deuxième chance. »",
      "Elle regarde le creuset. Elle regarde le moule. Puis elle te regarde, toi, avec une hésitation que tu ne lui connaissais pas.",
      "« Il y a assez de métal pour deux », dit-elle.",
    ],
    choices: [
      { label: "« Une seule. Une baguette éternelle, il ne doit y en avoir qu'une. »", monde: "baguettes", option: "une", hide: DEUX, fx: { set: { baguettes: "une" } }, to: "B2_coulee_fin" },
      { label: "« Deux. Une pour le concours. Une pour nous. »", monde: "baguettes", option: "deux", hide: UNE, fx: { set: { baguettes: "deux" } }, to: "B2_coulee_fin" },
    ] },
  B2_coulee_fin: { act: "II", title: "L'acier demeure", place: "forge",
    text: [
      { if: DEUX, text: "Ernestine sort de sous l'établi un second moule : elle l'a pris cet après-midi sur la deuxième baguette du torchon, celle que tu avais glissée *au cas où*. Vous ne vous demandez pas au cas où quoi. Elle verse. Le métal coule dans le premier moule avec un bruit de soie déchirée, puis dans le second, jusqu'à la dernière goutte." },
      { if: UNE, text: "Ernestine verse. Le métal coule dans le moule avec un bruit de soie déchirée. Ce qui reste au fond du creuset, elle le jette dans un seau d'eau, où il siffle comme un chat et se fige en une petite étoile tordue. Mie, plus tard, la gardera." },
      "Puis il faut attendre. Le métal refroidit. Vous êtes assis côte à côte sur l'enclume, sans rien dire, pendant deux heures. Il fait froid dans le dos et brûlant devant. Tu as l'impression de veiller une naissance.",
      "À une heure du matin, Ernestine brise le moule au marteau.",
      "Elle est là.",
      "Une baguette. Une baguette d'acier blanc, avec ta croûte, tes grignes, tes bulles, la petite cambrure du bout que fait ta main quand elle façonne. Elle brille à la lueur du feu comme un miroir qu'on aurait roulé. Elle est lourde comme un gourdin, et belle comme une chose qu'on aurait trouvée au fond de la mer.",
      "Et en refroidissant, sur l'enclume, elle fait un bruit. Un tout petit crépitement. Le métal se resserre, cristal par cristal. Ernestine tend l'oreille. Toi aussi.",
      "Elle chante.",
      { if: DEUX, text: "Ernestine prend un burin et grave, sous le quignon de la première, en lettres fines : *N° 1 · Barnabé & Ernestine · 1899 · L'acier demeure.* Sous la seconde, seulement : *N° 2.* Tu demandes pourquoi la seconde n'a pas de phrase. Elle dit que la seconde n'est pas à montrer." },
      { if: UNE, text: "Ernestine prend un burin et grave, sous le quignon, en lettres fines : *N° 1 · Barnabé & Ernestine · 1899 · L'acier demeure.* Tu demandes pourquoi un numéro, s'il n'y en a qu'une. « Parce qu'on ne sait jamais », dit-elle." },
      "« L'acier demeure », lis-tu à voix haute. Tu as envie de répondre quelque chose. Tu dis : « Le pain passe. » Elle te regarde. Vous venez, sans le savoir, d'écrire la première réclame d'une maison qui n'existe pas encore.",
      "Mémé Chrome ouvre les yeux, regarde la baguette sur l'enclume, et dit d'une voix claire : « Ce qui brille trop longtemps, on finit par vous le voler. » Puis elle les referme. C'était la phrase du jour, et elle l'avait gardée pour la fin.",
    ],
    choices: [{ label: "Laisser la baguette refroidir sur un chiffon propre, et repartir dans la nuit", fx: { flag: "ch2:barnabe", ep: 200 }, to: "C2" }] },
};
