# Elevate Automation — Company Website

The official marketing website for **Elevate Automation** — intelligent WhatsApp
automation & AI‑powered CRM systems that put B2B sales on autopilot.

A fast, SEO‑optimised, fully static multi‑page site. **No build step, no
dependencies, no framework** — just HTML, CSS and vanilla JavaScript. It deploys
anywhere (your own domain host, Netlify, Vercel, Cloudflare Pages, GitHub Pages,
any web server).

---

## ✨ What's inside

| Page | File | Purpose |
| --- | --- | --- |
| Home | `index.html` | Hero, live WhatsApp demo, features, dashboard, plans preview, FAQ |
| Solutions | `solutions.html` | Deep‑dive into the platform & every capability |
| Industries | `industries.html` | Who it's for, by sector |
| Plans | `plans.html` | Starter / Growth / Enterprise + comparison table **(no prices — "custom quote")** |
| About | `about.html` | Mission, values, technology |
| Contact | `contact.html` | Demo request form (opens WhatsApp/email pre‑filled) |
| Privacy | `privacy.html` | Privacy policy (template — have it reviewed) |
| Terms | `terms.html` | Terms of service (template — have it reviewed) |
| 404 | `404.html` | Friendly not‑found page |

**Supporting files**

```
assets/
  css/styles.css      → the full design system (dark, futuristic theme)
  js/main.js          → nav, scroll reveal, counters, FAQ, WhatsApp demo, contact form
  img/                → logo, favicons, OG social image (all generated)
robots.txt            → search‑engine directives
sitemap.xml           → all indexable URLs
site.webmanifest      → PWA / mobile install metadata
```

## 🔍 SEO features

- Unique `<title>` + meta description per page
- Canonical URLs, Open Graph & Twitter Card tags, `og:image` (1200×630)
- JSON‑LD structured data: Organization, WebSite, Service, FAQPage, BreadcrumbList, LocalBusiness
- `sitemap.xml` + `robots.txt`
- Semantic HTML5, single `<h1>` per page, descriptive `alt` text
- Fast: no external JS libraries; only Google Fonts is loaded remotely
- Mobile‑first responsive layout, accessible focus states, reduced‑motion support

---

## 🚀 Deploy

Because it's static, deployment is just "upload the files to your web root".

- **Any host / cPanel:** upload the whole folder to `public_html/` (or your web root).
- **Netlify / Vercel / Cloudflare Pages:** point them at this repo — no build command, publish directory is the repo root.
- **GitHub Pages:** enable Pages on this branch; the site serves from the root.

All internal links are **relative**, so the site also works when opened directly
(`file://…/index.html`) and from a sub‑folder.

---

## ⚙️ Before you go live — 2 things to update

### 1. Your domain (important for SEO)
Absolute URLs (canonical tags, Open Graph, sitemap) currently use the placeholder
**`https://elevateautomation.in`**. Replace it with your real domain everywhere:

```bash
# from the project root — replace with your actual domain
grep -rl "elevateautomation.in" . --include="*.html" --include="*.xml" --include="*.txt" \
  | xargs sed -i 's#https://elevateautomation.in#https://YOUR-DOMAIN.com#g'
```

Then update `sitemap.xml` and `robots.txt` if your domain differs.

> Tip: pick **one** canonical form (with or without `www`) and 301‑redirect the
> other at your host, so search engines don't see duplicate sites.

### 2. Contact details & links
These are set from your quotation. Change them if needed (search & replace):

| What | Current value |
| --- | --- |
| WhatsApp / phone | `+91 82001 91137` → links use `918200191137` |
| Email | `elevateelearning@gmail.com` |
| LinkedIn | `https://www.linkedin.com/company/elevate-automation` *(placeholder — update)* |
| Instagram | `https://www.instagram.com/elevateautomation` *(placeholder — update)* |

The contact form has **no server backend** — on submit it opens WhatsApp (or email)
with the enquiry pre‑filled, which is perfect for a WhatsApp‑first business and needs
zero hosting. To use a form backend instead (e.g. Formspree), point the `<form>` at it.

---

## 🎨 Customising

- **Colours / fonts / spacing:** all defined as CSS variables at the top of
  `assets/css/styles.css` (`:root { … }`). Change them in one place.
- **Logo & favicon:** `assets/img/logo-mark.svg` and `assets/img/favicon.svg`.
  The PNG favicons and the social share image (`og-image.png`) are generated — see below.
- **Testimonials:** none are fabricated. Add real client quotes when you have them.

### Regenerating the social image & favicons (optional)
If you change the logo or the OG design, regenerate the PNGs with the included
script (requires Node + Playwright/Chromium):

```bash
NODE_PATH=/opt/node22/lib/node_modules node scripts/gen-assets.cjs
```

*(The OG source is `scripts/og.html`.)*

---

© Elevate Automation. Built as a fast, static, SEO‑first site.
