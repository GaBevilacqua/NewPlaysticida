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

  // Dados dos recursos educacionais
  const educationalResources = [
    {
      title: "Tabela Periódica Interativa",
      description: "Explore os elementos químicos de forma dinâmica e interativa.",
      icon: "🎲",
      link: "#"
    },
    {
      title: "Videoaulas Exclusivas",
      description: "Acesse conteúdo em vídeo produzido por especialistas em química.",
      icon: "🎴",
      link: "#"
    },
    {
      title: "Simulador de Reações",
      description: "Experimente combinações químicas virtualmente de forma segura.",
      icon: "♟️",
      link: "#"
    },
    {
      title: "Quiz de Fixação",
      description: "Teste seus conhecimentos com nossos quizzes interativos.",
      icon: "📝",
      link: "#"
    }
  ];

  // Dados de depoimentos
  const testimonials = [
    {
      name: "Flippity",
      text: "Plataforma onde o jogo está hospedado, sendo qualquer problema com o plataforma não é problema diretamente do jog em si.",
      avatar: "⚙️"
    },
    {
      name: "Melhor para PCs",
      text: "O Jogo pode ser jogado em qualquer plataforma, mas pode ser melhor explorado em Computadores ou tablets grandes.",
      avatar: "🖥️"
    },
    {
      name: "Dúvidas e sugestões",
      text: "Qualquer dúvida ou sugestão pode ser feita mandando e-mail para nós.",
      avatar: "🔍"
    }
  ];

  // Dados de estatísticas
  const stats = [
    { value: "Copyright", label: "Licença CC BY_NC_SA 4.0" },
    { value: "Unesp", label: "Universidade" },
    { value: "2017", label: "Ano de lançamento" },
    { value: "2025", label: "Última atualização" }
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
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Aprenda Química de Forma Divertida</h3>
              <p className="text-gray-600 mb-4">
                O Playsticida é um jogo educativo desenvolvido para ajudar estudantes de todos os níveis a compreenderem 
                os conceitos fundamentais da química através de uma abordagem lúdica e interativa.
              </p>
              <p className="text-gray-600 mb-4">
                Combinando elementos de gamificação com conteúdo educacional de qualidade, nossa plataforma torna 
                o processo de aprendizagem mais eficaz e agradável.
              </p>
              <ul className="space-y-2 mt-6">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Desenvolvido por especialistas em educação</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Alinhado com as diretrizes curriculares</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Totalmente gratuito e acessível</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-100 p-6 rounded-xl text-center">
                  <span className="text-4xl">🧪</span>
                  <h4 className="font-semibold mt-2">Experimentação</h4>
                </div>
                <div className="bg-green-100 p-6 rounded-xl text-center">
                  <span className="text-4xl">🎮</span>
                  <h4 className="font-semibold mt-2">Gamificação</h4>
                </div>
                <div className="bg-yellow-100 p-6 rounded-xl text-center">
                  <span className="text-4xl">📚</span>
                  <h4 className="font-semibold mt-2">Conteúdo</h4>
                </div>
                <div className="bg-purple-100 p-6 rounded-xl text-center">
                  <span className="text-4xl">🌱</span>
                  <h4 className="font-semibold mt-2">Biologia</h4>
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
            <h2 className="text-3xl font-bold text-gray-800">Gamificação é o caminho</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Conheça o nosso tipo de jogo de maneira rápida
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
            <h2 className="text-3xl font-bold">Informações Importantes</h2>
            <p className="mt-4 text-lg opacity-90">Em relação ao jogo</p>
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

      {/* Jogue agora Section */}
      <section className="py-16 bg-white" data-aos="fade-up">
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

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50" data-aos="flip-up">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Perguntas Frequentes</h2>
            <p className="mt-4 text-lg text-gray-600">Tire suas dúvidas sobre o Playsticida</p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">O Playsticida é realmente gratuito?</h3>
              <p className="text-gray-600">Sim, nossa plataforma é completamente gratuita para todos os usuários. Acreditamos que a educação de qualidade deve ser acessível a todos.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Para qual faixa etária o jogo é recomendado?</h3>
              <p className="text-gray-600">O Playsticida foi desenvolvido para todas as idades, mas em especial para pessoas que estão estudando toxologia e pesticidas</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Preciso instalar algum software?</h3>
              <p className="text-gray-600">Não, nossa versão web não requer instalação. Basta acessar pelo navegador. Também temos aplicativos disponíveis para dispositivos móveis.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Como posso utilizar o Playsticida em sala de aula?</h3>
              <p className="text-gray-600">Atráves de salas de laboratório, rodando em um PC para até 8 pessoas</p>
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