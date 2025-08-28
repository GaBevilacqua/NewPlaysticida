import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom"; // 👈 importa o Link do React Router

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full bg-green-700 text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img
            src="https://i.ibb.co/7zSwhLj/Playsticida.png"
            alt="Logo"
            className="h-12 md:h-16 transition-all duration-200"
          />
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-6 text-lg font-medium">
          {/* link externo permanece com <a> */}
          <a 
            href="https://i.ibb.co/4fPgYws/Regras.png" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-green-200 transition-colors duration-200 px-3 py-2 rounded-md"
          >
            PDF
          </a>

          {/* link interno usa <Link> */}
          <Link 
            to="/sobre" 
            className="hover:text-green-200 transition-colors duration-200 px-3 py-2 rounded-md"
          >
            Sobre
          </Link>

          {/* link interno usa <Link> */}
          <Link 
            to="/sobre" 
            className="hover:text-green-200 transition-colors duration-200 px-3 py-2 rounded-md"
          >
            Contato
          </Link>

          {/* link interno usa <Link> */}
          <Link 
            to="/sobre" 
            className="hover:text-green-200 transition-colors duration-200 px-3 py-2 rounded-md"
          >
            Regras
          </Link>
        </nav>

        

        {/* Mobile menu toggle */}
        <button 
          className="md:hidden p-2 hover:bg-green-600 rounded-md transition-colors duration-200"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <nav className="md:hidden bg-green-800 px-4 py-4 border-t border-green-600">
          <div className="flex flex-col space-y-3">
            <a 
              href="https://i.ibb.co/4fPgYws/Regras.png" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="px-3 py-2 hover:bg-green-700 rounded-md transition-colors duration-200"
            >
              Como não jogar
            </a>

            <Link 
              to="/sobre" 
              onClick={() => setOpen(false)}
              className="px-3 py-2 hover:bg-green-700 rounded-md transition-colors duration-200"
            >
              Sobre
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
