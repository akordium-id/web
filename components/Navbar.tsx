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
    <nav class="hidden md:flex items-center space-x-8">
      <div class="max-w-screen-xl mx-auto py-4 px-4 flex justify-between items-center">
        <NavbarMenu menuItems={menuItems} />
      </div>
    </nav>
  );
}
