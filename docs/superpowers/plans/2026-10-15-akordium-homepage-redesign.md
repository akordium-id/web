# Akordium Homepage Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign halaman utama akordium.id agar terasa lebih human, lebih "Surabaya engineering studio", dan tidak seperti SaaS template generik — dengan menambahkan foto real, soften copy, dan menyempurnakan visual tone.

**Architecture:** Modifikasi komponen Astro per section secara independen. Tambah satu section baru (`ProblemContext`). Download 5 foto ke `public/images/`. Data layer diupdate di `pricing.ts` dan `portfolio.ts` untuk menambah field baru. Tidak ada perubahan routing atau breaking API.

**Tech Stack:** Astro, Tailwind CSS v4, TypeScript, static output

**Spec:** `docs/superpowers/specs/2026-10-15-akordium-homepage-redesign-design.md`

## Global Constraints

- Semua file Astro menggunakan sintaks `.astro` (frontmatter `---` di atas)
- Tailwind v4: utility classes ditulis langsung, tidak ada `tailwind.config.js`, token custom di `@theme {}` di `global.css`
- Font mono baru: `IBM Plex Mono` — hanya ditambahkan ke Google Fonts link di Layout, tidak mengganti font lain
- Foto disimpan di `public/images/` dengan nama file persis seperti di spec
- Semua copy teks dalam Bahasa Indonesia
- Tidak ada perubahan di luar halaman utama (`index.astro`) dan komponen `home/` yang disebutkan
- `src/data/pricing.ts` adalah single source of truth; `ratecard.ts` hanya re-export

## Review Focus

- Foto yang di-`curl` bisa berubah URL sewaktu-waktu di Unsplash/Pexels; verifikasi HTTP 200 setiap download
- Layout Hero baru (6-6) harus tetap stack dengan benar di mobile — test di viewport < 640px
- Foto `contextPhoto` di Portfolio bisa `undefined`; guard dengan `{item.contextPhoto && (...)}` di template
- `IBM Plex Mono` diload via Google Fonts; pastikan `font-display: swap` agar tidak blokir render
- `ProblemContext` adalah section baru — pastikan diimport dan dipakai di `index.astro`

---

## Task 0: Download Foto ke `public/images/`

**Files:**
- Create: `public/images/hero-ops.jpg`
- Create: `public/images/problem-ops.jpg`
- Create: `public/images/service-inventory.jpg`
- Create: `public/images/portfolio-apar.jpg`
- Create: `public/images/founder.jpg`

**Interfaces:**
- Produces: 5 file gambar statis, direferensikan oleh Task 2, 3, 4, 5, 8

- [ ] **Step 1: Buat direktori dan download semua foto**

```bash
mkdir -p public/images

# Hero: pekerja gudang/logistics Asia
curl -L "https://images.unsplash.com/photo-1553413077-190dd305871c?w=900&q=80&fit=crop" \
  -o public/images/hero-ops.jpg

# Problem context: kasir/toko kelontong
curl -L "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800" \
  -o public/images/problem-ops.jpg

# Service: inventory/operasional toko
curl -L "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=80&fit=crop" \
  -o public/images/service-inventory.jpg

# Portfolio APAR: fire extinguisher industrial
curl -L "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600" \
  -o public/images/portfolio-apar.jpg

# Founder: professional asian male casual
curl -L "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&fit=crop" \
  -o public/images/founder.jpg
```

- [ ] **Step 2: Verifikasi semua file terdownload**

```bash
ls -lah public/images/*.jpg
```

Expected: 5 file masing-masing > 10KB

- [ ] **Step 3: Commit**

```bash
git add public/images/
git commit -m "assets: add stock photos for homepage redesign"
```

---

## Task 1: Global Visual Tone — Font Mono + Layout Token

**Files:**
- Modify: `src/layouts/Layout.astro` (line 46 — Google Fonts link)
- Modify: `src/styles/global.css` (lines 3–35 — @theme block)

**Interfaces:**
- Produces: CSS custom property `--font-mono` tersedia global untuk semua komponen

- [ ] **Step 1: Tambah IBM Plex Mono ke Google Fonts link di `Layout.astro`**

Di baris 46, tambahkan `family=IBM+Plex+Mono:wght@400;500;600` ke URL yang sudah ada.

URL baru (ganti seluruh `href` di link Google Fonts):
```
https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Inter:wght@400;500;600&family=Manrope:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Sora:wght@400;500;600;700;800&family=Source+Serif+4:wght@400;500;600;700&display=swap
```

- [ ] **Step 2: Tambah token ke `@theme {}` di `global.css`**

Di dalam blok `@theme { ... }` (setelah `--color-accent-950`), tambahkan:
```css
  /* Custom font mono - IBM Plex Mono (engineering identity) */
  --font-mono: 'IBM Plex Mono', ui-monospace, 'Cascadia Code', monospace;

  /* Warm background token */
  --color-warm-bg: #fafaf8;
```

- [ ] **Step 3: Build check**

```bash
pnpm build 2>&1 | tail -20
```

Expected: build selesai tanpa error

- [ ] **Step 4: Commit**

```bash
git add src/layouts/Layout.astro src/styles/global.css
git commit -m "style: add IBM Plex Mono font + warm-bg token"
```

---

## Task 2: Hero Section — Layout 6-6 + Foto + Copy Soften

**Files:**
- Modify: `src/components/home/Hero.astro` (full rewrite konten section)

**Interfaces:**
- Consumes: `public/images/hero-ops.jpg` (dari Task 0)
- Produces: Hero dengan layout 6-6, foto real di kanan atas, mockup di kanan bawah

- [ ] **Step 1: Rewrite `Hero.astro`**

Ganti seluruh isi file dengan struktur berikut:

**Grid:** `lg:grid-cols-12` → kolom kiri `lg:col-span-6`, kolom kanan `lg:col-span-6`

**Kiri — teks:**
- Badge area: pertahankan badge "Baru" + badge "Surabaya & Remote", tambah satu badge baru:
  ```html
  <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-stone-600 bg-stone-100/80 border border-stone-200">
    <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
    Studio rekayasa · Surabaya & Remote
  </div>
  ```
- Headline: pertahankan teks yang ada
- Sub-headline: soften dari "Akordium membantu bisnis menghemat waktu..." menjadi:
  > "Kalau operasional masih jalan pakai spreadsheet dan grup WhatsApp, kami siap bantu rapi-kan. Sistemnya 100% milik Anda — tidak ada biaya langganan per bulan."
- Trust signals: tambah satu baris setelah 3 existing:
  ```html
  <span class="inline-flex items-center gap-1.5">
    <svg ...checkmark.../>
    Dipercaya 3+ bisnis aktif di Surabaya
  </span>
  ```

**Kanan — split vertikal dua bagian dalam satu div:**

Bagian atas (foto):
```html
<div class="relative rounded-2xl overflow-hidden" style="height: 220px;">
  <img 
    src="/images/hero-ops.jpg" 
    alt="Tim operasional bisnis menggunakan sistem digital Akordium"
    class="w-full h-full object-cover"
    loading="eager"
    width="540" height="220"
  />
  <!-- overlay gradient ringan -->
  <div class="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent"></div>
  <!-- badge di pojok kiri bawah foto -->
  <div class="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[11px] font-semibold text-stone-800">
    <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
    Klien aktif · Operasional bisnis
  </div>
</div>
```

Bagian bawah (mockup — perkecil dari yang ada): pertahankan window chrome + 3 activity cards, tapi kurangi padding menjadi `p-3` dan kurangi stat cards menjadi 2 (hilangkan "Status Invoice").

- [ ] **Step 2: Preview build**

```bash
pnpm dev &
sleep 5
curl -s http://localhost:4321 | grep -c "hero-ops" && echo "foto hero ditemukan di HTML"
kill %1
```

- [ ] **Step 3: Commit**

```bash
git add src/components/home/Hero.astro
git commit -m "feat: redesign hero - 6-6 layout, real photo, soften copy"
```

---

## Task 3: ProofStrip — Kurangi ke 3 Metrik

**Files:**
- Modify: `src/components/home/ProofStrip.astro` (inline data + template)

**Interfaces:**
- Produces: Strip 3 metrik (bukan 4), hilangkan "99.9% uptime"

- [ ] **Step 1: Update data array di frontmatter `ProofStrip.astro`**

Ganti array `metrics` menjadi 3 item:
```ts
const metrics = [
  {
    value: "10.000+",
    label: "Perangkat IoT Aktif",
    subtext: "Streaming telemetri armada real-time",
  },
  {
    value: "< 100ms",
    label: "Endpoint Latency",
    subtext: "Arsitektur Go & query teroptimasi",
  },
  {
    value: "3+",
    label: "Bisnis Aktif Dikelola",
    subtext: "Sistem operasional live di klien Surabaya",
  },
];
```

- [ ] **Step 2: Update grid di template**

Ganti `grid-cols-2 lg:grid-cols-4` → `grid-cols-1 sm:grid-cols-3`

- [ ] **Step 3: Commit**

```bash
git add src/components/home/ProofStrip.astro
git commit -m "feat: proofstrip - reduce to 3 metrics, add active clients stat"
```

---

## Task 4: Tambah Section ProblemContext (Baru)

**Files:**
- Create: `src/components/home/ProblemContext.astro`
- Modify: `src/pages/index.astro` (tambah import + penggunaan)

**Interfaces:**
- Consumes: `public/images/problem-ops.jpg` (dari Task 0)
- Produces: Section baru dengan pain points UMKM + foto konteks

- [ ] **Step 1: Buat `ProblemContext.astro`**

```astro
---
const problems = [
  {
    icon: "📋",
    text: "Stok barang dicatat manual di Excel — selalu ada selisih di akhir bulan.",
  },
  {
    icon: "📱",
    text: "Nota dan invoice tersebar di grup WhatsApp, sulit dilacak siapa yang belum bayar.",
  },
  {
    icon: "📊",
    text: "Laporan omset harus direkap manual setiap malam — memakan waktu berjam-jam.",
  },
];
---

<section class="py-16 lg:py-20 bg-[#fafaf8] border-b border-stone-200/80">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      
      <!-- Kiri: narasi masalah -->
      <div class="space-y-6">
        <div>
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold text-stone-600 bg-stone-100 border border-stone-200 mb-4">
            Masalah yang Sering Kami Dengar
          </div>
          <h2 class="font-sans text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
            Stok salah, nota hilang,<br />laporan minta manual&mdash;setiap hari.
          </h2>
        </div>
        <p class="text-stone-600 text-base leading-relaxed">
          Banyak pemilik bisnis yang sudah capek dengan cara kerja seperti ini, tapi belum tahu mulai dari mana. Kami bantu dari titik itu.
        </p>
        
        <div class="space-y-4">
          {problems.map((p) => (
            <div class="flex items-start gap-3 p-4 rounded-xl bg-white border border-stone-200/80 shadow-xs">
              <span class="text-xl shrink-0 mt-0.5">{p.icon}</span>
              <p class="text-sm text-stone-700 leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>

        <a href="#services" class="inline-flex items-center gap-2 text-sm font-semibold text-primary-900 hover:text-accent-600 transition-colors">
          Lihat apa yang bisa kami bantu &rarr;
        </a>
      </div>

      <!-- Kanan: foto konteks -->
      <div class="relative">
        <div class="rounded-2xl overflow-hidden shadow-lg border border-stone-200/80">
          <img
            src="/images/problem-ops.jpg"
            alt="Pemilik bisnis yang kewalahan dengan operasional manual"
            class="w-full h-80 lg:h-96 object-cover"
            loading="lazy"
            width="600" height="400"
          />
        </div>
        <!-- floating badge -->
        <div class="absolute -bottom-4 left-6 bg-white border border-stone-200 rounded-xl px-4 py-3 shadow-md">
          <div class="text-xs font-mono text-stone-500">Sebelum pakai sistem</div>
          <div class="text-sm font-bold text-stone-900 mt-0.5">Rekap stok 2–3 jam/hari</div>
        </div>
      </div>

    </div>
  </div>
</section>
```

- [ ] **Step 2: Import dan gunakan di `index.astro`**

Tambahkan setelah baris `import ProofStrip`:
```ts
import ProblemContext from '../components/home/ProblemContext.astro';
```

Tambahkan `<ProblemContext />` di antara `<ProofStrip />` dan `<Services />`:
```astro
<ProofStrip />
<ProblemContext />
<Services />
```

- [ ] **Step 3: Commit**

```bash
git add src/components/home/ProblemContext.astro src/pages/index.astro
git commit -m "feat: add ProblemContext section with UMKM pain points + photo"
```

---

## Task 5: Services — Badge + Copy Lebih Kontekstual

**Files:**
- Modify: `src/data/services.ts` (update `badge` dan `tagline` di `corePractices`)
- Modify: `src/components/home/Services.astro` (tambah foto thumbnail card 1)

**Interfaces:**
- Consumes: `public/images/service-inventory.jpg` (dari Task 0)
- Consumes: `corePractices` array dari `services.ts`

- [ ] **Step 1: Update `badge` dan `tagline` di `services.ts`**

Di array `corePractices`, update 3 item:

```ts
// Item 1: id="product-engineering"
badge: "Toko, Laundry, Bengkel",
tagline: "Ganti spreadsheet dengan sistem yang langsung dipakai tim.",

// Item 2: id="system-modernization"  
badge: "Website Bisnis",
tagline: "Profil bisnis yang rapi & mudah ditemukan di Google.",

// Item 3: id="dedicated-tools"
badge: "IoT & Enterprise",
tagline: "Untuk kebutuhan skala besar: armada, sensor, & integrasi hardware.",
```

- [ ] **Step 2: Tambah foto thumbnail ke card 1 di `Services.astro`**

Di blok card (dalam `.map()`), tambahkan kondisi untuk card pertama (id `product-engineering`): tampilkan foto 80×80 di header card menggantikan/mendampingi icon:

Ganti blok icon card header:
```html
<!-- Card Header: Icon/Photo + Badge -->
<div class="flex items-center justify-between gap-3 mb-6">
  <div class="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-stone-200">
    {practice.id === 'product-engineering' ? (
      <img 
        src="/images/service-inventory.jpg" 
        alt="" 
        class="w-full h-full object-cover"
        loading="lazy"
      />
    ) : (
      <div class="w-full h-full bg-primary-50 border border-primary-200/80 text-primary-700 flex items-center justify-center">
        <Icon name={practice.icon} class="w-6 h-6" />
      </div>
    )}
  </div>
  <span class="text-[11px] font-mono font-semibold px-2.5 py-1 rounded bg-primary-50 text-primary-900 border border-primary-200/80">
    {practice.badge}
  </span>
</div>
```

- [ ] **Step 3: Commit**

```bash
git add src/data/services.ts src/components/home/Services.astro
git commit -m "feat: services - contextual badges, soften taglines, photo thumbnail"
```

---

## Task 6: Portfolio — contextPhoto + Kurangi Metrik

**Files:**
- Modify: `src/data/portfolio.ts` (tambah field `contextPhoto?: string` di interface + data MIS-APAR)
- Modify: `src/components/home/Portfolio.astro` (tampilkan contextPhoto, kurangi metrik ke 2)

**Interfaces:**
- Consumes: `public/images/portfolio-apar.jpg` (dari Task 0)
- Produces: `PortfolioItem.contextPhoto?: string` — field baru, optional

- [ ] **Step 1: Tambah `contextPhoto?: string` ke interface `PortfolioItem` di `portfolio.ts`**

Di dalam interface `PortfolioItem`, tambahkan setelah field `image`:
```ts
contextPhoto?: string;
```

- [ ] **Step 2: Tambah data `contextPhoto` untuk MIS-APAR di `portfolio.ts`**

Di item `id: "mis-apar"`, tambahkan:
```ts
contextPhoto: "/images/portfolio-apar.jpg",
```

- [ ] **Step 3: Tampilkan `contextPhoto` di `Portfolio.astro`**

Di dalam blok mockup window (setelah `</div>` penutup `window-frame-dark`), tambahkan:
```astro
{item.contextPhoto && (
  <div class="mt-3 rounded-xl overflow-hidden border border-stone-200/80 h-24">
    <img
      src={item.contextPhoto}
      alt={`Foto konteks nyata: ${item.titleId}`}
      class="w-full h-full object-cover"
      loading="lazy"
    />
  </div>
)}
```

- [ ] **Step 4: Kurangi metrik yang ditampilkan dari 3 ke 2**

Di baris `.slice(0, 3)`, ganti menjadi `.slice(0, 2)`. Update grid dari `grid-cols-3` ke `grid-cols-2`.

- [ ] **Step 5: Commit**

```bash
git add src/data/portfolio.ts src/components/home/Portfolio.astro
git commit -m "feat: portfolio - add contextPhoto field + APAR photo, reduce metrics to 2"
```

---

## Task 7: PricingBundles — Tambah contextStory

**Files:**
- Modify: `src/data/pricing.ts` (tambah `contextStory?: string` ke `VerticalBundle` interface + 3 data paket)
- Modify: `src/components/home/PricingBundles.astro` (tampilkan contextStory)

**Interfaces:**
- Produces: `VerticalBundle.contextStory?: string` — field baru, optional

- [ ] **Step 1: Tambah `contextStory?: string` ke interface `VerticalBundle` di `pricing.ts`**

Di dalam interface `VerticalBundle`, tambahkan setelah field `popular?`:
```ts
contextStory?: string;
```

- [ ] **Step 2: Tambah data `contextStory` untuk 3 paket pertama di `pricing.ts`**

Cari 3 `VerticalBundle` pertama (Paket A, B, C) dan tambahkan field `contextStory`. Gunakan nilai:

```ts
// id: "umkm-starter" (Paket A: UMKM Starter)
contextStory: "Cocok untuk laundry 1–2 cabang yang masih pakai WhatsApp untuk catat orderan.",

// id: "vertical-pro" (Paket B: Vertical Pro)
contextStory: "Cocok untuk toko kelontong atau bengkel yang stoknya sering selisih tiap bulan.",

// id: "heavy-service" (Paket C: Heavy Field & Workshop)
contextStory: "Cocok untuk bengkel servis atau distributor yang butuh kontrol stok spare part ketat.",
```

- [ ] **Step 3: Tampilkan `contextStory` di `PricingBundles.astro`**

Setelah blok `"Cocok:"` div (baris 94–96), tambahkan:
```astro
{bundle.contextStory && (
  <p class="mt-1.5 text-xs text-stone-500 italic leading-relaxed">
    {bundle.contextStory}
  </p>
)}
```

- [ ] **Step 4: Commit**

```bash
git add src/data/pricing.ts src/components/home/PricingBundles.astro
git commit -m "feat: pricing - add contextStory per bundle for human touch"
```

---

## Task 8: Principles — Ganti Numbering dengan Icon

**Files:**
- Modify: `src/components/home/Principles.astro` (ganti `01-04` number dengan SVG icon)

**Interfaces:**
- Produces: 4 icon SVG menggantikan `01`, `02`, `03`, `04`

- [ ] **Step 1: Tambah array icon SVG ke frontmatter `Principles.astro`**

Tambahkan di frontmatter (setelah array `principles`):
```ts
const icons = [
  // 01: 100% Hak Milik - key icon
  `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>`,
  // 02: Clean Architecture - wrench icon
  `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>`,
  // 03: Diskusi Langsung - chat icon
  `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>`,
  // 04: Progres Terukur - flag icon
  `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" /></svg>`,
];
```

- [ ] **Step 2: Update template — ganti span number dengan icon**

Di dalam `.map()` card, ganti blok:
```html
<span class="font-mono text-2xl font-extrabold text-primary-300">
  {p.number}
</span>
```

Dengan:
```astro
<div class="w-9 h-9 rounded-lg bg-primary-50 border border-primary-200/80 text-primary-700 flex items-center justify-center shrink-0"
     set:html={icons[principles.indexOf(p)]}
></div>
```

- [ ] **Step 3: Commit**

```bash
git add src/components/home/Principles.astro
git commit -m "feat: principles - replace 01-04 numbers with meaningful SVG icons"
```

---

## Task 9: Founder — Foto Real + Copy Personal

**Files:**
- Modify: `src/components/home/Founder.astro` (ganti inisial dengan foto, rewrite copy)

**Interfaces:**
- Consumes: `public/images/founder.jpg` (dari Task 0)

- [ ] **Step 1: Ganti div inisial "FN" dengan `<img>` di `Founder.astro`**

Ganti blok:
```html
<div class="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full p-1 bg-white border-2 border-primary-200 shadow-md overflow-hidden">
  <div class="w-full h-full rounded-full bg-linear-to-br from-primary-800 to-primary-950 flex items-center justify-center text-white font-mono text-3xl font-extrabold tracking-tighter">
    FN
  </div>
</div>
```

Dengan:
```html
<div class="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full p-1 bg-white border-2 border-primary-200 shadow-md overflow-hidden">
  <img
    src="/images/founder.jpg"
    alt="Faiq Najib — Founder Akordium Lab"
    class="w-full h-full rounded-full object-cover object-top"
    loading="lazy"
    width="160" height="160"
  />
</div>
```

- [ ] **Step 2: Rewrite copy narasi di `Founder.astro`**

Ganti dua paragraf `<p>` existing (baris 47–51) dengan:

```html
<p class="text-xs sm:text-sm text-stone-700 leading-relaxed">
  Saya bikin Akordium karena sering melihat pemilik usaha yang sibuk, tapi waktunya habis untuk hal-hal yang seharusnya sudah bisa diotomasi. Di Bank Mega, saya tangani transaksi jutaan rupiah per menit. Di Orin GPS, saya arsitektur telemetri untuk 10.000+ armada. Tapi yang paling berkesan? Membantu usaha kecil akhirnya bisa tidur tenang karena stoknya tidak lagi selisih.
</p>
<p class="text-xs sm:text-sm text-stone-600 leading-relaxed">
  Akordium Lab bukan agensi besar dengan sales dan PM yang Anda tidak pernah ketemu engineernya. Di sini, Anda ngobrol langsung dengan saya — yang desain arsitektur dan tulis kode sistemnya sendiri.
</p>
```

- [ ] **Step 3: Update section header copy**

Ganti `<p>` di section header (baris 16):
```
"Studio ini digerakkan oleh prinsip bahwa software bernilai tinggi lahir dari kedalaman rekayasa teknis, bukan sekadar kecepatan merakit template."
```
Dengan:
```
"Bukan agensi template. Bukan konsultan dengan tim anonim. Hanya engineer yang benar-benar paham masalah bisnis Anda."
```

- [ ] **Step 4: Commit**

```bash
git add src/components/home/Founder.astro
git commit -m "feat: founder - replace initials with photo, rewrite copy as personal story"
```

---

## Task 10: Final Build & Verification

**Files:**
- No changes — verifikasi saja

- [ ] **Step 1: Full production build**

```bash
pnpm build
```

Expected: build success, no TypeScript errors, no Astro errors

- [ ] **Step 2: Cek semua foto dimuat dengan benar di output**

```bash
grep -r "hero-ops\|problem-ops\|service-inventory\|portfolio-apar\|founder" dist/index.html | head -20
```

Expected: semua 5 nama file foto muncul minimal sekali di output HTML

- [ ] **Step 3: Cek tidak ada referensi broken**

```bash
grep -r 'src="/images/' dist/index.html | grep -v "hero-ops\|problem-ops\|service-inventory\|portfolio-apar\|founder\|logo\|og-image"
```

Expected: tidak ada output (tidak ada foto lain yang direferensikan tapi tidak ada)

- [ ] **Step 4: Commit final**

```bash
git add -A
git commit -m "chore: final homepage redesign - all tasks complete"
```
