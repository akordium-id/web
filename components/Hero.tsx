import { JSX } from "preact";

export default function Hero(): JSX.Element {
  return (
    <div class="bg-white min-h-screen">
      <nav class="fixed top-0 left-0 right-0 bg-white z-50 py-4 px-6 flex justify-between items-center">
        <div class="text-xl font-bold">Appledore Dev</div>
        <div class="flex gap-8 items-center">
          <a href="#" class="text-gray-600 hover:text-gray-900">About</a>
          <a href="#" class="text-gray-600 hover:text-gray-900">Bookshelf</a>
          <a href="#" class="text-gray-600 hover:text-gray-900">Academy</a>
          <button class="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
            Let's Talk!
          </button>
        </div>
      </nav>

      <div class="max-w-screen-xl mx-auto pt-24 px-4">
        <div class="flex flex-col md:flex-row items-center justify-between gap-12 py-16">
          <div class="flex flex-col md:flex-row items-center justify-between gap-12">
            <div class="flex-1 text-left">
              <div class="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm mb-6">
                Software Company
              </div>
              <h1 class="text-4xl md:text-6xl font-bold text-black mb-6">
                Digital Transformation
                <span class="block">with AI Landscape</span>
              </h1>
              <p class="text-gray-600 text-lg mb-8">
                Secure and reliable • Result-driven approach • Fast-paced
                development • Professional
              </p>
              <button class="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                Book a Call
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
        </div>
      </div>
    </div>
  );
}
