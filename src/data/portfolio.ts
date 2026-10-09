export interface PortfolioItem {
  id: string;
  title: string;
  titleId: string;
  badge: string;
  description: string;
  descriptionId: string;
  image: string;
  techStack: string[];
  metrics: { label: string; value: string }[];
  liveUrl?: string;
  caseStudyUrl?: string;
  highlight: string;
}

// Case nyata engagement & in-house product Akordium Lab.
export const portfolioItems: PortfolioItem[] = [
  {
    id: "mis-apar",
    title: "MIS-APAR: Fire Safety Operations System",
    titleId: "MIS-APAR: Sistem Operasional Keselamatan Kebakaran",
    badge: "Field Operations & Audit",
    description:
      "Unifies APAR inspections, physical barcode audits, and maintenance scheduling into one unified workflow with zero missed inspections.",
    descriptionId:
      "Menyatukan inspeksi APAR, pencatatan barcode audit fisik, dan jadwal perawatan berkala dalam satu alur kerja terpusat agar tidak ada tabung kedaluwarsa.",
    image: "/images/portfolio/mis-apar.png",
    techStack: ["Go", "PostgreSQL", "Docker", "Tailwind CSS"],
    metrics: [
      { label: "Pengurangan Biaya Server", value: "50%" },
      { label: "Response Time", value: "4.2s → 0.4s" },
      { label: "Kepatuhan Audit", value: "100%" },
    ],
    highlight: "Migrasi sistem warisan ke arsitektur Go/PostgreSQL yang cepat & handal di lapangan.",
    caseStudyUrl: "/blog/maximizing-roi-with-it",
  },
  {
    id: "orin-gps",
    title: "Orin GPS: Real-time Telemetry & Asset Tracking",
    titleId: "Orin GPS: Pelacakan Armada & Telemetri Skala Besar",
    badge: "High-Concurrency IoT",
    description:
      "Real-time fleet and asset telemetry for 10,000+ active devices, streaming continuous location data with low latency for industrial operations.",
    descriptionId:
      "Platform telemetri armada real-time untuk 10.000+ perangkat aktif, menangani streaming data lokasi tanpa henti dengan latensi minimal untuk operasi logistik.",
    image: "/images/portfolio/orin-gps.png",
    techStack: ["Go", "PostgreSQL + TimescaleDB", "Redis", "WebSocket"],
    metrics: [
      { label: "Perangkat Terpantau", value: "10k+" },
      { label: "Volume Data / Bulan", value: "3TB" },
      { label: "Target Uptime", value: "99.9%" },
      { label: "Latensi Jaringan", value: "<100ms" },
    ],
    highlight: "Arsitektur telemetri Go + TimescaleDB untuk kompresi data time-series masif.",
    liveUrl: "https://gps.orin.id",
  },
  {
    id: "katauser",
    title: "Katauser: Client Portal & Feedback System",
    titleId: "Katauser: Client Feedback & Review Management",
    badge: "In-House Dogfooding SaaS",
    description:
      "Token-gated client portal for tracking revision feedback and project milestones without messy WhatsApp threads or lost emails.",
    descriptionId:
      "Portal klien berbasis token aman untuk menampung revisi desain & status milestone proyek secara terstruktur, menggantikan screenshot yang tercecer di chat.",
    image: "/images/portfolio/katauser.png",
    techStack: ["Laravel", "Livewire", "Flux UI Pro", "PostgreSQL"],
    metrics: [
      { label: "Efisiensi Siklus Revisi", value: "3×" },
      { label: "Zero Account Setup", value: "Token-Gated" },
      { label: "Status Handover", value: "Real-time" },
    ],
    highlight: "Produk in-house Akordium Lab yang digunakan langsung (dogfooding) di setiap proyek klien.",
  },
];
