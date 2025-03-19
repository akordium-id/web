import { JSX } from "preact";

export default function Partners(): JSX.Element {
  return (
    <div class="bg-white py-16">
      <div class="max-w-screen-xl mx-auto px-4">
        <p class="text-gray-500 mb-4 text-center">Trusted by</p>
        <div class="flex justify-center gap-8">
          <img
            src="/logo.svg"
            alt="Partner 1"
            class="h-8 opacity-50 hover:opacity-100 transition-opacity"
          />
          <img
            src="/logo.svg"
            alt="Partner 2"
            class="h-8 opacity-50 hover:opacity-100 transition-opacity"
          />
          <img
            src="/logo.svg"
            alt="Partner 3"
            class="h-8 opacity-50 hover:opacity-100 transition-opacity"
          />
          <img
            src="/logo.svg"
            alt="Partner 4"
            class="h-8 opacity-50 hover:opacity-100 transition-opacity"
          />
          <img
            src="/logo.svg"
            alt="Partner 5"
            class="h-8 opacity-50 hover:opacity-100 transition-opacity"
          />
          <span class="text-gray-400">and more...</span>
        </div>
      </div>
    </div>
  );
}
