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
    title: "Website company profile",
    description:
      "Profesional dan jelas, pondasi bisnis hadir secara digital dengan lebih meyakinkan.",
    icon: "globe",
    features: [
      "Desain profesional dan responsif",
      "Menjelaskan layanan bisnis dengan jelas",
      "Kehadiran digital yang meyakinkan",
      "Pondasi untuk sistem internal berikutnya",
    ],
  },
  {
    id: "dashboard-web",
    title: "Dashboard dan web internal",
    description:
      "Platform pengelola data, memantau aktivitas, dan menjalankan proses kerja internal lebih tertata. Ketika spreadsheet dan chat sudah tidak cukup.",
    icon: "chart",
    features: [
      "Dashboard pengelolaan data tim",
      "Pemantauan aktivitas dan laporan",
      "Web admin untuk proses kerja internal",
      "Menggantikan spreadsheet dan chat manual",
    ],
  },
  {
    id: "mis-operasional",
    title: "MIS operasional",
    description:
      "Management information system untuk penjualan, inventory, maintenance, invoice, dan workflow antarbagian.",
    icon: "cog",
    features: [
      "Sistem penjualan dan inventory",
      "Manajemen aset, maintenance, dan invoice",
      "Workflow dan dokumen antarbagian",
      "Sistem yang praktis dan mudah dipakai tim",
    ],
  },
];
