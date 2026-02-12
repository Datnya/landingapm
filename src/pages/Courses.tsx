import React, { useState } from 'react';
import { Search, ChevronRight, CheckCircle2, Play, Monitor, Tablet, Smartphone, Award, Unlock, Clock, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const courses = [
    {
        id: 1,
        title: "Especialista en Sistemas de Gestión ISO 9001",
        description: "Domina la norma de calidad más reconocida a nivel mundial y aprende a implementarla desde cero.",
        category: "Gestión Estratégica",
        duration: "40 Horas",
        lessons: "24 Clases",
        image: "/Imágenes/Consultoría.jpg",
        tag: "Bestseller"
    },
    {
        id: 2,
        title: "Auditor Interno ISO 14001: Gestión Ambiental",
        description: "Certifícate para evaluar el cumplimiento ambiental y liderar la sostenibilidad organizacional.",
        category: "Operaciones",
        duration: "32 Horas",
        lessons: "18 Clases",
        image: "/Imágenes/quienes somos fondo.jpg",
        tag: "Certificación"
    },
    {
        id: 3,
        title: "Seguridad y Salud Ocupacional ISO 45001",
        description: "Protege a tu equipo y cumple con los estándares globales de seguridad en el trabajo.",
        category: "Seguridad",
        duration: "35 Horas",
        lessons: "21 Clases",
        image: "/Imágenes/Auditoría.jpg",
        tag: "Nuevo"
    }
];

export default function CoursesPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeTab, setActiveTab] = useState("Todos");

    const tabs = ["Todos", "Gestión Estratégica", "Sostenibilidad", "Seguridad", "Liderazgo", "TI & Digital"];

    return (
        <div className="bg-white min-h-screen pt-20 pb-24 text-secondary font-body selection:bg-primary/30">

            {/* 1. Dynamic Creative Hero */}
            <section className="relative py-24 md:py-32 overflow-hidden bg-secondary">
                <div className="absolute inset-0 opacity-20">
                    <img src="/Imágenes/Formación.jpg" alt="Background" className="w-full h-full object-cover grayscale" />
                    <div className="absolute inset-0 bg-gradient-to-b from-secondary via-transparent to-secondary"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-6 animate-pulse">
                            Campus Virtual APM Group
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] uppercase tracking-tighter mb-8">
                            Aprende a <br />
                            <span className="text-primary italic">Tu Ritmo</span>
                        </h1>
                        <p className="text-white/60 text-lg md:text-xl font-medium max-w-2xl leading-relaxed mb-12">
                            Accede a formación técnica de élite diseñada por expertos internacionales. Nuestra plataforma te permite dominar estándares globales desde cualquier lugar de forma flexible.
                        </p>
                        <div className="flex flex-wrap gap-6">
                            <button className="bg-primary text-secondary px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-[0_20px_40px_rgba(178,197,53,0.3)]">
                                Registrarme Gratis
                            </button>
                            <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/20 transition-all">
                                Explorar Campus
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Platform Features - Focus on 24/7 and Free Registration */}
            <section className="py-24 bg-[#F9FBE7]/30">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: <Unlock className="w-12 h-12" />,
                                title: "Registro Gratis",
                                desc: "Únete a nuestra comunidad sin costo y explora nuestro catálogo completo de inmediato.",
                                gradient: "from-emerald-400 to-emerald-600"
                            },
                            {
                                icon: <Clock className="w-12 h-12" />,
                                title: "Acceso 24/7",
                                desc: "Las clases son grabadas para que las veas en el horario que mejor se adapte a tu agenda.",
                                gradient: "from-blue-400 to-blue-600"
                            },
                            {
                                icon: <div className="flex gap-2 items-center"><Monitor size={24} /><Smartphone size={24} /></div>,
                                title: "Multi-dispositivo",
                                desc: "Estudia cómodamente desde tu laptop, tablet o celular con nuestra interfaz responsiva.",
                                gradient: "from-purple-400 to-purple-600"
                            },
                            {
                                icon: <Award className="w-12 h-12" />,
                                title: "Certificado Oficial",
                                desc: "Al finalizar cada curso satisfactoriamente, obtendrás una certificación técnica con validez.",
                                gradient: "from-primary/80 to-primary"
                            }
                        ].map((feature, i) => (
                            <div key={i} className="group relative bg-white p-12 rounded-[50px] shadow-[0_20px_60px_rgba(0,0,0,0.03)] border-2 border-transparent hover:border-primary/20 hover:translate-y-[-20px] transition-all duration-700 overflow-hidden text-center">
                                {/* Decorative Gradient Background */}
                                <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-700", feature.gradient)}></div>

                                <div className="relative z-10">
                                    <div className="w-24 h-24 rounded-3xl bg-[#F9FBE7] text-primary flex items-center justify-center mb-10 mx-auto transform group-hover:rotate-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-secondary transition-all duration-500 shadow-lg">
                                        {feature.icon}
                                    </div>
                                    <h4 className="text-2xl font-black uppercase tracking-tight mb-6 text-secondary">{feature.title}</h4>
                                    <p className="text-secondary/60 text-base font-medium leading-relaxed">{feature.desc}</p>
                                </div>

                                {/* Decorative dot */}
                                <div className="absolute top-8 right-8 w-2 h-2 rounded-full bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Catalog & Search Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-16">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 leading-tight">
                                Catálogo de <span className="text-primary italic">Cursos</span>
                            </h2>
                            <p className="text-secondary/50 font-medium text-lg">
                                Filtra por categoría y encuentra el programa perfecto para elevar tus competencias técnicas hoy mismo.
                            </p>
                        </div>
                        <div className="w-full lg:w-96 relative group">
                            <input
                                type="text"
                                placeholder="Buscar curso..."
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
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={cn(
                                    "px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-widest transition-all",
                                    activeTab === tab
                                        ? "bg-secondary text-white shadow-xl"
                                        : "bg-[#F8F9FA] text-secondary/40 hover:bg-primary/20 hover:text-secondary"
                                )}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Course Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {courses.map((course) => (
                            <div key={course.id} className="bg-white rounded-[50px] overflow-hidden border border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.03)] group hover:shadow-2xl transition-all duration-700">
                                <div className="h-64 relative overflow-hidden">
                                    <img src={course.image} alt={course.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
                                    <div className="absolute top-6 left-6">
                                        <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest shadow-xl">
                                            {course.tag}
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
                                            <Clock size={12} className="text-primary" /> {course.duration}
                                        </span>
                                        <span className="text-secondary/30 text-[9px] font-black uppercase tracking-widest flex items-center gap-1">
                                            <Play size={12} className="text-primary" /> {course.lessons}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-black text-secondary leading-tight mb-6 group-hover:text-primary transition-colors">
                                        {course.title}
                                    </h3>
                                    <p className="text-secondary/50 text-sm font-medium leading-relaxed mb-8">
                                        {course.description}
                                    </p>
                                    <button className="w-full py-5 bg-[#F9FBE7] text-secondary rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-primary transition-all flex items-center justify-center gap-3 group/btn">
                                        VER TEMARIO <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Registration Promo Section */}
            <section className="container mx-auto px-6 py-24">
                <div className="bg-primary p-12 md:p-24 rounded-[60px] relative overflow-hidden flex flex-col items-center text-center">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

                    <h2 className="text-4xl md:text-6xl font-black text-secondary uppercase tracking-tighter leading-none mb-8 relative z-10 italic">
                        ¿LISTO PARA INICIAR <br />TU FORMACIÓN?
                    </h2>
                    <p className="text-secondary/70 text-lg md:text-xl font-bold max-w-2xl mb-12 relative z-10">
                        Regístrate hoy de forma gratuita y accede a nuestras clases demo y material exclusivo de la plataforma.
                    </p>
                    <button className="bg-secondary text-white px-12 py-6 rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:scale-105 transition-all shadow-2xl relative z-10">
                        CREAR CUENTA GRATIS
                    </button>
                    <p className="mt-8 text-secondary/40 text-[10px] font-black uppercase tracking-widest relative z-10">
                        Acceso inmediato · Sin tarjeta de crédito · 100% Online
                    </p>
                </div>
            </section>

        </div>
    );
}
