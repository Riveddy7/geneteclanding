import { Button } from './ui/Button';

export function LeadForm() {
    return (
        <section id="contact" className="bg-slate-950 py-20 text-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                            Agende su Visita de Levantamiento Sin Costo.
                        </h2>
                        <p className="text-slate-400 text-lg">
                            Nuestros ingenieros evaluarán sus vulnerabilidades y diseñarán una propuesta de migración a Seguridad Unificada.
                        </p>
                    </div>
                    <div className="rounded-2xl bg-slate-900 p-8 shadow-2xl border border-slate-800">
                        <form className="space-y-4">
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-slate-300">
                                        Nombre Completo
                                    </label>
                                    <input
                                        id="name"
                                        className="flex h-10 w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-genetec-purple focus:border-transparent transition-all text-white"
                                        placeholder="Juan Pérez"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="company" className="text-sm font-medium text-slate-300">
                                        Empresa Maquiladora / Logística
                                    </label>
                                    <input
                                        id="company"
                                        className="flex h-10 w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-genetec-purple focus:border-transparent transition-all text-white"
                                        placeholder="Empresa S.A. de C.V."
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-slate-300">
                                        Correo Corporativo
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        className="flex h-10 w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-genetec-purple focus:border-transparent transition-all text-white"
                                        placeholder="juan@empresa.com"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium text-slate-300">
                                        Teléfono
                                    </label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        className="flex h-10 w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-genetec-purple focus:border-transparent transition-all text-white"
                                        placeholder="(664) 000-0000"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="cctv" className="text-sm font-medium text-slate-300">
                                    ¿Tiene actualmente sistema de CCTV?
                                </label>
                                <select
                                    id="cctv"
                                    className="flex h-10 w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-genetec-purple focus:border-transparent transition-all text-white"
                                >
                                    <option value="">Seleccione una opción</option>
                                    <option value="yes">Sí</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                            <Button type="submit" size="lg" className="w-full bg-tech-blue hover:bg-blue-600 mt-4 shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                                AGENDAR VISITA TÉCNICA AHORA
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
