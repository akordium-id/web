import { PageProps } from "$fresh/server.ts";
import { translate, SUPPORTED_LANGUAGES } from "../../utils/i18n.ts";

export default function Home(props: PageProps) {
  const { lang } = props.params;
  
  // Validasi bahasa yang didukung
  if (!SUPPORTED_LANGUAGES.includes(lang)) {
    return <div>Language not supported</div>;
  }
  
  return (
    <div>
      <h1>{translate("welcome", lang)}</h1>
      <p>{translate("about", lang)}</p>
      <p>{translate("contact", lang)}</p>
      
      {/* Language switcher */}
      <div>
        {SUPPORTED_LANGUAGES.map((language) => (
          <a 
            href={`/${language}`} 
            style={{ marginRight: "10px", fontWeight: language === lang ? "bold" : "normal" }}
          >
            {language.toUpperCase()}
          </a>
        ))}
      </div>
    </div>
  );
}