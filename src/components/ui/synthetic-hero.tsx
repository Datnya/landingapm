"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(useGSAP);
try {
    gsap.registerPlugin(SplitText);
} catch (e) {
    console.warn("GSAP SplitText not available, falling back to simple animation.");
}

interface HeroProps {
    title: string;
    description: string;
    badgeText?: string;
    badgeLabel?: string;
    ctaButtons?: Array<{ text: string; href?: string; primary?: boolean; download?: boolean }>;
    microDetails?: Array<string>;
}

const SyntheticHero = ({
    title = "Potenciamos organizaciones con normas internacionales, sostenibilidad e innovación",
    description = "Transformamos organizaciones a través de la formación técnica especializada y la consultoría estratégica de alto impacto.",
    badgeText = "Líderes en Consultoría",
    badgeLabel = "APM GROUP",
    ctaButtons = [
        { text: "Explorar Soluciones", href: "#servicios", primary: true },
        { text: "Ver Portafolio", href: "#servicios" },
    ],
    microDetails = [
        "Certificaciones ISO",
        "Mejora Continua",
        "Estrategia de Negocio",
    ],
}: HeroProps) => {
    const sectionRef = useRef<HTMLElement | null>(null);
    const headingRef = useRef<HTMLHeadingElement | null>(null);
    const paragraphRef = useRef<HTMLParagraphElement | null>(null);
    const ctaRef = useRef<HTMLDivElement | null>(null);
    const microRef = useRef<HTMLUListElement | null>(null);

    useGSAP(
        () => {
            if (!headingRef.current) return;

            document.fonts.ready.then(() => {
                let split: any = null;
                try {
                    split = new SplitText(headingRef.current!, {
                        type: "lines",
                        wordsClass: "hero-lines",
                    });

                    gsap.set(split.lines, {
                        filter: "blur(16px)",
                        yPercent: 24,
                        autoAlpha: 0,
                        scale: 1.04,
                        transformOrigin: "50% 100%",
                    });
                } catch (e) {
                    gsap.set(headingRef.current, { autoAlpha: 0, y: 30, filter: "blur(10px)" });
                }

                if (paragraphRef.current) {
                    gsap.set(paragraphRef.current, { autoAlpha: 0, y: 8 });
                }
                if (ctaRef.current) {
                    gsap.set(ctaRef.current, { autoAlpha: 0, y: 8 });
                }

                const microItems = microRef.current
                    ? Array.from(microRef.current.querySelectorAll("li"))
                    : [];
                if (microItems.length > 0) {
                    gsap.set(microItems, { autoAlpha: 0, y: 6 });
                }

                const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

                if (split && split.lines) {
                    tl.to(
                        split.lines,
                        {
                            filter: "blur(0px)",
                            yPercent: 0,
                            autoAlpha: 1,
                            scale: 1,
                            duration: 0.9,
                            stagger: 0.12,
                        },
                        0.1,
                    );
                } else {
                    tl.to(headingRef.current, { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 1 }, 0.1);
                }

                if (paragraphRef.current) {
                    tl.to(paragraphRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, "-=0.55");
                }
                if (ctaRef.current) {
                    tl.to(ctaRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, "-=0.35");
                }
                if (microItems.length > 0) {
                    tl.to(microItems, { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.1 }, "-=0.25");
                }
            });
        },
        { scope: sectionRef },
    );

    return (
        <section
            ref={sectionRef}
            className="relative flex items-center justify-center min-h-screen overflow-hidden bg-black"
        >
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    src="/Videos/FONDO INICIO VID.mp4"
                />
                {/* Black overlay at 50% opacity */}
                <div className="absolute inset-0 bg-black/50" />
            </div>

            <div className="relative z-10 flex flex-col items-start text-left px-4 md:px-8 lg:px-12 max-w-7xl w-full pt-20">

                <h1
                    ref={headingRef}
                    className="text-3xl md:text-4xl lg:text-5xl max-w-3xl font-black tracking-tight text-white mb-6 leading-[1.1] font-heading uppercase"
                >
                    {title}
                </h1>

                <p
                    ref={paragraphRef}
                    className="text-emerald-50/80 text-base md:text-lg max-w-2xl mb-12 font-light leading-relaxed"
                >
                    {description}
                </p>

                <div
                    ref={ctaRef}
                    className="flex flex-wrap items-center justify-start gap-6"
                >
                    {ctaButtons.map((button, index) => {
                        const isPrimary = button.primary ?? index === 0;
                        const baseClasses = "font-heading uppercase tracking-widest text-sm px-10 py-4 rounded-xl transition-all cursor-pointer inline-block text-center ";
                        const classes = isPrimary
                            ? baseClasses + "backdrop-blur-lg bg-primary hover:bg-primary/90 text-secondary shadow-xl border-none"
                            : baseClasses + "border-2 border-white/20 text-white hover:bg-white/10 backdrop-blur-lg";

                        if (button.href) {
                            // For download links: use <a> with download attribute and filename
                            if (button.download) {
                                return (
                                    <a
                                        key={index}
                                        href={button.href}
                                        download="Brochure APM.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={classes}
                                    >
                                        {button.text}
                                    </a>
                                );
                            }
                            // For internal React Router links
                            return (
                                <a
                                    key={index}
                                    href={button.href}
                                    className={classes}
                                >
                                    {button.text}
                                </a>
                            );
                        }
                        return (
                            <button key={index} className={classes}>{button.text}</button>
                        );
                    })}
                </div>

                {microDetails.length > 0 && (
                    <ul
                        ref={microRef}
                        className="mt-12 flex flex-wrap justify-start gap-8 text-xs font-light tracking-tight text-white/90"
                    >
                        {microDetails.map((detail, index) => (
                            <li key={index} className="flex items-center gap-3">
                                <span className="h-1 w-1 rounded-full bg-emerald-200/60" />
                                {detail}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </section>
    );
};

export default SyntheticHero;
