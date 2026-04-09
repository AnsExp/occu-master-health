import { BadgeCheck, Building2, ShieldCheck, Stethoscope, Clock3, ArrowRight } from "lucide-react";
import Card from "../components/Card";

type Plan = {
    name: string;
    subtitle: string;
    price: string;
    frequency: string;
    popular?: boolean;
    icon: React.ComponentType<{ className?: string }>;
    features: string[];
};

const plans: Plan[] = [
    {
        name: "Plan Base",
        subtitle: "Para empresas pequenas en etapa inicial",
        price: "$149",
        frequency: "/mes",
        icon: Building2,
        features: [
            "Evaluacion ocupacional de ingreso",
            "1 visita tecnica mensual",
            "Informe de hallazgos y recomendaciones",
            "Soporte por correo en horario laboral",
        ],
    },
    {
        name: "Plan Preventivo",
        subtitle: "Cobertura ampliada para gestion continua",
        price: "$299",
        frequency: "/mes",
        icon: ShieldCheck,
        popular: true,
        features: [
            "Todo lo del Plan Base",
            "Evaluaciones periodicas trimestrales",
            "Capacitacion mensual al personal",
            "Matriz de riesgos actualizada",
            "Respuesta prioritaria en 24 horas",
        ],
    },
    {
        name: "Plan Integral",
        subtitle: "Acompanamiento medico ocupacional completo",
        price: "$499",
        frequency: "/mes",
        icon: Stethoscope,
        features: [
            "Todo lo del Plan Preventivo",
            "Acompanamiento en auditorias",
            "Programa de vigilancia de la salud",
            "Seguimiento de casos especiales",
            "Dashboard de indicadores de salud",
        ],
    },
    {
        name: "Plan Corporativo",
        subtitle: "Solucion personalizada para gran empresa",
        price: "A medida",
        frequency: "",
        icon: BadgeCheck,
        features: [
            "Diseno del plan segun tus operaciones",
            "Cobertura multi-sede",
            "Mesa tecnica con liderazgo medico",
            "Protocolos especiales por industria",
            "SLA y reporteria ejecutiva personalizada",
        ],
    },
];

export default function PlansPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-10 sm:py-14">
            <section className="mb-10">
                <p className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
                    Planes medicos ocupacionales
                </p>
                <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
                    Elige el plan ideal para cuidar la salud de tu equipo
                </h1>
                <p className="mt-4 max-w-3xl text-gray-600 leading-relaxed text-base sm:text-lg">
                    Te presentamos una propuesta de planes escalables para empresas de distintos tamanos.
                    Puedes usar esta estructura como base y luego reemplazar servicios, precios o condiciones
                    segun tu oferta final.
                </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {plans.map((plan) => {
                    const PlanIcon = plan.icon;

                    return (
                        <Card key={plan.name}>
                            <div className="h-full flex flex-col">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-blue-100 text-blue-600">
                                        <PlanIcon className="w-5 h-5" />
                                    </div>
                                    {plan.popular && (
                                        <span className="rounded-full bg-blue-600 text-white text-xs font-semibold px-2.5 py-1">
                                            Mas elegido
                                        </span>
                                    )}
                                </div>

                                <h2 className="text-xl font-semibold text-gray-900">{plan.name}</h2>
                                <p className="text-sm text-gray-500 mt-1">{plan.subtitle}</p>

                                <div className="mt-5 flex items-baseline gap-1">
                                    <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                                    <span className="text-sm text-gray-500">{plan.frequency}</span>
                                </div>

                                <ul className="mt-5 space-y-2.5 flex-grow">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex gap-2.5 text-sm text-gray-700">
                                            <BadgeCheck className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href="#/contact"
                                    className="mt-6 inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2.5 font-medium text-gray-700 transition-colors hover:border-blue-600 hover:text-blue-600"
                                >
                                    Solicitar este plan
                                </a>
                            </div>
                        </Card>
                    );
                })}
            </section>

            <section className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <Card>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Como elegir el plan correcto</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-700">
                            <div className="rounded-lg bg-gray-50 border border-gray-200 p-4">
                                <p className="font-semibold text-gray-900 mb-1">Tamano del equipo</p>
                                <p>Considera cantidad de colaboradores y rotacion mensual.</p>
                            </div>
                            <div className="rounded-lg bg-gray-50 border border-gray-200 p-4">
                                <p className="font-semibold text-gray-900 mb-1">Nivel de riesgo</p>
                                <p>Define exposicion a riesgos fisicos, quimicos o ergonomicos.</p>
                            </div>
                            <div className="rounded-lg bg-gray-50 border border-gray-200 p-4">
                                <p className="font-semibold text-gray-900 mb-1">Cumplimiento legal</p>
                                <p>Asegura cobertura segun normativa de salud ocupacional vigente.</p>
                            </div>
                        </div>
                    </Card>
                </div>

                <Card>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Necesitas un plan personalizado?</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                        Si tu operacion requiere un alcance especial, podemos crear una propuesta a medida.
                    </p>
                    <div className="flex items-center text-sm text-gray-700 mb-4">
                        <Clock3 className="w-4 h-4 text-blue-600 mr-2" />
                        Respuesta comercial en menos de 24 horas.
                    </div>
                    <a
                        href="#/contact"
                        className="inline-flex items-center justify-center w-full rounded-lg bg-blue-600 px-4 py-2.5 font-medium text-white transition-colors hover:bg-blue-700"
                    >
                        Hablar con un asesor <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                </Card>
            </section>
        </main>
    );
}