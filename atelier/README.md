# Cap Web

**Cap Web** est un assistant destiné aux personnes souhaitant apprendre le développement web. Il ne s'agit pas d'une véritable intelligence artificielle, mais plutôt d'une simulation à des fins de simplification.

## Fonctionnalités

Cap Web est capable de répondre aux messages suivants :

* `salut` (ou `bonjour`)
* `aide`
* `test`
* `lanterne`
* `voisin`
* `ruelle`
* `conseil` : la page demande un conseil au serveur (voir la route `/api/conseil` plus bas)

Les majuscules et les espaces autour du message ne comptent pas : ` CONSEIL ` fonctionne comme `conseil`.

Les messages sont soumis à une validation :

* Ils ne doivent pas être vides.
* Ils ne doivent pas dépasser **220 caractères**. Un compteur sous le champ affiche la longueur (par exemple `7 / 220`).

Les conversations sont conservées dans le navigateur (`localStorage`) : elles survivent à un rechargement de la page.

## Installation

Pour installer Cap Web, il suffit de cloner le dépôt GitHub et d'accéder au répertoire du projet :

```bash
git clone https://github.com/Chihebkebbas/cap-web-j2.git

cd cap-web-j2
```

### Installation des dépendances

Il faut **Node.js 24.20 ou plus récent** (`node -v` pour vérifier). Installe ensuite les dépendances du projet à l'aide de NPM :

```bash
cd atelier

npm ci
```

`npm ci` installe exactement les versions du fichier `package-lock.json`. Un avertissement `EBADENGINE` signifie que ta version de Node est plus ancienne que celle demandée : le projet fonctionne en général quand même.

### Lancement

Pour démarrer Cap Web, exécute la commande suivante :

```bash
npm start
```

L'application est accessible par défaut sur http://127.0.0.1:3000. Il est possible de faire Ctrl+C dans la console pour arrêter le programme.

Pour utiliser un autre port, par exemple 3001 : `PORT=3001 npm start` (macOS et Linux).

## La route `/api/conseil`

Le serveur expose une route JSON, utilisée quand on envoie le mot `conseil` :

```bash
curl http://127.0.0.1:3000/api/conseil
```

| Élément | Valeur |
| --- | --- |
| Méthode | `GET` (les autres méthodes reçoivent `405`) |
| Statut | `200` |
| En-tête | `content-type: application/json` |
| Corps | `{ "conseil": "…" }`, un conseil tiré au hasard parmi trois |

Si le serveur est arrêté, la page n'affiche pas d'erreur technique : Cap Web répond « Le serveur ne répond pas : conseil indisponible. ». Les autres mots continuent de fonctionner, car ils sont traités dans le navigateur.

## Tests et qualité du code

Cap Web dispose de plusieurs tests automatisés ainsi que d'un linter pour vérifier la qualité du code.

**Exécuter les tests :**

```bash
npm test
```

Le résultat attendu se termine par `fail 0`.

**Lancer le linter :**

```bash
npm run lint
```

## Architecture du projet

Cap Web repose sur trois modules principaux :

| Module     | Description                                                    |
| ---------- | -------------------------------------------------------------- |
| `brain.js` | Gère la validation des messages et la génération des réponses. |
| `view.js`  | Affiche les messages et s'occupe de leur rendu visuel.         |
| `app.js`   | Gère les interactions avec l'utilisateur.                      |

## Arborescence du projet

```text
atelier/
├── public/              la page, servie par le serveur
│   ├── index.html       la structure de la page
│   ├── styles.css       le style, avec la version mobile
│   └── js/
│       ├── brain.js     décide : valide un message et choisit la réponse (fonctions pures)
│       ├── view.js      affiche : dessine la conversation avec textContent
│       └── app.js       câble : événements, localStorage, fetch vers le serveur
├── server/
│   ├── start.js         lance le serveur (port 3000 par défaut)
│   └── app.js           sert les fichiers, /version.json et /api/conseil
├── tests/               les tests : contrat du formateur, nos tests, serveur
├── browser/             tests navigateur (outillage du formateur)
├── scripts/             outils du formateur (build, vérifications)
├── cahier-personnel.json   nos réglages : limite et mots
└── package.json         les commandes npm : start, test, lint
```

---
