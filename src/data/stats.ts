export interface Stat {
  value: string;
  label: string;
  labelId: string;
}

export const stats: Stat[] = [
  { value: "7+", label: "Clients Handled", labelId: "Instansi Ditangani" },
  { value: "4×", label: "Throughput Improvement", labelId: "Peningkatan Performa" },
  { value: "5+", label: "Years of Experience", labelId: "Tahun Pengalaman" },
  { value: "75%", label: "Test Coverage Achieved", labelId: "Test Coverage" },
];
