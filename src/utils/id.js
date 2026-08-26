/**
 * Lightweight identifier helpers for Pocket Taxidermist.
 *
 * These utilities intentionally avoid external dependencies so they can be
 * used in services, database layers, and context providers without extra setup.
 */

const BASE36 = '0123456789abcdefghijklmnopqrstuvwxyz';
const RANDOM_SEGMENT_LENGTH = 6;
const SEQUENCE_MODULUS = 16777215;

let sequence = 0;

function nextSequence() {
  sequence = (sequence + 1) % SEQUENCE_MODULUS;
  return sequence;
}

function randomBase36(length = RANDOM_SEGMENT_LENGTH) {
  let out = '';

  for (let i = 0; i < length; i += 1) {
    out += BASE36[Math.floor(Math.random() * BASE36.length)];
  }

  return out;
}

function timestampBase36() {
  return Date.now().toString(36);
}

function hashString(input) {
  const str = String(input || '');
  let hash = 5381;

  for (let i = 0; i < str.length; i += 1) {
    hash = ((hash << 5) + hash + str.charCodeAt(i)) >>> 0;
  }

  return hash.toString(36);
}

function slugify(input) {
  return String(input || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '')
    .slice(0, 48);
}

/**
 * Generates a generic unique identifier with an optional prefix.
 *
 * @param {string} [prefix='id']
 * @returns {string}
 */
export function generateId(prefix = 'id') {
  return `${prefix}_${timestampBase36()}${randomBase36(RANDOM_SEGMENT_LENGTH)}${nextSequence().toString(36)}`;
}

/**
 * Generates a stable specimen identifier from an app identifier.
 *
 * Stable IDs are important because the same app should map to the same
 * preserved specimen across scans and app restarts.
 *
 * @param {string} [appIdentifier]
 * @returns {string}
 */
export function generateSpecimenId(appIdentifier) {
  const slug = appIdentifier ? slugify(appIdentifier) : '';

  if (!slug) {
    return generateId('specimen');
  }

  const digest = hashString(appIdentifier).slice(-4);
  return `specimen_${slug}_${digest}`;
}

/**
 * Generates a unique identifier for a usage event.
 *
 * @param {string} [appIdentifier]
 * @returns {string}
 */
export function generateUsageEventId(appIdentifier) {
  const appPart = appIdentifier ? `_${slugify(appIdentifier).slice(0, 24)}` : '';
  return `event_${timestampBase36()}${randomBase36(4)}${nextSequence().toString(36)}${appPart}`;
}

/**
 * Generates a unique identifier for a resurrection ritual.
 *
 * @param {string} [specimenId]
 * @returns {string}
 */
export function generateRitualId(specimenId) {
  const specimenPart = specimenId ? `_${hashString(specimenId).slice(-4)}` : '';
  return `ritual_${timestampBase36()}${randomBase36(4)}${nextSequence().toString(36)}${specimenPart}`;
}