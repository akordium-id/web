import { JSX } from "preact";
import NavbarMenu from "@/islands/homepage/NavbarMenu.tsx";
import { translate } from "@/utils/i18n.ts";

export default function Navbar({ lang = "en" }: { lang?: string }): JSX.Element {
  const menuItems = [
    { label: translate("services", lang), href: `/${lang}/services` },
    { label: translate("work", lang), href: `/${lang}/work` },
    { label: translate("blog", lang), href: `/${lang}/blog` },
    { label: translate("shop", lang), href: `/${lang}/shop` },
  ];

  return (
    <nav class="flex items-center">
      <NavbarMenu menuItems={menuItems} lang={lang} />
    </nav>
  );
}
