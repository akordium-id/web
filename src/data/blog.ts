export interface BlogPost {
  slug: string;
  category: string;
  title: string;
  titleId: string;
  excerpt: string;
  excerptId: string;
  date: string;
  readTime: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "cloud-migration-made-simple",
    category: "Cloud",
    title: "Cloud Migration Made Simple",
    titleId: "Migrasi Cloud yang Mudah",
    excerpt: "A practical guide to moving your business infrastructure to the cloud without downtime or complexity.",
    excerptId: "Panduan praktis memindahkan infrastruktur bisnis Anda ke cloud tanpa downtime atau kerumitan.",
    date: "3 Apr 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&auto=format&fit=crop&q=80",
  },
  {
    slug: "it-strategies-that-scale",
    category: "Strategy",
    title: "IT Strategies That Scale",
    titleId: "Strategi IT yang Skalabel",
    excerpt: "The right software architecture, combined with proper planning, lets your systems grow alongside your business.",
    excerptId: "Arsitektur software yang tepat, dikombinasikan dengan perencanaan yang baik, membuat sistem Anda tumbuh bersama bisnis.",
    date: "27 Mar 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80",
  },
  {
    slug: "securing-your-digital-future",
    category: "Security",
    title: "Securing Your Digital Future",
    titleId: "Mengamankan Masa Depan Digital Anda",
    excerpt: "Cybersecurity is no longer optional. Here's how to build a proactive security posture for your growing business.",
    excerptId: "Keamanan siber bukan lagi pilihan. Inilah cara membangun postur keamanan proaktif untuk bisnis Anda.",
    date: "15 Mar 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&auto=format&fit=crop&q=80",
  },
  {
    slug: "maximizing-roi-with-it",
    category: "ROI",
    title: "Maximizing ROI with IT",
    titleId: "Memaksimalkan ROI dengan IT",
    excerpt: "How strategic technology investment delivers measurable returns, reduces operational costs, and accelerates growth.",
    excerptId: "Bagaimana investasi teknologi strategis memberikan hasil terukur, mengurangi biaya operasional, dan mempercepat pertumbuhan.",
    date: "5 Mar 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80",
  },
];
