import { JSX } from "preact";
import NavbarMenu from "@/islands/homepage/NavbarMenu.tsx";

export default function Navbar(): JSX.Element {
  const menuItems = [
    { label: "Services", href: "#" },
    { label: "Work", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Shop", href: "#" },
  ];

  return (
    <nav class="flex items-center">
      <NavbarMenu menuItems={menuItems} />
    </nav>
  );
}
