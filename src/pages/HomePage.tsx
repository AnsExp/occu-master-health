import { ArrowRight, CheckCircle, Briefcase, Users, Phone, Shield, TrendingUp, MapPin, Star } from 'lucide-react';
import Card from '../components/Card';

export default function HomePage() {
    const plans: Array<{
        name: string;
        description: string;
        price: string;
        period?: string;
        highlight: boolean;
        note?: string;
        items?: string[];
    }> = [
            {
                name: 'Plan Mujer',
                description: 'Prevención y cuidado integral de la salud femenina.',
                price: '$92.56',
                period: 'USD',
                highlight: false,
                note: 'En pacientes mayores de 40 años se recomienda mamografía.',
                items: [
                    'Biometría hemática completa',
                    'Examen de orina (EMO)',
                    'Coproparasitario',
                    'Ecografía mamaria',
                    'Citología (Papanicolaou)',
                    'Consulta de ginecología',
                ],
            },
            {
                name: 'Plan Vida Saludable',
                description: 'Control anual de salud familiar sin restricciones ni preexistencias.',
                price: '$700',
                period: 'USD / año',
                highlight: true,
                note: 'Sin límite de edad · Sin exclusión de preexistencias · Pago diferido disponible.',
                items: [
                    '12 consultas de medicina general',
                    '4 biometrías hemáticas completas',
                    '4 perfiles lipídicos',
                    '4 exámenes de orina (EMO)',
                    '4 coproparasitarios',
                    '2 audiometrías · 4 optometrías',
                    '2 electrocardiogramas',
                    '2 radiografías de tórax',
                    '20% descuento en servicios adicionales',
                ],
            },
            {
                name: 'Plan Cardiológico',
                description: 'Detección temprana de riesgos cardiovasculares.',
                price: '$175.67',
                period: 'USD',
                highlight: false,
                items: [
                    'Colesterol total, HDL y LDL',
                    'Triglicéridos',
                    'Biometría hemática completa',
                    'Prueba de esfuerzo',
                    'Electrocardiograma',
                    'Consulta de cardiología',
                ],
            },
            {
                name: 'Plan Diabético',
                description: 'Control metabólico y seguimiento de diabetes o riesgo glucémico.',
                price: '$126.99',
                period: 'USD',
                highlight: false,
            },
            {
                name: 'Plan Hombre',
                description: 'Prevención cardiovascular y control integral de la salud masculina.',
                price: '$175.67',
                period: 'USD',
                highlight: false,
            },
            {
                name: 'Plan Estudiantil',
                description: 'Evaluación médica integral para niños y adolescentes con certificado.',
                price: '$107.67',
                period: 'USD',
                highlight: false,
            },
        ];

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

    const reviews: Array<{ rating: number; testimonial: string; name: string; title: string }> = [
        {
            rating: 5,
            testimonial:
                'Realizamos las evaluaciones de ingreso de 30 colaboradores con OccuMaster Health. El proceso fue ágil, organizado y los informes llegaron a tiempo. La documentación cumplió con todos los requisitos del IESS. Sin duda volveremos.',
            name: 'Marcos R.',
            title: 'Jefe de RRHH — Sector Industrial, Guayaquil',
        },
        {
            rating: 5,
            testimonial:
                'Me hice el Plan Cardiológico y quedé muy satisfecha. El cardiólogo fue extremadamente profesional, los resultados fueron claros y el servicio completamente puntual. Lo recomiendo ampliamente a toda mi familia.',
            name: 'Lorena T.',
            title: 'Paciente particular',
        },
        {
            rating: 5,
            testimonial:
                'La brigada médica que coordinaron en nuestras instalaciones fue excelente. No interrumpió nuestras operaciones en ningún momento y los trabajadores salieron con toda la documentación ocupacional en regla.',
            name: 'Javier V.',
            title: 'Gerente General — Empresa Agrícola',
        },
    ];

    return (
        <main className="max-w-7xl mx-auto">
            <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 py-12" style={{
                backgroundImage: `linear-gradient(135deg, rgba(126, 177, 202, 0.08), rgba(24, 40, 61, 0.05))`
            }}>
                <div className="mx-auto max-w-7xl px-4 sm:py-16 lg:py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div className="flex flex-col justify-center space-y-6">
                            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-4 py-2 text-sm font-semibold px-4 py-2 text-sm font-semibold shadow-sm ring-1 ring-blue-100" style={{color: '#18283d'}}>
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-blue-600" style={{backgroundColor: 'rgba(126, 177, 202, 0.1)', color: '#7eb1ca'}}>
                                    <MapPin className="h-3.5 w-3.5" />
                                </span>
                                <span>Guayaquil, Ecuador</span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                Salud integral para personas y{' '}
                                <span className="underline" style={{color: '#18283d'}}>empresas</span>
                                {' '} que no se detienen
                            </h1>
                            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                                Centro médico ambulatorio especializado en salud ocupacional y atención clínica. Evaluaciones precisas, cumplimiento normativo y cuidado real desde Guayaquil.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="https://wa.me/593000000000"
                                    className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium text-white shadow-lg transition-colors hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2"
                                    style={{backgroundColor: '#18283d', '--tw-ring-color': '#7eb1ca'} as React.CSSProperties}
                                >
                                    <Phone className="w-4 h-4 mr-2" /> Escribir por WhatsApp
                                </a>
                                <a
                                    href="#plans"
                                    className="inline-flex items-center justify-center rounded-lg border-2 px-6 py-3 font-medium transition-colors"
                                    style={{borderColor: '#18283d', color: '#18283d'}} 
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = '#18283d';
                                        e.currentTarget.style.color = 'white';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = 'transparent';
                                        e.currentTarget.style.color = '#18283d';
                                    }}
                                >
                                    Ver Planes Médicos
                                </a>
                            </div>
                            <ul className="grid grid-cols-1 gap-2 text-sm font-medium text-slate-700 sm:grid-cols-2 lg:grid-cols-3">
                                {[
                                    'Evaluaciones ocupacionales',
                                    '+30 especialidades',
                                    'Cumplimiento IESS · SART',
                                ].map((item) => (
                                        <li
                                            key={item}
                                            className="flex items-center gap-2 rounded-xl border px-3.5 py-2 shadow-sm ring-1"
                                            style={{
                                                borderColor: 'rgba(24, 40, 61, 0.2)',
                                                backgroundColor: 'rgba(126, 177, 202, 0.05)',
                                                '--tw-ring-color': 'rgba(24, 40, 61, 0.1)'
                                            } as React.CSSProperties}
                                        >
                                            <CheckCircle className="h-4 w-4" style={{color: '#18283d'}} />
                                            <span style={{color: '#18283d'}}>Items</span>
                                        </li>
                                ))}
                            </ul>
                        </div>

                        <div className="hidden lg:block">
                            <Card>
                                <div className="rounded-2xl border border-slate-200 bg-white p-2">
                                    <div className="mb-6 flex items-start justify-between gap-4 border-b border-slate-200 pb-5">
                                        <div>
                                            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">
                                                Atencion prioritaria
                                            </p>
                                            <h3 className="text-xl font-bold text-slate-900">¿Qué necesitas hoy?</h3>
                                            <p className="mt-2 text-sm leading-6 text-slate-500">
                                                Selecciona el servicio que mejor se ajusta a tu necesidad inmediata.
                                            </p>
                                        </div>
                                        <div className="rounded-full bg-blue-50 p-3 text-blue-600 shadow-sm ring-1 ring-blue-100">
                                            <Briefcase className="h-5 w-5" />
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        {[
                                            'Ficha medica ocupacional',
                                            'Certificado de aptitud laboral',
                                            'Consulta con especialista',
                                            'Laboratorio y diagnostico',
                                            'Brigada medica empresarial',
                                            'Atencion a domicilio',
                                        ].map((item) => (
                                            <div
                                                key={item}
                                                className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-blue-200 hover:bg-blue-50/60"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-blue-600 ring-1 ring-slate-200">
                                                        <CheckCircle className="h-4 w-4" />
                                                    </span>
                                                    <span>{item}</span>
                                                </div>
                                                <ArrowRight className="h-4 w-4 text-slate-400" />
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-6 rounded-xl bg-slate-900 px-4 py-4 text-white">
                                        <p className="text-sm font-semibold">Normativa Ecuador:</p>
                                        <p className="mt-1 text-sm text-slate-300">
                                            Cumplimiento IESS · SART · Ministerio de Trabajo. Documentación oficial para su empresa.
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-4 py-14 sm:py-16">
                <div className="max-w-3xl space-y-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">El problema que resolvemos</p>
                    <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                        Salud que no puede esperar.
                        <br />
                        Cumplimiento que no puede fallar.
                    </h2>
                    <p className="text-base leading-7 text-slate-600 sm:text-lg">
                        Dos realidades criticas que enfrentan personas y organizaciones en Ecuador. OccuMaster Health las atiende
                        con rigor medico, agilidad operativa y enfoque especializado.
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <Card>
                        <div className="space-y-5">
                            <div className="flex items-center gap-3">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                                    <Briefcase className="h-5 w-5" />
                                </span>
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Sector corporativo</p>
                                    <h3 className="text-xl font-bold text-slate-900">Para Empresas</h3>
                                </div>
                            </div>

                            <p className="leading-7 text-slate-600">
                                La normativa ecuatoriana (Codigo del Trabajo, IESS, SART) exige evaluaciones medicas al ingreso,
                                durante la relacion laboral y al retiro. El incumplimiento puede derivar en sanciones,
                                multas y riesgos laborales sin control.
                            </p>

                            <div className="rounded-xl bg-slate-900 p-4 text-sm leading-6 text-slate-200">
                                OccuMaster Health coordina evaluaciones, fichas, certificaciones y asesoria SSO para que su
                                empresa opere en regla y cuide a su equipo.
                            </div>
                        </div>
                    </Card>

                    <Card>
                        <div className="space-y-5">
                            <div className="flex items-center gap-3">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                                    <Users className="h-5 w-5" />
                                </span>
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Atencion clínica</p>
                                    <h3 className="text-xl font-bold text-slate-900">Para Pacientes</h3>
                                </div>
                            </div>

                            <p className="leading-7 text-slate-600">
                                Acceder a atencion medica de calidad, con especialistas reales y diagnosticos oportunos, sigue
                                siendo un desafio. Los tiempos de espera, los costos ocultos y la fragmentacion de la atencion
                                impactan el bienestar de las familias.
                            </p>

                            <div className="rounded-xl bg-slate-900 p-4 text-sm leading-6 text-slate-200">
                                Con un modelo ambulatorio integral, OccuMaster Health concentra evaluacion, diagnostico y
                                seguimiento en una atencion clara y confiable.
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            <section className="px-4 py-14 sm:py-16" id="services">
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
                    <div className="max-w-3xl space-y-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">Nuestros servicios</p>
                        <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                            Todo lo que necesita en un solo lugar.
                        </h2>
                        <p className="text-base leading-7 text-slate-600 sm:text-lg">
                            Servicios medicos ambulatorios disenados para dar respuesta rapida, confiable y de calidad tanto a pacientes particulares como al sector empresarial.
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
                        {[
                            {
                                title: 'Medicina ocupacional',
                                content: 'Evaluaciones de ingreso, periodicas y de retiro. Fichas medicas ocupacionales y certificacion de aptitud laboral para trabajadores de todos los sectores.',
                                target: 'Empresas',
                                icon: Briefcase,
                            },
                            {
                                title: 'Especialidades medicas',
                                content: 'Cardiologia, endocrinologia, ginecologia, neurologia, traumatologia, psicologia y mas de 30 especialidades con seguimiento integral.',
                                target: 'Pacientes',
                                icon: Users,
                            },
                            {
                                title: 'Laboratorio clinico',
                                content: 'Biometria hematica, quimica sanguinea, perfil lipidico, glucosa y otros examenes con resultados precisos y oportunos para decisiones confiables.',
                                target: 'Ambos',
                                icon: CheckCircle,
                            },
                            {
                                title: 'Diagnostico por imagenes',
                                content: 'Ecografias, radiografias y estudios de imagen con protocolos de calidad para respaldar decisiones medicas con mayor certeza.',
                                target: 'Ambos',
                                icon: Shield,
                            },
                            {
                                title: 'Unidades moviles',
                                content: 'Llevamos servicios de salud a su empresa con brigadas medicas, evaluaciones y fichas ocupacionales sin detener su operacion.',
                                target: 'Empresas',
                                icon: TrendingUp,
                            },
                            {
                                title: 'Atencion a domicilio',
                                content: 'Consulta medica y seguimiento en el hogar para pacientes que requieren control continuo sin necesidad de desplazarse al centro medico.',
                                target: 'Pacientes',
                                icon: Phone,
                            }
                        ].map((service) => {
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

            <section className="px-4 py-14 sm:py-16" id="specialities">
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
                    <div className="max-w-3xl space-y-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">Especialidades médicas</p>
                        <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                            Atención especializada en más de 30 áreas
                        </h2>
                        <p className="text-base leading-7 text-slate-600 sm:text-lg">
                            Contamos con un equipo de profesionales certificados para brindar diagnóstico, tratamiento y seguimiento en las principales especialidades médicas.
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                            <div className="mb-5 flex items-center justify-between gap-3 border-b border-slate-200 pb-4">
                                <h3 className="text-xl font-bold text-slate-900">Especialidades clínicas</h3>
                                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600 ring-1 ring-slate-200">
                                    24 áreas
                                </span>
                            </div>

                            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                                {[
                                    'Alergología',
                                    'Cardiología',
                                    'Cirugía General',
                                    'Cirugía Oncológica',
                                    'Cirugía Vascular',
                                    'Dermatología',
                                    'Endocrinología',
                                    'Fisioterapia',
                                    'Gastroenterología',
                                    'Ginecología y Obstetricia',
                                    'Mastología',
                                    'Medicina Familiar y General',
                                    'Medicina Interna',
                                    'Neumología',
                                    'Neurología y Neurocirugía',
                                    'Nutrición',
                                    'Oftalmología y Optometría',
                                    'Otorrinolaringología',
                                    'Pediatría',
                                    'Psicología',
                                    'Reumatología',
                                    'Traumatología y Columna',
                                    'Urología',
                                    'Proctología · Patología · Radiología',
                                ].map((specialite) => (
                                    <li
                                        key={specialite}
                                        className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700"
                                    >
                                        <CheckCircle className="h-4 w-4 flex-shrink-0 text-blue-600" />
                                        <span>{specialite}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <div className="rounded-2xl border border-slate-200 bg-white p-6">
                                <h3 className="text-xl font-bold text-slate-900">Especialidades generales</h3>
                                <ul className="mt-4 flex flex-wrap gap-2">
                                    {[
                                        'Medicina General',
                                        'Medicina Familiar',
                                        'Pediatría',
                                        'Ginecología',
                                        'Psicología Clínica',
                                        'Nutrición y Dietética',
                                    ].map((specialite) => (
                                        <li
                                            key={specialite}
                                            className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700"
                                        >
                                            {specialite}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                                <h3 className="text-xl font-bold text-slate-900">Salud ocupacional</h3>
                                <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                                    {[
                                        'Medicina Ocupacional',
                                        'Radiografías',
                                        'Audiometrías',
                                        'Optometría',
                                        'Odontología',
                                        'Psicología',
                                        'Electrocardiogramas',
                                        'Laboratorio',
                                    ].map((specialite) => (
                                        <li
                                            key={specialite}
                                            className="rounded-lg border border-blue-100 bg-white px-3 py-2 text-sm font-medium text-slate-700"
                                        >
                                            {specialite}
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href="https://wa.me/593000000000"
                                    className="mt-5 inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white shadow-lg transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                    <Phone className="mr-2 h-4 w-4" /> Consultar disponibilidad de especialista
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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

            <section className="px-4 py-14 sm:py-16">
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
                    <div className="mx-auto max-w-3xl space-y-4 text-center">
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">Como trabajamos</p>
                        <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                            Un proceso simple y eficiente
                        </h2>
                        <p className="text-base leading-7 text-slate-600 sm:text-lg">
                            Desde el primer contacto hasta la entrega de resultados, garantizamos una experiencia
                            organizada, agil y con enfoque clinico.
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                step: '01',
                                title: 'Contactenos',
                                description: 'Escribanos por WhatsApp o complete el formulario. Un asesor le guiara al servicio mas conveniente.',
                            },
                            {
                                step: '02',
                                title: 'Agenda su cita',
                                description: 'Coordinamos fecha, hora y modalidad: presencial, unidad movil empresarial o atencion a domicilio.',
                            },
                            {
                                step: '03',
                                title: 'Evaluacion medica',
                                description: 'Realizamos la consulta con protocolos estructurados, criterio clinico y tecnologia adecuada.',
                            },
                            {
                                step: '04',
                                title: 'Resultados e informes',
                                description: 'Entregamos resultados claros y documentacion en formato requerido por normativa ecuatoriana.',
                            },
                        ].map((item) => (
                            <Card key={item.step}>
                                <article
                                    key={item.step}
                                >
                                    <div className="mb-4 flex items-center justify-between">
                                        <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-full bg-blue-600 px-3 text-sm font-bold text-white">
                                            {item.step}
                                        </span>
                                        <ArrowRight className="h-4 w-4 text-slate-400" />
                                    </div>

                                    <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                                </article>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-4 py-14 sm:py-16" id="companies">
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

                        {/* Columna izquierda */}
                        <div className="space-y-6">
                            <div className="space-y-4">
                                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">Para Empresas</p>
                                <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                                    Proteja a su equipo.{' '}
                                    <span className="text-blue-600">Cumpla la ley.</span>{' '}
                                    Reduzca riesgos.
                                </h2>
                                <p className="text-base leading-7 text-slate-600">
                                    Somos su aliado estratégico en salud ocupacional. La inversión en seguridad laboral permite
                                    reducir riesgos, prevenir enfermedades profesionales y fortalecer entornos de trabajo seguros.
                                </p>
                            </div>

                            <ul className="grid grid-cols-1 gap-2">
                                {[
                                    'Evaluaciones médicas de ingreso, periódicas y de retiro',
                                    'Elaboración de fichas médicas ocupacionales oficiales',
                                    'Certificados de aptitud laboral por puesto de trabajo',
                                    'Vigilancia continua de la salud del trabajador',
                                    'Asesoría en Sistemas de Gestión SSO (ISO 45001)',
                                    'Identificación y control de factores de riesgo ocupacional',
                                    'Brigadas médicas en sus instalaciones',
                                    'Apoyo en implementación de programas preventivos',
                                ].map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-700 transition-colors hover:border-blue-200 hover:bg-blue-50/50"
                                    >
                                        <CheckCircle className="h-4 w-4 flex-shrink-0 text-blue-600" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                                <a
                                    href="https://wa.me/593000000000"
                                    className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium text-white shadow-lg transition-colors hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2"
                                    style={{backgroundColor: '#18283d'}}
                                >
                                    <Phone className="mr-2 h-4 w-4" /> Solicitar cotización empresarial
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                        </div>

                        {/* Columna derecha */}
                        <div className="flex flex-col gap-5">
                            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                                    Sectores que atendemos
                                </p>
                                <ul className="grid grid-cols-2 gap-2">
                                    {[
                                        'Marítimo',
                                        'Industrial',
                                        'Agrícola',
                                        'Construcción',
                                        'Logística',
                                        'Servicios',
                                        'Energía',
                                        'Minería',
                                    ].map((sector) => (
                                        <li
                                            key={sector}
                                            className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700"
                                        >
                                            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                                            {sector}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { code: 'ISO 9001:2015', label: 'Gestión de Calidad' },
                                    { code: 'ISO 45001:2018', label: 'Seguridad Laboral' },
                                ].map((norm) => (
                                    <div
                                        key={norm.code}
                                        className="rounded-2xl border border-blue-100 bg-blue-50 p-4 text-center"
                                    >
                                        <p className="text-lg font-bold text-blue-600">{norm.code}</p>
                                        <p className="mt-1 text-xs font-medium text-slate-600">{norm.label}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="rounded-2xl bg-slate-900 p-5 text-sm leading-7 text-slate-300">
                                <p className="mb-1 font-semibold text-white">Normativa Ecuador</p>
                                El Código del Trabajo, el Reglamento de SSO y el IESS exigen gestión activa de la salud
                                laboral. El incumplimiento puede derivar en sanciones, multas y responsabilidad patronal.
                                OccuMaster Health le acompaña en cada paso del proceso de cumplimiento.
                            </div>

                            <a
                                href="https://wa.me/593000000000"
                                className="inline-flex items-center justify-center rounded-lg border-2 border-blue-600 px-6 py-3 font-medium text-blue-600 transition-colors hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                <Phone className="mr-2 h-4 w-4" /> Hablar con un asesor
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-4 py-14 sm:py-16" id="plans">
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
                    <div className="mx-auto max-w-3xl space-y-4 text-center">
                        <p className="text-xs font-semibold uppercase tracking-[0.24em]" style={{color: '#18283d'}}>Planes de servicio</p>
                        <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                            Elige el plan que mejor se adapta a ti
                        </h2>
                        <p className="text-base leading-7 text-slate-600 sm:text-lg">
                            Soluciones diseñadas para pacientes particulares y empresas. Sin sorpresas, con cobertura clara y atención de calidad desde el primer día.
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
                        {plans.map((plan) => (
                            <article
                                key={plan.name}
                                className={`relative rounded-2xl border p-5 transition-shadow hover:shadow-md ${plan.highlight
                                    ? 'border-blue-500 bg-blue-600 text-white shadow-lg shadow-blue-200'
                                    : 'border-slate-200 bg-slate-50'
                                    }`}
                            >
                                {plan.highlight && (
                                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-xs font-bold uppercase tracking-[0.16em] text-blue-600 shadow-sm ring-1 ring-blue-100">
                                        Más popular
                                    </span>
                                )}

                                <div className="space-y-1">
                                    <h3 className={`text-xl font-bold ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>
                                        {plan.name}
                                    </h3>
                                    <p className={`text-sm leading-6 ${plan.highlight ? 'text-blue-100' : 'text-slate-500'}`}>
                                        {plan.description}
                                    </p>
                                </div>

                                <div className="mb-4 mt-5 flex items-end gap-1">
                                    <span className={`text-4xl font-bold ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>
                                        {plan.price}
                                    </span>
                                    {plan.period && (
                                        <span className={`mb-1 text-sm ${plan.highlight ? 'text-blue-100' : 'text-slate-500'}`}>
                                            {plan.period}
                                        </span>
                                    )}
                                </div>
                                {plan.items && plan.items.length > 0 && (
                                    <ul className="mb-5 space-y-2">
                                        {plan.items.map((item) => (
                                            <li key={item} className="flex items-start gap-2.5 text-sm">
                                                <CheckCircle className={`mt-0.5 h-4 w-4 flex-shrink-0 ${plan.highlight ? 'text-blue-200' : 'text-blue-600'}`} />
                                                <span className={plan.highlight ? 'text-blue-50' : 'text-slate-700'}>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                <a
                                    href="https://wa.me/593000000000"
                                    className={`inline-flex w-full items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${plan.highlight
                                        ? 'bg-white text-blue-600 hover:bg-blue-50 focus:ring-white focus:ring-offset-blue-600'
                                        : 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500'
                                        }`}
                                >
                                    Seleccionar plan
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </a>

                                {'note' in plan && plan.note && (
                                    <p className={`mt-4 text-center text-xs leading-5 ${plan.highlight ? 'text-blue-200' : 'text-slate-400'
                                        }`}>
                                        {plan.note}
                                    </p>
                                )}
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-4 py-14 sm:py-16" id="about">
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

                        {/* Columna izquierda */}
                        <div className="space-y-6">
                            <div className="space-y-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.24em]" style={{color: '#18283d'}}>Quiénes Somos</p>
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

            <section className="px-4 py-14 sm:py-16" id="reviews">
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
                    <div className="mx-auto max-w-3xl space-y-4 text-center">
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">Testimonios</p>
                        <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                            Lo que dicen nuestros pacientes y clientes
                        </h2>
                        <p className="text-base leading-7 text-slate-600 sm:text-lg">
                            Conozca las experiencias reales de quienes han confiado en OccuMaster Health para su salud y cumplimiento normativo.
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {reviews.map((review, index) => (
                            <article
                                key={index}
                                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all hover:border-blue-200 hover:shadow-md"
                            >
                                <div className="flex gap-1">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`h-4 w-4 ${i < review.rating
                                                ? 'fill-yellow-400 text-yellow-400'
                                                : 'text-slate-300'
                                                }`}
                                        />
                                    ))}
                                </div>

                                <p className="mt-3 text-sm leading-6 text-slate-700">
                                    "{review.testimonial}"
                                </p>

                                <div className="mt-4 border-t border-slate-200 pt-4">
                                    <p className="font-semibold text-slate-900">{review.name}</p>
                                    <p className="text-xs text-slate-500">{review.title}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-14 sm:py-16" id='contact'>
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.14),_transparent_28%)]" />
                <div className="mx-auto max-w-7xl px-4">
                    <div className="relative rounded-[2rem] border border-slate-700/70 bg-slate-900/70 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur sm:p-10">
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
                            <div className="space-y-6">
                                <div className="space-y-4">
                                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-400">Contáctenos</p>
                                    <h2 className="text-3xl font-bold leading-tight text-slate-50 sm:text-4xl">
                                        Su salud no puede esperar.
                                        <br />
                                        Su empresa tampoco.
                                    </h2>
                                    <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                                        Escriba por WhatsApp para una respuesta ágil, o use el formulario para consultas detalladas. Un asesor le orientará sobre el servicio o plan que mejor se adapta a sus necesidades.
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    <p className="text-sm font-semibold text-slate-200">Canales de contacto rápido:</p>
                                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                        <a 
                                            href="https://wa.me/593000000000" 
                                            className="group inline-flex items-center justify-center gap-2 rounded-lg border border-green-500/20 bg-green-500/10 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-green-400/50 hover:bg-green-500/20 focus:outline-none focus:ring-2 focus:ring-green-500/50"
                                        >
                                            <Phone className="h-4 w-4" />
                                            WhatsApp
                                        </a>
                                        <a 
                                            href="mailto:occumasterhealt@outlook.com" 
                                            className="group inline-flex items-center justify-center gap-2 rounded-lg border border-blue-500/20 bg-blue-500/10 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-blue-400/50 hover:bg-blue-500/20 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                                        >
                                            <ArrowRight className="h-4 w-4" />
                                            Correo
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-2xl border border-slate-700/50 bg-slate-800/60 p-6 sm:p-7">
                                <h3 className="mb-6 text-lg font-bold text-slate-50">Envíe su consulta</h3>
                                <form className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-1.5">Correo electrónico</label>
                                        <input
                                            type="email"
                                            placeholder="correo@empresa.com"
                                            className="w-full rounded-lg border border-slate-700 bg-slate-900/50 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 transition-colors focus:border-blue-500 focus:bg-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500/50"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-1.5">Asunto</label>
                                        <input
                                            type="text"
                                            placeholder="¿Qué necesita?"
                                            className="w-full rounded-lg border border-slate-700 bg-slate-900/50 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 transition-colors focus:border-blue-500 focus:bg-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500/50"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-1.5">Mensaje</label>
                                        <textarea
                                            placeholder="Cuéntenos su consulta o necesidad..."
                                            rows={4}
                                            className="w-full rounded-lg border border-slate-700 bg-slate-900/50 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 transition-colors focus:border-blue-500 focus:bg-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500/50 resize-none"
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-0"
                                    >
                                        Enviar consulta
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}