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
            Conheça as regras do Playsticida, um jogo educativo sobre agrotóxicos e agricultura sustentável
          </p>
        </div>
      </section>

      {/* Seção de Introdução */}
      <section className="py-16 bg-white" data-aos="fade-up">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Sobre o Playsticida</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Playsticida é um jogo educativo criado para estudantes e cidadãos interessados em aprender sobre 
              a temática dos agrotóxicos, seus impactos no meio ambiente e o uso correto desses produtos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-green-100 rounded-2xl opacity-50 blur"></div>
                <div className="relative bg-gradient-to-r from-green-400 to-teal-500 p-10 rounded-2xl shadow-2xl text-white text-center">
                  <span className="text-7xl">🎯</span>
                  <h3 className="text-2xl font-bold mt-4">Playsticida</h3>
                  <p className="mt-2">O alvo do estudo</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Objetivo do Jogo</h3>
              <p className="text-gray-600 mb-4">
                O jogo tem como objetivo fundamental conscientizar os jogadores sobre os benefícios e malefícios 
                dos agrotóxicos, incentivando uma agricultura sustentável.
              </p>
              <p className="text-gray-600 mb-6">
                Os jogadores (fazendeiros) competem em equipes de até 8 participantes para obter a maior 
                produtividade em suas fazendas, aprendendo sobre o uso correto dos agrotóxicos.
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
        </div>
      </section>

      {/* Componentes do Jogo */}
      <section className="py-16 bg-green-50" >
        <div className="max-w-6xl mx-auto px-4" data-aos="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Componentes do Jogo</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Conheça os elementos que compõem o jogo Playsticida e suas funcionalidades
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-green-100 rounded-2xl opacity-50 blur"></div>
                <div className="relative bg-gradient-to-r from-green-400 to-teal-500 p-10 rounded-2xl shadow-2xl text-white text-center">
                  <span className="text-7xl">🎲</span>
                  <h3 className="text-2xl font-bold mt-4">Dados</h3>
                  <p className="mt-2">Três dados com funções específicas</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Tipos de Dados</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-3 mt-1">1</span>
                  <span><strong>Dado multicolorido:</strong> Classes toxicológicas (I, II, III, IV) + 2 coringas</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-3 mt-1">2</span>
                  <span><strong>Dado branco:</strong> Classificação de uso (herbicida, insecticida, fungicida, etc.)</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-3 mt-1">3</span>
                  <span><strong>Dado branco:</strong> Classificação química (Organoclorado, Organofosforado, etc.)</span>
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
                  <h3 className="text-2xl font-bold mt-4">Tabuleiro</h3>
                  <p className="mt-2">Percurso com diversas atividades</p>
                </div>
              </div>
            </div>
            
            <div className="md:order-1" data-aos="fade-right">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Estrutura do Tabuleiro</h3>
              <p className="text-gray-600 mb-4">
                O tabuleiro representa diversas atividades que usam agrotóxicos (culturas agrícolas, pecuária, etc.).
                Inclui casas de sorte/revés com consequências como:
              </p>
              <p className="text-gray-600 italic p-4 bg-green-100 rounded-lg border-l-4 border-green-500">
                "O excesso de agrotóxicos utilizados provocou a contaminação do córrego próximo a sua propriedade, retroceda 10 casas."
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center mt-16" data-aos="fade-left">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-green-100 rounded-2xl opacity-50 blur"></div>
                <div className="relative bg-gradient-to-r from-green-400 to-teal-500 p-10 rounded-2xl shadow-2xl text-white text-center">
                  <span className="text-7xl"><img src="img/Agro-Cult-01.png" alt="" /></span>
                  <h3 className="text-2xl font-bold mt-4">Cartas</h3>
                  <p className="mt-2">Quatro tipos diferentes</p>
                </div>
              </div>
            </div>
            
            <div> data-aos="fade-right"
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Tipos de Cartas</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-3 mt-1">A</span>
                  <span><strong>Informações do agrotóxico:</strong> Detalhes sobre os produtos</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-3 mt-1">B</span>
                  <span><strong>Sorte/Revés:</strong> Eventos aleatórios com consequências</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-3 mt-1">C</span>
                  <span><strong>Cartas bônus:</strong> Pontuação adicional (5, 10 ou 15 prendas)</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-3 mt-1">D</span>
                  <span><strong>Cartas punição:</strong> Perda de pontos (3, 5 ou 7 prendas)</span>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Regras do Jogo</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Entenda como jogar e as mecânicas que tornam o Playsticida uma experiência educativa e divertida
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-green-100 rounded-2xl opacity-50 blur"></div>
                <div className="relative bg-gradient-to-r from-green-400 to-teal-500 p-10 rounded-2xl shadow-2xl text-white text-center">
                  <center><span  className="text-7xl"><img src="https://www.flippity.net/images/Token-Green.png" alt="" /></span></center>
                  <h3 className="text-2xl font-bold mt-4">Preparação</h3>
                  <p className="mt-2">Organização inicial do jogo</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Organização Inicial</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-3 mt-1">1</span>
                  <span><strong>Organização das cartas:</strong> Antes do início do jogo as cartas já foram automaticamente embaralhadas.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-3 mt-1">2</span>
                  <span><strong>Ordem dos fazendeiros:</strong> Cada integrante joga os dados brancos. Quem obtiver o maior valor inicia o jogo e ganha 5 prendas.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-3 mt-1">3</span>
                  <span><strong>Sequência:</strong> O próximo jogador será aquele que estiver na sequência em sentido horário ao primeiro fazendeiro.</span>
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
                  <h3 className="text-2xl font-bold mt-4">Dinâmica</h3>
                  <p className="mt-2">Como o jogo funciona</p>
                </div>
              </div>
            </div>
            
            <div className="md:order-1" data-aos="fade-left">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Dinâmica do Jogo</h3>
              <p className="text-gray-600 mb-4">
                Assim que a ordem dos fazendeiros for estabelecida, jogam-se os 3 dados e, na sequência, é retirada uma carta referente a um agrotóxico.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-3 mt-1">A</span>
                  <span><strong>3 coincidências:</strong> Ganha 15 prendas</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-3 mt-1">B</span>
                  <span><strong>2 coincidências:</strong> Ganha 10 prendas</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-3 mt-1">C</span>
                  <span><strong>1 coincidência:</strong> Ganha 5 prendas</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-3 mt-1">D</span>
                  <span><strong>Nenhuma coincidência:</strong> Perde 5 prendas ou volta 2 casas</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center mt-16" data-aos="fade-left">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-green-100 rounded-2xl opacity-50 blur"></div>
                <div className="relative bg-gradient-to-r from-green-400 to-teal-500 p-10 rounded-2xl shadow-2xl text-white text-center">
                  <span className="text-7xl"><img src="img/Bonus-5-Prendas.png" alt="" /></span>
                  <h3 className="text-2xl font-bold mt-4">Especiais</h3>
                  <p className="mt-2">Cartas bônus e punição</p>
                </div>
              </div>
            </div>
            
            <div data-aos="fade-right">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Cartas Especiais</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-3 mt-1">B</span>
                  <span><strong>Cartas bônus:</strong> Sempre que um fazendeiro estiver em uma cultura e retirar uma carta referente a um agrotóxico apropriado, ele deverá pegar uma carta bônus de 5, 10 ou 15 prendas.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-3 mt-1">P</span>
                  <span><strong>Cartas punição:</strong> Sempre que um fazendeiro for obrigado a retirar uma carta punição, ele deverá ser punido em 3, 5 ou 7 prendas pela aplicação errada do agrotóxico.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-3 mt-1">⚠️</span>
                  <span><strong>Atenção:</strong> As cartas de bônus e de punição compartilham o mesmo baralho.</span>
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
                  <h3 className="text-2xl font-bold mt-4">Sorte/Revés</h3>
                  <p className="mt-2">Eventos aleatórios</p>
                </div>
              </div>
            </div>
            
            <div className="md:order-1" data-aos="fade-left">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Sorte ou Revés</h3>
              <p className="text-gray-600 mb-4">
                O fazendeiro que parar na casa "Sorte/Revés" deverá pegar uma carta do monte para descobrir se será bonificado ou punido.
              </p>
              <p className="text-gray-600">
                Se a face do dado multicolorido estiver mostrando um coringa, escolha a carta de "Sorte/Revés" número 1. Se o coringa não estiver presente, escolha a carta cujo número corresponder à soma dos dois dados brancos.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center mt-16" data-aos="fade-left">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-green-100 rounded-2xl opacity-50 blur"></div>
                <div className="relative bg-gradient-to-r from-green-400 to-teal-500 p-10 rounded-2xl shadow-2xl text-white text-center">
                  <span className="text-7xl"><img src="img/Vaca-Louca.jpg" alt="" /></span>
                  <h3 className="text-2xl font-bold mt-4">Final</h3>
                  <p className="mt-2">Término do jogo</p>
                </div>
              </div>
            </div>
            
            <div data-aos="fade-right">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Final do Jogo e Pontuação</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-3 mt-1">1</span>
                  <span><strong>Chegada:</strong> O fazendeiro que chegar ao final primeiro recebe 30 prendas.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-3 mt-1">2</span>
                  <span><strong>Pontuação:</strong> Todos os fazendeiros terão suas prendas somadas, mesmo os que não retornaram à sua fazenda.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-3 mt-1">3</span>
                  <span><strong>Desempate:</strong> Em caso de empate, somam-se às prendas todas as classes toxicológicas.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-3 mt-1">🏁</span>
                  <span><strong>Vencedor:</strong> Ganha o fazendeiro que possuir a maior pontuação.</span>
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
            <h2 className="text-3xl font-bold text-white mb-4">Pronto para jogar?</h2>
            <p className="text-white opacity-90 max-w-3xl mx-auto">
              Experimente o Playsticida e aprenda sobre agrotóxicos e agricultura sustentável de forma divertida
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-green-100 rounded-2xl opacity-50 blur"></div>
                <div className="relative bg-white p-10 rounded-2xl shadow-2xl text-center">
                  <span className="text-7xl">🚜</span>
                  <h3 className="text-2xl font-bold mt-4 text-green-800">Playsticida</h3>
                  <p className="mt-2 text-gray-600">Aprendizado através da diversão</p>
                </div>
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-4">Comece agora mesmo</h3>
              <p className="text-white opacity-90 mb-6">
                Acesse o jogo online e comece a aprender sobre agrotóxicos de forma interativa e divertida.
              </p>
              <a
                href="https://www.flippity.net/bg.php?k=1-7Akba-QSpdjX6O0W7f_FILNqZWlzvueFpiRQziiG9A"
                className="inline-flex items-center bg-white text-green-700 font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1"
              >
                <span>Jogar Agora</span>
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Créditos */}
      <section className="py-16 bg-gray-100" data-aos="flip-up">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Créditos</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Conheça a equipe por trás do desenvolvimento do Playsticida
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold text-center text-gray-800 mb-4">UNIVERSIDADE ESTADUAL PAULISTA</h3>
            <h4 className="text-lg text-center text-gray-700 mb-6">"JÚLIO DE MESQUITA FILHO"</h4>
            
            <p className="text-gray-600 mb-6 text-center">
              Playsticida idealizado por Marcelo de Freitas Lima, com as contribuições de:
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-600">
              <div>Paula Taracas Pinto</div>
              <div>José Víctor de Souza</div>
              <div>William de Silva Lopes</div>
              <div>Maurício Araújo Dias</div>
              <div>Danilo Medeiros Eléc</div>
              <div>Arthur Oliveira Artero</div>
              <div>Daniel Harpayali Monro Vespa</div>
              <div>Raissa Maria Trindade Oliveira</div>
              <div>Anni Emily Vieira</div>
              <div>André Miguel Martínez Junito</div>
              <div>Blanca Frunkana de Godel Passerino</div>
              <div>Daniel Peñero Jacinto da Silva</div>
              <div>Daniley Reis Santos</div>
              <div>Evelyn Regina Marcelino de Silva (madrinha que escolheu o nome)</div>
              <div>Fabiana Benedetti</div>
              <div>Gratelly Caroline Teodoro</div>
              <div>Ligia Maria Landi</div>
              <div>Pauline Richeli Bernardi</div>
              <div>Priscila Teresira Ananisa</div>
              <div>Sáfita Gomes Esteves</div>
              <div>Stephen de Almeida Abres</div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Licenciada sob CC BY-NC-SA 4.0. Para ver uma cópia desta licença, visite{" "}
                <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/" className="text-green-600 hover:underline">
                  http://creativecommons.org/licenses/by-nc-sa/4.0/
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Regras;