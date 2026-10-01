# AstroJyotish — Astro Blog for Cloudflare Pages

A fast, static astrology blog built with Astro and Markdown content collections.

## 1. Install and run

Requirements: Node.js 20+ recommended.

```bash
npm install
npm run dev
```

Open the local URL shown by Astro.

## 2. Write a new article

Create a Markdown file inside:

`src/content/posts/`

Example:

```md
---
title: "मेरा नया राशिफल लेख"
description: "लेख का छोटा SEO description।"
date: 2026-10-01
category: "राशिफल"
tags: ["मेष", "राशिफल"]
author: "AstroJyotish"
featured: false
---

# मेरा नया राशिफल लेख

यहां पूरा article लिखें।

## करियर

Article content...
```

The filename becomes the URL slug. For example:

`mesh-rashi-2026.md` → `/posts/mesh-rashi-2026/`

## 3. Categories

Use any category name in frontmatter. A category page is generated automatically, for example:

`category: "राशिफल"` → `/category/राशिफल/`

## 4. Tags

Add tags as an array:

```yaml
tags: ["मेष", "2026", "राशिफल"]
```

Each tag gets its own page automatically.

## 5. Publish on Cloudflare Pages

Push the project to GitHub and create a Cloudflare Pages project connected to that repository.

Build command:

```text
npm run build
```

Output directory:

```text
dist
```

Every Git push can then trigger a new build.

## 6. Important before launch

1. Change `site` in `astro.config.mjs` from `https://example.com` to your real domain.
2. Change the contact email in `src/pages/contact/index.astro`.
3. Replace sample posts with your real articles.
4. Add your logo/favicon if needed.
5. Add your privacy policy, disclaimer and terms pages if the site will be monetized.

## Folder structure

```text
src/
├── components/PostCard.astro
├── content/posts/*.md
├── layouts/BaseLayout.astro
├── pages/
│   ├── index.astro
│   ├── posts/index.astro
│   ├── posts/[...slug].astro
│   ├── category/[category].astro
│   ├── tag/[tag].astro
│   ├── about/index.astro
│   ├── contact/index.astro
│   └── rss.xml.js
└── styles/global.css
```
