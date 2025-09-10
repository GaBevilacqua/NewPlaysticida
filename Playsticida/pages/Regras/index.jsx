import Header from "../../components/header";
import Footer from "../../components/footer";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";




function Regras() {
    const { t, i18n } = useTranslation();

  // Dados dos idiomas disponíveis
  const languages = [
    { code: "pt", flag: "🇧🇷", name: "Português" },
    { code: "en", flag: "🇬🇧", name: "English" },
    { code: "es", flag: "🇪🇸", name: "Español" },
    { code: "it", flag: "🇮🇹", name: "Italiano" },
  ];

    useEffect(() => {
    AOS.init({
      duration: 1000, // tempo da animação
      once: true, // anima só uma vez (se false, anima toda vez que entra na tela)
    });
  }, []);

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

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-green-100 rounded-2xl opacity-50 blur"></div>
              <div className="relative bg-gradient-to-r from-green-400 to-teal-500 p-10 rounded-2xl shadow-2xl text-white text-center">
                <span className="text-7xl">🎲</span>
                <h3 className="text-2xl font-bold mt-4">Playsticida</h3>
                <p className="mt-2">Aprendizado através da diversão</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Jogue agora</h2>
            <p className="text-gray-600 mb-4">
              Venha conhecer o jogo Playsticida e aumentar mais seu aprendizado no mundo da Química de forma divertida e interativa.
            </p>
            <p className="text-gray-600 mb-6">
              Nosso jogo educativo foi desenvolvido para ajudar você a compreender conceitos complexos através de 
              desafios envolventes e uma jogabilidade cativante.
            </p>
            <a
              href="https://www.flippity.net/bg.php?k=1-7Akba-QSpdjX6O0W7f_FILNqZWlzvueFpiRQziiG9A"
              className="inline-flex items-center bg-green-600 text-white font-semibold px-6 py-4 rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:-translate-y-1"
            >
              <span>Jogar Agora</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
            
            
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-500">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">


          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Jogue agora</h2>
            <p className="text-gray-600 mb-4">
              Venha conhecer o jogo Playsticida e aumentar mais seu aprendizado no mundo da Química de forma divertida e interativa.
            </p>
            <p className="text-gray-600 mb-6">
              Nosso jogo educativo foi desenvolvido para ajudar você a compreender conceitos complexos através de 
              desafios envolventes e uma jogabilidade cativante.
            </p>
            <a
              href="https://www.flippity.net/bg.php?k=1-7Akba-QSpdjX6O0W7f_FILNqZWlzvueFpiRQziiG9A"
              className="inline-flex items-center bg-green-600 text-white font-semibold px-6 py-4 rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:-translate-y-1"
            >
              <span>Jogar Agora</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
            
            
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-green-100 rounded-2xl opacity-50 blur"></div>
              <div className="relative bg-gradient-to-r from-green-400 to-teal-500 p-10 rounded-2xl shadow-2xl text-white text-center">
                <span className="text-7xl">🎲</span>
                <h3 className="text-2xl font-bold mt-4">Playsticida</h3>
                <p className="mt-2">Aprendizado através da diversão</p>
              </div>
            </div>
          </div>
          
          
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-green-100 rounded-2xl opacity-50 blur"></div>
              <div className="relative bg-gradient-to-r from-green-400 to-teal-500 p-10 rounded-2xl shadow-2xl text-white text-center">
                <span className="text-7xl">🎲</span>
                <h3 className="text-2xl font-bold mt-4">Playsticida</h3>
                <p className="mt-2">Aprendizado através da diversão</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Jogue agora</h2>
            <p className="text-gray-600 mb-4">
              Venha conhecer o jogo Playsticida e aumentar mais seu aprendizado no mundo da Química de forma divertida e interativa.
            </p>
            <p className="text-gray-600 mb-6">
              Nosso jogo educativo foi desenvolvido para ajudar você a compreender conceitos complexos através de 
              desafios envolventes e uma jogabilidade cativante.
            </p>
            <a
              href="https://www.flippity.net/bg.php?k=1-7Akba-QSpdjX6O0W7f_FILNqZWlzvueFpiRQziiG9A"
              className="inline-flex items-center bg-green-600 text-white font-semibold px-6 py-4 rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:-translate-y-1"
            >
              <span>Jogar Agora</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
            
            
          </div>
        </div>
      </section>


       <section className="py-16 bg-green-500">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">


          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Jogue agora</h2>
            <p className="text-gray-600 mb-4">
              Venha conhecer o jogo Playsticida e aumentar mais seu aprendizado no mundo da Química de forma divertida e interativa.
            </p>
            <p className="text-gray-600 mb-6">
              Nosso jogo educativo foi desenvolvido para ajudar você a compreender conceitos complexos através de 
              desafios envolventes e uma jogabilidade cativante.
            </p>
            <a
              href="https://www.flippity.net/bg.php?k=1-7Akba-QSpdjX6O0W7f_FILNqZWlzvueFpiRQziiG9A"
              className="inline-flex items-center bg-green-600 text-white font-semibold px-6 py-4 rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:-translate-y-1"
            >
              <span>Jogar Agora</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
            
            
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-green-100 rounded-2xl opacity-50 blur"></div>
              <div className="relative bg-gradient-to-r from-green-400 to-teal-500 p-10 rounded-2xl shadow-2xl text-white text-center">
                <span className="text-7xl">🎲</span>
                <h3 className="text-2xl font-bold mt-4">Playsticida</h3>
                <p className="mt-2">Aprendizado através da diversão</p>
              </div>
            </div>
          </div>
          
          
        </div>
      </section>

      

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-green-100 rounded-2xl opacity-50 blur"></div>
              <div className="relative bg-gradient-to-r from-green-400 to-teal-500 p-10 rounded-2xl shadow-2xl text-white text-center">
                <span className="text-7xl">🎲</span>
                <h3 className="text-2xl font-bold mt-4">Playsticida</h3>
                <p className="mt-2">Aprendizado através da diversão</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Jogue agora</h2>
            <p className="text-gray-600 mb-4">
              Venha conhecer o jogo Playsticida e aumentar mais seu aprendizado no mundo da Química de forma divertida e interativa.
            </p>
            <p className="text-gray-600 mb-6">
              Nosso jogo educativo foi desenvolvido para ajudar você a compreender conceitos complexos através de 
              desafios envolventes e uma jogabilidade cativante.
            </p>
            <a
              href="https://www.flippity.net/bg.php?k=1-7Akba-QSpdjX6O0W7f_FILNqZWlzvueFpiRQziiG9A"
              className="inline-flex items-center bg-green-600 text-white font-semibold px-6 py-4 rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:-translate-y-1"
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


export default Regras;