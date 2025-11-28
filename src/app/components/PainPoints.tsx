import { AlertTriangle, ShieldAlert, Clock } from 'lucide-react';

const justifications = [
    {
        icon: AlertTriangle,
        title: "Visibilidad Fragmentada",
        description: "Operar con sistemas aislados crea puntos ciegos. La seguridad unificada elimina las brechas entre video, acceso y alarmas.",
        color: "text-red-600",
        bg: "bg-red-50",
    },
    {
        icon: ShieldAlert,
        title: "Cumplimiento Normativo",
        description: "Las certificaciones C-TPAT y OEA exigen trazabilidad total. Un sistema unificado garantiza auditorías exitosas sin esfuerzo.",
        color: "text-orange-600",
        bg: "bg-orange-50",
    },
    {
        icon: Clock,
        title: "Eficiencia Operativa",
        description: "Reduzca el tiempo de respuesta ante incidentes. Correlacione eventos automáticamente y tome decisiones informadas al instante.",
        color: "text-amber-600",
        bg: "bg-amber-50",
    },
];

export function PainPoints() {
    return (
        <section id="justification" className="bg-white py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl mb-4">
                        ¿Por qué su operación necesita Seguridad Unificada?
                    </h2>
                    <p className="text-lg text-slate-600">
                        La complejidad de las amenazas modernas requiere una respuesta coordinada. Deje atrás los silos tecnológicos.
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-3">
                    {justifications.map((point, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1"
                        >
                            <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl ${point.bg} ${point.color}`}>
                                <point.icon className="h-7 w-7" />
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-slate-900">
                                {point.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {point.description}
                            </p>
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
