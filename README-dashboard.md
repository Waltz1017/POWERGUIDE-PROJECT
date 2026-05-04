# PowerGuide Dashboard

A responsive power grid monitoring dashboard built with HTML and Tailwind CSS. PowerGuide provides real-time visibility into local grid status, outage alerts, device battery health, and community reports.

---

## Features

- **Grid Status Overview** — Live stat cards for Voltage, Average Uptime, Local Reports, and Device Readiness
- **Local Activity Map** — Embedded live map showing grid activity in the local area (PH-NCR)
- **City Statistics Panel** — Alert-level cards (Critical, Warning, Stable) per city/area with affected users, ETR, uptime, and grid load
- **Recent Reports** — Latest community-submitted outage and maintenance reports
- **This Device** — Battery ring showing current charge percentage, runtime, and plug state
- **Guard Recommendation** — AI-style advisory card with storm warnings and device optimization suggestions
- **Report Outage Button** — Quick action to submit a new outage report
- **Responsive Sidebar Nav** — Collapsible on mobile with overlay, sticky on desktop

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
dashboard.html        # Single-file application
/img/
  ├── logo.png
  ├── dashboard.png
  ├── outagemap.png
  ├── voltage.png
  ├── avguptime.png
  ├── localreports-Picsart-BackgroundRemover.png
  ├── battery(1).png
  ├── localactivitymap-Picsart-BackgroundRemover.webp
  ├── map.png
  ├── recentreports.png
  ├── volt.png
  ├── maintenanceupdate.png
  ├── guardrecommendation.png
  ├── stormwarning.png
  ├── reports.png
  ├── settings.png
  ├── devices-Picsart-BackgroundRemover.png
  ├── findhubs-Picsart-BackgroundRemover.jpg
  └── profile.png
```

---

## Layout Overview

```
┌─────────────────────────────────────────────────────┐
│  Sidebar Nav                  Main Content           │
│  ─────────────                ─────────────────────  │
│  Logo                         Header (Welcome + CTA) │
│  Dashboard                    Stat Cards (x4)        │
│  Outage Map                   ┌──────────┬────────┐  │
│  Devices                      │ Map      │ Device │  │
│  Find Hubs                    │ Recent   │ Guard  │  │
│  ── COMMUNITY ──              │ Reports  │ Rec.   │  │
│  Reports                      └──────────┴────────┘  │
│  Settings                                            │
│  Pro Tip                                             │
└─────────────────────────────────────────────────────┘
```

---

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Mobile (`< lg`) | Sidebar hidden, toggled via hamburger button with dark overlay |
| Desktop (`lg+`) | Sidebar always visible and sticky |
| Cards (`xl`) | Stat cards go from 1–2 columns to 4 columns |
| Center section (`xl`) | Stacks vertically on smaller screens, side-by-side on `xl+` |

---

## Alert Levels

The City Statistics section uses three severity levels:

| Level | Color | Metrics Shown |
|---|---|---|
| `CRITICAL` | Red `#FF2E1F` | Affected users, ETR (Estimated Time to Restore) |
| `WARNING` | Yellow `#FFBB02` | Affected users, Status |
| `STABLE` | Green `#34FB34` | Uptime %, Grid Load |

---

## Getting Started

1. Clone or download the repository
2. Place all required images inside an `/img/` folder at the same level as `dashboard.html`
3. Open `dashboard.html` in any modern browser

> No build tools or package installation required — Tailwind CSS is loaded via CDN.

---

## Customization

- **Colors** — All brand colors are defined inline as Tailwind arbitrary values (e.g. `bg-[#FFBB02]`). Search and replace to retheme.
- **User name** — Replace `(User)` in the header `h1` with dynamic data from your backend.
- **Battery ring** — The SVG `stroke-dashoffset` on the yellow circle controls the fill. `314` = full circle (2πr). Decrease the offset to increase the visible arc.
- **Nav links** — All `<a href="">` elements have empty `href` attributes — wire these up to your routes.

---

## Notes

- All data fields marked `()` or `(placeholder)` are static placeholders awaiting backend integration.
- The sidebar Pro Tip section is hardcoded — consider making it dynamic based on current device state.
