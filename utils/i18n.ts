import enTranslations from "../i18n/en.ts";
import idTranslations from "../i18n/id.ts";
import jwTranslations from "../i18n/jw.ts";
import { IS_BROWSER } from "$fresh/runtime.ts";

export const DEFAULT_LANGUAGE = "en";
export const SUPPORTED_LANGUAGES = ["en", "id", "jw"];

const translations: Record<string, Record<string, string>> = {
  en: enTranslations,
  id: idTranslations,
  jw: jwTranslations,
};

// Get saved language preference from localStorage
export function getSavedLanguage(): string {
  if (IS_BROWSER) {
    const saved = localStorage.getItem("preferredLanguage");
    if (saved && SUPPORTED_LANGUAGES.includes(saved)) {
      return saved;
    }
  }
  return DEFAULT_LANGUAGE;
}

// Save language preference to localStorage
function saveLanguagePreference(lang: string) {
  if (IS_BROWSER) {
    localStorage.setItem("preferredLanguage", lang);
  }
}

export function translate(key: string, lang: string = DEFAULT_LANGUAGE): string {
  const language = SUPPORTED_LANGUAGES.includes(lang) ? lang : DEFAULT_LANGUAGE;
  return translations[language][key] || translations[DEFAULT_LANGUAGE][key] || key;
}

export function getLanguageFromURL(url: URL): string {
  const [, maybeLocale] = url.pathname.split("/");
  const urlLang = SUPPORTED_LANGUAGES.includes(maybeLocale) ? maybeLocale : getSavedLanguage();
  saveLanguagePreference(urlLang);
  return urlLang;
}