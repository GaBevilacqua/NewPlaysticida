import Header from "../../components/header";
import Footer from "../../components/footer";
import { useTranslation } from "react-i18next";



function Sobre() {
    const { t} = useTranslation();
    const stats = [
    { value: "Copyright", label: t("stats.copyright") },
    { value: "Unesp", label: t("stats.university") },
    { value: "2017", label: t("stats.releaseYear") },
    { value: "2026", label: t("stats.lastUpdate") }
  ];

  // Dados dos idiomas disponíveis
  
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
            {t("about")}
          </h1>
          
        </div>
      </section>

      <section className="py-16  bg-green-50" data-aos="fade-up">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-green-100 rounded-2xl opacity-50 blur"></div>
              <div className="relative bg-gradient-to-r from-green-400 to-teal-500 p-10 rounded-2xl shadow-2xl text-white text-center">
                <span className="text-7xl"><img src="img/Deck-de-Pesticidas.png" alt="" /></span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("SO0")}</h2>
            <p className="text-gray-600 mb-4">
              {t("SO1")}
            </p>
            <p className="text-gray-600 mb-6">
              {t("SO2")}
            </p>
          </div>
        </div>
      </section>


      <section className="py-16 bg-white" data-aos="fade-up">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("SO3")}</h2>
            <p className="text-gray-600 mb-4">
              {t("SO4")}
            </p>
            <p className="text-gray-600 mb-6">
              {t("SO5")}
              <a
                href="https://www.even3.com.br/anais/jalequimlevel4/329169-playsticida--um-jogo-para-auxiliar-no-ensino-e-na-aprendizagem-de-toxicologia-em-pesticidas/"
               className="text-green-500 hover:text-green-600 hover:underline transition-colors duration-200 ml-2 text-"
              >{t("ART")}</a>.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-green-100 rounded-2xl opacity-50 blur"></div>
              <div className="relative bg-gradient-to-r from-green-400 to-teal-500 p-10 rounded-2xl shadow-2xl text-white text-center">
                <span className="text-7xl"><img src="img/Vaca-Louca.jpg" alt="" /></span>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-16 bg-white" data-aos="fade-up">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-1 gap-10 items-center">
          <div>
            <h2 className="text-center text-3xl font-bold text-gray-800 mb-4">{t("PUB")}</h2>
            <p className="text-gray-600 mb-4">
              PINTO, P. T.; LIMA, M. F. A tradução na área de química orgânica: da adaptação à tradução literal. <b>Estudos Linguísticos (São Paulo. 1978)</b>, v. 47, n. 2, p. 573–585, 17 out. 2018.  DOI: <a href="https://doi.org/10.21165/el.v47i2.2050" target="_blank"  style={{ color: 'blue' }} rel="noopener noreferrer">https://doi.org/10.21165/el.v47i2.2050</a>
            </p>
            <p className="text-gray-600 mb-6">
              ROCHA, C. F.; LIMA, M. F.; SERPA, T. Uma terminologia bilÍngue para a química de compostos organofosforados: um estudo baseado no uso de corpora na composição de glossários de linguagem de especialidade em realidade aumentada. In: FELIZARDO, A. B.; SILVA, E. B.; FIGUEIRA-BORGES, G. (Orgs.). <b>Linguagem e Ensino em Percursos Interculturais</b>, 1. ed., Campinas: Pontes Editores, 2020.
            </p>
            <p className="text-gray-600 mb-6">
              SOUZA, J. V.; PINTO, P. T.; LIMA, M. F. Malationa, malation ou malatiom? A variação denominativa no processo de criação de um glossário bilíngue da área de química de pesticidas. <b>Acta Scientiarum. Language and Culture</b>, v. 44, 2022, <a href="https://doi.org/10.4025/actascilangcult.v44i1.55894" style={{color: 'blue'}} target="_blank" rel="noopener noreferrer">https://doi.org/10.4025/actascilangcult.v44i1.55894</a>.
            </p>
            <p className="text-gray-600 mb-6">
              SOUZA, J. V. A questão terminológica dos organofosforados na química de pesticidas: uma abordagem baseada em corpus. <b>Estudos Linguísticos (São Paulo. 1978)</b>, v. 48, n. 3, p. 1620–1638, 18 dez. 2019. DOI: <a href="https://doi.org/10.21165/el.v48i3.2270" style={{color: 'blue'}} target="_blank" rel="noopener noreferrer">https://doi.org/10.21165/el.v48i3.2270</a>
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white" data-aos="fade-up">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-1 gap-10 items-center">
          <div>
            <h2 className="text-center text-3xl font-bold text-gray-800 mb-4">{t("MINFO")}</h2>
            <p className="text-gray-600 mb-4">
             {t("MINFO_DESC")}<a href="https://www.ibilce.unesp.br/#!/departamentos/letras-modernas/projetos/evolve-en/" target="_blank"  style={{ color: 'blue' }} rel="noopener noreferrer"> https://www.ibilce.unesp.br/#!/departamentos/letras-modernas/projetos/evolve-en/</a>
            </p>
           
          </div>
        </div>
      </section>

      {/* Créditos */}
      <section className="py-16 bg-gray-100" data-aos="flip-up">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("CA6")}</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {t("CA7")}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold text-center text-gray-800 mb-4">UNIVERSIDADE ESTADUAL PAULISTA</h3>
            <h4 className="text-lg text-center text-gray-700 mb-6">"JÚLIO DE MESQUITA FILHO"</h4>
            
            <p className="text-gray-600 mb-6 text-center">
              {t("CA8")}
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-600">
              <div>Paula Tavares Pinto</div>
              <div>José Víctor de Souza</div>
              <div>William da Silva Lopes</div>
              <div>Maurício Araújo Dias</div>
              <div>Danilo Medeiros Eler</div>
              <div>Almir Olivette Artero</div>
              <div>Daniel Haruyuki Momo Vespa</div>
              <div>Raissa Maria Trindade Oliveira</div>
              <div>Abni Emily Vieira</div>
              <div>André Miguel Martínez Junior</div>
              <div>Bianca Furukawa de Godoi Passerine</div>
              <div>Daniel Felipe Jacinto da Silva</div>
              <div>Daniely Reis Santos</div>
              <div>Evelyn Regina Marcolino de Silva (Quem escolheu o nome)</div>
              <div>Fabiana Beneduzzi</div>
              <div>Grazielly Caroline Teodoro</div>
              <div>Ligia Maria Landi</div>
              <div>Pauline Richeti Bernardi</div>
              <div>Priscila Teixeira Ananias</div>
              <div>Safira Gomes Esteves</div>
              <div>Stephane de Almeida Alves</div>
              <div>Talita Serpa</div>
              <div>Gabriel Bevilacqua Barros</div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                {t("CA9")}
                <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/" className="text-green-600 hover:underline">
                  http://creativecommons.org/licenses/by-nc-sa/4.0/
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

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


export default Sobre;