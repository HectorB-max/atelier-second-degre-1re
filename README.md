# Atelier Second Degré — Première spécialité

Site pédagogique de remédiation sur les polynômes du second degré.

## Contenu

- Trois ateliers : racines, forme canonique (sommet, extremum et sens de variation) et signe.
- Étude du signe d'un trinôme pour Δ < 0, Δ = 0 et Δ > 0, avant les inéquations.
- Trente questions interactives avec retours explicatifs, dont six consacrées aux variations (trois avec coefficients uniquement négatifs), treize questions supplémentaires réparties entre les trois ateliers et trois exercices de bilan transversal. Le compteur indique le nombre de questions validées sur 30.
- Parabole interactive : curseur et choix entre a = +1 et a = −1 pour inverser le sens des variations.
- Laboratoire autonome permettant de faire varier les coefficients a, b et c, de suivre le discriminant, les racines et le sommet.
- Deuxième laboratoire indépendant : curseur continu pour a de −3 à +3, avec b = 0 et c = 1 fixes ; le passage par a = 0 montre la disparition du terme quadratique.
- Tableau de synthèse transposé : signe de a en lignes, signe de Δ en colonnes, six courbes, signes, variations, factorisations et deux équivalences d'inéquation par cas.
- Huit tableaux de variations SVG inspirés de tkz-tab (six dans la synthèse et deux exemples dans l'atelier forme canonique), adaptés automatiquement aux thèmes clair/sombre.
- Six tableaux de signes SVG dans la synthèse, avec Sg(a), −Sg(a), zéros aux racines et rappel de a > 0 ou a < 0 ; aucune expression mathématique ne se coupe.
- Comparatif des trois formes du trinôme, avec indication des conditions de factorisation réelle. Formules de racines et d'abscisse du sommet affichées avec une véritable barre de fraction (fraction typographique CSS), jamais un « / » mathématique visible.
- Bilan pédagogique restructuré autour des trois questions directrices et d'un QCM à réponses multiples, sans ancienne numérotation « question 10 sur 10 ».
- Épreuve finale sans QCM et sans aide : étude complète du trinôme P(x) = −2x² + 8x − 6, comparaison des positions relatives de f(x) = x² − x + 2 et g(x) = x + 3 (intersections exactes 1 ± √2), puis défi ★ sur les deux droites non verticales passant par l'origine et ayant chacune un point commun unique avec la parabole ; le corrigé explique pourquoi ce sont ici des tangentes, sans en faire une définition générale. Deux figures SVG montrent les surfaces colorées des positions relatives et des contacts, avec les droites nommées et leurs équations cartésiennes. Corrigé détaillé dans un volet replié, avec tableaux SVG, démonstrations et résultat géométrique AB = 4. Cet exercice est indépendant du compteur de 30 questions.
- Relations coefficients-racines : démonstration de la somme et du produit à partir de la forme factorisée, cas discriminant nul et négatif, laboratoire SVG interactif modifiant les deux racines et a, deux méthodes de recherche et quatre questions avec retours explicatifs.
- Mode sombre activable et mémorisé localement dans le navigateur.
- Sans compte élève, sans notation et sans collecte de réponses. Progression enregistrée dans le navigateur.

## Consulter et publier

La page d'accueil du site est le fichier `index.html` à la racine de ce dépôt.

Pour activer GitHub Pages : **Settings → Pages → Build and deployment → Deploy from a branch → main → /(root) → Save**.

Une fois GitHub Pages activé, le site sera accessible à l'adresse indiquée dans les réglages Pages du dépôt.

## Compteur de visites

Compteur numérique dans l’en-tête, alimenté par l’API publique [Abacus](https://abacus.jasoncameron.dev/). Le précédent badge SVG de hits.sh ne s’affichait pas dans Firefox avec certains bloqueurs de contenu et a été remplacé.

- Le compteur est global, sans création de compte élève. Il démarre lors de la mise en service de cette version : les chiffres de hits.sh ne sont pas transférés.
- Sur un nouvel onglet/session, une requête `/hit/` incrémente le compteur ; les rechargements de la même session utilisent `/get/` (sessionStorage).
- Ce sont des sessions approximatives, **pas des personnes distinctes** ni des statistiques certifiées. D’autres clients peuvent appeler les mêmes URL publiques ; des requêtes automatisées et des bloqueurs affectent les résultats.
- Une requête HTTPS vers le serveur tiers Abacus est nécessaire : ce serveur peut recevoir des données techniques de connexion telles que l’adresse IP. Aucune donnée personnelle d’élève n’est ajoutée à la requête par le site. `referrerPolicy: 'no-referrer'` limite les informations de référent envoyées.
- En cas de blocage ou de panne, la page indique « — » et « Compteur momentanément indisponible », au lieu d’un chiffre trompeur.
- Pour les tests locaux automatisés, intercepter les requêtes vers Abacus et simuler la réponse afin de ne pas créer de fausses visites.

## Sources pédagogiques

Adaptation de ressources du professeur : *Fonctions polynômes du second degré* (cours Première spécialité) et *Fiche d'entraînement — Second degré*, consultées sur Google Drive le 29 octobre 2026.

L'ajout « relations coefficients–racines » correspond au programme de spécialité mathématiques de Première générale, BO n° 14 du 2 avril 2026 (contenus : somme et produit des racines ; capacités : recherche d'une racine évidente et factorisation par la somme et le produit).

## Maintenance

Les fichiers HTML, CSS et JavaScript sont autonomes, sans étape de compilation : `index.html`, `refonte.css`, `refonte-tableaux.js`, `variations-svg.js`, `signes-svg.js`, `refonte-explorateur.js`, `applet-a-curseur.js`, `exercices-complementaires.js`, `defi-final.js`, `defi-graphiques.js` et `relations-racines.js`. Le rendu SVG s'inspire de `tkz-tab` sans nécessiter LaTeX au moment de l'affichage ; un prototype `tkz-tab` a été compilé pour comparaison.

Travailler d'abord sur une branche de développement, tester depuis la Tour Ubuntu avec un serveur HTTP local (par exemple `python3 -m http.server 8877 --bind 127.0.0.1`) et vérifier l'affichage mobile, les 30 questions, les six configurations et le corrigé de l'épreuve finale. Publier ensuite sur `main` et contrôler GitHub Pages.

Pour la version Éléa, utiliser l'archive V2 située sur le Bureau de la Tour Ubuntu dans `1re_Spe/Atelier_second_degre_1re_Elea_V2_coefficients_racines` ; remplacer les fichiers de l'activité existante seulement après validation.

Projet pédagogique expérimental, à tester et améliorer avant diffusion aux élèves.
