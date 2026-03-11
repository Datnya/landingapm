import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, CheckCircle2, BarChart, Users, Zap } from 'lucide-react';
import { useI18n } from '../i18n';

const AuditPage = () => {
    const { t } = useI18n();

    return (
        <div className="bg-white min-h-screen pt-20">
            <Helmet>
                <title>Auditorías ISO y Evaluaciones de Conformidad | APM Group</title>
                <meta name="description" content="Servicios de auditoría integral para sistemas de gestión bajo normativas ISO. Asegura el cumplimiento, identifica mejoras y certifica la calidad de tu empresa." />
                <link rel="canonical" href="https://apmgroup.pe/servicios/auditoria" />
            </Helmet>
            {/* Hero Section */}
            <section className="relative h-[65vh] flex items-center overflow-hidden bg-black">
                <div className="absolute inset-0 z-0">
                    <video
                        src="/Videos/Auditoría video.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl">
                        <span className="inline-block px-4 py-1.5 bg-primary text-secondary font-black text-[10px] uppercase tracking-[0.3em] rounded-lg mb-6 animate-fade-in">
                            {t('audit.hero_badge')}
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight uppercase tracking-tighter">
                            {t('audit.hero_title')} <span className="text-primary italic">{t('audit.hero_title_em')}</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/70 font-medium leading-relaxed italic border-l-4 border-primary pl-6">
                            "{t('audit.hero_quote')}"
                        </p>
                    </div>
                </div>
            </section>

            {/* Description Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-black text-secondary mb-8 uppercase tracking-tight">
                                {t('audit.desc_title')} <span className="text-primary">{t('audit.desc_title_em')}</span> {t('audit.desc_title_end')}
                            </h2>
                            <p className="text-secondary/60 text-lg font-medium leading-relaxed mb-8">
                                {t('audit.desc_body')}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { titleKey: "audit.feat_1_title", descKey: "audit.feat_1_desc" },
                                    { titleKey: "audit.feat_2_title", descKey: "audit.feat_2_desc" },
                                    { titleKey: "audit.feat_3_title", descKey: "audit.feat_3_desc" },
                                    { titleKey: "audit.feat_4_title", descKey: "audit.feat_4_desc" }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                                            <CheckCircle2 className="w-4 h-4 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-secondary text-sm uppercase">{t(item.titleKey)}</h4>
                                            <p className="text-secondary/40 text-xs">{t(item.descKey)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-[60px] overflow-hidden shadow-2xl">
                                <img src="/Imágenes/quienes somos fondo.webp" alt="Evaluación técnica" loading="lazy" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -bottom-10 -left-10 bg-primary p-10 rounded-[40px] shadow-2xl hidden md:block">
                                <p className="text-secondary font-black text-4xl leading-none mb-2">12+</p>
                                <p className="text-secondary/60 text-xs font-bold uppercase tracking-widest">{t('audit.years_label')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sub-services Grid */}
            <section className="py-24 bg-secondary text-white rounded-[60px] m-6 md:m-12 overflow-hidden relative">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-20">
                        <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">
                            {t('audit.lines_title')} <span className="text-primary">{t('audit.lines_title_em')}</span>
                        </h3>
                        <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: <ShieldCheck className="w-10 h-10" />, titleKey: "audit.sub_1_title", descKey: "audit.sub_1_desc" },
                            { icon: <BarChart className="w-10 h-10" />, titleKey: "audit.sub_2_title", descKey: "audit.sub_2_desc" },
                            { icon: <Users className="w-10 h-10" />, titleKey: "audit.sub_3_title", descKey: "audit.sub_3_desc" },
                            { icon: <Zap className="w-10 h-10" />, titleKey: "audit.sub_4_title", descKey: "audit.sub_4_desc" }
                        ].map((item, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[40px] hover:bg-white/10 transition-all group">
                                <div className="text-primary mb-8 group-hover:scale-110 transition-transform duration-500">
                                    {item.icon}
                                </div>
                                <h4 className="text-xl font-black mb-4 uppercase tracking-tight">{t(item.titleKey)}</h4>
                                <p className="text-white/50 text-sm leading-relaxed">{t(item.descKey)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-32 container mx-auto px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <h3 className="text-4xl md:text-6xl font-black text-secondary mb-10 uppercase tracking-tighter leading-none">
                        {t('audit.cta_title')} <br /> <span className="text-primary italic">{t('audit.cta_title_em')}</span>
                    </h3>
                    <p className="text-secondary/50 text-lg mb-12 max-w-2xl mx-auto font-medium">
                        {t('audit.cta_desc')}
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <a href="/contacto" className="px-12 py-6 bg-primary text-secondary rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl hover:scale-105 transition-all">
                            {t('audit.cta_btn')}
                        </a>
                        <a href="https://wa.me/51967170627" target="_blank" className="px-12 py-6 border-2 border-secondary/10 text-secondary rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-secondary hover:text-white transition-all">
                            {t('audit.cta_wa')}
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AuditPage;
