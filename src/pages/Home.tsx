import React from 'react';
import SyntheticHero from '../components/ui/synthetic-hero';

const Home = () => {
    return (
        <>
            <SyntheticHero
                title="Potenciamos organizaciones con normas internacionales, sostenibilidad e innovación"
                description="Transformamos organizaciones a través de la formación técnica especializada y la consultoría estratégica de alto impacto."
                badgeText="Líderes en Consultoría"
                badgeLabel="APM GROUP"
                ctaButtons={[
                    { text: "DESCARGAR BROCHURE", href: "/Herramientas/Brochure APM __.pdf", primary: true },
                    { text: "NUESTROS SERVICIOS", href: "#pilares", primary: false }
                ]}
                microDetails={[
                    "Certificaciones ISO",
                    "Mejora Continua",
                    "Estrategia de Negocio"
                ]}
            />

            {/* Section: Pilares de Servicio */}
            <section id="pilares" className="py-24 md:py-32 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <p className="uppercase font-bold text-primary tracking-[0.25em] mb-4 text-sm">Excelencia en Soluciones</p>
                    <h2 className="text-4xl md:text-5xl font-black text-secondary mb-8 leading-tight uppercase tracking-wide">Nuestros Pilares de <span className="text-primary">Servicio</span></h2>
                    <div className="w-24 h-1.5 bg-primary mx-auto mb-20 rounded-full"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto px-4">
                        {/* Consultoría */}
                        <div className="bg-white p-12 rounded-[50px] shadow-[0_10px_60px_rgba(0,0,0,0.03)] border-2 border-primary/80 hover:translate-y-[-20px] hover:shadow-[0_40px_100px_rgba(0,0,0,0.1)] transition-all duration-700 flex flex-col items-center group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -z-0"></div>
                            <div className="relative z-10 flex flex-col items-center">
                                <div className="w-24 h-24 bg-[#F9FBE7] rounded-3xl flex items-center justify-center mb-10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:rotate-6 group-hover:scale-110">
                                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 16 16"><path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zm-3 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V7zm-3 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-4zM2 13a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" /></svg>
                                </div>
                                <h3 className="text-2xl font-black mb-6 uppercase tracking-tight text-secondary">Consultoría</h3>
                                <p className="text-gray-500 leading-relaxed mb-10 text-base font-medium text-center">Diseñamos estrategias de alto impacto alineadas a estándares globales para optimizar procesos y potenciar el rendimiento organizacional sostenible.</p>
                                <a href="/servicios" className="text-primary font-black uppercase tracking-widest flex items-center gap-3 hover:translate-x-2 transition-all text-xs">
                                    Saber más <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" /></svg>
                                </a>
                            </div>
                        </div>

                        {/* Auditoría */}
                        <div className="bg-white p-12 rounded-[50px] shadow-[0_10px_60px_rgba(0,0,0,0.03)] border-2 border-primary/80 hover:translate-y-[-20px] hover:shadow-[0_40px_100px_rgba(0,0,0,0.1)] transition-all duration-700 flex flex-col items-center group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -z-0"></div>
                            <div className="relative z-10 flex flex-col items-center">
                                <div className="w-24 h-24 bg-[#F9FBE7] rounded-3xl flex items-center justify-center mb-10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:rotate-6 group-hover:scale-110">
                                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 16 16"><path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" /><path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" /></svg>
                                </div>
                                <h3 className="text-2xl font-black mb-6 uppercase tracking-tight text-secondary">Auditoría</h3>
                                <p className="text-gray-500 leading-relaxed mb-10 text-base font-medium text-center">Evaluación técnica experta para garantizar el cumplimiento normativo internacional y fomentar una cultura corporativa de excelencia comprobable.</p>
                                <a href="/servicios" className="text-primary font-black uppercase tracking-widest flex items-center gap-3 hover:translate-x-2 transition-all text-xs">
                                    Saber más <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" /></svg>
                                </a>
                            </div>
                        </div>

                        {/* Formación */}
                        <div className="bg-white p-12 rounded-[50px] shadow-[0_10px_60px_rgba(0,0,0,0.03)] border-2 border-primary/80 hover:translate-y-[-20px] hover:shadow-[0_40px_100px_rgba(0,0,0,0.1)] transition-all duration-700 flex flex-col items-center group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -z-0"></div>
                            <div className="relative z-10 flex flex-col items-center">
                                <div className="w-24 h-24 bg-[#F9FBE7] rounded-3xl flex items-center justify-center mb-10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:rotate-6 group-hover:scale-110">
                                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 16 16"><path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5zM8 8.46 1.75 5.96 8 3.048l6.25 2.912L8 8.46z" /><path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .326.656l1.7.5a.5.5 0 0 0 .656-.326l.5-1.7a.5.5 0 0 0-.326-.656l-1.7-.5zm3.972 1.884a.5.5 0 0 0-.648.343l-.5 1.75a.5.5 0 0 0 .343.648l1.75.5a.5.5 0 0 0 .648-.343l.5-1.75a.5.5 0 0 0-.343-.648l-1.75-.5z" /></svg>
                                </div>
                                <h3 className="text-2xl font-black mb-6 uppercase tracking-tight text-secondary">Formación</h3>
                                <p className="text-gray-500 leading-relaxed mb-10 text-base font-medium text-center">Programas académicos de vanguardia diseñados para potenciar el talento humano y transferir conocimientos críticos que impulsan el éxito del negocio.</p>
                                <a href="/cursos" className="text-primary font-black uppercase tracking-widest flex items-center gap-3 hover:translate-x-2 transition-all text-xs">
                                    Saber más <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" /></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interactive Webinar Section */}
            <section className="bg-secondary text-white py-24 md:py-32 m-8 md:m-16 rounded-[60px] relative overflow-hidden group">
                <div className="absolute inset-0 z-0">
                    <img src="/Imágenes/Webinar.jpg" alt="Webinar APM" className="w-full h-full object-cover opacity-30 transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/80 to-transparent"></div>
                </div>

                <div className="container mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
                    <div className="lg:col-span-7">
                        <div className="flex items-center gap-4 mb-10">
                            <span className="bg-primary text-black px-5 py-2 rounded-lg text-xs font-black uppercase tracking-widest inline-block animate-pulse">WEBINARS GRATUITOS</span>
                            <span className="text-white/40 font-bold text-xs uppercase tracking-widest">2 veces al mes</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black leading-[0.9] mb-8 uppercase tracking-tighter">Webinars <br /><span className="text-primary italic">Estratégicos.</span></h2>
                        <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl font-medium">
                            Únete a nuestras exclusivas sesiones vía <span className="text-white font-bold">Zoom</span> para dominar las últimas tendencias en normativas internacionales y gestión de excelencia operativa.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                            <div className="flex items-start gap-4 p-6 bg-white/5 rounded-3xl border border-white/10 hover:border-primary/50 transition-all">
                                <div className="bg-primary/20 p-3 rounded-2xl">
                                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                                <div>
                                    <p className="text-white font-black text-sm uppercase tracking-wider mb-1">Horario Fijo</p>
                                    <p className="text-white/40 text-xs font-bold leading-none">19:00 HRS (GMT-5)</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-6 bg-white/5 rounded-3xl border border-white/10 hover:border-primary/50 transition-all">
                                <div className="bg-primary/20 p-3 rounded-2xl">
                                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                                </div>
                                <div>
                                    <p className="text-white font-black text-sm uppercase tracking-wider mb-1">Entorno Digital</p>
                                    <p className="text-white/40 text-xs font-bold leading-none">PLATAFORMA ZOOM</p>
                                </div>
                            </div>
                        </div>

                        <button className="px-10 py-6 bg-primary text-black rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-[0_20px_40px_rgba(178,197,53,0.3)] flex items-center gap-3">
                            INGRESAR AL PRÓXIMO WEBINAR AQUÍ <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                        </button>
                    </div>

                    <div className="lg:col-span-5 bg-white/5 border border-white/10 backdrop-blur-2xl p-10 md:p-14 rounded-[40px] text-center shadow-2xl relative">
                        <h4 className="text-2xl font-black uppercase tracking-tight mb-8">Calendario de <span className="text-primary italic">Marzo</span></h4>

                        <div className="space-y-6">
                            {[
                                { day: "14", month: "MAR", title: "Gestión de Riesgos ISO 31000", time: "19:00 PM" },
                                { day: "28", month: "MAR", title: "Cultura de Excelencia Operativa", time: "19:00 PM" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-6 items-center p-6 bg-black/20 rounded-3xl border border-white/5 hover:border-primary/20 transition-all cursor-default">
                                    <div className="bg-white text-secondary w-16 h-16 rounded-2xl flex flex-col items-center justify-center flex-shrink-0 shadow-lg">
                                        <span className="text-[10px] font-black uppercase leading-none mb-1">{item.month}</span>
                                        <span className="text-2xl font-black leading-none">{item.day}</span>
                                    </div>
                                    <div className="text-left">
                                        <h5 className="font-black text-sm uppercase leading-tight mb-1">{item.title}</h5>
                                        <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">{item.time} - VIA ZOOM</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <p className="mt-10 text-white/30 text-[10px] font-bold uppercase tracking-widest">Cupos limitados por sesión</p>
                    </div>
                </div>
            </section>

            {/* Virtual Campus Promo Section */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="bg-secondary p-12 md:p-24 rounded-[60px] relative overflow-hidden flex flex-col lg:flex-row items-center gap-16">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>

                        <div className="lg:w-1/2 relative z-10 text-center lg:text-left">
                            <span className="text-primary font-black text-[10px] uppercase tracking-[0.4em] mb-6 block">EXPERIENCIA E-LEARNING</span>
                            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8">
                                Domina el <br /> Éxito desde <span className="text-primary italic">Nuestro Campus.</span>
                            </h2>
                            <p className="text-white/50 text-lg font-medium leading-relaxed mb-10">
                                Contamos con una plataforma de cursos certificados con acceso 24/7. Aprende a tu propio ritmo con clases grabadas de alta fidelidad, disponibles en cualquier dispositivo.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
                                {[
                                    { icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, text: "Registro Gratis" },
                                    { icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, text: "Clases 24/7" },
                                    { icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, text: "Certificado Oficial" }
                                ].map((badge, i) => (
                                    <div key={i} className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 text-[10px] font-black uppercase text-white/70">
                                        <span className="text-primary">{badge.icon}</span>
                                        {badge.text}
                                    </div>
                                ))}
                            </div>
                            <a href="/cursos" className="inline-block px-12 py-6 bg-primary text-secondary rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-2xl">
                                DESCUBRE LA PLATAFORMA
                            </a>
                        </div>

                        <div className="lg:w-1/2 relative group">
                            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border border-white/10 transform lg:rotate-3 group-hover:rotate-0 transition-transform duration-700">
                                <img src="/Imágenes/Formación.jpg" alt="Campus Virtual APM" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                                <div className="absolute inset-0 bg-secondary/40 flex items-center justify-center scale-0 group-hover:scale-100 transition-transform">
                                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-secondary shadow-2xl animate-bounce">
                                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                    </div>
                                </div>
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
