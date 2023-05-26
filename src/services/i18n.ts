import i18next from "i18next";
import { initReactI18next } from "react-i18next";
// "Inline" English and Persian translations.
// We can localize to any language and any number of languages.
import { getUserData } from "../utils/token";
const resources = {
  en: {
    translation: {
      app_name: "Grootbasket",
    },
  },
  fs: {
    translation: {
      app_name: "جروتباسكت",
    },
  },
};
i18next.use(initReactI18next).init({
  resources,
  lng: getUserData()?.language || "fs",
  interpolation: {
    escapeValue: false,
  },
  debug: true,
});
export default i18next;
