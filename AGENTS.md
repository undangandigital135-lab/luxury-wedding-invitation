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
app/layout.tsx        ← root layout (fonts: Cinzel, Cormorant Garamond, Plus Jakarta Sans)
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

## Animation system (UNIFIED)

**Framer Motion only** for all entrance/scroll animations. GSAP reserved exclusively for:
- `CurtainReveal` (SVG morph multi-panel 3D curtain)
- `CurtainReveal` secondary wind oscillation

Scroll reveals use `motion.div` + `whileInView` with `viewport={{ once: true }}` everywhere. No GSAP ScrollTrigger on section wrappers.

Key easing: `easeOutExpo = [0.19, 1, 0.22, 1]`.

## Performance rules (CRITICAL)

- All animated elements MUST use `.gpu` class for `will-change: transform, opacity`
- Do NOT use `backdrop-blur` on any GSAP-animated element
- Do NOT animate `filter: blur()` — use opacity + transform only
- Do NOT use `mix-blend-overlay` or `feTurbulence` SVG filters (GPU killers)
- All infinite CSS animations limited to max 6 elements
- Prefer CSS `transform` + `opacity` animations over JS-driven where possible
- Mount sections with staggered delay to avoid frame drops (see page.tsx)

## Component conventions

- All section components are `"use client"`.
- `SectionWrapper` wraps every section — uses Framer Motion `whileInView` for scroll reveal.
- `ErrorBoundary` wraps every section in `page.tsx`.
- Non-critical UI (`SectionNav`, `Wishes`, `SocialShare`) is lazy-loaded via `next/dynamic` + `<Suspense>`.
- Use `.gpu` class on all `motion.div` elements that animate.

## What not to do

- Do NOT add admin panels, dashboards, auth, login, CMS, analytics, or database.
- Do NOT use old gold `#C9A84C`.
- Do NOT import `AnimatedSection` — removed (dead code).
- Do NOT call `Math.random` in render — use deterministic values or `useMemo`.
- Do NOT mix GSAP scroll + Framer scroll on same element.
- Do NOT use `feTurbulence` SVG filters — they kill mobile GPU.

## Data model

Edit `data/wedding.ts` to change all content. Single source of truth for every visible string.

Gallery images are SVG placeholders by default. Replace with real images in `public/` and update `gallery.images[].src`.

Audio file goes in `public/audio/music.mp3`. Update path in `audio.src`.

## Directory layout (key files only)

```
wedding-invitation/
├── app/
│   ├── page.tsx          ← main entry (client component)
│   ├── layout.tsx        ← fonts, metadata
│   └── globals.css       ← Tailwind, theme, print, reduced-motion
├── components/
│   ├── ui/               ← GlowOrb, FloatingParticles, LuxuryPattern,
│   │                        GrainTexture, SectionGlow, CountdownTimer,
│   │                        GalleryLightbox, MusicPlayer, CurtainReveal
│   ├── SectionWrapper.tsx  ← Framer Motion scroll-reveal wrapper
│   ├── OpeningScreen.tsx
│   ├── Hero.tsx
│   ├── BrideGroom.tsx
│   ├── Countdown.tsx
│   ├── LoveStory.tsx
│   ├── EventDetails.tsx
│   ├── Gallery.tsx
│   ├── RSVP.tsx
│   ├── DigitalGift.tsx
│   ├── Wishes.tsx
│   ├── ClosingFooter.tsx
│   ├── ProgressBar.tsx
│   ├── ErrorBoundary.tsx
│   ├── CurtainReveal.tsx   ← 3D SVG multi-panel curtain
│   ├── FlowerCorner.tsx
│   └── CoupleIllustration.tsx
├── data/wedding.ts
├── lib/
│   ├── theme.ts
│   ├── spacing.ts
│   ├── animations.ts
│   └── utils.ts
└── hooks/useScrollProgress.ts
```

## Critical Implementation Notes

- **Hydration fix**: Guest name from `?to=` requires `useEffect` in `OpeningScreen.tsx`.
- **Build**: `npm run build` performs typechecking + Turbopack compilation.
- **Lint**: `npm run lint` uses flat ESLint config.
- **No test runner**: Manual verification + build/lint.
- **GPU class**: Always add `.gpu` to elements that animate (already defined in globals.css).
- **Reduced motion**: Honored via `@media (prefers-reduced-motion: reduce)`.
- **Print styles**: Defined in `globals.css` for physical printing.