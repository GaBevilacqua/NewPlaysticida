import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: "Welcome to Playsticida!",
        about: "About us",
        play: "How to play"
      }
    },
    es: {
      translation: {
        welcome: "¡Bienvenido a Playsticida!",
        about: "Quiénes somos",
        play: "Cómo jugar"
      }
    },
    it: {
      translation: {
        welcome: "Benvenuto su Playsticida!",
        about: "Chi siamo",
        play: "Come giocare"
      }
    },
    pt: {
      translation: {
        welcome: "Bem-vindo ao Playsticida!",
        about: "Quem somos",
        play: "Como jogar"
      }
    }
  },
  lng: "pt", // idioma inicial
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
