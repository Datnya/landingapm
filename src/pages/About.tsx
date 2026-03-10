import React from 'react';
import SpecialistsSection from '../components/sections/specialists-section';
import { Target, Eye, Heart } from 'lucide-react';
import { useI18n } from '../i18n';

const About = () => {
    const { t } = useI18n();

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="bg-secondary text-white py-24 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img src="/Imágenes/quienes somos fondo.jpg" alt="Background" className="w-full h-full object-cover" />
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
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-4xl md:text-5xl font-black text-secondary uppercase tracking-tighter mb-6">
                            {t('about.mvv_title')} <span className="text-primary italic">{t('about.mvv_title_em')}</span>
                        </h2>
                        <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-8"></div>
                        <p className="text-secondary/50 font-medium text-lg leading-relaxed">
                            {t('about.mvv_desc')}
                        </p>
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
                                        "Logo-grupo-Centenario.png", "Logo_Bureau_Veritas.svg.png", "logo-a-color_Mesa-de-trabajo-1-1-1.png",
                                        "yanacocha-logo.png", "nxtdried_full_positivo.png", "macropolis_01_180x180.png",
                                        "logo_alta.png", "logo-grc-risk-web.png", "logo-gomez-yagui-a.png",
                                        "dc-superlotes-logo.png", "VIHAG-300x122.jpg", "ob1_constructora_logo.jpg", "samitex.jpg", "unnamed.jpg"
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
        </div>
    );
};

export default About;
