import Header from "../../components/header";
import Footer from "../../components/footer";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AlignCenter } from "lucide-react";

function Contato() {

     useEffect(() => {
        AOS.init({
          duration: 1200,
          once: true,
        });
      }, []);

    const { t} = useTranslation();

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
                <span className="text-7xl">👤</span>
                <h3 className="text-2xl font-bold mt-4">Faculdade de Ciência e Técnologia</h3>
                <p className="mt-2">Conversar com o Prof. Dout. Maurício Araújo </p>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Contato</h3>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span className="text-gray-700">+55 (18) 3221-6000</span>
              </div>
              
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span className="text-gray-700">contato@playsticida.com</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t">
              <h4 className="text-lg font-medium text-gray-800 mb-3 flex items-center">
                <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Horário de Funcionamento
              </h4>
              
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span className="font-medium">Segunda a Sexta:</span>
                  <span>08:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sábado:</span>
                  <span>09:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Domingo:</span>
                  <span >Fechado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      <section className="py-16 bg-green-500" data-aos="fade-up">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">


          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Localização</h2>
            <p className="text-white mb-4">
              R. Roberto Símonsen, 305 - Centro Educacional, Pres. Prudente - SP, 19060-900
            </p>
            

         

            
            
            
         </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-green-99 rounded-1g opacity-50 "></div>
              <div className="relative bg-gradient-to-r from-green-400 to-teal-500 p-10 rounded-sm shadow-1g text-white text-center">
                <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3696.133492686153!2d-51.410716987373256!3d-22.120885410176516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9493f43f0ff7f359%3A0x3ff5d10b95e4acbf!2sUnesp%20-%20Faculdade%20de%20Ci%C3%AAncias%20e%20Tecnologia%20(FCT)!5e0!3m2!1spt-BR!2sbr!4v1757599936942!5m2!1spt-BR!2sbr" 
              width="500" 
              height="450" 
              style={{border:0}} s
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
              </div>
            </div>
          </div>
          
          
        </div>
      </section>


      <Footer />
    </div>
  );
}

export default Contato;