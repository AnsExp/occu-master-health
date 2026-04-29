import { Star } from "lucide-react";

function Reviews() {

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
        <section className="px-4 py-14 sm:py-16">
            <div className="rounded-3xl border border-secondary/20 bg-white p-6 shadow-sm sm:p-10">
                <div className="mx-auto max-w-3xl space-y-4 text-center">
                    <p className="inline-flex w-fit rounded-full bg-light px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-secondary">
                        Testimonios
                    </p>
                    <h2 className="text-3xl font-bold leading-tight text-primary sm:text-4xl">
                        Lo que dicen nuestros pacientes y clientes
                    </h2>
                    <p className="text-base leading-7 text-dark sm:text-lg">
                        Conozca las experiencias reales de quienes han confiado en OccuMaster Health para su salud y cumplimiento normativo.
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {reviews.map((review, index) => (
                        <article
                            key={index}
                            className="rounded-2xl border border-secondary/20 bg-light/50 p-5 transition-all hover:border-secondary/40 hover:shadow-md"
                        >
                            <div className="flex gap-1">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`h-4 w-4 ${i < review.rating
                                            ? 'fill-accent-alt text-accent-alt'
                                            : 'text-secondary/25'
                                            }`}
                                    />
                                ))}
                            </div>

                            <p className="mt-3 text-sm leading-6 text-dark">
                                "{review.testimonial}"
                            </p>

                            <div className="mt-4 border-t border-secondary/20 pt-4">
                                <p className="font-semibold text-primary">{review.name}</p>
                                <p className="text-xs text-dark/70">{review.title}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Reviews;