import logo from '../../public/logo.svg'

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex items-center">
                        <img
                            src={logo}
                            alt="Logo"
                            className="h-10 w-auto"
                        />
                        <span className="ml-2 text-lg font-semibold text-white">
                            OccuMaster Health
                        </span>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <a href="#/about" className="hover:text-white">
                            Nosotros
                        </a>
                        <a href="#/services" className="hover:text-white">
                            Servicios
                        </a>
                        <a href="#/contact" className="hover:text-white">
                            Contacto
                        </a>
                    </div>

                    <div className="space-y-2">
                        <p className="text-white font-semibold">Contáctanos</p>
                        <p>Email: <a href="mailto:info@occumasterhealth.com" className="hover:text-white">info@occumasterhealth.com</a></p>
                        <p>Teléfono: <a href="tel:+593999999999" className="hover:text-white">+593 99 999 9999</a></p>
                        <p>Dirección: Av. Principal 123, Guayaquil, Ecuador</p>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
                    © {new Date().getFullYear()} OccuMaster Health. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
};
