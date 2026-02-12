import React, { useState } from 'react';
import { ServiceCarousel, type Service } from '@/components/ui/services-card';
import { CatalogFilters, ServiceItemCard } from '@/components/ui/catalog-components';
import {
    ShieldCheck,
    BarChart3,
    GraduationCap,
    Zap,
    Globe,
    Lock,
    Search,
    ChevronRight,
    ArrowRight
} from 'lucide-react';

const topServices: Service[] = [
    {
        number: "01",
        title: "Consultoría Estratégica",
        description: "Maximización del rendimiento y generación de valor sostenible mediante implementación de normas ISO.",
        icon: BarChart3,
        gradient: "from-primary/40 to-primary/10",
        image: "/Imágenes/Consultoría.jpg"
    },
    {
        number: "02",
        title: "Auditoría Experta",
        description: "Servicios diseñados para garantizar transparencia y cumplimiento normativo internacional.",
        icon: ShieldCheck,
        gradient: "from-primary/40 to-primary/10",
        image: "/Imágenes/Auditoría.jpg"
    },
    {
        number: "03",
        title: "Formación Especializada",
        description: "Programas educativos de vanguardia para el fortalecimiento de capacidades técnicas senior.",
        icon: GraduationCap,
        gradient: "from-primary/40 to-primary/10",
        image: "/Imágenes/Formación.jpg"
    }
];

const catalogItems = [
    {
        category: "Auditoría",
        title: "Auditoría Interna ISO 9001",
        description: "Evaluación integral del sistema de gestión de calidad para asegurar el cumplimiento normativo y la mejora continua de procesos.",
        duration: "15-20 días",
        image: "/Imágenes/Auditoría.jpg",
        sector: "Servicios"
    },
    {
        category: "Consultoría",
        title: "Implementación ISO 14001",
        description: "Acompañamiento estratégico en la definición y puesta en marcha de sistemas de gestión ambiental eficientes y sostenibles.",
        duration: "3-6 meses",
        image: "/Imágenes/Consultoría.jpg",
        sector: "Industrial"
    },
    {
        category: "Formación",
        title: "Curso Auditor Jefe ISO 45001",
        description: "Capacitación intensiva para liderar equipos de auditoría en seguridad y salud en el trabajo bajo estándares internacionales.",
        duration: "40 horas",
        image: "/Imágenes/Formación.jpg",
        sector: "Industrial"
    },
    {
        category: "Consultoría",
        title: "Ciberseguridad ISO 27001",
        description: "Protección de activos de información y gestión de riesgos digitales mediante la norma de seguridad más reconocida mundialmente.",
        duration: "4-8 meses",
        image: "/Imágenes/Consultoría.jpg",
        sector: "Tecnología"
    },
    {
        category: "Auditoría",
        title: "Auditoría de Proveedores",
        description: "Verificación externa de la cadena de suministro para garantizar que sus proveedores cumplen con sus estándares de calidad.",
        duration: "Bajo demanda",
        image: "/Imágenes/Auditoría.jpg",
        sector: "Servicios"
    },
    {
        category: "Formación",
        title: "Workshop de Gestión Ágil",
        description: "Talleres prácticos sobre metodologías Lean y Agile aplicadas a la optimización de procesos corporativos.",
        duration: "16 horas",
        image: "/Imágenes/Formación.jpg",
        sector: "Tecnología"
    }
];

export default function ServicesPage() {
    const [selectedCategory, setSelectedCategory] = useState("Auditoría");
    const [selectedSector, setSelectedSector] = useState("");

    const filteredItems = catalogItems.filter(item => {
        const matchCat = !selectedCategory || item.category === selectedCategory;
        const matchSector = !selectedSector || item.sector === selectedSector;
        return matchCat && matchSector;
    });

    return (
        <div className="bg-white min-h-screen text-secondary selection:bg-primary/30 font-body overflow-x-hidden">

            {/* SECTION 1: TOP HIGHLIGHTS (Dark Theme preserved as requested) */}
            <section className="bg-secondary pt-40 pb-32 relative overflow-hidden text-white rounded-b-[80px]">
                {/* Background Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[150px] rounded-full"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[150px] rounded-full"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mb-20 text-center mx-auto md:text-left md:mx-0">
                        <p className="uppercase font-black text-primary tracking-[0.4em] mb-6 text-sm flex items-center justify-center md:justify-start gap-4">
                            <span className="w-12 h-[1px] bg-primary"></span> Portafolio de Soluciones
                        </p>
                        <h1 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.9] uppercase">
                            Nuestros <br /> <span className="text-primary italic">Servicios.</span>
                        </h1>
                    </div>
                    <ServiceCarousel services={topServices} />
                </div>
            </section>

            {/* SECTION 2: CATALOG (Light Theme following Servicioss.png) */}
            <section className="py-24 md:py-32">
                <div className="container mx-auto px-6">
                    {/* Breadcrumbs & Header */}
                    <div className="pb-16 border-b border-black/5 mb-20">
                        <nav className="flex items-center gap-3 text-secondary/40 text-xs font-bold uppercase tracking-widest mb-6">
                            <a href="/" className="hover:text-primary transition-colors">Inicio</a>
                            <ChevronRight className="w-3 h-3" />
                            <span className="text-secondary">Nuestros Servicios</span>
                        </nav>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">
                            Catálogo de <span className="text-primary">Servicios</span>
                        </h2>
                        <p className="text-secondary/50 text-lg md:text-xl font-medium max-w-3xl leading-relaxed">
                            Impulsamos la excelencia operativa de su organización a través de estándares
                            internacionales, consultoría estratégica y formación especializada de alto impacto.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                        {/* Sidebar Filters */}
                        <CatalogFilters
                            categories={["Auditoría", "Consultoría", "Formación", "Certificación"]}
                            selectedCategory={selectedCategory}
                            onCategoryChange={setSelectedCategory}
                            sectors={["Industrial", "Tecnología", "Servicios"]}
                            selectedSector={selectedSector}
                            onSectorChange={setSelectedSector}
                            onClear={() => { setSelectedCategory(""); setSelectedSector(""); }}
                        />

                        {/* Main Catalog Area */}
                        <div className="flex-1">
                            {/* Controls Bar */}
                            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
                                <p className="text-sm font-bold text-secondary/40">
                                    Mostrando <span className="text-secondary font-black">{filteredItems.length}</span> servicios
                                </p>
                                <div className="flex items-center gap-6">
                                    <div className="flex items-center gap-3 text-secondary/40 text-xs font-black uppercase tracking-widest">
                                        Ordenar por:
                                        <div className="relative">
                                            <select className="appearance-none bg-[#F9FBE7]/50 border border-primary/10 rounded-lg px-4 py-2 font-black text-secondary outline-none cursor-pointer pr-10">
                                                <option>Relevancia</option>
                                                <option>Más recientes</option>
                                            </select>
                                            <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-primary rotate-90" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Items Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                {filteredItems.map((item, idx) => (
                                    <ServiceItemCard key={idx} {...item} />
                                ))}
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

            {/* SECTION 3: BOTTOM CTA (Following Servicioss.png) */}
            <section className="pb-32 container mx-auto px-6">
                <div className="bg-secondary text-white p-12 md:p-20 rounded-[60px] relative overflow-hidden group">
                    <div className="absolute right-0 top-0 w-1/3 h-full bg-primary/10 blur-[100px] rounded-full group-hover:bg-primary/20 transition-all duration-700"></div>
                    <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-12">
                        <div className="text-center lg:text-left max-w-2xl">
                            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 leading-none">
                                ¿No encuentra lo que busca?
                            </h3>
                            <p className="text-white/50 text-lg font-medium">
                                Diseñamos soluciones personalizadas y a medida para las necesidades específicas
                                de su sector y organización.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-auto">
                            <button className="px-10 py-5 bg-primary text-black rounded-2xl font-black text-xs uppercase tracking-widest shadow-[0_20px_40px_rgba(178,197,53,0.3)] hover:scale-105 transition-all">
                                Solicitar Asesoría Gratuita
                            </button>
                            <button className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                                Ver todos los cursos
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
