import enTranslations from "../i18n/en.ts";
import idTranslations from "../i18n/id.ts";

export const DEFAULT_LANGUAGE = "en";
export const SUPPORTED_LANGUAGES = ["en", "id"];

const translations: Record<string, Record<string, string>> = {
  en: enTranslations,
  id: idTranslations,
};

export function translate(key: string, lang: string = DEFAULT_LANGUAGE): string {
  const language = SUPPORTED_LANGUAGES.includes(lang) ? lang : DEFAULT_LANGUAGE;
  return translations[language][key] || translations[DEFAULT_LANGUAGE][key] || key;
}

export function getLanguageFromURL(url: URL): string {
  const [, maybeLocale] = url.pathname.split("/");
  return SUPPORTED_LANGUAGES.includes(maybeLocale) ? maybeLocale : DEFAULT_LANGUAGE;
}