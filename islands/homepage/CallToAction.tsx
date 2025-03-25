import { languageSignal } from "../../utils/languageState.ts";

const content = {
  en: {
    title: "Let's Create Something Amazing Together",
    description:
      "Ready to take your digital presence to the next level? We're here to help you build, optimize, and grow your online business.",
    startProject: "Start a Project",
    scheduleCall: "Schedule a Call",
  },
  id: {
    title: "Mari Ciptakan Sesuatu yang Luar Biasa Bersama",
    description:
      "Siap membawa kehadiran digital Anda ke level berikutnya? Kami siap membantu Anda membangun, mengoptimalkan, dan mengembangkan bisnis online Anda.",
    startProject: "Mulai Proyek",
    scheduleCall: "Jadwalkan Konsultasi",
  },
  jv: {
    title: "Ayo Nggawe Karya sing Apik Bareng-bareng",
    description:
      "Siap ngangkat bisnis digital sampeyan dadi luwih apik? Kita siap mbiyantu sampeyan mbangun, ngoptimalake, lan ngrembakake bisnis online sampeyan.",
    startProject: "Miwiti Proyek",
    scheduleCall: "Janji Ketemu",
  },
};

export default function CallToAction() {
  const currentContent = content[languageSignal.value];

  return (
    <section className="bg-gradient-to-b from-base via-primary/10 to-primary/30 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4 text-primary">
          {currentContent.title}
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-secondary">
          {currentContent.description}
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-tertiary text-base px-5 py-2 rounded-full hover:bg-tertiary-light transition-colors">
            {currentContent.startProject}
          </button>
          <button className="border border-tertiary text-tertiary px-5 py-2 rounded-full hover:bg-tertiary/10 transition-colors">
            {currentContent.scheduleCall}
          </button>
        </div>
      </div>
    </section>
  );
}
