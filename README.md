# AstroJyotish — Astro Blog

A static Hindi astrology blog built with Astro and designed for Cloudflare Pages.

## Features

- Home page with Load More Posts
- Individual article pages
- Category and tag pages with clean slugs
- Categories and Tags index pages
- Markdown content collection
- Article, WebSite and BreadcrumbList JSON-LD schema
- Canonical, Open Graph and Twitter metadata
- Sitemap and RSS
- Header / footer / head custom-code insertion
- Multiple ad placement slots
- Responsive design

## 1. Write an article

Create a Markdown file inside:

`src/content/posts/`

Example:

```md
---
title: "मेष राशि 2027: वार्षिक राशिफल"
description: "मेष राशि के लिए 2027 का वार्षिक राशिफल।"
date: 2027-01-01
category: "राशिफल"
tags: ["मेष", "राशिफल", "2027"]
author: "AstroJyotish"
featured: false
---

# मेष राशि 2027

अपना article यहां लिखें।

## करियर

Content...
```

The URL is generated automatically from the filename, for example:

`src/content/posts/mesh-rashi-2027.md` → `/posts/mesh-rashi-2027/`

The sample files use an explicit `slug`, so `01-mesh-rashi-2026.md` opens at `/posts/mesh-rashi-2026/` rather than exposing the numeric filename prefix.

## 2. Header / footer / head code

Open:

`src/config/site.ts`

You will find:

- `code.head` — code inside `<head>`
- `code.header` — code immediately after `<body>`
- `code.footer` — code immediately before `</body>`

This is useful for verification tags, analytics, GTM, scripts, etc.

## 3. Ads

The same file contains an `ads` section:

- `homeTop`
- `homeAfterPosts`
- `articleTop`
- `articleBeforeContent`
- `articleAfterContent`
- `articleSidebar`
- `footer`

Paste the complete ad unit HTML/JS into any slot. Leave it empty to disable that placement.

For ad networks that use one global loader script and separate ad units, put the loader once in `code.head` and the individual ad unit code in the relevant ad slots.

## 4. Local development

```bash
npm install
npm run dev
```

## 5. Cloudflare Pages

Build command:

```bash
npm run build
```

Output directory:

```text
dist
```

## 6. Change your production domain

Update `siteConfig.url` in `src/config/site.ts` and the `site` value in `astro.config.mjs` to your real domain. This keeps canonical URLs, sitemap and schema correct.

## 7. Category and tag URLs

Common Hindi terms use clean English aliases, for example:

- `/category/rashifal/`
- `/category/jyotish/`
- `/tag/mesh/`
- `/tag/vrishabh/`
- `/tag/rashifal/`

Other Hindi tags/categories automatically receive a URL-safe slug.
