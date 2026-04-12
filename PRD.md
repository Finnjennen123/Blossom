# Blossom — Website PRD

> Product requirements for the Blossom website. Covers the landing page, five service detail pages, about page, and booking page with Cal.com + Stripe integration.

---

## 1. Overview

Blossom is a personal website for **Else Prince**, a solo massage therapist based in Antwerp. The site serves as her primary digital presence — it communicates who she is, what she offers, and how to reach her.

**Primary goal:** Visitors understand Else's practice and feel drawn to book a session.
**Secondary goal:** Establish trust and warmth before a first visit.

The site is entirely in **Dutch**.

---

## 2. Pages

### 2.1 Landing Page (`/`)

The landing page is the main entry point. It should feel like stepping into a warm, quiet space — not like browsing a website. Every section earns its place by moving the visitor closer to understanding Else's practice.

#### Sections (in order)

**Hero**
- Large headline introducing Blossom (Cormorant Light, hero scale)
- One short subline — a feeling, not a sales pitch (Inter, body style, Clay color)
- Arch-framed image of the practice space or hands at work
- Primary CTA button: "Boek een sessie" (Terracotta)
- Layout: asymmetric 58/42 split — text left, arch image right

**Philosophy quote**
- A single italic quote from Else about her approach to bodywork (Cormorant Light Italic, quote scale)
- Framed above and below by terracotta rules (48px, centered)
- Moroccan tile divider strip (80px, 7% opacity) above and below this section

**Services overview**
- All five services listed as full-width rows, not a card grid
- Each row contains: service name (H3), duration, one-line description, price, and a text-link arrow ("Ontdek meer →") linking to the service detail page
- Alternating text alignment on even rows (text left on odd, text right on even)
- 1px Sandstone dividers between rows
- Section title (H2): "Behandelingen"

| # | Service | Duration | Price |
|---|---------|----------|-------|
| 1 | Integratieve Massage | 60 min | €75 |
| 2 | Integratieve Massage | 80 min | €95 |
| 3 | Crystal Healing Massage | 60 min | €85 |
| 4 | Holistic Pulsing | 50 min | €60 |
| 5 | Lomi Lomi Massage | 80 min | €135 |

**Gallery**
- Visual showcase of the practice space, treatment room, details (crystals, oils, towels, hands at work, the atmosphere)
- Horizontal scroll on mobile, grid on desktop
- Desktop: masonry-style or asymmetric grid (mix of landscape and portrait images, not a uniform grid)
- All images use soft rounded corners or a mix of arch-framed and rectangular crops to stay on-brand
- No captions — the images speak for themselves
- Warm Sand background to set the section apart
- Section title (H2): "De ruimte" or similar
- 6–10 images ideal

**About preview**
- Short intro to Else — 2–3 sentences about her philosophy and background
- Arch-framed portrait photo
- Text-link arrow: "Meer over Else →" linking to the about page
- Layout: asymmetric 38/62 split — image left, text right

**Location**
- Address: Van Schoonbekestraat 20, bus D4, 2018 Antwerpen
- Availability displayed clearly:
  - Maandag: 9:00–12:00 & 14:00–17:00
  - Dinsdag: 9:00–12:00
  - Donderdag: 10:00–12:30 & 14:00–20:00
- Embedded map or a static map image linking to Google Maps
- Moroccan tile pattern as section background at 2.5% opacity
- Layout: asymmetric 55/45 split — availability info left, map right

**Booking CTA**
- Full-width section with centered text
- Headline (H2): something inviting, e.g. "Klaar om tot rust te komen?"
- Primary CTA button: "Boek een sessie"
- Flanked by two decorative outlined arches (1px Sandstone, 30% opacity)

**Footer**
- Night Earth background, Linen text
- Logo / site name
- Quick links: Behandelingen, Over Else, Contact
- Address and availability summary
- Email and/or phone (if Else wants to share)
- Simple, minimal — no social media icons unless Else has active accounts

---

### 2.2 Service Detail Pages (`/behandelingen/[slug]`)

One page per service. Each page gives the visitor enough information to feel confident about what the session involves, without overwhelming them.

**Slugs:**
- `/behandelingen/integratieve-massage-60`
- `/behandelingen/integratieve-massage-80`
- `/behandelingen/crystal-healing-massage`
- `/behandelingen/holistic-pulsing`
- `/behandelingen/lomi-lomi-massage`

#### Sections (in order)

**Header**
- Arch-framed image specific to the service (or a thematic photo)
- Service name as page title (H1, Cormorant Light)
- Duration and price displayed prominently (price in Cormorant Light, large price scale)
- Label tag if relevant (e.g. "Met kleding" for Holistic Pulsing)

**Description**
- Full description of the massage technique — what it is, what the client experiences, what makes it unique
- Written warmly in second person ("je"), not clinical
- Body text (Inter, Clay) with a max-width of 380–480px for comfortable reading
- Content per service:
  1. **Integratieve Massage (60 min):** Combination of holistic pulsing, intuitive oil massage, and polarity massage. Explain how polarity works (hands placed on two points to connect energy pathways). Mention that this is Else's signature blend.
  2. **Integratieve Massage (80 min):** The extended version — same combination with more time to go deeper. Emphasize the luxury of extra time.
  3. **Crystal Healing Massage (60 min):** Oil massage combined with warm crystals. Describe the warmth and the energetic properties of the crystals.
  4. **Holistic Pulsing (50 min):** Gentle rocking massage done with clothing on. Emphasize accessibility — no need to undress, deeply relaxing, suitable for people new to massage.
  5. **Lomi Lomi Massage (80 min):** Hawaiian massage technique. Describe the flowing, rhythmic, full-body strokes. Mention its cultural roots respectfully.

**Quick facts**
- Small info block with key details at a glance:
  - Duur: [duration]
  - Prijs: [price]
  - Met/zonder kleding
  - Wat mee te brengen (if applicable)

**Booking CTA**
- Same pattern as landing page — centered headline, primary button, decorative arches
- Copy can be service-specific, e.g. "Boek je Lomi Lomi sessie"

**Related services**
- 2–3 other services shown as compact horizontal cards
- Each card: service name, duration, price, text-link arrow
- Helps visitors explore without going back to the landing page

---

### 2.3 About Page (`/over-else`)

This page builds trust. Visitors want to know who will be touching them. The page should feel personal and grounded — not a CV, not a sales page.

#### Sections (in order)

**Portrait header**
- Large arch-framed portrait of Else
- Her name as page title (H1): "Else Prince"
- A short tagline or one-line philosophy beneath (Cormorant Italic)

**Personal story**
- Who Else is — written in first person or warm third person
- How she came to massage therapy
- What drives her practice
- This is the heart of the page. It should feel honest and human.
- Body text with comfortable max-width (380–480px)

**Philosophy**
- What Else believes about bodywork, healing, rest
- Can be structured as a few short paragraphs or a quote-style block
- Terracotta rules framing a key quote if appropriate

**Training & background**
- Her qualifications and training (listed simply, not as a bragging wall)
- Certifications, schools, years of experience
- Presented as labels or a simple clean list — not a grid of logos

**Booking CTA**
- Same CTA pattern — "Maak kennis" or "Boek een kennismakingssessie"

---

### 2.4 Booking Page (`/boek`)

The booking page is where the visitor transitions from browsing to committing. The top of the page is ours — warm, on-brand, reassuring. Then it hands off to the Cal.com embed for the actual scheduling.

#### Sections (in order)

**Intro**
- Headline (H1): "Boek een sessie"
- Short reassuring text — what to expect when booking (e.g. "Kies je behandeling, een moment dat je past, en je bent klaar. Je ontvangt een bevestiging per e-mail.")
- Warm Sand background to visually separate from the embed below

**Cal.com embed**
- Inline embed (not popup) — feels integrated rather than bolted on
- Displays all 5 event types so the client picks their service here
- Cal.com handles the full flow: select service → pick date/time → fill in details → pay via Stripe → confirmation
- Embed is styled as close to Blossom's palette as Cal.com allows (background color, accent color set to Terracotta)
- Contained within max-width 800px, centered, with comfortable padding
- On mobile: embed is full-width, Cal.com's own responsive layout handles the rest

**Practical info (below the embed)**
- Small section with:
  - Address: Van Schoonbekestraat 20, bus D4, 2018 Antwerpen
  - Cancellation/rescheduling policy (if Else has one)
  - "Vragen? Neem contact op via [email]"
- Keeps the page useful even if someone scrolls past the embed

#### Cal.com configuration (manual setup by Else)

Cal.com does not have an MCP or automation interface we can use from the codebase. The following is a one-time manual setup (~10 minutes):

1. **Create account** at cal.com (free tier is sufficient)
2. **Connect Stripe** in Settings → Apps → Stripe
3. **Set availability schedule:**
   - Maandag: 9:00–12:00 & 14:00–17:00
   - Dinsdag: 9:00–12:00
   - Donderdag: 10:00–12:30 & 14:00–20:00
   - All other days: unavailable
4. **Create 5 event types:**

   | Event type | Slug | Duration | Price | Buffer after |
   |------------|------|----------|-------|-------------|
   | Integratieve Massage (60 min) | integratieve-60 | 60 min | €75 | 15 min |
   | Integratieve Massage (80 min) | integratieve-80 | 80 min | €95 | 15 min |
   | Crystal Healing Massage | crystal-healing | 60 min | €85 | 15 min |
   | Holistic Pulsing | holistic-pulsing | 50 min | €60 | 15 min |
   | Lomi Lomi Massage | lomi-lomi | 80 min | €135 | 15 min |

5. **Enable Stripe payment** on each event type (required, paid upfront)
6. **Grab embed code** — we use the inline embed snippet in our `/boek` page

#### What Cal.com handles (we don't build)

- Availability logic & conflict prevention
- 15-minute buffer enforcement between sessions
- Date/time picker UI
- Stripe checkout (payment collection at booking time)
- Booking confirmation emails
- Calendar sync (Google Calendar / iCal)
- Rescheduling and cancellation (via link in confirmation email)

#### What we build

- The `/boek` page wrapper (intro section, embed container, practical info)
- Styling the embed container to feel at home in the Blossom design
- All "Boek nu" / "Boek een sessie" buttons across the site link to `/boek`

#### Payments flow

```
Client clicks "Boek nu" → lands on /boek
  → selects service in Cal.com embed
  → picks date & time
  → enters name, email, optional note
  → Stripe checkout (card payment, €amount based on service)
  → booking confirmed → confirmation email sent by Cal.com
  → money lands in Else's Stripe account
```

No custom Stripe integration needed. Cal.com's native Stripe app handles the full payment flow — we never touch card details or payment logic.

---

## 3. Navigation

Fixed top navigation bar on all pages (72px height).

- **Left:** "Blossom" wordmark (Cormorant Light, 26px)
- **Right:** Navigation links (Inter, 12px, uppercase)
  - Behandelingen
  - Over Else
  - Contact (scrolls to footer or location section on landing page)
  - **"Boek nu"** — Terracotta filled button, links to `/boek` (always visible as primary CTA)

Behavior:
- Transparent background at page top
- Frosted glass on scroll: Plaster at 92% opacity + 12px backdrop blur
- Links get 1px Terracotta underline on hover, animating from left
- Mobile: hamburger menu (details in responsive section)

---

## 4. Content & Copy

- All content in **Dutch**
- Tone: warm, calm, personal, grounded — like Else is speaking to you directly
- Avoid: clinical language, marketing buzzwords, urgency tactics, exclamation marks
- Service descriptions: second person ("je"), sensory language, honest about what to expect
- Headlines: short, evocative — not clever, not generic
- CTAs: inviting, not pushy — "Boek een sessie", "Ontdek meer", "Maak kennis"

---

## 5. Responsive Behavior

The site must work beautifully on mobile — many bookings will come from phones.

**Breakpoints:**
- Mobile: < 768px
- Tablet: 768px–1024px
- Desktop: > 1024px

**Mobile adjustments:**
- All asymmetric splits stack vertically (image on top, text below)
- Service rows stack: name + price on top, description below
- Navigation collapses to hamburger menu
- Hero image scales down but keeps arch framing
- Touch targets: minimum 44px
- Section spacing reduces proportionally (handled by clamp values)
- Footer stacks into single column

**Tablet:**
- Asymmetric splits can use narrower ratios (50/50) or stack depending on section
- Navigation stays horizontal if it fits, otherwise hamburger

---

## 6. Interactions & Animation

All animations follow the design PRD spec:

- **Scroll reveal:** Elements start at `opacity: 0` + `translateY(30px)`, animate in over 800ms with cubic-bezier ease when 15% visible
- **Stagger:** Grouped elements stagger at 120ms intervals (0, 120, 240, 360, 480ms)
- **Hover states:** Buttons shift to Burnt Sienna with subtle 1px lift; text-link arrows widen gap from 8px to 14px
- **Nav underlines:** Animate from left on hover
- **Respects `prefers-reduced-motion`** — all animations disabled when user prefers reduced motion

---

## 7. SEO & Meta

- Each page gets a unique `<title>` and `<meta description>` in Dutch
- Open Graph tags for social sharing (image, title, description)
- Semantic HTML: proper heading hierarchy, landmarks, alt text on all images
- Structured data (JSON-LD): LocalBusiness schema with address, hours, services
- Language: `<html lang="nl">`

**Page titles (pattern):**
- Landing: "Blossom — Massage in Antwerpen"
- Service: "[Service Name] — Blossom Antwerpen"
- About: "Over Else — Blossom Antwerpen"
- Booking: "Boek een sessie — Blossom Antwerpen"

---

## 8. Performance

- Target: Lighthouse score 95+ across all categories
- Images: WebP/AVIF with proper srcset, lazy-loaded below the fold
- Fonts: Google Fonts (Cormorant Garamond + Inter) — preload critical weights, swap display
- Grain overlay and patterns are lightweight inline SVGs, not image assets
- No JavaScript frameworks heavier than what's needed — this is a mostly-static marketing site

---

## 9. Accessibility

- WCAG 2.1 AA compliance
- Color contrast: verify all text/background combinations meet 4.5:1 ratio (Clay on Plaster, Linen on Night Earth, etc.)
- Focus indicators: visible Terracotta outline on all interactive elements
- Skip-to-content link
- All images have descriptive alt text
- Arch images: decorative SVG clip-paths don't interfere with screen readers
- Keyboard navigable: all links, buttons, and nav items reachable via tab
- Reduced motion: respected via media query

---

## 10. Out of Scope (Future)

The following are **not** part of this build:

- **Email customization** — Cal.com sends default confirmation emails; custom branded emails via Resend can come later
- **Admin dashboard** — Else manages bookings via Cal.com's dashboard directly
- **Blog / content pages** — if Else wants to write about her practice
- **Multi-language** — French or English versions
- **Gift cards / packages** — would require custom Stripe integration
- **Reviews / testimonials** — could be added to landing page later

---

## 11. Design Reference

All visual specifications (colors, typography, textures, components, layout) are defined in [design-prd.md](design-prd.md). That document is the source of truth for implementation.

---

## 12. Tech Stack (Planned)

- **Framework:** TBD (likely Next.js or Astro — static-first, fast)
- **Styling:** Tailwind CSS with custom design tokens from the design PRD
- **Hosting:** TBD (Vercel or similar)
- **Booking:** Cal.com (free tier, inline embed on `/boek`)
- **Payments:** Stripe via Cal.com's native integration (no custom Stripe code)
- **Confirmation emails:** Handled by Cal.com (custom Resend emails are future scope)

---

## 13. Success Criteria

The website is successful when:
1. A visitor can understand what Blossom offers within 10 seconds of landing
2. A visitor can find and read about any specific service in under 2 clicks
3. A visitor feels trust and warmth — the site reflects Else's practice, not a template
4. The site loads fast, looks beautiful on mobile, and is accessible
5. Else feels proud to share the URL
