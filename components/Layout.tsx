import { ComponentChildren } from "preact";
import Header from "./homepage/Header.tsx";
import Footer from "./homepage/Footer.tsx";

interface LayoutProps {
  children: ComponentChildren;
  lang: string;
  title?: string;
  description?: string;
  showHeader?: boolean;
  showFooter?: boolean;
}

export default function Layout({
  children,
  lang,
  title,
  description,
  showHeader = true,
  showFooter = true,
}: LayoutProps) {
  return (
    <div class="min-h-screen flex flex-col">
      {showHeader && <Header lang={lang} />}

      <main class="flex flex-col flex-grow min-h-screen">
        {title && <h1 class="text-3xl font-bold mb-6">{title}</h1>}
        {description && <p class="text-gray-600 mb-8">{description}</p>}
        {children}
      </main>

      {showFooter && <Footer lang={lang} />}
    </div>
  );
}
