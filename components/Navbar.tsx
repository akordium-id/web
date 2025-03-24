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
    <nav class="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div class="max-w-screen-xl mx-auto py-4 px-4 flex justify-between items-center">
        <div class="text-xl font-bold">Akordium</div>

        <NavbarMenu menuItems={menuItems} />
      </div>
    </nav>
  );
}
