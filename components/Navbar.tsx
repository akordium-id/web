import { JSX } from "preact";
import LanguageDropdown from "../islands/LanguageDropdown.tsx";

export default function Navbar(): JSX.Element {
  return (
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
  );
}
