# FLIGHT400 Lab — Instructor Guide

> This file is committed to the repository but is **never served by GitHub Pages**.
> GitHub Pages only publishes the `docs/` folder. Everything in `instructor/` is
> visible only to people with repo access — not reachable from any public URL.

---

## 1. Repo Layout

```
docs/                    ← GitHub Pages root (everything here is public)
  index.html             ← Generic landing page (no company branding)
  css/styles.css         ← Shared styles — used by all event subfolders
  js/app.js              ← Shared JS — used by all event subfolders
  tracks/                ← Shared exercise partials — used by all event subfolders
    setup.html
    track-1.html … track-7.html
  img/                   ← Shared images
  _template/             ← Copy this for each new event
    index.html           ← DO NOT EDIT — identical copy for every event
    js/config.js         ← The only file you fill in per event
  acme/                  ← Example filled-in event (Acme Corp TechDay 2026)
    index.html
    js/config.js

instructor/              ← THIS FOLDER — repo only, never public
  INSTRUCTOR-GUIDE.md
```

**Key rule:** GitHub Pages publishes everything inside `docs/`. The `instructor/` folder at the repo root is private to collaborators.

---

## 2. How It Works

Each company subfolder (e.g. `docs/acme/`) contains only **two files**:

| File | What it does |
|---|---|
| `index.html` | Identical copy of `docs/_template/index.html` — loads shared CSS, JS, and tracks from `../` |
| `js/config.js` | The only file you edit — company name, event date, colors, agenda, attendee table |

All CSS, JS, track partials, and images live in `docs/` and are shared across every event subfolder via relative `../` paths. Updating a track exercise in `docs/tracks/` automatically updates every company event page.

---

## 3. Setting Up GitHub Pages

1. In your GitHub repo, go to **Settings → Pages**.
2. Set **Source** to **Deploy from a branch**.
3. Set **Branch** to your working branch (e.g. `github-pages-cameron`).
4. Set **Folder** to `/docs`.
5. Click **Save**.

GitHub Pages publishes everything inside `docs/` to:
```
https://<org>.github.io/<repo>/
```

The URLs for each event are then:
```
https://<org>.github.io/<repo>/           ← generic (no company branding)
https://<org>.github.io/<repo>/acme/      ← Acme Corp example
https://<org>.github.io/<repo>/contoso/   ← Contoso event (when you add it)
```

You give attendees the company-specific URL. The `_template/` and `instructor/` paths exist in the repo but are not meaningful pages to share.

---

## 4. Adding a New Company Event

### Step 1 — Copy the template

```bash
cp -r docs/_template docs/contoso
```

### Step 2 — Edit `docs/contoso/js/config.js`

This is the **only file you touch**. Fill in every field:

```js
window.FLIGHT400_CONFIG = {
  companyName:  'Contoso',
  eventName:    'Contoso Dev Day 2026',
  eventDate:    'Thursday, November 5, 2026',
  primaryColor: '#0078D4',   // Contoso blue — optional
  accentColor:  '#FFB900',   // Contoso gold — optional
  agendaItems: [
    { time: '10:00 – 10:15', title: 'Welcome', bullets: ['...'] },
    // add more sessions...
  ],
  attendeeTable: [
    { student: 1,  library: 'FLGHT401', devPort: 3001, reactUrl: 'http://localhost:3001' },
    { student: 2,  library: 'FLGHT402', devPort: 3002, reactUrl: 'http://localhost:3002' },
    // add all attendees...
  ]
};
```

### Step 3 — Commit and push

```bash
git add docs/contoso/
git commit -m "add Contoso Dev Day 2026 event"
git push
```

GitHub Pages redeploys automatically (usually within 1–2 minutes).

### Step 4 — Share the URL with attendees

```
https://<org>.github.io/<repo>/contoso/
```

---

## 5. Filling in the Attendee Table

The `attendeeTable` array replaces the generic 1–50 table in the Setup card. Add one row per attendee. The pattern is always:

| Field | Pattern |
|---|---|
| `student` | Sequential number: 1, 2, 3… |
| `library` | `'FLGHT4'` + zero-padded number: `FLGHT401`, `FLGHT402`… `FLGHT410`, `FLGHT411`… |
| `devPort` | `3000` + student number: 3001, 3002… |
| `reactUrl` | `'http://localhost:'` + devPort |

Full example for 10 attendees:
```js
attendeeTable: [
  { student: 1,  library: 'FLGHT401', devPort: 3001, reactUrl: 'http://localhost:3001' },
  { student: 2,  library: 'FLGHT402', devPort: 3002, reactUrl: 'http://localhost:3002' },
  { student: 3,  library: 'FLGHT403', devPort: 3003, reactUrl: 'http://localhost:3003' },
  { student: 4,  library: 'FLGHT404', devPort: 3004, reactUrl: 'http://localhost:3004' },
  { student: 5,  library: 'FLGHT405', devPort: 3005, reactUrl: 'http://localhost:3005' },
  { student: 6,  library: 'FLGHT406', devPort: 3006, reactUrl: 'http://localhost:3006' },
  { student: 7,  library: 'FLGHT407', devPort: 3007, reactUrl: 'http://localhost:3007' },
  { student: 8,  library: 'FLGHT408', devPort: 3008, reactUrl: 'http://localhost:3008' },
  { student: 9,  library: 'FLGHT409', devPort: 3009, reactUrl: 'http://localhost:3009' },
  { student: 10, library: 'FLGHT410', devPort: 3010, reactUrl: 'http://localhost:3010' }
]
```

---

## 6. Updating Lab Content

All exercise content lives in `docs/tracks/`. Every event subfolder picks up changes automatically — no copying required.

To update an exercise, edit `docs/tracks/track-N.html`, commit, and push. All company pages update immediately on next GitHub Pages deploy.

---

## 7. What Attendees Can and Cannot See

| URL | Visible to attendees? |
|---|---|
| `…/<repo>/` | ✅ Generic landing page |
| `…/<repo>/acme/` | ✅ Acme event page |
| `…/<repo>/_template/` | ⚠️ Reachable URL but shows a blank config (no company data) |
| `instructor/INSTRUCTOR-GUIDE.md` | ❌ Not inside `docs/` — never served |

> ✅ Each company's attendee table is only in that company's `config.js`. Attendees at Acme cannot see Contoso's table and vice versa — as long as you don't share the wrong URL.

---

## 8. Per-Event Checklist

- [ ] `cp -r docs/_template docs/<eventslug>`
- [ ] Edit `docs/<eventslug>/js/config.js`:
  - [ ] `companyName`
  - [ ] `eventName`
  - [ ] `eventDate`
  - [ ] `primaryColor` / `accentColor` *(optional)*
  - [ ] `agendaItems[]` *(remove array to hide Agenda button)*
  - [ ] `attendeeTable[]` — one row per attendee
- [ ] Commit and push
- [ ] Verify site at `https://<org>.github.io/<repo>/<eventslug>/`
- [ ] Share URL with attendees — do NOT share this guide
