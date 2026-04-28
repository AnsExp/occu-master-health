import { ArrowRight, CheckCircle } from "lucide-react";

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

export default function Plans() {
    return (
        <section className="px-4 py-14 sm:py-16" id="plans">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
                <div className="mx-auto max-w-3xl space-y-4 text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em]" style={{ color: '#18283d' }}>Planes de servicio</p>
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
    );
}