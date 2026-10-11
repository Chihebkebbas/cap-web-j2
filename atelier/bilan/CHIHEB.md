# Bilan individuel · Chiheb KEBBAS

## Mon niveau de départ

D'après mon positionnement, au début du carnet de J2 :

| Notion | Au départ |
| ------ | --------- |
| Structure HTML | à l'aise |
| CSS et responsive | à l'aise |
| JavaScript | à renforcer |
| DOM et événements | à renforcer |
| Git | à l'aise |
| Tests | à renforcer |

Mon objectif de départ : renforcer mes compétences en développement web, moins dépendre de l'IA et mieux savoir comment l'utiliser dans mes projets.

## Deux acquis, prouvés par un commit

1. **Repérer une valeur écrite en dur.** En lisant `brain.js`, j'ai vu que la limite était écrite `280` alors que le message d'erreur utilisait `LIMITE`. Je l'ai corrigée : la règle et le message ont maintenant une seule source de vérité.
   Preuve : commit `4a941f7` (`fix: la limite vient de LIMITE et non de 280`).
2. **Afficher un texte sans le laisser devenir du HTML.** J'ai remplacé `innerHTML` par des éléments construits avec `textContent`, en gardant le nom en gras : un message `<b>test</b>` s'affiche tel quel.
   Preuve : commit `1c53c73` (`fix: view.js affiche le texte avec textContent`).

## Deux points à renforcer

1. **Distinguer ce qui tourne dans Node et ce qui tourne dans le navigateur.** Les deux dossiers ont chacun un fichier `app.js` (`server/app.js` et `public/js/app.js`) et je les ai confondus au début. Je dois mieux savoir dire, pour chaque ligne, où elle s'exécute.
2. **Écrire seul une fonction JavaScript complète.** `compterMots`, `estEnMajuscules` et `demanderConseil` ont été écrites avec l'aide d'un agent. Je sais expliquer ce qu'elles font, mais je dois m'entraîner à les écrire moi-même, test d'abord.

## Mon objectif

Moins dépendre de l'IA : écrire seul une petite fonction JavaScript, en commençant par son test, et savoir expliquer chaque ligne de mon code sans l'aide de personne.
