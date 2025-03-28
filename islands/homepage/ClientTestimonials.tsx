import { useEffect, useRef, useState } from "preact/hooks";
import { translate } from "@/utils/i18n.ts";

const profilePics = [
  "https://i.pravatar.cc/150?img=1",
  "https://i.pravatar.cc/150?img=3",
  "https://i.pravatar.cc/150?img=4",
  "https://i.pravatar.cc/150?img=5",
  "https://i.pravatar.cc/150?img=6",
];

export default function ClientTestimonials({ lang }: { lang: string }) {
  const testimonials = [
    {
      quote: translate("testimonial1_quote", lang),
      author: translate("testimonial1_author", lang),
      position: translate("testimonial1_position", lang),
      image: profilePics[0],
    },
    {
      quote: translate("testimonial2_quote", lang),
      author: translate("testimonial2_author", lang),
      position: translate("testimonial2_position", lang),
      image: profilePics[1],
    },
    {
      quote: translate("testimonial3_quote", lang),
      author: translate("testimonial3_author", lang),
      position: translate("testimonial3_position", lang),
      image: profilePics[2],
    },
    {
      quote: translate("testimonial4_quote", lang),
      author: translate("testimonial4_author", lang),
      position: translate("testimonial4_position", lang),
      image: profilePics[3],
    },
    {
      quote: translate("testimonial5_quote", lang),
      author: translate("testimonial5_author", lang),
      position: translate("testimonial5_position", lang),
      image: profilePics[4],
    },
  ];

  const [activeIndices, setActiveIndices] = useState([0, 1, 2]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]);

  const rotateTestimonials = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    const allTestimonials = testimonials;
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
            {translate("testimonials_title", lang)}
          </h2>
          <p className="text-gray-600">
            {translate("testimonials_subtitle", lang)}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activeIndices.map((testimonialIndex, index) => {
            const testimonial = testimonials[testimonialIndex];
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
