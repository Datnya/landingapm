import React, { useState, useEffect } from 'react';
import { X, Calendar } from 'lucide-react';

const WebinarPopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            const hasSeenPopup = sessionStorage.getItem('hasSeenWebinarPopup');
            if (!hasSeenPopup) {
                setIsOpen(true);
                sessionStorage.setItem('hasSeenWebinarPopup', 'true');
            }
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => setIsOpen(false);

    const handleCtaClick = () => {
        setIsOpen(false);
        setTimeout(() => {
            const webinarSection = document.getElementById('webinar-section');
            if (webinarSection) {
                webinarSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 200);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={handleClose} />
            <div className="relative bg-white rounded-[32px] shadow-2xl w-full max-w-3xl overflow-hidden flex flex-col md:flex-row">

                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/20 hover:bg-black/40 text-white rounded-full flex items-center justify-center transition-colors"
                >
                    <X size={18} strokeWidth={3} />
                </button>

                <div className="w-full md:w-[45%] h-64 md:h-auto relative flex-shrink-0">
                    <img
                        src="/webinar_popup.jpg"
                        alt="Webinars APM Group"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <div className="text-primary font-black text-5xl md:text-6xl uppercase leading-none mb-1" style={{fontFamily: 'var(--font-heading)'}}>
                            GRATIS
                        </div>
                        <div className="text-white font-bold text-sm uppercase tracking-widest opacity-90">
                            2 veces al mes
                        </div>
                    </div>
                </div>

                <div className="flex-1 p-7 md:p-10 flex flex-col justify-center bg-white">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-3 block">
                        Webinars Estrategicos
                    </span>
                    <h2 className="text-2xl md:text-3xl font-black text-secondary uppercase tracking-tighter leading-tight mb-4">
                        Conecta con expertos<br />
                        <span className="text-primary">en vivo, sin costo</span>
                    </h2>
                    <p className="text-secondary/65 font-medium leading-relaxed text-sm mb-6">
                        Sesiones virtuales sobre normas ISO, sostenibilidad y gestion empresarial. Aprende, pregunta y crece junto a los mejores especialistas del sector.
                    </p>

                    <div className="space-y-3 mb-7">
                        <div className="flex items-center gap-3 bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                            <div className="w-10 h-10 bg-primary/15 rounded-lg flex items-center justify-center flex-shrink-0 text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15.6 11.6L22 7v10l-6.4-4.5v-1zM4 5h9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2z"/></svg>
                            </div>
                            <div>
                                <p className="font-bold text-secondary text-sm">Via Zoom - Transmision en Vivo</p>
                                <p className="text-xs text-secondary/55 font-medium">Sesiones interactivas y con preguntas</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                            <div className="w-10 h-10 bg-primary/15 rounded-lg flex items-center justify-center flex-shrink-0 text-primary">
                                <Calendar size={20} />
                            </div>
                            <div>
                                <p className="font-bold text-secondary text-sm">Horario Fijo</p>
                                <p className="text-xs text-secondary/55 font-medium">7:00 PM - Hora Peru</p>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={handleCtaClick}
                        className="bg-secondary text-white w-full py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-black transition-all hover:scale-[1.02] active:scale-95 duration-200 shadow-lg"
                    >
                        Ver webinars de este mes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WebinarPopup;
