import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ServiceCarousel, type Service } from '@/components/ui/services-card';
import { CatalogFilters, ServiceItemCard } from '@/components/ui/catalog-components';
import {
    ShieldCheck,
    BarChart3,
    GraduationCap,
    ChevronRight,
    Search,
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
    // --- ÁREA DE CALIDAD | EXCELENCIA | INNOVACIÓN ---
    { category: "Consultoría", title: "ISO 9001 - Sistema de Gestión de Calidad", description: "Implementación y auditoría de sistemas de gestión de calidad.", duration: "3-6 meses", image: "/Imágenes/Subservicios/Calidad y excelencia.webp", sector: "Industrial", keywords: "iso 9001, calidad, excelencia, innovacion" },
    { category: "Consultoría", title: "ISO 22716 - Guía de Buenas Prácticas de Fabricación de Cosméticos", description: "Aseguramiento de calidad en la industria cosmética.", duration: "3-5 meses", image: "/Imágenes/Subservicios/Calidad y excelencia.webp", sector: "Industrial", keywords: "iso 22716, cosmeticos, bpm, bpf" },
    { category: "Auditoría", title: "ISO/IEC 17025 - Competencia de Laboratorios", description: "Requisitos generales para la competencia de laboratorios de ensayo y calibración.", duration: "4-6 meses", image: "/Imágenes/Auditoría.webp", sector: "Servicios", keywords: "iso 17025, laboratorios, ensayo, calibracion" },
    { category: "Consultoría", title: "Metodología 5's", description: "Organización, orden y limpieza en el puesto de trabajo.", duration: "2-3 meses", image: "/Imágenes/Subservicios/Calidad y excelencia.webp", sector: "Industrial", keywords: "5s, metodologia 5s, orden, limpieza" },
    { category: "Consultoría", title: "Lean Manufacturing", description: "Optimización de procesos productivos y reducción de desperdicios.", duration: "4-6 meses", image: "/Imágenes/Subservicios/Calidad y excelencia.webp", sector: "Industrial", keywords: "lean manufacturing, procesos, produccion" },
    { category: "Consultoría", title: "Metodologías Ágiles | Mejora de Procesos", description: "Implementación de marcos ágiles para la mejora continua organizacional.", duration: "3-5 meses", image: "/Imágenes/Subservicios/Calidad y excelencia.webp", sector: "Tecnología", keywords: "agiles, scrum, mejora de procesos" },
    { category: "Consultoría", title: "ISO 56002 - Gestión de la Innovación", description: "Sistematización de los procesos de innovación en la empresa.", duration: "3-6 meses", image: "/Imágenes/Subservicios/Calidad y excelencia.webp", sector: "Tecnología", keywords: "iso 56002, innovacion, gestion" },
    { category: "Consultoría", title: "UNE 166002 - Sistema de Gestión de la I+D+i", description: "Gestión eficiente de investigación, desarrollo e innovación tecnológica.", duration: "4-6 meses", image: "/Imágenes/Subservicios/Calidad y excelencia.webp", sector: "Tecnología", keywords: "une 166002, i+d+i, investigacion, desarrollo" },
    { category: "Consultoría", title: "UNE 166006 - Vigilancia Tecnológica", description: "Sistemas de vigilancia tecnológica e inteligencia competitiva.", duration: "3-5 meses", image: "/Imágenes/Subservicios/Calidad y excelencia.webp", sector: "Tecnología", keywords: "une 166006, vigilancia tecnologica, inteligencia" },
    { category: "Consultoría", title: "ISO 7101 - Gestión de Organizaciones Sanitarias", description: "Calidad en la gestión de centros y organizaciones de salud.", duration: "4-6 meses", image: "/Imágenes/Subservicios/Calidad y excelencia.webp", sector: "Servicios", keywords: "iso 7101, organizaciones sanitarias, salud" },

    // --- ÁREA DE SALUD Y SEGURIDAD ---
    { category: "Medicina Ocupacional", title: "ISO 45001 - Seguridad y Salud Laboral", description: "Sistemas de Gestión de Seguridad y Salud en el Trabajo.", duration: "3-6 meses", image: "/Imágenes/Subservicios/Salud y bienestar.webp", sector: "Industrial", keywords: "iso 45001, salud laboral, seguridad, sst" },
    { category: "Consultoría", title: "ISO 22320 - Gestión de Emergencias", description: "Requisitos para la respuesta y gestión de emergencias e incidentes.", duration: "2-4 meses", image: "/Imágenes/Subservicios/Salud y bienestar.webp", sector: "Servicios", keywords: "iso 22320, emergencias, incidentes" },
    { category: "Consultoría", title: "ISO 39001 - Seguridad Vial", description: "Sistemas de gestión de la seguridad vial.", duration: "3-5 meses", image: "/Imágenes/Subservicios/Salud y bienestar.webp", sector: "Servicios", keywords: "iso 39001, seguridad vial, transito" },
    { category: "Medicina Ocupacional", title: "Asistencia Técnica en SST", description: "Soporte especializado en seguridad y salud ocupacional.", duration: "Continuo", image: "/Imágenes/Subservicios/Salud y bienestar.webp", sector: "Industrial", keywords: "sst, asistencia tecnica, seguridad, salud" },
    { category: "Auditoría", title: "Evaluación de Riesgos", description: "Identificación de peligros y evaluación integral de riesgos laborales.", duration: "1-2 meses", image: "/Imágenes/Auditoría.webp", sector: "Industrial", keywords: "evaluacion de riesgos, peligros, iperc" },
    { category: "Consultoría", title: "Planes de Emergencia y Evacuación", description: "Diseño y estructuración de planes de respuesta ante emergencias.", duration: "1-2 meses", image: "/Imágenes/Subservicios/Salud y bienestar.webp", sector: "Servicios", keywords: "planes de emergencia, evacuacion" },
    { category: "Consultoría", title: "Coordinación de Actividades Empresariales", description: "Gestión de riesgos en actividades con terceros y contratistas.", duration: "2-3 meses", image: "/Imágenes/Subservicios/Salud y bienestar.webp", sector: "Industrial", keywords: "coordinacion empresarial, contratistas, homologacion" },
    { category: "Medicina Ocupacional", title: "Estudios de Seguridad y Salud", description: "Análisis especializado y estudios técnicos de higiene y salud.", duration: "Variable", image: "/Imágenes/Subservicios/Salud y bienestar.webp", sector: "Industrial", keywords: "estudios, seguridad, salud, higiene" },
    { category: "Medicina Ocupacional", title: "Planes de Seguridad y Salud", description: "Elaboración e implantación de planes integrales de SST.", duration: "2-4 meses", image: "/Imágenes/Subservicios/Salud y bienestar.webp", sector: "Industrial", keywords: "planes, sst, seguridad, salud" },
    { category: "Consultoría", title: "Informes Técnicos Especializados", description: "Redacción y validación de reportes técnicos de seguridad.", duration: "Variable", image: "/Imágenes/Subservicios/Salud y bienestar.webp", sector: "Servicios", keywords: "informes tecnicos, sst" },
    { category: "Consultoría", title: "Asesoramiento Legal en SST", description: "Leyes Nacionales en materia de Salud Ocupacional y SST.", duration: "Continuo", image: "/Imágenes/Subservicios/Salud y bienestar.webp", sector: "Servicios", keywords: "leyes nacionales, legal, asesoramiento, sst" },

    // --- ÁREA DE SOSTENIBILIDAD Y RESPONSABILIDAD SOCIAL ---
    { category: "Consultoría", title: "ISO 14001 - Sistema de Gestión Ambiental", description: "Control y mejora del desempeño ambiental organizacional.", duration: "3-6 meses", image: "/Imágenes/Subservicios/Sostenibilidad.webp", sector: "Industrial", keywords: "iso 14001, ambiental, medio ambiente, sostenibilidad" },
    { category: "Consultoría", title: "ISO 50001 - Sistema de Gestión Energética", description: "Mejora de la eficiencia energética y reducción del consumo.", duration: "3-6 meses", image: "/Imágenes/Subservicios/Sostenibilidad.webp", sector: "Industrial", keywords: "iso 50001, energetica, energia, eficiencia" },
    { category: "Consultoría", title: "ISO 14067 - Huella de Carbono de Productos", description: "Cuantificación de emisiones de gases de efecto invernadero por producto.", duration: "2-4 meses", image: "/Imágenes/Subservicios/Sostenibilidad.webp", sector: "Industrial", keywords: "iso 14067, huella de carbono, productos" },
    { category: "Consultoría", title: "ISO 14064 - Huella de Carbono de Organizaciones", description: "Cuantificación y reporte de emisiones de GEI corporativas.", duration: "2-4 meses", image: "/Imágenes/Subservicios/Sostenibilidad.webp", sector: "Servicios", keywords: "iso 14064, huella de carbono, organizaciones" },
    { category: "Consultoría", title: "ISO 14046 - Huella de Agua", description: "Evaluación del impacto del consumo de agua y su gestión.", duration: "2-4 meses", image: "/Imágenes/Subservicios/Sostenibilidad.webp", sector: "Industrial", keywords: "iso 14046, huella de agua, hidrica" },
    { category: "Consultoría", title: "ISO 20400 - Compras Sostenibles", description: "Integración de la sostenibilidad en los procesos de compras.", duration: "3-5 meses", image: "/Imágenes/Subservicios/Sostenibilidad.webp", sector: "Servicios", keywords: "iso 20400, compras sostenibles, cadena de suministro" },
    { category: "Consultoría", title: "ISO 26000 - Responsabilidad Social", description: "Guía para la implementación de estrategias de responsabilidad social.", duration: "3-5 meses", image: "/Imágenes/Subservicios/Sostenibilidad.webp", sector: "Servicios", keywords: "iso 26000, responsabilidad social, rse" },
    { category: "Consultoría", title: "SGE21 - Gestión Ética", description: "Sistema de gestión ética y responsabilidad empresarial.", duration: "3-5 meses", image: "/Imágenes/Subservicios/Sostenibilidad.webp", sector: "Servicios", keywords: "sge21, etica, empresarial, rse" },
    { category: "Consultoría", title: "SA 8000 - Responsabilidad Social Internacional", description: "Certificación internacional de condiciones de trabajo éticas.", duration: "4-6 meses", image: "/Imágenes/Subservicios/Sostenibilidad.webp", sector: "Industrial", keywords: "sa 8000, responsabilidad social, internacional" },
    { category: "Consultoría", title: "Igualdad de Género", description: "Sistemas de Gestión de Igualdad de Género corporativa.", duration: "2-4 meses", image: "/Imágenes/Subservicios/Sostenibilidad.webp", sector: "Servicios", keywords: "igualdad de genero, equidad" },
    { category: "Consultoría", title: "ESR - Empresa Socialmente Responsable", description: "Acompañamiento para la obtención del distintivo ESR.", duration: "3-5 meses", image: "/Imágenes/Subservicios/Sostenibilidad.webp", sector: "Servicios", keywords: "esr, empresa socialmente responsable" },
    { category: "Consultoría", title: "Economía Circular", description: "Transición hacia modelos de producción y consumo circulares.", duration: "3-6 meses", image: "/Imágenes/Subservicios/Sostenibilidad.webp", sector: "Industrial", keywords: "economia circular, reciclaje, residuos" },
    { category: "Consultoría", title: "ESG y Reporte de Sostenibilidad", description: "Elaboración de Memorias de Sostenibilidad bajo estándares internacionales.", duration: "3-5 meses", image: "/Imágenes/Subservicios/Sostenibilidad.webp", sector: "Servicios", keywords: "esg, reporte, memoria, sostenibilidad" },

    // --- ÁREA DE SEGURIDAD ALIMENTARIA ---
    { category: "Consultoría", title: "ISO 22000 - Seguridad Alimentaria", description: "Sistema de gestión de inocuidad alimentaria.", duration: "4-6 meses", image: "/Imágenes/Subservicios/Seguridad alimentaria.webp", sector: "Alimentos", keywords: "iso 22000, seguridad alimentaria, inocuidad" },
    { category: "Consultoría", title: "BRC - Norma Mundial de Seguridad Alimentaria", description: "Estándar global para garantizar la calidad y seguridad alimentaria.", duration: "4-8 meses", image: "/Imágenes/Subservicios/Seguridad alimentaria.webp", sector: "Alimentos", keywords: "brc, seguridad alimentaria, norma mundial" },
    { category: "Consultoría", title: "IFS - International Food Standard", description: "Norma internacional enfocada en calidad y seguridad alimentaria.", duration: "4-8 meses", image: "/Imágenes/Subservicios/Seguridad alimentaria.webp", sector: "Alimentos", keywords: "ifs, food standard, seguridad alimentaria" },
    { category: "Consultoría", title: "Global GAP", description: "Aseguramiento de buenas prácticas agrícolas.", duration: "3-6 meses", image: "/Imágenes/Subservicios/Seguridad alimentaria.webp", sector: "Alimentos", keywords: "global gap, agricola, buenas practicas" },
    { category: "Consultoría", title: "FSSC 22000 - Certificación Alimentaria", description: "Esquema completo de certificación para sistemas de seguridad alimentaria.", duration: "4-8 meses", image: "/Imágenes/Subservicios/Seguridad alimentaria.webp", sector: "Alimentos", keywords: "fssc 22000, certificacion, alimentaria" },
    { category: "Consultoría", title: "HACCP - Análisis de Peligros", description: "Sistema de Análisis de Peligros y Puntos Críticos de Control.", duration: "2-4 meses", image: "/Imágenes/Subservicios/Seguridad alimentaria.webp", sector: "Alimentos", keywords: "haccp, analisis de peligros, puntos criticos" },
    { category: "Consultoría", title: "Food Defense", description: "Plan de defensa alimentaria contra la contaminación intencionada.", duration: "2-3 meses", image: "/Imágenes/Subservicios/Seguridad alimentaria.webp", sector: "Alimentos", keywords: "food defense, defensa alimentaria" },
    { category: "Consultoría", title: "Buenas Prácticas de Manufactura (BPM)", description: "Implementación de normativas higiénico-sanitarias básicas.", duration: "1-3 meses", image: "/Imágenes/Subservicios/Seguridad alimentaria.webp", sector: "Alimentos", keywords: "bpm, buenas practicas, manufactura" },
    { category: "Consultoría", title: "Buenas Prácticas de Almacenamiento (BPA)", description: "Optimización y seguridad en el almacenamiento de alimentos.", duration: "1-3 meses", image: "/Imágenes/Subservicios/Seguridad alimentaria.webp", sector: "Alimentos", keywords: "bpa, buenas practicas, almacenamiento" },
    { category: "Auditoría", title: "Evaluación y Desarrollo de Proveedores", description: "Auditoría de calidad e inocuidad en la cadena de suministro alimentaria.", duration: "Continuo", image: "/Imágenes/Auditoría.webp", sector: "Alimentos", keywords: "proveedores, desarrollo, evaluacion, alimentos" },

    // --- ÁREA DE RIESGOS Y CUMPLIMIENTO ---
    { category: "Consultoría", title: "ISO/IEC 27001 - Seguridad de la Información", description: "Gestión y protección de activos de información.", duration: "4-8 meses", image: "/Imágenes/Subservicios/Ciberseguridad.webp", sector: "Tecnología", keywords: "iso 27001, ciberseguridad, seguridad de la informacion" },
    { category: "Consultoría", title: "ISO 28000 / 28001 - Cadena de Suministro", description: "Sistemas de gestión para la seguridad de la cadena de suministro.", duration: "3-6 meses", image: "/Imágenes/Subservicios/Ciberseguridad.webp", sector: "Industrial", keywords: "iso 28000, iso 28001, cadena de suministro" },
    { category: "Consultoría", title: "BASC - Comercio Seguro", description: "Certificación internacional para el control y seguridad en el comercio.", duration: "3-6 meses", image: "/Imágenes/Subservicios/Ciberseguridad.webp", sector: "Industrial", keywords: "basc, comercio seguro, logistica" },
    { category: "Consultoría", title: "OEA - Operador Económico Autorizado", description: "Acreditación de seguridad aduanera y comercial.", duration: "4-8 meses", image: "/Imágenes/Subservicios/Ciberseguridad.webp", sector: "Servicios", keywords: "oea, operador economico, aduanas" },
    { category: "Consultoría", title: "ISO 37301 - Gestión de Compliance", description: "Sistema de gestión de cumplimiento normativo y legal.", duration: "4-6 meses", image: "/Imágenes/Subservicios/Gestión antisoborno.webp", sector: "Servicios", keywords: "iso 37301, compliance, cumplimiento legal" },
    { category: "Consultoría", title: "ISO 37001 - Gestión Antisoborno", description: "Sistemas corporativos para prevenir el soborno institucional.", duration: "4-6 meses", image: "/Imágenes/Subservicios/Gestión antisoborno.webp", sector: "Servicios", keywords: "iso 37001, antisoborno, corrupcion" },
    { category: "Consultoría", title: "ISO 22301 - Continuidad de Negocio", description: "Preparación ante interrupciones operativas severas.", duration: "4-6 meses", image: "/Imágenes/Subservicios/Ciberseguridad.webp", sector: "Servicios", keywords: "iso 22301, continuidad de negocio, contingencia" },
    { category: "Consultoría", title: "Protección de Datos", description: "Cumplimiento de Leyes Nacionales en Materia de Protección de Datos.", duration: "2-4 meses", image: "/Imágenes/Subservicios/Ciberseguridad.webp", sector: "Tecnología", keywords: "proteccion de datos, privacidad, pdp" },
    { category: "Consultoría", title: "ISO 31000 - Gestión del Riesgo", description: "Directrices globales para la gestión de riesgos en las organizaciones.", duration: "3-5 meses", image: "/Imágenes/Subservicios/Gestión antisoborno.webp", sector: "Servicios", keywords: "iso 31000, gestion del riesgo, riesgos" },
    { category: "Consultoría", title: "Plan de Prevención de Delitos", description: "Modelos de prevención penal y delitos corporativos.", duration: "2-4 meses", image: "/Imágenes/Subservicios/Gestión antisoborno.webp", sector: "Servicios", keywords: "prevencion de delitos, penal, compliance" },

    // --- FORMACIÓN (Transversal) ---
    { category: "Formación", title: "Certificación Auditor Jefe ISO", description: "Formación de alto nivel para liderar procesos de auditoría en todas las normas.", duration: "40 horas", image: "/Imágenes/Formación.webp", sector: "Servicios", keywords: "certificacion, auditor jefe, formacion, 9001, 14001, 45001, 37001, 27001" },
    { category: "Formación", title: "Especialización en Normas ISO", description: "Cursos técnicos detallados sobre interpretación e implementación de todas las normas.", duration: "24 horas", image: "/Imágenes/Formación.webp", sector: "Servicios", keywords: "especializacion, normas iso, capacitacion" },
    { category: "Formación", title: "Programas In-house a Medida", description: "Capacitación personalizada diseñada para las necesidades normativas de su organización.", duration: "Personalizado", image: "/Imágenes/Formación.webp", sector: "Industrial", keywords: "in-house, capacitacion, programas, corporativo" }
];

export default function ServicesPage() {
    const { t, locale } = useI18n();
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedSector, setSelectedSector] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

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
        },
        {
            number: "04",
            title: t('services_section.medicina_title'),
            description: t('services_section.medicina_desc'),
            icon: ShieldCheck, // or any appropriate icon, using ShieldCheck again or importing another
            gradient: "from-primary/40 to-primary/10",
            image: "/Imágenes/Consultoría.webp", // Will update image later if needed
            href: "/servicios/medicina-ocupacional"
        }
    ];

    const ES_CATEGORY_MAP: Record<string, string> = {
        'Auditoría': 'Auditoría',
        'Consultoría': 'Consultoría',
        'Formación': 'Formación',
        'Medicina Ocupacional': 'Medicina Ocupacional',
    };

    const filteredItems = catalogItems.filter(item => {
        const matchCat = !selectedCategory || item.category === selectedCategory;
        const matchSector = !selectedSector || item.sector === selectedSector;
        const searchLower = searchQuery.toLowerCase();
        const matchSearch = !searchQuery || 
            item.title.toLowerCase().includes(searchLower) || 
            item.description.toLowerCase().includes(searchLower) ||
            item.keywords?.toLowerCase().includes(searchLower);
        return matchCat && matchSector && matchSearch;
    });

    const catalogCategories = locale === 'en'
        ? ['Audit', 'Consulting', 'Training', 'Occupational Medicine']
        : ['Auditoría', 'Consultoría', 'Formación', 'Medicina Ocupacional'];

    const handleCategoryChange = (cat: string) => {
        if (locale === 'en') {
            const map: Record<string, string> = { 'Audit': 'Auditoría', 'Consulting': 'Consultoría', 'Training': 'Formación', 'Occupational Medicine': 'Medicina Ocupacional' };
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
                                ? { 'Auditoría': 'Audit', 'Consultoría': 'Consulting', 'Formación': 'Training', 'Medicina Ocupacional': 'Occupational Medicine' }[selectedCategory] || selectedCategory
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
                                <div className="flex flex-col gap-2 w-full md:w-auto">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-2">
                                        <Search className="w-3 h-3" />
                                        {locale === 'en' ? 'Find your service faster here:' : 'Encuentre su servicio más rápido aquí:'}
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <div className="relative w-full max-w-sm">
                                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black" />
                                            <input 
                                                type="text" 
                                                placeholder={locale === 'en' ? "Search services... (e.g. 37001)" : "Buscar servicios... (ej. 37001)"}
                                                value={searchQuery}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                                className="w-full bg-white border-[3px] border-black rounded-xl pl-12 pr-4 py-3 font-bold text-black text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all placeholder:font-medium placeholder:text-black/40"
                                            />
                                        </div>
                                        <p className="text-sm font-bold text-secondary/40 whitespace-nowrap hidden lg:block">
                                            {locale === 'en' ? 'Showing' : 'Mostrando'} <span className="text-secondary font-black">{filteredItems.length}</span> {locale === 'en' ? 'services' : 'servicios'}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6 w-full md:w-auto justify-end">
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
                                        "Formación": "/servicios/formacion",
                                        "Medicina Ocupacional": "/servicios/medicina-ocupacional"
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
