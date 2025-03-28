import { JSX } from "preact";
import { defaultSEO } from "@/utils/seo.ts";

const name = defaultSEO?.title ?? "Akordium";

export default function Logo({ lang = "en" }: { lang?: string }): JSX.Element {
  return (
    <a href={`/${lang}`} class="text-primary font-bold text-xl py-1">
      <span className="flex items-center gap-1">
        <span className="text-secondary text-2xl">●</span>{" "}
        <span className="text-black">{name}</span>
      </span>
    </a>
  );
}
