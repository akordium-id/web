import { ComponentChildren } from "preact";
import Header from "./homepage/Header.tsx";
import Footer from "./homepage/Footer.tsx";

interface LayoutProps {
  children: ComponentChildren;
  title?: string;
  description?: string;
  withHero?: boolean;
}

export default function Layout({
  children,
  title = "Akordium",
  description = "Your digital partner for business growth and innovation",
  withHero = false,
}: LayoutProps) {
  return (
    <>
      <div class="flex flex-col min-h-screen">
        <Header />

        {withHero && (
          <div class="relative py-24 px-6 sm:px-8 lg:px-12 bg-primary">
            <div class="max-w-7xl mx-auto text-center">
              <h1 class="text-4xl md:text-5xl font-bold text-base mb-6">
                {title}
              </h1>
              <p class="text-xl text-base/70 max-w-3xl mx-auto">
                {description}
              </p>
            </div>
          </div>
        )}

        <main class="flex-grow bg-gradient-to-b from-gray-50 to-white">
          {children}
        </main>

        <Footer />
      </div>
    </>
  );
}
