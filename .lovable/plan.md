## Goal

Convert the current single-page site into a proper multi-route agency website, add the sections a full book marketing agency site should have, and strip em/en dashes and hyphens used as punctuation from all copy.

## New route structure

```text
src/routes/
  __root.tsx            shared shell (nav + footer, updated links)
  index.tsx             Home (hero, stats, services teaser, testimonials, CTA)
  about.tsx             Agency story, mission, values, team
  services.tsx          Full service catalog + pricing tiers
  process.tsx           Detailed 5 step workflow + FAQ
  case-studies.tsx      Client wins grid with results and quotes
  testimonials.tsx      Long form author testimonials wall
  blog.tsx              Insights index (static article cards)
  faq.tsx               Categorized questions
  contact.tsx           Lead form + office info + calendar CTA
  privacy.tsx           Privacy Policy
  terms.tsx             Terms of Service
```

Each route gets its own `head()` with unique title, description, og:title, og:description.

## Shared shell (in `__root.tsx`)

- Sticky top nav using TanStack `<Link>` for every route above, mobile drawer.
- Global footer with logo, quick links, service links, legal links, social, copyright.
- Keep design tokens and typography untouched.

## Page contents (highlights)

- **Home**: trimmed hero, trust bar, 3 featured services, mini case study strip, 3 testimonials, final CTA. Links push users into the deeper pages.
- **About**: founding story, mission, 4 values, team grid (reuses uploaded photos), press mentions strip.
- **Services**: full catalog (Amazon PPC, Meta ads, BookTok, PR outreach, cover design, formatting, launch strategy, audiobook marketing) each with description + deliverables + starting price. Three package tiers.
- **Process**: 5 phase workflow (Discovery, Blueprint, Production, Launch, Scale), timelines, deliverables per phase, mini FAQ.
- **Case Studies**: 6 cards with genre, challenge, tactics, results (copies sold, ROAS, chart rank).
- **Testimonials**: 8+ long testimonials, star ratings, author + book title.
- **Blog**: 6 static insight cards (title, excerpt, category, read time).
- **FAQ**: grouped accordion (Getting Started, Pricing, Deliverables, Results).
- **Contact**: existing lead form moved here, plus email, response time, booking CTA.
- **Privacy / Terms**: standard legal boilerplate scoped to the agency.

## Copy cleanup

- Replace em dashes (—), en dashes (–), and hyphens used as punctuation with commas, periods, or "and" as appropriate.
- Preserve hyphens inside compound words that need them for meaning (e.g. "high-converting", "5-star"), file names, URLs, class names, and code identifiers. If ambiguous, prefer removing.
- Apply across every route, nav labels, footer, form labels, and metadata.

## Technical notes

- Extract nav + footer into `src/components/SiteHeader.tsx` and `src/components/SiteFooter.tsx`, render from `__root.tsx` around `<Outlet />`.
- Move existing sections from `src/routes/index.tsx` into the new route files, then rebuild `index.tsx` as a concise landing page.
- Reuse the four uploaded team photos on About; keep asset JSON pointers.
- Add `@/components/ui/accordion` usage for FAQ (already available in shadcn set; install if missing).
- Toaster stays mounted in `__root.tsx`.

## Out of scope

- No backend, no CMS, no auth. All content is static.
- No new design system tokens; reuse existing navy/emerald/slate palette.
