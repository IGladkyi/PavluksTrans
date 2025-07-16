import i18n from "./i18next"

export const changeLanguage = (language: "en" | "ru" | "uk") => {
  i18n.changeLanguage(language)
}

export const getCurrentLanguage = () => {
  return i18n.language
}

export const setUkrainianLanguage = () => {
  changeLanguage("uk")
}

export const setEnglishLanguage = () => {
  changeLanguage("en")
}

export const setRussianLanguage = () => {
  changeLanguage("ru")
}
