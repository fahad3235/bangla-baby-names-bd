/* Node unit tests for Bangla Baby Names BD logic. Run: node tests/logic.test.cjs */
'use strict';
const { NAMES } = require('../js/data.js');
const L = require('../js/logic.js');
let pass = 0, fail = 0;
function check(name, cond, detail) {
  if (cond) { pass++; console.log('  OK ' + name); }
  else { fail++; console.log('  FAIL ' + name + (detail ? ' -> ' + detail : '')); }
}
check('dataset has 48 names', NAMES.length === 48, 'got ' + NAMES.length);
check('20 boy / 20 girl / 8 unisex',
  NAMES.filter(n => n.gender === 'boy').length === 20 &&
  NAMES.filter(n => n.gender === 'girl').length === 20 &&
  NAMES.filter(n => n.gender === 'unisex').length === 8,
  JSON.stringify(['boy', 'girl', 'unisex'].map(g => NAMES.filter(n => n.gender === g).length)));
check('no duplicate Latin names', new Set(NAMES.map(n => n.en)).size === NAMES.length);
check('every name has Bangla spelling, origin, meaning',
  NAMES.every(n => n.bn && n.origin && n.meaning));
check('origins are only Arabic/Persian/Sanskrit/Bangla',
  NAMES.every(n => ['Arabic', 'Persian', 'Sanskrit', 'Bangla'].includes(n.origin)));
check('search "light" finds Noor', L.filterNames(NAMES, { query: 'light' }).some(n => n.en === 'Noor'));
check('Bangla search finds Noor', L.filterNames(NAMES, { query: 'নূর' }).some(n => n.en === 'Noor'));
check('search is case-insensitive', L.filterNames(NAMES, { query: 'LIGHT' }).some(n => n.en === 'Noor'));
check('gender filter girl returns 20', L.filterNames(NAMES, { gender: 'girl' }).length === 20);
check('origin filter Bangla returns 3', L.filterNames(NAMES, { origin: 'Bangla' }).length === 3,
  'got ' + L.filterNames(NAMES, { origin: 'Bangla' }).map(n => n.en).join(','));
check('combined search+gender: girl + "joy" finds Farhana only',
  JSON.stringify(L.filterNames(NAMES, { query: 'joy', gender: 'girl' }).map(n => n.en)) === '["Farhana"]');
check('no-match search returns empty', L.filterNames(NAMES, { query: 'zzzzqqq' }).length === 0);
check('sort A-Z first is Adnan, last is Zara',
  L.sortNames(NAMES, 'az')[0].en === 'Adnan' && L.sortNames(NAMES, 'az')[47].en === 'Zara');
check('sort Z-A reverses A-Z',
  JSON.stringify(L.sortNames(NAMES, 'za').map(n => n.en)) === JSON.stringify(L.sortNames(NAMES, 'az').map(n => n.en).reverse()));
check('randomName with fixed rand 0 picks first of list', L.randomName(NAMES, () => 0).en === 'Arif');
check('randomName with rand 0.999 picks last', L.randomName(NAMES, () => 0.999).en === 'Anan');
check('randomName empty list returns null', L.randomName([], () => 0.5) === null);
check('toggleFavourite adds then removes', (() => {
  const a = L.toggleFavourite([], 'Noor'); const b = L.toggleFavourite(a, 'Noor');
  return a.length === 1 && b.length === 0;
})());
check('toggleFavourite sorts', JSON.stringify(L.toggleFavourite(['Zara'], 'Arif')) === '["Arif","Zara"]');
check('favOnly filters to favourites', L.filterNames(NAMES, { favOnly: true, favourites: ['Noor'] }).map(n => n.en).join() === 'Noor');
check('loadFavourites rejects corrupt JSON', L.loadFavourites('{bad').length === 0);
check('loadFavourites rejects non-array', L.loadFavourites('{"a":1}').length === 0);
check('loadFavourites keeps strings only', JSON.stringify(L.loadFavourites('["Noor",42]')) === '["Noor"]');
console.log('\n' + pass + ' passed, ' + fail + ' failed');
process.exit(fail ? 1 : 0);
