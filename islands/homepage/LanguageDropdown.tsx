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
    <div className="w-full">
      <button
        type="button"
        onClick={toggleDropdown}
        className="flex items-center gap-1 md:text-sm text-md font medium text-primary hover:text-secondary px-1 py-1 md:w-auto w-full"
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
          className={`transition-transform ${isOpen.value ? "rotate-180" : ""}`}
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      {isOpen.value && (
        <div className="md:absolute md:right-0 md:mt-2 md:w-40 md:bg-white md:border md:border-gray-200 md:rounded-md md:shadow-lg md:z-50 w-full">
          {Object.entries(languages).map(([code, name]) => (
            <button
              type="button"
              key={code}
              onClick={() => selectLanguage(code as "en" | "id" | "jv")}
              className={`block text-primary md:text-sm text-md w-full text-left px-4 py-2 hover:bg-gray-100 hover:text-secondary ${
                languageSignal.value === code
                  ? "bg-tertiary/20 font-medium"
                  : ""
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
