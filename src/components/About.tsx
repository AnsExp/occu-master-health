import Card from './Card';

export default function About() {
    const aboutValues: Array<{ title: string; description?: string }> = [
        {
            title: 'Excelencia',
            description: 'Los más altos estándares clínicos y de servicio en cada interacción.',
        },
        {
            title: 'Integridad',
            description: 'Transparencia, honestidad y ética profesional en cada acción.',
        },
        {
            title: 'Innovación',
            description: 'Tecnología y mejores prácticas para soluciones médicas de vanguardia.',
        },
        {
            title: 'Compromiso Humano',
            description: 'Cada paciente merece cuidado genuino, no un número de expediente.',
        },
    ];

    const aboutPillars: Array<{ title: string; content?: string }> = [
        {
            title: 'Misión',
            content:
                'El Código del Trabajo, el Reglamento de SSO y el IESS exigen gestión activa de la salud laboral. El incumplimiento puede derivar en sanciones, multas y responsabilidad patronal. OccuMaster Health le acompaña en cada paso del proceso de cumplimiento.',
        },
        {
            title: 'Visión',
            content:
                'Ser el centro médico ambulatorio líder en salud ocupacional del Ecuador para el año 2030, reconocido por la excelencia en la atención, la innovación en sus procesos y el impacto positivo en la productividad y bienestar de los trabajadores, expandiendo su modelo de gestión a nivel nacional con certificaciones internacionales de calidad.',
        },
        {
            title: 'Responsabilidad Social',
            content:
                'Contribuimos activamente a la salud pública ocupacional del Ecuador, promoviendo entornos laborales seguros, inclusivos y saludables en cada empresa con la que trabajamos.',
        },
    ];

    return (
        <section className="px-4 py-14 sm:py-16">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

                    {/* Columna izquierda */}
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <p className="text-xs font-semibold uppercase tracking-[0.24em]" style={{ color: '#18283d' }}>Quiénes Somos</p>
                            <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                                Nacimos para elevar el estándar de la salud en Ecuador
                            </h2>
                            <p className="text-base leading-7 text-slate-600">
                                OccuMaster Health es un centro de atención médica ambulatoria especializado en servicios de salud integral, con enfoque tanto clínico como ocupacional. Nace de la iniciativa de dos médicos que, al identificar la necesidad de mejorar la calidad en la atención, decidieron unir su experiencia para desarrollar un modelo de atención basado en la excelencia, la responsabilidad y el compromiso genuino con la salud.
                            </p>
                            <p className="text-base leading-7 text-slate-600">
                                Nuestra institución está orientada a brindar servicios médicos confiables, oportunos y de calidad, dirigidos tanto a pacientes particulares como al sector empresarial. Contamos con dos áreas claramente definidas: la atención clínica y la salud ocupacional, cada una desarrollada con enfoque especializado.
                            </p>
                            <p className="text-base leading-7 text-slate-600">
                                No somos un proveedor de trámites médicos: somos aliados estratégicos en la construcción de entornos laborales seguros, saludables y productivos. Proyectamos consolidarnos como el centro médico ambulatorio líder en salud ocupacional del Ecuador para el año 2030.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                            {aboutValues.map((value) => (
                                <Card key={value.title}>
                                    <p className="text-base font-semibold text-slate-900">{value.title}</p>
                                    {value.description && (
                                        <p className="mt-1 text-sm leading-6 text-slate-600">{value.description}</p>
                                    )}
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Columna derecha */}
                    <div className="flex flex-col gap-5">
                        <div className="relative rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-xl sm:p-8">
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/10 to-transparent pointer-events-none" />
                            <div className="relative space-y-4">
                                {aboutPillars.map((pillar, index) => (
                                    <div key={pillar.title} className={index > 0 ? 'border-t border-slate-700/50 pt-5' : ''}>
                                        <div className="flex items-start gap-3">
                                            <div className="mt-1 h-1 w-1 rounded-full bg-blue-500 flex-shrink-0" />
                                            <div>
                                                <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-400">{pillar.title}</p>
                                                {pillar.content && (
                                                    <p className="mt-2.5 text-sm leading-7 text-slate-300">{pillar.content}</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}