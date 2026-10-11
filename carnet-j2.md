# Carnet de bord · J2

Binôme : b18 · Membres : Chiheb KEBBAS & Alexandre GUMERY · Nos réglages sont dans `atelier/cahier-personnel.json` : ne les recopiez pas ici.

## Mon positionnement (chacun de vous deux)

Pour chaque notion, chacun écrit « à l'aise » ou « à renforcer ». Ce n'est ni évalué ni classé : c'est votre point de départ pour le bilan individuel de fin de module.

| Notion            | Membre 1 : Chiheb | Membre 2 : Alexandre |
| ----------------- | ----------------- | -------------------- |
| Structure HTML    | à l'aise          |                      |
| CSS et responsive | à l'aise          |                      |
| JavaScript        | à renforcer       |                      |
| DOM et événements | à renforcer       |                      |
| Git               | à l'aise          |                      |
| Tests             | à renforcer       |                      |

Chacun, en une phrase, son objectif personnel pour J2 et J3.

Membre 1 : Chiheb : Renforcer mes compétences en développement web, moins dépendre de l’IA et mieux savoir comment l’utiliser dans mes projets.

Membre 2 :

## R1 · Les tests automatisés

Les tests rouges du départ, et ce que vous en avez fait : 6 testes rouges au départ

| Test rouge | Cause trouvée (une phrase) | Fichier | Message du commit `fix:` |
| ---------- | -------------------------- | ------- | ------------------------ |
| `validateMessage` : refuse le vide et les espaces seuls | Le test du vide comparait le texte brut à `''` avant de retirer les espaces, donc `"   "` passait. | `atelier/public/js/brain.js` | `fix: validateMessage retire les espaces avant de tester le vide` (`8ac6ec0`) |
| `validateMessage` : accepte 220 caractères et refuse 221 | La limite était écrite en dur (280) au lieu d'utiliser la constante `LIMITE`, donc 221 caractères passaient. | `atelier/public/js/brain.js` | `fix: la limite vient de LIMITE et non de 280` (`4a941f7`) |
| `replyTo` : ignore la casse et les espaces autour | La casse était déjà gérée par `toLowerCase()`, mais les espaces autour du message n'étaient pas retirés avant la comparaison. | `atelier/public/js/brain.js` | `fix: replyTo ignore les espaces autour du message` (`ca32df6`) |
| `replyTo` : reconnaît les deux mots du cahier personnel, quelles que soient la casse et les espaces autour | Même cause : `' LANTERNE '` n'était pas nettoyé avant la recherche dans `MOTS` (le même commit corrige les deux tests). | `atelier/public/js/brain.js` | `fix: replyTo ignore les espaces autour du message` (`ca32df6`, le même) |
| `replyTo` : répond à une phrase inconnue par un repli distinct | Pour une phrase inconnue, `replyTo` renvoyait la réponse de `aide`, déjà utilisée par un autre mot : il manquait une réponse de repli propre. | `atelier/public/js/brain.js` | `fix: réponse de replyTo pour un message inconnue` (`49b6134`) |
| chaque module garde son rôle : view.js affiche du texte et ne décide pas des réponses | `view.js` écrivait le message avec `innerHTML`, qui interprète le texte comme du HTML : `<b>gras</b>` devenait du vrai gras. Le nom en gras est maintenant un élément `strong` construit avec `textContent`, et le message un nœud texte. | `atelier/public/js/view.js` | `fix: view.js affiche le texte avec textContent` (`1c53c73`) |

Avec l'agent : ce qu'il a proposé et que vous avez refusé, et pourquoi.

J'ai utilisé deux outils : un agent **ChatGPT** et **Claude Code**. Voici ce que j'ai refusé ou corrigé.

- **Refusé (ChatGPT), dans `view.js`.** Pour retirer `innerHTML`, l'agent m'a proposé `li.textContent = …`. Je l'ai refusé : cette ligne écrit tout en texte brut, donc le nom (« Vous » ou « Cap Web ») perdait son gras. Je voulais garder le gras. J'ai donc demandé une autre solution : un élément `strong` pour le nom (avec `textContent`), puis le message ajouté comme simple texte.
- **Vérifié par moi.** J'ai tapé `<b>strong</b>` dans la page : il s'affiche tel quel, avec les chevrons. Le texte reste du texte, donc pas de faille XSS.
- **Là où l'agent s'est trompé (Claude Code).** Il m'a dit que le `280` n'était pas dans le code. Or je l'avais vu dans le fichier de départ, et le `git diff` l'a confirmé (`280` remplacé par `LIMITE`). L'agent avait regardé mon dossier de travail, où je l'avais déjà corrigé, et non le commit de départ.
- **Ce que je fais à chaque fois.** Je regarde le `git diff` avant le commit, je lance le lint et les tests, et je fais un commit.

Pour aller plus loin : le nom renommé par votre commit `refactor:`, et pourquoi le nouveau est plus clair.

Dans `brain.js`, la variable `liste` devient `motsEntreGuillemets` (commit `refactor: liste devient motsEntreGuillemets`).

Pourquoi c'est plus clair : « liste », c'est vague, on ne sait pas une liste de quoi. En plus, il existe une autre variable `liste` dans `app.js` qui veut dire autre chose (l'élément de la page où s'affichent les messages). Ce n'est pas une vraie liste : c'est du texte du genre « lanterne » et « voisin ». Le nouveau nom dit ce que c'est : les mots entre guillemets. Les tests restent verts et la réponse de « aide » est exactement la même.

## R2 · Documenter le projet

Vos trois documents sont dans `atelier` : `README.md`, `SPEC.md` et `AGENTS.md`. Rien à recopier ici.

Pour aller plus loin, avec l'agent, les demandes du formateur :

| Demande | Ce qu'a fait l'agent | Votre décision | Règle d'`AGENTS.md` concernée (ou ajoutée) |
| ------- | -------------------- | -------------- | ------------------------------------------ |
| 1       |                      |                |                                            |
| 2       |                      |                |                                            |
| 3       |                      |                |                                            |

## R3 · Premiers tests unitaires

| À remplir                                   | Votre réponse |
| ------------------------------------------- | ------------- |
| Fonction tirée                              | F2 : `compterMots(message)`. Elle compte les mots d'un message. |
| Le rouge vu (message exact)                 | `SyntaxError: The requested module '../public/js/brain.js' does not provide an export named 'compterMots'`. Ça veut dire : la fonction n'existe pas encore. |
| Identifiant du commit `test:`               | `2fdb006` |
| Identifiant du commit `feat:`               | `468230d` |
| Casse volontaire : la ligne changée         | Dans `brain.js` : `return texte.split(/\s+/).length;` est devenu `return 1;` |
| Casse volontaire : le test devenu rouge     | Deux tests sont devenus rouges : C1 (reçu 1, attendu 4) et C2 (reçu 1, attendu 2). Les tests C3, C4 et C5 sont restés verts, parce que la bonne réponse y est 0 ou 1. J'ai remis le code avec `git restore` et tout est revenu au vert. |
| Pour aller plus loin : la deuxième fonction | F3 : `estEnMajuscules(message)`. Elle dit si un message est en majuscules (il faut au moins 2 lettres, et toutes en majuscule). Rouge vu : `… does not provide an export named 'estEnMajuscules'`. Commit `test:` : `2cea492`. Commit `feat:` : `6bf5493`. |

Les critères C1 à C5 de votre fonction, recopiés de la fiche :

- C1 : `'salut'` donne 1, `'où est le refuge'` donne 4.
- C2 : `'un   deux'` donne 2, `'un\tdeux\ntrois'` donne 3.
- C3 : `'   salut   '` donne 1 (les espaces autour ne comptent pas).
- C4 : `''` et les espaces seuls donnent 0.
- C5 : ce qui n'est pas du texte (`undefined`, `null`, `42`) donne 0, sans erreur.

Comment j'ai travaillé sur R3 :

- Pour compterMots et estEnMajuscules, le test et le code ont été écrits par Claude Code à ma demande. J’ai fait les commits et j’ai lancé les tests moi-même.
- J'avais ajouté moi-même au test C3 des cas avec des tabulations autour du message.

## R4 · La revue de code

| Patch | Accepté ou refusé | Fichier et ligne | Raison |
| ----- | ----------------- | ---------------- | ------ |
| 1     |                   |                  |        |
| 2     |                   |                  |        |
| 3     |                   |                  |        |

Pour aller plus loin : le patch que vous avez corrigé, et ce que vous avez changé.

## Fin de journée

Chacun, une phrase : ce que vous savez faire ce soir et que vous ne saviez pas faire ce matin. Relisez votre positionnement : une notion est-elle passée de « à renforcer » à « à l'aise » ?

## J3 · Journal des étapes

### Étape 1 · Le troisième mot

- Mot ajouté dans `MOTS` : `ruelle`.
- Avant la correction : « aide » répondait « Je connais « salut », « aide », « test », et **deux** mots à moi : « lanterne » et « voisin » et « ruelle » ». La phrase annonçait deux mots et en listait trois.
- Cause : le mot « deux » était écrit à la main dans la phrase, alors que la liste des mots est calculée à partir de `MOTS`.
- Correction : le nombre est maintenant calculé avec `Object.keys(MOTS).length`. « aide » annonce 3 mots.
- Commit : `748f612` (`feat: un troisième mot`).

### Étape 2 · Le compteur de caractères

- Ajouté : `<p id="compteur">` sous le champ, `aria-describedby="compteur"` sur le champ, et dans `app.js` une fonction `majCompteur()` appelée à chaque frappe (événement `input`), après l'envoi et au chargement.
- Vérifié dans la page : `0 / 220` au départ, `7 / 220` après avoir tapé « bonjour », `220 / 220` avec 220 caractères, retour à `0 / 220` après l'envoi. Rien en rouge dans la console.
- Commit : `2d622f6` (`feat: compteur de caractères`).

### Étape 3 · L'accessibilité avec Lighthouse

| Situation | Score Accessibilité | Heure du rapport |
| --------- | ------------------- | ---------------- |
| Avec le `label` | 100 | 20:36:46 |
| Sans le `label` | 93 | 20:39:06 |

- Alerte sans le label : « Les éléments de formulaire ne sont pas associés à des libellés » (catégorie « Noms et étiquettes »).
- Précision : le second relevé a été fait en mode mobile. Le mode du premier relevé n'a pas été noté.
- Une erreur apparaît dans la console pendant l'essai sans label : `app.js` cherche l'élément `#limite`, qui était dans le label retiré. Elle disparaît quand le label est remis.
- Le label a été remis tel qu'il était dans le dernier commit : `git status` ne liste plus `index.html`.
- Essai au clavier seul : la touche Tab arrive dans le champ ; Entrée dans le champ ajoute un retour à la ligne et n'envoie pas le message ; Tab mène ensuite au bouton Envoyer, et Entrée sur ce bouton envoie le message (le compteur revient à `0 / 220`, le curseur revient dans le champ).
