import { ComponentChildren } from "preact";
import { translate, SUPPORTED_LANGUAGES } from "../utils/i18n.ts";

interface LayoutProps {
  children: ComponentChildren;
  lang: string;
}

export default function Layout({ children, lang }: LayoutProps) {
  return (
    <div>
      <header>
        <nav>
          <a href={`/${lang}`}>{translate("home", lang)}</a>
          <a href={`/${lang}/about`}>{translate("about", lang)}</a>
          <a href={`/${lang}/contact`}>{translate("contact", lang)}</a>
          
          {/* Language switcher */}
          <div>
            {SUPPORTED_LANGUAGES.map((language) => (
              <a 
                href={`/${language}${location.pathname.substring(3)}`} 
                style={{ marginRight: "10px", fontWeight: language === lang ? "bold" : "normal" }}
              >
                {language.toUpperCase()}
              </a>
            ))}
          </div>
        </nav>
      </header>
      <main>
        {children}
      </main>
      <footer>
        &copy; {new Date().getFullYear()}
      </footer>
    </div>
  );
}