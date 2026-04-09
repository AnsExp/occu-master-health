import { Heart, Target, Lightbulb, Users, CheckCircle, ArrowRight } from 'lucide-react';
import Card from '../components/Card';

export default function AboutPage() {
    const values = [
        {
            icon: Heart,
            title: "Integridad",
            description: "Actuamos con transparencia y ética en cada relación profesional"
        },
        {
            icon: Target,
            title: "Excelencia",
            description: "Buscamos la mejor calidad en cada servicio que prestamos"
        },
        {
            icon: Lightbulb,
            title: "Innovación",
            description: "Nos adaptamos a nuevas metodologías y mejores prácticas"
        },
        {
            icon: Users,
            title: "Compromiso",
            description: "Nos dedicamos genuinamente al bienestar de tus colaboradores"
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 sm:py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                            Sobre Occu Master Health
                        </h1>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Una empresa fundada por médicos especialistas con pasión por transformar
                            la salud ocupacional en las empresas ecuatorianas
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 sm:py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-blue-100 rounded-lg p-3">
                                    <Target className="w-6 h-6 text-blue-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">Nuestra Misión</h2>
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                                Proporcionar servicios integrales de medicina ocupacional de alta calidad
                                que protejan la salud y seguridad de los colaboradores, garanticen el cumplimiento
                                normativo y contribuyan al éxito sostenible de las empresas.
                            </p>
                        </Card>

                        <Card>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-green-100 rounded-lg p-3">
                                    <Lightbulb className="w-6 h-6 text-green-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">Nuestra Visión</h2>
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                                Ser la empresa líder en medicina ocupacional en Ecuador, reconocida
                                por su excelencia clínica, innovación en servicios y genuino compromiso
                                con el bienestar integral de los trabajadores.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* History Section */}
            <section className="bg-gray-50 py-16 sm:py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Nuestra Historia
                        </h2>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <Card>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                <strong>Occu Master Health</strong> nace de la visión de dos médicos especialistas
                                en medicina ocupacional que identificaron una brecha importante en el mercado ecuatoriano:
                                la falta de servicios integrales, especializados y de calidad en salud ocupacional.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Después de años trabajando en el sector de salud ocupacional, nuestros fundadores decidieron
                                crear una empresa que no solo cumpliera con regulaciones normativas, sino que realmente se
                                comprometiera con mejorar la salud y el bienestar de los colaboradores en las empresas ecuatorianas.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Hoy, con un equipo de profesionales altamente capacitados, continuamos con esa misión:
                                ofrecer soluciones integrales en medicina ocupacional que generen impacto real en las organizaciones
                                que nos confían su responsabilidad de cuidar a su gente.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Cada evaluación, cada capacitación y cada recomendación que hacemos está respaldada por
                                expertise médico sólido y un profundo compromiso con la excelencia.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Founders Section */}
            <section className="py-16 sm:py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Nuestros Fundadores
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Médicos especialistas con años de experiencia en medicina ocupacional
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                name: "Dr. [Nombre Fundador 1]",
                                specialization: "Médico Especialista en Medicina Ocupacional",
                                postgrad: "Posgrado en Medicina Ocupacional",
                                bio: "Con más de 15 años de experiencia en medicina ocupacional, ha liderado programas de salud en empresas de diversos sectores, desarrollando un profundo conocimiento en evaluación de riesgos y promoción de la salud laboral."
                            },
                            {
                                name: "Dr. [Nombre Fundador 2]",
                                specialization: "Médico Especialista en Medicina Ocupacional",
                                postgrad: "Posgrado en Medicina Ocupacional",
                                bio: "Especialista en diagnóstico y manejo de enfermedades ocupacionales con experiencia en consultoría empresarial. Apasionado por implementar sistemas integrales de seguridad y salud en el trabajo."
                            }
                        ].map((founder, idx) => (
                            <Card key={idx}>
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                                        {founder.name.charAt(4)}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                                            {founder.name}
                                        </h3>
                                        <p className="text-sm font-semibold text-blue-600 mb-1">
                                            {founder.specialization}
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            {founder.postgrad}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    {founder.bio}
                                </p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="bg-gray-50 py-16 sm:py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Nuestros Valores
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Principios que guían cada decisión y acción
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, idx) => {
                            const ValueIcon = value.icon;
                            return (
                                <Card key={idx}>
                                    <div className="text-center">
                                        <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                                            <ValueIcon className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                                            {value.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm">
                                            {value.description}
                                        </p>
                                    </div>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Why Trust Us */}
            <section className="py-16 sm:py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Por qué confiar en nosotros
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {[
                            { title: "Fundadores Médicos", desc: "Liderados por médicos especialistas con posgrado en medicina ocupacional" },
                            { title: "Experiencia Comprobada", desc: "Años de trayectoria exitosa en medicina ocupacional empresarial" },
                            { title: "Enfoque Integral", desc: "Servicios completos que van más allá del cumplimiento normativo" },
                            { title: "Actualización Constante", desc: "Nos mantenemos al día con legislación y mejores prácticas internacionales" },
                            { title: "Compromiso Real", desc: "Genuino interés en el bienestar de los trabajadores de nuestros clientes" },
                            { title: "Disponibilidad", desc: "Respuesta rápida y acompañamiento cercano en cada proyecto" }
                        ].map((reason, idx) => (
                            <div key={idx} className="flex gap-4 items-start">
                                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">{reason.title}</h4>
                                    <p className="text-gray-600 text-sm">{reason.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-blue-600 text-white py-12 sm:py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        {[
                            { number: "50+", label: "Empresas atendidas" },
                            { number: "2", label: "Médicos fundadores" },
                            { number: "100%", label: "Cumplimiento normativo" },
                            { number: "24h", label: "Respuesta garantizada" }
                        ].map((stat, idx) => (
                            <div key={idx}>
                                <div className="text-4xl sm:text-5xl font-bold mb-2">{stat.number}</div>
                                <p className="text-blue-100">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 sm:py-20">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Queremos ser parte de tu equipo
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        Si compartes nuestro compromiso por la salud ocupacional, estamos listos
                        para trabajar juntos y hacer la diferencia en tu organización.
                    </p>
                    <a
                        href="#/contact"
                        className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-3 font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Conversemos <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                </div>
            </section>
        </>
    );
}