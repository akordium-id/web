import { languageSignal } from "../utils/languageState.ts";

export default function ValueProposition() {
  const content = {
    en: {
      title: "Practical Digital Solutions",
      content:
        "We provides affordable, easy-to-use digital solutions for small businesses. Focus on practical tools that help you grow without needing technical expertise.",
    },
    id: {
      title: "Solusi Digital Praktis",
      content:
        "Kami menyediakan solusi digital terjangkau untuk UKM. Memberikan alat praktis yang membantu Anda berkembang tanpa memerlukan keahlian teknis.",
    },
    jv: {
      title: "Solusi Digital Praktis",
      content:
        "Akordium nyediaké solusi digital sing terjangkau kanggo UKM. Ngekeki alat praktis kang ngewangi panjenengan ngembangake bisnis tanpo perlu keahlian teknis.",
    },
  };

  return (
    <section className="bg-[#1a1f24] py-24">
      <div className="container mx-auto max-w-5xl overflow-x-auto w-full px-5 space-y-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-200 text-center">
          {content[languageSignal.value].title}
        </h2>

        <p className="text-gray-400 text-center">
          {content[languageSignal.value].content}
        </p>
      </div>
    </section>
  );
}
