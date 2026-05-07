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
    id: "starter",
    name: "Starter",
    price: "Rp 2.500.000",
    period: "/bulan",
    description: "Perfect for small businesses getting started with IT support.",
    descriptionId: "Cocok untuk UMKM yang baru memulai kebutuhan IT.",
    badge: "UMKM Friendly",
    featured: false,
    ctaText: "Get Started",
    ctaTextId: "Mulai Sekarang",
    features: [
      { text: "Basic IT support (email + phone)", included: true },
      { text: "Cloud setup & backup", included: true },
      { text: "Monthly health checks", included: true },
      { text: "Basic cybersecurity monitoring", included: true },
      { text: "24-hour response time", included: true },
      { text: "Dedicated account manager", included: false },
    ],
  },
  {
    id: "professional",
    name: "Professional",
    price: "Rp 5.500.000",
    period: "/bulan",
    description: "For growing businesses that need more robust IT infrastructure.",
    descriptionId: "Untuk bisnis yang berkembang dengan kebutuhan infrastruktur IT lebih kuat.",
    featured: true,
    ctaText: "Get Started",
    ctaTextId: "Mulai Sekarang",
    features: [
      { text: "Priority IT support (24/7)", included: true },
      { text: "Cloud setup & backup", included: true },
      { text: "Weekly health checks", included: true },
      { text: "Advanced security monitoring", included: true },
      { text: "4-hour response time", included: true },
      { text: "Dedicated account manager", included: true },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Large-scale solutions for complex business and enterprise systems.",
    descriptionId: "Solusi skala besar untuk bisnis dan sistem enterprise kompleks.",
    featured: false,
    ctaText: "Contact Us",
    ctaTextId: "Hubungi Kami",
    features: [
      { text: "Dedicated engineering team", included: true },
      { text: "Custom cloud architecture", included: true },
      { text: "Daily health checks & reports", included: true },
      { text: "Enterprise-grade security", included: true },
      { text: "1-hour response SLA", included: true },
      { text: "Dedicated account manager", included: true },
    ],
  },
];
