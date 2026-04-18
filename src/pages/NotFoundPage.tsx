import { ArrowLeft, Home, Search, Stethoscope } from "lucide-react";
import Card from "../components/Card";

export default function NotFoundPage() {

    const navLinks = [
        { href: "/", label: "Inicio" },
        { href: "/about", label: "Nosotros" },
        // { href: "/services", label: "Servicios" },
        { href: "/contact", label: "Contacto" },
        // { href: "/plans", label: "Planes" },
        // { href: "/reports", label: "Denuncias" },
    ];

    return (
        <main className="min-h-[70vh] bg-gradient-to-br from-blue-50 to-blue-100">
            <section className="max-w-6xl mx-auto px-4 py-14 sm:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                        <p className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
                            Error 404
                        </p>
                        <h1 className="mt-4 text-5xl sm:text-6xl font-bold text-gray-900 leading-none">
                            Página no encontrada
                        </h1>
                        <p className="mt-5 text-lg text-gray-600 leading-relaxed max-w-xl">
                            La ruta que intentaste abrir no existe o fue movida. Podemos ayudarte a volver
                            al contenido principal de Occu Master Health y continuar con tu consulta.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-3">
                            <a
                                href="#/"
                                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                <Home className="w-4 h-4 mr-2" />
                                Ir al inicio
                            </a>
                            <a
                                href="#/contact"
                                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 transition-colors hover:border-blue-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Contactar soporte
                            </a>
                        </div>
                    </div>

                    <Card>
                        <div className="text-center">
                            <div className="mx-auto mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                                <Stethoscope className="w-8 h-8" />
                            </div>
                            <p className="text-7xl sm:text-8xl font-black text-blue-600 tracking-tight">404</p>
                            <p className="mt-3 text-gray-600">
                                Revisa estas rutas para continuar navegando:
                            </p>

                            <div className="mt-6 space-y-3 text-left">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        className="flex items-center gap-2 rounded-lg bg-gray-50 px-4 py-3 text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-700"
                                    >
                                        <Search className="w-4 h-4" />
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </Card>
                </div>
            </section>
        </main>
    );
}