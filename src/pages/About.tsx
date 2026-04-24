import React from 'react';
import { Helmet } from 'react-helmet-async';
import SpecialistsSection from '../components/sections/specialists-section';
import { Target, Eye, Heart } from 'lucide-react';
import { useI18n } from '../i18n';

const About = () => {
    const { t } = useI18n();

    return (
        <div className="pt-20">
            <Helmet>
                <title>Quiénes Somos | APM Group</title>
                <meta name="description" content="Conoce a nuestro equipo de especialistas. En APM Group nos mueve el propósito de transformar organizaciones hacia la excelencia, la sostenibilidad y el crecimiento." />
                <link rel="canonical" href="https://apmgroup.pe/nosotros" />
            </Helmet>
            {/* Hero Section */}
            <section className="bg-secondary text-white py-24 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img src="/Imágenes/quienes somos fondo.webp" alt="Equipo de Consultores de APM Group en ambiente de trabajo" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <p className="uppercase font-bold text-primary tracking-[0.25em] mb-4 text-sm">{t('about.hero_label')}</p>
                    <h1 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tight">
                        {t('about.hero_title')} <span className="text-primary">{t('about.hero_title_em')}</span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-white/70 text-lg md:text-xl font-medium leading-relaxed">
                        {t('about.hero_desc')}
                    </p>
                </div>
            </section>

            {/* Mission / Vision / Values */}
            <section className="py-32 bg-[#F8FAFC]">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-6xl mx-auto mb-24">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-8 font-heading">
                            En APM Group, transformamos organizaciones y potenciamos personas
                        </h2>
                        <h3 className="text-xl md:text-2xl font-black text-secondary mb-10">
                            Más de 20 años creando valor a nivel nacional y LATAM, con consultorías, auditorías y formación de alto impacto.
                        </h3>
                        <div className="space-y-6 text-secondary/70 font-medium text-lg leading-relaxed">
                            <p>En APM Group creemos en el poder de la gestión estratégica y la innovación para transformar organizaciones.</p>
                            <p>Durante más de 20 años, hemos acompañado a empresas de diversos sectores a lograr certificaciones internacionales, optimizar procesos y elevar su competitividad, con resultados reales y medibles. Nuestro compromiso es claro: brindar soluciones personalizadas, eficientes y sostenibles, con un equipo altamente especializado, orientado a la excelencia y la innovación.</p>
                            <p>Vamos más allá; creamos impacto, inspiramos confianza y construimos futuro.</p>
                            <p className="font-bold text-secondary">APM Group, dónde la estrategia se convierte en acción y los resultados en valor.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            { titleKey: 'about.purpose_title', descKey: 'about.purpose_desc', icon: <Target className="w-10 h-10" />, dark: false },
                            { titleKey: 'about.vision_title', descKey: 'about.vision_desc', icon: <Eye className="w-10 h-10" />, dark: true },
                            { titleKey: 'about.values_title', descKey: 'about.values_desc', icon: <Heart className="w-10 h-10" />, dark: false }
                        ].map((item, i) => (
                            <div
                                key={i}
                                className={`group p-12 rounded-[50px] shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-black/5 hover:translate-y-[-15px] hover:shadow-2xl transition-all duration-700 flex flex-col items-center text-center relative overflow-hidden ${item.dark ? 'bg-secondary text-white' : 'bg-white text-secondary'}`}
                            >
                                <div className={`w-24 h-24 rounded-3xl flex items-center justify-center mb-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-[360deg] ${item.dark ? 'bg-white/10' : 'bg-[#F9FBE7]'}`}>
                                    <div className="text-primary transform transition-transform duration-700 group-hover:scale-125">
                                        {item.icon}
                                    </div>
                                </div>
                                <h4 className={`font-black text-2xl uppercase tracking-tighter mb-6 ${item.dark ? 'text-primary' : 'text-secondary'}`}>
                                    {t(item.titleKey)}
                                </h4>
                                <p className={`font-medium leading-relaxed text-lg transition-colors ${item.dark ? 'text-white/70' : 'text-secondary/60'}`}>
                                    {t(item.descKey)}
                                </p>
                                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/30 transition-all"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Specialists Section */}
            <SpecialistsSection />

            {/* Clients Carousel */}
            <section className="py-32 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-black">
                            {t('about.clients_title')} <span className="text-primary italic">{t('about.clients_title_em')}</span>
                        </h3>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                    </div>
                </div>

                {/* Full-width carousel track — sits outside the container so edges bleed correctly */}
                <div className="relative">
                    {/* Fade masks */}
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                    {/* Overflow clip */}
                    <div className="overflow-hidden">
                        {/* Inner track: two identical strips side-by-side, animated as one unit */}
                        <div className="flex carousel-track">
                            {[1, 2].map((copy) => (
                                <div
                                    key={copy}
                                    className="flex items-center py-10 flex-shrink-0"
                                    style={{ gap: '4rem' }}
                                    aria-hidden={copy === 2 ? true : undefined}
                                >
                                    {[
                                        "Logo-grupo-Centenario.webp", "Logo_Bureau_Veritas.svg.webp", "logo-a-color_Mesa-de-trabajo-1-1-1.webp",
                                        "yanacocha-logo.webp", "nxtdried_full_positivo.webp", "macropolis_01_180x180.webp",
                                        "logo_alta.webp", "logo-grc-risk-web.webp", "logo-gomez-yagui-a.webp",
                                        "dc-superlotes-logo.webp", "VIHAG-300x122.webp", "ob1_constructora_logo.webp", "samitex.webp", "unnamed.webp"
                                    ].map((img, i) => (
                                        <div
                                            key={i}
                                            className="flex-shrink-0 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
                                            style={{ width: '160px' }}
                                        >
                                            <img
                                                src={`/Imágenes/Logos de clientes/${img}`}
                                                alt="Cliente APM"
                                                className="h-16 md:h-20 w-full object-contain"
                                            />
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <style>{`
                    .carousel-track {
                        /* Each strip is exactly 50% of the total track width */
                        animation: carousel-scroll 45s linear infinite;
                        width: max-content;
                    }
                    .carousel-track:hover {
                        animation-play-state: paused;
                    }
                    @keyframes carousel-scroll {
                        0%   { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                `}</style>
            </section>

            {/* Webinar YouTube Section */}
            <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="bg-secondary rounded-[40px] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                        
                        <div className="w-full lg:w-1/2 relative z-10 text-center lg:text-left">
                            <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-6 font-heading">
                                Eleva tu nivel con nuestros <span className="text-primary italic">Webinars Gratuitos</span>
                            </h3>
                            <p className="text-white/70 text-lg mb-8 leading-relaxed">
                                Accede a conocimiento técnico de alto valor impartido por nuestros especialistas. Explora nuestro canal de YouTube y descubre sesiones exclusivas sobre normas internacionales, sostenibilidad, excelencia operativa y mucho más, totalmente gratis.
                            </p>
                            <a 
                                href="https://www.youtube.com/@APMGroup-Consultor%C3%ADa" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-secondary rounded-xl font-black uppercase text-sm hover:scale-105 transition-all shadow-[0_10px_30px_rgba(178,197,53,0.3)] font-heading"
                            >
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.498 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                </svg>
                                Ver todos los Webinars
                            </a>
                        </div>

                        <div className="w-full lg:w-1/2 relative z-10">
                            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 group relative">
                                <iframe 
                                    className="w-full h-full absolute inset-0" 
                                    src="https://www.youtube.com/embed/8tRCf0Dkr40?si=7110ayRCegAMbSrf" 
                                    title="Webinar APM Group" 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                    referrerPolicy="strict-origin-when-cross-origin" 
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
