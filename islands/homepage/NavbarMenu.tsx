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
        className="flex items-center p-2 rounded-lg hover:bg-base/80 md:hidden"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-primary"
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
      <div className="hidden md:flex items-center gap-6">
        {menuItems.map((item) => (
          <a
            href={item.href}
            className="text-primary text-sm font-medium hover:text-secondary transition-colors"
          >
            {item.label}
          </a>
        ))}
        <div className="relative">
          <LanguageDropdown />
        </div>
        <button
          type="button"
          onClick={() => globalThis.location.href = "/contact"}
          className="bg-tertiary text-base text-sm font-medium px-5 py-2 rounded-full hover:bg-tertiary-light transition-colors"
        >
          Let's Talk
        </button>
      </div>

      {/* Mobile menu dropdown */}
      <div
        className={`fixed top-0 right-0 left-0 z-50 md:hidden 
          bg-gradient-to-b from-base to-gray-100 
          transform border-b border-tertiary ${
          isMenuOpen.value ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-200 ease-in-out`}
      >
        <div className="flex items-center justify-between p-4 border-b border-secondary/20">
          <span className="text-lg font-semibold text-primary">Menu</span>
          <button
            type="button"
            className="p-2 rounded-lg hover:bg-gray-100"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="p-4 space-y-4">
          {menuItems.map((item) => (
            <a
              href={item.href}
              className="block py-2 text-primary hover:text-secondary transition-colors text-lg"
              onClick={toggleMenu}
            >
              {item.label}
            </a>
          ))}
          <div className="py-2 border-t border-secondary/20">
            <LanguageDropdown />
          </div>
          <button
            type="button"
            onClick={() => {
              toggleMenu();
              globalThis.location.href = "/contact";
            }}
            className="bg-tertiary text-base px-4 py-3 rounded-full hover:bg-tertiary-light transition-colors text-lg font-medium"
          >
            Let's Talk
          </button>
        </div>
      </div>
    </>
  );
}
