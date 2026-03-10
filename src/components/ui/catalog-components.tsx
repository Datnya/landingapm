import React from 'react';
import { cn } from '@/lib/utils';
import { Search, ChevronDown, Filter, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FilterProps {
    categories: string[];
    selectedCategory: string;
    onCategoryChange: (cat: string) => void;
    sectors: string[];
    selectedSector: string;
    onSectorChange: (sector: string) => void;
    onClear: () => void;
}

export const CatalogFilters = ({
    categories,
    selectedCategory,
    onCategoryChange,
    sectors,
    selectedSector,
    onSectorChange,
    onClear
}: FilterProps) => {
    return (
        <aside className="w-full lg:w-72 flex-shrink-0 space-y-10">
            <div className="flex justify-between items-center border-b border-black/5 pb-4">
                <h3 className="font-black uppercase tracking-widest text-sm flex items-center gap-2">
                    <Filter className="w-4 h-4 text-primary" /> Filtros
                </h3>
                <button
                    onClick={onClear}
                    className="text-[10px] font-bold text-primary uppercase tracking-widest hover:underline"
                >
                    Limpiar
                </button>
            </div>

            {/* Categories */}
            <div className="space-y-6">
                <p className="text-[11px] font-black text-secondary/40 uppercase tracking-[0.2em]">Categoría</p>
                <div className="space-y-3">
                    {categories.map((cat) => (
                        <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                            <div className="relative flex items-center justify-center">
                                <input
                                    type="checkbox"
                                    checked={selectedCategory === cat}
                                    onChange={() => onCategoryChange(cat)}
                                    className="appearance-none w-5 h-5 rounded border-2 border-primary/20 checked:bg-primary checked:border-primary transition-all cursor-pointer"
                                />
                                {selectedCategory === cat && (
                                    <svg className="absolute w-3 h-3 text-white pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                                        <path d="M5 13l4 4L19 7" />
                                    </svg>
                                )}
                            </div>
                            <span className={cn(
                                "text-sm font-semibold transition-colors",
                                selectedCategory === cat ? "text-primary" : "text-secondary/70 group-hover:text-primary"
                            )}>
                                {cat}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Sectors */}
            <div className="space-y-6">
                <p className="text-[11px] font-black text-secondary/40 uppercase tracking-[0.2em]">Sectores</p>
                <div className="space-y-3">
                    {sectors.map((sector) => (
                        <label key={sector} className="flex items-center gap-3 cursor-pointer group">
                            <div className="relative flex items-center justify-center">
                                <input
                                    type="checkbox"
                                    checked={selectedSector === sector}
                                    onChange={() => onSectorChange(sector)}
                                    className="appearance-none w-5 h-5 rounded border-2 border-primary/20 checked:bg-primary checked:border-primary transition-all cursor-pointer"
                                />
                                {selectedSector === sector && (
                                    <svg className="absolute w-3 h-3 text-white pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                                        <path d="M5 13l4 4L19 7" />
                                    </svg>
                                )}
                            </div>
                            <span className={cn(
                                "text-sm font-semibold transition-colors",
                                selectedSector === sector ? "text-primary" : "text-secondary/70 group-hover:text-primary"
                            )}>
                                {sector}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* ISO Norm Dropdown (Static for UI) */}
            <div className="space-y-6">
                <p className="text-[11px] font-black text-secondary/40 uppercase tracking-[0.2em]">Normativa ISO</p>
                <div className="relative">
                    <select className="w-full appearance-none bg-[#F9FBE7]/50 border-2 border-primary/10 rounded-xl px-5 py-4 font-bold text-sm text-secondary outline-none cursor-pointer focus:border-primary transition-colors text-black">
                        <option>Todas las normas</option>
                        <option>ISO 9001</option>
                        <option>ISO 14001</option>
                        <option>ISO 45001</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary pointer-events-none" />
                </div>
            </div>

            {/* Help Box */}
            <div className="bg-secondary p-8 rounded-[30px] text-white space-y-4">
                <p className="font-bold text-lg leading-tight uppercase tracking-tight">¿Necesita ayuda?</p>
                <p className="text-white/50 text-xs font-medium leading-relaxed">Nuestros expertos pueden asesorarle sobre el servicio que mejor se adapta a su empresa.</p>
                <button className="w-full py-4 bg-primary text-black rounded-2xl font-black text-[10px] uppercase tracking-widest hover:scale-[1.02] transition-transform">
                    Contactar ahora
                </button>
            </div>
        </aside>
    );
};

export const ServiceItemCard = ({
    category,
    title,
    description,
    duration,
    image,
    href
}: {
    category: string;
    title: string;
    description: string;
    duration: string;
    image: string;
    href?: string;
}) => {
    return (
        <div className="bg-white rounded-[40px] border border-black/5 overflow-hidden transition-all duration-500 hover:translate-y-[-10px] hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] group">
            <div className="relative h-64 overflow-hidden">
                <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-6 left-6 bg-primary text-black px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest shadow-lg">
                    {category}
                </div>
            </div>
            <div className="p-10 space-y-6">
                <Link to={href || "#"}>
                    <h4 className="text-2xl font-black uppercase tracking-tight leading-none group-hover:text-primary transition-colors">
                        {title}
                    </h4>
                </Link>
                <p className="text-secondary/50 text-sm font-medium leading-relaxed line-clamp-3">
                    {description}
                </p>
                <div className="pt-6 border-t border-black/5 flex justify-between items-center">
                    <div className="flex items-center gap-2 text-secondary/40 font-bold text-[10px] uppercase tracking-widest">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        {duration}
                    </div>
                    <Link to={href || "#"}>
                        <button className="text-primary font-black text-[10px] uppercase tracking-widest flex items-center gap-2 hover:translate-x-2 transition-transform">
                            Saber más <ArrowRight className="w-4 h-4" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export const CourseItemCard = ({
    title,
    description,
    date,
    duration,
    modality,
    price,
    image,
    highlighted = false
}: {
    title: string;
    description: string;
    date: string;
    duration: string;
    modality: string;
    price: string;
    image: string;
    highlighted?: boolean;
}) => {
    return (
        <div className="bg-white rounded-[30px] border border-black/5 overflow-hidden flex flex-col md:flex-row gap-8 p-6 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] group">
            <div className="relative w-full md:w-72 h-56 md:h-auto overflow-hidden rounded-2xl flex-shrink-0">
                <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                {highlighted && (
                    <div className="absolute top-4 left-4 bg-primary text-black px-3 py-1 rounded-md text-[9px] font-black uppercase tracking-widest shadow-lg">
                        Destacado
                    </div>
                )}
            </div>
            <div className="flex-1 flex flex-col justify-center py-2">
                <div className="flex justify-between items-start mb-4">
                    <h4 className="text-2xl font-black uppercase tracking-tight leading-tight group-hover:text-primary transition-colors max-w-md">
                        {title}
                    </h4>
                    <span className="text-2xl font-black text-secondary tracking-tighter">
                        {price}
                    </span>
                </div>
                <p className="text-secondary/50 text-sm font-medium leading-relaxed mb-8 line-clamp-2">
                    {description}
                </p>
                <div className="flex flex-wrap items-center gap-6 text-[10px] font-bold uppercase tracking-wider text-secondary/40">
                    <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        {date}
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        {duration}
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                        {modality}
                    </div>
                </div>
                <div className="mt-8 md:mt-auto flex justify-end">
                    <button className="bg-primary text-black px-8 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-secondary hover:text-white transition-all shadow-lg">
                        Inscribirse
                    </button>
                </div>
            </div>
        </div>
    );
};
