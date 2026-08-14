# FLIGHT400 GitHub Pages Lab Site — Plan

## Overview

Convert the FLIGHT400 lab README into a GitHub Pages attendee-facing website. The site mirrors the style/structure of the example (`techweek.bob`) but is scoped to what attendees need — no instructor setup, no extra features.

Two flavours of the site are produced:

- **Generic** (`docs/`) — standalone, reusable for any event; contains all real lab content (Exercises 1–7 + Setup) but no event-specific branding. The FLGHT4NN assignment table is shown as static content (rows 1–50) so attendees can look up their number from any event context.
- **Company-specific template** (`docs-company/`) — extends the generic with placeholders for event name, agenda, company logo, company color, and the attendee FLGHT4NN assignment table **filled in from `config.js`** (populated by the instructor before the event).

The README is **not touched**.

## Confirmed Decisions

| Question | Decision |
|---|---|
| GitHub Pages root | `docs/` folder on the `github-pages-cameron` branch |
| Track display pattern | Expandable cards inline on the landing page (same as example) |
| Generic attendee table | Show static rows 1–50 as generic reference; company template fills from config |

---

## File Layout

```
docs/                      ← GitHub Pages root (generic)
  index.html               ← Landing page: hero + expandable track cards
  css/
    styles.css             ← Dark-theme IBM Carbon-inspired styles (ported from example)
  js/
    app.js                 ← Starfield + card expand/collapse + step confirm + progress footer
  tracks/
    setup.html             ← Part 0 — Environment Setup partial (attendee steps only)
    track-1.html           ← Exercise 1 — React Warm-Up (optional)
    track-2.html           ← Exercise 2 — Code Explanation & Architecture Docs
    track-3.html           ← Exercise 3 — Program Modernization
    track-4.html           ← Exercise 4 — Field Expansion
    track-5.html           ← Exercise 5 — Database Optimization
    track-6.html           ← Exercise 6 — Ask Bob About Your System
    track-7.html           ← Exercise 7 — RPGUnit Testing
  img/
    bob-image.png          ← Copied from example
    flight400.png          ← Copied from pics/

docs-company/              ← Company-specific template layer
  index.html               ← Hero driven by config.js: company name, logo, event date, agenda modal
  css/
    overrides.css          ← CSS variable overrides for company primary/accent colors only
  js/
    config.js              ← All event customisation in one place (see Sub-Task 4)
  img/
    company-logo.png       ← Placeholder image
  tracks/ → ../docs/tracks ← No duplication; company template references generic track partials

instructor/                ← NEVER served by GitHub Pages (outside docs/)
  INSTRUCTOR-GUIDE.md      ← How to customise for a new event, deploy, and manage the site
```

> ⚠️ GitHub Pages only serves the `docs/` folder. The `instructor/` folder is committed to the repo but is never reachable via any public URL — it's repo-only documentation.

---

## Sub-Tasks

---

### Sub-Task 1 — Scaffold Shared CSS and JS (Generic)

**Intent:** Port the CSS design tokens, dark-theme base styles, card expand/collapse, starfield canvas, and global progress footer from the example into a clean `docs/css/styles.css` and `docs/js/app.js`. Strip out ATL Tech Week branding, Credly badge logic, LinkedIn share popup, and Google Analytics — keep only what serves an attendee doing lab steps.

**Expected Outcomes:**
- `docs/css/styles.css` has: reset, CSS tokens, body, hero, section-intro, `.bubble-card` expand/collapse, `.card-summary`, `.card-detail`, `.mode-step`, `.step-prompt` code blocks, global progress footer, responsive layout.
- `docs/js/app.js` has: starfield canvas, hero scroll-to-tracks CTA, card expand/collapse toggle, step confirm buttons, progress footer update logic.
- No Credly, no LinkedIn, no Google Analytics, no ATL-specific copy.

**Todo List:**
1. Create `docs/css/` and `docs/js/` directories.
2. Port CSS from `example-github-pages/techweek.bob/css/styles.css` — adapt color tokens for a generic IBM i / FLIGHT400 palette (IBM Blue as primary, keep dark theme).
3. Port JS from `example-github-pages/techweek.bob/js/app.js` — keep starfield, hero CTA, card accordion, step confirm, progress footer. Remove analytics, badge, confetti, LinkedIn.
4. Copy `example-github-pages/techweek.bob/img/bob-image.png` → `docs/img/bob-image.png`.
5. Copy `pics/flight400.png` → `docs/img/flight400.png`.

**Relevant Context:**
- Source CSS: [`example-github-pages/techweek.bob/css/styles.css`](example-github-pages/techweek.bob/css/styles.css)
- Source JS: [`example-github-pages/techweek.bob/js/app.js`](example-github-pages/techweek.bob/js/app.js)
- Track card HTML pattern: [`example-github-pages/techweek.bob/tracks/track-a.html`](example-github-pages/techweek.bob/tracks/track-a.html)

**Status:** [x] done

---

### Sub-Task 2 — Build the Track Partials (Setup + Exercises 1–7) (Generic)

**Intent:** Create one HTML partial per track (Setup + 7 exercises), translating README content into the card+step UI pattern from the example. Each track partial is a self-contained `<div class="bubble-card track-N">` that includes: card summary (icon, label, title, description, tags), and card detail with numbered mode-steps containing step titles, descriptions, and copyable prompt blocks.

Exclude all instructor-only content (instructor setup notes, "After the prompt" review checklists, compile-decision guidance meant for facilitators). Keep all attendee-facing prompts, expected results, and tips.

The Setup partial includes the **generic FLGHT4NN assignment table** (static rows 1–50 matching the README) so attendees at any event can look up their number. The table is accompanied by the same tip text from the README about Dev Port usage.

**Expected Outcomes:**
- `docs/tracks/setup.html` — Part 0 Environment Setup (IBM i credentials, SSH tunnel, extension install, library number table, IBM i connection steps).
- `docs/tracks/track-1.html` through `docs/tracks/track-7.html` — one card per exercise.
- Every copyable Bob prompt is wrapped in a `.step-prompt <pre>` block.
- Optional sub-steps are clearly marked `(Optional)`.
- Images reference `../img/` and are copied for any referenced screenshots.

**Todo List:**
1. Create `docs/tracks/` directory.
2. Write `setup.html` from README Part 0 (lines 10–81) — attendee steps only. Include static FLGHT4NN table (rows 1–50).
3. Write `track-1.html` from Exercise 1 (lines 83–158).
4. Write `track-2.html` from Exercise 2 (lines 160–244).
5. Write `track-3.html` from Exercise 3 (lines 246–299).
6. Write `track-4.html` from Exercise 4 (lines 301–621).
7. Write `track-5.html` from Exercise 5 (lines 624–791).
8. Write `track-6.html` from Exercise 6 (lines 793–812).
9. Write `track-7.html` from Exercise 7 (lines 814–909).
10. Copy relevant images from `pics/` → `docs/img/` for screenshots referenced in the tracks.

**Relevant Context:**
- README: [`README.md`](README.md)
- Track card pattern: [`example-github-pages/techweek.bob/tracks/track-a.html`](example-github-pages/techweek.bob/tracks/track-a.html)

**Status:** [x] done

---

### Sub-Task 3 — Build the Generic `index.html` (Generic)

**Intent:** Create the generic landing page that loads all track partials into the tracks stream, displays a hero with FLIGHT400 branding, a "New to Bob?" modal (install + open folder steps), and the "Pick Your Track" scroll CTA. No event agenda, no company details.

**Expected Outcomes:**
- `docs/index.html` is a complete, self-contained HTML file.
- Hero shows: "FLIGHT400 — IBM i Modernization Lab", "Pick Your Track" CTA.
- "New to Bob?" modal covers: IBM Bob trial sign-up link, download link, open-folder guidance.
- Track cards for Setup + Exercises 1–7 render in the tracks stream via JS `fetch` or `<div>` includes.
- Global progress footer shows current track and step count.
- Footer reads: "Made with IBM Bob · FLIGHT400 Lab".

**Todo List:**
1. Create `docs/index.html` with HTML shell (head, meta, fonts, CSS/JS links).
2. Add hero section with FLIGHT400 title, subtitle "IBM i Modernization Lab", and "Pick Your Track" scroll CTA.
3. Add "New to Bob?" modal (2 tabs: Install Bob, Open a Folder) — same pattern as example, generic copy.
4. Add `<section id="tracks-section">` with a `<div id="tracks-stream">`.
5. In `app.js`, implement inline partial loader: fetch each `tracks/*.html` file and inject into `#tracks-stream` in order (Setup first, then tracks 1–7).
6. Add global progress footer (track name + step count).
7. Add page footer: "Made with IBM Bob · FLIGHT400 Lab".

**Relevant Context:**
- Example index: [`example-github-pages/techweek.bob/index.html`](example-github-pages/techweek.bob/index.html)

**Status:** [x] done

---

### Sub-Task 4 — Build the Company-Specific Template

**Intent:** Create a `docs-company/` folder that extends the generic site with event-specific slots: company name, logo, event date/name, agenda modal, and the per-attendee FLGHT4NN assignment table **rendered dynamically from a `config.js`** that an instructor fills in before the event. The track content (Exercises 1–7 + Setup) is NOT duplicated — `docs-company/` references `../docs/tracks/` relative paths.

**Expected Outcomes:**
- `docs-company/index.html` — hero driven by `config.js`: shows company name, event name, event date; includes agenda modal and company logo.
- `docs-company/js/config.js` — single JS config object with fully-documented fields:
  - `companyName` — displayed in hero and footer
  - `eventName` — e.g. "TechConnect 2026"
  - `eventDate` — e.g. "Tuesday, September 9, 2026"
  - `primaryColor` — hex, overrides `--primary` CSS token
  - `accentColor` — hex, overrides `--accent` CSS token
  - `agendaItems[]` — array of `{ time, title, description }` objects rendered into the agenda modal
  - `attendeeTable[]` — array of `{ student, library, devPort, reactUrl }` rows rendered into the Setup card's assignment table **in place of** the static generic table
- `docs-company/css/overrides.css` — only `--primary` and `--accent` CSS variable overrides; everything else inherited from `../docs/css/styles.css`.
- Agenda modal present in company index but absent in generic index.
- `docs-company/img/company-logo.png` — placeholder SVG exported as PNG.
- `docs-company/README-TEMPLATE.md` — step-by-step guide for instructors: what to fill in, which files to touch, how to deploy.

**Todo List:**
1. Create `docs-company/css/`, `docs-company/js/`, `docs-company/img/` directories.
2. Write `docs-company/js/config.js` with full JSDoc comments on every field; populate `attendeeTable` with a sample of 5 placeholder rows and a comment showing the full 1–50 pattern to fill in.
3. Write `docs-company/css/overrides.css` with `--primary` and `--accent` overrides defaulting to IBM Blue.
4. Write `docs-company/index.html` — links both `../docs/css/styles.css` and `./css/overrides.css`; JS reads `config.js` to populate hero text, agenda modal, and override CSS tokens at runtime; track stream loads partials from `../docs/tracks/`.
5. Create `docs-company/img/company-logo.png` placeholder.
6. Write `docs-company/README-TEMPLATE.md` with instructor customization instructions.

**Relevant Context:**
- Generic `index.html` (created in Sub-Task 3): `docs/index.html`
- Agenda modal pattern: [`example-github-pages/techweek.bob/index.html`](example-github-pages/techweek.bob/index.html) lines 177–298
- Generic track partials (Sub-Task 2): `docs/tracks/*.html`

**Status:** [x] done

---

### Sub-Task 5 — Write the Instructor Guide (Outside `docs/`)

**Intent:** Create a `instructor/INSTRUCTOR-GUIDE.md` file that lives in the repo but is **never served by GitHub Pages** (GitHub Pages only publishes `docs/`). This is the single reference an instructor or event organiser needs to: customise the company-specific template, deploy the site, and hand attendees the right URL.

**Expected Outcomes:**
- `instructor/INSTRUCTOR-GUIDE.md` exists and covers:
  1. **Repo layout** — explains the `docs/` vs `docs-company/` vs `instructor/` split and why each exists.
  2. **Deploying the generic site** — enabling GitHub Pages from `docs/` on the branch, what the resulting URL looks like.
  3. **Creating a company-specific event** — step-by-step: copy `docs-company/` to a new folder (e.g. `docs-acme/`), edit `config.js` fields (with a filled-in example), swap `company-logo.png`, change GitHub Pages source to the new folder, re-deploy.
  4. **Filling in the attendee table** — how to populate `attendeeTable[]` in `config.js`, with a complete 1–50 example snippet.
  5. **What attendees see vs. what's in the repo** — explicitly states that `instructor/` and `docs-company/` are not reachable by attendees.
  6. **Updating lab content** — how to edit a track partial in `docs/tracks/` and have both generic and company sites pick it up automatically.

**Todo List:**
1. Create `instructor/` directory.
2. Write `instructor/INSTRUCTOR-GUIDE.md` covering all six sections above.

**Relevant Context:**
- GitHub Pages docs: publishes only the configured source folder (`docs/`) — subdirectories outside it are not served.
- Company config: `docs-company/js/config.js` (created in Sub-Task 4).

**Status:** [x] done

---

## Non-Goals

- No Credly badge system.
- No Google Analytics.
- No LinkedIn share.
- No confetti.
- No modifications to `README.md`.
- No instructor-setup content on the site.
- No server-side code — pure static HTML/CSS/JS.
