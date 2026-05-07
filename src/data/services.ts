export interface Service {
  id: string;
  title: string;
  titleId: string;
  description: string;
  descriptionId: string;
  icon: string;
  features: string[];
  featuresId: string[];
}

export const services: Service[] = [
  {
    id: "web-app-dev",
    title: "Web & App Development",
    titleId: "Pengembangan Web & Aplikasi",
    description:
      "We build fast, scalable, and modern web applications tailored to your business needs — from company profiles to complex enterprise systems.",
    descriptionId:
      "Kami membangun aplikasi web modern yang cepat dan skalabel, mulai dari company profile hingga sistem enterprise kompleks.",
    icon: "code",
    features: [
      "Custom web application development",
      "Mobile-responsive design",
      "API development & integration",
      "Performance optimization",
    ],
    featuresId: [
      "Pengembangan aplikasi web custom",
      "Desain responsif mobile-first",
      "Pengembangan & integrasi API",
      "Optimasi performa",
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure & Hosting Support",
    titleId: "Infrastruktur & Dukungan Hosting",
    description:
      "Reliable cloud infrastructure setup, management, and 24/7 monitoring so your systems stay up and running without interruption.",
    descriptionId:
      "Setup dan manajemen infrastruktur cloud yang handal dengan monitoring 24/7 agar sistem Anda selalu berjalan tanpa gangguan.",
    icon: "server",
    features: [
      "Cloud server setup & management",
      "24/7 uptime monitoring",
      "Backup & disaster recovery",
      "Security hardening",
    ],
    featuresId: [
      "Setup & manajemen server cloud",
      "Monitoring uptime 24/7",
      "Backup & disaster recovery",
      "Penguatan keamanan sistem",
    ],
  },
  {
    id: "training",
    title: "Training Services",
    titleId: "Layanan Pelatihan",
    description:
      "Hands-on technology training for your team — covering software tools, digital workflows, and IT best practices tailored to your industry.",
    descriptionId:
      "Pelatihan teknologi praktis untuk tim Anda — mencakup tools software, alur kerja digital, dan praktik terbaik IT sesuai industri.",
    icon: "academic",
    features: [
      "In-house corporate training",
      "Online & on-site sessions",
      "Customized training modules",
      "Post-training support",
    ],
    featuresId: [
      "Pelatihan korporat in-house",
      "Sesi online & tatap muka",
      "Modul pelatihan custom",
      "Dukungan pasca pelatihan",
    ],
  },
];
