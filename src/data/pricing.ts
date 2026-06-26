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

export const pricingTiers: PricingTier[] = [
  {
    id: "umkm",
    name: "Starter",
    nameId: "UMKM",
    price: "Rp 500.000",
    period: "/project",
    description: "A ready-made, professional 1-page website built fast with AI assistance. Perfect entry point for small businesses.",
    descriptionId: "Website 1 halaman profesional, dibangun cepat dengan bantuan AI. Titik mulai ideal untuk UMKM yang ingin hadir secara digital.",
    badge: "UMKM Friendly",
    badgeId: "Ramah UMKM",
    featured: false,
    ctaText: "Get Started",
    ctaTextId: "Mulai Sekarang",
    features: [
      { text: "Landing page 1 halaman profesional", textId: "Landing page 1 halaman profesional", included: true },
      { text: "Desain responsif (mobile-friendly)", textId: "Desain responsif (mobile-friendly)", included: true },
      { text: "Informasi bisnis, kontak & lokasi", textId: "Informasi bisnis, kontak & lokasi", included: true },
      { text: "Domain & hosting tidak termasuk", textId: "Domain & hosting tidak termasuk", included: true },
      { text: "Serah terima dalam 3 hari kerja", textId: "Serah terima dalam 3 hari kerja", included: true },
      { text: "Kustomisasi desain & fitur tambahan", textId: "Kustomisasi desain & fitur tambahan", included: false },
    ],
  },
  {
    id: "bisnis",
    name: "Business",
    nameId: "Bisnis",
    price: "Rp 1.000.000",
    period: "/project",
    description: "Everything in Starter, plus Go/PostgreSQL for your production workload. Includes basic system architecture.",
    descriptionId: "Semua yang ada di UMKM, plus migrasi ke Go/PostgreSQL untuk beban kerja produksi. Termasuk arsitektur sistem dasar.",
    featured: true,
    ctaText: "Get Started",
    ctaTextId: "Mulai Sekarang",
    features: [
      { text: "Landing page 1 halaman profesional", textId: "Landing page 1 halaman profesional", included: true },
      { text: "Desain responsif (mobile-friendly)", textId: "Desain responsif (mobile-friendly)", included: true },
      { text: "Informasi bisnis, kontak & lokasi", textId: "Informasi bisnis, kontak & lokasi", included: true },
      { text: "Domain & hosting tidak termasuk", textId: "Domain & hosting tidak termasuk", included: true },
      { text: "Serah terima dalam 3 hari kerja", textId: "Serah terima dalam 3 hari kerja", included: true },
      { text: "Go/PostgreSQL backend architecture", textId: "Arsitektur backend Go/PostgreSQL", included: true },
      { text: "Deploy ke server/VPS Anda", textId: "Deploy ke server/VPS Anda", included: true },
      { text: "Kustomisasi desain & fitur tambahan", textId: "Kustomisasi desain & fitur tambahan", included: false },
    ],
  },
  {
    id: "custom",
    name: "Custom",
    nameId: "Custom",
    price: "Mulai Rp 3.500.000",
    period: "/project",
    description: "Need more pages, custom design, or specific features? Let's talk and build exactly what you need.",
    descriptionId: "Butuh lebih banyak halaman, desain kustom, atau fitur spesifik? Ceritakan kebutuhanmu dan kami bangun sesuai permintaan.",
    featured: false,
    ctaText: "Contact Us",
    ctaTextId: "Hubungi Kami",
    features: [
      { text: "Multi-halaman & struktur kustom", textId: "Multi-halaman & struktur kustom", included: true },
      { text: "Desain unik sesuai brand", textId: "Desain unik sesuai brand", included: true },
      { text: "Fitur interaktif & integrasi", textId: "Fitur interaktif & integrasi", included: true },
      { text: "CMS / dashboard admin (opsional)", textId: "CMS / dashboard admin (opsional)", included: true },
      { text: "Support & garansi bug 30 hari", textId: "Support & garansi bug 30 hari", included: true },
      { text: "Konsultasi scope & estimasi gratis", textId: "Konsultasi scope & estimasi gratis", included: true },
    ],
  },
];