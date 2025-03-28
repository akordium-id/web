import { ComponentChildren } from "preact";
import { SUPPORTED_LANGUAGES, translate } from "../utils/i18n.ts";
import { IS_BROWSER } from "$fresh/runtime.ts";
import Header from "./homepage/Header.tsx";

interface LayoutProps {
  children: ComponentChildren;
  lang: string;
  title?: string;
  description?: string;
  showHeader?: boolean;
  showFooter?: boolean;
  useCustomHeader?: boolean;
}

export default function Layout({
  children,
  lang,
  title,
  description,
  showHeader = true,
  showFooter = true,
  useCustomHeader = false,
}: LayoutProps) {
  // Mendapatkan path saat ini untuk language switcher
  const currentPath = IS_BROWSER ? globalThis.location.pathname : "";
  const pathWithoutLang = currentPath.substring(3) || "";

  return (
    <div class="min-h-screen flex flex-col">
      {showHeader && (
        useCustomHeader
          ? <Header lang={lang} />
          : (
            <header class="bg-white shadow-sm">
              <div class="container mx-auto px-4 py-4">
                <div class="flex justify-between items-center">
                  <div class="flex items-center space-x-4">
                    <a href={`/${lang}`} class="text-xl font-bold">Akordium</a>
                    <nav class="hidden md:flex space-x-4">
                      <a
                        href={`/${lang}`}
                        class="hover:text-blue-600 transition"
                      >
                        {translate("home", lang)}
                      </a>
                      <a
                        href={`/${lang}/about`}
                        class="hover:text-blue-600 transition"
                      >
                        {translate("about", lang)}
                      </a>
                      <a
                        href={`/${lang}/contact`}
                        class="hover:text-blue-600 transition"
                      >
                        {translate("contact", lang)}
                      </a>
                    </nav>
                  </div>

                  {/* Language switcher */}
                  <div class="flex space-x-2">
                    {SUPPORTED_LANGUAGES.map((language) => (
                      <a
                        href={`/${language}${pathWithoutLang}`}
                        class={`px-2 py-1 rounded ${
                          language === lang
                            ? "bg-blue-100 font-bold"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        {language.toUpperCase()}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </header>
          )
      )}

      <main class="flex-grow container mx-auto px-4 py-8">
        {title && <h1 class="text-3xl font-bold mb-6">{title}</h1>}
        {description && <p class="text-gray-600 mb-8">{description}</p>}
        {children}
      </main>

      {showFooter && (
        <footer class="bg-gray-100 py-6">
          <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row justify-between items-center">
              <div class="mb-4 md:mb-0">
                <p>
                  &copy; {new Date().getFullYear()} Akordium.{" "}
                  {translate("rights", lang)}
                </p>
              </div>
              <div class="flex space-x-4">
                <a href={`/${lang}/privacy`} class="hover:underline">
                  {translate("privacy", lang)}
                </a>
                <a href={`/${lang}/terms`} class="hover:underline">
                  {translate("terms", lang)}
                </a>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
