import { JSX } from "preact";
import LanguageDropdown from "../islands/LanguageDropdown.tsx";

export default function Navbar(): JSX.Element {
  const menuItems = [
    { label: "Services", href: "#" },
    { label: "Work", href: "#" },
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Shop", href: "#" },
    { label: "Contact Us", href: "#" },
  ];

  return (
    <nav class="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div class="max-w-screen-xl mx-auto py-4 px-4 flex justify-between items-center">
        <div class="text-xl font-bold">Akordium</div>
        <div class="flex gap-8 items-center">
          {menuItems.map((item) => (
            <a href={item.href} class="text-gray-600 hover:text-gray-900">
              {item.label}
            </a>
          ))}
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
