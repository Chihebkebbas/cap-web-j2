import { it } from 'node:test';
import assert from 'node:assert/strict';
import { compterMots } from '../public/js/brain.js';

it('C1 : compte les mots d’un message', () => {
  assert.equal(compterMots('salut'), 1);
  assert.equal(compterMots('où est le refuge'), 4);
});

it('C2 : plusieurs séparateurs de suite comptent pour un seul', () => {
  assert.equal(compterMots('un   deux'), 2);
  assert.equal(compterMots('un\tdeux\ntrois'), 3);
});

it('C3 : ignore les espaces autour du message', () => {
  assert.equal(compterMots('   salut   '), 1);
  assert.equal(compterMots('\tsalut'), 1);
  assert.equal(compterMots('\tsalut\t'), 1);
  assert.equal(compterMots('\t salut \t'), 1);
});

it('C4 : un message vide ou fait d’espaces seuls compte 0 mot', () => {
  assert.equal(compterMots(''), 0);
  assert.equal(compterMots('     '), 0);
  assert.equal(compterMots(' \t\n '), 0);
});

it('C5 : ce qui n’est pas du texte compte 0 mot, sans erreur', () => {
  assert.equal(compterMots(undefined), 0);
  assert.equal(compterMots(null), 0);
  assert.equal(compterMots(42), 0);
});
