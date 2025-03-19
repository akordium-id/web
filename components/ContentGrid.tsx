import { JSX } from "preact";

interface FeatureCard {
  title: string;
  description: string;
  imageUrl: string;
}

const features: FeatureCard[] = [
  {
    title: "AI-Powered Analytics",
    description: "Get deep insights into your business with our advanced AI analytics platform",
    imageUrl: "/logo.svg"
  },
  {
    title: "Smart Automation",
    description: "Streamline your workflows with intelligent automation solutions",
    imageUrl: "/logo.svg"
  },
  {
    title: "Digital Integration",
    description: "Seamlessly integrate AI into your existing digital infrastructure",
    imageUrl: "/logo.svg"
  }
];

export default function ContentGrid(): JSX.Element {
  return (
    <div class="bg-[#1a1f24] py-20 px-4">
      <div class="max-w-screen-xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Transforming Businesses with AI
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div class="bg-[#0f1419] p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
              <img
                src={feature.imageUrl}
                alt={feature.title}
                class="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 class="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p class="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}