import { useEffect, useState } from "preact/hooks";
import { languageSignal } from "@/utils/languageState.ts";

const translations = {
  en: {
    projectsDelivered: "Projects Delivered",
    yearsExperience: "Years Experience",
    clientSatisfaction: "Client Satisfaction",
  },
  id: {
    projectsDelivered: "Proyek Terselesaikan",
    yearsExperience: "Tahun Pengalaman",
    clientSatisfaction: "Kepuasan Klien",
  },
  jv: {
    projectsDelivered: "Proyek Wes Mari",
    yearsExperience: "Taun Pengalaman",
    clientSatisfaction: "Kepuasan Langganan",
  },
};

export default function StatsCount() {
  const [isVisible, setIsVisible] = useState(false);
  const stats = [
    {
      value: "10",
      label: translations[languageSignal.value].projectsDelivered,
    },
    {
      value: "3+",
      label: translations[languageSignal.value].yearsExperience,
    },
    {
      value: "90%",
      label: translations[languageSignal.value].clientSatisfaction,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    const element = document.getElementById("stats-grid");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div
      id="stats-grid"
      className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto"
    >
      {stats.map((stat, index) => (
        <div key={index} className="text-center p-4">
          <h3
            className={`text-3xl md:text-4xl font-bold text-primary transition-all duration-1000 ${
              isVisible
                ? "opacity-100 transform-none"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            {stat.value}
          </h3>
          <p
            className={`text-gray-600 text-sm transition-all duration-1000 ${
              isVisible
                ? "opacity-100 transform-none"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: `${index * 200 + 100}ms` }}
          >
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
