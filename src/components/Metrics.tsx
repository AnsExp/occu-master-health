import { Briefcase, CheckCircle, MapPin, Shield } from "lucide-react";

function Metrics() {
    const metrics = [
        {
            value: '2',
            title: 'Áreas especializadas',
            description: 'Salud clínica y salud ocupacional integradas bajo un mismo modelo de gestión.',
            icon: Briefcase,
        },
        {
            value: '100%',
            title: 'Cumplimiento normativo',
            description: 'Fichas y certificados alineados a IESS, SART y Ministerio de Trabajo.',
            icon: Shield,
        },
        {
            value: '30+',
            title: 'Especialidades médicas',
            description: 'Staff de profesionales certificados para cubrir necesidades clínicas integrales.',
            icon: CheckCircle,
        },
        {
            value: 'Cobertura',
            title: 'Guayaquil y sectores',
            description: 'Unidades móviles para sectores industrial, marítimo, agrícola y servicios.',
            icon: MapPin,
        },
    ];
    return (
        <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-gradient-to-br from-dark via-dark to-primary py-14 sm:py-16">
            <div className="mx-auto max-w-7xl px-4">
                <div className="rounded-3xl border border-secondary/25 bg-dark/80 p-6 shadow-2xl shadow-dark/40 backdrop-blur sm:p-10">
                    <div className="mx-auto max-w-3xl space-y-4 text-center">
                        <p className="inline-flex w-fit rounded-full border border-secondary/25 bg-light/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-secondary">
                            ¿Por qué OccuMaster Health?
                        </p>
                        <h2 className="text-3xl font-bold leading-tight text-light sm:text-4xl">
                            Calidad, agilidad y confianza
                        </h2>
                        <p className="text-base leading-7 text-light/90 sm:text-lg">
                            Una institución fundada por médicos comprometidos con la excelencia clínica y el bienestar real de pacientes y clientes empresariales.
                        </p>
                    </div>

                    <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
                        {metrics.map((item) => {
                            const Icon = item.icon;
                            return (
                                <article
                                    key={item.title}
                                    className="group rounded-2xl border border-light/20 bg-dark/70 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary/45 hover:bg-dark"
                                >
                                    <div className="mb-4 flex items-center justify-between">
                                        <span className="text-3xl font-bold text-secondary">{item.value}</span>
                                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-light/10 text-accent ring-1 ring-accent/35">
                                            <Icon className="h-5 w-5" />
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-light">{item.title}</h3>
                                    <p className="mt-2 text-sm leading-6 text-light/75">{item.description}</p>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Metrics;