import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
// import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  // .use(I18nextBrowserLanguageDetector)   с включенным все ломается ??? i18next-browser-languagedetector (6.0) – Official plugin for auto-detecting the user’s language
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: 'en',
     debug: true,

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;