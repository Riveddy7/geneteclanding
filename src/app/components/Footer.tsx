import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-white border-t border-slate-200 py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-4">
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold tracking-tighter text-slate-900">
                                Iamet
                            </span>
                            <span className="text-[10px] font-semibold uppercase tracking-widest text-genetec-purple">
                                Genetec Unified Partner
                            </span>
                        </div>
                        <p className="text-sm text-slate-500">
                            Soluciones de seguridad unificada para la industria maquiladora y logística de Tijuana.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-slate-900 mb-4">Contacto</h3>
                        <address className="not-italic text-sm text-slate-600 space-y-2">
                            <p>Blvd. Agua Caliente 1234</p>
                            <p>Col. Aviación, Tijuana, B.C.</p>
                            <p>C.P. 22014</p>
                            <p className="mt-4 font-medium">Soporte: (664) 000-0000</p>
                        </address>
                    </div>
                    <div>
                        <h3 className="font-semibold text-slate-900 mb-4">Legal</h3>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li>
                                <Link href="#" className="hover:text-genetec-purple">
                                    Política de Privacidad
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-genetec-purple">
                                    Términos y Condiciones
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-slate-900 mb-4">Partners</h3>
                        <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-400">
                            <span>Genetec</span>
                            <span>Microsoft</span>
                            <span>Cisco</span>
                            <span>Axis</span>
                            <span>Hanwha</span>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-slate-100 pt-8 text-center text-sm text-slate-500">
                    © 2024 Iamet. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
}
