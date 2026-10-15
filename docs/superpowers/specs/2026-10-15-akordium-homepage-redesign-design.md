# Design Spec: Akordium Homepage Redesign — "More Human, More Surabaya"

**Date:** 2026-10-15  
**Author:** Faiq Najib (via Antigravity)  
**Status:** Approved

---

## Goal & Success Criteria

Redesign halaman utama `akordium.id` agar terasa lebih human, lebih "Surabaya engineering studio", dan lebih konkret untuk pemilik UMKM. Menghilangkan kesan "AI-slop SaaS template" sambil mempertahankan kekuatan existing: value proposition kuat, mockup UI efektif, dan pricing transparan.

**Sukses jika:**
- Ada foto manusia nyata di halaman (Hero + Founder)
- Copy terasa lebih ngobrol, bukan jualan
- Visual tone tidak terlalu putih steril — ada warmth
- Tidak ada angka "perfect" yang mencurigakan (99.9%, 100% berulang)
- Density berkurang — mata tidak cepat lelah

---

## Stack & Constraints

- **Framework:** Astro (static output) + Tailwind CSS v4 + TypeScript
- **Components:** Modular per section di `src/components/home/`
- **Data:** Terpisah di `src/data/*.ts`
- **Foto:** Download via `curl` langsung ke `public/images/` dari Unsplash/Pexels (commercial license OK)
- **Deployment:** Static, tidak ada server-side rendering

---

## Perubahan Per Layer

### 1. Global Visual Tone (`src/styles/global.css`)

- Tambah CSS token `--color-warm-bg: #fafaf8` (warm off-white)
- Font mono: tambah `IBM Plex Mono` via Google Fonts di `Layout.astro` — lebih berkarakter engineering dibanding system-mono
- Tidak ganti font utama (Sora + Manrope sudah bagus)

### 2. Layout (`src/layouts/Layout.astro`)

- Tambah link Google Fonts untuk IBM Plex Mono
- Update `@theme` di global.css: `--font-mono: 'IBM Plex Mono', monospace`

### 3. Struktur Section (`src/pages/index.astro`)

Urutan baru:
```
Hero → ProofStrip → ProblemContext (BARU) → Services → Portfolio → PricingBundles → ModuleCatalog → Principles → Founder → CTA
```

Perubahan dari urutan lama: Tambah `ProblemContext` setelah `ProofStrip`.

### 4. Hero (`src/components/home/Hero.astro`)

**Layout:** Grid 6-6 (dari 7-5)

**Kiri (teks):**
- Badge: tambah "Studio rekayasa · Surabaya & Remote" lebih prominent dengan dot indicator
- Headline: tetap, minor soften
- Sub-headline: rewrite agar lebih conversational — kurang marketing-perfect
- Trust signals: tambah baris "Dipercaya 3+ bisnis aktif di Surabaya"

**Kanan (visual):**
Split vertikal dua bagian:
- **Atas (55%):** Foto real `hero-ops.jpg` (pekerja gudang/operasional Asia) dengan overlay gradient ringan + badge kecil `"Klien aktif · Operasional bisnis"`
- **Bawah (45%):** Mockup dashboard dark (diperkecil dari existing) — pertahankan karena efektif

**File foto:** `public/images/hero-ops.jpg`
- Source: Unsplash - foto warehouse/logistics Asia (query: "warehouse worker asia tablet")

### 5. ProofStrip (`src/components/home/ProofStrip.astro`)

Kurangi dari 4 ke **3 metrik** (hapus 99.9% uptime yang terlalu "perfect SaaS"):

| Metrik | Value | Subtext |
|--------|-------|---------|
| Perangkat IoT Aktif | `10.000+` | Streaming telemetri armada real-time |
| Endpoint Latency | `< 100ms` | Arsitektur Go & query teroptimasi |
| Bisnis Aktif Dikelola | `3+` | Sistem operasional live di klien |

### 6. ProblemContext (BARU — `src/components/home/ProblemContext.astro`)

Section baru, disisipkan setelah ProofStrip. Layout 2 kolom:

**Kiri (narasi):**
- Eyebrow: "Masalah yang Sering Kami Dengar"
- Heading: "Stok salah, nota hilang, laporan minta manual — setiap hari."
- 3 bullet pain point konkret (format: situasi nyata UMKM)
- Link ke Services

**Kanan:**
- Foto `problem-ops.jpg` (kasir toko / warung kelontong / interior minimarket Indonesia)
- Rounded corners, slight shadow

**File foto:** `public/images/problem-ops.jpg`

### 7. Services (`src/components/home/Services.astro`)

Perubahan:
- Badge tiap card diganti dari generic ke konteks bisnis spesifik:
  - "Operational App" → "Toko, Laundry, Bengkel"
  - "Web & Brand" → "Website Bisnis"  
  - "Custom Scale" → "IoT & Enterprise"
- `tagline` per card: soften copywriting, lebih conversational
- Tambah foto thumbnail kecil (80×80 rounded) di header card sebagai pengganti/pendamping icon:
  - Card 1: `service-inventory.jpg` (foto operasional/toko)
  - Card 2: icon tetap (bukan foto)
  - Card 3: icon tetap (bukan foto)

**File foto:** `public/images/service-inventory.jpg`

### 8. Portfolio (`src/components/home/Portfolio.astro`)

Perubahan:
- Tambah `contextPhoto` field di `PortfolioItem` interface (optional)
- Di samping/bawah mockup window: tampilkan foto konteks kecil jika ada:
  - MIS-APAR: foto tabung APAR merah di lapangan (`portfolio-apar.jpg`)
  - Orin GPS: tetap mockup saja (foto armada truk susah dicari yang sesuai)
  - Katauser: tetap mockup
- Kurangi metrics per item dari 3 ke **2** (ambil yang paling konkret)
- Update `portfolio.ts`: tambah field `contextPhoto?: string`

**File foto:** `public/images/portfolio-apar.jpg` (fire extinguisher in industrial setting)

### 9. PricingBundles (`src/components/home/PricingBundles.astro`)

Perubahan ringan:
- Tambah 1 baris "konteks cerita" di tiap paket (italic, abu-abu, di bawah "Cocok:") — format: *"Cocok untuk laundry 3 cabang yang capek catat stok di Excel"*
- Data baru ditambahkan di `src/data/ratecard.ts` sebagai field `contextStory?: string`

### 10. Principles (`src/components/home/Principles.astro`)

Perubahan:
- Ganti numbering `01-04` dengan icon SVG yang lebih karakteristik (key, wrench, chat-bubble, flag)
- Teks tetap, tidak berubah

### 11. Founder (`src/components/home/Founder.astro`)

Perubahan terbesar:
- Ganti `div` inisial "FN" dengan `<img>` tag → `public/images/founder.jpg`
  - Foto Faiq (casual professional); kalau belum ada foto real, download placeholder dari Pexels (professional casual Asian male)
- Rewrite copy bagian narrative: lebih personal, format cerita — "Saya bikin Akordium karena..."
- Pertahankan tech stack pills dan social links

**File foto:** `public/images/founder.jpg`

### 12. Data Files

- `src/data/portfolio.ts`: tambah field `contextPhoto?: string` di interface + data untuk MIS-APAR
- `src/data/ratecard.ts`: tambah field `contextStory?: string` di interface + data untuk 3 paket homepage

---

## Foto yang Didownload (Pendekatan B — curl ke public/images/)

| File | Query/Source | Keterangan |
|------|-------------|------------|
| `hero-ops.jpg` | Unsplash: warehouse worker asia tablet | Hero kanan atas |
| `problem-ops.jpg` | Pexels: small shop cashier indonesia | Section ProblemContext |
| `service-inventory.jpg` | Pexels: store inventory management | Services card 1 |
| `portfolio-apar.jpg` | Pexels: fire extinguisher industrial | Portfolio MIS-APAR |
| `founder.jpg` | Unsplash: professional asian male casual | Founder section |

---

## File yang Disentuh

```
src/
  layouts/Layout.astro              ← tambah Google Fonts IBM Plex Mono
  styles/global.css                 ← token --font-mono, --color-warm-bg
  pages/index.astro                 ← tambah ProblemContext import
  components/home/
    Hero.astro                      ← layout 6-6, foto kanan, copy soften
    ProofStrip.astro                ← kurangi ke 3 metrik
    ProblemContext.astro            ← BARU
    Services.astro                  ← badge + tagline + foto thumbnail
    Portfolio.astro                 ← contextPhoto, kurangi metrik ke 2
    PricingBundles.astro            ← contextStory per paket
    Principles.astro                ← ganti numbering dengan icon
    Founder.astro                   ← foto real, copy personal
  data/
    portfolio.ts                    ← tambah contextPhoto field
    ratecard.ts                     ← tambah contextStory field

public/images/                      ← 5 foto baru didownload
```

---

## Out of Scope

- Halaman `/catalog`, `/contact`, `/about`, `/blog` — tidak disentuh
- Navbar, Footer — tidak disentuh
- ModuleCatalog — tidak disentuh (sudah cukup)
- CTA section — tidak disentuh (sudah efektif)
- Deployment/CI config — tidak berubah

---

## Spec Self-Review

✅ Tidak ada placeholder TBD  
✅ Tidak ada kontradiksi antar section  
✅ Scope cukup untuk satu implementation plan  
✅ Semua requirement bisa diinterpretasi satu cara  
✅ File yang disentuh sudah teridentifikasi lengkap
