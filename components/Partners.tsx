import { JSX } from "preact";

export default function Partners(): JSX.Element {
  return (
    <div class="bg-[#1a1f24] py-12">
      <div class="max-w-screen-xl mx-auto px-4">
        <p class="text-gray-400 mb-4 text-center">Trusted by</p>
        <div class="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          <img
            src="/logo.svg"
            alt="Partner 1"
            class="h-6 opacity-40 hover:opacity-100 transition-opacity"
          />
          <img
            src="/logo.svg"
            alt="Partner 2"
            class="h-6 opacity-40 hover:opacity-100 transition-opacity"
          />
          <img
            src="/logo.svg"
            alt="Partner 3"
            class="h-6 opacity-40 hover:opacity-100 transition-opacity"
          />
          <img
            src="/logo.svg"
            alt="Partner 4"
            class="h-6 opacity-40 hover:opacity-100 transition-opacity"
          />
          <img
            src="/logo.svg"
            alt="Partner 5"
            class="h-6 opacity-40 hover:opacity-100 transition-opacity"
          />
          <span class="text-gray-500 text-sm">and more...</span>
        </div>
      </div>
    </div>
  );
}
