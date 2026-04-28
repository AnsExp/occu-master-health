import { ArrowRight, CheckCircle, Phone } from "lucide-react";

function Companies() {
    return (
        <section className="px-4 py-14 sm:py-16">
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
                            style={{ backgroundColor: '#18283d' }}
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
    );
}

export default Companies;