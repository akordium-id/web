import { signal } from "@preact/signals";

// Function to get the initial language from localStorage or default to "en"
function getInitialLanguage(): "en" | "id" | "jv" {
  // Only access localStorage in the browser environment
  if (typeof globalThis !== "undefined" && globalThis.localStorage) {
    const savedLanguage = localStorage.getItem("preferredLanguage") as "en" | "id" | "jv";
    if (savedLanguage && ["en", "id", "jv"].includes(savedLanguage)) {
      return savedLanguage;
    }
  }
  return "en"; // Default to English if no valid language is found
}

export const languageSignal = signal<"en" | "id" | "jv">(getInitialLanguage());

// Function to update language and save to localStorage
export function setLanguage(lang: "en" | "id" | "jv") {
  languageSignal.value = lang;
  // Only access localStorage in the browser environment
  if (typeof globalThis !== "undefined" && globalThis.localStorage) {
    localStorage.setItem("preferredLanguage", lang);
  }
}