import { JSX } from "preact";
import { useSignal } from "@preact/signals";
import LanguageDropdown from "./LanguageDropdown.tsx";

interface MenuItem {
  label: string;
  href: string;
}

interface NavbarMenuProps {
  menuItems: MenuItem[];
}

export default function NavbarMenu(
  { menuItems }: NavbarMenuProps,
): JSX.Element {
  const isMenuOpen = useSignal(false);

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        type="button"
        class="md:hidden flex items-center"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d={isMenuOpen.value
              ? "M6 18L18 6M6 6l12 12"
              : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Desktop menu */}
      <div class="hidden md:flex gap-8 items-center">
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

      {/* Mobile menu dropdown */}
      {isMenuOpen.value && (
        <div class="md:hidden px-4 py-2 bg-white shadow-md absolute top-full left-0 right-0">
          {menuItems.map((item) => (
            <a
              href={item.href}
              class="block py-2 text-gray-600 hover:text-gray-900 border-b border-gray-100"
              onClick={() => isMenuOpen.value = false}
            >
              {item.label}
            </a>
          ))}
          <div class="py-2">
            <LanguageDropdown />
          </div>
          <div class="py-3">
            <button
              type="button"
              class="w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
              onClick={() => isMenuOpen.value = false}
            >
              Let's Talk!
            </button>
          </div>
        </div>
      )}
    </>
  );
}
