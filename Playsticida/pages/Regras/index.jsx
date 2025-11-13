import Header from "../../components/header";
import Footer from "../../components/footer";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AlignCenter } from "lucide-react";

function Regras() {
  const { t } = useTranslation();
  

  // Dados dos idiomas disponíveis

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800">
      <Header />

      
      <div className="h-20 md:h-17"></div>

     
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-gradient-to-r from-green-400 to-blue-500 opacity-10 w-full h-full"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600 animate-gradient">
            {t("rules")}
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            {t("RI0")}
          </p>
        </div>
      </section>

      {/* Objetivo */}
      <section className="py-16 bg-white" data-aos="fade-up">
        <div className="max-w-6xl mx-auto px-4">
          

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-green-100 rounded-2xl opacity-50 blur"></div>
                <div className="relative bg-gradient-to-r from-green-400 to-teal-500 p-10 rounded-2xl shadow-2xl text-white text-center">
                  <span className="text-7xl">🎯</span>
                  <h3 className="text-2xl font-bold mt-4">Playsticida</h3>
                  <p className="mt-2"> {t("OB0")}</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{t("OB1")}</h3>
              <p className="text-gray-600 mb-4">
               {t("OB2")}
              </p>
              <p className="text-gray-600 mb-6">
              {t("OB3")}
              </p>
              <a
                href= {t("PLAYURL")}
                className="inline-flex items-center bg-green-600 text-white font-semibold px-6 py-4 rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                <span>{t("OB4")}</span>
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Componentes do Jogo */}
      <section className="py-16 bg-green-50" >
        <div className="max-w-6xl mx-auto px-4" data-aos="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4"> {t("CJ0")}</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {t("CJ1")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-green-100 rounded-2xl opacity-50 blur"></div>
                <div className="relative bg-gradient-to-r from-green-400 to-teal-500 p-10 rounded-2xl shadow-2xl text-white text-center">
                  <span className="text-7xl">🎲</span>
                  <h3 className="text-2xl font-bold mt-4"> {t("CJ2")}</h3>
                  <p className="mt-2"> {t("CJ3")}</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{t("CJ4")}</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-3 mt-1">1</span>
                  <span>{t("CJ5")}<strong>{t("CJ6")}</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-3 mt-1">2</span>
                  <span>{t("CJ7")}<strong>{t("CJ8")}</strong> </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-3 mt-1">3</span>
                  <span>{t("CJ9")}<strong>{t("CJ10")}</strong> </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center mt-16" data-aos="fade-left">
            <div className="md:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-green-100 rounded-2xl opacity-50 blur"></div>
                <div className="relative bg-gradient-to-r from-green-400 to-teal-500 p-10 rounded-2xl shadow-2xl text-white text-center">
                  <span className="text-7xl"><img src="/img/Tabuleiro.png" alt="" /></span>
                  <h3 className="text-2xl font-bold mt-4">{t("CJ11")}</h3>
                  <p className="mt-2">{t("CJ12")}</p>
                </div>
              </div>
            </div>
            
            <div className="md:order-1" data-aos="fade-right">
              <h3 className="text-2xl font-bold text-gray-800 mb-4"></h3>
              <p className="text-gray-600 mb-4">
                {t("CJ13")}
              </p>
              <p className="text-gray-600 italic p-4 bg-green-100 rounded-lg border-l-4 border-green-500">
                {t("CJ14")}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center mt-16" data-aos="fade-left">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-green-100 rounded-2xl opacity-50 blur"></div>
                <div className="relative bg-gradient-to-r from-green-400 to-teal-500 p-10 rounded-2xl shadow-2xl text-white text-center">
                  <span className="text-7xl"><img src="img/Agro-Cult-01.png" alt="" /></span>
                  <h3 className="text-2xl font-bold mt-4">{t("CJ15")}</h3>
                  <p className="mt-2">{t("CJ16")}</p>
                </div>
              </div>
            </div>
            
            <div> 
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{t("CJ17")}</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-3 mt-1">A</span>
                  <span>{t("CJ18")}<strong>{t("CJ19")}</strong> </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-3 mt-1">B</span>
                  <span>{t("CJ20")}<strong>{t("CJ21")}</strong> </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-3 mt-1">C</span>
                  <span>{t("CJ22")}<strong>{t("CJ23")}</strong> </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-3 mt-1">D</span>
                  <span>{t("CJ24")}<strong>{t("CJ25")}</strong> </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Regras do Jogo */}
      <section className="py-16 bg-white" >
        <div className="max-w-6xl mx-auto px-4" data-aos="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("RJ0")}</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {t("RJ1")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-green-100 rounded-2xl opacity-50 blur"></div>
                <div className="relative bg-gradient-to-r from-green-400 to-teal-500 p-10 rounded-2xl shadow-2xl text-white text-center">
                  <center><span  className="text-7xl"><img src="https://www.flippity.net/images/Token-Green.png" alt="" /></span></center>
                  <h3 className="text-2xl font-bold mt-4">{t("RJ2")}</h3>
                  <p className="mt-2">{t("RJ3")}</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{t("RJ4")}</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-3 mt-1">1</span>
                  <span><strong>{t("RJ5")}</strong> {t("RJ6")}</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-3 mt-1">2</span>
                  <span><strong>{t("RJ7")}</strong> {t("RJ8")}</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-3 mt-1">3</span>
                  <span><strong>{t("RJ9")}</strong> {t("RJ10")}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center mt-16" data-aos="fade-right">
            <div className="md:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-green-100 rounded-2xl opacity-50 blur"></div>
                <div className="relative bg-gradient-to-r from-green-400 to-teal-500 p-10 rounded-2xl shadow-2xl text-white text-center">
                  <span className="text-7xl"></span>
                  <img src="img/Deck-de-Pesticidas.png" alt="" />
                  <h3 className="text-2xl font-bold mt-4">{t("RJ11")}</h3>
                  <p className="mt-2">{t("RJ12")}</p>
                </div>
              </div>
            </div>
            
            <div className="md:order-1" data-aos="fade-left">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{t("RJ13")}</h3>
              <p className="text-gray-600 mb-4">
                {t("RJ14")}
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-3 mt-1">A</span>
                  <span><strong>{t("RJ15")}</strong>{t("RJ16")}</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-3 mt-1">B</span>
                  <span><strong>{t("RJ17")}</strong> {t("RJ18")}</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-3 mt-1">C</span>
                  <span><strong>{t("RJ19")}</strong> {t("RJ20")}</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-3 mt-1">D</span>
                  <span><strong>{t("RJ21")}</strong> {t("RJ22")}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center mt-16" data-aos="fade-left">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-green-100 rounded-2xl opacity-50 blur"></div>
                <div className="relative bg-gradient-to-r from-green-400 to-teal-500 p-10 rounded-2xl shadow-2xl text-white text-center">
                  <span className="text-2xl font-bold mt-4"><img src="img/Bonus-5-Prendas.png" alt="" />{t("RJ23")}</span>
                  <h3 className="mt-2">{t("RJ24")}</h3>
                  <p className="mt-2"></p>
                </div>
              </div>
            </div>
            
            <div data-aos="fade-right">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{t("RJ25")}</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-3 mt-1">B</span>
                  <span><strong>{t("RJ26")}</strong> {t("RJ27")}</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-3 mt-1">P</span>
                  <span><strong>{t("RJ28")}</strong> {t("RJ29")}</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-3 mt-1">⚠️</span>
                  <span>{t("RJ30")}<strong>{t("RJ31")}</strong> </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center mt-16" data-aos="fade-right">
            <div className="md:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-green-100 rounded-2xl opacity-50 blur"></div>
                <div className="relative bg-gradient-to-r from-green-400 to-teal-500 p-10 rounded-2xl shadow-2xl text-white text-center">
                  <span className="text-7xl"><img src="img/Screenshot from 2025-09-12 16-17-19.png" alt="" /></span>
                  <h3 className="text-2xl font-bold mt-4">{t("RJ32")}</h3>
                  <p className="mt-2">{t("RJ33")}</p>
                </div>
              </div>
            </div>
            
            <div className="md:order-1" data-aos="fade-left">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{t("RJ34")}</h3>
              <p className="text-gray-600 mb-4">
                {t("RJ35")}
              </p>
              <p className="text-gray-600">
               {t("RJ36")}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center mt-16" data-aos="fade-left">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-green-100 rounded-2xl opacity-50 blur"></div>
                <div className="relative bg-gradient-to-r from-green-400 to-teal-500 p-10 rounded-2xl shadow-2xl text-white text-center">
                  <span className="text-7xl"><img src="img/Vaca-Louca.jpg" alt="" /></span>
                  <h3 className="text-2xl font-bold mt-4">{t("RJ37")}</h3>
                  <p className="mt-2">{t("RJ38")}</p>
                </div>
              </div>
            </div>
            
            <div data-aos="fade-right">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{t("RJ39")}</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-3 mt-1">1</span>
                  <span>{t("RJ40")}<strong>{t("RJ42")}</strong> </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-3 mt-1">2</span>
                  <span>{t("RJ43")}<strong>{t("RJ43")}</strong> </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-3 mt-1">3</span>
                  <span>{t("RJ44")}<strong>{t("RJ45")}</strong> </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-3 mt-1">🏁</span>
                  <span>{t("RJ46")}<strong>{t("RJ47")}</strong> </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-teal-600" data-aos="zoom-in-up">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">{t("CA0")}</h2>
            <p className="text-white opacity-90 max-w-3xl mx-auto">
              {t("CA1")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-green-100 rounded-2xl opacity-50 blur"></div>
                <div className="relative bg-white p-10 rounded-2xl shadow-2xl text-center">
                  <span className="text-7xl">🚜</span>
                  <h3 className="text-2xl font-bold mt-4 text-green-800">Playsticida</h3>
                  <p className="mt-2 text-gray-600">{t("CA2")}</p>
                </div>
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-4">{t("CA3")}</h3>
              <p className="text-white opacity-90 mb-6">
               {t("CA4")}
              </p>
              <a
                href={t("PLAYURL")}
                className="inline-flex items-center bg-white text-green-700 font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1"
              >
                <span>{t("CA5")}</span>
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      
      <Footer />
    </div>
  );
}

export default Regras;