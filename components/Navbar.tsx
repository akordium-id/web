import { JSX } from "preact";

export default function Navbar(): JSX.Element {
  return (
    <nav class="fixed top-0 left-0 right-0 bg-white z-50">
      <div class="max-w-screen-xl mx-auto py-4 px-4 flex justify-between items-center">
        <div class="text-xl font-bold">Akordium</div>
        <div class="flex gap-8 items-center">
          <a href="#" class="text-gray-600 hover:text-gray-900">About</a>
          <a href="#" class="text-gray-600 hover:text-gray-900">Bookshelf</a>
          <a href="#" class="text-gray-600 hover:text-gray-900">Academy</a>
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
