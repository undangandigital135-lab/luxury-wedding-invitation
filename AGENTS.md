# Wedding Invitation — AGENTS.md

## This is NOT standard Next.js

`node_modules/next/dist/docs/` has the real API reference. Next.js 16.2.6 (custom fork) — expect breaking changes. Heed deprecation notices.

## Quick commands

```bash
npm run dev      # dev server (http://localhost:3000)
npm run build    # production build (typechecks + compiles via Turbopack)
npm run lint     # eslint (config: eslint.config.mjs, extends next/core-web-vitals + typescript)
```

No test runner, no formatter config, no pre-commit hooks.

## Single-page architecture

This is a **static wedding invitation landing page** — NOT a multi-page app, dashboard, CMS, or SaaS. App Router with one route (`/`).

```
app/page.tsx          ← entrypoint (client component, orchestrates all sections)
app/layout.tsx        ← root layout (fonts: Cinzel, Cormorant Garamond, Plus Jakarta Sans, Geist)
app/globals.css       ← Tailwind v4 + custom theme
data/wedding.ts       ← ALL editable content (single source of truth)
components/           ← section components
components/ui/        ← reusable decorative/utility components
lib/theme.ts          ← color tokens (#2B124C, #D4AF37, etc.)
lib/spacing.ts        ← cinematic spacing constants
lib/animations.ts     ← reusable Framer Motion variants
lib/utils.ts          ← cn(), getTimeRemaining(), getGuestName()
hooks/                ← useScrollProgress() (rAF-throttled)
```

Guest name: `?to=NamaTamu` query param.

## Color system (royal purple / gold)

| Token | Hex | Role |
|---|---|---|
| Deep purple | `#2B124C` | Primary background |
| Royal purple | `#522B5B` | Secondary surfaces |
| Mauve | `#854F6C` | Soft accent |
| Gold | `#D4AF37` | Primary accent, headings |
| Cream | `#F5E6CA` | Body text |

**Do NOT use** old gold `#C9A84C` — replaced by `#D4AF37` everywhere.

CSS class `.gold-glow` adds `text-shadow: 0 0 40px rgba(212,175,55,0.15)`.

## Framework & toolchain quirks

- **Tailwind v4** — uses `@import "tailwindcss"` + `@theme inline {}` (NOT `@tailwind` directives or `tailwind.config`). Theme is defined in `globals.css` via `@theme inline`.
- **PostCSS** — only `@tailwindcss/postcss` plugin.
- **Turbopack** — Next.js uses Turbopack for both dev and production builds.
- **Path alias** — `@/` maps to project root (tsconfig paths).
- **TypeScript** — strict mode, `jsx: react-jsx`, `moduleResolution: bundler`.
- **ESLint** — flat config (`eslint.config.mjs`), no `.eslintrc`. `npm run lint` is the only command.

## Animation patterns

Two animation libraries coexist:

| Library | Used for |
|---|---|
| **GSAP + ScrollTrigger** | Section fade-up reveals (`SectionWrapper`), parallax layers (`Hero`), countdown flip, timeline milestones, footer stagger, ambient orb drift, music bars |
| **Framer Motion** | Entrance animations (all `motion.div` in section components), `whileInView` reveals, `AnimatePresence` (opening screen, lightbox) |

Key easing: `easeOutExpo = [0.19, 1, 0.22, 1]` used consistently in `lib/animations.ts`.

GSAP `ScrollTrigger` start: `"top 88%"` for sections. `"power3.out"` default easing.

## Component conventions

- All section components are `"use client"`.
- `SectionWrapper` wraps every section with GSAP fade-up + ScrollTrigger. Pass `style` prop for per-section gradient backgrounds.
- `ErrorBoundary` wraps every section in `page.tsx` — prevents one crash from breaking the whole page.
- Non-critical UI (`SectionNav`, `Wishes`, `SocialShare`) is lazy-loaded via `next/dynamic` + `<Suspense>`.
- Decorative overlays (`LuxuryPattern`, `GrainTexture`, `IslamicOrnaments`, `AnimatedBackground`) are z-indexed behind content.

## What not to do

- Do NOT add admin panels, dashboards, auth, login, CMS, analytics, or database.
- Do NOT use old gold `#C9A84C`.
- Do NOT import `AnimatedSection` — it was removed (dead code).
- Do NOT call `Math.random` in render — use deterministic values or `useMemo`.
- Do NOT use GSAP easings (`power3.out`) inside Framer Motion `transition` — use cubic-bezier arrays.

## Data model

Edit `data/wedding.ts` to change all content. The file exports a `WeddingData` interface and a `weddingData` object. Every string visible on the page comes from this file — names, dates, verses, bank accounts, event details, etc.

Gallery images are SVG placeholders by default. Replace with real images in `public/` and update `gallery.images[].src`.

Audio file goes in `public/audio/music.mp3`. Update path in `audio.src`.

## Directory layout (key files only)

```
wedding-invitation/
├── app/
│   ├── page.tsx          ← main entry (client component)
│   ├── layout.tsx        ← fonts, metadata, structured data
│   └── globals.css       ← Tailwind, theme, print, reduced-motion
├── components/
│   ├── ui/               ← GlowOrb, FloatingParticles, LuxuryPattern, ArabesqueOrnament,
│   │                        GoldLineAccent, GrainTexture, SectionGlow, OrnamentFrame,
│   │                        IslamicDivider, CountdownTimer, GalleryLightbox, MusicPlayer
│   ├── SectionWrapper.tsx  ← GSAP scroll-reveal wrapper
│   ├── OpeningScreen.tsx   ← Bismillah overlay
│   ├── Hero.tsx            ← Parallax hero with particles
│   ├── BrideGroom.tsx
│   ├── Countdown.tsx
│   ├── LoveStory.tsx
│   ├── EventDetails.tsx
│   ├── Gallery.tsx
│   ├── RSVP.tsx
│   ├── DigitalGift.tsx
│   ├── Wishes.tsx          ← Guest book (localStorage)
│   ├── ClosingFooter.tsx
│   ├── JsonLd.tsx          ← Schema.org structured data
│   ├── ProgressBar.tsx     ← Reading progress
│   ├── SectionNav.tsx      ← Floating dot nav
│   ├── SocialShare.tsx     ← WhatsApp + copy link
│   ├── ErrorBoundary.tsx
│   ├── CurtainReveal.tsx   ← Curtain animation (opening)
│   ├── FlowerCorner.tsx    ← Growing corner flowers + garland
│   └── CoupleIllustration.tsx ← Animated couple illustration
├── data/wedding.ts         ← ALL editable content
├── lib/
│   ├── theme.ts            ← Color tokens (verify before using)
│   ├── spacing.ts          ← Section padding, header margins, grid gaps
│   ├── animations.ts       ← Framer Motion variants
│   └── utils.ts            ← cn(), getTimeRemaining(), getGuestName()
└── hooks/useScrollProgress.ts  ← rAF-throttled scroll %
```

## Critical Implementation Notes

- **Hydration fix**: Guest name from `?to=` parameter requires `useEffect` in `OpeningScreen.tsx` to prevent hydration mismatch (client-only state).
- **Build**: `npm run build` performs typechecking + Turbopack compilation.
- **Lint**: `npm run lint` uses flat ESLint config extending `next/core-web-vitals` and TypeScript.
- **No test runner**: Project relies on manual verification and build/lint checks.
- **Animation coordination**: GSAP handles scroll-based reveals, Framer Motion handles entrance animations. Do not mix easing systems.
- **Color enforcement**: Strict prohibition against `#C9A84C`; use `#D4AF37` for all gold elements.
- **Data centralization**: All textual content (names, dates, verses, bank details) lives in `data/wedding.ts` — single source of truth.
- **Performance hints**: `.gpu` class adds `will-change: transform, opacity` for GPU-accelerated elements.
- **Accessibility**: Reduced motion media query disables animations for users who prefer reduced motion.
- **Print styles**: Special `@media print` rules optimize for physical printing (white background, black text, etc.).