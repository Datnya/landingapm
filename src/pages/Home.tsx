import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import SyntheticHero from '../components/ui/synthetic-hero';
import { useI18n } from '../i18n';

// ── Carousel: P2, P3, P4 — converted from DNG to JPEG for browser compatibility
const CAROUSEL_IMAGES = [
    {
        src: '/Imágenes/Carrusel/P2.webp',
        alt: 'Webinar APM Group — Sesión 2',
        rotate: 'rotate-90'
    },
    {
        src: '/Imágenes/Carrusel/P3.webp',
        alt: 'Webinar APM Group — Sesión 3',
        rotate: 'rotate-90'
    },
    {
        src: '/Imágenes/Carrusel/P4.webp',
        alt: 'Webinar APM Group — Sesión 4',
        rotate: 'rotate-90'
    },
];

// ── Webinar Carousel Component ───────────────────────────────────────────────
const WebinarCarousel = () => {
    const [current, setCurrent] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const total = CAROUSEL_IMAGES.length;

    const goTo = useCallback((idx: number) => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrent(((idx % total) + total) % total);
        setTimeout(() => setIsTransitioning(false), 700);
    }, [isTransitioning, total]);

    const next = useCallback(() => goTo(current + 1), [current, goTo]);
    const prev = useCallback(() => goTo(current - 1), [current, goTo]);

    // Auto-play every 4.5s
    useEffect(() => {
        const timer = setInterval(next, 4500);
        return () => clearInterval(timer);
    }, [next]);

    return (
        <div className="relative w-full h-full rounded-[32px] overflow-hidden group shadow-2xl bg-secondary/40">
            {/* Slides */}
            {CAROUSEL_IMAGES.map((img, idx) => (
                <div
                    key={idx}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${idx === current ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-[1.04] z-0'}`}
                >
                    <img
                        src={img.src}
                        alt={img.alt}
                        className={`w-full h-full object-contain bg-secondary/10 ${img.rotate}`}
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </div>
            ))}

            {/* Prev / Next arrows */}
            <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white hover:bg-primary hover:text-secondary transition-all opacity-0 group-hover:opacity-100 duration-300"
                aria-label="Anterior"
            >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white hover:bg-primary hover:text-secondary transition-all opacity-0 group-hover:opacity-100 duration-300"
                aria-label="Siguiente"
            >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {CAROUSEL_IMAGES.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => goTo(idx)}
                        className={`rounded-full transition-all duration-300 ${idx === current ? 'w-6 h-2 bg-primary' : 'w-2 h-2 bg-white/50 hover:bg-white'}`}
                        aria-label={`Diapositiva ${idx + 1}`}
                    />
                ))}
            </div>

            {/* Slide counter */}
            <div className="absolute top-4 right-4 z-20 bg-black/30 backdrop-blur-md px-3 py-1 rounded-lg text-white text-[10px] font-black uppercase tracking-widest font-heading">
                {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </div>
        </div>
    );
};

// ── SVG Icons ────────────────────────────────────────────────────────────────
const IconChart = () => <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 16 16"><path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zm-3 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V7zm-3 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-4zM2 13a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" /></svg>;
const IconCheck = () => <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 16 16"><path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" /><path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" /></svg>;
const IconGrad = () => <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 16 16"><path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5zM8 8.46 1.75 5.96 8 3.048l6.25 2.912L8 8.46z" /><path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .326.656l1.7.5a.5.5 0 0 0 .656-.326l.5-1.7a.5.5 0 0 0-.326-.656l-1.7-.5zm3.972 1.884a.5.5 0 0 0-.648.343l-.5 1.75a.5.5 0 0 0 .343.648l1.75.5a.5.5 0 0 0 .648-.343l.5-1.75a.5.5 0 0 0-.343-.648l-1.75-.5z" /></svg>;
const IconArrow = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" /></svg>;
const IconBadge = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;

// ── Home Page ─────────────────────────────────────────────────────────────────

const Home = () => {
    const { t } = useI18n();

    const pilares = [
        {
            icon: <IconChart />,
            titleKey: 'services_section.consultoria_title',
            descKey: 'services_section.consultoria_desc',
            href: '/servicios/consultoria',
        },
        {
            icon: <IconCheck />,
            titleKey: 'services_section.auditoria_title',
            descKey: 'services_section.auditoria_desc',
            href: '/servicios/auditoria',
        },
        {
            icon: <IconGrad />,
            titleKey: 'services_section.formacion_title',
            descKey: 'services_section.formacion_desc',
            href: '/servicios/formacion',
        },
    ];

    return (
        <>
            <Helmet>
                <title>APM Group | Consultoría, Auditoría y Formación ISO en Perú</title>
                <meta name="description" content="APM Group potencia tu organización con normas internacionales ISO, sostenibilidad e innovación empresarial. Expertos en consultoría, auditoría y formación." />
                <link rel="canonical" href="https://apmgroup.pe/" />
            </Helmet>

            {/* ── HERO ─────────────────────────────────────────────────────── */}
            <SyntheticHero
                title={t('hero.title')}
                description={t('hero.description')}
                badgeText={t('hero.badge')}
                badgeLabel="APM GROUP"
                ctaButtons={[
                    {
                        text: t('hero.cta_brochure'),
                        href: '/Herramientas/Brochure APM __.pdf',
                        primary: true,
                        download: true,
                    },
                    {
                        text: t('hero.cta_services'),
                        href: '/servicios',
                        primary: false,
                    },
                ]}
                microDetails={[
                    t('hero.micro_1'),
                    t('hero.micro_2'),
                    t('hero.micro_3'),
                ]}
            />

            {/* ── PILARES DE SERVICIO ──────────────────────────────────────── */}
            <section id="pilares" className="py-24 md:py-32 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <p className="uppercase font-black text-primary tracking-[0.25em] mb-4 text-sm font-heading">
                        {t('services_section.label')}
                    </p>
                    <h2 className="text-4xl md:text-5xl font-black text-secondary mb-8 leading-tight uppercase tracking-wide font-heading">
                        {t('services_section.title_1')}{' '}
                        <span className="text-primary">{t('services_section.title_2')}</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-primary mx-auto mb-20 rounded-full" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto px-4">
                        {pilares.map((p, i) => (
                            <div key={i} className="bg-white p-12 rounded-[50px] shadow-[0_10px_60px_rgba(0,0,0,0.03)] border-2 border-primary/80 hover:translate-y-[-20px] hover:shadow-[0_40px_100px_rgba(0,0,0,0.1)] transition-all duration-700 flex flex-col items-center group relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -z-0" />
                                <div className="relative z-10 flex flex-col items-center">
                                    <div className="w-24 h-24 bg-[#F9FBE7] rounded-3xl flex items-center justify-center mb-10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:rotate-6 group-hover:scale-110">
                                        {p.icon}
                                    </div>
                                    <h3 className="text-2xl font-black mb-6 uppercase tracking-tight text-secondary font-heading">
                                        {t(p.titleKey)}
                                    </h3>
                                    <p className="text-gray-500 leading-relaxed mb-10 text-base font-medium text-center">
                                        {t(p.descKey)}
                                    </p>
                                    <a href={p.href} className="text-primary font-black uppercase tracking-widest flex items-center gap-3 hover:translate-x-2 transition-all text-xs font-heading">
                                        {t('services_section.learn_more')} <IconArrow />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── WEBINAR SECTION ──────────────────────────────────────────── */}
            <section className="bg-secondary text-white py-24 md:py-32 m-8 md:m-16 rounded-[60px] relative overflow-hidden group">
                <div className="absolute inset-0 z-0">
                    <img src="/Imágenes/Webinar.webp" alt="Webinar APM" className="w-full h-full object-cover opacity-20 transition-transform duration-1000 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-secondary/60" />
                </div>

                <div className="container mx-auto px-8 lg:px-16 relative z-10">
                    {/* Header badges */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
                        <span className="bg-primary text-black px-5 py-2 rounded-lg text-xs font-black uppercase tracking-widest inline-block animate-pulse font-heading">
                            {t('webinar.badge')}
                        </span>
                        <span className="text-white/40 font-bold text-xs uppercase tracking-widest">{t('webinar.frequency')}</span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                        {/* LEFT: Info + Próximo Webinar */}
                        <div className="lg:col-span-7 space-y-10">
                            <div>
                                <h2 className="text-5xl md:text-7xl font-black leading-[0.9] mb-6 uppercase tracking-tighter font-heading">
                                    {t('webinar.title_1')} <br />
                                    <span className="text-primary italic">{t('webinar.title_2')}</span>
                                </h2>
                                <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl font-medium"
                                    dangerouslySetInnerHTML={{ __html: t('webinar.description') }}
                                />
                            </div>

                            {/* Próximo Webinar Card */}
                            <div className="relative bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/50 rounded-[32px] p-8 overflow-hidden">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="flex items-center gap-2 bg-primary text-black text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full font-heading">
                                        <span className="w-2 h-2 bg-black rounded-full animate-ping inline-block" />
                                        {t('webinar.next_badge')}
                                    </span>
                                    <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">{t('webinar.limited')}</span>
                                </div>

                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                                    <div className="bg-white text-secondary rounded-2xl px-6 py-5 text-center flex-shrink-0 shadow-xl">
                                        <p className="text-[10px] font-black uppercase tracking-wider text-secondary/40 leading-none mb-1 font-heading">MAR</p>
                                        <p className="text-5xl font-black leading-none font-heading">14</p>
                                        <p className="text-[10px] font-black text-secondary/40 mt-1">2026</p>
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="text-2xl md:text-3xl font-black text-white leading-tight mb-2 uppercase tracking-tight font-heading">
                                            {t('webinar.topic_title').split('ISO')[0]}
                                            <span className="text-primary"> ISO {t('webinar.topic_title').split('ISO')[1]}</span>
                                        </h3>
                                        <p className="text-white/50 text-sm font-medium mb-4">{t('webinar.topic_desc')}</p>
                                        <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-white/40 font-heading">
                                            <span className="flex items-center gap-1.5">
                                                <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                {t('webinar.time')}
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                                                {t('webinar.platform')}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                    <a
                                        href="/contacto"
                                        className="flex-1 sm:flex-none inline-flex items-center justify-center gap-3 px-10 py-5 bg-primary text-black rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 hover:shadow-[0_20px_40px_rgba(178,197,53,0.5)] transition-all shadow-[0_10px_30px_rgba(178,197,53,0.3)] font-heading"
                                    >
                                        {t('webinar.cta_register')}
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                                    </a>
                                    <a
                                        href="#"
                                        className="flex-1 sm:flex-none inline-flex items-center justify-center gap-3 px-8 py-5 border border-white/20 text-white/70 rounded-2xl font-bold text-xs uppercase tracking-widest hover:border-primary/60 hover:text-primary transition-all font-heading"
                                    >
                                        {t('webinar.cta_calendar')}
                                    </a>
                                </div>

                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
                            </div>

                            {/* Second session */}
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-4 font-heading">{t('webinar.also_in')}</p>
                                <div className="flex gap-5 items-center p-5 bg-white/5 rounded-2xl border border-white/5 hover:border-primary/20 transition-all">
                                    <div className="bg-white/10 text-white w-14 h-14 rounded-xl flex flex-col items-center justify-center flex-shrink-0">
                                        <span className="text-[9px] font-black uppercase leading-none mb-0.5 text-white/50 font-heading">MAR</span>
                                        <span className="text-xl font-black leading-none font-heading">28</span>
                                    </div>
                                    <div className="flex-1">
                                        <h5 className="font-black text-sm uppercase leading-tight mb-1 font-heading">{t('webinar.session_title')}</h5>
                                        <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">19:00 PM · VIA ZOOM</p>
                                    </div>
                                    <a href="/contacto" className="text-[10px] font-black text-primary uppercase tracking-widest hover:text-white transition-all flex items-center gap-1 font-heading">
                                        {t('webinar.register')}
                                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Carousel */}
                        <div className="lg:col-span-5 h-[420px] lg:h-[600px]">
                            <WebinarCarousel />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CAMPUS ──────────────────────────────────────────────────── */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="bg-secondary p-12 md:p-24 rounded-[60px] relative overflow-hidden flex flex-col lg:flex-row items-center gap-16">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

                        <div className="lg:w-1/2 relative z-10 text-center lg:text-left">
                            <span className="text-primary font-black text-[10px] uppercase tracking-[0.4em] mb-6 block font-heading">
                                {t('campus.label')}
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8 font-heading">
                                {t('campus.title_1')} <br />
                                {t('campus.title_2')}{' '}
                                <span className="text-primary italic">{t('campus.title_3')}</span>
                            </h2>
                            <p className="text-white/50 text-lg font-medium leading-relaxed mb-10">
                                {t('campus.description')}
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
                                {(['campus.badge_1', 'campus.badge_2', 'campus.badge_3'] as const).map((key, i) => (
                                    <div key={i} className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 text-[10px] font-black uppercase text-white/70 font-heading">
                                        <span className="text-primary"><IconBadge className="w-4 h-4" /></span>
                                        {t(key)}
                                    </div>
                                ))}
                            </div>
                            <a href="/cursos" className="inline-block px-12 py-6 bg-primary text-secondary rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-2xl font-heading">
                                {t('campus.cta')}
                            </a>
                        </div>

                        <div className="lg:w-1/2 relative group">
                            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border border-white/10 transform lg:rotate-3 group-hover:rotate-0 transition-transform duration-700">
                                <img src="/Imágenes/Formación.webp" alt="Campus Virtual Corporativo y Entrenamiento en Competencias" loading="lazy" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                                <div className="absolute inset-0 bg-secondary/40 flex items-center justify-center scale-0 group-hover:scale-100 transition-transform">
                                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-secondary shadow-2xl animate-bounce">
                                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
