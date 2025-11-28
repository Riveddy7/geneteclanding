import { CheckCircle2, ShieldCheck } from 'lucide-react';

const benefits = [
    "Certificación en Infraestructura Crítica ANSI/TIA-942-B.",
    "Especialistas en Fibra Óptica y Redes Industriales.",
    "Soporte local en Tijuana con tiempos de respuesta garantizados.",
    "Partners oficiales de Genetec.",
];

export function Authority() {
    return (
        <section className="bg-slate-900 py-24 text-white relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Authority Content */}
                    <div>
                        <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                            Integración Certificada en Tijuana.
                        </h2>
                        <p className="mb-8 text-lg text-slate-300 leading-relaxed">
                            No solo instalamos cajas; garantizamos la continuidad de su negocio. Nuestra experiencia en infraestructura crítica nos permite desplegar soluciones que perduran.
                        </p>
                        <div className="space-y-4">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <CheckCircle2 className="h-6 w-6 shrink-0 text-green-500" />
                                    <span className="text-slate-300">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Guarantee Card */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur opacity-30" />
                        <div className="relative rounded-3xl bg-slate-800/50 border border-slate-700 p-8 backdrop-blur-sm">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/30 mb-6">
                                <ShieldCheck className="h-8 w-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Garantía de Implementación
                            </h3>
                            <p className="text-slate-300 mb-6">
                                Como <strong>Genetec Unified Partner</strong>, ofrecemos una implementación sin riesgos con soporte post-venta dedicado.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800 border border-slate-700">
                                    <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                                    <span className="font-medium text-slate-200">Cero Tiempo de Inactividad</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800 border border-slate-700">
                                    <div className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                                    <span className="font-medium text-slate-200">Soporte Local 24/7</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
