import { ArrowRight, CheckCircle } from "lucide-react";

function Quality() {
    return (
        <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-14 sm:py-16">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.14),_transparent_28%)]" />
            <div className="mx-auto max-w-7xl px-4">
                <div className="relative rounded-[2rem] border border-slate-700/70 bg-slate-900/70 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur sm:p-10">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
                        <div className="space-y-6">
                            <div className="space-y-4">
                                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-400">Política de Calidad</p>
                                <h2 className="text-3xl font-bold leading-tight text-slate-50 sm:text-4xl">
                                    Comprometidos con los más altos estándares internacionales
                                </h2>
                                <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                                    OccuMaster Health se compromete a brindar servicios de salud ocupacional y clínica ambulatoria con los más altos estándares de calidad, seguridad y oportunidad, asegurando la satisfacción de nuestros pacientes, trabajadores y organizaciones clientes.
                                </p>
                                <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                                    Implementamos un Sistema de Gestión de Calidad que garantiza la mejora continua de nuestros procesos, el cumplimiento de la normativa legal vigente y la prevención de riesgos laborales en nuestras propias operaciones.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-5 shadow-lg shadow-blue-950/20">
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">Certificación</p>
                                    <p className="mt-3 text-2xl font-bold text-white">ISO 9001:2015</p>
                                    <p className="mt-1 text-sm leading-6 text-slate-300">Gestión de calidad enfocada en procesos medibles, trazabilidad y mejora continua.</p>
                                </div>
                                <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5 shadow-lg shadow-cyan-950/20">
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Certificación</p>
                                    <p className="mt-3 text-2xl font-bold text-white">ISO 45001:2018</p>
                                    <p className="mt-1 text-sm leading-6 text-slate-300">Seguridad y salud laboral con enfoque preventivo y control sistemático de riesgos.</p>
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
                                    className="group rounded-2xl border border-slate-700/80 bg-slate-800/55 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/40 hover:bg-slate-800/80"
                                >
                                    <div className="flex items-start gap-4">
                                        <span className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-slate-950 text-blue-400 ring-1 ring-slate-700">
                                            <CheckCircle className="h-5 w-5" />
                                        </span>
                                        <div className="min-w-0 flex-1">
                                            <div className="flex items-start justify-between gap-3">
                                                <h3 className="text-base font-semibold text-slate-100">{item.title}</h3>
                                                <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-500 transition-colors group-hover:text-blue-400" />
                                            </div>
                                            <p className="mt-2 text-sm leading-6 text-slate-400">{item.content}</p>
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