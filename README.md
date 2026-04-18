# mert.okar_ // system

Personal website — **SYSTEM/LOG**, a dark terminal-zine. Next.js 14 App Router, TypeScript, Tailwind, MDX. Bilingual (EN / TR).

Live aesthetic: JetBrains Mono on a `#0d0d0c` grid with amber `#f5a524` accents, a crosshair cursor, a scanline overlay, a `⌘K` / `/` command palette, and an `uptime` easter egg.

---

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you'll be redirected to `/en`. The TR site lives at `/tr`.

```bash
npm run build      # production build
npm start          # serve built app
npm run lint
```

Deploys to Vercel with zero config — no env vars, no placeholder keys, no hardcoded domains.

## Routes

Every public page is under a locale segment. `/` redirects to the default locale (`en`).

| Path                     | EN                        | TR                        |
| ------------------------ | ------------------------- | ------------------------- |
| Home                     | `/en`                     | `/tr`                     |
| Work index               | `/en/work`                | `/tr/work`                |
| Work detail              | `/en/work/[slug]`         | `/tr/work/[slug]`         |
| Now                      | `/en/now`                 | `/tr/now`                 |
| Contact                  | `/en/contact`             | `/tr/contact`             |

Slugs are shared between locales, so deep links translate 1:1 when you flip the switcher in the status bar.

## Folder structure

```
web/
├── content/
│   └── work/
│       ├── en/*.mdx          # English case studies
│       └── tr/*.mdx          # Turkish case studies — same slugs
├── src/
│   ├── app/
│   │   ├── layout.tsx        # root — fonts only
│   │   ├── globals.css       # design tokens as CSS vars (--bg, --amber, etc.)
│   │   ├── page.tsx          # / → redirect(/en)
│   │   ├── not-found.tsx
│   │   └── [locale]/
│   │       ├── layout.tsx    # metadata, chrome (status bar, nav, crosshair, palette, egg)
│   │       ├── page.tsx      # /[locale]
│   │       ├── opengraph-image.tsx  # per-locale OG
│   │       ├── work/page.tsx        # /[locale]/work (with tag filter)
│   │       ├── work/[slug]/page.tsx
│   │       ├── now/page.tsx
│   │       └── contact/page.tsx
│   ├── components/
│   │   ├── status-bar.tsx        # client — live clock + uptime + locale switcher
│   │   ├── locale-switcher.tsx   # client — EN | TR toggle
│   │   ├── nav-bar.tsx           # client — locale-aware links
│   │   ├── crosshair.tsx         # client
│   │   ├── command-palette.tsx   # client — ⌘K / "/" palette, localized commands
│   │   ├── easter-egg.tsx        # client
│   │   ├── work-row.tsx          # client — hover
│   │   ├── work-filter.tsx       # client — tag filter
│   │   ├── work-table.tsx        # server
│   │   ├── now-table.tsx         # server — reads processes from dict
│   │   ├── ticker.tsx            # server
│   │   ├── section-head.tsx      # server
│   │   ├── contact-yaml.tsx      # client — copy-email
│   │   ├── uptime-inline.tsx     # client
│   │   └── cmd-button.tsx        # client
│   └── lib/
│       ├── i18n.ts           # Locale type, DEFAULT_LOCALE, localePath()
│       ├── dict/en.ts        # all English UI strings
│       ├── dict/tr.ts        # all Turkish UI strings (shape mirrors en.ts)
│       ├── mert.ts           # locale-neutral bio data (email, stack, etc.)
│       └── work.ts           # getAllWork(locale) / getWork(locale, slug)
├── tailwind.config.ts
└── next.config.mjs
```

Pages stay server components and pass `dict` + `locale` into client components as plain serializable props (strings only — no functions). The only `"use client"` boundaries are those that need browser state: clock, hover, keyboard, clipboard, active route, locale switcher.

## Content

### Adding a new case study

Each case study lives as twin MDX files — one under `content/work/en/` and one under `content/work/tr/` — with the **same filename and `slug`**.

```mdx
---
slug: my-new-case
no: "06"
year: "2025 —"
title: My New Case
kicker: One-line subtitle
desc: Longer description for list views.
tags:
  - Python
  - Integration
result: Short outcome for the table
role: Your role
team: Who was involved
stack:
  - Python
  - Kafka
impact:
  - ["Metric name", "value"]
  - ["Other metric", "before → after"]
learned: The one-sentence lesson that goes in the blockquote.
---

## Problem

One paragraph describing the problem.

## Approach

1. First thing you did.
2. Second thing.
3. Third thing.
4. Fourth thing.
```

No registration, no imports — just drop both files in. Ordering is by the `no` field. Tags and `stack` typically stay in English because that's how industry terms are used in both languages; translate `title`, `kicker`, `desc`, `result`, `role`, `team`, `impact` labels, `learned`, and the body.

YAML gotchas when translating to Turkish:

- Quote any value that **starts** with `%`, `-`, `[`, `!`, `&`, `*`, `>`, `|`, `?`, `:`, `@`, `` ` ``. Example: `result: "%3.5 → %0.5"`.
- If the value **starts** with a single quote (e.g. `'Sıfır duruş'u…`), wrap the whole value in double quotes.

### Editing UI chrome copy

All non-case-study copy lives in two files: `src/lib/dict/en.ts` and `src/lib/dict/tr.ts`. Both share the same shape (enforced by `tr: EnDict`) — if you add a key in `en.ts`, TypeScript will force you to add it in `tr.ts` too.

### Editing bio / stack / email

`src/lib/mert.ts` — locale-neutral data only (email, LinkedIn URL, tech stack). Localized bio copy lives in the dictionaries (`home.bio`, `home.metrics`, etc.).

## Theme

All design tokens live as CSS variables in `src/app/globals.css`:

```css
:root {
  --bg:         #0d0d0c;
  --bg2:        #151513;
  --bg3:        #1e1e1c;
  --fg:         #e8e4d7;
  --muted:      #6e6a5c;
  --amber:      #f5a524;  /* accent */
  --green:      #8fb339;
  --red:        #d0361c;
  --grid:       rgba(232,228,215,0.05);
  --rule:       rgba(232,228,215,0.18);
}
```

### Changing the accent

Edit `--amber` in `globals.css`. It cascades through every amber border, highlight, button, nav pill, and animation. Try:

- Cyan: `#38e1d8`
- Magenta: `#e84a7a`
- Green: `#8fb339`
- Red: `#d0361c`

Tailwind references these via `bg-amber`, `text-amber`, `border-amber`, etc. (mapped in `tailwind.config.ts`).

## Fonts

`next/font/google` loads JetBrains Mono (400/500/700) and Inter (400/500/600) in the root `layout.tsx`, exposed as `--font-mono` and `--font-sans`. The body defaults to mono. Both fonts cover the Turkish extended-Latin range, so no extra subset config is needed.

## Adding a new locale

1. Add the code to `LOCALES` in `src/lib/i18n.ts`.
2. Create `src/lib/dict/<code>.ts` that exports a `<code>: EnDict` with every key translated.
3. Add `DICTS.<code>` in `i18n.ts`.
4. Create `content/work/<code>/` with one MDX file per slug.

Everything else (routes, generateStaticParams, switcher, OG image) picks it up automatically.

## Keyboard

- `⌘K` / `Ctrl+K` / `/` — open command palette (type `tr` or `en` in the palette to switch languages)
- `Esc` — close any overlay
- Type `uptime` anywhere — easter egg

## Deploy

Push the repo, point Vercel at `web/` as the project root. Zero config. All 10 public routes plus both OG images are prerendered at build time.

## License

Personal project. Code is MIT; content is © Mert Okar.
