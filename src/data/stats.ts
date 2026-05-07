export interface Stat {
  value: string;
  label: string;
  labelId: string;
}

export const stats: Stat[] = [
  { value: "200+", label: "Projects Completed", labelId: "Proyek Selesai" },
  { value: "95%", label: "Client Satisfaction", labelId: "Kepuasan Klien" },
  { value: "40%", label: "Average Cost Savings", labelId: "Penghematan Biaya" },
  { value: "50+", label: "Active Partners", labelId: "Mitra Aktif" },
];
