import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: "Welcome to Playsticida!",
        welcome2: "Discover the world of chemistry in a fun and interactive way",
        language: "Select your language",
        about:"About",
        language2: "Playsticida is available in multiple languages",
        question: "What is Playsticida?",
        answer: "An innovative educational platform that transforms chemistry learning into a fun and engaging experience",
        sobre0: "Learn Chemistry in a Fun Way",
        sobre1: "Playsticida is an educational game developed to help students of all levels understand the fundamental concepts of chemistry through a playful and interactive approach.",
        sobre2: "By combining gamification elements with quality educational content, our platform makes the learning process more effective and enjoyable.",
        sobre3: "Developed by education specialists",
        sobre4: "Aligned with curricular guidelines",
        sobre5: "Completely free and accessible",
        tablecion1:"Experiment",
        tablecion2:"Gamification",
        tablecion3:"Content",
        tablecion4:"Biology",
        RE1:"Gamification is the way.",
        RE2:"Get to know our type of game quickly.",
        D1:"Important information ",
        D2:"Regarding the game",
        JA1: "Learning through fun",
        JA2: "Play now",
        JA3: "Come discover the Playsticida game and enhance your learning in the world of Chemistry in a fun and interactive way.",
        JA4: "Our educational game was developed to help you understand complex concepts through engaging challenges and captivating gameplay.",
        JA5: "Play Now",
        FAQ1: "Frequently Asked Questions",
        FAQ2: "Get your questions about Playsticida answered",
        FAQ3: "Is Playsticida really free?",
        FAQ4: "Yes, our platform is completely free for all users. We believe quality education should be accessible to everyone.",
        FAQ5: "What age group is the game recommended for?",
        FAQ6: "Playsticida was developed for all ages, but especially for people studying toxicology and pesticides.",
        FAQ7: "Do I need to install any software?",
        FAQ8: "No, our web version requires no installation. Simply access it through your browser. We also have apps available for mobile devices.",
        FAQ9: "How can I use Playsticida in the classroom?",
        FAQ10: "Through laboratory rooms, running on a single PC for up to 8 people.",
        stats: {
          copyright: "CC BY_NC_SA 4.0 License",
          university: "University",
          releaseYear: "Release year", 
          lastUpdate: "Last update"
        },
        resources: {
          periodicTable: {
            title: "Interactive Periodic Table",
            description: "Explore chemical elements in a dynamic and interactive way."
          },
          videoLessons: {
            title: "Exclusive Video Lessons",
            description: "Access video content produced by chemistry experts."
          },
          reactionSimulator: {
            title: "Reaction Simulator", 
            description: "Experiment with chemical combinations virtually and safely."
          },
          quiz: {
            title: "Review Quiz",
            description: "Test your knowledge with our interactive quizzes."
          }
        },

       
        testimonials: {
          flippity: {
            name: "Flippity",
            text: "Platform where the game is hosted, any problem with the platform is not directly a problem with the game itself."
          },
          pcs: {
            name: "Best for PCs",
            text: "The game can be played on any platform, but can be better explored on Computers or large tablets."
          },
          doubts: {
            name: "Doubts and suggestions", 
            text: "Any questions or suggestions can be sent to us by email."
          }
        },


         // Contato

        "contact": "Contact",
        "FA0": "Faculty of Science and Technology",
        "FA1": "Chat with Prof. Dr. Maurício Araújo",
        "HF0": "Opening Hours",
        "HF1": "Monday to Friday:",
        "HF2": "Saturday",
        "HF3": "Sunday:",
        "HF4": "Closed",
        "LOC": "Location",
        CRS: "Social Media",

        // Regras
        "rules": "Rules",
        "RI0": "Learn the rules of Playsticida, an educational game about pesticides and sustainable agriculture",
        "OB0": "Study Target",
        "OB1": "Game Objective",
        "OB2": "The game's main objective is to make players aware of the benefits and harms of pesticides, encouraging sustainable agriculture.",
        "OB3": "Players (farmers) compete in teams of up to 8 participants to achieve the highest productivity on their farms, learning about the correct use of pesticides.",
        "OB4": "Play Now",
        "CJ0": "Game Components",
        "CJ1": "Learn about the elements that make up Playsticida and their functions",
        "CJ2": "Dice",
        "CJ3": "Three dice with specific functions",
        "CJ4": "Dice Types",
        "CJ5": "Multicolored dice:",
        "CJ6": "Toxicological classes (I, II, III, IV) + 2 wildcards",
        "CJ7": "White dice:",
        "CJ8": "Usage classification (herbicide, insecticide, fungicide, etc.)",
        "CJ9": "White dice:",
        "CJ10": "Chemical classification (Organochlorine, Organophosphate, etc.)",
        "CJ11": "Board",
        "CJ12": "Board Structure",
        "CJ13": "The board represents various activities that use pesticides (agricultural crops, livestock, etc.). It includes chance/setback spaces with consequences such as:",
        "CJ14": "Excessive pesticide use caused contamination of the stream near your property, go back 10 spaces.",
        "CJ15": "Cards",
        "CJ16": "Four different types",
        "CJ17": "Card Types",
        "CJ18": "Pesticide information:",
        "CJ19": "Details about products",
        "CJ20": "Luck/Reverse:",
        "CJ21": "Random events with consequences",
        "CJ22": "Bonus cards:",
        "CJ23": "Additional points (5, 10 or 15 Gifts)",
        "CJ24": "Penalty cards:",
        "CJ25": "Point loss (3, 5 or 7 Gifts)",
        "RJ0": "Game Rules",
        "RJ1": "Understand how to play and the mechanics that make Playsticida an educational and fun experience",
        "RJ2": "Preparation",
        "RJ3": "Initial game setup",
        "RJ4": "Initial Setup",
        "RJ5": "Card organization:",
        "RJ6": "Before the game starts, the cards have already been automatically shuffled.",
        "RJ7": "Farmer order:",
        "RJ8": "Each member rolls the white dice. The one with the highest value starts the game and receives 5 Gifts.",
        "RJ9": "Sequence:",
        "RJ10": "The next player will be the one in clockwise sequence from the first farmer.",
        "RJ11": "Dynamics",
        "RJ12": "How the game works",
        "RJ13": "Game Dynamics",
        "RJ14": "Once the farmer order is established, the 3 dice are rolled, and then a pesticide card is drawn.",
        "RJ15": "3 matches:",
        "RJ16": "Wins 15 Gifts",
        "RJ17": "2 matches:",
        "RJ18": "Wins 10 Gifts",
        "RJ19": "1 match:",
        "RJ20": "Wins 5 Gifts",
        "RJ21": "No matches:",
        "RJ22": "Loses 5 Gifts or goes back 2 spaces",
        "RJ23": "Specials",
        "RJ24": "Bonus and penalty cards",
        "RJ25": "Special Cards",
        "RJ26": "Bonus cards:",
        "RJ27": "Whenever a farmer is on a crop space and draws a card for an appropriate pesticide, they must take a bonus card of 5, 10 or 15 Gifts.",
        "RJ28": "Penalty cards:",
        "RJ29": "Whenever a farmer is required to draw a penalty card, they must be penalized 3, 5 or 7 Gifts for incorrect pesticide application.",
        "RJ30": "Attention:",
        "RJ31": "Bonus and penalty cards share the same deck.",
        "RJ32": "Chance/Setback",
        "RJ33": "Random events",
        "RJ34": "Chance or Setback",
        "RJ35": "The farmer who lands on a 'Chance/Setback' space must draw a card from the pile to find out if they will be rewarded or penalized.",
        "RJ36": "If the multicolored dice shows a wildcard, choose 'Chance/Setback' card number 1. If no wildcard is present, choose the card whose number corresponds to the sum of the two white dice.",
        "RJ37": "End",
        "RJ38": "Game ending",
        "RJ39": "Game End and Scoring",
        "RJ40": "Arrival:",
        "RJ41": "The first farmer to reach the end receives 30 Gifts.",
        "RJ42": "Scoring:",
        "RJ43": "All farmers will have their Gifts counted, even those who haven't returned to their farm.",
        "RJ44": "Tiebreaker:",
        "RJ45": "In case of a tie, all toxicological classes are added to the Gifts.",
        "RJ46": "Winner:",
        "RJ47": "The farmer with the highest score wins.",
        "CA0": "Ready to play?",
        "CA1": "Try Playsticida and learn about pesticides and sustainable agriculture in a fun way",
        "CA2": "Learning through fun",
        "CA3": "Start right now",
        "CA4": " Access the online game and start learning about pesticides in an interactive and fun way.",
        "CA5": "Play Now",
        "CA6": "Credits",
        "CA7": "Meet the team behind the development of Playsticida",
        "CA8": " Playsticida conceived by Marcelo de Freitas Lima, with contributions from:",
        "CA9": "Licensed under CC BY-NC-SA 4.0. To view a copy of this license, visit{' '}",
        "SO0": "Our Purpose",
        "SO1": "Playsticida focuses on the playful environment for teaching, but without losing the technical and scientific aspect.",
        "SO2": "The purpose is to apply knowledge in practice, but without leaving the classroom, as a teaching complement.",
        "SO3": "Development",
        "SO4": "Made by students and teachers from diverse backgrounds, to meet the need for virtual and accessible learning.",
        "SO5": "If you wish, feel free to read our",
        "IMG01": "img/Agro-Cult-01 (EN).png",
        "IMG02": "img/SR-EN.png",
        "IMG03": "img/Bonus-EN.png",
 


        //Header
        navLinks:{
          sobre: {
            name: "About",
          },
          contato:{
            name: "Contact",
          },
          regras:{
            name:"Rules",
          }
        },
        PLAYURL:"https://www.flippity.net/v2/bg.php?k=e/2PACX-1vTFYzxu-fNFjKKhBsmIygkN1F97tcYx-G65WlgO7h3jSHggqiJ2xGHcNoG1tgHV_YQlgPeuF4KjZ1-6",

        //Footer

        pageLinks:{
        como_jogar: {
          name: "How to Play",
          href: "pdf/Regras-EN.pdf",
        },
        sobre_nos:{
          name: "About Us",
        },
        regras:{
          name: "Rules",
        }
      },

      FRASE: "Transforming chemistry learning into a fun and engaging experience for everyone.",
      CONT: "Contact",
      NAV: "Navigation",
      DIR: "Playsticida. All rights reserved.",
      ART:"Article",


        

      }
    },
    es: {
      translation: {
        welcome: "¡Bienvenido a Playsticida!",
        welcome2: "Descubre el mundo de la química de manera divertida e interactiva",
        language: "Selecciona tu idioma",
        language2: "Playsticida está disponible en varios idiomas",
        question: "¿Qué es Playsticida?",
        about:"Acerca de Nosotros",
        answer: "Una plataforma educativa innovadora que transforma el aprendizaje de la química en una experiencia divertida y atractiva",
        sobre0: "Impara la Chimica in Modo Divertente",
        sobre1: "Playsticida es un juego educativo desarrollado para ayudar a estudiantes de todos los niveles a comprender los conceptos fundamentales de la química mediante un enfoque lúdico e interactivo.",
        sobre2: "Combinando elementos de gamificación con contenido educativo de calidad, nuestra plataforma hace que el proceso de aprendizaje sea más efectivo y agradable.",
        sobre3: "Desarrollado por especialistas en educación",
        sobre4: "Alineado con las directrices curriculares",
        sobre5: "Totalmente gratuito y accesible",
        tablecion1:"Experimento",
        tablecion2:"Gamificatíon",
        tablecion3:"Contenido",
        tablecion4:"Biología",
        RE1:"La gamificación es el camino.",
        RE2:"Conoce nuestro tipo de juego de manera rápida.",
        D1:"Información importante",
        D2:"Sobre el juego",
        JA1: "Aprendizaje a través de la diversión",
        JA2: "Juega ahora",
        JA3: "Ven a conocer el juego Playsticida y aumenta tu aprendizaje en el mundo de la Química de forma divertida e interactiva.",
        JA4: "Nuestro juego educativo fue desarrollado para ayudarte a comprender conceptos complejos a través de desafíos envolventes y una jugabilidad cautivadora.",
        JA5: "Jugar Ahora",
        FAQ1: "Preguntas Frecuentes",
        FAQ2: "Resuelve tus dudas sobre Playsticida",
        FAQ3: "¿Playsticida es realmente gratuito?",
        FAQ4: "Sí, nuestra plataforma es completamente gratuita para todos los usuarios. Creemos que la educación de calidad debe ser accesible para todos.",
        FAQ5: "¿Para qué grupo de edad está recomendado el juego?",
        FAQ6: "Playsticida fue desarrollado para todas las edades, pero especialmente para personas que estudian toxicología y pesticidas.",
        FAQ7: "¿Necesito instalar algún software?",
        FAQ8: "No, nuestra versión web no requiere instalación. Solo accede a través de tu navegador. También tenemos aplicaciones disponibles para dispositivos móviles.",
        FAQ9: "¿Cómo puedo usar Playsticida en el aula?",
        FAQ10: "A través de laboratorios, ejecutándose en un solo PC para hasta 8 personas.",
        
         stats: {
          copyright: "Licencia CC BY_NC_SA 4.0",
          university: "Universidad",
          releaseYear: "Año de lanzamiento",
          lastUpdate: "Última actualización"
        },
        resources: {
          periodicTable: {
            title: "Tabla Periódica Interactiva",
            description: "Explora los elementos químicos de forma dinámica e interactiva."
          },
          videoLessons: {
            title: "Videoclases Exclusivas",
            description: "Accede a contenido en video producido por especialistas en química."
          },
          reactionSimulator: {
            title: "Simulador de Reacciones",
            description: "Experimenta combinaciones químicas virtualmente de forma segura."
          },
          quiz: {
            title: "Quiz de Fijación",
            description: "Prueba tus conocimientos con nuestros quizzes interactivos."
          }
        },

    
        testimonials: {
          flippity: {
            name: "Flippity",
            text: "Plataforma donde está alojado el juego, cualquier problema con la plataforma no es un problema directamente del juego en sí."
          },
          pcs: {
            name: "Mejor para PCs",
            text: "El juego se puede jugar en cualquier plataforma, pero se puede explorar mejor en Computadoras o tablets grandes."
          },
          doubts: {
            name: "Dudas y sugerencias",
            text: "Cualquier duda o sugerencia se puede hacer enviándonos un correo electrónico."
          }
        },


         // Contato

        "contact": "Contacto",
        "FA0": "Facultad de Ciencia y Tecnología",
        "FA1": "Hablar con el Prof. Dr. Maurício Araújo",
        "HF0": "Horario de Atención",
        "HF1": "Lunes a Viernes:",
        "HF2": "Sábado",
        "HF3": "Domingo:",
        "HF4": "Cerrado",
        "LOC": "Ubicación",
        CRS: "Redes Sociales",


         "rules": "Reglas",
        "RI0": "Conoce las reglas de Playsticida, un juego educativo sobre pesticidas y agricultura sostenible",
        "OB0": "Objetivo del estudio",
        "OB1": "Objetivo del Juego",
        "OB2": "El juego tiene como objetivo fundamental concienciar a los jugadores sobre los beneficios y perjuicios de los pesticidas, fomentando una agricultura sostenible.",
        "OB3": "Los jugadores (agricultores) compiten en equipos de hasta 8 participantes para obtener la mayor productividad en sus granjas, aprendiendo sobre el uso correcto de los pesticidas.",
        "OB4": "Jugar Ahora",
        "CJ0": "Componentes del Juego",
        "CJ1": "Conoce los elementos que componen el juego Playsticida y sus funcionalidades",
        "CJ2": "Dados",
        "CJ3": "Tres dados con funciones específicas",
        "CJ4": "Tipos de Dados",
        "CJ5": "Dado multicolor:",
        "CJ6": "Clases toxicológicas (I, II, III, IV) + 2 comodines",
        "CJ7": "Dado blanco:",
        "CJ8": "Clasificación de uso (herbicida, insecticida, fungicida, etc.)",
        "CJ9": "Dado blanco:",
        "CJ10": "Clasificación química (Organoclorado, Organofosforado, etc.)",
        "CJ11": "Tablero",
        "CJ12": "Estructura del Tablero",
        "CJ13": "El tablero representa diversas actividades que usan pesticidas (cultivos agrícolas, ganadería, etc.). Incluye casillas de suerte/revés con consecuencias como:",
        "CJ14": "El exceso de pesticidas utilizados provocó la contaminación del arroyo cercano a su propiedad, retrocede 10 casillas.",
        "CJ15": "Cartas",
        "CJ16": "Cuatro tipos diferentes",
        "CJ17": "Tipos de Cartas",
        "CJ18": "Información del pesticida:",
        "CJ19": "Detalles sobre los productos",
        "CJ20": "Suerte/Revés:",
        "CJ21": "Eventos aleatorios con consecuencias",
        "CJ22": "Cartas de bonificación:",
        "CJ23": "Puntos adicionales (5, 10 o 15 Regalos)",
        "CJ24": "Cartas de penalización:",
        "CJ25": "Pérdida de puntos (3, 5 o 7 Regalos)",
        "RJ0": "Reglas del Juego",
        "RJ1": "Entiende cómo jugar y las mecánicas que hacen de Playsticida una experiencia educativa y divertida",
        "RJ2": "Preparación",
        "RJ3": "Configuración inicial del juego",
        "RJ4": "Configuración Inicial",
        "RJ5": "Organización de las cartas:",
        "RJ6": "Antes del inicio del juego las cartas ya han sido automáticamente barajadas.",
        "RJ7": "Orden de los agricultores:",
        "RJ8": "Cada integrante lanza los dados blancos. Quien obtenga el mayor valor inicia el juego y gana 5 Regalos.",
        "RJ9": "Secuencia:",
        "RJ10": "El siguiente jugador será aquel que esté en la secuencia en sentido horario al primer agricultor.",
        "RJ11": "Dinámica",
        "RJ12": "Cómo funciona el juego",
        "RJ13": "Dinámica del Juego",
        "RJ14": "Una vez establecido el orden de los agricultores, se lanzan los 3 dados y, a continuación, se retira una carta referente a un pesticida.",
        "RJ15": "3 coincidencias:",
        "RJ16": "Gana 15 Regalos",
        "RJ17": "2 coincidencias:",
        "RJ18": "Gana 10 Regalos",
        "RJ19": "1 coincidencia:",
        "RJ20": "Gana 5 Regalos",
        "RJ21": "Ninguna coincidencia:",
        "RJ22": "Pierde 5 Regalos o retrocede 2 casillas",
        "RJ23": "Especiales",
        "RJ24": "Cartas de bonificación y penalización",
        "RJ25": "Cartas Especiales",
        "RJ26": "Cartas de bonificación:",
        "RJ27": "Siempre que un agricultor esté en un cultivo y retire una carta referente a un pesticida apropiado, deberá tomar una carta de bonificación de 5, 10 o 15 Regalos.",
        "RJ28": "Cartas de penalización:",
        "RJ29": "Siempre que un agricultor sea obligado a retirar una carta de penalización, deberá ser penalizado en 3, 5 o 7 Regalos por la aplicación errónea del pesticida.",
        "RJ30": "Atención:",
        "RJ31": "Las cartas de bonificación y de penalización comparten el mismo mazo.",
        "RJ32": "Suerte/Revés",
        "RJ33": "Eventos aleatorios",
        "RJ34": "Suerte o Revés",
        "RJ35": "El agricultor que pare en la casilla 'Suerte/Revés' deberá tomar una carta del montón para descubrir si será bonificado o penalizado.",
        "RJ36": "Si la cara del dado multicolor muestra un comodín, elige la carta de 'Suerte/Revés' número 1. Si el comodín no está presente, elige la carta cuyo número corresponda a la suma de los dos dados blancos.",
        "RJ37": "Final",
        "RJ38": "Término del juego",
        "RJ39": "Final del Juego y Puntuación",
        "RJ40": "Llegada:",
        "RJ41": "El agricultor que llegue al final primero recibe 30 Regalos.",
        "RJ42": "Puntuación:",
        "RJ43": "Todos los agricultores tendrán sus Regalos sumados, incluso los que no han regresado a su granja.",
        "RJ44": "Desempate:",
        "RJ45": "En caso de empate, se suman a los Regalos todas las clases toxicológicas.",
        "RJ46": "Ganador:",
        "RJ47": "Gana el agricultor que posea la mayor puntuación.",
        "CA0": "¿Listo para jugar?",
        "CA1": "Prueba Playsticida y aprende sobre pesticidas y agricultura sostenible de forma divertida",
        "CA2": "Aprendizaje a través de la diversión",
        "CA3": "Comienza ahora mismo",
        "CA4": " Accede al juego online y comienza a aprender sobre pesticidas de forma interactiva y divertida.",
        "CA5": "Jugar Ahora",
        "CA6": "Créditos",
        "CA7": "Conoce al equipo detrás del desarrollo de Playsticida",
        "CA8": " Playsticida ideado por Marcelo de Freitas Lima, con las contribuciones de:",
        "CA9": "Licenciado bajo CC BY-NC-SA 4.0. Para ver una copia de esta licencia, visite{' '}",
        "SO0": "Nuestro Propósito",
        "SO1": "Playsticida se enfoca en el medio lúdico para la enseñanza, pero sin perder el aspecto técnico y científico.",
        "SO2": "El propósito es aplicar el conocimiento en la práctica, pero sin salir del aula, como complemento de enseñanza.",
        "SO3": "Desarrollo",
        "SO4": "Hecho por estudiantes y profesores de los más diversos medios, para atender la necesidad de aprendizaje virtual y accesible.",
        "SO5": "Si lo desea, quédese con la libertad de leer nuestro",
        "IMG01": "img/Agro-Cult-01-ES.png",
        "IMG02": "img/SR-ES.png",
         "IMG03": "img/Bonus-ES.png",

        //Header
        navLinks:{
          sobre: {
            name: "Acerca de Nosotros",
          },
          contato:{
            name: "Contacto",
          },
          regras:{
            name:"Reglas",
          }
        },
        PLAYURL:"https://www.flippity.net/v2/bg.php?k=e/2PACX-1vQsrhNXg0Y9-DSfoaCHFn6fU1tLpNcBXMWeTQT35IsofxJKj0HM87qdrdGjPQBaS3BU5toHhmQiLr-q",

        //Footer

        pageLinks:{
        como_jogar: {
          name: "Cómo Jugar",
          href: "pdf/Regras-ES.pdf",
        },
        sobre_nos:{
          name: "Sobre Nosotros",
        },
        regras:{
          name: "Reglas",
        }
      },

      FRASE: "Transformando el aprendizaje de la química en una experiencia divertida y atractiva para todos.",
      CONT: "Contacto",
      NAV: "Navegación",
      DIR: "Playsticida. Todos los derechos reservados.",
      ART:"Artículo",


      }
    },
    it: {
      translation: {
        welcome: "Benvenuto su Playsticida!",
        welcome2: "Scopri il mondo della chimica in modo divertente e interattivo",
        language: "Seleziona la tua lingua",
        language2: "Playsticida è disponibile in più lingue",
        question: "Cos'è Playsticida?",
        answer: "Una piattaforma educativa innovativa che trasforma l'apprendimento della chimica in un'esperienza divertente e coinvolgente",
        about:"Informazioni",
        sobre0: "Aprende Química de Forma Divertida",
        sobre1: "Playsticida è un gioco educativo sviluppato per aiutare studenti di tutti i livelli a comprendere i concetti fondamentali della chimica attraverso un approccio ludico e interattivo.",
        sobre2: "Combinando elementi di gamification con contenuti educativi di qualità, la nostra piattaforma rende il processo di apprendimento più efficace e piacevole.",
        sobre3: "Sviluppato da esperti in educazione",
        sobre4: "Allineato alle linee guida curriculari",
        sobre5: "Completamente gratuito e accessibile",
        tablecion1:"Esperimento",
        tablecion2:"Gamification",
        tablecion3:"Contenito",
        tablecion4:"Biologia",
        RE1:"La gamification è la strada.",
        RE2:"Scopri il nostro tipo di gioco in modo rapido.",
        D1:"Informazioni importanti",
        D2:"Riguardanti il gioco",
        JA1: "Apprendimento attraverso il divertimento",
        JA2: "Gioca ora",
        JA3: "Vieni a scoprire il gioco Playsticida e aumenta il tuo apprendimento nel mondo della Chimica in modo divertente e interattivo.",
        JA4: "Il nostro gioco educativo è stato sviluppato per aiutarti a comprendere concetti complessi attraverso sfide coinvolgenti e una gameplay avvincente.",
        JA5: "Gioca Ora",
        FAQ1: "Domande Frequenti",
        FAQ2: "Risolve i tuoi dubbi su Playsticida",
        FAQ3: "Playsticida è veramente gratuito?",
        FAQ4: "Sì, la nostra piattaforma è completamente gratuita per tutti gli utenti. Crediamo che un'istruzione di qualità debba essere accessibile a tutti.",
        FAQ5: "Per quale fascia d'età è consigliato il gioco?",
        FAQ6: "Playsticida è stato sviluppato per tutte le età, ma in particolare per chi studia tossicologia e pesticidi.",
        FAQ7: "Devo installare qualche software?",
        FAQ8: "No, la nostra versione web non richiede installazione. È sufficiente accedere tramite il browser. Abbiamo anche app disponibili per dispositivi mobili.",
        FAQ9: "Come posso utilizzare Playsticida in classe?",
        FAQ10: "Tramite laboratori, utilizzando un solo PC per un massimo di 8 persone.",
        stats: {
          copyright: "Licenza CC BY_NC_SA 4.0",
          university: "Università",
          releaseYear: "Anno di lancio",
          lastUpdate: "Ultimo aggiornamento"
        },
        resources: {
          periodicTable: {
            title: "Tavola Periodica Interattiva",
            description: "Esplora gli elementi chimici in modo dinamico e interattivo."
          },
          videoLessons: {
            title: "Video Lezioni Esclusive", 
            description: "Accedi a contenuti video prodotti da esperti di chimica."
          },
          reactionSimulator: {
            title: "Simulatore di Reazioni",
            description: "Sperimenta combinazioni chimiche virtualmente in modo sicuro."
          },
          quiz: {
            title: "Quiz di Verifica",
            description: "Metti alla prova le tue conoscenze con i nostri quiz interattivi."
          }
        },

     
        testimonials: {
          flippity: {
            name: "Flippity",
            text: "Piattaforma dove è ospitato il gioco, qualsiasi problema con la piattaforma non è un problema direttamente del gioco stesso."
          },
          pcs: {
            name: "Migliore per PC",
            text: "Il gioco può essere giocato su qualsiasi piattaforma, ma può essere esplorato meglio su Computer o tablet di grandi dimensioni."
          },
          doubts: {
            name: "Dubbi e suggerimenti",
            text: "Qualsiasi dubbio o suggerimento può essere inviato via email a noi."
          }
        },


         // Contato

        "contact": "Contatto",
        "FA0": "Facoltà di Scienze e Tecnologie",
        "FA1": "Parla con il Prof. Dott. Maurício Araújo",
        "HF0": "Orari di Apertura",
        "HF1": "Da Lunedì a Venerdì:",
        "HF2": "Sabato",
        "HF3": "Domenica:",
        "HF4": "Chiuso",
        "LOC": "Località",

        // Regras

         "rules": "Regole",
          "RI0": "Scopri le regole di Playsticida, un gioco educativo sui pesticidi e l'agricoltura sostenibile",
          "OB0": "Obiettivo dello studio",
          "OB1": "Obiettivo del Gioco",
          "OB2": "L'obiettivo fondamentale del gioco è sensibilizzare i giocatori sui benefici e i danni dei pesticidi, incoraggiando un'agricoltura sostenibile.",
          "OB3": "I giocatori (agricoltori) competono in squadre fino a 8 partecipanti per ottenere la massima produttività nelle loro fattorie, apprendendo l'uso corretto dei pesticidi.",
          "OB4": "Gioca Ora",
          "CJ0": "Componenti del Gioco",
          "CJ1": "Scopri gli elementi che compongono Playsticida e le loro funzionalità",
          "CJ2": "Dadi",
          "CJ3": "Tre dadi con funzioni specifiche",
          "CJ4": "Tipi di Dadi",
          "CJ5": "Dado multicolore:",
          "CJ6": "Classi tossicologiche (I, II, III, IV) + 2 jolly",
          "CJ7": "Dado bianco:",
          "CJ8": "Classificazione d'uso (erbicida, insetticida, fungicida, ecc.)",
          "CJ9": "Dado bianco:",
          "CJ10": "Classificazione chimica (Organoclorurato, Organofosfato, ecc.)",
          "CJ11": "Tabellone",
          "CJ12": "Struttura del Tabellone",
          "CJ13": "Il tabellone rappresenta varie attività che utilizzano pesticidi (colture agricole, zootecnia, ecc.). Include caselle fortuna/contrattempo con conseguenze come:",
          "CJ14": "L'eccesso di pesticidi utilizzati ha provocato la contaminazione del ruscello vicino alla tua proprietà, torna indietro di 10 caselle.",
          "CJ15": "Carte",
          "CJ16": "Quattro tipi diversi",
          "CJ17": "Tipi di Carte",
          "CJ18": "Informazioni sul pesticida:",
          "CJ19": "Dettagli sui prodotti",
          "CJ20": "Fortuna/Sfortuna:",
          "CJ21": "Eventi casuali con conseguenze",
          "CJ22": "Carte bonus:",
          "CJ23": "Punti aggiuntivi (5, 10 o 15 Regali)",
          "CJ24": "Carte penalità:",
          "CJ25": "Perdita di punti (3, 5 o 7 Regali)",
          "RJ0": "Regole del Gioco",
          "RJ1": "Comprendi come giocare e le meccaniche che rendono Playsticida un'esperienza educativa e divertente",
          "RJ2": "Preparazione",
          "RJ3": "Configurazione iniziale del gioco",
          "RJ4": "Configurazione Iniziale",
          "RJ5": "Organizzazione delle carte:",
          "RJ6": "Prima dell'inizio del gioco le carte sono già state automaticamente mescolate.",
          "RJ7": "Ordine degli agricoltori:",
          "RJ8": "Ogni membro lancia i dadi bianchi. Chi ottiene il valore più alto inizia il gioco e riceve 5 Regali.",
          "RJ9": "Sequenza:",
          "RJ10": "Il prossimo giocatore sarà quello in sequenza in senso orario dal primo agricoltore.",
          "RJ11": "Dinamica",
          "RJ12": "Come funziona il gioco",
          "RJ13": "Dinamica di Gioco",
          "RJ14": "Una volta stabilito l'ordine degli agricoltori, si lanciano i 3 dadi e, in sequenza, si pesca una carta relativa a un pesticida.",
          "RJ15": "3 corrispondenze:",
          "RJ16": "Vince 15 Regali",
          "RJ17": "2 corrispondenze:",
          "RJ18": "Vince 10 Regali",
          "RJ19": "1 corrispondenza:",
          "RJ20": "Vince 5 Regali",
          "RJ21": "Nessuna corrispondenza:",
          "RJ22": "Perde 5 Regali o torna indietro di 2 caselle",
          "RJ23": "Speciali",
          "RJ24": "Carte bonus e penalità",
          "RJ25": "Carte Speciali",
          "RJ26": "Carte bonus:",
          "RJ27": "Ogni volta che un agricoltore si trova su una coltura e pesca una carta relativa a un pesticida appropriato, deve prendere una carta bonus di 5, 10 o 15 Regali.",
          "RJ28": "Carte penalità:",
          "RJ29": "Ogni volta che un agricoltore è obbligato a pescare una carta penalità, deve essere penalizzato di 3, 5 o 7 Regali per l'applicazione errata del pesticida.",
          "RJ30": "Attenzione:",
          "RJ31": "Le carte bonus e penalità condividono lo stesso mazzo.",
          "RJ32": "Fortuna/Contrattempo",
          "RJ33": "Eventi casuali",
          "RJ34": "Fortuna o Contrattempo",
          "RJ35": "L'agricoltore che si ferma sulla casella 'Fortuna/Contrattempo' deve pescare una carta dal mazzo per scoprire se sarà premiato o penalizzato.",
          "RJ36": "Se la faccia del dado multicolore mostra un jolly, scegli la carta 'Fortuna/Contrattempo' numero 1. Se il jolly non è presente, scegli la carta il cui numero corrisponde alla somma dei due dadi bianchi.",
          "RJ37": "Fine",
          "RJ38": "Termine del gioco",
          "RJ39": "Fine del Gioco e Punteggio",
          "RJ40": "Arrivo:",
          "RJ41": "Il primo agricoltore che arriva alla fine riceve 30 Regali.",
          "RJ42": "Punteggio:",
          "RJ43": "Tutti gli agricoltori avranno i loro Regali sommati, anche quelli che non sono tornati alla loro fattoria.",
          "RJ44": "Spareggio:",
          "RJ45": "In caso di pareggio, si sommano ai Regali tutte le classi tossicologiche.",
          "RJ46": "Vincitore:",
          "RJ47": "Vince l'agricoltore che possiede il punteggio più alto.",
          "CA0": "Pronto a giocare?",
          "CA1": "Prova Playsticida e impara sui pesticidi e l'agricoltura sostenibile in modo divertente",
          "CA2": "Imparare divertendosi",
          "CA3": "Inizia subito",
          "CA4": " Accedi al gioco online e inizia a imparare sui pesticidi in modo interattivo e divertente.",
          "CA5": "Gioca Ora",
          "CA6": "Crediti",
          "CA7": "Scopri il team dietro lo sviluppo di Playsticida",
          "CA8": " Playsticida ideato da Marcelo de Freitas Lima, con i contributi di:",
          "CA9": "Concesso in licenza CC BY-NC-SA 4.0. Per visualizzare una copia di questa licenza, visitare{' '}",
          "SO0": "Il Nostro Scopo",
          "SO1": "Playsticida si concentra sull'aspetto ludico per l'insegnamento, ma senza perdere l'aspetto tecnico e scientifico.",
          "SO2": "Lo scopo è applicare la conoscenza nella pratica, ma senza uscire dall'aula, come complemento didattico.",
          "SO3": "Sviluppo",
          "SO4": "Realizzato da studenti e insegnanti dei più diversi ambiti, per soddisfare l'esigenza di apprendimento virtuale e accessibile.",
          "SO5": "Se lo desideri, sentiti libero di leggere il nostro",
          "IMG01": "img/Agro-Cult-01-IT.png",
          "IMG02": "img/SR-IT.png",
           "IMG03": "img/Bonus-IT.png",

          //Header
          navLinks:{
          sobre: {
            name: "Informazioni",
          },
          contato:{
            name: "Contatto",
          },
          regras:{
            name:"Regole",
          }
        },
        PLAYURL:"https://www.flippity.net/v2/bg.php?k=e/2PACX-1vS34Nq8QqivigsBZ_GiLLm7ZT3i6oi8aNZi5YE1yBeAPKTHP5vf4jEpWaLg00Mc97szQGLO6N157Yms",

        //Footer
        
        pageLinks:{
        como_jogar: {
          name: "Come Giocare",
          href: "pdf/Regras-IT.pdf",
        },
        sobre_nos:{
          name: "Chi Siamo",
        },
        regras:{
          name: "Regole",
        }
      },

      FRASE: "Trasformare l'apprendimento della chimica in un'esperienza divertente e coinvolgente per tutti.",
      CONT: "Contatto",
      NAV: "Navigazione",
      DIR: "Playsticida. Tutti i diritti riservati.",
      ART:"Articolo",
      CRS: "Social Media",

          

      }
    },



    pt: {
      translation: {

      //Home page
        welcome: "Bem-vindo ao Playsticida!",
        welcome2: " Descubra o mundo da química de f orma divertida e interativa",
        language: "Selecione seu idioma",
        language2: "Playsticida está disponível em múltiplos idomas",
        question: "O que é o Playsticida",
        answer: "Uma plataforma educacional inovadora que transforma o aprendizado de química em uma experiência divertida e envolvente",

        about: "Sobre",
        sobre0: "Aprenda Química de Forma Divertida",
        sobre1: "O Playsticida é um jogo educativo desenvolvido para ajudar estudantes de todos os níveis a compreenderem os conceitos fundamentais da química através de uma abordagem lúdica e interativa.",
        sobre2: "Combinando elementos de gamificação com conteúdo educacional de qualidade, nossa plataforma torna o processo de aprendizagem mais eficaz e agradável.",
        sobre3: "Desenvolvido por especialistas em educação",
        sobre4: "Alinhado com as diretrizes curriculares",
        sobre5: "Totalmente gratuito e acessível",
        tablecion1:"Experimento",
        tablecion2:"Gamificação",
        tablecion3:"Contenito",
        tablecion4:"Biologia",
        RE1:"Gamificação é o caminho",
        RE2:"Conheça o nosso jogo de maneira rápida",
        D1:"Infromações importantes",
        D2: "Em relação ao jogo",
        JA1: "Aprendizado através da diversão",
        JA2:"Jogue agora",
        JA3:"Venha conhecer o jogo Playsticida e aumentar mais seu aprendizado no mundo da Química de forma divertida e interativa.",
        JA4:"Nosso jogo educativo foi desenvolvido para ajudar você a compreender conceitos complexos através de desafios envolventes e uma jogabilidade cativante.",
        JA5:"Jogar Agora",
        FAQ1:"Perguntas Frequentes",
        FAQ2:"Tire suas dúvidas sobre o Playsticida",
        FAQ3:"O Playsticida é realmente gratuito?",
        FAQ4:"Sim, nossa plataforma é completamente gratuita para todos os usuários. Acreditamos que a educação de qualidade deve ser acessível a todos.",
        FAQ5:"Para qual faixa etária o jogo é recomendado?",
        FAQ6:"O Playsticida foi desenvolvido para todas as idades, mas em especial para pessoas que estão estudando toxologia e pesticidas",
        FAQ7:"Preciso instalar algum software?",
        FAQ8:"Não, nossa versão web não requer instalação. Basta acessar pelo navegador. Também temos aplicativos disponíveis para dispositivos móveis.",
        FAQ9:"Como posso utilizar o Playsticida em sala de aula?",
        FAQ10:"Atráves de salas de laboratório, rodando em um PC para até 8 pessoas",
        stats: {
          copyright: "Licença CC BY_NC_SA 4.0",
          university: "Universidade", 
          releaseYear: "Ano de lançamento",
          lastUpdate: "Última atualização"
        },

        resources: {
        periodicTable: {
          title: "Tabela Periódica Interativa",
          description: "Explore os elementos químicos de forma dinâmica e interativa."
        },
        videoLessons: {
          title: "Videoaulas Exclusivas", 
          description: "Acesse conteúdo em vídeo produzido por especialistas em química."
        },
        reactionSimulator: {
          title: "Simulador de Reações",
          description: "Experimente combinações químicas virtualmente de forma segura."
        },
        quiz: {
          title: "Quiz de Fixação",
          description: "Teste seus conhecimentos com nossos quizzes interativos."
        }
      },


      testimonials: {
        flippity: {
          name: "Flippity",
          text: "Plataforma onde o jogo está hospedado, sendo qualquer problema com o plataforma não é problema diretamente do jog em si."
        },
        pcs: {
          name: "Melhor para PCs", 
          text: "O Jogo pode ser jogado em qualquer plataforma, mas pode ser melhor explorado em Computadores ou tablets grandes."
        },
        doubts: {
          name: "Dúvidas e sugestões",
          text: "Qualquer dúvida ou sugestão pode ser feita mandando e-mail para nós."
        }
      },
        
        

        // Contato

        contact: "Contato",
        FA0: "Faculdade de Ciência e Técnologia",
        FA1: "Conversar com o Prof. Dout. Maurício Araújo ",
        HF0: "Horário de Funcionamento",
        HF1: "Segunda a Sexta:",
        HF2: "Sábado",
        HF3: "Domingo:",
        HF4: "Fechado",
        LOC: "Localização",
        CRS:"Redes Sociais",



        // Regras

        rules: "Regra",
        RI0: "Conheça as regras do Playsticida, um jogo educativo sobre agrotóxicos e agricultura sustentável",
        OB0: "O alvo do estudo",
        OB1: "Objetivo do Jogo",
        OB2: "O jogo tem como objetivo fundamental conscientizar os jogadores sobre os benefícios e malefícios  dos agrotóxicos, incentivando uma agricultura sustentável.",
        OB3: "Os jogadores (fazendeiros) competem em equipes de até 8 participantes para obter a maior produtividade em suas fazendas, aprendendo sobre o uso correto dos agrotóxicos.",
        OB4: "Jogar Agora",
        CJ0: "Componentes do Jogo",
        CJ1: "Conheça os elementos que compõem o jogo Playsticida e suas funcionalidades",
        CJ2: "Dados",
        CJ3: "Três dados com funções específicas",
        CJ4: "Tipos de Dados",
        CJ5: "Dado multicolorido:",
        CJ6: "Classes toxicológicas (I, II, III, IV) + 2 coringas",
        CJ7: "Dado branco:",
        CJ8: "Classificação de uso (herbicida, insecticida, fungicida, etc.)",
        CJ9: "Dado branco:",
        CJ10: "Classificação química (Organoclorado, Organofosforado, etc.)",
        CJ11: "Tabuleiro",
        CJ12: "Estrutura do Tabuleiro",
        CJ13: "O tabuleiro representa diversas atividades que usam agrotóxicos (culturas agrícolas, pecuária, etc.). Inclui casas de sorte/revés com consequências como:",
        CJ14: "O excesso de agrotóxicos utilizados provocou a contaminação do córrego próximo a sua propriedade, retroceda 10 casas.",
        CJ15: "Cartas",
        CJ16: "Quatro tipos diferentes",
        CJ17: "Tipos de Cartas",
        CJ18: "Informações do agrotóxico:",
        CJ19: "Detalhes sobre os produtos",
        CJ20: "Sorte/Revés:",
        CJ21: "Eventos aleatórios com consequências",
        CJ22: "Cartas bônus:",
        CJ23: "Pontuação adicional (5, 10 ou 15 prendas)",
        CJ24: "Cartas punição:",
        CJ25: "Perda de pontos (3, 5 ou 7 prendas)",
        RJ0:"Regras do Jogo",
        RJ1: "Entenda como jogar e as mecânicas que tornam o Playsticida uma experiência educativa e divertida",
        RJ2: "Preparação",
        RJ3: "Organização inicial do jogo",
        RJ4: "Organização Inicial",
        RJ5: "Organização das cartas:",
        RJ6: "Antes do início do jogo as cartas já foram automaticamente embaralhadas.",
        RJ7: "Ordem dos fazendeiros:",
        RJ8: "Cada integrante joga os dados brancos. Quem obtiver o maior valor inicia o jogo e ganha 5 prendas.",
        RJ9: "Sequência:",
        RJ10: "O próximo jogador será aquele que estiver na sequência em sentido horário ao primeiro fazendeiro.",
        RJ11: "Dinâmica",
        RJ12: "Como o jogo funciona",
        RJ13: "Dinâmica do Jogo",
        RJ14: "Assim que a ordem dos fazendeiros for estabelecida, jogam-se os 3 dados e, na sequência, é retirada uma carta referente a um agrotóxico.",
        RJ15: "3 coincidências:",
        RJ16: "Ganha 15 prendas",
        RJ17: "2 coincidências:",
        RJ18: "Ganha 10 prendas",
        RJ19: "1 coincidência:",
        RJ20: "Ganha 5 prendas",
        RJ21: "Nenhuma coincidência:",
        RJ22: "Perde 5 prendas ou volta 2 casas",
        RJ23: "Especiais",
        RJ24: "Cartas bônus e punição",
        RJ25: "Cartas Especiais",
        RJ26: "Cartas bônus:",
        RJ27: "Sempre que um fazendeiro estiver em uma cultura e retirar uma carta referente a um agrotóxico apropriado, ele deverá pegar uma carta bônus de 5, 10 ou 15 prendas.",
        RJ28: "Cartas punição:",
        RJ29: "Sempre que um fazendeiro for obrigado a retirar uma carta punição, ele deverá ser punido em 3, 5 ou 7 prendas pela aplicação errada do agrotóxico.",
        RJ30: "Atenção:",
        RJ31: "As cartas de bônus e de punição compartilham o mesmo baralho.",
        RJ32: "Sorte/Revés",
        RJ33: "Eventos aleatórios",
        RJ34: "Sorte ou Revés",
        RJ35: "O fazendeiro que parar na casa 'Sorte/Revés' deverá pegar uma carta do monte para descobrir se será bonificado ou punido.",
        RJ36: "Se a face do dado multicolorido estiver mostrando um coringa, escolha a carta de 'Sorte/Revés' número 1. Se o coringa não estiver presente, escolha a carta cujo número corresponder à soma dos dois dados brancos.",
        RJ37: "Final",
        RJ38: "Término do jogo",
        RJ39: "Final do Jogo e Pontuação",
        RJ40: "Chegada:",
        RJ41: "O fazendeiro que chegar ao final primeiro recebe 30 prendas.",
        RJ42: "Pontuação:",
        RJ43: "Todos os fazendeiros terão suas prendas somadas, mesmo os que não retornaram à sua fazenda.",
        RJ44: "Desempate:",
        RJ45: "Em caso de empate, somam-se às prendas todas as classes toxicológicas.",
        RJ46: "Vencedor:",
        RJ47: "Ganha o fazendeiro que possuir a maior pontuação.",
        CA0: "Pronto para jogar?",
        CA1: "Experimente o Playsticida e aprenda sobre agrotóxicos e agricultura sustentável de forma divertida",
        CA2: "Aprendizado através da diversão",
        CA3: "Comece agora mesmo",
        CA4: " Acesse o jogo online e comece a aprender sobre agrotóxicos de forma interativa e divertida.",
        CA5: "Jogue Agora",
        IMG01: "img/Agro-Cult-01.png",
        "IMG02": "img/SR-PT.png",
        "IMG03": "img/Bonus-PT.png",
        
    
        // Sobre

        CA6: "Créditos",
        CA7: "Conheça a equipe por trás do desenvolvimento do Playsticida",
        CA8: " Playsticida idealizado por Marcelo de Freitas Lima, com as contribuições de:",
        CA9: "Licenciada sob CC BY-NC-SA 4.0. Para ver uma cópia desta licença, visite{' '}",
        SO0:"Nosso Intuito",
        SO1:"Playsticida foca no meio lúdico para o ensino, mas sem perder o aspecto tecńico e científico.",
        SO2:"O intuito é aplicar o conhecimento no meio prático, mas sem sair da saula de aula, como complemento de ensino.",
        SO3:"Desenvolvimento",
        SO4:"Feito por alunos e professores pdos mais diversos meios, para atender a necessidade de aprendizado virtual e acessível.",
        SO5:"Caso quiser fique avontade de ler nosso",


        //Header

        PLAYURL:"https://www.flippity.net/v2/bg.php?k=e/2PACX-1vQG3zdpIcwiZCCRnkjM8Tnmo_RkgN0CrpkXt-qp0623Puwo4Ihv4NKsXRo1z-4QBrk-8YdNI6fF2leQ",

        navLinks:{
          sobre: {
            name: "Sobre",
          },
          contato:{
            name: "Contato",
          },
          regras:{
            name:"Regras",
          }
        },

        //Footer

        pageLinks:{
          como_jogar: {
            name: "Como Jogar",
            href: "https://i.ibb.co/4fPgYws/Regras.png",
          },
          sobre_nos:{
            name: "Sobre nós",
          },
          regras:{
            name: "Regras",
          }
        },

        FRASE:"Transformando o aprendizado de química em uma experiência divertida e envolvente para todos.",
        CONT:"Contato",
        NAV:"Navegação",
        DIR:"Playsticida. Todos os direitos reservados.",
        ART:"Artigo",

        


      }
    }
  },
  lng: "pt", 
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
