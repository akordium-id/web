import { useEffect, useState } from "preact/hooks";
import { languageSignal } from "@/utils/languageState.ts";
import { translate } from "@/utils/i18n.ts";

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

export default function StatsCount({ lang }: { lang: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const stats = [
    {
      value: "10",
      label: translate("stats_projects_delivered", lang),
    },
    {
      value: "3+",
      label: translate("stats_years_experience", lang),
    },
    {
      value: "90%",
      label: translate("stats_client_satisfaction", lang),
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
      class="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto"
    >
      {stats.map((stat, index) => (
        <div key={index} class="text-center p-4">
          <h3
            class={`text-3xl md:text-4xl font-bold text-primary transition-all duration-1000 ${
              isVisible
                ? "opacity-100 transform-none"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            {stat.value}
          </h3>
          <p
            class={`text-gray-600 text-sm transition-all duration-1000 ${
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
