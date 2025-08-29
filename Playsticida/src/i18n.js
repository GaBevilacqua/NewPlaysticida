import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: "Welcome to Playsticida!",
        welcome2: "Discover the world of chemistry in a fun and interactive way",
        language: "Select your language",
        language2: "Playsticida is available in multiple languages",
        question: "What is Playsticida?",
        answer: "An innovative educational platform that transforms chemistry learning into a fun and engaging experience"
      }
    },
    es: {
      translation: {
        welcome: "¡Bienvenido a Playsticida!",
        welcome2: "Descubre el mundo de la química de manera divertida e interactiva",
        language: "Selecciona tu idioma",
        language2: "Playsticida está disponible en varios idiomas",
        question: "¿Qué es Playsticida?",
        answer: "Una plataforma educativa innovadora que transforma el aprendizaje de la química en una experiencia divertida y atractiva"
      }
    },
    it: {
      translation: {
        welcome: "Benvenuto su Playsticida!",
        welcome2: "Scopri il mondo della chimica in modo divertente e interattivo",
        language: "Seleziona la tua lingua",
        language2: "Playsticida è disponibile in più lingue",
        question: "Cos'è Playsticida?",
        answer: "Una piattaforma educativa innovativa che trasforma l'apprendimento della chimica in un'esperienza divertente e coinvolgente"
      }
    },

    fr: {
      translation: {
        welcome: "Bienvenue sur Playsticida !",
        welcome2: "Découvrez le monde de la chimie de manière ludique et interactive",
        language: "Sélectionnez votre langue",
        language2: "Playsticida est disponible en plusieurs langues",
        question: "Qu'est-ce que Playsticida ?",
        answer: "Une plateforme éducative innovante qui transforme l'apprentissage de la chimie en une expérience amusante et captivante"
      }
    },
    pt: {
      translation: {
        welcome: "Bem-vindo ao Playsticida!",
        welcome2: " Descubra o mundo da química de forma divertida e interativa",
        language: "Selecione seu idioma",
        language2: "Playsticida está disponível em múltiplos idomas",
        question: "O que é o Playsticida",
        answer: "Uma plataforma educacional inovadora que transforma o aprendizado de química em uma experiência divertida e envolvente",
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
