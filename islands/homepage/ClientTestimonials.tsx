import { languageSignal } from "../../utils/languageState.ts";
import { useEffect, useRef, useState } from "preact/hooks";

const content = {
  en: {
    title: "What Our Clients Say",
    subtitle: "Real feedback from real people we've worked with",
    testimonials: [
      {
        quote:
          "They didn't just build us a website, they built us a digital presence that transformed our business. The team was responsive, creative, and actually fun to work with!",
        author: "Sarah Johnson",
        position: "Marketing Director, TechStart",
        image: "https://i.pravatar.cc/150?img=1",
      },
      {
        quote:
          "Our app launch was a huge success thanks to the development and marketing support from this team. They understood our vision and made it even better than we imagined!",
        author: "Michael Chen",
        position: "Founder, HeadTrack",
        image: "https://i.pravatar.cc/150?img=3",
      },
      {
        quote:
          "The consulting services we received helped us navigate a complex digital transformation. Their hosting solutions have been rock-solid, with 99.9% uptime as promised.",
        author: "Jessica Williams",
        position: "CTO, RetailPlus",
        image: "https://i.pravatar.cc/150?img=4",
      },
      {
        quote:
          "Outstanding service and technical expertise. They delivered our project ahead of schedule and exceeded all expectations.",
        author: "David Miller",
        position: "CEO, InnovateCo",
        image: "https://i.pravatar.cc/150?img=5",
      },
      {
        quote:
          "Their team's attention to detail and commitment to quality is remarkable. Best tech partner we've ever worked with!",
        author: "Emma Thompson",
        position: "Product Manager, CloudSys",
        image: "https://i.pravatar.cc/150?img=6",
      },
    ],
  },
  id: {
    title: "Apa Kata Klien Kami",
    subtitle:
      "Feedback nyata dari orang-orang yang telah bekerja sama dengan kami",
    testimonials: [
      {
        quote:
          "Mereka tidak hanya membangun website untuk kami, tapi juga kehadiran digital yang mengubah bisnis kami. Tim sangat responsif, kreatif, dan menyenangkan untuk diajak bekerja sama!",
        author: "Sarah Johnson",
        position: "Direktur Marketing, TechStart",
        image: "https://i.pravatar.cc/150?img=1",
      },
      {
        quote:
          "Peluncuran aplikasi kami sangat sukses berkat dukungan pengembangan dan pemasaran dari tim ini. Mereka memahami visi kami dan membuatnya lebih baik dari yang kami bayangkan!",
        author: "Michael Chen",
        position: "Pendiri, HeadTrack",
        image: "https://i.pravatar.cc/150?img=3",
      },
      {
        quote:
          "Layanan konsultasi yang kami terima membantu kami menavigasi transformasi digital yang kompleks. Solusi hosting mereka sangat andal, dengan uptime 99,9% sesuai janji.",
        author: "Jessica Williams",
        position: "CTO, RetailPlus",
        image: "https://i.pravatar.cc/150?img=4",
      },
      {
        quote:
          "Layanan dan keahlian teknis yang luar biasa. Mereka menyelesaikan proyek kami lebih cepat dari jadwal dan melampaui semua harapan.",
        author: "David Miller",
        position: "CEO, InnovateCo",
        image: "https://i.pravatar.cc/150?img=5",
      },
      {
        quote:
          "Perhatian tim mereka terhadap detail dan komitmen terhadap kualitas sangat luar biasa. Partner teknologi terbaik yang pernah kami ajak kerja sama!",
        author: "Emma Thompson",
        position: "Manajer Produk, CloudSys",
        image: "https://i.pravatar.cc/150?img=6",
      },
    ],
  },
  jv: {
    title: "Opo Sing Diomongke Pelanggan",
    subtitle:
      "Feedback asli soko wong-wong sing wis kerjo bareng karo awake dewe",
    testimonials: [
      {
        quote:
          "Ora mung mbangun website, nanging uga mbangun presence digital sing ngowahi bisnis kita. Tim responsif, kreatif, lan nyenengke kanggo diajak kerjo bareng!",
        author: "Sarah Johnson",
        position: "Direktur Marketing, TechStart",
        image: "https://i.pravatar.cc/150?img=1",
      },
      {
        quote:
          "Launch aplikasi kita sukses banget mergo support pengembangan lan pemasaran soko tim iki. Dheweke paham visi kita lan nggawe luwih apik soko sing kita bayangke!",
        author: "Michael Chen",
        position: "Pendiri, HeadTrack",
        image: "https://i.pravatar.cc/150?img=3",
      },
      {
        quote:
          "Layanan konsultasi sing kita tampa ngewangi kita nglewati transformasi digital sing kompleks. Solusi hosting dheweke kuwat tenan, kanthi uptime 99.9% kaya sing dijanjekke.",
        author: "Jessica Williams",
        position: "CTO, RetailPlus",
        image: "https://i.pravatar.cc/150?img=4",
      },
      {
        quote:
          "Layanan lan keahlian teknis sing apik tenan. Dheweke ngrampungke proyek luwih cepet soko jadwal lan ngluwihi kabeh ekspektasi.",
        author: "David Miller",
        position: "CEO, InnovateCo",
        image: "https://i.pravatar.cc/150?img=5",
      },
      {
        quote:
          "Perhatiane tim marang detail lan komitmen marang kualitas kuwi luwar biasa. Partner teknologi paling apik sing tau kerjo bareng karo awake dewe!",
        author: "Emma Thompson",
        position: "Manajer Produk, CloudSys",
        image: "https://i.pravatar.cc/150?img=6",
      },
    ],
  },
};

export default function ClientTestimonials() {
  const currentContent = content[languageSignal.value];
  const [activeIndices, setActiveIndices] = useState([0, 1, 2]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]);

  const rotateTestimonials = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    const allTestimonials = currentContent.testimonials;
    const unusedIndices = Array.from(Array(allTestimonials.length).keys())
      .filter((i) => !activeIndices.includes(i));

    const newRandomIndex =
      unusedIndices[Math.floor(Math.random() * unusedIndices.length)];
    const newIndices = [...activeIndices.slice(1), newRandomIndex];

    setTimeout(() => {
      setActiveIndices(newIndices);
      setIsTransitioning(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(rotateTestimonials, 5000); // Rotate every 5 seconds
    return () => clearInterval(interval);
  }, [activeIndices, isTransitioning]);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            {currentContent.title}
          </h2>
          <p className="text-gray-600">
            {currentContent.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activeIndices.map((testimonialIndex, index) => {
            const testimonial = currentContent.testimonials[testimonialIndex];
            return (
              <div
                key={testimonialIndex}
                ref={(el) => (testimonialRefs.current[index] = el)}
                className="testimonial-card bg-gray-50 p-6 rounded-lg hover:shadow-lg"
                style={{
                  opacity: isTransitioning ? 0 : 1,
                  transform: isTransitioning
                    ? "translateY(20px)"
                    : "translateY(0)",
                  transition: "all 0.5s ease",
                }}
              >
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-10 h-10 rounded-full mr-3 object-cover"
                  />
                  <div>
                    <p className="font-semibold text-primary">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
