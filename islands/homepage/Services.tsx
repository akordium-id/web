import { languageSignal } from "@/utils/languageState.ts";

const content = {
  en: {
    title: "Our Services",
    learnMore: "Learn more",
    services: [
      {
        title: "Web & App Development",
        description:
          "From simple static web to mobile apps, we build digital products that look great and perform better.",
        features: [
          "Static website or WordPress development",
          "Custom web-based application",
          "Mobile application development",
        ],
        icon: (
          <svg
            className="w-12 h-12 text-primary mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        ),
        learnMoreLink: "#webDevelopment",
      },
      // {
      //   title: "Digital Consulting",
      //   description:
      //     "Not sure where to start? Our team of experts will help you navigate the digital landscape and create a strategy that aligns with your business goals.",
      //   features: [
      //     "Digital transformation strategy",
      //     "Technology stack recommendations",
      //     "UX/UI design consulting",
      //     "Business process optimization",
      //   ],
      //   icon: (
      //     <svg
      //       className="w-12 h-12 text-primary mb-4"
      //       fill="none"
      //       stroke="currentColor"
      //       viewBox="0 0 24 24"
      //     >
      //       <path
      //         strokeLinecap="round"
      //         strokeLinejoin="round"
      //         strokeWidth={2}
      //         d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      //       />
      //     </svg>
      //   ),
      //   learnMoreLink: "#digitalConsulting",
      // },
      {
        title: "Hosting & Infrastructure",
        description:
          "Fast, secure, and reliable hosting solutions that keep your digital products running smoothly 24/7.",
        features: [
          "Cloud hosting solutions",
          "Performance optimization",
          "Security monitoring",
        ],
        icon: (
          <svg
            className="w-12 h-12 text-primary mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
            />
          </svg>
        ),
        learnMoreLink: "#hostingInfrastructure",
      },
      // {
      //   title: "Digital Marketing",
      //   description:
      //     "Drive traffic, generate leads, and increase conversions with our data-driven digital marketing services.",
      //   features: [
      //     "SEO optimization",
      //     "Content marketing",
      //     "Social media management",
      //   ],
      //   icon: (
      //     <svg
      //       className="w-12 h-12 text-primary mb-4"
      //       fill="none"
      //       stroke="currentColor"
      //       viewBox="0 0 24 24"
      //     >
      //       <path
      //         strokeLinecap="round"
      //         strokeLinejoin="round"
      //         strokeWidth={2}
      //         d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
      //       />
      //     </svg>
      //   ),
      //   learnMoreLink: "#digitalMarketing",
      // },
    ],
  },
  id: {
    title: "Layanan Kami",
    learnMore: "Lebih Lanjut",
    services: [
      {
        title: "Pengembangan Web & Aplikasi",
        description:
          "Dari website statis sederhana hingga aplikasi mobile, kami membangun produk digital yang tampil bagus dan berkinerja lebih baik.",
        features: [
          "Pengembangan web statis atau Wordpress",
          "Kustom aplikasi berbasise web",
          "Pengembangan aplikasi mobile",
        ],
        icon: (
          <svg
            className="w-12 h-12 text-primary mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        ),
        learnMoreLink: "#webDevelopment",
      },
      // {
      //   title: "Konsultasi Digital",
      //   description:
      //     "Bingung harus mulai dari mana? Tim ahli kami akan membantu Anda menavigasi lanskap digital dan membuat strategi yang selaras dengan tujuan bisnis Anda.",
      //   features: [
      //     "Strategi transformasi digital",
      //     "Rekomendasi teknologi",
      //     "Konsultasi desain UX/UI",
      //     "Optimasi proses bisnis",
      //   ],
      //   icon: (
      //     <svg
      //       className="w-12 h-12 text-primary mb-4"
      //       fill="none"
      //       stroke="currentColor"
      //       viewBox="0 0 24 24"
      //     >
      //       <path
      //         strokeLinecap="round"
      //         strokeLinejoin="round"
      //         strokeWidth={2}
      //         d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      //       />
      //     </svg>
      //   ),
      //   learnMoreLink: "#digitalConsulting",
      // },
      {
        title: "Hosting & Infrastruktur",
        description:
          "Solusi hosting yang cepat, aman, dan andal untuk menjaga produk digital Anda berjalan lancar 24/7.",
        features: [
          "Solusi cloud hosting",
          "Optimasi performa",
          "Monitoring keamanan",
        ],
        icon: (
          <svg
            className="w-12 h-12 text-primary mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
            />
          </svg>
        ),
        learnMoreLink: "#hostingInfrastructure",
      },
      // {
      //   title: "Pemasaran Digital",
      //   description:
      //     "Tingkatkan traffic, hasilkan leads, dan tingkatkan konversi dengan layanan pemasaran digital berbasis data kami.",
      //   features: [
      //     "Optimasi SEO",
      //     "Pemasaran konten",
      //     "Manajemen media sosial",
      //   ],
      //   icon: (
      //     <svg
      //       className="w-12 h-12 text-primary mb-4"
      //       fill="none"
      //       stroke="currentColor"
      //       viewBox="0 0 24 24"
      //     >
      //       <path
      //         strokeLinecap="round"
      //         strokeLinejoin="round"
      //         strokeWidth={2}
      //         d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
      //       />
      //     </svg>
      //   ),
      //   learnMoreLink: "#digitalMarketing",
      // },
    ],
  },
  jv: {
    title: "Layanan Awak Dewe",
    learnMore: "Luwih Lengkap",
    services: [
      {
        title: "Pengembangan Web & Aplikasi",
        description:
          "Teko website sederhana sampek aplikasi mobile, awak dewe nggawe produk digital seng apik lan performane jos.",
        features: [
          "Pengembangan web statis utowo WordPress",
          "Aplikasi kustom basis web",
          "Pengembangan aplikasi mobile",
        ],
        icon: (
          <svg
            className="w-12 h-12 text-primary mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        ),
        learnMoreLink: "#webDevelopment",
      },
      // {
      //   title: "Konsultasi Digital",
      //   description:
      //     "Bingung arep miwiti saka ngendi? Tim ahli kita bakal mbantu sampeyan navigasi lanskap digital lan nggawe strategi sing cocok karo tujuan bisnis sampeyan.",
      //   features: [
      //     "Strategi transformasi digital",
      //     "Rekomendasi teknologi",
      //     "Konsultasi desain UX/UI",
      //     "Optimasi proses bisnis",
      //   ],
      //   icon: (
      //     <svg
      //       className="w-12 h-12 text-primary mb-4"
      //       fill="none"
      //       stroke="currentColor"
      //       viewBox="0 0 24 24"
      //     >
      //       <path
      //         strokeLinecap="round"
      //         strokeLinejoin="round"
      //         strokeWidth={2}
      //         d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      //       />
      //     </svg>
      //   ),
      //   learnMoreLink: "#digitalConsulting",
      // },
      {
        title: "Hosting & Infrastruktur",
        description:
          "Solusi hosting seng cepet, aman, lan iso dipercaya gawe njogo produk digital sampean mlaku lancar 24/7.",
        features: [
          "Solusi cloud hosting",
          "Optimasi performa",
          "Monitoring keamanan",
        ],
        icon: (
          <svg
            className="w-12 h-12 text-primary mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
            />
          </svg>
        ),
        learnMoreLink: "#hostingInfrastructure",
      },
      // {
      //   title: "Pemasaran Digital",
      //   description:
      //     "Ningkatake traffic, ngasilake leads, lan ningkatake konversi nganggo layanan pemasaran digital berbasis data kita.",
      //   features: [
      //     "Optimasi SEO",
      //     "Pemasaran konten",
      //     "Manajemen media sosial",
      //   ],
      //   icon: (
      //     <svg
      //       className="w-12 h-12 text-primary mb-4"
      //       fill="none"
      //       stroke="currentColor"
      //       viewBox="0 0 24 24"
      //     >
      //       <path
      //         strokeLinecap="round"
      //         strokeLinejoin="round"
      //         strokeWidth={2}
      //         d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
      //       />
      //     </svg>
      //   ),
      //   learnMoreLink: "#digitalMarketing",
      // },
    ],
  },
};

export default function Services() {
  const currentContent = content[languageSignal.value];

  return (
    <section className="py-16 bg-base">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          {currentContent.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentContent.services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="flex flex-col items-center md:items-start">
                {service.icon}
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-gray-600"
                  >
                    <svg
                      className="w-5 h-5 text-primary mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="{service.learnMoreLink}"
                className="mt-4 px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
              >
                {currentContent.learnMore}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
