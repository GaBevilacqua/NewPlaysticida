import Header from "../../components/header";
import Footer from "../../components/footer";
import { useTranslation } from "react-i18next";

function Home() {
  const { t, i18n } = useTranslation();

  // Dados dos idiomas disponíveis
  const languages = [
    { code: "pt", flag: "🇧🇷", name: "Português" },
    { code: "en", flag: "🇬🇧", name: "English" },
    { code: "es", flag: "🇪🇸", name: "Español" },
    { code: "it", flag: "🇮🇹", name: "Italiano" },
    { code: "fr", flag: "🇫🇷", name: "Française" },

  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800">
      <Header />

      {/* Espaço para o header fixo */}
      <div className="h-20 md:h-24"></div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-gradient-to-r from-green-400 to-blue-500 opacity-10 w-full h-full"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">
            {t("welcome")}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Versão em português do Brasil
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
      <section className="py-12 bg-white shadow-inner">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-700">Selecione seu idioma</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-5">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => i18n.changeLanguage(lang.code)}
                className={`flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg ${
                  i18n.language === lang.code 
                    ? "bg-green-100 border-2 border-green-500 shadow-md" 
                    : "bg-gray-50 border border-gray-200 hover:bg-green-50"
                }`}
              >
                <span className="text-3xl mb-2">{lang.flag}</span>
                <span className="text-sm font-medium text-gray-700">{lang.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Jogue agora Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-green-400 to-teal-500">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-white rounded-2xl opacity-30 blur"></div>
              <div className="relative bg-white/30 backdrop-blur-sm p-8 rounded-2xl shadow-2xl">
                <span className="text-6xl">🎲</span>
              </div>
            </div>
          </div>
          
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-4">Jogue agora</h2>
            <p className="mb-6 text-lg">
              Venha conhecer o jogo Playsticida e aumentar mais seu aprendizado no mundo da Química.
            </p>
            <a
              href="https://www.flippity.net/bg.php?k=1-7Akba-QSpdjX6O0W7f_FILNqZWlzvueFpiRQziiG9A"
              className="inline-flex items-center bg-white text-green-600 font-semibold px-6 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1"
            >
              <span>Jogar Agora</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;