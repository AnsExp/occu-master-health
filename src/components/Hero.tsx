import { ArrowRight, Briefcase, CheckCircle, MapPin, Phone } from "lucide-react";
import Card from "./Card";

function Hero() {
    return (
        <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 py-12" style={{
            backgroundImage: `linear-gradient(135deg, rgba(126, 177, 202, 0.08), rgba(24, 40, 61, 0.05))`
        }}>
            <div className="mx-auto max-w-7xl px-4 sm:py-16 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div className="flex flex-col justify-center space-y-6">
                        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-4 py-2 text-sm font-semibold px-4 py-2 text-sm font-semibold shadow-sm ring-1 ring-blue-100" style={{ color: '#18283d' }}>
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-blue-600" style={{ backgroundColor: 'rgba(126, 177, 202, 0.1)', color: '#7eb1ca' }}>
                                <MapPin className="h-3.5 w-3.5" />
                            </span>
                            <span>Guayaquil, Ecuador</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            Salud integral para personas y{' '}
                            <span className="underline" style={{ color: '#18283d' }}>empresas</span>
                            {' '} que no se detienen
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                            Centro médico ambulatorio especializado en salud ocupacional y atención clínica. Evaluaciones precisas, cumplimiento normativo y cuidado real desde Guayaquil.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://wa.me/593000000000"
                                className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium text-white shadow-lg transition-colors hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2"
                                style={{ backgroundColor: '#18283d', '--tw-ring-color': '#7eb1ca' } as React.CSSProperties}
                            >
                                <Phone className="w-4 h-4 mr-2" /> Escribir por WhatsApp
                            </a>
                            <a
                                href="#plans"
                                className="inline-flex items-center justify-center rounded-lg border-2 px-6 py-3 font-medium transition-colors"
                                style={{ borderColor: '#18283d', color: '#18283d' }}
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
                                    <CheckCircle className="h-4 w-4" style={{ color: '#18283d' }} />
                                    <span style={{ color: '#18283d' }}>Items</span>
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
                                            Atención prioritaria
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
                                        'Ficha médica ocupacional',
                                        'Certificado de aptitud laboral',
                                        'Consulta con especialista',
                                        'Laboratorio y diagnóstico',
                                        'Brigada médica empresarial',
                                        'Atención a domicilio',
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
    );
}

export default Hero;