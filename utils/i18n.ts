import { join } from "$std/path/mod.ts";

export type Locale = Record<string, string>;
export type Locales = Record<string, Locale>;

const localesDir = join(Deno.cwd(), "locales");
const loadedLocales: Locales = {};
const defaultLang = "id"; // Set your default language

// Function to load a specific locale file
async function loadLocale(lang: string): Promise<Locale> {
  if (loadedLocales[lang]) {
    return loadedLocales[lang];
  }
  try {
    const filePath = join(localesDir, `${lang}.json`);
    const fileContent = await Deno.readTextFile(filePath);
    const localeData = JSON.parse(fileContent);
    loadedLocales[lang] = localeData;
    return localeData;
  } catch (error) {
    console.warn(`Could not load locale for language: ${lang}`, error);
    // Fallback to default language if the requested one fails
    if (lang !== defaultLang) {
      return await loadLocale(defaultLang);
    }
    return {}; // Return empty object if default also fails
  }
}

// Pre-load default locale on startup (optional but good practice)
await loadLocale(defaultLang);

// Translation function
export function t(locale: Locale | undefined, key: string): string {
  if (!locale) {
    console.warn(`Locale not available for key: ${key}, falling back to default.`);
    locale = loadedLocales[defaultLang] || {};
  }
  return locale[key] || key; // Return the key itself if translation is missing
}

// Function to get the best matching language from Accept-Language header
export function getAcceptedLanguage(req: Request): string {
  const acceptLanguage = req.headers.get("accept-language");
  if (!acceptLanguage) {
    return defaultLang;
  }

  // Very basic parsing, prefers the first language listed
  const languages = acceptLanguage.split(",").map(lang => lang.split(";")[0].trim().toLowerCase());

  // Check if any preferred language is available (you might want a more robust check)
  for (const lang of languages) {
    // Simple check if locale file exists (improve this for production)
    // A better check would involve listing files in locales dir beforehand
    if (lang === 'en' || lang === 'id') { // Add other supported languages
      return lang;
    }
    // Check for base language (e.g., 'en' from 'en-US')
    const baseLang = lang.split('-')[0];
    if (baseLang === 'en' || baseLang === 'id') { // Add other supported languages
      return baseLang;
    }
  }

  return defaultLang; // Fallback to default
}

export { loadLocale, defaultLang };