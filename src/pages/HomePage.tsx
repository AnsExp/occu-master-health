import { ArrowRight, CheckCircle, Briefcase, Users, Shield, TrendingUp } from 'lucide-react';
import Card from '../components/Card';
import { SITE_NAME } from "../config";

export default function HomePage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100">
                <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 lg:py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div className="flex flex-col justify-center space-y-6">
                            <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 w-fit">
                                ✓ Expertos en Medicina Ocupacional
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                Protege la salud de tu equipo
                            </h1>
                            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                                Consultorías especializadas en medicina ocupacional para empresas que ponen la salud y seguridad de sus colaboradores en el primer lugar.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="#/contact"
                                    className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white shadow-lg transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                    Solicita una asesoría <ArrowRight className="w-4 h-4 ml-2" />
                                </a>
                                <a
                                    href="#servicios"
                                    className="inline-flex items-center justify-center rounded-lg border-2 border-gray-300 px-6 py-3 font-medium text-gray-700 transition-colors hover:border-blue-600 hover:text-blue-600"
                                >
                                    Conoce nuestros servicios
                                </a>
                            </div>
                            <div className="flex gap-8 pt-4 text-sm text-gray-700">
                                <div className="flex items-center gap-2">
                                    <span className="font-semibold text-blue-600">+50</span> empresas confiaron en nosotros
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="font-semibold text-blue-600">24h</span> respuesta garantizada
                                </div>
                            </div>
                        </div>

                        <div className="relative order-first lg:order-last">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl opacity-10 blur-3xl"></div>
                            <div className="relative w-full max-w-md rounded-2xl shadow-2xl bg-white overflow-hidden">
                                <img src="https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?_gl=1*1nzbbzd*_ga*OTQ5OTA3NTkzLjE3NzAxMzM0MzI.*_ga_8JE65Q40S6*czE3NzQzMDAwODQkbzQkZzEkdDE3NzQzMDAxMTkkajI1JGwwJGgw" alt="Hero" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="servicios" className="py-16 sm:py-20 lg:py-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Nuestros Servicios
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Soluciones integrales en medicina ocupacional y salud en el trabajo para empresas de todos los tamaños
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card>
                            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 mb-4">
                                <Shield className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Evaluaciones Médicas</h3>
                            <p className="text-gray-600">
                                Evaluaciones ocupacionales integrales para admisión, periódicos y retiro.
                            </p>
                        </Card>

                        <Card>
                            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-green-100 mb-4">
                                <Briefcase className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Diagnósticos de Riesgos</h3>
                            <p className="text-gray-600">
                                Identificación y documentación de riesgos ocupacionales en tu empresa.
                            </p>
                        </Card>

                        <Card>
                            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-purple-100 mb-4">
                                <Users className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Capacitaciones</h3>
                            <p className="text-gray-600">
                                Programas de entrenamiento en salud y seguridad ocupacional para tu equipo.
                            </p>
                        </Card>

                        <Card>
                            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-orange-100 mb-4">
                                <TrendingUp className="w-6 h-6 text-orange-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Consultoría Legal</h3>
                            <p className="text-gray-600">
                                Asesoramiento en cumplimiento normativo y regulatorio ocupacional.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                                ¿Por qué elegir {SITE_NAME}?
                            </h2>
                            <ul className="space-y-4">
                                <li className="flex gap-4">
                                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Equipo Especializado</h4>
                                        <p className="text-gray-600">Profesionales certificados en medicina ocupacional con amplia experiencia.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Cumplimiento Normativo</h4>
                                        <p className="text-gray-600">Garantizamos adherencia a todas las regulaciones locales e internacionales.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Respuesta Rápida</h4>
                                        <p className="text-gray-600">Atendemos consultas y emergencias en menos de 24 horas laborables.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Soluciones Personalizadas</h4>
                                        <p className="text-gray-600">Adaptamos nuestros servicios a las necesidades específicas de tu empresa.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-blue-600 rounded-2xl p-8 sm:p-10 text-white shadow-xl">
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">¿Listo para comenzar?</h3>
                                    <p className="text-blue-100">
                                        Contacta con nosotros hoy y descubre cómo podemos mejorar la salud ocupacional en tu empresa.
                                    </p>
                                </div>
                                <a
                                    href="#/contact"
                                    className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-medium text-blue-600 transition-colors hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                                >
                                    Contacta con nosotros <ArrowRight className="w-4 h-4 ml-2" />
                                </a>
                                <p className="text-xs text-blue-100">
                                    Sin compromiso • Respuesta en 24 horas
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        La salud ocupacional no es un gasto, es una inversión
                    </h2>
                    <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                        Empresas que nos confían obtienen equipos más saludables, más productivos y mayor cumplimiento normativo.
                    </p>
                    <a
                        href="#/contact"
                        className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 font-medium text-blue-600 transition-colors hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                    >
                        Solicita una asesoría gratis <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                </div>
            </section>
        </>
    );
}