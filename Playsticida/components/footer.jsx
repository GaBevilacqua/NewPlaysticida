import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Mail, 
  Phone, 
  Users, 
  Award, 
  Heart, 
  Github, 
  Instagram, 
  Facebook,
  Youtube,
  FileText,
  Info,
  ExternalLink
} from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  // Links úteis
  const pageLinks = [
    {
      name: "Como Jogar",
      href: "https://i.ibb.co/4fPgYws/Regras.png",
      icon: <BookOpen size={16} className="mr-2" />,
      external: true
    },
    {
      name: "Sobre Nós",
      href: "/sobre",
      icon: <Users size={16} className="mr-2" />,
      external: false
    },
    {
      name: "Regras Completas",
      href: "/regras",
      icon: <FileText size={16} className="mr-2" />,
      external: false
    },
    {
      name: "Termos de Uso",
      href: "/termos",
      icon: <Info size={16} className="mr-2" />,
      external: false
    }
  ];

  // Links de contato
  const contactLinks = [
    {
      name: "exemplo@email.com",
      href: "mailto:exemplo@email.com",
      icon: <Mail size={16} className="mr-2" />
    },
    {
      name: "(11) 99999-9999",
      href: "tel:+5511999999999",
      icon: <Phone size={16} className="mr-2" />
    }
  ];

  // Links sociais
  const socialLinks = [
    {
      name: "GitHub",
      href: "#",
      icon: <Github size={20} />,
      color: "hover:text-gray-400"
    },
    {
      name: "Instagram",
      href: "#",
      icon: <Instagram size={20} />,
      color: "hover:text-pink-400"
    },
    {
      name: "Facebook",
      href: "#",
      icon: <Facebook size={20} />,
      color: "hover:text-blue-400"
    },
    {
      name: "YouTube",
      href: "#",
      icon: <Youtube size={20} />,
      color: "hover:text-red-400"
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <img
            src="https://i.ibb.co/7zSwhLj/Playsticida.png"
            
          />
            <p className="mb-4 text-sm">
              Transformando o aprendizado de química em uma experiência divertida e envolvente para todos.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 bg-gray-700 rounded-full transition-all duration-300 ${social.color} hover:bg-gray-600`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Pages Links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-lg flex items-center">
              <Award size={20} className="mr-2" />
              Navegação
            </h4>
            <ul className="space-y-3">
              {pageLinks.map((link, index) => (
                <li key={index}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm hover:text-white transition-colors duration-200 group"
                    >
                      {link.icon}
                      {link.name}
                      <ExternalLink size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="flex items-center text-sm hover:text-white transition-colors duration-200"
                    >
                      {link.icon}
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-lg flex items-center">
              <Mail size={20} className="mr-2" />
              Contato
            </h4>
            <ul className="space-y-3">
              {contactLinks.map((contact, index) => (
                <li key={index}>
                  <a
                    href={contact.href}
                    className="flex items-center text-sm hover:text-white transition-colors duration-200"
                  >
                    {contact.icon}
                    {contact.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <h4 className="font-bold text-white mt-6 mb-4 text-lg">
              Nosso Horário
            </h4>
            <p className="text-sm">
              Segunda a Sexta: 9h - 18h
            </p>
            <p className="text-sm">
              Sábado: 10h - 14h
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-white mb-4 text-lg">
              Fique por Dentro
            </h4>
            <p className="text-sm mb-4">
              Inscreva-se para receber atualizações sobre novos recursos e conteúdos.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent text-white placeholder-gray-400 text-sm"
                required
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white py-2 px-4 rounded-lg font-medium hover:from-green-600 hover:to-teal-600 transition-all duration-300 text-sm"
              >
                Inscrever-se
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center text-sm mb-4 md:mb-0">
            <span>&copy; {currentYear} Playsticida. Todos os direitos reservados.</span>
          </div>
          
          <div className="flex items-center">
            <span className="text-sm mr-2">Feito com</span>
            <Heart size={16} className="text-red-400 mx-1" />
            <span className="text-sm ml-1">para educadores e estudantes</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;