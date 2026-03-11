import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ServiceCarousel, type Service } from '@/components/ui/services-card';
import { CatalogFilters, ServiceItemCard } from '@/components/ui/catalog-components';
import {
    ShieldCheck,
    BarChart3,
    GraduationCap,
    ChevronRight,
} from 'lucide-react';
import { useI18n } from '../i18n';

const topServices: Service[] = [
    {
        number: "01",
        title: "Consultoría Estratégica",
        description: "Maximización del rendimiento y generación de valor sostenible mediante implementación de normas ISO.",
        icon: BarChart3,
        gradient: "from-primary/40 to-primary/10",
        image: "/Imágenes/Consultoría.webp",
        href: "/servicios/consultoria"
    },
    {
        number: "02",
        title: "Auditoría Experta",
        description: "Servicios diseñados para garantizar transparencia y cumplimiento normativo internacional.",
        icon: ShieldCheck,
        gradient: "from-primary/40 to-primary/10",
        image: "/Imágenes/Auditoría.webp",
        href: "/servicios/auditoria"
    },
    {
        number: "03",
        title: "Formación Especializada",
        description: "Programas educativos de vanguardia para el fortalecimiento de capacidades técnicas senior.",
        icon: GraduationCap,
        gradient: "from-primary/40 to-primary/10",
        image: "/Imágenes/Formación.webp",
        href: "/servicios/formacion"
    }
];

const catalogItems = [
    // --- CONSULTORÍA ---
    {
        category: "Consultoría",
        title: "Calidad y Excelencia",
        description: "ISO 9001, ISO/IEC 17025, BPL y metodologías de mejora continua para la excelencia operativa.",
        duration: "3-6 meses",
        image: "/Imágenes/Subservicios/Calidad y excelencia.webp",
        sector: "Industrial"
    },
    {
        category: "Consultoría",
        title: "Seguridad Alimentaria",
        description: "Implementación de ISO 22000, HACCP y estándares globales BRC/IFS para la industria alimentaria.",
        duration: "4-6 meses",
        image: "/Imágenes/Subservicios/Seguridad alimentaria.webp",
        sector: "Alimentos"
    },
    {
        category: "Consultoría",
        title: "Gestión Antisoborno",
        description: "ISO 37001 y sistemas de cumplimiento corporativo para garantizar la integridad institucional.",
        duration: "4-5 meses",
        image: "/Imágenes/Subservicios/Gestión antisoborno.webp",
        sector: "Servicios"
    },
    {
        category: "Consultoría",
        title: "Sostenibilidad (ESG)",
        description: "Gestión ambiental ISO 14001, huella de carbono y reportes de sostenibilidad corporativa.",
        duration: "3-6 meses",
        image: "/Imágenes/Subservicios/Sostenibilidad.webp",
        sector: "Minería"
    },
    {
        category: "Consultoría",
        title: "Ciberseguridad",
        description: "Protección de activos de información mediante ISO 27001 y gestión de privacidad de datos.",
        duration: "4-8 meses",
        image: "/Imágenes/Subservicios/Ciberseguridad.webp",
        sector: "Tecnología"
    },
    {
        category: "Consultoría",
        title: "Salud y Bienestar",
        description: "Sistemas de Seguridad y Salud en el Trabajo ISO 45001 y programas de bienestar laboral.",
        duration: "3-5 meses",
        image: "/Imágenes/Subservicios/Salud y bienestar.webp",
        sector: "Industrial"
    },
    // --- AUDITORÍA ---
    {
        category: "Auditoría",
        title: "Auditoría Interna de Sistemas",
        description: "Evaluación exhaustiva de sistemas de gestión para verificar cumplimiento y eficacia operativa.",
        duration: "15-20 días",
        image: "/Imágenes/Auditoría.webp",
        sector: "Servicios"
    },
    {
        category: "Auditoría",
        title: "Homologación de Proveedores",
        description: "Validación técnica de socios comerciales para asegurar la calidad en toda la cadena de valor.",
        duration: "Bajo demanda",
        image: "/Imágenes/Auditoría.webp",
        sector: "Retail"
    },
    {
        category: "Auditoría",
        title: "Inspección de Estándares",
        description: "Verificación de cumplimiento de normativas específicas y requisitos legales del sector.",
        duration: "Semanal",
        image: "/Imágenes/Auditoría.webp",
        sector: "Minería"
    },
    // --- FORMACIÓN ---
    {
        category: "Formación",
        title: "Certificación Auditor Jefe",
        description: "Formación de alto nivel para profesionales que buscan liderar procesos de auditoría certificados.",
        duration: "40 horas",
        image: "/Imágenes/Formación.webp",
        sector: "Industrial"
    },
    {
        category: "Formación",
        title: "Especialización en Normas ISO",
        description: "Cursos técnicos detallados sobre la interpretación e implementación de normativas internacionales.",
        duration: "24 horas",
        image: "/Imágenes/Formación.webp",
        sector: "Servicios"
    },
    {
        category: "Formación",
        title: "Programas In-house",
        description: "Capacitación personalizada diseñada para abordar los desafíos específicos de su organización.",
        duration: "Personalizado",
        image: "/Imágenes/Formación.webp",
        sector: "Tecnología"
    }
];

export default function ServicesPage() {
    const { t, locale } = useI18n();
    const [selectedCategory, setSelectedCategory] = useState(locale === 'en' ? 'Audit' : 'Auditoría');
    const [selectedSector, setSelectedSector] = useState("");

    const topServices: Service[] = [
        {
            number: "01",
            title: t('services.s1_title'),
            description: t('services.s1_desc'),
            icon: BarChart3,
            gradient: "from-primary/40 to-primary/10",
            image: "/Imágenes/Consultoría.webp",
            href: "/servicios/consultoria"
        },
        {
            number: "02",
            title: t('services.s2_title'),
            description: t('services.s2_desc'),
            icon: ShieldCheck,
            gradient: "from-primary/40 to-primary/10",
            image: "/Imágenes/Auditoría.webp",
            href: "/servicios/auditoria"
        },
        {
            number: "03",
            title: t('services.s3_title'),
            description: t('services.s3_desc'),
            icon: GraduationCap,
            gradient: "from-primary/40 to-primary/10",
            image: "/Imágenes/Formación.webp",
            href: "/servicios/formacion"
        }
    ];

    const ES_CATEGORY_MAP: Record<string, string> = {
        'Auditoría': 'Auditoría',
        'Consultoría': 'Consultoría',
        'Formación': 'Formación',
    };

    const filteredItems = catalogItems.filter(item => {
        const matchCat = !selectedCategory || item.category === selectedCategory;
        const matchSector = !selectedSector || item.sector === selectedSector;
        return matchCat && matchSector;
    });

    const catalogCategories = locale === 'en'
        ? ['Audit', 'Consulting', 'Training']
        : ['Auditoría', 'Consultoría', 'Formación'];

    const handleCategoryChange = (cat: string) => {
        if (locale === 'en') {
            const map: Record<string, string> = { 'Audit': 'Auditoría', 'Consulting': 'Consultoría', 'Training': 'Formación' };
            setSelectedCategory(map[cat] || cat);
        } else {
            setSelectedCategory(cat);
        }
    };

    return (
        <div className="bg-white min-h-screen text-secondary selection:bg-primary/30 font-body overflow-x-hidden">
            <Helmet>
                <title>Nuestros Servicios Integrales | APM Group</title>
                <meta name="description" content="Ofrecemos un portafolio de formación, consultoría y auditoría bajo las principales normas internacionales (ISO, BRC, HACCP, ESG)." />
                <link rel="canonical" href="https://apmgroup.pe/servicios" />
            </Helmet>

            {/* SECTION 1: TOP HIGHLIGHTS */}
            <section className="bg-secondary pt-40 pb-32 relative overflow-hidden text-white rounded-b-[80px]">
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[150px] rounded-full"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[150px] rounded-full"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mb-20 text-center mx-auto md:text-left md:mx-0">
                        <p className="uppercase font-black text-primary tracking-[0.4em] mb-6 text-sm flex items-center justify-center md:justify-start gap-4">
                            <span className="w-12 h-[1px] bg-primary"></span> {locale === 'en' ? 'Solutions Portfolio' : 'Portafolio de Soluciones'}
                        </p>
                        <h1 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.9] uppercase">
                            {t('services.title_1')} <br /> <span className="text-primary italic">{t('services.title_em')}.</span>
                        </h1>
                    </div>
                    <ServiceCarousel services={topServices} />
                </div>
            </section>

            {/* SECTION 2: CATALOG */}
            <section className="py-24 md:py-32">
                <div className="container mx-auto px-6">
                    <div className="pb-16 border-b border-black/5 mb-20">
                        <nav className="flex items-center gap-3 text-secondary/40 text-xs font-bold uppercase tracking-widest mb-6">
                            <a href="/" className="hover:text-primary transition-colors">{locale === 'en' ? 'Home' : 'Inicio'}</a>
                            <ChevronRight className="w-3 h-3" />
                            <span className="text-secondary">{locale === 'en' ? 'Our Services' : 'Nuestros Servicios'}</span>
                        </nav>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">
                            {t('services.catalog_title')} <span className="text-primary">{t('services.catalog_title_em')}</span>
                        </h2>
                        <p className="text-secondary/50 text-lg md:text-xl font-medium max-w-3xl leading-relaxed">
                            {locale === 'en'
                                ? 'We drive the operational excellence of your organization through international standards, strategic consulting and high-impact specialized training.'
                                : 'Impulsamos la excelencia operativa de su organización a través de estándares internacionales, consultoría estratégica y formación especializada de alto impacto.'}
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                        {/* Sidebar Filters */}
                        <CatalogFilters
                            categories={catalogCategories}
                            selectedCategory={locale === 'en'
                                ? { 'Auditoría': 'Audit', 'Consultoría': 'Consulting', 'Formación': 'Training' }[selectedCategory] || selectedCategory
                                : selectedCategory}
                            onCategoryChange={handleCategoryChange}
                            sectors={locale === 'en' ? ['Industrial', 'Technology', 'Services'] : ['Industrial', 'Tecnología', 'Servicios']}
                            selectedSector={selectedSector}
                            onSectorChange={setSelectedSector}
                            onClear={() => { setSelectedCategory(""); setSelectedSector(""); }}
                        />

                        {/* Main Catalog Area */}
                        <div className="flex-1">
                            {/* Controls Bar */}
                            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
                                <p className="text-sm font-bold text-secondary/40">
                                    {locale === 'en' ? 'Showing' : 'Mostrando'} <span className="text-secondary font-black">{filteredItems.length}</span> {locale === 'en' ? 'services' : 'servicios'}
                                </p>
                                <div className="flex items-center gap-6">
                                    <div className="flex items-center gap-3 text-secondary/40 text-xs font-black uppercase tracking-widest">
                                        {locale === 'en' ? 'Sort by:' : 'Ordenar por:'}
                                        <div className="relative">
                                            <select className="appearance-none bg-[#F9FBE7]/50 border border-primary/10 rounded-lg px-4 py-2 font-black text-secondary outline-none cursor-pointer pr-10">
                                                <option>{locale === 'en' ? 'Relevance' : 'Relevancia'}</option>
                                                <option>{locale === 'en' ? 'Most Recent' : 'Más recientes'}</option>
                                            </select>
                                            <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-primary rotate-90" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Items Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                {filteredItems.map((item, idx) => {
                                    const categoryHrefs: Record<string, string> = {
                                        "Auditoría": "/servicios/auditoria",
                                        "Consultoría": "/servicios/consultoria",
                                        "Formación": "/servicios/formacion"
                                    };
                                    return (
                                        <ServiceItemCard
                                            key={idx}
                                            {...item}
                                            href={categoryHrefs[item.category] || "/servicios"}
                                        />
                                    );
                                })}
                            </div>

                            {/* Pagination (Visual) */}
                            <div className="mt-20 flex justify-center items-center gap-3">
                                <button className="w-10 h-10 border border-black/5 rounded-lg flex items-center justify-center hover:bg-primary transition-colors group">
                                    <ChevronRight className="w-4 h-4 text-secondary rotate-180" />
                                </button>
                                <button className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center font-black text-xs">1</button>
                                <button className="w-10 h-10 border border-black/5 rounded-lg flex items-center justify-center font-black text-xs hover:bg-primary transition-colors">2</button>
                                <button className="w-10 h-10 border border-black/5 rounded-lg flex items-center justify-center font-black text-xs hover:bg-primary transition-colors">3</button>
                                <span className="text-secondary/20">...</span>
                                <button className="w-10 h-10 border border-black/5 rounded-lg flex items-center justify-center font-black text-xs hover:bg-primary transition-colors">8</button>
                                <button className="w-10 h-10 border border-black/5 rounded-lg flex items-center justify-center hover:bg-primary transition-colors group">
                                    <ChevronRight className="w-4 h-4 text-secondary" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: BOTTOM CTA */}
            <section className="pb-32 container mx-auto px-6">
                <div className="bg-secondary text-white p-12 md:p-20 rounded-[60px] relative overflow-hidden group">
                    <div className="absolute right-0 top-0 w-1/3 h-full bg-primary/10 blur-[100px] rounded-full group-hover:bg-primary/20 transition-all duration-700"></div>
                    <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-12">
                        <div className="text-center lg:text-left max-w-2xl">
                            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 leading-none">
                                {locale === 'en' ? "Can't find what you're looking for?" : '¿No encuentra lo que busca?'}
                            </h3>
                            <p className="text-white/50 text-lg font-medium">
                                {locale === 'en'
                                    ? 'We design customized solutions tailored to the specific needs of your sector and organization.'
                                    : 'Diseñamos soluciones personalizadas y a medida para las necesidades específicas de su sector y organización.'}
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-auto">
                            <button className="px-10 py-5 bg-primary text-black rounded-2xl font-black text-xs uppercase tracking-widest shadow-[0_20px_40px_rgba(178,197,53,0.3)] hover:scale-105 transition-all">
                                {locale === 'en' ? 'Request Free Consulting' : 'Solicitar Asesoría Gratuita'}
                            </button>
                            <button className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                                {locale === 'en' ? 'View all courses' : 'Ver todos los cursos'}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
