import { JSX } from "preact";
import Navbar from "./Navbar.tsx";
import Logo from "./Logo.tsx";

export default function Header({ lang = "en" }: { lang?: string }): JSX.Element {
  return (
    <header class="bg-white sticky top-0 z-50 border-b">
      <div class="container mx-auto px-4 h-16 flex items-center justify-between">
        <Logo lang={lang} />
        <Navbar lang={lang} />
      </div>
    </header>
  );
}
