import { Signal } from "@preact/signals";

interface LanguageSwitcherProps {
  language: Signal<"en" | "id" | "jv">;
}

export default function LanguageSwitcher({ language }: LanguageSwitcherProps) {
  return (
    <>
      <button
        type="button"
        onClick={() => language.value = "en"}
        class={`px-2 py-1 rounded ${
          language.value === "en" ? "bg-gray-200" : "hover:bg-gray-100"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => language.value = "id"}
        class={`px-2 py-1 rounded ${
          language.value === "id" ? "bg-gray-200" : "hover:bg-gray-100"
        }`}
      >
        ID
      </button>
      <button
        type="button"
        onClick={() => language.value = "jv"}
        class={`px-2 py-1 rounded ${
          language.value === "jv" ? "bg-gray-200" : "hover:bg-gray-100"
        }`}
      >
        JV
      </button>
    </>
  );
}
