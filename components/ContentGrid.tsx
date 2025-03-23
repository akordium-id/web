import { JSX } from "preact";

interface FeatureCard {
  title: string;
  description: string;
  imageUrl: string;
}

const features: FeatureCard[] = [
  {
    title: "Smart Tools for Your Needs",
    description:
      "Custom web apps, niche utilities, and reusable code templates to save time and resources",
    imageUrl: "/logo.svg",
  },
  {
    title: "Flexible Services",
    description:
      "Websites, apps, or digital marketing—choose one-time projects or hassle-free managed plans",
    imageUrl: "/logo.svg",
  },
  {
    title: "Quality You Can Trust",
    description:
      "Clean code, intuitive design, and responsive support—because your success matters",
    imageUrl: "/logo.svg",
  },
];

export default function ContentGrid(): JSX.Element {
  return (
    <div class="bg-white py-20 px-4">
      <div class="max-w-screen-xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-black text-center mb-6">
          Get Growing Businesses
        </h2>
        <p class="text-gray-400 text-center max-w-3xl mx-auto mb-12">
          At Akordium, we craft practical, modern digital tools designed to help
          small-to-medium businesses thrive—without the complexity or cost of
          enterprise systems.
        </p>
        <p class="text-xl text-black font-semibold text-center mb-8">
          ✨ What We Deliver:
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {features.map((feature) => (
            <div class="bg-[#0f1419] p-5 rounded-xl hover:transform hover:scale-105 transition-all duration-300 flex flex-col h-full">
              <img
                src={feature.imageUrl}
                alt={feature.title}
                class="w-full h-36 object-cover rounded-lg mb-4"
              />
              <h3 class="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p class="text-gray-400 text-sm flex-grow">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
