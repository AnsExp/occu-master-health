import { Briefcase, Users } from "lucide-react"
import Card from "./Card"

function Problem() {
    return (
        <section className="px-4 py-14 sm:py-16">
            <div className="max-w-3xl space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">El problema que resolvemos</p>
                <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                    Salud que no puede esperar.
                    <br />
                    Cumplimiento que no puede fallar.
                </h2>
                <p className="text-base leading-7 text-slate-600 sm:text-lg">
                    Dos realidades críticas que enfrentan personas y organizaciones en Ecuador. OccuMaster Health las atiende
                    con rigor médico, agilidad operativa y enfoque especializado.
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
                            La normativa ecuatoriana (Código del Trabajo, IESS, SART) exige evaluaciones médicas al ingreso,
                            durante la relación laboral y al retiro. El incumplimiento puede derivar en sanciones,
                            multas y riesgos laborales sin control.
                        </p>

                        <div className="rounded-xl bg-slate-900 p-4 text-sm leading-6 text-slate-200">
                            OccuMaster Health coordina evaluaciones, fichas, certificaciones y asesoría SSO para que su
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
                                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Atención clínica</p>
                                <h3 className="text-xl font-bold text-slate-900">Para Pacientes</h3>
                            </div>
                        </div>

                        <p className="leading-7 text-slate-600">
                            Acceder a atención médica de calidad, con especialistas reales y diagnósticos oportunos, sigue
                            siendo un desafío. Los tiempos de espera, los costos ocultos y la fragmentación de la atención
                            impactan el bienestar de las familias.
                        </p>

                        <div className="rounded-xl bg-slate-900 p-4 text-sm leading-6 text-slate-200">
                            Con un modelo ambulatorio integral, OccuMaster Health concentra evaluación, diagnóstico y
                            seguimiento en una atención clara y confiable.
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    )
}

export default Problem