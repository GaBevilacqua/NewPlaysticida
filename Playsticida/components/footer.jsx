function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        <div>
          <a href="/">
            <img
              src="https://i.ibb.co/7zSwhLj/Playsticida.png"
              alt="Logo"
              className="h-16"
            />
          </a>
        </div>

        <div>
          <h4 className="font-bold text-white mb-2">Páginas</h4>
          <ul className="space-y-1">
            <li>
              <a 
                href="https://i.ibb.co/4fPgYws/Regras.png" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200"
              >
                Como jogar
              </a>
            </li>
            <li>
              <a 
                href="quemsomos.html" 
                className="hover:text-white transition-colors duration-200"
              >
                Sobre
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-2">Contatos</h4>
          <ul className="space-y-1">
            <li>
              <a 
                href="mailto:exemplo@email.com" 
                className="hover:text-white transition-colors duration-200"
              >
                📧 E-mail
              </a>
            </li>
            <li>
              <a 
                href="tel:+551199999999" 
                className="hover:text-white transition-colors duration-200"
              >
                ☎ Telefone
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;