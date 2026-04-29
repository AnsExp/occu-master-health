import { ArrowRight, CheckCircle } from "lucide-react";

function Quality() {
    return (
        <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden bg-gradient-to-br from-dark via-dark to-primary py-14 sm:py-16">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(79,163,216,0.20),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(44,165,141,0.16),_transparent_28%)]" />
            <div className="mx-auto max-w-7xl px-4">
                <div className="relative rounded-[2rem] border border-secondary/25 bg-dark/80 p-6 shadow-2xl shadow-dark/40 backdrop-blur sm:p-10">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
                        <div className="space-y-6">
                            <div className="space-y-4">
                                <p className="inline-flex w-fit rounded-full border border-secondary/25 bg-light/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-secondary">
                                    Política de Calidad
                                </p>
                                <h2 className="text-3xl font-bold leading-tight text-light sm:text-4xl">
                                    Comprometidos con los más altos estándares internacionales
                                </h2>
                                <p className="max-w-2xl text-base leading-7 text-light/90 sm:text-lg">
                                    OccuMaster Health se compromete a brindar servicios de salud ocupacional y clínica ambulatoria con los más altos estándares de calidad, seguridad y oportunidad, asegurando la satisfacción de nuestros pacientes, trabajadores y organizaciones clientes.
                                </p>
                                <p className="max-w-2xl text-base leading-7 text-light/90 sm:text-lg">
                                    Implementamos un Sistema de Gestión de Calidad que garantiza la mejora continua de nuestros procesos, el cumplimiento de la normativa legal vigente y la prevención de riesgos laborales en nuestras propias operaciones.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div className="rounded-2xl border border-secondary/30 bg-secondary/15 p-5 shadow-lg shadow-dark/20">
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Certificación</p>
                                    <p className="mt-3 text-2xl font-bold text-light">ISO 9001:2015</p>
                                    <p className="mt-1 text-sm leading-6 text-light/85">Gestión de calidad enfocada en procesos medibles, trazabilidad y mejora continua.</p>
                                </div>
                                <div className="rounded-2xl border border-accent-alt/35 bg-accent-alt/15 p-5 shadow-lg shadow-dark/20">
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-alt">Certificación</p>
                                    <p className="mt-3 text-2xl font-bold text-light">ISO 45001:2018</p>
                                    <p className="mt-1 text-sm leading-6 text-light/85">Seguridad y salud laboral con enfoque preventivo y control sistemático de riesgos.</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            {[
                                {
                                    title: 'Enfoque centrado en el cliente',
                                    content: 'La satisfacción del paciente y la organización cliente es el eje central de todas nuestras decisiones médicas y operativas.',
                                },
                                {
                                    title: 'Mejora continua',
                                    content: 'Revisamos y optimizamos constantemente nuestros procesos para garantizar atención médica de calidad creciente.',
                                },
                                {
                                    title: 'Liderazgo y equipo',
                                    content: 'Nuestros profesionales están en constante actualización, respaldados por protocolos que garantizan resultados confiables.',
                                },
                                {
                                    title: 'Cumplimiento normativo',
                                    content: 'Operamos alineados a las normativas ecuatorianas de salud, trabajo y seguridad ocupacional vigentes.',
                                },
                                {
                                    title: 'Toma de decisiones basada en evidencia',
                                    content: 'Diagnósticos y protocolos sustentados en criterios clínicos, datos verificables y mejores prácticas médicas.',
                                },
                            ].map((item) => (
                                <article
                                    key={item.title}
                                    className="group rounded-2xl border border-light/20 bg-dark/70 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary/45 hover:bg-dark"
                                >
                                    <div className="flex items-start gap-4">
                                        <span className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-light/10 text-accent ring-1 ring-accent/35">
                                            <CheckCircle className="h-5 w-5" />
                                        </span>
                                        <div className="min-w-0 flex-1">
                                            <div className="flex items-start justify-between gap-3">
                                                <h3 className="text-base font-semibold text-light">{item.title}</h3>
                                                <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-light/55 transition-colors group-hover:text-accent-alt" />
                                            </div>
                                            <p className="mt-2 text-sm leading-6 text-light/75">{item.content}</p>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Quality;