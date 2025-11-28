'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Cloud, Server, Globe } from 'lucide-react';

import { LucideIcon } from 'lucide-react';

interface Tab {
    id: string;
    label: string;
    icon: LucideIcon;
    title: string;
    description: string;
    videoUrl?: string;
    image?: string;
}

const tabs: Tab[] = [
    {
        id: 'saas',
        label: 'Security Center SaaS',
        icon: Cloud,
        title: 'Gestión en la Nube sin Límites',
        description: 'Olvídese de las actualizaciones manuales. Security Center SaaS ofrece una plataforma siempre actualizada, con ciberseguridad de nivel empresarial y acceso desde cualquier lugar.',
        videoUrl: 'https://genetec.widen.net/content/jihpd4xdhu/mp4/RichMedia_Oversee-security-from-anywhere-on-any-device.mp4',
    },
    {
        id: 'edge',
        label: 'Dispositivos de Borde',
        icon: Server,
        title: 'Potencia en el Borde (Edge)',
        description: 'Implementamos servidores Streamvault y dispositivos IoT que procesan video y datos localmente, garantizando redundancia y menor latencia en operaciones críticas.',
        videoUrl: 'https://genetec.widen.net/s/nzkfzrxvxq/richmedia_162_streamvault-product-family',
    },
    {
        id: 'federation',
        label: 'Federación',
        icon: Globe,
        title: 'Control Unificado Multi-Sitio',
        description: 'Conecte múltiples plantas y centros de distribución en Tijuana bajo un solo mando. La Federación de Genetec permite gestionar alarmas y video de forma centralizada.',
        videoUrl: 'https://genetec.widen.net/s/brtgppj7jf/videostock_mission-control-ui_gettyimages-1255177161',
    },
];

export function DeepDive() {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <section className="bg-slate-50 py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                        Arquitectura Híbrida sin Límites.
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Lo mejor de la nube y el procesamiento local, diseñado para la industria.
                    </p>
                </div>

                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                    {/* Tabs Navigation */}
                    <div className="flex flex-col gap-4">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab)}
                                className={`group relative flex items-start gap-4 rounded-xl p-6 text-left transition-all ${activeTab.id === tab.id
                                    ? 'bg-slate-50 shadow-md ring-1 ring-slate-200'
                                    : 'hover:bg-slate-50'
                                    }`}
                            >
                                <div
                                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg transition-colors ${activeTab.id === tab.id
                                        ? 'bg-genetec-purple text-white'
                                        : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                                        }`}
                                >
                                    <tab.icon className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3
                                        className={`font-bold transition-colors ${activeTab.id === tab.id ? 'text-slate-900' : 'text-slate-600'
                                            }`}
                                    >
                                        {tab.label}
                                    </h3>
                                    <p className="mt-1 text-sm text-slate-500">
                                        {tab.title}
                                    </p>
                                </div>
                                {activeTab.id === tab.id && (
                                    <motion.div
                                        layoutId="activeTabIndicator"
                                        className="absolute inset-0 rounded-xl border-2 border-genetec-purple"
                                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Visual Preview */}
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-900 shadow-2xl">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                                className="absolute inset-0"
                            >
                                {activeTab.videoUrl ? (
                                    <video
                                        src={activeTab.videoUrl}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="h-full w-full object-cover"
                                    />
                                ) : (
                                    <Image
                                        src={activeTab.image || ''}
                                        alt={activeTab.title}
                                        fill
                                        className="object-cover"
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent pointer-events-none" />
                                <div className="absolute bottom-0 left-0 p-8 pointer-events-none">
                                    <h4 className="text-2xl font-bold text-white mb-2">{activeTab.title}</h4>
                                    <p className="text-slate-300">{activeTab.description}</p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
