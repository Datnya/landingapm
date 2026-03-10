import React, { useState } from 'react';
import { Search, ChevronRight, Play, Monitor, Tablet, Smartphone, Award, Unlock, Clock, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useI18n } from '../i18n';

const coursesData = [
    {
        id: 1,
        titleEs: "Especialista en Sistemas de Gestión ISO 9001",
        titleEn: "ISO 9001 Quality Management Systems Specialist",
        descEs: "Domina la norma de calidad más reconocida a nivel mundial y aprende a implementarla desde cero.",
        descEn: "Master the world's most recognized quality standard and learn to implement it from scratch.",
        categoryEs: "Gestión Estratégica",
        categoryEn: "Strategic Management",
        durationEs: "40 Horas",
        durationEn: "40 Hours",
        lessonsEs: "24 Clases",
        lessonsEn: "24 Lessons",
        image: "/Imágenes/Consultoría.jpg",
        tagEs: "Bestseller",
        tagEn: "Bestseller"
    },
    {
        id: 2,
        titleEs: "Auditor Interno ISO 14001: Gestión Ambiental",
        titleEn: "ISO 14001 Internal Auditor: Environmental Management",
        descEs: "Certifícate para evaluar el cumplimiento ambiental y liderar la sostenibilidad organizacional.",
        descEn: "Get certified to assess environmental compliance and lead organizational sustainability.",
        categoryEs: "Operaciones",
        categoryEn: "Operations",
        durationEs: "32 Horas",
        durationEn: "32 Hours",
        lessonsEs: "18 Clases",
        lessonsEn: "18 Lessons",
        image: "/Imágenes/quienes somos fondo.jpg",
        tagEs: "Certificación",
        tagEn: "Certification"
    },
    {
        id: 3,
        titleEs: "Seguridad y Salud Ocupacional ISO 45001",
        titleEn: "ISO 45001 Occupational Health and Safety",
        descEs: "Protege a tu equipo y cumple con los estándares globales de seguridad en el trabajo.",
        descEn: "Protect your team and comply with global workplace safety standards.",
        categoryEs: "Seguridad",
        categoryEn: "Safety",
        durationEs: "35 Horas",
        durationEn: "35 Hours",
        lessonsEs: "21 Clases",
        lessonsEn: "21 Lessons",
        image: "/Imágenes/Auditoría.jpg",
        tagEs: "Nuevo",
        tagEn: "New"
    }
];

export default function CoursesPage() {
    const { t, locale } = useI18n();
    const [searchTerm, setSearchTerm] = useState("");
    const [activeTab, setActiveTab] = useState("all");

    const tabs = [
        { key: "all", labelKey: "courses.tab_all" },
        { key: "gestión", labelEs: "Gestión Estratégica", labelEn: "Strategic Management" },
        { key: "soste", labelEs: "Sostenibilidad", labelEn: "Sustainability" },
        { key: "segu", labelEs: "Seguridad", labelEn: "Safety" },
        { key: "lid", labelEs: "Liderazgo", labelEn: "Leadership" },
        { key: "ti", labelEs: "TI & Digital", labelEn: "IT & Digital" },
    ];

    const features = [
        { icon: <Unlock className="w-12 h-12" />, titleKey: 'courses.feat_1_title', descKey: 'courses.feat_1_desc', gradient: "from-emerald-400 to-emerald-600" },
        { icon: <Clock className="w-12 h-12" />, titleKey: 'courses.feat_2_title', descKey: 'courses.feat_2_desc', gradient: "from-blue-400 to-blue-600" },
        { icon: <div className="flex gap-2 items-center"><Monitor size={24} /><Smartphone size={24} /></div>, titleKey: 'courses.feat_3_title', descKey: 'courses.feat_3_desc', gradient: "from-purple-400 to-purple-600" },
        { icon: <Award className="w-12 h-12" />, titleKey: 'courses.feat_4_title', descKey: 'courses.feat_4_desc', gradient: "from-primary/80 to-primary" },
    ];

    return (
        <div className="bg-white min-h-screen pt-20 pb-24 text-secondary font-body selection:bg-primary/30">

            {/* Hero */}
            <section className="relative py-24 md:py-32 overflow-hidden bg-secondary">
                <div className="absolute inset-0 opacity-20">
                    <img src="/Imágenes/Formación.jpg" alt="Background" className="w-full h-full object-cover grayscale" />
                    <div className="absolute inset-0 bg-gradient-to-b from-secondary via-transparent to-secondary"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-6 animate-pulse">
                            {t('courses.hero_badge')}
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] uppercase tracking-tighter mb-8">
                            {t('courses.hero_title')} <br />
                            <span className="text-primary italic">{t('courses.hero_title_em')}</span>
                        </h1>
                        <p className="text-white/60 text-lg md:text-xl font-medium max-w-2xl leading-relaxed mb-12">
                            {t('courses.hero_desc')}
                        </p>
                        <div className="flex flex-wrap gap-6">
                            <button className="bg-primary text-secondary px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-[0_20px_40px_rgba(178,197,53,0.3)]">
                                {t('courses.hero_cta_1')}
                            </button>
                            <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/20 transition-all">
                                {t('courses.hero_cta_2')}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-24 bg-[#F9FBE7]/30">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, i) => (
                            <div key={i} className="group relative bg-white p-12 rounded-[50px] shadow-[0_20px_60px_rgba(0,0,0,0.03)] border-2 border-transparent hover:border-primary/20 hover:translate-y-[-20px] transition-all duration-700 overflow-hidden text-center">
                                <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-700", feature.gradient)}></div>
                                <div className="relative z-10">
                                    <div className="w-24 h-24 rounded-3xl bg-[#F9FBE7] text-primary flex items-center justify-center mb-10 mx-auto transform group-hover:rotate-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-secondary transition-all duration-500 shadow-lg">
                                        {feature.icon}
                                    </div>
                                    <h4 className="text-2xl font-black uppercase tracking-tight mb-6 text-secondary">{t(feature.titleKey)}</h4>
                                    <p className="text-secondary/60 text-base font-medium leading-relaxed">{t(feature.descKey)}</p>
                                </div>
                                <div className="absolute top-8 right-8 w-2 h-2 rounded-full bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Catalog */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-16">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 leading-tight">
                                {t('courses.catalog_title')} <span className="text-primary italic">{t('courses.catalog_title_em')}</span>
                            </h2>
                            <p className="text-secondary/50 font-medium text-lg">{t('courses.catalog_desc')}</p>
                        </div>
                        <div className="w-full lg:w-96 relative group">
                            <input
                                type="text"
                                placeholder={t('courses.search_placeholder')}
                                className="w-full bg-[#F8F9FA] border border-black/5 rounded-2xl py-5 pl-14 pr-6 font-bold text-xs outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary/30 group-focus-within:text-primary transition-colors" />
                        </div>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap gap-2 mb-16">
                        {tabs.map((tab) => (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                className={cn(
                                    "px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-widest transition-all",
                                    activeTab === tab.key
                                        ? "bg-secondary text-white shadow-xl"
                                        : "bg-[#F8F9FA] text-secondary/40 hover:bg-primary/20 hover:text-secondary"
                                )}
                            >
                                {tab.key === 'all' ? t('courses.tab_all') : (locale === 'en' ? tab.labelEn : tab.labelEs)}
                            </button>
                        ))}
                    </div>

                    {/* Course Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {coursesData.map((course) => (
                            <div key={course.id} className="bg-white rounded-[50px] overflow-hidden border border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.03)] group hover:shadow-2xl transition-all duration-700">
                                <div className="h-64 relative overflow-hidden">
                                    <img src={course.image} alt={locale === 'en' ? course.titleEn : course.titleEs} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
                                    <div className="absolute top-6 left-6">
                                        <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest shadow-xl">
                                            {locale === 'en' ? course.tagEn : course.tagEs}
                                        </span>
                                    </div>
                                    <div className="absolute inset-0 bg-secondary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full bg-primary text-secondary flex items-center justify-center shadow-2xl scale-50 group-hover:scale-100 transition-transform duration-500">
                                            <Play fill="currentColor" size={24} />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-10">
                                    <div className="flex gap-4 mb-6">
                                        <span className="text-secondary/30 text-[9px] font-black uppercase tracking-widest flex items-center gap-1">
                                            <Clock size={12} className="text-primary" /> {locale === 'en' ? course.durationEn : course.durationEs}
                                        </span>
                                        <span className="text-secondary/30 text-[9px] font-black uppercase tracking-widest flex items-center gap-1">
                                            <Play size={12} className="text-primary" /> {locale === 'en' ? course.lessonsEn : course.lessonsEs}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-black text-secondary leading-tight mb-6 group-hover:text-primary transition-colors">
                                        {locale === 'en' ? course.titleEn : course.titleEs}
                                    </h3>
                                    <p className="text-secondary/50 text-sm font-medium leading-relaxed mb-8">
                                        {locale === 'en' ? course.descEn : course.descEs}
                                    </p>
                                    <button className="w-full py-5 bg-[#F9FBE7] text-secondary rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-primary transition-all flex items-center justify-center gap-3 group/btn">
                                        {t('courses.course_cta')} <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Registration Promo */}
            <section className="container mx-auto px-6 py-24">
                <div className="bg-primary p-12 md:p-24 rounded-[60px] relative overflow-hidden flex flex-col items-center text-center">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

                    <h2 className="text-4xl md:text-6xl font-black text-secondary uppercase tracking-tighter leading-none mb-8 relative z-10 italic">
                        {t('courses.promo_title')}
                    </h2>
                    <p className="text-secondary/70 text-lg md:text-xl font-bold max-w-2xl mb-12 relative z-10">
                        {t('courses.promo_desc')}
                    </p>
                    <button className="bg-secondary text-white px-12 py-6 rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:scale-105 transition-all shadow-2xl relative z-10">
                        {t('courses.promo_btn')}
                    </button>
                    <p className="mt-8 text-secondary/40 text-[10px] font-black uppercase tracking-widest relative z-10">
                        {t('courses.promo_disclaimer')}
                    </p>
                </div>
            </section>

        </div>
    );
}
