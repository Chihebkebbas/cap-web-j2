# Cap Web

**Cap Web** est un assistant destiné aux personnes souhaitant apprendre le développement web. Il ne s'agit pas d'une véritable intelligence artificielle, mais plutôt d'une simulation à des fins de simplification.

## Fonctionnalités

Cap Web est capable de répondre aux messages suivants :

* `salut`
* `aide`
* `test`
* `lanterne`
* `voisin`
* `ruelle`

Les messages sont soumis à une validation :

* Ils ne doivent pas être vides.
* Ils ne doivent pas dépasser **220 caractères**.

Les conversations sont conservées dans le navigateur.

## Installation

Pour installer Cap Web, il suffit de cloner le dépôt GitHub et d'accéder au répertoire du projet :

```bash
git clone https://github.com/Chihebkebbas/cap-web-j2.git

cd cap-web-j2
```

### Installation des dépendances

Installe les dépendances du projet à l'aide de NPM :

```bash
cd atlier

npm i
```

### Lancement

Pour démarrer Cap Web, exécute la commande suivante :

```bash
npm start
```

L'application est accessible par défaut sur le port **3000**. Il est possible de faire Ctrl+C dans la console pour arrêter le programme.

## Tests et qualité du code

Cap Web dispose de plusieurs tests automatisés ainsi que d'un linter pour vérifier la qualité du code.

**Exécuter les tests :**

```bash
npm test
```

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

---
