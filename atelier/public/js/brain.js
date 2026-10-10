// Cap Web — cerveau à règles. Fonctions pures : aucun accès à la page.

// Vos réglages : recopiez ici la limite et les deux mots de votre cahier-personnel.json.

export const LIMITE = 220;

const MOTS = {
  lanterne: 'La lanterne éclaire le chemin.',
  voisin: 'Mon voisin est très gentil.'
};

const motsEntreGuillemets = Object.keys(MOTS).map((mot) => `« ${mot} »`).join(' et ');

const REPONSES = {
  salut: 'Bonjour ! Je suis Cap Web, un assistant à règles. Écrivez « aide » pour voir ce que je sais faire.',
  aide: `Je connais « salut », « aide », « test », et deux mots à moi : ${motsEntreGuillemets}.`,
  test: 'Test bien reçu : mes règles fonctionnent.',
  inconnu: 'Je connais pas cette question.'
};

export function validateMessage(raw) {
  if (typeof raw !== 'string') {
    return { ok: false, error: 'Le message doit être du texte.' };
  }
  if (raw.trim() === '') {
    return { ok: false, error: 'Le message ne doit pas être vide.' };
  }
  const value = raw.trim();
  if (value.length > LIMITE) {
    return { ok: false, error: `Le message doit contenir ${LIMITE} caractères au maximum.` };
  }
  return { ok: true, value };
}

export function replyTo(message) {
  const texte = String(message).toLowerCase().trim();
  if (texte === 'salut' || texte === 'bonjour') {
    return REPONSES.salut;
  }
  if (texte === 'aide') {
    return REPONSES.aide;
  }
  if (texte === 'test') {
    return REPONSES.test;
  }
  if (Object.hasOwn(MOTS, texte)) {
    return MOTS[texte];
  }
  // Message inconnu : on rappelle ce que Cap Web sait faire.
  return REPONSES.inconnu;
}
