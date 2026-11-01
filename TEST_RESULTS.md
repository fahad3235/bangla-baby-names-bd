# Test results — Bangla Baby Names BD (2026-11-01, 12:00 slot)

- Node unit tests (`node tests/logic.test.cjs`): **23/23 passed**.
  Covers dataset shape (48 names, 20/20/8 gender split, no duplicates),
  search (Latin, Bangla, case-insensitive, meaning substring), gender and
  origin filters, combined filters, sorting A–Z/Z–A, seeded random pick,
  favourites toggle/sort/filter, and corrupt favourites handling.
  One repair cycle: a test expectation was corrected (Bangla-origin names
  are 3 — Shuvo, Diya, Hiya — not 2); the app data was correct.
- Headless-Chrome smoke (raw CDP, stock Playwright headless_shell, file://):
  **13/13 passed**, 0 console/page errors. Hand-verified: 48 cards on
  desktop and at 390px mobile, search "light" → Diya, Noor, Tanvir, gender
  girl → 20 cards, star favourite persisted in localStorage, favourites-only
  → 1 card, Bangla toggle changed the tagline and persisted, Surprise me
  opened the detail dialog, no-match search showed the empty state.
  One repair cycle: the smoke expectation for "light" was corrected from 2
  to 3 (Tanvir's "Enlightenment" also contains "light"); the app was right.
- Note: the Hatch-patched Chromium binary failed to start its debugger in
  the two previous runs (#200, #202), so smoke used the stock Playwright
  headless_shell binary, as in run #202.
