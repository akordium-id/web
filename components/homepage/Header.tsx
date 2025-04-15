import { JSX } from "preact";
import Navbar from "./Navbar.tsx";
import Logo from "./Logo.tsx";

export default function Header(): JSX.Element {
  return (
    <header className="bg-white sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
}
