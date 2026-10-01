# Job Career Hub — Astro Static Job Blog

A customizable English-language Astro blog starter for job websites covering India, the UK, the US and other countries.

## Features

- Responsive English job-blog UI
- Home page with Load More Posts
- Static article pages
- Categories and tags
- Country/location archives
- Client-side search across title, description, category, tags and article body
- Recently Published sidebar
- Related Jobs & Articles based on category/tags
- JSON-LD Website, BlogPosting and BreadcrumbList schema
- Canonical, Open Graph and Twitter metadata
- Sitemap and RSS
- Central configuration for branding, navigation, theme, labels, custom code and ad placements
- Markdown content system
- Cloudflare Pages compatible

## Local development

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
```

Cloudflare Pages:

- Build command: `npm run build`
- Output directory: `dist`

## Write a new article

Create a Markdown file in:

`src/content/posts/`

Example:

```md
---
title: "Customer Service Jobs in the UK: Requirements and How to Apply"
slug: "customer-service-jobs-uk"
description: "A guide to customer service jobs, requirements and application tips."
date: 2026-10-02
category: "UK Jobs"
tags: ["UK Jobs", "Customer Service", "Jobs"]
countries: ["United Kingdom"]
author: "Job Career Hub"
featured: false
---

# Customer Service Jobs in the UK

Write the article here.

## Requirements

Write the section here.
```

The article URL will be:

`/posts/customer-service-jobs-uk/`

## Central customization

Edit:

`src/config/site.ts`

You can change:

- Site name
- Domain
- Description
- Logo text
- Theme colors
- Navigation
- Footer links
- Homepage hero text
- Search placeholder
- Number of posts shown before Load More

### Header / Footer / Head code

```ts
code: {
  head: '',
  header: '',
  footer: '',
}
```

Paste trusted HTML/JS into these slots. Useful for analytics, GTM, verification tags or other site-wide scripts.

### Ad placement

```ts
ads: {
  header: '',
  homeTop: '',
  homeAfterHero: '',
  homeAfterPosts: '',
  homeBottom: '',
  archiveTop: '',
  articleTop: '',
  articleBeforeContent: '',
  articleAfterParagraph: '',
  articleAfterContent: '',
  articleSidebarTop: '',
  articleSidebarMiddle: '',
  articleSidebarBottom: '',
  footer: '',
}
```

Paste a complete ad snippet into the desired slot. Empty slots render nothing.

## Search

The build generates `/search-index.json`. The search page loads that static index in the browser and searches title, description, category, tags, country and article body.

## Content fields

Required:

- `title`
- `description`
- `date`
- `category`

Optional:

- `slug`
- `updated`
- `tags`
- `countries`
- `image`
- `author`
- `featured`

## Important before production

1. Change `siteConfig.url` to your real domain.
2. Update `astro.config.mjs` `site` to the same canonical domain.
3. Replace the placeholder About, Contact, Privacy Policy and Terms content.
4. Add your real logo/OG image if required.
5. Add only the ad/analytics scripts you actually use.
6. Verify every job listing against the employer's official source before publishing.
