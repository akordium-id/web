# Standardize Icons with astro-icon Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Mengadopsi library `astro-icon` + dataset `@iconify-json/lucide` untuk menggantikan penggunaan emoji (emoticon) yang tidak konsisten di UI and menstandarkan komponen icon di seluruh proyek dengan zero runtime JS.

**Architecture:** Menggunakan komponen `<Icon name="lucide:..." />` dari `astro-icon/components`. Icon di-render langsung sebagai static SVG saat build time sehingga zero JS di client. Dimulai dari migrasi komponen yang saat ini menggunakan emoji (NeedsSelector dan kartu nama), dilanjutkan dengan komponen list checklist/cross di halaman katalog.

**Tech Stack:** Astro v7, `astro-icon` (v1.2.0), `@iconify-json/lucide`, Tailwind CSS v4, pnpm.

**Spec:** Migrasi icon ke Opsi 1 (`astro-icon` + Lucide) untuk menghilangkan emoticon/emoji di kartu fitur dan interactive elements serta menjaga konsistensi stroke dan ukuran.

## Global Constraints

- Tetap mempertahankan build static Astro tanpa error (`pnpm build`).
- Semua test vitest harus tetap hijau (`pnpm test`).
- Warna icon harus adaptif dan mewarisi token Tailwind yang sudah ada (`currentColor`, class text color).

## Review Focus

- Emoji di `NeedsSelector.astro` digantikan dengan padanan Lucide yang representatif (globe, package, receipt/badge-dollar-sign, users, calendar, bar-chart-3, settings, help-circle).
- Tampilan kartu nama `/card/faiq`, `/card/shinta`, `/card/nam-nam` pada tab switcher tidak lagi memakai emoji `🎴` dan `👤`, diganti dengan icon Lucide yang rapi.
- Karakter raw `✓` dan `✕` di `src/pages/catalog/[slug].astro` diganti dengan icon Lucide (`lucide:check` dan `lucide:x`).
- Build dan preview tetap aman tanpa runtime bundle overhead.

---

### Task 1: Verifikasi Integrasi `astro-icon` & Lucide

**Files:**
- Modify: `package.json`
- Modify: `pnpm-workspace.yaml`

**Interfaces:**
- Consumes: `@iconify-json/lucide`, `astro-icon/components`
- Produces: Komponen `<Icon name="lucide:..." />` siap diimport di seluruh template Astro

- [x] **Step 1: Pastikan dependency `astro-icon` dan `@iconify-json/lucide` terdaftar di package.json dan workspace bersih**
- [x] **Step 2: Jalankan `pnpm build` untuk memvalidasi engine Astro mengenali astro-icon**
- [x] **Step 3: Commit perubahan dependency**

```bash
git add package.json pnpm-workspace.yaml pnpm-lock.yaml
git commit -m "chore: add astro-icon and @iconify-json/lucide dependencies"
```

---

### Task 2: Migrasi Emoji di `NeedsSelector.astro` ke `astro-icon`

**Files:**
- Modify: `src/components/home/NeedsSelector.astro`

**Interfaces:**
- Consumes: `import { Icon } from 'astro-icon/components';`
- Produces: Rendering visual SVG konsisten untuk 8 kartu kebutuhan pelanggan

- [x] **Step 1: Update data `needs` dengan nama icon Lucide:**
  - `🌐` -> `"lucide:globe"`
  - `📦` -> `"lucide:package"`
  - `💰` -> `"lucide:receipt"`
  - `👥` -> `"lucide:users"`
  - `📅` -> `"lucide:calendar"`
  - `📊` -> `"lucide:bar-chart-3"`
  - `⚙️` -> `"lucide:settings"`
  - `🤔` -> `"lucide:help-circle"`
- [x] **Step 2: Ganti elemen `<span>{item.icon}</span>` dengan `<Icon name={item.icon} class="w-6 h-6 text-primary-900" />`**
- [x] **Step 3: Jalankan `pnpm build` untuk memastikan icon SVG berhasil di-generate**
- [x] **Step 4: Commit perubahan**

```bash
git add src/components/home/NeedsSelector.astro
git commit -m "refactor(home): replace emojis in NeedsSelector with lucide icons"
```

---

### Task 3: Migrasi Emoji di Halaman Kartu Nama (`/card/*.astro`)

**Files:**
- Modify: `src/pages/card/faiq.astro`
- Modify: `src/pages/card/shinta.astro`
- Modify: `src/pages/card/nam-nam.astro`

**Interfaces:**
- Consumes: `import { Icon } from 'astro-icon/components';`
- Produces: Tab switcher sisi kartu nama yang elegan tanpa emoji `🎴` dan `👤`

- [x] **Step 1: Ganti emoji `🎴 Sisi Depan` dengan `<Icon name="lucide:credit-card" class="w-4 h-4 inline-block mr-1.5" /> Sisi Depan`**
- [x] **Step 2: Ganti emoji `👤 Sisi Belakang` dengan `<Icon name="lucide:user" class="w-4 h-4 inline-block mr-1.5" /> Sisi Belakang`**
- [x] **Step 3: Terapkan perubahan identik di ketiga file kartu nama (`faiq.astro`, `shinta.astro`, `nam-nam.astro`)**
- [x] **Step 4: Jalankan `pnpm build` dan `pnpm test`**
- [x] **Step 5: Commit perubahan**

```bash
git add src/pages/card/
git commit -m "refactor(card): replace emoji tabs with lucide icons in digital cards"
```

---

### Task 4: Migrasi Raw Checklist/Cross di Halaman Detail Katalog

**Files:**
- Modify: `src/pages/catalog/[slug].astro`

**Interfaces:**
- Consumes: `import { Icon } from 'astro-icon/components';`
- Produces: List tantangan (`lucide:x`) dan highlight solusi (`lucide:check`) dengan SVG seragam

- [x] **Step 1: Import `Icon` dari `astro-icon/components` di `src/pages/catalog/[slug].astro`**
- [x] **Step 2: Ganti `<span class="text-rose-500 font-bold shrink-0">✕</span>` dengan `<Icon name="lucide:x" class="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />`**
- [x] **Step 3: Ganti `<span class="text-emerald-600 font-bold shrink-0">✓</span>` dengan `<Icon name="lucide:check" class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />`**
- [x] **Step 4: Jalankan build dan test penuh**
- [x] **Step 5: Commit perubahan**

```bash
git add src/pages/catalog/[slug].astro
git commit -m "refactor(catalog): replace raw check and cross symbols with lucide icons"
```
