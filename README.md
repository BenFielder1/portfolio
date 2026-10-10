# Ben Fielder's Portfolio Website

[![Next.js](https://img.shields.io/badge/Next.js-black?logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-teal?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

### **Visit [benfielder.com](https://benfielder.com)**

My personal portfolio: who I am, where I've worked, and what I've built. Next.js App Router, TypeScript and Tailwind CSS v4, deployed on Vercel.

## Structure

| Path | Purpose |
| --- | --- |
| `src/data/` | All site content (profile, projects, experience, education, skills). Edit these to update the site. |
| `src/app/` | Routes: home, `/projects`, `/experience`, `/cv` (printable, "Save as PDF"), `/contact`, plus the contact API, sitemap, robots and Open Graph image. |
| `src/components/` | Presentational components. |
| `src/app/globals.css` | Design tokens (dark by default, light via the toggle, both through `light-dark()`), base styles, print rules for the CV and the handful of shared utility classes. |

## Running locally

```bash
npm install
npm run dev
```

The contact form posts to `/api/contact`, which sends email through Gmail SMTP. Set these in `.env`:

```
EMAIL_USER=...   # Gmail account used to send
EMAIL_PASS=...   # App password for that account
EMAIL_TO=...     # Where messages are delivered
```

Without them the form returns a friendly error and the rest of the site works as normal.

## Checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
