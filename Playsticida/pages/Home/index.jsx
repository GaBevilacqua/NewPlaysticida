import Header from "../../components/header";
import Footer from "../../components/footer";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AlignCenter } from "lucide-react";

function Home() {
  const { t, i18n } = useTranslation();

   useEffect(() => {
      AOS.init({
        duration: 1200,
        once: true,
      });
    }, []);

  // Dados dos idiomas disponíveis
  const languages = [
    { code: "pt", flag: "🇧🇷", name: "Português" },
    { code: "en", flag: "🇬🇧", name: "English" },
    { code: "es", flag: "🇪🇸", name: "Español" },
    { code: "it", flag: "🇮🇹", name: "Italiano" },
  ];

  // Dados dos recursos educacionais COM I18N
const educationalResources = [
  {
    title: t("resources.periodicTable.title"),
    description: t("resources.periodicTable.description"),
    icon: "🎲",
    link: "#"
  },
  {
    title: t("resources.videoLessons.title"),
    description: t("resources.videoLessons.description"),
    icon: "🎴", 
    link: "#"
  },
  {
    title: t("resources.reactionSimulator.title"),
    description: t("resources.reactionSimulator.description"),
    icon: "♟️",
    link: "#"
  },
  {
    title: t("resources.quiz.title"),
    description: t("resources.quiz.description"),
    icon: "📝",
    link: "#"
  }
];

// Dados de depoimentos COM I18N
const testimonials = [
  {
    name: t("testimonials.flippity.name"),
    text: t("testimonials.flippity.text"),
    avatar: "⚙️"
  },
  {
    name: t("testimonials.pcs.name"),
    text: t("testimonials.pcs.text"),
    avatar: "🖥️"
  },
  {
    name: t("testimonials.doubts.name"),
    text: t("testimonials.doubts.text"),
    avatar: "🔍"
  }
];


  // Dados de estatísticas com i18n
  const stats = [
    { value: "Copyright", label: t("stats.copyright") },
    { value: "Unesp", label: t("stats.university") },
    { value: "2017", label: t("stats.releaseYear") },
    { value: "2025", label: t("stats.lastUpdate") }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800">
      <Header />

      {/* Espaço para o header fixo */}
      <div className="h-20 md:h-17"></div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-gradient-to-r from-green-400 to-blue-500 opacity-10 w-full h-full"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600 animate-gradient">
            {t("welcome")}
          </h1>
          

          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
           {t("welcome2")}
          </p>
          
          <div className="mt-8 flex justify-center">
            <div className="animate-bounce bg-white p-2 w-10 h-10 ring-1 ring-gray-900/5 rounded-full shadow-lg">
              <svg className="w-6 h-6 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Idioma Selection */}
      <section className="py-12 bg-gray-50 shadow-inner" data-aos="fade-up">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-2 text-gray-700">{t("language")}</h2>
          <p className="text-center text-gray-600 mb-8">{t("language2")}</p>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => i18n.changeLanguage(lang.code)}
                className={`flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg ${
                  i18n.language === lang.code 
                    ? "bg-green-100 border-2 border-green-500 shadow-md" 
                    : "bg-white border border-gray-200 hover:bg-green-50"
                }`}
              >
                <span className="text-3xl mb-2">{lang.flag}</span>
                <span className="text-sm font-medium text-gray-700">{lang.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      

      {/* Sobre o Playsticida */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-green-50" data-aos="fade-up">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">{t("question")}</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              {t("answer")}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{t("sobre0")}</h3>
              <p className="text-gray-600 mb-4">
                {t("sobre1")}
              </p>
              <p className="text-gray-600 mb-4">
                {t("sobre2")}
              </p>
              <ul className="space-y-2 mt-6">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{t("sobre3")}</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{t("sobre4")}</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{t("sobre5")}</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-100 p-6 rounded-xl text-center">
                  <span className="text-4xl">🧪</span>
                  <h4 className="font-semibold mt-2">{t("tablecion1")}</h4>
                </div>
                <div className="bg-green-100 p-6 rounded-xl text-center">
                  <span className="text-4xl">🎮</span>
                  <h4 className="font-semibold mt-2">{t("tablecion2")}</h4>
                </div>
                <div className="bg-yellow-100 p-6 rounded-xl text-center">
                  <span className="text-4xl">📚</span>
                  <h4 className="font-semibold mt-2">{t("tablecion3")}</h4>
                </div>
                <div className="bg-purple-100 p-6 rounded-xl text-center">
                  <span className="text-4xl">🌱</span>
                  <h4 className="font-semibold mt-2">{t("tablecion4")}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recursos Educacionais */}
      <section className="py-16 bg-white" data-aos="fade-up">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">{t("RE1")}</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              {t("RE2")}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {educationalResources.map((resource, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-4xl mb-4">{resource.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Depoimentos */}
      <section className="py-16 bg-gradient-to-r from-green-400 to-teal-500 text-white" data-aos="fade-up">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">{t("D1")}</h2>
            <p className="mt-4 text-lg opacity-90">{t("D2")}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{testimonial.avatar}</span>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>

                  </div>
                </div>
                <p className="italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jogue agora */}
      <section className="py-16 bg-white" data-aos="fade-up">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-green-100 rounded-2xl opacity-50 blur"></div>
              <div className="relative bg-gradient-to-r from-green-400 to-teal-500 p-10 rounded-2xl shadow-2xl text-white text-center">
                <span className="text-7xl">🎲</span>
                <h3 className="text-2xl font-bold mt-4">Playsticida</h3>
                <p className="mt-2">{t("JA1")}</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("JA2")}</h2>
            <p className="text-gray-600 mb-4">
              {t("JA3")}
            </p>
            <p className="text-gray-600 mb-6">
              {t("JA4")}
            </p>
            <a
                href={t("PLAYURL")}
                className="inline-flex items-center bg-white text-green-700 font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1"
              >
              <span>{t("JA5")}</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
            
            
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50" data-aos="flip-up">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">{t("FAQ1")}</h2>
            <p className="mt-4 text-lg text-gray-600">{t("FAQ2")}</p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">{t("FAQ3")}</h3>
              <p className="text-gray-600">{t("FAQ4")}</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">{t("FAQ5")}</h3>
              <p className="text-gray-600">{t("FAQ6")}</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">{t("FAQ7")}</h3>
              <p className="text-gray-600">{t("FAQ8")}</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">{t("FAQ9")}</h3>
              <p className="text-gray-600">{t("FAQ10")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-12 bg-white" data-aos="fade-right">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-green-600">{stat.value}</div>
                <div className="text-gray-600 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;