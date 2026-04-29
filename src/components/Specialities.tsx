import { ArrowRight, CheckCircle, Phone } from "lucide-react";

function Specialities() {
    return (
        <section className="px-4 py-14 sm:py-16">
            <div className="rounded-3xl border border-secondary/20 bg-white p-6 shadow-sm sm:p-10">
                <div className="max-w-3xl space-y-4">
                    <p className="inline-flex w-fit rounded-full bg-light px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-secondary">
                        Especialidades medicas
                    </p>
                    <h2 className="text-3xl font-bold leading-tight text-primary sm:text-4xl">
                        Atención especializada en más de 30 áreas
                    </h2>
                    <p className="text-base leading-7 text-dark sm:text-lg">
                        Contamos con un equipo de profesionales certificados para brindar diagnóstico, tratamiento y seguimiento en las principales especialidades médicas.
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="rounded-2xl border border-light bg-light/40 p-6">
                        <div className="mb-5 flex items-center justify-between gap-3 border-b border-secondary/20 pb-4">
                            <h3 className="text-xl font-bold text-primary">Especialidades clinicas</h3>
                            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-secondary ring-1 ring-secondary/20">
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
                                    className="flex items-center gap-2 rounded-lg border border-secondary/15 bg-white px-3 py-2 text-sm text-dark"
                                >
                                    <CheckCircle className="h-4 w-4 flex-shrink-0 text-accent" />
                                    <span>{specialite}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <div className="rounded-2xl border border-secondary/20 bg-white p-6">
                            <h3 className="text-xl font-bold text-primary">Especialidades generales</h3>
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
                                        className="rounded-full border border-secondary/25 bg-light px-3 py-1.5 text-sm font-medium text-secondary"
                                    >
                                        {specialite}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="rounded-2xl border border-accent/25 bg-accent/10 p-6">
                            <h3 className="text-xl font-bold text-primary">Salud ocupacional</h3>
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
                                        className="rounded-lg border border-accent/25 bg-white px-3 py-2 text-sm font-medium text-dark"
                                    >
                                        {specialite}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="https://wa.me/593000000000"
                                className="mt-5 inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 font-medium text-white shadow-lg transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                            >
                                <Phone className="mr-2 h-4 w-4" /> Consultar disponibilidad de especialista
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Specialities;