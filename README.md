# OneGold EU — Landing & Marketing Site

Pixel-perfect, responsive implementation of the OneGold European launch site,
built from Figma (file `cxWwsFbMl3mfz9h26kOaiS`, *OneGold Website — Landing
Pages, EU*).

**Live:** https://onegold-eu.vercel.app

## Stack

- [Next.js 16](https://nextjs.org) (App Router) + React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) (design tokens in `src/app/globals.css` `@theme`)
- [Open Sans](https://fonts.google.com/specimen/Open+Sans) via `next/font`
- Fully static output (all routes prerendered)

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build      # production build (static prerender)
npm run start      # serve the production build
npm run lint       # eslint
```

## Routes

| Route | Description |
|-------|-------------|
| `/` | Landing page — distinct mobile (390px) and desktop (1440px) layouts |
| `/faq` | FAQ accordion + stats |
| `/support` | International support contacts (US / DE / UK) |
| `/gold-avenue` | Gold Avenue redemption landing |
| `/legal` | User Agreement |
| `/legal/privacy` | Privacy Policy |

## Responsive approach

Two pixel-perfect targets — **390px** (mobile) and **1440px** (desktop) —
matching the two Figma frames. Because the frames differ in section *order* and
*layout* (e.g. features are a carousel on mobile, a 3-box row on desktop; the
hero is stacked vs. side-by-side; desktop adds a price bar), the landing page
uses two distinct compositions swapped at the **1024px** breakpoint rather than
reflowing one tree:

- Below 1024px → `MobileLanding` (centered, `max-w-[480px]`)
- At/above 1024px → `DesktopLanding` (centered, `max-w-[1440px]`, fluid 1024→1440)

## Project structure

```
src/
├─ app/                      # routes (App Router)
│  ├─ page.tsx               # landing — swaps Mobile/Desktop at 1024px
│  ├─ faq/ · support/ · gold-avenue/ · legal/ · legal/privacy/
│  ├─ layout.tsx             # Open Sans + metadata
│  └─ globals.css            # Tailwind v4 theme tokens
├─ components/
│  ├─ *.tsx                  # mobile landing sections + shared Footer
│  ├─ desktop/               # desktop landing sections + DesktopFooter
│  └─ faq/ · support/ · ga/ · legal/   # per-page sections
public/assets/               # images/logos/icons (namespaced per page)
NOTES.md                     # implementation notes + known caveats
```

Design tokens (`globals.css`): `--color-navy #102c4a`, `--color-cyan #3fe2ff`,
brand blue `#197eeb`. Use Tailwind arbitrary values for exact px/hex from Figma.

## Deployment

Currently deployed to Vercel via the CLI (team *philbarrett-lab*):

```bash
vercel --prod          # production
vercel deploy          # preview URL
```

> **Git auto-deploy is not yet connected.** To enable push-to-deploy, install
> the Vercel GitHub App on the repo's owning account and import the project at
> [vercel.com/new](https://vercel.com/new). Until then, redeploy with
> `vercel --prod`.

## Notes & caveats

See [`NOTES.md`](./NOTES.md) for design decisions and known follow-ups (e.g. FAQ
answer copy, reconstructed brand marks, fonts). All app CTAs and store badges
link to `https://onegold.smart.link/pd8n6enxs`; other links are placeholders.
