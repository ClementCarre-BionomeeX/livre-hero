# Relecture complète des « Cendres de l'Hiver » : questions et notes

Relecture du 12 novembre 2026. Ce fichier se lit en deux temps. La **partie 1 ne dévoile rien de l'intrigue** : ce qui a été fait, ce qui a changé dans le moteur, les décisions de fond qui t'attendent. Les **parties 2 à 4 dévoilent l'histoire** (noms de scènes, retournements, fins) : à lire après y avoir joué, ou à me laisser trancher.

Partout, « choix appliqué » veut dire que je n'ai pas attendu : la réponse recommandée est déjà en place, et se défait en une ligne.

---

## Partie 1. Sans rien dévoiler

### 1.1 Ce qui a été fait

- Les 131 fichiers du scénario ont été lus ligne à ligne (2 002 passages) : 643 passages ont un texte retouché, 70 libellés de choix ont été réécrits, 446 tags ont été posés ou convertis. La structure (passages, destinations, effets) est inchangée, vérifiée par comparaison automatique avec la version d'avant.
- Une quinzaine de corrections qui touchaient plusieurs fichiers à la fois ont été faites ensuite à la main (libellés qui annonçaient autre chose que la scène, un nom de lieu écrit de deux façons, une impasse dans une scène de l'acte III, un personnage « rencontré » dans une pièce où il n'est pas, des conversations de veillée qui redonnaient de la confiance sans limite).
- Le graphe des scénarios existe : `node tests/graphe.js` écrit `dist/graphe.html`. Les textes des passages y sont masqués par défaut.

### 1.2 Ce qui a changé dans le moteur (générique, vaut pour tous les scénarios)

| Règle ou tag | Ce que cela remplace dans les scénarios |
|---|---|
| `after` / `before` acceptent aussi l'identifiant d'un passage (« lu / pas encore lu ») | des drapeaux posés seulement pour savoir si une scène a été vue |
| `with: "any"` / `without: "any"` (accompagné / seul) | les textes en « vous » ou « seul » faux une fois sur deux |
| `outcome: "win" / "lose" / "flee" / "calm"` sur un paragraphe | les drapeaux posés à la main pour raconter l'issue d'un jet ou d'un combat |
| `else` sur tout paragraphe tagué (existait, maintenant documenté) | les paires de paragraphes « avec / sans » |
| Les aides d'un jet lisent les tags : `{ with: "x", v: 10 }` | `{ if: { present: "x" }, v: 10 }` |
| Un objet donné peut sortir du sac d'un autre héros présent | un choix resté fermé alors que le compagnon portait l'objet (un cas réel trouvé) |
| Un choix qui coûte des vivres est grisé si on n'en a pas (comme l'or et les objets) | rien : c'était un trou |

Le guide `GUIDE-TAGS.md` est à jour, et `node tests/tags-test.js` vérifie ces tags sur une histoire minuscule.

### 1.3 Ce que je propose pour le moteur et que je n'ai pas fait

Ce sont les motifs que les relecteurs ont trouvés écrits à la main des dizaines de fois. Je ne les ai pas mis dans le moteur parce que chacun change le comportement de scènes déjà écrites : c'est à toi de dire lesquels tu veux. Classés du plus rentable au moins rentable.

1. **Quête annexe quittée en cours de route.** 45 quêtes des Cendres ont une entrée qui se ferme dès la première visite, alors qu'on peut en ressortir sans l'avoir finie : la quête reste « en cours » au journal pour toujours. `node tests/quetes-ouvertes.js cendres` en donne la liste. Trois réponses possibles : (a) règle du moteur, l'entrée d'une quête commencée et non finie reste proposée ; (b) règle du moteur, quitter une quête par un refus la classe « abandonnée » au journal ; (c) rien, un refus est définitif. **Choix appliqué : (c) pour l'instant**, et les libellés de refus disent maintenant clairement qu'on renonce. Je recommande (a) pour les sorties en cours de route et (b) pour les refus à l'entrée, mais (a) rejoue le premier passage de la quête, donc ses gains : il faut un tag « reprise » sur le passage où l'on revient. À faire dans un deuxième temps si tu es d'accord.
2. **Retour au carrefour automatique.** Environ 490 choix « Revenir sur la place / au camp / dans la cour » sont écrits à la main, avec des constantes recopiées dans une vingtaine de fichiers. Tag proposé : `back: true` sur le passage, le moteur ajoute seul le retour au dernier carrefour, avec le libellé tiré du lieu. Plus aucun libellé de retour ne peut être faux.
3. **Choix de carrefour « une seule fois ».** Environ 420 choix portent à la main « caché si la scène cible a déjà été lue ». Option proposée sur le carrefour : chaque scène ne s'y propose qu'une fois. Conversion mécanique.
4. **L'heure que raconte une scène.** Dans un carrefour l'horloge ne bouge pas, mais les scènes disent « ce soir », « à minuit », « le lendemain ». Tag proposé : `sets: "night"` (la scène amène l'heure au lieu de l'exiger), et `takes: "night"` (la scène dure jusqu'au matin). Une trentaine de scènes concernées. **Choix appliqué en attendant** : aucun `when` posé sur ces scènes, pour ne pas les rendre inaccessibles ; les relecteurs ont seulement retiré les mentions d'heure qui se contredisaient.
5. **États à plusieurs valeurs.** Les drapeaux du type `clé=valeur` ne sont que des noms : rien n'empêche deux valeurs à la fois, rien ne vérifie qu'un groupe de variantes couvre toutes les valeurs. Proposé : un vrai type état (`set`, condition `is`) et un paragraphe à cas (`by: "clé", cases: {…}, else: …`). Deux oublis de variante ont été trouvés et corrigés à la main dans cette relecture.
6. **Confiance donnée à un absent.** `fx.conf` s'applique aujourd'hui même si le compagnon n'est pas là. Règle proposée : seulement aux présents. À confirmer, parce que tu peux vouloir qu'une réputation voyage.
7. **Texte d'arrivée rejoué au retour d'une sous-scène** dans un passage qui n'est pas déclaré carrefour. Règle proposée : le validateur signale tout passage où l'on peut revenir et qui n'a ni `first` ni `again`.
8. Plus petits : unité de monnaie déclarée par l'histoire (liards, sous, écus) ; marque d'accord selon le héros de tête (`{e}`) ; élision automatique devant un nom (`{de:ysolde}`) ; condition « au moins n parmi » ; trait de personnage « sait lire » ; rôle nommé (`{champion}`) ; bloc d'épilogue avec priorités et plafond de lignes ; « muet » comme état de compagnon ; ligne de bilan après une perte d'or.

### 1.4 Décisions de fond, sans détail d'intrigue

1. **Jour et nuit dans les carrefours** : voir 1.3 point 4. Choix appliqué : pas de filtre d'heure tant que le moteur ne sait pas faire avancer l'heure par la scène.
2. **Deux calendriers** cohabitent dans le monde (des mois révolutionnaires et des mois ordinaires), et une scène de vendanges tombe en juillet. Choix appliqué : rien changé, sauf un « comme chaque automne » devenu « comme chaque été ». À toi de choisir un calendrier.
3. **Monnaie** : le texte compte en liards, sous et écus, le moteur en pièces. Choix appliqué : les textes ont été alignés au cas par cas sur le montant réellement retiré.
4. **Anachronismes laissés** parce qu'ils portent une scène entière : un bal masqué de style XVIIIe, une horloge à balancier, des noms latins de plantes, un cheval nommé d'après un jeu postérieur. La liste précise est en partie 3.
5. **Clins d'œil du narrateur** : ceux qui rappelaient un indice ont été retirés. J'ai laissé ceux qui sont une retombée de ce que le joueur a lui-même fait plus tôt (liste en partie 3). Si la règle doit être stricte, je les retire aussi.
6. **Texte neuf** : les relecteurs ont écrit une trentaine de phrases nouvelles (variantes « sans tel compagnon », lignes de retour). Elles sont toutes signalées en partie 3 pour que tu puisses les relire.
7. **Kardan** : un passage du troisième acte n'est jamais atteint par les parties d'essai (il l'était déjà avant cette relecture). Non traité ici : la demande portait sur les Cendres. À reprendre.

### 1.5 Après tes réponses du 12/11 (fait)

- **Quêtes.** Une quête quittée en cours de route reste proposée à son carrefour, et la page dit « (Tu reprends : …) ». Un refus porte « refus définitif » sur le bouton, le journal note la quête refusée et on n'y revient pas (22 refus marqués dans les Cendres). Une quête devient **manquée** quand son acte est passé, ou quand son chapitre se ferme (48 quêtes des actes I et II ont une condition de fermeture calculée à partir de l'endroit où elles se terminent). Le journal le dit, un message aussi, une fois.
- **Temps.** Tag `takes` sur une scène : le bouton annonce « le temps passe : jusqu'au soir », la page le dit entre parenthèses, l'horloge avance. Posé sur une quarantaine de scènes et sur toutes les veillées.
- **Réputation.** Ce que tu fais change la confiance et la crainte des absents sans rien afficher ; à leur retour, ils disent un mot (« On m'a raconté ce que tu as fait… ») avec le chiffre. Ceux qu'on n'a pas encore rencontrés gardent ce qu'ils ont entendu jusqu'à la rencontre.
- **Monnaie.** Le moteur compte en une seule unité ; les Cendres l'affichent en écus et en sous (un écu vaut vingt sous). Les autres scénarios restent en pièces.
- **Saisons.** La scène de vendanges de juillet est devenue une moisson ; la troupe joue « comme chaque été ».
- **Pages déjà lues.** Une page où l'on revient et qui n'a pas de texte de retour se replie (« Tu connais déjà cette page. Relire »). Cela règle d'un coup les ~250 passages qui rejouaient tout leur texte.
- **Petits outils d'auteur.** `back: true` (retour au carrefour écrit par le moteur), `set` / `is` / `by` (un état à une seule valeur à la fois), `count` (« au moins n parmi »), `{e}` (accord selon le héros de tête).
- **Bugs ouverts de la partie 2** tranchés selon mes choix par défaut, comme tu l'as demandé : une quinzaine corrigés (dont une impasse de quête, une sortie gratuite dans une file d'attente, un objet promis par le texte et absent, un paragraphe qui suppose un passage facultatif, une route qui ramenait au décor du prologue, une condition d'épilogue qui récompensait la mauvaise réponse). Le reste demande d'écrire du contenu neuf et attend.

Pas fait, faute d'en voir le gain tout de suite : convertir à la main les ~490 retours et les ~420 « une seule fois » déjà écrits (ils marchent), le rôle nommé, le trait « sait lire », l'état « muet », le bloc d'épilogue.

---

# ⚠️ À partir d'ici, l'intrigue est dévoilée


## Partie 2. Bugs relevés hors du lot de chaque relecteur

Déjà corrigés depuis (par moi, après le retour des relecteurs) : le `meet` de la Veuve dans le cabinet (lot 4) ; viole et harpe (lot 7) ; conversations de veillée du Nord en `once` (lot 8, 1) ; « chaque automne » (lot 8, 3) ; l'impasse de `III_c_sauvelune` (lot 10, 1) ; « greffiers en civil » (lot 12) ; les quatre libellés de `IV_br` et `IV_pal` (lot 13), avec la condition « Hautvent déjà vu » ajoutée au choix de Rodric ; « gué aux Saules » (lot 16, 2) ; les deux événements de route pendant la colonne (lot 17) ; l'indice `n_sceau`, qui faisait le lien pour le lecteur (lot 2, 4) ; `II_N2_eboulis_apres` et `E2_bac_passe`, qui racontent maintenant l'issue du combat grâce au tag `outcome` ; la flaque de `III_p_place` (question 1 du lot 11) ; la canne de `II_N_canne`, restée fermée quand Hylas n'est pas le héros de tête (corrigé dans le moteur). Vérifié sans rien à corriger : lot 16, point 3.

Tout le reste de cette partie est **encore ouvert**.

### Lot 1
- `HY_tour` (acte1_hylas.js) → `HY_Q_page` : la scène dit « Le soir, dans ta cellule » et le libellé « Ta cellule, le soir » ; rien ne garantit l'heure. À voir avec le lot qui tient acte1_hylas.js : soit `when: "night"` sur le passage, soit accepter l'ellipse.
- `EN_place` (acte1_enfant_a.js) reste visitable après `EN_soir` (son texte le prévoit). `EN_Q_fontaine_voeu` dit « la fête ce soir » et « le soleil a bougé » : faux si l'on y vient après la ronde. Suggestion : masquer les choix `EN_Q_*` après `EN_soir`, ou poser un drapeau à `EN_soir` pour pouvoir écrire `before`.
- `CO_fleche` (mon fichier) lit `croise:fleche_corbe` / `croise:fleche_laissee`, posés par l'enfant dans acte1_enfant_b.js : le texte « chaussures de montagne, usées » décrit l'enfant ; expression un peu moderne, laissée telle quelle faute de savoir comment l'enfant est chaussé ailleurs.
- `CO_V_ecrivain` (mon fichier, signalé ici car lié à base.js) : les deux seuls choix coûtent 1 pièce ; Corbe part avec 2 pièces. Si une autre scène de Pallanche lui en prend (ex. `CO_V_ours`, acte1_ville.js), elle arrive sans or et le moteur devra rattraper. Suggestion : un troisième choix gratuit (« Sortir de la file ») ; je ne pouvais pas ajouter de choix.

### Lot 2
1. **base.js, objet `pain` et `EN_lutte`** : le texte promet et donne « un jambon fumé et trois pièces » (`EN_lutte`, `EN_lutte_gagne`, libellé « le jambon sous le bras »), le `fx` donne `item: "pain"` (Pain de la fête). Suggestion : créer un objet `jambon`, ou changer le lot dans le texte. Non touché (fx interdit, et le jambon est un bon gag).
2. **base.js, lieux `grives` et `pontsaule`** : leurs passages d'arrivée (`EN_grives`, `EN_pontsaule`) n'ont pas d'`arriveIf` pour l'acte IV, contrairement à `sauvelune`. À vérifier : si une route y mène à l'acte IV, on y lira le texte du prologue (hameau vide sous la neige, « Tu as vendu du grain ici, avec Joris », `EN_pierres` « enfant, en gardant les chèvres ») quel que soit le héros meneur.
3. **base.js, routes `r_nord` et `r_sud`** : les passages d'étape `EN_portes_nord` (« dans la lumière du soir », « soleil couchant »), `EN_portes_sud` (« au matin du quatrième jour », « sonnent prime ») et `EN_colonne` (« Au milieu de la deuxième journée ») fixent une heure. À vérifier que l'horloge du voyage y arrive bien à cette heure. Voir Questions.
4. **base.js, indice `n_sceau`** : il dit que la plume et la clé sont « les armes de la Chancellerie des Noms de Pallanche ». C'est le lien fait pour le lecteur, donné dès la victoire au temple, avant qu'il ait vu la tour (`EN_portes_*`).

### Lot 3
- `acte1_pie.js` PI_hylas (l. 471) : Hylas dit « Tu sens… la sueur des lavandières » quelle que soit la voie d'entrée de Pie ; ça n'est vrai que par la charrette de linge (`PI_linge`). `acte1_hylas.js` HY_archives reprend la même phrase en écho (laissée telle quelle). Suggestion : conditionner le bout de phrase dans les deux fichiers.
- `acte1_enfant_a.js` EN_place : rien de cassé, mais EN_k_doyenne_compte (mon lot) montre Tess « à la forge, qui se dispute avec son père » alors que EN_k_bal la met au bord de la danse ; les deux coins sont visitables dans n'importe quel ordre. Laissé (pas strictement contradictoire).
- `acte1_hylas.js` HY_tour (mon fichier, mais structure) : « La porte sous les caves » et « Sortir dans la ville » sont cachés dès la première visite ; les choix « Remonter. Pas aujourd'hui » et la fuite du gardien ferment donc le caveau pour de bon. À confirmer comme voulu.

### Lot 4
Aucun bug constaté dans un fichier d'un autre lot. Deux points que je ne peux pas corriger parce qu'ils sont dans des `fx` ou des `hide` (intouchables) de mes fichiers :

- **PI_bureau_maison** (acte1_pie.js) : `fx: { meet: "veuve" }` dans le cabinet du greffier, où la Veuve n'est pas. La rencontre est déjà posée sur PI_veuve ; suggestion : retirer le `meet` de PI_bureau_maison.
- **PI_ville** : les trois quêtes annexes cachées par `hide: { seen: ... }` se ferment dès la première visite. Refuser Ninon (« J'ai mes propres affaires ») ou repartir du Bureau ferme la porte pour de bon, alors que `questSeen` a déjà annoncé la quête. Suggestion : cacher sur la quête faite plutôt que sur le passage vu.

### Lot 5
- **base.js, route `r_colonne` / événements de région « marches »** : `E_patrouille` (dans acte1_ysolde.js) se passe « sur l'autre rive de la Lisse ». Si le moteur peut le tirer aux étapes 2 à 5 (col de Varre, route des Cloches), la Lisse est loin derrière. Non vérifié (tirage dans base.js). Suggestion : limiter cet événement à l'étape 1, ou le rattacher à une région « lisse ».
- **acte1_cours.js et autres coins de YS_cour (YS_Q_recrue, YS_Q_cheval, YS_k_maitre, YS_k_chambre_pere, YS_gautier)** : ces choix restent ouverts dans la cour après la saisie de Hautvent (drapeau `YS:colonne`), alors que les quarante hommes et Gautier sont à cheval autour de la colonne, hors des murs. Seule la forge est déjà masquée. À relire par le lot propriétaire : soit `before: "YS:colonne"` sur les passages qui montrent les hommes dans la cour, soit rien si le texte reste vrai.
- **acte1_ysolde.js, compte des prisonniers** (dans mon lot, laissé tel quel, voir Questions) : la suite du récit, dans d'autres fichiers, cite peut-être aussi « cent dix-huit » ; à garder cohérent si Clément tranche.
- **acte2_annexes.js, II_Q_aire** : l'aide de test `{ if: { present: "lisandre" }, v: 10 }` ne peut jamais jouer (Lisandre mène toujours le Sud, cf. acte2_partage.js). Je n'ai pas touché au `test` (garde-fou). À supprimer ou à remplacer par un héros du Nord.

### Lot 6
Aucun constaté avec certitude. Deux points à vérifier par qui tient ces fichiers :
- **acte2_nord1.js / acte2_nord2.js (les miens, mais le correctif demande d'ajouter des choix)** : II_N_feu et II_N2_nuit proposent de parler à l'enfant, Ysolde, Pie, Hylas, jamais à Rodric ni à Linette, qui peuvent pourtant être de la compagnie (II_N5_col, lui, les propose tous les six). Non corrigé : il faudrait ajouter des choix et des passages.
- **acte4_clan.js (IV_clan_fin → IV_k_torgal)** : le libellé « Le vieux Torgal, sous son auvent » ne pose pas de problème, mais la scène suppose une connaissance de Torgal que l'enfant n'a que s'il était au nord (corrigé côté texte dans mon fichier ; vérifier que IV_clan ne fait pas la même supposition ailleurs).

### Lot 7
- **acte2_sud2.js l. 44** (`II_S2_palais`) : le libellé « Passer par la tribune des musiciens, d'où vient une viole » annonce une viole ; dans `II_S2_tribune` c'est Maître Grégoire seul à la harpe. Suggestion : « d'où vient une harpe ».
- **acte2_col_veillee.js** (`II_C5_pie`) : « Si elle était là, elle saurait leurs noms » alors que Linette, si elle a été sauvée, est dans la compagnie de Pie (et `II_C5_linette` existe dans le même fichier). Suggestion : variante `with: "linette"` / `without: "linette"`.
- **acte2_col_veillee.js** (tous les `II_C5_*`) : scènes de nuit (étoiles, « ne dort pas », « Revenir au feu du clan ») ouvertes depuis le carrefour `II_N5_col`, qui peut être visité de jour ; même carrefour, `II_N5_pierre` parlait du soleil (corrigé chez moi par `when`). Suggestion : `when: "night"` au niveau des passages, si le joueur a un moyen d'attendre la nuit ; sinon reformuler.
- **base.js, coordonnées** : moutier (52, 3), col (50, 1), cirque (46, 0). Les textes du moutier disent que le col est « vers l'est » (`II_N3_cloitre`, `II_N3_novice_veille`) ; sur la carte il est au nord-ouest. Les textes du cirque (col à l'est, moutier à l'est) sont cohérents avec la carte. Suggestion : déplacer le moutier à l'ouest du col sur la carte, ou écrire « vers le nord » au moutier.
- **acte2_nord2.js / base.js** : les drapeaux « `clé=valeur` » (`nord:livre=pris`, `nord:rendu=clan`, `nord:geant=tue`…) ne sont que des noms : rien n'empêche deux valeurs d'être posées (voir Pour le moteur).

### Lot 8
1. **acte2_nord1.js (`II_N_feu`, l. 172 environ) et acte2_nord2.js (`II_N2_nuit`, l. 196 environ)** : les choix « Parler avec… » n'ont ni `seen` dans leur `hide` ni `once`, contrairement à nord3, nord4, nord5. Les passages cibles donnent de la confiance (vérifié pour Ysolde : `conf: { ysolde: 5 }` dans les deux), elle est donc gagnable sans limite. Correctif : `once: true` sur ces choix (ce que j'ai fait dans sud1 et sud2).
2. **base.js, région `cour`** : l'événement `E2_vendange` (vendanges) se tire sur la route du sud fin juillet (l'histoire commence le 11 juillet, `II_S_village` dit « en juillet », l'indice `n_coffre_fer` dit « en plein juillet »). Voir Questions.
3. **acte2_annexes.js, `II_Q_troupe`** : « comme chaque automne » alors qu'on est en été (même sujet que le point 2).
4. **acte2_annexes.js, `II_Q_fioles`** : « entre un shipchandler et une taverne » ; anglicisme moderne, à remplacer par « un avitailleur » ou « un marchand de marine ».

### Lot 9
- **acte2_sud1.js, II_S_tournoi / II_S_inscription** : le choix dit « Inscrire Rodric, sous les couleurs de Corvanne », mais II_S_inscription donne à tout le monde le blason « d'azur à la mouette d'argent », et acte2_sud2.js l. 273 le répète. Dans mes fichiers Rodric défile « sous les couleurs de Corvanne ». Suggestion : variante dans II_S_inscription pour `sud:champion=rodric`.
- **acte2_sud1.js, II_S_vasselin (hub)** : l'horloge ne bouge pas dans un hub (le temps n'avance qu'en voyage ou par `fx.time` / `fx.until`). Les scènes qui en partent racontent leur propre heure : II_Q_crieur (« samedi soir », « ce soir »), II_Q_bassin_lettre (« au soleil »), II_VS_enfant (« il est minuit »). Je n'ai pas posé `when` sur ces passages : selon l'heure d'arrivée à Vasselin, la quête deviendrait inaccessible. Suggestion : `fx: { until: 21 }` sur le choix « Le crieur des morts » du hub.
- **II_S3_masque_part (mon fichier, mais `fx` interdit)** : Lisandre oublie le chevalier et s'essuie la main, aucun drapeau n'est posé ; au chapitre suivant (II_S4_melee « tu cherches le masque », II_S4_melee_vue « Tu le sais quand même ») elle s'en souvient. Suggestion : `fx: { flag: "sud3:masque_oublie" }` et une variante.
- **II_S4_ceremonie (mon fichier, `fx` interdit)** : l'échec du test « interrompre Aubrac » pose le même drapeau que « Laisser Aubrac chanter » ; impossible de raconter l'échec. Suggestion : drapeau `sud4:interruption_ratee`.
- **Passages de combat sans `place`** : II_S3_glaneur, II_S5_garde_combat, II_S5_chien_combat, II_Q_crieur_combat (tous à Vasselin).
- **acte2_nord3.js l. 81** : « Linette, qui épelle un livre à la chandelle » (et II_VN_linette chez moi : « elle lit les lettres une par une… comme un enfant ») alors qu'au sud Linette recopie « très vite » et lit les bornes ; voulu (Corbe la voit autrement) ou incohérence ? Laissé tel quel.
- **II_S5_linette** : « Pie ne tient pas en place » sans tag ; garanti seulement parce que Linette suit Pie dans acte2_partage.js.

### Lot 10
1. **III_c_sauvelune (acte3_cloches.js, le mien, mais non réparable sans ajouter un choix)** — BLOCAGE. Si `nord:rendu=sauvelune` est absent et que l'enfant n'a plus le souvenir `enfant:chanson`, les seuls choix sont « La faire sonner toi-même » (→ III_c_sauvelune_main → « Redescendre » → III_c_sauvelune) et le don, grisé. Boucle sans sortie ; le moteur ne la voit pas puisqu'un choix reste toujours possible. Correction proposée : ajouter « Revenir sur la place » → III_c_ville dans III_c_sauvelune (ou faire pointer « Redescendre » de III_c_sauvelune_main vers III_c_ville quand le souvenir manque).
2. **acte3_valcendre.js, III_v_porte** — le choix vers III_K_entree est caché par `hide: { seen: "III_K_entree" }`. Refuser à l'entrée ou redescendre de l'atelier avant la fin ferme donc la quête de la carte pour de bon. Correction proposée : `hide: { has: "carte_orsan" }` ou quête terminée, et viser III_K_atelier au retour. En attendant j'ai rendu les deux libellés honnêtes : « Plus tard. » → « Je ne peux pas rester. », « Redescendre dans la ville » → « Laisser la carte, et redescendre dans la ville ».
3. **III_e_hameau → III_F_lisiere (acte3_enfance.js, le mien, `hide` interdit de modification)** — même défaut : `hide: { seen: "III_F_lisiere" }` ferme « Le feu qui reste » dès qu'on dit non à Solenn ou qu'on revient du bois sans avoir vu Ewen. Correction proposée : `hide: { has: "iii:braise" }`, cible III_F_bois au retour. Libellés rendus honnêtes : « Pas maintenant. » → « Je ne peux pas. », « Revenir au hameau » (III_F_bois) → « Renoncer, et revenir au hameau ».
4. **acte3_reveil.js, III_plaine** — même schéma pour III_Q_gue (`hide: seen`) : « Les laisser à leur guerre » ne clôt jamais la quête (`quest: "III_Q_gue"` n'est posé qu'aux fins), elle reste ouverte au journal. Idem III_Q_givre « L'appeler pour qu'il revienne » et III_B_bergere « La laisser passer ».
5. **acte3_cartographe.js / lore** — III_K_ville : Pallanche a « six cents ans de rues » alors que le feu date de trois cents ans et que le port existait avant : pas forcément faux, à vérifier. III_K_riviere : la Lisse « où l'on se bat depuis si longtemps que personne ne sait plus pourquoi », alors qu'ailleurs la guerre « recommence » (III_c_lisse_temoins, III_Q_gue_paix). Laissé tel quel.
6. **base.js / âge de l'enfant** — Ellerune dit partout « deux ans… il y a vingt ans », « tu as vingt ans de trop » (22 ans), mais Solenn est « une fille de ton âge » avec un frère de quinze ans, le sergent dit « petit », la fileuse « bon garçon ». Laissé tel quel.

### Lot 11
- Aucun bug constaté dans un fichier que je ne possède pas. À savoir pour `base.js` / moteur : `III_p_courrier` donne un bonus `present: "linette"` au tri des lettres, mais `III_reveil` (`awayUnless … linette: false`) écarte Linette pour tout l'acte III : bonus mort, sans effet visible.
- `III_a_combat` (acte3_porte.js) n'a pas de `place` alors que tous ses voisins sont à `valcendre` (non modifié : `place` interdit de modification).

### Lot 12
- **acte4_pallanche.js, IV_pal_entree (l. 50)** : « greffiers en civil » : même tournure moderne que celle corrigée dans IV_Q_baudoin_soir. Suggestion : « sans leur robe ».
- **IV_O_combat et IV_Q_potence_combat (mes fichiers, mais garde-fou sur `place`)** : ces deux passages de combat n'ont pas de `place` alors que tout le reste de la quête est à `pallanche`. Laissé tel quel ; à ajouter si le moteur s'en sert pour l'affichage.
- **acte4_brenne2.js IV_br_puits_mot / acte4_brenne.js IV_br_hautvent** : la scène de Perrine est écrite deux fois (selon l'ordre des visites), avec deux rédactions un peu différentes. Cohérent, mais à garder synchronisé.
- **Calendrier** : « quatorze brumaire » (IV_br_rodric, IV_Q_lisse_date, sans doute ailleurs) côtoie « février », « janvier », « quinze décembre », « juillet » (IV_Q_odon, IV_Q_bonne, IV_Q_ruches_gout). Deux calendriers dans le même monde.
- **IV_clan_fin** sert de carrefour (on y revient depuis IV_Q_ylva et les IV_k_*) sans `hub: true`. Non modifié (garde-fou).

### Lot 13
- **acte4_brenne.js, `IV_br`** — libellé « Ton frère, qui regarde les enfants du camp » → `IV_C_sansnom` se passe à Hautvent, sur un banc devant la maison de Maëlle. Suggestion : « Ton frère, à Hautvent, sur le banc de Maëlle ».
- **acte4_brenne.js, `IV_br`** — libellé « Ysolde descend à la crypte, sous la chapelle » ; `IV_C_ysolde` dit « descend sous le fort ». Aligner l'un sur l'autre.
- **acte4_brenne.js, `IV_br`** — « Rodric, à l'écart, avec ses trois cloches » → `IV_C_rodric` se passe « sur la table de Maëlle », donc à Hautvent, sans que le choix exige `seen: "IV_br_hautvent"`. Suggestion : ajouter cette condition au choix, ou changer le libellé.
- **acte4_pallanche.js, `IV_pal`** — libellé « Pie veut passer rue des Faussaires » ; `IV_C_pie` dit « une ruelle derrière les Teinturiers ». À aligner.
- **acte4_sauvelune.js / acte4_retour.js** — `IV_f_pre` (« Il fait déjà chaud à huit heures ») et `IV_m_portier` (« en plein jour », « sous le soleil ») supposent le jour ; les choix qui y mènent ne portent pas `when: "day"`. Voir Questions.

### Lot 14
- **`IV_Q_pontsaule` (base.js, quête)** : si le joueur quitte le sergent sans fermer la baraque (`IV_ps_sergent` → « Le laisser à son pont », ou le second choix de `IV_ps_sergent_taille`), le corps de garde disparaît du carrefour et la quête ne peut plus se terminer. Suggestion : dans `IV_ps`, cacher « Le corps de garde » sur `has: "iv:pontsaule=libere"` ou sur `seen: "IV_ps_fuite"` plutôt que sur `seen: "IV_ps_sergent"`. C'est dans mon fichier, mais cela change un `hide`, donc non fait.
- **`IV_ps_ronde` (acte5_ville3.js)** : la ronde du sergent reste proposée après `IV_ps_fuite`, où le sergent est relevé de ses fonctions. À vérifier.
- **`IV_Q_baudoin_parti` / `IV_Q_baudoin_soir` (acte4_annexes.js)** : `IV_pal` ouvre « Préparer l'entrée dans la tour » sur `seen: "IV_Q_baudoin_soir"`, même si Baudoin est renvoyé chez lui ; le plan n'a alors aucune ligne, et la seule entrée est de forcer la porte. Suggestion : condition sur `has: "pal:baudoin"`.
- **`IV_P_piquiers` (mon fichier, titre non touché)** : le titre « Les anguilles » renvoie à la réplique de Lisandre, qui peut être absente.

### Lot 15
- `acte5_tour.js:101` (V_t_cessions) : le choix « L'escalier qui descend, derrière le guichet » est caché par `seen: "V_ar_escalier"`. Or `V_ar_escalier`, `V_ar_salle` et `V_ar_rate` proposent « Remonter au Bureau » avant la fin : on ne peut alors plus redescendre et la quête `V_Q_archives` reste ouverte pour toujours. Suggestion : cacher par `has: "v:archives"` plutôt que par `seen`.
- `acte5_archives.js` / `acte5_tour.js` : si le correctif ci-dessus est appliqué, `V_ar_salle` devra dire autre chose après `v:archives` (elle décrit Hermeline qui classe et les rayonnages pleins) et cacher les trois allées. Je n'ai pas écrit ces variantes puisque le passage est aujourd'hui inatteignable après la fin.
- `acte4_route.js` `E4_messager_lu` → `E4_messager_aide` : ce chemin ne pose pas le flag `messager:aide` (posé seulement par le choix direct). Si une suite teste ce flag, le joueur qui a lu puis rendu la lettre est traité comme s'il ne l'avait pas rendue. Je n'ai pas touché aux `fx`.
- `acte5_tour.js:99` et `:102` : « Une porte étroite, au troisième » et « Le dortoir, sous les combles » ; cohérent avec mon correctif du dortoir. Le scriptorium est « au quatrième » (`V_t_scriptorium`).
- Chronologie de l'acte V : `acte5_tour.js:22` arrête la troupe sous le pont « à l'aube », puis toute la ville et la tour se jouent « cette nuit », avec minuit qui approche. À vérifier par qui possède `acte5_tour.js`.

### Lot 16
1. **acte5_aube.js** (passages `V_a_<qui>`) : le drapeau `v:dernier=<qui>` est posé à l'entrée du passage, pas sur le choix. L'épilogue dit « Tu as gardé la petite cloche qu'il appelait Hautvent » (`v:dernier=rodric`) même si le joueur a répondu « Tu ne mourras pas là-haut » et n'a rien reçu. Suggestion : un drapeau propre sur le choix « Je la sonnerai » (par exemple `v:cloche_hautvent`), et l'épilogue le lit à la place.
2. **acte4_patrouille.js** (`IV_P_combat` et le texte ligne 20) : « gué des Saules », alors que base.js (`III_Q_gue`) et acte3_annexes.js disent « gué aux Saules ». Suggestion : « aux » partout.
3. **acte5_archives.js / acte5_etages2.js** (`V_t_fiche`, `V_t_dessin`) : leur réussite mène à `V_t_pardonne`. Je n'ai pas vérifié qu'elles posent `mordace:fin=pardonne` comme le fait `V_t_bocal` ; à vérifier, sinon l'épilogue perd la ligne de Mordace.
4. **Épilogue, drapeaux de Thibaut** : `thibaut:sort=repris` (acte I : il sert jusqu'à la fin de la guerre, sa femme ne sait plus pourquoi elle reçoit sa solde) peut se cumuler avec `thibaut:iv=…` (« Thibaut tisse, à Hautvent, avec sa femme »). Les deux paragraphes sont dans mon fichier, mais je ne sais pas quelles combinaisons les actes I et IV laissent possibles ; non modifié.

### Lot 17
- acte4_pontsaule.js, IV_ps, choix « La ronde du sergent, le soir » → IV_ps_ronde (mon fichier acte5_ville3.js) : la scène se passe « le soir », lanterne à la main, « Bonne nuit », mais le choix s'offre à toute heure. Suggestion : `when: "night"` sur le choix (ou sur le passage IV_ps_ronde), si l'heure avance bien dans le carrefour IV_ps ; je n'ai pas posé le tag faute de pouvoir vérifier qu'on peut y être de nuit (voir Questions).
- base.js, region `marches` : E_gue_marches et E_tour_signaux (texte au singulier, « Tu traverses… les pieds dans l'eau froide », « quand tu montes ») peuvent tomber sur la route r_colonne, où Ysolde mène cent dix-huit prisonniers encordés. Suggestion : `if: { not: { has: "YS:colonne" } }` sur ces deux événements dans `world.events`.
- base.js, `world.events` : E4_bucheron, E4_avalanche, E4_noce, E4_greffier_fuite, E4_tombe, E4_loups_guerre n'ont aucune condition ; ils ne tiennent que parce que leurs régions (iv_*) ne servent qu'à l'acte IV. À garder en tête si une route d'acte V réutilise ces régions.
- acte5_tour.js, V_ville : l'entrée « La Veuve » (V_v_veuve) n'a pas de condition alors que la scène suppose qu'on la connaît (« Vous. Je vous ai fait de la soupe, une fois », « ce qui ne lui ressemble pas du tout »). À vérifier : le logis chez la Veuve à l'acte IV (IV_pal) est-il obligatoire, et y sert-elle de la soupe ? Je n'ai trouvé la soupe nulle part dans acte4_pallanche*.js.

## Partie 3. Questions des relecteurs, avec le choix appliqué

### Lot 1
1. `EN_Q_fontaine_voeu` finit par « Rien n'a changé. Pas encore. » C'est aussi une annonce du narrateur, mais discrète et sans lien avec un indice. Choix appliqué : conservée. De même « Tu n'y penses pas. Tu y penseras. » (`LI_Q_ourlet_sien`).
2. `CO_ylva` : j'ai fait battre « un tambour du clan » plutôt que celui de Corbe (fendu). Le bonus du test lit toujours `item: "tambour"` ; laissé tel quel.
3. `HY_Q_mur` : chapelle « petite » mais « quarante-deux pas de long, onze bancs ». Choix appliqué : laissé (les pas d'un aveugle sont courts), à confirmer.
4. `CO_askel_bran` : « le feu de la Saint-Corbeau » pour un clan qui n'a pas de saints. Choix appliqué : laissé.
5. `CO_four` : la chose est « elle » puis « lui / il » dans `CO_four_chant` et `CO_four_rate`. Choix appliqué : laissé (elle devient Gaspard), seul l'accord « accroupie » est corrigé.
6. `PI_Q_course_perdu` : j'ai chiffré la perte en « sous » (comme les « six sous » de Mouche). À ajuster si la monnaie de Pallanche est autre.

### Lot 2
1. **`EN_soir`, « *Neige d'été, neige d'oubli.* »** en dernière ligne : c'est un rappel de l'indice de la comptine fait par le narrateur. Choix appliqué : retiré, selon la règle. C'est aussi une belle chute ; pour la remettre, la rajouter telle quelle en fin de `text`.
2. **`EN_matin_suite` ne propose pas la roue.** Si on ne va pas à la roue depuis `EN_matin`, elle n'est plus accessible, et « Rentrer au moulin finir ce que tu y as laissé » reste affiché toute la fête sans rien offrir de plus. Il faudrait un choix `EN_roue` dans `EN_matin_suite`. Choix appliqué : rien (ajout de choix interdit).
3. **Heures dans les passages d'étape** (`EN_portes_nord`, `EN_portes_sud`, `EN_colonne`). Choix appliqué : laissé tel quel, ce sont des arrivées uniques et non des lieux où l'on revient. Si l'horloge du voyage n'est pas fixe, il faut neutraliser (« dans la lumière du soir », « sonnent prime ») ou poser des variantes `when`.
4. **« matin de Noël »** (`EN_aube`) : le monde a un Dieu, des Saints-Gardiens et un temple, mais Noël n'apparaît nulle part ailleurs. Choix appliqué : « un matin de plein hiver ».
5. **`EN_tess`, choix « Lui dire que tu as rêvé de la plaine blanche, encore »** : offert même sans `passe:reveur`, alors que le rêve n'est posé dans `EN_matin` que pour ce passé. Choix appliqué : laissé (le rêve vaut pour tout héros, `enfant:reve` est un souvenir de départ).
6. **`EN_ruches2_ok`** : la variante se règle sur l'indice `n_fondre`. Un joueur qui a l'indice mais choisit quand même d'enfumer lira la scène des noms. Cas rare (nommer réussit d'office et rapporte plus). Un drapeau sur le choix le réglerait.
7. **`EN_village`, « Tu commences à comprendre. La chose reviendra ce soir, et ce soir elle entrera au temple. »** : le narrateur conclut à la place du lecteur, et seul `EN_nuit_suivre` le fonde. Choix appliqué : laissé, la phrase sert de consigne pour le choix « Attendre le soir au temple ».
8. **`EN_flocon_nom`, titre « Un nom qu'on aime »** : le titre dit la règle que le texte laisse deviner. Choix appliqué : laissé (titre).
9. **`EN_colonne`** : la colonne « monte vers Pallanche », le héros « s'écarte pour les laisser passer », puis doit « rattraper » la chevalière. Lu comme une colonne qui débouche sur la route. Choix appliqué : laissé.

### Lot 3
1. HY_caveau dit qu'Hylas est ressorti aveugle de la salle du registre noir ; HY_mordace et HY_mordace_mensonge disent qu'il est revenu aveugle du Nord. Voulu (les deux à la même époque, il doute du lien) ou contradiction ? Choix appliqué : laissé tel quel.
2. LI_k_nursery_qui : Lisandre ne retrouve « pas de nom » pour le prince, alors qu'Ermengarde vient de lui dire « le prince Aymeric » dans LI_reine (passage obligatoire). Choix appliqué : laissé (l'oubli qui gagne), à trancher.
3. HY_jour avec `ysolde:voie=deserte` : j'ai fait certifier à Hylas une liste sans colonne (« cour vide »). acte1_nuit parle de trente prisonniers repris : faut-il plutôt les faire entrer ici ? Choix appliqué : cour vide.
4. HY_k_dortoir_ecoute avec `linette:nom_dit` : j'ai fait souffler « Linette » à la petite, alors qu'Hylas lui avait dit de ne le dire à personne. Choix appliqué : elle le dit, à peine.
5. HY_k_examen : les deux fins supposaient qu'un souvenir cédé peut être rendu. Choix appliqué : « rendu à personne » et « on lui lira sur cette copie ».
6. Les deux phrases de présage retirées (tartes, linteaux) étaient des annonces de la suite plus que des indices. Choix appliqué : retirées, selon la règle « pas de clin d'œil du narrateur ».
7. HY_noms : titre changé (« Cent dix-huit » → « Un par un ») parce qu'il était faux dans deux des trois voies. Le brief n'interdit pas de toucher aux titres ; à annuler si un titre sert d'ancre ailleurs.

### Lot 4
1. **N_chant, N_place : Ysolde déserteuse qui « reste près de la reine ».** Le choix reste offert à la déserteuse cachée dans la foule. J'ai neutralisé les descriptions pour qu'elles soient vraies partout, sans créer de variante par voie. Voulez-vous de vraies variantes (déserteuse dans la foule / de garde derrière le trône) ?
2. **Linette après le souvenir donné.** J'ai écrit des variantes courtes (elle ne reprend pas sa plume ; au grenier, elle demande son nom à Pie). Le texte d'origine la laissait amnésique dans tous les cas. Choix appliqué : elle garde les nuits sous le pont, rien d'autre. À relire, c'est le seul endroit où j'ai ajouté des faits.
3. **Jeton du Bureau.** Choix appliqué : tout cédant reçoit un jeton, « gros cédant » = celui qui revient. L'autre lecture possible (il faut vendre plusieurs souvenirs) aurait demandé de changer la scène de vente.
4. **PI_Q_fiole_pris** sert aussi à l'échec du marchandage, où le Borgne saisit le poignet de Pie et le traite de voleur sans qu'il ait rien pris. Laissé (Pie est connu comme « celui qui vole tout »).
5. **Fioles ou boîtes de plomb ?** Chez le Borgne les souvenirs sont en fioles de verre ; dans les archives de la tour, en boîtes de plomb. Laissé.
6. **acte1_six.js** : le chapitre 2 d'Ysolde s'intitule « une colonne de cent vingt noms », les textes disent cent dix-huit puis cent dix-neuf. Laissé (libellé de chapitre, peut-être le compte au départ).
7. **PI_place_clercs** (« à l'ombre des tilleuls », « depuis l'aube ») et **PI_sonneur_noms** (« vous y passez l'après-midi ») supposent le jour, depuis un carrefour où l'on vient à toute heure. Pas de `when: "day"` posé : cela fermerait une des portes de la tour la nuit. Faut-il le poser ?
8. **N_minuit / N_aube** : quand la roue est bloquée, toutes les cloches sonnent en désordre, mais le texte dit que la neige épargne « les quartiers du sud ». Laissé (les deux passages sont cohérents entre eux).
9. **N_tissot** est titré « Maître Hylas » même quand Hylas n'y est pas. Laissé.

### Lot 5
1. **« Quarante hommes, deux cents chevaux » (YS_aube)** : cinq chevaux par homme me paraît une coquille. Appliqué : « soixante chevaux ». À rétablir si Brenne est un dépôt de remonte.
2. **Compte des prisonniers** : « cent dix-huit » partout, mais YS_thibaut_livre inscrit un cent dix-neuvième, et Rodric « n'est pas sur la liste » alors que le décompte de YS_pallanche et de YS_ruse l'inclut. Appliqué : rien (le chiffre est un motif du chapitre) ; à trancher.
3. **Corbe et l'écriture (II_Q_bouches_grave)** : j'ai aligné sur « Corbe ne sait pas écrire » (6 autres passages) en remplaçant les lettres par un signe du clan. Si l'intention était que sa mère lui ait appris en secret, il faut au contraire corriger les autres passages.
4. **Monture de Sévrin** : cheval à Brenne, mule ensuite. Appliqué : mule partout dans mon fichier.
5. **Carnet gris volé** : j'ai neutralisé les trois mentions tardives plutôt que d'écrire des variantes selon `carnet_sevrin`. Autre option : variantes `if: { item: "carnet_sevrin" }`.
6. **Chambre de Sévrin après la saisie** : choix masqué par `before: "YS:colonne"`. Conséquence : le carnet et le reliquaire ne se trouvent qu'avant Hautvent.
7. **II_k_conteuse** : j'ai retiré l'heure (« ce soir ») plutôt que de poser `when: "night"` sur le passage, pour ne pas risquer de le rendre inaccessible.
8. **CO_V_ours_libre / _rate** : « tu reviens à minuit », « le lendemain », puis retour au carrefour de jour CO_V_ville. Laissé (voir Pour le moteur).
9. **YS_thibaut_libre** : « Ils ne sont pas sur sa liste » alors que la femme de Thibaut, tisserande de Hautvent, y est sans doute. Laissé.
10. **Maëlle** vouvoie Ysolde à Hautvent puis la tutoie au gué (YS_maelle_lisse). Lu comme voulu (elle est prisonnière), laissé.
11. **II_Q_troupe** : « comme chaque automne » alors que le récit commence en juillet. Laissé, faute de connaître la saison de l'acte II.
12. **HY_V_cloches_muette** : Hylas situait le silence de la cloche « il y a vingt ans » sans que personne le lui dise (le gamin dit seulement « depuis avant que je sois né »). Appliqué : « il y a vingt ans peut-être » (les vingt ans sont confirmés à l'acte III).

### Lot 6
1. **Combien de rameurs sur la galère grise : 180 ou 40 ?** acte2_galere.js disait 180 (trois fois), acte2_galere2.js disait 40 (deux fois). J'ai aligné sur 180. Conséquence : le cuisinier récite 180 noms et la cave de la Morue Bleue doit en cacher 180 ; si tu préfères une petite galère, il faut au contraire passer galere.js à 40.
2. **II_N2_eboulis_apres après une fuite ou une défaite** : le texte dit que le Glaneur est en poudre. Je n'ai pas pu le corriger sans toucher aux `fx` (interdit). Laissé tel quel ; correctif proposé : un flag dans `win`, ou la fuite renvoyée vers `@route`.
3. **IV_k_torgal quand l'enfant n'est jamais monté au nord** : j'ai écrit « Il lève les yeux sur toi, te pèse, et ne s'arrête pas de jouer. » La suite (« Toujours pas… j'attends quelqu'un qui sache ») reste commune. À relire si tu veux une vraie scène de première rencontre.
4. **II_N_chasseurs** : j'ai retiré « à la tombée du jour » plutôt que de poser `when`, pour que la scène reste jouable à toute heure. Si tu tiens à l'heure, il faut `when: "night"`/un tag de soir sur le passage.
5. **II_N_camp, dernier paragraphe** (les bandes d'écorce devant la tente de Hrodna, « plus qu'il n'y a de gens au clan ») : il se répète à chaque retour au carrefour. Je l'ai laissé, parce que c'est la seule description permanente du lieu ; à passer en `once: true` si tu le lis comme un indice.
6. **Sifflet du mousse** : changé d'argent en os pour ne pas doubler celui du comite. À annuler si le doublon était voulu (même fournisseur, même galère).

### Lot 7
1. `II_conseil` (acte2_partage.js) : Hylas « a la tête tournée vers le nord, lui aussi », puis parle du registre des Fondateurs que Mordace a emporté, donc du sud. Voulu (il écoute le nord et pense au sud) ou coquille pour « vers le sud » ? Laissé tel quel.
2. `II_N4_bran_rendu` : le titre est « Brann » (deux n, le nom de ville du garde) alors que le choix et le texte chantent « Bran ». Et la phrase « celui qu'il a donné à Pallanche pour une sauvageonne et un garde noir » : je ne comprends pas qui est « il » (le choix n'est ouvert que si Corbe a donné son souvenir de lui, `corbe:voie_bran=donne`, auquel cas elle ne sait plus qui il est, et le libellé dit pourtant « Ton frère »). Laissé tel quel.
3. `II_N5_rite` : j'ai gardé le rappel du vers (*Qui n'en chante aucun la garde fermée.*) sous `nord:chant_lu` et retiré seulement la déduction du narrateur. Si la règle « aucun rappel » est stricte, il faut retirer aussi le paragraphe.
4. `II_N4_soir_hylas` : la variante sans Gaspard est de mon invention (« Les serments disent : une vallée. Une vallée n'a pas tant de noms. »), appuyée sur le serment des Veilleurs lu au moutier. À valider ; le titre du passage reste « La grande ville ».
5. `II_N3_chant` sans `nord:chant_lu` : j'ai écrit que Corbe chante « les trois vers, puis des noms : ceux du clan, ceux des morts que tu as connus ». À valider.
6. `II_N5_col` : les libellés « Pie… qui compte les étoiles » et « Rodric… qui ne dort pas » supposent la nuit. Je ne les ai pas tagués `when: "night"` pour ne pas rendre ces scènes inaccessibles si la compagnie arrive de jour ; à décider avec les passages cibles (voir Bugs hors de mes fichiers).
7. `II_N3_geant_quoi` : le seul choix, « Revenir au prieur », mène à `II_N3_livre` ; un joueur qui commence par cette question ne lit jamais le serment (`II_N3_serment`, indice `n_veilleurs`, drapeau `nord:serment_lu`). Voulu ? Laissé tel quel (cibles intouchables).
8. `II_Q_echo_voix` : « tu sais, maintenant, un nom que Torgal cherche depuis des années » fait le lien pour le lecteur ; je l'ai laissé parce que c'est la résolution de l'annexe et non un indice en attente.

### Lot 8
1. **`hands()` dans acte2_rupture.js** : le brief interdit de modifier les fonctions utilitaires, mais « la main de Ysolde » est une faute visible sur un bouton clé de l'acte. Choix appliqué : table `OF` ajoutée, libellé seul modifié. À annuler si la règle est stricte.
2. **Vendanges en juillet** (`E2_vendange`, et « chaque automne » dans `II_Q_troupe`). Tout le reste dit juillet. Choix appliqué : rien changé, l'événement entier repose sur la vendange. À trancher : avancer la saison de ces deux passages (moisson, fenaison, « chaque été ») ou accepter l'écart.
3. **`once: true` sur les « Parler avec… »** de `II_S_nuit` et `II_S2_nuit` : j'ai considéré la confiance rejouable comme un bug. Si la relecture libre des conversations était voulue, retirer ces `once` et plafonner le gain autrement.
4. **`II_R_ouvre`** : « tu le tends à Hylas, ou à Pie, ou à Linette, à celui qui sait lire ». Tournure d'incertitude écrite à la main (et Hylas est aveugle : il lit les creux, pas l'encre). Choix appliqué : laissé tel quel, faute de savoir qui est garanti présent après `regroup`. Proposition : trois variantes `with`.
5. **`E2_bac_passe` après un combat gagné** : le passeur battu « a rallumé sa pipe » et regarde une fiole au soleil. Choix appliqué : laissé (pas de drapeau pour distinguer, et je ne touche pas aux `fx`). Voir Pour le moteur, point 7.
6. **`II_S2_nuit`** : « Les autres sont autour de la table » suppose au moins un compagnon ; `II_S2_prep` prévoit pourtant le cas « y aller seule ». Choix appliqué : laissé, je n'ai pas pu établir que la compagnie du sud peut être vide.
7. **`II_S_porte_mer`** : la condition `{ all: [{ present: "hylas" }, { present: "rodric" }] }` équivaut à `with: ["hylas", "rodric"]`. Choix appliqué : laissée, le brief limitant la conversion aux formes exactes.
8. **`E2_corbeau_blesse`** : « son œil jaune » pour un grand corbeau (l'œil est noir). Choix appliqué : laissé, peut-être voulu pour les corbeaux du clan.
9. **Lignes `again` ajoutées** (4 phrases courtes neuves : `II_S_nuit`, `II_S2_palais`, `II_S2_isaure`, `II_S2_nuit`) : à relire, c'est le seul texte que j'ai écrit plutôt que retouché.

### Lot 9
1. **II_VS_rodric avec Ilan livré** : j'ai écrit trois répliques nouvelles pour Rodric (« on dit qu'il est dans une cave de ton palais », « Un prisonnier, on va le chercher… », « Un prisonnier, ça se rend »). Choix appliqué : variantes courtes, Rodric ne sait pas que c'est Lisandre qui l'a livré. À valider ou récrire.
2. **II_S4_proclamation, Rodric vainqueur** : « Les couleurs de Corvanne. Le nom inventé » ou « Rodric Trois-Cloches » selon `sud:vrai_nom`. Choix appliqué : Rodric garde toujours les couleurs de Corvanne (cohérent avec le défilé), voir le bug sud1 ci-dessus.
3. **II_S4_proclamation** : paragraphe ajouté « Aubrac a chanté jusqu'au bout… » pour couvrir l'interruption ratée. À garder ?
4. **II_S3_cartes** : j'ai fusionné « la Plume, la Clé » en « la Plume croisée d'une Clé » pour revenir à cinq figures. Si six cartes visibles plus une septième étaient voulues, c'est la réplique « il n'y a que cinq figures » qu'il faut changer.
5. **II_S4_tumulte après « Hautvent »** : « Mordace n'a pas touché au coffre » et « tu n'as toujours pas vu ce qu'il y a dedans ». Choix appliqué : le coffre reste fermé dans cette branche (Mordace écrit seulement l'ordre).
6. **II_S5_coffre** : « lourd comme un enfant. Il faut deux personnes pour le sortir » ; comparaison laissée (les « comme » ont déjà été revus), mais elle se contredit un peu.
7. **II_S3_enfants_masque** : « Sans masque, on ne l'oublie pas. C'était ça, le jeu. » ; à la limite du clin d'œil qui explique le chevalier au masque. Laissé.

### Lot 10
1. Guetteur et jouets (Ellerune) : j'ai mis `after: "enfant:langue"` sur les deux choix du carrefour. Un joueur qui a vu Maëra sans écouter les villageois doit donc d'abord « Écouter ce qu'ils disent ». Acceptable, ou préférer une condition langue OU mère ?
2. Libellés de refus (carte, forêt) : j'ai rendu le refus définitif dans le texte. Si tu préfères qu'on puisse revenir, il faut changer les `hide` (points 2 et 3 ci-dessus) et remettre « Plus tard. » / « Pas maintenant. ».
3. III_c_muette, paragraphe `hylas:muette` : remplacé par « Une cloche de chapelle, aux armes de la Chancellerie, qui ne sonne plus. À Pallanche, on l'appelait la Muette. » Faut-il le supprimer tout à fait ?
4. III_e_maison, ours du berceau : le lien explicite est remplacé par un geste (l'enfant tient l'ours du ruisseau contre le chevet). À garder ou à supprimer ?
5. III_e_mere_dit : « comme la vieille femme du clan du Corbeau » retiré parce que la rencontre est facultative. Si l'enfant la fait toujours, à remettre.
6. Jeu du puits : j'ai tranché pour « est délivré celui qui connaît le nom ; à plusieurs, le lanceur ». L'autre lecture (celui qui dit le nom sort) contredisait la sortie de la petite fille.
7. III_Q_lac_touche : « yeux rouges » lu comme « rougis par les larmes ». Si c'était voulu autrement, à reprendre.

### Lot 11
1. **III_p_place, paragraphe de la flaque (bug laissé, à trancher).** Le paragraphe « Là où tu as rendu quelqu'un au monde, il n'y a plus qu'une flaque… » est conditionné par `any: [done(...)]` (un verdict rendu, quel qu'il soit) : il s'affiche aussi quand on n'a fait que *garder* des fondateurs dans la glace. Correctif en une ligne : remplacer `done` par `rendu` dans ce `if` (`{ if: { any: FOUNDERS.map(rendu) }, … }`). Je ne l'ai pas appliqué : la consigne interdit de changer la logique d'un `if` existant.
2. **III_r_signer (relais)** : j'ai réécrit le second nom en « croix pour celui que tu ne connais pas » parce que l'enfant ne s'appelle Aëlan qu'à III_v_ardael, après le relais. Si l'intention était que le relais soit visitable après Valcendre, il faudrait plutôt un retour vers la plaine ; dans ce cas, rétablir l'ancien texte.
3. **III_t_cerf** : le garçon dit encore « Il a pleuré, après. Je l'ai vu, en tombant. Il a pleuré sur moi », alors que III_p_cerf2 dit qu'après le premier coup « c'est plus facile » et que Raoul ne pleure qu'à l'aube, sur un muret. J'ai laissé (les deux peuvent se lire ensemble), mais c'est à la limite.
4. **Anachronismes dans des comparaisons, laissés** (les « comme… » ont déjà été revus) : III_a_moulin « comme des gens qui attendent la diligence » ; III_p_courrier_cheval, le cheval s'appelle « Domino… à cause des taches » (les dominos sont postérieurs au Moyen Âge) ; III_t_barque « Une seconde » (unité moderne). À changer si souhaité : « le coche », un autre nom de cheval, « un instant ».
5. **Pensées du héros qui font le lien**, laissées car ce sont des scènes de révélation et non des rappels : III_v_noms (`nord:chant_lu` : « Tu penses à la grande paroi de la grotte des Corbeaux… ») et III_p_plume3 sans Hylas (« Tu penses au caveau… Quelqu'un l'a ouvert »). À supprimer si la règle « pas de clin d'œil » doit s'appliquer aussi là.
6. **III_a_givre, variante sans pomme** : j'ai inventé « l'odeur du pain qu'on vous a porté ce soir » (aucun autre repas n'est garanti à Valcendre). À remplacer par un autre souvenir si préféré.
7. **III_r_salle** : j'ai ajouté une ligne de retour (`again`) : « La salle, le feu, l'odeur de soupe aux poireaux. Maître Anthelme essuie son comptoir, autour du registre resté ouvert. »
8. **III_marcheurs** : « un enfant qui pousse un cerceau » et la « robe à paniers » ; j'ai seulement retiré les paniers.

### Lot 12
1. **IV_Q_lisse** : le paragraphe « Tu sais où elle est, la cloche. Sous un clocher de Bourdonne… » fait le lien à la place du lecteur. Je l'ai **laissé** : il est conditionné à ce que le joueur a lui-même fait à l'acte III, c'est une retombée plus qu'un indice. À retirer si la règle « pas de clin d'œil » s'applique aussi aux retombées.
2. **IV_br_reine** (`isaure:brisee`) : « Tu sais ce que c'est : la feuille d'Aymeric… que vous lui avez rendue ». Même cas, **laissé**.
3. **IV_Q_baudoin** : j'ai décidé que Baudoin ne reconnaît que Hylas. Si l'intention était que l'enfant l'ait rencontré lui aussi, revenir à `if: { has: "baudoin:sait" }` seul.
4. **IV_Q_thibaut** (`sort=livre`) : « Tu le reconnais » **laissé**, car l'enfant a pu le voir dans la colonne des prisonniers (acte1_enfant_b l. 542) ; changé seulement pour `sort=libre`.
5. **IV_br_puits** : j'ai choisi le vouvoiement pour Hersende (3 répliques contre 1). Si elle doit tutoyer l'enfant, inverser.
6. **IV_Q_baudoin_parti** : « et il ne remettra jamais les pieds à Pallanche » est une anticipation du narrateur, **laissée** (ce n'est pas un indice).
7. **IV_Q_ylva** : Ylva dit « Corbe dit que les morts ne veulent pas qu'on les venge », ce que Corbe ne sait que si elle est allée dans l'Outre-Blanc ou si l'enfant le lui a raconté (IV_clan_restee_recit). **Laissé**, cas rare.
8. **IV_br (hub)** : plusieurs libellés fixent une heure (« à minuit », « cette nuit ») dans un carrefour où l'on revient à toute heure. **Laissé** : les scènes posent elles-mêmes leur heure, et un tag `when` les rendrait inaccessibles de jour.

### Lot 13
1. **Septième couplet de Lisandre** : dans `IV_C_lisandre_couplet` elle promet de le chanter « demain », mais `IV_l_pont2` ne le montre pas (le drapeau `lisandre:chanson_lisse` ne donne que +10 au test). Je n'ai rien ajouté, pour ne pas écrire de contenu nouveau. Un paragraphe `with: "lisandre", after: "lisandre:chanson_lisse"` serait le bienvenu.
2. **Calendrier** : « le quatorze brumaire » (pont de Lisse) côtoie « juillet » (`IV_l_mordace`, `IV_l_soir`). Laissé tel quel, les deux sont employés dans tout le scénario.
3. **`IV_cv_rodric`** : « Ils ne l'avaient pas entendu depuis vingt ans » alors que le pont a brûlé il y a trois ans. Laissé : ces vieux soldats peuvent avoir quitté le pays depuis vingt ans.
4. **`IV_l_mordace`** : « Tu es le seul des deux côtés. » Je comprends « le seul à être des deux rives » ; laissé tel quel faute de certitude.
5. **Jour / nuit** : aucun fichier du scénario n'emploie encore `when`. Je n'ai pas posé `when: "day"` sur `IV_f_pre` ni `IV_m_portier` (un tag de passage rendrait la scène inaccessible la nuit, effet de bord que je ne peux pas vérifier sans le build). À décider globalement.
6. **`IV_cv_prisonniers`** : j'ai porté la captivité de Gilles à « plus de trois ans » pour suivre la date du pont. Si une autre « nuit du pont » était visée, à rétablir.
7. **`IV_N_gaspard`** : j'ai ajouté un paragraphe (Gaspard remet les trois noms) pour que `IV_N_sortie` tienne. C'est le seul ajout de fait narratif du lot.
8. **`IV_k_leif`** (variante `nord:course`) : Leif parle de Corbe à la troisième personne (« Elle me l'a laissé en partant ») même si elle est présente. Laissé ; une variante `with: "corbe"` serait plus juste.

### Lot 14
1. **Jour de la nuit dans la tour.** Pie dit « Mardi. Minuit et demi », le chariot de la lingerie monte « jeudi, à trois heures », Anseau sonne « cette nuit-là ». Les entrées s'excluent, donc rien n'est faux, mais le plan aligne mardi et jeudi côte à côte. Laissé tel quel.
2. **La Veuve et le « vieux au caveau ».** Quand Hylas accompagne le groupe, la Veuve annonce qu'on garde « un vieux au caveau, un greffier, pour le livre noir » ; au caveau, il n'y a personne. Laissé : je ne sais pas si c'est un fil abandonné ou une fausse rumeur voulue.
3. **Aubin a cédé « le tour de main »** (`IV_Q_bleu_aubin`), et pourtant ses mains savent encore faire le bleu (`IV_Q_bleu_cahier`, `IV_Q_bleu_cuve`). Laissé ; changer le second souvenir cédé réglerait la contradiction.
4. **Indice de `IV_r_sud`.** « On ne peut faire oublier que ce qu'on a écrit » est dit par le narrateur, puis redit par Hylas s'il est là. Gardé, parce que c'est le seul endroit où l'indice est donné quand Hylas est absent.
5. **`IV_Q_hospice_linge`.** J'ai retiré le paragraphe `pie:chariot` (« Tu te souviens que Pie t'a parlé de ce chariot »). Il récompensait un détail de l'acte I ; à remettre si ce rappel est voulu.
6. **`IV_tour_nuit`** : « La porte de service, où Pie attend » s'affiche aussi quand Pie a rejoint le groupe (`IV_pal_pie_petite`). Laissé.
7. **`IV_tour_caveau`** : « Tu les as dits sur la place de Valcendre » et « Il brûlait celles de Corbe » (`IV_tour_caveau_pris`) s'appuient sur des scènes que je n'ai pas retrouvées telles quelles. Laissé.
8. **`IV_moutier_arrivee`** : « les Veilleurs les ont pris » (les réfugiés), dans un récit où « prendre » est le verbe de la neige. La chronique dit aussi « Nous les prenons » : je l'ai lu comme voulu.

### Lot 15
1. `E4_fanchon_nouvelles` : la plaisanterie voulue était-elle « trois fausses, une vraie, sans dire lesquelles » ? Appliqué : oui (« Trois sont fausses. Une est vraie. » / « laquelle »).
2. `acte5_bal.js` : le bal est très XVIIIe (Colombine, Arlequin, Grand Turc, Dame de Pique, hôtel particulier). J'ai seulement retiré « carrosses » et « plantes en pot » et gardé les masques, qui portent la scène. À reprendre si le ton doit rester médiéval tardif.
3. `IV_sv_temple` : j'ai retiré « la poussière danse dans le soleil » plutôt que d'en faire un paragraphe `when: "day"` à part. À rétablir sous `when: "day"` si l'image compte.
4. `V_e_dortoir` : dortoir placé « tout en haut, sous les combles » (au lieu de « au troisième »). Si le dortoir doit rester au troisième, il faut alors corriger « elles écrivent, en dessous » et le libellé de `acte5_tour.js:102`.
5. `IV_Q_tap_cv` / `IV_Q_tap_cv_rate` font agir Rodric sans tag : je n'ai rien posé, car le passage exige `IV_cv_rive`, qui suit le ralliement de Rodric, et aucun `leave: "rodric"` n'existe aux actes IV et V. À taguer si Rodric peut un jour quitter la troupe.
6. `V_e_chapelle` (paragraphe `hy:mur=dit`) et `V_t_nourrir` (« Tu as déjà vu un Glaneur manger autre chose ») rappellent un indice déjà donné. Laissés : ils ne s'affichent que si le joueur a lui-même fait la découverte, et le second justifie le choix qu'il vient de prendre.
7. `IV_sv_tess` : « Tu lui racontes un peu de ton année à toi. Trois jours. » Lu comme « ton année a duré trois jours dans l'Outre-Blanc » et laissé tel quel.

### Lot 16
1. **`V_r_relais`** : le paragraphe sous `iii:courrier` rappelait l'indice de l'acte III (« Tu penses à un pli blanc, dans une sacoche, avec une empreinte de pouce »). Choix appliqué : rappel retiré, il reste « Le pli ne viendra pas. Il n'y a plus personne pour l'attendre, de toute façon. » À rétablir si ce souvenir est voulu.
2. **`V_t_bocaux`** : le passage ne se visite qu'une fois (caché dès qu'il est vu) et ses trois choix ramènent tous à la salle. Avec Ysolde, il faut donc choisir entre lui laisser ouvrir son bocal et prendre celui de Mordace. Voulu ? Non modifié (cibles et `hide` interdits).
3. **`V_q_bout` / `V_q_file`** : « Revenir sur la place » au milieu de la queue ferme la quête pour de bon, puisque `V_q_bout` est caché une fois vu. Voulu ? Non modifié.
4. **`V_t_scriptorium`** : le choix « Redescendre chercher leurs noms, au deuxième » s'affiche même sans Linette ni Hylas, seuls à savoir où est le registre gris ; et il s'affiche aussi quand Linette est là (le commentaire du fichier dit « quand elle n'est pas là »). Non modifié.
5. **Épilogue et fins `roi` / `cession`** : plusieurs paragraphes supposent que le héros vit en bas (« Givre dort au pied de ton lit », « Tess t'a écrit », la pelote qui tient chaud) alors qu'en `fin:roi` il reste à Valcendre ; et en `fin:cession` le monde a tout oublié, alors que des dizaines de paragraphes parlent de gens qui se souviennent. Choix appliqué : rien, sauf le cas Orsans / `fin:cendres`. Trancher demanderait de conditionner beaucoup de lignes.
6. **`V_t_cessions`** : « Il y a des étiquettes que tu connais. » porte `once: true` (la salle se revisite depuis les étages). Le reste de la description se répète à chaque retour ; je n'ai pas scindé en `first` / `again`.
7. **`V_ville`, `V_r_chemin`** : scènes de nuit et d'aube écrites en dur. Je n'ai posé aucun `when`, faute de savoir si l'horloge du moteur tourne encore à l'acte V.
8. **Épilogue, deux conditions `all[present pie, present linette]` et `all[present pie, not present linette]`** : laissées en `if` (le brief ne demande la conversion que pour les formes simples). Elles s'écriraient `with: ["pie", "linette"]` et `with: "pie", without: "linette"`.

### Lot 17
1. Calendrier acte IV → acte V : j'ai compris que l'acte V suit l'acte IV de quelques jours (V_route enchaîne sur la Lisse ; « depuis hier soir »). J'ai donc corrigé « dicté un an plus tôt » (V_v_ecrivain_lire) et « depuis l'an dernier » (V_v_cimetiere), qui renvoient à des événements de l'acte IV. Si une année s'écoule vraiment entre les deux actes, ces deux retouches sont à annuler. Choix appliqué : quelques jours.
2. IV_ps_ronde (« Le soir, le sergent roux fait sa ronde ») : faut-il un `when: "night"` ? Choix appliqué : pas de tag, je lis « Le soir » comme une ellipse (on attend le soir), pour ne pas rendre la scène inatteignable.
3. E3_horloge : une « horloge de parquet » à balancier, qu'on remonte à la clé pour huit jours, est un objet du XVIIe siècle. Toute la scène (trois passages) repose dessus. Choix appliqué : laissée telle quelle ; à trancher (horloge de clocher ? sablier ?).
4. V_v_baudoin : « Je l'ai pris tous les matins pendant un an pour ne pas passer devant lui. » — « lui » n'a pas d'antécédent dans le passage (le Greffier-Majeur ?). Choix appliqué : laissé, faute de certitude sur la personne.
5. V_v_jardin : noms latins linnéens (*Mentha piperita*) et « à l'encre des herbiers » : anachronisme léger, laissé car il porte la scène.
6. V_v_veuve : voir « Bugs hors de mes fichiers » ; texte laissé tel quel.
7. V_v_fillette : quand l'épreuve « Secouer sa mère » échoue, on arrive sur « Dans tes bras » sans un mot sur l'échec. Choix appliqué : laissé (pas de flag pour distinguer les deux arrivées, et interdiction de toucher aux fx).
8. E2_ermite_noms (« Tu ne sais pas écrire. Quelqu'un écrit pour toi. ») et E2_source_chaude (« Tu y as été baignée bébé ») supposent Corbe en tête de l'équipe nord. Choix appliqué : laissé, l'en-tête du fichier dit que Corbe mène.

## Partie 4. Notes complètes pour le moteur

La synthèse est en 1.2 et 1.3. Ci-dessous, le détail par lot, avec les passages où chaque motif apparaît.

### Lot 1
- **« Première fois / déjà fait » sur un autre passage.** `first` / `again` ne valent que pour le passage courant. On a souvent besoin de « avant/après avoir vu le passage X » (ex. `CO_k_tresses_coupe` avant ou après `CO_veillee`, `EN_Q_fontaine_voeu` avant `EN_soir`). Aujourd'hui il faut qu'un drapeau existe. Proposition : `after` / `before` acceptent aussi un id de passage (vu / pas vu). 2 cas dans ce lot, sans doute beaucoup ailleurs (tous les `hide: { seen: "X" }`).
- **Choix de carrefour à usage unique.** Tous les choix de `CO_camp` (9 sur 10), `CO_V_ville` (5 sur 6) et des hubs voisins portent `hide: { seen: "<cible>" }`. Le tag `once: true` sur un choix fait déjà cela d'après le guide : conversion mécanique possible (non faite, la consigne étant de laisser les `hide` des choix).
- **Retour au carrefour.** Les constantes `BACK`, `PI_BACK`, `CO_BACK` et une trentaine de choix « Revenir au camp / dans la cour / à la cour / sur la place » sont écrits à la main dans ce lot. Le moteur pourrait ajouter seul le retour au hub d'origine pour une scène annexe (propriété `from: "CO_camp"` ou retour automatique au dernier hub), avec le libellé tiré du lieu.
- **Coût en or raconté.** Quand un test raté retire de l'or (`lose.fx.gold`), rien ne l'affiche dans le texte ; l'auteur doit penser à l'écrire (oublié dans `PI_Q_course_perdu`). Le moteur pourrait afficher une ligne de bilan (« −3 pièces ») après toute perte.
- **Heure d'une scène.** Les scènes annexes disent « ce matin », « le soir », « à la nuit tombée » (`CO_Q_tambour`, `HY_Q_page`, `CO_veillee`, `CO_Q_renne_nuit`) sans que l'horloge suive. Un tag de passage du type `sets: "night"` (la scène amène l'heure au lieu de l'exiger) éviterait la contradiction avec le hub au retour.

### Lot 2
1. **Un passage cible ne sait pas par quel choix on arrive.** Quand deux choix différents mènent au même passage, le texte ne peut pas s'adapter sans drapeau posé à la main. Vu 5 fois dans ce lot : `EN_ruches2_ok` (enfumer / nommer), `EN_pim_chante` et `EN_pim_echec` (chanter / dire), `EN_roue_rate` (bras / perche), `EN_nuit_vu` (dedans / dehors), `EN_grenier_force`. Un tag du genre `via: "<to ou étiquette du choix>"` sur un paragraphe, rempli par le moteur avec le dernier choix pris, supprimerait ces drapeaux.
2. **Carrefours : description d'arrivée répétée à chaque retour.** `EN_place`, `EN_village`, `EN_pontsaule`, `EN_grives` commencent par une description longue sans tag. Règle possible : `build.js` signale tout passage `hub` ou `routes` dont un paragraphe de plus de N caractères n'a ni `first`, ni `again`, ni `once`.
3. **Variantes qui ne s'excluent pas.** `EN_aube3` affichait deux paragraphes sur le même sujet parce que deux drapeaux vrais ensemble portaient chacun le sien. Une forme `{ oneOf: [ {…}, {…} ] }` (le premier paragraphe valide gagne) éviterait les `before` ajoutés à la main. Environ 15 groupes de variantes dans ce lot (`tess:viens` / `tess:pim` / aucun, `pim:nom` / non, `sauve:*`).
4. **Objet ou événement supposé par le texte.** `EN_aube3` et `EN_pallanche` citaient la lettre sans la vérifier. `build.js` pourrait signaler un paragraphe sans condition qui contient le nom d'un objet `keep` que le héros peut ne pas avoir.
5. **Première ligne du texte identique au libellé du choix pris** (`EN_cloche`) : contrôle simple pour `build.js`.
6. **Libellé de choix et lieu d'arrivée** : « Redescendre au village » qui mène à un passage intitulé « La cuisine du moulin ». Dans une scène, le moteur n'affiche pas la destination ; `build.js` pourrait au moins comparer le libellé au titre de la cible.

### Lot 3
- **Choix de carrefour à usage unique** : `hide: { seen: "<cible>" }` répété sur presque tous les choix de hub (10 dans HY_tour, 10 dans LI_cour, 4 dans HY_V_ville, 11 dans EN_place). Le tag `once: true` sur le choix existe déjà ; une règle « dans un hub, un choix vers une scène déjà vue disparaît » ou une conversion en masse supprimerait ces conditions.
- **Bouton de retour au carrefour** : constante `BACK = [{ label: "Revenir…", to: "<hub>" }]` redéfinie dans 5 de mes 10 fichiers, et le même choix écrit à la main ailleurs (une vingtaine de passages du lot). Le moteur pourrait ajouter seul le retour au hub d'origine quand une scène n'a pas de choix.
- **Variantes par valeur de flag** : séries `if: { has: "x=a" }` / `"x=b"` / `"x=c"` (HY_jour et HY_noms sur `ysolde:voie`, HY_archives sur `pie:choix`, HY_fin sur `hylas:voie`, LI_fin sur `lisandre:ballade`). Rien ne vérifie que toutes les valeurs sont couvertes : un tag `case` ou un contrôle dans `tests/build.js` aurait signalé HY_noms.
- **`after` / `before` sur un passage vu** : `if: { seen: "AUTRE" }` et sa négation reviennent souvent (EN_k_doyenne_neige, HY_archives, et mes ajouts dans HY_mordace, HY_baudoin_sait, CO_L_perdus). Si `after` / `before` acceptaient un id de passage, ces paires deviendraient des tags. De même les paires `has` / `not has` (8 dans le lot) sont déjà exprimables par `after` / `before`, que le brief demandait de ne pas convertir.
- **Paragraphes qui supposent un passage facultatif** : cinq des bugs corrigés sont du même type (le texte cite ce que le héros a vu ou fait dans une scène de hub qu'il a pu sauter). Le build pourrait lister les passages atteignables sans avoir vu une scène dont ils citent le nom propre ou le flag.
- **Heure dans un hub** : HY_tour propose « Ta cellule, le soir », « Le dortoir, la nuit » puis « Ce soir, après complies, Mordace » ; LI_cour mêle « ce matin », « ce soir », « cette nuit ». Aucun avancement d'heure n'est posé ; un `fx.time` ou un tag `when` sur ces choix laisserait le moteur les ordonner.

### Lot 4
- **Monnaie.** Le scénario parle en liards, sous et écus, le moteur n'a qu'un `gold`. Dans mon lot : 2 liards = `gold: -1` (brocante, 3 fois), 6 sous = `gold: -6` (Corneille), 2 sous = `gold: -2` (veuve de soldat), « tes deux écus » = `gold: -2` (tripot, corrigé en « ta mise »), 3 sous = `gold: 3` (Bureau), et la Veuve donne `gold: 15` pour « réduire ta dette ». Une unité déclarée par l'histoire (et son affichage) éviterait ces écarts.
- **Choix payés en vivres.** E_mendiant « Lui donner du pain » fait `food: -1` sans condition. Le moteur grise déjà un choix à `gold` négatif ou à `drop` impossible ; même règle à étendre à `food` (et à tout coût).
- **Texte de retour.** PI_bureau et PI_sonneur sont des scènes où l'on revient par un sous-passage : il a fallu taguer à la main l'arrivée en `first`. Un tag de passage du genre « au retour, ne redire que les paragraphes marqués » ou un `first` par défaut sur le premier paragraphe d'une scène éviterait l'oubli (2 passages sur 51 dans acte1_pie.js, sans doute fréquent ailleurs).
- **Variantes exclusives.** Les paires `before: X` / `after: X` sur deux entrées voisines portant le même `if` reviennent 8 fois dans mon lot. Le moteur a déjà `else` sur une entrée de texte : le documenter dans GUIDE-TAGS.md (il n'y figure pas) permettrait d'écrire une seule entrée.
- **Par où l'on est arrivé.** Trois textes dépendent de la porte prise (`seen: "PI_sceau"`, `seen: "PI_linge"`, échec de PI_scelleurs). Un tag `via: "PASSAGE"` (dernier passage ou passage vu) serait plus lisible que `if: { seen }`.
- **Liste des six.** acte1_nuit.js tient à la main la liste `ALL` des douze compagnons pour `away`. Un `away: "all"` du moteur éviterait de l'oublier quand un compagnon s'ajoute à base.js.

### Lot 5
- **`if: { has: "drapeau" }` / `if: { not: { has } }` sur un paragraphe = `after` / `before`.** Le moteur lit les deux dans `s.flags`. Dans mon lot : 14 paragraphes d'acte1_ysolde (YS_cour ×4, YS_hospice, YS_croise ×5, YS_rodric, YS_pallanche, YS_fin ×2) et 1 d'acte2_annexes. La consigne les laissait en `if` ; une conversion mécanique sur tout le scénario serait sûre pour la forme simple.
- **Deux choix jumeaux pour un effet conditionnel** : YS_croise a deux choix au même libellé (« Remonter en tête de la colonne ») avec des `hide` opposés, seulement pour poser un drapeau dans un cas. Un `fx` conditionnel sur un choix (`fx: [{ after: "x", flag: … }]`) éviterait le doublon. 1 cas dans mon lot.
- **Scènes annexes qui consomment du temps sans le dire** : la scène raconte une nuit entière ou « le lendemain », puis rend la main à un carrefour de jour sans `fx.time`. Dans mon lot : CO_V_ours_libre, CO_V_ours_rate, II_Q_troupe_scene, II_Q_phare_nuit/_barricade/_aube, II_Q_fioles_nuit/_fuite/_non, II_Q_peche_reve/_rien (11 passages). Un tag de passage du genre `takes: "night"` (le moteur avance l'horloge au lendemain matin) remplacerait un calcul à la main.
- **Aides de test impossibles** : `help: [{ if: { present: "x" } }]` avec un héros qui ne peut pas être dans cette compagnie (II_Q_aire). `tests/build.js` pourrait le signaler à partir de l'affectation des équipes.
- **Compteurs dans le texte** : le nombre de prisonniers (118, 119 si Thibaut est livré, 117 après Anselin, 113 après la ruse) est écrit en dur dans 8 paragraphes d'acte1_ysolde. Un compteur d'état interpolé dans le texte (`{n:colonne}`) tiendrait le compte seul.
- **Une présentation de personnage qui dépend du chemin d'arrivée** (YS_rodric_rencontre, atteint par 4 chemins dont un seul présente Rodric) : pas de règle générique évidente, mais `tests/build.js` pourrait lister les passages à plusieurs entrées dont le texte commence par un pronom.

### Lot 6
- **Texte selon l'issue d'un combat.** II_N2_eboulis_combat envoie victoire, défaite et fuite vers le même passage II_N2_eboulis_apres, qui décrit le Glaneur réduit en poudre : faux après une fuite ou une défaite. Le scénario n'a aucun moyen de le savoir sans poser un flag à la main dans `win`. Un tag générique du genre `outcome: "win" | "lose" | "flee"` (issue du dernier combat ou du dernier test) sur un paragraphe réglerait ce cas et ceux du même type (dans ce lot : II_G_fuite, atteint par fuite, défaite ou saut par la fenêtre ; II_G_fin_ouverte, atteint par choix ou par test raté).
- **Paragraphe « entrée » d'un carrefour.** II_G_pont, II_N_camp, II_N2_grotte écrivent tous à la main « seulement à la première visite ». C'est maintenant `first: true`, mais II_N_camp garde trois `if: { all: [{ not: { seen: "II_N_camp" } }, { has: … }] }` que la consigne ne permettait pas de convertir : `first: true` + `if` sur le flag ferait la même chose (le moteur combine déjà tags et `if`). Conversion mécanique possible sur toute l'histoire.
- **Qui sait lire.** La constante READER (`any` de cinq `present`) est recopiée dans acte2_moutier2.js et acte2_nord2.js (et sans doute ailleurs). Un trait de personnage dans base.js (« sait lire ») et une condition générique `{ someone: "lit" }` éviteraient la liste à la main.
- **Scènes « parler avec X » autour d'un feu.** II_N_feu, II_N2_nuit, II_N5_col (via `col()`) construisent à la main une liste de choix `hide: { not: { present: x } }` par compagnon. Le tag `with` posé sur le passage cible suffit déjà à masquer le choix (GUIDE-TAGS) : les `hide` sont redondants et pourraient être remplacés par `with` sur les passages.
- **`else` sur un paragraphe.** Le moteur accepte `else` (texte de repli quand les tags ne tiennent pas) mais GUIDE-TAGS.md ne le documente pas. Je m'en suis servi une fois (II_C5_hylas_a).

### Lot 7
- **Scène de feu de camp** : `II_N3_soir`, `II_N4_soir`, `II_N5_feu` (3 fois dans mon lot, même schéma dans les veillées) : un passage-pivot, un choix « Parler avec X » par compagnon, chacun masqué à la main par `hide: { any: [{ not: { present: "x" } }, { seen: "cible" }] }`, et le texte d'ambiance se réaffiche en entier à chaque retour. Une règle générique : `with: "x"` + `once: true` sur le choix (déjà possible, à confirmer que `once` sur un choix couvre le cas), et un tag de passage du type `camp: true` qui n'affiche le texte d'arrivée qu'à la première visite sans laisser la page vide.
- **Choix de carrefour vers un compagnon** : `II_N3_cloitre` (6 choix), `II_N4_cirque` (6), `II_N5_col` (6) répètent `hide: { any: [{ seen: "cible" }, { not: { present: "x" } }] }`. Si la cible portait `with: "x"` comme passage (distribution de scène), le moteur masquerait déjà le choix ; resterait `once: true`. 18 occurrences dans mon lot.
- **Drapeaux à valeur** (`nord:livre=pris|brule|prieur`, `nord:rendu=…`, `nord:geant=tue|fui|dort`, `corbe:voie_bran=…`) : le moteur les traite comme des chaînes quelconques. Un vrai type « état » (`set: { "nord:rendu": "clan" }`, condition `is` / `isSet`) permettrait d'écrire « aucun nom rendu » sans énumérer toutes les valeurs (j'ai dû le faire à la main dans `II_N4_soir_enfant`) et garantirait l'exclusivité.
- **Variantes qui ne couvrent pas tous les cas** : `C2_carrefour` a cinq textes d'intermède conditionnés par l'avancement des deux compagnies ; quand une compagnie a un chapitre d'avance (nord 2 fait, sud 2 non, etc.), aucun ne s'affiche et il ne reste que « Quelle compagnie suis-tu ? ». Un contrôle de build « groupe de variantes exclusives non exhaustif » le signalerait (même défaut trouvé dans `II_N4_soir_enfant`).
- **Aides de test sur un compagnon** (`help: [{ if: { present: "rodric" }, v: 20 }]`) : 11 occurrences ; une forme `with: "rodric"` dans `help` alignerait l'écriture sur les tags.
- **Savoir lire** : `READER` dans acte2_nord_ext.js énumère à la main les compagnons lettrés (`hylas`, `pie`, `ysolde`, `enfant`, `linette`). Une propriété de personnage (`reads: true` dans base.js) et une condition `someone: "reads"` seraient génériques.

### Lot 8
1. **Conversations de veillée rejouables.** Motif : un passage « table » avec des choix « Parler avec X » menant à un passage court qui donne `conf` puis revient. Vu dans `II_S_nuit` (4 choix), `II_S2_nuit` (6 choix), et, d'après un grep sur « Parler avec Ysolde », dans nord1 à nord5. Le scénario le gère à la main, tantôt par `hide: { seen: … }`, tantôt pas du tout. Règle générique possible : un gain `conf` (ou `ep`) posé par un même choix d'un même passage n'est accordé qu'une fois ; ou un tag de passage du genre `talk: "ysolde"` qui implique `with` + `once`.
2. **Choix « compagnon présent ».** `hide: { not: { present: "x" } }` sur un choix revient à `with: "x"`. 29 choix dans mes fichiers (18 dans acte2_sud1.js, 11 dans acte2_sud2.js : hub `II_S_vasselin`, `II_S_tournoi`, `II_S_porte`, `II_S_nuit`, `II_S2_prep`, `II_S2_nuit`), dont certains combinés à `seen`. Le brief demandait de ne pas toucher aux `hide` des choix ; une conversion mécanique globale serait sûre.
3. **« Déjà vu → caché » sur les choix d'un hub.** `hide: { seen: "<cible>" }` est écrit à la main sur 27 choix (22 dans acte2_sud1.js, presque tous dans le hub `II_S_vasselin` ; 5 dans acte2_sud2.js). Un tag `once: true` sur le choix, ou une option de hub « chaque destination une seule fois », ferait la même chose.
4. **Scène d'arrivée rejouée au retour d'un sous-passage.** `II_S2_palais`, `II_S2_isaure`, `II_S_nuit`, `II_S2_nuit` : j'ai posé `first` / `again` à la main. Le moteur pourrait le signaler dans `s.guards` : passage non-hub revisité dont aucun paragraphe ne porte `first`, `again` ou `once`.
5. **Élision devant un nom.** `hands()` fabriquait « de » + nom. Une aide du moteur du type `{de:ysolde}` → « d'Ysolde » (ou un champ `de` sur le compagnon dans base.js) éviterait les tables locales. base.js contient 5 occurrences de « d'Hylas / d'Ysolde » écrites en dur.
6. **Événement facultatif sans drapeau.** `after` / `before` ne lisent que les drapeaux ; pour dire « si le lecteur a vu tel passage » il faut `if: { seen: … }` (cas `II_S2_nuit_pie`). `after: "@II_S_mouettes"` ou un tag `seen:` serait dans l'esprit des tags.
7. **Issue d'un combat dans le passage suivant.** `E2_bac_passe` sert à la fois après paiement, après victoire sur le passeur et après défaite ; le texte ne peut pas le savoir sans drapeau. Un drapeau automatique « dernier combat gagné / perdu / fui » lisible par `after` réglerait ce cas et sans doute d'autres.

### Lot 9
- **Le « champion » est un rôle, pas un nom.** Sud3, sud4, sud_ext : une quinzaine de paragraphes et quatre libellés disent « ton champion » et sont faux quand Lisandre s'est inscrite elle-même. J'ai écrit les variantes à la main (`if: champ("lisandre")`). Un rôle déclaré (`role: { champion: "ysolde" }`) avec une interpolation `{champion}` et un tag `as: "champion"` éviterait ces doublons.
- **Drapeaux à valeur.** `sud:champion=x`, `sud4:paix=x`, `sud4:demande=x`, `sud4:grace=x`, `sud5:entree=x`, `sud5:fuite=x` : six familles dans ces trois chapitres, traitées comme drapeaux indépendants. Une vraie variable (`set: { "sud:champion": "ysolde" }`) et une entrée de texte à cas (`{ by: "sud:champion", cases: { ysolde: "…", rodric: "…" }, else: "…" }`) remplaceraient les listes de `if` exclusifs (CHAMP_NAME, II_S3_joute1_ok, II_S4_proclamation) et garantiraient qu'aucun cas n'est oublié.
- **Retour dans un passage-carrefour non déclaré.** II_S3_soir n'est pas `hub` mais huit scènes y reviennent ; tout son texte se répète. Le moteur pourrait signaler au build tout passage vers lequel ses propres cibles reviennent et qui n'a ni `first` ni `again`.
- **Test dont les deux issues mènent au même passage sans effet** : II_S4_libre (« Chanter comme à la cour » : win et lose → II_S4_libre_rate), II_S5_escalier (« Ne rien répondre » : win et lose → II_S5_mordace). Le build pourrait le lister.
- **Compagnon nommé dans un texte sans tag.** Le build pourrait chercher les noms des compagnons (Pie, Hylas, Ysolde, Rodric, Linette) dans les paragraphes sans `with` ni `if present`, et les lister comme avertissements (ex. II_S5_linette, II_S3_nuit).
- **Heure d'une scène.** Voir plus haut : un tag de passage `at: "night"` qui *met* l'horloge (au lieu de `when`, qui *filtre*) conviendrait aux scènes de ville qui se passent « ce soir ».
- **Choix réservés à un compagnon** : `hide: { not: { present: "x" } }` sur les choix (sud3 ×3, sud4 ×1, sud5 ×2, plus les `help`) ; non convertis, comme demandé, mais ce sont des `with: "x"` naturels.

### Lot 10
- **Scène d'annexe quittée = quête perdue.** Le motif `hide: { seen: "<entrée>" }` sur le choix du carrefour, avec dans l'entrée un refus qui ramène au carrefour, apparaît au moins 6 fois dans ce lot (carte, forêt, gué, Givre, bêtes, plus chaque cloche de Bourdonne). Règle générique possible : un choix qui ouvre une quête (`questSeen`) reste proposé tant que la quête n'est pas close, et rentre au dernier carrefour interne de la quête.
- **Boucle sans progrès.** Le validateur pourrait signaler un cycle de passages dont aucun choix praticable ne sort ni ne change l'état (cas III_c_sauvelune ↔ III_c_sauvelune_main).
- **Texte de carrefour.** Presque tous les carrefours du lot (III_c_ville, III_e_hameau, III_K_atelier, III_F_bois, III_B_troupeau) écrivent à la main `first` + un paragraphe permanent. Un champ de passage `arrival` / `back` (texte d'arrivée, texte de retour) éviterait les paragraphes d'arrivée qui se répètent.
- **`after` avec « ou ».** Les scènes du guetteur et des jouets devraient s'ouvrir après III_e_langue OU III_e_mere ; le tag ne sait dire que « et ». Un `after: { any: [...] }` ou un `after` acceptant `seen:<passage>` suffirait.
- **Aides de test conditionnées à la présence** (`help: [{ if: { present: "x" }, v: n }]`) : 9 tests dans le lot. Une forme `help: { ysolde: 15, lisandre: 15 }` dirait la même chose en tag.
- **« seul »** : trois textes disaient « tu repars / reviens seul » alors que l'équipe peut suivre. Le validateur pourrait relever « seul(e) » dans un passage `noLead` sans `without`.

### Lot 11
- **Confiance donnée à un absent** : `fx.conf` est appliqué à des compagnons qui peuvent ne pas être là (III_a_veille et III_halte : +5 aux cinq héros quels que soient les présents ; III_a_lisse +15 Ysolde, III_a_linette +20 Pie, III_a_askel +20 Corbe, III_p_cerf_garde −5 / III_p_cerf_rendu +10 Ysolde). 7 passages dans ce lot. Règle générique possible : `conf` ne s'applique qu'aux compagnons présents (ou un `confWith`).
- **Carrefour de tête-à-tête** : III_plaine (6 choix) et III_a_nuit (5 choix) écrivent à la main `hide: { any: [{ seen: cible }, { not: { present: x } }, { not: { seen: prérequis } }] }`. Avec les tags sur les choix cela s'écrirait `with: "x", once: true, after: …` ; il manque seulement un `after` qui accepte « passage vu » (ici le prérequis est `seen: "III_marcheurs"` / `seen: "III_a_veille"`, pas un drapeau ; III_marcheurs pose bien `acte3:marcheurs`, III_a_veille ne pose rien).
- **Choix « une seule fois »** : 19 choix de carrefour de ce lot portent `hide: { seen: <leur propre cible> }` seul (III_plaine 3, III_v_porte 9, III_a_nuit 4, III_r_salle 3), sans compter ceux qui le combinent à une autre condition. C'est exactement `once: true` ; je n'ai pas converti (consigne : ne pas toucher aux `if`/`hide` des choix).
- **Présence par drapeau** : III_reveil et III_halte testent `has: "rupture:avec:x"` au lieu de `with: "x"` (10 paragraphes). Dans III_reveil c'est nécessaire (le `awayUnless` est dans le même passage) ; dans III_halte, `with` suffirait.
- **Texte de retour d'une salle** : III_r_salle n'est pas un `hub` mais on y revient trois fois ; sans tag, tout le texte d'arrivée se rejouait. Le moteur pourrait signaler (garde) un passage non-hub revisité dont aucun paragraphe n'est `first`/`again`.
- **Variantes « tout / rien / mélange »** sur une liste de drapeaux (III_p_parole : tous rendus, aucun rendu, entre les deux) : écrit avec trois `if` imbriqués ; un tag du type `after: {all|any|none: [...]}` éviterait l'erreur relevée dans III_p_place (voir Questions).

### Lot 12
- **« Tu le reconnais » selon le héros qui a vécu la scène.** Les drapeaux posés dans un chapitre solo de l'acte I (`baudoin:sait` par Hylas, `thibaut:sort=…` et `ys:recrue=…` par Ysolde, `ysolde:perrine`) sont lus à l'acte IV comme si « tu » (l'enfant) les avait vécus. 4 passages dans ce lot (IV_Q_baudoin, IV_Q_thibaut, IV_br_recrue, IV_br_puits). Un tag du genre `witness: "hylas"` (= le drapeau a été posé par ce héros ET il est présent), ou un drapeau qui mémorise son auteur, éviterait d'écrire `with` + `if` à la main.
- **Combiner `first` avec une condition.** IV_clan_fin écrit quatre fois `{ all: [{ not: { seen: "IV_clan_fin" } }, …] }`. `first: true` + `if` marche déjà dans le moteur ; je n'ai pas converti (forme non listée dans le brief), mais c'est mécanique.
- **Compagnon présent mais muet.** `corbe:iv=sans_nom` : Corbe est dans le groupe et ne parle pas. Tout paragraphe `with: "corbe"` qui la fait parler devient faux (2 cas dans ce lot : IV_clan_fin, IV_Q_ylva_attente ; sans doute d'autres en actes IV et V). Un état de compagnon (« muet ») que `with` saurait exclure, ou un tag `speaks: "corbe"`, réglerait tout d'un coup.
- **`rupture:avec:x` employé comme synonyme de `present: "x"`** (IV_br_fort, IV_cv_rive, IV_clan : 6 paragraphes et 5 choix). Vrai tant que personne ne quitte le groupe entre la chute et la scène ; un `with` serait plus sûr, mais il faut alors une variante `without`.
- **Carrefours de fait** : un passage vers lequel plusieurs passages « reviennent » (IV_clan_fin, IV_Q_odon) pourrait être traité comme un hub par le moteur (texte d'arrivée non répété) sans que l'auteur ait à écrire `seen` sur lui-même.

### Lot 13
- **« Parti / revenu d'un sous-passage »** : `IV_l_mordace` (retour par « Reposer la plume ») rejouait toute sa scène. Le motif est fréquent dès qu'un choix ramène au passage précédent. Règle possible : le moteur signale au build tout passage non-hub qui peut être revu et n'a ni `first` ni `again`.
- **Page entièrement conditionnelle** : `IV_l_pont2` (12 paragraphes, tous sous condition). Le moteur rattrape avec la description du lieu, ce qui tombe à plat au sommet de l'acte. Le build pourrait lister ces passages comme une faute, pas seulement à l'exécution.
- **Compagnon cité dans une chaîne sans tag** : 4 cas dans ce lot (Rodric ×3, Corbe par ricochet). Un contrôle de build simple : tout paragraphe sans `with` qui contient le nom d'un compagnon suivi d'un verbe d'action, dans un passage où sa présence n'est pas exigée par le choix d'entrée.
- **Présence héritée du choix d'entrée** : les chapitres `IV_C_*` sont gardés par `hide: { not: { present: x } }` sur le choix du carrefour. Un `with: "x"` posé sur le passage entier dirait la même chose en un seul endroit (le guide le prévoit) et dispenserait de ces `hide` écrits à la main : 7 choix dans `IV_br` et `IV_pal`, plus `IV_cv_rodric`.
- **`hide: { seen: "<cible>" }` sur les choix de carrefour** : 6 fois dans `IV_cv_camp`, 4 dans `IV_N_galeries`. C'est exactement `once: true` sur le choix.
- **État d'ambiance** (les tambours battent ou non) : géré à la main par des `if` croisés dans 4 passages de `acte4_lisse.js`. Pas de règle générique évidente ; noté pour mémoire.
- **Deux entrées, un seul texte** : `IV_cv_prisonniers_reste` reçoit l'échec d'un test et un choix direct, sans drapeau pour les distinguer. Un tag du genre `via: "lose"` (ou « arrivé par tel choix ») éviterait d'écrire un texte neutre.

### Lot 14
- **Quelqu'un est « dans la scène » sans être dans le groupe.** Pie (porte de service, fenêtre du scriptorium, déversoir), Hylas au caveau : le scénario code la présence par des drapeaux (`rupture:avec:pie`, `pal:pie_indice`, `HYLAS_LA`) parce que `with` ne connaît que le groupe. Une dizaine de paragraphes dans acte4_pallanche.js. Un tag du type `here: "pie"` (personnage posé dans un lieu par un `fx`) éviterait les trios `with` / `without + after` / `without + before`.
- **`else` sur les tags.** Presque toutes mes variantes vont par paires `after` / `before` ou `with` / `without` avec le même texte à un mot près (9 paires dans ce lot). Le moteur lit déjà `else` sur une entrée de texte : à documenter dans GUIDE-TAGS.md.
- **Carrefours à lieux « vus une fois ».** `IV_pal`, `IV_ps`, `IV_moutier`, `IV_ps_auberge` : 46 choix portent `hide: { seen: "<cible>" }`. Un tag sur le choix (par exemple `visit: "once"`) le dirait, et le moteur pourrait signaler une quête laissée ouverte derrière un lieu fermé (cas du sergent).
- **Choix d'un compagnon dans un carrefour.** `hide: { any: [{ seen: X }, { not: { present: "pie" } }] }` revient 8 fois dans `IV_pal` et `IV_moutier` : c'est `with: "pie"` + `once: true`, convertible mécaniquement (non fait : la consigne laisse les `hide` des choix).
- **Coût et texte.** `IV_pal_ecrivain_garde` annonçait la gratuité sous un `fx.gold: -1`. Le build pourrait signaler un texte cible contenant « ne te fait pas payer » / « gratuit » derrière un choix payant.
- **Combat et texte.** Le nombre d'ennemis du texte (« quatre piquiers ») ne suivait pas `combat.enemies` (2). Un jeton `{ennemis}` ou une alerte du build suffirait.
- **Paragraphe mort.** `IV_moutier` : « Vous êtes prêts à partir. » dépend de `iv:nord_fini`, posé par le choix qui quitte le moutier sans retour (`r_iv_sud`, `twoWay: false`). Le build pourrait lister les paragraphes dont la condition n'est jamais vraie dans les parties simulées.

### Lot 15
- **Veillées et scènes de compagnon depuis un carrefour** : 11 choix (acte4_brenne, acte4_pallanche, acte4_retour) écrivent `hide: { any: [{ seen: X }, { not: { present: "c" } }] }`. Un `with: "c"` posé sur le passage (la « distribution ») plus `once: true` sur le choix dirait la même chose. Même motif dans `IV_sv_place` (10 choix cachés par `seen` de leur cible) et `V_ar_salle` (4 choix) : une règle « un choix de carrefour vers une scène déjà vue disparaît » ou `once` éviterait ces `hide`.
- **Aides de test** : `help: [{ if: { present: "x" }, v: n }]` revient 25 fois dans ce lot. Une forme `{ with: "x", v: n }` serait cohérente avec les tags.
- **Le temps raconté** : plusieurs passages disent « jusqu'au soir », « il fait nuit », « au matin » (`IV_sv_temple_lire`, `IV_sv_linteaux_peints`, `IV_sv_pierre_soir`, `IV_sv_cimetiere_ok`, `IV_sv_tess`, `IV_Q_tap_esq_ok`, `IV_Q_tap_fin`) sans que l'horloge du moteur avance. Un effet `fx: { until: "night" }` (ou `"dawn"`) garderait l'heure du moteur d'accord avec le texte, et les tags `when` des passages suivants seraient justes.
- **Variantes par état à trois valeurs** : Sauvelune a trois états (rendu / moulin / vide) écrits avec des constantes `RENDU`, `MOULIN`, `VIDE`, `FAMILLE` recopiées dans 4 fichiers. `after` / `before` ne suffisent pas pour « ni l'un ni l'autre ». Un tag `state` (ou des `before` multiples, que le moteur accepte déjà en tableau) permettrait de s'en passer : `before: ["nord:rendu=sauvelune", "ame:moulin"]` vaut `VIDE`.
- **Repli d'un test raté sur le passage d'un autre choix** : `E4_deserteurs` envoyait l'échec du test vers le passage « on leur a donné à manger ». Le contrôle de build pourrait signaler un passage atteint par deux choix dont un seul pose un flag ou un coût que le texte suppose.
- **« vous » / « tes compagnons »** : `IV_sv_table`, `IV_sv_matin`, `V_e_cartes_ok`, `V_e_horloge_bloquee`, `IV_sv_cimetiere_ok` supposent au moins un compagnon. Un tag `with: "any"` / `without: "any"` (seul ou accompagné) manque.

### Lot 16
1. **Épilogue par drapeaux** : `Z5_epilogue` aligne environ 180 paragraphes `{ if: { has: … } }` sans ordre ni plafond. Une partie riche en affiche des dizaines à la suite. Un mécanisme générique (bloc « épilogue » : groupes, nombre maximal de lignes, priorité, exclusions mutuelles par sujet) éviterait aussi les contradictions corrigées à la main ci-dessus (Baudoin, Thibaut, Rodric).
2. **« Au moins n parmi »** : acte5_queue.js fabrique à la main toutes les combinaisons de drapeaux (`atLeast(3)`, utilisé 6 fois). Une condition générique `{ count: [...], min: n }` le remplacerait.
3. **Choix « lieu déjà vu »** : `hide: { seen: "<cible>" }` sur un choix dont la cible est ce même passage revient 4 fois dans `V_q_file`, 6 dans `V_r_chemin`, 16 dans `V_ville` (plus 5 formes composées), 10 dans `V_t_cessions`. C'est le sens de `once: true` sur un choix ; le brief interdisait de toucher aux `hide`, donc non converti, mais la conversion est mécanique.
4. **`hide: { not: { present: "x" } }` sur un choix** (11 fois dans `V_compagnons`, 5 fois ailleurs dans tour, 1 dans fins) : c'est `with: "x"` sur le choix. Même remarque.
5. **Tests d'aide par compagnon** : `help: [{ if: { present: "x" }, v: n }]` est partout (queue, pages, tour). Une forme courte `{ with: "x", v: n }` serait cohérente avec les tags.

### Lot 17
- Choix « retour » dont le libellé dépend de l'endroit d'où l'on vient : « Revenir sur la place », « Revenir sur la place aux Clercs », « Redescendre », « Revenir dans le Bureau », « Reprendre la route », « Revenir sous les arcades »… écrits à la main dans presque chaque passage (une quarantaine de fois dans ce lot, avec des constantes BACK locales dans 7 fichiers sur 12). Un tag de passage du type `back: true` (retour au carrefour d'origine, libellé tiré du lieu) ferait la même chose sans risque de libellé faux (cas corrigé : V_v_cloche_rate).
- « Lieu visité une seule fois depuis un carrefour » : les 20 entrées de V_ville vers mes passages portent toutes `hide: { seen: "<cible>" }`, idem YS_cour, IV_ps, IV_moutier, III_v_porte. Le tag `once: true` sur le choix couvre déjà ce cas ; à convertir dans acte5_tour.js, acte4_pontsaule.js, acte4_retour.js, acte3_*.js (hors de mon lot).
- Épreuve perdue qui retombe sur le même passage que le choix prudent (V_v_fillette : « Secouer sa mère » raté → V_v_fillette_bras ; V_v_jardin : épreuve ratée → V_v_jardin_lanterne) : le texte d'arrivée ne peut pas dire qu'on vient d'échouer. Un tag de paragraphe du type `lost: true` / `won: true` (l'épreuve qui a mené ici a été perdue / gagnée) éviterait de dédoubler les passages. 2 cas dans ce lot.
- Événements de route liés à un héros ou à un chapitre (E_c_* : `all: [lead lisandre, has ch:lisandre:1, not has ch:lisandre:2]` répété 4 fois dans base.js) : une déclaration au niveau de la région ou de la route (« ces événements appartiennent à la route r_cour ») remplacerait la condition recopiée.
- Accord du « tu » : evenements1.js évite tout adjectif accordé parce que plusieurs héros passent sur ces routes ; evenements2.js (acte IV) écrit « assis », « gelé » au masculin en supposant l'enfant. Un marqueur d'accord dans le texte (du type `{e}`) résolu par le moteur selon le héros de tête lèverait la contrainte.
