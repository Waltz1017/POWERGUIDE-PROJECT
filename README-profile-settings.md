# PowerGuide — Profile Settings

The Profile Settings page allows users to manage their personal identity and account security. It provides a clean, centered form panel for updating basic profile information and changing passwords.

---

## Features

- **Basic Information Section** — Update full name and contact number
- **Security & Password Section** — Set a new password with confirmation field
- **Update Basic Profile Button** — Submits name and contact changes
- **Change Password Button** — Submits new password
- **Back to Home** — Navigation button to return to the main dashboard
- **Glowing card UI** — Amber drop shadow on the main panel for a consistent PowerGuide aesthetic

---

## Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Markup structure |
| Tailwind CSS (local `output.css`) | Utility-first styling and responsive layout |
| Google Fonts – Montserrat | Typography |

> ⚠️ Unlike other pages, this page uses a **locally compiled** `output.css` instead of the Tailwind CDN. Make sure to run the Tailwind build process before opening this file.

---

## Project Structure

```
portfolio.html        # Profile Settings page
output.css            # Compiled Tailwind CSS (required)
/img/
  ├── profile.png     ← Basic Information section icon
  └── lock.png        ← Security & Password section icon
```

---

## Layout Overview

```
┌────────────────────────────────────────────┐
│  Nav Bar                                   │
│  [← Back to Home]                          │
├────────────────────────────────────────────┤
│                                            │
│   ┌── PROFILE SETTINGS ────────────────┐   │
│   │  Manage your identity...           │   │
│   │                                    │   │
│   │  🧑 BASIC INFORMATION              │   │
│   │  [Full Name]    [Contact Number]   │   │
│   │  [Update Basic Profile]            │   │
│   │  ─────────────────────────────     │   │
│   │  🔒 SECURITY AND PASSWORD          │   │
│   │  [New Password] [Confirm Password] │   │
│   │  [Change Password]                 │   │
│   └────────────────────────────────────┘   │
│                                            │
└────────────────────────────────────────────┘
```

---

## Sections

### Basic Information
| Field | Type | Placeholder |
|---|---|---|
| Full Name | `text` | John C. Doe |
| Contact Number | `text` | +63 912 123 4567 |

Action: **Update Basic Profile** button (dark → yellow on hover)

### Security and Password
| Field | Type | Placeholder |
|---|---|---|
| New Password | `password` | `********` |
| Confirm Password | `password` | `********` |

Action: **Change Password** button (yellow → dark on hover)

---

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Mobile (`< sm`) | Form fields stack vertically, full width |
| Tablet (`sm+`) | Form fields display side by side at `48%` width each |
| Desktop (`lg+`) | Card fixed at `973px` wide, centered on screen |

---

## Getting Started

1. Ensure `output.css` is compiled from your Tailwind config
2. Place required images in the `/img/` folder
3. Open `portfolio.html` in any modern browser

To compile Tailwind CSS:
```bash
npx tailwindcss -i ./input.css -o ./output.css --watch
```

---

## Customization & Integration Notes

- **Form submission** — Both buttons have no `type="submit"` or JS handlers yet. Wire them to your backend API (e.g. `PATCH /api/user/profile` and `POST /api/user/change-password`).
- **Validation** — No client-side validation is implemented. Add password match checking before submitting the Change Password form.
- **Back to Home link** — Points to `/src/dashboard.html`. Update the `href` to match your actual routing setup.
- **Profile icon** — The nav only shows a Back button. Consider adding the user's avatar or name here for context.
- **Local CSS** — If switching to CDN Tailwind for consistency with other pages, replace `<link href="./output.css">` with the Tailwind CDN `<script>` tag.
