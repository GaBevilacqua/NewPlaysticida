import Header from "../../components/header";
import Footer from "../../components/footer";

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
      <Header />

      {/* Espaço para o header fixo */}
      <div className="h-20 md:h-24"></div>

      {/* Hero */}
      <section className="text-center py-16">
        <h1 className="text-3xl md:text-5xl font-bold">
          Bem-vindo ao mundo de Playsticida!
        </h1>
        <p className="mt-4 text-lg">Versão em português do Brasil</p>
      </section>

      {/* Idiomas */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-6 text-center">
          <a href="index.html">
            <h1>🇧🇷</h1>
            <p>Português</p>
          </a>
          <a href="ENG/index.html">
            <h1>🇬🇧</h1>
            <p>Inglês</p>
          </a>
          <a href="ESP/index.html">
            <h1>🇪🇸</h1>
            <p>Espanhol</p>
          </a>
          <a href="ITA/index.html">
            <h1>🇮🇹</h1>
            <p>Italiano</p>
          </a>
          <a href="FRE/index.html">
            <h1>🇫🇷</h1>
            <p>Francês</p>
          </a>
        </div>
      </section>

      {/* Jogue agora */}
      <section className="bg-green-200 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="text-center">
            🎲
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Jogue agora</h2>
            <p className="mb-4">
              Venha conhecer o jogo Playsticida e aumentar mais seu aprendizado no mundo da Química.
            </p>
            <a
              href="https://www.flippity.net/bg.php?k=1-7Akba-QSpdjX6O0W7f_FILNqZWlzvueFpiRQziiG9A"
              className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700"
            >
              Jogar
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
