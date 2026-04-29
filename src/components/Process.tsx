import { ArrowRight } from "lucide-react";
import Card from "./Card";

function Process() {
    return (
        <section className="px-4 py-14 sm:py-16">
            <div className="rounded-3xl border border-secondary/20 bg-white p-6 shadow-sm sm:p-10">
                <div className="mx-auto max-w-3xl space-y-4 text-center">
                    <p className="inline-flex w-fit rounded-full bg-light px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-secondary">
                        Como trabajamos
                    </p>
                    <h2 className="text-3xl font-bold leading-tight text-primary sm:text-4xl">
                        Un proceso simple y eficiente
                    </h2>
                    <p className="text-base leading-7 text-dark sm:text-lg">
                        Desde el primer contacto hasta la entrega de resultados, garantizamos una experiencia
                        organizada, ágil y con enfoque clínico.
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                        {
                            step: '01',
                            title: 'Contáctenos',
                            description: 'Escríbanos por WhatsApp o complete el formulario. Un asesor le guiará al servicio más conveniente.',
                        },
                        {
                            step: '02',
                            title: 'Agende su cita',
                            description: 'Coordinamos fecha, hora y modalidad: presencial, unidad móvil empresarial o atención a domicilio.',
                        },
                        {
                            step: '03',
                            title: 'Evaluación médica',
                            description: 'Realizamos la consulta con protocolos estructurados, criterio clínico y tecnología adecuada.',
                        },
                        {
                            step: '04',
                            title: 'Resultados e informes',
                            description: 'Entregamos resultados claros y documentación en formato requerido por normativa ecuatoriana.',
                        },
                    ].map((item) => (
                        <Card key={item.step}>
                            <article key={item.step} className="group">
                                <div className="mb-4 flex items-center justify-between">
                                    <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-full bg-primary px-3 text-sm font-bold text-white">
                                        {item.step}
                                    </span>
                                    <ArrowRight className="h-4 w-4 text-secondary/60 transition-colors group-hover:text-accent" />
                                </div>

                                <h3 className="text-lg font-bold text-primary">{item.title}</h3>
                                <p className="mt-2 text-sm leading-6 text-dark">{item.description}</p>
                            </article>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
};

export default Process;