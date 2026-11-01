/* Bangla Baby Names BD — DOM wiring. Zero network requests. */
'use strict';
(function () {
  var lang = 'en';
  try { lang = localStorage.getItem('bbn-lang') || 'en'; } catch (e) {}
  if (lang !== 'bn') lang = 'en';
  var favourites = [];
  try { favourites = loadFavourites(localStorage.getItem('bbn-favs')); } catch (e) { favourites = []; }
  // Drop favourites that are not in the dataset (dataset edits, corrupt saves).
  favourites = favourites.filter(function (n) { return NAMES.some(function (x) { return x.en === n; }); });

  var els = {};
  ['search', 'gender', 'origin', 'sort', 'favOnly', 'surprise', 'langBtn', 'results',
   'count', 'empty', 'clearFilters', 'detail', 'detailBody', 'detailClose'].forEach(function (id) {
    els[id] = document.getElementById(id);
  });

  function t(key) { return I18N[lang][key]; }
  function genderLabel(g) { return lang === 'bn' ? GENDER_LABEL_BN[g] : (g.charAt(0).toUpperCase() + g.slice(1)); }
  function originLabel(o) { return lang === 'bn' ? (ORIGIN_LABEL_BN[o] || o) : o; }

  function saveFavs() {
    try { localStorage.setItem('bbn-favs', JSON.stringify(favourites)); } catch (e) {}
  }

  function currentList() {
    var filtered = filterNames(NAMES, {
      query: els.search.value, gender: els.gender.value, origin: els.origin.value,
      favOnly: els.favOnly.checked, favourites: favourites,
    });
    return sortNames(filtered, els.sort.value);
  }

  function render() {
    var list = currentList();
    els.count.textContent = list.length + ' ' + t('results') + '  •  ' + favourites.length + ' ' + (lang === 'bn' ? 'টি পছন্দের নাম' : 'favourites');
    els.empty.hidden = list.length !== 0;
    els.results.innerHTML = '';
    list.forEach(function (n) {
      var card = document.createElement('article');
      card.className = 'card';
      var fav = favourites.indexOf(n.en) !== -1;
      var star = document.createElement('button');
      star.className = 'star' + (fav ? ' on' : '');
      star.type = 'button';
      star.textContent = fav ? '★' : '☆';
      star.title = fav ? t('favRemove') : t('fav');
      star.setAttribute('aria-label', (fav ? t('favRemove') : t('fav')) + ': ' + n.en);
      star.addEventListener('click', function (ev) {
        ev.stopPropagation();
        favourites = toggleFavourite(favourites, n.en);
        saveFavs(); render();
      });
      var h = document.createElement('h3'); h.textContent = n.en;
      var bn = document.createElement('div'); bn.className = 'bn'; bn.textContent = n.bn;
      var m = document.createElement('p'); m.className = 'meaning'; m.textContent = n.meaning;
      var meta = document.createElement('div'); meta.className = 'meta';
      meta.textContent = genderLabel(n.gender) + ' • ' + originLabel(n.origin);
      var copy = document.createElement('button');
      copy.className = 'copy'; copy.type = 'button'; copy.textContent = t('copy');
      copy.addEventListener('click', function (ev) {
        ev.stopPropagation();
        var text = n.en + ' (' + n.bn + ') — ' + n.meaning;
        var done = function () { copy.textContent = t('copied'); setTimeout(function () { copy.textContent = t('copy'); }, 1200); };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(done, done);
        } else { done(); }
      });
      card.appendChild(star); card.appendChild(h); card.appendChild(bn);
      card.appendChild(m); card.appendChild(meta); card.appendChild(copy);
      card.addEventListener('click', function () { openDetail(n); });
      els.results.appendChild(card);
    });
  }

  function openDetail(n) {
    els.detailBody.innerHTML = '';
    var h = document.createElement('h3'); h.textContent = n.en + '  ' + n.bn;
    var rows = [
      [t('meaningLabel'), n.meaning],
      [t('genderLabel2'), genderLabel(n.gender)],
      [t('originLabel2'), originLabel(n.origin)],
    ];
    rows.forEach(function (r) {
      var p = document.createElement('p');
      var b = document.createElement('strong'); b.textContent = r[0] + ': ';
      p.appendChild(b); p.appendChild(document.createTextNode(r[1]));
      els.detailBody.appendChild(p);
    });
    els.detailBody.insertBefore(h, els.detailBody.firstChild);
    els.detail.showModal();
  }

  function applyLang() {
    document.querySelectorAll('[data-i18n]').forEach(function (node) {
      node.textContent = t(node.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (node) {
      node.placeholder = t(node.getAttribute('data-i18n-ph'));
    });
    els.langBtn.textContent = t('langBtn');
    document.documentElement.lang = lang === 'bn' ? 'bn' : 'en';
    Array.prototype.forEach.call(els.origin.options, function (opt) {
      if (opt.value !== 'all') opt.textContent = originLabel(opt.value);
    });
    render();
  }

  els.search.addEventListener('input', render);
  els.gender.addEventListener('change', render);
  els.origin.addEventListener('change', render);
  els.sort.addEventListener('change', render);
  els.favOnly.addEventListener('change', render);
  els.clearFilters.addEventListener('click', function () {
    els.search.value = ''; els.gender.value = 'all'; els.origin.value = 'all';
    els.favOnly.checked = false; render();
  });
  els.surprise.addEventListener('click', function () {
    var pick = randomName(currentList());
    if (pick) openDetail(pick);
  });
  els.langBtn.addEventListener('click', function () {
    lang = lang === 'en' ? 'bn' : 'en';
    try { localStorage.setItem('bbn-lang', lang); } catch (e) {}
    applyLang();
  });
  els.detailClose.addEventListener('click', function () { els.detail.close(); });
  els.detail.addEventListener('click', function (ev) {
    if (ev.target === els.detail) els.detail.close();
  });

  // Origin options, built from the dataset (never hard-coded twice).
  var origins = [];
  NAMES.forEach(function (n) { if (origins.indexOf(n.origin) === -1) origins.push(n.origin); });
  origins.sort().forEach(function (o) {
    var opt = document.createElement('option'); opt.value = o; opt.textContent = o;
    els.origin.appendChild(opt);
  });

  applyLang();
})();
