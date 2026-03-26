import { useState, useEffect } from "react";
import { Menu, X, Download, BookOpen, Mail, Info, Award, PlaneIcon, PlayCircle, BugPlayIcon, Play, Languages } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const languages = [
    { code: "pt", flag: "🇧🇷", name: "Português" },
    { code: "en", flag: "🇬🇧", name: "English" },
    { code: "es", flag: "🇪🇸", name: "Español" },
    { code: "it", flag: "🇮🇹", name: "Italiano" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fechar menu ao clicar em um link
  const handleLinkClick = () => {
    setOpen(false);
  };

  // Mudar idioma
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguageMenuOpen(false);
    setOpen(false);
  };

  // Links de navegação
  const navLinks = [
    {
      name: t("navLinks.sobre.name"),
      to: "/sobre",
      icon: <Info size={18} className="mr-1" />,
      external: false
    },
    {
      name: t("navLinks.contato.name"),
      to: "/contato",
      icon: <Mail size={18} className="mr-1" />,
      external: false
    },
    {
      name: t("navLinks.regras.name"),
      to: "/regras",
      icon: <BookOpen size={18} className="mr-1" />,
      external: false
    },
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-white/95 backdrop-blur-md shadow-lg py-1" 
        : "bg-gradient-to-r from-green-400 to-teal-500 py-2"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center group"
          onClick={handleLinkClick}
        >
          <img
            src="https://i.ibb.co/7zSwhLj/Playsticida.png"
            alt="Logo Playsticida"
            className={`h-12 md:h-14 transition-all duration-300 ${
              scrolled ? "filter brightness-75" : ""
            } group-hover:scale-105`}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link, index) => (
            link.external ? (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center px-4 py-2 rounded-full transition-all duration-300 ${
                  scrolled
                    ? "text-gray-700 hover:bg-green-50 hover:text-green-600"
                    : "text-white hover:bg-white/20"
                } font-medium`}
              >
                {link.icon}
                {link.name}
              </a>
            ) : (
              <Link
                key={index}
                to={link.to}
                className={`flex items-center px-4 py-2 rounded-full transition-all duration-300 ${
                  scrolled
                    ? "text-gray-700 hover:bg-green-50 hover:text-green-600"
                    : "text-white hover:bg-white/20"
                } ${
                  location.pathname === link.to 
                    ? scrolled 
                      ? "bg-green-100 text-green-700 font-semibold" 
                      : "bg-white/30 text-white font-semibold"
                    : "font-medium"
                }`}
              >
                {link.icon}
                {link.name}
              </Link>
            )
          ))}
          
          {/* Seletor de Idiomas */}
          <div className="relative ml-2">
            <button
              onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
              className={`flex items-center px-3 py-2 rounded-full transition-all duration-300 ${
                scrolled
                  ? "text-gray-700 hover:bg-green-50 hover:text-green-600"
                  : "text-white hover:bg-white/20"
              }`}
            >
              <Languages size={18} className="mr-1" />
              <span className="mr-1">{currentLanguage.flag}</span>
              <span className="text-sm">{currentLanguage.code.toUpperCase()}</span>
            </button>

            {/* Dropdown de Idiomas */}
            {languageMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => changeLanguage(language.code)}
                    className={`flex items-center w-full px-4 py-2 text-left hover:bg-green-50 transition-colors ${
                      currentLanguage.code === language.code ? "bg-green-100 text-green-700" : "text-gray-700"
                    }`}
                  >
                    <span className="text-lg mr-3">{language.flag}</span>
                    <span>{language.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Botão de Jogar com destaque */}
          <a
            href={t("PLAYURL")}
            target="_blank"
            rel="noopener noreferrer"
            className={`ml-4 flex items-center px-5 py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
              scrolled
                ? "bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-lg hover:shadow-green-200"
                : "bg-white text-green-600 shadow-lg hover:shadow-white/50"
            }`}
          >
            <Play size={18} className="mr-2" />
            {t("JA5")}
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button 
          className={`md:hidden p-2 rounded-md transition-all duration-300 ${
            scrolled 
              ? "text-gray-700 hover:bg-green-100" 
              : "text-white hover:bg-white/20"
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        open ? "max-h-120 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
      } ${scrolled ? "bg-white shadow-lg" : "bg-green-700"}`}>
        <nav className="px-4 py-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link, index) => (
              link.external ? (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                  className={`flex items-center px-4 py-3 rounded-lg transition-colors duration-200 ${
                    scrolled 
                      ? "text-gray-700 hover:bg-green-50" 
                      : "text-white hover:bg-green-600"
                  }`}
                >
                  {link.icon}
                  <span className="ml-2">{link.name}</span>
                </a>
              ) : (
                <Link
                  key={index}
                  to={link.to}
                  onClick={handleLinkClick}
                  className={`flex items-center px-4 py-3 rounded-lg transition-colors duration-200 ${
                    scrolled 
                      ? "text-gray-700 hover:bg-green-50" 
                      : "text-white hover:bg-green-600"
                  } ${
                    location.pathname === link.to 
                      ? scrolled 
                        ? "bg-green-100 text-green-700 font-semibold" 
                        : "bg-green-600 text-white font-semibold"
                      : ""
                  }`}
                >
                  {link.icon}
                  <span className="ml-2">{link.name}</span>
                </Link>
              )
            ))}
            
            {/* Seletor de Idiomas Mobile */}
            <div className="my-2">
              <div className={`px-4 py-3 rounded-lg ${scrolled ? "bg-gray-50" : "bg-green-600"}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className={`flex items-center ${scrolled ? "text-gray-700" : "text-white"}`}>
                    <Languages size={18} className="mr-2" />
                    {t("idioma")}
                  </span>
                  <span className={`text-sm ${scrolled ? "text-gray-500" : "text-green-200"}`}>
                    {currentLanguage.flag} {currentLanguage.name}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => changeLanguage(language.code)}
                      className={`flex items-center justify-center px-3 py-2 rounded-md transition-colors ${
                        currentLanguage.code === language.code
                          ? scrolled
                            ? "bg-green-500 text-white"
                            : "bg-white text-green-600"
                          : scrolled
                          ? "bg-gray-200 hover:bg-gray-300 text-gray-700"
                          : "bg-green-500 hover:bg-green-400 text-white"
                      }`}
                    >
                      <span className="mr-2">{language.flag}</span>
                      <span className="text-sm">{language.code.toUpperCase()}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Separador */}
            <div className={`my-2 border-t ${scrolled ? "border-gray-200" : "border-green-600"}`}></div>
            
            {/* Botão Jogar Agora na versão mobile */}
            <a
              href={t("PLAYURL")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className={`flex items-center justify-center px-4 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                scrolled
                  ? "bg-gradient-to-r from-green-500 to-teal-500 text-white"
                  : "bg-white text-green-600"
              }`}
            >
              <Award size={18} className="mr-2" />
              {t("JA5")}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;