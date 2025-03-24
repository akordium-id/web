import { JSX } from "preact";
import Navbar from "./Navbar.tsx";
import Logo from "./Logo.tsx";

export default function Header(): JSX.Element {
  return (
    <header class="bg-white sticky top-0 z-50">
      <div class="container mx-auto px-4 flex items-center justify-between">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
}
