import { translate } from "@/utils/i18n.ts";

const WebIcon = () => (
  <svg
    class="w-12 h-12 text-primary mb-4"
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
);

const HostingIcon = () => (
  <svg
    class="w-12 h-12 text-primary mb-4"
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
);

export default function Services({ lang }: { lang: string }) {
  const services = [
    {
      title: translate("service_web_title", lang),
      description: translate("service_web_desc", lang),
      features: [
        translate("service_web_feature_1", lang),
        translate("service_web_feature_2", lang),
        translate("service_web_feature_3", lang),
      ],
      icon: <WebIcon />,
      learnMoreLink: "#webDevelopment",
    },
    {
      title: translate("service_hosting_title", lang),
      description: translate("service_hosting_desc", lang),
      features: [
        translate("service_hosting_feature_1", lang),
        translate("service_hosting_feature_2", lang),
        translate("service_hosting_feature_3", lang),
      ],
      icon: <HostingIcon />,
      learnMoreLink: "#hostingInfrastructure",
    },
  ];

  return (
    <section class="py-16 bg-base">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          {translate("services_title", lang)}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} class="bg-white p-8 rounded-lg shadow-lg">
              <div class="flex flex-col items-center md:items-start">
                {service.icon}
                <h3 class="text-2xl font-semibold text-primary mb-4">
                  {service.title}
                </h3>
              </div>
              <p class="text-gray-600 mb-6">{service.description}</p>
              <ul class="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    class="flex items-center text-gray-600"
                  >
                    <svg
                      class="w-5 h-5 text-primary mr-2"
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
                href={service.learnMoreLink}
                class="mt-4 px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
              >
                {translate("services_learn_more", lang)}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
