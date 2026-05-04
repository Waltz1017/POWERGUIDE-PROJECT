# PowerGuide — Outage Map

The Outage Map page provides a real-time, interactive view of the power grid across multiple cities. It pairs a live map panel with a sortable City Statistics sidebar showing alert levels, affected users, ETR, and grid load per area.

---

## Features

- **Interactive Map Panel** — Full-area live map placeholder with a amber border indicator (ready for map SDK integration)
- **City Statistics Sidebar** — Scrollable list of city cards sorted by alert severity (Critical → Warning → Stable)
- **Header Stats Bar** — Displays total online nodes and active outage count at a glance
- **City Search** — Search input to filter or locate a specific city on the map
- **Layers Button** — Quick-access control for toggling map layers
- **Write Report Button** — Yellow action button to submit a new outage or incident report
- **Download Local Status Report** — Downloads a status report for the visible area
- **Responsive Sidebar Nav** — Collapsible on mobile with overlay, sticky on desktop (shared with Dashboard)

---

## Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Markup structure |
| Tailwind CSS (CDN) | Utility-first styling and responsive layout |
| Google Fonts – Montserrat | Typography |
| Vanilla JavaScript | Mobile sidebar toggle logic |

---

## Project Structure

```
outagemap.html        # Single-file page
/img/
  ├── logo.png
  ├── dashboard.png
  ├── outagemap.png
  ├── devices-Picsart-BackgroundRemover.png
  ├── findhubs-Picsart-BackgroundRemover.jpg
  ├── reports.png
  ├── settings.png
  ├── reports.svg        ← Write report button icon
  └── download.svg       ← Download button icon
```

---

## Layout Overview

```
┌──────────────────────────────────────────────────────────────┐
│  Sidebar Nav          Header (Title | Nodes | Outages | Search) │
│  ─────────────        ───────────────────────────────────────  │
│  Logo                 ┌──────────────────┬──────────────────┐  │
│  Dashboard            │                  │ City Statistics  │  │
│  Outage Map ◄         │   MAP AREA       │ ──────────────── │  │
│  Devices              │   (placeholder)  │ CRITICAL card    │  │
│  Find Hubs            │                  │ WARNING card     │  │
│  ── COMMUNITY ──      │                  │ STABLE card(s)   │  │
│  Reports              │                  │ ──────────────── │  │
│  Settings             │                  │ [Write Report]   │  │
│                       │                  │ [Download]       │  │
│                       └──────────────────┴──────────────────┘  │
└──────────────────────────────────────────────────────────────┘
```

---

## City Statistics Panel

The right-side panel (`w-[424px]`, `h-[738px]`) contains a scrollable list of city cards. Each card displays different metrics depending on its alert level:

| Alert Level | Badge Color | Metrics Shown |
|---|---|---|
| `CRITICAL` | Red `#FF2E1F` | Affected users, ETR (Estimated Time to Restore) |
| `WARNING` | Yellow `#FFBB02` | Affected users, Status (e.g. Monitoring) |
| `STABLE` | Green `#34FB34` | Uptime %, Grid Load (e.g. Medium) |

The scrollbar is hidden via `[&::-webkit-scrollbar]:hidden` for a cleaner look while keeping scrollability.

---

## Header Bar

The top header (`bg-[#31324C]`, `h-28` on desktop) contains two zones:

**Left:**
- Page title: *Interactive Outage Map*
- Subtitle: *REAL-TIME GRID INTELLIGENCE*
- Live stats: Online Nodes count, Active Outages count

**Right:**
- City search input (`w-80` on desktop, full-width on mobile)
- Layers button (links to map layer controls)

---

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Mobile (`< lg`) | Sidebar hidden, toggled via hamburger button with dark overlay |
| Desktop (`lg+`) | Sidebar always visible and sticky |
| Header (`lg`) | Stats and search stack vertically on mobile, inline on desktop |
| City Stats panel | Width fixed at `w-[424px]` on `md+`, full width on mobile |

---

## Getting Started

1. Clone or download the repository
2. Place all required images inside an `/img/` folder at the same level as `outagemap.html`
3. Open `outagemap.html` in any modern browser

> No build tools or package installation required — Tailwind CSS is loaded via CDN.

---

## Customization & Integration Notes

- **Map area** — The map `<div>` is currently a placeholder with a border and lorem ipsum. Replace it with a map SDK embed (e.g. Leaflet.js, Mapbox, Google Maps).
- **City cards** — Placeholder values like `(City/Place)`, `(cause)`, `() users`, and `d/h/m` should be replaced with dynamic data from your backend API.
- **Sort by Alert Level** — The sort button is currently a static label. Wire it up to a JS sort function that reorders the city cards by severity.
- **Search** — The search input has no JS logic yet. Connect it to filter city cards or pan the map to the searched location.
- **Layers button** — Currently an `<a href="">`. Link it to a map layer toggle panel or modal.
- **Write Report button** — Trigger a modal (see modal pattern in dashboard) for submitting outage reports.
- **Download button** — Wire to a backend endpoint that generates and returns a PDF or CSV status report.
- **Pro Tip block** — Commented out in this page. Uncomment and populate if needed.
