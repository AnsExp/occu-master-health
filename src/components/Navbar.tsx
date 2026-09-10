import { useState } from "react";
import { Menu, X } from "lucide-react";
import { SITE_NAME } from "../config";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#", label: "Inicio" },
    { href: "#services", label: "Servicios" },
    { href: "#specialities", label: "Especialidades" },
    { href: "#companies", label: "Empresas" },
    { href: "#plans", label: "Planes" },
    { href: "#about", label: "Nosotros" },
    { href: "#contact", label: "Contacto" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-secondary/20 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 hover:opacity-80 transition-opacity">
            <a href="#" className="flex items-center gap-2">
              <span className="sm:inline text-xl font-bold text-primary">
                {SITE_NAME}
              </span>
            </a>
          </div>

          {/* Links en desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-2 font-medium text-dark transition-all duration-200 hover:bg-light hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
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
              className="inline-flex items-center justify-center rounded-lg p-2 text-dark transition-all duration-200 hover:bg-light hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
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
        <div className="space-y-1 border-t border-secondary/20 bg-gradient-to-b from-white to-light px-4 py-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-4 py-3 font-medium text-dark transition-all duration-200 hover:bg-secondary/15 hover:text-secondary active:bg-secondary/25 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}