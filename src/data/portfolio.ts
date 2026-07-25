export interface PortfolioItem {
  id: string;
  title: string;
  titleId: string;
  description: string;
  descriptionId: string;
  image: string;
  techStack: string[];
  metrics: { label: string; value: string }[];
  liveUrl?: string;
  caseStudyUrl?: string;
}

// Case nyata engagement Akordium Lab. Framing: manfaat operasional dulu,
// teknologi (Go/PostgreSQL) sebagai bukti kapabilitas, bukan headline.
export const portfolioItems: PortfolioItem[] = [
  {
    id: "mis-apar",
    title: "MIS-APAR: Fire Safety Operations System",
    titleId: "MIS-APAR: Sistem Operasional Keselamatan Kebakaran",
    description: "Unifies APAR inspections, stock, and maintenance scheduling into one workflow — so no extinguisher goes expired and no inspection gets missed. (Rebuilt from a legacy system to Go/PostgreSQL.)",
    descriptionId: "Menyatukan inspeksi APAR, stok, dan jadwal perawatan dalam satu alur kerja — agar tidak ada alat kedaluwarsa atau inspeksi yang terlewat. (Dibangun ulang dari sistem lama ke Go/PostgreSQL.)",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    techStack: ["Go", "PostgreSQL", "Docker", "Tailwind CSS"],
    metrics: [
      { label: "Pengurangan Biaya Server", value: "50%" },
      { label: "Response Time", value: "4.2s → 0.4s" },
      { label: "Throughput", value: "200 → 1200 req/min" },
    ],
    caseStudyUrl: "/blog/maximizing-roi-with-it",
  },
  {
    id: "orin-gps",
    title: "Orin GPS: Real-time Operations Tracking",
    titleId: "Orin GPS: Pelacakan Operasional Real-time",
    description: "Real-time fleet and asset tracking for 10,000+ devices, with consistent location data and low latency for field operations.",
    descriptionId: "Pelacakan armada dan aset real-time untuk 10.000+ perangkat, dengan data lokasi yang konsisten dan latensi rendah untuk operasional lapangan.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop&q=80",
    techStack: ["Go", "PostgreSQL + TimescaleDB", "Redis", "WebSocket", "Docker"],
    metrics: [
      { label: "Perangkat Dipantau", value: "10k+" },
      { label: "Volume Data", value: "3TB/bulan" },
      { label: "Uptime", value: "99.9%" },
      { label: "Latency", value: "<100ms (4G)" },
    ],
    liveUrl: "https://gps.orin.id",
  },
  {
    id: "bank-mega",
    title: "Bank Mega: Transaction Process Automation",
    titleId: "Bank Mega: Otomasi Proses Transaksi",
    description: "Automation and integration of internal transaction processes that cut processing time and eliminated repetitive manual work.",
    descriptionId: "Otomasi dan integrasi proses transaksi internal yang memangkas waktu pemrosesan dan menghilangkan pekerjaan manual berulang.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    techStack: ["Go", "PostgreSQL", "UiPath", "AWS"],
    metrics: [
      { label: "Throughput", value: "8k → 32k TPS" },
      { label: "Response Time", value: "2.4s → 0.3s" },
      { label: "Pengurangan Biaya", value: "60%" },
    ],
  },
];
