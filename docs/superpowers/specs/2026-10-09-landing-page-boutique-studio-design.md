# Design Specification: Akordium Lab Landing Page Revamp
**Topic**: Boutique Software Lab & Product Studio Transformation  
**Date**: 2026-10-09  
**Status**: Validated Design Draft  

---

## 1. Executive Summary & Business Intent

### 1.1 Problem Statement
Landing page Akordium Lab saat ini mengalami krisis positioning (*positioning dissonance*) dan memancarkan karakteristik "AI Slop":
1. **Disonansi Positioning**: Di satu sisi menawarkan paket murah komoditas (*"Website Company Profile Rp 500.000"*), sementara di sisi lain mengklaim kapabilitas *high-concurrency engineering* (*"Bank Mega 32k TPS, Orin GPS 10.000+ devices"*). Ini memukul kredibilitas studio di mata klien beranggaran serius (karena terkesan freelancer pemula) sekaligus mengintimidasi UMKM kecil dengan istilah-istilah arsitektur terdistribusi.
2. **Karakteristik AI Slop**: Latar belakang gradien kabur (*fuzzy blur-3xl blobs*), penggunaan emoji non-profesional pada selector kebutuhan bisnis (🌐, 📦, 💰), mockup CSS artifisial dengan data pengisi generik yang kaku, serta copywriting klise tanpa kepribadian (*"Lebih tertata, bisnis tumbuh lebih cepat"*).

### 1.2 Target Vision & Benchmarks
Mengubah total landing page Akordium Lab menjadi **Boutique Software Lab & Product Studio**:
* **Appledore.dev Benchmark**: Studio engineering independen yang percaya diri, elegan, menampilkan bukti produk nyata yang dibangun dan diakuisisi (*UseKit, LaterOn, Automix*), serta personal touch pendiri (*"Meet the man behind"*).
* **Odoo.com Benchmark**: Kejelasan modularitas alur bisnis, preview UI yang tajam dan fungsional, serta komunikasi manfaat operasional yang presisi tanpa jargon berbusa.
* **Strategi Konten**: *Studio-led (Services First, Products as Proof of Craft)*. Menghapus komoditas website murah dari homepage; menonjolkan 3 pilar rekayasa perangkat lunak terpilih dengan produk in-house (Katauser) dan implementasi nyata (MIS-APAR, Orin GPS) sebagai bukti standar *craftsmanship*.

---

## 2. Information Architecture & Section Hierarchy

Halaman utama (`src/pages/index.astro`) disusun ulang dengan 7 seksi terfokus:

```
┌─────────────────────────────────────────────────────────────┐
│ 1. Header & Minimal Navbar                                  │
│    Logo + "● Available for Q4 Projects" + Direct Action     │
├─────────────────────────────────────────────────────────────┤
│ 2. Hero Section: "The Engineering Craftsmanship"            │
│    Positioning Statement + macOS Showcase Window Preview    │
├─────────────────────────────────────────────────────────────┤
│ 3. Proof of Reliability Bar                                 │
│    10k+ Devices, 99.9% Uptime, <100ms Latency, 100% Code Own │
├─────────────────────────────────────────────────────────────┤
│ 4. Core Engineering Practices                               │
│    Product Engineering | Modernization | Dedicated Tools    │
├─────────────────────────────────────────────────────────────┤
│ 5. Selected Works & Dogfooding (The Showcase)               │
│    MIS-APAR (Ops Safety) | Orin GPS (IoT) | Katauser (SaaS) │
├─────────────────────────────────────────────────────────────┤
│ 6. Engineering Principles: "How We Build"                   │
│    No Vendor Lock-In | Clean Architecture | Direct Access   │
├─────────────────────────────────────────────────────────────┤
│ 7. The Engineer Behind the Studio                           │
│    Faiq Najib profile, background, GitHub/LinkedIn links    │
├─────────────────────────────────────────────────────────────┤
│ 8. High-Intent Ingestion CTA & Minimal Footer               │
│    Direct WhatsApp/Call booking with structured inquiry     │
└─────────────────────────────────────────────────────────────┘
```

### 2.1 Rincian Seksi

#### Seksi 1: Navbar (`src/components/common/Navbar.astro`)
* **Logo**: Akordium Lab (Wordmark bersih + badge status ketersediaan).
* **Availability Pill**: `● Available for Q4 / New Projects` (indikator studio aktif dan eksklusif).
* **Links**:
  - `Layanan` (`#services`)
  - `Portofolio` (`#works`)
  - `Prinsip` (`#principles`)
  - `Profil` (`#about`)
* **Action**: Tombol `Diskusi Proyek` mengarah ke `#contact` / WhatsApp interaktif.

#### Seksi 2: Hero (`src/components/home/Hero.astro`)
* **Badge**: `Boutique Software Lab · Surabaya & Remote`
* **Heading**:  
  *"Kami merekayasa sistem web & backend berkinerja tinggi untuk bisnis yang menuntut keandalan."*
* **Subheading**:  
  *"Dari arsitektur terdistribusi hingga sistem operasional presisi. Kami membantu perusahaan dan founder membangun perangkat lunak skala produksi dengan fondasi Go, PostgreSQL, dan arsitektur modular yang bersih."*
* **CTAs**:
  - Primary: `Jadwalkan Konsultasi Teknis` (Ember Orange button dengan icon panah diagonal).
  - Secondary: `Eksplor Studi Kasus` (Subtle stone border button).
* **Showcase Window (macOS style frame)**:
  - Header window: 3 traffic light dots + title `ops.akordium.id` + badge status `● Live Production`.
  - Body window: Antarmuka monitor sistem riil: ringkasan telemetry stream, latency chart, database health, dan arsitektur servis. Bukan teks dummy statis.

#### Seksi 3: Proof of Reliability Strip (`src/components/home/ProofStrip.astro` - Komponen Baru)
* 4 metrik konkret tanpa klaim abstrak:
  1. **10.000+** Perangkat IoT & Telemetri Terpantau Real-time
  2. **99.9%** Target Service Uptime di Infrastruktur Kritis
  3. **< 100ms** Rata-rata Latensi Endpoint Teroptimasi (Go)
  4. **100%** Full Code & Infrastructure Ownership untuk Klien

#### Seksi 4: Core Engineering Practices (`src/components/home/Services.astro`)
Menggantikan NeedsSelector ber-emoji dan tier harga receh dengan 3 pilar kapabilitas:
1. **Full-Cycle Product Engineering**: Membangun web application & SaaS modern dari arsitektur awal hingga skala produksi (Clean Architecture, RESTful API, PostgreSQL).
2. **System Modernization & Performance Tuning**: Migrasi arsitektur monolitik/legacy (PHP/MySQL) ke microservices atau modul teroptimasi (Go/pgx/TimescaleDB), memangkas latensi dan biaya server.
3. **Dedicated Operational Systems & Client Portals**: Rekayasa otomasi alur internal yang kompleks (tracking aset, integrasi WhatsApp notification engine, client review board ala Katauser).

#### Seksi 5: Selected Works & Dogfooding (`src/components/home/Portfolio.astro`)
Format showcase window horizontal lebar bergaya Appledore:
1. **MIS-APAR** (Fire Safety Operations System)
   - *Tantangan*: Ratusan tabung pemadam berceceran tanpa riwayat kepatuhan audit.
   - *Solusi*: Re-engineering sistem ke Go + PostgreSQL, pencatatan QR barcode lapangan, 100% audit-ready.
   - *Metrik*: 50% efisiensi server, latensi 4.2s $\rightarrow$ 0.4s.
2. **Orin GPS Telemetry Platform** (Fleet & Asset Tracking at Scale)
   - *Tantangan*: Menangani streaming data posisi ribuan kendaraan secara concurrent tanpa lag.
   - *Solusi*: Arsitektur Go + TimescaleDB time-series compression + WebSocket stream.
   - *Metrik*: 10.000+ perangkat aktif, 3TB data/bulan, <100ms latency.
3. **Katauser** (In-house Product & Client Feedback Platform)
   - *Tantangan*: Menghilangkan revisi tercecer di WhatsApp / email antara agensi dan klien.
   - *Solusi*: Board interaktif berbasis token untuk klien non-teknis, dibangun dengan Laravel + Livewire + Flux UI Pro.
   - *Status*: Dogfooded aktif di Akordium Lab untuk setiap klien baru.

#### Seksi 6: Engineering Principles ("How We Build") (`src/components/home/Principles.astro` - Komponen Baru)
Menjelaskan 4 komitmen teknis yang dicari oleh pengambil keputusan:
1. **100% Code & Infrastructure Ownership**: Klien memegang hak cipta penuh, akses repository Git, dan konfigurasi deployment Coolify/Docker. Tidak ada biaya sewa lisensi tahunan yang mengikat.
2. **Architected for Maintainability**: Mengikuti standar Clean Architecture (`handler` $\rightarrow$ `usecase` $\rightarrow$ `repository`), terdokumentasi, sehingga tim internal klien dapat meneruskannya dengan mudah.
3. **Direct Engineer Access**: Tanpa perantara akun manajer non-teknis. Komunikasi teknis dilakukan langsung dengan software engineer yang bertanggung jawab.
4. **Iterative & Transparent Milestones**: Pengerjaan dibagi dalam sprint terukur dengan demo langsung dan pengujian berkala.

#### Seksi 7: The Engineer Behind the Studio (`src/components/home/Founder.astro` - Komponen Baru)
Profil Faiq Najib (Founder & Principal Engineer):
* Avatar profesional dengan circular badge frame.
* Narasi kredibilitas: Pengalaman rekayasa sistem transaksi finansial (Bank Mega), arsitektur telemetri armada real-time (Orin GPS), dan pengembang produk SaaS.
* Tautan publik: GitHub, LinkedIn, Tech Articles, dan email langsung.

#### Seksi 8: High-Intent Ingestion & CTA (`src/components/home/CTA.astro`)
* Copywriting tajam: *"Punya sistem yang perlu dibangun atau dimodernisasi? Ceritakan kebutuhan arsitektur Anda."*
* Opsi aksi:
  - Tombol WhatsApp dengan pesan terformat profesional:  
    `"Halo Faiq, saya ingin berdiskusi mengenai kebutuhan engineering untuk [Product Engineering / Modernisasi Sistem / Sistem Kustom]."`
  - Kontak email langsung untuk NDA / RFQ korporasi.

---

## 3. Visual Design System & Anti-AI Slop Rules

### 3.1 Design Tokens
* **Background**: Warm Stone Canvas (`#fafaf9` / `bg-stone-50`) dipadu kartu putih solid (`#ffffff`).
* **Dark Contrast Accent**: Deep Slate / Navy Charcoal (`#0f172a` / `#0a142e`) khusus untuk mockup window frame.
* **Primary Text**: `stone-900` (`#1c1917`) untuk judul; `stone-600` (`#57534e`) untuk teks bacaan.
* **Brand Highlights**:
  - Akordium Deep Navy (`#173d8a` / `#122450`): Otoritas teknis.
  - Ember Orange (`#ea580c` / `#f97316`): Aksen tombol utama dan status aktif.
  - Emerald Green (`#059669`): Indikator uptime dan metrik efisiensi.
* **Borders**: Hairline crisp `border-stone-200/80` (light) dan `border-stone-800` (dark).

### 3.2 Typography
* **Headings**: `Sora`, `Inter`, sans-serif dengan `font-extrabold` dan `-0.025em` tracking.
* **Body**: `Manrope`, `Inter`, sans-serif, `leading-relaxed`.
* **Technical Monospace**: `JetBrains Mono`, `font-mono` untuk metrik, tag nama service, kode, dan badge stack.

### 3.3 Iconography
* Seluruh emoji dihapus. Menggunakan SVG outline icons seragam (stroke 1.5px / 2.0px) dengan proporsi rapi (20x20px atau 24x24px).

---

## 4. Technical Architecture & File Modifications

### 4.1 File Inventory
1. `src/pages/index.astro`: Restrukturisasi layout import dan urutan seksi.
2. `src/components/common/Navbar.astro`: Update label navigasi, status pill ketersediaan, dan action button.
3. `src/components/home/Hero.astro`: Perombakan total copy dan penambahan window mockup realistis.
4. `src/components/home/ProofStrip.astro`: Komponen baru metrik reliabilitas teknis.
5. `src/components/home/Services.astro`: 3 pilar layanan engineering.
6. `src/components/home/Portfolio.astro`: Showcase window ala Appledore untuk MIS-APAR, Orin GPS, Katauser.
7. `src/components/home/Principles.astro`: Komponen baru 4 prinsip rekayasa.
8. `src/components/home/Founder.astro`: Komponen baru profil founder.
9. `src/components/home/CTA.astro`: Komponen formulir / intake WhatsApp terstruktur.
10. `src/data/portfolio.ts`: Pembaruan data case study dan metrik arsitektur.
11. `src/styles/global.css`: Pembersihan kelas gradien lama dan penambahan utilitas window frame.

### 4.2 Quality & Performance Gates
* **Static Generation**: Zero runtime JavaScript overhead pada homepage murni HTML/CSS.
* **Type Safety & Build**: Lulus `astro check`, `npm run lint`, dan `npm run build` tanpa error.
* **Responsiveness**: Pengujian teliti pada breakpoint mobile (`sm`), tablet (`md`), dan desktop (`lg`/`xl`).
