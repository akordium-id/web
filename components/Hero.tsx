import { JSX } from "preact";

export default function Hero(): JSX.Element {
  return (
    <div class="bg-[#0f1419] min-h-screen flex items-center justify-center px-4 py-16">
      <div class="max-w-screen-xl mx-auto text-center">
        <div class="flex flex-col md:flex-row items-center justify-between gap-12">
          <div class="flex-1 text-left">
            <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
              Digital Transformation
              <span class="block text-[#3b82f6]">with AI Landscape</span>
            </h1>
            <p class="text-gray-400 text-lg mb-8">
              Transform your business with cutting-edge AI solutions and digital innovation
            </p>
            <button class="bg-[#3b82f6] text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors">
              Get Started
            </button>
          </div>
          <div class="flex-1 relative">
            <img
              src="/logo.svg"
              alt="Digital Transformation Illustration"
              class="w-full max-w-md mx-auto transform hover:scale-105 transition-transform duration-300"
              width="500"
              height="500"
            />
          </div>
        </div>
        <div class="mt-16 flex justify-center gap-8">
          <img src="/logo.svg" alt="Partner 1" class="h-8 opacity-50 hover:opacity-100 transition-opacity" />
          <img src="/logo.svg" alt="Partner 2" class="h-8 opacity-50 hover:opacity-100 transition-opacity" />
          <img src="/logo.svg" alt="Partner 3" class="h-8 opacity-50 hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </div>
  );
}