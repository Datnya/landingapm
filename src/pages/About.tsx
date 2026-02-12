import React from 'react';
import SpecialistsSection from '../components/sections/specialists-section';
import { Target, Eye, Heart, Shield, Zap, Award } from 'lucide-react';

const About = () => {
    return (
        <div className="pt-20">
            {/* Hero Section Simplified for About Us */}
            <section className="bg-secondary text-white py-24 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img src="/Imágenes/quienes somos fondo.jpg" alt="Background" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <p className="uppercase font-bold text-primary tracking-[0.25em] mb-4 text-sm">Nuestra Identidad</p>
                    <h1 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tight">Quiénes <span className="text-primary">Somos</span></h1>
                    <p className="max-w-3xl mx-auto text-white/70 text-lg md:text-xl font-medium leading-relaxed">
                        Una organización líder dedicada a potenciar el éxito empresarial mediante soluciones estratégicas
                        de consultoría y formación técnica de alto nivel.
                    </p>
                </div>
            </section>

            {/* Our Mission/Vision/Values - Redesigned Section */}
            <section className="py-32 bg-[#F8FAFC]">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-4xl md:text-5xl font-black text-secondary uppercase tracking-tighter mb-6">
                            Base de <span className="text-primary italic">Excelencia</span>
                        </h2>
                        <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-8"></div>
                        <p className="text-secondary/50 font-medium text-lg leading-relaxed">
                            Nuestra brújula estratégica se basa en principios sólidos que garantizan resultados medibles y transformadores para cada uno de nuestros socios comerciales.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            {
                                title: "Nuestro Propósito",
                                desc: "Facilitar la excelencia operativa y el cumplimiento normativo mediante la transferencia de conocimiento experto.",
                                icon: <Target className="w-10 h-10" />,
                                color: "bg-primary/20",
                                iconColor: "text-primary"
                            },
                            {
                                title: "Nuestra Visión",
                                desc: "Ser el referente regional en consultoría de sistemas de gestión, reconocidos por nuestra innovación y resultados sostenibles.",
                                icon: <Eye className="w-10 h-10" />,
                                color: "bg-secondary text-white",
                                iconColor: "text-primary"
                            },
                            {
                                title: "Nuestros Valores",
                                desc: "Integridad, excelencia técnica, compromiso absoluto y pasión innegable por la mejora continua en cada proyecto.",
                                icon: <Heart className="w-10 h-10" />,
                                color: "bg-white",
                                iconColor: "text-primary"
                            }
                        ].map((item, i) => (
                            <div
                                key={i}
                                className={`group p-12 rounded-[50px] shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-black/5 hover:translate-y-[-15px] hover:shadow-2xl transition-all duration-700 flex flex-col items-center text-center relative overflow-hidden ${item.color === 'bg-secondary text-white' ? 'bg-secondary text-white' : 'bg-white text-secondary'}`}
                            >
                                <div className={`w-24 h-24 rounded-3xl flex items-center justify-center mb-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-[360deg] ${item.color === 'bg-secondary text-white' ? 'bg-white/10' : 'bg-[#F9FBE7]'}`}>
                                    <div className={`${item.iconColor} transform transition-transform duration-700 group-hover:scale-125`}>
                                        {item.icon}
                                    </div>
                                </div>
                                <h4 className={`font-black text-2xl uppercase tracking-tighter mb-6 ${item.color === 'bg-secondary text-white' ? 'text-primary' : 'text-secondary'}`}>
                                    {item.title}
                                </h4>
                                <p className={`font-medium leading-relaxed text-lg transition-colors ${item.color === 'bg-secondary text-white' ? 'text-white/70' : 'text-secondary/60'}`}>
                                    {item.desc}
                                </p>

                                {/* Geometric Accent */}
                                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/30 transition-all"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Requested Specialists Section */}
            <SpecialistsSection />

            {/* Partners/Clients Section - Redesigned Carousel */}
            <section className="py-32 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-black">
                            EMPRESAS QUE CONFÍAN EN <span className="text-primary italic">NOSOTROS</span>
                        </h3>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                    </div>

                    <div className="relative group">
                        <div className="flex overflow-hidden relative">
                            {/* Infinite Marquee Animation with GSAP or CSS */}
                            <div className="flex animate-marquee items-center gap-24 md:gap-32 py-10 whitespace-nowrap min-w-full">
                                {[
                                    "Logo-grupo-Centenario.png",
                                    "Logo_Bureau_Veritas.svg.png",
                                    "logo-a-color_Mesa-de-trabajo-1-1-1.png",
                                    "yanacocha-logo.png",
                                    "nxtdried_full_positivo.png",
                                    "macropolis_01_180x180.png",
                                    "logo_alta.png",
                                    "logo-grc-risk-web.png",
                                    "logo-gomez-yagui-a.png",
                                    "dc-superlotes-logo.png",
                                    "VIHAG-300x122.jpg",
                                    "ob1_constructora_logo.jpg",
                                    "samitex.jpg",
                                    "unnamed.jpg"
                                ].map((img, i) => (
                                    <div key={i} className="flex-shrink-0 w-64 md:w-80 px-8 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
                                        <img
                                            src={`/Imágenes/Logos de clientes/${img}`}
                                            alt="Cliente APM"
                                            className="h-20 md:h-28 w-auto object-contain mx-auto transition-transform group-hover:scale-110"
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Duplicate for infinite effect */}
                            <div className="flex animate-marquee items-center gap-24 md:gap-32 py-10 whitespace-nowrap min-w-full">
                                {[
                                    "Logo-grupo-Centenario.png",
                                    "Logo_Bureau_Veritas.svg.png",
                                    "logo-a-color_Mesa-de-trabajo-1-1-1.png",
                                    "yanacocha-logo.png",
                                    "nxtdried_full_positivo.png",
                                    "macropolis_01_180x180.png",
                                    "logo_alta.png",
                                    "logo-grc-risk-web.png",
                                    "logo-gomez-yagui-a.png",
                                    "dc-superlotes-logo.png",
                                    "VIHAG-300x122.jpg",
                                    "ob1_constructora_logo.jpg",
                                    "samitex.jpg",
                                    "unnamed.jpg"
                                ].map((img, i) => (
                                    <div key={i} className="flex-shrink-0 w-64 md:w-80 px-8 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
                                        <img
                                            src={`/Imágenes/Logos de clientes/${img}`}
                                            alt="Cliente APM"
                                            className="h-20 md:h-28 w-auto object-contain mx-auto transition-transform group-hover:scale-110"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Mask Gradients for smooth edges */}
                        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
                        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
                    </div>
                </div>

                <style>{`
                    @keyframes marquee {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-100%); }
                    }
                    .animate-marquee {
                        animation: marquee 40s linear infinite;
                    }
                    .animate-marquee:hover {
                        animation-play-state: paused;
                    }
                `}</style>
            </section>
        </div>
    );
};

export default About;
