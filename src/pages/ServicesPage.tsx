import { Shield, Briefcase, Users, TrendingUp, CheckCircle, Award, Clock, Zap, ArrowRight } from 'lucide-react';
import Card from '../components/Card';

const ServicesPage = () => {
    const services = [
        {
            id: 1,
            title: "Evaluaciones Médicas Ocupacionales",
            icon: Shield,
            color: "blue",
            description: "Evaluaciones integrales de salud ocupacional diseñadas para proteger a tus colaboradores.",
            features: [
                "Evaluaciones para admisión de personal",
                "Exámenes periódicos y seguimiento",
                "Evaluaciones de retiro laboral",
                "Pruebas especializadas según el puesto",
                "Documentación íntegra y confidencialidad"
            ],
            details: "Nuestros médicos especialistas realizan evaluaciones completas que incluyen historia clínica ocupacional, examen físico, pruebas de laboratorio y estudios complementarios según la naturaleza de los riesgos ocupacionales."
        },
        {
            id: 2,
            title: "Diagnóstico de Riesgos Ocupacionales",
            icon: Briefcase,
            color: "green",
            description: "Identificación y evaluación exhaustiva de riesgos en tu ambíente laboral.",
            features: [
                "Evaluación de puestos de trabajo",
                "Identificación de riesgos químicos, físicos y biológicos",
                "Matriz de riesgos documentada",
                "Recomendaciones de control",
                "Reportes detallados y ejecutivos"
            ],
            details: "Realizamos inspecciones exhaustivas en el sitio de trabajo, evaluamos condiciones ambientales y generamos reportes documentados con recomendaciones prácticas para mitigar riesgos."
        },
        {
            id: 3,
            title: "Capacitación en Salud y Seguridad",
            icon: Users,
            color: "purple",
            description: "Programas de entrenamiento adaptados a las necesidades específicas de tu empresa.",
            features: [
                "Capacitaciones en seguridad ocupacional",
                "Entrenamientos sobre riesgos específicos",
                "Primeros auxilios y RCP",
                "Protocolo de emergencias",
                "Talleres de bienestar y ergonomía"
            ],
            details: "Programas educativos diseñados para empoderar a tus colaboradores con conocimiento práctico sobre prevención de riesgos, seguridad en el trabajo y promoción de la salud ocupacional."
        },
        {
            id: 4,
            title: "Consultoría Legal y Normativa",
            icon: TrendingUp,
            color: "orange",
            description: "Asesoramiento experto en cumplimiento normativo ocupacional.",
            features: [
                "Auditorías de cumplimiento normativo",
                "Asesoramiento legal en materia ocupacional",
                "Revisión de políticas de seguridad",
                "Apoyo en trámites regulatorios",
                "Actualización en legislación vigente"
            ],
            details: "Nos mantenemos actualizados en toda la legislación ocupacional local e internacional para asegurar que tu empresa cumpla con todos los requisitos legales y normativas vigentes."
        }
    ];

    const benefits = [
        { icon: Award, title: "Equipo Certificado", description: "Profesionales especializados en medicina ocupacional" },
        { icon: Clock, title: "Respuesta Rápida", description: "Atendemos consultas y emergencias en 24 horas" },
        { icon: Zap, title: "Eficiencia Comprobada", description: "Procesos optimizados que minimizan interrupciones" },
        { icon: CheckCircle, title: "Cumplimiento Garantizado", description: "Adherencia total a regulaciones locales e internacionales" }
    ];

    const getColorClasses = (color: string) => {
        const colors: { [key: string]: { bg: string; text: string; light: string } } = {
            blue: { bg: "bg-blue-100", text: "text-blue-600", light: "text-blue-50" },
            green: { bg: "bg-green-100", text: "text-green-600", light: "text-green-50" },
            purple: { bg: "bg-purple-100", text: "text-purple-600", light: "text-purple-50" },
            orange: { bg: "bg-orange-100", text: "text-orange-600", light: "text-orange-50" }
        };
        return colors[color] || colors.blue;
    };

    return (
        <>
            <section className="px-4 py-14 sm:py-16">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">Nuestros servicios</p>
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {services.map((service) => {
                            const colors = getColorClasses(service.color);
                            const IconComponent = service.icon;

                            return (
                                <Card key={service.id}>
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className={`${colors.bg} rounded-lg p-3 flex-shrink-0`}>
                                            <IconComponent className={`w-6 h-6 ${colors.text}`} />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold text-gray-900 mb-1">
                                                {service.title}
                                            </h3>
                                            <p className="text-sm text-gray-600">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                        {service.details}
                                    </p>

                                    <div className="space-y-2">
                                        <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                                            Lo que incluye:
                                        </p>
                                        <ul className="space-y-2">
                                            {service.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <CheckCircle className={`w-4 h-4 ${colors.text} flex-shrink-0 mt-0.5`} />
                                                    <span className="text-sm text-gray-700">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="bg-gray-50 py-16 sm:py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            ¿Por qué elegirnos?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Nos diferenciamos por nuestro compromiso con la excelencia y el bienestar real de tus colaboradores
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((benefit, idx) => {
                            const BenefitIcon = benefit.icon;
                            return (
                                <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                                    <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                        <BenefitIcon className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                        {benefit.title}
                                    </h4>
                                    <p className="text-gray-600 text-sm">
                                        {benefit.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-16 sm:py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Nuestro Proceso
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Un enfoque sistemático y transparente en cada servicio
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { step: 1, title: "Diagnóstico", desc: "Evaluamos tus necesidades específicas" },
                            { step: 2, title: "Planificación", desc: "Diseñamos una estrategia personalizada" },
                            { step: 3, title: "Ejecución", desc: "Implementamos las soluciones acordadas" },
                            { step: 4, title: "Seguimiento", desc: "Monitoreamos resultados y mejoramos" }
                        ].map((item) => (
                            <div key={item.step} className="relative">
                                <div className="bg-blue-600 text-white rounded-full w-14 h-14 flex items-center justify-center font-bold text-xl mb-4">
                                    {item.step}
                                </div>
                                <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                                {item.step < 4 && (
                                    <div className="hidden md:block absolute top-7 left-full w-full h-0.5 bg-blue-200"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        ¿Listo para mejorar la salud ocupacional de tu empresa?
                    </h2>
                    <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                        Contacta con nosotros hoy y descubre cómo nuestros servicios pueden beneficiar
                        a tu organización. Ofrecemos consultas iniciales sin compromiso.
                    </p>
                    <a
                        href="#/contact"
                        className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 font-medium text-blue-600 transition-colors hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                    >
                        Solicita tu consulta <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                </div>
            </section>
        </>
    );
};

export default ServicesPage;