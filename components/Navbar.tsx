import { JSX } from "preact";
import NavbarMenu from "../islands/NavbarMenu.tsx";

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
    //* Header *//
    <header class="bg-primary sticky top-0 z-50">
      <div class="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" class="text-white font-bold text-xl py-1">
          <span className="flex items-center gap-1">
            <span className="text-secondary text-2xl">●</span> Akordium
          </span>
        </a>

        <nav class="hidden md:flex items-center space-x-8">
          <div class="max-w-screen-xl mx-auto py-4 px-4 flex justify-between items-center">
            <NavbarMenu menuItems={menuItems} />
          </div>
        </nav>
      </div>
    </header>
  );
}
