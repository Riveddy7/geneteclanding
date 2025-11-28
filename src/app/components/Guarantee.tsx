import { CheckCircle2, ShieldCheck } from 'lucide-react';

export function Guarantee() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-2xl ring-1 ring-slate-200 md:p-12 lg:p-16 relative overflow-hidden">
                    {/* Decorative background elements */}
                    <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-blue-100/50 blur-3xl" />
                    <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-purple-100/50 blur-3xl" />

                    <div className="relative z-10 flex flex-col items-center text-center space-y-8">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/30">
                            <ShieldCheck className="h-10 w-10" />
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                                Garantía de Implementación Certificada
                            </h2>
                            <p className="mx-auto max-w-2xl text-lg text-slate-600">
                                En Iamet, no solo instalamos tecnología; garantizamos resultados. Nuestra certificación como <strong>Genetec Unified Partner</strong> nos permite ofrecer una implementación sin riesgos.
                            </p>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2 text-left w-full max-w-2xl">
                            <div className="flex gap-4 rounded-xl bg-slate-50 p-4 border border-slate-100">
                                <CheckCircle2 className="h-6 w-6 shrink-0 text-green-500" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Cero Tiempo de Inactividad</h3>
                                    <p className="text-sm text-slate-500">Migración planificada para mantener su operación activa.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 rounded-xl bg-slate-50 p-4 border border-slate-100">
                                <CheckCircle2 className="h-6 w-6 shrink-0 text-green-500" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Soporte Post-Venta 24/7</h3>
                                    <p className="text-sm text-slate-500">Equipo local en Tijuana listo para responder.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
