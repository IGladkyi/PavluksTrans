import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import { en, ru, uk } from "./translations"

const resources = {
  en: {
    translation: en,
  },
  uk: {
    translation: uk,
  },
  ru: {
    translation: ru,
  },
}

i18n.use(initReactI18next).init({
  compatibilityJSON: "v4",
  resources,
  fallbackLng: "uk", // Changed from "en" to "uk"
  lng: "uk", // Set Ukrainian as default language
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
