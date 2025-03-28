import { useSignal } from "@preact/signals";
import { setLanguage } from "@/utils/languageState.ts";
import { SUPPORTED_LANGUAGES } from "@/utils/i18n.ts";

interface LanguageDropdownProps {
  currentLang?: string;
}

export default function LanguageDropdown(
  { currentLang = "en" }: LanguageDropdownProps,
) {
  const isOpen = useSignal(false);

  const languages = {
    en: "EN",
    id: "ID",
    jw: "JW",
  };

  const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
  };

  const selectLanguage = (lang: string) => {
    // Update language state
    setLanguage(lang as "en" | "id" | "jw");

    // Redirect to the same page but with new language
    if (typeof globalThis !== "undefined" && globalThis.localStorage) {
      const currentPath = globalThis.location.pathname;
      const pathWithoutLang = currentPath.substring(3) || "";
      globalThis.location.href = `/${lang}${pathWithoutLang}`;
    }

    isOpen.value = false;
  };

  return (
    <div class="w-full">
      <button
        type="button"
        onClick={toggleDropdown}
        class="flex items-center gap-1 md:text-sm text-md font medium text-primary hover:text-secondary px-1 py-1 md:w-auto w-full"
      >
        {languages[currentLang as keyof typeof languages] || languages.en}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class={`transition-transform ${isOpen.value ? "rotate-180" : ""}`}
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      {isOpen.value && (
        <div class="md:absolute md:right-0 md:mt-2 md:w-40 md:bg-white md:border md:border-gray-200 md:rounded-md md:shadow-lg md:z-50 w-full">
          {SUPPORTED_LANGUAGES.map((code) => (
            <button
              type="button"
              key={code}
              onClick={() => selectLanguage(code)}
              class={`block text-primary md:text-sm text-md w-full text-left px-4 py-2 hover:bg-gray-100 hover:text-secondary ${
                currentLang === code ? "bg-tertiary/20 font-medium" : ""
              }`}
            >
              {languages[code as keyof typeof languages] || code.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
