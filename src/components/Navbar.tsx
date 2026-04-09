import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../public/logo.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#/", label: "Inicio" },
    { href: "#/about", label: "Nosotros" },
    { href: "#/services", label: "Servicios" },
    { href: "#/contact", label: "Contacto" },
    { href: "#/plans", label: "Planes" },
    { href: "#/reports", label: "Denuncias" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 hover:opacity-80 transition-opacity">
            <a href="#/" className="flex items-center gap-2">
              <img className="h-10 w-auto" src={logo} alt="Logo" />
              <span className="hidden sm:inline text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                OccuMaster Health
              </span>
            </a>
          </div>

          {/* Links en desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg text-gray-700 font-medium transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Botón menú móvil */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú</span>
              {isOpen ? (
                <X className="w-6 h-6 transition-transform duration-300 rotate-90" />
              ) : (
                <Menu className="w-6 h-6 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-100 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-gradient-to-b from-white to-blue-50 border-t border-gray-100 px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-lg text-gray-700 font-medium transition-all duration-200 hover:bg-blue-100 hover:text-blue-600 active:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}