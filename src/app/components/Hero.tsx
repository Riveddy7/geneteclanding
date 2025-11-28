'use client';

import { Button } from './ui/Button';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useState, useEffect } from 'react';

const phrases = [
    "Videovigilancia",
    "Control de Acceso",
    "Alarmas",
    "Eventos",
    "Audio",
    "Seguridad Unificada"
];

function TypewriterText({ text }: { text: string }) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) => text.slice(0, latest));

    useEffect(() => {
        const controls = animate(count, text.length, {
            type: "tween",
            duration: text.length * 0.05, // Speed of typing
            ease: "linear",
        });
        return controls.stop;
    }, [text, count]);

    return <motion.span>{displayText}</motion.span>;
}

export function Hero() {
    const [index, setIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentPhrase = phrases[index];
        const typeSpeed = isDeleting ? 50 : 100;
        const pauseTime = isDeleting ? 500 : 2000; // Pause at end of word

        // Stop at the last phrase
        if (index === phrases.length - 1 && !isDeleting && displayText === currentPhrase) {
            return;
        }

        const timeout = setTimeout(() => {
            if (!isDeleting && displayText === currentPhrase) {
                // Finished typing, wait then delete
                setTimeout(() => setIsDeleting(true), pauseTime);
            } else if (isDeleting && displayText === "") {
                // Finished deleting, move to next word
                setIsDeleting(false);
                setIndex((prev) => (prev + 1) % phrases.length); // Loop back to start
            } else {
                // Typing or deleting
                const nextText = isDeleting
                    ? currentPhrase.substring(0, displayText.length - 1)
                    : currentPhrase.substring(0, displayText.length + 1);
                setDisplayText(nextText);
            }
        }, typeSpeed);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, index, phrases]);

    const scrollToContent = () => {
        const nextSection = document.getElementById('justification');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative overflow-hidden bg-slate-900 h-screen flex items-center">
            {/* Video Background Placeholder */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-slate-900/80 z-10" />
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover opacity-50"
                >
                    {/* Placeholder video URL - user to replace */}
                    <source src="https://genetec.widen.net/content/v2jg2zmnb6/mp4/RichMedia_EN_Security-Center_See-it-all-in-one-place.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="container relative z-20 mx-auto px-4 md:px-6 text-center">
                <div className="mx-auto max-w-7xl space-y-12">
                    <h1 className="text-6xl font-extrabold tracking-tight text-white sm:text-7xl xl:text-8xl/none min-h-[3.5em] sm:min-h-[3em]">
                        Genetec Security Center: <br />
                        Tu sistema de{' '}
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                            {displayText}
                            <motion.span
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ repeat: Infinity, duration: 0.8 }}
                                className="inline-block w-[3px] h-[1em] bg-purple-400 ml-1 align-middle"
                            />
                        </span>
                    </h1>

                    <div className="flex flex-col items-center justify-center gap-4 min-[400px]:flex-row pt-8">
                        <Button
                            onClick={scrollToContent}
                            size="lg"
                            className="gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white text-xl px-10 py-6 h-auto rounded-full shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(255,255,255,0.3)]"
                        >
                            Conoce la solución
                            <ArrowDown className="h-6 w-6" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
