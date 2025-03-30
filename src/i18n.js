import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend) // Позволяет загружать JSON файлы
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    lng: "es",
    fallbackLng: "es",
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // Путь к JSON-файлам
    },
    ns: ["common", "claces-infantiles", "hero-data-all-sections", "nutrition-data", "personal-training-data"], // Названия файлов
    defaultNS: "common", // Пространство имен по умолчанию
    interpolation: { escapeValue: false },
  }).then(() => {
    i18n.addResourceBundle("es", "common", {
      personalTraining: "Entrenador Personal",
      clasesInfantiles: "Clases Infantiles",
      nutrition: "Nutrition",
      tarifas: "Tarifas",
    });
  });;

export default i18n;
