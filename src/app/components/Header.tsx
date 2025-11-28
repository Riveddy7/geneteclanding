'use client';

import { Phone, Mail } from 'lucide-react';
import { Button } from './ui/Button';
import Image from 'next/image';

export function Header() {
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
                <div className="flex items-center gap-4">
                    {/* Logo Placeholder - User to replace image */}
                    <div className="relative h-10 w-32">
                        <Image
                            src="/images/iamet-logo.png"
                            alt="Iamet Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <Button
                        variant="primary"
                        className="hidden md:inline-flex gap-2"
                        onClick={scrollToContact}
                    >
                        <Mail className="h-4 w-4" />
                        <span>Contáctanos</span>
                    </Button>
                    {/* Mobile Call Button (Icon only) */}
                    <Button
                        variant="primary"
                        size="sm"
                        className="md:hidden"
                        onClick={scrollToContact}
                    >
                        <Mail className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </header>
    );
}
