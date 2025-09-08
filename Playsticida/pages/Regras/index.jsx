import Header from "../../components/header";
import Footer from "../../components/footer";
import { useTranslation } from "react-i18next";



function Regras() {
    const { t, i18n } = useTranslation();

  // Dados dos idiomas disponíveis
  const languages = [
    { code: "pt", flag: "🇧🇷", name: "Português" },
    { code: "en", flag: "🇬🇧", name: "English" },
    { code: "es", flag: "🇪🇸", name: "Español" },
    { code: "it", flag: "🇮🇹", name: "Italiano" },
  ];
    return(
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
            {t("rules")}
          </h1>
          
        </div>
      </section>

      {/* Idioma Selection */}
      <section className="py-12 bg-gray-50 shadow-inner">
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


      <Footer />
    </div>
  );
}


export default Regras;