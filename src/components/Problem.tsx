import { Briefcase, Users } from "lucide-react"
import Card from "./Card"

function Problem() {
    return (
        <section className="px-4 py-14 sm:py-16">
            <div className="max-w-3xl space-y-4">
                <p className="inline-flex w-fit rounded-full bg-light px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-secondary">
                    El problema que resolvemos
                </p>
                <h2 className="text-3xl font-bold leading-tight text-primary sm:text-4xl">
                    Salud que no puede esperar.
                    <br />
                    Cumplimiento que no puede fallar.
                </h2>
                <p className="text-base leading-7 text-dark sm:text-lg">
                    Dos realidades críticas que enfrentan personas y organizaciones en Ecuador. OccuMaster Health las atiende con rigor médico, agilidad operativa y enfoque especializado.
                </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
                <Card>
                    <div className="space-y-5">
                        <div className="flex items-center gap-3">
                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-white">
                                <Briefcase className="h-5 w-5" />
                            </span>
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">Sector corporativo</p>
                                <h3 className="text-xl font-bold text-primary">Para Empresas</h3>
                            </div>
                        </div>

                        <p className="leading-7 text-dark">
                            La normativa ecuatoriana (Código del Trabajo, IESS, SART) exige evaluaciones médicas al ingreso,
                            durante la relación laboral y al retiro. El incumplimiento puede derivar en sanciones,
                            multas y riesgos laborales sin control.
                        </p>

                        <div className="rounded-xl border-l-4 border-secondary bg-dark p-4 text-sm leading-6 text-light">
                            OccuMaster Health coordina evaluaciones, fichas, certificaciones y asesoría SSO para que su
                            empresa opere en regla y cuide a su equipo.
                        </div>
                    </div>
                </Card>

                <Card>
                    <div className="space-y-5">
                        <div className="flex items-center gap-3">
                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-white">
                                <Users className="h-5 w-5" />
                            </span>
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">Atención clínica</p>
                                <h3 className="text-xl font-bold text-primary">Para Pacientes</h3>
                            </div>
                        </div>

                        <p className="leading-7 text-dark">
                            Acceder a atención médica de calidad, con especialistas reales y diagnósticos oportunos, sigue
                            siendo un desafío. Los tiempos de espera, los costos ocultos y la fragmentación de la atención
                            impactan el bienestar de las familias.
                        </p>

                        <div className="rounded-xl border-l-4 border-accent-alt bg-dark p-4 text-sm leading-6 text-light">
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