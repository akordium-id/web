import { languageSignal } from "@/utils/languageState.ts";

const content = {
  en: {
    tagline: "Software Company",
    heading: "Your Digital Partner for Growth",
    subheading:
      "Secure and reliable • Result-driven approach • Fast-paced development • Professional",
    cta: "Book a Call",
    work: "See Our Work",
  },
  id: {
    tagline: "Perusahaan Software",
    heading: "Mitra Digital untuk Pertumbuhan Bisnis Anda",
    subheading:
      "Aman dan terpercaya • Berorientasi hasil • Pengembangan cepat • Profesional",
    cta: "Hubungi Kami",
    work: "Lihat Hasil Kami",
  },
  jv: {
    tagline: "Perusahaan Software",
    heading: "Partner Digital Seng Peduli Ambek Sampean",
    subheading:
      "Aman lan terpercaya • Fokus hasil • Pengembangan cepet • Profesional",
    cta: "Hubungi Awak Dewe",
    work: "Delok Garapan Awak Dewe",
  },
};

export default function HeroContent() {
  const currentContent = content[languageSignal.value];

  return (
    <div className="text-center space-y-6 md:space-y-8">
      <span className="inline-block text-sm md:text-base text-primary/80 font-medium mb-2">
        {currentContent.tagline}
      </span>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
        {currentContent.heading}
      </h1>
      <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto">
        {currentContent.subheading}
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <a
          href="/contact"
          className="bg-tertiary hover:bg-tertiary-light text-base rounded-full px-3 py-2 md:px-5 md:py-3 text-base md:text-lg transition-colors"
        >
          {currentContent.cta}
        </a>
        <a
          href="#"
          className="border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full px-3 py-2 md:px-5 md:py-3 text-base md:text-lg font-medium transition-colors"
        >
          {currentContent.work}
        </a>
      </div>
    </div>
  );
}
