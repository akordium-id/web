import NavigationBar from "./Navbar.tsx";

export default function Header() {
  return (
    <header class="mx-auto flex gap-3 items-center justify-between h-20 max-w-screen-2xl w-full sticky top-0 bg-primary z-50 backdrop-blur-sm">
      <div class="p-4 flex items-center">
        <Logo />
      </div>
      <NavigationBar />
    </header>
  );
}

export function Logo() {
  return (
    <a href="/" class="text-white font-bold text-xl py-1">
      <span className="flex items-center gap-1">
        <span className="text-secondary text-2xl">●</span> Akordium
      </span>
    </a>
  );
}
