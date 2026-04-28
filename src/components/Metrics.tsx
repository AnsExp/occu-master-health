import { Briefcase, CheckCircle, MapPin, Shield } from "lucide-react";

function Metrics() {
    return (
        <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-14 sm:py-16">
            <div className="mx-auto max-w-7xl px-4">
                <div className="rounded-3xl border border-slate-700/80 bg-slate-900/70 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur sm:p-10">
                    <div className="mx-auto max-w-3xl space-y-4 text-center">
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-400">¿Por qué OccuMaster Health?</p>
                        <h2 className="text-3xl font-bold leading-tight text-slate-100 sm:text-4xl">
                            Calidad, agilidad y confianza
                        </h2>
                        <p className="text-base leading-7 text-slate-300 sm:text-lg">
                            Una institucion fundada por medicos comprometidos con la excelencia clinica y el bienestar real de pacientes y clientes empresariales.
                        </p>
                    </div>

                    <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
                        {[
                            {
                                value: '2',
                                title: 'Areas especializadas',
                                description: 'Salud clinica y salud ocupacional integradas bajo un mismo modelo de gestion.',
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
                                title: 'Especialidades medicas',
                                description: 'Staff de profesionales certificados para cubrir necesidades clinicas integrales.',
                                icon: CheckCircle,
                            },
                            {
                                value: 'Cobertura',
                                title: 'Guayaquil y sectores',
                                description: 'Unidades moviles para sectores industrial, maritimo, agricola y servicios.',
                                icon: MapPin,
                            },
                        ].map((item) => {
                            const Icon = item.icon;
                            return (
                                <article
                                    key={item.title}
                                    className="group rounded-2xl border border-slate-700 bg-slate-800/60 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/50 hover:bg-slate-800"
                                >
                                    <div className="mb-4 flex items-center justify-between">
                                        <span className="text-3xl font-bold text-blue-400">{item.value}</span>
                                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-blue-400 ring-1 ring-slate-700">
                                            <Icon className="h-5 w-5" />
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-slate-100">{item.title}</h3>
                                    <p className="mt-2 text-sm leading-6 text-slate-400">{item.description}</p>
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