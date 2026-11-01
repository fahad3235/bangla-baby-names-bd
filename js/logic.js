/* Pure logic for Bangla Baby Names BD — no DOM, unit-tested in Node. */
'use strict';

function normalize(s) {
  return String(s == null ? '' : s).trim().toLowerCase();
}

// Filter by search text (matches Latin name, Bangla spelling, or meaning),
// gender ('all' | 'boy' | 'girl' | 'unisex'), origin ('all' | origin name),
// and favourites-only flag against a Set/array of favourite Latin names.
function filterNames(list, opts) {
  const q = normalize(opts && opts.query);
  const gender = (opts && opts.gender) || 'all';
  const origin = (opts && opts.origin) || 'all';
  const favOnly = !!(opts && opts.favOnly);
  const favs = new Set((opts && opts.favourites) || []);
  return list.filter(function (n) {
    if (gender !== 'all' && n.gender !== gender) return false;
    if (origin !== 'all' && n.origin !== origin) return false;
    if (favOnly && !favs.has(n.en)) return false;
    if (!q) return true;
    return normalize(n.en).includes(q) || n.bn.includes(String(opts.query).trim()) ||
      normalize(n.meaning).includes(q);
  });
}

function sortNames(list, order) {
  const copy = list.slice();
  copy.sort(function (a, b) { return a.en.localeCompare(b.en); });
  if (order === 'za') copy.reverse();
  return copy;
}

// Random pick; rand defaults to Math.random, injectable for tests.
function randomName(list, rand) {
  if (!list.length) return null;
  const r = typeof rand === 'function' ? rand() : Math.random();
  const idx = Math.min(list.length - 1, Math.max(0, Math.floor(r * list.length)));
  return list[idx];
}

function toggleFavourite(favs, name) {
  const set = new Set(favs);
  if (set.has(name)) set.delete(name); else set.add(name);
  return Array.from(set).sort();
}

function loadFavourites(raw) {
  try {
    const parsed = JSON.parse(raw || '[]');
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(function (x) { return typeof x === 'string'; });
  } catch (e) { return []; }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { normalize: normalize, filterNames: filterNames, sortNames: sortNames, randomName: randomName, toggleFavourite: toggleFavourite, loadFavourites: loadFavourites };
}
