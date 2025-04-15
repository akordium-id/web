import { languageSignal } from "@/utils/languageState.ts";

const content = {
  en: {
    title: "Let's Create Something Amazing Together",
    description:
      "Ready to take your digital presence to the next level? We're here to help you build, optimize, and grow your online business.",
    startProject: "Contact us",
    scheduleCall: "WhatsApp",
    ctaWhatsApp:
      "http://wa.me/628159988995?text=Hello,%20I%20would%20like%20to%20consult%20with%20you...",
  },
  id: {
    title: "Mari Ciptakan Sesuatu yang Luar Biasa Bersama",
    description:
      "Siap membawa kehadiran digital Anda ke level berikutnya? Kami siap membantu Anda membangun, mengoptimalkan, dan mengembangkan bisnis online Anda.",
    startProject: "Hubungi Kami",
    scheduleCall: "WhatsApp",
    ctaWhatsApp:
      "http://wa.me/628159988995?text=Halo,%20saya%20ingin%20berkonsultasi%20dengan%20Anda...",
  },
  jv: {
    title: "Ayo Gawe Karya Seng Apik Bareng-bareng",
    description:
      "Siap nggawe bisnis digital sampean dadi luwih jos? Awak dewe siap mbantu sampean nggawe, ngapiki, lan ngrembakno bisnis online sampean.",
    startProject: "Hubungi Awak Dewe",
    scheduleCall: "WA Sek",
    ctaWhatsApp:
      "http://wa.me/628159988995?text=Halo,%20aku%20kepingin%20konsultasi%20ambek%20sampean...",
  },
};

export default function CallToAction() {
  const currentContent = content[languageSignal.value];

  return (
    <section className="bg-secondary/10 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4 text-primary">
          {currentContent.title}
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-primary">
          {currentContent.description}
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="/contact"
            className="bg-tertiary text-base px-5 py-2 rounded-full hover:bg-tertiary-light transition-colors"
          >
            {currentContent.startProject}
          </a>
          <a
            href={currentContent.ctaWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-tertiary text-tertiary px-5 py-2 rounded-full hover:bg-tertiary/10 transition-colors"
          >
            {currentContent.scheduleCall}
          </a>
        </div>
      </div>
    </section>
  );
}
