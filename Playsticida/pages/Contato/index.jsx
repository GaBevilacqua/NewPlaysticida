import Header from "../../components/header";
import Footer from "../../components/footer";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AlignCenter } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";


function Contato() {

  


  const { t} = useTranslation();

     useEffect(() => {
        AOS.init({
          duration: 1200,
          once: true,
        });
      }, []);


  // Dados de depoimentos COM I18N
const socialNetworks = [
  {
    name: "Instagram",
    user: "@fcatunesp",
    text: "Siga-nos no Instagram",
    icon: <FontAwesomeIcon icon={faInstagram} color="#E4405F" size="2x" />,
    href: "https://www.instagram.com/fctunesp/",
 
  },
  {
    name: "Facebook",
    user: "/UnespPrudente",
    text: "Curta nossa página",
    icon: <FontAwesomeIcon icon={faFacebook} color="#1877F2" size="2x" />,
    href: "https://www.facebook.com/UnespPrudente/",

  },
  {
    name: "YouTube",
    user: "@fct_unesp",
    text: "Inscreva-se no canal",
    icon: <FontAwesomeIcon icon={faYoutube} color="#FF0000" size="2x" />,
    href: "https://www.youtube.com/@fct_unesp",
 
  }
];




  // Dados dos idiomas disponíveis

    return(
      
            <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800">
      <Header />

      {/* Espaço para o header fixo */}
      <div className="h-18 md:h-17"></div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-gradient-to-r from-green-400 to-blue-500 opacity-10 w-full h-full"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600 animate-gradient">
            {t("contact")}
          </h1>
          
        </div>
      </section>
      
      
       <section className="py-16 bg-white" data-aos="fade-up">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-green-100 rounded-2xl opacity-50 blur"></div>
              <div className="relative bg-gradient-to-r from-green-400 to-teal-500 p-10 rounded-2xl shadow-2xl text-white text-center">
                <span className="text-7xl">🎓</span>
                <h3 className="text-2xl font-bold mt-4">{t("FA0")}</h3>
                <p className="mt-2">{t("FA1")} </p>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{t("contact")}</h3>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span className="text-gray-700">ma.dias@unesp.br</span>
              </div>
            </div>



            
            <div className="mt-4 pt-4 border-t">
              <h4 className="text-lg font-medium text-gray-800 mb-3 flex items-center">
                <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                {t("HF0")}
              </h4>
              
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span className="font-medium"> {t("HF1")}</span>
                  <span>08:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium"> {t("HF2")}</span>
                  <span>09:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium"> {t("HF3")}</span>
                  <span > {t("HF4")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

     <section className="py-16 bg-green-400" data-aos="fade-up">
  <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
    <div>
      <h2 className="text-3xl font-bold text-white mb-4">{t("LOC")}</h2>
      <p className="text-white text-xl mb-4">
        R. Roberto Símonsen, 305 - Centro Educacional, Pres. Prudente - SP, 19060-900
      </p>
    </div>
    
    <div className="flex justify-center">
      <div className="relative w-full">
        <div className="absolute -inset-3 bg-green-99 rounded-lg opacity-50"></div>
        <div className="relative bg-gradient-to-r from-green-400 to-teal-500 p-5 rounded-sm shadow-lg text-white text-center">
          {/* Container responsivo para o iframe */}
          <div className="relative w-full h-0 pb-[75%]"> {/* 4:3 aspect ratio */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3696.133492686153!2d-51.410716887373256!3d-22.120885410176516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9493f43f0ff7f359%3A0x3ff5d10b95e4acbf!2sUnesp%20-%20Faculdade%20de%20Ci%C3%AAncias%20e%20Tecnologia%20(FCT)!5e0!3m2!1spt-BR!2sbr!4v1757599936942!5m2!1spt-BR!2sbr" 
              className="absolute top-0 left-0 w-full h-full border-0"
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização no mapa"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Redes sociais */}
<section className="py-16 " data-aos="fade-up">
  <div className="max-w-6xl mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold">{t("CRS")}</h2>
     
    </div>
    
    <div className="grid md:grid-cols-3 gap-4 ">
      {socialNetworks.map((social, index) => (
        <a 
          key={index} 
          href={social.href} 
          target="_blank" 
          rel="noopener noreferrer"
          className=" backdrop-blur-sm p-6 rounded-2xl shadow-lg bg-green-300 hover:bg-green-400 transition-all duration-300 block"
        >
          <div className="flex items-center  ">
            <span className="text-3xl mr-3">{social.icon}</span>
            <div>
              <h4 className="font-semibold text-2xl">{social.name}</h4>
              <p className="text-lg opacity-80">{social.user}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  </div>
</section>
      <Footer />
    </div>
  );
}

export default Contato;