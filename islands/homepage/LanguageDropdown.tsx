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
    setLanguage(lang); // Use the new function that also saves to localStorage
    isOpen.value = false;
  };

  return (
    <div class="relative">
      <button
        type="button"
        onClick={toggleDropdown}
        class="flex items-center gap-1 text-sm text-primary hover:text-secondary px-1 py-1"
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
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      {isOpen.value && (
        <div class="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50">
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
