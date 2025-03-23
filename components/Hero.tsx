import { JSX } from "preact";
import HeroContent from "../islands/HeroContent.tsx";

export default function Hero(): JSX.Element {
  return (
    <div class="bg-white">
      <div class="max-w-screen-xl mx-auto pt-24 px-4">
        <div class="flex flex-col md:flex-row items-center justify-between gap-8 py-12">
          <div class="flex-1 text-left">
            <div class="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm mb-6">
              Software Company
            </div>
            <HeroContent />
            <p class="text-gray-600 text-lg mb-8">
              Secure and reliable • Result-driven approach • Fast-paced
              development • Professional
            </p>
            <button
              type="button"
              class="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Book a Call
            </button>
          </div>
          <div class="flex-1">
            <img
              src="/logo.svg"
              alt="Digital Transformation Illustration"
              class="w-full max-w-md mx-auto transform hover:scale-105 transition-transform duration-300"
              width="500"
              height="500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
