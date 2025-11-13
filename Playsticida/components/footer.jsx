import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

  // Links úteis
  const pageLinks = [
    {
      name: t("pageLinks.como_jogar.name"),
      href: t("pageLinks.como_jogar.href"),
      icon: <BookOpen size={16} className="mr-2" />,
      external: true
    },
    {
      name: t("pageLinks.sobre_nos.name"),
      href: "/sobre",
      icon: <Users size={16} className="mr-2" />,
      external: false
    },
    {
      name: t("pageLinks.regras.name"),
      href: "/regras",
      icon: <FileText size={16} className="mr-2" />,
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
              <br></br>
              {t("FRASE")}
            </p>
            
          </div>

          {/* Pages Links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-lg flex items-center">
              <Award size={20} className="mr-2" />
             {t("NAV")}
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
              {t("CONT")}
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
            
           
          </div>

          
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center text-sm mb-4 md:mb-0">
            <span>&copy; {currentYear} {t("DIR")}</span>
          </div>
          

        </div>
      </div>
    </footer>
  );
}

export default Footer;