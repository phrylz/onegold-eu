# Implementation Notes — OneGold EU Site

Pixel-perfect implementation of the Figma file
`cxWwsFbMl3mfz9h26kOaiS` (OneGold Website — Landing Pages, EU), covering the
landing page plus related pages, responsive across mobile (390px) and desktop
(1440px).

## Stack
- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 (tokens in `src/app/globals.css` `@theme`)
- Open Sans via `next/font`

## Routes
| Route | Figma | Notes |
|-------|-------|-------|
| `/` | M `5844:6847` + D `5844:6346` | Landing — full mobile + desktop, pixel-verified |
| `/faq` | D `5867:27273` | FAQ accordion + stats + footer |
| `/support` | D `5867:28834` | International support contact cards (US/DE/UK) |
| `/gold-avenue` | D `5867:30698` | Gold Avenue redemption landing |
| `/legal` | D `7113:28516` | User Agreement (long-form legal doc) |
| `/legal/privacy` | D `7113:30759` | Privacy Policy (16 sections, full text) |

## Responsive strategy
- Two pixel-perfect targets: **390px** (mobile frame) and **1440px** (desktop frame).
- Breakpoint swap at **1024px**: a `MobileLanding`/`*Mobile` tree below, a
  `DesktopLanding`/`*Desktop` tree at/above. The Figma mobile and desktop frames
  differ in section *order* and *layout* (e.g. features = carousel on mobile,
  3-box row on desktop; hero stacked vs side-by-side; desktop adds a price bar),
  so distinct compositions are the correct approach rather than CSS reflow.
- Desktop content is centered at `max-w-[1240px]` inside a `max-w-[1440px]`
  shell and is fluid 1024→1440 (flex columns shrink; full-bleed bands stay
  edge-to-edge). Mobile is centered at `max-w-[480px]` and fluid 320→1024.

## Component layout
- `src/components/*` — mobile landing sections + shared `Footer`
- `src/components/desktop/*` — desktop landing sections + `DesktopFooter`
- `src/components/{faq,support,ga,legal}/*` — per-page sections
- Assets in `public/assets/`, namespaced per page (`faq-`, `support-`, `ga-`,
  `legal-`) or shared (logos, badges, seals, icons).

## Known caveats / follow-ups (be aware before shipping)
1. **FAQ answer copy:** The Figma FAQ shows all accordions *collapsed* except
   "What is OneGold?" (verbatim). The other 10 answers are reasonable
   placeholder copy — **confirm/replace with the real answers** before launch.
2. **Privacy Policy:** Built at `/legal/privacy` (Figma `7113:30759`), full
   16-section text including the data-sharing table and CA/NV sections. The
   footer "Privacy Policy" link is wired to `/legal/privacy`; "User Agreement"
   to `/legal`.
3. **Reconstructed brand marks:** Some logos Figma decomposes into stacked SVG
   sub-paths (the FAQ "BIG"/Bullion composite, GA OneGold header mark) were
   reassembled from parts or substituted with the clean white logo. The FAQ
   header logo in particular should be replaced with a single clean asset.
4. **Flags** on `/support` are hand-authored SVGs (Figma flags are multi-layer
   composites); visually accurate but not vendor-exact.
5. **Fonts (verified exact against Figma):** Open Sans (400/600/700) for
   headings/body/nav; **Arial** for stats numbers + review cards; **Hanken
   Grotesk** for the chart column headers — matching Figma's per-label spec
   (mobile: EFTs + Physical Gold both Hanken; desktop: EFTs Open Sans, Physical
   Gold Hanken). All three loaded via `next/font` (Arial is a system font).
6. **Mobile frames for related pages:** Figma only contained desktop frames for
   FAQ/Support/GA/Legal — their mobile layouts are faithful adaptations of the
   desktop designs, not pixel-matched to a mobile artboard (none exists).
7. Real link wired: app CTAs / store badges → `onegold.smart.link/pd8n6enxs`.
   Footer nav now links FAQ→/faq, Contact Us→/support, Redeem→/gold-avenue,
   User Agreement→/legal. Other links are `#` placeholders.

## Verify
- `npm run build` → all 5 routes compile and prerender static.
- Visually verified `/`, `/faq`, `/support`, `/gold-avenue`, `/legal` at 1440px
  and 390px.
