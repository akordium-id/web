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
    title: "Sistem Operasional & Modul Bisnis",
    badge: "Operational App",
    tagline: "Kontrol stok, kasir, nota, dan antrean pelanggan.",
    description:
      "Gantikan spreadsheet berceceran dengan sistem internal terpadu yang mudah dipakai seluruh tim dari laptop maupun ponsel.",
    deliverables: [
      "Pilihan modul: Stok barang, Kasir, Invoice, & CRM",
      "Otomatisasi notifikasi chat WhatsApp",
      "Dashboard omset & ringkasan bisnis harian",
      "100% kode & database milik Anda (tanpa sewa lisensi)",
    ],
    techStack: ["Livewire", "Laravel", "PostgreSQL", "Docker"],
    icon: "layers",
  },
  {
    id: "system-modernization",
    title: "Website & Profil Bisnis Resmi",
    badge: "Web & Brand",
    tagline: "Tampil kredibel di mata pelanggan dan mitra bisnis.",
    description:
      "Pintu masuk digital cepat saji untuk bisnis yang ingin tampil profesional, mudah ditemukan di Google, dan langsung terhubung ke WhatsApp.",
    deliverables: [
      "Website profil & katalog interaktif super cepat",
      "Optimasi SEO Google & tombol chat WhatsApp",
      "Terintegrasi form penawaran harga & email",
      "Serah terima cepat dalam 3–7 hari kerja",
    ],
    techStack: ["Astro", "Tailwind CSS", "Cloudflare"],
    icon: "workflow",
  },
  {
    id: "dedicated-tools",
    title: "Custom Engineering & Sistem Khusus",
    badge: "Custom Scale",
    tagline: "Integrasi API, armada IoT, & alur bisnis kompleks.",
    description:
      "Solusi rekayasa perangkat lunak untuk kebutuhan skala besar: penanganan jutaan data harian, sinkronisasi antar cabang, dan integrasi hardware.",
    deliverables: [
      "Backend berkecepatan tinggi berbasis Go & PostgreSQL",
      "Telemetri GPS armada / sensor IoT real-time",
      "Migrasi database dari sistem warisan/lama",
      "Dokumentasi teknis & pendampingan tim internal",
    ],
    techStack: ["Go", "PostgreSQL", "TimescaleDB", "Redis"],
    icon: "cpu",
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
