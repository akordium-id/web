export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: "company-profile",
    title: "Website Company Profile",
    description:
      "Pondasi awal untuk membangun kepercayaan Anda di dunia digital.",
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
    description:
      "Platform yang hadir ketika spreadsheet dan chat sudah tidak cukup.",
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
    description:
      "Menjaga operasional tetap lancar, dan kendali tetap di tangan Anda.",
    icon: "cog",
    features: [
      "Pastikan tidak ada pesanan yang terlewat atau tagihan yang terlupakan",
      "Pantau stok dan jadwal perawatan aset secara otomatis dan akurat",
      "Hubungkan antar divisi tanpa kendala dokumen yang tertunda atau hilang di tengah jalan",
    ],
  },
];
