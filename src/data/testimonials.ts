export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  companyId: string;
  content: string;
  contentId: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "teavaro",
    name: "Rizky Pratama",
    role: "CTO",
    company: "Teavaro",
    companyId: "Teavaro",
    content: "Akordium Lab transformed our data infrastructure. The migration to Go with PostgreSQL reduced our operational costs by 60% while improving query performance 5x. Their technical depth in PostgreSQL optimization was exactly what we needed.",
    contentId: "Akordium Lab mentransformasi infrastruktur data kami. Migrasi ke Go dengan PostgreSQL mengurangi biaya operasional 60% sambil meningkatkan performa query 5x. Kedalaman teknis mereka di optimisasi PostgreSQL sangat tepat untuk kebutuhan kami.",
    avatar: "https://images.unsplash.com/photo-1507003211144-7074d7fe9f31?w=100&auto=format&fit=crop&q=80",
  },
  {
    id: "bank-mega",
    name: "Sari Dewi",
    role: "IT Director",
    company: "Bank Mega",
    companyId: "Bank Mega",
    content: "The throughput improvement from 8k to 32k TPS was game-changing for our transaction processing. Faiq's team delivered ahead of schedule with zero downtime during migration.",
    contentId: "Peningkatan throughput dari 8k ke 32k TPS sangat transformatif bagi pemrosesan transaksi kami. Tim Faiq menyelesaikan proyek lebih awal dari jadwal dengan zero downtime selama migrasi.",
    avatar: "https://images.unsplash.com/photo-1494790108377-5a17f225c531?w=100&auto=format&fit=crop&q=80",
  },
  {
    id: "cv-andika",
    name: "Ahmad Fauzi",
    role: "Owner",
    company: "CV Andika Jaya Infinite",
    companyId: "CV Andika Jaya Infinite",
    content: "MIS-APAR implementation streamlined our entire inventory management. We went from scattered spreadsheets to a unified system that saves us 20 hours per month.",
    contentId: "Implementasi MIS-APAR mengoptimalkan seluruh manajemen inventaris kami. Kami berubah dari spreadsheet tersebar ke sistem terintegrasi yang menghemat 20 jam per bulan.",
    avatar: "https://images.unsplash.com/photo-1472099644205-1c32c7112c1f?w=100&auto=format&fit=crop&q=80",
  },
];