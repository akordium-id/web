# Akordium - Mitra seng peduli karo sampeyan

[![Deploy](https://github.com/akordium-id/web/actions/workflows/deploy.yml/badge.svg)](https://github.com/akordium-id/web/actions/workflows/deploy.yml)

Selamat datang di Akordium, partner digital yang peduli untuk perkembangan bisnis Anda serta mengedepankan kenyamanan dan kolaborasi bersama.

## 🚀 Tech Stack

Akordium dibangun menggunakan teknologi modern:

- [Deno](https://deno.land/) - Runtime JavaScript/TypeScript yang aman dan modern
- [Fresh Framework](https://fresh.deno.dev/) - Web framework untuk Deno yang ringan dan cepat
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework untuk styling yang fleksibel
- [Preact](https://preactjs.com/) - Library UI yang ringan dan cepat
- [Zod](https://zod.dev/) - TypeScript-first schema validation

## 📂 Project Structure

The project follows a feature-based organization:

### Routes

- `/routes/features/` - Feature-based routes organized by domain
  - `/routes/features/home/` - Home page routes
  - `/routes/features/contact/` - Contact page routes
  - `/routes/features/about/` - About page routes
  - `/routes/features/auth/` - Authentication routes

### Components

- `/components/shared/` - Shared components used across features
  - `/components/shared/ui/` - UI components
    - `/components/shared/ui/buttons/` - Button components
    - `/components/shared/ui/forms/` - Form components
    - `/components/shared/ui/layout/` - Layout components
    - `/components/shared/ui/feedback/` - Feedback components (error messages, notifications)
  - `/components/shared/layout/` - Shared layout components
- `/components/homepage/` - Components specific to the homepage
- `/components/layout/` - Layout components

### Islands

- `/islands/shared/` - Shared interactive components
- `/islands/homepage/` - Interactive components for the homepage
- `/islands/contact/` - Interactive components for the contact page

## ✨ Features

- 🔄 Centralized layout system
- 🛡️ Form validation with Zod
- 🌐 Enhanced SEO utilities
- 🚨 Error handling and boundaries
- 🎨 Centralized theme configuration

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/akordium-id/web.git
cd web

# Start the development server
deno task start
```

## URL Structure

While the project uses a feature-based organization internally, the public URLs remain clean and user-friendly:

- `/` - Home page
- `/contact` - Contact page
- `/about` - About page

The internal feature-based routes (`/features/home`, `/features/contact`, etc.) are not exposed to users. The middleware handles mapping between the internal structure and the public URLs.

---

[![Made with Fresh](https://fresh.deno.dev/fresh-badge.svg)](https://fresh.deno.dev)

Dibuat dengan ❤️ oleh Tim Akordium
