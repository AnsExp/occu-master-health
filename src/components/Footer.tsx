import logo from '../../public/logo.svg'
import { SITE_NAME } from "../config";

export default function Footer() {
    const navLinks = [
        { href: "#", label: "Inicio" },
        { href: "#about", label: "Nosotros" },
        { href: "#services", label: "Servicios" },
        { href: "#contact", label: "Contacto" },
        { href: "#plans", label: "Planes" },
        { href: "#reports", label: "Denuncias" },
    ];
    return (
        <footer className="border-t border-secondary/20 bg-dark text-light/85">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex items-center">
                        <img
                            src={logo}
                            alt="Logo"
                            className="h-10 w-auto"
                        />
                        <span className="ml-2 text-lg font-semibold text-light">
                            {SITE_NAME}
                        </span>
                    </div>

                    <div className="flex flex-col space-y-2">
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href} className="transition-colors hover:text-secondary">
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <div className="space-y-2">
                        <p className="font-semibold text-light">Contáctanos</p>
                        <p>Email: <a href="mailto:occumasterhealt@outlook.com" className="transition-colors hover:text-accent">occumasterhealt@outlook.com</a></p>
                        <p>Teléfono: <a href="tel:+593993191669" className="transition-colors hover:text-accent">099 319 1669</a></p>
                        <p>Dirección: Av. Principal 123, Guayaquil, Ecuador</p>
                    </div>
                </div>

                <div className="mt-8 border-t border-light/20 pt-4 text-center text-sm text-light/65">
                    © {new Date().getFullYear()} {SITE_NAME}. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
};
