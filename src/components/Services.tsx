import { Shield, Briefcase, Users, TrendingUp, CheckCircle, Phone } from 'lucide-react';
import Card from './Card';

function Services() {
    const services = [
        {
            title: 'Medicina ocupacional',
            content: 'Evaluaciones de ingreso, periódicas y de retiro. Fichas médicas ocupacionales y certificación de aptitud laboral para trabajadores de todos los sectores.',
            target: 'Empresas',
            icon: Briefcase,
        },
        {
            title: 'Especialidades médicas',
            content: 'Cardiología, endocrinología, ginecología, neurología, traumatología, psicología y más de 30 especialidades con seguimiento integral.',
            target: 'Pacientes',
            icon: Users,
        },
        {
            title: 'Laboratorio clínico',
            content: 'Biometría hemática, química sanguínea, perfil lipídico, glucosa y otros exámenes con resultados precisos y oportunos para decisiones confiables.',
            target: 'Ambos',
            icon: CheckCircle,
        },
        {
            title: 'Diagnóstico por imágenes',
            content: 'Ecografías, radiografías y estudios de imagen con protocolos de calidad para respaldar decisiones médicas con mayor certeza.',
            target: 'Ambos',
            icon: Shield,
        },
        {
            title: 'Unidades móviles',
            content: 'Llevamos servicios de salud a su empresa con brigadas médicas, evaluaciones y fichas ocupacionales sin detener su operación.',
            target: 'Empresas',
            icon: TrendingUp,
        },
        {
            title: 'Atención a domicilio',
            content: 'Consulta médica y seguimiento en el hogar para pacientes que requieren control continuo sin necesidad de desplazarse al centro médico.',
            target: 'Pacientes',
            icon: Phone,
        }
    ];
    return (
        <section className="px-4 py-14 sm:py-16">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
                <div className="max-w-3xl space-y-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">Nuestros servicios</p>
                    <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                        Todo lo que necesita en un solo lugar.
                    </h2>
                    <p className="text-base leading-7 text-slate-600 sm:text-lg">
                        Servicios médicos ambulatorios diseñados para dar respuesta rápida, confiable y de calidad tanto a pacientes particulares como al sector empresarial.
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {services.map((service) => {
                        const Icon = service.icon;

                        return (
                            <Card key={service.title}>
                                <div className="space-y-5">
                                    <div className="flex items-start justify-between gap-4">
                                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                                            <Icon className="h-5 w-5" />
                                        </span>
                                        <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-blue-700">
                                            {service.target}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>

                                    <p className="leading-7 text-slate-600">{service.content}</p>
                                </div>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;