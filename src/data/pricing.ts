export interface PricingFeature {
  text: string;
  textId: string;
  included: boolean;
}

export interface PricingTier {
  id: string;
  name: string;
  nameId: string;
  price: string;
  period: string;
  description: string;
  descriptionId: string;
  badge?: string;
  badgeId?: string;
  featured: boolean;
  ctaText: string;
  ctaTextId: string;
  features: PricingFeature[];
}

// 3 tier = 1:1 dengan 3 layanan (services.ts): Company Profile / Dashboard / MIS.
export const pricingTiers: PricingTier[] = [
  {
    id: "company-profile",
    name: "Company Profile",
    nameId: "Company Profile",
    price: "Rp 500.000",
    period: "/project",
    description: "Titik masuk digital yang profesional untuk UMKM — website 1 halaman yang langsung membangun kredibilitas.",
    descriptionId: "Titik masuk digital yang profesional untuk UMKM — website 1 halaman yang langsung membangun kredibilitas.",
    badge: "Ramah UMKM",
    badgeId: "Ramah UMKM",
    featured: true,
    ctaText: "Mulai Sekarang",
    ctaTextId: "Mulai Sekarang",
    features: [
      { text: "Landing page 1 halaman profesional", textId: "Landing page 1 halaman profesional", included: true },
      { text: "Desain responsif (mobile-friendly)", textId: "Desain responsif (mobile-friendly)", included: true },
      { text: "Informasi bisnis, kontak & lokasi", textId: "Informasi bisnis, kontak & lokasi", included: true },
      { text: "Serah terima dalam 3 hari kerja", textId: "Serah terima dalam 3 hari kerja", included: true },
      { text: "Siap jadi pondasi sistem yang lebih besar", textId: "Siap jadi pondasi sistem yang lebih besar", included: true },
      { text: "Domain & hosting tidak termasuk", textId: "Domain & hosting tidak termasuk", included: false },
    ],
  },
  {
    id: "dashboard",
    name: "Dashboard & Sistem Internal",
    nameId: "Dashboard & Sistem Internal",
    price: "Mulai Rp 3.500.000",
    period: "/project",
    description: "Dashboard dan web admin untuk memantau bisnis lewat data real-time, menggantikan koordinasi manual dan spreadsheet yang berantakan.",
    descriptionId: "Dashboard dan web admin untuk memantau bisnis lewat data real-time, menggantikan koordinasi manual dan spreadsheet yang berantakan.",
    featured: false,
    ctaText: "Konsultasi Scope",
    ctaTextId: "Konsultasi Scope",
    features: [
      { text: "Dashboard & visualisasi data real-time", textId: "Dashboard & visualisasi data real-time", included: true },
      { text: "Web admin multi-pengguna", textId: "Web admin multi-pengguna", included: true },
      { text: "Laporan otomatis & ekspor data", textId: "Laporan otomatis & ekspor data", included: true },
      { text: "Integrasi data internal", textId: "Integrasi data internal", included: true },
      { text: "Deploy ke server/VPS Anda", textId: "Deploy ke server/VPS Anda", included: true },
      { text: "Garansi bug 30 hari", textId: "Garansi bug 30 hari", included: true },
    ],
  },
  {
    id: "mis",
    name: "MIS Operasional",
    nameId: "MIS Operasional",
    price: "Custom Quote",
    period: "",
    description: "Sistem operasional terintegrasi penuh: revenue, inventory, dan workflow antar divisi dalam satu alur kerja — dirancang khusus untuk cara kerja bisnis Anda.",
    descriptionId: "Sistem operasional terintegrasi penuh: revenue, inventory, dan workflow antar divisi dalam satu alur kerja — dirancang khusus untuk cara kerja bisnis Anda.",
    featured: false,
    ctaText: "Diskusikan Kebutuhan",
    ctaTextId: "Diskusikan Kebutuhan",
    features: [
      { text: "Analisis & perancangan workflow bisnis Anda", textId: "Analisis & perancangan workflow bisnis Anda", included: true },
      { text: "Multi-modul (revenue, stok, aset, antar divisi)", textId: "Multi-modul (revenue, stok, aset, antar divisi)", included: true },
      { text: "Peran & hak akses", textId: "Peran & hak akses", included: true },
      { text: "Riwayat data & audit log", textId: "Riwayat data & audit log", included: true },
      { text: "Migrasi data dari sistem lama", textId: "Migrasi data dari sistem lama", included: true },
      { text: "Konsultasi scope & estimasi gratis", textId: "Konsultasi scope & estimasi gratis", included: true },
    ],
  },
];
