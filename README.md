# Akordium — Website

Website resmi **Akordium**, partner digital yang peduli untuk perkembangan bisnis Anda serta mengedepankan kenyamanan dan kolaborasi bersama.

> ⚡ Dibangun dengan Astro 6, Tailwind CSS 4, dan Markdown — dioptimalkan untuk performa, SEO, dan kemudahan pengelolaan konten.

🌐 **Live:** [akordium.id](https://akordium.id)

## ✨ Fitur

- ✅ Bilingual: English & Indonesia (i18n)
- ✅ Halaman layanan: Web & App Development, Hosting & Infrastructure
- ✅ Blog dengan Markdown
- ✅ SEO-ready: meta tags, Open Graph, JSON-LD schema
- ✅ Sticky header dan navigasi anchor per section
- ✅ Contact form via Web3Forms
- ✅ Fully responsive dan accessible
- ✅ Deploy ke Vercel, Netlify, atau Cloudflare Pages

## ⚡ Quick Start

```bash
git clone <repo-url>
cd web
npm install
npm run dev
```

Dev server berjalan di `http://localhost:4321`.

## 🚀 Struktur Project

```text
.
├── public/
├── scripts/
├── src/
│   ├── assets/
│   ├── config/
│   │   ├── config.toml      # Konfigurasi utama (site, SEO, kontak)
│   │   ├── menu.en.json     # Menu navigasi English
│   │   └── menu.id.json     # Menu navigasi Indonesia
│   ├── content/
│   │   ├── blog/
│   │   ├── services/
│   │   │   ├── english/
│   │   │   └── indonesian/
│   │   └── homepage/
│   │       ├── english/
│   │       └── indonesian/
│   ├── i18n/
│   │   ├── en.json
│   │   └── id.json
│   ├── layouts/
│   ├── lib/
│   ├── pages/
│   └── styles/
├── astro.config.mjs
├── netlify.toml
└── vercel.json
```

## 🧞 Commands

| Command                        | Action                                       |
| :----------------------------- | :------------------------------------------- |
| `npm install`                  | Install dependencies                         |
| `npm run dev`                  | Dev server di `localhost:4321`               |
| `npm run build`                | Build production ke `./dist/`                |
| `npm run preview`              | Preview build sebelum deploy                 |
| `npm run generate-favicons`    | Generate favicon dari logo                   |
| `npm run format`               | Format kode dengan Prettier                  |

## 📝 Mengelola Konten

Semua konten dikelola lewat file Markdown/MDX di `src/content/`:

- **Homepage** — edit `src/content/homepage/english/` atau `indonesian/`
- **Services** — tambah/edit file di `src/content/services/english/` atau `indonesian/`
- **Blog** — tambah file `.md` di `src/content/blog/`

Konfigurasi global (nama site, kontak, SEO) ada di `src/config/config.toml`.

## 🚀 Deployment

Site ini siap deploy ke:

- **Vercel** — gunakan `vercel.json` yang sudah tersedia
- **Netlify** — gunakan `netlify.toml` yang sudah tersedia

## 📞 Kontak

- Email: hello@akordium.id
- Telepon: +62 815-9988-995
- Alamat: Jl. Pagesangan Agung I/84, Surabaya, Jawa Timur, 60233

## 🛠 Tech Stack

- [Astro 6](https://astro.build)
- [Tailwind CSS 4](https://tailwindcss.com)
- [Lumio Lite](https://getastrothemes.com/astro-themes/lumio/) (base theme)
