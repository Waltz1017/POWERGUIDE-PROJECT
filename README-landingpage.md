# ⚡ PowerGuide — Landing Page

> **Security and Reliability** — The ultimate companion for managing power outages and device longevity in Dagupan City.

---

## 📖 Overview

PowerGuide is a community-focused web application designed to help residents of Dagupan City stay informed and prepared during power outages. The landing page serves as the public-facing entry point, showcasing the platform's core features and mission.

---

## 🗂️ Project Structure

```
powerguide/
├── index.html          # Main landing page
├── output.css          # Compiled Tailwind CSS
└── img/
    ├── logo.png
    ├── landingbg.png
    ├── nointernet.png
    ├── unprepared.jpg
    ├── deadbattery.png
    ├── data.png
    ├── location.png
    ├── realtime.png
    ├── battery.png
    ├── lightbulb.png
    ├── plug.png
    ├── bell.png
    ├── facebook.jpg
    ├── twitter.png
    └── github.png
```

---

## 🚀 Features Showcased

| Feature | Description |
|---|---|
| 📍 Outage Reporting | Crowdsourced reporting with location, time, and description |
| 🗺️ Real-Time Monitoring | Dynamic map of nearby outages with verification status |
| 🔋 Smart Battery Tracking | Automatic and manual battery alerts before device dies |
| 💡 Proactive Advice | AI-driven power-saving tips based on battery level and outage duration |
| 🔌 Charging Finder | Locates public charging stations and solar hubs nearby |
| 🔔 Notification Alerts | Online and offline push notifications for outage awareness |

---

## 🛠️ Tech Stack

- **HTML5** — Semantic markup
- **Tailwind CSS** — Utility-first styling via compiled `output.css`
- **Google Fonts** — Montserrat typeface
- **Vanilla JavaScript** — Mobile hamburger menu toggle

---

## ⚙️ Setup & Usage

This is a static HTML page. No build step is required to view it, but Tailwind CSS must be compiled if you modify styles.

### 1. Clone the repository

```bash
git clone https://github.com/your-username/powerguide.git
cd powerguide
```

### 2. Install Tailwind CSS (if modifying styles)

```bash
npm install -D tailwindcss
npx tailwindcss -i ./input.css -o ./output.css --watch
```

### 3. Open the page

Open `index.html` directly in your browser, or serve it with a local server:

```bash
npx serve .
# or
python -m http.server 8000
```

---

## 📐 Page Sections

| Section | ID | Description |
|---|---|---|
| Header | — | Sticky nav with Login/Sign Up and mobile menu |
| Hero | `#hero-section` | Main headline, CTA buttons, background image |
| About / Why PowerGuide | `#About-section` | Problem context cards + mission quote |
| Features | `#Features-section` | Six feature cards in a responsive grid |
| Footer | — | Brand info, links, social media, email subscription |

---

## 📱 Responsive Design

The layout is fully responsive across breakpoints using Tailwind CSS:

- **Mobile** — Stacked single-column layout with hamburger menu
- **Tablet (sm/md)** — Two-column grids, larger typography
- **Desktop (lg)** — Side-by-side sections, full navigation bar

---

## 🎨 Design Tokens

| Token | Value | Usage |
|---|---|---|
| Primary Yellow | `#FFBB02` | Accents, CTAs, highlights |
| Background Dark | `#03041A` | Section backgrounds |
| Card Background | `#0C0D2A` | Feature and info cards |
| Footer Background | `#0B0C22` | Footer area |
| Card Glow | `box-shadow: 0 0 20px` | Yellow, blue, red, green per card |

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

© 2026 PowerGuide. Built for the community.

---

## 📬 Contact

- **Facebook:** [facebook.com](https://www.facebook.com/)
- **Twitter/X:** [twitter.com](https://www.twitter.com/)
- **GitHub:** [github.com](https://www.github.com/)
