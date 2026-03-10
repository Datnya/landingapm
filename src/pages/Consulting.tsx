import React from 'react';
import { Target, RefreshCcw, Shield, Leaf, Lock, Heart, Factory, Pickaxe, ShoppingBag, Utensils, Briefcase, GraduationCap, Cpu } from 'lucide-react';
import { useI18n } from '../i18n';

const ConsultingPage = () => {
    const { t } = useI18n();

    const pillars = [
        {
            icon: <Target className="w-16 h-16" />,
            titleKey: 'consulting.pillar_quality',
            itemsEs: ["ISO 9001", "ISO/IEC 17025", "BPL", "ISO 21001", "ISO 55001", "Metodología 5's"],
            itemsEn: ["ISO 9001", "ISO/IEC 17025", "GLP", "ISO 21001", "ISO 55001", "5S Methodology"],
            image: "/Imágenes/Subservicios/Calidad y excelencia.jpg"
        },
        {
            icon: <RefreshCcw className="w-16 h-16" />,
            titleKey: 'consulting.pillar_food',
            itemsEs: ["ISO 22000", "HACCP", "BPM / BPA", "SQF", "BRC / GFSI"],
            itemsEn: ["ISO 22000", "HACCP", "GMP / GAP", "SQF", "BRC / GFSI"],
            image: "/Imágenes/Subservicios/Seguridad alimentaria.jpg"
        },
        {
            icon: <Shield className="w-16 h-16" />,
            titleKey: 'consulting.pillar_anti',
            itemsEs: ["ISO 37001", "ISO 28001 (Supply Chain)", "ISO 37002 (Denuncias)", "Compliance Corporativo"],
            itemsEn: ["ISO 37001", "ISO 28001 (Supply Chain)", "ISO 37002 (Whistleblowing)", "Corporate Compliance"],
            image: "/Imágenes/Subservicios/Gestión antisoborno.jpg"
        },
        {
            icon: <Leaf className="w-16 h-16" />,
            titleKey: 'consulting.pillar_esg',
            itemsEs: ["ISO 14001 (Ambiental)", "Huella de Carbono", "ISO 26000", "ODS & ESG Reporting"],
            itemsEn: ["ISO 14001 (Environmental)", "Carbon Footprint", "ISO 26000", "SDG & ESG Reporting"],
            image: "/Imágenes/Subservicios/Sostenibilidad.jpg"
        },
        {
            icon: <Lock className="w-16 h-16" />,
            titleKey: 'consulting.pillar_cyber',
            itemsEs: ["ISO/IEC 27001", "Gestión de Privacidad (ISO 27701)", "Protección de Datos Personales"],
            itemsEn: ["ISO/IEC 27001", "Privacy Management (ISO 27701)", "Personal Data Protection"],
            image: "/Imágenes/Subservicios/Ciberseguridad.jpg"
        },
        {
            icon: <Heart className="w-16 h-16" />,
            titleKey: 'consulting.pillar_health',
            itemsEs: ["ISO 45001 (SST)", "ISO 22320 (Emergencias)", "Igualdad de Género", "Ley 29783"],
            itemsEn: ["ISO 45001 (OH&S)", "ISO 22320 (Emergencies)", "Gender Equality", "Law 29783"],
            image: "/Imágenes/Subservicios/Salud y bienestar.jpg"
        }
    ];

    const sectors = [
        { nameEs: "Industria", nameEn: "Industry", icon: <Factory size={16} /> },
        { nameEs: "Minería", nameEn: "Mining", icon: <Pickaxe size={16} /> },
        { nameEs: "Retail", nameEn: "Retail", icon: <ShoppingBag size={16} /> },
        { nameEs: "Alimentos", nameEn: "Food", icon: <Utensils size={16} /> },
        { nameEs: "Servicios", nameEn: "Services", icon: <Briefcase size={16} /> },
        { nameEs: "Educación", nameEn: "Education", icon: <GraduationCap size={16} /> },
        { nameEs: "Tecnología", nameEn: "Technology", icon: <Cpu size={16} /> }
    ];

    return (
        <div className="bg-white min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative h-[65vh] flex items-center overflow-hidden bg-black">
                <div className="absolute inset-0 z-0">
                    <video
                        src="/Videos/consultoria_video.mov"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-white">
                    <div className="max-w-4xl">
                        <span className="text-primary font-black text-[10px] uppercase tracking-[0.5em] mb-8 block">
                            {t('consulting.hero_label')}
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black leading-[0.85] mb-12 uppercase tracking-tighter text-white">
                            {t('consulting.hero_title')} <br /> <span className="text-primary italic">{t('consulting.hero_title_em')}</span>
                        </h1>
                        <p className="text-lg md:text-xl font-medium leading-relaxed max-w-2xl border-l-[10px] border-primary pl-8 text-white/70">
                            "{t('consulting.hero_quote')}"
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Pillars Section */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-24 pb-12 border-b border-black/5">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl md:text-6xl font-black text-secondary leading-[0.9] uppercase tracking-tighter mb-8">
                                {t('consulting.value_title')} <br /> <span className="text-primary">{t('consulting.value_title_em')}</span>
                            </h2>
                            <p className="text-secondary/50 text-lg font-medium leading-relaxed">
                                {t('consulting.value_desc')}
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex flex-col items-center p-8 bg-secondary rounded-[40px] text-white min-w-[200px]">
                                <p className="text-4xl font-black text-primary leading-none mb-1">500+</p>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">{t('consulting.stat_label')}</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {pillars.map((pillar, i) => (
                            <div key={i} className="group relative p-12 bg-secondary text-white rounded-[50px] overflow-hidden hover:bg-black transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_30px_#B2C53580] hover:border-primary/50 border border-white/5 flex flex-col items-center text-center">
                                {/* Background Image */}
                                <div className="absolute inset-0 z-0">
                                    <img src={pillar.image} alt={t(pillar.titleKey)} className="w-full h-full object-cover opacity-20 group-hover:opacity-60 transition-opacity duration-700" />
                                    <div className="absolute inset-0 bg-black/60 transition-colors" />
                                </div>

                                <div className="relative z-10 flex flex-col items-center w-full">
                                    <div className="text-primary mb-10 group-hover:rotate-[360deg] group-hover:scale-110 transition-all duration-1000 ease-in-out">
                                        {pillar.icon}
                                    </div>
                                    <h3 className="text-2xl font-black mb-8 uppercase tracking-tight text-primary transition-colors">{t(pillar.titleKey)}</h3>
                                    <ul className="space-y-4 w-full">
                                        {(window.localStorage.getItem('language') === 'en' ? pillar.itemsEn : pillar.itemsEs).map((item, idx) => (
                                            <li key={idx} className="flex items-center justify-center gap-3 text-white transition-colors text-sm font-semibold">
                                                <div className="w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_10px_rgba(178,197,53,0.5)]" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industry Focus Section */}
            <section className="py-24 bg-primary text-secondary m-6 md:m-12 rounded-[60px]">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-5xl font-black uppercase tracking-tighter mb-8 leading-none italic">
                                {t('consulting.sector_title')} <br /> cada <span className="underline decoration-[10px] underline-offset-[10px]">{t('consulting.sector_title_em')}</span>
                            </h2>
                            <p className="text-secondary/70 text-lg font-bold leading-relaxed">
                                {t('consulting.sector_desc')}
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            {sectors.map((sec) => (
                                <div key={sec.nameEs} className="flex items-center gap-3 px-8 py-4 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 text-xs font-black uppercase tracking-widest shadow-sm hover:bg-white transition-all group">
                                    <span className="text-secondary/50 group-hover:text-primary transition-colors">{sec.icon}</span>
                                    {window.localStorage.getItem('language') === 'en' ? sec.nameEn : sec.nameEs}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-32 container mx-auto px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary/30 mb-6 block">{t('consulting.cta_label')}</span>
                    <h2 className="text-4xl md:text-7xl font-black text-secondary uppercase tracking-tighter leading-none mb-12">
                        {t('consulting.cta_title')} <br /> <span className="text-primary italic">{t('consulting.cta_title_em')}</span>
                    </h2>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <a href="/contacto" className="bg-secondary text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-xl">
                            {t('consulting.cta_btn')}
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ConsultingPage;
