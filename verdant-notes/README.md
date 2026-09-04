# Verdant Notes — Astro Blog Theme (Greenish, AdSense-Ready)

A second Astro.js theme, styled in a greenish palette, with the same
Markdown-driven Content Collections workflow as the first build — plus a
full editorial team system and every legal page Google AdSense reviewers
look for.

## File structure

```
/
├── astro.config.mjs
├── package.json
├── src/
│   ├── content/
│   │   ├── config.ts              Zod schema for blog posts
│   │   └── blog/
│   │       └── example-post.md    Sample post — drop new .md files here
│   ├── data/
│   │   └── authors.ts             Single source of truth for every writer/editor
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro           Links every page on the site
│   │   ├── AdSlot.astro
│   │   ├── AuthorBio.astro        Links to the writer's full profile
│   │   ├── Breadcrumb.astro
│   │   └── CookieBanner.astro
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── PostLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── blog/
│   │   │   ├── index.astro        Full post archive
│   │   │   └── [...slug].astro    Auto-renders every post
│   │   ├── team.astro             Editorial team grid
│   │   ├── team/
│   │   │   └── [author].astro     Individual author profile pages
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── privacy-policy.astro
│   │   ├── terms.astro
│   │   ├── disclaimer.astro
│   │   ├── gdpr.astro
│   │   └── dmca.astro
│   └── styles/
│       └── global.css
└── public/
    └── favicon.svg
```

## How the automated workflow works

1. Add a new file at `src/content/blog/your-post-name.md`.
2. Fill in frontmatter matching the schema in `src/content/config.ts`:
   `title`, `description`, `pubDate`, `authorSlug`, `category`, `tags`, `image` (optional).
3. `authorSlug` must match a `slug` in `src/data/authors.ts` — that's what
   links the post to a real author profile, avatar, and bio automatically.
4. Run `npm run build` (or `npm run dev` while writing). Astro picks up the
   file automatically and renders it at `/blog/your-post-name` through
   `src/pages/blog/[...slug].astro` — no other code changes needed.

## Editorial team / author profiles

- `src/data/authors.ts` holds every writer: name, role, short bio, long bio,
  areas of expertise, and social/email links.
- `/team` lists everyone with a card linking to their full profile.
- `/team/[slug]` (e.g. `/team/asha-fenn`) is a full profile page listing every
  post that author has written — generated automatically from the data file.
- Add a new team member by adding one object to `authors.ts`; a profile page
  and post listing appear on the next build.

## Getting started locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build       # outputs static files to dist/
npm run preview     # preview the production build locally
```

## Before you go live

1. **Find and replace** `verdantnotes.example` → your real domain in
   `astro.config.mjs` and check the meta tags render correctly.
2. **Replace placeholder emails** (`hello@`, `ads@`, `privacy@`, `dmca@`) and
   the mailing address on `contact.astro`, `privacy-policy.astro`, `dmca.astro`.
3. **Update `src/data/authors.ts`** with your real team, bios, and photos —
   swap the initials-avatar `<div>` for real `<img>` headshots if you have them.
4. **Add real ad units.** Once AdSense approves the site, paste your
   `<ins class="adsbygoogle">` code into each `<AdSlot />` usage (see the
   comment inside `AdSlot.astro`) and add the loader `<script>` to
   `BaseLayout.astro`'s `<head>`.
5. **Wire up the contact form** — it currently has no `action`; point it at
   Formspree, Getform, or your own serverless endpoint.
6. **Publish real posts** before applying to AdSense — thin or placeholder
   content is the most common rejection reason.
7. Consider adding `@astrojs/sitemap` and `@astrojs/rss` integrations for a
   real sitemap and RSS feed (both are referenced in `<head>` already).

## Why this is fast

- Astro's static output means every page ships as plain HTML/CSS with
  **zero JavaScript by default** — the only client JS on the whole site is
  the ~30-line mobile-nav toggle and the ~35-line cookie banner script,
  each scoped to the component that needs it.
- No client-side framework (React/Vue/etc.) is used or required.
- Images use explicit `width`/`height` to prevent layout shift (CLS), and
  non-critical images use `loading="lazy"`.
- CSS is a single small stylesheet with CSS variables — no utility-class
  bloat, no unused framework CSS shipped to the browser.

## AdSense compliance notes

- `<AdSlot />` always renders a visible "Advertisement" label, separated
  from content by a dashed border — never disguised as content or a button.
- Every legal page required for approval is pre-built and cross-linked from
  the footer on every page: About, Editorial Team, Contact, Privacy Policy
  (with Google DART cookie disclosure), Terms, Disclaimer, GDPR, and DMCA.
- The cookie banner offers both "Accept all" and "Reject non-essential" and
  links to the Privacy Policy and GDPR page.
- Semantic HTML5 landmarks (`header`, `nav`, `main`, `article`, `aside`,
  `footer`) and breadcrumbs are used throughout.
