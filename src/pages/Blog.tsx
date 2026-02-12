import React from 'react';
import { ArrowRight, Search, Calendar, User, ChevronRight } from 'lucide-react';

const blogPosts = [
    {
        id: 1,
        title: "Tendencias Globales en Normas ISO: Lo que nos espera este 2024",
        excerpt: "Un análisis profundo sobre cómo la inteligencia artificial y la sostenibilidad están rediseñando los estándares internacionales de gestión.",
        category: "Normalización",
        date: "15 de Marzo, 2024",
        author: "Inge. Carlos Méndez",
        image: "/Imágenes/Consultoría.jpg"
    },
    {
        id: 2,
        title: "Minería 4.0: Sostenibilidad y Excelencia Operativa en LATAM",
        excerpt: "Descubre cómo las principales empresas mineras están transformando sus procesos para cumplir con los estándares ESG más exigentes.",
        category: "Minería",
        date: "10 de Marzo, 2024",
        author: "Dr. Roberto Silva",
        image: "/Imágenes/quienes somos fondo.jpg"
    },
    {
        id: 3,
        title: "La importancia de la Huella de Carbono en la cadena de valor",
        excerpt: "Implementar la ISO 14064 no es solo un compromiso ambiental, es una ventaja competitiva estratégica en el mercado global.",
        category: "Sostenibilidad",
        date: "02 de Marzo, 2024",
        author: "MSc. Ana Torres",
        image: "/Imágenes/Auditoría.jpg"
    }
];

const BlogPage = () => {
    return (
        <div className="pt-20">
            {/* Minimal Hero Header */}
            <section className="bg-white pt-24 pb-12 border-b border-black/5">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-6">
                            <span className="w-8 h-[1px] bg-primary"></span>
                            Recursos Técnicos
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-secondary uppercase tracking-tighter mb-8 leading-[0.9]">
                            Blog <br />
                            Conocimiento <span className="text-primary italic">que Transforma</span>
                        </h1>
                        <p className="text-secondary/50 text-lg font-medium leading-relaxed max-w-2xl">
                            Explora las últimas actualizaciones normativas, casos de éxito y perspectivas de expertos diseñadas para elevar los estándares de tu organización.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-[#F9FBE7]/20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                        {/* Feed Principal - Más Espacioso y Moderno */}
                        <div className="lg:col-span-8 space-y-20">
                            {blogPosts.map((post) => (
                                <article key={post.id} className="group cursor-pointer">
                                    <div className="relative aspect-[21/9] rounded-[40px] overflow-hidden mb-10 shadow-2xl">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                        />
                                        <div className="absolute top-8 left-8">
                                            <span className="bg-white/90 backdrop-blur-md text-secondary px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="px-4">
                                        <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-secondary/30 mb-6">
                                            <div className="flex items-center gap-2">
                                                <Calendar size={14} className="text-primary" />
                                                {post.date}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <User size={14} className="text-primary" />
                                                {post.author}
                                            </div>
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-black text-secondary mb-6 leading-tight group-hover:text-primary transition-colors">
                                            {post.title}
                                        </h2>
                                        <p className="text-secondary/50 font-medium leading-relaxed text-lg mb-8 max-w-3xl">
                                            {post.excerpt}
                                        </p>
                                        <button className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] group-hover:gap-6 transition-all text-secondary">
                                            LEER EL ARTÍCULO COMPLET <ChevronRight size={18} className="text-primary" />
                                        </button>
                                    </div>
                                </article>
                            ))}

                            {/* Pagination Estilo Moderno */}
                            <div className="flex items-center gap-8 pt-10 border-t border-black/5">
                                <p className="text-[10px] font-black uppercase tracking-widest text-secondary/30">Página 1 de 12</p>
                                <div className="flex gap-2">
                                    <button className="w-12 h-12 rounded-xl bg-secondary text-white flex items-center justify-center text-sm font-bold shadow-lg">01</button>
                                    <button className="w-12 h-12 rounded-xl bg-white border border-black/5 flex items-center justify-center text-sm font-bold text-secondary/40 hover:bg-primary hover:text-secondary transition-all">02</button>
                                    <button className="w-12 h-12 rounded-xl bg-white border border-black/5 flex items-center justify-center text-sm font-bold text-secondary/40 hover:bg-primary hover:text-secondary transition-all">03</button>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar Refinado */}
                        <aside className="lg:col-span-4 space-y-16">

                            {/* Search Sticky-ish */}
                            <div className="bg-secondary text-white p-12 rounded-[50px] shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-bl-full -z-0"></div>
                                <h4 className="text-xl font-black uppercase tracking-tight mb-8 relative z-10">Búsqueda <span className="text-primary italic">IA</span></h4>
                                <div className="relative z-10">
                                    <input
                                        type="text"
                                        placeholder="Filtrar por tema..."
                                        className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-5 text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:bg-white/20 transition-all text-sm"
                                    />
                                    <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-primary" size={20} />
                                </div>
                            </div>

                            {/* Categorías con Contador */}
                            <div className="px-4">
                                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-secondary/40 mb-10">Explorar por Ejes</h4>
                                <ul className="space-y-6">
                                    {[
                                        { name: "Sistemas de Gestión ISO", count: 24 },
                                        { name: "Sostenibilidad & ESG", count: 18 },
                                        { name: "Minería y Energía", count: 15 },
                                        { name: "Cumplimiento Normativo", count: 12 },
                                        { name: "Excelencia Operativa", count: 9 }
                                    ].map((cat, i) => (
                                        <li key={i}>
                                            <a href="#" className="flex items-center justify-between group">
                                                <span className="text-secondary font-bold text-sm group-hover:text-primary transition-all">{cat.name}</span>
                                                <span className="w-10 h-6 rounded-full bg-white border border-black/5 text-[10px] font-black flex items-center justify-center text-secondary/30 group-hover:bg-primary group-hover:text-secondary group-hover:border-primary transition-all">
                                                    {cat.count}
                                                </span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Newsletter Moderno */}
                            <div className="bg-primary p-12 rounded-[50px] shadow-[0_30px_60px_rgba(178,197,53,0.3)] text-secondary">
                                <h4 className="text-2xl font-black uppercase tracking-tighter mb-4 leading-none italic text-secondary">Boletín <br />Técnico</h4>
                                <p className="text-secondary/70 text-sm font-semibold mb-8 leading-relaxed">Suscríbete para recibir análisis técnicos avanzados antes que nadie.</p>
                                <form className="space-y-4">
                                    <input
                                        type="email"
                                        placeholder="email@corporativo.com"
                                        className="w-full bg-white/20 border border-black/5 rounded-2xl px-6 py-5 placeholder:text-secondary/30 text-secondary text-xs font-bold focus:outline-none focus:bg-white/40 transition-all"
                                    />
                                    <button className="w-full py-5 bg-secondary text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-secondary transition-all shadow-xl">
                                        UNIRME AL CLUB
                                    </button>
                                </form>
                            </div>

                            {/* CTA Corporativo */}
                            <div className="pt-10 flex flex-col items-center text-center px-4">
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary/30 mb-6">¿Necesitas ayuda experta?</p>
                                <a href="/contacto" className="text-secondary font-black text-sm uppercase tracking-tighter hover:text-primary transition-colors flex items-center gap-2 group">
                                    Solicitar Auditoría <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                                </a>
                            </div>

                        </aside>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogPage;
