# Bangla Baby Names BD

A free, fully offline, bilingual (English / Bangla) baby-name explorer for
Bangladesh. Browse 48 curated names with their commonly given meanings,
Bangla spellings, gender, and origin — search, filter, save favourites, or
let the app surprise you with a random name.

## Features

- **48 curated names** — 20 boys, 20 girls, 8 unisex, each with a Bangla
  spelling, a commonly given meaning, and an origin (Arabic, Persian,
  Sanskrit, or Bangla).
- **Live search** — matches the Latin name, the Bangla spelling, or the
  meaning (for example, searching "light" finds Noor, Diya, and Tanvir).
- **Gender and origin filters** plus A–Z / Z–A sorting.
- **Favourites** — star a name to keep it; favourites persist in the
  browser's localStorage, with a favourites-only view.
- **Surprise me** — opens a random name from the currently filtered list.
- **Name details** — tap any card for a detail view with meaning, gender,
  and origin.
- **Copy a name card** — copies "Name (Bangla spelling) — meaning" to the
  clipboard.
- **Bilingual UI** — one tap switches all interface text between English
  and Bangla; the choice is remembered. Names and meanings stay as curated
  so they are identical in both languages.
- **Empty / error states** — a clear message when no name matches, and a
  one-tap "Clear filters" reset.
- **Fully offline** — no network requests, no tracking, no account.

## Stack

Vanilla HTML, CSS, and JavaScript. No build step, no dependencies, no
framework. Open `index.html` in any modern browser.

## Run it

```sh
# No install step. Serve the folder (or just open index.html):
python3 -m http.server 8000
# then open http://localhost:8000/
```

## Testing

```sh
node tests/logic.test.cjs   # 23 unit tests for filtering, sorting, random pick, favourites
```

Headless-Chrome smoke tests were run during development with a local CDP
harness (13 checks: 48 cards, search, gender filter, favourite persistence,
Bangla toggle, surprise dialog, empty state, 390px mobile, zero console
errors). The harness itself is not shipped in this repo.

## Limitations

- Meanings are the **commonly given** meanings for each name. Meanings vary
  by source, region, and family tradition, and Bangla spellings are common
  transliterations — families spell names differently.
- This is a browsing reference for parents, **not religious or official
  authority** on names or meanings.
- The dataset is a fixed starter set of 48 names, not an exhaustive list.
- Favourites and language choice live only in the current browser; clearing
  browser data removes them.

## Status

MVP complete: search, filters, sorting, favourites, random pick, detail
view, copy, and bilingual UI all implemented and tested.
