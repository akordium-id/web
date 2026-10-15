export interface ShowcaseShot {
  id: string;
  label: string;
  labelId: string;
  category: "Klien" | "Karya Mandiri" | "In-House";
  image: string;
  note?: string;
}

// Screenshot nyata dari sistem yang sudah dikirim & dikembangkan.
// JIJP adalah karya mandiri Akordium yang terinspirasi arsitektur JITA (klien, tidak diekspos).
export const showcaseShots: ShowcaseShot[] = [
  {
    id: "arabikids",
    label: "ArabiKids Learning",
    labelId: "ArabiKids — Platform Belajar",
    category: "Klien",
    image: "/images/arabikids-demo.png",
  },
  {
    id: "si-asn-belajar",
    label: "SI ASN Belajar",
    labelId: "SI ASN Belajar — Portal E-Learning",
    category: "Klien",
    image: "/images/si-asn-belajar.png",
  },
  {
    id: "easydry",
    label: "EasyDry Laundry",
    labelId: "EasyDry — Manajemen Laundry",
    category: "Klien",
    image: "/images/easydry-laundry-demo.png",
  },
  {
    id: "jijp",
    label: "JIJP",
    labelId: "JIJP — Sistem Operasional Mandiri",
    category: "Karya Mandiri",
    image: "/images/jijp-demo.png",
    note: "Terinspirasi arsitektur sistem POS klien, dibangun ulang sebagai aset mandiri.",
  },
  {
    id: "sme-tools",
    label: "SME Tools",
    labelId: "SME Tools — Perkakas UMKM",
    category: "In-House",
    image: "/images/sme-tools-akordium.png",
  },
  {
    id: "najib-blogfolio",
    label: "Blogfolio",
    labelId: "Blogfolio — Publishing & Portofolio",
    category: "Karya Mandiri",
    image: "/images/najib-blogfolio.png",
  },
  {
    id: "akordium-page",
    label: "Akordium.id",
    labelId: "Akordium.id — Situs Studio (Dogfooding)",
    category: "In-House",
    image: "/images/akordium-page.png",
  },
];
