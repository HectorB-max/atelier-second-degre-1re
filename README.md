# Atelier Second Degré — Première spécialité

Site pédagogique de remédiation sur les polynômes du second degré.

## Contenu

- Trois ateliers : racines, forme canonique (sommet, extremum et sens de variation) et signe.
- Étude du signe d'un trinôme pour Δ < 0, Δ = 0 et Δ > 0, avant les inéquations.
- Sept questions interactives avec retours explicatifs, dont trois consacrées aux variations.
- Parabole interactive : curseur et choix entre a = +1 et a = −1 pour inverser le sens des variations.
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

## Maintenance

Modifier le fichier `index.html` et publier les modifications sur la branche `main`. Aucun outil de compilation nécessaire.

Projet pédagogique expérimental, à tester et améliorer avant diffusion aux élèves.
