// src/utils/date.js

const DAY_MS = 24 * 60 * 60 * 1000;

export function toMillis(value) {
  if (value == null) return null;
  if (value instanceof Date) return value.getTime();
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  if (typeof value === 'string') {