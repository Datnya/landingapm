import React from 'react';
import { Helmet } from 'react-helmet-async';
import { GraduationCap, BookOpen, Presentation, Database, ClipboardCheck, Globe2, BookMarked, UserCheck } from 'lucide-react';
import { useI18n } from '../i18n';

const TrainingPage = () => {
    const { t } = useI18n();

    return (
        <div className="bg-white min-h-screen pt-20">
            <Helmet>
                <title>Formación y Capacitación ISO | APM Group Learning</title>
                <meta name="description" content="Campus virtual de formación especializada en normas internacionales, sostenibilidad empresarial, sistemas de gestión ISO y más. Conoce nuestros cursos." />
                <link rel="canonical" href="https://apmgroup.pe/servicios/formacion" />
            </Helmet>
            {/* Hero Section */}
            <section className="relative h-[65vh] flex items-center overflow-hidden bg-black">
                <div className="absolute inset-0 z-0">
                    <video
                        src="/Videos/Formación video.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <span className="text-primary font-black text-[10px] uppercase tracking-[0.6em] mb-4 block">
                            {t('training.hero_label')}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black leading-[0.9] mb-6 uppercase tracking-tighter text-white">
                            {t('training.hero_title')} <br /> <span className="text-primary italic">{t('training.hero_title_em')}</span>
                        </h1>
                        <div className="mb-6">
                            <span className="bg-primary text-secondary px-6 py-2 rounded-full font-black text-xs uppercase tracking-[0.3em] inline-block shadow-[0_10px_30px_rgba(178,197,53,0.3)]">
                                APM Learning
                            </span>
                        </div>
                        <p className="text-base md:text-lg font-medium leading-relaxed max-w-2xl border-l-[6px] border-primary pl-6 text-white/60">
                            "{t('training.hero_quote')}"
                        </p>
                    </div>
                </div>
            </section>

            {/* Program Highlights */}
            <section className="py-32 bg-[#F9FBE7]/30">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-24">
                        <h2 className="text-4xl md:text-6xl font-black text-secondary leading-tight uppercase tracking-tighter mb-8">
                            {t('training.section_title')} <span className="text-primary italic">{t('training.section_title_em')}</span>
                        </h2>
                        <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-10"></div>
                        <p className="text-secondary/50 text-xl font-medium">
                            {t('training.section_desc')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {[
                            {
                                icon: <UserCheck className="w-10 h-10" />,
                                badgeKey: 'training.prog_1_badge',
                                titleKey: 'training.prog_1_title',
                                descKey: 'training.prog_1_desc',
                                ctaKey: 'training.prog_1_cta'
                            },
                            {
                                icon: <Database className="w-10 h-10" />,
                                badgeKey: 'training.prog_2_badge',
                                titleKey: 'training.prog_2_title',
                                descKey: 'training.prog_2_desc',
                                ctaKey: 'training.prog_2_cta'
                            },
                            {
                                icon: <ClipboardCheck className="w-10 h-10" />,
                                badgeKey: 'training.prog_3_badge',
                                titleKey: 'training.prog_3_title',
                                descKey: 'training.prog_3_desc',
                                ctaKey: 'training.prog_3_cta'
                            },
                            {
                                icon: <Globe2 className="w-10 h-10" />,
                                badgeKey: 'training.prog_4_badge',
                                titleKey: 'training.prog_4_title',
                                descKey: 'training.prog_4_desc',
                                ctaKey: 'training.prog_4_cta'
                            }
                        ].map((prog, i) => (
                            <div key={i} className="group p-12 bg-white rounded-[60px] shadow-[0_20px_60px_rgba(0,0,0,0.03)] hover:shadow-2xl hover:translate-y-[-10px] transition-all duration-700 flex flex-col md:flex-row gap-10 border-2 border-primary/50 overflow-hidden hover:scale-[1.02] hover:border-primary">
                                <div className="w-24 h-24 bg-[#F9FBE7] rounded-3xl flex items-center justify-center flex-shrink-0 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                    {prog.icon}
                                </div>
                                <div className="flex-1">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-2 block">{t(prog.badgeKey)}</span>
                                    <h3 className="text-2xl font-black text-secondary mb-4 uppercase tracking-tight">{t(prog.titleKey)}</h3>
                                    <p className="text-secondary/50 font-medium text-sm leading-relaxed mb-8">{t(prog.descKey)}</p>
                                    <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-secondary group-hover:text-primary transition-colors">
                                        {t(prog.ctaKey)} <span className="w-6 h-6 rounded-full border border-secondary group-hover:border-primary flex items-center justify-center transition-all">+</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Methodology & Campus */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="bg-secondary rounded-[80px] p-12 md:p-32 relative overflow-hidden flex flex-col lg:flex-row items-center gap-20">
                        <div className="lg:w-1/2 relative z-10">
                            <h3 className="text-4xl md:text-7xl font-black text-white leading-[0.85] uppercase tracking-tighter mb-10">
                                {t('training.campus_title')} <br /> <span className="text-primary italic">{t('training.campus_title_em')}</span>
                            </h3>
                            <p className="text-white/40 text-lg mb-12 font-medium">
                                {t('training.campus_desc')}
                            </p>
                            <div className="flex flex-col gap-6">
                                {[
                                    { icon: <Presentation />, labelKey: 'training.campus_feat_1' },
                                    { icon: <BookOpen />, labelKey: 'training.campus_feat_2' },
                                    { icon: <BookMarked />, labelKey: 'training.campus_feat_3' }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-6 text-white/70 font-bold uppercase tracking-widest text-xs">
                                        <div className="text-primary">{item.icon}</div>
                                        {t(item.labelKey)}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative group">
                            <div className="aspect-video bg-white/5 backdrop-blur-3xl rounded-[40px] border border-white/10 flex items-center justify-center shadow-2xl relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-700">
                                <img src="/Imágenes/quienes somos fondo.webp" alt="Campus APM" loading="lazy" className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-secondary shadow-2xl">
                                        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 container mx-auto px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-7xl font-black text-secondary leading-none uppercase tracking-tighter mb-12">
                        {t('training.cta_title')} <br /> <span className="text-primary italic">{t('training.cta_title_em')}</span>
                    </h2>
                    <a href="/cursos" className="inline-block px-12 py-6 bg-primary text-secondary rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl hover:scale-105 transition-all">
                        {t('training.cta_btn')}
                    </a>
                </div>
            </section>
        </div>
    );
};

export default TrainingPage;
