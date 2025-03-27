import { useSignal } from "@preact/signals";
import { languageSignal, setLanguage } from "@/utils/languageState.ts";

export default function LanguageDropdown() {
  const isOpen = useSignal(false);

  const languages = {
    en: "EN",
    id: "ID",
    jv: "JW",
  };

  const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
  };

  const selectLanguage = (lang: "en" | "id" | "jv") => {
    setLanguage(lang);
    isOpen.value = false;
  };

  return (
    <div class="w-full">
      <button
        type="button"
        onClick={toggleDropdown}
        class="flex items-center gap-1 text-sm text-primary hover:text-secondary px-1 py-1 md:w-auto w-full"
      >
        {languages[languageSignal.value]}
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
          {Object.entries(languages).map(([code, name]) => (
            <button
              type="button"
              key={code}
              onClick={() => selectLanguage(code as "en" | "id" | "jv")}
              class={`block text-primary text-sm w-full text-left px-4 py-2 hover:bg-gray-100 hover:text-secondary ${
                languageSignal.value === code ? "bg-gray-50 font-medium" : ""
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
