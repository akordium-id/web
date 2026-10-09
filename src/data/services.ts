export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface CorePractice {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  deliverables: string[];
  techStack: string[];
  icon: "layers" | "cpu" | "workflow";
}

export const corePractices: CorePractice[] = [
  {
    id: "product-engineering",
    title: "Full-Cycle Product Engineering",
    badge: "Web App & SaaS",
    tagline: "Dari ide produk hingga arsitektur siap produksi yang tahan uji.",
    description:
      "Kami merancang dan membangun platform digital dari fondasi arsitektur, skema basis data terstruktur, hingga antarmuka pengguna yang cepat dan intuitif.",
    deliverables: [
      "Arsitektur modular siap scale (Clean Architecture)",
      "RESTful API berperforma tinggi dengan audit log",
      "Siklus rilis teruji otomatis (TDD & CI/CD)",
      "Handover menyeluruh: 100% kode sumber milik Anda",
    ],
    techStack: ["Go", "Laravel", "PostgreSQL", "Tailwind CSS", "Docker"],
    icon: "layers",
  },
  {
    id: "system-modernization",
    title: "Modernisasi Sistem & Tuning Performa",
    badge: "Legacy Migration",
    tagline: "Refactoring sistem lama untuk memangkas latensi dan biaya server.",
    description:
      "Sistem lama yang lambat, monolitik, atau boros resource kami rekayasa ulang ke microservices atau stack modern tanpa mengorbankan integritas data historis.",
    deliverables: [
      "Migrasi aman PHP/MySQL warisan ke Go/PostgreSQL",
      "Optimasi query, koneksi pooling pgx, dan caching",
      "Kompresi time-series data untuk IoT (TimescaleDB)",
      "Zero-downtime migration pipeline",
    ],
    techStack: ["Go", "pgx", "PostgreSQL", "TimescaleDB", "Redis"],
    icon: "cpu",
  },
  {
    id: "dedicated-tools",
    title: "Sistem Operasional & Portal Khusus",
    badge: "Workflow Automation",
    tagline: "Hilangkan spreadsheet berceceran dengan alat operasional presisi.",
    description:
      "Membangun alat kerja internal yang disesuaikan persis dengan alur bisnis Anda: portal review klien, automasi cetak faktur/PDF, hingga integrasi bot WhatsApp.",
    deliverables: [
      "Client Portal & Feedback Management (Dogfooding Katauser)",
      "Notifikasi otomatis & gateway pelaporan WhatsApp",
      "Pelacakan stok fisik, inspeksi barcode QR di lapangan",
      "Dasbor analitik bisnis real-time tanpa lisensi bulanan",
    ],
    techStack: ["Livewire", "Flux UI", "PostgreSQL", "Cloudflare", "Docker"],
    icon: "workflow",
  },
];

export const services: Service[] = [
  {
    id: "company-profile",
    title: "Website Company Profile",
    description: "Pondasi awal untuk membangun kepercayaan Anda di dunia digital.",
    icon: "globe",
    features: [
      "Tampil profesional di mata klien sejak impresi pertama",
      "Memastikan nilai bisnis Anda dipahami dengan mudah",
      "Desain responsif yang siap menjadi pintu masuk bagi sistem bisnis yang lebih besar nantinya",
    ],
  },
  {
    id: "dashboard-web",
    title: "Dashboard dan Sistem Internal",
    description: "Platform yang hadir ketika spreadsheet dan chat sudah tidak cukup.",
    icon: "chart",
    features: [
      "Pantau kondisi bisnis lewat data real-time yang mudah dibaca",
      "Berhenti membuang waktu untuk koordinasi manual yang melelahkan",
      "Pantau setiap proses dari awal hingga akhir dengan transparan dan rapi",
    ],
  },
  {
    id: "mis-operasional",
    title: "MIS (Management Information System) Operasional",
    description: "Menjaga operasional tetap lancar, dan kendali tetap di tangan Anda.",
    icon: "cog",
    features: [
      "Pastikan tidak ada pesanan yang terlewat atau tagihan yang terlupakan",
      "Pantau stok dan jadwal perawatan aset secara otomatis dan akurat",
      "Hubungkan antar divisi tanpa kendala dokumen yang tertunda atau hilang di tengah jalan",
    ],
  },
];
