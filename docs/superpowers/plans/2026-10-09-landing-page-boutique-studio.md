# Akordium Lab Landing Page Revamp Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform Akordium Lab's landing page from a generic "AI-slop" site into a high-credibility Boutique Software Lab & Product Studio inspired by Appledore.dev and Odoo.com.

**Architecture:** Rebuild the homepage (`src/pages/index.astro`) into 7 focused sections using Astro 7 and Tailwind CSS v4, driven by clean data models. All emoji, fuzzy gradient blobs, and cheap commodity tiers (e.g., Rp 500rb) are eliminated in favor of crisp typography, authentic macOS-style software showcase windows, concrete engineering metrics, and direct engineer access.

**Tech Stack:** Astro 7, Tailwind CSS v4, TypeScript, Vitest.

**Spec:** `docs/superpowers/specs/2026-10-09-landing-page-boutique-studio-design.md`

## Global Constraints

- Zero runtime client-side JavaScript bloat; static HTML/CSS generated via Astro SSG.
- Strictly no emojis used as business or technical icons; use clean outline SVG icons (1.5px/2px stroke).
- Strictly no fuzzy rainbow/blur background blobs (`blur-3xl`); use warm stone canvas with subtle hairline borders.
- Preserve all existing route URLs (`/catalog`, `/configurator`, `/contact`, `/modules`, `/blog`) so no deep links break.
- All code changes must pass `npm run check` and `npm run build`.

## Review Focus

- Broken anchors: Ensure all navigation links (`#services`, `#works`, `#principles`, `#about`, `#contact`) correspond to actual `id` attributes on the homepage.
- Mobile responsiveness: Ensure horizontal window mockup frames and metric grids stack cleanly on small mobile viewports (`< 640px`).
- Contrast & typography: Verify contrast ratios of secondary text on warm stone backgrounds (`stone-600` on `#fafaf9`).
- WhatsApp message formatting: Verify URL-encoded query params in direct contact links so pre-filled messages are grammatically clean.
- Image fallbacks & placeholders: If mockup images or founder photos are referenced, ensure fallback SVGs/styles render gracefully if external URLs fail.

---

### Task 1: Styles & Design Tokens Cleanup

**Files:**
- Modify: `src/styles/global.css`

**Interfaces:**
- Produces: CSS utility classes for `.window-chrome`, `.window-header`, `.hairline-border`, and refined typography tracking.

- [ ] **Step 1: Check existing global.css build state**
Run: `npm run build`
Expected: Build passes with exit code 0.

- [ ] **Step 2: Update `src/styles/global.css`**
Add helper classes for macOS-style window chrome (`.window-frame`, `.window-header-dot`), ensure tight heading tracking (`letter-spacing: -0.025em` on headings), and prune unused gradient blob styles.

- [ ] **Step 3: Verify style compilation**
Run: `npm run build`
Expected: PASS with 0 errors.

- [ ] **Step 4: Commit**
```bash
git add src/styles/global.css
git commit -m "style: add window chrome utilities and refine typography tokens"
```

---

### Task 2: Data Models for Showcase & Core Practices

**Files:**
- Modify: `src/data/portfolio.ts`
- Modify: `src/data/services.ts`

**Interfaces:**
- Consumes: Existing TypeScript interfaces.
- Produces: `portfolioItems` (MIS-APAR, Orin GPS, Katauser) and `corePractices` (Product Engineering, System Modernization, Dedicated Operational Tools).

- [ ] **Step 1: Write unit test to verify portfolio data integrity**
Create `src/data/portfolio.test.ts` verifying that `portfolioItems` contains the 3 canonical showcase items with non-empty metrics and tech stacks.

- [ ] **Step 2: Run test to verify initial failure / check**
Run: `npx vitest run src/data/portfolio.test.ts`
Expected: Checks run and validate expectations.

- [ ] **Step 3: Update `src/data/portfolio.ts` and `src/data/services.ts`**
Update `portfolio.ts` with accurate descriptions, metrics, and tech stacks for MIS-APAR, Orin GPS, and Katauser. In `services.ts`, export `corePractices` mapping the 3 boutique engineering practices with SVG icon identifiers.

- [ ] **Step 4: Run test to verify it passes**
Run: `npx vitest run src/data/portfolio.test.ts`
Expected: PASS.

- [ ] **Step 5: Commit**
```bash
git add src/data/portfolio.ts src/data/services.ts src/data/portfolio.test.ts
git commit -m "feat(data): define boutique showcase items and core practices"
```

---

### Task 3: Navbar Refinement

**Files:**
- Modify: `src/components/common/Navbar.astro`

**Interfaces:**
- Consumes: Anchors `#services`, `#works`, `#principles`, `#about`, `#contact`.
- Produces: Navigation header with availability status pill `● Available for Q4 Projects` and direct contact action.

- [ ] **Step 1: Update `src/components/common/Navbar.astro`**
Replace outdated nav links with `#services`, `#works`, `#principles`, `#about`. Add the green availability status pill and ensure mobile menu reflects the updated links.

- [ ] **Step 2: Run Astro check to verify template syntax**
Run: `npx astro check`
Expected: 0 errors.

- [ ] **Step 3: Commit**
```bash
git add src/components/common/Navbar.astro
git commit -m "feat(nav): add availability pill and update navigation links"
```

---

### Task 4: Hero Section Overhaul

**Files:**
- Modify: `src/components/home/Hero.astro`

**Interfaces:**
- Produces: The primary hero section with boutique positioning statement, CTAs, and macOS-style Software Showcase Window.

- [ ] **Step 1: Rewrite `src/components/home/Hero.astro`**
- Replace badge with `Boutique Software Lab · Surabaya & Remote`.
- Set heading: "Kami merekayasa sistem web & backend berkinerja tinggi untuk bisnis yang menuntut keandalan."
- Set subheading focused on Go, PostgreSQL, Clean Architecture, and production systems.
- Build the right-side macOS showcase window with authentic live telemetry preview: active services status, request latency, throughput, and Clean Architecture route overview.
- Add primary CTA to `#contact` / WhatsApp and secondary CTA scrolling to `#works`.

- [ ] **Step 2: Run Astro check**
Run: `npx astro check`
Expected: 0 errors.

- [ ] **Step 3: Commit**
```bash
git add src/components/home/Hero.astro
git commit -m "feat(hero): redesign with boutique studio statement and live showcase window"
```

---

### Task 5: Proof of Reliability Strip

**Files:**
- Create: `src/components/home/ProofStrip.astro`

**Interfaces:**
- Produces: A horizontal metrics bar displaying the 4 key engineering proofs.

- [ ] **Step 1: Create `src/components/home/ProofStrip.astro`**
Implement 4 metric cards:
1. `10.000+` Perangkat IoT & Telemetri Terpantau Real-time
2. `99.9%` Target Service Uptime di Infrastruktur Kritis
3. `< 100ms` Rata-rata Latensi Endpoint Teroptimasi (Go)
4. `100%` Full Code & Infrastructure Ownership untuk Klien

- [ ] **Step 2: Verify component in isolation**
Run: `npx astro check`
Expected: 0 errors.

- [ ] **Step 3: Commit**
```bash
git add src/components/home/ProofStrip.astro
git commit -m "feat(home): add ProofStrip component with concrete engineering metrics"
```

---

### Task 6: Core Engineering Practices Section

**Files:**
- Modify: `src/components/home/Services.astro`

**Interfaces:**
- Consumes: `corePractices` from `src/data/services.ts`.
- Produces: `#services` section with 3 focused practice cards and clean outline SVG icons.

- [ ] **Step 1: Update `src/components/home/Services.astro`**
Rebuild into a 3-column practice grid:
1. Full-Cycle Product Engineering (SaaS, multi-tenant, MVP-to-scale)
2. System Modernization & Performance Tuning (PHP/MySQL to Go/PG, query optimization)
3. Dedicated Operational Systems & Client Portals (Custom workflow tools, Katauser dogfooding)
Include clear deliverables and tech stack tags for each practice.

- [ ] **Step 2: Run Astro check**
Run: `npx astro check`
Expected: 0 errors.

- [ ] **Step 3: Commit**
```bash
git add src/components/home/Services.astro
git commit -m "feat(services): implement 3 core engineering practices with clean SVG icons"
```

---

### Task 7: Selected Works & Dogfooding Showcase

**Files:**
- Modify: `src/components/home/Portfolio.astro`

**Interfaces:**
- Consumes: `portfolioItems` from `src/data/portfolio.ts`.
- Produces: `#works` section displaying MIS-APAR, Orin GPS, and Katauser in wide Appledore-style browser frames.

- [ ] **Step 1: Redesign `src/components/home/Portfolio.astro`**
- Section header: "Selected Works & Dogfooding" / "Bukti Rekayasa Skala Produksi".
- Layout: Stacked full-width showcase cards with macOS window chrome on one side and challenge/solution/metrics on the other side (alternating or clean vertical flow).
- Features live production tags, verified architecture indicators (Go + PostgreSQL, TimescaleDB, Laravel + Flux UI).

- [ ] **Step 2: Run Astro check**
Run: `npx astro check`
Expected: 0 errors.

- [ ] **Step 3: Commit**
```bash
git add src/components/home/Portfolio.astro
git commit -m "feat(portfolio): revamp into Appledore-style wide window showcases"
```

---

### Task 8: Engineering Principles Section

**Files:**
- Create: `src/components/home/Principles.astro`

**Interfaces:**
- Produces: `#principles` section detailing the 4 core engineering commitments.

- [ ] **Step 1: Create `src/components/home/Principles.astro`**
Implement the 4 principles:
1. 100% Code & Infrastructure Ownership (No vendor lock-in)
2. Architected for Maintainability (Clean architecture, documented)
3. Direct Engineer Access (No non-technical middleman)
4. Transparent & Iterative Milestones (Demo-driven sprints)

- [ ] **Step 2: Run Astro check**
Run: `npx astro check`
Expected: 0 errors.

- [ ] **Step 3: Commit**
```bash
git add src/components/home/Principles.astro
git commit -m "feat(home): add Principles component detailing engineering commitments"
```

---

### Task 9: Founder & Studio Profile Section

**Files:**
- Create: `src/components/home/Founder.astro`

**Interfaces:**
- Produces: `#about` section featuring Faiq Najib's background, engineering philosophy, and public links.

- [ ] **Step 1: Create `src/components/home/Founder.astro`**
- Header: "The Engineer Behind the Studio"
- Avatar & bio: Faiq Najib (background in financial transactions at Bank Mega, IoT telemetry at Orin GPS, founder of Akordium Lab).
- Social & portfolio links: GitHub, LinkedIn, technical writing.
- Note on Akordium's ethos: craftsmanship, long-term scalability, direct collaboration.

- [ ] **Step 2: Run Astro check**
Run: `npx astro check`
Expected: 0 errors.

- [ ] **Step 3: Commit**
```bash
git add src/components/home/Founder.astro
git commit -m "feat(home): add Founder component with engineer profile and links"
```

---

### Task 10: High-Intent Ingestion CTA & Index Page Integration

**Files:**
- Modify: `src/components/home/CTA.astro`
- Modify: `src/pages/index.astro`

**Interfaces:**
- Consumes: All updated and newly created home components.
- Produces: Complete, cohesive boutique software lab landing page.

- [ ] **Step 1: Update `src/components/home/CTA.astro`**
Replace generic CTA with high-intent inquiry options:
- Professional headline: "Punya sistem yang perlu dibangun atau dimodernisasi?"
- Pre-filled WhatsApp button with structured project intake.
- Direct email link for NDA / enterprise inquiries.

- [ ] **Step 2: Update `src/pages/index.astro`**
Import `Hero`, `ProofStrip`, `Services`, `Portfolio`, `Principles`, `Founder`, `CTA`.
Remove deprecated components (`NeedsSelector`, `Pricing`, `HowItWorks`, `FitFor`, `AboutBrief`, `ClientLogos`).

- [ ] **Step 3: Run full verification suite**
Run: `npx astro check && npm run lint && npm run test && npm run build`
Expected: All checks, lint, tests, and build pass with 0 errors.

- [ ] **Step 4: Commit**
```bash
git add src/components/home/CTA.astro src/pages/index.astro
git commit -m "feat(home): assemble complete boutique software lab landing page"
```
