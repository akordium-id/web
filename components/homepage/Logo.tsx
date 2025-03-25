import { JSX } from "preact";

export default function Logo(): JSX.Element {
  return (
    <a href="/" class="text-primary font-bold text-xl py-1">
      <span className="flex items-center gap-1">
        <span className="text-secondary text-2xl">●</span> Akordium
      </span>
    </a>
  );
}
