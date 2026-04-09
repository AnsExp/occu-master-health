import { AlertTriangle, ShieldCheck, FileText, Lock } from "lucide-react";
import Card from "../components/Card";

const ReportsPage = () => {
    return (
        <main className="max-w-7xl mx-auto px-4 py-10 sm:py-14">
            <section className="mb-8 sm:mb-10">
                <p className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
                    Canal de denuncias
                </p>
                <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
                    Compromiso con la integridad y la calidad del servicio
                </h1>
                <p className="mt-4 max-w-3xl text-gray-600 leading-relaxed text-base sm:text-lg">
                    En Occu Master Health tomamos cada reporte con total seriedad. Nuestro equipo evalua
                    todas las denuncias de forma objetiva, confidencial y oportuna para proteger a las
                    personas y fortalecer la calidad de nuestros servicios.
                </p>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                <div className="lg:col-span-2">
                    <Card>
                        <h2 className="text-xl font-semibold text-gray-900 mb-2">Formulario de denuncia</h2>
                        <p className="text-sm text-gray-500 mb-6">
                            Completa la informacion con el mayor detalle posible para facilitar la revision.
                        </p>

                        <form className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Nombre (opcional)
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Tu nombre"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Correo de contacto (opcional)
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="correo@empresa.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Empresa
                                </label>
                                <input
                                    type="text"
                                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Nombre de la empresa"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Tipo de denuncia
                                    </label>
                                    <select className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                                        <option>Selecciona una categoria</option>
                                        <option>Incumplimiento de protocolo</option>
                                        <option>Conducta no etica</option>
                                        <option>Atencion inadecuada</option>
                                        <option>Falta de confidencialidad</option>
                                        <option>Otro</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Fecha del incidente
                                    </label>
                                    <input
                                        type="date"
                                        className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Descripcion de la denuncia
                                </label>
                                <textarea
                                    rows={6}
                                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Describe los hechos, personas involucradas, fecha, lugar y cualquier evidencia relevante."
                                ></textarea>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Adjuntar evidencia (opcional)
                                </label>
                                <input
                                    type="file"
                                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-gray-700 file:mr-3 file:rounded-md file:border-0 file:bg-blue-50 file:px-3 file:py-1.5 file:text-blue-700 hover:file:bg-blue-100"
                                />
                            </div>

                            <label className="flex items-start gap-2 text-sm text-gray-600">
                                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                <span>
                                    Confirmo que la informacion proporcionada es veridica y autorizo su tratamiento
                                    para fines de investigacion interna.
                                </span>
                            </label>

                            <button
                                type="submit"
                                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Enviar denuncia
                            </button>
                        </form>
                    </Card>
                </div>

                <div className="space-y-4">
                    <Card>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Nuestro compromiso</h3>
                        <div className="space-y-3 text-sm text-gray-700">
                            <p className="flex items-start gap-2">
                                <ShieldCheck className="w-4 h-4 text-blue-600 mt-0.5" />
                                <span>Revisamos cada caso con imparcialidad y enfoque profesional.</span>
                            </p>
                            <p className="flex items-start gap-2">
                                <Lock className="w-4 h-4 text-blue-600 mt-0.5" />
                                <span>Mantenemos estricta confidencialidad de toda la informacion.</span>
                            </p>
                            <p className="flex items-start gap-2">
                                <FileText className="w-4 h-4 text-blue-600 mt-0.5" />
                                <span>Documentamos y damos seguimiento formal a cada denuncia.</span>
                            </p>
                            <p className="flex items-start gap-2">
                                <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5" />
                                <span>En casos urgentes, priorizamos la atencion inmediata.</span>
                            </p>
                        </div>
                    </Card>

                    <Card>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Plazos de respuesta</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Acusamos recibo de tu denuncia en un maximo de 24 horas laborables y te
                            informamos el estado del proceso segun corresponda.
                        </p>
                    </Card>
                </div>
            </section>
        </main>
    );
};

export default ReportsPage;