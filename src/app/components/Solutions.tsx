'use client';

import { Video, KeyRound, Car, Mic, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const solutions = [
    {
        id: 'video',
        icon: Video,
        title: "VSaaS - Stratocast",
        shortDesc: "Videovigilancia en la Nube.",
        fullDesc: "Elimine los grabadores locales vulnerables. Stratocast graba directamente en Microsoft Azure con encriptación de extremo a extremo, permitiendo acceso seguro desde cualquier dispositivo sin mantenimiento de servidores.",
    },
    {
        id: 'access',
        icon: KeyRound,
        title: "ACaaS - Synergis",
        shortDesc: "Control de Acceso Unificado.",
        fullDesc: "Modernice su control de acceso. Gestione miles de credenciales, horarios y niveles de acceso desde una interfaz web unificada. Revoque permisos instantáneamente en múltiples sitios.",
    },
    {
        id: 'lpr',
        icon: Car,
        title: "LPR - AutoVu",
        shortDesc: "Inteligencia Logística.",
        fullDesc: "Más que seguridad, inteligencia operativa. Rastree contenedores, gestione listas blancas/negras de vehículos y automatice el acceso a patios con lectura de placas de alta precisión.",
    },
    {
        id: 'comms',
        icon: Mic,
        title: "Comms - Sipelia",
        shortDesc: "Gestión de Intercomunicadores.",
        fullDesc: "Centralice sus comunicaciones. Integre intercomunicadores SIP directamente en su mapa de seguridad, permitiendo verificación visual y auditiva antes de autorizar accesos.",
    },
];

export function Solutions() {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                        El Poder de la Unificación: <span className="text-genetec-purple">Todo en una sola interfaz.</span>
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Seleccione una solución para conocer más.
                    </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {solutions.map((solution) => (
                        <motion.div
                            key={solution.id}
                            onClick={() => setSelectedId(selectedId === solution.id ? null : solution.id)}
                            className={`cursor-pointer group relative flex flex-col items-center text-center p-6 rounded-2xl transition-all duration-300 ${selectedId === solution.id
                                    ? 'bg-slate-900 text-white shadow-2xl scale-105 ring-2 ring-genetec-purple'
                                    : 'bg-slate-50 hover:bg-white hover:shadow-lg border border-slate-100'
                                }`}
                            layout
                        >
                            <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl transition-all ${selectedId === solution.id
                                    ? 'bg-genetec-purple text-white'
                                    : 'bg-white shadow-sm text-genetec-purple group-hover:bg-genetec-purple group-hover:text-white'
                                }`}>
                                <solution.icon className="h-8 w-8" />
                            </div>
                            <h3 className={`mb-2 text-lg font-bold ${selectedId === solution.id ? 'text-white' : 'text-slate-900'}`}>
                                {solution.title}
                            </h3>
                            <p className={`text-sm mb-4 ${selectedId === solution.id ? 'text-slate-300' : 'text-slate-600'}`}>
                                {solution.shortDesc}
                            </p>

                            <AnimatePresence>
                                {selectedId === solution.id && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pt-4 border-t border-slate-700/50 mt-2">
                                            <p className="text-sm text-slate-300 leading-relaxed">
                                                {solution.fullDesc}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {selectedId !== solution.id && (
                                <div className="mt-auto pt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-xs font-bold text-genetec-purple flex items-center gap-1">
                                        Ver más <ArrowRight className="h-3 w-3" />
                                    </span>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
