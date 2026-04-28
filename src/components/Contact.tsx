import {
    ArrowRight,
    Phone,
} from "lucide-react";

const Contact = () => {
    return (
        <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-14 sm:py-16">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.14),_transparent_28%)]" />
            <div className="mx-auto max-w-7xl px-4">
                <div className="relative rounded-[2rem] border border-slate-700/70 bg-slate-900/70 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur sm:p-10">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
                        <div className="space-y-6">
                            <div className="space-y-4">
                                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-400">Contáctenos</p>
                                <h2 className="text-3xl font-bold leading-tight text-slate-50 sm:text-4xl">
                                    Su salud no puede esperar.
                                    <br />
                                    Su empresa tampoco.
                                </h2>
                                <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                                    Escriba por WhatsApp para una respuesta ágil, o use el formulario para consultas detalladas. Un asesor le orientará sobre el servicio o plan que mejor se adapta a sus necesidades.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <p className="text-sm font-semibold text-slate-200">Canales de contacto rápido:</p>
                                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                    <a
                                        href="https://wa.me/593000000000"
                                        className="group inline-flex items-center justify-center gap-2 rounded-lg border border-green-500/20 bg-green-500/10 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-green-400/50 hover:bg-green-500/20 focus:outline-none focus:ring-2 focus:ring-green-500/50"
                                    >
                                        <Phone className="h-4 w-4" />
                                        WhatsApp
                                    </a>
                                    <a
                                        href="mailto:occumasterhealt@outlook.com"
                                        className="group inline-flex items-center justify-center gap-2 rounded-lg border border-blue-500/20 bg-blue-500/10 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-blue-400/50 hover:bg-blue-500/20 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                                    >
                                        <ArrowRight className="h-4 w-4" />
                                        Correo
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-slate-700/50 bg-slate-800/60 p-6 sm:p-7">
                            <h3 className="mb-6 text-lg font-bold text-slate-50">Envíe su consulta</h3>
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-1.5">Correo electrónico</label>
                                    <input
                                        type="email"
                                        placeholder="correo@empresa.com"
                                        className="w-full rounded-lg border border-slate-700 bg-slate-900/50 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 transition-colors focus:border-blue-500 focus:bg-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500/50"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-1.5">Asunto</label>
                                    <input
                                        type="text"
                                        placeholder="¿Qué necesita?"
                                        className="w-full rounded-lg border border-slate-700 bg-slate-900/50 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 transition-colors focus:border-blue-500 focus:bg-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500/50"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-1.5">Mensaje</label>
                                    <textarea
                                        placeholder="Cuéntenos su consulta o necesidad..."
                                        rows={4}
                                        className="w-full rounded-lg border border-slate-700 bg-slate-900/50 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 transition-colors focus:border-blue-500 focus:bg-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500/50 resize-none"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-0"
                                >
                                    Enviar consulta
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;