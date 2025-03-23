import { JSX } from "preact";
import HeroContent from "../islands/HeroContent.tsx";
import LanguageDropdown from "../islands/LanguageDropdown.tsx";

export default function Hero(): JSX.Element {
  return (
    <div class="bg-white">
      <nav class="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
        <div class="max-w-screen-xl mx-auto py-4 px-4 flex justify-between items-center">
          <div class="text-xl font-bold">Akordium</div>
          <div class="flex gap-8 items-center">
            <a href="#" class="text-gray-600 hover:text-gray-900">About</a>
            <a href="#" class="text-gray-600 hover:text-gray-900">Shop</a>
            <a href="#" class="text-gray-600 hover:text-gray-900">Contact Us</a>
            <LanguageDropdown />
            <button
              type="button"
              class="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
            >
              Let's Talk!
            </button>
          </div>
        </div>
      </nav>

      <div class="max-w-screen-xl mx-auto pt-24 px-4">
        <div class="flex flex-col md:flex-row items-center justify-between gap-8 py-12">
          <div class="flex-1 text-left">
            <HeroContent />
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
