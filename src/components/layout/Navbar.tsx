import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Linkedin, Facebook, Instagram, Youtube, Search, X, Globe } from 'lucide-react';
import { useI18n, Locale } from '../../i18n';

// Search data keyed for easy translation lookup
const SEARCH_KEYS = [
    // --- CONSULTORÍA ---
    {
        labelEs: "Consultoría Estratégica",
        labelEn: "Strategic Consulting",
        descEs: "Diseñamos estrategias de alto impacto alineadas a normas ISO para optimizar tu organización.",
        descEn: "We design high-impact strategies aligned to ISO standards to optimize your organization.",
        path: "/servicios/consultoria"
    },
    {
        labelEs: "ISO 9001 – Calidad y Excelencia",
        labelEn: "ISO 9001 – Quality Management",
        descEs: "Implementación del sistema de gestión de calidad más reconocido del mundo. APM te guía paso a paso hasta la certificación.",
        descEn: "Implementation of the world's most recognized quality management system. APM guides you step by step to certification.",
        path: "/servicios/consultoria"
    },
    {
        labelEs: "ISO 17025 – Laboratorios de Ensayo",
        labelEn: "ISO 17025 – Testing Laboratories",
        descEs: "Acreditación de laboratorios de ensayo y calibración conforme al estándar internacional de competencia técnica.",
        descEn: "Accreditation of testing and calibration laboratories according to the international technical competence standard.",
        path: "/servicios/consultoria"
    },
    {
        labelEs: "ISO 21001 – Gestión Educativa",
        labelEn: "ISO 21001 – Educational Management",
        descEs: "Sistema de gestión para organizaciones educativas. Mejora la experiencia del estudiante bajo estándares ISO.",
        descEn: "Management system for educational organizations. Improves student experience under ISO standards.",
        path: "/servicios/consultoria"
    },
    {
        labelEs: "ISO 55001 – Gestión de Activos",
        labelEn: "ISO 55001 – Asset Management",
        descEs: "Optimización del ciclo de vida de activos físicos para maximizar el retorno de la inversión.",
        descEn: "Optimization of the physical asset lifecycle to maximize return on investment.",
        path: "/servicios/consultoria"
    },
    {
        labelEs: "Metodología 5S – Orden y Limpieza",
        labelEn: "5S Methodology – Workplace Organization",
        descEs: "Implementación de la metodología japonesa 5S para entornos de trabajo ordenados, seguros y eficientes.",
        descEn: "Implementation of the Japanese 5S methodology for organized, safe and efficient work environments.",
        path: "/servicios/consultoria"
    },
    {
        labelEs: "ISO 22000 – Seguridad Alimentaria",
        labelEn: "ISO 22000 – Food Safety",
        descEs: "Gestión de inocuidad alimentaria bajo HACCP e ISO 22000. Ideal para la industria de alimentos y bebidas.",
        descEn: "Food safety management under HACCP and ISO 22000. Ideal for the food and beverage industry.",
        path: "/servicios/consultoria"
    },
    {
        labelEs: "HACCP – Control de Peligros Alimentarios",
        labelEn: "HACCP – Food Hazard Control",
        descEs: "Sistema de análisis de peligros y puntos críticos de control para garantizar la inocuidad en cada etapa productiva.",
        descEn: "Hazard Analysis and Critical Control Points system to ensure food safety at every production stage.",
        path: "/servicios/consultoria"
    },
    {
        labelEs: "BPM / BPA – Buenas Prácticas",
        labelEn: "BPM / BPA – Good Practices",
        descEs: "Implementación de Buenas Prácticas de Manufactura y Agrícolas para el sector agroalimentario.",
        descEn: "Good Manufacturing and Agricultural Practices implementation for the agri-food sector.",
        path: "/servicios/consultoria"
    },
    {
        labelEs: "SQF – Safe Quality Food",
        labelEn: "SQF – Safe Quality Food",
        descEs: "Certificación SQF reconocida mundialmente para demostrar el compromiso con la seguridad y calidad alimentaria.",
        descEn: "Globally recognized SQF certification to demonstrate commitment to food safety and quality.",
        path: "/servicios/consultoria"
    },
    {
        labelEs: "BRC / GFSI – Estándares Globales Alimentarios",
        labelEn: "BRC / GFSI – Global Food Standards",
        descEs: "Cumplimiento de los estándares globales de seguridad alimentaria reconocidos por retailers internacionales.",
        descEn: "Compliance with global food safety standards recognized by international retailers.",
        path: "/servicios/consultoria"
    },
    {
        labelEs: "ISO 37001 – Gestión Antisoborno",
        labelEn: "ISO 37001 – Anti-Bribery Management",
        descEs: "Sistema de gestión antisoborno para prevenir, detectar y responder al soborno en tu organización.",
        descEn: "Anti-bribery management system to prevent, detect and respond to bribery in your organization.",
        path: "/servicios/consultoria"
    },
    {
        labelEs: "ISO 28001 – Seguridad Cadena Suministro",
        labelEn: "ISO 28001 – Supply Chain Security",
        descEs: "Protección y gestión de riesgos en la cadena de suministro bajo la norma ISO 28001.",
        descEn: "Protection and risk management of the supply chain under ISO 28001.",
        path: "/servicios/consultoria"
    },
    {
        labelEs: "ISO 37002 – Sistema de Denuncias",
        labelEn: "ISO 37002 – Whistleblowing System",
        descEs: "Implementación de sistemas de denuncia ética y gestión de irregularidades bajo la norma ISO 37002.",
        descEn: "Implementation of ethical reporting and misconduct management systems under ISO 37002.",
        path: "/servicios/consultoria"
    },
    {
        labelEs: "Compliance Corporativo",
        labelEn: "Corporate Compliance",
        descEs: "Programas de cumplimiento legal y ético que protegen a la empresa de riesgos regulatorios y reputacionales.",
        descEn: "Legal and ethical compliance programs that protect the company from regulatory and reputational risks.",
        path: "/servicios/consultoria"
    },
    {
        labelEs: "ISO 14001 – Medio Ambiente",
        labelEn: "ISO 14001 – Environmental Management",
        descEs: "Implementación del sistema de gestión ambiental para reducir el impacto ecológico y cumplir regulaciones.",
        descEn: "Environmental management system implementation to reduce ecological impact and meet regulations.",
        path: "/servicios/consultoria"
    },
    {
        labelEs: "Huella de Carbono – Sostenibilidad",
        labelEn: "Carbon Footprint – Sustainability",
        descEs: "Medición, análisis y reducción de la huella de carbono de tu empresa bajo metodologías GHG Protocol.",
        descEn: "Measurement, analysis and reduction of your company's carbon footprint using GHG Protocol methodologies.",
        path: "/servicios/consultoria"
    },
    {
        labelEs: "ISO 26000 – Responsabilidad Social",
        labelEn: "ISO 26000 – Social Responsibility",
        descEs: "Guía para integrar la responsabilidad social corporativa en la estrategia y operaciones de la organización.",
        descEn: "Guide to integrating corporate social responsibility into the strategy and operations of the organization.",
        path: "/servicios/consultoria"
    },
    {
        labelEs: "ODS / ESG – Reporte de Sostenibilidad",
        labelEn: "SDGs / ESG – Sustainability Reporting",
        descEs: "Alineamiento con los Objetivos de Desarrollo Sostenible y reporte ESG para inversores y stakeholders.",
        descEn: "Alignment with Sustainable Development Goals and ESG reporting for investors and stakeholders.",
        path: "/servicios/consultoria"
    },
    {
        labelEs: "ISO/IEC 27001 – Ciberseguridad",
        labelEn: "ISO/IEC 27001 – Cybersecurity",
        descEs: "Protección de activos de información mediante el sistema de gestión de seguridad de la información más reconocido.",
        descEn: "Protection of information assets through the most recognized information security management system.",
        path: "/servicios/consultoria"
    },
    {
        labelEs: "ISO 27701 – Privacidad de Datos",
        labelEn: "ISO 27701 – Data Privacy",
        descEs: "Extensión de ISO 27001 para la gestión de privacidad y protección de datos personales (GDPR, LGPD).",
        descEn: "Extension of ISO 27001 for privacy management and personal data protection (GDPR, LGPD).",
        path: "/servicios/consultoria"
    },
    {
        labelEs: "ISO 45001 – Seguridad y Salud en el Trabajo",
        labelEn: "ISO 45001 – Occupational Health & Safety",
        descEs: "Sistema de gestión de SST para proteger a los trabajadores y cumplir con la Ley 29783.",
        descEn: "Occupational health and safety management system to protect workers and comply with local regulations.",
        path: "/servicios/consultoria"
    },
    {
        labelEs: "Ley 29783 – SST Perú",
        labelEn: "Law 29783 – Occupational Safety Peru",
        descEs: "Asesoría en cumplimiento de la Ley de Seguridad y Salud en el Trabajo del Perú (Ley 29783).",
        descEn: "Advisory on compliance with Peru's Occupational Safety and Health Law (Law 29783).",
        path: "/servicios/consultoria"
    },
    // --- AUDITORÍA ---
    {
        labelEs: "Auditoría y Homologación",
        labelEn: "Audit & Qualification",
        descEs: "Evaluación técnica experta para garantizar el cumplimiento normativo internacional.",
        descEn: "Expert technical evaluation to guarantee international regulatory compliance.",
        path: "/servicios/auditoria"
    },
    {
        labelEs: "Auditoría Pre-Certificación",
        labelEn: "Pre-Certification Audit",
        descEs: "Gap analysis y diagnóstico inicial para preparar tu organización para una auditoría externa de certificación.",
        descEn: "Gap analysis and initial diagnosis to prepare your organization for an external certification audit.",
        path: "/servicios/auditoria"
    },
    {
        labelEs: "Auditoría de Cumplimiento Normativo",
        labelEn: "Regulatory Compliance Audit",
        descEs: "Evaluación exhaustiva contra leyes locales e internacionales para mitigar riesgos legales y operativos.",
        descEn: "Comprehensive evaluation against local and international laws to mitigate legal and operational risks.",
        path: "/servicios/auditoria"
    },
    {
        labelEs: "Homologación de Proveedores",
        labelEn: "Supplier Qualification",
        descEs: "Calificación y evaluación de proveedores para garantizar una cadena de suministro robusta y confiable.",
        descEn: "Qualification and evaluation of suppliers to ensure a robust and reliable supply chain.",
        path: "/servicios/auditoria"
    },
    {
        labelEs: "Auditoría Operativa",
        labelEn: "Operational Audit",
        descEs: "Diagnóstico profundo de flujos de trabajo y procesos clave para eliminar cuellos de botella.",
        descEn: "In-depth diagnosis of workflows and key processes to eliminate bottlenecks.",
        path: "/servicios/auditoria"
    },
    // --- FORMACIÓN ---
    {
        labelEs: "Formación y Capacitación",
        labelEn: "Training & Development",
        descEs: "Programas técnicos especializados para fortalecer el talento humano bajo normas ISO.",
        descEn: "Specialized technical programs to strengthen human talent under ISO standards.",
        path: "/servicios/formacion"
    },
    {
        labelEs: "Formación Auditores Internos ISO",
        labelEn: "ISO Internal Auditors Training",
        descEs: "Programas avanzados en ISO 9001, 14001, 45001 y más para formar perfiles de auditores rigurosos.",
        descEn: "Advanced programs in ISO 9001, 14001, 45001 and more to train rigorous auditor profiles.",
        path: "/servicios/formacion"
    },
    {
        labelEs: "Gestión Estratégica y Liderazgo",
        labelEn: "Strategic Management & Leadership",
        descEs: "Toma de decisiones basada en datos y mejora continua bajo estándares internacionales de alto impacto.",
        descEn: "Data-driven decision-making and continuous improvement under high-impact international standards.",
        path: "/servicios/formacion"
    },
    {
        labelEs: "Control Documental ISO",
        labelEn: "ISO Document Control",
        descEs: "Elaboración de manuales, procedimientos y gestión eficiente de la documentación bajo cumplimientos ISO.",
        descEn: "Preparation of manuals, procedures and efficient document management under ISO compliance.",
        path: "/servicios/formacion"
    },
    {
        labelEs: "Sostenibilidad y Medio Ambiente",
        labelEn: "Sustainability & Environment",
        descEs: "Diseño y ejecución de Planes de Acción Ambiental adaptados a realidades corporativas complejas.",
        descEn: "Design and execution of Environmental Action Plans adapted to complex corporate realities.",
        path: "/servicios/formacion"
    },
];

// Flag SVGs
const FlagES = () => (
    <svg viewBox="0 0 20 14" width="22" height="15" xmlns="http://www.w3.org/2000/svg" className="rounded-sm overflow-hidden shadow-sm flex-shrink-0">
        <rect width="20" height="14" fill="#c60b1e" />
        <rect y="3.5" width="20" height="7" fill="#ffc400" />
    </svg>
);

const FlagEN = () => (
    <svg viewBox="0 0 60 30" width="22" height="15" xmlns="http://www.w3.org/2000/svg" className="rounded-sm overflow-hidden shadow-sm flex-shrink-0">
        <rect width="60" height="30" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" />
        <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10" />
        <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6" />
    </svg>
);

const LANGUAGES: { code: Locale; label: string; Flag: React.FC }[] = [
    { code: 'es', label: 'Español', Flag: FlagES },
    { code: 'en', label: 'English', Flag: FlagEN },
];

const Navbar = () => {
    const { t, locale, setLocale } = useI18n();

    const [scrolled, setScrolled] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [langOpen, setLangOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const searchInputRef = useRef<HTMLInputElement>(null);
    const langRef = useRef<HTMLDivElement>(null);
    const location = useLocation();
    const navigate = useNavigate();

    // Scroll handler
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close lang on outside click
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    // Focus search input
    useEffect(() => {
        if (searchOpen) setTimeout(() => searchInputRef.current?.focus(), 50);
    }, [searchOpen]);

    // Close search on ESC
    useEffect(() => {
        const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') closeSearch(); };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, []);

    const closeSearch = () => { setSearchOpen(false); setSearchQuery(''); };

    const searchResults = searchQuery.trim()
        ? SEARCH_KEYS.filter(item => {
            const q = searchQuery.toLowerCase();
            const label = (locale === 'en' ? item.labelEn : item.labelEs).toLowerCase();
            const desc = (locale === 'en' ? item.descEn : item.descEs).toLowerCase();
            return label.includes(q) || desc.includes(q);
        })
        : [];

    const handleResultClick = (path: string) => { navigate(path); closeSearch(); };

    const navLinks = [
        { labelKey: 'nav.home', path: '/' },
        { labelKey: 'nav.about', path: '/nosotros' },
        { labelKey: 'nav.services', path: '/servicios' },
        { labelKey: 'nav.courses', path: '/cursos' },
        { labelKey: 'nav.blog', path: '/blog' },
        { labelKey: 'nav.contact', path: '/contacto' },
    ];

    const socialLinks = [
        { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/company/apmgroup-pe/" },
        { icon: <Facebook size={20} />, href: "https://www.facebook.com/share/1Dg872mbQk/" },
        { icon: <Instagram size={20} />, href: "https://www.instagram.com/apmgroup.pe/" },
        { icon: <Youtube size={20} />, href: "https://youtube.com/@apmgroup-consultoria" },
    ];

    const currentLang = LANGUAGES.find(l => l.code === locale)!;

    const popularSearches = locale === 'es'
        ? ["Consultoría", "Auditoría", "ISO 9001", "Webinars", "Sostenibilidad"]
        : ["Consulting", "Audit", "ISO 9001", "Webinars", "Sustainability"];

    return (
        <>
            <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white py-3 shadow-md border-b border-black/5' : 'bg-white/90 backdrop-blur-md py-5 shadow-sm'}`}>
                <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between gap-8">

                    <div className="flex items-center gap-8 lg:gap-12 flex-1">
                        {/* Logo */}
                        <Link to="/" className="flex-shrink-0">
                            <img src="/Imágenes/LOGO APM LETRAS NEGRAS.webp" alt="APM Group Logo" className="h-12 md:h-14 w-auto" />
                        </Link>

                        {/* Nav Links */}
                        <nav className="hidden xl:block">
                            <ul className="flex items-center gap-6 lg:gap-8 whitespace-nowrap">
                                {navLinks.map((link) => (
                                    <li key={link.path} className="group relative">
                                        <Link
                                            to={link.path}
                                            className={`relative font-semibold text-sm uppercase tracking-wider hover:text-primary transition-colors font-heading ${location.pathname === link.path ? 'text-primary' : 'text-secondary'}`}
                                        >
                                            {t(link.labelKey)}
                                            {location.pathname === link.path && (
                                                <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary rounded-full" />
                                            )}
                                        </Link>

                                        {/* Dropdown for "Servicios" */}
                                        {link.path === '/servicios' && (
                                            <div className="absolute left-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
                                                <div className="bg-white rounded-2xl shadow-2xl border border-black/5 p-4 min-w-[220px]">
                                                    {[
                                                        { labelEs: "Consultoría", labelEn: "Consulting", path: "/servicios/consultoria" },
                                                        { labelEs: "Auditoría", labelEn: "Audit", path: "/servicios/auditoria" },
                                                        { labelEs: "Formación", labelEn: "Training", path: "/servicios/formacion" }
                                                    ].map((item) => (
                                                        <Link
                                                            key={item.path}
                                                            to={item.path}
                                                            className="block px-4 py-3 text-xs font-black uppercase tracking-widest text-secondary hover:text-primary hover:bg-primary/5 rounded-xl transition-all"
                                                        >
                                                            {locale === 'en' ? item.labelEn : item.labelEs}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* Right side (Interactions) */}
                    <div className="flex items-center gap-4">

                        {/* Social Icons */}
                        <div className="hidden lg:flex items-center gap-4 border-r border-black/10 pr-4">
                            {socialLinks.map((social, idx) => (
                                <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer"
                                    className="text-secondary/40 hover:text-primary transition-all hover:scale-110">
                                    {social.icon}
                                </a>
                            ))}
                        </div>

                        {/* Search */}
                        <button
                            onClick={() => setSearchOpen(true)}
                            className="w-10 h-10 rounded-xl border border-black/10 flex items-center justify-center text-secondary/50 hover:text-primary hover:border-primary transition-all bg-white/50"
                            aria-label={t('search.placeholder')}
                        >
                            <Search size={18} />
                        </button>

                        {/* Language Selector */}
                        <div ref={langRef} className="relative">
                            <button
                                onClick={() => setLangOpen(v => !v)}
                                className="flex items-center gap-2 h-10 px-3 rounded-xl border border-black/10 hover:border-primary text-secondary/60 hover:text-primary transition-all text-xs font-bold uppercase bg-white/50"
                                aria-label="Select language"
                            >
                                <currentLang.Flag />
                                <span className="hidden lg:inline tracking-widest">{currentLang.code.toUpperCase()}</span>
                                <Globe size={14} className="opacity-50" />
                            </button>

                            {langOpen && (
                                <div className="absolute right-0 top-full mt-2 bg-white rounded-2xl shadow-2xl border border-black/5 overflow-hidden min-w-[150px] z-50 py-2">
                                    {LANGUAGES.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => { setLocale(lang.code); setLangOpen(false); }}
                                            className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-semibold hover:bg-primary/10 hover:text-primary transition-all text-left font-heading ${locale === lang.code ? 'text-primary bg-primary/5' : 'text-secondary'}`}
                                        >
                                            <lang.Flag />
                                            {lang.label}
                                            {locale === lang.code && (
                                                <span className="ml-auto w-1.5 h-1.5 bg-primary rounded-full" />
                                            )}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Mobile toggle */}
                        <button
                            className="xl:hidden w-10 h-10 rounded-xl border border-black/10 flex items-center justify-center text-secondary/60 hover:text-primary hover:border-primary transition-all"
                            onClick={() => setMobileMenuOpen(v => !v)}
                            aria-label="Menu"
                        >
                            {mobileMenuOpen
                                ? <X size={20} />
                                : <svg width="20" height="16" viewBox="0 0 18 14" fill="currentColor"><rect y="0" width="18" height="2" rx="1" /><rect y="6" width="18" height="2" rx="1" /><rect y="12" width="18" height="2" rx="1" /></svg>
                            }
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="xl:hidden bg-white border-t border-black/5 px-6 py-4 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`block py-3 font-semibold text-sm uppercase tracking-wider hover:text-primary transition-colors border-b border-black/5 last:border-0 font-heading ${location.pathname === link.path ? 'text-primary' : 'text-secondary'}`}
                            >
                                {t(link.labelKey)}
                            </Link>
                        ))}
                    </div>
                )}
            </header>

            {/* Search Overlay */}
            {searchOpen && (
                <div
                    className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-start justify-center pt-24 px-4"
                    onClick={(e) => { if (e.target === e.currentTarget) closeSearch(); }}
                >
                    <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden">
                        <div className="flex items-center gap-4 px-6 py-5 border-b border-black/5">
                            <Search size={20} className="text-primary flex-shrink-0" />
                            <input
                                ref={searchInputRef}
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' && searchResults.length > 0) handleResultClick(searchResults[0].path);
                                }}
                                placeholder={t('search.placeholder')}
                                className="flex-1 text-secondary text-base font-medium outline-none placeholder:text-secondary/30 font-body"
                            />
                            <button
                                onClick={closeSearch}
                                className="w-8 h-8 rounded-xl bg-black/5 flex items-center justify-center text-secondary/50 hover:text-primary hover:bg-primary/10 transition-all"
                            >
                                <X size={16} />
                            </button>
                        </div>

                        {searchResults.length > 0 && (
                            <div className="py-4 max-h-[60vh] overflow-y-auto">
                                {searchResults.map((result, idx) => (
                                    <div
                                        key={idx}
                                        className="group px-6 py-5 hover:bg-primary/5 transition-all border-b border-black/5 last:border-0"
                                    >
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                            <button
                                                onClick={() => handleResultClick(result.path)}
                                                className="flex-1 text-left"
                                            >
                                                <h4 className="text-secondary font-black text-lg group-hover:text-primary transition-colors flex items-center gap-3">
                                                    <Search size={16} className="text-primary/40" />
                                                    {locale === 'en' ? result.labelEn : result.labelEs}
                                                </h4>
                                                <p className="text-secondary/50 text-sm font-medium mt-1 pl-7">
                                                    {locale === 'en' ? result.descEn : result.descEs}
                                                </p>
                                            </button>
                                            <a
                                                href={`https://wa.me/51967170627?text=${encodeURIComponent(`Hola, me interesa el servicio de ${locale === 'en' ? result.labelEn : result.labelEs}.`)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-xl text-xs font-black uppercase tracking-widest hover:scale-105 transition-all self-start md:self-center shadow-lg"
                                            >
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" /></svg>
                                                WhatsApp
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {searchQuery && searchResults.length === 0 && (
                            <div className="px-6 py-8 text-center text-secondary/40 text-sm font-medium">
                                {t('search.no_results')} "<span className="text-primary">{searchQuery}</span>"
                            </div>
                        )}

                        {!searchQuery && (
                            <div className="px-6 py-4">
                                <p className="text-[10px] font-black uppercase tracking-widest text-secondary/30 mb-3 font-heading">
                                    {t('search.popular')}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {popularSearches.map((tag) => (
                                        <button
                                            key={tag}
                                            onClick={() => setSearchQuery(tag)}
                                            className="px-4 py-2 bg-secondary/5 text-secondary rounded-xl text-xs font-bold hover:bg-primary/10 hover:text-primary transition-all"
                                        >
                                            {tag}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
