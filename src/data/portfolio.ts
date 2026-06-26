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

export const portfolioItems: PortfolioItem[] = [
  {
    id: "mis-apar",
    title: "MIS-APAR: Fire Safety Management System",
    titleId: "MIS-APAR: Sistem Manajemen Keselamatan Kebakaran",
    description: "Legacy CodeIgniter 3 system migrated to Go with PostgreSQL, reducing server costs by 50% and improving response time by 87%.",
    descriptionId: "Sistem legacy CodeIgniter 3 di-migrasi ke Go dengan PostgreSQL, mengurangi biaya server 50% dan memperbaiki response time 87%.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    techStack: ["Go", "PostgreSQL", "Docker", "Tailwind CSS"],
    metrics: [
      { label: "Server Cost Reduction", value: "50%" },
      { label: "Response Time", value: "4.2s → 0.4s" },
      { label: "Throughput", value: "200 → 1200 req/min" },
    ],
    caseStudyUrl: "/blog/maximizing-roi-with-it",
  },
  {
    id: "orin-gps",
    title: "Orin GPS Platform",
    titleId: "Platform GPS Orin",
    description: "Real-time GPS tracking platform handling 10k+ devices with TimescaleDB for time-series data compression and query optimization.",
    descriptionId: "Platform tracking GPS real-time yang menangani 10k+ device dengan TimescaleDB untuk kompresi dan optimisasi query data time-series.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop&q=80",
    techStack: ["Go", "PostgreSQL + TimescaleDB", "Redis", "WebSocket", "Docker"],
    metrics: [
      { label: "Devices Tracked", value: "10k+" },
      { label: "Data Volume", value: "3TB/month" },
      { label: "Uptime", value: "99.9%" },
      { label: "Latency", value: "<100ms (4G)" },
    ],
    liveUrl: "https://gps.orin.id",
  },
  {
    id: "bank-mega",
    title: "Bank Mega Automation",
    titleId: "Otomasi Bank Mega",
    description: "RPA and integration project improving transaction throughput from 8k to 32k TPS with cloud-native architecture.",
    descriptionId: "Proyek RPA dan integrasi yang meningkatkan throughput transaksi dari 8k ke 32k TPS dengan arsitektur cloud-native.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    techStack: ["Go", "PostgreSQL", "UiPath", "AWS"],
    metrics: [
      { label: "Throughput", value: "8k → 32k TPS" },
      { label: "Response Time", value: "2.4s → 0.3s" },
      { label: "Cost Reduction", value: "60%" },
    ],
  },
];