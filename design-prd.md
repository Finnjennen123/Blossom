# Blossom — Design PRD

---

## Colors

| Token | Hex | Use |
|-------|-----|-----|
| Plaster | `#F5F0E8` | Page background |
| Warm Sand | `#EDE6D8` | Alternate sections, cards |
| Dark Earth | `#2C2417` | Headlines only |
| Clay | `#7A6B5A` | Body text, descriptions, secondary text |
| Terracotta | `#C4785C` | CTAs, links, accents, italic emphasis |
| Burnt Sienna | `#A8603F` | Hover states |
| Sandstone | `#D4CBBB` | Borders, dividers, subtle UI |
| Night Earth | `#1E1A14` | Footer background |
| Linen | `#F0EBE1` | Text on dark surfaces |

No pure white. No pure black. Body text uses Clay, not Dark Earth — keeps it soft.

---

## Fonts

**Cormorant Garamond** (Google Fonts) — headlines, prices, quotes
- Weight 300 (Light) for display text
- Weight 300 italic for emphasis and quotes
- Weight 400 for H2/H3

**Inter** (Google Fonts) — body, labels, buttons
- Weight 400 for body text
- Weight 500 for labels and buttons

### Scale

| Element | Size | Style |
|---------|------|-------|
| Hero title | clamp(56px, 8vw, 100px) | Cormorant Light, line-height 0.95, tracking -0.03em |
| Section title (H2) | clamp(32px, 4vw, 56px) | Cormorant Light, line-height 1.1 |
| Card/item title (H3) | clamp(28px, 3.5vw, 40px) | Cormorant Light |
| Quote | clamp(28px, 4vw, 44px) | Cormorant Light Italic |
| Price (large) | clamp(48px, 6vw, 72px) | Cormorant Light |
| Body | 16–17px | Inter Regular, line-height 1.7–1.8, color Clay |
| Label | 11px | Inter Medium, uppercase, tracking 0.14em, color Clay |
| Button | 12px | Inter Medium, uppercase, tracking 0.1em |

---

## Textures

### Grain overlay
Full-page fixed overlay using SVG fractal noise at **3% opacity**. Adds tactile warmth to every surface. Applied via `body::after` so it sits over everything without affecting interaction.

### Moroccan tile pattern
Inline SVG repeating tile — four diamonds arranged in a cross with a rotated square outline in the center. Used two ways:

1. **Divider strips** — 80px tall, 7% opacity, between major sections
2. **Section background** — full coverage at 2.5% opacity behind the location section

Pattern tile is 60×60px, uses Dark Earth color, rendered at low opacity so it reads as texture not decoration.

---

## Signature Elements

### Arch window
SVG clip-path creating a Moroccan pointed arch (flat bottom, curved top narrowing to a point). Aspect ratio 3:4. Used as:
- Image frame in the hero
- Decorative outlined arches flanking the booking CTA (1px Sandstone border, 30% opacity, border-radius top only)

Clip path definition:
```
M0,1 L0,0.38 C0,0.17 0.22,0 0.5,0 C0.78,0 1,0.17 1,0.38 L1,1 Z
```

### Terracotta rule
48px wide, 1px tall, Terracotta color. Used above and below the philosophy quote. Centered.

### Thin dividers
1px solid Sandstone. Used between service rows and as section borders.

---

## Buttons

**Primary** — Terracotta background, Plaster text, 18px/44px padding, sharp corners (no border-radius). Hover: Burnt Sienna, subtle 1px lift.

**Text link** — Terracotta text, uppercase, inline arrow SVG (16×16). Hover: gap between text and arrow widens from 8px to 14px.

---

## Navigation

Fixed top bar, 72px height. Transparent at top, frosted glass on scroll (Plaster at 92% opacity + 12px backdrop blur). Logo left (Cormorant Light 26px), links right (Inter 12px uppercase). "Boek nu" is a filled Terracotta button. Links get a 1px Terracotta underline on hover that animates from left.

---

## Scroll Animation

Elements start at `opacity: 0` + `translateY(30px)`, animate in with 800ms cubic-bezier ease when 15% visible. Staggered delays: 0ms, 120ms, 240ms, 360ms, 480ms for grouped elements. Respects `prefers-reduced-motion`.

---

## Layout Principles

- Max content width: 1200px
- Page margins: clamp(24px, 5vw, 80px)
- Section spacing: clamp(80px, 12vw, 160px)
- Services: full-width rows (not card grid), alternating text left/right on even items
- Asymmetric column splits: 58/42 (hero), 38/62 (about), 55/45 (location)
- Body text max-width: 380–480px within its column

---

## Pages

1. **Landing** — hero, philosophy quote, services list, experience/about, location, booking CTA, footer
2. **Service detail** (×5) — arch image header, full description, quick facts, booking CTA, related services
3. **About** — arch portrait, personal story, philosophy, training, booking CTA
