'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const hardware = [
    {
        id: 'sharpv',
        name: 'AutoVu SharpV',
        type: 'LPR Camera',
        description: 'Reconocimiento de placas de alto rendimiento con análisis en el borde. Diseñado para control de acceso vehicular y seguridad urbana.',
        image: '/images/autovu-sharpv.png',
    },
    {
        id: 'synergis',
        name: 'Synergis Cloud Link',
        type: 'Access Controller',
        description: 'Controlador inteligente PoE para control de acceso. Gestiona lectores y cerraduras con ciberseguridad avanzada y funcionamiento offline.',
        image: '/images/synergis-cloud-link.png',
    },
    {
        id: 'streamvault',
        name: 'Streamvault',
        type: 'Security Appliance',
        description: 'Servidor de seguridad unificada llave en mano. Pre-endurecido cibernéticamente y optimizado para video, acceso y LPR.',
        image: '/images/edge-streamvault.png',
    },
    {
        id: 'intercom',
        name: 'SIP Intercom',
        type: 'Communications',
        description: 'Intercomunicadores de video SIP compatibles (Zenitel/Axis). Audio cristalino y video HD para verificación de visitantes.',
        image: '/images/security-center-ui.png', // Fallback/Placeholder
    },
];

export function HardwareCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % hardware.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + hardware.length) % hardware.length);
    };

    return (
        <section className="bg-black py-24 text-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                        Ingeniería en el Borde.
                    </h2>
                    <p className="mt-4 text-lg text-slate-400">
                        Hardware agnóstico y abierto. No lo encadenamos a una sola marca de cámaras.
                    </p>
                </div>

                <div className="relative mx-auto max-w-7xl">
                    <div className="flex items-center justify-center gap-8">
                        <button
                            onClick={prevSlide}
                            className="hidden md:flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900/50 text-slate-300 transition-colors hover:bg-genetec-purple hover:text-white hover:border-genetec-purple"
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </button>

                        <div
                            className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-white/15 backdrop-blur-2xl border border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.1)] flex-shrink-0"
                            style={{ height: '450px' }}
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="absolute inset-0 flex flex-col md:flex-row items-center"
                                >
                                    {/* Image Side - Reduced width for wider content */}
                                    <div className="relative h-1/2 w-full md:h-full md:w-2/5 bg-black/20">
                                        <Image
                                            src={hardware[currentIndex].image}
                                            alt={hardware[currentIndex].name}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                                    </div>

                                    {/* Content Side - Expanded width */}
                                    <div className="flex h-1/2 w-full flex-col justify-center p-8 md:h-full md:w-3/5 md:pl-12">
                                        <div className="mb-4 inline-flex w-fit items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-md">
                                            {hardware[currentIndex].type}
                                        </div>
                                        <h3 className="mb-4 text-4xl font-bold text-white tracking-tight">
                                            {hardware[currentIndex].name}
                                        </h3>
                                        <p className="text-slate-300 text-lg leading-relaxed max-w-lg">
                                            {hardware[currentIndex].description}
                                        </p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <button
                            onClick={nextSlide}
                            className="hidden md:flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900/50 text-slate-300 transition-colors hover:bg-genetec-purple hover:text-white hover:border-genetec-purple"
                        >
                            <ChevronRight className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    <div className="mt-8 flex justify-center gap-4 md:hidden">
                        <button
                            onClick={prevSlide}
                            className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900/50 text-slate-300 transition-colors hover:bg-genetec-purple hover:text-white"
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900/50 text-slate-300 transition-colors hover:bg-genetec-purple hover:text-white"
                        >
                            <ChevronRight className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
