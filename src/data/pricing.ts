export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  descriptionId: string;
  badge?: string;
  featured: boolean;
  ctaText: string;
  ctaTextId: string;
  features: PricingFeature[];
}

export const pricingTiers: PricingTier[] = [
  {
    id: "umkm",
    name: "UMKM",
    price: "Rp 500.000",
    period: "/project",
    description: "A ready-made, professional 1-page website built fast with AI assistance. Perfect entry point for small businesses.",
    descriptionId: "Website 1 halaman profesional, dibangun cepat dengan bantuan AI. Titik mulai ideal untuk UMKM yang ingin hadir secara digital.",
    badge: "UMKM Friendly",
    featured: false,
    ctaText: "Get Started",
    ctaTextId: "Mulai Sekarang",
    features: [
      { text: "Landing page 1 halaman profesional", included: true },
      { text: "Desain responsif (mobile-friendly)", included: true },
      { text: "Informasi bisnis, kontak & lokasi", included: true },
      { text: "Domain & hosting tidak termasuk", included: true },
      { text: "Serah terima dalam 3 hari kerja", included: true },
      { text: "Kustomisasi desain & fitur tambahan", included: false },
    ],
  },
  {
    id: "bisnis",
    name: "Bisnis",
    price: "Rp 1.000.000",
    period: "/project",
    description: "Same fast delivery for non-UMKM businesses. Ready-made design, up and running in days.",
    descriptionId: "Kecepatan yang sama untuk perusahaan non-UMKM. Desain siap pakai, langsung online dalam hitungan hari.",
    featured: true,
    ctaText: "Get Started",
    ctaTextId: "Mulai Sekarang",
    features: [
      { text: "Landing page 1 halaman profesional", included: true },
      { text: "Desain responsif (mobile-friendly)", included: true },
      { text: "Informasi bisnis, kontak & lokasi", included: true },
      { text: "Domain & hosting tidak termasuk", included: true },
      { text: "Serah terima dalam 3 hari kerja", included: true },
      { text: "Kustomisasi desain & fitur tambahan", included: false },
    ],
  },
  {
    id: "custom",
    name: "Custom",
    price: "Mulai Rp 3.500.000",
    period: "/project",
    description: "Need more pages, custom design, or specific features? Let's talk and build exactly what you need.",
    descriptionId: "Butuh lebih banyak halaman, desain kustom, atau fitur spesifik? Ceritakan kebutuhanmu dan kami bangun sesuai permintaan.",
    featured: false,
    ctaText: "Contact Us",
    ctaTextId: "Hubungi Kami",
    features: [
      { text: "Multi-halaman & struktur kustom", included: true },
      { text: "Desain unik sesuai brand", included: true },
      { text: "Fitur interaktif & integrasi", included: true },
      { text: "CMS / dashboard admin (opsional)", included: true },
      { text: "Support & garansi bug 30 hari", included: true },
      { text: "Konsultasi scope & estimasi gratis", included: true },
    ],
  },
];
