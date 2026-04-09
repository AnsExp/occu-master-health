import {
    Mail,
    Phone,
    MapPin,
    MessageCircle
} from "lucide-react";
import Card from "../components/Card";

const ContactPage = () => {
    return (
        <main className="max-w-7xl mx-auto px-4 py-10 sm:py-14">
            <section className="mb-8 sm:mb-10">
                <p className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
                    Estamos para ayudarte
                </p>
                <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
                    Hablemos de la salud ocupacional de tu equipo
                </h1>
                <p className="mt-4 max-w-3xl text-gray-600 leading-relaxed text-base sm:text-lg">
                    Cuéntanos tus necesidades y te propondremos una ruta clara para fortalecer la seguridad,
                    el bienestar y el cumplimiento normativo en tu empresa. Nuestro equipo responde rápido,
                    con soluciones prácticas y acompañamiento real desde el primer contacto.
                </p>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <Card>
                        <h2 className="text-xl font-semibold text-gray-900 mb-2">Envíanos un mensaje</h2>
                        <p className="text-sm text-gray-500 mb-6">
                            Completa el formulario y te contactaremos en menos de 24 horas laborables.
                        </p>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                                <input
                                    type="text"
                                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Tu nombre"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Correo</label>
                                <input
                                    type="email"
                                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="tuemail@ejemplo.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                                <textarea
                                    rows={5}
                                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Cuéntanos brevemente en qué podemos ayudarte..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Enviar mensaje
                            </button>
                        </form>
                    </Card>
                </div>

                <div className="space-y-4">
                    <Card>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Canales directos</h3>
                        <div className="space-y-4 text-sm sm:text-base text-gray-700">
                            <div className="flex items-center space-x-3">
                                <Mail className="w-4 h-4 text-blue-600" />
                                <a href="mailto:info@occumasterhealth.com" className="hover:text-blue-600 transition-colors">
                                    info@occumasterhealth.com
                                </a>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="w-4 h-4 text-blue-600" />
                                <a href="tel:+593999999999" className="hover:text-blue-600 transition-colors">
                                    +593 99 999 9999
                                </a>
                            </div>
                            <div className="flex items-center space-x-3">
                                <MessageCircle className="w-4 h-4 text-green-600" />
                                <a
                                    href="https://wa.me/593999999999"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-green-600 transition-colors"
                                >
                                    WhatsApp
                                </a>
                            </div>
                            <div className="flex items-center space-x-3">
                                <MapPin className="w-4 h-4 text-red-600" />
                                <span>Av. Principal 123, Guayaquil, Ecuador</span>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>
        </main>
    );
};

export default ContactPage;